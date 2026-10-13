'use strict';
// Coding classes for 7 and 8 year olds, Australia (ag- topic door; AU cluster Phase 2, row 24).
// Demand: Google autocomplete (en-AU) "coding classes for 7 year olds", "coding classes for 8 year olds"; both
// ages on one page to avoid near-duplicate single-age pages.
// Sources, read raw on 7 October 2026 (curl, default agent):
//  - ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6 (.docx): Year 2 band level
//    description and achievement standard; AC9TDI2P02 with the elaboration "following algorithms that repeat a
//    single step a fixed number of times, for example practise spelling a word 5 times or throw and catch a ball
//    with a partner 10 times"; AC9TDI4P02; AC9TDI4P08; Year 4 achievement standard.
//  - Scratch Foundation, scratch-blocks msg/json/en.json: "move %1 steps", "turn %1 %2 degrees", "repeat %1".
// Lesson family: loop compression, counting the blocks a repeat saves when a sprite walks the outline of a
// regular shape: 2n blocks without a loop, 3 with one, a saving of 2n - 3, and a turn of 360 / n degrees each
// time (our arithmetic, checked in Python).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'AGES 7 AND 8', blurb: 'Coding for Australian 7 and 8 year olds: Scratch stories and games, the first real loops, and what Years 2 to 4 of the Digital Technologies curriculum expect.' },
  slug: 'coding-classes-for-7-and-8-year-olds-australia',
  code: 'ksev',
  accent: '#42637E',
  accentRationale: 'Coding classes for 7 and 8 year olds, Australia: a steel blue chosen by hand, muted, at least 10 RGB units from every accent in use and 40 from every Australian page',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Coding classes for 7 and 8 year olds, Australia',
  title: 'Coding Classes for 7 and 8 Year Olds in Australia',
  description: 'Coding classes for 7 and 8 year olds in Australia: Scratch stories and games, first loops, what Years 2 to 4 of the curriculum expect, and live online lessons.',
  ogDescription: 'Seven and eight is when most children can really start coding on screen. Scratch projects, the first loop, the curriculum for Years 2 to 4, and live online lessons for Australian kids.',
  twitterDescription: 'Coding for 7 and 8 year olds in Australia: Scratch stories, games and the first real loops, taught live online.',
  pageName: 'Coding Classes for 7 and 8 Year Olds in Australia',
  webPageDescription: 'A guide for Australian parents of 7 and 8 year olds to learning to code: Scratch projects, loops, the Digital Technologies curriculum for Years 2 to 4, and live online classes.',
  courseDescription: 'Live online Scratch coding for Australian 7 and 8 year olds: animated stories, simple games and first loops, in small groups or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Coding for 7 and 8 year olds',
  navLinks: [
    { href: '#stage', label: 'This stage' },
    { href: '#loops', label: 'The first loop' },
    { href: '#curriculum', label: 'At school' },
    { href: '#projects-age', label: 'Projects' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 7 and 8 &middot; Live online',
  h1: 'Coding classes for 7 and 8 year olds',
  lede: 'Seven and eight is often the age when coding clicks. Children of this age read well enough to follow block labels, control a mouse with real precision and, most importantly, have opinions about what they want to make: a story where their dog is the hero, a game where the floor is lava, a quiz for their little brother. That combination of skill and ambition makes this a wonderful age to start properly. This page explains what a seven or eight year old can realistically build, works through the single idea that most changes how they code (the loop), shows how it lines up with Years 2 to 4 of the Australian Curriculum, and describes our live online lessons for this age group.',
  secondaryCta: { href: '#loops', label: 'See the first loop' },
  wa: 'Hello Modern Age Coders, our child is 7 or 8 and lives in Australia. Could we book a free first coding class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; stories and games your child designs',
  spec: [
    ['For', 'Children aged 7 and 8'],
    ['School years', 'Usually Years 2 and 3'],
    ['Main tool', 'Scratch'],
    ['Big new idea', 'Loops'],
    ['Projects', 'Stories, games, quizzes'],
    ['Format', 'Live online lessons'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding classes for 7 and 8 year olds usually teach Scratch, a free visual language where children snap blocks together to make animated stories, simple games and quizzes. The key idea at this age is the loop: telling the computer to repeat steps instead of copying them out. It matches the Australian Curriculum, where children in Years 3 and 4 learn to "follow and describe algorithms involving sequencing, comparison operators (branching) and iteration".',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three good first courses at seven and eight',
    lede: 'All three are built around projects a seven or eight year old can finish and show off.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'KSEV / 01', title: 'Scratch Coding for Kids', note: 'The core course at this age: stories, games and animations, from complete beginner upwards.' },
      { course: 'minecraft-coding-for-kids-course', code: 'KSEV / 02', title: 'Minecraft Coding for Kids', note: 'For children who already spend weekends in Minecraft and want to change how it works.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'KSEV / 03', title: 'Problem Solving for Kids', note: 'For puzzle-lovers who like finding the rule behind a pattern before they code it.' }
    ]
  },

  sections: [
    {
      id: 'stage', tint: 'tint', eyebrow: 'This stage',
      h2: 'What seven and eight year olds can build',
      lede: 'The jump from six to eight is large. Most seven year olds still need a teacher close by; most eight year olds start to plan their own projects and fix their own mistakes.',
      body: [
        { kind: 'table', caption: 'Coding at seven and at eight (our teaching experience)', head: ['', 'Typical seven year old', 'Typical eight year old'], rows: [
          ['Reading', 'Reads block labels and short instructions', 'Reads and writes short messages for characters'],
          ['Planning', 'Builds step by step with guidance', 'Sketches an idea first, then builds it'],
          ['Debugging', 'Notices something is wrong', 'Finds which block is wrong and fixes it'],
          ['Projects', 'An animated story with two characters', 'A simple game with a score and a way to win'],
          ['New ideas', 'Sequence, events and the first loop', 'Loops, simple decisions and a first variable']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why stories come first',
          left: [
            'A story with characters who talk in turn teaches sequence and timing beautifully, and children of this age care about stories. If the dragon speaks before the knight finishes, the child sees the bug instantly because the story is wrong.',
            'Stories also make room for every kind of child: the one who loves drawing, the one who loves jokes and the one who loves dragons.'
          ],
          rightH3: 'Then games',
          right: [
            'Games add the idea of rules: what happens when the player touches the coin, what happens when time runs out. Rules mean decisions, and decisions are the next big idea after loops.',
            'By eight, many children are designing games for their friends and family to play, and that audience motivates them like nothing else.'
          ] },
        { kind: 'p', mt: true, html: 'Most seven and eight year olds in Australia are in Year 2 or Year 3, though starting ages differ a little by state. If your child has never coded at all, our page for <a class="ag-inline-link" href="/coding-classes-for-5-and-6-year-olds-australia">5 and 6 year olds</a> has an unplugged game that makes a good warm-up.' }
      ]
    },
    {
      id: 'loops', tint: 'deep', eyebrow: 'A worked example',
      h2: 'The first loop: how much does repeat save?',
      lede: 'This is the lesson that most changes how a seven or eight year old codes. The task: make a Scratch cat walk around the outline of a shape and finish where it started.',
      body: [
        { kind: 'p', html: 'To walk around a square, the cat needs to move forward and turn a quarter turn, four times. Without a loop, that is eight blocks: <em>move 100 steps</em>, <em>turn 90 degrees</em>, <em>move 100 steps</em>, <em>turn 90 degrees</em>, and so on. With Scratch\'s <em>repeat</em> block, it is three: one <em>repeat 4</em> with the move and the turn inside it. Children then try other shapes, and a pattern appears that we ask them to explain. We call this exercise loop compression: measuring how much shorter the repeat makes a program.' },
        { kind: 'table', mt: true, caption: 'Walking the outline of a shape in Scratch (our worked example, checked in Python)', head: ['Shape', 'Sides', 'Turn each time', 'Blocks without a loop', 'Blocks with repeat', 'Blocks saved'], numCols: [1, 2, 3, 4, 5], rows: [
          ['Triangle', '3', '120 degrees', '6', '3', '3'],
          ['Square', '4', '90 degrees', '8', '3', '5'],
          ['Pentagon', '5', '72 degrees', '10', '3', '7'],
          ['Hexagon', '6', '60 degrees', '12', '3', '9'],
          ['Decagon', '10', '36 degrees', '20', '3', '17']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two patterns hide in the table',
          left: [
            'Without a loop, the number of blocks is always twice the number of sides. With a loop, it is always three, however many sides the shape has. So the loop saves more and more as shapes get bigger: two times the sides, take away three.',
            'The turn is always a full turn, 360 degrees, shared equally between the sides. Eight year olds who discover this for themselves are using division without being told to.'
          ],
          rightH3: 'Why the saving matters',
          right: [
            'Fewer blocks means fewer places for a mistake to hide. If a child wants to change the size of the decagon, they change one number inside the loop instead of ten numbers outside it.',
            'That is the real reason programmers love loops, and seven and eight year olds can feel it with their own hands: changing one block is quicker than changing ten.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Predict first', p: 'Before running, the child guesses: will the cat end up back where it started? Then they run it and see.' },
          { h3: 'Break it on purpose', p: 'What happens if the turn is 80 instead of 90? The square does not close, and the child sees why the angle matters.' },
          { h3: 'Invent a shape', p: 'Children choose their own number of sides and work out the turn. Some try a star and are delighted when it works.' }
        ] }
      ]
    },
    {
      id: 'curriculum', tint: 'tint', eyebrow: 'The Australian Curriculum',
      h2: 'How this matches Years 2 to 4 at school',
      lede: 'Seven and eight year olds sit at the meeting point of two bands of the Australian Curriculum v9: the end of Years 1 and 2, and the start of Years 3 and 4.',
      body: [
        { kind: 'table', caption: 'Digital Technologies expectations around ages 7 and 8, Australian Curriculum v9 (quoted)', head: ['Band or point', 'The curriculum\'s wording'], rows: [
          ['Years 1 and 2 (AC9TDI2P02)', 'repeating steps, for example "practise spelling a word 5 times or throw and catch a ball with a partner 10 times"'],
          ['By the end of Year 2', 'students "follow and describe basic algorithms involving a sequence of steps and branching"'],
          ['Years 3 and 4 (AC9TDI4P02)', '"follow and describe algorithms involving sequencing, comparison operators (branching) and iteration"'],
          ['By the end of Year 4', 'students "follow and describe simple algorithms involving branching and iteration and implement them as visual programs"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Iteration is the curriculum\'s word for loops',
          left: [
            'Where we say "loop" or "repeat", ACARA says iteration. The Years 1 and 2 example of a ball thrown and caught ten times is exactly a loop: one action, a fixed number of times.',
            'By Years 3 and 4, children are expected to build iteration into visual programs, which is what the shape-walking lesson does.'
          ],
          rightH3: 'Passwords at eight',
          right: [
            'The same Years 3 and 4 band (AC9TDI4P08) expects children to "access their school account using a memorised password and explain why it should be easy to remember, but hard for others to guess".',
            'We reinforce that habit in lessons: children never share passwords with classmates, and parents set up any accounts.'
          ] },
        { kind: 'source', html: 'ACARA wording verified on 7 October 2026 in its <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">F-6 Digital Technologies file</a> (a Word download). Block names are from the Scratch Foundation\'s <a class="ag-inline-link" href="https://github.com/scratchfoundation/scratch-blocks" rel="noopener" target="_blank">scratch-blocks</a> repository.' }
      ]
    },
    {
      id: 'projects-age', tint: '', eyebrow: 'Projects',
      h2: 'Projects seven and eight year olds finish in a term',
      lede: 'Each project is small enough to finish in a few lessons and teaches one new idea properly.',
      body: [
        { kind: 'table', caption: 'Starter projects for ages 7 and 8', head: ['Project', 'What the child makes', 'The idea it teaches'], rows: [
          ['Talking pets', 'Two animals have a conversation, taking turns', 'Sequence and timing'],
          ['Shape walker', 'A cat walks the outline of any shape', 'Loops and angles'],
          ['Dance party', 'Characters repeat dance moves to music', 'Loops inside loops'],
          ['Catch the apple', 'Apples fall and the player catches them', 'Movement and touching'],
          ['Animal quiz', 'Questions with right and wrong answers', 'Decisions and a score']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Their idea, our structure', p: 'The teacher sets the idea to learn; the child chooses the characters and story. That keeps the project theirs.' },
          { h3: 'Shown at home', p: 'Finished Scratch projects can be played on any computer at home, which is a lovely moment for grandparents.' },
          { h3: 'Ideas between lessons', p: 'Children who want more can try our list of <a class="ag-inline-link" href="/blog/30-plus-scratch-project-ideas-kids-fun-coding-beginner-advanced">Scratch project ideas</a>, sorted by difficulty.' }
        ] }
      ]
    },
    {
      id: 'maths-link', tint: 'deep', eyebrow: 'Coding and maths',
      h2: 'The maths that coding quietly practises at this age',
      lede: 'Parents are often surprised how much primary maths turns up in a Scratch lesson, practised for a reason rather than for a worksheet.',
      body: [
        { kind: 'two',
          leftH3: 'Number and measurement',
          left: [
            'Angles, multiplication and division appear the moment a child walks a shape. Moving a character 10 steps at a time across the screen is skip counting with a purpose.',
            'Scores in games are addition, timers count down, and "how many lives are left?" is subtraction children actually care about.'
          ],
          rightH3: 'Patterns and logic',
          right: [
            'Loops are patterns made precise. Decisions ("if the cat touches the apple, add one to the score") are logic that children reason about aloud.',
            'For children who love the maths side, our course on <a class="ag-inline-link" href="/courses/maths-through-coding">Maths Through Coding</a> takes this further from age ten.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages for seven and eight year olds',
    lede: 'With weekly lessons, most children of this age reach the third stage in two to three terms.',
    table: { caption: 'Coding stages at ages 7 and 8', head: ['Stage', 'What your child can do'], rows: [
      ['1. Sequences', 'Makes characters move and talk in the right order when the green flag is clicked'],
      ['2. Loops', 'Uses repeat instead of copying blocks, and explains how many blocks it saved'],
      ['3. Decisions', 'Makes a game react: if the player touches something, something happens'],
      ['4. Own design', 'Plans a small game on paper, builds it and fixes it with little help']
    ] },
    left: { h3: 'What if my child gets frustrated?', ps: [
      'Frustration usually means the project is one step too big. Teachers split it into smaller wins, and every lesson ends with something that works.',
      'Seven and eight year olds also learn a great deal from watching a teacher make a mistake and fix it calmly, so we do that on purpose.'
    ] },
    right: { h3: 'Around school and sport', ps: [
      'Many families choose a weekend lesson at this age, when children are fresh. Lessons can pause over school holidays, and billing is monthly.',
      'The day and time are agreed in the free first class.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses for ages 7 and 8',
    lede: 'Grouped by what your child is most excited to make.',
    bands: [
      { num: 'I', h3: 'Stories and games', sub: 'Most popular at this age', courses: [
        { code: 'KSEV / FUN / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Stories, games and animations in Scratch.' },
        { code: 'KSEV / FUN / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch first, then apps and simple games across a school year.' },
        { code: 'KSEV / FUN / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding for Kids', blurb: 'Coding inside Minecraft worlds.' }
      ] },
      { num: 'II', h3: 'Thinking and maths', sub: 'For puzzle lovers', courses: [
        { code: 'KSEV / THINK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem Solving for Kids', blurb: 'Patterns, logic and algorithms.' },
        { code: 'KSEV / THINK / 02', slug: 'mental-maths-mastery-kids', title: 'Mental Maths for Kids', blurb: 'Fast, confident calculation.' },
        { code: 'KSEV / THINK / 03', slug: 'microsoft-office-kids-mastery', title: 'Microsoft Office for Kids', blurb: 'Typing, documents and slides with confidence.' }
      ] },
      { num: 'III', h3: 'Coming next', sub: 'From about 8 or 9', courses: [
        { code: 'KSEV / NEXT / 01', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'Bigger games in Scratch, Roblox and Minecraft.' },
        { code: 'KSEV / NEXT / 02', slug: 'block-coding-app-development-masterclass', title: 'App Making for Kids', blurb: 'Real phone apps built with blocks.' },
        { code: 'KSEV / NEXT / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe Coding for Kids', blurb: 'Scratch and kid-safe AI tools, ages 8 to 12.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons for young coders in Australia',
    lede: 'We teach from India, and every Australian state is some hours ahead of us. An after-school or weekend lesson in Australia therefore lands during our normal working day, which keeps teachers fresh and lesson times flexible.',
    slots: [
      { time: 'Weekday, after school', l: 'Works well once children have had a snack and a break.' },
      { time: 'Saturday morning', l: 'A favourite for this age group.' },
      { time: 'Sunday', l: 'For families with Saturday sport.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'Your child makes a small animation with a teacher, and you see how they respond.' },
      { h3: 'Groups', p: 'Fifteen to twenty children of similar age who enjoy showing each other their projects.' },
      { h3: 'One to one', p: 'For a child who wants to race ahead or needs a quieter start.' },
      { h3: 'Hands on the mouse', p: 'The child builds every project. Teachers ask questions instead of taking over.' },
      { h3: 'Families can join', p: 'Lessons are live, and a parent is always welcome to watch.' },
      { h3: 'Free software', p: 'Scratch runs in a web browser at no cost.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Built by older students who, at seven or eight, were making talking pets and falling apples. More in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'In the words parents and students used on our Google profile, unchanged.',

  fees: {
    h2: 'Fees for ages 7 and 8',
    lede: 'Australian families pay in US dollars, one fixed amount a month. Joining is free and there is no contract for a term or a year.',
    free: ['A small animation made together', 'A suggested first course', 'No card or bank details'],
    group: ['Fifteen to twenty children per group', 'The same teacher each week', 'Friends to share projects with', 'Stop after any month'],
    one: ['A teacher entirely for your child', 'Pace set around them', 'Room for a big project of their own']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'What parents of 7 and 8 year olds ask',
    items: [
      { q: 'What coding is right for a 7 year old?', a: 'A block language such as Scratch, used to make animated stories and very simple games. Seven year olds learn sequence and their first loops, ideally with a teacher close by.' },
      { q: 'What can an 8 year old learn in coding?', a: 'Eight year olds can usually plan and build small Scratch games with loops, simple decisions and a score, and start fixing their own mistakes. Some begin Minecraft or Roblox coding too.' },
      { q: 'What is a loop in coding?', a: 'A loop tells the computer to repeat some steps instead of writing them out again. In Scratch it is the repeat block; walking a square takes three blocks with a loop instead of eight without one.' },
      { q: 'Is my 7 year old too young for coding classes?', a: 'Usually not. If your child reads simple words and can use a mouse, they are ready for a block language with a teacher. The free first class shows whether they are.' },
      { q: 'Should my 8 year old learn Python?', a: 'Most 8 year olds do better with Scratch first, because typing and punctuation slow them down. Python usually suits children from about nine or ten.' },
      { q: 'Does coding help with maths?', a: 'It gives maths a purpose: angles to walk a shape, multiplication to move across the screen, addition for a score. It practises maths rather than replacing maths lessons.' },
      { q: 'What does the Australian Curriculum expect at this age?', a: 'By the end of Year 2, children follow and describe basic algorithms with steps and branching. In Years 3 and 4, they add iteration (loops) and build simple visual programs.' },
      { q: 'How often should lessons be?', a: 'Once a week suits most seven and eight year olds and leaves room to play with projects in between.' },
      { q: 'What computer do we need?', a: 'A laptop or desktop with a mouse and a modern web browser. Scratch is free and nothing needs to be installed.' },
      { q: 'What does it cost?', a: 'The trial lesson costs nothing and no card is taken. There is a monthly fee for a group place and another for private lessons, both shown under Fees, and nothing to pay to join.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Australian families of young coders.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every guide we have written for Australian families.' },
      { href: '/coding-classes-for-5-and-6-year-olds-australia', label: 'Coding for 5 and 6 year olds', p: 'Unplugged games and first Scratch.' },
      { href: '/coding-classes-for-9-and-10-year-olds-australia', label: 'Coding for 9 and 10 year olds', p: 'The next stage, towards variables and coordinates.' },
      { href: '/coding-for-8-year-olds', label: 'Coding for 8 year olds', p: 'Our general guide for eight year olds.' },
      { href: '/kids-coding-languages-australia', label: 'Kids coding languages', p: 'Why Scratch comes first.' },
      { href: '/game-development-for-kids-australia', label: 'Game development for kids', p: 'Where Scratch games can lead.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send your details and we will call when it suits you. In the free class your child makes a small animation with a teacher, and afterwards you hear which course would suit them and why.',
    readFirst: 'To see a lesson from the inside, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>; for older and younger children too, browse the full <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'From an Australian phone, WhatsApp tends to be fastest. Our team is in India, hence the +91 number; there is no Australian office.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Ages 7 and 8', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft classes' },
        { href: '/coding-for-8-year-olds', label: 'Coding for 8 year olds' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/coding-classes-for-5-and-6-year-olds-australia', label: 'Ages 5 and 6' },
        { href: '/coding-classes-for-9-and-10-year-olds-australia', label: 'Ages 9 and 10' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Three blocks can walk a decagon'
  },

  personalityCss: `
.ag-root.ag-ksev .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-ksev .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ksev .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-ksev .ag-table caption { font-weight: 610; }
.ag-root.ag-ksev .ag-grid-3 h3 { letter-spacing: -0.004em; }
.ag-root.ag-ksev .ag-course h4 { letter-spacing: -0.004em; }
`,

  dossier: {
    curriculumAuthority: 'Australia, Years 1 to 4. ACARA, Australian Curriculum v9, Digital Technologies F-6: AC9TDI2P02 elaboration "practise spelling a word 5 times or throw and catch a ball with a partner 10 times"; Year 2 achievement standard "follow and describe basic algorithms involving a sequence of steps and branching"; AC9TDI4P02 "follow and describe algorithms involving sequencing, comparison operators (branching) and iteration"; AC9TDI4P08 "access their school account using a memorised password and explain why it should be easy to remember, but hard for others to guess"; Year 4 achievement standard "follow and describe simple algorithms involving branching and iteration and implement them as visual programs".',
    localProject: 'Loop compression: walking the outline of a regular shape with n sides takes 2n blocks without a loop and 3 with repeat, saving 2n - 3 blocks (triangle 6 v 3, square 8 v 3, pentagon 10 v 3, hexagon 12 v 3, decagon 20 v 3, saving 17), with a turn of 360 / n degrees (120, 90, 72, 60, 36); our arithmetic, checked in Python. Lesson family: counting the blocks a loop saves.',
    requiredMentions: ['loop compression', 'decagon', 'AC9TDI4P02', 'AC9TDI4P08', 'throw and catch a ball with a partner 10 times', 'memorised password', 'Shape walker', 'turn 90 degrees', 'implement them as visual programs'],
    sources: [
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6: AC9TDI2P02 elaboration; Year 2 and Year 4 achievement standards; AC9TDI4P02; AC9TDI4P08.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx' },
      { claim: 'Scratch Foundation, scratch-blocks msg/json/en.json: "move %1 steps", "turn %1 %2 degrees", "repeat %1".', url: 'https://github.com/scratchfoundation/scratch-blocks' },
      { claim: 'ABS, Schools methodology, 2025: schooling structure and differing first-year names across states and territories (used for the year-level guidance).', url: 'https://www.abs.gov.au/methodologies/schools-methodology/2025' }
    ],
    rejectedClaims: [
      'Claims that coding raises maths results: no primary study read raw, so the page says coding practises maths without promising outcomes.',
      'Precise ages for each year level by state: starting ages differ, so the page says "usually Years 2 and 3".',
      'Minecraft Education licensing details: not read raw, so not quoted.',
      'Lesson length in minutes: not in our brand facts, so not stated.',
      'A promise of evening lesson hours: agreed in the free class (spec decision 7).'
    ]
  }
};
