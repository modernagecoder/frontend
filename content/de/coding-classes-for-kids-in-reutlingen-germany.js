'use strict';
// Coding classes for kids in Reutlingen (ag- city page, Germany cluster P6 row DE190, tier-2 shape coding-classes-for-kids
// = ages 6 to 12).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: "at least" is an honest answer. The city counts homes with 1, 2, 3 and "4 or more" people; a child can work out
// how many people live in the homes of a district only as a lower bound, because the last box hides the exact number.
// Sources (school and contest facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/
// FACTS.md, fetched 2 Nov 2026; numbers are fact ids there):
//  - KMK Primarbereich: Grundschule "von der ersten bis zur vierten" Jahrgangsstufe outside Berlin and Brandenburg (1).
//  - GI Informatik-Monitor 2026/27, BW page: Pflichtfach Informatik und Medienbildung from 2025/26, "zunächst in den
//    Jahrgangsstufen 5 und 6" (67); national page: BW meets the 4-hour short-term recommendation (91).
//  - bwinf.de: Biber "kostenfrei" (129); "Jahrgangsstufen 3 bis 13, keine Vorkenntnisse erforderlich" (130); "Der Biber
//    passt mit 30-40 Minuten Teilnahmedauer gut in eine Schulstunde." (131); "Die Biberwochen 2026 finden vom 9. bis 20.
//    November statt." (133).
//  - mathe-wettbewerbe.de/mo: "rund 200.000 Schülerinnen und Schüler" a year (162); "Seit 2005 wird die Mathematik-
//    Olympiade auch für die Grundschulen angeboten." (164); "Regionalrunde der 66. Mathematik-Olympiade 11. November 2026"
//    (165).
//  - KMK Ferien 2026/2027, BW row (raw src-pages/coding-classes-in-land-bremen/kmk-fer2627/fe303dbf.txt): "26.10. -
//    30.10." / "31.10. 23.12. - 09.01. -- 25.03." / "30.03. - 03.04. 18.05. - 29.05. 29.07. - 11.09.".
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Reutlingen 118,852; Stuttgart 612,663.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Reutlingen, Kommunale Statistikstelle, "Privathaushalte nach Haushaltsgröße auf Stadtteilebene",
//    www.reutlingen.de/de/Leben/Unsere-Stadt/Daten-Fakten/Kommunale-Statistik/Open-Data (page: "Die Daten unterliegen der
//    Datenlizenz Deutschland - Namensnennung - Version 2.0"; GovData record privathaushalte-in-reutlingen-nach-
//    haushaltsgrosse, dl-by-de/2.0). File Privathaushalte_Stadtteile.csv (resource id 56235), downloaded 3 November 2026,
//    26,017 bytes, sha256 7c5945fa...91cbb5ea, ISO-8859-1, semicolons, 420 data rows: 30 Gemeindeteile, years 2012 to
//    2025; columns include Haushalte insgesamt, Einpersonenhaushalt, Haushalt mit 2 Personen, mit 3 Personen, "Haushalt mit
//    4 und mehr Personen". Our class file haushalte_2025.csv keeps year 2025 and those five counts.
// Our own calculations (scratchpad de/w/T6/reutlingen/v1.py, v2.py, python3 -I):
//  v1: "Area: 010 Zentrum", "People living in these homes: at least 4852".
//  v1+v2: "Most homes with one person: 010 Zentrum 61.6 %", "Fewest homes with one person: 131 Mittelstadt 32.4 %".
//  Next lowest shares: Oferdingen 32.8, Reicheneck 33.3; next highest: Honauer Bahn 50.8, Schieferstr. 48.4. Zentrum 2025:
//  2,939 homes, 1,810 one person, 614 two, 246 three, 269 four or more (9.2% of homes).
//  No total of the parts is computed or compared with the published total.
// Lesson family: an open-ended category ("4 or more") only gives a lower bound; say "at least" and explain why.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("haushalte_2025.csv", encoding="utf-8") as f:',
  '    areas = list(csv.DictReader(f))',
  '',
  'zentrum = areas[0]',
  'print("Area:", zentrum["area"])',
  'at_least = (1 * int(zentrum["one"]) + 2 * int(zentrum["two"])',
  '            + 3 * int(zentrum["three"]) + 4 * int(zentrum["four_or_more"]))',
  'print("People living in these homes: at least", at_least)'
].join('\n');

const V2 = [
  'for area in areas:',
  '    share = 100 * int(area["one"]) / int(area["households"])',
  '    area["share"] = round(share, 1)',
  '',
  'most = max(areas, key=lambda a: a["share"])',
  'fewest = min(areas, key=lambda a: a["share"])',
  'print("Most homes with one person:", most["area"], most["share"], "%")',
  'print("Fewest homes with one person:", fewest["area"], fewest["share"], "%")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Reutlingen: coding for kids' },
  slug: 'coding-classes-for-kids-in-reutlingen-germany',
  code: 'reu',
  accent: '#6A2816',
  accentRationale: 'Coding classes for kids in Reutlingen: a deep rust #6A2816 for the red roofs below the Achalm and the Marienkirche stone; contrast 8.84 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-baden-wuerttemberg', name: 'Baden-Württemberg' }],
  routeLabel: 'Coding classes for kids in Reutlingen',
  title: 'Coding Classes for Kids in Reutlingen: Live Online, English',
  description: 'Coding classes for kids in Reutlingen aged 6 to 12, live online in English: a first lesson step by step, school Informatik, contests, and a household data project.',
  ogDescription: 'Live online coding in English for Reutlingen children aged 6 to 12, with a project on the city\'s own household figures that teaches one of the most honest phrases in maths: at least.',
  twitterDescription: 'Coding for Reutlingen kids, live in English, with a project on Reutlingen household data.',
  pageName: 'Coding Classes for Kids in Reutlingen',
  webPageDescription: 'A guide for Reutlingen parents of children aged 6 to 12 to live coding classes in English: what a first lesson looks like, when Informatik starts at schools in Baden-Württemberg, the Informatik-Biber and the Mathematik-Olympiade in 2026/27, and an original project on Stadt Reutlingen\'s household statistics.',
  courseDescription: 'Live online coding classes in English for Reutlingen children aged 6 to 12: puzzles and Scratch from age 6, Python from about 9, in a group of fifteen to twenty or one to one, with a mentor who stays with the child.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Reutlingen',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#first-lesson', label: 'Lesson one' },
    { href: '#homes', label: 'Home data' },
    { href: '#wettbewerb', label: 'Contests' },
    { href: '#zeiten', label: 'Times' }
  ],
  eyebrow: 'Reutlingen &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Reutlingen',
  lede: 'How many people live in the homes of central Reutlingen? A ten year old with a few lines of Python can answer, but only with two small words in front: "at least". Learning why is the kind of thinking our live coding classes in English build. This page shows what a first lesson looks like for a Reutlingen child, when schools in Baden-Württemberg start Informatik, two free contests open to primary pupils this school year, and the household project itself.',
  secondaryCta: { href: '#homes', label: 'See the household project' },
  wa: 'Hello Modern Age Coders, my child is in Reutlingen and would like to try coding in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; patient mentors who speak clearly',
  spec: [
    ['For', 'Children aged 6 to 12'],
    ['Begins with', 'Puzzles and Scratch'],
    ['Then', 'Python, from about 9'],
    ['Groups', '15 to 20 by age, or 1-on-1'],
    ['Language', 'English, matched to the child'],
    ['First class', 'Free']
  ],
  capsuleQ: 'What it is',
  capsule: 'Coding classes for kids in Reutlingen at Modern Age Coders are live online lessons in English for children from 6 to 12. Younger children start with puzzles and Scratch games, older ones type Python and work with small real data files, and every child stays with one mentor who adapts to their speed and the way they speak. Children learn in age groups of fifteen to twenty, or alone with the mentor, after school or on weekend mornings.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'What are good first coding courses for a Reutlingen child?',
    lede: 'Three starting points for different ages and temperaments.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'REU / 01', title: 'Coding for Kids', note: 'Ages 6 to 12, grouped by age, about a year long. Blocks and games first, then apps, at a speed set for the group.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', code: 'REU / 02', title: 'Vibe Coding for Kids', note: 'Ages 8 to 12. Scratch games with the mentor and a careful, account-free first look at what AI can do.' },
      { course: 'python-ai-kids-masterclass', code: 'REU / 03', title: 'Python and AI for Kids', note: 'Ages 9 to 12. Real typed code from the start, then the Reutlingen household list below.' }
    ]
  },

  sections: [
    {
      id: 'first-lesson',
      eyebrow: 'The first lesson',
      h2: 'What happens in a first coding lesson for a Reutlingen child?',
      lede: 'It is short, friendly and hands-on. Here is how a free first class usually goes for a child of 6 to 9.',
      body: [
        { kind: 'ol', items: [
          '<strong>Hello on video.</strong> The mentor says hello, asks the child\'s name and what games they like, and speaks slowly and simply. A parent sits nearby for the first few minutes.',
          '<strong>A puzzle without a computer.</strong> The child gives the mentor step-by-step instructions to draw a house, and laughs when the mentor follows them a little too exactly.',
          '<strong>The same idea in Scratch.</strong> The child drags blocks to make a cat walk and speak. The mentor watches and asks questions but lets the child do the clicking.',
          '<strong>A small surprise.</strong> One block in the wrong place makes the cat do something silly, and the child finds and fixes it. That is the first piece of debugging.',
          '<strong>A goodbye and a note.</strong> The mentor tells the parent what the child managed and suggests a group, or one-to-one lessons if that suits better.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If English is not yet strong',
          left: [
            'Every lesson is taught in English, by a mentor based in India. That is fine for most children, because coding lessons are full of things you can see: blocks, characters, colours and movement.',
            'Mentors use short sentences, repeat and show. When a child answers in German, the mentor understands the meaning and offers the English words, without fuss.'
          ],
          rightH3: 'Older children, 10 to 12',
          right: [
            'For older children the first class can start straight in Python. They type a few lines, see the result, and change it. Within one lesson many write a small program that asks a question and answers it.',
            'From there, real data comes quickly, like the household file below, which most ten year olds find more interesting than invented numbers.'
          ] }
      ]
    },
    {
      id: 'homes',
      tint: 'tint',
      eyebrow: 'A Reutlingen data project',
      h2: 'How many people live in the homes of central Reutlingen?',
      lede: 'At least 4,852, and the "at least" is the clever part. Stadt Reutlingen publishes its household statistics for every part of the city, free to reuse under the Datenlizenz Deutschland Namensnennung 2.0, and our older children use them to learn what to say when the data does not tell you everything.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'The city\'s statistics office lists, for each of 30 parts of Reutlingen and each year from 2012 to 2025, how many homes there are, how many have one person, two people, three people, and "4 und mehr Personen", four or more. Our copy is from 3 November 2026.',
            'Children get just the 2025 rows, saved as haushalte_2025.csv, with six columns: the area, the number of homes and the four size groups.'
          ],
          rightH3: 'The question',
          right: [
            'In the Zentrum area there are 2,939 homes: 1,810 with one person, 614 with two, 246 with three and 269 with four or more. How many people is that?',
            'Children usually multiply each group by its size and add. That works perfectly for the first three groups. But how many people are in a "four or more" home? Four? Five? Seven? The file does not say.'
          ] },
        { kind: 'code', label: 'Count the people we can be sure of', lang: 'Python', code: V1, note: 'It prints: <code>Area: 010 Zentrum</code> and <code>People living in these homes: at least 4852</code>.' },
        { kind: 'p', mt: true, html: 'The program counts every "four or more" home as exactly four, the smallest it could be. So 4,852 is a floor, not the answer: the true number can only be the same or bigger. If every one of those 269 homes had five people, there would be 269 more. Saying "at least 4,852" is completely honest. Saying "4,852" would not be.' },
        { kind: 'p', html: 'Ten year olds often ask whether we could find the real number somewhere. Sometimes, from another table. But the lesson stands on its own: when a group has no top, you can give a lower bound and explain it, and that is real mathematics, not a failure.' },
        { kind: 'code', label: 'Which part of Reutlingen has the most one-person homes?', lang: 'Python', code: V2, note: 'Added below the first program, the output is <code>Most homes with one person: 010 Zentrum 61.6 %</code> and <code>Fewest homes with one person: 131 Mittelstadt 32.4 %</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Share of homes with one person, selected parts of Reutlingen, 2025 (our calculation)', head: ['Area', 'Homes', 'One-person homes, %'], rows: [
          ['010 Zentrum', '2,939', '61.6'],
          ['011 Honauer Bahn', '3,960', '50.8'],
          ['014 Schieferstr.', '3,032', '48.4'],
          ['101 Reicheneck', '412', '33.3'],
          ['091 Oferdingen', '1,077', '32.8'],
          ['131 Mittelstadt', '1,558', '32.4']
        ] },
        { kind: 'source', html: 'Data: Stadt Reutlingen, Kommunale Statistikstelle, Privathaushalte nach Haushaltsgröße auf Stadtteilebene, 2025 rows, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 3 November 2026. Shares and the lower bound are our own calculations.' },
        { kind: 'p', mt: true, html: 'In the city centre almost two homes in three have one person living in them; in Mittelstadt it is about one in three. Children love guessing why. One idea worth testing is that town-centre flats tend to be smaller than houses in the outer districts, but this file alone cannot prove it, and saying so is part of the lesson.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Ask five neighbours or relatives how many people live in their home. Make a tally with boxes 1, 2, 3 and "4 or more". Then try to work out the total number of people. Where do you get stuck?',
          '<strong>Ages 8 to 10, Scratch.</strong> Make four sliders for the four groups and a sprite that says "At least ... people". Test it with Zentrum\'s numbers.',
          '<strong>Ages 10 to 12, Python.</strong> Change the first program so it works out the "at least" number for every area in the file, then find the area with the biggest one.'
        ] }
      ]
    },
    {
      id: 'schule',
      eyebrow: 'School in Baden-Württemberg',
      h2: 'When will a Reutlingen child meet Informatik at school?',
      lede: 'In grade 5, now that Baden-Württemberg has a compulsory subject for it. The four Grundschule years come first.',
      body: [
        { kind: 'table', numCols: [], caption: 'Computing in school for a Reutlingen child', head: ['Grades', 'School', 'What happens'], rows: [
          ['1 to 4', 'Grundschule', 'Comes before the new Informatik subject'],
          ['5 and 6', 'Every secondary school type', 'The new required subject Informatik und Medienbildung (from 2025/26)'],
          ['Later grades', 'Secondary school', 'The subject is being introduced year by year']
        ] },
        { kind: 'source', html: 'The KMK describes the primary stage; the GI Informatik-Monitor 2026/27, read on 2 November 2026, describes the new BW subject and places Baden-Württemberg in the small group of Länder that already reach four required Informatik hours.' },
        { kind: 'p', mt: true, html: 'So a Reutlingen child who starts coding at 7 has three or four years of practice before the first school Informatik lesson. Our lessons are not school tutoring and give no grades; they simply let a curious child build things now, and arrive in grade 5 confident. We teach alongside school, never instead of it.' }
      ]
    },
    {
      id: 'wettbewerb',
      eyebrow: 'Contests for primary pupils',
      h2: 'Which contests can a Reutlingen primary pupil try in 2026/27?',
      lede: 'Two national ones, both run through schools: the Informatik-Biber for informatics puzzles and the Mathematik-Olympiade for maths.',
      body: [
        { kind: 'two',
          leftH3: 'Informatik-Biber',
          left: [
            'Free, open to grades 3 to 13, and no previous knowledge is needed, according to the organisers, Bundesweite Informatikwettbewerbe. It takes 30 to 40 minutes, so it fits into one school lesson.',
            'The Biberwochen 2026 run from 9 to 20 November 2026. The school registers its pupils, so the first step is a question to the class teacher.'
          ],
          rightH3: 'Mathematik-Olympiade',
          right: [
            'A national maths competition with about 200,000 participants a year, which has also been offered to primary schools since 2005, according to its organisers.',
            'The 66th Mathematik-Olympiade holds its regional round, the Regionalrunde, on 11 November 2026, after a first round at school. Again, the school is the way in.'
          ] },
        { kind: 'p', mt: true, html: 'Both contests reward the same thinking a coding class practises: read carefully, find the rule, check the edge cases. We do not reuse the organisers\' tasks. Our mentors write their own puzzles, and children who enjoy them tend to enjoy contest day too. We are not connected with either competition.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Class times',
      h2: 'What times would suit a Reutlingen child?',
      lede: 'Reutlingen afternoons are Indian evenings, so after-school lessons work well; weekend mornings are popular with younger children.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Reutlingen lesson times and the time in India', head: ['Reutlingen', 'India in winter', 'India from 28 March 2027'], rows: [
          ['15:50', '20:20', '19:20'],
          ['16:10', '20:40', '19:40'],
          ['Saturday 09:45', '14:15', '13:15'],
          ['Sunday 11:30', '16:00', '15:00']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz Germany is one hour ahead of UTC in winter and two in summer; the switch back happened on 25 October 2026 and the next switch forward is on 28 March 2027. India is always UTC+5:30: 4 h 30 later than Reutlingen in winter, 3 h 30 later in summer. Times are examples; you pick your own.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Baden-Württemberg holidays in 2026/27, as listed by the KMK', head: ['When', 'Holiday'], rows: [
          ['26 to 30 October 2026, and 31 October', 'Autumn break'],
          ['23 December 2026 to 9 January 2027', 'Christmas'],
          ['25 March 2027, and 30 March to 3 April 2027', 'Easter'],
          ['18 to 29 May 2027', 'Whitsun'],
          ['29 July to 11 September 2027', 'Summer']
        ] },
        { kind: 'source', html: 'From the Kultusministerkonferenz holiday overview for 2026/2027 (version of 9 October 2025). Lessons continue in the holidays unless you ask to pause.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'What will my child be able to do, stage by stage?',
    lede: 'Our five stages for ages 6 to 12, used to choose a group and to report progress.',
    table: { caption: 'Five coding stages for children (ours)', head: ['Stage', 'Typical age', 'Can do'], rows: [
      ['Instructions', '6 to 7', 'Gives steps so exact that a sprite follows them'],
      ['Loops', '7 to 9', 'Repeats actions instead of copying blocks'],
      ['Numbers', '8 to 10', 'Keeps a score and compares two values'],
      ['Python', '9 to 11', 'Types programs that count and decide'],
      ['Data', '10 to 12', 'Works out a result from a real file and says how sure it is']
    ] },
    left: { h3: 'For parents', ps: [
      'The household project belongs to the last stage. A child who says "at least" without being asked has understood something many adults miss.',
      'You hear about what was built and explained, not about time spent.'
    ] },
    right: { h3: 'For children', ps: [
      'If a box in a table says "or more", you cannot know the exact number. Say "at least".',
      'An honest answer with "at least" is better than an exact answer that might be wrong.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Reutlingen children',
    lede: 'Live lessons for children, all in English, with a mentor who knows them.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'From age 6', courses: [
        { code: 'REU / START / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'A short course of games and stories.' },
        { code: 'REU / START / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Logic and patterns before code.' },
        { code: 'REU / START / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Fast, confident counting.' }
      ] },
      { num: 'II', h3: 'Games', sub: 'Ages 7 to 12', courses: [
        { code: 'REU / GAME / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code inside a familiar world.' },
        { code: 'REU / GAME / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'Real game scripts in Luau.' },
        { code: 'REU / GAME / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Several game tools in one course.' }
      ] },
      { num: 'III', h3: 'Bigger projects', sub: 'Ages 9 to 12', courses: [
        { code: 'REU / BUILD / 01', slug: 'block-coding-app-development-masterclass', title: 'App making', blurb: 'Phone apps made with blocks.' },
        { code: 'REU / BUILD / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored with Python.' },
        { code: 'REU / BUILD / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'What AI is, without adult accounts.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How are the lessons organised for Reutlingen families?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Reutlingen afternoons, Monday to Friday.' },
      { time: 'Weekend mornings', l: 'Saturday or Sunday, fresh and calm.' },
      { time: 'Your own time', l: 'One to one, when it suits you.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'Your child sees the same face each week.' },
      { h3: 'Clear English', p: 'Short sentences, shown on screen.' },
      { h3: 'The child clicks', p: 'Children build; mentors guide.' },
      { h3: 'Same-age groups', p: 'Children only learn with peers.' },
      { h3: 'Parent notes', p: 'A short report every month.' },
      { h3: 'Two sizes', p: 'A group of 15 to 20, or private.' }
    ]
  },

  projectsH2: 'What our older students build',
  projectsLede: 'Where young coders can end up: work by our older students in several countries. The <a class="ag-inline-link" href="/student-labs">student labs</a> hold the full collection.',
  reviewsLede: 'What families wrote on Google, left exactly as they wrote it.',

  fees: {
    h2: 'Fees for Reutlingen families',
    lede: 'The monthly fee includes eight live lessons. We display it in euro using the rate the European Central Bank publishes for reference; your card is debited in US dollars and your bank converts that, which can shift the final figure a little.',
    free: ['A free first class', 'A puzzle and a first Scratch program', 'No card required'],
    group: ['A group of 15 to 20 children the same age', 'One regular mentor', 'Two lessons each week', 'Monthly, cancel when you like'],
    one: ['Your child alone with a mentor', 'Their own speed and projects', 'Times chosen by you']
  },

  faq: {
    eyebrow: 'Reutlingen parents ask',
    h2: 'Coding classes for kids in Reutlingen: parents\' questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. All lessons are live and taught in English only. The mentors speak slowly and clearly and adjust to your child\'s pace and accent, and they show far more than they say.' },
      { q: 'What age is right to start?', a: 'Six is a good age to begin with puzzles and Scratch, which needs no typing. Most children move on to typed Python at about 9.' },
      { q: 'Does my child need good English?', a: 'Basic English is enough to start. Coding lessons are very visual, mentors keep sentences short, and children pick up the words they need as they build.' },
      { q: 'When does Informatik start at school in Reutlingen?', a: 'In grade 5. Baden-Württemberg introduced the compulsory subject Informatik und Medienbildung in 2025/26, starting in grades 5 and 6, according to the Gesellschaft für Informatik.' },
      { q: 'When are classes in Reutlingen time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. The mentors are in India, where a Reutlingen afternoon falls in the evening.' },
      { q: 'What is the Reutlingen household project?', a: 'A Python exercise we built on Stadt Reutlingen\'s household statistics for 2025. Children find that the homes in the Zentrum area hold at least 4,852 people, and learn why a "4 or more" group only allows an "at least" answer.' },
      { q: 'Can my child take part in the Informatik-Biber?', a: 'Yes, when the school signs up. It is free, starts at grade 3, and this year the Biber weeks are 9 to 20 November 2026; the class teacher will know.' },
      { q: 'What do we need at home?', a: 'A computer with a mouse or trackpad, an internet connection and ideally headphones. For the first lessons a parent nearby helps with screen sharing.' },
      { q: 'How many children are in each group?', a: 'Between 15 and 20 children of a similar age. If you prefer, your child can have one-to-one lessons with the same mentor.' },
      { q: 'How are fees charged?', a: 'Monthly, for eight live lessons. Amounts appear in euro at the European Central Bank reference rate and are charged in US dollars, which your bank converts. The first class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'See also',
    h2: 'Related pages',
    lede: 'More reading for Reutlingen families.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our Germany hub.' },
      { href: '/coding-classes-in-baden-wuerttemberg', label: 'Coding classes in Baden-Württemberg', p: 'School rules for all of BW.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Blocks before typing.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What a ten year old can type.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Ideas by age.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A look inside our lessons.' }
    ]
  },

  start: {
    h2: 'Book a free first class for your Reutlingen child',
    lede: 'The free class follows the steps above: a puzzle, a first Scratch program, a fixed mistake and a short chat with you at the end about the right group.',
    readFirst: 'To learn more beforehand, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">our course list</a>.',
    note: 'Mentors teach live from India, in English. A WhatsApp message is the quickest way to reach us.',
    formNote: 'Free, with no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-baden-wuerttemberg', label: 'Baden-Württemberg' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'When the box says or more, say at least'
  },

  personalityCss: `
.ag-root.ag-reu .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-reu .ag-capsule { border-left-width: 4px; }
.ag-root.ag-reu .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-reu .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-reu .ag-band-head h3 { letter-spacing: -0.005em; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (BW and national pages); bwinf.de Biber pages; mathe-wettbewerbe.de Mathematik-Olympiade; KMK Ferien 2026/2027; Einheitenzeitgesetz; read 2 to 3 November 2026. Stadt Reutlingen, Kommunale Statistikstelle, Privathaushalte nach Haushaltsgröße auf Stadtteilebene, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'How many people live in central Reutlingen\'s homes: an original Python project on Stadt Reutlingen\'s 2025 household statistics in which the open "4 und mehr Personen" group allows only a lower bound (at least 4,852 people in Zentrum), plus one-person shares by area (Zentrum 61.6%, Mittelstadt 32.4%); screen-free and Scratch versions. Lesson family: an open-ended category gives a lower bound.',
    requiredMentions: ['haushalte_2025.csv', 'People living in these homes: at least 4852', 'Most homes with one person: 010 Zentrum 61.6 %', 'Fewest homes with one person: 131 Mittelstadt 32.4 %', '4 und mehr Personen', 'Regionalrunde', '9 to 20 November 2026', 'When the box says or more, say at least'],
    sources: [
      { claim: 'Reutlingen household statistics and their DL-DE BY 2.0 licence.', url: 'https://www.reutlingen.de/de/Leben/Unsere-Stadt/Daten-Fakten/Kommunale-Statistik/Open-Data' },
      { claim: 'BW compulsory Informatik und Medienbildung from 2025/26.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/baden-wuerttemberg' },
      { claim: 'Biber facts and 2026 dates.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Mathematik-Olympiade size, primary offer since 2005, regional round 11 November 2026.', url: 'https://www.mathe-wettbewerbe.de/mo' },
      { claim: 'BW holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' }
    ],
    rejectedClaims: [
      'A total number of people in Zentrum: not knowable from the file; only the lower bound is given.',
      'The city\'s migration and population-movement files: not used (migration content).',
      'Naming Reutlingen schools as sources of students: refused.',
      'German-language teaching, grades, or any link with the city, the Land, BWINF or the Mathematik-Olympiade: none.'
    ]
  }
};
