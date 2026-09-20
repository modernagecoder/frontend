'use strict';
// Big Bang Competition project help (ag- competition spoke, UK cluster Phase 2).
// Facts read at eukeducation.org.uk on 20 September 2026 (thebigbang.org.uk redirects there):
//  - Run by EngineeringUK, operating as EUK Education. "Free and open to students aged 11 to 18".
//  - Eligibility: "entrants must be aged between 11 and 18 when the project is entered. They must also be
//    in full-time state funded secondary education or home educated or be entering as part of a
//    community group". Students at independent or private schools are ineligible except SEND independent
//    schools, and joint entries combining independent and state school students are permitted if the
//    numbers are equal.
//  - "projects can be completed by teams of any size".
//  - Three streams: Science, Engineering and Technology. Three age categories: Junior (Years 7 to 9 in
//    England and Wales), Intermediate (Years 10 to 11) and Senior (Years 12 to 13).
//  - "entry into The Competition is through the online entry only. Online entry will open in the Autumn
//    term 2026". Entrants submit written entries and/or videos up to five minutes long, with word limits
//    per section.
//  - Titles: UK Young Engineer of the Year, supported by Thales; UK Young Technologist of the Year,
//    supported by Siemens; UK Young Scientist of the Year. Awards are made at The Big Bang Fair in June.
//  - Cash prizes are published in pounds and are NOT printed here under the one-currency rule.
// Spine: five minutes is a word budget. Our arithmetic of 20 September 2026, with the pace stated as an
// assumption rather than a fact: at 110, 130 and 150 words a minute, a five-minute video holds 550, 650
// and 750 words. At 130 a minute, a 650-word budget split across five questions gives 98 words for the
// problem, 195 for what was built, 162 for the testing, 130 for what went wrong and 65 for what comes
// next. Most entrants discover the limit while recording; the ones who plan it sound composed.
// This page also carries the school-eligibility rule, which is unusual and rarely stated elsewhere.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'BIG BANG', label: 'The Big Bang Competition', blurb: 'Teams of any size, three streams, and five minutes to explain a year of work.' },
  slug: 'big-bang-competition-project-help',
  code: 'bbc',
  accent: '#303E7E',
  accentRationale: 'Big Bang Competition: a medium indigo-blue from the solver (8.05:1 on every paper tint), less saturated than the junior olympiad navy and bluer than the Astro Pi slate',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Big Bang Competition project help',
  title: 'Big Bang Competition Project Help | Science, Engineering, Tech',
  description: 'Help with a Big Bang Competition entry: who can enter, three streams and three age groups, teams of any size, and how to fit a project into five minutes.',
  ogDescription: 'The Big Bang Competition judges a written entry and a video of up to five minutes. Five minutes is a word budget, and planning it is most of the work.',
  twitterDescription: 'Big Bang Competition help: eligibility, the three streams, and fitting a project into five minutes.',
  pageName: 'Big Bang Competition Project Help',
  webPageDescription: 'Guidance for students entering the EngineeringUK Big Bang Competition, covering eligibility including the state school rule, the three streams and age categories, team size, and how to plan a five-minute project video.',
  courseDescription: 'Live online coding, data and AI classes for students aged 11 to 18 building science, engineering and technology projects for competition entry.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Big Bang Competition',
  navLinks: [
    { href: '#entry', label: 'Who can enter' },
    { href: '#fiveminutes', label: 'Five minutes' },
    { href: '#projects', label: 'Project ideas' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Ages 11 to 18 &middot; Science, engineering, technology',
  h1: 'Big Bang Competition project help',
  lede: 'The Big Bang Competition is the largest project competition open to state school students in Britain, and it has an eligibility rule almost nobody mentions: it is for young people in full-time state-funded secondary education, home-educated students, or those entering through a community group. Independent school pupils are not eligible, except at SEND independent schools. Beyond that it is wide open: three streams, three age groups, teams of any size, free to enter, and judged on a written entry and a video of up to five minutes. This page is mostly about those five minutes, because they decide more than the project does.',
  secondaryCta: { href: '#fiveminutes', label: 'See the five-minute word budget' },
  wa: 'Hello Modern Age Coders, my child is entering the Big Bang Competition and I would like a free class.',
  heroNote: 'Quoted from EngineeringUK with the date we read it &middot; Our own arithmetic, labelled &middot; No prize money printed',
  spec: [
    ['Organiser', 'EngineeringUK, as EUK Education'],
    ['Ages', '11 to 18 when the project is entered'],
    ['Schools', 'State funded, home educated or community group'],
    ['Cost', 'Free'],
    ['Streams', 'Science, Engineering, Technology'],
    ['Age groups', 'Junior, Intermediate, Senior'],
    ['Teams', 'Any size'],
    ['Entry', 'Online, with a video up to five minutes']
  ],
  capsuleQ: 'In short',
  capsule: 'The Big Bang Competition is run by EngineeringUK, operating as EUK Education, and is "free and open to students aged 11 to 18". The rules say "entrants must be aged between 11 and 18 when the project is entered" and that "they must also be in full-time state funded secondary education or home educated or be entering as part of a community group"; independent and private school students are not eligible, except SEND independent schools, with joint entries allowed where numbers are equal. "Projects can be completed by teams of any size." There are three streams, Science, Engineering and Technology, and three age categories: Junior for Years 7 to 9 in England and Wales, Intermediate for Years 10 to 11 and Senior for Years 12 to 13. Entry is online only, opening in the autumn term, with written entries and videos of up to five minutes. The titles are UK Young Engineer, UK Young Technologist and UK Young Scientist of the Year, awarded at The Big Bang Fair in June. We teach the building. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a technology stream project',
    lede: 'Choose by what the project needs to do, not by the year group entering it.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'BBC / 01', title: 'Python from start to finish', note: 'The language most technology projects are built in, taught until a student can debug their own work.' },
      { course: 'data-science-course-for-teens-python-data', code: 'BBC / 02', title: 'Data science with Python', note: 'For a project with measurements in it: collecting, cleaning and presenting data without overstating what it shows.' },
      { course: 'ai-ml-masterclass-teens', code: 'BBC / 03', title: 'AI and machine learning for teens', note: 'For a project with a trained model, including how to report what it gets wrong.' }
    ]
  },

  sections: [
    {
      id: 'entry', tint: 'tint', eyebrow: 'Who can enter',
      h2: 'Three streams, three age groups, and a rule about schools',
      lede: 'Facts read at EngineeringUK\'s own pages on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'The Big Bang Competition as its organiser describes it', head: ['Part', 'What the organiser says', 'What it means'], rows: [
          ['Who runs it', 'EngineeringUK, operating as EUK Education', 'The charity behind The Big Bang Fair'],
          ['Age', '"entrants must be aged between 11 and 18 when the project is entered"', 'Age at entry, not at the final'],
          ['Schools', '"in full-time state funded secondary education or home educated or be entering as part of a community group"', 'Independent and private school students are not eligible, except SEND independent schools'],
          ['Mixed entries', 'Joint entries combining independent and state school students are permitted if numbers are equal', 'A specific and unusual accommodation, worth knowing'],
          ['Teams', '"projects can be completed by teams of any size"', 'One student or a whole club'],
          ['Streams', 'Science, Engineering and Technology', 'A coding project sits naturally in Technology'],
          ['Age groups', 'Junior for Years 7 to 9, Intermediate for Years 10 to 11, Senior for Years 12 to 13', 'Compared within a band, not against sixth formers'],
          ['Entry', '"entry into The Competition is through the online entry only"', 'No paper form and no regional heat to attend first'],
          ['What is submitted', 'Written entries and, or, videos of up to five minutes, with word limits per section', 'The explanation is the entry'],
          ['Titles', 'UK Young Engineer of the Year, UK Young Technologist of the Year and UK Young Scientist of the Year', 'Awarded at The Big Bang Fair in June']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The school rule is the reason to read the eligibility page before starting. Most UK competitions are open to everyone; this one is deliberately aimed at state-funded and home-educated students and at community groups, and a family at an independent school who spends a term on a project will find that out too late.',
            'The accommodation for joint entries is unusual enough to repeat: a mixed team is allowed where the numbers from each sector are equal. A school partnership can therefore enter together, which very few competitions permit at all.'
          ],
          right: [
            'Teams of any size is the other rule worth planning around. A whole computing club can enter one project, which changes what is possible: a group of eight can build and test something none of them could finish alone, and nobody is left out for want of a place on a team of four.',
            'Entry opens in the autumn term and closes before the spring, with awards at the Fair in June. EngineeringUK publishes the exact dates each cycle, and cash prizes in pounds, which we do not print here.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://eukeducation.org.uk/our-programmes/the-big-bang-competition/" rel="noopener" target="_blank">EUK Education, The Big Bang Competition</a> and its <a class="ag-inline-link" href="https://eukeducation.org.uk/about-us/our-activities-for-schools/the-big-bang-competition/enter-the-big-bang-competition/rules-and-eligibility/" rel="noopener" target="_blank">rules and eligibility</a>, read 20 September 2026. Modern Age Coders is not connected with EngineeringUK, Thales or Siemens.' }
      ]
    },
    {
      id: 'fiveminutes', tint: 'deep', eyebrow: 'The method',
      h2: 'Five minutes is a word budget',
      lede: 'A video of up to five minutes sounds generous until a student tries to describe a year of work in one. The arithmetic below is ours, and the speaking pace in it is an assumption we state rather than a fact.',
      body: [
        { kind: 'p', html: 'Nobody thinks of a video as having a word limit, but it does. A student speaking at a steady, unhurried pace fits a specific number of words into five minutes, and that number is smaller than almost anyone expects.' },
        { kind: 'table', caption: 'Our arithmetic: what five minutes holds, at three speaking paces', head: ['Pace', 'Words in five minutes', 'Feels like'], rows: [
          ['110 a minute', '550', 'Slow and clear, good for a nervous speaker'],
          ['130 a minute', '650', 'An ordinary explaining voice'],
          ['150 a minute', '750', 'Brisk, and hard to follow on a first hearing']
        ] },
        { kind: 'p', html: 'Take the middle one. Six hundred and fifty words is roughly a page and a half of writing, for an entire project. The useful move is to spend it on purpose rather than discover it at minute four, so here is a budget that answers the five questions judges actually have.' },
        { kind: 'table', caption: 'Our suggested split of 650 words, with the time each buys', head: ['Section', 'Words', 'Seconds at 130 a minute'], rows: [
          ['What problem it solves', '98', '45'],
          ['What you built', '195', '90'],
          ['How you tested it', '162', '75'],
          ['What went wrong', '130', '60'],
          ['What you would do next', '65', '30']
        ] },
        { kind: 'three', cells: [
          { h3: 'Testing gets more than you think', p: 'Seventy-five seconds on how a project was tested is more than most entries give it, and it is the section that separates work from enthusiasm.' },
          { h3: 'What went wrong gets a minute', p: 'Students cut this first and judges want it most. A project with no failures described is either unfinished or not being described honestly.' },
          { h3: 'The problem gets forty-five seconds', p: 'Not three minutes. A judge needs to know what the project is for, not the history of the field.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Write the script, count the words, read it aloud once with a timer. That is the whole technique, and it takes an evening. A student who has done it sounds composed on camera because they are not deciding what to say while saying it.',
            'The written entry has its own word limits per section, published by the organiser, and the same discipline applies. A limit is a budget, and a budget spent deliberately beats one discovered at the end.'
          ],
          right: [
            'This also happens to be the skill the rest of a technical life is made of: the design review, the job interview, the one-slide summary. A fifteen-year-old who can explain their own work in five minutes has something that outlasts any competition result.',
            'The other project showcase on our calendar, <a class="ag-inline-link" href="/coolest-projects-uk-project-ideas">Coolest Projects</a>, has no ranking at all and no eligibility rule about schools, which makes it a good companion or an alternative.'
          ] },
        { kind: 'source', html: 'The word counts are ours, computed on 20 September 2026 from the organiser\'s five-minute limit. The speaking paces are assumptions we have labelled, not figures from any source.' }
      ]
    },
    {
      id: 'projects', tint: 'plain', eyebrow: 'What to build',
      h2: 'Projects that fit a school year and survive a judge',
      lede: 'The ideas below are ours. Each is small enough to finish and has something honest to say in the testing section.',
      body: [
        { kind: 'table', caption: 'Five project shapes for the Technology stream', head: ['Shape', 'An example', 'What the testing section says'], rows: [
          ['Measure something real', 'A sensor logging noise or temperature in one classroom for a term', 'How the readings were checked against a second instrument'],
          ['Automate a chore', 'A program that sorts and renames a school photo archive', 'What it did to the awkward filenames nobody anticipated'],
          ['Model a decision', 'A tool that suggests the cheapest bus route for a school trip', 'Where its suggestion differed from a human\'s, and who was right'],
          ['Train and evaluate', 'A classifier on photographs the student labelled themselves', 'How often it is wrong, and on which kind of picture'],
          ['Build for somebody', 'An app made for one named person with a specific need', 'What that person said after using it for a fortnight']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Every row in that table has the same shape: something was built, and then something was found out. Judges are looking for evidence that a student learned from their own project, and the fastest way to show it is a result that surprised the person who built it.',
            'The last row is the strongest and the least used. A project made for one real person, tested by that person, beats a more ambitious project tested by nobody, and it gives a student something to say that no one else can say.'
          ],
          right: [
            'What does not work is scale for its own sake. A project that took a year and cannot be explained in five minutes is not a better entry; it is a harder one to enter.',
            'For younger students, the Junior band starts at Year 7 and the same rules apply, so a club project begun in September is a realistic entry by the spring.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs to an entry that explains itself',
    lede: 'The rungs are about evidence and explanation, which is what the entry form asks for.',
    table: { caption: 'From an idea to a five-minute account of it', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Years 7 to 8', '1. Something built', 'A working thing exists, however small'],
      ['Years 9 to 10', '2. Something measured', 'The student can say how well it works, with numbers'],
      ['Years 10 to 11', '3. Something found out', 'A result surprised the person who built it'],
      ['Years 12 to 13', '4. Something explained', 'Five minutes, scripted, with the failures included']
    ] },
    left: { h3: 'If entry closes soon', ps: [
      'Write the script before filming. Count the words, read it once with a timer, then record.',
      'Do not cut the section on what went wrong. It is the part judges read most carefully.'
    ] },
    right: { h3: 'If the school is independent', ps: [
      'The eligibility rules exclude independent school students except at SEND independent schools, so check before starting a term of work.',
      '<a class="ag-inline-link" href="/coolest-projects-uk-project-ideas">Coolest Projects</a> has no such rule and no ranking, and every checked entry is shown.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Courses behind a technology project',
    lede: 'Grouped by what the project needs to do, with the syllabus behind each card.',
    bands: [
      { num: 'I', h3: 'Building it', sub: 'Ages 11 to 16', courses: [
        { code: 'BBC / A / 01', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'The language most entries are written in.' },
        { code: 'BBC / A / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'An interface somebody who is not you can use.' },
        { code: 'BBC / A / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'A working site, with the database it needs.' }
      ] },
      { num: 'II', h3: 'Measuring it', sub: 'The evidence a judge wants', courses: [
        { code: 'BBC / B / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Real measurements, honestly presented.' },
        { code: 'BBC / B / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'How much a result actually shows.' },
        { code: 'BBC / B / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Checking a method rather than trusting it.' }
      ] },
      { num: 'III', h3: 'Modelling it', sub: 'For projects with AI in them', courses: [
        { code: 'BBC / C / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Training a model and reporting it honestly.' },
        { code: 'BBC / C / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Choosing a method and justifying it.' },
        { code: 'BBC / C / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The younger route into the same ideas.' }
      ] },
      { num: 'IV', h3: 'Alongside school', sub: 'Qualifications', courses: [
        { code: 'BBC / D / 01', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'The exam running underneath, board by board.' },
        { code: 'BBC / D / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A-level maths', blurb: 'For a senior entry with modelling in it.' },
        { code: 'BBC / D / 03', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'For a younger sibling starting out.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Project teaching, weekly, with the write-up in mind',
    lede: 'Lessons are live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.',
    slots: [
      { time: 'Early weekday evening', l: 'For Years 7 to 9.' },
      { time: 'Later weekday evening', l: 'For GCSE-age and sixth-form entrants.' },
      { time: 'Weekend morning', l: 'For a long session on a build or a script.' }
    ],
    cells: [
      { h3: 'Evidence built in', p: 'Every project we teach records how it was tested, because that is the section entries lose marks on.' },
      { h3: 'Scope kept honest', p: 'We help a student cut a project to something finishable, which is most of what a deadline needs.' },
      { h3: 'Five to ten learners', p: 'Enough for ideas to cross the room, few enough that every project gets looked at.' },
      { h3: 'The student owns it', p: 'We teach and review. The project is theirs and the entry is theirs to submit.' },
      { h3: 'One to one when useful', p: 'For an ambitious build or a student preparing a video.' },
      { h3: 'No role in the entry', p: 'We do not submit entries and have no relationship with EngineeringUK.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Four things our students built, finished and put online, outside any competition. They are collected on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Families\' reviews from our Google profile, quoted as left.',

  fees: {
    h2: 'Fees',
    lede: 'Charged monthly in US dollars, one rate everywhere but India, with nothing to pay up front and no term to sign.',
    free: ['One real lesson on the build', 'An honest answer about the deadline', 'No payment details asked for'],
    group: ['Five to ten students at one level', 'The same teacher weekly', 'Projects reviewed as they grow', 'A certificate at the end'],
    one: ['A teacher working with one student', 'Shaped around the build', 'Useful in the weeks before entry closes']
  },

  faq: {
    eyebrow: 'Big Bang Competition questions',
    h2: 'What students and parents ask',
    items: [
      { q: 'Who can enter the Big Bang Competition?', a: 'The rules say entrants must be aged between 11 and 18 when the project is entered, and must be in full-time state funded secondary education, home educated, or entering as part of a community group.' },
      { q: 'Can independent school students enter?', a: 'No, except at SEND independent schools. Joint entries combining independent and state school students are permitted where the numbers from each are equal.' },
      { q: 'Is it free?', a: 'Yes. The organiser describes the competition as free and open to students aged 11 to 18.' },
      { q: 'How big can a team be?', a: 'Any size. The rules say projects can be completed by teams of any size, so a whole club can enter one project.' },
      { q: 'What are the streams and age groups?', a: 'Three streams, Science, Engineering and Technology, and three age categories: Junior for Years 7 to 9 in England and Wales, Intermediate for Years 10 to 11 and Senior for Years 12 to 13.' },
      { q: 'How do you enter?', a: 'Online only. The organiser says entry is through the online form, which opens in the autumn term, and entrants submit written entries and, or, videos of up to five minutes with word limits per section.' },
      { q: 'How long should the video be?', a: 'Up to five minutes, which is a smaller budget than it sounds. At an ordinary speaking pace of about 130 words a minute that is roughly 650 words, about a page and a half, for a whole project.' },
      { q: 'How should those five minutes be spent?', a: 'Our suggested split of 650 words is 98 on the problem, 195 on what was built, 162 on how it was tested, 130 on what went wrong and 65 on what comes next. Students cut the failures first and judges want them most.' },
      { q: 'What are the awards?', a: 'The titles are UK Young Engineer of the Year, supported by Thales, UK Young Technologist of the Year, supported by Siemens, and UK Young Scientist of the Year, awarded at The Big Bang Fair in June. Cash prizes are published by the organiser in pounds and we do not print them.' },
      { q: 'What makes a strong project?', a: 'One where something was built and then something was found out. A result that surprised the person who built it is the clearest evidence a judge can see, and a project made and tested for one real person beats a more ambitious one tested by nobody.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Other places to show a project',
    lede: 'A showcase with no ranking, challenges with a clock, and the whole year in one table.',
    items: [
      { href: '/coolest-projects-uk-project-ideas', label: 'Coolest Projects UK', p: 'No ranking, no school rule, every checked entry shown.' },
      { href: '/astro-pi-mission-zero-and-space-lab-help', label: 'Astro Pi Mission Zero', p: 'Run a Python program on the space station.' },
      { href: '/uk-olympiad-in-artificial-intelligence-preparation', label: 'UK Olympiad in AI', p: 'A free three-hour exam for secondary students.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Every competition we could confirm, laid out by month.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects our own students have finished and published.' }
    ]
  },

  start: {
    h2: 'Book a free project lesson',
    lede: 'Tell us the year group and what the project is meant to do. The free lesson works on the build, and afterwards we say honestly whether it will be finished in time.',
    readFirst: 'Rather read first? Syllabuses are on the <a class="ag-inline-link" href="/courses">course pages</a>, the method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the topic order on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'WhatsApp is the quickest way through and free from a UK mobile. The number is an Indian one, which we always say, and we have no premises in Britain.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Project competitions', links: [
        { href: '/coolest-projects-uk-project-ideas', label: 'Coolest Projects UK' },
        { href: '/astro-pi-mission-zero-and-space-lab-help', label: 'Astro Pi' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/student-labs', label: 'Student labs' }
      ] },
      { h4: 'Building and measuring', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/courses/data-science-course-for-teens-python-data', label: 'Data science with Python' },
        { href: '/courses/ai-ml-masterclass-teens', label: 'AI and machine learning' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the project; the entry belongs to the student'
  },

  personalityCss: `
.ag-root.ag-bbc .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-bbc .ag-capsule { border-left-width: 6px; border-radius: 0 9px 9px 0; }
.ag-root.ag-bbc .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-bbc .ag-table caption { text-align: left; font-weight: 700; font-size: 0.95em; }
.ag-root.ag-bbc .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-bbc .ag-spec dt { letter-spacing: 0.122em; }
.ag-root.ag-bbc .ag-three h3 { letter-spacing: -0.0075em; }
.ag-root.ag-bbc .ag-slots { gap: 1.22rem; }
`,

  mustMention: ['full-time state funded secondary education', 'teams of any size', 'UK Young Technologist of the Year', '650 words', 'SEND independent schools', 'Years 7 to 9', 'five minutes']
};
