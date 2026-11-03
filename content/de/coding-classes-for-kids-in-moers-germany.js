'use strict';
// Coding classes for kids in Moers (ag- city page, Germany cluster P6 row DE202, tier-2 shape
// coding-classes-for-kids-in-<city>-germany: ages 6 to 12). Owner 2026-11-02: classes are live, in English only, with
// mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: November in Moers means lantern walks; a project on the city's own list of St. Martin processions in which
// children work out the weekday of each date with nothing but counting and a remainder, the way a calendar wraps round;
// NRW gives every child Informatik in grades 5 and 6, so 6 to 10 is the open window; contests; times.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 November 2026, unless stated):
//  - KMK: Grundschule grades 1 to 4 (fact 1); no leaving exam at the end of Grundschule (28); Sekundarschule is NRW's
//    multi-track school (20).
//  - GI Informatik-Monitor 2026/27, NRW page: "An allen allgemeinbildenden Schularten wird das Pflichtfach Informatik in
//    den Jahrgangsstufen 5 und 6 unterrichtet." (fact 80).
//  - KMK FER2026_27.pdf, NRW row (fact 275).
//  - bwinf.de: Biber 9 to 20 November 2026 (133), grades 3 to 13 (130), 9 tasks in 30 minutes at primary level, 12 in 35
//    for grades 5 and 6 (132); 20th Biber (134). Känguru 2027 on 8 April 2027 (183).
//  - Destatis GV-ISys: Moers, Stadt 101,503 on 31.12.2024 (facts-geo/places.tsv).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Moers, "St. Martinszüge (Stadt Moers)", offenesdatenportal.de dataset st-martinszuge-in-moers, notes
//    "Der Datensatz enthält Informationen zu den Sankt Martinszügen in Moers. Die Aktualisierung erfolgt jährlich.",
//    licence on the dataset page "Datenlizenz Deutschland – Zero – Version 2.0". One resource, martinszuge-2019.csv
//    (created 2019-11-07), downloaded 3 November 2026, ISO-8859-1, 42 rows, columns Datum;Beginn;Einrichtung;Anschrift.
//    We converted it to UTF-8 as martinszuege_2019.csv. We never print the Einrichtung (schools and nurseries) column.
//    One Beginn value is written "17.45" rather than "17:45". Raw copies in src-pages/<slug>/.
// Our own calculations (scratchpad de/w/T7/run/moers/v1.py + v2.py, python3 -I): 42 walks on 12 evenings, 4 to 18
// November 2019; per date 04.11 2, 05.11 4, 06.11 6, 07.11 5, 08.11 6, 09.11 2, 11.11 4, 12.11 3, 13.11 3, 14.11 3,
// 15.11 2, 18.11 2; per weekday Monday 8, Tuesday 7, Wednesday 9, Thursday 8, Friday 8, Saturday 2, Sunday 0.
// Python datetime check: 4 November 2019 Monday, 11 November 2019 Monday, 11 November 2026 Wednesday.
// Lesson family: days of the week go round in a circle; count the days and take the remainder by 7.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'walks = {}',
  'with open("martinszuege_2019.csv", encoding="utf-8") as src:',
  '    for row in csv.DictReader(src, delimiter=";"):',
  '        walks[row["Datum"]] = walks.get(row["Datum"], 0) + 1',
  '',
  'print("Lantern walks:", sum(walks.values()), "on", len(walks), "evenings")',
  'for day in sorted(walks, key=lambda d: d[3:5] + d[:2]):',
  '    print(day, walks[day])'
].join('\n');

const V2 = [
  'NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]',
  '',
  'def weekday(date):                 # date like "13.11.2019", only for November 2019',
  '    day = int(date[:2])',
  '    return NAMES[(day - 4) % 7]    # 4 November 2019 was a Monday',
  '',
  'per_weekday = {name: 0 for name in NAMES}',
  'for day, n in walks.items():',
  '    per_weekday[weekday(day)] += n',
  'for name in NAMES:',
  '    print(name, per_weekday[name])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Moers: coding for kids' },
  slug: 'coding-classes-for-kids-in-moers-germany',
  code: 'cmo',
  accent: '#9E480F',
  accentRationale: 'Coding for kids in Moers: a lantern orange-brown #9E480F for the St. Martin processions in the project, distinct from the Berlin brick and the NRW teal; contrast 5.03 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding classes for kids in Moers',
  title: 'Coding Classes for Kids in Moers: Live Online, in English',
  description: 'Coding classes for kids in Moers aged 6 to 12: live online in English, what NRW schools teach, free contests and a St. Martin lantern walk data project.',
  ogDescription: 'Live coding lessons in English for Moers children of 6 to 12, from Scratch to Python, with an original project on the city\'s list of St. Martin lantern walks that turns a calendar into a circle.',
  twitterDescription: 'Coding for Moers children, live in English, with a St. Martin lantern walk project.',
  pageName: 'Coding Classes for Kids in Moers',
  webPageDescription: 'A guide for Moers parents of children aged 6 to 12: when NRW schools start Informatik, how live coding classes in English work for young children, the Informatik-Biber and Känguru, and an original weekday project on the Stadt Moers list of St. Martin processions.',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 in Moers: Scratch first, then typed Python and small projects with real local data, in a group of fifteen to twenty or one to one, with a regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Moers',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#lanterns', label: 'Lanterns' },
    { href: '#school', label: 'School' },
    { href: '#english', label: 'English' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Moers &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Moers',
  lede: 'Every November, Moers children walk through the streets with paper lanterns for St. Martin, and the city publishes the list of processions as open data. That list hides a neat puzzle: given only dates, which weekday is each walk on? A child can solve it with counting and one clever idea, the same idea a computer uses. Parents of six to twelve year olds will find the lantern project below, then the point at which NRW schools bring in Informatik, what our English-language lessons are like for a small child, and two contests that cost nothing.',
  secondaryCta: { href: '#lanterns', label: 'See the lantern project' },
  wa: 'Hello Modern Age Coders, my child lives in Moers and would like to learn coding in English. Can we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students worldwide &middot; patient mentors, clear English',
  spec: [
    ['Ages', '6 to 12, by age group'],
    ['First steps', 'Scratch blocks'],
    ['From about 9', 'Typed Python'],
    ['Moers times', 'After school and weekend mornings'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'For Moers children between 6 and 12, Modern Age Coders gives coding lessons that happen live over video and only in English. Six to eight year olds snap Scratch blocks into stories and games; nine to twelve year olds type Python and play with real data from their own town. Their mentor teaches from India and slows down or speeds up for each child. Parents pick a group of fifteen to twenty or private lessons, weekday afternoons or weekend mornings.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for Moers children',
    lede: 'A year-long course for young beginners, a shorter Scratch course, and typed Python for older children.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CMO / 01', title: 'Coding for Kids', note: 'For the whole 6 to 12 range, taught in age bands. Scratch adventures and games first, later simple apps and a first, gentle look at AI.' },
      { course: 'scratch-programming-complete-course', code: 'CMO / 02', title: 'Scratch Coding for Kids', note: 'A one-term start of roughly fourteen weeks. A child who has never coded finishes with a handful of games they designed.' },
      { course: 'python-ai-kids-masterclass', code: 'CMO / 03', title: 'Python and AI for Kids', note: 'Once a child is about nine. Typed Python from day one, drawing with code, number games and real data like the lantern walks.' }
    ]
  },

  sections: [
    {
      id: 'lanterns',
      tint: 'tint',
      eyebrow: 'A Moers project',
      h2: 'On which weekdays did Moers hold its St. Martin lantern walks?',
      lede: 'The City of Moers publishes its list of St. Martin processions as open data under the Datenlizenz Deutschland Zero 2.0. The file on its portal is the 2019 list: 42 walks, each with a date and a start time. Children use it to discover that the days of the week go round in a circle.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The city\'s open data portal says the list is updated every year; the copy it offers today, which we downloaded on 3 November 2026, is the one for November 2019. Each row has a date, a start time, the organiser and an address.',
            'We only use the dates and times. The organisers are mostly schools and nurseries, and we leave their names out of the project. We saved the file as martinszuege_2019.csv.'
          ],
          rightH3: 'The puzzle',
          right: [
            'The file says "05.11.2019" but never says "Tuesday". Which weekday was busiest for lantern walks? A grown-up would look at a calendar. A child can work it out from one fact and some counting.',
            'The one fact: 4 November 2019 was a Monday. Every 7 days later is also a Monday. So what matters is how many days after the 4th a date is, and what is left over when you take away whole weeks.'
          ] },
        { kind: 'code', label: 'Version 1: count the walks on each date', lang: 'Python', code: V1, note: 'It prints <code>Lantern walks: 42 on 12 evenings</code>, then one line per date from <code>04.11.2019 2</code> to <code>18.11.2019 2</code>; the busiest dates are 6 and 8 November with 6 walks each.' },
        { kind: 'p', mt: true, html: 'Now the clever part. Take the day number, subtract 4, and divide by 7. Throw away the whole weeks and keep only the remainder. A remainder of 0 means Monday, 1 means Tuesday, and so on up to 6 for Sunday. 13 November: 13 minus 4 is 9, and 9 divided by 7 leaves 2, so it was a Wednesday. In Python the remainder is written with the percent sign, %, and the whole rule fits on one line.' },
        { kind: 'code', label: 'Version 2: the weekday from a remainder', lang: 'Python', code: V2, note: 'It prints <code>Monday 8</code>, <code>Tuesday 7</code>, <code>Wednesday 9</code>, <code>Thursday 8</code>, <code>Friday 8</code>, <code>Saturday 2</code> and <code>Sunday 0</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'St. Martin lantern walks in Moers, November 2019, by weekday (our count)', head: ['Weekday', 'Walks'], rows: [
          ['Monday', '8'],
          ['Tuesday', '7'],
          ['Wednesday', '9'],
          ['Thursday', '8'],
          ['Friday', '8'],
          ['Saturday', '2'],
          ['Sunday', '0']
        ] },
        { kind: 'source', html: 'Data: Stadt Moers, St. Martinszüge (Stadt Moers), file martinszuge-2019.csv, offenesdatenportal.de, Datenlizenz Deutschland Zero 2.0, downloaded 3 November 2026. The weekday rule and all counts are ours; we checked the rule against Python\'s own calendar.' },
        { kind: 'p', mt: true, html: 'The walks are spread almost evenly from Monday to Friday, there are two on Saturday 9 November and none at all on a Sunday. Forty of the 42 start between five and six in the evening, when it is dark enough for lanterns to glow. St. Martin\'s Day itself, 11 November, fell on a Monday in 2019 and had four walks. For 2026 our program\'s calendar check gives a Wednesday for 11 November.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Seven children stand in a circle, each named after a day. Count round the circle from Monday: where do you land on the 10th step? On the 17th?',
          '<strong>Ages 8 to 10, Scratch.</strong> Make a list of the seven day names and use the "mod" block to pick the right one for any number of days after a Monday.',
          '<strong>Ages 10 to 12, Python.</strong> Try the two programs, then rewrite the weekday rule so that a date in any month of 2019 works, not just November.',
          '<strong>Going further.</strong> One start time in the file is written 17.45 instead of 17:45. Find it with a program, then work out the most common start time.'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'NRW schools',
      h2: 'When do Moers children start Informatik at school?',
      lede: 'In grade 5, at about ten. North Rhine-Westphalia is one of the Länder where every child gets two years of compulsory Informatik early on.',
      body: [
        { kind: 'two',
          leftH3: 'Before grade 5',
          left: [
            'Primary school in Moers covers four years, grades 1 to 4. Computing has no lesson of its own there, and the four years end without any exam.',
            'Those four years, roughly ages 6 to 10, are the open window. A child who has built games, puzzled over loops and fixed a few bugs arrives at secondary school already comfortable with the way computers think.'
          ],
          rightH3: 'Grades 5 and 6',
          right: [
            'Its 2026/27 Informatik-Monitor lets the Gesellschaft für Informatik state it plainly: Informatik is compulsory in grades 5 and 6 at every type of general school in NRW, the Gymnasium and the Sekundarschule included.',
            'After grade 6 the subject becomes a choice. Many children never take it again, which makes those two years, and what a child brings to them, count for more.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Computing for a Moers child from 6 to 12', head: ['Age, roughly', 'School stage', 'Informatik at school'], rows: [
          ['6 to 10', 'Grundschule, grades 1 to 4', 'No separate subject'],
          ['10 to 12', 'Secondary school, grades 5 and 6', 'Compulsory at every general school'],
          ['12 and up', 'Grade 7 onwards', 'Optional, if a school offers it']
        ] },
        { kind: 'source', html: 'Based on the KMK pages on primary schooling and school types and on the NRW entry in the Informatik-Monitor 2026/27, all checked on 2 November 2026. The age column is only our rough guide.' },
        { kind: 'p', mt: true, html: 'We teach alongside school, never in place of it, and we do not give school marks. For children in grades 5 and 6, the <a class="ag-inline-link" href="/courses/informatik-companion-course-klasse-5-10">Informatik companion course</a> follows the school topics in English. Our <a class="ag-inline-link" href="/coding-classes-in-north-rhine-westphalia">North Rhine-Westphalia page</a> covers the Land in more detail.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Live, in English',
      h2: 'How do live coding classes in English work for a child in Moers?',
      lede: 'They are short, practical and friendly. The child is at the controls; the mentor guides with questions.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English only, kept simple', p: 'Lessons are given in English and nothing else, which we mention before any booking. Because the mentor demonstrates each step and talks in short, clear sentences, a Moers child with a few words of English still keeps up.' },
          { h3: 'A mentor who knows them', p: 'Each child keeps the same mentor, who is based in India and soon learns whether the child likes a challenge, needs time before answering, or prefers to start by changing a finished game.' },
          { h3: 'Short tasks, quick wins', p: 'For the youngest, an hour becomes six or seven bite-sized jobs: draw a lantern, light it up, march it across the street, add a song. Each one ends with something that runs.' }
        ] },
        { kind: 'p', mt: true, html: 'A week holds two sixty-minute lessons, and a few lines go home to parents afterwards. Puzzle-lovers have a free contest coming up: the Informatik-Biber, celebrating its 20th edition, is held in schools between 9 and 20 November 2026, with nine puzzles in half an hour at primary level and twelve in 35 minutes for grades 5 and 6. The maths contest Känguru der Mathematik is on 8 April 2027. Our own English warm-up puzzles are on the <a class="ag-inline-link" href="/informatik-biber-practice-in-english">Biber practice page</a>; neither contest has any tie to us.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are classes in Moers time?',
      lede: 'Most Moers children log in after school or on a Saturday or Sunday morning. India is hours ahead, so for the mentor those lessons land in the late afternoon or evening.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Moers class times on both clocks', head: ['Moers', 'India in winter', 'India from 28 March 2027'], rows: [
          ['15:20', '19:50', '18:50'],
          ['16:10', '20:40', '19:40'],
          ['Saturday 09:15', '13:45', '12:45'],
          ['Sunday 10:45', '15:15', '14:15']
        ] },
        { kind: 'source', html: 'German clocks, set by the Einheitenzeitgesetz, went back to UTC+1 on 25 October 2026 and jump to UTC+2 on 28 March 2027, while Indian clocks sit at UTC+5:30 year round. The rows show the gap, not a timetable.' },
        { kind: 'p', mt: true, html: 'In NRW the 2026/27 breaks, as listed by the Kultusministerkonferenz, are: autumn, which ended on 31 October 2026; Christmas from 23 December into 6 January 2027; Easter from 22 March up to 3 April 2027; a single day on 18 May 2027; and summer from 19 July until the last day of August 2027. Lessons keep going in the breaks for families who like. Children join from every part of Moers and from nearby Neukirchen-Vluyn, Kamp-Lintfort, Rheinberg, Duisburg and Krefeld.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'What a Moers child learns, stage by stage',
    lede: 'Five stages we use to decide a child\'s group and to explain progress at home.',
    table: { caption: 'Children\'s coding stages (ours)', head: ['Stage', 'Often at', 'A child at this stage can'], rows: [
      ['1. First steps', '6 to 7', 'Snap blocks in order and predict what happens'],
      ['2. Repeating', '7 to 9', 'Use a loop rather than the same block five times'],
      ['3. Counting', '8 to 10', 'Count things into a list, one box per item'],
      ['4. Typing', '9 to 11', 'Write a few lines of Python that repeat and decide'],
      ['5. Patterns', '10 to 12', 'Use a remainder to make something go round in a circle']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the lantern project. The remainder trick returns in clocks, calendars, games that wrap round the screen, and school maths.',
      'Reports are about things your child built and could talk through.'
    ] },
    right: { h3: 'For children', ps: [
      'When something repeats every 7, every 12 or every 60, try the remainder.',
      'Check your rule with one answer you already know.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Moers children',
    lede: 'Same format throughout: live, English, one mentor who stays, group or private.',
    bands: [
      { num: 'I', h3: 'Thinking and numbers', sub: 'Ages 5 to 12', courses: [
        { code: 'CMO / THINK / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Young thinkers', blurb: 'Patterns and logic for 6 to 9.' },
        { code: 'CMO / THINK / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense and quick reasoning.' },
        { code: 'CMO / THINK / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Remainders, patterns and more in Python.' }
      ] },
      { num: 'II', h3: 'Play and games', sub: 'Ages 7 to 12', courses: [
        { code: 'CMO / PLAY / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox games', blurb: 'Real games scripted in Luau.' },
        { code: 'CMO / PLAY / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Building and scripting inside the game children love.' },
        { code: 'CMO / PLAY / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Three game tools in one long course.' }
      ] },
      { num: 'III', h3: 'Making', sub: 'Ages 8 to 12', courses: [
        { code: 'CMO / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'Apps for kids', blurb: 'Phone apps built from blocks.' },
        { code: 'CMO / MAKE / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'A stricter second language for keen ten year olds.' },
        { code: 'CMO / MAKE / 03', slug: 'microsoft-office-kids-mastery', title: 'Office skills for kids', blurb: 'Word, PowerPoint and Excel for school.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live classes fit into a Moers family week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday afternoons', l: 'Once Moers schools finish for the day.' },
      { time: 'Weekend mornings', l: 'An unhurried lesson before lunch.' },
      { time: 'One to one', l: 'A time you agree with your child\'s mentor.' }
    ],
    cells: [
      { h3: 'Small steps', p: 'Something works every few minutes.' },
      { h3: 'Child in charge', p: 'The child clicks and types; the mentor asks.' },
      { h3: 'Similar ages', p: 'Younger and older children learn apart.' },
      { h3: 'Short updates', p: 'Parents hear what was built.' },
      { h3: 'Clear English', p: 'Simple words, shown on screen.' },
      { h3: 'Class or private', p: 'Fifteen to twenty children, or one alone.' }
    ]
  },

  projectsH2: 'Projects by older students',
  projectsLede: 'What children who start early can go on to build; more on our <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews from our families and students on Google, unedited.',

  fees: {
    h2: 'Fees for Moers families',
    lede: 'Eight live classes per month, one fee. Here it appears in euro, via the ECB reference rate; you actually pay in US dollars, so after your bank\'s conversion the euro on your statement may not match to the cent.',
    free: ['A free first class', 'A puzzle and a first Scratch program', 'No card needed'],
    group: ['Fifteen to twenty children of similar age', 'The same mentor each week', 'Two classes a week', 'Pay monthly, stop when you wish'],
    one: ['Your child with a mentor of their own', 'Pace and projects for your child', 'Times that suit your family']
  },

  faq: {
    eyebrow: 'Moers parents ask',
    h2: 'Coding classes for kids in Moers: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No, they are always in English, and always live. A child who is only starting English copes well, because the mentor demonstrates on screen, keeps words simple and adjusts to how fast the child works and how they speak.' },
      { q: 'From what age can my child start?', a: 'From 6, with Scratch blocks that need no typing. Children usually move to typed Python at about 9.' },
      { q: 'Is coding taught at Moers schools?', a: 'From grade 5. NRW makes Informatik compulsory in grades 5 and 6 at every general school, according to the Gesellschaft für Informatik. Grundschule has no separate computing subject.' },
      { q: 'Why start before grade 5?', a: 'Because ages 6 to 10 are when puzzles and games feel like play. Children who start then arrive at secondary school already used to breaking problems into steps and fixing their own mistakes.' },
      { q: 'When are classes in Moers time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Moers children mostly pick a weekday afternoon or a Saturday or Sunday morning.' },
      { q: 'What is the Informatik-Biber?', a: 'A free puzzle contest open from grade 3 up to grade 13; no programming knowledge is needed. Schools enter their classes, and this year\'s window is 9 to 20 November 2026, so the class teacher will know whether your child\'s school is in.' },
      { q: 'Where are the teachers based?', a: 'In India. They teach live online, and because India is hours ahead, a Moers afternoon is an Indian evening.' },
      { q: 'How many children are in a group?', a: 'Fifteen to twenty, of similar age. The one-to-one option gives your child a mentor to themselves, twice a week.' },
      { q: 'Which currency do we pay in?', a: 'US dollars. The euro figure we show is only a conversion at the ECB reference rate, so once your bank exchanges the payment the statement may be a few cents away from it. The first lesson costs nothing.' },
      { q: 'What is the lantern walk project?', a: 'Children use the City of Moers list of 42 St. Martin walks from November 2019 and work out each weekday with a remainder: count the days after Monday 4 November and divide by 7. Wednesday had the most walks, nine, and Sunday none.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Moers families.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our national page and city list.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'School rules for the whole Land.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding classes for kids in Germany', p: 'Our page for children across Germany.' },
      { href: '/scratch-classes-for-kids-germany', label: 'Scratch classes', p: 'The usual first step at 6 to 8.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'How a ten year old moves from blocks to text.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class, explained.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the free class your child tackles a little puzzle and builds a first program in Scratch. The mentor watches how your child thinks and how much English they are comfortable with, then suggests a course and group.',
    readFirst: 'Read more first: <a class="ag-inline-link" href="/how-we-teach">how we teach</a> and <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'All classes are live online, in English only, with mentors in India. WhatsApp, in English, is the quickest way to ask.',
    formNote: 'Free, with no card required.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany' },
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch classes' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' }
      ] },
      { h4: 'Nearby', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'North Rhine-Westphalia' },
        { href: '/coding-classes-for-kids-cologne', label: 'Coding for kids in Cologne' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'The week goes round in a circle'
  },

  personalityCss: `
.ag-root.ag-cmo .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-cmo .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-cmo .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-cmo .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-cmo .ag-band-head h3 { letter-spacing: -0.005em; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich and school types; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); KMK Ferienregelung 2026/27; Bundesweite Informatikwettbewerbe (Biber 2026); Känguru der Mathematik 2027; Einheitenzeitgesetz; Destatis GV-ISys. Stadt Moers, St. Martinszüge, Datenlizenz Deutschland Zero 2.0.',
    localProject: 'St. Martin in Moers: an original Python project on the city\'s list of 42 lantern walks in November 2019, counting walks per date and then finding each weekday with a remainder ((day minus 4) mod 7, since 4 November 2019 was a Monday): Monday 8, Tuesday 7, Wednesday 9, Thursday 8, Friday 8, Saturday 2, Sunday 0; with a circle game for 6 to 8 and a Scratch mod block version. Lesson family: the week is a circle; count days and take the remainder by 7.',
    requiredMentions: ['martinszuege_2019.csv', 'Lantern walks: 42 on 12 evenings', 'Wednesday 9', 'Sunday 0', '13 minus 4 is 9', 'written 17.45 instead of 17:45', 'Neukirchen-Vluyn, Kamp-Lintfort, Rheinberg, Duisburg and Krefeld', 'The week goes round in a circle'],
    sources: [
      { claim: 'Stadt Moers St. Martin processions dataset and its DL-DE Zero 2.0 licence.', url: 'https://www.offenesdatenportal.de/dataset/st-martinszuge-in-moers' },
      { claim: 'NRW compulsory Informatik in grades 5 and 6.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'NRW school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Informatik-Biber 2026 dates and format.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Känguru der Mathematik 2027 date.', url: 'https://www.mathe-kaenguru.de/' }
    ],
    rejectedClaims: [
      'Naming the schools and nurseries that organised walks: refused; only dates and times are used.',
      'Any claim about 2026 lantern walks: the open file is the 2019 list, and the page says so.',
      'Any affiliation with the City of Moers, BWINF or the Känguru organisers: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
