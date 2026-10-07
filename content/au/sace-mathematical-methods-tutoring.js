'use strict';
// SACE Stage 2 Mathematical Methods tutoring (ag- exam door, Australia cluster Phase 3, row 74).
// Facts read raw on 7 October 2026 from the SACE Board: the Mathematical Methods overview and external
// assessment pages, the Stage 2 Mathematical Methods Subject Outline (docx) and the Examinations timetable
// for 2026 (PDF): code 2MHS20, 20 credits, school assessment 70% (AT1 Skills and Applications Tasks 50%,
// AT2 Mathematical Investigation 20%), external 30% (AT3 Examination, 130 minutes, formula sheet, two
// unfolded A4 sheets of handwritten notes, approved electronic technology); six topics; from 2025 seven or
// eight assessments, the no-calculator task condition removed, investigation limit 12 A4 pages; 2026 exam
// Monday 2 November. Topic 2 suggests dice with 'alternative labelling' (1, 1, 2, 3, 4, 5).
// Spine: expected value and variance of a relabelled die, family checked free site-wide 7 October 2026.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'SACE MATHEMATICAL METHODS', label: 'SACE Mathematical Methods tutoring', blurb: 'Stage 2 Mathematical Methods from the subject outline: six topics, skills and applications tasks, a 12-page investigation, a 130-minute exam, and a relabelled die that teaches expected value.' },
  slug: 'sace-mathematical-methods-tutoring',
  code: 'samm',
  accent: '#285084',
  accentRationale: 'SACE Mathematical Methods: a slate harbour blue chosen by hand, at least 11 RGB from every site accent and 4.8:1 or better on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'SACE Mathematical Methods tutoring',
  title: 'SACE Mathematical Methods Tutoring | Stage 2 Online',
  description: 'SACE Mathematical Methods tutoring online for South Australian students: six topics, skills and applications tasks, the investigation and the 130-minute exam.',
  ogDescription: 'SACE Stage 2 Mathematical Methods explained from the SACE Board subject outline: the six topics, how the three assessment types weigh, what changed from 2025, the 2026 exam date, and a worked lesson on a relabelled die.',
  twitterDescription: 'Stage 2 Methods from the subject outline: six topics, a 12-page investigation, a 130-minute exam, and expected value from a relabelled die.',
  pageName: 'SACE Mathematical Methods Tutoring',
  webPageDescription: 'Support for South Australian students taking SACE Stage 2 Mathematical Methods: the six topics, skills and applications tasks, the mathematical investigation limit, the external examination and its permitted materials, the 2026 examination date, and a worked lesson on expected value and variance.',
  courseDescription: 'Live online maths tutoring in calculus, random variables, logarithms and statistical inference for SACE Stage 2 Mathematical Methods students, without completing any assessed task or investigation.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'SACE Mathematical Methods',
  navLinks: [
    { href: '#topics', label: 'Six topics' },
    { href: '#assessment', label: 'Assessment' },
    { href: '#die', label: 'The die lesson' },
    { href: '#investigation', label: 'Investigation' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'South Australia &middot; SACE Stage 2 &middot; Live online',
  h1: 'SACE Mathematical Methods tutoring',
  lede: 'Mathematical Methods is the Stage 2 maths subject built on two pillars, calculus and statistics, joined by modelling. Students who were comfortable at Stage 1 often meet their first real difficulty when random variables arrive, because the questions stop asking how to calculate and start asking what a number means.',
  secondaryCta: { href: '#die', label: 'See the die lesson' },
  wa: 'Hello Modern Age Coders, I would like a free maths class about SACE Stage 2 Mathematical Methods.',
  heroNote: 'Subject outline read at source &middot; Reasoning written out in full &middot; Lessons on Adelaide time',
  spec: [
    ['Subject', 'Mathematical Methods'],
    ['Stage', '2, worth 20 credits'],
    ['Code', '2MHS20'],
    ['School assessment', '70 per cent'],
    ['Examination', '30 per cent, 130 minutes'],
    ['Topics', 'Six, all studied'],
    ['2026 exam', 'Monday 2 November'],
    ['We never', 'Do assessed work']
  ],
  capsuleQ: 'In short',
  capsule: 'SACE Stage 2 Mathematical Methods (code 2MHS20, 20 credits) covers six topics: further differentiation, discrete random variables, integral calculus, logarithmic functions, continuous random variables and sampling with confidence intervals. Skills and applications tasks count 50 per cent, a mathematical investigation 20 per cent, and a 130-minute external examination 30 per cent.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses beneath Stage 2 Methods',
    lede: 'Calculus fluency, then probability, then the algebra that both depend on.',
    items: [
      { course: 'ap-calculus-exam-prep', code: 'SAMM / 01', title: 'Calculus course', note: 'Rates of change, the chain rule, integrals and the area under a curve: the content behind three of the six topics.' },
      { course: 'statistics-probability-maths-course', code: 'SAMM / 02', title: 'Statistics and probability', note: 'Random variables, the normal distribution and confidence intervals, the statistical half of the subject.' },
      { course: 'algebra-foundations-masterclass', code: 'SAMM / 03', title: 'Algebra foundations', note: 'Logarithm laws, indices and equation solving, the place most marks quietly leak.' }
    ]
  },

  sections: [
    {
      id: 'topics', tint: 'tint', eyebrow: 'Inside the subject outline',
      h2: 'Six topics in two strands, joined by modelling',
      lede: 'Everything in this section comes from the SACE Board subject outline for Stage 2 Mathematical Methods, consulted on 7 October 2026. It treats calculus and statistics as the two areas and modelling as the link.',
      body: [
        { kind: 'table', caption: 'Stage 2 Mathematical Methods topics, from the subject outline', head: ['Topic', 'Strand', 'What it builds'], rows: [
          ['1. Further differentiation and applications', 'Calculus', 'Differentiation rules, exponential and trigonometric functions, the second derivative'],
          ['2. Discrete random variables', 'Statistics', 'Probability distributions, the Bernoulli and binomial distributions, expected value and variance'],
          ['3. Integral calculus', 'Calculus', 'Antidifferentiation, definite integrals and areas'],
          ['4. Logarithmic functions', 'Calculus', 'Logarithms, their derivatives and their use in modelling'],
          ['5. Continuous random variables and the normal distribution', 'Statistics', 'Probability density functions and the normal model'],
          ['6. Sampling and confidence intervals', 'Statistics', 'How samples behave and how far an estimate can be trusted']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The outline says the suggested order of topics is a guide only, but students study all six. If Methods is studied in conjunction with Specialist Mathematics, it recommends thinking about sequencing, because Specialist assumes some Methods content as it goes.',
            'Each topic is written as key questions and key concepts beside considerations for teaching. Those considerations are a guide, but the outline notes they can provide contexts for examination questions, so they are worth reading as a student.'
          ],
          right: [
            'The outline describes Methods as a foundation for further study in mathematics, economics, computer sciences and the sciences. That is one reason it suits students who code: the statistics strand is the mathematics underneath data science, and the calculus strand underneath optimisation.',
            'Specialist Mathematics, the outline adds, is designed to be studied together with Methods. Methods can be taken on its own, but the reverse is not intended.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.sace.sa.edu.au/web/mathematical-methods/overview" rel="noopener" target="_blank">SACE Board, Mathematical Methods overview</a> (code, credits and weightings); Stage 2 Mathematical Methods Subject Outline (docx) linked from that page. Read on 7 October 2026.' }
      ]
    },
    {
      id: 'assessment', tint: 'deep', eyebrow: 'How the result is built',
      h2: 'Skills tasks, one investigation and a 130-minute exam',
      lede: 'Every weight, limit and permitted material below is copied from the outline. The 2026 date comes from the SACE Board examinations timetable for 2026.',
      body: [
        { kind: 'table', caption: 'Stage 2 Mathematical Methods assessment', head: ['Assessment type', 'Weight', 'Conditions in the outline'], rows: [
          ['AT1 Skills and Applications Tasks (school)', '50 per cent', 'Five or six tasks under the direct supervision of the teacher; electronic technology and up to one A4 sheet of handwritten notes on one side may be used at the teacher\'s discretion'],
          ['AT2 Mathematical Investigation (school)', '20 per cent', 'One investigation with minimal teacher direction; report a maximum of 12 A4 pages if written, or the equivalent in multimodal form'],
          ['AT3 Examination (external)', '30 per cent', '130 minutes; formula sheet provided; two unfolded A4 sheets (four sides) of handwritten notes; approved electronic technology']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The outline changed for 2025 onwards. Students now complete seven or eight assessments (five or six skills tasks, one investigation, one examination) instead of eight. The earlier rule that one skills task had to be done without a calculator or notes was removed, and the investigation limit fell from 15 A4 pages to 12.',
            'The 2026 examinations timetable lists Mathematical Methods (2MHS20) on Monday 2 November, as a 130-minute paper. General Mathematics sits on the same day.'
          ],
          right: [
            'Assessment design criteria come in two groups. Concepts and techniques run from CT1 to CT4, including the use of electronic technology. Reasoning and communication run from RC1 to RC5, ending with the development, testing and proof of valid conjectures, which must be offered in at least one school assessment task.',
            'Performance standards describe five levels of achievement, A to E. The outline also warns students to be discerning with technology in the examination, which in practice means knowing when a calculator answer needs interpreting.'
          ] },
        { kind: 'source', html: 'Assessment: Stage 2 Mathematical Methods Subject Outline, evidence of learning and assessment types. Date: SACE Board, Examinations timetable for 2026 (PDF) from <a class="ag-inline-link" href="https://www.sace.sa.edu.au/studying/assessment/exams/timetable" rel="noopener" target="_blank">the exam timetable page</a>. Read on 7 October 2026.' }
      ]
    },
    {
      id: 'die', tint: 'tint', eyebrow: 'A worked lesson',
      h2: 'A die labelled 1, 1, 2, 3, 4, 5',
      lede: 'The outline suggests dice with alternative labelling, such as 1, 1, 2, 3, 4, 5 on the six sides, for building relative frequency tables. It is a quietly excellent teaching object. The calculations are ours; the simulation used a fixed random seed so it can be repeated.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Expected value', p: 'Add the faces and divide by six: 16 over 6, which is 8/3, about 2.667. A standard die gives 3.5. Relabelling one face pulls the centre of the distribution down.' },
          { h3: 'Variance', p: 'The mean of the squares is 56 over 6, which is 28/3. Subtract the square of the mean, 64/9, and the variance is 20/9, about 2.222. The standard deviation is about 1.491.' },
          { h3: 'Two dice', p: 'Rolling two relabelled dice gives a total of 8 or more in only 6 of the 36 equally likely pairs, compared with 15 of 36 for standard dice.' }
        ] },
        { kind: 'table', caption: 'Simulated mean of the relabelled die as the number of rolls grows (our simulation, fixed seed)', head: ['Rolls', 'Simulated mean', 'Distance from 8/3'], rows: [
          ['10', '3.000', '0.333'],
          ['100', '3.050', '0.383'],
          ['1,000', '2.710', '0.043'],
          ['10,000', '2.639', '0.028'],
          ['100,000', '2.659', '0.008']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The table is the point of the lesson. After 100 rolls the simulated mean was further from the true value than after 10, which surprises students who expect steady improvement. The approach to 8/3 is real but noisy, and it only becomes convincing over thousands of rolls. That is the behaviour Topic 6 later formalises with confidence intervals.',
            'The variance calculation is where marks go. Students often average the squared faces and stop, or square the mean and subtract in the wrong order. Writing E(X squared) and the square of E(X) on separate lines, then subtracting, makes the mistake visible.'
          ],
          right: [
            'The two-dice count rewards listing. Of the 36 ordered pairs, the totals of 8 or more are (3, 5), (5, 3), (4, 4), (4, 5), (5, 4) and (5, 5). Counting them by hand once makes the binomial and distribution questions that follow feel concrete instead of symbolic.',
            'A few lines of Python reproduce every number here, which is how we check worked examples before teaching them. Students who write that check themselves understand a probability distribution as a list of outcomes and weights, not as a formula to memorise.'
          ] },
        { kind: 'source', html: 'Alternative labelling suggestion: Stage 2 Mathematical Methods Subject Outline, Topic 2, Subtopic 2.1. Expected value, variance, pair counts and the seeded simulation are our own calculations, checked on 7 October 2026.' }
      ]
    },
    {
      id: 'investigation', tint: '', eyebrow: 'The 20 per cent investigation',
      h2: 'How we help with the investigation: around it, never inside it',
      lede: 'The investigation is meant to be the student\'s own work with minimal teacher direction. The outline\'s description of a typical report is summarised below, together with the rule that shapes our tutoring.',
      body: [
        { kind: 'table', caption: 'What a Methods investigation report usually includes, from the outline', head: ['Part', 'What the outline describes'], rows: [
          ['Problem', 'An outline of the problem and its context'],
          ['Method', 'The method required to find a solution, in terms of the mathematical model or strategy used'],
          ['Application', 'Relevant data or information, calculations and results using appropriate representations'],
          ['Analysis', 'Interpretation of results, including their reasonableness and limitations'],
          ['Conclusion', 'Results and conclusions in the context of the problem'],
          ['Length', 'A maximum of 12 A4 pages if written, minimum font size 10, excluding bibliography and appendices']
        ] },
        { kind: 'p', text: 'We teach modelling, technology use and written reasoning with problems we invent, like the relabelled die, and we teach students to test a conjecture before claiming it. We never choose a student\'s investigation topic, never check or edit a draft, and never solve a skills and applications task. The work, and the result, belong to the student.' },
        { kind: 'source', html: 'Source: Stage 2 Mathematical Methods Subject Outline, Assessment Type 2: Mathematical Investigation, read on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready for Stage 2',
    h2: 'A staircase from Year 10 into Stage 2 Methods',
    lede: 'Where a student joins the staircase is decided by how fluent their algebra is, not by the calendar.',
    table: { caption: 'Four steps from Year 10 into Stage 2 Mathematical Methods', head: ['Stage', 'Step', 'How you know it is done'], rows: [
      ['Year 10', '1. Algebra', 'Rearranges, factorises and solves cleanly, with logarithm laws understood rather than memorised'],
      ['Stage 1', '2. Functions', 'Sketches exponential and trigonometric functions from their rules'],
      ['Early Stage 2', '3. Calculus', 'Differentiates and integrates with the chain rule and explains each step'],
      ['Later Stage 2', '4. Inference', 'States what a confidence interval does and does not say about a population']
    ] },
    left: { h3: 'If calculus is the worry', ps: [
      'Practise derivatives by hand in short, timed sets before using technology, so the technology confirms an answer instead of producing one.',
      'Most calculus marks lost in Stage 2 are algebra slips, so repairing algebra repairs the whole topic.'
    ] },
    right: { h3: 'If statistics is the worry', ps: [
      'Simulate before you calculate. A short program that rolls, samples or draws makes every distribution concrete.',
      'Students taking both maths subjects will find the next layer on <a class="ag-inline-link" href="/sace-specialist-mathematics-tutoring">SACE Specialist Mathematics</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Methods students',
    lede: 'Grouped by strand. Every card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Calculus', sub: 'Topics 1, 3 and 4', courses: [
        { code: 'SAMM / CA / 01', slug: 'ap-calculus-exam-prep', title: 'Calculus course', blurb: 'Rates, gradients and areas, argued step by step.' },
        { code: 'SAMM / CA / 02', slug: 'ap-precalculus-exam-prep-course', title: 'Precalculus', blurb: 'Exponential, logarithmic and trigonometric functions.' },
        { code: 'SAMM / CA / 03', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'First-year maths for students who want a preview.' }
      ] },
      { num: 'II', h3: 'Statistics', sub: 'Topics 2, 5 and 6', courses: [
        { code: 'SAMM / ST / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Random variables, the normal model and inference.' },
        { code: 'SAMM / ST / 02', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'A parallel course with extra sampling practice.' },
        { code: 'SAMM / ST / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Data analytics mathematics', blurb: 'Statistics applied to real data sets.' }
      ] },
      { num: 'III', h3: 'Foundations and tools', sub: 'Algebra and technology', courses: [
        { code: 'SAMM / FT / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The algebra underneath every topic.' },
        { code: 'SAMM / FT / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Senior-years maths across the board.' },
        { code: 'SAMM / FT / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Small programs that test a result before the proof.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Methods lessons on Adelaide time',
    lede: 'Lessons are live, taught by our tutors in India. Adelaide is four hours ahead of India time in winter and five hours ahead in daylight saving, which runs from 4 October 2026 to 4 April 2027 on the IANA time zone database. A 4.30 pm lesson in Adelaide in summer is 11.30 am India time.',
    slots: [
      { time: 'Weekday after school', l: 'Steady weekly work across the six topics.' },
      { time: 'Weekend morning', l: 'Longer sessions for timed exam-style sets.' },
      { time: 'School holidays', l: 'Revision blocks before November.' }
    ],
    cells: [
      { h3: 'Reasoning on paper', p: 'Every step written, because the criteria reward communication.' },
      { h3: 'Simulate, then prove', p: 'Short programs check results before the algebra explains them.' },
      { h3: 'Technology with judgement', p: 'Calculator answers interpreted, never just copied.' },
      { h3: 'Small groups', p: 'Five to ten students at one level, explaining methods aloud.' },
      { h3: 'One-to-one sessions', p: 'For one topic that needs repair before a task.' },
      { h3: 'No grade forecasts', p: 'We never predict a SACE grade or an ATAR.' }
    ]
  },

  projectsH2: 'What our students build in their own time',
  projectsLede: 'Coding projects students made outside school, never assessed work. See them in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews quoted exactly as families and students wrote them on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Methods tutoring is billed monthly in US dollars, the same rate for every family outside India, with no joining fee and no commitment past the current month.',
    free: ['A full maths lesson with a tutor', 'An honest read on what to fix first', 'No card details'],
    group: ['Five to ten students at one level', 'The same tutor each week', 'Practice marked and talked through', 'A certificate at the end'],
    one: ['A tutor for one student', 'Built around one hard topic', 'Common in the weeks before the exam']
  },

  faq: {
    eyebrow: 'Questions about Methods',
    h2: 'Stage 2 Methods questions we are asked',
    items: [
      { q: 'What is SACE Mathematical Methods?', a: 'It is a 20-credit Stage 2 subject, code 2MHS20, covering calculus and statistics across six topics, linked by mathematical modelling. School assessment counts 70 per cent and a 130-minute external examination 30 per cent.' },
      { q: 'What changed in the outline from 2025?', a: 'Students complete seven or eight assessments instead of eight, the rule that one skills task had to be done without a calculator or notes was removed, and the investigation limit dropped from 15 A4 pages to 12.' },
      { q: 'What can I take into the Methods exam?', a: 'A formula sheet is provided, and students may take two unfolded A4 sheets (four sides) of handwritten notes and approved electronic technology.' },
      { q: 'When is the 2026 Mathematical Methods exam?', a: 'The SACE Board examinations timetable for 2026 lists Mathematical Methods on Monday 2 November, as a 130-minute paper.' },
      { q: 'What is expected value?', a: 'The long-run average of a random variable, found by multiplying each outcome by its probability and adding. For a die labelled 1, 1, 2, 3, 4, 5 it is 8/3, about 2.667.' },
      { q: 'How long can the investigation be?', a: 'A maximum of 12 A4 pages if written, or the equivalent in multimodal form, excluding any bibliography and appendices, with a minimum font size of 10.' },
      { q: 'Do I need Methods to take Specialist Mathematics?', a: 'The outline says Specialist Mathematics is designed to be studied together with Mathematical Methods. Methods can be studied as a single subject.' },
      { q: 'Will you help with my investigation?', a: 'We teach modelling and reasoning with problems we invent. We never choose a topic, check a draft or solve an assessed task.' },
      { q: 'Is online tutoring effective for Methods?', a: 'For most students it is, provided the student does the writing on a shared screen and explains each step, rather than watching a tutor work.' },
      { q: 'What time are lessons for Adelaide students?', a: 'Late afternoon in Adelaide suits most students and falls in our tutors\' working day. The time is fixed after the free lesson.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for South Australian students',
    lede: 'The other SACE subjects that pair with Methods, and the wider picture.',
    items: [
      { href: '/sace-specialist-mathematics-tutoring', label: 'SACE Specialist Mathematics tutoring', p: 'Vectors, complex numbers, induction and differential equations.' },
      { href: '/sace-digital-technologies-help', label: 'SACE Digital Technologies help', p: 'The Stage 2 computing subject.' },
      { href: '/atar-explained-for-coding-students', label: 'ATAR explained for coding students', p: 'How the admissions centres describe the ATAR.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'Maths help for every Australian year level.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Australian competitions calendar', p: 'Maths competitions through the year.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our national hub for coding and AI.' }
    ]
  },

  start: {
    h2: 'Start with a free Methods lesson',
    lede: 'Tell us the topic that is hard right now and whether the examination or a skills task is closer. The free lesson works on that topic with problems we write.',
    readFirst: 'Before booking, see full syllabuses in the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, how lessons work on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or maths for other year levels on our <a class="ag-inline-link" href="/online-maths-tutoring-australia">Australian maths page</a>.',
    note: 'We answer WhatsApp before email. The +91 prefix belongs to India, where our school is based; we run no office in South Australia or any other state.',
    formNote: 'No card, no obligation. One reply to book.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/sace-specialist-mathematics-tutoring', label: 'SACE Specialist Mathematics' },
        { href: '/sace-digital-technologies-help', label: 'SACE Digital Technologies' },
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
    bottomRight: 'We teach the mathematics; every assessed task stays the student\'s own'
  },

  personalityCss: `
.ag-root.ag-samm .ag-hero-grid { gap: clamp(1.2rem, 3.2vw, 2.7rem); }
.ag-root.ag-samm .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-samm .ag-capsule { border-left-width: 4px; }
.ag-root.ag-samm .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-samm .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-samm .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-samm .ag-spec dt { letter-spacing: 0.09em; }
.ag-root.ag-samm .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'SACE Board of South Australia. Stage 2 Mathematical Methods Subject Outline (docx, linked from the overview page), the overview and external assessment pages, and the Examinations timetable for 2026, read on 7 October 2026: code 2MHS20, 20 credits; AT1 Skills and Applications Tasks 50%, AT2 Mathematical Investigation 20%, AT3 Examination 30% (130 minutes); six topics; from 2025 seven or eight assessments, no-calculator task rule removed, investigation limit 12 A4 pages; examination Monday 2 November 2026.',
    localProject: 'Relabelled die 1, 1, 2, 3, 4, 5: expected value 8/3 (about 2.667), variance 20/9 (about 2.222), standard deviation about 1.491; two dice total 8 or more in 6 of 36 pairs against 15 of 36 for standard dice; seeded simulation means 3.000, 3.050, 2.710, 2.639 and 2.659 after 10 to 100,000 rolls.',
    requiredMentions: ['2MHS20', 'Skills and Applications Tasks', 'alternative labelling', 'Mathematical Methods (2MHS20) on Monday 2 November', 'two unfolded A4 sheets', 'variance is 20/9', '15 of 36', 'Further differentiation and applications', 'maximum of 12 A4 pages'],
    sources: [
      { claim: 'SACE Board, Mathematical Methods overview: code 2MHS20, 20 credits, 70% school and 30% external assessment.', url: 'https://www.sace.sa.edu.au/web/mathematical-methods/overview' },
      { claim: 'Stage 2 Mathematical Methods Subject Outline (docx): topics, changes from 2025, assessment types, permitted materials, criteria and the alternative labelling suggestion in Topic 2.', url: 'https://www.sace.sa.edu.au/documents/652891/12131490/Stage+2+Mathematical+Methods+Subject+Outline.docx/01d8d48a-392d-b1f1-76db-422eab82bf43?version=1.0' },
      { claim: 'SACE Board, Examinations timetable for 2026 (PDF): Mathematical Methods [2MHS20] 130 minutes on Monday 2 November.', url: 'https://www.sace.sa.edu.au/documents/652891/ddb4a5dc-0c02-4287-adbd-70944a6cb66c' },
      { claim: 'IANA time zone database (Australia/Adelaide, Asia/Kolkata): offsets of 4 and 5 hours, daylight saving from 4 October 2026 to 4 April 2027.', url: 'https://www.iana.org/time-zones' }
    ],
    rejectedClaims: [
      'The session time of the 2026 Methods exam: the timetable PDF did not extract its columns clearly enough to tie the paper to a session, so only the date is stated.',
      'Question counts or marks in the Methods examination: not published in the outline, so not stated.',
      'Any claim about how Methods scales into the ATAR: not stated, and no grade or ATAR is promised.',
      'Any affiliation with the SACE Board: none, stated on the page.',
      'Any offer to choose, check or edit an investigation or skills task: refused on the page.'
    ]
  }
};
