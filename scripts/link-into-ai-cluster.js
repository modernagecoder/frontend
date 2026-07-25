#!/usr/bin/env node
/**
 * link-into-ai-cluster.js
 *
 * The Build-AI cluster was an island: an audit found ZERO inbound internal
 * links from outside it. Search engines discover and weight pages largely
 * through internal links, so an orphaned cluster earns very little regardless
 * of how good the pages are.
 *
 * This adds one contextual link from each topically-matching existing page to
 * its counterpart in the cluster. A link from the UAE coding page to the UAE
 * AI page is worth far more than a generic sitewide link, because the
 * surrounding page is about the same market.
 *
 * Insertion point is the first <ul> inside the page's <footer>, which exists in
 * both footer designs in use (cp- country pages and the gulf-* pages) and is a
 * list of links already, so nothing about the layout changes.
 *
 * Idempotent, and it skips any page whose cluster counterpart is not built yet.
 *
 * Usage: node scripts/link-into-ai-cluster.js [--dry]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES = path.join(ROOT, 'src/pages');
const DRY = process.argv.includes('--dry');

// source page -> [cluster slug, anchor text]
const MAP = {
  'coding-classes-in-uae': ['ai-and-machine-learning-classes-in-uae', 'AI &amp; Machine Learning in the UAE'],
  'coding-classes-in-dubai': ['ai-and-machine-learning-classes-in-uae', 'AI &amp; Machine Learning in the UAE'],
  'coding-classes-in-abu-dhabi': ['ai-and-machine-learning-classes-in-uae', 'AI &amp; Machine Learning in the UAE'],
  'coding-classes-in-sharjah': ['ai-and-machine-learning-classes-in-uae', 'AI &amp; Machine Learning in the UAE'],
  'ai-classes-in-dubai': ['ai-and-machine-learning-classes-in-uae', 'Build AI: ML classes in the UAE'],
  'ai-classes-for-kids-in-uae': ['ai-and-machine-learning-classes-in-uae', 'Build AI: ML classes in the UAE'],
  'python-classes-in-dubai': ['ai-and-machine-learning-classes-in-uae', 'AI &amp; Machine Learning in the UAE'],

  'coding-classes-in-saudi-arabia': ['ai-and-machine-learning-classes-in-saudi-arabia', 'AI &amp; Machine Learning in Saudi Arabia'],
  'coding-classes-in-riyadh': ['ai-and-machine-learning-classes-in-saudi-arabia', 'AI &amp; Machine Learning in Saudi Arabia'],
  'coding-classes-in-jeddah': ['ai-and-machine-learning-classes-in-saudi-arabia', 'AI &amp; Machine Learning in Saudi Arabia'],
  'coding-classes-in-dammam': ['ai-and-machine-learning-classes-in-saudi-arabia', 'AI &amp; Machine Learning in Saudi Arabia'],
  'ai-classes-in-saudi-arabia': ['ai-and-machine-learning-classes-in-saudi-arabia', 'Build AI: ML classes in Saudi Arabia'],
  'python-classes-in-saudi-arabia': ['ai-and-machine-learning-classes-in-saudi-arabia', 'AI &amp; Machine Learning in Saudi Arabia'],

  'coding-classes-in-qatar': ['ai-and-machine-learning-classes-in-qatar', 'AI &amp; Machine Learning in Qatar'],
  'coding-classes-in-doha': ['ai-and-machine-learning-classes-in-qatar', 'AI &amp; Machine Learning in Qatar'],
  'ai-classes-in-qatar': ['ai-and-machine-learning-classes-in-qatar', 'Build AI: ML classes in Qatar'],
  'python-classes-in-qatar': ['ai-and-machine-learning-classes-in-qatar', 'AI &amp; Machine Learning in Qatar'],

  'coding-classes-in-united-states': ['ai-and-machine-learning-classes-in-usa', 'AI &amp; Machine Learning in the USA'],
  'online-coding-classes-for-kids-usa': ['ai-and-machine-learning-classes-in-usa', 'AI &amp; Machine Learning in the USA'],
  'coding-classes-in-united-kingdom': ['ai-and-machine-learning-classes-in-uk', 'AI &amp; Machine Learning in the UK'],
  'online-coding-classes-for-kids-uk': ['ai-and-machine-learning-classes-in-uk', 'AI &amp; Machine Learning in the UK'],
  'coding-classes-in-switzerland': ['ai-and-machine-learning-classes-in-switzerland', 'AI &amp; Machine Learning in Switzerland'],
  'coding-classes-in-singapore': ['ai-and-machine-learning-classes-in-singapore', 'AI &amp; Machine Learning in Singapore'],
  'coding-classes-in-canada': ['ai-and-machine-learning-classes-in-canada', 'AI &amp; Machine Learning in Canada'],
  'coding-classes-in-australia': ['ai-and-machine-learning-classes-in-australia', 'AI &amp; Machine Learning in Australia'],
  'coding-classes-in-germany': ['ai-and-machine-learning-classes-in-germany', 'AI &amp; Machine Learning in Germany'],
  'coding-classes-in-ireland': ['ai-and-machine-learning-classes-in-ireland', 'AI &amp; Machine Learning in Ireland'],

  // topic pages closest to the cluster thesis point at the hub
  'online-ai-and-machine-learning-classes': ['learn-to-build-ai', 'Learn to Build AI, by country'],
  'how-to-build-ai-models': ['learn-to-build-ai', 'Learn to Build AI, by country'],
  'machine-learning-course-for-beginners': ['learn-to-build-ai', 'Learn to Build AI, by country'],
  'ai-ml-course-for-teens': ['learn-to-build-ai', 'Learn to Build AI, by country'],
  'ai-ml-course-for-college-students': ['learn-to-build-ai', 'Learn to Build AI, by country'],
  'ai-engineer-roadmap-2026': ['learn-to-build-ai', 'Learn to Build AI, by country']
};

// Second pass. Oman, Kuwait, Kuwait City, Bahrain, London and Zurich were the
// whitespace this cluster was built to fill, so by definition no existing page
// covers them and the first map leaves them at zero inbound links. These are
// regional and city relationships that a reader would follow anyway: a Gulf
// page pointing at its neighbours, a country page pointing at its capital.
const MAP2 = {
  'coding-classes-in-uae': [
    ['ai-and-machine-learning-classes-in-oman', 'AI &amp; Machine Learning in Oman'],
    ['ai-and-machine-learning-classes-in-kuwait', 'AI &amp; Machine Learning in Kuwait'],
    ['ai-and-machine-learning-classes-in-bahrain', 'AI &amp; Machine Learning in Bahrain']
  ],
  'coding-classes-in-saudi-arabia': [
    ['ai-and-machine-learning-classes-in-oman', 'AI &amp; Machine Learning in Oman'],
    ['ai-and-machine-learning-classes-in-bahrain', 'AI &amp; Machine Learning in Bahrain']
  ],
  'coding-classes-in-qatar': [
    ['ai-and-machine-learning-classes-in-kuwait', 'AI &amp; Machine Learning in Kuwait'],
    ['ai-and-machine-learning-classes-in-bahrain', 'AI &amp; Machine Learning in Bahrain']
  ],
  'coding-classes-in-doha': [['ai-and-machine-learning-classes-in-muscat', 'AI &amp; Machine Learning in Muscat']],
  'coding-classes-in-dubai': [['ai-and-machine-learning-classes-in-muscat', 'AI &amp; Machine Learning in Muscat']],
  'coding-classes-in-riyadh': [['ai-and-machine-learning-classes-in-kuwait-city', 'AI &amp; Machine Learning in Kuwait City']],
  'coding-classes-in-abu-dhabi': [['ai-and-machine-learning-classes-in-kuwait-city', 'AI &amp; Machine Learning in Kuwait City']],
  'coding-classes-in-united-kingdom': [['ai-and-machine-learning-classes-in-london', 'AI &amp; Machine Learning in London']],
  'online-coding-classes-for-kids-uk': [['ai-and-machine-learning-classes-in-london', 'AI &amp; Machine Learning in London']],
  'coding-classes-in-switzerland': [['ai-and-machine-learning-classes-in-zurich', 'AI &amp; Machine Learning in Zurich']],
  'coding-classes-in-germany': [['ai-and-machine-learning-classes-in-zurich', 'AI &amp; Machine Learning in Zurich']],
  'maths-tutor-in-dubai': [['ai-and-machine-learning-classes-in-uae', 'AI &amp; Machine Learning in the UAE']],
  'online-maths-tuition-uae': [['ai-and-machine-learning-classes-in-uae', 'AI &amp; Machine Learning in the UAE']],

  // Hong Kong and the Netherlands have no coding-classes-in-<market> counterpart
  // at all, so they stay orphaned unless a regional neighbour points at them.
  'coding-classes-in-singapore': [['ai-and-machine-learning-classes-in-hong-kong', 'AI &amp; Machine Learning in Hong Kong']],
  'online-maths-tuition-singapore': [['ai-and-machine-learning-classes-in-hong-kong', 'AI &amp; Machine Learning in Hong Kong']],
  'coding-classes-in-sweden': [['ai-and-machine-learning-classes-in-netherlands', 'AI &amp; Machine Learning in the Netherlands']],
  'coding-classes-in-new-zealand': [['ai-and-machine-learning-classes-in-australia', 'AI &amp; Machine Learning in Australia']]
};

// Third pass. Same idea again for pages whose footer already carries a cluster
// link: a second target is fine because these footers are country indexes.
const MAP3 = {
  'coding-classes-in-germany': [['ai-and-machine-learning-classes-in-netherlands', 'AI &amp; Machine Learning in the Netherlands']],
  'coding-classes-in-switzerland': [['ai-and-machine-learning-classes-in-netherlands', 'AI &amp; Machine Learning in the Netherlands']],
  'coding-classes-in-australia': [['ai-and-machine-learning-classes-in-hong-kong', 'AI &amp; Machine Learning in Hong Kong']]
};

// flatten both maps into one work list of [source, target, anchor]
const WORK = [];
for (const [src, [target, anchor]] of Object.entries(MAP)) WORK.push([src, target, anchor]);
for (const [src, pairs] of Object.entries(MAP2)) for (const [t, a] of pairs) WORK.push([src, t, a]);
for (const [src, pairs] of Object.entries(MAP3)) for (const [t, a] of pairs) WORK.push([src, t, a]);

let added = 0, skipped = 0, missing = 0, noSpot = 0;

for (const [src, target, anchor] of WORK) {
  const file = path.join(PAGES, src + '.html');
  if (!fs.existsSync(file)) { missing++; continue; }
  if (!fs.existsSync(path.join(PAGES, target + '.html'))) { missing++; continue; }

  let html = fs.readFileSync(file, 'utf8');
  if (html.includes(`href="/${target}"`)) { skipped++; continue; }

  // first <ul> inside the footer
  const fIdx = html.search(/<footer\b/i);
  if (fIdx === -1) { noSpot++; continue; }
  const ulClose = html.indexOf('</ul>', fIdx);
  if (ulClose === -1) { noSpot++; continue; }

  const li = `<li><a href="/${target}">${anchor}</a></li>\n          `;
  html = html.slice(0, ulClose) + li + html.slice(ulClose);

  if (!DRY) fs.writeFileSync(file, html, 'utf8');
  added++;
  console.log((DRY ? '[dry] ' : '') + src + '  ->  /' + target);
}

console.log(`\nlinks added: ${added}, already present: ${skipped}, target or source not built: ${missing}, no footer list: ${noSpot}`);
