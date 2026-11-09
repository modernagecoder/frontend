// SHIP: market (en age door, primaria 6 to 12) | primaria grade by grade: age at 31 March, cycle, English hours, a start | a dictionary as a rule table: rock, paper, scissors, and the misspelt word an if-chain hides
'use strict';
// Coding classes in English for Peruvian kids (ag- English age door, row PE039, hubGroup ages, code cep).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Audience: parents in Peru, mostly Spanish-speaking, of children in primaria (6 to 12). Spine (not the Spanish pages'):
// the six primaria grades one by one, from MINEDU's normative ages and the CNEB weekly hours, with where a child usually
// starts with us (ours), then how little English a child needs on day one.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-classes-in-english-for-peruvian-kids/;
// every quote below string-matched in the raw text on 9 November 2026):
//  - MINEDU, Edades normativas (edades-normativas): "Se considera la edad normativa al 31 de marzo de cada año."; PDF
//    table (edades-normativas-pdf): "III 1er grado 2do grado IV 3er grado 4to grado V 5to grado 6to grado" against
//    "6 años 7 años 8 años 9 años 10 años 11 años 12 años" (read in order: 1° = 6 ... 6° = 11).
//  - D.S. 011-2012-ED (ds011-2012-pdf, OCR): Primaria "Atiende a niños y niñas a partir de los 6 años de edad."
//  - Ley 28044 (ley28044-pdf): primaria "dura seis años".
//  - CNEB, Tabla N.° 6, primaria weekly hours (cneb): "Matemática 5 5 4 4 4 4 Comunicación 5 5 4 4 4 4 Inglés 2 2 3 3 3 3",
//    "Ciencia y tecnología 3 3 4 4 4 4", "Total de horas 30 30 30 30 30 30"; English "será progresiva dependiendo de la
//    contratación de estos docentes" (paraphrased on the page, not quoted).
//  - ENLA 2025 (n-enla2026-200mil): applied "entre el 11 y el 13 de noviembre" (2025); "4.° grado de primaria en Lectura y
//    Matemática". ENLA 2024 (n-enla2024): "532 000 escolares de 4.º grado de primaria de 18 112 instituciones".
//  - MINEDU, 14 Oct 2026 (n-mat2027): 2027 materials for "2.7 millones a escolares de primaria".
//  - MINEDU robotics document (minedu-robotica-pdf): "dota de Kits LEGO Wedo a casi el 100% de Instituciones Educativas de
//    Gestión Pública de Educación Primaria" (2009 and 2010).
//  - INEI, TIC en los Hogares II Trimestre 2026 (inei_tic_iit2026.txt): "el uso de Internet fue menor entre los niños de 6
//    a 11 años (68,2%)"; "el 36,4% de los hogares del país disponía de al menos una computadora".
//  - ScratchJr home page (scratchjr_home.html, meta description): "young children (ages 5-7)".
//  - Time: America/Lima UTC-5, no DST; India UTC+5:30 (timezone.tsv).
// Our own calculations (python3 -I, scratchpad pe/e7/cep_v1.py to v3.py), printed output: v1 "sissors vs paper -> player
// 2" and "Rock vs scissors -> player 2"; rule table "rock beats scissors", "Words the game knows: 3"; v3 "sissors vs paper
// -> I do not know the word sissors" and "Rock vs scissors -> player 1".
// Lesson family: a dictionary used as a rule table (key beats value), read aloud as English sentences, with lower() and
// an "in" check so a misspelt word is reported instead of silently losing.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'def judge(a, b):',
  '    if a == b:',
  "        return 'draw'",
  "    if a == 'rock' and b == 'scissors':",
  "        return 'player 1'",
  "    if a == 'paper' and b == 'rock':",
  "        return 'player 1'",
  "    if a == 'scissors' and b == 'paper':",
  "        return 'player 1'",
  "    return 'player 2'",
  '',
  "rounds = [('rock', 'scissors'), ('paper', 'paper'), ('scissors', 'rock'),",
  "          ('sissors', 'paper'), ('Rock', 'scissors')]",
  'for a, b in rounds:',
  "    print(a, 'vs', b, '->', judge(a, b))"
].join('\n');

const OUT1 = [
  'rock vs scissors -> player 1',
  'paper vs paper -> draw',
  'scissors vs rock -> player 2',
  'sissors vs paper -> player 2',
  'Rock vs scissors -> player 2'
].join('\n');

const V2 = [
  "beats = {'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper'}",
  '',
  'for move in beats:',
  "    print(move, 'beats', beats[move])",
  "print('Words the game knows:', len(beats))"
].join('\n');

const OUT2 = [
  'rock beats scissors',
  'paper beats rock',
  'scissors beats paper',
  'Words the game knows: 3'
].join('\n');

const V3 = [
  'def judge(a, b):',
  '    a = a.lower()',
  '    b = b.lower()',
  '    if a not in beats:',
  "        return 'I do not know the word ' + a",
  '    if b not in beats:',
  "        return 'I do not know the word ' + b",
  '    if a == b:',
  "        return 'draw'",
  '    if beats[a] == b:',
  "        return 'player 1'",
  "    return 'player 2'"
].join('\n');

const OUT3 = [
  'rock vs scissors -> player 1',
  'paper vs paper -> draw',
  'scissors vs rock -> player 2',
  'sissors vs paper -> I do not know the word sissors',
  'Rock vs scissors -> player 1'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Coding in English for kids (6 to 12)' },
  slug: 'coding-classes-in-english-for-peruvian-kids',
  code: 'cep',
  accent: '#004C06',
  accentRationale: 'Coding classes in English for Peruvian kids: a deep forest green #004C06, the green of a school chalkboard and of the selva on a primaria map of Peru, calm and young without being a toy colour; contrast above 4.5 on the paper #FBF8F2 and its tints, as allocated in alloc.tsv and checked by the build',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes in English for Peruvian kids',
  title: 'Coding Classes in English for Peruvian Kids, Ages 6 to 12',
  description: 'Live online coding classes in English for children in Peru aged 6 to 12, grade by grade through primaria: Scratch, Python, Roblox and more, group or one to one.',
  ogDescription: 'Which primaria grade suits Scratch or Python, how much English a Peruvian child needs on day one, what school already covers, and a rock, paper, scissors lesson in Python.',
  twitterDescription: 'Live coding classes in English for Peruvian children of 6 to 12, from 1° to 6° de primaria, in a group or one to one.',
  pageName: 'Coding Classes in English for Peruvian Kids',
  webPageDescription: 'A guide for parents in Peru choosing coding classes taught in English for children of 6 to 12, organised by primaria grade from MINEDU\'s normative ages and the CNEB weekly timetable, with INEI household technology figures, ENLA facts and an original Python lesson on a rock, paper, scissors rule table.',
  courseDescription: 'Live online coding classes taught in English for children in Peru aged 6 to 12, from 1° to 6° de primaria: Scratch and block coding for the youngest, Roblox, Minecraft and web projects in the middle years, and a first typed language, Python, from about 9, in a group of fifteen to twenty children of a similar age or one to one, at any hour that suits the family.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Coding in English for kids',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#grades', label: 'By grade' },
    { href: '#english', label: 'How much English' },
    { href: '#lesson', label: 'A lesson' },
    { href: '#home', label: 'At home' },
    { href: '#clock', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Primaria &middot; Ages 6 to 12',
  h1: 'Coding classes in English for Peruvian kids',
  lede: 'Most children in Peru who take these classes speak Spanish at home and meet English as a school subject. That is the child this page is written for. Below you will find which primaria grade fits which kind of coding, what the national timetable already gives your child in English, how a first class handles a child who understands only a little, and a real lesson for a ten-year-old.',
  secondaryCta: { href: '#grades', label: 'Find your child\'s grade' },
  wa: 'Hello Modern Age Coders, we are in Peru and our child is in primaria. We would like coding classes in English. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; patient mentors for children still learning English',
  spec: [
    ['Who', 'Children of 6 to 12, from 1° to 6° de primaria'],
    ['What', 'Scratch, Roblox, Minecraft, web projects and Python'],
    ['English needed', 'Simple instructions; the rest grows in class'],
    ['Format', 'A group of fifteen to twenty, or one to one'],
    ['Hours', 'Any day, any hour in Peru time'],
    ['First class', 'Free, and no card']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Yes. Modern Age Coders runs coding classes for primaria children in Peru, aged 6 to 12, that are live, online and taught in English. The youngest, in 1° and 2°, build with Scratch blocks and picture stories; around 9 most move on to Roblox, web pages and their first typed Python. Mentors in India keep their English slow and simple, show each step on the screen and follow the child\'s pace and accent, so understanding basic instructions is enough to begin. Classes are in a group of fifteen to twenty or one to one, at hours the family sets.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three first courses for primaria children',
    lede: 'One for the youngest, one for the middle years, one for children ready to type. The free first class tells you which fits.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'CEP / 01', title: 'Scratch programming', alt: 'Course thumbnail for the complete Scratch programming course', note: 'From 6. Drag-and-drop blocks, animated stories and small games, with almost no reading needed at first.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'CEP / 02', title: 'Roblox game coding', alt: 'Course thumbnail for Roblox game coding for kids with Lua', note: 'From about 8. Obstacle courses and scores in Roblox Studio, the game many Peruvian children already play.' },
      { course: 'python-ai-kids-masterclass', code: 'CEP / 03', title: 'Python and AI for kids', alt: 'Course thumbnail for Python and AI for Kids', note: 'From about 9. A first real typed language, with drawings, quizzes and games like the lesson below.' }
    ]
  },

  sections: [
    {
      id: 'grades',
      eyebrow: 'Grade by grade',
      h2: 'Which primaria grade is ready for which kind of coding?',
      lede: 'Every primaria grade can code; what changes is the tool. MINEDU fixes each grade\'s normative age on 31 March of the school year, and the CNEB timetable sets how many hours of English the grade has each week, so both are useful clues to where a child should begin.',
      body: [
        { kind: 'table', numCols: [], caption: 'Primaria in Peru: normative age, CNEB cycle and weekly English hours by grade (MINEDU), with where children usually start with us (ours)', head: ['Grade', 'Age on 31 March', 'CNEB cycle', 'English hours a week', 'Usual start with us (ours)'], rows: [
          ['1° de primaria', '6', 'III', '2', 'Scratch with pictures and spoken instructions'],
          ['2° de primaria', '7', 'III', '2', 'Scratch stories and simple games'],
          ['3° de primaria', '8', 'IV', '3', 'Scratch games with scores; Minecraft or Roblox'],
          ['4° de primaria', '9', 'IV', '3', 'Roblox or web pages; first Python for keen readers'],
          ['5° de primaria', '10', 'V', '3', 'Python with drawings and games'],
          ['6° de primaria', '11', 'V', '3', 'Python projects, small AI ideas, web']
        ] },
        { kind: 'source', html: 'Sources: MINEDU, "Edades normativas" (the normative age is taken on 31 March of each year); Currículo Nacional de la Educación Básica, Tabla N.° 6, weekly hours for Educación Primaria (30 hours a week in every grade). Read 9 November 2026. The last column is our own placement guide, not a MINEDU recommendation.' },
        { kind: 'two', mt: true,
          leftH3: 'What the national timetable shows',
          left: [
            'Primaria lasts six years under Ley 28044, and its regulations say it serves children from age 6. On the CNEB timetable every primaria grade has 30 hours a week. English gets 2 hours in 1° and 2° and 3 hours from 3° to 6°, while Matemática and Comunicación get 5 hours each in the first two grades and 4 after that.',
            'There is no computing or programming area in the table. The CNEB itself also notes that English in primaria depends on a specialist teacher being hired; where none is, those hours become free-use hours. So two children in the same grade can have had very different amounts of English.'
          ],
          rightH3: 'How we use those clues',
          right: [
            'A child\'s age matters less than two things: whether they can read a short sentence, and whether they can use a mouse and keyboard. A confident reader in 3° may start Python early; a quieter 5° pupil may enjoy a term of Scratch first.',
            'The free first class sorts this out in twenty minutes. The mentor asks the child to drag a few blocks, read a few words aloud and explain what they built, then suggests a starting point.'
          ] },
        { kind: 'p', mt: true, html: 'If you are looking at one particular age, our Spanish pages go deeper: <a class="ag-inline-link" href="/programacion-para-ninos-de-6-anos">programación para niños de 6 años</a> covers coding before a child reads fluently, and <a class="ag-inline-link" href="/programacion-para-ninos-de-10-anos">programación para niños de 10 años</a> covers the step from blocks to Python.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'English on day one',
      h2: 'How much English does my child need to start coding classes?',
      lede: 'Less than most parents fear. A child who can follow "click here", "drag this block" and "what happens next?" is ready. Everything else is taught inside the lesson, one word at a time, alongside the code.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ages 6 and 7', p: 'Classes lean on pictures, gestures and the shared screen. A child learns perhaps one new word per class, such as "move", "turn" or "repeat", and uses it straight away in a block. ScratchJr, built for young children of 5 to 7, works the same way: almost everything is a picture.' },
          { h3: 'Ages 8 and 9', p: 'Children start reading block labels and short instructions. The mentor keeps a word list on screen and asks the child to say each new word aloud. By this age most children have had two years of English at school, at least on paper.' },
          { h3: 'Ages 10 to 12', p: 'Typed code is itself English: <code>print</code>, <code>if</code>, <code>else</code>, <code>while</code>. Children now explain their programs in short sentences, which is often the first time their school English is used for something they care about.' }
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>The mentor speaks slowly and shows everything.</strong> Every instruction is said and done on screen at the same time, so a child who misses a word still sees what to do.',
          '<strong>Repeating is normal.</strong> Children learn "Can you say that again, please?" in the first class and use it freely. No one is embarrassed to ask.',
          '<strong>Spanish stays at home.</strong> The class itself is in English only, but parents can message us in Spanish and children are never scolded for a Spanish word when they are stuck.',
          '<strong>Progress is checked in both directions.</strong> Every few weeks the mentor tells you which new coding ideas and which new English words your child can use.'
        ] },
        { kind: 'p', mt: true, html: 'Families at bilingual or international schools, where English is already strong, can start faster, and <a class="ag-inline-link" href="/english-medium-coding-classes-lima">our Lima page for English-medium pupils</a> is written for them. For maths in English at the same ages, see <a class="ag-inline-link" href="/clases-de-matematicas-en-ingles-para-ninos">clases de matemáticas en inglés para niños</a>.' }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'What does a coding class in English look like for a ten-year-old?',
      lede: 'Here is a lesson our mentors teach to children of about 10 to 12 who have started Python. The game is rock, paper, scissors, which every child in Peru knows as piedra, papel o tijera. The code is ours. The surprise is that a spelling mistake in English breaks the game without any error message.',
      body: [
        { kind: 'code', label: 'Version 1: a chain of if statements', lang: 'Python', code: V1, note: 'The child writes the rules as they would say them: if it is a draw, say draw; if rock meets scissors, player 1 wins; and so on. Anything else means player 2 wins. Before running it, the mentor asks: who wins each of the five rounds?' },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: OUT1, note: 'Exact output from our own run with Python 3. The first three rounds are right. Round four is a misspelling of "scissors", and round five has a capital R. Both are reported as wins for player 2, and the program never complains.' },
        { kind: 'p', mt: true, html: 'Children usually spot round five first: rock beats scissors, so why did player 2 win? Then someone notices "sissors". The program did not fail; it quietly took the last line, "otherwise player 2 wins", for any word it did not recognise. The lesson now has two parts: write the rules more clearly, and make the program say when it does not understand.' },
        { kind: 'code', label: 'Version 2: the rules as a table', lang: 'Python', code: V2, note: 'A dictionary pairs each move with the move it beats. The loop reads the table back as English sentences, and <code>len</code> counts how many words the game knows.' },
        { kind: 'code', label: 'What Version 2 prints', lang: 'Output', code: OUT2, note: 'Exact output from our own run. The child reads the three sentences aloud. If one sounds wrong, the table is wrong, which is much easier to check than nine separate lines of if statements.' },
        { kind: 'code', label: 'Version 3: judge with the table, and say what you do not know', lang: 'Python', code: V3, note: 'Uses the same <code>beats</code> table and the same five rounds as before. <code>lower()</code> turns "Rock" into "rock"; <code>not in beats</code> catches any word that is not in the table.' },
        { kind: 'code', label: 'What Version 3 prints', lang: 'Output', code: OUT3, note: 'Exact output from our own run. The capital R no longer matters, and the misspelt word is reported by name instead of silently losing the round.' },
        { kind: 'p', mt: true, html: 'In about forty minutes the child has met a dictionary, the words "beats", "draw" and "scissors" (and how to spell it), and the idea that a good program says when it is confused. An extension for fast finishers: add "lizard" and "Spock" to the table and find out why one value per key is no longer enough.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'What school covers',
      h2: 'Do Peruvian primary schools teach coding?',
      lede: 'Not as a subject. The CNEB has no computing area in primaria; digital skills appear as a competency shared across all areas, and science and technology work may include building things. Some schools add computing or robotics workshops in their free-use hours.',
      body: [
        { kind: 'two',
          leftH3: 'Robotics kits, then and now',
          left: [
            'MINEDU has used educational robotics since the 1990s. In 2009 and 2010 it supplied LEGO WeDo kits to almost all public primary schools, according to its own robotics document. Many parents therefore think of "robótica" as the natural first step in technology for children.',
            'Our classes are about code, not hardware: no kit arrives at your door. What a child learns with us, sequences, loops and decisions, is exactly what makes a school robot move, so the two fit together.'
          ],
          rightH3: 'National tests in primaria',
          right: [
            'MINEDU\'s national assessment, the ENLA, tests reading and maths rather than computing. ENLA 2024 was a census test of 532,000 pupils of 4° de primaria in 18,112 schools, and ENLA 2025, applied from 11 to 13 November 2025, again tested 4° de primaria in reading and maths.',
            'Coding does not prepare a child for the ENLA directly, and we do not claim that it does. It does give daily practice in reading instructions carefully and in step-by-step reasoning, which is useful in any subject.'
          ] },
        { kind: 'p', mt: true, html: 'The scale is national. MINEDU said on 14 October 2026 that its materials for the 2027 school year will reach 2.7 million primaria pupils. We are not connected with MINEDU or any school; our classes run beside school, and a child who completes a course receives our own certificate of completion, not a school grade.' }
      ]
    },
    {
      id: 'home',
      eyebrow: 'At home',
      h2: 'What does a child in Peru need at home for online coding classes?',
      lede: 'A laptop or desktop with a webcam, a microphone and a steady connection, plus a quiet corner and, for the youngest, an adult nearby for the first few classes. Typing code on a tablet or phone does not work well.',
      body: [
        { kind: 'two',
          leftH3: 'What INEI found in 2026',
          left: [
            'According to INEI\'s survey of technology in households, April to June 2026, only 36.4% of Peruvian households owned at least one computer. It also showed that children of 6 to 11 were the age group least likely to use the internet, at 68.2%.',
            'So for many primaria children, a coding class is their first regular, purposeful use of a computer. That is one reason we start young children with blocks and mouse skills before typing.'
          ],
          rightH3: 'A short checklist',
          right: [
            'One computer shared by the whole family is fine. A headset with a built-in microphone cuts out kitchen and street noise, so your child catches every word the mentor says.',
            'Keep the same seat for every class, open the link a few minutes early and have a notebook ready for new words. Scratch works straight from the browser, and in the first Python lesson the mentor talks your child through installing a free editor.'
          ] },
        { kind: 'p', mt: true, html: 'If the family computer is busy at certain times, choose class hours around it. That flexibility is one reason we never fix a timetable.' }
      ]
    },
    {
      id: 'spanish',
      eyebrow: 'Language',
      h2: 'Are the classes taught in Spanish?',
      lede: 'No. All teaching is in English, live and online, by mentors who work from India. With children they speak simply and slowly, say things again in other words, and adjust to how fast the child follows and how they pronounce English.',
      body: [
        { kind: 'two',
          leftH3: 'Why English, for a Spanish-speaking child',
          left: [
            'Programming languages are built from English words, so a child who learns to code in English learns the words and the ideas at once. A Spanish-taught class still ends up typing <code>if</code> and <code>while</code>; ours explains them in the language they come from.',
            'Children also get regular spoken English with an adult who is patient and interested in what they made, which school groups of thirty rarely allow.'
          ],
          rightH3: 'When to wait',
          right: [
            'A child who finds any English stressful, or who is struggling with reading in Spanish, may be happier waiting a year. We would rather tell you that in the free class than see a child unhappy.',
            'Parents who would rather read about this in Spanish will find the questions they usually ask us first answered on <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">our Spanish guide for parents of young coders</a>.'
          ] }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Peru time',
      h2: 'What time are the classes for children in Peru?',
      lede: 'At an hour your family picks, often after school or homework. Mentors are in India, and the difference between the two clocks is fixed all year.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time and India time for common after-school hours (conversions only, not a schedule)', head: ['Peru time', 'India time', 'Day in India'], rows: [
          ['8:00 a.m.', '6:30 p.m.', 'Same day'],
          ['10:30 a.m.', '9:00 p.m.', 'Same day'],
          ['12:00 noon', '10:30 p.m.', 'Same day'],
          ['3:30 p.m.', '2:00 a.m.', 'Next day'],
          ['5:00 p.m.', '3:30 a.m.', 'Next day'],
          ['7:00 p.m.', '5:30 a.m.', 'Next day']
        ] },
        { kind: 'source', html: 'Peruvian clocks stay on UTC minus 5 through the whole year, with no daylight saving (tz database, zone America/Lima). Indian clocks stay on UTC plus 5:30, which puts India a constant 10 hours 30 minutes ahead.' },
        { kind: 'p', mt: true, html: 'Children who go to school in the afternoon shift often take class in the morning, and morning-shift pupils in the late afternoon. If the school changes your child\'s shift, you simply move the class.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How will I know my child is learning, in code and in English?',
    lede: 'Five steps we use with primaria children in Peru. They are our own, and each one has a coding side and an English side.',
    table: { caption: 'Five steps in code and English for children of 6 to 12 (ours)', head: ['Step', 'In code, your child can', 'In English, your child can'], rows: [
      ['1. Follow', 'drag blocks in order so a character reaches a goal', 'follow "click", "drag", "move" and "turn"'],
      ['2. Repeat', 'use a loop instead of copying the same block', 'say "repeat ten times" and "again, please"'],
      ['3. Decide', 'add an if block that changes what happens', 'explain a rule: "if it touches the wall, it stops"'],
      ['4. Type', 'write a short Python program and guess its output first', 'read error messages and name the problem'],
      ['5. Build and show', 'finish a game or page of their own', 'present it to the family in a few English sentences']
    ] },
    left: { h3: 'For parents', ps: [
      'Once a week, let your child give you a tour of what they built, in Spanish, English or a mix. Being able to explain it is the clearest sign that it was understood.',
      'Most children move one step every couple of months. Step 4, typing, is the slowest and the most important.'
    ] },
    right: { h3: 'For children', ps: [
      'Say what you think will happen before you press the green flag or run.',
      'Keep a list of new English words next to your keyboard.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for primaria children',
    lede: 'All live, in English, grouped by age, with one mentor through the course.',
    bands: [
      { num: 'I', h3: 'The youngest', sub: 'Ages 6 to 8', courses: [
        { code: 'CEP / YOUNG / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids with blocks', blurb: 'Block coding from first steps to small apps.' },
        { code: 'CEP / YOUNG / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Patterns and puzzles that prepare for code.' },
        { code: 'CEP / YOUNG / 03', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'Number sense in English for the first school years.' }
      ] },
      { num: 'II', h3: 'Building and games', sub: 'Ages 8 to 12', courses: [
        { code: 'CEP / BUILD / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Programming a world children already know.' },
        { code: 'CEP / BUILD / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Characters, levels and scores, step by step.' },
        { code: 'CEP / BUILD / 03', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A first website of their own in HTML and CSS.' }
      ] },
      { num: 'III', h3: 'Thinking further', sub: 'Ages 8 to 12', courses: [
        { code: 'CEP / THINK / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What a machine can and cannot learn, taught without chatbot accounts.' },
        { code: 'CEP / THINK / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Times tables, shapes and patterns checked by programs the child writes.' },
        { code: 'CEP / THINK / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Breaking big problems into small steps.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How do the live classes work for children?',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'For children on the afternoon school shift.' },
      { time: 'After school', l: 'Late afternoon or early evening in Peru time.' },
      { time: 'Your choice', l: 'One-to-one classes on the days you pick.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same adult every week, who learns how your child thinks.' },
      { h3: 'Slow, clear English', p: 'Said and shown at the same time on the shared screen.' },
      { h3: 'Child at the keyboard', p: 'Your child drags, types and fixes; the mentor guides.' },
      { h3: 'Something to show', p: 'Each few weeks ends with a project for the family.' },
      { h3: 'Notes for parents', p: 'What was learned in code and in English.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty children of a similar age, or one to one.' }
    ]
  },

  projectsH2: 'Where coding in primaria can lead',
  projectsLede: 'Projects by some of our older students, to show where the first blocks can go. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents and students writing on Google, quoted word for word.',

  fees: {
    h2: 'Fees for children\'s classes in Peru',
    lede: 'You will see each plan\'s monthly fee below in US dollars, paid by card. Your bank changes it into soles at its own exchange rate when it charges you, so the total on your statement may not be exactly the same each month.',
    free: ['A free first class with a mentor', 'A placement by grade and English level', 'No card needed'],
    group: ['Fifteen to twenty children of a similar age', 'The same mentor each week', 'Two live classes a week', 'Monthly, stop at the end of any month'],
    one: ['Your child and a mentor alone', 'Pace set around your child\'s English', 'Days and hours you choose']
  },

  faq: {
    eyebrow: 'Parents in Peru ask',
    h2: 'Coding classes in English for Peruvian kids: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Classes are live, online and taught only in English. With children our mentors in India slow down, use short sentences, repeat with simpler words and follow each child\'s pace and accent. You can still message us in Spanish on WhatsApp.' },
      { q: 'My child speaks very little English. Can they still join?', a: 'Usually yes. If your child can follow simple instructions such as "click" and "drag", they can start. Young children work mostly with pictures and blocks, and the mentor shows every step on screen. The free first class will tell you honestly whether to start now or wait.' },
      { q: 'From what age can a child begin?', a: 'From 6, in 1° de primaria, with Scratch blocks. Most children move to typed Python around 9 or 10. The free class places each child by reading level and confidence, not only by age.' },
      { q: 'Which course should a child in 4° de primaria take?', a: 'Often Roblox game coding or web pages, and Python for confident readers. Children of that age usually have three hours of school English a week on the national timetable, which is enough to begin.' },
      { q: 'Does school in Peru already teach coding?', a: 'Not as a subject. The national curriculum has no computing area in primaria; digital skills are shared across other areas, and some schools run computing or robotics workshops. Our classes run alongside school.' },
      { q: 'Is this the same as robótica?', a: 'No. We teach programming only and never post out robot kits. Still, the loops and decisions a child practises with us are the same instructions that drive a school robot.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Peru all year, so 5:00 p.m. in Lima is 3:30 a.m. the next day in India.' },
      { q: 'Does my child need a computer?', a: 'Yes, a laptop or desktop with a keyboard, camera and microphone. A tablet is not enough for typing code. A shared family computer is fine if the class hour is kept free.' },
      { q: 'Will the classes affect my child\'s school grades?', a: 'They do not count towards Peruvian grades; we are not connected with MINEDU or any school. When a child finishes a course they receive our own certificate of completion.' },
      { q: 'Do children use ChatGPT in class?', a: 'No. Children under 13 do not use chatbots with us. They learn how AI works through small projects that need no account.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for parents of younger coders',
    lede: 'Pages in English with more on coding for children.',
    items: [
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes for kids', p: 'What children build in Scratch, term by term.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class from the first minute to the last.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Our promise: understanding first, tools second.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools a child may use, from each maker\'s terms.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects made by our students.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'All our classes for Peru, every age.' }
    ]
  },

  start: {
    h2: 'Book a free first class for your child',
    lede: 'During the free class a mentor sits with your child, builds something small with blocks or code and asks them to describe it in simple English. From that, the mentor judges how they reason and how much they follow, then suggests a course, a group or one-to-one, and an hour that suits your family.',
    readFirst: 'Would you like to read more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a live class, and the <a class="ag-inline-link" href="/courses">full list of courses</a> has every syllabus.',
    note: 'Every lesson is live, online and in English, with a mentor in India. For questions, WhatsApp reaches us fastest, and Spanish messages are answered too.',
    formNote: 'Free. No card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'First courses', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch programming' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Roblox game coding' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python and AI for kids' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'For parents', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Rock beats scissors, if you spell it'
  },

  personalityCss: `
.ag-root.ag-cep .ag-hero h1 { letter-spacing: -0.01em; max-width: 18ch; }
.ag-root.ag-cep .ag-capsule { border-left-width: 6px; border-radius: 6px; }
.ag-root.ag-cep .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cep .ag-section-head h2 { max-width: 23ch; }
.ag-root.ag-cep .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU, Edades normativas (normative age on 31 March; grade-to-age table); D.S. 011-2012-ED (primaria from age 6); Ley 28044 (primaria lasts six years); CNEB Tabla N.° 6 (primaria weekly hours, English conditional on specialist teachers); MINEDU press notes on ENLA 2024, ENLA 2025 and 2027 materials; MINEDU robotics document (LEGO WeDo 2009 and 2010); INEI TIC en los Hogares II Trimestre 2026; ScratchJr home page. Read 9 November 2026. The placement column, the five steps and the Python lesson are our own.',
    localProject: 'Rock, paper, scissors for a primaria child learning Python in English: an if-chain judges five rounds and silently gives "player 2" for the misspelt "sissors" and for "Rock" with a capital; a dictionary of what beats what is read back as English sentences ("rock beats scissors", "Words the game knows: 3"); a judge that uses lower() and an "in" check reports "I do not know the word sissors". Set beside the six primaria grades with their MINEDU normative ages and CNEB English hours.',
    requiredMentions: ['Primaria in Peru: normative age, CNEB cycle and weekly English hours by grade (MINEDU), with where children usually start with us (ours)', 'Both are reported as wins for player 2, and the program never complains', 'I do not know the word sissors', 'Words the game knows: 3', 'which every child in Peru knows as piedra, papel o tijera', 'children of 6 to 11 were the age group least likely to use the internet, at 68.2%', 'LEGO WeDo kits to almost all public primary schools', 'Five steps in code and English for children of 6 to 12 (ours)', 'Rock beats scissors, if you spell it'],
    sources: [
      { claim: 'Normative age is taken on 31 March; grade-to-age table 1° = 6 to 6° = 11.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Primaria serves children from age 6 (D.S. 011-2012-ED).', url: 'https://cdn.www.gob.pe/uploads/document/file/104990/_0011-2012-ED_-_14-03-2013_02_34_14_-d.s_011-2012-ed.pdf' },
      { claim: 'CNEB Tabla N.° 6: primaria 30 hours a week; English 2, 2, 3, 3, 3, 3; English depends on hiring specialist teachers.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ENLA 2024: census of 532,000 pupils of 4° de primaria in 18,112 schools.', url: 'https://www.gob.pe/institucion/minedu/noticias/1142140-enla-2024-532-000-escolares-de-4-de-primaria-muestran-recuperacion-sin-precedentes-en-lectura-y-matematica' },
      { claim: 'ENLA 2025 applied 11 to 13 November 2025; 4° de primaria in reading and maths.', url: 'https://www.gob.pe/institucion/minedu/noticias/1284732-minedu-evaluara-aprendizajes-de-200-mil-estudiantes-de-primaria-y-secundaria-de-todo-el-pais' },
      { claim: '2027 materials for 2.7 million primaria pupils (MINEDU, 14 October 2026).', url: 'https://www.gob.pe/institucion/minedu/noticias/1456889-minedu-inicia-distribucion-de-materiales-educativos-para-el-ano-escolar-2027' },
      { claim: 'MINEDU supplied LEGO WeDo kits to almost all public primary schools in 2009 and 2010.', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'INEI II Trimestre 2026: 36.4% of households with a computer; internet use 68.2% among children of 6 to 11.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'ScratchJr is for young children of ages 5 to 7.', url: 'https://www.scratchjr.org/' }
    ],
    rejectedClaims: [
      'A count of Peruvian children taking coding classes, or a Peru student count of ours: none exists from a primary source; not claimed.',
      'That coding raises ENLA scores: no evidence; the page says it does not prepare for the ENLA directly.',
      'Scratch age range from scratch.mit.edu: the page renders by JavaScript and the text was not in the raw HTML; not quoted.',
      'Robot kits or hardware: we teach coding only, and the page says so.',
      'Chatbots for under-13s: refused; the page says children do not use them.',
      'Spanish-language teaching: none; every class is in English.'
    ]
  }
};
