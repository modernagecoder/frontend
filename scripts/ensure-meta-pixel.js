#!/usr/bin/env node
/**
 * ensure-meta-pixel.js
 * ------------------------------------------------------------------
 * Every published page carries the Meta Pixel in its <head>. This script makes
 * that true at build time and, with --check, fails the build when it is not.
 *
 * WHY
 * Until 1 Oct 2026 the pixel lived in /js/meta-pixel.js, which still held the
 * placeholder YOUR_PIXEL_ID and so did nothing, and only 394 of ~2,300 pages
 * loaded it at all (no blog, course or resource page did). Pasting the snippet
 * into pages by hand would miss every page generated after the paste, so it is
 * stamped here instead, the same way ensure-phone-country.js does the picker.
 *
 * WHAT IT DOES, per published page
 *   Puts Meta's standard snippet, between the <!-- Meta Pixel Code --> and
 *   <!-- End Meta Pixel Code --> markers, just before </head>. A page that
 *   already has the block gets it rewritten to the canonical one below, so
 *   changing PIXEL_ID here and rebuilding moves every page.
 *
 *   /js/meta-pixel.js stays as a guarded fallback: it returns at once when the
 *   head snippet has already defined fbq, so pages that load both still send
 *   one PageView.
 *
 * NEVER hand-edit the block in a page; edit SNIPPET here and re-run.
 * Runs on Netlify after generate:all (so generated pages exist) and before
 * minify and the lovewall build (which copies lovewall/index.html's head).
 * Deliberately not run over local sources: the .md twins are built from the
 * HTML before this step, and must not pick up the tracking <noscript>.
 *
 * Idempotent: a second run writes nothing.
 *
 * Usage:  node scripts/ensure-meta-pixel.js          (fix)
 *         node scripts/ensure-meta-pixel.js --check  (report, exit 1 on gaps)
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CHECK = process.argv.includes('--check');

const PIXEL_ID = '1134229305795086';

const SNIPPET = `<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->`;

// Everything that is published as a page (see _redirects).
const DIRS = ['src/pages', 'content/blog/generated', 'content/courses/generated', 'content/resources/generated'];
// Pages served from outside those dirs. lovewall/index.html is the Vite
// template for /love; its build keeps this head in dist/index.html.
const FILES = ['sitemap.html', 'lovewall/index.html'];
// Kept free of third-party tracking: the Battle Arena admin is deliberately
// isolated from everything else. (The main admin panel, src/admin, is not in
// DIRS at all.)
const EXCLUDE = new Set(['src/pages/battle-admin.html']);

const BLOCK = /<!-- Meta Pixel Code -->[\s\S]*?<!-- End Meta Pixel Code -->/g;
const INIT = /fbq\(\s*['"]init['"]\s*,\s*['"](\d+)['"]/g;

function walk(dir, out) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const files = [];
for (const dir of DIRS) walk(path.join(ROOT, dir), files);
for (const f of FILES) if (fs.existsSync(path.join(ROOT, f))) files.push(path.join(ROOT, f));

const report = { pages: 0, excluded: 0, added: 0, rewritten: 0, written: 0, gaps: [] };

for (const file of files) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  if (EXCLUDE.has(rel)) { report.excluded++; continue; }
  report.pages++;
  const original = fs.readFileSync(file, 'utf8');
  let html = original;

  if (CHECK) {
    const blocks = html.match(BLOCK) || [];
    const ids = [...html.matchAll(INIT)].map((m) => m[1]);
    const headEnd = html.search(/<\/head>/i);
    if (blocks.length !== 1) report.gaps.push(`${rel}: ${blocks.length} pixel blocks (want 1)`);
    else if (blocks[0] !== SNIPPET) report.gaps.push(`${rel}: pixel block differs from the canonical snippet`);
    else if (headEnd === -1 || html.indexOf(SNIPPET) > headEnd) report.gaps.push(`${rel}: pixel block is not inside <head>`);
    if (ids.length !== 1 || ids[0] !== PIXEL_ID) report.gaps.push(`${rel}: fbq init ids [${ids.join(', ')}] (want exactly ${PIXEL_ID})`);
    continue;
  }

  const count = (html.match(BLOCK) || []).length;
  if (count) {
    // Keep the first block's position, drop any duplicates, make it canonical.
    let first = true;
    html = html.replace(BLOCK, () => (first ? ((first = false), SNIPPET) : ''));
    if (html !== original) report.rewritten++;
  } else if (/<\/head>/i.test(html)) {
    html = html.replace(/<\/head>/i, `${SNIPPET}\n</head>`);
    report.added++;
  } else {
    report.gaps.push(rel + ': no </head> to add the pixel to');
  }

  if (html !== original) {
    fs.writeFileSync(file, html, 'utf8');
    report.written++;
  }
}

// The fallback script must fire the same pixel, and only when the head did not.
const fallback = fs.readFileSync(path.join(ROOT, 'src/js/meta-pixel.js'), 'utf8');
if (!fallback.includes(`'${PIXEL_ID}'`) || !/if \(window\.fbq\) return;/.test(fallback)) {
  report.gaps.push(`src/js/meta-pixel.js: must hold PIXEL_ID ${PIXEL_ID} and return early when window.fbq exists`);
}

console.log(`meta-pixel ${CHECK ? 'check' : 'build'} (pixel ${PIXEL_ID})`);
console.log('  pages scanned   :', report.pages);
console.log('  pages excluded  :', report.excluded);
if (!CHECK) {
  console.log('  pixel added     :', report.added);
  console.log('  block rewritten :', report.rewritten);
  console.log('  files written   :', report.written);
}
if (report.gaps.length) {
  console.error(`\n❌ ${report.gaps.length} problem(s):`);
  report.gaps.slice(0, 40).forEach((g) => console.error('   ' + g));
  if (report.gaps.length > 40) console.error(`   ...and ${report.gaps.length - 40} more`);
  process.exitCode = 1;
} else if (CHECK) {
  console.log('  ✅ every page has exactly one Meta Pixel block in its <head>');
}
