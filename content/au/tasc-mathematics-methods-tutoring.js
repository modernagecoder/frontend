'use strict';
// TASC Mathematics Methods tutoring (ag- exam door, Australia cluster Phase 3, row 77).
// Facts read raw on 7 October 2026 from TASC: the Mathematics Methods (MTM415117) course page, current for 2026;
// complexity level 4, size value 15; five areas of study (Function Study, Circular (Trigonometric) Functions,
// Differential Calculus, Integral Calculus, Probability and Statistics) linked to criteria 4 to 8; CAS graphics
// calculators required; a prerequisite for Mathematics Specialised Level 4; final award from 13 ratings (8
// internal, 5 external). External Assessment Specifications (Version 1.2, February 2022, linked from the 2026
// course page): three hours plus 15 minutes preparation; Section A 80 minutes and 80 marks without calculators,
// collected after 80 minutes; Section B 100 minutes and 100 marks with calculators; five parts each; working
// rules for 2-mark and 3-or-more-mark items. 2026 TASC Written Exam Timetable: Tuesday 17 November.
// Spine: the rectangular hyperbola y = a/(x + b) + c, its asymptotes and its inverse, family checked free
// site-wide 7 October 2026.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'TASC MATHEMATICS METHODS', label: 'TASC Mathematics Methods tutoring', blurb: 'Tasmania\'s Level 4 Mathematics Methods from the TASC course document: five areas, a calculator-free first section, the working rules that cap marks, and a hyperbola lesson.' },
  slug: 'tasc-mathematics-methods-tutoring',
  code: 'tamm',
  accent: '#8C204C',
  accentRationale: 'TASC Mathematics Methods: a deep beetroot crimson chosen by hand, at least 12 RGB from every site accent and 4.8:1 or better on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'TASC Mathematics Methods tutoring',
  title: 'TASC Mathematics Methods Tutoring | Level 4 Online',
  description: 'TASC Mathematics Methods (MTM415117) tutoring for Tasmanian students: five areas, the calculator-free Section A, working rules and the November exam.',
  ogDescription: 'TASC Mathematics Methods Level 4 explained from the course document and exam specifications: five areas of study, how the award is calculated, the two-section exam, why working matters, and a worked hyperbola lesson.',
  twitterDescription: 'TASC Maths Methods Level 4: five areas, a calculator-free first section, marks capped without working, and a hyperbola lesson.',
  pageName: 'TASC Mathematics Methods Tutoring',
  webPageDescription: 'Support for Tasmanian students taking TASC Mathematics Methods (MTM415117): the five areas of study, recommended preparation, the award rules, the external exam structure, timing and working rules, the 2026 exam date, and a worked lesson on rectangular hyperbolas and their inverses.',
  courseDescription: 'Live online maths tutoring in functions, circular functions, calculus, probability and statistics for Tasmanian students taking TASC Mathematics Methods Level 4, without completing any assessed work.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'TASC Mathematics Methods',
  navLinks: [
    { href: '#study', label: 'Five areas' },
    { href: '#exam', label: 'The exam' },
    { href: '#hyperbola', label: 'Hyperbola lesson' },
    { href: '#working', label: 'Working' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Tasmania &middot; TASC Level 4 &middot; Live online',
  h1: 'TASC Mathematics Methods tutoring',
  lede: 'Mathematics Methods Level 4 is the Tasmanian course for students heading towards engineering, the sciences and other mathematical study after school. It is demanding in a particular way: the first 80 minutes of the exam happen without a calculator, and a correct answer without working can lose marks.',
  secondaryCta: { href: '#hyperbola', label: 'See the hyperbola lesson' },
  wa: 'Hello Modern Age Coders, I would like a free maths class about TASC Mathematics Methods Level 4.',
  heroNote: 'Course document read at source &middot; Working shown on every line &middot; Lessons on Hobart time',
  spec: [
    ['Course', 'Mathematics Methods'],
    ['Code', 'MTM415117'],
    ['Level', '4, size value 15'],
    ['Areas of study', 'Five, all compulsory'],
    ['Exam', 'Three hours, two sections'],
    ['Section A', 'No calculator, 80 marks'],
    ['2026 exam', 'Tuesday 17 November'],
    ['We never', 'Do assessed work']
  ],
  capsuleQ: 'In short',
  capsule: 'TASC Mathematics Methods (MTM415117) is a Level 4 Tasmanian course with five compulsory areas of study: function study, circular (trigonometric) functions, differential calculus, integral calculus, and probability and statistics. A three-hour November exam supplies five of the thirteen ratings, and its first 80-mark section is sat without a calculator.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses under Level 4 Methods',
    lede: 'Functions first, because every other area depends on them, then calculus and statistics.',
    items: [
      { course: 'ap-precalculus-exam-prep-course', code: 'TAMM / 01', title: 'Precalculus', note: 'Polynomial, exponential, logarithmic and circular functions with their graphs and transformations, the core of function study.' },
      { course: 'ap-calculus-exam-prep', code: 'TAMM / 02', title: 'Calculus course', note: 'Limits, derivatives, antiderivatives and areas, which make up two of the five areas.' },
      { course: 'statistics-probability-maths-course', code: 'TAMM / 03', title: 'Statistics and probability', note: 'Binomial and normal distributions and statistical inference, the fifth area.' }
    ]
  },

  sections: [
    {
      id: 'study', tint: 'tint', eyebrow: 'Inside the course document',
      h2: 'Five areas of study, linked to five criteria',
      lede: 'Summarised from the MTM415117 page on the TASC website as it stood on 7 October 2026, when it was marked current for 2026. No area is optional, but schools choose the order.',
      body: [
        { kind: 'table', caption: 'MTM415117 areas of study and the criteria they feed', head: ['Area of study', 'Criterion', 'Examples of content from the course document'], rows: [
          ['Function study', 'Criterion 4', 'Polynomial, power, exponential and logarithmic functions, transformations, composition, and inverses including y = a/(x + b) + c'],
          ['Circular (trigonometric) functions', 'Criterion 5', 'Radians, exact values, graphs on extended domains, transformations and trigonometric equations'],
          ['Differential calculus', 'Criterion 6', 'Rates of change, differentiability, tangents and normals, stationary points and their nature'],
          ['Integral calculus', 'Criterion 7', 'Antidifferentiation, definite integrals and areas'],
          ['Probability and statistics', 'Criterion 8', 'Binomial and normal distributions and statistical inference']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Criteria 1 to 3 apply across all five areas and are assessed by the school. Criteria 4 to 8 are tied to one area each, and those five are also assessed in the external exam. The course document recommends an integrated approach even though the areas can be taught in any order, because so much of the content is inter-related.',
            'The course document highly recommends that students arrive having completed Mathematics Methods Foundation Level 3, or the Australian Curriculum Mathematics 10A with some additional introductory calculus. Assumed knowledge from both is drawn on throughout.'
          ],
          right: [
            'Students must have access to CAS graphics calculators and become proficient with them. The course document also recommends computer software as an aid to learning and lists examples such as Wolfram Mathematica and Microsoft Excel.',
            'Level 4 Methods is described as a necessary prerequisite for Mathematics Specialised Level 4, and as a foundation for tertiary study in engineering, the sciences and related technology fields. For a student who also codes, it is the mathematics behind optimisation and data science.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.tasc.tas.gov.au/students/courses/mathematics/mtm415117-9/" rel="noopener" target="_blank">TASC, Mathematics Methods (MTM415117) course page</a>: areas of study, criteria, assumed knowledge, technology and award rules, read on 7 October 2026.' }
      ]
    },
    {
      id: 'exam', tint: 'deep', eyebrow: 'Ratings and the exam',
      h2: 'How the Level 4 award is put together',
      lede: 'Three TASC documents answer this: the course document for the award, the exam specifications (still Version 1.2 of February 2022, the copy the 2026 page links to) for the paper, and the 2026 timetable for the date.',
      body: [
        { kind: 'table', caption: 'The Level 4 Methods result, piece by piece', head: ['Element', 'What TASC sets out'], rows: [
          ['How the award is reached', '13 ratings in total, of which the school supplies 8 and the external paper 5'],
          ['Top award (EA)', 'Eleven A ratings and two B ratings or better, with four of the A ratings and one B coming from the exam'],
          ['High Achievement (HA)', 'Five each of A and B plus three C, of which the exam must supply two A, two B and one C'],
          ['Time in the exam room', 'A three-hour paper, with a 15-minute preparation period before writing starts'],
          ['Section A', 'About 80 minutes, 80 marks, five parts of 16 marks; calculators not allowed; collected 80 minutes after the start'],
          ['Section B', 'About 100 minutes, 100 marks, five parts of 20 marks; calculators allowed'],
          ['2026 date', 'Tuesday 17 November, on the TASC written exam timetable']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Both sections follow the same five parts: functions and graphs, circular functions, differential calculus, integral calculus, and statistics and probability. Each externally assessed criterion is marked out of 36, which is the 16 marks from Section A plus the 20 from Section B for that area.',
            'The specifications design papers at roughly a mark a minute, so 80 marks fill the 80 calculator-free minutes and 100 marks the remaining 100. Students may begin Section B during the first 80 minutes, but without a calculator.'
          ],
          right: [
            'The calculator-free section is a deliberate test of fluency. Exact values, logarithm laws, factorising and simple derivatives have to be automatic, because there is no device to fall back on and the booklet is taken away at the 80 minute mark.',
            'TASC posts the 2021, 2022 and 2023 Methods papers beside the course document. They show the house style of question; our practice sets imitate that style with new questions.'
          ] },
        { kind: 'source', html: 'Award rules: the MTM415117 course document. Paper design: the Methods <a class="ag-inline-link" href="https://assets.tasc.tas.gov.au/uploads/2026/06/MTM415117-Mathematics-Methods-External-Assessment-Specifications.pdf" rel="noopener" target="_blank">assessment specifications PDF</a>. Date: TASC\'s <a class="ag-inline-link" href="https://assets.tasc.tas.gov.au/uploads/2026/08/2026-TASC-Written-Exam-Timetable.pdf" rel="noopener" target="_blank">written exam timetable for 2026</a>. All opened 7 October 2026.' }
      ]
    },
    {
      id: 'hyperbola', tint: 'tint', eyebrow: 'A worked lesson',
      h2: 'A rectangular hyperbola and its inverse',
      lede: 'Function study includes finding inverses of functions such as y = a/(x + b) + c. The example below is ours, chosen because it can be done entirely by hand, which is exactly what Section A demands.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The function', p: 'Take y = 2/(x minus 1) + 3. It is the graph of y = 2/x moved 1 unit right and 3 units up, so its asymptotes are x = 1 and y = 3.' },
          { h3: 'Intercepts', p: 'At x = 0, y = minus 2 + 3 = 1, giving (0, 1). Setting y = 0 gives 2/(x minus 1) = minus 3, so x = 1/3, giving (1/3, 0).' },
          { h3: 'The inverse', p: 'Swap x and y and solve: x minus 3 = 2/(y minus 1), so y = 2/(x minus 3) + 1. The asymptotes swap too, to x = 3 and y = 1.' }
        ] },
        { kind: 'table', caption: 'Checking the inverse by composition (our worked example)', head: ['x', 'f(x) = 2/(x minus 1) + 3', 'Inverse applied to f(x)', 'Back where we started?'], rows: [
          ['2', '5', '2/(5 minus 3) + 1 = 2', 'Yes'],
          ['5', '3.5', '2/(3.5 minus 3) + 1 = 5', 'Yes'],
          ['minus 1', '2', '2/(2 minus 3) + 1 = minus 1', 'Yes'],
          ['0', '1', '2/(1 minus 3) + 1 = 0', 'Yes'],
          ['1/3', '0', '2/(0 minus 3) + 1 = 1/3', 'Yes']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Every feature of the inverse is predictable from the original. The domain of f is all x except 1 and its range all y except 3; the inverse has domain all x except 3 and range all y except 1. The intercepts (0, 1) and (1/3, 0) become (1, 0) and (0, 1/3). Reflecting in the line y = x swaps everything, and a student who knows that can sketch the inverse before doing any algebra.',
            'This function is one-to-one, so no domain needs restricting. The course document distinguishes functions from relations and asks when an inverse exists, which is why we pair this example with y = (x minus 1) squared, where an inverse exists only after the domain is cut in half.'
          ],
          right: [
            'The composition check in the table is the habit we drill. Feeding a value through the function and then the inverse must return the starting value. Two or three checks take under a minute and catch the most common error, a sign slip when rearranging.',
            'We confirm worked examples like this with a few lines of code that evaluate both functions at many points. In lessons, students write that check themselves, which builds trust in algebra and makes the calculator in Section B a tool for confirming answers rather than finding them.'
          ] },
        { kind: 'source', html: 'Content from the MTM415117 course page, function study, read on 7 October 2026. The function, intercepts, inverse and composition checks are our own, verified by calculation.' }
      ]
    },
    {
      id: 'working', tint: '', eyebrow: 'Why working matters',
      h2: 'The marking rules that reward working',
      lede: 'The External Assessment Specifications spell out how items are marked. These rules decide how a student should write every answer, so they are worth knowing word for word.',
      body: [
        { kind: 'table', caption: 'Marking rules from the MTM415117 External Assessment Specifications', head: ['Item worth', 'Correct answer with no working', 'Incorrect answer with some correct working'], rows: [
          ['One mark', 'Full mark: no working is required', 'Half a mark'],
          ['Two marks', 'A maximum of 1.5 marks', 'Partial marks'],
          ['Three or more marks', 'A maximum of half marks', 'Partial marks']
        ] },
        { kind: 'p', text: 'Read the last row twice. On a 4-mark question, a correct final answer with no working can earn at most 2. Writing the steps is not decoration; it is half the marks. We train students to write a line of working for every transformation, every derivative and every probability, so the habit holds under exam pressure. We do this with our own questions, and we never complete or review any school assessment task, which TASC requires to be the student\'s own work.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://assets.tasc.tas.gov.au/uploads/2026/06/MTM415117-Mathematics-Methods-External-Assessment-Specifications.pdf" rel="noopener" target="_blank">MTM415117 External Assessment Specifications</a>, assessment section, read on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready for Level 4',
    h2: 'A route from Year 10 to Level 4 Methods',
    lede: 'Where to start depends on how secure algebra and functions are, more than on age.',
    table: { caption: 'From Year 10 into TASC Mathematics Methods Level 4', head: ['When', 'Step', 'Ready when the student'], rows: [
      ['Year 10', '1. Algebra and 10A', 'Factorises, solves and manipulates indices without a calculator'],
      ['Year 11', '2. Methods Foundation', 'Sketches the standard functions and their transformations from rules'],
      ['Early Level 4', '3. Calculus', 'Differentiates and finds stationary points with every step written'],
      ['Later Level 4', '4. Distributions', 'Chooses a binomial or normal model and interprets the answer in context']
    ] },
    left: { h3: 'If Section A is the worry', ps: [
      'Timed, calculator-free sets of short questions, three or four times a week, build the fluency that 80 minutes without a calculator requires.',
      'Most lost marks in that section are algebra slips, so we repair algebra first.'
    ] },
    right: { h3: 'Pairing subjects', ps: [
      'Students who enjoy computing alongside Methods should read about <a class="ag-inline-link" href="/tasc-computer-science-help">TASC Computer Science</a>.',
      'Students in other states can compare with <a class="ag-inline-link" href="/vce-maths-methods-tutoring">VCE Maths Methods</a> or <a class="ag-inline-link" href="/sace-mathematical-methods-tutoring">SACE Mathematical Methods</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Level 4 students',
    lede: 'Grouped by area of study. Every card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Functions', sub: 'Function study and circular functions', courses: [
        { code: 'TAMM / FN / 01', slug: 'ap-precalculus-exam-prep-course', title: 'Precalculus', blurb: 'The functions and graphs every area relies on.' },
        { code: 'TAMM / FN / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Calculator-free fluency for Section A.' },
        { code: 'TAMM / FN / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Broad senior maths for a solid base.' }
      ] },
      { num: 'II', h3: 'Calculus', sub: 'Differential and integral', courses: [
        { code: 'TAMM / CA / 01', slug: 'ap-calculus-exam-prep', title: 'Calculus course', blurb: 'Derivatives, integrals and their uses.' },
        { code: 'TAMM / CA / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'A parallel senior course for extra calculus practice.' },
        { code: 'TAMM / CA / 03', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'A look at first-year maths.' }
      ] },
      { num: 'III', h3: 'Statistics and tools', sub: 'Probability and technology', courses: [
        { code: 'TAMM / ST / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Distributions and inference.' },
        { code: 'TAMM / ST / 02', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'Extra practice with sampling and models.' },
        { code: 'TAMM / ST / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Checking functions and probabilities in code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Methods lessons on Hobart time',
    lede: 'Every lesson is live, with the tutor in India. From 4 October 2026 until 4 April 2027 Hobart clocks run five and a half hours in front of India; outside daylight saving the lead drops to four and a half (IANA time zone database). So a Hobart lesson at 4.30 pm in January starts at 11 am for the tutor.',
    slots: [
      { time: 'Weekday after school', l: 'Weekly progress through the five areas.' },
      { time: 'Weekend morning', l: 'Timed Section A and Section B practice.' },
      { time: 'School holidays', l: 'Revision before the November exam.' }
    ],
    cells: [
      { h3: 'Working on every line', p: 'Answers written the way the marking rules reward.' },
      { h3: 'Calculator-free first', p: 'Fluency built before technology is used.' },
      { h3: 'Check by composition', p: 'Inverses, derivatives and integrals confirmed, not assumed.' },
      { h3: 'Group marking', p: 'In classes of fifteen to twenty, students swap solutions and mark the working against the TASC rules.' },
      { h3: 'Private sessions', p: 'Booked for a single weak area, usually circular functions or integration.' },
      { h3: 'No forecasts', p: 'Nobody here will guess at your award or your ATAR.' }
    ]
  },

  projectsH2: 'Things our students coded in their spare time',
  projectsLede: 'Personal projects, never assessed work. Browse them in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Unedited Google reviews from families and learners.',

  fees: {
    h2: 'Fees',
    lede: 'Families outside India pay one monthly price in US dollars. No enrolment charge applies, and stopping simply means not renewing for the next month.',
    free: ['A full maths lesson with a tutor', 'A clear first area to work on', 'No card details'],
    group: ['Fifteen to twenty students at one level', 'The same tutor all term', 'Working checked line by line', 'A certificate at the end'],
    one: ['A tutor for one student', 'Focused on one area of study', 'Often booked before November']
  },

  faq: {
    eyebrow: 'Questions about MTM415117',
    h2: 'TASC Methods questions we hear',
    items: [
      { q: 'What is TASC Mathematics Methods?', a: 'It is a Level 4 Tasmanian senior secondary course, code MTM415117, with a size value of 15, covering function study, circular functions, differential calculus, integral calculus, and probability and statistics.' },
      { q: 'What should I study before Level 4 Methods?', a: 'The course document highly recommends Mathematics Methods Foundation Level 3, or Australian Curriculum Mathematics 10A with some additional introductory calculus.' },
      { q: 'Can I use a calculator in the exam?', a: 'Not in Section A, which lasts about 80 minutes and is collected 80 minutes after the start. Calculators are allowed in Section B. Students must have a CAS graphics calculator for the course.' },
      { q: 'Where does my final Methods award come from?', a: 'Thirteen ratings feed it. Your school reports eight, and the November paper adds five, one each for criteria 4 to 8.' },
      { q: 'Which day is the 2026 Methods paper?', a: 'TASC\'s 2026 written timetable has Mathematics Methods (MTM415117) on Tuesday 17 November.' },
      { q: 'Do I lose marks without working?', a: 'Yes, on larger items. A correct answer with no working scores at most 1.5 on a 2-mark item and at most half marks on items worth 3 or more. One-mark items need no working.' },
      { q: 'What is an inverse function?', a: 'A function that undoes another: applying a function and then its inverse returns the starting value. Its graph is the reflection of the original in the line y = x, and it exists only when the original is one-to-one on its domain.' },
      { q: 'Is Methods needed for Mathematics Specialised?', a: 'The course document describes Mathematics Methods Level 4 as a necessary prerequisite for Mathematics Specialised Level 4.' },
      { q: 'Will you help with my school assessment?', a: 'We teach the mathematics with our own questions. We never complete or review assessed tasks, because TASC requires them to be the student\'s own work.' },
      { q: 'Which lesson times suit Tasmania?', a: 'Weekday afternoons in Hobart are late morning or midday for our tutors, which works for both sides. The regular slot is set after the free class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Tasmanian students',
    lede: 'Computing that pairs with Methods, and Methods courses in other states.',
    items: [
      { href: '/tasc-computer-science-help', label: 'TASC Computer Science help', p: 'Level 3 computing with Java and machine code.' },
      { href: '/vce-maths-methods-tutoring', label: 'VCE Maths Methods tutoring', p: 'The Victorian course for comparison.' },
      { href: '/sace-mathematical-methods-tutoring', label: 'SACE Mathematical Methods tutoring', p: 'The South Australian course.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'Maths help for every year level.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Australian competitions calendar', p: 'Maths competitions for keen students.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'All of our Australian pages.' }
    ]
  },

  start: {
    h2: 'Start with a free Methods lesson',
    lede: 'Tell us which area of study is hardest and whether Section A or Section B worries you more. The free lesson works on it with questions we set.',
    readFirst: 'Before booking, browse syllabuses in the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look at other year levels on our <a class="ag-inline-link" href="/online-maths-tutoring-australia">Australian maths page</a>.',
    note: 'A WhatsApp message is answered sooner than email. You will see an Indian +91 code: the school operates from India and has no Australian address.',
    formNote: 'No card required and no obligation. One reply sets up the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/tasc-computer-science-help', label: 'TASC Computer Science' },
        { href: '/vce-maths-methods-tutoring', label: 'VCE Maths Methods' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'We teach the mathematics; assessed work stays the student\'s own'
  },

  personalityCss: `
.ag-root.ag-tamm .ag-hero-grid { gap: clamp(1.15rem, 3.1vw, 2.6rem); }
.ag-root.ag-tamm .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-tamm .ag-capsule { border-left-width: 6px; }
.ag-root.ag-tamm .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-tamm .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-tamm .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-tamm .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-tamm .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'TASC (Tasmanian Assessment, Standards and Certification). Mathematics Methods MTM415117 course page, read on 7 October 2026: current for 2026; complexity level 4, size value 15; five areas of study linked to criteria 4 to 8; CAS graphics calculators required; prerequisite for Mathematics Specialised Level 4; award from 13 ratings (8 internal, 5 external). External Assessment Specifications Version 1.2 (February 2022), linked from the 2026 course page: three hours plus 15 minutes; Section A 80 minutes and 80 marks without calculators; Section B 100 minutes and 100 marks with calculators; working rules for 1, 2 and 3-or-more mark items. 2026 Written Exam Timetable: Tuesday 17 November.',
    localProject: 'Rectangular hyperbola y = 2/(x - 1) + 3: asymptotes x = 1 and y = 3, intercepts (0, 1) and (1/3, 0), inverse y = 2/(x - 3) + 1 with asymptotes x = 3 and y = 1, checked by composition at x = 2, 5, -1, 0 and 1/3.',
    requiredMentions: ['MTM415117', 'Mathematics Methods (MTM415117) on Tuesday 17 November', 'collected 80 minutes after the start', 'at most 1.5 on a 2-mark item', 'y = 2/(x minus 1) + 3', 'y = 2/(x minus 3) + 1', '13 ratings', 'Mathematics Specialised Level 4', 'Circular (trigonometric) functions'],
    sources: [
      { claim: 'TASC, Mathematics Methods (MTM415117) course page: areas of study, criteria, assumed knowledge, CAS calculators, prerequisite statement and award rules.', url: 'https://www.tasc.tas.gov.au/students/courses/mathematics/mtm415117-9/' },
      { claim: 'TASC, MTM415117 External Assessment Specifications (Version 1.2, February 2022): exam structure, timing, calculator rules and working rules.', url: 'https://assets.tasc.tas.gov.au/uploads/2026/06/MTM415117-Mathematics-Methods-External-Assessment-Specifications.pdf' },
      { claim: 'TASC, 2026 Written Exam Timetable: Mathematics Methods (MTM415117) 3 hours on Tuesday 17 November.', url: 'https://assets.tasc.tas.gov.au/uploads/2026/08/2026-TASC-Written-Exam-Timetable.pdf' },
      { claim: 'IANA time zone database (Australia/Hobart, Asia/Kolkata): offsets of 4.5 and 5.5 hours, daylight saving from 4 October 2026 to 4 April 2027.', url: 'https://www.iana.org/time-zones' }
    ],
    rejectedClaims: [
      'Any change to the exam specifications after Version 1.2 (February 2022): only that version is linked from the 2026 course page, so no later change is claimed.',
      'The morning or afternoon session of the 2026 exam: not extracted cleanly from the timetable, so only the date is given.',
      'Award distributions or pass rates: not read from a TASC report, so not stated.',
      'Any affiliation with TASC: none, stated on the page.',
      'Any offer to complete or review assessed work: refused on the page.'
    ]
  }
};
