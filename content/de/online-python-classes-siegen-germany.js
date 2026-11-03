'use strict';
// Online Python classes in Siegen (ag- city page, Germany cluster P6 row DE201, tier-2 shape
// online-python-classes-<city>-germany: live online explained, Python path). Owner 2026-11-02: classes are live, in
// English only, with mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: what a live class gives that a recorded course cannot; the Python path; a gap-filling project on the Siegen
// weather station, where learners hide days they know, fill them two ways and measure which guess is closer, and learn
// that a gap of years must stay a gap; NRW school facts; times.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 November 2026, unless stated):
//  - GI Informatik-Monitor 2026/27, NRW page: compulsory Informatik grades 5 and 6 (fact 80); Wahlpflicht grades 9 and
//    10 at G9 Gymnasien (62); Q-phase GK 3, LK 5 hours (81); written Abitur set centrally, no computer (82).
//  - NRW ministry: ZP10 in German, maths, English (64); Abitur 2027 written exams 13 April to 5 May 2027 (42), maths
//    5 May 2027 (44).
//  - KMK FER2026_27.pdf, NRW row (fact 275).
//  - Bundeswettbewerb Informatik: open up to age 21 for those not yet studying or working (145); 45th round 1 from
//    1 September to 23 November 2026 (146); round 1 allows group work (147).
//  - Destatis GV-ISys: Siegen, Universitätsstadt 102,685 on 31.12.2024 (facts-geo/places.tsv).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate values, station 04692 "Siegen (Kläranlage)",
//    tageswerte_KL_04692_19370101_20181130_hist.zip, downloaded 3 November 2026; column TMK "Tagesmittel der
//    Temperatur" (column 14, read by position). 28,033 days from 1 January 1937 to 30 November 2018; absent: 1945 to
//    1948 (1,461 days), all of 1966 (365), 1 January to 29 February 2008 (60). Station moved on 1 March 2008 (263 m to
//    229 m, Metadaten_Geographie). TMK method to 2007: "TMK=(TT1+TT2+(TT3*2))/4" from three readings; from 1 March
//    2008: "arithm.Mittel aus mind. 21 Stundenwerten". Licence: dwd.de rechtliche Hinweise, CC BY 4.0 with attribution.
//    Station inside Siegen; no other Germany page uses 04692.
//  - Tried first: Stadt Siegen open data: no portal found (siegen.de/opendata 404, geoportal.siegen.de no connection),
//    nothing for the city on GovData or Open.NRW, 3 November 2026.
// Our own calculations (scratchpad de/w/T7/run/sie/v1.py + v2.py, python3 -I): 3,287 days 2009 to 2017; 327 hidden days
// (every tenth); copy yesterday 1.74 C average error; halfway line 1.13 C; straight-line fill for gaps of 1 day 1.12 C,
// 3 days 1.77 C, 7 days 2.07 C, 14 days 2.55 C.
// Lesson family: fill a short gap from both neighbours (linear interpolation), test the filler on values you hid
// yourself, and leave long gaps empty.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'temps = []',
  'with open("siegen_days.txt", encoding="latin-1") as f:',
  '    next(f)',
  '    for line in f:',
  '        c = [x.strip() for x in line.split(";")]',
  '        if "20090101" <= c[1] <= "20171231":',
  '            temps.append(float(c[13]))          # daily mean temperature, C',
  '',
  'print("Days 2009 to 2017:", len(temps))',
  '',
  'hidden = range(10, len(temps) - 10, 10)      # we hide every tenth day ourselves',
  'carry, line = [], []',
  'for i in hidden:',
  '    real = temps[i]',
  '    carry.append(abs(temps[i - 1] - real))                 # copy yesterday',
  '    line.append(abs((temps[i - 1] + temps[i + 1]) / 2 - real))  # halfway between neighbours',
  'print("Hidden days:", len(carry))',
  'print("Copy yesterday, average error:", round(sum(carry) / len(carry), 2), "C")',
  'print("Halfway line, average error:", round(sum(line) / len(line), 2), "C")'
].join('\n');

const V2 = [
  'def fill(i, gap):',
  '    before, after = temps[i - 1], temps[i + gap]',
  '    step = (after - before) / (gap + 1)',
  '    return [before + step * (k + 1) for k in range(gap)]',
  '',
  'for gap in (1, 3, 7, 14):',
  '    errors = []',
  '    for i in range(20, len(temps) - 20, 20):',
  '        guess = fill(i, gap)',
  '        errors += [abs(g - temps[i + k]) for k, g in enumerate(guess)]',
  '    print(f"{gap:>2}-day gap, average error:", round(sum(errors) / len(errors), 2), "C")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Siegen: online Python' },
  slug: 'online-python-classes-siegen-germany',
  code: 'psi',
  accent: '#A1442B',
  accentRationale: 'Online Python in Siegen: a rust red #A1442B for the old iron and slate of the Siegerland, distinct from the Berlin brick and the NRW teal; contrast 5.05 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Online Python classes in Siegen',
  title: 'Online Python Classes in Siegen: Live and Taught in English',
  description: 'Online Python classes in Siegen for ages 9 to adult: what live teaching adds, the path to real data, NRW Informatik and a project on missing weather days.',
  ogDescription: 'Live online Python in English for Siegen learners, with an original project on the Siegen weather station: hide days you know, fill them two ways, and measure which guess comes closer.',
  twitterDescription: 'Live online Python in English for Siegen, with a project on filling gaps in weather data.',
  pageName: 'Online Python Classes in Siegen',
  webPageDescription: 'A guide for Siegen learners and families to live online Python classes: what a live mentor adds to a course, the Python path by age, NRW Informatik and contest dates, and an original gap-filling project on Deutscher Wetterdienst data from Siegen.',
  courseDescription: 'Live online Python classes in English for learners in Siegen aged 9 and up: typed Python from the first lesson, then files, data and testing, with one regular mentor, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Siegen',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#live', label: 'Live' },
    { href: '#gaps', label: 'Project' },
    { href: '#school', label: 'School' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Siegen &middot; Python &middot; Live online',
  h1: 'Online Python classes in Siegen',
  lede: 'Plenty of Python courses can be watched from Siegen; far fewer can watch you back. In a live class the mentor sees the line you just typed, notices the moment you hesitate and asks the one question that gets you moving again. This page explains what that changes, the path from a first program to real data, what NRW schools teach, and a project on the Siegen weather station in which learners deliberately delete days they know and then try to guess them back.',
  secondaryCta: { href: '#gaps', label: 'See the Siegen project' },
  wa: 'Hello Modern Age Coders, I am in Siegen and would like a free first Python class, live and in English.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; a mentor who sees your screen',
  spec: [
    ['Ages', '9 and up, adults included'],
    ['Format', 'Live video, shared screen'],
    ['Teaching language', 'English, adapted to the learner'],
    ['Siegen times', 'Afternoons, evenings, weekends'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Online Python classes in Siegen with Modern Age Coders are live lessons in English over video: the learner types real Python in their own editor and the mentor follows on the shared screen, asking rather than telling. Children from about 9, teenagers and adults each have their own groups, from first programs to files, data and tests. Every learner keeps one India-based mentor who tunes speed and pronunciation to them; families pick a group of fifteen to twenty or private tuition.',

  picks: {
    eyebrow: 'First courses',
    h2: 'Python courses for Siegen learners',
    lede: 'Three starting points by age. The free first class settles which fits.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PSI / 01', title: 'Python and AI for Kids', note: 'For 9 to 12. Children write their first real programs, draw and play with them, and later try tiny programs that learn from examples.' },
      { course: 'python-complete-masterclass-teens', code: 'PSI / 02', title: 'Python for Teens', note: 'For 13 to 18. From basic syntax to files, functions with tests and data work, alongside school Informatik.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PSI / 03', title: 'Python Masterclass for Adults', note: 'For adults who have never programmed. Foundations first, then real files and the libraries used at work.' }
    ]
  },

  sections: [
    {
      id: 'live',
      eyebrow: 'Live, not recorded',
      h2: 'What does a live online Python class add to a video course?',
      lede: 'Recorded courses are good at explaining. They cannot see what you are doing. For a beginner that difference decides whether they keep going.',
      body: [
        { kind: 'table', numCols: [], caption: 'A recorded course and a live class compared (our own comparison)', head: ['Moment in learning', 'Recorded course', 'Live class with us'], rows: [
          ['A typing mistake you cannot see', 'You search alone, sometimes for an hour', 'The mentor points to the line within seconds'],
          ['An error message in English', 'You read it, or skip it', 'You read it aloud together and explain it'],
          ['An idea that does not click', 'You rewatch the same video', 'The mentor explains it another way, more simply'],
          ['Losing motivation in week three', 'Nobody notices', 'The same mentor notices and adjusts the plan'],
          ['Knowing what to learn next', 'The next video in the list', 'The next step for this learner, chosen by someone who knows them']
        ] },
        { kind: 'source', html: 'Our own comparison of formats. Recorded material still has a place: learners sometimes rewatch a short clip after class. The teaching itself is always live.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Only English, slowly', p: 'We teach in English, never in German, and we say so first. Mentors slow down, rephrase and wait. Many Siegen pupils find their school English is more than enough, because Python itself is built from English words.' },
          { h3: 'Your editor, your files', p: 'Learners write code on their own computer, not inside a website that disappears after the course. Everything they build stays with them, ready to change.' },
          { h3: 'Same mentor every week', p: 'Each learner keeps one mentor, based in India, who learns their habits: who rushes, who freezes, who learns most from breaking a working program.' }
        ] }
      ]
    },
    {
      id: 'path',
      eyebrow: 'The Python path',
      h2: 'What is the Python path for a Siegen learner?',
      lede: 'The same five steps for every age; children take longer over each, adults often move through the first two quickly.',
      body: [
        { kind: 'ol', items: [
          '<strong>Talk to the computer.</strong> Print, ask for input, calculate. Children make a quiz; adults make a small converter.',
          '<strong>Repeat and decide.</strong> Loops and if statements, traced by hand on paper before the program runs.',
          '<strong>Store and reuse.</strong> Lists, dictionaries and functions, each function with a few tests that prove it works.',
          '<strong>Work with real files.</strong> Read published data, such as the Siegen weather file below, and describe its gaps before using it.',
          '<strong>Build your own.</strong> A project the learner chose, documented so that someone else can run it.'
        ] },
        { kind: 'source', html: 'Our own learning path. Typical pace: children of 9 to 12 reach step 4 in about six to ten months, teenagers and adults in two to four.' }
      ]
    },
    {
      id: 'gaps',
      tint: 'tint',
      eyebrow: 'A Siegen data project',
      h2: 'Can Python fill a missing day in Siegen\'s weather record?',
      lede: 'The Deutscher Wetterdienst publishes daily readings from its Siegen station from 1937 to 2018, free to reuse under CC BY 4.0. Real records have holes. Our learners find out how well a hole can be filled, by first making holes where they already know the answer.',
      body: [
        { kind: 'two',
          leftH3: 'The data and its holes',
          left: [
            'The station is called Siegen (Kläranlage). The file we downloaded on 3 November 2026 has 28,033 days, one row each, and a column for the daily mean temperature. We saved it as siegen_days.txt.',
            'Three stretches are missing entirely: 1945 to 1948, the whole of 1966, and January and February 2008. The last gap ends just as the station moved, on 1 March 2008, to a new site 34 metres lower. No program can honestly invent four lost years.'
          ],
          rightH3: 'A fair test',
          right: [
            'For short gaps, a guess might be good enough, but how good? The trick is to test on days we know. We take 2009 to 2017, nine complete years measured the same way after the move, hide every tenth day ourselves, and guess each hidden value from its neighbours.',
            'Then we compare the guesses with the real values we hid. That turns "it looks plausible" into a number.'
          ] },
        { kind: 'code', label: 'Version 1: two ways to guess a hidden day', lang: 'Python', code: V1, note: 'It prints <code>Days 2009 to 2017: 3287</code>, <code>Hidden days: 327</code>, <code>Copy yesterday, average error: 1.74 C</code> and <code>Halfway line, average error: 1.13 C</code>.' },
        { kind: 'p', mt: true, html: 'Copying yesterday\'s value is the simplest possible guess, and it is wrong by 1.74 degrees on average. Taking the point halfway between the day before and the day after does clearly better, 1.13 degrees, because it uses information from both sides of the gap. That halfway point is a straight line drawn between two neighbours, and drawing such lines is called linear interpolation. It is used for everything from weather records to animation frames to the brightness of pixels in a resized photo.' },
        { kind: 'code', label: 'Version 2: longer gaps, straight lines', lang: 'Python', code: V2, note: 'It prints <code>1-day gap, average error: 1.12 C</code>, <code>3-day gap, average error: 1.77 C</code>, <code>7-day gap, average error: 2.07 C</code> and <code>14-day gap, average error: 2.55 C</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'How well a straight line fills hidden days, Siegen 2009 to 2017 (our test)', head: ['Length of the hidden gap', 'Average error'], rows: [
          ['1 day, copy the day before', '1.74 C'],
          ['1 day, straight line', '1.12 C'],
          ['3 days, straight line', '1.77 C'],
          ['7 days, straight line', '2.07 C'],
          ['14 days, straight line', '2.55 C']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, daily values for station 04692 Siegen (Kläranlage), daily mean temperature, CC BY 4.0, downloaded 3 November 2026. The hidden days, the guesses and the errors are our own work.' },
        { kind: 'p', mt: true, html: 'The longer the gap, the worse the line, because weather has fronts and cold snaps that a straight line simply skips. A one-day gap filled by a line is off by about a degree; a two-week gap by more than two and a half. So the honest rule our learners write down is: fill short gaps, label every filled value as estimated, and leave long gaps empty. The four missing years from 1945 to 1948 stay missing.' },
        { kind: 'p', html: 'One more detail rewards careful reading of the metadata. Until 2007 the daily mean at Siegen was calculated from three readings a day, with the evening reading counted twice; from March 2008 it is the average of at least 21 hourly values. That is why we tested only on 2009 to 2017: mixing two methods in one test would blur the answer.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 12.</strong> Write the numbers 2, 4, 6, ?, 10 and fill the gap. Then try 2, 4, 9, ?, 10. Is the halfway guess still sensible?',
          '<strong>Teenagers.</strong> Run both versions, then hide every fifth day instead of every tenth. Do the errors change?',
          '<strong>Adults.</strong> Decide the longest gap you would fill in a work dataset, and write one sentence that a colleague could check.',
          '<strong>Going further.</strong> Use the average of the same calendar day in other years as a third guess and compare it with the line for a 14-day gap.'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'NRW schools',
      h2: 'What Informatik will a Siegen pupil meet at school?',
      lede: 'A compulsory start in grades 5 and 6, then choices. Siegen schools follow North Rhine-Westphalia\'s rules.',
      body: [
        { kind: 'two',
          leftH3: 'The NRW pattern',
          left: [
            'According to the Gesellschaft für Informatik, every general school in North Rhine-Westphalia teaches compulsory Informatik in grades 5 and 6. A nine-year Gymnasium offers it again as a Wahlpflicht subject in grades 9 and 10.',
            'In the last two years of the Oberstufe a school can run Informatik as a basic three-hour course or an advanced five-hour one. The written Informatik Abitur is set centrally and, as the monitor notes, answered without a computer.'
          ],
          rightH3: 'Exams and contests in 2026/27',
          right: [
            'NRW pupils take central exams, the ZP10, in German, maths and English at the end of grade 10. The written Abitur in 2027 runs from 13 April to 5 May 2027, with Mathematik on the last day.',
            'For older pupils, the 45th Bundeswettbewerb Informatik has its first round from 1 September to 23 November 2026, open to young people up to 21 who are not yet studying or working, and group entries are allowed in that round.'
          ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, North Rhine-Westphalia page; Ministerium für Schule und Bildung NRW, ZP10 and Abitur 2027; Bundesweite Informatikwettbewerbe, Bundeswettbewerb Informatik pages. Read on 2 November 2026.' },
        { kind: 'p', mt: true, html: 'We teach alongside school and do not replace it; only the school awards marks and the Abitur. For pupils who take the subject, the <a class="ag-inline-link" href="/courses/informatik-abitur-course-java-python">Informatik Abitur course in Java and Python</a> includes plenty of paper tracing, which the NRW written exam rewards. Our <a class="ag-inline-link" href="/bundeswettbewerb-informatik-preparation">Bundeswettbewerb Informatik page</a> covers the contest. We are not connected with BWINF.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When do online Python classes run in Siegen time?',
      lede: 'Siegen afternoons and evenings fall in the Indian evening, weekend mornings in the Indian afternoon. Most learners find a slot quickly.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Siegen times beside the mentor\'s clock', head: ['Siegen', 'India this winter', 'India from 28 March 2027'], rows: [
          ['15:35', '20:05', '19:05'],
          ['17:05', '21:35', '20:35'],
          ['Saturday 08:45', '13:15', '12:15'],
          ['Sunday 11:45', '16:15', '15:15']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz puts Siegen on UTC+1 in winter (since 25 October 2026) and UTC+2 in summer (from 28 March 2027); India keeps UTC+5:30. These rows only show the difference between the clocks.' },
        { kind: 'p', mt: true, html: 'For planning: NRW\'s 2026/27 holidays in the Kultusministerkonferenz table are 17 to 31 October 2026 in autumn, 23 December 2026 to 6 January 2027 at Christmas, 22 March to 3 April 2027 at Easter, 18 May 2027 as a single day, and 19 July to 31 August 2027 in summer. Lessons carry on through holidays unless you pause. Learners join from across Siegen and from nearby Kreuztal, Netphen, Wilnsdorf, Freudenberg and Hilchenbach.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Checks',
    h2: 'How a Siegen learner shows progress',
    lede: 'Our own checks. Each is something the learner does unaided.',
    table: { caption: 'Progress checks (ours)', head: ['Check', 'What the learner does', 'Usually by'], rows: [
      ['Trace', 'Predict a short program\'s output on paper', 'Month 1'],
      ['Debug', 'Fix a planted error from its message alone', 'Month 2'],
      ['Test', 'Write a function with three tests, one at an edge', 'Month 3'],
      ['Measure', 'Hide known values and measure a method\'s error', 'Month 4 to 6'],
      ['Explain', 'Present a project, limits included', 'Later']
    ] },
    left: { h3: 'For parents', ps: [
      'The "Measure" check is the Siegen project: a learner who tests a guess on known answers has learned how science checks itself.',
      'We report what your child can do and explain.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you trust a method, try it where you already know the answer.',
      'A filled-in value is an estimate. Label it, every time.'
    ] }
  },

  catalogue: {
    eyebrow: 'Where Python leads',
    h2: 'Nine more courses for Siegen learners',
    lede: 'All live, all in English, with one mentor, in a class or one to one.',
    bands: [
      { num: 'I', h3: 'Younger learners', sub: 'Ages 9 to 15', courses: [
        { code: 'PSI / YOUNG / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns, sequences and averages in Python.' },
        { code: 'PSI / YOUNG / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Logic first, for children who love puzzles.' },
        { code: 'PSI / YOUNG / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'A second language for interactive pages.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'PSI / TEEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real data, honest gaps, first models.' },
        { code: 'PSI / TEEN / 02', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'Java and Python for the Abitur, in English.' },
        { code: 'PSI / TEEN / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'German informatics contests', blurb: 'Biber, BwInf and BWKI preparation.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'PSI / ADULT / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts that save hours every week.' },
        { code: 'PSI / ADULT / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'Statistics and algebra behind the tools.' },
        { code: 'PSI / ADULT / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Version control for team projects.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Arrangements',
    h2: 'How live Python classes are set up for Siegen',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Pupils log in once the school day ends.' },
      { time: 'After work', l: 'Adults join on weekday evenings.' },
      { time: 'One to one', l: 'Your own time, any day, with your mentor.' }
    ],
    cells: [
      { h3: 'Twice a week', p: 'Two live hours, a small task between.' },
      { h3: 'Learner types', p: 'The mentor guides from the shared screen.' },
      { h3: 'Tests from early on', p: 'Functions come with proof they work.' },
      { h3: 'One mentor', p: 'Continuity for the whole course.' },
      { h3: 'English, adapted', p: 'Slower and simpler when needed.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'A few things our Python learners have built; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'Reviews by students and parents, reproduced from Google unchanged.',

  fees: {
    h2: 'Fees for online Python in Siegen',
    lede: 'Eight live classes make up a month. Shown here in euro by way of the ECB reference rate, the fee is actually collected in US dollars; your bank converts it at its own rate, so its euro total may be a touch different.',
    free: ['A free first class', 'A short Python task at your level', 'No card needed'],
    group: ['Fifteen to twenty learners of similar level', 'One mentor throughout', 'Two live classes a week', 'Pay by the month'],
    one: ['A mentor just for you', 'Projects you choose', 'Times you agree']
  },

  faq: {
    eyebrow: 'Siegen learners ask',
    h2: 'Online Python classes in Siegen: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach only in English, always live, with a mentor who adapts pace and accent to the learner. Python\'s keywords are English, so lesson and code use the same words.' },
      { q: 'Why choose live classes over a video course?', a: 'Because a live mentor sees your screen. Small mistakes are spotted in seconds, ideas are explained again in other words, and someone notices when motivation drops. Video can supplement that, not replace it.' },
      { q: 'What age can a child start Python?', a: 'Around 9, when reading and typing are comfortable. Younger children begin with Scratch blocks.' },
      { q: 'What will my child learn in Informatik at school in Siegen?', a: 'Two compulsory years, in grades 5 and 6, at all general schools in the Land, the Gesellschaft für Informatik reports. After that pupils opt in, up to an Abitur course of three or five hours a week in the last two years.' },
      { q: 'When are classes in Siegen time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most pupils come after school and adults in the evening.' },
      { q: 'Who teaches?', a: 'Experienced mentors based in India, live over video and in English. Each learner keeps the same mentor.' },
      { q: 'How are fees charged?', a: 'Each month. We print euro after converting at the ECB reference rate, then charge in US dollars; your bank\'s own exchange decides the exact euro booked. There is no fee for the first class.' },
      { q: 'What is the weather gap project?', a: 'Learners hide known days in the Siegen temperature record for 2009 to 2017 and guess them back. A straight line between neighbours is off by 1.13 degrees on average, copying the day before by 1.74, and gaps of two weeks are too long to fill well.' },
      { q: 'Is the Bundeswettbewerb Informatik open to my teenager?', a: 'It is open to young people up to 21 who are not yet studying or working. The first round of the 45th contest runs from 1 September to 23 November 2026 and allows group work. We are not connected with the organiser.' },
      { q: 'Can adults join?', a: 'Yes, in adult groups or one to one, starting from the very first line of Python.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Siegen learners.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our Germany pages in one place.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'NRW school rules and dates.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'Our national Python page.' },
      { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik', p: 'Preparing for the national contest.' },
      { href: '/online-coding-course-for-career-changers-germany', label: 'Coding for career changers', p: 'For adults moving into tech.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class from the inside.' }
    ]
  },

  start: {
    h2: 'Book a free first Python class',
    lede: 'Expect a proper hour of Python, not a sales call. Your learner writes a short program; meanwhile the mentor notes their approach and their ease with English, and afterwards proposes a course.',
    readFirst: 'Background reading: <a class="ag-inline-link" href="/how-we-teach">how we teach</a> and <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Live online lessons in English only, from mentors in India. Quick questions are easiest on WhatsApp, in English.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-course-germany', label: 'Python course in Germany' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/online-coding-course-for-career-changers-germany', label: 'Career changers' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'North Rhine-Westphalia' },
        { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Test the guess where you know the answer'
  },

  personalityCss: `
.ag-root.ag-psi .ag-hero h1 { letter-spacing: -0.009em; }
.ag-root.ag-psi .ag-capsule { border-left-width: 4px; }
.ag-root.ag-psi .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-psi .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-psi .ag-code-head b { letter-spacing: 0.014em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); Ministerium für Schule und Bildung NRW (ZP10, Abitur 2027); Bundesweite Informatikwettbewerbe (Bundeswettbewerb Informatik 2026); KMK Ferienregelung 2026/27; Einheitenzeitgesetz; Destatis GV-ISys. Deutscher Wetterdienst, daily values for station 04692 Siegen (Kläranlage), CC BY 4.0.',
    localProject: 'Filling gaps in the Siegen record: an original Python project on DWD daily mean temperatures for 2009 to 2017, hiding every tenth day and guessing it back; copying yesterday errs by 1.74 C, the halfway line by 1.13 C, and straight-line fills of 3, 7 and 14 days by 1.77, 2.07 and 2.55 C, while the real gaps of 1945 to 1948 stay unfilled. Lesson family: interpolate short gaps, test the filler on values you hid, leave long gaps empty.',
    requiredMentions: ['siegen_days.txt', 'Hidden days: 327', 'Copy yesterday, average error: 1.74 C', 'Halfway line, average error: 1.13 C', '14-day gap, average error: 2.55 C', 'linear interpolation', 'Kreuztal, Netphen, Wilnsdorf, Freudenberg and Hilchenbach', 'Test the guess where you know the answer'],
    sources: [
      { claim: 'NRW Informatik rules: grades 5 and 6, Wahlpflicht 9 and 10, GK and LK, paper Abitur.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'NRW Abitur 2027 written exam dates.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/termine/2027' },
      { claim: 'Bundeswettbewerb Informatik 2026 round 1 and eligibility.', url: 'https://bwinf.de/bundeswettbewerb/' },
      { claim: 'NRW school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'DWD daily values for Siegen (Kläranlage).', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/' },
      { claim: 'DWD reuse under CC BY 4.0.', url: 'https://www.dwd.de/DE/service/rechtliche_hinweise/rechtliche_hinweise_node.html' }
    ],
    rejectedClaims: [
      'Stadt Siegen open data: none found or reachable on 3 November 2026; the DWD station in the city was used.',
      'Filling the 1945 to 1948 and 1966 gaps: refused; gaps that long cannot be estimated honestly.',
      'Any claim about Siegen weather after November 2018: the file ends there.',
      'Any affiliation with the DWD, BWINF or a Siegen school: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
