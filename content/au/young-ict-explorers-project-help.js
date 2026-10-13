'use strict';
// Young ICT Explorers project help (ag- competition door, Australia cluster Phase 3, row 98).
// Facts read raw on 7 October 2026 at youngictexplorers.net.au (curl default agent): home page (national
// digital technology competition for Years 3 to 12, non-profit, founded by SAP), What is a YICTE Project,
// Rules (teams up to 4, categories 3-4 to 11-12, report max 5 pages, ZIP max 20 MB, talent release form,
// core judging criteria), 2026 Key Dates (registrations close 1 July, documentation 31 July, state
// reviews 3 August to 20 October, State Awards 29 October, national reviews 9 to 21 November, National
// Awards 26 November; 10-minute Zoom review or 8-minute video due 30 September), Core Awards and FAQ.
// Spine: MoSCoW prioritisation before the documentation deadline (family checked free site-wide on
// 7 October 2026; the project in the lesson is invented). Integrity: the students' own project.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'competition', tag: 'YOUNG ICT EXPLORERS', label: 'Young ICT Explorers project help', blurb: 'How Young ICT Explorers works, how projects are judged, and how a team plans a project it can finish.' },
  slug: 'young-ict-explorers-project-help',
  code: 'ycte',
  accent: '#945048',
  accentRationale: 'Young ICT Explorers: a warm terracotta chosen by hand, muted, at least 10 RGB from every accent in use or claimed',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Young ICT Explorers project help',
  title: 'Young ICT Explorers Project Help: Plan, Build, Present',
  description: 'Young ICT Explorers for Years 3 to 12: categories, rules, the 2026 key dates, how projects are judged, and a planning method that gets a team to a finished entry.',
  ogDescription: 'A practical guide to Young ICT Explorers, Australia\'s national digital technology competition for Years 3 to 12: how entry and judging work, and how a team scopes a project it can finish well.',
  twitterDescription: 'Young ICT Explorers explained: categories, rules, judging and how to plan a project you can finish.',
  pageName: 'Young ICT Explorers Project Help',
  webPageDescription: 'A guide to Young ICT Explorers for Australian students, parents and teachers: who can enter, year categories, team size, the written report and review, judging criteria, the 2026 key dates, and a worked lesson on MoSCoW prioritisation for fitting a project into the time before the documentation deadline.',
  courseDescription: 'Live online coding classes for Australian students building digital technology projects, covering programming, testing, documentation and presenting, while the project remains the students\' own.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Young ICT Explorers',
  navLinks: [
    { href: '#how', label: 'How it works' },
    { href: '#judging', label: 'Judging' },
    { href: '#scope', label: 'Scoping lesson' },
    { href: '#support', label: 'Our role' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Years 3 to 12 &middot; Checked at Young ICT Explorers',
  h1: 'Young ICT Explorers project help',
  lede: 'Young ICT Explorers invites Australian students to solve a real problem or express an idea with technology, then explain it to judges. The ideas are rarely the hard part; students tend to have more than they can build. What separates a strong entry from a half-finished one is usually planning: choosing what the project must do, building that well, and leaving time for the report and the review. This page explains the competition as its organisers publish it, with every rule and date checked at source, then shows a simple prioritising method any team can use. We are independent of Young ICT Explorers, and the project always stays the students\' own work.',
  secondaryCta: { href: '#scope', label: 'See the scoping lesson' },
  wa: 'Hello Modern Age Coders, I would like a free class about building a Young ICT Explorers project in Australia.',
  heroNote: 'Checked at youngictexplorers.net.au on 7 October 2026 &middot; Independent of the organisers &middot; The students\' own project',
  spec: [
    ['Competition', 'Young ICT Explorers (YICTE)'],
    ['Open to', 'Students in Years 3 to 12'],
    ['Team size', 'Individuals or teams of up to 4'],
    ['Categories', 'Years 3-4, 5-6, 7-8, 9-10, 11-12'],
    ['Written report', 'No more than 5 pages'],
    ['2026 documentation due', '31 July'],
    ['We provide', 'Coding, testing and presenting lessons'],
    ['We are not', 'An organiser, judge or project builder']
  ],
  capsuleQ: 'In short',
  capsule: 'Young ICT Explorers is a non-profit national digital technology competition for Australian students in Years 3 to 12, founded by SAP. Students enter individually or in teams of up to four, in year categories from 3-4 to 11-12, submit a written report of no more than 5 pages, and present to judges. In 2026, documentation was due 31 July, and national judging runs 9 to 21 November.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for Young ICT Explorers teams',
    lede: 'Match the course to the kind of project the team wants to make.',
    items: [
      { course: 'block-coding-app-development-masterclass', code: 'YCT / 01', title: 'App making for kids', note: 'Primary students building a working app in blocks, the most common kind of junior entry.' },
      { course: 'complete-app-development-masterclass-for-teens', code: 'YCT / 02', title: 'App development for teens', note: 'Real mobile apps with React Native for secondary teams with a serious idea.' },
      { course: 'python-complete-masterclass-teens', code: 'YCT / 03', title: 'Python for teens', note: 'For hardware, data and AI projects that need a general-purpose language.' }
    ]
  },

  sections: [
    {
      id: 'how', tint: 'tint', eyebrow: 'How it works',
      h2: 'Entry, categories and the 2026 calendar',
      lede: 'The organisers describe a YICTE project as a student-created digital solution that responds to a real-world need. Here is how entry works, as published for 2026.',
      body: [
        { kind: 'table', caption: 'Young ICT Explorers 2026 key dates, as published by the organisers', head: ['When (2026)', 'What happens'], rows: [
          ['1 July', 'Registrations close; teachers, parents or guardians register an account'],
          ['31 July, 11:59pm', 'Project documentation and submission deadline'],
          ['3 August to 30 September', 'Zoom reviews for senior categories (Years 7-8, 9-10, 11-12)'],
          ['1 September to 29 October', 'Zoom reviews for junior categories (Years 3-4, 5-6)'],
          ['30 September', 'Pre-recorded presentation videos due, for teams not presenting live'],
          ['29 October, 1pm AEST', 'State Awards Ceremony, via Zoom'],
          ['9 to 21 November', 'National Finals judging'],
          ['26 November', 'National Finals Awards Ceremony']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Students can enter alone or in teams of up to four, in the category matching their school year: 3-4, 5-6, 7-8, 9-10 or 11-12. Every entry includes a written report of no more than five pages, and each participating student needs a project talent release form completed by a parent or guardian.',
            'Project files go into a ZIP that must not exceed 20 MB. Larger videos can be shared as private links in the report, as the FAQ explains.'
          ],
          right: [
            'Reviews are the judging rounds. Most teams present live over Zoom in a 10-minute session: 5 minutes to pitch, present or demonstrate, then 5 minutes of questions and feedback. Teams that cannot attend may submit a pre-recorded video of up to 8 minutes instead.',
            'Every team receives written feedback and a certificate of achievement or participation. The organisers note that all dates are subject to change, so their key dates page is the place to confirm the following year\'s calendar.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.youngictexplorers.net.au/competition-details/key-dates/" rel="noopener" target="_blank">YICTE 2026 key dates</a>; <a class="ag-inline-link" href="https://www.youngictexplorers.net.au/competition-details/rules/" rel="noopener" target="_blank">YICTE rules</a>; <a class="ag-inline-link" href="https://www.youngictexplorers.net.au/faq/" rel="noopener" target="_blank">YICTE FAQ</a>. Read 7 October 2026.' }
      ]
    },
    {
      id: 'judging', tint: 'deep', eyebrow: 'Judging',
      h2: 'Four criteria, and what they mean in practice',
      lede: 'Every entry is first judged in a Core Award category for its year level. Optional awards, such as those for cybersecurity and privacy, sustainability and the use of AI, are only open to projects already entered in a core category.',
      body: [
        { kind: 'table', caption: 'Core judging criteria, as listed by the organisers, with what judges ask', head: ['Criterion', 'Questions the organisers list', 'What it means for a team'], rows: [
          ['Creativity and Innovation', 'Does the project show original thinking, and what makes it different from similar products?', 'Know the existing tools and say clearly what yours does that they do not'],
          ['Level of Difficulty', 'How challenging was it for the students\' year level, and how were problems solved?', 'Keep a record of problems met and how each was overcome'],
          ['Quality and Completeness', 'How well does it meet its objectives, and is it a working product or a prototype?', 'A small thing that works beats a big thing that half works'],
          ['Documentation and Presentation', 'Is it explained clearly in the review, and is the report well structured?', 'Plan the report and the 5-minute pitch, do not leave them to the last night']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The organisers welcome both fully developed solutions and prototypes. That matters for planning: a team does not need a polished product, but it does need a working core it can demonstrate and explain.',
            'The suggested report structure covers the introduction and how the idea was chosen, the design and features with labelled images, research, problems encountered, a user manual and a conclusion on what the team learned and would change.'
          ],
          right: [
            'Project types the organisers list include apps and web tools, games and interactive media, robotics and hardware, AI and data projects, and sustainability and community solutions. Anything students imagine, design and build with digital technologies is eligible.',
            'Projects must be suitable for all ages. On copyright questions, such as using music in a video, the FAQ points students to the Copyright Act 1968 and the Australian Copyright Council rather than giving legal advice.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.youngictexplorers.net.au/yicte-core-awards/" rel="noopener" target="_blank">YICTE Core Awards</a>; <a class="ag-inline-link" href="https://www.youngictexplorers.net.au/what-is-a-yicte-project/" rel="noopener" target="_blank">What is a YICTE project</a>. Read 7 October 2026.' }
      ]
    },
    {
      id: 'scope', tint: 'tint', eyebrow: 'Worked lesson',
      h2: 'MoSCoW: choosing what the project must do',
      lede: 'MoSCoW sorts every feature into Must, Should, Could and Won\'t (this time). It is a simple way to make sure the working core gets built first. The project below is invented for this lesson.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The idea', p: 'Three Year 8 students want a lost property finder for their school: staff log found items with a photo, and students search for what they lost.' },
          { h3: 'The time', p: 'From mid June to the 31 July deadline is about six weeks. Three students working two hours a week each gives 36 hours in total.' },
          { h3: 'The rule', p: 'Plan the Must features to use no more than about 60 percent of the time, so problems, testing and the report have room.' }
        ] },
        { kind: 'table', mt: true, caption: 'The team\'s feature list with estimated hours and MoSCoW labels (invented example)', head: ['Feature', 'Estimate (hours)', 'Label', 'Running total of Must and Should'], numCols: [1, 3], rows: [
          ['Add a found item with photo and description', '6', 'Must', '6'],
          ['Search by item type and colour', '5', 'Must', '11'],
          ['Written report, no more than 5 pages', '6', 'Must', '17'],
          ['Test plan and test log', '3', 'Must', '20'],
          ['Mark an item as claimed', '3', 'Should', '23'],
          ['Sort results by date found', '2', 'Should', '25'],
          ['Simple staff login', '5', 'Should', '30'],
          ['Email notice when a matching item is logged', '4', 'Could', 'not counted'],
          ['Photo recognition to suggest the item type', '8', 'Could', 'not counted'],
          ['A separate phone app', '12', 'Won\'t (this time)', 'not counted'],
          ['Sharing items between schools', '10', 'Won\'t (this time)', 'not counted']
        ] },
        { kind: 'p', mt: true, text: 'The Must features add up to 20 hours, about 56 percent of the 36 available, which leaves room for surprises. Adding the Should features brings the total to 30 hours. Of the two Could features, only the 4-hour email notice fits, taking the plan to 34 hours with 2 hours to spare; the photo recognition feature, at 8 hours, would push the team past its time. The two Won\'t items are not failures. Writing them down protects the team from being tempted halfway through, and they make an honest answer to the report question "What would you do differently next time?"' },
        { kind: 'two', mt: true,
          leftH3: 'Using it with a real team',
          left: [
            'Teams estimate badly at first, usually far too low. The fix is to re-estimate each week: when a Must takes longer than planned, something lower down moves to Won\'t, rather than the deadline being missed.',
            'Students should make the labels together and agree them, because the arguments about what is truly a Must are where the real design thinking happens.'
          ],
          rightH3: 'Why judges notice',
          right: [
            'A team that can explain why it left features out shows exactly the judgement the Level of Difficulty and Quality and Completeness criteria reward.',
            'MoSCoW is used by professional software teams for the same reason. Learning it on a school project builds a habit that lasts well beyond one competition.'
          ] }
      ]
    },
    {
      id: 'support', tint: '', eyebrow: 'Our role',
      h2: 'Teaching the skills, never building the entry',
      lede: 'Young ICT Explorers celebrates what students imagined, designed and built themselves. Our lessons build their skill so they can do exactly that.',
      body: [
        { kind: 'two',
          left: [
            'Lessons cover the programming a project needs (app logic, data storage, simple web pages, Python for hardware and data), plus testing, writing clear documentation and practising a 5-minute pitch with questions afterwards.',
            'For primary teams, we often start with block-based app making, which lets a Years 3-4 or 5-6 team produce a working app without fighting syntax.'
          ],
          right: [
            'We do not write a team\'s code, design its project, write its report or present for it. Judges ask how the project was made, and a team that did the work can answer.',
            'We do not promise an award or a place in the national finals. We teach skills, planning and presentation, which are what the criteria reward.'
          ] },
        { kind: 'table', mt: true, caption: 'A twelve-week arc from idea to submission', head: ['Weeks', 'Focus', 'Evidence of progress'], rows: [
          ['1 and 2', 'Choose and test the idea with real users', 'A one-paragraph problem statement and two user comments'],
          ['3 and 4', 'MoSCoW plan and first working Must', 'The core feature works, however rough'],
          ['5 to 8', 'Build the remaining Musts, then Shoulds', 'Weekly re-estimate and an updated test log'],
          ['9 and 10', 'Report drafted against the suggested structure', 'Five pages, with labelled images and a user manual'],
          ['11 and 12', 'Pitch practice and final tests', 'A 5-minute demonstration that survives tough questions']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing as a project maker',
    h2: 'Four rungs from Years 3-4 to Years 11-12',
    lede: 'Categories follow school years; project skill grows in this order.',
    table: { caption: 'From a first app to a well-engineered entry', head: ['Around', 'Rung', 'The sign it is secure'], rows: [
      ['Years 3 to 6', '1. Makes something that works', 'Builds a simple app or game that a classmate can use'],
      ['Years 5 to 8', '2. Solves a real problem', 'Starts from a user\'s need rather than from a cool feature'],
      ['Years 7 to 10', '3. Plans and tests', 'Uses a prioritised plan and a test log'],
      ['Years 9 to 12', '4. Engineers and explains', 'Justifies design choices and trade-offs to experts']
    ] },
    left: { h3: 'If the project stalls', ps: [
      'Cut scope before cutting quality. Move a Should to Won\'t and finish the core properly.',
      'Show the working part to one real user this week. Their reaction usually unblocks the next step.'
    ] },
    right: { h3: 'Related reading', ps: [
      'The <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">Australian competitions calendar</a> places YICTE among the year\'s other contests.',
      'For a short, intense build, see <a class="ag-inline-link" href="/australian-student-hackathons">student hackathons in Australia</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for project builders',
    lede: 'Grouped by the kind of project. Each card links to its full syllabus.',
    bands: [
      { num: 'I', h3: 'Apps and web', sub: 'The most common entries', courses: [
        { code: 'YCT / AW / 01', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Working apps in blocks.' },
        { code: 'YCT / AW / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'React Native apps for real phones.' },
        { code: 'YCT / AW / 03', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'Websites that do a job.' }
      ] },
      { num: 'II', h3: 'Games and media', sub: 'Interactive projects', courses: [
        { code: 'YCT / GM / 01', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, Roblox and Minecraft.' },
        { code: 'YCT / GM / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C#.' },
        { code: 'YCT / GM / 03', slug: 'creative-coding-animation-mastery', title: 'Creative coding', blurb: 'Motion and visuals with p5.js.' }
      ] },
      { num: 'III', h3: 'Data and AI', sub: 'Senior categories', courses: [
        { code: 'YCT / DA / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language behind most data projects.' },
        { code: 'YCT / DA / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'From data to a first model.' },
        { code: 'YCT / DA / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Smart projects for younger teams.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly online lessons through the project season',
    lede: 'We teach live from India. Hobart is four and a half hours ahead of India time in winter and five and a half in summer, and Darwin four hours ahead all year, so an Australian after-school lesson runs in the Indian afternoon. That makes a regular weekly slot easy to keep from February through to the July deadline.',
    slots: [
      { time: 'Weekday after school', l: 'Programming skills for the project.' },
      { time: 'Weekend', l: 'Testing, report writing and pitch practice.' },
      { time: 'June and July', l: 'Finishing the core and the documentation on time.' }
    ],
    cells: [
      { h3: 'Skills, not answers', p: 'We teach how; the team decides what to build.' },
      { h3: 'Planning built in', p: 'MoSCoW and weekly re-estimates from the start.' },
      { h3: 'Testing habits', p: 'A test log that strengthens the report.' },
      { h3: 'Groups of fifteen to twenty', p: 'Students at a similar level sharing progress.' },
      { h3: 'One-to-one option', p: 'For an individual entrant or a team\'s lead coder.' },
      { h3: 'No award promised', p: 'Judges decide; we build skill and confidence.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Made because students wanted to make them. Explore them in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Copied without changes from our Google reviews.',

  fees: {
    h2: 'Fees',
    lede: 'Our lessons are charged monthly in US dollars, the international rate, with nothing to join and no lock-in. Young ICT Explorers is run by its organisers; anything they charge is separate from us.',
    free: ['A free first lesson with a teacher', 'A look at the project idea and how to scope it', 'No card required'],
    group: ['Fifteen to twenty students at one level', 'The same teacher all season', 'Shared reviews of plans and tests', 'A certificate at the end'],
    one: ['A teacher for one student', 'Lessons shaped around that student\'s project skills', 'Weekly times that suit the family']
  },

  faq: {
    eyebrow: 'Questions about Young ICT Explorers',
    h2: 'What students, parents and teachers ask',
    items: [
      { q: 'What is Young ICT Explorers?', a: 'A non-profit national digital technology competition for Australian students in Years 3 to 12, founded by SAP, in which students create and explain a digital solution to a real need or a creative idea.' },
      { q: 'Who can enter, and in what categories?', a: 'Students in Years 3 to 12, individually or in teams of up to four, in categories by school year: 3-4, 5-6, 7-8, 9-10 and 11-12.' },
      { q: 'How long can the report be?', a: 'The rules say reports must not exceed 5 pages in total, and the project and report files must fit in a ZIP of no more than 20 MB.' },
      { q: 'What happens at the review?', a: 'Most teams present live on Zoom in a 10-minute session: 5 minutes to present or demonstrate and 5 minutes of questions. Teams that cannot attend can submit an 8-minute pre-recorded video.' },
      { q: 'What is MoSCoW prioritisation?', a: 'A planning method that labels each feature Must, Should, Could or Won\'t (this time), so the essential part of a project is built first and the rest is added only if time allows.' },
      { q: 'When are the 2026 national finals?', a: 'National judging runs from 9 to 21 November 2026, followed by the National Awards Ceremony on 26 November 2026, according to the organisers.' },
      { q: 'Does the project have to be finished?', a: 'No. The organisers say both fully developed solutions and prototypes are welcome. What matters is a working core that the team can demonstrate and explain.' },
      { q: 'Will you build our project?', a: 'No. We teach programming, testing, documentation and presenting. The project, its code and its report stay the students\' own work.' },
      { q: 'Can a primary student enter alone?', a: 'Yes. The FAQ confirms individuals can enter, and a classmate may present on behalf of a sole entrant who cannot attend judging.' },
      { q: 'When should we start for next year?', a: 'The organisers say submissions can be made from the February launch. Starting early in the school year leaves time to build, test and write the report well before the deadline.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Australian students',
    lede: 'Other competitions and project skills.',
    items: [
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Every coding and maths contest by month.' },
      { href: '/australian-student-hackathons', label: 'Student hackathons', p: 'Short, intense team builds.' },
      { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code', p: 'Why copied code lets teams down.' },
      { href: '/problem-solving-through-coding-australia', label: 'Problem solving through coding', p: 'Thinking skills behind good projects.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every state and every age.' },
      { href: '/game-development-for-kids-australia', label: 'Game development for kids', p: 'For teams making a game.' }
    ]
  },

  start: {
    h2: 'Start with a free project class',
    lede: 'Tell us the year level and the project idea, however rough. The free class turns the idea into a short MoSCoW plan and tries the first piece of code together.',
    readFirst: 'Would you like to read more first? Every course outline is on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains how lessons work.',
    note: 'A WhatsApp message is usually answered fastest. The number is Indian because our team is in India; there is no Australian office.',
    formNote: 'Free, with no card and no obligation. We reply once to arrange it.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Coding for kids' },
        { href: '/ai-classes-for-teens-australia', label: 'AI for teens' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' }
      ] },
      { h4: 'Competitions', links: [
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/australian-student-hackathons', label: 'Student hackathons' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' }
      ] }
    ],
    bottomRight: 'Independent of Young ICT Explorers and SAP; facts checked at source'
  },

  personalityCss: `
.ag-root.ag-ycte .ag-hero-grid { gap: clamp(1rem, 2.8vw, 2.4rem); }
.ag-root.ag-ycte .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-ycte .ag-capsule { border-left-width: 6px; }
.ag-root.ag-ycte .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-ycte .ag-table caption { text-align: left; }
.ag-root.ag-ycte .ag-table th { letter-spacing: 0.012em; }
.ag-root.ag-ycte .ag-spec dt { letter-spacing: 0.14em; }
.ag-root.ag-ycte .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'Young ICT Explorers pages, read 7 October 2026. Home: "Australia\'s National Digital Technology Competition for students in years 3 - 12"; "Young ICT Explorers (YICTE) is a non-profit competition founded by SAP". What is a YICTE project: "student-created digital solution that responds to a real-world need"; "individuals or teams of up to four students from Years 3-12". Rules: teams up to 4; categories 3-4, 5-6, 7-8, 9-10 and 11-12; submission by "31 July 2026, 11:59pm"; "Reports must not exceed 5 pages in total"; project talent release form; ZIP "cannot exceed 20 MB"; core criteria Creativity and Innovation, Quality and Completeness, Level of Difficulty, Documentation. 2026 Key Dates: Registrations Close 1 July; Project Documentation Due 31 July; State Reviews 3 August to 20 October; State Awards 29 October (Zoom, 1pm AEST); National Finals Review 9 to 21 November; National Awards 26 November; Zoom review 10 minutes (5 present, 5 questions); senior categories 3 August to 30 September, junior 1 September to 29 October; pre-recorded video max 8 minutes, due 30 September. Core Awards: optional awards only after core entry; prototypes welcome; project types listed. FAQ: individuals may enter; copyright question referred to Copyright Act 1968 and Australian Copyright Council.',
    localProject: 'A MoSCoW worked example on an invented lost property finder by three Year 8 students with 36 hours (3 students x 2 hours x 6 weeks): Musts 6+5+6+3 = 20 hours (about 56%), Shoulds 3+2+5 bring it to 30, one 4-hour Could (email notice) fits for 34 hours with 2 to spare, the 8-hour photo recognition Could does not, and two Won\'t items (phone app 12 h, sharing between schools 10 h) are recorded for the report\'s "what would you do differently".',
    requiredMentions: ['founded by SAP', 'project talent release form', '20 MB', 'Creativity and Innovation', 'MoSCoW', 'lost property finder', '26 November 2026', 'Years 11-12', '10-minute session'],
    sources: [
      { claim: 'YICTE home page: competition description, Years 3 to 12, non-profit founded by SAP.', url: 'https://www.youngictexplorers.net.au/' },
      { claim: 'YICTE rules: teams, categories, report limit, ZIP limit, release form, judging criteria.', url: 'https://www.youngictexplorers.net.au/competition-details/rules/' },
      { claim: 'YICTE 2026 key dates: registration, submission, reviews, awards.', url: 'https://www.youngictexplorers.net.au/competition-details/key-dates/' },
      { claim: 'YICTE Core Awards: categories, project types, judging questions, prototypes welcome.', url: 'https://www.youngictexplorers.net.au/yicte-core-awards/' },
      { claim: 'What is a YICTE project: definition and team size.', url: 'https://www.youngictexplorers.net.au/what-is-a-yicte-project/' },
      { claim: 'YICTE FAQ: individual entry, large videos, copyright referral.', url: 'https://www.youngictexplorers.net.au/faq/' }
    ],
    rejectedClaims: [
      'Any entry fee or prize value: not shown (one-currency rule; none needed).',
      'Exact names of optional awards beyond their subjects: described generically to keep the page factual and brief.',
      'Any 2027 date: not yet published; the page tells families to check the key dates page.',
      'Any legal guidance on copyright: none given; the organisers\' own referral is reported.',
      'Any claim that we build, write or present entries: we do not.',
      'Any promise of an award or national finals place: none made.',
      'Affiliation with Young ICT Explorers or SAP: none; stated on the page.'
    ]
  }
};
