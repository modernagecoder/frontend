'use strict';
// Best coding classes for teens in Ireland (ag- door, Ireland cluster, Phase 2).
// Post-primary, First Year to the Leaving Cert. Facts read at primary sources
// on 16 September 2026: the Department's Statistical Bulletin (429,653
// post-primary students in 2025/26; among Leaving Cert-track students 56.2%
// established LC, 36.8% LCVP, 7.1% LCA); CSO table EDA70 (62,065 in Transition
// Year in 2025/26, 60,520 in 2024/25, 58,705 in 2023/24); CSO Internet Coverage
// and Usage 2025 (99% of internet users aged 16 to 29 online daily; 57% almost
// constantly); CSO Household Digital Consumer Behaviour 2025 (generative AI
// defined to include programming code; 65% of internet users aged 16 to 29 had
// used it, against 42% of all); the JCPA page (first awarded 2017); Webwise's
// remit; Gaeloideachas (74 Irish-medium post-primary schools, 15,778 students,
// 2023-2024). Data project, EDA70 traps: the Leaving Cert is three programmes
// (LC years 81,021, LCVP 53,097, LCA 10,198 in 2025/26); "All senior cycle"
// includes Transition Year, so the LC share is 39.3% with TY and 56.2% without;
// the series renamed from "Junior Certificate 1st year" to "Junior Cycle Year
// 1" in 2016/17. The students-66% GenAI figure belongs to the agents page.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'TEENS', blurb: 'Coding for secondary-school students, First Year to the Leaving Cert: Python, the web, apps and AI, with a data project on Irish school enrolments.' },
  slug: 'best-coding-classes-for-teens-ireland',
  code: 'bti',
  accent: '#516000',
  accentRationale: 'Teens, Ireland: a deep moss green from the solver, separated from both Irish greens and every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Best coding classes for teens in Ireland',
  title: 'Best Coding Classes for Teens in Ireland | Ages 12 to 18',
  description: 'Best coding classes for teens in Ireland, from First Year to the Leaving Cert: Python, web, apps and AI with a live teacher who reads the code. First class free.',
  ogDescription: 'Irish teenagers are online almost constantly and already using AI. The best coding class turns that into real skill: Python, the web and AI, understood well enough to judge.',
  twitterDescription: 'Coding for Irish secondary students: Python, web, apps and AI, live with a teacher. First class free.',
  pageName: 'Best Coding Classes for Teens in Ireland',
  webPageDescription: 'Coding classes for secondary-school students in Ireland, from the Junior Cycle through Transition Year to the Leaving Certificate, with a data project on Irish school enrolments and live online lessons.',
  courseDescription: 'Live online coding for teenagers in Irish secondary schools: Python, web development, apps, data and AI, placed by ability and fitted around the Junior Cycle, Transition Year and the Leaving Cert.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'Coding for teens, Ireland',
  navLinks: [
    { href: '#years', label: 'Irish secondary school' },
    { href: '#online', label: 'Online and AI' },
    { href: '#data', label: 'A data project' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Secondary school &middot; Ages 12 to 18',
  h1: 'Best coding classes for teens in Ireland',
  lede: 'An Irish teenager in 2026 is online for most of the waking day and may well have already asked an AI tool to write something for them. The Central Statistics Office found that 99% of internet users aged 16 to 29 go online every day, that 57% are online almost constantly, and that 65% had used generative AI, which the CSO defines to include programming code. None of that makes a teenager a programmer. The gap between using technology and understanding it is exactly where a good coding class earns its place: Python written and read by the student, websites and apps built and explained, AI trained rather than merely prompted. This page sets out how secondary school in Ireland is structured today, what the numbers say about teenagers online, and a data project on Irish school enrolments that shows how easily a confident answer can be wrong. Then it explains how our live classes fit around the Junior Cycle, Transition Year and the Leaving Cert.',
  secondaryCta: { href: '#online', label: 'Teens online, in numbers' },
  wa: 'Hello Modern Age Coders, I would like a free first coding class for a secondary-school student in Ireland.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; teenagers across the Irish school years',
  spec: [
    ['For', 'First Year to Sixth Year'],
    ['Covers', 'Python, web, apps, data, AI'],
    ['Fits', 'Junior Cycle, TY, Leaving Cert'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Teacher', 'The same one all year'],
    ['Hours', 'Evenings and weekends, Irish time'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The best coding class for an Irish teenager turns constant use of technology into real understanding: writing and reading Python, building websites and apps, and training AI instead of only prompting it. Irish teens are online almost constantly and many already use AI tools, so the class has to teach judgement as well as syntax. Modern Age Coders teaches secondary students live online, from the Junior Cycle through Transition Year to the Leaving Cert, in groups of five to ten at one level or one to one, with the same teacher across the year. The first class costs nothing; continuing is USD 100 a month in a group or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for Irish teenagers',
    lede: 'The language, the web and AI: the three things most teenagers want to build with. Each card opens its syllabus.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'TEENS / 01', title: 'Python for Teens', note: 'The language behind most AI and data work, taught until a student can write it from a blank file and read anyone else\'s.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'TEENS / 02', title: 'Full Stack Web Development for Teens', note: 'A complete website with its own data and logic, the kind of project that makes Transition Year worth remembering.' },
      { course: 'ai-ml-masterclass-teens', code: 'TEENS / 03', title: 'AI and Machine Learning for Teens', note: 'Models trained, tested and explained by the student, so AI stops being magic and becomes a tool they can judge.' }
    ]
  },

  sections: [
    {
      id: 'years', tint: 'tint', eyebrow: 'Irish secondary school',
      h2: 'Irish secondary school today, by the numbers',
      lede: 'The Department of Education\'s latest statistics show a system that is still growing, and a Leaving Cert that is really three programmes.',
      body: [
        { kind: 'table', caption: 'Post-primary education in Ireland, 2025/26', head: ['Measure', 'Figure', 'Source'], rows: [
          ['Students in post-primary schools', '429,653, up 4,242 on the year before', 'Department Statistical Bulletin'],
          ['Students in Transition Year', '62,065, up from 60,520 in 2024/25 and 58,705 in 2023/24', 'CSO table EDA70'],
          ['Leaving Cert-track students on the established Leaving Certificate', '56.2%, the lowest share in twenty years', 'Department Statistical Bulletin'],
          ['On the Leaving Certificate Vocational Programme', '36.8%, the highest in twenty years', 'Department Statistical Bulletin'],
          ['On the Leaving Certificate Applied', '7.1%', 'Department Statistical Bulletin'],
          ['Irish-medium post-primary schools, 2023-2024', '74 schools with 15,778 students', 'Gaeloideachas']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Junior Cycle Profile of Achievement, first awarded to students who completed the Junior Cycle in 2017, records exam grades, Classroom-Based Assessments in subjects and short courses, and Wellbeing. Schools may also comment on other areas of learning in their own Junior Cycle programme.',
            'That means learning done outside school appears on the profile only if the school chooses to record it. We never promise that a coding class will; what it gives is skill that shows up in everything else.'
          ],
          right: [
            'Transition Year keeps growing: more than 62,000 students in 2025/26. For many teenagers it is the first year with real room for a long project of their own, which is why our <a class="ag-inline-link" href="/transition-year-coding-course-ireland">Transition Year coding course</a> has a page to itself.',
            'After it, the Leaving Cert splits three ways, and a student taking Computer Science has its own demands; see <a class="ag-inline-link" href="/leaving-cert-computer-science-grinds-online">Leaving Cert Computer Science grinds</a>.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://assets.gov.ie/static/documents/424dba50/Bulletin_2025_26.pdf" rel="noopener" target="_blank">Department of Education, Statistical Bulletin 2005/06 to 2025/26</a>; <a class="ag-inline-link" href="https://data.cso.ie/table/EDA70" rel="noopener" target="_blank">CSO table EDA70</a>; <a class="ag-inline-link" href="https://www.gov.ie/en/department-of-education/publications/junior-cycle-profile-of-achievement-jcpa/" rel="noopener" target="_blank">Junior Cycle Profile of Achievement</a>; <a class="ag-inline-link" href="https://gaeloideachas.ie/i-am-a-researcher/statistics/" rel="noopener" target="_blank">Gaeloideachas statistics</a>.' }
      ]
    },
    {
      id: 'online', tint: 'deep', eyebrow: 'Online and AI',
      h2: 'Online almost constantly, and already using AI',
      lede: 'The CSO\'s household survey covers people aged 16 and over, so these figures describe the older end of secondary school and young adults. They are still the clearest national picture.',
      body: [
        { kind: 'table', caption: 'Young people online in Ireland, CSO surveys of 2025', head: ['Measure', 'Figure'], rows: [
          ['Internet users aged 16 to 29 online every day', '99%'],
          ['Aged 16 to 29 online almost constantly', '57%'],
          ['Aged 16 to 29 who had used generative AI in the previous three months', '65%'],
          ['All internet users who had used generative AI', '42%']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The CSO\'s definition matters here. Its 2025 survey asked about generative AI used to create "text, images, programming code, videos, etc.", naming ChatGPT, Copilot and Gemini among the tools. For a teenager, asking such a tool for code is already normal.',
            'What the numbers cannot show is whether a teenager understands the code they get. That is the gap a class exists to close.'
          ],
          right: [
            'Our lessons use AI tools openly, after the student can predict what a piece of code does, and always with a record of what the tool contributed. A student who can read the code is the one who can tell when the tool is wrong. More on this is on <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-ireland">understanding the code instead of copy-pasting</a>.',
            'Online safety is part of the picture too. Webwise, the Department\'s online safety initiative, produces resources on digital citizenship and online wellbeing that pair well with learning to build things online.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.cso.ie/en/releasesandpublications/ep/p-isshict/internetcoverageandusageinireland2025/keyfindings/" rel="noopener" target="_blank">CSO, Internet Coverage and Usage in Ireland 2025</a>; <a class="ag-inline-link" href="https://www.cso.ie/en/releasesandpublications/ep/p-isshdcb/householddigitalconsumerbehaviour2025/generativeai/" rel="noopener" target="_blank">CSO, Household Digital Consumer Behaviour 2025</a>; <a class="ag-inline-link" href="https://www.webwise.ie/about-us/" rel="noopener" target="_blank">Webwise</a>. The survey covers people aged 16 and over; there is no CSO figure for younger teenagers.' }
      ]
    },
    {
      id: 'data', tint: 'tint', eyebrow: 'A data project',
      h2: 'How many students take the Leaving Cert? A question with three answers',
      lede: 'CSO table EDA70 lists secondary-school enrolments by programme and year. It looks simple, and it produces three different answers to one question depending on what the student adds up.',
      body: [
        { kind: 'table', caption: 'Senior cycle enrolments in 2025/26, CSO table EDA70', head: ['Row in the table', 'Students'], rows: [
          ['Leaving Certificate year 1 plus year 2', '81,021'],
          ['Leaving Certificate Vocational Programme', '53,097'],
          ['Leaving Certificate Applied', '10,198'],
          ['Transition Year', '62,065'],
          ['All senior cycle', '206,474']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Trap 1: three programmes', p: 'Add only the two rows called Leaving Certificate and you get 81,021. The Leaving Cert-track total, with the vocational and applied programmes and 93 repeats, is 144,409. Missing two rows undercounts by about 44%.' },
          { h3: 'Trap 2: the denominator', p: '"All senior cycle" includes Transition Year. Divide the established Leaving Cert by it and you get 39.3%; divide by the Leaving Cert-track total and you get the Department\'s 56.2%. Same data, two honest headlines.' },
          { h3: 'Trap 3: a renamed row', p: 'The row "Junior Certificate 1st year" stops in 2015/16, and from 2016/17 the same students appear as "Junior Cycle Year 1". A chart of one label seems to show enrolment collapsing. Only the name changed.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'A Junior Cycle student does this in a spreadsheet first, then in Python with a few lines of code. A Senior Cycle student writes the code to find all three traps automatically, and a sentence explaining which answer fits which question.'
          ],
          right: [
            'An AI assistant asked "how many students take the Leaving Cert?" will pick one of these answers and present it confidently. A student who has done this project knows to ask which one, and why.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://data.cso.ie/table/EDA70" rel="noopener" target="_blank">CSO table EDA70, Pupils Enrolled in Second Level Schools</a>, read 16 September 2026. The 144,409, the 44% and the 39.3% are our own arithmetic on the published table.' }
      ]
    },
    {
      id: 'path', tint: '', eyebrow: 'Through the school years',
      h2: 'A path through the Junior Cycle, Transition Year and the Leaving Cert',
      lede: 'Each stage has a page of its own. The short version:',
      body: [
        { kind: 'three', cells: [
          { h3: 'Junior Cycle', p: 'Python and the web, built on steadily. Students taking the Coding short course learn its skills on separate projects; see <a class="ag-inline-link" href="/junior-cycle-coding-short-course-help">Junior Cycle Coding help</a>.' },
          { h3: 'Transition Year', p: 'Room for a real project: an app, a website with its own data, or a first AI model, finished and shown in public.' },
          { h3: 'Senior Cycle', p: 'Algorithms, data and AI in depth, beside Leaving Cert Computer Science where the school offers it, and a portfolio for the CAO years.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The ladder',
    h2: 'Five rungs across the secondary years',
    lede: 'The years are typical, not rules. A student moves up when the teacher sees the rung secure in their work.',
    table: { caption: 'Coding through Irish secondary school', head: ['Usually', 'Rung', 'The student can'], rows: [
      ['First and Second Year', '1. Python fluency', 'Write and fix programs with loops, functions and lists'],
      ['Second and Third Year', '2. The web', 'Build a website with pages, style and interaction'],
      ['Transition Year', '3. A real project', 'Finish an app or site with its own data, and present it'],
      ['Fifth Year', '4. Data and AI', 'Clean data, train a model and say where it fails'],
      ['Sixth Year and beyond', '5. Depth and portfolio', 'Reason about algorithms and show finished work in public']
    ] },
    left: { h3: 'Why fluency comes first', ps: [
      'A student who writes Python without looking things up can spend their attention on the problem, not the syntax. Every later rung depends on that ease.',
      'Beyond school, the sequence continues on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Around exams', ps: [
      'Lessons pause or lighten for school exams and study weeks; the timetable is agreed with each family. Sixth Years often keep one short lesson a week until June.',
      'Students who started at a coding club often start higher; see <a class="ag-inline-link" href="/after-coderdojo-next-step-coding-ireland">after CoderDojo</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses for Irish teenagers',
    lede: 'Grouped by what a teenager usually wants to build. The free first class decides where a student begins.',
    bands: [
      { num: 'I', h3: 'Code', sub: 'Python and problem solving', courses: [
        { code: 'TEENS / CODE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Fluent Python across the Junior Cycle years.' },
        { code: 'TEENS / CODE / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving for Teens', blurb: 'Algorithms reasoned out and explained.' },
        { code: 'TEENS / CODE / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'A second, stricter language for serious coders.' }
      ] },
      { num: 'II', h3: 'Build', sub: 'Websites and apps', courses: [
        { code: 'TEENS / BUILD / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full Stack Web Development for Teens', blurb: 'A website with its own data and logic.' },
        { code: 'TEENS / BUILD / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App Development for Teens', blurb: 'An app for a phone, finished and shared.' },
        { code: 'TEENS / BUILD / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'The tools professionals use to keep work safe.' }
      ] },
      { num: 'III', h3: 'Data and AI', sub: 'Understanding the tools they already use', courses: [
        { code: 'TEENS / AI / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Real data, and the traps hidden in it.' },
        { code: 'TEENS / AI / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Models built and tested by the student.' },
        { code: 'TEENS / AI / 03', slug: 'teens-ai-tools-mastery-course', title: 'AI Tools for Teens', blurb: 'AI tools used well and safely, from thirteen.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Evenings, weekends and a teacher who knows the student',
    lede: 'Classes are live with a teacher in India, at a regular hour fixed in Irish time. Irish clocks change and Indian clocks do not, so our teachers are five and a half hours ahead through the Irish winter and four and a half ahead in summer. Secondary students usually learn on a weekday evening after study or on a weekend.',
    slots: [
      { time: 'Weekday evening', l: 'After school and study, Irish time.' },
      { time: 'Saturday', l: 'Longer project sessions, popular in Transition Year.' },
      { time: 'Sunday', l: 'For students with weekday sport or work.' }
    ],
    cells: [
      { h3: 'A first class on the house', p: 'The student writes some real code with a teacher, who then suggests a level, a course and a regular slot.' },
      { h3: 'Groups of five to ten', p: 'Teenagers at the same level from Ireland and other countries, reviewing each other\'s code.' },
      { h3: 'One to one', p: 'For exam years, fast movers, or anyone who prefers a teacher to themselves.' },
      { h3: 'AI with a record', p: 'AI tools come in after the basics, and the student notes what each tool contributed.' },
      { h3: 'School terms respected', p: 'Junior Cycle, TY and Leaving Cert are used as Irish schools use them, and exam weeks are planned around.' },
      { h3: 'A portfolio that grows', p: 'Projects live in the student\'s own repository, ready for TY showcases and CAO applications.' }
    ]
  },

  projectsH2: 'Projects built by our teenage students',
  projectsLede: 'Four live projects by our students. The <a class="ag-inline-link" href="/student-labs">student labs</a> page collects many more.',
  reviewsLede: 'Straight from Google, words unchanged. We have never paid for or written a review.',

  fees: {
    h2: 'What classes for teenagers cost',
    lede: 'Billed each month in US dollars, one price for every country apart from India, and the same whether a student is in First Year or Sixth. Nothing to pay to register, and no commitment for the year.',
    free: ['Real code with a real teacher', 'A suggested level and course', 'No card required'],
    group: ['Five to ten teenagers at one level', 'One teacher all year', 'Code reviewed every week', 'A certificate at the end'],
    one: ['A teacher for one student', 'Planned around exams', 'Right for fast movers and exam years']
  },

  faq: {
    eyebrow: 'Questions from teenagers and parents',
    h2: 'What Irish teenagers and their parents ask',
    items: [
      { q: 'What should a teenager learn first?', a: 'Python for most, because it is readable and leads straight into data and AI. Students who love design often start with the web and add Python soon after.' },
      { q: 'Is coding worth it if my teenager already uses ChatGPT?', a: 'Yes, more than ever. The CSO found 65% of internet users aged 16 to 29 had used generative AI. Knowing how to read and check what it produces is the skill that separates using AI from understanding it.' },
      { q: 'Does this count towards the Junior Cycle or the Leaving Cert?', a: 'No. Our classes build skills, not school credits. The Junior Cycle Profile of Achievement records outside learning only if the school chooses to comment on it.' },
      { q: 'Is Transition Year a good time to start?', a: 'It is one of the best. More than 62,000 students were in Transition Year in 2025/26, and many use the year for a real coding project.' },
      { q: 'Can a student in an Irish-medium school join?', a: 'Yes. Lessons are in English, and programming languages use English keywords whatever language a student learns in at school.' },
      { q: 'What about online safety?', a: 'Lessons are live with a named teacher, and students learn what not to paste into online tools. Webwise, the Department\'s online safety initiative, has good resources for families too.' },
      { q: 'Does my teenager need a powerful computer?', a: 'No. A laptop or desktop with a current browser and a steady connection is enough for almost every course.' },
      { q: 'How much are the classes?', a: 'A first class costs nothing. After that a group place is USD 100 a month and one-to-one lessons USD 150 a month, billed in US dollars, with no registration charge and no yearly contract.' },
      { q: 'When do classes happen?', a: 'On a weekday evening or at the weekend, at a regular hour agreed in the free class. Our teachers are five and a half hours ahead of Irish time in winter and four and a half in summer.' },
      { q: 'What happens after the form is sent?', a: 'Someone from our team phones at a suitable Irish time and books the free first class. Nothing is charged unless the student continues.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for teenagers in Ireland',
    lede: 'Pages for each stage of the secondary years.',
    items: [
      { href: '/junior-cycle-coding-short-course-help', label: 'Junior Cycle Coding help', p: 'The short course and its assessment.' },
      { href: '/transition-year-coding-course-ireland', label: 'Transition Year coding course', p: 'A year for a real project.' },
      { href: '/leaving-cert-computer-science-grinds-online', label: 'Leaving Cert Computer Science grinds', p: 'For students taking the subject.' },
      { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code, do not copy-paste', p: 'AI tools, used honestly.' },
      { href: '/best-coding-classes-for-kids-ireland', label: 'Best coding classes for kids in Ireland', p: 'For younger brothers and sisters.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' }
    ]
  },

  start: {
    h2: 'A free first class for a teenager',
    lede: 'Leave a number and we will call at a time that suits a family in Ireland. In the first class the student writes real code with a teacher, and leaves knowing which course and which level fit.',
    readFirst: 'Before booking, have a look at <a class="ag-inline-link" href="/how-we-teach">how lessons are taught</a>, the <a class="ag-inline-link" href="/courses">complete list of courses</a> and <a class="ag-inline-link" href="/student-labs">work our students have published</a>.',
    note: 'WhatsApp costs nothing from an Irish number and is usually the fastest route to us. The number is Indian, since our team is based in India; there is no Irish office.',
    formNote: 'No card and no commitment. One call to set up the class.'
  },

  footer: {
    cols: [
      { h4: 'Irish school years', links: [
        { href: '/junior-cycle-coding-short-course-help', label: 'Junior Cycle Coding help' },
        { href: '/transition-year-coding-course-ireland', label: 'Transition Year coding' },
        { href: '/leaving-cert-computer-science-grinds-online', label: 'LC Computer Science grinds' },
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' }
      ] },
      { h4: 'For teenagers', links: [
        { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code' },
        { href: '/ai-and-python-academy-for-girls-ireland', label: 'AI and Python for girls' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Coding for Irish secondary students'
  },

  personalityCss: `
.ag-root.ag-bti .ag-hero-grid { gap: clamp(1.15rem, 3vw, 2.65rem); }
.ag-root.ag-bti .ag-hero h1 { letter-spacing: -0.023em; }
.ag-root.ag-bti .ag-capsule { border-left-width: 5px; }
.ag-root.ag-bti .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-bti .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-bti .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-bti .ag-spec dt { letter-spacing: 0.14em; }
.ag-root.ag-bti .ag-slots { gap: 1.05rem; }
`,

  mustMention: ['429,653', '62,065', '56.2%', '36.8%', '7.1%', '53,097', '39.3%', 'Junior Cycle Year 1', '57%', 'programming code', 'in 2017', '74 schools with 15,778 students']
};
