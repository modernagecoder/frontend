// SHIP: market | Minecraft coding for kids in Peru, in English: game vs Education, school access, MakeCode logic | truth tables: a two-lever lamp, why "a or b" fails one row, and the and/or/not fix
'use strict';
// Minecraft coding for kids in Peru (ag- English door, Peru cluster row PE069, hubGroup subjects; alloc mck, #0D4833).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Search: "minecraft coding for kids peru", English twin of "programación minecraft para niños" (KEYWORDS.md section 2).
// The Spanish sibling (programacion-minecraft-para-ninos-peru, not live yet) maps the MakeCode CS Intro units and teaches a hollow
// cube with nested loops. This page takes its own spine: the home game against Minecraft Education in Microsoft's own words (a
// table), whether a Peruvian child may already have access through school, what Code Builder and the Agent are, logic with and,
// or and not, a four-month plan, age and AI, and the clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/minecraft-coding-for-kids-peru/, read
// 9 November 2026; every quote string-matched in the raw text):
//  - Minecraft Education, Resources for parents and families (education.minecraft.net/en-us/get-started/parents, parents.html):
//    table "Key differences": Purpose "Focuses on entertainment, creativity, and exploration in open-ended worlds." / "Built for
//    learning environments, with a content library that supports all school subjects like math, science, history, and coding.";
//    Licensing "Purchased as a one-time game license or subscription via personal accounts." / "Requires a Microsoft 365 education
//    license and is deployed on school-managed devices."; Classroom features "Standard game features, no built-in classroom tools."
//    / "Includes classroom management and assessment features, Immersive Reader integration, an in-game lesson library, and Code
//    Builder tool that allows coding in MakeCode."; Gameplay "Players join public or private servers, often hosted independently."
//    / "Students play with classmates on school-managed devices, not public servers"; "Your child may already have access through
//    their school account."; "Parents should check with their child’s school to see if it is already included"; "Homeschools,
//    families, and other organizations can purchase and manage Minecraft Education through our commercial offer."; CyberSafe series
//    "use AI tools responsibly"; "AI ADVENTURERS".
//  - Minecraft Education, What is (me-what.html.txt, copied from the sibling's raw folder): "Available for Windows, Mac,
//    Chromebook, iPad, Android, and iOS"; "Browse over 600 standards-aligned lessons".
//  - Minecraft Education, Licensing (me-licensing.html.txt): "Anyone with a Microsoft 365 account can purchase and use Minecraft
//    Education."; "Enhanced multi-player lets up to 30 students collaborate".
//  - Minecraft Education, Get started (me-get-started.html.txt): "Millions of educators and students use Minecraft Education in
//    115 countries".
//  - MakeCode for Minecraft, About (makecode-about.html.txt): "MakeCode for Minecraft is a code editor to build fun mods and
//    programs for Minecraft."; reference menu lists "Blocks", "Python", "JavaScript".
//  - MakeCode, Boolean reference (minecraft.makecode.com/blocks/logic/boolean, boolean.html): "A Boolean has one of two possible
//    values: true or false."; "A and B evaluates to true if-and-only-if both A and B are true"; "A or B evaluates to true if
//    either A is true or B is true, or if both A and B are true"; "not A evaluates to the opposite (negation) of A".
//  - MakeCode, Agent reference (agent.html): "The agent is your assistant who helps you do things in Minecraft."
//  - MakeCode CS Intro, Conditionals overview (conditionals.html): "Conditionals follow the format of IF this, THEN that."
//  - Minecraft EULA (terms.html.txt): in-game currency only "if you have reached the age of "majority" where you live".
//  - MINEDU Edades normativas (FACTS 13, 14): age on 31 March; 2° primaria 7, 6° primaria 11.
//  - CNEB (FACTS 38): Ciencia y Tecnología competency "Diseña y construye soluciones tecnológicas para resolver problemas".
//  - INEI TIC II Trimestre 2026 (MARKET 1.4): children 6 to 11 used the internet 68.2% (Cuadro 2.1).
//  - AI tool ages (content/ai-tool-age-audit.json): ChatGPT under 18 needs a parent's permission; Claude 18 and over.
//  - Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30 (facts-geo/timezone.tsv).
// Our own example (lamp.py in the src-pages folder, run with python3 -I, Python 3.14), exact output:
//    lever A  lever B  first_try  two_way
//    False    False    False      False
//    False    True     True       True
//    True     False    True       True
//    True     True     True       False
//    rows where first_try is wrong: [(True, True)]
//    two_way equals a != b on every row: True
// Lesson family: truth tables. A corridor lamp worked by a lever at each end (a two-way switch); the first attempt "a or b" is
// right on three rows of four; listing every row finds the fourth; (a or b) and not (a and b) fixes it, and equals a != b.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const LAMP = [
  'from itertools import product',
  '',
  '',
  'def first_try(a, b):',
  '    return a or b',
  '',
  '',
  'def two_way(a, b):',
  '    return (a or b) and not (a and b)',
  '',
  '',
  'print("lever A  lever B  first_try  two_way")',
  'for a, b in product([False, True], repeat=2):',
  '    print(f"{a!s:<8} {b!s:<8} {first_try(a, b)!s:<10} {two_way(a, b)}")'
].join('\n');

const LAMP_OUT = [
  'lever A  lever B  first_try  two_way',
  'False    False    False      False',
  'False    True     True       True',
  'True     False    True       True',
  'True     True     True       False'
].join('\n');

const CHECK = [
  'rows = list(product([False, True], repeat=2))',
  'wrong = [(a, b) for a, b in rows if first_try(a, b) != two_way(a, b)]',
  'print("rows where first_try is wrong:", wrong)',
  'print("two_way equals a != b on every row:",',
  '      all(two_way(a, b) == (a != b) for a, b in rows))'
].join('\n');

const CHECK_OUT = [
  'rows where first_try is wrong: [(True, True)]',
  'two_way equals a != b on every row: True'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Minecraft coding for kids' },
  slug: 'minecraft-coding-for-kids-peru',
  code: 'mck',
  accent: '#0D4833',
  accentRationale: 'Minecraft coding for kids in Peru: a dark moss green #0D4833, close to the grass-block top every player knows and to the cloud forest of the Peruvian Andes, deep enough for strong contrast with white text and above 4.5 on every paper tone the build checks',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Minecraft coding for kids in Peru',
  title: 'Minecraft Coding for Kids in Peru: Live Classes in English',
  description: 'Minecraft coding for kids in Peru: live classes in English with MakeCode and the Agent, ages 7 to 12, in a group or one to one, at any hour that suits Peru time.',
  ogDescription: 'The home game against Minecraft Education, whether your child already has access through school, what Code Builder and the Agent do, a four-month plan and a logic lesson about a lamp with two levers.',
  twitterDescription: 'Live Minecraft coding classes for children in Peru aged 7 to 12, taught in English, in a group or one to one.',
  pageName: 'Minecraft Coding for Kids in Peru',
  webPageDescription: 'A guide for families in Peru whose children want to code inside Minecraft, built from Minecraft Education\'s own pages for parents, licensing and its platform list, the MakeCode for Minecraft reference, the Minecraft EULA, MINEDU normative ages, the CNEB, INEI household data and the tz database, with an original logic lesson.',
  courseDescription: 'Live online Minecraft coding classes for children aged 7 to 12 in Peru, taught in English by mentors based in India: MakeCode blocks in Minecraft Education, the Agent, loops, variables, logic, events, mini-games and a first look at JavaScript, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Minecraft coding for kids',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#versions', label: 'Which Minecraft' },
    { href: '#school', label: 'School access' },
    { href: '#lesson', label: 'Lamp lesson' },
    { href: '#plan', label: 'Four months' },
    { href: '#clock', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Ages 7 to 12 &middot; MakeCode in Minecraft, live in English',
  h1: 'Minecraft coding for kids in Peru',
  lede: 'A child who has spent a whole afternoon placing blocks one by one is ready for the idea behind all programming: tell the computer once, and let it do the work a thousand times. Minecraft is a good place to meet that idea, because the result appears in a world the child already loves. This page explains which Minecraft is used for coding, how to find out whether your child already has access through school, what the lessons cover, and how a short logic puzzle about a lamp teaches careful thinking.',
  secondaryCta: { href: '#lesson', label: 'Try the lamp puzzle' },
  wa: 'Hello Modern Age Coders, we live in Peru and our child would like Minecraft coding classes in English. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 4.9 from about 547 Google reviews &middot; the child drags every block and explains it',
  spec: [
    ['Ages', '7 to 12'],
    ['Edition', 'Minecraft Education'],
    ['Editor', 'MakeCode blocks, then a JavaScript peek'],
    ['Length', 'About four months'],
    ['Format', 'Live video, in English'],
    ['Group size', 'Fifteen to twenty, or one to one']
  ],
  capsuleQ: 'What families in Peru need to know',
  capsule: 'Minecraft coding classes for kids in Peru, ages 7 to 12, are taught by Modern Age Coders live and online in English. Children use Minecraft Education with its built-in MakeCode editor: they snap code blocks together, command the Agent robot to build, write loops and conditions, and finish with a small mini-game of their own design. A mentor based in India watches the shared screen and asks questions rather than giving answers. Lessons run in a group of fifteen to twenty or one to one, at any hour that suits your family in Peru, and the first one is free.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for children who want to code in Minecraft',
    lede: 'The Minecraft course comes first. The other two suit a child who wants several game worlds, or who needs logic and step-by-step thinking before any game at all.',
    items: [
      { course: 'minecraft-coding-for-kids-course', code: 'MCK / 01', title: 'Minecraft Coding: Blocks to Real Code', note: 'Ages 7 to 12, about four months. First commands and the Agent, loops for big builds, variables, decisions and events, an auto-farm, then mini-games with score and timers, and a closing look at the same code in JavaScript.' },
      { course: 'game-development-masterclass-for-kids', code: 'MCK / 02', title: 'Game Development in Three Worlds', note: 'Ages 8 to 12. Scratch, Roblox and Minecraft in one course, for a child who enjoys all three and has not chosen a favourite.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'MCK / 03', title: 'Problem Solving and Computational Thinking', note: 'For younger or less confident children: breaking a task into steps, spotting patterns and testing every case, the habits the lamp puzzle on this page depends on.' }
    ]
  },

  sections: [
    {
      id: 'versions',
      eyebrow: 'Which Minecraft',
      h2: 'Is the Minecraft my child plays the same one used for coding?',
      lede: 'Usually not. The game most children have at home is ordinary Minecraft. Coding lessons use Minecraft Education, a separate edition with a coding tool built in. Microsoft sets out the differences on its page for parents.',
      body: [
        { kind: 'table', numCols: [], caption: 'Minecraft and Minecraft Education compared, in Microsoft\'s words (2026)', head: ['', 'Minecraft (the home game)', 'Minecraft Education'], rows: [
          ['Purpose', 'Entertainment, creativity and exploration in open-ended worlds', 'Learning, with a content library for school subjects including maths, science, history and coding'],
          ['Licence', 'A one-time game licence or a subscription on a personal account', 'A Microsoft 365 education licence, deployed on school-managed devices'],
          ['Classroom tools', 'None built in', 'Classroom management, assessment, Immersive Reader, a lesson library and Code Builder for coding in MakeCode'],
          ['Who you play with', 'Public or private servers, often run independently', 'Classmates on school-managed devices, not public servers']
        ] },
        { kind: 'source', html: 'Source: Minecraft Education, "Resources for parents and families", FAQ "Minecraft vs. Minecraft Education: What\'s the difference?", education.minecraft.net, read on 9 November 2026. Summarised row by row; the comparison is Microsoft\'s.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the difference matters for coding',
          left: [
            'The line that matters is the last cell of the third row: Code Builder. It opens MakeCode inside the game, so a child writes code in one window and watches it run in the world beside it. MakeCode describes itself as "a code editor to build fun mods and programs for Minecraft".',
            'The home game has no such tool, which is why a child can play for years without ever writing code. The two editions look alike on screen, so it is worth checking which one your child is opening.'
          ],
          rightH3: 'What children are spared',
          right: [
            'Minecraft Education keeps players with classmates rather than on public servers, according to the same page. In our lessons the child works in their own world, with the mentor watching the shared screen, and no outsider joins.',
            'There is nothing to buy inside it during our course. The home game\'s licence terms (the EULA) say in-game currency may be bought with real money only by someone who has reached "the age of "majority" where you live", which is another reason children code in the education edition.'
          ] }
      ]
    },
    {
      id: 'school',
      tint: 'tint',
      eyebrow: 'Access through school',
      h2: 'Does my child already have Minecraft Education through school?',
      lede: 'Possibly. Microsoft tells parents that a child "may already have access through their school account", and suggests checking with the school before buying anything.',
      body: [
        { kind: 'two',
          leftH3: 'How to find out',
          left: [
            'Ask the school\'s technology coordinator one plain question: "Does my child\'s school Microsoft account include Minecraft Education?" If it does, your child signs in with that school account and can use it for our classes too, subject to the school\'s own rules.',
            'If the answer is no, Microsoft says "Anyone with a Microsoft 365 account can purchase and use Minecraft Education", and that homeschools, families and other organisations can buy it through its commercial offer. We help every family set it up before the first class; we do not sell licences ourselves.'
          ],
          rightH3: 'What it runs on',
          right: [
            'Minecraft Education is "Available for Windows, Mac, Chromebook, iPad, Android, and iOS". For our lessons a computer or an iPad works; a phone screen is too small to see the code and the world at the same time.',
            'Microsoft also reports "Millions of educators and students use Minecraft Education in 115 countries", and it offers "over 600 standards-aligned lessons". Those lessons are written for classrooms; our course takes a different, more personal route through the same tool.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Ask the school</strong> whether the pupil Microsoft account includes Minecraft Education.',
          '<strong>If yes,</strong> install Minecraft Education on the computer or iPad and sign in with the school account.',
          '<strong>If no,</strong> tell us in the free class and we walk you through Microsoft\'s own options.',
          '<strong>Open Code Builder once</strong> before the first lesson, so the child knows where the coding window lives.',
          '<strong>Book an hour</strong> when the device is free and the house is quiet enough to hear the mentor.'
        ] }
      ]
    },
    {
      id: 'agent',
      eyebrow: 'Code Builder and the Agent',
      h2: 'What does a child actually do when coding in Minecraft?',
      lede: 'They give instructions to the Agent, a small robot that lives in their world. MakeCode puts it simply: "The agent is your assistant who helps you do things in Minecraft." The child plans, the Agent carries out the plan, and any mistake in the plan shows up at once as a crooked wall or a hole in the floor.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Blocks first', p: 'Every instruction is a coloured block: move forward, turn left, place, repeat. Children drag and snap them together, so a seven year old who reads short sentences can start on day one.' },
          { h3: 'The Agent builds', p: 'A loop of four "move forward, place" blocks builds a wall faster than any player. Change one number and the wall is ten blocks long instead of four. That is the first moment a child sees code save effort.' },
          { h3: 'Then the text', p: 'MakeCode can show the same program as JavaScript or Python. Near the end of our course children peek at the JavaScript behind their blocks and find that they already understand most of it.' }
        ] },
        { kind: 'p', mt: true, html: 'MakeCode\'s own CS Intro course explains conditions to children with sentences from home life: "IF this, THEN that". We use the same approach, and then push it one step further with logic: what if two things are both true, or neither, or exactly one? The lesson below is built on that question.' }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A logic lesson',
      h2: 'How can Minecraft coding teach logical thinking?',
      lede: 'By making a child test every case instead of the first one that comes to mind. Here is a lesson from our decisions week. A corridor has a lamp and a lever at each end; flipping either lever should change the lamp, the way a staircase light works at home.',
      body: [
        { kind: 'two',
          leftH3: 'The first idea',
          left: [
            'Almost every child says: the lamp is on if lever A is on or lever B is on. In MakeCode that is one "or" block. They test it by flipping A: the lamp lights. They flip B instead: it lights. It seems finished.',
            'The mentor then asks a question rather than pointing out the problem: "Walk in at one end, flip A to light the corridor. Walk to the other end and flip B to turn it off. What happens?" The lamp stays on.'
          ],
          rightH3: 'Why it fails',
          right: [
            'MakeCode\'s own reference explains it, if you read carefully: "A or B evaluates to true if either A is true or B is true, or if both A and B are true". With both levers up, "or" still says true. The child tested two cases and forgot the third.',
            'So we stop guessing and list every case. Two levers, each up or down, make four combinations. We rebuild the circuit in Python, where a few lines print all four rows at once.'
          ] },
        { kind: 'code', label: 'The first idea and the fix, side by side', lang: 'Python', code: LAMP },
        { kind: 'code', label: 'What it prints', lang: 'Output', code: LAMP_OUT, note: 'Exact output of our run with Python 3. The two columns agree on three rows and differ on the last one, where both levers are on.' },
        { kind: 'p', html: 'The fix reads almost like English: the lamp is on if A or B is on, <strong>and not</strong> both. MakeCode has exactly these three blocks, and, or and not, and its reference defines "not A" as "the opposite (negation) of A". Older children then let the computer check their work for them.' },
        { kind: 'code', label: 'Let the program look for wrong rows', lang: 'Python', code: CHECK },
        { kind: 'code', label: 'What the check prints', lang: 'Output', code: CHECK_OUT, note: 'Exact output of our run. Only the row with both levers on was wrong, and the fixed rule turns out to be the same as asking whether the two levers are different.' },
        { kind: 'p', mt: true, html: 'The sentence we want children to keep is this: <strong>a rule is only proved when every row of the table agrees</strong>. Two levers give four rows; three levers give eight. A child who learns to count the cases before trusting a rule has learnt something that matters far beyond Minecraft, in maths, in science and in any program they write later.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 7 and 8.</strong> With two paper switches and a drawn lamp, act out all four positions. Colour the lamp yellow whenever it should be on.',
          '<strong>Ages 9 and 10.</strong> Build the corridor in Minecraft Education with two levers and a lamp, then write the "or" version in MakeCode and find the failing case yourself.',
          '<strong>Ages 11 and 12.</strong> Add a third lever. Predict how many rows the table needs, then change the Python program to print them all.'
        ] }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Four months',
      h2: 'What does a Minecraft coding course cover from start to finish?',
      lede: 'Our Minecraft course takes about four months in two halves: code that builds, then code that plays. Each half ends with a project week.',
      body: [
        { kind: 'two',
          leftH3: 'Months 1 and 2: code that builds',
          left: [
            'First commands and meeting the Agent, then loops for building at speed and big structures. In the second month: variables that remember a number, decisions that check something before acting, and events that react when a player does something.',
            'The project week is an auto-farm: the Agent plants, waits and harvests on its own, which means the child has to plan the whole cycle before running any of it.'
          ],
          rightH3: 'Months 3 and 4: code that plays',
          right: [
            'Randomness, keeping score and timers turn builds into games, and the project week is a small arena game. In the final month children name their own functions, take the JavaScript peek, and spend two sessions building and polishing a capstone.',
            'The course ends with a short showcase in English, to the mentor and the family: what the game does, how it was built and one bug that took the longest to find.'
          ] },
        { kind: 'p', mt: true, html: 'Peru\'s national curriculum, the CNEB, includes in its science and technology area the competency "Diseña y construye soluciones tecnológicas para resolver problemas" (designs and builds technological solutions to solve problems). Our course is not part of any school programme, but the habit it practises, planning a solution and testing it until it works, is the one that competency describes.' }
      ]
    },
    {
      id: 'age',
      tint: 'tint',
      eyebrow: 'Age and next steps',
      h2: 'What age is right for Minecraft coding, and what comes after?',
      lede: 'Seven is a good start, provided the child reads short sentences. Our course runs to twelve. MINEDU places a child of 7 in 2nd grade of primaria and a child of 11 in 6th grade, by their age on 31 March.',
      body: [
        { kind: 'two',
          leftH3: 'Who starts where',
          left: [
            'At 7 and 8, blocks and the Agent are enough: the child plans a build, drags the blocks and watches the result. At 9 and 10 the logic lessons and score-keeping games come into their own. At 11 and 12 a child is often ready to read the JavaScript and start typing short programs.',
            'INEI\'s 2026 household survey found that 68.2% of Peruvian children aged 6 to 11 used the internet in the second quarter of the year. Many of them play Minecraft; far fewer have ever opened the code behind a world.'
          ],
          rightH3: 'After Minecraft',
          right: [
            'Most children move on to typed Python, where the logic from this course carries straight over. Our <a class="ag-inline-link" href="/python-for-kids-peru">Python for kids in Peru</a> page describes the first year. Others go to Roblox Studio for bigger games, or to Scratch first if they are still very young.',
            'For a younger sibling, the Spanish-language page on <a class="ag-inline-link" href="/programacion-para-ninos-de-8-anos">coding at 8, in 3rd grade of primaria</a> compares Scratch, Roblox and robotics for that age.'
          ] }
      ]
    },
    {
      id: 'think',
      eyebrow: 'Thinking, not copying',
      h2: 'Will my child learn to think, or just follow tutorials?',
      lede: 'Think. Tutorials show one path through a problem; our mentors ask the child to plan the path, predict what the Agent will do and explain any difference.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Plan on paper first', p: 'Before a big build the child sketches it and counts the blocks. The lamp puzzle starts the same way, with a table drawn by hand.' },
          { h3: 'AI with care', p: 'Microsoft offers AI-themed worlds and a CyberSafe series about using "AI tools responsibly". Children here learn how AI behaves, never through adult chatbot accounts: Claude requires users to be 18, and ChatGPT needs a parent\'s permission under 18.' },
          { h3: 'Same quality anywhere', p: 'A child in Lima, Chiclayo or Cajamarca has the same mentors and the same course. Only the time on the clock changes.' }
        ] },
        { kind: 'p', mt: true, html: 'English is part of the thinking too. Each block in MakeCode is a short English phrase, and children are asked to read their program aloud as a sentence. "Repeat four times: move forward, place" is a plan, a piece of code and a piece of English all at once.' }
      ]
    },
    {
      id: 'clock',
      tint: 'tint',
      eyebrow: 'Peru time',
      h2: 'When can my child take Minecraft classes from Peru?',
      lede: 'At an hour you choose. Peru keeps UTC minus 5 all year and India UTC plus 5:30, so India is always ten and a half hours ahead. These rows convert a few Peru hours; they are examples, not a timetable.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru hours and the same moment in India (examples only)', head: ['Peru time', 'India time', 'A moment that suits some families'], rows: [
          ['08:00', '18:30', 'A holiday morning in January or February'],
          ['10:30', '21:00', 'Saturday mid-morning'],
          ['14:30', '01:00, next day', 'After lunch on a school day'],
          ['17:00', '03:30, next day', 'Once homework is finished'],
          ['20:30', '07:00, next day', 'Later evening for older children']
        ] },
        { kind: 'source', html: 'Time rules: IANA time zone database (America/Lima, UTC minus 5, no summer time; Asia/Kolkata, UTC plus 5:30). Conversions calculated by us.' },
        { kind: 'p', mt: true, html: 'Neither country moves its clocks, so a Tuesday class at 17:00 in Arequipa stays at 17:00 in every month. Read how to judge any live class on <a class="ag-inline-link" href="/online-coding-classes-for-kids-peru">online coding classes for kids in Peru</a>, or browse every Peru guide from the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> hub.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How can I tell my child is progressing in Minecraft coding?',
    lede: 'Ask them to show and explain. These are our own stages, used to place children and to plan the next lesson.',
    table: { numCols: [], caption: 'Our Minecraft coding stages for ages 7 to 12', head: ['Stage', 'What they can make', 'What they can say'], rows: [
      ['1. Commands', 'Make the Agent move, turn and place a block', '"The Agent goes forward three, then turns."'],
      ['2. Loops', 'Build a wall or tower with a repeat block', '"I changed 4 to 10 and the wall got longer."'],
      ['3. Memory', 'Use a variable to count blocks or score', '"The variable remembers how many it placed."'],
      ['4. Decisions', 'Make code check something before it acts', '"If there is a block in front, it turns."'],
      ['5. Logic', 'Combine and, or and not, and test every case', '"Both levers on was the case I forgot."'],
      ['6. Games', 'Design and finish a mini-game with score and a timer', '"This is my game, and this is how I tested it."']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child which case they forgot last time. A child who can answer is learning to test, not just to build.',
      'Stage 5 is the lamp lesson. It tends to make children check their own work without being asked.'
    ] },
    right: { h3: 'For young coders', ps: [
      'Before you run your code, say out loud what the Agent will do. Then watch whether you were right.',
      'If something works once, try it a different way. The bug is often hiding in the case you did not try.'
    ] }
  },

  catalogue: {
    eyebrow: 'More to explore',
    h2: 'Nine more courses for children who like to build',
    lede: 'Every course is live, in English, with one mentor throughout, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Alongside Minecraft', sub: 'Ages 6 to 10', courses: [
        { code: 'MCK / ALONG / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Stories and games from coloured blocks, from age 6.' },
        { code: 'MCK / ALONG / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'A long block path through games, apps and a little AI.' },
        { code: 'MCK / ALONG / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Puzzles and patterns that prepare for logic like the lamp.' }
      ] },
      { num: 'II', h3: 'Next game worlds', sub: 'Ages 8 to 14', courses: [
        { code: 'MCK / NEXT / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox in Luau', blurb: 'Typed scripts in Roblox Studio and a published game.' },
        { code: 'MCK / NEXT / 02', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot for kids and teens', blurb: 'A free game engine and its own scripting language.' },
        { code: 'MCK / NEXT / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps with blocks', blurb: 'Phone-style apps designed and built by the child.' }
      ] },
      { num: 'III', h3: 'Typed code', sub: 'Ages 9 to 12', courses: [
        { code: 'MCK / CODE / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The same logic, now typed in Python, with child-safe AI.' },
        { code: 'MCK / CODE / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI decides, and why it sometimes gets it wrong.' },
        { code: 'MCK / CODE / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Tables, patterns and proofs explored in Python from 10.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'A week of Minecraft classes, from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Term time', l: 'Afternoons in Peru, after school and homework, are the most common request.' },
      { time: 'Summer break', l: 'January to March frees up mornings; tell us the hour and we match a mentor to it.' },
      { time: 'Private lessons', l: 'One child, one mentor, at a time fixed around the family.' }
    ],
    cells: [
      { h3: 'World on screen', p: 'The child shares Minecraft and Code Builder; the mentor sees both.' },
      { h3: 'One mentor', p: 'The same teacher every week, who remembers last week\'s build.' },
      { h3: 'Simple English', p: 'Short instructions, each block named aloud as it is used.' },
      { h3: 'Build every class', p: 'Something new stands in the world before the lesson ends.' },
      { h3: 'Parent notes', p: 'A few lines after class on what was made and what was tricky.' },
      { h3: 'Your format', p: 'A group of fifteen to twenty, or private lessons.' }
    ]
  },

  projectsH2: 'What our older students build',
  projectsLede: 'Children who stay with coding move on to Python, apps and AI projects as teenagers. A few are shown here; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'Parents and students on Google, in their own words.',

  fees: {
    h2: 'Fees for Minecraft classes from Peru',
    lede: 'Fees are set in US dollars and taken by card each month. The soles amount depends on your bank\'s exchange rate when it processes the payment, so it may vary slightly.',
    free: ['A free first class in Minecraft Education', 'Your child gives the Agent its first commands', 'No card asked'],
    group: ['Fifteen to twenty children of a similar age', 'One mentor from start to finish', 'Two live classes a week', 'Monthly, with no long contract'],
    one: ['Just your child and the mentor', 'Projects chosen around your child\'s ideas', 'Class times set by you']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'Minecraft coding for kids: what parents in Peru ask',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our classes are live, online and in English only. The mentor speaks clearly and at your child\'s pace, adapts to their accent, and names each MakeCode block aloud while pointing to it, so a child still building their English can follow. Some of our Peru pages are written in Spanish for parents, but teaching is always in English.' },
      { q: 'Do we need to buy Minecraft Education?', a: 'Check with your child\'s school first. Microsoft says a child may already have access through a school Microsoft account. If not, Microsoft states that anyone with a Microsoft 365 account can purchase and use it, and families and homeschools can buy it through its commercial offer. We help set it up but do not sell licences.' },
      { q: 'Can my child use the Minecraft we already have at home?', a: 'Not for our course. The home game has no built-in coding tool. Minecraft Education includes Code Builder, which opens the MakeCode editor inside the game, and that is what the lessons use.' },
      { q: 'What age is Minecraft coding for?', a: 'Our course is for ages 7 to 12. A seven year old who reads short sentences can drag blocks and command the Agent. Older children in the course also read and change the JavaScript behind their blocks.' },
      { q: 'What device does my child need?', a: 'A computer or an iPad. Microsoft lists Minecraft Education for Windows, Mac, Chromebook, iPad, Android and iOS, but a phone screen is too small to see the code and the world together. A headset with a microphone makes the class much easier to hear.' },
      { q: 'Does Minecraft coding teach real programming?', a: 'Yes. Loops, variables, conditions, logic, events and functions are the same ideas used in Python or JavaScript. MakeCode can show a child\'s blocks as JavaScript or Python, and near the end of the course children read the JavaScript of their own programs.' },
      { q: 'What time are the classes in Peru?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India runs ten and a half hours ahead of Peru all year, so 17:00 in Peru is 03:30 the next morning in India.' },
      { q: 'Is a group or one to one better for Minecraft?', a: 'A group of fifteen to twenty children of similar age is lively and lets children borrow ideas from one another. One to one suits a child who is shy, younger than the group, very new to English or racing ahead. Families can switch after a month.' },
      { q: 'Will my child play with strangers online?', a: 'No. In our lessons the child works in their own world, with only the mentor watching the shared screen. Microsoft describes Minecraft Education as played with classmates on school-managed devices rather than public servers.' },
      { q: 'Are you linked with Microsoft, MINEDU or a school?', a: 'No. Modern Age Coders is an independent online school with no tie to Microsoft, Mojang, MINEDU or any Peruvian school. We award no Peruvian grades; children who finish receive a completion certificate issued by us.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for Minecraft families',
    lede: 'Useful next pages.',
    items: [
      { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes', p: 'Our main Minecraft course page.' },
      { href: '/learn-to-code-minecraft-mods', label: 'Coding Minecraft mods', p: 'How older children go further with mods.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids', p: 'Another block-based start for younger children.' },
      { href: '/ai-tools-age-guide', label: 'AI tools and age', p: 'The youngest age each AI tool allows.' },
      { href: '/we-teach-you-how-to-think', label: 'How to think', p: 'Why we ask before we tell.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live lesson described in full.' }
    ]
  },

  start: {
    h2: 'Book a free Minecraft coding class',
    lede: 'In the trial lesson your child opens Code Builder with a mentor, sends the Agent on its first short journey and builds a small wall with a loop. Watching that, the mentor gets a feel for how your child plans and how much spoken English they follow, and then suggests a course, a group or private lessons, and a time.',
    readFirst: 'Prefer to read first? Each week of the <a class="ag-inline-link" href="/courses/minecraft-coding-for-kids-course">Minecraft coding course</a> is listed on its page, and <a class="ag-inline-link" href="/how-we-teach">this description of our lessons</a> shows a class from beginning to end.',
    note: 'All teaching is live video from India, and only in English. A WhatsApp message in English gets the quickest reply.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Minecraft', links: [
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft classes' },
        { href: '/learn-to-code-minecraft-mods', label: 'Minecraft mods' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/online-coding-classes-for-kids-peru', label: 'Coding for kids, Peru' },
        { href: '/python-for-kids-peru', label: 'Python for kids, Peru' },
        { href: '/programacion-para-ninos-de-8-anos', label: 'Leer en español' }
      ] }
    ],
    bottomRight: 'Every row of the table'
  },

  personalityCss: `
.ag-root.ag-mck .ag-hero h1 { max-width: 15ch; letter-spacing: -0.02em; }
.ag-root.ag-mck .ag-capsule { border-left-width: 6px; }
.ag-root.ag-mck .ag-table caption { text-align: left; }
.ag-root.ag-mck .ag-code pre { line-height: 1.55; }
.ag-root.ag-mck .ag-steps li { line-height: 1.7; }
`,

  dossier: {
    curriculumAuthority: 'Minecraft Education pages for parents, What is, Licensing and Get started; MakeCode for Minecraft About, Boolean, Agent and CS Intro Conditionals pages; Minecraft EULA; MINEDU Edades normativas; CNEB; INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026; vendor terms for ChatGPT and Claude (content/ai-tool-age-audit.json); IANA tz database. Read 9 November 2026.',
    localProject: 'An original logic lesson: a corridor lamp worked by two levers; the first rule "a or b" is right on three rows of four and wrong when both levers are on (MakeCode\'s own definition of or explains why); the fixed rule (a or b) and not (a and b) is checked against every row by a short Python program and turns out to equal a != b. Lesson family: truth tables and testing every case.',
    requiredMentions: ['rows where first_try is wrong: [(True, True)]', 'two_way equals a != b on every row: True', 'a rule is only proved when every row of the table agrees', 'Minecraft and Minecraft Education compared, in Microsoft\'s words (2026)', 'may already have access through their school account', 'Millions of educators and students use Minecraft Education in 115 countries', 'or if both A and B are true', 'The agent is your assistant who helps you do things in Minecraft.', 'Every row of the table'],
    sources: [
      { claim: 'Minecraft and Minecraft Education compared (purpose, licence, classroom tools incl. Code Builder for MakeCode, school-managed devices not public servers); a child may already have access through a school account; families and homeschools can buy through the commercial offer.', url: 'https://education.minecraft.net/en-us/get-started/parents' },
      { claim: 'Available for Windows, Mac, Chromebook, iPad, Android and iOS; over 600 standards-aligned lessons.', url: 'https://education.minecraft.net/en-us/discover/what-is-minecraft' },
      { claim: 'Anyone with a Microsoft 365 account can purchase and use Minecraft Education.', url: 'https://education.minecraft.net/en-us/licensing' },
      { claim: 'Millions of educators and students in 115 countries.', url: 'https://education.minecraft.net/en-us/get-started' },
      { claim: 'MakeCode for Minecraft is a code editor to build mods and programs; Blocks, Python and JavaScript.', url: 'https://minecraft.makecode.com/about' },
      { claim: 'Boolean and, or, not definitions.', url: 'https://minecraft.makecode.com/blocks/logic/boolean' },
      { claim: 'The agent is your assistant.', url: 'https://minecraft.makecode.com/reference/agent' },
      { claim: 'In-game currency purchases only for those who have reached the age of majority.', url: 'https://www.minecraft.net/en-us/terms/r1' },
      { claim: '68.2% of children 6 to 11 used the internet, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'CNEB competency Diseña y construye soluciones tecnológicas para resolver problemas.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Minecraft Education prices: not printed (brief rule 5 and the one-currency rule).',
      'A count of Peruvian schools using Minecraft Education or Microsoft 365: no primary source; the page only says to ask the school.',
      'That Minecraft coding raises maths marks: no source; not claimed.',
      'Any link with Microsoft, Mojang, MINEDU or a school: none, and the page says so.'
    ]
  }
};
