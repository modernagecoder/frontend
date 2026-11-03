'use strict';
// Python classes for kids in Germany (ag- English door, Germany cluster row DE029, rows.tsv P2).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live in English only, matching the learner's pace and accent; pages show euro,
// checkout charges USD.
// Spine: typed Python for children of about 9 to 14 in Germany. Why Python (free, open licence, turtle from Logo),
// where it meets school Informatik, a national open-data project on German electricity, and the Jugendwettbewerb
// Informatik as a free next step.
// Sources (read raw, fetched 3 November 2026 unless stated; copies in
// ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/python-classes-for-kids-germany/):
//  - python.org/downloads: "Python 3.15.2 Oct. 25, 2026", "Python 3.15.0 Oct. 9, 2026".
//  - python.org/about: "Python is developed under an OSI-approved open source license, making it freely usable and
//    distributable, even for commercial use."
//  - docs.python.org/3/library/turtle.html: "Turtle graphics is an implementation of the drawing tools introduced in Logo
//    in 1967." "It was created as an educational tool, and its instant, visible feedback makes it an effective way for
//    learners to encounter programming concepts."
//  - smard.de/home/datennutzung: market data under "Creative Commons Namensnennung 4.0 International Lizenz"; attribution
//    to use: "Bundesnetzagentur | SMARD.de". Wholesale prices excluded by SMARD and not used.
//  - Data: SMARD download centre, Stromerzeugung, daily resolution, region DE, 1 January to 31 December 2025, CSV
//    (smard_erzeugung_2025_tag.csv, 50,927 bytes, sha256 18e3eec3006278eb21bebff50148566e1ff89eda8bafa57b2a686cb0d6c99998),
//    columns "Wind Offshore [MWh]", "Wind Onshore [MWh]", "Photovoltaik [MWh]" (German number format, ; separated).
//    Cross-checked against the chart_data JSON series 4068, 4067 and 1225 (first values equal).
//  - FACTS.md (fetched 2 November 2026): Jugendwettbewerb from grade 3 (141); levels "Bronze (empfohlen für Jg. 5/6):
//    3 Aufgaben / 30 Minuten Silber (empfohlen für Jg. 7/8/9): 4 Aufgaben / 40 Minuten Gold (empfohlen ab Jg. 10):
//    6 Aufgaben / 60 Minuten" (142); 2026 round 1 23 February to 8 March 2026 (139); round 2 17 April to 3 May, round 3
//    from 1 September with the Bundeswettbewerb (140); round 3 deadline 23 November 2026 (143); record 71,971 (144).
//    Informatik-Monitor: NRW grades 5 and 6 (80); Bayern Gymnasium grades 6 and 7 Schwerpunkt Informatik (70); Sachsen
//    grades 7 to 10 (85); Niedersachsen grades 9 and 10 (79).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
// Our own calculations (scratchpad de/w/G3/pki/v1.py, v2.py, v23.py and an analysis script, python3 -I, Python 3.14.8):
// v1 raises "ValueError: could not convert string to float: '56.781,25'"; v2 prints "Days in 2025: 365", "Days the sun
// beat the wind: 121", "First: 01.02.2025 Last: 08.11.2025"; v3 prints {'01': 0, '02': 5, '03': 11, '04': 21, '05': 16,
// '06': 17, '07': 16, '08': 22, '09': 8, '10': 4, '11': 1, '12': 0}. Our sums: solar 73.78 TWh, wind 132.96 TWh in 2025;
// June solar 10.54 against wind 10.53 TWh; sunniest day 20.06.2025 (477,677.25 MWh); dullest 05.01.2025 (9,092.50 MWh);
// longest run of sun-beats-wind days 12, 11 to 22 June 2025.
// Lesson family: clean the text before you compute; data written the German way needs translating for Python.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("strom_2025.csv", encoding="utf-8") as f:',
  '    rows = list(csv.DictReader(f, delimiter=";"))',
  '',
  'first = rows[0]',
  'print(first["datum"], first["sonne"])',
  'print(float(first["sonne"]) + 1)'
].join('\n');

const V2 = [
  'import csv',
  '',
  'def zahl(text):',
  '    # German style: 56.781,25 means 56781.25',
  '    return float(text.replace(".", "").replace(",", "."))',
  '',
  'with open("strom_2025.csv", encoding="utf-8") as f:',
  '    rows = list(csv.DictReader(f, delimiter=";"))',
  '',
  'sun_days = []',
  'for row in rows:',
  '    sun = zahl(row["sonne"])',
  '    wind = zahl(row["wind_land"]) + zahl(row["wind_see"])',
  '    if sun > wind:',
  '        sun_days.append(row["datum"])',
  '',
  'print("Days in 2025:", len(rows))',
  'print("Days the sun beat the wind:", len(sun_days))',
  'print("First:", sun_days[0], "Last:", sun_days[-1])'
].join('\n');

const V3 = [
  'wins = {}',
  'for row in rows:',
  '    month = row["datum"][3:5]',
  '    sun = zahl(row["sonne"])',
  '    wind = zahl(row["wind_land"]) + zahl(row["wind_see"])',
  '    wins[month] = wins.get(month, 0) + (1 if sun > wind else 0)',
  '',
  'print(wins)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Python classes for kids' },
  slug: 'python-classes-for-kids-germany',
  code: 'pki',
  accent: '#604B83',
  accentRationale: 'Python classes for kids in Germany: a muted violet #604B83, cooler than the AI page plum and far from the hub green; contrast 6.02 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Python classes for kids in Germany',
  title: 'Python Classes for Kids in Germany: Live Online, in English',
  description: 'Python classes for kids in Germany aged 9 to 14, live online in English: when to start typed code, a project on German solar and wind data, and the Jugendwettbewerb.',
  ogDescription: 'Typed Python for children of about 9 to 14 in Germany, taught live in English: why Python suits a first real language, where it meets school Informatik, and a project that asks whether the sun or the wind gave Germany more electricity in 2025.',
  twitterDescription: 'Python for children in Germany, live in English, with a real project on German solar and wind power.',
  pageName: 'Python Classes for Kids in Germany',
  webPageDescription: 'A guide for parents in Germany of children aged about 9 to 14 to learning Python, built on python.org, the Python documentation, Bundesnetzagentur SMARD data for 2025 and the Bundesweite Informatikwettbewerbe pages, with an original project.',
  courseDescription: 'Live online Python classes in English for children in Germany aged about 9 to 14: typed code from the first lesson, turtle drawings, games and real data, in a group of fifteen to twenty or one to one, with one mentor all year.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Python for kids',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#python', label: 'Python' },
    { href: '#project', label: 'Project' },
    { href: '#jwinf', label: 'Contest' },
    { href: '#ages', label: 'By age' }
  ],
  eyebrow: 'Germany &middot; Python for children &middot; Ages 9 to 14',
  h1: 'Python classes for kids in Germany',
  lede: 'There comes a point when dragging blocks feels slow and a child wants to type real code. For most children that is somewhere between 9 and 11. This page is about that step: why Python is a good language to take it in, how it lines up with Informatik at a German school, a first project on real German electricity data that goes wrong in an instructive way, and a free national contest to aim at afterwards.',
  secondaryCta: { href: '#project', label: 'See the sun and wind project' },
  wa: 'Hello Modern Age Coders, our child in Germany would like to learn Python in English. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; typed code from the first lesson',
  spec: [
    ['Ages', 'About 9 to 14'],
    ['Language', 'Python 3, typed'],
    ['First projects', 'Turtle drawings and games'],
    ['Later', 'Real data and small AI'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'At a glance',
  capsule: 'Python classes for kids in Germany at Modern Age Coders are live online lessons in English for children of about 9 to 14 who are ready to type real code. Our Python and AI for Kids course begins with turtle drawings and small games, then moves to lists, functions and real German open data. A mentor based in India teaches at your child\'s speed, in German afternoons or at weekends, either in a class of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Python courses',
    h2: 'Three ways into Python for children in Germany',
    lede: 'The main Python course, one that follows school Informatik in English, and one that uses Python to make school maths visible.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PKI / 01', title: 'Python and AI, ages 9 and up', note: 'The core course. Turtle art, games, then lists, files and small AI projects like the electricity one on this page.' },
      { course: 'informatik-companion-course-klasse-5-10', code: 'PKI / 02', title: 'Informatik Companion, from Klasse 5', note: 'Follows the topics of German school Informatik in English, so typed code at home and Informatik at school support each other.' },
      { course: 'maths-through-coding', code: 'PKI / 03', title: 'Maths through coding', note: 'Ages 10 to 15. Fractions, primes, graphs and chance worked out in Python, a good fit for children who like numbers.' }
    ]
  },

  sections: [
    {
      id: 'python',
      eyebrow: 'Why Python',
      h2: 'Is Python a good first typed language for a child?',
      lede: 'For most children, yes. Python reads almost like short English sentences, it costs nothing, and it is a language adults use at work, so nothing learned is thrown away later.',
      body: [
        { kind: 'two',
          leftH3: 'Free, and kept current',
          left: [
            'Python is developed, in the words of python.org, "under an OSI-approved open source license, making it freely usable and distributable, even for commercial use". No family needs to buy a licence, and a child can install it on any computer at home.',
            'It is also very much alive: python.org lists Python 3.15.0 as released on 9 October 2026 and 3.15.2 on 25 October 2026. The programs on this page were tested with Python 3.14.'
          ],
          rightH3: 'Turtle, made for learners',
          right: [
            'Python ships with a drawing module called turtle. Its documentation explains that turtle graphics is "an implementation of the drawing tools introduced in Logo in 1967", created as an educational tool whose "instant, visible feedback" helps learners meet programming ideas.',
            'That is why our nine year olds start there: four lines of code, and a square appears. Change one number, and it becomes a star.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Scratch or Python? How we decide for each child (ours)', head: ['Sign', 'Stay with Scratch a little longer', 'Ready for Python'], rows: [
          ['Reading', 'Still reads slowly or guesses words', 'Reads instructions alone and enjoys it'],
          ['Typing', 'Hunts for every letter', 'Can type a short line without help'],
          ['Patience', 'Upset when a game breaks', 'Curious about why it broke'],
          ['Projects', 'Still has Scratch ideas to finish', 'Asks how to do things Scratch cannot']
        ] },
        { kind: 'source', html: 'Sources: python.org, About and Downloads pages; Python documentation, turtle module; both read on 3 November 2026. The table is our own placement guide; age alone does not decide it.' },
        { kind: 'p', mt: true, html: 'At a German school, typed programming arrives at different ages. The Informatik-Monitor 2026/27 shows Informatik for every pupil in grades 5 and 6 in Nordrhein-Westfalen, an Informatik focus in grades 6 and 7 at a Bavarian Gymnasium, one weekly lesson in grades 7 to 10 in Sachsen, and grades 9 and 10 in Niedersachsen. Which language a school uses is up to its curriculum and its teacher. What we teach is the thinking under any language: variables, conditions, loops, functions and data, so that whatever arrives on the school timetable feels familiar.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real German dataset',
      h2: 'Did the sun or the wind give Germany more electricity in 2025?',
      lede: 'The Bundesnetzagentur publishes how much electricity Germany generated from each source, every day, on its SMARD platform, under a Creative Commons licence that allows reuse with credit. It is perfect for an eleven year old, and the first thing it teaches is that German numbers need translating before Python can read them.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'From SMARD\'s download centre we take daily generation for Germany for all of 2025: 365 rows, one per day, with columns for solar (Photovoltaik), onshore wind and offshore wind, in megawatt hours. We keep those three in a small file, strom_2025.csv.',
            'The file is written the German way. Columns are separated by semicolons, the thousands are marked with a full stop and the decimals with a comma, so 56.781,25 means fifty-six thousand, seven hundred and eighty-one and a quarter.'
          ],
          rightH3: 'The question',
          right: [
            'On how many days in 2025 did solar power produce more than all wind power together? A child usually guesses "summer, so about half". The program will tell us exactly, but only after we teach it to read the numbers.',
            'The first version simply tries to treat the text as a number, which is what most beginners would do.'
          ] },
        { kind: 'code', label: 'Version 1: just read the number', lang: 'Python', code: V1, note: 'It prints <code>01.01.2025 56.781,25</code> and then stops with <code>ValueError: could not convert string to float: \'56.781,25\'</code>. Python expects 56781.25, written the English way.' },
        { kind: 'p', mt: true, html: 'Nothing is wrong with the data, and nothing is wrong with Python. They are simply using different conventions, and a programmer\'s job is to translate. A small function, <code>zahl</code>, removes the full stops and turns the comma into a point. With that in place the real question can be answered.' },
        { kind: 'code', label: 'Version 2: translate first, then compare', lang: 'Python', code: V2, note: 'It prints: <code>Days in 2025: 365</code>, <code>Days the sun beat the wind: 121</code> and <code>First: 01.02.2025 Last: 08.11.2025</code>.' },
        { kind: 'p', mt: true, html: 'So the sun won on 121 days, about one in three, the first on 1 February and the last on 8 November 2025. Version 3 counts the wins month by month, which turns one number into a pattern a child can explain.' },
        { kind: 'code', label: 'Version 3: count the wins by month', lang: 'Python', code: V3, note: 'After Version 2, it prints: <code>{\'01\': 0, \'02\': 5, \'03\': 11, \'04\': 21, \'05\': 16, \'06\': 17, \'07\': 16, \'08\': 22, \'09\': 8, \'10\': 4, \'11\': 1, \'12\': 0}</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Solar against all wind in Germany, 2025, by month (our sums of SMARD daily values)', head: ['Month', 'Solar, TWh', 'Wind, TWh', 'Days solar was higher'], rows: [
          ['January', '1.63', '15.74', '0'],
          ['April', '8.95', '6.92', '21'],
          ['June', '10.54', '10.53', '17'],
          ['August', '9.67', '7.16', '22'],
          ['October', '3.64', '16.60', '4'],
          ['December', '1.51', '15.90', '0'],
          ['Whole year', '73.78', '132.96', '121']
        ] },
        { kind: 'source', html: 'Data: Bundesnetzagentur | SMARD.de, Stromerzeugung, daily values for Germany, 1 January to 31 December 2025, downloaded 3 November 2026, licence CC BY 4.0. Wind is onshore plus offshore. Monthly and yearly figures are our own sums of the daily values, in terawatt hours (1 TWh is 1,000,000 MWh), rounded to two decimals.' },
        { kind: 'p', mt: true, html: 'Over the whole year wind still produced far more, 132.96 TWh against 73.78. But the months tell a richer story. In April and August the sun led on most days; in January and December it never did once; and June was almost exactly a tie, 10.54 against 10.53. The sunniest single day was 20 June 2025, the dullest 5 January 2025, and the longest run of sunny wins was twelve days in a row, from 11 to 22 June.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 10.</strong> Type <code>float("56.781,25")</code> into Python and read the error out loud. Then fix the text by hand until Python accepts it.',
          '<strong>Ages 10 to 12.</strong> Run Version 2 and write <code>zahl</code> yourself without looking. Then find the sunniest day of the year with <code>max</code>.',
          '<strong>Ages 12 to 14.</strong> Write Version 3, then add a line that prints a bar of # signs for each month, a text chart.',
          '<strong>Going further.</strong> SMARD\'s full download also has a column for nuclear power, Kernenergie, and every day of 2025 shows only a dash there. What happens when <code>zahl</code> meets "-", and what should a careful program do instead?'
        ] }
      ]
    },
    {
      id: 'jwinf',
      eyebrow: 'A free contest',
      h2: 'Is there a coding competition for children in Germany?',
      lede: 'Yes. The Jugendwettbewerb Informatik, run by the Bundesweite Informatikwettbewerbe, is free, online and open in principle from grade 3. It sits one step above the Informatik-Biber puzzle quiz and is where real programming tasks begin.',
      body: [
        { kind: 'table', numCols: [], caption: 'Jugendwettbewerb Informatik levels, as published by the organisers for 2026', head: ['Level', 'Recommended for', 'Tasks and time'], rows: [
          ['Bronze', 'Grades 5 and 6', '3 tasks in 30 minutes'],
          ['Silber', 'Grades 7, 8 and 9', '4 tasks in 40 minutes'],
          ['Gold', 'Grade 10 and up', '6 tasks in 60 minutes']
        ] },
        { kind: 'source', html: 'Source: Bundesweite Informatikwettbewerbe, bwinf.de/jugendwettbewerb, read on 2 November 2026. Rounds in 2026: round 1 from 23 February to 8 March 2026, round 2 from 17 April to 3 May, and round 3 from 1 September together with the Bundeswettbewerb Informatik, with a deadline of 23 November 2026. The organisers report a record 71,971 participants.' },
        { kind: 'p', mt: true, html: 'Entry usually runs through a school, so a child should ask their Informatik or maths teacher. We are not connected with the organisers and we never use or copy their tasks. In class we write our own problems in the same spirit, and the free past rounds on the organisers\' website are the right place to practise for real. Children who want a structured route can take our <a class="ag-inline-link" href="/courses/german-informatics-competitions-course-biber-bwinf-bwki">German informatics competitions course</a>.' }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Age by age',
      h2: 'What can a child write in Python at 9, 11 and 13?',
      lede: 'Roughly this, though children move at their own speed and the mentor sets the pace for each one.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Around 9', p: 'Turtle drawings with loops, a guess-the-number game, a quiz that keeps score. Short programs, typed carefully, with lots of running and fixing.' },
          { h3: 'Around 11', p: 'Lists and functions, reading a small file, programs that answer a question about data, like the sun and wind file. Errors become clues rather than disasters.' },
          { h3: 'Around 13', p: 'Dictionaries, larger games, simple simulations and first steps in how a machine learns from examples. Code that another person can read and reuse.' }
        ] },
        { kind: 'p', mt: true, html: 'Through all of it, the rule is the same: the child writes the code and can explain it. We do not let children paste in code they do not understand, from an AI tool or anywhere else. A short program that a ten year old can defend line by line is worth more than a long one they cannot.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Example class times in Germany, and the mentor\'s side', head: ['In Germany', 'Mentor\'s time now', 'Mentor\'s time from 28 March 2027'], rows: [
          ['Weekday 16:15', '20:45', '19:45'],
          ['Saturday 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'Germany runs on MEZ (UTC+1) until 28 March 2027 and on MESZ (UTC+2) after it, under the Einheitenzeitgesetz; summer time last ended on 25 October 2026. India stays on UTC+5:30, so the mentor is four and a half hours ahead now and three and a half from late March. Examples only, not fixed batch times.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Five Python milestones for children',
    lede: 'Our own steps. They help us put a child in the right group and give parents a clear picture of progress.',
    table: { caption: 'From first line to real data (ours)', head: ['Milestone', 'Usual age', 'Your child can'], rows: [
      ['1. Draw', '9 to 10', 'Use turtle and a loop to draw a shape, and change it on purpose'],
      ['2. Decide', '9 to 11', 'Write a game that reacts to the player with if, elif and else'],
      ['3. Reuse', '10 to 12', 'Wrap a repeated job in a function and call it with different values'],
      ['4. Translate', '11 to 13', 'Clean messy text, such as German-style numbers, before computing with it'],
      ['5. Ask the data', '12 to 14', 'Answer a real question from a file and say how sure the answer is']
    ] },
    left: { h3: 'For parents', ps: [
      'Milestone 4 is the sun and wind project. Children who reach it stop being surprised by errors and start reading them.',
      'We describe progress in what your child can build and explain, never in hours spent online.'
    ] },
    right: { h3: 'For children', ps: [
      'An error message is Python telling you exactly what confused it. Read it slowly before you change anything.',
      'Data from another country may write numbers differently. Look at a few rows before you trust any total.'
    ] }
  },

  catalogue: {
    eyebrow: 'Next and alongside',
    h2: 'Nine more courses for children learning Python in Germany',
    lede: 'Some come before Python, some sit beside it, some come after. All are live and in English.',
    bands: [
      { num: 'I', h3: 'Before typing', sub: 'Ages 6 to 12', courses: [
        { code: 'PKI / BEFORE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Blocks first, for children not yet ready to type.' },
        { code: 'PKI / BEFORE / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'The year-long route that ends where Python begins.' },
        { code: 'PKI / BEFORE / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Puzzles that build the logic Python needs.' }
      ] },
      { num: 'II', h3: 'Beside Python', sub: 'Ages 8 to 14', courses: [
        { code: 'PKI / BESIDE / 01', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'German informatics competitions', blurb: 'Original practice for the Biber and the Jugendwettbewerb.' },
        { code: 'PKI / BESIDE / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How machines learn from examples, without chatbot accounts.' },
        { code: 'PKI / BESIDE / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon prep for kids', blurb: 'Twelve weeks of project work towards a free event, 8 to 12.' }
      ] },
      { num: 'III', h3: 'After Python basics', sub: 'Ages 9 to 16', courses: [
        { code: 'PKI / AFTER / 01', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'A second, stricter language, 9 to 12.' },
        { code: 'PKI / AFTER / 02', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'HTML, CSS and a little JavaScript, built live.' },
        { code: 'PKI / AFTER / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot game development', blurb: 'A real engine with a Python-like language, GDScript.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'The weekly rhythm',
    h2: 'How Python lessons run for a child in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Late afternoon in Germany, early evening for the mentor.' },
      { time: 'Saturday', l: 'Around midday, good for a longer project session.' },
      { time: 'Private', l: 'One to one at a time you agree, at your child\'s speed.' }
    ],
    cells: [
      { h3: 'Typed from day one', p: 'No copying from slides; the child types every line.' },
      { h3: 'Read the error', p: 'Mistakes are read aloud and fixed together.' },
      { h3: 'Same mentor', p: 'One person all year, who knows your child\'s code.' },
      { h3: 'Real data', p: 'Files from German open-data publishers, not toy lists only.' },
      { h3: 'Explain it back', p: 'Each child explains their program before moving on.' },
      { h3: 'A note home', p: 'Parents hear what was built and what comes next.' }
    ]
  },

  projectsH2: 'Python projects by our students',
  projectsLede: 'A few things our students have built; the <a class="ag-inline-link" href="/student-labs">student labs</a> hold the rest.',
  reviewsLede: 'Reviews left on Google by our families, reproduced as written.',

  fees: {
    h2: 'Python class fees for families in Germany',
    lede: 'The monthly fee buys eight live Python lessons. Prices on this page are euro figures derived from the European Central Bank reference rate, while the payment is processed in US dollars, so the final euro amount depends on your bank\'s own conversion.',
    free: ['A free first Python class', 'A first program typed together', 'No card asked for'],
    group: ['Fifteen to twenty children, similar age and level', 'One mentor for the year', 'Two lessons each week', 'Billed monthly, stop when you like'],
    one: ['Just your child and the mentor', 'Projects chosen around your child', 'Times to suit your family']
  },

  faq: {
    eyebrow: 'Parents ask',
    h2: 'Python classes for kids in Germany: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons are live and in English only. Python itself is written in English words such as print, if and while, so learning it in English is natural. The mentor matches your child\'s pace and accent and keeps the language simple.' },
      { q: 'What age is right for Python?', a: 'Usually around 9 to 11, once a child reads well and can type a short line. Younger children start with Scratch and move across when they are ready; age alone does not decide it.' },
      { q: 'Does my child need to know Scratch first?', a: 'It helps but is not required. Children who have used Scratch already understand loops and conditions, so the first Python weeks feel easier. Beginners of 10 or older can start Python directly.' },
      { q: 'Is Python free to install?', a: 'Yes. Python is open source under a licence that python.org describes as making it freely usable and distributable. It runs on Windows, macOS and Linux, and at the very start it can also run in a browser.' },
      { q: 'Do German schools teach Python?', a: 'Schools choose their own tools within each Land\'s curriculum, and the language varies. What is fixed is when Informatik arrives, from grade 5 in Länder such as Nordrhein-Westfalen to grade 9 in Niedersachsen, according to the Informatik-Monitor 2026/27.' },
      { q: 'When are the classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A class at 16:15 in Germany is 20:45 for the mentor in India until 28 March 2027.' },
      { q: 'Can my child enter the Jugendwettbewerb Informatik?', a: 'Usually yes, through the school. It is free, online and open in principle from grade 3, with Bronze, Silber and Gold levels from 2026. Ask a teacher whether the school takes part. We are not connected with the organisers.' },
      { q: 'Will my child use AI tools like ChatGPT in class?', a: 'No. We teach children to write and understand their own code. ChatGPT\'s own terms require users to be at least 13, with a parent\'s permission under 18, so it has no place in a class for younger children.' },
      { q: 'How are fees shown and paid?', a: 'The monthly fee appears in euro, calculated with the European Central Bank reference rate. Payment goes through in US dollars, and your bank converts it, so the statement may differ slightly. The first class is free.' },
      { q: 'What does my child need?', a: 'A laptop or desktop with a keyboard, a headset and a stable internet connection. We help install Python in class when the time comes.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Where to read more about Python for children and about learning in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page in one place.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany', p: 'When each Land starts Informatik.' },
      { href: '/python-for-beginners-kids', label: 'Python for beginner kids', p: 'The very first steps in Python.' },
      { href: '/python-for-11-year-olds', label: 'Python at eleven', p: 'What an eleven year old can build.' },
      { href: '/python-for-13-year-olds', label: 'Python at thirteen', p: 'Bigger programs for young teens.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools allow which ages.' }
    ]
  },

  start: {
    h2: 'Book a free Python class',
    lede: 'In the free class the mentor types a first Python program with your child, sees how comfortable they are reading and typing, and suggests whether to start with Python or with Scratch first.',
    readFirst: 'To read more first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson in detail, and the <a class="ag-inline-link" href="/courses/python-ai-kids-masterclass">Python and AI for Kids syllabus</a> lists every topic.',
    note: 'Classes are live online in English, with mentors in India. WhatsApp reaches us fastest.',
    formNote: 'Free, no card, nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Python for children', links: [
        { href: '/python-for-beginners-kids', label: 'Python for beginners' },
        { href: '/python-for-11-year-olds', label: 'Python at eleven' },
        { href: '/python-for-13-year-olds', label: 'Python at thirteen' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany' },
        { href: '/online-coding-classes-for-kids-germany', label: 'Online classes explained' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: '56.781,25 is not a float'
  },

  personalityCss: `
.ag-root.ag-pki .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-pki .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-pki .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pki .ag-code-head b { font-weight: 700; }
.ag-root.ag-pki .ag-table caption { text-align: left; letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'python.org About and Downloads; Python documentation, turtle; Bundesnetzagentur SMARD Datennutzung (CC BY 4.0); Bundesweite Informatikwettbewerbe, Jugendwettbewerb pages; Gesellschaft für Informatik, Informatik-Monitor 2026/27; Einheitenzeitgesetz; read 2 and 3 November 2026.',
    localProject: 'Sun or wind: an original Python project on SMARD daily electricity generation for Germany in 2025, where the first version fails on German number formatting (ValueError on 56.781,25), a translating function fixes it, and the answer is 121 days on which solar beat all wind, with a month-by-month count. Lesson family: clean the text before you compute.',
    requiredMentions: ['strom_2025.csv', "could not convert string to float: '56.781,25'", 'Days the sun beat the wind: 121', 'First: 01.02.2025 Last: 08.11.2025', 'Bundesnetzagentur | SMARD.de', 'introduced in Logo in 1967', '10.54 against 10.53', '56.781,25 is not a float'],
    sources: [
      { claim: 'Python licence and current release dates.', url: 'https://www.python.org/about/' },
      { claim: 'Python 3.15.0 on 9 October 2026, 3.15.2 on 25 October 2026.', url: 'https://www.python.org/downloads/' },
      { claim: 'Turtle graphics from Logo, 1967, an educational tool.', url: 'https://docs.python.org/3/library/turtle.html' },
      { claim: 'SMARD market data licence CC BY 4.0 and attribution.', url: 'https://www.smard.de/home/datennutzung' },
      { claim: 'Daily generation by source for Germany, 2025.', url: 'https://www.smard.de/home/downloadcenter/download-marktdaten' },
      { claim: 'Jugendwettbewerb levels, rounds and participation.', url: 'https://bwinf.de/jugendwettbewerb/' }
    ],
    rejectedClaims: [
      'Which programming language each Land\'s schools use: not stated in the Informatik-Monitor quotes we hold, so not claimed.',
      'SMARD wholesale prices: SMARD asks that they not be reused for now, so not used.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with BWINF, the Bundesnetzagentur or the Python Software Foundation: none.'
    ]
  }
};
