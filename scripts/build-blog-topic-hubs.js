#!/usr/bin/env node
/**
 * Builds crawlable blog category hubs (Phase 3.8) from content/blog/data/*.json:
 *   /blog/topic/python  /blog/topic/java  /blog/topic/kids-coding
 *   /blog/topic/maths    /blog/topic/ai
 *
 * The /blog page's category filters are JS-only pills with no crawlable URLs, so a
 * 28-post Python cluster had no hub page. Each hub = intro + a card grid of every
 * matching post + a CTA into the matching course pillar, so the blog cluster gains a
 * real hub and every post gains an extra internal inbound link.
 *
 * Regenerate:  node scripts/build-blog-topic-hubs.js
 * Self-contained warm-brand shell (mirrors build-cbse-ai-cluster.js): own CSS, no
 * body.editorial, no scroll-reveal, theme-aware. Each hub carries CollectionPage +
 * BreadcrumbList + ItemList schema. Output goes to src/pages/blog/topic/<topic>.html;
 * routing lives in _redirects + netlify.toml (BEFORE the /blog/* catch-all) + sitemap.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'content', 'blog', 'data');
const OUTDIR = path.join(ROOT, 'src', 'pages', 'blog', 'topic');
const BASE = 'https://learn.modernagecoders.com';

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---- load every blog post's meta ----
const posts = fs.readdirSync(DATA)
  .filter((f) => f.endsWith('.json'))
  .map((f) => {
    try {
      const m = JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8')).meta || {};
      if (!m.slug || !m.title) return null;
      return {
        slug: m.slug,
        title: m.title,
        description: m.description || '',
        date: m.date || '',
        readTime: m.readTime || '',
        category: m.category || '',
        tags: (m.tags || []).map((t) => String(t).toLowerCase()),
        keywords: (m.keywords || []).map((k) => String(k).toLowerCase()),
      };
    } catch { return null; }
  })
  .filter(Boolean);

const hay = (p) => [p.title, p.category, ...p.tags, ...p.keywords].join(' ').toLowerCase();

// ---- topic definitions: match rule + pillar CTA + copy ----
const TOPICS = [
  {
    topic: 'python',
    label: 'Python',
    title: 'Python Tutorials & Guides',
    intro: 'Everything we have written about learning Python: beginner tutorials, project ideas, exam-focused programs and career guidance, written by the mentors who teach it live.',
    pillar: { href: '/python-and-ai-classes-for-kids-teens', label: 'Python & AI Classes for Kids & Teens' },
    match: (p) => hay(p).includes('python'),
  },
  {
    topic: 'java',
    label: 'Java',
    title: 'Java Tutorials & Programs',
    intro: 'Java for school boards, placements and real projects: worked programs for ICSE and CBSE, OOP explainers, DSA in Java and career paths.',
    pillar: { href: '/best-java-classes-in-india', label: 'Best Java Classes in India' },
    match: (p) => (p.category.toLowerCase() === 'java')
      || p.tags.includes('java')
      || (/\bjava\b/.test(p.title.toLowerCase()) && !p.title.toLowerCase().includes('javascript')),
  },
  {
    topic: 'kids-coding',
    label: 'Kids Coding',
    title: 'Coding for Kids: Guides for Parents',
    intro: 'How children actually learn to code: Scratch projects, the right age to start, screen-time-worth-having, and honest guides for parents choosing their first coding class.',
    pillar: { href: '/levels/coding-for-kids', label: 'Coding Classes for Kids' },
    match: (p) => p.tags.includes('kids') || p.tags.includes('kids coding')
      || /\b(kids|children|for kids)\b/.test(p.title.toLowerCase()),
  },
  {
    topic: 'maths',
    label: 'Maths',
    title: 'Maths Learning Guides',
    intro: 'Why maths and coding reinforce each other, how to build real problem-solving, and practical guidance for parents and students on maths that sticks.',
    pillar: { href: '/online-maths-tuition', label: 'Online Maths Tuition' },
    match: (p) => p.category.toLowerCase() === 'mathematics'
      || p.tags.some((t) => t === 'mathematics' || t === 'maths' || t === 'math')
      || /\bmath(s|ematics)?\b/.test(p.title.toLowerCase()),
  },
  {
    topic: 'ai',
    label: 'AI',
    title: 'AI & Machine Learning Guides',
    intro: 'Artificial intelligence explained for students and parents: what the tools really do, which are age-appropriate, and how to learn AI properly rather than just prompt it.',
    pillar: { href: '/best-ai-and-machine-learning-course-in-india', label: 'AI & Machine Learning Course' },
    match: (p) => p.category.toLowerCase() === 'artificial intelligence'
      || p.tags.some((t) => t === 'ai' || t === 'artificial intelligence' || t === 'machine learning' || t === 'ai tools')
      || /\b(ai|artificial intelligence|machine learning|chatgpt)\b/.test(p.title.toLowerCase()),
  },
];

const byDateDesc = (a, b) => String(b.date).localeCompare(String(a.date));

const card = (p) => `      <a class="rel-card" href="/blog/${esc(p.slug)}">
        <span class="rel-kind">${esc(p.category || 'Article')}${p.readTime ? ' &middot; ' + esc(p.readTime) : ''}</span>
        <h3>${esc(p.title)}</h3>
        ${p.description ? `<p class="rel-sum">${esc(p.description)}</p>` : ''}
      </a>`;

const collectionSchema = (t, url, list) => ({
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: t.title, description: t.intro, url, inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', name: 'Modern Age Coders Blog', url: BASE + '/blog' },
  mainEntity: {
    '@type': 'ItemList', numberOfItems: list.length,
    itemListElement: list.map((p, i) => ({
      '@type': 'ListItem', position: i + 1, url: `${BASE}/blog/${p.slug}`, name: p.title,
    })),
  },
});
const crumbSchema = (t, url) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE + '/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: BASE + '/blog' },
    { '@type': 'ListItem', position: 3, name: t.label, item: url },
  ],
});

function build(t) {
  const url = `${BASE}/blog/topic/${t.topic}`;
  const list = posts.filter(t.match).sort(byDateDesc);
  const cards = list.map(card).join('\n');
  const schemas = [collectionSchema(t, url, list), crumbSchema(t, url)];
  const meta = `${t.intro} ${list.length} guides from Modern Age Coders.`.slice(0, 158);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t.title)} | Modern Age Coders Blog</title>
<meta name="description" content="${esc(meta)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(t.title)}">
<meta property="og:description" content="${esc(meta)}">
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
.wrap{max-width:1080px;margin:0 auto;padding:0 20px}
header.top{border-bottom:1px solid var(--line);padding:16px 0}
header.top .wrap{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}
.brand{font-family:Fraunces,Georgia,serif;font-weight:700;font-size:1.12rem;color:var(--ink);text-decoration:none}
.topnav a{margin-left:18px;font-size:.92rem;text-decoration:none;color:var(--muted)}
.topnav a:hover{color:var(--amber)}
nav.crumb{font-size:.82rem;color:var(--muted);padding:18px 0 0;font-family:'JetBrains Mono',monospace}
nav.crumb a{color:var(--muted);text-decoration:none}
nav.crumb a:hover{color:var(--amber)}
.hero{padding:24px 0 26px;border-bottom:1px solid var(--line)}
h1{font-family:Fraunces,Georgia,serif;font-size:clamp(1.9rem,4.2vw,2.9rem);line-height:1.12;margin:0 0 14px;font-weight:700}
.lead{font-size:1.08rem;color:var(--muted);max-width:760px;margin:0}
.count{font-family:'JetBrains Mono',monospace;font-size:.75rem;letter-spacing:.06em;text-transform:uppercase;color:var(--amber2);margin:0 0 8px}
.blocks{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px;margin:28px 0 10px}
.rel-card{border:1px solid var(--line);border-radius:8px;padding:18px 20px;background:var(--card);text-decoration:none;color:var(--ink);display:block}
.rel-card:hover{border-color:var(--amber)}
.rel-kind{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.05em;text-transform:uppercase;color:var(--amber2)}
.rel-card h3{font-family:Fraunces,Georgia,serif;font-size:1.12rem;margin:6px 0 0;line-height:1.25}
.rel-sum{margin:8px 0 0;font-size:.92rem;color:var(--muted);line-height:1.5}
.cta{background:var(--ink);color:var(--paper);border-radius:10px;padding:28px;margin:40px 0;text-align:center}
.cta h2{font-family:Fraunces,Georgia,serif;margin:0 0 10px;color:var(--paper)}
.cta p{margin:0 0 18px;color:#D8D0C4}
.cta a{display:inline-block;background:var(--amber);color:#fff;padding:12px 26px;border-radius:8px;text-decoration:none;font-weight:600;margin:0 6px 8px}
.cta a.ghost{background:transparent;border:1px solid var(--amber);color:var(--amber)}
footer.bot{margin-top:24px;border-top:1px solid var(--line);padding:30px 0 50px;color:var(--muted);font-size:.9rem}
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
  <nav class="topnav"><a href="/blog">Blog</a><a href="/courses">Courses</a><a href="/contact">Contact</a></nav>
</div></header>

<main class="wrap">
  <nav class="crumb"><a href="/">Home</a> / <a href="/blog">Blog</a> / ${esc(t.label)}</nav>
  <div class="hero">
    <p class="count">${list.length} article${list.length === 1 ? '' : 's'}</p>
    <h1>${esc(t.title)}</h1>
    <p class="lead">${esc(t.intro)}</p>
  </div>

  <div class="blocks">
${cards}
  </div>

  <div class="cta">
    <h2>Ready to go from reading to building?</h2>
    <p>Live, small-batch classes with a mentor who reviews your work. Start with a free demo.</p>
    <a href="${t.pillar.href}">${esc(t.pillar.label)}</a>
    <a class="ghost" href="/courses">All courses</a>
  </div>
</main>

<footer class="bot"><div class="wrap">
  <p>Modern Age Coders &middot; <a href="/blog">Blog</a> &middot; <a href="/courses">Courses</a> &middot; <a href="${t.pillar.href}">${esc(t.pillar.label)}</a> &middot; <a href="/contact">Contact</a></p>
</div></footer>
</body>
</html>
`;
}

fs.mkdirSync(OUTDIR, { recursive: true });
let n = 0;
for (const t of TOPICS) {
  const list = posts.filter(t.match);
  if (list.length === 0) { console.warn(`  SKIP ${t.topic}: 0 posts matched`); continue; }
  const html = build(t);
  fs.writeFileSync(path.join(OUTDIR, `${t.topic}.html`), html, 'utf8');
  console.log(`  blog/topic/${t.topic}.html  ${list.length} posts  ${(html.length / 1024).toFixed(1)} KB`);
  n++;
}
console.log(`Wrote ${n} blog topic hubs.`);
