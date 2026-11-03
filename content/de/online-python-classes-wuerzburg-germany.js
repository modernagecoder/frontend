'use strict';
// Online Python classes in Würzburg (ag- city page, Germany cluster P6 row DE183, tier-2 slug shape online-python).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Spine: an honest comparison of a live online Python class with a classroom course; a Würzburg car-park project where
// the ranking depends on how each status word is defined; Bavarian Oberstufe facts; BWINF round 1 closing this month.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 Nov 2026; copies under src-pages/online-python-classes-wuerzburg-germany/):
//  - GI Informatik-Monitor 2026/27, Bayern page: G9 Oberstufe with Einführungsphase grade 11 and Qualifikationsphase
//    12 and 13 (fact 49); NTG compulsory Informatik grades 9 and 10 (70); grade 11 two compulsory lessons in every branch
//    (71); written Abitur set centrally, programming on paper, no computer work (72).
//  - km.bayern.de: nine-year Gymnasium covers grades 5 to 13 in 2025/26 (fact 63).
//  - bwinf.de: Bundeswettbewerb round 1 1 September to 23 November 2026, round 2 early 2027 to April 2027, round 3
//    September 2027 (146); group work in round 1, individual in round 2 (147); up to 21, not yet studying or working (145);
//    round 2 can count as besondere Lernleistung depending on Land and school (149).
//  - KMK FER2026_27.pdf Bayern rows. Destatis GV-ISys 31.12.2024: Würzburg 133,258; Bayern 13,248,928.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: "Parkplatzdaten Würzburg", publisher_name "Smarte Region Würzburg", notes "Informationen bereitgestellt von
//    WVV/SVG via Smart City Hub ... Daten zu Nutzung freigegeben, Nennung erwünscht" and the definitions: "belegt"
//    bedeutet: 2 oder weniger Plätze frei, "fast voll" bedeutet: >= 85% belegt UND mehr als 2 Plätze frei, ansonsten
//    "frei". Via GovData https://ckan.govdata.de/dataset/parkplatzdaten-wurzburg, portal wuerzburg.opendatasoft.com,
//    licence CC BY 4.0 on every resource. CSV export downloaded 3 November 2026, 22,038,767 bytes, sha256
//    7d656a8c87af...ec423618f, 356,842 rows (id, name, status, values_from in UTC), 18 car parks, 25 August to
//    3 November 2026.
// Our own calculations (scratchpad de/w/T5/wuerzburg: v1.py, v2.py, python3 -I): v1 prints "Car parks: 18",
// "Kranengarage 7.3 % belegt", "PP Residenz 3.4 % belegt", "Juliusspital 3.1 % belegt"; v2 prints "Juliusspital 18.2 %
// belegt or fast voll", "Kranengarage 16.7 % belegt or fast voll", "PP Residenz 13.2 % belegt or fast voll", "Never even
// fast voll: ['PH Bahnhof', 'Skyline Hill Parkhaus']". Share not "frei" by weekday in Würzburg local time (zoneinfo
// Europe/Berlin): Juliusspital Tue 27.9, Sat 10.0, Sun 0.0; Kranengarage Tue 17.0, Sat 36.5, Sun 3.4; PP Residenz Tue
// 16.5, Sat 24.2, Sun 1.2; Marktgarage Tue 9.9, Sat 28.2, Sun 1.5.
// Lesson family: read how each category is defined before you rank by it; an absolute rule (two spaces left) and a
// relative rule (85 per cent full) measure different things.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  'from collections import Counter',
  '',
  'counts = {}',
  'with open("wuerzburg_parking.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        counts.setdefault(row["car_park"], Counter())[row["status"]] += 1',
  '',
  'def share(c, labels):',
  '    return 100 * sum(c[l] for l in labels) / sum(c.values())',
  '',
  'ranked = sorted(counts, key=lambda p: share(counts[p], ["belegt"]), reverse=True)',
  'print("Car parks:", len(counts))',
  'for p in ranked[:3]:',
  '    print(p, round(share(counts[p], ["belegt"]), 1), "% belegt")'
].join('\n');

const V2 = [
  'nearly = ["belegt", "fast voll"]',
  'ranked = sorted(counts, key=lambda p: share(counts[p], nearly), reverse=True)',
  'for p in ranked[:3]:',
  '    print(p, round(share(counts[p], nearly), 1), "% belegt or fast voll")',
  'never = [p for p in counts if share(counts[p], nearly) == 0]',
  'print("Never even fast voll:", sorted(never))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Würzburg: online Python' },
  slug: 'online-python-classes-wuerzburg-germany',
  code: 'pwu',
  accent: '#2E3B56',
  accentRationale: 'Online Python classes, Würzburg: a deep slate blue #2E3B56 for the Main at dusk below the Festung Marienberg, one of the car parks in the project; contrast 9.08 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-bavaria', name: 'Bavaria' }],
  routeLabel: 'Online Python classes in Würzburg',
  title: 'Online Python Classes in Würzburg: Live Lessons in English',
  description: 'Online Python classes in Würzburg, live in English: how online compares with a classroom, Bavarian Oberstufe Informatik, and a Python project on Würzburg car parks.',
  ogDescription: 'Live online Python in English for Würzburg pupils, students and adults: what a live online class does better and worse than a classroom, how Bavaria examines Informatik, a contest round closing on 23 November 2026, and a project on Würzburg car-park data.',
  twitterDescription: 'Live online Python in English for Würzburg: online against classroom, and a car-park data project.',
  pageName: 'Online Python Classes in Würzburg',
  webPageDescription: 'A guide for Würzburg learners to live online Python classes in English, with Gesellschaft für Informatik and Bavarian ministry facts, BWINF dates and an original Python project on the Smarte Region Würzburg car-park status data.',
  courseDescription: 'Live online Python classes in English for Würzburg learners from about 12 to adult, from first programs to analysing real city data, one to one or in a batch of fifteen to twenty, with a regular mentor who matches the learner\'s pace and accent.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'Bavaria', href: '/coding-classes-in-bavaria' }],
  crumbLabel: 'Online Python in Würzburg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#compare', label: 'Online or not' },
    { href: '#parking', label: 'Parking' },
    { href: '#bavaria', label: 'Bavaria' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Würzburg &middot; Python, live online &middot; Teens and adults',
  h1: 'Online Python classes in Würzburg',
  lede: 'Is a live online Python class as good as sitting in a classroom? In some ways it is better and in some ways it is not, and we would rather say which. This page compares the two honestly, shows how Bavarian schools teach and examine Informatik, points Würzburg teenagers to a national contest round that closes this month, and builds a Python project on the status of Würzburg\'s car parks, where the answer to "which one is fullest?" depends on reading two short definitions.',
  secondaryCta: { href: '#parking', label: 'See the car-park project' },
  wa: 'Hello Modern Age Coders, I am in Würzburg and would like live online Python classes in English. Could I book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; a mentor who knows your code',
  spec: [
    ['For', 'Pupils from about 12, students, adults'],
    ['Lesson', 'Live video with screen sharing'],
    ['Language', 'Python 3, typed by you'],
    ['Group', 'Fifteen to twenty, or private'],
    ['Mentors', 'In India, teaching in English'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Online Python classes in Würzburg from Modern Age Coders are live lessons in English over video: a mentor shares the screen, watches your code as you type and adapts to your pace and accent. From the first class, pupils of about 12 and up, students and adults type their own Python, and soon handle real city data, either privately or with fifteen to twenty others.',

  picks: {
    eyebrow: 'Three Python routes',
    h2: 'Which Python course fits a Würzburg learner?',
    lede: 'A pupil heading for the Oberstufe, an adult with a job to automate, and a teenager who wants the full language.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'PWU / 01', title: 'Python for Teens', note: 'The full language for 13 to 17 year olds, with tracing by hand that matches how Bavaria examines Informatik.' },
      { course: 'informatik-abitur-course-java-python', code: 'PWU / 02', title: 'Informatik Abitur in English', note: 'For Oberstufe pupils: Java and Python practice, algorithms and paper-based exam technique, alongside school.' },
      { course: 'python-ai-automation-masterclass-college', code: 'PWU / 03', title: 'Python Automation', note: 'For adults and students: scripts that read files, clean data and save hours of repetitive work.' }
    ]
  },

  sections: [
    {
      id: 'compare',
      eyebrow: 'Online, honestly',
      h2: 'Is a live online Python class as good as a classroom course?',
      lede: 'For programming, live online has real advantages. It also has two weaknesses, which we try to design around.',
      body: [
        { kind: 'table', numCols: [], caption: 'Live online class compared with a classroom (our view)', head: ['Question', 'Live online with us', 'Typical classroom'], rows: [
          ['Who sees my code?', 'The mentor, on my shared screen, line by line', 'The teacher, when they reach my desk'],
          ['Whose computer?', 'My own, set up the way I will keep using it', 'Often a lab machine'],
          ['Travel', 'None', 'There and back'],
          ['Being with others', 'On video, less natural', 'In the room, easier'],
          ['Distractions', 'Home can be noisy; needs a quiet corner', 'Classmates and the room itself'],
          ['Language', 'English only', 'Usually German']
        ] },
        { kind: 'source', html: 'This comparison is our own opinion, not a study. It is meant to help you decide whether live online suits you, not to claim it suits everyone.' },
        { kind: 'two', mt: true,
          leftH3: 'Where online wins',
          left: [
            'Programming happens on a screen anyway. When the mentor sees your screen, they see exactly what you see: the error, the typo, the half-finished line. Nothing is lost in describing it.',
            'You also learn on the machine you will use afterwards. When the course ends, your editor, your files and your habits are already where they need to be.'
          ],
          rightH3: 'Where we work harder',
          right: [
            'Being with other learners feels less natural on video. In a batch, the mentor asks learners to show and explain their programs to each other, so the class still talks, not just listens.',
            'Concentration at home needs a quiet place and a fixed time. We keep classes to an hour, with a task every few minutes, and ask younger learners\' parents to help with the quiet corner.'
          ] },
        { kind: 'p', mt: true, html: 'Classes are taught only in English, by mentors based in India, live. They match their pace and wording to each learner and get used to each accent quickly. What we never do is hand over finished code: you plan, type, run and explain your own programs, since thinking a problem through is the skill being taught.' }
      ]
    },
    {
      id: 'parking',
      tint: 'tint',
      eyebrow: 'A real Würzburg project',
      h2: 'Which Würzburg car park is most often full?',
      lede: 'The Smarte Region Würzburg publishes the status of the city\'s car parks every few minutes as open data. It is a perfect beginner\'s dataset, because the trap is in the words, not the code.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'Parkplatzdaten Würzburg comes from the Smarte Region Würzburg, with readings supplied by WVV/SVG, and GovData records its licence as CC BY 4.0. We exported it on 3 November 2026: 356,842 readings for 18 car parks, from 25 August to 3 November 2026.',
            'Each reading has a car park, a time and one of three status words: frei, fast voll or belegt. We save these as wuerzburg_parking.csv.'
          ],
          rightH3: 'The definitions',
          right: [
            'The dataset description defines the words exactly; in its own German, "belegt" bedeutet: 2 oder weniger Plätze frei. In English: belegt means two or fewer spaces are free. "fast voll" means at least 85 per cent of spaces are taken and more than two are free. Anything else is "frei".',
            'Read those twice. One rule counts spaces; the other counts a percentage. That difference is the whole lesson.'
          ] },
        { kind: 'code', label: 'Version 1: rank by "belegt"', lang: 'Python', code: V1, note: 'It prints <code>Car parks: 18</code>, then <code>Kranengarage 7.3 % belegt</code>, <code>PP Residenz 3.4 % belegt</code> and <code>Juliusspital 3.1 % belegt</code>.' },
        { kind: 'p', mt: true, html: 'Kranengarage wins clearly: in 7.3 per cent of readings it had two or fewer spaces left. But "two spaces left" is a much easier bar to reach in a small car park than a big one. Our own arithmetic shows why: with 50 spaces, two free means 96 per cent full; with 1,000 spaces, two free means 99.8 per cent full. Ranking by "belegt" quietly favours small car parks; the file gives no sizes, so we cannot say which car parks are small.' },
        { kind: 'p', html: 'So Version 2 counts a reading as nearly full if it is either belegt or fast voll, which brings in the percentage rule as well. Then it lists any car park that never reached even fast voll.' },
        { kind: 'code', label: 'Version 2: belegt or fast voll', lang: 'Python', code: V2, note: 'It prints <code>Juliusspital 18.2 % belegt or fast voll</code>, <code>Kranengarage 16.7 % belegt or fast voll</code>, <code>PP Residenz 13.2 % belegt or fast voll</code> and <code>Never even fast voll: [\'PH Bahnhof\', \'Skyline Hill Parkhaus\']</code>.' },
        { kind: 'p', mt: true, html: 'Now Juliusspital comes first. Neither ranking is "the truth"; they answer different questions. "Where am I most likely to find no space at all?" and "Where is it most often busy?" are both reasonable, and the program must say which it answers. Splitting by day of the week, converted from the file\'s UTC times to Würzburg time, adds a second surprise: the car parks are not busy on the same days.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Share of readings belegt or fast voll, by day (our calculation, Würzburg time)', head: ['Car park', 'Tuesday', 'Saturday', 'Sunday'], rows: [
          ['Juliusspital', '27.9 %', '10.0 %', '0.0 %'],
          ['Kranengarage', '17.0 %', '36.5 %', '3.4 %'],
          ['PP Residenz', '16.5 %', '24.2 %', '1.2 %'],
          ['Marktgarage', '9.9 %', '28.2 %', '1.5 %']
        ] },
        { kind: 'source', html: 'Data: Parkplatzdaten Würzburg, Smarte Region Würzburg, data from WVV/SVG, licence CC BY 4.0, exported 3 November 2026; the status definitions are quoted from the dataset description. Rankings and shares are our own. The data does not give the number of spaces in each car park, so we do not guess sizes; the 50 and 1,000 space examples are ours.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 12 to 14.</strong> Without code: if a car park has 40 spaces, how many must be taken for it to be fast voll, and how many for belegt? Repeat for 400.',
          '<strong>Ages 15 to 17.</strong> Run both versions, then write Version 3 that ranks by fast voll alone. Predict the top car park first.',
          '<strong>Oberstufe practice.</strong> On paper, trace share() for a Counter of 6 frei, 3 fast voll and 1 belegt with each label list. Bavaria\'s Informatik Abitur rewards exactly this kind of tracing.',
          '<strong>Adults.</strong> Convert the times to Würzburg local time with zoneinfo and find the hour when Juliusspital is most often nearly full. Explain why converting matters across 25 October 2026.'
        ] }
      ]
    },
    {
      id: 'bavaria',
      eyebrow: 'Bavarian school',
      h2: 'How do Würzburg Gymnasien teach and examine Informatik?',
      lede: 'Bavaria has gone back to a nine-year Gymnasium, puts Informatik into grade 11 for everyone, and examines it on paper.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in the Bavarian Gymnasium', head: ['Stage', 'What the rules say'], rows: [
          ['Grades 5 to 13', 'The reintroduced nine-year Gymnasium covers all of them in 2025/26'],
          ['Grades 9 and 10, NTG branch', 'Compulsory Informatik'],
          ['Grade 11 (Einführungsphase)', 'Every pupil, in every branch, has two required informatics lessons a week'],
          ['Grades 12 and 13 (Qualifikationsphase)', 'Informatik as an Abitur subject where chosen'],
          ['Written Abitur', 'Set centrally; mostly programming on paper, no work at a computer']
        ] },
        { kind: 'source', html: 'Read on 2 November 2026: the Gymnasium pages of the Bavarian education ministry and the Bavarian entry in the GI Informatik-Monitor for 2026/27. Destatis counts Würzburg 133,258 and Bayern at 13,248,928 (31 December 2024). Learners from Höchberg, Veitshöchheim, Gerbrunn, Kitzingen and Ochsenfurt come under the same rules.' },
        { kind: 'two', mt: true,
          leftH3: 'Why paper matters',
          left: [
            'Because the Bavarian Informatik Abitur is written without a computer, a pupil cannot test an idea by running it. They need to read code and know what it does. In our classes we often ask for the output before anyone presses Run, and sometimes hide the Run button altogether.',
            'Our role sits next to the school, never above it: grades come from the school course and the Abitur, while we add practice time and someone to ask.'
          ],
          rightH3: 'A contest closing on 23 November 2026',
          right: [
            'Round 1 of the 45th Bundeswettbewerb Informatik runs from 1 September to 23 November 2026. It is open to young people up to 21 who are not yet studying or working, and group work is allowed in round 1. Round 2, from early 2027 to April 2027, must be done alone and, depending on Land and school, can count as the besondere Lernleistung in the Abitur.',
            'We are not connected to BWINF and never use its tasks in class; learners are pointed to the organisers\' own free archive.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When do online Python classes run in Würzburg time?',
      lede: 'Times are chosen when you book and shown in your own clock. Here is how a few Würzburg slots look for a mentor in India.',
      body: [
        { kind: 'table', numCols: [], caption: 'Würzburg slots against the Indian clock', head: ['Würzburg', 'India during German winter time', 'India during German summer time'], rows: [
          ['Tuesday 16:10', '20:40', '19:40'],
          ['Wednesday 18:00', '22:30', '21:30'],
          ['Saturday 09:15', '13:45', '12:45']
        ] },
        { kind: 'source', html: 'German winter time (MEZ) is UTC+1 and summer time (MESZ) UTC+2, under the Einheitenzeitgesetz. Winter time began on 25 October 2026; summer time returns on 28 March 2027. Indian time does not change (UTC+5:30), so the mentor\'s clock reads 4 h 30 later than Würzburg\'s in winter and 3 h 30 later in summer. The slots illustrate; they are not fixed batches.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Bavarian holidays still to come in 2026/27 (KMK table)', head: ['Break', 'Dates'], rows: [
          ['Christmas', '24 December 2026 to 8 January 2027'],
          ['Easter', '22 March to 2 April 2027'],
          ['Whitsun', '18 to 28 May 2027'],
          ['Summer', '2 August to 13 September 2027']
        ] },
        { kind: 'source', html: 'From the KMK holiday overview for 2026/2027, version of 9 October 2025, row Bayern; the autumn break ran from 2 to 6 November 2026. Classes continue in the holidays if you wish.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What can a Würzburg learner do after each stage?',
    lede: 'Five stages of our own, used to place learners and to describe progress. They are not a school or exam scale.',
    table: { caption: 'Python stages for Würzburg learners (ours)', head: ['Stage', 'The learner can'], rows: [
      ['1. Read', 'Say what a five-line program prints without running it'],
      ['2. Write', 'Write loops and conditions that work first time more often than not'],
      ['3. Count', 'Use dictionaries and Counter to summarise a file'],
      ['4. Define', 'Turn a written rule, like the belegt definition, into code and test it'],
      ['5. Question', 'Explain why two fair rankings of the same data disagree']
    ] },
    left: { h3: 'For parents and adults', ps: [
      'The car-park project lives at stage 5. Seeing that a ranking hangs on its definition is useful in any job that touches data.',
      'Progress reports describe what was built and could be explained.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you rank anything, write down exactly what the category means.',
      'If two rankings disagree, ask which question each one answers.'
    ] }
  },

  catalogue: {
    eyebrow: 'More with Python',
    h2: 'Nine more courses for Würzburg learners',
    lede: 'All taught live, in English, by a mentor who stays with you, privately or in a batch.',
    bands: [
      { num: 'I', h3: 'School years', sub: 'Grades 5 to 13', courses: [
        { code: 'PWU / SCH / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Klasse 5 to 10 support in English.' },
        { code: 'PWU / SCH / 02', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics contests', blurb: 'BwInf-style problems, written by us.' },
        { code: 'PWU / SCH / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Algorithms and data structures, step by step.' }
      ] },
      { num: 'II', h3: 'Building with Python', sub: 'Ages 13 and up', courses: [
        { code: 'PWU / BLD / 01', slug: 'python-web-development-django-flask-course', title: 'Python on the web', blurb: 'Websites built in Python, from an empty project to a working app.' },
        { code: 'PWU / BLD / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Teen projects that turn city data into charts and first predictions.' },
        { code: 'PWU / BLD / 03', slug: 'mysql-mastery-for-teens', title: 'SQL for teens', blurb: 'Databases that Python can query.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Students and professionals', courses: [
        { code: 'PWU / ADU / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'The complete language for grown-ups, beginners welcome.' },
        { code: 'PWU / ADU / 02', slug: 'pcap-python-certification-prep-course', title: 'PCAP preparation', blurb: 'Associate-level Python Institute exam topics.' },
        { code: 'PWU / ADU / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'Interview-level problem solving.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Where do live Python classes sit in a Würzburg week?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Late afternoons for Würzburg pupils.' },
      { time: 'After work', l: 'Evening slots for students and adults.' },
      { time: 'Private', l: 'Arranged with your mentor.' }
    ],
    cells: [
      { h3: 'Screen shared', p: 'The mentor sees exactly what you see.' },
      { h3: 'Your own setup', p: 'Learn on the computer you will keep using.' },
      { h3: 'Read before run', p: 'Predict the output, then check it.' },
      { h3: 'Plain English', p: 'Clear speech at a pace that suits you.' },
      { h3: 'One mentor', p: 'The same person through the course.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty learners, or one.' }
    ]
  },

  projectsH2: 'From our students',
  projectsLede: 'Work that some of our older students have finished. You will find many more on our <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews by students and parents, quoted exactly.',

  fees: {
    h2: 'Fees for online Python in Würzburg',
    lede: 'A month of classes, eight live lessons, has one fee. That fee is displayed in euro at the European Central Bank reference rate and collected in US dollars, with your bank converting it, so your statement may show a slightly different euro figure.',
    free: ['A free first class', 'A first program and your goals discussed', 'No card required'],
    group: ['Fifteen to twenty learners at a similar stage', 'A regular mentor', 'Two live lessons each week', 'Monthly, no fixed term'],
    one: ['A private mentor', 'Your pace and your projects', 'Times you choose']
  },

  faq: {
    eyebrow: 'Würzburg learners ask',
    h2: 'Online Python classes in Würzburg: frequent questions',
    items: [
      { q: 'Are the classes in German?', a: 'No, never. Lessons happen live, in English. The mentor keeps an even pace, gets used to the way you speak and says things another way if a sentence does not land. Python\'s keywords are English anyway.' },
      { q: 'Is learning Python online as effective as in a classroom?', a: 'For programming it often works well, because the mentor sees your screen and your exact error. It needs a quiet place and a fixed time at home. The free first class is the easiest way to find out if it suits you.' },
      { q: 'Does this help with the Bavarian Informatik Abitur?', a: 'With the underlying skills, yes. Bavaria writes the paper centrally and asks for code on paper, without a computer, so our lessons include plenty of hand tracing. Grades still come only from the school course and the Abitur itself.' },
      { q: 'What is the Bundeswettbewerb Informatik?', a: 'A national informatics contest for young people up to 21 who are not yet studying or working. Round 1 of the 45th contest runs from 1 September to 23 November 2026 and allows group work; round 2, in 2027, is done alone.' },
      { q: 'When are classes in Würzburg time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils usually choose late afternoons, adults evenings or Saturday mornings.' },
      { q: 'Where are the mentors based?', a: 'In India. They teach live over video. India is 4 hours 30 minutes ahead of Würzburg in winter and 3 hours 30 minutes in summer.' },
      { q: 'Do I need any software?', a: 'Only Python and a free code editor; we set both up together during lesson one. Bring a computer with a keyboard and a steady internet line.' },
      { q: 'How big are the groups?', a: 'A Würzburg batch has between fifteen and twenty people working at about the same level. Learning privately instead means two personal lessons weekly, timed around you.' },
      { q: 'How do I pay?', a: 'Each month. You see euro prices based on the reference rate of the European Central Bank, but the card is charged in US dollars and converted by your bank, so expect a small gap on the statement. Lesson one is free of charge.' },
      { q: 'Will I be allowed to use AI to write code?', a: 'In class you write your own code and explain it, because that is how you learn to think through a problem. Adults later learn how to check AI-written code with tests rather than trust it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Where Würzburg readers usually go next.',
    items: [
      { href: '/coding-classes-in-bavaria', label: 'Coding classes in Bavaria', p: 'Everything Bavaria-wide on one page.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'The national Python overview.' },
      { href: '/coding-classes-for-teens-germany', label: 'Coding for teens', p: 'Choosing a course as a teenager.' },
      { href: '/python-and-dsa-for-international-students-germany', label: 'Python and DSA for students', p: 'For university students in Germany.' },
      { href: '/math-and-coding-competitions-germany', label: 'Competitions in Germany', p: 'Contests by date and age.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live lessons explained.' }
    ]
  },

  start: {
    h2: 'Book a free online Python class',
    lede: 'Your first class is a short Python task with a mentor and a few minutes on your goals. From that, the mentor suggests a course and whether a batch or private lessons would suit you better.',
    readFirst: 'To read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Classes are live with mentors in India and taught in English only. For questions, WhatsApp us in English.',
    formNote: 'Free; no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-course-germany', label: 'Python in Germany' },
        { href: '/coding-classes-for-teens-germany', label: 'Coding for teens' },
        { href: '/python-and-dsa-for-international-students-germany', label: 'Python and DSA' },
        { href: '/math-and-coding-competitions-germany', label: 'Competitions' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-bavaria', label: 'Bavaria' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Read the definition, then rank'
  },

  personalityCss: `
.ag-root.ag-pwu .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-pwu .ag-capsule { border-left-width: 5px; border-radius: 1px; }
.ag-root.ag-pwu .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-pwu .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pwu .ag-code-note { font-size: 0.94rem; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Bayern page); Bavarian State Ministry for Education, Gymnasium page; Bundesweite Informatikwettbewerbe, Bundeswettbewerb Informatik; KMK Ferien im Schuljahr 2026/2027; Destatis 31.12.2024; Einheitenzeitgesetz; read 2 November 2026. Smarte Region Würzburg, Parkplatzdaten Würzburg, CC BY 4.0, exported 3 November 2026.',
    localProject: 'Würzburg car parks: an original Python project on 356,842 status readings for 18 car parks (25 August to 3 November 2026). Ranking by "belegt" (two or fewer spaces free) puts Kranengarage first at 7.3 per cent; counting "belegt or fast voll" (85 per cent rule) puts Juliusspital first at 18.2 per cent; two car parks never reached fast voll; by weekday, Juliusspital is busiest on weekdays and the others on Saturday. Lesson family: read how each category is defined before you rank by it.',
    requiredMentions: ['wuerzburg_parking.csv', 'Kranengarage 7.3 % belegt', 'Juliusspital 18.2 % belegt or fast voll', 'Kranengarage 16.7 % belegt or fast voll', 'Never even fast voll', '2 oder weniger Plätze frei', 'Würzburg 133,258', 'Read the definition, then rank'],
    sources: [
      { claim: 'Bavarian Gymnasium Informatik and the paper Abitur.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bayern' },
      { claim: 'Nine-year Gymnasium grades 5 to 13 in 2025/26.', url: 'https://www.km.bayern.de/lernen/schularten/gymnasium' },
      { claim: 'Bundeswettbewerb Informatik 2026/27 rounds and rules.', url: 'https://bwinf.de/bundeswettbewerb/' },
      { claim: 'Würzburg car-park status data, definitions and licence.', url: 'https://ckan.govdata.de/dataset/parkplatzdaten-wurzburg' },
      { claim: 'Bavarian holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Würzburg and Bavaria population, 31 December 2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Car-park capacities: not in the data, so the page uses our own 50 and 1,000 space examples instead.',
      'Why Juliusspital is busy on weekdays: not in the data, so no reason is given.',
      'That online learning is better for everyone: the comparison is labelled as our opinion.',
      'Any link with the Smarte Region Würzburg, WVV, BWINF or the Bavarian ministry: none.'
    ]
  }
};
