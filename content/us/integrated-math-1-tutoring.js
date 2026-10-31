'use strict';
// Integrated Math I tutoring (ag- guide door; UK and US exams cluster, row US004). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/integrated-math-1-tutoring/:
//  - CCSS mathematics PDF (the Appendix A link at thecorestandards.org/assets/CCSSI_Mathematics_Appendix_A.pdf now 301s to
//    corestandards.org/wp-content/uploads/2023/09/Math_Standards1.pdf), page 84 "Note on courses and transitions": the
//    standards "do not mandate the sequence of high school courses"; sample pathways "in both a traditional course sequence
//    (Algebra I, Geometry, and Algebra II) as well as an integrated course sequence (Mathematics 1, Mathematics 2, Mathematics 3)";
//    "The standards themselves do not dictate curriculum, pedagogy, or delivery of content."
//  - Utah State Board of Education, Utah Core State Standards for Mathematics, High School PDF (ADA May 2021): "THE
//    FUNDAMENTAL PURPOSE OF SECONDARY MATHEMATICS I is to formalize and extend the mathematics that students learned in the
//    middle grades"; "contrasting them with exponential phenomena"; "The final unit in the course ties together the algebraic
//    and geometric ideas studied"; six critical areas (Area 2 "distinguishing between additive and multiplicative change",
//    "interpret arithmetic sequences as linear functions and geometric sequences as exponential functions"; Area 4 "With
//    linear models, they look at residuals to analyze the goodness of fit"; Area 5 triangle congruence from rigid motions;
//    Area 6 coordinates, "slopes of parallel and perpendicular lines").
//  - USBE "Major Work of Secondary Mathematics I" overview (ADA 7/18/2019): grade band 9 to 11 major work bullets.
//  - USBE Graduation Pathways (2021): Secondary Math I = Linear and Exponential Functions, Congruence, Descriptive
//    Statistics; Secondary Math I Plus adds Matrices and Vectors; "Taking all three Extended courses is equivalent to taking
//    Pre-Calculus".
//  - NC DPI mathematics Standard Course of Study page: graduation needs "NC Math 1, 2, and 3 and a fourth mathematics course
//    to be aligned with the student's post high school plans".
//  - NWEA MAP Growth features page: "Every license of MAP Growth includes tests for Algebra 1 and 2, Integrated Math 1, 2 and
//    3, and Geometry."
// Our own material, labelled: two savings plans (linear 50 + 20w against exponential 5 x 2^w, crossing between weeks 4 and 5),
// sequences as functions (4n + 3 and 3 x 2^(n - 1)), a justified system solve (x = 4, y = 2), residuals for y = 3.5x + 48.5,
// a coordinate proof that (0,0), (4,1), (3,5), (-1,4) is a square, a twelve-item practice set and a year plan.
// Lesson family: additive versus multiplicative change.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COURSE HELP', blurb: 'Integrated Math I explained: linear against exponential, sequences, residuals and congruence by rigid motion, from Common Core and state course documents.' },
  slug: 'integrated-math-1-tutoring',
  code: 'it',
  accent: '#436A8C',
  accentRationale: 'Integrated Math I tutoring: a steel blue #436A8C from the US allocation table, 5.38:1 on paper #FBF8F2 and 4.63:1 on the deepest tint, the coolest of the three integrated pages',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'Integrated Math 1 tutoring',
  title: 'Integrated Math 1 Tutoring: Integrated Math I Help Online',
  description: 'Integrated Math 1 tutoring online: what Integrated Math I covers, how it differs from Algebra 1, worked examples on linear and exponential models, and practice.',
  ogDescription: 'Integrated Math I mixes algebra, functions, geometry and data in one ninth grade course. What it covers, why it feels different from Algebra 1, and how to help.',
  twitterDescription: 'Integrated Math I, explained from state course documents, with our own worked examples.',
  pageName: 'Integrated Math 1 Tutoring',
  webPageDescription: 'A guide to Integrated Math I (Math 1, Secondary Mathematics I) for students and parents, built from the Common Core high school note on course sequences and from state course documents, with original worked examples and a practice set.',
  courseDescription: 'Integrated Math I taught live online for grade 9 students, linear and exponential functions through congruence and coordinate geometry, in a class of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Integrated Math 1 tutoring',
  navLinks: [
    { href: '#what', label: 'What it is' },
    { href: '#units', label: 'The units' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#practice', label: 'Practice' },
    { href: '#ladder', label: 'Integrated or traditional' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grade 9 math &middot; Integrated pathway',
  h1: 'Integrated Math 1 tutoring: help with Integrated Math I',
  lede: 'Integrated Math I is the first course of the integrated high school pathway. Instead of a whole year of algebra, a ninth grader meets linear and exponential functions, a unit of data and regression, and a unit of geometric congruence in the same course. Families who moved from a district that teaches Algebra 1 often find the order unfamiliar, and textbook help is harder to find. This page sets out what the course contains, in the states\' own words, and teaches its central idea.',
  secondaryCta: { href: '#units', label: 'See the six units' },
  wa: 'Hello Modern Age Coders, my child is taking Integrated Math 1 and needs some help. Could we book a free first class?',
  heroNote: 'Live math teaching since 2020 &middot; 10,000+ students &middot; grade 9 and up',
  spec: [
    ['Course', 'Integrated Math I, also Math 1 or Secondary Math I'],
    ['Usual grade', 'Grade 9'],
    ['Strands', 'Algebra, functions, geometry, statistics'],
    ['Big idea', 'Linear against exponential change'],
    ['Next course', 'Integrated Math II'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Integrated Math I is the first course of the Common Core integrated sequence (Mathematics 1, 2 and 3), taught in states such as Utah, as Secondary Mathematics I, and North Carolina, as NC Math 1. It covers linear and exponential functions, equations and systems, linear models of data, and congruence. Modern Age Coders teaches it live online, in a batch of 15 to 20 or 1-on-1, through our Algebra Foundations course.',

  picks: {
    eyebrow: 'Integrated Math I',
    h2: 'Three courses for Integrated Math I',
    lede: 'Algebra Foundations carries the algebra and functions half of the course; the other two cover geometry and the years ahead.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'IT / 01', title: 'Algebra foundations', note: 'Linear and exponential functions, equations and systems.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'IT / 02', title: 'High school math', note: 'All three integrated years, including the geometry units.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'IT / 03', title: 'Middle school math', note: 'Grade 8 functions and equations, if gaps show up.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What it is',
      h2: 'What is Integrated Math 1, and how is it different from Algebra 1?',
      lede: 'It is the same Common Core high school content as the traditional pathway, cut into courses a different way. Algebra 1 keeps geometry for a separate year; Integrated Math I mixes a share of it in from the start.',
      body: [
        { kind: 'two',
          leftH3: 'Two sequences, one set of standards',
          left: [
            'The Common Core\'s note on courses says its high school standards "do not mandate the sequence of high school courses." It names two model sequences: "a traditional course sequence (Algebra I, Geometry, and Algebra II)" and "an integrated course sequence (Mathematics 1, Mathematics 2, Mathematics 3)."',
            'The same note says "The standards themselves do not dictate curriculum, pedagogy, or delivery of content." That is why course names and textbooks differ from state to state while the underlying standards match.'
          ],
          rightH3: 'What the integrated order changes',
          right: [
            'A student in Algebra 1 spends most of grade 9 on equations, functions and quadratics. A student in Integrated Math I stops after linear and exponential functions, then studies data and congruence before quadratics arrive in Integrated Math II.',
            'Neither order is easier. Moving between them mid-sequence is what causes trouble, because a transferring student can miss a topic or meet one twice.'
          ] },
        { kind: 'table', mt: true, caption: 'What different states call the first integrated course (state documents read 31 October 2026)', head: ['State', 'Course name', 'What the state publishes'], rows: [
          ['Utah', 'Secondary Mathematics I', 'Core standards with six critical areas; a graduation pathways chart'],
          ['North Carolina', 'NC Math 1', 'Graduation requires "NC Math 1, 2, and 3 and a fourth mathematics course to be aligned with the student\'s post high school plans"'],
          ['Many districts elsewhere', 'Integrated Math I or Math I', 'District course guides; check yours for the exact unit order']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://corestandards.org/wp-content/uploads/2023/09/Math_Standards1.pdf" rel="noopener" target="_blank">Common Core State Standards for Mathematics</a> (page 84), <a class="ag-inline-link" href="https://www.schools.utah.gov/curr/mathematics/core.php" rel="noopener" target="_blank">Utah State Board of Education mathematics core</a> and <a class="ag-inline-link" href="https://www.dpi.nc.gov/districts-schools/classroom-resources/office-teaching-and-learning/standard-course-study/mathematics/standard-course-study-supporting-resources" rel="noopener" target="_blank">NC DPI Standard Course of Study supporting resources</a>.' },
        { kind: 'p', mt: true, html: 'Test makers follow the integrated names too. NWEA\'s MAP Growth features page says "Every license of MAP Growth includes tests for Algebra 1 and 2, Integrated Math 1, 2 and 3, and Geometry", so a district can measure growth inside the course itself.' }
      ]
    },
    {
      id: 'units', tint: 'deep', eyebrow: 'The units',
      h2: 'What topics are in Integrated Math 1?',
      lede: 'Utah\'s core standards set the course out in six critical areas. They give a clear picture of a typical Integrated Math I year, even outside Utah.',
      body: [
        { kind: 'p', html: 'Utah opens its course description with the purpose: "THE FUNDAMENTAL PURPOSE OF SECONDARY MATHEMATICS I is to formalize and extend the mathematics that students learned in the middle grades." It deepens linear relationships "in part by contrasting them with exponential phenomena", and "The final unit in the course ties together the algebraic and geometric ideas studied."' },
        { kind: 'table', mt: true, caption: 'Secondary Mathematics I critical areas (Utah Core State Standards for Mathematics, High School, read 31 October 2026; the summary column is ours)', head: ['Area', 'Utah\'s focus', 'In plain terms (ours)'], rows: [
          ['1', 'Using quantities to model and analyze situations, interpreting expressions, creating equations', 'Writing an equation from a word problem, and saying what each part means'],
          ['2', 'Function notation, domain and range; comparing linear and exponential functions, "distinguishing between additive and multiplicative change"', 'Adding the same amount each step, or multiplying by the same factor'],
          ['3', 'Solving linear equations and inequalities, justifying each step, systems of equations, simple exponential equations', 'Explaining why each move is allowed, not just doing it'],
          ['4', 'Regression for approximately linear data; "With linear models, they look at residuals to analyze the goodness of fit"', 'Fitting a line and checking how far points miss it'],
          ['5', 'Triangle congruence criteria from rigid motions and formal constructions', 'Why SSS, SAS and ASA work, through slides, flips and turns'],
          ['6', 'Coordinate geometry: special triangles and quadrilaterals, "slopes of parallel and perpendicular lines"', 'Proving a shape is a square with slopes and distances']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Functions as objects',
          left: [
            'In Area 2, Utah says students "move beyond viewing functions as processes that take inputs and yield outputs, and start viewing functions as objects in their own right."',
            'That is the step that trips up many ninth graders. A student can plug numbers into f(x) = 3x + 2 yet still struggle to compare two functions given as a table and a graph.'
          ],
          rightH3: 'Sequences hide inside functions',
          right: [
            'Utah\'s wording is that students "interpret arithmetic sequences as linear functions and geometric sequences as exponential functions."',
            'Once a student sees that 7, 11, 15, 19 is a line sampled at whole numbers, half of the course\'s sequence questions become questions they already know how to answer.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'How do you tell linear growth from exponential growth?',
      lede: 'Look at what happens from one step to the next. Linear quantities change by the same amount; exponential quantities change by the same factor. These examples are ours, written for this page.',
      body: [
        { kind: 'table', caption: 'Two savings plans (ours): Plan A starts at 50 and adds 20 each week; Plan B starts at 5 and doubles each week', head: ['Week w', 'Plan A: 50 + 20w', 'Plan B: 5 x 2^w', 'Which is ahead'], rows: [
          ['0', '50', '5', 'A'],
          ['2', '90', '20', 'A'],
          ['4', '130', '80', 'A'],
          ['5', '150', '160', 'B, just'],
          ['6', '170', '320', 'B, by a lot']
        ], numCols: [0, 1, 2] },
        { kind: 'p', mt: true, html: 'Plan A grows by a constant difference of 20, so its graph is a line. Plan B grows by a constant ratio of 2, so its graph curves upward. A fair conclusion, written the way Integrated Math I expects it: "an exponential function with a growth factor above 1 eventually passes any linear function, however far behind it starts." Here that happens between week 4 and week 5.' },
        { kind: 'table', mt: true, caption: 'More worked examples (ours)', head: ['Problem', 'Reasoning', 'Result'], rows: [
          ['Write 7, 11, 15, 19, ... as a function of the term number n', 'Common difference 4, first term 7: a(n) = 7 + 4(n - 1)', 'a(n) = 4n + 3, a linear function'],
          ['Write 3, 6, 12, 24, ... as a function of n', 'Common ratio 2, first term 3', 'g(n) = 3 x 2^(n - 1), exponential'],
          ['Solve 3x + 2y = 16 and x - y = 2', 'From the second, x = y + 2 (adding y to both sides keeps the equation true). Substitute: 3(y + 2) + 2y = 16, so 5y = 10', 'y = 2, x = 4'],
          ['Is the quadrilateral A(0,0), B(4,1), C(3,5), D(-1,4) a square?', 'Slope AB = 1/4 and slope BC = -4; the product is -1, so AB is perpendicular to BC. Each side has length the square root of 17.', 'Yes: four equal sides and a right angle']
        ] },
        { kind: 'table', mt: true, caption: 'Residuals (ours): data (1, 52), (2, 55), (3, 61), (4, 62) with the fitted line y = 3.5x + 48.5', head: ['x', 'Actual y', 'Predicted y', 'Residual (actual minus predicted)'], rows: [
          ['1', '52', '52', '0'],
          ['2', '55', '55.5', '-0.5'],
          ['3', '61', '59', '2'],
          ['4', '62', '62.5', '-0.5']
        ], numCols: [0, 1, 2, 3] },
        { kind: 'p', mt: true, html: 'Small residuals scattered on both sides of zero, with no curved pattern, suggest a linear model fits. If the residuals had run negative, then positive, then negative again, the data would be bending away from a line, perhaps toward an exponential.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice',
      h2: 'Integrated Math 1 practice problems with answers',
      lede: 'Twelve problems we wrote, covering all six areas. Students searching for an Integrated Math 1 practice test can use these as a first check, then go to their own textbook\'s review.',
      body: [
        { kind: 'table', caption: 'Integrated Math I practice written by us, answers in the final column', head: ['#', 'Area', 'Problem', 'Answer'], rows: [
          ['1', 'Expressions', 'In C = 15 + 4h for a bike rental, what does 4 mean?', 'The cost added per hour'],
          ['2', 'Functions', 'Domain of f(x) = 2x - 1 for x in {0, 1, 2}? Range?', 'Domain {0, 1, 2}; range {-1, 1, 3}'],
          ['3', 'Functions', 'Does 2, 6, 18, 54 grow linearly or exponentially?', 'Exponentially, factor 3'],
          ['4', 'Functions', 'Average rate of change of f(x) = x^2 from x = 1 to x = 3?', '4'],
          ['5', 'Equations', 'Solve 5 - 2x &gt; 11', 'x &lt; -3'],
          ['6', 'Equations', 'Solve 2^x = 32', 'x = 5'],
          ['7', 'Systems', 'Solve y = 2x + 1 and y = -x + 7', 'x = 2, y = 5'],
          ['8', 'Data', 'A residual is -3. Was the actual value above or below the line?', 'Below'],
          ['9', 'Data', 'Correlation r = 0.95. Strong or weak? Direction?', 'Strong, positive'],
          ['10', 'Congruence', 'Reflect (2, 1) across the y-axis', '(-2, 1)'],
          ['11', 'Congruence', 'Two sides and the included angle match. Which criterion?', 'SAS'],
          ['12', 'Coordinates', 'Slope of a line perpendicular to y = 3x - 4?', '-1/3']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>August to September: expressions and equations.</b> Modeling with quantities and units, and justified solving.',
          '<b>October to November: functions.</b> Notation, domain and range, sequences, and the linear-exponential contrast.',
          '<b>December to January: systems and inequalities.</b> Graphing, substitution, elimination, and solution regions.',
          '<b>February: data.</b> Scatter plots, lines of fit, residuals and correlation.',
          '<b>March to April: congruence.</b> Rigid motions, triangle congruence criteria and constructions.',
          '<b>May: coordinate geometry and review.</b> Slopes, distances and coordinate proofs, then the end-of-course review.'
        ] },
        { kind: 'p', mt: true, html: 'The calendar above is our own estimate for a school that follows Utah\'s unit order. Districts reorder units, so the teacher lines lessons up with your child\'s actual course map in the first week.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Integrated or traditional',
    h2: 'Is Integrated Math 1 the same as Algebra 1?',
    lede: 'Not quite. It covers much of Algebra 1 plus some geometry and statistics, and leaves quadratics for the next year. Utah\'s pathways chart lists what each integrated course carries.',
    table: { caption: 'The integrated pathway in Utah (Utah State Board of Education, Graduation Pathways PDF, 2021)', head: ['Course', 'Topics Utah lists'], rows: [
      ['Secondary Math I', 'Linear and Exponential Functions; Congruence; Descriptive Statistics'],
      ['Secondary Math I Plus (extended)', 'Adds Matrices and Vectors'],
      ['Secondary Math II', 'Quadratic Functions; Similarity; Right Angle Trigonometry; Conditional Probability'],
      ['Secondary Math III', 'Polynomial, Rational, and Radical Functions; Trigonometry; Logarithms; Data Collection and Analysis']
    ] },
    left: { h3: 'Moving from Algebra 1 into Integrated Math', ps: [
      'A student arriving after Algebra 1 usually knows quadratics already but may have missed congruence and descriptive statistics. Those units are where we start.',
      'Utah notes that "Taking all three Extended courses is equivalent to taking Pre-Calculus", which matters for students aiming at calculus in grade 12.'
    ] },
    right: { h3: 'Moving from Integrated Math I into Geometry', ps: [
      'A student leaving after Integrated Math I has seen congruence early but not quadratics. A short bridge on factoring and graphing parabolas usually closes the gap.',
      'Ask the new school for its course map before the first week, so the bridge can start straight away.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for the integrated pathway',
    lede: 'Live courses for the grade before, the year itself and the two integrated years that follow.',
    bands: [
      { num: 'I', h3: 'Getting ready', sub: 'Grade 8 and before', courses: [
        { code: 'IT / R / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Grade 8 functions.' },
        { code: 'IT / R / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Sequences in Python.' },
        { code: 'IT / R / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'For extra challenge.' }
      ] },
      { num: 'II', h3: 'Integrated Math I', sub: 'Grade 9', courses: [
        { code: 'IT / Y / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The algebra half.' },
        { code: 'IT / Y / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry units too.' },
        { code: 'IT / Y / 03', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'For the data unit.' }
      ] },
      { num: 'III', h3: 'The years after', sub: 'Grades 10 to 12', courses: [
        { code: 'IT / N / 01', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'After Integrated Math III.' },
        { code: 'IT / N / 02', slug: 'sat-math-prep-course', title: 'SAT math', blurb: 'Linear and exponential models.' },
        { code: 'IT / N / 03', slug: 'act-math-prep-course', title: 'ACT math', blurb: 'Mixed algebra and geometry.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Integrated Math I lessons in step with school',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, a step ahead of class.' },
      { time: 'Weekends', l: 'Catch-up on a missed unit.' },
      { time: '1-on-1', l: 'For students switching pathway mid-year.' }
    ],
    cells: [
      { h3: 'Your course map', p: 'Lessons follow the district\'s unit order.' },
      { h3: 'Tables, graphs, rules', p: 'Every function seen three ways.' },
      { h3: 'Justified steps', p: 'Each move in an equation explained.' },
      { h3: 'Geometry by motion', p: 'Congruence through transformations.' },
      { h3: 'Transfer bridges', p: 'Gaps closed for students who moved.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Students who enjoy patterns often go on to code them. Browse <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from families, copied word for word.',

  fees: {
    h2: 'Fees',
    lede: 'We charge a monthly fee in US dollars and there is no fixed term, so a family can book help for a single hard unit or for the whole year.',
    free: ['A free first class', 'Bring the current homework', 'No payment details'],
    group: ['Fifteen to twenty students', 'A regular teacher', 'Choose the batch', 'Month to month'],
    one: ['Private lessons', 'Built on your school\'s unit order', 'Flexible slots']
  },

  faq: {
    eyebrow: 'Questions families ask',
    h2: 'Integrated Math 1: common questions',
    items: [
      { q: 'What is taught in Integrated Math 1?', a: 'Integrated Math I usually covers expressions and equations, linear and exponential functions, systems, linear models of data with residuals, triangle congruence through rigid motions, and coordinate geometry. Utah\'s Secondary Mathematics I sets these out in six critical areas.' },
      { q: 'Is Integrated Math 1 the same as Algebra 1?', a: 'No, though they overlap a great deal. Integrated Math I shares most of the Algebra 1 work on linear and exponential functions but adds geometry and statistics units, and leaves quadratics for Integrated Math II.' },
      { q: 'Is Integrated Math 1 harder than Algebra 1?', a: 'Not by design. Both follow the same Common Core high school standards in a different order. Students sometimes find it harder because the course switches between algebra and geometry within one year.' },
      { q: 'What grade takes Integrated Math 1?', a: 'Most students take it in grade 9. Some take it in grade 8 as an accelerated course, and others begin in grade 10, depending on district placement.' },
      { q: 'Which states use Integrated Math?', a: 'Utah (Secondary Mathematics I to III) and North Carolina (NC Math 1 to 3) are two states whose documents we checked. Many districts in other states also offer an integrated pathway alongside or instead of Algebra 1, Geometry and Algebra 2.' },
      { q: 'Where can I find an Integrated Math 1 practice test?', a: 'Your child\'s textbook and teacher are the first place, since school tests follow them. This page has twelve practice problems we wrote, with answers. We do not reproduce state test items or publisher answer keys.' },
      { q: 'My child moved from Algebra 1 to Integrated Math. What will they have missed?', a: 'Usually congruence through transformations and descriptive statistics, and sometimes coordinate proofs. A few focused lessons on those units usually close the gap.' },
      { q: 'Can you check my child\'s Integrated Math homework answers?', a: 'We go through the thinking with the student and check that their method is right, but we do not hand over answers to graded work. The aim is that they can do the next problem alone.' },
      { q: 'When are your Integrated Math 1 classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with any state or textbook publisher?', a: 'No. Modern Age Coders is an independent online school, not affiliated with any state education department, district or publisher. We teach from the published standards and your school\'s course.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More help for grade 9 math and the courses around it.',
    items: [
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'For the traditional Algebra 1 route.' },
      { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring', p: 'Congruence and proof in depth.' },
      { href: '/online-math-tutor-9th-grade', label: 'Ninth grade math', p: 'The usual Integrated Math I year.' },
      { href: '/common-core-math-tutor', label: 'Common Core math tutor', p: 'The standards both pathways share.' },
      { href: '/middle-school-math-placement-test-prep', label: 'Math placement tests', p: 'How students are placed into grade 9 math.' },
      { href: '/online-math-tutor-cost', label: 'Math tutor cost', p: 'How tutoring is usually priced.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your district, the unit your child is on, and whether they came from an Algebra 1 course. The teacher will begin with one linear and one exponential table to see where your child stands.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or <a class="ag-inline-link" href="/courses">the full course list</a>.',
    note: 'Lessons are taught live by teachers in India, with afternoon and evening slots in Eastern, Central, Mountain and Pacific time. WhatsApp reaches us fastest.',
    formNote: 'Free first class, no card details asked.'
  },

  footer: {
    cols: [
      { h4: 'Grade 9 and 10 math', links: [
        { href: '/algebra-tutoring-online-usa', label: 'Algebra' },
        { href: '/geometry-tutoring-online-usa', label: 'Geometry' },
        { href: '/algebra-2-tutoring-online', label: 'Algebra 2' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-math-tutor-9th-grade', label: 'Grade 9 math' },
        { href: '/common-core-math-tutor', label: 'Common Core math' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '50 + 20w against 5 x 2^w'
  },

  personalityCss: `
.ag-root.ag-it .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-it .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-it .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-it .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-it .ag-section-head h2 { max-width: 28ch; }
`,

  dossier: {
    curriculumAuthority: 'Common Core mathematics PDF (page 84 note on courses and transitions), Utah Core State Standards for Mathematics High School (Secondary Mathematics I purpose and six critical areas), USBE Major Work of Secondary Mathematics I and Graduation Pathways (2021), NC DPI Standard Course of Study page, NWEA MAP Growth features page; all read raw 31 October 2026.',
    localProject: 'Our worked examples: linear 50 + 20w against exponential 5 x 2^w (crossing between weeks 4 and 5); sequences 4n + 3 and 3 x 2^(n - 1); system solve x = 4, y = 2; residuals 0, -0.5, 2, -0.5 for y = 3.5x + 48.5; coordinate proof of a square with side root 17. Twelve-item practice set and a year plan. Lesson family: additive versus multiplicative change.',
    requiredMentions: ['do not mandate the sequence of high school courses', 'an integrated course sequence (Mathematics 1, Mathematics 2, Mathematics 3)', 'THE FUNDAMENTAL PURPOSE OF SECONDARY MATHEMATICS I is to formalize and extend the mathematics that students learned in the middle grades', 'distinguishing between additive and multiplicative change', 'With linear models, they look at residuals to analyze the goodness of fit', 'start viewing functions as objects in their own right', 'NC Math 1, 2, and 3 and a fourth mathematics course', 'Every license of MAP Growth includes tests for Algebra 1 and 2, Integrated Math 1, 2 and 3, and Geometry', 'Taking all three Extended courses is equivalent to taking Pre-Calculus'],
    sources: [
      { claim: 'Common Core note on traditional and integrated course sequences.', url: 'https://corestandards.org/wp-content/uploads/2023/09/Math_Standards1.pdf' },
      { claim: 'Utah Secondary Mathematics I purpose and critical areas.', url: 'https://www.schools.utah.gov/curr/mathematics/_mathematics_/_core/_utah_core_standards_tab_/CoreStandardsHighSchool.pdf' },
      { claim: 'Utah graduation pathways and course topics.', url: 'https://www.schools.utah.gov/curr/mathematics/_mathematics_/_core/CoreStandardsGraduationPathways.pdf' },
      { claim: 'North Carolina graduation mathematics requirement (NC Math 1, 2, 3).', url: 'https://www.dpi.nc.gov/districts-schools/classroom-resources/office-teaching-and-learning/standard-course-study/mathematics/standard-course-study-supporting-resources' },
      { claim: 'MAP Growth course-specific tests for Integrated Math 1, 2 and 3.', url: 'https://www.nwea.org/map-growth/features/' }
    ],
    rejectedClaims: [
      'Common Core Appendix A text: its official link now redirects to the main standards document, so Appendix A wording is not quoted.',
      'California Department of Education framework: blocked by a web-application firewall; not retried.',
      'West Virginia Department of Education math page: returned 403; not retried.',
      'NC Math 1 standards Google Docs: not retrievable as raw text; only the NC DPI web page is quoted.',
      'Textbook or end-of-course test items: not reproduced; examples are ours.',
      'Any affiliation with a state, district or publisher: none.'
    ]
  }
};
