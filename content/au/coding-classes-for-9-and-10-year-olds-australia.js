'use strict';
// Coding classes for 9 and 10 year olds, Australia (ag- topic door; AU cluster Phase 2, row 26).
// Demand: Google autocomplete (en-AU) "coding classes for 9 year olds", "coding classes for 10 year olds"; both
// ages on one page to avoid near-duplicate single-age pages.
// Sources, read raw on 7 October 2026 (curl, default agent):
//  - Scratch Foundation, scratch-vm src/engine/runtime.js (develop branch): STAGE_WIDTH returns 480 and
//    STAGE_HEIGHT returns 360.
//  - Scratch Foundation, scratch-blocks msg/json/en.json: "go to x: %1 y: %2", "change x by %1", "set x to %1",
//    "change %1 by %2", "if %1 then".
//  - ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6 (.docx): Year 4 band level
//    description; Year 6 band level description; AC9TDI4K03; AC9TDI6P03 with the canteen-app elaboration;
//    Year 6 achievement standard.
// Lesson family: the Scratch stage as a 480 by 360 coordinate plane: x from -240 to 240, y from -180 to 180,
// 172,800 square steps of stage, and 300 steps from the centre to a corner (a 3, 4, 5 triangle scaled by 60);
// our arithmetic, checked in Python.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'AGES 9 AND 10', blurb: 'Coding for Australian 9 and 10 year olds: variables, coordinates and real games in Scratch, the first step into Python, and the Years 4 to 6 Digital Technologies curriculum.' },
  slug: 'coding-classes-for-9-and-10-year-olds-australia',
  code: 'knin',
  accent: '#0F540F',
  accentRationale: 'Coding classes for 9 and 10 year olds, Australia: a deep paddock green chosen by hand, muted, at least 10 RGB units from every accent in use and 40 from every Australian page',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Coding classes for 9 and 10 year olds, Australia',
  title: 'Coding Classes for 9 and 10 Year Olds in Australia',
  description: 'Coding classes for 9 and 10 year olds in Australia: Scratch games with variables and coordinates, a first step into Python, and live online lessons that fit school.',
  ogDescription: 'Nine and ten is the age of real games: scores, timers, coordinates and a first taste of Python. What children can build, what Years 4 to 6 expect, and live online lessons.',
  twitterDescription: 'Coding for 9 and 10 year olds in Australia: Scratch games with variables and coordinates, then a first step into Python.',
  pageName: 'Coding Classes for 9 and 10 Year Olds in Australia',
  webPageDescription: 'A guide for Australian parents of 9 and 10 year olds to coding: variables, coordinates and complete games in Scratch, the move towards Python, and the Digital Technologies curriculum for Years 4 to 6.',
  courseDescription: 'Live online coding for Australian 9 and 10 year olds: complete Scratch games with variables and coordinates, then Python, in small groups or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Coding for 9 and 10 year olds',
  navLinks: [
    { href: '#age', label: 'This age' },
    { href: '#stage', label: 'The stage as a grid' },
    { href: '#variables', label: 'Variables' },
    { href: '#curriculum', label: 'At school' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 9 and 10 &middot; Live online',
  h1: 'Coding classes for 9 and 10 year olds',
  lede: 'Nine and ten year olds are often the most productive young coders of all. They read fluently, type with growing confidence, follow a multi-step plan and, crucially, they can hold an abstract idea in their head: a number that stands for a score, a position described by two numbers, a rule that applies to every enemy in a game. That is when games stop being toys and start being real programs. This page explains what children of this age typically build, works through the single idea that unlocks most of their games (the Scratch stage as a coordinate grid), shows where variables come in, maps it all to Years 4 to 6 of the Australian Curriculum, and explains when to take the first step from blocks into Python.',
  secondaryCta: { href: '#stage', label: 'See the stage as a grid' },
  wa: 'Hello Modern Age Coders, our child is 9 or 10 and we are in Australia. Could we book a free first coding class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; complete games, built and explained',
  spec: [
    ['For', 'Children aged 9 and 10'],
    ['School years', 'Usually Years 4 and 5'],
    ['Main tools', 'Scratch, then Python'],
    ['Big new ideas', 'Variables and coordinates'],
    ['Projects', 'Complete games with scores'],
    ['Format', 'Live online lessons'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding classes for 9 and 10 year olds take children from simple Scratch animations to complete games with scores, timers, levels and moving enemies, using variables and the stage\'s coordinate grid. Many children of this age are ready to start Python too. The Australian Curriculum expects the same growth: by the end of Year 6, students implement algorithms "as visual programs that include variables and respond to input".',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three strong courses for ages 9 and 10',
    lede: 'Choose by whether your child is new to coding, already confident in Scratch, or keen on games above all.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'KNIN / 01', title: 'Game Development for Kids', note: 'For game-mad 9 and 10 year olds: complete Scratch games, then Roblox and Minecraft worlds.' },
      { course: 'python-ai-kids-masterclass', code: 'KNIN / 02', title: 'Python and AI for Kids', note: 'For children already happy in Scratch who are ready to type real code, from nine.' },
      { course: 'kids-coding-blocks-masterclass', code: 'KNIN / 03', title: 'Coding for Kids', note: 'For complete beginners of this age: a year-long path that moves quickly through Scratch.' }
    ]
  },

  sections: [
    {
      id: 'age', tint: 'tint', eyebrow: 'This age',
      h2: 'What nine and ten year olds can build',
      lede: 'This is the age when children start to finish projects on their own and improve them without being asked. A typical term ends with a game a sibling actually wants to play.',
      body: [
        { kind: 'table', caption: 'Coding at nine and at ten (our teaching experience)', head: ['', 'Typical nine year old', 'Typical ten year old'], rows: [
          ['Projects', 'A complete Scratch game with a score and a timer', 'A game with levels, lives and several kinds of enemy'],
          ['Ideas', 'Variables, coordinates, simple decisions', 'Lists, messages between sprites, first functions'],
          ['Typing', 'Short words and numbers', 'Comfortable enough to start Python'],
          ['Debugging', 'Finds and fixes most bugs with a hint', 'Tests deliberately to find bugs before others do'],
          ['Next step', 'Larger Scratch projects', 'Python, web pages or Roblox Studio']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Scratch or Python at this age?',
          left: [
            'Both. Most nine year olds still gain a lot from Scratch, because it lets them build big, ambitious games without typing errors getting in the way. Most ten year olds who are confident in Scratch are ready for Python.',
            'The two support each other: ideas learned in Scratch, such as variables and coordinates, turn up again in Python with almost the same meaning.'
          ],
          rightH3: 'Signs your child is ready for Python',
          right: [
            'They build Scratch projects with several sprites and variables, they get annoyed when a project becomes hard to organise, and they type short words without hunting for every key.',
            'Our page on <a class="ag-inline-link" href="/after-scratch-next-step-python-australia">moving from Scratch to Python</a> goes through the handover step by step.'
          ] },
        { kind: 'p', mt: true, html: 'Most Australian nine and ten year olds are in Year 4 or Year 5, depending on the state and their birthday. Younger siblings may suit our guide for <a class="ag-inline-link" href="/coding-classes-for-7-and-8-year-olds-australia">7 and 8 year olds</a>, and older ones the page for <a class="ag-inline-link" href="/coding-classes-for-11-and-12-year-olds-australia">11 and 12 year olds</a>.' }
      ]
    },
    {
      id: 'stage', tint: 'deep', eyebrow: 'A worked example',
      h2: 'The Scratch stage is a 480 by 360 grid',
      lede: 'Almost every game a ten year old wants to make depends on one idea: knowing exactly where things are. In Scratch, every position on the stage is a pair of numbers.',
      body: [
        { kind: 'p', html: 'Scratch\'s own source code fixes the stage at <strong>480 steps wide</strong> and <strong>360 steps tall</strong>. The centre of the stage is the point (0, 0). So x, the left-and-right number, runs from -240 at the left edge to 240 at the right, and y, the up-and-down number, runs from -180 at the bottom to 180 at the top. Blocks such as <em>go to x: ... y: ...</em> and <em>change x by ...</em> use exactly these numbers.' },
        { kind: 'table', mt: true, caption: 'Key points on the Scratch stage (our worked example)', head: ['Where', 'x', 'y', 'What children use it for'], numCols: [1, 2], rows: [
          ['Centre', '0', '0', 'Starting position for the player'],
          ['Right edge', '240', 'any', 'Detecting when the player runs off screen'],
          ['Top-left corner', '-240', '180', 'Placing a score label out of the way'],
          ['Bottom edge', 'any', '-180', 'The floor for falling objects'],
          ['Bottom-right corner', '240', '-180', 'Where enemies enter in many games']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Numbers hiding in the grid',
          left: [
            'Multiply the sides and the stage holds 480 times 360, which is 172,800 square steps. From the centre to any corner is 240 across and 180 up or down.',
            'That corner distance is exactly 300 steps, because 240, 180 and 300 are 60 times the famous 3, 4, 5 triangle. Ten year olds will not need Pythagoras for years, but they enjoy checking with a ruler on screen that the diagonal really is 300.'
          ],
          rightH3: 'What children do with it',
          right: [
            'They make a ball bounce by checking whether its x is past 240 or its y is past 180 and turning it round. They spread enemies evenly by placing them at x = -180, -60, 60 and 180.',
            'They make a falling apple reappear at the top by setting y to 180 and choosing a random x between -240 and 240.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Predict the position', p: 'Before running, children write down where a sprite should end up after a few moves, then check the x and y Scratch shows.' },
          { h3: 'Find the bug', p: 'When a sprite vanishes, the coordinates usually explain why: it went past an edge. Reading the numbers turns a mystery into a fix.' },
          { h3: 'Carry it to Python', p: 'Python drawing and game libraries use coordinates too, so a child who owns the Scratch grid has already learned half of their first Python game.' }
        ] },
        { kind: 'source', html: 'Source, read 7 October 2026: the Scratch Foundation\'s open-source <a class="ag-inline-link" href="https://github.com/scratchfoundation/scratch-vm" rel="noopener" target="_blank">scratch-vm</a> engine, file src/engine/runtime.js, where STAGE_WIDTH returns 480 and STAGE_HEIGHT returns 360. The corner distance and area are our arithmetic, checked in Python.' }
      ]
    },
    {
      id: 'variables', tint: 'tint', eyebrow: 'Variables',
      h2: 'Variables: the idea that turns animations into games',
      lede: 'A variable is a named box that holds a value which can change: a score, a number of lives, a timer, a level. Nine and ten year olds meet variables properly, and it changes what they can make.',
      body: [
        { kind: 'table', caption: 'Variables in a typical first complete game', head: ['Variable', 'Starts at', 'Changes when', 'Game ends when'], rows: [
          ['score', '0', 'The player catches a star: change score by 1', 'Never, it only goes up'],
          ['lives', '3', 'The player touches an enemy: change lives by -1', 'lives reaches 0'],
          ['timer', '60', 'Each second passes: change timer by -1', 'timer reaches 0'],
          ['level', '1', 'score passes 10: change level by 1', 'level passes 3, the player wins']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why variables feel hard at first',
          left: [
            'A variable is invisible. Children cannot see the box, only its effects. That is why we show variables on screen while the game runs, so a child can watch the score change as it happens.',
            'Once they see it, most nine year olds grasp it within a lesson, and they start inventing variables of their own: speed, power-ups, bonus points.'
          ],
          rightH3: 'Where it leads',
          right: [
            'Variables lead to decisions that depend on them ("if lives is 0, stop the game"), then to lists, which are collections of values such as a high-score table.',
            'In Python the same idea is written as plain text, <code>score = 0</code>, so the concept transfers almost unchanged.'
          ] }
      ]
    },
    {
      id: 'curriculum', tint: 'deep', eyebrow: 'The Australian Curriculum',
      h2: 'How this lines up with Years 4 to 6 at school',
      lede: 'Nine and ten year olds sit across the Years 3 and 4 band and the Years 5 and 6 band of the Australian Curriculum v9. The band descriptions show the step up clearly.',
      body: [
        { kind: 'table', caption: 'Digital Technologies around ages 9 and 10, Australian Curriculum v9 (quoted)', head: ['Point in school', 'In the curriculum\'s words'], rows: [
          ['By the end of Year 4', 'children design and implement "solutions as visual programs"'],
          ['Years 3 and 4 (AC9TDI4K03)', '"recognise different types of data and explore how the same data can be represented differently depending on the purpose"'],
          ['Years 5 and 6 (AC9TDI6P03)', '"design a user interface for a digital system"'],
          ['By the end of Year 6', 'students implement algorithms "as visual programs that include variables and respond to input"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Variables and input arrive on time',
          left: [
            'The Year 6 band description names variables and input explicitly. That is exactly what a game with a score and keyboard controls contains, so the projects on this page are not extra to the curriculum: they are it, done with more ambition.',
            'States and territories implement the curriculum in their own ways, so the exact timing at your child\'s school may differ.'
          ],
          rightH3: 'Designing for someone else',
          right: [
            'For the user interface description, ACARA\'s example is "drawing the designed layout of the landing page of an app to order lunches from the school canteen". Designing for a real user is a big step for ten year olds.',
            'We use the same idea: children sketch the start screen of their game before building it, and ask a classmate to try it.'
          ] },
        { kind: 'source', html: 'Quotations from ACARA\'s <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">Foundation to Year 6 Digital Technologies content</a>, read on 7 October 2026.' }
      ]
    },
    {
      id: 'term-games', tint: '', eyebrow: 'A term of games',
      h2: 'Projects a nine or ten year old can finish',
      lede: 'Each project adds one idea on top of the last, so by the end of a term the child is combining them without help.',
      body: [
        { kind: 'table', caption: 'A term of projects for ages 9 and 10', head: ['Project', 'New idea', 'Uses the stage grid how'], rows: [
          ['Bouncing ball', 'Edges and direction', 'Turns round past x = 240 or y = 180'],
          ['Apple catcher', 'A score variable', 'Apples restart at y = 180, random x'],
          ['Maze runner', 'Walls and lives', 'The start point is a fixed (x, y)'],
          ['Space defender', 'Enemies as clones', 'Enemies spaced at fixed x positions'],
          ['Quiz show', 'Asking and checking answers', 'Buttons placed by coordinates']
        ] },
        { kind: 'p', mt: true, html: 'Children who love games may want our dedicated guide to <a class="ag-inline-link" href="/game-development-for-kids-australia">game development for kids</a>, which follows the path from Scratch to a real engine.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages for nine and ten year olds',
    lede: 'With one lesson a week, most children of this age reach the third stage within a school year.',
    table: { caption: 'Coding stages at ages 9 and 10', head: ['Stage', 'What your child can do'], rows: [
      ['1. Coordinates', 'Places and moves sprites precisely using x and y, and explains where they will end up'],
      ['2. Variables', 'Builds a game with a score, lives and a timer that all work together'],
      ['3. Complete games', 'Designs, builds and tests a game with levels that someone else enjoys playing'],
      ['4. First Python', 'Rewrites a small Scratch game as a Python program and explains the differences']
    ] },
    left: { h3: 'Is this too much screen time?', ps: [
      'Coding is making, not watching, and children of this age often spend time away from the screen sketching levels and planning rules.',
      'One or two lessons a week, plus some optional tinkering, is plenty for steady progress.'
    ] },
    right: { h3: 'Fitting into the school year', ps: [
      'Many families keep lessons going across the four school terms and pause over the summer holidays. Billing is monthly.',
      'We agree a regular day and time in the free first class.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses for ages 9 and 10',
    lede: 'Grouped by what your child most wants to make.',
    bands: [
      { num: 'I', h3: 'Games', sub: 'The favourite at this age', courses: [
        { code: 'KNIN / GAME / 01', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'Complete games in Scratch, Roblox and Minecraft.' },
        { code: 'KNIN / GAME / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Game Coding', blurb: 'Luau in Roblox Studio, from age eight.' },
        { code: 'KNIN / GAME / 03', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'For children new to Scratch.' }
      ] },
      { num: 'II', h3: 'Text coding', sub: 'Ready to type', courses: [
        { code: 'KNIN / TEXT / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'First Python, turtle drawings and small AI projects.' },
        { code: 'KNIN / TEXT / 02', slug: 'kids-ai-web-development-course', title: 'Web Development for Kids', blurb: 'Real web pages with HTML and CSS.' },
        { code: 'KNIN / TEXT / 03', slug: 'maths-through-coding', title: 'Maths Through Coding', blurb: 'Python and maths together, from ten.' }
      ] },
      { num: 'III', h3: 'Making and thinking', sub: 'Other interests', courses: [
        { code: 'KNIN / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'App Making for Kids', blurb: 'Phone apps built with blocks.' },
        { code: 'KNIN / MAKE / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe Coding for Kids', blurb: 'Scratch and kid-safe AI tools.' },
        { code: 'KNIN / MAKE / 03', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How AI works and how to use it wisely, from eight.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons that suit Australian families',
    lede: 'The teaching team works in India, behind Australia by a few hours whichever state you are in. Australian after-school and weekend slots therefore sit inside the Indian working day.',
    slots: [
      { time: 'Weekday, after school', l: 'The most popular choice for this age.' },
      { time: 'Weekday, early evening', l: 'Fits around afternoon sport.' },
      { time: 'Weekend', l: 'A longer session for ambitious game builders.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'Your child builds part of a small game and the teacher judges whether Scratch or Python suits better.' },
      { h3: 'Small groups', p: 'Fifteen to twenty children of similar ability who play-test each other\'s games.' },
      { h3: 'One to one', p: 'For a child who wants to move faster or build one big project.' },
      { h3: 'Built by the child', p: 'Teachers explain and question. Every block and line is the child\'s.' },
      { h3: 'Watch any time', p: 'Lessons are live, so parents can see exactly how they run.' },
      { h3: 'School tasks stay theirs', p: 'We never complete school assessment work.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'A few of our students\' finished projects. Many began with a bouncing ball at nine or ten. See more in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'As written by parents and students on our Google profile, without edits.',

  fees: {
    h2: 'Fees for ages 9 and 10',
    lede: 'Families in Australia pay a monthly fee in US dollars, with no charge to join and no contract.',
    free: ['Part of a small game, built together', 'Advice on Scratch or Python', 'No card or bank details'],
    group: ['Fifteen to twenty children per group', 'A regular teacher', 'Classmates who play-test games', 'Stop after any month'],
    one: ['Your child\'s project, your child\'s pace', 'Flexible timing', 'Ideal for an ambitious game']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'What parents of 9 and 10 year olds ask',
    items: [
      { q: 'What coding should a 9 year old learn?', a: 'Most nine year olds do well building complete games in Scratch with variables and coordinates. Confident nine year olds can start Python alongside.' },
      { q: 'Can a 10 year old learn Python?', a: 'Yes. Many ten year olds who are comfortable in Scratch and can type short words are ready for Python, especially for games and drawing projects.' },
      { q: 'What is a variable in coding?', a: 'A variable is a named place that stores a value which can change while a program runs, such as a score, a number of lives or a timer.' },
      { q: 'How big is the Scratch stage?', a: 'The Scratch stage is 480 steps wide and 360 steps tall, with (0, 0) in the centre. So x runs from -240 to 240 and y from -180 to 180.' },
      { q: 'What are coordinates in Scratch?', a: 'Coordinates are the pair of numbers, x and y, that say exactly where a sprite is on the stage. Blocks such as go to x and y, and change x by, use them to move sprites precisely.' },
      { q: 'Is my 9 year old too young for game development?', a: 'No. Nine is a great age to build complete games in Scratch. Real engines such as Unity are better left until the teenage years.' },
      { q: 'What does the curriculum expect by Year 6?', a: 'The Australian Curriculum v9 expects students to design algorithms with branching and iteration and implement them as visual programs that include variables and respond to input.' },
      { q: 'Should my child learn Roblox coding?', a: 'If they love Roblox, it is a motivating route into a real text language, Luau. We usually suggest some Scratch first if they have never coded.' },
      { q: 'How much practice should they do between lessons?', a: 'None is required. Many children choose to tinker with their games between lessons, which speeds progress, but the lessons stand on their own.' },
      { q: 'What does it cost?', a: 'There is no charge for the first lesson, and no card details are needed. Monthly fees for group and private lessons are listed under Fees, with nothing to pay on joining.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Australian families of children around nine and ten.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our Australian guides, gathered in one list.' },
      { href: '/coding-classes-for-11-and-12-year-olds-australia', label: 'Coding for 11 and 12 year olds', p: 'Binary, data and getting ready for high school.' },
      { href: '/after-scratch-next-step-python-australia', label: 'After Scratch: Python', p: 'The move from blocks to text.' },
      { href: '/game-development-for-kids-australia', label: 'Game development for kids', p: 'From Scratch games to real engines.' },
      { href: '/coding-for-10-year-olds', label: 'Coding for 10 year olds', p: 'Our general guide for ten year olds.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What a first Python course looks like at ten.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send your details and we will ring at a convenient time. In the free class your child builds part of a small game with a teacher, and you leave knowing whether Scratch or Python is the better starting point.',
    readFirst: 'If you would rather read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a real lesson and the <a class="ag-inline-link" href="/courses">full course list</a> shows the road ahead.',
    note: 'Many Australian families reach us fastest on WhatsApp. We are based in India, so the number begins +91, and we do not run an office in Australia.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Ages 9 and 10', links: [
        { href: '/game-development-for-kids-australia', label: 'Game development for kids' },
        { href: '/python-for-10-year-olds', label: 'Python for 10 year olds' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox classes' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/coding-classes-for-7-and-8-year-olds-australia', label: 'Ages 7 and 8' },
        { href: '/coding-classes-for-11-and-12-year-olds-australia', label: 'Ages 11 and 12' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Every corner of the stage is 300 steps from the middle'
  },

  personalityCss: `
.ag-root.ag-knin .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-knin .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-knin .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-knin .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-knin .ag-grid-3 h3 { font-weight: 630; }
.ag-root.ag-knin .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, Years 3 to 6. ACARA, Australian Curriculum v9, Digital Technologies F-6: Year 4 band description "designing and implementing solutions as visual programs"; AC9TDI4K03 "recognise different types of data and explore how the same data can be represented differently depending on the purpose"; AC9TDI6P03 "design a user interface for a digital system", elaboration "drawing the designed layout of the landing page of an app to order lunches from the school canteen"; Year 6 band description "implement them as visual programs that include variables and respond to input".',
    localProject: 'The Scratch stage as a coordinate plane: scratch-vm runtime.js sets STAGE_WIDTH 480 and STAGE_HEIGHT 360, so x runs from -240 to 240 and y from -180 to 180; area 480 x 360 = 172,800 square steps; centre-to-corner distance 300 (240, 180, 300 is 60 times a 3, 4, 5 triangle); our arithmetic, checked in Python. Lesson family: the Scratch stage as a 480 by 360 coordinate plane.',
    requiredMentions: ['480 steps wide', '172,800', 'STAGE_WIDTH', 'scratch-vm', 'AC9TDI4K03', 'AC9TDI6P03', 'order lunches from the school canteen', 'include variables and respond to input', '3, 4, 5 triangle'],
    sources: [
      { claim: 'Scratch Foundation, scratch-vm src/engine/runtime.js: STAGE_WIDTH returns 480; STAGE_HEIGHT returns 360.', url: 'https://github.com/scratchfoundation/scratch-vm/blob/develop/src/engine/runtime.js' },
      { claim: 'Scratch Foundation, scratch-blocks msg/json/en.json: "go to x: %1 y: %2", "change x by %1", "change %1 by %2", "if %1 then".', url: 'https://github.com/scratchfoundation/scratch-blocks' },
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6: Year 4 and Year 6 band descriptions; AC9TDI4K03; AC9TDI6P03 with the canteen app elaboration.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx' }
    ],
    rejectedClaims: [
      'Which maths year level teaches coordinates or the Cartesian plane: the Mathematics curriculum was not read raw, so no maths content code is quoted.',
      'The pixel size of the Scratch stage on screen: the engine size is 480 by 360 steps, but display size varies with the device, so only the engine numbers are used.',
      'Roblox minimum ages and account rules: not read raw; parents are pointed to Roblox\'s own guidance on other pages.',
      'Lesson length in minutes: not in our brand facts, so not stated.',
      'Any promise of school results: refused.'
    ]
  }
};
