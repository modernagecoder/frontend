// Renders /coding-lang from catalogue.mjs + shell.html.
//
//   node scripts/coding-lang/build.mjs
//
// Writes src/pages/coding-lang.html and src/pages/coding-lang.md, and stamps
// the sitemap lastmod. Nav and footer are wrapped exactly the way
// scripts/inline-components.js wraps them, so the deploy-time build:inline
// step simply refreshes them. The BEGIN_LINK_MESH block already in the page
// is preserved (build-link-mesh.js owns it).
//
// Every on-site href in the catalogue is checked against _redirects and
// netlify.toml (and the course / blog / resource sources for wildcard routes)
// and the build FAILS on the first missing one. A dead link on a hub page
// with 130+ inbound links is not something to find out from Search Console.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CATEGORIES, PICKS, SNAPSHOT, AGE_TABLE, PATHS, FAQ, RELATED, UPDATED, CANONICAL } from './catalogue.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const rd = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const attr = esc;

// ---------- route validation ----------
const redirects = rd('_redirects');
const netlify = rd('netlify.toml');
const courseSlugs = new Set();
for (const f of fs.readdirSync(path.join(ROOT, 'content/courses/data'))) {
  if (!f.endsWith('.json') || f === 'courses-config.json') continue;
  const j = JSON.parse(rd('content/courses/data/' + f));
  if (j.meta && j.meta.slug) courseSlugs.add(j.meta.slug);
}
const blogSlugs = new Set();
for (const f of fs.readdirSync(path.join(ROOT, 'content/blog/data'))) {
  if (!f.endsWith('.json')) continue;
  try {
    const j = JSON.parse(rd('content/blog/data/' + f));
    const m = j.meta || j;
    if (m.slug) blogSlugs.add(m.slug);
  } catch (e) { /* skip malformed */ }
}
const resourceHubs = new Set(
  fs.existsSync(path.join(ROOT, 'content/resources/generated'))
    ? fs.readdirSync(path.join(ROOT, 'content/resources/generated')).filter(d => !d.includes('.'))
    : []
);

const missing = [];
function checkHref(href, where) {
  if (!href.startsWith('/')) return; // external or anchor
  if (href.startsWith('/#') || href === '/') return;
  if (href.startsWith('/courses/')) {
    if (!courseSlugs.has(href.slice('/courses/'.length))) missing.push(`${href} (no course JSON with that meta.slug) in ${where}`);
    return;
  }
  if (href.startsWith('/blog/')) {
    if (!blogSlugs.has(href.slice('/blog/'.length))) missing.push(`${href} (no blog JSON with that slug) in ${where}`);
    return;
  }
  if (href.startsWith('/resources/')) {
    const hub = href.split('/')[2];
    if (!resourceHubs.has(hub)) missing.push(`${href} (no resources hub "${hub}") in ${where}`);
    return;
  }
  const inRedirects = new RegExp(`^${href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} `, 'm').test(redirects);
  const inNetlify = netlify.includes(`from = "${href}"`);
  if (!inRedirects || !inNetlify) missing.push(`${href} (_redirects:${inRedirects} netlify.toml:${inNetlify}) in ${where}`);
}
const seenHrefs = new Set();
function link(href, where) { if (!seenHrefs.has(href)) { seenHrefs.add(href); checkHref(href, where); } return href; }

// ---------- data prep ----------
const allEntries = CATEGORIES.flatMap(c => c.entries.map(e => ({ ...e, cat: c })));
const TOTAL = allEntries.length;

const picks = PICKS.map(p => {
  const j = JSON.parse(rd(`content/courses/data/${p.file}.json`)).meta;
  const img = `/images/${j.image_path}`;
  if (!fs.existsSync(path.join(ROOT, 'public', 'images', j.image_path))) {
    throw new Error(`Pick ${p.file}: thumbnail public/images/${j.image_path} is missing. Refusing to ship a broken image in the first section.`);
  }
  return { slug: j.slug, title: j.title, level: j.level, duration: j.duration, img, blurb: p.blurb };
});

// ---------- HTML fragments ----------
function renderLinks(list, cls, where) {
  return list.map(l => `<a class="${cls}" href="${attr(link(l.href, where))}">${esc(l.label)}</a>`).join('');
}

function renderEntry(e, catId) {
  const where = `${catId}/${e.id}`;
  const search = [e.name, e.kind, e.version, ...e.fundamentals, e.usedFor].join(' ').toLowerCase();
  const kind = e.version ? `${e.kind}, ${e.version}` : e.kind;
  return `
        <article class="cl-card" id="${attr(e.id)}" data-search="${attr(search)}">
          <div class="cl-card-top">
            <h3 class="cl-card-name">${esc(e.name)}</h3>
            <span class="cl-card-kind">${esc(kind)}</span>
          </div>
          <p class="cl-card-desc">${esc(e.desc)}</p>
          <dl class="cl-facts">
            <dt>Fundamentals</dt>
            <dd><ul class="cl-tags">${e.fundamentals.map(f => `<li>${esc(f)}</li>`).join('')}</ul></dd>
            <dt>Used for</dt>
            <dd>${esc(e.usedFor)}</dd>
            <dt>Who it suits</dt>
            <dd>${esc(e.who)}</dd>
          </dl>${e.note ? `
          <p class="cl-card-note">${esc(e.note)}</p>` : ''}
          <div class="cl-card-learn">
            <p class="cl-learn-label">Learn it live with us</p>
            <div class="cl-links">${renderLinks(e.learn, 'cl-course-link', where)}</div>${e.tutorial ? `
            <div class="cl-links cl-links--quiet"><a class="cl-tut-link" href="${attr(link(e.tutorial.href, where))}">${esc(e.tutorial.label)}</a></div>` : ''}${e.more && e.more.length ? `
            <div class="cl-links cl-links--quiet">${renderLinks(e.more, 'cl-more-link', where)}</div>` : ''}${e.ask ? `
            <button type="button" class="cl-ask" onclick="openCallbackModal()">Ask a mentor about a 1-on-1 track</button>` : ''}
          </div>
        </article>`;
}

function renderCategory(c) {
  const n = c.entries.length;
  return `
    <section class="section cl-cat" id="${attr(c.id)}" aria-labelledby="${attr(c.id)}-title">
      <div class="cl-cat-head">
        <h2 class="cl-h2" id="${attr(c.id)}-title">${esc(c.title)}</h2>
        <span class="cl-count">${n} ${n === 1 ? 'entry' : 'entries'}</span>
      </div>
      <p class="cl-cat-intro">${esc(c.intro)}</p>
      <div class="cl-grid">${c.entries.map(e => renderEntry(e, c.id)).join('')}
      </div>
    </section>`;
}

const CATALOGUE_HTML = CATEGORIES.map(renderCategory).join('\n');

const RAIL_HTML = CATEGORIES.map(c => `<a class="cl-chip" href="#${attr(c.id)}">${esc(c.short)}</a>`).join('\n        ')
  + `\n        <a class="cl-chip cl-chip--demo" href="#book-demo">Book a free demo</a>`;

const PICKS_HTML = picks.map(p => `
        <a class="cl-pick" href="${attr(link('/courses/' + p.slug, 'picks'))}">
          <span class="cl-pick-shot"><img src="${attr(p.img)}" alt="${attr(p.title)} course artwork" width="800" height="450" loading="lazy" decoding="async"></span>
          <span class="cl-pick-body">
            <span class="cl-pick-title">${esc(p.title)}</span>
            <span class="cl-pick-blurb">${esc(p.blurb)}</span>
            <span class="cl-pick-meta">${esc(p.level)}. ${esc(p.duration)}.</span>
          </span>
        </a>`).join('');

const SNAPSHOT_HTML = SNAPSHOT.map(s => `
          <tr><th scope="row">${esc(s.name)}</th><td>${esc(s.version)}</td><td class="cl-trend cl-trend--${s.trend.toLowerCase()}">${esc(s.trend)}</td></tr>`).join('');

const AGE_HTML = AGE_TABLE.map(r => `
        <div class="cl-age-row">
          <div class="cl-age-band">${esc(r.band)}</div>
          <div class="cl-age-main">
            <p class="cl-age-first">${esc(r.first)}</p>
            <p class="cl-age-why">${esc(r.why)}</p>
            <div class="cl-age-links">${renderLinks(r.links, 'cl-age-link', 'age/' + r.band)}</div>
          </div>
        </div>`).join('');

const PATHS_HTML = PATHS.map((p, i) => `
        <li class="cl-path" id="${attr(p.id)}">
          <div class="cl-path-num" aria-hidden="true">${i + 1}</div>
          <div class="cl-path-body">
            <h3 class="cl-path-title">${esc(p.title)}</h3>
            <p class="cl-path-outcome">${esc(p.outcome)}</p>
            <ol class="cl-steps">${p.steps.map(s => `<li><a href="${attr(link(s.href, p.id))}">${esc(s.step)}</a></li>`).join('')}</ol>
            <div class="cl-path-courses">${renderLinks(p.courses, 'cl-course-link', p.id)}</div>
          </div>
        </li>`).join('');

const FAQ_HTML = FAQ.map(f => `
        <details class="cl-faq-item">
          <summary>${esc(f.q)}</summary>
          <div class="cl-faq-a"><p>${esc(f.a)}</p></div>
        </details>`).join('');

const RELATED_HTML = RELATED.map(r => `<li><a href="${attr(link(r.href, 'related'))}">${esc(r.label)}</a></li>`).join('\n        ');

// ---------- JSON-LD ----------
const ITEMLIST_JSONLD = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': CANONICAL + '#catalogue',
  name: 'Programming languages, frameworks and developer tools to learn in 2026',
  description: `${TOTAL} technologies across ${CATEGORIES.length} groups, each with what it is for, who it suits, and the live Modern Age Coders course that teaches it.`,
  numberOfItems: TOTAL,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: allEntries.map((e, i) => ({
    '@type': 'ListItem', position: i + 1, name: e.name, url: `${CANONICAL}#${e.id}`,
  })),
}, null, 2);

const FAQ_JSONLD = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}, null, 2);

// ---------- components ----------
const NAV = `<!-- BEGIN_INLINED_NAV -->\n${rd('components/nav.html')}\n<!-- END_INLINED_NAV -->`;
const FOOTER = `<!-- BEGIN_INLINED_FOOTER -->\n${rd('components/footer.html')}\n<!-- END_INLINED_FOOTER -->`;
let MESH = '';
const outPath = path.join(ROOT, 'src/pages/coding-lang.html');
if (fs.existsSync(outPath)) {
  const m = fs.readFileSync(outPath, 'utf8').match(/<!-- BEGIN_LINK_MESH -->[\s\S]*?<!-- END_LINK_MESH -->/);
  if (m) MESH = m[0];
}

// ---------- assemble ----------
if (missing.length) {
  console.error('Refusing to build: links that resolve nowhere:\n  ' + missing.join('\n  '));
  process.exit(1);
}

let html = rd('scripts/coding-lang/shell.html');
const tokens = {
  '{{UPDATED_LABEL}}': UPDATED.label,
  '{{UPDATED_ISO}}': UPDATED.iso,
  '{{TOTAL}}': String(TOTAL),
  '{{GROUPS}}': String(CATEGORIES.length),
  '{{NAV}}': NAV,
  '{{FOOTER}}': FOOTER,
  '{{MESH}}': MESH,
  '{{RAIL}}': RAIL_HTML,
  '{{PICKS}}': PICKS_HTML,
  '{{SNAPSHOT}}': SNAPSHOT_HTML,
  '{{AGE_TABLE}}': AGE_HTML,
  '{{CATALOGUE}}': CATALOGUE_HTML,
  '{{PATHS}}': PATHS_HTML,
  '{{FAQ_HTML}}': FAQ_HTML,
  '{{FAQ_JSONLD}}': FAQ_JSONLD,
  '{{ITEMLIST_JSONLD}}': ITEMLIST_JSONLD,
  '{{RELATED}}': RELATED_HTML,
};
// Longest token first so no token is ever replaced inside another.
for (const k of Object.keys(tokens).sort((a, b) => b.length - a.length)) html = html.split(k).join(tokens[k]);
const leftover = html.match(/\{\{[A-Z_]+\}\}/g);
if (leftover) { console.error('Unreplaced tokens: ' + leftover.join(', ')); process.exit(1); }
fs.writeFileSync(outPath, html);

// ---------- markdown twin ----------
const md = [];
md.push('---');
md.push(`title: "Programming Languages, Frameworks and Tools to Learn in 2026: The Complete Guide | Modern Age Coders"`);
md.push(`description: "${TOTAL} programming languages, frameworks, databases, AI tools and coding agents compared for ${UPDATED.label}: what each is for, who it suits, current versions, and the live online course at Modern Age Coders that teaches it, for learners aged 6 to 67."`);
md.push(`canonical: ${CANONICAL}`);
md.push('source: src/pages/coding-lang.html');
md.push(`updated: ${UPDATED.iso}`);
md.push('---');
md.push('');
md.push('# Programming languages, frameworks and tools to learn in 2026');
md.push('');
md.push(`> ${TOTAL} technologies in ${CATEGORIES.length} groups, updated ${UPDATED.label}. For each one: what it is for, who it suits, the current version, and the live Modern Age Coders course that teaches it. Modern Age Coders teaches coding and maths live online to learners aged 6 to 67, 1-on-1, in mini batches of 3 to 4, or in groups of 5 to 10.`);
md.push('');
md.push('## Start with a course');
md.push('');
for (const p of picks) md.push(`- [${p.title}](https://learn.modernagecoders.com/courses/${p.slug}): ${p.blurb} ${p.level}. ${p.duration}.`);
md.push('');
md.push(`## Version ledger, ${UPDATED.label}`);
md.push('');
md.push('| Language | Current version | Our read |');
md.push('| --- | --- | --- |');
for (const s of SNAPSHOT) md.push(`| ${s.name} | ${s.version} | ${s.trend} |`);
md.push('');
md.push('## Which language first, by age');
md.push('');
for (const r of AGE_TABLE) {
  md.push(`### ${r.band}: ${r.first}`);
  md.push('');
  md.push(r.why);
  md.push('');
  md.push(r.links.map(l => `[${l.label}](https://learn.modernagecoders.com${l.href})`).join(' · '));
  md.push('');
}
for (const c of CATEGORIES) {
  md.push(`## ${c.title}`);
  md.push('');
  md.push(c.intro);
  md.push('');
  for (const e of c.entries) {
    md.push(`### ${e.name}${e.version ? ` (${e.kind}, ${e.version})` : ` (${e.kind})`}`);
    md.push('');
    md.push(e.desc);
    md.push('');
    md.push(`- Fundamentals: ${e.fundamentals.join(', ')}`);
    md.push(`- Used for: ${e.usedFor}`);
    md.push(`- Who it suits: ${e.who}`);
    if (e.note) md.push(`- ${UPDATED.label} note: ${e.note}`);
    md.push(`- Learn it live: ${e.learn.map(l => `[${l.label}](https://learn.modernagecoders.com${l.href})`).join(', ')}`);
    if (e.tutorial) md.push(`- Free tutorials: [${e.tutorial.label}](https://learn.modernagecoders.com${e.tutorial.href})`);
    if (e.more && e.more.length) md.push(`- Related: ${e.more.map(l => `[${l.label}](https://learn.modernagecoders.com${l.href})`).join(', ')}`);
    if (e.ask) md.push('- No standalone course for this one. Ask a mentor about a 1-on-1 track: https://learn.modernagecoders.com/book-demo');
    md.push('');
  }
}
md.push('## Learning paths');
md.push('');
PATHS.forEach((p, i) => {
  md.push(`### ${i + 1}. ${p.title}`);
  md.push('');
  md.push(p.outcome);
  md.push('');
  p.steps.forEach((s, j) => md.push(`${j + 1}. [${s.step}](https://learn.modernagecoders.com${s.href})`));
  md.push('');
  md.push('Courses: ' + p.courses.map(l => `[${l.label}](https://learn.modernagecoders.com${l.href})`).join(', '));
  md.push('');
});
md.push('## How we teach every language on this page');
md.push('');
md.push('- Live classes with a mentor, never recordings. Choose 1-on-1, a mini batch of 3 to 4, or a group of 5 to 10.');
md.push('- Project-based from the first week: every language above is learned by building something that runs.');
md.push('- A certificate from Modern Age Coders on passing the final exam.');
md.push('- Book a free demo class: https://learn.modernagecoders.com/book-demo');
md.push('');
md.push('## Frequently asked questions');
md.push('');
for (const f of FAQ) { md.push(`### ${f.q}`); md.push(''); md.push(f.a); md.push(''); }
md.push('## Related guides');
md.push('');
for (const r of RELATED) md.push(`- [${r.label}](https://learn.modernagecoders.com${r.href})`);
md.push('');
fs.writeFileSync(path.join(ROOT, 'src/pages/coding-lang.md'), md.join('\n'));

// ---------- sitemap lastmod ----------
const smPath = path.join(ROOT, 'sitemap.xml');
let sm = fs.readFileSync(smPath, 'utf8');
const smBefore = sm;
sm = sm.replace(/(<loc>https:\/\/learn\.modernagecoders\.com\/coding-lang<\/loc>\s*<lastmod>)[^<]+(<\/lastmod>)/, `$1${UPDATED.iso}$2`);
if (sm !== smBefore) fs.writeFileSync(smPath, sm);

console.log(`coding-lang: ${TOTAL} entries in ${CATEGORIES.length} groups, ${picks.length} picks, ${PATHS.length} paths, ${FAQ.length} FAQs, ${seenHrefs.size} distinct on-site links checked. Mesh block ${MESH ? 'preserved' : 'ABSENT'}. Sitemap lastmod ${sm !== smBefore ? 'stamped' : 'unchanged'}.`);
