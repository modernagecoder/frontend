'use strict';
// WJEC GCE AS and A level Mathematics (Wales) help (ag- exam door, UK and US exams cluster Phase 2, row UK035).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/wjec-a-level-maths-help-wales/):
//  - WJEC GCE AS/A Level in Mathematics specification, "APPROVED BY QUALIFICATIONS WALES", "Teaching from 2017", Version
//    2 March 2019 (https://www.wjec.co.uk/media/lm3fegtu/wjec-gce-maths-spec-from-2017-e.pdf; the URL was located with a
//    web search because the WJEC page loads its documents by script; every quote below is from the raw PDF). Verbatim:
//    "This Qualifications Wales regulated qualification is not available to centres in England."; "This specification
//    is divided into a total of 4 units, 2 AS units and 2 A2 units."; "All units are compulsory."; AS Unit 1 Pure
//    Mathematics A "2 hours 30 minutes", "25% of qualification", "120 marks"; AS Unit 2 Applied Mathematics A "1 hour 45
//    minutes", "15% of qualification", "75 marks", "Section A: Statistics (40 marks)", "Section B: Mechanics (35
//    marks)"; A2 Unit 3 Pure Mathematics B 2 hours 30 minutes, 35%, 120 marks; A2 Unit 4 Applied Mathematics B 1 hour 45
//    minutes, 25%, 80 marks, "Section A: Statistics (40 marks)", "Section B: Differential Equations and Mechanics (40
//    marks)"; "The total assessment time of 1 hour 45 minutes can be split between Section A and Section B as learners
//    deem appropriate."; "A calculator will be allowed in this examination."; "This is a unitised specification, which
//    allows for an element of staged assessment."; AO weightings table (AS units 40%, A2 units 60%; AO1 50, AO2 25, AO3
//    25 overall); "A calculator is required for use in all assessments in this specification."; "A formula booklet will
//    be required in all examinations. This will exclude any formulae listed in Appendix B."; "Candidates may use a book
//    of statistical tables for Unit 2 and Unit 4."; "Elementary Statistical Tables (RND/WJEC Publications)"; fresh start
//    rule ("if any unit has been attempted twice and a candidate wishes to enter the unit for the third time, then the
//    candidate will have to re-enter all units and the appropriate cash-in(s). This is referred to as a 'fresh start'.");
//    "no results from units taken prior to the fresh start can be used in aggregating the new grade(s)"; absence "does
//    not count as an attempt"; entry codes 2300U1, 2300U2, 1300U3, 1300U4, cash-ins 2300QS and 1300QS, Welsh-medium
//    2300N1 and so on; UMS: "An AS GCE has a total of 240 uniform marks and an A level GCE has a total of 600 uniform
//    marks."; unit maxima 150, 90, 210, 150; grade thresholds A 480, B 420, C 360, D 300, E 240; "Grade A* will be
//    awarded to candidates who have achieved a Grade A (480 uniform marks) in the overall A level qualification and at
//    least 90% of the total uniform marks for the A2 units (324 uniform marks)."; unit grades "a to e on results slips but
//    not on certificates"; Unit 4 content "Construct simple differential equations in context (contexts may include
//    kinematics, population growth and modelling the relationship between price and demand)"; moments listed under A2
//    Unit 4 (2.4.10); Welsh perspective section 1.5; "Learners should be able to demonstrate the ability to analyse a
//    subset or features of the data using a calculator with standard statistical functions."
//  - WJEC AS/A Level Mathematics qualification page: qualification codes 1300QS and 2300QS, QWADN C00/1153/6 (A level),
//    QN 603/1977/X (A level), "Teaching: Sept 2017".
// Our own material, labelled on the page: two UMS profiles for imaginary students (total 542 with A2 330 gives A*;
// total 545 with A2 320 gives A), a Unit 4 differential equation (dP/dt = 0.05P, P = 200 to 500 in 18.3 years), a Unit 2
// kinematics example (105 m), and a six-question practice set, all checked in Python on 31 October 2026. No WJEC
// question is reproduced. The UMS arithmetic is ours, applied to WJEC's published thresholds.
// Spine: units and uniform marks. WJEC's A level is unitised: AS units sat in Year 12 count 40 per cent, results are
// converted to uniform marks, and A* depends on the A2 units alone reaching 324 of 360. Lesson family: planning across
// two exam summers.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'WJEC MATHS', blurb: 'Four units over two summers, with AS worth 40 per cent. A* needs 324 of the 360 uniform marks on the A2 units alone.' },
  slug: 'wjec-a-level-maths-help-wales',
  code: 'wlw',
  accent: '#625D22',
  accentRationale: 'WJEC A level Maths: a moss bronze #625D22 from the cluster allocation, 6.37:1 on #FBF8F2, warmer than the olive used for OCR MEI, and unrelated to the red of the Welsh flag so it does not borrow national symbols',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'WJEC A level Maths help (Wales)',
  title: 'WJEC A Level Maths Help (Wales): Units, UMS and A*',
  description: 'WJEC A level Maths help for Wales: the four units, how AS counts for 40 per cent, uniform marks and the A* rule, resit limits, and live online lessons.',
  ogDescription: 'WJEC GCE AS and A level Mathematics in Wales, from the specification: Units 1 to 4, timings and marks, the formula booklet, UMS grading, the A* rule and the fresh start rule for resits.',
  twitterDescription: 'WJEC A level Maths is unitised: Year 12 units count, uniform marks decide grades, and A* hangs on the A2 units. Here is how it works.',
  pageName: 'WJEC A Level Maths Help (Wales)',
  webPageDescription: 'Live online teaching for WJEC GCE AS and A level Mathematics students in Wales, written from the WJEC specification.',
  courseDescription: 'Live online classes for WJEC A level Mathematics in Wales: Units 1 to 4, pure, statistics, mechanics and differential equations, planned across both exam summers.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'WJEC A level Maths (Wales)',
  navLinks: [
    { href: '#units', label: 'Four units' },
    { href: '#ums', label: 'Uniform marks' },
    { href: '#resits', label: 'Resits' },
    { href: '#examples', label: 'Examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'WJEC &middot; GCE AS and A level Mathematics &middot; Wales',
  h1: 'WJEC A level Maths help for Wales',
  lede: 'Students in Wales usually take WJEC\'s A level Mathematics, and it works differently from the English boards. It is unitised: two AS units are sat at the end of Year 12 and count towards the final grade, two A2 units follow in Year 13, and every unit result is turned into uniform marks before grades are worked out. This page sets out the units, the uniform mark scale, the A* rule, the resit rules and how we teach WJEC maths live online.',
  secondaryCta: { href: '#ums', label: 'How uniform marks work' },
  wa: 'Hello Modern Age Coders, I would like a free first class for WJEC A level Maths.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Not connected with WJEC',
  spec: [
    ['Qualification', 'WJEC GCE AS and A level Mathematics'],
    ['Regulator', 'Qualifications Wales'],
    ['Units', '4: two AS, two A2'],
    ['AS share', '40 per cent of the A level'],
    ['Grading', 'Uniform marks out of 600'],
    ['Calculator', 'Required in every unit'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'The quick version',
  capsule: 'WJEC GCE A level Mathematics is the Qualifications Wales regulated A level taught in Wales, and is not available to centres in England. It has four compulsory units: AS Unit 1 Pure A and Unit 2 Applied A, worth 40 per cent together, then A2 Unit 3 Pure B and Unit 4 Applied B. Results are added in uniform marks out of 600. Modern Age Coders teaches WJEC maths live online through the A Level Maths course, as a 15 to 20 student batch or 1-on-1, beginning with a lesson we do not charge for.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Courses for a WJEC maths student in Wales',
    lede: 'The A level course follows the four WJEC units. The statistics course adds depth for both Section As; Further Maths is for students taking WJEC Further Mathematics too.',
    items: [
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'WJ / 01', title: 'A Level Maths', note: 'Units 1 to 4 in WJEC order, with the Year 12 units treated as real exams.' },
      { course: 'statistics-probability-maths-course', code: 'WJ / 02', title: 'Statistics and Probability', note: 'Forty marks of statistics sit in both Unit 2 and Unit 4.' },
      { course: 'a-level-further-maths-course', code: 'WJ / 03', title: 'A Level Further Maths', note: 'For students also entered for WJEC Further Mathematics.' }
    ]
  },

  sections: [
    {
      id: 'units', tint: 'tint', eyebrow: 'Four units',
      h2: 'What are the four WJEC A level Maths units?',
      lede: 'Two pure units of 2 hours 30 minutes and two applied units of 1 hour 45 minutes. The AS pair is sat in Year 12, the A2 pair in Year 13.',
      body: [
        { kind: 'p', html: 'WJEC\'s specification opens its summary with: "This specification is divided into a total of 4 units, 2 AS units and 2 A2 units." It adds "All units are compulsory." and states that "A calculator will be allowed" in each examination. The weightings are expressed as shares of the full A level.' },
        { kind: 'table', caption: 'WJEC GCE A level Mathematics (Wales): the four units', head: ['Unit', 'Title and sections', 'Time', 'Raw marks', 'Share of A level'], rows: [
          ['AS Unit 1', 'Pure Mathematics A', '2 hours 30 minutes', '120', '25%'],
          ['AS Unit 2', 'Applied Mathematics A: Section A Statistics (40), Section B Mechanics (35)', '1 hour 45 minutes', '75', '15%'],
          ['A2 Unit 3', 'Pure Mathematics B', '2 hours 30 minutes', '120', '35%'],
          ['A2 Unit 4', 'Applied Mathematics B: Section A Statistics (40), Section B Differential Equations and Mechanics (40)', '1 hour 45 minutes', '80', '25%']
        ] },
        { kind: 'source', html: 'Source: WJEC GCE AS/A Level in Mathematics specification, Version 2, March 2019, Summary of assessment, linked from the <a class="ag-inline-link" href="https://www.wjec.co.uk/qualifications/mathematics-aas-level/" rel="noopener" target="_blank">WJEC AS/A level Mathematics page</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'Two details people miss',
          left: [
            'On both applied units, WJEC says "The total assessment time of 1 hour 45 minutes can be split between Section A and Section B as learners deem appropriate." There is no bell halfway; the student manages the clock.',
            'Unit 4 Section B is titled Differential Equations and Mechanics. Constructing and solving simple differential equations in context is examined there, with contexts such as kinematics, population growth and price and demand.'
          ],
          rightH3: 'What sits in Year 13 only',
          right: [
            'Moments are listed in the A2 Unit 4 content rather than AS Unit 2, so AS mechanics covers kinematics, forces, Newton\'s laws and vectors without them.',
            'Numerical methods appear in Unit 3. Students who stop at AS never meet either topic, which matters for anyone cashing in AS only.'
          ] }
      ]
    },
    {
      id: 'ums', tint: 'deep', eyebrow: 'Uniform marks',
      h2: 'How does UMS grading work for WJEC A level Maths?',
      lede: 'Each unit\'s raw mark is converted to uniform marks on a fixed scale. The four are added to a total out of 600, and grades are set on that total.',
      body: [
        { kind: 'p', html: 'WJEC explains that "The Uniform Mark Scale (UMS) is used in unitised specifications" so that "candidates who achieve the same standard will have the same uniform mark, irrespective of when the unit was taken." In its words: "An AS GCE has a total of 240 uniform marks and an A level GCE has a total of 600 uniform marks." Unit grades appear "as a lower case letter a to e on results slips but not on certificates."' },
        { kind: 'table', mt: true, caption: 'Uniform mark maxima and grade thresholds, from section 4.2 of the WJEC specification', head: ['Level', 'Maximum UMS', 'a or A', 'b or B', 'c or C', 'd or D', 'e or E'], rows: [
          ['Unit 1 (raw max 120)', '150', '120', '105', '90', '75', '60'],
          ['Unit 2 (raw max 75)', '90', '72', '63', '54', '45', '36'],
          ['Unit 3 (raw max 120)', '210', '168', '147', '126', '105', '84'],
          ['Unit 4 (raw max 80)', '150', '120', '105', '90', '75', '60'],
          ['AS qualification', '240', '192', '168', '144', '120', '96'],
          ['A level qualification', '600', '480', '420', '360', '300', '240']
        ] },
        { kind: 'p', mt: true, html: 'The A* has its own condition. WJEC states: "Grade A* will be awarded to candidates who have achieved a Grade A (480 uniform marks) in the overall A level qualification and at least 90% of the total uniform marks for the A2 units (324 uniform marks)." The A2 units carry 210 plus 150 uniform marks, so the A* is decided by Year 13 performance. A brilliant Year 12 cannot carry a weaker Year 13 over that line.' },
        { kind: 'table', mt: true, caption: 'Two imaginary students, our arithmetic on WJEC\'s published thresholds', head: ['Student', 'Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Total', 'A2 total', 'Grade'], rows: [
          ['Our student R', '132', '80', '190', '140', '542', '330', 'A* (480 and 324 both met)'],
          ['Our student S', '145', '80', '185', '135', '545', '320', 'A (total higher, but A2 short of 324)']
        ] },
        { kind: 'p', mt: true, html: 'Student S has the higher total and the lower grade. That is the single most useful fact for planning WJEC maths: once the AS units are done, every remaining hour of effort goes into Units 3 and 4, because they alone decide the A*.' }
      ]
    },
    {
      id: 'resits', tint: '', eyebrow: 'Resits',
      h2: 'Can you resit a WJEC A level Maths unit?',
      lede: 'Yes, up to two attempts per unit. A third attempt at any unit triggers a fresh start, which means re-entering every unit.',
      body: [
        { kind: 'p', html: 'Version 2 of the specification was issued to clarify exactly this. WJEC writes: "if any unit has been attempted twice and a candidate wishes to enter the unit for the third time, then the candidate will have to re-enter all units and the appropriate cash-in(s). This is referred to as a \'fresh start\'." After a fresh start "no results from units taken prior to the fresh start can be used in aggregating the new grade(s)". An absence "does not count as an attempt".' },
        { kind: 'ol', mt: true, items: [
          'Count attempts per unit, not per year. A Unit 1 sat in Year 12 and again in Year 13 has used both attempts.',
          'Before entering a resit, check that the gain in uniform marks is worth the attempt, using the threshold table above.',
          'Remember the A* condition looks only at Units 3 and 4. Resitting Unit 1 can lift a total, but never meets the 324 requirement on its own.',
          'Ask the exams officer to confirm entry codes: 2300U1, 2300U2, 1300U3 and 1300U4 in English, with N in place of U for Welsh-medium entries.',
          'Cash in the qualification with 1300QS for the A level, or 2300QS for AS only.'
        ] },
        { kind: 'p', mt: true, html: 'Assessment opportunities "will be available in the summer assessment period each year", so a resit means waiting for the next summer. We plan any resit with the family in the autumn, so the extra unit does not crowd out Unit 3, which is worth more than any other.' }
      ]
    },
    {
      id: 'exam-room', tint: 'tint', eyebrow: 'In the exam room',
      h2: 'Which calculator, formula booklet and tables are allowed in WJEC maths?',
      lede: 'A calculator is required in every unit, a WJEC formula booklet is used in every exam, and a named book of statistical tables is allowed for Units 2 and 4.',
      body: [
        { kind: 'table', caption: 'Materials rules from section 3 of the WJEC specification', head: ['Item', 'What WJEC says'], rows: [
          ['Calculator', '"A calculator is required for use in all assessments in this specification." It must include an iterative function and summary statistics with probabilities from standard distributions'],
          ['Banned calculator features', 'Symbolic algebra manipulation, symbolic differentiation or integration, language translators, communication with other machines, and stored formulas or text'],
          ['Formula booklet', '"A formula booklet will be required in all examinations. This will exclude any formulae listed in Appendix B."'],
          ['Statistical tables', 'Allowed for Unit 2 and Unit 4: Elementary Statistical Tables (RND/WJEC Publications)'],
          ['Data', 'Students should analyse "a subset or features of the data using a calculator with standard statistical functions"']
        ] },
        { kind: 'p', mt: true, html: 'The booklet line is the one that catches students out. Appendix B formulae, such as the standard trigonometric identities and derivatives listed there, are deliberately left out of the booklet, so they have to be memorised. We test the Appendix B list in short weekly quizzes from the first month of Year 12.' }
      ]
    },
    {
      id: 'examples', tint: 'deep', eyebrow: 'Examples, ours',
      h2: 'Worked examples for Unit 2 and Unit 4, written by us',
      lede: 'A Year 12 kinematics problem and a Year 13 differential equation, both ours, then a practice set.',
      body: [
        { kind: 'p', html: '<strong>Our Unit 2 problem.</strong> A cyclist starts from rest and accelerates uniformly at 2.5 m s<sup>&minus;2</sup> for 6 seconds, then rides at constant speed for 4 seconds. How far does the cyclist travel in the 10 seconds?' },
        { kind: 'two', mt: true,
          leftH3: 'Phase one',
          left: [
            'With u = 0, a = 2.5 and t = 6, s = ut + &frac12;at<sup>2</sup> = &frac12; &times; 2.5 &times; 36 = 45 m, and the speed reached is v = at = 15 m s<sup>&minus;1</sup>.'
          ],
          rightH3: 'Phase two',
          right: [
            'At a steady 15 m s<sup>&minus;1</sup> for 4 s the distance is 60 m. In total the cyclist covers 105 m. A velocity-time graph, a trapezium with area 105, checks it.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Our Unit 4 problem.</strong> A population P grows at a rate proportional to its size, with dP/dt = 0.05P, where t is in years. When t = 0, P = 200. Find how long it takes to reach 500, and give one limitation of the model.' },
        { kind: 'ol', mt: true, items: [
          'Separate the variables: the integral of dP/P equals the integral of 0.05 dt, so ln P = 0.05t + c.',
          'Use P = 200 at t = 0: c = ln 200, so P = 200e<sup>0.05t</sup>.',
          'Set P = 500: e<sup>0.05t</sup> = 2.5, so t = ln 2.5 &divide; 0.05 = 18.3 years to 3 significant figures.',
          'Limitation: the model grows without bound, but real populations are limited by food and space, so it can only hold for a while. WJEC\'s Unit 4 content asks for exactly this kind of interpretation.'
        ] },
        { kind: 'table', mt: true, caption: 'Six practice questions we wrote for WJEC students (answers checked in Python)', head: ['#', 'Our question', 'Unit', 'Answer'], rows: [
          ['1', 'Evaluate the integral of x sin x from 0 to &pi;.', '3', '&pi;'],
          ['2', 'dv/dt = &minus;0.2v and v = 15 when t = 0. When does v first equal 5?', '4', 't = 5 ln 3, about 5.49'],
          ['3', 'X ~ B(20, 0.4). Find P(X &le; 3).', '2', '0.0160'],
          ['4', 'X ~ B(12, 0.25). Find P(X &ge; 7).', '2 or 4', '0.0143'],
          ['5', 'A car decelerates uniformly from 24 m s<sup>&minus;1</sup> to rest in 60 m. Find the deceleration.', '2', '4.8 m s<sup>&minus;2</sup>'],
          ['6', 'A uniform 6 m plank of weight 300 N rests on supports at each end. A 200 N child stands 2 m from one end. Find the reaction at the nearer support.', '4', '283 N (exactly 850/3)']
        ] },
        { kind: 'source', html: 'Every example and practice question here was written by us on 31 October 2026. WJEC publishes past papers and mark schemes, and an Online Exam Review tool, from its <a class="ag-inline-link" href="https://www.wjec.co.uk/qualifications/mathematics-aas-level/" rel="noopener" target="_blank">AS/A level Mathematics page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Two summers, planned as one course',
    lede: 'Units 1 and 2 in the first June, Units 3 and 4 in the second, with resits considered in between.',
    table: { caption: 'Stages through WJEC A level Mathematics', head: ['Stage', 'Usually', 'Sign that it is done'], rows: [
      ['1. Unit 1 pure', 'Year 12, autumn and spring', 'Proof, algebra, trigonometry, calculus and vectors handled steadily'],
      ['2. Unit 2 applied', 'Year 12, spring and summer', 'Statistics and mechanics answered with time split sensibly'],
      ['3. Review after results', 'Year 13, September', 'Uniform marks read, any resit decided with two attempts in mind'],
      ['4. Units 3 and 4', 'Year 13', 'Differential equations, moments and numerical methods secure; A2 timed papers']
    ] },
    left: { h3: 'Why stage three exists', ps: [
      'August results arrive as uniform marks. Reading them against the table above turns a vague worry into a plan.',
      'We do that review with every family in September.'
    ] },
    right: { h3: 'Why stage four gets most hours', ps: [
      'Units 3 and 4 hold 60 per cent of the A level and the whole A* condition.',
      'Our Year 13 timetable reflects that.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for maths students in Wales',
    lede: 'By stage of the course. The free lesson helps us suggest one.',
    bands: [
      { num: 'I', h3: 'For the WJEC units', sub: 'Years 12 and 13', courses: [
        { code: 'UK / WJ1 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Units 1 to 4 in the order WJEC examines them.' },
        { code: 'UK / WJ1 / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For the 40-mark statistics sections.' },
        { code: 'UK / WJ1 / 03', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'For students adding WJEC Further Mathematics.' }
      ] },
      { num: 'II', h3: 'Groundwork', sub: 'From GCSE in Wales', courses: [
        { code: 'UK / WJ2 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'Higher-tier skills checked before the sixth form.' },
        { code: 'UK / WJ2 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Manipulation repaired before it costs Unit 1 marks.' },
        { code: 'UK / WJ2 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Differential equations and iteration simulated in Python.' }
      ] },
      { num: 'III', h3: 'Looking ahead', sub: 'University', courses: [
        { code: 'UK / WJ3 / 01', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP', blurb: 'For applicants to maths-heavy degrees.' },
        { code: 'UK / WJ3 / 02', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'First-year calculus and linear algebra.' },
        { code: 'UK / WJ3 / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'Statistics extended towards data careers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Built around two summers of exams',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Lessons are booked in UK time, which Wales shares, and our teachers in India keep that slot fixed all year.',
    slots: [
      { time: 'After school', l: 'The usual slot for Year 12 groups.' },
      { time: 'Evening', l: 'For students with clubs or work.' },
      { time: 'Weekend morning', l: 'Room for a 2 hour 30 minute pure unit.' }
    ],
    cells: [
      { h3: 'Year 12 counts', p: 'Units 1 and 2 taught as real exams, not practice.' },
      { h3: 'Clock control', p: 'Splitting 1 hour 45 minutes between two sections.' },
      { h3: 'Appendix B quizzes', p: 'The formulae the booklet leaves out, tested weekly.' },
      { h3: 'September review', p: 'Uniform marks read and a resit decision made.' },
      { h3: 'A2 focus', p: 'Most Year 13 hours on Units 3 and 4.' },
      { h3: 'Batch or 1-on-1', p: '15 to 20 students together, or a single learner.' }
    ]
  },

  projectsH2: 'Student work from lessons',
  projectsLede: 'Made in class, not submitted to any board. More are shown in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews parents left on Google, reproduced as written.',

  fees: {
    h2: 'Fees for WJEC A level Maths classes',
    lede: 'Students in Wales pay one monthly fee in US dollars. The opening lesson is free, and payment starts only when a course and a weekly time are fixed.',
    free: ['A free lesson on any WJEC unit', 'A look at likely uniform marks', 'Booked by phone or WhatsApp'],
    group: ['A batch of 15 to 20', 'The same teacher for both summers', 'Unit 2 and Unit 4 statistics depth', 'Lighter weeks in exam season'],
    one: ['One student, one teacher', 'Planned round resit decisions', 'Suits a fresh start or a single unit resit']
  },

  faq: {
    eyebrow: 'WJEC maths questions',
    h2: 'What families in Wales ask about WJEC A level Maths',
    items: [
      { q: 'Is WJEC A level Maths available in England?', a: 'No. WJEC\'s specification says this Qualifications Wales regulated qualification is not available to centres in England. Schools in England use other boards.' },
      { q: 'Do AS results count towards the WJEC A level?', a: 'Yes. Units 1 and 2, sat in Year 12, make up 40 per cent of the A level. Units 3 and 4 make up the other 60 per cent.' },
      { q: 'How many uniform marks do you need for an A in WJEC A level Maths?', a: 'An A needs 480 of the 600 uniform marks. B needs 420, C 360, D 300 and E 240, according to the specification.' },
      { q: 'How do you get an A* in WJEC maths?', a: 'You need an overall A, with at least 480 uniform marks, and at least 324 of the 360 uniform marks on the two A2 units. The second condition depends on Units 3 and 4 alone.' },
      { q: 'How many times can I resit a WJEC unit?', a: 'Each unit can be attempted twice. A third attempt at any unit means a fresh start: all units re-entered, and earlier unit results no longer count.' },
      { q: 'Is there a formula booklet for WJEC A level Maths?', a: 'Yes, one is required in all WJEC maths exams. It leaves out the formulae in Appendix B of the specification, which must be learned.' },
      { q: 'What is on WJEC Unit 4?', a: 'Applied Mathematics B: a 40-mark statistics section and a 40-mark section on differential equations and mechanics, in 1 hour 45 minutes. Moments are part of it.' },
      { q: 'Can WJEC A level Maths be taken in Welsh?', a: 'Yes. The specification lists Welsh-medium entry codes for every unit, such as 2300N1 for Unit 1, alongside the English-medium codes.' },
      { q: 'When are your WJEC maths classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are UK time.' },
      { q: 'Are you connected with WJEC?', a: 'No. Modern Age Coders is an independent company with no link to WJEC or Qualifications Wales. The examples and practice questions here are ours.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for students in Wales',
    lede: 'Local and subject pages that sit near WJEC maths.',
    items: [
      { href: '/maths-tuition-in-cardiff', label: 'Maths tuition in Cardiff', p: 'Our page for families in the capital.' },
      { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE Computer Science', p: 'The WJEC computing GCSE in Wales.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition online', p: 'Our general A level maths page.' },
      { href: '/further-maths-tuition-online', label: 'Further maths tuition online', p: 'For students taking Further Mathematics too.' },
      { href: '/a-level-maths-tutor-cost-uk', label: 'A level maths tutor cost in the UK', p: 'How families weigh up tuition.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free WJEC maths class',
    lede: 'Leave a number and we will phone at a UK time that suits you. In the first lesson we work through one problem from the unit you are on and talk through where the uniform marks are likely to come from.',
    readFirst: 'Would rather browse first? <a class="ag-inline-link" href="/courses">Course pages</a> carry full syllabuses, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes lessons, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows class work.',
    note: 'Messages on WhatsApp reach us soonest and cost nothing from a Welsh or other UK mobile. Expect the answer from a +91 number, since our team sits in India.',
    formNote: 'There is no charge and no agreement to sign; you get one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths in Wales', links: [
        { href: '/maths-tuition-in-cardiff', label: 'Maths tuition in Cardiff' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'WJEC and more', links: [
        { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE Computer Science' },
        { href: '/a-level-maths-tutor-cost-uk', label: 'Tutor costs' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'WJEC A level Maths lessons for Wales, UK time'
  },

  personalityCss: `
.ag-root.ag-wlw .ag-hero h1 { letter-spacing: -0.02em; font-weight: 720; }
.ag-root.ag-wlw .ag-capsule { border-left-width: 7px; border-radius: 2px; }
.ag-root.ag-wlw .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-wlw .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-wlw .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-wlw .ag-steps li { padding-bottom: 5px; }
`,

  dossier: {
    curriculumAuthority: 'WJEC GCE AS/A Level in Mathematics specification, approved by Qualifications Wales, teaching from 2017, Version 2 (March 2019): not available to centres in England; four compulsory units (Unit 1 Pure A 2h30 120 marks 25%, Unit 2 Applied A 1h45 75 marks 15% with Statistics 40 and Mechanics 35, Unit 3 Pure B 2h30 120 marks 35%, Unit 4 Applied B 1h45 80 marks 25% with Statistics 40 and Differential Equations and Mechanics 40); applied time split freely; unitised with summer assessment each year; UMS maxima 150, 90, 210, 150; AS 240 and A level 600 uniform marks; thresholds A 480 to E 240; A* needs A and 324 of 360 A2 uniform marks; two attempts per unit then fresh start; entry codes 2300U1 to 1300U4 and Welsh-medium N codes, cash-ins 2300QS and 1300QS; calculator required; formula booklet excluding Appendix B; Elementary Statistical Tables for Units 2 and 4.',
    localProject: 'Units and uniform marks. The page tabulates the four WJEC units, the uniform mark maxima and thresholds and the A* condition, then works two imaginary uniform-mark profiles (542 with A2 330 giving A*, 545 with A2 320 giving A, our arithmetic), sets out a five-step resit plan under the fresh start rule, lists the exam-room materials rules, and works a Unit 2 kinematics problem (105 m), a Unit 4 differential equation (18.3 years) and a six-question practice set, all ours.',
    requiredMentions: ['not available to centres in England', 'can be split between Section A and Section B as learners deem appropriate', 'This is referred to as a \'fresh start\'.', 'at least 90% of the total uniform marks for the A2 units (324 uniform marks)', 'an A level GCE has a total of 600 uniform marks', 'This will exclude any formulae listed in Appendix B.', 'Elementary Statistical Tables (RND/WJEC Publications)', 'Section B Differential Equations and Mechanics (40)', 'A (total higher, but A2 short of 324)', 't = ln 2.5 &divide; 0.05 = 18.3 years'],
    sources: [
      { claim: 'WJEC GCE AS/A Level in Mathematics specification, Version 2, March 2019: units, timings, marks, weights, sections, calculator, formula booklet, statistical tables, entries, resits, UMS, thresholds, A* rule and content.', url: 'https://www.wjec.co.uk/media/lm3fegtu/wjec-gce-maths-spec-from-2017-e.pdf' },
      { claim: 'WJEC AS/A Level Mathematics qualification page: qualification codes, teaching from September 2017, past papers and Online Exam Review.', url: 'https://www.wjec.co.uk/qualifications/mathematics-aas-level/' },
      { claim: 'WJEC specification section 3.1: assessment objective weightings by unit, AS 40 per cent and A2 60 per cent.', url: 'https://www.wjec.co.uk/media/lm3fegtu/wjec-gce-maths-spec-from-2017-e.pdf' }
    ],
    rejectedClaims: [
      'Raw mark to uniform mark conversions for any real series: WJEC sets these after each exam; only the published maxima and thresholds are printed, and our two student profiles are imaginary.',
      'Summer 2027 exam dates: the WJEC timetable was not read, so no date is printed.',
      'That WJEC is easier or harder than English boards: not claimed.',
      'Any WJEC past paper or Online Exam Review question: not reproduced; examples are ours.',
      'Welsh-language provision by Modern Age Coders: not offered or claimed; the page notes only that WJEC has Welsh-medium entry codes.',
      'Any grade promise or connection with WJEC or Qualifications Wales: both declined.'
    ]
  }
};
