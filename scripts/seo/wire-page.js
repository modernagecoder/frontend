#!/usr/bin/env node
/**
 * Wire one hand-built page into every place it must exist or it 404s in production:
 *   _redirects (page + .md twin, inserted after an existing sibling's lines),
 *   netlify.toml (two [[redirects]] blocks after the sibling's), sitemap.xml (<url>
 *   cloned from the sibling with today's lastmod), llms.txt (a line after a given anchor line).
 *
 *   node scripts/seo/wire-page.js <slug> --after <sibling-slug> --comment "<netlify comment>" \
 *        --llms-after "<exact llms.txt line to insert after>" --llms "<line text without the URL>"
 *
 * Idempotent: a file that already carries the slug is left alone. Prints what it did.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const BASE = 'https://learn.modernagecoders.com/';
const argv = process.argv.slice(2);
const slug = argv[0];
const opt = (k) => { const i = argv.indexOf(k); return i === -1 ? '' : argv[i + 1]; };
const after = opt('--after'), comment = opt('--comment') || ('Page: ' + slug), llmsAfter = opt('--llms-after'), llmsText = opt('--llms');
if (!slug || !after) { console.error('usage: wire-page.js <slug> --after <sibling-slug> [--comment ..] [--llms-after .. --llms ..]'); process.exit(1); }
if (!fs.existsSync(path.join(ROOT, 'src', 'pages', slug + '.html'))) { console.error('no such page: src/pages/' + slug + '.html'); process.exit(1); }
const today = new Date().toISOString().slice(0, 10);
const rd = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const wr = (f, s) => fs.writeFileSync(path.join(ROOT, f), s);
const done = [];

let r = rd('_redirects');
if (!r.includes('/' + slug + ' ')) {
  const a = '/' + after + '.md /src/pages/' + after + '.md 200';
  if (!r.includes(a)) throw new Error('_redirects: sibling lines not found for ' + after);
  r = r.replace(a, a + '\n/' + slug + ' /src/pages/' + slug + '.html 200\n/' + slug + '.md /src/pages/' + slug + '.md 200');
  wr('_redirects', r); done.push('_redirects');
}
let t = rd('netlify.toml');
if (!t.includes('from = "/' + slug + '"')) {
  const a = '  from = "/' + after + '.md"\n  to = "/src/pages/' + after + '.md"\n  status = 200\n';
  if (!t.includes(a)) throw new Error('netlify.toml: sibling block not found for ' + after);
  t = t.replace(a, a + '\n# ' + comment + '\n[[redirects]]\n  from = "/' + slug + '"\n  to = "/src/pages/' + slug + '.html"\n  status = 200\n\n[[redirects]]\n  from = "/' + slug + '.md"\n  to = "/src/pages/' + slug + '.md"\n  status = 200\n');
  wr('netlify.toml', t); done.push('netlify.toml');
}
let s = rd('sitemap.xml');
if (!s.includes(BASE + slug + '<')) {
  const i = s.indexOf('<loc>' + BASE + after + '</loc>');
  if (i === -1) throw new Error('sitemap.xml: sibling url not found for ' + after);
  const end = s.indexOf('</url>', i) + '</url>'.length;
  const block = s.slice(s.lastIndexOf('<url>', i), end).replace(after, slug).replace(/<lastmod>[^<]*<\/lastmod>/, '<lastmod>' + today + '</lastmod>');
  s = s.slice(0, end) + '\n  ' + block + s.slice(end); wr('sitemap.xml', s); done.push('sitemap.xml');
}
if (llmsAfter && llmsText) {
  let l = rd('llms.txt');
  if (!l.includes(BASE + slug)) {
    if (!l.includes(llmsAfter)) throw new Error('llms.txt: anchor line not found');
    l = l.replace(llmsAfter, llmsAfter + '\n- ' + llmsText + ': ' + BASE + slug); wr('llms.txt', l); done.push('llms.txt');
  }
}
console.log('wired /' + slug + ': ' + (done.join(', ') || 'nothing to do (already wired)'));
