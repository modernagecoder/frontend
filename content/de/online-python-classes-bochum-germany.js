'use strict';
// Online Python classes in Bochum (ag- city page, Germany cluster P6 row DE141, tier-2 shape online-python = live online
// explained, Python path). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; euro shown, USD charged.
// Spine: what "live online" actually means, minute by minute, then the Python path from a first print() to a real
// Bochum dataset. The smart-bench weather station is used by the live AI page, so this page uses a different dataset.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, NRW page: Pflichtfach Informatik in grades 5 and 6 at all general school types (80);
//    Qualifikationsphase Grundkurs three hours, Leistungskurs five hours (81); written Informatik Abitur set centrally,
//    "Der Einsatz eines Computers ist für die Bearbeitung der schriftlich Abituraufgaben nicht vorgesehen." (82).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025), NRW: Herbst 17.10. - 31.10., Weihnachten 23.12. - 06.01., Ostern 22.03. -
//    03.04., Pfingsten 18.05., Sommer 19.07. - 31.08. (275).
//  - BWINF: Jugendwettbewerb Informatik round 3 (2026) deadline 23 November 2026 (143); Bundeswettbewerb Informatik round 1
//    1 September to 23 November 2026 (146); Informatik-Biber 9 to 20 November 2026 (133).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Bochum 358,676; Herne 155,851; Gelsenkirchen 267,930; Dortmund
//    603,462; Essen 574,682.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Bochum (Zentrale Dienste), "Bochum - POI - Photovoltaikanlagen auf städtischen Gebäuden",
//    bochum.opendata.ruhr dataset 4319514e-783b-45f7-b2c2-aed777abc216, licence Datenlizenz Deutschland Namensnennung 2.0
//    (dl-de/by-2-0, commercial reuse allowed with attribution). Column notes on the dataset page: "LEISTUNG: Installierte
//    Leistung in kWp", "INBETRIEBN: Datum der Inbetriebnahme". File bochum_pvanlagen.csv downloaded 3 November 2026, 7,490
//    bytes, sha256 25632358...87fc697, 58 rows, semicolon separated, UTF-8 with BOM. Raw copy and the portal search JSON in
//    src-pages/online-python-classes-bochum-germany/.
//  - Not used: the Bochum Eco-Counter bike files are hosted on gitlab.opencode.de, which answered with a web application
//    firewall challenge page on 3 November 2026; per the brief we stopped for that host and did not retry. Those datasets
//    also carry a usage restriction against products competing with Eco-Counter.
// Our own calculations (scratchpad de/w/T1/bochum/v1.py, v2.py, v3.py, python3 -I, Python 3.14.8):
//  v1: "Installations: 58", "Total kWp: 3629.06", "Mean kWp: 62.57", "Median kWp: 30.04", "Largest: 625.0  Smallest: 2.28".
//  v2: 2021 added 84.2 running 493.48; 2022 149.86 / 643.34; 2023 73.5 / 716.84; 2024 632.27 / 1349.11; 2025 2279.95 /
//  3629.06; "Share added in 2025: 62.8 %". 2025 has 21 rows, 2024 has 10.
//  v3: "Mean without the largest: 52.7", "Median without the largest: 30.0".
//  By Stadtbezirk (our sums): Mitte 16 rows 1,604.65 kWp; Südwest 13 / 709.18; Wattenscheid 12 / 566.4; Ost 10 / 302.13;
//  Nord 5 / 337.1; Süd 2 / 109.6.
// Lesson family: one giant value drags the mean, not the median; a running total shows when the growth happened.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  'import statistics',
  '',
  'with open("bochum_pvanlagen.csv", encoding="utf-8-sig") as f:',
  '    roofs = list(csv.DictReader(f, delimiter=";"))',
  '',
  'kwp = [float(r["LEISTUNG"]) for r in roofs]',
  'print("Installations:", len(kwp))',
  'print("Total kWp:", round(sum(kwp), 2))',
  'print("Mean kWp:", round(statistics.mean(kwp), 2))',
  'print("Median kWp:", statistics.median(kwp))',
  'print("Largest:", max(kwp), " Smallest:", min(kwp))'
].join('\n');

const V2 = [
  'rest = sorted(kwp)[:-1]          # every installation except the largest',
  'print("Mean without the largest:", round(statistics.mean(rest), 2))',
  'print("Median without the largest:", statistics.median(rest))'
].join('\n');

const V3 = [
  'by_year = {}',
  'for r in roofs:',
  '    year = r["INBETRIEBN"]',
  '    by_year[year] = by_year.get(year, 0) + float(r["LEISTUNG"])',
  '',
  'running = 0',
  'for year in sorted(by_year):',
  '    running += by_year[year]',
  '    if year >= "2021":',
  '        print(year, "added", round(by_year[year], 2), " running total", round(running, 2))',
  '',
  'print("Share added in 2025:", round(100 * by_year["2025"] / running, 1), "%")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Bochum: online Python classes' },
  slug: 'online-python-classes-bochum-germany',
  code: 'boc',
  accent: '#83280E',
  accentRationale: 'Online Python in Bochum: a rust red #83280E for the pithead steel of the Ruhr\'s mining past, clear of the Berlin brick and the Duisburg violet; contrast 7.49 at its lowest on the paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Online Python classes in Bochum',
  title: 'Online Python Classes in Bochum: Live Lessons in English',
  description: 'Online Python classes for Bochum: what a live lesson looks like, the path from first line to real data, NRW Informatik facts and a Bochum solar roof project.',
  ogDescription: 'Live Python lessons in English for Bochum learners from 9 to adult: how an online class actually runs, the steps from a first program to real data, and a project on the solar panels on Bochum\'s own buildings.',
  twitterDescription: 'Python for Bochum, live online in English: how lessons run, the learning path and a solar roof data project.',
  pageName: 'Online Python Classes in Bochum',
  webPageDescription: 'A guide for Bochum learners and parents to live online Python classes in English: what happens in a lesson, the Python path by age, where Python meets NRW school Informatik, and an original project on Stadt Bochum\'s photovoltaic installations.',
  courseDescription: 'Live online Python classes in English for Bochum learners: children from 9, teenagers and adults, taught by a regular mentor on a shared screen, in a group of 15 to 20 or one to one, from first programs to real open data.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Python in Bochum',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#lesson', label: 'A lesson' },
    { href: '#path', label: 'Path' },
    { href: '#solar', label: 'Solar data' },
    { href: '#clock', label: 'Times' }
  ],
  eyebrow: 'Bochum &middot; Python &middot; Live online',
  h1: 'Online Python classes in Bochum',
  lede: '"Online" can mean a video you pause or a person who watches you type. Our Python classes in Bochum are the second kind: a mentor and a learner on the same screen, in real time, in English. This page shows what one lesson looks like from the first minute to the last, the route from a first line of Python to a real dataset, how that sits next to Informatik at an NRW school, and a project on the solar panels the city has put on its own roofs.',
  secondaryCta: { href: '#solar', label: 'See the solar project' },
  wa: 'Hello Modern Age Coders, I am in Bochum and would like to try a live online Python class in English. Could we arrange a free first lesson?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; a mentor watching the code as it is typed',
  spec: [
    ['Language taught', 'Python 3'],
    ['Ages', '9 to 12, 13 to 18, adults'],
    ['Format', 'Live video, shared screen'],
    ['Group', '15 to 20 learners, or 1-on-1'],
    ['You need', 'A laptop or desktop and a headset'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'Online Python classes for Bochum learners at Modern Age Coders are live video lessons in English, never recordings: a regular mentor shares the screen with the learner, watches each line as it is typed and explains errors on the spot, at the learner\'s pace and in an accent they can follow. Children start from about 9, teenagers and adults at any level. Classes run in a group of 15 to 20 or one to one, after school, after work or at weekends.',

  picks: {
    eyebrow: 'Three ways into Python',
    h2: 'Python courses for Bochum learners, by age',
    lede: 'The same language at three speeds. All three begin with typed code in the first lesson and end with projects on real data.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'BOC / 01', title: 'Python and AI for Kids', note: 'Ages 9 to 12. Turtle graphics, small games and child-safe AI ideas, with short exercises so a young typist never gets lost.' },
      { course: 'python-complete-masterclass-teens', code: 'BOC / 02', title: 'Python for Teens', note: 'Ages 13 to 18. The whole language, from variables to classes and files, at the depth an Oberstufe Informatik pupil needs.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'BOC / 03', title: 'Python from Zero to Advanced', note: 'Adults and students. A complete route for beginners, with automation and data work once the basics are solid.' }
    ]
  },

  sections: [
    {
      id: 'lesson',
      eyebrow: 'What live online means',
      h2: 'What happens in a live online Python lesson?',
      lede: 'Parents often picture a webinar. It is closer to sitting next to a patient programmer who can see your screen. Here is how one of our lessons usually runs.',
      body: [
        { kind: 'ol', items: [
          '<strong>Minutes 0 to 5: a quick look back.</strong> The mentor asks what the learner remembers from last time and runs last week\'s program together, so the lesson starts from something that works.',
          '<strong>Minutes 5 to 20: one new idea.</strong> A single concept, such as a loop or a dictionary, shown in a few lines. The mentor types slowly and says each line aloud in plain English.',
          '<strong>Minutes 20 to 45: the learner drives.</strong> The learner shares their screen and writes the next part themselves. When an error appears, the mentor asks what the message says before saying what it means.',
          '<strong>Minutes 45 to 55: a small change.</strong> The learner alters the program on purpose, a different file, a new rule, a larger number, and predicts the result before running it.',
          '<strong>Minutes 55 to 60: what to try next.</strong> One short task for the week, never hours of homework, and a note on what was hard today.'
        ] },
        { kind: 'source', html: 'Our own lesson pattern. Group lessons follow the same rhythm, with learners taking turns to share their screen.' },
        { kind: 'two', mt: true,
          leftH3: 'What a Bochum learner needs at home',
          left: [
            'A laptop or desktop computer, a stable internet connection and a headset with a microphone. A tablet is fine for watching but awkward for typing code, so we ask for a keyboard from the first lesson.',
            'Python itself is free. In the first lesson the mentor helps install it or opens a browser editor, whichever suits the computer, so nothing has to be set up in advance.'
          ],
          rightH3: 'What online gives that a room cannot',
          right: [
            'The mentor sees the learner\'s actual code, not a description of it. A missing bracket on line 14 is found in seconds, and the learner sees how it was found.',
            'There is no journey across Bochum after school, no waiting for a course to open in your part of the city, and the same mentor follows the learner if the family moves.'
          ] },
        { kind: 'p', mt: true, html: 'Every lesson is taught in English only. Python\'s own words, <code>print</code>, <code>for</code>, <code>if</code>, are English already, so a learner picks up programming English along the way. Mentors keep sentences short, repeat when asked, and get used to each learner\'s accent within a few weeks.' }
      ]
    },
    {
      id: 'path',
      eyebrow: 'The Python path',
      h2: 'How long does it take to go from a first line of Python to real data?',
      lede: 'For most learners, between six months and a year at two lessons a week. The stages are the same at every age; only the pace and the examples change.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our Python stages, with a typical time at two lessons a week', head: ['Stage', 'The learner writes', 'Children from 9', 'Teenagers and adults'], rows: [
          ['1. Talking to the computer', 'print, input, variables and arithmetic', 'Weeks 1 to 4', 'Weeks 1 to 2'],
          ['2. Decisions and repeats', 'if, for and while', 'Months 2 to 3', 'Weeks 3 to 6'],
          ['3. Collections', 'Lists and dictionaries', 'Months 4 to 6', 'Months 2 to 3'],
          ['4. Files and data', 'Reading a CSV file and summarising it', 'Months 7 to 10', 'Months 3 to 5'],
          ['5. Own projects', 'A program with a question of their own', 'From month 10', 'From month 5']
        ] },
        { kind: 'source', html: 'Our own course plan; real progress varies with practice time and with the learner\'s English.' },
        { kind: 'p', mt: true, html: 'The solar project below sits at stage 4. It uses nothing more advanced than a list, a dictionary, a loop and the <code>statistics</code> module that comes with Python, which is exactly why we like it: a learner who has done stages 1 to 3 properly can write all of it.' }
      ]
    },
    {
      id: 'solar',
      tint: 'tint',
      eyebrow: 'A Bochum dataset',
      h2: 'How much solar power has Bochum put on its own buildings?',
      lede: 'Stadt Bochum publishes a list of the photovoltaic installations on municipal buildings, with their capacity and the year each one went into operation, under the Datenlizenz Deutschland Namensnennung 2.0. Fifty-eight rows, and two lessons inside them.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'The dataset is Photovoltaikanlagen auf städtischen Gebäuden on the city\'s open data portal. We downloaded bochum_pvanlagen.csv on 3 November 2026: 58 rows, separated by semicolons, with the building, the Stadtbezirk, the roof shape, the capacity and the year.',
            'The portal explains its columns: LEISTUNG is "Installierte Leistung in kWp", the installed capacity in kilowatt peak, and INBETRIEBN is described as the date of commissioning, although the file holds only a year.'
          ],
          rightH3: 'The questions',
          right: [
            'What is a typical installation on a Bochum city building? And when did most of the capacity arrive?',
            'Both sound like one line of code. Both have an answer that changes once you look at the numbers properly.'
          ] },
        { kind: 'code', label: 'Step 1: total, mean and median', lang: 'Python', code: V1, note: 'It prints <code>Installations: 58</code>, <code>Total kWp: 3629.06</code>, <code>Mean kWp: 62.57</code>, <code>Median kWp: 30.04</code> and <code>Largest: 625.0  Smallest: 2.28</code>.' },
        { kind: 'p', mt: true, html: 'The mean says a typical installation is about 63 kWp. The median, the middle value when all 58 are lined up, says about 30. They disagree by a factor of two because one installation is enormous: the largest is 625 kWp, more than a sixth of the city\'s whole list on its own. The mean shares that giant out across every row; the median hardly notices it. Step 2 proves it.' },
        { kind: 'code', label: 'Step 2: take the largest away and look again', lang: 'Python', code: V2, note: 'Run after Step 1. It prints <code>Mean without the largest: 52.7</code> and <code>Median without the largest: 30.0</code>.' },
        { kind: 'p', mt: true, html: 'Removing one row out of 58 moves the mean by almost 10 kWp and the median by 0.04. That is the habit we want a learner to keep for life: when someone quotes an average, ask which one, and whether a single huge value is doing the work.' },
        { kind: 'code', label: 'Step 3: a running total by year', lang: 'Python', code: V3, note: 'Run after Step 1. It prints five lines from <code>2021 added 84.2  running total 493.48</code> to <code>2025 added 2279.95  running total 3629.06</code>, then <code>Share added in 2025: 62.8 %</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Capacity added on Bochum city buildings by year of commissioning, 2021 to 2025 (our calculation)', head: ['Year', 'Rows in the file', 'kWp added', 'Running total, kWp'], rows: [
          ['2021', '2', '84.2', '493.48'],
          ['2022', '4', '149.86', '643.34'],
          ['2023', '3', '73.5', '716.84'],
          ['2024', '10', '632.27', '1,349.11'],
          ['2025', '21', '2,279.95', '3,629.06']
        ] },
        { kind: 'source', html: 'Data: Stadt Bochum, Bochum, POI, Photovoltaikanlagen auf städtischen Gebäuden, bochum.opendata.ruhr, Datenlizenz Deutschland Namensnennung 2.0, file bochum_pvanlagen.csv downloaded 3 November 2026. Sums, shares and the running total are our own. The earliest row in the file is from 1998.' },
        { kind: 'p', mt: true, html: 'The running total tells a story the full list hides. Almost two thirds of all the capacity in the file, 62.8 percent, is in rows dated 2025, and 2024 and 2025 together hold 31 of the 58 rows. A learner can say exactly that, and should stop there: the file lists installations, not plans or reasons, so it cannot tell us why 2025 was so busy or whether removed panels are still listed. Saying what the data cannot answer is part of the answer.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 12.</strong> Copy ten capacities into a list, find the largest and the smallest, then sort the list and point to the middle one.',
          '<strong>Ages 13 to 18.</strong> Run all three steps, then group by BEZIRK and decide whether the mean or the median is fairer for comparing the city districts.',
          '<strong>Adults.</strong> Plot the running total as a line chart and write the one sentence you would put under it in a report, with the licence named.',
          '<strong>Going further.</strong> The file mixes spellings such as Flachdach/ Schrägdach and Flach-/Schrägdach. Write a small function that tidies the roof shapes into fewer groups, and count how many rows each group has.'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Python and NRW schools',
      h2: 'Where does Python meet Informatik at a Bochum school?',
      lede: 'Bochum schools follow the rules of Nordrhein-Westfalen, which gives every pupil a short, early start in Informatik and leaves the rest to choice.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Grades 5 and 6', p: 'NRW makes Informatik a compulsory subject in grades 5 and 6 at all general school types, according to the GI Informatik-Monitor 2026/27. For many Bochum children this is the first time code appears on the timetable.' },
          { h3: 'The middle years', p: 'After grade 6, Informatik depends on what the school offers and what the pupil picks. A learner who wants to keep programming between 12 and 15 often has to do it outside school, which is where a weekly class helps most.' },
          { h3: 'The Oberstufe', p: 'In the Qualifikationsphase Informatik can be a Grundkurs of three hours a week or a Leistungskurs of five. Written Abitur tasks are set centrally, and no computer is used to answer them.' }
        ] },
        { kind: 'p', mt: true, html: 'Because the written Informatik Abitur in NRW is done on paper, a pupil has to read and trace a program without running it. Our older learners practise that on purpose: before pressing run, they write down what they expect each line to print. We teach next to school and never instead of it; the school course is the one that counts for marks.' },
        { kind: 'p', html: 'On the Destatis municipal register Bochum counted 358,676 residents on 31 December 2024. It sits between Essen (574,682) and Dortmund (603,462), with Herne (155,851) and Gelsenkirchen (267,930) to the north and Witten and Hattingen to the south. Since every lesson is online, a learner in any of those places gets the same mentor and the same lessons; only the school holidays depend on the Land, and all of these towns are in NRW.' },
        { kind: 'p', html: 'Python learners who enjoy puzzles can try the national informatics competitions run by BWINF. The Informatik-Biber 2026 runs in schools from 9 to 20 November 2026, round 3 of the Jugendwettbewerb Informatik closes on 23 November 2026, and round 1 of the 45th Bundeswettbewerb Informatik runs from 1 September to 23 November 2026. We have no connection with BWINF.' }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Bochum time',
      h2: 'What time are online Python classes in Bochum?',
      lede: 'Learners pick slots that suit Bochum; the mentor works in Indian time, several hours ahead. Below are typical examples, not fixed batches.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Bochum lesson times and the matching time for a mentor in India', head: ['Bochum', 'Mentor, MEZ months', 'Mentor, MESZ months'], rows: [
          ['16:45 on a weekday', '21:15', '20:15'],
          ['17:45 on a weekday', '22:15', '21:15'],
          ['Saturday 12:00', '16:30', '15:30'],
          ['Sunday 09:45', '14:15', '13:15']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz gives Germany MEZ, one hour ahead of UTC, for the winter months and MESZ, two hours ahead, for the summer months. MESZ ended this year on 25 October 2026 and resumes on 28 March 2027. India stays at UTC+5:30, which puts the mentor four and a half hours ahead of Bochum until late March, then three and a half.' },
        { kind: 'two', mt: true,
          leftH3: 'School holidays in NRW, 2026/27',
          left: [
            'The KMK calendar for Nordrhein-Westfalen lists the Herbstferien from 17 to 31 October 2026, Christmas from 23 December 2026 to 6 January 2027, the Osterferien from 22 March to 3 April 2027, a single Pfingsten day on 18 May 2027, and the Sommerferien from 19 July to 31 August 2027.'
          ],
          rightH3: 'What happens to classes',
          right: [
            'Nothing, unless you ask. The mentors do not follow the NRW calendar, so many Bochum learners use the long summer break for extra practice. If you travel, tell the mentor and the lessons wait for you.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Checkpoints',
    h2: 'How a Bochum learner knows the Python is sinking in',
    lede: 'Our own checkpoints. The mentor uses them to decide when to move on, and shares them in the monthly progress note.',
    table: { caption: 'Python checkpoints (ours)', head: ['Checkpoint', 'Usually reached', 'The learner can'], rows: [
      ['Reads an error', 'Month 1', 'Find the line an error points to and say what went wrong'],
      ['Predicts output', 'Month 2', 'Write down what a short loop prints before running it'],
      ['Chooses a structure', 'Month 4', 'Decide between a list and a dictionary and explain why'],
      ['Summarises a file', 'Month 6', 'Read a CSV file and report a count, a total and a median'],
      ['Questions a result', 'Month 8', 'Spot when one value or one missing row changes the story']
    ] },
    left: { h3: 'For learners', ps: [
      'An average without a median is half a sentence.',
      'Before you press run, say out loud what you expect to see.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your child to show you an error message and explain it. That one habit is worth more than a finished game.',
      'Progress shows in what your child can explain, not in how long they spent at the computer.'
    ] }
  },

  catalogue: {
    eyebrow: 'Beyond the first course',
    h2: 'Nine more courses for Bochum Python learners',
    lede: 'For when the basics are in place. Each is taught live, in English, by the same mentor every week.',
    bands: [
      { num: 'I', h3: 'Python with data', sub: 'Teenagers and adults', courses: [
        { code: 'BOC / DATA / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Charts, tables and a first model, on datasets like this one.' },
        { code: 'BOC / DATA / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis for adults', blurb: 'Python, SQL and spreadsheets used together at work.' },
        { code: 'BOC / DATA / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Means, medians and spread, with the reasons behind them.' }
      ] },
      { num: 'II', h3: 'Python to build things', sub: 'Ages 13 and up', courses: [
        { code: 'BOC / BUILD / 01', slug: 'python-web-development-django-flask-course', title: 'Web apps with Django and Flask', blurb: 'From a script to a site other people can use.' },
        { code: 'BOC / BUILD / 02', slug: 'python-ai-automation-masterclass-college', title: 'Automation with Python', blurb: 'Scripts that rename, sort and report while you do something else.' },
        { code: 'BOC / BUILD / 03', slug: 'ai-ml-masterclass-teens', title: 'Machine learning for teens', blurb: 'Models trained and tested in Python, maths included.' }
      ] },
      { num: 'III', h3: 'Python for school and contests', sub: 'Ages 10 to 19', courses: [
        { code: 'BOC / SCHOOL / 01', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'Grundkurs and Leistungskurs topics, in Java or Python.' },
        { code: 'BOC / SCHOOL / 02', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Biber, BWINF and BWKI', blurb: 'Puzzle thinking for the national contests, with problems we write.' },
        { code: 'BOC / SCHOOL / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored with short Python programs.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Booking and format',
    h2: 'How online Python classes are organised for Bochum',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday late afternoon', l: 'The usual choice for school pupils in Bochum.' },
      { time: 'Weekday early evening', l: 'Often taken by students and working adults.' },
      { time: 'Saturday or Sunday', l: 'Morning or midday, for anyone with full weekdays.' }
    ],
    cells: [
      { h3: 'Shared screen', p: 'The mentor sees every keystroke as it happens.' },
      { h3: 'Two lessons a week', p: 'Short gaps, so nothing is forgotten in between.' },
      { h3: 'Plain English', p: 'Short sentences, repeated whenever asked.' },
      { h3: 'No recordings', p: 'Every minute is taught by a person, live.' },
      { h3: 'Small weekly task', p: 'Ten or twenty minutes, never an evening of homework.' },
      { h3: 'Group or solo', p: 'Join 15 to 20 others, or learn alone with a mentor.' }
    ]
  },

  projectsH2: 'What our Python students have made',
  projectsLede: 'Projects by students of ours from several countries are below. Our <a class="ag-inline-link" href="/student-labs">student labs</a> page has the full collection.',
  reviewsLede: 'What students and parents wrote about us on Google, word for word.',

  fees: {
    h2: 'Fees for online Python classes in Bochum',
    lede: 'A month of lessons, eight in all, has one price. That price is displayed here in euro using the European Central Bank reference rate; when you pay, the amount is charged in US dollars and converted by your card provider, which can leave a small difference on the statement.',
    free: ['A free first Python lesson', 'A short program written together', 'No card needed'],
    group: ['15 to 20 learners at a similar level', 'A regular mentor', 'Two lessons a week', 'Monthly, no long contract'],
    one: ['One learner and one mentor', 'Pace and projects chosen together', 'Times agreed in advance']
  },

  faq: {
    eyebrow: 'Questions from Bochum',
    h2: 'Online Python classes in Bochum: what people ask',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every lesson is live and taught in English only, by mentors who adapt to the learner\'s pace and accent. Python\'s keywords are English words anyway, so learners pick up programming English as they go.' },
      { q: 'Is an online Python class a recorded course?', a: 'No. Each lesson is live with a mentor on video who sees the learner\'s screen, answers questions as they come and fixes errors together with the learner. Nothing is pre-recorded.' },
      { q: 'What age can someone start Python?', a: 'Most children are ready to type Python at about 9. Younger children usually start with Scratch first. There is no upper age limit; adults join from zero.' },
      { q: 'What equipment do we need in Bochum?', a: 'A laptop or desktop computer with a keyboard, a reliable internet connection and a headset with a microphone. Python is free, and the mentor helps set it up in the first lesson.' },
      { q: 'Does this help with Informatik at an NRW school?', a: 'It can, as extra practice next to school. NRW teaches compulsory Informatik in grades 5 and 6 and offers it as a Grundkurs or Leistungskurs in the Oberstufe. The school course is the one that counts for marks; we do not set or grade school work.' },
      { q: 'When do online Python classes run in Bochum time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. School pupils mostly take late afternoon slots, adults early evening or weekend ones.' },
      { q: 'Where are the mentors based?', a: 'In India. In winter India is four and a half hours ahead of Bochum, so a 16:45 lesson in Bochum is 21:15 for the mentor. From 28 March 2027 the gap is three and a half hours.' },
      { q: 'How is the fee shown and paid?', a: 'It is a monthly fee for eight lessons. This page shows it in euro using the European Central Bank reference rate; the charge is taken in US dollars and your card provider converts it, so your statement may show a slightly different euro amount.' },
      { q: 'Can my child join a group with friends from Bochum?', a: 'Groups are formed by age and level rather than by city, with 15 to 20 learners. Friends of a similar level can ask to be placed together, and we try to arrange it.' },
      { q: 'What will the learner build?', a: 'Short programs first, then games, then tools that read real data, such as the Bochum solar roof file on this page. Older learners finish with a project around a question of their own.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'More for Python learners in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our hub for learners across Germany.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'NRW rules, holidays and data.' },
      { href: '/python-classes-for-kids-germany', label: 'Python classes for kids', p: 'When children are ready to type code.' },
      { href: '/coding-classes-for-teens-germany', label: 'Coding for teens in Germany', p: 'Courses for ages 13 to 18.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'Informatik in the Oberstufe.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'Puzzles in the spirit of the contest.' }
    ]
  },

  start: {
    h2: 'Try a free online Python lesson',
    lede: 'The first lesson follows the same pattern as every other one: a short program written together, then a change the learner makes alone. Afterwards the mentor recommends a course and a group, or one-to-one lessons.',
    readFirst: 'Want the details before booking? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> covers the method, and <a class="ag-inline-link" href="/courses">the course list</a> has every syllabus.',
    note: 'Lessons are live online in English only, taught by mentors in India. Questions are answered fastest on WhatsApp, in English.',
    formNote: 'The first lesson is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/coding-classes-for-teens-germany', label: 'Coding for teens' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/abitur-computer-science-in-english', label: 'Abitur computer science' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' }
      ] }
    ],
    bottomRight: 'Ask which average'
  },

  personalityCss: `
.ag-root.ag-boc .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-boc .ag-capsule { border-left-width: 3px; }
.ag-root.ag-boc .ag-steps li { line-height: 1.6; }
.ag-root.ag-boc .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-boc .ag-table td { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); KMK Ferien 2026/2027; BWINF dates for Biber, Jugendwettbewerb and Bundeswettbewerb 2026; Destatis GV-ISys 31.12.2024; Stadt Bochum open data, Photovoltaikanlagen auf städtischen Gebäuden, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Ask which average: an original Python project on Stadt Bochum\'s list of 58 photovoltaic installations on municipal buildings (3,629.06 kWp in total) in which the mean (62.57) and the median (30.04) disagree because one installation is 625 kWp, removing it moves the mean to 52.7 and the median to 30.0, and a running total by year shows 62.8 percent of the capacity in rows dated 2025. Lesson family: one giant value drags the mean, not the median; a running total shows when growth happened.',
    requiredMentions: ['bochum_pvanlagen.csv', 'Median kWp: 30.04', 'Mean kWp: 62.57', 'Mean without the largest: 52.7', 'Share added in 2025: 62.8 %', 'Ask which average', '358,676', 'Installierte Leistung in kWp'],
    sources: [
      { claim: 'NRW Informatik grades 5 and 6; Grundkurs and Leistungskurs hours; written Abitur on paper.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'NRW holidays 2026/27.', url: 'https://www.kmk.org/service/ferien.html' },
      { claim: 'BWINF 2026 dates.', url: 'https://bwinf.de/' },
      { claim: 'Bochum photovoltaic installations, column notes and licence.', url: 'https://bochum.opendata.ruhr/dataset/4319514e-783b-45f7-b2c2-aed777abc216' },
      { claim: 'Bochum population 358,676 on 31 December 2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Any reason for the 2025 surge in installations: not in the file, none given.',
      'Naming individual schools in the project: the analysis is by year and district only.',
      'The Bochum Eco-Counter bike data: host answered with a firewall challenge on 3 November 2026; not retried, not used.',
      'Any affiliation with Stadt Bochum, the NRW ministry or BWINF: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
