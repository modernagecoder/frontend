'use strict';
// VCE Mathematical Methods tutoring (ag- exam door, Australia cluster Phase 3, row 61).
// Facts read raw on 7 October 2026 from the VCAA: the VCE Mathematical Methods study design page and the
// VCE Mathematics Study Design (2023MathematicsSD.docx): Units 1 to 4 accredited from 1 January 2023;
// Units 3 and 4 areas of study 'Algebra, number and structure', 'Data analysis, probability and statistics',
// 'Calculus' and 'Functions, relations and graphs'; Unit 3 coursework 20 per cent (application task, 4 to 6
// hours over 1 to 2 weeks), Unit 4 coursework 20 per cent (two modelling or problem-solving tasks, each 2 to 3
// hours over 1 week, one on data analysis, probability and statistics); Examination 1 20 per cent, 1 hour, no
// technology or notes, formula sheet provided; Examination 2 40 per cent, 2 hours, approved technology and one
// bound reference text. 2026 timetable: Examination 1 Thursday 5 November 9:00 to 10:15 am, Examination 2
// Friday 6 November 11:45 am to 2:00 pm. Spine: the order of transformations (dilation before or after
// translation), family checked free site-wide 7 October 2026.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'VCE MATHS METHODS', label: 'VCE Maths Methods tutoring', blurb: 'Mathematical Methods Units 3 and 4 from the study design: four areas of study, a technology-free exam, a technology-active exam, three coursework tasks, and the transformation slip that costs marks.' },
  slug: 'vce-maths-methods-tutoring',
  code: 'vcmm',
  accent: '#4C349C',
  accentRationale: 'VCE Maths Methods: a deep indigo blue chosen by hand, at least 13 RGB from every site accent and 4.8:1 or better on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'VCE Maths Methods tutoring',
  title: 'VCE Maths Methods Tutoring | Units 3 and 4 Online',
  description: 'VCE Maths Methods tutoring online for Victorian students: the four areas of study, Exam 1 without technology, Exam 2 with it, the SACs, and transformation technique.',
  ogDescription: 'VCE Mathematical Methods explained from the VCAA study design: what Units 3 and 4 cover, how the two exams and three coursework tasks weigh, the 2026 exam dates, and why the order of transformations matters.',
  twitterDescription: 'VCE Maths Methods from the study design: two exams, three SACs, and the transformation order that trips students up.',
  pageName: 'VCE Maths Methods Tutoring',
  webPageDescription: 'Support for Victorian students taking VCE Mathematical Methods Units 3 and 4: areas of study, School-assessed Coursework tasks and durations, both examinations and their conditions, the 2026 examination sessions, and a worked lesson on the order of graph transformations.',
  courseDescription: 'Live online maths tutoring in functions, transformations, calculus, probability and statistics for Victorian VCE Mathematical Methods students, without completing any School-assessed Coursework.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'VCE Maths Methods',
  navLinks: [
    { href: '#areas', label: 'Areas of study' },
    { href: '#exams', label: 'Two exams' },
    { href: '#order', label: 'Transformations' },
    { href: '#sacs', label: 'The SACs' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Victoria &middot; VCE Mathematical Methods &middot; Live online',
  h1: 'VCE Maths Methods tutoring',
  lede: 'Mathematical Methods is the VCE maths study most students mean when they say "Methods": functions, calculus and probability, examined twice, once without a calculator and once with one. The jump from Units 1 and 2 is real, and it usually shows up first as small algebra slips that compound under time pressure.',
  secondaryCta: { href: '#order', label: 'See the transformation lesson' },
  wa: 'Hello Modern Age Coders, I would like a free maths class about VCE Mathematical Methods.',
  heroNote: 'Study design read at source &middot; By hand first, technology second &middot; After-school lessons in Victorian time',
  spec: [
    ['Study', 'VCE Mathematical Methods'],
    ['Units', '3 and 4'],
    ['Accredited from', '1 January 2023'],
    ['Exam 1', '20 per cent, 1 hour, no technology'],
    ['Exam 2', '40 per cent, 2 hours, technology'],
    ['Coursework', '40 per cent, three tasks'],
    ['2026 exams', '5 and 6 November'],
    ['We never', 'Complete any SAC']
  ],
  capsuleQ: 'In short',
  capsule: 'VCE Mathematical Methods Units 3 and 4 cover four areas of study: functions, relations and graphs; algebra, number and structure; calculus; and data analysis, probability and statistics. School-assessed Coursework counts 40 per cent across three tasks, Examination 1 (1 hour, no technology) counts 20 per cent, and Examination 2 (2 hours, with approved technology) counts 40 per cent.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses beneath Methods',
    lede: 'Fluent algebra and functions first, then calculus and probability at exam pace.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'VCMM / 01', title: 'High school mathematics', note: 'Algebra, functions and graphs worked by hand until they are automatic, which is what Examination 1 demands.' },
      { course: 'ap-calculus-exam-prep', code: 'VCMM / 02', title: 'Calculus foundations', note: 'Derivatives, the chain rule, antiderivatives and areas under curves, the calculus content Methods builds on.' },
      { course: 'statistics-probability-maths-course', code: 'VCMM / 03', title: 'Statistics and probability', note: 'Binomial and normal distributions and sample proportions, the area one Unit 4 task must address.' }
    ]
  },

  sections: [
    {
      id: 'areas', tint: 'tint', eyebrow: 'Inside the study design',
      h2: 'Four areas of study, three outcomes',
      lede: 'Drawn from the VCE Mathematics Study Design, which covers Foundation, General, Mathematical Methods and Specialist Mathematics, read on 7 October 2026. Units 1 to 4 are accredited from 1 January 2023.',
      body: [
        { kind: 'table', caption: 'Mathematical Methods Units 3 and 4: areas of study and typical placement', head: ['Area of study', 'What it covers', 'Typical unit'], rows: [
          ['Functions, relations and graphs', 'Power, exponential, logarithmic and circular functions, their key features, and the effect of transformations', 'Unit 3, finished in Unit 4'],
          ['Algebra, number and structure', 'Composition and inverse functions, and solving equations of these function types', 'Unit 3, finished in Unit 4'],
          ['Calculus', 'Derivatives and their applications, antidifferentiation, and the definite integral', 'Begun in Unit 3, extended in Unit 4'],
          ['Data analysis, probability and statistics', 'Discrete and continuous random variables, the binomial and normal distributions, and sample proportions', 'Unit 4']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The study design describes Unit 3 as typically covering functions, algebra and the early calculus of stationary points and graph features, with Unit 4 completing the calculus and adding random variables, probability distributions and the distribution of sample proportions. Schools order content themselves, so a student\'s timetable may differ.',
            'Three outcomes run through both units. The first is concepts and routines; the second is applying mathematics in non-routine contexts; the third is to "apply computational thinking" and use the numerical, graphical, symbolic and statistical functions of technology to develop ideas and carry out analysis.'
          ],
          right: [
            'That third outcome is why a coding school teaches maths well. A student who has written a small program to sample a binomial distribution, or to check a derivative numerically, understands what the CAS calculator is doing instead of pressing buttons in hope.',
            'Methods is also the assumed knowledge for Specialist Mathematics Units 3 and 4, which the study design says requires concurrent study or previous completion of Methods Units 3 and 4. Students taking both need Methods secure early.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/mathematical-methods/vce-mathematical-methods" rel="noopener" target="_blank">VCAA, VCE Mathematical Methods study design page</a>; VCE Mathematics Study Design, Mathematical Methods Units 3 and 4, read on 7 October 2026.' }
      ]
    },
    {
      id: 'exams', tint: 'deep', eyebrow: 'How the study score is built',
      h2: 'One exam without technology, one exam with it',
      lede: 'Every weight and condition below is copied from the study design. The VCAA timetable supplied the 2026 sessions when we looked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Where a Methods study score comes from', head: ['Piece of assessment', 'Share', 'Format'], rows: [
          ['Unit 3 coursework (SAC)', 'One fifth', 'An application task: four to six hours, spread over one or two weeks'],
          ['Unit 4 coursework (SACs)', 'One fifth', 'Two modelling or problem-solving tasks of two to three hours across a week each; one has to be on data analysis, probability and statistics'],
          ['Examination 1', 'One fifth', 'Sixty minutes with no calculators, software or notes; a sheet of formulas is provided'],
          ['Examination 2', 'Two fifths', 'Two hours of multiple-choice and extended-answer questions, with approved technology and a bound reference']
        ] },
        { kind: 'two', mt: true,
          left: [
            'In 2026 Mathematical Methods Examination 1 sits on Thursday 5 November in the 9:00 am to 10:15 am session, and Examination 2 on Friday 6 November from 11:45 am to 2:00 pm, as the VCAA timetable prints them. Two papers on consecutive days leave very little room for catch-up revision between them.',
            'Examination 1 rewards a particular kind of fluency: exact values, clean algebra and short calculus done by hand. It is only an hour, so a student who has to reconstruct a method under pressure runs out of time, not knowledge.'
          ],
          right: [
            'Examination 2 assumes access to technology with numerical, graphical, symbolic and statistical functionality, and allows one bound reference. Students who rely on the calculator without understanding often lose marks on interpretation: the device solves the equation, but the student has to say which solution fits the context.',
            'The coursework tasks are completed mainly in class within a limited timeframe, as the study design requires. Good preparation is the underlying skill, not rehearsing a particular task, because tasks change from school to school.'
          ] },
        { kind: 'source', html: 'Weights and exam rules: VCE Mathematics Study Design (Methods). Dates: <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable" rel="noopener" target="_blank">VCAA 2026 VCE examination timetable</a>, viewed 7 October 2026.' }
      ]
    },
    {
      id: 'order', tint: 'tint', eyebrow: 'A worked lesson',
      h2: 'Dilate then translate, or translate then dilate?',
      lede: 'The study design lists the effect of transformations on graphs and the general transformation of a function. Students who know each transformation individually still lose marks when two are combined, because the order changes the answer. Both examples below are ours.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The setup', p: 'Start with y = x squared, vertex at the origin. Apply two transformations: a dilation by factor 3 from the y-axis, and a translation 2 units right.' },
          { h3: 'Dilation first', p: 'Stretching first moves the vertex nowhere, then the translation carries it to x = 2. The rule is y = ((x - 2)/3) squared. The point (1, 1) lands on (5, 1).' },
          { h3: 'Translation first', p: 'Moving first puts the vertex at x = 2, then the stretch from the y-axis multiplies that x-value by 3. The vertex ends at x = 6, with rule y = ((x - 6)/3) squared. The point (1, 1) lands on (9, 1).' }
        ] },
        { kind: 'table', caption: 'Two orders, two different graphs (our worked examples)', head: ['Original', 'Transformations', 'Order', 'Image rule', 'Key feature'], rows: [
          ['y = x squared', 'Dilation factor 3 from the y-axis; translation 2 right', 'Dilate, then translate', 'y = ((x - 2)/3) squared', 'Vertex at (2, 0)'],
          ['y = x squared', 'The same two', 'Translate, then dilate', 'y = ((x - 6)/3) squared', 'Vertex at (6, 0)'],
          ['y = 2 to the power x', 'Dilation factor 2 from the x-axis; translation 3 up', 'Dilate, then translate', 'y = 2 times 2 to the power x, plus 3', 'Asymptote y = 3'],
          ['y = 2 to the power x', 'The same two', 'Translate, then dilate', 'y = 2 times 2 to the power x, plus 6', 'Asymptote y = 6']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The rule that saves marks is to follow a single point through each transformation in the stated order. Track (1, 1) for the parabola, or the asymptote for the exponential, and the image rule writes itself. Students who instead edit the equation in their head usually apply the steps in the order they appear in the rule, which is often the reverse of the order stated in the question.',
            'This is exactly the kind of slip Examination 1 punishes, because there is no technology to sketch the graph and reveal the mistake. Practising with point tracking makes the check routine.'
          ],
          right: [
            'It is also where a little code helps. Plotting both images in a few lines of Python shows the two vertices sitting 4 units apart, and testing a dozen points confirms which rule matches which order. That is the "computational thinking" outcome in action, and it builds a habit students then carry into Examination 2.',
            'The same reasoning extends to the inverse transformation the study design also lists: undoing a sequence means undoing the steps in reverse order, the way you take off shoes before socks.'
          ] },
        { kind: 'source', html: 'Transformation key knowledge from the VCE Mathematics Study Design, Mathematical Methods Units 3 and 4. Examples, images and point checks are our own, verified on 7 October 2026.' }
      ]
    },
    {
      id: 'sacs', tint: '', eyebrow: 'School-assessed Coursework',
      h2: 'How we help with SACs: around them, never inside',
      lede: 'Coursework is 40 per cent of Methods, and the VCAA accepts it only as the student\'s own work. The rules below are quoted from the study design.',
      body: [
        { kind: 'table', caption: 'VCAA rules on coursework that shape our tutoring', head: ['Point', 'What the study design says'], rows: [
          ['Authentication', 'Work is accepted only if the teacher can attest that, to the best of their knowledge, all unacknowledged work is the student’s own'],
          ['Where SACs happen', 'Tasks must be completed mainly in class and within a limited timeframe'],
          ['Unit 3 task', 'An application task of 4 to 6 hours over 1 to 2 weeks'],
          ['Unit 4 tasks', 'Two modelling or problem-solving tasks, each of 2 to 3 hours over 1 week']
        ] },
        { kind: 'p', text: 'We teach the mathematics and the modelling process with problems we write, like the transformation examples above, and we teach students to use technology to check and explore. We do not complete, check or edit any part of a SAC, and we do not coach answers to a known task. A student who can model an unfamiliar situation with us can model the school\'s one alone.' },
        { kind: 'source', html: 'Source: VCE Mathematics Study Design, authentication and Mathematical Methods School-assessed Coursework, read on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready for Units 3 and 4',
    h2: 'Four rungs from Year 10 to the November exams',
    lede: 'Where a student starts depends on algebra fluency more than on year level.',
    table: { caption: 'From Year 10 algebra to exam-ready Methods', head: ['When', 'Rung', 'The sign it is secure'], rows: [
      ['Year 10', '1. Algebra', 'Expands, factorises and solves without a calculator and without slips'],
      ['Units 1 and 2', '2. Functions', 'Sketches power, exponential and circular graphs from their rules'],
      ['Unit 3', '3. Calculus', 'Differentiates compositions with the chain rule and interprets the result'],
      ['Unit 4', '4. Probability', 'Chooses binomial or normal models and explains what an answer means in context']
    ] },
    left: { h3: 'If Examination 1 is the worry', ps: [
      'Timed, by-hand practice in short sets is the cure: ten minutes, five questions, exact answers, every week. Speed comes from fluency, not from rushing.',
      'Most lost marks in technology-free work are algebra, not calculus. Repairing algebra repairs the whole paper.'
    ] },
    right: { h3: 'Beyond Methods', ps: [
      'Students taking both maths studies will find the next layer on our <a class="ag-inline-link" href="/vce-specialist-maths-tutoring">VCE Specialist Maths</a> page.',
      'Methods\' calculus and probability are the mathematics under data science and machine learning, which our AI courses build on.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Methods students',
    lede: 'Grouped by the area of study they support. Every card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Functions and algebra', sub: 'The ground under everything', courses: [
        { code: 'VCMM / FN / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Rebuilding the algebra that technology-free papers expose.' },
        { code: 'VCMM / FN / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Functions, graphs and equations across the senior years.' },
        { code: 'VCMM / FN / 03', slug: 'ap-precalculus-exam-prep-course', title: 'Precalculus', blurb: 'Exponential, logarithmic and circular functions in depth.' }
      ] },
      { num: 'II', h3: 'Calculus', sub: 'Rates and areas', courses: [
        { code: 'VCMM / CA / 01', slug: 'ap-calculus-exam-prep', title: 'Calculus foundations', blurb: 'Differentiation and integration with clear reasoning.' },
        { code: 'VCMM / CA / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'A parallel senior course for students who want extra problem variety.' },
        { code: 'VCMM / CA / 03', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'For students looking past Unit 4 to first-year maths.' }
      ] },
      { num: 'III', h3: 'Probability and technology', sub: 'Unit 4 and Outcome 3', courses: [
        { code: 'VCMM / PR / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Random variables, distributions and sample proportions.' },
        { code: 'VCMM / PR / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Checking and exploring maths in code, the computational thinking outcome made real.' },
        { code: 'VCMM / PR / 03', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level Mathematics', blurb: 'Extra calculus and statistics practice from a parallel syllabus.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Methods lessons on Victorian time',
    lede: 'Lessons come to you live from India. Melbourne clocks read four and a half hours later than India through winter, and five and a half later once daylight saving starts on 4 October 2026, lasting until 4 April 2027 on the IANA time zone database. So a 5 pm Melbourne lesson is 11.30 am for your tutor in summer.',
    slots: [
      { time: 'Weekday after school', l: 'Steady weekly work through Units 3 and 4.' },
      { time: 'Weekend morning', l: 'Longer sessions for timed Examination 1 sets.' },
      { time: 'School holidays', l: 'Exam blocks before November.' }
    ],
    cells: [
      { h3: 'By hand first', p: 'Every method practised without technology before the calculator comes out.' },
      { h3: 'Point tracking', p: 'Transformations checked one point at a time, every time.' },
      { h3: 'Exam-length sets', p: 'Short timed practice that mirrors a one-hour paper.' },
      { h3: 'Small groups', p: 'Five to ten students at one level, each explaining a method aloud.' },
      { h3: 'One-to-one sessions', p: 'For a single topic that needs repair before the exams.' },
      { h3: 'Honest about outcomes', p: 'We never forecast a study score or an ATAR; the effort and the result are the student\'s.' }
    ]
  },

  projectsH2: 'What our students build outside school',
  projectsLede: 'Coding projects students made in their own time, never school work. The full collection is in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Quoted exactly as families and students posted them on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Methods tutoring is billed monthly in US dollars at one rate for all families outside India, with no sign-up fee and nothing owed beyond the current month.',
    free: ['A full maths lesson with a tutor', 'A straight answer on what to fix', 'No card details'],
    group: ['Five to ten students at one level', 'The same tutor each week', 'Practice marked and discussed', 'A certificate on completion'],
    one: ['A tutor for one student', 'Built around one weak topic', 'Popular in the final weeks before November']
  },

  faq: {
    eyebrow: 'Questions about Methods',
    h2: 'Methods questions we hear most',
    items: [
      { q: 'What is VCE Mathematical Methods?', a: 'It is a VCE mathematics study covering functions, algebra, calculus, and probability and statistics. Units 1 to 4 are accredited from 1 January 2023, and Units 3 and 4 are assessed by coursework and two end-of-year examinations.' },
      { q: 'How is the Methods study score made up?', a: 'School-assessed Coursework contributes 40 per cent (20 per cent in each unit), Examination 1 contributes 20 per cent and Examination 2 contributes 40 per cent.' },
      { q: 'Can I use a calculator in Examination 1?', a: 'No. The study design says no technology (calculators or software) or notes of any kind are permitted. A sheet of formulas is provided. Examination 2 allows approved technology and one bound reference text.' },
      { q: 'When are the 2026 Methods exams?', a: 'The VCAA timetable lists Examination 1 on Thursday 5 November 2026 (9:00 am to 10:15 am session) and Examination 2 on Friday 6 November (11:45 am to 2:00 pm session).' },
      { q: 'What are the Methods SACs?', a: 'Unit 3 has an application task of 4 to 6 hours over 1 to 2 weeks. Unit 4 has two modelling or problem-solving tasks of 2 to 3 hours over a week each, one of them on data analysis, probability and statistics.' },
      { q: 'What is a dilation from the y-axis?', a: 'A stretch parallel to the x-axis, away from the y-axis, by a given factor. A dilation by factor 3 from the y-axis turns the point (1, 1) into (3, 1) and replaces x with x divided by 3 in the rule.' },
      { q: 'Do I need Methods for Specialist Mathematics?', a: 'The study design says Specialist Mathematics Units 3 and 4 assumes concurrent study or previous completion of Mathematical Methods Units 3 and 4.' },
      { q: 'Will you help with my SAC?', a: 'We teach the mathematics with our own problems. We never complete, check or edit any part of a SAC, because the VCAA accepts coursework only as the student\'s own work.' },
      { q: 'Is online maths tutoring effective for Methods?', a: 'For most students, yes. Working on a shared screen, writing every step and getting immediate correction is close to sitting beside a tutor, provided the student does the writing rather than watching.' },
      { q: 'What time do lessons run for Victorian students?', a: 'Late afternoon in Victoria works for most, and it falls during our tutors\' working day. The weekly time is agreed after the free class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Victorian maths and computing students',
    lede: 'The other VCE maths studies, the computing studies Methods students often pair with, and the wider picture.',
    items: [
      { href: '/vce-algorithmics-hess-help', label: 'VCE Algorithmics (HESS) help', p: 'Recurrences and logarithms in a computing study.' },
      { href: '/vce-applied-computing-data-analytics-help', label: 'VCE Data Analytics help', p: 'Statistics and data in the Applied Computing study.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'Tutoring for every Australian year level, not only VCE.' },
      { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Coding and AI classes in Melbourne', p: 'Where Methods students in Victoria can add coding and AI.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Australian competitions calendar', p: 'Maths competitions through the school year.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our national hub for coding, from first blocks to AI.' }
    ]
  },

  start: {
    h2: 'Start with a free Methods lesson',
    lede: 'Tell us the unit, the topic that is hurting, and whether Examination 1 or Examination 2 worries you more. The free lesson works on that topic with our own problems.',
    readFirst: 'Before booking, browse full syllabuses in the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, see the lesson method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look at maths for other year levels on the <a class="ag-inline-link" href="/online-maths-tutoring-australia">Australian maths tutoring page</a>.',
    note: 'Messages on WhatsApp are answered first. Our number starts +91 because the school is in India; we have no office in Victoria or anywhere in Australia.',
    formNote: 'No card and no obligation. One reply to book the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' },
        { href: '/vce-algorithmics-hess-help', label: 'VCE Algorithmics' },
        { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne and Victoria' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'We teach the mathematics; the SACs stay the student\'s own'
  },

  personalityCss: `
.ag-root.ag-vcmm .ag-hero-grid { gap: clamp(1.1rem, 3vw, 2.6rem); }
.ag-root.ag-vcmm .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-vcmm .ag-capsule { border-left-width: 6px; }
.ag-root.ag-vcmm .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-vcmm .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-vcmm .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-vcmm .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-vcmm .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Victorian Curriculum and Assessment Authority (VCAA). VCE Mathematics Study Design, read on 7 October 2026: Units 1 to 4 accredited from 1 January 2023; Mathematical Methods Units 3 and 4 areas of study Functions, relations and graphs; Algebra, number and structure; Calculus; Data analysis, probability and statistics. Unit 3 coursework 20 per cent (application task, 4 to 6 hours over 1 to 2 weeks); Unit 4 coursework 20 per cent (two modelling or problem-solving tasks, 2 to 3 hours over 1 week each); Examination 1 20 per cent, 1 hour, technology-free, formula sheet; Examination 2 40 per cent, 2 hours, approved technology. 2026 timetable: Examination 1 Thursday 5 November 9:00 to 10:15 am; Examination 2 Friday 6 November 11:45 am to 2:00 pm.',
    localProject: 'Order of transformations: y = x squared under a dilation by factor 3 from the y-axis and a translation 2 right gives vertex (2, 0), rule ((x - 2)/3) squared, when dilating first, and vertex (6, 0), rule ((x - 6)/3) squared, when translating first; (1, 1) maps to (5, 1) and (9, 1). y = 2 to the power x under a dilation by factor 2 from the x-axis and a translation 3 up gives asymptote y = 3 dilating first and y = 6 translating first. Our examples, checked on 7 October 2026.',
    requiredMentions: ['Mathematical Methods Examination 1', 'Thursday 5 November', 'Friday 6 November', 'dilation by factor 3 from the y-axis', 'application task of 4 to 6 hours', 'modelling or problem-solving tasks', 'a sheet of formulas is provided', 'apply computational thinking', 'Functions, relations and graphs'],
    sources: [
      { claim: 'VCAA, VCE Mathematical Methods study design page: accreditation period from 2023 and the Mathematics study design file.', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/mathematical-methods/vce-mathematical-methods' },
      { claim: 'VCE Mathematics Study Design: Mathematical Methods Units 3 and 4 areas of study, outcomes, coursework tasks and durations, both examinations and their conditions.', url: 'https://www.vcaa.vic.edu.au/sites/default/files/2025-10/2023MathematicsSD.docx' },
      { claim: 'VCAA, 2026 VCE examination timetable: Mathematical Methods Examination 1 on Thursday 5 November, Examination 2 on Friday 6 November.', url: 'https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable' },
      { claim: 'IANA time zone database (Australia/Melbourne and Asia/Kolkata): daylight saving from 4 October 2026 to 4 April 2027.', url: 'https://www.iana.org/time-zones' }
    ],
    rejectedClaims: [
      'The exact formula of the general transformation as printed in the study design: the equation did not survive text extraction, so it is described in words, not quoted.',
      'Number of questions or marks in each Methods examination: the examination specifications were not read.',
      'Any claim that Methods scales up or down for the ATAR: not quoted, and no score or ATAR is promised.',
      'Any affiliation with the VCAA: none, stated on the page.',
      'Any offer to complete, check or edit a SAC: refused, stated on the page.'
    ]
  }
};
