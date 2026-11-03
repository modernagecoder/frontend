'use strict';
// Online Python classes in Mainz (ag- city page, Germany cluster P6 row DE159, tier-2 shape online-python = live online
// explained, Python path). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors who
// match the learner's pace and accent; euro shown, USD charged.
// Spine: "online" can mean a video you watch alone or a person who watches you type. This page explains the second, step by
// step, then follows the Python path to a program that reads live data from the Rhine gauge in Mainz over the internet.
// Sources (copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/online-python-classes-mainz-germany/):
//  - GI Informatik-Monitor 2026/27, Rheinland-Pfalz page (infmon-rheinland-pfalz/e77afcbd.txt): "Seit dem Schuljahr 2021/22
//    findet an 21 Informatik-Profil-Schulen in Jahrgangsstufe 5 verbindlicher Informatikunterricht statt."; Gymnasium G9
//    grades 9 and 10 "ein zwei- bis dreistündiges Wahlfach Informatik"; Einführungsphase "dreistündig als Grundfach oder
//    fünfstündig als Leistungsfach"; Qualifikationsphase same hours; Oberstufe named "Mainzer Studienstufe" in the cited
//    Landesverordnung; "Im Leistungskurs Informatik wird schriftlich geprüft."; written raised-level tasks "von den Lehrkräften
//    vor Ort erstellt und beim Ministerium für Bildung zur Auswahl eingereicht"; "Praktische Prüfungsanteile (mit
//    Rechnereinsatz) sind möglich, jedoch nicht verpflichtend." National: RLP among six Länder without Informatik for all
//    (fact 92); "Zum Schuljahr 2028/29 wird Informatik in Rheinland-Pfalz zum Pflichtfach an allen Schulen im Gesamtumfang von
//    vier Wochenstunden." (fact 95).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025): "Rheinland-Pfalz (6) 05.10. - 16.10. 23.12. - 08.01. -- 22.03. - 02.04. --
//    28.06. - 06.08." (fact 280).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Mainz 224,684 (Land capital); Rheinland-Pfalz 4,129,569; Wiesbaden
//    288,850 (Hessen).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Wasserstraßen- und Schifffahrtsverwaltung des Bundes (WSV), PEGELONLINE REST API v2, station MAINZ (number
//    25100100, Rhein km 498.27, gauge zero 78.373 m above NHN valid from 2019-11-01, timeseries W "WASSERSTAND ROHDATEN", cm,
//    every 15 minutes). Licence on pegelonline.wsv.de Nutzungsbedingungen: "Lizenz DL-DE->Zero-2.0", data may be used "für die
//    kommerzielle und nicht kommerzielle Nutzung". Request stations/MAINZ/W/measurements.json?start=P31D downloaded
//    3 November 2026, saved as rhein_mainz.json, 219,991 bytes, sha256 300d0a8e...b6b58cd8, 2,975 readings from
//    2026-10-03T20:00:00+02:00 to 2026-11-03T18:45:00+01:00. The Q (discharge) series is raw data and is not used.
//    The city of Mainz has no open data portal we could reach (opendata.mainz.de and geoportal.mainz.de did not resolve on
//    3 November 2026; GovData lists no city dataset with a file), so the federal gauge inside the city is used.
// Our own calculations (scratchpad de/w/T3/mainz/run/v1.py, v2.py, python3 -I, Python 3.14.8):
//  v1: "Readings: 2975"; "From 2026-10-03 20:00:00+02:00 to 2026-11-03 18:45:00+01:00"; "Change, first to last: 23.0 cm";
//      "Lowest: 94.0 cm at 2026-10-06 13:00:00+02:00"; "Highest: 162.0 cm at 2026-10-28 12:30:00+01:00".
//  v2: "Biggest rise within 24 hours: 28.0 cm"; "From 121.0 cm at 2026-10-25 02:30:00+02:00 to 149.0 cm at 2026-10-26
//      01:30:00+01:00" (24 real hours, 23 on the wall clock, because summer time ended that night).
// Lesson family: a sliding window; the biggest change over a fixed span is not the change from the first reading to the last.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import json',
  'from datetime import datetime',
  '',
  'with open("rhein_mainz.json", encoding="utf-8") as f:',
  '    readings = [(datetime.fromisoformat(r["timestamp"]), r["value"]) for r in json.load(f)]',
  '',
  'first, last = readings[0], readings[-1]',
  'print("Readings:", len(readings))',
  'print("From", first[0], "to", last[0])',
  'print("Change, first to last:", last[1] - first[1], "cm")',
  'low = min(readings, key=lambda r: r[1])',
  'high = max(readings, key=lambda r: r[1])',
  'print("Lowest:", low[1], "cm at", low[0])',
  'print("Highest:", high[1], "cm at", high[0])'
].join('\n');

const V2 = [
  'from datetime import timedelta',
  '',
  'DAY = timedelta(hours=24)',
  'rise, start = 0, 0',
  'for end in range(len(readings)):',
  '    while readings[end][0] - readings[start][0] > DAY:',
  '        start += 1',
  '    window = readings[start:end + 1]',
  '    lowest = min(window, key=lambda r: r[1])',
  '    if readings[end][1] - lowest[1] > rise:',
  '        rise = readings[end][1] - lowest[1]',
  '        found = (lowest, readings[end])',
  'print("Biggest rise within 24 hours:", rise, "cm")',
  'print("From", found[0][1], "cm at", found[0][0], "to", found[1][1], "cm at", found[1][0])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Mainz: online Python' },
  slug: 'online-python-classes-mainz-germany',
  code: 'pym',
  accent: '#904311',
  accentRationale: 'Online Python in Mainz: a burnt sienna #904311 for the red sandstone of Mainz Cathedral above the Rhine; contrast 5.69 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-rhineland-palatinate', name: 'Rhineland-Palatinate' }],
  routeLabel: 'Online Python classes in Mainz',
  title: 'Online Python Classes in Mainz: Live Lessons in English',
  description: 'Online Python classes in Mainz, live in English: how a class runs minute by minute, the Python path by age, Informatik in Rhineland-Palatinate and a Rhine data task.',
  ogDescription: 'What a live online Python class in Mainz really looks like, taught in English at the learner\'s pace, the path from print() to real data, Informatik rules in Rhineland-Palatinate, and an original project on the Rhine gauge in Mainz.',
  twitterDescription: 'Live online Python in Mainz, in English: how a class runs, the path by age, and a Rhine gauge project.',
  pageName: 'Online Python Classes in Mainz',
  webPageDescription: 'A guide for Mainz learners and families to live online Python classes taught in English, built from the GI Informatik-Monitor, the KMK holiday table and Destatis, with an original sliding-window project on the federal Rhine gauge at Mainz.',
  courseDescription: 'Live online Python classes in English for learners in Mainz: typed Python for children from 9, a full Python course for teenagers, and Python from zero for adults, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'Rhineland-Palatinate', href: '/coding-classes-in-rhineland-palatinate' }],
  crumbLabel: 'Python in Mainz',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#live', label: 'A live class' },
    { href: '#path', label: 'Path' },
    { href: '#project', label: 'Rhine data' },
    { href: '#calendar', label: 'Times' }
  ],
  eyebrow: 'Mainz &middot; Python, live online &middot; Ages 9 to adult',
  h1: 'Online Python classes in Mainz',
  lede: 'Search for online Python in Mainz and most results are recorded videos: you press play, you are on your own. Our classes are the opposite. A mentor is on the call, watches you type, and stops you at the line where you went wrong. This page shows what that looks like hour by hour, the path we follow from a first print() to real data, where Python sits in Rhineland-Palatinate schools, and a program that reads the Rhine at Mainz.',
  secondaryCta: { href: '#live', label: 'See how a class runs' },
  wa: 'Hello Modern Age Coders, I am in Mainz and interested in live online Python classes in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; a real mentor on every call, in English',
  spec: [
    ['Language', 'Python 3, typed from the first class'],
    ['Ages', 'Children from 9, teenagers, adults'],
    ['Format', 'Live video, shared screen, two hours a week'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'Based in India, teaching in English'],
    ['Try it', 'A free first class']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'Online Python classes in Mainz at Modern Age Coders are live video lessons taught in English by a mentor who watches the learner write real Python and corrects it on the spot. Children from 9, teenagers and adults each follow their own course, from first programs to working with real data, in a group of fifteen to twenty or one to one, at times that fit a Mainz day.',

  picks: {
    eyebrow: 'Where Python starts',
    h2: 'Which Python course should a Mainz learner take?',
    lede: 'Three courses, one per age. The language is the same Python 3 in each; the pace, the examples and the projects are not.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PYM / 01', title: 'Python and AI for Kids', note: 'For 9 to 12 year olds, over 8 to 10 months. Turtle graphics and games first, so a child sees each line do something, then lists, files and small AI projects.' },
      { course: 'python-complete-masterclass-teens', code: 'PYM / 02', title: 'Python for Teens', note: 'For 13 to 18 year olds, over 10 to 12 months. Beginner to advanced: functions, files, classes, testing and data, with projects a teenager can show to a teacher or university.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PYM / 03', title: 'Python Masterclass for Adults', note: 'Adults 18 and over, 9 to 11 months. From zero to confident, for career changers, students and people who want to automate their own work.' }
    ]
  },

  sections: [
    {
      id: 'live',
      eyebrow: 'What "live online" means',
      h2: 'What happens in a live online Python class, minute by minute?',
      lede: 'An hour, on video, with a shared screen. Here is a typical one for a teenage group, step by step.',
      body: [
        { kind: 'ol', items: [
          '<strong>Minutes 0 to 5: a warm-up question.</strong> The mentor puts three lines of code on screen and asks what they print. Learners answer before anyone runs it, because predicting is half of programming.',
          '<strong>Minutes 5 to 20: one new idea.</strong> The mentor writes a short program live, talking through every line, and makes a deliberate mistake so the group sees a real error message and how to read it.',
          '<strong>Minutes 20 to 45: the learners type.</strong> Each learner writes their own version in their own editor and shares the screen when stuck. The mentor reads the code aloud with them, points to the line, and asks a question rather than giving the fix.',
          '<strong>Minutes 45 to 55: show and explain.</strong> Two or three learners run their program for the group and explain one choice they made.',
          '<strong>Minutes 55 to 60: the next step.</strong> A short task for the days between classes, small enough to finish, with the mentor available on the class chat.'
        ] },
        { kind: 'p', mt: true, html: 'A one-to-one class follows the same shape, but the middle part is longer and the mentor can move as fast or as slowly as the learner needs. Children\'s classes break the hour into shorter pieces with more drawing and games, because a nine year old concentrates in bursts.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'What you need', p: 'A laptop or desktop computer with a keyboard, a stable internet connection and a headset or quiet room. Python and a simple editor are installed together in the first class; tablets are fine for watching but not for typing code.' },
          { h3: 'What you do not need', p: 'No previous programming, no special maths, no paid software. Python is free, and every tool we use in class runs on Windows, macOS and Linux.' },
          { h3: 'Why live beats video', p: 'A recorded lesson cannot see your screen. Most beginners stop not because Python is hard but because one small error blocks them for an evening. A mentor clears that block in a minute and teaches the learner how to clear the next one.' }
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the online Python classes taught in German?',
      lede: 'No. Every class is in English, and we would rather you knew that before you book.',
      body: [
        { kind: 'two',
          leftH3: 'Why English suits Python',
          left: [
            'Python\'s keywords are English words: if, for, while, return, import. Its error messages are in English, and so is the official documentation. A learner in Mainz who studies Python in English never has to translate between the classroom and the tool.',
            'Our mentors are based in India and teach only in English. We do not have German-speaking teachers and do not pretend to.'
          ],
          rightH3: 'Your pace, your accent',
          right: [
            'Mentors speak clearly and not too fast, rephrase when an explanation does not land, and get used to each learner\'s accent quickly. Learners may answer in simple English; nobody is marked down for grammar in a programming class.',
            'Because the code is on the shared screen the whole time, a missed word rarely means a missed idea.'
          ] }
      ]
    },
    {
      id: 'path',
      eyebrow: 'The Python path',
      h2: 'What does a learner in Mainz learn in Python, and in what order?',
      lede: 'The order matters more than the speed. Each stage depends on the one before, and every stage ends with something the learner made.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our Python path, with typical timing for a beginner (ours)', head: ['Stage', 'What the learner can do', 'Typical month (teen or adult group)'], rows: [
          ['1. First programs', 'print, input, variables, arithmetic, string formatting', 'Month 1'],
          ['2. Decisions and loops', 'if, elif, else, for, while, counting and totals', 'Months 1 to 2'],
          ['3. Collections', 'Lists, dictionaries, sets, and choosing between them', 'Months 2 to 3'],
          ['4. Functions', 'Write, test and reuse functions with clear inputs and outputs', 'Months 3 to 4'],
          ['5. Files and data', 'Read CSV and JSON, clean values, summarise', 'Months 4 to 6'],
          ['6. Internet data', 'Fetch data from a public web service, save a snapshot, analyse it', 'Months 6 to 8'],
          ['7. Projects', 'A program of the learner\'s own design, documented and tested', 'Months 8 onwards']
        ] },
        { kind: 'source', html: 'Our own course structure. Children aged 9 to 12 cover stages 1 to 5 more slowly, with games and turtle graphics, and meet stage 6 in a simplified form. Adults on the masterclass go further into classes, testing and automation.' },
        { kind: 'p', mt: true, html: 'Stage 6 is where online Python becomes interesting in Mainz specifically: the federal waterways administration publishes the Rhine water level at Mainz as live open data, and a learner at stage 6 can fetch it, store it and ask it questions. The project below is that stage in miniature.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real Mainz project',
      h2: 'How fast did the Rhine rise at Mainz? A sliding-window project',
      lede: 'The Rhine gauge at Mainz reports the water level every fifteen minutes. We saved a month of readings and asked a question that sounds simple and is not.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'PEGELONLINE, the gauge service of the Wasserstraßen- und Schifffahrtsverwaltung des Bundes, publishes the level at gauge MAINZ (Rhine kilometre 498.27) as open data under the Datenlizenz Deutschland Zero 2.0, which allows commercial and non-commercial reuse. We requested the last 31 days on 3 November 2026 and saved the answer as rhein_mainz.json: 2,975 readings, each a timestamp and a level in centimetres.',
            'The level is measured from the gauge zero, which PEGELONLINE gives as 78.373 metres above sea level (NHN). So 120 cm does not mean the river is 120 cm deep; it is a reading on a scale.'
          ],
          rightH3: 'The question',
          right: [
            'How much did the Rhine rise in Mainz this month? The quick answer is to subtract the first reading from the last. Version 1 does that, and also finds the lowest and highest readings.',
            'Then we ask a better question: what was the biggest rise within any 24 hours? That needs a window that slides along the readings, one step at a time, which is Version 2.'
          ] },
        { kind: 'code', label: 'Version 1: first, last, lowest, highest', lang: 'Python', code: V1, note: 'It prints: <code>Readings: 2975</code>, <code>From 2026-10-03 20:00:00+02:00 to 2026-11-03 18:45:00+01:00</code>, <code>Change, first to last: 23.0 cm</code>, <code>Lowest: 94.0 cm at 2026-10-06 13:00:00+02:00</code> and <code>Highest: 162.0 cm at 2026-10-28 12:30:00+01:00</code>.' },
        { kind: 'p', mt: true, html: 'A rise of 23 cm in a month sounds calm. But the lowest and highest readings are 68 cm apart, and they are only three weeks apart. The first-to-last figure hides everything that happened in between: the river can climb, fall back and climb again, and subtracting two endpoints sees none of it.' },
        { kind: 'code', label: 'Version 2: add below Version 1, a 24-hour sliding window', lang: 'Python', code: V2, note: 'The two new lines it prints: <code>Biggest rise within 24 hours: 28.0 cm</code> and <code>From 121.0 cm at 2026-10-25 02:30:00+02:00 to 149.0 cm at 2026-10-26 01:30:00+01:00</code>.' },
        { kind: 'p', mt: true, html: 'In one day, from the early hours of 25 October 2026, the Rhine at Mainz rose 28 cm, more than the whole "change" in Version 1. Look closely at the clock: the window runs from 02:30 to 01:30 the next night, which looks like 23 hours. It is 24. Summer time ended that very night, the clocks went back an hour, and because each timestamp carries its offset (+02:00, then +01:00), Python measured real elapsed time. Had we stripped the offsets, the window would have been wrong by an hour.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Three ways to describe the same month of the Rhine at Mainz (our calculations)', head: ['Question', 'Answer', 'What it hides'], rows: [
          ['Last reading minus first', '23 cm', 'Every rise and fall in between'],
          ['Highest minus lowest', '68 cm', 'How long the change took'],
          ['Biggest rise within 24 hours', '28 cm', 'Slower rises spread over several days']
        ] },
        { kind: 'source', html: 'Data: WSV, PEGELONLINE, gauge MAINZ, series W (water level, raw data), readings from 3 October 2026 20:00 to 3 November 2026 18:45, downloaded 3 November 2026, licence Datenlizenz Deutschland Zero 2.0. Calculations and code are ours. Raw gauge data can be revised later; we are not connected with the WSV.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 12.</strong> Draw ten readings on squared paper. Mark the first and last, then find the steepest climb between any two neighbours. Are they the same?',
          '<strong>Teenagers.</strong> Change the window to 6 hours, then to 72. Print the rise for each and explain why a longer window never gives a smaller answer.',
          '<strong>Adults.</strong> Version 2 calls min() on the whole window every step. Rewrite it so it keeps track of the lowest value as the window moves, and count how much faster it runs.',
          '<strong>Everyone.</strong> Find the biggest fall within 24 hours. Then download a fresh copy from PEGELONLINE and see whether the answer has changed.'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Mainz schools',
      h2: 'Do schools in Mainz teach Python or Informatik?',
      lede: 'Some do, many do not yet. Rhineland-Palatinate is one of six Länder where Informatik is not compulsory for every pupil, but that is scheduled to change.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in Rhineland-Palatinate schools, school year 2026/27', head: ['Where', 'What the GI reports'], rows: [
          ['Informatik-Profil-Schulen', 'Compulsory Informatik in grade 5 at 21 schools since 2021/22, then continuous Informatik from grade 6 to 10 if chosen'],
          ['Gymnasium (nine-year) and Integrierte Gesamtschule', 'A two- to three-hour Informatik elective in grades 9 and 10'],
          ['Gymnasium (eight-year)', 'A three-hour Wahlpflichtfach Informatik in grades 8 and 9'],
          ['Oberstufe, Einführungsphase and Qualifikationsphase', 'Grundfach three hours a week, Leistungsfach five hours a week'],
          ['From 2028/29', 'Informatik compulsory at all schools, four weekly hours in total']
        ] },
        { kind: 'source', html: 'Compiled from the GI Informatik-Monitor 2026/27 (the Rhineland-Palatinate entry and the national overview), which we read on 2 November 2026.' },
        { kind: 'p', mt: true, html: 'The Oberstufe in Rhineland-Palatinate is known by the name of this city: the Land ordinance for it is the "Mainzer Studienstufe". In the Abitur, the Leistungsfach Informatik is examined in writing; the GI notes that the written tasks are drafted by teachers at each school and submitted to the education ministry, and that practical parts with a computer are allowed but not required. A pupil who keeps a Grundfach from the Einführungsphase onwards can be examined in it orally.' },
        { kind: 'p', html: 'For a Mainz pupil, that means the school course is the one that decides the grade, and we teach beside it rather than instead of it. What we add is time at the keyboard: most school Informatik is three hours a week shared between theory, written work and a class of twenty-five, while our learners write Python for most of every hour. Our <a class="ag-inline-link" href="/coding-classes-in-rhineland-palatinate">Rhineland-Palatinate page</a> covers the Land in more detail.' }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'Times and holidays',
      h2: 'What times are live Python classes in Mainz?',
      lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Mainz times and the matching time in India', head: ['Mainz', 'India in winter (until 28 March 2027)', 'India in summer (from 28 March 2027)'], rows: [
          ['15:45', '20:15', '19:15'],
          ['17:15', '21:45', '20:45'],
          ['Saturday 12:00', '16:30', '15:30'],
          ['Sunday 10:15', '14:45', '13:45']
        ] },
        { kind: 'source', html: 'German clocks follow the Einheitenzeitgesetz: UTC+1 (MEZ) through the winter, UTC+2 (MESZ) through the summer. The 2026 switch back happened on 25 October; the 2027 switch forward is on 28 March. India is on UTC+5:30 all year: 4 hours 30 minutes ahead of Mainz in winter, 3 hours 30 minutes in summer. The rows are examples, not fixed batch times.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Rhineland-Palatinate school holidays 2026/27 (KMK)', head: ['Holiday', 'First day', 'Last day'], rows: [
          ['Herbstferien', '5 October 2026', '16 October 2026'],
          ['Weihnachtsferien', '23 December 2026', '8 January 2027'],
          ['Osterferien', '22 March 2027', '2 April 2027'],
          ['Sommerferien', '28 June 2027', '6 August 2027']
        ] },
        { kind: 'source', html: 'Taken from the KMK holiday overview for 2026/2027 (dated 9 October 2025), Rheinland-Pfalz line. That line lists no winter or Whitsun holidays for the Land.' },
        { kind: 'p', mt: true, html: 'Classes run through the holidays unless you ask to pause. Mainz has 224,684 residents (Destatis, 31 December 2024) and is the capital of a Land of 4,129,569, but our learners also join from the other bank of the Rhine: Wiesbaden, with 288,850, is in Hessen, so a Wiesbaden pupil has Hessen\'s school rules and holidays, not those in the table above. Online, the river is no border; we simply plan around the right calendar.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Checkpoints',
    h2: 'How will I know a learner is making progress?',
    lede: 'Our own checkpoints, each proven by a program the learner wrote and can explain.',
    table: { caption: 'Python checkpoints (ours)', head: ['Checkpoint', 'Proof'], rows: [
      ['Reads code', 'Predicts the output of ten lines before running them'],
      ['Writes code', 'Solves a small task without copying an example'],
      ['Debugs', 'Reads a traceback and finds the failing line alone'],
      ['Handles data', 'Loads a CSV or JSON file and answers a question about it'],
      ['Thinks in windows', 'Explains why first-to-last change and the biggest 24-hour rise differ']
    ] },
    left: { h3: 'For parents of younger learners', ps: [
      'You will get a short note after every few classes: what your child built, which checkpoint is next, and one thing to ask them about at dinner.',
      'Children are never compared with each other in reports.'
    ] },
    right: { h3: 'For adult learners', ps: [
      'Bring your own data if you can. A file from your job or hobby makes the "handles data" checkpoint far more useful than any example of ours.',
      'The debugging checkpoint is the one that changes most: after it, being stuck stops being a reason to quit.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further Python',
    h2: 'Nine more courses for Mainz learners',
    lede: 'Before Python, beside school, and after the first course. All live and in English.',
    bands: [
      { num: 'I', h3: 'Before and beside', sub: 'Ages 6 to 16', courses: [
        { code: 'PYM / FIRST / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'For children not yet ready to type, 6 to 12.' },
        { code: 'PYM / FIRST / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored in Python, 10 to 15.' },
        { code: 'PYM / FIRST / 03', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Help beside Informatik lessons, Klasse 5 to 10.' }
      ] },
      { num: 'II', h3: 'Deeper for teenagers', sub: 'Ages 13 to 19', courses: [
        { code: 'PYM / DEEP / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python with data and first models, 14 to 18.' },
        { code: 'PYM / DEEP / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for teens', blurb: 'Data structures and problem solving, 13 to 18.' },
        { code: 'PYM / DEEP / 03', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'Oberstufe Informatik in Java and Python, 16 to 19.' }
      ] },
      { num: 'III', h3: 'Adults, after the basics', sub: '18 and over', courses: [
        { code: 'PYM / PRO / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python automation and AI', blurb: 'Scripts for real work, then applied AI.' },
        { code: 'PYM / PRO / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Python, statistics and machine learning in depth.' },
        { code: 'PYM / PRO / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP preparation', blurb: 'Preparation for the Python Institute exams.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'The format',
    h2: 'How are the online classes organised?',
    lede: 'Two one-hour live classes a week with the same mentor, plus a short task in between. Nothing is pre-recorded.',
    slots: [
      { time: 'Late afternoon', l: 'Mainz school-day slots for children and teenagers.' },
      { time: 'Weekend', l: 'Saturday and Sunday daytime for families and adults.' },
      { time: 'One to one', l: 'A time you agree with your mentor, changeable at short notice.' }
    ],
    cells: [
      { h3: 'Real Python', p: 'Typed code in a real editor, never a toy language.' },
      { h3: 'Shared screen', p: 'The mentor sees the learner\'s code as it is written.' },
      { h3: 'Same mentor', p: 'One person who knows the learner\'s habits.' },
      { h3: 'Groups by age', p: 'Nine year olds and adults never share a batch.' },
      { h3: 'Small tasks', p: 'Short practice between classes, checked next time.' },
      { h3: 'Progress notes', p: 'Brief updates on what was built and what is next.' }
    ]
  },

  projectsH2: 'Programs our students have built',
  projectsLede: 'A selection of student work, from games to data tools. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents and students wrote on Google, unedited.',

  fees: {
    h2: 'How much do online Python classes cost in Mainz?',
    lede: 'A monthly fee covers eight live classes. The figure you see is in euro, converted at the European Central Bank reference rate; the charge itself goes through in US dollars, and your bank turns it into euro, so the amount it books may be slightly different.',
    free: ['A free first class', 'Python installed and a first program written', 'No card required'],
    group: ['Fifteen to twenty learners of a similar age', 'A regular mentor', 'Two live classes a week', 'Monthly, stop whenever you like'],
    one: ['One learner and one mentor', 'Pace and projects set around the learner', 'Times you agree together']
  },

  faq: {
    eyebrow: 'Mainz asks',
    h2: 'Online Python classes in Mainz: frequent questions',
    items: [
      { q: 'Are the Python classes taught in German?', a: 'No. We teach in English and nothing else; our mentors work from India and slow down, rephrase and adjust to how each learner speaks. Python itself uses English keywords and error messages, so learning it in English is a natural fit.' },
      { q: 'Are the classes live or recorded?', a: 'Live. A mentor is on the video call for the whole hour, sees the learner\'s screen and corrects mistakes as they happen. We do not sell recorded courses; the live mentor is the point of the class.' },
      { q: 'What computer does a learner need?', a: 'A laptop or desktop with a keyboard, a reliable internet connection and a headset. Python and the editor are free and are installed together in the first class. A tablet alone is not enough for typing code.' },
      { q: 'From what age can my child learn Python?', a: 'From about 9, in our Python and AI for Kids course. Younger children usually start with Scratch, where blocks replace typing, and move to Python when reading and typing feel comfortable.' },
      { q: 'Do Mainz schools teach Python?', a: 'Some do. The Gesellschaft für Informatik reports compulsory Informatik in grade 5 at 21 Informatik-Profil-Schulen in Rhineland-Palatinate and electives at most Gymnasien. From 2028/29 Informatik becomes compulsory at all schools in the Land, four weekly hours in total.' },
      { q: 'When are classes in Mainz time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Late afternoons and weekend daytimes are the usual choices in Mainz.' },
      { q: 'Can adults in Mainz learn Python from zero?', a: 'Yes. The adult Python masterclass assumes no experience at all and moves from first programs to working with files, data and automation. Many adult learners bring a task from their own job to practise on.' },
      { q: 'What is the Rhine project on this page?', a: 'An original exercise of ours on a month of water levels from the federal gauge at Mainz. Learners compare the first-to-last change with the biggest rise inside any 24 hours, using a sliding window, and see why the two answers differ.' },
      { q: 'How many learners share a class?', a: 'A group batch holds fifteen to twenty people of roughly the same age. One-to-one classes give a learner a mentor to themselves for two classes a week, at agreed times.' },
      { q: 'How do I pay, and in which currency?', a: 'Monthly. The fee is displayed in euro at the European Central Bank reference rate, while the payment is taken in US dollars and converted by your bank, so the statement amount can differ a little. The first class is free with no card needed.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More about Python and coding for learners in and around Mainz.',
    items: [
      { href: '/coding-classes-in-rhineland-palatinate', label: 'Coding classes in Rhineland-Palatinate', p: 'School rules and classes across the Land.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'Our Python courses for every age in Germany.' },
      { href: '/python-classes-for-kids-germany', label: 'Python classes for kids', p: 'How children aged 9 to 12 learn Python.' },
      { href: '/coding-classes-for-adults-germany', label: 'Coding for adults', p: 'For learners starting after school.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page in one place.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'The method behind each live class.' }
    ]
  },

  start: {
    h2: 'Book a free first Python class',
    lede: 'In the first class the mentor helps install Python, writes a first program with the learner and gets a sense of their pace and English. Afterwards we recommend the course that fits, and whether a batch or private lessons would suit.',
    readFirst: 'Curious first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or read <a class="ag-inline-link" href="/courses">all course syllabuses</a>.',
    note: 'Every lesson is a live video call in English with a mentor in India. For a quick answer, message us on WhatsApp in English.',
    formNote: 'No card, no obligation, free.'
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
        { href: '/coding-classes-in-rhineland-palatinate', label: 'Rhineland-Palatinate' },
        { href: '/coding-classes-for-adults-germany', label: 'Coding for adults' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Two endpoints hide the whole journey'
  },

  personalityCss: `
.ag-root.ag-pym .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-pym .ag-capsule { border-left-width: 6px; }
.ag-root.ag-pym .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-pym .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pym .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Rheinland-Pfalz page and Länder comparison); KMK Ferienregelung 2026/2027; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz; WSV PEGELONLINE gauge MAINZ, Datenlizenz Deutschland Zero 2.0.',
    localProject: 'Rhine gauge at Mainz: an original Python project on 2,975 fifteen-minute water levels (3 October to 3 November 2026). First-to-last change is 23 cm, the range 68 cm, and a 24-hour sliding window finds a 28 cm rise from 25 to 26 October 2026, measured across the end of summer time. Lesson family: a sliding window.',
    requiredMentions: ['rhein_mainz.json', 'Change, first to last: 23.0 cm', 'Biggest rise within 24 hours: 28.0 cm', 'Rhine kilometre 498.27', '78.373 metres above sea level', 'Mainzer Studienstufe', '21 Informatik-Profil-Schulen', 'Two endpoints hide the whole journey'],
    sources: [
      { claim: 'Informatik in Rhineland-Palatinate by school type, Oberstufe and Abitur.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/rheinland-pfalz' },
      { claim: 'RLP without Informatik for all; compulsory from 2028/29.', url: 'https://informatik-monitor.de/' },
      { claim: 'Rhineland-Palatinate school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Gauge MAINZ water levels.', url: 'https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/MAINZ/W/measurements.json?start=P31D' },
      { claim: 'PEGELONLINE licence DL-DE Zero 2.0.', url: 'https://www.pegelonline.wsv.de/gast/nutzungsbedingungen' },
      { claim: 'Populations of Mainz, Wiesbaden and the Land.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'A flood or low-water warning reading of the data: we interpret no thresholds and give no safety information.',
      'The gauge discharge series: raw values we could not check, not used.',
      'Any connection with the WSV, the city of Mainz, the GI or a school: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
