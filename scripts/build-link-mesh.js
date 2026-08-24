#!/usr/bin/env node
/**
 * build-link-mesh.js
 * ------------------------------------------------------------------
 * Site-wide internal link mesh. Every indexable page gets a
 * "Keep exploring Modern Age Coders" block (between
 * <!-- BEGIN_LINK_MESH --> and <!-- END_LINK_MESH -->) that links to:
 *
 *   1. Related pages in its own cluster: a ring (its alphabetical
 *      neighbours inside the same sub-cluster, so Kolkata localities
 *      link Kolkata localities and Python chapters link Python chapters)
 *      plus long-range picks that deliberately point at the pages with
 *      the fewest inbound links, so authority is spread instead of pooled.
 *   2. Learn more: the most relevant pages from OTHER clusters
 *      (shared language / audience / place / topic tokens).
 *   3. Free resources: chapters + hub matching the page's language.
 *   4. From the blog: matching posts + the blog topic hub.
 *   5. Start here: two rotating money pages with brand anchor text.
 *
 * Deterministic (hash-spread by URL), idempotent, theme-neutral inline
 * styling so it reads correctly on every page design. Runs at build
 * time after generate:html so generated blog/course/resource pages get
 * the block too, and before generate:derived so the markdown twins and
 * llms-full.txt carry the same links.
 *
 * Usage:
 *   node scripts/build-link-mesh.js --dry     # stats only
 *   node scripts/build-link-mesh.js           # write
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DRY = process.argv.includes('--dry');
const START = '<!-- BEGIN_LINK_MESH -->';
const END = '<!-- END_LINK_MESH -->';

const RING = 6;          // same-cluster neighbours
const LONG = 3;          // long-range same-cluster picks aimed at weak pages
const CROSS = 4;         // cross-cluster relevance picks
const RES = 3;           // resource chapters
const BLOG = 3;          // blog posts
const MIN_INBOUND = 15;  // every page should end with at least this many mesh+existing inbound (margin over the 10 target)

// Pages that must never host or receive mesh links.
const EXCLUDE_SLUGS = new Set(['404', 'login', 'index2', 'dummy', 'form-example', 'check-status', 'search',
  'battle', 'battle-admin', 'battle-screen', 'hackathon-login', 'thank-you', 'welcome', 'sitemap']);

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------
function fnv(s) { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h >>> 0; }
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function decode(s) { return String(s).replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>'); }
function walk(d, out) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const f = path.join(d, e.name); if (e.isDirectory()) walk(f, out); else if (e.name === 'index.html' || (e.name.endsWith('.html') && !d.includes('generated'))) out.push(f); } return out; }
function cleanTitle(t) {
  let s = decode(t || '').replace(/\s+/g, ' ').replace(/\s*[|\-–:]\s*Modern Age Coders.*$/i, '').replace(/^Modern Age Coders\s*[|\-–:]\s*/i, '').trim();
  // Never put a price in anchor text: prices change, and pricing:verify rightly flags a
  // page that "shows a price" without loading the pricing scripts.
  s = s.replace(/\s*(?:from|at|only|just|under|starting(?: at)?)?\s*[\(\[]?\s*(?:₹|rs\.?|inr|usd|us\$|\$|€|£|aed|sar|qar)\s?[\d,]+(?:\.\d+)?(?:\s?(?:k|lakh|per month|\/month|\/mo|a month|monthly|per class|\/class|per hour|\/hr|onwards|\+))?[\)\]]?/gi, '')
    .replace(/\s*[\(\[]\s*[\)\]]/g, '').replace(/\s{2,}/g, ' ').replace(/[\s,:;\-–]+$/, '').trim();
  // Anchor text: keep the primary phrase, drop the SERP-style tail after " | ", " · " or " - "
  const cut = s.search(/\s+[|·]\s+|\s+-\s+(?=[A-Z0-9])/);
  if (cut > 10) s = s.slice(0, cut).trim();
  if (s.length > 72) {
    // prefer a clause boundary, then a word boundary
    const clause = Math.max(s.lastIndexOf(': ', 72), s.lastIndexOf(', ', 72), s.lastIndexOf(' (', 72));
    const c = clause > 28 ? clause : s.lastIndexOf(' ', 64);
    s = s.slice(0, c > 28 ? c : 64).replace(/[,:;\-(]$/, '').trim();
  }
  return s;
}
function meta(html, name) { const m = html.match(new RegExp('<meta\\s+(?:name|property)="' + name + '"[^>]*?content="([^"]*)"', 'i')) || html.match(new RegExp('<meta\\s+content="([^"]*)"[^>]*?(?:name|property)="' + name + '"', 'i')); return m ? decode(m[1]) : ''; }

const LANGS = { python: /python|pcep/, java: /\bjava\b|oca-java|java-/, javascript: /javascript|\bjs\b|node|react|typescript/, cpp: /c-plus-plus|\bcpp\b|c\+\+|cpa-cpp/, sql: /\bsql\b|database|mysql/, 'html-and-css': /html|css|web-dev|website|frontend|web-design/, 'ai-and-machine-learning': /\bai\b|machine-learning|artificial|deep-learning|neural|llm|data-science|generative|agents?\b/ };
const AUD = { kids: /kids?\b|children|child\b|year-olds|class-[1-8]\b|scratch|roblox|minecraft|primary|elementary|grade-[1-5]\b/, teens: /teens?|teenager|high-school|class-(9|10|11|12)|grade-(9|10|11|12)|cbse|icse|igcse|gcse|ib-|board/, college: /college|university|undergrad|placement|dsa|engineering|bca|btech/, adults: /adult|professional|working|career|corporate|business|for-business|upskill/ };
const MATH = /\bmaths?\b|mathematics|algebra|calculus|geometry|olympiad|abacus|vedic|arithmetic|\bstatistics\b|\bsat\b|\bact\b|\btuition\b|\btutor(s|ing)?\b/;
// Pages that may receive mesh links but must not host a block (full-screen experiences).
const HOST_EXCLUDE = new Set(['aura']);
// School-specific pages: only offered as cross-cluster picks to hosts in their own city cluster.
const SCHOOL_PAGE = /^(coding-and-maths-for-|coding-classes-for-dps-|coding-classes-for-.*-school)/;
const CROSS_CAP = 24; // max hosts any single page can be a cross-cluster pick for

function tokens(page) {
  const src = (page.slug + ' ' + page.title + ' ' + page.desc).toLowerCase();
  const t = new Set(src.replace(/[^a-z0-9+\-\s]/g, ' ').split(/[\s\-]+/).filter(w => w.length > 3 && !STOP.has(w)));
  return t;
}
const STOP = new Set(['with', 'from', 'that', 'this', 'your', 'have', 'more', 'best', 'online', 'classes', 'class', 'course', 'courses', 'coding', 'learn', 'learning', 'modern', 'coders', 'free', 'live', 'kids', 'teens', 'students', 'india', 'programming', 'tuition', 'tutor', 'tutoring', 'guide', 'complete', 'introduction', '2026', '2025', 'html']);

// ---------------------------------------------------------------------------
// inventory
// ---------------------------------------------------------------------------
function inventory() {
  const pages = [];
  const add = (file, url, cluster, sub) => {
    let html; try { html = fs.readFileSync(file, 'utf8'); } catch (e) { return; }
    if (/<meta\s+name="robots"[^>]*noindex/i.test(html)) return;
    const tm = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = cleanTitle(tm ? tm[1] : '');
    if (!title) return;
    const slug = url.replace(/^\//, '').replace(/\/$/, '') || 'home';
    const last = slug.split('/').pop();
    if (EXCLUDE_SLUGS.has(last) || EXCLUDE_SLUGS.has(slug)) return;
    const meshRe = new RegExp(START + '[\\s\\S]*?' + END + '\\n?');
    const p = { file, url, cluster, sub, title, slug, desc: meta(html, 'description'), html: html.replace(meshRe, ''), htmlRaw: html };
    const probe = (slug + ' ' + title).toLowerCase();
    p.langs = Object.keys(LANGS).filter(k => LANGS[k].test(probe));
    p.aud = Object.keys(AUD).filter(k => AUD[k].test(probe));
    p.maths = MATH.test(probe);
    p.tok = tokens(p);
    pages.push(p);
  };

  // hand-authored pages
  const pagesDir = path.join(ROOT, 'src', 'pages');
  for (const f of walk(pagesDir, [])) {
    const rel = path.relative(pagesDir, f).split(path.sep).join('/').replace(/\.html$/, '');
    const url = rel === 'index' ? '/' : '/' + rel;
    const s = rel.toLowerCase();
    let cluster = 'core', sub = 'core';
    if (/^coding-classes-near-|^coding-classes-in-.*-(kolkata|howrah)$/.test(s)) { cluster = 'geo-locality'; sub = s.includes('howrah') ? 'howrah' : 'kolkata'; }
    else if (/^best-coding-class-in-/.test(s)) { cluster = 'geo-city'; sub = (meta(fs.readFileSync(f, 'utf8'), 'geo.region') || 'IN').toLowerCase(); }
    else if (/^coding-classes-in-/.test(s)) { cluster = 'geo-intl'; sub = geoSub(s); }
    else if (/^(ai-and-machine-learning|python|ai-and-python|machine-learning|vibe-coding|coding-and-ai|one-to-one|coding-classes-for-kids-in|kids-coding|python-for-kids-in)-.*-(in|for)-|-(oman|bahamas|nassau|dubai|qatar|saudi-arabia|uae|singapore|muscat|salalah|sohar|nizwa)$/.test(s) && !/^coding-classes-for/.test(s)) { cluster = 'geo-intl'; sub = geoSub(s); }
    else if (/blog\/topic\//.test(s)) { cluster = 'blog-hub'; sub = 'hub'; }
    else if (/^category\/|^levels\//.test(s)) { cluster = 'category'; sub = 'cat'; }
    else if (/-vs-|alternative|comparison|-cost-|price|pricing/.test(s)) { cluster = 'compare'; sub = 'cmp'; }
    else if (MATH.test(s)) { cluster = 'maths'; sub = /uae|dubai|abu-dhabi|sharjah/.test(s) ? 'uae' : /usa|us-|grade|algebra|calculus|geometry|sat|act|ap-/.test(s) ? 'us' : /uk|gcse|ks[23]|a-level|11-plus|igcse|common-entrance|functional/.test(s) ? 'uk' : 'general'; }
    else if (/class-\d|year-olds|cbse|icse|for-class|-grade/.test(s)) { cluster = 'school'; sub = /year-olds/.test(s) ? 'age' : 'class'; }
    else { cluster = 'topic'; sub = langSub(s); }
    add(f, url, cluster, sub);
  }
  // generated blog
  const blogDir = path.join(ROOT, 'content', 'blog', 'generated');
  if (fs.existsSync(blogDir)) for (const d of fs.readdirSync(blogDir)) { const f = path.join(blogDir, d, 'index.html'); if (fs.existsSync(f)) { const html = fs.readFileSync(f, 'utf8'); const cat = (meta(html, 'article:section') || blogCategory(d, html)).toLowerCase(); add(f, '/blog/' + d, 'blog', cat); } }
  // generated courses
  const courseDir = path.join(ROOT, 'content', 'courses', 'generated');
  if (fs.existsSync(courseDir)) for (const d of fs.readdirSync(courseDir)) { const f = path.join(courseDir, d, 'index.html'); if (fs.existsSync(f)) add(f, '/courses/' + d, 'course', langSub(d)); }
  // generated resources
  const resDir = path.join(ROOT, 'content', 'resources', 'generated');
  if (fs.existsSync(resDir)) for (const lang of fs.readdirSync(resDir)) {
    const ld = path.join(resDir, lang); if (!fs.statSync(ld).isDirectory()) continue;
    const hub = path.join(ld, 'index.html'); if (fs.existsSync(hub)) add(hub, '/resources/' + lang, 'resource-hub', lang);
    for (const ch of fs.readdirSync(ld)) {
      const cd = path.join(ld, ch); if (!fs.statSync(cd).isDirectory()) continue;
      const n = path.join(cd, 'index.html'); if (fs.existsSync(n)) add(n, `/resources/${lang}/${ch}`, 'resource', lang);
      const pr = path.join(cd, 'practice', 'index.html'); if (fs.existsSync(pr)) add(pr, `/resources/${lang}/${ch}/practice`, 'resource-practice', lang);
    }
  }
  const master = path.join(resDir, 'index.html'); if (fs.existsSync(master)) add(master, '/resources', 'resource-hub', 'all');
  return pages;
}
function geoSub(s) {
  if (/oman|muscat|salalah|sohar|nizwa|batinah|dakhiliyah|dhahirah|buraimi|musandam|wusta|sharqiyah|dhofar|barka|seeb|qurum|khoudh|azaiba|mawaleh|muttrah|ruwi|bausher|amerat|khuwair|ghubra|irfan|qaboos|duqm|sur|ibri|ibra|rustaq|saham|sohar|khasab|haima|hail|hamra|amarat|awabi|dhank|dima|jabal|kamil|liwa|mahdah|manah|masirah|musanaah|qurayyat|samail|shinas|suwayq|taqah|thumrait|wadi|yanqul|bidbid|bidiyah|izki|mudhaibi|mirbat|sadah|dalkut|rakhyut|shalim|mazyunah/.test(s)) return 'oman';
  if (/uae|dubai|abu-dhabi|sharjah|ajman|qatar|doha|saudi|riyadh|jeddah|dammam|kuwait|bahrain|gulf/.test(s)) return 'gulf';
  if (/usa|united-states|california|texas|new-york|new-jersey|illinois|georgia|virginia|washington|maryland|florida|ohio|michigan|massachusetts|pennsylvania|arizona|colorado|north-carolina|canada|ontario|alberta|british-columbia|toronto|vancouver/.test(s)) return 'north-america';
  if (/uk|united-kingdom|london|birmingham|manchester|leicester|ireland|dublin|germany|switzerland|zurich|sweden|netherlands|europe/.test(s)) return 'europe';
  if (/singapore|australia|sydney|melbourne|new-zealand|hong-kong|brunei|bandar|gadong|jerudong|kuala-belait|seria|tutong|temburong|liang|malaysia/.test(s)) return 'apac';
  if (/bahamas|nassau/.test(s)) return 'bahamas';
  return 'india-state';
}
function langSub(s) { for (const k of Object.keys(LANGS)) if (LANGS[k].test(s)) return k; return MATH.test(s) ? 'maths' : 'general'; }
function blogCategory(slug, html) { const m = html.match(/"articleSection"\s*:\s*"([^"]+)"/) || html.match(/class="blog-category[^"]*"[^>]*>([^<]+)</i); return m ? m[1] : 'general'; }

// ---------------------------------------------------------------------------
// selection
// ---------------------------------------------------------------------------
const BLOG_HUB = { python: '/blog/topic/python', java: '/blog/topic/java', 'ai-and-machine-learning': '/blog/topic/ai', maths: '/blog/topic/maths', kids: '/blog/topic/kids-coding' };
const MONEY = [
  { url: '/courses', text: 'Browse every live course at Modern Age Coders' },
  { url: '/pricing', text: 'Modern Age Coders pricing, one honest price per plan' },
  { url: '/book-demo', text: 'Book a free demo class with Modern Age Coders' },
  { url: '/free-trial', text: 'Try a free trial class with a Modern Age Coders mentor' },
  { url: '/how-we-teach', text: 'How Modern Age Coders teaches, small batches and real projects' },
  { url: '/student-labs', text: 'Real projects built by Modern Age Coders students' },
  { url: '/about', text: 'About Modern Age Coders, teaching since 2020' },
  { url: '/love', text: 'What Modern Age Coders families say' },
];

function score(a, b) {
  let s = 0;
  for (const l of a.langs) if (b.langs.includes(l)) s += 3;
  for (const x of a.aud) if (b.aud.includes(x)) s += 1.5;
  if (a.maths && b.maths) s += 3;
  let shared = 0; for (const t of a.tok) if (b.tok.has(t)) shared++;
  s += Math.min(shared, 6) * 0.8;
  return s;
}

function build(pages, baselineInbound) {
  const byUrl = new Map(pages.map(p => [p.url, p]));
  const clusters = {};
  for (const p of pages) (clusters[p.cluster] = clusters[p.cluster] || []).push(p);
  for (const c of Object.values(clusters)) c.sort((a, b) => (a.sub + '|' + a.slug).localeCompare(b.sub + '|' + b.slug));
  const idx = new Map(); for (const c of Object.values(clusters)) c.forEach((p, i) => idx.set(p.url, i));

  // existing outbound links per page (so we prefer NEW edges)
  const existing = new Map();
  for (const p of pages) {
    const set = new Set();
    for (const m of p.html.replace(/<!--[\s\S]*?-->/g, '').matchAll(/href="(\/[^"#?]*)"/g)) set.add(m[1].replace(/\/$/, '') || '/');
    existing.set(p.url, set);
  }
  const inbound = new Map(); for (const p of pages) inbound.set(p.url, baselineInbound.get(p.url) || 0);
  const resources = pages.filter(p => p.cluster === 'resource');
  const blogs = pages.filter(p => p.cluster === 'blog');
  const topicish = pages.filter(p => ['topic', 'maths', 'course', 'school', 'compare', 'core', 'geo-intl', 'geo-city'].includes(p.cluster));

  const picks = new Map(); // url -> {groups}
  const crossCount = new Map();
  const blogCount = new Map();
  const BLOG_CAP = 60;
  for (const p of pages) {
    if (HOST_EXCLUDE.has(p.slug)) { picks.set(p.url, { related: [], cross: [], res: [], blog: [], money: [] }); continue; }
    const h = fnv(p.url);
    const used = new Set([p.url]);
    const ex = existing.get(p.url);
    const take = (arr, n, pref) => { const out = []; for (const q of arr) { if (out.length >= n) break; if (used.has(q.url)) continue; if (pref && ex.has(q.url)) continue; used.add(q.url); out.push(q); } return out; };

    // 1. ring inside the own SUB-cluster (same language / state / region) so neighbours
    // are topically adjacent; fall back to the whole cluster only when the sub is tiny
    const cl = clusters[p.cluster];
    const subRing = cl.filter(q => q.sub === p.sub);
    const ringPool = subRing.length > RING ? subRing : cl;
    const i = ringPool.findIndex(q => q.url === p.url); const ring = [];
    for (let d = 1; d <= Math.min(ringPool.length - 1, RING * 3) && ring.length < RING; d++) {
      for (const j of [(i + d) % ringPool.length, (i - d + ringPool.length) % ringPool.length]) { const q = ringPool[j]; if (ring.length < RING && !used.has(q.url) && !ex.has(q.url)) { used.add(q.url); ring.push(q); } }
    }
    // long-range: weakest pages in the same sub-cluster first (same language / same
    // state / same region), then the wider cluster, spread by hash
    const weakOf = pool => pool.filter(q => !used.has(q.url)).sort((a, b) => (inbound.get(a.url) - inbound.get(b.url)) || a.slug.localeCompare(b.slug));
    const longPicks = [];
    for (const pool of [weakOf(cl.filter(q => q.sub === p.sub)), weakOf(cl)]) {
      const window = Math.max(LONG * 4, Math.floor(pool.length / 3));
      for (let k = 0; longPicks.length < LONG && k < LONG && pool.length; k++) { const q = pool[(h + k * 7919) % Math.min(pool.length, window)]; if (q && !used.has(q.url)) { used.add(q.url); longPicks.push(q); } }
      if (longPicks.length >= LONG) break;
    }
    const related = [...ring, ...longPicks];

    // 2. cross-cluster relevance. School-specific pages only surface for hosts in the
    // Kolkata locality cluster or other school pages; every page is capped as a cross
    // pick site-wide so a few token-rich titles cannot monopolise the slot.
    const hostIsSchoolish = p.cluster === 'geo-locality' || SCHOOL_PAGE.test(p.slug);
    const hostIsGeo = p.cluster.startsWith('geo');
    // geo pages already carry their own place hierarchy; their "Learn more" should open
    // topic / maths / course pages, not other places
    const crossPool = topicish.filter(q => q.cluster !== p.cluster && !(hostIsGeo && q.cluster.startsWith('geo')) && (hostIsSchoolish || !SCHOOL_PAGE.test(q.slug)) && (crossCount.get(q.url) || 0) < CROSS_CAP);
    const tie = (a, b) => fnv(p.url + a.url) - fnv(p.url + b.url);
    const cross = take(crossPool.map(q => [score(p, q), q]).filter(x => x[0] >= 3).sort((a, b) => b[0] - a[0] || tie(a[1], b[1])).map(x => x[1]), CROSS, true);
    for (const q of cross) crossCount.set(q.url, (crossCount.get(q.url) || 0) + 1);

    // 3. resources by language; pages with no language get a rotating pair so the
    // hubs share the links instead of Python taking every default
    const DEFAULT_LANGS = ['python', 'ai-and-machine-learning', 'javascript', 'java', 'html-and-css', 'sql', 'cpp'];
    const langs = p.langs.length ? p.langs : (p.maths ? [] : [DEFAULT_LANGS[h % DEFAULT_LANGS.length], DEFAULT_LANGS[(h + 2) % DEFAULT_LANGS.length]]);
    const resPool = resources.filter(q => langs.includes(q.sub) && !used.has(q.url) && !ex.has(q.url));
    const res = []; for (let k = 0; k < RES && resPool.length; k++) { const q = resPool[(h + k * 104729) % resPool.length]; if (!used.has(q.url)) { used.add(q.url); res.push(q); } }
    const resHub = langs.length && p.cluster !== 'resource-hub' ? byUrl.get('/resources/' + langs[0]) : null;
    if (resHub && !used.has(resHub.url)) { used.add(resHub.url); res.unshift(resHub); }

    // 4. blog posts by relevance (hash tie-break + site-wide cap so ties spread), plus topic hub
    const blogPool = blogs.filter(q => (blogCount.get(q.url) || 0) < BLOG_CAP);
    const blogPicks = take(blogPool.map(q => [score(p, q), q]).sort((a, b) => b[0] - a[0] || tie(a[1], b[1])).map(x => x[1]), BLOG, true);
    for (const q of blogPicks) blogCount.set(q.url, (blogCount.get(q.url) || 0) + 1);
    const hubKey = p.maths ? 'maths' : (p.langs[0] || (p.aud.includes('kids') ? 'kids' : null));
    const hub = hubKey && BLOG_HUB[hubKey] ? byUrl.get(BLOG_HUB[hubKey]) : null;
    if (hub && !used.has(hub.url)) { used.add(hub.url); blogPicks.unshift(hub); }

    // 5. money
    const money = [MONEY[h % MONEY.length], MONEY[(h + 3) % MONEY.length]].filter(m => m.url !== p.url);

    picks.set(p.url, { related, cross, res, blog: blogPicks, money });
    for (const q of [...related, ...cross, ...res, ...blogPicks]) inbound.set(q.url, (inbound.get(q.url) || 0) + 1);
  }

  // boost pass: any page still under MIN_INBOUND gets extra hosts from its cluster + relevant pages
  let boosted = 0;
  for (let round = 0; round < 3; round++) {
    const lag = pages.filter(p => inbound.get(p.url) < MIN_INBOUND);
    if (!lag.length) break;
    for (const target of lag) {
      const need = MIN_INBOUND - inbound.get(target.url);
      const hosts = pages.filter(q => q.url !== target.url && !HOST_EXCLUDE.has(q.slug) && (q.cluster === target.cluster || score(q, target) >= 3))
        .sort((a, b) => (fnv(a.url + target.url) - fnv(b.url + target.url)));
      let added = 0;
      for (const hpage of hosts) {
        if (added >= need) break;
        const g = picks.get(hpage.url);
        const all = [...g.related, ...g.cross, ...g.res, ...g.blog];
        if (all.some(x => x.url === target.url) || existing.get(hpage.url).has(target.url)) continue;
        if (g.related.length >= RING + LONG + 4) continue;
        g.related.push(target); added++; boosted++;
        inbound.set(target.url, inbound.get(target.url) + 1);
      }
    }
  }
  return { picks, inbound, boosted };
}

// ---------------------------------------------------------------------------
// render + apply
// ---------------------------------------------------------------------------
const LABEL = { 'geo-city': 'Coding classes in nearby cities', 'geo-locality': 'Coding classes nearby', 'geo-intl': 'Coding classes in nearby places', maths: 'More maths tuition', topic: 'Related courses and guides', school: 'By class and age', compare: 'More comparisons', blog: 'More from the blog', 'blog-hub': 'Blog topics', course: 'Related courses', resource: 'More chapters', 'resource-practice': 'More practice sets', 'resource-hub': 'More free resources', category: 'Explore by level', core: 'More from Modern Age Coders' };
const link = (q, text) => `<li style="margin:0!important;padding:0!important;line-height:1.45;list-style:none!important;font-size:inherit"><a href="${esc(q.url)}" style="color:inherit;text-decoration:underline;text-decoration-color:rgba(127,127,127,.45);text-underline-offset:3px;display:inline;font-weight:inherit;font-size:inherit">${esc(text || q.title)}</a></li>`;
function render(p, g) {
  const groups = [];
  if (g.related.length) groups.push([LABEL[p.cluster] || 'Related pages', g.related.map(q => link(q))]);
  if (g.cross.length) groups.push(['Learn more', g.cross.map(q => link(q))]);
  if (g.res.length) groups.push(['Free resources', g.res.map(q => link(q))]);
  if (g.blog.length) groups.push(['From the blog', g.blog.map(q => link(q))]);
  if (g.money.length) groups.push(['Start here', g.money.map(m => link(m, m.text))]);
  if (!groups.length) return '';
  const cols = groups.map(([h, items]) => `      <div><h3 style="font-size:.78rem!important;letter-spacing:.08em;text-transform:uppercase;opacity:.72;margin:0 0 8px!important;padding:0!important;font-weight:700;line-height:1.3">${esc(h)}</h3><ul style="list-style:none!important;padding:0!important;margin:0!important;display:grid;gap:6px">\n${items.map(x => '        ' + x).join('\n')}\n      </ul></div>`).join('\n');
  return `${START}
<section class="mac-mesh" aria-label="Keep exploring Modern Age Coders" style="display:block!important;opacity:1!important;visibility:visible!important;transform:none!important;min-height:0!important;height:auto!important;max-height:none!important;overflow:visible!important;padding:36px 20px 40px!important;margin:0!important;border-top:1px solid rgba(127,127,127,.25);font-size:.92rem;line-height:1.5;text-align:left">
  <div style="max-width:1100px;margin:0 auto;opacity:1!important;transform:none!important">
    <h2 style="font-size:1.1rem;font-weight:800;margin:0 0 18px;opacity:1!important;transform:none!important">Keep exploring Modern Age Coders</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:22px 28px;opacity:1!important;transform:none!important">
${cols}
    </div>
  </div>
</section>
${END}`;
}
function apply(html, block) {
  if (html.includes(START) && html.includes(END)) return html.replace(new RegExp(START + '[\\s\\S]*?' + END), block);
  for (const anchor of ['<!-- BEGIN_INLINED_FOOTER -->', '<div id="footer-placeholder"', '<footer', '</body>']) {
    const i = html.indexOf(anchor); if (i !== -1) return html.slice(0, i) + block + '\n' + html.slice(i);
  }
  return null;
}

// ---------------------------------------------------------------------------
function main() {
  const pages = inventory();
  const byUrl = new Set(pages.map(p => p.url));
  // baseline inbound from existing links (contextual, page-to-page)
  const baseline = new Map();
  for (const p of pages) {
    const seen = new Set();
    for (const m of p.html.replace(/<!--[\s\S]*?-->/g, '').replace(/(<script\b[^>]*>)[\s\S]*?(<\/script>)/gi, '$1$2').matchAll(/href="(\/[^"#?]*)"/g)) {
      const u = (m[1].replace(/\/$/, '') || '/'); if (u === p.url || seen.has(u) || !byUrl.has(u)) continue; seen.add(u); baseline.set(u, (baseline.get(u) || 0) + 1);
    }
  }
  const { picks, inbound, boosted } = build(pages, baseline);
  let written = 0, unplaced = [], links = 0;
  for (const p of pages) {
    const g = picks.get(p.url);
    const block = render(p, g);
    if (!block) {
      // host-excluded page: make sure no stale block lingers from an earlier run
      if (p.htmlRaw.includes(START)) { const stripped = p.htmlRaw.replace(new RegExp(START + '[\\s\\S]*?' + END + '\\n?'), ''); if (!DRY) fs.writeFileSync(p.file, stripped, 'utf8'); written++; }
      continue;
    }
    links += g.related.length + g.cross.length + g.res.length + g.blog.length + g.money.length;
    const next = apply(p.htmlRaw, block);
    if (next == null) { unplaced.push(p.url); continue; }
    if (next !== p.htmlRaw) { if (!DRY) fs.writeFileSync(p.file, next, 'utf8'); written++; }
  }
  const counts = {}; for (const p of pages) counts[p.cluster] = (counts[p.cluster] || 0) + 1;
  const under = pages.filter(p => inbound.get(p.url) < MIN_INBOUND);
  console.log(`${DRY ? '[DRY] ' : ''}link mesh: ${pages.length} pages, ${links} mesh links (${(links / pages.length).toFixed(1)}/page), boosted ${boosted}, ${written} files ${DRY ? 'would change' : 'written'}`);
  console.log('clusters:', Object.entries(counts).map(([k, v]) => k + '=' + v).join(' '));
  console.log(`projected inbound: min ${Math.min(...inbound.values())}, pages under ${MIN_INBOUND}: ${under.length}${under.length ? ' -> ' + under.slice(0, 8).map(p => p.url).join(', ') : ''}`);
  if (unplaced.length) console.log('could not place block on:', unplaced.join(', '));
}
main();
