'use strict';
// Coding classes for kids in Aachen (ag- city page, Germany cluster P6 row DE151, tier-2 shape coding-classes-for-kids =
// ages 6 to 12). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; euro shown, USD charged.
// Spine: a walk to the bottle bank. Distance is the idea that carries a child from counting squares on grid paper
// (age 6) to Scratch coordinates (age 8) to Pythagoras in Python (age 11), on Aachen's own glass-container map.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - KMK: Grundschule grades 1 to 4 outside Berlin and Brandenburg (1); no leaving exam at the end of Grundschule (28).
//  - GI Informatik-Monitor 2026/27, NRW page: "An allen allgemeinbildenden Schularten wird das Pflichtfach Informatik in
//    den Jahrgangsstufen 5 und 6 unterrichtet." (80).
//  - BWINF: Informatik-Biber free, grades 3 to 13, no prior knowledge (129, 130); 9 tasks in 30 minutes for primary
//    pupils (132); "Die Biberwochen 2026 finden vom 9. bis 20. November statt." (133); over 580,000 in 2025 (137).
//  - Känguru der Mathematik: 2027 contest on 8 April 2027 (183); online registration from 01.12.2026 to 31.01.2027 (184);
//    24 problems in 75 minutes for grades 3/4 and 5/6 (186).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025), NRW: Weihnachten 23.12. - 06.01., Ostern 22.03. - 03.04., Sommer
//    19.07. - 31.08. (275).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Aachen 262,670; Köln 1,024,621; Mönchengladbach 267,213.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Aachen, "Glascontainer Stadt Aachen", via Open.NRW / GovData
//    (https://ckan.govdata.de/dataset/glascontainer-stadt-aachenf0772, licence "Datenlizenz Deutschland Namensnennung 2.0"
//    on the GovData dataset page), CSV from geoserver.aachen.de abfallnavi:Glascontainer, downloaded 3 November 2026,
//    33,465 bytes, sha256 0b81b1749fc17186..., 190 rows, all standortart "Glascontainer"; column wkb_geometry holds
//    POINT (x y) in metres on the UTM grid. Start point: Stadt Aachen, "Lichtsignalanlagen (LSA) Stadt Aachen" (same
//    licence), knoten_nr K1005, name "Kaiserplatz", POINT (295242.6452494889... 5628893.908019679) (lsa.csv, 24,552 bytes,
//    240 rows). Raw copies in src-pages/coding-classes-for-kids-in-aachen-germany/.
//    Ortsteil counts (ours): Mitte 117, Brand 15, Laurensberg 15, Eilendorf 11, Haaren 6, Richterich 6.
// Our own calculations (scratchpad de/w/T2/run/aac/v1.py, v2.py, python3 -I, Python 3.14.8): v1 "Nearest glass container:
//  Rudolfstraße, Ecke Wenzelstraße in Mitte", "Straight-line distance: 228 metres"; v2 "Containers in the file: 190",
//  "Within 1 km of Kaiserplatz: 16". Five nearest: 228, 335, 460, 560, 586 m; 58 within 2 km; farthest 10,595 m
//  (Friesenrather Weg, Friesenrath).
// Lesson family: distance on a grid; east steps and north steps make a right-angled triangle.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'start_x, start_y = 295242.6, 5628893.9   # traffic light K1005, Kaiserplatz (metres)',
  '',
  'nearest = None',
  'with open("aachen_glass.csv", encoding="utf-8") as map_file:',
  '    for row in csv.DictReader(map_file):',
  '        point = row["wkb_geometry"].strip("POINT ()").split()',
  '        x, y = float(point[0]), float(point[1])',
  '        steps_east = x - start_x',
  '        steps_north = y - start_y',
  '        metres = (steps_east ** 2 + steps_north ** 2) ** 0.5',
  '        if nearest is None or metres < nearest[0]:',
  '            nearest = (metres, row["strasse"], row["ortsteil"])',
  '',
  'print("Nearest glass container:", nearest[1], "in", nearest[2])',
  'print("Straight-line distance:", round(nearest[0]), "metres")'
].join('\n');

const V2 = [
  'import csv',
  '',
  'start_x, start_y = 295242.6, 5628893.9',
  'close = 0',
  'with open("aachen_glass.csv", encoding="utf-8") as map_file:',
  '    rows = list(csv.DictReader(map_file))',
  'for row in rows:',
  '    x, y = [float(v) for v in row["wkb_geometry"].strip("POINT ()").split()]',
  '    if ((x - start_x) ** 2 + (y - start_y) ** 2) ** 0.5 <= 1000:',
  '        close += 1',
  'print("Containers in the file:", len(rows))',
  'print("Within 1 km of Kaiserplatz:", close)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Aachen: coding for kids' },
  slug: 'coding-classes-for-kids-in-aachen-germany',
  code: 'cka',
  accent: '#5E3B04',
  accentRationale: 'Coding classes for kids, Aachen: a dark Printen brown #5E3B04, after the spiced gingerbread the city is known for; contrast 8.10 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding classes for kids in Aachen',
  title: 'Coding Classes for Kids in Aachen: Live Online in English',
  description: 'Coding classes for kids in Aachen aged 6 to 12, live online in English: a plan for each age, Informatik in NRW from grade 5, and a bottle-bank map project.',
  ogDescription: 'Live online coding in English for Aachen children aged 6 to 12: what each age is ready for, how NRW schools add Informatik in grades 5 and 6, two contests for this school year, and a real project on Aachen\'s 190 glass containers.',
  twitterDescription: 'Coding for Aachen kids aged 6 to 12, live in English, with a project on the city\'s glass-container map.',
  pageName: 'Coding Classes for Kids in Aachen',
  webPageDescription: 'A guide for Aachen parents of children aged 6 to 12 to learning to code live online in English, using KMK, Gesellschaft für Informatik, BWINF and Känguru sources and an original distance project on Stadt Aachen\'s open glass-container data.',
  courseDescription: 'Live online coding classes in English for Aachen children aged 6 to 12: unplugged puzzles and Scratch first, typed Python from about 9, and small projects with real city data, taught by the same mentor each week in a group of 15 to 20 children or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Aachen',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#ages', label: 'By age' },
    { href: '#bottles', label: 'Map project' },
    { href: '#contests', label: 'Contests' }
  ],
  eyebrow: 'Aachen &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Aachen',
  lede: 'A six year old in Aachen can learn what a program is before they can spell "program". By eleven, the same child can work out with Python how far the nearest bottle bank is from Kaiserplatz. This page follows that road one age at a time: what children of 6 to 12 can really do, what NRW schools add from grade 5, which free contests fit this school year, and what a week of live lessons in English looks like for an Aachen family.',
  secondaryCta: { href: '#bottles', label: 'See the map project' },
  wa: 'Hello Modern Age Coders, we live in Aachen and our child would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; the same friendly mentor each week, in English',
  spec: [
    ['Ages', '6 to 12, in age groups'],
    ['First tools', 'Puzzles, Scratch, then Python'],
    ['Class size', '15 to 20 children, or one to one'],
    ['Aachen times', 'After school or weekend mornings'],
    ['Mentors', 'Based in India, teaching in English'],
    ['Trial', 'A free first class, no card']
  ],
  capsuleQ: 'For Aachen parents',
  capsule: 'Modern Age Coders teaches coding to Aachen children aged 6 to 12 in live online classes in English. Younger children solve puzzles and build Scratch games; from about 9 they type real Python and use real data, such as the city\'s own map of glass containers. One regular mentor adjusts the speed and the English to suit your child, in a group of 15 to 20 children of a similar age or one to one, after school or on weekend mornings.',

  picks: {
    eyebrow: 'First courses for Aachen children',
    h2: 'Where should a child in Aachen start?',
    lede: 'Most families pick one of these three, depending on the child\'s age and how much they enjoy puzzles.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'CKA / 01', title: 'Problem Solving for Kids', note: 'From about seven. Logic puzzles, patterns and step-by-step plans, the thinking every later course needs and the kind of puzzle the Informatik-Biber asks.' },
      { course: 'scratch-programming-complete-course', code: 'CKA / 02', title: 'Scratch Coding for Kids', note: 'For children from 6, roughly three to four months. Snap-together blocks, moving sprites and a finished game of their own by the end.' },
      { course: 'python-ai-kids-masterclass', code: 'CKA / 03', title: 'Python and AI for Kids', note: 'For nine to twelve year olds, roughly eight to ten months. Typed Python, drawing with code, games, then small projects with data like the bottle-bank map below.' }
    ]
  },

  sections: [
    {
      id: 'ages',
      eyebrow: 'Age by age',
      h2: 'What can a child aged 6 to 12 learn in coding?',
      lede: 'More than most parents expect, as long as each age gets the right tool. Here is how our mentors plan it.',
      body: [
        { kind: 'table', numCols: [], caption: 'What we teach at each age (our plan)', head: ['Age', 'Main tool', 'A typical first project', 'What it trains'], rows: [
          ['6 to 7', 'Unplugged puzzles, ScratchJr-style blocks', 'Guide a robot across a grid of squares', 'Order, direction, counting steps'],
          ['7 to 8', 'Scratch', 'A cat that walks to a target and speaks', 'Events, loops, x and y on the stage'],
          ['8 to 10', 'Scratch with variables and lists', 'A game that keeps score and gets faster', 'Variables, conditions, testing'],
          ['9 to 12', 'Typed Python', 'A quiz, a turtle drawing, then a data file', 'Precise syntax, reading errors'],
          ['11 to 12', 'Python with real data', 'Find the nearest bottle bank in Aachen', 'Coordinates, distance, checking answers']
        ] },
        { kind: 'source', html: 'This plan is ours. Mentors move a child up or down by what the child can do, not by birthday.' },
        { kind: 'two', mt: true,
          leftH3: 'Ages 6 to 8: hands and stories',
          left: [
            'Young children learn sequences with their bodies first. In class they direct the mentor, or a sprite, one square at a time, "two steps right, one step up", and discover that order matters. Short lessons, lots of praise, no long reading.',
            'By eight, most children can make a Scratch character walk to a point on the stage, which is already the first idea of a coordinate.'
          ],
          rightH3: 'Ages 9 to 12: typing and data',
          right: [
            'Around nine, typing stops being a barrier and Python becomes fun. Children learn that the computer is strict about spelling and that an error message is a clue, not a telling-off.',
            'By eleven or twelve, they can open a real file from Stadt Aachen and answer a real question with it. That moment, when code answers something about their own town, is what keeps children coding.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Aachen schools',
      h2: 'When do children in Aachen meet Informatik at school?',
      lede: 'In NRW, at the start of secondary school. Before that, at primary school, coding is not a subject of its own.',
      body: [
        { kind: 'p', html: 'Aachen children, like children in most of Germany, attend Grundschule from grade 1 to grade 4, according to the Kultusministerkonferenz, and there is no leaving exam at the end of it. They then move to a secondary school. There, the Gesellschaft für Informatik notes in its Informatik-Monitor 2026/27, every general school type in Nordrhein-Westfalen teaches Informatik as a compulsory subject in grades 5 and 6.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik in an Aachen school career', head: ['Grades', 'School stage', 'Computing at school'], rows: [
          ['1 to 4', 'Grundschule', 'No separate Informatik subject'],
          ['5 and 6', 'Any secondary school in NRW', 'Informatik, compulsory for every pupil'],
          ['From 7', 'Secondary school', 'Depends on the school and the pupil\'s choices']
        ] },
        { kind: 'source', html: 'Sources: Kultusministerkonferenz, Primarbereich; Gesellschaft für Informatik, Informatik-Monitor 2026/27, Nordrhein-Westfalen page, read 2 November 2026. We are not connected with the KMK, the Land or any Aachen school.' },
        { kind: 'p', mt: true, html: 'That gives Aachen families a clear window. Between about 6 and 10, a child who enjoys puzzles has four primary years in which coding is not on the timetable. A child who uses those years for Scratch and a little Python starts grade 5 already comfortable with loops and conditions, and Informatik becomes a subject they look forward to rather than one they catch up in. Our classes sit alongside school and never replace it.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Live, in English',
      h2: 'Can my child follow a coding class in English?',
      lede: 'Almost always yes. Our classes are only ever taught in English, so the mentors are practised at making that easy.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Only English, no German', p: 'We say it early because it matters: our mentors, based in India, teach every class in English. There is no German-language option. For Aachen families near the Belgian and Dutch borders, English is often the language the children share anyway.' },
          { h3: 'Matched to the child', p: 'A mentor speaks slowly with a six year old and faster with a confident eleven year old, shows rather than tells, and gets used to each child\'s accent. Children who mix in a German word are helped, never corrected sharply.' },
          { h3: 'Screens do half the talking', p: 'In Scratch and Python, much of a lesson is pointing at a block or a line and trying it. A child with simple school English can follow, and their English grows with the coding.' }
        ] }
      ]
    },
    {
      id: 'bottles',
      tint: 'tint',
      eyebrow: 'A real Aachen project',
      h2: 'How far is the nearest bottle bank from Kaiserplatz?',
      lede: 'Stadt Aachen publishes the location of every public glass container as open data that anyone may reuse. In our classes the eleven and twelve year olds turn it into a lesson on one of the oldest ideas in mathematics, and younger children play the same game on paper.',
      body: [
        { kind: 'two',
          leftH3: 'The map in the file',
          left: [
            'The city\'s file has 190 glass containers. Each row has a street, an Ortsteil and a position in metres east and north on the map grid. Mitte has 117 of them; Brand and Laurensberg have 15 each, Eilendorf 11.',
            'For a starting point we use another file from the same city: the list of traffic lights, where the junction numbered K1005 is called simply "Kaiserplatz".'
          ],
          rightH3: 'The idea',
          right: [
            'To get from Kaiserplatz to a container you go some metres east and some metres north. Those two moves are the short sides of a right-angled triangle, and the straight line between the two points is the long side.',
            'Square the east steps, square the north steps, add them, take the square root. Children who have never heard the name Pythagoras use it happily once they have drawn it.'
          ] },
        { kind: 'code', label: 'Version 1: find the nearest container', lang: 'Python', code: V1, note: 'It prints: <code>Nearest glass container: Rudolfstraße, Ecke Wenzelstraße in Mitte</code> and <code>Straight-line distance: 228 metres</code>.' },
        { kind: 'p', mt: true, html: 'The nearest of the 190 is at Rudolfstraße, on the corner of Wenzelstraße, 228 metres from the Kaiserplatz junction as the crow flies. The next four are 335, 460, 560 and 586 metres away. Children then ask the obvious question: is 228 metres the walk? It is not. Streets bend and crossings take time, so a real walk is longer. A straight-line answer is a lower limit, and saying so is part of the answer.' },
        { kind: 'code', label: 'Version 2: how many are close?', lang: 'Python', code: V2, note: 'It prints: <code>Containers in the file: 190</code> and <code>Within 1 km of Kaiserplatz: 16</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Glass containers by distance from Kaiserplatz, straight line (our calculation)', head: ['Distance', 'Containers'], rows: [
          ['Within 1 km', '16'],
          ['Within 2 km', '58'],
          ['Farthest in the file', '10,595 m, Friesenrather Weg in Friesenrath']
        ] },
        { kind: 'source', html: 'Data: Stadt Aachen, Glascontainer Stadt Aachen and Lichtsignalanlagen (LSA) Stadt Aachen, via Open.NRW and GovData, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 3 November 2026. Distances are ours, measured in a straight line on the UTM map grid from junction K1005, Kaiserplatz.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 7, grid paper.</strong> Put a star on one square and a bottle on another. Count the squares right and the squares up. Who can find the shortest path along the lines?',
          '<strong>Ages 7 to 9, Scratch.</strong> Place a sprite at x 0, y 0 and a bottle at x 120, y 90. Glide there in two moves, then in one. Which looks shorter? Use the "distance to" block to check: it says 150.',
          '<strong>Python, from about 10.</strong> Type in Version 1 yourself, then change the start to your own school\'s nearest junction from the traffic-light file.',
          '<strong>Challenge.</strong> Which Ortsteil has the most containers for its size? Before you answer, write down what extra data you would need.'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Two free contests',
      h2: 'Which coding and maths contests can an Aachen child try this year?',
      lede: 'Two big school contests suit children of this age, and neither needs any coding knowledge. Both are entered through the school.',
      body: [
        { kind: 'table', numCols: [], caption: 'Two contests for children aged 8 to 12, school year 2026 to 2027', head: ['Contest', 'Organiser', 'When', 'For children'], rows: [
          ['Informatik-Biber', 'Bundesweite Informatikwettbewerbe', '9 to 20 November 2026', 'From grade 3: 9 tasks in 30 minutes'],
          ['Känguru der Mathematik', 'The Känguru organisers, mathe-kaenguru.de', '8 April 2027; school registration 1 December 2026 to 31 January 2027', 'Grades 3 to 6: 24 problems in 75 minutes']
        ] },
        { kind: 'source', html: 'Sources: bwinf.de, Informatik-Biber 2026 pages; mathe-kaenguru.de, read 2 November 2026. The Biber had more than 580,000 participants in 2025. We are not connected with either organiser.' },
        { kind: 'p', mt: true, html: 'The Biber is a puzzle quiz about hidden rules, orders and shortest paths, so the bottle-bank project is good practice in spirit. The Känguru is a multiple-choice maths contest. The class teacher will know whether your child\'s school is registered. We never copy either organiser\'s problems; the practice puzzles in our lessons are written by our mentors and marked as ours.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Times for Aachen',
      h2: 'What time are the classes in Aachen?',
      lede: 'Mentors teach from India, which is ahead of Aachen, so an Aachen afternoon is their evening. The rows below only illustrate the gap.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Aachen class times and the time in India', head: ['In Aachen', 'In India until 28 March 2027', 'In India from 28 March 2027'], rows: [
          ['15:15', '19:45', '18:45'],
          ['16:15', '20:45', '19:45'],
          ['Sunday 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'Germany uses MEZ (UTC+1) in winter and MESZ (UTC+2) in summer, by the Einheitenzeitgesetz; the 2026 change back was on 25 October, and the next change forward is on 28 March 2027. India is on UTC+5:30 all year, a gap of four and a half hours in winter and three and a half in summer. Example rows only, not fixed batches.' },
        { kind: 'p', mt: true, html: 'NRW\'s Christmas holidays run from 23 December 2026 to 6 January 2027 and the summer holidays from 19 July to 31 August 2027, according to the KMK table. Classes continue through holidays, and families who travel simply pause and pick up again.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Small steps',
    h2: 'How will I know my child is making progress?',
    lede: 'We report against these milestones of our own, in plain words, with something your child built.',
    table: { caption: 'Milestones for ages 6 to 12 (ours)', head: ['Milestone', 'Usual age', 'Your child can'], rows: [
      ['Steps', '6 to 7', 'Give exact instructions in the right order'],
      ['Repeat', '7 to 8', 'Use a loop instead of copying a block ten times'],
      ['Remember', '8 to 10', 'Store a score in a variable and change it'],
      ['Type', '9 to 11', 'Write a short Python program that runs first time, or nearly'],
      ['Measure', '10 to 12', 'Work out a distance from two positions and say what it leaves out']
    ] },
    left: { h3: 'For parents', ps: [
      'The Measure milestone is the bottle-bank project. A child who can say "that is a straight line, the walk is longer" has learned something about every map and every number.',
      'Ask your child to show you their project at the end of a month. Explaining it is half the learning.'
    ] },
    right: { h3: 'For children', ps: [
      'Two steps east and two steps north is not four steps away. Draw it and see.',
      'If your program says the bottle bank is 0 metres away, check where you started.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Aachen children',
    lede: 'Every one is live and in English, with a mentor your child will get to know by name.',
    bands: [
      { num: 'I', h3: 'Blocks and games', sub: 'Ages 6 to 12', courses: [
        { code: 'CKA / PLAY / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'One long journey, first blocks to first apps.' },
        { code: 'CKA / PLAY / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Mods and commands in a world they love.' },
        { code: 'CKA / PLAY / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Scripted obstacle courses and games in Luau.' }
      ] },
      { num: 'II', h3: 'Thinking with numbers', sub: 'Ages 8 to 15', courses: [
        { code: 'CKA / NUM / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Fractions, angles and patterns tested with code.' },
        { code: 'CKA / NUM / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What an AI guesses and why it can be wrong.' },
        { code: 'CKA / NUM / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Olympiad and Känguru training', blurb: 'Contest-style maths with our own problems.' }
      ] },
      { num: 'III', h3: 'Making things', sub: 'Ages 8 to 12', courses: [
        { code: 'CKA / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'A working phone app, built from blocks.' },
        { code: 'CKA / MAKE / 02', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'Pages, pictures and buttons they designed.' },
        { code: 'CKA / MAKE / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Describing a game, then building it in Scratch.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Inside a week',
    h2: 'How do the live classes work for an Aachen family?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Aachen afternoons from about 15:00.' },
      { time: 'Weekend', l: 'Saturday or Sunday mornings for younger children.' },
      { time: 'Private', l: 'One to one at a slot you agree.' }
    ],
    cells: [
      { h3: 'Two classes weekly', p: 'About an hour each, never a lecture.' },
      { h3: 'Known mentor', p: 'The same face and voice every week.' },
      { h3: 'Age groups', p: 'Six year olds learn with six year olds.' },
      { h3: 'Child at the controls', p: 'Your child moves the blocks and types.' },
      { h3: 'Monthly note', p: 'What was made and what comes next.' },
      { h3: 'Pause in holidays', p: 'Travel, then carry on where you stopped.' }
    ]
  },

  projectsH2: 'Projects by our older students',
  projectsLede: 'Children who start at 7 or 8 build real things a few years on. Here are some by our students; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'What parents and students wrote about us on Google, unedited.',

  fees: {
    h2: 'Fees for Aachen families',
    lede: 'One monthly fee covers eight live classes. You see the fee in euro, calculated with the European Central Bank reference rate; the card is charged in US dollars, so your bank converts it and your statement can show a few cents more or less.',
    free: ['A free first class', 'A puzzle and a first Scratch program', 'No card details needed'],
    group: ['15 to 20 children of a similar age', 'The same mentor each week', 'Two classes a week', 'Pay monthly, stop when you like'],
    one: ['Your child and one mentor', 'Projects chosen around your child', 'Slots that fit your family']
  },

  faq: {
    eyebrow: 'Aachen parents ask',
    h2: 'Coding classes for kids in Aachen: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach only in English, and every class is live with a mentor based in India. Mentors keep their English simple for young children, adjust to each child\'s pace and accent, and show things on screen, so children with basic school English cope well.' },
      { q: 'At what age can my child start?', a: 'At 6. The youngest children begin with puzzles and very simple blocks, in short and playful lessons. Most move to full Scratch at 7 or 8 and to typed Python at about 9.' },
      { q: 'Is coding taught at Aachen primary schools?', a: 'Not as a separate subject. Grundschule runs from grade 1 to 4, and in NRW Informatik becomes a compulsory subject for every pupil in grades 5 and 6 at secondary school, according to the Gesellschaft für Informatik.' },
      { q: 'When are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In Aachen most children come after school, from about 15:00, or on a weekend morning.' },
      { q: 'What does my child need at home?', a: 'A laptop or desktop computer with a microphone and a reliable internet connection. A tablet is enough for the first Scratch weeks. Everything we use is free and runs in the browser or installs in minutes.' },
      { q: 'Can my child enter the Informatik-Biber?', a: 'Yes, if the school registers. The Biber 2026 runs from 9 to 20 November 2026, is free and needs no prior knowledge; pupils from grade 3 upward take part during a school lesson. Ask the class teacher.' },
      { q: 'How many children are in a class?', a: 'Group classes have 15 to 20 children of a similar age and stage. If your child would rather work alone with a mentor, the one-to-one plan gives two private classes each week.' },
      { q: 'Which currency do we pay in?', a: 'The card is charged in US dollars. On this page the monthly fee is shown in euro using the ECB reference rate so you can see what to expect, and your bank does the conversion. The first class is free.' },
      { q: 'What is the bottle-bank project?', a: 'An original project of ours on Stadt Aachen\'s open data. Children find the glass container nearest to the Kaiserplatz traffic light, 228 metres away in a straight line, using east and north steps and Pythagoras, and learn why the real walk is longer.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More reading for Aachen families.',
    items: [
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in NRW', p: 'Our guide for the whole Land.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany', p: 'The national picture for ages 6 to 12.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'Our own Biber-style puzzles.' },
      { href: '/kangaroo-math-germany-practice', label: 'Känguru practice', p: 'Preparing for the maths contest.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids', p: 'Where most children begin.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools suit which ages.' }
    ]
  },

  start: {
    h2: 'Book a free first class for your child',
    lede: 'The trial is a short puzzle and a first program, with you nearby if your child is young. Afterwards the mentor tells you which age group and course would suit, and why.',
    readFirst: 'If you would like to know more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse the <a class="ag-inline-link" href="/courses">full course list</a>.',
    note: 'Live video classes, taught in English by India-based mentors. Message us on WhatsApp for the quickest answer.',
    formNote: 'No card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/game-coding-classes-for-kids-germany', label: 'Game coding for kids' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'North Rhine-Westphalia' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'The straight line is the shortest guess'
  },

  personalityCss: `
.ag-root.ag-cka .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-cka .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-cka .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-cka .ag-table caption { text-align: left; }
.ag-root.ag-cka .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); Bundesweite Informatikwettbewerbe, Informatik-Biber 2026; Känguru der Mathematik 2027; KMK Ferien 2026/2027; Einheitenzeitgesetz; Destatis GV-ISys 31.12.2024; Stadt Aachen open data (Glascontainer, Lichtsignalanlagen), Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'The bottle bank: an original distance project on Stadt Aachen\'s 190 glass containers, measured from traffic-light junction K1005 at Kaiserplatz with east and north steps and Pythagoras; nearest is Rudolfstraße, Ecke Wenzelstraße at 228 m, 16 lie within 1 km. Grid-paper and Scratch versions for younger children. Lesson family: distance on a grid.',
    requiredMentions: ['aachen_glass.csv', 'Rudolfstraße, Ecke Wenzelstraße in Mitte', 'Straight-line distance: 228 metres', 'Within 1 km of Kaiserplatz: 16', 'K1005', 'Containers in the file: 190', 'Friesenrather Weg', 'The straight line is the shortest guess'],
    sources: [
      { claim: 'Grundschule grades 1 to 4.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'NRW compulsory Informatik in grades 5 and 6.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Informatik-Biber 2026 dates and format.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Känguru 2027 date and registration.', url: 'https://www.mathe-kaenguru.de/' },
      { claim: 'Aachen glass containers and licence.', url: 'https://ckan.govdata.de/dataset/glascontainer-stadt-aachenf0772' }
    ],
    rejectedClaims: [
      'Walking distances: the data give positions only, so we give straight lines and say the walk is longer.',
      'Naming Aachen schools as sources of students: refused.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with Stadt Aachen, BWINF, the Känguru organisers or a school: none.'
    ]
  }
};
