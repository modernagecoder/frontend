#!/usr/bin/env node
/**
 * snapshot-resolution.js
 *
 * Proof harness for redirect-file edits. Resolves a comprehensive set of URLs
 * through the full routing chain (same engine as check-all-links.js: static
 * file wins, then first matching rule across _redirects THEN netlify.toml,
 * following rewrites and redirects) and writes one line per URL:
 *
 *     <url> => <ok|BROKEN> <final target or reason>
 *
 * Run it before an edit and after, then diff the two files. A redirect edit is
 * safe to push exactly when the diff is empty. This exists because a redirect
 * mistake here has taken production down before (2026-04-30), so redirect
 * files get proof, not confidence.
 *
 * The URL set is everything we can enumerate:
 *   - every unique internal href/src on all 598 pages
 *   - every literal `from` path in both rule files
 *   - a probe for every splat rule (* replaced with a sentinel segment)
 *
 * Usage: node scripts/snapshot-resolution.js <output-file>
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES = path.join(ROOT, 'src/pages');
const OUT = process.argv[2];
if (!OUT) { console.error('usage: node scripts/snapshot-resolution.js <output-file>'); process.exit(2); }

// ---------------- rule parsing (identical semantics to check-all-links.js) ----
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
    out.push({ from, to, status });
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
    if (from && to) out.push({ from, to, status });
  }
  return out;
}

// _redirects is processed before netlify.toml. Verified against production.
const RULES = [...parseRedirectsFile(), ...parseNetlifyToml()];

// ------------------------- static files, case-exact (prod is Linux) ----------
const dirCache = new Map();
function listDir(dir) {
  if (dirCache.has(dir)) return dirCache.get(dir);
  let set;
  try { set = new Set(fs.readdirSync(path.join(ROOT, dir))); } catch (e) { set = null; }
  dirCache.set(dir, set);
  return set;
}
function isFile(p) {
  const norm = p.replace(/\\/g, '/').replace(/^\//, '');
  const idx = norm.lastIndexOf('/');
  const dir = idx === -1 ? '.' : norm.slice(0, idx);
  const base = idx === -1 ? norm : norm.slice(idx + 1);
  const names = listDir(dir);
  if (!names || !names.has(base)) return false;
  try { return fs.statSync(path.join(ROOT, norm)).isFile(); } catch (e) { return false; }
}
function servesStatic(urlPath) {
  const clean = urlPath.replace(/^\//, '');
  if (!clean) return isFile('index.html') ? 'index.html' : null;
  if (isFile(clean)) return clean;
  if (isFile(clean + '/index.html')) return clean + '/index.html';
  if (isFile(clean + '.html')) return clean + '.html';
  return null;
}

// ------------------------------- matching ------------------------------------
function matchRule(rule, urlPath) {
  const { from } = rule;
  if (from.includes('*')) {
    const idx = from.indexOf('*');
    const prefix = from.slice(0, idx);
    const suffix = from.slice(idx + 1);
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

function resolve(urlPath) {
  let current = urlPath;
  for (let hop = 0; hop < 8; hop++) {
    if (current.startsWith('http')) return 'ok external';
    const stat = servesStatic(current);
    if (stat) return 'ok ' + stat;
    let matched = null;
    for (const rule of RULES) {
      const m = matchRule(rule, current);
      if (m) { matched = { rule, m }; break; }
    }
    if (!matched) return 'BROKEN no-rule-no-file at ' + current;
    if (matched.rule.status === 404) return 'BROKEN 404-catch-all';
    const next = applyRule(matched.rule, matched.m);
    if (next === current) return 'BROKEN self-loop at ' + current;
    current = next;
  }
  return 'BROKEN hop-limit';
}

// ------------------------------- URL corpus ----------------------------------
const urls = new Set();

// every internal href/src across all pages
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!/node_modules|\.git/.test(p)) walk(p); }
    else if (e.name.endsWith('.html')) {
      const html = fs.readFileSync(p, 'utf8');
      for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
        const raw = m[1];
        if (!raw.startsWith('/') || raw.startsWith('//')) continue;
        const clean = raw.split('#')[0].split('?')[0];
        if (clean && clean !== '/') urls.add(clean);
      }
    }
  }
})(PAGES);

// every literal from-path, plus a probe per splat/placeholder rule
for (const r of RULES) {
  if (r.from.includes('*')) {
    urls.add(r.from.replace('*', 'zz-probe-segment'));
  } else if (r.from.includes(':')) {
    urls.add(r.from.replace(/:[a-z]+/g, 'zz-probe'));
  } else {
    urls.add(r.from);
  }
}

// ------------------------------- emit ----------------------------------------
const lines = [...urls].sort().map(u => u + ' => ' + resolve(u));
fs.writeFileSync(OUT, lines.join('\n') + '\n', 'utf8');
console.log('Rules loaded: ' + RULES.length);
console.log('URLs resolved: ' + lines.length);
console.log('Snapshot written to ' + OUT);
