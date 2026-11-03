'use strict';
// Online Python classes in Hamm (ag- city page, Germany cluster P6 row DE168, tier-2 slug shape online-python: what a
// live online lesson is, and the Python path). Owner 2026-11-02: classes are live, in English only, with mentors who
// match the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: "an online lesson, minute by minute". Hamm families ask what an online class really is before they ask about
// Python; this page answers that first, then the path by age, then NRW school Informatik, then one project on the
// city's signposted running routes in which a Python class (an object type) carries its own methods.
// Sources (read raw; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/online-python-classes-hamm-germany/):
//  - GI Informatik-Monitor 2026/27, NRW page: "An allen allgemeinbildenden Schularten wird das Pflichtfach Informatik in
//    den Jahrgangsstufen 5 und 6 unterrichtet." (FACTS 80); Grundkurs three hours, Leistungskurs five hours in the
//    Qualifikationsphase (81); "Der Einsatz eines Computers ist für die Bearbeitung der schriftlich Abituraufgaben nicht
//    vorgesehen." (82).
//  - KMK Ferienkalender 2026/27: "Nordrhein-Westfalen (3) 17.10. - 31.10. 23.12. - 06.01. -- 22.03. - 03.04. 18.05.
//    19.07. - 31.08." (FACTS 275).
//  - NRW 2027 written Abitur main dates 13 April to 5 May 2027 (FACTS 42).
//  - bwinf.de: Jugendwettbewerb Informatik from grade 3, new levels Bronze, Silber, Gold (FACTS 141, 142); Biberwochen 9 to
//    20 November 2026 (133).
//  - Destatis GV-ISys 31.12.2024: Hamm 179,968; Nordrhein-Westfalen 18,034,454 (places.tsv).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Hamm, "Laufstrecken Stadt Hamm" (GovData laufstrecken-stadt-hamm6616d, via Open.NRW), licence
//    Datenlizenz Deutschland Namensnennung 2.0 (dcat-ap.de dl-by-de/2.0), WFS layer Laufstrecke on www.hamm.de
//    (GetFeature, application/json), downloaded 3 November 2026: 20 features with lage, wegklasse, lae_oert (km),
//    shape_leng. Notes: "Die Darstellung enthält die von der Stadt Hamm ausgeschilderten Laufstrecken einschließlich
//    der Marathon- und Halbmarathonstrecke."
// Our own calculations (scratchpad de/w/T4/bin hamm_prep.py, hamm_v1.py, hamm_v2.py, hamm_v3.py; python3 -I): Routes 20;
// Longest Rund um Hamm-Mitte (42.19 km); Shortest Winterlaufstrecke Maximilianpark (1.0 km); 14 names carry a distance;
// off by 2 percent or more: 6 km Heessen 5.7 (-5.0 %), 10 km Bockum-Hövel 9.71 (-2.9 %), 2,5 km Selbachpark 2.43
// (-2.8 %), 5 km Hamm-Mitte 5.14 (2.8 %), 5 km Herringen 5.17 (3.4 %). Half marathon at 6:00 per km 2:07, at 5:15 1:51;
// marathon 4:13 and 3:41.
// Lesson family: a class bundles data with its methods; a method lives on the class, so every object gains it at once.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  "import csv",
  "",
  "class Route:",
  "    def __init__(self, name, kind, km):",
  "        self.name = name",
  "        self.kind = kind",
  "        self.km = float(km)",
  "",
  "    def __repr__(self):",
  "        return f\"{self.name} ({self.km} km)\"",
  "",
  "routes = []",
  "with open(\"hamm_routes.csv\", encoding=\"utf-8\") as file:",
  "    for line in csv.DictReader(file):",
  "        routes.append(Route(line[\"name\"], line[\"type\"], line[\"km\"]))",
  "",
  "print(\"Routes:\", len(routes))",
  "print(\"Longest:\", max(routes, key=lambda r: r.km))",
  "print(\"Shortest:\", min(routes, key=lambda r: r.km))"
].join('\n');

const V2 = [
  "def signed_km(self):",
  "    first = self.name.split()[0]           # \"10\", \"2,5\", or a word",
  "    if self.name.split()[1:2] == [\"km\"]:",
  "        return float(first.replace(\",\", \".\"))",
  "    return None",
  "",
  "def off_by(self):",
  "    nominal = self.signed_km()",
  "    if nominal is None:",
  "        return None",
  "    return round(100 * (self.km - nominal) / nominal, 1)",
  "",
  "Route.signed_km = signed_km",
  "Route.off_by = off_by",
  "",
  "named = [r for r in routes if r.signed_km() is not None]",
  "print(\"Routes with a distance in the name:\", len(named))",
  "for r in sorted(named, key=lambda r: r.off_by()):",
  "    if abs(r.off_by()) >= 2:",
  "        print(f\"  {r.name}: measured {r.km} km, {r.off_by()} %\")"
].join('\n');

const V3 = [
  "def finish(self, pace):                    # pace in minutes per km",
  "    minutes = round(self.km * pace)",
  "    return f\"{minutes // 60}:{minutes % 60:02d}\"",
  "",
  "Route.finish = finish",
  "",
  "for name in [\"Halbmarathon\", \"Rund um Hamm-Mitte\"]:",
  "    r = next(r for r in routes if r.name == name)",
  "    print(name, \"at 6:00 per km:\", r.finish(6), \" at 5:15 per km:\", r.finish(5.25))"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Hamm: online Python classes' },
  slug: 'online-python-classes-hamm-germany',
  code: 'ham',
  accent: '#7C2526',
  accentRationale: 'Online Python in Hamm: an oxblood red #7C2526 for the brick of the old Zeche Maximilian buildings in the Maximilianpark, one of the routes in the project; contrast 7.93 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Online Python classes in Hamm',
  title: 'Online Python Classes in Hamm: Live, in English, Every Age',
  description: 'Online Python classes for Hamm learners: how a live lesson in English works, the Python path from age 9 to adult, NRW Informatik, and a project on Hamm routes.',
  ogDescription: 'What a live online Python lesson in English looks like for a learner in Hamm, which course fits which age, where Python meets NRW school Informatik, and an original project on the city\'s signposted running routes.',
  twitterDescription: 'Live online Python in English for Hamm, from age 9 to adult, with a real project on Hamm running routes.',
  pageName: 'Online Python Classes in Hamm',
  webPageDescription: 'A guide for learners and parents in Hamm to live online Python classes taught in English: the shape of a lesson, the course path by age, NRW Informatik facts from the Gesellschaft für Informatik, and an original object-oriented project on Stadt Hamm\'s open data on running routes.',
  courseDescription: 'Live online Python classes in English for learners in Hamm from age 9 to adult: typed code from the first lesson, real projects on open data, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Python in Hamm',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#online', label: 'Online' },
    { href: '#path', label: 'Path' },
    { href: '#routes', label: 'Routes' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Hamm &middot; Python online &middot; Ages 9 to adult',
  h1: 'Online Python classes in Hamm',
  lede: 'Most questions we hear from Hamm start the same way: what actually happens in an online class, and can a child or a busy adult really learn programming through a screen? This page walks through one live lesson minute by minute, shows the Python path from age 9 to adult, explains where Python meets school Informatik in North Rhine-Westphalia, and ends with a project on the city\'s own running routes, where a few lines of Python find the signs that do not quite match the path.',
  secondaryCta: { href: '#routes', label: 'See the Hamm routes project' },
  wa: 'Hello Modern Age Coders, I am in Hamm and would like to try an online Python class in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; real Python, typed by the learner, taught in English',
  spec: [
    ['Language of teaching', 'English, with mentors in India'],
    ['Ages', '9 to 12, 13 to 18, adults'],
    ['Lesson', 'Sixty minutes, live video'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['You need', 'A laptop or desktop and a browser'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Online Python classes for Hamm at Modern Age Coders are live video lessons in English: the learner types real Python on their own computer while a regular mentor in India watches the code, asks questions and adjusts the pace and accent to them. Children start at 9 with Python and AI for Kids, teenagers take Python for Teens, adults the Python Masterclass. Classes run in a group of fifteen to twenty, or one to one.',

  picks: {
    eyebrow: 'The three Python courses',
    h2: 'Which Python course should a Hamm learner start with?',
    lede: 'The language is the same at every age; what changes is the speed, the projects and how much is explained before the learner tries.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'HAM / 01', title: 'Python and AI for Kids', note: 'A first typed language for children of nine to twelve: drawings with a turtle, quiz games, and a gentle start on how programs can learn.' },
      { course: 'python-complete-masterclass-teens', code: 'HAM / 02', title: 'Python for Teens', note: 'Thirteen to eighteen. Everything from variables to classes and files, with projects on real data such as the Hamm routes below.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'HAM / 03', title: 'Python Masterclass', note: 'University students and adults. Starts at zero and goes as far as automation, data and object-oriented design, around work hours.' }
    ]
  },

  sections: [
    {
      id: 'online',
      eyebrow: 'Live online, explained',
      h2: 'What happens in a live online Python class?',
      lede: 'One lesson lasts sixty minutes. The learner sits at their own computer, the mentor joins by video, and both look at the same code. Here is how the hour usually goes.',
      body: [
        { kind: 'ol', items: [
          '<strong>Minutes 0 to 5, warm-up.</strong> The mentor asks what the learner remembers from last time and shows one line of last week\'s code with a small change. What will it print now?',
          '<strong>Minutes 5 to 20, one new idea.</strong> A loop, a dictionary, a class. The mentor explains it in plain English, then writes a tiny example while the learner watches and predicts.',
          '<strong>Minutes 20 to 45, the learner drives.</strong> The learner shares their screen and types. The mentor does not take the keyboard; they ask questions, point to the line that is wrong, and wait.',
          '<strong>Minutes 45 to 55, break it on purpose.</strong> The learner changes one thing to make the program fail, reads the error message aloud, and fixes it.',
          '<strong>Minutes 55 to 60, what next.</strong> A short task for the week, small enough for twenty minutes. Parents of younger learners get a note on what was built.'
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'What a learner in Hamm needs at home', head: ['Item', 'Why'], rows: [
          ['Laptop or desktop computer', 'Typing code on a phone or tablet is too slow to learn on'],
          ['A current browser', 'For the video call and, for younger children, an online editor'],
          ['Python installed (teens and adults)', 'The mentor helps with the installation in the first class'],
          ['Headset or earphones', 'So the mentor\'s voice is clear and there is no echo'],
          ['A quiet hour', 'The same time each week makes the habit stick']
        ] },
        { kind: 'p', mt: true, html: 'Nothing is pre-recorded. If the learner is stuck, the mentor sees it on the screen within seconds, which is the main difference from a video course. In a group class of fifteen to twenty the mentor moves between screens in turn; in a one-to-one class the whole hour belongs to one learner.' }
      ]
    },
    {
      id: 'path',
      eyebrow: 'The Python path',
      h2: 'What does a learner in Hamm learn in Python, and in what order?',
      lede: 'The same ideas in the same order for everyone, with different projects and a different speed for a ten year old, a sixteen year old and an adult.',
      body: [
        { kind: 'table', numCols: [], caption: 'The Python path, by stage (ours)', head: ['Stage', 'Ideas', 'A typical project'], rows: [
          ['1', 'print, variables, input', 'A greeting program that asks your name'],
          ['2', 'if, loops, lists', 'A times-table quiz that keeps score'],
          ['3', 'functions, dictionaries, files', 'Read a small CSV file and summarise it'],
          ['4', 'classes and objects', 'A Route type with its own methods, like the project below'],
          ['5', 'libraries, data, testing', 'Charts, simple models and tests that prove the code works']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Children and teenagers',
          left: [
            'Children of nine to twelve usually need eight to ten months to reach stage 3 at a comfortable pace. Most teenagers get there in four to six months and meet classes, stage 4, before the end of their first year.',
            'A child who has done Scratch first already knows loops and conditions as blocks. Python then feels like writing the same ideas in words.'
          ],
          rightH3: 'Adults',
          right: [
            'Adults move fastest through the early stages and slowest through the habit part: practising between classes. The Python Masterclass keeps weekly tasks short for that reason.',
            'Adults who want an outside target can aim for the PCEP or PCAP certificates; we prepare learners for them, and the exams themselves are run by the Python Institute, not by us.'
          ] }
      ]
    },
    {
      id: 'nrw',
      eyebrow: 'NRW schools',
      h2: 'Where does Python meet school Informatik in North Rhine-Westphalia?',
      lede: 'Every Hamm pupil now has Informatik in grades 5 and 6; what language the school uses after that is up to the school. The facts below are from the Gesellschaft für Informatik and the KMK.',
      body: [
        { kind: 'two',
          leftH3: 'From grade 5',
          left: [
            'The Informatik-Monitor 2026/27 of the Gesellschaft für Informatik records that Informatik is a compulsory subject in grades 5 and 6 at every general school type in North Rhine-Westphalia. A Hamm child therefore meets programming ideas at about ten or eleven.',
            'In the Oberstufe, Informatik can be taken in the Qualifikationsphase as a Grundkurs with three lessons a week or as a Leistungskurs with five.'
          ],
          rightH3: 'The written Abitur',
          right: [
            'The written Informatik Abitur in NRW is set centrally, and, as the monitor puts it, a computer is not intended for working on the written tasks. Pupils write algorithms on paper, which is why reading and tracing code by hand matters as much as typing it.',
            'NRW\'s written Abitur exams in 2027 run from 13 April to 5 May 2027. We teach alongside school: the school course and its exams are the ones that count.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'NRW school holidays 2026/27 (KMK)', head: ['Holiday', 'Dates'], rows: [
          ['Herbstferien', '17 to 31 October 2026'],
          ['Weihnachtsferien', '23 December 2026 to 6 January 2027'],
          ['Osterferien', '22 March to 3 April 2027'],
          ['Pfingsten', '18 May 2027'],
          ['Sommerferien', '19 July to 31 August 2027']
        ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, North Rhine-Westphalia page; KMK, Ferienkalender 2026/27, Stand 9 October 2025; NRW Schulministerium, Zentralabitur dates for 2027; all read 2 November 2026. NRW has no winter break in 2026/27. We have no link with the Gesellschaft für Informatik, the KMK or the NRW school ministry.' },
        { kind: 'p', mt: true, html: 'For younger pupils there is a free national route too. The Jugendwettbewerb Informatik is open in principle from grade 3 and, from 2026, has three levels: Bronze for grades 5 and 6, Silber for 7 to 9 and Gold from grade 10. We do not use its tasks in class; we write our own puzzles in the same spirit and label them as ours.' }
      ]
    },
    {
      id: 'routes',
      tint: 'tint',
      eyebrow: 'A real Hamm project',
      h2: 'Do Hamm\'s running route signs match the routes? A Python class finds out',
      lede: 'Stadt Hamm publishes its signposted running routes as open data. Our teenagers and adults use them for their first object-oriented program: a Route type that carries its own data and its own methods.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset Laufstrecken Stadt Hamm contains, in the city\'s words, the running routes signposted by Stadt Hamm, including the marathon and half-marathon course. It is listed on GovData through Open.NRW under the Datenlizenz Deutschland Namensnennung 2.0, which allows reuse with credit. We downloaded the 20 routes from the city\'s map service on 3 November 2026.',
            'Each route has a name such as "10 km Rundweg Pelkum", a type such as "8-10 km Rundweg", and a measured length in kilometres. We keep those three fields in a file called hamm_routes.csv.'
          ],
          rightH3: 'The question',
          right: [
            'Fourteen route names promise a distance: 10 km, 6 km, 5 km or 2,5 km. Is the measured route really that long? A runner training for a time cares, and so does anyone who has wondered why their watch disagrees with a sign.',
            'Rather than juggling three separate lists, the program makes one object per route. Each object knows its name, its type and its length, and later learns to answer questions about itself.'
          ] },
        { kind: 'code', label: 'Step 1: a Route class and twenty objects', lang: 'Python', code: V1, note: 'It prints <code>Routes: 20</code>, <code>Longest: Rund um Hamm-Mitte (42.19 km)</code> and <code>Shortest: Winterlaufstrecke Maximilianpark (1.0 km)</code>.' },
        { kind: 'p', mt: true, html: 'The <code>__repr__</code> method is why <code>print</code> shows a readable name and length instead of a memory address. Now we add two methods: one reads the promised distance out of the name, taking care of the German decimal comma in "2,5", and one works out the difference in percent.' },
        { kind: 'code', label: 'Step 2: teach every route two new methods', lang: 'Python', code: V2, note: 'Run after Step 1. It prints <code>Routes with a distance in the name: 14</code>, then five routes from <code>6 km Rundweg Heessen: measured 5.7 km, -5.0 %</code> to <code>5 km Rundweg Herringen: measured 5.17 km, 3.4 %</code>.' },
        { kind: 'p', html: 'The interesting line is <code>Route.signed_km = signed_km</code>. The method is attached to the class, not to any single route, and all twenty objects made in Step 1 can use it at once. That is what a class is for: the data lives in each object, the behaviour lives in one place.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Routes whose measured length differs from the name by 2 percent or more (our calculation)', head: ['Route', 'In the name, km', 'Measured, km', 'Difference'], rows: [
          ['6 km Rundweg Heessen', '6', '5.70', '-5.0 %'],
          ['10 km Rundweg Bockum-Hövel', '10', '9.71', '-2.9 %'],
          ['2,5 km Rundweg Selbachpark', '2.5', '2.43', '-2.8 %'],
          ['5 km Rundweg Hamm-Mitte', '5', '5.14', '+2.8 %'],
          ['5 km Rundweg Herringen', '5', '5.17', '+3.4 %']
        ] },
        { kind: 'source', html: 'Data: Stadt Hamm, Laufstrecken Stadt Hamm, via Open.NRW and GovData, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 3 November 2026. The comparison with the names is ours. A route name is a friendly label, not a promise of precision; a difference of a few percent is normal for a signposted loop, and the city does not claim otherwise.' },
        { kind: 'code', label: 'Step 3: a method that plans a race', lang: 'Python', code: V3, note: 'Run after Steps 1 and 2. It prints <code>Halbmarathon at 6:00 per km: 2:07  at 5:15 per km: 1:51</code> and <code>Rund um Hamm-Mitte at 6:00 per km: 4:13  at 5:15 per km: 3:41</code>.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 12.</strong> Make a Route with just a name and a length, then add a method that says "short" or "long".',
          '<strong>Teenagers.</strong> Add a method <code>laps_for(target_km)</code> that says how many laps of a Winterlaufstrecke make 10 km.',
          '<strong>Adults.</strong> Turn the two attached functions into proper methods inside the class, and write a test for <code>signed_km</code> that includes "2,5 km".',
          '<strong>Everyone.</strong> Explain in one sentence why the marathon route has no number in its name, and what <code>signed_km</code> returns for it.'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are online Python classes in Hamm time?',
      lede: 'Times are set with each learner. These sample rows show how a Hamm time reads on the mentor\'s clock.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Hamm times and the matching time in India', head: ['Hamm', 'India until 28 March 2027', 'India from 28 March 2027'], rows: [
          ['14:15', '18:45', '17:45'],
          ['17:15', '21:45', '20:45'],
          ['Saturday 11:30', '16:00', '15:00'],
          ['Sunday 09:00', '13:30', '12:30']
        ] },
        { kind: 'source', html: 'German time follows the Einheitenzeitgesetz: MEZ (UTC+1) through the winter, MESZ (UTC+2) through the summer, with the change back on 25 October 2026 and the next change forward on 28 March 2027. India keeps UTC+5:30 the whole year, so the difference is four and a half hours now and three and a half hours after the spring change. No row here is a fixed batch.' },
        { kind: 'p', mt: true, html: 'Learners in Werne, Ahlen, Unna or Bergkamen take the same classes, since nothing depends on where you sit. The booking page shows each time in your own clock.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How do we know a Hamm learner is making progress?',
    lede: 'Our own checkpoints, used to report to learners and parents.',
    table: { caption: 'Python checkpoints (ours)', head: ['Checkpoint', 'The learner can show'], rows: [
      ['1', 'A program that asks a question and answers it'],
      ['2', 'A loop that stops at the right moment'],
      ['3', 'A function used three times with different inputs'],
      ['4', 'A class with two methods, used on real data'],
      ['5', 'A tested program someone else can run']
    ] },
    left: { h3: 'For parents', ps: [
      'The Hamm routes project is checkpoint 4. A learner who can explain why one method serves twenty objects has understood the idea that most beginners find hardest.',
      'We report what was built and explained, never screen hours.'
    ] },
    right: { h3: 'For learners', ps: [
      'If you keep three lists that always change together, you probably want a class.',
      'A sign on a path is a label; the measured data is the fact.'
    ] }
  },

  catalogue: {
    eyebrow: 'Beyond the first course',
    h2: 'Nine more courses for Python learners in Hamm',
    lede: 'Live, in English, with one regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Before and beside Python', sub: 'Ages 7 to 15', courses: [
        { code: 'HAM / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'The block-based first step for under-nines.' },
        { code: 'HAM / KIDS / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Puzzles that build step-by-step thinking.' },
        { code: 'HAM / KIDS / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored with Python.' }
      ] },
      { num: 'II', h3: 'School Informatik', sub: 'Klasse 5 to Abitur', courses: [
        { code: 'HAM / SCHOOL / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Alongside NRW Informatik from grade 5.' },
        { code: 'HAM / SCHOOL / 02', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'Java and Python for the Oberstufe.' },
        { code: 'HAM / SCHOOL / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python on real datasets.' }
      ] },
      { num: 'III', h3: 'For adults', sub: 'Students and professionals', courses: [
        { code: 'HAM / ADULT / 01', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP preparation', blurb: 'Towards the Python Institute certificates.' },
        { code: 'HAM / ADULT / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts that save hours at work.' },
        { code: 'HAM / ADULT / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'For interviews and deeper code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How online Python classes fit a week in Hamm',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Afternoons for pupils, from early afternoon.' },
      { time: 'After work', l: 'Early evening slots for adults.' },
      { time: '1-on-1', l: 'A time you fix with your own mentor.' }
    ],
    cells: [
      { h3: 'Two classes a week', p: 'An hour each, live, with the same mentor.' },
      { h3: 'Learner types', p: 'The mentor guides; the hands on the keys are the learner\'s.' },
      { h3: 'Short homework', p: 'Twenty minutes, so it actually gets done.' },
      { h3: 'Clear English', p: 'Plain words, repeated when asked.' },
      { h3: 'Real files', p: 'Open data from German cities, not toy lists only.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or just one.' }
    ]
  },

  projectsH2: 'What our Python students build',
  projectsLede: 'Some projects by our students; more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews left on Google by students and parents, as written.',

  fees: {
    h2: 'Fees for online Python classes in Hamm',
    lede: 'Billing is monthly, for eight classes. On this page the amount appears in euro, calculated with the European Central Bank reference rate; your card is charged in US dollars and your bank converts it, which can move the final figure slightly.',
    free: ['A free first class', 'A first Python program, typed by the learner', 'No card needed'],
    group: ['Fifteen to twenty learners at one level', 'One regular mentor', 'Two live classes a week', 'Paid by the month, stop any time'],
    one: ['One learner and one mentor', 'Pace and projects set for you', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Questions from Hamm',
    h2: 'Online Python classes in Hamm: questions people ask',
    items: [
      { q: 'Are the classes in German?', a: 'No. Classes are live and in English only. The mentors, who are based in India, speak clearly, adjust to the learner\'s pace and accent, and rephrase until it is understood. Python itself is written in English words, so the language of the lesson and the language of the code are the same.' },
      { q: 'What exactly is an online Python class?', a: 'A live video lesson of sixty minutes. The learner types Python on their own computer and shares the screen, and the mentor watches, explains and asks questions in real time. Nothing is a recording.' },
      { q: 'What age can my child start Python?', a: 'Around 9, when typing is comfortable. Younger children usually start with Scratch, where the same ideas are blocks, and move to Python and AI for Kids later.' },
      { q: 'Does my child need Python installed?', a: 'Not at first. Younger children can start in an online editor in the browser. Teenagers and adults install Python in the first class with the mentor\'s help; it is free and takes a few minutes.' },
      { q: 'When are classes in Hamm time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils often choose early afternoon or Saturday, adults an early evening.' },
      { q: 'Does this help with Informatik at school in NRW?', a: 'It helps with the thinking behind it. NRW teaches compulsory Informatik in grades 5 and 6, and the written Informatik Abitur is done on paper without a computer, so we also practise reading and tracing code by hand. The school course is the one that is graded.' },
      { q: 'Can adults in Hamm learn Python online from scratch?', a: 'Yes. The Python Masterclass starts at zero. Adults usually book early evenings or weekend mornings, and many choose one to one so the projects can match their work.' },
      { q: 'Is the running routes project real Hamm data?', a: 'Yes. It uses the dataset Laufstrecken Stadt Hamm, published by the city under the Datenlizenz Deutschland Namensnennung 2.0 and downloaded on 3 November 2026. The comparison between names and measured lengths is our own.' },
      { q: 'How many people are in a group class?', a: 'Between fifteen and twenty learners at a similar level. The one-to-one plan gives two private classes a week instead.' },
      { q: 'How do I pay, and in what currency?', a: 'Monthly. The fee is shown in euro using the European Central Bank reference rate, but the payment is taken in US dollars and converted by your bank, so the statement can differ by a little. The first class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for Python learners in Hamm and North Rhine-Westphalia.',
    items: [
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'The Land page for NRW.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'Our main Python page for Germany.' },
      { href: '/python-classes-for-kids-germany', label: 'Python classes for kids', p: 'When children are ready to type.' },
      { href: '/informatik-abitur-nrw', label: 'Informatik Abitur NRW', p: 'The NRW Abitur in Informatik.' },
      { href: '/jugendwettbewerb-informatik-preparation', label: 'Jugendwettbewerb Informatik', p: 'Getting ready for the youth contest.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our Germany pages.' }
    ]
  },

  start: {
    h2: 'Try one live Python class free',
    lede: 'The free class is a real lesson: the learner writes and runs a first program while the mentor sees how they think and how much English support helps. Then we suggest a course and a group.',
    readFirst: 'Want the details first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> covers a live class in depth, and <a class="ag-inline-link" href="/courses">the course list</a> has every syllabus.',
    note: 'All classes are live online with mentors in India and taught in English only. Message us on WhatsApp in English for a fast reply.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-course-germany', label: 'Python course in Germany' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/informatik-abitur-nrw', label: 'Informatik Abitur NRW' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding in NRW' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'A method lives on the class'
  },

  personalityCss: `
.ag-root.ag-ham .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-ham .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-ham .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-ham .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-ham .ag-code-head b { text-transform: uppercase; letter-spacing: 0.04em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); KMK Ferienkalender 2026/27; NRW Abitur dates 2027; Bundesweite Informatikwettbewerbe (Jugendwettbewerb Informatik); Destatis GV-ISys; Einheitenzeitgesetz; read 2 and 3 November 2026. Stadt Hamm, Laufstrecken Stadt Hamm, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'A method lives on the class: an original object-oriented Python project on Stadt Hamm\'s 20 signposted running routes. A Route class holds name, type and measured length; two methods attached to the class read the promised distance from the name (including the decimal comma in "2,5 km") and compute the difference, finding five routes 2 percent or more off (6 km Rundweg Heessen measures 5.7 km, -5.0 percent); a third plans half-marathon and marathon finishing times. Lesson family: a class bundles data with its methods.',
    requiredMentions: ['hamm_routes.csv', 'Routes: 20', 'Longest: Rund um Hamm-Mitte (42.19 km)', '6 km Rundweg Heessen: measured 5.7 km, -5.0 %', 'Routes with a distance in the name: 14', 'compulsory subject in grades 5 and 6', '13 April to 5 May 2027', 'A method lives on the class'],
    sources: [
      { claim: 'NRW compulsory Informatik grades 5 and 6; GK and LK hours; written Abitur without computer.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'NRW written Abitur 2027 from 13 April to 5 May.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/termine/2027' },
      { claim: 'NRW holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Jugendwettbewerb Informatik levels and grade 3 entry.', url: 'https://bwinf.de/jugendwettbewerb/' },
      { claim: 'Hamm running routes, licence DL-DE BY 2.0.', url: 'https://ckan.govdata.de/dataset/laufstrecken-stadt-hamm6616d' }
    ],
    rejectedClaims: [
      'Any claim that a route sign is wrong: the page treats names as labels and says so.',
      'Python Institute affiliation: we prepare for PCEP and PCAP, the exams are the Python Institute\'s.',
      'German-language teaching: none, said plainly.',
      'Any link with Stadt Hamm, the NRW ministry or BWINF: none.'
    ]
  }
};
