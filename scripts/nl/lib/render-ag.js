'use strict';
/**
 * Renderer for Netherlands cluster pages on the build-ai (ag-) system.
 *
 * Structure only: every sentence comes from the page module in
 * content/nl/<slug>.js. Anatomy mirrors src/pages/ai-and-python-academy-oman.html
 * (nav, hero with at-a-glance panel, capsule, picks with real thumbnails,
 * ordered sections, ladder, catalogue bands, how it runs, student work,
 * fees, reviews, FAQ, elsewhere, start form) so ai-global.css needs no new
 * classes. Designed-to-repeat chrome (reviews, student projects, price grid,
 * form panel) is the same on every page by design and is stripped by the
 * uniqueness gate by class.
 */
const fs = require('fs');
const path = require('path');
const { course } = require('./catalogue');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const BRAND = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'brand-facts.json'), 'utf8'));
const SITE = 'https://learn.modernagecoders.com';
const WA = 'https://wa.me/919123366161?text=';

const REVIEWS = [
  ['The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content.', 'Ria Mukherjee', 'Parent'],
  ['Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease.', 'Samriddha Mondal', 'Student'],
  ['One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development.', 'Vansh Agarwal', 'Student'],
  ['My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative.', 'Sonam Oswal', 'Parent of Dhairya'],
  ['Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students\' confidence and inspires them to learn without hesitation.', 'Sonu Goyal', 'Parent'],
  ['I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding.', 'Ritu Kedia', 'Parent']
];

// Student projects with live addresses, identical on every academy page.
const PROJECTS = [
  ['nutrilife.webp', 'NutriLife AI nutrition coach project screenshot', 'AI and ML', 'NutriLife', 'An AI nutrition coach that reads what you eat and works you toward a target.', 'Bhavya', 'https://nutrilife-bhavya.lovable.app'],
  ['misti.webp', 'Misti AI chatbot for maths and coding screenshot', 'AI and ML', 'Misti', 'A chatbot that answers mathematics and programming questions, built and deployed by a student.', 'Harshit', 'https://misti.modernagecoders.com'],
  ['guardianx.webp', 'GuardianX AI internet safety assistant screenshot', 'AI and ML', 'GuardianX', 'An assistant that helps a young person recognise unsafe situations online.', 'Vivaan', 'https://guardianx-cybersaver.lovable.app'],
  ['skycast.webp', 'SkyCast weather forecast application screenshot', 'Web app', 'SkyCast', 'A weather forecasting site with live conditions for any location.', 'Krish', '']
];

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const plain = s => String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const groupLabel = () => BRAND.batchSizes.group.replace(/[–—-]/, ' to ');
const stars = () => '<span class="ag-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>';

function paras(arr) { return arr.map(p => `<p>${p}</p>`).join('\n'); }

function block(b) {
  switch (b.kind) {
    case 'two':
      return `<div class="ag-grid-2${b.mt ? ' ag-mt-40' : ''}" style="align-items:start"><div>${b.leftH3 ? `<h3>${b.leftH3}</h3>` : ''}${paras(b.left)}</div><div>${b.rightH3 ? `<h3>${b.rightH3}</h3>` : ''}${paras(b.right)}</div></div>`;
    case 'three':
      return `<div class="ag-grid-3${b.mt ? ' ag-mt-40' : ''}">` + b.cells.map(c => `<div><h3>${c.h3}</h3><p>${c.p}</p></div>`).join('') + '</div>';
    case 'table': {
      const num = new Set(b.numCols || []);
      return `<div class="ag-table-wrap${b.mt ? ' ag-mt-40' : ''}"><table class="ag-table"><caption>${b.caption}</caption><thead><tr>` + b.head.map(h => `<th scope="col">${h}</th>`).join('') + '</tr></thead><tbody>' + b.rows.map(r => '<tr>' + r.map((c, i) => `<td${num.has(i) ? ' class="ag-num"' : ''}>${c}</td>`).join('') + '</tr>').join('') + '</tbody></table></div>';
    }
    case 'source':
      return `<p class="ag-source-note ag-mt-40">${b.html}</p>`;
    case 'p':
      return `<p${b.mt ? ' class="ag-mt-40"' : ''}>${b.html}</p>`;
    case 'capsule':
      return `<div class="ag-capsule"><p class="ag-capsule-q">${b.q}</p><p>${b.p}</p></div>`;
    default:
      throw new Error('render-ag: unknown block kind ' + b.kind);
  }
}

function section(s) {
  const tint = s.tint === 'tint' ? ' ag-section--tint' : s.tint === 'deep' ? ' ag-section--deep' : '';
  const head = s.h2 ? `<div class="ag-section-head"><p class="ag-eyebrow">${esc(s.eyebrow)}</p><h2>${s.h2}</h2>${s.lede ? `<p class="ag-lede">${s.lede}</p>` : ''}</div>` : '';
  return `<section class="ag-section${tint}"${s.id ? ` id="${s.id}"` : ''}>\n  <div class="ag-wrap">\n    ${head}\n    ${s.body.map(block).join('\n    ')}\n  </div>\n</section>`;
}

function pick(item, n) {
  const c = course(item.course);
  return `      <a class="ag-pick" href="${c.url}">
        <div class="ag-pick-shot"><img src="${c.image}" alt="${esc(item.alt || (c.title.split(':')[0] + ' course thumbnail'))}" width="800" height="450" loading="lazy"></div>
        <div class="ag-pick-body">
          <p class="ag-pick-code">${esc(item.code || ('NL / ' + String(n + 1).padStart(2, '0')))}</p>
          <h3>${esc(item.title || c.title.split(':')[0])}</h3>
          <p>${item.note}</p>
          <span class="ag-pick-go">Open the syllabus <span>&rarr;</span></span>
        </div>
      </a>`;
}

function courseCard(x) {
  const c = course(x.slug);
  return `        <article class="ag-course">
          <p class="ag-course-code">${esc(x.code)}</p>
          <h4>${esc(x.title || c.title.split(':')[0])}</h4>
          <p>${x.blurb}</p>
          <a class="ag-course-link" href="${c.url}">Open the syllabus</a>
        </article>`;
}

function jsonLd(page) {
  const url = SITE + '/' + page.slug;
  const m = page.market;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'EducationalOrganization', '@id': SITE + '/#org', name: 'Modern Age Coders', url: SITE, logo: SITE + '/images/logo.svg', foundingDate: String(BRAND.founded), areaServed: { '@type': 'Country', name: m.name }, knowsAbout: ['Python', 'Machine Learning', 'AI Agents', 'Deep Learning', 'Data Science', 'Generative AI', 'Large Language Models', 'Model Evaluation', 'Git and GitHub', 'Statistics'] },
      { '@type': 'WebPage', '@id': url + '#page', url, name: plain(page.pageName), description: page.webPageDescription, inLanguage: m.lang, isPartOf: { '@type': 'WebSite', url: SITE, name: 'Modern Age Coders' } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' }].concat(page.crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 2, name: c.name, item: SITE + c.href }))).concat([{ '@type': 'ListItem', position: page.crumbs.length + 2, name: plain(page.crumbLabel), item: url }]) },
      { '@type': 'Course', name: plain(page.pageName), description: page.courseDescription, provider: { '@id': SITE + '/#org' }, inLanguage: 'en', educationalCredentialAwarded: 'Modern Age Coders certificate of completion', audience: { '@type': 'EducationalAudience', educationalRole: 'student' }, hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT1H30M', location: { '@type': 'VirtualLocation', url }, instructor: { '@type': 'Organization', name: 'Modern Age Coders' } }, offers: [{ '@type': 'Offer', name: 'Group batch', price: '100', priceCurrency: 'USD', category: 'Monthly', availability: 'https://schema.org/InStock', url }, { '@type': 'Offer', name: 'One to one', price: '150', priceCurrency: 'USD', category: 'Monthly', availability: 'https://schema.org/InStock', url }] },
      { '@type': 'FAQPage', mainEntity: page.faq.items.map(f => ({ '@type': 'Question', name: plain(f.q), acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })) }
    ]
  };
  const service = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Online Python, AI and machine learning teaching for students', provider: { '@type': 'EducationalOrganization', name: 'Modern Age Coders', url: SITE + '/' }, areaServed: { '@type': 'Country', name: m.name }, availableChannel: { '@type': 'ServiceChannel', serviceUrl: url, availableLanguage: ['en'] } };
  return `  <script type="application/ld+json" data-price-scope="coding.international">\n  ${JSON.stringify(graph)}\n  </script>\n\n  <script type="application/ld+json">\n  ${JSON.stringify(service)}\n  </script>`;
}

function leadScript(page) {
  const m = page.market;
  const fn = 'submitLead_' + page.code;
  return `<script>
window.${fn} = function (e) {
  e.preventDefault();
  var form = e.target;
  var name = (form.querySelector('input[name="name"]') || {}).value || '';
  var phoneRaw = (form.querySelector('input[type="tel"]') || {}).value || '';
  var age = (form.querySelector('select[name="age"]') || {}).value || '';
  var note = form.querySelector('.ag-form-note');
  var phoneDigits = phoneRaw.replace(/\\D/g, '');
  if (phoneDigits.length < ${m.minDigits}) { if (note) note.textContent = 'Please enter a valid ${m.name} phone number.'; return; }
  var btn = form.querySelector('button[type="submit"]');
  var oldText = btn.textContent;
  btn.disabled = true; btn.textContent = 'Sending...';
  var API_URL = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
    ? 'http://localhost:5000' : 'https://backend-modernagecoders.vercel.app';
  fetch(API_URL + '/api/callback/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone: phoneDigits, countryCode: '${m.dial}', countryIso: '${m.iso}', countryName: '${m.name}',
      source: '${page.slug}-inline', meta: { name: name, age: age, page: '${page.slug}' }
    })
  }).then(function (r) { return r.json(); }).then(function (data) {
    if (data && data.success) {
      form.innerHTML = '<p class="ag-form-ok">Thank you' + (name ? ', ' + name.split(' ')[0] : '') + '. A mentor will call you shortly.</p>';
    } else {
      if (note) note.textContent = (data && data.message) || 'Something went wrong. Please try again.';
      btn.disabled = false; btn.textContent = oldText;
    }
  }).catch(function () {
    if (note) note.textContent = 'Network error. Please try again.';
    btn.disabled = false; btn.textContent = oldText;
  });
};
</script>
<script>
  window.addEventListener('load', function () {
    var s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-N8BM164YJP';
    s.async = true;
    document.head.appendChild(s);
  });
</script>`;
}

function render(page) {
  const url = SITE + '/' + page.slug;
  const m = page.market;
  const wa = WA + encodeURIComponent(page.wa);
  const fn = 'submitLead_' + page.code;

  const head = `<!DOCTYPE html>
<html lang="${m.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <meta name="author" content="Modern Age Coders">
  <link rel="canonical" href="${url}">
  <link rel="alternate" type="text/markdown" href="/src/pages/${page.slug}.md" title="Markdown version for AI agents">

  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
  <meta name="theme-color" content="${page.accent}">

  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.ogDescription)}">
  <meta property="og:image" content="${SITE}/images/og-modern-age-coders.png">
  <meta property="og:site_name" content="Modern Age Coders">
  <meta property="og:locale" content="${m.locale}">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(page.title.replace(/ \| .*$/, ''))}">
  <meta name="twitter:description" content="${esc(page.twitterDescription)}">
  <meta name="twitter:image" content="${SITE}/images/og-modern-age-coders.png">

  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="geo.region" content="${m.geoRegion}">
  <meta name="geo.placename" content="${esc(m.name)}">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/ai-global.css?v=${page.cssVersion || '20260907'}">
  <style>
${page.personalityCss.trim()}
  </style>

  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-N8BM164YJP');gtag('config','AW-16910316353');</script>

${jsonLd(page)}
</head>

<body class="ag-root ag-${page.code}">

<nav class="ag-nav" aria-label="Primary">
  <div class="ag-nav-inner">
    <a href="/" class="ag-nav-brand">
      <img src="/images/logo.svg" alt="Modern Age Coders logo" width="30" height="30" fetchpriority="high">
      Modern Age Coders
      <span class="ag-brand-tag">${esc(m.brandTag)}</span>
    </a>
    <ul class="ag-nav-links">
      ${page.navLinks.map(l => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('\n      ')}
    </ul>
    <a href="#start" class="ag-btn">Free first class</a>
  </div>
</nav>`;

  const hero = `<header class="ag-hero">
  <div class="ag-wrap">
    <nav class="ag-crumbs" aria-label="Breadcrumb">
      <a href="/">Home</a> / ${page.crumbs.map(c => `<a href="${c.href}">${esc(c.name)}</a>`).join(' / ')} / ${page.crumbLabel}
    </nav>
    <div class="ag-hero-grid ag-mt-40">
      <div>
        <p class="ag-eyebrow">${page.eyebrow}</p>
        <h1>${page.h1}</h1>
        <p class="ag-lede">${page.lede}</p>
        <div class="ag-btn-row">
          <a href="#start" class="ag-btn">Book the free first class</a>
          <a href="${page.secondaryCta.href}" class="ag-btn ag-btn--ghost">${esc(page.secondaryCta.label)}</a>
          <a href="${wa}" class="ag-btn ag-btn--ghost" target="_blank" rel="noopener" onclick="if(window.gtag)gtag('event','whatsapp_click',{page_market:'${page.code}'});">Ask on WhatsApp</a>
        </div>
        <p class="ag-hero-note">${page.heroNote}</p>
      </div>

      <aside class="ag-spec">
        <p class="ag-spec-title">At a glance</p>
        <p class="ag-trust">
          ${stars()}
          ${BRAND.rating} across ${BRAND.reviews} Google reviews
        </p>
        <dl>
          ${page.spec.map(r => `<dt>${esc(r[0])}</dt><dd>${r[1]}</dd>`).join('\n          ')}
        </dl>
      </aside>
    </div>
  </div>
</header>`;

  const capsule = `<section class="ag-section">
  <div class="ag-wrap">
    <div class="ag-capsule">
      <p class="ag-capsule-q">${esc(page.capsuleQ)}</p>
      <p>${page.capsule}</p>
    </div>
  </div>
</section>`;

  const picks = `<section class="ag-section" id="courses">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">${esc(page.picks.eyebrow)}</p>
      <h2>${page.picks.h2}</h2>
      <p class="ag-lede">${page.picks.lede}</p>
    </div>
    <div class="ag-picks">
${page.picks.items.map(pick).join('\n')}
    </div>
  </div>
</section>`;

  const sections = page.sections.map(section).join('\n\n');

  const ladder = `<section class="ag-section" id="ladder">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">${esc(page.ladder.eyebrow)}</p>
      <h2>${page.ladder.h2}</h2>
      <p class="ag-lede">${page.ladder.lede}</p>
    </div>
    ${block(Object.assign({ kind: 'table', numCols: [1, 2] }, page.ladder.table))}
    ${block({ kind: 'two', mt: true, leftH3: page.ladder.left.h3, left: page.ladder.left.ps, rightH3: page.ladder.right.h3, right: page.ladder.right.ps })}
  </div>
</section>`;

  const catalogue = `<section class="ag-section ag-section--tint" id="catalogue">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">${esc(page.catalogue.eyebrow)}</p>
      <h2>${page.catalogue.h2}</h2>
      <p class="ag-lede">${page.catalogue.lede}</p>
    </div>
${page.catalogue.bands.map(b => `    <div class="ag-band">
      <div class="ag-band-head">
        <span class="ag-band-num">${esc(b.num)}</span>
        <h3>${b.h3}</h3>
        <span class="ag-band-sub">${b.sub}</span>
      </div>
      <div class="ag-grid-${b.courses.length >= 4 ? 4 : 3}">
${b.courses.map(courseCard).join('\n')}
      </div>
    </div>`).join('\n')}
  </div>
</section>`;

  const how = `<section class="ag-section" id="how">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">${esc(page.how.eyebrow)}</p>
      <h2>${page.how.h2}</h2>
      <p class="ag-lede">${page.how.lede}</p>
    </div>
    <div class="ag-slots">
      ${page.how.slots.map(s => `<div class="ag-slot"><p class="ag-slot-time">${esc(s.time)}</p><p class="ag-slot-l">${s.l}</p></div>`).join('\n      ')}
    </div>
    <div class="ag-grid-3">
      ${page.how.cells.map(c => `<div><h3>${c.h3}</h3><p>${c.p}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>`;

  const projects = `<section class="ag-section ag-section--tint">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">Student work</p>
      <h2>${page.projectsH2}</h2>
      <p class="ag-lede">${page.projectsLede}</p>
    </div>
    <div class="ag-grid-4">
${PROJECTS.map(p => `      <article class="ag-proj">
        <div class="ag-proj-shot"><img src="/images/projects/${p[0]}" alt="${p[1]}" loading="lazy" width="400" height="250"></div>
        <div class="ag-proj-body">
          <p class="ag-proj-cat">${p[2]}</p>
          <h4>${p[3]}</h4>
          <p>${p[4]}</p>
          <p class="ag-proj-meta">by ${p[5]}${p[6] ? ` &middot; <a href="${p[6]}" rel="noopener" target="_blank">Open it</a>` : ''}</p>
        </div>
      </article>`).join('\n')}
    </div>
  </div>
</section>`;

  const fees = `<section class="ag-section" id="fees">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">Fees</p>
      <h2>${page.fees.h2}</h2>
      <p class="ag-lede">${page.fees.lede}</p>
    </div>
    <div class="ag-grid-3">
      <div class="ag-price">
        <p class="ag-price-name">Free first class</p>
        <p class="ag-price-amt">USD 0</p>
        <p class="ag-price-alt">no card required</p>
        <ul>${page.fees.free.map(x => `<li>${x}</li>`).join('')}</ul>
        <a href="#start" class="ag-btn ag-btn--ghost">Book it</a>
      </div>
      <div class="ag-price ag-price--feature">
        <p class="ag-price-name">Group batch</p>
        <p class="ag-price-amt">USD 100</p>
        <p class="ag-price-alt">a month, billed in US dollars</p>
        <ul>${page.fees.group.map(x => `<li>${x}</li>`).join('')}</ul>
        <a href="#start" class="ag-btn">Start here</a>
      </div>
      <div class="ag-price">
        <p class="ag-price-name">One to one</p>
        <p class="ag-price-amt">USD 150</p>
        <p class="ag-price-alt">a month, billed in US dollars</p>
        <ul>${page.fees.one.map(x => `<li>${x}</li>`).join('')}</ul>
        <a href="#start" class="ag-btn ag-btn--ghost">Enquire</a>
      </div>
    </div>
  </div>
</section>`;

  const reviews = `<section class="ag-section ag-section--tint">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">What families say</p>
      <h2>Rated ${BRAND.rating} across ${BRAND.reviews} Google reviews</h2>
      <p class="ag-lede">${page.reviewsLede}</p>
    </div>
    <div class="ag-grid-3">
${REVIEWS.map(r => `      <article class="ag-review">
        <p class="ag-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
        <p class="ag-review-text">"${r[0]}"</p>
        <p class="ag-review-name">${r[1]}</p>
        <p class="ag-review-role">${r[2]}</p>
      </article>`).join('\n')}
    </div>
  </div>
</section>`;

  const faq = `<section class="ag-section" id="faq">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">${esc(page.faq.eyebrow)}</p>
      <h2>${page.faq.h2}</h2>
    </div>
    <div class="ag-faq">
${page.faq.items.map(f => `      <div class="ag-faq-item">
        <h3>${f.q}</h3>
        <p>${f.a}</p>
      </div>`).join('\n')}
    </div>
  </div>
</section>`;

  const elsewhere = `<section class="ag-section">
  <div class="ag-wrap">
    <div class="ag-section-head">
      <p class="ag-eyebrow">${esc(page.elsewhere.eyebrow)}</p>
      <h2>${page.elsewhere.h2}</h2>
      <p class="ag-lede">${page.elsewhere.lede}</p>
    </div>
    <div class="ag-grid-3">
      ${page.elsewhere.items.map(i => `<div><h3><a class="ag-inline-link" href="${i.href}">${esc(i.label)}</a></h3><p>${i.p}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>`;

  const start = `<section class="ag-section ag-section--deep" id="start">
  <div class="ag-wrap">
    <div class="ag-grid-2" style="align-items:start">
      <div>
        <p class="ag-eyebrow">Start here</p>
        <h2>${page.start.h2}</h2>
        <p class="ag-lede">${page.start.lede}</p>
        <p class="ag-mt-40">${page.start.readFirst}</p>
        <p class="ag-mt-40">
          <a class="ag-inline-link" href="${wa}" target="_blank" rel="noopener" onclick="if(window.gtag)gtag('event','whatsapp_click',{page_market:'${page.code}',pos:'end'});">WhatsApp us</a>
          &middot; <a class="ag-inline-link" href="tel:+919123366161">+91 91233 66161</a>
          &middot; <a class="ag-inline-link" href="mailto:contact@modernagecoders.com">contact@modernagecoders.com</a>
        </p>
        <p class="ag-form-note">${page.start.note}</p>
      </div>
      <div class="ag-form-panel">
        <form onsubmit="${fn}(event)" novalidate>
          <div class="ag-field">
            <label for="nl-name">Your name</label>
            <input id="nl-name" type="text" name="name" placeholder="Parent or student name" required>
          </div>
          <div class="ag-field">
            <label for="nl-phone">Phone or WhatsApp, ${esc(m.name)} ${esc(m.dial)}</label>
            <input id="nl-phone" type="tel" name="phone" placeholder="${esc(m.phonePlaceholder)}" required>
          </div>
          <div class="ag-field">
            <label for="nl-age">Learner age group</label>
            <select id="nl-age" name="age"><option value="6-12">Child, 6 to 12</option><option value="13-18">Teen, 13 to 18</option><option value="college">University student</option><option value="adult">Working professional</option></select>
          </div>
          <button type="submit" class="ag-btn" style="width:100%">Request the free class</button>
          <p class="ag-form-note">${page.start.formNote}</p>
        </form>
      </div>
    </div>
  </div>
</section>`;

  const footer = `<footer class="ag-footer">
  <div class="ag-wrap">
    <div class="ag-grid-4">
      <div>
        <h4>Modern Age Coders</h4>
        <p style="font-size:.9rem;opacity:.82">
          Live online coding, AI and mathematics for ages ${BRAND.ages}. Teaching since ${BRAND.founded}, more than
          ${BRAND.students.replace('+', '')} students across ${BRAND.countries} countries.
        </p>
      </div>
      ${page.footer.cols.map(c => `<div><h4>${esc(c.h4)}</h4><ul>${c.links.map(l => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('')}</ul></div>`).join('\n      ')}
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="/about">About us</a></li>
          <li><a href="/how-we-teach">How we teach</a></li>
          <li><a href="/love">Reviews</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="ag-footer-bottom">
      <span>&copy; 2026 Modern Age Coders. Live online classes worldwide.</span>
      <span>${page.footer.bottomRight}</span>
    </div>
  </div>
</footer>`;

  return [head, '', hero, '', capsule, '', picks, '', sections, '', ladder, '', catalogue, '', how, '', projects, '', fees, '', reviews, '', faq, '', elsewhere, '', start, '', footer, '', leadScript(page), '', '</body>', '</html>', ''].join('\n');
}

// ---------------------------------------------------------------- md twin
function md(html) {
  return String(html)
    .replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (x, h, t) => `[${t.replace(/<[^>]+>/g, '')}](${h})`)
    .replace(/<strong>([\s\S]*?)<\/strong>/g, '**$1**')
    .replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&middot;/g, '·').replace(/&rarr;/g, '->').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ').trim();
}
function mdTable(t) {
  return [`**${md(t.caption)}**`, '', '| ' + t.head.map(md).join(' | ') + ' |', '|' + t.head.map(() => '---').join('|') + '|', ...t.rows.map(r => '| ' + r.map(md).join(' | ') + ' |')].join('\n');
}
function mdBlock(b) {
  switch (b.kind) {
    case 'two': return [b.leftH3 ? `### ${md(b.leftH3)}` : '', ...b.left.map(md), b.rightH3 ? `### ${md(b.rightH3)}` : '', ...b.right.map(md)].filter(Boolean).join('\n\n');
    case 'three': return b.cells.map(c => `### ${md(c.h3)}\n\n${md(c.p)}`).join('\n\n');
    case 'table': return mdTable(b);
    case 'source': return md(b.html);
    case 'p': return md(b.html);
    case 'capsule': return `**${md(b.q)}** ${md(b.p)}`;
    default: return '';
  }
}
function twin(page) {
  const url = SITE + '/' + page.slug;
  const out = ['---', `title: ${JSON.stringify(page.title)}`, `description: ${JSON.stringify(page.description)}`, `canonical: ${url}`, `source: src/pages/${page.slug}.html`, '---'];
  out.push(`> ${md(page.capsule)}`, '');
  out.push('[Home](/) / ' + page.crumbs.map(c => `[${c.name}](${c.href})`).join(' / ') + ' / ' + md(page.crumbLabel), '');
  out.push(md(page.eyebrow), '', `# ${md(page.h1)}`, '', md(page.lede), '');
  out.push('At a glance: ' + page.spec.map(r => `${r[0]}: ${md(r[1])}`).join('; ') + `. Rated ${BRAND.rating} across ${BRAND.reviews} Google reviews.`, '');
  out.push(`## ${md(page.picks.h2)}`, '', md(page.picks.lede), '');
  page.picks.items.forEach(i => { const c = course(i.course); out.push(`- [${i.title || c.title.split(':')[0]}](${c.url}): ${md(i.note)}`); });
  out.push('');
  for (const s of page.sections) { if (s.h2) { out.push(`## ${md(s.h2)}`, ''); if (s.lede) out.push(md(s.lede), ''); } for (const b of s.body) { const t = mdBlock(b); if (t) out.push(t, ''); } }
  out.push(`## ${md(page.ladder.h2)}`, '', md(page.ladder.lede), '', mdTable(page.ladder.table), '', `### ${md(page.ladder.left.h3)}`, '', ...page.ladder.left.ps.map(md), '', `### ${md(page.ladder.right.h3)}`, '', ...page.ladder.right.ps.map(md), '');
  out.push(`## ${md(page.catalogue.h2)}`, '', md(page.catalogue.lede), '');
  for (const b of page.catalogue.bands) { out.push(`### ${md(b.h3)}`, '', md(b.sub), ''); for (const x of b.courses) { const c = course(x.slug); out.push(`- [${x.title || c.title.split(':')[0]}](${c.url}): ${md(x.blurb)}`); } out.push(''); }
  out.push(`## ${md(page.how.h2)}`, '', md(page.how.lede), '');
  for (const s of page.how.slots) out.push(`- **${md(s.time)}** ${md(s.l)}`);
  out.push('');
  for (const c of page.how.cells) out.push(`- **${md(c.h3)}** ${md(c.p)}`);
  out.push('');
  out.push(`## ${md(page.fees.h2)}`, '', md(page.fees.lede), '', `- Free first class: USD 0. ${page.fees.free.map(md).join('. ')}.`, `- Group batch: USD 100 a month. ${page.fees.group.map(md).join('. ')}.`, `- One to one: USD 150 a month. ${page.fees.one.map(md).join('. ')}.`, '');
  out.push(`## ${md(page.faq.h2)}`, '');
  for (const f of page.faq.items) out.push(`### ${md(f.q)}`, '', md(f.a), '');
  out.push(`## ${md(page.elsewhere.h2)}`, '');
  for (const i of page.elsewhere.items) out.push(`- [${i.label}](${i.href}): ${md(i.p)}`);
  out.push('', '## Contact', '', `Book the free first class at [${url}](${url}#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.`, '');
  return out.join('\n');
}

module.exports = { render, twin, plain, REVIEWS, PROJECTS };
