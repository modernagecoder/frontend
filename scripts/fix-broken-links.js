#!/usr/bin/env node
/**
 * fix-broken-links.js
 *
 * Repairs the 13 broken internal link targets found by check-all-links.js.
 *
 * Three separate faults, fixed three different ways:
 *
 * 1. MALFORMED CITY URLS (10 targets, ~24 links)
 *    A generator wrote the city DISPLAY name into the URL instead of the slug,
 *    producing /best-coding-class-in-Noida and /best-coding-class-in-Greater Noida
 *    (capitals, and spaces). Someone previously patched exactly two of these,
 *    Bengaluru and New Delhi, after they showed up in Google Search Console;
 *    the rest were missed.
 *    Fixed at source in the HTML so the link is correct with no redirect hop,
 *    AND backed by 301 rules, because external links and search-engine indexes
 *    already point at the broken forms.
 *
 * 2. /best-coding-class-in-howrah (12 pages)
 *    A breadcrumb to a hub page that does not exist. There is no Howrah hub, so
 *    this points at the Kolkata hub, Howrah being part of that metro area.
 *
 * 3. DEAD ASSETS (2 targets)
 *    /assets/favicon.svg on 8 summer camp pages, which is the ONLY favicon link
 *    on those pages, so their favicon is simply broken. Replaced with the real
 *    favicon set the rest of the site uses.
 *    /js/background-canvas.js on one page, referenced by a script tag for a file
 *    that does not exist anywhere in the repo. The tag is removed; the canvas
 *    element it targeted is left alone.
 *
 * Idempotent. Usage: node scripts/fix-broken-links.js [--dry]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES = path.join(ROOT, 'src/pages');
const DRY = process.argv.includes('--dry');

// bad href -> correct href. Targets verified to exist before writing.
const URL_FIXES = {
  '/best-coding-class-in-Noida': '/best-coding-class-in-noida',
  '/best-coding-class-in-Greater Noida': '/best-coding-class-in-greater-noida',
  '/best-coding-class-in-Gurugram': '/best-coding-class-in-gurgaon',
  '/best-coding-class-in-Hyderabad': '/best-coding-class-in-hyderabad',
  '/best-coding-class-in-Navi Mumbai': '/best-coding-class-in-navi-mumbai',
  '/coding-classes-for-la-martiniere-girls-Noida': '/best-coding-class-in-noida',
  '/coding-classes-for-la-martiniere-girls-Greater Noida': '/best-coding-class-in-greater-noida',
  '/coding-classes-for-la-martiniere-girls-Gurugram': '/best-coding-class-in-gurgaon',
  '/coding-classes-for-la-martiniere-girls-Hyderabad': '/best-coding-class-in-hyderabad',
  '/coding-classes-for-la-martiniere-girls-Navi Mumbai': '/best-coding-class-in-navi-mumbai',
  '/best-coding-class-in-howrah': '/best-coding-class-in-kolkata'
};

const FAVICON_OLD = '<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">';
const FAVICON_NEW =
  '<link rel="icon" href="/favicon.ico" type="image/x-icon">\n' +
  '    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">\n' +
  '    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">';

// splat form is required where the bad URL contains a space, because _redirects
// is whitespace delimited and cannot express a space in the `from` column.
const REDIRECTS = [
  ['/best-coding-class-in-Noida', '/best-coding-class-in-noida'],
  ['/best-coding-class-in-Greater*', '/best-coding-class-in-greater-noida'],
  ['/best-coding-class-in-Gurugram', '/best-coding-class-in-gurgaon'],
  ['/best-coding-class-in-Hyderabad', '/best-coding-class-in-hyderabad'],
  ['/best-coding-class-in-Navi*', '/best-coding-class-in-navi-mumbai'],
  ['/coding-classes-for-la-martiniere-girls-Noida', '/best-coding-class-in-noida'],
  ['/coding-classes-for-la-martiniere-girls-Greater*', '/best-coding-class-in-greater-noida'],
  ['/coding-classes-for-la-martiniere-girls-Gurugram', '/best-coding-class-in-gurgaon'],
  ['/coding-classes-for-la-martiniere-girls-Hyderabad', '/best-coding-class-in-hyderabad'],
  ['/coding-classes-for-la-martiniere-girls-Navi*', '/best-coding-class-in-navi-mumbai'],
  ['/best-coding-class-in-howrah', '/best-coding-class-in-kolkata']
];

// ------------------------------------------------------- verify targets first
const names = new Set(fs.readdirSync(PAGES));
const badTargets = [];
for (const t of new Set(Object.values(URL_FIXES))) {
  if (!names.has(t.slice(1) + '.html')) badTargets.push(t);
}
for (const f of ['favicon/favicon-32x32.png', 'favicon/apple-touch-icon.png', 'favicon.ico']) {
  if (!fs.existsSync(path.join(ROOT, 'public', f))) badTargets.push('/' + f);
}
if (badTargets.length) {
  console.error('Refusing to write. These targets do not exist:');
  badTargets.forEach(t => console.error('  ' + t));
  process.exit(1);
}
console.log('All replacement targets verified to exist.\n');

// ------------------------------------------------------------------ HTML pass
let filesTouched = 0, linksFixed = 0, faviconsFixed = 0, scriptsRemoved = 0, labelsFixed = 0;

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

for (const file of walk(PAGES, [])) {
  let html = fs.readFileSync(file, 'utf8');
  const before = html;

  for (const [bad, good] of Object.entries(URL_FIXES)) {
    const needle = 'href="' + bad + '"';
    if (html.includes(needle)) {
      const n = html.split(needle).length - 1;
      html = html.split(needle).join('href="' + good + '"');
      linksFixed += n;
    }
  }

  if (html.includes(FAVICON_OLD)) {
    html = html.split(FAVICON_OLD).join(FAVICON_NEW);
    faviconsFixed++;
  }

  const scriptTag = '<script src="/js/background-canvas.js"></script>';
  if (html.includes(scriptTag)) {
    html = html.split(scriptTag).join('');
    scriptsRemoved++;
  }

  // Repointing the Howrah links at Kolkata leaves the anchor TEXT saying Howrah
  // while the link goes elsewhere, which is worse than a 404 because it is
  // quietly misleading. Howrah has no hub page, so the honest fix is to relabel
  // rather than pretend one exists.
  for (const [oldLabel, newLabel] of [
    ['>Best Coding Class in Howrah<', '>Best Coding Class in Kolkata<'],
    ['>All Howrah classes<', '>All Kolkata classes<']
  ]) {
    if (html.includes(oldLabel)) {
      const n = html.split(oldLabel).length - 1;
      html = html.split(oldLabel).join(newLabel);
      labelsFixed += n;
    }
  }

  if (html !== before) {
    if (!DRY) fs.writeFileSync(file, html, 'utf8');
    filesTouched++;
  }
}

console.log((DRY ? '[dry] ' : '') + 'HTML: ' + linksFixed + ' link(s) corrected, ' +
  faviconsFixed + ' favicon block(s) replaced, ' + scriptsRemoved + ' dead script tag(s) removed, across ' +
  filesTouched + ' file(s).');

// ------------------------------------------------------------- redirects pass
function addRedirects() {
  const file = path.join(ROOT, '_redirects');
  let src = fs.readFileSync(file, 'utf8');
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const lines = src.split(/\r?\n/);

  let catchAll = lines.findIndex(l => /^\/\*\s/.test(l));
  if (catchAll === -1) catchAll = lines.length;

  const add = [];
  for (const [from, to] of REDIRECTS) {
    const rule = `${from} ${to} 301!`;
    if (!lines.some(l => l.trim() === rule)) add.push(rule);
  }
  if (!add.length) return 0;

  const block = ['', '# GSC 404 fixes, second pass. Malformed city URLs the first pass missed:',
    '# a generator wrote the display name (caps, spaces) instead of the slug.',
    '# Splat form where the bad URL contains a space, since _redirects is',
    '# whitespace delimited. Must stay above the /* catch-all.', ...add, ''];
  lines.splice(catchAll, 0, ...block);
  if (!DRY) fs.writeFileSync(file, lines.join(eol), 'utf8');
  return add.length;
}

function addNetlifyToml() {
  const file = path.join(ROOT, 'netlify.toml');
  let src = fs.readFileSync(file, 'utf8');
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const lines = src.split(/\r?\n/);

  const fromIdx = lines.findIndex(l => /^\s*from\s*=\s*"\/\*"\s*$/.test(l));
  let insertAt = lines.length;
  if (fromIdx !== -1) {
    for (let i = fromIdx; i >= 0; i--) {
      if (/^\s*\[\[redirects\]\]/.test(lines[i])) { insertAt = i; break; }
    }
  }

  const add = [];
  for (const [from, to] of REDIRECTS) {
    const esc = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (!new RegExp('from\\s*=\\s*"' + esc + '"').test(src)) {
      add.push('[[redirects]]', `  from = "${from}"`, `  to = "${to}"`, '  status = 301', '  force = true', '');
    }
  }
  if (!add.length) return 0;

  const block = ['# GSC 404 fixes, second pass. Must precede the /* catch-all.', '', ...add];
  lines.splice(insertAt, 0, ...block);
  if (!DRY) fs.writeFileSync(file, lines.join(eol), 'utf8');
  return add.filter(l => l === '[[redirects]]').length;
}

const r = addRedirects();
const t = addNetlifyToml();
console.log((DRY ? '[dry] ' : '') + 'Redirects: ' + r + ' added to _redirects, ' + t + ' blocks added to netlify.toml.');
