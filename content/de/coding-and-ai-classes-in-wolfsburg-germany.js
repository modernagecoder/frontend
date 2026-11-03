'use strict';
// Coding and AI classes in Wolfsburg (ag- city page, Germany cluster P6 row DE188, tier-2 shape coding-and-ai = all ages).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: the simplest machine learning there is, a straight line learned from data. Learners fit it to Wolfsburg's own
// weather station, test it on years it never saw, and then read the station's metadata and find that the station moved,
// something no model can learn from the numbers alone.
// City data searched first: GovData lists no Stadt Wolfsburg dataset with an allowed licence and a direct file (only a
// research lane map and a freight price table), so the project uses the DWD station inside the city, which no other page
// uses. Reverse lookup of the current station position (52.3962 N, 10.6892 E) gives Ehmen-Mörse, Wolfsburg.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, Niedersachsen page: "An allen allgemeinbildenden Schularten wird seit dem Schuljahr
//    2024/25 das Pflichtfach Informatik in den Jahrgangsstufen 9 und 10 unterrichtet." (79). National page: BW,
//    Niedersachsen and Bremen, "ungefähr jede zwölfte Person" takes Informatik in the Oberstufe (99).
//  - KMK, Bildung in der digitalen Welt: 2016 strategy (100); 2024 Handlungsempfehlung on AI (103); 2026 framework
//    "um KI-bezogene Kompetenzen ergänzt" (102).
//  - BWKI: Tübingen AI Center (208); "Sekundarstufe I und II" (209); documentation, runnable code and video pitch (211);
//    German or English (213); 2026: project deadline 20.09.2026, "13.11.2026 Finale in Tübingen" (214).
//  - KMK Ferien 2026/2027, Niedersachsen row: "Niedersachsen 12.10. - 24.10. 23.12. - 09.01. 01.02. - 02.02. 22.03. -
//    03.04. 07.05. und 18.05. 08.07. - 18.08." (277).
//  - AI tool ages: content/ai-tool-age-audit.json (ChatGPT 13 with a parent's permission under 18; Gemini 16 in Germany;
//    Claude 18+).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Wolfsburg 129,560; Braunschweig 252,962; Hannover 522,131;
//    Niedersachsen 8,004,489.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate data (KL), station 05676 "Wolfsburg (Südwest)",
//    tageswerte_KL_05676_19810401_20240102_hist.zip, downloaded 3 November 2026; 15,597 days from 1 April 1981 to
//    2 January 2024. Metadaten_Geographie: 76 m from 15 August 1965, 70 m from 1 November 1990, 81.5 m at 52.3962 N,
//    10.6892 E from 1 September 2010. Metadaten_Fehldaten: TMK missing 3 to 12 June 2019 and 14 to 26 June 2019.
//    Licence CC BY 4.0 (opendata.dwd.de Terms_of_use.txt).
// Our own calculations (scratchpad de/w/T6/wolfsburg/v1.py, v2.py, v3.py, python3 -I); a complete year has 365 or more
// daily means:
//  v1: "Complete years: 41  left out: [1981, 2019, 2024]".
//  v1+v2 (train 1982 to 2002, 21 years; test 2003 to 2023 without 2019, 20 years): "Learned slope: 0.38 degrees per
//      decade", "Flat average, error on later years: 0.85", "Straight line, error on later years: 0.48".
//  v1+v2+v3: "2010 line says 10.33 station measured 8.57", "2018 line says 10.63 station measured 11.21",
//      "2023 line says 10.82 station measured 11.18".
//  Training mean 1982 to 2002: 9.64 C. No forecast beyond 2023 is printed or claimed.
// Lesson family: a fitted line is a learned model; judge it on later years it never saw, and read the metadata (here a
// station move) before believing what a trend says.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'temps = {}',
  'with open("wolfsburg_daily.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["mean_temp"] != "-999":',
  '            year = int(row["date"][:4])',
  '            temps.setdefault(year, []).append(float(row["mean_temp"]))',
  '',
  'yearly = {}',
  'for year, values in temps.items():',
  '    if len(values) >= 365:',
  '        yearly[year] = sum(values) / len(values)',
  '',
  'print("Complete years:", len(yearly), " left out:", sorted(set(temps) - set(yearly)))'
].join('\n');

const V2 = [
  'train = [(y, t) for y, t in yearly.items() if y <= 2002]',
  'test = [(y, t) for y, t in yearly.items() if y > 2002]',
  '',
  'n = len(train)',
  'mean_year = sum(y for y, t in train) / n',
  'mean_temp = sum(t for y, t in train) / n',
  'slope = sum((y - mean_year) * (t - mean_temp) for y, t in train) / sum((y - mean_year) ** 2 for y, t in train)',
  '',
  'def line(year):',
  '    return mean_temp + slope * (year - mean_year)',
  '',
  'flat_error = sum(abs(t - mean_temp) for y, t in test) / len(test)',
  'line_error = sum(abs(t - line(y)) for y, t in test) / len(test)',
  'print("Learned slope:", round(slope * 10, 2), "degrees per decade")',
  'print("Flat average, error on later years:", round(flat_error, 2))',
  'print("Straight line, error on later years:", round(line_error, 2))'
].join('\n');

const V3 = [
  'for year in [2010, 2018, 2023]:',
  '    print(year, "line says", round(line(year), 2), "station measured", round(yearly[year], 2))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Wolfsburg: coding and AI, all ages' },
  slug: 'coding-and-ai-classes-in-wolfsburg-germany',
  code: 'caw',
  accent: '#4B6C2C',
  accentRationale: 'Coding and AI in Wolfsburg: a moss green #4B6C2C for the Allerpark and the woods that ring the city; contrast 4.90 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-lower-saxony', name: 'Lower Saxony' }],
  routeLabel: 'Coding and AI classes in Wolfsburg',
  title: 'Coding and AI Classes in Wolfsburg: Live Online in English',
  description: 'Coding and AI classes in Wolfsburg for kids, teens and adults, live online in English: Lower Saxony Informatik, the BWKI and a Wolfsburg climate model project.',
  ogDescription: 'Live coding and AI lessons in English for Wolfsburg learners from 6 to adult, with a first machine-learning model trained on the city\'s own weather station, and the station move that the model never saw coming.',
  twitterDescription: 'Coding and AI for every age in Wolfsburg, live in English, with a model built on Wolfsburg weather data.',
  pageName: 'Coding and AI Classes in Wolfsburg',
  webPageDescription: 'A guide for Wolfsburg children, teenagers, parents and adults to live coding and AI classes in English: why we teach code before AI, what Lower Saxony schools teach in Informatik, the national AI competition for pupils, and an original Python project on the Deutscher Wetterdienst station Wolfsburg (Südwest).',
  courseDescription: 'Live online coding and AI classes in English for Wolfsburg learners from age 6 to adult: Scratch and Python for children, data and machine learning for teenagers, and Python for adults at work, in classes of fifteen to twenty or one to one with a regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Wolfsburg, all ages',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#why', label: 'Why code' },
    { href: '#trend', label: 'Model' },
    { href: '#schule', label: 'School' },
    { href: '#zeiten', label: 'Times' }
  ],
  eyebrow: 'Wolfsburg &middot; Coding and AI &middot; Learners from 6 to adult',
  h1: 'Coding and AI classes in Wolfsburg',
  lede: 'Machine learning sounds mysterious until you have built one model yourself. The simplest is a straight line that a computer learns from data, and our Wolfsburg learners build exactly that on forty years of their own city\'s weather records. On this page: why we teach coding before AI, what Lower Saxony schools teach in Informatik, a national AI contest for pupils, how live classes in English work, and the moment the model meets something it could never have learned.',
  secondaryCta: { href: '#trend', label: 'See the Wolfsburg model' },
  wa: 'Hello Modern Age Coders, I am in Wolfsburg and would like coding and AI classes in English. Can we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ learners worldwide &middot; models you build and can explain',
  spec: [
    ['Learners', 'Children, teenagers, adults'],
    ['Children', 'Scratch, then Python'],
    ['Teenagers', 'Data and machine learning'],
    ['Adults', 'Python for work, AI with care'],
    ['Format', 'Class of 15 to 20, or private'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'Coding and AI classes for Wolfsburg at Modern Age Coders are taught live online, in English, to learners of every age: children from 6 build Scratch games and then type Python, teenagers learn data and train machine-learning models they test honestly, and adults use Python and AI at work. Each learner has one mentor who matches their pace and accent, in a class of fifteen to twenty or privately.',

  picks: {
    eyebrow: 'Starting points',
    h2: 'Which coding and AI course should a Wolfsburg learner start with?',
    lede: 'A first course for each age. The free trial confirms the choice.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CAW / 01', title: 'Coding for Kids', note: 'Ages 6 to 12, in age groups. Scratch games and stories first, then apps, with a first idea of how computers learn.' },
      { course: 'data-science-course-for-teens-python-data', code: 'CAW / 02', title: 'Data Science for Teens', note: 'Ages 13 to 18. Python on real files such as the Wolfsburg weather record, charts that answer questions, and first models.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'CAW / 03', title: 'Python from Zero to Advanced', note: 'Adults. Python from the first line, then files, automation and calling AI services from your own code.' }
    ]
  },

  sections: [
    {
      id: 'why',
      eyebrow: 'Code first, then AI',
      h2: 'Why learn coding before using AI tools?',
      lede: 'Because a person who has built a small model can judge a big one. Our classes teach the ideas inside AI by building them in Python, at a level that fits each age.',
      body: [
        { kind: 'two',
          leftH3: 'What learners build, by age',
          left: [
            'Children of 6 to 8 give exact instructions in Scratch and discover that computers do precisely what they are told. From about 9 they type Python and write rules that decide things, the seed of every AI system.',
            'Teenagers train real models: a line, a threshold, a nearest neighbour. Adults go further into the tools of their jobs, but start with the same small models so they know what is happening underneath.'
          ],
          rightH3: 'Why age rules matter',
          right: [
            'The big AI chat tools set minimum ages in their terms. OpenAI\'s floor is 13, and a parent must agree for anyone under 18; Gemini is 16 and over in Germany; Claude is limited to adults of 18 and over. Our classes for children never ask them to open such accounts.',
            'That is no loss. A twelve year old who has trained a model on real data understands what an AI answer is, and when to doubt it, better than one who has only typed prompts.'
          ] },
        { kind: 'p', mt: true, html: 'German schools are moving the same way. The Kultusministerkonferenz added AI-related competences in 2026 to its framework "Bildung in der digitalen Welt", which dates from 2016, two years after it issued guidance to school authorities on handling AI (2024). Our classes work alongside that and do not replace any school subject.' }
      ]
    },
    {
      id: 'trend',
      tint: 'tint',
      eyebrow: 'A Wolfsburg AI project',
      h2: 'Can a computer learn a warming trend from Wolfsburg weather data?',
      lede: 'It can learn a line, and the line beats guessing. But the most important finding is in a file most people never open. Every daily reading of the DWD station Wolfsburg (Südwest) is open data, licensed CC BY 4.0.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'Station 05676, Wolfsburg (Südwest), has daily climate data from 1 April 1981 to 2 January 2024: 15,597 days, each with a mean, a highest and a lowest temperature. We downloaded the file on 3 November 2026.',
            'In class we use a small file, wolfsburg_daily.csv, with the date, the day\'s mean temperature and its maximum. Missing readings show up in two ways: as the value -999, or as a date that is simply not in the file.'
          ],
          rightH3: 'The plan',
          right: [
            'First, turn days into yearly averages, keeping only complete years. Second, learn a straight line from the years 1982 to 2002. Third, test it on 2003 to 2023, years the line has never seen, against the plainest possible guess: every year will be like the old average.',
            'Learning a line from points is called least-squares regression. It is the first model in almost every machine-learning course, and it fits in ten lines of Python.'
          ] },
        { kind: 'code', label: 'Step 1: yearly averages from complete years', lang: 'Python', code: V1, note: 'It prints: <code>Complete years: 41  left out: [1981, 2019, 2024]</code>.' },
        { kind: 'p', mt: true, html: 'Three years drop out. 1981 starts in April and 2024 has a single day, which makes sense. But why 2019? The station\'s own metadata answers it: the daily means are missing from 3 to 12 June 2019 and again from 14 to 26 June 2019. A year without most of June would look colder than it was, so leaving it out is the honest choice.' },
        { kind: 'code', label: 'Step 2: learn a line, then test it on later years', lang: 'Python', code: V2, note: 'Run after Step 1, it prints: <code>Learned slope: 0.38 degrees per decade</code>, <code>Flat average, error on later years: 0.85</code> and <code>Straight line, error on later years: 0.48</code>.' },
        { kind: 'p', mt: true, html: 'The model learned that, from 1982 to 2002, Wolfsburg\'s yearly mean rose by about 0.38 degrees per decade. On the twenty later years it never saw, the line is off by 0.48 degrees on average, while the flat old average is off by 0.85. A learned model beating a fixed guess on unseen data is the basic test every AI system has to pass.' },
        { kind: 'code', label: 'Step 3: where the line and the station disagree', lang: 'Python', code: V3, note: 'Run after Steps 1 and 2, it prints: <code>2010 line says 10.33 station measured 8.57</code>, <code>2018 line says 10.63 station measured 11.21</code> and <code>2023 line says 10.82 station measured 11.18</code>.' },
        { kind: 'p', mt: true, html: 'Now the twist. The station\'s geography file shows that it has not always stood in the same place. Since 1 November 1990 it was at 70 metres; from 1 September 2010 it stands at 81.5 metres, at a new position. The model knows nothing about that. It sees one column of numbers called "Wolfsburg" and assumes they all mean the same thing. Whether the move changed the readings, and by how much, cannot be learned from this file alone. A careful data scientist writes that down next to every chart.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'The station\'s recorded positions while our data was collected (DWD metadata)', head: ['From', 'Height, m', 'Latitude, longitude'], rows: [
          ['15 August 1965', '76', '52.4175, 10.7200'],
          ['1 November 1990', '70', '52.4159, 10.6919'],
          ['1 September 2010', '81.5', '52.3962, 10.6892']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, daily climate data and station metadata, station 05676 Wolfsburg (Südwest), licence CC BY 4.0, downloaded 3 November 2026. The yearly means, the line, its slope and its errors are our own calculations. We print no forecast beyond 2023: a line learned from the past is not a promise about the future.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 9, no screen.</strong> Measure a plant\'s height every day for a week, draw the dots, and lay a ruler through them. Where does the ruler say it will be on day 10? Then measure on day 10.',
          '<strong>Ages 10 to 12, Python.</strong> Run Step 1 and print the warmest and coldest complete year. Find 2010 and guess why it might stand out, then check the station table.',
          '<strong>Teenagers.</strong> Fit the line on 1991 to 2009 only, the years at the middle site, and compare its slope with ours. What does the difference tell you, and what can it not tell you?',
          '<strong>Adults.</strong> Replace the yearly mean with the yearly count of days above 25 degrees, using the max_temp column. Fit and test the same way, and write one sentence a manager could act on.'
        ] }
      ]
    },
    {
      id: 'schule',
      eyebrow: 'Schools in Lower Saxony',
      h2: 'When do Wolfsburg pupils take Informatik at school?',
      lede: 'Later than in Länder such as NRW, where it starts in grade 5. Lower Saxony made Informatik compulsory in grades 9 and 10, and few pupils carry it into the Oberstufe.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in Lower Saxony according to the Informatik-Monitor 2026/27', head: ['Point', 'What the Monitor records'], rows: [
          ['Compulsory subject', 'Informatik in grades 9 and 10 at all general school types'],
          ['Since when', 'The 2024/25 school year'],
          ['Earlier grades', 'Electives possible, e.g. two hours a week from grade 6 at Haupt-, Real- and Oberschule'],
          ['Oberstufe', 'Roughly one pupil in twelve takes Informatik, as in Baden-Württemberg and Bremen']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Niedersachsen page and national overview, read on 2 November 2026: "seit dem Schuljahr 2024/25 das Pflichtfach Informatik in den Jahrgangsstufen 9 und 10".' },
        { kind: 'p', mt: true, html: 'For a Wolfsburg child, that means primary school and grades 5 to 8 pass before Informatik is on every timetable; whether an elective exists earlier depends on the school. Children who start coding at 8 or 10 arrive in grade 9 already able to read and write simple programs. For teenagers already in grade 9 or 10, our classes add depth to the compulsory course. Either way we teach alongside school, and the school course is the one that is graded.' }
      ]
    },
    {
      id: 'bwki',
      eyebrow: 'For teenagers',
      h2: 'Is there an AI competition Wolfsburg pupils can enter?',
      lede: 'Yes, the Bundeswettbewerb Künstliche Intelligenz, a national contest for pupils who build their own machine-learning projects.',
      body: [
        { kind: 'two',
          leftH3: 'What the BWKI asks for',
          left: [
            'The contest is run by the Tübingen AI Center and is open to pupils in Sekundarstufe I and II. Teams submit a written documentation, runnable code and a short video pitch, and projects may be submitted in German or in English.',
            'In 2026 the project deadline was 20 September 2026 and the final in Tübingen takes place on 13 November 2026.'
          ],
          rightH3: 'How our classes connect',
          right: [
            'A BWKI project needs exactly what the Wolfsburg model above practises: a question, real data, a model, a fair test on unseen data and an honest write-up of its limits.',
            'We never write or polish a pupil\'s competition work. We teach the methods with our own projects, and the pupil builds their own. We are not connected with the BWKI or the Tübingen AI Center.'
          ] }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Times',
      h2: 'What time are live classes in Wolfsburg?',
      lede: 'An afternoon in Wolfsburg is an evening in India, so the timetable works for both. Holidays in Lower Saxony do not interrupt lessons unless you choose.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example times in Wolfsburg with the time in India', head: ['Wolfsburg', 'India, winter until 28 March 2027', 'India, summer from 28 March 2027'], rows: [
          ['14:45', '19:15', '18:15'],
          ['18:15', '22:45', '21:45'],
          ['Saturday 12:00', '16:30', '15:30'],
          ['Sunday 09:30', '14:00', '13:00']
        ] },
        { kind: 'source', html: 'Time law: the Einheitenzeitgesetz sets UTC+1 for winter and UTC+2 for summer in Germany. This year\'s summer time ended on 25 October 2026; the next starts on 28 March 2027. India uses UTC+5:30 throughout, which is 4 h 30 ahead of Wolfsburg in winter and 3 h 30 ahead in summer. Examples only, not fixed batch times.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Lower Saxony school holidays, 2026/27 (KMK table)', head: ['Ferien', 'Dates'], rows: [
          ['Herbst', '12 to 24 October 2026'],
          ['Weihnachten', '23 December 2026 to 9 January 2027'],
          ['Winter', '1 and 2 February 2027'],
          ['Ostern', '22 March to 3 April 2027'],
          ['Single days', '7 May and 18 May 2027'],
          ['Sommer', '8 July to 18 August 2027']
        ] },
        { kind: 'source', html: 'Source: KMK, Ferien im Schuljahr 2026/2027, Niedersachsen row, status 9 October 2025.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How does a learner go from first program to tested model?',
    lede: 'Our own milestones. Children move through them over years, teenagers and adults over months.',
    table: { caption: 'From code to machine learning (ours)', head: ['Step', 'Children, typical age', 'Teens and adults, typical month'], rows: [
      ['Exact instructions that work', '6 to 8', 'Month 1'],
      ['Loops, rules and variables', '8 to 10', 'Month 1'],
      ['Averages from a real file', '10 to 12', 'Month 2'],
      ['A line learned from points', '12 and up', 'Month 3'],
      ['A fair test on unseen data', 'Teenagers', 'Month 4'],
      ['A written note on the limits', 'Teenagers', 'Months 4 to 6']
    ] },
    left: { h3: 'For learners', ps: [
      'Always ask what your model could not know. A station move, a missing month or a new measuring method can change the data without changing its name.',
      'Test on data from after your training period, never before it.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your child to explain one limit of a model they built. A clear answer shows real understanding.',
      'You get a short monthly note on what was built and what comes next.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Nine more courses for Wolfsburg learners',
    lede: 'Arranged by age. Live, in English, with the same mentor throughout.',
    bands: [
      { num: 'I', h3: 'Children', sub: '6 to 12', courses: [
        { code: 'CAW / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'A short first course in blocks.' },
        { code: 'CAW / KID / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed Python and small AI ideas from about 9.' },
        { code: 'CAW / KID / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Several game tools in one long course.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: '13 to 18', courses: [
        { code: 'CAW / TEEN / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models trained and tested properly.' },
        { code: 'CAW / TEEN / 02', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Help beside grades 9 and 10 Informatik.' },
        { code: 'CAW / TEEN / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The maths underneath every model.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Work and study', courses: [
        { code: 'CAW / ADULT / 01', slug: 'python-ai-automation-masterclass-college', title: 'Automation and applied AI', blurb: 'Python scripts that do the routine work.' },
        { code: 'CAW / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Clean, check and explain real data.' },
        { code: 'CAW / ADULT / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web development', blurb: 'Build and deploy complete web apps.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Format',
    h2: 'What is the format of the Wolfsburg classes?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Mid-afternoon', l: 'Pupils straight after school.' },
      { time: 'Evening', l: 'Adults after a working day.' },
      { time: 'Saturday and Sunday', l: 'Morning or midday for all ages.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'Someone who knows how you learn.' },
      { h3: 'Live every time', p: 'No recordings to watch alone.' },
      { h3: 'Build, then use', p: 'Models made by hand before AI tools.' },
      { h3: 'Separate ages', p: 'Children, teens and adults apart.' },
      { h3: 'Honest testing', p: 'Every model is checked on new data.' },
      { h3: 'Class or private', p: '15 to 20 learners, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Examples from our students elsewhere in the world. The <a class="ag-inline-link" href="/student-labs">student labs</a> collect many more.',
  reviewsLede: 'Our Google reviews, word for word, from learners and parents.',

  fees: {
    h2: 'Fees for Wolfsburg learners',
    lede: 'The fee is monthly and pays for eight live classes. Prices on this page are euro amounts based on the European Central Bank reference rate, but the actual charge is in US dollars; your bank converts it, so the final euro figure may vary a little.',
    free: ['A free first class', 'A short problem and a first program', 'Nothing to pay up front'],
    group: ['15 to 20 learners close in age', 'One mentor all year', 'Two classes each week', 'Monthly, cancel any month'],
    one: ['Only you and your mentor', 'Your goals set the pace', 'Times agreed between you']
  },

  faq: {
    eyebrow: 'Wolfsburg questions',
    h2: 'Coding and AI classes in Wolfsburg: what people ask',
    items: [
      { q: 'Are the classes in German?', a: 'No. Classes are live and in English only, taught by mentors in India who adapt to each learner\'s pace and accent. There are no lessons in German.' },
      { q: 'Who can join?', a: 'Children from 6, teenagers and adults. Each age group has its own classes: Scratch and Python for children, data and machine learning for teenagers, Python and applied AI for adults.' },
      { q: 'Is Informatik compulsory in Lower Saxony?', a: 'Yes, in grades 9 and 10 at all general school types since the 2024/25 school year, according to the Gesellschaft für Informatik. Before that, some school types may offer it as an elective, for example from grade 6 at the Oberschule.' },
      { q: 'Do children use ChatGPT in your classes?', a: 'No. OpenAI requires a minimum age of 13 with a parent\'s permission under 18, and other AI chat tools set higher ages. Instead, children see what is inside AI by making tiny models of their own in Python.' },
      { q: 'When are classes in Wolfsburg time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Wolfsburg afternoons fall in the Indian evening, so the hours suit both sides.' },
      { q: 'What is the Wolfsburg weather model?', a: 'A Python exercise we wrote around the DWD station Wolfsburg (Südwest). A straight line learned from 1982 to 2002 predicts later yearly means with an average error of 0.48 degrees, against 0.85 for the old average, and learners then discover the station moved in 2010.' },
      { q: 'What is the BWKI?', a: 'The Bundeswettbewerb Künstliche Intelligenz, run by the Tübingen AI Center for pupils in Sekundarstufe I and II. Projects need documentation, runnable code and a video pitch, and may be in German or English. The 2026 final is on 13 November 2026 in Tübingen.' },
      { q: 'Can adults learn AI with you without a technical background?', a: 'Yes. Adult courses start from the first line of Python and build up to data and AI tools, so no previous programming is needed.' },
      { q: 'How many people are in a class?', a: 'Group classes have 15 to 20 learners of a similar age. One-to-one classes are available with the same mentor at agreed times.' },
      { q: 'How do payments work?', a: 'Monthly. The euro amounts follow the European Central Bank reference rate; payment is taken in US dollars and converted by your bank. The first class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'Related pages',
    lede: 'More for Wolfsburg learners.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The full Germany guide.' },
      { href: '/coding-classes-in-lower-saxony', label: 'Coding classes in Lower Saxony', p: 'The Land rules and holidays.' },
      { href: '/informatik-abitur-niedersachsen', label: 'Informatik-Abitur in Niedersachsen', p: 'For Oberstufe pupils.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Another model on German data.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits for AI tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our classes from the inside.' }
    ]
  },

  start: {
    h2: 'Book a free first class in Wolfsburg',
    lede: 'The first class is a real lesson: a problem to solve, a program to write, and a chance to talk about what you want to learn. The mentor then recommends a course and a group or a one-to-one plan.',
    readFirst: 'To read more first, try <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or the list of <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'Classes are taught live online in English by mentors in India. WhatsApp reaches us fastest.',
    formNote: 'No cost and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Learning', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-lower-saxony', label: 'Lower Saxony' },
        { href: '/informatik-abitur-niedersachsen', label: 'Informatik-Abitur Niedersachsen' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' }
      ] }
    ],
    bottomRight: 'The model never saw the station move'
  },

  personalityCss: `
.ag-root.ag-caw .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-caw .ag-capsule { border-left-width: 3px; }
.ag-root.ag-caw .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-caw .ag-table caption { text-align: left; }
.ag-root.ag-caw .ag-code-head b { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Niedersachsen and national pages); KMK, Bildung in der digitalen Welt; BWKI terms and 2026 timeline; KMK Ferien 2026/2027, Niedersachsen row; AI providers\' terms via content/ai-tool-age-audit.json; Einheitenzeitgesetz; read 2 to 3 November 2026. Deutscher Wetterdienst, station 05676 Wolfsburg (Südwest), CC BY 4.0.',
    localProject: 'A first machine-learning model on Wolfsburg\'s DWD station: yearly means from 41 complete years (1981, 2019 and 2024 left out), a least-squares line learned on 1982 to 2002 (0.38 degrees per decade) with an error of 0.48 degrees on later years against 0.85 for the flat average, and the station metadata showing moves in 1990 and 2010 that the model cannot see. Lesson family: judge a fitted line on unseen later years and read the metadata before trusting a trend.',
    requiredMentions: ['wolfsburg_daily.csv', 'Complete years: 41  left out: [1981, 2019, 2024]', 'Learned slope: 0.38 degrees per decade', 'Straight line, error on later years: 0.48', '2010 line says 10.33 station measured 8.57', 'Wolfsburg (Südwest)', 'seit dem Schuljahr 2024/25 das Pflichtfach Informatik', 'The model never saw the station move'],
    sources: [
      { claim: 'Lower Saxony compulsory Informatik grades 9 and 10 since 2024/25.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/niedersachsen' },
      { claim: 'One in twelve Oberstufe pupils take Informatik in BW, Niedersachsen, Bremen.', url: 'https://informatik-monitor.de/' },
      { claim: 'BWKI rules and 2026 dates.', url: 'https://www.bw-ki.de/teilnahmebedingungen' },
      { claim: 'Lower Saxony holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Wolfsburg (Südwest) daily data and metadata, CC BY 4.0.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/' }
    ],
    rejectedClaims: [
      'Any forecast for Wolfsburg beyond 2023 from the fitted line: not printed, a line is not a promise.',
      'Any claim that the 2010 move caused the cold 2010 reading: not knowable from the file, so not made.',
      'Naming employers or schools in Wolfsburg as sources of learners: refused.',
      'German-language teaching, and any link with the BWKI, the city or the Land: none.'
    ]
  }
};
