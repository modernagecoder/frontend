'use strict';
// Transition Year coding course, Ireland (ag- door, Ireland cluster, Phase 2).
// Facts read at primary sources on 16 September 2026: the NCCA Transition Year
// Programme Statement (published August 2024, for all schools from September
// 2025; "a one-year optional programme available to all post-primary
// schools"; four Student Dimensions; schools design their own programme;
// externally provided learning "within the context of the school's TY
// programme"; TY not to be used to spread Leaving Cert specifications over
// three years; "both as a user and a creator"; work placement equivalent to two
// to four weeks; portfolio, reflection, school reporting). The Department's
// 2024 press release (replaces the 1994 guidelines; 99% of schools offer TY;
// piloted September 1974, open to all since September 1994). Education
// Indicators for Ireland, June 2025 (B.39 and B.40, 2019 to 2023; "2023 means
// September 2023"; the rate "may include new arrivals"). Introduction deck,
// February 2024 (universal access "from a date to be identified"). Inspectorate
// Post-primary insights 2024 ("Transition Year Computer Science Sampling").
// DCU ComputeTY 2026 and 2024 pages. Circular 0018/2026 for the 2026/27 breaks.
// No grade or points promises; never LCCS early.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'TRANSITION YEAR', blurb: 'A coding project that lasts the whole of Transition Year, fitted to the new Programme Statement and to your school\'s own TY plan.' },
  slug: 'transition-year-coding-course-ireland',
  code: 'tyc',
  accent: '#732D39',
  accentRationale: 'Transition Year, Ireland: a deep claret from the solver, separated from both Irish greens and every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Transition Year coding course, Ireland',
  title: 'Transition Year Coding Course in Ireland | Live Online',
  description: 'A Transition Year coding course for students in Ireland: Python, apps and AI across the whole TY year, fitted to your school\'s programme. First class free.',
  ogDescription: 'The new Transition Year Programme Statement asks schools to help students become skilled with digital technology "both as a user and a creator". A year-long coding project does exactly that.',
  twitterDescription: 'A whole-year coding project for Transition Year students in Ireland, live online. First class free.',
  pageName: 'Transition Year Coding Course in Ireland',
  webPageDescription: 'A live online coding course for Transition Year students in Ireland, set against the Transition Year Programme Statement of 2024: what the statement asks, how outside learning fits a school\'s TY programme, and a year-long project plan.',
  courseDescription: 'A year-long live online coding course for Transition Year students in Ireland: Python, apps, websites, data and AI, built into one finished project for the TY portfolio.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'Transition Year coding, Ireland',
  navLinks: [
    { href: '#statement', label: 'The Programme Statement' },
    { href: '#sampling', label: 'Sampling, not a head start' },
    { href: '#numbers', label: 'TY in numbers' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Transition Year &middot; A project for the whole year',
  h1: 'Transition Year coding course in Ireland',
  lede: 'Transition Year has a new rulebook. From September 2025 every Irish school has been working to the Transition Year Programme Statement, published in August 2024 to replace guidelines that had stood since 1994. It describes TY as a standalone year built on four Student Dimensions, lets each school design its own programme, and asks that students become more skilled with digital technologies "both as a user and a creator". That last phrase is the whole case for coding in TY. A student who spends the year building one real thing, an app, a website with its own data, or a small AI model, finishes with something to show in the portfolio, a clear sense of whether computing is for them, and the habit of sticking with a hard problem for months. This page explains what the statement asks, how outside learning has to fit a school\'s own programme, what the national numbers show, and how a live online course can run alongside the TY timetable from September to May.',
  secondaryCta: { href: '#statement', label: 'What the statement asks' },
  wa: 'Hello Modern Age Coders, I am in Transition Year in Ireland and would like a free first coding class.',
  heroNote: 'Teaching live online since 2020 &middot; more than 10,000 students &middot; one project, finished by May',
  spec: [
    ['For', 'Transition Year students'],
    ['Runs', 'September to May'],
    ['Builds', 'One finished project'],
    ['Learns', 'Python, apps, web, data, AI'],
    ['Fits', 'Your school\'s TY programme'],
    ['Group', 'Five to ten, or one to one'],
    ['Hours', 'Evenings, weekends or by arrangement'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'A good Transition Year coding course runs for the whole year and ends with one finished project the student can show and explain. The Transition Year Programme Statement, in all Irish schools since September 2025, lets each school design its own TY, allows externally provided learning only within the context of the school\'s TY programme, and says TY should not be used to start Leaving Cert courses early. So the right course is exploration, not a head start: Python first, then an app, website, data project or AI model built to the end. Modern Age Coders teaches TY students live online in groups of five to ten or one to one. The first class costs nothing, and the course is then USD 100 a month in a group or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three year-long projects for Transition Year',
    lede: 'Each of these can carry a student from September to a finished piece of work in May. The card opens the full syllabus.',
    items: [
      { course: 'complete-app-development-masterclass-for-teens', code: 'TY / 01', title: 'App Development for Teens', note: 'A phone app designed for a real user, built across the year and released to friends and family before the TY showcase.' },
      { course: 'ai-ml-masterclass-teens', code: 'TY / 02', title: 'AI and Machine Learning for Teens', note: 'A small model trained on data the student collects, tested honestly, and explained in plain words to a room of parents.' },
      { course: 'data-science-course-for-teens-python-data', code: 'TY / 03', title: 'Data Science for Teens', note: 'An investigation of an Irish open dataset, from a question in October to charts and a written finding in the spring.' }
    ]
  },

  sections: [
    {
      id: 'statement', tint: 'tint', eyebrow: 'The Programme Statement',
      h2: 'What the Transition Year Programme Statement asks of schools',
      lede: 'The statement is short and readable, and it is the document a TY coordinator will work from. The points that matter for coding are these.',
      body: [
        { kind: 'table', caption: 'The Transition Year Programme Statement (NCCA, published August 2024)', head: ['Point', 'What the statement says', 'Where'], rows: [
          ['What TY is', 'A one-year optional programme available to all post-primary schools, standalone within senior cycle', 'Page 7'],
          ['In schools from', 'September 2025, replacing the 1994 Transition Year Guidelines for Schools', 'Cover; Department press release'],
          ['Foundations', 'Four Student Dimensions: Personal Growth, Being a Learner, Civic and Community Engagement, and Career Exploration', 'Page 11'],
          ['Who designs it', 'Each school, with autonomy to suit its own culture, identity and context', 'Page 16'],
          ['Placements', 'Work and community placements amounting to the equivalent of two to four weeks', 'Page 19'],
          ['Reporting', 'Three elements: the student\'s TY portfolio, student reflection and school reporting', 'Page 23']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A user and a creator',
          left: [
            'Under Being a Learner, the statement lists "Becoming more skilled with digital technologies, both as a user and a creator." Most teenagers are already expert users. Coding is how they become creators.',
            'Under Personal Growth it suggests "Individual tasks and projects, involving digital and non-digital skills to enable self-expression." A year-long coding project is one of the clearest examples there is.'
          ],
          rightH3: 'Outside learning, inside the school plan',
          right: [
            'The statement allows for students taking part in "externally provided learning experiences", but "once it is within the context of the school\'s TY programme". It also mentions short certified courses and micro-credentials among Career Exploration experiences.',
            'So the first step is a conversation with the school\'s TY coordinator. We are happy to describe the course in writing for a school, and we do not promise that any school will count it.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://curriculumonline.ie/getmedia/5849acbf-0326-487a-beec-3db6b5878470/TY-Programme-Statement-ENG-INT.pdf" rel="noopener" target="_blank">Transition Year Programme Statement (NCCA, 2024)</a>; <a class="ag-inline-link" href="https://www.gov.ie/en/department-of-education/press-releases/minister-foley-welcomes-publication-of-12-new-and-revised-leaving-certificate-subjects-and-senior-cycle-programmes/" rel="noopener" target="_blank">Department of Education press release, 2024</a>; <a class="ag-inline-link" href="https://www.curriculumonline.ie/senior-cycle/transition-year/" rel="noopener" target="_blank">Curriculum Online, Transition Year</a>.' }
      ]
    },
    {
      id: 'sampling', tint: 'deep', eyebrow: 'Sampling, not a head start',
      h2: 'Why a TY coding course should not be the Leaving Cert started early',
      lede: 'The statement is explicit on this, and it is good advice. TY is for finding out, not for getting a year ahead.',
      body: [
        { kind: 'two',
          left: [
            'The statement says TY "should not be used, for example, as a way to explicitly spread leaving certificate subject specification over three years rather than the two years of 5th and 6th year, for which these curricula were designed."',
            'So our TY course does not teach the Leaving Certificate Computer Science specification. It teaches programming and building for their own sake, which is also the best preparation for anyone who later chooses the subject.'
          ],
          right: [
            'The Department\'s Inspectorate, reporting on its 2024 evaluations, found that TY programmes "often included digital subjects to help inform Leaving Certificate subject choices", and listed "Transition Year Computer Science Sampling" among the digital subjects it observed.',
            'That is the right use of the year: try computing properly, then decide. Students who go on to take the subject can find help on our <a class="ag-inline-link" href="/leaving-cert-computer-science-grinds-online">Leaving Cert Computer Science grinds</a> page.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Try it for real', p: 'A student who has built something over months knows far more about whether they like computing than one who sat through a taster afternoon.' },
          { h3: 'Decide with evidence', p: 'By spring the student can say what they enjoyed, what they found hard and what they would like to study next, which makes Fifth Year subject choices easier.' },
          { h3: 'Keep the record', p: 'Plans, screenshots, test results and reflections go into the TY portfolio as the year goes on, not in a rush at the end.' }
        ] }
      ]
    },
    {
      id: 'numbers', tint: 'tint', eyebrow: 'TY in numbers',
      h2: 'Transition Year in numbers, and a lesson in reading them',
      lede: 'Transition Year was first piloted in September 1974 and opened to all post-primary schools in September 1994. Today virtually every school offers it: 99%, according to the Department. The Department\'s Education Indicators give the recent trend.',
      body: [
        { kind: 'table', caption: 'Students doing Transition Year, Education Indicators for Ireland (June 2025), indicators B.39 and B.40', head: ['Year', 'Students in TY', 'As % of the previous Third Year'], rows: [
          ['2019', '48,268', '74.0%'],
          ['2020', '47,544', '72.9%'],
          ['2021', '48,025', '73.8%'],
          ['2022', '54,927', '79.2%'],
          ['2023', '58,703', '80.3%']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Trap 1: which year?', p: 'The report says "2023 means September 2023". So its 2023 row is the 2023/24 school year, and anyone who reads it as the year students sat the Junior Cycle is out by one.' },
          { h3: 'Trap 2: the denominator', p: 'The rate divides TY students by the previous year\'s Third Year, and the report warns it "may include new arrivals into the system", so it can run slightly above the true share of students moving straight into TY.' },
          { h3: 'Trap 3: percent or points?', p: 'From 2019 to 2023 the number in TY rose by about 21.6%, while the rate rose by 6.3 percentage points. Both are true. A headline that mixes the two up is wrong by a factor of three.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'This is a first TY data project in miniature. Students load the table in Python, compute both kinds of change, and write one honest sentence about the trend that a reader could not misunderstand.'
          ],
          right: [
            'The policy picture is still moving. The Department has committed to universal access to TY, meaning every student in every school could choose it, "from a date to be identified". We found no date announced yet.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://assets.gov.ie/static/documents/09fe3ad4/2025_Report_Education_Indicators_for_Ireland.pdf" rel="noopener" target="_blank">Education Indicators for Ireland, June 2025</a>; <a class="ag-inline-link" href="https://assets.gov.ie/292927/15cfebd5-51a6-431c-b713-6bfe5bc9984b.pdf" rel="noopener" target="_blank">Introduction of the new Programme Statement, February 2024</a>; <a class="ag-inline-link" href="https://www.gov.ie/en/department-of-education/publications/post-primary-insights-2024/" rel="noopener" target="_blank">Inspectorate, Post-primary insights 2024</a>. The 21.6% and 6.3 points are our own arithmetic on the table.' }
      ]
    },
    {
      id: 'camp', tint: '', eyebrow: 'A week or a year',
      h2: 'A coding week at university, and a coding year at home',
      lede: 'Some Irish universities run excellent short programmes for TY students. They and a year-long course do different jobs.',
      body: [
        { kind: 'three', cells: [
          { h3: 'ComputeTY at DCU', p: 'Dublin City University\'s School of Computing runs ComputeTY, a week-long coding camp on its Glasnevin campus. It reached its 21st year in 2026, has introduced more than 5,000 young people to computing, and welcomed almost 70 students that year.' },
          { h3: 'What it teaches', p: 'DCU describes interactive Python workshops and lab sessions guided by its own Computing students, with awards for Python programming and micro:bit programming. DCU says places are allocated by school.' },
          { h3: 'How the two fit', p: 'If a school offers a place, a student should take it: a week on a campus is a wonderful taster. A year-long course is different, a single project carried from September to May with the same teacher.' }
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.dcu.ie/engineeringandcomputing/news/2026/apr/computety-coding-camp-dcu-inspires-future-tech-talent" rel="noopener" target="_blank">DCU, ComputeTY Coding Camp 2026</a> and <a class="ag-inline-link" href="https://www.dcu.ie/computing/computety" rel="noopener" target="_blank">DCU School of Computing, ComputeTY</a>, read 16 September 2026. We have no connection with DCU.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The TY year',
    h2: 'A project plan from September to May',
    lede: 'Set against the 2026/27 school calendar fixed by Circular 0018/2026. Each school\'s TY programme has its own rhythm, so the plan bends around trips, placements and events.',
    table: { caption: 'A year-long TY coding project, 2026/27', head: ['When', 'Stage', 'The student'], rows: [
      ['September to the October mid-term', '1. Python, quickly', 'Writes and fixes short programs every week'],
      ['After the mid-term (schools close 26 to 30 October 2026) to Christmas', '2. A first small build', 'Finishes a mini website or game and shows it to the group'],
      ['From 6 January 2027 to the February mid-term', '3. Choosing the big project', 'Picks an app, a data investigation or an AI model, with a real user in mind'],
      ['To the end of the spring term on 19 March 2027', '4. Build and test', 'Builds it, tests it with real people and keeps a log of changes'],
      ['From 5 April 2027 to May', '5. Show and reflect', 'Presents the project and writes the portfolio reflection']
    ] },
    left: { h3: 'Why a year, not a week', ps: [
      'The things a TY student learns from a long project, planning, getting stuck, starting a part again, finishing, simply cannot happen in a week. That is also what employers and colleges mean by experience.',
      'Where each skill leads after TY is laid out stage by stage on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Around placements and trips', ps: [
      'TY is full of good interruptions: two to four weeks of placements, trips, musicals and mini-companies. Lessons pause when they need to and the project plan moves with them.',
      'A work placement in a technology company is a natural partner to the project; the student will understand far more of what they see.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses that suit Transition Year',
    lede: 'Grouped by the kind of project a student wants to finish. The free first class helps a student pick a course and a starting level.',
    bands: [
      { num: 'I', h3: 'Make something people use', sub: 'Apps and websites', courses: [
        { code: 'TY / MAKE / 01', slug: 'complete-app-development-masterclass-for-teens', title: 'App Development for Teens', blurb: 'A phone app, from a paper sketch to real users.' },
        { code: 'TY / MAKE / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full Stack Web Development for Teens', blurb: 'A site that stores and serves its own data.' },
        { code: 'TY / MAKE / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'Every change saved, so the portfolio shows the journey.' }
      ] },
      { num: 'II', h3: 'Find something out', sub: 'Data and AI', courses: [
        { code: 'TY / FIND / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'An Irish dataset, a question and an honest answer.' },
        { code: 'TY / FIND / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'A model trained on the student\'s own data.' },
        { code: 'TY / FIND / 03', slug: 'teens-ai-tools-mastery-course', title: 'AI Tools for Teens', blurb: 'Using AI tools with judgement, for thirteen and up.' }
      ] },
      { num: 'III', h3: 'Go deeper into code', sub: 'For students who love the puzzle', courses: [
        { code: 'TY / DEEP / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The language under almost every TY project here.' },
        { code: 'TY / DEEP / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving for Teens', blurb: 'Algorithms for students who enjoy hard puzzles.' },
        { code: 'TY / DEEP / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'A typed language, for a second way of thinking.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Weekly lessons that fit around a busy TY',
    lede: 'Lessons are live, with a teacher in India at a set time in Irish time. India never moves its clocks, so our teachers are four and a half hours ahead while Ireland is on summer time and five and a half ahead after the clocks go back in October. TY students often have more flexible days than other years, so there is more choice of slot.',
    slots: [
      { time: 'Weekday evening', l: 'The usual choice, Irish time, after the school day.' },
      { time: 'Weekend', l: 'Longer sessions when a project needs a push.' },
      { time: 'By arrangement', l: 'Where a school fits the class into its own TY timetable.' }
    ],
    cells: [
      { h3: 'The first class is on us', p: 'The student writes real code with a teacher, talks about project ideas, and gets a suggested course and level.' },
      { h3: 'Five to ten per group', p: 'TY students and others of the same level, sharing progress and testing each other\'s projects.' },
      { h3: 'One to one', p: 'For a student with a very particular project, or a timetable that will not fit a group.' },
      { h3: 'A log for the portfolio', p: 'Each week the student notes what they built and what went wrong, which becomes the portfolio reflection.' },
      { h3: 'A letter for the school', p: 'On request we describe the course in writing for a TY coordinator; the school decides how it fits.' },
      { h3: 'A showcase at the end', p: 'The finished project is presented to the group and can be shown at the school\'s TY events.' }
    ]
  },

  projectsH2: 'Finished projects by our students',
  projectsLede: 'Four projects that our students built and published; the kind of work a TY year can end with. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews exactly as families and students posted them on Google. Nobody was paid or prompted to write one.',

  fees: {
    h2: 'Fees for the TY course',
    lede: 'Paid monthly in US dollars at one rate for every country outside India. There is nothing to pay upfront for the year, no enrolment charge, and a student can stop at the end of any month if their TY plans change.',
    free: ['Real code and a talk about project ideas', 'A suggested course and level', 'No card taken'],
    group: ['Five to ten students at one level', 'The same teacher for the year', 'Project checked every week', 'A certificate when the course is complete'],
    one: ['A teacher for one student', 'Built around an unusual project or timetable', 'Flexible around placements']
  },

  faq: {
    eyebrow: 'Questions about TY',
    h2: 'What TY students, parents and coordinators ask',
    items: [
      { q: 'Does the new Programme Statement allow outside courses in TY?', a: 'It says students who wish to take part in externally provided learning could be accommodated, but only within the context of the school\'s TY programme. Each school decides, so talk to the TY coordinator first.' },
      { q: 'Will this course give my child a head start on Leaving Cert Computer Science?', a: 'It is not designed to. The statement says TY should not be used to spread Leaving Cert specifications over three years. The course teaches programming and building, which helps any later choice without teaching the syllabus early.' },
      { q: 'What will my child have at the end of the year?', a: 'One finished project, such as an app, a website with its own data or a small AI model, plus a log and a written reflection that can go into the TY portfolio.' },
      { q: 'How many students do Transition Year?', a: 'The Department\'s Education Indicators report 58,703 students in TY in 2023/24, which was 80.3% of the previous year\'s Third Year.' },
      { q: 'Is ComputeTY at DCU the same kind of thing?', a: 'No. ComputeTY is a week-long camp on DCU\'s campus with places allocated by school. It is an excellent taster; a year-long course is a longer project with the same teacher.' },
      { q: 'What about work placement weeks?', a: 'Lessons pause or continue as the family prefers. The statement suggests placements equivalent to two to four weeks, and the project plan is built around them.' },
      { q: 'Does my child need to have coded before?', a: 'No. The first months cover Python from the start, and students with club experience begin further on.' },
      { q: 'How much does the TY course cost?', a: 'The first class is free. After that a group place is USD 100 a month and one-to-one lessons are USD 150 a month, charged in US dollars, with no upfront payment for the year.' },
      { q: 'What times are lessons?', a: 'A weekday evening or a weekend slot chosen in the free class, or a time a school arranges. Our teachers are four and a half hours ahead of Ireland in summer and five and a half in winter.' },
      { q: 'What happens after we fill in the form?', a: 'We call back at a reasonable hour in Ireland to arrange the free first class. There is no charge unless the student decides to go on.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Before and after Transition Year',
    lede: 'Pages for the years either side of TY.',
    items: [
      { href: '/best-coding-classes-for-teens-ireland', label: 'Best coding classes for teens in Ireland', p: 'The whole secondary route.' },
      { href: '/junior-cycle-coding-short-course-help', label: 'Junior Cycle Coding help', p: 'For the years before TY.' },
      { href: '/leaving-cert-computer-science-grinds-online', label: 'Leaving Cert Computer Science grinds', p: 'For students who choose the subject.' },
      { href: '/after-coderdojo-next-step-coding-ireland', label: 'After CoderDojo', p: 'For TY students who started at a club.' },
      { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code, do not copy-paste', p: 'Using AI help without losing the learning.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' }
    ]
  },

  start: {
    h2: 'Start the TY project with a free class',
    lede: 'Leave a number and we will phone at a time that suits you in Ireland. In the free class the student writes some code, talks through project ideas with a teacher, and leaves with a plan for the year.',
    readFirst: 'Want to see more before you decide? There is a page on <a class="ag-inline-link" href="/how-we-teach">the way our teachers work</a>, a syllabus for <a class="ag-inline-link" href="/courses">each of our courses</a>, and a gallery of <a class="ag-inline-link" href="/student-labs">projects our students finished</a>.',
    note: 'You can also message us on WhatsApp, which is free from an Irish mobile and often quickest. The number is an Indian one because our teachers and team are in India; we have no premises in Ireland.',
    formNote: 'No card and nothing to sign. One call to book the class.'
  },

  footer: {
    cols: [
      { h4: 'Senior cycle', links: [
        { href: '/leaving-cert-computer-science-grinds-online', label: 'LC Computer Science grinds' },
        { href: '/best-coding-classes-for-teens-ireland', label: 'Coding for teens, Ireland' },
        { href: '/junior-cycle-coding-short-course-help', label: 'Junior Cycle Coding help' },
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' }
      ] },
      { h4: 'Projects', links: [
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'A coding year for Irish Transition Year students'
  },

  personalityCss: `
.ag-root.ag-tyc .ag-hero-grid { gap: clamp(1.1rem, 3.2vw, 2.8rem); }
.ag-root.ag-tyc .ag-hero h1 { letter-spacing: -0.021em; }
.ag-root.ag-tyc .ag-capsule { border-left-width: 7px; }
.ag-root.ag-tyc .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-tyc .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-tyc .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-tyc .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-tyc .ag-slots { gap: 1.2rem; }
`,

  mustMention: ['August 2024', 'September 2025', 'Personal Growth', 'Being a Learner', 'Civic and Community Engagement', 'Career Exploration', 'both as a user and a creator', 'within the context of the school', '58,703', '80.3%', 'Transition Year Computer Science Sampling', 'ComputeTY', 'September 1974']
};
