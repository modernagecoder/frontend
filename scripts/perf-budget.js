#!/usr/bin/env node
/**
 * perf-budget.js
 * ------------------------------------------------------------------
 * Measures what a first visit to each page type has to download before
 * it can render, against the budgets in astraseo.md:
 *
 *   essential compressed JavaScript  <= 150 KB
 *   initial compressed CSS           <=  80 KB
 *   hero image                       <= 150 KB
 *   initial transfer (html+css+js+hero, before video/payment) <= 1 MB
 *
 * "Compressed" is gzip at level 6 over the files on disk, which is what
 * Netlify serves. Third-party scripts (gtag, Razorpay, Lenis from unpkg)
 * are listed by URL but not sized: they are not on disk. Minification
 * happens at deploy (scripts/minify.js), so two figures are given for CSS
 * and JS: as committed, and as the minifier would ship them.
 *
 *   node scripts/perf-budget.js                       # table
 *   node scripts/perf-budget.js --md > report.md      # markdown table
 */
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const CleanCSS = require('clean-css');
const { minify: terser } = require('terser');

const ROOT = path.join(__dirname, '..');
const MD = process.argv.includes('--md');
const BUDGET = { js: 150 * 1024, css: 80 * 1024, hero: 150 * 1024, initial: 1024 * 1024 };

const PAGES = [
  ['Homepage', 'src/pages/index.html'],
  ['Catalog /courses', 'src/pages/course.html'],
  ['Book demo', 'src/pages/book-demo.html'],
  ['Pricing', 'src/pages/pricing.html'],
  ['Course page', 'content/courses/generated/python-complete-masterclass-teens/index.html'],
  ['Blog post', 'content/blog/generated/is-coding-good-for-kids/index.html'],
  ['Resource chapter', 'content/resources/generated/python/conditional-statements/index.html'],
  ['International (UK)', 'src/pages/coding-classes-in-united-kingdom.html'],
];

const gz = (buf) => zlib.gzipSync(buf, { level: 6 }).length;
const kb = (n) => (n / 1024).toFixed(1);
function onDisk(url) {
  const clean = url.replace(/[?#].*$/, '');
  const map = [['/css/', 'src/css/'], ['/js/', 'src/js/'], ['/images/', 'public/images/'], ['/content/', 'content/']];
  for (const [p, d] of map) if (clean.startsWith(p)) return path.join(ROOT, d, clean.slice(p.length));
  if (clean.startsWith('/')) return path.join(ROOT, clean.slice(1));
  return null;
}

async function measure(label, rel) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) return { label, missing: rel };
  const html = fs.readFileSync(file, 'utf8');
  const head = html.slice(0, html.indexOf('</head>'));
  // stylesheets and scripts referenced anywhere on the page (deferred scripts still download)
  const css = [...new Set([...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)].map((m) => m[1]))];
  const js = [...new Set([...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map((m) => m[1]))];
  const third = [...css, ...js].filter((u) => /^https?:/.test(u));
  let cssRaw = 0, cssMin = 0, jsRaw = 0, jsMin = 0;
  const missing = [];
  for (const u of css) {
    const f = onDisk(u); if (!f) continue;
    if (!fs.existsSync(f)) { missing.push(u); continue; }
    const src = fs.readFileSync(f, 'utf8');
    cssRaw += gz(Buffer.from(src));
    const out = new CleanCSS({ level: 1 }).minify(src).styles;
    cssMin += gz(Buffer.from(out || src));
  }
  for (const u of js) {
    const f = onDisk(u); if (!f) continue;
    if (!fs.existsSync(f)) { missing.push(u); continue; }
    const src = fs.readFileSync(f, 'utf8');
    jsRaw += gz(Buffer.from(src));
    let out = src;
    if (!/\.min\.js$/.test(f)) { try { out = (await terser(src, { compress: { drop_console: true }, mangle: true })).code || src; } catch (e) { /* keep raw */ } }
    jsMin += gz(Buffer.from(out));
  }
  // the first image inside <main> (or first non-logo image) as the hero
  const mainStart = Math.max(0, html.indexOf('<main'));
  const imgs = [...html.slice(mainStart).matchAll(/<img\b[^>]*src="([^"]+)"[^>]*>/g)].filter((m) => !/logo/i.test(m[0]));
  let hero = 0, heroUrl = '';
  if (imgs.length) {
    heroUrl = imgs[0][1];
    const f = onDisk(heroUrl);
    if (f && fs.existsSync(f)) hero = fs.statSync(f).size;
  }
  const htmlGz = gz(Buffer.from(html));
  const fonts = (head.match(/fonts\.googleapis\.com/g) || []).length > 0;
  return { label, rel, htmlGz, cssRaw, cssMin, jsRaw, jsMin, hero, heroUrl, initial: htmlGz + cssMin + jsMin + hero, third, missing, fonts, cssCount: css.length, jsCount: js.length };
}

(async () => {
  const rows = [];
  for (const [label, rel] of PAGES) rows.push(await measure(label, rel));
  const flag = (v, b) => (v > b ? ' OVER' : '');
  if (MD) {
    console.log('| Page | HTML gz | CSS gz (min) | JS gz (min) | Hero image | Initial total | Third-party scripts |');
    console.log('|---|---:|---:|---:|---:|---:|---|');
    for (const r of rows) {
      if (r.missing && !r.rel) { console.log(`| ${r.label} | missing: ${r.missing} | | | | | |`); continue; }
      console.log(`| ${r.label} | ${kb(r.htmlGz)} KB | ${kb(r.cssRaw)} (${kb(r.cssMin)}) KB${flag(r.cssMin, BUDGET.css)} | ${kb(r.jsRaw)} (${kb(r.jsMin)}) KB${flag(r.jsMin, BUDGET.js)} | ${kb(r.hero)} KB${flag(r.hero, BUDGET.hero)} ${r.heroUrl ? '`' + r.heroUrl.split('/').pop() + '`' : ''} | ${kb(r.initial)} KB${flag(r.initial, BUDGET.initial)} | ${r.third.map((u) => u.replace(/^https?:\/\//, '').split('/')[0]).join(', ') || 'none'}${r.missing.length ? ' (missing on disk: ' + r.missing.join(', ') + ')' : ''} |`);
    }
    console.log(`\nBudgets: JS ${kb(BUDGET.js)} KB, CSS ${kb(BUDGET.css)} KB, hero ${kb(BUDGET.hero)} KB, initial ${kb(BUDGET.initial)} KB (gzip level 6; "min" = as the deploy minifier ships it).`);
  } else {
    for (const r of rows) {
      if (r.missing && !r.rel) { console.log(`${r.label}: missing ${r.missing}`); continue; }
      console.log(`${r.label.padEnd(20)} html ${kb(r.htmlGz).padStart(6)}  css ${kb(r.cssMin).padStart(6)}${flag(r.cssMin, BUDGET.css)}  js ${kb(r.jsMin).padStart(6)}${flag(r.jsMin, BUDGET.js)}  hero ${kb(r.hero).padStart(6)}${flag(r.hero, BUDGET.hero)}  initial ${kb(r.initial).padStart(7)}${flag(r.initial, BUDGET.initial)}  files css:${r.cssCount} js:${r.jsCount} 3rd:${r.third.length}${r.missing.length ? '  MISSING ' + r.missing.join(',') : ''}`);
    }
  }
})();
