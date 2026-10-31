'use strict';
// OCR Level 3 FSMQ Additional Maths 6993 help (ag- maths door, England; UK and US exams cluster Phase 2, row UK025).
// Sources, read raw on 31 October 2026 (curl -sL; PDFs through PyPDF; raw copies in
// keyword-research-2026-09/uk-us-gap/src/ocr-fsmq-additional-maths-6993-help/):
//  - Cambridge OCR Level 3 Free Standing Mathematics Qualification: Additional Maths 6993 specification, "Version 2.0
//    (June 2026)", "For first assessment in 2019" (ocr.org.uk/Images/457916-specification-from-2018-.pdf, linked from
//    ocr.org.uk/qualifications/fsmq/additional-mathematics/). Verbatim: "OCR's FSMQ: Additional Maths targets learners
//    who will take GCSE (9–1) Higher tier Mathematics." (dash removed on the page); "it attracts up to 10 UCAS points
//    in the new tariff"; "one two-hour examination, with no non-examination assessment"; Paper 1 "100 marks", "2
//    hours", "Calculators permitted", "100% of total FSMQ"; content "Algebra", "Enumeration", "Coordinate Geometry",
//    "Pythagoras and Trigonometry", "Calculus", "Numerical Methods", "Exponentials and Logarithms"; section codes AL,
//    EN, CG, PT, CA, NM, EL; "an italic statement in square brackets indicates content which will not be tested";
//    "Learners are permitted to use a scientific or graphical calculator"; "It is expected that calculators available in
//    the assessment will include an iterative function, such as an ANS key."; "Correct mathematical notation (rather
//    than 'calculator notation') should be used."; "Learners will be given formulae in each assessment on page 2 of the
//    integrated answer booklet."; "In this question you must show detailed reasoning" and "Using the solve function on
//    a calculator to skip one of these steps would not result in a complete analytical method."; "at least one
//    unstructured problem solving question"; "30 Guided Learning Hours (GLH)"; "The Total Qualification Time for the
//    FSMQ: Additional Maths is 60 hours."; AO weightings AO1 "54–58", AO2 "20–24", AO3 "20–24" (restated as "54 to
//    58%"); "There will be one examination series available each year in May/June to all learners."; "Learners can
//    retake the qualification as many times as they wish."; "graded on the scale: A, B, C, D, E, where A is the
//    highest"; "Level 3 FSMQ: Additional Maths is QN:100/2548/0."; "This qualification is available in England.";
//    statements CA5 "Use differentiation to find stationary points on a curve.", CA6, EN1 binomial expansion, EN4 and
//    EN5 permutations and combinations, NM7 trapezium rule, NM8 over or under estimate, CG8 objective function.
//  - Cambridge OCR Final Examination Timetable June 2027, AS/A Level, Core Maths and FSMQ: "6993 Additional
//    mathematics 2 h Fri 18 June pm".
// Our own: the three worked examples, the practice set, the "is it for you" checklist and the one-year plan.
// Spine: a Level 3 qualification sat in Year 11. 6993 is one two-hour paper that puts A level calculus, logarithms and
// counting in front of a strong GCSE student, with OCR's "show detailed reasoning" rule deciding whether calculator
// answers earn marks. Lesson family: a bridge-qualification door built on a single paper and its method rules.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'OCR FSMQ 6993', blurb: 'One two-hour Level 3 paper for strong GCSE students: calculus, logs and counting, graded A to E, on 18 June 2027.' },
  slug: 'ocr-fsmq-additional-maths-6993-help',
  code: 'ofa',
  accent: '#404770',
  accentRationale: 'OCR FSMQ Additional Maths: a deep ink indigo (#404770, 8.42:1 on #FBF8F2), a cool scholarly blue that sits apart from the umber of the OCR GCSE door and the grey-blue of AQA',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'OCR FSMQ Additional Maths 6993 help',
  title: 'OCR FSMQ Additional Maths 6993 Help | Paper, 2027 Date',
  description: 'OCR Level 3 FSMQ Additional Maths 6993 help: the one two-hour paper, the seven topics, the 18 June 2027 date, the detailed reasoning rule and worked examples.',
  ogDescription: 'OCR FSMQ Additional Maths 6993: a Level 3 paper for strong GCSE students. What is on it, how it is graded, and how to show detailed reasoning.',
  twitterDescription: 'OCR Additional Maths 6993: one 100-mark paper, seven topics from algebra to logarithms, graded A to E, sat on 18 June 2027.',
  pageName: 'OCR FSMQ Additional Maths 6993 Help',
  webPageDescription: 'Live online help for the Cambridge OCR Level 3 Free Standing Mathematics Qualification: Additional Maths (6993), built from the version 2.0 specification.',
  courseDescription: 'Live online teaching for OCR Level 3 FSMQ Additional Maths 6993, for strong GCSE Higher students heading towards A level.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'OCR FSMQ Additional Maths 6993',
  navLinks: [
    { href: '#paper', label: 'The paper' },
    { href: '#topics', label: 'Seven topics' },
    { href: '#reasoning', label: 'Detailed reasoning' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Cambridge OCR Level 3 FSMQ &middot; Additional Maths 6993',
  h1: 'OCR FSMQ Additional Maths 6993 help',
  lede: 'OCR\'s Additional Maths is an unusual qualification: a Level 3 maths exam, the same level as A level, that most students sit in Year 11 alongside GCSE. It is one paper of two hours, it covers differentiation, integration, logarithms and the binomial expansion, and it is graded A to E. Schools offer it to their strongest GCSE students, often in an after-school slot, which is why families looking for help with it find so little. This page sets out the paper and the June 2027 date from OCR, explains the seven topic sections and their codes, describes the "show detailed reasoning" rule that decides whether a calculator answer earns marks, and works three original problems at the level of the paper.',
  secondaryCta: { href: '#reasoning', label: 'The detailed reasoning rule' },
  wa: 'Hello Modern Age Coders, I would like a free first class for OCR FSMQ Additional Maths 6993.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from OCR\'s 6993 specification, version 2.0 June 2026',
  spec: [
    ['Qualification', 'OCR Level 3 FSMQ: Additional Maths'],
    ['Code', '6993'],
    ['Assessment', 'One paper, 2 hours, 100 marks'],
    ['Grades', 'A to E'],
    ['June 2027', 'Friday 18 June, afternoon'],
    ['Format', 'Group of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'In short',
  capsule: 'OCR Level 3 FSMQ: Additional Maths (6993) is a Free Standing Mathematics Qualification from Cambridge OCR, aimed at students who will take GCSE Maths at Higher tier. It is assessed by one two-hour, 100-mark paper with a calculator, graded A to E, and OCR\'s June 2027 timetable lists it on the afternoon of Friday 18 June 2027. Modern Age Coders teaches 6993 live online through its A level Maths course, starting from the topics the FSMQ covers, 1-on-1 or in a group of 15 to 20. We are not connected with OCR.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for an Additional Maths student',
    lede: 'The first teaches the A level calculus and logarithms that 6993 introduces. The second keeps GCSE Higher secure in the same year; the third is for students who already know they want two maths A levels.',
    items: [
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'FA / 01', title: 'A level Maths: Pure, Mechanics, Statistics', note: 'Its opening pure topics are the 6993 content: calculus, logarithms, coordinate geometry, the binomial expansion.' },
      { course: 'gcse-mathematics-mastery', code: 'FA / 02', title: 'GCSE Maths: Foundation and Higher', note: 'For the GCSE Higher papers sat a few weeks earlier in the same summer.' },
      { course: 'a-level-further-maths-course', code: 'FA / 03', title: 'A level Further Maths', note: 'OCR says 6993 can lead to accelerated progress into Further Maths; this is where that goes.' }
    ]
  },

  sections: [
    {
      id: 'paper', tint: 'tint', eyebrow: 'The paper',
      h2: 'How is OCR Additional Maths 6993 assessed?',
      lede: 'By one written paper, which makes up all of the qualification. The table follows OCR\'s specification, version 2.0 (June 2026), and its final June 2027 timetable.',
      body: [
        { kind: 'table', caption: 'OCR Level 3 FSMQ: Additional Maths 6993 at a glance (OCR specification v2.0 and June 2027 final timetable)', head: ['Feature', 'What OCR says'], rows: [
          ['Level', 'Level 3, the same level as AS and A level'],
          ['Assessment', 'Paper 1 only: one two-hour written exam, with no non-examination assessment'],
          ['Marks', '100, which is 100% of the qualification'],
          ['Calculator', 'Scientific or graphical calculator permitted'],
          ['Formulae', 'Given on page 2 of the integrated answer booklet'],
          ['Grades', 'A, B, C, D, E, where A is the highest; below E is Unclassified'],
          ['Series', 'One a year, in May/June'],
          ['June 2027', 'Friday 18 June 2027, afternoon, 2 hours'],
          ['Teaching time', '30 guided learning hours; total qualification time 60 hours'],
          ['UCAS', 'Up to 10 UCAS points in the new tariff'],
          ['Qualification number', 'QN 100/2548/0']
        ] },
        { kind: 'p', html: 'A few of those rows deserve a second look. Thirty guided learning hours is very little teaching time: OCR adds that this "is only a guide" and that centres "with particularly able candidates could deliver this course considerably faster". The other 30 hours of the total qualification time are independent study, so a student who has one after-school lesson a week is expected to do about as much again at home. And because there is only one series a year, a student who misses or wants to improve on June 2027 waits until the next summer; OCR says "Learners can retake the qualification as many times as they wish."' },
        { kind: 'p', html: 'The paper is the last major maths exam of the summer for most students who take it. In June 2027, GCSE Maths papers fall on 14 May, 27 May and 14 June, and the FSMQ on the afternoon of 18 June, four days after the final GCSE maths paper. That order is helpful: GCSE Higher algebra is fresh, and the FSMQ builds directly on it.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ocr.org.uk/qualifications/fsmq/additional-mathematics/" rel="noopener" target="_blank">OCR Level 3 FSMQ: Additional Maths 6993</a> (specification version 2.0, June 2026) and the <a class="ag-inline-link" href="https://www.ocr.org.uk/administration/key-dates-and-timetables/" rel="noopener" target="_blank">OCR June 2027 final timetable for AS/A Level, Core Maths and FSMQ</a>, read on 31 October 2026.' }
      ]
    },
    {
      id: 'topics', tint: 'deep', eyebrow: 'Seven topics',
      h2: 'What topics are in OCR FSMQ Additional Maths?',
      lede: 'Seven sections, each with its own two-letter code: algebra underneath, four pure topics with applied twists, and two numerical topics. All of it goes beyond GCSE Higher.',
      body: [
        { kind: 'p', html: 'OCR describes the structure in one sentence: the course "consists of four main \'pure\' mathematics topics, each of which contains an \'applied\' dimension, and two numerical topics, all underpinned by an Algebra section." Every content statement carries a reference such as AL5 or CA11, and an italic statement in square brackets marks content that, in OCR\'s words, "will not be tested".' },
        { kind: 'table', mt: true, caption: 'The seven content sections of 6993, with examples of statements from the specification (codes are OCR\'s; the third column is our note on what is new beyond GCSE Higher)', head: ['Section and code', 'Examples of statements', 'New beyond GCSE Higher'], rows: [
          ['Algebra (AL)', 'AL4 linear factors of a polynomial; AL5 completing the square; AL11 recurrence relationships in modelling', 'Polynomial factor theorem, algebraic fractions and inequalities at greater depth'],
          ['Enumeration (EN)', 'EN1 binomial expansion; EN4 permutations; EN5 combinations', 'nPr and nCr notation, the binomial expansion'],
          ['Coordinate Geometry (CG)', 'CG3 equation of a circle; CG5 tangents and normals; CG8 objective functions', 'Circles with any centre, linear programming'],
          ['Pythagoras and Trigonometry (PT)', 'PT2 sine and cosine rules; PT4 the identity sin² + cos² = 1', 'Trigonometric identities and equations'],
          ['Calculus (CA)', 'CA5 stationary points; CA6 their nature; CA11 definite integrals; CA13 area between two curves', 'Differentiation and integration, entirely new'],
          ['Numerical Methods (NM)', 'NM2 iteration; NM7 trapezium rule; NM8 over or under estimate', 'Estimating areas and roots, judging the error'],
          ['Exponentials and Logarithms (EL)', 'EL2 log as the inverse of a power; EL3 laws of logarithms; EL6 solving a<sup>x</sup> = b', 'Logarithms, entirely new']
        ] },
        { kind: 'p', html: 'Calculus and logarithms are the two sections with nothing at all behind them in GCSE, and they take the biggest share of the teaching time in our plan. The others extend GCSE Higher topics: a GCSE student meets the equation of a circle centred on the origin, and 6993 moves the centre; a GCSE student meets tree diagrams, and 6993 adds permutations, combinations and the binomial expansion.' },
        { kind: 'table', mt: true, caption: 'Assessment objective weightings for 6993, from the specification (percentage of the qualification)', head: ['Objective', 'What it asks', 'Weighting'], rows: [
          ['AO1 Use and apply standard techniques', 'Carry out routine procedures; use language and notation correctly', '54 to 58%'],
          ['AO2 Reason, interpret and communicate mathematically', 'Construct rigorous arguments; make deductions; explain reasoning', '20 to 24%'],
          ['AO3 Solve problems within mathematics and in other contexts', 'Model, interpret solutions in context, evaluate accuracy and limits', '20 to 24%']
        ] },
        { kind: 'p', html: 'OCR also promises that the paper contains "at least one unstructured problem solving question", one with no parts to lead the student through. Students coming from GCSE often find it the hardest question to start, because GCSE questions are usually broken into steps for them.' }
      ]
    },
    {
      id: 'reasoning', tint: '', eyebrow: 'Detailed reasoning',
      h2: 'What does "show detailed reasoning" mean in OCR Additional Maths?',
      lede: 'It means the calculator can check an answer but cannot replace the method. On those questions a correct answer from a calculator\'s solve or integrate function does not earn full marks.',
      body: [
        { kind: 'p', html: 'The 6993 specification allows any scientific or graphical calculator and adds that "Allowable calculators can be used for any function they can perform." It even expects "an iterative function, such as an ANS key." But some questions carry a printed instruction, "In this question you must show detailed reasoning", and then the rules change. OCR explains that this "is not a restriction on a learner\'s use of a calculator when tackling the question, e.g. for checking an answer", but it is "a restriction on what will be accepted as evidence of a complete method."' },
        { kind: 'p', html: 'OCR gives two illustrations, which we describe rather than copy. For a logarithm equation, the student must write the step that takes logarithms of both sides, the rearranged form, and an intermediate value; in OCR\'s words, "Using the solve function on a calculator to skip one of these steps would not result in a complete analytical method." For a definite integral, the student must write the integrated expression and the substitution of the limits; "Just writing down the answer using the definite integral function on a calculator would therefore not be awarded full marks."' },
        { kind: 'table', mt: true, caption: 'Command words in the 6993 specification and what they require (summarised from OCR\'s definitions)', head: ['Command', 'What it requires'], rows: [
          ['Exact', 'No rounding; keep surds, π or fractions, and rigorous working'],
          ['Show that', 'The result is given, so every step to it must be shown; a sketch is not enough'],
          ['Determine', 'Justify any result found, with working where appropriate'],
          ['Give, State, Write down', 'No working or justification required'],
          ['Hence', 'Start from the result just found'],
          ['You may use the result', 'A permitted shortcut, not a required one'],
          ['In this question you must show detailed reasoning', 'A complete analytical method; the calculator only checks']
        ] },
        { kind: 'p', html: 'The specification has one more calculator rule worth practising: "Correct mathematical notation (rather than \'calculator notation\') should be used. Incorrect notation may result in loss of marks." Writing 2.5E-3 instead of 2.5 × 10<sup>&minus;3</sup>, or "log 80 / log 5" without brackets around a numerator that needs them, are exactly the kinds of slips this rule catches.' }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Three 6993-style problems we wrote, with detailed reasoning',
      lede: 'Original problems, not OCR questions, from the three sections students meet for the first time. Each is written out the way a "detailed reasoning" question needs.',
      body: [
        { kind: 'two',
          leftH3: 'Example 1, calculus: stationary points (CA5, CA6)',
          left: [
            '<strong>Question (ours).</strong> Find the stationary points of y = x³ &minus; 6x² + 9x + 1 and determine their nature.',
            '<strong>Differentiate.</strong> dy/dx = 3x² &minus; 12x + 9 = 3(x² &minus; 4x + 3) = 3(x &minus; 1)(x &minus; 3).',
            '<strong>Solve dy/dx = 0.</strong> x = 1 or x = 3. Then y = 1 &minus; 6 + 9 + 1 = 5 at x = 1, and y = 27 &minus; 54 + 27 + 1 = 1 at x = 3.',
            '<strong>Nature.</strong> d²y/dx² = 6x &minus; 12, which is &minus;6 at x = 1 (a maximum) and 6 at x = 3 (a minimum). So (1, 5) is a maximum and (3, 1) is a minimum.'
          ],
          rightH3: 'Example 2, logarithms with detailed reasoning (EL6)',
          right: [
            '<strong>Question (ours).</strong> In this question you must show detailed reasoning. Solve 5<sup>2x &minus; 1</sup> = 80, giving x to 3 significant figures.',
            '<strong>Take logarithms.</strong> log(5<sup>2x &minus; 1</sup>) = log 80, so (2x &minus; 1) log 5 = log 80.',
            '<strong>Rearrange and evaluate.</strong> 2x &minus; 1 = log 80 ÷ log 5 = 2.7227..., so 2x = 3.7227... and x = 1.8613...',
            '<strong>Answer.</strong> x = 1.86 to 3 significant figures. Every line above is needed; a solve function giving 1.86 directly would not show the method.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Example 3, the binomial expansion (EN1)',
          left: [
            '<strong>Question (ours).</strong> Find the coefficient of x² in the expansion of (2 + x)<sup>5</sup>.',
            '<strong>Method.</strong> The general term is <sup>5</sup>C<sub>r</sub> × 2<sup>5 &minus; r</sup> × x<sup>r</sup>. For x², take r = 2.',
            '<strong>Working.</strong> <sup>5</sup>C<sub>2</sub> = 10 and 2<sup>3</sup> = 8, so the coefficient is 10 × 8 = 80.',
            '<strong>Check.</strong> The coefficients of the whole expansion are 32, 80, 80, 40, 10, 1, and they add to 243, which is 3<sup>5</sup>: the value of (2 + x)<sup>5</sup> when x = 1.'
          ],
          rightH3: 'Why these three',
          right: [
            'Calculus and logarithms have no GCSE foundation, so they are where an FSMQ student needs the most direct teaching. The binomial expansion links the new counting ideas in EN to algebra.',
            'In each example the written method is the answer. That habit carries straight into A level, where "detailed reasoning" questions appear too.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, answers at the end).</strong> (1) Differentiate 4x³ &minus; 5x + 2. (2) Evaluate the integral of 3x² + 1 from x = 0 to x = 2, showing the substitution. (3) How many ways can a committee of 3 be chosen from 8 people? (4) Without a calculator, find log<sub>2</sub> 32. (5) Use the trapezium rule with two strips of width 1 to estimate the area under y = x² from x = 0 to x = 2, and say whether it is an overestimate or an underestimate. <strong>Answers:</strong> (1) 12x² &minus; 5; (2) [x³ + x] from 0 to 2 = (8 + 2) &minus; 0 = 10; (3) 56; (4) 5; (5) ½ × 1 × (0 + 2 × 1 + 4) = 3, an overestimate, because the curve bends upwards between the points (the exact area is 8/3).' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan to 18 June 2027',
      h2: 'How should a Year 11 student prepare for 6993 alongside GCSE?',
      lede: 'Our outline for a student starting in autumn 2026 and sitting the paper on 18 June 2027, with one class a week. OCR\'s 30 guided learning hours fit easily inside it.',
      body: [
        { kind: 'ol', items: [
          '<strong>Is it for you? A quick check first.</strong> OCR aims 6993 at students taking GCSE Higher. Before starting, a student should be secure on GCSE Higher algebra: expanding, factorising quadratics, completing the square, solving simultaneous equations.',
          '<strong>Autumn 2026: algebra and coordinate geometry.</strong> AL and CG first, because every other section uses them. Polynomials and the factor theorem, circles with any centre, tangents and normals.',
          '<strong>December 2026 to February 2027: calculus.</strong> Differentiation, stationary points and their nature, then integration and areas. This is the largest new block.',
          '<strong>February to March 2027: logarithms and enumeration.</strong> The laws of logarithms, solving a<sup>x</sup> = b, permutations, combinations and the binomial expansion.',
          '<strong>March 2027: trigonometry and numerical methods.</strong> Identities, the trapezium rule and iteration, including when a method may fail.',
          '<strong>April to early May 2027: past papers and GCSE.</strong> One 6993 paper every fortnight, timed to two hours, alternating with GCSE practice before the first GCSE maths paper on 14 May.',
          '<strong>15 to 18 June 2027: the final four days.</strong> After the last GCSE maths paper on 14 June, two full 6993 papers and a review of command words, especially "detailed reasoning".'
        ] },
        { kind: 'p', mt: true, html: 'The plan is ours and does not promise a grade. Some schools run 6993 over two years rather than one, or enter students in Year 12; the order of topics still works, spread more thinly. For students heading to A level, the FSMQ topics are the opening chapters of A level pure maths, so nothing learned here is wasted. See our <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths page</a> and, for two maths A levels, <a class="ag-inline-link" href="/further-maths-tuition-online">further maths</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through Additional Maths',
    lede: 'Each rung is tested on an OCR 6993 paper, not on a worksheet.',
    table: { caption: 'Where a 6993 student should be, and when', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. GCSE Higher algebra secure', 'Before starting', 'Quadratics, completing the square and simultaneous equations done without error'],
      ['2. Calculus working', 'February 2027', 'Stationary points found and classified; definite integrals evaluated by hand'],
      ['3. Logs and counting', 'March 2027', 'Logarithm equations solved with every step written; nCr used correctly'],
      ['4. Full paper in two hours', 'Before 18 June 2027', 'A complete 6993 paper finished, including the unstructured problem']
    ] },
    left: { h3: 'The first rung decides everything', ps: [
      'A student shaky on GCSE algebra will find calculus slow. Fixing the algebra first is faster overall.',
      'Our <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths page</a> covers the Higher content.'
    ] },
    right: { h3: 'The last rung is stamina', ps: [
      'Two hours is longer than any GCSE maths paper. We build up to it with timed half papers first.',
      'Families receive a monthly note on progress.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around Additional Maths',
    lede: 'Grouped by where a 6993 student is coming from and going to.',
    bands: [
      { num: 'I', h3: 'The FSMQ and GCSE', sub: 'Year 11', courses: [
        { code: 'UK / FA1 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure topics that cover the 6993 sections.' },
        { code: 'UK / FA1 / 02', slug: 'gcse-mathematics-mastery', title: 'GCSE Maths', blurb: 'Higher tier, sat a few weeks before the FSMQ.' },
        { code: 'UK / FA1 / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'For algebra that needs firming up first.' }
      ] },
      { num: 'II', h3: 'Stretch', sub: 'Beyond the paper', courses: [
        { code: 'UK / FA2 / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Unstructured problems, practised often.' },
        { code: 'UK / FA2 / 02', slug: 'igcse-mathematics-mastery', title: 'IGCSE and Additional Mathematics', blurb: 'A course that also covers Cambridge Additional Mathematics.' },
        { code: 'UK / FA2 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Iteration and the trapezium rule as short programs.' }
      ] },
      { num: 'III', h3: 'Sixth form', sub: 'From September 2027', courses: [
        { code: 'UK / FA3 / 01', slug: 'a-level-further-maths-course', title: 'A level Further Maths', blurb: 'The accelerated route OCR mentions.' },
        { code: 'UK / FA3 / 02', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP preparation', blurb: 'University admissions maths, later in sixth form.' },
        { code: 'UK / FA3 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The statistics strand of A level, started early.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Live Additional Maths classes in UK time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teachers are based in India and lessons run on UK time.',
    slots: [
      { time: 'After school', l: 'Where most schools teach 6993 too.' },
      { time: 'Evenings', l: 'Alongside GCSE revision.' },
      { time: 'Weekend afternoons', l: 'Long enough for a two-hour paper.' }
    ],
    cells: [
      { h3: 'OCR papers and codes', p: 'Past 6993 papers, with every lost mark tagged to its AL, CA or EL statement.' },
      { h3: 'Methods written out', p: 'Every logarithm and integral set out as a "detailed reasoning" answer.' },
      { h3: 'Calculator as checker', p: 'Graphical or scientific calculators used to check, never to skip.' },
      { h3: 'Unstructured problems', p: 'One problem a week with no parts to guide the start.' },
      { h3: 'Free first class', p: 'A live lesson before any payment, with a first look at calculus.' },
      { h3: 'Group or 1-on-1', p: 'A batch of 15 to 20 FSMQ students, or lessons for one.' }
    ]
  },

  projectsH2: 'Student work from our classes',
  projectsLede: 'Made in lessons and not assessed. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, word for word.',

  fees: {
    h2: 'Fees for Additional Maths classes',
    lede: 'No charge for the first class. After it, a monthly fee that is lower for a group seat than for 1-on-1. You sign nothing, and we take no payment until a weekly time is in place.',
    free: ['A live 6993 class', 'A first calculus lesson', 'Booked with a phone number'],
    group: ['15 to 20 FSMQ students', 'One teacher to 18 June 2027', 'A 6993 paper marked each fortnight in spring', 'A monthly note to parents'],
    one: ['A teacher for one student', 'Fitted around GCSE revision', 'Suits a school without an FSMQ class']
  },

  faq: {
    eyebrow: 'Questions about 6993',
    h2: 'What families ask about OCR Additional Maths',
    items: [
      { q: 'What is OCR FSMQ Additional Maths?', a: 'It is a Level 3 Free Standing Mathematics Qualification from Cambridge OCR, code 6993, aimed at students taking GCSE Maths at Higher tier. It introduces A level topics such as calculus and logarithms in a single two-hour exam.' },
      { q: 'When is the OCR Additional Maths exam in 2027?', a: 'OCR\'s final June 2027 timetable lists 6993 Additional Mathematics on the afternoon of Friday 18 June 2027, lasting 2 hours. There is one series a year, in May/June.' },
      { q: 'Is OCR Additional Maths a GCSE?', a: 'No. It is a Level 3 qualification, the same level as AS and A level, graded A to E rather than 9 to 1. Many students sit it in Year 11 alongside GCSE Maths.' },
      { q: 'How many UCAS points is FSMQ Additional Maths worth?', a: 'OCR\'s specification says it attracts up to 10 UCAS points in the new tariff. Whether a particular university or course counts those points is for that university to decide.' },
      { q: 'Can you use a calculator in OCR Additional Maths?', a: 'Yes. A scientific or graphical calculator is allowed and can be used for any function it can perform. On questions marked "show detailed reasoning", the written method must be complete; a calculator answer alone will not earn full marks.' },
      { q: 'What topics are in OCR Additional Maths?', a: 'Seven sections: Algebra, Enumeration, Coordinate Geometry, Pythagoras and Trigonometry, Calculus, Numerical Methods, and Exponentials and Logarithms. Calculus and logarithms are entirely new beyond GCSE.' },
      { q: 'Is there a formula sheet in OCR Additional Maths?', a: 'Yes. OCR gives formulae on page 2 of the integrated answer booklet, and the specification lists them in its section on formulae and identities.' },
      { q: 'Can my child resit OCR Additional Maths?', a: 'Yes. OCR says learners can retake the qualification as many times as they wish, but there is only one series each year, in May/June.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are given in UK time.' },
      { q: 'Are you connected with OCR?', a: 'No. Modern Age Coders is independent of Cambridge OCR. We teach to the published 6993 specification, use OCR\'s freely available papers, and do not promise a grade.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for strong GCSE students',
    lede: 'Other routes beyond GCSE Higher, and where they lead.',
    items: [
      { href: '/further-maths-tuition-online', label: 'Further maths tuition', p: 'Further maths at Level 2 and A level.' },
      { href: '/is-a-level-further-maths-worth-it', label: 'Is A level Further Maths worth it?', p: 'A straight look at the second maths A level.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths', p: 'Where 6993 topics continue.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths', p: 'The Higher tier underneath 6993.' },
      { href: '/igcse-maths-tuition-online', label: 'IGCSE maths', p: 'For students on the Cambridge route.' },
      { href: '/coding-classes-in-united-kingdom', label: 'UK hub', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free Additional Maths class',
    lede: 'Leave a number and a teacher will call at a UK time of your choice. The first class checks GCSE Higher algebra, then starts differentiation.',
    readFirst: 'Reading first? The <a class="ag-inline-link" href="/courses/a-level-maths-course-pure-mechanics-statistics">A level Maths course page</a> lists the pure topics, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows a lesson.',
    note: 'WhatsApp reaches us fastest and is free from a UK mobile. Our India team answers, from a number beginning +91.',
    formNote: 'No card and no contract. We reply once, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Beyond GCSE', links: [
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths' },
        { href: '/is-a-level-further-maths-worth-it', label: 'Further Maths: worth it?' },
        { href: '/a-level-maths-tutor-cost-uk', label: 'A level tutor costs' }
      ] },
      { h4: 'GCSE', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'Board comparison' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'OCR Additional Maths, live in UK time'
  },

  personalityCss: `
.ag-root.ag-ofa .ag-hero h1 { letter-spacing: -0.014em; font-weight: 700; max-width: 20ch; }
.ag-root.ag-ofa .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-ofa .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-ofa .ag-table caption { text-align: left; font-weight: 610; }
.ag-root.ag-ofa .ag-table td:first-child { font-weight: 640; }
.ag-root.ag-ofa .ag-steps li { margin-bottom: 10px; }
`,

  dossier: {
    curriculumAuthority: 'England, Cambridge OCR Level 3 FSMQ: Additional Maths 6993, specification version 2.0 June 2026, first assessment 2019: targets GCSE Higher learners; up to 10 UCAS points; one two-hour paper, no NEA, 100 marks, 100%; scientific or graphical calculator, iterative function expected, any function allowed; calculator notation rule; formulae on page 2; command words including "In this question you must show detailed reasoning"; at least one unstructured problem; seven sections AL, EN, CG, PT, CA, NM, EL; italic square-bracket content not tested; 30 GLH, TQT 60 hours; AO1 54 to 58, AO2 20 to 24, AO3 20 to 24; one series a year in May/June; retake as often as wished; grades A to E; QN 100/2548/0; available in England. OCR June 2027 final timetable: 6993 Fri 18 June pm, 2 h.',
    localProject: 'A Level 3 qualification sat in Year 11. The page tables the 6993 paper from OCR\'s version 2.0 specification (one two-hour 100-mark paper, A to E, 30 guided learning hours, up to 10 UCAS points) and gives OCR\'s June 2027 date (Friday 18 June, afternoon), four days after the last GCSE maths paper. It maps the seven content sections with their codes and what is new beyond GCSE Higher, explains OCR\'s "show detailed reasoning" rule and command words, and works three original problems (stationary points of x cubed minus 6x squared plus 9x plus 1, solving 5 to the power 2x minus 1 equals 80 with every step, and the x squared coefficient of (2 + x) to the 5th) plus a practice set and a plan to 18 June 2027. Lesson family: a bridge-qualification door built on a single paper and its method rules.',
    requiredMentions: [
      'QN 100/2548/0',
      'Up to 10 UCAS points in the new tariff',
      'Friday 18 June 2027, afternoon, 2 hours',
      'Using the solve function on a calculator to skip one of these steps would not result in a complete analytical method.',
      'Just writing down the answer using the definite integral function on a calculator would therefore not be awarded full marks.',
      'Correct mathematical notation (rather than \'calculator notation\') should be used.',
      'at least one unstructured problem solving question',
      '30 guided learning hours; total qualification time 60 hours',
      'Find the coefficient of x² in the expansion of (2 + x)'
    ],
    sources: [
      { claim: 'OCR Level 3 FSMQ: Additional Maths 6993 specification, version 2.0 June 2026.', url: 'https://www.ocr.org.uk/Images/457916-specification-from-2018-.pdf' },
      { claim: 'OCR Additional Mathematics FSMQ qualification page.', url: 'https://www.ocr.org.uk/qualifications/fsmq/additional-mathematics/' },
      { claim: 'OCR June 2027 final examination timetable, AS/A Level, Core Maths and FSMQ: 6993 date.', url: 'https://www.ocr.org.uk/Images/758622-june-2027-final-exam-timetable-as-a-level-core-maths-and-fsmq.pdf' }
    ],
    rejectedClaims: [
      'FSMQ grade boundaries: asked for in autocomplete, but not read at a primary source, so none are quoted.',
      'June 2027 results day for FSMQ: OCR\'s key dates spreadsheet was downloaded but the date was not matched to this qualification with confidence, so no results date is given.',
      'Which universities count FSMQ UCAS points: not read at any university source; the page says it is for each university to decide.',
      'OCR past paper questions and OCR\'s two detailed reasoning examples: described, not reproduced.',
      'Any promised grade: declined.'
    ]
  }
};
