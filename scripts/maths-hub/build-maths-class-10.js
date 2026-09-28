#!/usr/bin/env node
/**
 * build-maths-class-10.js
 * ------------------------------------------------------------------
 * Rebuilds src/pages/maths-class-10.html on the editorial brand, sharing
 * the /online-maths-tuition stylesheet (online-maths-tuition-redesign.css,
 * .omt-root scope) so the two maths pages read as one family.
 * Owner go-ahead 2026-09-28 ("option 1").
 *
 * Facts come from the CBSE Class 10 Maths Board Prep course JSON (14 NCERT
 * chapters, paper format, unit weightage) and brand-facts.json. That course
 * says "nobody can promise marks, and we do not", so this page promises
 * preparation, not scores (the old "Score 95+" and "92% score 90+" are gone).
 * Kept from the current file on every run: the Course JSON-LD block and the
 * BEGIN/END_LINK_MESH block. Visible FAQ and FAQPage schema share one list.
 *
 * Run:  node scripts/maths-hub/build-maths-class-10.js
 * Then: npm run pricing:apply && npm run pricing:verify
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const PAGE = path.join(ROOT, 'src', 'pages', 'maths-class-10.html');
const BRAND = require(path.join(ROOT, 'scripts', 'brand-facts.json'));
const URL = 'https://learn.modernagecoders.com/maths-class-10';

const old = fs.readFileSync(PAGE, 'utf8');
const pick = (re, what) => { const m = old.match(re); if (!m) throw new Error('could not find ' + what); return m[0]; };
const courseSchema = pick(/<script type="application\/ld\+json" data-price-scope="maths\.international">[\s\S]*?<\/script>/, 'Course schema');
// Keep ONLY the Course node from the old scoped block: it also carried an old
// FAQPage (prices, unprovable stats) and a breadcrumb, which this page now
// generates itself. Offers stay, so pricing:apply keeps stamping them.
const courseSchemaClean = (() => {
  const m = courseSchema.match(/^(<script[^>]*>)([\s\S]*)(<\/script>)$/);
  const data = JSON.parse(m[2]);
  const graph = (data['@graph'] || [data]).filter((n) => n['@type'] === 'Course');
  if (!graph.length) throw new Error('no Course node in the scoped schema');
  graph[0].description = "Live online maths tuition for Class 10: all 14 NCERT chapters for CBSE, the ICSE syllabus, case-study and MCQ practice, board exam strategy and timed mock papers, in small groups or 1-on-1.";
  return m[1] + String.fromCharCode(10) + JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2) + String.fromCharCode(10) + m[3];
})();
const linkMesh = pick(/<!-- BEGIN_LINK_MESH -->[\s\S]*?<!-- END_LINK_MESH -->/, 'link mesh');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (h) => h.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const PD = BRAND.priorityDemo;
const WA = 'https://wa.me/919123366161?text=' + encodeURIComponent("Hi, I'm interested in Class 10 maths tuition. Can you share more details?");
const MAIL = 'mailto:connect@modernagecoders.com?subject=' + encodeURIComponent('Class 10 maths tuition enquiry');
const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>';
const contactLine = (cls) => `<p class="${cls}">Questions? <a href="${esc(WA)}" target="_blank" rel="noopener">WhatsApp +91 91233 66161</a> or email <a href="${esc(MAIL)}">connect@modernagecoders.com</a></p>`;

const COURSES = [
  ['cbse-class-10-maths-board-exam-prep-course', 'cbse-class-10-maths.webp', 'CBSE Class 10', 'CBSE Class 10 Maths Board Prep', 'All 14 NCERT chapters, case-study questions and a full mock cycle. Standard and Basic.'],
  ['jee-foundation-maths-course-class-8-10', 'jee-foundation-maths.webp', 'Class 8 to 10', 'JEE Foundation Maths', 'NCERT depth plus proofs and olympiad-style problems for students aiming higher.'],
  ['igcse-mathematics-mastery', 'igcse-maths.webp', 'IGCSE, Years 9 to 11', 'IGCSE Maths', 'Core, Extended and Additional Maths, with paper technique.'],
  ['complete-high-school-mathematics-mastery', 'high-school-maths.webp', 'Grade 9 to 12', 'High School Maths', 'Algebra, geometry and trigonometry on to calculus, step by step.'],
];

// CBSE unit weightage, 80 theory marks (from the course JSON)
const WEIGHT = [['Algebra', 20], ['Geometry', 15], ['Trigonometry', 12], ['Statistics and Probability', 11], ['Mensuration', 10], ['Number Systems', 6], ['Coordinate Geometry', 6]];

const CHAPTERS = [
  ['Real Numbers', ['Fundamental Theorem of Arithmetic', 'HCF and LCM by prime factorisation', 'Proving numbers irrational']],
  ['Polynomials', ['Zeros of a polynomial, graphically', 'Relationship between zeros and coefficients']],
  ['Pair of Linear Equations in Two Variables', ['Graphical method', 'Substitution and elimination', 'Word problems']],
  ['Quadratic Equations', ['Factorisation', 'The quadratic formula', 'Nature of roots from the discriminant']],
  ['Arithmetic Progressions', ['The nth term', 'Sum of the first n terms', 'Real-world problems']],
  ['Triangles', ['Similarity criteria', 'Basic Proportionality Theorem', 'Proof writing for board marks']],
  ['Coordinate Geometry', ['Distance formula', 'Section formula', 'Points, lines and figures on the plane']],
  ['Introduction to Trigonometry', ['Trigonometric ratios', 'Ratios of standard angles', 'Identities and proofs']],
  ['Some Applications of Trigonometry', ['Heights and distances', 'Angles of elevation and depression']],
  ['Circles', ['Tangent properties', 'Tangents from an external point', 'Theorem proofs']],
  ['Areas Related to Circles', ['Sectors and segments', 'Combined figures and shaded regions']],
  ['Surface Areas and Volumes', ['Combinations of solids', 'Surface area and volume problems']],
  ['Statistics', ['Mean, median and mode of grouped data', 'Choosing the right method']],
  ['Probability', ['Classical probability', 'Dice, coins and cards', 'Complementary events']],
];

const METHOD = [
  ['Placement first', `Start with a Priority Demo: a full live class of ${PD.length} where the mentor sees how the student works. ${PD.report}`],
  ['Every chapter taught properly', 'All 14 NCERT chapters in order, with the why behind each method, so an unfamiliar question in the exam is still solvable.'],
  ['Board question forms from day one', 'Each topic closes with the forms the board actually asks: case studies, MCQs and short and long answers. By mock season the format holds no surprises.'],
  ['Chapter tests and a mock cycle', 'Timed chapter tests, then CBSE sample papers and previous-year papers under real timing, with an error clinic after every mock.'],
  ['Standard or Basic, decided with evidence', 'We teach both the Standard (041) and Basic (241) tracks and help each family choose from the student’s own test scores.'],
  ['Progress parents can see', 'Regular progress updates on what was covered, what improved and what comes next. We promise preparation and honest feedback, never marks.'],
];

const STRATEGY = [
  'Time management with section-wise practice and timed mock papers',
  'Case-study and competency-based questions in every chapter',
  'Sample papers and previous-year papers for CBSE and ICSE',
  'Question-pattern analysis to find the high-weightage topics',
  'Step-marking and presentation, so correct answers keep their marks',
  'A mistake log, so the same slip is not made twice',
];

const REVIEWS = [
  ['Modern Age Coder have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students’ confidence, keeps them updated with technology, and inspires them to learn without hesitation.', 'Sonu Goyal', 'Parent'],
  ['What stands out most is how excited my son is before every class. He looks forward to learning, problem-solving, and sharing what he’s built. I’ve noticed a big boost in his confidence!', 'Poonam Rathore', 'Parent'],
];

const FAQS = [
  ['How much does Class 10 maths tuition cost online?',
    'There are three monthly plans: a group batch, a mini batch (India only) and one to one. <a href="#plans">The plans section on this page</a> shows the current fee in your currency, and every plan is on the <a href="/pricing">pricing page</a>. Billing is monthly and you can cancel any time; quarterly and yearly plans cost less.'],
  ['Is online maths tuition effective for board exams?',
    'It works when the lesson is live and the tutor can see the student’s working. Every class here is live: the mentor watches the student solve, corrects the method on the spot, and sets board-style practice that is checked. We promise preparation and honest feedback; nobody can promise marks, and we do not.'],
  ['How many classes a week for Class 10 maths?',
    'Group batches and mini batches meet twice a week for about an hour. One-to-one students in India have one private class a week, and students outside India have two. Before the boards, the plan shifts to revision and timed mock papers.'],
  ['Standard or Basic maths: which should my child take?',
    'We teach both the Standard (041) and Basic (241) tracks and help each family decide with evidence from the student’s own test scores, not guesswork. Students who may want maths in Class 11 and 12 usually need Standard.'],
  ['Which boards do you cover for Class 10 maths?',
    'CBSE (all 14 NCERT chapters), ICSE, Indian state boards, IGCSE and Cambridge, and IB MYP. Lessons follow your syllabus, textbook and exam pattern.'],
  ['Can my child join mid-year or close to the exams?',
    'Yes. A student who joins late gets a revision plan built around the high-weightage units, previous-year question patterns and timed practice on the chapters that need it most.'],
  ['Can we try a class before enrolling?',
    `Yes. <a href="/priority-demo" data-pd-book="class10-faq">Book a Priority Demo</a>: a full live class of ${PD.length}, today or tomorrow, with a mentor reserved for your child. ${PD.report} If you enrol, the demo fee is adjusted against your first month’s fee.`],
  ['Do you offer a refund?',
    'Yes. You can request a refund within 7 days of the original purchase date. The full terms, including what is excluded, are on our <a href="/refund">Refund Policy</a> page.'],
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'FAQPage', mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: strip(a) } })) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://learn.modernagecoders.com' },
      { '@type': 'ListItem', position: 2, name: 'Online Maths Tuition', item: 'https://learn.modernagecoders.com/online-maths-tuition' },
      { '@type': 'ListItem', position: 3, name: 'Maths Tuition for Class 10', item: URL } ] },
  ],
};

const TITLE = 'Maths Tuition for Class 10: CBSE & ICSE Board Exam Prep | Modern Age Coders';
const DESC = 'Live online maths tuition for Class 10: all 14 NCERT chapters for CBSE, the ICSE syllabus, case-study and MCQ practice and timed mock papers. Small batches or 1-on-1.';

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
<link rel="alternate" type="text/markdown" href="/src/pages/maths-class-10.md" title="Markdown version for AI agents">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
<meta name="theme-color" content="#FBF8F2">
<meta property="og:type" content="website">
<meta property="og:url" content="${URL}">
<meta property="og:title" content="Maths Tuition for Class 10: CBSE & ICSE Board Exam Prep | Modern Age Coders">
<meta property="og:description" content="${esc(DESC)}">
<meta property="og:image" content="https://learn.modernagecoders.com/images/og-modern-age-coders.png">
<meta property="og:site_name" content="Modern Age Coders">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Maths Tuition for Class 10 | Modern Age Coders">
<meta name="twitter:description" content="${esc(DESC)}">
<meta name="twitter:image" content="https://learn.modernagecoders.com/images/og-modern-age-coders.png">

<!-- Structured Data: Course (offers stamped by pricing:apply) -->
${courseSchemaClean}
<!-- Structured Data: FAQ + breadcrumb (same FAQS list as the visible FAQ) -->
<script type="application/ld+json">
${JSON.stringify(schema, null, 2)}
</script>

<script src="/js/meta-pixel.js" defer></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap">
<link rel="stylesheet" href="/css/editorial-theme.css?v=20260626g">
<link rel="stylesheet" href="/css/online-maths-tuition-redesign.css?v=20260928b">
<style>
/* Class 10 extras on top of the shared maths stylesheet */
.omt-root .c10-weights{list-style:none;margin:1rem 0 0;padding:0;display:grid;gap:.45rem;max-width:560px}
.omt-root .c10-weights li{display:grid;grid-template-columns:190px 1fr 42px;align-items:center;gap:.8rem;font-size:.95rem}
.omt-root .c10-bar{height:10px;border-radius:6px;background:#EFE7DA;overflow:hidden}
.omt-root .c10-bar i{display:block;height:100%;background:var(--amber)}
.omt-root .c10-weights b{font-family:var(--font-mono);font-size:.9rem;text-align:right}
.omt-root .c10-chapters{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;counter-reset:ch}
.omt-root .c10-chapters li{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:1.1rem 1.15rem}
.omt-root .c10-chapters h3{font-size:1.08rem;font-weight:600;margin:0 0 .5rem}
.omt-root .c10-chapters h3::before{counter-increment:ch;content:counter(ch,decimal-leading-zero) "  ";font-family:var(--font-mono);font-size:.85rem;color:var(--amber-deep)}
.omt-root .c10-chapters p{font-size:.9rem;line-height:1.55;color:var(--muted)}
.omt-root .c10-strategy{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,1fr);gap:.6rem 1.4rem}
.omt-root .c10-strategy li{display:flex;gap:.6rem;align-items:flex-start;font-size:.98rem;line-height:1.55}
.omt-root .c10-strategy svg{flex:0 0 auto;width:17px;height:17px;margin-top:.2rem;color:var(--amber)}
@media (max-width:860px){.omt-root .c10-chapters{grid-template-columns:repeat(2,1fr)}.omt-root .c10-strategy{grid-template-columns:1fr}}
@media (max-width:600px){.omt-root .c10-chapters{grid-template-columns:1fr}.omt-root .c10-weights li{grid-template-columns:130px 1fr 36px}}
</style>
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

<header class="omt-hero">
  <div class="omt-wrap omt-hero-grid">
    <div class="omt-hero-copy">
      <ol class="omt-crumbs" aria-label="Breadcrumb"><li><a href="/">Home</a></li><li aria-hidden="true">/</li><li><a href="/online-maths-tuition">Online Maths Tuition</a></li><li aria-hidden="true">/</li><li aria-current="page">Class 10</li></ol>
      <p class="omt-eyebrow">CBSE &middot; ICSE &middot; State boards &middot; IGCSE</p>
      <h1>Maths Tuition for Class 10: <em>board-ready, chapter by chapter</em></h1>
      <p class="omt-lede">Live online maths tuition for Class 10 with a tutor who specialises in the board years. All 14 NCERT chapters taught properly for CBSE, the ICSE syllabus for Council schools, and every question form the board asks: case studies, MCQs and long answers, then timed mock papers until the exam holds no surprises.</p>
      <div class="omt-cta-row">
        <a class="omt-btn omt-btn--primary" href="/priority-demo" data-pd-book="class10-hero">Book a Priority Demo ${ARROW}</a>
        <a class="omt-btn omt-btn--ghost" href="/courses/cbse-class-10-maths-board-exam-prep-course">See the Class 10 course</a>
      </div>
      ${contactLine('omt-contact-line')}
    </div>
    <ul class="omt-proof" aria-label="Modern Age Coders at a glance">
      <li><b>${esc(BRAND.students)}</b><span>students taught since ${BRAND.founded}</span></li>
      <li><b>${BRAND.rating}</b><span>rating across ${BRAND.reviews} Google reviews</span></li>
      <li><b>14</b><span>NCERT chapters, every one taught live</span></li>
      <li><b>${esc(BRAND.countries)}</b><span>countries, taught in your time zone</span></li>
    </ul>
  </div>
</header>

<section class="omt-section omt-levels" id="levels" aria-labelledby="c10-courses-title">
  <div class="omt-wrap">
    <p class="omt-kicker">Choose your course</p>
    <h2 id="c10-courses-title">Class 10 maths courses</h2>
    <p class="omt-sub">Each course page shows the week-by-week syllabus, the plans and how to enrol.</p>
    <div class="omt-course-grid">
${COURSES.map(([slug, img, tag, title, blurb]) => `      <a class="omt-course" href="/courses/${slug}">
        <span class="omt-course-img"><img src="/content/courses/generated/${slug}/images/${img}" alt="${esc(title)} course thumbnail" width="640" height="360" loading="lazy" decoding="async"></span>
        <span class="omt-course-body"><span class="omt-course-tag">${esc(tag)}</span><span class="omt-course-title">${esc(title)}</span><span class="omt-course-blurb">${esc(blurb)}</span><span class="omt-course-more">View course ${ARROW}</span></span>
      </a>`).join('\n')}
    </div>
  </div>
</section>

<section class="omt-capsule" aria-label="The CBSE Class 10 maths paper">
  <div class="omt-wrap">
    <div class="omt-capsule-card">
      <p class="omt-capsule-lede">The current CBSE Class 10 maths paper rewards more than memorised solutions: roughly half of it is competency-based (case studies, data interpretation and situational problems), about 20 percent is MCQs and about 30 percent is traditional short and long answers. This is where the 80 theory marks come from:</p>
      <ul class="c10-weights" aria-label="Marks by unit, out of 80">
${WEIGHT.map(([u, m]) => `        <li><span>${esc(u)}</span><span class="c10-bar"><i style="width:${(m / 20 * 100).toFixed(0)}%"></i></span><b>${m}</b></li>`).join('\n')}
      </ul>
      <p class="omt-capsule-stat">Rated ${BRAND.rating} across ${BRAND.reviews} Google reviews</p>
    </div>
  </div>
</section>

<section class="omt-section" aria-labelledby="c10-method-title">
  <div class="omt-wrap">
    <p class="omt-kicker">How we prepare</p>
    <h2 id="c10-method-title">How Class 10 maths tuition works</h2>
    <ol class="omt-method">
${METHOD.map(([h, p], i) => `      <li><span class="omt-method-n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join('\n')}
    </ol>
  </div>
</section>

<section class="omt-section omt-section--tint" aria-labelledby="c10-ch-title">
  <div class="omt-wrap">
    <p class="omt-kicker">Full syllabus</p>
    <h2 id="c10-ch-title">All 14 Class 10 maths chapters we teach</h2>
    <p class="omt-sub">The CBSE NCERT chapters, taught in order with board-style questions at the end of each. ICSE and state-board students follow their own syllabus the same way.</p>
    <ol class="c10-chapters">
${CHAPTERS.map(([c, t]) => `      <li><h3>${esc(c)}</h3><p>${esc(t.join(' · '))}</p></li>`).join('\n')}
    </ol>
  </div>
</section>

<section class="omt-section" aria-labelledby="c10-strat-title">
  <div class="omt-wrap">
    <p class="omt-kicker">Exam technique</p>
    <h2 id="c10-strat-title">Board exam strategy for Class 10 maths</h2>
    <p class="omt-sub">Knowing maths and scoring well in the boards are different skills. We teach both.</p>
    <ul class="c10-strategy">
${STRATEGY.map((s) => `      <li>${CHECK}<span>${esc(s)}</span></li>`).join('\n')}
    </ul>
  </div>
</section>

<section class="omt-section omt-section--tint" id="plans" aria-labelledby="c10-plans-title">
  <div class="omt-wrap">
    <p class="omt-kicker">Plans</p>
    <h2 id="c10-plans-title">Clear monthly plans</h2>
    <p class="omt-sub">Every plan is live with a specialist mentor, and each class runs about one hour. Billing is monthly and you can cancel any time; quarterly and yearly plans cost less.</p>
    <div class="omt-plans" data-india-only="true">
      <article class="omt-plan"><h3>Group batch</h3><p class="omt-plan-price"><span data-price="maths.india.group">₹1,499</span><small>/ month</small></p><ul><li>${CHECK}<span>2 live classes a week</span></li><li>${CHECK}<span>Up to 10 students</span></li><li>${CHECK}<span>Chapter tests and mock papers</span></li></ul></article>
      <article class="omt-plan omt-plan--featured"><span class="omt-plan-badge">Most popular</span><h3>Mini batch</h3><p class="omt-plan-price"><span data-price="maths.india.miniBatch">₹2,999</span><small>/ month</small></p><ul><li>${CHECK}<span>2 live classes a week</span></li><li>${CHECK}<span>Just 3 to 4 students</span></li><li>${CHECK}<span>Near one-to-one attention</span></li></ul></article>
      <article class="omt-plan"><h3>1-on-1</h3><p class="omt-plan-price"><span data-price="maths.india.personal">₹4,999</span><small>/ month</small></p><ul><li>${CHECK}<span>1 private class a week, 4 a month</span></li><li>${CHECK}<span>Your own mentor and pace</span></li><li>${CHECK}<span>Timings that suit you</span></li></ul></article>
    </div>
    <div class="omt-plans omt-plans--two" data-intl-only="true" hidden>
      <article class="omt-plan"><h3>Group batch</h3><p class="omt-plan-price"><span data-price="maths.international.group">$100</span><small>/ month</small></p><ul><li>${CHECK}<span>2 live classes a week</span></li><li>${CHECK}<span>Up to 10 students</span></li><li>${CHECK}<span>Taught in your time zone</span></li></ul></article>
      <article class="omt-plan omt-plan--featured"><span class="omt-plan-badge">Recommended</span><h3>1-on-1</h3><p class="omt-plan-price"><span data-price="maths.international.personal">$150</span><small>/ month</small></p><ul><li>${CHECK}<span>2 private classes a week</span></li><li>${CHECK}<span>Your own mentor and pace</span></li><li>${CHECK}<span>Timings that suit you</span></li></ul></article>
    </div>
    <div class="omt-plans-foot">
      <a class="omt-btn omt-btn--primary" href="/priority-demo" data-pd-book="class10-plans">Book a Priority Demo ${ARROW}</a>
      <a class="omt-btn omt-btn--ghost" href="/courses/cbse-class-10-maths-board-exam-prep-course">Enrol in the Class 10 course</a>
      <a class="omt-link" href="/pricing">See the full pricing page</a>
    </div>
  </div>
</section>

<section class="omt-section" aria-labelledby="c10-rev-title">
  <div class="omt-wrap">
    <p class="omt-kicker">What families say</p>
    <h2 id="c10-rev-title">Rated ${BRAND.rating} across ${BRAND.reviews} Google reviews</h2>
    <p class="omt-sub">Modern Age Coders teaches both maths and coding. These are real reviews from our families, quoted as written.</p>
    <div class="omt-reviews">
${REVIEWS.map(([q, n, r]) => `      <figure class="omt-review"><div class="omt-stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</div><blockquote>&ldquo;${esc(q)}&rdquo;</blockquote><figcaption><b>${esc(n)}</b><span>${esc(r)}</span></figcaption></figure>`).join('\n')}
    </div>
    <p class="omt-more"><a class="omt-link" href="/love">Read the full Wall of Love</a></p>
  </div>
</section>

<section class="omt-promise" aria-labelledby="c10-promise-title">
  <div class="omt-wrap">
    <div class="omt-promise-card">
      <p class="omt-promise-eyebrow">Our promise</p>
      <h2 id="c10-promise-title">The world's best learning experience, open to <em>everyone</em>.</h2>
      <ul>
        <li><b>World-class instructors</b><span>Every class is taught by a tutor who specialises in the board years.</span></li>
        <li><b>No compromise on quality</b><span>Every lesson, test and piece of feedback is held to the highest standard.</span></li>
        <li><b>Education for everyone</b><span>Learners aged ${esc(BRAND.ages)}, in ${esc(BRAND.countries)} countries.</span></li>
      </ul>
      <div class="omt-promise-close"><p>If you want the highest quality, Modern Age Coders is the right choice.</p><a class="omt-btn omt-btn--primary" href="/priority-demo" data-pd-book="class10-promise">Book a Priority Demo</a></div>
    </div>
  </div>
</section>

<section class="omt-section omt-section--tint" id="faq" aria-labelledby="c10-faq-title">
  <div class="omt-wrap omt-wrap--narrow">
    <p class="omt-kicker">FAQ</p>
    <h2 id="c10-faq-title">Questions parents ask about Class 10 maths tuition</h2>
    <div class="omt-faq">
${FAQS.map(([q, a], i) => `      <details class="omt-faq-item"${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><div class="omt-faq-a"><p>${a}</p></div></details>`).join('\n')}
    </div>
  </div>
</section>

<section class="omt-section omt-prose" aria-label="More about Class 10 maths">
  <div class="omt-wrap omt-wrap--narrow">
    <h2>What makes Class 10 maths challenging</h2>
    <p>Class 10 is the first year the maths marks travel with the student, and it introduces several ideas at once: trigonometry, coordinate geometry and quadratic equations all arrive with a new way of thinking. A student who memorised Class 9 methods often finds the jump steep, and gaps from earlier years start to cost marks.</p>
    <p>The fix is rarely more worksheets. It is finding the earliest gap, rebuilding the idea underneath, and then practising the board's own question forms until they feel routine.</p>
    <h2>Board exam preparation that works</h2>
    <p>Scoring well needs exam skills as well as maths: time management, step-by-step presentation for method marks, and knowing which questions to attempt first. Those skills are practised in timed mocks, not explained once. See <a class="omt-link" href="/online-maths-tuition">online maths tuition for every class</a> and the <a class="omt-link" href="/courses/cbse-class-10-maths-board-exam-prep-course">CBSE Class 10 Maths Board Prep course</a>.</p>
  </div>
</section>

<section class="omt-final" aria-labelledby="c10-final-title">
  <div class="omt-wrap">
    <div class="omt-final-card">
      <h2 id="c10-final-title">Ready to prepare properly for Class 10 maths?</h2>
      <p>Book a Priority Demo: a full live class of ${esc(PD.length)}, today or tomorrow, with a mentor reserved for you. You get a written skill report afterwards, and the fee is adjusted against your first month if you enrol.</p>
      <div class="omt-cta-row omt-cta-row--center">
        <a class="omt-btn omt-btn--primary" href="/priority-demo" data-pd-book="class10-final">Book a Priority Demo ${ARROW}</a>
        <a class="omt-btn omt-btn--light" href="/courses/cbse-class-10-maths-board-exam-prep-course">See the Class 10 course</a>
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
if (/premium/i.test(html.replace(linkMesh, ''))) throw new Error('"Premium" in copy');
fs.writeFileSync(PAGE, html);
console.log('wrote', path.relative(ROOT, PAGE), (html.length / 1024).toFixed(1) + ' KB,', FAQS.length, 'FAQs');
