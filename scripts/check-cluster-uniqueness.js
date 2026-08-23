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

// ---------------------------------------------------------------------------
// Cluster registry. Each cluster owns the filename pattern for its own members,
// the pre-existing pages it is most likely to accidentally clone, and the class
// prefix used to strip its designed-to-repeat components.
// ---------------------------------------------------------------------------
const CLUSTERS = {
  'build-ai': {
    label: 'Build-AI cluster',
    fileRe: /^(ap-computer-science-a-online-classes|ap-computer-science-principles-online-coaching|cambridge-igcse-computer-science-tuition|cambridge-a-level-computer-science-online-classes|uk-gcse-computer-science-tutoring|ib-computer-science-online-tuition|usaco-preparation-online-coaching|ioi-olympiad-informatics-training|python-certification-pcep-pcap-course|canadian-computing-competition-ccc-prep|agentic-coding-classes|model-context-protocol-mcp-course|rag-systems-course|ai-evaluations-course|context-engineering-course|how-to-think-like-a-programmer|how-to-actually-learn-to-code|how-to-read-code|how-to-debug-code|how-llms-actually-work|learn-to-build-ai|ai-and-machine-learning-classes-in-.+|ai-and-python-academy-oman|ai-and-python-academy-salalah|ai-and-python-academy-sohar|ai-and-python-academy-nizwa|ai-and-python-academy-for-girls-oman|ai-agents-course-for-students-oman|python-to-ai-roadmap-for-students-oman|build-real-ai-projects-oman|machine-learning-for-school-students-oman|vibe-coding-vs-building-ai-oman|coding-and-ai-classes-in-nassau|coding-and-ai-classes-in-bahamas|coding-classes-for-kids-in-nassau|python-and-ai-track-for-students-bahamas|one-to-one-coding-classes-in-nassau|github-portfolio-for-students-bahamas|coding-competitions-for-students-bahamas|year-round-coding-classes-vs-summer-camps-bahamas|coding-and-ai-alongside-bjc-and-bgcse-bahamas)\.html$/,
    prefix: 'ag',
    incumbents: [
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
    ]
  },

  // The international growth cluster. Its members are SPOKES of country hubs,
  // so the hubs are the highest-risk incumbents, followed by the Build-AI page
  // for the same market, which is the true sibling most likely to collide.
  'coding-global': {
    label: 'International growth cluster',
    fileRe: /^coding-classes-in-(wadi-al-maawil|dhank|taqah|al-qabil|manah|yanqul|dima-wa-attayeen|al-hamra|nakhal|adam|bidbid|al-kamil-wal-wafi|bidiyah|jalan-bani-bu-hassan|qurayyat|liwa|izki|samail|shinas|al-khaburah|al-mudhaibi|bahla|al-musanaah|jalan-bani-bu-ali|rustaq|al-amarat|saham|as-suwaiq|madinat-al-sultan-qaboos|bandar-seri-begawan|ash-sharqiyah-north|ash-sharqiyah-south|al-batinah-north|al-batinah-south|british-columbia|madinat-al-irfan|ad-dakhiliyah|adh-dhahirah|kuala-belait|jerudong|netherlands|al-buraimi|al-ghubrah|al-khuwair|birmingham|california|new-jersey|temburong|gadong|washington|al-khoudh|hong-kong|leicester|al-wusta|illinois|maryland|musandam|new-york|virginia|al-hail|al-mouj|alberta|bahrain|bawshar|georgia|mawaleh|muttrah|ontario|salalah|azaiba|brunei|liang|seria|dhofar|khasab|kuwait|muscat|tutong|barka|nizwa|qurum|sohar|texas|duqm|ibra|ibri|oman|seeb|sur)\.html$/,
    prefix: 'cg',
    incumbents: [
      // country hubs these pages spoke from
      'coding-classes-in-united-states',
      'coding-classes-in-united-kingdom',
      'coding-classes-in-canada',
      'coding-classes-in-australia',
      'coding-classes-in-uae',
      'coding-classes-in-qatar',
      'coding-classes-in-saudi-arabia',
      'coding-classes-in-singapore',
      'coding-classes-in-switzerland',
      'coding-classes-in-germany',
      'coding-classes-in-ireland',
      'coding-classes-in-new-zealand',
      'coding-classes-in-sweden',
      'coding-classes-in-india',
      // the matching Build-AI page for the same market
      'ai-and-machine-learning-classes-in-oman',
      'ai-and-machine-learning-classes-in-muscat',
      'ai-and-machine-learning-classes-in-kuwait',
      'ai-and-machine-learning-classes-in-bahrain',
      'ai-and-machine-learning-classes-in-hong-kong',
      'ai-and-machine-learning-classes-in-netherlands',
      'ai-and-machine-learning-classes-in-usa',
      'ai-and-machine-learning-classes-in-uk',
      'ai-and-machine-learning-classes-in-canada',
      'ai-and-machine-learning-classes-in-london',
      // geo pages on adjacent intent
      'online-coding-classes-for-kids-usa',
      'online-coding-classes-for-kids-uk',
      'online-maths-tutoring-for-kids-in-usa',
      'online-math-tutor-canada'
    ]
  }
};

const requested = process.argv[2];
if (requested && !CLUSTERS[requested]) {
  console.error('Unknown cluster: ' + requested);
  console.error('Known clusters: ' + Object.keys(CLUSTERS).join(', '));
  process.exit(2);
}
const ACTIVE_NAME = requested || 'build-ai';
const ACTIVE = CLUSTERS[ACTIVE_NAME];

const CLUSTER = fs.readdirSync(PAGES)
  .filter(f => ACTIVE.fileRe.test(f))
  .map(f => f.replace('.html', ''));

const INCUMBENTS = ACTIVE.incumbents
  .filter(s => fs.existsSync(path.join(PAGES, s + '.html')));

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
// NOTE ON WHAT IS STRIPPED: only components whose copy is identical BY DESIGN
// across the cluster. Call-to-action buttons, the brand-facts line, breadcrumbs,
// section eyebrow labels and course codes are chrome, not content.
// Everything that is supposed to be original stays in: the h1, the hero lede,
// the answer capsule, all body paragraphs, the market ML project, and every FAQ
// answer. Strip more than this and the check stops meaning anything.
// Named by suffix and prefixed per cluster below, so a new cluster inherits the
// same honest line without a second list drifting out of sync.
const SHARED_SUFFIXES = [
  'spec', 'price', 'review', 'proj', 'trust', 'form-panel', 'markets',
  'btn-row', 'hero-note', 'crumbs', 'eyebrow', 'course-code', 'capsule-q',
  'band-head', 'chip', 'slot-time'
];

// Also strips cg-pick, the course strip under the hero: same catalogue, same
// thumbnails, same blurbs on every market page by design.
// Spoke pages carry the SAME course cards as the hub they spoke from, by design:
// the catalogue does not change per market. Leaving them in would flood the
// signal with catalogue text and mask real body-prose duplication, which is the
// exact thing this script exists to catch. Original prose all still counts: the
// h1, hero lede, answer capsule, every body paragraph, the local project brief
// and every FAQ answer.
// The Oman cluster added more furniture that is identical on every page BY DESIGN:
// the contact block and mobile bar (guide section 18 mandates them verbatim), the
// price grid, and the form/contact two-column wrapper. Stripping them stops the
// score reporting required chrome as duplication.
// NOT stripped, on purpose: the #placement and #delivery prose. That IS shared text
// the pages should not have had, and the score must keep showing it.
const SPOKE_EXTRA_SUFFIXES = ['course-card', 'pick', 'picks-more', 'boiler',
  'contact-card', 'contact-row', 'contact-bar', 'contact-bar-in', 'contact-grid',
  'sticky', 'form-layout', 'price-grid', 'price-label', 'hero-actions', 'breadcrumb',
  // the course ladder is the SAME catalogue on every market page, exactly like
  // cg-course-card, and 'verified' is the one-line freshness stamp section 18.4
  // requires verbatim. Both are mandated chrome, not authored prose.
  'ladder', 'verified',
  // cg-callout is touchpoint 3 of the four the guide mandates, and its wording
  // is fixed by section 18.1. Same status as the price block: required chrome.
  'callout'];

const SHARED_COMPONENTS = [
  ...SHARED_SUFFIXES.map(s => ACTIVE.prefix + '-' + s),
  ...(ACTIVE_NAME === 'coding-global' ? SPOKE_EXTRA_SUFFIXES.map(s => ACTIVE.prefix + '-' + s) : [])
];

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

console.log('Cluster: ' + ACTIVE.label + ' (' + ACTIVE_NAME + ')');
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
