'use strict';
// Coding classes for kids in Solingen (ag- city page, Germany cluster P6 row DE175, tier-2 slug shape
// coding-classes-for-kids: ages 6 to 12). Owner 2026-11-02: classes are live, in English only, with mentors who match
// the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: "screen time that makes something". Solingen parents worry about screens before they worry about syllabuses;
// the page answers that first, then sets out what a child learns term by term, the NRW school rule, two maths contests,
// and a project ranking 30 snowy winters at Solingen-Hohenscheid, where two winters with the same count must share a place.
// Sources (read raw; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-for-kids-in-solingen-germany/):
//  - GI Informatik-Monitor 2026/27, NRW page: compulsory Informatik in grades 5 and 6 at all general school types
//    (FACTS 80). KMK primary: Grundschule grades 1 to 4 outside Berlin and Brandenburg (FACTS 1).
//  - KMK Ferienkalender 2026/27: NRW line (FACTS 275).
//  - Pangea-Mathematikwettbewerb: "ANMELDEBEGINN: 01. Oktober 2026 ANMELDESCHLUSS: 17.02.2027 VORRUNDE: 23.02.–03.03.2027"
//    (FACTS 189); 15 tasks for grades 3 and 4, otherwise 20, in 45 to 60 minutes (191).
//  - Känguru der Mathematik: 8 April 2027 (183); over 920,000 pupils from more than 13,000 schools in 2026 (185).
//  - Destatis GV-ISys 31.12.2024: Solingen (Klingenstadt) 165,626; Nordrhein-Westfalen 18,034,454 (places.tsv).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily precipitation (more_precip) with snow depth SH_TAG, station
//    4741 Solingen-Hohenscheid (152 m since 20 October 2004; 209 m from 1959 to 2002), file
//    tageswerte_RR_04741_19310101_20251231_hist.zip (157,660 bytes), downloaded 3 November 2026, licence CC BY 4.0
//    (Terms_of_use.txt). solingen.de/opendata answered "Request Rejected" on 3 November 2026 and was not retried.
// Our own calculations (scratchpad de/w/T4/bin sol_prep.py, sol_v1.py, sol_v2.py; python3 -I): December to February of
// winters 1990/91 to 2024/25, kept only when at least 90 days have a snow depth: 30 winters (2002/03, 2006/07, 2008/09,
// 2011/12 dropped; 2003/04 has no data). Snow day = depth at least 1 cm (our rule). Ranking: 2009/2010 49, 2010/2011 37,
// 2012/2013 28, 1990/1991 24, 2004/2005 23, 1995/1996 20, 1998/1999 18, 2001/2002 18; naive places 7 and 8, fair places
// 7 and 7; last place 29 shared by 2019/2020 and 2021/2022; no winter with zero.
// Lesson family: equal values share a place; a ranking needs a rule for ties.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  "import csv",
  "",
  "snow_days = {}",
  "with open(\"hohenscheid_winters.csv\", encoding=\"utf-8\") as f:",
  "    for row in csv.DictReader(f):",
  "        year, month = int(row[\"date\"][:4]), int(row[\"date\"][5:7])",
  "        winter = f\"{year}/{year + 1}\" if month == 12 else f\"{year - 1}/{year}\"",
  "        if winter not in snow_days:",
  "            snow_days[winter] = 0",
  "        if int(row[\"snow_cm\"]) >= 1:",
  "            snow_days[winter] += 1",
  "",
  "order = sorted(snow_days, key=snow_days.get, reverse=True)",
  "print(\"Winters:\", len(order))",
  "for place, winter in enumerate(order[:8], start=1):",
  "    print(place, winter, snow_days[winter], \"days\")"
].join('\n');

const V2 = [
  "def place_of(winter):",
  "    more = [w for w in snow_days if snow_days[w] > snow_days[winter]]",
  "    return len(more) + 1",
  "",
  "print(\"Fair places:\")",
  "for winter in order[:8]:",
  "    print(place_of(winter), winter, snow_days[winter], \"days\")",
  "print(\"No snow at all:\", [w for w in order if snow_days[w] == 0])",
  "print(\"Last place:\", place_of(order[-1]), [w for w in order if place_of(w) == place_of(order[-1])])"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Solingen: coding for kids' },
  slug: 'coding-classes-for-kids-in-solingen-germany',
  code: 'cso',
  accent: '#402B5F',
  accentRationale: 'Coding classes for kids in Solingen: a dark violet #402B5F, the blued steel colour of a tempered blade in the Klingenstadt; contrast 9.86 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding classes for kids in Solingen',
  title: 'Coding Classes for Kids in Solingen: Live Online, in English',
  description: 'Coding classes for kids in Solingen aged 6 to 12: live online in English, screen time that builds things, NRW school Informatik, and a snowy-winters project.',
  ogDescription: 'Live online coding in English for Solingen children aged 6 to 12: how coding differs from screen time, what a child learns each term, NRW Informatik from grade 5, the Pangea and Känguru dates, and a project ranking 30 Solingen winters by snow.',
  twitterDescription: 'Coding for Solingen kids, live in English, with a project ranking Solingen winters by snow days.',
  pageName: 'Coding Classes for Kids in Solingen',
  webPageDescription: 'A guide for Solingen parents of children aged 6 to 12 to live online coding classes in English: screen time and coding, a term-by-term plan, NRW Informatik facts from the Gesellschaft für Informatik, maths contest dates for 2027, and an original ranking project on Deutscher Wetterdienst snow data from Solingen-Hohenscheid.',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 in Solingen: Scratch games, then typed Python and small data projects, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Solingen',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#screens', label: 'Screens' },
    { href: '#school', label: 'School' },
    { href: '#snow', label: 'Snow' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Solingen &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Solingen',
  lede: 'Most Solingen parents ask the same thing first: is a coding class just more time in front of a screen? It is a fair question, and the answer depends on what the child is doing with the screen. This page explains the difference, sets out what a child learns term by term, gives the NRW school facts, lists two maths contests in 2027, and shows a project on 30 Solingen winters in which a child discovers that two winters with the same number of snow days deserve the same place.',
  secondaryCta: { href: '#snow', label: 'See the snow project' },
  wa: 'Hello Modern Age Coders, my child is in Solingen and would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; children make things, in English, with one mentor',
  spec: [
    ['Ages', '6 to 12, grouped by age'],
    ['First steps', 'Scratch games, then Python'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Each lesson', 'Live, one hour, mentor on video'],
    ['Teachers', 'Mentors based in India, in English'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders runs coding classes for kids in Solingen as live online lessons held in English, for ages 6 to 12; children build their own games and programs instead of watching. They begin with Scratch, move to Python and AI for Kids around nine, and keep one mentor in India who matches their pace and accent. Children join a class of fifteen to twenty peers or learn one to one. NRW schools teach Informatik from grade 5.',

  picks: {
    eyebrow: 'First courses',
    h2: 'Which first course suits a Solingen child?',
    lede: 'A short Scratch course to start, a games course for children who already love games, and Python for a child ready to type.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'CSO / 01', title: 'Scratch Coding for Kids', note: 'Three to four months from nothing to games a child designed alone. The quickest way to see whether coding is for your child.' },
      { course: 'game-development-masterclass-for-kids', code: 'CSO / 02', title: 'Game Development for Kids', note: 'For eight to twelve year olds who play a lot: they learn to build games in Scratch, Roblox and Minecraft, and to say how each one works.' },
      { course: 'python-ai-kids-masterclass', code: 'CSO / 03', title: 'Python and AI for Kids', note: 'Typed Python from about nine: turtle pictures, small games and real data, such as the Solingen snow winters below.' }
    ]
  },

  sections: [
    {
      id: 'screens',
      eyebrow: 'Screen time',
      h2: 'Is a coding class just more screen time for my child?',
      lede: 'It uses a screen, but it is the opposite of scrolling. The difference is who is in charge of what happens next.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Making, not watching', p: 'In a game or a video, someone else has decided everything. In a coding class, your child decides what the character does, writes the rules and fixes them when they do not work.' },
          { h3: 'Thinking away from the screen', p: 'Mentors often ask a child to plan on paper first: draw the maze, list the steps, guess the result. A good part of each lesson is talking and thinking, not clicking.' },
          { h3: 'Short and finished', p: 'A lesson lasts an hour and ends with something your child made and can show you. There is no endless feed and nothing that pulls them back in.' }
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Explain.</strong> The mentor shows one small idea, such as making a sprite repeat a dance.',
          '<strong>Predict.</strong> Before running anything, your child says what they think will happen.',
          '<strong>Build.</strong> Your child makes their own version, with their own character and rules.',
          '<strong>Break and fix.</strong> Something goes wrong on purpose, and your child finds out why.',
          '<strong>Show.</strong> At the end, your child explains what they built in their own words.'
        ] }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Term by term',
      h2: 'What does a Solingen child learn in the first year?',
      lede: 'An outline of a first year at two classes a week, our own plan. Every child moves at their own speed inside it.',
      body: [
        { kind: 'table', numCols: [], caption: 'A first year of coding, by term (our plan)', head: ['Term', 'Ages 6 to 8', 'Ages 9 to 12'], rows: [
          ['Autumn', 'Scratch: moving, talking, costumes', 'Scratch games with scores and levels'],
          ['Winter', 'Loops and simple events', 'First Python: printing, input, turtle drawing'],
          ['Spring', 'Small games with choices', 'Python loops, lists and number games'],
          ['Summer', 'A game of their own to show the family', 'A data project, such as ranking snowy winters']
        ] },
        { kind: 'p', mt: true, html: 'Children aged six to eight stay in Scratch longer because they are still learning to read and type. From nine, most children are ready to type short programs, and they are proud of writing the same language that grown-up programmers use.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'NRW schools',
      h2: 'When does Informatik start at Solingen schools?',
      lede: 'At grade 5. Before that, coding is something a child does at home or in a club. Checked against the GI monitor and the KMK on 2 November 2026.',
      body: [
        { kind: 'two',
          leftH3: 'Primary years',
          left: [
            'Solingen children go to Grundschule for four years, from grade 1 to grade 4, as in almost every Land. NRW has no compulsory Informatik subject in those years.',
            'So the ages six to nine, when children pick up new ways of thinking most easily, are left to families.'
          ],
          rightH3: 'Grades 5 and 6',
          right: [
            'The Informatik-Monitor 2026/27 of the Gesellschaft für Informatik reports that Informatik is a compulsory subject in grades 5 and 6 at all general school types in North Rhine-Westphalia.',
            'A child who arrives in grade 5 already able to plan steps and use a loop has a head start. Our classes run alongside school and give no marks; the school subject is the one that counts.'
          ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); KMK, Primarbereich and Ferienkalender 2026/27. NRW holidays this school year: Herbstferien to 31 October 2026, Weihnachtsferien 23 December 2026 to 6 January 2027, Osterferien 22 March to 3 April 2027, Sommerferien 19 July to 31 August 2027. We are independent of the GI, the KMK and the NRW ministry.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'Will my child understand a coding class in English?',
      lede: 'Every class is live and taught in English only, and young children usually settle in within a few lessons.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English, plainly said', p: 'We do not teach in German. Mentors are based in India and teach over live video, in English, and we say so here rather than after a trial.' },
          { h3: 'Fitted to your child', p: 'Mentors use short sentences, repeat key words, point at the screen and wait for an answer. They get used to your child\'s accent, and a German word in an answer is fine.' },
          { h3: 'A small vocabulary', p: 'Move, turn, repeat, if, score, sprite. Children need only a handful of words to start building, and they learn them by using them.' }
        ] },
        { kind: 'p', mt: true, html: 'Your child sees one mentor throughout the course, so the mentor learns what makes them laugh, what they find hard, and when they need an easy win before a harder step.' }
      ]
    },
    {
      id: 'snow',
      tint: 'tint',
      eyebrow: 'A real Solingen project',
      h2: 'Which was Solingen\'s snowiest winter? Ranking 30 winters fairly',
      lede: 'The Deutscher Wetterdienst measures how deep the snow lies each morning at Solingen-Hohenscheid. Our older children use 30 winters of it to learn something every ranking needs: a rule for ties.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'Station 4741, Solingen-Hohenscheid, has recorded daily rain and snow depth for decades. The DWD Climate Data Center publishes it under the Creative Commons BY 4.0 licence; we downloaded the file on 3 November 2026.',
            'We keep December, January and February of each winter from 1990/91 to 2024/25, but only winters where at least 90 of those days have a snow reading. That leaves 30 winters, saved as hohenscheid_winters.csv.'
          ],
          rightH3: 'The question',
          right: [
            'On how many mornings each winter was there at least 1 centimetre of snow on the ground? That rule is ours, decided before counting. Then: put the winters in order, from snowiest to least snowy.',
            'Sorting is easy. Giving each winter its place turns out to be the interesting part.'
          ] },
        { kind: 'code', label: 'Version 1: sort and number', lang: 'Python', code: V1, note: 'It prints <code>Winters: 30</code>, then eight lines from <code>1 2009/2010 49 days</code> to <code>7 1998/1999 18 days</code> and <code>8 2001/2002 18 days</code>.' },
        { kind: 'p', mt: true, html: 'Look at places 7 and 8: both winters had exactly 18 snow days. Which one is seventh? The program chose one, but only because of the order the winters happened to arrive in. A ten year old spots that this is not fair.' },
        { kind: 'code', label: 'Version 2: equal snow, equal place', lang: 'Python', code: V2, note: 'Run after Version 1. It prints the same eight winters with <code>7 1998/1999 18 days</code> and <code>7 2001/2002 18 days</code>, then <code>No snow at all: []</code> and <code>Last place: 29 [\'2019/2020\', \'2021/2022\']</code>.' },
        { kind: 'p', html: 'The fair rule is the one sports use: your place is one more than the number of winters with more snow than yours. Both 18-day winters are seventh, and the next one is ninth. At the bottom, two winters had just one snow day each and share 29th place, so there is no 30th. Every one of the 30 winters had at least one snowy morning.' },
        { kind: 'table', mt: true, numCols: [0, 2], caption: 'The eight snowiest Solingen winters, December to February (our calculation)', head: ['Place', 'Winter', 'Snow days'], rows: [
          ['1', '2009/2010', '49'],
          ['2', '2010/2011', '37'],
          ['3', '2012/2013', '28'],
          ['4', '1990/1991', '24'],
          ['5', '2004/2005', '23'],
          ['6', '1995/1996', '20'],
          ['7', '1998/1999', '18'],
          ['7', '2001/2002', '18']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, daily precipitation and snow depth, station 4741 Solingen-Hohenscheid, licence CC BY 4.0, downloaded 3 November 2026. The 1 centimetre rule, the 90-day completeness rule and the ranking are ours. Winters 2002/03, 2006/07, 2008/09 and 2011/12 have too many missing readings and are left out; there is no record for 2003/04, and the station moved site in 2004.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Line up five toys by height. Two are exactly the same height. Who stands where?',
          '<strong>Ages 8 to 10, Scratch.</strong> Make a list of five scores with two the same, and a script that says each score\'s place.',
          '<strong>Ages 10 to 12, Python.</strong> Change the snow rule to at least 5 centimetres. Does 2009/2010 stay first?',
          '<strong>Going further.</strong> Print the whole ranking and find every pair of winters that share a place.'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Maths contests',
      h2: 'Which maths contests can a Solingen primary child try in 2027?',
      lede: 'Two, both run through schools. Puzzles in maths and in coding grow the same habit: reading carefully and checking an answer.',
      body: [
        { kind: 'table', numCols: [], caption: 'Dates as published by the organisers', head: ['Contest', 'Key dates', 'Format for young pupils'], rows: [
          ['Pangea-Mathematikwettbewerb', 'Registration 1 October 2026 to 17 February 2027; first round 23 February to 3 March 2027', '15 tasks in grades 3 and 4, otherwise 20, in 45 to 60 minutes'],
          ['Känguru der Mathematik', '8 April 2027', '24 problems in 75 minutes in grades 3 to 6']
        ] },
        { kind: 'p', mt: true, html: 'The Känguru reached more than 920,000 pupils from over 13,000 schools in 2026. Schools register their pupils for both contests, so ask your child\'s teacher. We do not reproduce either contest\'s questions; in class we use puzzles we write ourselves and label as ours, and we are not connected to either organiser.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Times',
      h2: 'When are coding classes for Solingen children?',
      lede: 'After school or at the weekend, chosen by you. Solingen afternoons are evenings for the mentors in India.',
      body: [
        { kind: 'table', numCols: [], caption: 'A few Solingen slots on an Indian clock', head: ['Solingen', 'India, winter months', 'India, from 28 March 2027'], rows: [
          ['15:20', '19:50', '18:50'],
          ['17:20', '21:50', '20:50'],
          ['Saturday 11:00', '15:30', '14:30'],
          ['Sunday 10:30', '15:00', '14:00']
        ] },
        { kind: 'source', html: 'Germany switched to MEZ (UTC+1) on 25 October 2026 and returns to MESZ (UTC+2) on 28 March 2027, following the Einheitenzeitgesetz. India stays on UTC+5:30 all year, which puts the mentor four and a half hours ahead this winter and three and a half from late March. Slots are illustrations, not set batches.' },
        { kind: 'p', mt: true, html: 'Children in Wuppertal, Remscheid, Haan, Leichlingen or Langenfeld can join the same classes. Times on the booking page appear in your own clock.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What can a Solingen child do at each stage?',
    lede: 'Five stages we use to place children and to write home about progress.',
    table: { caption: 'Five stages for young coders (ours)', head: ['Stage', 'Around age', 'Your child can'], rows: [
      ['1. Plan', '6 to 7', 'Describe the steps of a game before building it'],
      ['2. Repeat', '7 to 9', 'Make a sprite repeat an action with a loop'],
      ['3. Choose', '8 to 10', 'Make a game behave differently when something happens'],
      ['4. Type', '9 to 11', 'Write and fix short Python programs'],
      ['5. Rank', '10 to 12', 'Sort real data and decide a fair rule for ties']
    ] },
    left: { h3: 'For parents', ps: [
      'The snow project is stage 5. A child who has argued about who is seventh has learnt that sorting is not the same as ranking.',
      'Updates tell you what your child made and explained.'
    ] },
    right: { h3: 'For children', ps: [
      'If two scores are the same, they get the same place.',
      'After a tie, skip a place: 7, 7, then 9.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Solingen children',
    lede: 'All live and in English, with one regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Thinking', sub: 'Ages 5 to 12', courses: [
        { code: 'CSO / THINK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic and patterns, partly away from code.' },
        { code: 'CSO / THINK / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense, five to ten.' },
        { code: 'CSO / THINK / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Olympiad and Känguru training', blurb: 'Our own contest-style problems.' }
      ] },
      { num: 'II', h3: 'Making', sub: 'Ages 6 to 12', courses: [
        { code: 'CSO / MAKE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'A long course from six to twelve.' },
        { code: 'CSO / MAKE / 02', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Real apps from blocks.' },
        { code: 'CSO / MAKE / 03', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A page of their own on the web.' }
      ] },
      { num: 'III', h3: 'Playing', sub: 'Ages 7 to 14', courses: [
        { code: 'CSO / PLAY / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code in a world they know.' },
        { code: 'CSO / PLAY / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Their own Roblox games.' },
        { code: 'CSO / PLAY / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot game development', blurb: 'A real game engine, 2D first.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How coding classes fit into a Solingen child\'s week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'After school, mid to late afternoon.' },
      { time: 'Weekends', l: 'Late morning on Saturday or Sunday.' },
      { time: '1-on-1', l: 'A time arranged for your child.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same friendly face each week.' },
      { h3: 'Active hour', p: 'Plan, predict, build, fix, show.' },
      { h3: 'Your child builds', p: 'Hands on the mouse and keys.' },
      { h3: 'Age groups', p: 'Children only with their own age.' },
      { h3: 'Parent notes', p: 'What was made, what is next.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one child.' }
    ]
  },

  projectsH2: 'Projects by our older students',
  projectsLede: 'Where young coders go next: projects by our teenage students, with more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews by parents and students on Google, in their own words.',

  fees: {
    h2: 'Fees for Solingen families',
    lede: 'You pay each month for eight live classes. The euro price shown uses the European Central Bank reference rate, while the charge is made in US dollars and converted by your bank, so the statement may differ by a few cents.',
    free: ['A free first class', 'A small puzzle and a first Scratch game', 'No card needed'],
    group: ['Fifteen to twenty children of a similar age', 'One regular mentor', 'Two classes a week', 'Monthly, stop any month'],
    one: ['Your child and one mentor', 'Their own pace and ideas', 'Times to suit your family']
  },

  faq: {
    eyebrow: 'Solingen parents ask',
    h2: 'Coding classes for kids in Solingen: questions from parents',
    items: [
      { q: 'Are the classes in German?', a: 'No. All lessons are live and taught in English only. The mentors are based in India; they use short sentences, show everything on screen and adapt to your child\'s pace and accent, so young children with little English can take part.' },
      { q: 'Is coding just more screen time?', a: 'It uses a screen, but your child is making things, not watching them. Lessons follow plan, predict, build, fix and show, with plenty of talking and thinking, and each one ends after an hour with something finished.' },
      { q: 'What age can my child start?', a: 'From six, with Scratch, where blocks snap together and nothing has to be typed. From about nine, most children are ready for typed Python.' },
      { q: 'When does Informatik start at Solingen schools?', a: 'In grade 5. The Gesellschaft für Informatik reports that Informatik is compulsory in grades 5 and 6 at all general school types in North Rhine-Westphalia. Grundschule has no compulsory Informatik.' },
      { q: 'When are classes in Solingen time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Solingen children usually come after school or late on a weekend morning.' },
      { q: 'Which maths contests can my child enter?', a: 'The Pangea-Mathematikwettbewerb, with a first round from 23 February to 3 March 2027, and the Känguru der Mathematik on 8 April 2027. Both go through schools, so ask the class teacher.' },
      { q: 'Is the snow project real Solingen data?', a: 'Yes. It uses snow depth from Deutscher Wetterdienst station 4741, Solingen-Hohenscheid, published under the CC BY 4.0 licence and downloaded on 3 November 2026. The snow-day rule and the ranking are our own.' },
      { q: 'Who will teach my child?', a: 'One mentor based in India, live by video, for the whole course. Because India is ahead of Germany, a Solingen afternoon is the mentor\'s evening.' },
      { q: 'How many children are in a class?', a: 'Fifteen to twenty children of a similar age, or just your child on the one-to-one plan, with two lessons a week either way.' },
      { q: 'In what currency are fees paid?', a: 'In US dollars. We show the monthly fee in euro using the European Central Bank reference rate, and your bank converts the dollar charge, so the euro amount on your statement can vary slightly. The first class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More reading for Solingen families.',
    items: [
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'The Land page for NRW.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding classes for kids in Germany', p: 'The main page for children.' },
      { href: '/game-coding-classes-for-kids-germany', label: 'Game coding for kids', p: 'For children who love games.' },
      { href: '/kangaroo-math-germany-practice', label: 'Känguru practice', p: 'Ready for 8 April 2027.' },
      { href: '/scratch-classes-for-kids-germany', label: 'Scratch classes for kids', p: 'The usual first step.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for Germany.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Your child solves a small puzzle and makes a first Scratch game with the mentor, who watches how they think and how much English help suits them. Afterwards you get a recommendation for a course and an age group.',
    readFirst: 'More to read first: <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Classes are live online with mentors in India, in English only. WhatsApp us in English for a fast answer.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany' },
        { href: '/game-coding-classes-for-kids-germany', label: 'Game coding for kids' },
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch for kids' },
        { href: '/kangaroo-math-germany-practice', label: 'Känguru practice' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding in NRW' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Equal snow, equal place'
  },

  personalityCss: `
.ag-root.ag-cso .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-cso .ag-capsule { border-left-width: 6px; border-radius: 5px; }
.ag-root.ag-cso .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-cso .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cso .ag-band-head h3 { letter-spacing: 0.004em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); KMK Primarbereich and Ferienkalender 2026/27; Pangea-Mathematikwettbewerb; Känguru der Mathematik; Destatis GV-ISys; Einheitenzeitgesetz; read 2 and 3 November 2026. Deutscher Wetterdienst, Climate Data Center, station 4741 Solingen-Hohenscheid, CC BY 4.0.',
    localProject: 'Equal snow, equal place: an original Python and Scratch project on December to February snow depth at DWD station 4741 Solingen-Hohenscheid, 30 complete winters from 1990/91 to 2024/25. Counting mornings with at least 1 cm of snow, 2009/2010 leads with 49; numbering after sorting puts two 18-day winters seventh and eighth, while the fair rule (one plus the number of snowier winters) gives both seventh and makes 29th the shared last place. Lesson family: a ranking needs a rule for ties.',
    requiredMentions: ['hohenscheid_winters.csv', '1 2009/2010 49 days', '8 2001/2002 18 days', '7 2001/2002 18 days', 'Winters: 30', 'station 4741, Solingen-Hohenscheid', '23 February to 3 March 2027', 'Equal snow, equal place'],
    sources: [
      { claim: 'NRW compulsory Informatik grades 5 and 6.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Pangea 2027 dates.', url: 'https://www.pangea-wettbewerb.de/termine/' },
      { claim: 'Pangea round format.', url: 'https://www.pangea-wettbewerb.de/ablauf/' },
      { claim: 'Känguru 2027 date and 2026 participation.', url: 'https://www.mathe-kaenguru.de/' },
      { claim: 'DWD daily precipitation and snow depth, station 4741.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/more_precip/historical/' },
      { claim: 'DWD licence CC BY 4.0.', url: 'https://opendata.dwd.de/climate_environment/CDC/Terms_of_use.txt' }
    ],
    rejectedClaims: [
      'Solingen city open data: solingen.de returned "Request Rejected" and was not retried.',
      'Any statement about snow trends: 30 winters with gaps and a site move in 2004 are a teaching set, not a climate record.',
      'Känguru answer format: not verified, so only the number of problems and the time are given.',
      'Any link with the DWD, Pangea, Känguru or the NRW ministry: none.'
    ]
  }
};
