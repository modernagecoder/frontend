'use strict';
// Online Python classes in Göttingen (ag- city page, Germany cluster P6 row DE189, tier-2 shape online-python = live
// online explained, Python path).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: copy and paste is where bugs hide. Three counts on seventy years of Göttingen weather, written by copying a block
// twice, give a wrong answer that looks perfectly plausible; one function fixes it everywhere at once.
// City data searched first: the Stadt Göttingen bus stop and bus network files (GovData "Bushaltestellen", CC0, publisher
// Stadt Göttingen) are hosted on cloud.goettingen.de, which did not connect (curl 000, no retry). So the project uses the
// DWD station inside the city (reverse lookup of 51.5002 N, 9.9507 E: Geismar, Göttingen), which no other page uses.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, Niedersachsen page (raw copy also in src-pages/coding-and-ai-classes-in-wolfsburg-
//    germany/infmon-niedersachsen/): "seit dem Schuljahr 2024/25 das Pflichtfach Informatik in den Jahrgangsstufen 9 und
//    10" (79); "An der Hauptschule kann in den Jahrgangsstufen 6 bis 10 ein zweistündiges Wahlpflichtfach Informatik
//    angeboten werden." National page: BW, Niedersachsen, Bremen "ungefähr jede zwölfte Person" (99).
//  - KMK Ferien 2026/2027, Niedersachsen row (277).
//  - Python tutorial 4 (docs.python.org/3/tutorial/controlflow.html, fetched 3 Nov 2026, raw in src-pages): "The keyword
//    def introduces a function definition."; "Small anonymous functions can be created with the lambda keyword."
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Göttingen 127,259; Kassel 197,230; Hannover 522,131.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate data (KL), station 01691 "Göttingen",
//    tageswerte_KL_01691_18580101_20251231_hist.zip, downloaded 3 November 2026; 59,690 days from 1 January 1858 to
//    31 December 2025. Metadaten_Geographie lists eleven positions since 1779; the latest from 15 December 1967, 12 August
//    1978, 10 November 1993 and 24 August 2007 (167.42 m). 1950 to 2019: no missing high, low or rain values. Licence
//    CC BY 4.0 (opendata.dwd.de Terms_of_use.txt).
// Our own calculations (scratchpad de/w/T6/goettingen/v1.py, v2.py, python3 -I):
//  v1 (copy-paste, third block deliberately left reading "low"): "2010s days: 3652  summer: 436  frost: 792  wet: 2647".
//  v1+v2 (function): 1950 3652 265 926 1148 / 1960 3653 269 842 1229 / 1970 3652 306 673 1150 / 1980 3653 333 764 1243 /
//  1990 3652 376 692 1156 / 2000 3653 379 753 1164 / 2010 3652 436 792 1072. Columns: start, days, summer days (high 25
//  or more), frost days (low below 0), wet days (1.0 mm or more).
// Lesson family: when a block is copied, the copies drift; write one function with parameters and call it, so a fix is
// made once (refactor repeated code into a function).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("goettingen_daily.csv", encoding="utf-8") as f:',
  '    days = [row for row in csv.DictReader(f) if "2010" <= row["date"][:4] <= "2019"]',
  '',
  'summer = 0',
  'for day in days:',
  '    if day["high"] != "-999" and float(day["high"]) >= 25:',
  '        summer += 1',
  '',
  'frost = 0',
  'for day in days:',
  '    if day["low"] != "-999" and float(day["low"]) < 0:',
  '        frost += 1',
  '',
  'wet = 0',
  'for day in days:',
  '    if day["low"] != "-999" and float(day["low"]) >= 1.0:',
  '        wet += 1',
  '',
  'print("2010s days:", len(days), " summer:", summer, " frost:", frost, " wet:", wet)'
].join('\n');

const V2 = [
  'def count(days, column, rule):',
  '    total = 0',
  '    for day in days:',
  '        if day[column] != "-999" and rule(float(day[column])):',
  '            total += 1',
  '    return total',
  '',
  'with open("goettingen_daily.csv", encoding="utf-8") as f:',
  '    everything = list(csv.DictReader(f))',
  '',
  'for start in range(1950, 2020, 10):',
  '    decade = [d for d in everything if start <= int(d["date"][:4]) < start + 10]',
  '    print(start, len(decade),',
  '          count(decade, "high", lambda t: t >= 25),',
  '          count(decade, "low", lambda t: t < 0),',
  '          count(decade, "rain_mm", lambda r: r >= 1.0))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Göttingen: online Python' },
  slug: 'online-python-classes-goettingen-germany',
  code: 'pgo',
  accent: '#623D2A',
  accentRationale: 'Online Python in Göttingen: a walnut brown #623D2A for the timber-framed houses of the old town and the old university library; contrast 7.68 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-lower-saxony', name: 'Lower Saxony' }],
  routeLabel: 'Online Python classes in Göttingen',
  title: 'Online Python Classes in Göttingen: Live and in English',
  description: 'Online Python classes in Göttingen, live in English for ages 10 to adult: what live online means, what to learn first, Informatik in Lower Saxony, a weather project.',
  ogDescription: 'Live online Python lessons in English for Göttingen learners, with a project on seventy years of the city\'s own weather station in which a copied block of code gives a believable wrong answer.',
  twitterDescription: 'Live online Python for Göttingen, in English, with a project on Göttingen weather since 1950.',
  pageName: 'Online Python Classes in Göttingen',
  webPageDescription: 'A guide for Göttingen pupils, students, parents and adults to live online Python classes in English: how live lessons differ from recorded courses, the order in which to learn Python, where Python meets Informatik in Lower Saxony, and an original project on the Deutscher Wetterdienst station Göttingen.',
  courseDescription: 'Live online Python classes in English for Göttingen learners from about age 10 to adult, with shared code on screen and a regular mentor, in a class of fifteen to twenty or privately.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Göttingen, Python',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#live', label: 'Live?' },
    { href: '#decades', label: 'Weather' },
    { href: '#first', label: 'First steps' },
    { href: '#uhr', label: 'Times' }
  ],
  eyebrow: 'Göttingen &middot; Python &middot; Taught live online',
  h1: 'Online Python classes in Göttingen',
  lede: 'Göttingen has kept a weather record since the nineteenth century, and that record makes a fine Python teacher. On this page: what "live online" means in our Python classes, the order in which a beginner should learn the language, how it relates to Informatik at schools in Lower Saxony, and a project on seventy years of Göttingen weather in which copying three lines of code produces a wrong number that nobody would question.',
  secondaryCta: { href: '#decades', label: 'Open the weather project' },
  wa: 'Hello Modern Age Coders, I am in Göttingen and would like to join live online Python classes in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ learners worldwide &middot; real Python, typed by you',
  spec: [
    ['How', 'Live video and shared code'],
    ['What', 'Python 3, from first line to projects'],
    ['Who', 'From about 10 to adult'],
    ['Size', '15 to 20, or one to one'],
    ['Rhythm', 'Two live hours a week'],
    ['First step', 'A free trial lesson']
  ],
  capsuleQ: 'Briefly',
  capsule: 'Online Python classes for Göttingen at Modern Age Coders are live lessons over video, taught in English: the mentor and the learner see the same code, the learner types and runs it, and the mentor explains and corrects in real time. Pupils from about 10, students and adults move along one Python path at their own speed, and the mentor tunes the lesson to how fast they work and how they speak, whether they share it with fifteen to twenty others or have it alone.',

  picks: {
    eyebrow: 'Python courses',
    h2: 'Which online Python course is right for a Göttingen learner?',
    lede: 'One for pupils who like maths, one for teenagers, one for adults who want Python for data.',
    items: [
      { course: 'maths-through-coding', code: 'PGO / 01', title: 'Maths through Coding', note: 'Pupils of about 10 to 15. School maths explored in Python: patterns, counting, averages and small simulations.' },
      { course: 'python-complete-masterclass-teens', code: 'PGO / 02', title: 'Python for Teens', note: 'Ages 13 to 18. The full language from variables to functions and files, with projects on real data.' },
      { course: 'data-analysis-mastery-course-college', code: 'PGO / 03', title: 'Data Analysis', note: 'Students and adults. Python for reading, checking and summarising data, the skills the weather project uses.' }
    ]
  },

  sections: [
    {
      id: 'live',
      eyebrow: 'Live, not recorded',
      h2: 'Is an online Python class really live?',
      lede: 'Ours are. Every lesson is a real-time video call with a mentor, and the learner\'s own code is on the shared screen for most of it.',
      body: [
        { kind: 'table', numCols: [], caption: 'A live online class compared with a recorded course (our summary)', head: ['', 'Our live online class', 'A typical recorded course'], rows: [
          ['Who explains', 'A mentor, in real time', 'A video, the same for everyone'],
          ['When you are stuck', 'You ask, and get an answer in seconds', 'You search, or wait for a forum reply'],
          ['Who types', 'You, while the mentor watches', 'You, alone, after watching'],
          ['Pace', 'Set by the mentor for you or your group', 'Set by you, which is easy to let slip'],
          ['Errors', 'Read together, line by line', 'Often the point where learners stop']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What a learner needs',
          left: [
            'A laptop or desktop computer, a browser, headphones and an internet connection good enough for a video call. In the first lesson the mentor helps install Python and a free editor.',
            'Nothing else. There is no software to buy and no textbook to order.'
          ],
          rightH3: 'Language of teaching',
          right: [
            'All lessons are in English, taught by mentors based in India who adjust to each learner\'s accent and speed.',
            'For a Göttingen learner that is rarely a hurdle: Python\'s keywords are English, and most of what is said in class is about code everyone can see.'
          ] }
      ]
    },
    {
      id: 'decades',
      tint: 'tint',
      eyebrow: 'A Göttingen data project',
      h2: 'What can seventy years of Göttingen weather teach about Python functions?',
      lede: 'That copied code drifts, and that a function stops it. The Deutscher Wetterdienst publishes every daily reading of its Göttingen station, open data under CC BY 4.0, and the years 1950 to 2019 have no missing highs, lows or rain values at all.',
      body: [
        { kind: 'two',
          leftH3: 'The record',
          left: [
            'Station 01691 is simply called Göttingen. Its daily file starts on 1 January 1858 and ends on 31 December 2025, 59,690 days in all. We downloaded it on 3 November 2026 and keep four columns for class in goettingen_daily.csv: the date, the day\'s highest and lowest temperature, and the rain in millimetres.',
            'The early decades have many gaps, so we work with 1950 to 2019, seven complete decades.'
          ],
          rightH3: 'Three questions',
          right: [
            'How many summer days, with a high of 25 degrees or more? How many frost days, with a low below 0? How many wet days, with 1 mm of rain or more? We ask them first for the 2010s.',
            'A beginner usually writes the first count, then copies it twice and edits the copies. That is what Version 1 does, with one small slip in the third copy, the kind every programmer has made.'
          ] },
        { kind: 'code', label: 'Version 1: copy, paste, edit', lang: 'Python', code: V1, note: 'It prints: <code>2010s days: 3652  summer: 436  frost: 792  wet: 2647</code>.' },
        { kind: 'p', mt: true, html: 'Does 2,647 wet days in ten years sound right? It is about 72% of all days. Many people would accept it without a second look. But look at the third block: it still reads the column <code>"low"</code>, copied from the frost block, and only the rule was changed. It has counted nights that stayed above 1 degree, not rainy days. No error message, just a believable wrong number.' },
        { kind: 'p', html: 'The fix is not to be more careful with copying. It is to stop copying. The Python tutorial puts it plainly: "The keyword def introduces a function definition." Version 2 writes the counting once, as a function that takes the days, the column and the rule, and calls it three times for every decade. The rule is passed as a small anonymous function; in the tutorial\'s words, "Small anonymous functions can be created with the lambda keyword."' },
        { kind: 'code', label: 'Version 2: one function, called for every decade', lang: 'Python', code: V2, note: 'Run after Version 1, it prints one line per decade (start year, days, summer days, frost days, wet days): <code>1950 3652 265 926 1148</code>, <code>1960 3653 269 842 1229</code>, <code>1970 3652 306 673 1150</code>, <code>1980 3653 333 764 1243</code>, <code>1990 3652 376 692 1156</code>, <code>2000 3653 379 753 1164</code>, <code>2010 3652 436 792 1072</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Göttingen station by decade, 1950 to 2019 (our counts)', head: ['Decade', 'Summer days (25 degrees or more)', 'Frost days (below 0)', 'Wet days (1 mm or more)'], rows: [
          ['1950s', '265', '926', '1,148'],
          ['1960s', '269', '842', '1,229'],
          ['1970s', '306', '673', '1,150'],
          ['1980s', '333', '764', '1,243'],
          ['1990s', '376', '692', '1,156'],
          ['2000s', '379', '753', '1,164'],
          ['2010s', '436', '792', '1,072']
        ] },
        { kind: 'source', html: 'Counts are ours, from the DWD Climate Data Center daily file for station 01691 Göttingen (CC BY 4.0), fetched on 3 November 2026. The station metadata lists new positions on 15 December 1967, 12 August 1978, 10 November 1993 and 24 August 2007, so decades are not measured at exactly the same spot.' },
        { kind: 'p', mt: true, html: 'The real 2010s figure is 1,072 wet days, not 2,647. And with the function in place, the whole seventy-year table costs one loop. Any later fix, such as changing wet days to 5 mm or more, is made in one line and applies to every decade at once. That is why functions matter more than any other idea in the first months of Python.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Pupils, about 10 to 13.</strong> Before running Version 1, read the third block aloud and find the slip. Then run it and see whether you were right.',
          '<strong>Teenagers.</strong> Add a fourth question, days of 30 degrees or more, with one line using <code>count</code>. Which decade had the most?',
          '<strong>Adults and students.</strong> Rewrite <code>count</code> so it returns a share of days instead of a number, and explain why that is fairer for decades with 3,652 and 3,653 days.'
        ] }
      ]
    },
    {
      id: 'first',
      eyebrow: 'First steps in Python',
      h2: 'What should a beginner learn first in Python?',
      lede: 'Our order, which every learner follows at their own speed. The weather project sits at step 5.',
      body: [
        { kind: 'ol', items: [
          '<strong>Printing and variables.</strong> Make the computer say and remember things.',
          '<strong>Decisions.</strong> if, elif and else, with conditions such as "25 degrees or more".',
          '<strong>Loops.</strong> for and while, and counting inside a loop.',
          '<strong>Lists and dictionaries.</strong> Many values under one name.',
          '<strong>Functions.</strong> Write a piece of code once, give it parameters, call it many times.',
          '<strong>Files.</strong> Read a CSV file and check what is missing before trusting it.',
          '<strong>Projects.</strong> A real question, real data and an answer you can explain.'
        ] },
        { kind: 'p', mt: true, html: 'Most self-taught beginners skip step 5 because programs still work without it, for a while. Then the copies drift, as Version 1 showed. In our classes functions come early and are used in every project from then on.' },
        { kind: 'p', html: 'How long does it take? As our own rough guide, teenagers and adults with two lessons a week usually reach step 5 within two to three months and step 7 within six; younger pupils take longer. That is a planning figure from our teaching, not a promise.' }
      ]
    },
    {
      id: 'niedersachsen',
      eyebrow: 'Schools in Lower Saxony',
      h2: 'How does Python fit with Informatik at schools in Göttingen?',
      lede: 'Every pupil in Lower Saxony now has Informatik in the last two years of Sekundarstufe I. Earlier, it depends on the school.',
      body: [
        { kind: 'two',
          leftH3: 'What school provides',
          left: [
            'The Gesellschaft für Informatik reports that since the 2024/25 school year every general school in Lower Saxony teaches Informatik as a required subject in Klasse 9 and 10. Haupt-, Real- and Oberschulen may add a two-hour elective from Klasse 6.',
            'Later on, few keep going: the same Monitor puts Lower Saxony among the three Länder where only about every twelfth Oberstufe pupil chooses Informatik.'
          ],
          rightH3: 'What our classes add',
          right: [
            'Learners who already write functions and read files arrive at grade 9 Informatik with time to think about ideas instead of syntax.',
            'Our lessons run beside school and never replace it; marks come from the school course alone, and we promise none.'
          ] },
        { kind: 'source', html: 'From the GI\'s Informatik-Monitor for 2026/27 (the Lower Saxony page and the Germany-wide summary), consulted 2 November 2026.' }
      ]
    },
    {
      id: 'uhr',
      eyebrow: 'Times',
      h2: 'What time are online Python lessons in Göttingen?',
      lede: 'Late afternoon in Göttingen is evening in India, and weekend afternoons work well too. Lessons continue through Lower Saxony\'s school holidays unless you pause them.',
      body: [
        { kind: 'table', numCols: [], caption: 'Göttingen start times as examples, with India\'s clock', head: ['Göttingen', 'India in winter (to 28 March 2027)', 'India in summer (from 28 March 2027)'], rows: [
          ['15:20', '19:50', '18:50'],
          ['17:40', '22:10', '21:10'],
          ['Saturday 13:30', '18:00', '17:00'],
          ['Sunday 14:00', '18:30', '17:30']
        ] },
        { kind: 'source', html: 'Germany switches between UTC+1 and UTC+2 under the Einheitenzeitgesetz. The clocks went back on 25 October 2026 and go forward on 28 March 2027; India stays at UTC+5:30, 4 h 30 ahead in winter and 3 h 30 in summer. No batch is fixed to these times.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Göttingen school holidays in 2026/27', head: ['Holiday', 'First day', 'Last day'], rows: [
          ['Autumn', '12 October 2026', '24 October 2026'],
          ['Christmas', '23 December 2026', '9 January 2027'],
          ['Winter', '1 February 2027', '2 February 2027'],
          ['Easter', '22 March 2027', '3 April 2027'],
          ['Summer', '8 July 2027', '18 August 2027']
        ] },
        { kind: 'source', html: 'Taken from the Kultusministerkonferenz overview of holidays for 2026/2027 (dated 9 October 2025), line for Niedersachsen, which also marks 7 May and 18 May 2027 as free days.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Checkpoints',
    h2: 'How do you know your Python is getting stronger?',
    lede: 'Our checkpoints. Each one is a habit, not a topic.',
    table: { caption: 'Python habits, in the order we build them (ours)', head: ['Habit', 'What it looks like'], rows: [
      ['Predict', 'Says what a program will print before running it'],
      ['Read errors', 'Reads a traceback from the bottom and finds the line'],
      ['No copies', 'Turns repeated code into a function'],
      ['Check data', 'Counts missing values before computing anything'],
      ['Explain', 'Describes a result and its limits in plain words']
    ] },
    left: { h3: 'For learners', ps: [
      'If you are about to paste the same block a third time, stop and write a function.',
      'When a number looks reasonable, check it anyway. Reasonable is not the same as right.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your teenager to show you a function they wrote and the three places it is used.',
      'A short note each month says what was built, what was hard and what is next.'
    ] }
  },

  catalogue: {
    eyebrow: 'Next courses',
    h2: 'Nine more courses for Göttingen Python learners',
    lede: 'For pupils, teenagers and adults. Taught live, in English, by a regular mentor.',
    bands: [
      { num: 'I', h3: 'Pupils', sub: 'About 9 to 13', courses: [
        { code: 'PGO / PUPIL / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first Python course for younger pupils.' },
        { code: 'PGO / PUPIL / 02', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Alongside school Informatik, grades 5 to 10.' },
        { code: 'PGO / PUPIL / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics competitions', blurb: 'Contest-style problems we write ourselves.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: '13 to 18', courses: [
        { code: 'PGO / TEEN / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for teens', blurb: 'Faster programs and why they are faster.' },
        { code: 'PGO / TEEN / 02', slug: 'informatik-abitur-course-java-python', title: 'Informatik Oberstufe', blurb: 'Java and Python for the Abitur years.' },
        { code: 'PGO / TEEN / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Keep every version of your code.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Study and work', courses: [
        { code: 'PGO / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'The complete language for adult beginners.' },
        { code: 'PGO / ADULT / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data analytics', blurb: 'The numbers behind every summary.' },
        { code: 'PGO / ADULT / 03', slug: 'mysql-database-complete-masterclass-college', title: 'SQL databases', blurb: 'Store and query data properly.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Practicalities',
    h2: 'How are online Python lessons set up for Göttingen?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday afternoons', l: 'After school or lectures.' },
      { time: 'Weekday evenings', l: 'Until about 18:00 Göttingen time.' },
      { time: 'Weekends', l: 'Saturday or Sunday afternoons.' }
    ],
    cells: [
      { h3: 'Shared screen', p: 'Mentor and learner see the same code.' },
      { h3: 'Learner at the keys', p: 'You type; the mentor guides.' },
      { h3: 'Same mentor', p: 'One person who follows your progress.' },
      { h3: 'Real data', p: 'German open data from the first months.' },
      { h3: 'Two hours a week', p: 'Two live lessons of an hour.' },
      { h3: 'Your choice of size', p: 'A class of 15 to 20, or one to one.' }
    ]
  },

  projectsH2: 'A few things our students have made',
  projectsLede: 'Projects from our classes in other countries. The <a class="ag-inline-link" href="/student-labs">student labs</a> show more of them.',
  reviewsLede: 'What learners and parents wrote in their Google reviews, unchanged.',

  fees: {
    h2: 'What does an online Python class cost in Göttingen?',
    lede: 'Eight live lessons make up each monthly fee. Our euro figures come from the European Central Bank reference rate; your card is charged in US dollars and your bank does the exchange, so the euro amount it books can be a little different.',
    free: ['A free trial lesson', 'Your first Python program, live', 'No payment details needed'],
    group: ['A class of 15 to 20 of similar age', 'One mentor throughout', 'Two lessons each week', 'Pay by the month'],
    one: ['A private mentor', 'The plan built around you', 'Times you agree together']
  },

  faq: {
    eyebrow: 'Göttingen questions',
    h2: 'Online Python classes in Göttingen: frequently asked',
    items: [
      { q: 'Are the classes in German?', a: 'No. All lessons are live and taught in English only, by mentors based in India who adapt to your pace and accent. We do not run German-language classes.' },
      { q: 'Are the lessons live or recorded?', a: 'Live. Every lesson is a real-time video call with a mentor, with your code on the shared screen. There are no recorded lessons to work through alone.' },
      { q: 'From what age can someone start?', a: 'From about 10 for this Python path, once typing is comfortable; younger children usually start with Scratch. Adults of any age are welcome.' },
      { q: 'What should I learn first in Python?', a: 'Printing, variables, decisions and loops, then lists and dictionaries, then functions, then files. Functions come early in our classes because copied code causes hidden mistakes.' },
      { q: 'When are lessons in Göttingen time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Mentors in India teach in their evening while it is afternoon in Göttingen.' },
      { q: 'Is Informatik compulsory at schools in Lower Saxony?', a: 'For Klasse 9 and 10, yes: the Gesellschaft für Informatik records it as required at every general school since 2024/25, with optional electives from Klasse 6 at some school types.' },
      { q: 'What is the Göttingen weather project?', a: 'A Python project we wrote on the DWD station Göttingen. Counting summer, frost and wet days by copying code gives 2,647 wet days in the 2010s, a believable but wrong number; one function gives the right answer, 1,072, and a seventy-year table.' },
      { q: 'Do I need to install anything?', a: 'Python and a free code editor, which the mentor helps you install in the first lesson. You also need a browser for the video call and ideally headphones.' },
      { q: 'How large are the groups?', a: 'Between 15 and 20 people of roughly the same age share a group. Private lessons with your own mentor are the other option.' },
      { q: 'How are fees paid?', a: 'Each month. The page converts fees into euro with the ECB reference rate, while the charge runs in US dollars for your bank to change. Your trial costs nothing.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More pages',
    h2: 'Related pages',
    lede: 'More for Python learners in Göttingen.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Everything we offer in Germany.' },
      { href: '/coding-classes-in-lower-saxony', label: 'Coding classes in Lower Saxony', p: 'Rules and dates for the whole Land.' },
      { href: '/informatik-abitur-niedersachsen', label: 'Informatik-Abitur in Niedersachsen', p: 'The exam at the end of school.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Where Python can lead.' },
      { href: '/student-labs', label: 'Student labs', p: 'What our students build.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method in detail.' }
    ]
  },

  start: {
    h2: 'Try a free online Python lesson from Göttingen',
    lede: 'The trial is a live lesson: share your screen, write and run a short program with the mentor, and talk about what you want to do with Python. You then get a recommendation for a course and a time.',
    readFirst: 'For more background, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or see <a class="ag-inline-link" href="/courses">the course catalogue</a>.',
    note: 'Lessons run live online in English with mentors in India. WhatsApp is the fastest way to reach us.',
    formNote: 'Free, without obligation.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-lower-saxony', label: 'Lower Saxony' },
        { href: '/informatik-abitur-niedersachsen', label: 'Informatik-Abitur Niedersachsen' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' }
      ] }
    ],
    bottomRight: 'Copied code drifts; functions do not'
  },

  personalityCss: `
.ag-root.ag-pgo .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-pgo .ag-capsule { border-left-width: 5px; }
.ag-root.ag-pgo .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-pgo .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-pgo .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Niedersachsen and national pages); KMK Ferien 2026/2027, Niedersachsen row; Python tutorial, More Control Flow Tools; Einheitenzeitgesetz; read 2 to 3 November 2026. Deutscher Wetterdienst, station 01691 Göttingen, CC BY 4.0.',
    localProject: 'Seventy years of Göttingen weather: an original Python project on the DWD station Göttingen in which three copy-pasted counts for the 2010s give a plausible wrong 2,647 wet days (the third copy still reads the low temperature); one count function with a lambda rule gives 1,072 and a 1950 to 2019 table of summer, frost and wet days. Lesson family: refactor repeated code into a function.',
    requiredMentions: ['goettingen_daily.csv', '2010s days: 3652  summer: 436  frost: 792  wet: 2647', '2010 3652 436 792 1072', '1950 3652 265 926 1148', 'The keyword def introduces a function definition.', 'Small anonymous functions can be created with the lambda keyword.', 'station 01691 Göttingen', 'Copied code drifts; functions do not'],
    sources: [
      { claim: 'Göttingen station daily data and metadata, CC BY 4.0.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/' },
      { claim: 'def and lambda, quoted from the Python tutorial.', url: 'https://docs.python.org/3/tutorial/controlflow.html' },
      { claim: 'Lower Saxony compulsory Informatik grades 9 and 10; electives from grade 6.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/niedersachsen' },
      { claim: 'One in twelve Oberstufe pupils take Informatik.', url: 'https://informatik-monitor.de/' },
      { claim: 'Lower Saxony holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' }
    ],
    rejectedClaims: [
      'Any climate conclusion from the decade table: the station moved four times since 1967, so the page draws none.',
      'Naming the university, the international school partner or any school as a source of learners: refused.',
      'German-language teaching, mark promises, or a link with the city, the Land or the DWD: none.'
    ]
  }
};
