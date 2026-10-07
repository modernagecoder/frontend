'use strict';
// Coding games for kids, Australia (ag- topic door; AU cluster Phase 2, row 10).
// Demand: our Search Console, Australia, 16 months: "coding games for kids" 372 impressions at position 40.1,
// "programming games for kids" 392 at 34.5 (absorbed here), "coding games" 30 at 39.4.
// Intent: games and apps that TEACH coding (play to learn), how a parent can judge one, and the step from
// playing them to writing real programs. Making games is a different intent, served by
// /game-development-for-kids-australia, which this page links instead of repeating.
// Sources, read raw on 7 October 2026:
//  - Blockly Games, About page (blockly.games/about): "a series of educational games that teach programming",
//    level descriptions for Puzzle, Maze, Bird, Turtle, Movie, Music, Pond Tutor and Pond.
//  - CS Unplugged home page (csunplugged.org/en/): "a collection of free teaching material that teaches Computer
//    Science through engaging games and puzzles that use cards, string, crayons and lots of running around".
//  - ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6 (Word download):
//    AC9TDI2P02, AC9TDI4P02, AC9TDI6P02.
//  - Digital Technologies Hub footer: "Digital Technologies Hub is brought to you by the Australian Government
//    Department of Education."
// Lesson family: instruction count. The same robot path written out in full, then with a loop, then with a loop
// inside a loop: 19 blocks, 6 blocks, 4 blocks (our count), and the extra turn the looped version makes.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'CODING GAMES, KIDS', blurb: 'Coding games for Australian kids: which puzzle games really teach programming, how to judge one, and when to move from playing to writing code.' },
  slug: 'coding-games-for-kids-australia',
  code: 'cgau',
  accent: '#366396',
  accentRationale: 'Coding games for kids, Australia: a harbour blue chosen by hand, muted, at least 13 RGB units from every accent in use and clear of the cyan and violet bands',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Coding games for kids, Australia',
  title: 'Coding Games for Kids in Australia | Play, Then Program',
  description: 'Coding games for kids in Australia: which puzzle games teach real programming, how to judge one, and when a child is ready to write code. First class free.',
  ogDescription: 'Puzzle games that teach loops, conditions and functions: how Australian parents can tell a real coding game from a tapping game, and what comes after the last level.',
  twitterDescription: 'Coding games for Australian kids: how to choose one that teaches real programming, and how to move from playing to writing code. First class free.',
  pageName: 'Coding Games for Kids in Australia',
  webPageDescription: 'A parent guide to coding games for Australian children: what they teach, how to judge them against the Digital Technologies curriculum, and the step from playing to programming.',
  courseDescription: 'Live online coding lessons for Australian kids who have outgrown coding games: Scratch, problem solving and Python, taught in small groups or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Coding games for kids',
  navLinks: [
    { href: '#what-they-teach', label: 'What they teach' },
    { href: '#judge', label: 'How to judge one' },
    { href: '#count', label: 'A worked example' },
    { href: '#after', label: 'After the last level' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 6 to 14 &middot; Play to learn',
  h1: 'Coding games for kids',
  lede: 'A good coding game is a puzzle where the only way to win is to give a computer exact instructions. Children who would never sit through a lecture on loops will happily spend an afternoon trying to get a robot through a maze in fewer moves. The trouble is that the app stores are full of games that only look like coding: you tap, something moves, a star appears, and nothing is learned. This page is for Australian parents who want to tell the two apart. It explains what the strongest coding games actually teach, how to check one against what your child meets at school, one idea worked through in full, and what to do on the day your child finishes the last level and asks for something harder.',
  secondaryCta: { href: '#judge', label: 'How to judge a coding game' },
  wa: 'Hello Modern Age Coders, my child in Australia loves coding games and wants to start real coding. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; from puzzle levels to programs your child writes alone',
  spec: [
    ['For', 'Children aged 6 to 14'],
    ['Good for', 'Sequence, loops, conditions, functions'],
    ['Free options', 'Blockly Games, CS Unplugged'],
    ['Limit', 'Puzzles end; programming does not'],
    ['Next step', 'Scratch, then Python'],
    ['Format', 'Live online lessons'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding games for kids are puzzle games in which a child wins by writing instructions for a character, using the same ideas as real programming: sequence, loops, conditions and functions. The useful ones make the child plan the whole solution before pressing run, and reward shorter programs, not faster tapping. Free examples include Blockly Games and the offline activities of CS Unplugged. When a child can finish the levels without hints, the next step is to write programs of their own in Scratch and then Python.',

  picks: {
    eyebrow: 'Beyond the last level',
    h2: 'Three courses for children who have outgrown coding games',
    lede: 'Each one starts where the puzzles stop: a blank project and an idea of the child\'s own.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'CGAU / 01', title: 'Scratch Coding for Kids', note: 'Ages 6 to 12. The blocks a coding game uses, but with no fixed answer: animations, stories and games of their own.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'CGAU / 02', title: 'Problem Solving for Kids', note: 'For the child who loved the puzzle part most: patterns, logic and breaking big problems into small ones.' },
      { course: 'python-ai-kids-masterclass', code: 'CGAU / 03', title: 'Python and AI for Kids', note: 'Ages 9 to 12. Typed code at last, with turtle drawings, small games and gentle AI projects.' }
    ]
  },

  sections: [
    {
      id: 'what-they-teach', tint: 'tint', eyebrow: 'What they teach',
      h2: 'The four ideas every good coding game is built on',
      lede: 'Strip away the characters and the music, and the serious coding games all train the same small set of ideas, in roughly the same order.',
      body: [
        { kind: 'table', caption: 'Ideas in coding games and how a child meets them', head: ['Idea', 'What the child does in the game', 'What it is called in programming'], rows: [
          ['Sequence', 'Lines up moves so the robot reaches the goal', 'Statements run in order, top to bottom'],
          ['Repetition', 'Uses a "repeat 4 times" block instead of four identical moves', 'A loop'],
          ['Decisions', 'Tells the character to turn only when there is a wall ahead', 'A condition, or if statement'],
          ['Naming a routine', 'Packs a useful pattern into one new block and reuses it', 'A function or procedure'],
          ['Fixing', 'Watches the robot fail, finds the wrong step and changes it', 'Debugging']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why a game works for this',
          left: [
            'A puzzle gives instant, honest feedback. The robot either reaches the flag or walks into the wall, and no amount of hoping changes the result. That is exactly how a computer treats a real program.',
            'Games also make failure cheap. Children who would be embarrassed by a red cross on a worksheet will press run twenty times in a row when the only cost is watching a cartoon fall over.'
          ],
          rightH3: 'Where games stop teaching',
          right: [
            'Every puzzle has an answer the designer already knows. Real programming starts when there is no answer to find, only a problem to solve, and nobody has set a limit on how many blocks you may use.',
            'Games also choose the problem for the child. Choosing your own problem, and deciding when your solution is good enough, is the part of coding that no puzzle can teach.'
          ] },
        { kind: 'source', html: 'Blockly Games describes itself as "a series of educational games that teach programming", designed "for children who have not had prior experience with computer programming". Its Maze game is listed as "an introduction to loops and conditionals" and its Music game as "an introduction to functions". Source: <a class="ag-inline-link" href="https://blockly.games/about?lang=en" rel="noopener" target="_blank">Blockly Games, About</a>, read 7 October 2026.' }
      ]
    },
    {
      id: 'judge', tint: 'deep', eyebrow: 'How to judge one',
      h2: 'Six questions that separate a coding game from a tapping game',
      lede: 'You do not need to know how to code to judge a coding game. Watch your child play one level, then ask these questions.',
      body: [
        { kind: 'table', caption: 'A parent\'s checklist for any coding game or app', head: ['Question', 'A good sign', 'A warning sign'], rows: [
          ['Does my child plan before pressing run?', 'They build the whole solution, then test it', 'Each tap moves the character straight away'],
          ['Can a wrong answer happen?', 'The program fails and must be fixed', 'Every tap is accepted and rewarded'],
          ['Are shorter solutions rewarded?', 'Fewer blocks earns more, or a limit forces a loop', 'Any solution scores the same'],
          ['Do new ideas appear?', 'Loops, then conditions, then functions', 'Fifty levels of the same move'],
          ['Can the child explain it?', 'They can say why the loop runs four times', 'They cannot say what any block does'],
          ['Does it point beyond itself?', 'It shows the code behind the blocks, or a text mode', 'It ends with a request to buy more levels']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Three good free starting points',
          left: [
            '<strong>Blockly Games</strong> moves from Puzzle and Maze to Turtle, Music and Pond Tutor, where "levels switch back and forth between blocks and actual JavaScript in a text editor". That last step is rare and valuable.',
            '<strong>CS Unplugged</strong> needs no screen at all. Its activities teach computer science ideas with cards, string and crayons, which suits younger children and screen-free weekends.',
            '<strong>Scratch</strong> is not a game, but its tutorials feel like one, and it is the natural next stop once the puzzles run out.'
          ],
          rightH3: 'What to be careful of',
          right: [
            'Some apps charge for the levels that introduce loops and conditions, the very ideas worth learning. Play the free levels first and check what comes after.',
            'Some games bury the coding under rewards, coins and daily streaks. Rewards are fine, but if your child is chasing the streak and not the solution, the game is teaching the wrong habit.',
            'Coding games are not a substitute for writing programs. Treat them as a warm-up, a few weeks to a few months, not a destination.'
          ] },
        { kind: 'source', html: 'CS Unplugged describes itself as "a collection of free teaching material that teaches Computer Science through engaging games and puzzles that use cards, string, crayons and lots of running around". Source: <a class="ag-inline-link" href="https://www.csunplugged.org/en/" rel="noopener" target="_blank">CS Unplugged</a>, read 7 October 2026. We are not affiliated with either project and receive nothing for mentioning them.' }
      ]
    },
    {
      id: 'count', tint: 'tint', eyebrow: 'A worked example',
      h2: 'Counting the blocks: why loops matter',
      lede: 'Here is one idea from a maze game worked through in full. It is the moment most children first see why programmers care about loops, and it fits on the back of an envelope.',
      body: [
        { kind: 'p', html: 'A robot must walk around a square garden bed, four steps along each side, turning right at each corner. Each block is one instruction: <em>forward</em> moves one step and <em>right</em> turns ninety degrees. A child who has just started will write every move out in full. We call the number of blocks used the <strong>instruction count</strong>, and many coding games score a level by it.' },
        { kind: 'table', caption: 'The same square walk written three ways (block counts are our own)', head: ['Version', 'Program', 'Blocks used'], rows: [
          ['Written out in full', 'forward, forward, forward, forward, right, then the same for three more sides, with no turn after the last side', '19'],
          ['One loop', 'repeat 4 times: forward, forward, forward, forward, right', '6'],
          ['A loop inside a loop', 'repeat 4 times: (repeat 4 times: forward), right', '4']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Where 19 comes from', p: 'Four sides of four steps is 16 forward blocks. Between the sides there are three turns. Sixteen plus three is 19.' },
          { h3: 'Where 6 comes from', p: 'One repeat block, four forward blocks and one right block. The loop does the counting, so the program shrinks by more than two thirds.' },
          { h3: 'Where 4 comes from', p: 'The four forward blocks are themselves a repeat. One outer repeat, one inner repeat, one forward and one right: four blocks for nineteen moves.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The catch a sharp child spots',
          left: [
            'The looped versions are not quite the same program. Written out in full, the robot turns three times and finishes facing left of where it started. The loop turns four times, so the robot ends facing the way it began.',
            'In a maze that difference can matter: if the next instruction is "forward", the two robots now walk off in different directions. Noticing that a shorter program can quietly do something different is the beginning of real debugging.'
          ],
          rightH3: 'What children learn from it',
          right: [
            'That a loop is not just a shortcut for typing; it is a statement that a pattern repeats. If the garden bed had eight sides, the full version would need many more blocks, and the looped version would need only a different number in the repeat.',
            'Older children go one step further and turn the square into a named block, a function, so "draw a square" becomes a single instruction they can use anywhere.'
          ] }
      ]
    },
    {
      id: 'curriculum', tint: 'deep', eyebrow: 'At school',
      h2: 'How coding games match the Digital Technologies curriculum',
      lede: 'The Australian Curriculum v9, published by ACARA, asks primary students to follow, describe and then design algorithms. Coding games give children far more practice at exactly this than a few school lessons can.',
      body: [
        { kind: 'table', caption: 'What primary students are asked to do with algorithms, by band', head: ['Band', 'Code', 'Content description, as published'], rows: [
          ['Years 1 and 2', 'AC9TDI2P02', '"follow and describe algorithms involving a sequence of steps, branching (decisions) and iteration (repetition)"'],
          ['Years 3 and 4', 'AC9TDI4P02', '"follow and describe algorithms involving sequencing, comparison operators (branching) and iteration"'],
          ['Years 5 and 6', 'AC9TDI6P02', '"design algorithms involving multiple alternatives (branching) and iteration"']
        ] },
        { kind: 'p', mt: true, html: 'Notice the verbs. In Years 1 to 4 students <em>follow and describe</em> algorithms, which is what a coding game asks for. By Years 5 and 6 they must <em>design</em> them, with no answer waiting at the end of the level. That shift is the same one a child makes when they move from coding games to writing their own programs, and it is the point at which live teaching helps most.' },
        { kind: 'p', html: 'For teachers and curious parents, the <a class="ag-inline-link" href="https://www.digitaltechnologieshub.edu.au/" rel="noopener" target="_blank">Digital Technologies Hub</a>, which "is brought to you by the Australian Government Department of Education", collects lesson ideas mapped to these content descriptions.' },
        { kind: 'source', html: 'Content descriptions copied on 7 October 2026 from the ACARA Version 9.0 Digital Technologies <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">curriculum content F-6</a> document for Foundation to Year 6, a Word file. Each state and territory teaches the curriculum its own way.' }
      ]
    },
    {
      id: 'after', tint: '', eyebrow: 'After the last level',
      h2: 'When your child finishes the coding games',
      lede: 'Sooner or later the levels run out, or start to feel the same. Here is how to tell that day has come, and what to do next.',
      body: [
        { kind: 'table', caption: 'Signs a child is ready to move on, and the next step', head: ['What you notice', 'What it means', 'A good next step'], rows: [
          ['They finish new levels without hints', 'The puzzles no longer stretch them', 'Scratch, starting from a blank project'],
          ['They invent their own extra rules', 'They want to set problems, not just solve them', 'Make a game of their own in Scratch'],
          ['They ask what the code behind the blocks says', 'They are curious about text', 'A first Python lesson, with turtle drawing'],
          ['They get bored and switch apps', 'The game has nothing new to teach', 'A short break, then a project with a real goal']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Making, not just playing',
          left: [
            'For many children the obvious next step is to build the kind of game they used to play. Our page on <a class="ag-inline-link" href="/game-development-for-kids-australia">game development for kids in Australia</a> sets out that path from a first Scratch game to Python and a real engine.',
            'Children who loved the design side, the levels and the difficulty more than the code, will enjoy <a class="ag-inline-link" href="/video-game-design-for-kids-australia">video game design for kids</a>.'
          ],
          rightH3: 'Coding inside games they already play',
          right: [
            'Children who spend their weekends in Roblox or Minecraft can learn to program inside those worlds. See <a class="ag-inline-link" href="/roblox-coding-classes-australia">Roblox coding classes</a> and <a class="ag-inline-link" href="/minecraft-coding-classes-australia">Minecraft coding classes</a> for Australian families.',
            'Whichever way your child goes, the free first class is where we find out how far the games took them, with your child at the keyboard.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From coding games to writing programs',
    lede: 'Most children move through these stages over a school year or two. Coding games cover the first two well; the last two need a blank page and a teacher.',
    table: { caption: 'Four stages, from puzzle player to programmer', head: ['Stage', 'What your child can do'], rows: [
      ['1. Solve', 'Finish puzzle levels by putting given blocks in the right order'],
      ['2. Shorten', 'Replace repeated moves with loops and explain why the shorter program works'],
      ['3. Create', 'Start from an empty Scratch project and make something that was not set as a task'],
      ['4. Write', 'Type the same ideas in Python and fix their own errors from the messages they see']
    ] },
    left: { h3: 'Is screen time on coding games well spent?', ps: [
      'It can be, if the game makes your child think before acting. Twenty focused minutes on a puzzle that forces planning is worth more than an hour of tapping.',
      'Screen-free activities from CS Unplugged teach the same ideas with cards and string, and make a good balance on weekends.'
    ] },
    right: { h3: 'How long should my child play first?', ps: [
      'There is no rule. Some children are ready to write their own programs after a fortnight of puzzles; others enjoy the games for a whole term.',
      'Watch for the signs in the table above. When the games stop stretching your child, it is time to move on.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses for children ready to code for real',
    lede: 'Arranged by what your child can already do. Which band fits gets decided in the free class, not from this list.',
    bands: [
      { num: 'I', h3: 'First programs', sub: 'Ages 6 to 10', courses: [
        { code: 'CGAU / FST / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'From a first block to animations and games.' },
        { code: 'CGAU / FST / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Blocks first, then a first taste of Python.' },
        { code: 'CGAU / FST / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem Solving for Kids', blurb: 'Patterns, logic and breaking problems down.' }
      ] },
      { num: 'II', h3: 'Games and worlds', sub: 'Ages 8 to 12', courses: [
        { code: 'CGAU / GMW / 01', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'Scratch games, then Roblox and Minecraft worlds.' },
        { code: 'CGAU / GMW / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Game Coding for Kids', blurb: 'Scripting real Roblox experiences in Luau.' },
        { code: 'CGAU / GMW / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding for Kids', blurb: 'MakeCode blocks, then JavaScript, inside Minecraft.' }
      ] },
      { num: 'III', h3: 'Typed code', sub: 'Ages 9 to 14', courses: [
        { code: 'CGAU / TXT / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Turtle drawings, small games and AI projects.' },
        { code: 'CGAU / TXT / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe Coding for Kids', blurb: 'Building with AI help, while understanding every step.' },
        { code: 'CGAU / TXT / 03', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How AI works, for ages 8 to 14, without the hype.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons after school, Australian time',
    lede: 'Our teachers work from India. In the southern summer, Sydney and Melbourne clocks run five and a half hours ahead of India time, Brisbane four and a half and Perth two and a half, so an Australian afternoon lesson falls in the Indian working day.',
    slots: [
      { time: 'Weekday, after school', l: 'The usual choice for primary children.' },
      { time: 'Saturday morning', l: 'A calm slot before sport.' },
      { time: 'Sunday', l: 'For busy weekday families.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'No card needed. It shows us what the coding games taught and what they missed.' },
      { h3: 'Groups of five to ten', p: 'Children at a similar stage, solving and comparing each other\'s programs.' },
      { h3: 'One to one', p: 'For a child racing ahead, or one who needs more time and quiet.' },
      { h3: 'No answer keys', p: 'Teachers ask questions instead of giving solutions, so the thinking stays with the child.' },
      { h3: 'Parents welcome', p: 'You can sit in on any lesson and see exactly what was learned.' },
      { h3: 'Work kept', p: 'Every program your child writes stays with them to show and build on.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Finished work from real students, published and still online. Browse the rest in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Word for word from our Google listing, with nothing trimmed or tidied.',

  fees: {
    h2: 'Fees once the coding games are finished',
    lede: 'Families outside India pay one monthly price in US dollars. There is no enrolment fee and no term contract, so you can stop after any month, including over the summer holidays.',
    free: ['A short coding challenge at your child\'s level', 'Honest advice on whether they are ready to move on', 'No card or bank details'],
    group: ['Five to ten children per class', 'The same teacher each week', 'Classmates to compare solutions with', 'Stop after any month'],
    one: ['All of the teacher\'s attention', 'Pace set by your child', 'Times arranged around school and sport']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'What Australian parents ask about coding games',
    items: [
      { q: 'What are coding games for kids?', a: 'They are puzzle games in which a child wins by giving a character exact instructions, using the same ideas as programming: sequence, loops, conditions and functions. The best ones make the child plan the whole solution before running it.' },
      { q: 'What is an instruction count?', a: 'It is the number of blocks or commands a program uses. Many coding games score a level by it, which rewards children for spotting repeated patterns and replacing them with loops.' },
      { q: 'Are coding games enough to learn coding?', a: 'They are a good start but not enough on their own. Puzzles always have an answer the designer already knows; real programming means solving problems nobody has set, which needs a blank project and usually some teaching.' },
      { q: 'What age are coding games suitable for?', a: 'Simple sequence puzzles suit children from about five or six who can follow arrows and pictures. Games with loops, conditions and functions suit children from about seven to twelve.' },
      { q: 'Which free coding games are worth trying?', a: 'Blockly Games is free and open source and ends with levels that switch between blocks and JavaScript. CS Unplugged offers free activities that teach the same ideas without a screen.' },
      { q: 'Do coding games match what my child learns at school?', a: 'Closely, in primary school. The Australian Curriculum v9 asks Years 1 to 4 to follow and describe algorithms with sequence, branching and iteration, which is what coding games practise.' },
      { q: 'My child finished every level. What next?', a: 'Start writing programs from a blank page, usually in Scratch, then move to Python. The free first class shows which of the two suits your child now.' },
      { q: 'Are paid coding apps better than free ones?', a: 'Not necessarily. Judge any app by whether it makes your child plan, fail and fix, and whether new ideas keep appearing. Some paid apps simply sell more levels of the same move.' },
      { q: 'Do your lessons use coding games?', a: 'Sometimes as a warm-up for younger children, but lessons are about writing programs, explaining them and fixing them. The puzzle is the starting point, not the course.' },
      { q: 'What does it cost?', a: 'The first class is free and needs no card. Monthly group and one-to-one fees are shown in the fees section above, with no enrolment charge and no contract.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'For Australian families choosing what comes after the puzzles.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'States, cities, exams and topics for Australian families.' },
      { href: '/game-development-for-kids-australia', label: 'Game development for kids', p: 'From playing games to making them.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Online coding classes for kids', p: 'How live online lessons work for Australian children.' },
      { href: '/blog/top-coding-games-platforms-make-learning-fun-kids', label: 'Coding games and platforms', p: 'A wider list of places to practise.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes', p: 'The first stage after coding games.' },
      { href: '/best-age-to-start-coding', label: 'When should a child start coding?', p: 'Readiness signs, not birthdays.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send your details and we will ring at a time that suits you. In the free class your child solves a short challenge with a teacher, and afterwards you hear plainly which course fits and why.',
    readFirst: 'Want more detail before you talk to anyone? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows what happens inside a lesson, and <a class="ag-inline-link" href="/courses">every course we run</a> is listed by age.',
    note: 'WhatsApp from an Australian phone is often the quickest way to reach us. The +91 at the start of our number is India, where our teachers are; there is no Australian office.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Learning to code', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/best-age-to-start-coding', label: 'When to start' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/game-development-for-kids-australia', label: 'Game development for kids' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for kids' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'Puzzles have answers; programs have problems'
  },

  personalityCss: `
.ag-root.ag-cgau .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-cgau .ag-capsule { border-left-width: 6px; }
.ag-root.ag-cgau .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cgau .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cgau .ag-band-head h3 { letter-spacing: 0.005em; }
.ag-root.ag-cgau .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, Foundation to Year 6. ACARA, Australian Curriculum v9, Technologies: Digital Technologies curriculum content F-6 (Word download): AC9TDI2P02 "follow and describe algorithms involving a sequence of steps, branching (decisions) and iteration (repetition)"; AC9TDI4P02 "follow and describe algorithms involving sequencing, comparison operators (branching) and iteration"; AC9TDI6P02 "design algorithms involving multiple alternatives (branching) and iteration".',
    localProject: 'Instruction count on a robot square walk, four steps per side with right turns: written in full 19 blocks (16 forward plus 3 turns), one loop 6 blocks, a loop inside a loop 4 blocks (our count); the looped versions turn four times instead of three, so the robot ends facing its starting direction. Lesson family: instruction count, unrolled versus looped versus nested-loop programs.',
    requiredMentions: ['repeat 4 times: (repeat 4 times: forward), right', 'AC9TDI4P02', 'AC9TDI6P02', 'instruction count', 'a series of educational games that teach programming', 'cards, string, crayons and lots of running around', 'brought to you by the Australian Government Department of Education', 'Pond Tutor'],
    sources: [
      { claim: 'Blockly Games, About: "a series of educational games that teach programming"; designed "for children who have not had prior experience with computer programming"; Maze "an introduction to loops and conditionals"; Music "an introduction to functions"; Pond Tutor levels "switch back and forth between blocks and actual JavaScript in a text editor".', url: 'https://blockly.games/about?lang=en' },
      { claim: 'CS Unplugged: "a collection of free teaching material that teaches Computer Science through engaging games and puzzles that use cards, string, crayons and lots of running around".', url: 'https://www.csunplugged.org/en/' },
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6: AC9TDI2P02, AC9TDI4P02, AC9TDI6P02.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx' },
      { claim: 'Digital Technologies Hub: "Digital Technologies Hub is brought to you by the Australian Government Department of Education."', url: 'https://www.digitaltechnologieshub.edu.au/' }
    ],
    rejectedClaims: [
      'Rankings or star ratings of named commercial coding apps: not verified at source and not our place to rank competitors, so none given.',
      'Scratch age range and user numbers: Scratch pages render by script and were not read raw, so not quoted.',
      'Screen-time recommendations from health bodies: health content is excluded from these pages.',
      'Any claim that coding games raise school results: no primary evidence read; not made.',
      'Promised lesson hours in Australian evenings: the hour is agreed in the free class (spec decision 7).'
    ]
  }
};
