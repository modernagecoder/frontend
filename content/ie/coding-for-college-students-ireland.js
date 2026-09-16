'use strict';
// Coding for college students in Ireland (ag- door, Ireland cluster, Phase 2).
// Facts read at primary sources on 16 September 2026: HEA Key Facts & Figures
// (278,880 enrolments in 2024/25, up 4.9%; 48,485 new full-time undergraduate
// entrants; ICT third-largest postgraduate field at 13.2% and second among
// internationally domiciled graduates at 18.3%; ICT is heavily male, with no
// percentage published; HEA funds ICT retention supports); HEA Graduate
// Outcomes for the Class of 2024, published 27 November 2025 (80.2% of all
// graduates in employment at nine months; 74.9% of undergraduate honours
// graduates; 61.6% completed internships; 92.9% employed in Ireland, Dublin
// 43.4%, Cork 13.0%, Galway 6.8%; TU honours employment 79.4% to 85.6% against
// 65.1% to 79.1% at universities, partly because more university graduates
// continue to study); SOLAS National Skills Bulletin October 2025 (11,200 ICT
// awards in 2023, software development awards up 29% or 735, 300 of them at
// NFQ 8 to 10; Ireland third largest EU share of IT graduates in 2023); module
// descriptors for 2026/27 (UCC CS1117, 15 credits, Semesters 1 and 2, "using a
// modern programming language (currently Python)"; UCD COMP10110 "e.g. C",
// Level 1, Autumn; UCD COMP10280 conversion module in Python, at least 100
// programs); UCD and Trinity academic calendars 2026/27. UL CS4141 belongs to
// the Java page. No euro figures beside our USD fees, so salary bands are left
// out entirely. No CAO points, no admissions advice, no grade promises.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'COLLEGE', blurb: 'For students in Irish higher education: what first-year programming actually asks, and how to build the portfolio employers look at.' },
  slug: 'coding-for-college-students-ireland',
  code: 'cci',
  accent: '#525001',
  accentRationale: 'College students, Ireland: a dark olive from the solver, separated from both Irish greens and every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Coding for college students, Ireland',
  title: 'Coding for College Students in Ireland | Live Online',
  description: 'Coding support for college students in Ireland: first-year Python, C and Java, data structures, projects and a portfolio, taught live around your timetable.',
  ogDescription: 'Irish first-year programming modules do not all teach the same language. Here is what UCC, UCD and others actually set, and how to keep up with whichever you got.',
  twitterDescription: 'Live coding classes for students in Irish higher education, built around semesters and exams. First class free.',
  pageName: 'Coding for College Students in Ireland',
  webPageDescription: 'For students in Irish higher education who want to keep up with programming modules and build a portfolio: what first-year modules teach, what graduate outcomes show, and live online classes timed around Irish semesters.',
  courseDescription: 'Live online coding classes for students in Irish higher education: Python, C, Java, data structures and algorithms, databases, full stack projects and AI, taught around semester dates and exams.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'Coding for college students, Ireland',
  navLinks: [
    { href: '#firstyear', label: 'First-year modules' },
    { href: '#numbers', label: 'Students and outcomes' },
    { href: '#calendar', label: 'Around the semester' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Higher education &middot; Live online',
  h1: 'Coding for college students in Ireland',
  lede: 'First year of a computing degree in Ireland has a particular shape. The lectures move fast, the labs assume you already type fluently, and the language you are taught depends entirely on where you ended up: University College Cork introduces programming "using a modern programming language (currently Python)", while University College Dublin\'s Computer Programming I says students "learn how to program a computer using a simple programming language (e.g. C)". Two respected departments, two different first languages, and a student in either one can be the person in the lab who has never written a line before. This page is for students in Irish higher education who want to stop feeling behind: what first-year modules actually ask, what the graduate outcomes data shows about internships and employment, and how weekly live lessons fit around semester dates at UCD, Trinity and elsewhere. We are not affiliated with any Irish institution, and we never write or edit work that will be submitted for assessment.',
  secondaryCta: { href: '#firstyear', label: 'What first year teaches' },
  wa: 'Hello Modern Age Coders, I am a college student in Ireland and would like a free first coding class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; never assessed work, always your own',
  spec: [
    ['For', 'Higher education students'],
    ['Covers', 'Python, C, Java, DSA, web, AI'],
    ['Fits', 'Irish semesters and exams'],
    ['Builds', 'A portfolio, from first year'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Never', 'Work submitted for assessment'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Irish computing degrees do not share a first language: UCC introduces programming in Python, while UCD\'s first-year module uses C as its example. Whichever you are in, the gap that hurts is fluency, not talent, and it closes with weekly practice and someone to ask. Modern Age Coders teaches students in Ireland live online, in groups of five to ten at one level or one to one, around semester dates and exam weeks. We teach the skills and your own projects, never work being submitted for assessment. The first class is free; after it a group place is USD 100 a month and one-to-one lessons USD 150 a month.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that carry a computing degree',
    lede: 'The language, the theory and the practice that most first and second years need. Each card opens its syllabus.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'COLLEGE / 01', title: 'Python Masterclass', note: 'For students whose modules are in Python, and for anyone who wants one language they can genuinely rely on.' },
      { course: 'c-programming-course-for-college-beginners', code: 'COLLEGE / 02', title: 'C Programming for College Beginners', note: 'Pointers, memory and the machine underneath, for degrees that start students in C rather than a friendlier language.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'COLLEGE / 03', title: 'Data Structures and Algorithms', note: 'The module most students find hardest, taught as reasoning about cost rather than memorising implementations.' }
    ]
  },

  sections: [
    {
      id: 'firstyear', tint: 'tint', eyebrow: 'First-year modules',
      h2: 'What Irish first-year programming modules actually set',
      lede: 'Read from the institutions\' own module catalogues for 2026/27. Departments change their choices, so always check your own module descriptor.',
      body: [
        { kind: 'table', caption: 'Introductory programming modules in Irish universities, 2026/27 catalogues', head: ['Module', 'Institution', 'Language, in the descriptor\'s words', 'Shape'], rows: [
          ['CS1117 Introduction to Programming', 'University College Cork', '"using a modern programming language (currently Python)"', '15 credits, Semesters 1 and 2'],
          ['COMP10110 Computer Programming I', 'University College Dublin', '"a simple programming language (e.g. C)"', '5 credits, Level 1, Autumn trimester'],
          ['COMP10280 Programming I (Conversion)', 'University College Dublin', 'Python, with "at least 100 programs" written', 'Graduate conversion, not first-year undergraduate']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two modules, two languages, one university',
          left: [
            'UCD\'s two entry modules illustrate something worth knowing: the language is a teaching choice, not a statement about the subject. One module uses C as its example, the other teaches Python to graduates converting into computing.',
            'So the question "what language does Ireland teach?" has no single answer, and anyone who gives you one has not checked. What transfers between them is the thinking: variables, control flow, decomposition, testing.'
          ],
          rightH3: 'The weight of first year',
          right: [
            'Look at the credits. UCC\'s introduction to programming runs across both semesters and carries 15 credits, three times a standard 5-credit module, with a summer written exam worth most of the marks.',
            'A module that size rewards steady weekly work and punishes catching up in April. That is the single most useful thing to know in September of first year.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://ucc-ie-public.courseleaf.com/search/?P=CS1117" rel="noopener" target="_blank">UCC Book of Modules, CS1117</a>; <a class="ag-inline-link" href="https://www.ucd.ie/modules/COMP10110" rel="noopener" target="_blank">UCD, COMP10110</a> and <a class="ag-inline-link" href="https://www.ucd.ie/modules/COMP10280" rel="noopener" target="_blank">COMP10280</a>. We have no connection with either university; check your own department\'s current descriptor, which is the only one that governs your course.' }
      ]
    },
    {
      id: 'numbers', tint: 'deep', eyebrow: 'Students and outcomes',
      h2: 'Irish higher education, and what happens after it',
      lede: 'The Higher Education Authority publishes both enrolment figures and a graduate outcomes survey. Together they say something useful about where effort pays.',
      body: [
        { kind: 'table', caption: 'Higher education in Ireland: enrolments and outcomes', head: ['Measure', 'Figure', 'Source'], rows: [
          ['Student enrolments, 2024/25', '278,880, up 4.9% on the year', 'HEA Key Facts and Figures'],
          ['New full-time undergraduate entrants, 2024/25', '48,485', 'HEA'],
          ['ICT share of postgraduate graduates, Class of 2024', '13.2%, the third largest field', 'HEA'],
          ['ICT share among internationally domiciled graduates', '18.3%, second only to business, administration and law', 'HEA'],
          ['In employment nine months after graduating, Class of 2024', '80.2% of all graduates; 74.9% of undergraduate honours graduates', 'HEA Graduate Outcomes'],
          ['Completed an internship', '61.6% of 2024 honours graduates, up from 58.4%', 'HEA Graduate Outcomes'],
          ['Working in Ireland nine months on', '92.9%, with Dublin 43.4%, Cork 13.0% and Galway 6.8%', 'HEA Graduate Outcomes']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The internship figure is the one students should act on. Nearly two in three honours graduates had done one, which means a student without any relevant experience is competing against a majority who have some.',
            'Building something real, and putting it somewhere public, is the version of that available to a first or second year who has not reached a placement module yet.'
          ],
          right: [
            'The HEA also notes that honours graduates of technological universities are employed at nine months at rates between 79.4% and 85.6%, against 65.1% to 79.1% at universities, partly because more university graduates go straight into further study.',
            'On supply, SOLAS reports 11,200 ICT awards in 2023, with software development awards up 29%, a rise of 735 in a single year, and Ireland having the third largest share of IT graduates in the EU.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://hea.ie/statistics/data-for-download-and-visualisations/key-facts-figures-report/" rel="noopener" target="_blank">HEA Key Facts and Figures</a>; <a class="ag-inline-link" href="https://hea.ie/statistics/graduate-outcomes/key-findings-go-2024/" rel="noopener" target="_blank">HEA Graduate Outcomes, Class of 2024</a> (published 27 November 2025); <a class="ag-inline-link" href="https://a.storyblok.com/f/70398/x/893ebacfd9/national-skills-bulletin-2025.pdf" rel="noopener" target="_blank">SOLAS National Skills Bulletin, October 2025</a>. The HEA does not publish employment figures for ICT graduates alone, so none are claimed here.' }
      ]
    },
    {
      id: 'calendar', tint: 'tint', eyebrow: 'Around the semester',
      h2: 'Lessons timed to the Irish academic year',
      lede: 'Terms differ by institution, so the timetable is agreed with each student. Two published 2026/27 calendars show the usual shape.',
      body: [
        { kind: 'table', caption: 'Published academic dates, 2026/27', head: ['Institution', 'First semester', 'Second semester'], rows: [
          ['University College Dublin', 'Teaching 7 September to 27 November 2026, revision to 4 December, exams 5 to 19 December', 'Teaching from 18 January 2027, study period 8 to 21 March, exams 1 to 15 May'],
          ['Trinity College Dublin', 'Michaelmas teaching from 14 September 2026, study and review week from 26 October, assessment 11 to 22 December', 'Hilary teaching from 18 January 2027, study and review from 1 March, assessment 19 to 30 April']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'September to November', p: 'The heaviest teaching block. Weekly lessons here keep a student level with labs instead of trying to catch up at Christmas.' },
          { h3: 'Exam weeks', p: 'Lessons lighten or pause. We do not run revision of your modules, and we never touch assessed work, but we do practise the underlying skills.' },
          { h3: 'The quiet weeks', p: 'Study periods and the summer are when portfolios actually get built, which is why our project courses fill up then.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'One boundary, stated plainly: we teach skills and personal projects. We do not write, debug, review or edit anything that will be handed up for marks, and we tell students the same thing when they ask.'
          ],
          right: [
            'Students who want to build agents as their own project can go on to <a class="ag-inline-link" href="/ai-agents-course-for-students-ireland">AI agents for students</a>, which covers the Irish academic integrity guidance in detail.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ucd.ie/students/t4media/Academic_dates2026_27.pdf" rel="noopener" target="_blank">UCD Academic Year 2026/27 term dates</a>; <a class="ag-inline-link" href="https://www.tcd.ie/media/tcd/calendar/academic-year-structure/2026-27/academic-year-structure.pdf" rel="noopener" target="_blank">Trinity College Dublin academic year structure 2026/27</a>, read 16 September 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs',
    h2: 'Four years, and what should be true at the end of each',
    lede: 'A rough map. Students arrive at different points, and plenty of final years still need the first rung nailed down.',
    table: { caption: 'Through an Irish computing degree', head: ['Stage', 'What should be solid', 'What to build'], rows: [
      ['First year', 'One language, fluently: loops, functions, files, debugging', 'Small programs, finished and kept'],
      ['Second year', 'Data structures, complexity, version control, SQL', 'A project with a database behind it'],
      ['Third year or placement', 'Working in a team codebase, reading other people\'s code', 'Something used by somebody other than you'],
      ['Final year', 'Depth in one area, and honest evaluation of it', 'A project you can defend in an interview']
    ] },
    left: { h3: 'The portfolio beats the transcript', ps: [
      'Interviewers ask what you built and why you made each choice. Marks rarely come up. Two or three finished projects with public code do more than a long list of modules.',
      'The order the pieces fit together in is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Struggling in first year is normal', ps: [
      'The HEA funds retention supports on ICT programmes precisely because the first year is where students fall away. Ask your department what it runs; most have labs, mentors or peer supports.',
      'Weekly outside lessons work best as a supplement to those, not a replacement for them.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses for students in Irish higher education',
    lede: 'Grouped by where students usually need them. The free first class settles the level.',
    bands: [
      { num: 'I', h3: 'First year', sub: 'Fluency in one language', courses: [
        { code: 'COLLEGE / ONE / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'Python until it is genuinely automatic.' },
        { code: 'COLLEGE / ONE / 02', slug: 'c-programming-course-for-college-beginners', title: 'C Programming for College Beginners', blurb: 'Memory and pointers, taught patiently.' },
        { code: 'COLLEGE / ONE / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub for College Students', blurb: 'Your work saved, versioned and visible.' }
      ] },
      { num: 'II', h3: 'The middle years', sub: 'Theory and real systems', courses: [
        { code: 'COLLEGE / MID / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data Structures and Algorithms', blurb: 'The hard module, made reasonable.' },
        { code: 'COLLEGE / MID / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL Masterclass', blurb: 'Databases as more than a place to put things.' },
        { code: 'COLLEGE / MID / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full Stack Web Development', blurb: 'A whole system you can demonstrate.' }
      ] },
      { num: 'III', h3: 'Final year and beyond', sub: 'Depth and interviews', courses: [
        { code: 'COLLEGE / FINAL / 01', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'Models built and evaluated honestly.' },
        { code: 'COLLEGE / FINAL / 02', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'What sits under the tools everyone uses.' },
        { code: 'COLLEGE / FINAL / 03', slug: 'competitive-programming-masterclass-college', title: 'Competitive Programming', blurb: 'Speed and precision for technical interviews.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Around lectures, labs and exam weeks',
    lede: 'Teaching is live, with teachers based in India, whose clock does not shift. They run four and a half hours ahead of Irish time during the summer months and five and a half hours ahead through the Irish winter, so evening classes in Ireland land comfortably in their day.',
    slots: [
      { time: 'Weekday evening', l: 'After lectures and labs, Irish time.' },
      { time: 'Weekend', l: 'Project sessions, longer and quieter.' },
      { time: 'Gaps in a timetable', l: 'Daytime slots, usually one to one.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'You work through something real and get a frank view of which level to join at.' },
      { h3: 'Groups of five to ten', p: 'Students at one level, including students from other countries taking similar modules.' },
      { h3: 'One to one', p: 'For final-year projects, or when a timetable will not fit a fixed group slot.' },
      { h3: 'Semester aware', p: 'Lessons lighten during exams and pick up again after, planned at the start of each term.' },
      { h3: 'Assessed work is off limits', p: 'We never write, edit, debug or review anything being submitted for marks.' },
      { h3: 'Public portfolio', p: 'Projects live in your own repository, ready for placement and graduate applications.' }
    ]
  },

  projectsH2: 'Student projects, published',
  projectsLede: 'Four projects built by our students and put online where anyone can see them. The <a class="ag-inline-link" href="/student-labs">student labs</a> page holds many more.',
  reviewsLede: 'Our Google reviews, exactly as written by the families and students who left them.',

  fees: {
    h2: 'Fees for students',
    lede: 'A flat monthly price in US dollars, identical in every country outside India, with no enrolment fee and no obligation beyond the month you are in. Students often pause over the summer and pick the same slot up in September.',
    free: ['A real problem worked through', 'An honest placement at a level', 'No card needed'],
    group: ['Five to ten students at one level', 'The same teacher across a term', 'Code reviewed weekly', 'A certificate at the end'],
    one: ['A teacher for one student', 'Fits an awkward timetable', 'Best for final-year projects']
  },

  faq: {
    eyebrow: 'Questions from students',
    h2: 'What students in Ireland ask',
    items: [
      { q: 'Will you help with my assignments?', a: 'No. We never write, edit, debug or review work that will be submitted for assessment. We teach the underlying skills and your own projects, which is a different thing.' },
      { q: 'What language does first year use in Ireland?', a: 'It depends on the institution. UCC introduces programming in Python, while UCD\'s first-year module uses C as its example language. Check your own module descriptor.' },
      { q: 'I am behind after first semester. Is that recoverable?', a: 'Usually yes, and quickly, because the gap is almost always fluency rather than understanding. Weekly practice with someone watching closes it fastest.' },
      { q: 'Should I learn a second language?', a: 'Only once the first is fluent. After that, a second language takes weeks rather than months and makes you a better programmer in both.' },
      { q: 'How important are internships?', a: 'The HEA found 61.6% of 2024 honours graduates had completed one. If you cannot get a placement yet, finished public projects are the next best evidence.' },
      { q: 'Do you work with any Irish university?', a: 'No. We are an independent school teaching live online from India, and we are not affiliated with any Irish institution.' },
      { q: 'Can I pause during exams?', a: 'Yes. Most students lighten or pause for exam weeks and resume afterwards, and the slot is held where possible.' },
      { q: 'What does it cost?', a: 'The first class is free. A group place is then USD 100 a month and one-to-one lessons are USD 150 a month, billed in US dollars, with no enrolment fee.' },
      { q: 'When do classes run?', a: 'Evenings, weekends or free daytime slots, agreed in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.' },
      { q: 'What happens after I send the form?', a: 'We ring you at a sensible Irish hour and arrange the free first class. Nothing is charged unless you continue.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for students',
    lede: 'Related pages for study and for what comes next.',
    items: [
      { href: '/ai-agents-course-for-students-ireland', label: 'AI agents course for students', p: 'Agents, and the integrity rules.' },
      { href: '/full-stack-software-development-course-ireland', label: 'Full stack software development in Ireland', p: 'What the labour market shows.' },
      { href: '/problem-solving-skills-through-coding-ireland', label: 'Problem solving skills through coding', p: 'For the module everyone finds hard.' },
      { href: '/java-classes-ireland', label: 'Java classes in Ireland', p: 'Where Java appears in Irish degrees.' },
      { href: '/best-coding-classes-for-adults-ireland', label: 'Best coding classes for adults in Ireland', p: 'For mature students.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' }
    ]
  },

  start: {
    h2: 'Get level again with a free class',
    lede: 'Leave a number and we will phone at a reasonable Irish hour. In the free class you work through a real problem with a teacher and get a straight answer about where you stand and what to do weekly.',
    readFirst: 'Have a look first if you prefer: <a class="ag-inline-link" href="/how-we-teach">how our classes work</a>, every <a class="ag-inline-link" href="/courses">course syllabus</a>, and <a class="ag-inline-link" href="/student-labs">projects our students published</a>.',
    note: 'WhatsApp is usually quickest, and free from an Irish number. Ours is an Indian number, since the team is in India, and we keep no office in Ireland.',
    formNote: 'No card, no commitment. One call to set it up.'
  },

  footer: {
    cols: [
      { h4: 'Students', links: [
        { href: '/ai-agents-course-for-students-ireland', label: 'AI agents for students' },
        { href: '/full-stack-software-development-course-ireland', label: 'Full stack development' },
        { href: '/problem-solving-skills-through-coding-ireland', label: 'Problem solving' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Ireland', links: [
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/best-coding-classes-for-adults-ireland', label: 'Coding for adults' },
        { href: '/leaving-cert-computer-science-grinds-online', label: 'LC Computer Science grinds' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'For students in Irish higher education'
  },

  personalityCss: `
.ag-root.ag-cci .ag-hero-grid { gap: clamp(1.12rem, 3.25vw, 2.72rem); }
.ag-root.ag-cci .ag-hero h1 { letter-spacing: -0.0195em; }
.ag-root.ag-cci .ag-capsule { border-left-width: 5px; }
.ag-root.ag-cci .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-cci .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cci .ag-band-head h3 { letter-spacing: -0.0065em; }
.ag-root.ag-cci .ag-spec dt { letter-spacing: 0.105em; }
.ag-root.ag-cci .ag-slots { gap: 1.12rem; }
`,

  mustMention: ['CS1117', 'currently Python', 'COMP10110', 'e.g. C', '278,880', '48,485', '13.2%', '80.2%', '74.9%', '61.6%', '92.9%', '11,200']
};
