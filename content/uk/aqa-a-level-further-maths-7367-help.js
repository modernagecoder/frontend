'use strict';
// AQA A level Further Mathematics 7367 help (ag- exam door, UK and US exams cluster Phase 2, row UK038).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/aqa-a-level-further-maths-7367-help/):
//  - AQA A-level Further Mathematics (7367) specification, "For teaching from September 2017 onwards", "For exams in
//    June 2019 onwards", Version 1.1, 20 October 2017 (PDF linked from aqa.org.uk/subjects/mathematics/a-level/
//    mathematics-7367). Verbatim: "This qualification is linear. Linear means that students will sit all their exams at
//    the end of the course."; "builds on the skills, knowledge and understanding set out in the whole GCSE (9–1) subject
//    content for mathematics and the subject content for AS and A-level mathematics"; "All students must study this
//    core content."; "Students must study two of these options."; options "Optional application 1 – mechanics",
//    "Optional application 2 – statistics", "Optional application 3 – discrete mathematics" (restated without dashes);
//    Paper 1 and Paper 2 each "May assess content from the following sections: A: Proof, B: Complex numbers, C:
//    Matrices, D: Further algebra and functions, E: Further calculus, F: Further vectors, G: Polar coordinates, H:
//    Hyperbolic functions, I: Differential equations, J: Numerical methods"; each paper "Written exam: 2 hours", "100
//    marks", "33⅓ % of A-level"; Paper 3 "One question paper answer booklet on Discrete and one question paper answer
//    booklet on Statistics." OR Statistics and Mechanics OR Mechanics and Discrete; "The subject content in sections A
//    to J is compulsory for all students. Students must study two of the optional applications. The optional
//    applications are mechanics (MA to ME), statistics (SA to SH) and discrete (DA to DG)."; option headings MA
//    Dimensional analysis, MB Momentum and collisions, MC Work, energy and power, MD Circular motion, ME Centres of mass
//    and moments; SA Discrete random variables and expectation, SB Poisson distribution, SC Type I and Type II errors,
//    SD Continuous random variables, SE Chi squared tests for association, SF Exponential distribution, SG Inference one
//    sample t-distribution, SH Confidence Intervals; DA Graphs, DB Networks, DC Network flows, DD Linear programming, DE
//    Critical path analysis, DF Game theory for zero-sum games, DG Binary operations; AO weightings Paper 1 and 2: AO1
//    55, AO2 25, AO3 20; Paper 3: AO1 40, AO2 25, AO3 35; overall 50, 25, 25; "Total scaled mark: 300"; "At
//    qualification level different grade boundaries will be published to reflect the different routes through the
//    qualification."; "graded on a six-point scale: A*, A, B, C, D and E"; "Students can re-sit the qualification as
//    many times as they wish, within the shelf life of the qualification."; "There are no previous learning
//    requirements."; DfE discount code 2330, QAN 603/1841/7; private candidates "must be based in the UK"; calculators
//    "an iterative function", "the ability to perform calculations with matrices up to order 3 × 3", statistics;
//    induction "contexts include sums of series, divisibility, and powers of matrices".
// Our own material, labelled on the page: a Paper 3 time plan (our suggestion, not AQA's), a dimensional analysis
// example (pendulum period T = k l^(1/2) g^(-1/2)), a zero-sum game with a saddle point (value 1), a circular motion
// example (0.5 kg, 3 m/s, r = 0.75 m, T = 6 N), a 3 by 3 determinant (13), and a six-question practice set, all checked
// in Python on 31 October 2026. No AQA question is reproduced.
// Spine: two pure papers, one shared option paper. AQA puts both chosen options into a single 2-hour Paper 3 with two
// answer booklets, weighted more heavily towards problem solving (AO3 35 per cent), while Papers 1 and 2 share one
// pure list. Lesson family: splitting one paper between two applied areas.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'AQA 7367', blurb: 'Two pure papers that share one topic list, then a single Paper 3 holding both chosen options, with more problem-solving marks than the others.' },
  slug: 'aqa-a-level-further-maths-7367-help',
  code: 'aqle',
  accent: '#784465',
  accentRationale: 'AQA A level Further Maths 7367: a berry rose #784465 from the cluster allocation, 7.04:1 on #FBF8F2, a shade pinker than the plum of Edexcel 9FM0 and cooler than the rosewood of AQA 7357',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'AQA A level Further Maths 7367 help',
  title: 'AQA A Level Further Maths 7367 Help: Papers and Options',
  description: 'AQA A level Further Maths 7367 help: Papers 1 and 2 pure, Paper 3 with two of mechanics, statistics or discrete, the AO weightings, and live online lessons.',
  ogDescription: 'AQA A-level Further Mathematics 7367 from the specification: the compulsory content A to J, the three optional applications, how Paper 3 holds two of them, and the grading by route.',
  twitterDescription: 'AQA Further Maths 7367: three 2-hour papers, and Paper 3 is two option booklets in one sitting. What that means for preparation.',
  pageName: 'AQA A Level Further Maths 7367 Help',
  webPageDescription: 'Live online teaching for AQA A-level Further Mathematics 7367 students in Years 12 and 13, written from the AQA specification.',
  courseDescription: 'Live online classes for AQA A-level Further Mathematics 7367: compulsory content A to J for Papers 1 and 2, and two of mechanics, statistics or discrete for Paper 3.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'AQA A level Further Maths 7367',
  navLinks: [
    { href: '#papers', label: 'Three papers' },
    { href: '#options', label: 'The options' },
    { href: '#weights', label: 'Weightings' },
    { href: '#examples', label: 'Examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'AQA &middot; A-level Further Mathematics 7367 &middot; Years 12 and 13',
  h1: 'AQA A level Further Maths 7367 help',
  lede: 'AQA A-level Further Mathematics, code 7367, is three 2-hour papers, all taken in the summer of Year 13. Papers 1 and 2 draw on the same list of compulsory pure content. Paper 3 is where the choices sit: it contains two answer booklets, one for each of the two optional applications the student has studied, chosen from mechanics, statistics and discrete mathematics. This page explains that structure, what each option covers, how the marks are weighted and how we teach 7367.',
  secondaryCta: { href: '#options', label: 'Compare the options' },
  wa: 'Hello Modern Age Coders, I would like a free first class for AQA A level Further Maths 7367.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Not connected with AQA',
  spec: [
    ['Qualification', 'AQA A-level Further Mathematics'],
    ['Code', '7367'],
    ['Papers 1 and 2', 'Compulsory content A to J'],
    ['Paper 3', 'Two of mechanics, statistics, discrete'],
    ['Each paper', '2 hours, 100 marks'],
    ['Total', '300 scaled marks'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'What 7367 is',
  capsule: 'AQA A-level Further Mathematics (7367) is a linear A level examined by three 2-hour, 100-mark papers. Papers 1 and 2 may each assess any of the compulsory sections A to J, from proof and complex numbers to numerical methods. Paper 3 holds two answer booklets, one for each optional application studied: mechanics with statistics, statistics with discrete, or mechanics with discrete. Modern Age Coders teaches 7367 live online in its A Level Further Maths course, as a batch of 15 to 20 or 1-on-1, with the first lesson free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Courses for an AQA Further Maths student',
    lede: 'The Further Maths course carries 7367 and all three options. The A level Maths course builds the 7357 base; statistics deepens the statistics option.',
    items: [
      { course: 'a-level-further-maths-course', code: 'AF / 01', title: 'A Level Further Maths', note: 'Sections A to J and any two of the three optional applications.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'AF / 02', title: 'A Level Maths', note: 'The AQA 7357 content that 7367 builds on.' },
      { course: 'statistics-probability-maths-course', code: 'AF / 03', title: 'Statistics and Probability', note: 'Groundwork for the statistics option, SA to SH.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'Three papers',
      h2: 'Which topics can each AQA 7367 paper test?',
      lede: 'Papers 1 and 2 share the compulsory list. Paper 3 holds both chosen options, in separate booklets.',
      body: [
        { kind: 'p', html: 'AQA lists exactly the same content for Paper 1 and Paper 2: each "May assess content from the following sections: A: Proof, B: Complex numbers, C: Matrices, D: Further algebra and functions, E: Further calculus, F: Further vectors, G: Polar coordinates, H: Hyperbolic functions, I: Differential equations, J: Numerical methods". The specification states that "The subject content in sections A to J is compulsory for all students. Students must study two of the optional applications."' },
        { kind: 'table', caption: 'AQA A-level Further Mathematics 7367: the three papers', head: ['Paper', 'What it can assess', 'Time', 'Marks', 'Weight'], rows: [
          ['Paper 1', 'Any of compulsory sections A to J', '120 minutes', '100 marks', '33&frac13; per cent'],
          ['Paper 2', 'Any of compulsory sections A to J', '120 minutes', '100 marks', '33&frac13; per cent'],
          ['Paper 3', 'Two answer booklets: Discrete and Statistics, or Statistics and Mechanics, or Mechanics and Discrete', '120 minutes', '100 marks', '33&frac13; per cent']
        ] },
        { kind: 'source', html: 'Source: AQA A-level Further Mathematics (7367) specification, Version 1.1, section 2, from the <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7367" rel="noopener" target="_blank">AQA 7367 page</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'Two pure papers, one list',
          left: [
            'Because both pure papers draw from A to J, there is no topic that can be safely left for "the other paper". Each paper can test complex numbers, matrices, hyperbolic functions or differential equations.',
            'Expect short one-mark items and long multi-part questions side by side on both.'
          ],
          rightH3: 'One paper, two options',
          right: [
            'Paper 3 is a single 2-hour sitting with a booklet for each option. The student decides how to use the time across the two.',
            'Only three pairings exist, because there are three options and each student studies two. A school usually picks the pair for the whole class.'
          ] }
      ]
    },
    {
      id: 'options', tint: 'deep', eyebrow: 'The options',
      h2: 'What do the AQA Further Maths mechanics, statistics and discrete options cover?',
      lede: 'Mechanics has five sections, statistics eight and discrete seven. They differ in size and in flavour.',
      body: [
        { kind: 'p', html: 'AQA lettering makes the options easy to compare: "The optional applications are mechanics (MA to ME), statistics (SA to SH) and discrete (DA to DG)." The headings below are the specification\'s own; the final column gives our own impression of the students each tends to suit.' },
        { kind: 'table', mt: true, caption: 'The three 7367 optional applications, by section heading', head: ['Option', 'Sections in the specification', 'Our view of who enjoys it'], rows: [
          ['Mechanics (MA to ME)', 'Dimensional analysis; Momentum and collisions; Work, energy and power; Circular motion; Centres of mass and moments', 'Students who like physics and diagrams'],
          ['Statistics (SA to SH)', 'Discrete random variables and expectation; Poisson distribution; Type I and Type II errors; Continuous random variables; Chi squared tests for association; Exponential distribution; Inference with the one sample t-distribution; Confidence intervals', 'Students heading for economics, psychology, medicine or data'],
          ['Discrete (DA to DG)', 'Graphs; Networks; Network flows; Linear programming; Critical path analysis; Game theory for zero-sum games; Binary operations', 'Students drawn to computing, logic and optimisation']
        ] },
        { kind: 'source', html: 'Section headings from the 7367 specification, sections 3.3 to 3.5. The third column is our opinion, not AQA\'s.' },
        { kind: 'p', mt: true, html: 'Binary operations, section DG, is a little unusual: it introduces group-like structure in a discrete course, which some students find the most abstract part of the option. Game theory, section DF, and linear programming, DD, reward careful setting out rather than heavy calculation. On the statistics side, the t-distribution and confidence intervals extend the hypothesis testing of A level Maths into estimation.' },
        { kind: 'ol', mt: true, items: [
          'Find out which pair the school teaches. Ask in Year 12, before the options are timetabled.',
          'Compare it with the student\'s plans: mechanics for engineering and physics, discrete for computer science, statistics for data-heavy subjects. These are our suggestions, not entry rules.',
          'If the student needs a different pair, ask the exams officer whether that is possible; Paper 3 booklets are set by option.',
          'Plan Year 13 so both options get similar teaching time, since both live in one paper.'
        ] }
      ]
    },
    {
      id: 'weights', tint: '', eyebrow: 'Weightings',
      h2: 'How are AQA Further Maths marks weighted and graded?',
      lede: 'Each paper is scaled by one, giving 300 in total. Paper 3 is tilted towards problem solving, and grade boundaries are published by route.',
      body: [
        { kind: 'table', caption: 'Assessment objective weightings for 7367 (approximate per cent), from section 4.2.1', head: ['Objective', 'Paper 1', 'Paper 2', 'Paper 3', 'Overall'], rows: [
          ['AO1 using standard techniques', '55', '55', '40', '50'],
          ['AO2 reasoning and communicating', '25', '25', '25', '25'],
          ['AO3 problem solving and modelling', '20', '20', '35', '25']
        ] },
        { kind: 'p', mt: true, html: 'That AO3 figure for Paper 3, 35 per cent against 20 on the pure papers, tells a student what kind of preparation the option paper rewards: translating situations into mathematics, interpreting results in context and judging models. It is the option paper, not the pure papers, where routine technique counts for least.' },
        { kind: 'p', mt: true, html: 'AQA states: "Students\' final marks will be calculated by adding together the scaled marks for each component, this includes the two optional topics chosen as part of paper 3." Each paper has a scaling factor of one, so the "Total scaled mark: 300" is simply the raw total. AQA then adds: "At qualification level different grade boundaries will be published to reflect the different routes through the qualification." Grades run A* to E, with U below E and no certificate.' },
        { kind: 'table', mt: true, caption: 'Other 7367 rules from section 5', head: ['Rule', 'What AQA says'], rows: [
          ['Re-sits', 'Unlimited while the qualification remains available; always the whole qualification, as it is linear'],
          ['Previous learning', 'None formally required; AQA suggests skills at the level of GCSE Mathematics or equivalent'],
          ['Calculator', 'Required in all assessments; minimum: an iterative function, matrices up to 3 &times; 3, summary statistics and distribution probabilities'],
          ['Private candidates', 'Available; self-taught, home-schooled or tutored students enter through an AQA approved centre and must be based in the UK'],
          ['Codes', 'AQA entry code 7367, DfE discount code 2330, QAN 603/1841/7']
        ] }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Examples, ours',
      h2: 'One example from each option, written by us',
      lede: 'A mechanics, a discrete and a pure example in the style of 7367, plus a practice set. None is an AQA question.',
      body: [
        { kind: 'p', html: '<strong>Our mechanics example, dimensional analysis (MA).</strong> A pendulum\'s period T is thought to depend on its length l and on g, as T = k l<sup>a</sup> g<sup>b</sup> with k dimensionless. Dimensions: T is [T], l is [L], g is [L T<sup>&minus;2</sup>]. Matching powers of L: 0 = a + b. Matching powers of T: 1 = &minus;2b. So b = &minus;&frac12; and a = &frac12;, giving T = k&radic;(l/g). The method predicts the form but never the value of k, a limitation worth stating.' },
        { kind: 'p', mt: true, html: '<strong>Our mechanics example, circular motion (MD).</strong> A 0.5 kg mass moves in a horizontal circle of radius 0.75 m on a smooth table, at 3 m s<sup>&minus;1</sup>, held by a string to the centre. The tension supplies the central force: T = mv<sup>2</sup>/r = 0.5 &times; 9 &divide; 0.75 = 6 N.' },
        { kind: 'p', mt: true, html: '<strong>Our discrete example, game theory (DF).</strong> In a two-person zero-sum game, player A\'s pay-offs are: row 1 gives 3 or &minus;1; row 2 gives 2 or 1, against B\'s columns 1 and 2.' },
        { kind: 'two', mt: true,
          leftH3: 'Play-safe strategies',
          left: [
            'Row minima are &minus;1 and 1, so A\'s play-safe choice is row 2, guaranteeing 1. Column maxima are 3 and 1, so B\'s play-safe choice is column 2, conceding at most 1.'
          ],
          rightH3: 'Stable solution',
          right: [
            'The largest row minimum equals the smallest column maximum, both 1, so there is a saddle point at row 2, column 2. The value of the game is 1, and neither player gains by changing alone.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Our pure example, matrices (C).</strong> For the 3 &times; 3 matrix with rows (1, 2, 0), (0, 1, 3), (2, 0, 1), expanding along the first row gives det = 1(1 &minus; 0) &minus; 2(0 &minus; 6) + 0 = 13. The matrix is non-singular, so it has an inverse and the linear system it represents has a unique solution. AQA\'s required calculator can confirm the determinant; the expansion shows the method.' },
        { kind: 'table', mt: true, caption: 'Six practice questions we wrote for 7367 students (answers checked in Python)', head: ['No.', 'Question (ours)', 'Where it fits', 'Answer'], rows: [
          ['1', 'Express 1 + i&radic;3 in modulus-argument form and find (1 + i&radic;3)<sup>6</sup>.', '1 or 2', '2(cos &pi;/3 + i sin &pi;/3); 64'],
          ['2', 'Show that arsinh(3/4) = ln 2.', '1 or 2', 'ln(3/4 + &radic;(9/16 + 1)) = ln 2'],
          ['3', 'Use the standard formula to find the sum of r<sup>2</sup> for r = 1 to 12.', '1 or 2', '650'],
          ['4', 'A 2 kg block slides from rest down a smooth slope through a vertical drop of 5 m. Find its speed, g = 9.8.', '3, mechanics', '9.90 m s<sup>&minus;1</sup>'],
          ['5', 'X ~ Po(4). Find P(X &le; 1).', '3, statistics', '0.0916'],
          ['6', 'T has an exponential distribution with rate 0.2. Find P(T &gt; 10).', '3, statistics', 'e<sup>&minus;2</sup>, about 0.135']
        ] },
        { kind: 'source', html: 'Written by us on 31 October 2026; no AQA question is reproduced. AQA publishes specimen papers, past papers and examiners\' reports on its <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7367" rel="noopener" target="_blank">7367 resources</a>.' }
      ]
    },
    {
      id: 'paper3', tint: 'deep', eyebrow: 'Paper 3 timing',
      h2: 'How should you split your time in AQA Further Maths Paper 3?',
      lede: 'AQA gives one 2-hour sitting for two option booklets and does not split the clock. Here is how we teach students to manage it.',
      body: [
        { kind: 'p', html: 'The specification describes Paper 3 as "One question paper answer booklet" for each option within a single written exam of 2 hours and 100 marks. It does not set a time for each booklet, so the student plans it. The plan below is our suggestion, not an AQA rule.' },
        { kind: 'ol', mt: true, items: [
          'Spend the first two minutes looking at both booklets and noting the mark total of each.',
          'Start with the option you are stronger in, to bank marks early.',
          'Budget time in proportion to marks, at roughly 1.2 minutes per mark, by our arithmetic.',
          'Set a hard switch point. If you reach it, move to the second booklet even mid-question.',
          'Keep the last ten minutes to return to any part left unfinished in either booklet.'
        ] },
        { kind: 'p', mt: true, html: 'Practising this in mocks matters because the two options feel very different. A discrete question on network flows and a statistics question on confidence intervals ask for different kinds of writing, and switching between them under time pressure is itself a skill.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Two years of 7367, in four stages',
    lede: 'Compulsory pure throughout; options added once the related A level Maths topics are in place.',
    table: { caption: 'Stages through AQA 7367', head: ['Step', 'When', 'Ready when'], rows: [
      ['1. Compulsory core, part one', 'Year 12', 'Complex numbers, matrices, induction and further algebra secure'],
      ['2. First option', 'Late Year 12', 'One option started, often the one closest to A level Maths'],
      ['3. Core part two and second option', 'Year 13', 'Hyperbolic functions, polar coordinates and differential equations; the second option'],
      ['4. Full papers', 'Final two terms', 'Papers 1 and 2 timed; Paper 3 with a practised time plan']
    ] },
    left: { h3: 'Why options are staggered', ps: [
      'Two new applied areas at once, on top of new pure, is a lot for Year 12.',
      'Starting one option earlier spreads the load.'
    ] },
    right: { h3: 'Why Paper 3 gets its own drills', ps: [
      'Its AO3 weighting and its two-booklet format both differ from the pure papers.',
      'We practise it as a separate skill.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around AQA Further Maths',
    lede: 'Grouped by role. The free lesson helps us suggest a fit.',
    bands: [
      { num: 'I', h3: 'For 7367 and 7357', sub: 'Years 12 and 13', courses: [
        { code: 'UK / AF1 / 01', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'Sections A to J and every optional application.' },
        { code: 'UK / AF1 / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'The AQA A level Maths underneath it.' },
        { code: 'UK / AF1 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For the statistics option.' }
      ] },
      { num: 'II', h3: 'Supporting skills', sub: 'Method and computation', courses: [
        { code: 'UK / AF2 / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Network and numerical algorithms in Python, for the discrete option.' },
        { code: 'UK / AF2 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For algebra that slows down further pure.' },
        { code: 'UK / AF2 / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Data science maths', blurb: 'Statistics and linear algebra in applied form.' }
      ] },
      { num: 'III', h3: 'Beyond', sub: 'Admissions and university', courses: [
        { code: 'UK / AF3 / 01', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP', blurb: 'Admissions tests for maths-heavy degrees.' },
        { code: 'UK / AF3 / 02', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'First-year university maths, previewed.' },
        { code: 'UK / AF3 / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Olympiad-style problem solving.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Pure for two papers, options for one',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We fix lessons in UK time, and because our teachers in India do not change their clocks, the UK slot stays put all year.',
    slots: [
      { time: 'After school', l: 'Typical for Further Maths groups.' },
      { time: 'Evening', l: 'Used for 1-on-1 option teaching.' },
      { time: 'Weekend morning', l: 'Fits a full 2-hour paper.' }
    ],
    cells: [
      { h3: 'One pure list', p: 'Sections A to J revised as a single whole.' },
      { h3: 'The right pair', p: 'Options taught to match the student\'s Paper 3.' },
      { h3: 'Context writing', p: 'Interpretation practised for Paper 3\'s heavier AO3.' },
      { h3: 'Time plans', p: 'A switch point rehearsed for the two booklets.' },
      { h3: 'Matrix calculator', p: '3 by 3 work checked on the student\'s own model.' },
      { h3: 'Batch or 1-on-1', p: 'A batch of 15 to 20, or one student with a teacher.' }
    ]
  },

  projectsH2: 'Projects from our lessons',
  projectsLede: 'Built in class as practice, not for assessment. More are in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from parents on Google, left as written.',

  fees: {
    h2: 'Fees for AQA 7367 classes',
    lede: 'For UK students the fee is one monthly amount in US dollars. The first lesson is free; payment begins only after the course and a regular time are settled.',
    free: ['A free 7367 lesson in pure or an option', 'A check of the Paper 3 pairing', 'Arranged by phone or WhatsApp'],
    group: ['A Further Maths batch of 15 to 20', 'Compulsory content across both years', 'Common option pairs taught together', 'Fewer sessions in exam weeks'],
    one: ['One teacher for one student', 'Best for an option the school cannot teach', 'Planned alongside AQA 7357']
  },

  faq: {
    eyebrow: '7367 questions',
    h2: 'What students ask about AQA A level Further Maths',
    items: [
      { q: 'How many papers are in AQA A level Further Maths?', a: 'Three, each a 2-hour written exam worth 100 marks and a third of the A level. Papers 1 and 2 are compulsory content; Paper 3 holds the two options.' },
      { q: 'What options are there in AQA Further Maths?', a: 'Three optional applications: mechanics, statistics and discrete mathematics. Each student studies two of them and answers a booklet on each in Paper 3.' },
      { q: 'What is the difference between AQA Further Maths Paper 1 and Paper 2?', a: 'AQA lists the same compulsory sections, A to J, for both. Either paper can test any of proof, complex numbers, matrices, further algebra, further calculus, further vectors, polar coordinates, hyperbolic functions, differential equations and numerical methods.' },
      { q: 'What is in the AQA Further Maths discrete option?', a: 'Graphs, networks, network flows, linear programming, critical path analysis, game theory for zero-sum games and binary operations, sections DA to DG.' },
      { q: 'Are grade boundaries different for each AQA Further Maths route?', a: 'Yes. AQA says different grade boundaries will be published at qualification level to reflect the different routes through the qualification.' },
      { q: 'How long should I spend on each Paper 3 booklet?', a: 'AQA does not set a split; the paper is one 2-hour sitting. We suggest planning by marks, at about 1.2 minutes per mark, with a fixed point to switch booklets.' },
      { q: 'Do I need AQA A level Maths to take 7367?', a: 'AQA sets no previous learning requirement, but the specification builds on the subject content for AS and A level Maths. In practice students take it with A level Maths.' },
      { q: 'Can I resit AQA Further Maths?', a: 'Yes, with no limit on attempts while the qualification runs. Because 7367 is linear, a resit means sitting all three papers again.' },
      { q: 'When are your 7367 lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are given in UK time.' },
      { q: 'Is Modern Age Coders part of AQA?', a: 'No. Modern Age Coders runs its own classes and has no tie to AQA; every example on this page was written by our teachers.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for AQA mathematicians',
    lede: 'The companion A level, Further Maths in general, and costs.',
    items: [
      { href: '/aqa-a-level-maths-7357-help', label: 'AQA A level Maths 7357 help', p: 'The AQA A level Maths that 7367 sits beside.' },
      { href: '/further-maths-tuition-online', label: 'Further maths tuition online', p: 'Our Further Maths page for every board.' },
      { href: '/is-a-level-further-maths-worth-it', label: 'Is A level Further Maths worth it?', p: 'A plain view of the extra A level.' },
      { href: '/further-maths-tutor-cost-uk', label: 'Further maths tutor cost in the UK', p: 'Budgeting for tuition.' },
      { href: '/aqa-a-level-computer-science-7517-help', label: 'AQA A level Computer Science 7517', p: 'Pairs well with the discrete option.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free 7367 class',
    lede: 'Share a phone number and expect a call at whatever UK time you name. We start by checking which two options the student is entered for, then teach a short topic from one of them.',
    readFirst: 'Browsing first? <a class="ag-inline-link" href="/courses">Course pages</a> show full syllabuses, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains lessons, and <a class="ag-inline-link" href="/student-labs">student labs</a> collects projects.',
    note: 'Reply times are shortest on WhatsApp, free from any UK number. Our team in India answers, from a +91 number.',
    formNote: 'There is nothing to pay and no contract; one reply arrives with a time.'
  },

  footer: {
    cols: [
      { h4: 'AQA maths', links: [
        { href: '/aqa-a-level-maths-7357-help', label: 'AQA A level Maths 7357' },
        { href: '/aqa-a-level-computer-science-7517-help', label: 'AQA Computer Science 7517' },
        { href: '/further-maths-tuition-online', label: 'Further maths tuition' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'Planning', links: [
        { href: '/is-a-level-further-maths-worth-it', label: 'Is Further Maths worth it?' },
        { href: '/further-maths-tutor-cost-uk', label: 'Further maths costs' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'AQA 7367 Further Maths, taught on UK time'
  },

  personalityCss: `
.ag-root.ag-aqle .ag-hero h1 { letter-spacing: -0.02em; font-weight: 700; }
.ag-root.ag-aqle .ag-capsule { border-left-width: 5px; border-radius: 8px; }
.ag-root.ag-aqle .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-aqle .ag-table caption { text-align: left; font-weight: 630; }
.ag-root.ag-aqle .ag-table td:nth-child(2) { min-width: 14ch; }
.ag-root.ag-aqle .ag-steps li { padding-bottom: 5px; }
`,

  dossier: {
    curriculumAuthority: 'AQA A-level Further Mathematics (7367) specification, Version 1.1 (October 2017), exams from June 2019: linear; compulsory sections A to J on both Paper 1 and Paper 2; two of three optional applications (mechanics MA to ME, statistics SA to SH, discrete DA to DG) answered in separate booklets in Paper 3; each paper 2 hours, 100 marks, one third; AO weightings 55/25/20 on Papers 1 and 2, 40/25/35 on Paper 3; total scaled mark 300; grade boundaries published by route; A* to E; re-sits within shelf life; no previous learning requirements; calculator with iterative function, 3 by 3 matrices and statistics; UK-based private candidates; discount code 2330; QAN 603/1841/7.',
    localProject: 'Two pure papers, one shared option paper. The page tabulates the three 7367 papers, lists every section heading of the three optional applications with our view of who enjoys each, gives a four-step route check, tabulates the AO weightings showing Paper 3\'s heavier AO3, sets out the grading and admin rules, then works our own dimensional analysis, circular motion, zero-sum game and 3 by 3 determinant examples, a six-question practice set, and a five-step Paper 3 time plan labelled as our suggestion.',
    requiredMentions: ['One question paper answer booklet', 'The optional applications are mechanics (MA to ME), statistics (SA to SH) and discrete (DA to DG).', 'different grade boundaries will be published to reflect the different routes through the qualification', 'this includes the two optional topics chosen as part of paper 3', 'Game theory for zero-sum games', 'DfE discount code 2330, QAN 603/1841/7', 'AO3 problem solving and modelling', 'giving T = k&radic;(l/g)', 'det = 1(1 &minus; 0) &minus; 2(0 &minus; 6) + 0 = 13', 'T = mv<sup>2</sup>/r = 0.5 &times; 9 &divide; 0.75 = 6 N'],
    sources: [
      { claim: 'AQA A-level Further Mathematics (7367) specification, Version 1.1: papers, compulsory content, optional applications and their sections, AO weightings, scaling, route boundaries, grading, re-sits, prerequisites, calculators, private candidates and codes.', url: 'https://cdn.sanity.io/files/p28bar15/green/b278377bc36beb9b2e64aea1b373db2605751a15.pdf' },
      { claim: 'AQA A-level Further Mathematics 7367 subject page linking the specification and assessment resources.', url: 'https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7367' },
      { claim: 'Department for Education, Further mathematics AS and A level content (April 2016): the common core that AQA sections A to J deliver.', url: 'https://assets.publishing.service.gov.uk/media/5a8185ebe5274a2e8ab54725/GCE_AS_and_A_level_subject_content_for_further_mathematics_with_appendices.pdf' }
    ],
    rejectedClaims: [
      'The mark split between the two Paper 3 booklets: the specification pages read do not state it, so the page plans by marks without naming a split.',
      'Route-specific grade boundaries: AQA publishes them separately; not read, none printed.',
      'June 2027 exam dates: AQA and JCQ timetables not read.',
      'Which option pair is most common: no primary data read; not claimed.',
      'Any AQA past paper or Exampro question: not reproduced; every example is ours.',
      'Any grade promise or link with AQA: both declined.'
    ]
  }
};
