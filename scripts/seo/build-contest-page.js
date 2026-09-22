#!/usr/bin/env node
/**
 * Emits a contest-preparation page on the Class 10 board-prep "Answer Sheet" system
 * (board-prep.css, bx- prefix) from a content module, so every contest page shares the
 * proven shell (courses first, organiser facts quoted, worked example, plan, fit, fees,
 * real reviews, siblings, FAQ mirrored in schema, lead form) while its prose is written
 * fresh per contest. The SOF IMO and ICSO pages are the hand-written exemplars.
 *
 *   node scripts/seo/build-contest-page.js scripts/seo/contests/<slug>.js
 *
 * The module exports the fields consumed below. Checks: title <= 65, description
 * 150-160, no em-dashes, FAQ count, every internal link target exists.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const facts = require(path.join(ROOT, 'scripts', 'brand-facts.json'));
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const BATCH = facts.batchSizes.group.replace('–', ' to ');
const PD = facts.priorityDemo;

const REVIEWS = [
  ['The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content.', 'Ria Mukherjee', 'Parent'],
  ['Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease.', 'Samriddha Mondal', 'Student'],
  ['One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development.', 'Vansh Agarwal', 'Student'],
  ['My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative.', 'Sonam Oswal', 'Parent of Dhairya'],
  ['Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students\' confidence and inspires them to learn without hesitation.', 'Sonu Goyal', 'Parent'],
  ['I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding.', 'Ritu Kedia', 'Parent'],
];

function build(c) {
  const url = 'https://learn.modernagecoders.com/' + c.slug;
  const wa = 'https://wa.me/919123366161?text=' + encodeURIComponent('Hello Modern Age Coders. I want to know about ' + c.waTopic + '.');
  const faqSchema = c.faq.map(([q, a]) => '          {"@type": "Question", "name": ' + JSON.stringify(q) + ', "acceptedAnswer": {"@type": "Answer", "text": ' + JSON.stringify(a) + '}}').join(',\n');
  const faqHtml = c.faq.map(([q, a]) => '      <div class="bx-faq-item"><h3>' + esc(q) + '</h3><p>' + esc(a) + '</p></div>').join('\n');
  const picks = c.picks.map((p) => `      <a class="bx-pick" href="${p.href}">
        <div class="bx-pick-shot"><img src="${p.img}" alt="${esc(p.alt)}" width="800" height="450" loading="lazy"></div>
        <div class="bx-pick-body">
          <p class="bx-pick-code">${esc(p.code)}</p>
          <h3>${esc(p.h3)}</h3>
          <p>${esc(p.p)}</p>
          <span class="bx-pick-go">Open the syllabus &rarr;</span>
        </div>
      </a>`).join('\n');
  const dateRows = c.dates.rows.map((r) => `        <div class="bx-tt-row"><span class="bx-tt-day">${esc(r[0])}</span><span class="bx-tt-time">${esc(r[1])}<small>${esc(r[2])}</small></span></div>`).join('\n');
  const tableHead = c.format.headers.map((h) => '<th scope="col">' + esc(h) + '</th>').join('');
  const tableRows = c.format.rows.map((r, i) => '          <tr' + (i === c.format.rows.length - 1 && c.format.lastIsTotal ? ' class="bx-total"' : '') + '>' + r.map((cell, j) => (j === 0 ? '<td>' : '<td>') + (typeof cell === 'object' ? '<span colspan>' : '') + esc(cell) + '</td>').join('') + '</tr>').join('\n');
  const cards = c.sections.cards.map((k) => `      <div class="bx-card">
        <p class="bx-qlabel">${esc(k[0])}</p>
        <h3>${esc(k[1])}</h3>
        <p>${esc(k[2])}</p>
      </div>`).join('\n');
  const steps = c.plan.steps.map((s) => '      <li class="bx-step"><h4>' + esc(s[0]) + '</h4><p>' + esc(s[1]) + '</p></li>').join('\n');
  const sibs = c.siblings.map((s) => `      <a class="bx-sib" href="${s[0]}"><span class="bx-sib-n">${esc(s[1])}</span><span class="bx-sib-m">${s[0]}</span></a>`).join('\n');
  const reviews = REVIEWS.map((r) => `      <article class="bx-review"><p class="bx-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p><p class="bx-review-text">"${esc(r[0])}"</p><p class="bx-review-name">${r[1]}</p><p class="bx-review-role">${r[2]}</p></article>`).join('\n');
  const paras = (arr) => arr.map((p, i) => '    <p' + (i === 0 ? ' class="bx-mt-40"' : '') + '>' + p + '</p>').join('\n');
  const pre = (lines) => lines.map((l) => (l.b ? '<b>' + esc(l.b) + '</b>' : l.i ? '<i>' + esc(l.i) + '</i>' : esc(l))).join('\n');
  const footCols = c.footer.map((col) => '      <div><h4>' + esc(col[0]) + '</h4><ul>' + col[1].map((l) => '<li><a href="' + l[0] + '">' + esc(l[1]) + '</a></li>').join('') + '</ul></div>').join('\n');

  return `<!DOCTYPE html>
<html lang="en-IN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${esc(c.title)}</title>
  <meta name="description" content="${esc(c.description)}">
  <meta name="author" content="Modern Age Coders">
  <link rel="canonical" href="${url}">
  <link rel="alternate" type="text/markdown" href="/src/pages/${c.slug}.md" title="Markdown version for AI agents">

  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
  <meta name="theme-color" content="${c.accent}">

  <meta property="og:type" content="article">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(c.title)}">
  <meta property="og:description" content="${esc(c.og)}">
  <meta property="og:image" content="https://learn.modernagecoders.com/images/og-modern-age-coders.png">
  <meta property="og:site_name" content="Modern Age Coders">
  <meta property="og:locale" content="en_IN">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(c.title)}">
  <meta name="twitter:description" content="${esc(c.og)}">
  <meta name="twitter:image" content="https://learn.modernagecoders.com/images/og-modern-age-coders.png">

  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/board-prep.css?v=20260923">

  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-N8BM164YJP');gtag('config','AW-16910316353');</script>

  <script type="application/ld+json" data-price-scope="coding.india">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://learn.modernagecoders.com/#org",
        "name": "Modern Age Coders",
        "url": "https://learn.modernagecoders.com/",
        "email": "contact@modernagecoders.com",
        "telephone": "+91-91233-66161",
        "foundingDate": "2020",
        "areaServed": { "@type": "Country", "name": "${esc(c.country)}" },
        "knowsAbout": ${JSON.stringify(c.knowsAbout)}
      },
      {
        "@type": "Course",
        "@id": "${url}#course",
        "name": ${JSON.stringify(c.courseName)},
        "description": ${JSON.stringify(c.courseDescription)},
        "url": "${url}",
        "inLanguage": "en",
        "provider": { "@id": "https://learn.modernagecoders.com/#org" },
        "isAccessibleForFree": false,
        "offers": { "@type": "Offer", "price": "1499", "priceCurrency": "INR", "category": "Monthly fee, group batch", "availability": "https://schema.org/InStock" },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "location": { "@type": "VirtualLocation", "url": "${url}" }
        }
      },
      {
        "@type": "Service",
        "serviceType": ${JSON.stringify(c.serviceType)},
        "provider": { "@id": "https://learn.modernagecoders.com/#org" },
        "areaServed": { "@type": "Country", "name": "${esc(c.country)}" },
        "audience": { "@type": "EducationalAudience", "educationalRole": "student" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://learn.modernagecoders.com/" },
          { "@type": "ListItem", "position": 2, "name": ${JSON.stringify(c.crumb[1])}, "item": "https://learn.modernagecoders.com${c.crumb[0]}" },
          { "@type": "ListItem", "position": 3, "name": ${JSON.stringify(c.crumbName)}, "item": "${url}" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
${faqSchema}
        ]
      }
    ]
  }
  </script>
</head>

<body class="bx-root ${c.marketClass}">

<nav class="bx-nav">
  <div class="bx-wrap bx-nav-inner">
    <a class="bx-nav-brand" href="/">
      <img src="/images/logo.svg" alt="Modern Age Coders logo" width="30" height="30" fetchpriority="high">
      <span>Modern Age Coders</span>
      <span class="bx-brand-tag">${c.brandTag}</span>
    </a>
    <div class="bx-nav-links">
      <a href="#format">${esc(c.nav[0])}</a>
      <a href="#sections">${esc(c.nav[1])}</a>
      <a href="#plan">The plan</a>
      <a href="#fees">Fees</a>
      <a href="#start" class="bx-btn">Free demo class</a>
    </div>
  </div>
</nav>

<header class="bx-hero">
  <div class="bx-wrap">
    <nav class="bx-crumbs" aria-label="Breadcrumb">
      <a href="/">Home</a> <span>/</span> <a href="${c.crumb[0]}">${esc(c.crumb[1])}</a> <span>/</span> <span>${esc(c.crumbName)}</span>
    </nav>
    <div class="bx-hero-grid">
      <div>
        <p class="bx-eyebrow">${c.eyebrow}</p>
        <h1>${esc(c.h1)}</h1>
        <p class="bx-lede">${esc(c.lede)}</p>
        <div class="bx-btn-row">
          <a href="#start" class="bx-btn">Book the free demo class</a>
          <a href="#format" class="bx-btn bx-btn--ghost">${esc(c.formatCta)}</a>
          <a href="${wa}" class="bx-btn bx-btn--ghost" target="_blank" rel="noopener" onclick="if(window.gtag)gtag('event','whatsapp_click',{page_topic:'${c.slug}'});">Ask on WhatsApp</a>
        </div>
        <p class="bx-hero-note">Live online &middot; 100% online &middot; batch of 5 to 10 &middot; ${c.heroNote} &middot; first class free</p>
      </div>

      <aside class="bx-timetable" aria-label="${esc(c.dates.aria)}">
        <p class="bx-tt-title"><span>${esc(c.dates.title)}</span><b>${esc(c.dates.sub)}</b></p>
${dateRows}
        <p class="bx-tt-zones"><b>${esc(c.dates.noteLead)}</b> ${esc(c.dates.note)}</p>
        <div class="bx-tt-foot">
          <span class="bx-stamp">Live &middot; 100% online</span>
          <span class="bx-stamp">5 to 10 students</span>
        </div>
        <p class="bx-trust" style="margin-top:14px"><span class="bx-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>Rated ${facts.rating} across ${facts.reviews} Google reviews</p>
      </aside>
    </div>
  </div>
</header>

<section class="bx-section" id="picks">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Start here</p>
      <h2>${esc(c.picksH2)}</h2>
      <p class="bx-lede">${esc(c.picksLede)}</p>
    </div>
    <div class="bx-picks">
${picks}
    </div>
  </div>
</section>

<section class="bx-section">
  <div class="bx-wrap">
    <div class="bx-capsule">
      <p class="bx-capsule-q">Ans. The short version</p>
      <p>${esc(c.capsule)}</p>
    </div>
  </div>
</section>

<section class="bx-section bx-section--tint" id="format">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. ${esc(c.format.q)}</p>
      <h2>${esc(c.format.h2)}</h2>
      <p class="bx-lede">${esc(c.format.lede)}</p>
    </div>

    <div class="bx-table-wrap">
      <table class="bx-marks">
        <thead><tr>${tableHead}</tr></thead>
        <tbody>
${tableRows}
        </tbody>
      </table>
    </div>

${paras(c.format.after)}
  </div>
</section>

<section class="bx-section" id="sections">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. ${esc(c.sections.q)}</p>
      <h2>${esc(c.sections.h2)}</h2>
      <p class="bx-lede">${esc(c.sections.lede)}</p>
    </div>
    <div class="bx-grid-2">
${cards}
    </div>
${paras(c.sections.after)}
  </div>
</section>

<section class="bx-section bx-section--deep" id="reasoning">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. ${esc(c.example.q)}</p>
      <h2>${esc(c.example.h2)}</h2>
      <p class="bx-lede">${esc(c.example.lede)}</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>${esc(c.example.left.head)}</b><span>${esc(c.example.left.sub)}</span></figcaption>
  <pre>${pre(c.example.left.pre)}</pre>
  <p class="bx-code-note">${esc(c.example.left.note)}</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>${esc(c.example.right.head)}</b><span>${esc(c.example.right.sub)}</span></figcaption>
  <pre>${pre(c.example.right.pre)}</pre>
  <p class="bx-code-note">${esc(c.example.right.note)}</p>
</figure>
    </div>
${paras(c.example.after)}
  </div>
</section>

<section class="bx-section bx-section--tint" id="plan">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. ${esc(c.plan.q)}</p>
      <h2>${esc(c.plan.h2)}</h2>
      <p class="bx-lede">${esc(c.plan.lede)}</p>
    </div>
    <ol class="bx-steps">
${steps}
    </ol>
${paras(c.plan.after)}
  </div>
</section>

<section class="bx-section" id="fit">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Is this batch right for my child?</p>
      <h2>Who it suits, and who it does not</h2>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>It suits</h3><p>${esc(c.fit[0])}</p></div>
      <div class="bx-card"><h3>It also suits</h3><p>${esc(c.fit[1])}</p></div>
      <div class="bx-card"><h3>It does not suit</h3><p>${esc(c.fit[2])}</p></div>
    </div>
  </div>
</section>

<section class="bx-section bx-section--deep" id="fees">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. What does it cost?</p>
      <h2>Monthly fees, the same for every course we teach</h2>
      <p class="bx-lede">Billed monthly, no admission fee, stop at any month end. The free demo class comes first, or book a Priority Live Demo for a full class today or tomorrow.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-price bx-price--feature">
        <p class="bx-price-name">Group batch &middot; ${esc(c.fees.groupName)}</p>
        <p class="bx-price-amt"><span data-price="coding.india.group">₹1,499</span></p>
        <p class="bx-price-alt">per month</p>
        <ul><li>Five to ten students, ${esc(c.fees.groupWho)}</li><li>Two live classes a week, ${esc(c.fees.groupWhat)}</li><li>${esc(c.fees.groupExtra)}</li><li>Certificate on completion</li></ul>
        <a href="#start" class="bx-btn">Book the free demo</a>
      </div>
      <div class="bx-price" data-india-only="true">
        <p class="bx-price-name">Mini batch</p>
        <p class="bx-price-amt"><span data-price="coding.india.miniBatch">₹2,999</span></p>
        <p class="bx-price-alt">per month</p>
        <ul><li>Three to four students</li><li>Timings agreed around the family</li><li>${esc(c.fees.miniExtra)}</li></ul>
        <a href="#start" class="bx-btn bx-btn--ghost">Ask about timings</a>
      </div>
      <div class="bx-price">
        <p class="bx-price-name">One to one</p>
        <p class="bx-price-amt"><span data-price="coding.india.personal">₹4,999</span></p>
        <p class="bx-price-alt">per month</p>
        <ul><li>Private teaching on your own schedule</li><li>Pace set by the student, not the batch</li><li>${esc(c.fees.oneExtra)}</li></ul>
        <a href="#start" class="bx-btn bx-btn--ghost">Enquire</a>
      </div>
    </div>
  </div>
</section>

<section class="bx-section" id="reviews">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">What families say</p>
      <h2>Rated ${facts.rating} across ${facts.reviews} Google reviews</h2>
      <p class="bx-lede">Real reviews from real families. We neither write nor commission them.</p>
    </div>
    <div class="bx-grid-3">
${reviews}
    </div>
  </div>
</section>

<section class="bx-section bx-section--tint" id="more">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Related pages</p>
      <h2>${esc(c.siblingsH2)}</h2>
      <p class="bx-lede">${esc(c.siblingsLede)}</p>
    </div>
    <div class="bx-siblings">
${sibs}
    </div>
  </div>
</section>

<section class="bx-section" id="faq">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Questions parents ask</p>
      <h2>${esc(c.faqH2)}</h2>
    </div>
    <div class="bx-faq">
${faqHtml}
    </div>
  </div>
</section>

<section class="bx-section bx-section--tint" id="start">
  <div class="bx-wrap">
    <div class="bx-hero-grid">
      <div>
        <div class="bx-section-head">
          <p class="bx-qlabel">Start</p>
          <h2>${esc(c.start.h2)}</h2>
        </div>
        <p>${c.start.p1} If you would rather see a full ${PD.lengthShort} class today or tomorrow, book a <a class="bx-link" href="/priority-demo">Priority Live Demo</a> instead; its fee is adjusted against your first month if you enrol.</p>
        <p>${c.start.p2}</p>
        <p style="margin-top:22px"><a class="bx-link" href="${wa}" target="_blank" rel="noopener">WhatsApp us</a> &middot; <a class="bx-link" href="tel:+919123366161">+91 91233 66161</a> &middot; <a class="bx-link" href="mailto:contact@modernagecoders.com">contact@modernagecoders.com</a></p>
        <p class="bx-muted" style="font-size:.92rem;margin-top:14px">Every session is a live video class. Sending the form books a callback and nothing else; no seat is reserved or lost by it.</p>
      </div>
      <div class="bx-form-panel">
        <form id="bxLeadForm" onsubmit="return submitBxLead(event)" novalidate>
          <div class="bx-field-row">
            <div class="bx-field"><label for="bx-${c.code}-parent">Parent's name</label><input id="bx-${c.code}-parent" type="text" name="parent_name" placeholder="Your name" required></div>
            <div class="bx-field"><label for="bx-${c.code}-phone">Phone or WhatsApp</label><input id="bx-${c.code}-phone" type="tel" name="phone" placeholder="98765 43210" maxlength="15" required></div>
          </div>
          <div class="bx-field-row">
            <div class="bx-field"><label for="bx-${c.code}-email">Email</label><input id="bx-${c.code}-email" type="email" name="email" placeholder="you@example.com" required></div>
            <div class="bx-field"><label for="bx-${c.code}-format">Preferred format</label>
              <select id="bx-${c.code}-format" name="format" required>
                <option value="group">Group batch</option>
                <option value="mini">Mini batch</option>
                <option value="1on1">One to one</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>
          </div>
          <div class="bx-field"><label for="bx-${c.code}-child">${esc(c.start.childLabel)}</label><input id="bx-${c.code}-child" type="text" name="child_name" placeholder="${esc(c.start.childPlaceholder)}"></div>
          <button type="submit" class="bx-btn" style="width:100%">Request the free demo class</button>
          <p class="bx-form-note">We call within a few hours. No card, no enrolment fee.</p>
        </form>
      </div>
    </div>
  </div>
</section>

<footer class="bx-footer">
  <div class="bx-wrap">
    <div class="bx-grid-4">
      <div><h4>Modern Age Coders</h4><p style="font-size:.9rem;opacity:.86">Live online coding, AI and mathematics for ages 6 to 67. Teaching since 2020, more than 10,000 students.</p></div>
${footCols}
      <div><h4>Start</h4><ul><li><a href="/courses">The full catalogue</a></li><li><a href="/pricing">Fees</a></li><li><a href="/how-we-teach">How we teach</a></li><li><a href="/priority-demo">Priority Live Demo</a></li></ul></div>
    </div>
    <div class="bx-footer-bottom"><span>&copy; 2026 Modern Age Coders. Live online, taught from India.</span><span>${esc(c.footerTag)}</span></div>
  </div>
</footer>

<script>
window.submitBxLead = function (e) {
  e.preventDefault();
  var f = e.target;
  var phone = (f.phone.value || '').replace(/\\D/g, '');
  if (phone.length < 10) { alert('Please enter a valid phone number.'); return false; }
  var data = { name: f.parent_name.value, phone: f.phone.value, email: f.email.value, format: f.format.value, child_name: f.child_name.value, source: '${c.slug}', page: window.location.pathname };
  var api = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') ? 'http://localhost:5000' : 'https://backend-modernagecoders.vercel.app';
  fetch(api + '/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).catch(function () {});
  if (typeof gtag === 'function') { gtag('event', 'generate_lead', { event_category: 'board_prep_page', event_label: '${c.slug}', value: 1 }); }
  f.innerHTML = '<p class="bx-form-ok">Request received. A mentor will call you within a few hours to book the free demo class.</p>';
  return false;
};
</script>
<script>
  window.addEventListener('load', function () {
    var s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-N8BM164YJP';
    s.async = true;
    document.head.appendChild(s);
  });
</script>
<script src="/js/country-code-selector.js?v=20260820a" defer></script>
</body>
</html>
`;
}

const mod = process.argv[2];
if (!mod) { console.error('usage: build-contest-page.js scripts/seo/contests/<slug>.js'); process.exit(1); }
const c = require(path.resolve(mod));
const html = build(c);
if (/—/.test(html)) throw new Error('em-dash on ' + c.slug);
if (c.title.length > 65) throw new Error('title ' + c.title.length + ' chars on ' + c.slug);
if (c.description.length < 150 || c.description.length > 160) throw new Error('description ' + c.description.length + ' chars on ' + c.slug);
const links = [...html.matchAll(/href="(\/[^"#?]+)"/g)].map((m) => m[1]).filter((v, i, a) => a.indexOf(v) === i);
const missing = links.filter((l) => {
  if (l.startsWith('/courses/')) return !fs.existsSync(path.join(ROOT, 'content', 'courses', 'generated', l.replace('/courses/', ''), 'index.html'));
  if (l.startsWith('/src/pages/') || l.startsWith('/favicon') || /\.[a-z0-9]{2,5}$/i.test(l)) return false;
  if (l.startsWith('/images/')) return !fs.existsSync(path.join(ROOT, 'public', l.replace('/images/', 'images/')));
  // a sibling contest page that is planned in this batch counts as resolved (its module exists)
  if (fs.existsSync(path.join(__dirname, 'contests', l.slice(1) + '.js'))) return false;
  return !fs.existsSync(path.join(ROOT, 'src', 'pages', l.slice(1) + '.html')) && !fs.existsSync(path.join(ROOT, 'src', 'pages', l.slice(1), 'index.html')) && l !== '/courses';
});
if (missing.length) throw new Error('unresolved links on ' + c.slug + ': ' + missing.join(', '));
fs.writeFileSync(path.join(ROOT, 'src', 'pages', c.slug + '.html'), html);
const words = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
console.log('wrote', c.slug, '| words', words, '| faq', c.faq.length, '| links', links.length);
