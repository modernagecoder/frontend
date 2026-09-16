'use strict';
// Full stack software development course, Ireland (ag- door, Ireland cluster,
// Phase 2). Facts read at primary sources on 16 September 2026: CSO PxStat
// QLF55 (Information and Communication, 176,600 in Q2 2026; 169,200 in Q1 2026;
// 179,200 in Q2 2025; seasonally adjusted Q2 2026 173,500) and QES26 (division
// K62 computer programming and consultancy: 119,600 in Q2 2026, 116,500 in Q1
// 2026, 121,200 in Q2 2025), both from the Labour Force Survey Q2 2026 released
// 20 August 2026; CSO LFS Q1 2026 (Information and Communication down 20,300 or
// 10.7%, driven by division 62 at minus 16,200) used only as history, never as
// the current state; CSO Earnings and Labour Costs Q2 2026 preliminary
// (Information and Communication had the highest average hourly labour cost of
// any sector; 1,900 vacancies at a rate of 1.6%, against 2,600 and 2.2% in Q2
// 2025, with 30,000 vacancies nationally); SOLAS National Skills Bulletin
// October 2025 (software developers and engineers listed as a shortage; "full
// stack" among difficult-to-fill titles; 54,800 programmers and software
// developers employed in 2024, up 7,400, with almost 2,400 new employment
// permits; gaps in cyber security, cloud security, AI and DevOps; the caveat
// that automation may ease entry-level demand while shortages persist for
// senior roles; ICT occupations 139,000, 5.0% of the workforce, average annual
// growth 9.8%); European Commission Digital Decade 2025 country report (56.5%
// of ICT postings were software and applications developers and analysts; ICT
// specialists 6.3% of employment against a 2030 target of 226,000, needing
// about 8,700 more a year). Case study: the HSE's covid-tracker-backend-api
// repository (Fastify, PostgreSQL, Docker, MIT, archived 1 October 2020). The
// app repository's own metadata belongs to the app development page, so this
// page leads with the backend and the two-repository split. No euro figures
// anywhere near our USD fees. No job promises.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'FULL STACK', blurb: 'Front end, back end and database together, with an honest reading of what Irish labour market data does and does not say.' },
  slug: 'full-stack-software-development-course-ireland',
  code: 'fsi',
  accent: '#7C4A1C',
  accentRationale: 'Full stack, Ireland: a deep bronze from the solver, separated from both Irish greens and every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Full stack software development course, Ireland',
  title: 'Full Stack Software Development Course | Ireland',
  description: 'A full stack software development course for learners in Ireland: front end, back end, databases and deployment, built into real projects. First class free.',
  ogDescription: 'Three official sources give three different numbers for how many people write software in Ireland. Here is what each one counts, and what a full stack course should teach.',
  twitterDescription: 'Full stack development taught live online for learners in Ireland, with real projects. First class free.',
  pageName: 'Full Stack Software Development Course, Ireland',
  webPageDescription: 'A full stack software development course for learners in Ireland: what CSO and SOLAS data really shows about software work here, a public Irish codebase read end to end, and live online lessons building front end, back end and database together.',
  courseDescription: 'Live online full stack software development for learners in Ireland: HTML, CSS and JavaScript, React and TypeScript, server-side code, SQL databases, version control and deployment, built into finished projects.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'Full stack, Ireland',
  navLinks: [
    { href: '#numbers', label: 'Reading the numbers' },
    { href: '#demand', label: 'What is in demand' },
    { href: '#codebase', label: 'A public Irish stack' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Full stack &middot; Live online',
  h1: 'Full stack software development course in Ireland',
  lede: 'Ask how many people write software in Ireland and you can get three correct answers. The Central Statistics Office counts 176,600 people working in information and communication in the second quarter of 2026. Inside that, the division that is actually software, computer programming and consultancy, holds 119,600. SOLAS, counting the occupation rather than the sector, put programmers and software developers at 54,800 in 2024. Each number counts something different, and the difference is the kind of thing a full stack developer has to notice every day, because the same trap lives in every database and every dashboard. This page does two things: it reads Ireland\'s software numbers carefully, including the parts that are not flattering, and it sets out what a full stack course should actually teach, ending with a real Irish system whose code you can read this evening.',
  secondaryCta: { href: '#codebase', label: 'Read a real Irish stack' },
  wa: 'Hello Modern Age Coders, I am in Ireland and would like a free first class on full stack development.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; front end, back end and database in one course',
  spec: [
    ['For', 'Teens, students and adults'],
    ['Front end', 'HTML, CSS, JavaScript, React'],
    ['Back end', 'Server code and APIs'],
    ['Data', 'SQL databases, properly modelled'],
    ['Practice', 'Version control and deployment'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Full stack means being able to follow a request from a button in a browser to a row in a database and back. It is taught here as one continuous thing rather than two disconnected courses, on real projects, with version control and deployment from early on. Irish demand is real but not uniform: SOLAS lists software developers among its shortages and names full stack among difficult-to-fill roles, while CSO vacancy figures for the sector have fallen over the past year. We teach the skills and are honest about the market. Classes are live, in groups of five to ten or one to one; the first is free, then USD 100 a month in a group or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three routes through the stack',
    lede: 'One complete course, one framework-focused route and one for the browser side. Each card opens the syllabus.',
    items: [
      { course: 'full-stack-web-development-masterclass-college', code: 'STACK / 01', title: 'Full Stack Web Development', note: 'The whole path in one course: pages, server, database and deployment, built as one working system you can show.' },
      { course: 'mern-stack-development-masterclass-college', code: 'STACK / 02', title: 'MERN Stack Development', note: 'One widely used JavaScript stack learned properly, so a single language carries you from the browser to the data layer.' },
      { course: 'react-js-complete-masterclass-college', code: 'STACK / 03', title: 'React Masterclass', note: 'The front-end library most Irish job ads mention, taught with state and structure rather than copied components.' }
    ]
  },

  sections: [
    {
      id: 'numbers', tint: 'tint', eyebrow: 'Reading the numbers',
      h2: 'Three official counts of software work in Ireland',
      lede: 'All three of these are current and correct. Used carelessly, any of them will mislead you.',
      body: [
        { kind: 'table', caption: 'What each source counts', head: ['Figure', 'What it counts', 'Source'], rows: [
          ['176,600 in Q2 2026', 'Everyone in information and communication, a sector that includes publishing, broadcasting and telecoms as well as software', 'CSO table QLF55'],
          ['119,600 in Q2 2026', 'The division inside it for computer programming, consultancy and related activities', 'CSO table QES26'],
          ['54,800 in 2024', 'The occupation of programmer and software developer, wherever they work, including banks, hospitals and retailers', 'SOLAS National Skills Bulletin'],
          ['139,000 in 2024', 'All ICT occupations, 5.0% of the workforce, growing 9.8% a year on average since 2019', 'SOLAS National Skills Bulletin']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Trap 1: sector is not occupation', p: 'A developer at a bank is not in the information and communication sector, and a receptionist at a software company is. Sector and occupation counts answer different questions.' },
          { h3: 'Trap 2: quarters move', p: 'Information and communication employment was 169,200 in Q1 2026 and 176,600 in Q2, but 179,200 a year earlier. Up on the quarter, down on the year, and the seasonally adjusted Q2 figure is 173,500 again.' },
          { h3: 'Trap 3: vacancies are sector-wide', p: 'The CSO reported 1,900 vacancies in information and communication at the end of Q2 2026, a rate of 1.6%, down from 2,600 and 2.2% a year before. That is the whole sector, not developer jobs.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'There is recent history worth knowing too. In the first quarter of 2026 the CSO reported information and communication down 20,300, or 10.7%, the largest sectoral fall, driven by computer programming and consultancy. Employment rose again in the second quarter.',
            'Anyone selling a course by quoting only the good quarter, in either direction, is choosing their evidence. We would rather show you the series.'
          ],
          right: [
            'The sector does still carry the highest average hourly labour cost of any sector in Ireland, on the CSO\'s preliminary estimate for the second quarter of 2026. Labour cost is what employment costs an employer, not a wage, so we quote it as that and nothing more.',
            'Learning to read figures this way is not a detour from the course. It is the same care a developer needs when a dashboard says two teams shipped different amounts.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: CSO PxStat tables <a class="ag-inline-link" href="https://data.cso.ie/table/QLF55" rel="noopener" target="_blank">QLF55</a> and <a class="ag-inline-link" href="https://data.cso.ie/table/QES26" rel="noopener" target="_blank">QES26</a> from the <a class="ag-inline-link" href="https://www.cso.ie/en/releasesandpublications/ep/p-lfs/labourforcesurveyquarter22026/" rel="noopener" target="_blank">Labour Force Survey Q2 2026</a>; <a class="ag-inline-link" href="https://www.cso.ie/en/releasesandpublications/ep/p-lfs/labourforcesurveyquarter12026/employment/" rel="noopener" target="_blank">LFS Q1 2026</a>; <a class="ag-inline-link" href="https://www.cso.ie/en/releasesandpublications/ep/p-elcq/earningsandlabourcostsq12026finalq22026preliminaryestimates/" rel="noopener" target="_blank">CSO Earnings and Labour Costs, Q2 2026 preliminary</a>; <a class="ag-inline-link" href="https://a.storyblok.com/f/70398/x/893ebacfd9/national-skills-bulletin-2025.pdf" rel="noopener" target="_blank">SOLAS National Skills Bulletin, October 2025</a>.' }
      ]
    },
    {
      id: 'demand', tint: 'deep', eyebrow: 'What is in demand',
      h2: 'What official sources say employers are short of',
      lede: 'SOLAS surveys recruitment agencies and employers each year. Its 2025 bulletin is unusually specific, and unusually careful about the future.',
      body: [
        { kind: 'two',
          leftH3: 'The shortage list',
          left: [
            'The bulletin lists software developers and engineers among ICT shortage occupations. Its table of difficult-to-fill job titles, from a November 2024 survey, names "Software developers: C++, Python, Java, DevOps, full stack, front end".',
            'It also names where the gaps sit inside those roles: cyber security, cloud security, AI, and DevOps. Employment in the occupation grew by 7,400 in 2024 to 54,800, and almost 2,400 new employment permits were issued for software roles that year.'
          ],
          rightH3: 'The caveat, in their words',
          right: [
            'SOLAS does not promise this lasts unchanged. It writes that future demand "especially entry-level roles, may be eased somewhat due to advances in technology, particularly if the adoption of artificial intelligence and increased automation extends to small and medium-sized firms and across sectors."',
            'It then says shortages "especially for senior roles, will persist". Read together: the floor is rising, and the skills that make someone senior, judgement, systems thinking, the ability to review what a machine wrote, are what to aim at.'
          ] },
        { kind: 'table', mt: true, caption: 'Demand signals for software skills in Ireland', head: ['Signal', 'Figure', 'Source'], rows: [
          ['Share of Irish ICT job postings that were software and applications developers and analysts, 2024', '56.5%', 'European Commission Digital Decade report'],
          ['ICT specialists as a share of Irish employment, 2024', '6.3%, above the EU average of 5.0%', 'European Commission'],
          ['National 2030 target for ICT specialists', '226,000, about 9.6% of employment', 'European Commission, citing the national target'],
          ['Extra ICT specialists needed each year to reach it', 'About 8,700, a pace not yet achieved', 'European Commission']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://a.storyblok.com/f/70398/x/893ebacfd9/national-skills-bulletin-2025.pdf" rel="noopener" target="_blank">SOLAS National Skills Bulletin, October 2025</a>; <a class="ag-inline-link" href="https://enterprise.gov.ie/en/publications/publication-files/digital-decade-2025-ireland-country-report.pdf" rel="noopener" target="_blank">Digital Decade 2025 country report for Ireland</a>. We make no promise of employment, and nothing here is careers advice.' }
      ]
    },
    {
      id: 'codebase', tint: 'tint', eyebrow: 'A public Irish stack',
      h2: 'A real Irish system you can read tonight',
      lede: 'Most learners never see a complete production system. Ireland has one in the open: the HSE published the code behind the COVID Tracker service, and it is still readable today.',
      body: [
        { kind: 'table', caption: 'The HSE COVID Tracker backend repository, covid-tracker-backend-api', head: ['Aspect', 'What the repository shows'], rows: [
          ['Server', 'A Fastify server in JavaScript, package name contact-tracing-api'],
          ['Database', 'PostgreSQL, with Docker used to run it locally'],
          ['Extras', 'JSON Web Tokens for authentication, Swagger for API documentation, Jest for tests'],
          ['Licence', 'MIT'],
          ['Status', 'Archived by its owner on 1 October 2020, so read-only']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The first lesson is the shape. The client and the API live in two separate repositories, which is how most real systems are built: a mobile or web front end in one place, a server and database in another, speaking over HTTP.',
            'The second is the plumbing. Docker to run a database locally, tests in the repository, generated API documentation. None of this is advanced, and all of it is missing from most tutorial projects.'
          ],
          right: [
            'The third is honesty about time. Both repositories are archived, which means published and read-only, not maintained. Versions in them are from 2020. Reading old code well, and knowing what you would change now, is a real professional skill.',
            'Our students read parts of it, then build their own small version of the same shape: a front end, an API, a database, and tests that prove it works.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://github.com/HSEIreland/covid-tracker-backend-api" rel="noopener" target="_blank">HSEIreland/covid-tracker-backend-api</a> on GitHub, read 16 September 2026, including its README and package.json. We have no connection with the HSE. The mobile app\'s own repository is covered on our <a class="ag-inline-link" href="/app-development-course-ireland">app development page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs',
    h2: 'Five rungs across the stack',
    lede: 'Most learners take six to twelve months to reach the top rung, depending on hours. Each rung ends with something running.',
    table: { caption: 'From a page to a system', head: ['Rung', 'What you build'], rows: [
      ['1. The page', 'A real site in HTML and CSS, laid out and readable on a phone'],
      ['2. The behaviour', 'JavaScript that responds, validates and fetches'],
      ['3. The server', 'An API of your own, with routes, errors and documentation'],
      ['4. The data', 'A database designed properly, queried with SQL, not exported to spreadsheets'],
      ['5. The system', 'The pieces deployed together, with version control and tests']
    ] },
    left: { h3: 'Why both ends, not one', ps: [
      'Front-end-only learners get stuck the first time data is wrong; back-end-only learners cannot show anyone what they made. Crossing the join is what the word full stack means.',
      'How this fits with everything else is mapped on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'What employers ask about', ps: [
      'Not which course you took. What you built, why you chose that database, what broke, and what you did about it. Every project here is built so you can answer those questions.',
      'Students in Irish higher education can pair this with <a class="ag-inline-link" href="/coding-for-college-students-ireland">coding for college students</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses across the stack',
    lede: 'Grouped by layer. The free first class works out which layer you should start with.',
    bands: [
      { num: 'I', h3: 'The browser', sub: 'What the user touches', courses: [
        { code: 'STACK / FRONT / 01', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS for Beginners', blurb: 'Real pages, laid out and published.' },
        { code: 'STACK / FRONT / 02', slug: 'react-js-complete-masterclass-college', title: 'React Masterclass', blurb: 'Components and state, without cargo cult.' },
        { code: 'STACK / FRONT / 03', slug: 'complete-typescript-programming-masterclass-college', title: 'TypeScript Masterclass', blurb: 'Types that catch errors before users do.' }
      ] },
      { num: 'II', h3: 'The server and the data', sub: 'Where the work happens', courses: [
        { code: 'STACK / BACK / 01', slug: 'python-web-development-django-flask-course', title: 'Python Web Development with Django and Flask', blurb: 'Server-side Python, routes and templates.' },
        { code: 'STACK / BACK / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL Masterclass', blurb: 'Schemas, joins and queries that scale.' },
        { code: 'STACK / BACK / 03', slug: 'mern-stack-development-masterclass-college', title: 'MERN Stack Development', blurb: 'One JavaScript stack, end to end.' }
      ] },
      { num: 'III', h3: 'Shipping it', sub: 'The part tutorials skip', courses: [
        { code: 'STACK / SHIP / 01', slug: 'full-stack-web-development-masterclass-college', title: 'Full Stack Web Development', blurb: 'The complete system, built and deployed.' },
        { code: 'STACK / SHIP / 02', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Git and GitHub for Professionals', blurb: 'Branches, reviews and a history worth reading.' },
        { code: 'STACK / SHIP / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI Automation', blurb: 'Automating the repetitive parts of delivery.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Project weeks, not lecture weeks',
    lede: 'Lessons are live with teachers working from India, at a weekly hour fixed in Irish time. India holds one clock all year while Ireland keeps two, so the gap is four and a half hours in the Irish summer and five and a half in the winter. Most learners here take an evening slot and build between sessions.',
    slots: [
      { time: 'Weekday evening', l: 'The standard slot for working learners.' },
      { time: 'Weekend', l: 'Longer builds, when a feature needs finishing.' },
      { time: 'Daytime', l: 'For students and shift workers, often one to one.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'You build something small end to end and get a view of which rung to start on.' },
      { h3: 'Five to ten per group', p: 'Learners at one level, reviewing each other\'s code as teams do.' },
      { h3: 'One to one', p: 'For a specific project, a job move or an awkward schedule.' },
      { h3: 'Git from week one', p: 'Every project is versioned from the start, because that is how the work is actually done.' },
      { h3: 'Deployed, not just local', p: 'Projects go online where somebody else can use them, which is where the real bugs appear.' },
      { h3: 'AI with review', p: 'Tools are allowed once you can read the output, and every generated change is reviewed line by line.' }
    ]
  },

  projectsH2: 'Systems our students built and deployed',
  projectsLede: 'Four projects our students put online, front end and back end together. More sit on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Taken straight from Google, unedited: reviews written by the people who did the courses.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly price in US dollars, the same in every country outside India, covering any course on this page. Nothing to pay upfront, no contract for the year, and you can stop when a project is finished.',
    free: ['Something small built end to end', 'A clear view of the right rung', 'No card required'],
    group: ['Five to ten learners at one level', 'One teacher for the course', 'Code reviewed every week', 'A certificate on completion'],
    one: ['A teacher to yourself', 'Built around your own project', 'Good for career changers in a hurry']
  },

  faq: {
    eyebrow: 'Questions',
    h2: 'What learners in Ireland ask about full stack',
    items: [
      { q: 'What does full stack actually mean?', a: 'Being able to follow a request from the interface a person uses, through your server code, into a database and back again, and to work on any part of that path.' },
      { q: 'Is there still demand for developers in Ireland?', a: 'SOLAS lists software developers among its shortage occupations and names full stack among difficult-to-fill roles. At the same time CSO vacancies in the sector fell over the past year. Both are true; we would rather show you both.' },
      { q: 'Which stack should I learn?', a: 'The one you will finish projects in. JavaScript across the whole stack suits most beginners; Python with Django or Flask suits people heading towards data work.' },
      { q: 'How long until I can build a real application?', a: 'With a lesson a week and steady practice, most learners have a small system deployed within six months, and something worth showing in a portfolio in under a year.' },
      { q: 'Do I need a degree for this work?', a: 'Not necessarily, and we make no promises about employment. What employers examine is what you have built and whether you can explain your choices.' },
      { q: 'Can I see real Irish code?', a: 'Yes. The HSE published the COVID Tracker code under an MIT licence, and its backend repository shows a Fastify server with PostgreSQL. It is archived, so read it as a 2020 system.' },
      { q: 'Are AI coding tools used in the course?', a: 'Yes, once you can read code. Everything a tool generates is reviewed line by line, because you remain responsible for what you ship.' },
      { q: 'What does the course cost?', a: 'The first class is free, then USD 100 a month for a group place or USD 150 a month one to one, charged in US dollars, with no enrolment fee.' },
      { q: 'When do classes run?', a: 'Evenings, weekends or daytime by arrangement, at a weekly hour set in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.' },
      { q: 'What happens after I send the form?', a: 'We call at a reasonable Irish hour and arrange the free class. You pay nothing unless you continue.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Neighbouring subjects and audiences.',
    items: [
      { href: '/app-development-course-ireland', label: 'App development course in Ireland', p: 'The mobile side of the same system.' },
      { href: '/coding-for-college-students-ireland', label: 'Coding for college students in Ireland', p: 'For students building a portfolio.' },
      { href: '/best-coding-classes-for-adults-ireland', label: 'Best coding classes for adults in Ireland', p: 'Starting from zero as an adult.' },
      { href: '/java-classes-ireland', label: 'Java classes in Ireland', p: 'The other big back-end language.' },
      { href: '/data-science-course-ireland', label: 'Data science course in Ireland', p: 'When the data becomes the job.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' }
    ]
  },

  start: {
    h2: 'Build something end to end in a free class',
    lede: 'Leave a number and we will ring at a time that suits you in Ireland. In the free class you build a small piece of a real system with a teacher, and get an honest view of how long the rest will take.',
    readFirst: 'If you would rather look around first: <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, the <a class="ag-inline-link" href="/courses">course syllabuses</a>, and <a class="ag-inline-link" href="/student-labs">what our students have deployed</a>.',
    note: 'WhatsApp is free from an Irish number and usually gets the fastest reply. Our number is Indian, because the team works from India, and we have no premises in Ireland.',
    formNote: 'No card details, no obligation, one phone call.'
  },

  footer: {
    cols: [
      { h4: 'Build', links: [
        { href: '/app-development-course-ireland', label: 'App development' },
        { href: '/data-science-course-ireland', label: 'Data science' },
        { href: '/java-classes-ireland', label: 'Java classes' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Ireland', links: [
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/best-coding-classes-for-adults-ireland', label: 'Coding for adults' },
        { href: '/coding-for-college-students-ireland', label: 'Coding for college students' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Front end, back end and database, taught together'
  },

  personalityCss: `
.ag-root.ag-fsi .ag-hero-grid { gap: clamp(1.18rem, 3.05vw, 2.68rem); }
.ag-root.ag-fsi .ag-hero h1 { letter-spacing: -0.0205em; }
.ag-root.ag-fsi .ag-capsule { border-left-width: 6px; }
.ag-root.ag-fsi .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-fsi .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-fsi .ag-band-head h3 { letter-spacing: -0.0045em; }
.ag-root.ag-fsi .ag-spec dt { letter-spacing: 0.118em; }
.ag-root.ag-fsi .ag-slots { gap: 1.16rem; }
`,

  mustMention: ['176,600', '119,600', '54,800', '139,000', '169,200', '179,200', '1,900', '56.5%', '226,000', '8,700', 'full stack, front end', 'Fastify', 'PostgreSQL', 'MIT']
};
