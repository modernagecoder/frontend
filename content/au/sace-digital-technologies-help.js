'use strict';
// SACE Stage 2 Digital Technologies help (ag- exam door, Australia cluster Phase 3, row 73).
// Facts read raw on 7 October 2026 from the SACE Board: the Digital Technologies overview, school assessment,
// external assessment and subject renewal pages, and the Stage 2 Digital Technologies Subject Outline (docx,
// version 1.2): 20 credits, code 2DGT20; school assessment 70% (AT1 Project Skills 50%, AT2 Collaborative
// Project 20%), external assessment 30% (AT3 Individual Digital Solution); four focus areas; three or four
// project skills tasks to a maximum of 20 minutes in multimodal form; AT2 Project Solution Walkthrough up to
// 5 minutes and Technical Walkthrough up to 3 minutes, recordings not over 1GB; AT3 solution up to 1 GB and
// 15 minutes, designer's statement up to 3 minutes oral or 500 words written; criteria CT1-CT4, DE1-DE4, RE1;
// subject renewal: a group 3 subject working through the Develop phase in 2026.
// Spine: MoSCoW prioritisation of a client's requirements, family checked free site-wide 7 October 2026.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'SACE DIGITAL TECHNOLOGIES', label: 'SACE Digital Technologies help', blurb: 'Stage 2 Digital Technologies from the subject outline: four focus areas, three assessment types, the individual digital solution, and how to scope a client project so it ships.' },
  slug: 'sace-digital-technologies-help',
  code: 'sadt',
  accent: '#8C4C1C',
  accentRationale: 'SACE Digital Technologies: a burnt clay orange chosen by hand, at least 10 RGB from every site accent and 4.8:1 or better on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'SACE Digital Technologies help',
  title: 'SACE Digital Technologies Help | Stage 2 Online Classes',
  description: 'SACE Stage 2 Digital Technologies help for South Australian students: four focus areas, project skills, the collaborative project and the individual solution.',
  ogDescription: 'SACE Stage 2 Digital Technologies explained from the SACE Board subject outline: what each assessment type asks for, the limits on recordings and statements, and a worked lesson on prioritising a client project.',
  twitterDescription: 'Stage 2 Digital Technologies from the subject outline: three assessment types, four focus areas, and how to scope a project that ships.',
  pageName: 'SACE Digital Technologies Help',
  webPageDescription: 'Support for South Australian students taking SACE Stage 2 Digital Technologies: focus areas, the weighting and limits of each assessment type, the assessment design criteria, subject renewal status, and a worked lesson on MoSCoW prioritisation for client projects.',
  courseDescription: 'Live online coding lessons in computational thinking, program design, data analysis and iterative project development for SACE Stage 2 Digital Technologies students, without completing any assessed work.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'SACE Digital Technologies',
  navLinks: [
    { href: '#outline', label: 'The outline' },
    { href: '#assessment', label: 'Assessment' },
    { href: '#moscow', label: 'Scoping lesson' },
    { href: '#ids', label: 'Individual solution' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'South Australia &middot; SACE Stage 2 &middot; Live online',
  h1: 'SACE Digital Technologies help',
  lede: 'Stage 2 Digital Technologies asks a South Australian student to do what working developers do: pick a real problem, talk to a client, build something in stages and explain it on camera. Most of the marks sit with the school, and most of the stress comes from projects that grow faster than the time left to finish them.',
  secondaryCta: { href: '#moscow', label: 'See the scoping lesson' },
  wa: 'Hello Modern Age Coders, I would like a free coding class about SACE Stage 2 Digital Technologies.',
  heroNote: 'Subject outline read at source &middot; Your project stays your own work &middot; Lessons on Adelaide time',
  spec: [
    ['Subject', 'Digital Technologies'],
    ['Stage', '2, worth 20 credits'],
    ['Code', '2DGT20'],
    ['School assessment', '70 per cent'],
    ['External assessment', '30 per cent'],
    ['Focus areas', 'Four, all studied'],
    ['Renewal', 'Develop phase in 2026'],
    ['We never', 'Build assessed work']
  ],
  capsuleQ: 'In short',
  capsule: 'SACE Stage 2 Digital Technologies is a 20-credit subject (code 2DGT20) with four focus areas: computational thinking, design and programming, data analytics, and iterative project development. Project Skills counts 50 per cent and the Collaborative Project 20 per cent, both school assessed. The Individual Digital Solution, worth 30 per cent, is assessed externally.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses under a Stage 2 project',
    lede: 'Programming fluency first, then data, then the habits that keep a project on schedule.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'SADT / 01', title: 'Python for teens', note: 'A general-purpose language written well, with selection, repetition and sequencing used deliberately rather than by accident.' },
      { course: 'data-science-course-for-teens-python-data', code: 'SADT / 02', title: 'Data science for teens', note: 'Reading, cleaning and modelling data sets, the work at least one project skills task must contain.' },
      { course: 'git-github-version-control-course-for-teens', code: 'SADT / 03', title: 'Git and version control', note: 'A history of every change, which turns a walkthrough video into a story the student can actually prove.' }
    ]
  },

  sections: [
    {
      id: 'outline', tint: 'tint', eyebrow: 'Inside the subject outline',
      h2: 'Four focus areas that are taught together',
      lede: 'Everything here comes from the SACE Board Stage 2 Digital Technologies Subject Outline, read on 7 October 2026. The outline says students study all four focus areas, and that the areas are not intended to be taught independently.',
      body: [
        { kind: 'table', caption: 'Stage 2 Digital Technologies focus areas, as the outline describes them', head: ['Focus area', 'What the outline emphasises', 'Where it shows up'], rows: [
          ['1. Computational thinking', 'Decomposition, pattern recognition, abstraction and algorithm design, with algorithms written in pseudocode or drawn as a structure chart or flow chart', 'Every task, and the algorithm design required in the individual solution'],
          ['2. Design and programming', 'Program design, pseudocode, simple constructs, array processing and modularisation in a general-purpose language, with comments that explain the code', 'Programming skills tasks and both digital solutions'],
          ['3. Data analytics', 'Collecting, extracting, interpreting and modelling data sets to identify trends and make predictions', 'At least one project skills task'],
          ['4. Iterative project development', 'Building a product, prototype or proof of concept in stages, following agile practices, with testing at each stage', 'The collaborative project and the individual solution']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The outline frames the subject around problems of interest to the student, and it repeats that phrase often enough to be a design principle. A student who chooses a problem they genuinely care about writes a stronger designer\'s statement, because the statement asks what makes the solution effective and what could count as innovative.',
            'Programming is assessed in a general-purpose programming language. The outline does not prescribe one, so schools choose. Python is common in South Australian classrooms, and the skills transfer: arrays, functions, files and a little object-oriented design if the student wants to explore it.'
          ],
          right: [
            'Data analytics is the area students most often underestimate. The outline asks for simple and complex data sets, patterns and trends, conclusions and predictions, which is statistics done in code rather than in a spreadsheet alone.',
            'The subject is also part of the SACE Board\'s subject renewal program. Its renewal page lists Digital Technologies as a group 3 subject working through the Develop phase in 2026, so details may change for later cohorts. Students should always use the outline their school gives them for their own year.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.sace.sa.edu.au/web/digital-technologies/overview" rel="noopener" target="_blank">SACE Board, Digital Technologies overview</a> (credits, codes and weightings); Stage 2 Digital Technologies Subject Outline (docx) linked from that page; <a class="ag-inline-link" href="https://www.sace.sa.edu.au/web/digital-technologies/subject-renewal" rel="noopener" target="_blank">subject renewal page</a>. Read on 7 October 2026.' }
      ]
    },
    {
      id: 'assessment', tint: 'deep', eyebrow: 'How the result is built',
      h2: 'Three assessment types, five or six pieces of evidence',
      lede: 'The outline asks for five to six assessments in total, including the external one. Each limit below is copied from the outline, because these limits shape how a project has to be planned.',
      body: [
        { kind: 'table', caption: 'Stage 2 Digital Technologies assessment, from the subject outline', head: ['Assessment type', 'Weight', 'What the student submits', 'Limits'], rows: [
          ['AT1 Project Skills (school)', '50 per cent', 'Three or four tasks applying computational thinking, data analysis, design and programming, and iterative development', 'Together a maximum of 20 minutes in multimodal form'],
          ['AT2 Collaborative Project (school)', '20 per cent', 'An individual Project Solution Walkthrough and an individual Technical Walkthrough about a group solution built for a client', 'Up to 5 minutes and up to 3 minutes; recordings no more than 1GB'],
          ['AT3 Individual Digital Solution (external)', '30 per cent', 'A solution or prototype with source code, design comments, algorithm design and a user interface or instructions, plus a designer\'s statement', 'Solution no more than 1 GB and 15 minutes; statement up to 3 minutes oral or 500 words written']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Inside Project Skills, the outline sets four floors: at least one task involves collaboration, at least one analyses data sets, at least one assesses programming skills, and in at least one the student discusses the ethics of data use or digital solutions. Teachers decide how those floors are met, which is why tasks differ between schools.',
            'The Collaborative Project needs an identifiable client outside the student group, consulted throughout development. The group solution itself is presented and discussed but not submitted to the SACE Board. Each student\'s walkthroughs are what the teacher assesses.'
          ],
          right: [
            'The assessment design criteria have three groups. Computational thinking runs from CT1 to CT4, development and evaluation from DE1 to DE4, and research and ethics is RE1. The individual solution is assessed against CT1, CT2 and CT4, and DE1, DE2 and DE3.',
            'Performance standards describe five levels of achievement, A to E. The outline also expects a broad definition of collaboration: face to face or online, with students, teachers, relatives or community members.'
          ] },
        { kind: 'source', html: 'Weights, limits and criteria: Stage 2 Digital Technologies Subject Outline, sections on evidence of learning, assessment design criteria and the three assessment types, read on 7 October 2026. External assessment summary: <a class="ag-inline-link" href="https://www.sace.sa.edu.au/web/digital-technologies/external-assessment" rel="noopener" target="_blank">SACE Board, Digital Technologies external assessment</a>.' }
      ]
    },
    {
      id: 'moscow', tint: 'tint', eyebrow: 'A worked lesson',
      h2: 'Scoping a client project with MoSCoW',
      lede: 'Iterative development only works if the first version is small enough to finish. MoSCoW is a common way to sort a client\'s wish list into Must have, Should have, Could have and Won\'t have this time. The client, requirements and hour estimates below are invented for teaching; the arithmetic is ours.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The client', p: 'A canteen manager wants students to pre-order lunch. The group has about 36 working hours left before walkthroughs are due, shared across the team.' },
          { h3: 'The wish list', p: 'Ten requirements arrive in the first meeting. Every one sounds reasonable, and together they need 41 hours, which is more than the group has.' },
          { h3: 'The decision', p: 'Sorting by MoSCoW keeps 34 hours of work, leaves a 2 hour buffer for testing, and tells the client plainly what waits for a later version.' }
        ] },
        { kind: 'table', caption: 'An invented canteen pre-order project, sorted with MoSCoW (estimates in hours)', head: ['Priority', 'Requirement', 'Estimate', 'Kept in version 1?'], rows: [
          ['Must', 'Show today\'s menu', '4', 'Yes'],
          ['Must', 'Order form with input validation', '6', 'Yes'],
          ['Must', 'Order list for canteen staff', '5', 'Yes'],
          ['Must', 'Save orders to a file between sessions', '5', 'Yes'],
          ['Should', 'Search the menu', '3', 'Yes'],
          ['Should', 'Filter out items with a chosen allergen', '5', 'Yes'],
          ['Should', 'Daily totals for the kitchen', '4', 'Yes'],
          ['Could', 'Colour themes', '2', 'Yes, fits the time left'],
          ['Could', 'Order history for each student', '7', 'No, deferred'],
          ['Won\'t (this time)', 'Online payment', 'Not estimated', 'No, out of scope']
        ] },
        { kind: 'table', caption: 'The same project as four iterations (our plan, 36 hours in total)', head: ['Iteration', 'Contents', 'Hours', 'What the client sees afterwards'], rows: [
          ['1', 'Menu display and order form', '10', 'A working form that rejects a blank name or a quantity of zero'],
          ['2', 'Staff order list and saving to file', '10', 'Orders that survive closing the program'],
          ['3', 'Search, allergen filter, daily totals', '12', 'The features that make it useful at 12.30 pm'],
          ['4', 'Colour themes, then testing and fixes', '4', 'A tested version and a list of what comes next']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The four Musts add to 20 hours and the three Shoulds to 12, so together they use 32 of the 36 hours. Of the two Coulds, only the 2 hour colour themes fit, leaving 2 hours of buffer. The 7 hour order history is deferred, and online payment is ruled out for this version because it raises security and privacy questions the group cannot answer properly in the time available.',
            'Writing the Won\'t list down matters as much as the Must list. It is evidence of client consultation, it stops scope creep in week four, and it gives every student something honest to say in a Project Solution Walkthrough about decisions and trade-offs.'
          ],
          right: [
            'The same habit protects the individual solution. A student working alone has no teammates to absorb an overrun, and the outline caps the submission at 15 minutes and 1 GB. A solution with three finished features beats one with seven half-built ones, both for the student and for an external assessor watching a walkthrough.',
            'In lessons we practise the sorting on invented briefs, then ask the student to defend each priority aloud, as a client would challenge it. That rehearses the explanation without anyone touching the student\'s real project.'
          ] },
        { kind: 'source', html: 'MoSCoW is a general prioritisation technique; the outline itself asks for iterative development, client consultation and evaluation. The project, requirements, estimates and plan are invented for teaching and checked by our own arithmetic on 7 October 2026.' }
      ]
    },
    {
      id: 'ids', tint: '', eyebrow: 'The external 30 per cent',
      h2: 'What the individual digital solution has to contain',
      lede: 'The outline lists what the solution or prototype should include, and the integrity rule that applies to everything a student submits. Both are quoted or closely paraphrased from the outline below.',
      body: [
        { kind: 'table', caption: 'AT3 Individual Digital Solution, from the subject outline', head: ['Element', 'What the outline asks for'], rows: [
          ['Code', 'Original source code and/or adapted code displaying selection, repetition, and sequencing, accompanied by design comments'],
          ['Design', 'Algorithm design'],
          ['Use', 'A graphical user interface and/or instructions for use'],
          ['Statement', 'A designer\'s statement discussing the effectiveness of the solution and a feature or features that could be considered innovative'],
          ['Size and length', 'No more than 1 GB, with a maximum time limit of 15 minutes; the statement up to 3 minutes oral or 500 words written'],
          ['Starting point', 'May build on an aspect of a problem from AT1 or AT2, but must be the student\'s own independent work']
        ] },
        { kind: 'p', text: 'The SACE Board states that, to ensure academic integrity, assessment must be based on the work students have produced without undue assistance from other people or sources. We take that literally. We teach selection, repetition and sequencing, design comments, algorithm notation and evaluation with problems we invent, and we never write, debug or review a student\'s assessed code, recordings or statement.' },
        { kind: 'source', html: 'Source: Stage 2 Digital Technologies Subject Outline, Assessment Type 3; integrity wording from the <a class="ag-inline-link" href="https://www.sace.sa.edu.au/web/digital-technologies/school-assessment" rel="noopener" target="_blank">SACE Board school assessment page</a>, read on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready for Stage 2',
    h2: 'Four rungs from Year 10 to a finished solution',
    lede: 'Most students start the subject able to code a little. The gap is usually design and finishing, not syntax.',
    table: { caption: 'From first programs to a Stage 2 digital solution', head: ['When', 'Rung', 'The sign it is secure'], rows: [
      ['Year 10', '1. Constructs', 'Writes loops and conditions that work first time on small problems'],
      ['Stage 1', '2. Structure', 'Splits a program into functions and explains what each one is for'],
      ['Early Stage 2', '3. Data', 'Loads a data set, cleans it and states one trend it shows'],
      ['Later Stage 2', '4. Iteration', 'Ships a small version, gathers feedback and plans the next one']
    ] },
    left: { h3: 'If programming is the worry', ps: [
      'Short daily practice beats long weekend sessions. A small problem solved and explained every day builds the fluency that a programming skills task assumes.',
      'Reading other people\'s code aloud, line by line, is the fastest way to learn what clean code looks like.'
    ] },
    right: { h3: 'If finishing is the worry', ps: [
      'Plan in iterations and protect the Musts. Our <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, don\'t copy-paste</a> page explains why every line in a solution must be one the student can explain.',
      'Students in other states can compare with <a class="ag-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering</a> in New South Wales.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Stage 2 students',
    lede: 'Grouped by focus area. Every card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Programming', sub: 'Design and programming', courses: [
        { code: 'SADT / PR / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A general-purpose language, from constructs to modules.' },
        { code: 'SADT / PR / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Object-oriented design for students who want to explore it.' },
        { code: 'SADT / PR / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Algorithm design under time pressure.' }
      ] },
      { num: 'II', h3: 'Data', sub: 'Data analytics', courses: [
        { code: 'SADT / DA / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Trends and predictions from real data sets.' },
        { code: 'SADT / DA / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The statistics behind honest conclusions.' },
        { code: 'SADT / DA / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models trained on data, for students heading that way.' }
      ] },
      { num: 'III', h3: 'Building', sub: 'Iterative project development', courses: [
        { code: 'SADT / BU / 01', slug: 'git-github-version-control-course-for-teens', title: 'Git and version control', blurb: 'Every change recorded and explainable.' },
        { code: 'SADT / BU / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'User interfaces that a client can try.' },
        { code: 'SADT / BU / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web', blurb: 'Web solutions with a front end and stored data.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Stage 2 lessons on Adelaide time',
    lede: 'Lessons are live and come from our tutors in India. Adelaide runs four hours ahead of India time in winter and five hours ahead once daylight saving starts on 4 October 2026, until 4 April 2027, according to the IANA time zone database. A 5 pm lesson in Adelaide in summer is noon India time, within our working day.',
    slots: [
      { time: 'Weekday after school', l: 'Weekly programming and design practice.' },
      { time: 'Weekend morning', l: 'Longer sessions on data and algorithms.' },
      { time: 'School holidays', l: 'Short intensive blocks on one skill.' }
    ],
    cells: [
      { h3: 'Invented briefs', p: 'Every project we work on in class is made up, never the assessed one.' },
      { h3: 'Explain aloud', p: 'Students talk through code the way a walkthrough requires.' },
      { h3: 'Design before code', p: 'Pseudocode or a structure chart before the editor opens.' },
      { h3: 'Small groups', p: 'Fifteen to twenty students at one level, reviewing each other\'s practice code.' },
      { h3: 'One-to-one sessions', p: 'For one skill, such as data cleaning, that needs focused repair.' },
      { h3: 'No grade forecasts', p: 'We never predict a SACE grade; the work and the result belong to the student.' }
    ]
  },

  projectsH2: 'What our students build in their own time',
  projectsLede: 'Projects students made outside school, never assessed work. More in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews copied exactly as families and students wrote them on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Lessons are billed monthly in US dollars, one rate for every family outside India, with no joining fee and nothing owed beyond the month in progress.',
    free: ['A full coding lesson with a tutor', 'A clear view of the next skill to build', 'No card details asked'],
    group: ['Fifteen to twenty students at one level', 'One tutor every week', 'Practice code reviewed in class', 'A certificate when the course ends'],
    one: ['A tutor for one student', 'Focused on one skill at a time', 'Useful before a programming skills task']
  },

  faq: {
    eyebrow: 'Questions about Stage 2',
    h2: 'Digital Technologies questions we are asked',
    items: [
      { q: 'What is SACE Stage 2 Digital Technologies?', a: 'It is a 20-credit Stage 2 subject, code 2DGT20, in which students solve problems of interest through computational thinking, design and programming, data analytics and iterative project development. School assessment counts 70 per cent and external assessment 30 per cent.' },
      { q: 'What are the three assessment types?', a: 'Project Skills (50 per cent, three or four tasks), the Collaborative Project (20 per cent, assessed through individual walkthroughs) and the Individual Digital Solution (30 per cent, assessed externally).' },
      { q: 'How long can the walkthroughs be?', a: 'The outline sets the Project Solution Walkthrough at up to 5 minutes and the Technical Walkthrough at up to 3 minutes, with recordings no larger than 1GB.' },
      { q: 'What must the individual digital solution include?', a: 'Source code showing selection, repetition and sequencing with design comments, algorithm design, a graphical user interface or instructions for use, and a designer\'s statement of up to 3 minutes oral or 500 words written. The solution may be no more than 1 GB and 15 minutes.' },
      { q: 'Which programming language should I use?', a: 'The outline asks for a general-purpose programming language without naming one, so schools decide. We teach Python by default and Java for students whose school uses it.' },
      { q: 'What is MoSCoW prioritisation?', a: 'A way of sorting requirements into Must have, Should have, Could have and Won\'t have this time, so the first version of a product is small enough to finish and the client knows what is deferred.' },
      { q: 'Is Digital Technologies changing?', a: 'The SACE Board lists it as a group 3 subject in its subject renewal program, working through the Develop phase in 2026. Always follow the outline your school provides for your year.' },
      { q: 'Will you help with my project?', a: 'We teach the skills with invented projects. We never write, debug or review your assessed code, recordings or designer\'s statement, because the SACE Board requires assessed work to be produced without undue assistance.' },
      { q: 'Do I need to know how to code before Stage 2?', a: 'It helps a great deal. Students who can already write loops, conditions and functions spend Stage 2 learning design and data rather than syntax.' },
      { q: 'What time are lessons in Adelaide?', a: 'Late afternoon in Adelaide suits most students and falls within our tutors\' day. The weekly time is agreed after the free lesson.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for South Australian students',
    lede: 'The SACE maths subjects that pair with computing, and the wider picture across Australia.',
    items: [
      { href: '/sace-mathematical-methods-tutoring', label: 'SACE Mathematical Methods tutoring', p: 'Calculus and statistics for Stage 2.' },
      { href: '/sace-specialist-mathematics-tutoring', label: 'SACE Specialist Mathematics tutoring', p: 'Vectors, complex numbers and proof.' },
      { href: '/choosing-year-11-computing-subjects-australia', label: 'Choosing Year 11 computing subjects', p: 'How senior computing differs between states.' },
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering help', p: 'The New South Wales computing course for comparison.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Australian competitions calendar', p: 'Coding competitions through the school year.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our national hub, from first blocks to AI.' }
    ]
  },

  start: {
    h2: 'Start with a free Digital Technologies lesson',
    lede: 'Tell us your stage, the language your school uses, and whether programming, data or finishing is the hard part. The free lesson works on that skill with a problem we invent.',
    readFirst: 'Before booking, browse every syllabus in the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, read about the lesson method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or see our other <a class="ag-inline-link" href="/coding-classes-in-australia">Australian pages</a>.',
    note: 'We reply to WhatsApp messages first. The number begins +91 because our school is in India; we have no office in South Australia or anywhere else in Australia.',
    formNote: 'No card and no obligation. One reply books the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/sace-mathematical-methods-tutoring', label: 'SACE Mathematical Methods' },
        { href: '/sace-specialist-mathematics-tutoring', label: 'SACE Specialist Mathematics' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for kids' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'We teach the skills; every assessed project stays the student\'s own'
  },

  personalityCss: `
.ag-root.ag-sadt .ag-hero-grid { gap: clamp(1rem, 2.8vw, 2.4rem); }
.ag-root.ag-sadt .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-sadt .ag-capsule { border-left-width: 5px; }
.ag-root.ag-sadt .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-sadt .ag-table caption { text-align: left; }
.ag-root.ag-sadt .ag-table td:nth-child(3) { font-variant-numeric: tabular-nums; }
.ag-root.ag-sadt .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-sadt .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'SACE Board of South Australia. Stage 2 Digital Technologies Subject Outline (version 1.2, linked from the overview page) and the overview, school assessment, external assessment and subject renewal pages, read on 7 October 2026: 20 credits, code 2DGT20; school assessment 70% (AT1 Project Skills 50%, AT2 Collaborative Project 20%); external assessment 30% (AT3 Individual Digital Solution); four focus areas; five to six assessments; criteria CT1 to CT4, DE1 to DE4 and RE1; performance standards A to E; group 3 subject in the Develop phase of subject renewal in 2026.',
    localProject: 'MoSCoW prioritisation of an invented canteen pre-order project: ten requirements totalling 41 estimated hours against 36 available; four Musts (20 hours) and three Shoulds (12 hours) kept, one 2 hour Could kept, a 7 hour Could deferred, online payment ruled out; four iterations of 10, 10, 12 and 4 hours.',
    requiredMentions: ['2DGT20', 'Individual Digital Solution', 'Project Solution Walkthrough', 'Technical Walkthrough', 'MoSCoW', 'Won\'t have this time', 'canteen pre-order', 'designer\'s statement', 'group 3 subject'],
    sources: [
      { claim: 'SACE Board, Digital Technologies overview: subject codes 1DGT10, 1DGT20 and 2DGT20, Stage 2 credits 20, Stage 2 weightings 70% school and 30% external.', url: 'https://www.sace.sa.edu.au/web/digital-technologies/overview' },
      { claim: 'Stage 2 Digital Technologies Subject Outline (docx): focus areas, evidence of learning, assessment design criteria, AT1 to AT3 requirements and limits.', url: 'https://www.sace.sa.edu.au/documents/652891/12131490/Stage+2+Digital+Technologies+Subject+Outline.docx/a8ab5dcf-88b7-7b79-a841-7f6755a88415?version=1.2' },
      { claim: 'SACE Board, Digital Technologies school assessment page: integrity wording on work produced without undue assistance.', url: 'https://www.sace.sa.edu.au/web/digital-technologies/school-assessment' },
      { claim: 'SACE Board, Digital Technologies subject renewal: a group 3 subject working through the Develop phase in 2026.', url: 'https://www.sace.sa.edu.au/web/digital-technologies/subject-renewal' },
      { claim: 'IANA time zone database (Australia/Adelaide, Asia/Kolkata): offsets of 4 and 5 hours, daylight saving from 4 October 2026 to 4 April 2027.', url: 'https://www.iana.org/time-zones' }
    ],
    rejectedClaims: [
      'Any specific programming language required by the SACE Board: the outline names none, so none is claimed.',
      'Dates for submitting the individual digital solution: not read from a dates page, so not stated.',
      'Any change the subject renewal will make: work-in-progress only, so no change is predicted.',
      'Any SACE grade or ATAR outcome: never predicted.',
      'Any affiliation with the SACE Board: none, and any offer to build or review assessed work is refused on the page.'
    ]
  }
};
