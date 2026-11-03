'use strict';
// Coding classes for kids in Berlin (ag- city door, Germany cluster P1 pilot, rows.tsv tier 1).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only,
// with mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle: what a Berlin child does NOT get at school (Berlin has no Informatik compulsory for all; a one-hour ITG
// course in grade 7 or 8 is the first fixed computing lesson), why ages 6 to 12 is the gap, a free first contest
// (Informatik-Biber, 9 to 20 November 2026), Berlin afternoons in Indian evening hours, and one real Berlin data project.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched 2 Nov 2026):
//  - KMK primary page: Grundschule "von der ersten bis zur vierten, in Berlin und Brandenburg bis zur sechsten
//    Jahrgangsstufe" (fact 1).
//  - GI Informatik-Monitor 2026/27, Berlin page: ITG "im Umfang von einer Wochenstunde" (fact 73); Gymnasium Oberstufe
//    10 Einführungsphase, 11 and 12 Qualifikationsphase, G8 (fact 54). National page: six Länder without compulsory
//    Informatik for all, Berlin first named (fact 92); no binding plans in Berlin, Brandenburg, Hessen (fact 96).
//  - berlin.de Prüfungen und Abschlüsse: BBR after grade 9, MSA after grade 10 (fact 66).
//  - bwinf.de: Biber free, grades 3 to 13, no prior knowledge (129, 130); 9 tasks/30 min primary, 12/35 grades 5-6,
//    15/40 from grade 7 (132); Biberwochen 9 to 20 November 2026 (133); 20th edition (134); Schnupper-Biber from
//    14 September 2026 (135); results December 2026, certificates January 2027 (136); over 580,000 in 2025 (137).
//  - Time: EinhZeitG para 4 (MEZ = UTC+1, MESZ = UTC+2); SoZV clock-change rule; 2026 summer time ended 25 October
//    2026, 2027 starts 28 March 2027 (facts-geo/timezone.tsv, checked against tzdata Europe/Berlin).
//  - Data: Senatsverwaltung für Mobilität, Verkehr, Klimaschutz und Umwelt, "Radzähldaten in Berlin", Gesamtdatei
//    Stundenwerte (gesamtdatei-stundenwerte.xlsx, 17,842,671 bytes, sha256 2c6e86af...59d89b5), via GovData
//    https://ckan.govdata.de/dataset/radzahldaten-in-berlin3fcda, licence Datenlizenz Deutschland Zero 2.0. Sheet
//    "Jahresdatei 2025", counters 05-FK-OBB-O and 05-FK-OBB-W (Oberbaumbrücke Ost/West, installed 1 June 2015), 8,760
//    hourly rows. Legende: 0 marks no or implausible data; blank marks no data.
// Our own calculations (scratchpad de/berlin/analyse.py, v1.py, v2.py, python -I): 25 hours with a blank in either
// direction; 24 of them are the east counter from 05:00 on 6 Nov 2025 to 04:00 on 7 Nov 2025 (19 hours on 6 Nov, 5 on
// 7 Nov); the other is 02:00 on 30 March 2025, the hour the clocks skipped. v1 prints quietest 2025-11-06 267, busiest
// 2025-06-19 18377, gaps {'2025-03-30': 1, '2025-11-06': 19, '2025-11-07': 5}; v2 prints 363 days, quietest real day
// 2025-12-25 1377. Weekday hour averages (both directions, complete hours only): 03:00 24, 08:00 801, 18:00 1127;
// Saturday 03:00 81, Sunday 03:00 93. Busiest month June (423,868), quietest February (214,731). 8,735 complete hours,
// 4,032,736 crossings counted.
// Lesson family: a missing value is not a zero; check gaps before you crown a record.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'totals = {}',
  'gaps = {}',
  'with open("oberbaum_2025.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        day = row["zeit"][:10]',
  '        if row["ost"] == "" or row["west"] == "":',
  '            gaps[day] = gaps.get(day, 0) + 1',
  '            continue',
  '        totals[day] = totals.get(day, 0) + int(row["ost"]) + int(row["west"])',
  '',
  'quietest = min(totals, key=totals.get)',
  'busiest = max(totals, key=totals.get)',
  'print("Quietest day:", quietest, totals[quietest])',
  'print("Busiest day:", busiest, totals[busiest])',
  'print("Hours missing:", gaps)'
].join('\n');

const V2 = [
  'CLOCK_CHANGE = "2025-03-30"   # the clocks jumped from 2 to 3: that hour never happened',
  'fair = {}',
  'for day in totals:',
  '    if day not in gaps or day == CLOCK_CHANGE:',
  '        fair[day] = totals[day]',
  '',
  'quietest = min(fair, key=fair.get)',
  'print("Days we can trust:", len(fair))',
  'print("Quietest real day:", quietest, fair[quietest])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Berlin: coding for kids' },
  slug: 'coding-classes-for-kids-berlin',
  code: 'ber',
  accent: '#8A2D1C',
  accentRationale: 'Coding classes for kids, Berlin: a deep brick red #8A2D1C for the city\'s brick viaducts and the Oberbaumbrücke in the project; contrast 8.01 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes for kids in Berlin',
  title: 'Coding Classes for Kids in Berlin: Live Online, in English',
  description: 'Coding classes for kids in Berlin aged 6 to 12: live online in English, what Berlin schools teach and when, the Informatik-Biber, and a Berlin bike data project.',
  ogDescription: 'Live online coding for Berlin children aged 6 to 12, taught in English at the child\'s own pace: why Berlin schools leave computing late, the free Informatik-Biber in November 2026, and a real project on the Oberbaumbrücke bike counter.',
  twitterDescription: 'Coding for Berlin kids, live in English: school gaps, the Informatik-Biber and a Berlin bike counter project.',
  pageName: 'Coding Classes for Kids in Berlin',
  webPageDescription: 'A guide for Berlin parents of children aged 6 to 12 to learning to code, built from KMK, Gesellschaft für Informatik and berlin.de sources, the Informatik-Biber rules for 2026, and an original data project on the Senate\'s Oberbaumbrücke bike counter.',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 in Berlin: Scratch, then typed Python and small AI projects, in a group of fifteen to twenty or one to one, with a regular mentor who matches the child\'s pace.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Berlin',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'Berlin schools' },
    { href: '#english', label: 'In English' },
    { href: '#project', label: 'Bike project' },
    { href: '#biber', label: 'Biber' },
    { href: '#times', label: 'Class times' }
  ],
  eyebrow: 'Berlin &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Berlin',
  lede: 'A Berlin child can go from first grade to the end of Grundschule in grade 6 without one fixed computing lesson, because Berlin is one of six Länder where Informatik is not compulsory for every pupil. This page explains what Berlin schools do teach and when, how our live classes in English work for a child of 6 to 12, a free national contest your child can enter this month, and a project on a real Berlin bike counter where the most interesting answer turns out to be a broken sensor.',
  secondaryCta: { href: '#project', label: 'See the Berlin project' },
  wa: 'Hello Modern Age Coders, my child is in Berlin and would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; one mentor who knows your child, in English',
  spec: [
    ['Ages', '6 to 12, grouped by age'],
    ['Starts with', 'Scratch, then typed Python'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Berlin times', 'Afternoons and weekend mornings, flexible'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding classes for kids in Berlin at Modern Age Coders are live online lessons in English for children aged 6 to 12: Scratch games first, then typed Python and small AI projects, with one regular mentor who matches your child\'s pace and speaks clearly for a child still learning English. Classes run in Berlin afternoons and weekend mornings, in a group of fifteen to twenty or one to one. They fill a real gap: Berlin has no Informatik lesson that every pupil must take.',

  picks: {
    eyebrow: 'Where Berlin children start',
    h2: 'Three courses for Berlin children aged 6 to 12',
    lede: 'One long course that takes a six year old from blocks to apps, one short Scratch course for a quick first win, and one that moves a nine year old straight to typed Python.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'BER / 01', title: 'Coding for Kids', note: 'Ages 6 to 12, batches grouped by age, 10 to 12 months. Scratch games first, then apps and a first look at AI, at a speed the mentor sets for the group.' },
      { course: 'scratch-programming-complete-course', code: 'BER / 02', title: 'Scratch Coding for Kids', note: 'Ages 6 to 12, 3 to 4 months. A complete beginner finishes with real games of their own, a good test of whether coding suits your child.' },
      { course: 'python-ai-kids-masterclass', code: 'BER / 03', title: 'Python and AI for Kids', note: 'Ages 9 to 12, 8 to 10 months. Typed Python from the first lesson, turtle drawings and games, then small AI projects, like the bike counter below.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Berlin schools',
      h2: 'What do Berlin schools teach about computing, and when?',
      lede: 'Less than many parents expect, and later. The facts below come from the Kultusministerkonferenz, the Gesellschaft für Informatik and the Berlin Senate.',
      body: [
        { kind: 'two',
          leftH3: 'Six years of Grundschule',
          left: [
            'In most of Germany, Grundschule ends after grade 4. Berlin and Brandenburg are the exception: the KMK describes a primary stage that runs from the first to the fourth grade, "in Berlin und Brandenburg bis zur sechsten Jahrgangsstufe", up to grade 6. A Berlin child is therefore in Grundschule from about 6 to about 12, the whole age range this page is about.',
            'That long primary stage is a strength for reading and maths, but it is also six years in which no Berlin rule requires a single computing lesson.'
          ],
          rightH3: 'No Informatik for everyone',
          right: [
            'The Gesellschaft für Informatik counts the Länder where every pupil must take Informatik. In its 2026/27 Informatik-Monitor, Berlin is named first among six Länder "ohne einen für alle verbindlichen Informatikunterricht", without Informatik that is compulsory for all, and it adds that no binding plans to introduce the subject are known in Berlin.',
            'What Berlin does have is the Informationstechnischer Grundkurs, ITG, taught for one lesson a week in grade 7 or 8. After that, Informatik is a Wahlpflicht subject, an elective, usually in grades 9 and 10.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Computing in a Berlin school career, by grade', head: ['Grades', 'Stage', 'Computing on the timetable'], rows: [
          ['1 to 6', 'Grundschule', 'No compulsory computing lesson'],
          ['7 or 8', 'Secondary school', 'ITG, one lesson a week, for all pupils'],
          ['9 and 10', 'Secondary school', 'Informatik as an elective (Wahlpflicht), if chosen'],
          ['10', 'End of Sekundarstufe I', 'Mittlerer Schulabschluss (MSA)'],
          ['10 to 12', 'Gymnasium Oberstufe', 'Informatik as an Abitur course, if offered and chosen']
        ] },
        { kind: 'source', html: 'Sources: KMK, Primarbereich; Gesellschaft für Informatik, Informatik-Monitor 2026/27, Länder comparison and Berlin page; Senatsverwaltung für Bildung, Prüfungen und Abschlüsse (berlin.de). All read on 2 November 2026. At a Berlin Gymnasium, the Oberstufe runs from grade 10 (Einführungsphase) to grade 12; Integrierte Sekundarschulen and Gemeinschaftsschulen reach the Abitur after grade 13.' },
        { kind: 'p', mt: true, html: 'So the honest picture for a Berlin parent is this: if your child is curious about how games and apps are made, the school timetable will not answer that question until grade 7 at the earliest, and then for one lesson a week. Children who start at 7 or 8 at home arrive at the ITG course already able to break a problem into steps, which is exactly the skill that course is meant to begin.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Live classes in English, at your child\'s own pace',
      lede: 'Every class is live, every class is in English, and the mentor adapts to the child, not the other way round.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English only, said plainly', p: 'Our mentors teach in English. We do not offer German-language lessons, and we would rather tell you now than after a trial. For a child at a bilingual or international school in Berlin this is simply the language of the classroom; for a child at a German school it is a second subject practised for free.' },
          { h3: 'Pace and accent matched', p: 'Mentors speak slowly and clearly, repeat instructions in simpler words, and get used to how each child speaks. A seven year old who answers in short English sentences, or switches to a German word in the middle, is understood and gently given the English one.' },
          { h3: 'Code is the same in any language', p: 'Scratch blocks and Python keywords do not change with the language of the lesson. A loop is a loop. Most of what a child learns is shown on the screen, built together and tried, so the English needed is smaller than parents expect.' }
        ] },
        { kind: 'p', mt: true, html: 'The mentors are based in India and teach live over video, which is why the times further down suit Berlin afternoons. Your child sees the same mentor every week, so after a few classes that person knows whether your child likes to be challenged, needs a moment before answering, or learns most easily by changing someone else\'s program first.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real Berlin project',
      h2: 'The Oberbaumbrücke bike counter: the quietest day that was not',
      lede: 'Berlin counts its bicycles. The Senate department for mobility publishes every hourly count from its permanent counters, free to reuse. Our older children use one bridge to learn the most useful habit in programming: check what is missing before you believe a record.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The workbook is called Radzähldaten in Berlin and holds one sheet per year from 2012 to 2025. For 2025 it has 8,760 rows, one for every hour, and a column for each counter. We use the two counters on the Oberbaumbrücke between Friedrichshain and Kreuzberg: east-bound and west-bound, counting since 1 June 2015.',
            'Its legend says something every child should read first: a 0 can mean no data or implausible data, and an empty cell means no data at all. In other words, the data warns you about itself.'
          ],
          rightH3: 'The question',
          right: [
            'Which day of 2025 had the fewest bikes crossing the bridge? A ten year old guesses Christmas, or a day of snow. The program gives a different answer, and finding out why is the real lesson.',
            'We give the child a small file, oberbaum_2025.csv, with three columns: the hour, the east count and the west count. The first program adds up each day and skips any hour where a count is missing, keeping a note of those hours.'
          ] },
        { kind: 'code', label: 'Version 1: add up every day', lang: 'Python', code: V1, note: 'It prints: <code>Quietest day: 2025-11-06 267</code>, <code>Busiest day: 2025-06-19 18377</code> and <code>Hours missing: {\'2025-03-30\': 1, \'2025-11-06\': 19, \'2025-11-07\': 5}</code>.' },
        { kind: 'p', mt: true, html: 'Thursday 6 November 2025 with 267 bikes looks like the quietest day of the year. But the program also says that 19 hours of that day are missing. Looking at the file shows what happened: the east-bound counter recorded nothing from 05:00 on 6 November to 04:00 the next morning, 24 hours in a row, while the west-bound counter kept counting normally. The 267 bikes are only the five night hours before the gap. Nobody stayed home; a sensor stopped.' },
        { kind: 'p', html: 'The third missing hour is stranger, and children love it. On 30 March 2025, at 02:00, both counters are empty. That was the night summer time began: German clocks jumped from 02:00 straight to 03:00, so that hour never existed. A missing value is not always a fault. Sometimes it is the truth.' },
        { kind: 'code', label: 'Version 2: only count days we can trust', lang: 'Python', code: V2, note: 'It prints: <code>Days we can trust: 363</code> and <code>Quietest real day: 2025-12-25 1377</code>. Christmas Day after all, with 1,377 crossings.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Average bikes per hour on the Oberbaumbrücke in 2025, both directions (our calculation)', head: ['Hour', 'Monday to Friday', 'Saturday', 'Sunday'], rows: [
          ['03:00', '24', '81', '93'],
          ['08:00', '801', '143', '107'],
          ['13:00', '627', '657', '625'],
          ['18:00', '1,127', '742', '660']
        ] },
        { kind: 'source', html: 'Data: Senatsverwaltung für Mobilität, Verkehr, Klimaschutz und Umwelt, Radzähldaten in Berlin, sheet Jahresdatei 2025, counters 05-FK-OBB-O and 05-FK-OBB-W, licence Datenlizenz Deutschland Zero 2.0. Averages and totals are our own, from the 8,735 hours where both directions have a count; across them the two counters recorded 4,032,736 crossings. The busiest month was June, the quietest February.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Make a tally chart of cars passing your window for ten minutes. Then cover two minutes with a hand. Is the covered part "no cars"?',
          '<strong>Ages 8 to 10, Scratch.</strong> Store the daily totals in a list and find the smallest. Then add one fake day with a 0 and watch it win.',
          '<strong>Ages 10 to 12, Python.</strong> Run Version 1, read the missing hours, then write Version 2 yourself before looking at ours.',
          '<strong>Going further.</strong> At 08:00 on a weekday the bridge carries more than five times as many bikes as at 08:00 on a Saturday, but at 03:00 the weekend wins by almost four times. Make a chart of every hour and explain both differences.'
        ] }
      ]
    },
    {
      id: 'biber',
      eyebrow: 'A free first contest',
      h2: 'Can my child in Berlin enter the Informatik-Biber?',
      lede: 'Yes, through the school, and this year it is only days away. The Informatik-Biber is a short online puzzle contest that needs no coding at all.',
      body: [
        { kind: 'two',
          leftH3: 'What it is',
          left: [
            'The organisers, Bundesweite Informatikwettbewerbe, call the Biber Germany\'s largest school informatics competition: a free online quiz of logic puzzles for grades 3 to 13, with no prior knowledge needed. More than 580,000 pupils took part in 2025, and 2026 is its 20th year.',
            'It is short: primary pupils solve nine tasks in 30 minutes, grades 5 and 6 get twelve tasks in 35 minutes, and from grade 7 it is fifteen tasks in 40 minutes. Children can take part alone or in pairs.'
          ],
          rightH3: 'When it runs',
          right: [
            'The Biberwochen 2026 run from 9 to 20 November 2026. Schools register their pupils and run it in a lesson, so ask your child\'s teacher whether the school takes part. A practice version, the Schnupper-Biber, has been open since 14 September 2026.',
            'Results are published in December 2026, and certificates and prizes are sent in January 2027.'
          ] },
        { kind: 'p', mt: true, html: 'The Biber puzzles are about ordering, hidden rules, shortest paths and codes, the same thinking a coding class builds. We do not use or copy the real tasks; in class we write our own puzzles in the same spirit, and children who enjoy them usually enjoy the Biber. If a Berlin school does not take part, the practice puzzles are still a good free afternoon.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are classes in Berlin time?',
      lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at a time that suits your family, weekend mornings or weekday afternoons.',
      body: [
        { kind: 'table', numCols: [], caption: 'Berlin afternoon times and the mentor\'s time in India', head: ['Berlin time', 'India time, winter (until 28 March 2027)', 'India time, summer (from 28 March 2027)'], rows: [
          ['15:00', '19:30', '18:30'],
          ['16:00', '20:30', '19:30'],
          ['17:00', '21:30', '20:30'],
          ['Saturday 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'German legal time is Central European Time, UTC+1, and Central European Summer Time, UTC+2, under the Einheitenzeitgesetz; summer time ended on 25 October 2026 and begins again on 28 March 2027. India keeps UTC+5:30 all year, so India is 4 hours 30 minutes ahead of Berlin in winter and 3 hours 30 minutes ahead in summer.' },
        { kind: 'p', mt: true, html: 'When you book, you choose a time in your own clock and see it in Berlin time; the mentor sees it in theirs. School holidays in Berlin do not stop classes, though many families pause for a summer trip and pick up again in September.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a Berlin child can do at each stage',
    lede: 'Our own milestones, used to place a child in the right group and to report progress to parents.',
    table: { caption: 'Coding milestones from 6 to 12 (ours)', head: ['Stage', 'Typical age', 'The child can'], rows: [
      ['1. Sequences', '6 to 7', 'Put steps in order and make a sprite move and speak'],
      ['2. Loops and events', '7 to 9', 'Repeat actions and react to a key or a click in Scratch'],
      ['3. Variables and lists', '8 to 10', 'Keep score, store a list and find its largest value'],
      ['4. Typed code', '9 to 11', 'Write short Python programs with loops and conditions'],
      ['5. Real data', '10 to 12', 'Read a file, check it for gaps and explain a result']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the one the bike counter project teaches. A child who learns to ask "is anything missing?" will ask it about every chart in the news.',
      'Progress is reported in what your child can build and explain, never in hours spent on a screen.'
    ] },
    right: { h3: 'For children', ps: [
      'When a program gives you a surprising answer, do not celebrate yet. Look for the reason first.',
      'An empty box in a table is not the same as a zero. Always find out which one you have.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Berlin children',
    lede: 'All live, in English, with one regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Thinking first', sub: 'Ages 7 to 15', courses: [
        { code: 'BER / THINK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Puzzles and step-by-step thinking, 7 to 12, good before the Biber.' },
        { code: 'BER / THINK / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How machines learn, without adult chatbot accounts, 8 to 14.' },
        { code: 'BER / THINK / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored in Python, 10 to 15.' }
      ] },
      { num: 'II', h3: 'Games and worlds', sub: 'Ages 7 to 14', courses: [
        { code: 'BER / PLAY / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'From blocks to real code in a world they know, 7 to 12.' },
        { code: 'BER / PLAY / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Real games scripted in Luau, 8 to 14.' },
        { code: 'BER / PLAY / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Scratch, Roblox and Minecraft in one long course, 8 to 12.' }
      ] },
      { num: 'III', h3: 'Making real things', sub: 'Ages 8 to 12', courses: [
        { code: 'BER / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Working phone apps with blocks, 8 to 12.' },
        { code: 'BER / MAKE / 02', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A first website of their own, 9 to 12.' },
        { code: 'BER / MAKE / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Puzzles and games in C++, 9 to 12.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work for a Berlin family',
    lede: 'Two live classes a week, an hour each, with the same mentor. Nothing is pre-recorded and nothing is left for the child to work out alone.',
    slots: [
      { time: 'After school', l: 'Berlin afternoons, from about 15:00.' },
      { time: 'Weekends', l: 'Saturday and Sunday mornings, a calm time for younger children.' },
      { time: '1-on-1', l: 'Any agreed time, for a child who wants their own pace.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'One person who learns how your child thinks.' },
      { h3: 'Clear English', p: 'Slow, simple, repeated when needed.' },
      { h3: 'Building, not watching', p: 'The child drives the code from the first class.' },
      { h3: 'Grouped by age', p: 'Six year olds are never in a class of twelve year olds.' },
      { h3: 'Parent updates', p: 'What was built, what was hard, what comes next.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty children, or your child alone.' }
    ]
  },

  projectsH2: 'Projects from our older students',
  projectsLede: 'Children who start young go on to build real things. A few projects by our older students are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Parents\' and students\' Google reviews, exactly as they wrote them.',

  fees: {
    h2: 'Fees for Berlin families',
    lede: 'The fee is monthly and covers eight live classes. Fees are shown in euro at the European Central Bank reference rate; the payment itself is taken in US dollars, so your bank converts it and the amount on your statement can differ slightly.',
    free: ['A free first class', 'A short puzzle and a first Scratch program', 'No card needed'],
    group: ['Fifteen to twenty children of a similar age', 'One regular mentor', 'Two classes a week', 'Paid monthly, stop any month'],
    one: ['Your child and one mentor', 'Your child\'s own pace and projects', 'Times that suit your family']
  },

  faq: {
    eyebrow: 'Berlin parents ask',
    h2: 'Coding classes for kids in Berlin: common questions',
    items: [
      { q: 'Are the classes taught in German?', a: 'No. Every class is live and taught in English only. Mentors speak slowly and clearly and adapt to your child\'s pace and accent, so children who are still learning English can follow. Scratch and Python look the same in any language.' },
      { q: 'What age can my child start coding?', a: 'From 6. Our Coding for Kids course takes children from 6 to 12 in groups by age and starts with Scratch blocks, so no typing or reading of long texts is needed at first. From about 9, children can move to typed Python.' },
      { q: 'Do Berlin schools teach coding?', a: 'Not as a compulsory subject in Grundschule. The Gesellschaft für Informatik names Berlin among six Länder without Informatik that is compulsory for all pupils. Berlin pupils take a one-hour ITG course in grade 7 or 8, and Informatik is an elective, usually in grades 9 and 10.' },
      { q: 'Is my child too young if they are only in grade 1 or 2?', a: 'Usually not. Six and seven year olds start with stories and simple games in Scratch, where blocks snap together and nothing has to be typed. The mentor keeps lessons short and playful, and you will see after the free first class whether your child is ready.' },
      { q: 'When are classes in Berlin time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most Berlin children take classes between about 15:00 and 18:00, or on weekend mornings.' },
      { q: 'What is the Informatik-Biber and can my child take part?', a: 'A free online puzzle contest for grades 3 to 13 that needs no prior knowledge. In 2026 it runs from 9 to 20 November and schools register their pupils, so ask your child\'s teacher. A practice version, the Schnupper-Biber, has been open since 14 September 2026.' },
      { q: 'Are the teachers in Berlin?', a: 'No. Our mentors are based in India and teach live online. That is why classes fit Berlin afternoons: 16:00 in Berlin is 20:30 in India in winter. Your child sees the same mentor every week.' },
      { q: 'How big are the groups?', a: 'Group batches have fifteen to twenty children of a similar age. If you would like your child to have a mentor to themselves, the one-to-one plan gives two private classes a week at times you choose.' },
      { q: 'What does it cost, and in which currency?', a: 'Fees are monthly and shown on this page in euro at the European Central Bank reference rate. The payment is taken in US dollars and converted by your bank, so the amount on your statement can differ slightly. The first class is free and needs no card.' },
      { q: 'What will my child actually build?', a: 'Younger children build games and animated stories in Scratch. Children from about 9 write Python programs, draw with code and, around 10 to 12, work with real data such as the Oberbaumbrücke bike counter on this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Berlin families thinking about coding.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for families in Germany.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Where most young children begin.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What typed code looks like at ten.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools allow which ages.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'More project ideas by age.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is a short puzzle and a first Scratch program. The mentor sees how your child thinks and how comfortable they are in English, and suggests the course and group that fit.',
    readFirst: 'Before you book, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our live classes, and <a class="ag-inline-link" href="/courses">all courses</a> lists every syllabus.',
    note: 'Classes are live online with mentors in India, taught in English only. WhatsApp is the fastest way to ask us anything, in English.',
    formNote: 'Free, with no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'An empty cell is not a zero'
  },

  personalityCss: `
.ag-root.ag-ber .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ber .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-ber .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ber .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ber .ag-code-head b { letter-spacing: 0.01em; }
.ag-root.ag-ber .ag-band-head h3 { letter-spacing: -0.004em; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (national and Berlin pages); Senatsverwaltung für Bildung, Prüfungen und Abschlüsse; Bundesweite Informatikwettbewerbe, Informatik-Biber pages and dates; Einheitenzeitgesetz and Sommerzeitverordnung; all read 2 November 2026. Senatsverwaltung für Mobilität, Verkehr, Klimaschutz und Umwelt, Radzähldaten in Berlin, Datenlizenz Deutschland Zero 2.0.',
    localProject: 'The Oberbaumbrücke bike counter: an original Python project on the 2025 hourly counts in which the apparent quietest day (6 November 2025, 267) is a 24-hour east-counter outage, the clock-change hour of 30 March 2025 is a true gap, and the corrected answer is Christmas Day with 1,377; plus screen-free and Scratch versions. Lesson family: a missing value is not a zero.',
    requiredMentions: ['oberbaum_2025.csv', 'Quietest day: 2025-11-06 267', 'Quietest real day: 2025-12-25 1377', 'Days we can trust: 363', '9 to 20 November 2026', 'one lesson a week in grade 7 or 8', 'bis zur sechsten Jahrgangsstufe', 'An empty cell is not a zero'],
    sources: [
      { claim: 'Grundschule to grade 6 in Berlin and Brandenburg.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'Berlin among six Länder without compulsory Informatik; no binding plans.', url: 'https://informatik-monitor.de/' },
      { claim: 'Berlin ITG one weekly lesson; Gymnasium Oberstufe grades 10 to 12.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/berlin' },
      { claim: 'MSA after grade 10.', url: 'https://www.berlin.de/sen/bildung/schule/pruefungen-und-abschluesse/' },
      { claim: 'Informatik-Biber facts and 2026 dates.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Berlin hourly bike counts and licence.', url: 'https://ckan.govdata.de/dataset/radzahldaten-in-berlin3fcda' }
    ],
    rejectedClaims: [
      'Any reason for the 6 November 2025 outage: not stated in the data, so none given.',
      'Naming Berlin schools or international schools as sources of students: refused.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with BWINF, the Berlin Senate or a school: none.'
    ]
  }
};
