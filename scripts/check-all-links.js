#!/usr/bin/env node
/**
 * check-all-links.js
 *
 * Site-wide internal link audit. Answers one question honestly: if a visitor
 * clicks this link in production, do they get a page or a 404?
 *
 * It does NOT just check whether a file exists, because almost nothing on this
 * site is served from the path in the href. It reimplements Netlify's
 * resolution order:
 *
 *   1. a real static file at that path wins (publish dir is the repo root)
 *   2. otherwise the first matching redirect rule applies, in file order
 *   3. rewrites (200) and redirects (301) are followed, up to a hop limit
 *   4. the final target must be a real file
 *
 * Rules come from BOTH _redirects and netlify.toml, since the site keeps them
 * in sync and either can be the one that saves a link.
 *
 * Splat rules (/courses/* -> /x/:splat) and single-segment placeholders are
 * both handled, because the site uses both and confusing them caused a
 * production outage on 2026-05-06.
 *
 * Usage:
 *   node scripts/check-all-links.js            report broken links
 *   node scripts/check-all-links.js --all      also list every checked target
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES = path.join(ROOT, 'src/pages');
const VERBOSE = process.argv.includes('--all');

// ------------------------------------------------------------------ rules
function parseRedirectsFile() {
  const txt = fs.readFileSync(path.join(ROOT, '_redirects'), 'utf8');
  const out = [];
  for (const raw of txt.split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const parts = line.split(/\s+/);
    if (parts.length < 2) continue;
    const [from, to, statusRaw] = parts;
    if (!from.startsWith('/')) continue;
    const status = parseInt((statusRaw || '200').replace('!', ''), 10) || 200;
    out.push({ from, to, status, src: '_redirects' });
  }
  return out;
}

function parseNetlifyToml() {
  const txt = fs.readFileSync(path.join(ROOT, 'netlify.toml'), 'utf8');
  const out = [];
  const blocks = txt.split(/\[\[redirects\]\]/).slice(1);
  for (const b of blocks) {
    const from = (b.match(/^\s*from\s*=\s*"([^"]*)"/m) || [])[1];
    const to = (b.match(/^\s*to\s*=\s*"([^"]*)"/m) || [])[1];
    const status = parseInt((b.match(/^\s*status\s*=\s*(\d+)/m) || [])[1] || '200', 10);
    if (from && to) out.push({ from, to, status, src: 'netlify.toml' });
  }
  return out;
}

// ORDER MATTERS AND IS NOT OBVIOUS. _redirects is processed before netlify.toml.
// Verified empirically against production rather than assumed: /courses/* sits
// at _redirects:796 (above its own /* 404 at 1329) but at netlify.toml:6278
// (BELOW netlify.toml's /* 404 at 5806). Live checks of
// /courses/ai-ml-masterclass-teens and /blog/topic/python both return real
// pages, which is only possible if _redirects wins.
const RULES = [...parseRedirectsFile(), ...parseNetlifyToml()];

// -------------------------------------------------------------- filesystem
// CASE SENSITIVITY: Netlify serves from Linux, where /Foo.html and /foo.html are
// different files. Windows and macOS are case-insensitive, so fs.statSync happily
// reports a match for the wrong case and the audit silently passes links that
// 404 in production. So existence is answered from exact directory listings,
// never from statSync.
const dirCache = new Map();
function listDir(dir) {
  if (dirCache.has(dir)) return dirCache.get(dir);
  let set;
  try { set = new Set(fs.readdirSync(path.join(ROOT, dir))); }
  catch (e) { set = null; }
  dirCache.set(dir, set);
  return set;
}

const fileCache = new Map();
function isFile(p) {
  if (fileCache.has(p)) return fileCache.get(p);
  const norm = p.replace(/\\/g, '/').replace(/^\//, '');
  const idx = norm.lastIndexOf('/');
  const dir = idx === -1 ? '.' : norm.slice(0, idx);
  const base = idx === -1 ? norm : norm.slice(idx + 1);
  const names = listDir(dir);
  let ok = false;
  if (names && names.has(base)) {
    try { ok = fs.statSync(path.join(ROOT, norm)).isFile(); } catch (e) { ok = false; }
  }
  fileCache.set(p, ok);
  return ok;
}

function servesStatic(urlPath) {
  const clean = urlPath.replace(/^\//, '');
  if (!clean) return isFile('index.html');
  if (isFile(clean)) return clean;
  if (isFile(clean + '/index.html')) return clean + '/index.html';
  if (isFile(clean + '.html')) return clean + '.html';   // Netlify pretty-URL fallback
  return null;
}

// ------------------------------------------------------------------ match
function matchRule(rule, urlPath) {
  const { from } = rule;
  if (from.includes('*')) {
    const idx = from.indexOf('*');
    const prefix = from.slice(0, idx);
    const suffix = from.slice(idx + 1);        // e.g. "/pages/*.png" -> suffix ".png"
    if (!urlPath.startsWith(prefix)) return null;
    if (suffix && !urlPath.endsWith(suffix)) return null;
    const splat = urlPath.slice(prefix.length, suffix ? urlPath.length - suffix.length : undefined);
    return { splat, params: {} };
  }
  if (from.includes(':')) {
    const fSeg = from.split('/').filter(Boolean);
    const uSeg = urlPath.split('/').filter(Boolean);
    if (fSeg.length !== uSeg.length) return null;
    const params = {};
    for (let i = 0; i < fSeg.length; i++) {
      if (fSeg[i].startsWith(':')) params[fSeg[i].slice(1)] = uSeg[i];
      else if (fSeg[i] !== uSeg[i]) return null;
    }
    return { splat: '', params };
  }
  return from === urlPath ? { splat: '', params: {} } : null;
}

function applyRule(rule, m) {
  let to = rule.to.replace(':splat', m.splat);
  for (const [k, v] of Object.entries(m.params)) to = to.replace(':' + k, v);
  return to;
}

// ---------------------------------------------------------------- resolve
const resolveCache = new Map();
function resolve(urlPath) {
  if (resolveCache.has(urlPath)) return resolveCache.get(urlPath);
  let current = urlPath;
  const chain = [];
  for (let hop = 0; hop < 8; hop++) {
    if (current.startsWith('http')) { const r = { ok: true, note: 'external' }; resolveCache.set(urlPath, r); return r; }
    const stat = servesStatic(current);
    if (stat) { const r = { ok: true, target: stat, chain }; resolveCache.set(urlPath, r); return r; }
    let matched = null;
    for (const rule of RULES) {
      const m = matchRule(rule, current);
      if (m) { matched = { rule, m }; break; }
    }
    if (!matched) break;
    if (matched.rule.status === 404) {
      const r = { ok: false, reason: 'hits the /* 404 catch-all', chain };
      resolveCache.set(urlPath, r); return r;
    }
    const next = applyRule(matched.rule, matched.m);
    chain.push(`${matched.rule.from} -> ${next} (${matched.rule.status}, ${matched.rule.src})`);
    if (next === current) break;
    current = next;
  }
  const r = { ok: false, reason: 'no rule and no file', chain, last: current };
  resolveCache.set(urlPath, r);
  return r;
}

// ------------------------------------------------------------------- scan
const htmlFiles = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!/node_modules|\.git/.test(p)) walk(p); }
    else if (e.name.endsWith('.html')) htmlFiles.push(p);
  }
})(PAGES);

const broken = new Map();   // link -> Set(pages)
let totalLinks = 0, uniqueLinks = new Set();

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  const hrefs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(m => m[1]);
  for (const raw of hrefs) {
    if (!raw.startsWith('/')) continue;                 // external, anchors, relative
    if (raw.startsWith('//')) continue;                 // protocol-relative
    const clean = raw.split('#')[0].split('?')[0];
    if (!clean || clean === '/') continue;
    totalLinks++;
    uniqueLinks.add(clean);
    const r = resolve(clean);
    if (!r.ok) {
      if (!broken.has(clean)) broken.set(clean, new Set());
      broken.get(clean).add(rel);
    }
  }
}

// ----------------------------------------------------------------- report
console.log('Scanned ' + htmlFiles.length + ' HTML pages');
console.log('Internal link instances: ' + totalLinks + ', unique targets: ' + uniqueLinks.size);
console.log('Redirect rules loaded: ' + RULES.length + '\n');

if (!broken.size) {
  console.log('No broken internal links.');
} else {
  const rows = [...broken.entries()].sort((a, b) => b[1].size - a[1].size);
  console.log('BROKEN: ' + rows.length + ' unique targets\n');
  for (const [link, pages] of rows) {
    const r = resolve(link);
    console.log('  ' + link);
    console.log('      reason: ' + r.reason);
    if (r.chain && r.chain.length) console.log('      chain:  ' + r.chain.join(' | '));
    console.log('      on ' + pages.size + ' page(s): ' + [...pages].slice(0, 4).map(p => p.replace('src/pages/', '')).join(', ') + (pages.size > 4 ? ' ...' : ''));
    console.log('');
  }
}

if (VERBOSE) {
  console.log('\nAll unique targets:');
  [...uniqueLinks].sort().forEach(l => console.log((resolve(l).ok ? '  ok   ' : '  BAD  ') + l));
}

process.exitCode = broken.size ? 1 : 0;
