'use strict';
// CLEP College Algebra prep (ag- exam door; UK and US exams cluster, row US061). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from College
// Board's CLEP site; copies in keyword-research-2026-09/uk-us-gap/src/clep-college-algebra-prep/:
//  - clep.collegeboard.org/clep-exams/college-algebra: "covers material that's usually taught in a one-semester college
//    course in algebra"; "Nearly half the test is made up of routine problems requiring basic algebraic skills"; "places
//    little emphasis on arithmetic calculations"; "approximately 60 questions to be answered in 90 minutes. Some of these
//    are pretest questions that won't be scored."; TI-30XS MultiView scientific (nongraphing) calculator integrated;
//    routine (about 50%) and nonroutine (about 50%); topics Algebraic operations (25%), Equations and inequalities (25%),
//    Functions and their properties (30%), Number systems and operations (20%) with sub-lists; functions note "linear,
//    polynomial (degree <= 5), rational, absolute value, power, exponential, logarithmic, and piecewise defined"; ACE
//    credit-granting score 50, 3 semester hours; "Each institution reserves the right to set its own credit-granting
//    policy". (Registration and guide prices on the page are not printed.)
//  - scores/understand-scores: raw score converted "to a scaled score that ranges from 20 to 80"; ACE recommends credit
//    "for a score of 50 or higher, but individual institutions can set their own CLEP credit policies"; "Points aren't
//    deducted for wrong or skipped answers."
//  - scores/get-scores: "Scores are displayed on your test screen immediately following the CLEP test" (except College
//    Composition and Spanish with Writing); two free score sends during registration; scores for exams on or after July 1,
//    2022 available for 10 years.
//  - clep-exam-policies and test-day: may not retake an exam of the same title "within three months"; misconduct list.
//  - about-remote-proctoring: remote exams have "the same timing, content, format, and on-screen experience" as a test
//    center; requirements must be met before registering.
//  - colleges-that-recognize-clep/understanding-colleges-clep-policies: check the college grants credit for the exam and
//    that it counts toward the degree; "Some colleges won't grant credit for a CLEP exam if you've already attempted a
//    college-level course closely aligned with that exam."
//  - prepare-for-an-exam/study-resources-by-exam/college-algebra: listed resources "none of these sources are designed
//    specifically for CLEP exam preparation".
// Our own material, labelled: worked examples (inverse of f(x) = (2x + 3)/(x - 1) is (x + 3)/(x - 2); log_2 48 - log_2 3
// = 4; the x^3 term of (x + 2)^5 is 40x^3; (3 + 2i)/(1 - i) = 1/2 + 5/2 i), a Python check, a twelve-item practice set
// and a six-week plan for a homeschool or adult learner.
// Lesson family: functions and their inverses, with logarithm rules as inverse operations.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST PREP', blurb: 'CLEP College Algebra for credit by exam: about 60 questions in 90 minutes, the four topic weights, the 20 to 80 scale and the ACE score of 50.' },
  slug: 'clep-college-algebra-prep',
  code: 'cca',
  accent: '#89461F',
  accentRationale: 'CLEP College Algebra prep: a burnt sienna #89461F from the US allocation table, 6.69:1 on paper #FBF8F2 and 5.76:1 on the deepest tint, warm and apart from the green placement pages',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'CLEP College Algebra prep',
  title: 'CLEP College Algebra Prep: Exam Topics, Scores, Practice',
  description: 'CLEP College Algebra prep: about 60 questions in 90 minutes, topic weights from College Board, the 20 to 80 scale, ACE score of 50, and an original practice set.',
  ogDescription: 'CLEP College Algebra can replace a one-semester college course with a single 90-minute exam, if your college accepts it. What is tested, how it is scored, and how to prepare.',
  twitterDescription: 'CLEP College Algebra explained from College Board, with worked examples and practice.',
  pageName: 'CLEP College Algebra Prep',
  webPageDescription: 'A guide for homeschool, high school and adult learners to the CLEP College Algebra exam, from College Board\'s own exam, score and policy pages, with worked examples, a Python check and an original practice set.',
  courseDescription: 'College algebra for the CLEP exam, taught live to learners from age 15, homeschoolers and working adults among them, as a class of 15 to 20 or as private lessons.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'CLEP College Algebra prep',
  navLinks: [
    { href: '#exam', label: 'The exam' },
    { href: '#topics', label: 'Topics' },
    { href: '#scores', label: 'Scores and credit' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#plan', label: 'Practice and plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Credit by exam &middot; College Board CLEP',
  h1: 'CLEP College Algebra prep',
  lede: 'The CLEP College Algebra exam lets a student show, in one 90-minute sitting, that they already know the algebra of a one-semester college course. Homeschool families use it to turn a strong algebra year into transcript credit; adults use it to skip a requirement they learned at work or years ago. Whether it earns credit is your college\'s decision, not College Board\'s. This page sets out what College Board says is on the exam and how it is scored, how to check a college\'s policy, and how to prepare, with examples and practice we wrote.',
  secondaryCta: { href: '#topics', label: 'See the four topic areas' },
  wa: 'Hello Modern Age Coders, I want to prepare for the CLEP College Algebra exam to earn college credit. Could I book a free first class?',
  heroNote: 'Live math teaching since 2020 &middot; 10,000+ students &middot; homeschoolers and adult learners welcome',
  spec: [
    ['Program', 'CLEP, College Board'],
    ['Questions', 'About 60, some unscored'],
    ['Time', '90 minutes'],
    ['Calculator', 'Built-in TI-30XS, nongraphing'],
    ['Score scale', '20 to 80'],
    ['ACE credit score', '50, for 3 semester hours'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'CLEP College Algebra is a College Board credit-by-exam test covering a one-semester college algebra course: about 60 questions in 90 minutes, with a built-in TI-30XS scientific calculator. Scores run from 20 to 80, and the American Council on Education recommends 3 semester hours for a 50, though each college sets its own policy. Our College Math Placement Test Prep course includes it, taught live online in a group class or one to one.',

  picks: {
    eyebrow: 'Credit-level algebra',
    h2: 'Three courses for CLEP College Algebra',
    lede: 'The placement and credit course covers the exam directly; the other two fill gaps below it or continue beyond it.',
    items: [
      { course: 'college-math-placement-test-prep-course', code: 'CCA / 01', title: 'Placement and credit-exam prep', note: 'CLEP College Algebra, ALEKS PPL, ACCUPLACER and TSIA2.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'CCA / 02', title: 'High school math', note: 'Algebra 2 and precalculus, the ground the exam stands on.' },
      { course: 'college-mathematics-complete-masterclass', code: 'CCA / 03', title: 'College math', note: 'Calculus and beyond, once the credit is earned.' }
    ]
  },

  sections: [
    {
      id: 'exam', tint: 'tint', eyebrow: 'The exam',
      h2: 'How long is the CLEP College Algebra exam, and how many questions does it have?',
      lede: 'College Board says the exam contains approximately 60 questions to be answered in 90 minutes, and that some of them are pretest questions that do not count.',
      body: [
        { kind: 'table', caption: 'CLEP College Algebra at a glance (clep.collegeboard.org College Algebra exam page and score pages, read 31 October 2026)', head: ['Feature', 'What College Board says'], rows: [
          ['Content level', 'Material usually taught in a one-semester college course in algebra'],
          ['Length', 'Approximately 60 questions in 90 minutes, some unscored pretest questions'],
          ['Problem mix', 'About 50% routine problems, about 50% nonroutine problems'],
          ['Calculator', 'TI-30XS MultiView scientific (nongraphing), built into the exam software'],
          ['Arithmetic', 'The test "places little emphasis on arithmetic calculations"'],
          ['Scoring', 'One point per correct answer; nothing deducted for wrong or skipped answers'],
          ['Score scale', 'A scaled score from 20 to 80'],
          ['ACE recommendation', 'Credit-granting score 50; 3 semester hours'],
          ['Retest', 'Not the same exam title within three months']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://clep.collegeboard.org/clep-exams/college-algebra" rel="noopener" target="_blank">CLEP College Algebra exam</a>, <a class="ag-inline-link" href="https://clep.collegeboard.org/scores/understand-scores" rel="noopener" target="_blank">Understand Scores</a> and <a class="ag-inline-link" href="https://clep.collegeboard.org/clep-exam-policies" rel="noopener" target="_blank">CLEP Exam Policies</a>, read 31 October 2026. CLEP is a College Board trademark; we are not connected with College Board or CLEP.' },
        { kind: 'two', mt: true,
          leftH3: 'Routine and nonroutine, half and half',
          left: [
            'College Board says "Nearly half the test is made up of routine problems requiring basic algebraic skills; the remainder involves solving nonroutine problems in which test takers must demonstrate their understanding of concepts."',
            'Routine problems reward fluency: factoring, solving, simplifying. Nonroutine problems reward understanding: what a function\'s graph says about its inverse, or why an equation has no real solution.'
          ],
          rightH3: 'Ninety minutes for about sixty questions',
          right: [
            'That is about a minute and a half per question on average, our arithmetic. Routine items should take less, which banks time for the nonroutine ones.',
            'Because wrong answers cost nothing, College Board\'s advice is to answer every question. A blank can only score zero.'
          ] }
      ]
    },
    {
      id: 'topics', tint: 'deep', eyebrow: 'Topics',
      h2: 'What is on the CLEP College Algebra exam?',
      lede: 'Four topic areas with approximate weights. Functions are the largest single share, at about 30 percent.',
      body: [
        { kind: 'table', caption: 'CLEP College Algebra topics and approximate share of questions (College Board College Algebra exam page, read 31 October 2026)', head: ['Topic area', 'Share', 'What it includes'], rows: [
          ['Algebraic operations', '25%', 'Operations with exponents; factoring and expanding polynomials; operations with algebraic expressions; absolute value; properties of logarithms'],
          ['Equations and inequalities', '25%', 'Linear, quadratic and absolute value equations and inequalities; systems of equations and inequalities; exponential and logarithmic equations'],
          ['Functions and their properties', '30%', 'Definition, interpretation and representation; domain and range; evaluation; algebra of functions; graphs (intercepts, symmetry, transformations); inverse functions'],
          ['Number systems and operations', '20%', 'Real numbers; complex numbers; factorials and binomial theorem']
        ], numCols: [1] },
        { kind: 'p', mt: true, html: 'College Board adds that each test may contain "a variety of functions, including linear, polynomial (degree &le; 5), rational, absolute value, power, exponential, logarithmic, and piecewise defined." It also says test takers are expected to be familiar with "currently taught algebraic vocabulary, symbols, and notation", so the notation itself, f(x), f inverse, i for the square root of -1, has to be second nature.' },
        { kind: 'two', mt: true,
          leftH3: 'The calculator is a tool, not a crutch',
          left: [
            'The built-in TI-30XS MultiView is available "during the entire testing time", and College Board says students "are expected to know how and when to make appropriate use of the calculator."',
            'It is nongraphing, so it will evaluate a logarithm or a power but will not draw the graph for you. Students used to graphing calculators should practise reading graphs from equations by hand.'
          ],
          rightH3: 'Where students usually lose marks',
          right: [
            'Hold your own Algebra 2 notes up against the number systems list. Complex numbers, factorials and the binomial theorem are not part of every high school course, and inverse functions are easy to skim.',
            'By College Board\'s weights, functions and number systems together make up about half the exam, which is why our plan gives them the most time.'
          ] }
      ]
    },
    {
      id: 'scores', tint: 'tint', eyebrow: 'Scores and credit',
      h2: 'What score do you need on CLEP College Algebra to get credit?',
      lede: 'The American Council on Education recommends 50, but your college decides. Check its policy before you register.',
      body: [
        { kind: 'two',
          leftH3: 'How the score is built',
          left: [
            'College Board explains that the raw score, the number of questions answered correctly, "is then converted to a scaled score that ranges from 20 to 80, and this is the score that appears on your score report."',
            'For this exam, the American Council on Education (ACE) recommends a credit-granting score of 50 and 3 semester hours, but College Board notes that "individual institutions can set their own CLEP credit policies."'
          ],
          rightH3: 'When you see it',
          right: [
            'For multiple-choice exams like College Algebra, College Board says "Scores are displayed on your test screen immediately following the CLEP test," and a test-taker copy is available in the My CLEP portal within 24 hours.',
            'Colleges usually need an official score. College Board mentions two free score sends during registration, and says scores for exams taken on or after July 1, 2022 remain available for 10 years.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>Confirm your college grants credit for College Algebra.</b> College Board tells students to read the CLEP policy on the college\'s website.',
          '<b>Check the score it requires and the credit it gives.</b> It may differ from ACE\'s 50 and 3 semester hours.',
          '<b>Check that the credit counts toward your degree.</b> College Board suggests consulting degree requirements or an academic adviser.',
          '<b>Check for restrictions.</b> College Board warns that "Some colleges won\'t grant credit for a CLEP exam if you\'ve already attempted a college-level course closely aligned with that exam."',
          '<b>Choose a test center or remote proctoring.</b> College Board says remote exams have "the same timing, content, format, and on-screen experience" as a test center, but your computer and room must meet its requirements first.',
          '<b>Use your score sends.</b> Send the score to the college at registration while the sends are free.'
        ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples',
      h2: 'Four college algebra problems, worked the way the exam rewards',
      lede: 'Our own examples, one from each topic area. They are not CLEP items and do not reproduce College Board\'s sample questions.',
      body: [
        { kind: 'table', caption: 'Functions (ours): find the inverse of f(x) = (2x + 3)/(x - 1)', head: ['Step', 'Reasoning'], rows: [
          ['1. Swap the roles', 'Write y = (2x + 3)/(x - 1), then solve for x in terms of y'],
          ['2. Clear the fraction', 'y(x - 1) = 2x + 3, so xy - y = 2x + 3'],
          ['3. Gather x terms', 'xy - 2x = y + 3, so x(y - 2) = y + 3'],
          ['4. Solve and rename', 'x = (y + 3)/(y - 2), so f inverse (x) = (x + 3)/(x - 2)'],
          ['5. Read the domains', 'f excludes x = 1 and never outputs 2; the inverse excludes x = 2 and never outputs 1']
        ] },
        { kind: 'table', mt: true, caption: 'Algebraic operations (ours): evaluate log base 2 of 48 minus log base 2 of 3 without a calculator', head: ['Step', 'Reasoning'], rows: [
          ['1. Use the quotient rule', 'log_b M - log_b N = log_b (M/N)'],
          ['2. Simplify', 'log_2 (48/3) = log_2 16'],
          ['3. Recognise the power', '16 = 2^4, so the value is 4']
        ] },
        { kind: 'table', mt: true, caption: 'Number systems (ours): the x^3 term of (x + 2)^5, and (3 + 2i)/(1 - i)', head: ['Problem', 'Reasoning', 'Result'], rows: [
          ['Binomial term', 'Choose x three times from five factors: C(5, 3) = 10 ways, and the other two factors give 2^2 = 4', '10 x 4 x^3 = 40x^3'],
          ['Complex division, step 1', 'Multiply top and bottom by the conjugate 1 + i', '(3 + 2i)(1 + i) / ((1 - i)(1 + i))'],
          ['Complex division, step 2', 'Top: 3 + 3i + 2i + 2i^2 = 1 + 5i; bottom: 1 - i^2 = 2', '1/2 + 5/2 i']
        ] },
        { kind: 'code', mt: true, label: 'check_clep_examples.py (our example)', lang: 'Python 3', code: 'from math import comb, log2\n\ndef f(x):\n    return (2 * x + 3) / (x - 1)\n\ndef f_inv(x):\n    return (x + 3) / (x - 2)\n\nfor x in [0, 3, -4, 10]:\n    assert abs(f_inv(f(x)) - x) < 1e-12\n\nprint(log2(48) - log2(3))          # 4.0\nprint(comb(5, 3) * 2 ** 2)          # 40, the x^3 coefficient\nprint((3 + 2j) / (1 - 1j))           # (0.5+2.5j)', note: 'Output: 4.0, then 40, then (0.5+2.5j). The loop checks that f inverse undoes f at four points. A student who can write this check understands what an inverse is, which is exactly what the nonroutine questions probe.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Practice and plan',
      h2: 'An original CLEP College Algebra practice set and a six-week plan',
      lede: 'Twelve problems we wrote across the four topic areas, with answers, then a plan for a homeschool student or adult studying alongside work.',
      body: [
        { kind: 'table', caption: 'Credit-level practice we wrote, answer key in the final column', head: ['#', 'Topic area', 'Problem', 'Answer'], rows: [
          ['1', 'Operations', 'Simplify (x^-2 y^3)^2 x^5', 'x y^6'],
          ['2', 'Operations', 'Factor completely 3x^3 - 12x', '3x(x - 2)(x + 2)'],
          ['3', 'Operations', 'Write 2 log x + log 5 as one logarithm', 'log (5x^2)'],
          ['4', 'Equations', 'Solve |2x - 3| &lt; 7', '-2 &lt; x &lt; 5'],
          ['5', 'Equations', 'Solve 3^(2x - 1) = 81', 'x = 5/2'],
          ['6', 'Equations', 'Solve x + y = 7 and 2x - y = 2', 'x = 3, y = 4'],
          ['7', 'Functions', 'Domain of g(x) = the square root of (6 - 2x)', 'x &le; 3'],
          ['8', 'Functions', 'If f(x) = x^2 and g(x) = x + 3, find f(g(-1))', '4'],
          ['9', 'Functions', 'Shift y = |x| right 2 and down 5', 'y = |x - 2| - 5'],
          ['10', 'Number systems', 'Simplify i^7', '-i'],
          ['11', 'Number systems', 'Evaluate 6! / (4! 2!)', '15'],
          ['12', 'Number systems', 'Is the square root of 50 rational?', 'No: 5 root 2']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Week 1: diagnose.</b> Try College Board\'s free College Algebra sample questions and our set above. Note which topic area each miss belongs to.',
          '<b>Week 2: algebraic operations.</b> Exponent laws, factoring patterns and the three log rules, until routine items are quick.',
          '<b>Week 3: equations and inequalities.</b> Absolute value, quadratic and exponential equations, and systems by elimination.',
          '<b>Week 4: functions, part one.</b> Domain and range, composition and transformations of every function type College Board lists.',
          '<b>Week 5: functions, part two, and number systems.</b> Inverses, complex numbers, factorials and the binomial theorem.',
          '<b>Week 6: rehearsal.</b> Timed mixed practice using the TI-30XS trial version College Board points to, aiming for about a minute and a half per question, then register.'
        ] },
        { kind: 'p', mt: true, html: 'College Board\'s College Algebra study-resources page lists free outside materials, and says plainly that "none of these sources are designed specifically for CLEP exam preparation." We teach from the exam\'s published topic list, with our own problems, and use College Board\'s free sample questions as they are.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Is CLEP the right move?',
    h2: 'Four situations where families consider CLEP College Algebra',
    lede: 'Our description of who usually benefits, and what to check first.',
    table: { caption: 'When CLEP College Algebra may fit (ours; your college\'s policy decides)', head: ['Situation', 'What to check first'], rows: [
      ['1. Homeschool student after Algebra 2', 'Whether target colleges accept the credit'],
      ['2. High school senior who has finished precalculus', 'Whether the credit duplicates a dual enrollment course'],
      ['3. Adult returning to a degree', 'Whether the degree requires College Algebra or another math course'],
      ['4. Military learner', 'Advice from the education service officer, as College Board suggests']
    ] },
    left: { h3: 'For homeschool parents', ps: [
      'Make the CLEP policy of two or three target colleges the first step, not the last.',
      'A strong Algebra 2 and precalculus year is usually the right preparation; the exam then adds a focused review.'
    ] },
    right: { h3: 'For adult learners', ps: [
      'Six weeks of steady evening study is a realistic plan for most adults who once took Algebra 2.',
      'Retesting the same title must wait three months, so book when you are ready.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses from Algebra 1 to college calculus',
    lede: 'Live classes for students earning credit early and for those continuing once they have it.',
    bands: [
      { num: 'I', h3: 'Groundwork', sub: 'Before college algebra', courses: [
        { code: 'CCA / G / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra 1 in depth.' },
        { code: 'CCA / G / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra 2 and precalculus.' },
        { code: 'CCA / G / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Checking algebra in Python.' }
      ] },
      { num: 'II', h3: 'Credit and placement', sub: 'College algebra level', courses: [
        { code: 'CCA / E / 01', slug: 'college-math-placement-test-prep-course', title: 'Placement and CLEP prep', blurb: 'CLEP, ALEKS, ACCUPLACER.' },
        { code: 'CCA / E / 02', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Functions in depth.' },
        { code: 'CCA / E / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For statistics requirements.' }
      ] },
      { num: 'III', h3: 'Beyond the credit', sub: 'College math', courses: [
        { code: 'CCA / C / 01', slug: 'college-mathematics-complete-masterclass', title: 'College math', blurb: 'Calculus to linear algebra.' },
        { code: 'CCA / C / 02', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'AB and BC.' },
        { code: 'CCA / C / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Math for data science', blurb: 'Statistics and linear algebra.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'College algebra lessons around school, home or work',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Daytime for homeschoolers, evenings for adults.' },
      { time: 'Weekends', l: 'Longer mixed-practice sessions.' },
      { time: '1-on-1', l: 'Planned to your test date and college policy.' }
    ],
    cells: [
      { h3: 'Topic weights first', p: 'Functions get the most time.' },
      { h3: 'Routine to nonroutine', p: 'Fluency, then understanding.' },
      { h3: 'TI-30XS practice', p: 'The exam\'s own calculator type.' },
      { h3: 'Homeschool friendly', p: 'Daytime batches available.' },
      { h3: 'Adults welcome', p: 'Evening study for working learners.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Older students often put algebra to work in code. See <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews left on Google by families and learners, exactly as written.',

  fees: {
    h2: 'Fees',
    lede: 'Our classes have a monthly fee in US dollars and no fixed term. The CLEP exam itself is paid for separately, to College Board, and is not part of what we charge.',
    free: ['A free first class', 'Bring your target college\'s policy', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Paced to your test date', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions learners ask',
    h2: 'CLEP College Algebra: common questions',
    items: [
      { q: 'How many questions are on the CLEP College Algebra exam?', a: 'College Board says the exam contains approximately 60 questions to be answered in 90 minutes. Some are pretest questions that are not scored, and you cannot tell which ones they are.' },
      { q: 'What is a passing score on CLEP College Algebra?', a: 'CLEP has no single pass mark. Scores run from 20 to 80, and the American Council on Education recommends credit for a 50, but each college sets its own required score.' },
      { q: 'How many credits is CLEP College Algebra worth?', a: 'ACE recommends 3 semester hours for a score of 50. Your college may grant a different amount, or none, so check its CLEP policy.' },
      { q: 'Can you use a calculator on CLEP College Algebra?', a: 'Yes. A TI-30XS MultiView scientific calculator is built into the exam software for the whole test. It is nongraphing, and College Board expects you to know when to use it.' },
      { q: 'What topics are on CLEP College Algebra?', a: 'College Board lists algebraic operations (25%), equations and inequalities (25%), functions and their properties (30%) and number systems and operations (20%), including complex numbers and the binomial theorem.' },
      { q: 'Is CLEP College Algebra hard?', a: 'It covers a full semester of college algebra, and about half the questions are nonroutine. Students who are fluent through Algebra 2 and review functions and complex numbers usually find it manageable.' },
      { q: 'Is there a penalty for guessing on CLEP?', a: 'No. College Board says points are not deducted for wrong or skipped answers, so answer every question.' },
      { q: 'Can you retake CLEP College Algebra?', a: 'Yes, but not within three months of the earlier attempt. College Board says a retake inside that period is invalid, the score is canceled and fees are forfeited.' },
      { q: 'When are your CLEP College Algebra classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with College Board or CLEP?', a: 'No. We are an independent online school. We teach the published topics with our own problems and point you to College Board\'s free sample questions.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More math help for credit seekers and homeschool families.',
    items: [
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'Planning the years before CLEP.' },
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'The course the exam builds on.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'Functions and inverses in depth.' },
      { href: '/calculus-tutoring-online', label: 'Calculus tutoring', p: 'The next course after the credit.' },
      { href: '/online-math-tutor-12th-grade', label: 'Twelfth grade math', p: 'For seniors earning early credit.' },
      { href: '/online-math-tutor-cost', label: 'Math tutor cost', p: 'How tutoring is usually priced.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us which college\'s policy you are working to and when you hope to test. The teacher will check your functions and number-system skills first, since they are half the exam.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how our classes work</a>, or look through <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'Teachers work live from India with daytime slots for homeschoolers and evening slots for adults across US time zones. WhatsApp is the easiest first contact.',
    formNote: 'Free first class; no card required.'
  },

  footer: {
    cols: [
      { h4: 'Credit and college math', links: [
        { href: '/algebra-2-tutoring-online', label: 'Algebra 2' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus' },
        { href: '/calculus-tutoring-online', label: 'Calculus' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/online-math-tutor-12th-grade', label: 'Grade 12 math' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'log_2 16 = 4'
  },

  personalityCss: `
.ag-root.ag-cca .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-cca .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-cca .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cca .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cca .ag-section-head h2 { max-width: 32ch; }
`,

  dossier: {
    curriculumAuthority: 'College Board CLEP pages, read raw 31 October 2026: College Algebra exam page (one-semester course; nearly half routine; about 60 questions in 90 minutes with unscored pretest questions; TI-30XS MultiView; topic weights 25, 25, 30, 20 with sub-lists; function types; ACE score 50 and 3 semester hours; institutions set their own policy); Understand Scores (20 to 80 scale; ACE 50; no deduction for wrong or skipped answers); Get Scores (on screen immediately; two free score sends; 10 years for exams from July 1, 2022); Exam Policies and Test Day (three-month retest rule); About Remote Proctoring; Understanding Colleges\' CLEP Policies; College Algebra study resources.',
    localProject: 'Our worked examples: inverse of f(x) = (2x + 3)/(x - 1) is (x + 3)/(x - 2); log_2 48 - log_2 3 = 4; the x^3 term of (x + 2)^5 is 40x^3; (3 + 2i)/(1 - i) = 1/2 + 5/2 i; a Python check script (outputs 4.0, 40, (0.5+2.5j)); twelve-item practice set and six-week plan. Lesson family: functions and inverses, logarithms as inverse operations.',
    requiredMentions: ['Nearly half the test is made up of routine problems requiring basic algebraic skills', 'places little emphasis on arithmetic calculations', 'TI-30XS MultiView', 'converted to a scaled score that ranges from 20 to 80', 'individual institutions can set their own CLEP credit policies', 'Some colleges won\'t grant credit for a CLEP exam if you\'ve already attempted a college-level course closely aligned with that exam.', 'none of these sources are designed specifically for CLEP exam preparation', 'the same timing, content, format, and on-screen experience', 'x = (y + 3)/(y - 2), so f inverse (x) = (x + 3)/(x - 2)', 'Top: 3 + 3i + 2i + 2i^2 = 1 + 5i'],
    sources: [
      { claim: 'CLEP College Algebra exam: content, length, calculator, topic weights, ACE recommendation.', url: 'https://clep.collegeboard.org/clep-exams/college-algebra' },
      { claim: 'CLEP score scale 20 to 80, ACE 50, scoring rules.', url: 'https://clep.collegeboard.org/scores/understand-scores' },
      { claim: 'CLEP exam policies: three-month retest rule.', url: 'https://clep.collegeboard.org/clep-exam-policies' },
      { claim: 'Understanding colleges\' CLEP policies.', url: 'https://clep.collegeboard.org/colleges-that-recognize-clep/understanding-colleges-clep-policies' },
      { claim: 'Getting CLEP scores and score sends.', url: 'https://clep.collegeboard.org/scores/get-scores' }
    ],
    rejectedClaims: [
      'Exam and study guide prices shown on College Board\'s page: not printed (no typed currency on US pages).',
      'Which colleges accept CLEP College Algebra: not listed; each institution sets its own policy and College Board offers a policy search.',
      'College Board sample questions: not reproduced; examples and practice are ours.',
      'Credit or score promises for our classes: refused.',
      'Any affiliation with College Board or CLEP: none.'
    ]
  }
};
