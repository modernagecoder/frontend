'use strict';
// Coding and AI classes in Braunschweig (ag- city page, Germany cluster P6 row DE152, tier-2 shape coding-and-ai = all
// ages, coding and AI). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; euro shown, USD charged.
// Spine: a prediction is only useful if you study where it fails. Three audiences (children, teens, adults) and one
// Braunschweig footfall model whose biggest misses turn out to be one counter disagreeing with its neighbour.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, Niedersachsen page: "An allen allgemeinbildenden Schularten wird seit dem Schuljahr
//    2024/25 das Pflichtfach Informatik in den Jahrgangsstufen 9 und 10 unterrichtet." (79); Oberstufe "Jahrgangsstufe
//    11 als Einführungsphase sowie die Jahrgangsstufen 12 und 13 als Qualifikationsphase (G9-Bildungsgang)" (50).
//    National page: Baden-Württemberg, Niedersachsen and Bremen "ungefähr jede zwölfte Person" takes Informatik (99).
//  - BWKI (bw-ki.de): run by the Tübingen AI Center (208); Sek I and II (209); documentation, runnable code, video pitch
//    (211); German or English (213); 2026 final in Tübingen 13.11.2026 (214).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025), Niedersachsen: Herbst 12.10. - 24.10., Weihnachten 23.12. - 09.01., Winter
//    01.02. - 02.02., Ostern 22.03. - 03.04., Sommer 08.07. - 18.08. (277).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Braunschweig 252,962; Wolfsburg 129,560; Salzgitter 104,970;
//    Hannover 522,131; Niedersachsen 8,004,489.
//  - AI tool ages: content/ai-tool-age-audit.json (Claude 18+; ChatGPT needs a parent's permission under 18); this page
//    recommends no named chatbot to under-18s.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Braunschweig (Stadtmarketing), "Passantenfrequenzen Innenstadt", opendata.braunschweig.de dataset
//    passantenfrequenzen-innenstadt, dataset page "Lizenz cc-by/4.0" (commercial reuse with attribution). Resource
//    description: daily counts 19.9.2016 to 31.12.2022 for "Sack, Neue Straße (ab April 2019), Schuhstraße, Poststraße,
//    Hutfiltern, Damm, Langer Hof, Friedrich-Wilhelm-Straße (ab Juli 2021)". File "Passantenfrequenz Innenstadt 19.09.2016
//    bis 31.12.2022_all_in_one.csv" downloaded 3 November 2026, 472,722 bytes, sha256 266dad2b80182fc5..., semicolon
//    separated, Latin-1, last column a text weather note. Raw copy in src-pages/coding-and-ai-classes-in-braunschweig-germany/.
// Our own calculations (scratchpad de/w/T2/run/bra/v1.py, v2.py, python3 -I, Python 3.14.8), column 13 = Hutfiltern total,
//  column 25 = Schuhstraße 24-27 total, zero and blank days skipped:
//  v1: "Typical Monday to Sunday: [17867, 17826, 18412, 18578, 21861, 32978, 7947]" (2017 to 2019), "Days tested in 2022:
//  349  average miss: 5696". Worst 2022 days: 2022-11-10 Thu 79097 (expected 18578), 2022-07-19 Tue 62926, 2022-08-25 Thu
//  63272, 2022-07-18 Mon 56940, 2022-07-27 Wed 55980, 2022-08-02 Tue 52666.
//  v2: "Usual ratio Hutfiltern / Schuhstraße: 1.12"; 2022-11-10 ratio 4.19, 2022-07-19 4.13, 2022-08-25 3.26, 2022-07-18
//  2.58. Median 2022 Hutfiltern day 19,560.
// Lesson family: study the biggest errors, and cross-check an outlier against a neighbour before believing it.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  'from datetime import date',
  '',
  'counts = {}',
  'with open("braunschweig_footfall.csv", encoding="latin-1") as f:',
  '    rows = csv.reader(f, delimiter=";")',
  '    next(rows)',
  '    for row in rows:',
  '        if row[0].count(".") == 2 and row[13] not in ("", "0"):',
  '            d, m, y = row[0].split(".")',
  '            counts[date(int(y), int(m), int(d))] = int(row[13])   # column 13: Hutfiltern',
  '',
  '# learn: the average footfall for each weekday, from 2017 to 2019',
  'sums, days = [0] * 7, [0] * 7',
  'for day, n in counts.items():',
  '    if 2017 <= day.year <= 2019:',
  '        sums[day.weekday()] += n',
  '        days[day.weekday()] += 1',
  'typical = [round(sums[i] / days[i]) for i in range(7)]',
  'print("Typical Monday to Sunday:", typical)',
  '',
  'test = {day: n for day, n in counts.items() if day.year == 2022}',
  'errors = {day: n - typical[day.weekday()] for day, n in test.items()}',
  'average_miss = sum(abs(e) for e in errors.values()) / len(errors)',
  'print("Days tested in 2022:", len(test), " average miss:", round(average_miss))'
].join('\n');

const V2 = [
  '# a crowd walks past more than one counter: check the neighbour, Schuhstraße (column 25)',
  'schuh = {}',
  'with open("braunschweig_footfall.csv", encoding="latin-1") as f:',
  '    rows = csv.reader(f, delimiter=";")',
  '    next(rows)',
  '    for row in rows:',
  '        if row[0].count(".") == 2 and row[25] not in ("", "0"):',
  '            d, m, y = row[0].split(".")',
  '            schuh[date(int(y), int(m), int(d))] = int(row[25])',
  '',
  'normal = [counts[d] / schuh[d] for d in counts if d in schuh and 2017 <= d.year <= 2019]',
  'print("Usual ratio Hutfiltern / Schuhstraße:", round(sum(normal) / len(normal), 2))',
  'worst = sorted(errors, key=lambda day: abs(errors[day]), reverse=True)[:4]',
  'for day in worst:',
  '    print(day, "Hutfiltern", test[day], "Schuhstraße", schuh[day], "ratio", round(test[day] / schuh[day], 2))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Braunschweig: coding and AI' },
  slug: 'coding-and-ai-classes-in-braunschweig-germany',
  code: 'brb',
  accent: '#4A5A3D',
  accentRationale: 'Coding and AI classes, Braunschweig: a weathered bronze-green #4A5A3D, after the patina of the lion on Burgplatz; contrast 6.04 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-lower-saxony', name: 'Lower Saxony' }],
  routeLabel: 'Coding and AI classes in Braunschweig',
  title: 'Coding and AI Classes in Braunschweig: Live, in English',
  description: 'Coding and AI classes in Braunschweig for children, teens and adults, live online in English: what AI is, Informatik in Lower Saxony, and a city footfall model.',
  ogDescription: 'Live online coding and AI in English for Braunschweig learners of every age: a plain explanation of what AI does, how Informatik works in Niedersachsen, and an original model of footfall on Hutfiltern whose worst misses reveal a counter problem.',
  twitterDescription: 'Coding and AI for every age in Braunschweig, live in English, with a footfall model built on the city\'s own counts.',
  pageName: 'Coding and AI Classes in Braunschweig',
  webPageDescription: 'A guide for Braunschweig children, teenagers, adults and parents to learning coding and AI live online in English, built on Gesellschaft für Informatik, KMK and BWKI sources and an original prediction project on Stadt Braunschweig\'s open pedestrian counts.',
  courseDescription: 'Live online coding and AI classes in English for Braunschweig: Scratch and Python for children, Python and machine learning for teenagers, applied Python and AI for adults, with a regular mentor, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Coding and AI in Braunschweig',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#who', label: 'Every age' },
    { href: '#model', label: 'AI project' },
    { href: '#school', label: 'School' }
  ],
  eyebrow: 'Braunschweig &middot; Coding and AI &middot; Every age',
  h1: 'Coding and AI classes in Braunschweig',
  lede: 'Machine learning sounds mysterious until you build a small model yourself and watch it get things wrong. That is how we teach AI to learners in Braunschweig, whether they are nine, sixteen or fifty: code first, then a model, then a careful look at its mistakes. Below you will find what each age group does, how Informatik is organised at Lower Saxony\'s schools, and a project on the city\'s own pedestrian counts in which the worst predictions lead to a surprising discovery.',
  secondaryCta: { href: '#model', label: 'See the footfall model' },
  wa: 'Hello Modern Age Coders, I am in Braunschweig and interested in your live coding and AI classes in English. Could I book a free first class?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students worldwide &middot; rated 4.9 from about 547 Google reviews',
  spec: [
    ['Ages', '8 to adult, grouped by age'],
    ['Core skills', 'Python, data, machine learning'],
    ['Format', 'Live video lessons'],
    ['Group size', '15 to 20, or one to one'],
    ['Teaching', 'English, by mentors in India'],
    ['First class', 'Free of charge']
  ],
  capsuleQ: 'In a few lines',
  capsule: 'Modern Age Coders offers coding and AI classes for Braunschweig learners of every age, taught live online in English. Children start with Scratch and typed Python; teenagers learn Python and build machine-learning models from real data; adults learn applied Python and AI for work. Each learner has a regular mentor who matches their pace and accent, in a group of 15 to 20 or one to one, with times that suit afternoons, evenings or weekends.',

  picks: {
    eyebrow: 'One course per age group',
    h2: 'Which coding and AI course fits which age in Braunschweig?',
    lede: 'Three starting points: one for children, one for teenagers, one for adults. Each ends with a model the learner built and can explain.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'BRB / 01', title: 'Python and AI for Kids', note: 'For children from about 9. Typed Python, turtle drawings and games, then playful projects where the computer learns a simple pattern from examples.' },
      { course: 'ai-ml-masterclass-teens', code: 'BRB / 02', title: 'AI and Machine Learning for Teens', note: 'For teenagers who want to understand models, not just use apps. Python, data cleaning, training and testing, with projects like the footfall model below.' },
      { course: 'ai-ml-masterclass-complete-college', code: 'BRB / 03', title: 'AI and ML Masterclass for adults', note: 'For adults and university students. Python, classic machine learning, neural networks and how today\'s generative AI fits in, taught at working pace.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Every age',
      h2: 'What does a coding and AI class look like at 9, 15 and 40?',
      lede: 'The same ideas, three very different classrooms. All three are live, small enough to ask questions in, and taught in English.',
      body: [
        { kind: 'table', numCols: [], caption: 'Coding and AI by age group (our course plan)', head: ['Learner', 'Starts with', 'First AI idea', 'A project they finish'], rows: [
          ['Child, about 8 to 12', 'Scratch, then typed Python', 'A program that sorts examples into two groups', 'A guessing game that learns from its mistakes'],
          ['Teenager, 13 to 18', 'Python, lists, files', 'Average of past days as a prediction', 'A footfall forecast, tested on a year it never saw'],
          ['Adult', 'Python for work data', 'Training and testing, error measures', 'A model for a real work or hobby dataset, with its limits written down']
        ] },
        { kind: 'source', html: 'Our own course plan; mentors place each learner after the free first class. We teach under-18s with tools suitable for their age and do not ask children to open accounts with chatbots that require adult consent.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Children', p: 'Short lessons, lots of building. A child learns that a computer only does what it is told, then that it can be told to look for a pattern. The word "algorithm" arrives after the idea, not before.' },
          { h3: 'Teenagers', p: 'Real Python and real data. Teenagers in Braunschweig can use what they learn in Informatik at school in grades 9 and 10 and, later, in a BWKI project. They learn to ask how a model could be fooled.' },
          { h3: 'Adults', p: 'Clear explanations without hype. Adults learn what machine learning can and cannot do for their work, write the code themselves and learn to judge a model by its errors rather than by its demo.' }
        ] }
      ]
    },
    {
      id: 'ai',
      eyebrow: 'What AI really is',
      h2: 'What does "AI" mean in a class, as opposed to on the news?',
      lede: 'In our lessons it means something small and checkable: a program that learns a rule from past examples and then makes a guess about new ones.',
      body: [
        { kind: 'two',
          leftH3: 'Learn from the past',
          left: [
            'Every model in our courses starts the same way. Take examples where you know the answer, find a pattern, and store it. The simplest pattern is an average: on a typical Saturday, this many people walked past.',
            'That is already machine learning in miniature. A neural network is the same idea with millions of stored numbers instead of seven.'
          ],
          rightH3: 'Test on the future',
          right: [
            'The second step is the one people skip. Hide some examples from the model, let it guess them, and measure how far off it was. Only that number tells you whether the model is any good.',
            'The third step is the one we care about most: look at the largest mistakes one by one. They tell you what the model does not know, and sometimes what the data does not know either.'
          ] },
        { kind: 'p', mt: true, html: 'This is also why we teach thinking rather than copying. A learner who has built and broken a small model of their own can read a confident chatbot answer and ask what it was trained on, what it was tested on and where it would fail. That habit is worth more than any single tool, and it stays useful when the tools change.' }
      ]
    },
    {
      id: 'model',
      tint: 'tint',
      eyebrow: 'A real Braunschweig project',
      h2: 'Can a computer predict how many people walk down Hutfiltern?',
      lede: 'Stadt Braunschweig publishes daily pedestrian counts from the city centre as open data under CC BY 4.0. Our teenage and adult learners build the simplest honest model on them, and then interrogate its worst days.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file holds daily counts from 19 September 2016 to 31 December 2022 for the measuring points Sack, Schuhstraße, Poststraße, Hutfiltern, Damm and Langer Hof, plus Neue Straße from April 2019 and Friedrich-Wilhelm-Straße from July 2021. The last column even carries a short weather note.',
            'We use Hutfiltern, by the Burg Passage, which has a count on most days of the whole period, and we skip days recorded as zero or left blank.'
          ],
          rightH3: 'The model',
          right: [
            'Learn one number for each weekday from 2017, 2018 and 2019: the average footfall on Mondays, on Tuesdays, and so on. Then predict every day of 2022 with nothing but its weekday, and measure the miss.',
            'It is a deliberately plain model. The point is not to win a competition but to see clearly where a plain model goes wrong.'
          ] },
        { kind: 'code', label: 'Version 1: a weekday model, tested on 2022', lang: 'Python', code: V1, note: 'It prints: <code>Typical Monday to Sunday: [17867, 17826, 18412, 18578, 21861, 32978, 7947]</code> and <code>Days tested in 2022: 349  average miss: 5696</code>.' },
        { kind: 'p', mt: true, html: 'The pattern it learned is sensible: weekdays near 18,000, Friday higher, Saturday the busiest by far at almost 33,000, Sunday under 8,000 because shops are shut. On 2022 the model misses by about 5,700 people a day on average. That sounds poor until you list the worst days: Thursday 10 November 2022 with 79,097 counted against 18,578 expected, then 18 and 19 July, 27 July, 2 August and 25 August, each with more than 50,000.' },
        { kind: 'p', html: 'A beginner says "there must have been events". A careful learner asks a better question: if 79,097 people really walked down Hutfiltern, did they also walk down the next street? People do not teleport. The second program checks the neighbouring counter on Schuhstraße on the same days.' },
        { kind: 'code', label: 'Version 2: ask the neighbour', lang: 'Python', code: V2, note: 'It prints: <code>Usual ratio Hutfiltern / Schuhstraße: 1.12</code>, then <code>2022-11-10 Hutfiltern 79097 Schuhstraße 18864 ratio 4.19</code>, <code>2022-07-19 Hutfiltern 62926 Schuhstraße 15236 ratio 4.13</code>, <code>2022-08-25 Hutfiltern 63272 Schuhstraße 19432 ratio 3.26</code> and <code>2022-07-18 Hutfiltern 56940 Schuhstraße 22103 ratio 2.58</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'The four largest misses of 2022 next to the neighbouring counter (our calculation)', head: ['Day', 'Hutfiltern', 'Schuhstraße', 'Ratio (usually 1.12)'], rows: [
          ['Thu 10 November 2022', '79,097', '18,864', '4.19'],
          ['Tue 19 July 2022', '62,926', '15,236', '4.13'],
          ['Thu 25 August 2022', '63,272', '19,432', '3.26'],
          ['Mon 18 July 2022', '56,940', '22,103', '2.58']
        ] },
        { kind: 'source', html: 'Data: Stadt Braunschweig, Passantenfrequenzen Innenstadt, opendata.braunschweig.de, licence CC BY 4.0, downloaded 3 November 2026. The weekday model, the ratios and the averages are our own calculations; days with a zero or blank count are left out. The file does not say why these days are high, so neither do we.' },
        { kind: 'p', mt: true, html: 'On an ordinary day Hutfiltern counts about 1.12 people for every one on Schuhstraße. On the worst days it counts three or four times as many, while Schuhstraße looks completely normal. A crowd would show up on both. So the model\'s biggest "errors" are more likely a problem at one counter than a crowd the model failed to foresee, and a learner who removed them would get a fairer picture of how good the model is. Whether a sensor was disturbed, the data do not tell us, and we say so.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Warm up.</strong> Run Version 1. Which weekday is busiest, and by how much compared with Monday?',
          '<strong>Investigate.</strong> Run Version 2 for the top ten misses, not four. How many still look like a one-counter problem?',
          '<strong>Improve the model.</strong> Learn a separate average for each weekday in each month. Does the average miss on 2022 go down?',
          '<strong>Think it through.</strong> Write a short note to the city explaining what you found, what you cannot know, and what extra data would settle it.'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'School in Lower Saxony',
      h2: 'Do Braunschweig schools teach Informatik?',
      lede: 'Yes, to every pupil for two years, then by choice. Few carry it into the Oberstufe, which is where outside practice can help.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik for a pupil in Niedersachsen', head: ['Stage', 'Grades', 'What the Informatik-Monitor 2026/27 records'], rows: [
          ['Sekundarstufe I', '9 and 10', 'Compulsory Informatik at all general school types since 2024/25'],
          ['Einführungsphase', '11', 'First year of the gymnasiale Oberstufe (G9)'],
          ['Qualifikationsphase', '12 and 13', 'Abitur courses; in Niedersachsen about one pupil in twelve takes Informatik']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Niedersachsen page and national overview ("ungefähr jede zwölfte Person"), read 2 November 2026. We are not connected with the Land, the KMK or any school.' },
        { kind: 'p', mt: true, html: 'So a Braunschweig pupil meets Informatik as a compulsory subject in grades 9 and 10. Before that, between about 8 and 14, coding depends on what the family and the school\'s clubs offer. After it, only a small share of Oberstufe pupils in Niedersachsen choose the subject. We teach alongside school at every stage, and for Abitur pupils the school course is the one that counts.' },
        { kind: 'p', html: 'For teenagers who want a goal, the Bundeswettbewerb Künstliche Intelligenz (BWKI), run by the Tübingen AI Center, is open to Sekundarstufe I and II pupils, who submit documentation, runnable code and a short video pitch, in German or English. The 2026 final is in Tübingen on 13 November 2026; the next round is announced on bw-ki.de. We help with method and code, the project stays the pupil\'s own, and we are not connected with the competition.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Is it a problem that the classes are in English?',
      lede: 'For most Braunschweig learners it is the opposite. We teach only in English, and we make it work for every level.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English only', p: 'All classes are taught in English by mentors based in India; there is no German-language version. We would rather say this clearly at the start.' },
          { h3: 'At your pace', p: 'Mentors adapt their speed and vocabulary, check understanding often and get used to each learner\'s accent. Children are helped gently; adults are not talked down to.' },
          { h3: 'The language of AI', p: 'Python, the libraries and nearly all AI documentation are in English. Learning in English means reading an error message or a research summary without translating it first.' }
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Times',
      h2: 'When do the classes run in Braunschweig time?',
      lede: 'Our mentors work from India, which is several hours ahead, so Braunschweig afternoons and evenings fall into their evening. The rows here only show how the clocks line up.',
      body: [
        { kind: 'table', numCols: [], caption: 'Three sample slots in Braunschweig with the matching time in India', head: ['Braunschweig', 'India, winter (to 28 March 2027)', 'India, summer (from 28 March 2027)'], rows: [
          ['15:45', '20:15', '19:15'],
          ['17:20', '21:50', '20:50'],
          ['Saturday 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz sets German winter time at UTC+1 (MEZ) and summer time at UTC+2 (MESZ). This year the clocks went back on 25 October 2026; they go forward on 28 March 2027. India does not change its clocks (UTC+5:30), so it runs 4.5 hours ahead of Braunschweig in winter and 3.5 hours in summer. Examples only.' },
        { kind: 'p', mt: true, html: 'Lower Saxony\'s Christmas holidays run from 23 December 2026 to 9 January 2027, the Easter holidays from 22 March to 3 April 2027 and the summer holidays from 8 July to 18 August 2027, according to the KMK table. Classes do not stop for school holidays; learners who travel just pause.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How do learners progress from first code to a tested model?',
    lede: 'Our milestones, the same for every age; only the speed and the projects differ.',
    table: { caption: 'From first program to honest model (ours)', head: ['Milestone', 'Typical age to reach it', 'The learner can'], rows: [
      ['1. Instructions', '8 and up', 'Write exact steps a computer can follow'],
      ['2. Data in code', '10 and up', 'Store examples in a list and loop through them'],
      ['3. A learned rule', '12 and up', 'Turn past examples into a prediction, such as an average'],
      ['4. A fair test', '13 and up', 'Keep test data apart and measure the error'],
      ['5. Error analysis', '14 and up', 'Explain the worst predictions and check them against other evidence']
    ] },
    left: { h3: 'For parents', ps: [
      'Milestone 5 is the footfall project. It is also the skill that separates someone who uses AI from someone who can judge it.',
      'Children under 13 work up to milestone 3 with games and drawings, not with adult tools.'
    ] },
    right: { h3: 'For adults', ps: [
      'Most adults who code a little already reach milestone 3 in a few weeks. The real work is milestones 4 and 5.',
      'Bring a dataset from your own field if you can. The method is the same, and it sticks better.'
    ] }
  },

  catalogue: {
    eyebrow: 'More options',
    h2: 'Nine more coding and AI courses for Braunschweig',
    lede: 'Grouped by age. Each is taught live in English by a mentor who stays with the learner.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 7 to 14', courses: [
        { code: 'BRB / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch games, then apps, a long gentle course.' },
        { code: 'BRB / KIDS / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How a machine learns, explained with play.' },
        { code: 'BRB / KIDS / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic and planning before any typing.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'BRB / TEEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Clean, count and chart real public data.' },
        { code: 'BRB / TEEN / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Visual machine learning', blurb: 'Models built by dragging blocks, then explained.' },
        { code: 'BRB / TEEN / 03', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'For Oberstufe pupils, beside the school course.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'University and working life', courses: [
        { code: 'BRB / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'From zero to clean, tested Python.' },
        { code: 'BRB / ADULT / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science course', blurb: 'Python, statistics and models end to end.' },
        { code: 'BRB / ADULT / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python automation and applied AI', blurb: 'Scripts and AI helpers for everyday work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live coding and AI classes work in Braunschweig',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoon', l: 'After school, for children and teens.' },
      { time: 'Evening', l: 'After work, for adult learners.' },
      { time: 'Weekend', l: 'Saturday or Sunday, for any age.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'Someone who knows what you built last week.' },
      { h3: 'Code you type', p: 'No copying finished solutions.' },
      { h3: 'Models you test', p: 'Every prediction gets checked.' },
      { h3: 'Age-appropriate tools', p: 'Children never need adult AI accounts.' },
      { h3: 'Written feedback', p: 'Short notes after milestones.' },
      { h3: 'Group or solo', p: '15 to 20 learners, or one to one.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'From first games to working models. A few by our students are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Our Google reviews, as students and parents posted them.',

  fees: {
    h2: 'Fees for coding and AI classes in Braunschweig',
    lede: 'Fees are monthly, for eight live lessons. They appear here in euro, converted at the European Central Bank reference rate, while the payment goes through in US dollars; your bank handles the exchange, so the euro amount it books may differ by a little.',
    free: ['A free first lesson', 'A short task matched to your age', 'No payment details'],
    group: ['15 to 20 learners of similar age and level', 'A regular mentor', 'Two lessons per week', 'Monthly, no long contract'],
    one: ['One learner, one mentor', 'Projects around your goals', 'Slots that fit your week']
  },

  faq: {
    eyebrow: 'Braunschweig asks',
    h2: 'Coding and AI classes in Braunschweig: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach in English only, live, with mentors based in India who adapt to each learner\'s pace and accent. Programming languages and AI documentation are in English, so most learners find this helps rather than hinders.' },
      { q: 'What age do you teach?', a: 'From about 8 to adult. Children start with Scratch and typed Python, teenagers learn Python and machine learning on real data, and adults learn applied Python and AI. Groups are formed by age and level.' },
      { q: 'Do children use ChatGPT or other chatbots in class?', a: 'No adult chatbot accounts are needed. Several AI tools set an age limit, and some require a parent\'s permission under 18, so with children we build small models ourselves and explain how larger ones work. Adults may use AI tools as part of their course.' },
      { q: 'Is Informatik compulsory in Braunschweig schools?', a: 'Yes, in grades 9 and 10. The Gesellschaft für Informatik records that every general school type in Niedersachsen has taught Informatik as a compulsory subject in those grades since 2024/25. Later it is an Oberstufe choice.' },
      { q: 'When are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Children usually come after school, adults in the evening or at the weekend.' },
      { q: 'Do I need maths to learn AI?', a: 'Less than you might fear at the start. Averages and differences take you a long way, as the footfall project shows. Teenagers and adults who continue meet more statistics and some algebra, taught when it is needed.' },
      { q: 'Can you help with a BWKI project?', a: 'Yes, with method, code and testing. The project must remain the pupil\'s own work. The BWKI is run by the Tübingen AI Center and accepts projects in German or English; we are not connected with it.' },
      { q: 'How many learners are in a group?', a: 'Between 15 and 20 of a similar age and level. A one-to-one plan is available for anyone who prefers private lessons, with two classes a week at times agreed with the mentor.' },
      { q: 'How is the fee charged?', a: 'Monthly, in US dollars. This page shows the amount in euro at the European Central Bank reference rate, and your bank converts the dollar payment, so the booked euro figure can vary slightly. The first lesson is free.' },
      { q: 'What is the footfall project?', a: 'An original project of ours on Stadt Braunschweig\'s open pedestrian counts. Learners predict each day of 2022 on Hutfiltern from weekday averages of 2017 to 2019, then find that the worst misses are not matched on Schuhstraße, which points to a counter problem rather than crowds.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for Braunschweig learners and parents.',
    items: [
      { href: '/coding-classes-in-lower-saxony', label: 'Coding classes in Lower Saxony', p: 'Our page for Niedersachsen.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany', p: 'Our national AI page.' },
      { href: '/informatik-abitur-niedersachsen', label: 'Informatik Abitur Niedersachsen', p: 'The Abitur subject in this Land.' },
      { href: '/bundeswettbewerb-ki-bwki-project-help', label: 'BWKI project help', p: 'Support for the AI competition.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits of popular AI tools.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, do not copy', p: 'Why we teach judgement.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson in coding or AI',
    lede: 'The free lesson is short and practical: you or your child write a few lines of code, and for older learners make a first tiny prediction. The mentor then recommends a group and a course in plain words.',
    readFirst: 'You can also read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or open the <a class="ag-inline-link" href="/courses">course list</a> first.',
    note: 'Lessons are live, online and in English, given by mentors based in India. WhatsApp is the quickest way to reach us.',
    formNote: 'Free; no card required.'
  },

  footer: {
    cols: [
      { h4: 'Coding and AI', links: [
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/ai-course-for-kids-germany', label: 'AI course for kids' },
        { href: '/coding-classes-for-teens-germany', label: 'Coding for teens' },
        { href: '/coding-classes-for-adults-germany', label: 'Coding for adults' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-lower-saxony', label: 'Lower Saxony' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Read the worst predictions first'
  },

  personalityCss: `
.ag-root.ag-brb .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-brb .ag-capsule { border-left-width: 3px; }
.ag-root.ag-brb .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-brb .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-brb .ag-grid-3 h3 { letter-spacing: 0.005em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Niedersachsen page and national overview); Bundeswettbewerb Künstliche Intelligenz, Teilnahmebedingungen and 2026 timeline; KMK Ferien 2026/2027; Einheitenzeitgesetz; Destatis GV-ISys 31.12.2024; Stadt Braunschweig, Passantenfrequenzen Innenstadt, CC BY 4.0.',
    localProject: 'The Hutfiltern footfall model: an original Python project that learns weekday averages from 2017 to 2019, predicts 2022 (349 days, average miss 5,696), then checks the worst misses against the neighbouring Schuhstraße counter, where the usual ratio of 1.12 jumps to 4.19 on 10 November 2022. Lesson family: study the biggest errors and cross-check an outlier.',
    requiredMentions: ['braunschweig_footfall.csv', 'Typical Monday to Sunday: [17867, 17826, 18412, 18578, 21861, 32978, 7947]', 'Days tested in 2022: 349  average miss: 5696', 'Usual ratio Hutfiltern / Schuhstraße: 1.12', '79,097', '2022-11-10 Hutfiltern 79097 Schuhstraße 18864 ratio 4.19', 'Hutfiltern counts about 1.12 people for every one on Schuhstraße', 'Read the worst predictions first'],
    sources: [
      { claim: 'Niedersachsen compulsory Informatik in grades 9 and 10; G9 Oberstufe.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/niedersachsen' },
      { claim: 'About one pupil in twelve takes Informatik in the Oberstufe in Niedersachsen.', url: 'https://informatik-monitor.de/' },
      { claim: 'BWKI organiser, rules and 2026 final.', url: 'https://www.bw-ki.de/teilnahmebedingungen' },
      { claim: 'Niedersachsen holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Braunschweig pedestrian counts and licence.', url: 'https://opendata.braunschweig.de/dataset/passantenfrequenzen-innenstadt' }
    ],
    rejectedClaims: [
      'A cause for the high Hutfiltern days (event, fault or construction): not stated in the data, so none given.',
      'Recommending adult chatbots to under-18 learners: refused.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with Stadt Braunschweig, the BWKI, the Land or a school: none.'
    ]
  }
};
