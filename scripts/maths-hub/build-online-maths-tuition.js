#!/usr/bin/env node
/**
 * build-online-maths-tuition.js
 * ------------------------------------------------------------------
 * Rebuilds src/pages/online-maths-tuition.html on the editorial brand
 * (paper / ink / amber, Fraunces + Inter), owner request 2026-09-28.
 *
 * One source for the visible FAQ and the FAQPage schema (FAQS below), so the
 * two cannot drift. Kept from the current file on every run:
 *   - the Course JSON-LD block (data-price-scope, stamped by pricing:apply)
 *   - the BEGIN_LINK_MESH ... END_LINK_MESH block (owned by the mesh script)
 *
 * Rules honoured (see memory + brand-facts.json):
 *   - one currency per visitor: India cards by default, the international
 *     block ships hidden (data-intl-only) and every figure is a data-price
 *     anchor that pricing:apply stamps; no price in any FAQ text
 *   - Priority Demo is the demo CTA (data-pd-book opens the form in place)
 *   - stats only from brand-facts.json; reviews verbatim from lovewall
 *   - no em dashes, no "Premium", connect@ is the only email
 *
 * Run:  node scripts/maths-hub/build-online-maths-tuition.js
 * Then: npm run pricing:apply && npm run pricing:verify
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const PAGE = path.join(ROOT, 'src', 'pages', 'online-maths-tuition.html');
const BRAND = require(path.join(ROOT, 'scripts', 'brand-facts.json'));
const URL = 'https://learn.modernagecoders.com/online-maths-tuition';

const old = fs.readFileSync(PAGE, 'utf8');
const pick = (re, what) => { const m = old.match(re); if (!m) throw new Error('could not find ' + what); return m[0]; };
const courseSchema = pick(/<script type="application\/ld\+json" data-price-scope="maths\.international">[\s\S]*?<\/script>/, 'Course schema')
  .replace(/"audienceType":"[^"]*"/, `"audienceType":"Students aged ${BRAND.ages.replace(/ to /, '-')}, all levels"`)
  .replace(/"courseWorkload":"[^"]*"/, '"courseWorkload":"Live classes of about one hour, 1 to 2 a week by plan"');
const linkMesh = pick(/<!-- BEGIN_LINK_MESH -->[\s\S]*?<!-- END_LINK_MESH -->/, 'link mesh');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (h) => h.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

const PD = BRAND.priorityDemo;
const WA = 'https://wa.me/919123366161?text=' + encodeURIComponent("Hi, I'm interested in online maths tuition. Can you share more details?");
const MAIL = 'mailto:connect@modernagecoders.com?subject=' + encodeURIComponent('Online maths tuition enquiry');

/* ------------------------------ content ------------------------------ */

const COURSES = [
  ['elementary-mathematics-complete-masterclass', 'elementary-maths.webp', 'Class 1 to 5', 'Elementary Maths, Grades 1 to 5', 'Number sense, place value, fractions and word problems, placed by grade.'],
  ['comprehensive-middle-school-mathematics-mastery', 'middle-school-maths.webp', 'Class 6 to 8', 'Middle School Maths', 'Integers, ratio, early algebra and geometry: the years that decide confidence.'],
  ['cbse-class-10-maths-board-exam-prep-course', 'cbse-class-10-maths.webp', 'CBSE Class 10', 'CBSE Class 10 Maths Board Prep', 'All 14 chapters, case-study questions and full mock papers.'],
  ['jee-foundation-maths-course-class-8-10', 'jee-foundation-maths.webp', 'Class 8 to 10', 'JEE Foundation Maths', 'NCERT depth plus proofs and olympiad-style problem solving.'],
  ['complete-high-school-mathematics-mastery', 'high-school-maths.webp', 'Grade 9 to 12', 'High School Maths', 'Algebra, trigonometry, pre-calculus and calculus, step by step.'],
  ['gcse-mathematics-mastery', 'gcse-maths.webp', 'UK, Years 9 to 11', 'GCSE Maths (AQA, Edexcel, OCR)', 'Foundation and Higher tier, paper technique and resits.'],
  ['ib-mathematics-aa-ai-masterclass', 'ib-maths-aa-ai.webp', 'IB Diploma', 'IB Maths AA and AI, SL and HL', 'Syllabus-exact teaching, paper technique and IA coaching.'],
  ['college-mathematics-complete-masterclass', 'college-level-maths.webp', 'College', 'College Maths', 'Calculus, linear algebra, probability and analysis.'],
];

const STAGES = [
  ['Foundation stage', 'Class 1 to 5, ages 6 to 10', 'A solid base in numbers, shapes and early problem solving, taught with visual models and real-world examples children enjoy.',
    ['Number sense and place value', 'The four operations, with fluency', 'Fractions and decimals', 'Shapes, measurement, time and money', 'Mental maths and patterns', 'Word problems and story sums']],
  ['Middle school', 'Class 6 to 8, ages 11 to 13', 'The years where students either fall in love with maths or start to struggle. We make sure each concept is secure before the next one builds on it.',
    ['Integers, rational numbers and exponents', 'Algebraic expressions and equations', 'Ratio, proportion and percentages', 'Angles, triangles and quadrilaterals', 'Area, volume and surface area', 'Data handling and early statistics']],
  ['Board exam years', 'Class 9 to 10, ages 14 to 15', 'Every chapter covered in depth for CBSE, ICSE and state boards, with exam technique built in from the start rather than crammed at the end.',
    ['Polynomials and quadratic equations', 'Coordinate geometry', 'Trigonometry and its applications', 'Circles, constructions and proofs', 'Statistics and probability', 'Board paper practice and strategy']],
  ['Senior secondary', 'Class 11 to 12, ages 16 to 17', 'The complete syllabus for board exams, with the extra depth that JEE and SAT preparation need.',
    ['Sets, relations and functions', 'Limits, continuity and differentiation', 'Integral calculus and applications', 'Matrices and determinants', 'Vectors and 3D geometry', 'Probability and distributions']],
  ['College maths', 'Undergraduate and beyond', 'Engineering maths, pure maths, statistics and the maths behind data science, taught by tutors who specialise in each area.',
    ['Linear algebra', 'Multivariable calculus', 'Differential equations', 'Real and complex analysis', 'Probability and statistical inference', 'Discrete mathematics and numerical methods']],
  ['Competitions and advanced', 'All ages', 'For students who want to go beyond the syllabus: olympiad number theory, combinatorics and proof, plus admissions tests.',
    ['IOQM, RMO and INMO', 'AMC and AIME', 'Number theory and combinatorics', 'Inequalities and proof technique', 'SAT Math and GRE Quantitative', 'Vedic maths and speed calculation']],
];

const BOARDS = [
  ['CBSE', 'NCERT, chapter by chapter'], ['ICSE / ISC', 'Council for the Indian School Certificate'], ['State boards', 'Indian state syllabi'],
  ['IB', 'Maths AA and AI, SL and HL'], ['IGCSE', 'Core, Extended, Additional'], ['GCSE', 'AQA, Edexcel, OCR'],
  ['A-Level', 'Pure, Mechanics, Statistics'], ['US Common Core', 'Kindergarten to Grade 12, AP'], ['Singapore MOE', 'PSLE and the model method'], ['Australian', 'Australian Curriculum'],
];

const METHOD = [
  ['Placement first', `Start with a Priority Demo: a full live class of ${PD.length} where the mentor watches how the student works. ${PD.report} It shows which ideas are secure and which gaps from earlier years need filling.`],
  ['A plan built on the gaps', 'If a Class 8 student is shaky on Class 6 fractions, the plan fixes that first. The plan is reviewed as the student moves forward, so time goes where it is needed.'],
  ['Concept before formula', 'We teach why a method works before drilling how to use it. Students who understand where a formula comes from can handle unfamiliar exam questions on their own.'],
  ['Practice with feedback', 'Every class includes live problem solving on screen. Homework and timed practice are checked, and mistakes are worked through in the next session.'],
  ['Progress parents can see', 'Parents get regular progress updates: what was covered, what improved and what comes next. A certificate is awarded on completing a course.'],
  ['Exam technique', 'Knowing maths and scoring well are different skills. We teach time management, question choice, clear presentation and how to stop losing marks to slips.'],
];

const REVIEWS = [
  ['Modern Age Coder have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students’ confidence, keeps them updated with technology, and inspires them to learn without hesitation.', 'Sonu Goyal', 'Parent'],
  ['What stands out most is how excited my son is before every class. He looks forward to learning, problem-solving, and sharing what he’s built. I’ve noticed a big boost in his confidence!', 'Poonam Rathore', 'Parent'],
  ['My child Dhairya is really enjoying the Modern Age Coder IT classes. This is his first online class, and he eagerly looks forward to it.', 'Sonam Oswal', 'Parent of Dhairya'],
  ['Mivaan enjoys the class. He understands the concepts and completes his tasks with excitement. He started taking interest in coding… truly amazing class.', 'Shradha Saraf', 'Parent of Mivaan'],
];

const LADDER = [
  ['India: CBSE, ICSE and JEE foundation', [
    ['/maths-class-10', 'Maths Tuition for Class 10'], ['/courses/cbse-class-10-maths-board-exam-prep-course', 'CBSE Class 10 Maths Board Prep'],
    ['/courses/jee-foundation-maths-course-class-8-10', 'JEE Foundation Maths, Class 8 to 10'], ['/blog/cbse-maths-tuition-online', 'CBSE Maths Tuition for Class 6 to 12: Guide'],
    ['/courses/vedic-maths-course-speed-calculation-mastery', 'Vedic Maths'], ['/course-atlas', 'Every maths course (Course Atlas)']]],
  ['UK curriculum ladder', [
    ['/ks2-maths-tuition-online', 'KS2 Maths (ages 7-11)'], ['/ks3-maths-tuition-online', 'KS3 Maths (ages 11-14)'], ['/gcse-maths-tuition-online', 'GCSE Maths'],
    ['/a-level-maths-tuition-online', 'A-Level Maths'], ['/further-maths-tuition-online', 'Further Maths'], ['/functional-skills-maths-tuition-online', 'Functional Skills Maths'],
    ['/11-plus-maths-tuition', '11 Plus Maths'], ['/common-entrance-maths-tuition', 'Common Entrance Maths']]],
  ['Maths tuition in the UK, by age', [
    ['/online-maths-tuition-for-kids-in-uk', 'Maths for Kids'], ['/online-maths-tuition-for-teens-in-uk', 'Maths for Teens'],
    ['/online-maths-tuition-for-college-students-in-uk', 'Maths for College Students'], ['/online-maths-classes-for-adults-in-uk', 'Maths for Adults']]],
  ['US grade ladder (Kindergarten to Grade 12)', [
    ['/online-math-tutor-kindergarten', 'Kindergarten Math'], ['/online-math-tutor-1st-grade', 'Grade 1 Math'], ['/online-math-tutor-2nd-grade', 'Grade 2 Math'],
    ['/online-math-tutor-3rd-grade', 'Grade 3 Math'], ['/online-math-tutor-4th-grade', 'Grade 4 Math'], ['/online-math-tutor-5th-grade', 'Grade 5 Math'],
    ['/online-math-tutor-6th-grade', 'Grade 6 Math'], ['/online-math-tutor-7th-grade', 'Grade 7 Math'], ['/online-math-tutor-8th-grade', 'Grade 8 Math'],
    ['/online-math-tutor-9th-grade', 'Grade 9 Math'], ['/online-math-tutor-10th-grade', 'Grade 10 Math'], ['/online-math-tutor-11th-grade', 'Grade 11 Math'],
    ['/online-math-tutor-12th-grade', 'Grade 12 Math']]],
  ['Maths tutoring in the US, by age', [
    ['/online-maths-tutoring-for-kids-in-usa', 'Maths for Kids'], ['/online-maths-tutoring-for-teens-in-usa', 'Maths for Teens'],
    ['/online-maths-tutoring-for-college-students-in-usa', 'Maths for College Students'], ['/online-maths-classes-for-adults-in-usa', 'Maths for Adults'],
    ['/homeschool-math-curriculum-usa', 'Homeschool Math Curriculum']]],
  ['US maths topics', [
    ['/algebra-tutoring-online-usa', 'Algebra'], ['/algebra-2-tutoring-online', 'Algebra 2'], ['/geometry-tutoring-online-usa', 'Geometry'],
    ['/precalculus-tutoring-online', 'Precalculus'], ['/calculus-tutoring-online', 'Calculus']]],
  ['Exam and competition prep', [
    ['/sat-math-tutoring-online', 'SAT Math'], ['/act-math-tutoring-online', 'ACT Math'], ['/ap-calculus-tutoring-online', 'AP Calculus'],
    ['/ib-maths-tuition-online', 'IB Maths'], ['/igcse-maths-tuition-online', 'IGCSE Maths'], ['/isee-ssat-math-prep', 'ISEE and SSAT Math'],
    ['/math-olympiad-amc-tutoring', 'Math Olympiad and AMC'], ['/ukmt-maths-challenge-tutoring', 'UKMT Maths Challenge']]],
  ['Maths tuition in the UAE and Gulf', [
    ['/online-maths-tuition-uae', 'Maths Tuition UAE'], ['/maths-tutor-in-dubai', 'Maths Tutor in Dubai'], ['/maths-tutor-in-abu-dhabi', 'Maths Tutor in Abu Dhabi'],
    ['/maths-tutor-in-sharjah', 'Maths Tutor in Sharjah'], ['/cbse-maths-tutor-uae', 'CBSE Maths Tutor'], ['/gcse-maths-tutor-uae', 'GCSE Maths Tutor'],
    ['/a-level-maths-tutor-uae', 'A-Level Maths Tutor'], ['/ib-maths-tutor-uae', 'IB Maths Tutor'], ['/american-maths-tutor-uae', 'American Curriculum Maths'],
    ['/maths-tuition-for-kids-uae', 'Maths for Kids'], ['/maths-tuition-for-teens-uae', 'Maths for Teens'], ['/maths-classes-for-adults-uae', 'Maths for Adults']]],
  ['Other regions', [
    ['/online-maths-tuition-singapore', 'Maths Tuition in Singapore'], ['/singapore-math-method-tutoring', 'Singapore Math Method'],
    ['/online-maths-tutoring-australia', 'Maths Tutoring in Australia'], ['/online-math-tutor-canada', 'Math Tutor in Canada']]],
  ['Programs, comparisons and guides', [
    ['/math-catch-up-program', 'Maths Catch-Up Program'], ['/summer-math-program-online', 'Summer Maths Program'], ['/modern-age-coders-vs-kumon', 'Compared with Kumon'],
    ['/modern-age-coders-vs-mathnasium', 'Compared with Mathnasium'], ['/modern-age-coders-vs-cuemath', 'Compared with Cuemath'],
    ['/private-math-tutor-vs-online-tutoring', 'Private Tutor vs Online'], ['/best-online-math-tutoring-2026', 'Best Online Maths Tutoring 2026'],
    ['/online-math-tutor-cost', 'What Maths Tutoring Costs']]],
];

// [question, answer HTML]. The schema text is the answer with tags stripped.
const FAQS = [
  ['Is online maths tuition effective?',
    'It works when the lesson is live and the tutor can see the student’s working. Every class here is taught live, in a small group, a mini batch or one to one: the mentor watches the student solve, corrects the method on the spot and sets practice that is checked. To see it before deciding, <a href="/how-we-teach#library">watch recordings of real classes</a> or book a Priority Demo.'],
  ['How much does online maths tuition cost?',
    'There are three monthly plans: a group batch, a mini batch (India only) and one to one. <a href="#plans">The plans section on this page</a> shows the current fee in your currency, and every plan is listed on the <a href="/pricing">pricing page</a>. Billing is monthly and you can cancel any time; quarterly and yearly plans cost less.'],
  ['Do you teach CBSE maths online for Class 6 to Class 12?',
    'Yes. CBSE students are taught to the NCERT chapters in the order their school follows, with the same question types the board uses. Class 10 students can join the <a href="/courses/cbse-class-10-maths-board-exam-prep-course">CBSE Class 10 Maths Board Prep</a> course, which covers all 14 chapters, case-study questions and full mock papers. Class 8 to 10 students who want more depth can take <a href="/courses/jee-foundation-maths-course-class-8-10">JEE Foundation Maths</a>. ICSE and ISC students are taught to their own syllabus the same way.'],
  ['Which boards and curricula do you cover?',
    'CBSE, ICSE and ISC, Indian state boards, IB (Maths AA and AI, SL and HL), IGCSE, GCSE (AQA, Edexcel, OCR), A-Level, US Common Core and AP, the Singapore MOE syllabus including PSLE, and the Australian Curriculum. Lessons follow your syllabus, textbook and exam pattern.'],
  ['Can students from outside India join?',
    `Yes. Students join from ${BRAND.countries} countries, including the US, UK, UAE, Canada, Singapore and Australia. Classes are scheduled in the student’s own time zone, and the fees on this page are shown in your currency.`],
  ['What age groups can join maths tuition?',
    `Everyone from age ${BRAND.ages.split(' to ')[0]} to ${BRAND.ages.split(' to ')[1]}: primary school (Class 1 to 5), middle school (Class 6 to 8), high school (Class 9 to 12), college maths, and adults preparing for exams such as the GRE or GMAT.`],
  ['Do you help with olympiads and competitive exams?',
    'Yes. Olympiad preparation covers IOQM, RMO, INMO, AMC and AIME, and the advanced track covers JEE maths, SAT Math and GRE Quantitative. These classes focus on problem-solving technique, proof and reasoning rather than memorised tricks.'],
  ['How do I get started?',
    `Book a Priority Demo: a full live class of ${PD.length}, today or tomorrow, with a mentor reserved for you. ${PD.report} If you enrol, the demo fee is adjusted against your first month. You can also choose a course above and enrol directly on its page.`],
  ['What if my child is weak in maths?',
    'That is where live teaching helps most. The mentor finds the earliest gap, often a topic from two or three years back, fixes it patiently and then builds speed and accuracy on top. Confidence usually returns once the foundations stop wobbling.'],
  ['Can I choose group maths classes or one to one?',
    'Yes. All three are live and taught by a specialist mentor. A group batch (up to 10 students) adds peer learning, a mini batch (3 to 4 students, India only) gives near one-to-one attention, and one to one gives a fully personal pace. You can change plan later.'],
  ['How do you report progress to parents?',
    'Parents receive regular progress updates on what was covered, what improved and what comes next, and can message the team on WhatsApp at any time. A certificate is awarded on completing a course.'],
  ['Can we pause classes for exams or holidays?',
    'Yes. Tell us in advance and classes can be paused for school exams or holidays, then resumed where you left off.'],
  ['Do you offer a refund for maths tuition?',
    'Yes. You can request a refund within 7 days of the original purchase date. The full terms, including what is excluded, are on our <a href="/refund">Refund Policy</a> page.'],
  // Kept word for word: UK retarget passage (commit 9aab1b803).
  ['Do you teach UK students: KS3, Year 8 and GCSE maths?',
    'Yes, in UK time, on the UK curriculum. <a href="/ks3-maths-tuition-online">KS3 maths tuition online</a> covers Years 7 to 9, including the Year 8 fluency work in fractions, ratio and early algebra that GCSE assumes; <a href="/gcse-maths-tuition-online">GCSE maths tuition online</a> covers AQA, Edexcel and OCR at foundation and higher tier; and the <a href="/online-maths-tuition-for-kids-in-uk">UK kids</a> and <a href="/online-maths-tuition-for-teens-in-uk">UK teens</a> pages describe the primary and secondary routes. UK students who also take computer science can pair maths with <a href="/uk-gcse-computer-science-tutoring">GCSE computer science tutoring</a>.', 'uk-2026-09'],
];

/* ------------------------------ render ------------------------------ */

const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>';

const contactLine = (cls) => `<p class="${cls}">Questions? <a href="${esc(WA)}" target="_blank" rel="noopener">WhatsApp +91 91233 66161</a> or email <a href="${esc(MAIL)}">connect@modernagecoders.com</a></p>`;

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: strip(a) } })),
};
const otherSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    faqSchema,
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://learn.modernagecoders.com' },
      { '@type': 'ListItem', position: 2, name: 'Online Maths Tuition', item: URL } ] },
  ],
};

const TITLE = 'Online Maths Tuition for Class 1-12, CBSE & ICSE | Modern Age Coders';
const DESC = 'Live online maths tuition for Class 1 to 12 on CBSE, ICSE, IB, IGCSE and GCSE, plus college maths and olympiads. Small batches or 1-on-1 with specialist tutors.';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-N8BM164YJP"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-N8BM164YJP');gtag('config','AW-16910316353');</script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${esc(TITLE)}</title>
<meta name="description" content="${esc(DESC)}">
<meta name="author" content="Modern Age Coders">
<link rel="canonical" href="${URL}">
<link rel="alternate" type="text/markdown" href="/src/pages/online-maths-tuition.md" title="Markdown version for AI agents">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
<meta name="theme-color" content="#FBF8F2">
<meta property="og:type" content="website">
<meta property="og:url" content="${URL}">
<meta property="og:title" content="Online Maths Tuition for Class 1-12, CBSE, ICSE, IB and GCSE | Modern Age Coders">
<meta property="og:description" content="Live online maths tuition with specialist tutors: CBSE, ICSE, IB, IGCSE, GCSE, college maths and olympiads. Students from ${BRAND.countries} countries.">
<meta property="og:image" content="https://learn.modernagecoders.com/images/og-modern-age-coders.png">
<meta property="og:site_name" content="Modern Age Coders">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Online Maths Tuition for Class 1-12 | Modern Age Coders">
<meta name="twitter:description" content="Live online maths tuition with specialist tutors for every class, board and age. Small batches or 1-on-1.">
<meta name="twitter:image" content="https://learn.modernagecoders.com/images/og-modern-age-coders.png">

<!-- Structured Data: Course (offers stamped by pricing:apply) -->
${courseSchema}
<!-- Structured Data: FAQ + breadcrumb (generated from the same FAQS list as the visible FAQ) -->
<script type="application/ld+json">
${JSON.stringify(otherSchema, null, 2)}
</script>

<script src="/js/meta-pixel.js" defer></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap">
<link rel="stylesheet" href="/css/editorial-theme.css?v=20260626g">
<link rel="stylesheet" href="/css/online-maths-tuition-redesign.css?v=20260928a">
<script src="/js/ux-enhancements.js" defer></script>
<script src="/js/hover-prefetch.js" defer></script>
<script src="/js/components-loader.js" defer></script>
<script src="/js/callback-modal.js?v=20260927a" defer></script>
<script src="/js/country-code-selector.js?v=20260927a" defer></script>
</head>
<body class="omt-page editorial" data-subject="maths">
<a href="#main" class="skip-link">Skip to main content</a>
<div id="nav-placeholder"></div>

<main id="main" class="omt-root">

<!-- ============ HERO ============ -->
<header class="omt-hero">
  <div class="omt-wrap omt-hero-grid">
    <div class="omt-hero-copy">
      <ol class="omt-crumbs" aria-label="Breadcrumb"><li><a href="/">Home</a></li><li aria-hidden="true">/</li><li aria-current="page">Online Maths Tuition</li></ol>
      <p class="omt-eyebrow">Live maths classes &middot; Class 1 to 12, college and beyond</p>
      <h1>Online Maths Tuition for <em>every class, board and age</em></h1>
      <p class="omt-lede">Live online maths tuition with tutors who specialise in the level they teach: CBSE, ICSE and state boards in India, IB, IGCSE, GCSE and A-Level, US Common Core, college maths and olympiads. Your child learns why each method works, practises with feedback and builds real confidence.</p>
      <div class="omt-cta-row">
        <a class="omt-btn omt-btn--primary" href="/priority-demo" data-pd-book="maths-hero">Book a Priority Demo ${ARROW}</a>
        <a class="omt-btn omt-btn--ghost" href="#levels">Find your maths course</a>
      </div>
      ${contactLine('omt-contact-line')}
    </div>
    <ul class="omt-proof" aria-label="Modern Age Coders at a glance">
      <li><b>${esc(BRAND.students)}</b><span>students taught since ${BRAND.founded}</span></li>
      <li><b>${BRAND.rating}</b><span>rating across ${BRAND.reviews} Google reviews</span></li>
      <li><b>${esc(BRAND.countries)}</b><span>countries, taught in your time zone</span></li>
      <li><b>${esc(BRAND.ages)}</b><span>every age can learn maths with us</span></li>
    </ul>
  </div>
</header>

<!-- ============ COURSES FIRST ============ -->
<section class="omt-section omt-levels" id="levels" aria-labelledby="omt-levels-title">
  <div class="omt-wrap">
    <p class="omt-kicker">Choose your level</p>
    <h2 id="omt-levels-title">Maths courses for every class and exam</h2>
    <p class="omt-sub">Pick the course that matches the student's class or board. Each course page shows the full week-by-week syllabus, the plans and how to enrol.</p>
    <div class="omt-course-grid">
${COURSES.map(([slug, img, tag, title, blurb]) => `      <a class="omt-course" href="/courses/${slug}">
        <span class="omt-course-img"><img src="/content/courses/generated/${slug}/images/${img}" alt="${esc(title)} course thumbnail" width="640" height="360" loading="lazy" decoding="async"></span>
        <span class="omt-course-body"><span class="omt-course-tag">${esc(tag)}</span><span class="omt-course-title">${esc(title)}</span><span class="omt-course-blurb">${esc(blurb)}</span><span class="omt-course-more">View course ${ARROW}</span></span>
      </a>`).join('\n')}
    </div>
    <p class="omt-more"><a class="omt-link" href="/course-atlas">See every maths course in the Course Atlas</a>, including Vedic maths, abacus, AP, SAT, PSLE, olympiad and statistics.</p>
  </div>
</section>

<!-- ============ ANSWER CAPSULE ============ -->
<section class="omt-capsule" aria-label="In short">
  <div class="omt-wrap">
    <div class="omt-capsule-card">
      <p class="omt-capsule-lede">Modern Age Coders runs live online maths tuition for students aged ${esc(BRAND.ages)}: CBSE, ICSE and state boards in India, plus GCSE, IGCSE, IB, A-Level, US Common Core and the Singapore syllabus. Every class is taught live by a specialist mentor in a small group, a mini batch or one to one, and families can see a full class first with a Priority Demo.</p>
      <p class="omt-capsule-stat">Rated ${BRAND.rating} across ${BRAND.reviews} Google reviews</p>
      <figure class="omt-capsule-quote">
        <blockquote>&ldquo;Children do not need another app that teaches them to copy code. They need a mentor who teaches them to think.&rdquo;</blockquote>
        <figcaption>Shivam Khemka, Founder of Modern Age Coders</figcaption>
      </figure>
    </div>
  </div>
</section>

<!-- ============ HOW A LESSON WORKS ============ -->
<section class="omt-section" aria-labelledby="omt-method-title">
  <div class="omt-wrap">
    <p class="omt-kicker">How we teach maths</p>
    <h2 id="omt-method-title">How live online maths tuition works</h2>
    <p class="omt-sub">From the first class to exam day, every step is built to find the real gaps and close them.</p>
    <ol class="omt-method">
${METHOD.map(([h, p], i) => `      <li><span class="omt-method-n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join('\n')}
    </ol>
    <p class="omt-more"><a class="omt-link" href="/how-we-teach#library">Watch recordings of real classes</a> to see the teaching before you decide.</p>
  </div>
</section>

<!-- ============ STAGES ============ -->
<section class="omt-section omt-section--tint" aria-labelledby="omt-stages-title">
  <div class="omt-wrap">
    <p class="omt-kicker">Curriculum</p>
    <h2 id="omt-stages-title">Maths tuition for every class and every level</h2>
    <p class="omt-sub">Every student gets a plan for their class, board, current level and goal. This is what we cover at each stage.</p>
    <div class="omt-stage-grid">
${STAGES.map(([h, range, p, topics]) => `      <article class="omt-stage"><h3>${esc(h)}</h3><p class="omt-stage-range">${esc(range)}</p><p>${esc(p)}</p><ul>${topics.map((t) => `<li>${CHECK}<span>${esc(t)}</span></li>`).join('')}</ul></article>`).join('\n')}
    </div>
  </div>
</section>

<!-- ============ BOARDS + INDIA ============ -->
<section class="omt-section" aria-labelledby="omt-boards-title">
  <div class="omt-wrap">
    <p class="omt-kicker">Boards we cover</p>
    <h2 id="omt-boards-title">Taught to your board and your syllabus</h2>
    <ul class="omt-boards">
${BOARDS.map(([b, s]) => `      <li><b>${esc(b)}</b><span>${esc(s)}</span></li>`).join('\n')}
    </ul>
    <div class="omt-india">
      <h3>Online maths tuition in India: CBSE and ICSE, Class 1 to 12</h3>
      <p>For Indian families, lessons follow the NCERT textbook chapter by chapter for CBSE, and the ICSE and ISC syllabus for Council schools, in the order your school teaches them. A Class 6 student builds fluency in integers, fractions and early algebra; a Class 10 student works through every board chapter with case-study questions and past-paper practice; Class 11 and 12 students cover calculus, vectors and probability for the boards and for JEE. Classes are scheduled in Indian time, in English or Hindi depending on the batch.</p>
      <p><a class="omt-link" href="/maths-class-10">Maths tuition for Class 10</a> &middot; <a class="omt-link" href="/courses/cbse-class-10-maths-board-exam-prep-course">CBSE Class 10 Maths Board Prep</a> &middot; <a class="omt-link" href="/blog/cbse-maths-tuition-online">A parent's guide to CBSE maths tuition</a></p>
    </div>
  </div>
</section>

<!-- ============ PLANS (one currency per visitor) ============ -->
<section class="omt-section omt-section--tint" id="plans" aria-labelledby="omt-plans-title">
  <div class="omt-wrap">
    <p class="omt-kicker">Plans</p>
    <h2 id="omt-plans-title">Clear monthly plans</h2>
    <p class="omt-sub">Every plan is live with a specialist mentor, and each class runs about one hour. Billing is monthly and you can cancel any time; quarterly and yearly plans cost less.</p>
    <div class="omt-plans" data-india-only="true">
      <article class="omt-plan"><h3>Group batch</h3><p class="omt-plan-price"><span data-price="maths.india.group">₹1,499</span><small>/ month</small></p><ul><li>${CHECK}<span>2 live classes a week</span></li><li>${CHECK}<span>Up to 10 students</span></li><li>${CHECK}<span>Board-aligned lessons and checked practice</span></li></ul></article>
      <article class="omt-plan omt-plan--featured"><span class="omt-plan-badge">Most popular</span><h3>Mini batch</h3><p class="omt-plan-price"><span data-price="maths.india.miniBatch">₹2,999</span><small>/ month</small></p><ul><li>${CHECK}<span>2 live classes a week</span></li><li>${CHECK}<span>Just 3 to 4 students</span></li><li>${CHECK}<span>Near one-to-one attention</span></li></ul></article>
      <article class="omt-plan"><h3>1-on-1</h3><p class="omt-plan-price"><span data-price="maths.india.personal">₹4,999</span><small>/ month</small></p><ul><li>${CHECK}<span>1 private class a week, 4 a month</span></li><li>${CHECK}<span>Your own mentor and pace</span></li><li>${CHECK}<span>Timings that suit you</span></li></ul></article>
    </div>
    <div class="omt-plans omt-plans--two" data-intl-only="true" hidden>
      <article class="omt-plan"><h3>Group batch</h3><p class="omt-plan-price"><span data-price="maths.international.group">$100</span><small>/ month</small></p><ul><li>${CHECK}<span>2 live classes a week</span></li><li>${CHECK}<span>Up to 10 students</span></li><li>${CHECK}<span>Taught in your time zone</span></li></ul></article>
      <article class="omt-plan omt-plan--featured"><span class="omt-plan-badge">Recommended</span><h3>1-on-1</h3><p class="omt-plan-price"><span data-price="maths.international.personal">$150</span><small>/ month</small></p><ul><li>${CHECK}<span>2 private classes a week</span></li><li>${CHECK}<span>Your own mentor and pace</span></li><li>${CHECK}<span>Timings that suit you</span></li></ul></article>
    </div>
    <div class="omt-plans-foot">
      <a class="omt-btn omt-btn--primary" href="/priority-demo" data-pd-book="maths-plans">Book a Priority Demo ${ARROW}</a>
      <a class="omt-btn omt-btn--ghost" href="#levels">Choose a course and enrol</a>
      <a class="omt-link" href="/pricing">See the full pricing page</a>
    </div>
    <p class="omt-note">To enrol, open your course above and press Enrol Now on the plan you want. After payment, message us on WhatsApp with the student's name, the course and a preferred time slot, and we confirm the batch and class link.</p>
  </div>
</section>

<!-- ============ REVIEWS ============ -->
<section class="omt-section" aria-labelledby="omt-reviews-title">
  <div class="omt-wrap">
    <p class="omt-kicker">What families say</p>
    <h2 id="omt-reviews-title">Rated ${BRAND.rating} across ${BRAND.reviews} Google reviews</h2>
    <p class="omt-sub">Modern Age Coders teaches both maths and coding. These are real reviews from our families, quoted as written.</p>
    <div class="omt-reviews">
${REVIEWS.map(([q, n, r]) => `      <figure class="omt-review"><div class="omt-stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</div><blockquote>&ldquo;${esc(q)}&rdquo;</blockquote><figcaption><b>${esc(n)}</b><span>${esc(r)}</span></figcaption></figure>`).join('\n')}
    </div>
    <p class="omt-more"><a class="omt-link" href="/love">Read the full Wall of Love</a> &middot; <a class="omt-link" href="https://g.page/r/Cff_QkHNaP9yEAE/review" target="_blank" rel="noopener">Reviews on Google</a></p>
  </div>
</section>

<!-- ============ PROMISE ============ -->
<section class="omt-promise" aria-labelledby="omt-promise-title">
  <div class="omt-wrap">
    <div class="omt-promise-card">
      <p class="omt-promise-eyebrow">Our promise</p>
      <h2 id="omt-promise-title">The world's best learning experience, open to <em>everyone</em>.</h2>
      <ul>
        <li><b>World-class instructors</b><span>Every class is taught by a tutor who specialises in that exact level of maths.</span></li>
        <li><b>No compromise on quality</b><span>Every lesson, worksheet and piece of feedback is held to the highest standard.</span></li>
        <li><b>Education for everyone</b><span>Learners aged ${esc(BRAND.ages)}, from first sums to university maths, in ${esc(BRAND.countries)} countries.</span></li>
      </ul>
      <div class="omt-promise-close"><p>If you want the highest quality, Modern Age Coders is the right choice.</p><a class="omt-btn omt-btn--primary" href="/priority-demo" data-pd-book="maths-promise">Book a Priority Demo</a></div>
    </div>
  </div>
</section>

<!-- ============ PROGRAMME FINDER (internal-link hub) ============ -->
<section class="omt-section omt-section--tint" id="all-maths-programmes" aria-labelledby="omt-ladder-title">
  <div class="omt-wrap">
    <p class="omt-kicker">Every level, every exam</p>
    <h2 id="omt-ladder-title">Find your maths programme</h2>
    <p class="omt-sub">One live teacher, one method, every syllabus. Choose your class, board or exam and open the programme built for it.</p>
    <div class="omt-ladder">
${LADDER.map(([g, links]) => `      <div class="omt-ladder-group"><h3>${esc(g)}</h3><div class="omt-ladder-links">${links.map(([h, t]) => `<a href="${h}">${esc(t)}</a>`).join('')}</div></div>`).join('\n')}
    </div>
  </div>
</section>

<!-- ============ FAQ (same list as the FAQPage schema) ============ -->
<section class="omt-section" id="faq" aria-labelledby="omt-faq-title">
  <div class="omt-wrap omt-wrap--narrow">
    <p class="omt-kicker">FAQ</p>
    <h2 id="omt-faq-title">Questions parents ask about online maths tuition</h2>
    <div class="omt-faq">
${FAQS.map(([q, a, retarget], i) => `      <details class="omt-faq-item"${retarget ? ` data-retarget="${retarget}"` : ''}${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><div class="omt-faq-a"><p>${a}</p></div></details>`).join('\n')}
    </div>
  </div>
</section>

<!-- ============ LONG-FORM ============ -->
<section class="omt-section omt-prose" aria-label="More about online maths tuition">
  <div class="omt-wrap omt-wrap--narrow">
    <h2>Why online maths tuition works</h2>
    <p>A good maths lesson is a conversation about working. Online, the mentor sees every step the student writes, stops the lesson at the exact line where the method goes wrong and fixes it there, rather than at the bottom of a marked page a week later. There is no travel, the class is at a time that suits the family, and the same specialist tutor can teach a student in Kolkata, Dubai or London.</p>
    <p>At Modern Age Coders, online maths tuition is a structured course, not a video call: a placement class, a plan built on the student's real gaps, live problem solving in every lesson, checked homework and timed practice, and regular progress updates for parents.</p>
    <h2>Who should consider online maths tuition?</h2>
    <ul>
      <li>Students who find maths hard and need patient, concept-first teaching</li>
      <li>Strong students preparing for olympiads, JEE, the SAT or other competitive exams</li>
      <li>Children in Class 1 to 5 who need a firm foundation before maths gets harder</li>
      <li>Class 9 to 12 students preparing for CBSE, ICSE, IB, IGCSE or GCSE exams</li>
      <li>College students who need help with calculus, linear algebra or statistics</li>
      <li>Adults preparing for the GRE, GMAT or maths needed at work</li>
      <li>Families outside India who want a specialist tutor in their own time zone</li>
    </ul>
    <h2>Maths and coding: a combination that sets students apart</h2>
    <p>Modern Age Coders teaches coding and maths side by side. Every algorithm rests on mathematical thinking, and an equation often becomes clear the moment a student sees it drawn by their own code. Students who learn both develop sharper reasoning and better problem solving. See <a class="omt-link" href="/courses/maths-through-coding">Maths Through Coding</a> and <a class="omt-link" href="/why-coding-and-maths-together">why we teach coding and maths together</a>.</p>
  </div>
</section>

<!-- ============ FINAL CTA ============ -->
<section class="omt-final" aria-labelledby="omt-final-title">
  <div class="omt-wrap">
    <div class="omt-final-card">
      <h2 id="omt-final-title">Ready to make maths your strongest subject?</h2>
      <p>Book a Priority Demo: a full live class of ${esc(PD.length)}, today or tomorrow, with a mentor reserved for you. You get a written skill report afterwards, and the fee is adjusted against your first month if you enrol.</p>
      <div class="omt-cta-row omt-cta-row--center">
        <a class="omt-btn omt-btn--primary" href="/priority-demo" data-pd-book="maths-final">Book a Priority Demo ${ARROW}</a>
        <a class="omt-btn omt-btn--light" href="#levels">Find your maths course</a>
      </div>
      ${contactLine('omt-final-contact')}
    </div>
  </div>
</section>

</main>

${linkMesh}
<div id="footer-placeholder"></div>

<script src="/js/pricing-data.generated.js?v=c1eb685613"></script>
<script src="/js/international-pricing.js?v=deee271610"></script>
</body>
</html>
`;

if (/—|–/.test(html.replace(linkMesh, ''))) throw new Error('em/en dash in generated copy');
if (/premium/i.test(html.replace(/olympiad-mathematics-premium-course/g, ''))) throw new Error('"Premium" in copy');
fs.writeFileSync(PAGE, html);
console.log('wrote', path.relative(ROOT, PAGE), (html.length / 1024).toFixed(1) + ' KB,', FAQS.length, 'FAQs');
