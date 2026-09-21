'use strict';
// Coding before a degree apprenticeship, UK (ag- age and career door; UK cluster Phase 3). England-specific.
// Sources, read raw on 21 September 2026:
//  - gov.uk, Become an apprentice (guide): employee "earning a wage and getting holiday pay"; "get time for
//    training and study related to your role (at least 20% of your normal working hours)"; "Apprenticeships can
//    take from 8 months to 6 years to complete, depending on the type and level of the apprenticeship."; levels
//    table (Intermediate 2, Advanced 3, Higher 4 to 7, Degree 6 and 7, "Bachelor's or master's degree"); to start:
//    16 or over, living in England, not in full-time education; "You can apply for an apprenticeship while you're
//    still at school but you'll need to be 16 or over by the end of the summer holidays to start the
//    apprenticeship."; Scotland, Wales and Northern Ireland handled by different organisations. gov.uk, Apply for
//    an apprenticeship: "You can have a previous qualification, like a degree, and still start an apprenticeship."
//  - Skills England, Digital and technology solutions professional (ST0119), read from the standard's data
//    endpoint behind the standard page (https://skillsengland.education.gov.uk/api/apprenticeshipstandards/st0119):
//    level 6, integrated degree, version 1.2 from 1 September 2023, typical duration 48 months, six options
//    (software engineering, IT consultant, business analyst, cyber security, computing data analyst, network
//    engineering professional), typical job titles, professional recognition British Computer Society Registered
//    IT Technician (RITTech); KSB statements quoted verbatim. Software developer (ST0116): level 4, typical
//    duration 24 months, version 1.2, job titles web, application, mobile application and software developer.
//    Funding bands omitted (no pound figures).
//  - DfE, Apprenticeships 2024/25 (Explore education statistics, full-year final data first published
//    November 2025): 353,500 starts, up 4.1%; levels 6 and 7 at 60,350 (17.1% of starts), from 50,110; 26,780 at
//    level 6 and 33,560 at level 7 (published separately; never summed on the page); under-19s 21.2% (74,990),
//    from 23.2%; 51.3% aged 25 and over; level 7 growth linked to funding limited from January 2026 to people
//    aged 16 to 21 (and care leavers or EHCP holders under 25).
//  - gov.uk, Foundation apprenticeships toolkit, published 2 September 2026: entry-level paid jobs for 16 to 21
//    year olds (22 to 24 in stated circumstances), "No prior qualifications or experience are required."; six
//    sectors including digital; typical duration 8 months, minimum 187 hours off-the-job; software and data
//    foundation apprenticeship purpose and included occupations; recognition of prior learning line.
//  - findapprenticeshiptraining returned HTTP 403 (not circumvented); a sample vacancy had closed, so no
//    vacancy is described.
// Spine: in a degree apprenticeship the employer is the admissions office, and the standard is published. A
// student in England can read exactly what the level 6 standard will ask ("Initiate, design, code, test and
// debug a software component...") and arrive at selection already able to do the first of it. No claims about
// how any employer selects; never help with applications, online tests, NEA or T Level assessments.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'DEGREE APPRENTICESHIP', blurb: 'For students in England aiming at a software degree apprenticeship: how the route works, what the standard asks, and what to learn first.' },
  slug: 'coding-before-a-degree-apprenticeship-uk',
  code: 'dap',
  accent: '#5D3432',
  accentRationale: 'Coding before a degree apprenticeship: a brick red-brown from the solver (8.51:1 on every paper tint, dE 8.4 from the nearest used accent), practical and workmanlike',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Coding before a degree apprenticeship',
  title: 'Coding Before a Degree Apprenticeship, UK | Live Lessons',
  description: 'Preparing for a software degree apprenticeship in England: how the route works, what the level 6 standard asks, and the coding to learn first. First lesson free.',
  ogDescription: 'A degree apprenticeship is a job first: the employer decides who starts. The level 6 standard is published, so you can learn its first skills before you apply.',
  twitterDescription: 'Aiming at a software degree apprenticeship in England? Read the standard, learn to code, finish a project. Live lessons, first one free.',
  pageName: 'Coding Before a Degree Apprenticeship',
  webPageDescription: 'Live online coding lessons for students in England preparing for a software degree apprenticeship, with the gov.uk rules, the Skills England standard and DfE apprenticeship statistics.',
  courseDescription: 'Live online coding for students preparing for degree apprenticeships: Python or Java, a finished project, version control, SQL and data, and explaining your work, never application or assessment help.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Before a degree apprenticeship',
  navLinks: [
    { href: '#route', label: 'How the route works' },
    { href: '#standard', label: 'The standard' },
    { href: '#numbers', label: 'The numbers' },
    { href: '#foundation', label: 'Not ready yet' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Year 12, Year 13 and college &middot; Software routes',
  h1: 'Coding before a degree apprenticeship',
  lede: 'A degree apprenticeship is a job first and a degree alongside it. On gov.uk\'s own description, an apprentice is an employee "earning a wage and getting holiday pay", with time for training and study of at least 20% of their normal working hours, and degree apprenticeships sit at levels 6 and 7, the equivalent of a bachelor\'s or master\'s degree. That changes who decides. There is no admissions tutor reading a personal statement: an employer is hiring. What makes an apprenticeship unusual, compared with a university place, is that the job is described in public before you apply. Skills England publishes the Digital and technology solutions professional standard, the level 6 integrated degree with a software engineering option, down to the individual skills it assesses, including "Initiate, design, code, test and debug a software component for a digital and technology solution." This page is for students in England in Year 12 or 13, or finishing a college course, who want to reach that point already able to code, with a finished project to talk about.',
  secondaryCta: { href: '#standard', label: 'What the standard asks' },
  wa: 'Hello Modern Age Coders, I am preparing for a degree apprenticeship in England and would like a free first coding lesson.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; projects you can explain to an employer',
  spec: [
    ['The route', 'A paid job plus a degree'],
    ['Training time', 'At least 20% of working hours'],
    ['Degree level', 'Levels 6 and 7'],
    ['Software standard', 'Level 6, typical 48 months'],
    ['Start age', '16 or over, living in England'],
    ['We teach', 'Coding, projects, Git, SQL'],
    ['We never do', 'Applications, tests, NEA or T Level work'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'In England, a degree apprenticeship is a paid job with training worth at least 20% of working hours, leading to a qualification at level 6 or 7, the equivalent of a bachelor\'s or master\'s degree. You must be 16 or over, living in England and not in full-time education to start, though you can apply while still at school. The employer decides who is taken on. For software roles, the Skills England Digital and technology solutions professional standard is a level 6 integrated degree with a typical duration of 48 months and a software engineering option, and it publishes the skills it assesses. In 2024/25 there were 60,350 apprenticeship starts at levels 6 and 7 in England. Modern Age Coders teaches students preparing for this route to code properly, finish a project and explain it, in live online lessons. We never write applications, sit online tests or touch NEA or T Level assessments. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses to start with',
    lede: 'A first language taken seriously, the problem solving behind technical questions, and a real project. Each card opens the full syllabus.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'DAP / 01', title: 'Python for Teens', note: 'A complete route through Python, to the point of writing, testing and debugging real programs.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'DAP / 02', title: 'Problem Solving and DSA', note: 'Breaking problems down and choosing data structures, the thinking under any technical task.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'DAP / 03', title: 'Full Stack Web Development', note: 'A complete application, front to back, to show and explain to an employer.' }
    ]
  },

  sections: [
    {
      id: 'route', tint: 'tint', eyebrow: 'How the route works',
      h2: 'A job first, a degree alongside',
      lede: 'The rules for England, from gov.uk\'s guide to becoming an apprentice. Scotland, Wales and Northern Ireland run apprenticeships through different organisations.',
      body: [
        { kind: 'table', caption: 'Apprenticeship levels in England, as gov.uk lists them', head: ['Name', 'Level', 'Equivalent educational level'], rows: [
          ['Intermediate', '2', 'GCSE'],
          ['Advanced', '3', 'A level'],
          ['Higher', '4, 5, 6 and 7', 'Foundation degree and above'],
          ['Degree', '6 and 7', 'Bachelor\'s or master\'s degree']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What an apprentice gets',
          left: [
            'A wage and holiday pay as an employee, work alongside experienced staff, and time to train and study related to the role of at least 20% of normal working hours. gov.uk says apprenticeships "can take from 8 months to 6 years to complete, depending on the type and level of the apprenticeship."',
            'Some also carry an additional qualification. For degree apprenticeships, the qualification is the degree itself, earned while working.'
          ],
          rightH3: 'Who can start',
          right: [
            'You need to be 16 or over, living in England and not in full-time education. gov.uk adds: "You can apply for an apprenticeship while you\'re still at school but you\'ll need to be 16 or over by the end of the summer holidays to start the apprenticeship."',
            'It also says "You can have a previous qualification, like a degree, and still start an apprenticeship." The route is not only for school leavers.'
          ] },
        { kind: 'p', mt: true, html: 'The practical consequence is the one this page is built on. A university place is decided by grades and an admissions process; a degree apprenticeship is decided by an employer filling a job. How each employer selects is up to that employer, and we make no claims about any particular process. What every employer is hiring for, though, is someone who can grow into the occupation described in the standard.' },
        { kind: 'source', html: 'Sources, read 21 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/become-apprentice" rel="noopener" target="_blank">gov.uk, Become an apprentice</a> and <a class="ag-inline-link" href="https://www.gov.uk/apply-apprenticeship" rel="noopener" target="_blank">Apply for an apprenticeship</a>.' }
      ]
    },
    {
      id: 'standard', tint: 'deep', eyebrow: 'The standard',
      h2: 'Read the standard before you apply',
      lede: 'Every apprenticeship in England is built on a published occupational standard. For software, the one to read is the Digital and technology solutions professional standard on the Skills England site.',
      body: [
        { kind: 'table', caption: 'Digital and technology solutions professional (ST0119), version 1.2', head: ['Field', 'As published'], rows: [
          ['Level', '6, integrated degree'],
          ['Typical duration', '48 months'],
          ['Options', 'Software engineering, IT consultant, business analyst, cyber security, computing data analyst and network engineering professional'],
          ['Typical job titles', 'Business analyst, computing data analyst, cyber security professional, IT consultant, network engineer, software engineer'],
          ['Professional recognition', 'British Computer Society, Registered IT Technician (RITTech)'],
          ['This version from', '1 September 2023']
        ] },
        { kind: 'table', mt: true, caption: 'Three of the standard\'s own statements, and what you can do about each before applying', head: ['From the standard', 'What you can learn now'], rows: [
          ['Skill: "Initiate, design, code, test and debug a software component for a digital and technology solution."', 'Write programs from scratch in one language, test them and fix them yourself'],
          ['Knowledge: "Approaches to effective team work and the range of software development tools supporting effective teamwork. For example, configuration management, version control and release management."', 'Keep every project in Git from day one, with a history you can explain'],
          ['Behaviour: "Interacts professionally with people from technical and non-technical backgrounds."', 'Practise describing your project to someone who does not code, in plain words']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A level 4 route as well',
          left: [
            'The Software developer standard (ST0116) is a level 4 apprenticeship with a typical duration of 24 months, for roles such as web developer, application developer, mobile application developer and software developer.',
            'It is a higher apprenticeship rather than a degree apprenticeship, and for some students it is the better first step.'
          ],
          rightH3: 'Why reading it helps',
          right: [
            'A standard is long and written for employers and assessors, but it tells you in plain terms what the job is. Arriving able to talk about a few of its skills, with evidence, is a far stronger position than knowing only the title.',
            'We use the standard to choose what to teach first. We do not claim that lessons shorten or replace any part of an apprenticeship.'
          ] },
        { kind: 'source', html: 'Source, read 21 September 2026: <a class="ag-inline-link" href="https://skillsengland.education.gov.uk/apprenticeships/st0119-v1-2" rel="noopener" target="_blank">Skills England, Digital and technology solutions professional</a> (fields read from the standard\'s published data) and <a class="ag-inline-link" href="https://skillsengland.education.gov.uk/apprenticeships/st0116-v1-2" rel="noopener" target="_blank">Software developer</a>.' }
      ]
    },
    {
      id: 'numbers', tint: 'tint', eyebrow: 'The numbers',
      h2: 'How many degree apprenticeships start, and who starts them',
      lede: 'From the Department for Education\'s Apprenticeships statistics for the 2024/25 academic year, full-year final data first published in November 2025. Figures cover England.',
      body: [
        { kind: 'table', caption: 'Apprenticeship starts in England, 2024/25', head: ['Measure', 'Published figure'], rows: [
          ['All apprenticeship starts', '353,500, up 4.1% on 2023/24'],
          ['Starts at levels 6 and 7', '60,350, up from 50,110'],
          ['Share of all starts at levels 6 and 7', '17.1%'],
          ['Starts at level 6', '26,780'],
          ['Starts at level 7', '33,560, up 40.7%'],
          ['Share of starts by under-19s', '21.2%, down from 23.2%'],
          ['Share of starts by people aged 25 and over', '51.3%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Most growth was at level 7',
          left: [
            'The DfE links much of the rise to an announcement that from January 2026, level 7 apprenticeships would be government-funded only for people aged 16 to 21, and for care leavers or those with an Education, Health and Care Plan who are under 25 at the start.',
            'Level 7 is master\'s level. For a school leaver, the relevant software route is usually level 6 or level 4.'
          ],
          rightH3: 'School leavers are a minority',
          right: [
            'Under-19s made up 21.2% of all starts, and over half of starts were by people aged 25 and over. Many apprentices are adults already in work.',
            'That is worth knowing as a sixth former: you may be applying alongside people with years of workplace experience, which makes a finished project and a clear explanation of it more valuable.'
          ] },
        { kind: 'source', html: 'Source, read 21 September 2026: <a class="ag-inline-link" href="https://explore-education-statistics.service.gov.uk/find-statistics/apprenticeships/2024-25" rel="noopener" target="_blank">DfE, Apprenticeships, academic year 2024/25</a>. Level 6 and level 7 figures are as published; totals are the DfE\'s own.' }
      ]
    },
    {
      id: 'foundation', tint: 'deep', eyebrow: 'Not ready yet',
      h2: 'If a degree apprenticeship is a step too far for now',
      lede: 'Foundation apprenticeships, introduced for young people, include a digital route. gov.uk\'s toolkit for them was published on 2 September 2026.',
      body: [
        { kind: 'p', html: 'The toolkit describes foundation apprenticeships as "entry-level, paid jobs with structured training designed for young people aged 16 to 21", and for 22 to 24 year olds in certain circumstances, adding: "No prior qualifications or experience are required." They are level 2, cover six sectors including digital, and have a typical duration of 8 months with a minimum of 187 hours of off-the-job learning. Anyone aged 25 or over cannot start one.' },
        { kind: 'table', mt: true, caption: 'The software and data foundation apprenticeship, as the toolkit describes it', head: ['Field', 'As published'], rows: [
          ['Purpose', '"To introduce apprentices to data handling and software support roles across all sectors."'],
          ['What apprentices do', 'Collect, format, store and validate data; support software development and testing under guidance; help manage data and software functions'],
          ['Included occupations', 'Data technician, software development technician, IT solutions technician, digital support technician, cyber security technician, information communications technician'],
          ['Next steps listed', 'Same level apprenticeship, higher level apprenticeship, full-time employment, further study']
        ] },
        { kind: 'p', mt: true, html: 'The toolkit notes that "The apprentice and employer may benefit from recognition of prior learning and experience" towards a next apprenticeship. That is a decision for the provider and employer; we make no claim that our lessons count towards it.' },
        { kind: 'source', html: 'Source, read 21 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/resources-for-promoting-the-growth-and-skills-levy/foundation-apprenticeships-accessible-version-of-toolkit" rel="noopener" target="_blank">gov.uk, Foundation apprenticeships toolkit</a>, published 2 September 2026. Funding amounts in the toolkit are left out here.' }
      ]
    },
    {
      id: 'prepare', tint: '', eyebrow: 'Preparing',
      h2: 'What to have ready before you apply',
      lede: 'Our own teaching advice, based on the standard\'s skills rather than any employer\'s selection process.',
      body: [
        { kind: 'table', caption: 'Five things worth having', head: ['Have ready', 'Why', 'Where we teach it'], rows: [
          ['One language to a working level', 'The standard\'s first coding skill is to design, code, test and debug a component', 'Python or Java, taken past the basics'],
          ['A finished project', 'Something concrete to discuss, start to finish', 'A web, data or game project you choose'],
          ['A Git history', 'Version control is named in the standard\'s knowledge', 'Git and GitHub from the first lesson'],
          ['Basic SQL', 'Data products and data management run through the standard', 'Databases for teens'],
          ['A plain explanation', 'The standard asks for work with non-technical people', 'Explaining your code aloud in every lesson']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we will not do',
          left: [
            'We do not write applications, CVs or answers to application questions, and we never sit or coach answers to any employer\'s online test. An application has to be yours.',
            'We also never touch A level NEA projects or T Level assessments. Our pages on <a class="ag-inline-link" href="/a-level-computer-science-nea-help">A level NEA</a> and <a class="ag-inline-link" href="/t-level-digital-coding-help">T Level digital</a> explain those lines in detail.'
          ],
          rightH3: 'University or apprenticeship?',
          right: [
            'Both lead to degrees and both suit people who like to code. A degree apprenticeship suits someone who wants to work from the start; university suits someone who wants time to study broadly first.',
            'If university is the likelier path, <a class="ag-inline-link" href="/coding-for-university-students-uk">coding for university students</a> looks at what happens after a computing degree.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages before applying',
    lede: 'Year 12 is a sensible time to start; placement follows what you can already do.',
    table: { caption: 'From first programs to application-ready', head: ['Stage', 'What should be true'], rows: [
      ['1. Working basics', 'You write and debug short programs in one language without help'],
      ['2. Structure', 'You break a problem into functions and choose sensible data structures'],
      ['3. A finished project', 'One project is complete, in Git, with a short README'],
      ['4. Ready to talk', 'You can explain the project and your choices to a technical and a non-technical listener']
    ] },
    left: { h3: 'Stage three matters most', ps: [
      'A finished project turns interest into evidence.',
      'The full sequence of topics is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Around A levels', ps: [
      'Lessons fit around school work and pause easily in exam season, as billing is monthly.',
      'Nothing in a lesson overlaps with work you submit for assessment.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for future apprentices',
    lede: 'Grouped by stage. The free lesson settles where to begin.',
    bands: [
      { num: 'I', h3: 'A first language', sub: 'To a working level', courses: [
        { code: 'DAP / LANG / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Clear, readable, and used across software and data.' },
        { code: 'DAP / LANG / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Object-oriented programming, common in large organisations.' },
        { code: 'DAP / LANG / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving and DSA', blurb: 'Algorithms and data structures, one step at a time.' }
      ] },
      { num: 'II', h3: 'Working tools', sub: 'What a team uses', courses: [
        { code: 'DAP / TOOL / 01', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'Version control, named in the standard itself.' },
        { code: 'DAP / TOOL / 02', slug: 'mysql-mastery-for-teens', title: 'MySQL for Teens', blurb: 'Databases and SQL from the ground up.' },
        { code: 'DAP / TOOL / 03', slug: 'backend-coding-masterclass-for-teens', title: 'Backend Coding for Teens', blurb: 'Servers, APIs and the logic behind applications.' }
      ] },
      { num: 'III', h3: 'Projects and options', sub: 'Pointing at an option', courses: [
        { code: 'DAP / PROJ / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full Stack Web Development', blurb: 'For the software engineering option.' },
        { code: 'DAP / PROJ / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'For the computing data analyst option.' },
        { code: 'DAP / PROJ / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cyber Security for Teens', blurb: 'For the cyber security option, taught defensively.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons after school',
    lede: 'Teaching comes from India, which keeps the same clock all year. The UK is four and a half hours behind India in British Summer Time and five and a half behind in winter, so after-school and weekend slots in UK time are straightforward.',
    slots: [
      { time: 'After school', l: 'Early evening on a weekday, UK time.' },
      { time: 'Saturday', l: 'A longer session for project work.' },
      { time: 'Sunday', l: 'For students with Saturday jobs.' }
    ],
    cells: [
      { h3: 'A free first lesson', p: 'We see where you are and suggest a route towards the option you are interested in.' },
      { h3: 'Small groups', p: 'Five to ten students at the same level.' },
      { h3: 'One to one', p: 'For a faster pace or a specific deadline.' },
      { h3: 'Projects you choose', p: 'Your project, in your own GitHub account, so it stays yours.' },
      { h3: 'Code read line by line', p: 'A teacher reads your program and explains what to improve.' },
      { h3: 'Assessed work untouched', p: 'Nothing you submit for A levels or a T Level is ever worked on in a lesson.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Four projects finished by our students. The wider collection is in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'From Google, unedited: reviews by our students and their parents.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly fee in US dollars, the same outside India, with no enrolment fee and no commitment beyond the month, so lessons can stop for exams or a new job.',
    free: ['A look at your current level', 'A suggested route towards your option', 'No payment details needed'],
    group: ['Five to ten students at one level', 'The same teacher each week', 'A project of your own', 'Stop at the end of any month'],
    one: ['A teacher for you alone', 'A pace set around school', 'Useful before a specific deadline']
  },

  faq: {
    eyebrow: 'Questions about degree apprenticeships',
    h2: 'What students and parents ask',
    items: [
      { q: 'What is a degree apprenticeship?', a: 'A paid job with training of at least 20% of working hours, leading to a qualification at level 6 or 7, which gov.uk equates to a bachelor\'s or master\'s degree.' },
      { q: 'Can I apply while I am still at school?', a: 'Yes. gov.uk says you can apply while still at school, but you must be 16 or over by the end of the summer holidays to start.' },
      { q: 'Which standard covers software engineering?', a: 'The Digital and technology solutions professional standard, a level 6 integrated degree with a typical duration of 48 months, has a software engineering option. The Software developer standard is a level 4 alternative.' },
      { q: 'How many degree apprenticeships start each year?', a: 'In England in 2024/25 there were 60,350 starts at levels 6 and 7, 17.1% of all apprenticeship starts, according to the DfE.' },
      { q: 'Are most apprentices school leavers?', a: 'No. Under-19s made up 21.2% of starts in 2024/25, and over half were by people aged 25 and over.' },
      { q: 'Will you help with my application or online test?', a: 'No. We never write applications or sit or coach answers to any employer\'s tests. We teach the skills, and the application stays yours.' },
      { q: 'Can you help with my A level NEA or T Level project?', a: 'No. We never work on NEA or T Level assessments. Lessons use separate problems and projects.' },
      { q: 'What should I learn first?', a: 'Usually Python or Java to a working level, then a finished project kept in Git, then basic SQL. The free lesson will suggest an order for you.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that it is USD 100 a month in a group or USD 150 a month one to one, with no enrolment fee.' },
      { q: 'Does this apply in Scotland, Wales or Northern Ireland?', a: 'The rules on this page are for England. The other nations run apprenticeships through their own organisations, though the coding skills are the same.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'The other routes, and the assessment lines we hold.',
    items: [
      { href: '/coding-for-university-students-uk', label: 'Coding for university students', p: 'The degree route, and what came after it for recent graduates.' },
      { href: '/t-level-digital-coding-help', label: 'T Level digital coding help', p: 'For students on the college route.' },
      { href: '/a-level-computer-science-nea-help', label: 'A level Computer Science NEA', p: 'Where we help, and where we never do.' },
      { href: '/best-coding-classes-for-teens-uk', label: 'Coding classes for teens', p: 'How we teach teenagers.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online', p: 'The usual first language.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages together.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time that suits you or a parent. Tell us which option interests you; the lesson checks your level and ends with a plan for the months before you apply.',
    readFirst: 'Reading first? The <a class="ag-inline-link" href="/courses">course pages</a> list each syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the method, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows what students finish.',
    note: 'WhatsApp from a UK number is the quickest way to reach us. We are based in India, so the number starts +91, and we have no UK office.',
    formNote: 'Free first lesson. No card needed.'
  },

  footer: {
    cols: [
      { h4: 'Routes', links: [
        { href: '/coding-for-university-students-uk', label: 'University students' },
        { href: '/t-level-digital-coding-help', label: 'T Level digital' },
        { href: '/a-level-computer-science-nea-help', label: 'A level NEA' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' },
        { href: '/best-coding-classes-for-teens-uk', label: 'Coding for teens' },
        { href: '/best-python-classes-online-uk', label: 'Python classes online' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Arrive able to do the first thing the standard asks'
  },

  personalityCss: `
.ag-root.ag-dap .ag-hero h1 { letter-spacing: -0.019em; font-weight: 700; }
.ag-root.ag-dap .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-dap .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-dap .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-dap .ag-table th:first-child { width: 28%; }
.ag-root.ag-dap .ag-spec dt { letter-spacing: 0.1em; }
`,

  mustMention: ['degree apprenticeship', '20%', 'levels 6 and 7', 'Digital and technology solutions professional', '48 months', 'software engineering', '60,350', '21.2%', 'foundation apprenticeship', 'England'],

  dossier: {
    curriculumAuthority: 'England, apprenticeships. gov.uk, Become an apprentice: employee "earning a wage and getting holiday pay"; training "at least 20% of your normal working hours"; "Apprenticeships can take from 8 months to 6 years to complete, depending on the type and level of the apprenticeship."; levels table with Degree at 6 and 7, "Bachelor\'s or master\'s degree"; start requirements 16 or over, living in England, not in full-time education; apply while at school if 16 by end of summer holidays. gov.uk, Apply for an apprenticeship: previous qualification such as a degree allowed. Skills England ST0119 v1.2 (from 1 September 2023): level 6 integrated degree, typical duration 48 months, six options, typical job titles, BCS RITTech recognition; KSBs quoted: "Initiate, design, code, test and debug a software component for a digital and technology solution."; version control knowledge statement; "Interacts professionally with people from technical and non-technical backgrounds." ST0116 Software developer: level 4, 24 months. DfE Apprenticeships 2024/25: 353,500 starts (+4.1%); levels 6 and 7 60,350 (17.1%) from 50,110; level 6 26,780; level 7 33,560 (+40.7%); under-19s 21.2% from 23.2%; 25 and over 51.3%; level 7 funding limited from January 2026. gov.uk Foundation apprenticeships toolkit (2 September 2026): 16 to 21, "No prior qualifications or experience are required."; level 2, six sectors incl. digital, 8 months, 187 hours; software and data purpose quoted; recognition of prior learning line quoted.',
    localProject: 'The employer is the admissions office, and the standard is published. The page explains the English apprenticeship rules from gov.uk, reads the Skills England Digital and technology solutions professional standard (level 6, 48 months, software engineering option) down to three quoted KSBs and what a student can learn before applying for each, sets out the DfE 2024/25 starts (60,350 at levels 6 and 7; under-19s 21.2%), and offers the digital foundation apprenticeship as an earlier step. It makes no claim about employer selection and refuses application, test, NEA and T Level help. Lesson family: occupational standards read as a syllabus for what to learn before applying.',
    requiredMentions: ['20%', 'levels 6 and 7', '48 months', '60,350'],
    sources: [
      { claim: 'gov.uk, Become an apprentice: pay, training time, duration range, levels, start requirements, applying from school, nations.', url: 'https://www.gov.uk/become-apprentice' },
      { claim: 'gov.uk, Apply for an apprenticeship: a previous degree does not prevent starting.', url: 'https://www.gov.uk/apply-apprenticeship' },
      { claim: 'Skills England, Digital and technology solutions professional (ST0119): level, duration, options, job titles, recognition, KSBs, version date (read from the standard data endpoint).', url: 'https://skillsengland.education.gov.uk/apprenticeships/st0119-v1-2' },
      { claim: 'Skills England, Software developer (ST0116): level 4, 24 months, job titles.', url: 'https://skillsengland.education.gov.uk/apprenticeships/st0116-v1-2' },
      { claim: 'DfE, Apprenticeships 2024/25: starts, degree-level starts, age shares, level 7 funding change.', url: 'https://explore-education-statistics.service.gov.uk/find-statistics/apprenticeships/2024-25' },
      { claim: 'gov.uk, Foundation apprenticeships toolkit: eligibility, level, sectors, duration, software and data route, prior learning.', url: 'https://www.gov.uk/government/publications/resources-for-promoting-the-growth-and-skills-levy/foundation-apprenticeships-accessible-version-of-toolkit' }
    ],
    rejectedClaims: [
      'Any description of how particular employers select apprentices (tests, assessment centres): not read from a primary source, so not made.',
      'That our lessons count as recognised prior learning or shorten an apprenticeship: explicitly disclaimed.',
      'Entry requirements such as A level grades for specific vacancies: set by employers and not generalised.',
      'Funding bands and employer incentive amounts: omitted to keep pound figures off the page.',
      'A sum of the level 6 and level 7 figures: only the DfE total is printed.',
      'Scotland, Wales and Northern Ireland apprenticeship details: not read for this build.'
    ]
  }
};
