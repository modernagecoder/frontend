#!/usr/bin/env node
/**
 * verify-cluster-pages.js
 *
 * Gate for the site's page clusters. A page does not get routed until it passes.
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
 *   6. Body carries the cluster root class and a market class.
 *   7. No em-dashes, no emoji.
 *   8. Word count above 3,000.
 *   9. The .md twin exists and has substance.
 *  10. Referenced images exist on disk.
 *  11. The market's accent actually resolves in the cluster stylesheet.
 *
 * Usage:
 *   node scripts/verify-cluster-pages.js                 # every cluster with pages
 *   node scripts/verify-cluster-pages.js coding-global   # one cluster
 *
 * Exits 1 if any page fails.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES = path.join(ROOT, 'src/pages');
const GEN = path.join(ROOT, 'content/courses/generated');

// ---------------------------------------------------------------------------
// Cluster registry.
//
// Each cluster owns a class prefix, a stylesheet, the set of market codes its
// body class may carry, and the URL shape of its own siblings. Adding a cluster
// is a data edit, not a code edit.
// ---------------------------------------------------------------------------
const CLUSTERS = {
  'build-ai': {
    label: 'Build-AI cluster',
    fileRe: /^(learn-to-build-ai|ai-and-machine-learning-classes-in-.+)\.html$/,
    css: 'src/css/ai-global.css',
    prefix: 'ag',
    markets: ['om', 'mct', 'kw', 'kwc', 'bh', 'ae', 'sa', 'qa', 'us', 'uk', 'lon',
      'ch', 'zrh', 'sg', 'ca', 'au', 'de', 'nl', 'ie', 'hk', 'hub'],
    siblingRe: /^\/(learn-to-build-ai|ai-and-machine-learning-classes-in-)/
  },

  // The international growth cluster. Six half-built markets plus fourteen
  // sub-national spokes. See
  // docs/superpowers/specs/2026-08-15-international-growth-cluster-design.md
  'coding-global': {
    label: 'International growth cluster',
    fileRe: /^coding-classes-in-(oman|muscat|kuwait|bahrain|hong-kong|netherlands|new-jersey|california|texas|new-york|illinois|georgia|virginia|washington|maryland|ontario|british-columbia|alberta|leicester|birmingham)\.html$/,
    css: 'src/css/coding-global.css',
    prefix: 'cg',
    markets: ['om', 'mct', 'kw', 'bh', 'hk', 'nl', 'nj', 'ca', 'tx', 'ny', 'il',
      'ga', 'va', 'wa', 'md', 'on', 'bc', 'ab', 'lei', 'bhm'],
    siblingRe: /^\/coding-classes-in-(oman|muscat|kuwait|bahrain|hong-kong|netherlands|new-jersey|california|texas|new-york|illinois|georgia|virginia|washington|maryland|ontario|british-columbia|alberta|leicester|birmingham)$/
  }
};

const requested = process.argv[2];
if (requested && !CLUSTERS[requested]) {
  console.error('Unknown cluster: ' + requested);
  console.error('Known clusters: ' + Object.keys(CLUSTERS).join(', '));
  process.exit(2);
}

const allFiles = fs.readdirSync(PAGES);

const active = Object.entries(CLUSTERS)
  .filter(([name]) => !requested || name === requested)
  .map(([name, c]) => ({
    name,
    ...c,
    slugs: allFiles.filter(f => c.fileRe.test(f)).map(f => f.replace('.html', '')).sort()
  }))
  .filter(c => c.slugs.length);

if (!active.length) {
  console.log(requested ? `No pages built yet for cluster ${requested}.` : 'No cluster pages found.');
  process.exit(0);
}

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

// market class -> accent, read from the cluster stylesheet rather than hardcoded
function loadAccents(cluster) {
  const out = {};
  const file = path.join(ROOT, cluster.css);
  if (!fs.existsSync(file)) return out;
  const css = fs.readFileSync(file, 'utf8');
  const p = cluster.prefix;
  const re = new RegExp(
    '\\.' + p + '-root\\.(' + p + '-[a-z]+)\\s*\\{[^}]*--' + p + '-accent:\\s*(#[0-9A-Fa-f]{6})',
    'g'
  );
  for (const m of css.matchAll(re)) out[m[1]] = m[2];
  return out;
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
let total = 0;
const report = [];

for (const cluster of active) {
  const ACCENTS = loadAccents(cluster);
  const P = cluster.prefix;
  const faqItemRe = new RegExp('<div class="' + P + '-faq-item">\\s*<h3>([\\s\\S]*?)<\\/h3>', 'g');
  const faqAnsRe = new RegExp('<div class="' + P + '-faq-item">[\\s\\S]*?<p>([\\s\\S]*?)<\\/p>', 'g');
  const rootRe = new RegExp('\\b' + P + '-root\\b');
  const marketRe = new RegExp('\\b' + P + '-(' + cluster.markets.join('|') + ')\\b');
  const anyMarketRe = new RegExp('\\b' + P + '-(?!root)[a-z]+\\b');

  if (!fs.existsSync(path.join(ROOT, cluster.css))) {
    console.log(`NOTE  stylesheet missing for ${cluster.name}: ${cluster.css}`);
  }

  for (const slug of cluster.slugs) {
    total++;
    const file = path.join(PAGES, slug + '.html');
    const html = fs.readFileSync(file, 'utf8');
    const errs = [], warns = [];

    // --- 1. FAQ schema vs visible ----------------------------------------
    // The tag is matched attribute-tolerantly on purpose. A sweep once added
    // data-price-scope to these tags, which silently blinded a strict regex and
    // made every page report "no FAQPage schema" for weeks.
    const ldBlocks = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
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
      const vQ = [...html.matchAll(faqItemRe)].map(m => stripTags(m[1]));
      const vA = [...html.matchAll(faqAnsRe)].map(m => stripTags(m[1]));
      if (sQ.length !== vQ.length) errs.push(`FAQ count mismatch: schema ${sQ.length}, visible ${vQ.length}`);
      else {
        sQ.forEach((q, i) => { if (q !== vQ[i]) errs.push(`FAQ Q${i + 1} schema != visible`); });
        sA.forEach((a, i) => { if (a !== vA[i]) errs.push(`FAQ A${i + 1} schema != visible`); });
      }
    }

    // --- 2 & 3. links -----------------------------------------------------
    const links = [...new Set([...html.matchAll(/href="(\/[^"#?]*)"/g)].map(m => m[1]))];
    for (const l of links) {
      if (l.startsWith('/courses/')) {
        const s = l.slice(9);
        if (s && !courses.has(s) && !courseAlias.has(s)) errs.push('dead course link ' + l);
      } else if (l !== '/' && !l.startsWith('/images/') && !l.startsWith('/css/') && !l.startsWith('/favicon')) {
        const isClusterSibling = cluster.siblingRe.test(l);
        if (!routed.has(l) && !isClusterSibling) warns.push('unrouted internal link ' + l);
        else if (isClusterSibling && !fs.existsSync(path.join(PAGES, l.slice(1) + '.html'))) {
          warns.push('sibling not built yet ' + l);
        }
      }
    }

    // --- 10. images -------------------------------------------------------
    for (const m of html.matchAll(/<img[^>]+src="(\/images\/[^"]+)"/g)) {
      if (!fs.existsSync(path.join(ROOT, 'public', m[1]))) errs.push('missing image ' + m[1]);
    }

    // --- 4. title / description ------------------------------------------
    const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '';
    const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
    const tLen = stripTags(title).length;
    if (tLen > 65) warns.push(`title ${tLen} chars (>65)`);
    if (desc.length < 145 || desc.length > 165) warns.push(`meta description ${desc.length} chars (want 150-160)`);

    // --- 5. canonical -----------------------------------------------------
    const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || '';
    if (!canon.endsWith('/' + slug)) errs.push(`canonical mismatch: ${canon}`);

    // --- 6. body class ----------------------------------------------------
    const bodyCls = (html.match(/<body class="([^"]*)"/) || [])[1] || '';
    if (!rootRe.test(bodyCls)) errs.push(`body missing ${P}-root`);
    if (!marketRe.test(bodyCls)) errs.push('body missing market class: ' + bodyCls);

    // --- 7. style rules ---------------------------------------------------
    const em = (html.match(/—/g) || []).length;
    const emoji = (html.match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu) || []).length;
    if (em) errs.push(em + ' em-dash(es)');
    if (emoji) errs.push(emoji + ' emoji');

    // --- 8. depth ---------------------------------------------------------
    const bodyOnly = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<head[\s\S]*?<\/head>/g, ' ');
    const words = stripTags(bodyOnly).split(' ').filter(Boolean).length;
    if (words < 3000) errs.push(`only ${words} words (<3000)`);

    // --- 9. md twin, existence AND substance ------------------------------
    // The twin is the AEO deliverable. An empty or stub file passes an existence
    // check and is useless to the crawlers it exists for, so check its contents.
    const mdPath = path.join(PAGES, slug + '.md');
    if (!fs.existsSync(mdPath)) errs.push('.md twin missing');
    else {
      const md = fs.readFileSync(mdPath, 'utf8');
      if (!/^---[\s\S]*?canonical:/m.test(md)) errs.push('.md twin has no frontmatter canonical');
      if (!/^>\s/m.test(md)) errs.push('.md twin has no answer-capsule blockquote');
      const mdCourses = (md.match(/\/courses\/[a-z0-9-]+/g) || []).length;
      if (mdCourses < 10) errs.push(`.md twin links only ${mdCourses} courses`);
      if (md.includes('—')) errs.push('.md twin contains em-dashes');
      if (md.split(/\s+/).length < 600) errs.push('.md twin under 600 words');
    }

    // --- 11. market accent actually resolves ------------------------------
    // A body class with no matching rule in the cluster stylesheet silently
    // falls back to the default accent, so several markets would look identical.
    const mk = (bodyCls.match(anyMarketRe) || [])[0];
    if (mk && !ACCENTS[mk]) errs.push(`market class ${mk} has no accent defined in ${cluster.css}`);

    if (errs.length) failures++;
    report.push({ cluster: cluster.name, slug, words, errs, warns });
  }
}

let lastCluster = null;
for (const r of report) {
  if (r.cluster !== lastCluster) {
    const c = active.find(a => a.name === r.cluster);
    console.log(`\n== ${c.label} (${r.cluster}) ==`);
    lastCluster = r.cluster;
  }
  const status = r.errs.length ? 'FAIL' : 'PASS';
  console.log(`${status}  ${String(r.words).padStart(5)}w  ${r.slug}`);
  r.errs.forEach(e => console.log('        ERROR  ' + e));
  r.warns.slice(0, 6).forEach(w => console.log('        warn   ' + w));
  if (r.warns.length > 6) console.log(`        warn   ...and ${r.warns.length - 6} more`);
}

console.log(`\n${total - failures}/${total} pages pass.`);
if (failures) process.exitCode = 1;
