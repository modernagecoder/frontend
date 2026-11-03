'use strict';
// Coding and AI classes in Neuss (ag- city page, Germany cluster P6 row DE179, tier-2 slug shape coding-and-ai, all
// ages).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Spine: what "AI" honestly means at 8, at 15 and at 40, what the KMK and NRW have said about AI and Informatik, and a
// first machine-learning model on the City of Neuss tree register that shows why measurements must share a scale.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 Nov 2026; copies under src-pages/coding-and-ai-classes-in-neuss-germany/):
//  - KMK, Bildung in der digitalen Welt: 2026 framework "um KI-bezogene Kompetenzen ergänzt" (fact 102);
//    "Handlungsempfehlung für die Bildungsverwaltung zum Umgang mit Künstlicher Intelligenz in schulischen
//    Bildungsprozessen von 2024" (103); strategy from 2016 (100).
//  - GI Informatik-Monitor 2026/27, NRW page: Pflichtfach Informatik in grades 5 and 6 (fact 80); Grundkurs three hours,
//    Leistungskurs five (81); no computer in the written Abitur (82).
//  - bw-ki.de: run by the Tübingen AI Center (208); Sek I and II (209); documentation, runnable code and video pitch (211);
//    German or English (213); 2026 final in Tübingen 13 November 2026, project deadline 20 September 2026 (214).
//  - content/ai-tool-age-audit.json: ChatGPT "at least 13 years old ... If you are under 18 you must have your parent or
//    legal guardian's permission"; Claude "at least 18 years old"; Gemini 13 with a personal or school Google Account.
//  - KMK FER2026_27.pdf NRW row (fact 275). Destatis GV-ISys 31.12.2024: Neuss 154,317; NRW 18,034,454.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Neuss, "Stadt Neuss: Baumbestand", via GovData https://ckan.govdata.de/dataset/stadt-neuss-baumbestand
//    (portal opendata.rhein-kreis-neuss.de), licence CC0 (dcat-ap cc-zero on every resource). CSV export downloaded
//    3 November 2026, 9,957,105 bytes, sha256 dbee2de31a5d...b587706, 72,648 trees; fields include Baumart, Höhe,
//    Kronendurchmesser, Stammumfang. Most common first words of Baumart: Ahorn 19,910, Hainbuche 10,879, Linde 7,817.
// Our own calculations (scratchpad de/w/T5/neuss: prep.py, model.py, model2.py, conf.py, python3 -I): trees whose
// Baumart starts Platane, Birke or Rosskastanie with all three sizes above zero: 2,960 (neuss_trees.csv). Split by
// BaumID: id % 5 == 0 is test. model.py prints "Training trees: 2374  Test trees: 586", "Always guess Birke: 39 %",
// "Nearest neighbours: 67 %". model2.py prints "Spread of height, crown, girth: [6.6, 4.8, 100.4]", "Nearest
// neighbours, scaled: 70 %". Right per class, raw then scaled: Birke 171 then 177 of 230; Platane 143 then 153 of 209;
// Rosskastanie 78 then 82 of 147.
// Lesson family: put features on a common scale before a nearest-neighbour model measures distance (centimetres of
// girth must not outvote metres of height).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  'from collections import Counter',
  '',
  'trees = []',
  'with open("neuss_trees.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        size = (float(row["height_m"]), float(row["crown_m"]), float(row["girth_cm"]))',
  '        trees.append((int(row["id"]), row["genus"], size))',
  '',
  'train = [t for t in trees if t[0] % 5 != 0]',
  'test = [t for t in trees if t[0] % 5 == 0]',
  'print("Training trees:", len(train), " Test trees:", len(test))',
  '',
  'common = Counter(g for _, g, _ in train).most_common(1)[0][0]',
  'right = sum(1 for _, g, _ in test if g == common)',
  'print("Always guess", common + ":", round(100 * right / len(test)), "%")',
  '',
  'def guess(size, k=5):',
  '    near = sorted(train, key=lambda t: sum((a - b) ** 2 for a, b in zip(t[2], size)))',
  '    return Counter(g for _, g, _ in near[:k]).most_common(1)[0][0]',
  '',
  'right = sum(1 for _, g, size in test if guess(size) == g)',
  'print("Nearest neighbours:", round(100 * right / len(test)), "%")'
].join('\n');

const V2 = [
  'import statistics',
  '',
  'spread = [statistics.pstdev(t[2][i] for t in train) for i in range(3)]',
  'print("Spread of height, crown, girth:", [round(s, 1) for s in spread])',
  '',
  'def scaled(size):',
  '    return tuple(v / s for v, s in zip(size, spread))',
  '',
  'train = [(i, g, scaled(size)) for i, g, size in train]',
  'test = [(i, g, scaled(size)) for i, g, size in test]',
  '',
  'right = sum(1 for _, g, size in test if guess(size) == g)',
  'print("Nearest neighbours, scaled:", round(100 * right / len(test)), "%")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Neuss: coding and AI' },
  slug: 'coding-and-ai-classes-in-neuss-germany',
  code: 'cne',
  accent: '#1B5435',
  accentRationale: 'Coding and AI classes, Neuss: a deep leaf green #1B5435 for the city tree register the project learns from; contrast 7.20 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding and AI classes in Neuss',
  title: 'Coding and AI Classes in Neuss: Live Online in English',
  description: 'Coding and AI classes in Neuss for children, teens and adults, live online in English: AI at each age, KMK and NRW rules, and a learning model on Neuss trees.',
  ogDescription: 'Live coding and AI lessons in English for Neuss learners of every age: what AI should mean at 8, 15 and 40, what the KMK and NRW say, which chatbots allow which ages, and a first machine-learning model trained on the City of Neuss tree register.',
  twitterDescription: 'Coding and AI in Neuss, live in English: AI by age, NRW Informatik and a tree-guessing model.',
  pageName: 'Coding and AI Classes in Neuss',
  webPageDescription: 'A guide for Neuss families and adults to learning coding and AI in English, drawing on the KMK, the Gesellschaft für Informatik, the Bundeswettbewerb Künstliche Intelligenz and AI tool terms, with an original nearest-neighbour model on the City of Neuss tree register.',
  courseDescription: 'Live online coding and AI classes in English for Neuss learners: children from 8, teenagers and adults, from first programs to machine-learning models they build and test themselves, one to one or in a batch of fifteen to twenty.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'North Rhine-Westphalia', href: '/coding-classes-in-north-rhine-westphalia' }],
  crumbLabel: 'Coding and AI in Neuss',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#ages', label: 'Who for' },
    { href: '#trees', label: 'Tree model' },
    { href: '#nrw', label: 'NRW and AI' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Neuss &middot; Coding and AI &middot; Every age',
  h1: 'Coding and AI classes in Neuss',
  lede: 'AI is not one subject. For an eight year old it is learning that a computer can be taught from examples; for a fifteen year old it is building and testing a small model; for an adult it can mean putting AI to work in a job without trusting it blindly. This page sets out what we teach at each of those ages in Neuss, what the KMK and North Rhine-Westphalia have said about AI and Informatik, which popular AI tools allow which ages, and a first machine-learning model that learns to tell Neuss street trees apart by their size.',
  secondaryCta: { href: '#trees', label: 'See the tree model' },
  wa: 'Hello Modern Age Coders, I am in Neuss and would like coding and AI classes in English. Could we arrange a free first class?',
  heroNote: 'Live lessons since 2020 &middot; 10,000+ students worldwide &middot; AI taught as something you build and test',
  spec: [
    ['Who', 'Children from 8, teenagers, adults'],
    ['Covers', 'Coding first, then data and machine learning'],
    ['Format', 'Live video lessons, two a week'],
    ['Class size', 'One to one, or a batch of fifteen to twenty'],
    ['Mentors', 'Teaching from India, in English'],
    ['Trial', 'One free class']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding and AI classes in Neuss from Modern Age Coders are live online lessons in English for children from 8, teenagers and adults. Learners write real code first, then work with data and build machine-learning models they can test and explain, with a regular mentor who adapts to their pace and accent, one to one or in a batch of fifteen to twenty.',

  picks: {
    eyebrow: 'Three starting points',
    h2: 'Which coding and AI course suits a Neuss learner?',
    lede: 'One course per stage of life. Each begins with code the learner writes, not with a chatbot.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'CNE / 01', title: 'AI Literacy for Kids', note: 'Children of eight to fourteen find out how machines learn from examples, through games and small experiments, with no adult chatbot accounts.' },
      { course: 'ai-ml-masterclass-teens', code: 'CNE / 02', title: 'AI and Machine Learning for Teens', note: 'Python first, then real models on real data, tested properly. The tree model on this page is a typical early project.' },
      { course: 'ai-ml-masterclass-complete-college', code: 'CNE / 03', title: 'AI and ML Masterclass', note: 'For students and working adults in Neuss: Python, classical machine learning, deep learning and generative AI.' }
    ]
  },

  sections: [
    {
      id: 'ages',
      eyebrow: 'AI at every age',
      h2: 'What should coding and AI mean for a child, a teenager and an adult in Neuss?',
      lede: 'Our own view, shaped by what each age can do safely and by the age rules in the AI tools\' own terms.',
      body: [
        { kind: 'table', numCols: [], caption: 'Coding and AI by age (our plan)', head: ['Age', 'Coding', 'AI', 'Tools we use'], rows: [
          ['8 to 12', 'Scratch, then typed Python', 'Sorting examples, spotting patterns, simple rule-based bots', 'Child-safe tools, no personal chatbot accounts'],
          ['13 to 17', 'Python, data files, functions', 'Train and test small models; ask why they fail', 'Code they write themselves; chatbots only within each tool\'s age terms'],
          ['Adults', 'Python and working practice', 'Machine learning, generative AI, checking AI output', 'Any tool their own account allows']
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Minimum ages in AI tool terms', head: ['Tool', 'What its terms say'], rows: [
          ['ChatGPT (OpenAI)', 'At least 13; under 18 needs a parent or legal guardian\'s permission'],
          ['Google Gemini', '13 or over with a personal or school Google Account, or the age your country sets'],
          ['Claude (Anthropic)', 'At least 18']
        ] },
        { kind: 'source', html: 'Source: the tools\' own terms of use as collected in our AI tool age guide, checked for the guide and quoted there. The first table is ours. We never ask a child under 13 to open a chatbot account, and we do not use 18+ tools with anyone under 18.' },
        { kind: 'two', mt: true,
          leftH3: 'Why code comes before AI',
          left: [
            'A learner who has never written a loop can still type a question into a chatbot, but cannot tell whether the answer is right. We teach the code first so that, later, AI is something they can open up and check.',
            'This is also how we keep our promise to teach learners to think, not to copy: in our classes nobody is asked to paste an answer they cannot explain.'
          ],
          rightH3: 'What adults usually want',
          right: [
            'Adults in Neuss tend to come with a concrete aim: to automate a weekly report, to understand the models their company now uses, or to move into a data role. Their path starts with Python and moves to machine learning quickly, at their own speed, often one to one.',
            'We give no career, salary or immigration advice; we teach the skills and show the work.'
          ] }
      ]
    },
    {
      id: 'nrw',
      tint: 'tint',
      eyebrow: 'School and policy',
      h2: 'What do the KMK and North Rhine-Westphalia say about AI and Informatik?',
      lede: 'Two short answers: the KMK has added AI to its framework for digital education, and NRW teaches compulsory Informatik in grades 5 and 6.',
      body: [
        { kind: 'two',
          leftH3: 'The national picture',
          left: [
            'The Kultusministerkonferenz set out its strategy for education in a digital world in 2016. In 2026 it adopted an updated competence framework that adds AI-related competences to those areas. Since 2024 it has also had a recommendation for education administrations on handling AI in school learning.',
            'In plain terms: schools are expected to teach about AI, but the framework describes competences, not a fixed timetable of AI lessons.'
          ],
          rightH3: 'Neuss is in NRW',
          right: [
            'The Gesellschaft für Informatik reports that NRW teaches Informatik as a compulsory subject in grades 5 and 6 at all general school types. In the Qualifikationsphase it can be a three-hour Grundkurs or a five-hour Leistungskurs.',
            'The written Informatik Abitur in NRW is set centrally and solved without a computer, so planning and tracing code by hand matter as much as typing it.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Where AI and Informatik meet a Neuss pupil', head: ['Stage', 'In school', 'Source'], rows: [
          ['Grades 5 and 6', 'Compulsory Informatik', 'GI Informatik-Monitor 2026/27, NRW'],
          ['All grades', 'Digital and AI-related competences in the KMK framework', 'KMK, Bildung in der digitalen Welt, 2026 update'],
          ['Qualifikationsphase', 'Informatik as Grundkurs (3 hours) or Leistungskurs (5 hours), if offered', 'GI Informatik-Monitor 2026/27, NRW'],
          ['Abitur', 'Written tasks set centrally, no computer', 'GI Informatik-Monitor 2026/27, NRW']
        ] },
        { kind: 'source', html: 'All three sources were read on 2 November 2026. Destatis counts Neuss 154,317 and North Rhine-Westphalia 18,034,454 (Gemeindeverzeichnis, as of 31 December 2024). Neuss pupils also live close to Düsseldorf, Kaarst, Meerbusch, Dormagen and Grevenbroich, which follow the same NRW rules.' },
        { kind: 'p', mt: true, html: 'Our classes teach alongside school, not in its place. A teenager taking Informatik in the Oberstufe keeps their school teacher as the person who sets marks; what we add is more practice, more projects and a mentor to ask.' }
      ]
    },
    {
      id: 'trees',
      eyebrow: 'A real Neuss project',
      h2: 'Can a computer learn to tell a Neuss plane tree from a birch by its size?',
      lede: 'The City of Neuss publishes its register of street and park trees as open data with no restrictions. That is enough to build a first machine-learning model, and to make the most common beginner mistake on purpose.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The register, Stadt Neuss: Baumbestand, is listed on GovData with a CC0 licence. Our download on 3 November 2026 has 72,648 trees, each with its kind of tree, height in metres, crown width in metres and trunk girth in centimetres. Ahorn, maple, is the most common, with 19,910 trees.',
            'We keep three kinds that look quite different to a person: Platane (plane tree), Birke (birch) and Rosskastanie (horse chestnut), and only trees with all three sizes filled in and above zero. That leaves 2,960 trees in neuss_trees.csv.'
          ],
          rightH3: 'The idea',
          right: [
            'The model is a nearest-neighbour model, one of the oldest ideas in machine learning. To guess a new tree, find the five known trees whose sizes are closest to it and take the kind most of them share.',
            'To test it fairly, one tree in five, chosen by its ID number, is hidden from the model and used only for the test. The model must beat the lazy strategy of always guessing the most common kind.'
          ] },
        { kind: 'code', label: 'Version 1: nearest neighbours on the raw sizes', lang: 'Python', code: V1, note: 'It prints <code>Training trees: 2374  Test trees: 586</code>, <code>Always guess Birke: 39 %</code> and <code>Nearest neighbours: 67 %</code>.' },
        { kind: 'p', mt: true, html: 'Sixty-seven per cent against a lazy 39 is a real result, but there is a flaw in how "closest" is measured. The distance adds up differences in height, crown and girth as plain numbers. Height is in metres and differs between trees by a few units; girth is in centimetres and differs by a hundred or more. So a 10 cm difference in girth counts as much as a 10 m difference in height, and the model is really listening to the trunk alone.' },
        { kind: 'p', html: 'The fix is to put the three measurements on the same scale before measuring distance. Version 2 works out how much each measurement usually varies in the training trees (its standard deviation) and divides by it, so that "one unit" means "a typical difference" for all three. It is the same three trees and the same five neighbours; only the ruler changes.' },
        { kind: 'code', label: 'Version 2: the same model, measurements scaled', lang: 'Python', code: V2, note: 'It prints <code>Spread of height, crown, girth: [6.6, 4.8, 100.4]</code> and <code>Nearest neighbours, scaled: 70 %</code>.' },
        { kind: 'p', mt: true, html: 'Girth varies about fifteen times more than height in these numbers, which is why it drowned out the other two. After scaling, the model gets 70 per cent right. That is a modest gain, and the honest part of the lesson is looking at where it came from, kind by kind, rather than trusting one number.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Test trees guessed right, by kind (our calculation)', head: ['Kind', 'Test trees', 'Raw sizes', 'Scaled sizes'], rows: [
          ['Birke (birch)', '230', '171', '177'],
          ['Platane (plane)', '209', '143', '153'],
          ['Rosskastanie (horse chestnut)', '147', '78', '82']
        ] },
        { kind: 'source', html: 'Data: Stadt Neuss, Baumbestand, licence CC0, downloaded 3 November 2026. The selection, split, model and counts are our own. All three kinds improve with scaling, but the horse chestnut stays hard: size alone gets just over half of them right, a sign that the model needs other information, such as leaf shape, that the register does not hold.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Children, 8 to 12.</strong> Measure five family members\' height in metres and shoe length in centimetres. Who is "closest" to whom if you just subtract the numbers? Does that seem fair?',
          '<strong>Teenagers.</strong> Run Version 1, then remove girth from the size tuple altogether and predict whether the score rises or falls before you run it.',
          '<strong>Teenagers, further.</strong> Change k from 5 to 1 and to 25. Which kind of tree gains, and which loses?',
          '<strong>Adults.</strong> Replace the standard deviation with the range (largest minus smallest). Girth in this file runs from 3 cm to 565 cm; explain why a single extreme trunk can stretch the range and make it a poorer ruler.'
        ] }
      ]
    },
    {
      id: 'bwki',
      eyebrow: 'An AI contest',
      h2: 'Is there a national AI competition a Neuss pupil can enter?',
      lede: 'Yes: the Bundeswettbewerb Künstliche Intelligenz. We are not connected to it and describe it from its own pages.',
      body: [
        { kind: 'two',
          leftH3: 'What it asks for',
          left: [
            'The BWKI is run by the Tübingen AI Center for pupils in Sekundarstufe I and II. A project must use machine-learning methods, and an entry needs written documentation, code that runs and a short video pitch. Projects may be handed in in German or in English.',
            'That last point matters for a learner who studies with us: a project built and explained in English can be entered as it is.'
          ],
          rightH3: 'The 2026 calendar',
          right: [
            'For 2026, registration opened on 1 March 2026 and projects had to be handed in by 20 September 2026. The final takes place in Tübingen on 13 November 2026.',
            'The next round follows the same pattern, so a Neuss teenager who starts a model this winter has months to improve it before the 2027 deadlines are announced.'
          ] },
        { kind: 'p', mt: true, html: 'We never write a competition project for a learner. We teach the methods, ask the questions a jury would ask, and leave the project in the learner\'s own hands. The tree model above is the kind of starting point that can grow into one, with better data and a fair test.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When do the classes run in Neuss time?',
      lede: 'Mentors teach from India, so most Neuss slots fall in the afternoon, early evening or at weekends.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Neuss times and the mentor\'s time', head: ['Neuss', 'India now (winter)', 'India from 28 March 2027'], rows: [
          ['Wednesday 15:45', '20:15', '19:15'],
          ['Thursday 17:15', '21:45', '20:45'],
          ['Saturday 13:45', '18:15', '17:15']
        ] },
        { kind: 'source', html: 'Neuss keeps German legal time: UTC+1 in winter and UTC+2 in summer, under the Einheitenzeitgesetz. The last change was on 25 October 2026 and the next is on 28 March 2027. India does not change its clocks and stays on UTC+5:30, four and a half hours ahead of Neuss until March and three and a half after. These are illustrations; no batch is tied to them.' },
        { kind: 'table', mt: true, numCols: [], caption: 'NRW school holidays for 2026/27 (KMK table)', head: ['Break', 'From and to'], rows: [
          ['Herbstferien', '17 to 31 October 2026'],
          ['Weihnachtsferien', '23 December 2026 to 6 January 2027'],
          ['Osterferien', '22 March to 3 April 2027'],
          ['Pfingsten', '18 May 2027'],
          ['Sommerferien', '19 July to 31 August 2027']
        ] },
        { kind: 'source', html: 'Dates as printed in the KMK holiday overview for the 2026/2027 school year (version of 9 October 2025). Lessons carry on through these breaks unless you choose to pause.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How does a learner progress from code to AI?',
    lede: 'The five steps we use to plan a learner\'s course and to report to them, or to their parents. They are our own, not a school standard.',
    table: { caption: 'From first code to a tested model (our steps)', head: ['Step', 'The learner can'], rows: [
      ['1. Instructions', 'Give a computer exact steps and fix them when they fail'],
      ['2. Data', 'Read a file, count, sort and summarise it'],
      ['3. A baseline', 'Say what a lazy guess would score before building anything'],
      ['4. A model', 'Train a simple model and test it on data it never saw'],
      ['5. Doubt', 'Find where a model fails, explain why, and change one thing to test the idea']
    ] },
    left: { h3: 'For parents and adult learners', ps: [
      'Step 5 is where the tree model ends: not with a score, but with a question about the horse chestnut.',
      'We report what the learner built and could explain. Hours online say very little.'
    ] },
    right: { h3: 'For learners', ps: [
      'When you compare things measured in different units, ask which unit is shouting loudest.',
      'One good score is not the end. Look at what the model gets wrong.'
    ] }
  },

  catalogue: {
    eyebrow: 'More coding and AI',
    h2: 'Nine more courses for Neuss learners',
    lede: 'All taught live in English by a mentor who stays with the learner, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'CNE / KID / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed Python, games and small smart projects from about nine.' },
        { code: 'CNE / KID / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Scratch first, then apps, for six to twelve.' },
        { code: 'CNE / KID / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Building games with AI help, ages 8 to 12, child-safe tools.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 17', courses: [
        { code: 'CNE / TEE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most AI work is written in, done properly.' },
        { code: 'CNE / TEE / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Charts, statistics and first models on open data.' },
        { code: 'CNE / TEE / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics contests', blurb: 'Biber, BwInf and BWKI practice with problems we write.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Students and professionals', courses: [
        { code: 'CNE / ADU / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'Large language models, retrieval and agents, from the inside.' },
        { code: 'CNE / ADU / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Python, machine learning and deep learning end to end.' },
        { code: 'CNE / ADU / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Working with coding agents and checking what they write, 18+.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How do live coding and AI classes work from Neuss?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'For pupils, after the school day in Neuss.' },
      { time: 'Early evenings', l: 'For adults coming home from work.' },
      { time: 'One to one', l: 'Whenever you and your mentor agree.' }
    ],
    cells: [
      { h3: 'Code first', p: 'Every AI topic starts with code the learner writes.' },
      { h3: 'Fair tests', p: 'Models are judged on data they never saw.' },
      { h3: 'Age-aware tools', p: 'Each tool used within its own age terms.' },
      { h3: 'English that fits', p: 'Paced and phrased for each learner.' },
      { h3: 'Same mentor', p: 'One person who follows your progress.' },
      { h3: 'Batch or private', p: 'Up to twenty learners, or just you.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'Some of the things our older students have built; there are more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews from Google, in the words students and parents used.',

  fees: {
    h2: 'Fees for coding and AI in Neuss',
    lede: 'Fees are monthly and pay for eight live classes. They appear here in euro, converted at the European Central Bank reference rate, and the payment is collected in US dollars; your bank makes the conversion, so the amount it shows can be a little different.',
    free: ['A free first class', 'A short coding task and a talk about goals', 'No card needed'],
    group: ['A batch of fifteen to twenty at a similar level', 'One regular mentor', 'Two live classes a week', 'Monthly, cancel when you like'],
    one: ['One learner, one mentor', 'Projects chosen around your aims', 'Times to suit you']
  },

  faq: {
    eyebrow: 'Neuss learners ask',
    h2: 'Coding and AI classes in Neuss: questions and answers',
    items: [
      { q: 'Are the classes in German?', a: 'No. Classes are live and in English only. The mentor adjusts speed and wording to the learner, gets used to their accent quickly and explains again in simpler words when needed.' },
      { q: 'Is AI too early for a child of 8?', a: 'Not if it is taught the right way. Children of 8 to 12 learn how a computer can learn from examples through games and sorting tasks, without personal chatbot accounts, alongside ordinary coding in Scratch or Python.' },
      { q: 'Will my teenager use ChatGPT in class?', a: 'Only within the tool\'s own terms, which set a minimum of 13 and require a parent\'s permission under 18. Most teen AI work in our classes is code the learner writes and tests, such as the tree model on this page.' },
      { q: 'Do Neuss schools teach AI?', a: 'The KMK added AI-related competences to its digital education framework in 2026, and NRW teaches compulsory Informatik in grades 5 and 6. There is no fixed AI timetable; our classes teach alongside school, and the school stays in charge of marks.' },
      { q: 'When are classes held in Neuss time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils tend to choose afternoons, adults early evenings or Saturdays.' },
      { q: 'Where are the mentors?', a: 'In India, teaching live over video. India is four and a half hours ahead of Neuss in winter and three and a half hours ahead in summer.' },
      { q: 'I am an adult with no coding background. Can I start with AI?', a: 'Yes, through Python. Adults usually spend the first weeks on Python basics and data, then move to machine learning. Many choose one to one so the pace is entirely their own.' },
      { q: 'How large are the groups?', a: 'A batch has fifteen to twenty learners at a similar level. If you prefer, one-to-one lessons give you two private classes a week at agreed times.' },
      { q: 'How do the fees work?', a: 'You pay monthly. Fees are shown in euro at the European Central Bank reference rate and taken in US dollars, which your bank converts, so your statement may show a slightly different amount. The first class is free.' },
      { q: 'Can a project from class be entered in the BWKI?', a: 'A learner\'s own project can be, if it uses machine learning and meets the rules. The BWKI accepts projects in German or English. We teach the methods but never build the entry for the learner.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on coding and AI for Neuss and the rest of Germany.',
    items: [
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'The NRW rules and dates.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Our AI courses for all of Germany.' },
      { href: '/ai-course-for-school-students-germany', label: 'AI for school students', p: 'AI for pupils, taught alongside school.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'The age terms of over a hundred tools.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'How we teach thinking first.' },
      { href: '/coding-classes-for-adults-germany', label: 'Coding for adults', p: 'Starting later, at your own pace.' }
    ]
  },

  start: {
    h2: 'Start with a free class',
    lede: 'The first class is a short coding task and a conversation about what you, or your child, want from coding and AI. The mentor then suggests a course and a group or one-to-one plan.',
    readFirst: 'Before booking you might read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Lessons come live from mentors in India and are given only in English. The fastest way to ask us something is WhatsApp, in English.',
    formNote: 'No card, no obligation, no cost.'
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
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'North Rhine-Westphalia' },
        { href: '/coding-classes-for-adults-germany', label: 'Coding for adults' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Same ruler for every measurement'
  },

  personalityCss: `
.ag-root.ag-cne .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-cne .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-cne .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-cne .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cne .ag-steps li { margin-bottom: 0.35rem; }
`,

  dossier: {
    curriculumAuthority: 'KMK, Bildung in der digitalen Welt (2016 strategy, 2024 AI recommendation, 2026 framework update); Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); Bundeswettbewerb Künstliche Intelligenz terms and 2026 timeline; AI tool terms in content/ai-tool-age-audit.json; KMK holiday table 2026/27; Destatis 31.12.2024; Einheitenzeitgesetz; read 2 November 2026. Stadt Neuss, Baumbestand, CC0, downloaded 3 November 2026.',
    localProject: 'Neuss tree model: an original five-nearest-neighbour model on 2,960 plane, birch and horse chestnut trees from the City of Neuss register, tested on one tree in five (586). Raw sizes score 67 per cent against a 39 per cent always-birch baseline; dividing each measurement by its spread (6.6 m, 4.8 m, 100.4 cm) lifts it to 70 per cent, every kind improves, and horse chestnut stays hard. Lesson family: put features on a common scale before measuring distance.',
    requiredMentions: ['neuss_trees.csv', 'Training trees: 2374  Test trees: 586', 'Always guess Birke: 39 %', 'Nearest neighbours: 67 %', 'Spread of height, crown, girth: [6.6, 4.8, 100.4]', 'Nearest neighbours, scaled: 70 %', 'Neuss 154,317', 'Same ruler for every measurement'],
    sources: [
      { claim: 'KMK 2026 framework update with AI-related competences; 2024 AI recommendation.', url: 'https://www.kmk.org/themen/bildung-in-der-digitalen-welt.html' },
      { claim: 'NRW compulsory Informatik grades 5 and 6; Oberstufe hours; Abitur without computer.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'BWKI rules: organiser, Sek I and II, submission parts, German or English.', url: 'https://www.bw-ki.de/teilnahmebedingungen' },
      { claim: 'BWKI 2026 timeline and Tübingen final.', url: 'https://www.bw-ki.de/' },
      { claim: 'Neuss tree register and licence.', url: 'https://ckan.govdata.de/dataset/stadt-neuss-baumbestand' },
      { claim: 'NRW holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' }
    ],
    rejectedClaims: [
      'That the scaled model is "good": 70 per cent on three kinds is a modest result, and the page says so.',
      'Any claim about which Neuss schools teach AI: none sourced, none made.',
      'Career, salary or visa claims for adult learners: refused.',
      'Any link with the Tübingen AI Center, BWKI, the KMK or the City of Neuss: none.'
    ]
  }
};
