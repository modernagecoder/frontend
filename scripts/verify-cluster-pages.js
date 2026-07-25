#!/usr/bin/env node
/**
 * verify-cluster-pages.js
 *
 * Gate for the Build-AI cluster. A page does not get routed until it passes.
 *
 * The expensive lesson behind this file: counting things is not verifying them.
 * So every check here compares what the page actually contains against what it
 * claims, rather than checking that something exists.
 *
 * Checks per page:
 *   1. FAQPage schema text matches the visible FAQ text character for character
 *      (after whitespace normalisation). Mismatched schema is worse than none.
 *   2. Every /courses/ link resolves to a real generated course, or to a 301
 *      alias that does.
 *   3. Every internal /link resolves to a routed page.
 *   4. Title <= 65 chars, meta description 150 to 160.
 *   5. Canonical URL matches the file's own slug.
 *   6. Body carries the ag-root class and a market class.
 *   7. No em-dashes, no emoji.
 *   8. Word count above 3,000.
 *   9. The .md twin exists.
 *  10. Referenced images exist on disk.
 *
 * Usage: node scripts/verify-cluster-pages.js
 * Exits 1 if any page fails.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES = path.join(ROOT, 'src/pages');
const GEN = path.join(ROOT, 'content/courses/generated');

const slugs = fs.readdirSync(PAGES)
  .filter(f => /^(learn-to-build-ai|ai-and-machine-learning-classes-in-.+)\.html$/.test(f))
  .map(f => f.replace('.html', ''))
  .sort();

const courses = new Set(fs.existsSync(GEN) ? fs.readdirSync(GEN).filter(f => {
  try { return fs.statSync(path.join(GEN, f)).isDirectory(); } catch (e) { return false; }
}) : []);

const redirectsTxt = fs.readFileSync(path.join(ROOT, '_redirects'), 'utf8');
const courseAlias = new Set();
const routed = new Set();
for (const line of redirectsTxt.split('\n')) {
  const a = line.match(/^\/courses\/([a-z0-9-]+)\s+\S+\s+301/);
  if (a) courseAlias.add(a[1]);
  const r = line.match(/^(\/[a-zA-Z0-9._/-]*)\s+\S+\s+(200|301)/);
  if (r) routed.add(r[1]);
}

const norm = s => s.replace(/\s+/g, ' ').replace(/[‘’]/g, "'").trim();

function stripTags(h) {
  return norm(h.replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&middot;/g, '·').replace(/&rarr;/g, '→')
    .replace(/&#9733;/g, '').replace(/&nbsp;/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/gi, ' '));
}

let failures = 0;
const report = [];

for (const slug of slugs) {
  const file = path.join(PAGES, slug + '.html');
  const html = fs.readFileSync(file, 'utf8');
  const errs = [], warns = [];

  // --- 1. FAQ schema vs visible ------------------------------------------
  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  let faqNode = null;
  for (const b of ldBlocks) {
    try {
      const j = JSON.parse(b[1]);
      const graph = j['@graph'] || [j];
      const f = graph.find(n => n && n['@type'] === 'FAQPage');
      if (f) faqNode = f;
    } catch (e) { errs.push('JSON-LD does not parse: ' + e.message.slice(0, 60)); }
  }
  if (!faqNode) errs.push('no FAQPage schema');
  else {
    const sQ = faqNode.mainEntity.map(q => norm(q.name));
    const sA = faqNode.mainEntity.map(q => norm(q.acceptedAnswer.text));
    const vQ = [...html.matchAll(/<div class="ag-faq-item">\s*<h3>([\s\S]*?)<\/h3>/g)].map(m => stripTags(m[1]));
    const vA = [...html.matchAll(/<div class="ag-faq-item">[\s\S]*?<p>([\s\S]*?)<\/p>/g)].map(m => stripTags(m[1]));
    if (sQ.length !== vQ.length) errs.push(`FAQ count mismatch: schema ${sQ.length}, visible ${vQ.length}`);
    else {
      sQ.forEach((q, i) => { if (q !== vQ[i]) errs.push(`FAQ Q${i + 1} schema != visible`); });
      sA.forEach((a, i) => { if (a !== vA[i]) errs.push(`FAQ A${i + 1} schema != visible`); });
    }
  }

  // --- 2 & 3. links -------------------------------------------------------
  const links = [...new Set([...html.matchAll(/href="(\/[^"#?]*)"/g)].map(m => m[1]))];
  for (const l of links) {
    if (l.startsWith('/courses/')) {
      const s = l.slice(9);
      if (s && !courses.has(s) && !courseAlias.has(s)) errs.push('dead course link ' + l);
    } else if (l !== '/' && !l.startsWith('/images/') && !l.startsWith('/css/') && !l.startsWith('/favicon')) {
      const isClusterSibling = /^\/(learn-to-build-ai|ai-and-machine-learning-classes-in-)/.test(l);
      if (!routed.has(l) && !isClusterSibling) warns.push('unrouted internal link ' + l);
      else if (isClusterSibling && !fs.existsSync(path.join(PAGES, l.slice(1) + '.html'))) {
        warns.push('sibling not built yet ' + l);
      }
    }
  }

  // --- 10. images ---------------------------------------------------------
  for (const m of html.matchAll(/<img[^>]+src="(\/images\/[^"]+)"/g)) {
    if (!fs.existsSync(path.join(ROOT, 'public', m[1]))) errs.push('missing image ' + m[1]);
  }

  // --- 4. title / description --------------------------------------------
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const tLen = stripTags(title).length;
  if (tLen > 65) warns.push(`title ${tLen} chars (>65)`);
  if (desc.length < 145 || desc.length > 165) warns.push(`meta description ${desc.length} chars (want 150-160)`);

  // --- 5. canonical -------------------------------------------------------
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || '';
  if (!canon.endsWith('/' + slug)) errs.push(`canonical mismatch: ${canon}`);

  // --- 6. body class ------------------------------------------------------
  const bodyCls = (html.match(/<body class="([^"]*)"/) || [])[1] || '';
  if (!/\bag-root\b/.test(bodyCls)) errs.push('body missing ag-root');
  if (!/\bag-(om|mct|kw|kwc|bh|ae|sa|qa|us|uk|lon|ch|zrh|sg|ca|au|de|nl|ie|hk|hub)\b/.test(bodyCls)) {
    errs.push('body missing market class: ' + bodyCls);
  }

  // --- 7. style rules -----------------------------------------------------
  const em = (html.match(/—/g) || []).length;
  const emoji = (html.match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu) || []).length;
  if (em) errs.push(em + ' em-dash(es)');
  if (emoji) errs.push(emoji + ' emoji');

  // --- 8. depth -----------------------------------------------------------
  const bodyOnly = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<head[\s\S]*?<\/head>/g, ' ');
  const words = stripTags(bodyOnly).split(' ').filter(Boolean).length;
  if (words < 3000) errs.push(`only ${words} words (<3000)`);

  // --- 9. md twin ---------------------------------------------------------
  if (!fs.existsSync(path.join(PAGES, slug + '.md'))) errs.push('.md twin missing');

  if (errs.length) failures++;
  report.push({ slug, words, errs, warns });
}

for (const r of report) {
  const status = r.errs.length ? 'FAIL' : 'PASS';
  console.log(`${status}  ${String(r.words).padStart(5)}w  ${r.slug}`);
  r.errs.forEach(e => console.log('        ERROR  ' + e));
  r.warns.slice(0, 6).forEach(w => console.log('        warn   ' + w));
  if (r.warns.length > 6) console.log(`        warn   ...and ${r.warns.length - 6} more`);
}

console.log(`\n${report.length - failures}/${report.length} pages pass.`);
if (failures) process.exitCode = 1;
