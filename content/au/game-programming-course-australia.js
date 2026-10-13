'use strict';
// Game programming course, Australia (ag- topic door; AU cluster Phase 2, row 12).
// Demand: our Search Console, Australia, 16 months: "game programming" 244 impressions at position 37.3, "game
// coding courses" 138 at 41.6, "python game development" 25 at 25.0, "game development courses for beginners
// free" 19 at 44.3. Absorbs "game coding courses online".
// Intent: a programming course for TEENS AND ADULTS who want to write games properly: the game loop, time,
// physics, structure. The kids' path from Scratch is /game-development-for-kids-australia, linked not repeated.
// Sources, read raw on 7 October 2026:
//  - Godot Engine documentation, "Idle and Physics Processing": "Physics processing happens at a fixed rate, 60
//    times per second by default."; "you should always multiply a speed value by delta to animate a moving object."
//  - Unity Scripting API, Time.fixedDeltaTime: "The interval in seconds of in-game time at which physics and other
//    fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) are performed."
//  - Glenn Fiedler, "Fix Your Timestep!", Gaffer On Games, 10 June 2004 (the accumulator pattern).
//  - ACARA, Australian Curriculum v9, Digital Technologies curriculum content 7-10: AC9TDI8P06, AC9TDI10P06.
// Lesson family: fixed timestep. A one-second fall under 9.8 m/s per second, simulated frame by frame, lands
// 5.0633 m at 30 frames a second, 4.9817 m at 60 and 4.9340 m at 144 against an exact 4.9 m (our runs); with a
// fixed 1/60 s step and an accumulator every machine gets 4.9817 m.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'GAME PROGRAMMING, TEENS AND ADULTS', blurb: 'A game programming course for Australian teens and adults: the game loop, time, physics and code structure, in Python, C# and GDScript.' },
  slug: 'game-programming-course-australia',
  code: 'gpau',
  accent: '#994236',
  accentRationale: 'Game programming course, Australia: a fired-brick red chosen by hand, muted, at least 12 RGB units from every accent in use and at least 40 from the other Phase 2 doors',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Game programming course, Australia',
  title: 'Game Programming Course in Australia | Teens and Adults',
  description: 'A live game programming course for Australian teens and adults: game loops, time, physics and clean code in Python, C# and GDScript. Your first class is free.',
  ogDescription: 'Why a jump goes higher on a slow laptop, and how real game programmers fix it: a live online game programming course for Australian teens and adults.',
  twitterDescription: 'Game programming for Australian teens and adults: the game loop, fixed timesteps, physics and structure. Live online, first class free.',
  pageName: 'Game Programming Course in Australia',
  webPageDescription: 'A live online game programming course for Australian secondary students and adults, covering the game loop, frame-rate independence, physics, state and project structure.',
  courseDescription: 'Live online game programming for Australian teens and adults: Python with Pygame, C# with Unity and GDScript with Godot, built around complete, shippable projects.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Game programming course',
  navLinks: [
    { href: '#who', label: 'Who it is for' },
    { href: '#loop', label: 'The game loop' },
    { href: '#timestep', label: 'A worked example' },
    { href: '#modules', label: 'Modules' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Year 9 to adult &middot; Live online',
  h1: 'Game programming course',
  lede: 'Plenty of online courses will walk you through clicking together a platformer in an afternoon. Far fewer explain why your character jumps higher on a slow laptop than on a fast one, why enemies sometimes pass through walls, or why the code that worked for one level collapses when you add the tenth. Those are game programming problems, and they are the subject of this course. It is for Australian secondary students from about Year 9, university students and working adults who want to write games properly: the loop that drives every game, how time is measured and stepped, how physics is made stable, and how a project is structured so it can keep growing. You work in real languages and real engines, live with a teacher, and you finish with games you understand line by line.',
  secondaryCta: { href: '#timestep', label: 'See a worked example' },
  wa: 'Hello Modern Age Coders, I am in Australia and want to take a game programming course. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; complete games, explained line by line',
  spec: [
    ['For', 'Year 9 students to adults'],
    ['Languages', 'Python, C# and GDScript'],
    ['Engines', 'Pygame, Unity and Godot'],
    ['Core ideas', 'Loop, time, physics, state'],
    ['Prior coding', 'Helpful, not required'],
    ['Format', 'Live online lessons'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'A game programming course teaches the code that makes games work: the game loop that updates and draws each frame, frame-rate independent movement, a fixed timestep for stable physics, collision, game state and project structure. Ours is taught live online to Australian teens from about Year 9 and to adults, in Python with Pygame, C# with Unity and GDScript with Godot. Every module ends with a playable game the student wrote and can explain, and the first class is free.',

  picks: {
    eyebrow: 'Choose a starting point',
    h2: 'Three ways into game programming',
    lede: 'Matched to age and to how much code you have already written. Each card opens the full syllabus.',
    items: [
      { course: 'complete-game-development-masterclass-for-teens', code: 'GPAU / 01', title: 'Game Development for Teens', note: 'Ages 13 to 18. Unity and C#, from a first scene to a shipped 2D or 3D game.' },
      { course: 'game-development-complete-masterclass-college', code: 'GPAU / 02', title: 'Game Development Course', note: 'Ages 18 and over. Unity, C# and Unreal Engine for university students and working adults.' },
      { course: 'python-complete-masterclass-teens', code: 'GPAU / 03', title: 'Python for Teens', note: 'For teens who want strong Python first, then games with Pygame on top of it.' }
    ]
  },

  sections: [
    {
      id: 'who', tint: 'tint', eyebrow: 'Who it is for',
      h2: 'Who takes a game programming course with us',
      lede: 'The students are different; the questions they bring are surprisingly similar.',
      body: [
        { kind: 'table', caption: 'Typical students and what they want from the course', head: ['Student', 'Where they start', 'What they leave with'], rows: [
          ['Year 9 or 10 student', 'Has made Scratch or Roblox games', 'A typed game loop of their own and the confidence to read engine code'],
          ['Year 11 or 12 student', 'Studying a computing subject at school', 'Real projects that show object-oriented design and testing in practice'],
          ['University student', 'Can program, has never shipped a game', 'Finished, playable games and a clear grasp of engine architecture'],
          ['Working adult', 'Codes for work, or has never coded', 'A hobby skill built properly, without gaps from video tutorials'],
          ['Career changer', 'Curious about the games industry', 'An honest view of the skills involved and a portfolio to start from']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What makes this different from a tutorial',
          left: [
            'Video tutorials are excellent at showing what to click. They rarely stop to ask why, and they cannot see where you are stuck. A live teacher can.',
            'Every lesson here includes a question you answer before the code is written: what will this frame do if it takes twice as long, what happens when two objects arrive at the same time, where should this state live? Those questions are the course.'
          ],
          rightH3: 'What you do not need',
          right: [
            'You do not need a powerful gaming computer to begin. Python with Pygame and the Godot engine both run on ordinary laptops, and we check your machine before recommending Unity.',
            'You do not need advanced maths. Coordinates, a little algebra and the idea of speed are enough to start; vectors and trigonometry are taught when a game needs them.'
          ] },
        { kind: 'p', mt: true, html: 'Younger children and complete beginners start in a different place. Our page on <a class="ag-inline-link" href="/game-development-for-kids-australia">game development for kids in Australia</a> covers the path from a first Scratch game. Students who want the design side of games more than the code will find <a class="ag-inline-link" href="/video-game-design-for-kids-australia">video game design for kids</a> a better fit.' }
      ]
    },
    {
      id: 'loop', tint: 'deep', eyebrow: 'The game loop',
      h2: 'The three jobs every game does, many times a second',
      lede: 'Under every engine and every genre sits the same loop. Students who understand it can learn any engine quickly; students who skip it spend years guessing.',
      body: [
        { kind: 'table', caption: 'One pass through a game loop', head: ['Step', 'What happens', 'Typical bug when it is wrong'], rows: [
          ['Read input', 'Keys, mouse, controller and network messages are collected', 'A key press is missed because it happened between two checks'],
          ['Update', 'Positions, health, timers and scores change by the time that has passed', 'Movement speeds up or slows down with the frame rate'],
          ['Draw', 'The current state is rendered to the screen', 'Objects flicker or appear a frame late'],
          ['Wait or repeat', 'The loop runs again, ideally at a steady rate', 'Uneven frame times make motion stutter']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How the engines name it',
          left: [
            'In Godot the update step is split in two: <code>_process()</code> runs every rendered frame, and <code>_physics_process()</code> runs at a fixed rate. The Godot documentation states plainly that "Physics processing happens at a fixed rate, 60 times per second by default."',
            'In Unity the same split appears as <code>Update</code> and <code>FixedUpdate</code>. Unity describes <code>Time.fixedDeltaTime</code> as "The interval in seconds of in-game time at which physics and other fixed frame rate updates (like MonoBehaviour\'s MonoBehaviour.FixedUpdate) are performed."'
          ],
          rightH3: 'Why we write one by hand first',
          right: [
            'In Pygame nothing is hidden: the student writes the loop, reads the clock and decides what to update. Building that once, badly and then well, makes every engine feel familiar instead of magical.',
            'The Godot documentation gives the rule that most beginners break: "you should always multiply a speed value by delta to animate a moving object." The worked example below shows what happens when you do not, and why even multiplying by delta is not the whole answer.'
          ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: Godot Engine documentation, <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/tutorials/scripting/idle_and_physics_processing.html" rel="noopener" target="_blank">Idle and Physics Processing</a>; Unity Scripting API, <a class="ag-inline-link" href="https://docs.unity3d.com/ScriptReference/Time-fixedDeltaTime.html" rel="noopener" target="_blank">Time.fixedDeltaTime</a>. We are independent of both engines.' }
      ]
    },
    {
      id: 'timestep', tint: 'tint', eyebrow: 'A worked example',
      h2: 'Why the jump is higher on a slow laptop',
      lede: 'This is the first big lesson of the course. It takes about an hour, and it explains a bug that beginners meet again and again.',
      body: [
        { kind: 'p', html: 'Drop a ball from rest and let gravity pull it down at 9.8 metres per second per second. Physics tells us that after exactly one second it has fallen 4.9 metres. A game cannot do the calculus; it steps the motion forward one frame at a time, adding a little to the speed, then a little to the position. We ran that frame-by-frame update for one second of game time at three common frame rates.' },
        { kind: 'table', caption: 'Distance fallen after one second, stepped once per frame (our runs, semi-implicit Euler)', head: ['Frame rate', 'Step size', 'Distance after 1 second', 'Gap from the exact 4.9 m'], rows: [
          ['30 frames a second', '1/30 s', '5.0633 m', '0.1633 m'],
          ['60 frames a second', '1/60 s', '4.9817 m', '0.0817 m'],
          ['144 frames a second', '1/144 s', '4.9340 m', '0.0340 m']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The problem', p: 'The same code, the same second, three different answers. A player on an older school laptop running at 30 frames a second falls further, jumps differently and may clip through a thin platform that a fast machine handles cleanly.' },
          { h3: 'The fix', p: 'Step the physics in fixed slices, say 1/60 of a second, whatever the screen is doing. Every machine then performs the same 60 steps per second and gets the same 4.9817 m, every time.' },
          { h3: 'The accumulator', p: 'Each frame, add the real time that passed to a running total. While the total holds at least one slice, take a physics step and subtract the slice. Leftover time waits for the next frame.' }
        ] },
        { kind: 'table', mt: true, caption: 'A fixed 1/60 s physics step under different display rates (our runs, one second each)', head: ['Display rate', 'Frames with no physics step', 'Frames with one step', 'Frames with two steps', 'Physics steps in total'], rows: [
          ['144 frames a second', '84', '60', '0', '60'],
          ['60 frames a second', '0', '60', '0', '60'],
          ['30 frames a second', '0', '0', '30', '60']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where this pattern comes from',
          left: [
            'The accumulator approach was set out for game developers by Glenn Fiedler in his 2004 article <a class="ag-inline-link" href="https://gafferongames.com/post/fix_your_timestep/" rel="noopener" target="_blank">"Fix Your Timestep!"</a>, which is still widely read. Godot\'s fixed physics rate and Unity\'s <code>FixedUpdate</code> do the same job for you.',
            'Students write the accumulator in Python first, so that when they meet it inside an engine they recognise it.'
          ],
          rightH3: 'The detail students then discover',
          right: [
            'At 144 frames a second, more than half of all frames do no physics at all. If you only draw the latest physics state, objects appear to move in small jumps.',
            'The cure is to draw objects slightly blended between their last two physics positions, which is what engines call physics interpolation. Finding that problem yourself, and fixing it, is the kind of understanding that separates game programmers from tutorial followers.'
          ] }
      ]
    },
    {
      id: 'modules', tint: 'deep', eyebrow: 'Modules',
      h2: 'What the course covers, module by module',
      lede: 'Order and pace adjust to the student. Each module finishes with a playable game.',
      body: [
        { kind: 'table', caption: 'Course modules and the game each one produces', head: ['Module', 'Key ideas', 'Finished game'], rows: [
          ['1. The loop by hand', 'Input, update, draw, the clock, delta time', 'A dodging game in Python with Pygame'],
          ['2. Time and physics', 'Fixed timestep, accumulator, gravity, interpolation', 'A platformer whose jumps match on every machine'],
          ['3. Collision', 'Overlap tests, resolving contacts, tunnelling through thin walls', 'A top-down arena with solid walls'],
          ['4. State and structure', 'Finite state machines, scenes, separating data from code', 'A game with menus, pause, levels and game over'],
          ['5. An engine', 'Nodes or game objects, scripts, signals or events', 'The platformer rebuilt in Godot or Unity'],
          ['6. Finishing', 'Saving, settings, testing, building for others to install', 'A complete game someone else can download and play']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How this sits beside school computing',
          left: [
            'The Australian Curriculum v9 asks students in Years 7 and 8 to "trace algorithms to predict output for a given input and to identify errors" (AC9TDI8P06) and in Years 9 and 10 to "validate algorithms and programs by comparing their output against a range of test cases" (AC9TDI10P06). The frame-rate table above is exactly that kind of test.',
            'Students taking a senior computing subject can see the same ideas applied to a bigger project. For New South Wales, our page on <a class="ag-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering help</a> explains how we support that course without writing assessed work.'
          ],
          rightH3: 'Honest limits',
          right: [
            'This is a programming course. It does not teach 3D modelling, music or professional art, though students learn to use free assets responsibly.',
            'We do not promise jobs in the games industry. What we can promise is that you will understand the games you build, and be able to show and explain them.'
          ] },
        { kind: 'source', html: 'Curriculum wording copied on 7 October 2026 from the ACARA Version 9.0 Digital Technologies <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">content for Years 7 to 10</a>, a Word file.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four levels of game programming',
    lede: 'Most students who come with some coding reach level three in two to three terms of weekly lessons. Level four is where a portfolio starts.',
    table: { caption: 'From writing a loop to shipping a game', head: ['Level', 'What you can do'], rows: [
      ['1. Loop', 'Write a game loop by hand, move objects with delta time and explain each line'],
      ['2. Stable', 'Run physics on a fixed timestep with an accumulator, and say why it matters'],
      ['3. Structured', 'Organise a game into states and scenes so new levels do not break old ones'],
      ['4. Shipped', 'Finish, test and package a game that someone else can install and play']
    ] },
    left: { h3: 'Python, C# or GDScript first?', ps: [
      'Python if you are new to typed code: it is readable and Pygame keeps the game loop in plain sight.',
      'C# with Unity if you already program and want the widest range of tutorials and jobs. GDScript with Godot if you want a light, free engine that runs well on modest machines.'
    ] },
    right: { h3: 'Fitting it around school or work', ps: [
      'Lessons are weekly, in your own state\'s time, after school, in the evening or at the weekend, agreed in the free class.',
      'Billing is monthly, so a pause for Year 12 exams, end of semester or a busy work quarter is simple.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses that build game programming skill',
    lede: 'Arranged by age and depth. Which one you start with gets decided in the free class.',
    bands: [
      { num: 'I', h3: 'Games', sub: 'Teens and adults', courses: [
        { code: 'GPAU / GAM / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game Development for Teens', blurb: 'Unity and C#, 2D and 3D, ages 13 to 18.' },
        { code: 'GPAU / GAM / 02', slug: 'game-development-complete-masterclass-college', title: 'Game Development Course', blurb: 'Unity, C# and Unreal, for adults.' },
        { code: 'GPAU / GAM / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for Teens', blurb: 'Games that run in any browser.' }
      ] },
      { num: 'II', h3: 'Languages', sub: 'Strong foundations', courses: [
        { code: 'GPAU / LNG / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The language behind Pygame, done properly.' },
        { code: 'GPAU / LNG / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for Teens', blurb: 'The language many engines are written in.' },
        { code: 'GPAU / LNG / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python for Adults', blurb: 'From zero to advanced, for university and work.' }
      ] },
      { num: 'III', h3: 'Thinking', sub: 'Algorithms behind games', courses: [
        { code: 'GPAU / THK / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving and DSA for Teens', blurb: 'Search, graphs and data structures games rely on.' },
        { code: 'GPAU / THK / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive Programming for Teens', blurb: 'Fast, correct code under pressure.' },
        { code: 'GPAU / THK / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'Keeping a growing game project safe.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons at an Australian hour',
    lede: 'Teachers work from India. During the southern summer, Sydney, Melbourne, Canberra and Hobart run five and a half hours ahead of India time, Brisbane four and a half, Adelaide five and Perth two and a half, so Australian afternoons and early evenings fall inside the Indian working day.',
    slots: [
      { time: 'After school', l: 'For secondary students in their own state.' },
      { time: 'Evening', l: 'For adults after work, by arrangement.' },
      { time: 'Weekend', l: 'Longer build sessions on bigger projects.' }
    ],
    cells: [
      { h3: 'Free first class', p: 'We look at code you have written, or start from nothing, and set a level honestly.' },
      { h3: 'Groups', p: 'Fifteen to twenty students at a similar level, reviewing each other\'s code.' },
      { h3: 'One to one', p: 'For a specific project, a tight timeline or a faster pace.' },
      { h3: 'Your own code', p: 'You type everything. Teachers question and guide; they never write your project for you.' },
      { h3: 'Code review', p: 'Each module ends with a review of structure, naming and tests, not just whether it runs.' },
      { h3: 'Portfolio ready', p: 'Finished games are kept in your own repository to show and keep building.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Games and apps our students finished and put online. There are more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Taken unchanged from public reviews on our Google profile.',

  fees: {
    h2: 'Fees for the game programming course',
    lede: 'Outside India the fee is one monthly price in US dollars. There is no enrolment charge and no semester commitment; stop after any month.',
    free: ['A short programming task at your level', 'An honest view of where to start', 'No card or bank details needed'],
    group: ['Fifteen to twenty students per class', 'A regular teacher who knows your code', 'Peer code review', 'Stop after any month'],
    one: ['Lessons built around your own game', 'Your choice of engine and language', 'Times around school, uni or work']
  },

  faq: {
    eyebrow: 'Common questions',
    h2: 'What Australians ask about learning game programming',
    items: [
      { q: 'What is game programming?', a: 'It is writing the code that makes a game run: the loop that reads input, updates the world and draws it, plus physics, collision, game state and the structure that holds a growing project together. It is narrower than game development, which also includes art, sound and design.' },
      { q: 'What is a fixed timestep in games?', a: 'It is updating physics in equal slices of time, such as 1/60 of a second, regardless of how fast the screen redraws. It makes movement and collisions behave the same on fast and slow computers.' },
      { q: 'Do I need to know how to code first?', a: 'No. Complete beginners start with Python and build up to games. Students who already code move to the game loop and an engine sooner.' },
      { q: 'Is this course for teenagers or adults?', a: 'Both, in separate groups by age. Teens from about Year 9 join teen groups; university students and working adults join adult groups or learn one to one.' },
      { q: 'Should I learn Unity, Godot or Unreal?', a: 'Learn the ideas first, in any of them. Godot is light and free, Unity has the largest body of tutorials, and Unreal suits high-end 3D. Students who understand the game loop can move between them in weeks.' },
      { q: 'Which language do game programmers use?', a: 'C++ and C# are common in engines and studios, GDScript in Godot, and Python is widely used for learning and tools. We teach the language that suits your goal and engine.' },
      { q: 'Will this help with my school computing subject?', a: 'It applies the same ideas, such as testing, tracing and object-oriented design, to real projects. We do not complete assessed work or major projects for students.' },
      { q: 'Can I get a job in games after this course?', a: 'We do not promise jobs. You will finish with games you built and can explain, which is a sound starting portfolio for further study or applications.' },
      { q: 'What computer do I need?', a: 'Python and Godot run well on most laptops from the last several years. Unity and Unreal need more memory and graphics power, so we check your machine before recommending them.' },
      { q: 'What does the course cost?', a: 'The first class is free with no card. Monthly fees for group and one-to-one lessons appear in the fees section of this page, with no enrolment charge.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Other routes into making games, and our other Australian pages.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every Australian guide we publish, in one list.' },
      { href: '/game-development-for-kids-australia', label: 'Game development for kids', p: 'The younger route, from a first Scratch game.' },
      { href: '/coding-games-for-kids-australia', label: 'Coding games for kids', p: 'Puzzle games that teach programming ideas.' },
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering help', p: 'For NSW Year 11 and 12 students.' },
      { href: '/c-plus-plus-game-development', label: 'C++ game development', p: 'The language under many big engines, for teens and adults.' },
      { href: '/coding-roadmap', label: 'The coding roadmap', p: 'Where game programming fits among other paths.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Leave your details and we will call at a time that suits you. In the free class you write a little game code with a teacher, and you get a straight answer about where to start.',
    readFirst: 'Curious about the teaching itself? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a lesson from start to finish, and the <a class="ag-inline-link" href="/courses">course list</a> covers every age and subject.',
    note: 'From an Australian mobile, WhatsApp is usually the fastest way to reach us. Our team is in India, hence the +91 number, and we do not have an Australian office.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Making games', links: [
        { href: '/game-development-for-kids-australia', label: 'Game development for kids' },
        { href: '/c-plus-plus-game-development', label: 'C++ game development' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering' },
        { href: '/coding-classes-cost-australia', label: 'What coding classes cost' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'Same code, same second, same answer on every machine'
  },

  personalityCss: `
.ag-root.ag-gpau .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-gpau .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-gpau .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-gpau .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-gpau .ag-band-head h3 { letter-spacing: -0.01em; }
.ag-root.ag-gpau .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, Years 7 to 10. ACARA, Australian Curriculum v9, Technologies: Digital Technologies curriculum content 7-10 (Word download): AC9TDI8P06 "trace algorithms to predict output for a given input and to identify errors"; AC9TDI10P06 "validate algorithms and programs by comparing their output against a range of test cases".',
    localProject: 'Fixed timestep: one second of free fall under 9.8 m/s per second stepped once per frame with semi-implicit Euler lands 5.0633 m at 30 fps, 4.9817 m at 60 fps and 4.9340 m at 144 fps against an exact 4.9 m; a fixed 1/60 s step with an accumulator gives 60 physics steps per second at every display rate (at 144 fps, 84 frames take no step and 60 take one; at 30 fps every frame takes two). All our runs. Lesson family: fixed timestep and the accumulator.',
    requiredMentions: ['AC9TDI8P06', 'AC9TDI10P06', 'fixed timestep', 'accumulator', '5.0633 m', '4.9817 m', 'Physics processing happens at a fixed rate, 60 times per second by default.', 'Fix Your Timestep!', 'Time.fixedDeltaTime'],
    sources: [
      { claim: 'Godot Engine documentation, Idle and Physics Processing: "Physics processing happens at a fixed rate, 60 times per second by default."; "you should always multiply a speed value by delta to animate a moving object."', url: 'https://docs.godotengine.org/en/stable/tutorials/scripting/idle_and_physics_processing.html' },
      { claim: 'Unity Scripting API, Time.fixedDeltaTime: "The interval in seconds of in-game time at which physics and other fixed frame rate updates (like MonoBehaviour\'s MonoBehaviour.FixedUpdate) are performed."', url: 'https://docs.unity3d.com/ScriptReference/Time-fixedDeltaTime.html' },
      { claim: 'Glenn Fiedler, "Fix Your Timestep!", Gaffer On Games, 10 June 2004: the accumulator pattern for fixed physics steps.', url: 'https://gafferongames.com/post/fix_your_timestep/' },
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content 7-10: AC9TDI8P06 and AC9TDI10P06.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' }
    ],
    rejectedClaims: [
      'Australian games industry size, revenue or job numbers: no primary source read raw, so none quoted.',
      'Unity\'s default fixedDeltaTime value: the documentation page did not state it in the text read raw, so no number is given.',
      'Claims that the course leads to employment: refused; the page says we do not promise jobs.',
      'Engine licence prices and revenue thresholds: these change; not quoted.',
      'Promised evening lesson hours: the hour is agreed in the free class (spec decision 7).'
    ]
  }
};
