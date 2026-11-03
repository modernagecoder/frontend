'use strict';
// Online Python classes in Remscheid (ag- city page, Germany cluster P6 row DE195, tier-2 shape
// online-python-classes-<city>-germany: live online explained, Python path). Owner 2026-11-02: classes are live, in
// English only, with mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: what "live online" really means, minute by minute; the Python path by age; and Remscheid's 405,485 trees
// measured from the air, where percentiles say more than the mean and the top 1 percent is mostly not trees.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 November 2026, unless stated):
//  - GI Informatik-Monitor 2026/27, NRW page: compulsory Informatik grades 5 and 6 (fact 80); "An Gymnasien mit
//    neunjährigem Bildungsgang wird Informatik im Rahmen des Wahlpflichtunterrichts in den Jahrgangsstufen 9 und 10"
//    (fact 62); Q-phase GK 3 hours, LK 5 hours (81); no computer in the written Abitur (82).
//  - NRW ministry: ZP10 in German, maths, English (64); written Abitur 13 April to 5 May 2027 (42).
//  - KMK FER2026_27.pdf, NRW row (fact 275); summer 2027 19 July to 31 August (fact 266).
//  - Jugendwettbewerb Informatik: from grade 3 (141); Bronze, Silver, Gold levels (142).
//  - Destatis GV-ISys: Remscheid, Stadt 113,828 on 31.12.2024 (facts-geo/places.tsv).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Wuppertal (publisher), "Einzelbaum Stammpositionen aus Luftbildern (2025) Remscheid und Solingen",
//    GovData id einzelbaum-stammpositionen-aus-luftbildern-2025-remscheid-und-solingen (issued 2026-09-25), resource
//    https://daten.wuppertal.de/Umwelt_Klima/Einzelbaum-Stammpositionen-Remscheid-2025_EPSG25832_GEOPACKAGE.zip,
//    licence on the dataset page: "Der Datensatz ist im GeoPackage-Format unter der Open-Data-Lizenz CC BY 4.0
//    verfügbar." Notes quoted: aerial images "Aufnahmezeitpunkte 02. Juli 2025"; "rund 406.000 Bäumen im Stadtgebiet von
//    Remscheid"; work by EFTAS within smart.wuppertal, method "twin4tree", tree mask by the "KI-Verfahren "Cop4ALL"";
//    templates "sphärische und gaußförmige Form für Laubbäume, parabolische, hyperbolische und konische Form für
//    Nadelbäume"; dense stands undercounted, "Korrekturfaktor von 1,6"; stem positions "Näherungswerte".
//    Downloaded 3 November 2026: zip 30,634,108 bytes (sha256 9ba8f044...0a9), GeoPackage 75,030,528 bytes, table
//    Baumstandorte_Mittelpunkte_Remscheid, 406,290 rows, 405,485 with inside = 1, 805 with inside = 0 (flag not
//    documented; we keep inside = 1). Raw copies in src-pages/<slug>/.
//  - Tried first: Stadt Remscheid's points of interest WFS (geoportal.remscheid.de, Datenlizenz Deutschland Zero 2.0):
//    HTTP 403 Cloudflare challenge on 3 November 2026; stopped, not retried.
// Our own calculations (scratchpad de/w/T7/run/rem/v1.py + v2.py, python3 -I): percentiles of height_max 0th 2.5,
// 25th 14.7, 50th 21.3, 75th 25.9, 90th 29.0, 99th 34.2, 100th 108.6 m; mean 20.2 m; 40 m or more 430, 50 m or more 68,
// 60 m or more 19. Crown templates (inside = 1): Gaussian 142,591, conical 84,407, spherical 67,930, parabolic 55,235,
// hyperbolic 49,367, none 5,955; so broadleaf templates 210,521 and conifer templates 189,009 (our sums).
// Lesson family: sort once, then read percentiles by position; the middle half tells more than the mean, and the far
// end of the list is where the data errors live.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import sqlite3',
  '',
  'db = sqlite3.connect("remscheid_trees.gpkg")      # a GeoPackage is an SQLite file',
  'rows = db.execute("SELECT height_max FROM Baumstandorte_Mittelpunkte_Remscheid "',
  '                  "WHERE inside = 1")',
  'heights = sorted(h for (h,) in rows)',
  'n = len(heights)',
  'print("Trees inside the city:", n)',
  '',
  'def percentile(p):                     # the value p percent of the way along the sorted list',
  '    return round(heights[round(p / 100 * (n - 1))], 1)',
  '',
  'for p in (0, 25, 50, 75, 90, 99, 100):',
  '    print(f"{p:>3}th percentile:", percentile(p), "m")',
  'print("Mean:", round(sum(heights) / n, 1), "m")'
].join('\n');

const V2 = [
  'low, high = percentile(25), percentile(75)',
  'print("Middle half of all trees:", low, "to", high, "m")',
  'for limit in (40, 50, 60):',
  '    taller = n - sum(1 for h in heights if h < limit)',
  '    print(f"Trees of {limit} m or more:", taller)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Remscheid: online Python' },
  slug: 'online-python-classes-remscheid-germany',
  code: 'rep',
  accent: '#7A1B1E',
  accentRationale: 'Online Python in Remscheid: a deep forge red #7A1B1E for the tool-making town of the Bergisches Land, distinct from the Berlin brick and the NRW teal; contrast 8.51 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Online Python classes in Remscheid',
  title: 'Online Python Classes in Remscheid: Live, Taught in English',
  description: 'Online Python classes for Remscheid learners from 9 to adult: how a live lesson works, the path from first line to real data, and a project on 405,485 trees.',
  ogDescription: 'Live online Python lessons in English for Remscheid children, teenagers and adults, explained step by step, with an original project on the city\'s trees as measured from the air in July 2025.',
  twitterDescription: 'Live online Python in English for Remscheid, from a first print line to 405,485 trees.',
  pageName: 'Online Python Classes in Remscheid',
  webPageDescription: 'A guide for Remscheid families and adults to learning Python in a live online class: what happens in a lesson, the path by age, what NRW schools cover, and an original percentile project on the tree heights published for Remscheid in 2026.',
  courseDescription: 'Live online Python classes in English for learners in Remscheid aged 9 and up: typed Python from the first lesson, then data, files and small models, with one regular mentor, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Remscheid',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#online', label: 'Online' },
    { href: '#path', label: 'Path' },
    { href: '#trees', label: 'Trees' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Remscheid &middot; Python &middot; Live online',
  h1: 'Online Python classes in Remscheid',
  lede: '"Online" can mean anything from a video you watch alone to a teacher who sees your screen and asks why you wrote that line. Ours is the second kind. This page explains, minute by minute, what a live Python class looks like from a desk in Remscheid, how the path runs from a first line of code to real data, and a project on the city\'s trees that teaches the most useful idea in statistics: line everything up, then read the positions.',
  secondaryCta: { href: '#trees', label: 'See the tree project' },
  wa: 'Hello Modern Age Coders, I am in Remscheid and would like a free first Python class, taught live in English.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; a mentor who sees your code as you write it',
  spec: [
    ['Ages', '9 to 12, 13 to 18, and adults'],
    ['Language of teaching', 'English, at the learner\'s speed'],
    ['Format', 'Live video, shared screen, own editor'],
    ['Remscheid times', 'After school, evenings, weekends'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Online Python classes for Remscheid at Modern Age Coders happen live, in English, on a video call where the mentor watches the learner write and run real Python in their own editor. Children from 9 begin with typed Python and games, teenagers and adults move on to files, data and small models. Pick a class of fifteen to twenty or private lessons, with the same India-based mentor each week, at Remscheid afternoon, evening or weekend times.',

  picks: {
    eyebrow: 'Three ways in',
    h2: 'Python courses for Remscheid learners',
    lede: 'The same language at three ages. The mentor suggests one after the free first class, based on what the learner already knows.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'REP / 01', title: 'Python and AI for Kids', note: 'From 9 to 12. A child types every line, makes turtle pictures and quiz games, and later teaches a tiny program to sort examples.' },
      { course: 'python-complete-masterclass-teens', code: 'REP / 02', title: 'Python for Teens', note: 'From 13 to 18. Variables to classes, files to small data projects, at a pace that also suits pupils taking Informatik at school.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'REP / 03', title: 'Python Masterclass for Adults', note: 'For adults starting cold. Syntax first, then scripts for real files and tables, then the libraries people use at work.' }
    ]
  },

  sections: [
    {
      id: 'online',
      eyebrow: 'Live, not recorded',
      h2: 'What happens in a live online Python class?',
      lede: 'A lesson lasts an hour and runs on an ordinary video call. Nothing is pre-recorded, and the learner is typing for most of it. Here is a typical hour for a Remscheid teenager in month two.',
      body: [
        { kind: 'ol', items: [
          '<strong>Minutes 0 to 5: a quick check.</strong> The mentor asks what was hard in the homework and looks at the code the learner sends over the shared screen.',
          '<strong>Minutes 5 to 15: one new idea.</strong> For example a dictionary. The mentor shows it in five lines and asks the learner to predict the output before running it.',
          '<strong>Minutes 15 to 40: the learner builds.</strong> A small task that needs the new idea. The mentor watches the learner\'s screen, waits, and asks questions rather than taking over the keyboard.',
          '<strong>Minutes 40 to 50: break it on purpose.</strong> The learner changes one line to make the program fail, reads the error message and explains it in their own words.',
          '<strong>Minutes 50 to 60: wrap up.</strong> One sentence on what was learned, a short task for next time, and the date of the next class.'
        ] },
        { kind: 'source', html: 'This is our own lesson plan, not a fixed script. Children of 9 to 12 work in shorter blocks with more drawing and games; adults spend longer on their own data.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'What you need at home', p: 'A laptop or desktop computer with a keyboard, a webcam and microphone, and a stable connection. Python itself is free. A tablet works for Scratch but not well for typed Python, so we suggest a proper keyboard from the start.' },
          { h3: 'Why the camera matters', p: 'Not for watching faces. The mentor needs to see the learner\'s screen and hear them think aloud. Most mistakes are visible a few seconds before the learner notices them, and that is the moment a good question helps.' },
          { h3: 'English at the right speed', p: 'Lessons are only in English. Mentors slow down, repeat in simpler words and wait for answers. Python\'s own words, print, if, for, while, are English, so a Remscheid pupil who learns English at school is practising two subjects at once.' }
        ] }
      ]
    },
    {
      id: 'path',
      eyebrow: 'The Python path',
      h2: 'How does a learner go from a first line of Python to real data?',
      lede: 'In small steps, each one checked before the next. The stages below are the same for every age; only the speed and the examples change.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our Python path, with the usual pace for each age (our own estimates)', head: ['Stage', 'What the learner can do', 'Children 9 to 12', 'Teens and adults'], rows: [
          ['1. Output and input', 'Print, ask for a value, do arithmetic with it', 'Weeks 1 to 3', 'Week 1'],
          ['2. Decisions and loops', 'Write if, for and while, and trace them on paper', 'Months 1 to 3', 'Weeks 2 to 5'],
          ['3. Lists and functions', 'Store many values, write a function and reuse it', 'Months 3 to 6', 'Months 1 to 2'],
          ['4. Files and data', 'Open a CSV or database file, sort, count and summarise', 'Months 6 to 10', 'Months 2 to 4'],
          ['5. Own project', 'Plan, build and explain something new', 'Month 10 and up', 'Month 4 and up']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What NRW schools add',
          left: [
            'In North Rhine-Westphalia, Informatik is compulsory in grades 5 and 6 at every general school, so most Remscheid pupils meet programming ideas at ten or eleven. At a nine-year Gymnasium it returns as a Wahlpflicht option in grades 9 and 10, and in the Oberstufe as a Grundkurs of three hours or a Leistungskurs of five, where a school offers it.',
            'The written Informatik Abitur in NRW is set centrally and answered without a computer, so tracing code on paper, stage 2 above, is a skill the exam values directly.'
          ],
          rightH3: 'Where our classes fit',
          right: [
            'We teach alongside school, never in place of it; grades and the Abitur come from the school course alone. A pupil who takes Informatik can join our <a class="ag-inline-link" href="/courses/informatik-companion-course-klasse-5-10">Informatik companion for Klasse 5 to 10</a> or the <a class="ag-inline-link" href="/courses/informatik-abitur-course-java-python">Informatik Abitur course in Java and Python</a>, which follow school topics in English.',
            'For a target outside school, the Jugendwettbewerb Informatik is open from grade 3 and now has Bronze, Silver and Gold levels by grade. Our <a class="ag-inline-link" href="/jugendwettbewerb-informatik-preparation">Jugendwettbewerb page</a> explains it.'
          ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, North Rhine-Westphalia page; Bundesweite Informatikwettbewerbe, Jugendwettbewerb Informatik pages. Read on 2 November 2026. NRW also holds central exams at the end of grade 10 (ZP10) in German, maths and English.' }
      ]
    },
    {
      id: 'trees',
      tint: 'tint',
      eyebrow: 'A Remscheid data project',
      h2: 'How tall are the trees in Remscheid?',
      lede: 'In September 2026 a new open dataset appeared: the position, height and crown of every tree that could be found in Remscheid on aerial images taken on 2 July 2025. It is free to reuse under CC BY 4.0. Our learners use it for the idea behind every percentile, box plot and exam grade boundary.',
      body: [
        { kind: 'two',
          leftH3: 'Where the numbers come from',
          left: [
            'The dataset is published by the Stadt Wuppertal for the cities of Remscheid and Solingen as part of the smart.wuppertal project. A company called EFTAS found the trees automatically: an AI method first marked which pixels were vegetation, then 3D templates were matched to a height model of the ground and everything on it. The publisher speaks of around 406,000 trees in Remscheid.',
            'The file is a GeoPackage, which is really an SQLite database, so Python can read it with nothing but its own standard library. It holds 406,290 rows. 805 carry the flag inside = 0, which the documentation does not explain, so we keep only the 405,485 rows marked inside = 1.'
          ],
          rightH3: 'What the publisher warns',
          right: [
            'The notes are honest about limits. In dense woodland, crowns grow together and smaller trees stand hidden below them, so the method finds far fewer trees than are really there; sample counts in forest suggested a correction factor of 1.6. The stem positions are estimates taken from the middle of each crown.',
            'So our questions are about the trees the method found, not every tree in Remscheid. Saying that out loud is part of the lesson.'
          ] },
        { kind: 'code', label: 'Version 1: sort the heights, then read positions', lang: 'Python', code: V1, note: 'It prints <code>Trees inside the city: 405485</code>, then <code>0th percentile: 2.5 m</code>, <code>25th percentile: 14.7 m</code>, <code>50th percentile: 21.3 m</code>, <code>75th percentile: 25.9 m</code>, <code>90th percentile: 29.0 m</code>, <code>99th percentile: 34.2 m</code>, <code>100th percentile: 108.6 m</code> and <code>Mean: 20.2 m</code>.' },
        { kind: 'p', mt: true, html: 'Sorting once does all the work. After that, the 50th percentile, the median, is simply the value halfway along the list: 21.3 metres. A quarter of the trees are below 14.7 metres and a quarter above 25.9, so the middle half of all the trees the method found lies between those two heights. The mean, 20.2 metres, is a little lower than the median, because the list has a long tail of short trees and young growth below it.' },
        { kind: 'code', label: 'Version 2: look hard at the far end', lang: 'Python', code: V2, note: 'It prints <code>Middle half of all trees: 14.7 to 25.9 m</code>, <code>Trees of 40 m or more: 430</code>, <code>Trees of 50 m or more: 68</code> and <code>Trees of 60 m or more: 19</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Tree heights found in Remscheid, aerial images of 2 July 2025 (our percentiles)', head: ['Position in the sorted list', 'Height'], rows: [
          ['Shortest (0th percentile)', '2.5 m'],
          ['A quarter of the way (25th)', '14.7 m'],
          ['Halfway, the median (50th)', '21.3 m'],
          ['Three quarters (75th)', '25.9 m'],
          ['Nine tenths (90th)', '29.0 m'],
          ['99th percentile', '34.2 m'],
          ['Tallest (100th)', '108.6 m']
        ] },
        { kind: 'source', html: 'Data: Stadt Wuppertal, Einzelbaum Stammpositionen aus Luftbildern (2025) Remscheid und Solingen, Remscheid GeoPackage, CC BY 4.0, column height_max, rows with inside = 1; downloaded 3 November 2026. The percentiles, the counts and the reading of them are ours.' },
        { kind: 'p', mt: true, html: 'Now the part that makes learners sit up. Ninety-nine trees in a hundred are 34.2 metres or shorter, yet the tallest row says 108.6 metres, and 19 rows claim 60 metres or more. No tree in the Bergisches Land is anywhere near that tall. Those rows are almost certainly something else the height model saw from the air, a mast or a chimney or a bad patch of data, that slipped through the vegetation mask. The percentiles barely notice them; the maximum is made of them. That is the second half of the lesson: the far end of a sorted list is where data errors gather, so look there before you quote a record.' },
        { kind: 'p', html: 'The crown templates tell a quieter story. Gaussian and spherical shapes, which the publisher assigns to broadleaf trees, account for 210,521 of the trees found; parabolic, hyperbolic and conical shapes, used for conifers, account for 189,009; 5,955 rows have no shape at all. Those are our sums from a second query, and the template is the method\'s own guess, not a botanist\'s.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 12.</strong> Measure the heights of ten family members, write them on cards, sort the cards and find the middle one. Then add a pretend giant of 3 metres. Which moves more, the middle card or the average?',
          '<strong>Teenagers.</strong> Run both versions, then work out the heights for the 10th and 95th percentiles and draw a box plot by hand from your numbers.',
          '<strong>Adults.</strong> Choose your own cut-off for "probably not a tree", count what it removes, and say in one sentence why you chose it.',
          '<strong>Going further.</strong> Compare the median height of broadleaf and conifer templates. Do the two groups overlap more than you expected?'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When do online Python classes run in Remscheid?',
      lede: 'Remscheid evenings are Indian late evenings, Remscheid weekend mornings are Indian afternoons. Most families find a slot that suits both without trouble.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Remscheid slots and the hour on the mentor\'s side', head: ['Remscheid', 'India now (winter)', 'India from 28 March 2027'], rows: [
          ['15:45', '20:15', '19:15'],
          ['17:15', '21:45', '20:45'],
          ['Saturday 12:00', '16:30', '15:30'],
          ['Sunday 16:00', '20:30', '19:30']
        ] },
        { kind: 'source', html: 'Remscheid runs on Central European Time, UTC+1, in winter and Central European Summer Time, UTC+2, in summer, as the Einheitenzeitgesetz sets out; this year\'s summer time finished on 25 October 2026 and next year\'s begins on 28 March 2027. Indian time stays at UTC+5:30. The slots above are illustrations, not batch times.' },
        { kind: 'p', mt: true, html: 'NRW school holidays in 2026/27, from the Kultusministerkonferenz table: autumn from 17 to 31 October 2026, Christmas from 23 December 2026 to 6 January 2027, Easter from 22 March to 3 April 2027, a single Whitsun day on 18 May 2027, and summer from 19 July to 31 August 2027. Live classes carry on through them unless you pause. Learners join us from every part of Remscheid and from neighbouring Wuppertal, Solingen, Wermelskirchen, Radevormwald and Hückeswagen.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Checkpoints',
    h2: 'How we know a learner is ready for the next step',
    lede: 'Our own checkpoints. A learner moves on when they can do the task without help, not when a set number of weeks has passed.',
    table: { caption: 'Python checkpoints (ours)', head: ['Checkpoint', 'The task', 'Passed when'], rows: [
      ['A', 'Predict the output of a ten-line program before running it', 'The prediction is right, line by line'],
      ['B', 'Fix a program with one deliberate bug', 'The learner finds it from the error message'],
      ['C', 'Write a function and three tests for it', 'All three tests pass, one of them an edge case'],
      ['D', 'Summarise a data file in five numbers', 'The learner can explain each number aloud'],
      ['E', 'Present a small project', 'Someone else can run it from the instructions']
    ] },
    left: { h3: 'For parents', ps: [
      'Checkpoint D is the tree project in miniature: sort, then read the minimum, quartiles, median and maximum.',
      'You see what your child can explain, not how long the camera was on.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you trust the biggest number in a list, read the ten rows next to it.',
      'A median is just the middle of a sorted list. Sorting is the hard part, and Python does it for you.'
    ] }
  },

  catalogue: {
    eyebrow: 'After the first course',
    h2: 'Nine more courses for Remscheid learners',
    lede: 'Where Python can lead next. Every course is live and in English, in a class or one to one.',
    bands: [
      { num: 'I', h3: 'Young Python learners', sub: 'Ages 9 to 15', courses: [
        { code: 'REP / YOUNG / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored with short Python programs.' },
        { code: 'REP / YOUNG / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, Roblox and Minecraft before typed games.' },
        { code: 'REP / YOUNG / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'A second language once Python feels easy.' }
      ] },
      { num: 'II', h3: 'Python with purpose', sub: 'Ages 13 to 18', courses: [
        { code: 'REP / TEEN / 01', slug: 'ai-ml-masterclass-teens', title: 'Machine learning for teens', blurb: 'Models trained on data and tested fairly.' },
        { code: 'REP / TEEN / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'The thinking contests and Informatik reward.' },
        { code: 'REP / TEEN / 03', slug: 'mysql-mastery-for-teens', title: 'SQL for teens', blurb: 'Databases, the language the tree file speaks.' }
      ] },
      { num: 'III', h3: 'Python at work', sub: 'Ages 18 and up', courses: [
        { code: 'REP / WORK / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts that do the repetitive part of a job.' },
        { code: 'REP / WORK / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'From cleaning data to models and reports.' },
        { code: 'REP / WORK / 03', slug: 'python-web-development-django-flask-course', title: 'Python for the web', blurb: 'Django and Flask applications.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Practical details',
    h2: 'How live Python classes are organised for Remscheid',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday afternoons', l: 'For pupils once school and homework are done.' },
      { time: 'Weekday evenings', l: 'For adults, until about half past six.' },
      { time: 'Private', l: 'A slot you settle with the mentor, Saturday and Sunday too.' }
    ],
    cells: [
      { h3: 'Two classes a week', p: 'Each an hour, with a short task in between.' },
      { h3: 'Your editor, your files', p: 'Code lives on the learner\'s own computer.' },
      { h3: 'Screen shared', p: 'The mentor sees each line as it is typed.' },
      { h3: 'Same mentor', p: 'One person follows the whole path.' },
      { h3: 'English, gently', p: 'Slower when needed, never rushed.' },
      { h3: 'Class or solo', p: 'Fifteen to twenty learners, or private.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'A selection of work by Python learners around the world; there is more on our <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What students and parents wrote on Google, left exactly as posted.',

  fees: {
    h2: 'Fees for online Python in Remscheid',
    lede: 'Eight live classes a month for one monthly fee. The euro amounts are calculated with the European Central Bank reference rate; when you pay, the charge is in US dollars, and your bank turns it into euro, so its figure can be a few cents different.',
    free: ['A free first class', 'A short Python task at your level', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar level', 'One regular mentor', 'Two live classes a week', 'Month by month, stop when you like'],
    one: ['One learner and one mentor', 'Projects chosen by the learner', 'Times agreed between you']
  },

  faq: {
    eyebrow: 'Remscheid learners ask',
    h2: 'Online Python classes in Remscheid: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. We only teach in English, always live, and the mentor adjusts speed and accent to the learner. For many Remscheid pupils that is a bonus: English lessons and Python practice in one hour.' },
      { q: 'Is an online class as good as sitting in a room?', a: 'For programming it is often better, because the mentor sees the learner\'s own screen up close and every line of code is saved on their own computer. What matters is that the class is live and the learner types, not watches.' },
      { q: 'What does my child need at home?', a: 'A laptop or desktop computer with a keyboard, a webcam, a microphone and a steady internet connection. Python is free and the mentor helps install it in the first class.' },
      { q: 'From what age can my child learn Python?', a: 'From about 9, when typing and reading are comfortable. Younger children start with Scratch blocks and move to Python later.' },
      { q: 'Does it help with Informatik at school?', a: 'Often, yes. NRW makes Informatik compulsory in grades 5 and 6 and offers it later as an elective and in the Oberstufe. We teach alongside school; marks and the Abitur come only from the school course.' },
      { q: 'When are classes held in Remscheid time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. School-age learners usually come in the afternoon and adults in the early evening.' },
      { q: 'Who are the mentors?', a: 'Experienced programmers based in India who teach live over video, in English. Your learner keeps the same mentor every week.' },
      { q: 'How is the fee paid?', a: 'Monthly. The page shows the amount in euro using the European Central Bank reference rate; the payment is processed in US dollars and your bank converts it, so the booked amount may differ slightly. The first class costs nothing.' },
      { q: 'What is the tree project?', a: 'An exercise on the open dataset of trees found in Remscheid from aerial images of 2 July 2025. Learners sort 405,485 heights, read the percentiles (the median is 21.3 metres) and discover that the tallest rows, up to 108.6 metres, cannot be real trees.' },
      { q: 'Can adults join?', a: 'Yes. Adults have their own classes and start from the first line, at a pace that fits work and family.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More reading for Remscheid learners.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our hub page for the whole country.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'School rules and dates across NRW.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'The national Python page.' },
      { href: '/python-classes-for-kids-germany', label: 'Python classes for kids in Germany', p: 'Python for children of 9 to 12.' },
      { href: '/online-coding-classes-for-kids-germany', label: 'Online coding for kids in Germany', p: 'How live lessons work for younger children.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our teaching method in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first Python class',
    lede: 'The first class is a real lesson: the learner writes and runs a few lines of Python while the mentor watches how they work and how comfortable they are in English, then suggests a course and group.',
    readFirst: 'To read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'All lessons are live online with mentors in India, in English only. For a quick question, WhatsApp us in English.',
    formNote: 'No card, no commitment: the first class is free.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-course-germany', label: 'Python course in Germany' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'North Rhine-Westphalia' },
        { href: '/jugendwettbewerb-informatik-preparation', label: 'Jugendwettbewerb Informatik' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Sort once, then read the positions'
  },

  personalityCss: `
.ag-root.ag-rep .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-rep .ag-capsule { border-left-width: 3px; }
.ag-root.ag-rep .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-rep .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-rep .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); Ministerium für Schule und Bildung NRW (ZP10); Bundesweite Informatikwettbewerbe (Jugendwettbewerb Informatik); KMK Ferienregelung 2026/27; Einheitenzeitgesetz; Destatis GV-ISys. Stadt Wuppertal, Einzelbaum Stammpositionen aus Luftbildern (2025) Remscheid und Solingen, CC BY 4.0.',
    localProject: 'Remscheid\'s trees from the air: an original Python project reading the 2026 GeoPackage of trees detected on aerial images of 2 July 2025 with sqlite3, sorting 405,485 heights and reading percentiles (median 21.3 m, middle half 14.7 to 25.9 m, 99th 34.2 m) before showing that the 19 rows of 60 m or more, up to 108.6 m, cannot be trees. Lesson family: sort once, read percentiles by position, and check the far end for errors.',
    requiredMentions: ['remscheid_trees.gpkg', 'Trees inside the city: 405485', '50th percentile: 21.3 m', '100th percentile: 108.6 m', 'Middle half of all trees: 14.7 to 25.9 m', 'Trees of 60 m or more: 19', 'correction factor of 1.6', 'Sort once, then read the positions'],
    sources: [
      { claim: 'Remscheid tree positions from aerial images of 2 July 2025, CC BY 4.0.', url: 'https://ckan.govdata.de/dataset/einzelbaum-stammpositionen-aus-luftbildern-2025-remscheid-und-solingen' },
      { claim: 'NRW Informatik compulsory in grades 5 and 6, Wahlpflicht 9 and 10 at G9 Gymnasien, GK 3 and LK 5 hours.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'NRW ZP10 in German, maths and English.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-10' },
      { claim: 'NRW school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Jugendwettbewerb Informatik levels and age.', url: 'https://bwinf.de/jugendwettbewerb/' }
    ],
    rejectedClaims: [
      'Remscheid points of interest (geoportal.remscheid.de): Cloudflare 403 on 3 November 2026, not retried, not used.',
      'Any count of all trees in Remscheid: the publisher says dense woodland is undercounted, so we only describe the trees found.',
      'Any identification of what the 60 m plus rows really are: not in the data, described only as probably not trees.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
