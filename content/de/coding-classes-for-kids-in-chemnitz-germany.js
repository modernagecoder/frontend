'use strict';
// Coding classes for kids in Chemnitz (ag- city page, Germany cluster P6 row DE154, tier-2 shape coding-classes-for-kids =
// ages 6 to 12). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; euro shown, USD charged.
// Spine: the stretchy map. Chemnitz's hiking-trail file gives every trail two lengths that disagree by the same factor,
// except one. Children learn to measure, to divide, and to hunt for the odd one out, at three levels (paper, Scratch, Python).
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - KMK: Grundschule grades 1 to 4 outside Berlin and Brandenburg (1).
//  - GI Informatik-Monitor 2026/27, Sachsen page: "Sowohl an der Oberschule als auch am Gymnasium wird das Fach Informatik
//    jeweils einstündig in den Jahrgangsstufen 7 bis 10 unterrichtet." (85); Gymnasium Oberstufe grade 10 Einführungsphase,
//    11 and 12 Qualifikationsphase, G8 (52). National page: "Vorreiter sind Sachsen und Mecklenburg-Vorpommern: Hier belegt
//    etwa die Hälfte der Lernenden das Fach Informatik." (98).
//  - BWINF: Biber 9 to 20 November 2026 (133), primary 9 tasks in 30 minutes, grades 5 and 6 12 tasks in 35 minutes (132).
//  - Mathematik-Olympiade: about 200,000 participants a year (162); "Regionalrunde der 66. Mathematik-Olympiade 11. November
//    2026" (165).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025), raw row "Sachsen (1) 12.10. - 24.10. 23.12. - 02.01. 08.02. - 19.02. 26.03. -
//    02.04. 07.05. 15.05. - 18.05. 10.07. - 20.08." (src-pages/coding-classes-for-kids-cologne/kmk-fer2627/fe303dbf.txt).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Chemnitz 245,618; Leipzig 611,850; Dresden 564,904; Sachsen
//    4,042,422.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Chemnitz, "Wanderwege" ("Grafische Darstellung der Wanderwege im Stadtgebiet von Chemnitz"), Chemnitz open
//    data portal (portal-chemnitz.opendata.arcgis.com) via Freistaat Sachsen and GovData (https://ckan.govdata.de/dataset/
//    wanderwege66316), GovData dataset page licence "Datenlizenz Deutschland Namensnennung 2.0". CSV export downloaded 3
//    November 2026, 2,073 bytes, sha256 2a73c28c9b6a4ab6..., 27 rows, columns OBJECTID, NAME, MARKIERUNG, LAENGE (km),
//    SHAPE__Length. The FeatureServer layer JSON gives "spatialReference":{"wkid":102100,"latestWkid":3857}, i.e. Web
//    Mercator, whose distances are stretched by about 1/cos(latitude); our calculation 1/cos(50.83 degrees) = 1.583.
//    Raw copies in src-pages/coding-classes-for-kids-in-chemnitz-germany/.
// Our own calculations (scratchpad de/w/T2/run/che/v1.py, v2.py, python3 -I, Python 3.14.8): v1 first lines "WW 03 - 10.7 km
//  on the sign, 16.9 km on the map, x 1.58", "WW 01 - 16.1 km on the sign, 25.4 km on the map, x 1.58", "WW 13 - 9.2 km on
//  the sign, 14.5 km on the map, x 1.57"; v2 "Trails: 27  typical stretch: 1.58", "Odd one out: WW 20 - Lohse-Uhlig-Steig
//  1.39". Signed lengths add up to 371.0 km, map lengths to 584.1 km. Longest WW 05 Rundweg um Chemnitz 59.5 km; shortest
//  WW 31 Trimm-Dich-Pfad-Tiergartenwald 1.4 km.
// Lesson family: ratios and the odd one out; when two measurements disagree by a steady factor, the one that breaks the
// pattern is the interesting one.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("chemnitz_trails.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        signed_km = float(row["LAENGE"])',
  '        map_km = float(row["SHAPE__Length"]) / 1000',
  '        stretch = map_km / signed_km',
  '        print(row["NAME"][:7], signed_km, "km on the sign,", round(map_km, 1), "km on the map, x", round(stretch, 2))'
].join('\n');

const V2 = [
  'import csv',
  '',
  'stretches = {}',
  'with open("chemnitz_trails.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        stretches[row["NAME"]] = float(row["SHAPE__Length"]) / 1000 / float(row["LAENGE"])',
  '',
  'typical = sorted(stretches.values())[len(stretches) // 2]',
  'odd = min(stretches, key=stretches.get)',
  'print("Trails:", len(stretches), " typical stretch:", round(typical, 2))',
  'print("Odd one out:", odd, round(stretches[odd], 2))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Chemnitz: coding for kids' },
  slug: 'coding-classes-for-kids-in-chemnitz-germany',
  code: 'chb',
  accent: '#6B0625',
  accentRationale: 'Coding classes for kids, Chemnitz: a deep porphyry red #6B0625, after the red Rochlitz stone of the city\'s old buildings; contrast 10.16 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-saxony', name: 'Saxony' }],
  routeLabel: 'Coding classes for kids in Chemnitz',
  title: 'Coding Classes for Kids in Chemnitz, Live Online in English',
  description: 'Coding classes for kids in Chemnitz aged 6 to 12, live online in English: when Saxony teaches Informatik, contests this year, and a hiking-trail map project.',
  ogDescription: 'Live online coding in English for Chemnitz children aged 6 to 12: what they can learn before Informatik starts in grade 7 in Saxony, the Biber and the Mathematik-Olympiade this autumn, and a project on Chemnitz\'s 27 marked hiking trails.',
  twitterDescription: 'Coding for Chemnitz kids aged 6 to 12, live in English, with a project on the city\'s hiking-trail map.',
  pageName: 'Coding Classes for Kids in Chemnitz',
  webPageDescription: 'A guide for Chemnitz parents of children aged 6 to 12 to learning to code live online in English, using KMK, Gesellschaft für Informatik, BWINF and Mathematik-Olympiade sources and an original measuring project on Stadt Chemnitz\'s open hiking-trail data.',
  courseDescription: 'Live online coding classes in English for Chemnitz children aged 6 to 12: puzzles and Scratch for the youngest, typed Python from about 9, and real data projects for older children, with a regular mentor, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Chemnitz',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#before7', label: 'Before grade 7' },
    { href: '#trails', label: 'Trails' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Chemnitz &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Chemnitz',
  lede: 'Saxony is one of the Länder that takes Informatik most seriously, yet a Chemnitz child usually meets it as a timetabled subject only in grade 7. Between first grade and then there are six curious years. This page is about using them well: what a child between six and twelve can pick up, how our live classes in English are built for them, two contests running this autumn, and a project on the city\'s hiking trails where every length on the map is wrong in the same way, except one.',
  secondaryCta: { href: '#trails', label: 'See the trail project' },
  wa: 'Hello Modern Age Coders, we are in Chemnitz and our child would like to learn coding in English. Can we book a free first class?',
  heroNote: 'Teaching children live since 2020 &middot; 10,000+ students worldwide &middot; mentors who adapt to each child, in English',
  spec: [
    ['Ages', '6 to 12, in age groups'],
    ['Begins with', 'Puzzles and Scratch'],
    ['Then', 'Typed Python from about 9'],
    ['Groups', '15 to 20 children, or one to one'],
    ['Teachers', 'Mentors in India, in English'],
    ['First class', 'Free']
  ],
  capsuleQ: 'At a glance',
  capsule: 'Modern Age Coders runs coding classes for Chemnitz children aged 6 to 12 as live online lessons in English. Little ones start with picture puzzles and Scratch; nine year olds move on to typing Python; eleven and twelve year olds analyse real files like the city\'s hiking-trail map. The same mentor teaches your child each week, matches their pace and accent, and works either with 15 to 20 children of one age band or with your child alone.',

  picks: {
    eyebrow: 'Good first courses',
    h2: 'Which coding course should a Chemnitz child start with?',
    lede: 'For a six or seven year old, the long blocks course; for a curious eight year old, Scratch; for a confident nine year old, Python.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CHB / 01', title: 'Coding for Kids', note: 'From 6, in groups by age, over 10 to 12 months. Scratch stories and games, then simple apps and a gentle first look at how AI guesses.' },
      { course: 'scratch-programming-complete-course', code: 'CHB / 02', title: 'Scratch Coding for Kids', note: 'A shorter course of 3 to 4 months. A complete beginner ends with several games and a clear sense of whether coding is their thing.' },
      { course: 'python-ai-kids-masterclass', code: 'CHB / 03', title: 'Python and AI for Kids', note: 'Python typed from day one for the over-nines, with turtle art, games and later data projects like the trail map further down.' }
    ]
  },

  sections: [
    {
      id: 'before7',
      eyebrow: 'Six years before grade 7',
      h2: 'When do Chemnitz children start Informatik at school?',
      lede: 'In grade 7. Saxony then keeps it going every year until grade 10, which is generous by German standards.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik for a pupil in Saxony', head: ['Grades', 'School', 'Informatik at school'], rows: [
          ['1 to 4', 'Primary (Grundschule)', 'Coding is not its own subject'],
          ['5 and 6', 'Oberschule or Gymnasium', 'Not covered by the grade 7 to 10 rule'],
          ['7 to 10', 'Oberschule and Gymnasium', 'One lesson a week, every year'],
          ['10 to 12', 'Gymnasium Oberstufe (G8)', 'Informatik as an Abitur course; about half of pupils in Saxony take it']
        ] },
        { kind: 'source', html: 'Taken from the Informatik-Monitor 2026/27 of the Gesellschaft für Informatik (its Sachsen page, "jeweils einstündig in den Jahrgangsstufen 7 bis 10", and its national overview, "etwa die Hälfte der Lernenden") and the KMK page on primary schooling, both consulted on 2 November 2026. Modern Age Coders has no link with the Freistaat, the KMK or any Chemnitz school.' },
        { kind: 'two', mt: true,
          leftH3: 'Why start before grade 7?',
          left: [
            'Because the core ideas of coding, doing things in order, repeating and deciding, are easy at 7 and fun at 8. Children who meet them through games arrive in grade 7 able to concentrate on the harder part, which is designing a program rather than remembering where the semicolon goes.',
            'And because Saxony\'s Oberstufe is unusually keen on the subject: the monitor finds about half of its pupils there take Informatik, so an early, confident start is worth having.'
          ],
          rightH3: 'What we do not do',
          right: [
            'We do not teach the Saxon school syllabus in advance or set school-style tests. School Informatik is the school\'s job, and the school course is the one that counts.',
            'What we do is give a child the confidence and the habits that make school Informatik easy: trying things, reading what the computer says, and checking an answer before trusting it.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Will a Chemnitz child understand a class in English?',
      lede: 'Children understand far more than they can say. Our mentors teach only in English and build lessons around that.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English, every time', p: 'There is no German version of our classes. Mentors are based in India and teach every lesson in English, and we would rather tell you that now than after a trial.' },
          { h3: 'Speed and accent', p: 'A mentor talks slowly to a six year old, uses short sentences, repeats, and points at the screen. They learn how each child speaks, and a child who answers in German is gently given the English words.' },
          { h3: 'Learning two things', p: 'Scratch blocks and Python words are the same in every country. While a child learns to code, they also hear an hour of friendly spoken English, a useful extra for a pupil at a German school.' }
        ] }
      ]
    },
    {
      id: 'trails',
      tint: 'tint',
      eyebrow: 'A real Chemnitz project',
      h2: 'Why does the map say the trails are longer than the signs?',
      lede: 'Stadt Chemnitz publishes its marked hiking trails as open data under Datenlizenz Deutschland Namensnennung 2.0. Each trail has two lengths, and they never agree. Our older children find out why, and then find the one trail that breaks the rule.',
      body: [
        { kind: 'two',
          leftH3: 'Two lengths per trail',
          left: [
            'The city\'s file lists 27 trails, from WW 31, the 1.4 km Trimm-Dich-Pfad in the Tiergartenwald, to WW 05, the 59.5 km Rundweg um Chemnitz. Each has a column LAENGE, the length in kilometres that walkers are told, and a column SHAPE__Length, the length the computer measured along the line on the map.',
            'Added up, the signed lengths come to 371.0 km. The map lengths come to 584.1 km.'
          ],
          rightH3: 'The puzzle',
          right: [
            'Did the city get every trail wrong? Children check one: WW 03 is 10.7 km on the sign and 16.9 km on the map. That is about 1.58 times as long. Then the next. Also about 1.58.',
            'When every answer is wrong by the same amount, the cause is usually the ruler, not the trails. Here the ruler is the map itself.'
          ] },
        { kind: 'code', label: 'Version 1: compare the two lengths', lang: 'Python', code: V1, note: 'The first lines it prints are <code>WW 03 - 10.7 km on the sign, 16.9 km on the map, x 1.58</code>, <code>WW 01 - 16.1 km on the sign, 25.4 km on the map, x 1.58</code> and <code>WW 13 - 9.2 km on the sign, 14.5 km on the map, x 1.57</code>, one line for each of the 27 trails.' },
        { kind: 'p', mt: true, html: 'The map layer is stored in the Web Mercator projection, the one most web maps use. To flatten a round Earth onto a square map, it stretches everything more the further you are from the equator. Chemnitz lies at about 50.8 degrees north, and at that latitude the stretch is 1 divided by the cosine of 50.8 degrees, about 1.58: exactly the factor the children found. Our explanation, from the layer\'s own projection code; the city\'s signed lengths are the ones to walk by.' },
        { kind: 'code', label: 'Version 2: find the trail that breaks the pattern', lang: 'Python', code: V2, note: 'It prints: <code>Trails: 27  typical stretch: 1.58</code> and <code>Odd one out: WW 20 - Lohse-Uhlig-Steig 1.39</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Three Chemnitz trails: signed length, map length and stretch (our calculation)', head: ['Trail', 'On the sign (km)', 'On the map (km)', 'Stretch'], rows: [
          ['WW 05 Rundweg um Chemnitz', '59.5', '94.1', '1.58'],
          ['WW 31 Trimm-Dich-Pfad-Tiergartenwald', '1.4', '2.2', '1.57'],
          ['WW 20 Lohse-Uhlig-Steig', '13.8', '19.2', '1.39']
        ] },
        { kind: 'source', html: 'Data: Stadt Chemnitz, Wanderwege, published on the Chemnitz open data portal and listed on GovData through the Freistaat Sachsen, reused under DL-DE BY 2.0 (Namensnennung), file fetched 3 November 2026. Map length is SHAPE__Length in metres, divided by 1,000. Stretch factors and the projection explanation are ours.' },
        { kind: 'p', mt: true, html: 'Every trail stretches by 1.57 to 1.60, except the Lohse-Uhlig-Steig at 1.39. The program cannot say why. Perhaps the line on the map is drawn more simply than the real path, perhaps the signed length includes a stretch that is not on the map, perhaps one of the numbers is out of date. Children are asked to write down two possible reasons and how they would check each one. Spotting the odd one out is the start of an answer, not the end.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 7, no screen.</strong> Measure a path across the room with your feet, then with a parent\'s feet. Why are the numbers different, and which one is "right"?',
          '<strong>Ages 8 to 9, Scratch.</strong> Make a list of five signed lengths. Multiply each by 1.58 and show the map length. Then put in 13.8 and ask the sprite to say "odd one!" if the map length is not close.',
          '<strong>Ages 10 to 12, Python.</strong> Run Version 1, then change Version 2 to print every trail whose stretch is more than 0.05 away from 1.58.',
          '<strong>Family challenge.</strong> Pick one short trail, walk it, and count your steps. Does your number agree with the sign or with the map?'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'This autumn',
      h2: 'Which contests can a Chemnitz child enter this school year?',
      lede: 'Two classic school contests fall in the next few weeks, both entered through the school.',
      body: [
        { kind: 'two',
          leftH3: 'Informatik-Biber',
          left: [
            'A free online puzzle contest from Bundesweite Informatikwettbewerbe, open from grade 3, with no coding knowledge needed. The Biberwochen 2026 run from 9 to 20 November 2026.',
            'Primary pupils solve nine tasks in 30 minutes; grades 5 and 6 get twelve tasks in 35 minutes.'
          ],
          rightH3: 'Mathematik-Olympiade',
          right: [
            'The Mathematik-Olympiade, with about 200,000 participants a year, runs in rounds. The Regionalrunde of the 66th Olympiade is on 11 November 2026, after the school round in the autumn.',
            'Ask your child\'s teacher whether the school takes part and who goes through to the regional round.'
          ] },
        { kind: 'source', html: 'Sources: bwinf.de, Informatik-Biber 2026; mathe-wettbewerbe.de, Mathematik-Olympiade, read 2 November 2026. Their real tasks stay with them: our classes only use puzzles our mentors invented in a similar style, and say so. Neither organiser has any tie to us.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Times for Chemnitz',
      h2: 'What time would classes be in Chemnitz?',
      lede: 'The mentors are in India, ahead of Chemnitz, so an afternoon here is their evening. These three rows are only an illustration.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Chemnitz times and the clock in India', head: ['Chemnitz', 'India until 28 March 2027', 'India from 28 March 2027'], rows: [
          ['14:45', '19:15', '18:15'],
          ['17:10', '21:40', '20:40'],
          ['Saturday 09:00', '13:30', '12:30']
        ] },
        { kind: 'source', html: 'German clock time comes from the Einheitenzeitgesetz: one hour ahead of UTC (MEZ) for winter, two hours ahead (MESZ) for summer. The switch back happened on 25 October 2026; the switch forward is due on 28 March 2027. With India fixed at UTC+5:30, Chemnitz trails it by 4 h 30 until the end of March and by 3 h 30 after that.' },
        { kind: 'p', mt: true, html: 'Saxony\'s winter holidays run from 8 to 19 February 2027 and the summer holidays from 10 July to 20 August 2027, in the KMK holiday list. Our classes carry on in the holidays, which many Chemnitz families find handy, and anyone who goes away simply pauses.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What should a Chemnitz child be able to do at each age?',
    lede: 'These are our own milestones, used to place children in groups and to report back to parents.',
    table: { caption: 'Our own coding milestones for primary-age children', head: ['Milestone', 'Usual age', 'The child can'], rows: [
      ['Order', '6 to 7', 'Put picture steps in the right order and spot a wrong one'],
      ['Loop', '7 to 8', 'Make a sprite repeat a dance instead of copying blocks'],
      ['Decide', '8 to 9', 'Use if and else to make a game react'],
      ['Type', '9 to 11', 'Write and fix a short Python program'],
      ['Compare', '10 to 12', 'Divide one number by another and find the result that does not fit']
    ] },
    left: { h3: 'For parents', ps: [
      'Compare is the trail project. A child who can say "they are all 1.58, except this one" has learned to look for patterns and for breaks in them.',
      'Each month you get a short note on what your child made and what is next.'
    ] },
    right: { h3: 'For children', ps: [
      'If every answer is wrong by the same amount, look at your ruler.',
      'The number that does not fit is the most interesting number on the page.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Chemnitz children',
    lede: 'Same live, English-speaking format, sorted into three themes.',
    bands: [
      { num: 'I', h3: 'Puzzles and numbers', sub: 'Ages 7 to 15', courses: [
        { code: 'CHB / NUM / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Patterns, logic and step-by-step plans.' },
        { code: 'CHB / NUM / 02', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Maths contest training', blurb: 'For Olympiade fans: our own problems, step by step.' },
        { code: 'CHB / NUM / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Ratios, angles and shapes, checked in Python.' }
      ] },
      { num: 'II', h3: 'Games', sub: 'Ages 7 to 14', courses: [
        { code: 'CHB / GAME / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Building and scripting in a familiar world.' },
        { code: 'CHB / GAME / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Their own playable games in Luau.' },
        { code: 'CHB / GAME / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Three platforms, one long course.' }
      ] },
      { num: 'III', h3: 'Making and understanding', sub: 'Ages 8 to 14', courses: [
        { code: 'CHB / MAKE / 01', slug: 'ai-literacy-for-kids-course', title: 'Understanding AI', blurb: 'Why an AI guesses, and when it guesses badly.' },
        { code: 'CHB / MAKE / 02', slug: 'block-coding-app-development-masterclass', title: 'Block-built apps', blurb: 'Buttons, screens and a phone app of their own.' },
        { code: 'CHB / MAKE / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Puzzles and small games in a classic language.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How do live classes work for a Chemnitz family?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'After school, from mid afternoon.' },
      { time: 'Weekends', l: 'Morning slots suit younger children.' },
      { time: 'One to one', l: 'Any time agreed with the mentor.' }
    ],
    cells: [
      { h3: 'Short, lively lessons', p: 'About an hour, with plenty of doing.' },
      { h3: 'One mentor', p: 'Who knows how your child learns.' },
      { h3: 'By age', p: 'Younger and older children apart.' },
      { h3: 'Child-safe tools', p: 'No adult AI accounts.' },
      { h3: 'Parent notes', p: 'Monthly, in plain English.' },
      { h3: 'Group or private', p: '15 to 20 children, or one.' }
    ]
  },

  projectsH2: 'What older students go on to build',
  projectsLede: 'A few projects by our older students, as they made them. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews from parents and students on Google, word for word.',

  fees: {
    h2: 'Fees for Chemnitz families',
    lede: 'The fee is monthly and pays for eight live classes. We show it in euro using the European Central Bank reference rate; your card is charged in US dollars and your bank converts the amount, so the euro figure you see on your statement may be slightly different.',
    free: ['A free first class', 'A puzzle and a first game', 'No card needed'],
    group: ['15 to 20 children of a similar age', 'A regular mentor', 'Two classes a week', 'Monthly, stop any time'],
    one: ['Your child with one mentor', 'Projects chosen together', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Chemnitz parents ask',
    h2: 'Coding classes for kids in Chemnitz: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No, they are in English, always live, with India-based mentors. With younger children they use short sentences, plenty of pointing at the screen and patience, and they quickly get used to how your child speaks.' },
      { q: 'From what age can my child join?', a: 'From 6. Six and seven year olds work with puzzles and Scratch blocks in short, playful lessons. Most children move to typed Python at about 9.' },
      { q: 'When does Informatik start at school in Chemnitz?', a: 'In grade 7. The Gesellschaft für Informatik records that Saxon Oberschulen and Gymnasien teach Informatik for one lesson a week in grades 7 to 10. Before that, coding is not a separate school subject.' },
      { q: 'What times can my child attend?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Chemnitz children usually come after school or on a Saturday or Sunday morning.' },
      { q: 'Can my child take part in the Mathematik-Olympiade or the Biber?', a: 'Usually yes, through the school. Biber week 2026 is 9 to 20 November 2026, and the regional round of the 66th Mathematik-Olympiade is on 11 November 2026. Ask the teacher whether the school takes part.' },
      { q: 'What equipment do we need?', a: 'A computer with a keyboard, a headset or built-in microphone, and reliable internet. For the first Scratch weeks a tablet will do. Every program we use is free.' },
      { q: 'How many children are in a group?', a: 'Between 15 and 20, all of a similar age and level. A one-to-one plan is available for children who prefer to learn alone with a mentor.' },
      { q: 'How do we pay, and in which currency?', a: 'By card each month, charged in US dollars. The euro amounts on this page use the ECB reference rate as a guide; your bank does the actual conversion, so a small difference is normal. Trying the first class costs nothing.' },
      { q: 'What is the trail project?', a: 'Something we designed around the city\'s open hiking-trail file. Children compare each trail\'s signed length with its map length, find that the map stretches them all by about 1.58 because of how web maps are drawn, and then find the one trail that does not fit.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Chemnitz families.',
    items: [
      { href: '/coding-classes-in-saxony', label: 'Coding classes in Saxony', p: 'Our page for the Freistaat.' },
      { href: '/coding-classes-for-kids-leipzig', label: 'Coding for kids in Leipzig', p: 'Our page for Saxony\'s largest city.' },
      { href: '/coding-classes-for-kids-dresden', label: 'Coding for kids in Dresden', p: 'The Saxon capital.' },
      { href: '/informatik-biber-practice-in-english', label: 'Biber practice', p: 'Warm-up puzzles we wrote for it.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What typed code looks like at ten.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits of AI tools.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Your child solves a short puzzle and makes something move on screen. Then you hear honestly where your child would fit in and what the first month would look like.',
    readFirst: 'To see the format first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look through <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'Classes are live and online, in English, with mentors based in India. Message us on WhatsApp for a quick reply.',
    formNote: 'Free and without obligation.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/coding-classes-by-age-germany', label: 'Coding by age' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-saxony', label: 'Saxony' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'When all are wrong alike, check the ruler'
  },

  personalityCss: `
.ag-root.ag-chb .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-chb .ag-capsule { border-left-width: 6px; }
.ag-root.ag-chb .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-chb .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-chb .ag-grid-2 h3 { letter-spacing: -0.004em; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Sachsen page and national overview); Bundesweite Informatikwettbewerbe, Informatik-Biber 2026; Mathematik-Olympiade (mathe-wettbewerbe.de); KMK Ferien 2026/2027; Einheitenzeitgesetz; Destatis GV-ISys 31.12.2024; Stadt Chemnitz, Wanderwege, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'The stretchy map: an original project on Stadt Chemnitz\'s 27 hiking trails comparing each signed length (LAENGE) with its Web Mercator map length (SHAPE__Length); all stretch by about 1.58, which is 1/cos of Chemnitz\'s latitude, except WW 20 Lohse-Uhlig-Steig at 1.39. Paper, Scratch and Python versions. Lesson family: ratios and the odd one out.',
    requiredMentions: ['chemnitz_trails.csv', 'Trails: 27  typical stretch: 1.58', 'Odd one out: WW 20 - Lohse-Uhlig-Steig 1.39', 'Lohse-Uhlig-Steig at 1.39', 'come to 584.1 km', 'WW 03 - 10.7 km on the sign, 16.9 km on the map, x 1.58', 'about 1.58: exactly the factor the children found', 'When all are wrong alike, check the ruler'],
    sources: [
      { claim: 'Saxony Informatik grades 7 to 10; G8 Oberstufe.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/sachsen' },
      { claim: 'About half of Oberstufe pupils in Saxony take Informatik.', url: 'https://informatik-monitor.de/' },
      { claim: 'Mathematik-Olympiade regional round 11 November 2026.', url: 'https://www.mathe-wettbewerbe.de/mo' },
      { claim: 'Saxony holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Chemnitz hiking trails and licence.', url: 'https://ckan.govdata.de/dataset/wanderwege66316' }
    ],
    rejectedClaims: [
      'A cause for the Lohse-Uhlig-Steig mismatch: not stated in the data, so only possible reasons, labelled as guesses, are discussed.',
      'That the city\'s signed lengths are wrong: refuted; the stretch comes from the map projection.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with Stadt Chemnitz, the Freistaat, BWINF or the Mathematik-Olympiade: none.'
    ]
  }
};
