'use strict';
// T Level digital coding help (ag- door, England; UK cluster Phase 3, England's system).
// Sources, read raw on 21 September 2026:
//  - DfE, "Introduction of T Levels", updated 26 January 2026, applies to England. Verbatim:
//    * T Levels are "a single, large qualification equivalent to 3 A levels".
//    * "an industry placement of at least 315 hours - approximately 45 days"; placements "will last a
//      minimum of 315 hours (approximately 45 days) but can last longer" and may run "as a block, day
//      release or a mix of these".
//    * "T Levels started in September 2020 and there are now 21 T Levels available."
//    * Timeline: September 2020 first courses included "digital software development"; September 2021
//      courses included "digital data analytics" and "digital support and security".
//    * Certificate: "an overall grade for the T Level, shown as pass, merit, distinction or distinction*",
//      "a separate grade for the core component, using A* to E", "a separate grade for each occupational
//      specialism, shown as pass, merit or distinction", and confirmation that the student has
//      "completed the industry placement".
//    * UCAS tariff: 168 = Distinction* "(A* on the core and distinction in the occupational specialism)"
//      = A*A*A*; 144 = Distinction = AAA; 120 = Merit = BBB; 96 = Pass "(C or above on the core)" = CCC;
//      72 = Pass "(D or E on the core)" = DDD.
//    * "T Level students are not required to achieve either a grade 4 in English and maths GCSE or level
//      2 in functional skills to pass their programme."
//  - tlevels.gov.uk, Digital Software Development: "Level 3 qualification", "2-year course", "Includes 9
//    weeks minimum working with an employer on an industry placement"; roles "web developer, web
//    designer, software developer, computer games tester, computer games developer, e-learning
//    developer, user experience (ux) designer"; core content "Problem Solving, Programming, Emerging
//    Issues and the Impact of Digital, Legislation and Regulatory Requirements, Business Context, Data,
//    Digital Environments, Security"; the specialism covers "Analysing a problem to define requirements
//    and acceptance criteria aligned to user needs", "Designing, implementing, and testing software",
//    "Changing, maintaining and supporting software", "Creating solutions in a social and collaborative
//    environment", "Discovering, evaluating, and applying reliable sources of knowledge", and "Applying
//    ethical principles and managing risks in line with legal and regulatory requirements when
//    developing software". Entry requirements "are set by the individual school or college".
//  - Skills England, T Level in digital Software Development: occupational specialism still named
//    "Digital Production, Design and Development"; awarding organisation Pearson (generation 1 and 2);
//    approval date 01/04/2020; available from 01/09/2020; aligned occupational standard "Software
//    development technician OCC0128"; "There are no mandatory additional requirements"; "to be awarded a
//    Distinction*, you must achieve an A* in the core and a Distinction in the occupational
//    specialism(s)".
// Spine: a top grade that needs two different kinds of evidence, plus nine weeks inside a real employer.
// Distinction* requires an A* on the examined core AND a Distinction in the practical specialism, and no
// T Level is awarded without the placement. A student who can only pass exams, or only build things,
// cannot reach the top. Second edge: three digital T Levels share a word, and only one is mainly about
// writing software; its specialism still carries its old name, which is why searchers get confused.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'T LEVELS', blurb: 'The digital software T Level grades an exam and a practical specialism separately, and needs nine weeks with an employer. Which of the three digital T Levels is the coding one.' },
  slug: 't-level-digital-coding-help',
  code: 'tld',
  accent: '#4C1D10',
  accentRationale: 'T Level: a deep burnt umber from the solver (11.43:1 on every paper tint), warm and workmanlike, and clear of the burnt rust used on the England nation page',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'T Level digital coding help',
  title: 'T Level Digital Software Development Help | Coding Support',
  description: 'Help for students on the Digital Software Development T Level: the examined core, the practical specialism, the 315-hour placement and the programming both assume.',
  ogDescription: 'A Distinction* on the digital software T Level needs an A* on the core and a Distinction in the specialism, plus nine weeks with an employer.',
  twitterDescription: 'Programming support for students on the Digital Software Development T Level. First class free.',
  pageName: 'T Level Digital Software Development Help',
  webPageDescription: 'Live online programming support for students taking the Digital Software Development T Level in England, set against the published structure, grading and placement requirements.',
  courseDescription: 'Live online programming teaching for T Level digital students, covering the problem solving, programming, data and testing the core and the occupational specialism both assume.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'T Level digital help',
  navLinks: [
    { href: '#grade', label: 'Two halves of one grade' },
    { href: '#three', label: 'Which digital T Level' },
    { href: '#placement', label: 'The placement' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; T Levels &middot; Ages 16 to 19',
  h1: 'T Level Digital Software Development help',
  lede: 'Most students choosing a T Level are told it is "equivalent to 3 A levels" and not much else. The detail matters more. The certificate carries two separate grades: the core, graded A* to E, and the occupational specialism, graded pass, merit or distinction. The overall grade combines them, and the top one is spelled out without ambiguity: "to be awarded a Distinction*, you must achieve an A* in the core and a Distinction in the occupational specialism(s)". On top of that sits an industry placement of "at least 315 hours", roughly nine weeks inside a real employer, without which no T Level is awarded at all. A student who is strong in examinations and weak at building software, or the reverse, cannot reach the top. This page explains the two halves, which of the three digital T Levels is actually about programming, and where outside teaching genuinely helps.',
  secondaryCta: { href: '#three', label: 'Which digital T Level' },
  wa: 'Hello Modern Age Coders, I am on a digital T Level and would like a free first programming class.',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students &middot; Support for the skills, never the assessed work',
  spec: [
    ['Qualification', 'Digital Software Development T Level'],
    ['Level', 'Level 3, two years'],
    ['Equivalent to', 'Three A levels'],
    ['Core graded', 'A* to E'],
    ['Specialism graded', 'Pass, merit or distinction'],
    ['Placement', 'At least 315 hours'],
    ['Awarding organisation', 'Pearson'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The Digital Software Development T Level is a two-year level 3 course, equivalent to three A levels, first taught in September 2020 and awarded by Pearson. It has two graded parts. The core covers problem solving, programming, data, digital environments, security, legislation and business context, and is graded A* to E. The occupational specialism covers analysing requirements, designing, implementing and testing software, and maintaining it, and is graded pass, merit or distinction. A Distinction*, worth 168 UCAS points, the same as A*A*A*, needs an A* in the core and a Distinction in the specialism, and every T Level also requires an industry placement of at least 315 hours. We do not deliver T Levels or touch assessed work; we teach the programming both parts assume. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses T Level digital students use',
    lede: 'Programming depth, the testing habit, and the data work the core covers. Cards open the full syllabus.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'TL / 01', title: 'Python, Zero to Advanced', note: 'The programming the core names and the specialism assumes, taken past the point where it is merely comfortable.' },
      { course: 'full-stack-web-development-masterclass-college', code: 'TL / 02', title: 'Full Stack Web Development', note: 'Web developer is the first role the T Level lists, and this is designing, building and testing a real application.' },
      { course: 'git-github-version-control-course-for-college-students', code: 'TL / 03', title: 'Git and GitHub', note: 'How software is changed, maintained and worked on collaboratively, which the specialism names in almost those words.' }
    ]
  },

  sections: [
    {
      id: 'grade', tint: 'tint', eyebrow: 'Two halves of one grade',
      h2: 'An exam grade and a practical grade, and you need both',
      lede: 'From the Department for Education\'s Introduction of T Levels, updated 26 January 2026, and the Skills England qualification page.',
      body: [
        { kind: 'table', caption: 'What the T Level certificate records', head: ['Element', 'How it is graded'], rows: [
          ['Overall T Level grade', 'Pass, merit, distinction or distinction*'],
          ['Core component', 'A* to E'],
          ['Occupational specialism', 'Pass, merit or distinction'],
          ['Industry placement', 'Confirmed as completed; required for the award'],
          ['English and maths', 'Students work towards them if not already at grade 4, but are not required to achieve them to pass the programme']
        ] },
        { kind: 'table', mt: true, caption: 'How T Level grades convert to UCAS points, as DfE publishes them', head: ['UCAS points', 'T Level overall grade', 'A level equivalent'], rows: [
          ['168', 'Distinction*: A* on the core and distinction in the occupational specialism', 'A*A*A*'],
          ['144', 'Distinction', 'AAA'],
          ['120', 'Merit', 'BBB'],
          ['96', 'Pass, with C or above on the core', 'CCC'],
          ['72', 'Pass, with D or E on the core', 'DDD']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the split matters',
          left: [
            'The core is knowledge and understanding, assessed through an examination and an employer-set project. The specialism is the occupational skill itself: building, testing and maintaining software. They reward different habits and different students.',
            'The top grade needs the best result in both. That is unusual in English post-16 qualifications, and it means neither half can be neglected on the assumption that the other will carry it.'
          ],
          rightH3: 'And the bottom of the table',
          right: [
            'The two pass grades differ only by the core result: C or above gives the CCC equivalent, D or E gives DDD. So the examined half moves a student by a full A level grade on every subject, even at a pass.',
            'Partial achievement also earns UCAS points, which DfE says vary by T Level because the weighting of core and specialism differs between them.'
          ] },
        { kind: 'source', html: 'Sources, read 21 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/introduction-of-t-levels/introduction-of-t-levels" rel="noopener" target="_blank">DfE, Introduction of T Levels</a>, updated 26 January 2026, applies to England; <a class="ag-inline-link" href="https://www.tlevels.gov.uk/students/subjects/digital-software-development" rel="noopener" target="_blank">T Levels, Digital Software Development</a>; and <a class="ag-inline-link" href="https://skillsengland.education.gov.uk/qualifications/TL0006a" rel="noopener" target="_blank">Skills England, T Level in digital Software Development</a>.' }
      ]
    },
    {
      id: 'three', tint: 'deep', eyebrow: 'Which digital T Level',
      h2: 'Three T Levels share a word, and one of them is about writing software',
      lede: 'A student searching for "the digital T Level" is choosing between three qualifications that lead to different work.',
      body: [
        { kind: 'table', caption: 'The digital T Levels, from the DfE timeline', head: ['T Level', 'First taught', 'Mainly about'], rows: [
          ['Digital software development', 'September 2020', 'Designing, building, testing and maintaining software'],
          ['Digital data analytics', 'September 2021', 'Working with data, as its name says'],
          ['Digital support and security', 'September 2021', 'Supporting systems and keeping them secure']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The coding one, and its two names',
          left: [
            'The student-facing site calls it Digital Software Development. The Skills England record still names its occupational specialism Digital Production, Design and Development, which was the original title, and aligns it to the occupational standard for a software development technician.',
            'Both names describe the same qualification from Pearson, first available from 1 September 2020. If a college prospectus uses the older name, it is not a different course.'
          ],
          rightH3: 'What the specialism actually contains',
          right: [
            'The published specialism content is a description of professional software work: "Analysing a problem to define requirements and acceptance criteria aligned to user needs", "Designing, implementing, and testing software", "Changing, maintaining and supporting software", and "Creating solutions in a social and collaborative environment".',
            'It also names "Applying ethical principles and managing risks in line with legal and regulatory requirements when developing software", which is rarely taught before university elsewhere.'
          ] },
        { kind: 'table', mt: true, caption: 'Core content, as the T Levels site lists it', head: ['Core area', 'Why a coding student needs it'], rows: [
          ['Problem solving', 'Every programming task begins with a problem stated precisely enough to solve'],
          ['Programming', 'The centre of the qualification, and the skill the specialism builds on'],
          ['Data', 'Almost all real software stores, moves and reports on data'],
          ['Digital environments', 'Where software actually runs, and what that changes'],
          ['Security', 'The risks the core says organisations face, and how software creates or reduces them'],
          ['Legislation and regulatory requirements', 'What the law requires of software and the people who build it'],
          ['Business context', 'Why software is built at all, and for whom'],
          ['Emerging issues and the impact of digital', 'How the field is changing, including AI']
        ] },
        { kind: 'p', html: 'Roles the T Levels site lists for this route include web developer, web designer, software developer, computer games tester and developer, e-learning developer and user experience designer. It also notes the T Level can lead to a related higher apprenticeship or degree. Entry requirements are set by each school or college, not nationally.' }
      ]
    },
    {
      id: 'placement', tint: '', eyebrow: 'The placement',
      h2: 'Nine weeks inside a real employer',
      lede: 'The part of a T Level no classroom and no tutor can simulate, and the part without which nothing is awarded.',
      body: [
        { kind: 'two',
          leftH3: 'What the rules say',
          left: [
            'Every T Level includes a placement that DfE says will "last a minimum of 315 hours (approximately 45 days) but can last longer". The student site describes it as "9 weeks minimum working with an employer". The two descriptions agree: forty-five working days is nine five-day weeks.',
            'Employers can offer it "as a block, day release or a mix of these", and the provider offering the T Level arranges and verifies it.'
          ],
          rightH3: 'Why it changes preparation',
          right: [
            'A student who arrives at a placement able to read an unfamiliar codebase, use version control and write a test is useful from the first week. One who can only write small programs from scratch spends most of the placement catching up.',
            'That is where outside teaching genuinely helps, and it is a very different thing from helping with assessed work.'
          ] },
        { kind: 'table', mt: true, caption: 'Where we can help, and where we will not', head: ['We teach', 'We do not do'], rows: [
          ['Programming well past the minimum, in Python and for the web', 'Any part of the employer-set project'],
          ['Reading and changing code you did not write', 'Any occupational specialism assessment'],
          ['Version control and working on shared code', 'Finding or arranging industry placements'],
          ['Testing, requirements and acceptance criteria on our own projects', 'Anything a provider will verify as the student\'s own work']
        ] },
        { kind: 'p', html: 'That line is the same one we hold for GCSE and A level coursework, and <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-uk">the page on declaring AI in assessed work</a> explains why it matters more once a qualification counts towards university entry or a job.' },
        { kind: 'p', html: 'For students weighing a T Level against A levels, <a class="ag-inline-link" href="/aqa-a-level-computer-science-7517-help">the AQA</a> and <a class="ag-inline-link" href="/ocr-a-level-computer-science-h446-help">OCR</a> A-level pages set out what the academic route asks, and <a class="ag-inline-link" href="/coding-and-ai-classes-in-england">the England page</a> covers the wider system. T Levels apply to England only.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs across the two years',
    lede: 'Judged by what a student can do in a real codebase, which is what the placement and the specialism both test.',
    table: { caption: 'What a T Level digital student should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Programming past GCSE', 'The first term', 'Comfortable writing, running and debugging real programs in at least one language'],
      ['2. Working in shared code', 'Before the placement', 'Reads unfamiliar code, uses version control, and makes small safe changes'],
      ['3. Requirements and testing', 'During the first year', 'Turns a user need into acceptance criteria and tests against them'],
      ['4. Maintaining software', 'Second year', 'Changes and supports existing software without breaking what works']
    ] },
    left: { h3: 'Rung two decides the placement', ps: [
      'A student who can work in somebody else\'s code is useful to an employer immediately. Nine weeks is short, and arriving ready to contribute is worth more than anything else.',
      'The wider topic order runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Rung four is the specialism', ps: [
      'Changing, maintaining and supporting software is named in the specialism, and it is the part school programming almost never practises.',
      'We teach it on our own projects, never on assessed work.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for T Level digital students',
    lede: 'Grouped by which part of the qualification they support. The free lesson settles where to start.',
    bands: [
      { num: 'I', h3: 'The programming core', sub: 'What both halves assume', courses: [
        { code: 'UK / TL1 / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python, zero to advanced', blurb: 'Programming depth that stands up to a real placement.' },
        { code: 'UK / TL1 / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java, complete', blurb: 'A second language, since employers use many and the specialism names none.' },
        { code: 'UK / TL1 / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The problem-solving and programming areas of the core, worked through properly.' }
      ] },
      { num: 'II', h3: 'Professional practice', sub: 'For the specialism and the placement', courses: [
        { code: 'UK / TL2 / 01', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Changing and maintaining shared code, which the specialism names directly.' },
        { code: 'UK / TL2 / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web development', blurb: 'Designing, implementing and testing a real application end to end.' },
        { code: 'UK / TL2 / 03', slug: 'python-web-development-django-flask-course', title: 'Web development with Python', blurb: 'The web developer role the T Level lists first, built in the language most students already know.' }
      ] },
      { num: 'III', h3: 'Data and security', sub: 'The rest of the core', courses: [
        { code: 'UK / TL3 / 01', slug: 'mysql-database-complete-masterclass-college', title: 'Databases and SQL', blurb: 'The data area of the core, where most real software keeps its information.' },
        { code: 'UK / TL3 / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science, complete', blurb: 'For students who find they prefer the data side and may look at the analytics T Level.' },
        { code: 'UK / TL3 / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI automation', blurb: 'Emerging issues and the impact of digital, including AI, handled with a record of what tools contributed.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Real code, shared code, and a clear line around assessment',
    lede: 'Our teachers work from India on a clock that never shifts, so the UK is five and a half hours behind from October and four and a half from March. Slots are agreed in UK time.',
    slots: [
      { time: 'After college', l: 'The usual slot for T Level students.' },
      { time: 'Later evening', l: 'For students on day-release placement weeks.' },
      { time: 'Weekend morning', l: 'Good for longer project work of our own.' }
    ],
    cells: [
      { h3: 'Somebody else\'s code', p: 'Students regularly read, explain and extend code they did not write, which is exactly what a placement asks on day one.' },
      { h3: 'Version control from the start', p: 'Every project lives in a repository, because that is how software is changed and maintained at work.' },
      { h3: 'Requirements before code', p: 'A user need turned into acceptance criteria first, then tests, then the program.' },
      { h3: 'Nothing assessed', p: 'We never work on the employer-set project, specialism assessment or anything a provider will verify.' },
      { h3: 'Groups by level', p: 'Five to ten students at one stage, reviewing each other\'s changes as a team would.' },
      { h3: 'Or one to one', p: 'For a student with a specific gap before a placement starts.' }
    ]
  },

  projectsH2: 'Software our older learners have built',
  projectsLede: 'Four projects from our own lessons, none of them assessed work. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'From Google, unedited, by families who volunteered them.',

  fees: {
    h2: 'What support costs',
    lede: 'A flat fee each month, priced in US dollars for every country except India. Nothing is charged until the free lesson has settled a course and a regular slot.',
    free: ['A real lesson on real code', 'An honest view of where the gaps are', 'Only a phone number needed'],
    group: ['A room of five to ten at the same rung', 'The same teacher across the course', 'Your code reviewed and returned each week', 'Planned around weeks spent on placement'],
    one: ['One student and one teacher', 'Useful for a specific gap before a placement', 'Scheduled around college and work']
  },

  faq: {
    eyebrow: 'Questions about the digital T Level',
    h2: 'What T Level students and parents ask',
    items: [
      { q: 'Which T Level is the coding one?', a: 'Digital Software Development. There are three digital T Levels: software development, first taught in 2020, and data analytics and support and security, both first taught in 2021.' },
      { q: 'Is it the same as Digital Production, Design and Development?', a: 'Yes. That was the original title and Skills England still uses it for the occupational specialism. The qualification is awarded by Pearson and has been available since September 2020.' },
      { q: 'What is it worth for university?', a: 'DfE publishes the conversion: Distinction* is 168 UCAS points, the same as A*A*A*; Distinction is 144, the same as AAA; Merit 120, BBB; and a Pass is 96 or 72 depending on the core grade.' },
      { q: 'How is the grade worked out?', a: 'From two separate grades: the core, graded A* to E, and the occupational specialism, graded pass, merit or distinction. A Distinction* needs an A* in the core and a Distinction in the specialism.' },
      { q: 'How long is the placement?', a: 'At least 315 hours, which DfE describes as approximately 45 days and the T Levels site as nine weeks minimum. It can be a block, day release or a mix.' },
      { q: 'Do I need grade 4 in English and maths?', a: 'DfE says T Level students work towards them if they have not already achieved grade 4, but are not required to achieve them to pass the programme. Entry requirements are set by each college.' },
      { q: 'Will you help with my employer-set project?', a: 'No. We do not work on the employer-set project, the occupational specialism assessment or anything a provider verifies as your own. We teach the programming those assessments assume.' },
      { q: 'Can you find me a placement?', a: 'No. Placements are arranged and verified by the provider offering the T Level.' },
      { q: 'Are T Levels available in Scotland, Wales or Northern Ireland?', a: 'The DfE guidance applies to England. The other nations have their own post-16 qualifications, covered on their own pages.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that a group place is USD 100 a month and one-to-one teaching USD 150, charged monthly with nothing in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Other routes and rules',
    lede: 'The A-level alternative, and what counts as your own work.',
    items: [
      { href: '/aqa-a-level-computer-science-7517-help', label: 'AQA A-level Computer Science 7517', p: 'The academic route, where Paper 1 is sat on screen from a skeleton program.' },
      { href: '/ocr-a-level-computer-science-h446-help', label: 'OCR A-level Computer Science H446', p: 'The other academic route, where nobody types code in an exam.' },
      { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code, do not copy-paste it', p: 'Why declared AI content earns nothing in assessed work.' },
      { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI classes in England', p: 'How school computing works in England before a student reaches sixteen.' },
      { href: '/best-coding-classes-for-adults-uk', label: 'Coding classes for adults in the UK', p: 'Skills Bootcamps and other routes for anyone past college age.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, and the index of every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send a number and we will reply at a British hour you choose. The lesson is real programming, and it ends with a straight view of what to work on before your placement.',
    readFirst: 'Prefer to look around first? Syllabuses are published on every <a class="ag-inline-link" href="/courses">course page</a>, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> says plainly where the method does not fit, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> lists topics in order.',
    note: 'Message us on WhatsApp for the fastest reply; it costs nothing from a UK phone. The number is an Indian one, and we would rather you read that here than notice it halfway through a chat.',
    formNote: 'Nothing to pay and nothing to sign. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Post-16 in England', links: [
        { href: '/aqa-a-level-computer-science-7517-help', label: 'AQA 7517' },
        { href: '/ocr-a-level-computer-science-h446-help', label: 'OCR H446' },
        { href: '/a-level-computer-science-nea-help', label: 'A-level coursework' },
        { href: '/coding-and-ai-classes-in-england', label: 'The English system' }
      ] },
      { h4: 'More', links: [
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'Declaring AI' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live programming support, on UK time'
  },

  personalityCss: `
.ag-root.ag-tld .ag-hero h1 { letter-spacing: -0.024em; font-weight: 700; }
.ag-root.ag-tld .ag-capsule { border-left-width: 6px; border-radius: 0 4px 4px 0; }
.ag-root.ag-tld .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-tld .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-tld .ag-table th:first-child { width: 28%; }
.ag-root.ag-tld .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-tld .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  mustMention: ['equivalent to 3 A levels', '315 hours', 'approximately 45 days', 'A* in the core and a Distinction', '168', 'Digital Production, Design and Development', 'Pearson', 'acceptance criteria', 'digital data analytics', '26 January 2026'],

  dossier: {
    curriculumAuthority: 'England, T Levels. DfE, "Introduction of T Levels", updated 26 January 2026, applies to England: T Levels are "a single, large qualification equivalent to 3 A levels"; placements "will last a minimum of 315 hours (approximately 45 days) but can last longer" and may be offered "as a block, day release or a mix of these"; "T Levels started in September 2020 and there are now 21 T Levels available"; first courses in September 2020 included "digital software development", and September 2021 courses included "digital data analytics" and "digital support and security"; the certificate records "an overall grade for the T Level, shown as pass, merit, distinction or distinction*", "a separate grade for the core component, using A* to E", "a separate grade for each occupational specialism, shown as pass, merit or distinction", and that the student has "completed the industry placement"; UCAS tariff 168 Distinction* "(A* on the core and distinction in the occupational specialism)" equal to A*A*A*, 144 Distinction AAA, 120 Merit BBB, 96 Pass "(C or above on the core)" CCC, 72 Pass "(D or E on the core)" DDD; "T Level students are not required to achieve either a grade 4 in English and maths GCSE or level 2 in functional skills to pass their programme". tlevels.gov.uk, Digital Software Development: "Level 3 qualification", "2-year course", "Includes 9 weeks minimum working with an employer on an industry placement"; roles web developer, web designer, software developer, computer games tester, computer games developer, e-learning developer, user experience designer; core content Problem Solving, Programming, Emerging Issues and the Impact of Digital, Legislation and Regulatory Requirements, Business Context, Data, Digital Environments, Security; specialism content "Analysing a problem to define requirements and acceptance criteria aligned to user needs", "Designing, implementing, and testing software", "Changing, maintaining and supporting software", "Creating solutions in a social and collaborative environment", "Discovering, evaluating, and applying reliable sources of knowledge", "Applying ethical principles and managing risks in line with legal and regulatory requirements when developing software"; entry requirements "are set by the individual school or college". Skills England, T Level in digital Software Development: occupational specialism "Digital Production, Design and Development"; awarding organisation Pearson, generation 1 and 2; approval date 01/04/2020; available from 01/09/2020; aligned occupational standard "Software development technician OCC0128"; "There are no mandatory additional requirements"; "to be awarded a Distinction*, you must achieve an A* in the core and a Distinction in the occupational specialism(s)".',
    localProject: 'A top grade that needs two different kinds of evidence, plus nine weeks inside a real employer. The T Level certificate grades the examined core A* to E and the practical occupational specialism pass, merit or distinction, and DfE states that Distinction* needs an A* in one and a Distinction in the other, so neither half can carry the student alone; the page prints DfE\'s own UCAS conversion table and points out that even the two pass grades are separated only by the core result. The second section untangles a real search confusion: three digital T Levels share a word, only software development is mainly about writing software, and its specialism still carries the original name Digital Production, Design and Development on Skills England, so a college prospectus using the old title is not a different course. The third section treats the placement, at least 315 hours described as approximately 45 days by DfE and nine weeks minimum by the student site, as the part that changes preparation most, and draws a table of what outside teaching can and cannot do, never the employer-set project, specialism assessment or placement arrangement. Lesson family: a qualification whose grading rule rewards being good at two different things.',
    requiredMentions: ['315 hours', 'A* in the core and a Distinction', 'Digital Production, Design and Development', '26 January 2026'],
    sources: [
      { claim: 'DfE, Introduction of T Levels, updated 26 January 2026: A level equivalence, the placement rule, the number of T Levels, the digital T Levels and their start dates, certificate grading, the UCAS tariff table and the English and maths rule.', url: 'https://www.gov.uk/government/publications/introduction-of-t-levels/introduction-of-t-levels' },
      { claim: 'T Levels, Digital Software Development: level, length, nine-week placement, listed roles, core content, specialism content and entry requirements.', url: 'https://www.tlevels.gov.uk/students/subjects/digital-software-development' },
      { claim: 'Skills England, T Level in digital Software Development: occupational specialism name, awarding organisation, approval and availability dates, aligned occupational standard, and the Distinction* rule.', url: 'https://skillsengland.education.gov.uk/qualifications/TL0006a' }
    ],
    rejectedClaims: [
      'Assessment weightings, paper lengths or the structure of the employer-set project: set by Pearson and not read at a primary source for this build, so none is stated.',
      'The content of the data analytics or support and security T Levels beyond their names: not read, so the page describes them only by what their names say.',
      'Any claim that we can arrange placements, help with the employer-set project or any specialism assessment: stated as things we do not do.',
      'Numbers of students taking the digital T Levels, or completion rates: none read at a primary source.',
      'Availability in Scotland, Wales or Northern Ireland: DfE guidance applies to England and the page says so.',
      'That a T Level is better or worse than A levels for a given student: the page presents both routes and links the A-level pages.'
    ]
  }
};
