'use strict';
// Minecraft coding classes in Germany (ag- English door, Germany cluster P2 row DE034), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. Primary query: "minecraft coding for kids germany".
// Spine: from building by hand to building by code, and the habit of checking a count two ways.
// Sources (read raw 3 Nov 2026; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/minecraft-coding-classes-germany/):
//  - USK title search for Minecraft (usk.de/?s=minecraft): "Minecraft (Sony-Playstation 5) Comic-Gewalt, Handlungsdruck,
//    Schreckmomente Enthält: Chats, In-Game-Käufe Publisher Microsoft Corporation ... Altersfreigabe Freigegeben ab 6
//    Jahren gemäß § 14 JuSchG"; the same rating and descriptors for "Minecraft (Nintendo Switch 2)"; "81 Titel gefunden".
//  - Minecraft EULA (minecraft.net/en-us/eula): "If you are a minor ... please ask your parent or legal guardian to explain
//    them, especially as your parent or legal guardian is responsible for the creation of your Microsoft account and the
//    acceptance all terms on your behalf"; Minecraft Education has its own terms ("please view your group's terms").
//  - Minecraft Education licensing: "Anyone with a Microsoft 365 account can purchase and use Minecraft Education";
//    "Individual licenses can be purchased for use in camps, clubs, and other organizations." (Prices on that page are a
//    vendor's and are not repeated.)
//  - Minecraft Education computer science kit: "Start with Hour of Code, progress to MakeCode Blocks, then learn to code
//    in Python"; "Solve coding puzzles with blocks or Python and learn why AI tools require human oversight".
//  - Minecraft Education get-started page: downloads listed for "Windows ChromeOS MacOS iOS".
//  - Minecraft Usage Guidelines: no Minecraft world, mod or server built to promote a corporate brand.
//  - Not fetched: education.minecraft.net Python 101 (404), edusupport.minecraft.net (HTTP 403, not retried),
//    minecraft.net/en-us/parents (404).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
// Our own example (scratchpad de/w/G7/mco/v1.py, v2.py, python3 -I): v1 prints "Solid pyramid, base 9: 165 blocks",
// "Hollow pyramid, base 9: 81 blocks", "Formula for hollow, base 9: 97 blocks"; v2 prints for bases 3, 5, 9, 15, 21:
// built 9, 25, 81, 225, 441; old formula 13, 33, 97, 253, 481; fixed formula 9, 25, 81, 225, 441. The hollow pyramid
// always needs base x base blocks.
// Lesson family: check a result by computing it a second, independent way.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  '# A stepped pyramid, built layer by layer like a Minecraft agent would (our own example)',
  'def build(base, hollow):',
  '    blocks = set()',
  '    layer, side = 0, base',
  '    while side > 0:',
  '        for x in range(layer, layer + side):',
  '            for z in range(layer, layer + side):',
  '                edge = x in (layer, layer + side - 1) or z in (layer, layer + side - 1)',
  '                if not hollow or edge or side == 1:',
  '                    blocks.add((x, layer, z))',
  '        layer, side = layer + 1, side - 2',
  '    return blocks',
  '',
  'def by_formula(base):',
  '    # a quick guess: each ring of side s has 4 walls of s blocks',
  '    return sum(4 * s if s > 1 else 1 for s in range(base, 0, -2))',
  '',
  'print("Solid pyramid, base 9:", len(build(9, hollow=False)), "blocks")',
  'print("Hollow pyramid, base 9:", len(build(9, hollow=True)), "blocks")',
  'print("Formula for hollow, base 9:", by_formula(9), "blocks")'
].join('\n');

const V2 = [
  'def by_formula_fixed(base):',
  '    # four walls of s blocks share four corners, so take 4 away',
  '    return sum(4 * s - 4 if s > 1 else 1 for s in range(base, 0, -2))',
  '',
  'for base in [3, 5, 9, 15, 21]:',
  '    built = len(build(base, hollow=True))',
  '    print("base", base, " built:", built, " old formula:", by_formula(base), " fixed formula:", by_formula_fixed(base))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Minecraft coding classes' },
  slug: 'minecraft-coding-classes-germany',
  code: 'mco',
  accent: '#007162',
  accentRationale: 'Minecraft coding in Germany: a deep prismarine teal #007162, distinct from the Roblox baseplate green and the Germany hub fir green; contrast on the paper #FBF8F2 about 5:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Minecraft coding classes in Germany',
  title: 'Minecraft Coding for Kids in Germany, Live in English',
  description: 'Live online Minecraft coding classes in English for children in Germany aged 6 to 12: blocks, then Python, the USK rating and account rules, and builds made by code.',
  ogDescription: 'Children in Germany who already build in Minecraft learn to build with code instead, live in English with one mentor, starting with blocks and moving on to Python.',
  twitterDescription: 'Minecraft coding for kids in Germany, taught live in English: blocks first, then Python.',
  pageName: 'Minecraft Coding Classes in Germany',
  webPageDescription: 'A guide for parents in Germany whose child loves Minecraft and wants to code: the USK age rating, who sets up a child\'s Microsoft account, how Minecraft Education teaches blocks and Python, and an original pyramid program that checks itself.',
  courseDescription: 'Live online Minecraft coding classes in English for children in Germany aged 6 to 12: block coding, then Python, building and solving puzzles in Minecraft with code, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Minecraft coding',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#rating', label: 'Ages' },
    { href: '#editions', label: 'Python' },
    { href: '#pyramid', label: 'Project' },
    { href: '#next', label: 'Next' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Minecraft coding &middot; Ages 6 to 12',
  h1: 'Minecraft coding classes for kids in Germany',
  lede: 'A child who has built a castle in Minecraft one block at a time already understands the problem coding solves: doing the same thing over and over is slow. Tell the computer to do it instead and a castle takes seconds, and a hundred castles take no longer than one. This page is for parents in Germany who want that leap for their child, with the facts on age ratings and accounts first, from the people who set them.',
  secondaryCta: { href: '#pyramid', label: 'See the pyramid program' },
  wa: 'Hello Modern Age Coders, my child lives in Germany and would like a free first Minecraft coding class, taught in English.',
  heroNote: 'Teaching online since 2020 &middot; 10,000+ students worldwide &middot; builds made with code, not by hand',
  spec: [
    ['Ages', '6 to 12'],
    ['Starts with', 'Block coding'],
    ['Moves on to', 'Python'],
    ['Taught in', 'English, at the child\'s pace'],
    ['Format', 'Group or one to one'],
    ['First class', 'Free']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'At Modern Age Coders, Minecraft coding for kids in Germany means live online classes in English for children aged 6 to 12. They begin with block coding inside Minecraft and progress to Python that builds, counts and solves puzzles in the game. Each child keeps the same mentor, who adapts to their pace and accent, either one to one or with fifteen to twenty classmates. The first class is free.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Which Minecraft course is right for my child?',
    lede: 'Most children aged 6 to 12 begin with the Minecraft course. Children who want more games, or who are ready for Python outside the game, have two good alternatives.',
    items: [
      { course: 'minecraft-coding-for-kids-course', code: 'MCO / 01', title: 'Minecraft Coding for Kids', note: 'The main course. Blocks first, then real code, building and solving inside Minecraft with a mentor beside every step.' },
      { course: 'game-development-masterclass-for-kids', code: 'MCO / 02', title: 'Game Development for Kids', note: 'Scratch, Roblox and Minecraft in one path, for a child who wants to make several kinds of game.' },
      { course: 'python-ai-kids-masterclass', code: 'MCO / 03', title: 'Python and AI for Kids', note: 'For a child of about 9 and up who is ready to write Python on its own, with games, turtle drawings and small AI projects.' }
    ]
  },

  sections: [
    {
      id: 'rating',
      eyebrow: 'Ratings and accounts',
      h2: 'What age is Minecraft rated in Germany?',
      lede: 'In Germany the USK gives games their legal age ratings. Its database lists Minecraft with an age rating of 6.',
      body: [
        { kind: 'table', numCols: [], caption: 'How the USK lists Minecraft (entries for PlayStation 5 and Nintendo Switch 2)', head: ['What the USK records', 'Entry'], rows: [
          ['Age rating', 'Freigegeben ab 6 Jahren gemäß § 14 JuSchG'],
          ['Reasons given', 'Comic-Gewalt, Handlungsdruck, Schreckmomente'],
          ['Also contains', 'Chats, In-Game-Käufe'],
          ['Publisher', 'Microsoft Corporation']
        ] },
        { kind: 'source', html: 'Source: USK title search for Minecraft, usk.de, read on 3 November 2026. The search returned 81 titles; spin-off games such as Minecraft Dungeons II carry their own, different ratings.' },
        { kind: 'two', mt: true,
          leftH3: 'What the rating means',
          left: [
            'A USK 6 rating is the legal age mark under the German Jugendschutzgesetz. The note "Chats, In-Game-Käufe" tells parents that the game can include chat with other players and purchases, which the rating itself does not cover.',
            'Those two things are exactly what parents usually ask us about. In our classes children code in their own world; there is nothing to buy and nobody to chat with except the mentor on the call.'
          ],
          rightH3: 'Who sets up the account',
          right: [
            'Minecraft\'s own end user licence agreement says that for a minor, the parent or legal guardian is responsible for creating the Microsoft account and accepting the terms on the child\'s behalf. It also asks minors to have a parent explain the terms to them.',
            'So the account is a family decision. We never create a child\'s account. In the free first class the mentor checks which edition the child has and what it can do.'
          ] }
      ]
    },
    {
      id: 'editions',
      tint: 'tint',
      eyebrow: 'Blocks, then Python',
      h2: 'Can you learn to code in Minecraft?',
      lede: 'Yes. Minecraft Education is built for exactly that, and its own learning path runs from blocks to Python.',
      body: [
        { kind: 'two',
          leftH3: 'Minecraft Education',
          left: [
            'Minecraft Education describes its coding path in one line: start with Hour of Code, progress to MakeCode Blocks, then learn to code in Python. Its newer tutorials let children solve coding puzzles with blocks or Python while learning why AI tools need human oversight.',
            'Its licensing page says anyone with a Microsoft 365 account can buy and use it, and its getting-started page offers downloads for Windows, ChromeOS, macOS and iOS.'
          ],
          rightH3: 'Why blocks first',
          right: [
            'A six year old can read a block that says "move forward 5" long before they can type it without mistakes. Blocks let children think about the order of steps, repetition and decisions without fighting the keyboard.',
            'Around the age of 8 or 9, when typing gets easier, the same ideas move into Python. The world stays the same; only the way of writing changes.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'How a child moves through Minecraft coding in our classes (our plan, following Minecraft Education\'s blocks-to-Python path)', head: ['Stage', 'Typical age', 'What the child writes', 'What they build'], rows: [
          ['Blocks', '6 to 8', 'Block programs: move, place, repeat', 'Paths, walls, a first house'],
          ['Blocks with logic', '7 to 9', 'Loops inside loops, if and else', 'Patterns, mazes, simple farms'],
          ['First Python', '8 to 10', 'Short Python programs with variables', 'Towers and pyramids of any size'],
          ['Python with functions', '9 to 12', 'Functions with inputs, lists of positions', 'Whole villages from one function']
        ] },
        { kind: 'source', html: 'Source for the blocks-to-Python path: Minecraft Education, computer science subject kit and licensing pages, read on 3 November 2026. The ages and stages in the table are our own.' },
        { kind: 'p', mt: true, html: 'What if a child plays the ordinary game, not Minecraft Education? Then we teach the same ideas in Python outside the game, as in the program below, and bring them back into the world later. The thinking is identical, and it is the thinking we care about: a child who can describe a build as steps, spot the repeating part and check the result has learned to program, whichever edition they used.' }
      ]
    },
    {
      id: 'pyramid',
      eyebrow: 'Worked example, ours',
      h2: 'How many blocks does a hollow pyramid need?',
      lede: 'Children love building pyramids. Before building a big one, it helps to know how many blocks it will take. We work it out two ways, with a program that builds it and with a formula, and the two answers have to agree.',
      body: [
        { kind: 'two',
          leftH3: 'The plan',
          left: [
            'A stepped pyramid has a square base. Each layer is two blocks narrower than the one below, until the top is a single block. A base of 9 gives layers of 9, 7, 5, 3 and 1.',
            'A hollow pyramid keeps only the outer ring of each layer, so it saves blocks and leaves a room inside.'
          ],
          rightH3: 'Two ways to count',
          right: [
            'The program places every block in a set, just as an agent in Minecraft would place it in the world, and then counts the set.',
            'The formula is a quick guess a child might make: a ring with side s has four walls of s blocks, so 4 times s.'
          ] },
        { kind: 'code', label: 'Version 1: build it, count it, and compare with a formula', lang: 'Python', code: V1, note: 'It prints <code>Solid pyramid, base 9: 165 blocks</code>, then <code>Hollow pyramid, base 9: 81 blocks</code> and <code>Formula for hollow, base 9: 97 blocks</code>.' },
        { kind: 'p', mt: true, html: 'The two counts disagree: 81 from the program and 97 from the formula. One of them is wrong, and the program has the advantage of having actually placed every block. So where does the formula go wrong? Draw a ring of side 3 on squared paper and count: 8 blocks, not 12. Each corner block belongs to two walls at once, and the formula counted it twice. Four corners per ring, four rings with corners in a base-9 pyramid: 16 blocks too many, and 97 minus 16 is 81.' },
        { kind: 'code', label: 'Version 2: the fixed formula, tested against the program for five sizes', lang: 'Python', code: V2, note: 'Run after Version 1. It prints <code>base 3  built: 9  old formula: 13  fixed formula: 9</code>, then the same for bases 5, 9, 15 and 21: built 25, 81, 225 and 441, old formula 33, 97, 253 and 481, fixed formula 25, 81, 225 and 441.' },
        { kind: 'table', mt: true, numCols: [0, 1, 2, 3], caption: 'Blocks for a hollow stepped pyramid (our calculation)', head: ['Base', 'Built and counted', 'Old formula, 4 times s', 'Fixed formula, 4 times s minus 4'], rows: [
          ['3', '9', '13', '9'],
          ['5', '25', '33', '25'],
          ['9', '81', '97', '81'],
          ['15', '225', '253', '225'],
          ['21', '441', '481', '441']
        ] },
        { kind: 'source', html: 'Example and program written by us; output taken from a Python 3 run on 3 November 2026.' },
        { kind: 'p', mt: true, html: 'Now look down the "built" column: 9, 25, 81, 225, 441. Those are 3 times 3, 5 times 5, 9 times 9, 15 times 15 and 21 times 21. A hollow pyramid always needs exactly as many blocks as a flat square floor of the same base. Children are usually delighted, and a little suspicious, which is the right reaction. The older ones can prove it by adding up the rings; the younger ones can test it in the game. Either way they have learned the habit this example is really about: when two ways of counting disagree, do not pick the one you like, find out why.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict.</strong> How many blocks will a hollow pyramid with base 31 need? Check with the program.',
          '<strong>Solid too.</strong> Write a formula for the solid pyramid and test it against the program for five sizes.',
          '<strong>Add a door.</strong> Change the program to leave a gap of two blocks in the bottom layer. How many blocks now?',
          '<strong>In the game.</strong> Build the base-9 hollow pyramid with code and count the blocks used in your inventory.'
        ] }
      ]
    },
    {
      id: 'next',
      tint: 'tint',
      eyebrow: 'Beyond Minecraft',
      h2: 'What does Minecraft coding lead to?',
      lede: 'For most children it leads to Python, and later to whatever school or curiosity asks for. The game is a starting point, not a ceiling.',
      body: [
        { kind: 'table', numCols: [], caption: 'Minecraft skills and where they reappear (our course map)', head: ['In Minecraft', 'The coding idea', 'Next place it appears'], rows: [
          ['Placing a wall with one command', 'A loop', 'Every Python program'],
          ['A pyramid of any size', 'A function with an input', 'Maths through coding, Python projects'],
          ['Counting blocks two ways', 'Testing a result', 'Every serious program'],
          ['A farm that reacts to the day', 'Conditions and events', 'Games in Scratch or Roblox'],
          ['A village from a list of houses', 'Lists and data', 'Data and AI projects']
        ] },
        { kind: 'p', mt: true, html: 'In Germany, when a child first meets computing at school, and how much of it, depends on the Land and often on the school. A child who arrives in Klasse 5 or 7 able to break a problem into steps and test the answer is in a strong position whatever the timetable holds. For a free contest there is the Informatik-Biber, open to pupils from Klasse 3, organised by BWINF, and which tests exactly this kind of step-by-step thinking without any programming.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When do Minecraft classes run in German time?',
      lede: 'After school during the week, and at the weekend. The mentors are based in India, which is ahead of Germany.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example times in Germany and the same moment in India', head: ['Germany', 'India, winter (until 28 March 2027)', 'India, summer (from 28 March 2027)'], rows: [
          ['14:45', '19:15', '18:15'],
          ['17:15', '21:45', '20:45'],
          ['Saturday 10:15', '14:45', '13:45'],
          ['Sunday 15:00', '19:30', '18:30']
        ] },
        { kind: 'source', html: 'Germany uses MEZ, UTC+1, in winter and MESZ, UTC+2, in summer, as set by the Einheitenzeitgesetz; the change back was on 25 October 2026 and the change forward is on 28 March 2027. India stays at UTC+5:30. The rows are examples; no batch time is fixed here.' },
        { kind: 'p', mt: true, html: 'When you book the free class, slots appear in your own local time. Young children often do better with a weekend morning class, when they are fresh, than late on a school day.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From the first block program to a village built by code',
    lede: 'Our own milestones for Minecraft coders, used to place each child and to show parents progress.',
    table: { caption: 'Our own Minecraft milestones', head: ['Milestone', 'Typical timing', 'What the child manages'], rows: [
      ['1. Steps', 'First weeks', 'Put block commands in the right order to build a path'],
      ['2. Repeats', 'Month 1 to 2', 'Use a loop instead of copying the same block ten times'],
      ['3. Decisions', 'Months 2 to 4', 'Use if and else to react to what is in the world'],
      ['4. Python', 'Months 4 to 6', 'Write short Python programs with variables and loops'],
      ['5. Functions', 'Month 6 onwards', 'Build any size of structure from one function and test the count']
    ] },
    left: { h3: 'For children', ps: [
      'If you are placing the same block again and again, there is a loop hiding there.',
      'Count it twice, two different ways. If the answers differ, you have found something interesting.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your child how many blocks their last build used and how they know. The second answer is the one that matters.',
      'Time in a coding lesson looks like playing. Watch for the moment they stop clicking and start planning.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for curious builders',
    lede: 'Every one of them runs live, in English, with the same mentor each week, for a whole group or a single child.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 6 to 9', courses: [
        { code: 'MCO / FIRST / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games and stories in blocks.' },
        { code: 'MCO / FIRST / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Thinking in steps, with and without a computer.' },
        { code: 'MCO / FIRST / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'From blocks to games, apps and AI.' }
      ] },
      { num: 'II', h3: 'More games and code', sub: 'Ages 8 to 12', courses: [
        { code: 'MCO / MORE / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Typed Luau scripts for multiplayer games.' },
        { code: 'MCO / MORE / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Counting, patterns and proof in Python.' },
        { code: 'MCO / MORE / 03', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'Real web pages a child designs.' }
      ] },
      { num: 'III', h3: 'Older builders', sub: 'Ages 11 and up', courses: [
        { code: 'MCO / OLDER / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For older children heading towards Java Edition mods.' },
        { code: 'MCO / OLDER / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From scripts to full projects.' },
        { code: 'MCO / OLDER / 03', slug: 'frontend-development-masterclass-for-teens', title: 'Frontend for teens', blurb: 'Designing pages people enjoy using.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'How live Minecraft coding classes work in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'School days', l: 'Afternoon slots from about a quarter to three, German time.' },
      { time: 'Weekends', l: 'Saturday and Sunday, mornings and afternoons.' },
      { time: 'One to one', l: 'A regular time agreed with your child\'s mentor.' }
    ],
    cells: [
      { h3: 'Code, not clicks', p: 'Every build in class is made by a program.' },
      { h3: 'Blocks to Python', p: 'Each child moves on when ready.' },
      { h3: 'Gentle English', p: 'Short sentences, shown on screen, repeated.' },
      { h3: 'Familiar mentor', p: 'The same friendly face each week.' },
      { h3: 'No chat, no shop', p: 'Nothing to buy and no strangers.' },
      { h3: 'Size you choose', p: 'Fifteen to twenty children, or one alone.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Some projects from our students around the world; you will find more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews posted on Google by parents and students, shown unchanged.',

  fees: {
    h2: 'Fees for Minecraft coding classes in Germany',
    lede: 'The monthly fee pays for eight live classes. You see it in euro, calculated at the European Central Bank reference rate; the charge is made in US dollars and converted by your bank, so the euro amount on your statement can be a little different.',
    free: ['A free first class', 'A first build with the mentor', 'No card asked for'],
    group: ['Fifteen to twenty children of a similar level', 'The same mentor every week', 'Two live classes a week', 'Pay by the month, stop any time'],
    one: ['One child, one mentor', 'Builds chosen by your child', 'A weekly time that fits your family']
  },

  faq: {
    eyebrow: 'Parents in Germany ask',
    h2: 'What parents in Germany ask about Minecraft coding',
    items: [
      { q: 'Are the classes in German?', a: 'No. All lessons are live and in English only. Mentors work from India and slow down, repeat or rephrase to suit how your child speaks and learns. Block commands and Python keywords are English words, so the code helps with the English and the English helps with the code.' },
      { q: 'My child is 6 and speaks little English. Can they join?', a: 'Often, yes. Block coding is very visual, and the mentor shows each step on screen and uses short, simple sentences. The free first class is the best way to see whether it works for your child.' },
      { q: 'What is the USK rating for Minecraft?', a: 'The USK database lists Minecraft as Freigegeben ab 6 Jahren under the Jugendschutzgesetz, with the reasons Comic-Gewalt, Handlungsdruck and Schreckmomente, and notes that it contains chats and in-game purchases.' },
      { q: 'Which Minecraft do we need?', a: 'Minecraft Education is designed for coding and teaches blocks and then Python. Minecraft\'s licensing page says anyone with a Microsoft 365 account can buy and use it. If your child has another edition, the mentor explains in the first class what it can do, and Python can also be taught outside the game.' },
      { q: 'Who creates my child\'s Microsoft account?', a: 'The family does. Minecraft\'s licence agreement says that for a minor the parent or legal guardian is responsible for creating the Microsoft account and accepting the terms. We never create or manage children\'s accounts.' },
      { q: 'Will my child chat with other players in class?', a: 'No. Children code in their own world, and the only other person in the lesson is the mentor. The course never asks for in-game chat or purchases.' },
      { q: 'Is Minecraft coding real programming?', a: 'Yes. Children learn sequences, loops, conditions, variables and functions, first in blocks and then in Python, the same ideas used in every programming language.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In Germany most children come after school or on a weekend morning.' },
      { q: 'How are the fees charged?', a: 'Our pages give the fee in euro, worked out from the European Central Bank reference rate, but the card payment is in US dollars. Your bank makes the conversion, which is why the euro figure on a statement is rarely identical. Nothing is charged for the first class.' },
      { q: 'What comes after the Minecraft course?', a: 'Most children continue with Python, and some move to Roblox, Scratch games or Java. The mentor suggests a next step based on what your child enjoys.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read on',
    h2: 'Related pages',
    lede: 'Further reading for Minecraft fans and their parents.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page in one place.' },
      { href: '/learn-to-code-minecraft-mods', label: 'Learn to code Minecraft mods', p: 'For older children ready for Java.' },
      { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding for kids', p: 'Our general guide to the course.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding for kids', p: 'Block coding beyond Minecraft.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'For families in the capital.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live class.' }
    ]
  },

  start: {
    h2: 'Book a free first Minecraft coding class',
    lede: 'Together with the mentor, your child writes a little program that builds something. From that the mentor can tell whether blocks or Python is the better starting point. It all happens in English, gently, at your child\'s pace.',
    readFirst: 'You can also read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look at <a class="ag-inline-link" href="/courses">all our courses</a> first.',
    note: 'Classes are live online in English, with mentors based in India. WhatsApp in English is the quickest way to ask a question.',
    formNote: 'The first class costs nothing and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Game coding', links: [
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding for kids' },
        { href: '/learn-to-code-minecraft-mods', label: 'Minecraft mods' },
        { href: '/how-to-make-a-roblox-game', label: 'Make a Roblox game' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' }
      ] }
    ],
    bottomRight: 'Count it two ways'
  },

  personalityCss: `
.ag-root.ag-mco .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-mco .ag-capsule { border-left-width: 4px; }
.ag-root.ag-mco .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-mco .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-mco .ag-code-head b { letter-spacing: 0.05em; }
`,

  dossier: {
    curriculumAuthority: 'USK title database (Minecraft, PlayStation 5 and Nintendo Switch 2 entries); Minecraft EULA and Usage Guidelines; Minecraft Education licensing, get-started and computer science pages; Einheitenzeitgesetz. Read 3 November 2026.',
    localProject: 'Count it two ways: an original Python program builds stepped pyramids block by block and checks a formula; the quick formula 4s overcounts corners (97 against 81 for base 9), the fixed 4s - 4 agrees for bases 3 to 21, and the hollow pyramid always needs base x base blocks (9, 25, 81, 225, 441). Lesson family: check a result by computing it a second, independent way.',
    requiredMentions: ['Hollow pyramid, base 9: 81 blocks', 'Formula for hollow, base 9: 97 blocks', 'Solid pyramid, base 9: 165 blocks', 'Freigegeben ab 6 Jahren gemäß § 14 JuSchG', 'Comic-Gewalt, Handlungsdruck, Schreckmomente', 'start with Hour of Code, progress to MakeCode Blocks, then learn to code in Python', 'Count it two ways', 'as many blocks as a flat square floor'],
    sources: [
      { claim: 'USK rating for Minecraft: ab 6, reasons and contents.', url: 'https://usk.de/?s=minecraft' },
      { claim: 'Parent or guardian creates a minor\'s Microsoft account and accepts the terms.', url: 'https://www.minecraft.net/en-us/eula' },
      { claim: 'Minecraft Education: anyone with a Microsoft 365 account can buy and use it; licences for camps and clubs.', url: 'https://education.minecraft.net/en-us/licensing' },
      { claim: 'Blocks-to-Python learning path.', url: 'https://education.minecraft.net/en-us/resources/computer-science-subject-kit' },
      { claim: 'Download platforms.', url: 'https://education.minecraft.net/en-us/get-started' }
    ],
    rejectedClaims: [
      'Minecraft Education prices from the vendor\'s licensing page: not repeated (no third-party prices).',
      'edusupport.minecraft.net returned HTTP 403: not retried, nothing used from it.',
      'Any claim about Minecraft Education Code Builder commands we have not quoted: the example runs in plain Python and the page says so.',
      'Any affiliation with Microsoft, Mojang or the USK: none.',
      'German-language teaching: classes are in English only.'
    ]
  }
};
