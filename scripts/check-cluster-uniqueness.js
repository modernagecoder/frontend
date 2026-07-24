#!/usr/bin/env node
/**
 * check-cluster-uniqueness.js
 *
 * The owner's requirement for the Build-AI cluster is unique content: no thin
 * pages, no duplicates. Word counts do not prove that. This does.
 *
 * Method: reduce each page to its visible prose, cut it into overlapping
 * 7-word shingles, and measure what fraction of each page's shingles also
 * appear on another page. Two pages written from a template with the nouns
 * swapped will score high here even though a human skim would call them
 * different.
 *
 * Compared against:
 *   - every other page in the cluster
 *   - the pre-existing AI and geo pages most at risk of being cloned
 *
 * Deliberately shared boilerplate (nav, footer, review quotes, course titles,
 * pricing lines) is stripped before comparison, so what remains is the prose
 * that is supposed to be original.
 *
 * Usage: node scripts/check-cluster-uniqueness.js
 * Exit code 1 if any page exceeds the threshold.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES = path.join(ROOT, 'src/pages');
const SHINGLE = 7;
const WARN = 0.06;   // 6 percent of shingles shared with one other page
const FAIL = 0.12;   // 12 percent is a template with the nouns swapped

const CLUSTER = fs.readdirSync(PAGES)
  .filter(f => /^(learn-to-build-ai|ai-and-machine-learning-classes-in-.+)\.html$/.test(f))
  .map(f => f.replace('.html', ''));

// Pre-existing pages a "build AI" page is most likely to accidentally clone.
const INCUMBENTS = [
  'online-ai-and-machine-learning-classes',
  'how-to-build-ai-models',
  'machine-learning-course-for-beginners',
  'ai-ml-course-for-college-students',
  'ai-ml-course-for-teens',
  'deep-learning-course',
  'ai-ml-certification-course',
  'machine-learning-from-scratch',
  'how-ai-actually-works',
  'coding-classes-in-uae',
  'coding-classes-in-qatar',
  'coding-classes-in-saudi-arabia',
  'ai-classes-in-dubai',
  'coding-classes-in-united-states',
  'coding-classes-in-united-kingdom',
  'coding-classes-in-switzerland',
  'coding-classes-in-singapore'
].filter(s => fs.existsSync(path.join(PAGES, s + '.html')));

// Text that is SUPPOSED to repeat across the cluster and must not count as
// duplication: real review quotes, project blurbs, course titles, brand facts.
const ALLOWED = [
  'the one step solution for my son',
  'modern age coders has been a game-changer for me',
  'one of the most wonderful education centres out there',
  'my child dhairya is really enjoying',
  'modern age coders have wonderful teachers',
  'coding classes here make learning very interesting',
  'my son has been attending this coding class',
  'i highly recommend this computer coding class',
  'i absolutely love it here',
  'the classes are excellent',
  'rated 4.9 across 547 google reviews',
  'live online coding, ai and mathematics for ages 6 to 67',
  'teaching since 2020, more than 10,000 students',
  'no card. no obligation. we call, we do not spam',
  'a real class, not a sales call',
  'doubles as a placement check',
  'five to eight students, same teacher every week',
  'live video, never a recording',
  'certificate on completion',
  'private teaching',
  'nutrilife', 'misti', 'guardianx', 'skycast',
  'open the syllabus', 'open all courses', 'open the live project'
];

// Components that are DESIGNED to repeat across every page in the cluster.
// Stripping them structurally is far more reliable than listing their phrases,
// and it stops shared chrome from masking real body-prose duplication.
const SHARED_COMPONENTS = ['ag-spec', 'ag-price', 'ag-review', 'ag-proj', 'ag-trust', 'ag-form-panel', 'ag-markets'];

function stripByClass(html, cls) {
  // non-greedy element removal for the common one-level-nested case
  const open = new RegExp('<(\\w+)[^>]*class="[^"]*\\b' + cls + '\\b[^"]*"[^>]*>', 'i');
  let guard = 0;
  while (guard++ < 200) {
    const m = open.exec(html);
    if (!m) break;
    const tag = m[1];
    let i = m.index + m[0].length, depth = 1;
    const re = new RegExp('</?' + tag + '\\b', 'gi');
    re.lastIndex = i;
    let t;
    while ((t = re.exec(html)) !== null) {
      if (t[0][1] === '/') { depth--; if (!depth) { i = t.index + t[0].length; break; } }
      else depth++;
    }
    html = html.slice(0, m.index) + ' ' + html.slice(i);
  }
  return html;
}

function visibleText(file) {
  let html = fs.readFileSync(path.join(PAGES, file + '.html'), 'utf8');
  html = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<head[\s\S]*?<\/head>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ');
  for (const c of SHARED_COMPONENTS) html = stripByClass(html, c);
  html = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/gi, ' ');
  let text = html.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  for (const a of ALLOWED) {
    const clean = a.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
    if (clean) text = text.split(clean).join(' ');
  }
  return text;
}

function shingles(text) {
  const w = text.split(' ').filter(Boolean);
  const s = new Set();
  for (let i = 0; i + SHINGLE <= w.length; i++) s.add(w.slice(i, i + SHINGLE).join(' '));
  return s;
}

function overlap(a, b) {
  let n = 0;
  for (const s of a) if (b.has(s)) n++;
  return a.size ? n / a.size : 0;
}

if (!CLUSTER.length) {
  console.log('No cluster pages found yet.');
  process.exit(0);
}

console.log('Cluster pages: ' + CLUSTER.length);
console.log('Incumbent pages compared against: ' + INCUMBENTS.length);
console.log('Shingle size ' + SHINGLE + ' words. warn >' + (WARN * 100) + '%, fail >' + (FAIL * 100) + '%\n');

const sets = {};
for (const p of [...CLUSTER, ...INCUMBENTS]) sets[p] = shingles(visibleText(p));

let worst = 0, failures = 0;
const rows = [];

for (const a of CLUSTER) {
  let topPair = null, topScore = 0;
  for (const b of [...CLUSTER, ...INCUMBENTS]) {
    if (a === b) continue;
    const o = overlap(sets[a], sets[b]);
    if (o > topScore) { topScore = o; topPair = b; }
  }
  worst = Math.max(worst, topScore);
  const flag = topScore > FAIL ? 'FAIL' : topScore > WARN ? 'warn' : 'ok  ';
  if (topScore > FAIL) failures++;
  rows.push({ a, topPair, topScore, flag, words: sets[a].size });
}

rows.sort((x, y) => y.topScore - x.topScore);
for (const r of rows) {
  console.log(
    r.flag + '  ' + (r.topScore * 100).toFixed(1).padStart(5) + '%  ' +
    r.a.padEnd(48) + ' vs ' + (r.topPair || '-')
  );
}

console.log('\nHighest overlap on any page: ' + (worst * 100).toFixed(1) + '%');

// Show the actual shared phrases for the worst offender, so a fix is actionable.
if (rows.length && rows[0].topScore > WARN) {
  const { a, topPair } = rows[0];
  const shared = [...sets[a]].filter(s => sets[topPair].has(s)).slice(0, 12);
  console.log('\nSample shared phrases, ' + a + ' vs ' + topPair + ':');
  shared.forEach(s => console.log('   "' + s + '"'));
}

if (failures) {
  console.log('\n' + failures + ' page(s) over the fail threshold. Rewrite, do not reword.');
  process.exit(1);
}
console.log('\nAll cluster pages within threshold.');
