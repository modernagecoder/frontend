// SHIP: market (en subject door) | data science for Peru: judge the data before the model, on IGP Huancayo weather (ODC-By) | a step change: zero sub-zero hours for three years, then hundreds; check the instrument before the trend
'use strict';
// Data science course, Peru (ag- English subject door, Peru cluster row PE017, hubGroup subjects, code das, #034A2E).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Fees render in USD from the template only; no soles, no typed figure. British spelling.
// Audience: university students and adults in Peru (18+), with a teen route from 14. Spanish twin (live):
// /curso-de-data-science-en-ingles-peru (its spine: what data science is, Excel to Python with INEI skills, UNHEVAL
// enrolments 2024 with sentinel values, maths needed, PROMPERÚ projection). This page takes a different spine and dataset:
// the core skill is judging whether data can answer the question; one hourly weather dataset from the Instituto Geofísico
// del Perú (IGP) at its Huancayo Observatory in Huayao, ODC-By; lesson: a step change in a series.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/data-science-course-peru/data/,
// fetched 9 November 2026 with curl -sL -A "Mozilla/5.0"):
//  - Dataset page (dataset_page.html/.txt): "Estación Meteorológica Automática para variables atmosféricas de LAMAR - Junín,
//    Perú - [Instituto Geofísico del Perú - IGP]", https://www.datosabiertos.gob.pe/dataset/estaci%C3%B3n-meteorol%C3%B3gica-autom%C3%A1tica-para-variables-atmosf%C3%A9ricas-de-lamar-jun%C3%ADn-per%C3%BA-instituto;
//    "Licencia Open Data Commons Attribution License"; "Observatorio de Huancayo (-12.0401 S, -75.32049 W, 3329
//    m.s.n.m.m.), Huayao, Junín, Perú, es una base de datos con una frecuencia horaria"; TT "a una altura de entre 1,25 y 2
//    m por encima del nivel del suelo, se expresa en grados Celsius (°C)"; HR "%"; PP "hectopascales (hPa)"; RR "milímetros
//    (mm)"; DD "grados (°)"; FF "metros por segundos (m/s)"; "Fecha de lanzamiento 2025-05-30"; "Fecha modificada
//    2026-05-29"; "Temporal Coverage De Lunes, Enero 1, 2018 - 00:00 hasta Miércoles, Diciembre 31, 2025 - 23:00"; EMA per
//    "Organización Meteorológica Mundial (OMM–N° 182)" (dash in source, not reproduced).
//  - File IGP_EstacionEMA_data_2018_2025.csv, 5,259,481 bytes, sha256 16eac745...2222f410, 70,128 data rows, header
//    FECHA_CORTE,UBIGEO,year,month,day,hour,TT,HR,RR,PP,FF,DD; UBIGEO 120904 on every row; FECHA_CORTE 20260526.
//  - INEI (facts-geo/places.tsv): Junín department 1,422,780 (Censos Nacionales 2025, reference day 15 September 2025);
//    Huancayo city 456,250 (Censos Nacionales 2017, Perfil Sociodemográfico Cuadro 1.9, census day 22 October 2017).
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): Huancayo 499 ("proficiencySlug":"low"); Lima 555 high.
//  - CNEB (FACTS 55): "Resuelve problemas de gestión de datos e incertidumbre" is one of the maths competencies.
//  - Time (facts-geo/timezone.tsv): America/Lima UTC-5 all year; India UTC+5:30; 10 h 30 min.
// Our own analysis (scratchpad pe/e3/code/das_v1.py and das_v2.py, run with python3 -I against the downloaded file):
//    v1: 2018 frost nights: 0 / 2019 0 / 2020 0 / 2021 29 / 2022 40 / 2023 48 / 2024 26 / 2025 29
//    v2: blank TT readings: 700 / first reading below 0: ('2021', '5', '27', '4') / June and July hours under 3 C (of which
//        under 0 C): 2018 243 (0), 2019 270 (0), 2020 222 (0), 2021 226 (75), 2022 306 (121), 2023 349 (150), 2024 259
//        (100), 2025 276 (126)
//    Also checked (python3 -I): 650 hourly readings below 0 in the whole file; lowest -6.134 on 7 July 2025, hour 6; July
//    minimum 2018 0.24, 2019 0.21, 2020 0.27; every year has all its hours as rows (8,760 or 8,784); 16 whole days blank.
// Lesson family: a step change in a series; before calling something a trend, look at the whole distribution and the
//    date the change begins, and ask whether the instrument or the processing changed. We do not claim which it was.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'FILE = "IGP_EstacionEMA_data_2018_2025.csv"',
  '',
  'coldest = {}                                  # (year, month, day) -> lowest TT',
  'with open(FILE, encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["TT"] == "":',
  '            continue',
  '        day = (row["year"], row["month"], row["day"])',
  '        coldest[day] = min(coldest.get(day, 99.0), float(row["TT"]))',
  '',
  'frost = {}',
  'for (year, month, day), low in coldest.items():',
  '    if low < 0:',
  '        frost[year] = frost.get(year, 0) + 1',
  '',
  'for year in range(2018, 2026):',
  '    print(year, "frost nights:", frost.get(str(year), 0))'
].join('\n');

const V2 = [
  'import csv',
  '',
  'FILE = "IGP_EstacionEMA_data_2018_2025.csv"',
  '',
  'cold = {}       # year -> hours under 3 °C in June and July',
  'below = {}      # year -> of those, hours under 0 °C',
  'blank = 0',
  'first_negative = None',
  'with open(FILE, encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["TT"] == "":',
  '            blank += 1',
  '            continue',
  '        t = float(row["TT"])',
  '        if t < 0 and first_negative is None:',
  '            first_negative = (row["year"], row["month"], row["day"], row["hour"])',
  '        if row["month"] in ("6", "7") and t < 3:',
  '            cold[row["year"]] = cold.get(row["year"], 0) + 1',
  '            if t < 0:',
  '                below[row["year"]] = below.get(row["year"], 0) + 1',
  '',
  'print("blank TT readings:", blank)',
  'print("first reading below 0:", first_negative)',
  'for year in range(2018, 2026):',
  '    y = str(year)',
  '    print(y, "hours under 3 C:", cold.get(y, 0), "of which under 0 C:", below.get(y, 0))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Data science course' },
  slug: 'data-science-course-peru',
  code: 'das',
  accent: '#034A2E',
  accentRationale: 'Data science in Peru: a very deep green #034A2E allocated to this row, the colour of the Mantaro valley fields around the observatory in the lesson; it sits far above 4.5:1 on #FBF8F2, #F5F1E8 and #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Data science course, Peru',
  title: 'Data Science Course in Peru: Live Online, in English',
  description: 'Data science course for Peru, live online in English: Python, statistics and machine learning on real Peruvian open data, for adults and teens 14+, any hour.',
  ogDescription: 'Learn data science from Peru with a live mentor, in English and at flexible hours: what the work really is, where Peruvian open data comes from and what its licence asks, and a worked analysis of eight years of hourly weather from the IGP observatory near Huancayo.',
  twitterDescription: 'Data science from Peru, live online in English, with a real analysis of IGP weather data from the Mantaro valley.',
  pageName: 'Data Science Course in Peru',
  webPageDescription: 'A guide for university students, adults and older teenagers in Peru who want to learn data science live online in English, with an original Python analysis of the Instituto Geofísico del Perú\'s hourly weather dataset from Huayao (ODC-By, 2018 to 2025), INEI census figures and EF EPI 2025.',
  courseDescription: 'Live online data science courses in English for learners in Peru: Python, pandas, statistics, visualisation and machine learning for adults from 18, and a data science route for teenagers from 14 who know some Python, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Data science course',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#work', label: 'The work' },
    { href: '#opendata', label: 'Peruvian data' },
    { href: '#frost', label: 'Analysis' },
    { href: '#route', label: 'Route' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Peru &middot; Data science &middot; Live online, in English &middot; 14 to adult',
  h1: 'Data science course in Peru',
  lede: 'Most data science courses start with a clean file and a model. Real work starts earlier, with a question nobody likes: can this data answer what we are asking? This page explains what a data science course should teach, where Peruvian open data comes from, and walks through an analysis of eight years of hourly weather near Huancayo in which the most interesting result turns out to be a warning.',
  secondaryCta: { href: '#frost', label: 'See the Huancayo analysis' },
  wa: 'Hello Modern Age Coders, I am in Peru and would like to learn data science, live online in English. Could I book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ learners worldwide &middot; real data from the first month',
  spec: [
    ['For', 'Adults and university students; teens from 14 with some Python'],
    ['Tools', 'Python, pandas, charts, statistics, machine learning'],
    ['Data', 'Real open datasets, including Peruvian ones'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Peru time', 'Any day and hour you choose'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders teaches data science to learners in Peru live online and in English: adults and university students from 18 start with Python, then learn pandas, statistics, visualisation and machine learning, and teenagers from 14 who know some Python have their own course. We work on real open data, including Peruvian datasets, and teach learners to question a dataset before trusting a result. A mentor is on video in every class, with a group of fifteen to twenty or one to one, at any day and hour you choose.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three data science courses for learners in Peru',
    lede: 'A complete route for adults, a shorter route for teenagers, and an analysis-first route for people whose work lives in spreadsheets.',
    items: [
      { course: 'data-science-complete-masterclass-college', code: 'PE / DATA / 01', title: 'Data science: Python, ML and deep learning', note: 'For complete beginners from 18, 10 to 12 months. Python first, then data handling, statistics, machine learning and a capstone on real data.' },
      { course: 'data-science-course-for-teens-python-data', code: 'PE / DATA / 02', title: 'Data science for teens', note: 'Ages 14 to 18 who know basic Python, six months. Charts, real datasets and first models, built and explained by the student.' },
      { course: 'data-analysis-mastery-course-college', code: 'PE / DATA / 03', title: 'Data analysis: Excel, SQL, Python and BI', note: 'For beginners from 18, 8 to 10 months. The route for analysts: from spreadsheets to SQL, Python and dashboards.' }
    ]
  },

  sections: [
    {
      id: 'work',
      eyebrow: 'The work',
      h2: 'What does a data scientist actually do all day?',
      lede: 'Less modelling than people expect, and much more checking. A data science course that skips the checking produces people who can run a model and cannot tell when its answer is nonsense.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ask', p: 'Turn a vague request, "are frosts getting worse?", into a question the data could answer: which months, which hours, which threshold, compared with what.' },
          { h3: 'Inspect', p: 'Open the file and look before computing. Blanks, units, duplicates, a column whose meaning changed halfway through. This step takes the longest and is taught the least.' },
          { h3: 'Analyse', p: 'Summaries, charts, statistical tests and, where they earn their place, models. Each result written in a sentence a manager could repeat without misquoting it.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we teach, in order',
          left: [
            'Python as a language first, so learners can write their own checks instead of hunting for a library function. Then pandas for tables, charts with matplotlib, descriptive statistics, probability, sampling and hypothesis tests, and finally machine learning with scikit-learn and an introduction to deep learning.',
            'Running through all of it is the habit this page\'s lesson is about: looking at the data from more than one side before believing a number.'
          ],
          rightH3: 'The maths behind it',
          right: [
            'Data science needs school algebra, comfort with percentages and averages, and then statistics and some linear algebra taught as needed. Peruvian school maths already includes a competency on managing data and uncertainty, "gestión de datos e incertidumbre", in MINEDU\'s national curriculum, so many learners have met the ideas without the code.',
            'If your maths is rusty, we have a separate course on the mathematics of data science, listed further down the page.'
          ] },
        { kind: 'p', mt: true, html: 'Our Spanish page, <a class="ag-inline-link" href="/curso-de-data-science-en-ingles-peru">curso de data science en inglés</a>, starts from the spreadsheet, uses a university enrolment dataset from Huánuco and teaches how a fake zero distorts an average. Here we take a weather dataset and a different trap.' }
      ]
    },
    {
      id: 'opendata',
      tint: 'tint',
      eyebrow: 'Peruvian data',
      h2: 'Where can you find open data about Peru?',
      lede: 'On the Plataforma Nacional de Datos Abiertos, datosabiertos.gob.pe, where ministries, regional governments, municipalities, universities and institutes publish datasets, most of them under an open licence. Our lesson uses one from the Instituto Geofísico del Perú.',
      body: [
        { kind: 'table', numCols: [], caption: 'The dataset used in this page\'s analysis, as its publisher describes it', head: ['Field', 'What the dataset page says'], rows: [
          ['Publisher', 'Instituto Geofísico del Perú (IGP)'],
          ['Station', 'Automatic weather station at the Huancayo Observatory, Huayao, Junín'],
          ['Position', '12.0401 south, 75.32049 west, 3,329 metres above sea level'],
          ['Frequency', 'Hourly'],
          ['Period', '1 January 2018, 00:00, to 31 December 2025, 23:00'],
          ['Temperature (TT)', 'Air between 1.25 and 2 metres above the ground, in degrees Celsius'],
          ['Other columns', 'Humidity (%), rain (mm), pressure (hPa), wind speed (m/s) and direction (degrees)'],
          ['Released and modified', 'Released 30 May 2025; last modified 29 May 2026'],
          ['Licence', 'Open Data Commons Attribution License (ODC-By)']
        ] },
        { kind: 'source', html: 'Source: Plataforma Nacional de Datos Abiertos, dataset "Estación Meteorológica Automática para variables atmosféricas de LAMAR, Junín, Perú" by the IGP, read and downloaded on 9 November 2026. The file has 70,128 rows of data, one for every hour of the eight years; counts are ours.' },
        { kind: 'two', mt: true,
          leftH3: 'What ODC-By asks of you',
          left: [
            'The Open Data Commons Attribution License lets anyone copy, analyse and publish work built on the data, provided the source is credited. That is why every chart in our lesson names the IGP and the licence, and why our learners are taught to write the credit line before the first chart, not after.',
            'Not every Peruvian dataset uses the same licence, so checking it is the first step of any project, alongside reading the data dictionary.'
          ],
          rightH3: 'Why this station',
          right: [
            'The observatory sits in the Mantaro valley, outside the city of Huancayo, which had 456,250 people at the 2017 census, in the department of Junín, counted at 1,422,780 in the 2025 census. Cold mornings in the dry months are part of life in the valley.',
            'An hourly temperature record is also a perfect teaching file: easy to understand, big enough to need code, and, as we found, complicated in a way nobody warns you about.'
          ] }
      ]
    },
    {
      id: 'frost',
      eyebrow: 'A real analysis',
      h2: 'Did frost really arrive in the Mantaro valley in 2021?',
      lede: 'A simple question for the IGP file: how many nights a year did the temperature drop below zero? The first answer is dramatic. The second program shows why a data scientist should not publish it.',
      body: [
        { kind: 'two',
          leftH3: 'Version 1: count frost nights',
          left: [
            'For every day, the program finds the lowest hourly temperature, then counts the days whose lowest reading is below 0 °C, year by year. Blank readings are skipped, which is the right thing to do with a blank.',
            'The output shows no frost at all in 2018, 2019 and 2020, then between 26 and 48 frost nights in every year from 2021. Read naively, frost appeared out of nowhere.'
          ],
          rightH3: 'Why a careful analyst stops here',
          right: [
            'Weather does not usually switch on like that. A station at more than 3,300 metres with no sub-zero hour in three whole years, followed by dozens of frost nights every year after, is a pattern that deserves suspicion before it deserves a headline.',
            'So the mentor asks the class one question: if the cold had truly changed, what else in the data would have changed with it?'
          ] },
        { kind: 'code', label: 'Version 1: frost nights per year', lang: 'Python', code: V1, note: 'Run from the folder holding the downloaded file, it prints <code>2018 frost nights: 0</code>, <code>2019 frost nights: 0</code>, <code>2020 frost nights: 0</code>, then <code>2021 frost nights: 29</code>, <code>2022 frost nights: 40</code>, <code>2023 frost nights: 48</code>, <code>2024 frost nights: 26</code> and <code>2025 frost nights: 29</code>.' },
        { kind: 'p', mt: true, html: 'If winters really got colder, the number of cold hours would rise too, not only the hours below zero. Version 2 counts, for June and July of each year, every hour under 3 °C, and how many of those were under 0 °C. It also finds the first sub-zero reading in the whole file and counts the blanks.' },
        { kind: 'code', label: 'Version 2: look at the whole cold end, not just below zero', lang: 'Python', code: V2, note: 'It prints <code>blank TT readings: 700</code> and <code>first reading below 0: (\'2021\', \'5\', \'27\', \'4\')</code>, then one line per year, from <code>2018 hours under 3 C: 243 of which under 0 C: 0</code> to <code>2025 hours under 3 C: 276 of which under 0 C: 126</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'June and July hours under 3 °C, and those under 0 °C, IGP Huayao station (our counts)', head: ['Year', 'Hours under 3 °C', 'Of which under 0 °C'], rows: [
          ['2018', '243', '0'],
          ['2019', '270', '0'],
          ['2020', '222', '0'],
          ['2021', '226', '75'],
          ['2022', '306', '121'],
          ['2023', '349', '150'],
          ['2024', '259', '100'],
          ['2025', '276', '126']
        ] },
        { kind: 'source', html: 'Data: Instituto Geofísico del Perú, Estación Meteorológica Automática, Huancayo Observatory, Huayao, via the Plataforma Nacional de Datos Abiertos, Open Data Commons Attribution License (ODC-By). Counts are our own, computed on 9 November 2026 with the programs above.' },
        { kind: 'p', mt: true, html: 'The cold hours do not jump in 2021. They wander between 222 and 349 a season across all eight years. What jumps is the share of them below zero: none for three years, then a large share every year. In the earlier years, the coldest July reading never went lower than about 0.2 °C, and the first negative value in the whole file appears on 27 May 2021. That pattern fits a change in how temperatures were recorded or processed at least as well as it fits a change in the weather.' },
        { kind: 'p', html: 'We have not asked the IGP, and this page does not claim to know the cause. That is the point of the lesson. The honest report says: "In this file, sub-zero readings begin in May 2021; the number of cold hours did not change in the same way; before comparing frost across that date, confirm with the publisher whether the sensor or processing changed." A data scientist who writes that sentence has done more useful work than one who fits a trend line to the first output.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Look at the shape.</strong> Plot a histogram of July temperatures for 2019 and for 2022 on the same axes. Where do the two shapes differ?',
          '<strong>Test one idea.</strong> If negative values had lost their minus sign before 2021, what would you expect to see between 0 and 3 °C in 2018 to 2020? Does the table above agree?',
          '<strong>Report the blanks.</strong> 700 hourly readings are blank. Which months do they fall in, and could they affect any count on this page?',
          '<strong>Write to the publisher.</strong> Draft a short, polite email to a data provider asking about a suspected change, with the evidence in three lines.'
        ] }
      ]
    },
    {
      id: 'route',
      eyebrow: 'A route of our own',
      h2: 'How long does it take to learn data science?',
      lede: 'For a beginner with school maths, about a year to work confidently on real data with a mentor\'s review. Here is the route we usually suggest.',
      body: [
        { kind: 'table', numCols: [], caption: 'A suggested data science route (our plan)', head: ['Stage', 'Focus', 'Evidence at the end'], rows: [
          ['First', 'Python as a language', 'Small programs that read a CSV file without pandas, like the ones above'],
          ['Second', 'pandas and charts', 'A cleaned dataset and five charts, each with a one-sentence finding'],
          ['Third', 'Statistics and probability', 'A comparison with a stated uncertainty, not just two averages'],
          ['Fourth', 'Machine learning', 'A model, its baseline and an honest test on unseen data'],
          ['Final', 'A capstone on open data', 'A report a non-specialist can read, with sources and licence']
        ] },
        { kind: 'source', html: 'Our plan, adjusted to each learner. Our main adult course runs 10 to 12 months from zero; the teen course is six months for learners who already know basic Python. We make no job or salary promises.' },
        { kind: 'two', mt: true,
          leftH3: 'For teenagers',
          left: [
            'Teenagers from 14 who already write basic Python can take the teen data science course: real datasets, charts and first models. Younger learners or those new to code start with Python first.',
            'For a teenager or adult who has never coded, the <a class="ag-inline-link" href="/curso-de-python-en-ingles-peru">Python course page, in Spanish</a>, explains how Python starts from zero.'
          ],
          rightH3: 'For engineering and science students',
          right: [
            'University students in Peru often meet data in lab courses and numerical methods before they meet it in a data science course. If that is you, our page on <a class="ag-inline-link" href="/python-para-estudiantes-de-ingenieria-peru">Python for engineering students</a> covers that path.',
            'From there, the step to data science is mostly statistics and judgement, which is where we spend the most class time.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Language of the classes',
      h2: 'Are the classes in Spanish?',
      lede: 'No. All our classes are live, online and given in English, by mentors based in India who match their pace to the learner.',
      body: [
        { kind: 'two',
          leftH3: 'Learning data science in English',
          left: [
            'Mentors speak calmly, define each new term the first time it appears and check understanding before moving on. A learner who is unsure can ask again, in any words they have, and the explanation changes shape until it lands.',
            'The libraries are English: pandas, NumPy, scikit-learn and their documentation, error messages and forums. So are most research papers and data dictionaries outside Peru.'
          ],
          rightH3: 'English in Peru, measured',
          right: [
            'EF\'s English Proficiency Index 2025 scores Huancayo at 499, in EF\'s low band, and Lima at 555, in its high band. The gap between cities is real.',
            'That is why the free first class matters: the mentor checks whether English-taught data science will be comfortable for you now, or whether you would gain more by starting with our shorter courses first.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are classes in Peru time?',
      lede: 'Whenever you book them. Peru and India keep fixed clocks, so a weekly slot never moves.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time with the matching India time (illustrations, not a schedule)', head: ['Peru time', 'India time', 'Suits'], rows: [
          ['05:30', '16:00', 'Early risers'],
          ['10:30', '21:00', 'Students free in the morning'],
          ['17:30', '04:00, next day', 'After university'],
          ['21:00', '07:30, next day', 'After a full working day']
        ] },
        { kind: 'source', html: 'America/Lima stays at UTC minus 5 and has had no summer time since 1994 (tz database); Asia/Kolkata stays at UTC plus 5:30. India is 10 hours 30 minutes ahead throughout the year.' },
        { kind: 'p', mt: true, html: 'You pick in your own time zone when you book, and the mentor sees the converted time. Huancayo, Lima and the rest of Peru share one time zone, so the same slot works wherever you are in the country.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How do you know you are thinking like a data scientist?',
    lede: 'Our own milestones. The mentor checks each with work you explain, not with a quiz.',
    table: { caption: 'Data science milestones (ours)', head: ['Milestone', 'You can', 'The mentor checks'], rows: [
      ['1. Read', 'Open an unknown file and describe its columns, units and gaps', 'A short data note before any analysis'],
      ['2. Count', 'Write correct counts and summaries in plain Python', 'Numbers that match a second method'],
      ['3. Doubt', 'Spot a result that is too clean or too sudden', 'A list of checks run before reporting'],
      ['4. Compare', 'State a difference with its uncertainty', 'A confidence interval or a test, explained'],
      ['5. Model', 'Fit a model and beat a simple baseline honestly', 'Results on data the model never saw'],
      ['6. Report', 'Write findings that survive a sceptical reader', 'A two-page report with sources and licence']
    ] },
    left: { h3: 'For learners', ps: [
      'Milestone 3 is the Huancayo lesson. It is the one that separates analysts people trust from analysts people double-check.',
      'If your result is surprising, the first suspect is the data, the second is your code, and only the third is the world.'
    ] },
    right: { h3: 'For employers', ps: [
      'Every milestone leaves a notebook or report in the learner\'s portfolio, with data sources credited.',
      'Our certificate of completion is our own; it is not a Peruvian university degree.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for working with data',
    lede: 'Foundations and maths for adults, routes for teenagers, and practical options for professionals. All live and in English.',
    bands: [
      { num: 'I', h3: 'Foundations and maths', sub: '18 and over', courses: [
        { code: 'PE / DS / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Python from zero before any data library.' },
        { code: 'PE / DS / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Six months, no programming needed.' },
        { code: 'PE / DS / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'Statistics, linear algebra and the maths of ML.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'PE / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The way in before the teen data science course.' },
        { code: 'PE / TEEN / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange data mining for teens', blurb: 'Machine learning ideas without code, 24 classes.' },
        { code: 'PE / TEEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teens', blurb: 'From school maths to working models.' }
      ] },
      { num: 'III', h3: 'Professionals', sub: 'Working adults', courses: [
        { code: 'PE / PRO / 01', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'Excel, Sheets and Power BI, four months.' },
        { code: 'PE / PRO / 02', slug: 'orange-data-mining-machine-learning-course-for-college-students', title: 'Orange data mining', blurb: 'Applied machine learning, visually, in 24 classes.' },
        { code: 'PE / PRO / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI automation', blurb: 'Automate the reports you build by hand.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live data science classes run',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning', l: 'A Peru morning is the Indian evening, an easy hour to think about data.' },
      { time: 'Night', l: 'Late Peru evenings are Indian mornings, and our mentors take those classes too.' },
      { time: '1-on-1', l: 'Your own pace, data and slot, with one mentor.' }
    ],
    cells: [
      { h3: 'Real files', p: 'Open datasets with real gaps, never toy tables only.' },
      { h3: 'You write the code', p: 'The mentor questions; you type and explain.' },
      { h3: 'One mentor', p: 'Who knows your projects and your blind spots.' },
      { h3: 'English, explained', p: 'New terms defined, ideas repeated until clear.' },
      { h3: 'Credit the source', p: 'Every chart names its data and licence.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one to one.' }
    ]
  },

  projectsH2: 'Analyses and tools our learners have built',
  projectsLede: 'A few appear here; the <a class="ag-inline-link" href="/student-labs">student labs</a> hold more.',
  reviewsLede: 'Google reviews by learners and parents, as they wrote them.',

  fees: {
    h2: 'Fees for the data science course',
    lede: 'Pay one month at a time. The fee is in US dollars and your card is charged in dollars; the switch to soles happens at your bank, at the bank\'s rate, so the statement can differ slightly from the price.',
    free: ['A free first class', 'A short look at a real dataset with the mentor', 'No card needed'],
    group: ['Fifteen to twenty learners at a similar level', 'One mentor throughout', 'Two live classes a week', 'Monthly, stop any time'],
    one: ['One learner, one mentor', 'Your own data or field', 'Days and times you choose']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'Data science course in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our data science classes are given live, online and only in English. Mentors in India define each term, keep a calm pace and adapt to how you speak; pandas, scikit-learn and their documentation are English too.' },
      { q: 'Can I learn data science from zero?', a: 'Yes. The adult course starts with Python itself, assuming no programming. Some school maths helps; statistics is taught inside the course.' },
      { q: 'Is there a data science course for teenagers in Peru?', a: 'Yes, for ages 14 to 18 who already know basic Python, over six months. Teens who are new to code start with our Python course for teens first.' },
      { q: 'Do you use Peruvian data?', a: 'Yes, alongside international datasets. This page\'s lesson uses the Instituto Geofísico del Perú\'s hourly weather data from Huayao, published on datosabiertos.gob.pe under the ODC-By licence.' },
      { q: 'What does the ODC-By licence require?', a: 'That you credit the source when you share work built on the data. We teach learners to name the publisher, the dataset and the licence under every chart.' },
      { q: 'How much maths do I need?', a: 'School algebra, percentages and averages to begin. Statistics, probability and the linear algebra used in machine learning are taught as the course needs them.' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India runs 10 hours 30 minutes ahead of Peru, so a 21:00 class in Peru is 07:30 the next morning for the mentor.' },
      { q: 'How long does it take?', a: 'Our full adult course runs 10 to 12 months from zero; the teen course is six months. Progress depends on practice between classes, and we promise no job.' },
      { q: 'How much does it cost?', a: 'The fee section shows the monthly price in US dollars, which is what your card pays; your bank turns it into soles. Visitors in India see rupees. The first class is free and asks for no card.' },
      { q: 'Will I get a certificate?', a: 'Yes, our own certificate of completion after the final exam. It is not a Peruvian university qualification; your analyses and reports are the stronger evidence.' },
      { q: 'Are you connected with the IGP?', a: 'No. We use the IGP\'s published open data under its licence and credit it; we have no connection with the IGP or any public body, and our conclusions are our own.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for learners in Peru who work with data.',
    items: [
      { href: '/curso-de-data-science-en-ingles-peru', label: 'Data science en inglés', p: 'The Spanish page, with UNHEVAL enrolment data and a lesson on fake zeros.' },
      { href: '/curso-de-python-en-ingles-peru', label: 'Curso de Python en inglés', p: 'Python from zero, explained in Spanish.' },
      { href: '/python-para-estudiantes-de-ingenieria-peru', label: 'Python para ingeniería', p: 'Numerical methods and lab data for engineering students.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our full list of Peru pages.' },
      { href: '/data-science-course', label: 'Data science course', p: 'The course overview for every country.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class looks like.' }
    ]
  },

  start: {
    h2: 'Book a free data science class',
    lede: 'In the free class you open a real dataset with the mentor and talk about what you want to analyse. The mentor sees how you reason about numbers and how easily the English comes, then suggests a course.',
    readFirst: 'Before booking, you can read <a class="ag-inline-link" href="/how-we-teach">how a class works</a> or look at <a class="ag-inline-link" href="/courses">all course syllabuses</a>.',
    note: 'Live online classes, taught only in English by mentors in India. WhatsApp, in English, is the quickest route to us.',
    formNote: 'Free, with no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/curso-de-data-science-en-ingles-peru', label: 'Data science, in Spanish' },
        { href: '/curso-de-python-en-ingles-peru', label: 'Python, in Spanish' },
        { href: '/python-para-estudiantes-de-ingenieria-peru', label: 'Engineering students' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/data-science-course', label: 'Data science course' },
        { href: '/python-for-data-science', label: 'Python for data science' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Suspect the data before the weather'
  },

  personalityCss: `
.ag-root.ag-das .ag-hero h1 { letter-spacing: -0.015em; max-width: 18ch; }
.ag-root.ag-das .ag-capsule { border-left-width: 5px; border-radius: 1px; }
.ag-root.ag-das .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-das .ag-table td.ag-num { font-variant-numeric: tabular-nums; }
.ag-root.ag-das .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Instituto Geofísico del Perú, Estación Meteorológica Automática (Huancayo Observatory, Huayao), Plataforma Nacional de Datos Abiertos, ODC-By; INEI Censos Nacionales 2025 and 2017 (places.tsv); EF EPI 2025; MINEDU CNEB; tz database America/Lima.',
    localProject: 'Did frost really arrive in the Mantaro valley in 2021? An original Python analysis of the IGP hourly file (ODC-By, 2018 to 2025): Version 1 counts frost nights (0, 0, 0, then 26 to 48 a year); Version 2 counts June and July hours under 3 °C (222 to 349 in every year) and finds the first sub-zero reading on 27 May 2021, so the jump looks like a recording change as much as a weather change. Lesson family: a step change in a series.',
    requiredMentions: ['IGP_EstacionEMA_data_2018_2025.csv', '2020 frost nights: 0', '2023 frost nights: 48', 'blank TT readings: 700', '2018 hours under 3 C: 243 of which under 0 C: 0', '12.0401 south, 75.32049 west', '456,250', 'Suspect the data before the weather', 'scores Huancayo at 499'],
    sources: [
      { claim: 'IGP hourly weather dataset from Huayao, its metadata and ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/estaci%C3%B3n-meteorol%C3%B3gica-autom%C3%A1tica-para-variables-atmosf%C3%A9ricas-de-lamar-jun%C3%ADn-per%C3%BA-instituto' },
      { claim: 'The CSV file analysed.', url: 'https://www.datosabiertos.gob.pe/sites/default/files/IGP_EstacionEMA_data_2018_2025.csv' },
      { claim: 'Junín department population, Censos Nacionales 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Huancayo city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'EF EPI 2025: Huancayo 499, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'CNEB maths competency on data and uncertainty.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' }
    ],
    rejectedClaims: [
      'The cause of the 2021 step change (sensor, processing or climate): not known; the page says we have not asked the IGP and claims neither.',
      'Any frost trend for the Mantaro valley: not claimed; the data shown cannot support one across the change.',
      'The time zone of the hour column: not stated by the dataset page, so hours are printed as numbers only.',
      'Data scientist salaries or job counts in Peru: no primary source verified.',
      'Spanish-language teaching: every class is in English, and the page says so.',
      'Any connection with the IGP: none.'
    ]
  }
};
