#!/usr/bin/env node
/**
 * build-priority-demo-pages.js
 * ------------------------------------------------------------------
 * Builds the ten-page "priority demo" cluster from
 * scripts/priority-demo/pages.js into src/pages/<slug>.html, and keeps the
 * three hand-maintained registries in step:
 *
 *   _redirects      /<slug> -> /src/pages/<slug>.html
 *   netlify.toml    the same rule (both files are applied, so both must agree)
 *   sitemap.xml     one <url> per page
 *
 * Every write is idempotent: run it twice and the second run changes nothing.
 * Nav, footer, the lead scripts, the link mesh and the markdown twins are
 * added by the normal site build (inline-components, build-link-mesh,
 * generate-static-md), exactly as for every other page in src/pages.
 *
 * Every internal link in the content is checked against _redirects and the
 * course data. A link to a page that does not exist fails the run.
 *
 * Usage:  node scripts/build-priority-demo-pages.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BASE = 'https://learn.modernagecoders.com';
const TODAY = new Date().toISOString().slice(0, 10);
const CSS_VERSION = '20260919a';

const { pages, C, CLUSTER_CARDS, PROMISE } = require('./priority-demo/pages.js');

// ── helpers ──────────────────────────────────────────────────────

const escAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const stripTags = (s) => String(s).replace(/<[^>]+>/g, '');

// The visitor's own price. Rupees are the static default (and what crawlers
// see); the inline script at the foot of the page swaps in dollars outside
// India, using the same signals as international-pricing.js.
const PRICE_HTML = '<span class="pd-price">₹499</span>';
const priceHtml = (s) => String(s).replace(/\{\{PRICE\}\}/g, PRICE_HTML);
// Plain-text contexts (meta tags, JSON-LD) never carry a currency.
const pricePlain = (s) => String(s).replace(/\s*\(\{\{PRICE\}\}\)/g, '').replace(/\{\{PRICE\}\}/g, 'a small fee');

function ldJson(obj) {
  return '<script type="application/ld+json">\n' + JSON.stringify(obj, null, 2).replace(/</g, '\\u003c') + '\n</script>';
}

// ── link validation ──────────────────────────────────────────────

function knownPaths() {
  const known = new Set(['/']);
  const redirects = fs.readFileSync(path.join(ROOT, '_redirects'), 'utf8');
  redirects.split(/\r?\n/).forEach((line) => {
    const m = line.match(/^(\/\S*)\s+/);
    if (m) known.add(m[1]);
  });
  const dataDir = path.join(ROOT, 'content', 'courses', 'data');
  fs.readdirSync(dataDir).filter((f) => f.endsWith('.json')).forEach((f) => {
    try {
      const d = JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8'));
      const meta = d.meta || d;
      known.add('/courses/' + (d.slug || meta.slug || f.replace(/\.json$/, '')));
    } catch (e) { /* unreadable course file: not this script's problem */ }
  });
  pages.forEach((p) => known.add('/' + p.slug));
  return known;
}

function checkLinks(slug, html, known) {
  const bad = [];
  const re = /href="(\/[^"#?]*)/g;
  let m;
  while ((m = re.exec(html))) {
    const href = m[1].replace(/\/$/, '') || '/';
    if (/^\/(css|js|images|favicon|src)\//.test(href) || href === '/favicon.ico') continue;
    if (!known.has(href)) bad.push(href);
  }
  if (bad.length) throw new Error('Broken internal links on /' + slug + ': ' + [...new Set(bad)].join(', '));
}

// ── page template ────────────────────────────────────────────────

function renderPage(p) {
  const url = BASE + '/' + p.slug;
  const isHub = '/' + p.slug === C.hub;

  const crumbs = [{ name: 'Home', item: BASE + '/' }];
  if (!isHub) crumbs.push({ name: 'Priority Live Demo', item: BASE + C.hub });
  crumbs.push({ name: stripTags(p.h1), item: url });

  const schema = [
    ldJson({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item }))
    }),
    ldJson({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: stripTags(p.h1),
      description: p.description,
      mainEntityOfPage: url,
      dateModified: TODAY,
      author: { '@type': 'Organization', name: 'Modern Age Coders', url: BASE + '/' },
      publisher: { '@id': BASE + '/#organization' },
      image: BASE + '/images/og-modern-age-coders.png'
    }),
    ldJson({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: p.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: pricePlain(a) } }))
    })
  ].join('\n');

  const crumbHtml = crumbs.map((c, i) => (i < crumbs.length - 1
    ? '<a href="' + c.item.replace(BASE, '') + '">' + escAttr(c.name) + '</a><span aria-hidden="true">/</span>'
    : '<span aria-current="page">' + escAttr(c.name) + '</span>')).join('');

  const sections = p.sections.map((s) =>
    '        <section class="pd-section">\n          <h2>' + s.h2 + '</h2>' + priceHtml(s.html) + '        </section>').join('\n');

  const promise =
    '        <section class="pd-promise" aria-labelledby="pd-promise-h">\n' +
    '          <h2 id="pd-promise-h">What Modern Age Coders teaches</h2>\n          <ul>\n' +
    PROMISE.map(([t, d]) => '            <li><b>' + t + '</b>' + d + '</li>').join('\n') +
    '\n          </ul>\n        </section>';

  const cards = CLUSTER_CARDS.map((c) =>
    '            <a class="pd-card" href="' + c.url + '"' + (c.url === '/' + p.slug ? ' aria-current="page"' : '') + '><small>' + c.tag + '</small><b>' + c.title + '</b><span>' + c.blurb + '</span></a>').join('\n');

  const faq = p.faqs.map(([q, a]) =>
    '          <details><summary>' + q + '</summary><p>' + priceHtml(a) + '</p></details>').join('\n');

  const bookBtn = '<a class="pd-btn pd-btn--solid" href="/book-demo" data-pd-book>Book priority demo · ' + PRICE_HTML + '</a>';

  return `<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-N8BM164YJP"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-N8BM164YJP');
        gtag('config', 'AW-16910316353');
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Built by scripts/build-priority-demo-pages.js from scripts/priority-demo/pages.js. Edit there, not here. -->
    <title>${escAttr(p.title)}</title>
    <meta name="title" content="${escAttr(p.title)}">
    <meta name="description" content="${escAttr(p.description)}">
    <meta name="author" content="Modern Age Coders">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="${url}">
    <link rel="alternate" type="text/markdown" href="/src/pages/${p.slug}.md" title="Markdown version for AI agents">

    <!-- Open Graph -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${escAttr(p.title)}">
    <meta property="og:description" content="${escAttr(p.description)}">
    <meta property="og:image" content="${BASE}/images/og-modern-age-coders.png">
    <meta property="og:site_name" content="Modern Age Coders">
    <meta property="og:locale" content="en_US">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${url}">
    <meta name="twitter:title" content="${escAttr(p.title)}">
    <meta name="twitter:description" content="${escAttr(p.description)}">
    <meta name="twitter:image" content="${BASE}/images/og-modern-age-coders.png">

    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <meta name="theme-color" content="#FBF8F2">

    <!-- Meta Pixel -->
    <script src="/js/meta-pixel.js" defer></script>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap">

    <!-- Theme -->
    <link rel="stylesheet" href="/css/editorial-theme.css?v=20260626g">
    <link rel="stylesheet" href="/css/priority-demo.css?v=${CSS_VERSION}">
    <script src="/js/ux-enhancements.js" defer></script>
    <script src="/js/components-loader.js" defer></script>
    <script src="/js/callback-modal.js?v=20260820a" defer></script>
    <script src="/js/country-code-selector.js?v=20260820a" defer></script>

    <!-- Structured data -->
${schema}
</head>

<body class="pd-page editorial">
    <a href="#main" class="skip-link">Skip to main content</a>
    <div id="nav-placeholder"></div>

    <main id="main">
      <div class="pd-wrap">
        <nav class="pd-crumbs" aria-label="Breadcrumb">${crumbHtml}</nav>

        <header class="pd-hero">
          <span class="pd-eyebrow">${p.eyebrow}</span>
          <h1>${p.h1}</h1>
          <p class="pd-lede">${priceHtml(p.lede)}</p>
          <div class="pd-cta-row">
            ${bookBtn}
            <a class="pd-btn pd-btn--ghost" href="${isHub ? C.versus : C.hub}">${isHub ? 'Compare with the free demo' : 'What is the priority demo?'}</a>
          </div>
          <p class="pd-cta-note">One-time fee. No enrolment required. Confirmed on WhatsApp within the hour.</p>
        </header>

        <div class="pd-narrow">
          <div class="pd-answer"><strong>In short</strong><p>${priceHtml(p.answer)}</p></div>
        </div>
      </div>

      <div class="pd-wrap pd-narrow">
${sections}
      </div>

      <div class="pd-wrap">
${promise}

        <section class="pd-section" aria-labelledby="pd-guide-h">
          <h2 id="pd-guide-h">The whole guide</h2>
          <div class="pd-cards">
${cards}
          </div>
        </section>
      </div>

      <div class="pd-wrap pd-narrow">
        <section class="pd-section pd-faq" aria-labelledby="pd-faq-h">
          <h2 id="pd-faq-h">Questions parents ask</h2>
${faq}
        </section>

        <section class="pd-close">
          <h2>See a real class, this week.</h2>
          <p>Pick your slot, meet a mentor, and watch how we teach. Trusting Modern Age Coders with your child's learning is a big decision. A live class is the honest way to make it.</p>
          <div class="pd-cta-row">
            ${bookBtn}
            <a class="pd-btn pd-btn--ghost" href="/book-demo">Join the free waiting list</a>
          </div>
        </section>
      </div>
    </main>

    <div id="footer-placeholder"></div>

    <script>
    // Price by region, the way course pricing works: rupees in India, dollars
    // elsewhere. ?test=intl / ?test=india previews either view.
    (function () {
        function isIndia() {
            try {
                var t = (new URLSearchParams(location.search).get('test') || '').toLowerCase();
                if (t === 'intl' || t === 'international') return false;
                if (t === 'india') return true;
            } catch (e) {}
            if (typeof window.__MAC_IS_INDIAN === 'boolean') return window.__MAC_IS_INDIAN;
            var langs = navigator.languages || [navigator.language || ''];
            for (var i = 0; i < langs.length; i++) {
                var u = String(langs[i] || '').toUpperCase();
                if (u.indexOf('-IN') !== -1 || /^(HI|BN|TA|TE|MR|GU|KN|ML|PA|OR|AS)/.test(u)) return true;
            }
            var tz = '';
            try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
            return tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta';
        }
        if (!isIndia()) {
            var spans = document.querySelectorAll('.pd-price');
            for (var i = 0; i < spans.length; i++) spans[i].textContent = '$10';
        }
        // Open the payment form right here when the chooser script is loaded;
        // otherwise the link falls through to /book-demo.
        document.addEventListener('click', function (e) {
            var a = e.target && e.target.closest ? e.target.closest('[data-pd-book]') : null;
            if (!a || !window.MACDemoChoice || !window.MACDemoChoice.book) return;
            e.preventDefault();
            window.MACDemoChoice.book();
        });
    })();
    </script>
</body>

</html>
`;
}

// ── registries ───────────────────────────────────────────────────

function ensureRedirects() {
  const file = path.join(ROOT, '_redirects');
  let s = fs.readFileSync(file, 'utf8');
  const eol = s.includes('\r\n') ? '\r\n' : '\n';
  const anchor = /^\/how-we-teach \/src\/pages\/how-we-teach\.html 200\r?$/m;
  if (!anchor.test(s)) throw new Error('_redirects: /how-we-teach anchor not found');
  const missing = pages.filter((p) => !new RegExp('^/' + p.slug + ' ', 'm').test(s));
  if (!missing.length) return 0;
  const lines = missing.map((p) => '/' + p.slug + ' /src/pages/' + p.slug + '.html 200').join(eol);
  s = s.replace(anchor, (m) => m.replace(/\r$/, '') + eol + lines);
  fs.writeFileSync(file, s);
  return missing.length;
}

function ensureNetlifyToml() {
  const file = path.join(ROOT, 'netlify.toml');
  let s = fs.readFileSync(file, 'utf8');
  const eol = s.includes('\r\n') ? '\r\n' : '\n';
  const anchor = /\[\[redirects\]\]\r?\n\s*from = "\/how-we-teach"\r?\n\s*to = "\/src\/pages\/how-we-teach\.html"\r?\n\s*status = 200\r?\n/;
  if (!anchor.test(s)) throw new Error('netlify.toml: /how-we-teach anchor not found');
  const missing = pages.filter((p) => !s.includes('from = "/' + p.slug + '"'));
  if (!missing.length) return 0;
  const block = missing.map((p) =>
    ['', '[[redirects]]', '  from = "/' + p.slug + '"', '  to = "/src/pages/' + p.slug + '.html"', '  status = 200', ''].join(eol)).join('');
  s = s.replace(anchor, (m) => m + block);
  fs.writeFileSync(file, s);
  return missing.length;
}

function ensureSitemap() {
  const file = path.join(ROOT, 'sitemap.xml');
  let s = fs.readFileSync(file, 'utf8');
  const eol = s.includes('\r\n') ? '\r\n' : '\n';
  const anchor = /( *)<url>\r?\n\s*<loc>https:\/\/learn\.modernagecoders\.com\/how-we-teach<\/loc>[\s\S]*?<\/url>\r?\n/;
  const found = s.match(anchor);
  if (!found) throw new Error('sitemap.xml: /how-we-teach anchor not found');
  const pad = found[1];
  const missing = pages.filter((p) => !s.includes('<loc>' + BASE + '/' + p.slug + '</loc>'));
  if (!missing.length) return 0;
  const block = missing.map((p) =>
    [pad + '<url>', pad + '  <loc>' + BASE + '/' + p.slug + '</loc>', pad + '  <lastmod>' + TODAY + '</lastmod>', pad + '</url>', ''].join(eol)).join('');
  s = s.replace(anchor, (m) => m + block);
  fs.writeFileSync(file, s);
  return missing.length;
}

// ── main ─────────────────────────────────────────────────────────

function main() {
  const slugs = new Set();
  pages.forEach((p) => {
    if (slugs.has(p.slug)) throw new Error('Duplicate slug ' + p.slug);
    slugs.add(p.slug);
    if (p.title.length > 70) console.warn('  title over 70 chars: /' + p.slug + ' (' + p.title.length + ')');
    if (p.description.length > 165) console.warn('  description over 165 chars: /' + p.slug + ' (' + p.description.length + ')');
  });

  const routes = ensureRedirects();
  const toml = ensureNetlifyToml();
  const known = knownPaths();

  let written = 0;
  pages.forEach((p) => {
    const html = renderPage(p);
    checkLinks(p.slug, html, known);
    const file = path.join(ROOT, 'src', 'pages', p.slug + '.html');
    const before = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
    // dateModified changes daily; do not rewrite a page for that alone.
    const same = before && before.replace(/"dateModified": "[^"]+"/, '') === html.replace(/"dateModified": "[^"]+"/, '');
    if (!same) { fs.writeFileSync(file, html); written++; }
    const words = stripTags(html.slice(html.indexOf('<main'), html.indexOf('</main>'))).split(/\s+/).filter(Boolean).length;
    console.log('  /' + p.slug.padEnd(38) + words + ' words');
  });

  const sm = ensureSitemap();
  console.log('\npages written: ' + written + ' | _redirects +' + routes + ' | netlify.toml +' + toml + ' | sitemap.xml +' + sm);
}

main();
