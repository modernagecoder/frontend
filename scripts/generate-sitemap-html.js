#!/usr/bin/env node
/**
 * generate-sitemap-html.js
 * Builds /sitemap.html — the permanent, human-readable "Site Ledger" view of
 * sitemap.xml. Runs in generate:all so it always matches the XML. Unlike the
 * XSLT view on sitemap.xml itself, this is plain HTML and never depends on
 * browser XSLT support (which browsers are removing in late 2026).
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const XML = path.join(ROOT, 'sitemap.xml');
const CSS = path.join(ROOT, 'src', 'css', 'site-ledger.css');
const OUT = path.join(ROOT, 'sitemap.html');
const SITE = 'https://learn.modernagecoders.com';

// ---- parse -----------------------------------------------------------------
const xml = fs.readFileSync(XML, 'utf8');
const css = fs.readFileSync(CSS, 'utf8');

function pick(block, name) {
  const m = block.match(new RegExp('<' + name + '>([\\s\\S]*?)</' + name + '>'));
  return m ? m[1].trim() : '';
}

const urls = [];
const re = /<url>([\s\S]*?)<\/url>/g;
let m;
while ((m = re.exec(xml))) {
  const b = m[1];
  const loc = pick(b, 'loc');
  if (!loc) continue;
  urls.push({
    loc,
    lastmod: pick(b, 'lastmod'),
    changefreq: pick(b, 'changefreq'),
    priority: pick(b, 'priority'),
    images: (b.match(/<image:image>/g) || []).length,
  });
}

// ---- categorise (mirrors sitemap.xsl groups; first match wins) -------------
function category(loc) {
  if (loc.includes('/courses')) return 'courses';
  if (loc.includes('/blog')) return 'blog';
  if (loc.includes('best-coding-class-in-')) return 'city';
  if (loc.includes('coding-classes-in-')) return 'area';
  if (loc.includes('coding-classes-near-')) return 'near';
  if (/java|python|c-plus-plus|javascript|machine-learning|-ai-|ai-ml|artificial-intelligence/.test(loc)) return 'lang';
  if (loc.includes('math')) return 'math';
  if (loc.includes('resource')) return 'resources';
  return 'other';
}

const SECTIONS = [
  { id: 'courses',   title: 'Course pages',                note: 'Course catalogue and individual course pages' },
  { id: 'blog',      title: 'Blog & articles',             note: 'Tutorials, guides and articles' },
  { id: 'city',      title: 'Coding classes by city',      note: 'City-level landing pages' },
  { id: 'area',      title: 'Area, state & country',       note: 'Regional, state and country hubs' },
  { id: 'near',      title: 'Near a locality',             note: 'Neighbourhood and locality pages' },
  { id: 'lang',      title: 'Language & AI / ML tracks',   note: 'Java, Python, C++, JavaScript and AI/ML pages' },
  { id: 'math',      title: 'Maths tutoring',              note: 'Maths tutoring and exam-prep pages' },
  { id: 'resources', title: 'Resources & guides',          note: 'Free resources, tools and guides' },
  { id: 'other',     title: 'Other pages',                 note: 'Home, info and everything else' },
];

const groups = {};
SECTIONS.forEach((s) => (groups[s.id] = []));
urls.forEach((u) => groups[category(u.loc)].push(u));

// sort each group: priority desc, then loc
const prio = (u) => (u.priority ? parseFloat(u.priority) : 0.5);
SECTIONS.forEach((s) =>
  groups[s.id].sort((a, b) => prio(b) - prio(a) || a.loc.localeCompare(b.loc))
);

// integrity: partition must cover every url exactly once
const grouped = SECTIONS.reduce((n, s) => n + groups[s.id].length, 0);
if (grouped !== urls.length) {
  console.error(`FATAL: partition mismatch — ${grouped} grouped vs ${urls.length} urls`);
  process.exit(1);
}

// ---- render ----------------------------------------------------------------
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const totalImages = urls.reduce((n, u) => n + (u.images > 0 ? 1 : 0), 0);
const nonEmpty = SECTIONS.filter((s) => groups[s.id].length);

function row(u, i) {
  const path = u.loc.split('modernagecoders.com')[1] || u.loc;
  const p = prio(u);
  const img = u.images
    ? ` <span class="imgchip">img${u.images > 1 ? ' ' + u.images : ''}</span>`
    : '';
  const upd = u.lastmod ? `<span class="upd">${esc(u.lastmod)}</span>` : '<span class="dash">&mdash;</span>';
  const freq = u.changefreq ? `<span class="freq">${esc(u.changefreq)}</span>` : '<span class="dash">&mdash;</span>';
  return `<tr data-path="${esc(path.toLowerCase())}">
  <td class="col-no">${i + 1}</td>
  <td class="page"><a href="${esc(u.loc)}">${esc(path)}</a>${img}</td>
  <td class="col-prio"><span class="meter"><i style="width:${Math.round(p * 100)}%"></i></span><span class="pval">${esc(u.priority || '0.5')}</span></td>
  <td>${upd}</td>
  <td class="col-freq">${freq}</td>
</tr>`;
}

function block(s) {
  const rows = groups[s.id].map(row).join('\n');
  return `<section class="block" id="${s.id}" data-section>
  <div class="block-head">
    <span class="n">${groups[s.id].length}</span>
    <h2>${esc(s.title)}</h2>
    <span class="block-note">${esc(s.note)}</span>
  </div>
  <div class="tbl-wrap">
    <table class="ledger">
      <thead><tr><th class="col-no">#</th><th>Page</th><th class="col-prio">Priority</th><th>Updated</th><th class="col-freq">Frequency</th></tr></thead>
      <tbody>
${rows}
      </tbody>
    </table>
  </div>
</section>`;
}

const toc = nonEmpty
  .map((s) => `<a href="#${s.id}"><span class="nm">${esc(s.title)}</span><span class="ct">${groups[s.id].length}</span></a>`)
  .join('\n');

const blocks = nonEmpty.map(block).join('\n');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Site Map — All ${urls.length} Pages | Modern Age Coders</title>
<meta name="description" content="Browse every page on Modern Age Coders in one place — courses, city coding classes, maths tutoring, blog posts and more.">
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="${SITE}/sitemap">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
${css}
</style>
</head>
<body>
<div class="wrap">

  <header class="masthead">
    <div class="eyebrow">Modern Age Coders</div>
    <h1 class="title">Site Ledger</h1>
    <p class="lede">Every page we publish, in one register. Browse by section or search across all ${urls.length} pages.</p>
    <div class="ledger-meta">
      <div class="figure"><b class="amber">${urls.length}</b><span>Pages listed</span></div>
      <div class="figure"><b>${nonEmpty.length}</b><span>Sections</span></div>
      <div class="figure"><b>${totalImages}</b><span>With preview images</span></div>
    </div>
  </header>

  <div class="toolbar" id="toolbar" hidden>
    <div class="search-field">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <label for="q" class="visually-hidden" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">Search pages</label>
      <input id="q" class="search" type="search" autocomplete="off" placeholder="Search pages by URL, e.g. python, kolkata, blog…">
    </div>
    <div class="result-note" id="note"><b>${urls.length}</b> pages</div>
  </div>

  <nav class="contents" id="contents">
${toc}
  </nav>

${blocks}

  <p class="no-results" id="empty">No pages match <b id="empty-q"></b>. Try a shorter term.</p>

  <footer class="foot">
    <span>Generated from <code>/sitemap.xml</code>. Search engines read the raw XML.</span>
    <span><a href="/">learn.modernagecoders.com</a></span>
  </footer>

</div>

<script>
(function () {
  var toolbar = document.getElementById('toolbar');
  var input = document.getElementById('q');
  var note = document.getElementById('note');
  var empty = document.getElementById('empty');
  var emptyQ = document.getElementById('empty-q');
  var contents = document.getElementById('contents');
  var sections = [].slice.call(document.querySelectorAll('[data-section]'));
  var total = ${urls.length};
  if (!toolbar || !input) return;
  toolbar.hidden = false; // reveal search only when JS is available

  var t;
  function apply() {
    var q = input.value.trim().toLowerCase();
    var shown = 0;
    sections.forEach(function (sec) {
      var rows = sec.querySelectorAll('tbody tr');
      var vis = 0;
      for (var i = 0; i < rows.length; i++) {
        var match = !q || rows[i].getAttribute('data-path').indexOf(q) !== -1;
        rows[i].hidden = !match;
        if (match) vis++;
      }
      sec.hidden = vis === 0;
      shown += vis;
    });
    contents.style.display = q ? 'none' : '';
    note.innerHTML = q ? '<b>' + shown + '</b> of ' + total : '<b>' + total + '</b> pages';
    emptyQ.textContent = '"' + input.value.trim() + '"';
    empty.classList.toggle('show', q && shown === 0);
  }
  input.addEventListener('input', function () {
    clearTimeout(t);
    t = setTimeout(apply, 90);
  });
})();
</script>
</body>
</html>
`;

fs.writeFileSync(OUT, html);
console.log(`sitemap.html written: ${urls.length} pages across ${nonEmpty.length} sections`);
SECTIONS.forEach((s) => console.log(`  ${s.id.padEnd(10)} ${groups[s.id].length}`));
