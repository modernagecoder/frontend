'use strict';
// Roblox coding classes, Australia (ag- topic door; AU cluster Phase 2, row 15).
// Intent: Australian parents looking for Roblox scripting lessons: what Luau and Roblox Studio are, what a child
// builds, how client and server code differ and why security matters, and what Roblox itself publishes about
// safety. The global page /roblox-coding-classes-for-kids is linked; this page answers the Australian and the
// "is it real programming?" questions with its own worked example.
// Sources, read raw on 7 October 2026:
//  - Luau home page (luau.org): "Luau (lowercase u, /ˈlu.aʊ/) is a small, fast, and embeddable programming
//    language based on Lua with a gradual type system."
//  - Roblox Creator Hub, Remote events and callbacks: "RemoteEvents enable one-way communication (sending a request
//    and not yielding for a response)."; FireServer / OnServerEvent quick reference.
//  - Roblox Creator Hub, Security tactics: "Never trust the client This is the foundational principle. A
//    determined exploiter has complete control over their local state and network traffic."
//  - Roblox, Safety and civility resources (corp.roblox.com): "Roblox requires all users to complete an age check
//    to use chat features. We restrict chat to users in similar age groups unless they are confirmed as trusted
//    friends."; "Experiences on Roblox are rated with content maturity labels to help users and parents
//    understand what content is appropriate for them."
//  - Roblox Terms of Use and help centre returned 403 to curl's default agent; not circumvented, so no minimum
//    account age is quoted.
// Lesson family: RemoteEvent validation (never trust the client): a shop where the client sends a price; a naive
// server sells a 100-coin sword for 0, a validating server looks the price up itself and refuses a player with 40.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'ROBLOX CODING, KIDS', blurb: 'Roblox coding classes for Australian kids: Luau scripting in Roblox Studio, client and server code, and the safety habits Roblox itself recommends.' },
  slug: 'roblox-coding-classes-australia',
  code: 'rbau',
  accent: '#6F4B1B',
  accentRationale: 'Roblox coding classes, Australia: a burnt umber chosen by hand, muted, at least 11 RGB units from every accent in use and at least 40 from the other Phase 2 doors',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Roblox coding classes, Australia',
  title: 'Roblox Coding Classes in Australia | Luau and Roblox Studio',
  description: 'Roblox coding classes for Australian kids: real Luau scripting in Roblox Studio, client and server code, and safe building habits. Live online, first class free.',
  ogDescription: 'Why a Roblox shop that trusts the player can be emptied in seconds, and how Australian kids learn to script Roblox properly in Luau, live online.',
  twitterDescription: 'Roblox coding for Australian kids: Luau scripting in Roblox Studio, client and server code, safe habits. Live online, first class free.',
  pageName: 'Roblox Coding Classes in Australia',
  webPageDescription: 'A parent guide to Roblox coding for Australian children: Luau, Roblox Studio, client and server scripting, security and safety, with live online lessons.',
  courseDescription: 'Live online Roblox coding for Australian kids: Luau scripting in Roblox Studio, from first parts and events to client and server code and published experiences.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Roblox coding classes',
  navLinks: [
    { href: '#real', label: 'Is it real coding?' },
    { href: '#builds', label: 'What kids build' },
    { href: '#trust', label: 'A worked example' },
    { href: '#safety', label: 'Safety' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 8 to 16 &middot; Luau and Roblox Studio',
  h1: 'Roblox coding classes',
  lede: 'Many Australian children already spend hours in Roblox. Far fewer know that every obby, tycoon and simulator they play was built by someone writing code, often a teenager, in a free tool called Roblox Studio. That makes Roblox one of the most motivating ways into programming: children are learning to build the very thing they love. It also raises fair questions for parents. Is it real coding or just dragging blocks around? Is it safe? What will my child actually learn? This page answers all three. It explains the language Roblox uses, what children build at each stage, one serious programming lesson worked through in full, and what Roblox itself publishes about safety and age checks.',
  secondaryCta: { href: '#trust', label: 'See a worked example' },
  wa: 'Hello Modern Age Coders, my child in Australia wants to learn Roblox coding. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; real Luau scripts, written by the child',
  spec: [
    ['For', 'Kids and teens, 8 to 16'],
    ['Language', 'Luau, based on Lua'],
    ['Tool', 'Roblox Studio, free'],
    ['Big idea', 'Client and server code'],
    ['Builds', 'Obbies, tycoons, simulators'],
    ['Format', 'Live online lessons'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Roblox coding is writing scripts in Luau, a programming language based on Lua, inside Roblox Studio, the free tool used to build every Roblox experience. Children learn variables, functions, events and loops by making parts move, doors open and scores change, then move on to the split between client and server code that every online game depends on. Modern Age Coders teaches it live online to Australian children and teens, either in a class of fifteen to twenty or privately, starting with a free class.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for young Roblox builders',
    lede: 'Choose by age and experience. Each card opens the full syllabus.',
    items: [
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'RBAU / 01', title: 'Roblox Game Coding for Kids', note: 'Luau scripting in Roblox Studio, from a first moving part to a published experience.' },
      { course: 'game-development-masterclass-for-kids', code: 'RBAU / 02', title: 'Game Development for Kids', note: 'For 8 to 12 year olds who want Roblox alongside Scratch and Minecraft projects.' },
      { course: 'complete-game-development-masterclass-for-teens', code: 'RBAU / 03', title: 'Game Development for Teens', note: 'Teenage Roblox builders who are ready to try Unity and C#, from 13 up.' }
    ]
  },

  sections: [
    {
      id: 'real', tint: 'tint', eyebrow: 'Is it real coding?',
      h2: 'Luau is a real programming language',
      lede: 'Roblox Studio does have drag-and-drop building tools, but the behaviour of anything interesting is written as typed code. That code is Luau.',
      body: [
        { kind: 'p', html: 'The Luau project describes the language as "a small, fast, and embeddable programming language based on Lua with a gradual type system". Lua itself is used well beyond Roblox, in other games, tools and devices, so the habits a child forms in Luau carry over. Variables, functions, loops, tables, events and, later, types are all there, written as text that has to be exactly right.' },
        { kind: 'table', caption: 'Programming ideas children meet in Roblox, and where they appear', head: ['Idea', 'In a Roblox experience', 'In general programming'], rows: [
          ['Variables', 'A player\'s coins, a door\'s state, a round timer', 'Storing values that change'],
          ['Events', 'Something touches a part, a button is clicked', 'Code that runs when something happens'],
          ['Functions', 'A routine that gives a reward or resets a level', 'Named, reusable blocks of code'],
          ['Tables', 'A list of shop items and their prices', 'Lists and dictionaries'],
          ['Client and server', 'What each player\'s device does versus what the game server decides', 'How every online system is split']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why Roblox motivates so well',
          left: [
            'A child who builds a door that opens when you touch it can invite a friend to try it within minutes. That loop of build, share and react is hard to match in any classroom exercise.',
            'Because children already understand how Roblox games feel, they arrive with strong opinions about what makes one good. We use those opinions to drive the coding.'
          ],
          rightH3: 'Where Roblox has limits',
          right: [
            'Luau skills transfer well, but Roblox Studio itself is specific to Roblox. Children who want to make games outside Roblox later move to Python, Godot or Unity, which we teach too.',
            'Roblox also encourages copying ready-made scripts from the toolbox. We ask students to rewrite anything they use, line by line, so they understand it.'
          ] },
        { kind: 'source', html: 'Source, read 7 October 2026: <a class="ag-inline-link" href="https://luau.org/" rel="noopener" target="_blank">luau.org</a>. Roblox and Luau are products of Roblox Corporation; we are independent of them.' }
      ]
    },
    {
      id: 'builds', tint: 'deep', eyebrow: 'What kids build',
      h2: 'From a moving part to a published experience',
      lede: 'Each stage adds one kind of thinking. Children publish small things early, so there is always something to show.',
      body: [
        { kind: 'table', caption: 'A typical Roblox coding progression', head: ['Stage', 'Project', 'What it teaches'], rows: [
          ['1', 'A platform that spins, a part that changes colour', 'Properties, variables and a first loop'],
          ['2', 'An obby with checkpoints and a kill brick', 'Touch events and respawn logic'],
          ['3', 'A door that opens with a key', 'Conditions and simple game state'],
          ['4', 'A coin collector with a leaderboard', 'Player data, functions and tables'],
          ['5', 'A tycoon with buttons that buy upgrades', 'Client and server scripts, and RemoteEvents'],
          ['6', 'A round-based game with a lobby and timer', 'Game loops, state machines and saving data']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How long it takes',
          left: [
            'With one or two lessons a week, most children aged about nine to twelve reach stage four within a term or two. Stages five and six usually take longer, because they need the client and server ideas explained below.',
            'Older children who already code can move faster, and often want to get to stage five as soon as possible.'
          ],
          rightH3: 'What parents see at home',
          right: [
            'Children can share private test versions of their experiences with family. Parents are often surprised how much logic sits behind a simple-looking obby.',
            'We encourage children to explain their scripts out loud to a parent once a month. If they can explain it, they understand it.'
          ] }
      ]
    },
    {
      id: 'trust', tint: 'tint', eyebrow: 'A worked example',
      h2: 'The shop that trusts the player',
      lede: 'This is the lesson that turns Roblox builders into programmers. It is about the split between client and server, and it explains how some experiences get exploited.',
      body: [
        { kind: 'p', html: 'Every Roblox experience runs code in two places: on each player\'s device, called the <strong>client</strong>, and on Roblox\'s computer that hosts the game, the <strong>server</strong>. They talk through objects called RemoteEvents. Roblox\'s own documentation says "RemoteEvents enable one-way communication (sending a request and not yielding for a response)". The client calls <code>FireServer</code>, and a server script listening on <code>OnServerEvent</code> receives the request.' },
        { kind: 'table', caption: 'Our worked example: a sword costs 100 coins and the player has 40', head: ['Version', 'What the client sends', 'What the server does', 'Result'], rows: [
          ['Trusting server', 'BuyItem, "Sword", price 100', 'Takes the price from the message and checks coins', 'Refused: 40 is less than 100'],
          ['Trusting server, edited client', 'BuyItem, "Sword", price 0', 'Takes the price from the message and checks coins', 'Sword sold for nothing'],
          ['Validating server', 'BuyItem, "Sword", any price', 'Ignores the sent price, looks it up in its own table, checks coins', 'Refused: 40 is less than 100'],
          ['Validating server', 'BuyItem, "Dragon", any price', 'Finds no item called Dragon in its table', 'Refused: unknown item']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The rule', p: 'Roblox\'s security guidance opens with it: "Never trust the client." A player who controls their own device can change any message it sends.' },
          { h3: 'The fix', p: 'The client only says what it wants. The server decides what it costs, whether the item exists and whether the player can afford it, using values the client cannot touch.' },
          { h3: 'The habit', p: 'For every RemoteEvent, students write down three checks: is this request allowed, are the values sensible, and is this player sending too many requests too fast?' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why we teach it early',
          left: [
            'Children who learn this before building their first tycoon never have to unlearn the bad version. Children who learn it after usually discover it the hard way, when their game economy breaks.',
            'The same rule applies to websites, banking apps and school systems. A child who understands it in Roblox has understood one of the most important ideas in software security.'
          ],
          rightH3: 'How the guidance puts it',
          right: [
            'Roblox\'s security tactics page explains the reason in one line: "A determined exploiter has complete control over their local state and network traffic." In other words, anything that happens on the player\'s device can be faked.',
            'We use that sentence as a checklist item in every server script review.'
          ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: Roblox Creator Hub, <a class="ag-inline-link" href="https://create.roblox.com/docs/scripting/events/remote" rel="noopener" target="_blank">Remote events and callbacks</a> and <a class="ag-inline-link" href="https://create.roblox.com/docs/scripting/security/security-tactics" rel="noopener" target="_blank">Security tactics</a>. The coin values are our own example.' }
      ]
    },
    {
      id: 'safety', tint: 'deep', eyebrow: 'Safety',
      h2: 'What Roblox publishes about safety, and how we teach',
      lede: 'Parents are right to ask about safety. Here is what Roblox itself states, quoted exactly, and how our lessons are set up.',
      body: [
        { kind: 'two',
          leftH3: 'What Roblox says',
          left: [
            'On its safety resources page, Roblox states: "Roblox requires all users to complete an age check to use chat features. We restrict chat to users in similar age groups unless they are confirmed as trusted friends."',
            'It also states: "Experiences on Roblox are rated with content maturity labels to help users and parents understand what content is appropriate for them." Parents should read Roblox\'s current terms and parental controls themselves, because these change.'
          ],
          rightH3: 'How our lessons work',
          right: [
            'Lessons happen in Roblox Studio, the building tool, not by playing with strangers. Students test their work privately or with classmates in a supervised lesson.',
            'We never ask a child to share personal details, and teachers do not add students as friends on Roblox. Accounts belong to the family, and settings stay in parents\' hands.'
          ] },
        { kind: 'table', mt: true, caption: 'A short safety checklist for families starting Roblox coding', head: ['Check', 'Why'], rows: [
          ['A parent knows the account login', 'So settings and spending can be reviewed'],
          ['Chat settings reviewed together', 'Roblox ties chat to age checks and age groups'],
          ['Studio used for building', 'Building does not require chatting with anyone'],
          ['Test versions kept private at first', 'Only family and classmates see early work'],
          ['Spending limits agreed', 'Coding does not need any purchases at all']
        ] },
        { kind: 'source', html: 'Source, read 7 October 2026: Roblox, <a class="ag-inline-link" href="https://corp.roblox.com/safety-civility-resources/" rel="noopener" target="_blank">Safety and civility resources</a>. Roblox\'s Terms of Use page could not be read automatically, so we quote no minimum account age; please check it directly.' }
      ]
    },
    {
      id: 'australia', tint: '', eyebrow: 'For Australian families',
      h2: 'Roblox coding and the school week in Australia',
      lede: 'Roblox coding fits well alongside school. Here is how it connects, and how lessons fit around Australian time.',
      body: [
        { kind: 'two',
          leftH3: 'Links to school learning',
          left: [
            'Roblox scripting practises what the Digital Technologies curriculum asks of upper primary and lower secondary students: designing algorithms, using variables and events, and moving to a general-purpose text language. The full curriculum mapping is on our <a class="ag-inline-link" href="/game-development-for-kids-australia">game development for kids</a> page.',
            'We never complete school tasks, but students often bring school ideas into their Roblox projects and back again.'
          ],
          rightH3: 'Where Roblox leads',
          right: [
            'Some students stay in Roblox and build bigger experiences. Others move on to <a class="ag-inline-link" href="/game-programming-course-australia">game programming with Python, Godot or Unity</a>. Children who prefer building in blocks and redstone may enjoy <a class="ag-inline-link" href="/minecraft-coding-classes-australia">Minecraft coding classes</a>.',
            'Our general <a class="ag-inline-link" href="/roblox-coding-classes-for-kids">Roblox coding classes</a> page covers the same course for families anywhere in the world.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four levels of a Roblox programmer',
    lede: 'Most children reach the third level in two or three terms of weekly lessons.',
    table: { caption: 'From builder to programmer', head: ['Level', 'What your child can do'], rows: [
      ['1. Scripter', 'Change part properties with code and react to touch events'],
      ['2. Builder', 'Make a complete obby or tycoon with checkpoints, scores and resets'],
      ['3. Programmer', 'Split code between client and server and validate every RemoteEvent'],
      ['4. Designer', 'Run rounds, save player data and test an experience with real players']
    ] },
    left: { h3: 'Is Roblox coding too hard for my child?', ps: [
      'Children who can read comfortably and type a little usually manage well from about eight or nine. Younger children often start in Scratch and move to Roblox later.',
      'The free first class shows quickly whether your child is ready.'
    ] },
    right: { h3: 'Does my child need Robux?', ps: [
      'No. Roblox Studio is free to use, and nothing in our lessons requires buying anything.',
      'We advise families to agree spending limits before any child starts building, simply to keep things clear.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses around Roblox coding',
    lede: 'Grouped by stage. The free class tells us which one fits now.',
    bands: [
      { num: 'I', h3: 'Before Roblox', sub: 'Ages 6 to 9', courses: [
        { code: 'RBAU / PRE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Logic and events in blocks first.' },
        { code: 'RBAU / PRE / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'A gentle start before typed code.' },
        { code: 'RBAU / PRE / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem Solving for Kids', blurb: 'Breaking problems into steps.' }
      ] },
      { num: 'II', h3: 'Roblox and worlds', sub: 'Ages 8 to 14', courses: [
        { code: 'RBAU / WLD / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Game Coding for Kids', blurb: 'Luau in Roblox Studio, start to finish.' },
        { code: 'RBAU / WLD / 02', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'Scratch, Roblox and Minecraft together.' },
        { code: 'RBAU / WLD / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding for Kids', blurb: 'Blocks to code in another familiar world.' }
      ] },
      { num: 'III', h3: 'After Roblox', sub: 'Ages 12 and up', courses: [
        { code: 'RBAU / AFT / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game Development for Teens', blurb: 'Unity and C# for bigger projects.' },
        { code: 'RBAU / AFT / 02', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'A general-purpose language, done properly.' },
        { code: 'RBAU / AFT / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cyber Security for Teens', blurb: 'For teens hooked by the trust lesson above.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Roblox lessons in Australian time',
    lede: 'Our teachers are in India, and Australian afternoons overlap neatly with their working day, even in summer when the eastern states move their clocks forward. The exact weekly time is agreed with you, not assigned.',
    slots: [
      { time: 'After school', l: 'Weekday lessons for primary and lower secondary.' },
      { time: 'Saturday', l: 'Longer building sessions for bigger projects.' },
      { time: 'Sunday', l: 'For families with full weekday schedules.' }
    ],
    cells: [
      { h3: 'Free first class', p: 'Your child scripts a small part in Roblox Studio with a teacher. No card needed.' },
      { h3: 'Groups of fifteen to twenty', p: 'Classmates test each other\'s experiences in supervised lessons.' },
      { h3: 'One to one', p: 'For a child with one ambitious experience to build.' },
      { h3: 'Typed by the child', p: 'Teachers explain and question; children write every script themselves.' },
      { h3: 'Security from the start', p: 'Server checks are taught before the first shop or economy.' },
      { h3: 'Parents in control', p: 'Accounts, settings and spending stay with the family.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Some of the games and apps our students have published. Many more are in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'As written by parents and learners on our Google profile, unedited.',

  fees: {
    h2: 'Fees for Roblox coding classes',
    lede: 'Families outside India pay one monthly price in US dollars. There is no enrolment fee and nothing to buy inside Roblox; you can stop after any month.',
    free: ['A first Luau script with a teacher', 'Advice on the right starting course', 'No card or bank details'],
    group: ['Fifteen to twenty children per class', 'Supervised testing with classmates', 'A regular teacher', 'Stop after any month'],
    one: ['Lessons built around your child\'s own experience', 'Flexible pace', 'Times around school and sport']
  },

  faq: {
    eyebrow: 'Parents ask',
    h2: 'What Australian parents ask about Roblox coding',
    items: [
      { q: 'What is Roblox coding?', a: 'It is writing scripts in Luau, a language based on Lua, inside Roblox Studio to control how a Roblox experience behaves: moving parts, scores, doors, shops, rounds and saving data.' },
      { q: 'What does "never trust the client" mean in Roblox?', a: 'It means the server must never accept values such as prices or damage from a player\'s device without checking them, because a player can change anything their own device sends. The server looks values up and decides for itself.' },
      { q: 'Is Roblox coding real programming?', a: 'Yes. Luau is a typed text language with variables, functions, tables, events and an optional type system, and the client and server split it teaches applies to all online software.' },
      { q: 'What age can my child start Roblox coding?', a: 'Usually from about eight or nine, once they read comfortably and can type a little. Younger children often start in Scratch first.' },
      { q: 'Is Roblox safe for my child?', a: 'Roblox publishes safety features including age checks for chat and content maturity labels. Our lessons focus on building in Roblox Studio, and we recommend parents review account and chat settings together.' },
      { q: 'Does Roblox coding cost money?', a: 'Roblox Studio is free, and our lessons need no purchases. Our monthly lesson fees are listed further down, under fees.' },
      { q: 'What computer does my child need?', a: 'A laptop or desktop with a keyboard and a steady internet connection. We check that your computer runs Roblox Studio smoothly during the free class.' },
      { q: 'Will my child just play Roblox in lessons?', a: 'No. Lessons are for building, scripting and testing. Short tests of each other\'s work are part of the process, not the point.' },
      { q: 'What comes after Roblox coding?', a: 'Many students move to Python, Godot or Unity for games outside Roblox. The Luau habits they built transfer well.' },
      { q: 'When are lessons in Australian time?', a: 'We fix a regular weekly slot with you during the free class, usually after school or on a weekend. Perth is the closest to India time and the eastern states the furthest, especially during daylight saving.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Other ways into building games, and our Australian guides.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'All our Australian pages in one list.' },
      { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes worldwide', p: 'The same course for families anywhere.' },
      { href: '/minecraft-coding-classes-australia', label: 'Minecraft coding classes', p: 'Coding inside Minecraft for Australian kids.' },
      { href: '/game-development-for-kids-australia', label: 'Game development for kids', p: 'The wider path from Scratch to engines.' },
      { href: '/coding-games-for-kids-australia', label: 'Coding games for kids', p: 'Puzzles that teach programming ideas.' },
      { href: '/video-game-design-for-kids-australia', label: 'Video game design for kids', p: 'Planning levels that teach themselves.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Leave your details and we will call at a convenient time. In the free class your child writes a first Luau script with a teacher, and you hear honestly which course would suit them.',
    readFirst: 'If you want to know more first, <a class="ag-inline-link" href="/how-we-teach">our teaching method</a> is explained in full, and <a class="ag-inline-link" href="/courses">every course</a> is listed by age.',
    note: 'For a quick answer from an Australian phone, WhatsApp us. Replies come from our team in India (hence +91); there is no Australian branch.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Building games', links: [
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox classes worldwide' },
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft classes' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/game-development-for-kids-australia', label: 'Game development for kids' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for kids' },
        { href: '/coding-classes-cost-australia', label: 'What coding classes cost' }
      ] }
    ],
    bottomRight: 'The server decides what things cost'
  },

  personalityCss: `
.ag-root.ag-rbau .ag-hero h1 { letter-spacing: -0.022em; }
.ag-root.ag-rbau .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-rbau .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-rbau .ag-table caption { text-align: left; font-weight: 640; }
.ag-root.ag-rbau .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-rbau .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, upper primary and lower secondary. Roblox scripting practises the Digital Technologies programming strand of the Australian Curriculum v9 (visual programs in Years 3 to 6, a general-purpose language in Years 7 and 8); the code-level mapping is on game-development-for-kids-australia. Language and platform facts from luau.org and the Roblox Creator Hub; safety statements from Roblox\'s safety and civility resources page.',
    localProject: 'RemoteEvent validation in a Roblox shop: a 100-coin sword and a player with 40 coins; a server that trusts the price sent by the client sells the sword for 0 when the client is edited; a validating server ignores the sent price, looks it up in its own table, refuses the purchase and rejects unknown items (our example). Lesson family: never trust the client.',
    requiredMentions: ['RemoteEvent', 'Never trust the client', 'FireServer', 'OnServerEvent', 'content maturity labels', 'Roblox requires all users to complete an age check to use chat features', 'small, fast, and embeddable programming language based on Lua with a gradual type system', 'A determined exploiter has complete control over their local state and network traffic'],
    sources: [
      { claim: 'Luau home page: "Luau (lowercase u, /ˈlu.aʊ/) is a small, fast, and embeddable programming language based on Lua with a gradual type system."', url: 'https://luau.org/' },
      { claim: 'Roblox Creator Hub, Remote events and callbacks: "RemoteEvents enable one-way communication (sending a request and not yielding for a response)."; FireServer and OnServerEvent quick reference.', url: 'https://create.roblox.com/docs/scripting/events/remote' },
      { claim: 'Roblox Creator Hub, Security tactics: "Never trust the client This is the foundational principle. A determined exploiter has complete control over their local state and network traffic."', url: 'https://create.roblox.com/docs/scripting/security/security-tactics' },
      { claim: 'Roblox, Safety and civility resources: "Roblox requires all users to complete an age check to use chat features. We restrict chat to users in similar age groups unless they are confirmed as trusted friends."; "Experiences on Roblox are rated with content maturity labels to help users and parents understand what content is appropriate for them."', url: 'https://corp.roblox.com/safety-civility-resources/' }
    ],
    rejectedClaims: [
      'Roblox minimum account age and Terms of Use wording: the terms page and help centre returned 403 to curl\'s default agent and were not circumvented, so no age is quoted.',
      'eSafety Commissioner guidance on Roblox: the eSafety site did not respond to our requests, so nothing is quoted from it.',
      'Roblox user numbers and developer earnings: no primary source read raw; not quoted.',
      'Any claim that Roblox experiences built in lessons will earn money: refused.',
      'Promised evening lesson hours: the hour is agreed in the free class (spec decision 7).'
    ]
  }
};
