'use strict';
// Coding classes for kids in Krefeld (ag- city page, Germany cluster P6 row DE157, tier-2 shape coding-classes-for-kids =
// ages 6 to 12). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; euro shown, USD charged.
// Spine: the street with the most lamps. A tally is the first data skill a child learns (tick marks, then a Scratch list,
// then a Python dictionary), and Krefeld's 28,195 street lamps give a tally whose first "winner" is not a street at all.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - KMK: Grundschule grades 1 to 4 outside Berlin and Brandenburg (1).
//  - GI Informatik-Monitor 2026/27, NRW page: Pflichtfach Informatik "in den Jahrgangsstufen 5 und 6" at all general
//    school types (80).
//  - BWINF: Biberwochen 9 to 20 November 2026 (133); Biber primary 9 tasks in 30 minutes (132); Jugendwettbewerb
//    Informatik "Prinzipiell ist aber eine Teilnahme schon ab Jahrgangsstufe 3 möglich." (141); record 71,971 participants
//    with 7,190 first prizes (144); round 1 of 2026 ran 23 February to 8 March 2026 (139); round 3 deadline 23 November
//    2026 (143).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025), NRW: Herbst 17.10. - 31.10., Weihnachten 23.12. - 06.01., Ostern 22.03. -
//    03.04., Pfingsten 18.05., Sommer 19.07. - 31.08. (275).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Krefeld 231,406; Duisburg 502,270; Mönchengladbach 267,213;
//    Düsseldorf 618,685.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Krefeld, "Straßenlaternen Stadtgebiet Krefeld", via Open.NRW / GovData
//    (https://ckan.govdata.de/dataset/strassenlaternen-stadtgebiet-krefeldce031; GovData dataset page licence
//    "Datenlizenz Deutschland – Zero – Version 2.0"), file strassenlaternen-koordinaten.csv from offenesdatenportal.de,
//    downloaded 3 November 2026, 1,670,430 bytes, sha256 beaac652d1016b75..., 28,195 rows, Latin-1, semicolon separated,
//    columns (unnamed index);Kennzeichen;Strassenname;Hs.-Nr.;Länge;Breite. Dataset notes: lamps carry "Kennzeichen,
//    Straßennamen, Hs.-Nr. (falls zuordenbar)"; NGN Netzgesellschaft Niederrhein runs the lighting for the city, and "Die
//    Stadt Krefeld ist Eigentümerin der Beleuchtungsanlagen." Raw copy in src-pages/coding-classes-for-kids-in-krefeld-germany/.
//    Our counts: Hs.-Nr. "unset" on 17,476 rows; Strassenname "unset" on 697 rows.
// Our own calculations (scratchpad de/w/T2/run/kre/v1.py, v2.py, python3 -I, Python 3.14.8): v1 "Lamps in the file: 28195",
//  top three "unset 697", "Uerdinger Straße 306", "Ostwall 281"; v2 "Streets with at least one lamp: 1324", "Lamps with no
//  street name: 697", "Most lamps: Uerdinger Straße 306", "Streets with exactly one lamp: 17". Next: Gladbacher Straße 263,
//  Hülser Straße 216, St.-Töniser-Straße 204.
// Lesson family: tally and sort; before you crown the top of a list, check that it is a real thing and not a label.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'lamps_on = {}',
  'with open("krefeld_lamps.csv", encoding="latin-1") as f:',
  '    rows = csv.reader(f, delimiter=";")',
  '    next(rows)',
  '    for row in rows:',
  '        street = row[2]',
  '        lamps_on[street] = lamps_on.get(street, 0) + 1',
  '',
  'print("Lamps in the file:", sum(lamps_on.values()))',
  'top = sorted(lamps_on, key=lamps_on.get, reverse=True)[:3]',
  'for street in top:',
  '    print(street, lamps_on[street])'
].join('\n');

const V2 = [
  'real = {s: n for s, n in lamps_on.items() if s != "unset"}',
  'print("Streets with at least one lamp:", len(real))',
  'print("Lamps with no street name:", lamps_on["unset"])',
  'winner = max(real, key=real.get)',
  'print("Most lamps:", winner, real[winner])',
  'print("Streets with exactly one lamp:", sum(1 for n in real.values() if n == 1))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Krefeld: coding for kids' },
  slug: 'coding-classes-for-kids-in-krefeld-germany',
  code: 'ckr',
  accent: '#23396A',
  accentRationale: 'Coding classes for kids, Krefeld: a deep silk indigo #23396A, for the velvet and silk weaving that made the city known; contrast 9.14 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding classes for kids in Krefeld',
  title: 'Coding Classes for Kids in Krefeld, Live Online in English',
  description: 'Coding classes for kids in Krefeld aged 6 to 12, live online in English: Scratch to Python, Informatik in NRW from grade 5, and a street-lamp counting project.',
  ogDescription: 'Live online coding in English for Krefeld children aged 6 to 12: how tallying grows into programming, when NRW schools start Informatik, the Biber and the Jugendwettbewerb, and a project counting Krefeld\'s 28,195 street lamps.',
  twitterDescription: 'Coding for Krefeld kids aged 6 to 12, live in English, with a project on the city\'s street lamps.',
  pageName: 'Coding Classes for Kids in Krefeld',
  webPageDescription: 'A guide for Krefeld parents of children aged 6 to 12 to learning to code live online in English, using KMK, Gesellschaft für Informatik and BWINF sources and an original counting project on Stadt Krefeld\'s open street-lamp data.',
  courseDescription: 'Live online coding classes in English for Krefeld children aged 6 to 12: tallies, puzzles and Scratch for the youngest, typed Python from about 9, and small real-data projects for older children, with a regular mentor, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Krefeld',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#lamps', label: 'Lamp project' },
    { href: '#school', label: 'School' },
    { href: '#english', label: 'English' }
  ],
  eyebrow: 'Krefeld &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Krefeld',
  lede: 'Counting is the first thing a computer ever did for people, and it is the first data skill we teach children. A six year old makes tick marks, an eight year old keeps a list in Scratch, an eleven year old writes a few lines of Python that count all 28,195 street lamps in Krefeld in less than a second. This page explains that journey, how our live classes in English are arranged for children of 6 to 12, where Informatik enters the NRW timetable, and two contests your child could enter.',
  secondaryCta: { href: '#lamps', label: 'See the lamp project' },
  wa: 'Hello Modern Age Coders, our child lives in Krefeld and would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Live classes for children since 2020 &middot; 10,000+ students worldwide &middot; one patient mentor, in English',
  spec: [
    ['Ages', '6 to 12, grouped by age'],
    ['Tools', 'Tallies, Scratch, then Python'],
    ['Groups', '15 to 20 children, or one to one'],
    ['When', 'After school or weekend mornings'],
    ['Mentors', 'Based in India, teaching in English'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'For Krefeld families',
  capsule: 'Modern Age Coders runs coding classes for Krefeld children aged 6 to 12 as live online lessons in English. Younger children count, sort and build games in Scratch; from about 9 they type Python, and older children answer real questions with city data, such as which Krefeld street has the most lamps. Your child keeps the same mentor, who sets the speed and the English for them, either among 15 to 20 children of the same age band or alone.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Which course suits a Krefeld child aged 6 to 12?',
    lede: 'Three common first choices, chosen by age and by how much your child already enjoys screens and puzzles.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CKR / 01', title: 'Coding for Kids', note: 'The long course for six to twelve year olds, about 10 to 12 months in age groups: Scratch, then simple apps, with plenty of games along the way.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', code: 'CKR / 02', title: 'Describe it, then build it', note: 'For eight to twelve year olds who like to invent: describe a game in words, then build it in Scratch, with child-safe ideas about AI.' },
      { course: 'python-ai-kids-masterclass', code: 'CKR / 03', title: 'First real Python', note: 'For children of nine and up who can type. Python from lesson one, drawings, games, then small data projects like the street lamps.' }
    ]
  },

  sections: [
    {
      id: 'counting',
      eyebrow: 'From tally to code',
      h2: 'How does counting turn into coding for a child?',
      lede: 'Children already know how to count. Coding teaches them to tell a computer how to count for them, and then to check what it says.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Six to seven: tick marks', p: 'A child tallies the colours of cars passing a window, or the shapes on a page, and makes a bar chart with stickers. In class, the mentor turns this into a game: who can give the clearest counting instructions?' },
          { h3: 'Eight to nine: a list in Scratch', p: 'In Scratch, the child makes a variable that goes up by one each time a sprite is clicked, then a list of scores. Counting has become something the computer does, and the child decides when.' },
          { h3: 'Ten to twelve: a dictionary in Python', p: 'In Python, one line adds one to the right box for each item in a file of thousands. The child learns that a computer counts perfectly, and that a perfect count of the wrong thing is still wrong.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'The same idea at three ages (our lesson plan)', head: ['Age', 'Question', 'How the child answers it'], rows: [
          ['6 to 7', 'Which colour of car passed most often?', 'Tick marks on paper, then a sticker chart'],
          ['8 to 9', 'How many times did the cat get clicked?', 'A Scratch variable that grows by one'],
          ['10 to 12', 'Which Krefeld street has the most lamps?', 'A Python dictionary over 28,195 rows']
        ] },
        { kind: 'source', html: 'Our own teaching plan. Mentors adjust it to each child, and a child moves on when ready, not on a fixed date.' }
      ]
    },
    {
      id: 'lamps',
      tint: 'tint',
      eyebrow: 'A real Krefeld project',
      h2: 'Which street in Krefeld has the most street lamps?',
      lede: 'Stadt Krefeld publishes the position of every public street lamp as open data, free for anyone to use under Datenlizenz Deutschland Zero 2.0. Our oldest children count them, and learn not to trust the top of a list until they have looked at it.',
      body: [
        { kind: 'two',
          leftH3: 'What is in the file',
          left: [
            'The file has 28,195 lamps. Each row gives an identifying number (Kennzeichen), the street, a house number where one can be assigned, and the lamp\'s longitude and latitude. The city owns the lamps; the dataset notes say NGN Netzgesellschaft Niederrhein plans, builds and runs the lighting for it.',
            'Where something could not be filled in, the file writes "unset". That happens for the house number on 17,476 rows, because most lamps do not stand outside a numbered house.'
          ],
          rightH3: 'What the children ask',
          right: [
            'Which street has the most lamps? Children guess the street they live on, or the longest road they know. Then they write a program to count, street by street.',
            'The file is saved as krefeld_lamps.csv. It uses an older text encoding called Latin-1, so the program opens it that way, otherwise the ß in Straße would come out as nonsense.'
          ] },
        { kind: 'code', label: 'Version 1: count lamps per street', lang: 'Python', code: V1, note: 'It prints: <code>Lamps in the file: 28195</code>, then <code>unset 697</code>, <code>Uerdinger Straße 306</code> and <code>Ostwall 281</code>.' },
        { kind: 'p', mt: true, html: 'The program is right and the answer is wrong. The "street" with the most lamps is called unset: 697 lamps whose street name was never filled in. It is not a place in Krefeld; it is a label for "we do not know". Children enjoy this moment, because the computer did exactly what it was told and still fooled them. The fix is one line: leave out the label before choosing the winner.' },
        { kind: 'code', label: 'Version 2: leave out the label, then choose', lang: 'Python', code: V2, note: 'It prints: <code>Streets with at least one lamp: 1324</code>, <code>Lamps with no street name: 697</code>, <code>Most lamps: Uerdinger Straße 306</code> and <code>Streets with exactly one lamp: 17</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Krefeld streets with the most lamps (our count)', head: ['Street', 'Lamps'], rows: [
          ['Uerdinger Straße', '306'],
          ['Ostwall', '281'],
          ['Gladbacher Straße', '263'],
          ['Hülser Straße', '216'],
          ['St.-Töniser-Straße', '204']
        ] },
        { kind: 'source', html: 'Data: Stadt Krefeld, Straßenlaternen Stadtgebiet Krefeld, via Open.NRW and GovData, licence Datenlizenz Deutschland Zero 2.0, downloaded 3 November 2026. The dataset notes add: "Die Stadt Krefeld ist Eigentümerin der Beleuchtungsanlagen." Counts are ours. The 697 lamps without a street name are left out of the table. We are not connected with the city or the network operator.' },
        { kind: 'p', mt: true, html: 'Uerdinger Straße wins with 306 lamps, ahead of the Ostwall with 281. Then the children ask better questions on their own. Is Uerdinger Straße just very long? Does a wide road have lamps on both sides? Seventeen streets have only one lamp: are they tiny, or are their other lamps hiding among the unset ones? A tally answers one question and opens three more, which is exactly what we want a ten year old to discover.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 7, on paper.</strong> Walk down your own street with a grown-up and tally the lamps. Do it again on the other side. Add the two tallies.',
          '<strong>Ages 8 to 9, Scratch.</strong> Make a list of ten street names, some repeated, and a script that counts how often each appears. Put in one name called "unknown" five times and see what wins.',
          '<strong>Ages 10 to 12, Python.</strong> Run Version 1 and Version 2. Then find how many lamps your own street has.',
          '<strong>Extra challenge.</strong> Lamps on Ostwall: are they spread along the street or bunched? Use the longitude and latitude columns to find out.'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Krefeld schools',
      h2: 'When does Informatik start for children in Krefeld?',
      lede: 'At secondary school, in grade 5. That leaves the four primary years free for an early, playful start.',
      body: [
        { kind: 'ol', items: [
          '<strong>Grades 1 to 4, Grundschule.</strong> In NRW, as in most of Germany, primary school lasts four years, and none of them has a timetabled Informatik lesson.',
          '<strong>Grades 5 and 6, any secondary school.</strong> Here Informatik becomes a Pflichtfach. The 2026/27 edition of the Informatik-Monitor, compiled by the Gesellschaft für Informatik, lists it for all general school types in the Land.',
          '<strong>From grade 7.</strong> What follows depends on the school and on the pupil\'s choices.'
        ] },
        { kind: 'source', html: 'Checked on 2 November 2026 against the KMK\'s description of primary schooling and the NRW entry of the Informatik-Monitor. What we teach comes on top of school, not in its place, and we have no link with the Land or any Krefeld school.' },
        { kind: 'p', mt: true, html: 'A child who has spent a year or two with Scratch and a little Python before grade 5 tends to find school Informatik easy and enjoyable, and can spend the lessons on ideas rather than on where the buttons are. That is the gap our classes for 6 to 12 year olds fill: not school ahead of time, but confidence and habits.' }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Contests',
      h2: 'Which informatics contests can a Krefeld child enter?',
      lede: 'Two, both run by Bundesweite Informatikwettbewerbe and both possible from grade 3, through the school.',
      body: [
        { kind: 'table', numCols: [], caption: 'Two informatics contests open to primary-age children', head: ['Contest', 'What it is', 'Dates and facts'], rows: [
          ['Informatik-Biber', 'A puzzle quiz, no coding needed; primary pupils get 9 tasks in 30 minutes', 'Biberwochen 9 to 20 November 2026'],
          ['Jugendwettbewerb Informatik', 'Programming tasks in rounds; possible from grade 3', 'Round 3 of 2026 closes 23 November 2026; a record 71,971 took part in 2025']
        ] },
        { kind: 'source', html: 'Source: bwinf.de, Informatik-Biber 2026 and Jugendwettbewerb Informatik pages ("Prinzipiell ist aber eine Teilnahme schon ab Jahrgangsstufe 3 möglich."), read 2 November 2026. Round 1 of the 2026 Jugendwettbewerb ran from 23 February to 8 March 2026; the next first round is announced by the organiser. We are not connected with BWINF.' },
        { kind: 'p', mt: true, html: 'For most children of 8 to 10, the Biber is the natural first contest: short, friendly and solvable with clear thinking. Children who have reached typed Python can try the Jugendwettbewerb the following spring. We never copy the organisers\' tasks. Our mentors write their own practice puzzles in the same spirit and mark them as ours, and the class teacher will know whether the school takes part.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'My child is still learning English. Will a coding class work?',
      lede: 'Usually very well. Our mentors teach only in English, so they are used to children at every level.',
      body: [
        { kind: 'two',
          leftH3: 'What we do',
          left: [
            'Every class is live and in English; we do not offer German-language teaching, and we say so up front. Mentors are based in India and keep their language short and concrete with younger children: "move ten steps", "repeat four times", "what happens now?"',
            'They show far more than they explain. In Scratch and Python, the screen does most of the talking.'
          ],
          rightH3: 'What your child does',
          right: [
            'Your child listens, tries, and answers in whatever English they have. A mentor gets used to how each child speaks and gently offers the English word when a German one slips in.',
            'Over a few months, most children start to use coding words in English naturally, which is a pleasant extra on top of the coding itself.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'At what time are classes held in Krefeld?',
      lede: 'The mentors are in India, a few hours ahead, so a Krefeld afternoon is their evening. Here are three example slots.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example class times in Krefeld and in India', head: ['Krefeld', 'India, until 28 March 2027', 'India, from 28 March 2027'], rows: [
          ['15:20', '19:50', '18:50'],
          ['16:50', '21:20', '20:20'],
          ['Sunday 10:15', '14:45', '13:45']
        ] },
        { kind: 'source', html: 'Krefeld follows German legal time from the Einheitenzeitgesetz, MEZ at UTC+1 for winter and MESZ at UTC+2 for summer; clocks were turned back on 25 October 2026 and turn forward on 28 March 2027. India keeps UTC+5:30 with no change, so the difference is 4 hours 30 minutes in winter and 3 hours 30 minutes in summer. Example slots only.' },
        { kind: 'p', mt: true, html: 'NRW\'s Easter holidays run from 22 March to 3 April 2027, in the KMK list. Classes run in holidays too; families who go away simply pause.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How can I tell my child is learning?',
    lede: 'We report against these milestones of ours, with something your child made at each one.',
    table: { caption: 'Five steps we track for every Krefeld child', head: ['Step', 'Often reached at', 'What your child shows'], rows: [
      ['Instruct', '6 to 7', 'Give step-by-step instructions someone else can follow'],
      ['Tally', '7 to 8', 'Count and sort things, and draw the result'],
      ['Store', '8 to 9', 'Keep a score or a list in a Scratch program'],
      ['Type', '9 to 11', 'Write a small Python program and fix its errors'],
      ['Question', '10 to 12', 'Count a real file and spot when the top answer is not real']
    ] },
    left: { h3: 'For parents', ps: [
      'Question is the lamp project. It is a habit that helps with every chart and every "top ten" your child will ever see.',
      'Each month you get a short note: what your child built, what was hard, what comes next.'
    ] },
    right: { h3: 'For children', ps: [
      'The computer counts perfectly. You still have to check what it counted.',
      '"Unknown" is not a winner. Leave it out, then choose.'
    ] }
  },

  catalogue: {
    eyebrow: 'Other courses',
    h2: 'Nine more courses for Krefeld children',
    lede: 'Other ways in, sorted by what your child enjoys most.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 6 to 12', courses: [
        { code: 'CKR / FIRST / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'A short, complete Scratch course with real games.' },
        { code: 'CKR / FIRST / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Puzzles that build careful thinking.' },
        { code: 'CKR / FIRST / 03', slug: 'ai-literacy-for-kids-course', title: 'How AI thinks', blurb: 'Patterns, guesses and mistakes, for curious kids.' }
      ] },
      { num: 'II', h3: 'Games', sub: 'Ages 7 to 14', courses: [
        { code: 'CKR / GAME / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Coding where they already love to build.' },
        { code: 'CKR / GAME / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Make games other children can play.' },
        { code: 'CKR / GAME / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Several game tools in one course.' }
      ] },
      { num: 'III', h3: 'Numbers and making', sub: 'Ages 8 to 15', courses: [
        { code: 'CKR / MAKE / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Counting, patterns and charts with code.' },
        { code: 'CKR / MAKE / 02', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A first website, designed by your child.' },
        { code: 'CKR / MAKE / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Logic puzzles in a classic language.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'The week',
    h2: 'How live classes work for a Krefeld family',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Krefeld afternoons, from about 15:00.' },
      { time: 'Weekends', l: 'Mornings, calm for younger children.' },
      { time: 'Just one child', l: 'Private lessons on a timetable you agree.' }
    ],
    cells: [
      { h3: 'Two classes a week', p: 'About an hour, full of doing.' },
      { h3: 'The same mentor', p: 'A familiar face each time.' },
      { h3: 'Groups by age', p: 'Never six with twelve year olds.' },
      { h3: 'Hands on the mouse', p: 'Your child builds, not watches.' },
      { h3: 'Notes for parents', p: 'Short, monthly and plain.' },
      { h3: 'Holidays', p: 'Classes continue; pausing is easy.' }
    ]
  },

  projectsH2: 'What older students go on to make',
  projectsLede: 'Children who start early build real projects later. Some by our students are below; plenty more wait in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from our families and students, exactly as written.',

  fees: {
    h2: 'Fees for Krefeld families',
    lede: 'A single monthly fee buys eight live classes. To make comparison easy we quote it in euro using the European Central Bank reference rate. The card is billed in US dollars, though, and your bank changes that into euro at its own rate, so expect a small difference on your statement.',
    free: ['A free first class', 'A counting puzzle and a first program', 'No card needed'],
    group: ['15 to 20 children of a similar age', 'A regular mentor', 'Two classes a week', 'Monthly, cancel any month'],
    one: ['Your child and one mentor', 'Your child\'s own pace and projects', 'Times that suit your family']
  },

  faq: {
    eyebrow: 'Krefeld parents ask',
    h2: 'Coding classes for kids in Krefeld: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No, never. Teaching is live and in English, by mentors who work from India. With small children they keep words short and concrete, demonstrate on screen, and soon tune in to how your child talks.' },
      { q: 'How young can my child start?', a: 'Six is our youngest age. Six year olds count, sort and drag blocks in brief, playful sessions; Scratch usually follows a year or two later, and real typing in Python comes around the age of nine.' },
      { q: 'Do Krefeld primary schools teach coding?', a: 'Not as a subject. Grundschule in NRW covers grades 1 to 4 without Informatik on the timetable; the subject arrives at secondary school, where the Informatik-Monitor 2026/27 lists it as compulsory in grades 5 and 6.' },
      { q: 'When are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most Krefeld children come after school or on a weekend morning.' },
      { q: 'Can my child enter a coding contest?', a: 'Yes, usually through the school. The Informatik-Biber, open in the Biberwochen of 9 to 20 November 2026, needs no coding. The Jugendwettbewerb Informatik is possible from grade 3 for children who already program.' },
      { q: 'What do we need at home?', a: 'A computer with a keyboard, a microphone and stable internet. For the first Scratch weeks a tablet can work. All the tools are free.' },
      { q: 'How large is a group?', a: 'Each group has 15 to 20 children close in age. If your child would rather learn alone with the mentor, choose the one-to-one plan with two private classes a week.' },
      { q: 'How and in which currency do we pay?', a: 'Monthly by card, in US dollars. The fee appears on this page in euro at the European Central Bank reference rate, and your bank converts the payment. The first class is free and needs no card.' },
      { q: 'What is the street-lamp project?', a: 'A counting exercise we designed around Stadt Krefeld\'s open lamp list. Children count the city\'s 28,195 street lamps by street, find that the first winner is a label called unset, remove it, and discover that Uerdinger Straße has the most, with 306.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Krefeld families.',
    items: [
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in NRW', p: 'Schools, holidays and courses across the Land.' },
      { href: '/coding-classes-for-kids-dusseldorf', label: 'Coding for kids in Düsseldorf', p: 'The page for the Land capital.' },
      { href: '/online-coding-classes-for-kids-germany', label: 'Online coding for kids', p: 'Live online classes for children in Germany.' },
      { href: '/jugendwettbewerb-informatik-preparation', label: 'Jugendwettbewerb Informatik', p: 'Getting ready for the contest.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids', p: 'The block language for beginners.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits of AI tools.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The trial lasts about an hour: a counting puzzle, then a first small program, and a parent is welcome to sit beside a younger child. At the end you get a clear suggestion of group and course.',
    readFirst: 'If you would like to read more first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the format and the <a class="ag-inline-link" href="/courses">course list</a> shows every syllabus.',
    note: 'Classes are live online with mentors in India, in English only. WhatsApp is the quickest way to reach us.',
    formNote: 'Free and with no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/coding-classes-by-age-germany', label: 'Coding by age' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'North Rhine-Westphalia' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Unknown is not a winner'
  },

  personalityCss: `
.ag-root.ag-ckr .ag-hero h1 { letter-spacing: -0.006em; }
.ag-root.ag-ckr .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-ckr .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ckr .ag-steps li { margin-bottom: 10px; }
.ag-root.ag-ckr .ag-grid-3 h3 { letter-spacing: -0.006em; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); Bundesweite Informatikwettbewerbe, Informatik-Biber 2026 and Jugendwettbewerb Informatik; KMK Ferien 2026/2027; Einheitenzeitgesetz; Destatis GV-ISys 31.12.2024; Stadt Krefeld, Straßenlaternen Stadtgebiet Krefeld, Datenlizenz Deutschland Zero 2.0.',
    localProject: 'The lamp tally: an original counting project on Stadt Krefeld\'s 28,195 street lamps in which a per-street count first crowns a label ("unset", 697 lamps) and, with the label removed, finds Uerdinger Straße with 306 lamps among 1,324 named streets. Paper and Scratch versions for younger children. Lesson family: tally and sort; check that the winner is real.',
    requiredMentions: ['krefeld_lamps.csv', 'Lamps in the file: 28195', 'Most lamps: Uerdinger Straße 306', 'Streets with at least one lamp: 1324', 'Streets with exactly one lamp: 17', 'Eigentümerin', 'Lamps with no street name: 697', 'Unknown is not a winner'],
    sources: [
      { claim: 'Grundschule grades 1 to 4.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'NRW compulsory Informatik in grades 5 and 6.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Informatik-Biber 2026 dates.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Jugendwettbewerb Informatik from grade 3, participants and 2026 rounds.', url: 'https://bwinf.de/jugendwettbewerb/' },
      { claim: 'Krefeld street lamps and licence.', url: 'https://ckan.govdata.de/dataset/strassenlaternen-stadtgebiet-krefeldce031' }
    ],
    rejectedClaims: [
      'Why 697 lamps have no street name: not stated in the data, so no reason given.',
      'That Uerdinger Straße is the most brightly lit street: not supported; the count says nothing about brightness or length.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with Stadt Krefeld, NGN, BWINF or a school: none.'
    ]
  }
};
