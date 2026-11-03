'use strict';
// Coding classes for kids in Ulm (ag- city page, Germany cluster P6 row DE187, tier-2 shape coding-classes-for-kids =
// ages 6 to 12).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: a word is not yet a rule. "How many freezing days did Ulm have?" has two honest answers (105 or 25) until the
// child decides exactly what "freezing" means; coding is the habit of turning words into exact conditions.
// City data searched first: www.ulm.de returned HTTP 403 (stopped, no retry); datenhub.ulm.de and gtfs.swu.de did not
// connect (curl 000); daten.ulm.de is a JavaScript map app with no file list. So the project uses the DWD station inside
// the city, Ulm-Mähringen (Mähringen is a district of Ulm; coordinates checked by reverse lookup to city Ulm), which no
// other page uses.
// Sources (school and contest facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/
// FACTS.md, fetched 2 Nov 2026; numbers are fact ids there):
//  - KMK Primarbereich: Grundschule "von der ersten bis zur vierten" Jahrgangsstufe outside Berlin and Brandenburg (1).
//  - GI Informatik-Monitor 2026/27, BW page: "Mit dem Schuljahr 2025/2026 wird schulartübergreifend in der Sekundarstufe I
//    das Pflichtfach Informatik und Medienbildung eingeführt, wobei die Umsetzung zunächst in den Jahrgangsstufen 5 und 6
//    erfolgt" (67); national page: BW meets the 4-hour short-term recommendation (91).
//  - bwinf.de: Biber "kostenfrei" (129); "Jahrgangsstufen 3 bis 13, keine Vorkenntnisse erforderlich" (130); primary
//    pupils "neun Aufgaben in 30 Minuten", grades 5 and 6 "zwölf Aufgaben 35 Minuten" (132); "Die Biberwochen 2026
//    finden vom 9. bis 20. November statt." (133).
//  - mathe-kaenguru.de: "Känguru-Wettbewerb 2027 ausnahmsweise erst im April statt, und zwar am 8. April 2027." (183);
//    "Online-Anmeldung: ab 01.12.2026 Anmeldeschluss: 31.01.2027" (184); 75 minutes, 24 tasks in grades 3/4 and 5/6 (186).
//  - KMK Ferien 2026/2027, BW row (raw src-pages/coding-classes-in-land-bremen/kmk-fer2627/fe303dbf.txt): "26.10. -
//    30.10." / "31.10. 23.12. - 09.01. -- 25.03." / "30.03. - 03.04. 18.05. - 29.05. 29.07. - 11.09.".
//  - DWD Lexikon, Frosttag: "Ein Frosttag ist ein Tag, an dem das Minimum der Lufttemperatur unterhalb des Gefrierpunktes
//    (0 °C ) liegt"; "Die Anzahl der Frosttage ist somit größer oder gleich der Anzahl der Eistag e, an denen durchgehend
//    Frost vorherrscht." (raw dwd_glossar_frosttag.html in src-pages, fetched 3 Nov 2026).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Ulm 129,882; Stuttgart 612,663; Augsburg 301,105.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate data (KL), station 15444 "Ulm-Mähringen",
//    tageswerte_KL_15444_20140901_20251231_hist.zip, downloaded 3 November 2026; Metadaten_Geographie 592.57 m, 48.4418 N,
//    9.9216 E, since 15 May 2014; 4,140 days from 1 September 2014 to 31 December 2025, no missing TNK or TXK values
//    (snow depth has 1,246 missing days and is not used). Licence CC BY 4.0 (opendata.dwd.de Terms_of_use.txt).
// Our own calculations (scratchpad de/w/T6/ulm/v1.py, v2.py, python3 -I), winter year = 1 July to 30 June:
//  v1 on 2024/25: "Days in the winter year: 365", "Rule A, below zero at night: 105", "Rule B, below zero all day: 25".
//  v1+v2: "Nights that stopped at exactly 0.0: 4".
//  By winter year (frost nights / ice days): 2015/16 96/10, 2016/17 121/34, 2017/18 97/27, 2018/19 104/19, 2019/20 98/8,
//  2020/21 125/29, 2021/22 119/10, 2022/23 87/23, 2023/24 69/13, 2024/25 105/25. 2024/25: coldest night 4 January 2025
//  -9.2 C; first frost night 13 November 2024, last 19 April 2025.
// Lesson family: a word is not a rule; write the exact condition (and its boundary, below or at zero) before you count.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'days = []',
  'with open("ulm_maehringen.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if "2024-07-01" <= row["date"] <= "2025-06-30":',
  '            days.append(row)',
  '',
  'cold_night = 0',
  'cold_all_day = 0',
  'for day in days:',
  '    if float(day["low"]) < 0:',
  '        cold_night = cold_night + 1',
  '    if float(day["high"]) < 0:',
  '        cold_all_day = cold_all_day + 1',
  '',
  'print("Days in the winter year:", len(days))',
  'print("Rule A, below zero at night:", cold_night)',
  'print("Rule B, below zero all day:", cold_all_day)'
].join('\n');

const V2 = [
  'exactly_zero = 0',
  'for day in days:',
  '    if float(day["low"]) == 0:',
  '        exactly_zero = exactly_zero + 1',
  'print("Nights that stopped at exactly 0.0:", exactly_zero)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Ulm: coding for kids' },
  slug: 'coding-classes-for-kids-in-ulm-germany',
  code: 'cku',
  accent: '#8B5800',
  accentRationale: 'Coding classes for kids in Ulm: an ochre brown #8B5800 for the golden sandstone of the Ulmer Münster; contrast 4.88 on the paper #FBF8F2 and above 4.5 on the paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-baden-wuerttemberg', name: 'Baden-Württemberg' }],
  routeLabel: 'Coding classes for kids in Ulm',
  title: 'Coding Classes for Kids in Ulm: Live Online, in English',
  description: 'Coding classes for kids in Ulm aged 6 to 12, live online in English: when BW schools start Informatik, free contests in 2026/27 and an Ulm frost data project.',
  ogDescription: 'Live online coding in English for Ulm children aged 6 to 12: Scratch first, then Python, with a project on Ulm\'s own weather station where the question "how many freezing days?" has two true answers.',
  twitterDescription: 'Coding for Ulm kids, live in English, with a frost-day project on Ulm weather data.',
  pageName: 'Coding Classes for Kids in Ulm',
  webPageDescription: 'A guide for Ulm parents of children aged 6 to 12 to live coding classes in English: when Informatik begins at schools in Baden-Württemberg, the free Informatik-Biber and Känguru contests in 2026/27, and an original project on the Deutscher Wetterdienst station Ulm-Mähringen.',
  courseDescription: 'Live online coding classes in English for Ulm children aged 6 to 12: puzzles and Scratch for the youngest, typed Python from about nine, in a class of fifteen to twenty or one to one, always with the same mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Ulm',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#stages', label: 'By age' },
    { href: '#frost', label: 'Frost data' },
    { href: '#contests', label: 'Contests' },
    { href: '#uhrzeit', label: 'Times' }
  ],
  eyebrow: 'Ulm &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Ulm',
  lede: 'Was last winter in Ulm cold? A child who says "very" is giving an opinion. A child who says "105 nights below zero, but only 25 days that stayed frozen all day" is thinking like a programmer. This page explains how our live classes in English take an Ulm child from first Scratch blocks to small Python programs like that one, when schools in Baden-Württemberg begin Informatik, and which free contests your child can try this school year.',
  secondaryCta: { href: '#frost', label: 'Try the frost project' },
  wa: 'Hello Modern Age Coders, my child lives in Ulm and would like to learn coding in English. Can we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; the same kind mentor every week',
  spec: [
    ['Ages', '6 to 12, in age groups'],
    ['First tool', 'Scratch blocks'],
    ['From about 9', 'Typed Python'],
    ['Class size', '15 to 20, or one to one'],
    ['Mentors', 'Based in India, teaching in English'],
    ['Trial', 'Free, no card']
  ],
  capsuleQ: 'In a sentence or two',
  capsule: 'Modern Age Coders teaches coding to Ulm children aged 6 to 12 in live online classes held in English. The youngest solve puzzles and build Scratch games, and from about nine children type real Python, always with the same mentor, who matches their pace and accent. Lessons fit Ulm afternoons and weekend mornings, in a class of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Good first steps',
    h2: 'Which first coding course suits an Ulm child?',
    lede: 'Three ways in, depending on age and on how your child likes to learn.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'CKU / 01', title: 'Scratch Coding for Kids', note: 'For beginners from 6. Games and animations made from blocks, a quick way to find out whether coding clicks.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'CKU / 02', title: 'Problem Solving for Kids', note: 'For puzzle lovers. Rules, patterns and step-by-step thinking, the same habits the frost project below needs.' },
      { course: 'python-ai-kids-masterclass', code: 'CKU / 03', title: 'Python and AI for Kids', note: 'From about 9. Real typed Python, small games and data files, then a gentle first look at AI.' }
    ]
  },

  sections: [
    {
      id: 'stages',
      eyebrow: 'Age by age',
      h2: 'What does an Ulm child learn in coding class at 6, 9 and 12?',
      lede: 'The same thinking at every age, in a form that fits the child. Groups are always by age, so a first grader never sits with a sixth grader.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Around 6 to 8', p: 'Short, playful lessons. Children order picture steps, find the mistake in a set of instructions, and make a Scratch cat walk, jump and talk. Reading is kept light; most of the work is dragging and trying.' },
          { h3: 'Around 8 to 10', p: 'Bigger Scratch projects with loops, scores and simple rules. Children start to plan before they build, and to say what should happen before they press the green flag.' },
          { h3: 'Around 10 to 12', p: 'Typed Python. Counting, comparing, lists and small files with real numbers, like the Ulm weather record below. By 12 many children can write and explain a short program of their own.' }
        ] },
        { kind: 'p', mt: true, html: 'In every group the mentor works in English, slowly and clearly, and gets used to how your child speaks. Children who answer in a mix of German and English are understood; the mentor simply gives them the English word and moves on. Scratch blocks and Python keywords look the same whatever language a child speaks at home.' }
      ]
    },
    {
      id: 'schule',
      eyebrow: 'School in Baden-Württemberg',
      h2: 'Does an Ulm primary school teach coding?',
      lede: 'The new compulsory subject begins in secondary school, from grade 5. The four Grundschule years come before it.',
      body: [
        { kind: 'table', numCols: [], caption: 'When computing appears in an Ulm child\'s school years', head: ['Grades', 'Stage', 'Computing'], rows: [
          ['1 to 4', 'Grundschule', 'Before the new Informatik subject begins'],
          ['5 and 6', 'Secondary school, any type', 'Informatik und Medienbildung, compulsory since 2025/26'],
          ['7 onwards', 'Secondary school', 'The new subject grows year by year']
        ] },
        { kind: 'source', html: 'Sources: KMK, Primarbereich (four Grundschule years everywhere except Berlin and Brandenburg); Gesellschaft für Informatik, Informatik-Monitor 2026/27, Baden-Württemberg page, which records the compulsory subject Informatik und Medienbildung from 2025/26, "zunächst in den Jahrgangsstufen 5 und 6". Read on 2 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Good news for younger siblings',
          left: [
            'Baden-Württemberg is one of only four Länder that the Gesellschaft für Informatik counts as meeting the short-term goal of four compulsory Informatik hours. A child in Ulm today will meet computing at school from grade 5.',
            'That makes early coding more useful, not less. A fifth grader who already splits a task into small, testable pieces tends to enjoy the new subject rather than fight it.'
          ],
          rightH3: 'What the primary years can hold',
          right: [
            'Grades 1 to 4 are four years in which curiosity about games and apps has nowhere official to go. A weekly class in that window builds the habits school will later ask for.',
            'We teach alongside school and never instead of it. Nothing in our classes is graded or counts towards school reports.'
          ] }
      ]
    },
    {
      id: 'frost',
      tint: 'tint',
      eyebrow: 'An Ulm data project',
      h2: 'How many freezing days did Ulm have last winter?',
      lede: 'It depends on what "freezing" means, and that is the whole lesson. The Deutscher Wetterdienst runs a weather station in Mähringen, part of Ulm, and publishes every daily reading free to reuse under CC BY 4.0. Our older children ask it a simple question and get two very different answers.',
      body: [
        { kind: 'two',
          leftH3: 'The station and the file',
          left: [
            'The station is called Ulm-Mähringen, number 15444, at a height of about 593 metres. Its daily file covers 4,140 days from 1 September 2014 to the end of 2025, and every day has both a lowest and a highest temperature. We downloaded it on 3 November 2026.',
            'For class we keep four columns in a small file, ulm_maehringen.csv: the date, the day\'s lowest temperature, its highest temperature and the snow depth. We use the winter year from 1 July 2024 to 30 June 2025.'
          ],
          rightH3: 'Two rules for one word',
          right: [
            'Rule A: a day counts if the temperature went below zero at any time, usually at night. Meteorologists call that a Frosttag; the DWD defines it as a day on which the minimum air temperature is below freezing.',
            'Rule B: a day counts only if it stayed below zero all day, so even the warmest moment was frozen. That is an Eistag, a day "an denen durchgehend Frost vorherrscht", in the DWD\'s words.'
          ] },
        { kind: 'code', label: 'Count with both rules', lang: 'Python', code: V1, note: 'It prints: <code>Days in the winter year: 365</code>, <code>Rule A, below zero at night: 105</code> and <code>Rule B, below zero all day: 25</code>.' },
        { kind: 'p', mt: true, html: 'Same city, same winter, same file: 105 or 25. Neither number is wrong. They answer two different questions, and the program only knew which one because the child wrote the rule down exactly. That is what coding teaches even before any screen: say precisely what you mean.' },
        { kind: 'p', html: 'There is one more trap, at the edge. Rule A says "below zero", written in Python as <code>&lt; 0</code>. What about a night that stopped at exactly 0.0? It is not below zero, so Rule A leaves it out. The next lines count how many such nights there were.' },
        { kind: 'code', label: 'Check the edge case', lang: 'Python', code: V2, note: 'Run after the first program, it prints <code>Nights that stopped at exactly 0.0: 4</code>. With <code>&lt;= 0</code> instead, Rule A would count 109.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Frost nights and ice days at Ulm-Mähringen, winter years July to June (our count)', head: ['Winter', 'Below zero at night (Rule A)', 'Below zero all day (Rule B)'], rows: [
          ['2015/16', '96', '10'],
          ['2016/17', '121', '34'],
          ['2017/18', '97', '27'],
          ['2018/19', '104', '19'],
          ['2019/20', '98', '8'],
          ['2020/21', '125', '29'],
          ['2021/22', '119', '10'],
          ['2022/23', '87', '23'],
          ['2023/24', '69', '13'],
          ['2024/25', '105', '25']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, daily climate data, station 15444 Ulm-Mähringen, licence CC BY 4.0, downloaded 3 November 2026. Counts are our own, using "below 0" for both rules. In 2024/25 the first frost night was 13 November 2024, the last 19 April 2025, and the coldest night 4 January 2025 at minus 9.2 degrees.' },
        { kind: 'p', mt: true, html: 'The table holds a second surprise for sharp-eyed children. The winter with the most frost nights, 2020/21, was not the one with the most frozen days, which was 2016/17. And 2021/22 had many cold nights but only ten days that stayed frozen. Which winter was "the coldest"? Once again, the child has to decide what the word means before the computer can answer.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Put a cup of water outside on a cold evening. In the morning, is it ice? At lunchtime, is it still ice? Draw a picture for Rule A and one for Rule B.',
          '<strong>Ages 8 to 10, Scratch.</strong> Make a sprite say "frost night" when a temperature variable is below 0, and "ice day" when a second variable is also below 0. Test it with 0 exactly.',
          '<strong>Ages 10 to 12, Python.</strong> Run both programs, then change one winter year in the code and fill in a row of the table yourself before checking ours.'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Free contests',
      h2: 'Which free contests can a primary pupil in Ulm enter in 2026/27?',
      lede: 'Two big national contests welcome children from grade 3, one for informatics thinking and one for maths. Both run through schools, so ask your child\'s teacher.',
      body: [
        { kind: 'table', numCols: [], caption: 'Two contests for younger pupils, 2026/27, from the organisers\' own pages', head: ['', 'Informatik-Biber', 'Känguru der Mathematik'], rows: [
          ['Organiser', 'Bundesweite Informatikwettbewerbe', 'Mathematikwettbewerb Känguru e.V.'],
          ['Who', 'Grades 3 to 13, no prior knowledge', 'Grades 3 to 13'],
          ['Primary format', 'Nine tasks in 30 minutes', '24 tasks in 75 minutes (grades 3/4)'],
          ['Next date', '9 to 20 November 2026', '8 April 2027'],
          ['Sign-up', 'Through the school', 'Online from 1 December 2026 to 31 January 2027']
        ] },
        { kind: 'source', html: 'Sources: bwinf.de, Informatik-Biber pages ("Die Biberwochen 2026 finden vom 9. bis 20. November statt."); mathe-kaenguru.de, which says the 2027 contest takes place "ausnahmsweise erst im April", on 8 April 2027. Read on 2 November 2026. The Biber is free. We are not connected with either organiser.' },
        { kind: 'p', mt: true, html: 'Neither contest needs programming. The Biber asks children to spot patterns, follow rules and find shortest routes; Känguru asks for clever maths with little calculation. The organisers\' tasks stay theirs: our lessons use puzzles we invent ourselves, and a child who likes ours tends to like the real contest days as well.' }
      ]
    },
    {
      id: 'uhrzeit',
      eyebrow: 'Class times',
      h2: 'When could my child have coding classes in Ulm time?',
      lede: 'After school in Ulm is evening in India, where the mentors are, and weekend mornings work too.',
      body: [
        { kind: 'table', numCols: [], caption: 'Possible Ulm start times, with the clock in India', head: ['In Ulm', 'In India this winter', 'In India from 28 March 2027'], rows: [
          ['15:15', '19:45', '18:45'],
          ['16:45', '21:15', '20:15'],
          ['Saturday 09:00', '13:30', '12:30'],
          ['Sunday 10:30', '15:00', '14:00']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz German time is UTC+1 in winter and UTC+2 in summer. Summer time 2026 ended on 25 October 2026; summer time 2027 begins on 28 March 2027. India does not change its clocks (UTC+5:30), so the gap is 4 hours 30 minutes now and 3 hours 30 minutes in summer. These are examples; you choose your own time.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Ulm school holidays 2026/27, Baden-Württemberg row of the KMK table', head: ['Holiday', 'From', 'To'], rows: [
          ['Herbstferien', '26 October 2026', '31 October 2026'],
          ['Weihnachtsferien', '23 December 2026', '9 January 2027'],
          ['Osterferien', '30 March 2027 (25 March also free)', '3 April 2027'],
          ['Pfingstferien', '18 May 2027', '29 May 2027'],
          ['Sommerferien', '29 July 2027', '11 September 2027']
        ] },
        { kind: 'source', html: 'Source: KMK, Ferien im Schuljahr 2026/2027, status 9 October 2025. In the autumn the table lists 26 to 30 October plus 31 October. Classes carry on through holidays unless you ask for a pause.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What can an Ulm child do at each stage?',
    lede: 'How we place a child in a group, and what we report back, in five steps of our own.',
    table: { caption: 'Coding milestones, ages 6 to 12 (ours)', head: ['Stage', 'Usual age', 'Your child can'], rows: [
      ['Steps in order', '6 to 7', 'Give a sprite exact instructions that work first time'],
      ['Repeat and react', '7 to 9', 'Use loops and respond to a key or a click'],
      ['Rules with if', '8 to 10', 'Write a rule like "below zero" and test it at the edge'],
      ['Typed code', '9 to 11', 'Type Python that repeats and decides'],
      ['Real records', '10 to 12', 'Count in a real file and explain why two answers differ']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child what "freezing" means after the frost project. If they answer with a question, "at night or all day?", the lesson worked.',
      'Progress notes describe what your child built and explained, never minutes on a screen.'
    ] },
    right: { h3: 'For children', ps: [
      'Before you count anything, write down your rule in one sentence.',
      'Then test your rule with a number right on the edge, like exactly zero.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Ulm children',
    lede: 'Live lessons in English for children, each with a mentor who gets to know them.',
    bands: [
      { num: 'I', h3: 'Blocks and games', sub: 'Younger children', courses: [
        { code: 'CKU / PLAY / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'A long course from first blocks to apps.' },
        { code: 'CKU / PLAY / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Coding inside a world children already love.' },
        { code: 'CKU / PLAY / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Scratch games with a careful first look at AI.' }
      ] },
      { num: 'II', h3: 'Thinking and maths', sub: 'Puzzles and numbers', courses: [
        { code: 'CKU / THINK / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Number sense and problem solving for primary years.' },
        { code: 'CKU / THINK / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, confident number work.' },
        { code: 'CKU / THINK / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics competitions', blurb: 'Our own puzzles in the spirit of the Biber.' }
      ] },
      { num: 'III', h3: 'Making things', sub: 'Older children', courses: [
        { code: 'CKU / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'Apps for kids', blurb: 'Phone apps built with blocks.' },
        { code: 'CKU / MAKE / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Games scripted in Luau.' },
        { code: 'CKU / MAKE / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Puzzles in a second typed language.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How do live coding classes work for an Ulm child?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'After school, Monday to Friday.' },
      { time: 'Weekend mornings', l: 'Calm and fresh, good for the youngest.' },
      { time: 'Private', l: 'One to one at a time you agree.' }
    ],
    cells: [
      { h3: 'A familiar mentor', p: 'The same person every lesson.' },
      { h3: 'Short and lively', p: 'Lessons sized for a child\'s attention.' },
      { h3: 'Hands on', p: 'Your child builds from the first minute.' },
      { h3: 'Age groups', p: 'Children only learn with others their age.' },
      { h3: 'Notes home', p: 'What was made and what comes next.' },
      { h3: 'Two formats', p: 'A class of 15 to 20, or one to one.' }
    ]
  },

  projectsH2: 'What older students go on to build',
  projectsLede: 'Where early lessons can lead: work by teenagers who once started in our children\'s classes, with plenty more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from parents and students, as written.',

  fees: {
    h2: 'Fees for Ulm families',
    lede: 'A monthly fee covers eight live lessons. We show it in euro, converted with the reference rate published by the European Central Bank; the card payment is made in US dollars, and your bank converts it, which can move the euro figure on your statement slightly.',
    free: ['A free trial class', 'A puzzle and a first Scratch project', 'No card asked for'],
    group: ['15 to 20 children of similar age', 'The same mentor every week', 'Two lessons a week', 'Monthly, stop whenever you like'],
    one: ['Your child with one mentor', 'Their own pace and ideas', 'Times to suit your family']
  },

  faq: {
    eyebrow: 'Ulm parents ask',
    h2: 'Coding classes for kids in Ulm: questions from parents',
    items: [
      { q: 'Are the classes in German?', a: 'No, they are taught in English and only in English. The mentor keeps sentences short, repeats when needed and gets used to each child\'s accent and speed, so a child whose English is still growing can keep up.' },
      { q: 'How young can my child start?', a: 'From 6. The youngest begin with picture puzzles and Scratch blocks, so long words and typing are not needed at first. Typed Python usually starts around 9.' },
      { q: 'Do primary schools in Ulm teach coding?', a: 'The Informatik rule recorded by the Gesellschaft für Informatik starts in secondary school. In Baden-Württemberg the compulsory subject Informatik und Medienbildung began in 2025/26 in grades 5 and 6, so the Grundschule years, grades 1 to 4, come before the new subject starts.' },
      { q: 'When are classes in Ulm time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Ulm afternoons are evenings in India, where our mentors teach.' },
      { q: 'What is the Ulm frost project?', a: 'An original Python project of ours on the Deutscher Wetterdienst station Ulm-Mähringen. In the winter of 2024 to 2025 there were 105 nights below zero but only 25 days that stayed below zero all day, and children learn why the rule decides the answer.' },
      { q: 'Can my child enter the Informatik-Biber?', a: 'If the school registers, yes. Entry costs nothing, open from grade 3 with no prior knowledge, and in 2026 runs from 9 to 20 November. Ask the class teacher whether the school takes part.' },
      { q: 'When is the next Känguru maths contest?', a: 'On 8 April 2027, later than usual, according to the organisers. Online registration runs from 1 December 2026 to 31 January 2027; ask the school whether it takes part.' },
      { q: 'Does my child need a computer?', a: 'A laptop or desktop with a keyboard suits Python. For Scratch, a computer with a mouse works well. An adult nearby for the first lessons helps with sharing the screen.' },
      { q: 'How many children are in a class?', a: 'Group classes have 15 to 20 children of a similar age. One-to-one lessons are available for children who would like the mentor to themselves.' },
      { q: 'What do the fees cover and how are they paid?', a: 'Eight live lessons a month. The euro figure follows the European Central Bank reference rate; the payment itself is in US dollars and your bank converts it. The trial class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also useful',
    h2: 'Related pages',
    lede: 'More for Ulm families.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page for families in Germany.' },
      { href: '/coding-classes-in-baden-wuerttemberg', label: 'Coding classes in Baden-Württemberg', p: 'The whole Land at a glance.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'The usual first step.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'Typed code at ten, explained.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age rules for AI tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live lesson.' }
    ]
  },

  start: {
    h2: 'Book a free trial class for your Ulm child',
    lede: 'In the trial your child solves a puzzle and builds a first Scratch project with a mentor. You see how it works, and the mentor suggests the right group.',
    readFirst: 'Before booking you might read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">our courses</a>.',
    note: 'Our mentors teach from India, live, in English. For a quick answer, send us a WhatsApp message.',
    formNote: 'Free and without obligation.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-baden-wuerttemberg', label: 'Baden-Württemberg' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Say what freezing means first'
  },

  personalityCss: `
.ag-root.ag-cku .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-cku .ag-capsule { border-left-width: 5px; }
.ag-root.ag-cku .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-cku .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cku .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Baden-Württemberg and national pages); bwinf.de Biber pages; mathe-kaenguru.de; KMK Ferien 2026/2027; DWD Lexikon Frosttag; Einheitenzeitgesetz; read 2 to 3 November 2026. Deutscher Wetterdienst, station 15444 Ulm-Mähringen, CC BY 4.0.',
    localProject: 'The Ulm frost project: an original Python project on the DWD daily record for Ulm-Mähringen in which the winter of 2024/25 has 105 nights below zero (Rule A) but 25 days below zero all day (Rule B), plus the edge case of 4 nights at exactly 0.0 and a table of ten winters; screen-free and Scratch versions. Lesson family: turn a word into an exact rule, boundary included, before counting.',
    requiredMentions: ['ulm_maehringen.csv', 'Rule A, below zero at night: 105', 'Rule B, below zero all day: 25', 'Nights that stopped at exactly 0.0: 4', 'Ulm-Mähringen', 'an denen durchgehend Frost vorherrscht', '8 April 2027', 'Say what freezing means first'],
    sources: [
      { claim: 'Grundschule grades 1 to 4.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'BW Informatik und Medienbildung from 2025/26 in grades 5 and 6.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/baden-wuerttemberg' },
      { claim: 'Biber 2026 dates and format.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Känguru 2027 date and registration.', url: 'https://www.mathe-kaenguru.de/' },
      { claim: 'Ulm-Mähringen daily climate data, CC BY 4.0.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/' },
      { claim: 'Frosttag and Eistag definitions.', url: 'https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv3=100784&lv2=100652' }
    ],
    rejectedClaims: [
      'Snow-day counts: the snow column has 1,246 missing days, so no snow figure is given.',
      'Naming Ulm schools or the international school as sources of students: refused.',
      'German-language teaching, grades, or any link with the city, the Land, BWINF or Känguru: none.'
    ]
  }
};
