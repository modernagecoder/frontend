'use strict';
// GCSE Higher maths grade 9 tutor (ag- maths door, England; UK and US exams cluster, row UK022).
// A tutoring door for Higher tier students aiming at grades 7 to 9. Not a tier comparison (that is
// /gcse-maths-foundation-vs-higher).
// Sources, read raw on 31 October 2026 (gov.uk content API; AQA and Pearson PDFs via curl and macOS PDFKit; raw copies
// in keyword-research-2026-09/uk-us-gap/src/gcse-higher-maths-grade-9-tutor/ and the AQA and Pearson folders):
//  - Ofqual, "Setting standards for new GCSEs in 2017" (12 September 2014). Verbatim: "Broadly the same proportion of
//    students will achieve a grade 7 and above as currently achieve an A and above"; "For each examination, the top
//    20 per cent of those who get grade 7 or above will get a grade 9 – the very highest performers" (restated without
//    the dash); "Beyond 2017, our aim will be to maintain the standards set in that first year of awarding."
//  - Ofqual, "Options for setting the grade 9 boundary in GCSEs" (22 April 2016): Education Datalab modelled a "20%
//    approach", a "Tailored approach" and a "50% approach".
//  - AQA Report on the examination, 8300/3H, June 2025. Verbatim: "Access to the formula sheet helped eliminate some
//    errors owing to incorrect recall but in this paper, the volume of a cylinder was poorly remembered."; "for some
//    students their digits 4 and 9 were often indistinguishable"; "Students must use HB pencil on diagrams and cross
//    out work they do not wish to have marked with a single line when they have had more than one attempt.";
//    "Premature rounding lost the accuracy mark in some questions."; "Calculators were sometimes not in the correct mode
//    for degrees when used for trigonometry."; "Writing 'ans' in working did not gain method marks without a numerical
//    answer being seen."; "Miscopying numbers that were given in the question was commonly seen"; Q15 listing instead of
//    the product rule "took a long time and rarely resulted in them gaining any marks"; Q16 "had the largest number of
//    non-attempts and greatest proportion of zero marks on the whole paper"; Q20(b) "Almost no students referred to the
//    factorised form of the quadratic from part (a) in their reason."; Q22 "Students who used a sketch of the quadratic
//    curve tended to be more successful"; Q24 "performed considerably above expectation"; struggled list includes
//    "writing an algebraic argument" and "recalling when to use dotted or solid lines when plotting inequalities".
//  - AQA 8300 specification v1.1: Higher AO weightings AO1 40, AO2 30, AO3 30 (approx %); Higher tier grades 4 to 9.
//  - Pearson Edexcel 1MA1 specification, Issue 2: "4b - present proofs (higher tier only)"; "Higher tier: grades 4 to 9
//    (grade 3 allowed)."; progression to "GCE Mathematics and GCE Further Mathematics".
//  - DfE GCSE maths subject content: "Only the more highly attaining students will be assessed on the content
//    identified by bold type."
// Our own: the illustration of the 20 per cent rule, the "last third" plan, the three worked examples, the practice
// set and the presentation checklist.
// Spine: grades 7 to 9 are decided by written argument in the last third of each Higher paper. The 2025 report shows
// the top marks lost to proofs left blank, earlier parts not reused, and presentation. Lesson family: a tier tutoring
// door for the top grades, built on the Higher calculator report and Ofqual's grade 9 rule.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'GRADE 9 MATHS', blurb: 'Grades 7 to 9 are decided by written argument in the last third of each Higher paper. What the 2025 examiners saw.' },
  slug: 'gcse-higher-maths-grade-9-tutor',
  code: 'ghg',
  accent: '#0B5447',
  accentRationale: 'GCSE Higher grade 9 maths: a deep green-teal (#0B5447, 8.35:1 on #FBF8F2 and 7.18:1 on the deepest paper tint), greener than the Edexcel teal and well away from the Foundation navy',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'GCSE Higher maths grade 9 tutor',
  title: 'GCSE Higher Maths Grade 9 Tutor | How Grades 7 to 9 Are Won',
  description: 'A GCSE Higher maths grade 9 tutor online: how Ofqual set grade 9, where top marks went in the June 2025 Higher papers, and a plan for grades 7, 8 and 9.',
  ogDescription: 'Grade 9 in GCSE Maths is decided in the last third of each Higher paper, where marks reward a written argument. How we tutor for it.',
  twitterDescription: 'GCSE Higher maths for grades 7 to 9: Ofqual\'s grade 9 rule, the June 2025 Higher report, worked proofs and a plan.',
  pageName: 'GCSE Higher Maths Grade 9 Tutor',
  webPageDescription: 'Live online tutoring for GCSE Maths Higher tier students aiming at grades 7 to 9 on AQA, Edexcel or OCR, built from Ofqual\'s grading decisions and AQA\'s June 2025 Higher report.',
  courseDescription: 'Live online teaching for GCSE Maths Higher tier: algebraic argument, proof, functions, circle geometry and the multi-step problems that decide grades 7, 8 and 9.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'GCSE Higher maths grade 9',
  navLinks: [
    { href: '#grade9', label: 'How grade 9 works' },
    { href: '#top', label: 'Where top marks go' },
    { href: '#argue', label: 'Worked arguments' },
    { href: '#plan', label: 'The plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; GCSE Maths Higher tier &middot; grades 7, 8 and 9',
  h1: 'GCSE Higher maths grade 9 tutor',
  lede: 'Most students who reach grade 7 in GCSE Maths can do almost every technique on the Higher paper. What separates a 7 from a 9 is the last third of each paper: the questions that ask a student to explain, to prove, to use part (a) to answer part (b). In AQA\'s June 2025 Higher calculator paper, the question with the most blank answers and the most zero scores was one that asked for a written argument, and on another, almost nobody used the factorised form they had just found. This page explains how grade 9 was defined by Ofqual, shows where the top marks went in 2025, works three arguments of our own in full, and sets out how we tutor towards grades 7, 8 and 9.',
  secondaryCta: { href: '#top', label: 'Where top marks go' },
  wa: 'Hello Modern Age Coders, I would like a free first class with a GCSE Higher maths tutor for grades 7 to 9.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; From Ofqual\'s grading decisions and AQA\'s June 2025 Higher report',
  spec: [
    ['Tier', 'GCSE Maths Higher'],
    ['Grades', '4 to 9 on every board'],
    ['Target', 'Grades 7, 8 and 9'],
    ['Focus', 'Argument, proof, the last third'],
    ['Boards', 'AQA, Edexcel, OCR'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Grade 9 is the top grade in GCSE Maths, and it can only be reached on Higher tier, which awards 4 to 9 for AQA, Pearson Edexcel and OCR candidates in Years 10 and 11. A grade 9 maths tutor helps a Higher student turn secure technique into full marks on the hardest questions: proofs, explanations, multi-part problems and accurate presentation. Modern Age Coders runs this tutoring live online, either 1-on-1 or in a class of 15 to 20, inside its GCSE Maths: Foundation and Higher course, using past papers from whichever board the school has chosen. The first class is free. We are independent of every exam board and do not promise grades.',

  picks: {
    eyebrow: 'Courses for grades 7 to 9',
    h2: 'Three courses for a Higher student aiming high',
    lede: 'The GCSE course is the core. The other two are for students who want to look past the specification while they are still in Year 10 or 11.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'GH / 01', title: 'GCSE Maths: Foundation and Higher', note: 'The full Higher content on the student\'s board, with the last third of each paper practised every week.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'GH / 02', title: 'A Level Maths', note: 'A head start on the course a grade 7 to 9 student usually takes next.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'GH / 03', title: 'Competition Maths', note: 'Non-routine problems and proof, the habits grade 9 questions reward.' }
    ]
  },

  sections: [
    {
      id: 'grade9', tint: 'tint', eyebrow: 'How grade 9 works',
      h2: 'How is grade 9 decided in GCSE Maths?',
      lede: 'Grade 9 is not a fixed percentage. When Ofqual set the standard for the first award in 2017, it tied grade 9 to the students who reached grade 7, and it has aimed to hold that standard since.',
      body: [
        { kind: 'p', html: 'Ofqual\'s 2014 announcement for the first 9 to 1 GCSEs set out the anchors. At the top end, roughly as many students would reach grade 7 or above as had reached A or above. Then, for the top grade: "For each examination, the top 20 per cent of those who get grade 7 or above will get a grade 9", the very highest performers. And for the years after: "Beyond 2017, our aim will be to maintain the standards set in that first year of awarding." In 2016, Ofqual published research by Education Datalab comparing that "20% approach" with two alternatives before the first award.' },
        { kind: 'table', mt: true, caption: 'Higher tier at a glance (from the AQA 8300 and Pearson 1MA1 specifications)', head: ['Feature', 'What the specifications say', 'Why it matters for grades 7 to 9'], rows: [
          ['Grades on Higher', '4 to 9 on every board; Pearson adds "grade 3 allowed"', 'The scale is set across the whole Higher entry'],
          ['Marks for routine technique (AO1)', 'About 40 per cent on Higher (AQA)', 'Technique alone does not reach grade 7'],
          ['Marks for reasoning (AO2)', 'About 30 per cent on Higher (AQA)', 'Explanations and proofs are a large share'],
          ['Marks for problem solving (AO3)', 'About 30 per cent on Higher (AQA)', 'Unfamiliar, multi-step questions'],
          ['Proof', 'Pearson\'s strand "4b - present proofs (higher tier only)"', 'Written proof is examined only at Higher'],
          ['Bold content', 'DfE: assessed only for "the more highly attaining students"', 'Higher-only topics carry the hardest marks']
        ] },
        { kind: 'p', html: 'Here is what the 20 per cent rule means in plain numbers, as our own illustration. In that first award, if 1,000 students in an exam reached grade 7 or above, about 200 of them would have been given a 9. Grade 9 was designed to mark out the top fifth of the top grades. That is why a student at a solid grade 7 usually has the techniques already: the extra marks come from the questions that most grade 7 students leave unfinished.' },
        { kind: 'source', html: 'Where this comes from: the Ofqual news release on <a class="ag-inline-link" href="https://www.gov.uk/government/news/setting-standards-for-new-gcses-in-2017" rel="noopener" target="_blank">standards for the new GCSEs</a>, September 2014, and <a class="ag-inline-link" href="https://www.gov.uk/government/publications/options-for-setting-the-grade-9-boundary-in-gcses" rel="noopener" target="_blank">Options for setting the grade 9 boundary in GCSEs</a> (2016); plus the AQA 8300 (version 1.1) and Pearson 1MA1 (Issue 2) specifications, checked on 31 October 2026.' }
      ]
    },
    {
      id: 'top', tint: 'deep', eyebrow: 'Where top marks go',
      h2: 'Where did Higher students lose the top marks in June 2025?',
      lede: 'AQA\'s report on its June 2025 Higher calculator paper, 8300/3H, is the most detailed of the year. Its findings fall into two groups: the argument questions, and presentation.',
      body: [
        { kind: 'table', caption: 'The argument questions, from AQA\'s 8300/3H report, June 2025', head: ['Question type', 'What AQA wrote'], rows: [
          ['A written argument about signs in a product', 'It "had the largest number of non-attempts and greatest proportion of zero marks on the whole paper"'],
          ['Explaining why a sequence has no primes', '"Almost no students referred to the factorised form of the quadratic from part (a) in their reason."'],
          ['Solving a quadratic inequality', '"Students who used a sketch of the quadratic curve tended to be more successful"'],
          ['A counting problem', 'Students who listed combinations instead of using the product rule found it "took a long time and rarely resulted in them gaining any marks"'],
          ['Areas of similar triangles', 'It "performed considerably above expectation", with almost half of students on full marks']
        ] },
        { kind: 'p', html: 'The last row is the encouraging one. A demanding late question on similar shapes went well because the method had been taught thoroughly. The first two rows are the warning. The question with the most zero scores asked a student to explain, in words and algebra, why something must be true. The no-primes question had already given students the tool in part (a); the marks in part (b) went to those who used it. Both are teachable. Neither is a matter of knowing more topics.' },
        { kind: 'table', mt: true, caption: 'Presentation, from the same report', head: ['Habit', 'What AQA wrote'], rows: [
          ['Rounding too early', '"Premature rounding lost the accuracy mark in some questions."'],
          ['Calculator mode', '"Calculators were sometimes not in the correct mode for degrees when used for trigonometry."'],
          ['Writing "ans"', '"Writing \'ans\' in working did not gain method marks without a numerical answer being seen."'],
          ['Copying numbers', '"Miscopying numbers that were given in the question was commonly seen", especially with four or five digits'],
          ['Handwriting', '"for some students their digits 4 and 9 were often indistinguishable"'],
          ['Second attempts', 'Students must "cross out work they do not wish to have marked with a single line"']
        ] },
        { kind: 'p', html: 'The report also says the formulae sheet "helped eliminate some errors owing to incorrect recall but in this paper, the volume of a cylinder was poorly remembered." A sheet does not replace knowing which formula a problem needs, and Ofqual\'s rules for the sheets bar questions that can be answered just by copying from them. For a grade 9 student, every item in the presentation table is a mark that should never be lost, because each one is lost after the mathematics has been done correctly.' },
        { kind: 'source', html: 'From AQA\'s Higher Paper 3 report for the summer 2025 series (8300/3H), published with the <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/assessment-resources" rel="noopener" target="_blank">AQA 8300 assessment resources</a>. We describe the questions by type and reproduce none of them.' }
      ]
    },
    {
      id: 'argue', tint: 'tint', eyebrow: 'Worked arguments',
      h2: 'Three grade 9 style arguments we wrote, worked in full',
      lede: 'Our own questions, written to practise the habits the 2025 report rewarded. They are not AQA, Edexcel or OCR questions.',
      body: [
        { kind: 'two',
          leftH3: 'Argument 1: use part (a) in part (b)',
          left: [
            '<strong>Question (ours).</strong> (a) Factorise n² + 4n + 3. (b) Hence explain why n² + 4n + 3 is never prime when n is a positive whole number.',
            '<strong>(a)</strong> Two numbers that multiply to 3 and add to 4 are 1 and 3, so n² + 4n + 3 = (n + 1)(n + 3).',
            '<strong>(b)</strong> When n is a positive whole number, n + 1 is at least 2 and n + 3 is at least 4. So the expression is the product of two whole numbers, each bigger than 1.',
            '<strong>Conclusion.</strong> A prime has no factors other than 1 and itself, so a product of two whole numbers both greater than 1 cannot be prime. Hence n² + 4n + 3 is never prime.'
          ],
          rightH3: 'What earns the marks',
          right: [
            '"Hence" is an instruction: the factorised form is the argument. Statements like "it is always even" are false here (n = 2 gives 15) and earn nothing.',
            'The decisive step is saying why both factors are bigger than 1. Without it, the student has factorised again, not explained.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Argument 2: the product rule for counting',
          left: [
            '<strong>Question (ours).</strong> A code has three digits. The first is odd, the second is even, and the third is any digit except the first. How many codes are possible?',
            '<strong>First digit.</strong> Odd digits are 1, 3, 5, 7, 9: five choices.',
            '<strong>Second digit.</strong> Even digits are 0, 2, 4, 6, 8: five choices. Forgetting 0 is the trap.',
            '<strong>Third digit.</strong> Any of the ten digits except the first: nine choices. Total: 5 × 5 × 9 = <strong>225</strong>.'
          ],
          rightH3: 'Why not list?',
          right: [
            'Listing 225 codes is slow and error-prone, which is exactly what AQA saw. The product rule turns the question into three short sentences, each with a reason.',
            'Writing the choices as a sentence ("five odd digits") is the presentation habit: an examiner can follow and credit each factor separately.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Argument 3: area in similar shapes',
          left: [
            '<strong>Question (ours).</strong> Two similar triangles have corresponding sides of 4 cm and 10 cm. The smaller has area 12 cm². Find the area of the larger.',
            '<strong>Length scale factor.</strong> 10 ÷ 4 = 2.5.',
            '<strong>Area scale factor.</strong> Areas scale by the square: 2.5² = 6.25.',
            '<strong>Area.</strong> 12 × 6.25 = <strong>75 cm²</strong>. Using 2.5 instead of 6.25 would give 30 cm², a common part-marks answer.'
          ],
          rightH3: 'Why this one went well in 2025',
          right: [
            'The 2025 report said a similar-shapes question late on the paper performed well because the topic had been "learned thoroughly". That is the model: one method, practised until automatic.',
            'Grade 9 students should know the full chain: lengths by k, areas by k², volumes by k³.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, with answers).</strong> (1) Prove that the difference between the squares of two consecutive odd numbers is always a multiple of 8. (2) How many four-digit numbers have no repeated digits? (3) Two similar cylinders have heights 6 cm and 9 cm; the smaller has volume 80 cm³; find the larger volume. (4) Solve 2x² &minus; x &minus; 6 &ge; 0. <strong>Answers:</strong> (1) (2n + 1)² &minus; (2n &minus; 1)² = 8n, a multiple of 8 for any integer n; (2) 9 × 9 × 8 × 7 = 4536; (3) the scale factor is 1.5, so the volume factor is 3.375 and the volume is 270 cm³; (4) (2x + 3)(x &minus; 2) &ge; 0, so x &le; &minus;1.5 or x &ge; 2, found from a sketch of the curve.' }
      ]
    },
    {
      id: 'plan', tint: '', eyebrow: 'The plan',
      h2: 'How do you get a grade 9 in GCSE Maths?',
      lede: 'Secure the first two thirds of every paper so that time is left, then practise the last third deliberately. The plan is ours, built from the evidence above.',
      body: [
        { kind: 'ol', items: [
          '<strong>Prove the first two thirds are secure.</strong> On full Higher papers from the student\'s board, the early and middle questions should be close to full marks. If they are not, that comes first.',
          '<strong>Keep a "last third" notebook.</strong> Every late question attempted goes in, with the first line the student wrote and the line they should have written.',
          '<strong>Practise writing, not just solving.</strong> Two proofs or explanations a week, each ending with a sentence that says what has been shown.',
          '<strong>Train the "hence" reflex.</strong> Whenever a question has parts, ask what part (a) gives part (b). The 2025 report shows how much this is worth.',
          '<strong>Sketch before solving.</strong> Quadratic inequalities, graphs and regions are drawn roughly first. AQA noted sketchers did better.',
          '<strong>Fix presentation for good.</strong> No early rounding, degree mode checked, numbers copied twice, single-line crossings out, clear 4s and 9s.',
          '<strong>Full papers under time from spring of Year 11.</strong> The aim is to reach the last third with at least 25 minutes left, which is our rule of thumb, not a board rule.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Grade 9 and A level',
          left: [
            'Pearson\'s specification lists GCE Mathematics and GCE Further Mathematics among the routes after GCSE. Sixth forms set their own entry requirements for A level maths, so check the one you are applying to.',
            'Students aiming at grade 9 often enjoy starting the next course early. Our <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths page</a> and <a class="ag-inline-link" href="/further-maths-tuition-online">further maths page</a> explain how.'
          ],
          rightH3: 'What we will and will not say',
          right: [
            'We will tell a family honestly whether the papers show a 7, an 8 or a 9 within reach, and which questions are holding the grade down.',
            'We will not promise a grade 9. The rule that defines it means it is always a small share of the top grades.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four rungs from grade 7 to grade 9',
    lede: 'Each rung is visible on full Higher papers, marked against the board\'s own scheme.',
    table: { caption: 'Where a Higher student aiming at grade 9 should be', head: ['Rung', 'Usually by', 'What should be true'], rows: [
      ['1. First two thirds secure', 'End of Year 10', 'Early and middle questions close to full marks on full papers'],
      ['2. Presentation clean', 'Autumn of Year 11', 'No marks lost to rounding, mode, copying or handwriting across three papers'],
      ['3. Last third attempted', 'Mocks in Year 11', 'Every late question started in writing, none left blank'],
      ['4. Arguments complete', 'Spring of Year 11', 'Proofs and explanations finished with a concluding sentence']
    ] },
    left: { h3: 'Rung two is the quickest gain', ps: [
      'Presentation marks come back within weeks once the habits are named.',
      'Students curious about where proof leads may like <a class="ag-inline-link" href="/maths-olympiad-training-uk">our olympiad training page</a>.'
    ] },
    right: { h3: 'Rung four takes longest', ps: [
      'Writing a complete argument is a skill built over months, a proof at a time.',
      'Classes ease off in the exam weeks.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for strong Higher students',
    lede: 'The GCSE itself, the skills behind the hardest questions, and what follows.',
    bands: [
      { num: 'I', h3: 'Higher GCSE', sub: 'Grades 7 to 9', courses: [
        { code: 'UK / GH1 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE Maths', blurb: 'Higher content on AQA, Edexcel or OCR, with late questions every week.' },
        { code: 'UK / GH1 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'For a strong student whose algebra is still the weak link.' },
        { code: 'UK / GH1 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Cumulative frequency, histograms and conditional probability.' }
      ] },
      { num: 'II', h3: 'Thinking beyond the paper', sub: 'Proof and problem solving', courses: [
        { code: 'UK / GH2 / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Non-routine problems and written proof.' },
        { code: 'UK / GH2 / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Testing conjectures with Python before proving them.' },
        { code: 'UK / GH2 / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Fast, checkable mental arithmetic for the non-calculator paper.' }
      ] },
      { num: 'III', h3: 'After the GCSE', sub: 'Sixth form', courses: [
        { code: 'UK / GH3 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, mechanics and statistics.' },
        { code: 'UK / GH3 / 02', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'Core pure and applied options.' },
        { code: 'UK / GH3 / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE and Additional Maths', blurb: 'Extra algebra and calculus depth for curious students.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How grade 9 tutoring runs',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our teachers are in India and all times are in UK time.',
    slots: [
      { time: 'After school', l: 'Most Year 10 and 11 students.' },
      { time: 'Evening', l: 'Around sport, music and homework.' },
      { time: 'Weekend morning', l: 'Time for a full Higher paper.' }
    ],
    cells: [
      { h3: 'The board\'s own papers', p: 'Higher past papers and mark schemes from the student\'s board, with the late questions reread in class.' },
      { h3: 'Arguments in writing', p: 'Two proofs or explanations a week, each finished with a concluding sentence.' },
      { h3: 'Presentation audit', p: 'Rounding, calculator mode, copying and handwriting checked on every paper.' },
      { h3: 'Beyond the syllabus', p: 'Occasional problems from competitions and A level, for students who want the stretch.' },
      { h3: 'First class free', p: 'One live class on Higher questions, with no payment taken.' },
      { h3: 'Group or 1-on-1', p: 'A Higher group of 15 to 20 aiming at the top grades, or a single student.' }
    ]
  },

  projectsH2: 'Projects from our students\' lessons',
  projectsLede: 'A small sample of work made in class, none of it graded. <a class="ag-inline-link" href="/student-labs">Student labs</a> has more.',
  reviewsLede: 'Parents\' reviews from Google, unchanged.',

  fees: {
    h2: 'Fees for Higher maths tutoring',
    lede: 'The first class costs nothing. After that, one monthly fee, smaller for a group place than for 1-on-1, charged only once the course and a weekly slot are in place, with no contract.',
    free: ['A live class on Higher questions', 'A first look at the last third', 'Book with a phone number'],
    group: ['15 to 20 students at Higher', 'One teacher to the summer series', 'A late-paper question set weekly', 'A short monthly report'],
    one: ['A teacher for one student', 'Paced to the student\'s target grade', 'Useful for a grade 8 to 9 push']
  },

  faq: {
    eyebrow: 'Grade 9 questions',
    h2: 'What students ask about grades 7 to 9 in GCSE Maths',
    items: [
      { q: 'How is grade 9 calculated in GCSE Maths?', a: 'For the first award in 2017, Ofqual said the top 20 per cent of those getting grade 7 or above in each exam would get a 9, and it has aimed to maintain that standard since. The actual boundary is set after each series is marked.' },
      { q: 'What percentage do you need for a grade 9 in maths?', a: 'There is no fixed percentage. Boundaries are set every series for each board and tier, so check the board\'s published boundaries for recent series and aim for a margin above them on full papers.' },
      { q: 'Can you get a grade 9 on Foundation tier?', a: 'No. Foundation tier awards grades 1 to 5. Grades 6 to 9 are only available on Higher tier.' },
      { q: 'What topics are on the hardest Higher questions?', a: 'Often algebraic proof, functions, circle theorems and circle equations, conditional probability and multi-part problems. AQA\'s June 2025 report also named written arguments and using an earlier part of a question.' },
      { q: 'Why do strong students lose marks on Higher papers?', a: 'AQA\'s June 2025 Higher calculator report lists premature rounding, calculators in the wrong mode, writing ans instead of a number, miscopying figures and unclear handwriting, all after the maths was right.' },
      { q: 'Is a grade 7 enough for A level maths?', a: 'Sixth forms and colleges set their own entry requirements, so check the one you are applying to. Many students aiming at A level also practise some of its content early.' },
      { q: 'Do you need to learn proofs for GCSE Maths?', a: 'Yes, at Higher tier. Pearson\'s specification lists presenting proofs as a Higher-only element, and AQA\'s 2025 report named writing an algebraic argument as a weak area.' },
      { q: 'When are lessons held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is UK time.' },
      { q: 'Which boards do you tutor for Higher?', a: 'AQA, Pearson Edexcel and OCR. The Higher content is shared nationally, and we practise on the past papers of the student\'s own board.' },
      { q: 'Can you guarantee a grade 9?', a: 'No. Grade 9 is defined as a small share of the top grades, so no tutor can promise it honestly. We show families what the papers say and we are not connected with any board.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for strong GCSE students',
    lede: 'The tier, the grades, and what to study next.',
    items: [
      { href: '/gcse-maths-foundation-vs-higher', label: 'Foundation vs Higher', p: 'How tier entry is decided.' },
      { href: '/gcse-maths-grades-explained', label: 'GCSE maths grades explained', p: 'What each grade from 1 to 9 means.' },
      { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'The three boards compared', p: 'Paper layouts, marks and boundaries.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'The usual next step after a top grade.' },
      { href: '/is-a-level-further-maths-worth-it', label: 'Is A level further maths worth it?', p: 'For students who want the most maths.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages in one hub.' }
    ]
  },

  start: {
    h2: 'Book a free Higher maths class',
    lede: 'Give us a number and we will call at a UK time that works. The class uses late Higher questions from the student\'s board and ends with a frank view of which grade the work points to.',
    readFirst: 'Want to read first? The <a class="ag-inline-link" href="/courses/gcse-mathematics-mastery">GCSE Maths course page</a> lists every Higher topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our approach.',
    note: 'The quickest route is WhatsApp, free from a UK mobile. Our team in India answers from a +91 number.',
    formNote: 'No card, no contract, just one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'GCSE Maths', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/gcse-maths-calculator-vs-non-calculator-papers', label: 'Calculator papers' },
        { href: '/gcse-maths-tutor-cost-uk', label: 'Tutor costs' },
        { href: '/gcse-maths-grades-explained', label: 'Grades' }
      ] },
      { h4: 'Beyond GCSE', links: [
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/maths-olympiad-training-uk', label: 'Olympiad training' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Higher tier maths for grades 7 to 9, live in UK time'
  },

  personalityCss: `
.ag-root.ag-ghg .ag-hero h1 { letter-spacing: -0.03em; font-weight: 740; }
.ag-root.ag-ghg .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-ghg .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-ghg .ag-table caption { text-align: left; font-weight: 700; letter-spacing: 0.01em; }
.ag-root.ag-ghg .ag-table td:first-child { width: 30%; }
.ag-root.ag-ghg .ag-steps li { margin-bottom: 12px; }
`,

  dossier: {
    curriculumAuthority: 'England, GCSE Mathematics Higher tier (all boards), grades 4 to 9. Ofqual, Setting standards for new GCSEs in 2017 (2014): grade 7 and above broadly as A and above; for each examination the top 20 per cent of those at grade 7 or above get grade 9; aim to maintain the first-year standard beyond 2017. Ofqual, Options for setting the grade 9 boundary (2016): 20%, tailored and 50% approaches modelled by Education Datalab. AQA 8300 v1.1 Higher AO weightings 40, 30, 30. Pearson 1MA1 Issue 2: grade 3 allowed; 4b present proofs (higher tier only); progression to GCE Mathematics and Further Mathematics. DfE: bold content for the more highly attaining students. AQA 8300/3H June 2025 report: formula sheet and cylinder volume; presentation (4 and 9, HB pencil, single-line crossing out, miscopying, premature rounding, degree mode, ans); product rule listing; argument question with most non-attempts and zeros; factorised form not used; sketching helped; similar triangles above expectation.',
    localProject: 'Grades 7 to 9 are won in the last third. A tutoring door for strong Higher students: Ofqual\'s grade 9 rule from the 2017 first award (top 20 per cent of those at grade 7 or above) with our own illustration, a Higher-tier table from the AQA and Pearson specifications, then two tables from AQA\'s June 2025 3H report, one on argument questions (most non-attempts, the unused factorised form, sketching, listing, a similar-shapes success) and one on presentation. Three original worked arguments (a hence-never-prime proof, a product-rule count and an area scale factor) with an original practice set, a seven-step plan, and honest limits on grade promises. Lesson family: a tier tutoring door for top grades.',
    requiredMentions: [
      'For each examination, the top 20 per cent of those who get grade 7 or above will get a grade 9',
      'Beyond 2017, our aim will be to maintain the standards set in that first year of awarding.',
      'had the largest number of non-attempts and greatest proportion of zero marks on the whole paper',
      'Almost no students referred to the factorised form of the quadratic from part (a) in their reason.',
      'Students who used a sketch of the quadratic curve tended to be more successful',
      'Premature rounding lost the accuracy mark in some questions.',
      'the volume of a cylinder was poorly remembered',
      'performed considerably above expectation',
      'Keep a "last third" notebook.'
    ],
    sources: [
      { claim: 'Ofqual, Setting standards for new GCSEs in 2017: grade 7 and grade 9 rules, maintaining standards.', url: 'https://www.gov.uk/government/news/setting-standards-for-new-gcses-in-2017' },
      { claim: 'Ofqual, Options for setting the grade 9 boundary in GCSEs (2016).', url: 'https://www.gov.uk/government/publications/options-for-setting-the-grade-9-boundary-in-gcses' },
      { claim: 'AQA Report on the examination, 8300/3H, June 2025: argument questions, presentation, formula sheet.', url: 'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/assessment-resources' },
      { claim: 'AQA GCSE Mathematics 8300 specification v1.1: Higher AO weightings and grades.', url: 'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification' },
      { claim: 'Pearson Edexcel 1MA1 specification, Issue 2: grade 3 allowed, proofs Higher only, progression.', url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/mathematics/2015/specification-and-sample-assesment/gcse-maths-2015-specification.pdf' }
    ],
    rejectedClaims: [
      'Current grade 9 boundaries or the share of students awarded grade 9 in 2025: not read at a primary source, so not quoted.',
      'Sixth form entry grades for A level maths: set by each provider, so no figure is given.',
      'Whether the 20 per cent rule is still applied mechanically after 2017: Ofqual says it aims to maintain the 2017 standard, which the page states without claiming more.',
      'Any promised grade 9: declined.'
    ]
  }
};
