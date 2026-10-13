'use strict';
// Minecraft coding classes, Australia (ag- topic door; AU cluster Phase 2, row 16).
// Intent: Australian parents looking for Minecraft coding lessons: what MakeCode for Minecraft is, how a child
// moves from blocks to JavaScript and Python inside Minecraft, and one real programming idea worked in full.
// The global page /minecraft-coding-classes-for-kids is linked; this page has its own worked example.
// Sources, read raw on 7 October 2026:
//  - Microsoft MakeCode for Minecraft, Reference, Positions (minecraft.makecode.com/reference/positions):
//    "A position represents a location in the Minecraft world."; x "East (positive, +x) or West (negative, -x)";
//    y "up (positive, +y) or down (negative, -y)"; z "South (positive, +z) or North (negative, -z)"; "A world
//    position is 3 numbers that are the distances in each direction from the world origin: (0, 0, 0). This is
//    also called an absolute position."; "A relative position has ~ before each number and is centered on the
//    player's current position"; "the position (~0, ~0, ~0) corresponds to the player's feet"; player positions
//    via posCamera.
//  - Microsoft MakeCode for Minecraft, Reference, pos: "A relative position is the distance in each direction
//    from the player's feet."
//  - The same site's course menu lists a CS Intro course with units on Events, Coordinates, Variables,
//    Iteration, Conditionals, Functions, Arrays and Artificial Intelligence, and a Python and JavaScript
//    reference.
//  - Minecraft Education's own site did not respond to our requests, so no licence or pricing claim is made.
// Lesson family: relative coordinates. A platform meant to appear five blocks above a player standing at world
// (100, 64, -20): relative (~0, ~5, ~0) lands at world (100, 69, -20); a child who types world (0, 5, 0)
// builds about 117.8 blocks away (our arithmetic, straight-line distance).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'MINECRAFT CODING, KIDS', blurb: 'Minecraft coding classes for Australian kids: MakeCode blocks, then JavaScript and Python, inside the world they already love.' },
  slug: 'minecraft-coding-classes-australia',
  code: 'mcau',
  accent: '#156F4B',
  accentRationale: 'Minecraft coding classes, Australia: a deep grass green chosen by hand, muted, at least 11 RGB units from every accent in use and at least 40 from the other Phase 2 doors',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Minecraft coding classes, Australia',
  title: 'Minecraft Coding Classes in Australia | MakeCode to Python',
  description: 'Minecraft coding classes for Australian kids: MakeCode blocks, then JavaScript and Python, building and automating inside Minecraft. Live online, first class free.',
  ogDescription: 'Why a platform meant to appear above your child\'s head can land more than a hundred blocks away, and how Australian kids learn real coding inside Minecraft.',
  twitterDescription: 'Minecraft coding for Australian kids: MakeCode blocks, JavaScript and Python inside Minecraft. Live online, first class free.',
  pageName: 'Minecraft Coding Classes in Australia',
  webPageDescription: 'A parent guide to Minecraft coding for Australian children: MakeCode for Minecraft, coordinates, loops, the Agent and the move to JavaScript and Python.',
  courseDescription: 'Live online Minecraft coding for Australian kids: MakeCode blocks, coordinates, loops and the Agent, then the same programs written in JavaScript and Python.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Minecraft coding classes',
  navLinks: [
    { href: '#makecode', label: 'MakeCode' },
    { href: '#coordinates', label: 'A worked example' },
    { href: '#builds', label: 'What kids build' },
    { href: '#text', label: 'Blocks to text' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 7 to 14 &middot; Blocks to real code',
  h1: 'Minecraft coding classes',
  lede: 'Minecraft already teaches children to plan, build and experiment. Coding inside Minecraft adds one powerful idea: instead of placing ten thousand blocks by hand, you can write a short program that places them for you, the same way every time. Towers rise in seconds, bridges cross ravines, and a little robot called the Agent digs tunnels while your child watches. Behind all of it sit real programming ideas: coordinates, loops, functions, conditions and, later, typed JavaScript and Python. This page is for Australian parents whose children love Minecraft and might love coding too. It explains the tool most children start with, works through one idea that trips up nearly every beginner, and shows the path from blocks to text.',
  secondaryCta: { href: '#coordinates', label: 'See a worked example' },
  wa: 'Hello Modern Age Coders, my child in Australia loves Minecraft and wants to learn to code in it. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; programs that build, written by the child',
  spec: [
    ['For', 'Children aged 7 to 14'],
    ['Tool', 'MakeCode for Minecraft'],
    ['Starts in', 'Blocks'],
    ['Moves to', 'JavaScript and Python'],
    ['Big ideas', 'Coordinates, loops, functions'],
    ['Format', 'Live online lessons'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Minecraft coding is writing programs that act inside a Minecraft world: placing blocks, building structures, moving a robot helper called the Agent and reacting to what the player does. Most children start with Microsoft MakeCode for Minecraft, which offers drag-and-drop blocks and lets them switch the same program to JavaScript or Python. Along the way they learn coordinates, loops, functions and conditions. Modern Age Coders teaches Minecraft coding live online to Australian children, and the first class is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for young Minecraft coders',
    lede: 'By age and by how far your child has come. Each card opens the full syllabus.',
    items: [
      { course: 'minecraft-coding-for-kids-course', code: 'MCAU / 01', title: 'Minecraft Coding for Kids', note: 'MakeCode blocks first, then real JavaScript and Python, all inside Minecraft.' },
      { course: 'game-development-masterclass-for-kids', code: 'MCAU / 02', title: 'Game Development for Kids', note: 'Ages 8 to 12. Minecraft worlds alongside Scratch and Roblox projects.' },
      { course: 'python-ai-kids-masterclass', code: 'MCAU / 03', title: 'Python and AI for Kids', note: 'Ages 9 to 12. For Minecraft coders ready for Python outside the game.' }
    ]
  },

  sections: [
    {
      id: 'makecode', tint: 'tint', eyebrow: 'MakeCode',
      h2: 'The tool most children start with',
      lede: 'Microsoft MakeCode for Minecraft connects a coding editor to the game. A child writes a program in blocks, and something happens in their world.',
      body: [
        { kind: 'table', caption: 'What the MakeCode for Minecraft site offers learners', head: ['Part', 'What it covers', 'Why it helps'], rows: [
          ['Blocks', 'Drag-and-drop instructions for the player, blocks, mobs, the Agent and the builder', 'No spelling mistakes, so attention goes to logic'],
          ['JavaScript and Python', 'The same programs as typed code, with a reference for each language', 'A direct bridge from blocks to text'],
          ['Positions reference', 'World, relative, player and local positions explained', 'The maths of where things go, made explicit'],
          ['CS Intro course', 'Units on events, coordinates, variables, iteration, conditionals, functions, arrays and artificial intelligence', 'A structured order that matches how programming is usually taught'],
          ['Examples', 'Projects such as towers, bridges, mazes and mini games', 'Ideas to remix and extend']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why Minecraft works for learning',
          left: [
            'Children already know the world, the blocks and the rules, so they can focus on the code. When a program builds a tower, they instantly see whether it is right.',
            'Minecraft also makes three dimensions natural. A child who has dug tunnels and built towers understands up, down and sideways in a way a worksheet rarely achieves.'
          ],
          rightH3: 'What to know before starting',
          right: [
            'MakeCode for Minecraft works with particular editions of Minecraft, and families should check the requirements on the MakeCode and Minecraft sites for their own computer and account.',
            'We check your setup during the free class, and if it is not ready we can start in a browser-based tool and switch once it is.'
          ] },
        { kind: 'source', html: 'Source, read 7 October 2026: <a class="ag-inline-link" href="https://minecraft.makecode.com/reference/positions" rel="noopener" target="_blank">Microsoft MakeCode for Minecraft, Positions</a> and the site\'s course and reference menus. Minecraft and MakeCode are products of Microsoft and Mojang; we are independent of both.' }
      ]
    },
    {
      id: 'coordinates', tint: 'deep', eyebrow: 'A worked example',
      h2: 'Where did my platform go? Relative coordinates',
      lede: 'This is the idea that trips up almost every beginner, and once it clicks, children understand coordinates better than many adults.',
      body: [
        { kind: 'p', html: 'MakeCode describes every location with three numbers: x for "East (positive, +x) or West (negative, -x)", y for "up (positive, +y) or down (negative, -y)" and z for "South (positive, +z) or North (negative, -z)". There are two common ways to give those numbers. A <strong>world position</strong>, in MakeCode\'s words, is "3 numbers that are the distances in each direction from the world origin: (0, 0, 0). This is also called an absolute position." A <strong>relative position</strong> "has ~ before each number and is centered on the player\'s current position", and "the position (~0, ~0, ~0) corresponds to the player\'s feet".' },
        { kind: 'table', caption: 'Our worked example: the player stands at world position (100, 64, -20) and wants a platform five blocks above', head: ['What the child writes', 'Kind of position', 'Where the platform appears', 'Result'], rows: [
          ['(~0, ~5, ~0)', 'Relative', 'World (100, 69, -20)', 'Five blocks above the player, as intended'],
          ['(0, 5, 0)', 'World', 'World (0, 5, 0)', 'About 117.8 blocks away, deep underground (our arithmetic)'],
          ['(~2, ~0, ~0)', 'Relative', 'World (102, 64, -20)', 'Two blocks East of the player\'s feet'],
          ['(~0, ~0, ~-3)', 'Relative', 'World (100, 64, -23)', 'Three blocks North of the player\'s feet']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The first mistake', p: 'Writing (0, 5, 0) looks like "five blocks up". In a world position it means five blocks above the world origin, which can be far from the player.' },
          { h3: 'Working it out', p: 'From (100, 64, -20) to (0, 5, 0) is 100 blocks in x, 59 in y and 20 in z. Squaring, adding and taking the square root gives about 117.8 blocks in a straight line.' },
          { h3: 'The fix', p: 'Use a relative position when something should follow the player, and a world position when it must stay put, such as the exact spot of a finish line.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The second, sneakier mistake',
          left: [
            'Relative positions move with the player. MakeCode warns that they "move" because they start from the player\'s feet. If a program builds a tower one block at a time while the child walks away, each new block lands next to the player\'s new position, and the tower comes out crooked.',
            'The fix is to read the player\'s position once at the start, keep it in a variable, and build every block from that saved spot. That is the moment a child understands why variables exist.'
          ],
          rightH3: 'What children learn from it',
          right: [
            'That the same three numbers can mean completely different places depending on what they are measured from. Programmers call this a frame of reference, and it appears everywhere, from maps to screens to robots.',
            'Older children meet a third kind, the player position, set by the direction the player faces. MakeCode creates it with <code>posCamera</code>, so "three blocks in front of me" works whichever way the player turns.'
          ] }
      ]
    },
    {
      id: 'builds', tint: 'tint', eyebrow: 'What kids build',
      h2: 'Projects from a first tower to a mini game',
      lede: 'Each project introduces one new programming idea, using a build children are proud to show off.',
      body: [
        { kind: 'table', caption: 'A typical Minecraft coding progression', head: ['Project', 'What it does', 'What it teaches'], rows: [
          ['Chat command tower', 'Typing a word in chat builds a tower above the player', 'Events and relative positions'],
          ['Flower trail', 'Flowers appear wherever the player walks', 'Events that repeat and the player position'],
          ['Agent tunnel', 'The Agent digs a tunnel of a chosen length', 'Loops and a robot that follows instructions'],
          ['Bridge builder', 'A bridge spans a gap whatever its width', 'Variables and parameters'],
          ['Pyramid', 'A stepped pyramid built layer by layer', 'Loops inside loops'],
          ['Mini game', 'A timed challenge with a score', 'Conditions, timers and simple game state']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The Agent',
          left: [
            'The Agent is a small robot that does what the code says: move, turn, place, dig and detect. Because it follows instructions literally, children quickly see the difference between what they meant and what they wrote.',
            'Programming the Agent is a gentle introduction to robotics thinking: sensing, deciding and acting.'
          ],
          rightH3: 'Making it their own',
          right: [
            'After each guided project, children change it: a taller tower, a curved bridge, a pyramid of a different block. Changing a program is where understanding shows.',
            'Many go on to invent their own builds, and some design small games for siblings and friends.'
          ] }
      ]
    },
    {
      id: 'text', tint: 'deep', eyebrow: 'Blocks to text',
      h2: 'From MakeCode blocks to JavaScript and Python',
      lede: 'One of the most useful things about MakeCode is that the same program can be shown as blocks, JavaScript or Python. Children use that to cross the gap to typed code.',
      body: [
        { kind: 'table', caption: 'Moving from blocks to text, one step at a time', head: ['Step', 'What the child does', 'Why it works'], rows: [
          ['1. Read', 'Builds in blocks, then looks at the JavaScript or Python view', 'They see their own program in text form'],
          ['2. Edit', 'Changes one number or word in the text view and runs it', 'Small, safe changes build confidence'],
          ['3. Write', 'Types short programs in text from the start', 'Blocks become a safety net, not a crutch'],
          ['4. Leave', 'Writes Python outside Minecraft', 'The ideas are no longer tied to one game']
        ] },
        { kind: 'p', mt: true, html: 'Children who reach step four usually move into our <a class="ag-inline-link" href="/courses/python-ai-kids-masterclass">Python and AI for Kids</a> course or, later, into <a class="ag-inline-link" href="/game-programming-course-australia">game programming</a>. Those who prefer worlds other people can join may enjoy <a class="ag-inline-link" href="/roblox-coding-classes-australia">Roblox coding classes</a>. For the full picture of how game making builds year by year in Australia, see <a class="ag-inline-link" href="/game-development-for-kids-australia">game development for kids</a>.' },
        { kind: 'source', html: 'MakeCode\'s pos reference describes a relative position as "the distance in each direction from the player\'s feet". Source, read 7 October 2026: <a class="ag-inline-link" href="https://minecraft.makecode.com/reference/positions/pos" rel="noopener" target="_blank">MakeCode for Minecraft, pos</a>.' }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'At school',
      h2: 'Minecraft coding and Australian classrooms',
      lede: 'Minecraft coding lines up naturally with the Digital Technologies curriculum taught in Australian primary schools.',
      body: [
        { kind: 'two',
          leftH3: 'What it practises',
          left: [
            'The Australian Curriculum v9 asks primary students to implement algorithms as visual programs with control structures, variables and input. MakeCode blocks do exactly that, inside a world children already understand.',
            'Coordinates in Minecraft also reinforce maths: positive and negative numbers, three directions and the distance calculation in the worked example above.'
          ],
          rightH3: 'What we do not do',
          right: [
            'We do not complete school projects or assessed tasks. Children often bring ideas from school into their Minecraft builds, and the understanding goes back with them.',
            'We also never ask children to join public servers or chat with strangers as part of lessons. Building and testing happen in their own world.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four stages of a Minecraft coder',
    lede: 'With one or two lessons a week, most children reach the third stage within a school year.',
    table: { caption: 'From builder to programmer', head: ['Stage', 'What your child can do'], rows: [
      ['1. Commander', 'Use events and relative positions to build near the player on command'],
      ['2. Automator', 'Use loops and variables to build structures of any size'],
      ['3. Engineer', 'Plan builds with world and relative positions, functions and the Agent'],
      ['4. Coder', 'Write the same programs in JavaScript or Python, then outside Minecraft']
    ] },
    left: { h3: 'Is it just playing Minecraft?', ps: [
      'No. The game is the canvas, but lessons are spent planning, writing and fixing programs. A typical lesson has one clear coding goal.',
      'Children do play their own creations at the end, which is part of testing.'
    ] },
    right: { h3: 'What age suits Minecraft coding?', ps: [
      'Children from about seven who read simple words can start with blocks. Typed JavaScript and Python suit children from about nine or ten.',
      'The free first class shows us where your child should begin.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses around Minecraft coding',
    lede: 'Grouped by stage. We agree the right band in the free class.',
    bands: [
      { num: 'I', h3: 'Blocks', sub: 'Ages 6 to 9', courses: [
        { code: 'MCAU / BLK / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Block coding outside Minecraft, from zero.' },
        { code: 'MCAU / BLK / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Blocks, games and a first look at Python.' },
        { code: 'MCAU / BLK / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem Solving for Kids', blurb: 'Logic and patterns behind every build.' }
      ] },
      { num: 'II', h3: 'Worlds', sub: 'Ages 7 to 12', courses: [
        { code: 'MCAU / WLD / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding for Kids', blurb: 'MakeCode blocks to JavaScript and Python.' },
        { code: 'MCAU / WLD / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Game Coding for Kids', blurb: 'Scripting experiences others can join.' },
        { code: 'MCAU / WLD / 03', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'Scratch, Roblox and Minecraft projects.' }
      ] },
      { num: 'III', h3: 'Text', sub: 'Ages 9 to 14', courses: [
        { code: 'MCAU / TXT / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Python outside the game, with small AI projects.' },
        { code: 'MCAU / TXT / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe Coding for Kids', blurb: 'Building with AI help, understood step by step.' },
        { code: 'MCAU / TXT / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for Teens', blurb: 'The language behind MakeCode\'s text view, for web games.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Minecraft lessons in Australian time',
    lede: 'Our teachers are based in India. Australian after-school hours fall in the Indian afternoon, so weekday lessons are easy to arrange in every state, including during daylight saving in the east.',
    slots: [
      { time: 'After school', l: 'Short weekday lessons for primary children.' },
      { time: 'Saturday', l: 'Longer sessions for bigger builds.' },
      { time: 'Sunday', l: 'For families with busy weekdays.' }
    ],
    cells: [
      { h3: 'Free first class', p: 'Your child writes a first building program with a teacher. No card needed.' },
      { h3: 'Small groups', p: 'Fifteen to twenty children sharing builds and ideas.' },
      { h3: 'One to one', p: 'For a child who wants to race ahead or go deeper.' },
      { h3: 'Their own code', p: 'Children write every program; teachers ask questions instead of giving answers.' },
      { h3: 'Own world only', p: 'No public servers and no chatting with strangers during lessons.' },
      { h3: 'Builds kept', p: 'Programs stay with your child to reuse and improve.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Games and apps our students built and shared online. You will find more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Exactly as families wrote them on our Google profile.',

  fees: {
    h2: 'Fees for Minecraft coding classes',
    lede: 'Families outside India pay one monthly fee in US dollars. No enrolment fee and no term contract; you can stop after any month, holidays included.',
    free: ['A first building program written together', 'Advice on the right starting point', 'No card or bank details'],
    group: ['Fifteen to twenty children per class', 'Builds shared and tested together', 'A regular teacher', 'Stop after any month'],
    one: ['Lessons around your child\'s own builds', 'Their pace, their projects', 'Times around school and sport']
  },

  faq: {
    eyebrow: 'Parents ask',
    h2: 'What Australian parents ask about Minecraft coding',
    items: [
      { q: 'What is Minecraft coding?', a: 'It is writing programs that act inside a Minecraft world: placing blocks, building structures, moving the Agent robot and reacting to the player. Most children use MakeCode for Minecraft, starting with blocks and moving to JavaScript or Python.' },
      { q: 'What are relative coordinates in Minecraft?', a: 'They are positions measured from the player\'s feet, written with a ~ before each number. (~0, ~5, ~0) means five blocks above the player wherever they stand, whereas (0, 5, 0) means a fixed spot near the world\'s origin.' },
      { q: 'Is Minecraft coding real coding?', a: 'Yes. The blocks use the same ideas as any programming language, and MakeCode shows each program as JavaScript or Python too, so children can move to typed code without starting again.' },
      { q: 'What age is Minecraft coding for?', a: 'Blocks suit children from about seven. Typed JavaScript or Python inside Minecraft usually suits children from about nine or ten.' },
      { q: 'What do we need at home?', a: 'A computer that can run a supported edition of Minecraft together with MakeCode, and a steady internet connection. Requirements change, so we check your setup in the free class.' },
      { q: 'Is it safe?', a: 'Lessons happen in your child\'s own world. We never ask children to join public servers or chat with strangers, and accounts stay under the family\'s control.' },
      { q: 'Does Minecraft coding help at school?', a: 'It practises the visual programming the Australian Curriculum v9 sets for primary school, and reinforces positive and negative numbers and three-dimensional thinking.' },
      { q: 'What comes after Minecraft coding?', a: 'Usually Python outside the game, then game programming, web development or AI projects, depending on what your child enjoys most.' },
      { q: 'Can my child do Minecraft and Roblox coding?', a: 'Yes. Many children try both. Minecraft is great for building and automation; Roblox suits making experiences other people join.' },
      { q: 'What does it cost?', a: 'The first class is free with no card required. Monthly group and one-to-one fees are listed in the fees section of this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More on this site',
    h2: 'Related pages',
    lede: 'Other routes for young builders, and our Australian guides.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every Australian page in one place.' },
      { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes worldwide', p: 'The same course for families anywhere.' },
      { href: '/roblox-coding-classes-australia', label: 'Roblox coding classes', p: 'Luau scripting for Australian kids.' },
      { href: '/game-development-for-kids-australia', label: 'Game development for kids', p: 'Scratch to engines, by year level.' },
      { href: '/coding-games-for-kids-australia', label: 'Coding games for kids', p: 'Puzzle games that teach programming.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Online coding classes for kids', p: 'How live lessons work in Australia.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Give us your details and we will call when it suits you. In the free class your child writes a program that builds something in Minecraft, and you hear clearly which course fits.',
    readFirst: 'To learn more before booking, read <a class="ag-inline-link" href="/how-we-teach">how our lessons are taught</a> or see <a class="ag-inline-link" href="/courses">all courses by age</a>.',
    note: 'WhatsApp from an Australian mobile is usually quickest. We work from India, so our number starts +91, and we have no office in Australia.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Building worlds', links: [
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft classes worldwide' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox classes' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/roblox-coding-classes-australia', label: 'Roblox coding classes' },
        { href: '/game-development-for-kids-australia', label: 'Game development for kids' },
        { href: '/coding-classes-cost-australia', label: 'What coding classes cost' }
      ] }
    ],
    bottomRight: 'Same numbers, different place: it depends where you measure from'
  },

  personalityCss: `
.ag-root.ag-mcau .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-mcau .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-mcau .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-mcau .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mcau .ag-band-head h3 { letter-spacing: 0; }
.ag-root.ag-mcau .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, primary years. Minecraft coding with MakeCode practises the visual programming strand of the Australian Curriculum v9 Digital Technologies (implementing algorithms as visual programs with control structures, variables and input in Years 3 to 6); code-level mapping is on game-development-for-kids-australia. Tool facts from Microsoft MakeCode for Minecraft reference pages.',
    localProject: 'Relative coordinates: a player at world (100, 64, -20) wants a platform five blocks above; relative (~0, ~5, ~0) lands at world (100, 69, -20); world (0, 5, 0) lands about 117.8 blocks away in a straight line (100, 59 and 20 blocks along the axes; our arithmetic); a tower built from relative positions while the player walks comes out crooked unless the start position is saved in a variable. Lesson family: relative versus world coordinates.',
    requiredMentions: ['relative coordinates', 'This is also called an absolute position.', 'corresponds to the player\'s feet', '(~0, ~5, ~0)', '117.8 blocks', 'MakeCode for Minecraft', 'posCamera', 'the distance in each direction from the player\'s feet'],
    sources: [
      { claim: 'Microsoft MakeCode for Minecraft, Positions: x East (positive, +x) or West (negative, -x); y up (positive, +y) or down (negative, -y); z South (positive, +z) or North (negative, -z); "A world position is 3 numbers that are the distances in each direction from the world origin: (0, 0, 0). This is also called an absolute position."; "A relative position has ~ before each number and is centered on the player\'s current position"; "the position (~0, ~0, ~0) corresponds to the player\'s feet"; posCamera for player positions.', url: 'https://minecraft.makecode.com/reference/positions' },
      { claim: 'Microsoft MakeCode for Minecraft, pos: "A relative position is the distance in each direction from the player\'s feet."', url: 'https://minecraft.makecode.com/reference/positions/pos' },
      { claim: 'MakeCode for Minecraft site menu: CS Intro course with units on Events, Coordinates, Variables, Iteration, Conditionals, Functions, Arrays and Artificial Intelligence; Python and JavaScript references.', url: 'https://minecraft.makecode.com/' }
    ],
    rejectedClaims: [
      'Minecraft Education licensing, pricing and school access in Australia: the Minecraft Education site did not respond, so nothing is claimed.',
      'Exact supported Minecraft editions and versions for MakeCode: not read at source in a stable form; the page tells families to check requirements.',
      'Minecraft player numbers: no primary source read raw; not quoted.',
      'Any claim that Minecraft coding improves maths results: not made.',
      'Promised evening lesson hours: the hour is agreed in the free class (spec decision 7).'
    ]
  }
};
