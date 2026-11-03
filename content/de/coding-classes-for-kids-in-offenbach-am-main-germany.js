'use strict';
// Coding classes for kids in Offenbach am Main (ag- city page, Germany cluster P6 row DE184, tier-2 slug shape
// coding-classes-for-kids, ages 6 to 12).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Spine: Hessen has no compulsory Informatik for anyone, so for an Offenbach child the starting point is at home; a
// first-frost project on the Offenbach-Wetterpark weather station, where a missing-value code fakes a frost in August;
// how a child of 6 starts, step by step.
// City open data: GovData lists no Stadt Offenbach dataset with an allowed licence and a machine-readable file other
// than population, election-district and vehicle-stock tables (demographic or PDF only), so the project uses the
// Deutscher Wetterdienst station 07341 Offenbach-Wetterpark, which lies inside the city (DWD metadata 50.0900 N,
// 8.7862 E; OpenStreetMap reverse lookup of those coordinates returns "Offenbach am Main"). No other page in content/
// or src/pages uses station 07341 (grep 2026-11-04).
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 Nov 2026; copies under src-pages/coding-classes-for-kids-in-offenbach-am-main-germany/):
//  - GI Informatik-Monitor 2026/27, Hessen page: "Schulartübergreifend findet kein verbindlicher Informatikunterricht
//    statt." (fact 77); "Im gymnasialen Bildungsgang kann Informatik als Teil des Wahlunterrichts je einstündig ab der
//    Jahrgangsstufe 7 angeboten werden." National page: Hessen among six Länder without Informatik compulsory for all
//    (92); no binding plans known in Berlin, Brandenburg and Hessen (96).
//  - KMK primary page: Grundschule grades 1 to 4 (fact 1).
//  - KMK FER2026_27.pdf: "Hessen (4) 05.10. - 17.10. 23.12. - 12.01. -- 22.03. - 02.04. -- 28.06. - 06.08." (fact 276).
//  - bwinf.de: Biber 9 to 20 November 2026, grades 3 to 13, primary 9 tasks in 30 minutes (facts 130, 132, 133).
//    mathe-kaenguru.de: Känguru 2027 on 8 April 2027 (183); registration 1 December 2026 to 31 January 2027 (184).
//  - Destatis GV-ISys 31.12.2024: Offenbach am Main 132,746; Hessen 6,280,793.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate observations (KL), station 07341
//    Offenbach-Wetterpark: tageswerte_KL_07341_20050715_20251231_hist.zip (220,341 bytes, sha256
//    d2723ef5a12b...726eb4f6f8d) and tageswerte_KL_07341_akt.zip (38,437 bytes, sha256 f17a2d519c58...e525ce988b2d),
//    downloaded 4 November 2026 from opendata.dwd.de. Terms_of_use.txt: "The Creative Commons BY 4.0 - Licence "CC BY
//    4.0" apply." Column TNK = daily minimum air temperature at 2 m; missing values are -999. 7,779 days from
//    15 July 2005 to 2 November 2026; 20 days with TNK -999, all in 2005.
// Our own calculations (scratchpad de/w/T5/offenbach: v1.py, v2.py, python3 -I): v1 (no -999 check) prints 2005
// 2005-08-20 as the first frost of 2005, then one date per year to 2026 2026-11-02. v2 prints "Autumns with a frost:
// 22", "Earliest first frost: 2015-10-12", "Latest first frost: 2014-11-21", "This autumn: 2026-11-02". For the 20
// autumns 2006 to 2025 both middle values are 31 October; first frost in October 12 times, November 10 times (2005 to
// 2026). 2005's corrected first frost is 18 November 2005, but 16 and 17 November 2005 are missing.
// Lesson family: compare dates from different years by their place in the year (month and day), after removing the
// -999 code that is not a temperature.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'first = {}',
  'with open("offenbach_nights.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        year, month = row["date"][:4], int(row["date"][5:7])',
  '        if month >= 8 and float(row["min_temp"]) < 0 and year not in first:',
  '            first[year] = row["date"]',
  '',
  'for year in sorted(first):',
  '    print(year, first[year])'
].join('\n');

const V2 = [
  'import csv',
  '',
  'first = {}',
  'with open("offenbach_nights.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        year, month = row["date"][:4], int(row["date"][5:7])',
  '        temp = float(row["min_temp"])',
  '        if temp == -999:',
  '            continue',
  '        if month >= 8 and temp < 0 and year not in first:',
  '            first[year] = row["date"]',
  '',
  'print("Autumns with a frost:", len(first))',
  'by_day = sorted(first.values(), key=lambda d: d[5:])',
  'print("Earliest first frost:", by_day[0])',
  'print("Latest first frost:", by_day[-1])',
  'print("This autumn:", first.get("2026"))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Offenbach: coding for kids' },
  slug: 'coding-classes-for-kids-in-offenbach-am-main-germany',
  code: 'cko',
  accent: '#373450',
  accentRationale: 'Coding classes for kids, Offenbach am Main: a cold night violet #373450 for the first frosty nights in the weather project; contrast 9.63 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-hesse', name: 'Hesse' }],
  routeLabel: 'Coding classes for kids in Offenbach am Main',
  title: 'Coding Classes for Kids in Offenbach am Main: Live in English',
  description: 'Coding classes for kids in Offenbach am Main aged 6 to 12, live in English: why Hessen has no Informatik subject, how to start, and an Offenbach first-frost project.',
  ogDescription: 'Live coding lessons in English for Offenbach children of 6 to 12: Hessen schools have no compulsory Informatik, so here is how a child can start at home, two free contests this school year, and a project on the Offenbach-Wetterpark weather station that finds a frost in August.',
  twitterDescription: 'Coding for Offenbach kids, live in English: no Informatik in Hessen, and a first-frost data project.',
  pageName: 'Coding Classes for Kids in Offenbach am Main',
  webPageDescription: 'A guide for Offenbach am Main parents of children aged 6 to 12 to coding classes in English, with Gesellschaft für Informatik facts for Hessen, KMK dates, contest dates and an original project on daily data from the Offenbach-Wetterpark weather station of the Deutscher Wetterdienst.',
  courseDescription: 'Live online coding classes in English for Offenbach children aged 6 to 12: puzzles and Scratch for the youngest, typed Python and real data for older children, with one regular mentor, alone or in an age-matched batch of fifteen to twenty.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'Hesse', href: '/coding-classes-in-hesse' }],
  crumbLabel: 'Kids in Offenbach',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#hessen', label: 'Hessen' },
    { href: '#frost', label: 'First frost' },
    { href: '#start', label: 'Starting' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Offenbach am Main &middot; Children 6 to 12 &middot; Live online',
  h1: 'Coding classes for kids in Offenbach am Main',
  lede: 'Hessen is one of the six Länder where no pupil has to take Informatik, and the Gesellschaft für Informatik knows of no binding plan to change that. For an Offenbach child who wants to know how games and apps are made, the answer will not come from the timetable. This page explains what Hessen schools do offer, how a child of 6 to 12 can start in our live English classes, two free contests this school year, and a project on the weather station in Offenbach that seems to record a frost in August.',
  secondaryCta: { href: '#frost', label: 'See the frost project' },
  wa: 'Hello Modern Age Coders, our child lives in Offenbach and would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Teaching children live since 2020 &middot; 10,000+ students worldwide &middot; a regular mentor, in English',
  spec: [
    ['Ages', '6 to 12, by age group'],
    ['Begins with', 'Puzzles and Scratch'],
    ['Later', 'Typed Python and real data'],
    ['Group', 'Fifteen to twenty, or private'],
    ['Teachers', 'Mentors in India, in English'],
    ['Try it', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding classes for kids in Offenbach am Main as live video lessons in English, open to every child from 6 to 12. The youngest start with puzzles and Scratch; from about 9, children type real Python and later explore Offenbach weather data. A regular mentor matches each child\'s pace and accent, either privately or among fifteen to twenty children of the same age.',

  picks: {
    eyebrow: 'Good first courses',
    h2: 'Which coding course should an Offenbach child start with?',
    lede: 'Three courses that between them suit nearly every child from 6 to 12.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CKO / 01', title: 'Coding for Kids', note: 'Our widest course for six to twelve year olds, taught in age bands: Scratch stories, games and apps, building towards simple AI ideas.' },
      { course: 'game-development-masterclass-for-kids', code: 'CKO / 02', title: 'Game Development for Kids', note: 'For the child who already lives for games: Scratch, Roblox and Minecraft in one course, from about eight.' },
      { course: 'ai-literacy-for-kids-course', code: 'CKO / 03', title: 'AI Literacy for Kids', note: 'For curious eight to fourteen year olds: how computers learn from examples, explored safely without chatbot accounts.' }
    ]
  },

  sections: [
    {
      id: 'hessen',
      eyebrow: 'School in Hessen',
      h2: 'Do Offenbach schools teach coding?',
      lede: 'Not as a required subject at any age. Hessen leaves Informatik to electives, and none of them starts before grade 7.',
      body: [
        { kind: 'two',
          leftH3: 'No compulsory Informatik',
          left: [
            'The Gesellschaft für Informatik, in its Informatik-Monitor 2026/27, states for Hessen that across all school types there is no compulsory Informatik teaching. Nationally it lists Hessen among six Länder without Informatik that is binding for all pupils, and among three where no binding plans to introduce it are known.',
            'So an Offenbach child can go from grade 1 to the end of secondary school without ever being required to write a line of code.'
          ],
          rightH3: 'What is offered',
          right: [
            'A Gymnasium may run Informatik inside its Wahlunterricht, one hour a week, starting in grade 7. In the Haupt- and Realschule tracks, schools can set up Informatik as a Wahlpflicht subject, though the monitor notes there is no curriculum of its own for those tracks.',
            'Whether your child gets any of this depends on the school, and nothing at all is planned for Grundschule, grades 1 to 4.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Computing for an Offenbach child, by grade (Hessen rules)', head: ['Grades', 'At school', 'What our classes can add'], rows: [
          ['1 to 4', 'Grundschule, no Informatik', 'Puzzles, patterns, Scratch stories and games'],
          ['5 and 6', 'No compulsory Informatik', 'Typed Python, games and first data projects'],
          ['From 7', 'Gymnasium: one elective lesson a week, if offered', 'Python projects and contest practice'],
          ['Other tracks', 'Wahlpflicht Informatik possible, school by school', 'A steady course that does not depend on the school']
        ] },
        { kind: 'source', html: 'Read on 2 November 2026: the Hessen entry and the national summary of the GI Informatik-Monitor 2026/27, and the KMK page on the Primarbereich. We wrote the last column ourselves. Destatis counts Offenbach am Main 132,746 and Hessen 6,280,793 at 31 December 2024. Families in Mühlheim am Main, Heusenstamm, Obertshausen and Neu-Isenburg live under the same Hessen rules.' },
        { kind: 'p', mt: true, html: 'We do not replace school and we do not set marks. What we can give an Offenbach child is what the timetable leaves out: a regular hour, twice a week, with a mentor who teaches them to break a problem into steps, try an idea and find their own mistake.' }
      ]
    },
    {
      id: 'frost',
      tint: 'tint',
      eyebrow: 'A real Offenbach project',
      h2: 'When does Offenbach get its first frost of the autumn?',
      lede: 'The Deutscher Wetterdienst runs a weather station in Offenbach, the Offenbach-Wetterpark, and publishes its daily readings as open data. The coldest temperature of every night since 2005 is in the file, and finding the first frost of each autumn makes a perfect first data project, with a trap in it.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'Station 07341, Offenbach-Wetterpark, is part of the DWD Climate Data Center\'s daily climate records, which the DWD releases as open data under CC BY 4.0. We downloaded the historical and recent files on 4 November 2026: 7,779 days from 15 July 2005 to 2 November 2026.',
            'For each day we keep the date and the lowest air temperature of the day, in offenbach_nights.csv. A frost, for this project, is a day whose lowest temperature is below 0 degrees.'
          ],
          rightH3: 'The question',
          right: [
            'In each year, from August onwards, on which date did the temperature first drop below zero? Version 1 goes through the days in order and writes down the first frosty date it finds for each year, then stops looking for that year.',
            'It is short enough for a ten year old to read line by line.'
          ] },
        { kind: 'code', label: 'Version 1: the first frost in each year', lang: 'Python', code: V1, note: 'It prints one line per year, starting <code>2005 2005-08-20</code> and ending <code>2026 2026-11-02</code>.' },
        { kind: 'p', mt: true, html: 'A frost in Offenbach on 20 August 2005? Children spot this at once. Opening the file shows the reason: on that day the minimum temperature is written as -999. The weather service uses -999 to mean "no reading", and -999 is certainly below zero, so the program believed it. In the whole file there are 20 such days, all in 2005, the year the station began.' },
        { kind: 'p', html: 'Version 2 skips the -999 days before anything else. Then it answers a second question: which autumn had the earliest first frost, and which the latest? Here a new trap waits. Sorting the full dates would just put 2005 first and 2026 last. To compare the autumns we sort by month and day only, the part of the date after the year.' },
        { kind: 'code', label: 'Version 2: skip -999, then compare by month and day', lang: 'Python', code: V2, note: 'It prints <code>Autumns with a frost: 22</code>, <code>Earliest first frost: 2015-10-12</code>, <code>Latest first frost: 2014-11-21</code> and <code>This autumn: 2026-11-02</code>.' },
        { kind: 'p', mt: true, html: 'The earliest first frost came on 12 October 2015, the latest on 21 November 2014, more than five weeks apart. And this autumn the first frost was on Monday 2 November 2026, two days before we downloaded the file. Is that early or late? Across the 20 autumns from 2006 to 2025, the two middle dates are both 31 October, so 2026 is close to an ordinary year.' },
        { kind: 'table', mt: true, numCols: [], caption: 'First frost of the autumn in Offenbach, selected years (our calculation)', head: ['Year', 'First frost', 'Notes'], rows: [
          ['2005', '18 November 2005', 'After removing -999; 16 and 17 November 2005 are missing'],
          ['2014', '21 November 2014', 'Latest in the record'],
          ['2015', '12 October 2015', 'Earliest in the record'],
          ['2020', '5 November 2020', ''],
          ['2023', '16 October 2023', ''],
          ['2025', '17 November 2025', ''],
          ['2026', '2 November 2026', 'This autumn']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, daily climate data, station 07341 Offenbach-Wetterpark, licence CC BY 4.0, downloaded 4 November 2026. A frost here means a daily minimum air temperature below 0 degrees. First frost dates are our own calculation; the first came in October in 12 autumns and in November in 10, from 2005 to 2026. Twenty-two years is too short to say anything about climate trends, so we do not.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Each morning this week, look outside: frost on cars or grass, yes or no? Keep a tally on the fridge. Ask a grown-up what you should write on a morning you forget to look.',
          '<strong>Ages 8 to 10, Scratch.</strong> Make a list of ten night temperatures and put -999 in one of them. Make the cat say the coldest night. Then teach the cat to ignore -999.',
          '<strong>Ages 10 to 12, Python.</strong> Run Version 1, find the 2005 mistake yourself in the CSV, and add the skip line before you look at Version 2.',
          '<strong>Going further.</strong> Change Version 2 to find the last frost of each spring instead. Which month should the program look in?'
        ] }
      ]
    },
    {
      id: 'start',
      eyebrow: 'Getting started',
      h2: 'How does a child of 6 start learning to code?',
      lede: 'Gently, and by playing. This is how the first weeks usually go for our youngest Offenbach learners.',
      body: [
        { kind: 'ol', items: [
          '<strong>The free first class.</strong> One friendly puzzle and one tiny program. From that hour the mentor gets a feel for your child\'s thinking and English, and proposes an age group.',
          '<strong>Weeks 1 and 2: order.</strong> Picture puzzles where steps must go in the right order, then a Scratch character that walks, waves and speaks. Nothing needs typing.',
          '<strong>Weeks 3 and 4: repeat.</strong> Making something happen again and again with a loop, instead of dragging the same block ten times. Children feel clever here, and they are right.',
          '<strong>From week 5 until week 8: react.</strong> A first game: press a key, the character jumps; touch the edge, it says "ouch". The child decides the story.',
          '<strong>After that.</strong> Scores, levels and sounds, and for confident readers of about 9, the move to typed Python.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'In English, at their pace', p: 'Every class is live and in English only. Mentors use short sentences, show before they explain and slow down when needed. Younger Offenbach children pick up the handful of words they need surprisingly fast.' },
          { h3: 'One mentor', p: 'The mentors are based in India and teach over live video. Your child keeps the same mentor every week, which matters a great deal at six: a familiar face makes it safe to try and to get things wrong.' },
          { h3: 'Short and lively', p: 'Lessons are an hour, with something new to do every few minutes. The child holds the mouse; the mentor never takes over the screen to do it for them.' }
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Free contests',
      h2: 'Which free contests suit an Offenbach primary pupil?',
      lede: 'Two, both entered through the school. We are not connected with either.',
      body: [
        { kind: 'table', numCols: [], caption: 'Two free school contests for 2026/27', head: ['Contest', 'Who', 'When'], rows: [
          ['Informatik-Biber', 'Grades 3 to 13; primary pupils solve 9 tasks in 30 minutes', '9 to 20 November 2026'],
          ['Känguru der Mathematik', 'Maths contest entered by the school', '8 April 2027; registration 1 December 2026 to 31 January 2027']
        ] },
        { kind: 'source', html: 'Sources: Bundesweite Informatikwettbewerbe, Informatik-Biber 2026; Känguru der Mathematik, 2027 dates (held in April this time, since the normal March Thursday would land right before Easter holidays nearly everywhere); read on 2 November 2026.' },
        { kind: 'p', mt: true, html: 'The Biber needs no coding at all, only careful thinking, so it is a good first contest even for a child who has never programmed. We never copy either contest\'s questions; our mentors invent their own puzzles in a similar style, and if your child\'s school takes part, the class teacher will know.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are the classes in Offenbach time?',
      lede: 'After school and at weekends, chosen when you book. These examples show the time on the mentor\'s side.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Offenbach times and the time in India', head: ['Offenbach', 'India, winter months', 'India, from 28 March 2027'], rows: [
          ['Wednesday 15:20', '19:50', '18:50'],
          ['Thursday 16:50', '21:20', '20:20'],
          ['Saturday 10:50', '15:20', '14:20']
        ] },
        { kind: 'source', html: 'Offenbach keeps German legal time under the Einheitenzeitgesetz: MEZ, UTC+1, in winter and MESZ, UTC+2, in summer. This year\'s change back was on 25 October 2026 and the change forward is on 28 March 2027. Indian clocks sit at UTC+5:30 all year round, which makes the gap 4 h 30 in winter and 3 h 30 in summer. The times are examples, not fixed batches.' },
        { kind: 'table', mt: true, numCols: [], caption: 'When Hessen schools are closed in 2026/27', head: ['Ferien', 'From and to'], rows: [
          ['Herbstferien (already over)', '5 to 17 October 2026'],
          ['Weihnachtsferien', '23 December 2026 to 12 January 2027'],
          ['Osterferien', '22 March to 2 April 2027'],
          ['Sommerferien', '28 June to 6 August 2027']
        ] },
        { kind: 'source', html: 'Dates are the first and last days off in the Hessen row of the KMK holiday list for 2026/2027 (dated 9 October 2025). Our classes run through the holidays; families can pause whenever they travel.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How will we show you what your child has learned?',
    lede: 'We describe progress with five stages we wrote ourselves. They decide which batch fits and what we tell you, and have nothing to do with school grades.',
    table: { caption: 'Five stages, 6 to 12 (ours)', head: ['Stage', 'Typical age', 'Your child can'], rows: [
      ['1. In order', '6 to 7', 'Arrange a few picture cards into a working sequence, then try it on a Scratch sprite'],
      ['2. Again', '7 to 8', 'Use a loop so the computer repeats something'],
      ['3. If', '8 to 9', 'Make a game react differently to different keys'],
      ['4. Typed', '9 to 11', 'Write a few lines of Python and read the result'],
      ['5. Careful', '10 to 12', 'Spot a fake value in real data and handle it before answering']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the frost project. A child who asks "is that number real?" has learned something many adults have not.',
      'Our notes to you say what your child made and could talk through, never how long they sat at a screen.'
    ] },
    right: { h3: 'For children', ps: [
      'If the computer finds a frost in August, do not believe it straight away. Look at the data.',
      'To compare days from different years, compare the month and day, not the year.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Offenbach children',
    lede: 'All of them live, all in English, all with one mentor who stays, solo or with children of the same age.',
    bands: [
      { num: 'I', h3: 'Blocks and games', sub: 'Ages 6 to 14', courses: [
        { code: 'CKO / GAM / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Three to four months of Scratch, finishing with games they designed.' },
        { code: 'CKO / GAM / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Blocks, then code, inside Minecraft.' },
        { code: 'CKO / GAM / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'Roblox games scripted by the child.' }
      ] },
      { num: 'II', h3: 'Typed code', sub: 'Ages 9 to 15', courses: [
        { code: 'CKO / TYP / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code from about nine: turtle art, small games, simple data.' },
        { code: 'CKO / TYP / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns and puzzles explored with Python, 10 to 15.' },
        { code: 'CKO / TYP / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Step-by-step reasoning practice with puzzles we write ourselves.' }
      ] },
      { num: 'III', h3: 'Number confidence', sub: 'Ages 4 to 11', courses: [
        { code: 'CKO / NUM / 01', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Playful, hands-on maths for 4 to 7 year olds.' },
        { code: 'CKO / NUM / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Patient live help with school maths up to grade 5.' },
        { code: 'CKO / NUM / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'From first beads to calculating in the head.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'What does a normal week of classes look like from Offenbach?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Offenbach afternoons, when homework is done.' },
      { time: 'Saturday', l: 'A late-morning slot that young children like.' },
      { time: 'Private', l: 'Whatever time suits your family and the mentor.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'A familiar face, week after week.' },
      { h3: 'By age', p: 'Six year olds learn with children of their own age.' },
      { h3: 'Child in charge', p: 'The child holds the mouse, always.' },
      { h3: 'Simple English', p: 'Shown first, said slowly, repeated kindly.' },
      { h3: 'For parents', p: 'A short note on what was made.' },
      { h3: 'Batch or private', p: 'Up to twenty children, or your child alone.' }
    ]
  },

  projectsH2: 'What older students build',
  projectsLede: 'Children who begin at six often keep going for years. Here is work by a few of our older students, with more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents\' and students\' own words from Google.',

  fees: {
    h2: 'Fees for Offenbach families',
    lede: 'The fee is monthly, for eight live classes. On this page it is given in euro, converted at the European Central Bank reference rate; the charge is made in US dollars and your bank converts it, so the statement can show a slightly different euro amount.',
    free: ['A free first class', 'A puzzle and a first tiny program', 'No card asked for'],
    group: ['An age-matched batch of fifteen to twenty', 'A regular mentor', 'Two classes a week', 'Monthly, cancel when you wish'],
    one: ['Your child with a private mentor', 'Your child\'s own pace and ideas', 'Times that suit your family']
  },

  faq: {
    eyebrow: 'Offenbach parents ask',
    h2: 'Coding classes for kids in Offenbach am Main: parents\' questions',
    items: [
      { q: 'Are the classes in German?', a: 'No, they are always in English, and always live. Our mentors talk to young children in short, simple sentences, wait for an answer, and adapt to how each child speaks. Most of the lesson is visible on the screen, which helps a child whose English is still new.' },
      { q: 'Do Hessen schools teach Informatik?', a: 'Not as a compulsory subject. The Gesellschaft für Informatik reports no compulsory Informatik across school types in Hessen. A Gymnasium may offer it as a one-hour elective from grade 7, and other tracks may set it up as a Wahlpflicht subject.' },
      { q: 'Is my child too young at 6?', a: 'Rarely. At six, children sort picture steps and snap Scratch blocks together; reading and typing are not needed yet. One free trial lesson tells you and the mentor which group suits.' },
      { q: 'When are the classes in Offenbach time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Many Offenbach families choose an afternoon after school or a Saturday.' },
      { q: 'Where are the teachers?', a: 'They teach from India on a live video call. A Wednesday 15:20 lesson in Offenbach is 19:50 on the mentor\'s clock during the German winter.' },
      { q: 'How large is a batch?', a: 'Batches gather fifteen to twenty children close in age. Families who prefer can book private lessons instead: two a week, your child and the mentor only.' },
      { q: 'Can my child enter the Informatik-Biber?', a: 'Yes, through a school that has signed up. It costs nothing, asks no coding knowledge and starts at grade 3; at primary level children get nine puzzles and half an hour. The 2026 contest weeks are 9 to 20 November.' },
      { q: 'What do we need at home?', a: 'A laptop or computer with a mouse, a steady internet connection and a quiet spot. A parent nearby helps in the first lessons with younger children.' },
      { q: 'What does it cost?', a: 'There is one fee per month. We show it in euro using the ECB reference rate, the card is charged in US dollars, and your bank does the exchange, so the euro figure on your statement may be a touch different. Your child\'s first lesson is free.' },
      { q: 'Will my child use AI chatbots?', a: 'No. Chatbot accounts are for older users under their own terms. Our young learners explore how AI works through games and examples we build with them, and every program they make is their own.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Offenbach parents.',
    items: [
      { href: '/coding-classes-in-hesse', label: 'Coding classes in Hesse', p: 'Hessen rules, dates and courses.' },
      { href: '/coding-classes-for-kids-frankfurt', label: 'Coding classes for kids in Frankfurt', p: 'For families just across the Main.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany', p: 'Our children\'s courses nationwide.' },
      { href: '/scratch-classes-for-kids-germany', label: 'Scratch classes for kids', p: 'Where most six to eight year olds begin.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools allow which ages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is a friendly puzzle and a tiny first program. The mentor watches how your child approaches it and how much English they follow, then suggests a course and an age group.',
    readFirst: 'Parents who like to read up first can start with <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, then look through <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Every lesson comes live from a mentor in India and is spoken in English alone. WhatsApp messages in English get the fastest answer.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/coding-classes-for-kids-germany', label: 'Kids coding in Germany' },
        { href: '/coding-classes-for-kids-frankfurt', label: 'Kids coding in Frankfurt' },
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-hesse', label: 'Hesse' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Minus 999 is not a frost'
  },

  personalityCss: `
.ag-root.ag-cko .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cko .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-cko .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-cko .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cko .ag-steps li { margin-bottom: 0.4rem; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (national and Hessen pages); KMK Primarbereich and Ferien im Schuljahr 2026/2027; Bundesweite Informatikwettbewerbe, Informatik-Biber; Känguru der Mathematik; Destatis 31.12.2024; Einheitenzeitgesetz; read 2 November 2026. Deutscher Wetterdienst, Climate Data Center, daily climate data for station 07341 Offenbach-Wetterpark, CC BY 4.0, downloaded 4 November 2026.',
    localProject: 'First frost in Offenbach: an original Python project on 7,779 days of minimum temperatures from the DWD Offenbach-Wetterpark station (2005 to 2026). A first version finds a frost on 20 August 2005, which is the missing-value code -999; skipping it and sorting by month and day gives 22 autumns, earliest first frost 12 October 2015, latest 21 November 2014, this autumn 2 November 2026, against a 2006 to 2025 middle of 31 October. Lesson family: remove the -999 code, then compare dates across years by month and day.',
    requiredMentions: ['offenbach_nights.csv', '2005 2005-08-20', 'Autumns with a frost: 22', 'Earliest first frost: 2015-10-12', 'Latest first frost: 2014-11-21', 'This autumn: 2026-11-02', 'Offenbach am Main 132,746', 'Minus 999 is not a frost'],
    sources: [
      { claim: 'Hessen: no compulsory Informatik; Gymnasium elective from grade 7.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/hessen' },
      { claim: 'Hessen among six Länder without compulsory Informatik; no binding plans.', url: 'https://informatik-monitor.de/' },
      { claim: 'Hessen holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Informatik-Biber 2026.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Känguru 2027 date and registration.', url: 'https://www.mathe-kaenguru.de/' },
      { claim: 'Offenbach-Wetterpark daily climate data.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/' },
      { claim: 'DWD open data licence CC BY 4.0.', url: 'https://opendata.dwd.de/climate_environment/CDC/Terms_of_use.txt' }
    ],
    rejectedClaims: [
      'Any climate-trend claim from 22 autumns: too short a record, so none is made.',
      'Population, vehicle or election tables from the City of Offenbach as a children\'s project: demographic or PDF only, not used.',
      'Naming Offenbach or Frankfurt schools as sources of students: refused.',
      'Any link with the Deutscher Wetterdienst, BWINF, the Känguru organisers or the City of Offenbach: none.'
    ]
  }
};
