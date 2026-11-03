'use strict';
// Online Python classes in Mönchengladbach (ag- city page, Germany cluster P6 row DE150, tier-2 shape online-python = live
// online explained, Python path). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; euro shown, USD charged.
// Spine: what a live online Python lesson is (a shared screen and a person, not a video), the four stages of the Python
// path, and one Mönchengladbach dataset where two date columns tell two different stories.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, NRW page: "An allen allgemeinbildenden Schularten wird das Pflichtfach Informatik in
//    den Jahrgangsstufen 5 und 6 unterrichtet." (80); Qualifikationsphase Grundkurs "dreistündig", Leistungskurs
//    "fünfstündig" (81); "Der Einsatz eines Computers ist für die Bearbeitung der schriftlich Abituraufgaben nicht
//    vorgesehen." (82); Gymnasien "mit neunjährigem Bildungsgang" (62).
//  - Schulministerium NRW: written Abitur main dates "ab Dienstag, 13. April 2027 bis Mittwoch, 5. Mai 2027" (42);
//    Mathematik on Wednesday 5 May 2027 (44); ZP10 in Deutsch, Mathematik, Englisch (64).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025), NRW: Herbst 17.10. - 31.10., Weihnachten 23.12. - 06.01., Ostern 22.03. -
//    03.04., Pfingsten 18.05., Sommer 19.07. - 31.08. (275).
//  - BWINF: Bundeswettbewerb Informatik round 1 "1. September bis 23. November 2026" (146); Jugendwettbewerb round 3
//    "Einsendeschluss ist der 23. November 2026." (143); Biberwochen 9 to 20 November 2026 (133).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Mönchengladbach 267,213; Düsseldorf 618,685; Krefeld 231,406;
//    Neuss 154,317; Nordrhein-Westfalen 18,034,454.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027 (facts-geo/timezone.tsv).
//  - Data: Stadt Mönchengladbach open data portal (Opendatasoft), dataset "Marktstammdatenregister", publisher field
//    "Bundesnetzagentur für Elektrizität, Gas, Telekommunikation, Post und Eisenbahnen Marktstammdatenregister - Referat 617",
//    licence field "DL-DE->BY-2.0" (https://www.govdata.de/dl-de/by-2-0, commercial reuse with attribution), modified
//    2026-03-11, 18,864 records, all with gemeinde "Mönchengladbach". Description quotes: "Das Marktstammdatenregister ist
//    das zentrale amtliche Register für Strom- und Gasanlagen in Deutschland." and "Betreiber von Energieanlagen sind
//    gesetzlich zur Registrierung verpflichtet." CSV export downloaded 3 November 2026, 10,096,329 bytes, sha256
//    0151029c1f6018b4..., semicolon separated, UTF-8 with BOM. Raw copy and metadata JSON in
//    src-pages/online-python-classes-moenchengladbach-germany/.
//    Counts (ours): energietrager Solare Strahlungsenergie 12,277, Speicher 6,413, Erdgas 141, Wind 14; betriebs_status
//    In Betrieb 18,401, In Planung 214.
// Our own calculations (scratchpad de/w/T2/run/mgl/v1.py, v2.py, python3 -I, Python 3.14.8), solar units only:
//  v1: 2010 switched on 207 registered 0; 2018 87 / 0; 2019 138 / 377; 2023 2345 / 2237; 2025 2366 / 2402.
//  v2: "Solar units switched on before 2019: 1634", "Units with no switch-on date yet: 156", "First registration year in
//  the file: 2019", switched on by end of 2018 1634, of 2022 3242, of 2025 10420. 2020: switched on 302, registered 1,506.
// Lesson family: two date columns, two stories; choose the date that answers the question you asked.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'started, registered = {}, {}',
  'with open("mg_energy_units.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        if row["energietrager"] != "Solare Strahlungsenergie":',
  '            continue',
  '        start = row["inbetriebnahmedatum_der_einheit"][:4]',
  '        signed_up = row["registrierungsdatum_der_einheit"][:4]',
  '        started[start] = started.get(start, 0) + 1',
  '        registered[signed_up] = registered.get(signed_up, 0) + 1',
  '',
  'for year in ("2010", "2018", "2019", "2023", "2025"):',
  '    print(year, " switched on:", started.get(year, 0), "  registered:", registered.get(year, 0))'
].join('\n');

const V2 = [
  'older = sum(n for year, n in started.items() if year != "" and year < "2019")',
  'print("Solar units switched on before 2019:", older)',
  'print("Units with no switch-on date yet:", started.get("", 0))',
  'print("First registration year in the file:", min(registered))',
  'running = 0',
  'for year in sorted(y for y in started if y != ""):',
  '    running += started[year]',
  '    if year in ("2018", "2022", "2025"):',
  '        print("Switched on by the end of", year, ":", running)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Mönchengladbach: online Python' },
  slug: 'online-python-classes-moenchengladbach-germany',
  code: 'pmo',
  accent: '#943C3A',
  accentRationale: 'Online Python classes, Mönchengladbach: a fired-brick red #943C3A for the red-brick textile mills of the Niederrhein; contrast 5.75 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Online Python classes in Mönchengladbach',
  title: 'Online Python Classes in Mönchengladbach, Live in English',
  description: 'Online Python classes for Mönchengladbach teens and adults, live in English: how a live lesson runs, the Python path, and a project on the city\'s solar register.',
  ogDescription: 'Live online Python in English for Mönchengladbach: what happens in a real lesson, a four-stage path from first program to real data, and a project on 12,277 solar units in the city\'s copy of the national energy register.',
  twitterDescription: 'Live Python lessons in English for Mönchengladbach, and a project on the city\'s solar units where two dates disagree.',
  pageName: 'Online Python Classes in Mönchengladbach',
  webPageDescription: 'A guide for teenagers, adults and parents in Mönchengladbach to learning Python live online in English, built on Gesellschaft für Informatik, Schulministerium NRW, KMK and BWINF sources and an original project on the Marktstammdatenregister data published by the city.',
  courseDescription: 'Live online Python classes in English for Mönchengladbach learners from about 13, and adults: typed Python from the first lesson, files and data, then small real projects, taught by the same mentor every week in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Python in Mönchengladbach',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#live', label: 'Live online' },
    { href: '#path', label: 'Python path' },
    { href: '#solar', label: 'Solar data' }
  ],
  eyebrow: 'Mönchengladbach &middot; Python &middot; Live online, in English',
  h1: 'Online Python classes in Mönchengladbach',
  lede: 'Online can mean a video you watch alone at midnight, or a person who watches you type and stops you when the loop goes wrong. Ours is the second kind. This page shows what one live Python lesson looks like from the inside, the four stages a learner in Mönchengladbach moves through, how that sits next to Informatik at NRW schools, and a real project on the city\'s own energy data in which two dates in the same row tell two quite different stories.',
  secondaryCta: { href: '#solar', label: 'See the solar project' },
  wa: 'Hello Modern Age Coders, I am in Mönchengladbach and would like to learn Python live online in English. Could I book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students worldwide &middot; a real mentor on the call, in English',
  spec: [
    ['Who', 'Teens from about 13, and adults'],
    ['Language', 'Typed Python 3 from lesson one'],
    ['Format', 'Live video, shared screen'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'Based in India, same mentor weekly'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders runs online Python classes for Mönchengladbach as live video lessons taught in English: a mentor shares a screen with the learner, watches the code being typed and corrects it on the spot. Teenagers from about 13 and adults start with typed Python, move to files and real data, then build their own projects, either in a group of 15 to 20 or alone with a mentor who matches your pace and accent.',

  picks: {
    eyebrow: 'Where Mönchengladbach learners start',
    h2: 'Three Python courses for Mönchengladbach',
    lede: 'One full course for school pupils, one for adults and university students, and one for teenagers who already know a little Python and want to work with data.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'PMO / 01', title: 'Python for Teens', note: 'From about 13. Variables, loops and functions first, then files, small games and data, at a pace the mentor sets with the group.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PMO / 02', title: 'Python Masterclass for adults', note: 'For adults, apprentices and students. From the first script to tested, organised code, with the kind of data files a job will hand you.' },
      { course: 'data-science-course-for-teens-python-data', code: 'PMO / 03', title: 'Data Science for Teens', note: 'For teenagers who can already write a loop. Real public data, careful counting, charts and a first look at models.' }
    ]
  },

  sections: [
    {
      id: 'live',
      eyebrow: 'Live online, explained',
      h2: 'What actually happens in a live online Python lesson?',
      lede: 'Most people in Mönchengladbach who ask about online classes have tried a recorded course and stopped. The difference is a person who can see your screen.',
      body: [
        { kind: 'two',
          leftH3: 'The first ten minutes',
          left: [
            'The lesson opens on a video call. The mentor asks what happened with last week\'s exercise, and the learner shares their screen with the code still on it. If something did not run, that is where the lesson starts, because a mistake you made yourself teaches more than one in a slide.',
            'Then the mentor sets the day\'s problem in plain English: one sentence, one goal, for example "count how many lines in this file mention solar".'
          ],
          rightH3: 'The middle and the end',
          right: [
            'The learner types; the mentor watches. When a learner writes a loop that never stops, the mentor does not fix it for them. They ask what the loop is waiting for. In a group, the mentor moves between learners and shares the most useful mistake with everyone.',
            'The last minutes are for a small task to finish before next time, written down in the chat so nobody has to remember it.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Recorded course, live group and live one to one, compared (ours)', head: ['Question', 'Recorded video', 'Live group lesson', 'Live one to one'], rows: [
          ['Who sees my code?', 'Nobody', 'The mentor, and the group when shared', 'The mentor, every line'],
          ['When I am stuck', 'Pause and search', 'Ask straight away, or in the chat', 'Ask straight away'],
          ['Who sets the pace?', 'The video', 'The mentor, for the group', 'You and the mentor'],
          ['Who checks the homework?', 'Nobody', 'The mentor, next lesson', 'The mentor, next lesson'],
          ['Language', 'Varies', 'English', 'English']
        ] },
        { kind: 'source', html: 'This comparison describes how Modern Age Coders teaches; it is our own summary, not a survey. Lessons are live online, given in English by India-based mentors, to groups of 15 to 20 or to one learner.' },
        { kind: 'p', mt: true, html: 'Because everything is on video, nothing about the lesson depends on where in Mönchengladbach you live, whether that is Rheydt, Wickrath or the Gladbach side of town, and nothing depends on a bus. What it does depend on is a laptop or desktop with a keyboard and a stable connection. A tablet will do for the first week, but typed Python is far easier with real keys.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in German or in English?',
      lede: 'English only, and we would rather you know that before the first class than after it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English, said plainly', p: 'Every lesson is taught in English by mentors based in India. We do not run German-language Python classes. If you need the teacher to explain in German, we are the wrong choice, and we say so.' },
          { h3: 'Your pace, your accent', p: 'Mentors slow down, rephrase and repeat, and they get used to the way you speak. A learner who answers in short sentences, or reaches for a German word, is understood and given the English one without fuss.' },
          { h3: 'Python is already English', p: 'Keywords such as if, for, while, print and return are English words. Error messages are English too. Learning Python in English means the words on the screen and the words in the lesson are the same.' }
        ] },
        { kind: 'p', mt: true, html: 'For pupils at a German school this has a second use: an hour of technical English each week, spoken rather than read. For adults in Mönchengladbach who work for international companies around Düsseldorf, English is often the language their code will be reviewed in anyway.' }
      ]
    },
    {
      id: 'path',
      eyebrow: 'The Python path',
      h2: 'How do you go from no Python to real projects?',
      lede: 'Four stages, each one ending with something the learner has built and can explain. The times are typical, not promises; some move faster, some take longer, and both are fine.',
      body: [
        { kind: 'ol', items: [
          '<strong>Stage 1: talking to the computer.</strong> print, variables, input, if and else. The first program asks your name and answers back. By the end, a small quiz that keeps score.',
          '<strong>Stage 2: repeating and deciding.</strong> for and while loops, lists, functions. Learners write a times-table tester and a guessing game, then learn to read an error message line by line instead of panicking.',
          '<strong>Stage 3: files and real data.</strong> Opening a CSV file, reading it row by row, counting with a dictionary, sorting. This is where the Mönchengladbach solar project below sits.',
          '<strong>Stage 4: your own project.</strong> The learner chooses a question, finds or makes the data, writes the program, and explains the answer and its limits to the mentor as if presenting it.'
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'The four stages and what each one ends with (our own course plan)', head: ['Stage', 'Typical length', 'Ends with'], rows: [
          ['1. Talking to the computer', 'About 4 to 6 weeks', 'A quiz program that keeps score'],
          ['2. Repeating and deciding', 'About 6 to 8 weeks', 'A game with functions and lists'],
          ['3. Files and real data', 'About 8 to 10 weeks', 'A counted answer from a public data file'],
          ['4. Your own project', 'Open ended', 'A program, a result and its limits, explained']
        ] },
        { kind: 'source', html: 'Stage lengths are our planning figures for two live lessons a week; they are not a guarantee. Learners who join with some Python start at the stage the mentor agrees with them in the first class.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'School in NRW',
      h2: 'How does this fit with Informatik at NRW schools?',
      lede: 'NRW now teaches Informatik to every pupil early on, then lets it become optional. A private Python class works alongside that, never instead of it.',
      body: [
        { kind: 'two',
          leftH3: 'Grades 5 and 6, then choice',
          left: [
            'The Gesellschaft für Informatik records in its Informatik-Monitor 2026/27 that every general school type in Nordrhein-Westfalen teaches the compulsory subject Informatik in grades 5 and 6: "An allen allgemeinbildenden Schularten wird das Pflichtfach Informatik in den Jahrgangsstufen 5 und 6 unterrichtet."',
            'After that, at a Gymnasium on the nine-year route, Informatik is one of the subjects pupils can choose in the Wahlpflicht area of grades 9 and 10.'
          ],
          rightH3: 'The Oberstufe and the Abitur',
          right: [
            'In the Qualifikationsphase, NRW offers Informatik as a three-hour Grundkurs or a five-hour Leistungskurs, according to the same monitor. The written Abitur tasks are set centrally, and the monitor notes that no computer is used to answer them.',
            'So a pupil can write excellent Python and still need to practise writing and tracing code on paper for the exam. We help with both, and the school course is the one that counts for the grade.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Key NRW dates for the school year 2026 to 2027', head: ['What', 'When', 'Source'], rows: [
          ['Christmas holidays', '23 December 2026 to 6 January 2027', 'KMK Ferien 2026/2027'],
          ['Easter holidays', '22 March to 3 April 2027', 'KMK Ferien 2026/2027'],
          ['Written Abitur, main dates', '13 April to 5 May 2027', 'Schulministerium NRW'],
          ['Abitur Mathematik', 'Wednesday 5 May 2027', 'Schulministerium NRW, Anlage A'],
          ['Summer holidays', '19 July to 31 August 2027', 'KMK Ferien 2026/2027']
        ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Nordrhein-Westfalen page; Ministerium für Schule und Bildung NRW, Standardsicherung, Zentralabitur 2027 dates; Kultusministerkonferenz, Ferien 2026/2027 (Stand 09.10.2025). Read on 2 November 2026. We are not connected with the ministry, the KMK or any school.' },
        { kind: 'p', mt: true, html: 'Two contests run by Bundesweite Informatikwettbewerbe are open right now. Round 1 of the Bundeswettbewerb Informatik runs from 1 September to 23 November 2026, and the third round of the Jugendwettbewerb Informatik has its deadline on 23 November 2026. Both suit a pupil who has reached Stage 2 or 3. We teach with our own practice problems in the same spirit and never reproduce the organiser\'s tasks; the free archive is on the organiser\'s website.' }
      ]
    },
    {
      id: 'solar',
      tint: 'tint',
      eyebrow: 'A real Mönchengladbach project',
      h2: 'The solar register: which date answers your question?',
      lede: 'Mönchengladbach\'s open data portal publishes the city\'s part of the Marktstammdatenregister, the national register of power and gas units, under a licence that allows reuse with attribution. Our Stage 3 learners use it to learn a habit that saves professionals from embarrassing charts.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The city\'s copy has 18,864 rows, every one in Mönchengladbach. In our count, 12,277 are solar units (energietrager "Solare Strahlungsenergie"), 6,413 are battery storage units and 14 are wind turbines. The register\'s own description calls it "das zentrale amtliche Register für Strom- und Gasanlagen in Deutschland" and says operators are legally obliged to register.',
            'Each row has two dates that look alike: inbetriebnahmedatum, the day the unit was switched on, and registrierungsdatum, the day it was entered in the register.'
          ],
          rightH3: 'The question',
          right: [
            'How fast did solar grow in Mönchengladbach? A learner who picks the first date column they see might get one answer; a learner who picks the other gets a very different one.',
            'The learner\'s file, mg_energy_units.csv, is the city\'s export as downloaded on 3 November 2026. The first program counts solar units per year by both dates side by side.'
          ] },
        { kind: 'code', label: 'Version 1: count by both dates', lang: 'Python', code: V1, note: 'It prints: <code>2010  switched on: 207   registered: 0</code>, <code>2018  switched on: 87   registered: 0</code>, <code>2019  switched on: 138   registered: 377</code>, <code>2023  switched on: 2345   registered: 2237</code> and <code>2025  switched on: 2366   registered: 2402</code>.' },
        { kind: 'p', mt: true, html: 'By registration date, Mönchengladbach had no solar at all in 2010 or 2018. That is obviously false: 207 units were switched on in 2010 alone. The register simply did not take entries before 2019, so every older unit was entered later, in a rush. In 2020, 302 solar units were switched on, but 1,506 were registered. A chart by registration date would show a spurious solar boom in 2020; a chart by switch-on date shows the real growth.' },
        { kind: 'code', label: 'Version 2: check the story before you chart it', lang: 'Python', code: V2, note: 'It prints: <code>Solar units switched on before 2019: 1634</code>, <code>Units with no switch-on date yet: 156</code>, <code>First registration year in the file: 2019</code>, <code>Switched on by the end of 2018 : 1634</code>, <code>Switched on by the end of 2022 : 3242</code> and <code>Switched on by the end of 2025 : 10420</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Mönchengladbach solar units by year: switched on versus registered (our count)', head: ['Year', 'Switched on', 'Registered'], rows: [
          ['2010', '207', '0'],
          ['2019', '138', '377'],
          ['2020', '302', '1,506'],
          ['2022', '775', '756'],
          ['2023', '2,345', '2,237'],
          ['2025', '2,366', '2,402']
        ] },
        { kind: 'source', html: 'Data: Stadt Mönchengladbach open data portal, dataset Marktstammdatenregister (publisher Bundesnetzagentur, Marktstammdatenregister), licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 3 November 2026. Counts are ours, solar units only, all operating states included. The 156 units with no switch-on date are listed as In Planung.' },
        { kind: 'p', mt: true, html: 'The answer the data supports is this: 1,634 solar units were running in Mönchengladbach by the end of 2018, 3,242 by the end of 2022 and 10,420 by the end of 2025, so more than two thirds of today\'s units were switched on in the last three full years. Since 2023 the two columns move together, because new units are registered when they are installed. The lesson is not about solar. It is that a column name is a promise you have to check: before you count, ask which event the date records.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Warm up.</strong> Run Version 1 and write one sentence about 2010 that is true and one that is false.',
          '<strong>Your turn.</strong> Change the program to count battery storage units ("Speicher") instead. In which year does the first one appear by each date?',
          '<strong>Stretch.</strong> Find units whose registration year is more than five years after their switch-on year. How many are there?',
          '<strong>Explain it.</strong> Write three sentences for a newspaper reader on why the 2020 registration figure is not a boom.'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are the classes in Mönchengladbach time?',
      lede: 'The mentors teach from India, so a Mönchengladbach afternoon or evening lands in their evening. The rows below are examples to show the gap, not timetabled batches.',
      body: [
        { kind: 'table', numCols: [], caption: 'Three sample slots on the Niederrhein clock, with the matching clock in India', head: ['Mönchengladbach time', 'India time, winter (until 28 March 2027)', 'India time, summer (from 28 March 2027)'], rows: [
          ['16:45', '21:15', '20:15'],
          ['18:15', '22:45', '21:45'],
          ['Saturday 11:00', '15:30', '14:30']
        ] },
        { kind: 'source', html: 'Clock rules: the Einheitenzeitgesetz fixes MEZ at UTC+1 in winter and MESZ at UTC+2 in summer. In 2026 the clocks went back on 25 October; in 2027 they go forward on 28 March. India stays on UTC+5:30 with no clock change, which puts it four and a half hours ahead of Mönchengladbach from late October to late March, and three and a half hours ahead the rest of the year.' },
        { kind: 'p', mt: true, html: 'You pick a slot in your own clock when you book, and the mentor sees it in theirs. Pupils often take the late afternoon after school; working adults tend to prefer a weekday evening or a Saturday morning. NRW school holidays do not stop the classes, though many learners pause for a family trip and pick up again afterwards.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress you can check',
    h2: 'What can a Mönchengladbach learner do after each stage?',
    lede: 'Our own checkpoints. The mentor uses them to place a new learner and to tell you honestly how things are going.',
    table: { caption: 'Python checkpoints (ours)', head: ['Checkpoint', 'Typical point', 'The learner can'], rows: [
      ['A. First program', 'Week 1', 'Run a script, print text, store and change a variable'],
      ['B. Decisions', 'Weeks 2 to 5', 'Use if, elif and else to react to input'],
      ['C. Loops and lists', 'Weeks 5 to 12', 'Repeat work, keep a list and write a function'],
      ['D. Files', 'Weeks 12 to 20', 'Read a CSV file and count with a dictionary'],
      ['E. Judgement', 'Weeks 20 onward', 'Say which column answers a question, and why']
    ] },
    left: { h3: 'For parents of pupils', ps: [
      'Checkpoint E is the one the solar project trains. It is also the skill a teacher looks for when a pupil explains code on paper in an exam.',
      'You will hear what was built and what was hard, not how many minutes were spent online.'
    ] },
    right: { h3: 'For adult learners', ps: [
      'Most adults reach checkpoint D in about four months of two lessons a week. That is the point where Python starts saving time at work.',
      'If a week is lost to work or family, the mentor picks up where you are, not where the plan said you should be.'
    ] }
  },

  catalogue: {
    eyebrow: 'More Python and data',
    h2: 'Nine more courses for Mönchengladbach learners',
    lede: 'Each of these runs the same way as the three above: live, in English, and with a mentor you will get to know.',
    bands: [
      { num: 'I', h3: 'Starting points', sub: 'Ages 9 to adult', courses: [
        { code: 'PMO / START / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'For younger brothers and sisters, typed Python from 9.' },
        { code: 'PMO / START / 02', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP preparation', blurb: 'Structured Python towards the Python Institute exams.' },
        { code: 'PMO / START / 03', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik companion', blurb: 'Support next to school Informatik, Klasse 5 to 10.' }
      ] },
      { num: 'II', h3: 'Working with data', sub: 'Teens and adults', courses: [
        { code: 'PMO / DATA / 01', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Spreadsheets, SQL and Python for real reports.' },
        { code: 'PMO / DATA / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The maths behind every honest chart.' },
        { code: 'PMO / DATA / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data for non-programmers', blurb: 'Analysis with familiar tools before any code.' }
      ] },
      { num: 'III', h3: 'Building with Python', sub: 'Teens and adults', courses: [
        { code: 'PMO / BUILD / 01', slug: 'python-web-development-django-flask-course', title: 'Web apps with Python', blurb: 'Django and Flask, from a form to a working site.' },
        { code: 'PMO / BUILD / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts that rename, fetch and tidy for you.' },
        { code: 'PMO / BUILD / 03', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'For Oberstufe pupils, alongside the school course.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'The weekly rhythm',
    h2: 'How the live Python classes run each week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Late afternoon', l: 'After school in Mönchengladbach, for pupils.' },
      { time: 'Evening', l: 'After work, for adults on weekdays.' },
      { time: 'Saturday', l: 'A calm morning slot for either.' }
    ],
    cells: [
      { h3: 'Two lessons a week', p: 'Each about an hour, with the same mentor.' },
      { h3: 'Screen shared', p: 'The mentor sees every line you type.' },
      { h3: 'Small homework', p: 'One task, written in the chat.' },
      { h3: 'Real files', p: 'Public data from your own city.' },
      { h3: 'Plain English', p: 'Rephrased until it is clear.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty, or just you.' }
    ]
  },

  projectsH2: 'What our learners have built',
  projectsLede: 'Projects by our students elsewhere, shown as they made them. The <a class="ag-inline-link" href="/student-labs">student labs</a> page collects more.',
  reviewsLede: 'Google reviews from our students and parents, quoted word for word.',

  fees: {
    h2: 'Fees for Python classes in Mönchengladbach',
    lede: 'You pay monthly for eight live lessons. We show the fee in euro, worked out at the European Central Bank reference rate, but the card payment itself is made in US dollars and your bank does the conversion, so your statement may show a slightly different euro amount.',
    free: ['A free first lesson', 'A first Python program on a shared screen', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar level', 'One regular mentor', 'Two live lessons a week', 'Monthly, cancel any month'],
    one: ['You and one mentor', 'Your own pace and your own project', 'Times agreed with you']
  },

  faq: {
    eyebrow: 'Mönchengladbach asks',
    h2: 'Online Python classes in Mönchengladbach: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No, never: our Python lessons are held live in English, and only in English, by mentors who work from India. They slow down, adjust to your accent and say things a second way when the first one did not land. Since Python keywords are English words, lesson and code share one language.' },
      { q: 'Is an online Python class just a video?', a: 'Not with us. Each lesson is a live video call with a mentor who sees your shared screen while you type, asks questions and corrects mistakes as they happen. Nothing is pre-recorded, and the homework is checked in the next lesson.' },
      { q: 'Do I need to know any programming first?', a: 'No. Stage 1 starts with print and variables. If you already know some Python, the free first class is used to find the right starting stage so you do not repeat what you know.' },
      { q: 'What computer do I need?', a: 'A laptop or desktop with a keyboard, a webcam or at least a microphone, and a stable internet connection. Python and the editor are free, and the mentor helps you install them in the first lesson.' },
      { q: 'When are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils often choose late afternoons, and adults often choose weekday evenings or Saturday mornings in Mönchengladbach time.' },
      { q: 'Does this replace Informatik at school?', a: 'No. In NRW every pupil has Informatik in grades 5 and 6, and later it can be chosen as a Grundkurs or Leistungskurs. We teach alongside school; the school course is the one that counts for grades and the Abitur.' },
      { q: 'Can adults join, or is it only for pupils?', a: 'Adults are welcome. The Python Masterclass is built for adults, apprentices and university students, and one-to-one plans let you learn around shifts or family. Many adults learn Python to automate work with files and spreadsheets.' },
      { q: 'How many people are in a group?', a: 'A group holds 15 to 20 learners who are at roughly the same stage. Anyone who prefers undivided attention can take the one-to-one plan instead: two private lessons each week, at slots agreed with the mentor.' },
      { q: 'Which currency will I be charged in?', a: 'In US dollars. The fees section displays each monthly plan in euro, converted with the ECB reference rate, so you can compare it easily; your card is then charged in dollars and your own bank turns that into euro, which can move the final figure by a little. Lesson one costs nothing.' },
      { q: 'What is the solar register project on this page?', a: 'An original project of ours on the Marktstammdatenregister data published by Stadt Mönchengladbach. Learners count 12,277 solar units by switch-on date and by registration date and find that registration only began in 2019, so the dates tell different stories.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Python learners in North Rhine-Westphalia.',
    items: [
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in NRW', p: 'Our page for the whole Land.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'The Python path in more detail.' },
      { href: '/informatik-abitur-nrw', label: 'Informatik Abitur NRW', p: 'The NRW exam, explained.' },
      { href: '/coding-classes-for-adults-germany', label: 'Coding for adults', p: 'Starting later, without fuss.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, do not copy', p: 'How we teach in the age of AI.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live lessons in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first Python lesson',
    lede: 'During the free lesson you type and run a few lines of Python while the mentor watches the shared screen. Afterwards you get an honest view of where to begin and which of the courses above matches you.',
    readFirst: 'Curious about the format first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a lesson, and the <a class="ag-inline-link" href="/courses">course catalogue</a> has each full syllabus.',
    note: 'All lessons are live on video, in English, with India-based mentors. A WhatsApp message gets the quickest reply.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-course-germany', label: 'Python course in Germany' },
        { href: '/python-and-dsa-for-international-students-germany', label: 'Python and DSA' },
        { href: '/coding-classes-for-teens-germany', label: 'Coding for teens' },
        { href: '/coding-classes-for-adults-germany', label: 'Coding for adults' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'North Rhine-Westphalia' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Ask which event a date records'
  },

  personalityCss: `
.ag-root.ag-pmo .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-pmo .ag-capsule { border-left-width: 4px; }
.ag-root.ag-pmo .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-pmo .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-pmo .ag-steps li { margin-bottom: 10px; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); Ministerium für Schule und Bildung NRW, Zentralabitur 2027 dates and ZP10; KMK Ferien 2026/2027; Bundesweite Informatikwettbewerbe 2026 dates; Einheitenzeitgesetz; Destatis GV-ISys 31.12.2024; Stadt Mönchengladbach open data, Marktstammdatenregister, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'The solar register: an original Python project on the 12,277 solar units in Mönchengladbach\'s copy of the Marktstammdatenregister, counted by switch-on date and by registration date; registration starts in 2019, so 2020 shows 1,506 registrations but only 302 switch-ons. Lesson family: two date columns, two stories.',
    requiredMentions: ['mg_energy_units.csv', 'Solar units switched on before 2019: 1634', 'Switched on by the end of 2025 : 10420', 'registrierungsdatum', 'Switched on by the end of 2022 : 3242', '302 solar units were switched on, but 1,506 were registered', '12,277', 'Ask which event a date records'],
    sources: [
      { claim: 'NRW Informatik in grades 5 and 6; GK and LK hours; written Abitur without a computer.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'NRW written Abitur 2027 dates and Mathematik date.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/termine/2027' },
      { claim: 'NRW holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Bundeswettbewerb Informatik round 1 dates.', url: 'https://bwinf.de/bundeswettbewerb/' },
      { claim: 'Mönchengladbach Marktstammdatenregister data and licence.', url: 'https://opendata.moenchengladbach.de/explore/dataset/marktstammdatenregister/' }
    ],
    rejectedClaims: [
      'Any reason for single units with very old switch-on dates: not stated in the data, so none given.',
      'A solar boom in 2020: refuted by the switch-on dates; the 2020 figure is late registration.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with the city, the Bundesnetzagentur, the ministry or BWINF: none.'
    ]
  }
};
