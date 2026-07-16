#!/usr/bin/env node
/**
 * Builds the CBSE AI curriculum cluster (Phase 5.1) from content/cbse-ai-cluster.json:
 *   /cbse-ai-curriculum-classes            (pillar)
 *   /cbse-computational-thinking-classes-3-to-5  (spoke)
 *   /ai-classes-for-cbse-class-6-to-8      (spoke)
 *
 * Data-driven ON PURPOSE: every CBSE date/circular number was verified once against CBSE's own
 * circulars and lives in the JSON, so it cannot drift across three hand-typed files. Regenerate:
 *   node scripts/build-cbse-ai-cluster.js
 *
 * Self-contained (own CSS, no body.editorial, no scroll-reveal) so it cannot hit the opacity:0
 * blank-below-hero bug that needs /js/ux-enhancements.js. Brand stats are read from
 * scripts/brand-facts.json (never hand-typed). Each page carries an answer capsule + FAQPage +
 * BreadcrumbList + Article schema — the Phase 4 GEO anatomy.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'content', 'cbse-ai-cluster.json');
const BRAND = path.join(ROOT, 'scripts', 'brand-facts.json');
const OUTDIR = path.join(ROOT, 'src', 'pages');
const BASE = 'https://learn.modernagecoders.com';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// esc for text that is ALREADY html (section bodies) — only need to neutralise nothing; trust the JSON author.
const d = JSON.parse(fs.readFileSync(DATA, 'utf8'));
const brand = JSON.parse(fs.readFileSync(BRAND, 'utf8'));
const F = d.facts;
const pages = d.pages;

// course slug -> title, read from the course data so link text can't lie about the destination
const courseTitle = (slug) => {
  const p = path.join(ROOT, 'content', 'courses', 'data');
  for (const f of fs.readdirSync(p)) {
    if (!f.endsWith('.json')) continue;
    try {
      const m = JSON.parse(fs.readFileSync(path.join(p, f), 'utf8')).meta || {};
      if (m.slug === slug) return m.title;
    } catch { /* skip */ }
  }
  return slug;
};

const faqSchema = (faqs) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
const crumbSchema = (slug, title) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE + '/' },
    { '@type': 'ListItem', position: 2, name: 'CBSE AI Curriculum', item: BASE + '/cbse-ai-curriculum-classes' },
    { '@type': 'ListItem', position: 3, name: title, item: `${BASE}/${slug}` },
  ],
});
const articleSchema = (slug, p) => ({
  '@context': 'https://schema.org', '@type': 'Article',
  headline: p.title, description: p.meta, inLanguage: 'en-IN',
  datePublished: d._about.verified, dateModified: d._about.verified,
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/${slug}` },
  author: { '@type': 'Organization', name: 'Modern Age Coders', url: BASE + '/' },
  publisher: { '@type': 'Organization', name: 'Modern Age Coders', url: BASE + '/' },
  about: { '@type': 'Thing', name: 'CBSE Computational Thinking and Artificial Intelligence curriculum' },
});

const relatedCard = (slug) => {
  const p = pages[slug];
  return `      <a class="rel-card" href="/${slug}"><span class="rel-kind">${p.kind === 'pillar' ? 'Overview' : 'Guide'}</span><h3>${esc(p.h1)}</h3></a>`;
};
const courseCard = (slug) => `      <a class="course-card" href="/courses/${slug}"><span class="course-tag">Course</span><h3>${esc(courseTitle(slug))}</h3><span class="course-go">View course &rarr;</span></a>`;

function build(slug, p) {
  const url = `${BASE}/${slug}`;
  const schemas = [articleSchema(slug, p), faqSchema(p.faqs), crumbSchema(slug, p.h1)];
  const sections = p.sections.map((s) => `      <section class="sec"><h2>${esc(s.h2)}</h2>${s.html}</section>`).join('\n');
  const faqs = p.faqs.map((f) => `        <details class="faq"><summary>${esc(f.q)}</summary><div class="faq-a"><p>${esc(f.a)}</p></div></details>`).join('\n');
  const related = (p.related || []).map(relatedCard).join('\n');
  const courses = (p.courses || []).map(courseCard).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)} | Modern Age Coders</title>
<meta name="description" content="${esc(p.meta)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.meta)}">
<meta property="og:url" content="${url}">
<link rel="alternate" type="text/markdown" href="${url}.md" title="Markdown version for AI agents">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
${schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
<style>
:root{--paper:#FBF8F2;--ink:#1C1814;--amber:#B45309;--amber2:#D97706;--muted:#6B6259;--line:#E5DED1;--card:#fff;--capsule:#F4EFE4}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,system-ui,sans-serif;line-height:1.68;-webkit-font-smoothing:antialiased}
a{color:var(--amber)}
.wrap{max-width:820px;margin:0 auto;padding:0 20px}
header.top{border-bottom:1px solid var(--line);padding:16px 0}
header.top .wrap{max-width:1080px;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}
.brand{font-family:Fraunces,Georgia,serif;font-weight:700;font-size:1.12rem;color:var(--ink);text-decoration:none}
.topnav a{margin-left:18px;font-size:.92rem;text-decoration:none;color:var(--muted)}
.topnav a:hover{color:var(--amber)}
nav.crumb{font-size:.82rem;color:var(--muted);padding:16px 0 0;font-family:'JetBrains Mono',monospace}
nav.crumb a{color:var(--muted);text-decoration:none}
nav.crumb a:hover{color:var(--amber)}
.hero{padding:22px 0 26px;border-bottom:1px solid var(--line)}
h1{font-family:Fraunces,Georgia,serif;font-size:clamp(1.9rem,4.2vw,2.9rem);line-height:1.12;margin:0 0 20px;font-weight:700}
.capsule{background:var(--capsule);border:1px solid var(--line);border-left:3px solid var(--amber);border-radius:8px;padding:18px 22px;font-size:1.06rem}
.capsule strong{color:var(--ink)}
.capsule .cap-label{display:block;font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--amber2);margin-bottom:8px}
.sec{padding:30px 0;border-bottom:1px solid var(--line)}
.sec h2{font-family:Fraunces,Georgia,serif;font-size:1.5rem;margin:0 0 14px;line-height:1.2}
.sec p{margin:0 0 14px}
.sec ul{margin:0 0 14px;padding-left:22px}
.sec li{margin:0 0 8px}
.sec em{color:#3A342D}
.founder{background:var(--capsule);border:1px solid var(--line);border-radius:8px;padding:24px;margin:30px 0}
.founder blockquote{margin:0 0 12px;font-family:Fraunces,Georgia,serif;font-size:1.16rem;line-height:1.5;font-style:italic}
.founder cite{font-style:normal;font-size:.9rem;color:var(--muted);font-family:'JetBrains Mono',monospace}
.stats{display:flex;gap:26px;flex-wrap:wrap;margin:26px 0;font-family:'JetBrains Mono',monospace;font-size:.82rem;color:var(--muted)}
.stats b{display:block;font-size:1.5rem;color:var(--ink);font-family:Fraunces,Georgia,serif}
.faqs{padding:30px 0}
.faqs h2{font-family:Fraunces,Georgia,serif;font-size:1.5rem;margin:0 0 16px}
.faq{border:1px solid var(--line);border-radius:8px;margin-bottom:10px;background:var(--card);overflow:hidden}
.faq summary{padding:15px 18px;font-weight:600;cursor:pointer;list-style:none}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:'+';float:right;color:var(--amber);font-size:1.2rem;line-height:1}
.faq[open] summary::after{content:'\\2212'}
.faq-a{padding:0 18px 16px}
.faq-a p{margin:0;color:#3A342D}
.blocks{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin:16px 0 34px}
.rel-card,.course-card{border:1px solid var(--line);border-radius:8px;padding:16px 18px;background:var(--card);text-decoration:none;color:var(--ink);display:block}
.rel-card:hover,.course-card:hover{border-color:var(--amber)}
.rel-kind,.course-tag{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.06em;text-transform:uppercase;color:var(--amber2)}
.rel-card h3,.course-card h3{font-family:Fraunces,Georgia,serif;font-size:1.06rem;margin:6px 0 0;line-height:1.25}
.course-go{display:inline-block;margin-top:8px;font-size:.85rem;color:var(--amber)}
.cta{background:var(--ink);color:var(--paper);border-radius:10px;padding:28px;margin:34px 0;text-align:center}
.cta h2{font-family:Fraunces,Georgia,serif;margin:0 0 10px;color:var(--paper)}
.cta p{margin:0 0 18px;color:#D8D0C4}
.cta a{display:inline-block;background:var(--amber);color:#fff;padding:12px 26px;border-radius:8px;text-decoration:none;font-weight:600}
.grouphead{font-family:'JetBrains Mono',monospace;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin:34px 0 0}
.src{font-size:.8rem;color:var(--muted);margin-top:30px;padding-top:16px;border-top:1px solid var(--line)}
footer.bot{margin-top:40px;border-top:1px solid var(--line);padding:30px 0 50px;color:var(--muted);font-size:.9rem}
footer.bot a{color:var(--muted)}
@media (prefers-color-scheme:dark){
  :root{--paper:#16130F;--ink:#F0EAE0;--muted:#A79C8D;--line:#332C24;--amber:#E9A23B;--amber2:#E9A23B;--card:#1E1A15;--capsule:#1E1A15}
  .cta{background:#000}
}
:root[data-theme="dark"]{--paper:#16130F;--ink:#F0EAE0;--muted:#A79C8D;--line:#332C24;--amber:#E9A23B;--amber2:#E9A23B;--card:#1E1A15;--capsule:#1E1A15}
:root[data-theme="light"]{--paper:#FBF8F2;--ink:#1C1814;--muted:#6B6259;--line:#E5DED1;--amber:#B45309;--amber2:#D97706;--card:#fff;--capsule:#F4EFE4}
</style>
</head>
<body>
<header class="top"><div class="wrap">
  <a class="brand" href="/">Modern Age Coders</a>
  <nav class="topnav"><a href="/courses">Courses</a><a href="/how-we-teach">How we teach</a><a href="/contact">Contact</a></nav>
</div></header>

<main class="wrap">
  <nav class="crumb"><a href="/">Home</a> / <a href="/cbse-ai-curriculum-classes">CBSE AI Curriculum</a>${p.kind === 'pillar' ? '' : ` / ${esc(p.h1)}`}</nav>
  <div class="hero">
    <h1>${esc(p.h1)}</h1>
    <div class="capsule"><span class="cap-label">The short answer</span>${esc(p.capsule)}</div>
  </div>

${sections}
${p.kind === 'pillar' ? `      <div class="founder">
        <blockquote>&ldquo;${esc(d.founder.quote)}&rdquo;</blockquote>
        <cite>${esc(d.founder.name)}, ${esc(d.founder.role)}</cite>
      </div>
      <div class="stats">
        <div><b>${esc(brand.students)}</b>students since ${brand.founded}</div>
        <div><b>${brand.rating}</b>across ${brand.reviews} Google reviews</div>
        <div><b>${esc(brand.countries)}</b>countries taught</div>
      </div>` : ''}

  <div class="faqs">
    <h2>Frequently asked questions</h2>
${faqs}
  </div>

${related ? `  <p class="grouphead">Keep reading</p>\n  <div class="blocks">\n${related}\n  </div>` : ''}
${courses ? `  <p class="grouphead">Learn it with us</p>\n  <div class="blocks">\n${courses}\n  </div>` : ''}

  <div class="cta">
    <h2>See a class before you decide</h2>
    <p>Live, small-batch CBSE AI classes that go past the textbook. Book a free demo.</p>
    <a href="/contact">Book a free demo</a>
  </div>

  <p class="src">CBSE facts on this page are sourced from ${esc(F.circular_launch)} and ${esc(F.circular_discontinue)}, read directly from CBSE's circulars on ${esc(d._about.verified)}. Curriculum committee chaired by ${esc(F.committee_chair)}. Vendors and boards update their documents; if anything here is out of date, <a href="/contact">tell us</a>.</p>
</main>

<footer class="bot"><div class="wrap">
  <p>Modern Age Coders &middot; <a href="/courses">Courses</a> &middot; <a href="/cbse-ai-curriculum-classes">CBSE AI Curriculum</a> &middot; <a href="/contact">Contact</a></p>
</div></footer>
</body>
</html>
`;
}

let n = 0;
for (const [slug, p] of Object.entries(pages)) {
  const out = path.join(OUTDIR, `${slug}.html`);
  const html = build(slug, p);
  fs.writeFileSync(out, html, 'utf8');
  console.log(`  ${slug}.html  ${(html.length / 1024).toFixed(1)} KB  (${p.kind})`);
  n++;
}
console.log(`Wrote ${n} pages.`);
