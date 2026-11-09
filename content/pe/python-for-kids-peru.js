// SHIP: market | Python for kids in Peru, in English: Python's own words are English, a first year by grade | nested loops and counting: a star pyramid, off by one from range(0), odd numbers sum to a square
'use strict';
// Python for kids in Peru (ag- English subject door, Peru cluster row PE008, P3, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Audience: parents in Peru of children of about 9 to 12 (4° to 6° de primaria, 1° de secundaria) who searched "python
// para niños" or "python for kids" (KEYWORDS.md section 1, Python row; rows.tsv PE008 "python para niños").
// Spine (different from the Spanish twin curso-de-python-para-ninos-peru, which covers readiness signals, INEI internet by
// age, AI tool ages and a dice lesson): Python's 35 reserved words are English words, so a child learning Python in English
// learns one vocabulary, not two; what primaria gives in English and maths (CNEB hours); what a first Python year looks
// like; an original nested-loop lesson. Primary-source table: the reserved-word list in the Python Language Reference.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/python-for-kids-peru/, fetched
// 2026-11-09 with curl; facts-school raw copies fetched 2026-11-08; every quote grepped in the raw text):
//  Python Language Reference 2.3.1 Keywords (docs.python.org/3/reference/lexical_analysis.html, lexical.html): "The following
//    names are used as reserved words, or keywords of the language, and cannot be used as ordinary identifiers. They must be
//    spelled exactly as written here: False await else import pass None break except in raise True class finally is return
//    and continue for lambda try as def from nonlocal while assert del global not with async elif if or yield" (35 words;
//    keyword.kwlist on Python 3.14.8 also has 35). "Soft Keywords ... Added in version 3.10": match, case, _, type, lazy.
//  Built-in types, range (stdtypes.html): "If the step argument is omitted, it defaults to 1 . If the start argument is
//    omitted, it defaults to 0 ."
//  Ley 28044, Ley General de Educación (FACTS 5): "La Educación Primaria constituye el segundo nivel de la Educación Básica
//    Regular y dura seis años." D.S. 011-2012-ED (FACTS 10): "Atiende a niños y niñas a partir de los 6 años de edad."
//  MINEDU Edades normativas (FACTS 13, 14): "Se considera la edad normativa al 31 de marzo de cada año"; ages 6 to 11 for
//    1° to 6° de primaria, 12 for 1° de secundaria.
//  CNEB plan de estudios, primaria (FACTS 57; Lima module header): "Matemática 5 5 4 4 4 4 Comunicación 5 5 4 4 4 4 Inglés 2
//    2 3 3 3 3"; "Total de horas 30 30 30 30 30 30"; "horas pedagógicas (45 minutos)"; English in primaria "dependiendo de la
//    contratación de estos docentes"; competency 28 transversal (FACTS 33).
//  MINEDU press release, 16 March 2026 (FACTS 17): "53 631 colegios de Educación Básica Regular de todo el país volvieron a
//    abrir sus puertas para recibir a 6 225 000 estudiantes, en la apertura del año escolar 2026."
//  AI tool ages, content/ai-tool-age-audit.json: ChatGPT minimum 13 with a parent's permission under 18; Claude 18+.
//  Course facts (content/courses/data): python-ai-kids-masterclass "8-10 months (32-40 weeks)", "Complete beginner, ages 9 to
//    12"; kids-coding-blocks-masterclass ages 6 to 12; maths-through-coding "Ages 10-15 (grades 5-10)", "9 months (36 weeks)".
//  Time: tzdata America/Lima UTC-5 (no DST), Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations: 4 x 45 = 180 and 5 x 45 = 225 minutes of maths a week; 3 x 45 = 135 minutes of English a week;
// 1 + 3 + 5 + 7 = 16 = 4 x 4; time conversions.
// Code (scratchpad pe/e2/pyki_v1.py, pyki_v2.py, python3 -I 3.14.8): v1 prints an empty line, then "*", "**", "***";
// v2 prints "   *", "  ***", " *****", "*******", "Stars used: 16", "Height times height: 16".
// Lesson family: nested repetition and counting; range() starts at 0 unless told otherwise (off by one), spaces are
// counted like stars, and the odd numbers add up to a square.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'height = 4',
  'for row in range(height):',
  '    print("*" * row)'
].join('\n');

const V2 = [
  'height = 4',
  'total = 0',
  'for row in range(1, height + 1):',
  '    spaces = " " * (height - row)',
  '    stars = "*" * (2 * row - 1)',
  '    print(spaces + stars)',
  '    total = total + len(stars)',
  'print("Stars used:", total)',
  'print("Height times height:", height * height)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Python for kids' },
  slug: 'python-for-kids-peru',
  code: 'pyki',
  accent: '#147175',
  accentRationale: 'Python for kids, Peru: a bright lagoon teal #147175, the colour of the water at the Huacachina oasis, lighter than the adult Python page to suit a children\'s door; contrast passes 4.5 on all three papers (checked by the build gate)',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Python for kids in Peru',
  title: 'Python for Kids in Peru: Live Online Classes in English',
  description: 'Python for children in Peru aged 9 to 12, taught live online in English: when to start, what primaria leaves out, a real first lesson, and how classes run.',
  ogDescription: 'Live Python classes in English for Peruvian children of 9 to 12: Python\'s own keywords are English words, what primaria gives in maths and English each week, what a first Python year looks like, and a star-pyramid lesson that runs.',
  twitterDescription: 'Python for kids in Peru, taught live online in English, at any hour that suits your family.',
  pageName: 'Python for Kids in Peru',
  webPageDescription: 'A guide for parents in Peru choosing a first Python course for a child of 9 to 12, built from the Python Language Reference, Ley 28044, MINEDU normative ages and the CNEB plan of studies, with an original Python lesson on loops and counting.',
  courseDescription: 'Live online Python classes taught in English for children in Peru aged 9 to 12: typed Python through games, drawings, puzzles and small AI projects, in a group of children their own age or one to one, at a time the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Python for kids',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#age', label: 'Right age' },
    { href: '#words', label: 'English words' },
    { href: '#school', label: 'Primaria' },
    { href: '#lesson', label: 'First lesson' },
    { href: '#times', label: 'Class times' }
  ],
  eyebrow: 'Peru &middot; Python for children &middot; Ages 9 to 12',
  h1: 'Python for kids in Peru, taught live in English',
  lede: 'Python is a real programming language, the same one engineers use, and children of about nine can learn it if the lessons are built for them. For a child in Peru there is a bonus most parents do not expect: Python\'s own commands are English words, so a child who learns it in English learns one vocabulary instead of two. This page covers the right age to start, the English inside Python, what primaria does and does not teach, a first lesson you can run tonight, and how classes fit a Peruvian day.',
  secondaryCta: { href: '#lesson', label: 'Try the first lesson' },
  wa: 'Hello Modern Age Coders, my child is in primaria in Peru and we are interested in Python classes in English. Could we book a free class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; every class live, online and in English',
  spec: [
    ['Ages', '9 to 12, grouped by age'],
    ['Younger?', 'Scratch first, from 6'],
    ['Starts with', 'Drawings, games and puzzles'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Time in Peru', 'Whatever suits your family'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'For parents in a hurry',
  capsule: 'Modern Age Coders teaches Python to children in Peru aged about 9 to 12 in live online classes in English. A mentor based in India teaches in real time, in a group of children the same age or one to one, at a time the family chooses in Peru time. Children type real Python from the start, through drawings, games, puzzles and small AI projects, and younger children begin with Scratch. Python\'s commands are English words, so the language of the lesson and the language of the code are the same.',

  picks: {
    eyebrow: 'Choose by age',
    h2: 'Three first courses for children in Peru',
    lede: 'Typed Python suits most children from about nine. Younger children, and those who are not yet comfortable on a keyboard, start with blocks.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PYKI / 01', title: 'Python and AI for Kids', note: 'For complete beginners aged 9 to 12, over eight to ten months. Turtle drawings, games and small smart projects, with each new idea typed, run and explained before the next one arrives.' },
      { course: 'maths-through-coding', code: 'PYKI / 02', title: 'Maths through coding', note: 'For children of 10 and over who like numbers, across nine months. Patterns, fractions and graphs worked out in Python, so school maths becomes something they test rather than memorise.' },
      { course: 'kids-coding-blocks-masterclass', code: 'PYKI / 03', title: 'Coding for Kids (blocks first)', note: 'Ages 6 to 12, in batches by age. Scratch comes first and Python follows when the child is ready, so a seven year old has a path to the same language later on.' }
    ]
  },

  sections: [
    {
      id: 'age',
      eyebrow: 'The right age',
      h2: 'What age can a child start learning Python?',
      lede: 'Usually around nine, which in Peru is 4th grade of primaria. The deciding factor is not age on its own but three skills: reading a short instruction, typing without hunting for every key, and staying with a puzzle for ten minutes.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ages 6 to 8', p: 'Blocks first. Scratch lets a child build stories and games by dragging pieces, with almost no typing. The ideas are the same ones Python uses (order, repetition, choices), so nothing learnt is wasted.' },
          { h3: 'Ages 9 to 10', p: 'Most children are ready for typed Python here, especially with drawings, where every line of code makes something visible on screen. Short programs, a lot of trying, and quick wins.' },
          { h3: 'Ages 11 to 12', p: 'Children of this age can handle longer programs, lists of data and their first small AI projects. Many go on to the teenage Python course at 13 with a year of real code behind them.' }
        ] },
        { kind: 'p', mt: true, html: 'Peruvian school uses the same ages as a guide. MINEDU sets a "normative age" for each grade, measured on 31 March of the school year: a child of 6 on that date belongs in 1st of primaria, a child of 9 in 4th and a child of 11 in 6th. Primaria itself lasts six years under Ley 28044, the General Education Law, and its regulation says it serves children from the age of six.' },
        { kind: 'p', html: 'If you are not sure, the free first class settles it. The mentor gives your child a small puzzle, watches how they read it, type and think, and then tells you honestly whether Python or blocks is the better place to begin. Families who would rather read in Spanish can see our <a class="ag-inline-link" href="/curso-de-python-para-ninos-peru">curso de Python para niños</a> page, and parents of younger children our guide to <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'words',
      tint: 'tint',
      eyebrow: 'English inside Python',
      h2: 'Is Python in English? Which English words will my child learn?',
      lede: 'Yes. Python has 35 reserved words, the commands a program is built from, and every one is an English word or a short form of one. A child who learns Python in English meets each word once, with its everyday meaning and its programming meaning together.',
      body: [
        { kind: 'table', numCols: [], caption: 'Python\'s 35 reserved words, grouped by when our young learners usually meet them', head: ['When children meet them (our grouping)', 'Reserved words in the Python Language Reference', 'Everyday English behind them'], rows: [
          ['First weeks: yes, no, nothing', 'True, False, None', 'True, false, none at all'],
          ['First weeks: choices', 'if, elif, else, and, or, not', 'If, else if, otherwise, and, or, not'],
          ['First month: repeating', 'for, while, in, break, continue, pass', 'For each, while, inside, stop, carry on, skip'],
          ['First term: own commands', 'def, return, import, from, as', 'Define, give back, bring in, from, as'],
          ['Later: checking and errors', 'try, except, finally, raise, assert, is', 'Try, except, at the end, raise, make sure, is'],
          ['Later: bigger programs', 'class, lambda, global, nonlocal, del, with, yield', 'Kind of thing, quick rule, everywhere, nearby, delete, together with, hand over'],
          ['Teen years and beyond', 'async, await', 'At different times, wait for']
        ] },
        { kind: 'source', html: 'Source: Python Software Foundation, The Python Language Reference, section 2.3.1 "Keywords", which lists the 35 reserved words and says they "must be spelled exactly as written here"; read on 9 November 2026. A few more words, such as match and case, are "soft keywords" that only act as commands in certain places. The grouping by learning stage and the plain-English column are ours.' },
        { kind: 'two', mt: true,
          leftH3: 'Why this matters for a child in Peru',
          left: [
            'A child taught Python in Spanish still types <code>while</code>, <code>if</code> and <code>return</code>, because the language only understands English. The teacher says "mientras" and the screen says <code>while</code>, so the child learns two words for one idea and links neither to real English.',
            'In our classes, the mentor says "while the score is less than ten" and the child types exactly that idea. The spoken word and the typed word are the same, and a few hundred repetitions later they are simply part of the child\'s English.'
          ],
          rightH3: 'What a parent will notice',
          right: [
            'Children start reading error messages aloud, in English, and guessing what they mean. "Name is not defined" becomes a clue rather than a wall.',
            'They also learn that spelling and capitals matter. <code>True</code> works and <code>true</code> does not, which the Language Reference makes plain: the words "must be spelled exactly". That kind of precision helps with English spelling too.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'What primaria gives',
      h2: 'Does primaria in Peru teach coding or enough English for this?',
      lede: 'Primaria in Peru teaches no coding as a subject and, on paper, two or three English periods a week. Maths gets more time. Here is what the national plan of studies sets out, and what that means for a Python class.',
      body: [
        { kind: 'two',
          leftH3: 'Maths and English on the timetable',
          left: [
            'The CNEB, Peru\'s national curriculum, gives primaria 30 teaching periods of 45 minutes a week. Maths has 5 periods a week in grades 1 and 2 and 4 in grades 3 to 6, which works out by our arithmetic at 225 and 180 minutes. English has 2 periods in the first two grades and 3 after that, about 135 minutes a week from 3rd grade.',
            'Even those English hours depend on the school. The CNEB says English in primaria is phased in depending on whether the school has hired English teachers, so some children meet much less English than the table promises, and children at bilingual schools meet far more.'
          ],
          rightH3: 'And no coding subject',
          right: [
            'Nowhere in the primaria plan is there an area called computing or programming. Digital skills sit in a competency that every subject is supposed to share, about working in virtual environments, and it names no programming language.',
            'That leaves a gap for children who are curious about how games and apps are made. A Python class fills it, and because the class is in English, it also adds an hour or two of English with a clear purpose: the program only runs if the instruction was understood.'
          ] },
        { kind: 'p', mt: true, html: 'Python classes are extra, never a replacement for school. When the 2026 school year opened on 16 March 2026, MINEDU counted 6,225,000 pupils in 53,631 schools of regular basic education; the national curriculum applies to all of them, and our classes sit alongside it in the hours the family chooses. Parents of ten year olds may also like our guide to <a class="ag-inline-link" href="/programacion-para-ninos-de-10-anos">programación para niños de 10 años</a>.' }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A first lesson',
      h2: 'What does a first Python lesson look like? A star pyramid',
      lede: 'This is a lesson we teach to children of about 10 in their first weeks of Python. It uses a loop, which repeats a line of code, and asks the child to count carefully, which turns out to be the hard part.',
      body: [
        { kind: 'two',
          leftH3: 'The challenge',
          left: [
            'Draw a pyramid of stars four rows tall, with one star at the top and the rows getting wider. Most children start with Version 1: repeat four times, and each time print a row of stars as long as the row number.',
            'They run it and see two surprises. The first line is empty, and the "pyramid" leans to one side like a staircase.'
          ],
          rightH3: 'What went wrong',
          right: [
            'The empty line comes from <code>range(height)</code>, which counts 0, 1, 2, 3. Python\'s documentation says that if you leave out where to start, it <strong>starts at 0</strong>, so the first row has zero stars. Counting from zero is one of the first things every programmer has to learn.',
            'The leaning comes from forgetting the spaces. A pyramid needs empty space on the left of each row, and that space has to be counted too.'
          ] },
        { kind: 'code', label: 'Version 1: a staircase with an empty first step', lang: 'Python', code: V1, note: 'It prints an empty line, then <code>*</code>, then <code>**</code>, then <code>***</code>: four lines, but only three rows of stars.' },
        { kind: 'code', label: 'Version 2: count from 1, add the spaces, keep a total', lang: 'Python', code: V2, note: 'It prints a centred pyramid of 1, 3, 5 and 7 stars, then <code>Stars used: 16</code> and <code>Height times height: 16</code>.' },
        { kind: 'p', mt: true, html: 'The last two lines are where the maths appears. One plus three plus five plus seven is sixteen, and so is four times four. We ask the child to change <code>height</code> to 5, then 6, and predict the total before running it each time. Most notice by the third try that the odd numbers always add up to a square, and some can explain why by drawing the pyramid as rings of stars. That is the moment a child stops copying code and starts thinking with it.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Without a computer.</strong> Draw the pyramid on squared paper and count the empty squares on the left of each row. Write the numbers down.',
          '<strong>Predict.</strong> Before running Version 1, say aloud, in English, how many lines it will print and what the first one will look like.',
          '<strong>Fix one thing at a time.</strong> First make the empty line disappear, then add the spaces. Run the program after each change.',
          '<strong>Make it yours.</strong> Ask the user for the height with <code>input()</code>, or draw the pyramid upside down. Then explain the change to a parent in two sentences.'
        ] }
      ]
    },
    {
      id: 'safe',
      eyebrow: 'Thinking, not copying',
      h2: 'Will my child just copy answers from AI?',
      lede: 'Not in our classes. Children solve each puzzle themselves, explain it to the mentor, and only then see other ways to do it. They do not use adult chatbot accounts.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Think, then type', p: 'Every new program begins with a prediction: what will happen when it runs? A wrong prediction is useful, because finding out why is exactly the skill we are building.' },
          { h3: 'Age rules respected', p: 'ChatGPT\'s own terms set a minimum age of 13 and require a parent\'s permission under 18, and Claude is for adults of 18 and over. Children of 9 to 12 learn without these tools in class.' },
          { h3: 'Same standard everywhere', p: 'A child in Piura, Lima or Puno gets the same lesson plan, the same patient mentor and the same insistence on understanding. Where you live changes the hour on the clock, not the depth of the class.' }
        ] },
        { kind: 'p', mt: true, html: 'When children are older and ready, we teach how AI works from the inside, with small models they train themselves in Python. The habit we protect from the first week is the one shown in the pyramid lesson: count, predict, check, and never accept a result you cannot explain.' }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Class times',
      h2: 'What time would classes be in Peru?',
      lede: 'At an hour you choose. Peru keeps UTC minus 5 all year and India keeps UTC plus 5:30, so India is always 10 hours 30 minutes ahead, in the school term and in the summer holidays alike. These rows only convert clocks; they are not fixed class times.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Peru times for a child\'s class, converted to India time', head: ['Peru time', 'India time', 'A typical fit'], rows: [
          ['09:30', '20:00', 'A Saturday morning, or a summer-holiday weekday'],
          ['11:00', '21:30', 'Late morning before an afternoon school shift'],
          ['14:30', '01:00, next day', 'After a morning school shift'],
          ['17:00', '03:30, next day', 'After school, before dinner']
        ] },
        { kind: 'source', html: 'Source: IANA time zone database, America/Lima and Asia/Kolkata; Peru has kept the same clock all year since 1994 and India does not change its clocks either. The conversions are our own.' },
        { kind: 'p', mt: true, html: 'Children need a laptop or desktop with a keyboard, a steady connection and, ideally, a headset with a microphone, so they can hear the mentor clearly and answer. A tablet without a keyboard makes typed Python slow and frustrating. A parent nearby for the first class helps, especially with setup; after that most children manage alone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Steps',
    h2: 'Five steps in a child\'s first Python year',
    lede: 'Our own steps, used to place children in the right group and to show parents real progress in code and in English.',
    table: { numCols: [], caption: 'A first Python year for children of 9 to 12 (our steps)', head: ['Step', 'In Python, the child can', 'In English, the child can'], rows: [
      ['1. Draw', 'Move a turtle, change colours, draw shapes', 'Follow "forward", "left", "repeat" by ear'],
      ['2. Repeat', 'Use loops to draw patterns and pyramids', 'Say how many times something happens'],
      ['3. Decide', 'Use if and else in a quiz or a game', 'Explain a rule with "if" and "otherwise"'],
      ['4. Remember', 'Keep scores and lists in variables', 'Read an error message aloud and guess it'],
      ['5. Build', 'Finish a small game or a simple AI project', 'Present the project in a few sentences']
    ] },
    left: { h3: 'For parents', ps: [
      'The pyramid lesson sits at step 2. A child who reaches step 3 starts asking "what if?" about everything, which is a good sign.',
      'Our updates describe what your child made and explained, not how many hours they sat at the screen.'
    ] },
    right: { h3: 'For children', ps: [
      'If the program does something you did not expect, that is not a failure. It is a clue.',
      'Count slowly. Most bugs are a number that is one too big or one too small.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for children around Python age',
    lede: 'All taught live in English, in groups of children the same age or one to one, with a mentor who stays with the child.',
    bands: [
      { num: 'I', h3: 'Before Python', sub: 'Ages 6 to 9', courses: [
        { code: 'PYKI / PRE / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Puzzles and logic that train the thinking behind code, ages 7 to 12.' },
        { code: 'PYKI / PRE / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Blocks inside a world children already love, ages 7 to 12.' },
        { code: 'PYKI / PRE / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI works and where it goes wrong, for ages 8 to 14.' }
      ] },
      { num: 'II', h3: 'Alongside Python', sub: 'Ages 9 to 12', courses: [
        { code: 'PYKI / WITH / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Games built and scripted in Luau by the child.' },
        { code: 'PYKI / WITH / 02', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'Real websites from the first page up, ages 9 to 12.' },
        { code: 'PYKI / WITH / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'A second typed language through games and puzzles, ages 9 to 12.' }
      ] },
      { num: 'III', h3: 'After the first year', sub: 'Ages 10 and up', courses: [
        { code: 'PYKI / NEXT / 01', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot game development', blurb: 'GDScript, which looks a lot like Python, for ages 10 to 17.' },
        { code: 'PYKI / NEXT / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The full Python course for learners of 13 to 18.' },
        { code: 'PYKI / NEXT / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Algorithms for teenagers ready to think harder.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live Python classes work for a child in Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'Peruvian mornings fall in the Indian evening, an easy hour for both sides.' },
      { time: 'After school', l: 'Afternoon and evening classes in Peru are possible too; say which hour you need.' },
      { time: '1-on-1', l: 'A private class for a child who needs a slower start or a faster one.' }
    ],
    cells: [
      { h3: 'Children of one age', p: 'A nine year old never shares a group with teenagers.' },
      { h3: 'Typing every class', p: 'The child writes the code; the mentor guides.' },
      { h3: 'Patient English', p: 'Simple words, repeated and shown on screen.' },
      { h3: 'One familiar mentor', p: 'The same teacher, week after week.' },
      { h3: 'Small homework', p: 'A short challenge to try before the next class.' },
      { h3: 'Group or private', p: 'Fifteen to twenty children, or one child alone.' }
    ]
  },

  projectsH2: 'Where children\'s Python can lead',
  projectsLede: 'Children who keep coding into their teens build serious work. Here are a few projects by our older students, and many more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents\' Google reviews, reproduced word for word.',

  fees: {
    h2: 'Fees for Python classes for children in Peru',
    lede: 'We charge in US dollars, by card, once a month. Your bank changes the amount into soles at its own rate when it pays, so the total on your statement may vary a little from month to month.',
    free: ['A free trial class for your child', 'A small puzzle and a first program', 'No card details needed'],
    group: ['Children of the same age, fifteen to twenty', 'One mentor all the way through', 'Two live classes each week', 'Monthly, with no long contract'],
    one: ['Your child and a mentor, alone', 'A pace that fits your child', 'Hours your family picks']
  },

  faq: {
    eyebrow: 'Parents in Peru ask',
    h2: 'Python for kids in Peru: questions from parents',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All our classes are live online in English, and only in English. Mentors speak slowly and clearly, adjust to your child\'s pace and accent, and show each step on screen. Python\'s commands are English words anyway, so a child learning it in English hears and types the same words.' },
      { q: 'What age is right for Python?', a: 'Around 9, which is usually 4th grade of primaria in Peru. Children need to read short instructions and type without too much trouble. Younger children, or those not ready to type, start with Scratch blocks and move to Python later.' },
      { q: 'My child\'s English is basic. Will they understand?', a: 'Usually, yes, if they can follow simple spoken instructions. Each step is shown on the shared screen, and the mentor repeats in simpler words. For a child with very little English we suggest one-to-one classes at first. The free class will show you.' },
      { q: 'Is Python too hard for a nine year old?', a: 'Not when the lessons are built for children. We start with drawings and short programs that show a result straight away, add one idea at a time, and only move on when the child can explain what they did.' },
      { q: 'When are the classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Peru all year, so 09:30 in Peru is 20:00 in India.' },
      { q: 'Does primaria in Peru teach programming?', a: 'Not as a subject. The national curriculum has no computing area in primaria; digital skills are shared across subjects. Our classes add coding alongside school, never instead of it.' },
      { q: 'Will my child use ChatGPT or other AI tools?', a: 'Not adult accounts. ChatGPT\'s terms set a minimum age of 13 with a parent\'s permission under 18, and Claude is for users of 18 and over. Children learn to solve problems themselves first, and later learn how AI works by building small models in Python.' },
      { q: 'What does my child need at home?', a: 'A laptop or desktop computer with a keyboard, a steady internet connection and ideally a headset with a microphone. Python is free, and the mentor helps set it up in the first class. A phone or a tablet without a keyboard is not enough for typing code.' },
      { q: 'Do children get a certificate?', a: 'Yes, our own certificate of completion when they pass the course\'s final assessment. It is from Modern Age Coders, not a school or ministry qualification, and we are not connected with MINEDU or any school in Peru.' },
      { q: 'How do we pay?', a: 'By card, in US dollars, monthly. Your bank converts the payment into soles, so the amount on your statement can differ slightly between months. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for parents in Peru thinking about Python.',
    items: [
      { href: '/curso-de-python-para-ninos-peru', label: 'Curso de Python para niños', p: 'Our Spanish page on the same classes.' },
      { href: '/python-for-9-year-olds', label: 'Python at nine', p: 'What a nine year old can do in Python.' },
      { href: '/python-for-11-year-olds', label: 'Python at eleven', p: 'Projects that suit the last years of primaria.' },
      { href: '/python-projects-for-kids', label: 'Python projects for kids', p: 'Ideas children can build at home.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'The minimum age set for each AI tool.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'All our pages for families in Peru.' }
    ]
  },

  start: {
    h2: 'Book a free Python class for your child',
    lede: 'In the free class your child draws something with Python and solves a small puzzle. The mentor watches how they read, type and think, and afterwards suggests Python or blocks, a group or one to one, and an hour that fits your family in Peru.',
    readFirst: 'Would you like to know more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a class from start to finish, and the <a class="ag-inline-link" href="/courses">course list</a> shows each syllabus.',
    note: 'Every class is live on video, led from India, in English only. You can also write to us on WhatsApp in English for a quick answer.',
    formNote: 'Free, without a card or any commitment.'
  },

  footer: {
    cols: [
      { h4: 'Python for children', links: [
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/python-for-12-year-olds', label: 'Python at twelve' },
        { href: '/python-games-for-kids', label: 'Python games for kids' },
        { href: '/python-turtle-not-working', label: 'Turtle not working?' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/curso-de-python-para-ninos-peru', label: 'Python para niños' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación en inglés' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Count from zero, then check'
  },

  personalityCss: `
.ag-root.ag-pyki .ag-hero h1 { max-width: 19ch; }
.ag-root.ag-pyki .ag-capsule { border-left-width: 7px; }
.ag-root.ag-pyki .ag-section-head h2 { max-width: 26ch; letter-spacing: -0.01em; }
.ag-root.ag-pyki .ag-table td:nth-child(2) { font-weight: 600; }
.ag-root.ag-pyki .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Python Software Foundation, The Python Language Reference (2.3.1 Keywords, soft keywords) and built-in types (range); Ley 28044 and D.S. 011-2012-ED; MINEDU normative ages; CNEB plan of studies for primaria; MINEDU press release of 16 March 2026; vendor age terms via our AI tool age audit; IANA tz database. Read 8 and 9 November 2026.',
    localProject: 'An original Python lesson for children in Peru: a four-row star pyramid where range(height) prints an empty first line and a leaning staircase (*, **, ***); the fix counts from 1, adds height - row spaces and 2 * row - 1 stars, then prints Stars used: 16 and Height times height: 16, so the child discovers that odd numbers sum to a square. Plus paper, prediction and extension steps. Lesson family: nested repetition and counting from zero.',
    requiredMentions: ['Stars used: 16', 'Height times height: 16', 'a staircase with an empty first step', 'Python has 35 reserved words', 'the odd numbers always add up to a square', 'That kind of precision helps with English spelling too', 'Count from zero, then check', 'the program only runs if the instruction was understood'],
    sources: [
      { claim: 'Python\'s 35 reserved words, spelled exactly; soft keywords such as match and case.', url: 'https://docs.python.org/3/reference/lexical_analysis.html#keywords' },
      { claim: 'range() starts at 0 when the start is omitted.', url: 'https://docs.python.org/3/library/stdtypes.html#range' },
      { claim: 'Primaria lasts six years (Ley 28044).', url: 'https://cdn.www.gob.pe/uploads/document/file/4049722/Ley%2028044%20-%20Ley%20General%20de%20Educaci%C3%B3n%20.pdf' },
      { claim: 'Primaria serves children from age 6 (D.S. 011-2012-ED).', url: 'https://cdn.www.gob.pe/uploads/document/file/104990/_0011-2012-ED_-_14-03-2013_02_34_14_-d.s_011-2012-ed.pdf' },
      { claim: 'Normative age measured on 31 March; ages by grade.', url: 'https://www.gob.pe/institucion/minedu/informes-publicaciones/2742610-edades-normativas' },
      { claim: 'Primaria weekly periods: maths 5 5 4 4 4 4, English 2 2 3 3 3 3, total 30; 45-minute periods; English depends on hiring; competency 28 transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: '2026 school year opened with 6,225,000 pupils in 53,631 schools.', url: 'https://www.gob.pe/institucion/minedu/noticias/1366423-ministro-de-educacion-inaugura-ano-escolar-2026-en-colegios-publicos' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A "best age" for Python from any study: no primary source; the page gives our own guidance and labels it.',
      'Counts of Peruvian children learning Python: none published; none given.',
      'Any connection with MINEDU or a Peruvian school: none; the page says so.',
      'Spanish-language teaching: not offered; the page says so.',
      'Grade or school-result promises: none made.'
    ]
  }
};
