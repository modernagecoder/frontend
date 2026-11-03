'use strict';
// Coding classes for kids in Bonn (ag- city door, Germany cluster P5 row DE139, alloc code cbo, accent #344962).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent.
// Spine: data is already part of primary maths. The KMK primary maths standards include the Leitidee "Daten und Zufall",
// and every Land tests it in VERA-3 in grade 3 (window 12 April to 26 May 2027); NRW then teaches compulsory Informatik
// in grades 5 and 6 to a Kernlehrplan. So for a Bonn child of 6 to 12 the bridge from school maths to code is reading real
// data, which is what the page's project does with Bonn's bicycle counters. Plus the free Informatik-Biber.
// Sources (read raw; quotes in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched 2 Nov 2026):
//  - IQB VERA-3 pages (facts 108, 109, 111, 116): "VERA-3 sind schriftliche Tests, die in den Ländern in der
//    Bundesrepublik Deutschland jährlich verpflichtend durchgeführt werden."; maths Leitideen including "Daten und Zufall";
//    "VERA-3 2027: 12.04. bis 26.05.2027"; "Rankings zwischen Schulen oder Ländern werden nicht vorgenommen und die
//    Ergebnisse werden auch nicht benotet."
//  - KMK Bildungsstandards Mathematik Primarbereich (facts 119, 120): adopted 15.10.2004, version of 23.06.2022; content
//    competences follow "fünf mathematischen Leitideen".
//  - GI Informatik-Monitor 2026/27, NRW page (facts 80, 82): compulsory Informatik grades 5 and 6 at all general school
//    types; "Für die Jahrgangsstufen 5 und 6 aller Schulformen liegt ein Kernlehrplan für das Pflichtfach Informatik vor.";
//    written Informatik Abitur central, no computer.
//  - KMK Primarbereich (fact 1): Grundschule grades 1 to 4.
//  - Informatik-Biber (facts 129 to 137): free, grades 3 to 13, no prior knowledge; 30 to 40 minutes ("passt mit 30-40
//    Minuten Teilnahmedauer gut in eine Schulstunde"); Biberwochen 9 to 20 November 2026; Schnupper-Biber from 14 September
//    2026; results December 2026, certificates January 2027.
//  - AGIS directory (fact 226; places.tsv): Bonn International School lists IB PYP, MYP and DP; Independent Bonn
//    International School is listed as an AGIS partner.
//  - KMK FER2026_27.pdf (fact 275): NRW holidays 2026/27.
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Bonn 323,336; NRW 18,034,454.
//  - Time: Einheitenzeitgesetz; summer time ended 25 Oct 2026, starts 28 Mar 2027; India UTC+5:30.
//  - Data: Bundesstadt Bonn, "Fahrradmessstellen Ergebnisse Radzählungen 2023", via Open.NRW / GovData
//    https://ckan.govdata.de/dataset/fahrradmessstellen-ergebnisse-radzahlungen-20235485d, file
//    https://opendata.bonn.de/sites/default/files/Fahrradzaehlstellen2023_stuendlich.csv, licence CC0. Description: "die
//    Messergebnisse der Fahrradzählungen aller städtischen Dauerzählstellen im Bonner Stadtgebiet". 8,760 hourly rows,
//    14 counters plus totals for Kennedybrücke, Nordbrücke and Südbrücke. Downloaded 2 Nov 2026; we removed the two header
//    lines and the byte-order mark to make bonn_2023.csv. The only blank hour in the five counters used is 26.03.2023
//    03:00 (clock change), which the program skips.
// Our own calculations (scratchpad de/w/C5/bn/v1.py, v2.py; python3 -I, run in the data folder):
//  v1: "Kennedybrücke 7270 4435 2835", "Südbrücke 3067 2080 987", "Wilhelm-Spiritus-Ufer 2721 2259 462",
//  "Von-Sandt-Ufer 1604 1746 -142", "Mc Cloy Weg 1058 1350 -292" (average bikes per weekday, per weekend day, difference).
//  v1+v2 adds "Weekday bikes for every weekend bike:", "Kennedybrücke 1.64", "Südbrücke 1.47", "Wilhelm-Spiritus-Ufer 1.2",
//  "Von-Sandt-Ufer 0.92", "Mc Cloy Weg 0.78". Other complete counters, same method: Nordbrücke 1.18, Bröhltalweg 1.15,
//  Weg auf Damm Neil 1.02, Estermannufer 0.8. 2023 totals: Kennedybrücke 2,355,595; Mc Cloy Weg 416,594.
// Lesson family: compare things of different sizes with a ratio, not a difference.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv, datetime',
  '',
  'COUNTERS = ["Kennedybrücke", "Südbrücke", "5.13 BN - Wilhelm-Spiritus-Ufer",',
  '            "5.08 BN - Von-Sandt-Ufer", "5.14 BN - Mc Cloy Weg"]',
  'bikes = {name: {"week": 0, "weekend": 0} for name in COUNTERS}',
  'hours = {"week": 0, "weekend": 0}',
  '',
  'counts = open("bonn_2023.csv", encoding="utf-8")',
  'for hour in csv.DictReader(counts, delimiter=";"):',
  '    when = datetime.datetime.strptime(hour["Time"], "%d.%m.%Y %H:%M")',
  '    kind = "weekend" if when.weekday() >= 5 else "week"',
  '    if any(hour[name] == "" for name in COUNTERS):',
  '        continue',
  '    hours[kind] += 1',
  '    for name in COUNTERS:',
  '        bikes[name][kind] += int(hour[name])',
  '',
  'for name in COUNTERS:',
  '    week = bikes[name]["week"] / hours["week"] * 24',
  '    weekend = bikes[name]["weekend"] / hours["weekend"] * 24',
  '    print(name.split(" - ")[-1], round(week), round(weekend), round(week - weekend))'
].join('\n');

const V2 = [
  'print("Weekday bikes for every weekend bike:")',
  'for name in COUNTERS:',
  '    week = bikes[name]["week"] / hours["week"]',
  '    weekend = bikes[name]["weekend"] / hours["weekend"]',
  '    print(name.split(" - ")[-1], round(week / weekend, 2))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Bonn: coding for kids' },
  slug: 'coding-classes-for-kids-bonn',
  code: 'cbo',
  accent: '#344962',
  accentRationale: 'Coding classes for kids, Bonn: a slate river blue #344962 for the Rhine under the Kennedybrücke, the busiest counter in the project; contrast 7.49 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding classes for kids in Bonn',
  title: 'Coding Classes for Kids in Bonn: Live Online, in English',
  description: 'Coding classes for kids in Bonn aged 6 to 12, live online in English: data in primary maths, NRW Informatik from grade 5 and a Rhine bridge bike counter project.',
  ogDescription: 'Live online coding in English for Bonn children aged 6 to 12: primary maths already tests data handling in VERA-3, NRW Informatik starts in grade 5, and a Python project compares weekday and weekend cycling on Bonn\'s Rhine bridges and riverside paths.',
  twitterDescription: 'Coding for Bonn kids, live in English: data in primary maths, NRW Informatik and a bike counter project.',
  pageName: 'Coding Classes for Kids in Bonn',
  webPageDescription: 'A guide for Bonn parents of children aged 6 to 12: how data handling appears in primary maths (KMK standards, VERA-3), what NRW teaches in Informatik from grade 5, the Informatik-Biber 2026, and an original Python project on the City of Bonn bicycle counters for 2023.',
  courseDescription: 'Live online coding classes in English for Bonn children aged 6 to 12: Scratch and games first, then typed Python with data and small AI projects, in groups of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Bonn',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#data-maths', label: 'Maths & data' },
    { href: '#bridges', label: 'Bridges' },
    { href: '#beaver', label: 'Biber' },
    { href: '#bonn-clock', label: 'Times' }
  ],
  eyebrow: 'Bonn &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Bonn',
  lede: 'Long before a Bonn child writes a line of code at school, primary maths asks them to read tables and charts: data handling is one of the five big ideas in the national maths standards, and it is tested in grade 3. Coding is the natural next step, because a program is the quickest way to ask a big table a question. This page shows where data and computing sit in NRW schools, how our live classes in English work for ages 6 to 12, a free puzzle contest this month, and a project on Bonn\'s own bicycle counters along the Rhine.',
  secondaryCta: { href: '#bridges', label: 'See the bridge project' },
  wa: 'Hello Modern Age Coders, we are in Bonn and our child would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; English lessons for Bonn children',
  spec: [
    ['Ages', '6 to 12'],
    ['Early years', 'Scratch, games and puzzles'],
    ['Later', 'Python with real data'],
    ['Group', 'Fifteen to twenty, or private'],
    ['Mentors', 'Live, based in India'],
    ['Trial', 'Free first class']
  ],
  capsuleQ: 'Short version',
  capsule: 'Coding classes for kids in Bonn at Modern Age Coders are live online lessons, taught in English, for children between 6 and 12: games and puzzles in Scratch, then Python they type themselves, moving on to data files and small AI projects in the course Python and AI for Kids. Lessons run in groups of fifteen to twenty or one to one, after school or on weekend mornings, and the mentor shapes pace and accent around each child.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for Bonn children aged 6 to 12',
    lede: 'A games course that suits the younger end, the Python course for children from about nine, and an app course for children who want to make something they can hold.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'CBO / 01', title: 'Game Development for Kids', note: 'Ages 8 to 12, six to eight months. Scratch first, then Roblox and Minecraft: three game worlds, one set of ideas about loops, events and scores.' },
      { course: 'python-ai-kids-masterclass', code: 'CBO / 02', title: 'Python and AI for Kids', note: 'For children of about nine and above. Python typed from the start, graphics and games, then data files such as the Bonn bike counts on this page.' },
      { course: 'block-coding-app-development-masterclass', code: 'CBO / 03', title: 'App Making for Kids', note: 'Ages 8 to 12. Real phone apps built from blocks, with buttons, screens and simple data the child designs.' }
    ]
  },

  sections: [
    {
      id: 'data-maths',
      eyebrow: 'Data, maths and Informatik',
      h2: 'Do Bonn children learn about data before they learn to code?',
      lede: 'Yes. Data handling is part of primary maths in every Land, and NRW adds compulsory Informatik in grades 5 and 6. The pieces fit together better than most parents expect.',
      body: [
        { kind: 'two',
          leftH3: 'In primary maths',
          left: [
            'The KMK maths standards for the primary stage, adopted in 2004 and revised in 2022, organise content around five big ideas. One of them is "Daten und Zufall", data and chance: reading and making tables and charts, and thinking about likelihood.',
            'In grade 3, all Länder run VERA-3, compulsory written comparison tests in German and maths. The maths tests cover the same five ideas, data and chance among them. VERA results are not graded, and no rankings of schools or Länder are made. The 2027 test window is 12 April to 26 May 2027.'
          ],
          rightH3: 'In grades 5 and 6',
          right: [
            'Bonn children attend Grundschule for grades 1 to 4. In grades 5 and 6, NRW teaches Informatik as a compulsory subject at every general school type, with its own Kernlehrplan for grades 5 and 6, as recorded by the GI Informatik-Monitor 2026/27.',
            'After grade 6 Informatik becomes an elective, and at the end of the road the NRW Informatik Abitur is written centrally and on paper, without a computer.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Where data and computing appear for a Bonn child', head: ['Grade', 'What happens', 'Source'], rows: [
          ['1 to 4', 'Maths includes the big idea "Daten und Zufall"', 'KMK Bildungsstandards Mathematik, Primarbereich'],
          ['3', 'VERA-3 comparison test in maths, not graded; 2027 window 12 April to 26 May', 'IQB, VERA-3'],
          ['5 and 6', 'Compulsory Informatik with a Kernlehrplan', 'GI Informatik-Monitor 2026/27, NRW'],
          ['7 to 10', 'Informatik as an elective, depending on school type', 'GI Informatik-Monitor 2026/27, NRW'],
          ['Abitur', 'Central written Informatik exam, on paper', 'GI Informatik-Monitor 2026/27, NRW']
        ] },
        { kind: 'source', html: 'Sources: KMK, Bildungsstandards für das Fach Mathematik Primarbereich (version of 23 June 2022) and Primarbereich page; IQB, VERA-3; Gesellschaft für Informatik, Informatik-Monitor 2026/27, Nordrhein-Westfalen page; all read 2 November 2026. In some Länder VERA has other names, such as Lernstandserhebungen.' },
        { kind: 'p', mt: true, html: 'Seen together, the path is clear. A Bonn child learns to read a small table in primary maths, meets algorithms in grade 5, and could, with a little coding, ask a table of nine thousand rows a question that no one could answer by hand. That last step is what our project below is about.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'What does it mean that classes are in English?',
      lede: 'All our lessons are live and use English only, with a mentor who adapts to the child. We would rather you knew that from the first line.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English, every lesson', p: 'We teach no German-language groups. Bonn has international schools, among them Bonn International School, which lists the IB programmes in the AGIS directory; for a child at a German school, the English adds a second skill to the coding.' },
          { h3: 'Adapted to the learner', p: 'The mentor watches the child as much as the screen. If an explanation does not land, a shorter one follows. Speed, vocabulary and accent shift to suit the child, and the child is never hurried into an answer.' },
          { h3: 'Seeing before saying', p: 'In a coding lesson the important things happen on screen: a character jumps, a total appears, a chart grows. Children follow the action first and pick up the words around it, which keeps the language load light.' }
        ] },
        { kind: 'p', mt: true, html: 'Our mentors are in India and teach over live video, so a Bonn afternoon is their evening. A group stays with one mentor for months, long enough for that mentor to know who wants a harder problem and who learns best by explaining their idea out loud.' }
      ]
    },
    {
      id: 'bridges',
      tint: 'tint',
      eyebrow: 'A real Bonn project',
      h2: 'Commuter route or Sunday ride? Comparing Bonn\'s bike counters with a ratio',
      lede: 'The City of Bonn counts bicycles every hour at its permanent counting points and publishes the results as open data. Children use a year of these counts to sort Bonn\'s routes into school-and-work routes and weekend routes, and discover why a difference can mislead where a ratio does not.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file "Fahrradmessstellen Ergebnisse Radzählungen 2023" comes from the Bundesstadt Bonn through Open.NRW. It is published under CC0, so anyone may reuse it without conditions. Our copy is from 2 November 2026.',
            'It has 8,760 rows, one per hour of 2023, and a column for each counter: the three Rhine bridges (Kennedybrücke, Nordbrücke, Südbrücke) and paths such as the Wilhelm-Spiritus-Ufer, the Von-Sandt-Ufer and the Mc Cloy Weg.'
          ],
          rightH3: 'The question',
          right: [
            'Is a route busier on weekdays or at weekends? A route used for school and work should be busier from Monday to Friday; a leisure route by the river should fill up on Saturday and Sunday.',
            'The first program works out the average number of bikes per weekday and per weekend day for five counters, then subtracts one from the other.'
          ] },
        { kind: 'code', label: 'Version 1: the difference', lang: 'Python', code: V1, note: 'Our program. It prints, for each counter, bikes per weekday, bikes per weekend day and the difference: <code>Kennedybrücke 7270 4435 2835</code>, <code>Südbrücke 3067 2080 987</code>, <code>Wilhelm-Spiritus-Ufer 2721 2259 462</code>, <code>Von-Sandt-Ufer 1604 1746 -142</code> and <code>Mc Cloy Weg 1058 1350 -292</code>.' },
        { kind: 'p', mt: true, html: 'The Kennedybrücke shows a huge difference, 2,835 more bikes on an average weekday. The Mc Cloy Weg shows only 292 more on a weekend day. Does that mean the Kennedybrücke is a much stronger commuter route than the Mc Cloy Weg is a leisure route? Not necessarily. The Kennedybrücke is simply far busier overall, so any difference there comes out big. Comparing raw differences between a giant and a small path is like comparing pocket money and a salary by how much each went up.' },
        { kind: 'code', label: 'Version 2: the ratio', lang: 'Python', code: V2, note: 'Our program, run after Version 1. It adds <code>Weekday bikes for every weekend bike:</code> followed by <code>Kennedybrücke 1.64</code>, <code>Südbrücke 1.47</code>, <code>Wilhelm-Spiritus-Ufer 1.2</code>, <code>Von-Sandt-Ufer 0.92</code> and <code>Mc Cloy Weg 0.78</code>.' },
        { kind: 'p', html: 'Now every counter sits on the same scale, whatever its size. Above 1, a route is busier on weekdays; below 1, at weekends. The Kennedybrücke carries 1.64 weekday bikes for every weekend bike. The Mc Cloy Weg carries 0.78: for every 100 weekend riders there, only 78 come on an ordinary weekday, so weekend use is about 28 percent higher. That makes it as clearly a weekend route as the bridge is a weekday one, which the differences in Version 1 completely hid.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Weekday bikes for every weekend bike at Bonn counters in 2023 (our calculation)', head: ['Counter', 'Ratio'], rows: [
          ['Kennedybrücke (both sides)', '1.64'],
          ['Südbrücke (both sides)', '1.47'],
          ['Wilhelm-Spiritus-Ufer', '1.20'],
          ['Nordbrücke (both sides)', '1.18'],
          ['Bröhltalweg', '1.15'],
          ['Weg auf Damm Neil', '1.02'],
          ['Von-Sandt-Ufer', '0.92'],
          ['Estermannufer', '0.80'],
          ['Mc Cloy Weg', '0.78']
        ] },
        { kind: 'source', html: 'Data: Bundesstadt Bonn, Fahrradmessstellen Ergebnisse Radzählungen 2023 (hourly), via Open.NRW and GovData, licence CC0, downloaded 2 November 2026. Ratios are ours: average bikes per weekday hour divided by average bikes per weekend hour. Counters with long gaps in 2023 (Rhenusallee, Brühler Straße and the north side of the Kennedybrücke on its own) are left out. One hour, 03:00 on 26 March 2023, the night the clocks changed, is blank and skipped. In 2023 the Kennedybrücke counted 2,355,595 bikes in total.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, with coins.</strong> Put 6 coins in one pile and 3 in another, then 60 and 57. Which pair is "more different"? Talk about it before you count.',
          '<strong>Ages 8 to 10, in Scratch.</strong> Store weekday and weekend counts for three made-up paths and let a sprite say "weekday route" or "weekend route" by checking whether the ratio is above 1.',
          '<strong>Ages 10 to 12, in Python.</strong> Try both versions, then add the Nordbrücke and the Estermannufer to the list and check the table above.',
          '<strong>Going further.</strong> Split the year into months and work out the ratio for each one. Does the Mc Cloy Weg become even more of a weekend route in summer?'
        ] }
      ]
    },
    {
      id: 'beaver',
      eyebrow: 'Free contest',
      h2: 'Is there a free informatics contest a Bonn child can try?',
      lede: 'The Informatik-Biber. It is a short online puzzle contest, costs nothing, needs no prior knowledge and takes pupils from grade 3 to grade 13. This year it runs from 9 to 20 November 2026.',
      body: [
        { kind: 'two',
          leftH3: 'The idea',
          left: [
            'The Biber is organised by Bundesweite Informatikwettbewerbe (BWINF). Its puzzles test informatics thinking, such as following rules, spotting patterns and finding efficient routes, without asking for any code.',
            'BWINF says it fits well into a school lesson, at 30 to 40 minutes. Children can work alone or in pairs.'
          ],
          rightH3: 'Practical steps',
          right: [
            'Schools register and run it during lessons, so ask the class teacher whether the school is joining between 9 and 20 November 2026. The Schnupper-Biber practice round has been online since 14 September 2026 for anyone who wants to try at home.',
            'BWINF plans to publish results in December 2026 and to send certificates in January 2027.'
          ] },
        { kind: 'p', mt: true, html: 'We are independent of BWINF and do not copy Biber tasks. The puzzles we write for class share the same spirit as the coin task above: a small question where the first instinct is wrong and a moment of careful thought gets it right.' }
      ]
    },
    {
      id: 'bonn-clock',
      eyebrow: 'Class times',
      h2: 'At what times do Bonn children take classes?',
      lede: 'Mostly after school and on weekend mornings. Bookings show each slot in Bonn time, and the mentor receives it in Indian time.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example class times for Bonn families, with the time in India', head: ['Bonn', 'India this winter (to 28 March 2027)', 'India next summer (from 28 March 2027)'], rows: [
          ['15:05', '19:35', '18:35'],
          ['16:50', '21:20', '20:20'],
          ['Sunday 10:40', '15:10', '14:10']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz Germany uses MEZ, UTC+1, in winter and MESZ, UTC+2, in summer. Winter time began again on 25 October 2026, and summer time returns on 28 March 2027. India stays on UTC+5:30, so the gap is 4 h 30 min in winter and 3 h 30 min in summer. These rows are illustrations, not fixed groups.' },
        { kind: 'p', mt: true, html: 'In the KMK holiday list for NRW, the 2026 to 2027 school year breaks for Christmas on 23 December and resumes after 6 January; the Easter break spans 22 March to 3 April 2027, 18 May is a single day off, and the summer break lasts from 19 July until 31 August 2027. Classes run through holidays as normal. Children from Siegburg, Sankt Augustin, Troisdorf or Königswinter learn in the same groups.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growth',
    h2: 'Five stages from first game to first data project',
    lede: 'Our own stages. They decide which group fits a child and shape the short notes we send home.',
    table: { caption: 'Our stages for ages 6 to 12', head: ['Stage', 'Age range', 'Milestone'], rows: [
      ['1. Play', '6 to 7', 'Makes a character move and talk on cue'],
      ['2. Repeat', '7 to 9', 'Builds a loop and an event in a game'],
      ['3. Score', '8 to 10', 'Keeps counts in variables and compares them'],
      ['4. Type', '9 to 11', 'Writes Python with loops, conditions and lists'],
      ['5. Ask the data', '10 to 12', 'Turns a question into a ratio and computes it from a real file']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the bridge project, and it links straight back to the data and chance strand of primary maths.',
      'We describe progress by what your child made and explained.'
    ] },
    right: { h3: 'For children', ps: [
      'Big things make big differences. Use a ratio to compare fairly.',
      'Above 1 means more; below 1 means less. Check which way round you divided.'
    ] }
  },

  catalogue: {
    eyebrow: 'Explore more',
    h2: 'Nine more courses for children in Bonn',
    lede: 'Each is taught live in English, either in a class or privately.',
    bands: [
      { num: 'I', h3: 'Starting', sub: 'Ages 6 to 12', courses: [
        { code: 'CBO / START / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'The broad first course, from Scratch to apps.' },
        { code: 'CBO / START / 02', slug: 'scratch-programming-complete-course', title: 'Scratch Coding', blurb: 'Stories and games built from blocks.' },
        { code: 'CBO / START / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Young Thinkers', blurb: 'Reasoning and patterns for 6 to 9.' }
      ] },
      { num: 'II', h3: 'Data and maths', sub: 'Ages 5 to 15', courses: [
        { code: 'CBO / DATA / 01', slug: 'maths-through-coding', title: 'Maths Through Coding', blurb: 'Ratios, graphs and patterns in Python, 10 to 15.' },
        { code: 'CBO / DATA / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Live maths for grades 1 to 5, placed by level.' },
        { code: 'CBO / DATA / 03', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy', blurb: 'How AI learns from data, for 8 to 14.' }
      ] },
      { num: 'III', h3: 'Building', sub: 'Ages 7 to 14', courses: [
        { code: 'CBO / BUILD / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding', blurb: 'From blocks to real code, 7 to 12.' },
        { code: 'CBO / BUILD / 02', slug: 'kids-ai-web-development-course', title: 'Web pages for kids', blurb: 'A first website, 9 to 12.' },
        { code: 'CBO / BUILD / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for Kids', blurb: 'A second language with puzzles, 9 to 12.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'In practice',
    h2: 'How classes work for a family in Bonn',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Bonn afternoons from about three.' },
      { time: 'Weekends', l: 'Saturday or Sunday mornings.' },
      { time: '1-on-1', l: 'A fixed slot you agree with us.' }
    ],
    cells: [
      { h3: 'Two sessions', p: 'Two live hours each week.' },
      { h3: 'Familiar mentor', p: 'One mentor stays with the group.' },
      { h3: 'Hands-on', p: 'Children build in every class.' },
      { h3: 'Peers', p: 'Groups of a similar age.' },
      { h3: 'Reports', p: 'Brief notes for parents.' },
      { h3: 'Format', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Later projects by our students',
  projectsLede: 'Students who began young have gone on to build things like these; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows many more.',
  reviewsLede: 'Google reviews from parents and students, word for word.',

  fees: {
    h2: 'Fees for Bonn families',
    lede: 'One monthly payment covers eight live classes. The euro figure on this page uses the European Central Bank reference rate. We charge in US dollars and your bank converts the amount, so the euro value on your statement can be slightly different.',
    free: ['Free trial', 'A puzzle and a first build', 'No card details'],
    group: ['Fifteen to twenty children, similar ages', 'A regular mentor', 'Two classes weekly', 'Month to month'],
    one: ['A private mentor', 'Your child\'s projects and pace', 'Times you choose']
  },

  faq: {
    eyebrow: 'Bonn parents ask',
    h2: 'Coding classes for kids in Bonn: frequently asked',
    items: [
      { q: 'Are the classes in German?', a: 'No. Classes are live and taught only in English. The mentor adapts speed, words and accent to your child and checks understanding often, so children who are still building their English can follow comfortably.' },
      { q: 'When do Bonn schools start teaching Informatik?', a: 'In grade 5. North Rhine-Westphalia teaches Informatik as a compulsory subject in grades 5 and 6 at all general school types, to a Kernlehrplan, according to the GI Informatik-Monitor 2026/27. From grade 7 it is an elective.' },
      { q: 'What does data have to do with primary maths?', a: 'Data and chance is one of the five big ideas in the KMK primary maths standards, and it is part of the VERA-3 maths tests that every Land runs in grade 3. Reading a table with code is a natural next step.' },
      { q: 'When is VERA-3 in 2027?', a: 'The IQB gives the VERA-3 window for 2027 as 12 April to 26 May 2027. The results are not graded and are not used to rank schools or Länder.' },
      { q: 'When are classes in Bonn time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In Bonn, after-school slots and Sunday mornings are popular.' },
      { q: 'Where are the mentors based?', a: 'In India. They teach live over video, and a class at 16:50 in Bonn is at 21:20 for the mentor in winter and 20:20 in summer.' },
      { q: 'Can my child do the Informatik-Biber?', a: 'If the school takes part, yes. The Biber is free, open from grade 3 and needs no coding. The 2026 contest weeks are 9 to 20 November. We have no link with BWINF.' },
      { q: 'What is the bridge project?', a: 'An original Python project on the City of Bonn bike counters for 2023. Children compare weekday and weekend cycling, see that raw differences favour the busiest counter, and use a ratio to compare all routes fairly.' },
      { q: 'How large are groups?', a: 'Fifteen to twenty children of similar age, or one-to-one lessons if you prefer.' },
      { q: 'How do fees and payment work?', a: 'Fees are monthly, shown in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts. The trial class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Next',
    h2: 'Related pages',
    lede: 'More reading for families in Bonn.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The full set of Germany pages.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'NRW alongside the other Länder.' },
      { href: '/informatik-biber-practice-in-english', label: 'Biber practice in English', p: 'Preparing for the Informatik-Biber.' },
      { href: '/coding-for-international-school-students-germany', label: 'International school students', p: 'Coding for pupils at international schools in Germany.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'Our page for the whole Land.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside our live classes.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Your child spends the trial with a mentor, solving a puzzle and making a first small program. We then recommend a course and a group that fit.',
    readFirst: 'You may want to read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">all courses</a> first.',
    note: 'All classes are live online and in English only, taught by mentors in India. WhatsApp us with any question.',
    formNote: 'Free and non-binding.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids' },
        { href: '/game-coding-classes-for-kids-germany', label: 'Game coding' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Compare by ratio, not by gap'
  },

  personalityCss: `
.ag-root.ag-cbo .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-cbo .ag-capsule { border-left-width: 4px; }
.ag-root.ag-cbo .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-cbo .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cbo .ag-table caption { text-align: left; font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'KMK Bildungsstandards Mathematik Primarbereich and Primarbereich page; IQB, VERA-3; Gesellschaft für Informatik, Informatik-Monitor 2026/27, NRW page; Bundesweite Informatikwettbewerbe, Informatik-Biber; AGIS directory; KMK Ferienkalender 2026/27; Destatis GV-ISys; Einheitenzeitgesetz; all read 2 November 2026. Bundesstadt Bonn, Fahrradmessstellen Ergebnisse Radzählungen 2023, CC0.',
    localProject: 'Commuter route or Sunday ride: an original Python project on the 2023 hourly counts from Bonn\'s bike counters, where weekday minus weekend differences make the Kennedybrücke look like the only story (2,835 more bikes a weekday) and the weekday-to-weekend ratio shows the Mc Cloy Weg (0.78) is as clearly a weekend route as the Kennedybrücke (1.64) is a weekday one. Lesson family: compare things of different sizes with a ratio, not a difference.',
    requiredMentions: ['bonn_2023.csv', 'Kennedybrücke 7270 4435 2835', 'Mc Cloy Weg 1058 1350 -292', 'Weekday bikes for every weekend bike:', 'Mc Cloy Weg 0.78', 'VERA-3 window for 2027 as 12 April to 26 May 2027', 'Daten und Zufall', 'Compare by ratio, not by gap'],
    sources: [
      { claim: 'VERA-3 compulsory in grade 3; 2027 window; maths Leitideen.', url: 'https://www.iqb.hu-berlin.de/de/schule/primarstufe/vera-3/' },
      { claim: 'VERA results not graded, no rankings.', url: 'https://www.iqb.hu-berlin.de/de/bista/implementation-und-ueberpruefung/vera/' },
      { claim: 'Primary maths standards and the five Leitideen.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2022/2022_06_23-Bista-Primarbereich-Mathe.pdf' },
      { claim: 'NRW compulsory Informatik grades 5 and 6 with Kernlehrplan; Abitur on paper.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Informatik-Biber 2026 dates and format.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'NRW holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Bonn International School programmes.', url: 'https://www.agis-schools.org/school/bonn-international-school' },
      { claim: 'Bonn bike counter data 2023 and licence.', url: 'https://ckan.govdata.de/dataset/fahrradmessstellen-ergebnisse-radzahlungen-20235485d' }
    ],
    rejectedClaims: [
      'Reasons for the weekend pattern on any path: not in the data; the page describes the numbers only.',
      'Naming Bonn international schools as sources of our students: refused; context only.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any connection with the City of Bonn, the IQB, the NRW ministry or BWINF: none.'
    ]
  }
};
