'use strict';
// Coding and AI classes in Fürth (ag- city page, Germany cluster P6 row DE185, tier-2 shape coding-and-ai = all ages).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: a score can flatter a lazy model. On Fürth's own weather record, a "model" that always says "no rain tomorrow"
// gets the highest accuracy and is useless; the lesson for every age is to count each kind of mistake.
// City data searched first: www.fuerth.de returned HTTP 403 on /opendata and on the statistics page (stopped, no retry);
// the Fürth (Krfr.St) tables on GovData point to statistikdaten.bayern.de and the river stations to gkd.bayern.de, both
// blocked hosts; the only other Fürth records are OSM-derived (ODbL), not used. So the project uses a DWD station inside
// the city that no other page uses.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, Bayern page: Mittelschule "in den Jahrgangsstufen 5 bis 10 das verbindliche Fach
//    Informatik im Umfang von je einer Wochenstunde" (69); Gymnasium, Natur und Technik, "in den Jahrgangsstufen 6 und 7
//    im Umfang von je einer Wochenstunde der Schwerpunkt Informatik" (70); "in Jahrgangsstufe 11 in allen
//    Ausbildungsrichtungen verpflichtend zweistündig Informatikunterricht" (71); written Abitur tasks "werden zentral
//    gestellt", "Programmieraufgaben auf Papier, jedoch keine praktischen Anteile am Rechner" (72).
//  - KMK, Bildung in der digitalen Welt: 2016 strategy (100); 2024 Handlungsempfehlung on AI (103); 2026 framework
//    "um KI-bezogene Kompetenzen ergänzt" (102).
//  - KMK Ferien 2026/2027 table (raw src-pages/coding-classes-in-land-bremen/kmk-fer2627/fe303dbf.txt), Bayern row:
//    "Bayern 02.11. - 06.11. 24.12. - 08.01. -- 08.02. - 12.02." and "22.03. - 02.04. 18.05. - 28.05. 02.08. - 13.09.";
//    "Stand: 09.10.2025".
//  - AI tool ages: content/ai-tool-age-audit.json (ChatGPT 13 with a parent's permission under 18; Gemini 16 in Germany;
//    Claude 18+; Teachable Machine needs no sign-in).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Fürth 132,036; Nürnberg 529,508; Erlangen 115,928; Bayern
//    13,248,928.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate data (KL), station 01522 "Fürth/Bayern (A)",
//    tageswerte_KL_01522_19470601_19550331_hist.zip, downloaded 3 November 2026, 79,148 bytes, sha256 2fd58559...7b41a0d8.
//    Metadaten_Geographie: 311 m at 49.4845 N, 10.9565 E from 1 June 1947 to 28 February 1954, then 313 m at 49.4811 N,
//    10.9640 E from 1 March 1954; operator DWD. Product file 2,861 days, 1 June 1947 to 31 March 1955; precipitation
//    (RSK) missing (-999) on one day, 31 March 1955. Licence: opendata.dwd.de/climate_environment/CDC/Terms_of_use.txt,
//    "The Creative Commons BY 4.0 - Licence "CC BY 4.0" apply." Raw copy in
//    src-pages/coding-and-ai-classes-in-fuerth-germany/.
// Our own calculations (scratchpad de/w/T6/fuerth/prep.py, v1.py, v2.py, v3.py, python3 -I). A wet day = 1.0 mm or more.
//  v1: "Test days: 818  wet tomorrow: 216"; "Always dry: accuracy 73.6 % missed wet: 216 false alarms: 0";
//      "Same as today: accuracy 69.6 % missed wet: 124 false alarms: 125".
//  v2: "Training days: 2041  learned threshold: 981.0 hPa"; "Pressure rule: accuracy 56.6 % missed wet: 52 false alarms: 303".
//  v3: "Low and falling: accuracy 65.5 % missed wet: 115 false alarms: 167".
//  Wet days (1.0 mm or more) per full year: 1948 106, 1949 81, 1950 122, 1951 106, 1952 134, 1953 89, 1954 109.
//  Coldest daily mean 31 January 1954, -14.3 C; warmest 4 July 1952, 30.0 C. The wettest single day is a known flood day
//  and is deliberately not shown (no disaster content).
// Lesson family: accuracy flatters a model that never says yes when the answer is usually no; count both kinds of mistake
// (a confusion count) before you trust a score.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'days = []',
  'with open("fuerth_1947_1955.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["rain_mm"] != "-999":',
  '            days.append((row["date"], float(row["rain_mm"]), float(row["pressure_hpa"])))',
  '',
  'pairs = []',
  'for today, tomorrow in zip(days, days[1:]):',
  '    pairs.append((today[0], today[1] >= 1.0, today[2], tomorrow[1] >= 1.0))',
  '',
  'test = [p for p in pairs if p[0] >= "1953"]',
  'wet = sum(1 for p in test if p[3])',
  'print("Test days:", len(test), " wet tomorrow:", wet)',
  '',
  'def score(name, guess):',
  '    right = sum(1 for p in test if guess(p) == p[3])',
  '    missed = sum(1 for p in test if p[3] and not guess(p))',
  '    false_alarm = sum(1 for p in test if guess(p) and not p[3])',
  '    print(name, "accuracy", round(100 * right / len(test), 1), "% missed wet:", missed, "false alarms:", false_alarm)',
  '',
  'score("Always dry:", lambda p: False)',
  'score("Same as today:", lambda p: p[1])'
].join('\n');

const V2 = [
  'train = [p for p in pairs if p[0] < "1953"]',
  '',
  'def balanced(rows, t):',
  '    wet = [p for p in rows if p[3]]',
  '    dry = [p for p in rows if not p[3]]',
  '    caught = sum(1 for p in wet if p[2] < t) / len(wet)',
  '    calm = sum(1 for p in dry if p[2] >= t) / len(dry)',
  '    return (caught + calm) / 2',
  '',
  'candidates = [960 + x / 2 for x in range(80)]',
  't = max(candidates, key=lambda c: balanced(train, c))',
  'print("Training days:", len(train), " learned threshold:", t, "hPa")',
  'score("Pressure rule:", lambda p: p[2] < t)'
].join('\n');

const V3 = [
  'falling = {}',
  'for yesterday, today in zip(days, days[1:]):',
  '    falling[today[0]] = today[2] < yesterday[2]',
  '',
  'score("Low and falling:", lambda p: p[2] < t and falling.get(p[0], False))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Fürth: coding and AI, all ages' },
  slug: 'coding-and-ai-classes-in-fuerth-germany',
  code: 'caf',
  accent: '#452F47',
  accentRationale: 'Coding and AI in Fürth: a dark plum #452F47 for the slate and sandstone roofs of the old town between the Rednitz and the Pegnitz; contrast 9.74 on the paper #FBF8F2 and well above 4.5 on every tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-bavaria', name: 'Bavaria' }],
  routeLabel: 'Coding and AI classes in Fürth',
  title: 'Coding and AI Classes in Fürth: Live Online in English',
  description: 'Coding and AI classes in Fürth for children, teens and adults, live online in English: Bavarian Informatik, AI tool ages and a Fürth weather data project.',
  ogDescription: 'Live coding and AI lessons in English for Fürth learners from age 6 to adult, with a machine-learning project on the city\'s own 1947 to 1955 weather record in which the highest score belongs to the most useless model.',
  twitterDescription: 'Coding and AI for every age in Fürth, live in English, with a rain forecast built on Fürth weather data.',
  pageName: 'Coding and AI Classes in Fürth',
  webPageDescription: 'A guide for Fürth children, teenagers, parents and adult learners to live coding and AI classes in English: what Bavarian schools teach in Informatik and when, what the KMK now asks schools to teach about AI, which AI tools each age may use, and an original Python project on the Deutscher Wetterdienst record for the Fürth station.',
  courseDescription: 'Live online coding and AI classes in English for Fürth learners aged 6 to adult: Scratch and Python for children, Python, data and machine learning for teenagers, and Python with applied AI for adults, in a group of fifteen to twenty or one to one with a regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Fürth, all ages',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#who', label: 'Who' },
    { href: '#bayern', label: 'Schools' },
    { href: '#rain', label: 'Rain model' },
    { href: '#clock', label: 'Times' }
  ],
  eyebrow: 'Fürth &middot; Coding and AI &middot; From age 6 to adult',
  h1: 'Coding and AI classes in Fürth',
  lede: 'Ask a computer to forecast rain in Fürth and the laziest answer, "it will stay dry", scores better than every honest attempt. That surprise is the heart of this page. It explains who our live classes in English are for, from a six year old to a working adult, what Bavarian schools teach in Informatik and in which grade, which AI tools each age may sign up for, and a project on the weather the Deutscher Wetterdienst recorded in Fürth from 1947 to 1955.',
  secondaryCta: { href: '#rain', label: 'See the rain model' },
  wa: 'Hello Modern Age Coders, I live in Fürth and would like to try coding and AI classes in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ learners worldwide &middot; we teach the thinking behind the AI',
  spec: [
    ['Who', 'Children 6 to 12, teens, adults'],
    ['Children', 'Scratch, then Python'],
    ['Teens', 'Python, data, machine learning'],
    ['Adults', 'Python, automation, applied AI'],
    ['Class', 'Fifteen to twenty, or one to one'],
    ['Trial', 'A free first class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Coding and AI classes for Fürth at Modern Age Coders run live online, in English, for every age: children from 6 start with Scratch and move to Python, teenagers learn data and build machine-learning models they can explain, and adults learn Python for work and how to use AI with judgement. One regular mentor matches each learner\'s pace and accent, whether they sit among fifteen to twenty classmates or work alone with the mentor.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Which coding and AI course fits each age in Fürth?',
    lede: 'One starting course for each stage of life. The free first class is where a mentor checks the fit and suggests another if it suits better.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CAF / 01', title: 'Python and AI for Kids', note: 'Ages 9 to 12. Typed Python from the first week, turtle drawings and small games, then simple AI ideas such as a rule that learns a threshold, like the rain model below.' },
      { course: 'ai-ml-masterclass-teens', code: 'CAF / 02', title: 'AI and Machine Learning for Teens', note: 'Ages 13 to 18. Python, real data, models trained and tested on separate years, and the habit of asking which mistakes a model makes.' },
      { course: 'python-ai-automation-masterclass-college', code: 'CAF / 03', title: 'Python Automation and Applied AI', note: 'Adults. Scripts that read and report on files, then AI services called from Python, always checked against what the data really says.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Every age',
      h2: 'Who are coding and AI classes in Fürth for?',
      lede: 'Anyone from first grade to retirement who wants to understand how software and AI work, not only how to click them. The order of learning is the same at every age; the speed and the projects change.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Children, 6 to 12', p: 'Younger children drag coloured Scratch blocks into stories and games, so spelling and typing never hold them back. From about nine they type real Python. AI enters as an idea, a program that learns a rule from examples, and never as a chatbot account.' },
          { h3: 'Teenagers, 13 to 18', p: 'Teenagers write Python for data and build small machine-learning models, then test them on data the model has not seen. Many also want help alongside the Informatik they meet at school, which in Bavaria differs by school type and grade.' },
          { h3: 'Adults', p: 'Adults learn Python to save hours at work, to read spreadsheets and reports with code, and to call AI services from their own scripts. The aim is judgement: knowing when an AI answer is right, and how to prove it.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Minimum ages for common AI tools, from each provider\'s own terms', head: ['Tool', 'Minimum age', 'What that means for a Fürth learner'], rows: [
          ['ChatGPT (OpenAI)', '13, with a parent\'s permission under 18', 'Not for primary pupils; teenagers only with a parent\'s agreement'],
          ['Gemini (Google)', '16 in Germany', 'Not for most pupils before Oberstufe age'],
          ['Claude (Anthropic)', '18', 'Adults only; we never use it with under-18s'],
          ['Teachable Machine (Google)', 'No sign-in needed to train', 'Suitable for children in class, with nothing saved to an account']
        ] },
        { kind: 'source', html: 'Sources: the providers\' own terms as collected in our AI tool age audit, which quotes each one (OpenAI terms of use, Google Gemini help, Anthropic consumer terms, Google account help), checked in 2026. Terms change; we check them again before using a tool in class.' },
        { kind: 'p', mt: true, html: 'Because of those age rules, our classes for children and younger teenagers teach how AI works by building small models in Python, not by chatting with one. A twelve year old who has written a program that learns a number from data understands more about AI than one who has typed a hundred prompts.' }
      ]
    },
    {
      id: 'bayern',
      eyebrow: 'Schools in Bavaria',
      h2: 'When does a Fürth pupil meet Informatik at school?',
      lede: 'It depends on the school. Bavaria gives every Mittelschule pupil a weekly Informatik lesson, while the Gymnasium spreads it more thinly until grade 11. The Gesellschaft für Informatik sets out the rules for 2026/27.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik at Bavarian schools in 2026/27, by school type and grade', head: ['School type', 'Grades', 'What the timetable holds'], rows: [
          ['Mittelschule', '5 to 10', 'Informatik as a compulsory subject, one lesson a week in each grade'],
          ['Gymnasium', '6 and 7', 'One weekly lesson with an Informatik focus inside the compulsory subject Natur und Technik'],
          ['Gymnasium, NTG branch', '9 and 10', 'Compulsory Informatik'],
          ['Gymnasium, every branch', '11', 'Two compulsory lessons of informatics a week'],
          ['Abitur', 'End of Oberstufe', 'Written Informatik tasks set centrally, mostly programming on paper, with no work at a computer']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Bayern page, read on 2 November 2026. The Monitor quotes the Bavarian rules: one weekly lesson "in den Jahrgangsstufen 5 bis 10" at the Mittelschule, and in grade 11 "in allen Ausbildungsrichtungen verpflichtend zweistündig Informatikunterricht".' },
        { kind: 'two', mt: true,
          leftH3: 'What this means for a Fürth family',
          left: [
            'A Fürth child spends grades 1 to 4 in Grundschule, which the Bavarian Informatik rules above do not cover. At a Gymnasium, the first fixed computing time is one lesson a week in grades 6 and 7, then a gap for most branches until grade 11.',
            'That gap, roughly from age 13 to 16, is when many teenagers either lose interest in computing or teach themselves. A weekly live class keeps the thread going until the Oberstufe picks it up again.'
          ],
          rightH3: 'AI in the school framework',
          right: [
            'The Kultusministerkonferenz adopted its strategy "Bildung in der digitalen Welt" in 2016. Ten years later, in 2026, it added AI-related competences through an updated competence framework, after a 2024 recommendation to school administrations on handling AI in learning.',
            'So AI is now an official part of what German schools are asked to teach. How it reaches a Fürth classroom is up to Bavaria and each school; our classes sit alongside that and never replace it.'
          ] },
        { kind: 'p', mt: true, html: 'The Bavarian Abitur detail matters for older pupils. Because the written Informatik exam is on paper, a pupil has to be able to read and trace code without running it. Our teenagers practise exactly that: before any program on this page is run, the learner writes down what they expect it to print.' }
      ]
    },
    {
      id: 'rain',
      tint: 'tint',
      eyebrow: 'A Fürth data project',
      h2: 'Can a computer learn to forecast rain from Fürth weather data?',
      lede: 'A little, and the way it fails is the lesson. The Deutscher Wetterdienst publishes every day its Fürth station recorded from 1947 to 1955, free to reuse under CC BY 4.0. Our learners build a tiny rain forecast on it and discover that the score most people look at first can be fooled.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The station is called "Fürth/Bayern (A)", number 01522 in the DWD Climate Data Center. Its file of daily climate data runs from 1 June 1947 to 31 March 1955, 2,861 days, with the rain, air pressure, temperature and cloud cover for each one. We downloaded it on 3 November 2026.',
            'The station metadata records a move: from 1 March 1954 it stood two metres higher, at 313 m instead of 311 m, a short distance away. Only one rain value is missing, on the very last day. Old data, carefully kept.'
          ],
          rightH3: 'The question',
          right: [
            'Given today\'s weather, will tomorrow be wet, with 1 mm of rain or more? We train on the years 1947 to 1952 and test on 1953 to 1955, so the program is judged on days it has never seen.',
            'We give learners a small file, fuerth_1947_1955.csv, with the date, the rain, the station pressure in hectopascals, the mean temperature and the cloud cover. The first program tries two models that need no learning at all.'
          ] },
        { kind: 'code', label: 'Version 1: two models that learn nothing', lang: 'Python', code: V1, note: 'It prints: <code>Test days: 818  wet tomorrow: 216</code>, then <code>Always dry: accuracy 73.6 % missed wet: 216 false alarms: 0</code> and <code>Same as today: accuracy 69.6 % missed wet: 124 false alarms: 125</code>.' },
        { kind: 'p', mt: true, html: 'Read that twice. A program that answers "dry" every single day is right 73.6% of the time, because in Fürth most days are dry. It beats the program that copies today\'s weather. And it never warned anyone about a single one of the 216 wet days. That is why "accuracy" alone is a dangerous number, in weather and in every AI system built to spot something rare.' },
        { kind: 'p', html: 'So we count the two kinds of mistake separately: a wet day the model missed, and a false alarm on a dry day. Then we let the program learn something. Falling air pressure often comes before rain, so Version 2 tries every pressure threshold from 960 to 999.5 hPa on the training years and keeps the one that does equally well on wet and dry days.' },
        { kind: 'code', label: 'Version 2: learn a pressure threshold', lang: 'Python', code: V2, note: 'Run after Version 1, it prints: <code>Training days: 2041  learned threshold: 981.0 hPa</code> and <code>Pressure rule: accuracy 56.6 % missed wet: 52 false alarms: 303</code>.' },
        { kind: 'p', mt: true, html: 'The learned rule catches 164 of the 216 wet days, which neither earlier model came close to, yet its accuracy falls to 56.6% because it raises 303 false alarms. Which model is better? There is no answer until someone decides which mistake costs more. For a farmer cutting hay, a missed shower is expensive. For a school trip, a false alarm only means an umbrella nobody needed.' },
        { kind: 'code', label: 'Version 3: low pressure and falling', lang: 'Python', code: V3, note: 'Run after Versions 1 and 2, it prints: <code>Low and falling: accuracy 65.5 % missed wet: 115 false alarms: 167</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Four rain models on 818 test days in Fürth, 1953 to 1955 (our calculation)', head: ['Model', 'Accuracy, %', 'Wet days missed', 'False alarms'], rows: [
          ['Always dry', '73.6', '216', '0'],
          ['Same as today', '69.6', '124', '125'],
          ['Pressure below 981.0 hPa', '56.6', '52', '303'],
          ['Low and falling', '65.5', '115', '167']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, daily climate data, station 01522 Fürth/Bayern (A), 1 June 1947 to 31 March 1955, licence CC BY 4.0, downloaded 3 November 2026. A wet day is our definition: 1.0 mm of rain or more. All models, thresholds and counts are our own.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Wet days (1.0 mm or more) at the Fürth station in each full year (our count)', head: ['Year', 'Wet days'], rows: [
          ['1948', '106'], ['1949', '81'], ['1950', '122'], ['1951', '106'], ['1952', '134'], ['1953', '89'], ['1954', '109']
        ] },
        { kind: 'source', html: 'Our count from the same DWD file. 1949 had the fewest wet days of the seven full years and 1952 the most, so a model trained on some years and tested on others meets a different climate each time, one more reason to test on separate years.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> For two weeks, guess each evening whether tomorrow will be wet, and keep a tally of right guesses, missed rain and false alarms. Then try "always dry" on the same days.',
          '<strong>Ages 9 to 12, Python.</strong> Run Version 1 and explain to a parent why "always dry" wins on accuracy. Then change the wet-day line from 1.0 mm to 5.0 mm and predict, before running, what happens to the score.',
          '<strong>Teenagers.</strong> Write Version 2 yourself before reading ours, then add a column for the share of wet days caught. Which model would you pick for a hay farmer, and which for a school trip?',
          '<strong>Adults.</strong> Replace the two-way score with a cost: a missed wet day costs five, a false alarm costs one. Find the threshold with the lowest total cost on the training years and check it on the test years.'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Will the lessons be in German or English?',
      lede: 'In English, always. We say so before anyone books, because it matters to Fürth families.',
      body: [
        { kind: 'two',
          leftH3: 'What English-only means in practice',
          left: [
            'Every lesson is live and taught in English by a mentor based in India. We do not run German-language classes, and no lesson switches into German.',
            'Mentors speak clearly, slow down for younger children, and get used to each learner\'s accent within a few lessons. When a child reaches for a German word mid-sentence, the mentor simply supplies the English for it and carries on.'
          ],
          rightH3: 'Why it works for coding',
          right: [
            'Python keywords such as if, for and print are English words already, so learning in English removes a layer of translation rather than adding one.',
            'For teenagers and adults, the documentation, error messages and AI tools they will use later are mostly in English too. Coding and English improve together.'
          ] }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Times and holidays',
      h2: 'When are live classes in Fürth time?',
      lede: 'After school and work in Fürth is evening in India, which is why the hours fit. Bavarian school holidays do not stop classes.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Fürth start times beside the hour in India', head: ['Fürth time', 'India time, winter (to 28 March 2027)', 'India time, summer (from 28 March 2027)'], rows: [
          ['16:15', '20:45', '19:45'],
          ['18:00', '22:30', '21:30'],
          ['Saturday 11:00', '15:30', '14:30'],
          ['Sunday 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'German clocks follow the Einheitenzeitgesetz: MEZ is UTC+1 and MESZ, the summer clock, is UTC+2. The clocks went back on 25 October 2026 and go forward on 28 March 2027. India never changes from UTC+5:30, so it runs 4 hours 30 minutes ahead of Fürth through the winter and 3 hours 30 minutes ahead in summer. The rows are illustrations; no batch is tied to them.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Bavarian school holidays in the 2026/27 school year (KMK table)', head: ['Holiday', 'First and last day'], rows: [
          ['Herbstferien', '2 to 6 November 2026'],
          ['Weihnachtsferien', '24 December 2026 to 8 January 2027'],
          ['Winterferien', '8 to 12 February 2027'],
          ['Osterferien', '22 March to 2 April 2027'],
          ['Pfingstferien', '18 to 28 May 2027'],
          ['Sommerferien', '2 August to 13 September 2027']
        ] },
        { kind: 'source', html: 'Source: Kultusministerkonferenz, Ferien im Schuljahr 2026/2027, Bayern row, status 9 October 2025. The KMK fixes the summer holidays; Bavaria sets the others.' },
        { kind: 'p', mt: true, html: 'The Bavarian autumn break in early November is a good moment for a free first class without homework in the way. Families who travel in August simply pause and pick up again in September; the mentor keeps notes on where the learner stopped.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How does a Fürth learner progress from first program to AI model?',
    lede: 'Our milestones, in the same order for every age. Children reach them over years, adults over months.',
    table: { caption: 'Milestones in coding and AI (ours)', head: ['Milestone', 'Child, usual age', 'Teen or adult, usual month'], rows: [
      ['Writes exact step-by-step instructions', '6 to 8', 'Month 1'],
      ['Uses loops, conditions and variables', '8 to 10', 'Month 1'],
      ['Reads a data file and counts with it', '10 to 12', 'Month 2'],
      ['Tests a rule on data it was not built on', '11 to 12', 'Month 3'],
      ['Counts each kind of mistake a model makes', 'From 12', 'Months 3 to 5'],
      ['Chooses a model by the cost of its mistakes', 'Teenagers', 'Months 5 to 7']
    ] },
    left: { h3: 'For learners', ps: [
      'Before you celebrate a high score, ask what the laziest possible program would score on the same data.',
      'Always keep some data back for testing. A rule that only works on the days it learned from has learned nothing.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your child which mistake their program makes most often. A clear answer is a sign of real understanding.',
      'Monthly notes describe what was built and what was hard, never just the hours spent.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Fürth learners',
    lede: 'Sorted into three age bands. Each runs live in English with a mentor who stays with the learner throughout.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'CAF / KID / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch games and stories from age 6, then apps.' },
        { code: 'CAF / KID / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How machines learn, with no adult accounts.' },
        { code: 'CAF / KID / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic puzzles before any code at all.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CAF / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first lines to real projects.' },
        { code: 'CAF / TEEN / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Files, charts and honest conclusions.' },
        { code: 'CAF / TEEN / 03', slug: 'informatik-abitur-course-java-python', title: 'Informatik Oberstufe and Abitur', blurb: 'Java and Python alongside the school course.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Work and study', courses: [
        { code: 'CAF / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'A full Python course for adult beginners.' },
        { code: 'CAF / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Spreadsheets to Python, with checks at each step.' },
        { code: 'CAF / ADULT / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Working with coding agents, for adults only.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How are live coding and AI classes run for Fürth learners?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Late afternoon', l: 'For pupils after school in Fürth.' },
      { time: 'Early evening', l: 'For adults after work, until about 18:00.' },
      { time: 'Weekend', l: 'Saturday or Sunday mornings for any age.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'A familiar face at every lesson, all year.' },
      { h3: 'Live, not recorded', p: 'Every class is taught in real time.' },
      { h3: 'Code before AI', p: 'Learners build the model before using one.' },
      { h3: 'Ages kept apart', p: 'Children, teens and adults never share a class.' },
      { h3: 'Mistakes counted', p: 'Every project ends by asking what went wrong.' },
      { h3: 'Group or private', p: 'A shared class of 15 to 20, or a private one.' }
    ]
  },

  projectsH2: 'What do our students build?',
  projectsLede: 'A few projects by our students in other countries, built in the same live classes. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows many more.',
  reviewsLede: 'Learners and parents in their own words, from our Google reviews.',

  fees: {
    h2: 'What do coding and AI classes cost in Fürth?',
    lede: 'One monthly fee covers eight live classes. The euro amounts on this page are converted using the reference rate the European Central Bank publishes; the charge itself is made in US dollars, which your bank turns into euro, so a statement can differ by a little.',
    free: ['A free first class', 'A short problem and a first program', 'No card needed'],
    group: ['A class of 15 to 20 near the learner\'s age', 'A regular mentor', 'Two live classes a week', 'Monthly, cancel any month'],
    one: ['One learner and one mentor', 'Pace and projects set for you', 'Times agreed with you']
  },

  faq: {
    eyebrow: 'Questions from Fürth',
    h2: 'Coding and AI classes in Fürth: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons happen live in English and in no other language. The mentors work from India and adjust to how quickly each learner moves and to how they speak. There is no German-language option.' },
      { q: 'Who are the classes for?', a: 'Children from 6, teenagers and adults. Children start with Scratch and move to Python, teenagers learn data and machine learning, and adults learn Python and applied AI. Age groups are always taught separately.' },
      { q: 'Do Bavarian schools teach coding?', a: 'Partly. The Gesellschaft für Informatik records one compulsory Informatik lesson a week in grades 5 to 10 at the Mittelschule, one weekly Informatik-focused lesson in grades 6 and 7 at the Gymnasium, and two compulsory lessons of informatics in grade 11. Those rules start in secondary school.' },
      { q: 'Will my child use ChatGPT in class?', a: 'Children do not. OpenAI sets 13 as its minimum and asks for a parent\'s permission up to 18, Google sets 16 for Gemini in Germany, and Claude is for adults only. Children learn how AI works by building small models in Python instead.' },
      { q: 'When are classes in Fürth time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Fürth afternoons and early evenings are evenings in India, so the hours fit well.' },
      { q: 'What is the Fürth rain project?', a: 'An original Python project of ours on the daily record of the Deutscher Wetterdienst station Fürth/Bayern from 1947 to 1955. Learners find that a model which always says dry scores 73.6% accuracy on the test years while missing all 216 wet days, and learn to count each kind of mistake.' },
      { q: 'Is the weather data free to use?', a: 'Yes. The Deutscher Wetterdienst publishes its climate data under the Creative Commons BY 4.0 licence, which allows reuse with credit. We name the source wherever the data appears.' },
      { q: 'Can adults join, or is it only for children?', a: 'Adults are welcome and have their own classes. Most adult learners in Germany want Python for work, data analysis, or to understand and check the AI tools their employer has introduced.' },
      { q: 'How big are the groups?', a: 'Group classes have fifteen to twenty learners of a similar age. A one-to-one plan gives two private classes a week at agreed times with the same mentor.' },
      { q: 'How are fees charged?', a: 'Once a month. The page displays euro, converted with the European Central Bank reference rate, and the charge goes through in US dollars for your bank to convert. Trying the first class costs nothing, and no card details are asked for.' }
    ]
  },

  elsewhere: {
    eyebrow: 'See also',
    h2: 'Related pages',
    lede: 'More for Fürth learners and families.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our hub for every page about Germany.' },
      { href: '/coding-classes-in-bavaria', label: 'Coding classes in Bavaria', p: 'The Land rules, holidays and a Bavarian project.' },
      { href: '/informatik-abitur-bayern', label: 'Informatik-Abitur in Bayern', p: 'The written exam and the Oberstufe course.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'A second machine-learning project on German data.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Each tool\'s age rule, quoted.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A lesson, minute by minute.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Fürth',
    lede: 'The trial lesson is short and hands-on: one small problem, one first program, and a chat about what the learner hopes to make. By the end the mentor has a feel for their reasoning and their English, and recommends where to begin.',
    readFirst: 'Curious about the format? The <a class="ag-inline-link" href="/how-we-teach">how we teach</a> page walks through a lesson, and <a class="ag-inline-link" href="/courses">the course list</a> holds each syllabus.',
    note: 'Every class is live online with a mentor in India, in English only. WhatsApp is the quickest way to reach us.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Learn', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-bavaria', label: 'Coding classes in Bavaria' },
        { href: '/informatik-abitur-bayern', label: 'Informatik-Abitur Bayern' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' }
      ] }
    ],
    bottomRight: 'Ask what the lazy model would score'
  },

  personalityCss: `
.ag-root.ag-caf .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-caf .ag-capsule { border-left-width: 4px; }
.ag-root.ag-caf .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-caf .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-caf .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27, Bayern page; KMK, Bildung in der digitalen Welt (2016 strategy, 2024 AI recommendation, 2026 framework); KMK Ferien im Schuljahr 2026/2027, Bayern row; AI providers\' terms via content/ai-tool-age-audit.json; Einheitenzeitgesetz; all read 2 to 3 November 2026. Deutscher Wetterdienst, Climate Data Center, station 01522 Fürth/Bayern (A), CC BY 4.0.',
    localProject: 'A rain forecast on the DWD daily record of the Fürth station, 1947 to 1955: "always dry" scores 73.6% accuracy on 818 test days while missing all 216 wet days; a learned pressure threshold of 981.0 hPa catches 164 of them at the cost of 303 false alarms; plus screen-free, Python, teen and adult cost versions. Lesson family: count both kinds of mistake before trusting accuracy.',
    requiredMentions: ['fuerth_1947_1955.csv', 'Always dry: accuracy 73.6 % missed wet: 216 false alarms: 0', 'learned threshold: 981.0 hPa', 'Low and falling: accuracy 65.5 % missed wet: 115 false alarms: 167', 'Fürth/Bayern (A)', '2 to 6 November 2026', 'Gemini (Google)', 'Ask what the lazy model would score'],
    sources: [
      { claim: 'Bavarian Informatik by school type and grade; central written Abitur on paper.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bayern' },
      { claim: 'KMK digital strategy 2016, AI recommendation 2024, AI framework 2026.', url: 'https://www.kmk.org/themen/bildung-in-der-digitalen-welt.html' },
      { claim: 'Bavarian holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Fürth station daily climate data.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/' },
      { claim: 'DWD open data licence CC BY 4.0.', url: 'https://opendata.dwd.de/climate_environment/CDC/Terms_of_use.txt' }
    ],
    rejectedClaims: [
      'The wettest day in the file: a known flood day, left out under the no-disaster rule.',
      'What the "(A)" in the station name stands for, or where exactly the station stood: not stated in the metadata, so not given.',
      'Any Fürth figure for our students: none exists; brand facts are worldwide only.',
      'German-language teaching, and any link with the city, the Bavarian ministry or the DWD: none.'
    ]
  }
};
