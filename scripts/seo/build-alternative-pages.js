#!/usr/bin/env node
/**
 * Keyword Ledger 2026-27, action 7: competitor comparison pages for the three
 * competitors that AI engines named on the India maths prompt where we were
 * absent (Bhanzu 4 answers, Vedantu 3, CodeYoung 5 in the 2026-09-22 prompt run)
 * and for which the site had no page at all (grep of src/pages: zero mentions).
 *
 * Every statement about a competitor is either quoted from its own site (title,
 * H1 or meta description pulled raw with curl on 2026-09-23 and recorded in
 * FACTS below with the URL) or an observation from its sitemap recorded in
 * Desktop/SkyCoders/keyword-research-2026-09/data/competitors/competitor-patterns.md.
 * Nothing about their prices is stated because none was published on the pages read.
 * Our facts come from scripts/brand-facts.json and the pricing config (anchored).
 *
 * Writes src/pages/<slug>.html for each entry. Then: wire-page.js, generate-static-md,
 * pricing:apply, pricing:verify, sync-faq-schema --dry-run.
 *   node scripts/seo/build-alternative-pages.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const facts = require(path.join(ROOT, 'scripts', 'brand-facts.json'));
const REVIEWS = facts.reviews, RATING = facts.rating, STUDENTS = facts.students;
const BATCH = facts.batchSizes.group.replace('–', ' to ');
const PD = facts.priorityDemo;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const PAGES = [
  {
    slug: 'bhanzu-alternative', name: 'Bhanzu', site: 'bhanzu.com', priceKey: 'maths.india.group', after: 'cuemath-alternative',
    title: 'Bhanzu Alternative for 2026: Live Maths and Coding, Ages 6 to 67',
    h1: 'Bhanzu Alternative for 2026: Live Maths and Coding, Ages 6 to 67',
    description: 'Looking for a Bhanzu alternative? Modern Age Coders teaches live maths, coding and AI for ages 6 to 67 in batches of 5 to 10, flat monthly fee, free demo first.',
    og: 'A live, small-batch alternative to Bhanzu: maths for understanding, plus coding and AI in the same school, ages 6 to 67.',
    lede: 'Looking for a Bhanzu alternative? Modern Age Coders teaches live online maths for understanding, and coding and AI alongside it in the same school, for ages 6 to 67, in batches of ' + BATCH + ' with one mentor. The group fee is a flat monthly amount, shown on this page in your own currency, with no enrolment fee, no pack to prepay, and a free demo before you decide.',
    credit: 'Bhanzu is a maths-only online programme built around its founder, Neelakantha Bhanu Prakash, whose own site introduces him as "World\'s Fastest Human Calculator & Maths Educator". Its homepage promises "Online Math Courses With Personalized Guidance" and "Transforming Math Fear Into #BhanzuWay", and it publishes maths-tutor pages for 26 US cities plus a Canada edition of its homepage. If your child is afraid of maths and you want a confidence-first foundational programme with a strong brand behind it, it is a serious option.',
    creditSrc: 'Quotes from bhanzu.com and bhanzu.com/about-us, read 23 September 2026; page counts from its sitemap, read 22 September 2026.',
    reasons: [
      ['Maths only.', 'We found no coding, AI or computer-science content anywhere on the Bhanzu site. A child who wants both needs a second provider, a second timetable and a second fee.'],
      ['A US-shaped footprint.', 'Every city page on the site is a US city, with a separate Canada homepage. Families in India, the UK, the Gulf or Singapore are served by the generic pages, and the batch times are set for North America.'],
      ['Fees are not on the pages we read.', 'The homepage, about page and course pages we read on 23 September 2026 did not state a price. You learn the fee on the call, which makes comparison harder than it should be.'],
      ['The founder is the brand, not the teacher.', 'A programme built on one famous name is taught by many teachers. That is normal, but ask who your child will actually get, and whether that teacher stays for the year.'],
    ],
    us: 'Modern Age Coders teaches maths for understanding, not speed for its own sake: a placement check, a mentor who asks why, and word problems before formulas, from Grade 1 to college level. The same school teaches coding, AI and maths through coding, so a child who finds the logic of code easier than the logic of arithmetic gets both from one teacher who knows them. Live batches of ' + BATCH + ', two one-hour classes a week, and a fee you can stop at the end of any month.',
    table: [
      ['Subjects', 'Maths only (abacus as one page)', 'Maths, coding, AI and machine learning, maths through coding'],
      ['Ages', 'School children', 'Ages 6 to 67: kids, teens, college students, adults'],
      ['Format', '"Personalized Guidance", live online', 'Live online, batch of ' + BATCH + ', mini batch of 3 to 4, or one to one'],
      ['Where', 'US city pages, a Canada edition; no India, UK or Gulf pages found', 'India and worldwide, fee shown in your own currency'],
      ['Fees', 'Not published on the pages we read', 'Flat monthly fee, shown on this page; no enrolment fee; stop any month'],
      ['Before you pay', 'A demo class', 'A free demo, or a Priority Live Demo: a full ' + PD.lengthShort + ' class, fee adjusted against your first month if you enrol'],
      ['Reviews', 'Its own reviews page', RATING + ' across ' + REVIEWS + ' Google reviews, quoted word for word'],
    ],
    stay: 'Stay with Bhanzu if you are in the US, your child\'s only need is maths confidence, and the founder\'s method is the reason you chose it. Move if your child also wants to code, if you are outside North America, or if you want a fee you can see before the call.',
    faq: [
      ['Is Modern Age Coders a good Bhanzu alternative?', 'Yes, especially if you want more than maths alone or you are outside the US. Modern Age Coders teaches live online maths for understanding, plus coding and AI in the same school, for ages 6 to 67, in batches of ' + BATCH + ' with a flat monthly fee shown before you talk to anyone, and a free demo first.'],
      ['How is Modern Age Coders different from Bhanzu?', 'Bhanzu is a maths-only programme with a US-shaped footprint, built around its founder. Modern Age Coders teaches maths, coding and AI to students from 6 to adults in India and worldwide, publishes its fee on the page, and lets you stop at the end of any month. Both are live; the scope, the geography and the pricing model differ.'],
      ['Does Modern Age Coders teach mental maths or speed calculation?', 'Number sense, yes; tricks for their own sake, no. Our mental maths and abacus courses build the sense of number that makes fast calculation possible, and our main maths ladder from Grade 1 to college is about understanding, word problems and reasoning, because that is what school and every competition actually test.'],
      ['Can my child learn maths and coding together?', 'Yes, and it is one of the reasons families choose us over a maths-only programme. A child can take a maths course and a coding course in the same week with the same school, or take Maths Through Coding, where the maths is learned by writing Python. The mentor sees both sides of the same child.'],
      ['What happens after the free demo?', 'A mentor tells you honestly where your child is and which course fits; you decide in your own time. If you want to see a full class today or tomorrow instead of a shorter demo, the Priority Live Demo runs ' + PD.length + ', comes with a written skill report, and its fee is adjusted against your first month if you enrol.'],
    ],
    links: [['/pricing', 'Pricing'], ['/online-maths-tuition', 'Maths tuition'], ['/courses/maths-through-coding', 'Maths through coding'], ['/cuemath-alternative', 'Cuemath alternative'], ['/best-online-maths-classes-2026', 'Ranked: maths classes'], ['/love', 'Reviews']],
  },
  {
    slug: 'vedantu-alternative', name: 'Vedantu', site: 'vedantu.com', priceKey: 'coding.india.group', after: 'cuemath-alternative',
    title: 'Vedantu Alternative for 2026: Live Coding and Maths Classes',
    h1: 'Vedantu Alternative for 2026: Live Coding and Maths in Small Batches',
    description: 'Looking for a Vedantu alternative for coding or maths? Live coding, AI and maths in batches of 5 to 10 for ages 6 to 67, flat monthly fee, free demo first.',
    og: 'A live, small-batch alternative to Vedantu for coding, AI and maths, ages 6 to 67.',
    lede: 'Looking for a Vedantu alternative? If the reason is coding, the honest answer is that Vedantu does not sell a coding course: its "Coding for Kids" section is a library of free articles. If the reason is maths, the difference is batch size and purpose. Modern Age Coders teaches live coding, AI and maths in batches of ' + BATCH + ' with one mentor, for ages 6 to 67, with a flat monthly fee shown on this page in your own currency and a free demo before you decide.',
    credit: 'Vedantu is one of India\'s largest tuition platforms. Its own homepage describes it as "Premier K1 to K12 Online Classes and Offline Centers for Competitive Exams", and its meta description names "LIVE online classes for K1 to K12, CBSE, ICSE, JEE & NEET exams, and the best offline centers for JEE and NEET preparation". For board-exam and entrance-exam coaching at scale, with offline centres, it is a serious option. Its "Coding for Kids" section, titled "Coding for Kids - Free Resources, Guides and Tutorial", is exactly that: articles such as what coding is and what a loop is, not a live course with a teacher.',
    creditSrc: 'Quotes from vedantu.com and vedantu.com/coding-for-kids, read 23 September 2026; a sample of 111 coding-for-kids URLs from its sitemap, all definitional articles, read 22 September 2026.',
    reasons: [
      ['Coding is content there, not a course.', 'Every coding page we found on Vedantu is a glossary article. A child cannot enrol in a coding class; they can read about one.'],
      ['The engine is entrance exams.', 'JEE, NEET, CUET and NDA coaching is the business the site is organised around. That is the right place for a Class 11 or 12 student chasing a rank, and a different purpose from a 9-year-old learning maths for understanding.'],
      ['No AI, no agents, no adults.', 'We found no AI or machine-learning courses and no provision for college students or working adults, which are half of what we teach.'],
      ['Scale cuts both ways.', 'A very large platform can offer every board and every subject. Whether your child is in a batch of ten or a broadcast of hundreds is the question to ask before paying, because it changes what a live class is.'],
    ],
    us: 'Modern Age Coders is a small live school, not a platform: coding, AI and maths, taught by mentors in batches of ' + BATCH + ' where every student is asked questions by name. Coding runs from Scratch at 6 to Python, Java, web development and AI agents; maths runs from Grade 1 to college, with CBSE, ICSE and international boards; and Maths Through Coding teaches both at once. Two one-hour live classes a week, a flat monthly fee, no enrolment fee, and the freedom to stop at the end of any month.',
    table: [
      ['Subjects', 'K1 to K12 tuition across boards, JEE, NEET, CUET, NDA; coding as free articles', 'Coding, AI and machine learning, and maths, as live courses'],
      ['Ages', 'K1 to K12 and entrance-exam candidates', 'Ages 6 to 67: kids, teens, college students, adults'],
      ['Format', 'Live online classes and offline centres', 'Live online, batch of ' + BATCH + ', mini batch of 3 to 4, or one to one'],
      ['Coding course', 'None found; a "Free Resources, Guides and Tutorial" section', 'Scratch, Python, Java, web, AI, AI agents, from 6 to adults'],
      ['Fees', 'Vary by course and plan on its site', 'Flat monthly fee per format, shown on this page; no enrolment fee; stop any month'],
      ['Before you pay', 'A trial or demo', 'A free demo, or a Priority Live Demo: a full ' + PD.lengthShort + ' class, fee adjusted against your first month if you enrol'],
      ['Reviews', 'Its own review pages', RATING + ' across ' + REVIEWS + ' Google reviews, quoted word for word'],
    ],
    stay: 'Stay with Vedantu if your child is in Class 11 or 12 and the goal is a JEE, NEET or CUET rank, or if you want an offline centre. Move if the goal is coding, AI, or maths taught for understanding in a batch small enough that the teacher knows your child.',
    faq: [
      ['Is Modern Age Coders a good Vedantu alternative for coding?', 'Yes, because Vedantu does not offer a live coding course at all: its coding section is a set of free articles. Modern Age Coders teaches coding live, from Scratch for six-year-olds to Python, Java, web development and AI agents for teens and adults, in batches of ' + BATCH + ' with a mentor and a project built in class.'],
      ['Is Modern Age Coders a good Vedantu alternative for maths?', 'For a child in Class 1 to 10 who needs to understand maths rather than race through it, yes. We teach CBSE, ICSE and international boards from Grade 1 to college in small live batches. For Class 11 and 12 entrance-exam coaching, JEE or NEET, Vedantu\'s scale and offline centres are built for that and we will say so.'],
      ['How is Modern Age Coders different from Vedantu?', 'Vedantu is a large K1 to K12 and entrance-exam platform with offline centres, where coding exists only as articles. Modern Age Coders is a small live school for coding, AI and maths, ages 6 to 67, with batches of ' + BATCH + ', a flat monthly fee shown on the page, and no lock-in. Both are live; the scope, the batch size and the purpose differ.'],
      ['Does Modern Age Coders cover CBSE and ICSE?', 'Yes. Our maths courses follow CBSE, ICSE and State Board syllabi, our Class 10 pages cover CBSE Artificial Intelligence (417) and ICSE Computer Applications, and our computer science courses run through Class 11 and 12 in Python and Java. The difference from a board-exam platform is that we teach the subject, and the exam follows.'],
      ['What happens after the free demo?', 'A mentor tells you honestly where your child is and which course fits; you decide in your own time. If you want to see a full class today or tomorrow instead of a shorter demo, the Priority Live Demo runs ' + PD.length + ', comes with a written skill report, and its fee is adjusted against your first month if you enrol.'],
    ],
    links: [['/pricing', 'Pricing'], ['/courses', 'Courses'], ['/cbse-class-10-ai-classes-online', 'CBSE Class 10 AI'], ['/online-maths-tuition', 'Maths tuition'], ['/best-online-coding-classes-for-kids-2026', 'Ranked: coding classes'], ['/love', 'Reviews']],
  },
  {
    slug: 'codeyoung-alternative', name: 'Codeyoung', site: 'codeyoung.com', priceKey: 'coding.india.group', after: 'codingal-alternative',
    title: 'Codeyoung Alternative for 2026: Live Small-Batch Coding and Maths',
    h1: 'Codeyoung Alternative for 2026: Small Batches or One to One, Your Choice',
    description: 'Looking for a Codeyoung alternative? Codeyoung is 1:1 only. Modern Age Coders teaches live coding, AI and maths in batches of 5 to 10 or 1:1, ages 6 to 67.',
    og: 'A live alternative to Codeyoung that lets you choose a small batch or one to one, for coding, AI and maths, ages 6 to 67.',
    lede: 'Looking for a Codeyoung alternative? Codeyoung\'s own homepage sells "Live 1:1 online classes for kids", and one to one is the only format it offers. Modern Age Coders offers the choice: a live batch of ' + BATCH + ' where children learn from each other\'s questions, a mini batch of 3 to 4, or one to one when a goal needs it, for coding, AI and maths, ages 6 to 67. The fee is a flat monthly amount shown on this page in your own currency, with no enrolment fee and a free demo first.',
    credit: 'Codeyoung (often written CodeYoung) is a live online school whose homepage is titled "Best Live 1:1 Online Classes for Kids" and describes "Live 1:1 online classes for kids in coding & AI, math, english, science, and robotics. Handpicked mentors, mastery curriculum. Book a free 1:1 trial." Its course list includes Scratch, Python game development, Python AI and machine learning, Java, MIT App Inventor and web development for kids and teens, and it runs a large parenting blog. If you want one teacher for one child and a broad menu of school subjects under one roof, it is a serious option.',
    creditSrc: 'Quotes from codeyoung.com, read 23 September 2026; course titles and the 344-post blog from its sitemap, read 22 September 2026.',
    reasons: [
      ['One to one is the only format.', 'For some children that is exactly right. For most beginners it removes the thing that makes a class a class: another child\'s question, a project shown to peers, the pace of a small group. It is also the most expensive way to buy a teacher\'s hour.'],
      ['Kids only.', 'The site is written for children and teens. A college student or a working adult who wants the same live teaching has no track there.'],
      ['Breadth over depth.', 'Coding, AI, maths, English, science and robotics, each as a subject line. We teach fewer subjects and go further in each: coding from Scratch to AI agents, maths from Grade 1 to college.'],
      ['Fees are not on the pages we read.', 'The homepage and course pages we read on 23 September 2026 did not state a price; it is quoted after the trial. Ask for the per-class rate and the pack size before you compare.'],
    ],
    us: 'Modern Age Coders lets the family choose the format instead of the format choosing the family. Most children start in a batch of ' + BATCH + ', because hearing a peer\'s question is half the lesson and because a group makes the fee sensible; a mini batch of 3 to 4 or one to one is there for a specific goal, an exam board, a competition, a late start. Coding runs from Scratch at 6 to Python, Java, web and AI agents for teens and adults; maths runs from Grade 1 to college; every course is two one-hour live classes a week with a project built in class.',
    table: [
      ['Format', 'Live 1:1 only', 'Live batch of ' + BATCH + ', mini batch of 3 to 4, or one to one: you choose'],
      ['Subjects', 'Coding and AI, maths, English, science, robotics', 'Coding, AI and machine learning, maths, maths through coding'],
      ['Ages', 'Kids and teens', 'Ages 6 to 67: kids, teens, college students, adults'],
      ['Coding path', 'Scratch, Python game dev, Python AI/ML, Java, App Inventor, web', 'Scratch, Python, Java, C++, web, full stack, AI, AI agents, Claude Code and Codex'],
      ['Fees', 'Not published on the pages we read; quoted after the trial', 'Flat monthly fee per format, shown on this page; no enrolment fee; stop any month'],
      ['Before you pay', '"Book a free 1:1 trial"', 'A free demo, or a Priority Live Demo: a full ' + PD.lengthShort + ' class, fee adjusted against your first month if you enrol'],
      ['Reviews', 'Its own reviews', RATING + ' across ' + REVIEWS + ' Google reviews, quoted word for word'],
    ],
    stay: 'Stay with Codeyoung if your child needs one teacher alone, you want English or science from the same provider, and the quoted fee suits you. Move if you want the option of a small group, a deeper coding path, a track that continues into college and adult life, or a fee you can read before the call.',
    faq: [
      ['Is Modern Age Coders a good Codeyoung alternative?', 'Yes, particularly if you want a choice of format. Codeyoung teaches one to one only; Modern Age Coders teaches live coding, AI and maths in batches of ' + BATCH + ', mini batches of 3 to 4, or one to one, for ages 6 to 67, with a flat monthly fee shown on the page and a free demo first.'],
      ['Is one to one better than a small batch for coding?', 'For a specific goal with a deadline, often yes. For a child learning to code for the first time, a small batch is usually better teaching: another student\'s question is half the lesson, a project shown to peers is a real project, and the teacher still knows every child by name at ' + BATCH + '. We offer both, so the answer can change as the child does.'],
      ['How is Modern Age Coders different from Codeyoung?', 'Codeyoung is a 1:1-only school for kids across six subjects. Modern Age Coders is a live school for coding, AI and maths, from 6 to adults, with small batches as the default and one to one as an option, a deeper coding path that runs to AI agents, and a fee published on the page. Both are live and mentor-led; the format, the depth and the pricing model differ.'],
      ['Do you teach the same coding subjects as Codeyoung?', 'Scratch, Python, Java, web development and AI, yes, and then further: C++, full-stack development, data structures and algorithms, AI agents, and coding with Claude Code and Codex for teens and adults. Maths is taught as a full ladder from Grade 1 to college rather than a single subject line.'],
      ['What happens after the free demo?', 'A mentor tells you honestly where your child is and which format and course fit; you decide in your own time. If you want to see a full class today or tomorrow instead of a shorter demo, the Priority Live Demo runs ' + PD.length + ', comes with a written skill report, and its fee is adjusted against your first month if you enrol.'],
    ],
    links: [['/pricing', 'Pricing'], ['/courses', 'Courses'], ['/codingal-alternative', 'Codingal alternative'], ['/ai-classes-for-kids', 'AI classes for kids'], ['/best-online-coding-classes-for-kids-2026', 'Ranked: coding classes'], ['/love', 'Reviews']],
  },
];

function page(p) {
  const url = 'https://learn.modernagecoders.com/' + p.slug;
  const faqSchema = p.faq.map(([q, a]) => '    { "@type": "Question", "name": ' + JSON.stringify(q) + ', "acceptedAnswer": { "@type": "Answer", "text": ' + JSON.stringify(a) + ' } }').join(',\n');
  const faqHtml = p.faq.map(([q, a]) => '      <details class="reveal"><summary>' + esc(q) + '</summary><p>' + esc(a) + '</p></details>').join('\n');
  const reasons = p.reasons.map(([b, t]) => '      <li><strong>' + esc(b) + '</strong> ' + esc(t) + '</li>').join('\n');
  const rows = p.table.map(([k, a, b]) => '            <tr><th scope="row">' + esc(k) + '</th><td>' + esc(a) + '</td><td>' + esc(b) + '</td></tr>').join('\n');
  const links = p.links.map(([h, t]) => '<a class="link-pill" href="' + h + '">' + esc(t) + '</a>').join('');
  const price = '<span data-price="' + p.priceKey + '">₹1,499</span>';
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <script>
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', 'G-N8BM164YJP');
    gtag('config', 'AW-16910316353');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
  <title>${esc(p.title)}</title>
  <meta name="description" content="${esc(p.description)}">
  <meta name="author" content="Modern Age Coders">
  <link rel="canonical" href="${url}">
  <link rel="alternate" type="text/markdown" href="/src/pages/${p.slug}.md" title="Markdown version for AI agents">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(p.title)}">
  <meta property="og:description" content="${esc(p.og)}">
  <meta property="og:image" content="https://learn.modernagecoders.com/images/og-modern-age-coders.png">
  <meta property="og:site_name" content="Modern Age Coders">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(p.title)}">
  <meta name="twitter:description" content="${esc(p.og)}">
  <meta name="twitter:image" content="https://learn.modernagecoders.com/images/og-modern-age-coders.png">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
  <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
${faqSchema}
  ]
}</script>
  <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://learn.modernagecoders.com/" },
    { "@type": "ListItem", "position": 2, "name": "${esc(p.name)} Alternative", "item": "${url}" }
  ]
}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/compare-pages.css?v=20260718a">
  <style>:root{--accent:#B45309;--accent-soft:#fbefd9;--accent-line:#efd2a6}</style>
  <noscript><style>.reveal{opacity:1 !important;transform:none !important}</style></noscript>
</head>
<body>
<header class="nav">
  <div class="wrap nav-inner">
    <a class="brand" href="/"><img src="/images/logo.svg" alt="Modern Age Coders logo" width="36" height="36"><span>Modern Age Coders</span></a>
    <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks"><span></span><span></span><span></span></button>
    <nav class="nav-links" id="navLinks"><a href="/courses">Courses</a><a href="/pricing">Pricing</a><a href="/guarantee">Our Promise</a><a href="/contact">Contact</a><a class="btn btn-primary nav-cta" href="/book-demo">Book a free demo</a></nav>
  </div>
</header>
<main>
  <section class="hero"><div class="wrap">
    <span class="kicker reveal">Honest alternative &middot; facts checked September 2026</span>
    <h1 class="reveal">${esc(p.h1)}</h1>
    <div class="answer-capsule-wrap"><div class="answer-capsule">
      <p class="answer-capsule-lede">${esc(p.lede)}</p>
      <p class="answer-capsule-meta"><span class="answer-capsule-stat">Rated ${RATING} across ${REVIEWS} Google reviews</span> <span class="answer-capsule-stat">Group batch ${price} a month</span></p>
      <figure class="answer-capsule-quote"><blockquote>&ldquo;Children do not need another app that teaches them to copy code. They need a mentor who teaches them to think.&rdquo;</blockquote><figcaption>Shivam Khemka, Founder of Modern Age Coders</figcaption></figure>
    </div></div>
    <div class="hero-cta reveal"><a class="btn btn-primary" href="/book-demo">Book a free demo</a><a class="btn btn-secondary" href="/pricing">See pricing</a></div>
  </div></section>

  <section><div class="wrap">
    <div class="answer reveal"><span class="tag">Fair credit first</span><p>${esc(p.credit)}</p><p class="answer-src" style="font-size:.86rem;opacity:.7;margin-top:10px">${esc(p.creditSrc)}</p></div>
    <h2 class="reveal">Why families look for a ${esc(p.name)} alternative</h2>
    <ul class="reveal">
${reasons}
    </ul>
    <h2 class="reveal">Why Modern Age Coders</h2>
    <p class="reveal">${esc(p.us)}</p>
  </div></section>

  <section class="cmp"><div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">Side by side</span><h2>${esc(p.name)} and Modern Age Coders at a glance</h2><p>Their column is what their own site says, read in September 2026, or what its sitemap shows. Where a fact was not on the pages we read, the cell says so rather than guessing.</p></div>
    <p class="cmp-scrollhint">Swipe to see the whole table</p>
    <div class="cmp-wrap reveal">
      <table class="cmp-table">
        <thead><tr><th scope="col">What</th><th scope="col">${esc(p.name)}</th><th scope="col">Modern Age Coders</th></tr></thead>
        <tbody>
${rows}
        </tbody>
      </table>
    </div>
    <p class="reveal" style="margin-top:22px"><strong>Who should stay with ${esc(p.name)}.</strong> ${esc(p.stay)}</p>
  </div></section>

  <section><div class="wrap">
    <div class="sec-head reveal" style="text-align:center;margin-inline:auto"><span class="eyebrow">Honest answers</span><h2>Frequently asked questions</h2></div>
    <div class="faq-list">
${faqHtml}
    </div>
    <div class="links-row reveal">${links}</div>
  </div></section>

  <section class="cta-band"><div class="wrap reveal">
    <h2>Judge the class, not the comparison</h2>
    <p>Book a free demo and watch one live class with a mentor. Then decide with the same evidence you would want for any school.</p>
    <div class="hero-cta"><a class="btn btn-light" href="/book-demo">Book a free demo</a><a class="btn btn-ghost" href="/priority-demo">Priority Live Demo, today or tomorrow</a></div>
  </div></section>
</main>
<footer class="nav" style="border-top:1px solid var(--line);border-bottom:none"><div class="wrap nav-inner"><span>&copy; 2026 Modern Age Coders. Not affiliated with ${esc(p.name)}; their names and quotes are used to describe their public offer.</span><nav class="nav-links"><a href="/about">About</a><a href="/contact">Contact</a><a href="/pricing">Pricing</a></nav></div></footer>
<script>
(function(){
  var burger=document.getElementById('hamburger');var links=document.getElementById('navLinks');
  if(burger&&links){burger.addEventListener('click',function(){var open=links.classList.toggle('open');burger.setAttribute('aria-expanded',open?'true':'false');});
    links.addEventListener('click',function(e){if(e.target.tagName==='A'){links.classList.remove('open');burger.setAttribute('aria-expanded','false');}});}
})();
(function(){
  var els=document.querySelectorAll('.reveal');var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce||!('IntersectionObserver'in window)){for(var i=0;i<els.length;i++){els[i].classList.add('in');}return;}
  var io=new IntersectionObserver(function(entries){entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:0.08});
  for(var j=0;j<els.length;j++){io.observe(els[j]);}
})();
window.addEventListener('load',function(){setTimeout(function(){var r=document.querySelectorAll('.reveal');for(var i=0;i<r.length;i++){r[i].classList.add('in');}},1600);
  var s=document.createElement('script');s.src='https://www.googletagmanager.com/gtag/js?id=G-N8BM164YJP';s.async=true;document.head.appendChild(s);});
</script>
</body>
</html>
`;
}

PAGES.forEach((p) => {
  const html = page(p);
  if (/—/.test(html)) throw new Error('em-dash in ' + p.slug);
  if (p.title.length > 65) throw new Error('title too long: ' + p.slug + ' ' + p.title.length);
  if (p.description.length < 150 || p.description.length > 160) throw new Error('description length ' + p.description.length + ' on ' + p.slug);
  fs.writeFileSync(path.join(ROOT, 'src', 'pages', p.slug + '.html'), html);
  const words = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  console.log('wrote', p.slug, 'words', words, 'title', p.title.length, 'desc', p.description.length);
});
