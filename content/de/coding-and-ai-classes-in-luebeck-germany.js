'use strict';
// Coding and AI classes in Lübeck (ag- city page, Germany cluster P6 row DE161, tier-2 shape coding-and-ai = all ages).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: "AI guesses from examples." The simplest machine-learning method there is, nearest neighbours, explained so that a
// ten year old, a teenager and an adult each get something from it, tested on the Hansestadt Lübeck tree register in the
// old town. Schleswig-Holstein made Informatik compulsory in 2024/25, so many Lübeck pupils now meet the basics at school;
// the page is about what comes on top.
// Sources (copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-and-ai-classes-in-luebeck-germany/):
//  - GI Informatik-Monitor 2026/27, Schleswig-Holstein page (infmon-schleswig-holstein/168d7104.txt): "Ab dem Schuljahr
//    2024/25 ist Informatik an allen Schularten verpflichtendes Unterrichtsfach. Der Gesamtumfang beträgt vier Wochenstunden
//    in den Jahrgangsstufen 7 bis 10."; schools decide the spread, e.g. two hours each in grades 7 and 8; Gymnasium
//    Wahlpflicht in addition; grades 5 and 6 may integrate Informatik into any subject; Oberstufe three hours at the basic
//    level, four hours at the raised level as a "profilgebendes Fach" in the science profile; written exam in the profilgebendes
//    Fach; written tasks proposed by local teachers and chosen by the Fachaufsicht; the computer-dependent part "darf ein
//    Viertel der Bewertungseinheiten der Prüfungsaufgabe nicht übersteigen". National page: SH among four Länder meeting the
//    short-term recommendation of 4 compulsory hours (fact 91).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025): "Schleswig-Holstein (2) ² 12.10. - 24.10. 21.12. - 06.01. -- 30.03. - 10.04.
//    07.05. 03.07. - 14.08." (fact 282).
//  - AI tool ages: content/ai-tool-age-audit.json (OpenAI 13, parent's or guardian's permission under 18; Anthropic 18).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Lübeck 216,889; Kiel 252,668 (Land capital); Schleswig-Holstein
//    2,959,517; Hamburg 1,862,565.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Hansestadt Lübeck, Abteilung Grün und Freiräume, "Baumkataster", opendata.luebeck.de/bereich/5.660/stadtgruen/
//    baumkataster/ (also on GovData as baumkataster31651), "Lizenz cc-zero", file baumkataster.csv "aktualisiert am
//    2025-07-14", downloaded 3 November 2026, 7,992,948 bytes, sha256 d9e89ba4...9cda09ea, 64,031 rows, semicolons, decimal
//    commas, coordinates in EPSG:25832 per the dataset page. GATTUNG "Fehlplatz" (an empty planting place) 8,657 rows city-wide.
// Our own calculations (scratchpad de/w/T3/luebeck/run/v1.py, v12.py, python3 -I, Python 3.14.8). Our box around the old
// town: Rechtswert 610,200 to 611,400, Hochwert 5,969,300 to 5,970,800; 381 Fehlplatz rows in it are removed.
//  v1: "Trees in the old town box: 1945  hidden: 389"; "Always guess Tilia: 25.2 %"; "Nearest tree, k = 1: 57.6 %".
//  v2: k = 1 57.6, k = 3 58.4, k = 7 53.7, k = 25 47.6, k = 101 38.6, k = 501 31.1 (percent).
//  In the box: Tilia 524, Acer 354, Fagus 150, Fraxinus 148, Quercus 87; 40 genera. City-wide: 80 GATTUNG values, Tilia
//  9,823, Acer 8,805.
// Lesson family: nearest neighbours vote; choose k by testing on hidden examples, because too few neighbours is noisy and
// too many turns every guess into the majority.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  'from collections import Counter',
  '',
  'def number(text):',
  '    return float(text.replace(",", "."))',
  '',
  'trees = []',
  'with open("baumkataster.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        x, y = number(row["RECHTSWERT"]), number(row["HOCHWERT"])',
  '        if row["GATTUNG"] != "Fehlplatz" and 610200 <= x <= 611400 and 5969300 <= y <= 5970800:',
  '            trees.append((x, y, row["GATTUNG"]))',
  '',
  'test = trees[::5]',
  'train = [t for i, t in enumerate(trees) if i % 5 != 0]',
  '',
  'def guess(tree, k):',
  '    near = sorted(train, key=lambda t: (t[0] - tree[0]) ** 2 + (t[1] - tree[1]) ** 2)[:k]',
  '    return Counter(t[2] for t in near).most_common(1)[0][0]',
  '',
  'common = Counter(t[2] for t in train).most_common(1)[0]',
  'hits = sum(1 for t in test if guess(t, 1) == t[2])',
  'print("Trees in the old town box:", len(trees), " hidden:", len(test))',
  'print("Always guess", common[0] + ":", round(100 * sum(1 for t in test if t[2] == common[0]) / len(test), 1), "%")',
  'print("Nearest tree, k = 1:", round(100 * hits / len(test), 1), "%")'
].join('\n');

const V2 = [
  'for k in [1, 3, 7, 25, 101, 501]:',
  '    hits = sum(1 for t in test if guess(t, k) == t[2])',
  '    print("k =", k, ":", round(100 * hits / len(test), 1), "%")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Lübeck: coding and AI' },
  slug: 'coding-and-ai-classes-in-luebeck-germany',
  code: 'cal',
  accent: '#246A53',
  accentRationale: 'Coding and AI in Lübeck: a deep verdigris #246A53 for the copper spires of the Marienkirche and the Dom; contrast 5.23 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-schleswig-holstein', name: 'Schleswig-Holstein' }],
  routeLabel: 'Coding and AI classes in Lübeck',
  title: 'Coding and AI Classes in Lübeck: Live Online, in English',
  description: 'Coding and AI classes in Lübeck for children, teens and adults, live online in English: compulsory Informatik in Schleswig-Holstein and an old town tree AI project.',
  ogDescription: 'Live online coding and AI in Lübeck for every age, taught in English at the learner\'s pace: what Schleswig-Holstein\'s compulsory Informatik covers, the Informatik Abitur rules, and an original nearest-neighbour project on the city\'s tree register.',
  twitterDescription: 'Coding and AI in Lübeck, live in English, with a nearest-neighbour project on old town trees.',
  pageName: 'Coding and AI Classes in Lübeck',
  webPageDescription: 'A guide for learners in Lübeck of every age to live coding and AI classes in English, built from the GI Informatik-Monitor, the KMK holiday table and Destatis, with an original nearest-neighbour project on the Hansestadt Lübeck Baumkataster.',
  courseDescription: 'Live online coding and AI classes in English for learners in Lübeck: AI literacy and Python for children, machine learning for teenagers, and a complete AI and machine learning path for adults, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'Schleswig-Holstein', href: '/coding-classes-in-schleswig-holstein' }],
  crumbLabel: 'Lübeck',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'Schools' },
    { href: '#trees', label: 'Tree AI' },
    { href: '#learners', label: 'Learners' },
    { href: '#calendar', label: 'Times' }
  ],
  eyebrow: 'Lübeck &middot; Coding and AI &middot; Children, teens, adults',
  h1: 'Coding and AI classes in Lübeck',
  lede: 'Informatik became a required subject for all Schleswig-Holstein pupils in 2024/25, so a Lübeck teenager now meets algorithms at school. What school has little time for is artificial intelligence done properly: building a model, testing it on data it has never seen, and saying honestly how often it is wrong. That is what our live classes in English add, for children, teenagers and adults alike. Below, a computer tries to guess the trees of the Lübeck old town.',
  secondaryCta: { href: '#trees', label: 'See the tree project' },
  wa: 'Hello Modern Age Coders, I am in Lübeck and interested in coding and AI classes in English. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; more than 10,000 students worldwide &middot; every age, one mentor, in English',
  spec: [
    ['Learners', 'Children from 6, teenagers, adults'],
    ['Focus', 'Coding first, then AI you can test'],
    ['Live', 'Two one-hour video classes a week'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'In India, teaching in English'],
    ['Start', 'With a free first class']
  ],
  capsuleQ: 'What you need to know',
  capsule: 'Coding and AI classes in Lübeck at Modern Age Coders are taught live online, in English, for every age: AI literacy and Python for children, machine learning for teenagers, and a full AI and machine learning path for adults. A regular mentor adapts to each learner\'s pace and accent, in a batch of fifteen to twenty or one to one, and every model a learner builds is tested on data it has not seen.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Which coding and AI course fits a Lübeck learner?',
    lede: 'Three doors into AI. Each one starts where the learner is and ends with models they can test and explain.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'CAL / 01', title: 'AI Literacy for Kids', note: 'Children aged 8 to 14, four months, joinable in any month. How machines learn from examples and why they get things wrong, with no adult chatbot accounts.' },
      { course: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'CAL / 02', title: 'Machine Learning Without Code, for Teens', note: 'Teenagers aged 13 to 18, 24 classes. Visual machine learning in Orange: train, test and compare models before writing a line of code.' },
      { course: 'ai-ml-masterclass-complete-college', code: 'CAL / 03', title: 'AI and ML Masterclass for Adults', note: 'Adults 18 and over, 12 to 14 months. Python, statistics, machine learning, deep learning and generative AI, from a complete beginner\'s start.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Schleswig-Holstein schools',
      h2: 'Is Informatik compulsory in Lübeck schools?',
      lede: 'Yes, since 2024/25, at every school type: four weekly hours in total, spread across grades 7 to 10.',
      body: [
        { kind: 'p', html: 'According to the 2026/27 Informatik-Monitor of the Gesellschaft für Informatik, every school type in the Land has taught the subject as a requirement since 2024/25. Pupils get four weekly hours altogether between grade 7 and grade 10, and the school sets the timing: the GI\'s own example is two hours a week in grades 7 and 8. By that measure the Land reaches the four-hour level the GI calls its short-term recommendation, one of only four Länder that do.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik in Schleswig-Holstein, school year 2026/27', head: ['Stage', 'What the GI reports'], rows: [
          ['Grades 5 and 6', 'Informatik may be built into any subject; no separate compulsory hours'],
          ['Grades 7 to 10, all school types', 'Required: four hours a week summed over the four grades'],
          ['Gemeinschaftsschule, grades 7 to 10', 'Optional Wahlpflicht Informatik on top, four hours summed'],
          ['Gymnasium (G9), grades 7 to 10', 'Optional Wahlpflicht Informatik on top, six hours summed'],
          ['Oberstufe, basic level', 'Three weekly hours'],
          ['Oberstufe, raised level', 'Four hours a week, when it leads the science profile']
        ] },
        { kind: 'source', html: 'Summarised by us from the GI Informatik-Monitor 2026/27 (Land entry and national comparison), consulted on 2 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'The Informatik Abitur in the Land',
          left: [
            'A pupil whose profile is led by Informatik sits a written Abitur paper in it. There is no single paper for the whole Land: the GI describes local teachers sending in suggested tasks, from which the Fachaufsicht picks.',
            'Work at a computer may be part of the paper but does not have to be, and whatever depends on the computer is capped at a quarter of the marks. Pupils on the basic level can instead be examined orally, give an exam presentation or submit a besondere Lernleistung.'
          ],
          rightH3: 'Where we fit',
          right: [
            'Four hours over four years is a real foundation, and it is far more than many Länder offer. It is still about one hour a week. A Lübeck pupil who wants to build and test AI models, or to aim at the raised level in the Oberstufe, needs far more practice than that.',
            'We teach beside school and never in place of it. The school course gives the grade; our classes give keyboard time, projects, and a mentor who explains in English.'
          ] },
        { kind: 'p', mt: true, html: 'More on the Land, including its school types and holidays, is on our <a class="ag-inline-link" href="/coding-classes-in-schleswig-holstein">Schleswig-Holstein page</a>.' }
      ]
    },
    {
      id: 'trees',
      tint: 'tint',
      eyebrow: 'A real Lübeck AI project',
      h2: 'Can a computer guess which tree stands in a Lübeck street?',
      lede: 'Nearest neighbours is the oldest trick in machine learning: to guess something about a new example, look at the examples closest to it. We test it on the old town of Lübeck.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Hansestadt Lübeck publishes its Baumkataster, the register of the trees its green-spaces department and the Lübeck Port Authority look after, on opendata.luebeck.de under CC0, with no conditions on reuse. The file was last updated on 14 July 2025; our copy was downloaded on 3 November 2026.',
            'It has 64,031 rows: a tree number, two coordinates in metres, the genus, the street and, for many trees, the planting year. Not every row is a tree. City-wide, 8,657 rows have the genus "Fehlplatz", an empty planting place, and a program has to throw those out before it learns anything.'
          ],
          rightH3: 'The experiment',
          right: [
            'We drew a box about 1.2 km by 1.5 km around the old town island, kept the 1,945 real trees inside it, and hid every fifth one: 389 trees whose genus the program is not allowed to see.',
            'For each hidden tree, the program finds the nearest trees it can see and lets them vote. With k = 1, the single closest tree decides. Before trusting that, we need something to compare with: a lazy rule that always guesses the commonest genus in the box, the lime tree (Tilia).'
          ] },
        { kind: 'code', label: 'Version 1: a lazy rule against the nearest tree', lang: 'Python', code: V1, note: 'It prints: <code>Trees in the old town box: 1945  hidden: 389</code>, <code>Always guess Tilia: 25.2 %</code> and <code>Nearest tree, k = 1: 57.6 %</code>.' },
        { kind: 'p', mt: true, html: 'Always saying "lime" is right a quarter of the time. Copying the nearest tree is right more than half the time, 57.6 percent. That makes sense to anyone who has walked through Lübeck: avenues and squares are often planted with one kind of tree, so a neighbour is a good clue. But k = 1 is a choice, not a law. What if we ask three neighbours, or a hundred?' },
        { kind: 'code', label: 'Version 2: add below Version 1, try different k', lang: 'Python', code: V2, note: 'It prints: <code>k = 1 : 57.6 %</code>, <code>k = 3 : 58.4 %</code>, <code>k = 7 : 53.7 %</code>, <code>k = 25 : 47.6 %</code>, <code>k = 101 : 38.6 %</code> and <code>k = 501 : 31.1 %</code>.' },
        { kind: 'table', mt: true, numCols: [0, 1], caption: 'Correct guesses for 389 hidden old town trees (our calculation)', head: ['Neighbours asked (k)', 'Correct'], rows: [
          ['Always "Tilia"', '25.2 %'],
          ['1', '57.6 %'],
          ['3', '58.4 %'],
          ['7', '53.7 %'],
          ['25', '47.6 %'],
          ['101', '38.6 %'],
          ['501', '31.1 %']
        ] },
        { kind: 'source', html: 'Data: Hansestadt Lübeck, Abteilung Grün und Freiräume, Baumkataster (updated 14 July 2025), opendata.luebeck.de, licence CC0, downloaded 3 November 2026. The box, the split, the code and the percentages are ours. The old town box held 381 Fehlplatz rows, removed before counting. We are not connected with the Hansestadt Lübeck.' },
        { kind: 'p', mt: true, html: 'Three neighbours do a little better than one, because a single odd tree no longer decides alone. After that, every extra neighbour pulls the guess away from the street and towards the whole box, until at 501 neighbours the program is almost back to "always lime". This is the central lesson of machine learning in one table: the setting that works is found by testing on examples the model has not seen, never by guessing, and a model must always beat the lazy rule to be worth anything.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Children, no screen.</strong> On a map of your street, cover one tree with a coin. Guess what it is from the trees next to it. Now guess from the whole street. Which was easier?',
          '<strong>Children, Python.</strong> Change the 5 in trees[::5] to 10 so fewer trees are hidden. Does the k = 1 score change?',
          '<strong>Teenagers.</strong> Instead of the genus, try to guess the planting year from neighbours. Many rows have no year: decide what to do with them before you start.',
          '<strong>Adults.</strong> Our test set is every fifth tree in file order, and the file lists trees mostly street by street. Shuffle the trees with a fixed random seed before splitting and see whether the scores hold. If they fall, ask why.'
        ] }
      ]
    },
    {
      id: 'learners',
      eyebrow: 'For every age',
      h2: 'What do children, teenagers and adults learn about AI in our classes?',
      lede: 'One idea, three depths. Nearest neighbours above is taught at each of them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Children', p: 'Children learn that a computer "learns" by looking at examples, and that it can only be as good as those examples. They sort pictures, make guessing games in Scratch and, from about 9, write small Python programs that compare things. They use no AI accounts.' },
          { h3: 'Teenagers', p: 'Teenagers train real models, first visually in Orange and then in Python, and learn the habits that matter: a test set kept apart, a lazy rule to beat, and a sentence explaining every result. These habits are what universities look for.' },
          { h3: 'Adults', p: 'Adults go from Python to machine learning, deep learning and generative AI. Many come because AI tools have arrived at work; they leave able to tell when a tool is guessing and when it is right, which is what their employers actually need.' }
        ] },
        { kind: 'p', mt: true, html: 'Chatbot age limits come from the companies that make them, and we keep to them: 13 for OpenAI, with a parent or guardian agreeing for anyone under 18, and 18 for Anthropic\'s Claude. Children therefore make AI rather than talk to it. The exact wording of each company\'s terms is collected in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'Do you teach coding and AI in German?',
      lede: 'No. Every class is in English, with mentors who adjust to the learner.',
      body: [
        { kind: 'two',
          leftH3: 'Why we are clear about it',
          left: [
            'The people teaching are in India and run every class in English over live video. German-language lessons do not exist with us, and a family should know that before booking rather than discover it in a first lesson.',
            'For AI in particular, English is an advantage: nearly every library, tutorial and research paper a learner will meet later is written in it.'
          ],
          rightH3: 'How mentors adapt',
          right: [
            'Mentors speak at the learner\'s speed, rephrase when something does not land, and quickly get used to a Lübeck accent. A learner can answer in simple English, or ask for a word, without losing face.',
            'Code, tables and results stay on the shared screen, so meaning never depends on one spoken sentence.'
          ] }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'Times and holidays',
      h2: 'When can learners in Lübeck take live classes?',
      lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Lübeck times and the time in India', head: ['Lübeck', 'India until 28 March 2027', 'India from 28 March 2027', 'Usual for'], rows: [
          ['16:15', '20:45', '19:45', 'Children and teenagers'],
          ['17:45', '22:15', '21:15', 'Adults after work'],
          ['Saturday 13:15', '17:45', '16:45', 'Families'],
          ['Sunday 11:30', '16:00', '15:00', 'One-to-one learners']
        ] },
        { kind: 'source', html: 'Lübeck runs on MEZ (UTC+1) in winter and MESZ (UTC+2) in summer, as the Einheitenzeitgesetz requires; this winter began when the clocks were turned back on 25 October 2026 and ends with the change on 28 March 2027. India keeps UTC+5:30, which makes the difference 4 h 30 in the cold months and 3 h 30 in the warm ones. No batch time is fixed beforehand.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Schleswig-Holstein school holidays, 2026/27', head: ['Holidays', 'From', 'To'], rows: [
          ['Herbstferien', '12 October 2026', '24 October 2026'],
          ['Weihnachtsferien', '21 December 2026', '6 January 2027'],
          ['Osterferien', '30 March 2027', '10 April 2027'],
          ['Bridge day', '7 May 2027', '7 May 2027'],
          ['Sommerferien', '3 July 2027', '14 August 2027']
        ] },
        { kind: 'source', html: 'Dates copied from the KMK holiday list for the school year 2026/2027, version of 9 October 2025.' },
        { kind: 'p', mt: true, html: 'Classes continue in the holidays unless you pause them; adults follow no school calendar at all. Destatis counts 216,889 people in Lübeck at the end of 2024, in a Land of 2,959,517 whose capital Kiel has 252,668. Learners from Travemünde on the coast and from nearby Bad Schwartau or Ratzeburg join the same groups. Hamburg, with 1,862,565 people, is a separate Land with its own school rules and holidays.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'AI habits',
    h2: 'Which habits does a good AI learner build, and in what order?',
    lede: 'Our own list. Each habit is taught at every age, in simpler or harder form.',
    table: { caption: 'Five AI habits (ours)', head: ['Habit', 'In the tree project', 'At work or at university'], rows: [
      ['1. Clean first', 'Remove the Fehlplatz rows', 'Check what each row really is'],
      ['2. Hide a test set', 'Every fifth tree kept back', 'Never grade a model on its own training data'],
      ['3. Beat a lazy rule', 'Always "Tilia" scores 25.2 %', 'Ask what a simple rule would score'],
      ['4. Tune by testing', 'k = 3 does better than 1 or 501', 'Settings come from results, not hunches'],
      ['5. Doubt the split', 'Shuffle before splitting', 'Ask whether the test is fair']
    ] },
    left: { h3: 'For families', ps: [
      'A child who has learned habit 3 asks "compared with what?" about every impressive number. It is one of the most useful questions a person can learn.',
      'We report which habits a learner has shown in their own work.'
    ] },
    right: { h3: 'For adults', ps: [
      'Habit 5 is where most real AI projects go wrong: the test looks fair and is not. Our adult course spends time on it on purpose.',
      'Bring a problem from your job and we will build the five habits around it.'
    ] }
  },

  catalogue: {
    eyebrow: 'All paths',
    h2: 'Nine more courses for Lübeck learners',
    lede: 'Children, teenagers and adults each have three more options, all taught live in English.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'CAL / YOUNG / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch to apps over a school year, 6 to 12.' },
        { code: 'CAL / YOUNG / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python and small AI projects, 9 to 12.' },
        { code: 'CAL / YOUNG / 03', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'A short first course with finished games, 6 to 12.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 10 to 19', courses: [
        { code: 'CAL / TEEN / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teens', blurb: 'Python to real models, 13 to 18.' },
        { code: 'CAL / TEEN / 02', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Beside compulsory Informatik, Klasse 5 to 10.' },
        { code: 'CAL / TEEN / 03', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'Oberstufe topics in Java and Python, 16 to 19.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'CAL / ADULT / 01', slug: 'artificial-intelligence-complete-masterclass-college', title: 'Artificial intelligence', blurb: 'Search, logic and agents, the ideas under AI.' },
        { code: 'CAL / ADULT / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Python, statistics and machine learning.' },
        { code: 'CAL / ADULT / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'The language under almost all AI work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'The classes',
    h2: 'How do live coding and AI classes run?',
    lede: 'Two live hours a week with one mentor. Learners write the code and run the experiments themselves; the mentor asks the questions that make them think.',
    slots: [
      { time: 'Weekday afternoons', l: 'For children and teenagers after school in Lübeck.' },
      { time: 'Evenings and weekends', l: 'For adults and families who prefer them.' },
      { time: 'One to one', l: 'A time you agree, moved when you need to.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same person throughout the course.' },
      { h3: 'Tested models', p: 'Nothing is called accurate without a test set.' },
      { h3: 'Real data', p: 'Open data from German cities, like Lübeck\'s trees.' },
      { h3: 'Age-matched', p: 'Separate batches for children, teenagers and adults.' },
      { h3: 'Clear English', p: 'Spoken slowly, shown on screen.' },
      { h3: 'Short updates', p: 'What was learned and what is next.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'Work by our students of different ages, from games to models. The <a class="ag-inline-link" href="/student-labs">student labs</a> page collects more.',
  reviewsLede: 'Reviews from Google, as parents and students wrote them.',

  fees: {
    h2: 'How much are coding and AI classes in Lübeck?',
    lede: 'You pay monthly for eight live classes. We show the fee in euro using the European Central Bank reference rate; the card is charged in US dollars and your bank converts that into euro, which can leave a small difference on your statement.',
    free: ['A free first class', 'A first experiment at the learner\'s level', 'No payment details'],
    group: ['A batch of fifteen to twenty, grouped by age', 'One mentor for the course', 'Two live classes a week', 'Paid monthly, stop in any month'],
    one: ['One learner with one mentor', 'Projects built around the learner', 'Times arranged between you']
  },

  faq: {
    eyebrow: 'Lübeck questions',
    h2: 'Coding and AI classes in Lübeck: what people ask',
    items: [
      { q: 'Are the classes in German?', a: 'No, only in English. The mentors teach live from India, slow down for a learner who needs it and get used to how each person speaks. Because code and results stay visible on screen, imperfect English is rarely a barrier.' },
      { q: 'Who can join coding and AI classes in Lübeck?', a: 'Anyone from 6 upwards. Children learn what AI is by building small programs, teenagers train and test real models, and adults follow a full path from Python to machine learning and generative AI.' },
      { q: 'Is Informatik compulsory in Schleswig-Holstein?', a: 'Yes. The Gesellschaft für Informatik reports that every school type has had to teach it since 2024/25: four hours a week added up over grades 7 to 10, with each school choosing in which of those grades.' },
      { q: 'How is the Informatik Abitur examined in Schleswig-Holstein?', a: 'When it leads a pupil\'s profile, in a written paper whose tasks local teachers suggest and the Fachaufsicht selects. Work on the computer can count for a quarter of the marks at most. Our classes run beside school and give no grades.' },
      { q: 'When are classes in Lübeck time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Children usually pick late afternoons and adults evenings or weekends.' },
      { q: 'Can children use ChatGPT or Claude in your AI classes?', a: 'Not children. OpenAI\'s minimum age is 13, with parental permission until 18, and Claude is for adults only under Anthropic\'s terms. So the children in our classes write little AI programs themselves; it shows them what is inside the box.' },
      { q: 'What is the tree project on this page?', a: 'Something we designed around the Hansestadt Lübeck tree register. A program guesses the genus of 389 hidden old town trees from their nearest neighbours, beats a lazy always-lime rule, and shows how the number of neighbours changes the result.' },
      { q: 'Do I need maths for AI?', a: 'Not to start. Children need none, teenagers need ordinary school maths, and adults refresh what they need inside the course. The nearest-neighbour method on this page uses only distances and counting.' },
      { q: 'How big are the batches?', a: 'A batch is fifteen to twenty people at a similar stage. With one-to-one, the learner has the mentor to themselves twice a week at times you set.' },
      { q: 'What does it cost and how is it paid?', a: 'There is one fee per month. This page displays it in euro, converted at the reference rate of the European Central Bank, while the charge runs in US dollars and your bank changes it. Expect a tiny difference. Trying a class is free and asks for no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More to read',
    h2: 'Related pages',
    lede: 'Other pages for Lübeck and for learners across Germany.',
    items: [
      { href: '/coding-classes-in-schleswig-holstein', label: 'Coding classes in Schleswig-Holstein', p: 'The Land, its schools and our classes.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Our deeper guide to learning AI.' },
      { href: '/ai-course-for-school-students-germany', label: 'AI course for school students', p: 'AI for pupils beside school.' },
      { href: '/coding-classes-for-adults-germany', label: 'Coding for adults', p: 'Starting to code after school.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Why we teach judgement first.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Say who will learn and roughly what they know. The free class is a short experiment at the right level, after which the mentor recommends a course, and a batch or one-to-one.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains the method and <a class="ag-inline-link" href="/courses">the course list</a> has every syllabus.',
    note: 'Classes are live online and only in English, taught by mentors in India. WhatsApp is quickest for questions, in English.',
    formNote: 'Free, without a card or any commitment.'
  },

  footer: {
    cols: [
      { h4: 'AI', links: [
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/ai-course-for-school-students-germany', label: 'AI for school students' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, not copy' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-schleswig-holstein', label: 'Schleswig-Holstein' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Ask the neighbours, but not all of them'
  },

  personalityCss: `
.ag-root.ag-cal .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-cal .ag-capsule { border-left-width: 3px; }
.ag-root.ag-cal .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cal .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-cal .ag-code-head b { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Schleswig-Holstein page and national overview); KMK Ferienregelung 2026/2027; Destatis GV-ISys 31.12.2024; OpenAI and Anthropic terms via content/ai-tool-age-audit.json; Einheitenzeitgesetz; Hansestadt Lübeck Baumkataster, CC0.',
    localProject: 'Lübeck old town trees: an original nearest-neighbour project on the Hansestadt Lübeck Baumkataster. In a box around the old town (1,945 trees, 381 Fehlplatz rows removed), 389 hidden trees are guessed from their neighbours: always "Tilia" 25.2 %, k = 1 57.6 %, k = 3 58.4 %, k = 501 31.1 %. Lesson family: choose k by testing on hidden examples.',
    requiredMentions: ['baumkataster.csv', 'Trees in the old town box: 1945  hidden: 389', 'Always guess Tilia: 25.2 %', 'Nearest tree, k = 1: 57.6 %', 'k = 3 : 58.4 %', 'Fehlplatz', 'a quarter of the marks', 'Ask the neighbours, but not all of them'],
    sources: [
      { claim: 'Informatik compulsory in SH since 2024/25, four hours in grades 7 to 10; Oberstufe and Abitur rules.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/schleswig-holstein' },
      { claim: 'SH among four Länder meeting four compulsory hours.', url: 'https://informatik-monitor.de/' },
      { claim: 'Schleswig-Holstein school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Lübeck tree register, CC0.', url: 'https://opendata.luebeck.de/bereich/5.660/stadtgruen/baumkataster/index.html' },
      { claim: 'Populations of Lübeck, Kiel, Hamburg and the Land.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' },
      { claim: 'AI tool minimum ages.', url: 'https://openai.com/policies/row-terms-of-use/' }
    ],
    rejectedClaims: [
      'The 1798, 1933 and 1939 Lübeck address books on GovData: CC BY-SA, personal names, not used.',
      'Health and care statistics for Lübeck on the Land portal: health data, not used.',
      'Any connection with the Hansestadt Lübeck, the GI or a school: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
