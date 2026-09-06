#!/usr/bin/env node
/**
 * page-manifest.js
 * ------------------------------------------------------------------
 * The published-page manifest: every static page that has a clean route,
 * with its file, indexability, canonical and sitemap membership, derived
 * from the things that actually decide those facts (_redirects, the
 * page's own <head>, sitemap.xml). Nothing here is hand-maintained.
 *
 * Used by verify-sitemap.js to fail the build when a routed, indexable
 * page is missing from the sitemap or its canonical disagrees with its
 * route. Print it yourself with:
 *
 *   node scripts/page-manifest.js            # table
 *   node scripts/page-manifest.js --json     # JSON
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BASE = 'https://learn.modernagecoders.com';

function norm(p) {
  // path only, no host, no query, no trailing slash (but keep "/")
  let s = String(p || '').trim();
  s = s.replace(/^https?:\/\/[^/]+/i, '');
  s = s.replace(/[?#].*$/, '');
  if (s.length > 1) s = s.replace(/\/+$/, '');
  return s || '/';
}

function readRoutes() {
  // clean route -> /src/pages/<file>.html, from the 200 rewrites in _redirects
  const text = fs.readFileSync(path.join(ROOT, '_redirects'), 'utf8');
  const byFile = new Map(); // file -> Set(routes)
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const parts = line.split(/\s+/);
    const [from, to, status] = parts;
    if (status !== '200') continue;
    if (!/^\/src\/pages\/[^*:]+\.html$/.test(to || '')) continue;
    if (/[*:]/.test(from)) continue;
    if (!byFile.has(to)) byFile.set(to, new Set());
    byFile.get(to).add(norm(from));
  }
  return byFile;
}

function readHead(file) {
  const html = fs.readFileSync(path.join(ROOT, file.replace(/^\//, '')), 'utf8');
  const head = html.slice(0, html.indexOf('</head>') > 0 ? html.indexOf('</head>') : 20000);
  const robots = (head.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i) || [])[1] || '';
  const canonical = (head.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) || [])[1] || '';
  const title = (head.match(/<title>([^<]*)<\/title>/i) || [])[1] || '';
  return { robots, canonical, title: title.trim() };
}

function buildManifest() {
  const sitemapXml = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  const inSitemap = new Set([...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => norm(m[1])));
  const routes = readRoutes();
  const out = [];
  for (const [file, routeSet] of routes) {
    const rel = file.replace(/^\//, '');
    if (!fs.existsSync(path.join(ROOT, rel))) continue;
    const { robots, canonical, title } = readHead(file);
    const routeList = [...routeSet];
    const indexable = !/noindex/i.test(robots);
    const canonPath = canonical ? norm(canonical) : '';
    const canonicalMatches = !canonical || routeList.includes(canonPath) || (canonPath === '/' && routeList.includes('/'));
    out.push({
      file,
      routes: routeList,
      url: BASE + (routeList.includes(canonPath) ? canonPath : routeList[0]),
      title,
      type: /^\/src\/pages\/(coding-classes-in|best-coding-class-in|coding-classes-near)-/.test(file) ? 'local'
        : /\/blog\//.test(file) ? 'blog' : 'static',
      indexable,
      robots,
      canonical,
      canonicalMatches,
      inSitemap: routeList.some((r) => inSitemap.has(r)) || (canonPath && inSitemap.has(canonPath)),
    });
  }
  out.sort((a, b) => a.url.localeCompare(b.url));
  return out;
}

module.exports = { buildManifest, norm };

if (require.main === module) {
  const m = buildManifest();
  if (process.argv.includes('--json')) { console.log(JSON.stringify(m, null, 2)); return; }
  const idx = m.filter((p) => p.indexable).length;
  console.log(`manifest: ${m.length} routed static pages · ${idx} indexable · ${m.filter((p) => p.inSitemap).length} in sitemap · ${m.filter((p) => !p.canonicalMatches).length} canonical mismatches`);
  for (const p of m) {
    if (p.indexable && p.inSitemap && p.canonicalMatches) continue;
    console.log(`${p.indexable ? 'index  ' : 'NOINDEX'} ${p.inSitemap ? 'sitemap' : 'MISSING'} ${p.canonicalMatches ? 'canon-ok' : 'CANON-MISMATCH'}  ${p.routes[0]}  -> ${p.file}${p.canonicalMatches ? '' : '  canonical=' + p.canonical}`);
  }
}
