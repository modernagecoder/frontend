'use strict';
// Online Python classes in Mülheim an der Ruhr (ag- city page, Germany cluster P6 row DE171, tier-2 slug shape
// online-python: live online explained, Python path). Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: "live is not the same as online". Many people in Mülheim have tried a recorded course and stopped; this page
// explains what changes when a mentor is there in real time, then sets out the Python path by goal (not by age), NRW
// school facts, and one project on the city's own weather station in which every column needs its own rule.
// Sources (read raw; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/online-python-classes-muelheim-an-der-ruhr-germany/):
//  - GI Informatik-Monitor 2026/27, NRW page: Informatik compulsory in grades 5 and 6 at all general school types
//    (FACTS 80); Gymnasien with the nine-year route (62). NRW ZP10 central exams at the end of grade 10 (64).
//  - bwinf.de: Bundeswettbewerb Informatik open up to age 21 for those not yet studying or working (FACTS 145); 45th
//    round 1 from 1 September to 23 November 2026 (146); round 1 allows group work (147).
//  - KMK Ferienkalender 2026/27: NRW line (FACTS 275).
//  - Destatis GV-ISys 31.12.2024: Mülheim an der Ruhr 173,050; Nordrhein-Westfalen 18,034,454 (places.tsv).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Mülheim an der Ruhr, open data "Wetterdaten" (geo.muelheim-ruhr.de/open-data/wetterdaten/14161), file
//    wetterdaten_2025.csv (3,772,955 bytes, 51,465 readings, 10-minute interval, UNIX time in UTC), downloaded 3 November
//    2026. Page: "Alle Daten der Mülheimer Wetterstation, die seit Mitte 2006 aufgezeichnet wurden." Parameter table:
//    T0 Lufttemperatur 1/10 °C; M0 Regenmenge 1/10 mm, Summe letzte 10 Minuten; S0 Sonnenscheindauer Minuten, Summe;
//    V0_max max. Windgeschw. Knoten. Licence: dataset field "Lizenz cc-by-de"; the portal's Nutzungsbedingungen: "stehen
//    unter der Lizenz „ Creative Commons Namensnennung 3.0 Deutschland “", attribution "Datenquelle: Stadt Mülheim an der
//    Ruhr" with the portal address (written on the page without the dash the city uses).
// Our own calculations (scratchpad de/w/T4/bin mh_v1.py, mh_v2.py, mh_v3.py; python3 -I): July readings 4462 of 4464;
// lazy averages T0 213.56, M0 0.17, S0 3.32, V0_max 8.24; correct rules: mean 21.4 C, rain 75.9 mm, sunshine 247.1 h,
// strongest gust 66.7 km/h. Monthly rain: Jan 104.2 mm at 94 % of readings (incomplete), Sep 98.3 mm at 100 %, Dec 54.4 at
// 84 % (file ends 27 Dec 2025), Feb 8.6, Mar 9.8.
// Lesson family: one rule per column; sum what accumulates, average what is a level, take the maximum of a peak.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  "import csv",
  "from datetime import datetime, timezone",
  "",
  "july = []",
  "with open(\"wetterdaten_2025.csv\", encoding=\"utf-8\") as raw:",
  "    for r in csv.DictReader(raw, delimiter=\";\"):",
  "        moment = datetime.fromtimestamp(int(r[\"time\"]), timezone.utc)",
  "        if moment.month == 7:",
  "            july.append(r)",
  "",
  "print(\"Readings in July:\", len(july), \"of\", 31 * 24 * 6)",
  "",
  "def average(column):",
  "    return sum(int(r[column]) for r in july) / len(july)",
  "",
  "print(\"Average of every column, the lazy way:\")",
  "for column in [\"T0\", \"M0\", \"S0\", \"V0_max\"]:",
  "    print(\" \", column, round(average(column), 2))"
].join('\n');

const V2 = [
  "rules = {",
  "    \"T0\": (\"mean temperature, C\", lambda v: sum(v) / len(v) / 10),",
  "    \"M0\": (\"total rain, mm\", lambda v: sum(v) / 10),",
  "    \"S0\": (\"total sunshine, hours\", lambda v: sum(v) / 60),",
  "    \"V0_max\": (\"strongest gust, km/h\", lambda v: max(v) * 1.852),",
  "}",
  "",
  "print(\"July 2025, one rule per column:\")",
  "for column, (label, rule) in rules.items():",
  "    values = [int(r[column]) for r in july]",
  "    print(\" \", label, round(rule(values), 1))"
].join('\n');

const V3 = [
  "import calendar",
  "",
  "months = {}",
  "with open(\"wetterdaten_2025.csv\", encoding=\"utf-8\") as raw:",
  "    for r in csv.DictReader(raw, delimiter=\";\"):",
  "        m = datetime.fromtimestamp(int(r[\"time\"]), timezone.utc).month",
  "        months.setdefault(m, []).append(int(r[\"M0\"]))",
  "",
  "for m, rain in sorted(months.items()):",
  "    slots = calendar.monthrange(2025, m)[1] * 24 * 6",
  "    share = 100 * len(rain) / slots",
  "    note = \"\" if share >= 95 else \"  <- incomplete\"",
  "    print(calendar.month_abbr[m], round(sum(rain) / 10, 1), \"mm\", f\"{share:.0f} % of readings{note}\")"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Mülheim an der Ruhr: online Python' },
  slug: 'online-python-classes-muelheim-an-der-ruhr-germany',
  code: 'pru',
  accent: '#003C5D',
  accentRationale: 'Online Python in Mülheim an der Ruhr: a deep river blue #003C5D for the Ruhr as it runs through the city; contrast 9.45 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Online Python classes in Mülheim an der Ruhr',
  title: 'Online Python Classes in Mülheim an der Ruhr, Live in English',
  description: 'Online Python classes in Mülheim an der Ruhr: why live beats recorded, the Python path by goal, NRW school facts, and a project on the city\'s own weather station.',
  ogDescription: 'Live online Python taught in English for learners in Mülheim an der Ruhr: what a live mentor changes compared with a recorded course, a Python path for every goal, and an original project on the Mülheim weather station.',
  twitterDescription: 'Live online Python in English for Mülheim an der Ruhr, with a project on the city weather station.',
  pageName: 'Online Python Classes in Mülheim an der Ruhr',
  webPageDescription: 'A guide for learners and parents in Mülheim an der Ruhr to live online Python classes taught in English: how live teaching differs from recorded courses, a Python path by goal, NRW Informatik and contest facts, and an original Python project on Stadt Mülheim an der Ruhr\'s open weather station data.',
  courseDescription: 'Live online Python classes in English for learners in Mülheim an der Ruhr from age 9 to adult, with real projects on open data, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Python in Mülheim',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#live', label: 'Live' },
    { href: '#goals', label: 'Goals' },
    { href: '#weather', label: 'Weather' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Mülheim an der Ruhr &middot; Python, live online &middot; Ages 9 to adult',
  h1: 'Online Python classes in Mülheim an der Ruhr',
  lede: 'A lot of people in Mülheim have started a recorded Python course, watched a few videos and stopped somewhere around loops. Online is not the problem; being alone with the videos is. This page explains what a live mentor changes, lays out a Python path for each goal from school Informatik to a new job, gives the NRW facts that matter, and ends with the city\'s own weather station, where 51,465 readings teach one rule that every data programmer needs.',
  secondaryCta: { href: '#weather', label: 'See the weather project' },
  wa: 'Hello Modern Age Coders, I live in Mülheim an der Ruhr and would like live online Python classes in English. Could I book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; a real person, in English, at your pace',
  spec: [
    ['Format', 'Live video lessons, never recordings'],
    ['Language', 'English only'],
    ['Ages', '9 to adult'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'In India, one per learner'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches Python to learners in Mülheim an der Ruhr live online in English: a mentor in India meets the learner on video twice a week, watches them write code and tunes speed and accent to the person. Course choices run from Python and AI for Kids (9 to 12) through Python for Teens to Python Automation for adults, taken in a class of fifteen to twenty or privately.',

  picks: {
    eyebrow: 'Three ways in',
    h2: 'Which live Python course fits a Mülheim learner?',
    lede: 'Pick by where the learner is now: a child who wants to make things, a pupil who wants the full language, or an adult who wants Python to save time at work.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PRU / 01', title: 'Python and AI for Kids', note: 'Children of nine to twelve type their first real code: patterns with a turtle, a guessing game, and small programs that count and sort.' },
      { course: 'python-complete-masterclass-teens', code: 'PRU / 02', title: 'Python for Teens', note: 'The whole language for thirteen to eighteen, from the first variable to classes, files and data, with a project at the end of each block.' },
      { course: 'python-ai-automation-masterclass-college', code: 'PRU / 03', title: 'Python Automation', note: 'Adults who want scripts that rename files, read spreadsheets and pull data, then add simple AI. Built around real tasks from work.' }
    ]
  },

  sections: [
    {
      id: 'live',
      eyebrow: 'Live online',
      h2: 'Is a live online Python class different from a recorded course?',
      lede: 'Very. Both happen on a screen, but only one has a person watching your code as you write it. The table compares the two, plus a classroom course, on what matters for learning to program.',
      body: [
        { kind: 'table', numCols: [], caption: 'Three ways to learn Python, compared (our view)', head: ['', 'Recorded videos', 'Local classroom', 'Live online with a mentor'], rows: [
          ['When you get stuck', 'You search or give up', 'Wait for the teacher', 'The mentor sees it at once on your screen'],
          ['Pace', 'Fixed by the video', 'Fixed by the class', 'Set for you, or for a small group at your level'],
          ['Who types', 'You copy what you saw', 'Often the teacher demonstrates', 'You type; the mentor guides'],
          ['Travel', 'None', 'To and from the venue', 'None'],
          ['Language', 'Whatever the video uses', 'Depends on the provider', 'English, at your pace and accent']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the mentor does',
          left: [
            'In a live class the mentor reads your code while you write it. When a loop runs once too often, they ask you what the last value of the counter was, instead of fixing it. That question is the lesson.',
            'A mentor also notices patterns over weeks: a learner who always forgets to convert text to a number, or who writes long programs before testing any part. Those habits are hard to see from inside a video course.'
          ],
          rightH3: 'What you need at home',
          right: [
            'A laptop or desktop, a browser, earphones, and for teenagers and adults Python itself, which the mentor helps install in the first class. Children can begin in a browser editor.',
            'Classes are sixty minutes, twice a week. Between classes there is one short task, written so that twenty minutes is enough.'
          ] }
      ]
    },
    {
      id: 'goals',
      eyebrow: 'The Python path',
      h2: 'What should a Mülheim learner study in Python for their goal?',
      lede: 'Python is the same language for everyone; the route through it depends on why you are learning. Five common goals, and where each one leads.',
      body: [
        { kind: 'table', numCols: [], caption: 'Python routes by goal (ours)', head: ['Goal', 'Start with', 'Focus', 'A sign you are there'], rows: [
          ['A curious child, 9 to 12', 'Python and AI for Kids', 'Loops, choices, small games', 'Makes a game a friend can play'],
          ['School Informatik, grades 5 to 10', 'Informatik Companion', 'Algorithms, tracing code by hand', 'Explains a program line by line'],
          ['Informatik in the Oberstufe', 'Informatik Abitur in English', 'Data structures, Java and Python', 'Writes and checks an algorithm on paper'],
          ['University or a contest', 'Python for Teens', 'Efficiency, testing, problem sets', 'Solves an unseen problem in a time limit'],
          ['Work and automation', 'Python Automation', 'Files, spreadsheets, scripts', 'A weekly task now runs by itself']
        ] },
        { kind: 'p', mt: true, html: 'The routes overlap on purpose. A pupil on the school route and an adult on the automation route both learn to read a data file and summarise it; the weather project below is used on both.' },
        { kind: 'p', html: 'For pupils who want a target outside school, the Bundeswettbewerb Informatik is open to young people up to 21 who are not yet studying or working. Round 1 of the 45th competition runs from 1 September to 23 November 2026, and group work is allowed in that first round. We teach the skills; the entry must be the pupils\' own work.' }
      ]
    },
    {
      id: 'nrw',
      eyebrow: 'NRW schools',
      h2: 'What does a Mülheim pupil learn in Informatik at school?',
      lede: 'Every pupil in North Rhine-Westphalia now meets Informatik early. What follows was read in the GI monitor and on BWINF and ministry pages on 2 November 2026.',
      body: [
        { kind: 'two',
          leftH3: 'Grades 5 and 6',
          left: [
            'In NRW, says the Informatik-Monitor 2026/27, all general schools teach Informatik as a required subject in the fifth and sixth school years. Beyond those two years it depends on the school and on what the pupil picks.',
            'A pupil who enjoys those two years often wants more than the timetable gives. Live classes are one way to keep going without waiting for the Oberstufe.'
          ],
          rightH3: 'Exams along the way',
          right: [
            'NRW runs central exams at the end of grade 10, the Zentrale Prüfungen 10 (ZP10), in German, maths and English. Gymnasien follow the nine-year route.',
            'Our classes do not prepare for ZP10 subjects. They run alongside school, and the school\'s marks are the ones that count.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'The 45th Bundeswettbewerb Informatik, as BWINF lists it', head: ['Round', 'When', 'How'], rows: [
          ['Round 1', '1 September to 23 November 2026', 'Groups allowed'],
          ['Round 2', 'Early 2027 to April 2027', 'Individual work only'],
          ['Round 3', 'September 2027', 'Details from BWINF']
        ] },
        { kind: 'source', html: 'Read on 2 November 2026: the GI Informatik-Monitor 2026/27 page for NRW, the NRW Schulministerium page on ZP10, and the BWINF page on the Bundeswettbewerb Informatik. Mülheim pupils have Herbstferien until 31 October 2026 and summer holidays from 19 July 2027 (KMK Ferienkalender 2026/27). None of these bodies is connected to us.' }
      ]
    },
    {
      id: 'weather',
      tint: 'tint',
      eyebrow: 'A real Mülheim project',
      h2: 'What was July 2025 like at the Mülheim weather station? One rule per column',
      lede: 'Stadt Mülheim an der Ruhr runs its own weather station and publishes every reading as open data. Our learners use a year of it to meet the mistake almost every beginner makes with data: treating every column the same.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The city describes the dataset as all data from the Mülheim weather station, recorded since mid-2006, and publishes one file per year. The 2025 file has 51,465 readings, one every ten minutes, with the time as a UNIX timestamp in UTC. It is published under the Creative Commons Attribution 3.0 Germany licence (Datenquelle: Stadt Mülheim an der Ruhr). We downloaded it on 3 November 2026.',
            'The values are stored as whole numbers: temperature in tenths of a degree, rain in tenths of a millimetre per ten minutes, sunshine in minutes per ten minutes, and the strongest gust in knots.'
          ],
          rightH3: 'The question',
          right: [
            'Summarise July 2025 in four numbers: how warm, how wet, how sunny, how windy. It sounds like "take the average of each column". It is not, and finding out why is the lesson.',
            'Every column measures a different kind of thing. Temperature is a level, rain and sunshine pile up, and a gust is a peak. Each kind needs its own rule.'
          ] },
        { kind: 'code', label: 'Step 1: the lazy way, one rule for everything', lang: 'Python', code: V1, note: 'It prints <code>Readings in July: 4462 of 4464</code>, then the lazy averages <code>T0 213.56</code>, <code>M0 0.17</code>, <code>S0 3.32</code> and <code>V0_max 8.24</code>.' },
        { kind: 'p', mt: true, html: 'None of those four numbers answers the question. 213.56 is a temperature in tenths of a degree. 0.17 is the average rain per ten minutes, in tenths of a millimetre, which no one would ever say about a month. 3.32 is sunshine minutes per ten-minute slot. And 8.24 knots is the average of the strongest gusts, not the strongest gust.' },
        { kind: 'code', label: 'Step 2: one rule per column', lang: 'Python', code: V2, note: 'Run after Step 1. It prints <code>mean temperature, C 21.4</code>, <code>total rain, mm 75.9</code>, <code>total sunshine, hours 247.1</code> and <code>strongest gust, km/h 66.7</code>.' },
        { kind: 'p', html: 'The dictionary holds a label and a rule for each column. Temperature is averaged and divided by ten. Rain and sunshine are summed, because they accumulate. The gust takes the maximum, because the question is about the peak, and is converted from knots at 1.852 km/h per knot. The data never changed; the rules did.' },
        { kind: 'code', label: 'Step 3: rain by month, and how complete each month is', lang: 'Python', code: V3, note: 'Run after Step 1. It prints twelve lines, from <code>Jan 104.2 mm 94 % of readings  &lt;- incomplete</code> to <code>Dec 54.4 mm 84 % of readings  &lt;- incomplete</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Rain at the Mülheim station in 2025, by month (our calculation)', head: ['Month', 'Rain, mm', 'Share of readings present'], rows: [
          ['January', '104.2', '94 %'],
          ['February', '8.6', '98 %'],
          ['March', '9.8', '100 %'],
          ['April', '84.9', '100 %'],
          ['July', '75.9', '100 %'],
          ['September', '98.3', '100 %'],
          ['December', '54.4', '84 %']
        ] },
        { kind: 'source', html: 'Data: Stadt Mülheim an der Ruhr, open data Wetterdaten, file for 2025, licence Creative Commons Attribution 3.0 Germany, downloaded 3 November 2026. All totals, averages and shares are ours; months are counted in UTC. The 2025 file ends on 27 December 2025, which is why December is incomplete. January had the most rain in the file, but with 6 percent of its readings missing; September, with every reading present, comes next.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Children, 9 to 12.</strong> Write down the temperature and whether it rained at 8:00, 12:00 and 18:00 for three days. Which numbers should you add, and which should you average?',
          '<strong>Teenagers.</strong> Add a fifth rule for humidity (F0). Is it a level, a pile or a peak?',
          '<strong>Adults.</strong> Turn Step 2 into a function that takes any month and returns the four numbers, then print a twelve-row table.',
          '<strong>Everyone.</strong> Explain why January cannot be called the wettest month of 2025 with full confidence.'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Times',
      h2: 'When are live Python classes in Mülheim time?',
      lede: 'Times are agreed with you. The rows show how a Mülheim time looks on the mentor\'s clock in India.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Mülheim times beside the time in India', head: ['Mülheim', 'India now (to 28 March 2027)', 'India after 28 March 2027'], rows: [
          ['13:15', '17:45', '16:45'],
          ['14:00', '18:30', '17:30'],
          ['Saturday 13:00', '17:30', '16:30'],
          ['Sunday 08:45', '13:15', '12:15']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz, Germany uses MEZ (UTC+1) in winter and MESZ (UTC+2) in summer. The clocks went back on 25 October 2026 and spring forward on 28 March 2027, while India stays on UTC+5:30 throughout. So India is four and a half hours ahead of Mülheim this winter and three and a half hours ahead from the spring. These are sample conversions, not batches.' },
        { kind: 'p', mt: true, html: 'Neighbours in Oberhausen, Essen, Duisburg or Ratingen book the same classes; the booking page converts every slot to the clock on your device.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Checkpoints',
    h2: 'How do you know the Python is sticking?',
    lede: 'Five markers we write into every progress note.',
    table: { caption: 'Five Python markers (ours)', head: ['Marker', 'What the learner shows'], rows: [
      ['1', 'Write a program that takes input and reacts to it'],
      ['2', 'Use a loop and know when it will stop'],
      ['3', 'Store data in lists and dictionaries and look it up'],
      ['4', 'Read a real file and choose the right summary for each column'],
      ['5', 'Write a function, test it, and reuse it for a new question']
    ] },
    left: { h3: 'For parents', ps: [
      'The weather project is marker 4. Someone who can say why rain is summed but temperature is averaged has started to think like someone who works with data.',
      'Notes to you cover code and explanations, never minutes logged.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you summarise a column, ask: is it a level, a pile or a peak?',
      'Count what is missing before you crown a month.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Other live courses Mülheim learners take',
    lede: 'All of them live and in English, with one regular mentor, as a group or one to one.',
    bands: [
      { num: 'I', h3: 'Younger learners', sub: 'Ages 6 to 14', courses: [
        { code: 'PRU / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Blocks first, for six to twelve.' },
        { code: 'PRU / KIDS / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'A first course before Python.' },
        { code: 'PRU / KIDS / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How learning machines work.' }
      ] },
      { num: 'II', h3: 'School and contests', sub: 'Klasse 5 to Abitur', courses: [
        { code: 'PRU / SCHOOL / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Beside school Informatik from grade 5.' },
        { code: 'PRU / SCHOOL / 02', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'German informatics contests', blurb: 'Biber, BWINF and BWKI skills.' },
        { code: 'PRU / SCHOOL / 03', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'For the Oberstufe course.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Students and professionals', courses: [
        { code: 'PRU / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'The full language from zero.' },
        { code: 'PRU / ADULT / 02', slug: 'data-science-complete-masterclass-college', title: 'Data Science', blurb: 'Statistics and machine learning.' },
        { code: 'PRU / ADULT / 03', slug: 'python-web-development-django-flask-course', title: 'Python web development', blurb: 'Websites with Django and Flask.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'How live Python classes run for a learner in Mülheim',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Early afternoon', l: 'For pupils straight after school.' },
      { time: 'Weekend', l: 'Saturday or Sunday, morning or midday.' },
      { time: '1-on-1', l: 'Fixed with your own mentor.' }
    ],
    cells: [
      { h3: 'A person, live', p: 'Questions answered while you are stuck.' },
      { h3: 'Your code', p: 'You type every line; the mentor coaches.' },
      { h3: 'One mentor', p: 'The same mentor for the whole course.' },
      { h3: 'Short tasks', p: 'Twenty minutes between classes.' },
      { h3: 'Real data', p: 'Files from German cities, not toy lists.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or just you.' }
    ]
  },

  projectsH2: 'Work by our Python students',
  projectsLede: 'A few student projects; the <a class="ag-inline-link" href="/student-labs">student labs</a> collect many more.',
  reviewsLede: 'Google reviews by our students and parents, left as they wrote them.',

  fees: {
    h2: 'Fees for live Python classes in Mülheim',
    lede: 'You are billed once a month for eight live lessons. The euro amount shown is converted at the European Central Bank reference rate, but payment is collected in US dollars; your bank handles the exchange, so the statement can show a slightly different euro figure.',
    free: ['A free first class', 'A first program you type yourself', 'No card needed'],
    group: ['Fifteen to twenty learners at one level', 'One regular mentor', 'Two lessons a week', 'Monthly, stop at any time'],
    one: ['One learner, one mentor', 'Your goals and your speed', 'Times you choose']
  },

  faq: {
    eyebrow: 'Questions from Mülheim',
    h2: 'Online Python classes in Mülheim an der Ruhr: answers',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and in English only. Mentors are based in India and adjust their pace and accent to the learner, so a child with school English or an adult out of practice can follow. Python keywords are English words anyway.' },
      { q: 'How is a live online class different from a video course?', a: 'A mentor is there in real time, sees your screen and your code, and asks questions when you are stuck. You type everything yourself. A video course cannot notice a mistake or change its pace for you.' },
      { q: 'What does my child need for an online Python class?', a: 'A laptop or desktop, a current browser and earphones. Younger children can start in a browser editor; older learners install Python, which is free, with the mentor in the first class.' },
      { q: 'When are classes in Mülheim time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils often take early afternoons; adults often choose a weekend slot.' },
      { q: 'Is Informatik taught at school in Mülheim?', a: 'Yes. The Gesellschaft für Informatik reports that NRW requires Informatik for all pupils in the fifth and sixth school years. From grade 7 on, it depends on the school and on the pupil\'s own choices.' },
      { q: 'Can a teenager enter the Bundeswettbewerb Informatik?', a: 'Yes, young people up to 21 who are not yet studying or working can take part. Round 1 of the 45th competition runs from 1 September to 23 November 2026 and allows group work. We teach the skills; the entry is the pupil\'s own.' },
      { q: 'Is the weather project real Mülheim data?', a: 'Yes. It uses the 2025 file of the Mülheim weather station, published by Stadt Mülheim an der Ruhr under the Creative Commons Attribution 3.0 Germany licence and downloaded on 3 November 2026. The summaries are our own.' },
      { q: 'Can adults learn Python online from nothing?', a: 'Yes. The Python Masterclass and Python Automation both start from zero. Adults often choose one to one so that the projects use their own spreadsheets and tasks.' },
      { q: 'How many people are in a class?', a: 'A group class has fifteen to twenty learners at a similar level. One-to-one classes are just you and the mentor, twice a week.' },
      { q: 'How do payments work?', a: 'Once a month by card. What you see here is a euro figure derived from the European Central Bank reference rate; the charge itself is in US dollars, converted by your bank, hence possible small differences. No payment is taken for the first class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'Pages that go further on Python, contests and NRW.',
    items: [
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'Our page for the whole of NRW.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'The main Python page.' },
      { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik', p: 'Preparing for the national contest.' },
      { href: '/online-coding-course-for-career-changers-germany', label: 'Coding for career changers', p: 'For adults moving into tech.' },
      { href: '/python-classes-for-kids-germany', label: 'Python classes for kids', p: 'Python from about nine.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All Germany pages.' }
    ]
  },

  start: {
    h2: 'Take a free live Python class',
    lede: 'Nothing is staged: the free class is an ordinary live lesson in which a first small program gets written and run. By the end the mentor has a sense of the learner\'s thinking and English, and we propose a course and a group to match.',
    readFirst: 'More about the format: <a class="ag-inline-link" href="/how-we-teach">how we teach</a>. Every syllabus: <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'Live online, taught in English only, by mentors in India. WhatsApp us in English for a quick reply.',
    formNote: 'Free, no card, no strings.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-course-germany', label: 'Python course in Germany' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik' },
        { href: '/online-coding-course-for-career-changers-germany', label: 'Career changers' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding in NRW' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'A level, a pile or a peak'
  },

  personalityCss: `
.ag-root.ag-pru .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-pru .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-pru .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pru .ag-table caption { text-align: left; text-transform: none; font-weight: 600; }
.ag-root.ag-pru .ag-code-head b { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); NRW Schulministerium on ZP10; Bundesweite Informatikwettbewerbe; KMK Ferienkalender 2026/27; Destatis GV-ISys; Einheitenzeitgesetz; read 2 and 3 November 2026. Stadt Mülheim an der Ruhr, open data Wetterdaten, Creative Commons Attribution 3.0 Germany.',
    localProject: 'A level, a pile or a peak: an original Python project on the 51,465 ten-minute readings of Stadt Mülheim an der Ruhr\'s weather station in 2025. Averaging every column gives four useless numbers for July (213.56, 0.17, 3.32, 8.24); one rule per column gives 21.4 C mean, 75.9 mm rain, 247.1 hours of sunshine and a strongest gust of 66.7 km/h. A monthly check finds January (104.2 mm) and December incomplete. Lesson family: choose the aggregate per column.',
    requiredMentions: ['wetterdaten_2025.csv', 'Readings in July: 4462 of 4464', 'total rain, mm 75.9', 'strongest gust, km/h 66.7', 'Jan 104.2 mm 94 % of readings', '51,465 readings', '1 September to 23 November 2026', 'A level, a pile or a peak'],
    sources: [
      { claim: 'NRW compulsory Informatik grades 5 and 6.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Bundeswettbewerb Informatik eligibility and 2026 round 1.', url: 'https://bwinf.de/bundeswettbewerb/' },
      { claim: 'NRW ZP10 central exams.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-10' },
      { claim: 'NRW holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Mülheim weather station data and parameters.', url: 'https://geo.muelheim-ruhr.de/open-data/wetterdaten/14161' },
      { claim: 'Mülheim open data licence CC BY 3.0 DE.', url: 'https://geo.muelheim-ruhr.de/open-data/nutzungsbedingungen/14043' }
    ],
    rejectedClaims: [
      'The GovData dataset "Hey Mülheim" is from Köln-Mülheim, not this city: not used.',
      'That January 2025 was the wettest month: 6 percent of its readings are missing, so the page says so.',
      'Comparisons with other providers or named course platforms: none made.',
      'Any affiliation with Stadt Mülheim an der Ruhr, BWINF or the NRW ministry: none.'
    ]
  }
};
