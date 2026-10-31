'use strict';
// AQA A level Mathematics 7357 help (ag- exam door, UK and US exams cluster, row UK031).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/aqa-a-level-maths-7357-help/):
//  - AQA A-level Mathematics (7357) specification, "For teaching from September 2017 onwards", "For exams in 2018
//    onwards", Version 1.3, 31 January 2018 (PDF linked from aqa.org.uk/subjects/mathematics/a-level/mathematics-7357).
//    Verbatim: "This qualification is linear. Linear means that students will sit all their exams at the end of the
//    course."; Paper 1 "Any content from: A: Proof, B: Algebra and functions, C: Coordinate geometry, D: Sequences and
//    series, E: Trigonometry, F: Exponentials and logarithms, G: Differentiation, H: Integration, I: Numerical methods";
//    Paper 2 "Any content from Paper 1 and content from: J: Vectors, P: Quantities and units in mechanics, Q: Kinematics,
//    R: Forces and Newton's laws, S: Moments"; Paper 3 "Any content from Paper 1 and content from: K: Statistical
//    sampling, L: Data presentation and interpretation, M: Probability, N: Statistical distributions, O: Statistical
//    hypothesis testing"; each "Written exam: 2 hours", "100 marks", "33⅓ % of A-level"; "A mix of question styles, from
//    short, single-mark questions to multi-step problems."; AO1 50, AO2 25, AO3 25 on every paper; "Total scaled mark:
//    300"; "graded on a six-point scale: A*, A, B, C, D and E"; U "will not receive a qualification certificate"; "Students
//    can re-sit the qualification as many times as they wish, within the shelf life of the qualification."; "There are no
//    previous learning requirements."; recommends "GCSE Mathematics or equivalent"; "must be able to recall the
//    mathematical formulae and identities set out in Appendix B"; large data set: Family Food extract for 2018 and 2019,
//    "For exams from 2020 there is a new dataset. This replacement dataset is also only available on the AQA website.";
//    "Students should also be able to demonstrate the ability to analyse a subset or features of the data using a
//    calculator with standard statistical functions."; calculators: "A calculator is required for use in all
//    assessments", minimum "an iterative function", "the ability to compute summary statistics and access probabilities
//    from standard statistical distributions", "an inverse normal function"; private candidates "may be self-taught, home
//    schooled or have private tuition" and "must be based in the UK"; AOs "set by Ofqual and are the same across all
//    A-level Mathematics specifications and all exam boards".
// Our own material, labelled on the page: the normal-distribution example (X ~ N(50, 8^2): P(X < 62) = 0.9332, upper 10%
// point 60.25), the binomial test (n = 20, critical region X >= 15, tail 0.0207 against 0.0577 for 14), the beam moments
// example (reactions 20g/3 and 40g/3, about 65.3 N and 130.7 N with g = 9.8), and a six-question practice set, all
// checked in Python on 31 October 2026. No AQA question is reproduced.
// Spine: both applied papers are part pure. AQA puts mechanics with pure on Paper 2 and statistics with pure on Paper 3,
// so a student cannot treat the applied papers as a break from algebra. Lesson family: pure methods inside applied
// contexts.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'AQA 7357', blurb: 'Three two-hour papers, and both applied ones carry pure content too: mechanics sits with pure on Paper 2, statistics with pure on Paper 3.' },
  slug: 'aqa-a-level-maths-7357-help',
  code: 'aql',
  accent: '#7D4646',
  accentRationale: 'AQA A level Maths 7357: a dusty rosewood #7D4646 from the cluster allocation, 6.98:1 on #FBF8F2 and 6.01:1 on the deepest paper tint, softer and pinker than the burnt umber used for Edexcel 9MA0',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'AQA A level Maths 7357 help',
  title: 'AQA A Level Maths 7357 Help: Papers, Topics and Calculator',
  description: 'AQA A level Maths 7357 help: three 2-hour papers, pure on all three, mechanics on Paper 2, statistics on Paper 3, plus the large data set. Live online classes.',
  ogDescription: 'AQA A level Mathematics 7357 from the specification: what each of the three papers covers, how marks are weighted, the large data set and the calculator AQA requires.',
  twitterDescription: 'AQA A level Maths 7357: Paper 1 pure, Paper 2 pure and mechanics, Paper 3 pure and statistics, and what that means for revision.',
  pageName: 'AQA A Level Maths 7357 Help',
  webPageDescription: 'Live online teaching for AQA A level Mathematics 7357 students in Years 12 and 13, written from the AQA specification.',
  courseDescription: 'Live online classes for AQA A level Mathematics 7357: proof, algebra, calculus and numerical methods, with mechanics and statistics taught inside the pure methods they rely on.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'AQA A level Maths 7357',
  navLinks: [
    { href: '#papers', label: 'The three papers' },
    { href: '#weights', label: 'How marks work' },
    { href: '#data', label: 'Large data set' },
    { href: '#example', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'AQA &middot; A level Mathematics 7357 &middot; Years 12 and 13',
  h1: 'AQA A level Maths 7357 help',
  lede: 'AQA A level Mathematics, specification code 7357, is sat at the end of Year 13 as three two-hour papers. What sets it apart from the other boards is how those papers are put together: pure maths is not confined to one or two papers but runs through all three, with mechanics added on Paper 2 and statistics on Paper 3. This page sets out exactly what each paper can test, how the marks are weighted, the large data set, the calculator AQA requires, and how we teach 7357 live online.',
  secondaryCta: { href: '#papers', label: 'The three papers' },
  wa: 'Hello Modern Age Coders, I would like a free first class for AQA A level Maths 7357.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Not connected with AQA',
  spec: [
    ['Qualification', 'AQA A level Mathematics'],
    ['Code', '7357'],
    ['Papers', 'Three, each 2 hours and 100 marks'],
    ['Paper 2', 'Pure plus vectors and mechanics'],
    ['Paper 3', 'Pure plus statistics'],
    ['Grades', 'A* to E'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'The short answer',
  capsule: 'AQA A level Mathematics 7357 is a linear A level sat at the end of Year 13 as three written papers, each 2 hours, 100 marks and a third of the grade. Paper 1 tests pure maths. Paper 2 can test any Paper 1 content plus vectors and mechanics; Paper 3 can test any Paper 1 content plus statistics. A calculator is used on all three. Grades run from A* to E. Modern Age Coders teaches 7357 live online through our A Level Maths course, in a group of 15 to 20 or 1-on-1, and the first class is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for an AQA 7357 student',
    lede: 'The A level course carries 7357. The statistics course goes deeper into Paper 3, and Further Maths is there for students taking both.',
    items: [
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'AQ / 01', title: 'A Level Maths', note: 'Pure, mechanics and statistics for AQA 7357, taught as the papers mix them.' },
      { course: 'statistics-probability-maths-course', code: 'AQ / 02', title: 'Statistics and Probability', note: 'Distributions and hypothesis testing in more depth, for Paper 3.' },
      { course: 'a-level-further-maths-course', code: 'AQ / 03', title: 'A Level Further Maths', note: 'For students taking Further Maths alongside 7357.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'The three papers',
      h2: 'What is on each AQA A level Maths paper?',
      lede: 'Paper 1 is pure. Papers 2 and 3 are each pure plus one applied area. All three are sat at the end of the course.',
      body: [
        { kind: 'p', html: 'AQA describes 7357 as linear, with every exam sat when the course ends. The specification lists nineteen content areas lettered A to S, and assigns them to papers in a particular way: Paper 1 draws on A to I, the pure topics; Paper 2 on "Any content from Paper 1" plus J and P to S; Paper 3 on "Any content from Paper 1" plus K to O. Every paper offers "A mix of question styles, from short, single-mark questions to multi-step problems."' },
        { kind: 'table', caption: 'AQA A level Mathematics 7357: what each paper can assess', head: ['Paper', 'Content it can test', 'Time', 'Marks', 'Weight'], rows: [
          ['Paper 1', 'A Proof, B Algebra and functions, C Coordinate geometry, D Sequences and series, E Trigonometry, F Exponentials and logarithms, G Differentiation, H Integration, I Numerical methods', '2 hours', '100', 'One third'],
          ['Paper 2', 'Any Paper 1 content, plus J Vectors, P Quantities and units in mechanics, Q Kinematics, R Forces and Newton\'s laws, S Moments', '2 hours', '100', 'One third'],
          ['Paper 3', 'Any Paper 1 content, plus K Statistical sampling, L Data presentation and interpretation, M Probability, N Statistical distributions, O Statistical hypothesis testing', '2 hours', '100', 'One third']
        ] },
        { kind: 'source', html: 'Source: AQA A-level Mathematics (7357) specification, version 1.3, section 2, from the <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357" rel="noopener" target="_blank">AQA 7357 page</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the pairing matters',
          left: [
            'On Paper 2 a mechanics question can need integration to find displacement from velocity, or a trigonometric identity to resolve forces. On Paper 3 a statistics question can sit next to a pure question on logarithms or proof.',
            'So a student cannot revise mechanics for Paper 2 and statistics for Paper 3 and leave pure behind. Pure is examined three times over.'
          ],
          rightH3: 'Where vectors live',
          right: [
            'Vectors, area J, is listed with Paper 2 rather than Paper 1. That is a small detail with a practical consequence: vector work tends to appear alongside mechanics, where it describes position, velocity and force.',
            'Students who learn vectors only as geometry can find the mechanics setting unfamiliar, so we teach both together.'
          ] }
      ]
    },
    {
      id: 'weights', tint: 'deep', eyebrow: 'How marks work',
      h2: 'How is AQA A level Maths 7357 graded?',
      lede: 'Three papers of 100 raw marks, added straight together into a total out of 300, then graded A* to E.',
      body: [
        { kind: 'p', html: 'AQA scales each paper by a factor of one, so the raw marks are the scaled marks: "Total scaled mark: 300". Grade boundaries are set on that total. The qualification is "graded on a six-point scale: A*, A, B, C, D and E", and a student below E is recorded as U and "will not receive a qualification certificate."' },
        { kind: 'table', mt: true, caption: 'Assessment objective weightings for 7357, from the specification', head: ['Objective', 'What it rewards', 'Paper 1', 'Paper 2', 'Paper 3'], rows: [
          ['AO1', 'Using and applying standard techniques, recalling facts and definitions', '50 per cent', '50 per cent', '50 per cent'],
          ['AO2', 'Reasoning, interpreting and communicating, including proof', '25 per cent', '25 per cent', '25 per cent'],
          ['AO3', 'Solving problems in maths and in context, including modelling', '25 per cent', '25 per cent', '25 per cent']
        ] },
        { kind: 'p', mt: true, html: 'These objectives "are set by Ofqual and are the same across all A-level Mathematics specifications and all exam boards", so the balance of technique, reasoning and problem solving is not what distinguishes AQA. The distinction is in the paper structure above. Half of every paper rewards technique, which is why accurate algebra and calculus remain the foundation, and the other half rewards turning words and contexts into maths and explaining the result.' },
        { kind: 'table', mt: true, caption: 'Other rules worth knowing, from sections 5.3 to 5.5 and 3', head: ['Rule', 'AQA\'s wording or a close restatement'], rows: [
          ['Re-sits', '"Students can re-sit the qualification as many times as they wish, within the shelf life of the qualification."'],
          ['Entry requirements', '"There are no previous learning requirements." AQA recommends GCSE Mathematics or equivalent'],
          ['Formulae', 'Students must recall the formulae and identities set out in Appendix B of the specification'],
          ['Private candidates', 'Self-taught, home-schooled or privately tutored students may enter through an AQA centre, if UK-based']
        ] }
      ]
    },
    {
      id: 'data', tint: '', eyebrow: 'Large data set',
      h2: 'What is the AQA A level Maths large data set?',
      lede: 'A real data set published only on AQA\'s website, which Paper 3 questions assume students have worked with.',
      body: [
        { kind: 'p', html: 'Every A level Maths board must require students to "become familiar with one or more specific large data set(s) in advance of the final assessment", and AQA notes that "This requirement is common to all exam boards." AQA\'s first data set was an extract of the government\'s Family Food data, used for exams in 2018 and 2019. The specification then says: "For exams from 2020 there is a new dataset. This replacement dataset is also only available on the AQA website."' },
        { kind: 'ol', mt: true, items: [
          'Download the current data set from AQA\'s 7357 resources. The specification says it is only available there, so textbook extracts may be out of date.',
          'Learn the contexts: what each variable means, its units, and where values are missing or unusual. Questions can assume this background without explaining it.',
          'Explore it with a spreadsheet, as the content requires: summary statistics, charts and comparisons between groups.',
          'Practise analysing a subset with the calculator alone. AQA expects students to analyse "a subset or features of the data" in exactly that way.',
          'Connect each feature of the data to a topic in K to O: sampling methods, outliers and cleaning, correlation, distributions and hypothesis tests.'
        ] },
        { kind: 'p', mt: true, html: 'We set a short data-set task most weeks in Year 13, so the context is familiar long before the exam. Familiarity is the skill being rewarded: a student who has used the data set can read a question about it quickly, while one who has not spends minutes decoding the setting.' }
      ]
    },
    {
      id: 'calculator', tint: 'tint', eyebrow: 'Calculator',
      h2: 'Which calculator do you need for AQA A level Maths?',
      lede: 'One with an iterative function, statistical distributions and an inverse normal function. AQA names all three.',
      body: [
        { kind: 'p', html: 'The specification says: "A calculator is required for use in all assessments in this specification." It then sets a minimum: "an iterative function", "the ability to compute summary statistics and access probabilities from standard statistical distributions", and "an inverse normal function." Which models are permitted in the exam room is governed by the JCQ document Instructions for conducting examinations.' },
        { kind: 'table', mt: true, caption: 'What each required function is for, in our words', head: ['AQA requirement', 'Where it is used', 'Paper'], rows: [
          ['Iterative function', 'Repeating an iteration such as x<sub>n+1</sub> = g(x<sub>n</sub>) or a Newton-Raphson step to find a root', 'Mainly Paper 1, numerical methods'],
          ['Summary statistics', 'Mean, standard deviation and regression from a list of data', 'Paper 3, including the large data set'],
          ['Distribution probabilities', 'Binomial and normal probabilities without tables', 'Paper 3'],
          ['Inverse normal', 'Finding the value cutting off a given probability', 'Paper 3']
        ] },
        { kind: 'p', mt: true, html: 'Students who buy a calculator in Year 12 sometimes discover in Year 13 that it cannot do inverse normal calculations. Checking against AQA\'s list on day one avoids that. We also teach the working that must be written alongside a calculator result: the distribution and its parameters, the probability being found, and the conclusion in context.' }
      ]
    },
    {
      id: 'example', tint: 'deep', eyebrow: 'Worked examples, ours',
      h2: 'Three 7357 style problems, one for each paper type',
      lede: 'We wrote these to show how a Paper 3 statistics question and a Paper 2 mechanics question still lean on pure maths.',
      body: [
        { kind: 'p', html: '<strong>Our first problem, Paper 3 style.</strong> The masses of a type of apple, X grams, are modelled as X ~ N(50, 8<sup>2</sup>). (a) Find P(X &lt; 62). (b) The heaviest 10 per cent are sold separately. Find the lowest mass in that group.' },
        { kind: 'two', mt: true,
          leftH3: 'Part (a)',
          left: [
            'Standardise: z = (62 &minus; 50) &divide; 8 = 1.5. The calculator\'s normal distribution function gives P(X &lt; 62) = 0.9332 to 4 decimal places.',
            'Writing the distribution, the value standardised and the probability statement earns method credit even if a key is pressed wrongly.'
          ],
          rightH3: 'Part (b)',
          right: [
            'We want k with P(X &gt; k) = 0.1, so P(X &lt; k) = 0.9. The inverse normal function gives z = 1.2816, so k = 50 + 8 &times; 1.2816 = 60.25 grams.',
            'This is the step AQA\'s required inverse normal function exists for. Without it, a student must work backwards from tables they will not be given.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Our second problem, Paper 3 style.</strong> A spinner is suspected of landing on red more often than half the time. In 20 spins it lands on red 14 times. Test at the 5 per cent level.' },
        { kind: 'ol', mt: true, items: [
          'Let X be the number of reds in 20 spins, so X ~ B(20, p). H<sub>0</sub>: p = 0.5 and H<sub>1</sub>: p &gt; 0.5, a one-tailed test.',
          'Under H<sub>0</sub>, P(X &ge; 15) = 0.0207 and P(X &ge; 14) = 0.0577. The critical region is X &ge; 15, since 0.0577 is above 5 per cent.',
          '14 is not in the critical region, so there is insufficient evidence at the 5 per cent level to say the spinner favours red.',
          'The conclusion is written in context, about the spinner, not just "accept H<sub>0</sub>". AO2 marks reward that sentence.'
        ] },
        { kind: 'p', mt: true, html: '<strong>Our third problem, Paper 2 style.</strong> A uniform beam AB is 4 m long with mass 20 kg. It rests horizontally on supports at A and at C, where AC = 3 m. Find the reaction at each support, taking g = 9.8 m s<sup>&minus;2</sup>.' },
        { kind: 'two', mt: true,
          leftH3: 'Moments about A',
          left: [
            'The weight 20g acts at the midpoint, 2 m from A. Taking moments about A removes the unknown reaction there: R<sub>C</sub> &times; 3 = 20g &times; 2, so R<sub>C</sub> = 40g/3, about 130.7 N.',
          ],
          rightH3: 'Resolving vertically',
          right: [
            'R<sub>A</sub> + R<sub>C</sub> = 20g, so R<sub>A</sub> = 20g &minus; 40g/3 = 20g/3, about 65.3 N. Keeping g as a symbol until the last line avoids rounding twice.'
          ] },
        { kind: 'table', mt: true, caption: 'Six practice questions we wrote for 7357 students (answers checked in Python)', head: ['#', 'Our question', 'Paper', 'Answer'], rows: [
          ['1', 'Solve 2 ln x = ln(3x + 4).', 'Pure', 'x = 4 (x = &minus;1 is rejected)'],
          ['2', 'Evaluate the integral of xe<sup>x</sup> from x = 0 to x = 1.', 'Pure', '1'],
          ['3', 'Find the sum of the first 20 terms of 3, 7, 11, 15, ...', 'Pure', '820'],
          ['4', 'Use one Newton-Raphson step from x<sub>0</sub> = 2 on x<sup>3</sup> &minus; 2x &minus; 5 = 0.', 'Pure', 'x<sub>1</sub> = 2.1'],
          ['5', 'A car accelerates uniformly from 3 m s<sup>&minus;1</sup> to 15 m s<sup>&minus;1</sup> in 4 s. How far does it travel?', 'Paper 2', '36 m'],
          ['6', 'X ~ B(12, 0.3). Find P(X = 4) to 4 decimal places.', 'Paper 3', '0.2311']
        ] },
        { kind: 'source', html: 'All three worked problems and the six practice questions were written by us on 31 October 2026; none is an AQA question. AQA publishes specimen papers and past papers on its <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357" rel="noopener" target="_blank">7357 assessment resources</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs across Years 12 and 13',
    lede: 'Pure first because all three papers need it; the applied areas follow, then full papers.',
    table: { caption: 'Stages through AQA 7357', head: ['Stage', 'Usually', 'Sign that it is done'], rows: [
      ['1. GCSE to A level bridge', 'First half-term of Year 12', 'Algebra, surds, indices and quadratics handled quickly and accurately'],
      ['2. Core pure', 'Year 12', 'Proof, functions, trigonometry, logarithms, differentiation and integration, all by method'],
      ['3. Applied with pure', 'Late Year 12 and Year 13', 'Mechanics with vectors and calculus; statistics with the large data set and the calculator'],
      ['4. Three-paper practice', 'Final two terms', 'Each paper type timed, with working that names the method and the context']
    ] },
    left: { h3: 'Stage one is short and decisive', ps: [
      'Most early A level difficulty traces back to GCSE algebra. A few weeks here saves a year of slips.',
      'Students who like numerical methods can see them in code on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Stage four respects the mix', ps: [
      'Because pure appears on every paper, we never set an applied practice paper without pure questions in it.',
      'Classes slow during the summer exam weeks.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around A level Maths',
    lede: 'Arranged by when sixth formers tend to use them. The free first class tells us where to begin.',
    bands: [
      { num: 'I', h3: 'The A level', sub: 'Years 12 and 13', courses: [
        { code: 'UK / AQ1 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'All 7357 content, pure through to mechanics and statistics.' },
        { code: 'UK / AQ1 / 02', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'For students taking Further Maths with AQA or another board.' },
        { code: 'UK / AQ1 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Extra depth for Paper 3 and the large data set.' }
      ] },
      { num: 'II', h3: 'Bridging', sub: 'From GCSE to sixth form', courses: [
        { code: 'UK / AQ2 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'Higher GCSE algebra secured before Year 12 begins.' },
        { code: 'UK / AQ2 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For a sixth former whose algebra slows everything else.' },
        { code: 'UK / AQ2 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Numerical methods and data handled in Python.' }
      ] },
      { num: 'III', h3: 'Beyond', sub: 'University and stretch', courses: [
        { code: 'UK / AQ3 / 01', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'Calculus, linear algebra and analysis for first-year undergraduates.' },
        { code: 'UK / AQ3 / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Problem solving well beyond the specification.' },
        { code: 'UK / AQ3 / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'Statistics and linear algebra for students heading to data courses.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Pure inside every applied lesson',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our teachers are in India, which keeps the same clock all year, and we arrange each class in UK time around sixth-form timetables.',
    slots: [
      { time: 'After college', l: 'The usual slot for Year 12 and 13.' },
      { time: 'Evening', l: 'Fits round part-time work and other subjects.' },
      { time: 'Weekend morning', l: 'Long enough for one full paper.' }
    ],
    cells: [
      { h3: 'Pure on every paper', p: 'Applied practice always includes pure questions, as AQA\'s papers do.' },
      { h3: 'Data set weekly', p: 'Short tasks on AQA\'s large data set through Year 13.' },
      { h3: 'Calculator checks', p: 'Iteration, distributions and inverse normal practised on the student\'s own model.' },
      { h3: 'Context sentences', p: 'Conclusions written about the situation, for the reasoning marks.' },
      { h3: 'Formulae to recall', p: 'Appendix B formulae tested until they are automatic.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20 sixth formers, or one teacher for one student.' }
    ]
  },

  projectsH2: 'Student projects from class',
  projectsLede: 'Work made during lessons, not graded for any exam. More are collected in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews written by parents, as posted.',

  fees: {
    h2: 'Fees for AQA 7357 classes',
    lede: 'One monthly fee in US dollars for students outside India. The first class is free, and no payment is taken until a course and a weekly time are in place.',
    free: ['A first class on a 7357 topic', 'A clear view of strengths across the three papers', 'Booked with a phone number'],
    group: ['A group of 15 to 20 sixth formers', 'One teacher across Years 12 and 13', 'Large data set tasks', 'Lighter weeks in the summer series'],
    one: ['One teacher for one student', 'Planned around mocks and college deadlines', 'Suits a student retaking 7357']
  },

  faq: {
    eyebrow: 'Questions about 7357',
    h2: 'What students and parents ask about AQA A level Maths',
    items: [
      { q: 'How many papers are in AQA A level Maths?', a: 'Three. Each is a 2-hour written exam with 100 marks, worth a third of the A level. All three are sat at the end of the course, because 7357 is linear.' },
      { q: 'What is on AQA A level Maths Paper 2?', a: 'Any pure content from Paper 1, plus vectors and the mechanics areas: quantities and units, kinematics, forces and Newton\'s laws, and moments.' },
      { q: 'What is on AQA A level Maths Paper 3?', a: 'Any pure content from Paper 1, plus statistics: sampling, data presentation and interpretation, probability, statistical distributions and hypothesis testing.' },
      { q: 'Is there a non-calculator paper in AQA A level Maths?', a: 'No. AQA says a calculator is required for all assessments in 7357. It must have an iterative function, statistical distributions and an inverse normal function.' },
      { q: 'What is the AQA large data set?', a: 'A real data set AQA publishes on its website, which students must know before the exam. The first was an extract of the Family Food data for 2018 and 2019 exams, and a replacement has been used since 2020.' },
      { q: 'How is AQA A level Maths graded?', a: 'The three papers are added to a total out of 300, and grades A* to E are awarded on that total. A student below E receives a U and no certificate.' },
      { q: 'Can I resit AQA A level Maths?', a: 'Yes. AQA says students can re-sit the qualification as many times as they wish within its shelf life. Because it is linear, a resit means all three papers again.' },
      { q: 'Is AQA A level Maths harder than Edexcel?', a: 'The assessment objectives are set by Ofqual and are the same for every board. The difference is structure: AQA spreads pure across all three papers, while Edexcel keeps statistics and mechanics together on Paper 3.' },
      { q: 'When are your 7357 classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are given in UK time.' },
      { q: 'Are you linked with AQA?', a: 'No. Modern Age Coders is an independent teaching company with no connection to AQA. Every practice question on this page was written by us.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for sixth-form mathematicians',
    lede: 'Further Maths, costs, and the wider A level picture.',
    items: [
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition online', p: 'Our general A level page, across every board.' },
      { href: '/further-maths-tuition-online', label: 'Further maths tuition online', p: 'For students adding Further Maths to 7357.' },
      { href: '/is-a-level-further-maths-worth-it', label: 'Is A level Further Maths worth it?', p: 'A plain look at the extra A level.' },
      { href: '/a-level-maths-tutor-cost-uk', label: 'A level maths tutor cost in the UK', p: 'What families typically weigh when budgeting for tuition.' },
      { href: '/aqa-a-level-computer-science-7517-help', label: 'AQA A level Computer Science 7517', p: 'The AQA computing A level many maths students take too.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page we publish, in one place.' }
    ]
  },

  start: {
    h2: 'Book a free 7357 class',
    lede: 'Leave a number and we will call at a UK time that fits round college. The first class works through one of our problems from each paper type, so you see where the gaps are.',
    readFirst: 'Want to read more first? Each <a class="ag-inline-link" href="/courses">course page</a> lists its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes our approach, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows what students make.',
    note: 'WhatsApp gets the fastest reply and is free from a UK number. Our team answers from India, on a +91 number.',
    formNote: 'No payment and no contract; just one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'A level maths', links: [
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/a-level-maths-tutor-cost-uk', label: 'Tutor costs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'AQA and more', links: [
        { href: '/aqa-a-level-computer-science-7517-help', label: 'AQA Computer Science 7517' },
        { href: '/is-a-level-further-maths-worth-it', label: 'Is Further Maths worth it?' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'AQA A level Maths 7357, live on UK time'
  },

  personalityCss: `
.ag-root.ag-aql .ag-hero h1 { letter-spacing: -0.021em; font-weight: 710; }
.ag-root.ag-aql .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-aql .ag-section-head h2 { max-width: 25ch; }
.ag-root.ag-aql .ag-table caption { text-align: left; font-weight: 670; }
.ag-root.ag-aql .ag-table th:first-child { width: 12%; }
.ag-root.ag-aql .ag-steps li { padding-bottom: 6px; }
`,

  dossier: {
    curriculumAuthority: 'AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for exams in 2018 onwards: linear; Paper 1 content A to I, Paper 2 any Paper 1 content plus J and P to S, Paper 3 any Paper 1 content plus K to O; each paper 2 hours, 100 marks, one third; AO1 50, AO2 25, AO3 25 per paper; total scaled mark 300; grades A* to E, U without certificate; re-sits within shelf life; no previous learning requirements; Appendix B formulae to recall; large data set (Family Food extract for 2018 and 2019, replacement from 2020, only on the AQA website); calculator required with iterative function, statistical distributions and inverse normal; private candidates UK-based.',
    localProject: 'Both applied papers are part pure. The page sets out what each 7357 paper can test by content letter, the scaling to 300 and the AO weightings, re-sit and entry rules, a five-step plan for AQA\'s large data set, and the three calculator functions AQA requires with where each is used, then works three of our own problems (a normal distribution with an inverse normal step to 60.25 g, a binomial test with critical region X >= 15, and beam reactions 20g/3 and 40g/3) and a six-question practice set written by us.',
    requiredMentions: ['with every exam sat when the course ends', 'Total scaled mark: 300', 'will not receive a qualification certificate', 'This replacement dataset is also only available on the AQA website.', 'an inverse normal function', 'a subset or features of the data', 'There are no previous learning requirements.', 'P(X &ge; 15) = 0.0207', 'R<sub>C</sub> = 40g/3', 'Any content from Paper 1'],
    sources: [
      { claim: 'AQA A-level Mathematics (7357) specification, version 1.3: paper content, timings, marks, weights, AOs, scaling, grading, re-sits, prior learning, formulae, large data set, calculators and private candidates.', url: 'https://cdn.sanity.io/files/p28bar15/green/746cb551bd31654dd1297ad272acd3605010a543.pdf' },
      { claim: 'AQA A-level Mathematics 7357 subject page linking the specification and assessment resources.', url: 'https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357' },
      { claim: 'Pearson Edexcel A level Mathematics 9MA0 specification, Issue 4: paper structure used for the board comparison in the FAQ.', url: 'https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf' }
    ],
    rejectedClaims: [
      'The name and contents of AQA\'s post-2020 large data set: the specification says only that a replacement exists on the AQA website; it was not downloaded or described.',
      'June 2027 exam dates: AQA and JCQ timetables were not read (JCQ returned HTTP 403 on 31 October 2026), so no date is printed.',
      'Grade boundaries and results statistics: not read at a primary source, not printed.',
      'That AQA is harder or easier than another board: not claimed; the FAQ describes structural differences only.',
      'Any AQA past paper or specimen question: not reproduced; examples and practice set are ours.',
      'Any grade promise or affiliation with AQA: both declined on the page.'
    ]
  }
};
