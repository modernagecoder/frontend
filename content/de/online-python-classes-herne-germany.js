'use strict';
// Online Python classes in Herne (ag- city page, Germany cluster P6 row DE177, tier-2 slug shape online-python).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Spine: what "live online" means minute by minute, then one Python path for three ages, then a Herne pit-shaft
// project that finds the peak year of mining with an event sweep.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 Nov 2026; copies under src-pages/online-python-classes-herne-germany/):
//  - GI Informatik-Monitor 2026/27, NRW page: "An allen allgemeinbildenden Schularten wird das Pflichtfach Informatik in
//    den Jahrgangsstufen 5 und 6 unterrichtet" (fact 80); Grundkurs three hours, Leistungskurs five hours in the
//    Qualifikationsphase (81); "Der Einsatz eines Computers ist für die Bearbeitung der schriftlich Abituraufgaben nicht
//    vorgesehen" (82); G9 Gymnasien: Informatik in the Wahlpflicht grades 9 and 10 (62).
//  - KMK FER2026_27.pdf: "Nordrhein-Westfalen (3) 17.10. - 31.10. 23.12. - 06.01. -- 22.03. - 03.04. 18.05. 19.07. - 31.08."
//    (fact 275), "Stand: 09.10.2025" (286).
//  - bwinf.de: Bundeswettbewerb round 1 "1. September bis 23. November 2026" (146), group work allowed in round 1 (147),
//    open to young people up to 21 not yet studying or working (145); Jugendwettbewerb round 3 "Einsendeschluss ist der
//    23. November 2026" (143), participation possible from grade 3 (141); Biberwochen 9 to 20 November 2026 (133).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Herne 155,851; Nordrhein-Westfalen 18,034,454.
//  - Time: EinhZeitG para 4 (MEZ = UTC+1, MESZ = UTC+2); summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Herne, "Historische Zechenstandorte" (Standorte der (historischen) Zechen bzw. Schachtanlagen in Herne),
//    via GovData https://ckan.govdata.de/dataset/historische-zechenstandorte984d2, WFS geodaten.herne.de/geoserver/zechen,
//    licence Datenlizenz Deutschland Zero 2.0 (dl-de-zero-2.0 on every resource). Downloaded 3 November 2026 as GeoJSON,
//    14,413 bytes, sha256 723d3aa7...ba6a4b9c82; 80 features with fields o_name, betrieb_v (from), betrieb_b (until).
// Our own calculations (scratchpad de/w/T5/herne: v1.py, v2.py, extra.py, python3 -I): one site (Mont Cenis 5) has no
// years, 79 have both. v1 prints "Shafts with both years: 79", "Most shafts at work at once: 75", "In the years: 1930 to
// 1931". v2 prints "Events to sort: 158", "Peak: 75 first reached in 1930", "Still working after the last event: 0".
// Shafts at work: 1860 5, 1880 20, 1900 40, 1920 72, 1930 75, 1950 68, 1960 67, 1968 42, 1975 23, 1980 9, 1990 6,
// 2000 1, 2001 0. Closures: 1967 16, 1973 11, 1978 8. Sites named Wetterschacht: 16. Closed before 1970: 44.
// Lesson family: sweep events in time order with a running count, and decide how ties sort (a closing year before an
// opening year).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'shafts = []',
  'with open("herne_shafts.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["opened"] and row["closed"]:',
  '            shafts.append((row["name"], int(row["opened"]), int(row["closed"])))',
  '',
  'print("Shafts with both years:", len(shafts))',
  '',
  'working = {}',
  'for year in range(1850, 2001):',
  '    working[year] = sum(1 for _, a, b in shafts if a <= year <= b)',
  '',
  'peak = max(working.values())',
  'peak_years = [y for y in working if working[y] == peak]',
  'print("Most shafts at work at once:", peak)',
  'print("In the years:", peak_years[0], "to", peak_years[-1])'
].join('\n');

const V2 = [
  'import csv',
  '',
  'events = []',
  'with open("herne_shafts.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["opened"] and row["closed"]:',
  '            events.append((int(row["opened"]), +1))',
  '            events.append((int(row["closed"]) + 1, -1))',
  '',
  'events.sort()',
  'running = 0',
  'peak = 0',
  'for year, change in events:',
  '    running += change',
  '    if running > peak:',
  '        peak, peak_year = running, year',
  '',
  'print("Events to sort:", len(events))',
  'print("Peak:", peak, "first reached in", peak_year)',
  'print("Still working after the last event:", running)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Herne: online Python' },
  slug: 'online-python-classes-herne-germany',
  code: 'phe',
  accent: '#973B22',
  accentRationale: 'Online Python classes, Herne: a rust red #973B22 for the iron headframes over the old pit shafts in the project; contrast 5.75 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Online Python classes in Herne',
  title: 'Online Python Classes in Herne: Live and in English',
  description: 'Online Python classes in Herne, live in English for children from 9, teens and adults: how a live lesson runs, what NRW teaches, and a Python project on Herne pits.',
  ogDescription: 'What a live online Python class in Herne really involves, the Python path for a child, a teenager and an adult, what NRW Informatik covers, and a Python project on the City of Herne\'s record of its old pit shafts.',
  twitterDescription: 'Live online Python in English for Herne: how a class runs, NRW Informatik, and a pit-shaft data project.',
  pageName: 'Online Python Classes in Herne',
  webPageDescription: 'A guide for Herne families and adult learners to live online Python classes in English, with NRW Informatik facts from the Gesellschaft für Informatik, the KMK holiday table for 2026/27, BWINF contest dates and an original Python project on the City of Herne\'s historic pit-shaft dataset.',
  courseDescription: 'Live online Python classes in English for learners in Herne: children from 9, teenagers and adults, from first programs to real data files, in a group of fifteen to twenty or one to one, with a regular mentor who matches the learner\'s pace.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'North Rhine-Westphalia', href: '/coding-classes-in-north-rhine-westphalia' }],
  crumbLabel: 'Online Python in Herne',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#online', label: 'Online' },
    { href: '#shafts', label: 'Mine data' },
    { href: '#nrw', label: 'NRW school' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Herne &middot; Python, live online &middot; Ages 9 to adult',
  h1: 'Online Python classes in Herne',
  lede: 'An online class can mean a video you watch alone, or a teacher who sees your code the moment you type it. Ours is the second kind. This page shows what happens in a live Python lesson from the first minute to the last, which Python route suits a child, a teenager or an adult in Herne, what the NRW timetable does and does not cover, and a Python project built on the City of Herne\'s own list of its old pit shafts.',
  secondaryCta: { href: '#shafts', label: 'See the pit-shaft project' },
  wa: 'Hello Modern Age Coders, I am in Herne and would like to learn Python live online in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; a mentor who reads your code as you write it',
  spec: [
    ['Who', 'Children from 9, teenagers, adults'],
    ['Language', 'Python 3, typed from day one'],
    ['Format', 'Live video, shared screen, two classes a week'],
    ['Group size', 'A batch of fifteen to twenty, or solo'],
    ['Mentors', 'Based in India, teaching in English'],
    ['First class', 'Free, with no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Online Python classes in Herne from Modern Age Coders are live video lessons in English, taught in real time by a mentor who sees your code as you type it and matches your pace and accent. Children from 9, teenagers and adults follow one Python path from first programs to real data files, either one to one or in a batch of fifteen to twenty, at Herne afternoon and weekend times.',

  picks: {
    eyebrow: 'Three ways into Python',
    h2: 'Which Python course fits which learner in Herne?',
    lede: 'The language is the same at every age. What changes is the speed, the projects and how much maths sits underneath.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PHE / 01', title: 'Python and AI for Kids', note: 'For children of nine to twelve. Turtle drawings, small games and first data lists, then simple AI ideas, typed rather than dragged.' },
      { course: 'python-complete-masterclass-teens', code: 'PHE / 02', title: 'Python for Teens', note: 'Ages 13 to 17. From variables to files, functions and classes, with problems that line up with NRW Informatik from grade 9.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PHE / 03', title: 'Python Masterclass for Adults', note: 'For students and working adults. Zero to advanced, with data handling, testing and automation of real tasks.' }
    ]
  },

  sections: [
    {
      id: 'online',
      eyebrow: 'Live, not recorded',
      h2: 'What happens in a live online Python class?',
      lede: 'People in Herne often ask us whether "online" means a course of videos. It does not. Here is one ordinary hour, step by step.',
      body: [
        { kind: 'ol', items: [
          '<strong>Minutes 0 to 5: the warm-up.</strong> The mentor opens the video call, greets each learner by name and puts a two-line puzzle on the shared screen. Nobody has to speak first; anyone can type a guess in the chat.',
          '<strong>Minutes 5 to 20: one new idea.</strong> The mentor writes a short program live, explains one new thing (a loop, a dictionary, reading a file) and runs it. Then the program is broken on purpose, and the group says what will go wrong before it does.',
          '<strong>Minutes 20 to 45: the learner types.</strong> Each learner writes their own version in their own editor and shares the screen when stuck. The mentor reads the code line by line with them, asks what they expected and lets them find the mistake.',
          '<strong>Minutes 45 to 55: show and explain.</strong> Two or three learners show a working program and say in their own words why it works. Explaining is where most of the learning settles.',
          '<strong>Minutes 55 to 60: what comes next.</strong> A small task for the days before the next class, and for younger learners a short note to parents on what was built.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'English, at your speed', p: 'Lessons are taught in English only. The mentor slows down, rephrases and checks understanding, and quickly learns how each learner speaks. A Herne pupil whose English is still growing practises it for real every class, around code that looks the same in any language.' },
          { h3: 'Thinking before typing', p: 'We teach learners to plan a program in plain words first and to predict its output before running it. Copying a finished answer, from a classmate or from an AI tool, is never the goal; being able to explain every line is.' },
          { h3: 'What you need at home', p: 'A laptop or desktop computer, a stable connection and a free Python editor that the mentor helps you install in the first class. A tablet is fine for watching but awkward for typing, so we suggest a keyboard from the start.' }
        ] },
        { kind: 'p', mt: true, html: 'The mentors work from India over a live video link, so the slots further down land in Herne afternoons and at weekends. In a group the same mentor stays with the batch; one-to-one learners keep the same mentor too, so the person reading your code next month already knows how you think.' }
      ]
    },
    {
      id: 'path',
      eyebrow: 'One language, three routes',
      h2: 'What does a Python path look like for a child, a teenager and an adult?',
      lede: 'Our own outline of how the same language is taught at three ages, with the first program each learner usually finishes.',
      body: [
        { kind: 'table', numCols: [], caption: 'Python routes by age (our outline)', head: ['Learner', 'First weeks', 'First real program', 'Later'], rows: [
          ['Child, 9 to 12', 'print, turtle drawing, simple loops', 'A drawing that repeats a shape with a loop', 'Games with scores, lists, a first look at data'],
          ['Teenager, 13 to 17', 'Variables, conditions, functions', 'A quiz that keeps score and checks answers', 'Files, dictionaries, classes, small data projects'],
          ['Adult', 'Syntax quickly, then working habits', 'A script that tidies a folder or a spreadsheet export', 'Testing, automation, data analysis, APIs']
        ] },
        { kind: 'source', html: 'This table is ours: it describes how our Python courses are ordered, not any school curriculum. The pit-shaft project below is the point where all three routes meet: a child can count shafts on paper, a teenager can write Version 1, and an adult can write Version 2 and explain why it is faster.' },
        { kind: 'two', mt: true,
          leftH3: 'Why typed Python, not blocks',
          left: [
            'For learners of 9 and over we start with typed Python rather than block coding. Typing is slower at first, but every error message is a small lesson in reading carefully, and the habit of reading carefully is what separates someone who can code from someone who can follow a tutorial.',
            'Younger children who are not yet comfortable on a keyboard usually do better with a Scratch course first; the free first class shows which suits.'
          ],
          rightH3: 'Why a mentor, not only exercises',
          right: [
            'Most adults who try Python alone stop at the same place: the first program that works but that they cannot explain. A mentor who asks "what will this print?" before you press Run turns that point into the start of real understanding.',
            'For teenagers the same questions are the ones that matter in Informatik at school, where the written Abitur in NRW is done without a computer.'
          ] }
      ]
    },
    {
      id: 'nrw',
      tint: 'tint',
      eyebrow: 'Herne schools',
      h2: 'What does a Herne pupil learn in Informatik at school?',
      lede: 'Herne is in North Rhine-Westphalia, which is one of the Länder with Informatik on the compulsory timetable, but only for two school years. The facts below come from the Gesellschaft für Informatik and the KMK.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik for a Herne pupil, by grade (NRW rules)', head: ['Grades', 'Informatik on the timetable'], rows: [
          ['1 to 4', 'Grundschule: no Informatik subject'],
          ['5 and 6', 'Compulsory Informatik at all general school types'],
          ['7 and 8', 'No compulsory Informatik'],
          ['9 and 10', 'At G9 Gymnasien, Informatik in the Wahlpflicht area, if chosen'],
          ['Qualifikationsphase', 'Grundkurs three hours a week, or Leistungskurs five hours, if offered'],
          ['Abitur', 'Written tasks set centrally; no computer in the written exam']
        ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, page for Nordrhein-Westfalen, which says Informatik is a Pflichtfach "in den Jahrgangsstufen 5 und 6" and that a computer is not intended for the written Abitur tasks; read on 2 November 2026. Population: Destatis, Gemeindeverzeichnis, 31 December 2024: Herne 155,851, North Rhine-Westphalia 18,034,454.' },
        { kind: 'two', mt: true,
          leftH3: 'The gap after grade 6',
          left: [
            'A Herne child meets Informatik in grades 5 and 6, then usually not again as a fixed subject until an elective in grade 9 or a course in the Oberstufe. Two years is a good start, but it is often the moment a child discovers they like programming and then has nowhere to take it.',
            'Python is a natural next step at that point: it reads almost like English, it is used at universities and in work, and it fits the problem-solving style the school course begins.'
          ],
          rightH3: 'Abitur on paper',
          right: [
            'If a Herne teenager chooses Informatik as a Grundkurs or Leistungskurs, the written Abitur is solved without a computer. That rewards pupils who can trace code by hand and plan before they type, exactly the habits our live classes practise. We teach alongside school: the school course and its teacher remain the ones that count for grades.',
            'Our Informatik Abitur course in English covers the Java and Python side of that work for pupils who want extra practice.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'NRW school holidays in 2026/27 (KMK table)', head: ['Holiday', 'Dates'], rows: [
          ['Autumn', '17 October to 31 October 2026'],
          ['Christmas', '23 December 2026 to 6 January 2027'],
          ['Easter', '22 March to 3 April 2027'],
          ['Whitsun', '18 May 2027'],
          ['Summer', '19 July to 31 August 2027']
        ] },
        { kind: 'source', html: 'Source: KMK, Ferien im Schuljahr 2026/2027, Stand 9 October 2025, first and last holiday days. Our classes carry on through school holidays; families can pause and pick up again.' }
      ]
    },
    {
      id: 'shafts',
      eyebrow: 'A real Herne project',
      h2: 'How many Herne pit shafts were working at the same time?',
      lede: 'Herne grew on coal. The city publishes its list of historic colliery shafts as open data, free to reuse, and the years each one worked. That is enough for a proper Python question with a surprising answer and a lesson about order.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is called Historische Zechenstandorte and comes from the City of Herne\'s geodata service, listed on GovData under the licence Datenlizenz Deutschland Zero 2.0. We downloaded it on 3 November 2026: 80 shaft sites, each with a name such as Shamrock 4 or Mont Cenis 2 "Carl", a year it started working and a year it stopped.',
            'One site, Mont Cenis 5, has no years at all. The other 79 have both. Sixteen names end in Wetterschacht: shafts that carried fresh air into the mine rather than coal out of it.'
          ],
          rightH3: 'The question',
          right: [
            'In which year were the most shafts at work at the same time, and how many? A natural guess is the 1950s, the decade people often picture as the height of coal. The program disagrees.',
            'We turn the GeoJSON into a small file, herne_shafts.csv, with three columns: name, opened, closed. Version 1 does the obvious thing: for every year from 1850 to 2000 it checks every shaft.'
          ] },
        { kind: 'code', label: 'Version 1: check every shaft in every year', lang: 'Python', code: V1, note: 'It prints <code>Shafts with both years: 79</code>, <code>Most shafts at work at once: 75</code> and <code>In the years: 1930 to 1931</code>.' },
        { kind: 'p', mt: true, html: 'The peak is 1930 and 1931, with 75 of the 79 shafts working, not the 1950s. By 1950 the count had already fallen to 68. Version 1 is correct but wasteful: it makes 151 passes over the list, one per year, and most years nothing changes. A professional would ask a different question: when does the count change at all?' },
        { kind: 'p', html: 'The count changes only when a shaft opens or closes. So Version 2 turns each shaft into two events: plus one in the year it opened, and minus one in the year after it closed, because a shaft that closed in 1967 was still working during 1967. Sort the events, walk through them once with a running total, and keep the highest value seen.' },
        { kind: 'code', label: 'Version 2: sort the events and sweep once', lang: 'Python', code: V2, note: 'It prints <code>Events to sort: 158</code>, <code>Peak: 75 first reached in 1930</code> and <code>Still working after the last event: 0</code>.' },
        { kind: 'p', mt: true, html: 'The answers agree, which is the first thing to check whenever you replace a slow program with a clever one. The hidden detail is the sort. Python sorts the pairs by year first and then by the second number, so in any year a closing event, minus one, comes before an opening event, plus one. Had the openings come first, the running total would briefly count a shaft that had already stopped, and in a different dataset the peak could be one too high. Deciding how ties sort is part of the program, not a detail.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Herne shafts at work in selected years (our calculation)', head: ['Year', 'Shafts working'], rows: [
          ['1860', '5'], ['1880', '20'], ['1900', '40'], ['1920', '72'], ['1930', '75'], ['1950', '68'], ['1960', '67'], ['1968', '42'], ['1975', '23'], ['1980', '9'], ['1990', '6'], ['2000', '1']
        ] },
        { kind: 'source', html: 'Data: Stadt Herne, Historische Zechenstandorte, Datenlizenz Deutschland Zero 2.0, downloaded 3 November 2026. Counts are our own, from the 79 sites with both years, counting a shaft as working in its first and last year. The single busiest closing year in the list is 1967, with 16 shafts; the last one, Ewald 2, is listed as working until 2000.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 11.</strong> Take ten shafts from the table on paper, draw each as a bar on a timeline, and count the bars over 1930. Then over 1970.',
          '<strong>Ages 12 to 15.</strong> Run Version 1, then change it to print the year with the most closures. Predict the answer from the source note before you run it.',
          '<strong>Ages 16 and up.</strong> Swap the minus one and plus one so openings sort first, and find out whether the peak changes on this data. Then build a tiny test file where it does.',
          '<strong>Adults.</strong> Time both versions on a list of 80,000 made-up shafts and explain the difference in terms of how many steps each one takes.'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Free contests this autumn',
      h2: 'Which free informatics contests can a Herne pupil enter in November 2026?',
      lede: 'Three national contests run by Bundesweite Informatikwettbewerbe have dates this month. We are not connected to them; we describe them because they are free and suit learners who like Python.',
      body: [
        { kind: 'table', numCols: [], caption: 'BWINF contests with November 2026 dates', head: ['Contest', 'Who', 'Date in 2026'], rows: [
          ['Informatik-Biber', 'Grades 3 to 13, through the school', 'Biberwochen 9 to 20 November 2026'],
          ['Jugendwettbewerb Informatik, round 3', 'Possible from grade 3; round 3 uses the two junior tasks of the Bundeswettbewerb', 'Closing date 23 November 2026'],
          ['Bundeswettbewerb Informatik, round 1', 'Young people up to 21 not yet studying or working', '1 September to 23 November 2026']
        ] },
        { kind: 'source', html: 'Source: bwinf.de pages for the Biber, the Jugendwettbewerb (2026 edition) and the Bundeswettbewerb, read on 2 November 2026. In round 1 of the Bundeswettbewerb, group work is allowed and welcome; round 2, from early 2027, must be done alone.' },
        { kind: 'p', mt: true, html: 'We never use or copy the organisers\' tasks. In class we write our own problems in the same spirit, like the shaft sweep above, and a learner who wants to enter is pointed to the organisers\' free archive of past rounds. For the Biber, ask the class teacher whether the school is registered.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When do online Python classes run in Herne time?',
      lede: 'Herne keeps German time, which changes twice a year; India does not. The table shows what that means for a class time.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Herne times and the mentor\'s clock in India', head: ['In Herne', 'In India until 27 March 2027', 'In India after the March 2027 change'], rows: [
          ['Monday 14:45', '19:15', '18:15'],
          ['Thursday 16:15', '20:45', '19:45'],
          ['Sunday 10:15', '14:45', '13:45']
        ] },
        { kind: 'source', html: 'German law (the Einheitenzeitgesetz) sets MEZ at UTC+1 for winter and MESZ at UTC+2 for summer. The clocks went back on 25 October 2026 and go forward again on 28 March 2027. Indian clocks stay at UTC+5:30 all year: a gap of four and a half hours to Herne in winter, three and a half in summer. The rows are examples only; no batch time is fixed here.' },
        { kind: 'p', mt: true, html: 'When you book, the times you see are already in your own clock. Adults in Herne often prefer an early evening or a weekend morning; school pupils usually take a slot after lessons end.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What can a Python learner do at each stage?',
    lede: 'Our milestones, used to place each learner and to report progress. They are ours, not a school standard.',
    table: { caption: 'Python milestones (ours)', head: ['Stage', 'The learner can'], rows: [
      ['1. Statements', 'Print, calculate and store values, and predict the output of four lines'],
      ['2. Decisions and loops', 'Write a loop with a condition and say how many times it runs'],
      ['3. Collections', 'Use lists and dictionaries to count and look things up'],
      ['4. Files and functions', 'Read a CSV file, split work into functions, handle a missing value'],
      ['5. Algorithms', 'Replace a slow method with a faster one and prove both agree']
    ] },
    left: { h3: 'For parents and adult learners', ps: [
      'Stage 5 is the shaft sweep. Being able to say why two programs give the same answer is a better sign of progress than any number of finished exercises.',
      'Reports describe what the learner built and can explain, not the hours spent online.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you run a program, say out loud what it will print. Then run it and compare.',
      'When two events happen in the same year, ask which one your program sees first.'
    ] }
  },

  catalogue: {
    eyebrow: 'More with Python',
    h2: 'Nine more courses for Herne learners',
    lede: 'Every one is taught live and in English by a mentor who stays with you, solo or in a batch.',
    bands: [
      { num: 'I', h3: 'Alongside NRW school', sub: 'Grades 5 to 13', courses: [
        { code: 'PHE / SCH / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Klasse 5 to 10 in English, from the NRW grades 5 and 6 course onwards.' },
        { code: 'PHE / SCH / 02', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'Java and Python practice for the Oberstufe, with tracing on paper.' },
        { code: 'PHE / SCH / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics contests', blurb: 'Biber, BwInf and BWKI preparation with our own problems.' }
      ] },
      { num: 'II', h3: 'Python with data', sub: 'Ages 10 and up', courses: [
        { code: 'PHE / DAT / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Fractions, graphs and primes checked with code, 10 to 15.' },
        { code: 'PHE / DAT / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real datasets, charts and a first model.' },
        { code: 'PHE / DAT / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic, data structures and algorithms, step by step.' }
      ] },
      { num: 'III', h3: 'For adults', sub: 'Students and professionals', courses: [
        { code: 'PHE / ADU / 01', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP preparation', blurb: 'Python Institute exam topics, practised live.' },
        { code: 'PHE / ADU / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts that save hours of repetitive office work.' },
        { code: 'PHE / ADU / 03', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL and Python for real reporting.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How do live Python classes fit a Herne week?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Herne afternoons, once lessons are over.' },
      { time: 'Evenings', l: 'Early evening slots that suit adults after work.' },
      { time: '1-on-1', l: 'A time agreed with your own mentor.' }
    ],
    cells: [
      { h3: 'Live every time', p: 'A real mentor, a real call, your own code on screen.' },
      { h3: 'Typed Python', p: 'Keyboard from the first lesson, errors read together.' },
      { h3: 'One mentor', p: 'The same person each week, who knows your habits.' },
      { h3: 'Plain English', p: 'Rephrased and repeated until it lands.' },
      { h3: 'Your own pace', p: 'Faster or slower than the group, one to one.' },
      { h3: 'Real data', p: 'Projects on open data from Herne and NRW.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'A few projects from our older students; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more of them.',
  reviewsLede: 'Google reviews from students and parents, quoted as written.',

  fees: {
    h2: 'Fees for online Python in Herne',
    lede: 'You pay monthly for eight live classes. We show fees in euro, worked out at the European Central Bank reference rate, but the charge itself is made in US dollars, so your bank does the conversion and your statement may differ by a little.',
    free: ['A free first class', 'A short Python task and a chat about goals', 'No card required'],
    group: ['Fifteen to twenty learners of a similar level', 'One regular mentor', 'Two live classes a week', 'Monthly, cancel any month'],
    one: ['You and one mentor', 'Your own projects and pace', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Herne learners ask',
    h2: 'Online Python classes in Herne: questions and answers',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach only in English, always live. Your mentor keeps a clear, steady speed, gets used to your accent and puts a hard sentence another way when needed. Python keywords are English words anyway, so the code itself does not change.' },
      { q: 'Is an online Python class just a set of videos?', a: 'No. Each class is a live video call with a mentor who watches you write code, answers questions as they come up and asks you to explain your program. Nothing replaces the live lesson.' },
      { q: 'What age can someone in Herne start Python with you?', a: 'Children usually start typed Python from about 9. Younger children often begin with Scratch first. There is no upper age limit: many of our Python learners are adults.' },
      { q: 'Does Python help with Informatik at a Herne school?', a: 'It can. NRW teaches compulsory Informatik in grades 5 and 6, and later as an elective or Oberstufe course. Our classes teach alongside school, and the school course and its teacher remain what counts for grades.' },
      { q: 'When are classes held in Herne time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils often choose an afternoon slot, adults an early evening or a weekend morning.' },
      { q: 'Where are the mentors based?', a: 'In India. They teach you live over video. Indian clocks run four and a half hours ahead of Herne in winter and three and a half in summer, so a Herne afternoon is an Indian evening.' },
      { q: 'What computer do I need?', a: 'A laptop or desktop with a keyboard, a stable internet connection and a free Python editor. The mentor helps you install it in the first class.' },
      { q: 'How big are the groups?', a: 'A batch holds fifteen to twenty learners at a similar level. Prefer a mentor of your own? Then choose one to one: two private lessons each week, at hours you pick.' },
      { q: 'How are fees charged?', a: 'Once a month. This page lists the fee in euro using the reference rate of the European Central Bank; the charge is made in US dollars and converted by your own bank, so a small difference on the statement is normal. Your first lesson costs nothing.' },
      { q: 'Do you use AI tools to write the code?', a: 'Learners write their own code. We teach how to think through a problem and explain every line, not how to copy an answer from a person or a chatbot. Adults later learn to check AI-written code with tests.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Python learners in Herne and across Germany.',
    items: [
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'The NRW rules and dates in one place.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'Our Python courses for learners anywhere in Germany.' },
      { href: '/python-classes-for-kids-germany', label: 'Python classes for kids', p: 'Typed code for children from about nine.' },
      { href: '/coding-classes-for-adults-germany', label: 'Coding for adults', p: 'Starting to code later in life.' },
      { href: '/math-and-coding-competitions-germany', label: 'Competitions in Germany', p: 'Maths and informatics contests by date.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live lessons explained.' }
    ]
  },

  start: {
    h2: 'Try a free live Python class',
    lede: 'In the first class the mentor sets one short Python task, watches how you approach it and how comfortable you are following English, then suggests a course and a group.',
    readFirst: 'If you would like to read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a live lesson, and <a class="ag-inline-link" href="/courses">all courses</a> has every syllabus.',
    note: 'Herne learners are taught from India, live, and only in English. For a quick question, message us on WhatsApp in English.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-course-germany', label: 'Python in Germany' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/coding-classes-for-adults-germany', label: 'Coding for adults' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'North Rhine-Westphalia' },
        { href: '/math-and-coding-competitions-germany', label: 'Competitions' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Closings sort before openings'
  },

  personalityCss: `
.ag-root.ag-phe .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-phe .ag-capsule { border-left-width: 6px; }
.ag-root.ag-phe .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-phe .ag-steps li { margin-bottom: 0.4rem; }
.ag-root.ag-phe .ag-table caption { text-align: left; font-style: italic; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); KMK Ferien im Schuljahr 2026/2027; Bundesweite Informatikwettbewerbe pages for the Biber, Jugendwettbewerb and Bundeswettbewerb; Destatis Gemeindeverzeichnis 31.12.2024; Einheitenzeitgesetz; all read 2 November 2026. Stadt Herne, Historische Zechenstandorte, Datenlizenz Deutschland Zero 2.0, downloaded 3 November 2026.',
    localProject: 'Herne pit shafts: an original Python project on the City of Herne\'s 80 historic shaft sites (79 with years) that finds the peak of 75 shafts working in 1930 and 1931, first by checking every year, then by an event sweep (158 events) whose tie order puts closings before openings. Lesson family: sweep events in time order and decide how ties sort.',
    requiredMentions: ['herne_shafts.csv', 'Most shafts at work at once: 75', 'In the years: 1930 to 1931', 'Events to sort: 158', 'Peak: 75 first reached in 1930', 'Historische Zechenstandorte', 'Herne 155,851', 'Closings sort before openings'],
    sources: [
      { claim: 'NRW compulsory Informatik in grades 5 and 6; Grundkurs and Leistungskurs hours; no computer in the written Abitur.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'NRW school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Bundeswettbewerb Informatik round dates and eligibility.', url: 'https://bwinf.de/bundeswettbewerb/' },
      { claim: 'Jugendwettbewerb Informatik 2026 round 3 closing date.', url: 'https://bwinf.de/jugendwettbewerb/2026/' },
      { claim: 'Herne historic shaft sites and licence.', url: 'https://ckan.govdata.de/dataset/historische-zechenstandorte984d2' },
      { claim: 'Herne and NRW population, 31 December 2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'That every site in the layer lies inside today\'s Herne boundary: the layer is the city\'s, but we did not test each point against the boundary, so the page says only "the City of Herne\'s list".',
      'Reasons for individual closures: not in the data, so none given.',
      'Any link between Modern Age Coders and BWINF, the City of Herne or a school: none.',
      'German-language teaching: classes are in English only, and the page says so.'
    ]
  }
};
