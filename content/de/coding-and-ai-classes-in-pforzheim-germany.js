'use strict';
// Coding and AI classes in Pforzheim (ag- city page, Germany cluster P6 row DE182, tier-2 slug shape coding-and-ai, all
// ages).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Spine: AI as four honest steps (data, model, test, limits), a Pforzheim theatre forecasting project where a fitted
// line predicts a negative audience, then Baden-Württemberg's new Informatik subject and the BWKI final in Tübingen.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 Nov 2026; copies under src-pages/coding-and-ai-classes-in-pforzheim-germany/):
//  - GI Informatik-Monitor 2026/27, BW page: Pflichtfach Informatik und Medienbildung from 2025/26, grades 5 and 6 first
//    (fact 67); profile subject IMP "auslaufend" (68); Gymnasium Oberstufe mostly grade 10 Einführungsphase, 11 and 12
//    Qualifikationsphase (G8) (61). National page: BW among four Länder meeting the four-hour recommendation (91).
//  - KMK, Bildung in der digitalen Welt: 2026 framework update with AI-related competences (fact 102).
//  - bw-ki.de: Tübingen AI Center (208); Sek I and II, alone or in teams of up to four (209); machine-learning methods;
//    German or English (213); 2026 final in Tübingen on 13 November 2026 (214).
//  - content/ai-tool-age-audit.json: ChatGPT 13+, parent's permission under 18; Claude 18+.
//  - KMK FER2026_27.pdf BW rows (26.10. - 30.10. / 31.10.; 23.12. - 09.01.; 25.03. / 30.03. - 03.04.; 18.05. - 29.05.;
//    29.07. - 11.09.).
//  - Destatis GV-ISys 31.12.2024: Pforzheim 134,912; Baden-Württemberg 11,245,898.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Pforzheim (publisher_name; contact Kommunale Statistikstelle), "Aufführungen und Besucher (Theater,
//    Oper, Ballett)", notes "Quelle: Theater Pforzheim", via Open Data Baden-Württemberg and GovData
//    https://ckan.govdata.de/dataset/auffuhrungen-und-besucher-theater-oper-ballett, licence CC BY 4.0. content.csv
//    downloaded 3 November 2026, 2,080 bytes, sha256 57664e87447a...4027f0ae; 21 seasons 2000/2001 to 2020/2021 with
//    totals and genre columns. We use Spielzeit, Anzahl der Aufführungen, Anzahl der Besucher.
// Our own calculations (scratchpad de/w/T5/pforzheim: v1.py, v2.py, python3 -I; training seasons starting 2000 to
// 2016, test 2017 to 2020): v1 prints "Trend: visitors change by -1376 a season"; 2017 predicted 96614 real 99241; 2018
// 95238 / 94144; 2019 93862 / 64831; 2020 92486 / 1869. v2 prints "Each performance brings about 540 visitors", "With
// no performances the line says: -40396"; 2017 97310 / 99241; 2018 94069 / 94144; 2019 58968 / 64831; 2020 -31756 /
// 1869; "Fewest performances in training: 245". Visitors per performance (ours): 2000/2001 421, 2016/2017 376,
// 2019/2020 352, 2020/2021 117.
// Lesson family: a fitted line is only safe inside the range it learned from; outside it, it can predict the impossible.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'seasons = []',
  'with open("pforzheim_theatre.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        start = int(row["season"][:4])',
  '        seasons.append((start, int(row["performances"]), int(row["visitors"])))',
  '',
  'train = [s for s in seasons if s[0] <= 2016]',
  'test = [s for s in seasons if s[0] > 2016]',
  '',
  'def fit(points):',
  '    n = len(points)',
  '    mx = sum(x for x, _ in points) / n',
  '    my = sum(y for _, y in points) / n',
  '    slope = sum((x - mx) * (y - my) for x, y in points) / sum((x - mx) ** 2 for x, _ in points)',
  '    return slope, my - slope * mx',
  '',
  'slope, base = fit([(year, v) for year, _, v in train])',
  'print("Trend: visitors change by", round(slope), "a season")',
  'for year, _, visitors in test:',
  '    guess = slope * year + base',
  '    print(year, "predicted", round(guess), "real", visitors)'
].join('\n');

const V2 = [
  'slope2, base2 = fit([(p, v) for _, p, v in train])',
  'print("Each performance brings about", round(slope2), "visitors")',
  'print("With no performances the line says:", round(base2))',
  'for year, performances, visitors in test:',
  '    guess = slope2 * performances + base2',
  '    print(year, "predicted", round(guess), "real", visitors)',
  'print("Fewest performances in training:", min(p for _, p, _ in train))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Pforzheim: coding and AI' },
  slug: 'coding-and-ai-classes-in-pforzheim-germany',
  code: 'cpf',
  accent: '#2D3361',
  accentRationale: 'Coding and AI classes, Pforzheim: a deep stage-curtain navy #2D3361 for the city theatre whose seasons the project forecasts; contrast 9.70 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-baden-wuerttemberg', name: 'Baden-Württemberg' }],
  routeLabel: 'Coding and AI classes in Pforzheim',
  title: 'Coding and AI Classes in Pforzheim: Live Online, in English',
  description: 'Coding and AI classes in Pforzheim for kids, teens and adults, live online in English: AI in four steps, BW Informatik, the BWKI, and a Pforzheim theatre forecast.',
  ogDescription: 'Live coding and AI lessons in English for Pforzheim learners of every age: what learning AI really involves, Baden-Württemberg\'s new Informatik subject, the national AI contest in Tübingen, and a forecasting project on twenty-one seasons of Theater Pforzheim audiences.',
  twitterDescription: 'Coding and AI in Pforzheim, live in English: AI in four steps and a theatre audience forecast.',
  pageName: 'Coding and AI Classes in Pforzheim',
  webPageDescription: 'A guide for Pforzheim families and adults to coding and AI classes in English, drawing on the Gesellschaft für Informatik, the KMK, the Bundeswettbewerb Künstliche Intelligenz and AI tool terms, with an original forecasting project on City of Pforzheim theatre statistics.',
  courseDescription: 'Live online coding and AI classes in English for Pforzheim learners from about 9 to adult: code first, then data, models and honest testing, one to one or in a batch of fifteen to twenty, with a regular mentor who matches the learner\'s pace and accent.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'Baden-Württemberg', href: '/coding-classes-in-baden-wuerttemberg' }],
  crumbLabel: 'Coding and AI in Pforzheim',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#learn', label: 'AI steps' },
    { href: '#theatre', label: 'Theatre' },
    { href: '#bw', label: 'BW school' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Pforzheim &middot; Coding and AI &middot; Children to adults',
  h1: 'Coding and AI classes in Pforzheim',
  lede: 'Learning AI properly is less about chatbots and more about four plain steps: collect data, build a model, test it on something it has not seen, and find out where it breaks. This page walks through those steps with a real Pforzheim example, twenty-one seasons of audiences at Theater Pforzheim, where one perfectly reasonable model ends up forecasting fewer than zero visitors. It also covers what Baden-Württemberg schools now teach in Informatik, the national AI competition whose final is in Tübingen this month, and how our live English classes work from age 9 to adult.',
  secondaryCta: { href: '#theatre', label: 'See the theatre forecast' },
  wa: 'Hello Modern Age Coders, I am in Pforzheim and interested in coding and AI classes in English. Could I book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; AI taught as data, models and tests',
  spec: [
    ['Learners', 'From about 9 to adult'],
    ['Order', 'Code, then data, then models'],
    ['Lessons', 'Live video, twice a week'],
    ['Size', 'One to one, or fifteen to twenty'],
    ['Mentors', 'Based in India, teaching in English'],
    ['First step', 'A free class']
  ],
  capsuleQ: 'In short',
  capsule: 'At Modern Age Coders, coding and AI classes in Pforzheim mean live video lessons in English for anyone from about 9 to adult. Everyone codes first, then works with real data and builds models they test honestly, finding where they fail. A regular mentor adapts to each learner\'s pace and accent, solo or with fifteen to twenty others, at Pforzheim afternoon, evening and weekend times.',

  picks: {
    eyebrow: 'Three ways in',
    h2: 'Which coding and AI course fits a Pforzheim learner?',
    lede: 'A child, a teenager and an adult need different first steps into the same subject.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CPF / 01', title: 'Python and AI for Kids', note: 'For nine to twelve year olds: real Python, then small smart projects that sort, guess and learn from examples.' },
      { course: 'data-science-course-for-teens-python-data', code: 'CPF / 02', title: 'Data Science for Teens', note: 'For teenagers: Python, charts and first models on open data, tested properly, like the theatre forecast below.' },
      { course: 'artificial-intelligence-complete-masterclass-college', code: 'CPF / 03', title: 'Artificial Intelligence Course', note: 'For students and adults: search, logic, agents and machine learning, the ideas underneath today\'s AI tools.' }
    ]
  },

  sections: [
    {
      id: 'learn',
      eyebrow: 'AI, honestly',
      h2: 'What does learning AI actually involve?',
      lede: 'Every AI project we teach, from a child\'s first guessing game to an adult\'s forecast, follows the same four steps.',
      body: [
        { kind: 'ol', items: [
          '<strong>Data.</strong> Find real data, read it carefully and write down what each column means and what it does not say. For the theatre project that is three columns: the season, the number of performances and the number of visitors.',
          '<strong>Model.</strong> Choose the simplest thing that might work and build it yourself in code. Here that is a straight line, fitted by a formula a teenager can follow line by line.',
          '<strong>Test.</strong> Hide some data from the model before it learns, then ask it to predict that hidden part. A model that has only been checked on what it learned from has not been checked at all.',
          '<strong>Limits.</strong> Look for where the model breaks and say why. In our classes this is the step that gets the most time.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'For children', p: 'Nine to twelve year olds do the four steps with tiny datasets they can see whole: guessing a classmate\'s favourite fruit from three questions, then counting how often the guess was wrong.' },
          { h3: 'For teenagers', p: 'Teenagers write the fitting formula themselves in Python, split data into training and test sets, and learn to distrust a result that looks too good.' },
          { h3: 'For adults', p: 'Adults go further into machine learning and generative AI, but keep the same habit: every model is tested, and every limit is written down before anyone relies on it.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'AI tools and the ages their own terms allow', head: ['Tool', 'Minimum age in its terms'], rows: [
          ['ChatGPT', '13, with a parent or guardian\'s permission under 18'],
          ['Claude', '18']
        ] },
        { kind: 'source', html: 'From the tools\' terms of use as quoted in our AI tools age guide. We keep to those ages: no chatbot accounts for children, no 18+ tools for anyone under 18. Most of what younger learners do in our AI classes is code they write themselves.' }
      ]
    },
    {
      id: 'theatre',
      tint: 'tint',
      eyebrow: 'A real Pforzheim project',
      h2: 'Can a model forecast the audience at Theater Pforzheim?',
      lede: 'The City of Pforzheim publishes yearly theatre figures, from Theater Pforzheim, as open data. Twenty-one seasons are enough to build two forecasting models, test both, and watch each fail in a different way.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset Aufführungen und Besucher (Theater, Oper, Ballett) is published by the Stadt Pforzheim on GovData under the licence CC BY 4.0, with Theater Pforzheim named as the source. We downloaded it on 3 November 2026. It covers the seasons 2000/2001 to 2020/2021.',
            'For each season we keep the total number of performances and the total number of visitors, in pforzheim_theatre.csv. A season label such as 2016/2017 becomes the number 2016, the year it started.'
          ],
          rightH3: 'The plan',
          right: [
            'We train on the seasons that start from 2000 to 2016 and hide the last four, 2017 to 2020, for the test. Model 1 draws a straight line through visitors against the year. Model 2 draws a straight line through visitors against the number of performances.',
            'Both use the same small fit function, the classic least-squares line, written out in full so nothing is hidden inside a library.'
          ] },
        { kind: 'code', label: 'Model 1: visitors against the year', lang: 'Python', code: V1, note: 'It prints <code>Trend: visitors change by -1376 a season</code>, then <code>2017 predicted 96614 real 99241</code>, <code>2018 predicted 95238 real 94144</code>, <code>2019 predicted 93862 real 64831</code> and <code>2020 predicted 92486 real 1869</code>.' },
        { kind: 'p', mt: true, html: 'The trend says audiences fell by about 1,376 a season, and for 2017 and 2018 it is within a few thousand. Then it misses badly: it expects 93,862 visitors for the 2019/2020 season and the real figure is 64,831, and for 2020/2021 it expects 92,486 against 1,869. Something changed that the calendar knows nothing about. The file shows what: the theatre gave 184 performances in 2019/2020 and only 16 in 2020/2021, against 245 or more in every training season. It does not say why, so neither do we.' },
        { kind: 'p', html: 'So Model 2 uses the number of performances instead of the year. That is the more sensible input: fewer shows should mean fewer visitors. If the number of performances is known before the season, this model ought to cope better with the unusual years.' },
        { kind: 'code', label: 'Model 2: visitors against performances', lang: 'Python', code: V2, note: 'It prints <code>Each performance brings about 540 visitors</code>, <code>With no performances the line says: -40396</code>, then <code>2017 predicted 97310 real 99241</code>, <code>2018 predicted 94069 real 94144</code>, <code>2019 predicted 58968 real 64831</code>, <code>2020 predicted -31756 real 1869</code> and <code>Fewest performances in training: 245</code>.' },
        { kind: 'p', mt: true, html: 'Model 2 is much better for 2019/2020, within about 6,000. And then it forecasts minus 31,756 visitors for 2020/2021, which is impossible. The reason is in the last line it prints: the model never saw a season with fewer than 245 performances, so between 245 and 300 a straight line fits well, but stretched down to 16 it runs through zero and keeps going. The line even claims that a season with no performances at all would have minus 40,396 visitors.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4], caption: 'Forecasts for the hidden seasons (our calculation)', head: ['Season', 'Performances', 'Real visitors', 'Model 1 (year)', 'Model 2 (performances)'], rows: [
          ['2017/2018', '255', '99,241', '96,614', '97,310'],
          ['2018/2019', '249', '94,144', '95,238', '94,069'],
          ['2019/2020', '184', '64,831', '93,862', '58,968'],
          ['2020/2021', '16', '1,869', '92,486', '-31,756']
        ] },
        { kind: 'source', html: 'Data: Stadt Pforzheim, Aufführungen und Besucher (Theater, Oper, Ballett), source Theater Pforzheim, licence CC BY 4.0, downloaded 3 November 2026. Training on seasons starting 2000 to 2016; models, forecasts and the table are our own. For comparison, visitors per performance (also ours) were 421 in 2000/2001, 376 in 2016/2017, 352 in 2019/2020 and 117 in 2020/2021.' },
        { kind: 'p', mt: true, html: 'Neither model is "wrong" inside its comfort zone. Model 1 assumes the future is like the past; Model 2 assumes a season looks like the seasons it has seen. The lesson for anyone learning AI is the same at 12 and at 50: before trusting a prediction, check whether the question lies inside the range the model learned from, and say so next to the answer.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Children, 9 to 12.</strong> On squared paper, plot five made-up points that rise steadily and draw a line through them with a ruler. Extend the line far to the left. Where does it cross zero, and does that make sense?',
          '<strong>Teenagers.</strong> Run both models, then train Model 2 on all seasons except 2020/2021. Predict its new answer for 2020/2021 before you run it.',
          '<strong>Teenagers, further.</strong> Write a guard that refuses to predict when the number of performances is below the smallest one in the training data, and prints a warning instead.',
          '<strong>Adults.</strong> Replace the line with "visitors per performance times performances" (a line through zero). Compare its 2020/2021 forecast with the real 1,869 and explain the gap using the per-performance figures in the source note.'
        ] }
      ]
    },
    {
      id: 'bw',
      eyebrow: 'Baden-Württemberg',
      h2: 'What do Pforzheim schools teach in Informatik now, and is there an AI contest?',
      lede: 'Baden-Württemberg has just made Informatik compulsory from grade 5, and the national AI competition holds its final in Tübingen, also in Baden-Württemberg, on 13 November 2026.',
      body: [
        { kind: 'two',
          leftH3: 'Informatik und Medienbildung',
          left: [
            'According to the Gesellschaft für Informatik, from 2025/26 Baden-Württemberg introduced a compulsory subject, Informatik und Medienbildung, across all secondary school types, beginning in grades 5 and 6 and extending upwards. Its 2026/27 monitor lists the Land among the four that now reach the recommended four compulsory hours.',
            'The older profile subject IMP, combining Informatik, Mathematik and Physik, is being phased out; at Gemeinschaftsschulen it can still be offered in grades 8 to 10.'
          ],
          rightH3: 'Bundeswettbewerb Künstliche Intelligenz',
          right: [
            'Behind the BWKI stands the Tübingen AI Center. Entrants come from Sekundarstufe I or II and work alone or as a team of at most four; every project has to apply machine learning, and the write-up may be German or English. This year\'s final takes place in Tübingen on Friday 13 November 2026.',
            'We have no connection with the organisers. A Pforzheim teenager who enjoys the theatre project has the right instincts for an entry: real data, a fair test and an honest account of the limits.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik for a Pforzheim pupil (BW rules)', head: ['Stage', 'What the rules say'], rows: [
          ['Grundschule, grades 1 to 4', 'No Informatik subject'],
          ['Grades 5 and 6', 'Compulsory Informatik und Medienbildung, from 2025/26'],
          ['Later grades', 'The subject extends upwards year by year'],
          ['Gymnasium Oberstufe', 'Mostly grade 10 Einführungsphase, grades 11 and 12 Qualifikationsphase']
        ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, national and Baden-Württemberg pages; Bundeswettbewerb Künstliche Intelligenz, rules and 2026 timeline; read on 2 November 2026. Population: Destatis, 31 December 2024: Pforzheim 134,912, Baden-Württemberg 11,245,898. Learners in Mühlacker, Bretten, Calw and Niefern-Öschelbronn share the same Land rules.' },
        { kind: 'p', mt: true, html: 'We teach alongside school. The school\'s Informatik teacher sets the marks; our part is the extra practice, the projects and a mentor who has time for every question. For adults in Pforzheim, school rules do not apply, and the course follows your own goals.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are the classes in Pforzheim time?',
      lede: 'Pupils usually take a weekday afternoon or Saturday; adults often prefer an evening. A few examples, with the mentor\'s clock alongside.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Pforzheim slots with Indian time', head: ['Pforzheim', 'India in the winter months', 'India from 28 March 2027'], rows: [
          ['Monday 14:15', '18:45', '17:45'],
          ['Thursday 17:45', '22:15', '21:15'],
          ['Saturday 12:15', '16:45', '15:45']
        ] },
        { kind: 'source', html: 'Pforzheim follows German legal time under the Einheitenzeitgesetz: UTC+1 in winter, UTC+2 in summer. Clocks went back on 25 October 2026 and will go forward on 28 March 2027. India keeps UTC+5:30 all year, which puts it four and a half hours ahead in winter and three and a half in summer. Examples only; there are no fixed batch times.' },
        { kind: 'table', mt: true, numCols: [], caption: 'BW school holidays 2026/27, for pupils (KMK table)', head: ['Ferien', 'Dates'], rows: [
          ['Herbst', '26 to 31 October 2026'],
          ['Weihnachten', '23 December 2026 to 9 January 2027'],
          ['Ostern', '25 March, and 30 March to 3 April 2027'],
          ['Pfingsten', '18 to 29 May 2027'],
          ['Sommer', '29 July to 11 September 2027']
        ] },
        { kind: 'source', html: 'Taken from the KMK overview of holidays for 2026/2027 (dated 9 October 2025), row Baden-Württemberg. Our classes continue through the holidays for anyone who wants them.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How does a learner move from code to trustworthy AI?',
    lede: 'Our five stages, used for every age, to choose a starting point and to report progress honestly.',
    table: { caption: 'From code to a model you can trust (our stages)', head: ['Stage', 'The learner can'], rows: [
      ['1. Code', 'Write and fix short programs with loops and conditions'],
      ['2. Data', 'Load a file, clean a label, count and plot'],
      ['3. Fit', 'Build a simple model, such as a straight line, from scratch'],
      ['4. Test', 'Hide data, predict it and measure the error'],
      ['5. Limits', 'Say where a model must not be used, and guard against it in code']
    ] },
    left: { h3: 'For parents and adult learners', ps: [
      'Stage 5 is the theatre project\'s last exercise: a program that refuses to answer when the question is outside what it knows.',
      'Progress reports describe what was built and explained, never hours on a screen.'
    ] },
    right: { h3: 'For learners', ps: [
      'A good fit on old data is not a forecast. Test on data the model has not seen.',
      'If a model predicts something impossible, it has left the range it learned from.'
    ] }
  },

  catalogue: {
    eyebrow: 'More coding and AI',
    h2: 'Nine more courses for Pforzheim learners',
    lede: 'Live, in English, with a regular mentor, one to one or in a batch.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 14', courses: [
        { code: 'CPF / KID / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How machines learn, with games instead of accounts, 8 to 14.' },
        { code: 'CPF / KID / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Scratch to apps, grouped by age, 6 to 12.' },
        { code: 'CPF / KID / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Logic and planning, the base of all coding.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 17', courses: [
        { code: 'CPF / TEE / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teens', blurb: 'Real models in Python, each one checked on unseen data.' },
        { code: 'CPF / TEE / 02', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens', blurb: 'Prompting and real projects within each tool\'s age terms, 13+.' },
        { code: 'CPF / TEE / 03', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Support for the new BW subject, in English.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Students and professionals', courses: [
        { code: 'CPF / ADU / 01', slug: 'ai-ml-masterclass-complete-college', title: 'AI and ML masterclass', blurb: 'A long adult course that ends with neural networks and language models.' },
        { code: 'CPF / ADU / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The maths that tells you when to trust a model.' },
        { code: 'CPF / ADU / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts and applied AI for everyday work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'What does a week of live classes look like from Pforzheim?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'After school in Pforzheim, for pupils.' },
      { time: 'Evenings', l: 'For adults after work.' },
      { time: 'Private', l: 'A time fixed with your own mentor.' }
    ],
    cells: [
      { h3: 'Four steps', p: 'Data, model, test, limits, in every project.' },
      { h3: 'Written by you', p: 'Learners build models in their own code.' },
      { h3: 'Age-aware', p: 'Tools used only within their age terms.' },
      { h3: 'Clear English', p: 'Steady pace, plain words, adapted to you.' },
      { h3: 'Regular mentor', p: 'The same person each week.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty learners, or one.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'Work by some of our older students; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows many more.',
  reviewsLede: 'Straight from our Google reviews, with nothing edited.',

  fees: {
    h2: 'Fees for coding and AI in Pforzheim',
    lede: 'The monthly fee covers eight live classes. You see it in euro, calculated with the European Central Bank reference rate; the money is collected in US dollars and your bank converts it, so the final figure on your statement may not match to the cent.',
    free: ['A free first class', 'A small coding task and your goals discussed', 'No card required'],
    group: ['Fifteen to twenty learners at a similar level', 'One regular mentor', 'Two live classes weekly', 'Monthly, cancel any time'],
    one: ['One mentor, one learner', 'Projects built around your aims', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Pforzheim learners ask',
    h2: 'Coding and AI classes in Pforzheim: what people ask us',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and taught only in English. Mentors adapt their speed and words to the learner, get used to each learner\'s accent, and explain again more simply when needed.' },
      { q: 'What does a beginner actually do in an AI class?', a: 'Code first. Then four steps on real data: read the data, build a simple model, test it on data it has not seen, and find its limits. The theatre forecast on this page is a typical project.' },
      { q: 'Is my 10 year old old enough for AI?', a: 'For the ideas, yes. Children of about 9 to 12 learn how machines learn from examples using small datasets and their own Python code. They do not use chatbot accounts, which have their own minimum ages.' },
      { q: 'Do Pforzheim schools teach Informatik?', a: 'Yes, from grade 5. Since 2025/26 Baden-Württemberg has a compulsory subject, Informatik und Medienbildung, starting in grades 5 and 6. We teach alongside school; the school sets the marks.' },
      { q: 'When are the classes in Pforzheim time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils often take an afternoon, adults an evening.' },
      { q: 'Where do the mentors teach from?', a: 'They are in India and teach you on a live call. Pforzheim afternoons fall in the Indian evening: the gap is 4 h 30 in winter and 3 h 30 in summer.' },
      { q: 'What is the BWKI?', a: 'Germany\'s national school AI contest, the Bundeswettbewerb Künstliche Intelligenz. Secondary pupils enter machine-learning projects, written up in German or English, and the 2026 final is held in Tübingen on 13 November.' },
      { q: 'How big are the classes?', a: 'A batch brings together fifteen to twenty learners of roughly equal level. You can also learn privately, two sessions a week with your own mentor, at times you set together.' },
      { q: 'How are fees paid?', a: 'By the month. The euro prices on this page use the reference rate of the European Central Bank; the actual charge is in US dollars and your bank does the exchange, so a slight difference can appear. There is no charge for the first class.' },
      { q: 'Do you teach people to use AI to do their work for them?', a: 'No. We teach learners to think through a problem and to check any answer, including an AI one. Adults learn to use AI tools well, which means testing what they produce.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for Pforzheim learners and families across the Land.',
    items: [
      { href: '/coding-classes-in-baden-wuerttemberg', label: 'Coding classes in Baden-Württemberg', p: 'The Land\'s rules and dates.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'All our AI courses for Germany.' },
      { href: '/ai-course-for-kids-germany', label: 'AI course for kids', p: 'AI ideas for younger learners.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages for over a hundred tools.' },
      { href: '/vibe-coding-and-ai-agents-classes-germany', label: 'Vibe coding and AI agents', p: 'Building with AI help, carefully.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class is like.' }
    ]
  },

  start: {
    h2: 'Book a free coding and AI class',
    lede: 'We begin with a small task and a talk about what you hope to get out of AI, or what your child hopes to. From how the learner tackles the task, the mentor proposes where to start.',
    readFirst: 'To read first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Live classes with mentors in India, in English only. WhatsApp is the quickest way to reach us; please write in English.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'AI', links: [
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/ai-course-for-kids-germany', label: 'AI for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/vibe-coding-and-ai-agents-classes-germany', label: 'Vibe coding' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-baden-wuerttemberg', label: 'Baden-Württemberg' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'No line knows what it never saw'
  },

  personalityCss: `
.ag-root.ag-cpf .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cpf .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-cpf .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-cpf .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cpf .ag-steps li { margin-bottom: 0.45rem; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (national and Baden-Württemberg pages); KMK, Bildung in der digitalen Welt; Bundeswettbewerb Künstliche Intelligenz rules and 2026 timeline; AI tool terms in content/ai-tool-age-audit.json; KMK holiday table 2026/27; Destatis 31.12.2024; Einheitenzeitgesetz; read 2 November 2026. Stadt Pforzheim, Aufführungen und Besucher (Theater, Oper, Ballett), CC BY 4.0, downloaded 3 November 2026.',
    localProject: 'Theater Pforzheim forecast: an original Python project fitting two least-squares lines to 17 seasons (2000/2001 to 2016/2017) of City of Pforzheim theatre figures and testing them on four hidden seasons. The year trend (-1,376 a season) misses 2019/2020 by about 29,000; the performances model (about 540 visitors per performance) fits 2019/2020 within about 6,000 but forecasts -31,756 visitors for 2020/2021, because it never saw fewer than 245 performances. Lesson family: a fitted line is only safe inside the range it learned from.',
    requiredMentions: ['pforzheim_theatre.csv', 'Trend: visitors change by -1376 a season', '2020 predicted 92486 real 1869', 'Each performance brings about 540 visitors', 'With no performances the line says: -40396', '2020 predicted -31756 real 1869', 'Pforzheim 134,912', 'No line knows what it never saw'],
    sources: [
      { claim: 'BW compulsory Informatik und Medienbildung from 2025/26; IMP phased out; Oberstufe structure.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/baden-wuerttemberg' },
      { claim: 'BW meets the four-hour recommendation.', url: 'https://informatik-monitor.de/' },
      { claim: 'BWKI organiser, eligibility, rules and language.', url: 'https://www.bw-ki.de/teilnahmebedingungen' },
      { claim: 'BWKI 2026 final in Tübingen.', url: 'https://www.bw-ki.de/' },
      { claim: 'Pforzheim theatre performances and visitors, licence.', url: 'https://ckan.govdata.de/dataset/auffuhrungen-und-besucher-theater-oper-ballett' },
      { claim: 'BW holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' }
    ],
    rejectedClaims: [
      'The reason for the short 2019/2020 and 2020/2021 seasons: not in the data, so not given.',
      'Any judgement of Theater Pforzheim\'s programme or popularity: outside the data and the page.',
      'Grade, admission or job promises for AI learners: refused.',
      'Any link with Theater Pforzheim, the City of Pforzheim, the Tübingen AI Center or BWKI: none.'
    ]
  }
};
