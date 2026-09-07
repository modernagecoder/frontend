'use strict';
/**
 * Renderer for Netherlands cluster pages on the coding-global (cg-) system.
 *
 * Structure only. Every sentence a visitor reads comes from the page module in
 * content/nl/<slug>.js; the renderer owns markup, schema and the lead contract.
 * The one deliberate exception is designed-to-repeat chrome that the uniqueness
 * gate strips by class: the six approved reviews, the four flagship cards, the
 * catalogue line under the picks, the contact card, the sticky bar, the footer.
 *
 * Anatomy mirrors src/pages/coding-classes-in-madha.html, the most evolved live
 * cg- page, so the CSS needs no new classes.
 */
const fs = require('fs');
const path = require('path');
const { course } = require('./catalogue');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const BRAND = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'brand-facts.json'), 'utf8'));
const SITE = 'https://learn.modernagecoders.com';
const WA = 'https://wa.me/919123366161?text=';

// The six approved reviews, verbatim (build guide section 7). Never edited.
const REVIEWS = [
  ['The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content.', 'Ria Mukherjee', 'Parent'],
  ['Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease.', 'Samriddha Mondal', 'Student'],
  ['One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development.', 'Vansh Agarwal', 'Student'],
  ['My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative.', 'Sonam Oswal', 'Parent of Dhairya'],
  ['Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students\' confidence and inspires them to learn without hesitation.', 'Sonu Goyal', 'Parent'],
  ['I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding.', 'Ritu Kedia', 'Parent']
];

// The four flagship cards, identical on every market page by design (cg-boiler).
const FLAGSHIPS = [
  ['vibe-coding-for-teens-python-web-ai-projects-course', 'Vibe coding', 'Ages 13 to 17', 'Python, web and AI projects where the learner still owns the thinking.'],
  ['python-ai-automation-masterclass-college', 'Python and AI', 'College and adult', 'Automate the work you already do, then let AI carry part of it.'],
  ['ai-ml-masterclass-teens', 'AI and ML', 'Ages 14 to 18', 'Train a model, read what it learned, and be able to say why it is wrong.'],
  ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'Agentic coding', 'Professionals', 'Run AI coding agents on real work without losing control of the codebase.']
];

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const plain = s => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const waLink = (page) => WA + encodeURIComponent(page.wa);
const groupLabel = () => BRAND.batchSizes.group.replace(/[–—-]/, ' to ');

function stars() { return '<p class="cg-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>'; }

function pick(item, flag) {
  const c = course(item.course);
  const cls = flag ? 'cg-pick cg-pick--flag' : 'cg-pick';
  const tag = flag ? `<span class="cg-pick-tag">${esc(item.tag)}</span>` : '';
  return `<a class="${cls}" href="${c.url}"><img class="cg-pick-shot" src="${c.image}" alt="${esc(item.alt || (c.title.split(':')[0] + ' course thumbnail'))}" loading="lazy" decoding="async" width="400" height="250"><div class="cg-pick-body">${tag}<span class="cg-pick-band">${esc(item.band)}</span><h3 class="cg-pick-title">${esc(item.title || c.title.split(':')[0])}</h3><p class="cg-pick-note">${item.note}</p><span class="cg-pick-go">See the syllabus</span></div></a>`;
}

function block(b) {
  switch (b.kind) {
    case 'grid3':
      return `<div class="cg-grid-3${b.mt ? ' cg-mt-2' : ''}">` + b.cells.map(c => `<div><h3>${c.h3}</h3><p>${c.p}</p></div>`).join('') + '</div>';
    case 'spec':
      return `<div class="cg-spec cg-mt-2"><p class="cg-spec-title">${b.title}</p><p>${b.p}</p></div>`;
    case 'callout':
      return `<div class="cg-callout cg-mt-2"><h3>${b.h3}</h3><p>${b.p}</p></div>`;
    case 'table':
      return `<div class="cg-table-wrap${b.mt ? ' cg-mt-2' : ''}"><table class="cg-table"><caption>${b.caption}</caption><thead><tr>` + b.head.map(h => `<th>${h}</th>`).join('') + '</tr></thead><tbody>' + b.rows.map(r => '<tr>' + r.map(c => `<td>${c}</td>`).join('') + '</tr>').join('') + '</tbody></table></div>';
    case 'p':
      return `<p class="cg-mt-2">${b.text}</p>`;
    case 'align':
      return `<div class="cg-align${b.mt ? ' cg-mt-2' : ''}">` + b.rows.map(r => `<div class="cg-align-row"><div class="cg-align-req"><span class="cg-align-code">${esc(r.code)}</span>${r.req}</div><div class="cg-align-ours">${r.ours}</div></div>`).join('') + '</div>';
    default:
      throw new Error('render-cg: unknown block kind ' + b.kind);
  }
}

function section(s) {
  const tint = s.tint === 'tint' ? ' cg-section--tint' : s.tint === 'deep' ? ' cg-section--deep' : '';
  return `<section class="cg-section${tint}" id="${s.id}"><div class="cg-wrap"><div class="cg-section-head"><span class="cg-eyebrow">${esc(s.eyebrow)}</span><h2>${s.h2}</h2><p>${s.intro}</p></div>` + s.body.map(block).join('') + '</div></section>';
}

function crumbs(page) {
  const items = [{ name: 'Home', href: '/' }].concat(page.parents.map(p => ({ name: p.name, href: '/' + p.slug })));
  const html = items.map(i => `<a href="${i.href}">${esc(i.name)}</a>`).join('<span>/</span>') + `<span>/</span><span>${esc(page.place.name)}</span>`;
  const ld = items.map((i, n) => ({ '@type': 'ListItem', position: n + 1, name: i.name, item: SITE + (i.href === '/' ? '/' : i.href) }));
  ld.push({ '@type': 'ListItem', position: items.length + 1, name: page.place.name, item: SITE + '/' + page.slug });
  return { html, ld };
}

function areaServed(page) {
  let node = null;
  for (let i = page.place.chain.length - 1; i >= 0; i--) {
    const c = page.place.chain[i];
    node = node ? { '@type': c.type, name: c.name, containedInPlace: node } : { '@type': c.type, name: c.name };
  }
  return { '@type': page.place.schemaType, name: page.place.name, containedInPlace: node };
}

function jsonLd(page) {
  const url = SITE + '/' + page.slug;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'EducationalOrganization', '@id': SITE + '/#org', name: 'Modern Age Coders', url: SITE + '/', logo: SITE + '/logo.png', foundingDate: String(BRAND.founded), email: 'contact@modernagecoders.com', telephone: '+919123366161', sameAs: ['https://www.facebook.com/modernagecoders', 'https://www.instagram.com/modernagecoders', 'https://www.youtube.com/@modernagecoders'] },
      { '@type': 'BreadcrumbList', itemListElement: crumbs(page).ld },
      { '@type': 'Course', name: page.courseSchema.name, description: page.courseSchema.description, provider: { '@id': SITE + '/#org' }, educationalLevel: 'Elementary, Middle School, High School, College, Adult', inLanguage: 'en', hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'Online', courseWorkload: 'PT2H', location: { '@type': 'VirtualLocation', url } }, offers: { '@type': 'Offer', price: '100', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url } },
      { '@type': 'FAQPage', mainEntity: page.faq.items.map(f => ({ '@type': 'Question', name: plain(f.q), acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })) }
    ]
  };
  const service = { '@context': 'https://schema.org', '@type': 'Service', name: 'Live Online Coding Classes in ' + page.place.name, serviceType: 'Online coding, AI, data and mathematics education', provider: { '@id': SITE + '/#org' }, areaServed: areaServed(page), audience: { '@type': 'EducationalAudience', educationalRole: 'student' }, availableChannel: { '@type': 'ServiceChannel', serviceUrl: url, availableLanguage: 'English' }, offers: [{ '@type': 'Offer', name: 'First live class', price: '0', priceCurrency: 'USD' }, { '@type': 'Offer', name: 'Monthly group classes', price: '100', priceCurrency: 'USD' }, { '@type': 'Offer', name: 'Monthly private classes', price: '150', priceCurrency: 'USD' }] };
  return `  <script type="application/ld+json" data-price-scope="coding.international">\n  ${JSON.stringify(graph)}\n  </script>\n  <script type="application/ld+json">\n  ${JSON.stringify(service)}\n  </script>`;
}

function leadScript(page) {
  const slug = page.slug;
  return `<script>(function(){var API_URL='https://backend-modernagecoders.vercel.app';var form=document.getElementById('bkLeadForm');var bar=document.getElementById('cgBar');if(!form)return;function val(id){var e=document.getElementById(id);return e?e.value.trim():'';}function err(id,m){var e=document.getElementById(id);if(e)e.textContent=m||'';}form.addEventListener('focusin',function(){if(bar)bar.hidden=true;});form.addEventListener('focusout',function(){setTimeout(function(){if(bar&&!form.contains(document.activeElement))bar.hidden=false;},0);});form.addEventListener('submit',function(e){e.preventDefault();var name=val('bkName'),email=val('bkEmail'),phone=val('bkPhone'),grade=val('bkGrade'),msg=val('bkMsg');err('bkNameErr','');err('bkEmailErr','');err('bkPhoneErr','');err('bkGradeErr','');err('bkFormErr','');var ok=true;if(name.length<2){err('bkNameErr','Please enter a name');ok=false;}if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)){err('bkEmailErr','Please enter a valid email');ok=false;}var digits=phone.replace(/\\D/g,'');if(digits.length<7||digits.length>15){err('bkPhoneErr','Please enter a valid phone number');ok=false;}if(!grade){err('bkGradeErr','Please enter a grade or age');ok=false;}if(!ok)return;var btn=document.getElementById('bkSubmit');btn.disabled=true;btn.textContent='Sending...';var body={name:name,email:email,contact:digits,countryCode:'+31',countryIso:'NL',countryName:'Netherlands',message:('${page.place.name} enquiry. Student grade or age: '+grade+'. '+(msg||'No further detail given.')).slice(0,1000),attribution:{formPage:'/${slug}',landingPage:'/${slug}',referrer:document.referrer||''}};fetch(API_URL+'/api/contact/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(function(r){if(!r.ok)throw new Error('Request failed');form.reset();document.getElementById('bkOk').hidden=false;if(typeof gtag==='function')gtag('event','generate_lead',{page:'${slug}'});}).catch(function(){err('bkFormErr','Something went wrong sending that. Please try again, or reach us on the contact page.');}).finally(function(){btn.disabled=false;btn.textContent='Book the free class';});});})();</script>`;
}

function render(page) {
  const url = SITE + '/' + page.slug;
  const wa = waLink(page);
  const og = SITE + course(page.ogImageCourse).image;
  const cb = crumbs(page);
  const facts = [
    [BRAND.students, 'students taught'], [String(BRAND.rating), 'across ' + BRAND.reviews + ' Google reviews'],
    [String(BRAND.founded), 'teaching since'], [BRAND.countries, 'countries'],
    [BRAND.ages, 'ages taught'], [groupLabel(), 'students per group']
  ];
  const nav = page.nav.map(n => `<a href="${n.href}">${esc(n.label)}</a>`).join('');

  const head = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${url}">
  <link rel="alternate" type="text/markdown" href="/src/pages/${page.slug}.md" title="Markdown version for AI agents">
  <link rel="stylesheet" href="/css/coding-global.css?v=${page.cssVersion || '20260907'}">
  <style>
${page.personalityCss.trim()}
  </style>
  <link rel="icon" href="/favicon.ico">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.ogDescription)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${og}">
  <meta property="og:site_name" content="Modern Age Coders">
  <meta property="og:locale" content="en_NL">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(page.title.replace(/ \| Modern Age Coders$/, ''))}">
  <meta name="twitter:description" content="${esc(page.twitterDescription)}">
  <meta name="twitter:image" content="${og}">
  <meta name="geo.region" content="NL">
  <meta name="geo.placename" content="${esc(page.place.name)}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="theme-color" content="${page.accent}">
${jsonLd(page)}
</head>
<body class="cg-root cg-${page.code}">
<a class="cg-sr" href="#main">Skip to content</a>
<nav class="cg-nav" aria-label="Primary navigation"><div class="cg-wrap cg-nav-inner"><a class="cg-nav-brand" href="/">Modern Age Coders</a><div class="cg-nav-links">${nav}<a class="cg-nav-cta" href="#book">Free class</a></div></div></nav>`;

  const hero = `<header class="cg-hero" id="main"><div class="cg-wrap"><div class="cg-breadcrumb" aria-label="Breadcrumb">${cb.html}</div><div class="cg-hero-grid"><div><span class="cg-eyebrow">${esc(page.place.eyebrow)}</span><h1>${page.h1}</h1><div class="cg-capsule"><p class="cg-capsule-q">${page.capsuleQ}</p><p>${page.capsule}</p></div><p class="cg-hero-lead">${page.lead}</p><div class="cg-hero-actions"><a class="cg-btn cg-btn--primary" href="#book">Book the free class</a><a class="cg-btn cg-btn--ghost" href="${wa}">Ask on WhatsApp</a></div><p class="cg-verified">Facts last verified ${page.verifiedOn}. Teaching is online; no ${esc(page.place.name)} branch is claimed.</p></div><aside><div class="cg-trust">${facts.map(f => `<div class="cg-fact"><span class="cg-fact-k">${esc(f[0])}</span><span class="cg-fact-l">${esc(f[1])}</span></div>`).join('')}</div></aside></div></div></header>`;

  const picks = `<section class="cg-section" id="picks"><div class="cg-wrap"><div class="cg-section-head"><span class="cg-eyebrow">${esc(page.picks.eyebrow)}</span><h2>${page.picks.h2}</h2><p>${page.picks.intro}</p></div><div class="cg-picks">\n  ${page.picks.items.map(i => pick(i, false)).join('\n  ')}\n</div><p class="cg-picks-more cg-boiler">Browse the <a class="cg-inline-link" href="/course-atlas">course atlas</a> for more than one hundred options and use the <a class="cg-inline-link" href="/coding-roadmap">coding roadmap</a> to check prerequisites.</p><!-- flagships:start -->
<div class="cg-flaghead cg-boiler"><p class="cg-eyebrow">The four we are known for</p><h3>Python, AI, vibe coding and agentic coding</h3><p>These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.</p></div>
<div class="cg-picks">
  ${FLAGSHIPS.map(f => pick({ course: f[0], tag: f[1], band: f[2], note: f[3] }, true)).join('\n  ')}
</div><!-- flagships:end --></div></section>`;

  const sections = page.sections.map(section).join('\n');

  const ladder = `<section class="cg-section" id="ladder"><div class="cg-wrap"><div class="cg-section-head"><span class="cg-eyebrow">${esc(page.ladder.eyebrow)}</span><h2>${page.ladder.h2}</h2><p>${page.ladder.intro}</p></div><div class="cg-ladder">\n` +
    page.ladder.cols.map(c => `  <div class="cg-ladder-col"><span class="cg-band-head">${esc(c.band)}</span><h3>${c.h3}</h3><p>${c.p}</p>` + c.courses.map(s => { const k = course(s); return `<a class="cg-course-link" href="${k.url}">${esc(k.title.split(':')[0])}</a>`; }).join('') + '</div>').join('\n') + '\n</div></div></section>';

  const ai = `<section class="cg-section cg-section--tint" id="ai"><div class="cg-wrap"><div class="cg-section-head"><span class="cg-eyebrow">${esc(page.ai.eyebrow)}</span><h2>${page.ai.h2}</h2><p>${page.ai.intro}</p></div><div class="cg-grid-2"><div><p>${page.ai.p1}</p></div><div><p>${page.ai.p2}</p></div></div><p class="cg-mt-2">${page.ai.closer} The longer argument is in <a class="cg-inline-link" href="/blog/is-coding-worth-learning-2026">${page.ai.blogAnchor}</a>.</p></div></section>`;

  const delivery = `<section class="cg-section" id="delivery"><div class="cg-wrap"><div class="cg-section-head"><span class="cg-eyebrow">${esc(page.delivery.eyebrow)}</span><h2>${page.delivery.h2}</h2><p>${page.delivery.intro}</p></div><div class="cg-grid-3">${page.delivery.cells.map(c => `<div><h3>${c.h3}</h3><p>${c.p}</p></div>`).join('')}</div><div class="cg-spec cg-mt-2"><p class="cg-spec-title">${page.delivery.spec.title}</p><p>${page.delivery.spec.p}</p></div></div></section>`;

  const pricing = `<section class="cg-section cg-section--deep" id="pricing"><div class="cg-wrap"><div class="cg-section-head"><span class="cg-eyebrow">Fees</span><h2>${page.fees.h2}</h2><p>${page.fees.intro}</p></div><div class="cg-price-grid"><div class="cg-price"><span class="cg-price-label">First class</span><strong>USD 0</strong><p>${page.fees.first}</p></div><div class="cg-price"><span class="cg-price-label">Group tuition</span><strong>USD 100</strong><p>${page.fees.group}</p></div><div class="cg-price"><span class="cg-price-label">Private tuition</span><strong>USD 150</strong><p>${page.fees.private}</p></div></div><p class="cg-mt-2">${page.fees.closer}</p><div class="cg-hero-actions cg-mt-2"><a class="cg-btn cg-btn--primary" href="#book">Request placement</a><a class="cg-btn cg-btn--ghost" href="${wa}">Check availability</a></div></div></section>`;

  const reviews = `<section class="cg-section" id="reviews"><div class="cg-wrap"><div class="cg-section-head"><span class="cg-eyebrow">Reviews</span><h2>${page.reviewsH2}</h2><p class="cg-boiler">Rated ${BRAND.rating} across ${BRAND.reviews} Google reviews. These are real reviews, reproduced as written.</p></div><div class="cg-grid-3">\n` +
    REVIEWS.map(r => `<div class="cg-review">${stars()}<p class="cg-review-text">"${r[0]}"</p><p class="cg-review-name">${r[1]}</p><p class="cg-review-role">${r[2]}</p></div>`).join('') + '\n</div></div></section>';

  const book = `<section class="cg-section cg-section--tint" id="book"><div class="cg-wrap"><div class="cg-section-head"><span class="cg-eyebrow">Free placement class</span><h2>${page.book.h2}</h2><p>${page.book.intro}</p></div><div class="cg-contact-grid"><form class="cg-form" id="bkLeadForm" novalidate><div class="cg-field"><label for="bkName">Learner or parent name</label><input id="bkName" name="name" autocomplete="name" required><span class="cg-error" id="bkNameErr"></span></div><div class="cg-field"><label for="bkEmail">Email</label><input id="bkEmail" name="email" type="email" autocomplete="email" required><span class="cg-error" id="bkEmailErr"></span></div><div class="cg-field"><label for="bkPhone">Dutch mobile number</label><div class="cg-phone"><span>+31</span><input id="bkPhone" name="phone" inputmode="tel" autocomplete="tel" placeholder="6 XXXX XXXX" required></div><span class="cg-error" id="bkPhoneErr"></span></div><div class="cg-field"><label for="bkGrade">Groep, year or age</label><input id="bkGrade" name="grade" required><span class="cg-error" id="bkGradeErr"></span></div><div class="cg-field"><label for="bkMsg">Goal or current experience</label><textarea id="bkMsg" name="message" rows="4"></textarea></div><button class="cg-btn cg-btn--primary" id="bkSubmit" type="submit">Book the free class</button><p class="cg-error" id="bkFormErr"></p><p class="cg-success" id="bkOk" hidden>${page.book.success}</p></form><aside class="cg-contact-card"><h3>Contact the team directly</h3><p>WhatsApp or call <a class="cg-inline-link" href="tel:+919123366161">+91 91233 66161</a>, or email <a class="cg-inline-link" href="mailto:contact@modernagecoders.com">contact@modernagecoders.com</a>. This is Modern Age Coders' actual contact, an Indian number, and not an invented ${esc(page.place.name)} one.</p><a class="cg-btn cg-btn--ghost" href="${wa}">WhatsApp Modern Age Coders</a><p class="cg-privacy">Submitted details are used for placement and follow-up.</p></aside></div></div></section>`;

  const faq = `<section class="cg-section" id="faq"><div class="cg-wrap"><div class="cg-section-head"><span class="cg-eyebrow">FAQ</span><h2>${page.faq.h2}</h2><p>${page.faq.intro}</p></div><div class="cg-faq">\n` +
    page.faq.items.map(f => `<div class="cg-faq-item${f.boiler ? ' cg-boiler' : ''}"><h3>${f.q}</h3><p>${f.a}</p></div>`).join('\n') + '\n</div></div></section>';

  const next = `<section class="cg-section cg-section--deep" id="next"><div class="cg-wrap"><div class="cg-section-head"><span class="cg-eyebrow">${esc(page.next.eyebrow)}</span><h2>${page.next.h2}</h2><p>${page.next.html}</p></div><div class="cg-hero-actions"><a class="cg-btn cg-btn--primary" href="#book">Book the free class</a><a class="cg-btn cg-btn--ghost" href="${wa}">${esc(page.next.waLabel || 'Close with WhatsApp')}</a></div></div></section>`;

  const sticky = `<div class="cg-sticky" id="cgBar"><a href="#book">Free ${esc(page.place.name)} class</a><a href="tel:+919123366161">Call +91 91233 66161</a></div>`;

  const footer = `<footer class="cg-footer"><div class="cg-wrap"><div class="cg-grid-3"><div><h3>Start here</h3><ul><li><a href="/courses">All courses</a></li><li><a href="/course-atlas">Course atlas</a></li><li><a href="/pricing">Pricing</a></li><li><a href="/how-we-teach">How we teach</a></li></ul></div><div><h3>${esc(page.footerHeading)}</h3><ul>${page.footerPlaces.map(p => `<li><a href="${p.href}">${esc(p.label)}</a></li>`).join('')}</ul></div><div><h3>Company</h3><ul><li><a href="/about">About us</a></li><li><a href="/contact">Contact</a></li><li><a href="/love">Wall of love</a></li><li><a href="/student-labs">Student labs</a></li></ul></div></div><p class="cg-footer-bottom">Modern Age Coders. Live online coding, AI and mathematics for ages ${BRAND.ages}. Teaching since ${BRAND.founded}, more than ${BRAND.students.replace('+', '')} students.</p></div></footer>`;

  return [head, hero, picks, sections, ladder, ai, delivery, pricing, reviews, book, faq, next, sticky, footer, leadScript(page), '</body>', '</html>', ''].join('\n');
}

module.exports = { render, REVIEWS, FLAGSHIPS, plain, groupLabel };
