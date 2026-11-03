'use strict';
// Coding classes for kids in Frankfurt (ag- city door, Germany cluster P5 row DE119, rows.tsv city tier 1).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only,
// with mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle: Hessen is one of the six Länder with no Informatik that every pupil must take, and no plan to add it, so a
// Frankfurt child aged 6 to 12 meets computing at school only by choice; what Hessen schools do offer and when; our
// live English classes; the free Informatik-Biber; Hessen holidays 2027; a skyline project on the city's own
// high-rise register in which every building looks taller than 100 m until the child subtracts the ground.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-for-kids-frankfurt/
// and facts-school/src/, fetched 2 and 3 Nov 2026):
//  - Destatis GV-ISys 05-staedte.xlsx (facts-geo/places.tsv): Frankfurt am Main 756,021 on 31.12.2024; Hessen
//    6,280,793; Offenbach am Main 132,746.
//  - KMK Primarbereich (FACTS 1): Grundschule grades 1 to 4 except Berlin and Brandenburg.
//  - GI Informatik-Monitor 2026/27, Hessen page (infmon-hessen): "Schulartübergreifend findet kein verbindlicher
//    Informatikunterricht statt."; "Im gymnasialen Bildungsgang kann Informatik als Teil des Wahlunterrichts je
//    einstündig ab der Jahrgangsstufe 7 angeboten werden."; Haupt- und Realschule WPU possible "jedoch liegt keine
//    eigene curriculare Grundlage für diese Bildungsgänge vor". National page (FACTS 92, 96): six Länder "ohne einen
//    für alle verbindlichen Informatikunterricht"; "In Berlin, Brandenburg und Hessen sind keine verbindlichen Vorhaben
//    für die Einführung des Pflichtfachs Informatik bekannt."
//  - kultus.hessen.de Gymnasium page (he-gym.html): Oberstufe "Jahrgangsstufen 10 bis 12 (G8) bzw. 11 bis 13 (G9)";
//    "Wahlfreiheit der Schulen zwischen G8, G9 und dem Parallelangebot G8/G9". Grundschule page: "Von 4 nach 5".
//  - KMK FER2026_27.pdf (FACTS 276): "Hessen (4) 05.10. - 17.10. 23.12. - 12.01. -- 22.03. - 02.04. -- 28.06. - 06.08."
//  - bwinf.de (FACTS 129 to 137): Biber free, grades 3 to 13; 9/30, 12/35, 15/40; 9 to 20 November 2026; results
//    December 2026, certificates January 2027; over 580,000 in 2025.
//  - Time: EinhZeitG para 4; SoZV; summer time ended 25 October 2026, starts 28 March 2027 (facts-geo/timezone.tsv).
//  - Data: Stadt Frankfurt am Main, Stadtvermessungsamt, "WFS Hochhäuser Frankfurt am Main" via GovData
//    https://ckan.govdata.de/dataset/wfs-hochhauser-frankfurt-am-main, licence Datenlizenz Deutschland Namensnennung 2.0,
//    attribution "Stadt Frankfurt am Main, www.frankfurt.de" (hochhaeuser-record.xml). GetFeature GeoJSON, 439
//    features, sha256 1c6101b1...10929ce4d (src/opendata/dl/frankfurt.data, downloaded 2 November 2026). Columns used:
//    LAGE (address), AOG, HEHHHOH (smaller height column, 90.8 to 134.7), HFTHOH (larger, 152.8 to 360.0). The service
//    does not document the columns; reading HEHHHOH as ground level and HFTHOH as the top, both above sea level, is
//    ours and is checked on the page by metres per storey.
// Our own calculations (scratchpad de/w/C3/de119/extract.py, v1.py, v2.py, python3 -I): v1 prints "Rows: 439" and
// "Taller than 100 m? 439"; v2 prints "Taller than 100 m: 210 rows at 44 addresses" and "Smallest height in the file:
// 60.0". 116 distinct first addresses. Tallest per address: Große Gallusstraße 17, 62 storeys, top 360.0, ground 101.7,
// height 258.3 (4.17 m per storey; 5.81 if the top column is divided); Friedrich-Ebert-Anlage 49, 55, 351.6, 97.7,
// 253.9 (4.62; 6.39); Große Gallusstraße 14, 56, 333.0, 100.0, 233.0 (4.16; 5.95); Mainzer Landstraße 58, 55, 304.4,
// 97.1, 207.3 (3.77; 5.53). Pair: Mailänder Straße 1 top 224.6 ground 133.7 = 90.9 m (28 storeys); Neue Mainzer Straße
// 46-50 top 224.5 ground 99.0 = 125.5 m (27 storeys).
// Lesson family: a height needs its zero; subtract the ground before you compare.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'over_100 = 0',
  'rows = 0',
  'with open("hochhaeuser.csv", newline="", encoding="utf-8") as towers:',
  '    for row in csv.DictReader(towers):',
  '        rows = rows + 1',
  '        if float(row["spitze"]) > 100:',
  '            over_100 = over_100 + 1',
  '',
  'print("Rows:", rows)',
  'print("Taller than 100 m?", over_100)'
].join('\n');

const V2 = [
  'import csv',
  '',
  'over_100 = 0',
  'addresses = set()',
  'lowest = None',
  'with open("hochhaeuser.csv", newline="", encoding="utf-8") as towers:',
  '    for row in csv.DictReader(towers):',
  '        height = round(float(row["spitze"]) - float(row["boden"]), 1)',
  '        if height > 100:',
  '            over_100 = over_100 + 1',
  '            addresses.add(row["adresse"])',
  '        if lowest is None or height < lowest:',
  '            lowest = height',
  '',
  'print("Taller than 100 m:", over_100, "rows at", len(addresses), "addresses")',
  'print("Smallest height in the file:", lowest)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Frankfurt: coding for kids' },
  slug: 'coding-classes-for-kids-frankfurt',
  code: 'cfr',
  accent: '#5B3649',
  accentRationale: 'Coding classes for kids, Frankfurt: a dark plum #5B3649, the evening colour of the glass towers in the skyline project, far from the Berlin brick red; contrast 8.24 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-hesse', name: 'Hesse' }],
  routeLabel: 'Coding classes for kids in Frankfurt',
  title: 'Coding Classes for Kids in Frankfurt: Live Online, in English',
  description: 'Coding classes for kids in Frankfurt aged 6 to 12, live online in English: what Hessen schools teach, the free Informatik-Biber and a skyline data project.',
  ogDescription: 'Live online coding for Frankfurt children aged 6 to 12, taught in English at their own pace: why Hessen schools leave computing to choice, the Informatik-Biber in November 2026, and a project on the city\'s own high-rise register.',
  twitterDescription: 'Coding for Frankfurt kids, live in English: Hessen school rules, the Informatik-Biber and a skyline data project.',
  pageName: 'Coding Classes for Kids in Frankfurt',
  webPageDescription: 'A guide for Frankfurt parents of children aged 6 to 12 to learning to code, built from Gesellschaft für Informatik, Hessian ministry and KMK sources, the Informatik-Biber dates for 2026, and an original project on the Stadt Frankfurt am Main high-rise register.',
  courseDescription: 'Live online coding classes in English for Frankfurt children aged 6 to 12: blocks first, then typed Python and small data projects, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Frankfurt',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'Schools' },
    { href: '#project', label: 'Skyline project' },
    { href: '#biber', label: 'Biber' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Frankfurt am Main &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Frankfurt',
  lede: 'In Hessen, no school type has to teach Informatik, and the Gesellschaft für Informatik knows of no plan to change that. For a Frankfurt child of 6 to 12, that means coding happens at home, in a club, or not at all. This page sets out what Hessian schools do offer and from which grade, what our live English lessons look like for primary-age children, a free puzzle contest that runs this month, and a project on the city\'s own register of high-rise buildings, where the first answer a program gives is wrong for a reason every child can understand.',
  secondaryCta: { href: '#project', label: 'See the skyline project' },
  wa: 'Hello Modern Age Coders, we live in Frankfurt and our child would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; classes in English with a mentor who knows your child',
  spec: [
    ['Ages', '6 to 12, in age groups'],
    ['First tools', 'Scratch blocks, then Python'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Frankfurt times', 'After school or weekend mornings'],
    ['Mentors', 'Based in India, live on video'],
    ['Trial', 'One free class, no card']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Coding classes for kids in Frankfurt: Modern Age Coders teaches Frankfurt children aged 6 to 12 to code in live online lessons in English. Younger children build games with Scratch blocks; from about 9 they type real Python and work with real data, such as Frankfurt\'s high-rise register. One regular mentor sets the pace and speaks clearly for children still learning English. Classes run after school or on weekend mornings, one to one or with fifteen to twenty children.',

  picks: {
    eyebrow: 'Where Frankfurt children start',
    h2: 'Three courses for Frankfurt children aged 6 to 12',
    lede: 'A typed-code course for nine to twelve year olds, a long blocks course for the youngest, and a puzzle course for children who like to think before they build.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CFR / 01', title: 'Python and AI for Kids', note: 'For 9 to 12 year olds, over 8 to 10 months. Real Python from the first week, turtle drawings, small games and data projects like the skyline below, then simple AI ideas.' },
      { course: 'kids-coding-blocks-masterclass', code: 'CFR / 02', title: 'Coding for Kids', note: 'For children from 6 to 12, grouped by age, over 10 to 12 months. Scratch games and stories first, then apps and a gentle step towards typed code.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'CFR / 03', title: 'Problem Solving for Kids', note: 'For 7 to 12 year olds, over 6 to 8 months. Logic puzzles, patterns and step-by-step plans, the thinking behind both coding and the Informatik-Biber.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Hessian schools',
      h2: 'Do Frankfurt schools teach coding, and from which grade?',
      lede: 'Only if a school chooses to and a child signs up. Every rule in this section is taken from the Informatik-Monitor and from the Hessian Ministry for Education.',
      body: [
        { kind: 'two',
          leftH3: 'No compulsory Informatik in Hessen',
          left: [
            'Hessen\'s entry in the Informatik-Monitor 2026/27 puts it in one sentence: "Schulartübergreifend findet kein verbindlicher Informatikunterricht statt." No school type, from Hauptschule to Gymnasium, has a compulsory Informatik lesson.',
            'Hessen is one of six Länder in that position, alongside Berlin, Brandenburg, Bremen, Rheinland-Pfalz and Sachsen-Anhalt. For Hessen, as for Berlin and Brandenburg, the Monitor is not aware of any firm plan to make the subject compulsory. Bremen and Rheinland-Pfalz, by contrast, have dates.'
          ],
          rightH3: 'What a school may offer',
          right: [
            'At a Gymnasium, Informatik can be offered as a Wahlunterricht course, one lesson a week, from grade 7. In the Hauptschule and Realschule tracks a school may set up Informatik as an elective in the Wahlpflichtunterricht, but the Monitor notes there is no curriculum of its own for those tracks.',
            'Grundschule in Hessen runs from grade 1 to grade 4, as in most of Germany, so the whole primary stage passes without any computing requirement, and the first optional lesson can come three years after it ends.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Computing on a Frankfurt school timetable, grade by grade (Hessen rules, 2026/27)', head: ['Grades', 'School stage', 'Informatik'], rows: [
          ['1 to 4', 'Grundschule', 'Not on the timetable'],
          ['5 and 6', 'Secondary, every school type', 'Not on the timetable'],
          ['7 to 10', 'Gymnasium', 'Optional Wahlunterricht, one lesson a week, if the school offers it'],
          ['7 to 10', 'Haupt- and Realschule tracks', 'Possible as an elective; no curriculum of its own'],
          ['Oberstufe', 'Gymnasium, G8 or G9', 'Grundkurs or Leistungskurs, if offered and chosen']
        ] },
        { kind: 'source', html: 'Sources: Informatik-Monitor 2026/27 (Gesellschaft für Informatik), Hessen page and Länder comparison; Hessisches Ministerium für Kultus, Bildung und Chancen, Gymnasium page (Oberstufe "Jahrgangsstufen 10 bis 12 (G8) bzw. 11 bis 13 (G9)", and each Gymnasium may choose G8, G9 or both); KMK, Primarbereich. We read them on 2 and 3 November 2026.' },
        { kind: 'p', mt: true, html: 'A family moving to Frankfurt from Nordrhein-Westfalen, where Informatik is compulsory in grades 5 and 6, or from Bayern, often expects the same here and is surprised. The practical point for parents is simple: whatever a Frankfurt child learns about programming before grade 7 comes from outside school, and even after grade 7 it depends on what the school offers and what the child picks.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Can a young child learn to code in English?',
      lede: 'Every lesson is live and in English, with a mentor who slows down for your child rather than asking your child to keep up.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English, and only English', p: 'We do not teach in German, and we say so before the first class rather than after it. Children at one of the international or bilingual schools in and around Frankfurt hear English all day anyway; children at a German Grundschule pick up the words of coding in English, which is where those words come from.' },
          { h3: 'A mentor who adjusts', p: 'Mentors speak at a calm speed, check that each step landed, and rephrase in shorter words when a child looks lost. They learn your child\'s accent quickly, and a six year old who mixes in a German word is simply handed the English one and carries on.' },
          { h3: 'Less talk, more screen', p: 'Most of a lesson is doing, not listening: dragging a block, running a program, seeing a sprite jump. The child copies, changes and then invents, so the amount of English needed in the first weeks is small and grows with confidence.' }
        ] },
        { kind: 'p', mt: true, html: 'Our mentors live in India and teach over video, which is why Frankfurt afternoons line up with their evenings. The same mentor teaches your child every week. Within a month the mentor can tell whether your child enjoys a hard challenge, needs quiet thinking time, or learns fastest by breaking a working program and fixing it again.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real Frankfurt project',
      h2: 'Frankfurt\'s skyline in data: is every high-rise really over 100 metres?',
      lede: 'The city of Frankfurt publishes a register of its high-rise buildings that anyone may reuse. In class, children of ten and over use it to learn a habit that matters in maths, science and coding alike: before you compare two measurements, ask where each one starts from.',
      body: [
        { kind: 'two',
          leftH3: 'The register',
          left: [
            'The Stadtvermessungsamt, the city\'s survey office, publishes WFS Hochhäuser Frankfurt am Main under the Datenlizenz Deutschland Namensnennung 2.0. When we downloaded it on 2 November 2026 it had 439 rows. A tall tower can appear several times, once for each part of its outline, so the 439 rows belong to 116 different first addresses.',
            'Each row has an address, a number of storeys above ground and two columns of heights. The file does not explain the height columns. One runs from 152.8 to 360.0, the other from 90.8 to 134.7.'
          ],
          rightH3: 'The question',
          right: [
            'How many of Frankfurt\'s high-rises are taller than 100 metres? Children get a small file, hochhaeuser.csv, made from the register with four columns: adresse, geschosse, boden and spitze (address, storeys, ground and top). The first program simply counts the rows whose top is over 100.',
            'A ten year old usually predicts "about half". The program says something else.'
          ] },
        { kind: 'code', label: 'Version 1: count the tall ones', lang: 'Python', code: V1, note: 'It prints: <code>Rows: 439</code> and <code>Taller than 100 m? 439</code>. Every single row, which should make anyone suspicious.' },
        { kind: 'p', mt: true, html: 'If every building were over 100 metres, the shortest would be at least 152.8 metres tall, taller than most church spires. The clue is the second column. Its numbers sit between about 91 and 135, and they barely change from row to row. Our reading, and it is our reading because the file gives no definition, is that both columns are heights above sea level: the smaller one is the ground the building stands on, the larger one is its top. Frankfurt itself is not at sea level, so a building\'s own height is the top minus the ground.' },
        { kind: 'code', label: 'Version 2: measure from the ground', lang: 'Python', code: V2, note: 'It prints: <code>Taller than 100 m: 210 rows at 44 addresses</code> and <code>Smallest height in the file: 60.0</code>.' },
        { kind: 'p', html: 'That is far more believable: 210 of the 439 rows, at 44 addresses, are over 100 metres, and the smallest height anywhere in the register is exactly 60.0 metres. Children can test our reading of the columns themselves. A storey in an office tower is usually a few metres high, so divide each height by the number of storeys and see which version gives sensible numbers.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4, 5], caption: 'Four tallest addresses in the register, two ways of measuring (our calculation)', head: ['First address', 'Storeys', 'Top column (m)', 'Top minus ground (m)', 'Metres per storey, top column', 'Metres per storey, minus ground'], rows: [
          ['Große Gallusstraße 17', '62', '360.0', '258.3', '5.81', '4.17'],
          ['Friedrich-Ebert-Anlage 49', '55', '351.6', '253.9', '6.39', '4.62'],
          ['Große Gallusstraße 14', '56', '333.0', '233.0', '5.95', '4.16'],
          ['Mainzer Landstraße 58', '55', '304.4', '207.3', '5.53', '3.77']
        ] },
        { kind: 'source', html: 'Data: Stadt Frankfurt am Main, www.frankfurt.de, Stadtvermessungsamt, WFS Hochhäuser Frankfurt am Main, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 2 November 2026. For each address we took its tallest row. The reading of the two height columns as ground and top above sea level, all heights, the storey ratios and the counts are our own work, not the city\'s.' },
        { kind: 'p', mt: true, html: 'One pair in the file makes the whole lesson in two lines. A building at Mailänder Straße 1 in Sachsenhausen has a top of 224.6 and a building at Neue Mainzer Straße 46-50 in the city centre has a top of 224.5, almost the same number. But the first stands on ground at 133.7 and the second at 99.0, so the first is 90.9 metres tall and the second 125.5 metres, nearly 35 metres taller. Same top, different start.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Stand one toy on the floor and one on a book. Measure both from the floor. Then measure each from where it stands. Which toy is taller now?',
          '<strong>Ages 8 to 10, Scratch.</strong> Put five tops and five grounds in two lists, make a sprite say each building\'s height, and colour it red if it is over 100.',
          '<strong>10 to 12, in Python.</strong> Start with Version 1, explain why 439 out of 439 cannot be right, then write Version 2 before you look at ours.',
          '<strong>Going further.</strong> Print the metres per storey for every address and find the two that look strangest. Is it the data, or a building with very tall floors?'
        ] }
      ]
    },
    {
      id: 'biber',
      eyebrow: 'A free puzzle contest',
      h2: 'Can a Frankfurt child take part in the Informatik-Biber?',
      lede: 'Yes, if the school signs up, and the 2026 contest runs right now. No coding is needed: it is a short quiz of logic puzzles.',
      body: [
        { kind: 'two',
          leftH3: 'What the Biber is',
          left: [
            'Bundesweite Informatikwettbewerbe, the organiser, describes the Informatik-Biber as the largest informatics competition for school pupils in Germany. It is free, online, open to grades 3 to 13 and needs no prior knowledge. Over 580,000 pupils entered in 2025.',
            'It fits in one lesson: half an hour and nine puzzles in grades 3 and 4, twelve puzzles and 35 minutes in grades 5 and 6, then fifteen puzzles and 40 minutes from grade 7. Children may work alone or with a partner.'
          ],
          rightH3: 'When, and how to enter',
          right: [
            'This year\'s Biberwochen are 9 to 20 November 2026. Entry is through the school, which registers its pupils and runs the quiz in class, so the first step is to ask the class teacher.',
            'Results come out in December 2026, and certificates and small prizes follow in January 2027. Since 14 September 2026 the Schnupper-Biber practice round has been online for anyone.'
          ] },
        { kind: 'p', mt: true, html: 'Biber puzzles ask children to find a hidden rule, put things in order, follow a route or crack a simple code. That is the same thinking our classes build, but we never copy or reuse the real tasks: in class the mentor writes original puzzles in a similar spirit. A Frankfurt Grundschule that does not take part this year can still be asked about 2027, and the practice puzzles are free for anyone.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are the classes in Frankfurt?',
      lede: 'Families often choose a slot between the end of school and dinner, or a weekend morning. The table shows a few typical Frankfurt times and what the clock says for the mentor.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Frankfurt times and the same moment in India', head: ['Frankfurt time', 'India time now (winter, to 28 March 2027)', 'India time from 28 March 2027 (summer)'], rows: [
          ['14:50', '19:20', '18:20'],
          ['16:40', '21:10', '20:10'],
          ['Saturday 08:50', '13:20', '12:20'],
          ['Saturday 11:15', '15:45', '14:45']
        ] },
        { kind: 'source', html: 'Legal time in Germany is CET (UTC+1) in winter and CEST (UTC+2) in summer, set by the Einheitenzeitgesetz; the clocks went back on 25 October 2026 and go forward on 28 March 2027. India does not change its clocks (UTC+5:30), so the gap is four and a half hours in winter and three and a half in summer. The rows are examples, not fixed batch times.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Hessen school holidays, school year 2026/27', head: ['Holiday', 'Dates'], rows: [
          ['Herbstferien', '5 to 17 October 2026'],
          ['Weihnachtsferien', '23 December 2026 to 12 January 2027'],
          ['Osterferien', '22 March to 2 April 2027'],
          ['Sommerferien', '28 June to 6 August 2027']
        ] },
        { kind: 'source', html: 'Source: Kultusministerkonferenz, Ferienkalender 2026/27, row Hessen, first and last day of each holiday. Hessen has no winter or Whitsun break in that year.' },
        { kind: 'p', mt: true, html: 'Classes carry on through Hessian school holidays, because the mentors are not on a German calendar. Families who travel in the long summer break from 28 June 2027 can pause and pick up again in August, or keep one class a week going from wherever they are.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Five steps from a first block to real data',
    lede: 'These milestones are ours. Mentors use them to choose a group for a new child and to explain progress to parents without jargon.',
    table: { caption: 'Our coding milestones, ages 6 to 12', head: ['Step', 'Usual age', 'What the child manages'], rows: [
      ['1. Order', '6 to 7', 'Put picture steps in order and make a character move on command'],
      ['2. Repeat and react', '7 to 9', 'Use a loop, and make a game react to a key or a touch'],
      ['3. Remember', '8 to 10', 'Keep a score in a variable and a set of numbers in a list'],
      ['4. Type it', '9 to 11', 'Type a Python program that decides and repeats on its own'],
      ['5. Question the data', '10 to 12', 'Read a real file, spot a result that cannot be right, and fix the method']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the skyline project. The aim is not the 210; it is a child who looks at 439 out of 439 and says "that can\'t be true".',
      'Reports describe what your child built and explained, not minutes logged.'
    ] },
    right: { h3: 'For children', ps: [
      'When you compare two heights, first ask: measured from where?',
      'If every answer is "yes", check the question before you celebrate.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Frankfurt children',
    lede: 'Every one is live, in English, with the same mentor each week, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Blocks and ideas', sub: 'Ages 6 to 15', courses: [
        { code: 'CFR / IDEA / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding for kids', blurb: 'A first finished game in three to four months, 6 to 12.' },
        { code: 'CFR / IDEA / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI guesses, and where it goes wrong; no grown-up accounts needed, 8 to 14.' },
        { code: 'CFR / IDEA / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python as a tool for fractions, patterns and graphs, 10 to 15.' }
      ] },
      { num: 'II', h3: 'Games', sub: 'Ages 7 to 17', courses: [
        { code: 'CFR / GAME / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds inside a world children already love, 7 to 12.' },
        { code: 'CFR / GAME / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Playable Roblox games written in Luau, 8 to 14.' },
        { code: 'CFR / GAME / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot game development', blurb: 'A real game engine and GDScript, 10 to 17.' }
      ] },
      { num: 'III', h3: 'Building and contests', sub: 'Ages 8 to 19', courses: [
        { code: 'CFR / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Working phone apps from blocks, ages 8 to 12.' },
        { code: 'CFR / MAKE / 02', slug: 'kids-ai-web-development-course', title: 'Web pages for kids', blurb: 'Design and publish a first site, 9 to 12.' },
        { code: 'CFR / MAKE / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics competitions', blurb: 'From Biber-style puzzles to contest problems, 9 to 19.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes fit a Frankfurt week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Frankfurt afternoons, once homework is done.' },
      { time: 'Weekend mornings', l: 'Saturday or Sunday, often the calmest time for six and seven year olds.' },
      { time: '1-on-1', l: 'A time you agree with the mentor, at your child\'s own pace.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same face every week, who remembers last week.' },
      { h3: 'Calm English', p: 'Short sentences, repeated without fuss.' },
      { h3: 'Hands on', p: 'The child controls the screen from day one.' },
      { h3: 'Age groups', p: 'Young children learn with children their own age.' },
      { h3: 'Short updates', p: 'Parents hear what was built and what is next.' },
      { h3: 'Two formats', p: 'Fifteen to twenty in a group, or one to one.' }
    ]
  },

  projectsH2: 'What our older students go on to build',
  projectsLede: 'Children who start at seven or eight are often building full apps by their teens. Some of their work is shown below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page collects many more.',
  reviewsLede: 'Google reviews from parents and students, copied word for word.',

  fees: {
    h2: 'Fees for Frankfurt families',
    lede: 'One monthly fee covers eight live classes. On this page the fee appears in euro, converted at the reference rate of the European Central Bank; at checkout the charge itself is in US dollars, and your bank does the conversion, so your statement may show a slightly different euro amount.',
    free: ['A free first class', 'A short logic game and a first program', 'No card asked for'],
    group: ['Fifteen to twenty children of a similar age', 'The same mentor every week', 'Two classes a week', 'Monthly, cancel before the next month'],
    one: ['Your child with one mentor', 'Projects chosen around your child', 'Times agreed with you']
  },

  faq: {
    eyebrow: 'Frankfurt parents ask',
    h2: 'Coding classes for kids in Frankfurt: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach in English only, and every class is live. The mentor keeps a gentle pace, tunes in to your child\'s accent and says things again in simpler words, which lets a child with only some English keep up. The code itself, in Scratch or Python, looks the same in any language.' },
      { q: 'Is Informatik compulsory in Hessen schools?', a: 'No. The Gesellschaft für Informatik says no school type in Hessen has compulsory Informatik, and it knows of no binding plan to introduce it. A Gymnasium may offer it as an optional one-lesson course from grade 7, and other school types may offer it as an elective.' },
      { q: 'From what age can my child start?', a: 'From 6. Children of six or seven begin with Scratch blocks that snap together, so they do not need to type or read long instructions. Most children are ready for typed Python at about 9, which is when our Python and AI for Kids course begins.' },
      { q: 'My child is in grade 1 at a German Grundschule and speaks little English. Will it work?', a: 'Often, yes. Young beginners need only a handful of English words at first, such as move, repeat and when clicked, and they see every step on the screen. The free first class shows quickly whether your child is comfortable, and the mentor will tell you honestly.' },
      { q: 'When are the classes in Frankfurt time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A common choice is a slot between the end of school and about 18:00, or a weekend morning.' },
      { q: 'Can my child enter the Informatik-Biber in Frankfurt?', a: 'Yes, through the school. The 2026 Biber runs from 9 to 20 November 2026 for grades 3 to 13, needs no coding and is free. Ask the class teacher whether the school is registered; the practice Schnupper-Biber is open to anyone.' },
      { q: 'Do classes stop in the Hessen school holidays?', a: 'No. Our mentors do not follow the Hessian calendar, so classes run through the Herbst, Christmas, Easter and summer breaks. Many families pause for a trip in the summer holidays, which in 2027 run from 28 June to 6 August, and restart afterwards.' },
      { q: 'Where are the teachers?', a: 'Our mentors teach from India, over live video. That is why Frankfurt afternoons work well: 16:40 in Frankfurt is 21:10 in India in winter and 20:10 in summer. Your child keeps the same mentor from week to week.' },
      { q: 'What are the fees, and what currency is charged?', a: 'Fees are monthly. This page shows them in euro using the European Central Bank reference rate, but the charge is made in US dollars, so your bank converts it and your statement may differ by a little. There is no charge and no card for the first class.' },
      { q: 'What does a child actually make?', a: 'Under 9, mostly Scratch games, animated stories and quizzes. From about 9, Python programs: drawings with code, small games, and, from about 10, real data projects such as the Frankfurt high-rise register on this page, where the first answer turns out to be wrong.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in and around Frankfurt.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page we have for families in Germany.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'How Hessen compares with the other fifteen Länder.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'Our own Biber-style puzzles, in English.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Where the youngest children begin.' },
      { href: '/coding-classes-in-hesse', label: 'Coding classes in Hesse', p: 'School rules, holidays and data for the whole Land.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live lessons, step by step.' }
    ]
  },

  start: {
    h2: 'Try a first class for free',
    lede: 'In the trial lesson your child plays a short logic game and writes a first program. The mentor watches how your child reasons and how easily they follow English, then suggests a course and an age group.',
    readFirst: 'If you want to know more first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a live lesson and <a class="ag-inline-link" href="/courses">all courses</a> lists the syllabus of each course.',
    note: 'Mentors teach from India, live online and in English only. For a quick question, message us on WhatsApp in English.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Kids in Berlin' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Measured from where?'
  },

  personalityCss: `
.ag-root.ag-cfr .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-cfr .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-cfr .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-cfr .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cfr .ag-table td { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Hessen page and national comparison); Hessisches Ministerium für Kultus, Bildung und Chancen (Gymnasium, Grundschule); KMK Primarbereich and Ferienkalender 2026/27; Bundesweite Informatikwettbewerbe (Informatik-Biber 2026); Einheitenzeitgesetz and Sommerzeitverordnung; Destatis GV-ISys. Data: Stadt Frankfurt am Main, WFS Hochhäuser, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'The Frankfurt skyline project: an original Python project on the city\'s high-rise register (439 rows, 116 addresses) in which counting tops over 100 gives 439 of 439, and subtracting the ground column gives 210 rows at 44 addresses with a smallest height of 60.0; checked by metres per storey and the Mailänder Straße 1 against Neue Mainzer Straße 46-50 pair. Lesson family: a height needs its zero.',
    requiredMentions: ['hochhaeuser.csv', 'Taller than 100 m? 439', 'Taller than 100 m: 210 rows at 44 addresses', 'Smallest height in the file: 60.0', 'Schulartübergreifend findet kein verbindlicher Informatikunterricht statt.', 'Mailänder Straße 1', '28 June to 6 August 2027', 'Measured from where?'],
    sources: [
      { claim: 'Hessen: no compulsory Informatik; Gymnasium Wahlunterricht one hour from grade 7; no curriculum for Haupt- and Realschule electives.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/hessen' },
      { claim: 'Six Länder without compulsory Informatik; no binding plans in Berlin, Brandenburg, Hessen.', url: 'https://informatik-monitor.de/' },
      { claim: 'Hessen Gymnasium Oberstufe G8 or G9 and school choice between them.', url: 'https://kultus.hessen.de/schulsystem/schulformen-und-bildungsgaenge/gymnasium' },
      { claim: 'Hessen holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Informatik-Biber facts and 2026 dates.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Frankfurt high-rise register and licence.', url: 'https://ckan.govdata.de/dataset/wfs-hochhauser-frankfurt-am-main' }
    ],
    rejectedClaims: [
      'Official meaning of the HEHHHOH and HFTHOH columns: not documented by the service, so the page labels its reading as ours.',
      'Names or official heights of individual towers: not in the register as used, so none given.',
      'Naming Frankfurt schools as sources of students: refused.',
      'German-language teaching, or any link with BWINF, the city or the Hessian ministry: none.'
    ]
  }
};
