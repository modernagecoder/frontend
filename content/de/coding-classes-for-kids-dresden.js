'use strict';
// Coding classes for kids in Dresden (ag- city door, Germany cluster P5 row DE134, alloc code cdr, accent #005730).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent.
// Spine: Saxony is one of the strongest Länder for school Informatik: one compulsory hour a week in grades 7 to 10 at
// Oberschule and Gymnasium, Technik/Computer in grades 5 and 6, and about half of Oberstufe pupils choosing Informatik;
// its written Leistungskurs Abitur even has a practical part on a computer, with Python 3 and Java documentation allowed.
// So the page is about the primary years before that strong start (ages 6 to 10), the Pangea maths contest, and a
// Dresden data project on distances between playgrounds.
// Sources (read raw; quotes in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched 2 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Sachsen page (infmon-sachsen/135681b2.txt; facts 52, 85, 86): "Sowohl an der
//    Oberschule als auch am Gymnasium wird das Fach Informatik jeweils einstündig in den Jahrgangsstufen 7 bis 10
//    unterrichtet."; Technik/Computer in grades 5 and 6, "anteilig Kompetenzen aus den Bereichen der Medienbildung sowie aus
//    der informatischen Bildung"; Lehrplan Informatik 2022 for Oberschule 7 to 10 and Gymnasium 7 to 12; Q-phase
//    Grundkurs "zweistündig"; "Die Belegung von Informatik auf erhöhtem Anforderungsniveau (Leistungskursfach) ist an
//    ausgewählten Gymnasien möglich."; LK written tasks "zentral erstellt", part B "eine oder mehrere Aufgaben mit
//    praktischem Anteil", aids include "Dokumentationen für SQL und Python 3 und Java sowie ein für die Prüfung
//    zugelassener Computer"; Grundschule grades 1 to 4; Gymnasium G8 (10 Einführungsphase, 11 and 12 Q-phase).
//  - GI national page (facts 91, 98): Sachsen among the Länder meeting "die kurzfristige Empfehlung von 4 Pflichtstunden";
//    "Vorreiter sind Sachsen und Mecklenburg-Vorpommern: Hier belegt etwa die Hälfte der Lernenden das Fach Informatik."
//  - Pangea (facts 189 to 192): "ANMELDEBEGINN: 01. Oktober 2026 ANMELDESCHLUSS: 17.02.2027 VORRUNDE: 23.02.-03.03.2027";
//    Zwischenrunde 21 to 22 April 2027; final Saturday 12 June 2027; 15 tasks (grades 3 and 4) or 20, in 45 to 60
//    minutes; top 500 per grade reach the Zwischenrunde.
//  - AGIS directory (fact 227): Dresden International School lists IB PYP, MYP and DP.
//  - KMK FER2026_27.pdf (kmk-fer2627/fe303dbf.txt lines 33 and 34): "Sachsen (1) 12.10. - 24.10. 23.12. - 02.01. 08.02. -
//    19.02. 26.03. - 02.04. 07.05." / "15.05. - 18.05. 10.07. - 20.08."
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Dresden 564,904; Sachsen 4,042,422.
//  - Time: Einheitenzeitgesetz; summer time ended 25 Oct 2026, starts 28 Mar 2027; India UTC+5:30.
//  - Data: Landeshauptstadt Dresden, "Spielplätze", via Freistaat Sachsen / GovData
//    https://ckan.govdata.de/dataset/spielplatzea5521, WFS GetFeature typeNames=cls:L229 on kommisdd.dresden.de, licence
//    Datenlizenz Deutschland Namensnennung 2.0. GML with 275 members, coordinates EPSG 25833 (UTM zone 33, metres),
//    timeStamp 2026-11-02T03:34:01+01:00; sha256 aa205929...cbcae6848. Downloaded 2 Nov 2026.
// Our own calculations (scratchpad de/w/C5/dd/v1.py, v2.py; python3 -I, run in the data folder):
//  v1: "Places: 275", "Loneliest: Pirnaer Straße/Kirchberg (Eschdorf) - Spielplatz 1850 m".
//  v1+v2 adds "Pairs checked: 37675", "Closest pair: 21 m", "Pennricher Straße 14 + Pennricher Straße 8 - 12".
//  Nearest-neighbour distances: under 100 m 32; 100 to 249 m 72; 250 to 499 m 98; 500 to 999 m 59; 1,000 m or more 14;
//  middle (median) 328 m. Next loneliest: Albertpark - Waldspielplatz (Neustadt) 1,574 m; Fünf-Brüder-Weg (Oberwartha)
//  1,547 m. sp_art: Spielplatz 233, Ballspielplatz 18, Bolzplatz 12, Skaterbahn 9, Biker 3.
// Lesson family: distance on a map grid with Pythagoras, and the nested loop that compares every pair.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import math',
  'import xml.etree.ElementTree as ET',
  '',
  'NS = {"wfs": "http://www.opengis.net/wfs/2.0", "c": "http://www.cardogis.com/kommisdd"}',
  'places = []',
  'for member in ET.parse("spielplaetze_L229.gml").getroot().findall("wfs:member", NS):',
  '    item = member[0]',
  '    places.append((item.find("c:einrichtung", NS).text,',
  '                   float(item.find("c:x", NS).text),     # metres east',
  '                   float(item.find("c:y", NS).text)))    # metres north',
  '',
  'def nearest(here):',
  '    gaps = [math.dist(here[1:], there[1:]) for there in places if there != here]',
  '    return min(gaps)',
  '',
  'loneliest = max(places, key=nearest)',
  'print("Places:", len(places))',
  'print("Loneliest:", loneliest[0], round(nearest(loneliest)), "m")'
].join('\n');

const V2 = [
  'pairs = 0',
  'closest = None',
  'for i in range(len(places)):',
  '    for j in range(i + 1, len(places)):',
  '        pairs += 1',
  '        d = math.dist(places[i][1:], places[j][1:])',
  '        if closest is None or d < closest[0]:',
  '            closest = (d, places[i][0], places[j][0])',
  '',
  'print("Pairs checked:", pairs)',
  'print("Closest pair:", round(closest[0]), "m")',
  'print(closest[1], "+", closest[2])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Dresden: coding for kids' },
  slug: 'coding-classes-for-kids-dresden',
  code: 'cdr',
  accent: '#005730',
  accentRationale: 'Coding classes for kids, Dresden: a deep forest green #005730 for the Dresdner Heide and the Elbe meadows, where the loneliest playgrounds in the project sit; contrast 7.08 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-saxony', name: 'Saxony' }],
  routeLabel: 'Coding classes for kids in Dresden',
  title: 'Coding Classes for Kids in Dresden: Live Online, in English',
  description: 'Coding classes for kids in Dresden aged 6 to 12, live online in English: Saxony\'s Informatik from grade 7, the Pangea maths contest and a playground map project.',
  ogDescription: 'Live online coding in English for Dresden children aged 6 to 12: Saxony teaches Informatik every week from grade 7, so the primary years are the open window; plus the Pangea contest 2027 and a Python project measuring distances between Dresden playgrounds.',
  twitterDescription: 'Coding for Dresden kids, live in English: Saxony\'s Informatik, Pangea 2027 and a playground distance project.',
  pageName: 'Coding Classes for Kids in Dresden',
  webPageDescription: 'A guide for Dresden parents of children aged 6 to 12: what Saxon schools teach in Informatik and when, from the GI Informatik-Monitor 2026/27, the Pangea maths contest dates for 2027, and an original Python project on the Landeshauptstadt Dresden playground data.',
  courseDescription: 'Live online coding classes in English for Dresden children aged 6 to 12: thinking puzzles and Scratch first, then typed Python with maths and data, in groups of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Dresden',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#saxony', label: 'Saxony' },
    { href: '#distances', label: 'Distances' },
    { href: '#pangea', label: 'Pangea' },
    { href: '#dd-times', label: 'Times' }
  ],
  eyebrow: 'Dresden &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Dresden',
  lede: 'Saxony takes school Informatik more seriously than most of Germany. Every pupil has an Informatik lesson each week from grade 7 to grade 10, and in the Oberstufe about half of all learners keep the subject. The quiet years are the early ones: grades 1 to 6 have no Informatik subject of their own. This page explains the Saxon path, how our live classes in English use those early years well, a maths contest with dates for 2027, and a project that measures how far apart Dresden\'s playgrounds are.',
  secondaryCta: { href: '#distances', label: 'See the distance project' },
  wa: 'Hello Modern Age Coders, our child lives in Dresden and would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ learners in many countries &middot; English lessons at Dresden times',
  spec: [
    ['Ages', '6 to 12, by age group'],
    ['Opening topics', 'Puzzles and Scratch'],
    ['Then', 'Python with maths and data'],
    ['Size', 'Fifteen to twenty, or private'],
    ['Teachers', 'Mentors in India, live'],
    ['First class', 'Free of charge']
  ],
  capsuleQ: 'Summary',
  capsule: 'For Dresden children of 6 to 12, Modern Age Coders runs live online coding classes in English: puzzles and Scratch at the start, then Python typed by the child, with maths and small AI projects in our Python and AI for Kids course. A mentor fits the lesson to your child\'s pace and accent, in a group of fifteen to twenty or one to one. It prepares the ground for the Informatik that Saxony teaches every week from grade 7.',

  picks: {
    eyebrow: 'Recommended start',
    h2: 'Three courses for Dresden children aged 6 to 12',
    lede: 'A problem-solving course that suits the youngest, the Python course for children from about nine, and a course that ties coding to school maths.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'CDR / 01', title: 'Problem Solving and Computational Thinking', note: 'For primary-age beginners. Patterns, step-by-step plans and logic games, with and without a computer, before any typing is needed.' },
      { course: 'python-ai-kids-masterclass', code: 'CDR / 02', title: 'Python and AI for Kids', note: 'Real Python for children of about nine and up, from turtle drawings and games to working with data files like the Dresden playground map.' },
      { course: 'maths-through-coding', code: 'CDR / 03', title: 'Maths Through Coding', note: 'Ages 10 to 15. Number patterns, geometry and graphs explored in Python; Pythagoras in the project below is a typical topic.' }
    ]
  },

  sections: [
    {
      id: 'saxony',
      eyebrow: 'School in Saxony',
      h2: 'How much Informatik do Dresden schools teach?',
      lede: 'More than in most Länder. The Gesellschaft für Informatik lists Saxony among the four Länder that already meet the recommendation of four compulsory Informatik hours, and the subject is set out in a 2022 curriculum.',
      body: [
        { kind: 'two',
          leftH3: 'Grades 1 to 6',
          left: [
            'Dresden children attend Grundschule for grades 1 to 4 and then move to an Oberschule or a Gymnasium. In grades 5 and 6 there is no Informatik subject yet. Instead, the interdisciplinary subject Technik/Computer includes, in the words of the GI Informatik-Monitor 2026/27, a share of skills from media education and from informatics education.',
            'For children aged 6 to about 11, then, computing at school is a side topic at most.'
          ],
          rightH3: 'Grades 7 to 12',
          right: [
            'From grade 7 the picture changes. The monitor records that "sowohl an der Oberschule als auch am Gymnasium" Informatik is taught for one hour a week in grades 7 to 10. In the Oberstufe, Informatik can be taken as a two-hour Grundkurs, and selected Gymnasien also offer it as a Leistungskurs.',
            'The GI names Saxony and Mecklenburg-Vorpommern as the leaders in the Oberstufe, where about half of all learners take Informatik.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik in Saxon schools, 2026/27', head: ['Grades', 'School', 'Informatik'], rows: [
          ['1 to 4', 'Grundschule', 'No subject of its own'],
          ['5 and 6', 'Oberschule, Gymnasium', 'Part of Technik/Computer'],
          ['7 to 10', 'Oberschule, Gymnasium', 'Compulsory, one hour a week'],
          ['11 and 12', 'Gymnasium (G8)', 'Grundkurs two hours; Leistungskurs at selected schools'],
          ['Abitur', 'Leistungskurs', 'Written exam set centrally, with a practical part on a computer']
        ] },
        { kind: 'source', html: 'Source: GI Informatik-Monitor 2026/27, national comparison and Sachsen page, read 2 November 2026. For the written Leistungskurs Abitur the permitted aids include documentation for SQL, Python 3 and Java and a computer approved for the exam. The Gymnasium Oberstufe in Saxony follows the eight-year route, with grade 10 as the Einführungsphase.' },
        { kind: 'p', mt: true, html: 'Saxony is one of the few Länder where a pupil can write Python on a computer in the Abitur itself. For a Dresden family that is a reason to start early, not late: the school will build on whatever a child brings into grade 7, and a child who already thinks in steps, loops and conditions gets far more out of one weekly lesson than a child meeting all of it for the first time.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'The teaching language',
      h2: 'Is it a problem if my child\'s English is still basic?',
      lede: 'Usually not. Our classes are live and in English only, and they are built for children who are still learning the language.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Only English', p: 'There are no German-language groups, and we say it plainly before the first class. Dresden has international schools, such as Dresden International School, which lists the IB programmes in the AGIS directory; for children at German schools the English is welcome extra practice.' },
          { h3: 'Pace and accent fitted', p: 'Mentors talk at the child\'s speed, use the same few words for the same ideas and check understanding often. The mentor gets used to each child\'s accent, and the child gets used to the mentor\'s.' },
          { h3: 'Visual first', p: 'Code is something you see working. When a sprite turns or a distance prints, the meaning is on the screen, so the English needed to follow a lesson stays modest, and it grows naturally.' }
        ] },
        { kind: 'p', mt: true, html: 'Mentors teach from India in live video lessons; their evening is a Dresden afternoon. Groups keep one mentor over many months, so the mentor learns quickly whether your child likes a stretch problem, a slower build-up or the chance to explain an idea out loud.' }
      ]
    },
    {
      id: 'distances',
      tint: 'tint',
      eyebrow: 'A real Dresden project',
      h2: 'Which Dresden playground is the loneliest? Measuring distance with Pythagoras',
      lede: 'Dresden publishes every public playground with its exact position on the map. Because the positions are given in metres, a child can measure the distance between any two playgrounds with a rule they will meet in school maths, and a computer can do it for all of them at once.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Landeshauptstadt Dresden publishes its playgrounds through the open data portal of the Freistaat Sachsen under the Datenlizenz Deutschland Namensnennung 2.0. We downloaded the full list on 2 November 2026: 275 places, including ball courts, skate parks and a few bike tracks.',
            'Each place has a name, a district and two numbers, x and y. They are not latitude and longitude but metres east and metres north on a flat map grid called UTM. That one detail makes the maths easy.'
          ],
          rightH3: 'The question',
          right: [
            'For every playground, how far is it to the nearest other playground? And which one has the longest walk to its nearest neighbour, the loneliest playground in Dresden?',
            'On a flat grid, the distance between two points is the long side of a right-angled triangle: Pythagoras. Python has it built in as math.dist().'
          ] },
        { kind: 'code', label: 'Version 1: the loneliest playground', lang: 'Python', code: V1, note: 'Our program. It prints <code>Places: 275</code> and <code>Loneliest: Pirnaer Straße/Kirchberg (Eschdorf) - Spielplatz 1850 m</code>.' },
        { kind: 'p', mt: true, html: 'The loneliest playground is in Eschdorf, part of the Ortschaft Schönfeld-Weißig, 1,850 metres from its nearest neighbour. That makes sense once you look at a map: the villages out there are far apart. The next two on the list, the forest playground in the Albertpark at 1,574 metres and the one in Oberwartha at 1,547, also sit where the built-up city thins out.' },
        { kind: 'p', html: 'The second question goes the other way. Which two playgrounds are closest together? To be sure, the program must compare every pair, and here the child meets the nested loop: for each playground, check every playground that comes after it in the list. Before running it, we ask: how many pairs is that?' },
        { kind: 'code', label: 'Version 2: compare every pair', lang: 'Python', code: V2, note: 'Our program, run after Version 1. It adds <code>Pairs checked: 37675</code>, <code>Closest pair: 21 m</code> and <code>Pennricher Straße 14 + Pennricher Straße 8 - 12</code>.' },
        { kind: 'p', html: '37,675 pairs is 275 times 274, divided by two: each pair counted once. Children can check that by hand, and many are surprised that a list of 275 hides so many comparisons. The closest pair turns out to be two entries 21 metres apart on the Pennricher Straße, one listed as a ball court and one as a playground. Two entries in a list are not always two places in the sense a child means, and asking what each row really is belongs to the job.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'How far each Dresden playground is from its nearest neighbour (our calculation)', head: ['Distance to the nearest neighbour', 'Playgrounds'], rows: [
          ['Under 100 m', '32'],
          ['100 to 249 m', '72'],
          ['250 to 499 m', '98'],
          ['500 to 999 m', '59'],
          ['1,000 m or more', '14']
        ] },
        { kind: 'source', html: 'Data: Landeshauptstadt Dresden, Spielplätze, via the Freistaat Sachsen open data portal and GovData, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 2 November 2026. Distances are ours, straight-line on the UTM grid (EPSG 25833), not walking routes. The middle value of the 275 nearest-neighbour distances is 328 metres.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, on squared paper.</strong> Mark two crosses, count three squares across and four up, and measure the straight line with a ruler. Five squares, every time.',
          '<strong>Ages 8 to 10, in Scratch.</strong> Place three sprites on the stage and use the "distance to" block to find which two are nearest. Then move one and check again.',
          '<strong>Ages 10 to 12, in Python.</strong> Run Version 1, then change it to find the playground with the most neighbours within 500 metres.',
          '<strong>Going further.</strong> Version 2 compares 37,675 pairs. How many would 2,750 playgrounds need? Work it out before you run anything, then explain why programmers worry about nested loops.'
        ] }
      ]
    },
    {
      id: 'pangea',
      eyebrow: 'A maths contest from grade 3',
      h2: 'What is the Pangea maths contest, and when is it in 2027?',
      lede: 'Pangea is a national maths competition for primary and secondary pupils, written on paper or online, without calculators. Registration for 2027 is already open.',
      body: [
        { kind: 'two',
          leftH3: 'The format',
          left: [
            'In the first round, the Vorrunde, children in grades 3 and 4 solve 15 tasks, and older pupils 20, within 45 to 60 minutes. No calculators or formula books are allowed, so the contest rewards thinking rather than speed with a device.',
            'The first 500 pupils in each grade go on to the Zwischenrunde, and the strongest reach regional finals in six locations across Germany.'
          ],
          rightH3: 'Dates for 2027',
          right: [
            'The organisers list registration from 1 October 2026 until 17 February 2027, the Vorrunde from 23 February to 3 March 2027, the Zwischenrunde on 21 and 22 April 2027, and the final with prize-giving on Saturday 12 June 2027.',
            'A teacher registers the class on the organisers\' portal, and the Vorrunde and the Zwischenrunde are both held at the school, so the maths teacher is the person to ask.'
          ] },
        { kind: 'p', mt: true, html: 'We are not connected with Pangea and do not use its tasks. Our own practice problems are in the same spirit as the distance project: a short question, a sketch, and a careful count. The squared-paper task above, with its three, four and five, is exactly the kind of fact a Pangea problem likes to hide.' }
      ]
    },
    {
      id: 'dd-times',
      eyebrow: 'Timetable',
      h2: 'When do classes run in Dresden?',
      lede: 'Mainly on weekday afternoons and weekend mornings. The booking page shows each slot in Dresden time and in India time.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example times in Dresden and the matching time for the mentor in India', head: ['Dresden', 'India, MEZ months (until 28 March 2027)', 'India, MESZ months (from 28 March 2027)'], rows: [
          ['15:35', '20:05', '19:05'],
          ['17:20', '21:50', '20:50'],
          ['Sunday 09:45', '14:15', '13:15']
        ] },
        { kind: 'source', html: 'German time rules come from the Einheitenzeitgesetz: Central European Time (MEZ, UTC+1) in winter, summer time (MESZ, UTC+2) in summer. The autumn change this year fell on 25 October 2026; the spring change comes on 28 March 2027. India never changes its clocks and stays on UTC+5:30, so it runs 4 h 30 min ahead of Dresden now and 3 h 30 min ahead in summer. These are examples only.' },
        { kind: 'p', mt: true, html: 'Saxony\'s holidays in the KMK table for 2026 to 2027 are a little different from most Länder: Christmas from 23 December 2026 to 2 January 2027, winter holidays from 8 to 19 February, Easter from 26 March to 2 April and summer from 10 July to 20 August 2027. Lessons continue in the holidays unless you tell the mentor you are away.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Steps',
    h2: 'The stages a Dresden child moves through',
    lede: 'A simple scheme of our own that guides group placement and the notes parents receive.',
    table: { caption: 'Our stages for ages 6 to 12', head: ['Stage', 'Approximate age', 'Sign that it is done'], rows: [
      ['1. Sequence', '6 to 7', 'Builds a short chain of moves and predicts the result'],
      ['2. Repeat', '7 to 9', 'Uses a loop for a pattern'],
      ['3. Measure', '8 to 10', 'Uses coordinates to place and move sprites'],
      ['4. Code', '9 to 11', 'Writes a Python function and calls it'],
      ['5. Compare', '10 to 12', 'Writes a nested loop and counts how much work it does']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the distance project. It gives children a first, friendly meeting with Pythagoras long before the theorem appears in a school maths lesson.',
      'Our notes home say what your child built and what they could explain.'
    ] },
    right: { h3: 'For children', ps: [
      'Before you run a loop inside a loop, guess how many times it will go round.',
      'A map in metres is just a big sheet of squared paper.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further options',
    h2: 'Nine more courses for Dresden children',
    lede: 'Live and in English, with the choice of a group or private lessons.',
    bands: [
      { num: 'I', h3: 'Young beginners', sub: 'Ages 6 to 12', courses: [
        { code: 'CDR / YOUNG / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'A year-long first course from Scratch to apps.' },
        { code: 'CDR / YOUNG / 02', slug: 'scratch-programming-complete-course', title: 'Scratch games course', blurb: 'Blocks, stories and finished games.' },
        { code: 'CDR / YOUNG / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for 6 to 9', blurb: 'Logic and talk-it-through problems for early readers.' }
      ] },
      { num: 'II', h3: 'Numbers', sub: 'Ages 5 to 18', courses: [
        { code: 'CDR / NUM / 01', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Olympiad and Känguru training', blurb: 'Contest maths in English, from Klassenstufe 3.' },
        { code: 'CDR / NUM / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for ages 5 to 10.' },
        { code: 'CDR / NUM / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus maths', blurb: 'Beads first, then calculation in the head, 5 to 10.' }
      ] },
      { num: 'III', h3: 'Projects', sub: 'Ages 7 to 14', courses: [
        { code: 'CDR / PROJ / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Coordinates and code in a block world, 7 to 12.' },
        { code: 'CDR / PROJ / 02', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A real site of their own, 9 to 12.' },
        { code: 'CDR / PROJ / 03', slug: 'ai-literacy-for-kids-course', title: 'AI for curious kids', blurb: 'How machines learn, for 8 to 14.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Practical details',
    h2: 'How the classes run for a Dresden family',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday', l: 'Afternoons in Dresden, once school is out.' },
      { time: 'Weekend', l: 'Mornings on Saturday or Sunday.' },
      { time: '1-on-1', l: 'Whatever slot your family agrees with us.' }
    ],
    cells: [
      { h3: 'Two a week', p: 'Two live classes, about an hour each.' },
      { h3: 'Same mentor', p: 'Continuity from one month to the next.' },
      { h3: 'Child-driven', p: 'The child writes the code, the mentor guides.' },
      { h3: 'By age', p: 'Groups formed by age band.' },
      { h3: 'Feedback', p: 'Regular notes for parents.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or a class of one.' }
    ]
  },

  projectsH2: 'Projects our older students built',
  projectsLede: 'Many of our students began in primary school. A few of their later projects are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page collects more.',
  reviewsLede: 'Reviews left on Google by parents and students, without edits.',

  fees: {
    h2: 'Fees for Dresden families',
    lede: 'A monthly fee pays for eight live classes. The euro amount here follows the European Central Bank reference rate; we take the payment in US dollars, so your bank converts it and the final euro figure can differ a little.',
    free: ['First class at no cost', 'A short puzzle and a tiny program', 'No card asked'],
    group: ['Fifteen to twenty children of similar age', 'One mentor throughout', 'Two classes weekly', 'Monthly, no long contract'],
    one: ['Private classes for your child', 'Their own pace and projects', 'Times chosen with you']
  },

  faq: {
    eyebrow: 'Dresden parents ask',
    h2: 'Coding classes for kids in Dresden: answers',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach live and exclusively in English. Mentors speak slowly and clearly, adapt to the pace and accent of each child and rephrase whenever something is unclear. Scratch blocks and Python keywords are the same in every country.' },
      { q: 'When does Informatik start in Dresden schools?', a: 'As a compulsory subject in grade 7. The GI Informatik-Monitor 2026/27 records one weekly Informatik lesson in grades 7 to 10 at Oberschule and Gymnasium in Saxony. Grades 5 and 6 have Technik/Computer, which covers some media and informatics skills.' },
      { q: 'Is Saxony good for Informatik?', a: 'By the GI measures, yes. Saxony is one of four Länder already meeting the recommendation of four compulsory hours, and the GI names it as a leader in the Oberstufe, where about half of learners take Informatik.' },
      { q: 'What age is right to start?', a: 'Six is fine. Young children begin with puzzles and Scratch blocks, without typing. Typed Python follows at around nine, and the distance project suits ten to twelve year olds.' },
      { q: 'When are classes in Dresden time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Dresden families mostly choose late afternoons or Sunday mornings.' },
      { q: 'Where are the mentors?', a: 'In India, teaching live over video. A 17:20 class in Dresden is 21:50 for the mentor this winter and 20:50 in summer. Your child keeps the same mentor.' },
      { q: 'Can my child enter Pangea?', a: 'Yes, through the school: a teacher registers the class. Registration for Pangea 2027 runs from 1 October 2026 to 17 February 2027, and the first round is from 23 February to 3 March 2027. We have no connection with the organisers.' },
      { q: 'What is the distance project?', a: 'An original Python project on the Dresden playground data. Children use Pythagoras to find the playground furthest from its nearest neighbour, 1,850 metres in Eschdorf, and then compare all 37,675 pairs to find the closest two.' },
      { q: 'How big are the groups?', a: 'Fifteen to twenty children of similar age. Private one-to-one classes are possible too.' },
      { q: 'How is the fee charged?', a: 'Monthly. The page shows the fee in euro at the European Central Bank reference rate, and the payment is taken in US dollars, converted by your bank. The first class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Keep reading',
    h2: 'Related pages',
    lede: 'Next steps for Dresden families.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our Germany pages in one place.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'Saxony beside the other Länder.' },
      { href: '/kangaroo-math-germany-practice', label: 'Känguru practice', p: 'Another maths contest with dates for 2027.' },
      { href: '/math-and-coding-competitions-germany', label: 'Competitions in Germany', p: 'Maths and coding contests at a glance.' },
      { href: '/coding-classes-in-saxony', label: 'Coding classes in Saxony', p: 'The Saxony Land page.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live lessons explained.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Your child meets the mentor, solves one puzzle and builds a first program in a short trial lesson. Afterwards we suggest a course and group based on what we saw.',
    readFirst: 'For background, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or open <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Lessons are live online, in English only, with mentors in India. Questions are easiest on WhatsApp.',
    formNote: 'Free and with no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/kangaroo-math-germany-practice', label: 'Känguru practice' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Guess the loop count first'
  },

  personalityCss: `
.ag-root.ag-cdr .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-cdr .ag-capsule { border-left-width: 3px; border-radius: 0; }
.ag-root.ag-cdr .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cdr .ag-table caption { text-align: left; }
.ag-root.ag-cdr .ag-steps li { margin-bottom: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (national and Sachsen pages); Pangea-Mathematikwettbewerb, Termine and Ablauf; AGIS directory; KMK Ferienkalender 2026/27; Destatis GV-ISys; Einheitenzeitgesetz; all read 2 November 2026. Landeshauptstadt Dresden, Spielplätze, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Which Dresden playground is the loneliest: an original Python project on 275 playground positions in UTM metres, using math.dist (Pythagoras) to find the place furthest from its nearest neighbour (Eschdorf, 1,850 m) and a nested loop over 37,675 pairs to find the closest two (21 m apart on the Pennricher Straße, a ball court and a playground). Lesson family: distance on a grid and counting the work of a nested loop.',
    requiredMentions: ['spielplaetze_L229.gml', 'Loneliest: Pirnaer Straße/Kirchberg (Eschdorf) - Spielplatz 1850 m', 'Pairs checked: 37675', 'Closest pair: 21 m', 'Places: 275', 'from 23 February to 3 March 2027', 'from 8 to 19 February', 'Guess the loop count first'],
    sources: [
      { claim: 'Saxony Informatik grades 7 to 10; Technik/Computer; Oberstufe and Abitur rules.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/sachsen' },
      { claim: 'Saxony meets four compulsory hours; about half take Informatik in the Oberstufe.', url: 'https://informatik-monitor.de/' },
      { claim: 'Pangea 2027 dates.', url: 'https://www.pangea-wettbewerb.de/termine/' },
      { claim: 'Pangea format and progression.', url: 'https://www.pangea-wettbewerb.de/ablauf/' },
      { claim: 'Saxony holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Dresden International School programmes.', url: 'https://www.agis-schools.org/school/dresden-international-school' },
      { claim: 'Dresden playground data and licence.', url: 'https://ckan.govdata.de/dataset/spielplatzea5521' }
    ],
    rejectedClaims: [
      'Walking distances between playgrounds: the project measures straight lines only, and the page says so.',
      'Naming Dresden International School as a source of our students: refused; context only.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any connection with Pangea, the Saxon ministry or the City of Dresden: none.'
    ]
  }
};
