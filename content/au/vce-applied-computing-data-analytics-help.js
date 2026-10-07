'use strict';
// VCE Applied Computing: Data Analytics help (ag- exam door, Australia cluster Phase 3, row 60).
// Facts read raw on 7 October 2026 from the VCAA: the VCE Applied Computing Study Design (Units 1 to 4
// accredited from 1 January 2025; Unit 3 Data analytics IT023, Unit 4 Data analytics IT024; weightings
// coursework 20 per cent (10 + 10), School-assessed Task 30, examination 50, 2 hours), the VCAA "Data
// Analytics: Administrative information for School-based Assessment in 2026", and the 2026 VCE examination
// timetable page (Applied Computing: Data Analytics on Monday 9 November, 11:45 am to 2:00 pm).
// Spine (data cleansing, family checked free site-wide on 7 October 2026): the 2026 timetable itself as an
// authentic dataset, 45 session windows across 18 exam days from Thursday 15 October to Wednesday
// 18 November; 2 time strings out of pattern; a 600-minute all-day window that inflates the standard
// deviation from 27.28 to 74.58 minutes. All statistics are our own calculation.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'VCE DATA ANALYTICS', label: 'VCE Data Analytics help', blurb: 'The Applied Computing Units 3 and 4 built on databases, spreadsheets and visualisations: the units, the 30 per cent task, the exam, and data cleansing practised on a real VCAA dataset.' },
  slug: 'vce-applied-computing-data-analytics-help',
  code: 'vcda',
  accent: '#45571E',
  accentRationale: 'VCE Data Analytics: a field olive, calm enough for charts to carry the colour, at least 12 RGB from every site accent and 4.8:1 or better on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'VCE Data Analytics help',
  title: 'VCE Data Analytics Help | Applied Computing Units 3 and 4',
  description: 'Help with VCE Applied Computing: Data Analytics, Units 3 and 4: SQL, cleansing, statistics, visualisations, the 30 per cent task and the 2-hour exam.',
  ogDescription: 'VCE Applied Computing: Data Analytics explained from the VCAA study design, plus a data cleansing exercise on the VCAA\'s own 2026 exam timetable that shows how one bad row can triple a standard deviation.',
  twitterDescription: 'VCE Data Analytics from the study design, with data cleansing practised on the real 2026 exam timetable.',
  pageName: 'VCE Data Analytics Help',
  webPageDescription: 'Support for Victorian students taking VCE Applied Computing: Data Analytics: Units 3 and 4 structure and assessment, the 2026 examination session, SQL and statistics key knowledge, and a worked data cleansing exercise on the VCAA 2026 examination timetable.',
  courseDescription: 'Live online teaching in SQL, spreadsheet analysis, descriptive statistics, data cleansing and data visualisation design for Victorian VCE Data Analytics students, without writing any assessed work.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'VCE Data Analytics',
  navLinks: [
    { href: '#outline', label: 'The units' },
    { href: '#marks', label: 'Marks and exam' },
    { href: '#cleanse', label: 'A cleansing exercise' },
    { href: '#research', label: 'The research task' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Victoria &middot; Applied Computing: Data Analytics &middot; Live online',
  h1: 'VCE Data Analytics help',
  lede: 'Data Analytics is the VCE study where computing meets evidence. Students pull data out of large repositories with SQL, clean it in a spreadsheet, test it with statistics and present what it shows, then do the whole thing again for a research question of their own. Most of the marks reward judgement about data, not cleverness with tools.',
  secondaryCta: { href: '#cleanse', label: 'Try the cleansing exercise' },
  wa: 'Hello Modern Age Coders, I would like a free class about VCE Applied Computing: Data Analytics.',
  heroNote: 'Study design read at source &middot; Real data, honestly cleaned &middot; Lessons after school in Victorian time',
  spec: [
    ['Study', 'VCE Applied Computing'],
    ['Units', '3 (IT023) and 4 (IT024)'],
    ['Accredited from', '1 January 2025'],
    ['Task weight', '30 per cent of the study score'],
    ['Exam', '50 per cent, 2 hours'],
    ['2026 exam', 'Monday 9 November'],
    ['We teach', 'SQL, statistics and visual design'],
    ['We never', 'Touch the research project']
  ],
  capsuleQ: 'In short',
  capsule: 'VCE Applied Computing: Data Analytics is the Units 3 and 4 sequence in which students extract, cleanse, analyse and visualise data. Unit 3 builds visualisations to a teacher\'s design and plans a student research question; Unit 4 turns that plan into infographics or dynamic visualisations and studies data security. Marks split 20 per cent coursework, 30 per cent task and 50 per cent examination.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses under the key knowledge',
    lede: 'Queries first, statistics second, then the visual design that turns findings into a message.',
    items: [
      { course: 'mysql-mastery-for-teens', code: 'VCDA / 01', title: 'Databases with MySQL', note: 'SELECT, WHERE, ORDER BY and INNER JOIN on real tables: the exact SQL the Unit 3 key knowledge lists.' },
      { course: 'statistics-probability-maths-course', code: 'VCDA / 02', title: 'Statistics and probability', note: 'Mean, median, standard deviation, Pearson\'s r and skew, understood rather than just calculated.' },
      { course: 'data-science-course-for-teens-python-data', code: 'VCDA / 03', title: 'Data science with Python', note: 'Cleaning and charting data in code, a strong partner to spreadsheet work.' }
    ]
  },

  sections: [
    {
      id: 'outline', tint: 'tint', eyebrow: 'Inside the study design',
      h2: 'Two units of data work, and the tools they require',
      lede: 'Our summary of what the VCAA\'s Applied Computing study design (read 7 October 2026) sets out. Data Analytics is one of two Units 3 and 4 sequences in the study; Software Development is the other.',
      body: [
        { kind: 'table', caption: 'The Data Analytics sequence at a glance', head: ['Unit', 'Area of study', 'What students do'], rows: [
          ['Unit 3 (IT023)', 'Data analytics', 'Extract authentic data from large repositories, cleanse and analyse it, and build data visualisations to teacher-provided requirements and designs'],
          ['Unit 3 (IT023)', 'Data analytics: analysis and design', 'Propose a research question, collect primary and secondary data, plan with a Gantt chart, and design infographics or dynamic visualisations'],
          ['Unit 4 (IT024)', 'Data analytics: development and evaluation', 'Develop the preferred design, evaluate it against the student\'s own criteria, and assess the project plan'],
          ['Unit 4 (IT024)', 'Cyber security: data security', 'Respond to a teacher-provided case study on the impact of a data breach and an organisation\'s security strategies']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Unit 3 names the software students must both study and use: database software, spreadsheet software and data visualisation software, plus a tool for running Structured Query Language queries. The SQL itself is spelt out: SELECT, FROM, WHERE, ORDER BY and INNER JOIN, with the Boolean operators AND, NOT and OR in WHERE statements.',
            'The statistics are equally specific: average, median, minimum, maximum, range, standard deviation, count or frequency and sum, then Pearson\'s correlation coefficient and the shape and skew of data. Data sources must be referenced in the American Psychological Association (APA) style.'
          ],
          right: [
            'Visualisation is treated as design, not decoration. The study design separates infographics, dashboards and dynamic data visualisations, and asks for mock-ups and storyboards before building. Testing includes checking that a chart is representative of the data behind it, a skill many adults never learn.',
            'Artificial intelligence appears in the key knowledge as well: AI features in software tools, generating visualisations by writing and refining prompts, and machine learning for predictions and recommendations. Students need to understand these, and to judge when a generated chart misrepresents its data.'
          ] },
        { kind: 'source', html: 'Summarised on 7 October 2026 from the <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/applied-computing-data-analytics/applied-computing" rel="noopener" target="_blank">VCAA Applied Computing page</a> and its study design.' }
      ]
    },
    {
      id: 'marks', tint: 'deep', eyebrow: 'How the study score is built',
      h2: 'A 2-hour exam and a two-term project',
      lede: 'The split below is the study design\'s; the weeks of class time come from the VCAA\'s 2026 Data Analytics administrative notes, and the exam date from the 2026 timetable (all read on 7 October 2026).',
      body: [
        { kind: 'table', caption: 'Data Analytics marks, piece by piece', head: ['Assessment', 'Share of study score', 'Focus'], rows: [
          ['Coursework, Unit 3', 'One tenth', 'Visualisations made to requirements and designs a teacher supplies'],
          ['Coursework, Unit 4', 'One tenth', 'A case study on a data breach'],
          ['The research project (SAT)', 'Three tenths', 'The student\'s own research question, carried from Unit 3 into Unit 4'],
          ['Exam at year end', 'One half', 'Two hours, held on Monday 9 November in 2026 in the 11:45 am to 2:00 pm session']
        ] },
        { kind: 'two', mt: true,
          left: [
            'For the task, the VCAA\'s 2026 guidance asks schools to allow at least 8 to 10 weeks of class time for the Unit 3 analysis and design, and at least 8 weeks for the Unit 4 development and evaluation. Teachers record progress for each student on an authentication record, which is why steady, dated work matters more than a final sprint.',
            'The scope rules are demanding in a quiet way. The research question has to be answerable from data the student can actually collect, primary and secondary, within legal requirements. A question that sounds impressive but cannot be answered from available data is the most common way a strong student loses marks before building anything.'
          ],
          right: [
            'The exam draws on all of the key knowledge, so SQL syntax, statistical interpretation, visualisation conventions, testing and data security can sit side by side in one paper. Students who learned the tools only through their own project often meet unfamiliar question types here.',
            'Useful exam practice is short and varied: write the query that answers a stated question, say what a correlation of a given strength does and does not show, pick the visualisation type for a stated audience, and identify the threat in a short breach scenario.'
          ] },
        { kind: 'source', html: 'Assessment weights from the study design; task timing from the <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/sites/default/files/2026-01/2026DataAnalyticsAdmin-Information-for-School-based-Assessment.docx" rel="noopener" target="_blank">VCAA Data Analytics administrative information for 2026</a>; the date from the <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable" rel="noopener" target="_blank">2026 timetable</a>.' }
      ]
    },
    {
      id: 'cleanse', tint: 'tint', eyebrow: 'A worked exercise on real data',
      h2: 'Cleansing the 2026 VCE exam timetable',
      lede: 'The key knowledge asks for techniques to manipulate and cleanse data, including identifying and fixing errors, and descriptive statistics to find patterns. The VCAA\'s own timetable page makes a fair practice dataset: authentic, public, and slightly messy.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The dataset', p: 'Every written-exam session window from Thursday 15 October to Wednesday 18 November 2026: 45 windows across 18 exam days, holding 91 subject lines, as printed on the VCAA page on 7 October 2026.' },
          { h3: 'The dirt', p: '43 windows follow one pattern, such as "11:45 am" to "2:00 pm" with spaces around the dash. Two do not: one writes its end time as "5.15pm" with a full stop and no space, and one prints its dash with no spaces at all.' },
          { h3: 'The outlier', p: 'One window runs from 8:00 am to 6:00 pm. It is not an exam length: the page explains that each Auslan student sits one two-hour session somewhere inside that day.' }
        ] },
        { kind: 'table', caption: 'Session window lengths before and after cleansing (our calculation from the 2026 VCAA timetable)', head: ['Measure', 'All 45 windows', '44 windows, Auslan day removed'], rows: [
          ['Mean length', '138.78 minutes', '128.30 minutes'],
          ['Median length', '135 minutes', '135 minutes'],
          ['Standard deviation (population)', '74.58 minutes', '27.28 minutes'],
          ['Minimum and maximum', '75 and 600 minutes', '75 and 195 minutes'],
          ['Most common length', '135 minutes, 20 windows', '135 minutes, 20 windows']
        ] },
        { kind: 'two', mt: true,
          left: [
            'One row out of 45 almost triples the standard deviation and drags the mean up by more than ten minutes, while the median does not move at all. That is the shape-and-skew lesson the study design asks for, demonstrated on a dataset nobody invented. The right cleansing decision is not to delete the row silently but to recognise it as a different kind of record, document why it was excluded, and report both versions.',
            'The "5.15pm" row is the other half of the lesson. A spreadsheet formula that splits times on a colon reads it as nonsense; a person reads it instantly. Validation rules for time fields catch it, and fixing it should be logged, because changing source data without a record is how analyses become impossible to check.'
          ],
          right: [
            'The pattern in the clean lengths is informative too. Twenty windows of 135 minutes, thirteen of 105 and three of 75 suggest a small set of standard formats. A WHERE filter on the subject text shows what the short windows hold: the two technology-free mathematics papers, Mathematical Methods Examination 1 and Specialist Mathematics Examination 1, each sharing its window with music examinations. Testing a hunch before claiming it is the habit the exam rewards.',
            'This is exactly the kind of exercise we use in lessons: a real, public dataset, a question worth asking, and the discipline to report what was changed. Students then apply the same discipline to data they choose for their own work, without our involvement.'
          ] },
        { kind: 'source', html: 'Dataset: <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable" rel="noopener" target="_blank">VCAA, 2026 VCE examination timetable</a>, read on 7 October 2026. Window counts, lengths and statistics are our own calculation in Python. Cleansing wording from the VCE Applied Computing Study Design, Unit 3 key knowledge.' }
      ]
    },
    {
      id: 'research', tint: '', eyebrow: 'The School-assessed Task',
      h2: 'The research question has to stay the student\'s',
      lede: 'In Data Analytics the task starts with a question the student proposes. The study design and the 2026 administrative information set out what follows from that.',
      body: [
        { kind: 'table', caption: 'The research task, in the VCAA\'s terms', head: ['Stage', 'Requirement'], rows: [
          ['The question', 'Students independently determine and propose a research question'],
          ['The data', 'Data from both primary and secondary sources, collected with appropriate methods and legal requirements considered'],
          ['The plan', 'A Gantt chart mixing milestones the student sets with ones the teacher sets'],
          ['The designs', 'Two or three design ideas, judged against criteria the student writes'],
          ['Checking authorship', 'Teachers monitor progress regularly and record it for each student']
        ] },
        { kind: 'p', text: 'We therefore teach every skill the task needs, from writing an answerable question to choosing a chart for an audience, using datasets and questions we pick ourselves, like the timetable above. We never propose, refine, collect for, analyse, design or edit any part of a student\'s task. A student who has cleaned and questioned a dozen datasets with us is ready to do their own alone.' },
        { kind: 'source', html: 'Drawn from Unit 3 Area of Study 2 of the study design and the VCAA\'s 2026 Data Analytics administrative information (7 October 2026).' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs from spreadsheets to findings',
    lede: 'Students start Unit 3 from very different places. The rungs describe the skill reached, whatever the year.',
    table: { caption: 'From first queries to an evaluated visualisation', head: ['Point in the year', 'Step', 'You are ready when'], rows: [
      ['Before Unit 3', '1. Spreadsheet fluency', 'Sorts, filters and writes formulas without looking anything up'],
      ['Unit 3 data analytics', '2. Queries', 'Writes SELECT queries with WHERE, ORDER BY and an INNER JOIN on two tables'],
      ['Unit 3 design', '3. Questions', 'Turns a curiosity into a research question that available data can answer'],
      ['Unit 4', '4. Evaluation', 'Judges a visualisation against criteria and checks it represents the data']
    ] },
    left: { h3: 'If statistics is the weak spot', ps: [
      'Many students can calculate a standard deviation and cannot say what it means. A few weeks of interpreting spread, correlation and skew on real data repairs that faster than more formulas.',
      'Pearson\'s r is the classic trap: it measures linear association, not cause, and a single outlier can change it, as the timetable example shows for spread.'
    ] },
    right: { h3: 'Alongside the study', ps: [
      'Students who also enjoy building programs often take <a class="ag-inline-link" href="/vce-applied-computing-software-development-help">VCE Software Development</a> as well; the study design allows one or both sequences.',
      'The analytical habits here, documenting every change to data, carry straight into university statistics and data science.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Data Analytics students',
    lede: 'Grouped by the part of the study they support. Each card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Data and queries', sub: 'The Unit 3 toolset', courses: [
        { code: 'VCDA / U3 / 01', slug: 'mysql-mastery-for-teens', title: 'Databases with MySQL', blurb: 'Tables, keys and SQL queries, from first SELECT to joins.' },
        { code: 'VCDA / U3 / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Scripting for students who outgrow spreadsheet formulas.' },
        { code: 'VCDA / U3 / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Cleaning, describing and charting data in code.' }
      ] },
      { num: 'II', h3: 'Analysis', sub: 'Statistics with meaning', courses: [
        { code: 'VCDA / AN / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Spread, correlation and skew, interpreted carefully.' },
        { code: 'VCDA / AN / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Mathematics for data analytics', blurb: 'The maths underneath summaries, trends and predictions.' },
        { code: 'VCDA / AN / 03', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Visual machine learning with Orange', blurb: 'Predictions and recommendations without heavy code, matching the AI key knowledge.' }
      ] },
      { num: 'III', h3: 'Beyond the study', sub: 'Security and depth', courses: [
        { code: 'VCDA / EX / 01', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Breaches, threats and defences, as the Unit 4 case study discusses them.' },
        { code: 'VCDA / EX / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'How models learn from data, and how they mislead.' },
        { code: 'VCDA / EX / 03', slug: 'data-analysis-mastery-course-college', title: 'Data analysis, university level', blurb: 'For students heading into data-heavy degrees.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Analytics lessons after school',
    lede: 'Our teachers log in from India. Victoria leads India by 4.5 hours in winter; with daylight saving (4 October 2026 to 4 April 2027 in the IANA data) the lead becomes 5.5 hours, putting a 5.30 pm lesson in Ballarat or Bendigo at noon in India.',
    slots: [
      { time: 'Weekday after school', l: 'The standard choice through Units 3 and 4.' },
      { time: 'Weekend morning', l: 'Longer blocks for SQL, statistics or visual design.' },
      { time: 'School holidays', l: 'Exam-focused practice before November.' }
    ],
    cells: [
      { h3: 'Our datasets only', p: 'Public data and questions we choose; assessed work never enters the lesson.' },
      { h3: 'Every change logged', p: 'Cleansing taught as a documented process, not silent deletion.' },
      { h3: 'Interpretation drilled', p: 'What a statistic shows, what it hides, and how to say so briefly.' },
      { h3: 'Small senior groups', p: 'Five to ten students at one level, each defending an analysis aloud.' },
      { h3: 'One-to-one option', p: 'For SQL or statistics gaps that need fast repair.' },
      { h3: 'Straight about results', p: 'We will not promise a study score or ATAR; the analysis and the mark are the student\'s.' }
    ]
  },

  projectsH2: 'Student work, published',
  projectsLede: 'Personal work only, never school assessment. Browse more in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Shown exactly as students and parents wrote them on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Data Analytics lessons are priced per month in US dollars, one rate for every family outside India, with nothing up front and no contract.',
    free: ['A real lesson with a teacher', 'A clear read on what to work on', 'No card required'],
    group: ['Five to ten students at one level', 'A steady teacher all term', 'Analyses reviewed together', 'A certificate at the end'],
    one: ['A teacher for one student', 'Concentrated on one weak skill', 'Good for the weeks before the exam']
  },

  faq: {
    eyebrow: 'Questions about the study',
    h2: 'Data Analytics questions',
    items: [
      { q: 'What is VCE Applied Computing: Data Analytics?', a: 'One of the two Units 3 and 4 sequences in VCE Applied Computing (accredited from 1 January 2025), focused on extracting, cleansing, analysing and visualising data, then on a research question of the student\'s own and on data security.' },
      { q: 'How is a Data Analytics score built?', a: 'Half the score is the 2-hour examination; the task is worth 30 per cent and coursework 20 per cent, split evenly between the units.' },
      { q: 'When is the 2026 exam?', a: 'The VCAA timetable lists Applied Computing: Data Analytics on Monday 9 November 2026, in the session from 11:45 am to 2:00 pm.' },
      { q: 'Which SQL do I need?', a: 'The key knowledge lists SELECT, FROM, WHERE, ORDER BY and INNER JOIN, with the Boolean operators AND, NOT and OR used in WHERE statements.' },
      { q: 'What is data cleansing?', a: 'Finding and fixing errors and inconsistencies in data before analysis, such as missing values, wrong types and inconsistent formats, and deciding how to treat records that do not belong. Good cleansing is documented so others can check it.' },
      { q: 'Which statistics are in the study?', a: 'Average, median, minimum, maximum, range, standard deviation, count or frequency and sum, plus Pearson\'s correlation coefficient and the shape and skew of data.' },
      { q: 'How long is the School-assessed Task?', a: 'For 2026 the VCAA asks for eight to ten weeks of class time at minimum on the Unit 3 part, and eight weeks at minimum on the Unit 4 part.' },
      { q: 'Can I do both Data Analytics and Software Development?', a: 'Yes. The study design allows students to take one or both Units 3 and 4 sequences of Applied Computing.' },
      { q: 'Will you help with my research question or data?', a: 'No. We teach the skills with datasets and questions we choose, and never propose, refine, collect, analyse, design or edit anything for a student\'s assessed task.' },
      { q: 'What time do lessons run?', a: 'Late afternoon in Victoria suits most senior students and sits in the middle of our teachers\' day. We agree the weekly time after the free class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Related reading for Victorian students',
    lede: 'The sister computing sequence, the theory study, and the Victorian school picture.',
    items: [
      { href: '/vce-applied-computing-software-development-help', label: 'VCE Software Development help', p: 'The other Applied Computing sequence, where students build programs.' },
      { href: '/vce-algorithmics-hess-help', label: 'VCE Algorithmics (HESS) help', p: 'The VCAA\'s university-level algorithms study.' },
      { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Coding and AI classes in Melbourne', p: 'Victoria\'s schools and the AI skills students ask about.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Australian competitions calendar', p: 'Data, coding and AI contests through the year.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'The statistics that sit beneath every analysis.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Coding for all ages, from our national page.' }
    ]
  },

  start: {
    h2: 'Start with a free class on one data skill',
    lede: 'Tell us whether SQL, statistics, cleansing or visual design is the sticking point. The free class works on it with a dataset we choose, never with assessed work.',
    readFirst: 'Prefer to read first? Every syllabus is on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, the teaching method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the Victorian context on the <a class="ag-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a>.',
    note: 'WhatsApp is the quickest route. The +91 prefix is Indian because we teach from India; we claim no office in Victoria.',
    formNote: 'No card and no obligation. We reply once to arrange the class.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne and Victoria' },
        { href: '/vce-applied-computing-software-development-help', label: 'VCE Software Development' },
        { href: '/vce-algorithmics-hess-help', label: 'VCE Algorithmics' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'We teach the analysis; the research stays the student\'s own'
  },

  personalityCss: `
.ag-root.ag-vcda .ag-hero-grid { gap: clamp(1rem, 3vw, 2.5rem); }
.ag-root.ag-vcda .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-vcda .ag-capsule { border-left-width: 6px; }
.ag-root.ag-vcda .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-vcda .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-vcda .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-vcda .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-vcda .ag-slots { gap: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Victorian Curriculum and Assessment Authority (VCAA). VCE Applied Computing Study Design, read on 7 October 2026: Units 1 to 4 accredited from 1 January 2025; Unit 3 Data analytics (IT023), Unit 4 Data analytics (IT024); School-assessed Coursework 20 per cent (10 + 10), School-assessed Task 30 per cent, examination 50 per cent, 2 hours; SQL key knowledge SELECT, FROM, WHERE, ORDER BY, INNER JOIN. VCAA 2026 administrative information: at least 8 to 10 weeks for Unit 3 Outcome 2, at least 8 weeks for Unit 4 Outcome 1. 2026 timetable: Monday 9 November, 11:45 am to 2:00 pm.',
    localProject: 'Data cleansing on the VCAA 2026 VCE examination timetable page (read 7 October 2026): 45 written-exam session windows across 18 days, 15 October to 18 November, 91 subject lines; 2 time strings out of pattern ("5.15pm" for Foundation Mathematics, and an unspaced dash on the Auslan window); the Auslan 8:00 am to 6:00 pm window (600 minutes) is a scheduling day, not an exam length. All 45: mean 138.78, median 135, population SD 74.58; without it (44): mean 128.30, median 135, SD 27.28, range 75 to 195. Most common 135 minutes (20 windows). Our calculation.',
    requiredMentions: ['IT023', 'IT024', 'data cleansing', 'Monday 9 November', 'Applied Computing: Data Analytics', '5.15pm', '74.58 minutes', 'Structured Query Language', 'American Psychological Association'],
    sources: [
      { claim: 'VCAA, Applied Computing study design page: accreditation from 2025 and study files.', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/applied-computing-data-analytics/applied-computing' },
      { claim: 'VCE Applied Computing Study Design: Data analytics units, unit codes, key knowledge, software tools, weightings and examination.', url: 'https://www.vcaa.vic.edu.au/sites/default/files/2026-06/2025AppliedComputingStudyDesign.docx' },
      { claim: 'VCAA, Data Analytics administrative information for School-based Assessment in 2026: class time and authentication.', url: 'https://www.vcaa.vic.edu.au/sites/default/files/2026-01/2026DataAnalyticsAdmin-Information-for-School-based-Assessment.docx' },
      { claim: 'VCAA, 2026 VCE examination timetable: the dataset for the cleansing exercise and the Data Analytics session on Monday 9 November, 11:45 am to 2:00 pm.', url: 'https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable' },
      { claim: 'IANA time zone database (Australia/Melbourne and Asia/Kolkata): daylight saving from 4 October 2026 to 4 April 2027.', url: 'https://www.iana.org/time-zones' }
    ],
    rejectedClaims: [
      'That each timetable window includes a fixed reading time: only four cells state their reading period, so window lengths are reported as printed, not as exam durations.',
      'That every 75-minute window is a mathematics paper: the third holds only music examinations, and the two mathematics papers share their windows with music, as stated on the page.',
      'The VCAA\'s approved software list for 2026: published in the VCAA Bulletin, not read, so no tool is named as required.',
      'Any study score distribution, scaling or ATAR outcome: not quoted, and nothing is promised.',
      'Any affiliation with the VCAA: none, stated on the page.',
      'Any offer to propose, collect, analyse, design or edit assessed work: refused, stated on the page.'
    ]
  }
};
