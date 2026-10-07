'use strict';
// VCE General Mathematics tutoring (ag- exam door, Australia cluster Phase 3, row 63).
// Facts read raw on 7 October 2026 from the VCAA: the VCE General Mathematics study design page and the VCE
// Mathematics Study Design (Units 1 to 4 accredited from 1 January 2023). General Units 3 and 4: areas of study
// 'Data analysis, probability and statistics' and 'Discrete mathematics'; Unit 3 Data analysis and Recursion and
// financial modelling, Unit 4 Matrices and Networks and decision mathematics. Weights: Unit 3 coursework 24 per
// cent (application task 4 to 6 hours over 1 to 2 weeks; modelling or problem-solving task 1 on recursion and
// financial modelling, 2 to 3 hours over 1 week), Unit 4 coursework 16 per cent (tasks 2 and 3), Examination 1
// 30 per cent (multiple choice, 1.5 hours), Examination 2 30 per cent (written response, 1.5 hours), approved
// technology with financial functionality and one bound reference text. 2026 timetable: Examination 1 Friday
// 30 October 2:00 to 3:45 pm, Examination 2 Monday 2 November 2:00 to 3:45 pm. Spine: steady state of a
// first-order linear recurrence (family checked free site-wide 7 October 2026), on an invented library stock.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'VCE GENERAL MATHS', label: 'VCE General Maths tutoring', blurb: 'General Mathematics Units 3 and 4 from the study design: data analysis, recursion, matrices and networks, a multiple-choice exam and a written exam, and the long-run value hidden in every recurrence.' },
  slug: 'vce-general-maths-tutoring',
  code: 'vcgm',
  accent: '#9C394E',
  accentRationale: 'VCE General Maths: a dusky rose, friendly without being loud, at least 12 RGB from every site accent and 4.8:1 or better on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'VCE General Maths tutoring',
  title: 'VCE General Maths Tutoring | Units 3 and 4 Online',
  description: 'VCE General Maths tutoring online for Victorian students: data analysis, recursion, matrices and networks, both 1.5-hour exams and the SACs, with real reasoning.',
  ogDescription: 'VCE General Mathematics from the VCAA study design: the four topics of Units 3 and 4, how the coursework and two exams weigh, the 2026 exam dates, and the steady state every first-order recurrence heads towards.',
  twitterDescription: 'VCE General Maths from the study design: four topics, two exams, and the long-run value inside every recurrence.',
  pageName: 'VCE General Maths Tutoring',
  webPageDescription: 'Support for Victorian students taking VCE General Mathematics Units 3 and 4: the topics in each unit, coursework tasks and weights, both examinations and their conditions, the 2026 sessions, and a worked lesson on the steady state of a first-order linear recurrence.',
  courseDescription: 'Live online maths tutoring in data analysis, recurrence relations, matrices, networks and decision mathematics for Victorian VCE General Mathematics students, without completing any School-assessed Coursework.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'VCE General Maths',
  navLinks: [
    { href: '#topics', label: 'Four topics' },
    { href: '#exams', label: 'Two exams' },
    { href: '#steady', label: 'Steady state' },
    { href: '#sacs', label: 'The SACs' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Victoria &middot; VCE General Mathematics &middot; Live online',
  h1: 'VCE General Maths tutoring',
  lede: 'General Mathematics is the VCE maths study for students who want mathematics they can use: statistics on real data, recurrence models, matrices and networks. It is non-calculus, but it is not easy, and the two exams test whether students can interpret a model as well as compute with it.',
  secondaryCta: { href: '#steady', label: 'See the recurrence lesson' },
  wa: 'Hello Modern Age Coders, I would like a free maths class about VCE General Mathematics.',
  heroNote: 'Study design read at source &middot; Interpretation, not only calculation &middot; After-school lessons in Victorian time',
  spec: [
    ['Study', 'VCE General Mathematics'],
    ['Units', '3 and 4'],
    ['Accredited from', '1 January 2023'],
    ['Exam 1', '30 per cent, multiple choice'],
    ['Exam 2', '30 per cent, written response'],
    ['Each exam', '1.5 hours'],
    ['2026 exams', '30 October and 2 November'],
    ['We never', 'Complete any SAC']
  ],
  capsuleQ: 'In short',
  capsule: 'VCE General Mathematics Units 3 and 4 cover data analysis and recursion and financial modelling in Unit 3, and matrices and networks and decision mathematics in Unit 4. Coursework counts 40 per cent (24 in Unit 3, 16 in Unit 4), and two 1.5-hour examinations count 30 per cent each: Examination 1 is multiple choice and Examination 2 is written response.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses that fit General Maths',
    lede: 'Statistics first, because Data analysis carries the largest share of Unit 3, then the discrete topics.',
    items: [
      { course: 'statistics-probability-maths-course', code: 'VCGM / 01', title: 'Statistics and probability', note: 'Distributions, association, least squares lines and residuals, read for meaning rather than plugged into a calculator.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'VCGM / 02', title: 'High school mathematics', note: 'Sequences, linear relations and matrices, the algebra beneath recursion and Unit 4.' },
      { course: 'data-analytics-mathematics-masterclass', code: 'VCGM / 03', title: 'Mathematics for data analytics', note: 'Trends, time series and forecasting, the applied side of the Data analysis topic.' }
    ]
  },

  sections: [
    {
      id: 'topics', tint: 'tint', eyebrow: 'Inside the study design',
      h2: 'Four topics across two units',
      lede: 'We read the VCE Mathematics Study Design on 7 October 2026. General Units 3 and 4 consist of two areas of study, Data analysis, probability and statistics, and Discrete mathematics, split into four topics.',
      body: [
        { kind: 'table', caption: 'VCE General Mathematics Units 3 and 4: topics and examples of key knowledge', head: ['Unit', 'Topic', 'Examples from the key knowledge'], rows: [
          ['Unit 3', 'Data analysis', 'Least squares lines, residual analysis to check fit, data transformations, and time series with seasonality and smoothing by moving medians'],
          ['Unit 3', 'Recursion and financial modelling', 'First-order linear recurrence relations, depreciation, compound interest and the time value of money'],
          ['Unit 4', 'Matrices', 'Matrix operations, transition matrices, Leslie matrices and matrix recurrence relations with an equilibrium state'],
          ['Unit 4', 'Networks and decision mathematics', 'Eulerian trails and circuits, Hamiltonian paths, minimum spanning trees by Prim’s algorithm, and flow problems with the maximum-flow minimum-cut theorem']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The study design describes General Mathematics as the study of non-calculus and discrete mathematics topics, designed to be widely accessible. That makes it a good fit for students heading into business, health, trades and many university courses, and a common pairing with Mathematical Methods for students who want breadth.',
            'Data analysis is the heaviest single topic, and its key knowledge is precise: the least squares line y = a + bx is fitted with x as the explanatory variable and y as the response, the slope and intercepts are interpreted in context, and residual plots are used to judge whether a linear model is good enough.'
          ],
          right: [
            'The discrete topics reward a different habit, careful bookkeeping. A transition matrix question is mostly about setting up the matrix correctly; a network question is mostly about reading the graph accurately. Most lost marks in Unit 4 come from setup, not arithmetic.',
            'Technology is assumed in both exams, with numerical, graphical, symbolic, financial and statistical functionality. That shifts the challenge from calculating to choosing: which model, which input, and what the output means.'
          ] },
        { kind: 'source', html: 'Checked on 7 October 2026 at the <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/general-mathematics/vce-general-mathematics" rel="noopener" target="_blank">VCAA General Mathematics page</a> and in the Mathematics study design document.' }
      ]
    },
    {
      id: 'exams', tint: 'deep', eyebrow: 'How the study score is built',
      h2: 'Two 1.5-hour papers, a weekend apart',
      lede: 'Each weight, task length and exam rule below is the study design\'s; the dates are from the VCAA timetable as it stood on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'General Mathematics: what each part of the score asks for', head: ['Part', 'Counts for', 'In practice'], rows: [
          ['Unit 3 coursework', '24 per cent', 'Two tasks: an application task of four to six hours across one or two weeks, and a recursion and financial modelling task of two to three hours inside a week'],
          ['Unit 4 coursework', '16 per cent', 'The second and third modelling or problem-solving tasks'],
          ['Examination 1', '30 per cent', 'Ninety minutes of multiple-choice questions spanning every area of study'],
          ['Examination 2', '30 per cent', 'Ninety minutes of written responses, including extended applications']
        ] },
        { kind: 'two', mt: true,
          left: [
            'In 2026 General Mathematics Examination 1 is on Friday 30 October and Examination 2 on Monday 2 November, both in the 2:00 pm to 3:45 pm session the VCAA timetable prints. General students therefore finish their maths exams before Methods students start.',
            'Both papers assume approved technology with financial and statistical functionality, and both allow one bound reference text, which may be annotated. A well-organised reference, with worked examples for each topic, is worth building through the year rather than the week before.'
          ],
          right: [
            'Multiple choice is not easier than written response; it is faster. Each question is worth getting right in about a minute and a half on average, so a student must recognise the topic and the trap quickly. Practising whole sets under time is the only reliable preparation.',
            'Examination 2 asks for extended application problems, where the marks are in setting up and interpreting: stating what a slope means for the context, or what a steady state says about the long run. Answers that stop at a number lose those marks.'
          ] },
        { kind: 'source', html: 'Assessment details: VCE Mathematics Study Design (General). Exam sessions: <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable" rel="noopener" target="_blank">VCAA 2026 timetable</a>, viewed 7 October 2026.' }
      ]
    },
    {
      id: 'steady', tint: 'tint', eyebrow: 'A worked lesson',
      h2: 'Where a first-order recurrence settles',
      lede: 'The study design uses a first-order linear recurrence of the form u0 = a, un+1 = R times un + d, with a, R and d constants. Every such recurrence with R between 0 and 1 heads to a fixed value, and finding it turns a long table into one line. The example below is ours and deliberately has nothing to do with money.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The model', p: 'A school library starts the year with 5,000 books. Each year it withdraws 8 per cent of its stock and adds 300 new books. So u0 = 5,000 and un+1 = 0.92 un + 300.' },
          { h3: 'The steady state', p: 'If the stock ever stopped changing, it would satisfy S = 0.92 S + 300, so 0.08 S = 300 and S = 3,750. That is where the library is heading, whatever it starts with.' },
          { h3: 'How fast', p: 'The gap to 3,750 shrinks by 8 per cent a year, so it halves roughly every 8.3 years. Starting from 5,000, the stock is within 50 books of 3,750 after 39 years.' }
        ] },
        { kind: 'table', caption: 'The library recurrence, year by year (our calculation)', head: ['Year n', '0', '1', '2', '3', '4', '5'], rows: [
          ['Starting at 5,000', '5,000', '4,900', '4,808', '4,723.4', '4,645.5', '4,573.9'],
          ['Starting at 3,000', '3,000', '3,060', '3,115.2', '3,166.0', '3,212.7', '3,255.7']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The two rows tell the whole story. A library that starts above 3,750 shrinks towards it; one that starts below grows towards it. The steady state does not depend on the starting value at all, only on R and d, which is why the formula S = d divided by (1 minus R) is worth understanding rather than memorising.',
            'This is the kind of interpretation Examination 2 rewards. "In the long run the library will hold about 3,750 books" earns the mark that "u39 = 3,798.4" does not, because it answers the question a real person would ask.'
          ],
          right: [
            'The same idea reappears in Unit 4. A regular transition matrix settles to an equilibrium state matrix in exactly the same way, and the study design asks students to identify it informally by watching successive state matrices stop changing. Recognising one idea in two topics is efficient revision.',
            'A short program makes the idea concrete: a loop of three lines prints the table above, and changing R or d shows the steady state move instantly. That is how we teach recursion, and it suits students who think visually.'
          ] },
        { kind: 'source', html: 'Recurrence form and equilibrium key knowledge from the VCE Mathematics Study Design, General Mathematics Units 3 and 4. The library model and all values are our own, computed in Python on 7 October 2026.' }
      ]
    },
    {
      id: 'sacs', tint: '', eyebrow: 'School-assessed Coursework',
      h2: 'We teach the topics, never the SAC itself',
      lede: 'Coursework is 40 per cent of General Mathematics, and the VCAA accepts it only as the student\'s own work. The points below are quoted from the study design.',
      body: [
        { kind: 'table', caption: 'Coursework rules, in brief', head: ['Topic', 'The VCAA position'], rows: [
          ['Who did the work', 'Teachers must be able to confirm that unacknowledged work came from the student'],
          ['When and where', 'Largely in class, within a set period'],
          ['Unit 3', 'The application task plus a recursion and financial modelling task'],
          ['Unit 4', 'Two more modelling or problem-solving tasks']
        ] },
        { kind: 'p', text: 'We teach data analysis, recursion, matrices and networks with examples we write, like the library above, and show students how to use technology to check their thinking. Our tutors leave SAC work alone entirely: no completing, checking or tidying, and no practising answers for a task that has been announced. Students who can model an unfamiliar situation with us can handle the school\'s version alone.' },
        { kind: 'source', html: 'From the General Mathematics coursework and authentication sections of the study design (7 October 2026).' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs to exam readiness',
    lede: 'Students arrive at General Mathematics from many directions. The rungs describe the skill, not the year.',
    table: { caption: 'From Year 10 statistics to both exams', head: ['When', 'Rung', 'The sign it is secure'], rows: [
      ['Year 10 or Units 1 and 2', '1. Describing data', 'Reads a distribution and states its shape, centre and spread in words'],
      ['Unit 3 Data analysis', '2. Modelling association', 'Fits a least squares line and uses a residual plot to judge it'],
      ['Unit 3 Recursion', '3. Recurrences', 'Writes a recurrence from a description and finds its long-run value'],
      ['Unit 4', '4. Matrices and networks', 'Sets up a transition matrix or reads a network without errors']
    ] },
    left: { h3: 'If data analysis feels vague', ps: [
      'The usual gap is interpretation. Students can produce a slope but not say what it means. Writing one plain-English sentence after every calculation fixes this faster than more calculation.',
      'Residual plots deserve their own practice: a pattern in the residuals means the line is the wrong model, no matter how close the coefficient looks.'
    ] },
    right: { h3: 'Beyond General', ps: [
      'Students who enjoy the data topic may like our <a class="ag-inline-link" href="/vce-applied-computing-data-analytics-help">VCE Data Analytics</a> page, which applies the same statistics in software.',
      'Networks and decision mathematics lead straight into logistics, operations and computing, where shortest paths and flows are everyday tools.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for General Maths students',
    lede: 'Grouped by the topics they support. Each card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Data analysis', sub: 'Statistics with meaning', courses: [
        { code: 'VCGM / DA / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Distributions, association and regression, interpreted carefully.' },
        { code: 'VCGM / DA / 02', slug: 'ap-statistics-maths-exam-prep-course', title: 'Statistics, exam level', blurb: 'More regression and data practice from a parallel senior course.' },
        { code: 'VCGM / DA / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Real datasets, cleaned and charted in code.' }
      ] },
      { num: 'II', h3: 'Algebra and recursion', sub: 'The ground under Unit 3', courses: [
        { code: 'VCGM / AL / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Linear relations and sequences, rebuilt with confidence.' },
        { code: 'VCGM / AL / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Senior-years maths across every General topic.' },
        { code: 'VCGM / AL / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Recurrences, matrices and simulations written as small programs.' }
      ] },
      { num: 'III', h3: 'Matrices, networks and beyond', sub: 'Unit 4 and next steps', courses: [
        { code: 'VCGM / UN / 01', slug: 'data-analytics-mathematics-masterclass', title: 'Mathematics for data analytics', blurb: 'Matrices and models for students heading into data work.' },
        { code: 'VCGM / UN / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school mathematics', blurb: 'For gaps from earlier years that resurface in Units 3 and 4.' },
        { code: 'VCGM / UN / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE Mathematics', blurb: 'Extra practice in sets, matrices and graphs from another syllabus.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'General Maths lessons, after school',
    lede: 'We teach live from India. During daylight saving (4 October 2026 to 4 April 2027 in the IANA time zone database) Victoria sits five and a half hours ahead of us, and four and a half the rest of the year; a 4.30 pm class in Victoria therefore starts at 11 am in India over summer.',
    slots: [
      { time: 'Weekday after school', l: 'Weekly progress through the four topics.' },
      { time: 'Weekend morning', l: 'Timed multiple-choice sets and longer written questions.' },
      { time: 'School holidays', l: 'Exam blocks before late October.' }
    ],
    cells: [
      { h3: 'A sentence after every number', p: 'Each answer finishes with what it means in context.' },
      { h3: 'Reference built through the year', p: 'Students assemble their bound reference as they learn, not the night before.' },
      { h3: 'Timed sets', p: 'Multiple-choice practice at real exam pace.' },
      { h3: 'Five to ten per group', p: 'Matched by level, and everyone explains a model aloud.' },
      { h3: 'Private lessons', p: 'When one topic needs focused attention.' },
      { h3: 'Results belong to you', p: 'We make no claims about study scores or ATARs; the work and the result are yours.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Self-chosen builds rather than assessed work; dozens more sit in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Exactly as students and parents wrote them on Google.',

  fees: {
    h2: 'Fees',
    lede: 'General Maths lessons have one monthly price, set in US dollars and equal for every family outside India; there is no joining charge and you are free to stop each month.',
    free: ['A full lesson with a tutor', 'An honest read on weak topics', 'No card asked for'],
    group: ['Five to ten students at one level', 'A steady tutor each week', 'Practice checked and discussed', 'A certificate at the end'],
    one: ['A tutor for one student', 'Centred on one topic', 'Common before the October exams']
  },

  faq: {
    eyebrow: 'Questions about General Maths',
    h2: 'General Maths questions from students and parents',
    items: [
      { q: 'What is VCE General Mathematics?', a: 'It is a VCE mathematics study of non-calculus and discrete mathematics. Units 3 and 4 cover data analysis, recursion and financial modelling, matrices, and networks and decision mathematics.' },
      { q: 'How is the study score made up?', a: 'School-assessed Coursework contributes 40 per cent (24 per cent in Unit 3 and 16 per cent in Unit 4), and Examination 1 and Examination 2 contribute 30 per cent each.' },
      { q: 'When are the 2026 General Maths exams?', a: 'The VCAA timetable lists Examination 1 on Friday 30 October 2026 and Examination 2 on Monday 2 November, both in the 2:00 pm to 3:45 pm session. Each examination is 1.5 hours.' },
      { q: 'What is the difference between the two exams?', a: 'Examination 1 is multiple choice across all areas of study; Examination 2 is written response with extended application problems. Both assume approved technology and allow one bound reference text.' },
      { q: 'What is a first-order linear recurrence?', a: 'A rule that gives each term from the one before: u0 = a and un+1 = R times un + d, where a, R and d are constants. When R is between 0 and 1 the terms settle towards d divided by (1 minus R).' },
      { q: 'Is General Maths easier than Methods?', a: 'It is different rather than easier. General has no calculus and focuses on applied and discrete mathematics, with heavy emphasis on interpretation. Many students take both.' },
      { q: 'What are the General Maths SACs?', a: 'Unit 3 has an application task of 4 to 6 hours over 1 to 2 weeks and a modelling or problem-solving task on recursion and financial modelling. Unit 4 has two more modelling or problem-solving tasks.' },
      { q: 'Will you help with my SAC?', a: 'No. We teach each topic with examples we make up and keep well away from SAC work, which the VCAA only credits as the student\'s own.' },
      { q: 'Does the bound reference text matter?', a: 'Yes. Both exams allow one bound reference, which may be annotated. A reference built carefully through the year, with a worked example for every topic, saves real time in the exams.' },
      { q: 'When do lessons run?', a: 'Late afternoon in Victoria suits most students and falls during our tutors\' working day. We agree the weekly time after the free lesson.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Other pages for Victorian learners',
    lede: 'The other VCE maths studies, the data study that uses the same statistics, and the wider picture.',
    items: [
      { href: '/vce-maths-methods-tutoring', label: 'VCE Maths Methods tutoring', p: 'Functions and calculus, often taken alongside General.' },
      { href: '/vce-applied-computing-data-analytics-help', label: 'VCE Data Analytics help', p: 'Statistics and visualisation in the Applied Computing study.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'Maths help well beyond the VCE.' },
      { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Coding and AI classes in Melbourne', p: 'Coding for General Maths students who like data.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Australian competitions calendar', p: 'Maths contests through the school year.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'A starting point for coding at any age.' }
    ]
  },

  start: {
    h2: 'Start with a free General Maths lesson',
    lede: 'Tell us the topic that worries you most, whether data analysis, recursion, matrices or networks. The free lesson works on it with our own examples.',
    readFirst: 'Want detail first? Open any syllabus in the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or see our <a class="ag-inline-link" href="/online-maths-tutoring-australia">Australian maths tutoring page</a> for younger years.',
    note: 'For the fastest response, use WhatsApp. Our +91 number reflects where we teach from, India; nothing on this page claims a Victorian address.',
    formNote: 'No card and no obligation. One reply to book the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' },
        { href: '/vce-maths-methods-tutoring', label: 'VCE Maths Methods' },
        { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne and Victoria' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/vce-applied-computing-data-analytics-help', label: 'VCE Data Analytics' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'We teach the models; the SACs stay the student\'s own'
  },

  personalityCss: `
.ag-root.ag-vcgm .ag-hero-grid { gap: clamp(1.1rem, 2.9vw, 2.5rem); }
.ag-root.ag-vcgm .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-vcgm .ag-capsule { border-left-width: 4px; }
.ag-root.ag-vcgm .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-vcgm .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-vcgm .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-vcgm .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-vcgm .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'Victorian Curriculum and Assessment Authority (VCAA). VCE Mathematics Study Design, read on 7 October 2026: Units 1 to 4 accredited from 1 January 2023; General Mathematics Units 3 and 4 areas of study Data analysis, probability and statistics, and Discrete mathematics; Unit 3 Data analysis and Recursion and financial modelling, Unit 4 Matrices and Networks and decision mathematics. Unit 3 coursework 24 per cent, Unit 4 16 per cent; Examination 1 30 per cent (multiple choice, 1.5 hours), Examination 2 30 per cent (written response, 1.5 hours). 2026 timetable: Friday 30 October and Monday 2 November, 2:00 to 3:45 pm.',
    localProject: 'Steady state of a first-order linear recurrence, invented non-financial model: a school library with u0 = 5,000 and un+1 = 0.92 un + 300 settles at 3,750 books; terms 5,000, 4,900, 4,808, 4,723.4, 4,645.5, 4,573.9; within 50 books of 3,750 after 39 years; the gap halves about every 8.3 years; starting at 3,000 the stock rises towards the same 3,750. Computed in Python on 7 October 2026.',
    requiredMentions: ['General Mathematics Examination 1', 'Friday 30 October', 'Monday 2 November', 'first-order linear recurrence', 'Leslie matrices', 'maximum-flow minimum-cut theorem', 'moving medians', 'non-calculus and discrete mathematics', '3,750 books'],
    sources: [
      { claim: 'VCAA, VCE General Mathematics study design page: accreditation from 2023 and the Mathematics study design file.', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/general-mathematics/vce-general-mathematics' },
      { claim: 'VCE Mathematics Study Design: General Mathematics Units 3 and 4 topics, key knowledge, coursework tasks and weights, and both examinations.', url: 'https://www.vcaa.vic.edu.au/sites/default/files/2025-10/2023MathematicsSD.docx' },
      { claim: 'VCAA, 2026 VCE examination timetable: General Mathematics Examination 1 on Friday 30 October, Examination 2 on Monday 2 November.', url: 'https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable' },
      { claim: 'IANA time zone database (Australia/Melbourne and Asia/Kolkata): daylight saving from 4 October 2026 to 4 April 2027.', url: 'https://www.iana.org/time-zones' }
    ],
    rejectedClaims: [
      'Any financial worked example: the recursion lesson uses a library stock on purpose, so no interest, loan or investment figures appear.',
      'Question counts or marks per examination: the examination specifications were not read.',
      'Any claim about General Mathematics scaling or ATAR effect: not quoted, and nothing is promised.',
      'Any affiliation with the VCAA: none, stated on the page.',
      'Any offer to complete, check or edit a SAC: refused, stated on the page.'
    ]
  }
};
