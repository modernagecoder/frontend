'use strict';
// Coding and AI classes in Kassel (ag- city page, Germany cluster P6 row DE164, tier-2 shape coding-and-ai = all ages).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: Hessen has no compulsory Informatik and no binding plan to bring it in, so in Kassel coding and AI are learned
// outside the timetable at every age. The AI idea taught here is anomaly detection, the thing behind fraud alerts and broken
// sensor warnings: "unusual" only means something once you say "unusual compared with what".
// Sources (copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-and-ai-classes-in-kassel-germany/):
//  - GI Informatik-Monitor 2026/27, Hessen page (infmon-hessen): "Schulartübergreifend findet kein verbindlicher
//    Informatikunterricht statt."; Gymnasium "je einstündig ab der Jahrgangsstufe 7" as Wahlunterricht; Haupt- and
//    Realschule WPU possible "jedoch liegt keine eigene curriculare Grundlage ... vor"; Einführungsphase two to three hours,
//    no prior knowledge needed; Qualifikationsphase Grundkurs two or three hours, Leistungsfach five hours; "Die schriftlichen
//    Abiturprüfungsaufgaben werden zentral (landesweit einheitlich) vorgegeben. Praktische Prüfungsanteile am Rechner sind
//    nicht zulässig. Zugelassene Hilfsmittel sind eine Operatorenliste sowie ein Wörterbuch." National page: Hessen among six
//    Länder without Informatik for all (fact 92) and among three with no binding plans (fact 96).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025): "Hessen (4) 05.10. - 17.10. 23.12. - 12.01. -- 22.03. - 02.04. -- 28.06. -
//    06.08." (fact 276).
//  - AI tool ages: content/ai-tool-age-audit.json (OpenAI 13, parent's or guardian's permission under 18; Anthropic 18).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Kassel 197,230; Hessen 6,280,793; Wiesbaden 288,850 (capital);
//    Göttingen 127,259 (Niedersachsen).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate data (KL), station 02532 "Kassel" (named Kassel (West)
//    to 1953 and Kassel (Süd) to 1977; at 231 m, 51.2963 N, 9.4424 E from 20 July 1977), file
//    tageswerte_KL_02532_18800101_20131031_hist.zip downloaded 3 November 2026, licence CC BY 4.0 (opendata.dwd.de
//    Terms_of_use.txt). Column TMK, daily mean air temperature. Our extract kassel_tmk.csv: 1978-01-01 to 2012-12-31 at the
//    final site, 12,779 days after removing 5 days marked -999, 211,994 bytes, sha256 1a472085...12bbb122d. The city has no
//    open data portal we could find (kassel.de/opendata 404; GovData lists no dataset published by the Stadt Kassel on
//    3 November 2026), so the DWD station in the city is used; no other page uses station 02532.
// Our own calculations (scratchpad de/w/T3/kassel/run/v1.py, v12.py, python3 -I, Python 3.14.8; score = distance from the
// mean in standard deviations, population standard deviation):
//  v1: "Days: 12779  mean: 9.1  spread: 7.3"; "Unusual: 1978-12-31 -15.8 score 3.4"; "Unusual: 1979-01-06 -15.5 score 3.3";
//      "Unusual: 1987-01-13 -15.5 score 3.3". The top 20 by this score are all in December, January or February.
//  v2: "Unusual for its month: 1978-12-31 -15.8 score 4.1"; "Unusual for its month: 1987-03-03 -9.8 score 4.0";
//      "Unusual for its month: 1987-03-04 -9.6 score 3.9". In the top ten by month: 2003-08-09 28.4 and 1992-08-09 28.3.
//  Month normals (mean, spread): January 0.4 and 4.8; March 4.9 and 3.7; July 17.8 and 3.6; August 17.6 and 3.3.
// Lesson family: an outlier is relative to its context; score each value against what is normal for its own month, not
// against everything at once (anomaly detection).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  'import statistics',
  '',
  'days = []',
  'with open("kassel_tmk.csv", encoding="utf-8") as f:',
  '    for line in csv.DictReader(f):',
  '        days.append((line["datum"], float(line["tmittel"])))',
  '',
  'temps = [t for _, t in days]',
  'mean, spread = statistics.mean(temps), statistics.pstdev(temps)',
  'scored = sorted(days, key=lambda d: abs(d[1] - mean) / spread, reverse=True)',
  'print("Days:", len(days), " mean:", round(mean, 1), " spread:", round(spread, 1))',
  'for date, t in scored[:3]:',
  '    print("Unusual:", date, t, "score", round(abs(t - mean) / spread, 1))'
].join('\n');

const V2 = [
  'by_month = {}',
  'for date, t in days:',
  '    by_month.setdefault(date[5:7], []).append(t)',
  'normal = {m: (statistics.mean(v), statistics.pstdev(v)) for m, v in by_month.items()}',
  '',
  'def score(day):',
  '    m, s = normal[day[0][5:7]]',
  '    return abs(day[1] - m) / s',
  '',
  'for date, t in sorted(days, key=score, reverse=True)[:3]:',
  '    print("Unusual for its month:", date, t, "score", round(score((date, t)), 1))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Kassel: coding and AI' },
  slug: 'coding-and-ai-classes-in-kassel-germany',
  code: 'cak',
  accent: '#416677',
  accentRationale: 'Coding and AI in Kassel: a slate blue-grey #416677 for the stone of the Hercules monument above the Bergpark Wilhelmshöhe; contrast 5.03 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-hesse', name: 'Hesse' }],
  routeLabel: 'Coding and AI classes in Kassel',
  title: 'Coding and AI Classes in Kassel: Live Online in English',
  description: 'Coding and AI classes in Kassel for every age, live online in English: why Hessen schools leave Informatik optional, AI tool ages, and an unusual-days data project.',
  ogDescription: 'Live online coding and AI in Kassel for children, teenagers and adults, in English at each learner\'s pace: Informatik in Hessen, the central Informatik Abitur, and an original anomaly-detection project on 35 years of Kassel weather.',
  twitterDescription: 'Coding and AI in Kassel, live in English: Hessen\'s optional Informatik and an anomaly-detection project.',
  pageName: 'Coding and AI Classes in Kassel',
  webPageDescription: 'A guide for Kassel learners of every age to live coding and AI classes in English, built from the GI Informatik-Monitor, the KMK holiday table and Destatis, with an original anomaly-detection project on Deutscher Wetterdienst data from the Kassel station.',
  courseDescription: 'Live online coding and AI classes in English for learners in Kassel: Python and AI for children, data science for teenagers, and data science with machine learning for adults, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'Hesse', href: '/coding-classes-in-hesse' }],
  crumbLabel: 'Kassel',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#hessen', label: 'Hessen' },
    { href: '#unusual', label: 'AI project' },
    { href: '#who', label: 'Who' },
    { href: '#calendar', label: 'Times' }
  ],
  eyebrow: 'Kassel &middot; Coding and AI &middot; From age 6 to adult',
  h1: 'Coding and AI classes in Kassel',
  lede: 'In Hessen, Informatik is not compulsory at any school type, and the Gesellschaft für Informatik knows of no binding plan to change that. So in Kassel, whether you are eight, sixteen or forty-five, learning to code and to understand AI mostly happens outside a classroom. We teach it live, online and in English, with a mentor who adjusts to you. This page explains Hessen\'s rules, who our classes are for, and one AI idea, spotting the unusual, worked through on 35 years of Kassel weather.',
  secondaryCta: { href: '#unusual', label: 'See the AI project' },
  wa: 'Hello Modern Age Coders, I am in Kassel and would like to know about coding and AI classes in English. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ learners worldwide &middot; 4.9 on Google from about 547 reviews',
  spec: [
    ['For', 'Children, teenagers and adults'],
    ['You learn', 'Python, data and practical AI'],
    ['Format', 'Live video, two hours a week'],
    ['Batch', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'Based in India, English only'],
    ['Trial', 'First class free']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'Coding and AI classes in Kassel at Modern Age Coders are live online lessons in English for children from 6, teenagers and adults. Children start with Scratch and Python, teenagers move on to data science and machine learning, and adults learn Python with practical AI. One mentor stays with each learner and adapts to their pace and accent, in a batch of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Three ways in',
    h2: 'Which course should a Kassel learner start with?',
    lede: 'Pick by age. Each course works with real data from the first months, because data is what AI learns from.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CAK / 01', title: 'Python and AI for Kids', note: 'Ages 9 to 12, eight to ten months. Children type Python, draw and build games, then write small programs that sort and spot patterns in data.' },
      { course: 'data-science-course-for-teens-python-data', code: 'CAK / 02', title: 'Data Science for Teens', note: 'Ages 14 to 18, six months, some Python first. Real data sets, charts and first machine-learning models, each one tested.' },
      { course: 'data-science-complete-masterclass-college', code: 'CAK / 03', title: 'Data Science for Adults', note: 'Adults 18 and over, ten to twelve months, no experience needed. Python, statistics, machine learning and deep learning in one path.' }
    ]
  },

  sections: [
    {
      id: 'hessen',
      eyebrow: 'Hessen schools',
      h2: 'Is Informatik a compulsory school subject in Kassel?',
      lede: 'No. Hessen is one of six Länder without compulsory Informatik for all pupils.',
      body: [
        { kind: 'two',
          leftH3: 'Grades 5 to 10',
          left: [
            'The Gesellschaft für Informatik (GI) sums Hessen up in one sentence in its Informatik-Monitor 2026/27: no school type has compulsory Informatik. At the Gymnasium, Informatik can be offered from grade 7 as part of the optional Wahlunterricht, one hour a week. At Haupt- and Realschule tracks, a school can set it up as a Wahlpflicht subject, but there is no curriculum of its own for those tracks.',
            'The GI also lists Hessen among three Länder where no binding plan for compulsory Informatik is known.'
          ],
          rightH3: 'The Oberstufe',
          right: [
            'In the Einführungsphase a school may offer Informatik for two or three hours a week, and pupils need no earlier Informatik to take it. In the Qualifikationsphase there can be a Grundkurs of two or three hours, or a Leistungsfach of five.',
            'The written Abitur tasks are set centrally for the whole Land. Work at a computer is ruled out in the written exam ("Praktische Prüfungsanteile am Rechner sind nicht zulässig", in the GI\'s words); the permitted aids are a list of operators and a dictionary.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Where a Kassel pupil can meet Informatik, school year 2026/27', head: ['Stage', 'Compulsory?', 'What may be offered'], rows: [
          ['Grundschule', 'No', 'No Informatik subject'],
          ['Gymnasium, from grade 7', 'No', 'Optional Wahlunterricht, one hour a week'],
          ['Haupt- and Realschule tracks', 'No', 'Wahlpflicht Informatik if the school sets it up'],
          ['Einführungsphase', 'No', 'Two or three hours, no prior Informatik needed'],
          ['Qualifikationsphase', 'No', 'Grundkurs of two or three hours, or Leistungsfach of five']
        ] },
        { kind: 'source', html: 'Our summary of the Hessen page and the Länder comparison in the GI Informatik-Monitor 2026/27, read on 2 November 2026.' },
        { kind: 'p', mt: true, html: 'The written exam rule matters for anyone preparing for it: a Kassel pupil in an Informatik Leistungsfach writes the central paper by hand, so programming has to be understood well enough to be written and traced on paper. Our <a class="ag-inline-link" href="/informatik-abitur-hessen">Informatik Abitur in Hessen</a> page explains the exam, and the <a class="ag-inline-link" href="/coding-classes-in-hesse">Hesse page</a> covers the Land as a whole. We teach alongside school; the school course gives the grade.' }
      ]
    },
    {
      id: 'unusual',
      tint: 'tint',
      eyebrow: 'A real Kassel AI project',
      h2: 'How does an AI decide that something is unusual?',
      lede: 'Banks flag odd payments and factories flag odd sensor readings with the same basic idea: measure how far a value is from normal. The hard part is deciding what normal means. We try it on Kassel\'s weather.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Deutscher Wetterdienst ran a weather station in Kassel from 1880 to 2013 and publishes its daily records under the CC BY 4.0 licence, which allows reuse with credit. The station moved several times and was called Kassel (West) and then Kassel (Süd) before it settled, on 20 July 1977, at 231 metres. We downloaded the file on 3 November 2026.',
            'To compare like with like we kept only the years at that last site, 1978 to 2012, and one value per day: the mean air temperature. Five days had no value and were left out, leaving 12,779 days in a file we call kassel_tmk.csv.'
          ],
          rightH3: 'The idea',
          right: [
            'For each day, the program measures how far its temperature is from the average, in units of the usual spread (the standard deviation). A score of 3 means three times further from average than a typical day. High scores are the "unusual" days.',
            'Version 1 measures every day against the average of all 12,779 days. Version 2 measures each day against the average of its own calendar month.'
          ] },
        { kind: 'code', label: 'Version 1: unusual compared with every day', lang: 'Python', code: V1, note: 'It prints: <code>Days: 12779  mean: 9.1  spread: 7.3</code>, then <code>Unusual: 1978-12-31 -15.8 score 3.4</code>, <code>Unusual: 1979-01-06 -15.5 score 3.3</code> and <code>Unusual: 1987-01-13 -15.5 score 3.3</code>.' },
        { kind: 'p', mt: true, html: 'Version 1 finds three bitterly cold winter days, and if you print more, it keeps finding them: in our run, all of the top twenty are in December, January or February. That is not wrong, but it is not useful. The program has discovered that winter is cold. A hot summer day can never look unusual to it, because Kassel\'s hottest days are closer to the all-year average of 9.1 degrees than its coldest nights are.' },
        { kind: 'code', label: 'Version 2: add below Version 1, unusual for its own month', lang: 'Python', code: V2, note: 'It prints: <code>Unusual for its month: 1978-12-31 -15.8 score 4.1</code>, <code>Unusual for its month: 1987-03-03 -9.8 score 4.0</code> and <code>Unusual for its month: 1987-03-04 -9.6 score 3.9</code>.' },
        { kind: 'p', mt: true, html: 'Now early March 1987 appears: minus 9.8 degrees on 3 March. Against the whole year, that day looks ordinary, a winter-like day like many others. Against a normal March in Kassel, which averages 4.9 degrees, it is extraordinary. Further down the same list come 9 August 2003 at 28.4 degrees and 9 August 1992 at 28.3, hot days that Version 1 could never notice. Nothing in the data changed. The definition of normal did.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Normal daily mean temperature in Kassel by month, 1978 to 2012 (our calculation)', head: ['Month', 'Average, degrees', 'Typical spread, degrees'], rows: [
          ['January', '0.4', '4.8'],
          ['March', '4.9', '3.7'],
          ['July', '17.8', '3.6'],
          ['August', '17.6', '3.3']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, daily climate data, station 02532 Kassel, column TMK (daily mean air temperature), 1978 to 2012, CC BY 4.0, downloaded 3 November 2026. Scores, normals and code are ours; the spread is the population standard deviation. We are not connected with the DWD.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Children, no screen.</strong> Write down the heights of everyone in your family, then of everyone in your class. Is a 150 cm person unusual? In which group?',
          '<strong>Children, Python.</strong> Print the five warmest days in the file. Then print the five warmest Januaries. Which list feels more surprising?',
          '<strong>Teenagers.</strong> Compare months with the same average temperature but different spreads. Why does a big spread make a day harder to call unusual?',
          '<strong>Adults.</strong> Score each day against the average of the 15 days either side of it in the calendar, across all years, instead of its month. Does 31 December 1978 still come first?'
        ] }
      ]
    },
    {
      id: 'who',
      eyebrow: 'Every age',
      h2: 'Who are coding and AI classes in Kassel for?',
      lede: 'Three groups, never mixed, each with its own courses and its own rules about AI tools.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our classes by age, and how AI tools are used (ours)', head: ['Learners', 'They learn', 'AI tools in class'], rows: [
          ['Children, 6 to 12', 'Scratch, then Python from about 9, sorting and pattern programs', 'No chatbot accounts; children build their own small AI'],
          ['Teenagers, 13 to 18', 'Python, data science, machine learning, testing', 'Only tools whose terms allow the age, with parental agreement'],
          ['Adults', 'Python, data, machine learning, generative AI', 'Any tool, always checked against a source']
        ] },
        { kind: 'source', html: 'Tool ages from the companies\' own terms: OpenAI requires users to be 13 and needs a parent\'s or guardian\'s permission under 18; Anthropic sets 18 for Claude. Quoted in full in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>.' },
        { kind: 'p', mt: true, html: 'Kassel is a university city, and many adults who contact us are students or graduates who never had Informatik at school and now meet AI in their work or studies. They do not need another app; they need to understand what the app is doing. The anomaly project above is typical of our adult classes: short code, a clear idea, and a question about whether the answer is fair.' },
        { kind: 'p', html: 'Teenagers in Kassel often come for a different reason: their school offers Informatik only as an option, or not at all, and they want to try programming before choosing Oberstufe subjects. Two or three months of Python tell a fifteen year old much more about whether a Leistungsfach Informatik suits them than any brochure.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'Are the coding and AI classes in German or English?',
      lede: 'English only. Here is what that means in practice.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Said up front', p: 'Our mentors teach from India, live, in English. There are no German-language classes, and we tell every family and adult learner before the first class.' },
          { h3: 'Adapted to you', p: 'Mentors speak at your speed and get used to your accent quickly. You can ask for a word, answer in simple sentences, or type your question in the chat.' },
          { h3: 'Useful beyond class', p: 'Python, its documentation and nearly all AI material are in English. Learning in English means no translating later when you read a library manual.' }
        ] }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'Times and holidays',
      h2: 'When are live classes in Kassel time?',
      lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Kassel times and the time for the mentor', head: ['Kassel', 'India in MEZ months', 'India in MESZ months', 'Often chosen by'], rows: [
          ['15:10', '19:40', '18:40', 'Children after school'],
          ['17:10', '21:40', '20:40', 'Teenagers and students'],
          ['Saturday 10:45', '15:15', '14:15', 'Families'],
          ['Sunday 14:00', '18:30', '17:30', 'Adults']
        ] },
        { kind: 'source', html: 'German legal time is MEZ (UTC+1) or MESZ (UTC+2) under the Einheitenzeitgesetz; MEZ has applied since 25 October 2026 and MESZ starts on 28 March 2027. India, on UTC+5:30 all year, is therefore 4 hours 30 minutes ahead of Kassel now and 3 hours 30 minutes ahead from late March. No time is fixed for a batch in advance.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Hessen school holidays in 2026/27 (KMK)', head: ['Holiday', 'Starts', 'Ends'], rows: [
          ['Herbstferien', '5 October 2026', '17 October 2026'],
          ['Weihnachtsferien', '23 December 2026', '12 January 2027'],
          ['Osterferien', '22 March 2027', '2 April 2027'],
          ['Sommerferien', '28 June 2027', '6 August 2027']
        ] },
        { kind: 'source', html: 'From the Hessen line of the KMK school holiday overview 2026/2027, version dated 9 October 2025; it lists no winter or Whitsun break for Hessen.' },
        { kind: 'p', mt: true, html: 'Classes run in the holidays unless you pause. Kassel had 197,230 residents on 31 December 2024 (Destatis), in a Land of 6,280,793 whose capital is Wiesbaden. Learners in Baunatal, Vellmar or Fuldatal follow the same Hessen calendar. Göttingen, with 127,259 people, is across the border in Lower Saxony, which has its own holidays and school rules.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Thinking like a data scientist',
    h2: 'Which questions should every AI learner learn to ask?',
    lede: 'Our five questions. Children ask them in simple words, adults in technical ones.',
    table: { caption: 'Five questions for any AI result (ours)', head: ['Question', 'In the Kassel project'], rows: [
      ['What does the data really contain?', 'Daily means at one site, 1978 to 2012'],
      ['What was left out?', 'Five days with no value, and the years before the last move'],
      ['Compared with what?', 'All days, or days in the same month'],
      ['Does the answer just restate the obvious?', 'Version 1 found that winter is cold'],
      ['What would change the answer?', 'A different window, such as 15 days either side']
    ] },
    left: { h3: 'For families', ps: [
      '"Compared with what?" is the question we hear children start asking at home after a few weeks. It works on school marks, prices and football results too.',
      'Progress notes tell you which questions your child can ask on their own.'
    ] },
    right: { h3: 'For adults', ps: [
      'The fourth question is the one most AI reports at work fail. If a model only tells you what everyone knew, it has not learned anything.',
      'We happily build lessons around data from your own job.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Kassel learners',
    lede: 'Three for each age group, all taught live in English by a regular mentor.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 15', courses: [
        { code: 'CAK / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch games to apps over a year, 6 to 12.' },
        { code: 'CAK / KIDS / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'How machines learn, and fail, 8 to 14.' },
        { code: 'CAK / KIDS / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Maths ideas made visible in Python, 10 to 15.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 19', courses: [
        { code: 'CAK / TEEN / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teens', blurb: 'From Python to working models, 13 to 18.' },
        { code: 'CAK / TEEN / 02', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens', blurb: 'Using allowed AI tools with judgement, 13 to 18.' },
        { code: 'CAK / TEEN / 03', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'Oberstufe Informatik in Java and Python, 16 to 19.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'CAK / ADULT / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'Language models, retrieval and agents.' },
        { code: 'CAK / ADULT / 02', slug: 'artificial-intelligence-complete-masterclass-college', title: 'Artificial intelligence', blurb: 'Search, logic and agents from first principles.' },
        { code: 'CAK / ADULT / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI without programming', blurb: 'Spreadsheets, dashboards and AI help.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'What happens in our live coding and AI classes?',
    lede: 'Two hours a week, live on video with a shared screen. The learner writes and runs everything; the mentor asks the questions.',
    slots: [
      { time: 'Afternoon', l: 'After school in Kassel, for children and teenagers.' },
      { time: 'Evening and weekend', l: 'For students, working adults and families.' },
      { time: 'One to one', l: 'A slot agreed with your mentor.' }
    ],
    cells: [
      { h3: 'Live, always', p: 'A mentor present for the whole hour.' },
      { h3: 'Real data', p: 'German open data in many projects.' },
      { h3: 'Age bands', p: 'No mixed classes of children and adults.' },
      { h3: 'One mentor', p: 'The same person throughout.' },
      { h3: 'Plain English', p: 'Calm pace, everything on screen.' },
      { h3: 'Clear notes', p: 'What was built, what comes next.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'Some work by students of different ages. More is on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents and students on Google, in their own words.',

  fees: {
    h2: 'How much do coding and AI classes cost in Kassel?',
    lede: 'Eight live classes a month for one monthly fee. The page shows that fee in euro using the European Central Bank reference rate; the payment is taken in US dollars and your bank converts it, so the euro figure on your statement may not be identical.',
    free: ['A first class at no cost', 'A short task at the learner\'s level', 'No card'],
    group: ['Fifteen to twenty learners of a similar age', 'A regular mentor', 'Two classes a week', 'Monthly, cancel any month'],
    one: ['One learner, one mentor', 'Pace and projects set by the learner', 'Times you agree']
  },

  faq: {
    eyebrow: 'Kassel asks',
    h2: 'Coding and AI classes in Kassel: questions answered',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach in English only. Every class is live with a mentor in India who adjusts the pace, gets used to the learner\'s accent and keeps everything visible on screen, so learners with modest English can follow.' },
      { q: 'Is Informatik compulsory in Hessen?', a: 'No. The Gesellschaft für Informatik reports that no school type in Hessen has compulsory Informatik, and it knows of no binding plan to introduce it. Gymnasien may offer it as an option from grade 7, and the Oberstufe can offer a Grundkurs or Leistungsfach.' },
      { q: 'How is the Informatik Abitur written in Hessen?', a: 'The written tasks are set centrally for the whole Land, and practical work at a computer is not permitted in the written exam. The allowed aids are a list of operators and a dictionary. We teach beside school and do not award grades.' },
      { q: 'Who can join coding and AI classes in Kassel?', a: 'Children from 6, teenagers and adults. Each age group has its own courses: Scratch and Python for children, data science and machine learning for teenagers, and Python, data science and generative AI for adults.' },
      { q: 'When are classes in Kassel time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Children tend to choose afternoons, adults evenings or weekends.' },
      { q: 'Do children use ChatGPT in your AI classes?', a: 'No. OpenAI requires users to be 13 and to have a parent\'s permission under 18, and Claude is 18 and over under Anthropic\'s terms. Children learn AI by writing small programs that sort and spot patterns themselves.' },
      { q: 'What is the anomaly project on this page?', a: 'Our own lesson on Deutscher Wetterdienst records from the Kassel station, 1978 to 2012. Learners score each day by how far it is from normal, first against all days and then against its own month, and see how the unusual days change.' },
      { q: 'I studied something else. Can I still learn AI as an adult?', a: 'Yes. The adult courses start from zero with Python and refresh the maths inside the course. Many adult learners come from other fields and use what they learn in their own work.' },
      { q: 'How big is a batch?', a: 'Fifteen to twenty learners, grouped by age and level. For a mentor of your own, choose one-to-one: two private classes each week.' },
      { q: 'How is the fee paid?', a: 'Monthly. It is displayed in euro at the European Central Bank reference rate but charged in US dollars, which your bank converts, so your statement may differ slightly. The first class is free and asks for no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read on',
    h2: 'Related pages',
    lede: 'More for learners in Kassel, in Hessen and across Germany.',
    items: [
      { href: '/coding-classes-in-hesse', label: 'Coding classes in Hesse', p: 'The Land, its schools and our classes.' },
      { href: '/informatik-abitur-hessen', label: 'Informatik Abitur in Hessen', p: 'The central written exam explained.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Our main AI guide.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, do not copy AI', p: 'Why judgement comes first.' },
      { href: '/coding-classes-for-adults-germany', label: 'Coding for adults', p: 'Starting later, starting well.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us who wants to learn and their age. In the free class the mentor gives a short task at the right level, then recommends a course and a batch or one-to-one.',
    readFirst: 'To read more first: <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and <a class="ag-inline-link" href="/courses">all of our courses</a>.',
    note: 'Classes are live online, in English only, with mentors based in India. WhatsApp reaches us quickest, in English.',
    formNote: 'Free and without obligation; no card.'
  },

  footer: {
    cols: [
      { h4: 'AI and data', links: [
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, not copy' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-hesse', label: 'Hesse' },
        { href: '/informatik-abitur-hessen', label: 'Informatik Abitur Hessen' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Unusual compared with what?'
  },

  personalityCss: `
.ag-root.ag-cak .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-cak .ag-capsule { border-left-width: 5px; }
.ag-root.ag-cak .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-cak .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cak .ag-band-head h3 { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Hessen page and national overview); KMK Ferienregelung 2026/2027; Destatis GV-ISys 31.12.2024; OpenAI and Anthropic terms via content/ai-tool-age-audit.json; Einheitenzeitgesetz; Deutscher Wetterdienst CDC daily climate data station 02532 Kassel, CC BY 4.0.',
    localProject: 'Unusual days in Kassel: an original anomaly-detection project on DWD daily mean temperatures at the Kassel station, 1978 to 2012 (12,779 days). Scored against all days, the top results are only winter nights (31 December 1978, -15.8, score 3.4); scored against each month, 3 March 1987 (-9.8, score 4.0) appears and August heat days enter the top ten. Lesson family: an outlier is relative to its context.',
    requiredMentions: ['kassel_tmk.csv', 'Days: 12779  mean: 9.1  spread: 7.3', 'Unusual: 1978-12-31 -15.8 score 3.4', 'Unusual for its month: 1987-03-03 -9.8 score 4.0', 'Kassel (Süd)', 'Praktische Prüfungsanteile', '23 December 2026', 'Unusual compared with what?'],
    sources: [
      { claim: 'Hessen: no compulsory Informatik; Oberstufe and central Abitur rules.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/hessen' },
      { claim: 'Hessen among six without Informatik for all; no binding plans.', url: 'https://informatik-monitor.de/' },
      { claim: 'Hessen school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'DWD daily climate data, station 02532 Kassel.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/' },
      { claim: 'DWD open data licence CC BY 4.0.', url: 'https://opendata.dwd.de/climate_environment/CDC/Terms_of_use.txt' },
      { claim: 'Populations of Kassel, Göttingen and Hessen.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Any claim about why March 1987 was cold or about climate change: not in the data, not made.',
      'Weather warnings or health advice on cold days: not given.',
      'Any connection with the DWD, the city of Kassel, the GI or a school: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
