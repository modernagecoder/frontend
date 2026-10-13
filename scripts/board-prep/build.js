#!/usr/bin/env node
/**
 * scripts/board-prep/build.js
 *
 * Renders the second wave of the Class 10 board-preparation cluster
 * (board-prep.css, prefix bx-) from page modules in content/board-prep/.
 * Each module supplies the page-specific prose; this file supplies the chrome
 * every page shares: head and schema, nav, hero, course picks, the format
 * chooser (batch or personalised), the time-zone table, reviews, the sibling
 * strip, FAQ (schema and visible text from ONE array, so they cannot drift),
 * the lead form with its Priority demo card, the footer and the phone sticky
 * bar. It also writes the .md twin.
 *
 * Batch facts are owner-stated (2026-08-25, restated 2026-10-13):
 *   CBSE AI 417:   Monday and Wednesday 9:00 PM IST, group batch, coding.india.group
 *   ICSE CA Java:  Tuesday 5:30 PM and Wednesday 8:00 PM IST, mini batch, coding.india.miniBatch
 *   Both boards:   personalised one to one at a time the family chooses, coding.india.personal
 * Prices are never typed here: every figure is a data-price span that
 * pricing:apply fills from pricing/pricing.config.jsonc and
 * international-pricing.js swaps for the visitor's own currency.
 *
 * Usage:  node scripts/board-prep/build.js [slug ...]   (no args = every module)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const CONTENT = path.join(ROOT, 'content', 'board-prep');
const PAGES = path.join(ROOT, 'src', 'pages');
const BASE = 'https://learn.modernagecoders.com';
const BRAND = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'brand-facts.json'), 'utf8'));

const CSS_VER = '20261013';
const WA = 'https://wa.me/919123366161?text=';

// ------------------------------------------------------------------ helpers
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const jsonText = s => s; // schema strings are plain text already

// --------------------------------------------------------------- catalogue
// Course cards: slug -> [thumbnail, alt]. Thumbnails are the locked letterpress
// posters in public/images; alts match the rest of the cluster.
const COURSES = {
  'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843': ['ct-ai-teens.webp', 'CBSE Computational Thinking and AI for Teens course thumbnail'],
  'python-complete-masterclass-teens': ['python-teens.webp', 'Python for Teens course thumbnail'],
  'orange-data-mining-visual-machine-learning-course-for-teens': ['orange-data-mining-teens.webp', 'Visual Machine Learning with Orange for Teens course thumbnail'],
  'ai-ml-masterclass-teens': ['ai-ml-teens.webp', 'AI and Machine Learning for Teens course thumbnail'],
  'cbse-class-10-maths-board-exam-prep-course': ['cbse-class-10-maths.webp', 'CBSE Class 10 Maths board exam prep course thumbnail'],
  'icse-computer-applications-java-bluej-course': ['java-teens.webp', 'ICSE Computer Applications Java with BlueJ course thumbnail'],
  'cbse-icse-computer-science-class-11-12-python-java-complete-course': ['ip-cs-class-11-12.webp', 'Computer Science Class 11 and 12 course thumbnail'],
  'data-science-course-for-teens-python-data': ['data-science-teens.webp', 'Data Science for Teens course thumbnail'],
  'data-structures-algorithms-masterclass-college': ['dsa-college.webp', 'Data Structures and Algorithms course thumbnail']
};

// "Families also look at" links for the .md twin (the AEO gate wants 10+ course links).
const MD_ALSO = {
  cbse: [
    ['Python for Teens', 'python-complete-masterclass-teens'],
    ['Visual Machine Learning with Orange for Teens', 'orange-data-mining-visual-machine-learning-course-for-teens'],
    ['AI and ML for Teens', 'ai-ml-masterclass-teens'],
    ['Data Science for Teens', 'data-science-course-for-teens-python-data'],
    ['CBSE Class 10 Maths board exam prep', 'cbse-class-10-maths-board-exam-prep-course'],
    ['CBSE and ICSE Computer Science Class 11 and 12', 'cbse-icse-computer-science-class-11-12-python-java-complete-course'],
    ['CBSE Informatics Practices Class 11 and 12', 'cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course'],
    ['Vibe Coding for Teens', 'vibe-coding-for-teens-python-web-ai-projects-course'],
    ['Hackathon Prep for Teens', 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course'],
    ['Git and GitHub for Teens', 'git-github-version-control-course-for-teens']
  ],
  icse: [
    ['Java Programming for Teens', 'java-programming-masterclass-for-teens'],
    ['Computer Science Class 11 and 12', 'cbse-icse-computer-science-class-11-12-python-java-complete-course'],
    ['CBSE Class 10 Maths board exam prep', 'cbse-class-10-maths-board-exam-prep-course'],
    ['Data Structures and Algorithms', 'data-structures-algorithms-masterclass-college'],
    ['Python for Teens', 'python-complete-masterclass-teens'],
    ['AI and ML for Teens', 'ai-ml-masterclass-teens'],
    ['Git and GitHub for Teens', 'git-github-version-control-course-for-teens'],
    ['Hackathon Prep for Teens', 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course'],
    ['Full-Stack Web for Teens', 'full-stack-web-development-teens-masterclass'],
    ['JavaScript for Teens', 'javascript-course-for-teens-beginners-interactive-web']
  ]
};

// ---------------------------------------------------------- board facts
const BOARD = {
  cbse: {
    short: 'CBSE 417',
    batchName: 'Mon and Wed 9 PM batch',
    batchLong: 'Monday and Wednesday at 9:00 PM IST',
    priceKey: 'coding.india.group',
    priceFallback: '₹1,499',
    batchIndiaOnly: false,
    batchSize: 'ten to fifteen students',
    schedule: { byDay: ['Monday', 'Wednesday'], startTime: '21:00' },
    offerCategory: 'Monthly fee, group batch',
    offerPrice: '1499',
    // IST 21:00 on both days
    slots: [['Mon and Wed', 21, 0]],
    knows: ['CBSE Artificial Intelligence 417', 'CBSE Class 10 Board Examination', 'Python', 'AI Project Cycle', 'Board Exam Revision'],
    seriesLabel: 'CBSE Class 10 AI'
  },
  icse: {
    short: 'ICSE CA',
    batchName: 'Tue 5:30 PM and Wed 8 PM batch',
    batchLong: 'Tuesday at 5:30 PM and Wednesday at 8:00 PM IST',
    priceKey: 'coding.india.miniBatch',
    priceFallback: '₹2,999',
    batchIndiaOnly: true,
    batchSize: 'four or five students',
    schedule: null, // two different start times: two CourseInstances
    offerCategory: 'Monthly fee, mini batch',
    offerPrice: '2999',
    slots: [['Tuesday', 17, 30], ['Wednesday', 20, 0]],
    knows: ['ICSE Computer Applications', 'Java', 'BlueJ', 'CISCE ICSE Class 10 Examination', 'Board Exam Revision'],
    seriesLabel: 'ICSE Class 10 Computer Applications'
  }
};

// Time zones for the winter exam season (UK on GMT from 25 Oct 2026; the Gulf,
// India, Nepal, Singapore and Kenya do not change clocks). Offsets from IST in
// minutes. US Eastern is EST in the exam season. The last number is the
// earliest local time (minutes after midnight) a Class 10 student is home from
// school: Gulf schools finish early afternoon, UK and US schools mid-afternoon.
// Rows are PER BOARD and list only countries where that board actually has
// schools (verified 2026-10-13): CBSE SARAS directory, 268 foreign schools in 26
// countries (UAE 109, Saudi Arabia 41, Kuwait 22, Qatar 20, Oman 18, Nepal 16,
// Bahrain 8, Ethiopia 7, Malaysia 4, Singapore 3); CISCE locator, ICSE schools
// abroad only in the UAE (4), Singapore, Indonesia and Thailand (1 each).
// There are NO CBSE or CISCE schools in the UK or the US: never list them.
const ZONES = {
  cbse: [
    ['UAE and Oman', 'Dubai, Abu Dhabi, Sharjah, Muscat', -90, 14 * 60 + 30],
    ['Saudi Arabia, Qatar, Kuwait, Bahrain', 'Riyadh, Jeddah, Dammam, Doha, Kuwait City, Manama', -150, 14 * 60 + 30],
    ['Nepal', 'Kathmandu', 15, 16 * 60],
    ['Ethiopia and East Africa', 'Addis Ababa and East Africa Time', -150, 16 * 60],
    ['Singapore and Malaysia', 'Singapore, Kuala Lumpur', 150, 15 * 60]
  ],
  icse: [
    ['United Arab Emirates', 'Dubai, Sharjah', -90, 14 * 60 + 30],
    ['Indonesia and Thailand', 'West Java, Bangkok area', 90, 15 * 60],
    ['Singapore', 'Singapore', 150, 15 * 60]
  ]
};
const AREA = {
  cbse: ['India', 'United Arab Emirates', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Oman', 'Nepal', 'Bahrain', 'Ethiopia', 'Malaysia', 'Singapore'],
  icse: ['India', 'United Arab Emirates', 'Singapore', 'Indonesia', 'Thailand']
};

function fmt(h, m) {
  h = ((h % 24) + 24) % 24;
  const ap = h >= 12 ? 'PM' : 'AM';
  const hh = h % 12 === 0 ? 12 : h % 12;
  return `${hh}:${String(m).padStart(2, '0')} ${ap}`;
}
function shift(h, m, off) {
  let t = h * 60 + m + off;
  const dayShift = t < 0 ? -1 : t >= 1440 ? 1 : 0;
  t = ((t % 1440) + 1440) % 1440;
  return { h: Math.floor(t / 60), m: t % 60, dayShift };
}
// a slot "works" if it starts after school is out and no later than 9:30 PM local
function works(h, m, homeBy) { const t = h * 60 + m; return t >= homeBy && t <= 21 * 60 + 30; }

function offsetText(off) {
  if (off === 0) return 'same as India';
  const a = Math.abs(off), h = Math.floor(a / 60), m = a % 60;
  const amt = (h ? `${h} h` : '') + (h && m ? ' ' : '') + (m ? `${m} min` : '');
  return `${amt} ${off < 0 ? 'behind' : 'ahead of'} India`;
}

function zoneTable(board) {
  const b = BOARD[board];
  if (b.batchIndiaOnly) {
    // Owner ruling 2026-10-13 (option c): outside India the ICSE course is sold
    // one to one only (the mini batch has no international price), so abroad
    // rows never show batch slots. They show the offset and the after-school
    // window a private class is usually set in, 30 minutes after school is out
    // until 9:00 PM local.
    const rows = ZONES[board].map(([name, cities, off, homeBy]) => {
      const from = homeBy + 30;
      return `<tr><td>${esc(name)}<br><span class="bx-src">${esc(cities)}</span></td><td>${offsetText(off)}</td><td class="bx-num">${fmt(Math.floor(from / 60), from % 60)} to 9:00 PM</td><td><span class="bx-fit bx-fit--no">Personalised 1-on-1</span></td></tr>`;
    }).join('\n          ');
    return `<div class="bx-table-wrap bx-markets">
      <table class="bx-table bx-zones">
        <thead><tr><th scope="col">Where you live</th><th scope="col">Time difference</th><th scope="col">Usual class window, local time</th><th scope="col">Format</th></tr></thead>
        <tbody>
          <tr><td>India (IST)<br><span class="bx-src">every Indian city</span></td><td>IST</td><td class="bx-num">${b.slots.map(s => `${s[0].slice(0, 3)} ${fmt(s[1], s[2])}`).join(', ')}</td><td><span class="bx-fit">Mini batch or 1-on-1</span></td></tr>
          ${rows}
        </tbody>
      </table>
    </div>`;
  }
  const head = b.slots.map(s => `<th scope="col">${esc(s[0])} ${fmt(s[1], s[2])} IST</th>`).join('');
  const rows = ZONES[board].map(([name, cities, off, homeBy]) => {
    // the batch fits only if EVERY weekly slot works: a family cannot attend half a batch
    let allWork = true;
    const cells = b.slots.map(([, h, m]) => {
      const t = shift(h, m, off);
      if (!works(t.h, t.m, homeBy)) allWork = false;
      const day = t.dayShift === 1 ? ' next day' : t.dayShift === -1 ? ' same morning' : '';
      return `<td class="bx-num">${fmt(t.h, t.m)}${day}</td>`;
    }).join('');
    const fit = allWork
      ? '<span class="bx-fit">Batch fits</span>'
      : '<span class="bx-fit bx-fit--no">Choose 1-on-1</span>';
    return `<tr><td>${esc(name)}<br><span class="bx-src">${esc(cities)}</span></td>${cells}<td>${fit}</td></tr>`;
  }).join('\n          ');
  return `<div class="bx-table-wrap bx-markets">
      <table class="bx-table bx-zones">
        <thead><tr><th scope="col">Where you live</th>${head}<th scope="col">Best format</th></tr></thead>
        <tbody>
          <tr><td>India (IST)<br><span class="bx-src">every Indian city</span></td>${b.slots.map(s => `<td class="bx-num">${fmt(s[1], s[2])}</td>`).join('')}<td><span class="bx-fit">Batch fits</span></td></tr>
          ${rows}
        </tbody>
      </table>
    </div>`;
}

// ------------------------------------------------------------- siblings
const SIBLINGS = [
  ['cbse-class-10-ai-classes-online', 'The Mon and Wed 9 PM AI batch'],
  ['cbse-class-10-ai-syllabus-explained', 'CBSE AI 417 syllabus explained'],
  ['python-for-cbse-class-10-ai', 'Python for Class 10 AI'],
  ['cbse-class-10-ai-board-exam-preparation', 'CBSE AI board exam preparation'],
  ['cbse-class-10-ai-project-and-practical-file', 'AI project and practical file'],
  ['cbse-class-10-ai-exam-date-and-paper-pattern', 'CBSE AI exam date 2027 and pattern'],
  ['cbse-class-10-ai-sample-paper-and-mock-tests', 'CBSE AI sample paper and mock tests'],
  ['cbse-class-10-ai-important-questions', 'CBSE AI important questions'],
  ['cbse-class-10-ai-employability-skills-part-a', 'Part A employability skills'],
  ['cbse-class-10-ai-online-classes-gulf-and-abroad', 'CBSE AI classes in the Gulf and abroad'],
  ['icse-class-10-java-classes-online', 'The Tue and Wed ICSE Java batch'],
  ['icse-class-10-computer-applications-syllabus-explained', 'ICSE Computer Applications syllabus'],
  ['icse-class-10-java-programs-practice', 'ICSE Java programs practice'],
  ['icse-class-10-bluej-java-coaching', 'ICSE BlueJ Java coaching'],
  ['icse-class-10-computer-applications-board-exam-preparation', 'ICSE board exam preparation'],
  ['icse-class-10-computer-applications-exam-date-and-paper-pattern', 'ICSE CA exam date 2027 and pattern'],
  ['icse-class-10-computer-applications-specimen-paper-and-mock-tests', 'ICSE specimen paper and mock tests'],
  ['icse-class-10-computer-applications-important-questions', 'ICSE CA important questions'],
  ['icse-class-10-computer-applications-project-and-internal-assessment', 'ICSE project and internal assessment'],
  ['icse-class-10-computer-applications-classes-gulf-and-abroad', 'ICSE Java classes in the Gulf and abroad']
];

// ---------------------------------------------------------------- reviews
// Real Google reviews already used across the cluster (see project_social_proof_rollout).
const REVIEWS = [
  ['The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content.', 'Ria Mukherjee', 'Parent'],
  ['Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease.', 'Samriddha Mondal', 'Student'],
  ['One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development.', 'Vansh Agarwal', 'Student'],
  ['My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative.', 'Sonam Oswal', 'Parent of Dhairya'],
  ['Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students\' confidence and inspires them to learn without hesitation.', 'Sonu Goyal', 'Parent'],
  ['I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding.', 'Ritu Kedia', 'Parent']
];

// ------------------------------------------------------------------ render
function render(p) {
  const b = BOARD[p.board];
  const url = `${BASE}/${p.slug}`;
  const rating = String(BRAND.rating);
  const reviewCount = String(BRAND.reviews);
  const trustLine = `Rated ${rating} across ${reviewCount} Google reviews`;
  const waText = encodeURIComponent(p.waText);
  const waHref = WA + waText;

  // ---------------- schema
  const org = {
    '@type': 'EducationalOrganization',
    '@id': `${BASE}/#org`,
    name: 'Modern Age Coders',
    url: `${BASE}/`,
    email: 'connect@modernagecoders.com',
    telephone: '+91-91233-66161',
    foundingDate: '2020',
    areaServed: p.areaServed || AREA[p.board].map(name => ({ '@type': 'Country', name })),
    knowsAbout: p.knowsAbout || b.knows
  };
  const article = {
    '@type': 'TechArticle',
    '@id': `${url}#article`,
    headline: p.headline,
    description: p.ogDesc,
    inLanguage: 'en',
    isAccessibleForFree: true,
    dateModified: p.dateModified || '2026-10-13',
    author: { '@id': `${BASE}/#org` },
    publisher: { '@id': `${BASE}/#org` },
    mainEntityOfPage: url
  };
  const instances = p.board === 'cbse'
    ? [{ '@type': 'CourseInstance', courseMode: 'online', courseSchedule: { '@type': 'Schedule', repeatFrequency: 'P1W', byDay: b.schedule.byDay, startTime: b.schedule.startTime, scheduleTimezone: 'Asia/Kolkata' }, location: { '@type': 'VirtualLocation', url } }]
    : [
        { '@type': 'CourseInstance', courseMode: 'online', courseSchedule: { '@type': 'Schedule', repeatFrequency: 'P1W', byDay: ['Tuesday'], startTime: '17:30', scheduleTimezone: 'Asia/Kolkata' }, location: { '@type': 'VirtualLocation', url } },
        { '@type': 'CourseInstance', courseMode: 'online', courseSchedule: { '@type': 'Schedule', repeatFrequency: 'P1W', byDay: ['Wednesday'], startTime: '20:00', scheduleTimezone: 'Asia/Kolkata' }, location: { '@type': 'VirtualLocation', url } }
      ];
  const course = {
    '@type': 'Course',
    '@id': `${url}#course`,
    name: p.courseName,
    description: p.courseDesc,
    url,
    inLanguage: 'en',
    provider: { '@id': `${BASE}/#org` },
    isAccessibleForFree: false,
    offers: { '@type': 'Offer', price: b.offerPrice, priceCurrency: 'INR', category: b.offerCategory, availability: 'https://schema.org/InStock' },
    hasCourseInstance: instances.length === 1 ? instances[0] : instances
  };
  const crumbs = {
    '@type': 'BreadcrumbList',
    itemListElement: p.crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c[1], item: c[0] === '/' ? `${BASE}/` : `${BASE}${c[0] || '/' + p.slug}` }))
  };
  const faq = {
    '@type': 'FAQPage',
    mainEntity: p.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
  };
  const graph = [org, article, course, crumbs, faq].concat(p.schemaExtra || []);
  const ld = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2)
    .split('\n').map(l => '  ' + l).join('\n');

  // ---------------- picks
  const picks = p.picks.map(pk => {
    const [img, alt] = COURSES[pk.slug];
    return `      <a class="bx-pick" href="/courses/${pk.slug}">
        <div class="bx-pick-shot"><img src="/images/${img}" alt="${esc(alt)}" width="800" height="450" loading="lazy"></div>
        <div class="bx-pick-body">
          <p class="bx-pick-code">${pk.code}</p>
          <h3>${pk.h3}</h3>
          <p>${pk.p}</p>
          <span class="bx-pick-go">${pk.go || 'Open the course &rarr;'}</span>
        </div>
      </a>`;
  }).join('\n');

  // ---------------- timetable aside
  const tt = p.timetable;
  const ttRows = tt.rows.map(r => `        <div class="bx-tt-row"><span class="bx-tt-day">${r[0]}</span><span class="bx-tt-time">${r[1]}${r[2] ? `<small>${r[2]}</small>` : ''}</span></div>`).join('\n');

  // ---------------- format chooser
  const batchCard = `      <div class="bx-choose-card bx-price-card"${b.batchIndiaOnly ? ' data-india-only="true"' : ''}>
        <p class="bx-choose-tag">Option 1 &middot; Fixed batch timings</p>
        <h3>${p.board === 'cbse' ? 'Group batch, Monday and Wednesday 9 PM' : 'Mini batch, Tuesday 5:30 PM and Wednesday 8 PM'}</h3>
        <p class="bx-price-amt"><span data-price="${b.priceKey}">${b.priceFallback}</span></p>
        <p class="bx-price-alt">per month, two live classes a week</p>
        <ul>${p.chooseBatch.map(li => `<li>${li}</li>`).join('')}</ul>
        <a href="#start" class="bx-btn">Book a free demo in this batch</a>
      </div>`;
  const personalCard = `      <div class="bx-choose-card bx-choose-card--alt bx-price-card">
        <p class="bx-choose-tag">Option 2 &middot; Choose your own timing</p>
        <h3>Personalised one to one</h3>
        <p class="bx-price-amt"><span data-price="coding.india.personal">₹4,999</span></p>
        <p class="bx-price-alt">per month, <span data-india-only="true">one private class a week</span><span data-intl-only="true" hidden>two private classes a week</span>, at a time set with you</p>
        <ul>${p.choosePersonal.map(li => `<li>${li}</li>`).join('')}</ul>
        <a href="#start" class="bx-btn bx-btn--ghost">Ask for a personalised plan</a>
      </div>`;

  const sibs = SIBLINGS.filter(s => s[0] !== p.slug)
    .map(([s, n]) => `      <a class="bx-sib" href="/${s}"><span class="bx-sib-n">${n}</span><span class="bx-sib-m">/${s}</span></a>`).join('\n');

  const faqHtml = p.faqs.map(([q, a]) => `      <div class="bx-faq-item"><h3>${esc(q)}</h3><p>${esc(a)}</p></div>`).join('\n');

  const reviewHtml = REVIEWS.map(([t, n, r]) => `      <article class="bx-review"><p class="bx-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p><p class="bx-review-text">"${esc(t)}"</p><p class="bx-review-name">${esc(n)}</p><p class="bx-review-role">${esc(r)}</p></article>`).join('\n');

  const formatOptions = p.board === 'cbse'
    ? `<option value="group">Mon and Wed 9 PM group batch</option>
                <option value="1on1">Personalised one to one, my own timing</option>
                <option value="unsure">Not sure yet</option>`
    : `<option value="mini">Tue 5:30 PM and Wed 8 PM mini batch</option>
                <option value="1on1">Personalised one to one, my own timing</option>
                <option value="unsure">Not sure yet</option>`;

  const footerCol = p.board === 'cbse'
    ? `<div><h4>CBSE Class 10 AI</h4><ul><li><a href="/cbse-class-10-ai-classes-online">The Mon and Wed batch</a></li><li><a href="/cbse-class-10-ai-exam-date-and-paper-pattern">Exam date and pattern</a></li><li><a href="/cbse-class-10-ai-sample-paper-and-mock-tests">Sample paper and mocks</a></li><li><a href="/cbse-class-10-ai-important-questions">Important questions</a></li></ul></div>`
    : `<div><h4>ICSE Class 10 Computer Applications</h4><ul><li><a href="/icse-class-10-java-classes-online">The Tue and Wed batch</a></li><li><a href="/icse-class-10-computer-applications-exam-date-and-paper-pattern">Exam date and pattern</a></li><li><a href="/icse-class-10-computer-applications-specimen-paper-and-mock-tests">Specimen paper and mocks</a></li><li><a href="/icse-class-10-computer-applications-important-questions">Important questions</a></li></ul></div>`;

  const html = `<!DOCTYPE html>
<html lang="en-IN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${esc(p.title)}</title>
  <meta name="description" content="${esc(p.description)}">
  <meta name="author" content="Modern Age Coders">
  <link rel="canonical" href="${url}">
  <link rel="alternate" type="text/markdown" href="/src/pages/${p.slug}.md" title="Markdown version for AI agents">

  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
  <meta name="theme-color" content="${p.themeColor}">

  <meta property="og:type" content="article">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(p.ogTitle || p.title)}">
  <meta property="og:description" content="${esc(p.ogDesc)}">
  <meta property="og:image" content="${BASE}/images/og-modern-age-coders.png">
  <meta property="og:site_name" content="Modern Age Coders">
  <meta property="og:locale" content="en_IN">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(p.twTitle || p.ogTitle || p.title)}">
  <meta name="twitter:description" content="${esc(p.twDesc || p.ogDesc)}">
  <meta name="twitter:image" content="${BASE}/images/og-modern-age-coders.png">

  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/board-prep.css?v=${CSS_VER}">

  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-N8BM164YJP');gtag('config','AW-16910316353');</script>

  <script type="application/ld+json" data-price-scope="coding.india">
${ld}
  </script>
</head>

<body class="bx-root bx-${p.code} bx-has-sticky">

<nav class="bx-nav">
  <div class="bx-wrap bx-nav-inner">
    <a class="bx-nav-brand" href="/">
      <img src="/images/logo.svg" alt="Modern Age Coders logo" width="30" height="30" fetchpriority="high">
      <span>Modern Age Coders</span>
      <span class="bx-brand-tag">${p.brandTag}</span>
    </a>
    <div class="bx-nav-links">
${p.navLinks.map(([h, l]) => `      <a href="${h}">${l}</a>`).join('\n')}
      <a href="#start" class="bx-btn">Free demo class</a>
    </div>
  </div>
</nav>

<header class="bx-hero">
  <div class="bx-wrap">
    <nav class="bx-crumbs" aria-label="Breadcrumb">
      ${p.crumbs.map((c, i) => i === p.crumbs.length - 1 ? `<span>${c[1]}</span>` : `<a href="${c[0]}">${c[1]}</a> <span>/</span>`).join(' ')}
    </nav>
    <div class="bx-hero-grid">
      <div>
        <p class="bx-eyebrow">${p.eyebrow}</p>
        <h1>${p.h1}</h1>
        <p class="bx-lede">${p.lede}</p>
        <div class="bx-btn-row">
          <a href="#start" class="bx-btn">Book a free demo class</a>
          <a href="/book-demo" class="bx-btn bx-btn--pd" data-pd-book="bx-hero">Book a priority demo</a>
          <a href="${waHref}" class="bx-btn bx-btn--ghost" target="_blank" rel="noopener" onclick="if(window.gtag)gtag('event','whatsapp_click',{page_topic:'${p.code}'});">Ask on WhatsApp</a>
        </div>
        <p class="bx-hero-note">${p.heroNote}</p>
      </div>

      <aside class="bx-timetable" aria-label="${esc(tt.label)}">
        <p class="bx-tt-title"><span>${tt.title}</span><b>${tt.right}</b></p>
${ttRows}
        <p class="bx-tt-zones">${tt.zones}</p>
        <div class="bx-tt-foot">
${tt.stamps.map(s => `          <span class="bx-stamp">${s}</span>`).join('\n')}
        </div>
        <p class="bx-trust" style="margin-top:14px"><span class="bx-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>${trustLine}</p>
      </aside>
    </div>
  </div>
</header>

<section class="bx-section" id="picks">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Start here</p>
      <h2>${p.picksH2}</h2>
      <p class="bx-lede">${p.picksLede}</p>
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
      <p>${p.capsule}</p>
    </div>
  </div>
</section>

${p.sections.join('\n\n')}

<section class="bx-section bx-section--deep" id="fees">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">${p.chooseLabel || 'Batch or personalised: you choose'}</p>
      <h2>${p.chooseH2}</h2>
      <p class="bx-lede">${p.chooseLede}</p>
    </div>
    <div class="bx-choose">
${batchCard}
${personalCard}
    </div>
${b.batchIndiaOnly ? `    <p class="bx-mt-40 bx-intl-note" data-intl-only="true" hidden><b>Outside India:</b> the ICSE Computer Applications course runs as personalised one to one, two private classes a week at a time set in your own time zone. The mini batch is taught for families in India.</p>
` : ''}    <p class="bx-mt-40">${p.chooseAfter}</p>
  </div>
</section>

<section class="bx-section" id="zones">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">${p.zonesLabel || 'Studying outside India?'}</p>
      <h2>${p.zonesH2}</h2>
      <p class="bx-lede">${p.zonesLede}</p>
    </div>
    ${zoneTable(p.board)}
    <p class="bx-mt-40">${p.zonesAfter}</p>
  </div>
</section>

<section class="bx-section bx-section--tint" id="reviews">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">What families say</p>
      <h2>${trustLine}</h2>
      <p class="bx-lede">Real reviews from real families. We neither write nor commission them.</p>
    </div>
    <div class="bx-grid-3">
${reviewHtml}
    </div>
  </div>
</section>

<section class="bx-section" id="more">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">The rest of the Class 10 series</p>
      <h2>${p.sibH2 || 'More pages for Class 10 board students'}</h2>
      <p class="bx-lede">${p.sibLede || 'Ten pages on CBSE Artificial Intelligence 417 and ten on ICSE Computer Applications (Java), from the syllabus to the exam date.'}</p>
    </div>
    <div class="bx-siblings">
${sibs}
    </div>
  </div>
</section>

<section class="bx-section bx-section--tint" id="faq">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">${p.faqLabel}</p>
      <h2>${p.faqH2}</h2>
    </div>
    <div class="bx-faq">
${faqHtml}
    </div>
  </div>
</section>

<section class="bx-section" id="start">
  <div class="bx-wrap">
    <div class="bx-hero-grid">
      <div>
        <div class="bx-section-head">
          <p class="bx-qlabel">Start</p>
          <h2>${p.startH2}</h2>
        </div>
${p.startHtml}
        <p style="margin-top:22px"><a class="bx-link" href="${waHref}" target="_blank" rel="noopener">WhatsApp us</a> &middot; <a class="bx-link" href="tel:+919123366161">+91 91233 66161</a> &middot; <a class="bx-link" href="mailto:connect@modernagecoders.com">connect@modernagecoders.com</a></p>
        <p class="bx-muted" style="font-size:.92rem;margin-top:14px">Every class is live video. The form requests a callback and reserves nothing.</p>
      </div>
      <div class="bx-form-panel">
        <form id="bxLeadForm" onsubmit="return submitBxLead(event)" novalidate>
          <div class="bx-field-row">
            <div class="bx-field"><label for="bx-${p.code}-parent">Parent's name</label><input id="bx-${p.code}-parent" type="text" name="parent_name" placeholder="Your name" required></div>
            <div class="bx-field"><label for="bx-${p.code}-phone">Phone or WhatsApp</label><input id="bx-${p.code}-phone" type="tel" name="phone" placeholder="98765 43210" maxlength="18" required></div>
          </div>
          <div class="bx-field-row">
            <div class="bx-field"><label for="bx-${p.code}-email">Email</label><input id="bx-${p.code}-email" type="email" name="email" placeholder="you@example.com" required></div>
            <div class="bx-field"><label for="bx-${p.code}-format">Preferred format</label>
              <select id="bx-${p.code}-format" name="format" required>
                ${formatOptions}
              </select>
            </div>
          </div>
          <div class="bx-field"><label for="bx-${p.code}-child">Student's name and school (optional)</label><input id="bx-${p.code}-child" type="text" name="child_name" placeholder="Student's name, school, city"></div>
          <button type="submit" class="bx-btn" style="width:100%">Request the free demo class</button>
          <p class="bx-form-note">We call within a few hours. No card, no enrolment fee.</p>
        </form>
        <div class="bx-pd-card">
          <h3>Want it sooner? Book a priority demo</h3>
          <p>A full live class of ${BRAND.priorityDemo.length} at a slot you pick, with a written skill report and learning roadmap on WhatsApp afterwards. The fee is adjusted against your first month if you enrol.</p>
          <a href="/book-demo" class="bx-btn bx-btn--pd" data-pd-book="bx-book">Book a priority demo</a>
        </div>
      </div>
    </div>
  </div>
</section>

<footer class="bx-footer">
  <div class="bx-wrap">
    <div class="bx-grid-4">
      <div><h4>Modern Age Coders</h4><p style="font-size:.9rem;opacity:.86">Live online coding, AI and mathematics for ages 6 to 67. Teaching since 2020, more than 10,000 students.</p></div>
      ${footerCol}
      <div><h4>Class 10 boards</h4><ul><li><a href="/maths-class-10">Maths for Class 10</a></li><li><a href="/coding-for-class-10">Coding for Class 10</a></li><li><a href="/cbse-ai-curriculum-classes">CBSE AI curriculum guide</a></li><li><a href="/computer-applications-icse-class-10">ICSE Computer Applications</a></li></ul></div>
      <div><h4>Start</h4><ul><li><a href="/courses">The full catalogue</a></li><li><a href="/pricing">Fees</a></li><li><a href="/how-we-teach">How we teach</a></li><li><a href="/success-stories">Success stories</a></li></ul></div>
    </div>
    <div class="bx-footer-bottom"><span>&copy; 2026 Modern Age Coders. Live online, taught from India to families worldwide.</span><span>${p.footerTag}</span></div>
  </div>
</footer>

<nav class="bx-sticky" aria-label="Quick actions">
  <a href="#start">Free class</a>
  <a href="/book-demo" class="bx-sticky-pd" data-pd-book="bx-sticky">Priority demo</a>
  <a href="tel:+919123366161">Call us</a>
</nav>

<script>
window.submitBxLead = function (e) {
  e.preventDefault();
  var f = e.target;
  var phone = (f.phone.value || '').replace(/\\D/g, '');
  if (phone.length < 7) { alert('Please enter a valid phone number.'); return false; }
  var data = { name: f.parent_name.value, phone: f.phone.value, email: f.email.value, format: f.format.value, child_name: f.child_name.value, source: '${p.slug}', page: window.location.pathname };
  var api = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') ? 'http://localhost:5000' : 'https://backend-modernagecoders.vercel.app';
  fetch(api + '/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).catch(function () {});
  if (typeof gtag === 'function') { gtag('event', 'generate_lead', { event_category: 'board_prep_page', event_label: '${p.slug}', value: 1 }); }
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
<script src="/js/country-code-selector.js?v=20260927a" defer></script>
    <script src="/js/pricing-data.generated.js?v=c1eb685613"></script>
    <script src="/js/international-pricing.js?v=deee271610"></script>
</body>
</html>
`;
  return html;
}

// ----------------------------------------------------------- markdown twin
function htmlToMd(h) {
  return h
    .replace(/<figure[\s\S]*?<pre>([\s\S]*?)<\/pre>[\s\S]*?<\/figure>/g, (m, pre) => '\n```\n' + pre.replace(/<[^>]+>/g, '') + '\n```\n')
    .replace(/<tr[^>]*>([\s\S]*?)<\/tr>/g, (m, r) => '- ' + r.replace(/<\/t[dh]>\s*<t[dh][^>]*>/g, ' | ').replace(/<[^>]+>/g, '').trim() + '\n')
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, '\n## $1\n')
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, '\n### $1\n')
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/g, '\n**$1** ')
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/g, '- $1\n')
    .replace(/<a [^>]*href="(\/[^"]*)"[^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)')
    .replace(/<\/p>/g, '\n\n')
    .replace(/<p class="bx-qlabel">[\s\S]*?\n\n/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&middot;/g, '·').replace(/&rarr;/g, '→').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

function renderMd(p) {
  const b = BOARD[p.board];
  const lines = [];
  lines.push('---');
  lines.push(`title: "${p.title.replace(/"/g, '\\"')}"`);
  lines.push(`description: "${p.description.replace(/"/g, '\\"')}"`);
  lines.push(`canonical: ${BASE}/${p.slug}`);
  lines.push(`source: src/pages/${p.slug}.html`);
  lines.push(`updated: ${p.dateModified || '2026-10-13'}`);
  lines.push('---');
  lines.push('');
  lines.push('> ' + htmlToMd(p.capsule).replace(/\n+/g, ' '));
  lines.push('');
  lines.push(htmlToMd(p.sections.join('\n')));
  lines.push('');
  lines.push('## The courses behind this page');
  lines.push('');
  for (const pk of p.picks) lines.push(`- [${htmlToMd(pk.h3)}](/courses/${pk.slug}): ${htmlToMd(pk.p)}`);
  lines.push('');
  lines.push('Families also look at ' + MD_ALSO[p.board].filter(([, s]) => !p.picks.some(pk => pk.slug === s)).map(([n, s]) => `[${n}](/courses/${s})`).join(', ') + '.');
  lines.push('');
  lines.push('## Batch or personalised, and the fees');
  lines.push('');
  lines.push(`Option 1, fixed batch${b.batchIndiaOnly ? ' (for families in India)' : ''}: ${b.batchLong}, live online, ${b.batchSize}. Option 2, personalised one to one: days and time chosen by the family${b.batchIndiaOnly ? '; outside India the ICSE course runs one to one only, two private classes a week' : ', the right choice for time zones where the batch falls in school hours or late at night'}. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (${BRAND.priorityDemo.length}, written skill report afterwards) is also available.`);
  lines.push('');
  lines.push(b.batchIndiaOnly ? '## Class times outside India' : '## Batch times outside India');
  lines.push('');
  const zt = htmlToMd(zoneTable(p.board));
  lines.push(zt);
  lines.push('');
  lines.push('## Frequently asked questions');
  lines.push('');
  for (const [q, a] of p.faqs) { lines.push(`**${q}** ${a}`); lines.push(''); }
  lines.push(`Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).`);
  lines.push('');
  lines.push('Related pages: ' + SIBLINGS.filter(s => s[0] !== p.slug).map(s => '/' + s[0]).join(', ') + '.');
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push(`*Canonical: ${BASE}/${p.slug}*`);
  return lines.join('\n') + '\n';
}

// -------------------------------------------------------------------- main
function main() {
  const want = process.argv.slice(2);
  const files = fs.readdirSync(CONTENT).filter(f => f.endsWith('.js'));
  let n = 0;
  for (const f of files) {
    const p = require(path.join(CONTENT, f));
    if (want.length && !want.includes(p.slug)) continue;
    const html = render(p);
    if (/—/.test(html)) throw new Error(`${p.slug}: em-dash in output`);
    if (!process.env.BX_DRY && /@@[A-Z_]+@@/.test(html)) throw new Error(`${p.slug}: unfilled fact placeholder ${html.match(/@@[A-Z_]+@@/)[0]}`);
    fs.writeFileSync(path.join(PAGES, p.slug + '.html'), html, 'utf8');
    fs.writeFileSync(path.join(PAGES, p.slug + '.md'), renderMd(p), 'utf8');
    console.log('built', p.slug);
    n++;
  }
  if (!n) console.log('nothing built');
}

if (require.main === module) main();
module.exports = { render, renderMd, zoneTable };
