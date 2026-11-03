'use strict';
// Online Python classes in Oberhausen (ag- city page, Germany cluster P6 row DE162, tier-2 shape online-python = live online
// explained, Python path). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors who
// match the learner's pace and accent; euro shown, USD charged.
// Spine: the moment Python "clicks" for most learners is the first function that works on more than one thing. The page
// explains how a live online class gets a learner there, then shows it on five visitor files the city of Oberhausen
// publishes, where the fifth file breaks the function and the fix is to make the function smarter, not to copy it.
// Sources (copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/online-python-classes-oberhausen-germany/):
//  - GI Informatik-Monitor 2026/27, NRW page (infmon-nordrhein-westfalen): "An allen allgemeinbildenden Schularten wird das
//    Pflichtfach Informatik in den Jahrgangsstufen 5 und 6 unterrichtet."; Hauptschule Wahlpflicht 7 to 10 up to eight hours;
//    Realschule Wahlpflicht Informatik within 14 hours, "In der Regel findet dieses durchgängig dreistündig statt."; Gesamt-
//    and Sekundarschule within twelve hours, usually three hours; Gymnasium (G9) grades 9 and 10 "im Gesamtumfang von sechs
//    Wochenstunden eigenständig oder als Kombinationsfach verbindlich angeboten"; Einführungsphase three-hour Grundkurs;
//    Qualifikationsphase GK three hours, LK five hours (facts 80, 81).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025): "Nordrhein-Westfalen (3) 17.10. - 31.10. 23.12. - 06.01. -- 22.03. - 03.04. 18.05.
//    19.07. - 31.08." (fact 275).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Oberhausen 213,646; Nordrhein-Westfalen 18,034,454; Duisburg 502,270;
//    Essen 574,682; Mülheim an der Ruhr 173,050; Bottrop 118,535.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Oberhausen via Open.NRW and GovData (publisher "Stadt Oberhausen", modified 2026-09-30), licence Datenlizenz
//    Deutschland Namensnennung 2.0 (dl-by-de/2.0) on every resource: "Besucher*innen im Hochseilgarten Oberhausen seit 2006",
//    "Besucher*innen des LVR-Industriemuseums Oberhausen seit 2000", "Besucher*innen des städtischen Hallenbades Oberhausen
//    seit 2008", "Besucher*innen bei den Internationalen Kurzfilmtagen Oberhausen seit 2000", "Besucher*innen im Theater
//    Oberhausen seit Spielzeit 2004/2005". CSVs from www.duva-server.de/obis2dcat/... content.csv downloaded 3 November 2026
//    and saved under short names (hochseilgarten.csv 824 bytes, industriemuseum.csv 573, hallenbad.csv 1,366,
//    kurzfilmtage.csv 1,574, theater.csv 1,816), semicolons, UTF-8. First column "Jahr" in four files and "Spielzeit Theater
//    Oberhausen" in the theatre file; total column "Besucher*innen insgesamt" in all five. The Ludwig Galerie file is not used
//    (its 2023 row's parts do not match its total).
// Our own calculations (scratchpad de/w/T3/oberhausen/run/v1.py, v2.py, python3 -I, Python 3.14.8):
//  v1 prints four lines, then "KeyError: 'Jahr'":
//   "hochseilgarten.csv peak 2009 48040 latest 2025 7962", "industriemuseum.csv peak 2010 60336 latest 2021 7842",
//   "hallenbad.csv peak 2009 181285 latest 2025 162926", "kurzfilmtage.csv peak 2016 20000 latest 2025 13809".
//  v2 adds "theater.csv peak 2016/2017 65802 latest 2024/2025 44071".
// Lesson family: write one function and reuse it across files; when a file breaks it, generalise the function rather than
// copying the code.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'def visitors(path):',
  '    counts = {}',
  '    with open(path, encoding="utf-8") as f:',
  '        for row in csv.DictReader(f, delimiter=";"):',
  '            counts[row["Jahr"]] = int(row["Besucher*innen insgesamt"])',
  '    return counts',
  '',
  'FILES = ["hochseilgarten.csv", "industriemuseum.csv", "hallenbad.csv",',
  '         "kurzfilmtage.csv", "theater.csv"]',
  'for path in FILES:',
  '    counts = visitors(path)',
  '    peak = max(counts, key=counts.get)',
  '    last = list(counts)[-1]',
  '    print(path, "peak", peak, counts[peak], "latest", last, counts[last])'
].join('\n');

const V2 = [
  'import csv',
  '',
  'def visitors(path):',
  '    counts = {}',
  '    with open(path, encoding="utf-8") as f:',
  '        reader = csv.DictReader(f, delimiter=";")',
  '        period = reader.fieldnames[0]',
  '        for row in reader:',
  '            counts[row[period]] = int(row["Besucher*innen insgesamt"])',
  '    return counts',
  '',
  'FILES = ["hochseilgarten.csv", "industriemuseum.csv", "hallenbad.csv",',
  '         "kurzfilmtage.csv", "theater.csv"]',
  'for path in FILES:',
  '    counts = visitors(path)',
  '    peak = max(counts, key=counts.get)',
  '    last = list(counts)[-1]',
  '    print(path, "peak", peak, counts[peak], "latest", last, counts[last])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Oberhausen: online Python' },
  slug: 'online-python-classes-oberhausen-germany',
  code: 'pob',
  accent: '#0F4D52',
  accentRationale: 'Online Python in Oberhausen: a dark petrol #0F4D52 for the steel of the Gasometer and the canal water beside it; contrast 7.73 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Online Python classes in Oberhausen',
  title: 'Online Python Classes in Oberhausen: Live, Taught in English',
  description: 'Online Python classes in Oberhausen, live in English for ages 10 to adult: how a class works online, NRW Informatik by school type, and a city visitor data task.',
  ogDescription: 'Live online Python for Oberhausen learners, in English at their own pace: what you see and do in a class, Informatik in NRW schools from grade 5, and an original project on five of the city\'s visitor files.',
  twitterDescription: 'Live online Python in Oberhausen, in English: how it works, NRW Informatik, and five city visitor files.',
  pageName: 'Online Python Classes in Oberhausen',
  webPageDescription: 'A guide for Oberhausen learners and families to live online Python classes in English, built from the GI Informatik-Monitor, the KMK holiday table and Destatis, with an original reusable-function project on the Stadt Oberhausen visitor statistics.',
  courseDescription: 'Live online Python classes in English for learners in Oberhausen: maths through Python from 10, a complete Python course for teenagers, and Python automation for adults, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'North Rhine-Westphalia', href: '/coding-classes-in-north-rhine-westphalia' }],
  crumbLabel: 'Python in Oberhausen',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#online', label: 'Online' },
    { href: '#nrw', label: 'NRW schools' },
    { href: '#files', label: 'Project' },
    { href: '#dates', label: 'Dates' }
  ],
  eyebrow: 'Oberhausen &middot; Live online Python &middot; From age 10',
  h1: 'Online Python classes in Oberhausen',
  lede: 'Most people who try to learn Python alone in an evening stop at the same place: they can follow an example, but they cannot change it to fit their own problem. Our live classes for Oberhausen learners are built around that step. A mentor watches you type, in English, and keeps you working until a piece of code is truly yours. On this page we show how the online part works, where Python meets school Informatik in North Rhine-Westphalia, and one small program that reads five of the city\'s own files.',
  secondaryCta: { href: '#files', label: 'See the five-file project' },
  wa: 'Hello Modern Age Coders, I live in Oberhausen and would like to learn Python online in English. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; over 10,000 students taught &middot; Google rating 4.9 from about 547 reviews',
  spec: [
    ['Language', 'Python 3, from the first lesson'],
    ['Who', 'Learners from 10, teenagers, adults'],
    ['How', 'Live on video, screen shared both ways'],
    ['Batch', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'In India, teaching only in English'],
    ['Trial', 'One free class']
  ],
  capsuleQ: 'At a glance',
  capsule: 'Online Python classes in Oberhausen at Modern Age Coders are live lessons, held on video and taught in English, in which a mentor follows the learner\'s screen and helps them write their own working code. Learners from 10, teenagers and adults each have their own course, from first scripts to reusable functions and real data files, in a batch of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Pick a course',
    h2: 'Which Python course suits a learner in Oberhausen?',
    lede: 'One course that uses Python to make school maths visible, one full Python course for teenagers, and one for adults who want Python to do their routine work.',
    items: [
      { course: 'maths-through-coding', code: 'POB / 01', title: 'Maths Through Coding', note: 'Ages 10 to 15, nine months. Fractions, angles and graphs explored in Python, so a pupil practises both subjects in one hour.' },
      { course: 'python-complete-masterclass-teens', code: 'POB / 02', title: 'Python for Teens', note: 'Ages 13 to 18, ten to twelve months. A full course from print() to classes, files and testing, paced for school terms.' },
      { course: 'python-ai-automation-masterclass-college', code: 'POB / 03', title: 'Python Automation and Applied AI', note: 'Adults, ten to twelve months, no experience needed. Scripts that sort files, clean spreadsheets and fetch data, then applied AI.' }
    ]
  },

  sections: [
    {
      id: 'online',
      eyebrow: 'Live online, explained',
      h2: 'How does a live online Python class work from Oberhausen?',
      lede: 'You need a computer, a headset and a link. Everything else happens in the class.',
      body: [
        { kind: 'ol', items: [
          '<strong>Before the first class.</strong> You receive a video link and a short checklist. No software needs to be bought; Python is free.',
          '<strong>In the first class.</strong> The mentor shares their screen and installs Python and a code editor with you, step by step, on your own computer. You write and run a first program before the hour is over.',
          '<strong>In every class after that.</strong> You share your screen while you type. The mentor can see each line as it appears, which is the whole point: mistakes are caught in seconds rather than discovered alone at midnight.',
          '<strong>Between classes.</strong> A short practice task, sized to finish in twenty or thirty minutes. Your code is looked at together at the start of the next class.',
          '<strong>Every few weeks.</strong> A small project of your own, explained back to the mentor. If you can explain it, you have learned it.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'What you see', p: 'Your own editor, the mentor\'s face in a corner, and whichever screen is being shared. In a group, other learners\' screens appear when they share to ask a question, and those moments teach the whole group, because everyone watches a real mistake being fixed.' },
          { h3: 'What you hear', p: 'Clear English at a calm pace. The mentor reads code aloud, line by line, and asks you to do the same. Reading code aloud is one of the quickest ways to find a bug, and it builds the vocabulary of programming at the same time.' },
          { h3: 'What you do not do', p: 'Watch for an hour. A class where the learner only watches is a video with extra steps. In our classes the learner\'s hands are on the keyboard for most of the hour, and the mentor talks less than you might expect.' }
        ] },
        { kind: 'p', mt: true, html: 'The mentors are in India and the lessons are in English only; we do not teach in German. Oberhausen families sometimes worry about that and then find it matters less than expected, because Python itself is written in English words and everything said is also shown on screen. Mentors slow down, repeat, and adjust to each learner\'s accent within the first few classes.' }
      ]
    },
    {
      id: 'nrw',
      eyebrow: 'NRW schools',
      h2: 'Do Oberhausen pupils learn Python or Informatik at school?',
      lede: 'Every pupil in North Rhine-Westphalia now has Informatik in grades 5 and 6. After that it depends on the school type and on what the pupil chooses.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik after grade 6 in North Rhine-Westphalia, by school type (2026/27)', head: ['School type', 'Grades', 'What can be offered'], rows: [
          ['All general school types', '5 and 6', 'Pflichtfach Informatik for every pupil'],
          ['Hauptschule', '7 to 10', 'Informatik as a Wahlpflicht subject, up to eight weekly hours in total'],
          ['Realschule', '7 to 10', 'Wahlpflicht Informatik, usually three hours a week throughout'],
          ['Gesamtschule and Sekundarschule', '7 to 10', 'Wahlpflicht Informatik, usually three hours a week'],
          ['Gymnasium (nine years)', '9 and 10', 'Informatik offered in the Wahlpflicht area, six weekly hours in total, alone or combined with another subject'],
          ['Oberstufe', 'EF, Q1, Q2', 'Grundkurs three hours; Leistungskurs five hours in the Qualifikationsphase']
        ] },
        { kind: 'source', html: 'From the North Rhine-Westphalia entry of the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, read on 2 November 2026. EF is the Einführungsphase, Q1 and Q2 the two years of the Qualifikationsphase.' },
        { kind: 'p', mt: true, html: 'So an Oberhausen pupil meets Informatik early, but after grade 6 it becomes a choice, and at a Realschule or Gesamtschule the elective competes with other subjects for the same hours. Pupils who do not choose it can go four years without another computing lesson. Others choose it and want more time at the keyboard than three hours a week shared with a full class.' },
        { kind: 'p', html: 'That is the gap our Python classes fill. We teach beside the school, not instead of it, and we award no grades: the school\'s own Informatik course is what counts on the report. Our <a class="ag-inline-link" href="/coding-classes-in-north-rhine-westphalia">North Rhine-Westphalia page</a> has the Land picture in full, including the central Informatik Abitur.' }
      ]
    },
    {
      id: 'path',
      eyebrow: 'The steps',
      h2: 'What are the steps from a first Python line to real programs?',
      lede: 'Each step has one idea at its centre. The step most self-taught learners skip is the fourth.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our Python steps, and the question each one answers (ours)', head: ['Step', 'Central idea', 'The learner can answer'], rows: [
          ['1', 'Values and variables', 'What is stored, and under which name?'],
          ['2', 'Decisions and repetition', 'When does this line run, and how often?'],
          ['3', 'Lists and dictionaries', 'Where do I keep many values, and how do I find one?'],
          ['4', 'Functions', 'How do I write it once and use it everywhere?'],
          ['5', 'Files', 'How do I read data someone else made?'],
          ['6', 'Errors', 'What does this traceback tell me, and where do I look?'],
          ['7', 'Projects', 'What problem of my own can I solve with all of this?']
        ] },
        { kind: 'source', html: 'Our own outline. A ten year old in Maths Through Coding reaches step 4 with graphs and shapes; a teenager or adult on a full Python course reaches step 7 with their own project.' },
        { kind: 'p', mt: true, html: 'Functions are where Python stops being a list of instructions and becomes a tool. Before functions, a learner copies code and changes a word; after them, the learner writes one piece of code that works for many inputs, and spends the saved time on harder questions. The Oberhausen project below is a function meeting five files, and the fifth file is where the real learning happens.' }
      ]
    },
    {
      id: 'files',
      tint: 'tint',
      eyebrow: 'A real Oberhausen project',
      h2: 'Can one Python function read five Oberhausen visitor files?',
      lede: 'The city of Oberhausen publishes how many people visited its high-ropes course, its swimming pool, the LVR industrial museum, the short film festival and the theatre. One function should be able to read them all. Should.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Stadt Oberhausen publishes these visitor figures through Open.NRW under the Datenlizenz Deutschland Namensnennung 2.0, which allows any reuse, including commercial, with the source named. The files were last updated on 30 September 2026; we downloaded the five CSV files on 3 November 2026 and gave them short names, such as hallenbad.csv and theater.csv.',
            'Each file has one row per year and a column called "Besucher*innen insgesamt", total visitors. The files cover different spans: the high-ropes course since 2006, the swimming pool since 2008, the museum from 2000 to 2021, the festival since 2000 and the theatre since the 2004/2005 season.'
          ],
          rightH3: 'The plan',
          right: [
            'Write one function, visitors(path), that opens any of the files and returns a dictionary from year to total. Then loop over the five files and print each one\'s peak and its latest figure.',
            'A beginner would copy the reading code five times. That works until something changes, and then it must be fixed five times. A function is written once and tested on every file.'
          ] },
        { kind: 'code', label: 'Version 1: one function, five files', lang: 'Python', code: V1, note: 'It prints four lines: <code>hochseilgarten.csv peak 2009 48040 latest 2025 7962</code>, <code>industriemuseum.csv peak 2010 60336 latest 2021 7842</code>, <code>hallenbad.csv peak 2009 181285 latest 2025 162926</code>, <code>kurzfilmtage.csv peak 2016 20000 latest 2025 13809</code>, and then stops with <code>KeyError: \'Jahr\'</code>.' },
        { kind: 'p', mt: true, html: 'Four files work; the theatre breaks the program. The traceback\'s last line, KeyError: \'Jahr\', says the dictionary for a row has no key called Jahr. Open theater.csv and the reason is in the first line: the theatre counts seasons, not years, and its first column is called "Spielzeit Theater Oberhausen", with values such as 2016/2017.' },
        { kind: 'p', html: 'There are two ways to fix it. The tempting one is to copy the function, call the copy theatre_visitors and change one word. The better one is to notice what all five files share: the period, whatever its name, is always the first column. So the function should ask the file for its first column name instead of assuming it.' },
        { kind: 'code', label: 'Version 2: the function asks the file', lang: 'Python', code: V2, note: 'It prints the same four lines and then a fifth: <code>theater.csv peak 2016/2017 65802 latest 2024/2025 44071</code>.' },
        { kind: 'table', mt: true, numCols: [2, 4], caption: 'Peak and latest totals in five Oberhausen visitor files (our program\'s output)', head: ['File', 'Peak period', 'Peak visitors', 'Latest period', 'Latest visitors'], rows: [
          ['High-ropes course', '2009', '48,040', '2025', '7,962'],
          ['LVR industrial museum', '2010', '60,336', '2021', '7,842'],
          ['City swimming pool', '2009', '181,285', '2025', '162,926'],
          ['Short film festival', '2016', '20,000', '2025', '13,809'],
          ['Theatre', '2016/2017', '65,802', '2024/2025', '44,071']
        ] },
        { kind: 'source', html: 'Data: Stadt Oberhausen via Open.NRW, visitor statistics for the Hochseilgarten, the LVR-Industriemuseum, the städtisches Hallenbad, the Internationale Kurzfilmtage and the Theater Oberhausen, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 3 November 2026. Programs and table are ours. The files carry a footnote column with the city\'s own notes on particular years. We are not connected with the city or the venues.' },
        { kind: 'p', mt: true, html: 'The table also hides a trap for the careless reader. "Latest" for the museum is 2021, four years older than the others, because that file stops there. A sentence like "all five venues are below their peak" is true, but comparing the museum\'s latest figure with the swimming pool\'s would compare different years. A good program prints the period next to every number, which ours does, and a good programmer reads it.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 10 to 12.</strong> Without running anything, guess which line of Version 1 fails on theater.csv. Then run it and check.',
          '<strong>Teenagers.</strong> Add a third column to the output: the percentage of the peak that the latest year reached. Round to one decimal place.',
          '<strong>Adults.</strong> The festival figures from 2007 to 2019 end in 000 or 500 much more often than the others. Count how many, and decide what that suggests about how they were measured.',
          '<strong>Everyone.</strong> Write a sixth file of your own with a different first column name and check that Version 2 reads it without any change.'
        ] }
      ]
    },
    {
      id: 'dates',
      eyebrow: 'Times and holidays',
      h2: 'When are live Python classes for Oberhausen learners?',
      lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Oberhausen times with the mentor\'s clock', head: ['Oberhausen', 'India, MEZ months', 'India, MESZ months'], rows: [
          ['16:10', '20:40', '19:40'],
          ['18:00', '22:30', '21:30'],
          ['Saturday 11:00', '15:30', '14:30'],
          ['Sunday 12:15', '16:45', '15:45']
        ] },
        { kind: 'source', html: 'MEZ is UTC+1 and MESZ is UTC+2, the two legal times of the Einheitenzeitgesetz. The present MEZ period started on 25 October 2026; MESZ returns on 28 March 2027. With India fixed at UTC+5:30, Indian clocks show 4 hours 30 minutes more than Oberhausen in MEZ and 3 hours 30 minutes more in MESZ. Batch times are agreed, never fixed in advance.' },
        { kind: 'table', mt: true, numCols: [2], caption: 'NRW school holidays 2026/27 and their length (KMK dates; lengths are our count of calendar days)', head: ['Holiday', 'Dates', 'Days'], rows: [
          ['Herbstferien', '17 to 31 October 2026', '15'],
          ['Weihnachtsferien', '23 December 2026 to 6 January 2027', '15'],
          ['Osterferien', '22 March to 3 April 2027', '13'],
          ['Pfingstferien', '18 May 2027', '1'],
          ['Sommerferien', '19 July to 31 August 2027', '44']
        ] },
        { kind: 'source', html: 'Holiday dates from the KMK overview Ferienregelung 2026/2027, Stand 9 October 2025, Nordrhein-Westfalen line.' },
        { kind: 'p', mt: true, html: 'Online classes carry on through the holidays unless you choose a break. Oberhausen had 213,646 inhabitants on 31 December 2024, according to Destatis, in a Land of 18,034,454. Learners from the neighbouring cities, Mülheim an der Ruhr (173,050), Bottrop (118,535), Duisburg (502,270) and Essen (574,682), are in North Rhine-Westphalia too, so they share Oberhausen\'s school calendar and can join the same batches.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Signs of progress',
    h2: 'How can you tell that a Python learner is improving?',
    lede: 'Five signs we look for. None of them is a grade, and each can be seen in the learner\'s own code.',
    table: { caption: 'Signs of progress in Python (ours)', head: ['Sign', 'What it looks like'], rows: [
      ['Predicts', 'Says what a program prints before running it'],
      ['Reads errors', 'Goes to the line a traceback names, not to the top of the file'],
      ['Reuses', 'Writes a function instead of a second copy'],
      ['Generalises', 'Changes a function so it works for a case it failed on'],
      ['Labels', 'Prints the period or unit next to every number']
    ] },
    left: { h3: 'For parents', ps: [
      'The Oberhausen project tests three of these signs in one exercise. If your child can explain why Version 2 is better than a copied function, the course is working.',
      'You receive short updates on which signs your child has shown.'
    ] },
    right: { h3: 'For adult learners', ps: [
      'Generalising is the habit that saves the most time at work. Every report you automate will one day meet a file that is slightly different.',
      'Bring your own files and we will build the exercises around them.'
    ] }
  },

  catalogue: {
    eyebrow: 'Beyond the first course',
    h2: 'Nine more courses for Python learners in Oberhausen',
    lede: 'Grouped by where a learner is heading. Every course is live, in English, with a regular mentor.',
    bands: [
      { num: 'I', h3: 'Younger learners', sub: 'Ages 6 to 16', courses: [
        { code: 'POB / START / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Turtle drawings, games and small AI, 9 to 12.' },
        { code: 'POB / START / 02', slug: 'scratch-programming-complete-course', title: 'Scratch first', blurb: 'For children not yet typing comfortably, 6 to 12.' },
        { code: 'POB / START / 03', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Help beside school Informatik, Klasse 5 to 10.' }
      ] },
      { num: 'II', h3: 'Teenagers going further', sub: 'Ages 13 to 18', courses: [
        { code: 'POB / TEEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Files, charts and first models, 14 to 18.' },
        { code: 'POB / TEEN / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest problems for teens who already code.' },
        { code: 'POB / TEEN / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP preparation', blurb: 'Preparing for the Python Institute exams, from 13.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'POB / PRO / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'From zero to confident, at depth.' },
        { code: 'POB / PRO / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and dashboards.' },
        { code: 'POB / PRO / 03', slug: 'python-web-development-django-flask-course', title: 'Python web development', blurb: 'Django and Flask, once the basics are in place.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Format',
    h2: 'What does a week of online Python look like?',
    lede: 'Two live classes, an hour each, with the same mentor, and one short task in between. That is all, and it is enough.',
    slots: [
      { time: 'After school', l: 'Oberhausen afternoon slots for pupils.' },
      { time: 'Evening', l: 'Later slots for adults after work.' },
      { time: 'One to one', l: 'Times agreed with the mentor and moved when needed.' }
    ],
    cells: [
      { h3: 'Your screen', p: 'Shared while you type, so help is instant.' },
      { h3: 'Your editor', p: 'Python installed on your own computer.' },
      { h3: 'Your mentor', p: 'The same person all course long.' },
      { h3: 'Your batch', p: 'Learners of a similar age and stage.' },
      { h3: 'Your files', p: 'Real data, including German open data.' },
      { h3: 'Your progress', p: 'Short notes on what changed.' }
    ]
  },

  projectsH2: 'What our students have made',
  projectsLede: 'A few student projects, from small games to data tools. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'From Google, written by parents and students themselves.',

  fees: {
    h2: 'What does online Python cost in Oberhausen?',
    lede: 'The fee is per month and includes eight live classes. It appears below in euro, worked out with the European Central Bank reference rate, but the payment is processed in US dollars; your bank does the currency conversion, so its figure may not match ours to the cent.',
    free: ['One free class', 'Python installed, a first program run', 'No card, no contract'],
    group: ['A batch of fifteen to twenty', 'A regular mentor', 'Two classes a week', 'Monthly, end it any month'],
    one: ['A mentor for one learner', 'Your own pace and projects', 'Times you arrange']
  },

  faq: {
    eyebrow: 'Oberhausen asks',
    h2: 'Online Python classes in Oberhausen: answers',
    items: [
      { q: 'Are the Python classes taught in German?', a: 'No. We teach in English only. The mentors are based in India and keep a calm pace, rephrase when needed and adapt to how each learner speaks; since Python is made of English keywords, the language of the class and of the code is the same.' },
      { q: 'Is it really live, or a video course?', a: 'Really live. A mentor is on the call for the whole hour and watches the learner\'s shared screen while they type. There are no recorded lessons standing in for the mentor.' },
      { q: 'What do I need at home in Oberhausen?', a: 'A laptop or desktop computer, a headset or quiet room, and a steady internet connection. Python and the code editor are free and installed with the mentor in the first class.' },
      { q: 'Do NRW schools teach Informatik?', a: 'Yes, in grades 5 and 6 every pupil at a general school has the compulsory subject Informatik. From grade 7 it is an elective that depends on the school type, and in the Oberstufe it can be a three-hour Grundkurs or, in the Qualifikationsphase, a five-hour Leistungskurs.' },
      { q: 'From what age can someone learn Python with you?', a: 'From about 10 in our Maths Through Coding course, from 9 in Python and AI for Kids, and at any age as a teenager or adult. Younger children usually start with Scratch.' },
      { q: 'When can I take classes in Oberhausen time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils tend to take late afternoons and adults evenings.' },
      { q: 'What is the visitor project on this page?', a: 'An exercise we wrote on five visitor files published by the city of Oberhausen. One Python function reads four of them and fails on the theatre file, whose first column is a season rather than a year. Fixing the function, not copying it, is the lesson.' },
      { q: 'Can adults learn Python from scratch?', a: 'Yes. Our adult courses assume no experience. Many adults in the Ruhr area want Python to automate office tasks, and they usually write their first useful script within the first month.' },
      { q: 'How many people are in a batch?', a: 'Between fifteen and twenty learners at a similar stage and age. One-to-one is the alternative: two private classes a week with a mentor of your own.' },
      { q: 'How is the monthly fee paid?', a: 'The fee is shown in euro at the European Central Bank reference rate and paid in US dollars, converted by your bank, so the booked amount may differ a little. The trial class costs nothing and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Keep reading',
    h2: 'Related pages',
    lede: 'Other pages for Python and coding in North Rhine-Westphalia and Germany.',
    items: [
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'The Land, its schools and the Informatik Abitur.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'Every Python course we teach in Germany.' },
      { href: '/informatik-abitur-nrw', label: 'Informatik Abitur in NRW', p: 'The central exam, explained.' },
      { href: '/coding-classes-for-adults-germany', label: 'Coding for adults', p: 'For learners after school.' },
      { href: '/python-classes-for-kids-germany', label: 'Python for kids', p: 'Python for children aged 9 to 12.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in our live classes.' }
    ]
  },

  start: {
    h2: 'Book a free Python class',
    lede: 'Tell us the learner\'s age and what they have tried before. In the trial hour the mentor installs Python with them, writes a first program together and then recommends a course and a format.',
    readFirst: 'To read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">the full course list</a>.',
    note: 'Python classes run live online in English, with mentors based in India. Questions are answered fastest on WhatsApp, in English.',
    formNote: 'Free trial, no card.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-course-germany', label: 'Python course in Germany' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/informatik-abitur-nrw', label: 'Informatik Abitur NRW' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'North Rhine-Westphalia' },
        { href: '/coding-classes-for-adults-germany', label: 'Coding for adults' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Fix the function, not five copies'
  },

  personalityCss: `
.ag-root.ag-pob .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-pob .ag-capsule { border-left-width: 4px; border-radius: 4px; }
.ag-root.ag-pob .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-pob .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-pob .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Nordrhein-Westfalen page); KMK Ferienregelung 2026/2027; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz; Stadt Oberhausen visitor statistics via Open.NRW, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Five Oberhausen visitor files: an original Python project in which one function reads the Hochseilgarten, Industriemuseum, Hallenbad and Kurzfilmtage files and fails on theater.csv with KeyError: \'Jahr\', because the theatre counts seasons; the fix reads the first column name from the file. Peaks: 2009, 2010, 2009, 2016, 2016/2017. Lesson family: generalise a function, do not copy it.',
    requiredMentions: ['hallenbad.csv', 'theater.csv', 'KeyError: \'Jahr\'', 'theater.csv peak 2016/2017 65802 latest 2024/2025 44071', 'hallenbad.csv peak 2009 181285 latest 2025 162926', 'Spielzeit Theater Oberhausen', 'usually three hours a week throughout', 'Fix the function, not five copies'],
    sources: [
      { claim: 'Informatik in NRW by school type and in the Oberstufe.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'NRW school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Oberhausen theatre visitors, DL-DE BY 2.0.', url: 'https://ckan.govdata.de/dataset/besucherinnen-im-theater-oberhausen-seit-spielzeit-2004-2005' },
      { claim: 'Oberhausen swimming pool visitors.', url: 'https://ckan.govdata.de/dataset/besucherinnen-des-stadtischen-hallenbades-oberhausen-seit-2008' },
      { claim: 'Oberhausen short film festival visitors.', url: 'https://ckan.govdata.de/dataset/besucherinnen-bei-den-internationalen-kurzfilmtagen-oberhausen-seit-2000' },
      { claim: 'Populations of Oberhausen, neighbours and NRW.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Reasons for the low 2020 and 2021 figures: the city\'s footnotes are not interpreted on this page.',
      'The Ludwig Galerie visitor file: its 2023 parts and total disagree, so it is not used.',
      'Any connection with the Stadt Oberhausen, the venues, the GI or a school: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
