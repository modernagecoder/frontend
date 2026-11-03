'use strict';
// Online Python classes in Regensburg (ag- city page, Germany cluster P6 row DE180, tier-2 slug shape online-python).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Spine: the first month of live online Python, week by week; what Bavaria's Gymnasium and Mittelschule teach in
// Informatik and that the Bavarian Informatik Abitur is written on paper; and a Regensburg project that joins two city
// container lists by distance instead of by address text.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 Nov 2026; copies under src-pages/online-python-classes-regensburg-germany/):
//  - GI Informatik-Monitor 2026/27, Bayern page: Mittelschule "das verbindliche Fach Informatik im Umfang von je einer
//    Wochenstunde" in grades 5 to 10 (fact 69); Gymnasium Natur und Technik grades 6 and 7 one lesson with an Informatik
//    focus, NTG compulsory Informatik grades 9 and 10 (70); grade 11 "in allen Ausbildungsrichtungen verpflichtend
//    zweistündig Informatikunterricht" (71); "Die schriftlichen Abiturprüfungsaufgaben im Fach Informatik werden zentral
//    gestellt. Große Teile ... Programmieraufgaben auf Papier, jedoch keine praktischen Anteile am Rechner" (72).
//  - km.bayern.de: "Das neu eingeführte neunjährige Gymnasium umfasst im Schuljahr 2025/26 die Jahrgangsstufen 5 bis 13"
//    (fact 63).
//  - KMK FER2026_27.pdf Bayern rows: "Bayern 02.11. - 06.11. 24.12. - 08.01. -- 08.02. - 12.02. / 22.03. - 02.04.
//    18.05. - 28.05. 02.08. - 13.09." (raw text lines 19 and 20); KMK Sommerferienregelung: Bayern 2027 "02.08. - 13.09."
//    (fact 258).
//  - Destatis GV-ISys 31.12.2024: Regensburg 151,389; Bayern 13,248,928.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Regensburg (publisher_name in the GovData record), "Altglas im Stadtgebiet Regensburg" and
//    "Kleidercontainer im Stadtgebiet Regensburg", via open.bydata and GovData
//    https://ckan.govdata.de/dataset/altglas-im-stadtgebiet-regensburg and
//    https://ckan.govdata.de/dataset/kleidercontainer-im-stadtgebiet-regensburg, licence CC BY 4.0 on every resource.
//    WFS CSV exports from mapservice.regensburg.de downloaded 3 November 2026: altglas.csv 19,348 bytes, sha256
//    3600247e3918...fc9de843, 135 points; kleider.csv 15,722 bytes, sha256 56469ac16e18...364fbfda, 111 points;
//    coordinates in metres (WKT POINT x y), BEZEICHNUNG equal to LAGEBESCHREIBUNG in every row.
// Our own calculations (scratchpad de/w/T5/regensburg: v1.py, v2.py, python3 -I): v1 prints "Glass sites: 135  Clothes
// sites: 111", "Same address text: 59"; v2 prints "Clothes container within 50 m: 77", "Between 50 and 100 m: 3",
// "Closest miss: (53, 'Altglascontainer')". Blank names: 1 glass, 3 clothes; the blank-name text match is 846 m apart;
// Wöhrdstraße - Busparkplatz has the same text in both lists and is 72 m apart; Klenzestraße 4 / Klenzstraße 4 is 16 m;
// Gabelsbergerstr. 14 / Gabelsbergerstr. 11 is 18 m. 58 non-blank text matches, 57 of them also within 50 m.
// Lesson family: join two lists of places by distance with a stated tolerance, not by their text, and inspect the
// cases just inside and just outside the line.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'def load(name):',
  '    with open(name, encoding="utf-8") as f:',
  '        return [(r["place"], float(r["x"]), float(r["y"])) for r in csv.DictReader(f)]',
  '',
  'glass = load("glass.csv")',
  'clothes = load("clothes.csv")',
  'print("Glass sites:", len(glass), " Clothes sites:", len(clothes))',
  '',
  'names = {place for place, _, _ in clothes}',
  'same_text = [g for g in glass if g[0] in names]',
  'print("Same address text:", len(same_text))'
].join('\n');

const V2 = [
  'import math',
  '',
  'def nearest(site, others):',
  '    return min(math.dist(site[1:], o[1:]) for o in others)',
  '',
  'gaps = [(nearest(g, clothes), g[0]) for g in glass]',
  'within = [d for d, _ in gaps if d <= 50]',
  'print("Clothes container within 50 m:", len(within))',
  '',
  'close_misses = sorted((round(d), p) for d, p in gaps if 50 < d <= 100)',
  'print("Between 50 and 100 m:", len(close_misses))',
  'print("Closest miss:", close_misses[0])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Regensburg: online Python' },
  slug: 'online-python-classes-regensburg-germany',
  code: 'pyr',
  accent: '#695E7D',
  accentRationale: 'Online Python classes, Regensburg: a muted slate violet #695E7D for the grey-violet stone of the old town and the Danube under cloud; contrast 4.87 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-bavaria', name: 'Bavaria' }],
  routeLabel: 'Online Python classes in Regensburg',
  title: 'Online Python Classes in Regensburg: Live, in English',
  description: 'Online Python classes in Regensburg, live in English: the first month week by week, Bavarian Informatik and its paper Abitur, and a project on city containers.',
  ogDescription: 'Live online Python in English for Regensburg pupils and adults: what the first four weeks look like, how Bavarian schools teach Informatik and why its Abitur is written on paper, and a project that matches two Regensburg container lists by distance.',
  twitterDescription: 'Live online Python in English for Regensburg: the first month, Bavarian Informatik and a container map project.',
  pageName: 'Online Python Classes in Regensburg',
  webPageDescription: 'A guide for Regensburg learners to live online Python classes in English, using Gesellschaft für Informatik and Bavarian ministry facts, the KMK holiday table and an original Python project on the City of Regensburg glass and clothes container lists.',
  courseDescription: 'Live online Python classes in English for Regensburg learners from about 10 to adult, from first programs to joining real datasets, one to one or in a batch of fifteen to twenty, with a regular mentor who matches the learner\'s pace and accent.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'Bavaria', href: '/coding-classes-in-bavaria' }],
  crumbLabel: 'Online Python in Regensburg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#month', label: 'First month' },
    { href: '#containers', label: 'Recycling' },
    { href: '#bavaria', label: 'Bavaria' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Regensburg &middot; Python, taught live &middot; Pupils and adults',
  h1: 'Online Python classes in Regensburg',
  lede: 'Bavarian pupils this week are on their Herbstferien, from 2 to 6 November 2026, which makes it a good moment to look at what learning Python live online really involves. Below: the first month of classes, week by week; what Bavarian schools teach in Informatik and why the Bavarian Informatik Abitur is written on paper; and a Python project on two lists the City of Regensburg publishes, its glass containers and its clothes containers, that only lines up once you stop trusting the addresses.',
  secondaryCta: { href: '#containers', label: 'See the container project' },
  wa: 'Hello Modern Age Coders, I live in Regensburg and would like to learn Python live online in English. Can I book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; your own mentor, in English',
  spec: [
    ['For', 'Pupils from about 10, and adults'],
    ['Taught', 'Live over video, never pre-recorded'],
    ['Language', 'Python 3, written by the learner'],
    ['Size', 'Solo, or fifteen to twenty in a batch'],
    ['Mentors', 'Based in India, teaching in English'],
    ['To start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Online Python classes in Regensburg from Modern Age Coders are taught live over video, in English, by a mentor who follows the learner\'s code in real time and adapts to their pace and accent. Pupils from about 10 and adults write Python themselves from the first lesson, working up to real data projects, alone with a mentor or in a batch of fifteen to twenty, at times that suit Regensburg.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Which Python course fits a Regensburg learner?',
    lede: 'Three different reasons people in Regensburg come to Python, and the course we suggest for each.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'PYR / 01', title: 'Python for Teens', note: 'For a Gymnasium or Realschule pupil who wants more than the school lessons give: a full course from basics to classes and files.' },
      { course: 'maths-through-coding', code: 'PYR / 02', title: 'Maths through Coding', note: 'For ten to fifteen year olds who like maths: Python as a tool to test patterns, primes and probabilities.' },
      { course: 'pcep-pcap-python-certification-course', code: 'PYR / 03', title: 'PCEP and PCAP Preparation', note: 'For students and adults who want structured Python with an external exam from the Python Institute at the end.' }
    ]
  },

  sections: [
    {
      id: 'month',
      eyebrow: 'Live online, explained',
      h2: 'What happens in the first month of online Python classes?',
      lede: 'Eight live classes, two a week. This is how a typical first month runs for a new Regensburg learner in a batch; one-to-one learners move at their own speed.',
      body: [
        { kind: 'ol', items: [
          '<strong>Week 1: set up and speak.</strong> The mentor helps install Python and a free editor while everyone is on the call, then the learner writes and runs a first program within the first lesson. The second lesson is about variables, and about saying out loud what a line will do before running it.',
          '<strong>Week 2: decisions.</strong> if, elif and else, with a small quiz program the learner builds and then breaks on purpose. Error messages are read together, top to bottom, until they stop being frightening.',
          '<strong>Week 3: repetition.</strong> for and while loops. Each learner predicts how many times a loop will run, then checks. The mentor watches screens in turn and stops the class when two people hit the same mistake.',
          '<strong>Week 4: a first real file.</strong> Reading a CSV file line by line and counting something in it. For many learners this is the moment Python stops being an exercise and becomes a tool.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'What "live" means', p: 'A real mentor on a video call, a shared screen and the learner\'s own editor. Questions are answered when they come up, not in a forum days later.' },
          { h3: 'What "in English" means', p: 'All teaching is in English. The mentor speaks clearly, checks understanding with questions and adjusts to each learner\'s accent and pace. For a Regensburg pupil it doubles as English practice.' },
          { h3: 'What we will not do', p: 'Hand out finished code to copy. We teach learners to plan a program in words, predict what it does and explain it afterwards. That habit is worth more than any single program.' }
        ] },
        { kind: 'p', mt: true, html: 'The mentors live in India and teach live over video; the time table further down shows how that maps onto a Regensburg week. A batch keeps the same mentor for the whole course, so the person who reads your code in week 4 knows how you worked in week 1.' }
      ]
    },
    {
      id: 'bavaria',
      tint: 'tint',
      eyebrow: 'Informatik in Bavaria',
      h2: 'What does a Regensburg pupil learn in Informatik, and how is it examined?',
      lede: 'Bavaria spreads Informatik across several years and school types, and it examines the Abitur subject on paper. The facts below are from the Gesellschaft für Informatik and the Bavarian ministry of education.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in Bavarian schools', head: ['School and grades', 'What the rules say'], rows: [
          ['Mittelschule, grades 5 to 10', 'Informatik is required in every one of these grades, for a single weekly lesson'],
          ['Gymnasium, grades 6 and 7', 'Natur und Technik gives one of its weekly lessons an Informatik focus'],
          ['Gymnasium, NTG branch, grades 9 and 10', 'Compulsory Informatik'],
          ['Gymnasium, grade 11', 'Two compulsory lessons of informatics in every branch'],
          ['Abitur', 'Central written paper, much of it coding by hand; no computer is used']
        ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, page for Bayern, read 2 November 2026; Bavarian State Ministry for Education, Gymnasium page, which says the restored nine-year Gymnasium spans every grade from 5 up to 13 in the 2025/26 year. Population: Destatis, 31 December 2024: Regensburg 151,389, Bayern 13,248,928.' },
        { kind: 'two', mt: true,
          leftH3: 'More Informatik than most Länder',
          left: [
            'A Regensburg pupil meets computing earlier and more often than pupils in many other Länder. At the Gymnasium it starts inside Natur und Technik in grades 6 and 7, comes back in grade 11 for everyone, and is a full subject in grades 9 and 10 for those in the scientific and technological branch.',
            'What school cannot give in one lesson a week is time: time to write a hundred small programs, to get stuck and get out again. That is where live classes help.'
          ],
          rightH3: 'An Abitur written on paper',
          right: [
            'Bavaria sets the written Informatik Abitur centrally, and big sections of it ask pupils to program with a pen. A pupil has to read code, trace it and write it without pressing Run.',
            'So in our classes we often ask learners to work out a program\'s output by hand first, exactly like the paper exam asks. We teach alongside school; the school course and the Abitur remain the only things that count for grades.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'When Bavarian schools close in 2026/27 (KMK table)', head: ['First day off', 'Last day off', 'Break'], rows: [
          ['Mon 2 Nov 2026', 'Fri 6 Nov 2026', 'Herbstferien'],
          ['Thu 24 Dec 2026', 'Fri 8 Jan 2027', 'Weihnachtsferien'],
          ['Mon 8 Feb 2027', 'Fri 12 Feb 2027', 'Frühjahrsferien'],
          ['Mon 22 Mar 2027', 'Fri 2 Apr 2027', 'Osterferien'],
          ['Tue 18 May 2027', 'Fri 28 May 2027', 'Pfingstferien'],
          ['Mon 2 Aug 2027', 'Mon 13 Sep 2027', 'Sommerferien']
        ] },
        { kind: 'source', html: 'Source: KMK, Ferien im Schuljahr 2026/2027, Stand 9 October 2025, first and last holiday days for Bayern; the summer dates match the KMK long-term summer table. Live classes continue in the holidays for anyone who wants them.' }
      ]
    },
    {
      id: 'containers',
      eyebrow: 'A real Regensburg project',
      h2: 'How many Regensburg glass containers have a clothes container next to them?',
      lede: 'The City of Regensburg publishes the location of every public glass container and every clothes container as open data. Putting the two lists side by side is a classic data task, and it goes wrong in an instructive way if you match by address.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'Two datasets from the Stadt Regensburg, Altglas im Stadtgebiet Regensburg and Kleidercontainer im Stadtgebiet Regensburg, listed on GovData under the licence CC BY 4.0. We downloaded both on 3 November 2026: 135 glass container sites and 111 clothes container sites.',
            'Each site has a short description such as "Schopperplatz 4" and a position in metres. We save them as glass.csv and clothes.csv with three columns: place, x and y.'
          ],
          rightH3: 'The question',
          right: [
            'At how many glass sites can you also drop off old clothes? The quickest idea is to compare the descriptions: if both lists say "Schopperplatz 4", it is the same place.',
            'Version 1 does that with a Python set, which makes each lookup instant.'
          ] },
        { kind: 'code', label: 'Version 1: match by the address text', lang: 'Python', code: V1, note: 'It prints <code>Glass sites: 135  Clothes sites: 111</code> and <code>Same address text: 59</code>.' },
        { kind: 'p', mt: true, html: 'Fifty-nine looks precise, but read the matches and the method falls apart. One of the 59 is a site whose description is empty in both lists; Python happily treats two empty texts as equal, and those two containers are 846 metres apart. Meanwhile real neighbours are missed because people typed the same place differently: "Klenzestraße 4" in one list and "Klenzstraße 4" in the other, 16 metres apart; "Schopperplatz 4" and "Schopperplatz 4/ PP".' },
        { kind: 'p', html: 'The positions are more honest than the words. Version 2 measures, for each glass site, the distance to the nearest clothes container, and calls it a match if that is 50 metres or less. Then, because any limit is a choice, it lists the sites that only just missed.' },
        { kind: 'code', label: 'Version 2: match by distance, then look at the near misses', lang: 'Python', code: V2, note: 'It prints <code>Clothes container within 50 m: 77</code>, <code>Between 50 and 100 m: 3</code> and <code>Closest miss: (53, \'Altglascontainer\')</code>.' },
        { kind: 'p', mt: true, html: 'Seventy-seven glass sites have a clothes container within 50 metres, far more than the 59 the text found, and the near misses are worth a look. The closest one is 53 metres away at a site the glass list only calls "Altglascontainer", which no text match could ever have found. Another, "Wöhrdstraße - Busparkplatz", has identical text in both lists but the containers stand 72 metres apart on what the name suggests is a coach car park. Whether that counts as "next to" is a decision for the person asking, not for the program.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Text against distance: cases that teach something (our check)', head: ['Glass list says', 'Clothes list says', 'Metres apart'], rows: [
          ['(empty)', '(empty)', '846'],
          ['Wöhrdstraße - Busparkplatz', 'Wöhrdstraße - Busparkplatz', '72'],
          ['Klenzestraße 4', 'Klenzstraße 4', '16'],
          ['Gabelsbergerstr. 14/ Hallenbad', 'Gabelsbergerstr. 11 - bei Hallenbad', '18'],
          ['Schopperplatz 4', 'Schopperplatz 4/ PP', '2']
        ] },
        { kind: 'source', html: 'Data: Stadt Regensburg, Altglas im Stadtgebiet Regensburg and Kleidercontainer im Stadtgebiet Regensburg, licence CC BY 4.0, downloaded 3 November 2026. Distances, matches and counts are our own; positions are the coordinates in the city\'s files, in metres. Of the 58 non-empty text matches, 57 are also within 50 metres.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 10 to 13.</strong> On squared paper, mark five glass sites and five clothes sites with made-up coordinates, then count the pairs closer than two squares. Which pair would a text comparison get wrong?',
          '<strong>Ages 14 to 17.</strong> Run both versions. Add one line to Version 1 so that empty descriptions are never matched, and predict the new count before running it.',
          '<strong>Abitur practice.</strong> On paper, trace Version 2 for three glass sites and two clothes sites you invent. Write down every value of d. This is exactly the kind of tracing the Bavarian paper Abitur rewards.',
          '<strong>Adults.</strong> Try limits of 25, 50 and 100 metres and plot how the match count changes. Explain why the curve flattens.'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are the online Python classes in Regensburg time?',
      lede: 'German time changes twice a year and Indian time does not, so the same Regensburg slot moves on the mentor\'s clock.',
      body: [
        { kind: 'table', numCols: [], caption: 'Regensburg examples on the clock in India', head: ['Regensburg', 'India, until the clocks change on 28 March 2027', 'India, once German summer time starts'], rows: [
          ['Tuesday 16:45', '21:15', '20:15'],
          ['Wednesday 14:00', '18:30', '17:30'],
          ['Sunday 09:45', '14:15', '13:15']
        ] },
        { kind: 'source', html: 'Legal time in Germany comes from the Einheitenzeitgesetz: MEZ is UTC+1 and MESZ is UTC+2. Summer time ended on 25 October 2026 and returns on 28 March 2027. India keeps UTC+5:30 throughout, so it leads Regensburg by four and a half hours in winter and three and a half in summer. Slots shown are samples, not set batch times.' },
        { kind: 'p', mt: true, html: 'Your booking shows times in your own clock. Gymnasium pupils with afternoon lessons usually choose a later weekday slot or Sunday; adults often prefer a weekday evening.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What will a Regensburg learner be able to do, and when?',
    lede: 'Our own five stages, used to place learners and to report progress. Not a school or exam standard.',
    table: { caption: 'Python stages (ours)', head: ['Stage', 'Usually after', 'The learner can'], rows: [
      ['1. Run', 'Week 1', 'Write, run and change a short program'],
      ['2. Choose', 'Week 2', 'Make a program take different paths with if and else'],
      ['3. Repeat', 'Week 3', 'Write a loop and say how many times it runs'],
      ['4. Read data', 'Week 4', 'Open a CSV file and count or total something in it'],
      ['5. Join', 'Month 3 or so', 'Combine two datasets and justify how records were matched']
    ] },
    left: { h3: 'For parents and adults', ps: [
      'Stage 5 is the container project. A learner who can say "I matched by distance, with a 50 metre limit, and here are the near misses" is thinking like a professional.',
      'Progress reports describe what the learner made and could explain.'
    ] },
    right: { h3: 'For learners', ps: [
      'Two texts that look the same may not be the same place. Two that look different may be.',
      'Every limit you choose, like 50 metres, should be printed next to the answer.'
    ] }
  },

  catalogue: {
    eyebrow: 'More with Python',
    h2: 'Nine more courses for Regensburg learners',
    lede: 'Each one live, in English, with a regular mentor, solo or in a batch.',
    bands: [
      { num: 'I', h3: 'Next to school', sub: 'Grades 5 to 13', courses: [
        { code: 'PYR / SCH / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Support for school Informatik from grade 5, in English.' },
        { code: 'PYR / SCH / 02', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'Tracing and writing code by hand for the Oberstufe.' },
        { code: 'PYR / SCH / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics competitions', blurb: 'Our own problems in the style of Biber and BwInf.' }
      ] },
      { num: 'II', h3: 'Younger and curious', sub: 'Ages 9 to 17', courses: [
        { code: 'PYR / YNG / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code with drawings and games, about 9 to 12.' },
        { code: 'PYR / YNG / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Open data, charts and first models.' },
        { code: 'PYR / YNG / 03', slug: 'python-web-development-django-flask-course', title: 'Python on the web', blurb: 'Django and Flask sites built from scratch.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Students and working people', courses: [
        { code: 'PYR / ADU / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Zero to advanced at an adult pace.' },
        { code: 'PYR / ADU / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'SQL, Excel and Python for real reports.' },
        { code: 'PYR / ADU / 03', slug: 'mysql-database-complete-masterclass-college', title: 'Databases with MySQL', blurb: 'Design and query the tables your Python reads.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How do live Python classes fit around school and work in Regensburg?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Late afternoon', l: 'After a long Gymnasium day.' },
      { time: 'Sunday morning', l: 'A quieter slot for pupils and adults alike.' },
      { time: 'Private', l: 'Set with your mentor, week by week.' }
    ],
    cells: [
      { h3: 'Real time', p: 'Questions answered while you are still stuck.' },
      { h3: 'Your keyboard', p: 'You type every line yourself.' },
      { h3: 'Trace first', p: 'Predict on paper, then run.' },
      { h3: 'Clear English', p: 'Steady pace, plain words, repeated when needed.' },
      { h3: 'Same mentor', p: 'Someone who remembers last week\'s bug.' },
      { h3: 'Solo or batch', p: 'Up to twenty learners, or one.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'A small selection of projects by older students; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Students\' and parents\' Google reviews, word for word.',

  fees: {
    h2: 'Fees for online Python in Regensburg',
    lede: 'A monthly fee buys eight live classes. Euro amounts on this page are converted at the European Central Bank reference rate; the payment is processed in US dollars, which your bank changes into euro, so the booked amount can vary slightly from what you see.',
    free: ['One free first class', 'A first program and a chat about your goals', 'No card asked for'],
    group: ['Fifteen to twenty learners at a similar stage', 'A regular mentor', 'Two classes a week', 'Month by month, stop any time'],
    one: ['A mentor just for you', 'Your projects, your speed', 'Times you choose']
  },

  faq: {
    eyebrow: 'Regensburg learners ask',
    h2: 'Online Python classes in Regensburg: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Classes are live and in English only. Mentors speak clearly, adapt to your pace and accent, and check understanding as they go. Python keywords are English words, so nothing in the code changes.' },
      { q: 'What is the difference between live online classes and a video course?', a: 'A video course cannot see your screen. In a live class a mentor watches you write the code, asks what you expect it to do and helps you find your own mistake while you are still stuck.' },
      { q: 'Does Python help with the Bavarian Informatik Abitur?', a: 'It helps with the thinking. The Bavarian written Informatik Abitur is set centrally and much of it is programming on paper, so we practise tracing and writing code by hand. We teach alongside school; only the school course and the Abitur count for grades.' },
      { q: 'How much Informatik do Bavarian schools teach?', a: 'Mittelschulen teach one compulsory lesson a week in grades 5 to 10. Gymnasien teach an Informatik focus in grades 6 and 7, compulsory Informatik in grades 9 and 10 in the NTG branch, and two compulsory lessons in grade 11 for everyone.' },
      { q: 'When are classes in Regensburg time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils often pick a late afternoon or Sunday morning.' },
      { q: 'Where do the mentors teach from?', a: 'From India, live over video. India is four and a half hours ahead of Regensburg in winter and three and a half in summer.' },
      { q: 'What do I need at home?', a: 'A computer with a keyboard, a reliable connection and a free Python editor, which the mentor helps you install in the first lesson.' },
      { q: 'How many people are in a batch?', a: 'Fifteen to twenty learners at a similar stage. One-to-one lessons are available too, with two private classes a week at times you agree.' },
      { q: 'How is the fee paid?', a: 'Monthly. Prices appear in euro at the European Central Bank reference rate, the charge is in US dollars and your bank converts it, so the amount on your statement can be a little different. The first lesson is free.' },
      { q: 'Can I use AI to write my Python?', a: 'Not in class. You write and explain your own code; that is how the thinking is learned. Adults later learn to check AI-generated code critically, with tests.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Python learners in Regensburg and Bavaria.',
    items: [
      { href: '/coding-classes-in-bavaria', label: 'Coding classes in Bavaria', p: 'Bavarian rules, dates and courses.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'Our Python courses for all of Germany.' },
      { href: '/coding-classes-for-teens-germany', label: 'Coding for teens', p: 'Courses for 13 to 17 year olds.' },
      { href: '/coding-classes-for-adults-germany', label: 'Coding for adults', p: 'For learners starting later.' },
      { href: '/learn-coding-in-english-germany', label: 'Learn coding in English', p: 'Why English-language classes work.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson, described.' }
    ]
  },

  start: {
    h2: 'Book a free live Python lesson',
    lede: 'Your first lesson includes a small first program and a few minutes on what you want from Python. The mentor sees how you work and how comfortable you are in English, then suggests a course.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> covers our live classes, and <a class="ag-inline-link" href="/courses">all courses</a> lists every syllabus.',
    note: 'Classes are taught live from India, in English and nothing else. Send us a WhatsApp message in English if you have a question.',
    formNote: 'Free and without obligation; no card.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-course-germany', label: 'Python in Germany' },
        { href: '/coding-classes-for-teens-germany', label: 'Coding for teens' },
        { href: '/coding-classes-for-adults-germany', label: 'Coding for adults' },
        { href: '/learn-coding-in-english-germany', label: 'Coding in English' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-bavaria', label: 'Bavaria' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Match by metres, not by words'
  },

  personalityCss: `
.ag-root.ag-pyr .ag-hero h1 { letter-spacing: -0.006em; }
.ag-root.ag-pyr .ag-capsule { border-left-width: 3px; border-radius: 0; }
.ag-root.ag-pyr .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-pyr .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pyr .ag-steps li { margin-bottom: 0.5rem; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Bayern page); Bavarian State Ministry for Education, Gymnasium page; KMK Ferien im Schuljahr 2026/2027 and Sommerferienregelung; Destatis 31.12.2024; Einheitenzeitgesetz; read 2 November 2026. Stadt Regensburg, Altglas and Kleidercontainer im Stadtgebiet Regensburg, CC BY 4.0, downloaded 3 November 2026.',
    localProject: 'Regensburg containers: an original Python project joining the City of Regensburg\'s 135 glass container sites and 111 clothes container sites. Matching by address text gives 59, including a blank-name pair 846 m apart; matching by distance within 50 m gives 77, with 3 near misses between 50 and 100 m (closest 53 m). Lesson family: join places by distance with a stated tolerance and inspect the edge cases.',
    requiredMentions: ['glass.csv', 'Same address text: 59', 'Clothes container within 50 m: 77', 'Between 50 and 100 m: 3', 'Klenzstraße 4', 'Wöhrdstraße - Busparkplatz', 'Regensburg 151,389', 'Match by metres, not by words'],
    sources: [
      { claim: 'Bavarian Informatik by school type and grade; Abitur set centrally and on paper.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bayern' },
      { claim: 'Nine-year Gymnasium covers grades 5 to 13 in 2025/26.', url: 'https://www.km.bayern.de/lernen/schularten/gymnasium' },
      { claim: 'Bavarian school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Regensburg glass container sites and licence.', url: 'https://ckan.govdata.de/dataset/altglas-im-stadtgebiet-regensburg' },
      { claim: 'Regensburg clothes container sites and licence.', url: 'https://ckan.govdata.de/dataset/kleidercontainer-im-stadtgebiet-regensburg' },
      { claim: 'Regensburg and Bavaria population, 31 December 2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'That the 72 m Wöhrdstraße pair is or is not "the same site": the data cannot say, so the page leaves it to the person asking.',
      'Container counts as a measure of recycling: the lists give locations only, so no recycling claim is made.',
      'Any claim about Regensburg schools or universities as sources of students: refused.',
      'Any link with the City of Regensburg, the Bavarian ministry or the KMK: none.'
    ]
  }
};
