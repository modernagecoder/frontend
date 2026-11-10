// SHIP: market (en subject door, ages 6 to 12) | maths for kids in English: starting age, primaria maths, children online | arrays: multiplication as rows and columns, factor pairs, and the numbers with one line only
'use strict';
// Maths for kids in English, Peru (ag- English subject door, Peru cluster row PE031, P3, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Fees render in USD from the template only (priceSubject 'maths'); no typed figure, no soles. "Kids" = 6 to 12.
// Search: "clases de matematicas en ingles para niños" (rows.tsv seed), English "maths for kids in English".
// Spanish twin (live): clases-de-matematicas-en-ingles-para-ninos (spine: weekly hours grid, place value per CNEB cycle,
// ENLA editions table; lesson: place value with // and %). This page: when a child can start (Reglamento, normative ages),
// what primaria maths is for in the CNEB, how much of a 6 to 11 year old's life is online (INEI by age, the table), how a
// class for a young child runs, and an arrays lesson. Different table and lesson family.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/facts-school/src/ and src-pages/; read 8 to
// 9 November 2026; quotes grepped by scratchpad pe/e5/verify.py):
//  - D.S. 011-2012-ED, Reglamento de la Ley General de Educación (OCR): "Atiende a niños y niñas a partir de los 6 años de edad."
//  - Ley 28044: "La Educación Primaria constituye el segundo nivel de la Educación Básica Regular y dura seis años."
//  - MINEDU, Edades normativas: "Se considera la edad normativa al 31 de marzo de cada año."; table "6 años 7 años 8 años 9 años
//    10 años 11 años 12 años" (1° primaria 6 ... 6° primaria 11).
//  - CNEB: primaria "Matemática 5 5 4 4 4 4 Comunicación 5 5 4 4 4 4 Inglés 2 2 3 3 3 3"; "horas pedagógicas (45 minutos)";
//    competencies "Resuelve problemas de regularidad, equivalencia y cambio", "Resuelve problemas de movimiento, forma y
//    localización", "Resuelve problemas de gestión de datos e incertidumbre", "Competencia 23: Resuelve problemas de cantidad.";
//    English in primaria "dependiendo de la contratación de estos docentes".
//  - MINEDU, 8 April 2025 (n-enla2024): "ENLA 2024 es una prueba censal que el Minedu tomó a 532 000 escolares de 4.º grado de
//    primaria de 18 112 instituciones educativas"; rural pupils "de 36,8 % a 28,7 % en matemática".
//  - INEI, TIC en los Hogares II Trimestre 2026 (inei_tic_iit2026.txt), Cuadro N° 2.1 by age, 2023 to 2026: "77,6 80,0 81,0
//    84,2"; "60,1 61,7 61,5 68,2"; "89,7 91,4 90,7 92,5"; "95,6 96,4 96,4 97,3"; text "niños de 6 a 11 años (68,2%)".
//  - EF EPI 2025 Peru (ef_peru.raw): Peru 519 moderate; Lima 555 high.
//  - Time: Peru UTC-5 all year (tzdata America/Lima; last Rule Peru 1994); India UTC+5:30; India 10 h 30 min ahead.
// Our calculations: 5 x 45 = 225 and 4 x 45 = 180 maths minutes a week; 2 x 45 = 90 and 3 x 45 = 135 English minutes.
// Code (scratchpad pe/e5/mke_v1.py, mke_v2.py, python3 -I): v1 prints three rows "o o o o " and "3 rows of 4 is 12", then four
// rows "o o o " and "4 rows of 3 is 12"; v2 prints "12 counters: [(1, 12), (2, 6), (3, 4), (4, 3), (6, 2), (12, 1)]",
// "7 counters: [(1, 7), (7, 1)]", "16 counters: [(1, 16), (2, 8), (4, 4), (8, 2), (16, 1)]",
// "Only a single line: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]".
// Lesson family: multiplication as an array (rows by columns), turning it shows 3 x 4 = 4 x 3, every rectangle of n counters
// is a factor pair, and the numbers whose only rectangles are a single line are the primes.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'def array(rows, cols):',
  '    for r in range(rows):',
  '        print("o " * cols)',
  '    print(rows, "rows of", cols, "is", rows * cols)',
  '',
  'array(3, 4)',
  'array(4, 3)'
].join('\n');

const V2 = [
  'def rectangles(n):',
  '    found = []',
  '    for rows in range(1, n + 1):',
  '        if n % rows == 0:',
  '            found.append((rows, n // rows))',
  '    return found',
  '',
  'for n in (12, 7, 16):',
  '    print(n, "counters:", rectangles(n))',
  '',
  'lonely = [n for n in range(2, 30) if len(rectangles(n)) == 2]',
  'print("Only a single line:", lonely)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Maths for kids in English' },
  slug: 'maths-for-kids-in-english-peru',
  code: 'mke',
  accent: '#0D4833',
  accentRationale: 'Maths for kids in English, Peru: a dark cloud-forest green #0D4833, the green of the montane forest on the road down from Cusco towards the Amazon; it holds 4.5:1 or better on the paper #FBF8F2 and both darker papers (checked by the build).',
  pageType: 'market',
  market: PE_EN,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Maths for kids in English, Peru',
  title: 'Maths for Kids in English, Peru: Live Online, Ages 6 to 12',
  description: 'Maths for kids in English for families in Peru: live online classes for ages 6 to 12, what primaria maths covers, and a counting lesson your child can try.',
  ogDescription: 'Live online maths in English for children of 6 to 12 in Peru: when to start, what primaria maths is for, how online children are by age according to INEI, and an arrays lesson with counters and Python.',
  twitterDescription: 'Live online maths in English for Peruvian children aged 6 to 12, in a group or one to one, at any hour.',
  pageName: 'Maths for Kids in English, Peru',
  webPageDescription: 'A guide for parents in Peru who want their child of 6 to 12 to learn maths in English, built from the Ley General de Educación and its Reglamento, MINEDU normative ages, the national curriculum (CNEB), MINEDU on ENLA 2024, INEI internet use by age (second quarter 2026), EF EPI 2025 and the tz database, with an original lesson on arrays and factor pairs.',
  courseDescription: 'Live online maths classes taught in English for children aged 6 to 12 in Peru: number sense, the four operations, fractions, shapes and reasoning, in a group of fifteen to twenty children of a similar age or one to one, at a time the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Maths for kids in English',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#start', label: 'Starting age' },
    { href: '#primaria', label: 'Primaria maths' },
    { href: '#arrays', label: 'Arrays lesson' },
    { href: '#online', label: 'Children online' },
    { href: '#clock', label: 'Peru times' }
  ],
  eyebrow: 'Peru &middot; Maths in English for children &middot; Ages 6 to 12',
  h1: 'Maths for kids in English, live from Peru',
  lede: 'Children learn maths most easily by touching it: counters, strips of paper, rows of buttons on a table. Learning it in English adds one more layer, and young children usually cope with that layer far better than adults expect. This page is for parents of children aged 6 to 12 in Peru. It covers when a child can start, what primaria maths is trying to build, how a live class works for a small child, and one lesson you can try at the kitchen table tonight.',
  secondaryCta: { href: '#arrays', label: 'Try the counters lesson' },
  wa: 'Hello Modern Age Coders, we are in Peru and would like maths classes in English for our child. Could we book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; every class live, online and in English',
  spec: [
    ['Ages', '6 to 12, grouped by age'],
    ['Taught', 'Live, online, in English'],
    ['Class', 'Fifteen to twenty children, or one to one'],
    ['Content', 'Numbers, operations, fractions, shapes, reasoning'],
    ['Peru times', 'Any hour you choose'],
    ['First class', 'Free, no card required']
  ],
  capsuleQ: 'For busy parents',
  capsule: 'Modern Age Coders teaches maths for kids in English to children aged 6 to 12 in Peru: live online classes, taught only in English, where a teacher and a small learner share a screen and work with counters, drawings and simple problems. Children are grouped with others of their own age in classes of fifteen to twenty, or taught one to one, at whatever hour suits your family in Peru time. Lessons build number sense, the four operations, fractions, shapes and reasoning, next to school rather than instead of it.',

  picks: {
    eyebrow: 'Three good first courses',
    h2: 'Where children of 6 to 12 begin',
    lede: 'One for the youngest thinkers, one that follows the primaria years grade by grade, and one for quick, confident mental arithmetic.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'MKE / 01', title: 'Reasoning for Young Thinkers', note: 'For children of 6 to 9, in two age bands, over six months. Patterns, shapes and spatial puzzles that a child solves by looking and moving things, with only a few English words needed at the start.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'MKE / 02', title: 'Elementary Maths', note: 'Follows the first five primary grades, with a short placement check so each child joins at the right level. Counting, operations, fractions and early geometry, always with objects and pictures before symbols.' },
      { course: 'mental-maths-mastery-kids', code: 'MKE / 03', title: 'Mental Maths for Kids', note: 'For ages 5 to 10 over a year: number bonds, splitting numbers apart and estimating, so a child can work things out in their head and explain how, in English.' }
    ]
  },

  sections: [
    {
      id: 'start',
      eyebrow: 'Starting age',
      h2: 'At what age can a child start learning maths in English?',
      lede: 'From 6, the age at which Peruvian children begin primaria. A child who is starting to read numbers and follow simple instructions can follow a live maths class in English, provided the class is built for six year olds.',
      body: [
        { kind: 'two',
          leftH3: 'What Peruvian law and MINEDU say',
          left: [
            'Under the Ley General de Educación, primaria is the second level of regular basic education and lasts six years. Its Reglamento, D.S. 011-2012-ED, says primaria serves children from the age of 6.',
            'MINEDU\'s table of normative ages, measured on 31 March each year, places a child of 6 in 1st grade of primaria and a child of 11 in 6th grade. So "maths for kids" on this page means roughly the six primaria years, plus the first year of secundaria for twelve year olds.'
          ],
          rightH3: 'What that means in our classes',
          right: [
            'We group children by age, not just by level: a six year old never shares a class with an eleven year old. The youngest groups use far more objects, pictures and gestures than words, and lessons are shorter in attention span if not in clock time.',
            'Below 6, we usually suggest waiting, or a very gentle one-to-one start with a parent beside the child. From 9 or 10, many children can add a little typed Python to their maths, as in the lesson further down.'
          ] },
        { kind: 'p', mt: true, html: 'A common worry is that maths in English will confuse a child who is still learning to read in Spanish. In practice the opposite often happens: numbers and shapes look the same in both languages, and a child who already knows that 3 + 4 = 7 only needs the words "three", "plus" and "seven". The language arrives on top of maths the child can already see.' }
      ]
    },
    {
      id: 'primaria',
      tint: 'tint',
      eyebrow: 'Primaria maths',
      h2: 'What should a child learn in primaria maths in Peru?',
      lede: 'The national curriculum, the CNEB, organises school maths around four kinds of problem rather than a list of tricks. That suits learning in English well, because each kind of problem can be shown with objects first.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Quantity, and change', p: 'Two of the CNEB\'s four maths competencies are about solving problems of quantity and problems of regularity, equivalence and change. In plain words: counting, operations, fractions, and spotting patterns and rules. Our arrays lesson below lives exactly here.' },
          { h3: 'Shape, and data', p: 'The other two cover form, movement and location, and data and uncertainty: shapes, measuring, maps, simple graphs and "how likely is it?". Young children meet these through drawing, folding paper and counting things in a picture.' },
          { h3: 'How much time school gives', p: 'The CNEB plan of studies gives maths five 45-minute periods a week in grades 1 and 2 and four in grades 3 to 6, which is 225 and then 180 minutes a week by our arithmetic. It gives English two periods a week in the first two grades and three afterwards.' }
        ] },
        { kind: 'p', mt: true, html: 'The CNEB is frank that English in primaria depends on the school having an English teacher: the area is phased in "dependiendo de la contratación de estos docentes". So one child may reach a maths class with us having had several years of English at school, and another almost none. We place children by what they can follow, not by what the timetable says they should have had.' },
        { kind: 'two', mt: true,
          leftH3: 'What the national test found',
          left: [
            'MINEDU\'s ENLA 2024 was a census test of 532,000 pupils in 4th grade of primaria, in 18,112 public and private schools. MINEDU reported a recovery in reading and maths, and for rural pupils a fall in the share at the lowest maths level, from 36.8% to 28.7%.',
            'Those are national figures and say nothing about any single child. They do show that fourth grade is where Peru measures primary maths, which makes grades 3 and 4 a sensible moment to check that number sense is secure.'
          ],
          rightH3: 'What we look for in a first class',
          right: [
            'Can the child count on from a number rather than from one? Do they know that 4 x 3 and 3 x 4 are the same, and can they show why? Can they say which of two fractions is bigger with a drawing?',
            'Those three checks tell a teacher more than a worksheet of sums. They are also the ideas our arrays lesson is built on.'
          ] }
      ]
    },
    {
      id: 'arrays',
      eyebrow: 'A lesson to try',
      h2: 'How do you teach multiplication to a child in English? Arrays, counters and a little Python',
      lede: 'This is one of our favourite lessons for children of 7 to 11. It begins with buttons or coins on a table and ends, for older children, with a few lines of Python. Along the way a child meets multiplication, its order, factor pairs and, without being told, prime numbers.',
      body: [
        { kind: 'ol', items: [
          '<strong>Make a rectangle.</strong> Give your child 12 buttons and ask them to lay them out in neat rows, with every row the same length. Ask in English: "How many rows? How many in each row?"',
          '<strong>Say it as multiplication.</strong> Three rows of four is twelve. Write it as 3 x 4 = 12. The word "rows" and the word "of" carry the whole idea.',
          '<strong>Turn the table.</strong> Walk round to the other side, or rotate the paper. Now it is four rows of three. Nothing moved, so 3 x 4 must equal 4 x 3. A child who sees this never needs to memorise it.',
          '<strong>Find every rectangle.</strong> How many different rectangles can 12 buttons make? Write each one down: 1 by 12, 2 by 6, 3 by 4, and their turned versions.',
          '<strong>Try a stubborn number.</strong> Now use 7 buttons. However hard you try, the only rectangle is one long line. Ask: "Why does 7 not make a rectangle?"'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'From the table to the screen',
          left: [
            'For children of about 9 and up, we then draw the same arrays with Python. Version 1 prints rows of the letter "o" and multiplies. Running it with 3 and 4, then with 4 and 3, puts the turned table on the screen.',
            'Version 2 asks the computer to do what the child did by hand: try every number of rows and keep the ones where the buttons come out even. The <code>%</code> sign gives the remainder, so a remainder of 0 means a neat rectangle.'
          ],
          rightH3: 'What the child discovers',
          right: [
            'Twelve has six rectangles, counting turned ones. Seven has only two, both of them a single line. Sixteen has five, an odd number, because one of its rectangles is a square that looks the same when turned.',
            'The last line of Version 2 lists every number below 30 whose only rectangles are lines. Children recognise the list as "the awkward numbers". The teacher then gives them their proper name: <strong>prime numbers</strong>.'
          ] },
        { kind: 'code', label: 'Version 1: rows of counters, and the turned table', lang: 'Python', code: V1, note: 'It prints three rows of four <code>o</code> and the line <code>3 rows of 4 is 12</code>, then four rows of three and <code>4 rows of 3 is 12</code>.' },
        { kind: 'code', label: 'Version 2: every rectangle, and the numbers with only one line', lang: 'Python', code: V2, note: 'It prints <code>12 counters: [(1, 12), (2, 6), (3, 4), (4, 3), (6, 2), (12, 1)]</code>, <code>7 counters: [(1, 7), (7, 1)]</code>, <code>16 counters: [(1, 16), (2, 8), (4, 4), (8, 2), (16, 1)]</code> and <code>Only a single line: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]</code>.' },
        { kind: 'p', mt: true, html: 'Notice what the child did not do: memorise a definition. They built rectangles, noticed that some numbers refuse, and only then heard the word "prime". <strong>A prime is a number of counters that will only make a line.</strong> A child who learns it that way can explain it in English to a grandparent, which is the real test of understanding.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 7.</strong> Make rectangles with 6 buttons. How many can you find? Say each one in English: "two rows of three".',
          '<strong>Ages 8 to 9.</strong> Which numbers from 10 to 20 make a square as one of their rectangles? Draw them.',
          '<strong>Ages 10 to 12, Python.</strong> Change Version 2 to count the rectangles of every number up to 50. Which numbers have an odd count? What do they have in common?'
        ] }
      ]
    },
    {
      id: 'online',
      tint: 'tint',
      eyebrow: 'Children online',
      h2: 'Are children in Peru ready for live online classes?',
      lede: 'More every year, though younger children are still less online than teenagers. INEI measures who used the internet in the second quarter of each year, and the age split is useful for parents of small children.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'People in Peru who used the internet, by age group, second quarter of 2023 to 2026 (INEI)', head: ['Age group', '2023', '2024', '2025', '2026'], rows: [
          ['6 to 11 years', '60.1%', '61.7%', '61.5%', '68.2%'],
          ['12 to 18 years', '89.7%', '91.4%', '90.7%', '92.5%'],
          ['19 to 24 years', '95.6%', '96.4%', '96.4%', '97.3%'],
          ['Everyone aged 6 and over', '77.6%', '80.0%', '81.0%', '84.2%']
        ] },
        { kind: 'source', html: 'Source: table 2.1 of INEI\'s household ICT bulletin for April to June 2026, based on its national household survey (ENAHO), consulted on 9 November 2026. The 2026 column is preliminary. INEI notes that the 6 to 11 group rose by 6.7 percentage points between 2025 and 2026, more than any other age group.' },
        { kind: 'two', mt: true,
          leftH3: 'What the table tells a parent',
          left: [
            'About two children in three aged 6 to 11 used the internet in 2026, against more than nine in ten teenagers. For a young child, a live class may be their first time using a computer for something other than videos or games.',
            'That is fine, but it changes the first lessons. Our teachers spend part of the first class on the basics: where the microphone button is, how to raise a hand on screen, how to draw on the shared board.'
          ],
          rightH3: 'What a parent does',
          right: [
            'With a child of six or seven, stay close for the first two or three classes, set up the camera and step back once the child is comfortable. From about 9, most children manage alone after a week or two.',
            'Keep the class on one device in a shared room rather than behind a closed door. That is good practice for any child online, and it lets you hear the English your child is using.'
          ] }
      ]
    },
    {
      id: 'class',
      eyebrow: 'In class',
      h2: 'What happens in a live maths class for a young child?',
      lede: 'Short activities, lots of talking and very little sitting still. A class for six year olds looks quite different from one for eleven year olds, and both look different from a school lesson.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Objects at home', p: 'Before class we may ask for twenty small things on the table: buttons, beans, pasta shapes. The teacher shows an idea on screen and the child copies it with real objects, then says what they did.' },
          { h3: 'One word at a time', p: 'Teachers introduce English words slowly and repeat them often: "more", "less", "equal", "half", "rows". Each word is written on the board next to a picture, and the child says it back.' },
          { h3: 'Short, varied tasks', p: 'Young children switch activity every few minutes: a counting game, a drawing, a puzzle, a quick story problem. The maths idea stays the same while the activity changes.' }
        ] },
        { kind: 'p', mt: true, html: 'Children are never put on the spot for their English. A child who answers "seis" gets a smile and the English word, then a chance to say it. Within a few weeks most children reply in English without thinking, because the words are attached to things they can see and touch.' },
        { kind: 'p', html: 'For older primaria children, the classes become more like problem solving. Story problems are read aloud, drawn as a picture, then solved and checked. A child of 10 or 11 is asked to explain one answer in a full English sentence each class, starting with "I know this because".' }
      ]
    },
    {
      id: 'english',
      tint: 'tint',
      eyebrow: 'English level',
      h2: 'My child speaks very little English. Can they still learn maths in English?',
      lede: 'Usually yes, if the class is designed for it. Maths gives a child something concrete to hold on to while the language grows around it.',
      body: [
        { kind: 'two',
          leftH3: 'Why maths is a good first subject in English',
          left: [
            'Numbers, shapes and symbols are shared between Spanish and English. A child can follow a great deal of a maths lesson from what they see on the board, and the English words become labels for ideas they already have.',
            'Peru\'s adults rate "Moderate" in English overall in the EF English Proficiency Index 2025, and Lima "High". Many children therefore hear some English at home already, even if they rarely speak it.'
          ],
          rightH3: 'When we suggest one to one',
          right: [
            'If a child understands almost no spoken English, or is shy about speaking, a few one-to-one classes help. The teacher can slow down, use more gestures and wait longer for an answer without holding a group back.',
            'Most children move into a group of their own age once they can follow simple instructions. The free first class is the easiest way to find out where your child stands.'
          ] },
        { kind: 'p', mt: true, html: 'Parents searching in Spanish will find more detail on <a class="ag-inline-link" href="/clases-de-matematicas-en-ingles-para-ninos">clases de matemáticas en inglés para niños</a>, our Spanish-language page on the same classes. If your child would like coding too, <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> explains, for Spanish-speaking parents, how coding for children works when it is taught in English, and <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">our Peru page</a> lists every class we offer.' }
      ]
    },
    {
      id: 'think',
      eyebrow: 'Thinking, not copying',
      h2: 'Will my child understand maths, or just learn tricks?',
      lede: 'Understand. The arrays lesson shows how: the child builds the idea before anyone names it. Tricks come later, if at all, and only once the child can say why they work.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Why before how', p: 'A child who knows why 3 x 4 equals 4 x 3 has half the times tables for free. We teach that before asking anyone to recite anything.' },
          { h3: 'No chatbots for children', p: 'Children do not use AI chatbots in our classes. Claude is for adults of 18 and over under Anthropic\'s terms, and ChatGPT needs a parent\'s permission for under-18s; a primary-age child has no need for either to learn maths.' },
          { h3: 'The same teaching everywhere', p: 'A child in Lima, Arequipa, Piura or a small town with a steady connection gets the same teachers and the same lessons. Distance changes the clock, not the quality.' }
        ] }
      ]
    },
    {
      id: 'clock',
      tint: 'tint',
      eyebrow: 'Peru times',
      h2: 'What time would my child\'s maths class be?',
      lede: 'At a time you choose. Peru never changes its clocks and sits at UTC minus 5; India sits at UTC plus 5:30. Add ten and a half hours to a Peru time and you have the time in India, on any date. The rows are conversions, not a timetable.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru hours that suit young children, and the time in India', head: ['Peru time', 'India time', 'When families choose it'], rows: [
          ['07:30', '18:00', 'Before an afternoon school shift'],
          ['10:30', '21:00', 'A Saturday morning, or the summer break'],
          ['12:30', '23:00', 'Lunchtime on a day without school'],
          ['15:00', '01:30, next day', 'Home from a morning shift, after lunch'],
          ['16:30', '03:00, next day', 'After school, before homework'],
          ['19:00', '05:30, next day', 'Early evening, before bedtime routines']
        ] },
        { kind: 'source', html: 'Clock data from the IANA tz database: Peru (America/Lima) has kept UTC minus 5 without summer time since 1994, and India (Asia/Kolkata) keeps UTC plus 5:30. The last column is our own suggestion for young children.' },
        { kind: 'p', mt: true, html: 'For children under 9 we suggest classes before about 19:00 Peru time, when attention is still good. You choose the hour on your own clock when you book, and it stays the same all year because neither country moves its clocks.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How a child grows in maths and in English',
    lede: 'These stages are ours, not a school standard. We use them to place children in the right group and to tell parents, in plain words, what has changed.',
    table: { numCols: [], caption: 'Maths and English stages for children (ours)', head: ['Stage', 'Typical age', 'In maths, the child can', 'In English, the child can'], rows: [
      ['1. Count', '6', 'Count objects and compare groups', 'Say numbers to twenty and "more" or "less"'],
      ['2. Combine', '6 to 7', 'Add and take away with objects and drawings', 'Say "plus", "minus" and "equals"'],
      ['3. Arrange', '7 to 8', 'Build arrays and see multiplication in them', 'Say "rows of" and describe a rectangle'],
      ['4. Share', '8 to 9', 'Divide fairly and meet simple fractions', 'Name halves, thirds and quarters'],
      ['5. Explain', '9 to 11', 'Solve two-step story problems and check them', 'Explain an answer starting "I know this because"'],
      ['6. Generalise', '11 to 12', 'Spot rules in patterns and test them', 'Describe a pattern and say when it breaks']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the arrays lesson. When your child turns a rectangle round and says "it is the same", something important has happened.',
      'Ask your child to teach you one thing from class in English. Teaching is the clearest sign of learning.'
    ] },
    right: { h3: 'For children', ps: [
      'If you are stuck, draw it. Most maths problems get easier with a picture.',
      'It is fine to answer in Spanish first. Then try the English word.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for children',
    lede: 'Every course is live and in English, with a teacher who stays with the group.',
    bands: [
      { num: 'I', h3: 'The youngest', sub: 'Ages 4 to 8', courses: [
        { code: 'MKE / Y / 01', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'Counting and shapes with real objects, ages 4 to 7.' },
        { code: 'MKE / Y / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Beads first, then calculating in the head, ages 5 to 10.' },
        { code: 'MKE / Y / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Block coding for 6 to 12 year olds, with plenty of counting in it.' }
      ] },
      { num: 'II', h3: 'Older primaria', sub: 'Ages 8 to 12', courses: [
        { code: 'MKE / O / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Arrays, patterns and graphs turned into short Python programs, ages 10 to 15.' },
        { code: 'MKE / O / 02', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Speed calculation', blurb: 'Fast mental methods for confident learners from 8.' },
        { code: 'MKE / O / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code, drawings and small AI projects.' }
      ] },
      { num: 'III', h3: 'Ready for more', sub: 'Ages 10 to 13', courses: [
        { code: 'MKE / R / 01', slug: 'middle-school-math-competitions-course', title: 'Maths competitions', blurb: 'Contest-style problems for children who love puzzles.' },
        { code: 'MKE / R / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'Ratios, negative numbers and angles, ready for 1st of secundaria.' },
        { code: 'MKE / R / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Letters and equations, built slowly and carefully.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live maths classes for children work from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'A Peru morning is an Indian evening, a natural teaching hour for us.' },
      { time: 'Afternoons', l: 'After-school hours in Peru are popular for younger children; tell us yours.' },
      { time: '1-on-1', l: 'One child, one teacher, at a pace set entirely around your child.' }
    ],
    cells: [
      { h3: 'Same-age groups', p: 'Six year olds learn with six year olds.' },
      { h3: 'Things to touch', p: 'Counters, paper and drawings come before symbols.' },
      { h3: 'Gentle English', p: 'New words one at a time, always with a picture.' },
      { h3: 'One teacher', p: 'The same person every week, who knows your child.' },
      { h3: 'Parent updates', p: 'A short note on what was learnt and what to practise.' },
      { h3: 'Group or alone', p: 'Fifteen to twenty children, or one child alone.' }
    ]
  },

  projectsH2: 'Where children can go next',
  projectsLede: 'Children who enjoy maths and stay with us often move into coding, and their projects grow with them. Here are some by our older students; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Parents and students in their own words, quoted exactly from Google reviews.',

  fees: {
    h2: 'Fees for children\'s maths classes in Peru',
    lede: 'Our fees are in US dollars and are paid by card. Each month your bank converts the charge into soles at its own rate, so your statement may show a slightly different figure each time.',
    free: ['A free first class for your child', 'A gentle check of what they already know', 'No card details needed'],
    group: ['Fifteen to twenty children of a similar age', 'The same teacher each week', 'Two live classes a week', 'Pay monthly, stop at any time'],
    one: ['Your child and one teacher', 'Pace and topics set around your child', 'Class times chosen by you']
  },

  faq: {
    eyebrow: 'Parents in Peru ask',
    h2: 'Maths for kids in English: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and in English only. Teachers speak slowly and clearly, adapt to each child\'s pace and accent, and show everything with objects and pictures, so a child who is still learning English can follow.' },
      { q: 'What age can my child start?', a: 'From 6, the age at which children in Peru begin primaria. The youngest groups use counters, drawings and very simple English. For children under 6 we suggest waiting, or a gentle one-to-one start with a parent nearby.' },
      { q: 'My child speaks almost no English. Is that a problem?', a: 'Not usually. Maths uses numbers and shapes that look the same in both languages, and teachers introduce English words slowly with pictures. A child with very little English may start one to one and join a group later.' },
      { q: 'What maths do the classes cover?', a: 'Counting, the four operations, place value, fractions, shapes, measuring, simple data and lots of reasoning puzzles. We teach alongside school and follow the stages children of each age usually reach, without replacing the school\'s own programme.' },
      { q: 'When can my child\'s classes be?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. A class at 16:30 in Peru is at 03:00 the next morning for the teacher in India, and our teachers are used to that.' },
      { q: 'How long is a class, and is it too long for a six year old?', a: 'Classes for young children are broken into short activities of a few minutes each, with movement, objects and drawing. Teachers watch attention closely and change activity before a child tires.' },
      { q: 'Does my child need a computer?', a: 'A laptop, desktop or tablet works well. A phone screen is too small for drawing and moving things on the shared board. A headset helps a young child hear the teacher clearly.' },
      { q: 'Do I need to sit with my child?', a: 'Yes for the youngest, during the first few classes, to help with the camera and microphone. Most children of 9 and over manage on their own after a week or two.' },
      { q: 'Are you connected with MINEDU or my child\'s school?', a: 'No. Modern Age Coders is a separate, independent school teaching online from India. We have no link with MINEDU, a UGEL or any Peruvian school, and we give no Peruvian marks or qualifications. A child who finishes one of our courses gets a certificate of completion from us.' },
      { q: 'How are the fees paid?', a: 'With a card, in US dollars, once a month. The bank turns each charge into soles at its own rate, which is why the figure on a statement moves a little. Booking the free first class needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'Related pages',
    lede: 'More for parents of young learners in Peru.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru', p: 'All our classes for learners in Peru.' },
      { href: '/online-math-circle-for-kids', label: 'Online maths circle', p: 'Weekly puzzles and talk for children who like a challenge.' },
      { href: '/online-math-tutor-1st-grade', label: 'Maths in 1st grade', p: 'What six year olds learn, and how we teach it.' },
      { href: '/online-math-tutor-4th-grade', label: 'Maths in 4th grade', p: 'The year national tests often measure.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class, step by step.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Understanding before tricks.' }
    ]
  },

  start: {
    h2: 'Book a free maths class for your child',
    lede: 'In the free class your child plays a few counting and shape games with a teacher, in simple English, while the teacher notices what they already know and how much English they follow. Afterwards you get a suggestion: a course, a group of children their age or one-to-one classes, and a good hour.',
    readFirst: 'Want to know more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a class, and the <a class="ag-inline-link" href="/courses">course list</a> shows every syllabus.',
    note: 'Teachers join from India on live video and speak English throughout. Questions? A WhatsApp message in English gets the fastest answer.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Maths for children', links: [
        { href: '/online-math-circle-for-kids', label: 'Maths circle for kids' },
        { href: '/online-math-tutor-1st-grade', label: '1st grade maths' },
        { href: '/online-math-tutor-4th-grade', label: '4th grade maths' },
        { href: '/online-maths-tuition', label: 'Online maths tuition' }
      ] },
      { h4: 'About our classes', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Seven buttons will only make a line'
  },

  personalityCss: `
.ag-root.ag-mke .ag-hero h1 { max-width: 17ch; letter-spacing: -0.01em; }
.ag-root.ag-mke .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-mke .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-mke .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-mke .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Ley 28044 (Ley General de Educación) and D.S. 011-2012-ED (Reglamento); MINEDU Edades normativas; MINEDU, Currículo Nacional de la Educación Básica (plan of studies, maths competencies); MINEDU press release on ENLA 2024 (8 April 2025); INEI, TIC en los Hogares II Trimestre 2026 (table 2.1, internet use by age); EF EPI 2025; IANA tz database. Read 8 to 9 November 2026.',
    localProject: 'An original arrays lesson for ages 7 to 11: 12 buttons laid out as 3 rows of 4 and turned to 4 rows of 3 show that 3 x 4 = 4 x 3; listing every rectangle gives the factor pairs of 12; 7 only makes a line; Python (n % rows == 0) prints the rectangles of 12, 7 and 16 and lists the numbers below 30 with only line rectangles, which are the primes 2 to 29. Plus age-banded follow-ups.',
    requiredMentions: ['3 rows of 4 is 12', '4 rows of 3 is 12', '12 counters: [(1, 12), (2, 6), (3, 4), (4, 3), (6, 2), (12, 1)]', 'Only a single line: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]', 'A prime is a number of counters that will only make a line.', 'People in Peru who used the internet, by age group, second quarter of 2023 to 2026 (INEI)', 'a census test of 532,000 pupils in 4th grade of primaria', 'Seven buttons will only make a line', 'I know this because'],
    sources: [
      { claim: 'Primaria lasts six years; it serves children from age 6.', url: 'https://cdn.www.gob.pe/uploads/document/file/104990/_0011-2012-ED_-_14-03-2013_02_34_14_-d.s_011-2012-ed.pdf' },
      { claim: 'Normative ages measured on 31 March; 1st grade of primaria at 6, 6th grade at 11.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Maths 5/5/4/4/4/4 and English 2/2/3/3/3/3 periods of 45 minutes in primaria; the four maths competencies; English phased in depending on teachers.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ENLA 2024: census of 532,000 4th-grade pupils in 18,112 schools; rural lowest maths level from 36.8% to 28.7%.', url: 'https://www.gob.pe/institucion/minedu/noticias/1142140-enla-2024-532-000-escolares-de-4-de-primaria-muestran-recuperacion-sin-precedentes-en-lectura-y-matematica' },
      { claim: 'Internet use by age group, second quarter 2023 to 2026: 6 to 11 years 68.2% in 2026, up 6.7 points.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Peru Moderate (519), Lima High (555).', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 all year, no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'ENLA achievement-level percentages beyond MINEDU\'s press-release wording: the UMC results pages were blocked (BLOCKED.md).',
      'Recommending any AI chatbot to children: refused; Claude is 18+ and ChatGPT needs a parent\'s permission under 18.',
      'Any Peruvian grade, qualification or school endorsement: none; our own certificate of completion only.',
      'A typed fee or soles conversion: refused; fees render from the template in USD.',
      'Any connection with MINEDU, a UGEL or a school: none, and the page says so.'
    ]
  }
};
