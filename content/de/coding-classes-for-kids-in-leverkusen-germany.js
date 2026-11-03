'use strict';
// Coding classes for kids in Leverkusen (ag- city page, Germany cluster P6 row DE172, tier-2 slug shape
// coding-classes-for-kids: ages 6 to 12). Owner 2026-11-02: classes are live, in English only, with mentors who match
// the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: "is my child ready?". Parents in Leverkusen know Informatik arrives in grade 5 under the NRW rule; the question
// they ask is whether a six to nine year old is ready earlier and how to tell. The project asks how often it rains in
// Leverkusen and shows a child that two weeks of looking can give 64 percent or 0 percent when the year's answer is 34.
// Sources (read raw; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-for-kids-in-leverkusen-germany/):
//  - GI Informatik-Monitor 2026/27, NRW page: compulsory Informatik in grades 5 and 6 at all general school types
//    (FACTS 80). KMK primary: Grundschule grades 1 to 4 outside Berlin and Brandenburg (FACTS 1).
//  - KMK Ferienkalender 2026/27: NRW line (FACTS 275).
//  - Mathematik-Olympiade: about 200,000 pupils a year, grades 3 to 13 (162); offered to primary schools since 2005 (164);
//    66th MO Regionalrunde 11 November 2026 (165); Landesrunde 26 to 28 February 2027 (166).
//  - bwinf.de: Biber 9 to 20 November 2026 (133), grades 3 to 13 (130), over 580,000 in 2025 (137).
//  - Destatis GV-ISys 31.12.2024: Leverkusen 168,581; Nordrhein-Westfalen 18,034,454 (places.tsv).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily precipitation (more_precip), station 2970
//    Leverkusen-Pattscheid (140 m, 51.0933 N 7.0706 E since 10 May 1973), file
//    tageswerte_RR_02970_19310101_20251231_hist.zip (139,403 bytes), downloaded 3 November 2026, licence CC BY 4.0
//    (Terms_of_use.txt). We use the 365 days of 2025. No Stadt Leverkusen dataset with a file and an open licence was
//    found on GovData (only boundary shapefiles with an INSPIRE access note and no licence).
// Our own calculations (scratchpad de/w/T4/bin lev_prep.py, lev_v1.py, lev_v2.py; python3 -I): "rainy" = at least 1.0 mm
// (our definition). All 365 days: 34 % rainy (123 days); first two weeks of January 64 %; first two weeks of March (1 to
// 14 March) 0 %; one day a week, 53 days, 40 %; random.seed(2025): 10 days [40, 30, 30, 40, 30], 30 days [27, 53, 33, 20,
// 20], 100 days [32, 45, 31, 36, 35]. Total 2025 rain 830.8 mm; wettest day 8 September 2025, 35.6 mm.
// Lesson family: a small or bunched sample can fool you; bigger samples spread across the whole period wobble less.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  "import csv",
  "",
  "days = []",
  "with open(\"pattscheid_2025.csv\", encoding=\"utf-8\") as sheet:",
  "    for row in csv.DictReader(sheet):",
  "        days.append((row[\"date\"], float(row[\"rain_mm\"])))",
  "",
  "def rainy_share(sample):",
  "    rainy = [d for d in sample if d[1] >= 1.0]",
  "    return round(100 * len(rainy) / len(sample))",
  "",
  "print(\"All\", len(days), \"days:\", rainy_share(days), \"% rainy\")",
  "print(\"First two weeks of January:\", rainy_share(days[:14]), \"% rainy\")",
  "print(\"First two weeks of March:\", rainy_share(days[59:73]), \"% rainy\")"
].join('\n');

const V2 = [
  "import random",
  "",
  "every_week = days[::7]",
  "print(\"One day a week,\", len(every_week), \"days:\", rainy_share(every_week), \"% rainy\")",
  "",
  "random.seed(2025)",
  "for size in [10, 30, 100]:",
  "    tries = [rainy_share(random.sample(days, size)) for _ in range(5)]",
  "    print(size, \"random days, five tries:\", tries)"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Leverkusen: coding for kids' },
  slug: 'coding-classes-for-kids-in-leverkusen-germany',
  code: 'lev',
  accent: '#01454A',
  accentRationale: 'Coding classes for kids in Leverkusen: a deep teal #01454A for the Wupper and Dhünn where they meet the Rhine at the city; contrast 8.73 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding classes for kids in Leverkusen',
  title: 'Coding Classes for Kids in Leverkusen, Live Online in English',
  description: 'Coding classes for kids in Leverkusen aged 6 to 12: how to tell if your child is ready, live classes in English, NRW Informatik from grade 5, and a rain project.',
  ogDescription: 'Live online coding for Leverkusen children aged 6 to 12, taught in English at each child\'s pace: five signs a child is ready, what NRW schools teach from grade 5, contest dates, and a rain project on a real Leverkusen weather station.',
  twitterDescription: 'Coding for Leverkusen kids, live in English, with a project on real Leverkusen rain data.',
  pageName: 'Coding Classes for Kids in Leverkusen',
  webPageDescription: 'A guide for Leverkusen parents of children aged 6 to 12 to live online coding classes in English: signs of readiness, NRW Informatik facts from the Gesellschaft für Informatik, maths and computing contest dates, and an original sampling project on Deutscher Wetterdienst rain data from Leverkusen-Pattscheid.',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 in Leverkusen: Scratch first, then typed Python, puzzles and small data projects, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Leverkusen',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#ready', label: 'Ready?' },
    { href: '#school', label: 'School' },
    { href: '#rain', label: 'Rain' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Leverkusen &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Leverkusen',
  lede: 'Children in Leverkusen meet Informatik at school in grade 5, at about ten. Many parents wonder whether their six, seven or eight year old is ready sooner, and how they would know. This page gives five signs to look for, explains what NRW schools teach and when, describes how our live classes in English work for young children, lists the free contests this school year, and shows a project where a child finds out how often it really rains in Leverkusen, and why looking at two weeks is not enough.',
  secondaryCta: { href: '#rain', label: 'See the rain project' },
  wa: 'Hello Modern Age Coders, my child lives in Leverkusen and would like to try coding in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; your child keeps one mentor, in English',
  spec: [
    ['Ages', '6 to 12, never mixed across ages'],
    ['Begins with', 'Scratch, then typed Python'],
    ['Lessons', 'Live, an hour, twice a week'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'Based in India, teaching in English'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding classes for kids in Leverkusen live online in English, for ages 6 to 12. Younger children make Scratch games and stories; from about nine they move to typed Python with Python and AI for Kids. A regular mentor in India keeps the same child week after week and fits pace and accent to them, in a class of fifteen to twenty or alone. NRW schools start Informatik in grade 5.',

  picks: {
    eyebrow: 'First courses',
    h2: 'Which course should a Leverkusen child start with?',
    lede: 'A long course for a child of six who will grow with it, a puzzle course for a child who loves riddles more than screens, and Python for a child who is already typing.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'LEV / 01', title: 'Coding for Kids', note: 'Ten to twelve months for six to twelve year olds in age groups: Scratch games and stories, then small apps and a first idea of how machines learn.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'LEV / 02', title: 'Problem Solving for Kids', note: 'Logic, patterns and step-by-step thinking for seven to twelve, much of it away from code: the kind of puzzle the Biber asks.' },
      { course: 'python-ai-kids-masterclass', code: 'LEV / 03', title: 'Python and AI for Kids', note: 'Real typed Python for nine to twelve: drawing, games and small data projects such as the Leverkusen rain sample on this page.' }
    ]
  },

  sections: [
    {
      id: 'ready',
      eyebrow: 'Readiness',
      h2: 'Is my child ready to start coding? Five signs to look for',
      lede: 'Age matters less than you might think. These are the signs our mentors look for in the free first class, and you can look for them at home.',
      body: [
        { kind: 'ol', items: [
          '<strong>They follow a short sequence.</strong> A child who can follow three steps of a recipe or a Lego plan in order can follow the steps of a Scratch program.',
          '<strong>They ask "what if".</strong> What if the cat jumps twice? What if the game is faster? That question is the start of every program.',
          '<strong>They can sit with a puzzle for ten minutes.</strong> Not an hour; ten minutes of trying before asking for help is plenty at six or seven.',
          '<strong>They use a mouse or trackpad.</strong> Scratch is dragging and dropping. Typing comes later, usually from about nine.',
          '<strong>They enjoy making, not only playing.</strong> A child who builds worlds, draws comics or invents rules for games usually loves coding.'
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'A first project at each age (ours)', head: ['Age', 'First project', 'What it teaches'], rows: [
          ['6 to 7', 'A cat that walks, meows and changes colour', 'Order of steps'],
          ['7 to 8', 'A maze game you steer with arrow keys', 'Events and repeats'],
          ['8 to 10', 'A quiz that keeps score', 'Variables and choices'],
          ['10 to 12', 'A Python program that counts rainy days', 'Lists, loops and fair samples']
        ] },
        { kind: 'p', mt: true, html: 'If only two or three of the five signs fit, that is normal. The free first class is the real test: the mentor sees within half an hour whether your child is ready for Scratch, ready for Python, or would enjoy the puzzle course first.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'NRW schools',
      h2: 'What will my child meet in Informatik at a Leverkusen school?',
      lede: 'Nothing compulsory in Grundschule, then two compulsory years. The facts are from the Gesellschaft für Informatik and the KMK, read on 2 November 2026.',
      body: [
        { kind: 'two',
          leftH3: 'Grades 1 to 4',
          left: [
            'A Leverkusen child spends the first four school years in Grundschule, as children do in almost every Land, and none of those years has Informatik as a required subject.',
            'Children of six to nine therefore depend on home, clubs or classes like ours if they want to make things with code.'
          ],
          rightH3: 'Grades 5 and 6',
          right: [
            'According to the Informatik-Monitor 2026/27, Informatik is compulsory in grades 5 and 6 at all general school types in NRW. Every Leverkusen pupil, whatever school they move to, has it.',
            'A child who has spent a year or two on Scratch and simple Python arrives in grade 5 knowing loops and conditions, and can spend those lessons going deeper instead of catching up.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Computing in a Leverkusen school career, 2026/27 rules', head: ['Grades', 'School', 'Informatik'], rows: [
          ['First four years', 'Grundschule', 'Not a compulsory subject'],
          ['5 and 6', 'Every general school type', 'Compulsory'],
          ['7 onwards', 'Depends on the school', 'Elective or course, where offered']
        ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, North Rhine-Westphalia page; KMK, Primarbereich. Read 2 November 2026. NRW holidays in 2026/27, from the KMK Ferienkalender: Herbstferien until 31 October 2026, Christmas from 23 December 2026 to 6 January 2027, Easter from 22 March to 3 April 2027, summer from 19 July to 31 August 2027. Neither those bodies nor the NRW ministry has any tie to Modern Age Coders.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'How can a young child learn coding in English?',
      lede: 'Lessons are given live, in English and nothing else. For a young child that matters less than parents fear, because so much is shown rather than said.',
      body: [
        { kind: 'three', cells: [
          { h3: 'No German, said early', p: 'Mentors teach in English and there is no German-language option. We would rather you know that now. The mentors are based in India and teach by live video.' },
          { h3: 'Short, clear sentences', p: 'Mentors use few words, repeat them, point at the screen and wait. They get used to your child\'s way of speaking, and a German word in the middle of an answer is understood and gently swapped for the English one.' },
          { h3: 'Words a child picks up fast', p: 'Move, turn, repeat, if, score, start. Most of a young child\'s coding vocabulary is a few dozen words, and children use them comfortably within a few weeks.' }
        ] },
        { kind: 'p', mt: true, html: 'Because the mentor stays the same, your child is not meeting a stranger every week. Quiet children often speak more by the third or fourth class, once they know who is on the other side of the screen.' }
      ]
    },
    {
      id: 'rain',
      tint: 'tint',
      eyebrow: 'A real Leverkusen project',
      h2: 'How often does it rain in Leverkusen? A lesson in fair samples',
      lede: 'The Deutscher Wetterdienst has measured rain at Leverkusen-Pattscheid for decades. Our older children use the 365 days of 2025 to discover that looking at a few days can give almost any answer you like.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'Station 2970, Leverkusen-Pattscheid, sits 140 metres above sea level inside the city boundary. Its daily rain totals are free to reuse with credit (CC BY 4.0) from the DWD Climate Data Center. Our copy was fetched on 3 November 2026, and the 2025 part became pattscheid_2025.csv.',
            'We call a day rainy when at least 1 millimetre fell. That is our choice for the project, written down before counting so it cannot be changed to suit the answer.'
          ],
          rightH3: 'The question',
          right: [
            'Out of every hundred days in 2025, how many were rainy? A child guesses first. Then the program looks at only two weeks, then at a different two weeks, then at the whole year.',
            'The total for the year was 830.8 millimetres, and the wettest single day was 8 September 2025 with 35.6 millimetres. Both are our sums from the file.'
          ] },
        { kind: 'code', label: 'Version 1: the whole year against two weeks', lang: 'Python', code: V1, note: 'It prints <code>All 365 days: 34 % rainy</code>, <code>First two weeks of January: 64 % rainy</code> and <code>First two weeks of March: 0 % rainy</code>.' },
        { kind: 'p', mt: true, html: 'Two weeks in January say nearly two days in three are rainy. Two weeks in March say it never rains at all. The whole year says about one day in three. A sample of days all bunched together only tells you about those days.' },
        { kind: 'code', label: 'Version 2: spread the days out, and take more of them', lang: 'Python', code: V2, note: 'Run after Version 1. It prints <code>One day a week, 53 days: 40 % rainy</code>, then five random tries each: <code>10 random days, five tries: [40, 30, 30, 40, 30]</code>, <code>30 random days, five tries: [27, 53, 33, 20, 20]</code> and <code>100 random days, five tries: [32, 45, 31, 36, 35]</code>.' },
        { kind: 'p', html: 'Spreading the sample across the year helps: one day a week gives 40 percent, much closer than either fortnight. Random days help too, but a small random sample still jumps about. With 100 days most tries land within a few points of the true 34. The lesson children remember: look at enough days, from all over the year.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Share of rainy days in 2025 by sample (our calculation)', head: ['Sample', 'Days', 'Rainy, %'], rows: [
          ['First two weeks of January', '14', '64'],
          ['First two weeks of March', '14', '0'],
          ['One day a week', '53', '40'],
          ['The whole year', '365', '34']
        ] },
        { kind: 'source', html: 'Rain figures: DWD station 2970 Leverkusen-Pattscheid, daily totals from the Climate Data Center, reused under CC BY 4.0 (file fetched 3 November 2026). The 1 millimetre threshold, the samples and all shares are ours. The random tries use a fixed seed, so anyone who runs the code gets the same numbers.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Put 10 red and 20 blue counters in a bag. Pull out three. Does your handful say "one in three are red"? Try again.',
          '<strong>Scratch, 8 to 10.</strong> Build a list of 30 days, ten of them rainy. Pick five at random and show the share. Press the green flag ten times and watch it change.',
          '<strong>Python, 10 to 12.</strong> Change Version 2 to take 200 random days. Do the five tries get closer to 34?',
          '<strong>Going further.</strong> Change the rule to "at least 0.1 millimetre". How many rainy days now, and why is the choice of rule part of the answer?'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Free contests',
      h2: 'Which free contests can a Leverkusen primary child enter this year?',
      lede: 'Two national ones that start in grade 3, both entered through the school. We have no connection with either organiser.',
      body: [
        { kind: 'two',
          leftH3: 'Informatik-Biber',
          left: [
            'A free online puzzle quiz for grades 3 to 13 that needs no prior knowledge. More than 580,000 pupils took part in 2025. The Biberwochen 2026 run from 9 to 20 November 2026, inside a school lesson.',
            'Schools register their pupils, so the class teacher is the person to ask.'
          ],
          rightH3: 'Mathematik-Olympiade',
          right: [
            'About 200,000 pupils take part every year, and it has been open to primary schools since 2005. In the 66th Olympiade the Regionalrunde is on 11 November 2026 and the Landesrunde from 26 to 28 February 2027.',
            'The first round is set at school. For a child who enjoys puzzles, it is a good reason to practise careful written reasoning.'
          ] },
        { kind: 'p', mt: true, html: 'We never copy either contest\'s tasks. In class, mentors invent their own puzzles in the same spirit, marked as ours, and send families to the organisers\' own pages for real past rounds.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Times',
      h2: 'When are coding classes for Leverkusen children?',
      lede: 'After school or at the weekend, whatever suits your family. A German afternoon is an Indian evening, which is when the mentors teach.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Leverkusen times and the mentor\'s time', head: ['Leverkusen', 'India in winter, until 28 March 2027', 'India in summer, from 28 March 2027'], rows: [
          ['14:40', '19:10', '18:10'],
          ['16:50', '21:20', '20:20'],
          ['Saturday 10:15', '14:45', '13:45'],
          ['Sunday 09:30', '14:00', '13:00']
        ] },
        { kind: 'source', html: 'Clock note: Germany switched from summer time (MESZ, two hours ahead of UTC) to standard time (MEZ, one hour ahead) on 25 October 2026, as the Einheitenzeitgesetz provides, and switches back on 28 March 2027. India keeps one setting, UTC+5:30, all year. A mentor is therefore 4 h 30 ahead of a Leverkusen family until late March and 3 h 30 ahead after that. Every row above is an example; no batch is tied to it.' },
        { kind: 'p', mt: true, html: 'Families in Köln, Langenfeld, Leichlingen, Burscheid or Monheim join the same classes. Booking happens in the time zone of your own device.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What can a Leverkusen child do as they progress?',
    lede: 'Five stages we use to group children and to write to parents.',
    table: { caption: 'Stages for young coders (ours)', head: ['Stage', 'Age, roughly', 'A child at this stage'], rows: [
      ['1. Order', '6 to 7', 'Plans steps and puts them in the right order'],
      ['2. Repeat', '7 to 9', 'Uses a loop instead of copying blocks'],
      ['3. Decide', '8 to 10', 'Lets a game choose between two paths'],
      ['4. Type', '9 to 11', 'Writes short Python programs'],
      ['5. Sample', '10 to 12', 'Checks whether enough data was used before trusting an answer']
    ] },
    left: { h3: 'For parents', ps: [
      'The rain sample belongs to stage 5. Once a child has watched 64 percent and 0 percent come out of one and the same year, they start asking how much of anything they have really seen.',
      'Progress notes say what your child made and could explain.'
    ] },
    right: { h3: 'For children', ps: [
      'A handful of days is a guess. A year of days is an answer.',
      'Spread your sample out, and take enough of it.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Leverkusen children',
    lede: 'All live, in English, with the same mentor every week, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Games and stories', sub: 'Ages 6 to 12', courses: [
        { code: 'LEV / PLAY / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'A full beginner course in a few months.' },
        { code: 'LEV / PLAY / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Scratch, Roblox and Minecraft together.' },
        { code: 'LEV / PLAY / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Blocks to code in a familiar world.' }
      ] },
      { num: 'II', h3: 'Thinking and maths', sub: 'Ages 8 to 15', courses: [
        { code: 'LEV / THINK / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How machines learn, in child-sized steps.' },
        { code: 'LEV / THINK / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths with Python, from ten.' },
        { code: 'LEV / THINK / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Olympiad and Känguru training', blurb: 'Contest-style maths, our own problems.' }
      ] },
      { num: 'III', h3: 'Building', sub: 'Ages 8 to 14', courses: [
        { code: 'LEV / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Working apps from blocks.' },
        { code: 'LEV / MAKE / 02', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A first site to show the family.' },
        { code: 'LEV / MAKE / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Scripting real Roblox games.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live coding classes fit a Leverkusen family\'s week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Mid and late afternoon on weekdays.' },
      { time: 'Weekend', l: 'Saturday and Sunday mornings for younger children.' },
      { time: '1-on-1', l: 'A slot agreed just for your child.' }
    ],
    cells: [
      { h3: 'A familiar mentor', p: 'The same person every week.' },
      { h3: 'Little and often', p: 'Two hours a week, in two lessons.' },
      { h3: 'Hands on', p: 'Your child does the clicking and typing.' },
      { h3: 'By age', p: 'Six year olds are never with twelve year olds.' },
      { h3: 'Parent notes', p: 'Short updates on what was made.' },
      { h3: 'Class or private', p: 'Fifteen to twenty children, or one.' }
    ]
  },

  projectsH2: 'Projects from older students',
  projectsLede: 'Where young coders can end up: a few projects by our teenage students, with more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents\' and students\' reviews on Google, quoted as written.',

  fees: {
    h2: 'Fees for Leverkusen families',
    lede: 'Payment is monthly and covers eight live classes. The euro figure on this page uses the European Central Bank reference rate; the actual charge is in US dollars, which your bank converts, so your statement might show a slightly different amount.',
    free: ['The first class is free', 'A puzzle and a first Scratch program', 'No card needed'],
    group: ['Fifteen to twenty children of a similar age', 'One regular mentor', 'Two classes a week', 'Monthly, cancel any time'],
    one: ['Just your child and the mentor', 'Their own speed and projects', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Leverkusen parents ask',
    h2: 'Coding classes for kids in Leverkusen: answers for parents',
    items: [
      { q: 'Are the classes in German?', a: 'No. Classes run live, and the teaching language is English alone. The mentors, based in India, speak simply, show each step on the screen and adjust to your child\'s pace and accent, so a young child with little English can take part.' },
      { q: 'How do I know if my child is ready to code?', a: 'Look for five signs: following a short sequence, asking what if, staying with a puzzle for ten minutes, using a mouse, and enjoying making things. The free first class confirms it either way.' },
      { q: 'Do Leverkusen schools teach coding?', a: 'Not in Grundschule. From grade 5, Informatik is compulsory in grades 5 and 6 at every general school type in North Rhine-Westphalia, according to the Gesellschaft für Informatik.' },
      { q: 'Is six too young?', a: 'Usually not, as long as the start is Scratch, where blocks snap together and almost nothing is typed. Six year olds have short lessons with small wins and are grouped only with children their age.' },
      { q: 'When are classes in Leverkusen time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Leverkusen children mostly pick a weekday afternoon or Saturday and Sunday mornings.' },
      { q: 'Can my child take part in the Biber or the Mathematik-Olympiade?', a: 'Yes, both start from grade 3 and run through schools. This school year the Biber falls between 9 and 20 November 2026, and the Regionalrunde of the 66th Mathematik-Olympiade is on 11 November 2026. Ask the class teacher.' },
      { q: 'Is the rain project real Leverkusen data?', a: 'Yes. It uses the 2025 daily rain at Deutscher Wetterdienst station 2970, Leverkusen-Pattscheid, free to reuse under CC BY 4.0; our copy dates from 3 November 2026. Samples and percentages are our work.' },
      { q: 'What will my child build in the first months?', a: 'Scratch stories and games for the youngest, a scoring quiz around eight, and from about nine or ten, short Python programs such as the rainy-day counter on this page.' },
      { q: 'How large is a class?', a: 'Between fifteen and twenty children close in age. If you prefer, the one-to-one plan books the mentor for your child alone, two lessons each week.' },
      { q: 'Which currency is the fee in?', a: 'The page shows the monthly fee in euro at the European Central Bank reference rate. The payment itself is taken in US dollars and converted by your bank, so the euro amount on your statement may differ a little. The first class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for families in Leverkusen.',
    items: [
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'The NRW Land page.' },
      { href: '/coding-classes-for-kids-cologne', label: 'Coding classes for kids in Cologne', p: 'Our page for the neighbouring city.' },
      { href: '/online-coding-classes-for-kids-germany', label: 'Online coding classes for kids', p: 'How online lessons work for children.' },
      { href: '/math-olympiad-germany-preparation', label: 'Mathematik-Olympiade preparation', p: 'Getting ready for the olympiad.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'The Biber in English.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our Germany pages.' }
    ]
  },

  start: {
    h2: 'Try a first class at no cost',
    lede: 'Your child solves a small puzzle and makes something move in Scratch. Meanwhile the mentor watches how they think and how much English help they need, and afterwards suggests a course and an age group.',
    readFirst: 'Prefer to read first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or every syllabus under <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'Live online classes, taught in English only by mentors in India. WhatsApp in English gets the fastest reply.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/online-coding-classes-for-kids-germany', label: 'Online coding for kids' },
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch for kids' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/math-olympiad-germany-preparation', label: 'Mathematik-Olympiade' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding in NRW' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Enough days, from all over the year'
  },

  personalityCss: `
.ag-root.ag-lev .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-lev .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-lev .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-lev .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-lev .ag-band-head h3 { letter-spacing: -0.002em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); KMK Primarbereich and Ferienkalender 2026/27; Mathematik-Olympiaden e.V.; Bundesweite Informatikwettbewerbe; Destatis GV-ISys; Einheitenzeitgesetz; read 2 and 3 November 2026. Deutscher Wetterdienst, Climate Data Center, station 2970 Leverkusen-Pattscheid, CC BY 4.0.',
    localProject: 'Fair samples: an original Python and Scratch project on the 365 days of 2025 at DWD station 2970 Leverkusen-Pattscheid. With a rainy day defined in advance as at least 1 mm, the whole year gives 34 percent; two weeks in January give 64 and two weeks in March 0; one day a week gives 40; seeded random samples of 10, 30 and 100 days show the spread shrinking. Lesson family: a small or bunched sample can fool you.',
    requiredMentions: ['pattscheid_2025.csv', 'All 365 days: 34 % rainy', 'First two weeks of January: 64 % rainy', 'First two weeks of March: 0 % rainy', 'One day a week, 53 days: 40 % rainy', 'station 2970, Leverkusen-Pattscheid', 'Regionalrunde is on 11 November 2026', 'Enough days, from all over the year'],
    sources: [
      { claim: 'NRW compulsory Informatik grades 5 and 6.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Grundschule grades 1 to 4.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'Mathematik-Olympiade participation and 2026/27 dates.', url: 'https://www.mathe-wettbewerbe.de/mo' },
      { claim: 'Informatik-Biber 2026 dates and 2025 participation.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'DWD daily precipitation, station 2970.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/more_precip/historical/' },
      { claim: 'DWD licence CC BY 4.0.', url: 'https://opendata.dwd.de/climate_environment/CDC/Terms_of_use.txt' }
    ],
    rejectedClaims: [
      'Stadt Leverkusen datasets on GovData: boundary files only, with no reuse licence stated, so not used.',
      'Any claim that 2025 was a typical year for rain: one year only, and the page says so.',
      'Registration details for the Biber beyond "schools register": not verified, so not given.',
      'Any link with the DWD, BWINF, the Mathematik-Olympiade or the NRW ministry: none.'
    ]
  }
};
