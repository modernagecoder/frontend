'use strict';
// Game coding classes for kids in Germany (ag- English door, Germany cluster row DE035, rows.tsv P2).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live in English only, matching the learner's pace and accent; pages show euro,
// checkout charges USD.
// Spine: children of about 7 to 12 who want to make games rather than only play them. What they build at each age
// (Scratch, Roblox, Minecraft, Godot), how German age labels work under the Jugendschutzgesetz and the USK (and why a
// child's own game sits outside them), and an original project on the "roll a six to leave home" rule of a classic
// German board game, simulated 10,000 times and checked against exact probability.
// Sources (read raw, fetched 3 November 2026; copies in
// ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/game-coding-classes-for-kids-germany/):
//  - JuSchG para 14 (gesetze-im-internet.de/juschg/__14.html), (2): labels "Freigegeben ohne Altersbeschränkung",
//    "Freigegeben ab sechs Jahren", "Freigegeben ab zwölf Jahren", "Freigegeben ab sechzehn Jahren", "Keine
//    Jugendfreigabe"; (2a): labels also carry "Symbolen und weiteren Mitteln" giving "die wesentlichen Gründe für die
//    Altersfreigabe".
//  - usk.de, Wer ist und was macht die USK?: "Die Unterhaltungssoftware Selbstkontrolle (USK) ist eine freiwillige
//    Einrichtung der Games-Branche."; responsible for "die Prüfung zur Alterseinstufung von digitalen Spielen in
//    Deutschland"; "Darüber hinaus vergibt die USK Alterskennzeichen innerhalb des internationalen IARC-Systems für
//    Online-Spiele und Apps."
//  - usk.de, Welche Alterskennzeichen gibt es?: the no-restriction label "gibt jedoch keine Information darüber, ob das
//    Spiel für Vorschulkinder geeignet oder pädagogisch wertvoll ist"; ab 6 games "bereits spannender und
//    wettkampfbetonter"; examples "rasante Rennspiele, Aufbau-Strategiespiele, sowie Abenteuer- und Rollenspiele".
//  - usk.de, Statistiken: "2025 vergab die USK Alterskennzeichen für insgesamt 1.675 Prüftitel im klassischen Verfahren
//    und rund 1,3 Millionen Spiele im Online-Bereich."; 2023: "Höhere Alterskennzeichen für In-Game-Käufe, Lootboxen und Co."
//  - FACTS.md (fetched 2 November 2026): Informatik-Monitor 2026/27, Bayern Mittelschule grades 5 to 10 (69),
//    Mecklenburg-Vorpommern grades 5 to 10 (78), Saarland grades 7 and 8 two hours (84). Biber grades 3 to 13 (130).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
// Our own calculations (scratchpad de/w/G3/gck/v1.py, v2.py, v13.py, python3 -I, Python 3.14.8): seed 2026, 10,000 games:
// "One try a turn: 6.12 turns on average", "Three tries a turn: 2.36 turns on average"; exact: "1 tries: 0.1667 chance per
// turn, 6.0 turns expected", "3 tries: 0.4213 chance per turn, 2.37 turns expected"; seed 7: "Out in the first turn:
// 4285", "Longest wait: 18 turns". Example slots: 17:15 = 21:45 / 20:45; Saturday 14:00 = 18:30 / 17:30.
// Lesson family: simulate with random numbers, then check the simulation against exact maths.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import random',
  '',
  'random.seed(2026)',
  '',
  'def turns_to_leave_home(tries_per_turn):',
  '    turns = 0',
  '    while True:',
  '        turns += 1',
  '        for _ in range(tries_per_turn):',
  '            if random.randint(1, 6) == 6:',
  '                return turns',
  '',
  'games = 10000',
  'for tries, label in [(1, "One try a turn:"), (3, "Three tries a turn:")]:',
  '    total = 0',
  '    for _ in range(games):',
  '        total += turns_to_leave_home(tries)',
  '    print(label, round(total / games, 2), "turns on average")'
].join('\n');

const V2 = [
  'miss = 5 / 6',
  'for tries in [1, 3]:',
  '    six_this_turn = 1 - miss ** tries',
  '    print(tries, "tries:", round(six_this_turn, 4), "chance per turn,", round(1 / six_this_turn, 2), "turns expected")'
].join('\n');

const V3 = [
  'random.seed(7)',
  'waits = [turns_to_leave_home(3) for _ in range(games)]',
  'print("Out in the first turn:", waits.count(1))',
  'print("Longest wait:", max(waits), "turns")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Game coding classes for kids' },
  slug: 'game-coding-classes-for-kids-germany',
  code: 'gck',
  accent: '#754349',
  accentRationale: 'Game coding classes for kids in Germany: a dusky rosewood #754349, the colour of a well-played wooden board game, clear of the kids page oxblood and the Berlin brick; contrast 6.42 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Game coding classes for kids in Germany',
  title: 'Game Coding Classes for Kids in Germany, Live in English',
  description: 'Game coding classes for kids in Germany aged 7 to 12, live online in English: Scratch, Roblox, Minecraft and Godot, German USK age labels, and a dice game project.',
  ogDescription: 'Children in Germany who want to make games, not only play them: what they can build at each age, how the USK and the Jugendschutzgesetz label games, and a project that simulates the "roll a six to start" rule 10,000 times.',
  twitterDescription: 'Game coding for children in Germany, live in English, with a dice project checked against real probability.',
  pageName: 'Game Coding Classes for Kids in Germany',
  webPageDescription: 'A guide for parents in Germany of children aged about 7 to 12 who want to make games: tools by age, German age labels from the Jugendschutzgesetz and the USK, and an original Python and Scratch project on a classic board-game rule.',
  courseDescription: 'Live online game coding classes in English for children in Germany aged about 7 to 12: Scratch games, Roblox scripting in Luau, Minecraft coding and Godot, in a group of fifteen to twenty or one to one, with one mentor throughout.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Game coding for kids',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#build', label: 'Games' },
    { href: '#usk', label: 'Ages' },
    { href: '#dice', label: 'Project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Making games &middot; Ages 7 to 12',
  h1: 'Game coding classes for kids in Germany',
  lede: 'Plenty of children in Germany play games every day; far fewer have made one. Making a game turns a child from player into designer: they decide the rules, test them, and find out why their first version is too easy or impossible. This page shows what children can build at each age, explains how German age labels work and why your child\'s own game sits outside them, and works through a project on the most nerve-racking rule in German board games: you need a six to get out.',
  secondaryCta: { href: '#dice', label: 'See the dice project' },
  wa: 'Hello Modern Age Coders, our child in Germany would love to learn to make games, in English. Can we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; children design the rules, then code them',
  spec: [
    ['Ages', 'About 7 to 12'],
    ['Tools', 'Scratch, Roblox, Minecraft, Godot'],
    ['Builds', 'Their own games, start to finish'],
    ['Themes', 'Child-friendly, no violence'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'Game coding classes for kids in Germany at Modern Age Coders are live online lessons in English for children of about 7 to 12 who want to make their own games. Our Game Development for Kids course starts with Scratch, then moves to Roblox scripting and Minecraft coding, with Godot for older children. A mentor stays with your child, adjusting to their pace and accent, in a group of fifteen to twenty or one to one, after school or at weekends.',

  picks: {
    eyebrow: 'Game courses',
    h2: 'Three game coding courses for children in Germany',
    lede: 'One course that covers three game worlds, one focused on Roblox, and one for older children ready for a real game engine.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'GCK / 01', title: 'Game Development for Kids', note: 'About 8 to 12. Scratch games first, then Roblox and Minecraft projects, all with the same mentor.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'GCK / 02', title: 'Roblox game coding in Luau', note: 'About 8 to 14. Real scripts for obbies, tycoons and simulators, typed in Luau, the language Roblox uses.' },
      { course: 'godot-game-development-course-for-kids-and-teens', code: 'GCK / 03', title: 'Godot, a real engine', note: 'For older children and young teens. 2D and 3D games in a free, open-source engine with its own Python-like language.' }
    ]
  },

  sections: [
    {
      id: 'build',
      eyebrow: 'What children build',
      h2: 'What kind of games can a child make, and at what age?',
      lede: 'Younger children build small games in blocks; older ones type real scripts. In every case the child designs the rules first, which is where most of the learning happens.',
      body: [
        { kind: 'table', numCols: [], caption: 'Game projects by age in our courses (ours)', head: ['Age', 'Tool', 'A typical first game', 'The idea it teaches'], rows: [
          ['7 to 8', 'Scratch', 'Catch the falling apples', 'Events, movement, a score'],
          ['8 to 9', 'Scratch', 'A maze with a timer and two levels', 'Variables, conditions, levels'],
          ['8 to 10', 'Minecraft', 'Code that builds a house in seconds', 'Loops and coordinates'],
          ['9 to 12', 'Roblox (Luau)', 'An obstacle course with checkpoints', 'Typed scripts, events, debugging'],
          ['10 to 12', 'Python', 'A dice game with fair and unfair rules', 'Random numbers and probability'],
          ['11 and up', 'Godot', 'A platformer with enemies that patrol', 'Objects, physics, game loops']
        ] },
        { kind: 'source', html: 'Our own course plan. Children move between tools when they are ready, not by age alone.' },
        { kind: 'two', mt: true,
          leftH3: 'Design before code',
          left: [
            'Every project starts on paper: what is the goal, what stops the player, how do you win or lose. Children who skip this step build games that are either impossible or over in ten seconds, and they learn that quickly.',
            'Then the game is tested, by the child, by the group and sometimes by a younger sibling, and changed. That loop of testing and fixing is the real skill.'
          ],
          rightH3: 'Making, not copying',
          right: [
            'We do not hand children finished game templates to recolour, and they do not paste code from tutorials or AI tools. Each mechanic is built and understood.',
            'The result is slower at first and much faster later, because a child who knows why their jump works can build the next one alone.'
          ] }
      ]
    },
    {
      id: 'usk',
      eyebrow: 'German age labels',
      h2: 'How do German age ratings for games work?',
      lede: 'In Germany, the age on a game box comes from the Jugendschutzgesetz, and for games the testing is organised by the USK. Here is what the labels mean, in the words of the law and the USK.',
      body: [
        { kind: 'table', numCols: [], caption: 'The five German age labels for games, under paragraph 14 of the Jugendschutzgesetz', head: ['Label in the law', 'In English', 'What the USK says about such games'], rows: [
          ['Freigegeben ohne Altersbeschränkung', 'No age restriction', 'Gives no information on whether a game is suitable for pre-school children or educationally valuable'],
          ['Freigegeben ab sechs Jahren', 'From age 6', 'Mostly family games that may be more exciting and competitive, such as fast racing, building and strategy games'],
          ['Freigegeben ab zwölf Jahren', 'From age 12', 'Often clearly more combat-focused, framed by historical, comic, futuristic or fairy-tale stories'],
          ['Freigegeben ab sechzehn Jahren', 'From age 16', 'Games aimed at older teenagers and adults'],
          ['Keine Jugendfreigabe', 'No youth release', 'For adults only']
        ] },
        { kind: 'source', html: 'Sources: Jugendschutzgesetz, paragraph 14 (2) and (2a), gesetze-im-internet.de; USK, "Welche Alterskennzeichen gibt es?" and "Wer ist und was macht die USK?", usk.de; read on 3 November 2026. The English summaries are ours.' },
        { kind: 'two', mt: true,
          leftH3: 'Who the USK is',
          left: [
            'The USK, Unterhaltungssoftware Selbstkontrolle, describes itself as "eine freiwillige Einrichtung der Games-Branche", a voluntary body of the games industry, responsible for age testing of digital games in Germany. For online games and apps it also issues labels within the international IARC system.',
            'Its own statistics for 2025 report labels for 1,675 titles in the classic procedure and around 1.3 million games online.'
          ],
          rightH3: 'What changed recently',
          right: [
            'Under paragraph 14 (2a), labels also carry symbols that give the main reasons for the age rating. The USK\'s 2023 summary headline mentions higher age labels for in-game purchases and loot boxes.',
            'For parents the useful point is that the label is about content and risks, not about whether a game is good for learning. The USK says so plainly about its lowest label.'
          ] },
        { kind: 'p', mt: true, html: 'A game your child makes in class has no USK label, because nobody sells it. That puts the responsibility on us. In our courses, game themes stay child-friendly: collecting, racing, puzzles, mazes, building and friendly rivals, never violence. When a child asks to remake a game they play that carries a higher label, the mentor helps them build its mechanics, such as a timer, a level or a shop, inside a theme suitable for their age.' }
      ]
    },
    {
      id: 'dice',
      tint: 'tint',
      eyebrow: 'A German game, as a project',
      h2: 'How long does it take to roll a six and leave home?',
      lede: 'In Mensch ärgere Dich nicht, the classic German board game, your pieces wait at home until you roll a six. Many families play that you get three tries while all your pieces are still at home. How much do those three tries really help? Our ten to twelve year olds answer with a program, and then check it with maths.',
      body: [
        { kind: 'two',
          leftH3: 'The rule',
          left: [
            'Each turn you roll one dice. With all your pieces at home you may roll up to three times; the moment a six appears, a piece comes out and your wait is over. The question is how many turns that takes on average, with one try a turn and with three.',
            'Children guess first. The usual answers are "six turns with one try, two with three", which is nearly right, and the program shows by how much.'
          ],
          rightH3: 'The method',
          right: [
            'A function plays the waiting part of the game once, rolling random numbers from 1 to 6 until a six comes up, and returns the number of turns. Then the program plays it 10,000 times and takes the average.',
            'We fix the random seed so the class gets the same numbers every run. Without it, every child\'s answer is slightly different, which is itself a lesson.'
          ] },
        { kind: 'code', label: 'Version 1: play the waiting game 10,000 times', lang: 'Python', code: V1, note: 'It prints: <code>One try a turn: 6.12 turns on average</code> and <code>Three tries a turn: 2.36 turns on average</code>.' },
        { kind: 'p', mt: true, html: 'Now the maths. On one roll the chance of missing a six is five in six. Missing three times in a row has a chance of five sixths, times five sixths, times five sixths, about 0.5787, so the chance of getting out in a turn with three tries is about 0.4213. When something happens with chance p each turn, it takes on average 1 divided by p turns. Version 2 does that arithmetic.' },
        { kind: 'code', label: 'Version 2: the exact answer', lang: 'Python', code: V2, note: 'It prints: <code>1 tries: 0.1667 chance per turn, 6.0 turns expected</code> and <code>3 tries: 0.4213 chance per turn, 2.37 turns expected</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Simulation against exact maths (our calculations)', head: ['Rule', '10,000 simulated games', 'Exact expected value'], rows: [
          ['One try a turn', '6.12 turns', '6.00 turns'],
          ['Three tries a turn', '2.36 turns', '2.37 turns']
        ] },
        { kind: 'source', html: 'All figures are ours, from Python 3.14 with random seed 2026 for the simulation. The board-game rule with three tries is a common family rule, used here as the example.' },
        { kind: 'p', mt: true, html: 'The simulation lands within a whisker of the maths, which tells the children two things: their program is probably right, and 10,000 games is enough to trust an average. Then Version 3 asks a question the average hides. Averages are calm; single games are not.' },
        { kind: 'code', label: 'Version 3: the unluckiest player', lang: 'Python', code: V3, note: 'After Version 1, it prints: <code>Out in the first turn: 4285</code> and <code>Longest wait: 18 turns</code>.' },
        { kind: 'p', mt: true, html: 'In 10,000 games with three tries, 4,285 players got out in their very first turn, close to the 4,213 the maths predicts. And one unlucky player waited 18 turns. Every family has met that player. Now the children know that nothing was wrong with the dice: across thousands of games, very long waits are simply bound to happen to someone.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 7 to 8, a real dice.</strong> Roll until you get a six, twenty times, and tally how many rolls each one took. What was your longest wait?',
          '<strong>Ages 8 to 10, Scratch.</strong> Make a dice sprite that picks a random number from 1 to 6 and counts the rolls until a six. Run it ten times and write down the answers.',
          '<strong>Ages 10 to 12, Python.</strong> Run Version 1, then write Version 2 before reading ours. Do the two agree?',
          '<strong>Going further.</strong> Invent a fairer rule, for example "a five or a six gets you out". Change one line and predict the new average before running it.'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Games and school',
      h2: 'Does making games help with Informatik at school?',
      lede: 'Yes, more than parents often expect. A game is a program with loops, conditions, variables and events, which are the topics school Informatik starts with.',
      body: [
        { kind: 'p', html: 'School Informatik arrives at different ages across Germany. The Informatik-Monitor 2026/27 shows one weekly Informatik lesson in grades 5 to 10 at a Bavarian Mittelschule, Informatik und Medienbildung in grades 5 to 10 at every school type in Mecklenburg-Vorpommern, and two hours a week in grades 7 and 8 at a Saarland Gemeinschaftsschule. A child who has built a few games arrives with the ideas already in their hands. Our <a class="ag-inline-link" href="/courses/informatik-companion-course-klasse-5-10">Informatik Companion</a> course follows the school subject itself, in English, for children who want help alongside school.' },
        { kind: 'p', html: 'Games also teach the habit that school tasks rarely leave room for: testing your own work and changing it. The dice project above has no single right answer to copy, only a program that either matches the maths or does not. That is the same thinking the free Informatik-Biber rewards, a puzzle contest for grades 3 to 13 that needs no prior knowledge.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are game coding classes in German time?',
      lede: 'After school and on weekend afternoons. The mentor teaches from India, which is ahead of Germany, so a German afternoon falls in the mentor\'s evening.',
      body: [
        { kind: 'table', numCols: [], caption: 'Two example slots for game coding, German time and the mentor\'s', head: ['Germany', 'Mentor in India, winter', 'Mentor in India, from 28 March 2027'], rows: [
          ['Weekday 17:15', '21:45', '20:45'],
          ['Saturday 14:00', '18:30', '17:30']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz makes German legal time UTC+1 in winter (MEZ) and UTC+2 in summer (MESZ). This winter began when summer time ended on 25 October 2026; summer time returns on 28 March 2027. India is UTC+5:30 all year. Examples only; no batch is fixed to these times.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From first game to game designer',
    lede: 'Our own milestones for children who make games. We use them to choose the next project and to show parents real progress.',
    table: { caption: 'Game-making milestones for children (ours)', head: ['Level', 'Usual age', 'Your child can'], rows: [
      ['1. Play rules', '7 to 8', 'Make something happen when a key is pressed, and keep a score'],
      ['2. Win and lose', '8 to 9', 'Add a timer, lives and a game-over screen'],
      ['3. Levels', '9 to 10', 'Store the level in a variable and make each one harder on purpose'],
      ['4. Scripts', '10 to 12', 'Type game logic in Luau or Python and read the error messages'],
      ['5. Balance', '11 to 12', 'Test whether a rule is fair, with a simulation, and change it']
    ] },
    left: { h3: 'For parents', ps: [
      'Level 5 is the dice project. When your child says "let us test whether that rule is fair" about a game at the kitchen table, it has worked.',
      'We report progress as games finished and explained, never as hours of screen time.'
    ] },
    right: { h3: 'For children', ps: [
      'A game nobody can win is not hard, it is broken. Test it until someone can.',
      'When luck seems unfair, count. Thousands of games will show you what is normal.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for young game makers',
    h2: 'Nine more courses for children who like games',
    lede: 'Every course runs live in English with one mentor, either in a group or privately.',
    bands: [
      { num: 'I', h3: 'Start with blocks', sub: 'Ages 6 to 12', courses: [
        { code: 'GCK / BLOCK / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Three months to a first finished Scratch game.' },
        { code: 'GCK / BLOCK / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Games, apps and first AI ideas over a full year.' },
        { code: 'GCK / BLOCK / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Scratch game projects with simple AI ideas, 8 to 12.' }
      ] },
      { num: 'II', h3: 'Worlds they know', sub: 'Ages 7 to 14', courses: [
        { code: 'GCK / WORLD / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds and changes a Minecraft world.' },
        { code: 'GCK / WORLD / 02', slug: 'block-coding-app-development-masterclass', title: 'App making with blocks', blurb: 'Simple games and apps that run on a phone.' },
        { code: 'GCK / WORLD / 03', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A web page for your own game, built by hand.' }
      ] },
      { num: 'III', h3: 'Logic and maths behind games', sub: 'Ages 8 to 15', courses: [
        { code: 'GCK / LOGIC / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python for dice games, quizzes and more.' },
        { code: 'GCK / LOGIC / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Chance, patterns and graphs in Python, 10 to 15.' },
        { code: 'GCK / LOGIC / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'The language of many game engines, for 9 to 12.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'How game coding lessons fit a week in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Late afternoon in Germany, once homework is done.' },
      { time: 'Saturday', l: 'An afternoon slot for longer building sessions.' },
      { time: 'Private', l: 'One to one at a time that suits your family.' }
    ],
    cells: [
      { h3: 'Design first', p: 'Rules on paper before any code.' },
      { h3: 'Play-test', p: 'Others try the game and say what is unfair.' },
      { h3: 'Same mentor', p: 'One person who follows each game from idea to finish.' },
      { h3: 'Kind themes', p: 'Collecting, racing, puzzles and building, never violence.' },
      { h3: 'Explain the code', p: 'Each child explains how their game works.' },
      { h3: 'Parent notes', p: 'What was built and what comes next.' }
    ]
  },

  projectsH2: 'Games and projects by our students',
  projectsLede: 'A selection of what our older students have made; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the full collection.',
  reviewsLede: 'Our families\' Google reviews, as they posted them.',

  fees: {
    h2: 'Game coding fees for families in Germany',
    lede: 'A month means eight live lessons and one monthly payment. We display that fee in euro using the European Central Bank reference rate, but the card is charged in US dollars, and your bank\'s conversion decides the exact euro figure you see afterwards.',
    free: ['A free first game lesson', 'A tiny game built together', 'No card asked for'],
    group: ['Fifteen to twenty children of a similar age', 'One mentor for the course', 'Two lessons each week', 'Paid monthly, stop any month'],
    one: ['Your child and one mentor', 'Their own game ideas, at their speed', 'Times arranged with you']
  },

  faq: {
    eyebrow: 'Parents ask',
    h2: 'Game coding classes for kids in Germany: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Classes are live and taught in English only, by mentors based in India. Game tools such as Scratch, Roblox Studio and Godot use English words anyway, and the mentor adapts to your child\'s pace and accent.' },
      { q: 'What age can my child start making games?', a: 'From about 7 in Scratch, where blocks snap together. From about 9 or 10, children can type game scripts in Luau for Roblox or in Python, and older children can move to the Godot engine.' },
      { q: 'Will my child just play games in class?', a: 'No. Children design, build and test their own games. Playing happens only as testing: trying a classmate\'s game to see whether it is fair and fun, then improving their own.' },
      { q: 'Are the games violent?', a: 'No. Themes in our classes stay child-friendly: collecting, racing, puzzles, mazes and building. If a child wants to recreate a mechanic from a game with a higher age label, the mentor helps them build it in a suitable theme.' },
      { q: 'What do German age labels on games mean?', a: 'Under paragraph 14 of the Jugendschutzgesetz, games carry one of five labels, from no age restriction through 6, 12 and 16 to no youth release. The USK organises the testing and says its labels concern content, not educational value.' },
      { q: 'Does game coding help at school?', a: 'Yes. Games use loops, conditions, variables and events, the same ideas school Informatik begins with, which in some Länder starts in grade 5 according to the Informatik-Monitor 2026/27.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A Saturday class at 14:00 in Germany is 18:30 for the mentor until 28 March 2027.' },
      { q: 'Does my child need Roblox or Minecraft accounts?', a: 'Not to start: Scratch and Python projects need no account. For Roblox and Minecraft lessons, any account is set up and managed by a parent, following each company\'s own terms.' },
      { q: 'How are fees shown and charged?', a: 'The monthly fee is shown in euro, worked out with the European Central Bank reference rate. Payment is taken in US dollars and your bank converts it, so the amount you see can differ slightly. The first class is free.' },
      { q: 'What will my child have at the end?', a: 'A set of finished games they designed themselves, and the ability to explain how each one works, from scoring to levels. Older children also learn to test whether a rule is fair, as in the dice project.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Germany whose children love games.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page, in one hub.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany', p: 'When school Informatik starts.' },
      { href: '/scratch-classes-for-kids-germany', label: 'Scratch for kids in Germany', p: 'Where most young game makers begin.' },
      { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes', p: 'Our page on Roblox scripting.' },
      { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes', p: 'Code inside a Minecraft world.' },
      { href: '/python-classes-for-kids-germany', label: 'Python for kids in Germany', p: 'Typed code for dice and more.' }
    ]
  },

  start: {
    h2: 'Book a free game coding class',
    lede: 'In the free class your child designs and builds a tiny game with the mentor, who then suggests the right tool and course for their age.',
    readFirst: 'Before booking you can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look through the <a class="ag-inline-link" href="/courses/game-development-masterclass-for-kids">Game Development for Kids syllabus</a>.',
    note: 'Live online, in English, with mentors in India. WhatsApp is the quickest way to reach us.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Making games', links: [
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding' },
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany' },
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch in Germany' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Someone always waits 18 turns'
  },

  personalityCss: `
.ag-root.ag-gck .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-gck .ag-capsule { border-left-width: 5px; border-radius: 8px; }
.ag-root.ag-gck .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-gck .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-gck .ag-code-head b { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Jugendschutzgesetz para 14; USK pages on age labels, the USK itself and its statistics; Gesellschaft für Informatik, Informatik-Monitor 2026/27; Bundesweite Informatikwettbewerbe, Informatik-Biber; Einheitenzeitgesetz; read 2 and 3 November 2026.',
    localProject: 'Roll a six to leave home: an original Python project that simulates the waiting rule of a classic German board game 10,000 times (6.12 turns with one try, 2.36 with three), checks it against exact probability (6.0 and 2.37), and finds the unluckiest player (18 turns); plus dice and Scratch versions. Lesson family: simulate, then check against exact maths.',
    requiredMentions: ['One try a turn: 6.12 turns on average', 'Three tries a turn: 2.36 turns on average', '3 tries: 0.4213 chance per turn, 2.37 turns expected', 'Out in the first turn: 4285', 'Longest wait: 18 turns', 'Freigegeben ab sechzehn Jahren', 'eine freiwillige Einrichtung der Games-Branche', 'Someone always waits 18 turns'],
    sources: [
      { claim: 'The five statutory age labels and reason symbols.', url: 'https://www.gesetze-im-internet.de/juschg/__14.html' },
      { claim: 'USK is a voluntary body of the games industry; IARC labels online.', url: 'https://usk.de/die-usk/arbeit-der-usk/wer-ist-die-usk/' },
      { claim: 'What each USK label says about games.', url: 'https://usk.de/die-usk/arbeit-der-usk/welche-alterskennzeichen-gibt-es/' },
      { claim: 'USK 2025 statistics; 2023 rules on in-game purchases.', url: 'https://usk.de/die-usk/statistiken/' },
      { claim: 'Informatik in Bayern, Mecklenburg-Vorpommern and Saarland.', url: 'https://informatik-monitor.de/' }
    ],
    rejectedClaims: [
      'Age ratings of specific games such as Roblox or Minecraft: not looked up in the USK database, so none are given.',
      'Platform minimum ages for Roblox or Minecraft accounts: not fetched, so the page only says a parent manages any account under each company\'s terms.',
      'Detailed descriptions of violent content in higher-rated games: left out on purpose for a children\'s page.',
      'Any affiliation with the USK, a board-game publisher or any games company: none.'
    ]
  }
};
