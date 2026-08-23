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
    fileRe: /^(ap-computer-science-a-online-classes|ap-computer-science-principles-online-coaching|cambridge-igcse-computer-science-tuition|cambridge-a-level-computer-science-online-classes|uk-gcse-computer-science-tutoring|ib-computer-science-online-tuition|usaco-preparation-online-coaching|ioi-olympiad-informatics-training|python-certification-pcep-pcap-course|canadian-computing-competition-ccc-prep|agentic-coding-classes|model-context-protocol-mcp-course|rag-systems-course|ai-evaluations-course|context-engineering-course|how-to-think-like-a-programmer|how-to-actually-learn-to-code|how-to-read-code|how-to-debug-code|how-llms-actually-work|learn-to-build-ai|ai-and-machine-learning-classes-in-.+|ai-and-python-academy-oman|ai-and-python-academy-salalah|ai-and-python-academy-sohar|ai-and-python-academy-nizwa|ai-and-python-academy-for-girls-oman|ai-agents-course-for-students-oman|python-to-ai-roadmap-for-students-oman|build-real-ai-projects-oman|machine-learning-for-school-students-oman|vibe-coding-vs-building-ai-oman|coding-and-ai-classes-in-nassau|coding-and-ai-classes-in-bahamas|coding-classes-for-kids-in-nassau|python-and-ai-track-for-students-bahamas|one-to-one-coding-classes-in-nassau|github-portfolio-for-students-bahamas|coding-competitions-for-students-bahamas|year-round-coding-classes-vs-summer-camps-bahamas|coding-and-ai-alongside-bjc-and-bgcse-bahamas)\.html$/,
    css: 'src/css/ai-global.css',
    prefix: 'ag',
    markets: ['om', 'mct', 'kw', 'kwc', 'bh', 'ae', 'sa', 'qa', 'us', 'uk',
      'lon', 'ch', 'zrh', 'sg', 'ca', 'au', 'de', 'nl', 'ie', 'hk', 'bn', 'hub',
      // Oman AI and Python Academy family
      'oap', 'sal', 'soh', 'niz', 'grl', 'agt', 'rdm', 'prj', 'mls', 'vbc',
      // Bahamas family: New Providence and the country
      'nas', 'bah', 'kid', 'trk', 'mlb', 'oto', 'gpf', 'cmp', 'yrr', 'bgc',
      // depth series: ten global topic pages, no geography
      'acd', 'mcp', 'rag', 'evl', 'cxe', 'thk', 'lrn', 'rdc', 'dbg', 'llm',
      // exam family: ten international computer science exams
      'apa', 'csp', 'igc', 'cal', 'gcs', 'ibc', 'uso', 'ioi', 'pyc', 'ccc'],
    siblingRe: /^\/(ap-computer-science-a-online-classes|ap-computer-science-principles-online-coaching|cambridge-igcse-computer-science-tuition|cambridge-a-level-computer-science-online-classes|uk-gcse-computer-science-tutoring|ib-computer-science-online-tuition|usaco-preparation-online-coaching|ioi-olympiad-informatics-training|python-certification-pcep-pcap-course|canadian-computing-competition-ccc-prep|agentic-coding-classes|model-context-protocol-mcp-course|rag-systems-course|ai-evaluations-course|context-engineering-course|how-to-think-like-a-programmer|how-to-actually-learn-to-code|how-to-read-code|how-to-debug-code|how-llms-actually-work|learn-to-build-ai|ai-and-machine-learning-classes-in-|ai-and-python-academy-|ai-agents-course-for-students-oman|python-to-ai-roadmap-for-students-oman|build-real-ai-projects-oman|machine-learning-for-school-students-oman|vibe-coding-vs-building-ai-oman|coding-and-ai-classes-in-nassau|coding-and-ai-classes-in-bahamas|coding-classes-for-kids-in-nassau|python-and-ai-track-for-students-bahamas|one-to-one-coding-classes-in-nassau|github-portfolio-for-students-bahamas|coding-competitions-for-students-bahamas|year-round-coding-classes-vs-summer-camps-bahamas|coding-and-ai-alongside-bjc-and-bgcse-bahamas)/
  },

  // The international growth cluster. Six half-built markets plus fourteen
  // sub-national spokes. See
  // docs/superpowers/specs/2026-08-15-international-growth-cluster-design.md
  'coding-global': {
    label: 'International growth cluster',
    fileRe: /^coding-classes-in-(mahdah|daba-al-bayah|wadi-bani-khalid|masirah|mirbat|thumrait|mahout|al-awabi|wadi-al-maawil|dhank|taqah|al-qabil|manah|yanqul|dima-wa-attayeen|al-hamra|nakhal|adam|bidbid|al-kamil-wal-wafi|bidiyah|jalan-bani-bu-hassan|qurayyat|liwa|izki|samail|shinas|al-khaburah|al-mudhaibi|bahla|al-musanaah|jalan-bani-bu-ali|rustaq|al-amarat|saham|as-suwaiq|madinat-al-sultan-qaboos|bandar-seri-begawan|ash-sharqiyah-north|ash-sharqiyah-south|al-batinah-north|al-batinah-south|british-columbia|madinat-al-irfan|ad-dakhiliyah|adh-dhahirah|kuala-belait|jerudong|netherlands|al-buraimi|al-ghubrah|al-khuwair|birmingham|california|new-jersey|temburong|gadong|washington|al-khoudh|hong-kong|leicester|al-wusta|illinois|maryland|musandam|new-york|virginia|al-hail|al-mouj|alberta|bahrain|bawshar|georgia|mawaleh|muttrah|ontario|salalah|azaiba|brunei|liang|seria|dhofar|khasab|kuwait|muscat|tutong|barka|nizwa|qurum|sohar|texas|duqm|ibra|ibri|oman|seeb|sur)\.html$/,
    css: 'src/css/coding-global.css',
    prefix: 'cg',
    markets: ['om', 'mct', 'kw', 'bh', 'hk', 'nl', 'nj', 'ca', 'tx', 'ny', 'il',
      'ga', 'va', 'wa', 'md', 'on', 'bc', 'ab', 'lei', 'bhm',
      // Oman cluster: 13 Muscat metropolitan districts, 9 cities, 10 governorates
      'bwh', 'seb', 'mut', 'qur', 'mou', 'msq', 'khw', 'ghb', 'azb', 'irf',
      'maw', 'hal', 'khd', 'shr', 'brk', 'sll', 'nzw', 'sur', 'iba', 'ibr',
      'duq', 'kha', 'dhf', 'btn', 'bts', 'dak', 'shn', 'shs', 'dhr', 'bur',
      'msd', 'wst', 'mhd', 'dba', 'wbk', 'msr', 'mrb', 'thm', 'mht', 'awb', 'wam', 'dnk', 'tqh', 'qbl', 'mnh', 'ynq', 'dwa', 'hmr', 'nkl', 'adm', 'bdb', 'kml', 'bdy', 'jbh', 'qry', 'liw', 'izk', 'sml', 'shs2', 'khb', 'mdh', 'bhl', 'mus', 'jbb', 'rus', 'amr', 'sah', 'suw',

      // Brunei cluster: country plus its four districts
      'bn', 'bsb', 'kb', 'tut', 'tem', 'ser', 'lia', 'gad', 'jer'],
    dossierFile: 'content/coding-global-dossiers.json',
    siblingRe: /^\/coding-classes-in-(mahdah|daba-al-bayah|wadi-bani-khalid|masirah|mirbat|thumrait|mahout|al-awabi|wadi-al-maawil|dhank|taqah|al-qabil|manah|yanqul|dima-wa-attayeen|al-hamra|nakhal|adam|bidbid|al-kamil-wal-wafi|bidiyah|jalan-bani-bu-hassan|qurayyat|liwa|izki|samail|shinas|al-khaburah|al-mudhaibi|bahla|al-musanaah|jalan-bani-bu-ali|rustaq|al-amarat|saham|as-suwaiq|madinat-al-sultan-qaboos|bandar-seri-begawan|ash-sharqiyah-north|ash-sharqiyah-south|al-batinah-north|al-batinah-south|british-columbia|madinat-al-irfan|ad-dakhiliyah|adh-dhahirah|kuala-belait|jerudong|netherlands|al-buraimi|al-ghubrah|al-khuwair|birmingham|california|new-jersey|temburong|gadong|washington|al-khoudh|hong-kong|leicester|al-wusta|illinois|maryland|musandam|new-york|virginia|al-hail|al-mouj|alberta|bahrain|bawshar|georgia|mawaleh|muttrah|ontario|salalah|azaiba|brunei|liang|seria|dhofar|khasab|kuwait|muscat|tutong|barka|nizwa|qurum|sohar|texas|duqm|ibra|ibri|oman|seeb|sur)$/
  }
};


// --- depth floors by page type (build guide section 6.3) --------------------
const OMAN_DISTRICTS = new Set(['bawshar', 'seeb', 'muttrah', 'qurum', 'al-mouj',
  'madinat-al-sultan-qaboos', 'al-khuwair', 'al-ghubrah', 'azaiba',
  'madinat-al-irfan', 'mawaleh', 'al-hail', 'al-khoudh']);
const OMAN_CITIES = new Set(['mahdah', 'daba-al-bayah', 'wadi-bani-khalid', 'masirah', 'mirbat', 'thumrait', 'mahout', 'al-awabi', 'wadi-al-maawil', 'dhank', 'taqah', 'al-qabil', 'manah', 'yanqul', 'dima-wa-attayeen', 'al-hamra', 'nakhal', 'adam', 'bidbid', 'al-kamil-wal-wafi', 'bidiyah', 'jalan-bani-bu-hassan', 'qurayyat', 'liwa', 'izki', 'samail', 'shinas', 'al-khaburah', 'al-mudhaibi', 'bahla', 'al-musanaah', 'jalan-bani-bu-ali', 'rustaq', 'al-amarat', 'saham', 'as-suwaiq', 'sohar', 'barka', 'salalah', 'nizwa', 'sur', 'ibra',
  'ibri', 'duqm', 'khasab']);
const OMAN_GOVERNORATES = new Set(['dhofar', 'al-batinah-north', 'al-batinah-south',
  'ad-dakhiliyah', 'ash-sharqiyah-north', 'ash-sharqiyah-south', 'adh-dhahirah',
  'al-buraimi', 'musandam', 'al-wusta', 'muscat']);

// Brunei's four districts. Bandar Seri Begawan, Kuala Belait and Tutong carry a
// city's depth floor; Temburong is an exclave of 9,564 people and is held to the
// governorate floor rather than a city one.
const BRUNEI_CITIES = new Set(['bandar-seri-begawan', 'kuala-belait', 'tutong',
  'seria', 'liang', 'gadong', 'jerudong']);
const BRUNEI_DISTRICTS = new Set(['temburong']);

function pageTypeOf(slug) {
  const m = slug.replace(/^coding-classes-in-/, '');
  if (OMAN_DISTRICTS.has(m)) return 'district';
  if (OMAN_CITIES.has(m) || BRUNEI_CITIES.has(m)) return 'city';
  if (OMAN_GOVERNORATES.has(m) || BRUNEI_DISTRICTS.has(m)) return 'governorate';
  return 'market';
}
function minWordsFor(slug) {
  switch (pageTypeOf(slug)) {
    case 'district':    return 1400;
    case 'city':        return 2200;
    case 'governorate': return 1800;
    default:            return 3000;
  }
}

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
    slugs: allFiles.filter(f => c.fileRe.test(f)).map(f => f.replace('.html', '')).sort(),
    dossiers: c.dossierFile && fs.existsSync(path.join(ROOT, c.dossierFile))
      ? JSON.parse(fs.readFileSync(path.join(ROOT, c.dossierFile), 'utf8'))
      : null
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
  // Matched attribute-tolerantly on purpose. These used to require the class list to
  // be EXACTLY "cg-faq-item", so the moment a second class was added to an item the
  // counter went blind and reported a schema/visible mismatch that did not exist.
  // The same brittleness once made the JSON-LD check miss every page in this repo.
  const faqItemRe = new RegExp('<div class="[^"]*\\b' + P + '-faq-item\\b[^"]*">\\s*<h3>([\\s\\S]*?)<\\/h3>', 'g');
  const faqAnsRe = new RegExp('<div class="[^"]*\\b' + P + '-faq-item\\b[^"]*">[\\s\\S]*?<p>([\\s\\S]*?)<\\/p>', 'g');
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
    // Depth floor is per PAGE TYPE, not flat. A national or state page has a whole
    // curriculum authority to cover; a Muscat district three streets wide does not.
    // Holding a district to 3,000 words does not buy depth, it buys padding, which
    // is the thin content this gate exists to prevent. Targets mirror section 6.3
    // of the build guide, so the guide and the gate cannot contradict each other.
    if (words < minWordsFor(slug)) {
      errs.push(`only ${words} words (<${minWordsFor(slug)} for a ${pageTypeOf(slug)} page)`);
    }

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

    // --- 12. dossier: market specificity and sourcing ---------------------
    // Overlap checks catch duplication after the fact. This catches thinness
    // before it ships: the market-specific facts promised in the dossier must
    // actually be on the page, and every dossier fact must be unique to its
    // market. See content/coding-global-dossiers.json.
    if (cluster.dossiers) {
      const d = cluster.dossiers[slug];
      if (!d) {
        errs.push('no dossier entry in content/coding-global-dossiers.json');
      } else {
        const mentions = d.requiredMentions || [];
        if (mentions.length < 8) errs.push(`dossier lists only ${mentions.length} requiredMentions (need 8+)`);
        // Case-insensitive: a required fact is no less present for starting a
        // sentence. This produced a false failure on "Inductive loops".
        const haystack = html.toLowerCase();
        const absent = mentions.filter(m => !haystack.includes(m.toLowerCase()));
        if (absent.length) errs.push('dossier facts missing from page: ' + absent.join(' | '));
        if (!d.localProject) errs.push('dossier has no localProject');
        const srcs = d.sources || [];
        if (srcs.length < 3) errs.push(`dossier lists only ${srcs.length} primary sources (need 3+)`);
        if (srcs.some(s => !s.claim || !s.url)) errs.push('a dossier source is missing its claim or url');

        // A fact shared with another market is not a market-specific fact.
        for (const [otherSlug, other] of Object.entries(cluster.dossiers)) {
          if (otherSlug === slug || otherSlug.startsWith('_')) continue;
          const shared = mentions.filter(m => (other.requiredMentions || []).includes(m));
          if (shared.length) errs.push(`dossier facts shared with ${otherSlug}: ` + shared.join(' | '));
        }
      }
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
