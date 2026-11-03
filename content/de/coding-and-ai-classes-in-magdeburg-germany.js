'use strict';
// Coding and AI classes in Magdeburg (ag- city page, Germany cluster P6 row DE155, tier-2 shape coding-and-ai = all ages,
// coding and AI). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; euro shown, USD charged.
// Spine: will it freeze tonight? A classifier that learns one number, then two, from Magdeburg's weather station, judged
// by misses and false alarms rather than by accuracy, because a rule that never says "frost" is right 86% of the time.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, Sachsen-Anhalt page: "An der Sekundarschule und der Gemeinschaftsschule ist für die
//    Jahrgangsstufen 6 bis 10 im Pflichtbereich je eine Wochenstunde Informatikunterricht vorgesehen." (87; Gymnasium
//    elective only); Oberstufe at KGS and Gymnasium grade 10 Einführungsphase, 11 and 12 Qualifikationsphase, G8 (58).
//    National page: Sachsen-Anhalt among six Länder "ohne einen für alle verbindlichen Informatikunterricht" (92).
//  - BWKI (bw-ki.de): Tübingen AI Center (208); Sek I and II, alone or in teams (209); written documentation, runnable code
//    and a video pitch (211); 2026 final in Tübingen on 13.11.2026 (214).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025), Sachsen-Anhalt: Herbst 19.10. - 30.10., Weihnachten 21.12. - 02.01., Winter
//    01.02. - 06.02., Ostern 22.03. - 27.03., 15.05. - 22.05., Sommer 10.07. - 20.08. (281).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Magdeburg 244,329 (Landeshauptstadt); Halle (Saale) 226,767;
//    Sachsen-Anhalt 2,135,597.
//  - AI tool ages: content/ai-tool-age-audit.json (Claude 18+; ChatGPT parent's permission under 18); no chatbot is
//    recommended to under-18s on this page.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate data, station 3126 Magdeburg
//    (tageswerte_KL_03126_18810101_20251231_hist.zip, 1,206,007 bytes, sha256 8d6ff8204e25bb5b..., listing date
//    17-Jun-2026; file produkt_klima_tag_18810101_20251231_03126.txt). Metadaten_Geographie_03126.txt: 79 m, 52.1029 N,
//    11.5826/11.5827 E since 22 June 1946. Metadaten_Parameter: NM "Tagesmittel des Bedeckungsgrades" in "Achtel"; TMK
//    daily mean air temperature; TNK daily minimum at 2 m. Licence: Terms_of_use.pdf "The Creative Commons BY 4.0 - Licence
//    "CC BY 4.0" apply." (Status Mai 2024). Raw copies in src-pages/coding-and-ai-classes-in-magdeburg-germany/.
//    Our extract magdeburg_days.csv (date, mean = TMK, cloud = NM, low = TNK) from 6 April 2006 to 31 December 2025, 7,210
//    days, 60 cells with -999 (missing).
// Our own calculations (scratchpad de/w/T2/run/mag/v1.py, v2.py, python3 -I, Python 3.14.8): pairs (today, did tomorrow's
//  minimum fall below 0 C), training before 2020, test 2020 to 2025.
//  v1: "Training days: 4981  test days: 2168", "Learned rule: frost tomorrow if today's mean is at or below 2.8 C", "On the
//  test years (hits, misses, false alarms): (193, 113, 89)".
//  v2: "Two-number rule: base 1.2 C, plus 0.8 C for every clear eighth of sky", "On the test years: (200, 106, 78)", "Frost
//  nights in the test years: 306 of 2168". Never-frost rule: 1,862 of 2,168 right (85.9%); v1 rule 1,966 right (90.7%);
//  v2 rule 1,984 right (91.5%).
// Lesson family: misses and false alarms, not accuracy; a rare event makes "always no" look clever.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'days = []',
  'with open("magdeburg_days.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        days.append((row["date"], float(row["mean"]), float(row["cloud"]), float(row["low"])))',
  '',
  'pairs = []                       # today\'s weather, and did tomorrow freeze?',
  'for today, tomorrow in zip(days, days[1:]):',
  '    if -999 not in (today[1], today[2], tomorrow[3]):',
  '        pairs.append((today[0], today[1], today[2], tomorrow[3] < 0))',
  '',
  'train = [p for p in pairs if p[0] < "2020"]',
  'test = [p for p in pairs if p[0] >= "2020"]',
  '',
  'def score(rule, data):',
  '    hits = sum(1 for p in data if rule(p) and p[3])',
  '    misses = sum(1 for p in data if not rule(p) and p[3])',
  '    alarms = sum(1 for p in data if rule(p) and not p[3])',
  '    return hits, misses, alarms',
  '',
  '# learn one number: the mean temperature below which we say "frost tomorrow"',
  'chosen_t, fewest = None, None',
  'for tenth in range(-100, 101):',
  '    t = tenth / 10',
  '    hits, misses, alarms = score(lambda p: p[1] <= t, train)',
  '    if fewest is None or misses + alarms < fewest:',
  '        chosen_t, fewest = t, misses + alarms',
  '',
  'print("Training days:", len(train), " test days:", len(test))',
  'print("Learned rule: frost tomorrow if today\'s mean is at or below", chosen_t, "C")',
  'print("On the test years (hits, misses, false alarms):", score(lambda p: p[1] <= chosen_t, test))'
].join('\n');

const V2 = [
  '# clear skies let heat escape at night: allow a warmer day to count when the sky is clearer',
  'choice, fewest = None, None',
  'for tenth in range(-100, 101):',
  '    for step in range(0, 21):',
  '        t, extra = tenth / 10, step / 10',
  '        rule = lambda p: p[1] <= t + extra * (8 - p[2])',
  '        hits, misses, alarms = score(rule, train)',
  '        if fewest is None or misses + alarms < fewest:',
  '            choice, fewest = (t, extra), misses + alarms',
  '',
  't, extra = choice',
  'print("Two-number rule: base", t, "C, plus", extra, "C for every clear eighth of sky")',
  'print("On the test years:", score(lambda p: p[1] <= t + extra * (8 - p[2]), test))',
  'print("Frost nights in the test years:", sum(1 for p in test if p[3]), "of", len(test))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Magdeburg: coding and AI' },
  slug: 'coding-and-ai-classes-in-magdeburg-germany',
  code: 'mac',
  accent: '#4B2D3C',
  accentRationale: 'Coding and AI classes, Magdeburg: a dark sandstone plum #4B2D3C, for the stone of the cathedral above the Elbe; contrast 9.80 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-saxony-anhalt', name: 'Saxony-Anhalt' }],
  routeLabel: 'Coding and AI classes in Magdeburg',
  title: 'Coding and AI Classes in Magdeburg: Live Online, in English',
  description: 'Coding and AI classes in Magdeburg for children, teens and adults, live online in English: Informatik in Saxony-Anhalt, and a frost forecast on city weather data.',
  ogDescription: 'Live online coding and AI in English for Magdeburg learners of all ages: where Informatik is and is not compulsory in Sachsen-Anhalt, what our AI lessons actually build, and a project that teaches a computer to warn of frost from twenty years of Magdeburg weather.',
  twitterDescription: 'Coding and AI for all ages in Magdeburg, live in English, with a frost-warning model built on the city\'s weather station.',
  pageName: 'Coding and AI Classes in Magdeburg',
  webPageDescription: 'A guide for Magdeburg children, teenagers, adults and parents to learning coding and AI live online in English, built on Gesellschaft für Informatik, KMK, BWKI and Deutscher Wetterdienst sources, with an original classification project on the Magdeburg weather station.',
  courseDescription: 'Live online coding and AI classes in English for Magdeburg: Scratch and Python for children, Python, data and machine learning for teenagers, and applied AI for adults, with one regular mentor, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Coding and AI in Magdeburg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#frost', label: 'Frost model' },
    { href: '#school', label: 'School' },
    { href: '#ages', label: 'Ages' }
  ],
  eyebrow: 'Magdeburg &middot; Coding and AI &middot; Children, teens, adults',
  h1: 'Coding and AI classes in Magdeburg',
  lede: 'Here is a question a Magdeburg gardener, cyclist or parent asks every autumn evening: will it freeze tonight? It is also a perfect first machine-learning problem, because the answer is a simple yes or no and the city\'s weather station has written down the result every day for decades. On this page you will see how we use it to teach AI honestly, what Informatik looks like at schools in Sachsen-Anhalt, and how our live classes in English work for children, teenagers and adults.',
  secondaryCta: { href: '#frost', label: 'See the frost model' },
  wa: 'Hello Modern Age Coders, I am in Magdeburg and would like to know more about your live coding and AI classes in English. Could I book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students worldwide &middot; 4.9 from about 547 Google reviews',
  spec: [
    ['Learners', 'Children from 8, teens, adults'],
    ['Core', 'Python, data and machine learning'],
    ['Lessons', 'Live on video, two a week'],
    ['Size', '15 to 20 learners, or one to one'],
    ['Language', 'English, mentors in India'],
    ['Trial', 'Free first class']
  ],
  capsuleQ: 'Short version',
  capsule: 'Modern Age Coders teaches coding and AI to Magdeburg learners of every age in live online classes held in English. Children begin with Scratch and Python; teenagers learn Python, data and machine learning; adults learn to build and judge AI models for work. A regular mentor matches each learner\'s pace and accent, and you choose a group of 15 to 20 or one-to-one lessons, at times from mid afternoon to the weekend.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Which AI course is right for which learner in Magdeburg?',
    lede: 'A course without code for teenagers who want to see machine learning first, a Python route for teenagers who want to build it, and a full course for adults.',
    items: [
      { course: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'MAC / 01', title: 'Visual Machine Learning for Teens', note: 'Machine learning with drag-and-drop blocks before any code, so teenagers grasp training, testing and errors first. A gentle bridge to Python.' },
      { course: 'ai-ml-masterclass-teens', code: 'MAC / 02', title: 'Machine learning in Python, ages 13 to 18', note: 'Python from the ground up, then real datasets and models, tested the honest way. Projects like the frost forecast below.' },
      { course: 'ai-ml-masterclass-complete-college', code: 'MAC / 03', title: 'Grown-up route: AI and ML in depth', note: 'For adults and students. Classic machine learning, neural networks and where generative AI fits, with code you write yourself.' }
    ]
  },

  sections: [
    {
      id: 'frost',
      tint: 'tint',
      eyebrow: 'A real Magdeburg project',
      h2: 'Can a computer learn to warn Magdeburg of frost?',
      lede: 'The Deutscher Wetterdienst publishes daily records from its Magdeburg station, number 3126, free to reuse with attribution (CC BY 4.0). Learners from about 14 upward take roughly twenty years of them to build a frost warning, and then learn the hardest lesson in AI: how to tell whether it is any good.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The station sits 79 metres above sea level at the same spot since 1946. From its daily file we keep three columns from 6 April 2006 to 31 December 2025: the day\'s mean temperature, the mean cloud cover in eighths of the sky, and the lowest temperature, 7,210 days in all.',
            'The DWD marks a missing value as -999, and our first program skips any day with one.'
          ],
          rightH3: 'The task',
          right: [
            'From today\'s mean temperature, and later today\'s cloud, guess whether tomorrow\'s lowest temperature will be below 0 °C. Learn the rule from the years before 2020, then test it on 2020 to 2025, years it has never seen.',
            'Every guess is either a hit (frost warned, frost came), a miss (no warning, frost came) or a false alarm (warning, no frost). We count all three.'
          ] },
        { kind: 'code', label: 'Version 1: learn one number', lang: 'Python', code: V1, note: 'It prints: <code>Training days: 4981  test days: 2168</code>, <code>Learned rule: frost tomorrow if today\'s mean is at or below 2.8 C</code> and <code>On the test years (hits, misses, false alarms): (193, 113, 89)</code>.' },
        { kind: 'p', mt: true, html: 'The computer tried every threshold from -10 to +10 °C in tenths and kept the one with the fewest mistakes on the training years: warn of frost when today\'s mean is 2.8 °C or colder. On the six test years it warned correctly 193 times, missed 113 frosts and raised 89 false alarms. Is that good? Here is the trap. Frost came on only 306 of the 2,168 test nights, so a lazy rule that always says "no frost" is right 1,862 times, 85.9 percent. Our rule is right 1,966 times, 90.7 percent. Better, but the percentage hides the part that matters: the lazy rule misses every single frost.' },
        { kind: 'code', label: 'Version 2: let the sky help', lang: 'Python', code: V2, note: 'It prints: <code>Two-number rule: base 1.2 C, plus 0.8 C for every clear eighth of sky</code>, <code>On the test years: (200, 106, 78)</code> and <code>Frost nights in the test years: 306 of 2168</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4], caption: 'Three frost rules on the test years 2020 to 2025, Magdeburg station 3126 (our calculation)', head: ['Rule', 'Frosts warned', 'Frosts missed', 'False alarms', 'Right overall'], rows: [
          ['Always say "no frost"', '0', '306', '0', '85.9%'],
          ['One number: mean at or below 2.8 °C', '193', '113', '89', '90.7%'],
          ['Two numbers: temperature and clear sky', '200', '106', '78', '91.5%']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, daily climate data, station 3126 Magdeburg, file to 31 December 2025, reused under CC BY 4.0 and fetched on 3 November 2026. "Frost" here means a daily minimum below 0 °C at 2 metres. The rules, the training and test split and all counts are ours, for teaching; they are not a weather service.' },
        { kind: 'p', mt: true, html: 'Clear nights lose heat to the sky, so the second rule allows a slightly warmer day to count as frost risk when there are few clouds: the base of 1.2 °C rises by 0.8 °C for every clear eighth. It catches seven more frosts and gives eleven fewer false alarms. Small gains, honestly measured, are what real machine learning mostly looks like. Learners then ask the question that matters for any AI system: who pays for a miss, and who pays for a false alarm? A gardener might accept many false alarms to save the plants; a road service with a gritting budget might not.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Run and read.</strong> Run Version 1 and explain in your own words what 113 means.',
          '<strong>Change what counts.</strong> Make a miss count twice as much as a false alarm while learning. What threshold does the computer choose now?',
          '<strong>Add a feature.</strong> Try yesterday\'s lowest temperature as a second number instead of cloud. Does it help more?',
          '<strong>For younger learners.</strong> On paper, sort ten made-up days into "frost" and "no frost" by temperature alone, then find the day your rule gets wrong.'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Schools in Sachsen-Anhalt',
      h2: 'Is Informatik compulsory at Magdeburg schools?',
      lede: 'It depends on the school type. That is unusual, and it is worth knowing which side of the line your child is on.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik by school type in Sachsen-Anhalt', head: ['School type', 'Grades 5 to 10', 'Oberstufe'], rows: [
          ['Sekundarschule, Gemeinschaftsschule', 'One compulsory lesson a week in grades 6 to 10, plus an hour brought forward into grade 5', 'Where offered'],
          ['Gymnasium', 'Elective only', 'Grade 10 Einführungsphase, 11 and 12 Qualifikationsphase (G8)']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Sachsen-Anhalt page ("für die Jahrgangsstufen 6 bis 10 im Pflichtbereich je eine Wochenstunde Informatikunterricht") and national overview, read 2 November 2026. The monitor counts Sachsen-Anhalt among six Länder "ohne einen für alle verbindlichen Informatikunterricht". Modern Age Coders has no tie to the Land, the KMK or any Magdeburg school.' },
        { kind: 'p', mt: true, html: 'So a pupil at a Magdeburg Sekundarschule has an hour of Informatik a week from grade 6, while a pupil at a Gymnasium may go through Sekundarstufe I without any, unless they choose it. For a Gymnasium pupil who is curious about programming or AI, outside lessons fill a real gap. For a Sekundarschule pupil, they add depth to the weekly hour. Either way our lessons run next to school, never in place of it; marks and the Abitur are decided by the school course alone.' },
        { kind: 'p', html: 'Teenagers who want a challenge can aim at the Bundeswettbewerb Künstliche Intelligenz. The Tübingen AI Center organises it for Sekundarstufe I and II, accepting solo entries and teams, and every entry needs a written report, code that runs and a brief video. This year\'s finalists meet in Tübingen on 13 November 2026; dates for the following year appear on the contest\'s own site. We can coach method and testing; the project must stay the pupil\'s own, and we have no link with the competition.' }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'For every age',
      h2: 'What do children, teenagers and adults each learn?',
      lede: 'One idea runs through all three: learn from examples, test on new ones, and look hard at the mistakes. The tools change with age.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Children, 8 to 12', p: 'Scratch first, then typed Python. Around ten, children build a game that sorts animals by size or sounds by loudness and learn that the computer is following a rule they chose. No chatbot accounts; children build the "AI" themselves and see how it works.' },
          { h3: 'Teenagers, 13 to 18', p: 'Python, files and real data, then models like the frost rule. Teenagers learn to split training and test data, to count misses and false alarms, and to write down what a model cannot know. Good preparation for school Informatik and for the BWKI.' },
          { h3: 'Adults', p: 'Practical Python, data handling and machine learning, with time to understand rather than just copy. Adults in Magdeburg bring questions from work or hobbies and leave able to judge an AI claim by asking how it was tested.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'From first program to judged model, by age (our plan)', head: ['Step', 'Children', 'Teens', 'Adults'], rows: [
          ['Give exact instructions', 'Scratch, weeks 1 to 6', 'Python, weeks 1 to 3', 'Python, weeks 1 to 2'],
          ['Store examples in data', 'Lists in Scratch', 'Lists and CSV files', 'CSV files and tables'],
          ['Learn a rule', 'A threshold chosen by the child', 'A threshold found by search', 'Search, then library models'],
          ['Test fairly', 'Try it on new examples', 'Separate test years', 'Test sets and error measures'],
          ['Judge the cost of mistakes', 'Which mistake is worse?', 'Misses versus false alarms', 'Costs written into the model']
        ] },
        { kind: 'source', html: 'This table is our plan, not an official curriculum. Where a learner starts is decided in the free first class, and under-18s are never asked to open accounts with AI tools that require an adult or a parent\'s consent.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'Why are the classes in English, and can I keep up?',
      lede: 'We teach only in English. Most learners keep up comfortably, because the mentors make it their job that they do.',
      body: [
        { kind: 'three', cells: [
          { h3: 'No German option', p: 'Our mentors, based in India, teach every class in English. We do not offer lessons in German, and we tell you so before you book.' },
          { h3: 'Pace and accent matched', p: 'Mentors adapt how fast they speak and which words they use, check often that the point has landed, and tune in to how each learner speaks within a few lessons.' },
          { h3: 'The field speaks English', p: 'Python, its libraries, AI papers and most tutorials are in English. Taught in English, the lesson and the manuals use the same words.' }
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'When',
      h2: 'What times do the classes run in Magdeburg?',
      lede: 'India is ahead of Magdeburg, so a Magdeburg afternoon or early evening is the mentor\'s evening. These sample slots just show the difference.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Magdeburg times and India time', head: ['Magdeburg clock', 'India clock before 28 March 2027', 'India clock after 28 March 2027'], rows: [
          ['16:10', '20:40', '19:40'],
          ['17:45', '22:15', '21:15'],
          ['Sunday 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'Germany runs on MEZ (UTC+1) in winter and MESZ (UTC+2) in summer under the Einheitenzeitgesetz; 25 October 2026 ended this year\'s summer time and 28 March 2027 starts the next. India has no clock change and stays at UTC+5:30, putting it 4 hours 30 minutes ahead of Magdeburg in winter and 3 hours 30 minutes ahead in summer.' },
        { kind: 'p', mt: true, html: 'In Sachsen-Anhalt the Christmas holidays are 21 December 2026 to 2 January 2027 and the summer holidays 10 July to 20 August 2027, as listed by the KMK. Lessons go on through the holidays, and a family trip just means a pause.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How do we measure progress in coding and AI?',
    lede: 'By what a learner can build and explain. These milestones are ours.',
    table: { caption: 'Coding and AI milestones (ours)', head: ['Milestone', 'Reached around', 'The learner can'], rows: [
      ['Commands', 'Age 8 and up', 'Write steps a computer follows exactly'],
      ['Examples', 'Age 10 and up', 'Keep labelled examples in a list or file'],
      ['Rule', 'Age 12 and up', 'Find a threshold that separates two groups'],
      ['Test', 'Age 13 and up', 'Measure a rule on data it has not seen'],
      ['Judgement', 'Age 14 and up', 'Weigh misses against false alarms and explain the choice']
    ] },
    left: { h3: 'For parents', ps: [
      'Judgement is what the frost project trains. It is the difference between a teenager who can use AI and one who can question it.',
      'Younger children reach Rule through games, not through adult tools.'
    ] },
    right: { h3: 'For adults', ps: [
      'If you already code, Rule takes days. Test and Judgement are where the real learning is.',
      'Bring your own question. The method transfers to almost any yes-or-no decision.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Nine more courses for Magdeburg learners',
    lede: 'Grouped by age, all live and in English, with a regular mentor.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 8 to 14', courses: [
        { code: 'MAC / KID / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python and playful AI projects from 9.' },
        { code: 'MAC / KID / 02', slug: 'ai-literacy-for-kids-course', title: 'Understanding AI, ages 8 to 14', blurb: 'Guessing machines, built and fooled by children.' },
        { code: 'MAC / KID / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch first, for younger beginners.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'MAC / TEEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Teen data science', blurb: 'Public datasets, tidied and plotted with Python.' },
        { code: 'MAC / TEEN / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A full Python course before machine learning.' },
        { code: 'MAC / TEEN / 03', slug: 'informatik-abitur-course-java-python', title: 'Abitur Informatik support', blurb: 'Java and Python practice for grades 10 to 12.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Students and professionals', courses: [
        { code: 'MAC / ADULT / 01', slug: 'data-science-complete-masterclass-college', title: 'Data science course', blurb: 'From statistics to deep learning.' },
        { code: 'MAC / ADULT / 02', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'Large language models, retrieval and agents, for adults.' },
        { code: 'MAC / ADULT / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The maths for judging any model.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Each week',
    h2: 'A normal week of lessons, seen from Magdeburg',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Afternoon slots for children and teens.' },
      { time: 'After work', l: 'Evening slots for adults.' },
      { time: 'Weekends', l: 'Saturday and Sunday options.' }
    ],
    cells: [
      { h3: 'Two lessons a week', p: 'About an hour each, live.' },
      { h3: 'A mentor who stays', p: 'The same person week after week.' },
      { h3: 'Your own code', p: 'Typed by you, not pasted.' },
      { h3: 'Honest testing', p: 'Every model meets new data.' },
      { h3: 'Safe for children', p: 'No adult AI accounts for under-18s.' },
      { h3: 'Group or private', p: '15 to 20 learners, or one.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Games, apps and models by our students, as they made them. See more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from our students and their parents, unchanged.',

  fees: {
    h2: 'What the Magdeburg classes cost',
    lede: 'Each month\'s fee covers eight live lessons. The prices shown are in euro at the European Central Bank reference rate; the payment is actually made in US dollars and converted by your bank, which is why your statement may differ by a small amount.',
    free: ['A free first lesson', 'A short task at your level', 'No card details'],
    group: ['15 to 20 learners of similar age and level', 'A regular mentor', 'Two live lessons per week', 'Monthly, stop any month'],
    one: ['Private lessons with one mentor', 'Projects around your interests', 'Times arranged with you']
  },

  faq: {
    eyebrow: 'Magdeburg asks',
    h2: 'Coding and AI classes in Magdeburg: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. We only teach in English, live, and our mentors work from India. They set their speed and vocabulary by the learner and get used to each accent. Since nearly all programming and AI material is written in English, that tends to help.' },
      { q: 'Which ages do you teach?', a: 'Children from about 8, teenagers and adults. Children start with Scratch and Python, teenagers learn Python, data and machine learning, and adults learn applied AI. Each group is formed by age and level.' },
      { q: 'Is Informatik compulsory in Magdeburg schools?', a: 'At Sekundarschulen and Gemeinschaftsschulen, yes: one lesson a week in grades 6 to 10, according to the Gesellschaft für Informatik. At Gymnasien in Sachsen-Anhalt it is an elective in Sekundarstufe I.' },
      { q: 'Will my child use ChatGPT in class?', a: 'No. Children in our classes never need an account with an adult chatbot. Certain AI services are restricted to adults and others ask for parental consent below 18, so instead the children make tiny models of their own and find out how the big ones work.' },
      { q: 'When are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In Magdeburg, pupils mostly book late afternoons and working adults the early evening or Sunday.' },
      { q: 'Do I need to be good at maths for AI?', a: 'Not at the start. The frost project uses only comparisons and counting. Teenagers and adults who go further meet statistics and some algebra, introduced when they need it.' },
      { q: 'Can you help with a BWKI entry?', a: 'Yes. We coach how to plan, code and test an AI project, while the idea and the work remain the pupil\'s. The contest belongs to the Tübingen AI Center and has no connection with us.' },
      { q: 'How big are the groups?', a: 'Between 15 and 20 people at a similar age and stage. Prefer private teaching? Take the one-to-one plan: two lessons each week with the mentor on your own.' },
      { q: 'What currency are fees charged in?', a: 'Payment is in US dollars once a month. We display euro equivalents worked out with the ECB reference rate, and the exact euro debit is set by your own bank\'s conversion. There is no charge for the first lesson.' },
      { q: 'What is the frost model on this page?', a: 'An original project of ours on the Deutscher Wetterdienst\'s Magdeburg station data. Learners teach the computer to warn of frost from today\'s temperature and cloud, test it on 2020 to 2025, and learn why counting misses and false alarms matters more than a single accuracy figure.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Magdeburg learners and parents.',
    items: [
      { href: '/coding-classes-in-saxony-anhalt', label: 'Coding classes in Saxony-Anhalt', p: 'Our page for the Land.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany', p: 'Machine learning for all of Germany.' },
      { href: '/bundeswettbewerb-ki-bwki-project-help', label: 'BWKI project help', p: 'Coaching for a contest entry.' },
      { href: '/ai-course-for-kids-germany', label: 'AI course for kids', p: 'AI for younger learners.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which tools suit which age.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live lessons explained.' }
    ]
  },

  start: {
    h2: 'Book a free first coding or AI lesson',
    lede: 'The trial is hands-on: a short program typed live, and for teenagers and adults a first yes-or-no prediction. You leave with a suggested group and course and the reasons for it.',
    readFirst: 'To learn more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse the <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'Live, online, in English, with mentors in India. The quickest way to reach us is WhatsApp.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'AI', links: [
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/ai-course-for-school-students-germany', label: 'AI for school students' },
        { href: '/vibe-coding-and-ai-agents-classes-germany', label: 'Vibe coding and AI agents' },
        { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, do not copy' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-saxony-anhalt', label: 'Saxony-Anhalt' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Count the misses, not just the hits'
  },

  personalityCss: `
.ag-root.ag-mac .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-mac .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-mac .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-mac .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-mac .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Sachsen-Anhalt page and national overview); Bundeswettbewerb Künstliche Intelligenz; KMK Ferien 2026/2027; Einheitenzeitgesetz; Destatis GV-ISys 31.12.2024; Deutscher Wetterdienst, Climate Data Center, station 3126 Magdeburg, CC BY 4.0.',
    localProject: 'The frost warning: an original classification project on DWD station 3126 Magdeburg, 2006 to 2025, that learns a threshold on today\'s mean temperature (2.8 C) and then a temperature-plus-clear-sky rule, tests both on 2020 to 2025 (306 frost nights of 2,168), and compares misses and false alarms with a never-frost rule that is right 85.9 percent of the time. Lesson family: misses and false alarms, not accuracy.',
    requiredMentions: ['magdeburg_days.csv', 'Training days: 4981  test days: 2168', 'On the test years (hits, misses, false alarms): (193, 113, 89)', 'Frost nights in the test years: 306 of 2168', '85.9%', 'Two-number rule: base 1.2 C, plus 0.8 C for every clear eighth of sky', 'On the test years: (200, 106, 78)', 'Count the misses, not just the hits'],
    sources: [
      { claim: 'Sachsen-Anhalt Informatik by school type; G8 Oberstufe.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/sachsen-anhalt' },
      { claim: 'Sachsen-Anhalt among six Länder without compulsory Informatik for all.', url: 'https://informatik-monitor.de/' },
      { claim: 'BWKI organiser, rules and 2026 final.', url: 'https://www.bw-ki.de/teilnahmebedingungen' },
      { claim: 'Sachsen-Anhalt holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'DWD daily climate data for station 3126 and licence.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/' }
    ],
    rejectedClaims: [
      'That the frost rule is a usable forecast: refused; it is a teaching model, and the page says so.',
      'Recommending adult chatbots to under-18 learners: refused.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with the DWD, the Land, the BWKI or a school: none.'
    ]
  }
};
