#!/usr/bin/env node
/**
 * Builds /ai-tools-age-guide from content/ai-tool-age-audit.json.
 *
 * The page is deliberately SELF-CONTAINED (own CSS, own header/footer, no body.editorial).
 * Pages using the shared editorial theme are opacity:0 until /js/ux-enhancements.js adds
 * .animate-in, and a page that misses that script renders blank below the hero. This page has
 * no reveal animation at all, so it cannot hit that.
 *
 * Every row carries the vendor's own quote and a link to the page it came from. That is the
 * whole point: an unsourced age claim is the same shape as the claims this audit existed to
 * disprove. Regenerate with: node scripts/build-ai-tools-age-guide.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'content', 'ai-tool-age-audit.json');
const OUT = path.join(ROOT, 'src', 'pages', 'ai-tools-age-guide.html');
const URL = 'https://learn.modernagecoders.com/ai-tools-age-guide';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const BUCKETS = {
  keep:              { label: 'Usable at 13',        cls: 'ok',   blurb: 'No barrier for a 13-year-old in any market we teach in.' },
  keep_with_consent: { label: 'Needs parent consent', cls: 'ok',  blurb: 'A 13-year-old may use it once a parent or guardian consents. The student stays the account holder.' },
  age_14:            { label: '14+ only',            cls: 'band', blurb: 'A clean floor of 14. Our 14-18 students may use it; our 13-year-olds may not.' },
  age_16:            { label: '16+ only',            cls: 'band', blurb: 'A clean floor of 16. Our 16-18 students may use it; our 13-15s may not.' },
  remove_age:        { label: 'Not taught: age',     cls: 'no',   blurb: 'The vendor sets a floor above 13 that parental consent cannot cure, or requires the adult to be the account holder.' },
  remove_risk:       { label: 'Not taught: content', cls: 'no',   blurb: 'Old enough on paper, but the content or safety posture is wrong for a minor.' },
  remove_dead:       { label: 'Not taught: gone',    cls: 'dead', blurb: 'The product no longer exists. We removed these rather than teach software that has shut down.' },
  unverified:        { label: 'Not taught: unproven', cls: 'dead', blurb: 'The vendor publishes no age at all, or the name does not resolve to one product. Silence is not permission.' },
};
const CATS = {
  text_ai: 'Chat and writing AI',
  image_ai: 'Image generation',
  music_and_video: 'Music, voice and video',
  creative_and_media: 'Design, media and machine learning',
  learning_and_research: 'Learning and research',
  business_and_productivity: 'Business, no-code and productivity',
};

const d = JSON.parse(fs.readFileSync(DATA, 'utf8'));
const cats = Object.keys(d).filter((k) => !k.startsWith('_'));
const all = cats.flatMap((k) => d[k].map((t) => ({ ...t, cat: k })));
const count = (b) => all.filter((t) => t.bucket === b).length;
const taught = count('keep') + count('keep_with_consent') + count('age_14') + count('age_16');

const card = (t) => {
  const b = BUCKETS[t.bucket];
  let host = '';
  try { host = new URL(t.source).hostname.replace(/^www\./, ''); } catch { host = t.source; }
  return `        <article class="tool" data-bucket="${t.bucket}" data-name="${esc(t.name.toLowerCase())}">
          <header class="tool-head">
            <h3>${esc(t.name)}</h3>
            <span class="pill pill-${b.cls}">${esc(b.label)}</span>
          </header>
          <p class="floor"><strong>Minimum age:</strong> ${esc(t.floor)}</p>
          <blockquote>${esc(t.quote)}</blockquote>
          <p class="src">Source: <a href="${esc(t.source)}" rel="nofollow noopener" target="_blank">${esc(host)}</a></p>
          ${t.note ? `<p class="note">${esc(t.note)}</p>` : ''}
        </article>`;
};

const section = (k) => `      <section class="cat" id="${k}">
        <h2>${esc(CATS[k] || k)}</h2>
        <div class="grid">
${d[k].map(card).join('\n')}
        </div>
      </section>`;

const legend = Object.entries(BUCKETS).map(([k, b]) =>
  `          <div class="leg"><span class="pill pill-${b.cls}">${esc(b.label)}</span><p>${esc(b.blurb)}</p></div>`).join('\n');

const filters = ['all', ...Object.keys(BUCKETS)].map((k) =>
  `          <button type="button" class="fbtn${k === 'all' ? ' on' : ''}" data-f="${k}">${k === 'all' ? `All ${all.length}` : esc(BUCKETS[k].label)}</button>`).join('\n');

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Tool Age Limits: What Your Child Can Actually Use',
  description: `We checked the published age limits of ${all.length} AI tools against each vendor's own terms. ${taught} are usable by a 13-year-old. The rest are not, and this page shows the exact clause for each.`,
  datePublished: d._about.audited,
  dateModified: d._about.audited,
  inLanguage: 'en',
  isAccessibleForFree: true,
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  author: { '@type': 'Organization', name: 'Modern Age Coders', url: 'https://learn.modernagecoders.com/' },
  publisher: { '@type': 'Organization', name: 'Modern Age Coders', url: 'https://learn.modernagecoders.com/' },
  about: { '@type': 'Thing', name: 'AI tool age restrictions for children and teenagers' },
};

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AI Tool Age Limits: What Your Child Can Actually Use | Modern Age Coders</title>
<meta name="description" content="We read the terms of ${all.length} AI tools to find the real minimum age. ${taught} are usable at 13. Every answer quotes the vendor's own words and links the source.">
<link rel="canonical" href="${URL}">
<meta property="og:type" content="article">
<meta property="og:title" content="AI Tool Age Limits: What Your Child Can Actually Use">
<meta property="og:description" content="We read the terms of ${all.length} AI tools to find the real minimum age. Every answer quotes the vendor's own words.">
<meta property="og:url" content="${URL}">
<link rel="alternate" type="text/markdown" href="${URL}.md" title="Markdown version for AI agents">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>
<style>
:root{--paper:#FBF8F2;--ink:#1C1814;--amber:#B45309;--amber2:#D97706;--muted:#6B6259;--line:#E5DED1;--ok:#1B6B4A;--no:#9B2C2C;--band:#8A6A00;--dead:#5B5350}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,system-ui,sans-serif;line-height:1.65;-webkit-font-smoothing:antialiased}
a{color:var(--amber)}
.wrap{max-width:1080px;margin:0 auto;padding:0 20px}
header.top{border-bottom:1px solid var(--line);padding:18px 0}
header.top .wrap{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}
.brand{font-family:Fraunces,Georgia,serif;font-weight:700;font-size:1.15rem;color:var(--ink);text-decoration:none}
.topnav a{margin-left:18px;font-size:.92rem;text-decoration:none;color:var(--muted)}
.topnav a:hover{color:var(--amber)}
.hero{padding:56px 0 34px;border-bottom:1px solid var(--line)}
h1{font-family:Fraunces,Georgia,serif;font-size:clamp(2rem,4.4vw,3.1rem);line-height:1.1;margin:0 0 16px;font-weight:700}
.lede{font-size:1.14rem;color:var(--muted);max-width:62ch;margin:0 0 22px}
.stats{display:flex;gap:26px;flex-wrap:wrap;font-family:'JetBrains Mono',monospace;font-size:.85rem;color:var(--muted)}
.stats b{display:block;font-size:1.7rem;color:var(--ink);font-family:Fraunces,Georgia,serif}
.why{background:#F4EFE4;border:1px solid var(--line);border-left:3px solid var(--amber);border-radius:6px;padding:22px 24px;margin:34px 0}
.why h2{font-family:Fraunces,Georgia,serif;margin:0 0 10px;font-size:1.28rem}
.why p{margin:0 0 12px;max-width:74ch}
.why p:last-child{margin-bottom:0}
.legend{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:14px;margin:30px 0}
.leg p{margin:6px 0 0;font-size:.88rem;color:var(--muted)}
.pill{display:inline-block;font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.04em;text-transform:uppercase;padding:3px 9px;border-radius:99px;border:1px solid currentColor;white-space:nowrap}
.pill-ok{color:var(--ok)}.pill-no{color:var(--no)}.pill-band{color:var(--band)}.pill-dead{color:var(--dead)}
.controls{position:sticky;top:0;background:var(--paper);border-bottom:1px solid var(--line);padding:14px 0;z-index:5}
.filters{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px}
.fbtn{font:inherit;font-size:.82rem;padding:5px 12px;border:1px solid var(--line);background:#fff;border-radius:99px;cursor:pointer;color:var(--muted)}
.fbtn:hover{border-color:var(--amber)}
.fbtn.on{background:var(--ink);color:var(--paper);border-color:var(--ink)}
#q{width:100%;max-width:340px;font:inherit;font-size:.9rem;padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:#fff}
.cat{margin:44px 0 0}
.cat h2{font-family:Fraunces,Georgia,serif;font-size:1.5rem;margin:0 0 4px;padding-bottom:8px;border-bottom:1px solid var(--line)}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:16px;margin-top:18px}
.tool{border:1px solid var(--line);border-radius:8px;padding:18px 20px;background:#fff}
.tool-head{display:flex;justify-content:space-between;align-items:start;gap:12px;margin-bottom:10px}
.tool h3{font-family:Fraunces,Georgia,serif;margin:0;font-size:1.1rem}
.floor{margin:0 0 10px;font-size:.9rem}
blockquote{margin:0 0 10px;padding:10px 14px;background:#FAF7F0;border-left:2px solid var(--line);font-size:.86rem;color:#3A342D;font-style:italic;overflow-wrap:break-word}
.src{margin:0 0 8px;font-family:'JetBrains Mono',monospace;font-size:.75rem;color:var(--muted);overflow-wrap:break-word}
.note{margin:0;font-size:.86rem;color:var(--muted)}
.empty{padding:40px 0;color:var(--muted);text-align:center;display:none}
footer.bot{margin-top:60px;border-top:1px solid var(--line);padding:34px 0 50px;color:var(--muted);font-size:.9rem}
footer.bot a{color:var(--muted)}
@media (max-width:600px){.grid{grid-template-columns:1fr}.controls{position:static}}
@media (prefers-color-scheme:dark){
  :root{--paper:#16130F;--ink:#F0EAE0;--muted:#A79C8D;--line:#332C24;--amber:#E9A23B;--ok:#5DBF8F;--no:#E88A8A;--band:#D6B24E;--dead:#8A8078}
  .tool,#q,.fbtn{background:#1E1A15}
  .why{background:#1E1A15}
  blockquote{background:#221D17;color:#D8D0C4}
  .fbtn.on{background:var(--ink);color:var(--paper)}
}
:root[data-theme="dark"]{--paper:#16130F;--ink:#F0EAE0;--muted:#A79C8D;--line:#332C24;--amber:#E9A23B;--ok:#5DBF8F;--no:#E88A8A;--band:#D6B24E;--dead:#8A8078}
:root[data-theme="dark"] .tool,:root[data-theme="dark"] #q,:root[data-theme="dark"] .fbtn{background:#1E1A15}
:root[data-theme="dark"] .why{background:#1E1A15}
:root[data-theme="dark"] blockquote{background:#221D17;color:#D8D0C4}
:root[data-theme="light"]{--paper:#FBF8F2;--ink:#1C1814;--muted:#6B6259;--line:#E5DED1;--amber:#B45309;--ok:#1B6B4A;--no:#9B2C2C;--band:#8A6A00;--dead:#5B5350}
:root[data-theme="light"] .tool,:root[data-theme="light"] #q,:root[data-theme="light"] .fbtn{background:#fff}
</style>
</head>
<body>
<header class="top"><div class="wrap">
  <a class="brand" href="/">Modern Age Coders</a>
  <nav class="topnav"><a href="/courses">Courses</a><a href="/how-we-teach">How we teach</a><a href="/contact">Contact</a></nav>
</div></header>

<main>
<div class="hero"><div class="wrap">
  <h1>AI tool age limits: what your child can actually use</h1>
  <p class="lede">We teach AI to 13-18 year-olds, so we had to know which tools a 13-year-old is actually allowed to open an account on. We read the terms of ${all.length} of them. ${taught} passed. This is the whole list, including the ones we threw out, with the vendor's own words next to each.</p>
  <div class="stats">
    <div><b>${all.length}</b>tools checked</div>
    <div><b>${taught}</b>usable by our students</div>
    <div><b>${count('remove_age')}</b>blocked by age</div>
    <div><b>${count('remove_risk')}</b>blocked on content</div>
    <div><b>${count('remove_dead')}</b>no longer exist</div>
  </div>
</div></div>

<div class="wrap">
  <div class="why">
    <h2>Why so many AI tools ban children</h2>
    <p>Most parents assume an AI tool bans under-13s because it is unsuitable. That is usually not the reason. Age floors in software terms track <strong>contract law and data-protection liability</strong> &mdash; COPPA in the US, GDPR Article 8 in Europe, and India's DPDP Act 2023 &mdash; not whether the tool is any good for a child. A minor cannot form a binding contract, so the safest thing a vendor can write is a high number.</p>
    <p>That cuts both ways. Some genuinely careful tools ban under-16s for paperwork reasons. And some tools that look harmless bar under-18s while a tool with real adult content sits at 13. <strong>You cannot tell from the marketing. You have to read the terms.</strong> So we did.</p>
    <p>Two things worth knowing before you scan the list. A tool saying &ldquo;13, or the minimum age required in your country&rdquo; quietly means <strong>18 in India</strong>, because that is the age you can consent for yourself here. And parental consent does not always help: a few vendors say in writing that the adult must <em>be</em> the account holder, or that consent cannot cure the bar at all.</p>
  </div>

  <div class="legend">
${legend}
  </div>
</div>

<div class="controls"><div class="wrap">
  <div class="filters">
${filters}
  </div>
  <label for="q" class="sr-only" style="position:absolute;left:-9999px">Search tools</label>
  <input id="q" type="search" placeholder="Search a tool by name&hellip;" autocomplete="off">
</div></div>

<div class="wrap">
${cats.map(section).join('\n')}
  <p class="empty" id="empty">No tool matches that search.</p>
</div>
</main>

<footer class="bot"><div class="wrap">
  <p><strong>How we checked.</strong> Every age above was read from a page owned by the vendor and quoted word for word. Nothing here came from a search result, a summary, or an app-store rating &mdash; those are frequently wrong, and during this audit a search engine confidently attributed one company's age policy to a completely different company. Where a vendor publishes no age at all, we say so rather than guess. Follow any source link and check us.</p>
  <p><strong>Last checked ${esc(d._about.audited)}.</strong> Vendors change their terms without notice, so treat anything here as a starting point rather than gospel. If you find something out of date, <a href="/contact">tell us</a> and we will re-check it.</p>
  <p>Modern Age Coders &middot; <a href="/courses">Courses</a> &middot; <a href="/contact">Contact</a></p>
</div></footer>

<script>
(function(){
  var tools = Array.prototype.slice.call(document.querySelectorAll('.tool'));
  var btns  = Array.prototype.slice.call(document.querySelectorAll('.fbtn'));
  var q = document.getElementById('q');
  var empty = document.getElementById('empty');
  var filter = 'all';
  function apply(){
    var term = q.value.trim().toLowerCase();
    var shown = 0;
    tools.forEach(function(el){
      var okB = filter === 'all' || el.dataset.bucket === filter;
      var okQ = !term || el.dataset.name.indexOf(term) !== -1;
      var on = okB && okQ;
      el.style.display = on ? '' : 'none';
      if (on) shown++;
    });
    document.querySelectorAll('.cat').forEach(function(sec){
      var any = sec.querySelector('.tool:not([style*="none"])');
      sec.style.display = any ? '' : 'none';
    });
    empty.style.display = shown ? 'none' : 'block';
  }
  btns.forEach(function(b){
    b.addEventListener('click', function(){
      btns.forEach(function(x){ x.classList.remove('on'); });
      b.classList.add('on');
      filter = b.dataset.f;
      apply();
    });
  });
  q.addEventListener('input', apply);
})();
</script>
</body>
</html>
`;

fs.writeFileSync(OUT, html, 'utf8');
console.log(`Wrote ${path.relative(ROOT, OUT)}  ${(html.length / 1024).toFixed(1)} KB`);
console.log(`${all.length} tools · ${taught} usable · ${count('remove_age')} age · ${count('remove_risk')} content · ${count('remove_dead')} dead · ${count('unverified')} unproven`);
