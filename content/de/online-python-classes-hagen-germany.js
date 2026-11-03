'use strict';
// Online Python classes in Hagen (ag- city page, Germany cluster P6 row DE165, tier-2 shape online-python = live online
// explained, Python path). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors who
// match the learner's pace and accent; euro shown, USD charged.
// Spine: understand what the computer really does, not just what it prints. NRW's written Informatik Abitur is taken without
// a computer, and the classic trap that live teaching catches early is that a computer cannot store 0.1 exactly. Shown on 29
// years of rain at Hagen-Fley, where 1987 adds up to 970.9999999999999 mm.
// Sources (copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/online-python-classes-hagen-germany/):
//  - GI Informatik-Monitor 2026/27, NRW page (infmon-nordrhein-westfalen): Pflichtfach Informatik grades 5 and 6 at all
//    general school types (fact 80); Einführungsphase three-hour Grundkurs; Qualifikationsphase GK three, LK five hours (81);
//    "Die schriftlichen Abituraufgaben im Fach Informatik werden in Nordrhein-Westfalen zentral gestellt."; one task set each for
//    GK and LK with four tasks; "Die Fachlehrkraft wählt aus den vier Aufgaben ... im Grundkurs zwei Aufgaben und im
//    Leistungskurs drei Aufgaben aus."; "Eine Aufgabenauswahl durch die Schülerinnen und Schüler ist nicht vorgesehen.";
//    "Der Einsatz eines Computers ist für die Bearbeitung der schriftlich Abituraufgaben nicht vorgesehen." (82); allowed aids:
//    German spelling dictionary, scientific calculator or CAS/MMS; LK examined in writing, GK written or oral.
//  - KMK Ferien 2026/2027 (Stand 09.10.2025): "Nordrhein-Westfalen (3) 17.10. - 31.10. 23.12. - 06.01. -- 22.03. - 03.04. 18.05.
//    19.07. - 31.08." (fact 275).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Hagen 190,384; Nordrhein-Westfalen 18,034,454; Dortmund 603,462;
//    Wuppertal 358,193; Bochum 358,676.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate data (KL), station 01920 Hagen-Fley (1 June 1978 to
//    31 December 2007; 100 m; last site 51.4129 N, 7.4895 E), file tageswerte_KL_01920_19780601_20071231_hist.zip downloaded
//    3 November 2026, licence CC BY 4.0 (opendata.dwd.de Terms_of_use.txt). Column RSK, daily precipitation in mm with one
//    decimal, complete for 1979 to 2007 (no -999, our check). Our extract hagen_regen.csv: 10,592 days, 170,220 bytes, sha256
//    45b071e3...2c451442. The Stadt Hagen datasets on opendata.ruhr (licence dl-de-zero-2.0 there) answered every download with
//    "502 Proxy Error" on 3 and 4 November 2026, and www.hagen.de and stadtplan.hagen.de did not respond, so the DWD station in
//    the city is used; no other page uses station 01920.
// Our own calculations (scratchpad de/w/T3/hagen/run/v1.py, v12.py, python3 -I, Python 3.14.8):
//  v1: "Wettest year: 1981 1201.2999999999988 mm"; "1987 total: 970.9999999999999"; "Was 1987 exactly 971.0 mm? False".
//  v2: "Wettest year: 1981 1201.3 mm"; "1987 total: 971.0"; "Was 1987 exactly 971.0 mm? True"; "Years over 1,000 mm: ['1981',
//      '1984', '1986', '1993', '1998', '2002', '2007']". Also python3 -I: 0.1 + 0.2 prints 0.30000000000000004.
//  Float totals per year (v1 style): 2003 719.8, 1991 754.3000000000003, 1989 767.3999999999996.
// Lesson family: binary floats cannot hold most decimals exactly; add exact integers (tenths) and never test floats with ==.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'rain = {}',
  'with open("hagen_regen.csv", encoding="utf-8") as f:',
  '    for rec in csv.DictReader(f):',
  '        year = rec["datum"][:4]',
  '        rain[year] = rain.get(year, 0) + float(rec["regen_mm"])',
  '',
  'wettest = max(rain, key=rain.get)',
  'print("Wettest year:", wettest, rain[wettest], "mm")',
  'print("1987 total:", rain["1987"])',
  'print("Was 1987 exactly 971.0 mm?", rain["1987"] == 971.0)'
].join('\n');

const V2 = [
  'tenths = {}',
  'with open("hagen_regen.csv", encoding="utf-8") as f:',
  '    for rec in csv.DictReader(f):',
  '        year = rec["datum"][:4]',
  '        tenths[year] = tenths.get(year, 0) + round(float(rec["regen_mm"]) * 10)',
  '',
  'wettest = max(tenths, key=tenths.get)',
  'print("Wettest year:", wettest, tenths[wettest] / 10, "mm")',
  'print("1987 total:", tenths["1987"] / 10)',
  'print("Was 1987 exactly 971.0 mm?", tenths["1987"] == 9710)',
  'print("Years over 1,000 mm:", sorted(y for y in tenths if tenths[y] >= 10000))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Hagen: online Python' },
  slug: 'online-python-classes-hagen-germany',
  code: 'pyh',
  accent: '#164659',
  accentRationale: 'Online Python in Hagen: a deep river blue #164659 for the Volme and Lenne valleys that meet in the city; contrast 8.30 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Online Python classes in Hagen',
  title: 'Online Python Classes in Hagen: Live Lessons in English',
  description: 'Online Python classes in Hagen, live in English: what a mentor-led class adds, NRW\'s paper-only Informatik Abitur, and a Hagen rain data task that breaks a float.',
  ogDescription: 'Live online Python for Hagen learners, in English at their own pace: why a live mentor matters, how the NRW Informatik Abitur is written without a computer, and an original project in which 29 years of Hagen rain expose a floating-point trap.',
  twitterDescription: 'Live online Python in Hagen, in English: NRW\'s paper Abitur and a rain project where 971 is not 971.',
  pageName: 'Online Python Classes in Hagen',
  webPageDescription: 'A guide for Hagen learners and families to live online Python classes in English, built from the GI Informatik-Monitor, the KMK holiday table and Destatis, with an original floating-point project on Deutscher Wetterdienst rain data from Hagen-Fley.',
  courseDescription: 'Live online Python classes in English for learners in Hagen: Python for children from 9, Informatik Abitur preparation in Python and Java, and Python certification preparation for teenagers and adults, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'North Rhine-Westphalia', href: '/coding-classes-in-north-rhine-westphalia' }],
  crumbLabel: 'Python in Hagen',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#mentor', label: 'Live' },
    { href: '#abitur', label: 'Abitur' },
    { href: '#rain', label: 'Rain data' },
    { href: '#weeks', label: 'Times' }
  ],
  eyebrow: 'Hagen &middot; Python, live and online &middot; Ages 9 to adult',
  h1: 'Online Python classes in Hagen',
  lede: 'Add up a year of Hagen rainfall in Python and you can get 970.9999999999999 millimetres instead of 971. Nothing is broken; that is how computers store decimals, and it is exactly the kind of thing a learner alone with a video never notices. Our live online Python classes put a mentor beside you, in English, to catch it. This page explains what that looks like, how Informatik works in North Rhine-Westphalia up to an Abitur written without a computer, and the Hagen rain project in full.',
  secondaryCta: { href: '#rain', label: 'See the rain project' },
  wa: 'Hello Modern Age Coders, I live in Hagen and would like live online Python classes in English. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; Google rating 4.9 across about 547 reviews',
  spec: [
    ['Language', 'Python 3, typed from day one'],
    ['Learners', 'From age 9 to adult'],
    ['Lessons', 'Live video, two hours a week'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'Based in India, English only'],
    ['Start', 'Free first class']
  ],
  capsuleQ: 'The answer first',
  capsule: 'Modern Age Coders teaches online Python classes for Hagen as live video lessons in English: a mentor follows what each learner types and makes sure they understand why the code works. There are separate courses for children from 9, for Oberstufe pupils facing the Informatik Abitur and for adults, each taught by one regular mentor to a batch of fifteen to twenty people or to a single learner.',

  picks: {
    eyebrow: 'Choose a starting course',
    h2: 'Which Python course fits a Hagen learner?',
    lede: 'One for children, one for Oberstufe pupils heading for an Informatik exam, and one for anyone from 13 who wants a recognised Python qualification to aim at.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PYH / 01', title: 'Python and AI for Kids', note: 'For children of nine to twelve, roughly two terms and a half. A child types every line, draws with turtle graphics, builds small games and reaches real data files.' },
      { course: 'informatik-abitur-course-java-python', code: 'PYH / 02', title: 'Informatik Abitur in English', note: 'Oberstufe pupils aged 16 to 19, six months, Grundkurs and Leistungskurs paths. Java and Python, data structures, and tracing code on paper.' },
      { course: 'pcep-pcap-python-certification-course', code: 'PYH / 03', title: 'PCEP and PCAP Preparation', note: 'From about 13 to adult, five months, joinable any month. Python from zero to the level of the Python Institute\'s two entry exams.' }
    ]
  },

  sections: [
    {
      id: 'mentor',
      eyebrow: 'Why live',
      h2: 'What does a live mentor add to learning Python online?',
      lede: 'Videos explain. A mentor notices. Most of what goes wrong for a beginner is something only a person watching would notice.',
      body: [
        { kind: 'table', numCols: [], caption: 'What tends to happen to a beginner, alone and with a live mentor (from our classes)', head: ['Moment', 'Alone with a video', 'With a live mentor'], rows: [
          ['First error message', 'Copied into a search engine, often misread', 'Read aloud together, line number first'],
          ['Indentation slip', 'Program silently does the wrong thing', 'Spotted on the shared screen within seconds'],
          ['A strange decimal like 970.9999999999999', 'Assumed to be a bug in Python', 'Explained: how computers store decimals'],
          ['Stuck for twenty minutes', 'The evening ends there', 'One question from the mentor unblocks it'],
          ['Code that works', 'Moved on from', 'Explained back in the learner\'s own words']
        ] },
        { kind: 'source', html: 'Our own observations from teaching live classes, not a study. The decimal row is the subject of the Hagen project below.' },
        { kind: 'p', mt: true, html: 'Concretely: sixty minutes of video call, one screen shared at a time. The learner types in their own editor on their own computer; the mentor sees it, asks questions and only very rarely takes over the keyboard. Between classes there is one short task. In a batch, learners share their screens in turn, so a mistake one person makes becomes a lesson for everyone.' },
        { kind: 'two', mt: true,
          leftH3: 'In English, at your pace',
          left: [
            'Every class is taught in English by mentors based in India. We offer no lessons in German, and we say so before anyone books.',
            'Mentors speak calmly, rephrase, and get used to each learner\'s accent. Since Python\'s keywords and error messages are English anyway, the class and the code speak the same language.'
          ],
          rightH3: 'What you need',
          right: [
            'A laptop or desktop computer, a stable connection and a headset. Python costs nothing; setting it up is the first job you and your mentor do together.',
            'A tablet is fine for a ten year old watching Scratch, but Python needs a real keyboard.'
          ] }
      ]
    },
    {
      id: 'abitur',
      eyebrow: 'NRW schools and the Abitur',
      h2: 'How does Informatik work in Hagen schools, up to the Abitur?',
      lede: 'It starts early, in grades 5 and 6 for every pupil, and it ends on paper: NRW\'s written Informatik Abitur uses no computer.',
      body: [
        { kind: 'p', html: 'According to the Informatik-Monitor 2026/27 of the Gesellschaft für Informatik, Informatik is required in grades 5 and 6 at every general school type in North Rhine-Westphalia. In the Oberstufe it can be taken as a three-hour Grundkurs from the Einführungsphase and, in the Qualifikationsphase, either as a three-hour Grundkurs or a five-hour Leistungskurs.' },
        { kind: 'table', mt: true, numCols: [], caption: 'The written Informatik Abitur in North Rhine-Westphalia', head: ['Question', 'What the GI reports'], rows: [
          ['Who sets the tasks?', 'The Land, centrally, the same for every school'],
          ['How many tasks?', 'One set of four for the Grundkurs and one of four for the Leistungskurs'],
          ['Who chooses?', 'The teacher picks two of the four in a Grundkurs and three in a Leistungskurs; pupils do not choose'],
          ['Is a computer used?', 'No: "Der Einsatz eines Computers ist für die Bearbeitung der schriftlich Abituraufgaben nicht vorgesehen."'],
          ['Which aids?', 'A German spelling dictionary and a scientific calculator or CAS'],
          ['Written or oral?', 'Always written in a Leistungskurs; written or oral in a Grundkurs']
        ] },
        { kind: 'source', html: 'Quoted and summarised from the GI\'s Informatik-Monitor 2026/27, NRW entry, as published on 2 November 2026 when we read it.' },
        { kind: 'p', mt: true, html: 'A paper exam changes how you should learn to program. With no computer to run the code, a pupil must predict what it does: trace the loop, track every variable, know what a number will look like. That is why our Python classes ask learners to predict output before they run anything, and why the rain project below is a good exam habit as much as a coding one. We teach alongside the school course and award no grades; the school\'s Informatik is the one that counts. Our <a class="ag-inline-link" href="/informatik-abitur-nrw">Informatik Abitur in NRW</a> page goes deeper.' }
      ]
    },
    {
      id: 'rain',
      tint: 'tint',
      eyebrow: 'A real Hagen project',
      h2: 'Why does Python say Hagen had 970.9999999999999 mm of rain?',
      lede: 'A simple question, how much rain fell in a year, leads straight to one of the most useful lessons in programming.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'Between June 1978 and December 2007 the Deutscher Wetterdienst operated a station named Hagen-Fley. Its day-by-day observations are open data (CC BY 4.0: reuse is fine as long as the DWD is credited), and our copy dates from 3 November 2026.',
            'From it we made hagen_regen.csv: one row per day from 1 January 1979 to 31 December 2007, 10,592 days, with the date and the rainfall in millimetres, always written with one decimal place, such as 2.2.'
          ],
          rightH3: 'The question',
          right: [
            'Which year was the wettest, and how much rain fell in 1987? Version 1 adds up each year\'s daily values as ordinary decimal numbers (floats) and prints the totals.',
            'It also asks a yes-or-no question that looks too easy to fail: was 1987\'s total exactly 971.0 mm?'
          ] },
        { kind: 'code', label: 'Version 1: add the decimals', lang: 'Python', code: V1, note: 'It prints: <code>Wettest year: 1981 1201.2999999999988 mm</code>, <code>1987 total: 970.9999999999999</code> and <code>Was 1987 exactly 971.0 mm? False</code>.' },
        { kind: 'p', mt: true, html: 'Every daily value had one decimal place, so every total should too. Instead Python prints 1201.2999999999988 and 970.9999999999999, and the comparison with 971.0 says False. The reason is that a computer stores numbers in binary, and most decimal fractions, 0.1 among them, have no exact binary form, the way one third has no exact decimal form. Each value is stored as the nearest possible binary number, and after 365 additions the tiny differences show. Try it yourself: in Python, 0.1 + 0.2 prints 0.30000000000000004.' },
        { kind: 'p', html: 'The fix is to count in whole numbers. Every value in this file is given to a tenth of a millimetre, so Version 2 turns each day into an integer number of tenths (2.2 becomes 22), adds integers, which a computer does exactly, and divides by 10 only once, when printing.' },
        { kind: 'code', label: 'Version 2: add below Version 1, count in tenths', lang: 'Python', code: V2, note: 'The new lines it prints: <code>Wettest year: 1981 1201.3 mm</code>, <code>1987 total: 971.0</code>, <code>Was 1987 exactly 971.0 mm? True</code> and <code>Years over 1,000 mm: [\'1981\', \'1984\', \'1986\', \'1993\', \'1998\', \'2002\', \'2007\']</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Yearly rainfall at Hagen-Fley: float totals against integer tenths (our calculation)', head: ['Year', 'Adding floats', 'Adding tenths'], rows: [
          ['1981', '1201.2999999999988', '1201.3'],
          ['1987', '970.9999999999999', '971.0'],
          ['1989', '767.3999999999996', '767.4'],
          ['1991', '754.3000000000003', '754.3'],
          ['2003', '719.8', '719.8']
        ] },
        { kind: 'source', html: 'Rain values: DWD, station 01920 Hagen-Fley, RSK (precipitation per day), years 1979 to 2007, CC BY 4.0, file taken on 3 November 2026. We wrote the code and did the adding; seven of the 29 years passed 1,000 mm. The DWD is not involved in our classes.' },
        { kind: 'p', mt: true, html: 'Look at 2003: the float total happens to come out as exactly 719.8. That is the dangerous part. The error is not always visible, so a program that seems to work on one year can fail on the next. The rule that follows is short: never compare two floats with ==, and when you need exact sums of decimal values, count in whole units.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 12.</strong> Add 0.1 to a variable ten times in a loop and print it after every step. At which step does it first look strange?',
          '<strong>Teenagers.</strong> Without running it, predict whether round(970.9999999999999, 1) == 971.0 is True. Then check. Why is rounding a fix for printing but a weak fix for comparing?',
          '<strong>Adults.</strong> Rewrite Version 1 using math.fsum on a list of each year\'s values, and compare its 1987 result with both versions on this page.',
          '<strong>Exam practice.</strong> On paper, trace a loop that adds 0.5 four times. Then explain why 0.5 behaves perfectly when 0.1 does not.'
        ] }
      ]
    },
    {
      id: 'path',
      eyebrow: 'From first line to exam level',
      h2: 'What is the Python path for a Hagen learner?',
      lede: 'Our sequence, with the habit each stage builds. Children move through it slowly with games; teenagers and adults faster with data.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our Python path and the habit behind each stage (ours)', head: ['Stage', 'Content', 'Habit'], rows: [
          ['1', 'print, variables, arithmetic', 'Predict before you run'],
          ['2', 'if, for, while', 'Trace the loop by hand'],
          ['3', 'Lists and dictionaries', 'Choose the right container'],
          ['4', 'Functions', 'Write it once, test it twice'],
          ['5', 'Files and real data', 'Check what the data really contains'],
          ['6', 'Numbers inside the machine', 'Know what a float can and cannot hold'],
          ['7', 'Projects and exam tasks', 'Explain every line in words']
        ] },
        { kind: 'source', html: 'Our own outline. Abitur pupils work through stages 1 to 7 with Java alongside Python, as the Informatik Abitur course does.' },
        { kind: 'p', mt: true, html: 'Stage 6 is where many self-taught programmers have a gap. It looks like trivia until a bank balance, a grade average or a sensor total goes subtly wrong. For pupils facing a paper exam it is also the stage that makes predictions reliable: if you know that 0.1 is stored inexactly, you will not be surprised by the output you are asked to predict.' }
      ]
    },
    {
      id: 'weeks',
      eyebrow: 'Times and holidays',
      h2: 'When are live Python classes for Hagen learners?',
      lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Hagen times and the mentor\'s local time', head: ['Hagen', 'India, to 28 March 2027', 'India, from 28 March 2027'], rows: [
          ['15:35', '20:05', '19:05'],
          ['17:40', '22:10', '21:10'],
          ['Saturday 12:30', '17:00', '16:00'],
          ['Sunday 09:30', '14:00', '13:00']
        ] },
        { kind: 'source', html: 'Germany switches between MEZ, UTC+1, and MESZ, UTC+2, under the Einheitenzeitgesetz; the latest switch to MEZ was on 25 October 2026 and the next to MESZ is on 28 March 2027. India does not switch (UTC+5:30), so its clocks run four hours thirty ahead of Hagen in winter and three hours thirty in summer. Batch times are agreed, not fixed.' },
        { kind: 'p', mt: true, html: 'School holidays in North Rhine-Westphalia for 2026/27, from the KMK overview dated 9 October 2025: autumn from 17 to 31 October 2026; Christmas from 23.12.2026 to 06.01.2027; Easter from 22 March to 3 April 2027; a single Whitsun day on 18 May 2027; and summer from 19 July to 31 August 2027. Classes carry on through all of them unless you choose to pause.' },
        { kind: 'p', html: 'Hagen\'s population on 31 December 2024 was 190,384, by the Destatis count; North Rhine-Westphalia as a whole had 18,034,454. Learners from Dortmund (603,462), Bochum (358,676) or Wuppertal (358,193) are also in North Rhine-Westphalia and share the same school calendar and the same central Abitur.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Checks of understanding',
    h2: 'How do we know a Python learner really understands?',
    lede: 'Five checks we use in class. Each one is a small task, not a test score.',
    table: { caption: 'Five checks of understanding (ours)', head: ['Check', 'The learner can'], rows: [
      ['Prediction', 'Write down the output of a short program before running it'],
      ['Tracing', 'Fill in a table of variable values for each loop step on paper'],
      ['Error reading', 'Find the failing line from a traceback alone'],
      ['Number sense', 'Explain why 0.1 + 0.2 is not printed as 0.3'],
      ['Explanation', 'Describe a program they wrote in five plain sentences']
    ] },
    left: { h3: 'For Abitur pupils', ps: [
      'Prediction and tracing are exactly what a paper exam rewards. We practise them on every program, not only before exams.',
      'Number sense often decides the last marks on a tracing task.'
    ] },
    right: { h3: 'For adults', ps: [
      'Number sense is the check most professionals have never been taught. It matters the moment Python touches money or measurements.',
      'Bring a spreadsheet from work and we will test it with you.'
    ] }
  },

  catalogue: {
    eyebrow: 'Other courses',
    h2: 'Nine more courses for Hagen learners',
    lede: 'Some come before Python, some beside school, some after the first course.',
    bands: [
      { num: 'I', h3: 'Younger learners', sub: 'Ages 6 to 16', courses: [
        { code: 'PYH / YOUNG / 01', slug: 'scratch-programming-complete-course', title: 'Scratch first', blurb: 'Block coding for children not yet typing, 6 to 12.' },
        { code: 'PYH / YOUNG / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Graphs, fractions and geometry with code, 10 to 15.' },
        { code: 'PYH / YOUNG / 03', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Support for the school subject, Klasse 5 to 10.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'PYH / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A complete Python course from zero, 13 to 18.' },
        { code: 'PYH / TEEN / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for teens', blurb: 'Data structures and problem solving, 13 to 18.' },
        { code: 'PYH / TEEN / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Pandas, charts and simple models, 14 to 18.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'PYH / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'From the first line to confident programs.' },
        { code: 'PYH / ADULT / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts that take over routine work.' },
        { code: 'PYH / ADULT / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL databases', blurb: 'Storing and querying data properly.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'The format',
    h2: 'How are the live Python classes run?',
    lede: 'Two one-hour classes each week on video with the same mentor, and a short task in between. No recordings stand in for a person.',
    slots: [
      { time: 'School-day afternoons', l: 'For children and pupils in Hagen.' },
      { time: 'Evenings and weekends', l: 'For adults, and for pupils before exams.' },
      { time: 'One to one', l: 'A slot agreed with your mentor.' }
    ],
    cells: [
      { h3: 'Screen shared', p: 'The mentor sees each line as you type.' },
      { h3: 'Predict first', p: 'Output is guessed before code runs.' },
      { h3: 'Same mentor', p: 'Continuity from first class to last.' },
      { h3: 'Age groups', p: 'Children, teenagers and adults apart.' },
      { h3: 'Paper practice', p: 'Tracing tasks for exam candidates.' },
      { h3: 'Short updates', p: 'What was learned and what comes next.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'A handful of things our students made. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more examples.',
  reviewsLede: 'Reviews on Google by parents and students, as they wrote them.',

  fees: {
    h2: 'What do online Python classes cost in Hagen?',
    lede: 'One fee per month, eight live classes. The euro amount on this page is calculated with the European Central Bank reference rate, but payment is taken in US dollars, so your bank converts it and its euro figure can be a little different from ours.',
    free: ['A free first class', 'Python installed, a first program written', 'No card details'],
    group: ['A batch of fifteen to twenty', 'One mentor throughout', 'Two classes a week', 'Monthly, stop in any month'],
    one: ['One learner, one mentor', 'Your own pace, including exam timing', 'Times you set together']
  },

  faq: {
    eyebrow: 'Hagen asks',
    h2: 'Online Python classes in Hagen: common questions',
    items: [
      { q: 'Are the Python classes in German?', a: 'No, English is the only teaching language. Mentors work from India and fit their speed and wording to each learner. Python\'s own keywords and error messages are English, so the language of the class matches the language of the code.' },
      { q: 'Are the classes live?', a: 'Yes. A mentor is on the video call for the full hour, sees the learner\'s shared screen and helps in the moment. There are no pre-recorded lessons in place of the mentor.' },
      { q: 'Is the Informatik Abitur in NRW written on a computer?', a: 'No, it is a paper exam: the GI states that no computer is used for the written Informatik papers in North Rhine-Westphalia. The Land sets the tasks, and the teacher chooses two of four in a Grundkurs and three of four in a Leistungskurs.' },
      { q: 'Do NRW pupils learn Informatik before the Oberstufe?', a: 'Yes. Grades 5 and 6 include required Informatik at all general schools, and electives follow later, differing by school type.' },
      { q: 'When can I take classes in Hagen time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils often choose late afternoons, adults evenings or weekend mornings.' },
      { q: 'What is the rain project on this page?', a: 'A lesson we built from Hagen-Fley rainfall published by the Deutscher Wetterdienst, 1979 to 2007. Adding the daily values as floats gives 970.9999999999999 mm for 1987; counting in whole tenths of a millimetre gives exactly 971.0.' },
      { q: 'Why does 0.1 + 0.2 not equal 0.3 in Python?', a: 'Because Python stores such numbers in binary, and 0.1 and 0.2 have no exact binary form. Each is stored as the nearest possible value, so the sum prints as 0.30000000000000004. Compare floats with a tolerance, or count in whole units.' },
      { q: 'Can my child learn Python online?', a: 'From about 9, yes, in our Python and AI for Kids course. Younger children usually start with Scratch, where blocks replace typing.' },
      { q: 'How big are the classes?', a: 'Batches run with fifteen to twenty learners matched by age and level; with one-to-one there is nobody else, just the learner and the mentor twice a week.' },
      { q: 'How do I pay?', a: 'Each month. The euro price you see uses the European Central Bank reference rate; the money moves in US dollars, and your bank turns that into euro, so a few cents can differ. The trial costs nothing and needs no card details.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further pages',
    h2: 'Related pages',
    lede: 'More for Python learners in Hagen and North Rhine-Westphalia.',
    items: [
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'North Rhine-Westphalia', p: 'Informatik across NRW school types.' },
      { href: '/informatik-abitur-nrw', label: 'Informatik Abitur in NRW', p: 'The central paper exam in detail.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'All our Python courses for Germany.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'Informatik in the Oberstufe, explained in English.' },
      { href: '/coding-classes-for-adults-germany', label: 'Coding for adults', p: 'For those starting after school.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live method in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first Python class',
    lede: 'Let us know how old the learner is and what the aim is: a first program, the Abitur, or something for work. The free hour gets Python running and tries one small task; after it you hear which course and which format we suggest.',
    readFirst: 'Curious about the method? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes it, and <a class="ag-inline-link" href="/courses">the course list</a> has every syllabus.',
    note: 'All classes are live online and only in English, with mentors in India. Message us on WhatsApp for the quickest reply, in English.',
    formNote: 'Free; no card; no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Python and exams', links: [
        { href: '/python-course-germany', label: 'Python course in Germany' },
        { href: '/informatik-abitur-nrw', label: 'Informatik Abitur NRW' },
        { href: '/abitur-computer-science-in-english', label: 'Abitur CS in English' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'North Rhine-Westphalia' },
        { href: '/coding-classes-for-adults-germany', label: 'Coding for adults' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Count in tenths, not in floats'
  },

  personalityCss: `
.ag-root.ag-pyh .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-pyh .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-pyh .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-pyh .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-pyh .ag-code-head b { letter-spacing: 0.016em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Nordrhein-Westfalen page); KMK Ferienregelung 2026/2027; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz; Deutscher Wetterdienst CDC daily climate data station 01920 Hagen-Fley, CC BY 4.0.',
    localProject: 'Hagen rain and floats: an original Python project on DWD daily rainfall at Hagen-Fley, 1979 to 2007. Adding floats gives 1981 as 1201.2999999999988 mm and 1987 as 970.9999999999999 (not equal to 971.0); adding integer tenths gives 1201.3 and exactly 971.0, and seven years over 1,000 mm. Lesson family: binary floats cannot hold most decimals exactly.',
    requiredMentions: ['hagen_regen.csv', 'Wettest year: 1981 1201.2999999999988 mm', '1987 total: 970.9999999999999', 'Was 1987 exactly 971.0 mm? True', '0.30000000000000004', 'Hagen-Fley', 'nicht vorgesehen', 'Count in tenths, not in floats'],
    sources: [
      { claim: 'NRW Informatik grades 5 and 6, Oberstufe and the central written Abitur without a computer.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'NRW school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'DWD daily climate data, station 01920 Hagen-Fley.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/' },
      { claim: 'DWD open data licence CC BY 4.0.', url: 'https://opendata.dwd.de/climate_environment/CDC/Terms_of_use.txt' },
      { claim: 'Populations of Hagen, neighbours and NRW.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Flood or storm interpretation of heavy-rain days: not made.',
      'The dates of the 2027 NRW Abitur exams: not checked, so not given.',
      'Any connection with the DWD, the city of Hagen, the GI or a school: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
