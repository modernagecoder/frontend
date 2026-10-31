'use strict';
// AP Precalculus tutoring online (ag- exam door; UK and US exams cluster, row US059).
// Every fact from College Board's own pages and PDFs, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/ap-precalculus-tutoring-online/):
//  - AP Central course page: units and multiple-choice exam weighting, Unit 1 Polynomial and Rational Functions "30%–40%",
//    Unit 2 Exponential and Logarithmic Functions "25%–40%", Unit 3 Trigonometric and Polar Functions "30%–35%", Unit 4
//    Functions Involving Parameters, Vectors, and Matrices "Not assessed on the AP Exam" (en dashes in original, written
//    "to" on the page); practices: Procedural and Symbolic Fluency 35% to 50%, Multiple Representations 20% to 30%,
//    Communication and Reasoning 30% to 40% of the overall exam.
//  - AP Central exam page: "Tue, May 11, 2027 | Session 1"; Section I 42 questions, 1 hour 45 minutes, 62.5%: Part A 29
//    questions, 65 minutes, 43.75%, calculator not permitted; Part B 13 questions, 40 minutes, 18.75%, graphing calculator
//    required. Section II 4 questions, 1 hour 10 minutes, 37.5%: Part A 2 questions, 35 minutes, 18.75%, graphing
//    calculator required (FRQ 1 Function Concepts, FRQ 2 Modeling a Non-Periodic Context); Part B 2 questions, 35
//    minutes, 18.75%, calculator not permitted (FRQ 3 Modeling a Periodic Context, FRQ 4 Symbolic Manipulations);
//    "hybrid digital exam"; Bluebook test previews; sample free-response booklet.
//  - AP Students exam page: "The 4 questions are each worth 6 points."; "radian mode"; "2 questions incorporate a
//    real-world function modeling context".
//  - AP Central 2027 exam dates page: exams May 3 to 7 and May 10 to 14, 2027; most US schools start at 8 a.m. and 12
//    p.m. local time; Tuesday, May 11, 2027 lists Precalculus in Session 1 and Statistics in Session 2; Calculus AB and BC
//    on Monday, May 10, 2027.
//  - AP Precalculus Course Overview (PDF): "designed to be the equivalent of a first semester college precalculus
//    course"; prerequisites from the Algebra 1, Geometry, Algebra 2 sequence (list); "2 HOURS, 55 MINUTES"; "4 six-point
//    free-response questions".
//  - AP Precalculus Course and Exam Description (PDF): pacing "based on 45-minute class periods, meeting five days each
//    week for a full academic year"; Unit 1 "6–8 Weeks", Unit 2 "6–9 Weeks", Unit 3 "7–10 Weeks", Unit 4 "7 Weeks", "0%";
//    topics 1.1 Change in Tandem to 1.14, 2.1 to 2.15 Semi-log Plots, 3.1 Periodic Phenomena to 3.15 Rates of Change in
//    Polar Functions, 4.1 to 4.14; Unit 1 concepts covariation and rates of change; the model sentence "On the closed
//    interval 0 to 1, as the value of x increases, the value of y increases then decreases."; the pool example ("0.4
//    cubic meters per minute"); "students must learn to identify zeros, points of intersection, and extrema using
//    graphing calculator technology".
// Our own material, labelled on the page: the calculator split (43.75 + 18.75 = 62.5 percent of the score without a
// calculator; 18.75 + 18.75 = 37.5 percent with one required), minutes per question (65 / 29 about 2.2; 40 / 13 about
// 3.1; 35 / 2 = 17.5), a Ferris wheel model h(t) = 25 - 20 cos(pi t / 4) with its one-minute average rates (5.86, 14.14,
// 14.14, 5.86 m per minute) and first time at 35 m (t = 8/3 minutes), the log equation log2 x + log2(x - 2) = 3 (x = 4),
// the semi-log check for y = 3 * 2^x (slope log 2, about 0.301), and seven practice problems checked in Python. Lesson
// family: say what changes, and how the rate of change changes.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'AP EXAM', blurb: 'AP Precalculus for May 11, 2027: three assessed units, a calculator split that covers most of the score, and four six-point free-response questions.' },
  slug: 'ap-precalculus-tutoring-online',
  code: 'app',
  accent: '#623236',
  accentRationale: 'AP Precalculus tutoring: a dark garnet #623236 from the US allocation table, about 9.6:1 on #FBF8F2 and above 4.5:1 on every paper tint, redder and darker than the brick of the middle school competitions page',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'AP Precalculus tutoring online',
  title: 'AP Precalculus Tutoring Online: Units 1 to 3, May 2027 Exam',
  description: 'AP Precalculus tutoring online for the May 11, 2027 exam: the three assessed units, calculator rules by section, the four free-response types and practice of ours.',
  ogDescription: 'AP Precalculus is a 2 hour 55 minute exam where most of the score is earned without a calculator. Units, weights, free-response types and the precise language the course asks for.',
  twitterDescription: 'AP Precalculus tutoring: units, exam format and free-response types from College Board.',
  pageName: 'AP Precalculus Tutoring Online',
  webPageDescription: 'A guide to the AP Precalculus course and May 2027 exam from College Board\'s course and exam description, exam pages and 2027 schedule, with original worked examples and live online tutoring for grades 10 to 12.',
  courseDescription: 'Live online AP Precalculus tutoring for US high school students: polynomial, rational, exponential, logarithmic, trigonometric and polar functions, calculator and no-calculator practice, and free-response writing.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'AP Precalculus tutoring',
  navLinks: [
    { href: '#exam', label: 'The exam' },
    { href: '#units', label: 'Units' },
    { href: '#calculator', label: 'Calculator rules' },
    { href: '#frq', label: 'Free response' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 10 to 12 &middot; Exam on Tuesday, May 11, 2027',
  h1: 'AP Precalculus tutoring online',
  lede: 'AP Precalculus is easy to misread. It is not a quick review before calculus. College Board designs it as the equivalent of a first-semester college precalculus course and organizes it around two ideas, covariation and rates of change, that run through every function type from polynomials to polar curves. The exam is 2 hours and 55 minutes on the morning of Tuesday, May 11, 2027, and more of the score comes from the no-calculator parts than from the calculator parts. This page sets out the units and their weights, the calculator rules section by section, the four free-response question types, and worked examples our teachers wrote, all from College Board\'s own documents checked on October 31, 2026.',
  secondaryCta: { href: '#calculator', label: 'See the calculator split' },
  wa: 'Hello Modern Age Coders, my child is taking AP Precalculus in the US. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Every exam fact from College Board',
  spec: [
    ['Exam date', 'Tuesday, May 11, 2027, Session 1'],
    ['Length', '2 hours 55 minutes'],
    ['Multiple choice', '42 questions, 62.5% of the score'],
    ['Free response', '4 questions, 6 points each, 37.5%'],
    ['Assessed units', 'Units 1, 2 and 3'],
    ['Not assessed', 'Unit 4'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'AP Precalculus is a College Board Advanced Placement course designed as the equivalent of a first-semester college precalculus course. Its exam, on Tuesday, May 11, 2027, lasts 2 hours 55 minutes: 42 multiple-choice questions worth 62.5% of the score and four six-point free-response questions worth 37.5%, covering Units 1 to 3 (polynomial and rational, exponential and logarithmic, trigonometric and polar functions). Modern Age Coders tutors AP Precalculus live online, in a batch of 15 to 20 or 1-on-1, through our AP Precalculus exam prep course.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses for an AP Precalculus student',
    lede: 'The AP course first, then the algebra behind it and the calculus after it.',
    items: [
      { course: 'ap-precalculus-exam-prep-course', code: 'APP / 01', title: 'AP Precalculus exam prep', note: 'Units 1 to 3 in College Board\'s order, with calculator and no-calculator practice and free-response writing.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'APP / 02', title: 'High school mathematics', note: 'For a student whose Algebra 2 still slows down the precalculus.' },
      { course: 'ap-calculus-exam-prep', code: 'APP / 03', title: 'AP Calculus AB and BC', note: 'Where rates of change go next, for the year after.' }
    ]
  },

  sections: [
    {
      id: 'exam', tint: 'tint', eyebrow: 'The exam',
      h2: 'What is on the AP Precalculus exam, and when is it?',
      lede: 'The 2027 exam is on Tuesday, May 11, 2027, in the morning session. It has 42 multiple-choice questions in 1 hour 45 minutes and four free-response questions in 1 hour 10 minutes, and it covers Units 1, 2 and 3 only.',
      body: [
        { kind: 'table', caption: 'AP Precalculus exam format, from AP Central (checked October 31, 2026)', head: ['Section', 'Questions and time', 'Share of score', 'Calculator'], rows: [
          ['I, Part A: multiple choice', '29 questions, 65 minutes', '43.75%', 'Not permitted'],
          ['I, Part B: multiple choice', '13 questions, 40 minutes', '18.75%', 'Graphing calculator required'],
          ['II, Part A: free response', '2 questions, 35 minutes (FRQ 1 and 2)', '18.75%', 'Graphing calculator required'],
          ['II, Part B: free response', '2 questions, 35 minutes (FRQ 3 and 4)', '18.75%', 'Not permitted'],
          ['Total', '46 questions, 2 hours 55 minutes', '100%', '']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The date and the day',
          left: [
            'College Board\'s 2027 schedule runs AP Exams over two weeks, May 3 to 7 and May 10 to 14, 2027. AP Precalculus is in Session 1 on Tuesday, May 11, and for most schools in the lower 48 states, Hawaii and Washington, D.C., Session 1 starts at 8 a.m. local time.',
            'The same Tuesday has AP Statistics in Session 2, and AP Calculus AB and BC fall on Monday, May 10. A student taking two of these should plan the week, not just the morning.'
          ],
          rightH3: 'What kind of exam it is',
          right: [
            'College Board describes AP Precalculus as a hybrid digital exam. It publishes test previews in the Bluebook app and a sample free-response booklet so students can see in advance how they will answer the free-response questions.',
            'The free-response questions are each worth 6 points, and two of them, according to the AP Students page, "incorporate a real-world function modeling context". Students are expected to explain, not only to compute.'
          ] },
        { kind: 'source', html: 'Sources: AP Central <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-precalculus/exam" rel="noopener" target="_blank">AP Precalculus exam page</a> and <a class="ag-inline-link" href="https://apcentral.collegeboard.org/exam-administration-ordering-scores/exam-dates" rel="noopener" target="_blank">2027 AP Exam dates</a>, and the AP Students <a class="ag-inline-link" href="https://apstudents.collegeboard.org/courses/ap-precalculus/assessment" rel="noopener" target="_blank">AP Precalculus exam page</a>, checked October 31, 2026. AP and Advanced Placement are trademarks of College Board, which is not affiliated with Modern Age Coders.' }
      ]
    },
    {
      id: 'units', tint: 'deep', eyebrow: 'The course',
      h2: 'What are the AP Precalculus units and how much is each worth?',
      lede: 'Four units, three of them on the exam. On the multiple-choice section, College Board weights Unit 1 at 30 to 40 percent, Unit 2 at 25 to 40 percent and Unit 3 at 30 to 35 percent. Unit 4 is taught where states or districts require it and is not assessed.',
      body: [
        { kind: 'table', caption: 'AP Precalculus units, from the course page and the Course and Exam Description', head: ['Unit', 'Topics', 'Suggested pacing', 'Multiple-choice weighting'], rows: [
          ['1. Polynomial and Rational Functions', '1.1 Change in Tandem to 1.14 Function Model Construction and Application', '6 to 8 weeks', '30 to 40%'],
          ['2. Exponential and Logarithmic Functions', '2.1 Change in Arithmetic and Geometric Sequences to 2.15 Semi-log Plots', '6 to 9 weeks', '25 to 40%'],
          ['3. Trigonometric and Polar Functions', '3.1 Periodic Phenomena to 3.15 Rates of Change in Polar Functions', '7 to 10 weeks', '30 to 35%'],
          ['4. Functions Involving Parameters, Vectors, and Matrices', '4.1 to 4.14, ending with matrices modeling', '7 weeks', 'Not assessed']
        ] },
        { kind: 'table', mt: true, caption: 'The three mathematical practices and their share of the whole exam, from AP Central', head: ['Practice', 'What College Board means', 'Exam weighting'], rows: [
          ['1. Procedural and Symbolic Fluency', 'Algebraically manipulate functions, equations, and expressions', '35 to 50%'],
          ['2. Multiple Representations', 'Translate mathematical information between representations', '20 to 30%'],
          ['3. Communication and Reasoning', 'Communicate with precise language, and provide rationales for conclusions', '30 to 40%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The two ideas under every unit',
          left: [
            'The Course and Exam Description opens Unit 1 with two concepts: covariation, "how output values change in tandem with changing input values", and rates of change, "including average rate of change, rate of change at a point, and changing rates of change". Topic 1.1 is literally called Change in Tandem.',
            'Those ideas return for every function type. An exponential model is a function whose output changes by a constant ratio; a sinusoidal one has rates of change that repeat. Students who learn each function as a separate list of rules miss the thread the exam is built on.'
          ],
          rightH3: 'Precise language is assessed',
          right: [
            'Up to 40 percent of the exam weighting goes to Communication and Reasoning, and the CED shows the standard it means with a model sentence: "On the closed interval 0 to 1, as the value of x increases, the value of y increases then decreases."',
            'Its pool example goes further, naming inputs, outputs and units: the average rate of change of volume from 2 to 5 minutes "is 0.4 cubic meters per minute". We teach students to write like that from the first week, because the free-response scoring expects it.'
          ] },
        { kind: 'source', html: 'Sources: AP Central <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-precalculus" rel="noopener" target="_blank">AP Precalculus course page</a> and the <a class="ag-inline-link" href="https://apcentral.collegeboard.org/media/pdf/ap-precalculus-course-and-exam-description.pdf" rel="noopener" target="_blank">Course and Exam Description</a> (PDF), whose pacing assumes 45-minute class periods five days a week for a full year; checked October 31, 2026.' }
      ]
    },
    {
      id: 'calculator', tint: 'tint', eyebrow: 'Calculator rules, our arithmetic',
      h2: 'Can you use a calculator on the AP Precalculus exam?',
      lede: 'On some parts only. A graphing calculator is required for multiple-choice Part B and free-response Part A, and not permitted on multiple-choice Part A or free-response Part B. Adding College Board\'s published shares, 62.5 percent of the score is earned without a calculator.',
      body: [
        { kind: 'table', caption: 'Our sum of College Board\'s published score shares, by calculator rule', head: ['Calculator rule', 'Parts', 'Share of score (our sum)', 'Minutes per question (our division)'], rows: [
          ['Not permitted', 'MC Part A (29 questions) and FRQ Part B (2 questions)', '43.75% + 18.75% = 62.5%', 'About 2.2 for MC; 17.5 for each FRQ'],
          ['Graphing calculator required', 'MC Part B (13 questions) and FRQ Part A (2 questions)', '18.75% + 18.75% = 37.5%', 'About 3.1 for MC; 17.5 for each FRQ']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the calculator is for',
          left: [
            'The CED is specific: "students must learn to identify zeros, points of intersection, and extrema using graphing calculator technology", and they also fit linear, quadratic, cubic and quartic regressions to data. AP Students adds that the calculator parts are answered in radian mode.',
            'So the calculator sections are not easier versions of the others. They test whether a student can set up a model and read a graph correctly, which is its own skill and needs its own practice.'
          ],
          rightH3: 'What it means for study time',
          right: [
            'Most of the marks need algebra by hand: exact values, log rules, factoring, rewriting trigonometric expressions. A student who practices everything with a calculator at their elbow is practicing for the smaller share of the exam.',
            'We split practice the same way the exam does: hand-only sessions for symbolic work, and separate calculator sessions for modeling, regression and graph reading.'
          ] },
        { kind: 'source', html: 'Shares and timings from the AP Central exam page; calculator uses from the Course and Exam Description; radian mode from AP Students; checked October 31, 2026. The sums and the minutes per question are our arithmetic. College Board keeps the list of approved calculators on its AP calculator policy page.' }
      ]
    },
    {
      id: 'frq', tint: 'plain', eyebrow: 'Free response, ours',
      h2: 'What are the four AP Precalculus free-response questions?',
      lede: 'College Board names them: Function Concepts and Modeling a Non-Periodic Context, both with a graphing calculator, then Modeling a Periodic Context and Symbolic Manipulations, both without. Each is worth 6 points. The examples below are our own, written in that style, not College Board questions.',
      body: [
        { kind: 'p', html: '<strong>Our periodic model, in the style of FRQ 3.</strong> A Ferris wheel seat is 5 meters above the ground at its lowest point and 45 meters at its highest, and the wheel turns once every 8 minutes. A rider boards at the lowest point at t = 0. A model is h(t) = 25 &minus; 20 cos(&pi;t / 4), with h in meters and t in minutes. (i) State the midline, amplitude and period. (ii) When is the rider first 35 meters up? (iii) Describe how the rate of change of h behaves on 0 &le; t &le; 4.' },
        { kind: 'three', cells: [
          { h3: '(i) Reading the model', p: 'The midline is h = 25, halfway between 5 and 45. The amplitude is 20, half of the 40-meter difference. The period is 8 minutes, since &pi;t / 4 reaches 2&pi; when t = 8.' },
          { h3: '(ii) Solving without a calculator', p: '25 &minus; 20 cos(&pi;t / 4) = 35 gives cos(&pi;t / 4) = &minus;1/2. The first positive solution is &pi;t / 4 = 2&pi;/3, so t = 8/3 minutes, about 2 minutes 40 seconds after boarding.' },
          { h3: '(iii) The rate of change', p: 'On 0 &lt; t &lt; 4, h is increasing. Its rate of change increases on 0 &lt; t &lt; 2 and decreases on 2 &lt; t &lt; 4, so h is concave up and then concave down, with the fastest climb at t = 2, at the midline.' }
        ] },
        { kind: 'table', mt: true, caption: 'Our check: average rate of change of h over each minute (meters per minute)', head: ['Interval', 'h at start', 'h at end', 'Average rate of change'], numCols: [1, 2, 3], rows: [
          ['t = 0 to 1', '5.00', '10.86', '5.86'],
          ['t = 1 to 2', '10.86', '25.00', '14.14'],
          ['t = 2 to 3', '25.00', '39.14', '14.14'],
          ['t = 3 to 4', '39.14', '45.00', '5.86']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How the answer should be written',
          left: [
            'Part (iii) is where most of the points sit, and the language matters. Our model answer: "On the interval 0 &lt; t &lt; 4, h is increasing. The average rates of change over successive one-minute intervals increase from 5.86 to 14.14 meters per minute and then decrease to 5.86, so the rate of change of h increases and then decreases." That is the CED\'s precise-language standard applied.',
            'A student who writes "it goes up faster then slower" has the right idea and may not earn the reasoning point. The difference is naming the function, the interval and the units.'
          ],
          rightH3: 'A symbolic example, FRQ 4 style',
          right: [
            'Our problem: solve log<sub>2</sub>(x) + log<sub>2</sub>(x &minus; 2) = 3. Combine the logs: log<sub>2</sub>(x(x &minus; 2)) = 3, so x(x &minus; 2) = 8, x<sup>2</sup> &minus; 2x &minus; 8 = 0 and (x &minus; 4)(x + 2) = 0. Only x = 4 is in the domain of both logarithms; x = &minus;2 must be rejected, with a reason.',
            'The rejection is the point. Symbolic Manipulations questions reward a correct answer with a justified domain check, not just the algebra.'
          ] },
        { kind: 'source', html: 'Question types and point values from the AP Central and AP Students exam pages. The Ferris wheel model, the log equation, the table and the model answers are ours, checked in Python on October 31, 2026. Past free-response questions and scoring guidelines are on AP Central\'s <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-precalculus/exam" rel="noopener" target="_blank">exam page</a>; we link to them and reproduce none.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice set, ours',
      h2: 'Seven AP Precalculus practice problems',
      lede: 'One or two from each assessed unit, at exam level. Written by our teachers; answers checked in Python. Try them without a calculator first.',
      body: [
        { kind: 'table', caption: 'Our practice set', head: ['#', 'Unit', 'Our problem', 'Answer'], rows: [
          ['1', 'Unit 1', 'What is the average rate of change of f(x) = x<sup>3</sup> &minus; 4x on the interval [0, 2]?', '0, because f(0) = f(2) = 0'],
          ['2', 'Unit 1', 'Find all real zeros of f(x) = x<sup>3</sup> &minus; 4x.', '&minus;2, 0 and 2'],
          ['3', 'Unit 2', 'A geometric sequence has first term 5 and common ratio 3. What is the sixth term?', '5 &times; 3<sup>5</sup> = 1215'],
          ['4', 'Unit 2', 'Find the inverse of f(x) = 2<sup>x &minus; 1</sup> + 3.', 'f<sup>&minus;1</sup>(x) = 1 + log<sub>2</sub>(x &minus; 3), for x &gt; 3'],
          ['5', 'Unit 2', 'Solve e<sup>2x</sup> &minus; 5e<sup>x</sup> + 6 = 0.', 'x = ln 2 or x = ln 3'],
          ['6', 'Unit 3', 'State the amplitude, period and midline of y = 5 sin(3x) + 2.', '5; 2&pi;/3; y = 2'],
          ['7', 'Unit 3', 'Convert the polar point r = 2, &theta; = &pi;/3 to rectangular coordinates.', '(1, &radic;3)']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why problem 1 is a trap',
          left: [
            'An average rate of change of 0 does not mean f is constant. On [0, 2] the cubic dips below the axis and comes back; the start and end heights happen to match. The CED separates average rate of change from rate of change at a point for exactly this reason.',
            'A good free-response answer would say so: "the average rate of change over [0, 2] is 0, although f is not constant on that interval".'
          ],
          rightH3: 'A semi-log check, Unit 2',
          right: [
            'Topic 2.15 is Semi-log Plots. Our example: for y = 3 &times; 2<sup>x</sup>, log y = log 3 + x log 2, so plotting log y against x gives a straight line with slope log 2, about 0.301 in base 10. A straight semi-log plot is how data reveals an exponential model.',
            'Students meeting this for the first time often expect the curve to stay curved. Seeing the line appear is one of the more satisfying moments in the course.'
          ] },
        { kind: 'source', html: 'All seven problems, the explanations and the semi-log example are ours. For official practice, College Board publishes past free-response questions with scoring guidelines on AP Central and test previews in Bluebook; AP Classroom progress checks are available through a student\'s AP class section.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A school-year plan, ours',
    h2: 'From August to May 11, 2027',
    lede: 'Our suggested pacing, close to the CED\'s week ranges. If the school is ahead or behind, we match the class, not this table.',
    table: { caption: 'Our AP Precalculus year', head: ['When', 'Focus', 'The sign it is secure'], rows: [
      ['August to October', 'Unit 1: rates of change, polynomials, rational functions', 'Describes concavity in words and from a table of values'],
      ['November to January', 'Unit 2: exponentials, logarithms, semi-log plots', 'Solves log equations by hand and rejects extraneous roots'],
      ['February to April', 'Unit 3: trigonometric and polar functions', 'Builds a sinusoidal model from a description, no calculator'],
      ['Late April to May 11', 'Full timed exams, split by calculator rule', 'Finishes MC Part A with time to check, and writes FRQ reasons in full']
    ] },
    left: { h3: 'If the exam is weeks away', ps: [
      'Sit one full practice exam in the four timed parts, then rework every free-response answer that lost a reasoning point.',
      'Spend more of the remaining time on no-calculator work, since that is where most of the score sits.'
    ] },
    right: { h3: 'If the course is just starting', ps: [
      'Make sure the Algebra 2 prerequisites are solid: College Board lists linear and quadratic functions, factoring, systems of equations, exponents, radicals and complex numbers.',
      'Our <a class="ag-inline-link" href="/precalculus-tutoring-online">precalculus tutoring page</a> covers non-AP precalculus, and <a class="ag-inline-link" href="/algebra-2-tutoring-online">Algebra 2 tutoring</a> covers what comes before.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Math courses around AP Precalculus',
    lede: 'Grouped by where the student is in the high school sequence.',
    bands: [
      { num: 'I', h3: 'The AP course', sub: 'Grades 10 to 12', courses: [
        { code: 'APP / AP / 01', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus exam prep', blurb: 'Units 1 to 3 and the May exam.' },
        { code: 'APP / AP / 02', slug: 'ap-calculus-exam-prep', title: 'AP Calculus AB and BC', blurb: 'The next AP math course.' },
        { code: 'APP / AP / 03', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'Same day, afternoon session.' }
      ] },
      { num: 'II', h3: 'Before and alongside', sub: 'Algebra and functions', courses: [
        { code: 'APP / BASE / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Algebra 2 and functions.' },
        { code: 'APP / BASE / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For gaps from Algebra 1.' },
        { code: 'APP / BASE / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'Many juniors take both.' }
      ] },
      { num: 'III', h3: 'Using the functions', sub: 'Modeling and data', courses: [
        { code: 'APP / USE / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Regression and data.' },
        { code: 'APP / USE / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Plot a model in Python.' },
        { code: 'APP / USE / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Exponential growth in real data.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live AP Precalculus classes through the school year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, matched to the class unit.' },
      { time: 'Weekends', l: 'Timed practice exams in four parts.' },
      { time: '1-on-1', l: 'One student, one teacher, one weak unit.' }
    ],
    cells: [
      { h3: 'Two kinds of session', p: 'Hand-only practice and calculator practice, kept apart as on the exam.' },
      { h3: 'Written reasons', p: 'Every free-response answer is rewritten until it names the interval and the units.' },
      { h3: 'Unit by unit', p: 'Lessons follow the school\'s pace, so tutoring supports the class rather than competing with it.' },
      { h3: 'Original problems', p: 'Ours, in College Board style; official released questions are for students to try themselves.' },
      { h3: 'Every US time zone', p: 'Live online, scheduled around the school day.' },
      { h3: 'Batch size', p: 'Fifteen to twenty students, or one student alone.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Work our learners have published across math, programming and AI. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Google reviews from families, as they were written.',

  fees: {
    h2: 'Fees',
    lede: 'Schools order AP Exams through College Board; our monthly fee is only for tutoring. Families can start at any unit and stop after May 11.',
    free: ['A free first lesson', 'One no-calculator problem and one calculator problem', 'No card details'],
    group: ['A batch of 15 to 20', 'One teacher all year', 'Paced to the school course', 'Monthly'],
    one: ['A private AP Precalculus tutor', 'Lessons matched to class tests', 'Free-response answers read in full']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'AP Precalculus: what students and parents ask',
    items: [
      { q: 'When is the AP Precalculus exam in 2027?', a: 'College Board schedules it for Tuesday, May 11, 2027, in Session 1. For most US schools, Session 1 starts at 8 a.m. local time.' },
      { q: 'How long is the AP Precalculus exam?', a: '2 hours and 55 minutes: 42 multiple-choice questions in 1 hour 45 minutes, then four free-response questions in 1 hour 10 minutes.' },
      { q: 'What units are on the AP Precalculus exam?', a: 'Units 1, 2 and 3: polynomial and rational functions, exponential and logarithmic functions, and trigonometric and polar functions. Unit 4, on parameters, vectors and matrices, is not assessed.' },
      { q: 'Do I need a graphing calculator for AP Precalculus?', a: 'Yes. A graphing calculator is required for multiple-choice Part B and free-response Part A, in radian mode, and not permitted on the other two parts. College Board lists approved models on its calculator policy page.' },
      { q: 'How much of the exam is without a calculator?', a: 'Adding College Board\'s published shares, multiple-choice Part A (43.75 percent) and free-response Part B (18.75 percent) make 62.5 percent of the score with no calculator allowed.' },
      { q: 'What are the free-response questions on AP Precalculus?', a: 'Four, each worth 6 points: Function Concepts, Modeling a Non-Periodic Context, Modeling a Periodic Context and Symbolic Manipulations. The first two allow a graphing calculator; the last two do not.' },
      { q: 'Is AP Precalculus the same as regular precalculus?', a: 'College Board designs it as the equivalent of a first-semester college precalculus course, with a set framework and an end-of-course exam. Regular precalculus varies by school and has no AP Exam.' },
      { q: 'Can AP Precalculus earn college credit?', a: 'It can, depending on the college. College Board says qualifying scores may earn credit, placement or both, and its AP Credit Policy Search shows each college\'s rule.' },
      { q: 'What should my child know before AP Precalculus?', a: 'College Board lists the Algebra 1, Geometry and Algebra 2 sequence, including quadratics, factoring, right-triangle trigonometry, systems of equations, exponent rules, radicals and complex numbers.' },
      { q: 'Which days and times can my child take classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you affiliated with College Board?', a: 'No. Modern Age Coders is an independent tutoring school. AP and Advanced Placement are College Board trademarks, and College Board has no connection with our classes.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More high school math help',
    lede: 'The courses on either side of AP Precalculus, and help by grade.',
    items: [
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'For non-AP precalculus courses.' },
      { href: '/ap-calculus-tutoring-online', label: 'AP Calculus tutoring', p: 'AB and BC, the year after.' },
      { href: '/ap-statistics-tutoring-online', label: 'AP Statistics tutoring', p: 'The other AP exam on May 11.' },
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'The prerequisite College Board lists.' },
      { href: '/online-math-tutor-11th-grade', label: '11th grade math tutor', p: 'The usual year for AP Precalculus.' },
      { href: '/online-math-tutor-10th-grade', label: '10th grade math tutor', p: 'For students taking it early.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us which unit the class is on and your child\'s grade. The teacher works one no-calculator problem and one calculator problem with them and shows you where the gaps are.',
    readFirst: 'For the course outline, open the <a class="ag-inline-link" href="/courses">course list</a>; for the teaching approach, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'Lessons are live over video from India, set in your US time zone. WhatsApp is usually the fastest way to reach us.',
    formNote: 'Free first lesson; no card to book.'
  },

  footer: {
    cols: [
      { h4: 'High school math', links: [
        { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring' },
        { href: '/ap-calculus-tutoring-online', label: 'AP Calculus tutoring' },
        { href: '/ap-statistics-tutoring-online', label: 'AP Statistics tutoring' },
        { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring' }
      ] },
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-10th-grade', label: '10th grade math tutor' },
        { href: '/online-math-tutor-11th-grade', label: '11th grade math tutor' },
        { href: '/online-math-tutor-12th-grade', label: '12th grade math tutor' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Name the interval, name the units'
  },

  personalityCss: `
.ag-root.ag-app .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-app .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-app .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-app .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-app .ag-table th:first-child { width: 24%; }
.ag-root.ag-app .ag-three h3 { letter-spacing: -0.003em; }
.ag-root.ag-app .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'College Board, read raw on 31 October 2026: AP Central AP Precalculus course page (four units, multiple-choice weightings 30 to 40, 25 to 40, 30 to 35 percent, Unit 4 not assessed; practices weighted 35 to 50, 20 to 30, 30 to 40 percent); AP Central exam page (Tuesday May 11 2027 Session 1; Section I 42 questions in 1 hour 45 minutes, 62.5 percent, Part A 29 questions 65 minutes 43.75 percent no calculator, Part B 13 questions 40 minutes 18.75 percent graphing calculator required; Section II four questions in 1 hour 10 minutes, 37.5 percent, Part A FRQ 1 Function Concepts and FRQ 2 Modeling a Non-Periodic Context with graphing calculator, Part B FRQ 3 Modeling a Periodic Context and FRQ 4 Symbolic Manipulations without; hybrid digital; Bluebook previews; sample free-response booklet); AP Students exam page (6 points each, radian mode, two modeling contexts); 2027 exam dates (May 3 to 7 and 10 to 14, 8 a.m. local start, Statistics in Session 2 on May 11, Calculus May 10); Course Overview (first-semester college equivalent, prerequisites, 2 hours 55 minutes); Course and Exam Description (pacing on 45-minute periods, unit week ranges, topic names 1.1 Change in Tandem, 2.15 Semi-log Plots, 3.1 Periodic Phenomena, 3.15, covariation and rates of change, the closed interval model sentence, the 0.4 cubic meters per minute pool example, graphing calculator uses).',
    localProject: 'Our calculator split from College Board\'s shares: 43.75 + 18.75 = 62.5 percent of the score with no calculator, 37.5 percent with one required, and minutes per question (about 2.2 and 3.1 for multiple choice, 17.5 per free-response question). Our Ferris wheel model h(t) = 25 - 20 cos(pi t / 4): midline 25, amplitude 20, period 8, first at 35 m at t = 8/3, one-minute average rates 5.86, 14.14, 14.14, 5.86 showing concave up then down, with a model answer in the CED\'s precise language. Our log equation with the rejected root x = -2, a semi-log check (slope log 2, about 0.301), and seven practice problems checked in Python. Lesson family: say what changes, and how the rate of change changes.',
    requiredMentions: ['Tuesday, May 11, 2027', '29 questions, 65 minutes', '13 questions, 40 minutes', 'Modeling a Non-Periodic Context', 'Symbolic Manipulations', '43.75% + 18.75% = 62.5%', 'On the closed interval 0 to 1, as the value of x increases, the value of y increases then decreases.', '0.4 cubic meters per minute', 'h(t) = 25 &minus; 20 cos(&pi;t / 4)', '2.15 Semi-log Plots', 'equivalent of a first-semester college precalculus course'],
    sources: [
      { claim: 'Units, multiple-choice weightings, Unit 4 not assessed, and practice weightings.', url: 'https://apcentral.collegeboard.org/courses/ap-precalculus' },
      { claim: 'Exam date, sections, timings, score shares, calculator rules and free-response types.', url: 'https://apcentral.collegeboard.org/courses/ap-precalculus/exam' },
      { claim: 'Six points per free-response question, radian mode, modeling contexts.', url: 'https://apstudents.collegeboard.org/courses/ap-precalculus/assessment' },
      { claim: '2027 exam weeks, sessions and start times.', url: 'https://apcentral.collegeboard.org/exam-administration-ordering-scores/exam-dates' },
      { claim: 'Course purpose, prerequisites and total exam length.', url: 'https://apcentral.collegeboard.org/media/pdf/ap-precalculus-course-overview.pdf' },
      { claim: 'Pacing, unit week ranges, topic titles, covariation and rates of change, model language, calculator uses.', url: 'https://apcentral.collegeboard.org/media/pdf/ap-precalculus-course-and-exam-description.pdf' }
    ],
    rejectedClaims: [
      'AP Exam fees: set by College Board and schools; not printed, and no dollar figure is typed.',
      'AP Precalculus score distributions and pass rates: not read on 31 October 2026; none quoted.',
      'Which colleges grant credit for AP Precalculus: varies by college; the page points to College Board\'s AP Credit Policy Search instead.',
      'Any released AP Precalculus question: not reproduced; AP Central past free-response questions and Bluebook previews are linked, and our problems are labelled ours.',
      'Any score promise: declined on the page.',
      'Any affiliation with College Board: none, stated on the page, with the AP trademark note.'
    ]
  }
};
