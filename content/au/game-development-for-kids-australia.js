'use strict';
// Game development for kids, Australia (ag- high-demand door; AU cluster Phase 1 preview, row 1).
// Demand: our Search Console, Australia, 16 months: "game development for kids" 390 impressions at position
// 49.0, "programming games for kids" 392 at 34.5, "coding games for kids" 372 at 40.1, "game coding courses"
// 138 at 41.6, "video game design kids" 39 at 52.2.
// Sources, read raw on 7 October 2026:
//  - ACARA, Australian Curriculum v9, Technologies: Digital Technologies curriculum content F-6 and 7-10
//    (the .docx downloads from australiancurriculum.edu.au/downloads/learning-areas). Content descriptions
//    quoted with codes: AC9TDI4P03 and its computer-game elaboration, AC9TDI4P04, AC9TDI6P04 and its game
//    controller elaboration, AC9TDI6P05, AC9TDI8P09 with the "such as Python, JavaScript or C#" elaboration,
//    AC9TDI10P09 with the adventure-game and RPG elaborations.
//  - Godot Engine licence page (godotengine.org/license): "free and open source software released under the
//    permissive MIT license".
//  - PyPI JSON for pygame: version 2.6.1, licence LGPL, summary "Python Game Development".
// Lesson family: the hitbox, an axis-aligned bounding box overlap test, worked by hand and then in code; the
// box-versus-circle comparison (256 square pixels against 201.06, so the box catches 27.3% more area) is our
// own arithmetic, labelled as such on the page.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'GAME DEVELOPMENT, KIDS', blurb: 'Game development for Australian kids from Year 3 to Year 10: Scratch games, then Python and Pygame, then a real engine, mapped to the Digital Technologies curriculum.' },
  slug: 'game-development-for-kids-australia',
  code: 'gdau',
  accent: '#2D6F30',
  accentRationale: 'Game development for kids, Australia: a eucalyptus green chosen by hand, muted, at least 13 RGB units from every accent in use and clear of the cyan and violet bands',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Game development for kids, Australia',
  title: 'Game Development for Kids in Australia | Live Online Classes',
  description: 'Game development for kids in Australia: Scratch games in Year 3, Python and Pygame by Year 7, a real engine by Year 9, taught live online. First class free.',
  ogDescription: 'From a Scratch game in primary school to Python and a real engine in high school: how Australian kids learn game development, step by step, with the curriculum codes.',
  twitterDescription: 'Game development for Australian kids, Year 3 to Year 10: Scratch, then Python and Pygame, then a real engine. Live online, first class free.',
  pageName: 'Game Development for Kids in Australia',
  webPageDescription: 'A live online game development pathway for Australian children and teens, mapped to the Australian Curriculum v9 Digital Technologies content descriptions from Year 3 to Year 10.',
  courseDescription: 'Live online game development for Australian kids and teens: Scratch games, Python with Pygame, Roblox and Unity, built around real projects and the Digital Technologies curriculum.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Game development for kids',
  navLinks: [
    { href: '#path', label: 'The path' },
    { href: '#curriculum', label: 'Curriculum' },
    { href: '#hitbox', label: 'A worked example' },
    { href: '#first-games', label: 'First games' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 6 to 18 &middot; Live online',
  h1: 'Game development for kids in Australia',
  lede: 'Most children who ask to make games have already spent hundreds of hours playing them, so they arrive knowing exactly what a good game feels like and nothing about why. That gap is where the learning lives. Making a game means deciding what counts as a win, what the player sees first, what happens when two things touch and how fast anything moves. Each of those is a small programming problem in disguise. This page sets out how Australian kids can go from a first Scratch game in primary school to Python and Pygame around Year 7 and a real engine by Year 9 or 10, which mirrors the order the Australian Curriculum itself uses: visual programs first, then a general-purpose language, then object-oriented code. It also shows one idea worked all the way through, the hitbox, so you can see what a lesson actually contains.',
  secondaryCta: { href: '#path', label: 'See the path' },
  wa: 'Hello Modern Age Coders, my child is in Australia and wants to learn game development. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; every game built by the child, line by line',
  spec: [
    ['For', 'Kids and teens, ages 6 to 18'],
    ['Starts with', 'Scratch, a free visual language'],
    ['Then', 'Python and the Pygame library'],
    ['Later', 'Unity and C#, or Godot'],
    ['Also', 'Roblox Studio and Minecraft'],
    ['Format', 'Live online, after school'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Game development for kids is the practice of designing and programming a playable game: its rules, its moving objects, its scoring and what happens when things collide. In Australia the Digital Technologies curriculum moves from visual programs in Years 3 to 6 to a general-purpose language such as Python in Years 7 and 8, so a strong path is Scratch first, then Python with Pygame, then an engine such as Unity or Godot. Modern Age Coders teaches that path live online, in small groups or one to one, and the first class is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three ways into making games',
    lede: 'Pick by age and by how much your child already knows. Each card opens the full syllabus.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'GDAU / 01', title: 'Game Development for Kids', note: 'Ages 8 to 12. Real games in Scratch first, then Roblox and Minecraft worlds, over six to eight months.' },
      { course: 'python-ai-kids-masterclass', code: 'GDAU / 02', title: 'Python and AI for Kids', note: 'Ages 9 to 12. From first lines of Python to Pygame games and small, kid-safe AI projects.' },
      { course: 'complete-game-development-masterclass-for-teens', code: 'GDAU / 03', title: 'Game Development for Teens', note: 'Ages 13 to 18. Unity and C#, 2D and 3D games, and the habits of shipping something finished.' }
    ]
  },

  sections: [
    {
      id: 'path', tint: 'tint', eyebrow: 'The path',
      h2: 'From a Scratch game to a real engine, by year level',
      lede: 'Children learn game development fastest when each stage removes one kind of friction at a time. Scratch removes typing errors, Python removes the blocks, and an engine removes the plumbing so a teenager can think about design.',
      body: [
        { kind: 'table', caption: 'A typical progression for Australian students', head: ['Year level', 'Tool', 'What a finished game looks like'], rows: [
          ['Foundation to Year 2', 'Scratch Junior style activities, then Scratch', 'A character that moves when a key is pressed and makes a sound when it reaches a goal'],
          ['Years 3 and 4', 'Scratch', 'A catch-the-falling-objects game with a score that goes up and a timer that runs out'],
          ['Years 5 and 6', 'Scratch, with variables and clones', 'A platformer with gravity, two levels and a high score the player can beat'],
          ['Years 7 and 8', 'Python with Pygame', 'A top-down maze game written as text, with a game loop the student wrote themselves'],
          ['Years 9 and 10', 'Unity with C#, or Godot', 'A small 2D or 3D game split into scripts and scenes, with enemies that each have their own behaviour'],
          ['Years 11 and 12, and adults', 'Unity, Godot or Unreal', 'A finished project with menus, saving and a build that someone else can install']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why blocks come first',
          left: [
            'In Scratch a child cannot make a spelling mistake, because every instruction is a block that snaps into place. That leaves all of their attention for the actual logic: when should the score increase, what should happen when time runs out, why does the cat walk through the wall?',
            'Younger children who start in a text language often spend their first month fighting brackets. Children who start in Scratch spend it making games, and they arrive at Python already knowing what a loop and a variable are for.'
          ],
          rightH3: 'Why blocks are not the end',
          right: [
            'Scratch has a ceiling. Large projects become hard to read, there is no real way to split a game into files, and the skills do not carry straight into the jobs that use code.',
            'Moving to Python, and later to an engine, is not about leaving childish things behind. It is about being able to build something bigger than one screen can hold, and to read code that somebody else wrote.'
          ] },
        { kind: 'p', mt: true, html: 'Ages are a guide, not a rule. A keen Year 4 student can start Python; a Year 9 student who has never coded usually still benefits from two or three weeks of Scratch first. The free first class is where that decision gets made, with the child at the keyboard rather than by guesswork. If you are weighing the two languages, our comparison of <a class="ag-inline-link" href="/blog/scratch-vs-python-which-better-young-learners">Scratch and Python for young learners</a> goes into more detail.' }
      ]
    },
    {
      id: 'curriculum', tint: 'deep', eyebrow: 'The Australian Curriculum',
      h2: 'How this lines up with Digital Technologies at school',
      lede: 'Version 9 of the Australian Curriculum, published by ACARA, sets out what students should learn in Digital Technologies from Foundation to Year 10. The programming strand follows the same order as a good game development path.',
      body: [
        { kind: 'table', caption: 'Programming content descriptions in Digital Technologies, Australian Curriculum v9', head: ['Band', 'Code', 'Content description, as published'], rows: [
          ['Years 3 and 4', 'AC9TDI4P04', '"implement simple algorithms as visual programs involving control structures and input"'],
          ['Years 5 and 6', 'AC9TDI6P05', '"implement algorithms as visual programs involving control structures, variables and input"'],
          ['Years 7 and 8', 'AC9TDI8P09', '"implement, modify and debug programs involving control structures and functions in a general-purpose programming language"'],
          ['Years 9 and 10', 'AC9TDI10P09', '"implement, modify and debug modular programs, applying selected algorithms and data structures, including in an object-oriented programming language"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Games appear in the curriculum itself',
          left: [
            'The elaborations ACARA publishes alongside the content descriptions use games as examples more than once. For Years 3 and 4 (AC9TDI4P03) the example is "sketching different ideas for a computer game". For Years 5 and 6 (AC9TDI6P04) it is "modifying a game or game controller so that it can be used by a wider range of players".',
            'For Years 9 and 10 (AC9TDI10P09) students might use "the codebase of an existing adventure game" and build new characters, levels or abilities, or store character details in "a role-playing game (RPG)" using a dictionary.'
          ],
          rightH3: 'The language question',
          right: [
            'For Years 7 and 8, the elaboration names the kind of general-purpose language it means: "such as Python, JavaScript or C#". All three are taught in our game courses: Python with Pygame, JavaScript for browser games, and C# inside Unity.',
            'We do not teach to any particular school\'s assessment task, and we never complete assessed work. What we can do is make sure the ideas a child meets in class are ones they have already used for real in a game of their own.'
          ] },
        { kind: 'source', html: 'Source, read 7 October 2026: ACARA, Australian Curriculum Version 9.0, Technologies, Digital Technologies <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">curriculum content F-6</a> and <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">curriculum content 7-10</a> (Word downloads). States and territories implement the Australian Curriculum in their own ways; NSW, for example, publishes its own syllabuses.' }
      ]
    },
    {
      id: 'hitbox', tint: 'tint', eyebrow: 'A worked example',
      h2: 'What a lesson looks like: the hitbox',
      lede: 'Almost every game has to answer one question dozens of times a second: are these two things touching? Here is how we teach the answer, from a hand-drawn sketch to working code.',
      body: [
        { kind: 'p', html: 'In Scratch, the question is a single block: <em>touching coin?</em> It works, and children love it. But it hides the idea. So once a student is comfortable, we take the block away and ask them to decide for themselves when two rectangles overlap. The rectangle drawn around a sprite for this purpose is called its <strong>hitbox</strong>, and the test is called an axis-aligned bounding box check, because the box edges run along the screen\'s x and y axes.' },
        { kind: 'table', caption: 'Our worked example: does the player collect the coin?', head: ['Object', 'Left edge (x)', 'Top edge (y)', 'Width', 'Height'], rows: [
          ['Player', '100', '200', '40', '40'],
          ['Coin', '130', '220', '16', '16']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Check across', p: 'The player\'s left edge (100) is left of the coin\'s right edge (130 + 16 = 146), and the player\'s right edge (100 + 40 = 140) is right of the coin\'s left edge (130). So they overlap side to side.' },
          { h3: 'Check down', p: 'The player\'s top (200) is above the coin\'s bottom (220 + 16 = 236), and the player\'s bottom (240) is below the coin\'s top (220). So they overlap up and down as well.' },
          { h3: 'The verdict', p: 'Both checks pass, so the boxes overlap and the coin is collected. If either check fails, they are not touching, however close they look on screen.' }
        ] },
        { kind: 'p', mt: true, html: 'In Python with Pygame, the same test becomes four comparisons joined by <code>and</code>, and a student who has worked it by hand can write it from memory. Pygame also has a built-in method for it, <code>colliderect</code>, but we only introduce it after the student has written their own version and tested it against the example above.' },
        { kind: 'two', mt: true,
          leftH3: 'The catch, in numbers',
          left: [
            'Boxes are fast but not exact. Our coin is round: a circle 16 pixels across has an area of about 201.06 square pixels, but its 16 by 16 hitbox covers 256. By our arithmetic the box counts about 27.3% more area than the coin really has, all of it in the corners.',
            'That is why a player can sometimes "collect" a coin they visibly missed. Spotting this, and deciding whether it matters, is real game design.'
          ],
          rightH3: 'What students do with it',
          right: [
            'Older students go on to shrink hitboxes slightly so the game feels fair, to use circles for round objects, and to check only the objects that are nearby so a busy screen does not slow down.',
            'Each of those is a trade-off between speed and accuracy, which is one of the most useful ideas in all of programming, not just games.'
          ] }
      ]
    },
    {
      id: 'first-games', tint: '', eyebrow: 'First games',
      h2: 'Games children build in their first term',
      lede: 'Every project is small enough to finish and share, and each one is chosen because it teaches one new idea properly.',
      body: [
        { kind: 'table', caption: 'Starter projects and the idea each one teaches', head: ['Game', 'Tool', 'The idea it teaches'], rows: [
          ['Catch the falling fruit', 'Scratch', 'Random positions, a score variable and a game-over condition'],
          ['Maze escape', 'Scratch', 'Detecting walls and resetting the player to a start point'],
          ['Pong for two players', 'Scratch, then Python', 'Angles of reflection and a ball that speeds up'],
          ['Space dodger', 'Python and Pygame', 'A game loop, keyboard input and the hitbox test above'],
          ['Treasure hunt quiz', 'Python', 'Lists of questions, shuffling and keeping a high score in a file'],
          ['Platformer level', 'Unity or Godot', 'Physics, jumping, and splitting a game into scenes and scripts']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'One idea at a time', p: 'A first game has one moving object and one rule. The second adds a score. By the fifth, the child is combining ideas without being told how.' },
          { h3: 'Finished, then shared', p: 'Scratch projects can be shared to the Scratch website; Python games run on the family computer. Showing a sibling or a grandparent is part of the lesson.' },
          { h3: 'Ideas when stuck', p: 'Children who run out of ideas between lessons can browse our list of <a class="ag-inline-link" href="/blog/30-plus-scratch-project-ideas-kids-fun-coding-beginner-advanced">Scratch project ideas</a>, sorted from beginner to advanced.' }
        ] }
      ]
    },
    {
      id: 'engines', tint: 'deep', eyebrow: 'Engines and platforms',
      h2: 'Scratch, Pygame, Roblox, Unity and Godot, compared honestly',
      lede: 'Parents often ask which tool is right. The honest answer is that each one is right at a different stage, and some children will use three of them in a single year.',
      body: [
        { kind: 'table', caption: 'What each tool is good for', head: ['Tool', 'Language', 'Cost to the family', 'Good for'], rows: [
          ['Scratch', 'Blocks', 'Free to use', 'First games and first ideas, from about age 6'],
          ['Pygame', 'Python', 'Free and open source (pygame 2.6.1 is published under the LGPL)', 'Learning how a game loop really works, in text'],
          ['Roblox Studio', 'Luau', 'See Roblox\'s current terms', 'Building worlds other people can join, with a real scripting language'],
          ['Unity', 'C#', 'See Unity\'s current licence terms', 'Teen and adult 2D and 3D games, with a large community of tutorials'],
          ['Godot', 'GDScript or C#', 'Free and open source, released under the MIT licence', 'A lightweight engine that runs well on modest school laptops']
        ] },
        { kind: 'p', mt: true, html: 'We avoid recommending tools by brand loyalty. A child who learns why a game loop exists, how collision is detected and how a state such as "paused" or "game over" is stored can move between any of these in a few weeks. That transferable understanding is the point; the tool is the vehicle.' },
        { kind: 'source', html: 'Sources, read 7 October 2026: <a class="ag-inline-link" href="https://godotengine.org/license/" rel="noopener" target="_blank">Godot Engine licence page</a> ("free and open source software released under the permissive MIT license"); the Python Package Index entry for pygame (version 2.6.1, licence LGPL). Licence terms for Unity and Roblox change; read the current terms on their own sites before relying on them.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages from player to game maker',
    lede: 'At one or two live lessons a week, most children reach the third stage within a school year. The fourth usually takes a second year.',
    table: { caption: 'From playing games to making them', head: ['Stage', 'What your child can do'], rows: [
      ['1. Remix', 'Change an existing game\'s speed, sprites and score, and predict what each change will do'],
      ['2. Build', 'Make a complete small game from a blank project, with a start, a goal and an ending'],
      ['3. Explain', 'Write the same game in Python and explain each line, including the game loop and collisions'],
      ['4. Design', 'Plan a larger game on paper, split it into parts, build it in an engine and test it with real players']
    ] },
    left: { h3: 'Does my child need to be good at maths?', ps: [
      'No, but game development is one of the friendliest ways to meet coordinates, negative numbers, angles and percentages. Children often understand x and y axes in a game months before they meet them in class.',
      'For children who want more, our <a class="ag-inline-link" href="/courses/maths-through-coding">Maths Through Coding</a> course uses Python to teach maths directly.'
    ] },
    right: { h3: 'Around school terms', ps: [
      'Australian schools run four terms a year. Billing is monthly, so families can pause over the long summer break or during exam weeks and restart when ready.',
      'Lessons are after school or at the weekend; the hour is agreed in the free first class.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for young game makers',
    lede: 'Grouped by stage. The free first class settles where your child starts.',
    bands: [
      { num: 'I', h3: 'First games', sub: 'Primary school', courses: [
        { code: 'GDAU / FST / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'From a first block to real games and animations.' },
        { code: 'GDAU / FST / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch to games, apps and a first taste of Python.' },
        { code: 'GDAU / FST / 03', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'Scratch, then Roblox and Minecraft worlds.' }
      ] },
      { num: 'II', h3: 'Worlds and text', sub: 'Upper primary and Years 7 and 8', courses: [
        { code: 'GDAU / WLD / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Game Coding for Kids', blurb: 'Roblox Studio and Luau, up to a published game.' },
        { code: 'GDAU / WLD / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding for Kids', blurb: 'From blocks to real code inside a world they know.' },
        { code: 'GDAU / WLD / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Pygame games, turtle art and small AI projects.' }
      ] },
      { num: 'III', h3: 'Real engines', sub: 'Years 9 to 12 and beyond', courses: [
        { code: 'GDAU / ENG / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game Development for Teens', blurb: 'Unity and C#, from a first scene to a shipped game.' },
        { code: 'GDAU / ENG / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for Teens', blurb: 'Interactive websites and games that run in a browser.' },
        { code: 'GDAU / ENG / 03', slug: 'game-development-complete-masterclass-college', title: 'Game Development Course', blurb: 'Unity, C# and Unreal for older teens and adults.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons that fit an Australian school week',
    lede: 'Our teachers are in India. In winter, Sydney, Melbourne, Brisbane, Canberra and Hobart are four and a half hours ahead of India time, Adelaide and Darwin four hours ahead and Perth two and a half. After school in Australia falls in the Indian afternoon, so lessons sit comfortably in the school week.',
    slots: [
      { time: 'Weekday, after school', l: 'The most common choice for primary students.' },
      { time: 'Saturday', l: 'A longer build session for older students.' },
      { time: 'Sunday', l: 'For families with busy Saturday sport.' }
    ],
    cells: [
      { h3: 'Try before paying', p: 'The opening class costs nothing; it shows the teacher how far your child has already got.' },
      { h3: 'Small groups', p: 'Fifteen to twenty children of a similar level, playing and testing each other\'s games.' },
      { h3: 'Private lessons', p: 'Suited to a quick learner, a quiet child or a teenager chasing one ambitious game.' },
      { h3: 'Their own games', p: 'Every line is typed or snapped in by the child. Teachers explain and question; they do not build it for them.' },
      { h3: 'Parents can watch', p: 'Lessons are live, so you can sit in, and finished games can be played at home.' },
      { h3: 'No assessed work', p: 'We never complete school assessment tasks, though skills learned here help in class.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'A few games and apps our students finished and published. More of them, from young beginners to adults, sit in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Copied exactly as families and learners posted them on our Google profile.',

  fees: {
    h2: 'Fees for game development',
    lede: 'Families outside India pay a single monthly price in US dollars. Nothing is charged to enrol and nobody signs up for a whole term: stopping after any month is fine, the long summer break included.',
    free: ['A small game made during the class', 'Advice on the right starting course', 'No card or bank details'],
    group: ['Between five and ten children per class', 'One teacher who knows your child', 'Classmates play-test each game', 'Stop after any month'],
    one: ['Every minute spent on your child', 'Timing worked around sport and homework', 'Space for one big game of their own']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'What Australian parents ask about game development',
    items: [
      { q: 'What is game development for kids?', a: 'It is designing and programming a playable game: deciding its rules, making things move, keeping score and detecting when objects touch. For children it usually starts in a visual language such as Scratch and moves to text languages such as Python later.' },
      { q: 'What is a hitbox in a game?', a: 'A hitbox is an invisible rectangle around an object that a game uses to decide whether two things are touching. It is fast to check, but slightly larger than a round object, which is why a near miss sometimes counts as a hit.' },
      { q: 'What age can my child start making games?', a: 'Many children start in Scratch at about six or seven, once they can read simple words. Python usually suits children from about nine or ten, and engines such as Unity suit teenagers.' },
      { q: 'Should my child learn Scratch or Python first?', a: 'For most children under about ten, Scratch first, because it removes typing errors and leaves all their attention for logic. Older beginners can often move to Python within weeks.' },
      { q: 'Does this match what my child does at school?', a: 'It follows the same order as the Australian Curriculum v9 Digital Technologies content: visual programs in Years 3 to 6, a general-purpose language such as Python in Years 7 and 8, and object-oriented programming by Year 10.' },
      { q: 'Is Roblox safe for my child to code in?', a: 'Roblox Studio is a development tool, and our lessons focus on building, not chatting with strangers. Parents should still review Roblox\'s own age guidance and parental controls before setting up an account.' },
      { q: 'Will my child just play games in the lessons?', a: 'No. They test games, but nearly all lesson time goes into building, fixing and explaining them. Playing each other\'s finished games is a short and useful part of the end of a project.' },
      { q: 'What computer does my child need?', a: 'A laptop or desktop with a keyboard and a modern browser is enough for Scratch and Python. Engines such as Unity need more memory, so we check your computer before recommending one.' },
      { q: 'When are lessons in Australian time?', a: 'After school or at the weekend in your own state\'s time, agreed in the free first class. Our teachers are in India, which is between two and a half and five and a half hours behind Australian clocks depending on state and season.' },
      { q: 'What does it cost?', a: 'The first class is free and needs no card. Monthly fees for group and one-to-one lessons are shown in the fees section of this page, with no enrolment charge and no term contract.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'For Australian families, for younger beginners and for choosing a first language.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'All of our Australian pages in one place.' },
      { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning in Australia', p: 'For teens ready to build with AI.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes', p: 'The first stage of the path, in detail.' },
      { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes', p: 'Building worlds with Roblox Studio and Luau.' },
      { href: '/blog/top-coding-games-platforms-make-learning-fun-kids', label: 'Coding games and platforms', p: 'Where children can practise between lessons.' },
      { href: '/best-age-to-start-coding', label: 'The right age to start coding', p: 'What changes at six, nine and twelve.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send your details and we will ring when it suits you. During the free class your child makes a small game with a teacher, and afterwards you hear plainly which course would suit them and why.',
    readFirst: 'Prefer to read more before calling? Our page on <a class="ag-inline-link" href="/how-we-teach">the way we teach</a> explains a lesson minute by minute, and the <a class="ag-inline-link" href="/courses">full course list</a> covers every age.',
    note: 'Messaging us on WhatsApp from an Australian phone is often quickest. Our team works from India, which is why the number starts with +91, and we have no office in Australia.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Game making', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox classes' },
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft classes' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for kids' },
        { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMT competitions' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Players notice what a game does; makers know why'
  },

  personalityCss: `
.ag-root.ag-gdau .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-gdau .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-gdau .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-gdau .ag-table caption { text-align: left; font-weight: 620; }
.ag-root.ag-gdau .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-gdau .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, Foundation to Year 10. ACARA, Australian Curriculum v9, Technologies: Digital Technologies curriculum content F-6 and 7-10 (Word downloads): AC9TDI4P04 "implement simple algorithms as visual programs involving control structures and input"; AC9TDI6P05 "implement algorithms as visual programs involving control structures, variables and input"; AC9TDI8P09 "implement, modify and debug programs involving control structures and functions in a general-purpose programming language", elaboration "such as Python, JavaScript or C#"; AC9TDI10P09 "implement, modify and debug modular programs, applying selected algorithms and data structures, including in an object-oriented programming language", elaborations "the codebase of an existing adventure game" and "a role-playing game (RPG)"; AC9TDI4P03 elaboration "sketching different ideas for a computer game"; AC9TDI6P04 elaboration "modifying a game or game controller so that it can be used by a wider range of players".',
    localProject: 'The hitbox, worked by hand: a 40 by 40 player at (100, 200) and a 16 by 16 coin at (130, 220) pass both the horizontal and vertical overlap tests, so the coin is collected; the coin is round, and a circle 16 pixels across covers about 201.06 square pixels against its box\'s 256, so the box counts about 27.3% more area (our arithmetic). Lesson family: axis-aligned bounding box overlap, from Scratch\'s touching block to four comparisons in Python and then Pygame\'s colliderect.',
    requiredMentions: ['AC9TDI4P04', 'AC9TDI6P05', 'AC9TDI8P09', 'AC9TDI10P09', 'such as Python, JavaScript or C#', 'role-playing game (RPG)', 'hitbox', '201.06', '27.3%', 'pygame 2.6.1'],
    sources: [
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6: AC9TDI4P03, AC9TDI4P04, AC9TDI6P04, AC9TDI6P05 and elaborations.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx' },
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content 7-10: AC9TDI8P09 with the Python, JavaScript or C# elaboration; AC9TDI10P09 with the adventure game and RPG elaborations.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' },
      { claim: 'Godot Engine licence page: free and open source software released under the permissive MIT license.', url: 'https://godotengine.org/license/' },
      { claim: 'Python Package Index, pygame: version 2.6.1, licence LGPL, summary "Python Game Development".', url: 'https://pypi.org/project/pygame/' }
    ],
    rejectedClaims: [
      'Australian games industry revenue or player statistics: no primary source read raw, so none used.',
      'Scratch user counts and its stated age range: the Scratch about page renders by script and could not be read raw, so neither is quoted.',
      'Specific Unity or Roblox licence thresholds and minimum ages: these change; the page sends parents to the vendors\' current terms instead.',
      'Promised evening lesson hours: the hour is agreed in the free class (spec decision 7).',
      'Any claim that our lessons satisfy a school assessment task: refused; the page says we never complete assessed work.'
    ]
  }
};
