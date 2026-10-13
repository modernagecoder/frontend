'use strict';
// Coding classes for 11 and 12 year olds, Australia (ag- topic door; AU cluster Phase 2, row 28).
// Demand: Google autocomplete (en-AU) "coding classes for 11 year olds"; ages 11 and 12 on one page to avoid
// near-duplicate single-age pages.
// Sources, read raw on 7 October 2026 (curl, default agent):
//  - ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6 (.docx): AC9TDI6K03 with the
//    elaboration "converting letters in a message to numbers using their position in the alphabet"; AC9TDI6K04;
//    AC9TDI6P09; AC9TDI6P10; Year 6 band description and achievement standard.
//  - ACARA, Digital Technologies curriculum content 7-10 (.docx): AC9TDI8K04 with the elaboration "counting in
//    binary from 0 to 31, and recognising that one byte = 8 bits, which can represent from 0 to 255".
// Lesson family: the A1Z26 letter-number code, then 5-bit binary: A is 1 and Z is 26, so every letter fits in
// five binary digits (2 to the power 5 is 32), while four digits (16 values) are not enough. CODE is 3, 15, 4, 5,
// which is 00011 01111 00100 00101 (our arithmetic, checked in Python).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'AGES 11 AND 12', blurb: 'Coding for Australian 11 and 12 year olds: Python, web and app projects, how computers turn letters into numbers and binary, and getting ready for Year 7.' },
  slug: 'coding-classes-for-11-and-12-year-olds-australia',
  code: 'kelv',
  accent: '#151251',
  accentRationale: 'Coding classes for 11 and 12 year olds, Australia: a deep night navy chosen by hand, muted, at least 10 RGB units from every accent in use and 40 from every Australian page',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Coding classes for 11 and 12 year olds, Australia',
  title: 'Coding Classes for 11 and 12 Year Olds in Australia',
  description: 'Coding classes for 11 and 12 year olds in Australia: Python, websites and apps, how computers store letters as binary, and getting ready for Year 7. Live online.',
  ogDescription: 'Eleven and twelve is the bridge from primary to high school. Python, web and app projects, binary from first principles, and live online lessons for Australian children.',
  twitterDescription: 'Coding for 11 and 12 year olds in Australia: Python, websites, apps and binary, getting ready for Year 7.',
  pageName: 'Coding Classes for 11 and 12 Year Olds in Australia',
  webPageDescription: 'A guide for Australian parents of 11 and 12 year olds to coding: text programming in Python, web and app projects, how digital systems represent data in binary, and preparation for Year 7.',
  courseDescription: 'Live online coding for Australian 11 and 12 year olds: Python, web development, app making and AI literacy, in small groups or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Coding for 11 and 12 year olds',
  navLinks: [
    { href: '#bridge', label: 'The bridge years' },
    { href: '#letters', label: 'Letters to binary' },
    { href: '#curriculum', label: 'At school' },
    { href: '#paths', label: 'Paths' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 11 and 12 &middot; Live online',
  h1: 'Coding classes for 11 and 12 year olds',
  lede: 'Eleven and twelve are the bridge years. Most Australian children of this age are finishing primary school or starting Year 7, and their coding should be crossing a bridge too: from block programs to typed code, from making games for fun to understanding how computers actually work. Children of this age can think abstractly enough to enjoy ideas such as binary and data, and they are old enough to care about privacy and what they leave behind online. This page explains what eleven and twelve year olds can realistically achieve, works through one idea from the curriculum (how a computer turns a letter into ones and zeros), shows how it lines up with Years 5 to 8, and sets out the paths our students take from here.',
  secondaryCta: { href: '#letters', label: 'See letters become binary' },
  wa: 'Hello Modern Age Coders, our child is 11 or 12 and we are in Australia. Could we book a free first coding class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; real code, understood line by line',
  spec: [
    ['For', 'Children aged 11 and 12'],
    ['School years', 'Usually Years 6 and 7'],
    ['Main language', 'Python'],
    ['Also', 'Web pages, apps, AI literacy'],
    ['Big new ideas', 'Data, binary, functions'],
    ['Format', 'Live online lessons'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding classes for 11 and 12 year olds usually move children from block coding into a text language such as Python, alongside projects like websites and apps. Children of this age also learn how computers represent data: the Australian Curriculum expects Years 5 and 6 to "explain how digital systems represent all data using numbers" and to explore binary. It is the ideal preparation for Year 7, when programming in a general-purpose language becomes part of the curriculum.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three paths for 11 and 12 year olds',
    lede: 'Pick by interest. All three are taught live, with text coding at the centre.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'KELV / 01', title: 'Python and AI for Kids', note: 'The core choice at eleven: real Python, games, drawings and small AI projects, up to age 12.' },
      { course: 'kids-ai-web-development-course', code: 'KELV / 02', title: 'Web Development for Kids', note: 'For children who want to publish a website of their own: HTML, CSS and a first look at JavaScript.' },
      { course: 'ai-literacy-for-kids-course', code: 'KELV / 03', title: 'AI Literacy for Kids', note: 'How AI really works and how to use it wisely, for curious 8 to 14 year olds.' }
    ]
  },

  sections: [
    {
      id: 'bridge', tint: 'tint', eyebrow: 'The bridge years',
      h2: 'What eleven and twelve year olds can achieve',
      lede: 'With a little experience, children of this age write real programs from a blank file, organise them into parts and explain how they work. Without experience, they learn faster than younger beginners because they can handle abstract ideas sooner.',
      body: [
        { kind: 'table', caption: 'Coding at eleven and twelve (our teaching experience)', head: ['', 'With some coding behind them', 'Starting from scratch'], rows: [
          ['First term', 'Python programs with functions and lists', 'A few weeks of Scratch, then first Python'],
          ['Projects', 'A text adventure, a quiz with a high-score file, a small website', 'A Scratch game, then a Python number-guessing game'],
          ['Thinking', 'Plans a program before writing it', 'Learns to break problems into steps'],
          ['Debugging', 'Reads error messages and fixes them alone', 'Fixes errors with a hint from the teacher'],
          ['By the end of a year', 'Ready for Year 7 coding with room to spare', 'Comfortable in Python and ready for Year 7']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Never too late at eleven',
          left: [
            'Parents of eleven and twelve year olds sometimes worry that their child has "missed" the early years. They have not. A twelve year old usually covers in one term what takes a seven year old a year, because they read, type and reason more fluently.',
            'For complete beginners we spend a short time in Scratch to build the core ideas, then move to Python quickly.'
          ],
          rightH3: 'Making things that matter to them',
          right: [
            'At this age motivation comes from making something real: a website about their favourite band, an app for their sports team, a game they can share with friends.',
            'We choose projects with the child, then teach whatever ideas the project needs. That keeps them coming back.'
          ] },
        { kind: 'p', mt: true, html: 'Most Australian eleven and twelve year olds are in Year 6 or Year 7, and Year 7 is the first year of secondary school in every state and territory. Our page on <a class="ag-inline-link" href="/coding-for-year-7-australia">coding in Year 7</a> covers that first high school year in detail.' }
      ]
    },
    {
      id: 'letters', tint: 'deep', eyebrow: 'A worked example',
      h2: 'From letters to numbers to binary',
      lede: 'Computers only store numbers, and underneath those, only ones and zeros. This lesson shows eleven and twelve year olds exactly how a word gets there, in two steps they can do with a pencil.',
      body: [
        { kind: 'p', html: '<strong>Step one: letters to numbers.</strong> Give each letter its position in the alphabet: A is 1, B is 2, and so on up to Z, which is 26. Puzzle fans call this the <strong>A1Z26</strong> code. The word <code>CODE</code> becomes 3, 15, 4, 5. It is exactly the activity ACARA suggests for Years 5 and 6: "converting letters in a message to numbers using their position in the alphabet".' },
        { kind: 'p', mt: true, html: '<strong>Step two: numbers to binary.</strong> In binary, each digit is worth double the one to its right: 16, 8, 4, 2, 1. To write 15, children find the digits that add to it: 8 + 4 + 2 + 1, so 15 is <code>01111</code>. Five digits can make every number from 0 up to 31, and 26 letters fit comfortably.' },
        { kind: 'table', mt: true, caption: 'The word CODE in A1Z26 and in five-digit binary (our worked example, checked in Python)', head: ['Letter', 'Position (A1Z26)', 'Binary, five digits', 'Made from'], rows: [
          ['C', '3', '00011', '2 + 1'],
          ['O', '15', '01111', '8 + 4 + 2 + 1'],
          ['D', '4', '00100', '4'],
          ['E', '5', '00101', '4 + 1']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why five digits, not four?',
          left: [
            'Four binary digits can only make 16 different values, 0 to 15, which is not enough for 26 letters: P to Z would have nowhere to go. Five digits make 32 values, which is enough with six to spare.',
            'Children work this out by trying, and it is a lovely moment: they have just reasoned about storage the way a computer designer does.'
          ],
          rightH3: 'How real computers differ',
          right: [
            'Real computers use a longer code that covers capitals, small letters, digits, punctuation and symbols from every language, so they need many more digits per character.',
            'In Year 7 and 8 the curriculum takes the next step, with students "counting in binary from 0 to 31" and learning that a byte of 8 bits can represent 0 to 255. Our five-digit code is that same 0 to 31.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Write it in Python', p: 'Children then write a short Python function that turns any word into A1Z26 numbers, and another that turns numbers into five-digit binary.' },
          { h3: 'Send secret messages', p: 'Classmates swap binary messages and decode each other\'s, checking the program against their pencil work.' },
          { h3: 'Ask a better question', p: 'Is this a secret code? Not really: anyone who knows the rule can read it. That opens a good discussion about real encryption.' }
        ] }
      ]
    },
    {
      id: 'curriculum', tint: 'tint', eyebrow: 'The Australian Curriculum',
      h2: 'How this matches Years 5 to 8 at school',
      lede: 'Eleven and twelve year olds sit at the end of the Years 5 and 6 band and the start of the Years 7 and 8 band. Data and binary run through both.',
      body: [
        { kind: 'table', caption: 'Data, binary and privacy in Digital Technologies, Australian Curriculum v9 (quoted)', head: ['Code', 'Students learn to'], rows: [
          ['AC9TDI6K03', '"explain how digital systems represent all data using numbers"'],
          ['AC9TDI6K04', '"explore how data can be represented by off and on states (zeros and ones in binary)"'],
          ['AC9TDI6P10', '"explain the creation and permanence of their digital footprint and consider privacy when collecting user data"'],
          ['AC9TDI8K04', '"explain how and why digital systems represent integers in binary"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Thinking more abstractly',
          left: [
            'The Year 6 band description says students "think in a more abstract way, exploring how on and off states and whole numbers can be used to represent data". That shift is exactly what makes binary fun at eleven instead of baffling.',
            'It is also why Python suits this age: a typed program is itself an abstraction, a description of what should happen rather than a picture of it.'
          ],
          rightH3: 'Footprints and passphrases',
          right: [
            'The same band asks children to understand that what they post online can last. By the end of Year 6, the achievement standard says, students "identify their digital footprint and recognise its permanence".',
            'Children are also expected to use different passphrases for different accounts (AC9TDI6P09). We reinforce both habits in every course, because this is the age when many children start using more apps.'
          ] },
        { kind: 'source', html: 'Quoted from ACARA\'s Digital Technologies content files for <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">Foundation to Year 6</a> and <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Years 7 to 10</a>, as published on 7 October 2026.' }
      ]
    },
    {
      id: 'paths', tint: '', eyebrow: 'Paths',
      h2: 'Where eleven and twelve year olds go next',
      lede: 'By twelve, most children have a direction. These are the paths our students most often take, and what each one leads to by the mid-teens.',
      body: [
        { kind: 'table', caption: 'Paths from age 11 or 12', head: ['If they love', 'They learn', 'By about 14 they can'], rows: [
          ['Games', 'Python with Pygame, or Luau in Roblox Studio', 'Build and share a complete multi-level game'],
          ['Websites', 'HTML, CSS and JavaScript', 'Publish an interactive site of their own'],
          ['Apps', 'Block-based app making, then a text language', 'Put a working app on a phone'],
          ['Puzzles and maths', 'Python and algorithms', 'Solve competition-style problems in code'],
          ['AI', 'AI literacy, then Python', 'Explain how a model learns and build a small AI project']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'AI tools at this age',
          left: [
            'Eleven and twelve year olds increasingly meet AI chatbots at home and at school. We teach how these tools work and how to use them to learn, not to avoid learning.',
            'Many AI tools set minimum ages in their terms, so we only use kid-appropriate tools in lessons for this age, with parents informed.'
          ],
          rightH3: 'Competitions',
          right: [
            'Some children enjoy coding and maths competitions. Our <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">Australian competitions calendar</a> lists events by month, with links to each organiser.',
            'Competitions are optional: plenty of strong young coders never enter one.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages for eleven and twelve year olds',
    lede: 'With a weekly lesson, most children of this age reach the third stage within a school year, even from a standing start.',
    table: { caption: 'Coding stages at ages 11 and 12', head: ['Stage', 'What your child can do'], rows: [
      ['1. Into text', 'Writes and runs short Python programs and fixes their own typing errors'],
      ['2. Data', 'Explains how text becomes numbers and binary, and writes code that converts between them'],
      ['3. Structure', 'Organises a program into functions and lists and tests each part'],
      ['4. Projects', 'Plans and builds a website, app or game of their own design, then explains it']
    ] },
    left: { h3: 'Balancing coding with school', ps: [
      'Year 6 and Year 7 are busy, with new schools, homework and sport. One lesson a week is enough to keep coding growing without overload.',
      'Lessons pause easily over the holidays, and billing is monthly.'
    ] },
    right: { h3: 'Support through the move to high school', ps: [
      'For children starting Year 7, a term of Python beforehand turns the new subject into something familiar.',
      'We never do or check school assessment tasks, but we build the skills those tasks need.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses for ages 11 and 12',
    lede: 'Grouped by direction. The teacher in the free class helps choose.',
    bands: [
      { num: 'I', h3: 'Python and AI', sub: 'The core path', courses: [
        { code: 'KELV / PY / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Python games, drawings and small AI projects.' },
        { code: 'KELV / PY / 02', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How machines learn, and using AI wisely.' },
        { code: 'KELV / PY / 03', slug: 'maths-through-coding', title: 'Maths Through Coding', blurb: 'Python as a tool for exploring maths.' }
      ] },
      { num: 'II', h3: 'Web and apps', sub: 'For makers', courses: [
        { code: 'KELV / WEB / 01', slug: 'kids-ai-web-development-course', title: 'Web Development for Kids', blurb: 'Websites with HTML, CSS and JavaScript.' },
        { code: 'KELV / WEB / 02', slug: 'block-coding-app-development-masterclass', title: 'App Making for Kids', blurb: 'Phone apps, designed and built by the child.' },
        { code: 'KELV / WEB / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe Coding for Kids', blurb: 'Building with AI help, while understanding the result.' }
      ] },
      { num: 'III', h3: 'Games and puzzles', sub: 'For players and solvers', courses: [
        { code: 'KELV / PLAY / 01', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'Bigger games across several tools.' },
        { code: 'KELV / PLAY / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Game Coding', blurb: 'Luau and Roblox Studio, to a published game.' },
        { code: 'KELV / PLAY / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon Prep for Kids', blurb: 'Team projects built against the clock.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons through Year 6 and Year 7',
    lede: 'Lessons are taught live from India. Because every Australian state is a few hours ahead of India time, afternoons and weekends in Australia are comfortable for our teachers to cover.',
    slots: [
      { time: 'Weekday, late afternoon', l: 'Popular with Year 6 students.' },
      { time: 'Weekday, early evening', l: 'Often chosen once Year 7 brings a longer school day.' },
      { time: 'Weekend', l: 'For longer project sessions.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'Your child tries some Python with a teacher, and we recommend a path from what they enjoy.' },
      { h3: 'Small groups', p: 'Fifteen to twenty children of similar age and level, often from different states.' },
      { h3: 'One to one', p: 'For a child preparing for Year 7 quickly or chasing an ambitious project.' },
      { h3: 'Written by them', p: 'Every line is typed by the child; teachers guide with questions.' },
      { h3: 'Open to parents', p: 'You are welcome to watch any lesson, live.' },
      { h3: 'Privacy first', p: 'No personal details are shared in class, and accounts are set up with a parent.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Projects by our older students, several of whom wrote their first Python at eleven or twelve. More are in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Straight from our Google profile, in each parent\'s or student\'s own words.',

  fees: {
    h2: 'Fees for ages 11 and 12',
    lede: 'One monthly fee in US dollars applies to Australian families, with no joining charge and no fixed term.',
    free: ['A first Python task with a teacher', 'A suggested path and course', 'No card or bank details'],
    group: ['Fifteen to twenty children per class', 'One teacher across the months', 'Peers working at the same level', 'Stop after any month'],
    one: ['Lessons built around your child', 'Flexible weekly timing', 'Space for a project of their own']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'What parents of 11 and 12 year olds ask',
    items: [
      { q: 'What coding should an 11 year old learn?', a: 'Most eleven year olds are ready for a text language such as Python, often after a short spell of Scratch if they are new to coding. Web pages and app making are good parallel projects.' },
      { q: 'Is 12 too old to start coding?', a: 'Not at all. Twelve year olds usually learn quickly because they read, type and reason fluently, and many cover in a term what takes younger children a year.' },
      { q: 'What is the A1Z26 code?', a: 'A1Z26 replaces each letter with its position in the alphabet, so A is 1 and Z is 26. It is a simple way to show how computers turn letters into numbers before storing them.' },
      { q: 'What is binary?', a: 'Binary is a way of writing numbers using only 0 and 1, where each digit is worth double the one to its right. Computers store all data in binary because their circuits are either off or on.' },
      { q: 'How many binary digits does a letter need?', a: 'For just the 26 capital letters, five binary digits are enough, because five digits make 32 values. Real computers use longer codes to cover small letters, digits, punctuation and other languages.' },
      { q: 'Will coding help my child in Year 7?', a: 'Yes. Year 7 Digital Technologies expects programming in a general-purpose language, so a child who already writes Python arrives confident instead of starting from nothing.' },
      { q: 'Should my child use AI tools to code?', a: 'Used carefully, they can explain errors and ideas. We teach children to understand every line they use, and we follow each tool\'s minimum-age terms in lessons.' },
      { q: 'What does the curriculum expect by the end of Year 6?', a: 'Among other things, that students show how digital systems represent data, design algorithms with complex branching and iteration, implement them as visual programs with variables, and recognise the permanence of their digital footprint.' },
      { q: 'How often should an 11 or 12 year old have lessons?', a: 'Weekly lessons suit most families. Twice a week helps a child preparing quickly for Year 7 or a particular project.' },
      { q: 'What does it cost?', a: 'Your first class is free, with no card required. Group and one-to-one lessons are each charged monthly at the prices shown under Fees, and there is no enrolment fee.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Australian children around the move to high school.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'A starting point for every Australian guide we publish.' },
      { href: '/coding-for-year-7-australia', label: 'Coding for Year 7', p: 'The first year of high school programming.' },
      { href: '/coding-classes-for-9-and-10-year-olds-australia', label: 'Coding for 9 and 10 year olds', p: 'Variables, coordinates and complete games.' },
      { href: '/kids-coding-languages-australia', label: 'Kids coding languages', p: 'Python, JavaScript and Luau compared.' },
      { href: '/coding-for-12-year-olds', label: 'Coding for 12 year olds', p: 'Our general guide for twelve year olds.' },
      { href: '/python-for-12-year-olds', label: 'Python for 12 year olds', p: 'A closer look at Python at twelve.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send your details and we will call at a time that suits. In the free class your child writes a little Python with a teacher, and you hear which path would suit them, especially with Year 7 on the way.',
    readFirst: 'To get a feel for lessons first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes one closely; the <a class="ag-inline-link" href="/courses">courses</a> page shows what older students go on to.',
    note: 'WhatsApp is usually the fastest route from an Australian number. Since our team sits in India the number starts +91; we have no office in Australia.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Ages 11 and 12', links: [
        { href: '/coding-for-year-7-australia', label: 'Coding for Year 7' },
        { href: '/python-for-12-year-olds', label: 'Python for 12 year olds' },
        { href: '/coding-for-11-year-olds', label: 'Coding for 11 year olds' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/coding-classes-for-9-and-10-year-olds-australia', label: 'Ages 9 and 10' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'C is 3, and 3 is 00011'
  },

  personalityCss: `
.ag-root.ag-kelv .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-kelv .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-kelv .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-kelv .ag-table td code { letter-spacing: 0.04em; }
.ag-root.ag-kelv .ag-grid-3 h3 { letter-spacing: -0.006em; }
.ag-root.ag-kelv .ag-band-head h3 { font-weight: 620; }
`,

  dossier: {
    curriculumAuthority: 'Australia, Years 5 to 8. ACARA, Australian Curriculum v9, Digital Technologies F-6: AC9TDI6K03 "explain how digital systems represent all data using numbers", elaboration "converting letters in a message to numbers using their position in the alphabet"; AC9TDI6K04 "explore how data can be represented by off and on states (zeros and ones in binary)"; AC9TDI6P09 passphrases; AC9TDI6P10 "explain the creation and permanence of their digital footprint and consider privacy when collecting user data"; Year 6 band description "think in a more abstract way, exploring how on and off states and whole numbers can be used to represent data"; Year 6 achievement standard "identify their digital footprint and recognise its permanence". Digital Technologies 7-10: AC9TDI8K04 "explain how and why digital systems represent integers in binary", elaboration "counting in binary from 0 to 31".',
    localProject: 'A1Z26 then 5-bit binary: CODE is 3, 15, 4, 5, which is 00011 01111 00100 00101; 26 letters need five binary digits because four make only 16 values and five make 32; ties to the Years 7 and 8 elaboration "counting in binary from 0 to 31"; our arithmetic, checked in Python. Lesson family: the A1Z26 letter-number code then five-digit binary.',
    requiredMentions: ['A1Z26', '00011', '01111', 'AC9TDI6K03', 'AC9TDI6K04', 'AC9TDI6P10', 'AC9TDI8K04', 'counting in binary from 0 to 31', 'recognise its permanence'],
    sources: [
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6: AC9TDI6K03 and elaboration, AC9TDI6K04, AC9TDI6P09, AC9TDI6P10, Year 6 band description and achievement standard.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx' },
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content 7-10: AC9TDI8K04 and the elaboration on counting in binary from 0 to 31 and one byte representing 0 to 255.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' },
      { claim: 'ABS, Schools methodology, 2025: secondary school from Year 7 to Year 12 in all states and territories.', url: 'https://www.abs.gov.au/methodologies/schools-methodology/2025' }
    ],
    rejectedClaims: [
      'Australian social media minimum-age rules: not read raw at a government source for this page, so not mentioned.',
      'Specific AI tool minimum ages: they differ by tool and change; the page says we follow each tool\'s terms without quoting ages.',
      'The exact character code standard used by computers (ASCII, Unicode) with numbers: deliberately left general on this page; the Year 7 page covers a number example.',
      'Any promise of selective-school or Year 7 results: refused.',
      'Lesson length in minutes: not in our brand facts, so not stated.'
    ]
  }
};
