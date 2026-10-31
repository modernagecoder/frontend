'use strict';
// CLEP Calculus and CLEP Precalculus prep (ag- guide door; UK and US exams cluster, row US062). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from College
// Board's CLEP site; copies in keyword-research-2026-09/uk-us-gap/src/clep-calculus-prep/:
//  - clep.collegeboard.org/clep-exams/calculus: "usually taught in a one-semester college course in calculus";
//    "approximately 60% limits and differential calculus and 40% integral calculus"; "primarily concerned with an intuitive
//    understanding of calculus and experience with its methods and applications"; "Knowledge of preparatory mathematics is
//    assumed, including algebra, geometry, trigonometry, and analytic geometry"; "44 questions, in two sections, to be
//    answered in approximately 90 minutes"; Section 1 about 27 questions, about 50 minutes, "No calculator is allowed for
//    this section"; Section 2 about 17 questions, about 40 minutes, online graphing calculator (non-CAS), TI-84 Plus CE;
//    routine about 50%, nonroutine about 50%; Limits (10%), Differential Calculus (50%), Integral Calculus (40%) with
//    sub-lists; angles in radians; ln x natural log; ACE credit-granting score 50, 4 semester hours.
//  - clep-exams/precalculus: "skills and concepts required for success in a first-semester calculus course"; "approximately
//    48 questions, in two sections"; Section 1: 25 questions, about 50 minutes, graphing calculator allowed; Section 2: 23
//    questions, about 40 minutes, no calculator; "some questions that require students to enter a numerical answer"; topic
//    weights 20, 15, 30, 10, 15, 10; trigonometry note (approximately 30 to 40 percent, en dash in source, not quoted); ACE
//    recommendation for Introductory Precalculus: score 50, 3 semester hours.
//  - scores/understand-scores: raw score "converted to a scaled score that ranges from 20 to 80"; "Points aren't deducted
//    for wrong or skipped answers."
//  - clep-exam-policies: "may not retake an exam of the same title within three months of the test date".
//  - study-resources-by-exam/calculus: resources listed but "none of these sources are designed specifically for CLEP exam
//    preparation".
// (Exam and guide prices shown on the pages are not printed.)
// Our own material, labelled: eight calculus problems (limits, chain rule, implicit differentiation, L'Hospital, related
// rates, substitution, area between curves, y' = ky), four precalculus problems (log inverse, trig equation, ellipse,
// identity), a twelve-item set, and six-week and five-week plans.
// Lesson family: the derivative as a rate, the integral as accumulation.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST PREP', blurb: 'CLEP Calculus and CLEP Precalculus: sections and calculator rules, topic weights, ACE credit recommendations, and original practice for each.' },
  slug: 'clep-calculus-prep',
  code: 'cle',
  accent: '#004869',
  accentRationale: 'CLEP Calculus prep: a deep marine blue #004869 from the US allocation table, 9.30:1 on paper #FBF8F2 and 8.00:1 on the deepest tint, cool against the sienna CLEP College Algebra page',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'CLEP Calculus prep',
  title: 'CLEP Calculus Prep and CLEP Precalculus Prep: Exam Guide',
  description: 'CLEP Calculus prep and CLEP Precalculus prep: question counts, the two timed sections and calculator rules, topic weights, ACE credit and original practice.',
  ogDescription: 'Two CLEP math exams, two different calculator rules. What CLEP Calculus and CLEP Precalculus test, how much credit ACE recommends, and how to prepare.',
  twitterDescription: 'CLEP Calculus and Precalculus explained from College Board pages, with practice we wrote.',
  pageName: 'CLEP Calculus Prep',
  webPageDescription: 'A guide for homeschool, high school and adult learners to the CLEP Calculus and CLEP Precalculus exams, built from College Board\'s exam, score and policy pages, with original worked problems and study plans.',
  courseDescription: 'Calculus and precalculus taught live online for CLEP candidates from age 15, including homeschoolers and adults, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'CLEP Calculus prep',
  navLinks: [
    { href: '#calc', label: 'CLEP Calculus' },
    { href: '#precalc', label: 'CLEP Precalculus' },
    { href: '#credit', label: 'Scores and credit' },
    { href: '#worked', label: 'Worked problems' },
    { href: '#plan', label: 'Practice and plans' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Credit by exam &middot; College Board CLEP',
  h1: 'CLEP Calculus prep and CLEP Precalculus prep',
  lede: 'College Board offers two CLEP exams above college algebra: Calculus, which stands in for a one-semester college calculus course, and Precalculus, which tests readiness for one. Homeschool students use them to turn a strong senior year into credit, and adults use them to clear a math requirement they learned long ago. The two exams split their time between a calculator section and a no-calculator section, but in opposite orders. Here is what each one tests and how to prepare.',
  secondaryCta: { href: '#calc', label: 'Compare the two exams' },
  wa: 'Hello Modern Age Coders, I am preparing for CLEP Calculus (or Precalculus). Could I book a free first class?',
  heroNote: 'Live math teaching since 2020 &middot; 10,000+ students &middot; homeschoolers and adult learners welcome',
  spec: [
    ['Program', 'CLEP, College Board'],
    ['Calculus', '44 questions, about 90 minutes'],
    ['Precalculus', 'About 48 questions, about 90 minutes'],
    ['Calculator', 'TI-84 Plus CE in one section only'],
    ['Score scale', '20 to 80'],
    ['ACE credit score', '50 for both exams'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'CLEP Calculus is a 44-question, roughly 90-minute College Board exam covering one semester of college calculus, about 60% limits and differential calculus and 40% integral calculus; ACE recommends 4 semester hours for a score of 50. CLEP Precalculus has about 48 questions in roughly 90 minutes, and ACE recommends 3 semester hours at 50. Modern Age Coders teaches both live online, 1-on-1 or in a 15 to 20 batch, through our AP Calculus course.',

  picks: {
    eyebrow: 'Credit-level calculus',
    h2: 'Three courses for CLEP Calculus and Precalculus',
    lede: 'The AP Calculus course carries the calculus content; AP Precalculus covers the other exam; the college course goes further.',
    items: [
      { course: 'ap-calculus-exam-prep', code: 'CLE / 01', title: 'AP Calculus', note: 'Limits, derivatives and integrals: the CLEP Calculus content.' },
      { course: 'ap-precalculus-exam-prep-course', code: 'CLE / 02', title: 'AP Precalculus', note: 'Functions, trigonometry and modeling for CLEP Precalculus.' },
      { course: 'college-mathematics-complete-masterclass', code: 'CLE / 03', title: 'College math', note: 'Multivariable topics and linear algebra after Calculus I.' }
    ]
  },

  sections: [
    {
      id: 'calc', tint: 'tint', eyebrow: 'CLEP Calculus',
      h2: 'How many questions are on CLEP Calculus, and when can you use a calculator?',
      lede: 'The content is "approximately 60% limits and differential calculus and 40% integral calculus", set as 44 questions over two sections in roughly an hour and a half. No calculator is allowed in the first section.',
      body: [
        { kind: 'table', caption: 'CLEP Calculus and CLEP Precalculus side by side (clep.collegeboard.org exam pages, read 31 October 2026)', head: ['Feature', 'CLEP Calculus', 'CLEP Precalculus'], rows: [
          ['Level', 'A one-semester college course in calculus', 'Readiness for a first-semester calculus course'],
          ['Questions', '44, in two sections', 'Approximately 48, in two sections'],
          ['Time', 'Approximately 90 minutes', 'Approximately 90 minutes'],
          ['Section 1', 'About 27 questions, about 50 minutes, no calculator', '25 questions, about 50 minutes, graphing calculator allowed'],
          ['Section 2', 'About 17 questions, about 40 minutes, graphing calculator allowed', '23 questions, about 40 minutes, no calculator'],
          ['Calculator', 'TI-84 Plus CE (non-CAS), built in', 'TI-84 Plus CE (non-CAS), built in'],
          ['Answer types', 'Multiple choice', 'Mostly multiple choice, some numerical entry'],
          ['ACE recommendation', 'Score 50, 4 semester hours', 'Score 50, 3 semester hours (Introductory Precalculus)']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://clep.collegeboard.org/clep-exams/calculus" rel="noopener" target="_blank">CLEP Calculus</a> and <a class="ag-inline-link" href="https://clep.collegeboard.org/clep-exams/precalculus" rel="noopener" target="_blank">CLEP Precalculus</a>, College Board.' },
        { kind: 'table', mt: true, caption: 'How CLEP Calculus divides its questions by topic (from the College Board exam page)', head: ['Topic', 'Share', 'Examples from College Board\'s list'], rows: [
          ['Limits', '10%', 'Properties of limits; limits involving infinity; continuity'],
          ['Differential calculus', '50%', 'Definitions of the derivative; chain rule; implicit differentiation; derivatives of inverse functions including arcsin and arctan; Mean Value Theorem; L\'Hospital\'s Rule; curve sketching; extreme values; related rates'],
          ['Integral calculus', '40%', 'Antiderivatives; substitution; y\' = ky growth and decay; Riemann sums; the Fundamental Theorem; average value; area between curves']
        ], numCols: [1] },
        { kind: 'two', mt: true,
          leftH3: 'Intuition first',
          left: [
            'College Board says the exam "is primarily concerned with an intuitive understanding of calculus and experience with its methods and applications." About half the questions are routine technique; the other half test understanding of concepts and applications.',
            'It also warns that "Knowledge of preparatory mathematics is assumed, including algebra, geometry, trigonometry, and analytic geometry." Weak trigonometry costs marks across the whole paper.'
          ],
          rightH3: 'What the calculator is for',
          right: [
            'In Section 2 the built-in graphing calculator can numerically evaluate a definite integral, find zeros, intersections and extrema, and solve equations numerically. College Board adds that "Only some of the questions will require the use of the calculator."',
            'Section 1 comes first and has no calculator, so derivatives, limits and antiderivatives by hand must be quick before test day.'
          ] }
      ]
    },
    {
      id: 'precalc', tint: 'deep', eyebrow: 'CLEP Precalculus',
      h2: 'What is on the CLEP Precalculus exam?',
      lede: 'Functions, above all. College Board says "A large portion of the exam is devoted to testing a student\'s understanding of functions and their properties."',
      body: [
        { kind: 'table', caption: 'Weighting of CLEP Precalculus content areas, as College Board lists them (checked 31 October 2026)', head: ['Topic', 'Share'], rows: [
          ['Algebraic Expressions, Equations, and Inequalities', '20%'],
          ['Functions: Concept, Properties, and Operations', '15%'],
          ['Representations of Functions: Symbolic, Graphical, and Tabular', '30%'],
          ['Analytic Geometry', '10%'],
          ['Trigonometry and its Applications', '15%'],
          ['Functions as Models', '10%']
        ], numCols: [1] },
        { kind: 'two', mt: true,
          leftH3: 'Trigonometry is bigger than it looks',
          left: [
            'The table gives trigonometry 15%, but College Board adds a note that it "permeates most of the major topics and accounts for more than 15% of the exam." By its estimate, roughly 30 to 40 percent of questions need right triangle trigonometry or the properties of the trigonometric functions.',
            'For many adults returning to math, trigonometry is the most faded skill, so it deserves the biggest share of review time.'
          ],
          rightH3: 'Which functions appear',
          right: [
            'College Board lists linear, quadratic, absolute value, square root, polynomial, rational, exponential, logarithmic, trigonometric, inverse trigonometric and piecewise-defined functions, presented "symbolically, graphically, verbally" and in tables.',
            'Analytic geometry covers lines, circles, parabolas, ellipses and hyperbolas, which some Algebra 2 courses skip.'
          ] },
        { kind: 'p', mt: true, html: 'Note the reversed calculator order: on Precalculus the calculator section comes first, and the 23-question no-calculator section second. Students who sit both exams should rehearse each order separately.' }
      ]
    },
    {
      id: 'credit', tint: 'tint', eyebrow: 'Scores and credit',
      h2: 'What CLEP Calculus score earns college credit?',
      lede: 'ACE, the American Council on Education, suggests a 50 on either exam. Whether that earns credit, and how much, is up to your college.',
      body: [
        { kind: 'two',
          leftH3: 'The 20 to 80 scale',
          left: [
            'Each correct answer adds one raw point, and College Board turns the raw total into a reported score between 20 and 80. Blank and wrong answers score the same, zero, which means a guess never hurts.',
            'For Calculus, ACE recommends 4 semester hours at a score of 50; for Introductory Precalculus, 3 semester hours at 50.'
          ],
          rightH3: 'The college decides',
          right: [
            'Each exam page carries the same note: "Each institution reserves the right to set its own credit-granting policy, which may differ from the American Council on Education (ACE)."',
            'Check whether your college gives Calculus I credit, elective credit or none, and whether a precalculus credit will count toward your degree at all.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>Pick the right exam.</b> If your degree needs Calculus I, CLEP Calculus is the one that may replace it; CLEP Precalculus usually replaces a precalculus requirement.',
          '<b>Read your college\'s CLEP policy.</b> Note the score it requires and the course it maps the credit to.',
          '<b>Take College Board\'s free sample questions untimed.</b> Mark which topic each miss belongs to.',
          '<b>Study by weight.</b> For Calculus, differential calculus is half the exam; for Precalculus, representations of functions are 30%.',
          '<b>Rehearse the section order.</b> Calculus starts without a calculator; Precalculus starts with one.',
          '<b>Book when ready.</b> College Board says a candidate "may not retake an exam of the same title within three months of the test date."'
        ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked problems',
      h2: 'Is the CLEP Calculus exam hard? Eight problems at its level',
      lede: 'It is a full semester of calculus in 90 minutes, so fluency matters. These problems are ours, matched to College Board\'s topic list; they are not College Board sample questions.',
      body: [
        { kind: 'table', caption: 'Calculus, worked by us', head: ['Topic', 'Problem', 'Reasoning', 'Result'], rows: [
          ['Limits', 'lim as x goes to 2 of (x^2 - 4)/(x - 2)', 'Factor: (x - 2)(x + 2)/(x - 2) = x + 2 near 2', '4'],
          ['Chain rule', 'Differentiate sin(3x^2)', 'Outer cos, times the inner derivative 6x', '6x cos(3x^2)'],
          ['Implicit', 'Slope of x^2 + y^2 = 25 at (3, 4)', '2x + 2y y\' = 0, so y\' = -x/y', '-3/4'],
          ['L\'Hospital', 'lim as x goes to 0 of (e^x - 1)/x', 'Form 0/0; differentiate top and bottom: e^x / 1', '1'],
          ['Related rates', 'A circle\'s radius grows at 2 cm/s. How fast is the area growing when r = 5?', 'dA/dt = 2 pi r dr/dt = 2 pi x 5 x 2', '20 pi square cm per second'],
          ['Substitution', 'Integral of 2x cos(x^2) dx', 'Let u = x^2, du = 2x dx', 'sin(x^2) + C'],
          ['Area', 'Area between y = x and y = x^2 from 0 to 1', 'Integral of (x - x^2) = 1/2 - 1/3', '1/6'],
          ['Growth', 'y\' = ky, y(0) = 100, and y doubles in 5 years. Find k.', '200 = 100e^(5k), so 5k = ln 2', 'k = ln 2 / 5, about 0.139']
        ] },
        { kind: 'table', mt: true, caption: 'Precalculus, worked by us', head: ['Topic', 'Problem', 'Reasoning', 'Result'], rows: [
          ['Inverse functions', 'Inverse of f(x) = 2 ln(x - 1)', 'Swap and solve: x/2 = ln(y - 1), so y - 1 = e^(x/2)', 'e^(x/2) + 1'],
          ['Trig equations', 'Solve 2 sin x = 1 for 0 &le; x &lt; 2 pi', 'sin x = 1/2 in quadrants I and II', 'pi/6 and 5 pi/6'],
          ['Analytic geometry', 'Describe x^2/9 + y^2/4 = 1', 'Ellipse centered at the origin, a = 3 on the x-axis, b = 2', 'Vertices (3, 0) and (-3, 0)'],
          ['Identities', 'Simplify sin^2 x / (1 - cos x)', 'sin^2 x = (1 - cos x)(1 + cos x)', '1 + cos x']
        ] },
        { kind: 'p', mt: true, html: 'College Board\'s notes for CLEP Calculus say that unless stated otherwise "all angles are measured in radians", and that ln x is the natural logarithm. Students who learned trigonometry in degrees should switch their practice to radians from the first week.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Practice and plans',
      h2: 'Original CLEP Calculus and Precalculus practice, and two study plans',
      lede: 'Twelve problems we wrote, eight for Calculus and four for Precalculus, then a plan for each exam.',
      body: [
        { kind: 'table', caption: 'Practice set written by us, answers in the last column', head: ['#', 'Exam', 'Problem', 'Answer'], rows: [
          ['1', 'Calculus', 'lim as x goes to infinity of (3x^2 + 1)/(x^2 - 5)', '3'],
          ['2', 'Calculus', 'Derivative of x^3 e^x', 'e^x (x^3 + 3x^2)'],
          ['3', 'Calculus', 'Derivative of arctan(2x)', '2/(1 + 4x^2)'],
          ['4', 'Calculus', 'Where is f(x) = x^3 - 3x decreasing?', '-1 &lt; x &lt; 1'],
          ['5', 'Calculus', 'Linear approximation of the square root of 4.1 using x = 4', '2.025'],
          ['6', 'Calculus', 'Integral of 1/x from 1 to e', '1'],
          ['7', 'Calculus', 'Average value of x^2 on [0, 3]', '3'],
          ['8', 'Calculus', 'A particle has v(t) = 6t, s(0) = 2. Find s(t).', '3t^2 + 2'],
          ['9', 'Precalculus', 'Domain of g(x) = root(x - 4) / (x - 6)', 'x &ge; 4, x not 6'],
          ['10', 'Precalculus', 'Exact value of cos(2 pi / 3)', '-1/2'],
          ['11', 'Precalculus', 'Solve log base 3 of (x + 1) = 2', 'x = 8'],
          ['12', 'Precalculus', 'Center and radius of (x + 1)^2 + (y - 2)^2 = 16', '(-1, 2), radius 4']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>CLEP Calculus, week 1:</b> sample questions untimed, then limits, continuity and the limit definition of the derivative.',
          '<b>Week 2:</b> derivative rules, the chain rule, implicit differentiation and inverse trig derivatives, all without a calculator.',
          '<b>Week 3:</b> applications: curve sketching, extrema, the Mean Value Theorem, motion and related rates.',
          '<b>Week 4:</b> antiderivatives, substitution and y\' = ky.',
          '<b>Week 5:</b> Riemann sums, the Fundamental Theorem, area and average value, plus TI-84 practice for numerical integrals.',
          '<b>Week 6:</b> two timed rehearsals: 27 questions in 50 minutes without a calculator, then 17 in 40 with one.'
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>CLEP Precalculus, week 1:</b> algebra review and function concepts: domain, range, composition, inverses.',
          '<b>Week 2:</b> representations: reading and transforming graphs and tables of every listed function type.',
          '<b>Week 3:</b> trigonometry: the unit circle in radians, identities, equations and inverse trig functions.',
          '<b>Week 4:</b> analytic geometry and functions as models.',
          '<b>Week 5:</b> timed rehearsal in the exam\'s order: 25 questions with a calculator, then 23 without, including numerical-entry answers.'
        ] },
        { kind: 'p', mt: true, html: 'College Board\'s Calculus study-resources page points to free university courses and textbooks, with a caution that they were not written with CLEP in mind. Our plans track the exam\'s own topic weights, and the only official questions we use are College Board\'s free samples, untouched.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Which exam',
    h2: 'Should you take CLEP Calculus or CLEP Precalculus?',
    lede: 'It depends on the course your degree needs and what you already know. Our guide below; your college\'s policy has the final word.',
    table: { caption: 'Choosing between the two exams (our guidance)', head: ['Your situation', 'Usually the better fit'], rows: [
      ['Degree requires Calculus I; you finished a calculus course', 'CLEP Calculus'],
      ['Degree requires precalculus or college algebra and trigonometry', 'CLEP Precalculus'],
      ['You finished precalculus but never studied calculus', 'CLEP Precalculus now, Calculus later'],
      ['You took AP Calculus but scored below your college\'s cut', 'Check whether the college accepts a CLEP Calculus score instead']
    ] },
    left: { h3: 'For homeschool families', ps: [
      'A full calculus year followed by six weeks of CLEP review is a realistic route. Check two or three target colleges\' policies before the year starts.',
      'Some colleges limit credit if a student has already attempted a similar college course, so plan the order.'
    ] },
    right: { h3: 'For adult learners', ps: [
      'Precalculus is often the safer first exam for adults away from math for years; it rebuilds trigonometry and functions that calculus assumes.',
      'Remember the three-month wait before retaking the same exam title.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses from precalculus to college calculus',
    lede: 'Live courses for credit-by-exam candidates and for the math beyond.',
    bands: [
      { num: 'I', h3: 'Before calculus', sub: 'Functions and trigonometry', courses: [
        { code: 'CLE / P / 01', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'For CLEP Precalculus.' },
        { code: 'CLE / P / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Trig and functions refresher.' },
        { code: 'CLE / P / 03', slug: 'college-math-placement-test-prep-course', title: 'Placement and CLEP algebra', blurb: 'Including CLEP College Algebra.' }
      ] },
      { num: 'II', h3: 'Calculus', sub: 'Credit level', courses: [
        { code: 'CLE / C / 01', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'For CLEP Calculus.' },
        { code: 'CLE / C / 02', slug: 'college-mathematics-complete-masterclass', title: 'College math', blurb: 'Series, vectors, matrices.' },
        { code: 'CLE / C / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Riemann sums in Python.' }
      ] },
      { num: 'III', h3: 'After the credit', sub: 'Applied math', courses: [
        { code: 'CLE / A / 01', slug: 'data-analytics-mathematics-masterclass', title: 'Math for data science', blurb: 'Calculus put to use.' },
        { code: 'CLE / A / 02', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'Another common requirement.' },
        { code: 'CLE / A / 03', slug: 'gre-gmat-quant-maths-prep-course', title: 'Quantitative reasoning', blurb: 'For graduate admissions.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Calculus lessons around a test date',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Daytime for homeschoolers, evening for adults.' },
      { time: 'Weekends', l: 'Timed section rehearsals.' },
      { time: '1-on-1', l: 'Paced to your booked exam date.' }
    ],
    cells: [
      { h3: 'By topic weight', p: 'Differential calculus gets half the time.' },
      { h3: 'No-calculator speed', p: 'Hand techniques drilled first.' },
      { h3: 'TI-84 fluency', p: 'Numerical integrals and zeros.' },
      { h3: 'Radians always', p: 'As the exam assumes.' },
      { h3: 'Concepts explained', p: 'For the nonroutine half.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or one learner.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Some learners model motion and growth in code after calculus. See <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from families and adult learners, quoted in full.',

  fees: {
    h2: 'Fees',
    lede: 'Lessons cost a monthly fee in US dollars, with no term to sign up for. College Board\'s exam fee is separate and paid to College Board, not to us.',
    free: ['A first class without charge', 'Bring your college\'s CLEP policy', 'No card details'],
    group: ['Fifteen to twenty learners', 'A consistent teacher', 'Choose your slot', 'Paid by the month'],
    one: ['A private teacher', 'Planned back from your exam date', 'Your choice of times']
  },

  faq: {
    eyebrow: 'Questions learners ask',
    h2: 'CLEP Calculus and Precalculus: common questions',
    items: [
      { q: 'How many questions are on CLEP Calculus?', a: 'College Board says 44 questions in two sections, answered in approximately 90 minutes: about 27 questions in about 50 minutes without a calculator, then about 17 in about 40 minutes with a built-in graphing calculator.' },
      { q: 'Is the CLEP Calculus exam hard?', a: 'It packs a semester of college calculus into one sitting, with roughly equal routine and concept questions. Learners who have completed a calculus class and then review by topic usually cope; rusty trigonometry and algebra cause most trouble.' },
      { q: 'How many credits is CLEP Calculus worth?', a: 'The ACE guideline is 4 semester hours at a score of 50. Colleges are free to award more, fewer or none, and to set a different cut score, so read the CLEP page of yours.' },
      { q: 'How many credits is CLEP Precalculus worth?', a: 'Under the name Introductory Precalculus, ACE suggests 3 semester hours at 50. Whether those hours count toward your degree is a question for your college.' },
      { q: 'Is a calculator allowed on CLEP Precalculus?', a: 'Only in the first section. College Board says Section 1 has 25 questions with a TI-84 Plus CE graphing calculator built in, and Section 2 has 23 questions with no calculator.' },
      { q: 'What topics are on CLEP Precalculus?', a: 'Algebraic expressions, equations and inequalities (20%), functions (15%), representations of functions (30%), analytic geometry (10%), trigonometry (15%) and functions as models (10%). College Board notes that trigonometry runs through most topics.' },
      { q: 'What is a passing score on CLEP Calculus?', a: 'CLEP does not pass or fail anyone. You get a reported score between 20 and 80, ACE treats 50 as the credit line, and your college may choose another number.' },
      { q: 'What is the best prep book for CLEP Calculus?', a: 'College Board sells an official CLEP Calculus Examination Guide and lists free study resources, while noting that none of those resources are designed specifically for CLEP. Our lessons follow the official content outline, using problems our teachers write.' },
      { q: 'When are your CLEP classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with College Board?', a: 'No. Modern Age Coders is independent of College Board and CLEP. We teach the published content and direct you to College Board\'s own free sample questions.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More pages for credit-by-exam candidates and calculus students.',
    items: [
      { href: '/clep-college-algebra-prep', label: 'CLEP College Algebra prep', p: 'The CLEP exam one step below.' },
      { href: '/calculus-tutoring-online', label: 'Calculus tutoring', p: 'Ongoing calculus help.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'Functions and trigonometry.' },
      { href: '/ap-calculus-tutoring-online', label: 'AP Calculus tutoring', p: 'The exam-based alternative.' },
      { href: '/trigonometry-tutoring-online', label: 'Trigonometry tutoring', p: 'Radians and identities.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math', p: 'Planning toward CLEP credit.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us which exam you are aiming for, your college and your target date. The teacher will test a handful of no-calculator derivatives and a trigonometry question first.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how lessons are taught</a> or view <a class="ag-inline-link" href="/courses">the whole catalogue</a>.',
    note: 'Lessons are taught live from India, with daytime US slots for homeschoolers and late evening slots for working adults. Start with a WhatsApp message.',
    formNote: 'Free first class; we never ask for a card to book it.'
  },

  footer: {
    cols: [
      { h4: 'Calculus and credit', links: [
        { href: '/clep-college-algebra-prep', label: 'CLEP College Algebra' },
        { href: '/calculus-tutoring-online', label: 'Calculus' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus' },
        { href: '/ap-calculus-tutoring-online', label: 'AP Calculus' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/online-math-tutor-12th-grade', label: 'Grade 12 math' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'd/dx sin(3x^2) = 6x cos(3x^2)'
  },

  personalityCss: `
.ag-root.ag-cle .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-cle .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-cle .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cle .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cle .ag-section-head h2 { max-width: 34ch; }
`,

  dossier: {
    curriculumAuthority: 'College Board CLEP pages read raw 31 October 2026: Calculus exam page (one-semester course, 60/40 split, intuition, assumed preparatory math, 44 questions in two sections, calculator rules, topic weights 10/50/40, radians and ln notes, ACE 50 and 4 semester hours); Precalculus exam page (about 48 questions, section order, numerical entry, topic weights, trigonometry note, ACE 50 and 3 semester hours); Understand Scores; Exam Policies; Calculus study resources.',
    localProject: 'Our worked problems: eight calculus (limit 4; 6x cos(3x^2); slope -3/4; L\'Hospital 1; related rate 20 pi; sin(x^2) + C; area 1/6; k = ln 2 / 5) and four precalculus (inverse e^(x/2) + 1; pi/6 and 5 pi/6; ellipse vertices (3, 0) and (-3, 0); 1 + cos x); a twelve-item set; six-week and five-week plans. Lesson family: derivative as rate, integral as accumulation.',
    requiredMentions: ['approximately 60% limits and differential calculus and 40% integral calculus', 'is primarily concerned with an intuitive understanding of calculus and experience with its methods and applications', 'Knowledge of preparatory mathematics is assumed, including algebra, geometry, trigonometry, and analytic geometry', 'Only some of the questions will require the use of the calculator', 'A large portion of the exam is devoted to testing a student\'s understanding of functions and their properties', 'permeates most of the major topics and accounts for more than 15% of the exam', 'Each institution reserves the right to set its own credit-granting policy, which may differ from the American Council on Education (ACE)', 'may not retake an exam of the same title within three months of the test date', 'all angles are measured in radians'],
    sources: [
      { claim: 'CLEP Calculus exam: content, sections, calculator, topics, ACE recommendation.', url: 'https://clep.collegeboard.org/clep-exams/calculus' },
      { claim: 'CLEP Precalculus exam: content, sections, calculator, topics, ACE recommendation.', url: 'https://clep.collegeboard.org/clep-exams/precalculus' },
      { claim: 'CLEP scaled scores 20 to 80; no penalty for wrong answers.', url: 'https://clep.collegeboard.org/scores/understand-scores' },
      { claim: 'CLEP retest policy: three months.', url: 'https://clep.collegeboard.org/clep-exam-policies' },
      { claim: 'CLEP Calculus study resources disclaimer.', url: 'https://clep.collegeboard.org/prepare-for-an-exam/study-resources-by-exam/calculus' }
    ],
    rejectedClaims: [
      'Exam and examination-guide prices on College Board\'s pages: not printed (no typed currency on US pages).',
      'College Board sample questions: not reproduced; every problem is ours.',
      'Which colleges accept CLEP Calculus or Precalculus: not listed; each sets its own policy.',
      'Credit or score promises: refused.',
      'Any affiliation with College Board or CLEP: none.'
    ]
  }
};
