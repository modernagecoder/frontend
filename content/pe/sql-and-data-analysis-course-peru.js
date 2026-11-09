// SHIP: market (en subject door) | SQL and data analysis for Peru, on Chiclayo's waste-collection open data (ODC-By) | GROUP BY with HAVING finds a key that should be unique; cross-check two columns that must agree
'use strict';
// SQL and data analysis course, Peru (ag- English subject door, Peru cluster row PE018, hubGroup subjects, code sda, #0C665A).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Fees render in USD from the template only; no soles, no typed figure. British spelling.
// Audience: adults and university students in Peru (18+) who analyse data for work, with a teen SQL course from 13. No
// Spanish twin on this subject; the nearest live Spanish page is /curso-de-data-science-en-ingles-peru (UNHEVAL data,
// sentinel values) and /cursos-de-programacion-para-adultos-peru (group-by with dirty keys in Python). This page takes a
// different dataset and lesson: Chiclayo's daily waste-collection register (Municipalidad Provincial de Chiclayo, ODC-By),
// queried with SQL through Python's sqlite3, where a month of rows carries the wrong dates.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/sql-and-data-analysis-course-peru/data/,
// fetched 9 November 2026 with curl -sL -A "Mozilla/5.0"):
//  - Dataset page (dataset_page.html/.txt), "Registro de recolección de residuos sólidos en el distrito de Chiclayo -
//    [Municipalidad Provincial de Chiclayo - MPCH]", https://www.datosabiertos.gob.pe/dataset/registro-de-recolecci%C3%B3n-de-residuos-s%C3%B3lidos-en-el-distrito-de-chiclayo-municipalidad:
//    "Licencia Open Data Commons Attribution License"; "a cargo de la Sub-Gerencia de Residuos Sólidos de Municipalidad
//    Provincial de Chiclayo, correspondiente a los periodos 2023 hasta abril de 2026"; "registra el peso de los residuos
//    sólidos en toneladas relacionados con turno de recolección por día"; responsible person "anonimizado"; "La frecu encia
//    de actualización de la data es MENSUAL" (sic, broken word in source); "Fecha de lanzamiento 2026-03-08"; "Fecha
//    modificada 2026-05-09".
//  - File "Dataset Registro recolección de residuos solidos - ABRIL 2026_0.csv", saved as residuos_chiclayo_abril2026.csv,
//    620,934 bytes, sha256 0ca0c939...5e204f176, Latin-1, 3,648 rows; columns FECHA_CORTE, DEPARTAMENTO, "PROVINCIA " (with a
//    trailing space), DISTRITO, UBIGEO, GOB_LOCAL, ANIO, MES, SEMANA, DIA, FECHA_REGISTRO, TURNO, RESPONSABLE, PESO, UNIDAD;
//    TURNO 1, 2 and 3 with 1,216 rows each; dates 1 January 2023 to 30 April 2026.
//  - INEI (facts-geo/places.tsv): Lambayeque department 1,404,633 (Censos Nacionales 2025, reference day 15 September
//    2025); Chiclayo city 552,508 (Censos Nacionales 2017, census day 22 October 2017). Never summed.
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): Chiclayo 474 ("proficiencySlug":"low"); Lima 555 high.
//  - Time (facts-geo/timezone.tsv): America/Lima UTC-5 all year; India UTC+5:30; 10 h 30 min.
// Our own analysis (scratchpad pe/e3/code/sda_v1.py and sda_v2.py; python3 -I; SQLite 3.50.4 via Python's sqlite3), exact
// output:
//    v1: 202409 | 90 | 6368.6 / 202410 | 183 | 13921.5 / 202412 | 93 | 6924.9
//    v2: 20250630 | 90 / 20241030 | 6 / 20241029 | 6 ; 202411 | 202410 | 90 ; 20241001 | VIERNES | 2 ;
//        202409 | 90 | 6368.6 / 202410 | 93 | 7342.9 / 202411 | 90 | 6578.6 / 202412 | 93 | 6924.9
//    Also checked: 59 calendar days have no row (1 to 30 November 2024; 1 to 29 June 2025); every June 2025 row is dated
//    20250630 while its DIA column runs DOMINGO, LUNES ... in order (1 June 2025 was a Sunday); 23 shifts weigh 0; UNIDAD
//    "TONELADAS" 3,558 times and "TONELADAS " with a trailing space 90 times; DIA spelt MIERCOLES and MIÉRCOLES.
// Lesson family: GROUP BY ... HAVING to find a key (date and shift) that should be unique and is not; cross-checking two
//    columns that must agree (month column vs date, weekday name vs strftime('%w')); totals grouped by the trustworthy key.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const LOAD = [
  'import csv, sqlite3',
  '',
  'FILE = "residuos_chiclayo_abril2026.csv"',
  '',
  'db = sqlite3.connect(":memory:")',
  'db.execute("CREATE TABLE r (fecha TEXT, mes TEXT, dia TEXT, turno TEXT, peso REAL)")',
  'with open(FILE, encoding="latin-1") as f:',
  '    for row in csv.DictReader(f):',
  '        db.execute("INSERT INTO r VALUES (?, ?, ?, ?, ?)",',
  '                   (row["FECHA_REGISTRO"], row["MES"], row["DIA"].strip(),',
  '                    row["TURNO"], float(row["PESO"])))',
  '',
  'def show(sql):',
  '    for row in db.execute(sql):',
  '        print(*row, sep=" | ")',
  '    print()'
].join('\n');

const Q1 = [
  'show("""',
  'SELECT substr(fecha, 1, 6) AS month, COUNT(*) AS shifts, ROUND(SUM(peso), 1) AS tonnes',
  'FROM r',
  'WHERE fecha BETWEEN \'20240901\' AND \'20241231\'',
  'GROUP BY month',
  '""")'
].join('\n');

const Q2 = [
  'show("""',
  'SELECT fecha, COUNT(*) AS rows_that_day',
  'FROM r',
  'GROUP BY fecha',
  'HAVING COUNT(*) <> 3',
  'ORDER BY rows_that_day DESC',
  'LIMIT 3',
  '""")',
  '',
  'show("""',
  'SELECT mes, substr(fecha, 1, 6) AS month_in_date, COUNT(*)',
  'FROM r',
  'WHERE mes <> substr(fecha, 1, 6)',
  'GROUP BY mes, month_in_date',
  '""")',
  '',
  'show("""',
  'SELECT fecha, dia,',
  '       strftime(\'%w\', substr(fecha,1,4) || \'-\' || substr(fecha,5,2) || \'-\' || substr(fecha,7,2)) AS weekday_of_date',
  'FROM r',
  'WHERE mes = \'202411\'',
  'LIMIT 1',
  '""")',
  '',
  'show("""',
  'SELECT mes, COUNT(*) AS shifts, ROUND(SUM(peso), 1) AS tonnes',
  'FROM r',
  'WHERE mes BETWEEN \'202409\' AND \'202412\'',
  'GROUP BY mes',
  '""")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'SQL and data analysis' },
  slug: 'sql-and-data-analysis-course-peru',
  code: 'sda',
  accent: '#0C665A',
  accentRationale: 'SQL and data analysis in Peru: a sea green #0C665A allocated to this row, close to the colour of a spreadsheet header but deeper, so it reads as data without looking like a tool brand; above 4.5:1 on #FBF8F2, #F5F1E8 and #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'SQL and data analysis course, Peru',
  title: 'SQL and Data Analysis Course in Peru: Live Online, in English',
  description: 'SQL and data analysis course for Peru, live online in English: queries, joins and checks on real Peruvian open data, for analysts and students, at any hour.',
  ogDescription: 'Learn SQL and data analysis from Peru with a live mentor, in English, at hours that suit you: what SQL adds to a spreadsheet, which course fits an analyst or a developer, and a worked SQL investigation of Chiclayo\'s waste-collection data in which one month carries another month\'s dates.',
  twitterDescription: 'SQL and data analysis from Peru, live online in English, with a real SQL investigation of Chiclayo open data.',
  pageName: 'SQL and Data Analysis Course in Peru',
  webPageDescription: 'A guide for adults, university students and analysts in Peru who want to learn SQL and data analysis live online in English, with an original SQL analysis, run through Python\'s sqlite3, of the Municipalidad Provincial de Chiclayo\'s waste-collection register (ODC-By), plus INEI and EF EPI context.',
  courseDescription: 'Live online SQL and data analysis courses in English for learners in Peru: SQL from the first query to joins and window functions, spreadsheets, Python and dashboards, for adults from 18 and for teenagers from 13, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'SQL and data analysis',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#why', label: 'Why SQL' },
    { href: '#chiclayo', label: 'Chiclayo data' },
    { href: '#query', label: 'SQL lesson' },
    { href: '#which', label: 'Which course' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Peru &middot; SQL and data analysis &middot; Live online, in English',
  h1: 'SQL and data analysis course in Peru',
  lede: 'SQL is the language in which most organisations ask questions of their data, and the one analysts are expected to know before Python. This page explains what a course should teach, which of ours suits an analyst or a developer, and works through a real investigation of Chiclayo\'s open waste-collection data, where a simple monthly total hides a month that never happened twice.',
  secondaryCta: { href: '#query', label: 'See the SQL lesson' },
  wa: 'Hello Modern Age Coders, I am in Peru and would like to learn SQL and data analysis, live online in English. Could I book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ learners worldwide &middot; real tables from the first week',
  spec: [
    ['For', 'Analysts, students and adults from 18; teens from 13'],
    ['You learn', 'SQL, spreadsheets, Python and dashboards'],
    ['Data', 'Real open data, including Peruvian registers'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Peru time', 'Any day, the hour you choose'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'The short answer',
  capsule: 'At Modern Age Coders, SQL and data analysis for learners in Peru is taught live, online and in English. Adults and university students go from a first SELECT to joins, grouping, window functions and checks on data quality, then add spreadsheets, Python and dashboards; teenagers from 13 have their own SQL course. We practise on real open data, including Peruvian municipal registers, and teach people to question a total before reporting it. A mentor leads every class on video, in a class of fifteen to twenty or one to one, at the day and hour you choose.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three SQL and data analysis courses',
    lede: 'One for analysts, one for people who build databases, and one for teenagers. Each starts from zero.',
    items: [
      { course: 'data-analysis-mastery-course-college', code: 'PE / SQL / 01', title: 'Data analysis: Excel, SQL, Python and BI', note: 'The analyst\'s route, over 8 to 10 months for anyone 18 or older starting from nothing: spreadsheets, SQL, Python and dashboards, always on real data.' },
      { course: 'mysql-database-complete-masterclass-college', code: 'PE / SQL / 02', title: 'MySQL: SQL and database design', note: 'For beginners from 18, 7 to 8 months. Queries, then design and administration: the course for people who will build and run databases.' },
      { course: 'mysql-mastery-for-teens', code: 'PE / SQL / 03', title: 'MySQL for teens', note: 'Ages 13 to 18, 5 to 6 months, from a first query to the data behind real apps.' }
    ]
  },

  sections: [
    {
      id: 'why',
      eyebrow: 'Why SQL',
      h2: 'Why learn SQL if you already use Excel?',
      lede: 'Because a spreadsheet shows you the data and SQL asks it questions. Once a table is too large to scroll, shared by several people or stored in a company system, SQL is how you reach it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Questions you can repeat', p: 'A query is a written question. Run it again next month on new data and you get the new answer, with no hand-copied formulas to drift out of step.' },
          { h3: 'Data where it lives', p: 'Sales systems, school registers, hospital stock, municipal records: most are databases. SQL reads them directly instead of waiting for someone to export a file.' },
          { h3: 'Checks you can show', p: 'A query that finds duplicates or contradictions is evidence another analyst can rerun. That is the heart of the lesson further down this page.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the course teaches',
          left: [
            'SELECT, WHERE and ORDER BY; aggregates with GROUP BY and HAVING; joins between tables; subqueries and common table expressions; window functions for running totals and rankings; and the design of tables, keys and indexes.',
            'Alongside the syntax, a set of habits: count rows before and after every join, check that keys are unique, compare two columns that should agree, and never report a total that has not been checked another way.'
          ],
          rightH3: 'Where Python and dashboards come in',
          right: [
            'Our analysis course pairs SQL with Python for cleaning and charts, and with a business intelligence tool for dashboards. The lesson below runs SQL from Python on purpose: it is how many analysts work, and it needs nothing but Python, which already includes SQLite.',
            'Developers take the MySQL course instead, which goes deeper into database design, transactions and administration.'
          ] }
      ]
    },
    {
      id: 'chiclayo',
      tint: 'tint',
      eyebrow: 'Peruvian open data',
      h2: 'What does Chiclayo publish about its rubbish collection?',
      lede: 'The Municipalidad Provincial de Chiclayo publishes the tonnes of solid waste collected in the district of Chiclayo, shift by shift and day by day, on Peru\'s Plataforma Nacional de Datos Abiertos. It is a small, honest-looking table, and an ideal first SQL dataset.',
      body: [
        { kind: 'table', numCols: [], caption: 'The Chiclayo waste-collection register in its publisher\'s own description', head: ['Item', 'Description on datosabiertos.gob.pe'], rows: [
          ['Publisher', 'Municipalidad Provincial de Chiclayo, through its Sub-Gerencia de Residuos Sólidos'],
          ['Content', 'Weight of solid waste collected, in tonnes, by collection shift and day'],
          ['Period', '2023 to April 2026'],
          ['Person who recorded the weight', 'Anonymised'],
          ['Update frequency', 'Monthly'],
          ['Released and modified', 'Released 8 March 2026; last modified 9 May 2026'],
          ['Licence', 'ODC-By, the Open Data Commons Attribution License']
        ] },
        { kind: 'source', html: 'Taken from the "Registro de recolección de residuos sólidos en el distrito de Chiclayo" page of the Municipalidad Provincial de Chiclayo on datosabiertos.gob.pe; page and file retrieved 9 November 2026. In the file we downloaded: 3,648 rows, three shifts, dates from 1 January 2023 to 30 April 2026; these counts are ours.' },
        { kind: 'two', mt: true,
          leftH3: 'Chiclayo in figures',
          left: [
            'Chiclayo city counted 552,508 people at the 2017 census, which made it one of the largest cities in Peru; INEI has not yet published city figures from the 2025 census. The department of Lambayeque, of which Chiclayo is the capital, counted 1,404,633 people in the 2025 census.',
            'The dataset covers only the district of Chiclayo, not the whole city or province, which is the kind of detail an analyst writes down before comparing it with anything else.'
          ],
          rightH3: 'First look, before any SQL',
          right: [
            'The file is in Latin-1, not UTF-8, so opening it the default way fails on the first accented letter. One column header, "PROVINCIA ", ends with a space. The weekday column spells Wednesday both MIERCOLES and MIÉRCOLES, and some unit values carry a trailing space.',
            'None of that is unusual. It is simply what real registers look like, and every one of those details would break a careless query. Learners write them into a short data note before going further.'
          ] }
      ]
    },
    {
      id: 'query',
      eyebrow: 'An SQL lesson',
      h2: 'Why did Chiclayo seem to collect twice as much rubbish in October 2024?',
      lede: 'It did not. But the first query any analyst would write says it did, and says nothing at all about November. Here is how SQL finds out why, in four short queries.',
      body: [
        { kind: 'code', label: 'Load the file into SQLite (Python standard library only)', lang: 'Python', code: LOAD, note: 'This keeps five columns: the date of the record, the month column, the weekday name, the shift and the weight in tonnes. <code>show()</code> prints each result row with <code>|</code> between the values.' },
        { kind: 'two', mt: true,
          leftH3: 'The obvious first question',
          left: [
            'A manager asks for tonnes collected per month at the end of 2024. The natural query takes the month from the date, groups by it and adds up the weight.',
            'Before reading the result, the mentor asks what each month should look like: about 90 or 93 shifts, three a day, and a total in the same range as its neighbours.'
          ],
          rightH3: 'What comes back',
          right: [
            'September has 90 shifts and December 93, as expected. October has 183 shifts and almost double the tonnes. November is not there at all.',
            'Many reports would print this table. A good analyst sees two alarms: a month with twice the expected rows, and a month with none.'
          ] },
        { kind: 'code', label: 'Query 1: monthly totals by the month in the date', lang: 'Python', code: Q1, note: 'It prints <code>202409 | 90 | 6368.6</code>, <code>202410 | 183 | 13921.5</code> and <code>202412 | 93 | 6924.9</code>. November 2024 is missing.' },
        { kind: 'p', mt: true, html: 'Every day should have exactly three rows, one per shift, so the date is a key that ought to be unique per shift. <code>GROUP BY</code> with <code>HAVING</code> finds the days that break the rule. Then two columns that must agree are compared: the file\'s own month column against the month inside the date, and the weekday name against the weekday SQLite computes from the date.' },
        { kind: 'code', label: 'Queries 2 to 5: find the clash, explain it, fix the total', lang: 'Python', code: Q2, note: 'It prints <code>20250630 | 90</code>, <code>20241030 | 6</code> and <code>20241029 | 6</code>; then <code>202411 | 202410 | 90</code>; then <code>20241001 | VIERNES | 2</code>; and finally <code>202409 | 90 | 6368.6</code>, <code>202410 | 93 | 7342.9</code>, <code>202411 | 90 | 6578.6</code> and <code>202412 | 93 | 6924.9</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Chiclayo, end of 2024: tonnes by the month in the date against tonnes by the month column (our queries)', head: ['Month', 'Shifts, grouped by date', 'Tonnes, grouped by date', 'Tonnes, grouped by month column'], rows: [
          ['September 2024', '90', '6,368.6', '6,368.6'],
          ['October 2024', '183', '13,921.5', '7,342.9'],
          ['November 2024', '0', 'none', '6,578.6'],
          ['December 2024', '93', '6,924.9', '6,924.9']
        ] },
        { kind: 'source', html: 'Credit: waste-collection register of the Municipalidad Provincial de Chiclayo, published on datosabiertos.gob.pe under ODC-By. We wrote and ran the queries, and computed the totals, on 9 November 2026 (Python 3, SQLite 3.50.4).' },
        { kind: 'p', mt: true, html: 'The story is now clear. The 90 rows whose month column says November 2024 carry October dates, 1 to 30 October. The weekday settles which column to trust: the first of those rows is dated 1 October 2024 but its weekday says VIERNES, Friday, while SQLite\'s <code>strftime(\'%w\')</code> returns 2, a Tuesday. 1 November 2024 was a Friday. So the month column and the weekday are right, and the date was typed with the wrong month. Grouped by the month column, every month has 90 or 93 shifts and a believable total.' },
        { kind: 'p', html: 'The first clash query found a second, stranger problem: 90 rows all dated 30 June 2025. Their weekday names run Sunday, Monday, Tuesday and so on in order, and 1 June 2025 was a Sunday, so the rows almost certainly cover the whole of June with one date pasted down the column. That one is left for the learner, below. Neither problem was visible in the dataset page, and neither needed anything more advanced than <code>GROUP BY</code>, <code>HAVING</code> and a comparison of two columns.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Rebuild June 2025.</strong> Assuming the rows are in date order, three per day, write a query or a short Python step that gives each one its real date. How would you check that your fix is right?',
          '<strong>Count the gaps.</strong> Use a table of every calendar date from 1 January 2023 to 30 April 2026 and a LEFT JOIN to list the days with no rows. Which months are they in?',
          '<strong>Clean the weekday.</strong> Make MIERCOLES and MIÉRCOLES the same value, then compare the average tonnes per shift on each weekday.',
          '<strong>Write the note.</strong> In five sentences, tell the municipality what you found, with the query that proves each point.'
        ] }
      ]
    },
    {
      id: 'which',
      eyebrow: 'Choosing a course',
      h2: 'Which SQL course should I take?',
      lede: 'Pick by what you will do with SQL most days. The table is our own advice.',
      body: [
        { kind: 'table', numCols: [], caption: 'Which of our SQL-related courses fits which goal (our advice)', head: ['If you mostly want to', 'Take', 'Length'], rows: [
          ['Analyse data and build reports', 'Data analysis: Excel, SQL, Python and BI', '8 to 10 months'],
          ['Design and run databases for applications', 'MySQL: SQL and database design', '7 to 8 months'],
          ['Start from spreadsheets, without programming', 'Data and AI analytics for non-programmers', '4 months'],
          ['Go on to statistics and machine learning', 'Data science course, after SQL', '10 to 12 months'],
          ['Learn SQL as a teenager', 'MySQL for teens, ages 13 to 18', '5 to 6 months']
        ] },
        { kind: 'source', html: 'Course lengths are from our own syllabuses. Our advice, not a ranking; the mentor confirms the choice at the free class.' },
        { kind: 'two', mt: true,
          leftH3: 'Analysts in Peruvian organisations',
          left: [
            'Many of our adult learners already prepare monthly reports by hand in spreadsheets. The analysis course moves the same work into SQL and Python so it runs again next month in seconds, with checks like the ones above built in.',
            'Our Spanish page for <a class="ag-inline-link" href="/cursos-de-programacion-para-adultos-peru">adults learning to code in Peru</a> describes how classes fit around a job.'
          ],
          rightH3: 'Students and future data scientists',
          right: [
            'University students in Peru meet SQL in database courses, often only as syntax. We add the analysis habits and the English vocabulary used in documentation and interviews.',
            'If statistics and models are the goal, SQL comes first and data science second. Our Spanish page, <a class="ag-inline-link" href="/curso-de-data-science-en-ingles-peru">data science en inglés</a>, explains that next step.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Language of the classes',
      h2: 'Are the classes in Spanish?',
      lede: 'No. We teach only in English, live and online, with mentors based in India who adapt to each learner\'s level.',
      body: [
        { kind: 'two',
          leftH3: 'SQL is already half English',
          left: [
            'SELECT, FROM, WHERE, GROUP BY, HAVING, JOIN: the language itself is made of English words, and so are the error messages and the documentation of every database. Learners who know a little English find that SQL reinforces it.',
            'Mentors keep their sentences short, explain each new keyword in plain words and repeat when asked. You may answer however you can; the query on the screen is what matters.'
          ],
          rightH3: 'English across Peru',
          right: [
            'Measured by EF\'s English Proficiency Index 2025, adults in Chiclayo average 474, which EF labels low; Lima averages 555, which it labels high.',
            'If your English is closer to the first figure, the free class will tell you honestly whether to start now or to take a gentler course first. Many learners find that working with SQL in English is the practice that moves them up.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'At what time are classes, from Peru?',
      lede: 'At the time you choose. Peru keeps one time zone across the country and does not change its clocks.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time and India time, examples only (no fixed slots)', head: ['Peru time', 'India time', 'Good for'], rows: [
          ['06:45', '17:15', 'Before the office'],
          ['12:00', '22:30', 'A lunch break'],
          ['19:30', '06:00, next day', 'After work'],
          ['20:30', '07:00, next day', 'Late learners']
        ] },
        { kind: 'source', html: 'The whole of Peru uses zone America/Lima, five hours behind UTC and without daylight saving since 1994; India uses UTC plus 5:30. That leaves a constant gap of ten and a half hours.' },
        { kind: 'p', mt: true, html: 'Chiclayo, Lima, Arequipa and Iquitos all share Peru time, so the slot you book works anywhere in the country. You choose in your own clock and the mentor sees the India time.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How do you know your SQL is good enough?',
    lede: 'Our milestones, each checked with a query you write and explain.',
    table: { caption: 'Six SQL milestones we use to place and track learners', head: ['Step', 'What you can do', 'How it is shown'], rows: [
      ['1. Select', 'Filter, sort and limit rows from one table', 'A query written from a spoken question'],
      ['2. Aggregate', 'Group, count and sum, and filter groups with HAVING', 'The duplicate-day query from the lesson'],
      ['3. Join', 'Combine tables without losing or doubling rows', 'Row counts before and after every join'],
      ['4. Check', 'Prove a key is unique and two columns agree', 'A short data-quality report'],
      ['5. Analyse', 'Use window functions and subqueries for real questions', 'Running totals and rankings, explained'],
      ['6. Report', 'Turn queries into a dashboard or report others trust', 'A report with sources, licence and checks']
    ] },
    left: { h3: 'For learners', ps: [
      'Milestone 4 is the lesson on this page. It is the one that makes colleagues trust your numbers.',
      'If a month has twice as many rows as its neighbours, the data is telling you something before the total is.'
    ] },
    right: { h3: 'For employers', ps: [
      'Each milestone leaves a query file and a short write-up the learner can show.',
      'Our certificate of completion is our own and is not a Peruvian university qualification.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses around data',
    lede: 'For analysts adding skills, for developers, and for teenagers. All live, all in English.',
    bands: [
      { num: 'I', h3: 'Analysts', sub: '18 and over', courses: [
        { code: 'PE / AN / 01', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Analytics without programming', blurb: 'Four months of spreadsheets and Power BI dashboards.' },
        { code: 'PE / AN / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The maths behind every report, without code.' },
        { code: 'PE / AN / 03', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Python, machine learning and deep learning after SQL.' }
      ] },
      { num: 'II', h3: 'Developers', sub: '18 and over', courses: [
        { code: 'PE / DEV / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Python from zero, the partner of SQL in analysis.' },
        { code: 'PE / DEV / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack development', blurb: 'Applications that read and write a database.' },
        { code: 'PE / DEV / 03', slug: 'python-ai-automation-masterclass-college', title: 'Automation with Python', blurb: 'Make the monthly report build itself, query to file.' }
      ] },
      { num: 'III', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'PE / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Programming from zero for secundaria students.' },
        { code: 'PE / TEEN / 02', slug: 'data-science-course-for-teens-python-data', title: 'Teen data science', blurb: 'For 14 to 18 year olds who know some Python.' },
        { code: 'PE / TEEN / 03', slug: 'backend-coding-masterclass-for-teens', title: 'Backend for teens', blurb: 'Node, APIs and databases, from zero.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live SQL classes run',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Daytime', l: 'Peru mornings and lunchtimes fall in the Indian evening, an easy fit.' },
      { time: 'After work', l: 'A Peru evening is an Indian early morning, and mentors teach then too.' },
      { time: '1-on-1', l: 'Your data, your questions, your hour.' }
    ],
    cells: [
      { h3: 'Write the query', p: 'You type it; the mentor asks what it will return first.' },
      { h3: 'Real tables', p: 'Open registers with real flaws, not perfect samples.' },
      { h3: 'One mentor', p: 'Who knows your work and your weak spots.' },
      { h3: 'Clear English', p: 'Short sentences, keywords explained, no rush.' },
      { h3: 'Check, then report', p: 'Every total is checked a second way.' },
      { h3: 'Class size', p: 'A group of fifteen to twenty, or a private class.' }
    ]
  },

  projectsH2: 'What our learners have built with data',
  projectsLede: 'A sample is below; the <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Learners and parents on Google, quoted exactly.',

  fees: {
    h2: 'Fees for the SQL and data analysis course',
    lede: 'One month at a time. We charge in US dollars, card only; soles appear only once your bank has converted the charge at its own rate, so allow for a small difference on the statement.',
    free: ['A free first class', 'A first query on a real table', 'No card asked'],
    group: ['Fifteen to twenty learners at a similar level', 'One mentor the whole way', 'Two live classes a week', 'Monthly, cancel any time'],
    one: ['You and one mentor', 'Your own data and questions', 'Days and times you choose']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'SQL and data analysis in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Classes are live, online and in English only. Mentors in India use short sentences, explain each keyword plainly and adapt to your pace and accent; SQL itself is written in English words.' },
      { q: 'Can I learn SQL from zero?', a: 'Yes. Both adult courses and the teen course start with a first SELECT. If you already use spreadsheets, you will recognise many ideas.' },
      { q: 'SQL or Python first for data analysis?', a: 'SQL first for most analysts, because it is how data is fetched from company systems; Python follows for cleaning, charts and automation. Our analysis course teaches both in that order.' },
      { q: 'Which database do you use?', a: 'MySQL in the database course, and SQLite in lessons like the one on this page because it comes with Python. The SQL you learn carries over to PostgreSQL, SQL Server and others with small differences.' },
      { q: 'Is the practice data Peruvian?', a: 'Partly. Lessons mix international datasets with Peruvian registers such as Chiclayo\'s waste-collection table, which the Municipalidad Provincial de Chiclayo publishes openly with attribution required (ODC-By).' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Our mentors are ten and a half hours ahead, so a 19:30 class in Peru starts at 06:00 the next morning in India.' },
      { q: 'How many months until I am good at SQL?', a: 'Basic queries take a few weeks. Being trusted with real reporting, joins and data checks takes months; our analysis course runs 8 to 10 months and the MySQL course 7 to 8.' },
      { q: 'Is there an SQL course for teenagers?', a: 'Yes, MySQL for teens, ages 13 to 18, over 5 to 6 months, taught in teen-only groups.' },
      { q: 'How much does it cost?', a: 'The monthly fee is listed in the fees section in US dollars, which is how your card is charged; your bank converts to soles. From India the page shows rupees. The first class is free, with no card.' },
      { q: 'Is there a certificate at the end?', a: 'Pass the final exam and we issue our own certificate of completion. No Peruvian university or state body is involved in it, so the queries and reports you can show matter more.' },
      { q: 'Are you connected with the Municipalidad de Chiclayo?', a: 'No. The register is open data that anyone may use with credit, which we give; the findings here are our own analysis, and we have no link with the municipality.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'Further reading on data, for Peru.',
    items: [
      { href: '/curso-de-data-science-en-ingles-peru', label: 'Data science en inglés', p: 'The next step after SQL, explained in Spanish.' },
      { href: '/cursos-de-programacion-para-adultos-peru', label: 'Programación para adultos', p: 'Learning to code beside a job in Peru.' },
      { href: '/cursos-de-programacion-para-universitarios-peru', label: 'Programación para universitarios', p: 'Courses alongside a Peruvian degree.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru page in one index.' },
      { href: '/data-analytics-course', label: 'Data analytics course', p: 'Our analytics course, described in full.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class, from start to end.' }
    ]
  },

  start: {
    h2: 'Book a free SQL class',
    lede: 'In the free class you write a first query on a real table with the mentor and talk about the data you work with. The mentor sees how you think about tables and how the English feels, then suggests a course.',
    readFirst: 'Reading first is fine: see <a class="ag-inline-link" href="/how-we-teach">what happens in a class</a>, or open <a class="ag-inline-link" href="/courses">any course syllabus</a>.',
    note: 'Classes are live and online, in English only, with mentors in India. For a quick answer, message us on WhatsApp in English.',
    formNote: 'Free, with nothing to cancel.'
  },

  footer: {
    cols: [
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/curso-de-data-science-en-ingles-peru', label: 'Data science, in Spanish' },
        { href: '/cursos-de-programacion-para-adultos-peru', label: 'Adults' },
        { href: '/cursos-de-programacion-para-universitarios-peru', label: 'University students' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/data-analytics-course', label: 'Data analytics course' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Check the key before the total'
  },

  personalityCss: `
.ag-root.ag-sda .ag-hero h1 { letter-spacing: -0.013em; max-width: 19ch; }
.ag-root.ag-sda .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-sda .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-sda .ag-table td.ag-num { font-variant-numeric: tabular-nums; }
.ag-root.ag-sda .ag-code-note code { font-weight: 600; letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Municipalidad Provincial de Chiclayo, Registro de recolección de residuos sólidos en el distrito de Chiclayo, Plataforma Nacional de Datos Abiertos, ODC-By; INEI Censos Nacionales 2025 and 2017 (places.tsv); EF EPI 2025; tz database America/Lima.',
    localProject: 'Why did Chiclayo seem to collect twice as much rubbish in October 2024? An original SQL analysis (SQLite via Python) of the municipality\'s waste register: grouped by the date, October 2024 shows 183 shifts and 13,921.5 tonnes and November is missing; HAVING finds duplicate dates, the month column disagrees with the date on 90 rows, and the weekday (VIERNES against strftime 2) shows the dates were typed with the wrong month; grouped by the month column, October is 7,342.9 and November 6,578.6. Lesson family: unique keys and cross-checked columns.',
    requiredMentions: ['residuos_chiclayo_abril2026.csv', '202410 | 183 | 13921.5', '202411 | 202410 | 90', '20241001 | VIERNES | 2', '202411 | 90 | 6578.6', '552,508', '1,404,633', 'Check the key before the total', 'adults in Chiclayo average 474'],
    sources: [
      { claim: 'Chiclayo waste-collection dataset, its description and ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/registro-de-recolecci%C3%B3n-de-residuos-s%C3%B3lidos-en-el-distrito-de-chiclayo-municipalidad' },
      { claim: 'The CSV file analysed (April 2026 edition).', url: 'https://www.datosabiertos.gob.pe/sites/default/files/Dataset%20Registro%20recolecci%C3%B3n%20de%20residuos%20solidos%20-%20ABRIL%202026_0.csv' },
      { claim: 'Lambayeque department population, Censos Nacionales 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Chiclayo city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'EF EPI 2025: Chiclayo 474, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Why the November 2024 rows carry October dates: not known; the page shows the evidence and the likely fix, not a cause.',
      'Waste per person or comparisons with other cities: the dataset covers the district only and no matching population was verified, so none computed.',
      'A combined Chiclayo population from city, district or department figures: never summed.',
      'SQL analyst salaries in Peru: no primary source verified.',
      'Spanish-language teaching: every class is in English, and the page says so.',
      'Any connection with the Municipalidad Provincial de Chiclayo: none.'
    ]
  }
};
