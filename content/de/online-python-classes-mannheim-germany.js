'use strict';
// Online Python classes in Mannheim (ag- city page, Germany cluster P6 row DE144, tier-2 shape online-python = live
// online explained, Python path). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; euro shown, USD charged.
// Spine: live online versus the other ways to learn Python, a first month week by week, and a project on data that is
// itself live: a city bike-share feed that changes while you read it.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, Baden-Württemberg: compulsory Informatik und Medienbildung from 2025/26, starting in
//    grades 5 and 6 and growing year by year (67); profile subject IMP "auslaufend", at Gemeinschaftsschulen still in
//    grades 8 to 10 (68); Oberstufe described as mostly G8 for current cohorts (61). National page: "Schlusslichter sind
//    Baden-Württemberg, Niedersachsen und Bremen: Hier belegt ungefähr jede zwölfte Person das Fach Informatik." (99).
//  - KMK Ferien 2026/2027 raw, BW row: "Baden-Württemberg (4) 26.10. - 30.10. 31.10. 23.12. - 09.01. -- 25.03. 30.03. -
//    03.04. 18.05. - 29.05. 29.07. - 11.09.".
//  - BWINF: Bundeswettbewerb Informatik round 1 1 September to 23 November 2026 (146); Jugendwettbewerb round 3 deadline
//    23 November 2026 (143).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Mannheim 318,035; Ludwigshafen am Rhein 177,222
//    (Rheinland-Pfalz); Heidelberg 155,756.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Mannheim open data (Opendatasoft) via Open Data BW and GovData, "VRN-Nextbike" (dataset free_bike_status:
//    "Status der verfügbaren VRNNextbike Fahrräder an den Stationen in Mannheim"), ckan.govdata.de/dataset/vrn-nextbike,
//    every resource licensed http://dcat-ap.de/def/licenses/dl-by-de/2.0. CSV export downloaded three times on
//    3 November 2026 at 13:45, 13:50 and 13:58 UTC (14:45, 14:50, 14:58 German time): 110,650 / 110,437 / 110,437 bytes,
//    sha256 c08c3779... / 84b45cce... / 84b45cce... (the second and third are byte-identical). 103 stations each. The
//    file carries no timestamp column. Raw copies in src-pages/online-python-classes-mannheim-germany/.
// Our own calculations (scratchpad de/w/T1/mannheim/v1.py, v2.py, python3 -I):
//  v1: "Stations: 103  Bikes shown: 435  Empty stations: 22" (14:45 snapshot; bikes shown is our count of the column
//      Anzahl verfügbare Fahrräder across stations, not a published fleet figure).
//  v2: "14:45 to 14:50, stations changed and net bikes: (17, -2)", "14:50 to 14:58, stations changed and net bikes: (0, 0)".
//  Detail 14:45 to 14:50: Universität Schloss 20 to 14; Hauptbahnhof Mannheim 3 to 8. 46 stations list a rack count; at 6
//  of them more bikes are shown than racks.
// Lesson family: a live file is a photograph; stamp the time yourself, compare two photos, and check a new download is
// really new.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'BIKES = "Anzahl verfügbare Fahrräder"',
  '',
  'def load(path):',
  '    with open(path, encoding="utf-8-sig") as f:',
  '        return {r["Stationsnummer"]: r for r in csv.DictReader(f, delimiter=";")}',
  '',
  'first = load("nextbike_1445.csv")',
  'bikes = sum(int(r[BIKES] or 0) for r in first.values())',
  'empty = sum(1 for r in first.values() if int(r[BIKES] or 0) == 0)',
  'print("Stations:", len(first), " Bikes shown:", bikes, " Empty stations:", empty)'
].join('\n');

const V2 = [
  'def compare(a, b):',
  '    moved = [s for s in a if s in b and a[s][BIKES] != b[s][BIKES]]',
  '    before = sum(int(a[s][BIKES] or 0) for s in a)',
  '    after = sum(int(b[s][BIKES] or 0) for s in b)',
  '    return len(moved), after - before',
  '',
  'second = load("nextbike_1450.csv")',
  'third = load("nextbike_1458.csv")',
  'print("14:45 to 14:50, stations changed and net bikes:", compare(first, second))',
  'print("14:50 to 14:58, stations changed and net bikes:", compare(second, third))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Mannheim: online Python classes' },
  slug: 'online-python-classes-mannheim-germany',
  code: 'pma',
  accent: '#71153D',
  accentRationale: 'Online Python in Mannheim: a dark raspberry #71153D, the red of the Wasserturm sandstone, clear of the Karlsruhe claret and the Münster mulberry; contrast 9.08 at its lowest on the paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-baden-wuerttemberg', name: 'Baden-Württemberg' }],
  routeLabel: 'Online Python classes in Mannheim',
  title: 'Online Python Classes in Mannheim: Live, in English',
  description: 'Online Python classes in Mannheim, live in English: how live lessons differ from video courses, the first month week by week, BW Informatik and a nextbike project.',
  ogDescription: 'Live Python lessons in English for Mannheim learners from 9 to adult: why live beats recorded for most beginners, what the first four weeks look like, and a project on Mannheim\'s bike-share data that changes while you look at it.',
  twitterDescription: 'Python for Mannheim, live online in English, with a project on the city\'s live bike-share feed.',
  pageName: 'Online Python Classes in Mannheim',
  webPageDescription: 'A guide for Mannheim learners and parents to live online Python classes in English: how live lessons compare with recorded courses and in-person classes, the first month step by step, Python next to Informatik in Baden-Württemberg, and an original project on the city\'s nextbike station data.',
  courseDescription: 'Live online Python classes in English for Mannheim learners: children from 9, teenagers and adults, with a regular mentor on a shared screen, in a group of 15 to 20 or one to one, from a first program to working with live open data.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Python in Mannheim',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#formats', label: 'Formats' },
    { href: '#month', label: 'Month 1' },
    { href: '#nextbike', label: 'Bike data' },
    { href: '#slots', label: 'Times' }
  ],
  eyebrow: 'Mannheim &middot; Python &middot; Live online',
  h1: 'Online Python classes in Mannheim',
  lede: 'Search for online Python and you will mostly find videos. They work for some people, but most beginners stall the first time an error message appears and nobody is there to read it with them. Our Python classes for Mannheim are live: a mentor, a shared screen and real code, in English. Here is how that compares with the alternatives, what the first month looks like, where Python sits next to Informatik in Baden-Württemberg, and a project on Mannheim\'s bike-share data that keeps changing while you study it.',
  secondaryCta: { href: '#nextbike', label: 'See the bike project' },
  wa: 'Hello Modern Age Coders, I am in Mannheim and would like a free live Python lesson in English. When could we start?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; a person on the other side of every error message',
  spec: [
    ['Language', 'Python 3'],
    ['Learners', 'From age 9 to adult'],
    ['Format', 'Live video and shared screen'],
    ['Pace', 'Two lessons a week'],
    ['Group', '15 to 20 learners, or 1-on-1'],
    ['First lesson', 'Free, no card needed']
  ],
  capsuleQ: 'What it is',
  capsule: 'Modern Age Coders teaches Python to Mannheim learners in live online lessons held in English: a regular mentor and the learner share a screen, write code together and fix errors as they happen, at a pace and in an accent the learner can follow. Nine year olds can join, and so can teenagers and adults with or without experience, either in a class of 15 to 20 or alone with the mentor, in Mannheim afternoons, evenings or weekends.',

  picks: {
    eyebrow: 'Pick a starting point',
    h2: 'Python courses for Mannheim learners',
    lede: 'Three courses for three situations: a child ready to type, a teenager who wants the whole language, and an adult who would like a recognised Python certificate at the end.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PMA / 01', title: 'Python and AI for Kids', note: 'For 9 to 12 year olds. Short typed programs, drawings, games and small projects with real data, paced for young typists.' },
      { course: 'python-complete-masterclass-teens', code: 'PMA / 02', title: 'Python for Teens', note: 'For 13 to 18 year olds. From variables to classes, files and data, with the reading and tracing skills an Informatik course values.' },
      { course: 'pcep-pcap-python-certification-course', code: 'PMA / 03', title: 'PCEP and PCAP Certification', note: 'For adults and older teens who want to finish with the Python Institute\'s entry and associate exams in view.' }
    ]
  },

  sections: [
    {
      id: 'formats',
      eyebrow: 'Live, recorded or in a room',
      h2: 'How is a live online Python class different from a recorded course?',
      lede: 'All three formats can teach Python. They differ in what happens at the moment a learner gets stuck, which for a beginner is several times every lesson.',
      body: [
        { kind: 'table', numCols: [], caption: 'Three ways to learn Python, compared (our assessment)', head: ['', 'Recorded video course', 'In-person class', 'Live online class (ours)'], rows: [
          ['When you are stuck', 'Pause, search, hope', 'Raise a hand and wait for the teacher', 'The mentor sees your screen and helps at once'],
          ['Who sees your code', 'Nobody', 'The teacher, when they reach your desk', 'The mentor, line by line, as you type'],
          ['Pace', 'Yours, with nobody checking', 'The room\'s', 'Yours, with someone checking'],
          ['Travel in Mannheim', 'None', 'To the venue and back', 'None'],
          ['Language', 'Whatever the video uses', 'Usually German', 'English only, at your pace and accent']
        ] },
        { kind: 'source', html: 'Our own comparison. We teach only the third format, so read it as our view rather than an independent test.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the shared screen matters',
          left: [
            'Most beginner errors are tiny: a missing colon, a capital letter, a space that Python treats as meaningful. On a video they can cost an evening. With a mentor watching the screen they cost a minute, and the learner sees how the error was found, which is the real lesson.',
            'Learners share their screen for most of each lesson, so they are typing, not watching.'
          ],
          rightH3: 'Why English',
          right: [
            'Every class is taught in English only. Python itself reads like short English sentences, its error messages are in English, and nearly all of its documentation is too. Learning in English removes a translation step most German learners otherwise do in their heads.',
            'The mentors, who teach from India, keep their speech clear and unhurried and soon tune in to how each learner talks.'
          ] }
      ]
    },
    {
      id: 'month',
      eyebrow: 'The first four weeks',
      h2: 'What does the first month of live online Python look like?',
      lede: 'Eight lessons, two a week. Here is the usual route for a teenage or adult beginner; children take the same steps with smaller programs and more time per step.',
      body: [
        { kind: 'ol', items: [
          '<strong>Week 1: Python answers back.</strong> Install Python or open a browser editor with the mentor, then print, input and arithmetic. By the second lesson the learner has written a small calculator that asks for two numbers.',
          '<strong>Week 2: decisions.</strong> if, elif and else, comparisons and the first error messages read aloud together. Project: a quiz that keeps score.',
          '<strong>Week 3: repetition.</strong> for and while loops, and the habit of predicting what a loop prints before running it. Project: a times-table trainer.',
          '<strong>Week 4: collections and a first file.</strong> Lists and dictionaries, then reading a small CSV file of real data. The bike project below is the kind of file a learner opens for the first time here, in a simpler version.'
        ] },
        { kind: 'source', html: 'Our own course plan for beginners. The pace is set by the learner, not by the calendar.' },
        { kind: 'p', mt: true, html: 'At the end of the month the mentor writes a short note: what the learner can now do alone, what still needs practice, and which course suits them next. For a child that note goes to a parent; adults get it themselves. Nobody is moved on before they are ready, and nobody is held back if they are flying.' }
      ]
    },
    {
      id: 'nextbike',
      tint: 'tint',
      eyebrow: 'A Mannheim dataset',
      h2: 'How fast does Mannheim\'s bike-share data change?',
      lede: 'Stadt Mannheim publishes the live status of every VRNnextbike station in the city as open data under the Datenlizenz Deutschland Namensnennung 2.0. Unlike a yearly statistic, this file is a moment. That makes it a perfect first lesson in data that moves.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'The dataset is called VRN-Nextbike on the city\'s open data portal. Each download is a CSV file with one row per station: its name, its number, how many bikes are available, how many racks it has and more. Ours had 103 stations.',
            'There is no column saying when the snapshot was taken. So we downloaded it three times on 3 November 2026, at 14:45, 14:50 and 14:58 German time, and named each file after the moment we fetched it.'
          ],
          rightH3: 'The questions',
          right: [
            'How many bikes does the 14:45 file show, and how many stations are empty? Then: how much changed five minutes later, and eight minutes after that?',
            'A learner at the end of their first month can write both programs below. The answers are short; the thinking behind them is not.'
          ] },
        { kind: 'code', label: 'Program 1: one snapshot', lang: 'Python', code: V1, note: 'It prints <code>Stations: 103  Bikes shown: 435  Empty stations: 22</code>.' },
        { kind: 'p', mt: true, html: 'At 14:45 the file showed 435 bikes across 103 stations, and 22 stations had none. That is our count of one column at one moment, not an official fleet size: bikes that were being ridden, or parked away from a station, are not in it. A careful learner writes that sentence next to the number before anyone asks.' },
        { kind: 'code', label: 'Program 2: compare snapshots', lang: 'Python', code: V2, note: 'Run after Program 1. It prints <code>14:45 to 14:50, stations changed and net bikes: (17, -2)</code> and <code>14:50 to 14:58, stations changed and net bikes: (0, 0)</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Three downloads of the Mannheim nextbike file on 3 November 2026 (our comparison)', head: ['Downloaded (German time)', 'Stations that changed since the last download', 'Change in bikes shown'], rows: [
          ['14:45', 'First download', 'Baseline: 435'],
          ['14:50', '17', '-2'],
          ['14:58', '0', '0']
        ] },
        { kind: 'source', html: 'Data: Stadt Mannheim, VRN-Nextbike (free_bike_status), mannheim.opendatasoft.com via Open Data BW, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded on 3 November 2026 at the times shown. All counts and comparisons are our own.' },
        { kind: 'p', mt: true, html: 'In five minutes, 17 of 103 stations changed. The station Universität Schloss went from 20 bikes to 14, and the Hauptbahnhof from 3 to 8. Then the third download, eight minutes later, was byte for byte identical to the second. Did nobody take a bike for eight minutes? Possibly, but the likelier explanation is that the published file is refreshed at intervals rather than every second. The data does not tell us which, so the honest conclusion is narrower: a new download is not proof of new data.' },
        { kind: 'p', html: 'Two more surprises wait in the file for curious learners. Only 46 of the 103 stations list a number of racks at all, and at 6 of those 46 the file shows more bikes than racks, presumably bikes parked beside the stand. A number that looks like a limit is not always a limit. Each of these is a small, true observation, and saying exactly how far it goes is a skill that matters far beyond Python.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 12.</strong> Count bikes at three stations from Program 1\'s file by hand, then let Python do it. Which was faster, and which made fewer mistakes?',
          '<strong>Ages 13 to 18.</strong> Change Program 2 so it also prints the station with the biggest change, and its name.',
          '<strong>Adults.</strong> Download the file yourself every five minutes for an hour, saving each with the time in its name, and chart how many stations change each time.',
          '<strong>Going further.</strong> Find the stations where bikes exceed racks and decide how you would report them without implying that something is wrong.'
        ] }
      ]
    },
    {
      id: 'bw',
      eyebrow: 'Python and BW schools',
      h2: 'How does Python fit next to Informatik in Baden-Württemberg?',
      lede: 'Baden-Württemberg is changing fast. A new compulsory subject has reached grades 5 and 6, while in the Oberstufe Informatik is still a minority choice.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The new subject', p: 'From the 2025/26 school year, Baden-Württemberg made Informatik und Medienbildung compulsory across secondary school types, starting in grades 5 and 6 and growing year by year, according to the GI Informatik-Monitor 2026/27.' },
          { h3: 'An older profile fading out', p: 'The profile subject IMP, which combined Informatik, Mathematik and Physik, is being phased out. At Gemeinschaftsschulen it can still be offered in grades 8 to 10 while it lasts.' },
          { h3: 'The Oberstufe gap', p: 'The same monitor names Baden-Württemberg among the Länder where only about one pupil in twelve takes Informatik in the Oberstufe. Most Mannheim teenagers therefore finish school without an Informatik Abitur course.' }
        ] },
        { kind: 'p', mt: true, html: 'That is where a Python class earns its place. A Mannheim pupil in grades 5 to 7 meets the new subject at school and can go further with us at their own pace; a teenager whose school offers little in the Oberstufe can still learn a real programming language properly. We teach next to school, not instead of it, and the school\'s subject and its marks are what count.' },
        { kind: 'p', html: 'Teenagers who enjoy algorithmic puzzles can test themselves nationally, and 23 November 2026 is the date to remember: it closes the first round of the 45th Bundeswettbewerb Informatik, open since 1 September, and the third round of the Jugendwettbewerb Informatik. BWINF organises both; we are independent of it and write our own practice problems.' }
      ]
    },
    {
      id: 'slots',
      eyebrow: 'Mannheim time',
      h2: 'When are live Python lessons in Mannheim time?',
      lede: 'Afternoons for school pupils, early evenings for adults, and weekend slots for anyone. Mentors teach from India, which is ahead of Mannheim.',
      body: [
        { kind: 'table', numCols: [], caption: 'Illustrative Mannheim lesson times and the mentor\'s time in India', head: ['Mannheim', 'Mentor in India, winter', 'Mentor in India, summer'], rows: [
          ['15:40, after school', '20:10', '19:10'],
          ['18:20, after work', '22:50', '21:50'],
          ['Saturday 11:30', '16:00', '15:00'],
          ['Sunday 14:00', '18:30', '17:30']
        ] },
        { kind: 'source', html: 'In Germany the Einheitenzeitgesetz sets MEZ (UTC+1) for winter and MESZ (UTC+2) for summer. This winter began on 25 October 2026; summer time comes back on 28 March 2027. With India fixed at UTC+5:30, the mentor is four and a half hours ahead of Mannheim until then and three and a half hours ahead afterwards. Not fixed batch times.' },
        { kind: 'p', mt: true, html: 'Baden-Württemberg\'s school holidays for 2026/27, from the KMK table: autumn 26 to 31 October 2026, a Christmas break lasting until 9 January 2027 (from 23 December), Easter on 25 March and from 30 March to 3 April 2027, a long Pfingsten break from 18 to 29 May 2027, and summer from 29 July to 11 September 2027. Lessons continue through all of them unless you ask for a pause.' },
        { kind: 'p', html: 'Mannheim had 318,035 residents on 31 December 2024, according to Destatis. Across the Rhine, Ludwigshafen am Rhein (177,222) is in Rheinland-Pfalz, and Heidelberg (155,756) is a short ride up the Neckar; learners in all three cities, and in Viernheim or Schwetzingen, join the same online lessons. Only the school holidays differ where the Land does.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Signs of progress',
    h2: 'How a Mannheim learner can tell the Python is working',
    lede: 'Our own checkpoints, reported in the mentor\'s monthly note.',
    table: { caption: 'Python checkpoints (ours)', head: ['Checkpoint', 'Usually by', 'The learner can'], rows: [
      ['Error reader', 'Week 2', 'Say which line an error points to and what it means'],
      ['Loop predictor', 'Week 3', 'Write down what a loop will print before running it'],
      ['File opener', 'Week 4', 'Read a small CSV file and count something in it'],
      ['Function writer', 'Month 2', 'Wrap repeated code in a function and reuse it'],
      ['Careful reporter', 'Month 3', 'State what a result shows and what it does not']
    ] },
    left: { h3: 'For learners', ps: [
      'Write the time into every file name when the data is live.',
      'If two downloads match exactly, ask whether the data changed or only the clock did.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your child what their program cannot tell you. A good answer is a sign of real understanding.',
      'Time at the keyboard says little; a clear explanation of their own code says a lot.'
    ] }
  },

  catalogue: {
    eyebrow: 'Next steps',
    h2: 'Nine more courses for Mannheim Python learners',
    lede: 'For learners who have the basics. Each is live, in English, with a regular mentor, in a group or solo.',
    bands: [
      { num: 'I', h3: 'Python and data', sub: 'Ages 13 and up', courses: [
        { code: 'PMA / DATA / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Charts, cleaning and a first model on real files.' },
        { code: 'PMA / DATA / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis for adults', blurb: 'Python and SQL for reports that build themselves.' },
        { code: 'PMA / DATA / 03', slug: 'ai-ml-masterclass-teens', title: 'Machine learning for teens', blurb: 'Training and testing models, maths included.' }
      ] },
      { num: 'II', h3: 'Python on the web', sub: 'Ages 13 and up', courses: [
        { code: 'PMA / WEB / 01', slug: 'python-web-development-django-flask-course', title: 'Django and Flask', blurb: 'Turning a script into a site with pages and forms.' },
        { code: 'PMA / WEB / 02', slug: 'backend-coding-masterclass-for-teens', title: 'Backend for teens', blurb: 'APIs and databases behind real apps.' },
        { code: 'PMA / WEB / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Saving, sharing and undoing code like a team does.' }
      ] },
      { num: 'III', h3: 'Python for school and contests', sub: 'Ages 12 to 19', courses: [
        { code: 'PMA / SCHOOL / 01', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'Oberstufe Informatik topics in Python or Java.' },
        { code: 'PMA / SCHOOL / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Data structures and algorithms, step by step.' },
        { code: 'PMA / SCHOOL / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest-style problems, written by us.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Practicalities',
    h2: 'How live Python lessons are arranged for Mannheim',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Afternoon slots for school pupils in Mannheim.' },
      { time: 'After work', l: 'Early evening, the usual choice for adults.' },
      { time: 'Weekend', l: 'Saturday or Sunday, late morning or afternoon.' }
    ],
    cells: [
      { h3: 'Screen shared', p: 'The mentor follows the code as it is written.' },
      { h3: 'Two a week', p: 'Close enough together that nothing fades.' },
      { h3: 'English, plainly', p: 'Short sentences, said again on request.' },
      { h3: 'All live', p: 'There are no recordings to watch alone.' },
      { h3: 'One mentor', p: 'The same teacher from the first lesson on.' },
      { h3: 'Group or solo', p: 'A class of 15 to 20, or private lessons.' }
    ]
  },

  projectsH2: 'Built by our Python students',
  projectsLede: 'Students of ours in many countries have gone from a first print statement to projects like these. More are collected on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Our Google reviews from students and parents, copied without edits.',

  fees: {
    h2: 'Fees for live Python lessons in Mannheim',
    lede: 'Lessons are billed by the month, eight at a time. On this page the monthly fee is converted to euro with the European Central Bank reference rate; at checkout the charge runs in US dollars and your bank makes the final conversion, so a cent or two of difference is normal.',
    free: ['A free first Python lesson', 'A first program written together', 'No card needed'],
    group: ['15 to 20 learners at one level', 'A regular mentor', 'Two lessons a week', 'Monthly, stop any month'],
    one: ['A mentor for one learner', 'Your pace, your projects', 'Times agreed in advance']
  },

  faq: {
    eyebrow: 'Mannheim asks',
    h2: 'Online Python classes in Mannheim: questions answered',
    items: [
      { q: 'Are the classes in German?', a: 'No. All lessons are live and taught in English only. The mentor speaks clearly, adapts to the learner\'s pace and accent, and repeats in simpler words when asked. Python\'s keywords and error messages are English anyway.' },
      { q: 'Is a live online lesson really better than a video course?', a: 'For most beginners, yes, because a mentor sees the code as it is typed and helps the moment an error appears. Video courses suit some confident self-learners; we only teach live.' },
      { q: 'What does the learner need?', a: 'A computer with a real keyboard, an internet connection that holds a video call and a headset. Python costs nothing; setting it up is part of lesson one.' },
      { q: 'From what age can my child learn Python?', a: 'Nine is the usual starting age for typed code with us; six to eight year olds begin with Scratch blocks instead. Adults of any age are welcome.' },
      { q: 'How does this relate to Informatik at a Baden-Württemberg school?', a: 'Baden-Württemberg introduced the compulsory subject Informatik und Medienbildung from 2025/26, starting in grades 5 and 6. Our lessons are extra practice and depth next to that; the school subject and its marks are what count.' },
      { q: 'When are lessons in Mannheim time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. School pupils often choose afternoons, adults early evenings.' },
      { q: 'Where are the mentors?', a: 'They teach from India. While Germany is on winter time the mentor\'s clock reads four and a half hours later than Mannheim\'s, so 15:40 here is 20:10 there; after the change on 28 March 2027 the gap shrinks to three and a half hours.' },
      { q: 'Can adults earn a Python certificate?', a: 'Our PCEP and PCAP course prepares for the Python Institute\'s exams, which are taken with the Python Institute, not with us. We do not award German qualifications.' },
      { q: 'How is the fee shown and charged?', a: 'Monthly, for eight lessons. It is shown here in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts, so the amount on your statement may differ very slightly. The first lesson is free.' },
      { q: 'What will the learner build in the first month?', a: 'A calculator, a scoring quiz, a times-table trainer and a first program that reads a small data file, such as a simpler version of the Mannheim bike project on this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Further reading for anyone in Germany learning Python.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The hub for all our Germany pages.' },
      { href: '/coding-classes-in-baden-wuerttemberg', label: 'Coding classes in Baden-Württemberg', p: 'The Land page for Baden-Württemberg.' },
      { href: '/python-classes-for-kids-germany', label: 'Python classes for kids', p: 'Typed code for primary-age learners.' },
      { href: '/coding-classes-for-adults-germany', label: 'Coding for adults', p: 'Starting Python later in life.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'The rules in all sixteen Länder.' },
      { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik', p: 'Preparing for the national contest.' }
    ]
  },

  start: {
    h2: 'Try a free live Python lesson',
    lede: 'Lesson one is not a sales talk: the learner writes a short program with the mentor and then extends it unaided. You leave with a suggested course and format.',
    readFirst: 'More on our approach is in <a class="ag-inline-link" href="/how-we-teach">how we teach</a>; syllabuses are listed under <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'Every lesson is live, online and in English; the mentors are in India. WhatsApp messages in English get the quickest reply.',
    formNote: 'The first lesson costs nothing and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/coding-classes-for-adults-germany', label: 'Coding for adults' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' }
      ] }
    ],
    bottomRight: 'Stamp the time on live data'
  },

  personalityCss: `
.ag-root.ag-pma .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-pma .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-pma .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-pma .ag-table th:first-child { width: 22%; }
.ag-root.ag-pma .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'GI Informatik-Monitor 2026/27 (Baden-Württemberg page and national comparison); KMK Ferien 2026/2027; BWINF 2026 dates; Destatis GV-ISys 31.12.2024; Stadt Mannheim open data, VRN-Nextbike, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Stamp the time on live data: an original Python project on three downloads of Mannheim\'s VRNnextbike station file on 3 November 2026 (14:45, 14:50, 14:58): 103 stations, 435 bikes shown and 22 empty stations at 14:45, 17 stations changed and a net -2 bikes by 14:50, and a third download byte-identical to the second; plus the rack-count gaps (46 of 103 list racks, 6 show more bikes than racks). Lesson family: a live file is a photograph; timestamp it and compare.',
    requiredMentions: ['nextbike_1445.csv', 'Stations: 103  Bikes shown: 435  Empty stations: 22', '14:45 to 14:50, stations changed and net bikes: (17, -2)', '14:50 to 14:58, stations changed and net bikes: (0, 0)', 'about one pupil in twelve', 'Stamp the time on live data', '318,035', 'byte for byte identical'],
    sources: [
      { claim: 'BW Informatik und Medienbildung from 2025/26; IMP phasing out.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/baden-wuerttemberg' },
      { claim: 'About one in twelve BW Oberstufe pupils takes Informatik.', url: 'https://informatik-monitor.de/' },
      { claim: 'BW holidays 2026/27.', url: 'https://www.kmk.org/service/ferien.html' },
      { claim: 'BWINF 2026 dates.', url: 'https://bwinf.de/' },
      { claim: 'Mannheim nextbike station status and licence.', url: 'https://ckan.govdata.de/dataset/vrn-nextbike' },
      { claim: 'Mannheim population 318,035 on 31 December 2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'A Mannheim fleet size: the 435 is our count of bikes shown at stations in one snapshot, not a published total.',
      'The refresh interval of the feed: not stated by the publisher; we only report that two downloads eight minutes apart were identical.',
      'Any affiliation with Stadt Mannheim, VRN, nextbike, the BW ministry, BWINF or the Python Institute: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
