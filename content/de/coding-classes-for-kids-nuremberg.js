'use strict';
// Coding classes for kids in Nuremberg (ag- city door, Germany cluster P5 row DE135).
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: in Bavaria the school a child moves to after grade 4 decides how much computing they get: one weekly lesson
// from grade 5 at the Mittelschule, a whole Informationstechnologie subject at the Realschule, an Informatik focus inside
// Natur und Technik in grades 6 and 7 at the Gymnasium. Primary school has none. Free contest: the Informatik-Biber,
// 9 to 20 November 2026. Project: Nuremberg's open list of city facilities, whose coordinates arrive with their decimal
// points lost; the child rebuilds them using what a Nuremberg coordinate must look like.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/de/; read 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Bayern page (facts-school/src/infmon-bayern/c7366485.txt): "Die Grundschule umfasst
//    die Jahrgangsstufen 1 bis 4"; Mittelschule "in den Jahrgangsstufen 5 bis 10 das verbindliche Fach Informatik im
//    Umfang von je einer Wochenstunde" (FACTS 69) and Wahlfach "Informatik und digitales Gestalten" in grades 7 to 10;
//    Realschule "das verpflichtende Fach Informationstechnologie in den Jahrgangsstufen 5 bis 10" with "insgesamt elf
//    Wochenstunden" (group I), "acht" (II), "sieben" (IIIa), "neun" (IIIb); Gymnasium Natur und Technik with "in den
//    Jahrgangsstufen 6 und 7 im Umfang von je einer Wochenstunde der Schwerpunkt Informatik" (70); grade 11 "verpflichtend
//    zweistündig Informatikunterricht" in every branch (71); written Abitur central with "Programmieraufgaben auf Papier"
//    (72); Oberstufe G9, Einführungsphase grade 11, Qualifikationsphase 12 and 13 (49).
//  - bwinf.de (FACTS 129 to 137): Biber free, grades 3 to 13, no prior knowledge; nine tasks in 30 minutes for primary,
//    twelve in 35 for grades 5 and 6; "Die Biberwochen 2026 finden vom 9. bis 20. November statt."; 20th edition; over
//    580,000 in 2025; more than 3,224 schools in 2025 (138).
//  - KMK Ferien 2026/27 row "Bayern": Herbst 02.11. - 06.11.; Weihnachten 24.12. - 08.01.; Winter 08.02. - 12.02.;
//    Ostern 22.03. - 02.04.; Pfingsten 18.05. - 28.05.; Sommer 02.08. - 13.09.
//  - AGIS directory, Franconian International School (facts-school/src/agis-franconian-international-school/): "Schüler
//    711", address 91052 Erlangen; IB Diploma Programme and MYP (229). Context only.
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Nürnberg 529,508; Fürth 132,036; Erlangen 115,928.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Nürnberg via open.bydata, "Nürnberg: Städtische Einrichtungen",
//    https://ckan.govdata.de/dataset/nurnberg-stadtische-einrichtungen, licence CC BY 4.0, CSV
//    2025_Städtische_Einrichtungen.csv from dokumente.nuernberg.de (81,357 bytes, Latin-1, sha256 026daed7...c8668597f),
//    downloaded 2 Nov 2026. 401 records; columns Name, Straße, Postleitzahl, Stadt, Homepage, Koordinate X, Koordinate Y,
//    Öffnungszeiten. Coordinates are stored with dots every three digits ("11.085.719.500.104"); 39 X values have fewer
//    than 14 digits; five records cannot be placed (X "45.112.561.028.337" or Y "0" and similar).
// Our own calculations (scratchpad de/w/C4/cnu/v1.py, v2.py, python3 -I): v1 prints "Places: 401" and "Longitude
// outside the box: 44"; v2 prints "Repaired: 396", "Cannot be placed: 5", "Furthest north: Städtische Friedhöfe Region
// Westfriedhof - Friedhof Großgründlach". Southernmost repaired: Bürgeramt Süd (49.3497). The box 10.9 to 11.4 east and
// 49.3 to 49.6 north is our own, deliberately generous choice.
// Lesson family: use what a value must be (its known range) to put a lost decimal point back, and list what still fails.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'def naive(text):',
  '    return int(text.replace(".", "")) / 10**12',
  '',
  'places = []',
  'with open("nuernberg_places.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        places.append(row)',
  '',
  'outside = 0',
  'for row in places:',
  '    if not 10.9 <= naive(row["x"]) <= 11.4:',
  '        outside += 1',
  'print("Places:", len(places))',
  'print("Longitude outside the box:", outside)'
].join('\n');

const V2 = [
  'def repair(text, low, high):',
  '    digits = text.replace(".", "")',
  '    for point in range(1, len(digits)):',
  '        value = float(digits[:point] + "." + digits[point:])',
  '        if low <= value <= high:',
  '            return value',
  '    return None',
  '',
  'fixed = []',
  'broken = []',
  'for row in places:',
  '    lon = repair(row["x"], 10.9, 11.4)',
  '    lat = repair(row["y"], 49.3, 49.6)',
  '    if lon is None or lat is None:',
  '        broken.append(row["name"])',
  '    else:',
  '        fixed.append((lat, row["name"]))',
  'print("Repaired:", len(fixed))',
  'print("Cannot be placed:", len(broken))',
  'print("Furthest north:", max(fixed)[1])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Nuremberg: coding for kids' },
  slug: 'coding-classes-for-kids-nuremberg',
  code: 'cnu',
  accent: '#7A5559',
  accentRationale: 'Coding classes for kids, Nuremberg: a dusky sandstone rose #7A5559 for the red sandstone of the Kaiserburg and the old town walls; contrast 5.21 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes for kids in Nuremberg',
  title: 'Coding Classes for Kids in Nuremberg: Live Online, in English',
  description: 'Coding classes for kids in Nuremberg aged 6 to 12: live online in English, computing in Bavarian schools by type, the Informatik-Biber and a city data project.',
  ogDescription: 'Live online coding in English for Nuremberg children aged 6 to 12: how much computing each Bavarian school type gives, the free Informatik-Biber in November 2026, and a project that repairs the coordinates in the city\'s own facilities list.',
  twitterDescription: 'Coding for Nuremberg kids, live in English: Bavarian school computing, the Informatik-Biber and a map data project.',
  pageName: 'Coding Classes for Kids in Nuremberg',
  webPageDescription: 'A guide for Nuremberg parents of children aged 6 to 12 to learning to code, built from the Informatik-Monitor page for Bavaria, the Informatik-Biber 2026 rules, the KMK holiday table and an original project on the city\'s open list of municipal facilities.',
  courseDescription: 'Live online coding classes in English for Nuremberg children aged 6 to 12: block coding, then typed Python and small data and AI projects, in a group of fifteen to twenty or one to one, with the same mentor throughout.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Nuremberg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'Schools' },
    { href: '#map', label: 'Map data' },
    { href: '#biber', label: 'Biber' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Nuremberg &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Nuremberg',
  lede: 'In Bavaria, how much computing a child gets at school depends on which school they move to after grade 4. A Mittelschule pupil has an Informatik lesson every week from grade 5; a Gymnasium pupil gets one weekly hour of it inside another subject in grades 6 and 7, and then waits. This page explains those routes for Nuremberg families, how our English-language live lessons work for children of 6 to 12, a free puzzle contest that starts next week, and a project in which children repair the map positions in the city\'s own list of public buildings.',
  secondaryCta: { href: '#map', label: 'See the map project' },
  wa: 'Hello Modern Age Coders, we live in Nuremberg and our child would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; more than 10,000 students worldwide &middot; one mentor, lessons in English',
  spec: [
    ['Ages', '6 to 12, in age groups'],
    ['Starts with', 'Blocks on screen, then Python'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Nuremberg times', 'Early afternoon, late afternoon or weekends'],
    ['Mentors', 'Based in India, teaching live'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'Coding classes for kids in Nuremberg with Modern Age Coders are live video lessons, in English, for children from 6 to 12. Children start by building games from blocks and move to typed Python at about nine, later trying data projects such as fixing the map positions in Nuremberg\'s own facilities list. One mentor stays with your child and adapts the pace and language. Families decide between a shared group of fifteen to twenty and one-to-one teaching, on school afternoons or at weekends.',

  picks: {
    eyebrow: 'Good first courses',
    h2: 'Three courses for Nuremberg children',
    lede: 'A long block-coding course for the youngest, a puzzle course for careful thinkers, and typed Python for children ready for real code.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CNU / 01', title: 'Blocks, games and apps', note: 'For children from 6 to 12 in age groups. Most of a school year spent turning block games into small apps, with a first look at AI at the end.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'CNU / 02', title: 'Puzzles before programs', note: 'For 7 to 12 year olds. Logic, patterns and step-by-step plans, a natural warm-up for the Informatik-Biber.' },
      { course: 'python-ai-kids-masterclass', code: 'CNU / 03', title: 'Real Python, small AI', note: 'Aimed at confident readers between nine and twelve. Typed code from the first week, games, drawings and data work like the map repair below.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Bavarian schools',
      h2: 'How much computing does a Nuremberg child get at school?',
      lede: 'None in primary school, and then very different amounts depending on the secondary school. Our figures are taken from the GI\'s Informatik-Monitor for 2026/27, whose Bayern chapter is compiled from the Land\'s school regulations.',
      body: [
        { kind: 'two',
          leftH3: 'Grades 1 to 4',
          left: [
            'In Bavaria, Grundschule means grades 1 to 4. There is no computing subject in it, so a Nuremberg child can reach the age of ten without a single lesson on how a program works.',
            'After grade 4, families choose between the Mittelschule, the Realschule and the Gymnasium. That choice also decides how much computing comes next.'
          ],
          rightH3: 'Grades 5 to 11, by school type',
          right: [
            'The Mittelschule teaches compulsory Informatik for one lesson a week in every year from grade 5 to grade 10, and may add a two-hour elective in grades 7 to 10. The Realschule has a compulsory subject called Informationstechnologie throughout grades 5 to 10, between seven and eleven weekly hours in total depending on the subject group.',
            'At the Gymnasium, computing sits inside Natur und Technik as one weekly hour with an Informatik focus in grades 6 and 7. The scientific-technological branch adds two hours of Informatik in grades 9 and 10, and in grade 11 every branch has two compulsory hours.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Computing in Bavarian schools, 2026/27', head: ['School', 'Grades', 'What the timetable gives'], rows: [
          ['Grundschule', '1 to 4', 'No computing subject'],
          ['Mittelschule', '5 to 10', 'Informatik, one lesson every week, compulsory'],
          ['Realschule', '5 to 10', 'Informationstechnologie, compulsory, 7 to 11 hours in total by subject group'],
          ['Gymnasium', '6 and 7', 'One weekly hour of Informatik inside Natur und Technik'],
          ['Gymnasium, scientific-technological branch', '9 and 10', 'Informatik, two hours a week'],
          ['Gymnasium, all branches', '11', 'Two compulsory hours of Informatik or a related subject']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik (GI), Bayern chapter of the 2026/27 monitor, read on 2 November 2026. The Bavarian Gymnasium is a nine-year route again, with grade 11 as the Einführungsphase and grades 12 and 13 as the Qualifikationsphase; the written Informatik Abitur is set centrally and is largely programming on paper.' },
        { kind: 'p', mt: true, html: 'Destatis counted 529,508 people in Nuremberg at the end of 2024, and its neighbours Fürth, with 132,036, and Erlangen, with 115,928, follow the same Bavarian rules. Families in Schwabach, Stein or Zirndorf do too. Whichever school your child ends up at, a few years of building and debugging at home mean that the first school lesson on algorithms feels familiar rather than strange.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the lessons in English or in German?',
      lede: 'English only, live. Most young children cope very well, for reasons that have more to do with the mentor than with the child.',
      body: [
        { kind: 'three', cells: [
          { h3: 'No German option', p: 'We teach in English and nothing else. Knowing that before a trial lesson saves everyone time, so we say it here, near the top.' },
          { h3: 'The mentor adjusts', p: 'Short sentences, a pointer on the shared screen, a step repeated with easier words. A child who replies in German is understood and offered the English phrase back.' },
          { h3: 'Words a child already hears', p: 'Much of the vocabulary is the vocabulary of games: start, jump, score, level, again. Children often know more of it than their parents expect.' }
        ] },
        { kind: 'p', mt: true, html: 'Our mentors teach from India over live video. Because India is hours ahead of Nuremberg, an afternoon here is evening there, which makes after-school lessons easy to arrange. Your child keeps one mentor for the whole course, so that person soon learns what keeps your child interested and when to slow down.' },
        { kind: 'p', html: 'For families who already live in English: the AGIS directory lists the Franconian International School in Erlangen, with 711 pupils and the IB Middle Years and Diploma programmes. We mention it only as background; we have no connection with any school.' }
      ]
    },
    {
      id: 'map',
      tint: 'tint',
      eyebrow: 'A real Nuremberg project',
      h2: 'Where are Nuremberg\'s public buildings? Repairing a broken map',
      lede: 'The city publishes a list of its own facilities, from libraries and pools to schools and offices, with a position for each one. The positions have lost their decimal points on the way. Older children put them back, using one thing they know for certain: where Nuremberg is.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file Städtische Einrichtungen has 401 entries with a name, an address, a homepage, opening hours and two coordinates. A coordinate should look like 11.0857 for the east position and 49.4529 for the north position.',
            'In the published file they look like 11.085.719.500.104: a dot after every three digits, as if a spreadsheet had treated the value as a big whole number. Python cannot read that as a number at all.'
          ],
          rightH3: 'The question',
          right: [
            'Can we rebuild every position, and which entries cannot be saved? We copy the name and the two coordinates into nuernberg_places.csv and leave the strange dots in.',
            'We also agree a box that any Nuremberg position must fall inside: between 10.9 and 11.4 degrees east and between 49.3 and 49.6 degrees north. The box is our own, chosen generously so that no real Nuremberg address falls outside it.'
          ] },
        { kind: 'code', label: 'Version 1: remove the dots and guess where the point goes', lang: 'Python', code: V1, note: 'It prints: <code>Places: 401</code> and <code>Longitude outside the box: 44</code>.' },
        { kind: 'p', mt: true, html: 'The first idea is to remove the dots and always put the decimal point in the same place, after the first two digits, which is what dividing by 10 to the power 12 does. It works for most rows, but 44 longitudes land outside the box. Looking at them shows why: some values were stored with fewer digits, so "1.106.680.388.669" becomes 1.1066 instead of 11.0668. The rule "always two digits before the point" was a guess, and the data broke it.' },
        { kind: 'code', label: 'Version 2: put the point where the value makes sense', lang: 'Python', code: V2, note: 'It prints: <code>Repaired: 396</code>, <code>Cannot be placed: 5</code> and <code>Furthest north: Städtische Friedhöfe Region Westfriedhof - Friedhof Großgründlach</code>.' },
        { kind: 'p', html: 'The second version tries every position for the decimal point and keeps the first one that lands inside the box. That repairs 396 of the 401 entries. The five that are left cannot be placed at all: every one of them carries the same east value, 45.112.561.028.337, and a north value of plain 0, which looks like a placeholder. Two are childcare centres whose names begin "Geplante Kita", still being planned. The program does not invent positions for them; it lists them, so a person can check.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'What happened to the 401 positions (our calculation)', head: ['Step', 'Entries'], rows: [
          ['Entries in the file', '401'],
          ['Longitude wrong with a fixed rule (Version 1)', '44'],
          ['Repaired by checking the range (Version 2)', '396'],
          ['Cannot be placed and need a person to check', '5']
        ] },
        { kind: 'source', html: 'Data: Stadt Nürnberg, Nürnberg: Städtische Einrichtungen (2025 file), published through open.bydata, licence CC BY 4.0, downloaded 2 November 2026. The repairs, the box and the counts are our own; the furthest north repaired entry is a cemetery in Großgründlach and the furthest south is the Bürgeramt Süd.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, with a number card.</strong> Write 1 2 5 0 on a card and ask: is this the price of an ice cream or of a bicycle? Where does the comma go? Knowing the world tells you.',
          '<strong>Ages 8 to 10, in Scratch.</strong> Store five numbers without their point and let a sprite move the point until each number falls between 10 and 12.',
          '<strong>Python, for 10 to 12 year olds.</strong> Start Version 1, inspect three of the 44 wrong values on paper, and only then attempt Version 2 on your own.',
          '<strong>Going further.</strong> With the repaired positions, find the facility closest to the Hauptmarkt. Before you calculate, decide whether one degree east and one degree north are the same distance on the ground.'
        ] }
      ]
    },
    {
      id: 'biber',
      eyebrow: 'A free contest',
      h2: 'Is the Informatik-Biber open to Nuremberg children?',
      lede: 'Yes, from grade 3, through the school. In 2026 the Biber weeks start on 9 November, the Monday after the Bavarian autumn holidays.',
      body: [
        { kind: 'two',
          leftH3: 'What children do',
          left: [
            'The Informatik-Biber is a free online puzzle quiz run by the Bundesweite Informatikwettbewerbe for grades 3 to 13, and no prior knowledge is needed. In 2025 more than 580,000 pupils from more than 3,224 schools took part, and 2026 is its 20th year.',
            'Primary pupils have nine puzzles and 30 minutes; grades 5 and 6 have twelve puzzles and 35 minutes. Nothing has to be programmed.'
          ],
          rightH3: 'When and how',
          right: [
            'The 2026 Biber weeks run from 9 to 20 November 2026. Schools register their pupils and run the quiz in a lesson, so the class teacher is the person to ask.',
            'Bavarian schools are on autumn holiday from 2 to 6 November 2026. The practice round, the Schnupper-Biber, has been open since 14 September 2026 and closes a few days before the contest, so most classes will already have tried it.'
          ] },
        { kind: 'p', mt: true, html: 'Biber puzzles are about order, hidden rules, routes and codes. We do not reuse the real tasks; our mentors write their own puzzles in a similar style, and a child who enjoys those will usually enjoy the Biber. We are not connected with BWINF or with any Nuremberg school.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When could my child have lessons in Nuremberg?',
      lede: 'Bavarian primary pupils are often home by early afternoon, so groups run from then until early evening, plus weekends. The examples show the same moment on the mentor\'s clock.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Nuremberg start times and India time', head: ['Start in Nuremberg', 'Mentor\'s clock, winter', 'Mentor\'s clock after 28 March 2027'], rows: [
          ['14:15', '18:45', '17:45'],
          ['16:20', '20:50', '19:50'],
          ['Saturday 11:30', '16:00', '15:00']
        ] },
        { kind: 'source', html: 'Examples only; there are no fixed batch times. The Einheitenzeitgesetz puts Germany on Central European Time, UTC+1, for the cold months and on summer time, UTC+2, from spring to autumn; this autumn\'s change was on 25 October 2026 and the spring change falls on 28 March 2027. India never changes from UTC+5:30, so the gap to Nuremberg is 4 hours 30 minutes now and 3 hours 30 minutes in summer.' },
        { kind: 'p', mt: true, html: 'Classes continue through the Bavarian school holidays, which the KMK table for 2026/27 lists as 2 to 6 November 2026, 24 December 2026 to 8 January 2027, 8 to 12 February 2027, 22 March to 2 April 2027, 18 to 28 May 2027 and 2 August to 13 September 2027. Families who travel simply miss a lesson or two.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From first blocks to fixing real data',
    lede: 'Five stages we use ourselves to group children and to tell parents what has changed.',
    table: { caption: 'Our coding stages for ages 6 to 12', head: ['Stage', 'About', 'Your child'], rows: [
      ['1. Steps', '6 to 7', 'Lines up blocks so a character moves and speaks'],
      ['2. Repeats', '7 to 8', 'Swaps a row of copied blocks for one loop'],
      ['3. Choices', '8 to 9', 'Programs a game where pressing keys changes the score'],
      ['4. Typing', '9 to 11', 'Types Python that stores values and repeats steps'],
      ['5. Checking', '10 to 12', 'Tests data against what must be true and fixes or flags it']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the map project. A child who asks "could this number really be right?" has learned the habit behind every good program.',
      'Our notes to you are about finished work and new understanding, never about time online.'
    ] },
    right: { h3: 'For children', ps: [
      'If you know roughly what an answer should be, use that to check the computer.',
      'When something cannot be fixed, say so and list it. Do not make up a value.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Nuremberg children',
    lede: 'Live, in English and with one regular mentor, in a class or privately.',
    bands: [
      { num: 'I', h3: 'Starting young', sub: 'Ages 5 to 10', courses: [
        { code: 'CNU / START / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Readiness at six', blurb: 'Order, patterns and logic before any typing.' },
        { code: 'CNU / START / 02', slug: 'scratch-programming-complete-course', title: 'Scratch, three months', blurb: 'A first finished game in one school term.' },
        { code: 'CNU / START / 03', slug: 'mental-maths-mastery-kids', title: 'Confident mental maths', blurb: 'Number sense for five to ten year olds.' }
      ] },
      { num: 'II', h3: 'Games', sub: 'Ages 7 to 14', courses: [
        { code: 'CNU / GAME / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft commands', blurb: 'From blocks to typed instructions.' },
        { code: 'CNU / GAME / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox scripting', blurb: 'Real Luau scripts for 8 to 14.' },
        { code: 'CNU / GAME / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot engine', blurb: 'A real game engine, step by step.' }
      ] },
      { num: 'III', h3: 'Making and understanding', sub: 'Ages 8 to 15', courses: [
        { code: 'CNU / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'Phone apps', blurb: 'Working apps built from blocks.' },
        { code: 'CNU / MAKE / 02', slug: 'ai-literacy-for-kids-course', title: 'How AI learns', blurb: 'Examples, patterns and limits, for 8 to 14.' },
        { code: 'CNU / MAKE / 03', slug: 'maths-through-coding', title: 'Maths in code', blurb: 'School maths tested with short programs.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'What a week of lessons looks like in Nuremberg',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Early afternoon', l: 'Right after a short Bavarian primary school day.' },
      { time: 'Weekends', l: 'Saturday or Sunday, rested and unhurried.' },
      { time: '1-on-1', l: 'A slot you agree directly with the mentor.' }
    ],
    cells: [
      { h3: 'Familiar face', p: 'The same mentor from the first lesson onwards.' },
      { h3: 'Simple English', p: 'Spoken slowly, shown on screen, repeated gladly.' },
      { h3: 'Hands on keys', p: 'Your child builds; the mentor coaches.' },
      { h3: 'Right group', p: 'Children are grouped by age and experience.' },
      { h3: 'Parent notes', p: 'Brief news on what was made and what is next.' },
      { h3: 'Class or private', p: 'Fifteen to twenty children, or one to one.' }
    ]
  },

  projectsH2: 'Built by our older learners',
  projectsLede: 'Many children who start in primary school go on to build ambitious things as teenagers. A few are shown below, and <a class="ag-inline-link" href="/student-labs">student labs</a> has more.',
  reviewsLede: 'Parents and students in their own words, as posted on Google.',

  fees: {
    h2: 'Fees for families in Nuremberg',
    lede: 'Fees are monthly and cover eight live lessons. We show them in euro, based on the European Central Bank\'s reference rate; the actual payment is taken in US dollars and your bank converts it, so the amount on your statement may differ by a little.',
    free: ['A free trial lesson', 'A puzzle and a first small program', 'No card asked for'],
    group: ['Fifteen to twenty children of similar age', 'The same mentor each week', 'Two lessons a week', 'Monthly, stop at any time'],
    one: ['Your child with one mentor', 'Your child\'s own projects', 'Times that suit your week']
  },

  faq: {
    eyebrow: 'Nuremberg parents ask',
    h2: 'Coding classes for kids in Nuremberg: your questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. We only teach in English, and always live. Mentors talk in plain sentences, demonstrate on the shared screen and get used to the way your child speaks and how fast they work, so beginners in English are not lost. Programming keywords are English in every country anyway.' },
      { q: 'Is there coding at Nuremberg primary schools?', a: 'There is no subject for it. Bavarian Grundschule covers grades 1 to 4 with no computing subject. Computing starts in grade 5 at the Mittelschule and Realschule, and in grades 6 and 7 at the Gymnasium, inside Natur und Technik.' },
      { q: 'How does computing differ between Bavarian school types?', a: 'A lot. The Mittelschule gives one Informatik lesson every week from grade 5 to grade 10. The Realschule teaches Informationstechnologie from grade 5 to grade 10, seven to eleven weekly hours in total depending on the subject group. The Gymnasium has one weekly hour inside Natur und Technik in grades 6 and 7, more in the scientific-technological branch, and two hours for everyone in grade 11.' },
      { q: 'What age can my child start at?', a: 'From 6. Young children use picture blocks, so no typing or fluent reading is needed. Many move to typed Python at about 9.' },
      { q: 'When are classes in Nuremberg time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Because Bavarian primary pupils are often home early, some Nuremberg families choose a start soon after 14:00.' },
      { q: 'When is the Informatik-Biber in 2026?', a: 'From 9 to 20 November 2026, starting the Monday after the Bavarian autumn holidays. It is free, open from grade 3, needs no prior knowledge and is run in school, so ask the class teacher whether the school is taking part.' },
      { q: 'Where are the mentors based?', a: 'In India. They teach live over video: a 14:15 lesson in Nuremberg is 18:45 for the mentor during the winter, and it is the same mentor each time.' },
      { q: 'How many children share a class?', a: 'Fifteen to twenty, of a similar age. Families who prefer private teaching book two weekly one-to-one sessions instead.' },
      { q: 'How are fees paid?', a: 'Each month. Prices here are converted to euro with the ECB reference rate, while your card is charged in US dollars that your bank converts, so expect a small difference on your statement. The trial lesson is free and needs no card.' },
      { q: 'What will my child make?', a: 'At first, block games and little cartoons. Later, Python programs, drawings with code and, from about 10, work with real data, such as repairing the positions in Nuremberg\'s list of public facilities.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Nuremberg, Fürth and Erlangen.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our pages for families across Germany.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'Our own Biber-style puzzles, in English.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'Bavaria next to the other fifteen Länder.' },
      { href: '/minecraft-coding-classes-germany', label: 'Minecraft coding in Germany', p: 'For children who love building worlds.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools suit which ages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One of our live lessons, described.' }
    ]
  },

  start: {
    h2: 'Book a free trial lesson',
    lede: 'In the trial your child solves a short puzzle and puts together a first program. The mentor watches how your child thinks and how much English is comfortable, then recommends a course and group.',
    readFirst: 'Before you book, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson and <a class="ag-inline-link" href="/courses">all courses</a> shows every syllabus.',
    note: 'Every class is taught live online in English by a mentor in India. For questions, a WhatsApp message (in English) reaches us quickest.',
    formNote: 'Free, and you are not committing to anything.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' },
        { href: '/minecraft-coding-classes-germany', label: 'Minecraft coding' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Know where the answer must be, then check'
  },

  personalityCss: `
.ag-root.ag-cnu .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-cnu .ag-capsule { border-left-width: 6px; border-radius: 1px; }
.ag-root.ag-cnu .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-cnu .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cnu .ag-code-head b { letter-spacing: 0.018em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27, Bayern page; Bundesweite Informatikwettbewerbe, Informatik-Biber 2026; KMK Ferien 2026/27; AGIS directory; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz; all read 2 and 3 November 2026. Stadt Nürnberg via open.bydata, Städtische Einrichtungen, CC BY 4.0.',
    localProject: 'Repairing Nuremberg\'s facility map: an original Python project on the city\'s 401-entry facilities list, whose coordinates are stored with a dot every three digits; a fixed decimal rule leaves 44 longitudes outside our own box (10.9 to 11.4 E, 49.3 to 49.6 N), a range-based repair fixes 396 and flags 5 that cannot be placed, and the furthest north is a cemetery in Großgründlach. Lesson family: use a value\'s known range to restore a lost decimal point, and list what still fails.',
    requiredMentions: ['nuernberg_places.csv', 'Longitude outside the box: 44', 'Repaired: 396', 'Cannot be placed: 5', 'Friedhof Großgründlach', '11.085.719.500.104', 'between seven and eleven weekly hours', 'Know where the answer must be, then check'],
    sources: [
      { claim: 'Bavaria: Grundschule grades 1 to 4; Mittelschule Informatik grades 5 to 10; Realschule Informationstechnologie; Gymnasium Natur und Technik grades 6 and 7, NTG grades 9 and 10, grade 11 for all; G9; central written Abitur on paper.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bayern' },
      { claim: 'Informatik-Biber 2026: dates, grades, tasks, participation in 2025.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Bavarian school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Franconian International School, Erlangen: 711 pupils, IB MYP and DP.', url: 'https://www.agis-schools.org/school/franconian-international-school' },
      { claim: 'Nürnberg facilities list, columns and CC BY 4.0 licence.', url: 'https://ckan.govdata.de/dataset/nurnberg-stadtische-einrichtungen' },
      { claim: 'Populations of Nürnberg, Fürth and Erlangen on 31 December 2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Why the coordinates lost their decimal points: the file does not say, so we only describe the pattern.',
      'Positions for the five unplaceable entries: not invented; listed for a person to check.',
      'Naming Nuremberg schools or the Franconian International School as a source of students: refused.',
      'German-language teaching, or any connection with the city, the Land or BWINF: none.'
    ]
  }
};
