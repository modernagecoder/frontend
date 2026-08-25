#!/usr/bin/env node
/**
 * wire-board-prep-routes.js
 *
 * Wires the Class 10 board-preparation cluster (board-prep.css) into every
 * place a page needs to exist or it 404s in production:
 *
 *   1. _redirects            /<slug>      -> /src/pages/<slug>.html  200
 *   2. _redirects            /<slug>.md   -> /src/pages/<slug>.md    200
 *   3. netlify.toml          both of the above as [[redirects]] blocks
 *   4. sitemap.xml           <url> entry (priority 0.9, weekly, India board intent)
 *   5. llms.txt              entry under a board-preparation heading
 *
 * Same ordering hazards as wire-ai-global-routes.js: both routing files have
 * a `/*` catch-all and Netlify applies the FIRST matching rule, so every
 * addition is inserted above it. Idempotent.
 *
 * Usage:  node scripts/wire-board-prep-routes.js [slug ...]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TODAY = new Date().toISOString().slice(0, 10);
const BASE = 'https://learn.modernagecoders.com';

const SLUGS = [
  'cbse-class-10-ai-classes-online',
  'cbse-class-10-ai-syllabus-explained',
  'python-for-cbse-class-10-ai',
  'cbse-class-10-ai-board-exam-preparation',
  'cbse-class-10-ai-project-and-practical-file',
  'icse-class-10-java-classes-online',
  'icse-class-10-computer-applications-syllabus-explained',
  'icse-class-10-java-programs-practice',
  'icse-class-10-bluej-java-coaching',
  'icse-class-10-computer-applications-board-exam-preparation'
];

const LLMS_HEADING = '## Class 10 Board Preparation (CBSE AI 417 and ICSE Computer Applications)';
const LLMS_LABELS = {
  'cbse-class-10-ai-classes-online': 'CBSE Class 10 AI (417) classes online, live Mon and Wed 9 PM IST',
  'cbse-class-10-ai-syllabus-explained': 'CBSE Class 10 AI syllabus 2026-27, unit by unit with marks',
  'python-for-cbse-class-10-ai': 'Python for CBSE Class 10 AI (Advance Python and Statistical Data units)',
  'cbse-class-10-ai-board-exam-preparation': 'CBSE Class 10 AI board exam preparation',
  'cbse-class-10-ai-project-and-practical-file': 'CBSE Class 10 AI project, practical file and viva',
  'icse-class-10-java-classes-online': 'ICSE Class 10 Java classes online, live Tue 5:30 PM and Wed 8 PM IST',
  'icse-class-10-computer-applications-syllabus-explained': 'ICSE Class 10 Computer Applications syllabus explained',
  'icse-class-10-java-programs-practice': 'ICSE Class 10 Java programs practice for Section B',
  'icse-class-10-bluej-java-coaching': 'ICSE Class 10 BlueJ Java coaching',
  'icse-class-10-computer-applications-board-exam-preparation': 'ICSE Class 10 Computer Applications board exam preparation'
};

function read(f) { return fs.readFileSync(path.join(ROOT, f), 'utf8'); }
function write(f, s) { fs.writeFileSync(path.join(ROOT, f), s, 'utf8'); }
function exists(f) { return fs.existsSync(path.join(ROOT, f)); }

function wireRedirects(slugs) {
  const file = '_redirects';
  const src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const lines = src.split(/\r?\n/);
  let catchAll = lines.findIndex(l => /^\/\*\s/.test(l));
  if (catchAll === -1) catchAll = lines.length;
  const additions = [];
  for (const slug of slugs) {
    const html = `/${slug} /src/pages/${slug}.html 200`;
    const md = `/${slug}.md /src/pages/${slug}.md 200`;
    if (!lines.some(l => l.trim() === html)) additions.push(html);
    if (!lines.some(l => l.trim() === md)) additions.push(md);
  }
  if (!additions.length) return 0;
  lines.splice(catchAll, 0, '', '# Class 10 board-prep cluster (board-prep.css). Inserted before the /* catch-all.', ...additions);
  write(file, lines.join(eol));
  return additions.length;
}

function wireNetlifyToml(slugs) {
  const file = 'netlify.toml';
  const src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const lines = src.split(/\r?\n/);
  let fromIdx = lines.findIndex(l => /^\s*from\s*=\s*"\/\*"\s*$/.test(l));
  let insertAt = lines.length;
  if (fromIdx !== -1) {
    for (let i = fromIdx; i >= 0; i--) {
      if (/^\s*\[\[redirects\]\]/.test(lines[i])) { insertAt = i; break; }
    }
  }
  const additions = [];
  for (const slug of slugs) {
    if (!new RegExp(`from\\s*=\\s*"/${slug}"`).test(src)) {
      additions.push('[[redirects]]', `  from = "/${slug}"`, `  to = "/src/pages/${slug}.html"`, '  status = 200', '');
    }
    if (!new RegExp(`from\\s*=\\s*"/${slug}\\.md"`).test(src)) {
      additions.push('[[redirects]]', `  from = "/${slug}.md"`, `  to = "/src/pages/${slug}.md"`, '  status = 200', '');
    }
  }
  if (!additions.length) return 0;
  lines.splice(insertAt, 0, '# Class 10 board-prep cluster (board-prep.css). Must precede the /* catch-all.', '', ...additions);
  write(file, lines.join(eol));
  return additions.filter(l => l === '[[redirects]]').length;
}

function wireSitemap(file, slugs) {
  if (!exists(file)) return 0;
  let src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const entries = [];
  let added = 0;
  for (const slug of slugs) {
    const loc = `${BASE}/${slug}`;
    if (src.includes(`<loc>${loc}</loc>`)) continue;
    entries.push('  <url>', `    <loc>${loc}</loc>`, `    <lastmod>${TODAY}</lastmod>`, '    <changefreq>weekly</changefreq>', '    <priority>0.9</priority>', '  </url>');
    added++;
  }
  if (!added) return 0;
  src = src.replace(/<\/urlset>\s*$/, entries.join(eol) + eol + '</urlset>' + eol);
  write(file, src);
  return added;
}

function wireLlms(slugs) {
  const file = 'llms.txt';
  if (!exists(file)) return 0;
  let src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const wanted = slugs.filter(s => !src.includes(`${BASE}/${s}`));
  if (!wanted.length) return 0;
  const lines = wanted.map(s => `- ${LLMS_LABELS[s] || s}: ${BASE}/${s}`);
  if (src.includes(LLMS_HEADING)) {
    const start = src.indexOf(LLMS_HEADING);
    const rest = src.slice(start + LLMS_HEADING.length);
    const nextIdx = rest.indexOf(eol + '## ');
    const insertAt = nextIdx === -1 ? src.length : start + LLMS_HEADING.length + nextIdx;
    src = src.slice(0, insertAt) + eol + lines.join(eol) + src.slice(insertAt);
  } else {
    const block = LLMS_HEADING + eol + eol +
      'Live online Class 10 board preparation, taught in small batches: CBSE Artificial Intelligence (subject code 417, 2026-27 curriculum) and ICSE Computer Applications (Java with BlueJ, CISCE 100 plus 100 scheme).' + eol + eol +
      lines.join(eol) + eol + eol;
    const anchor = '## International Country Pages';
    src = src.includes(anchor) ? src.replace(anchor, block + anchor) : src + eol + block;
  }
  write(file, src);
  return wanted.length;
}

function main() {
  const argv = process.argv.slice(2);
  const requested = argv.length ? argv : SLUGS;
  const live = requested.filter(s => exists(`src/pages/${s}.html`));
  const missing = requested.filter(s => !exists(`src/pages/${s}.html`));
  if (!live.length) { console.log('No built pages found. Nothing wired.'); return; }
  const r = wireRedirects(live);
  const t = wireNetlifyToml(live);
  const s = wireSitemap('sitemap.xml', live);
  const lm = wireLlms(live);
  console.log('Wired ' + live.length + ' page(s): ' + live.map(x => '/' + x).join(' '));
  console.log('  _redirects lines added ...... ' + r);
  console.log('  netlify.toml blocks added ... ' + t);
  console.log('  sitemap.xml entries added ... ' + s);
  console.log('  llms.txt entries added ...... ' + lm);
  const noMd = live.filter(x => !exists(`src/pages/${x}.md`));
  if (noMd.length) console.log('WARNING: .md twin missing for: ' + noMd.join(', '));
  if (missing.length) console.log('Not built yet, skipped: ' + missing.join(', '));
}

main();
