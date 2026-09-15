'use strict';
// Data science course, Netherlands (ag- track door, national).
// Spine: big data is not the same as good data. CBS, the national statistics
// office, launched its Center for Big Data Statistics on 27 September 2016
// (CBS news, English), with partners including seven national statistical
// institutes, Eurostat, TNO, DNB, IBM, KPN, SURFsara, four universities and
// several companies, its main location in Heerlen, and the aims of faster,
// real-time statistics, statistics at lower regional levels, new indicators
// and a zero footprint for respondents. Its own page: new and existing (big)
// data sources, themes from the labour market to smart farming, satellite,
// social media and sensor data, supervised and unsupervised machine learning,
// deep learning and text mining; it examines the quality of data sources and
// trains data scientists. Worked example (invented): coverage bias. The
// projects door owns StatLine, KNMI and data.overheid; the adults door owns
// the AI monitor. Neither is repeated.

module.exports = {
  cluster: 'ag',
  slug: 'data-science-course-netherlands',
  code: 'dsn',
  accent: '#374300',
  accentRationale: 'Data science door: a dark moss from the solver, more than thirty units from every page it links to, the projects, college and Python doors, the academy hub and both Dutch oranges among them, with an unlinked town as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'Data science course, Netherlands',
  title: 'Data Science Course in the Netherlands | Live Online',
  description: 'Live online data science for learners in the Netherlands: Python, statistics, SQL and machine learning on real data, taught in English. First lesson free.',
  ogDescription: 'The Dutch statistics office runs its own big data centre, and the first thing it does with a new source is check its quality. Data science taught the same careful way, live online.',
  twitterDescription: 'Python, statistics, SQL and machine learning on real data, for learners in the Netherlands. First lesson free.',
  pageName: 'Data Science Course in the Netherlands',
  webPageDescription: 'Live online data science courses for teenagers, students and adults in the Netherlands: Python, statistics, SQL, data cleaning, visualisation and machine learning, taught with data quality at the centre.',
  courseDescription: 'A live online data science programme for learners in the Netherlands, from Python and statistics through SQL, cleaning and visualisation to machine learning, with every dataset checked for coverage and quality before it is modelled.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the Netherlands', href: '/coding-classes-in-netherlands' }],
  crumbLabel: 'Data science',
  navLinks: [
    { href: '#cbds', label: 'A big data centre' },
    { href: '#quality', label: 'Good data first' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; Data science &middot; Live online',
  h1: 'Data science course in the Netherlands',
  lede: 'The Dutch national statistics office, CBS, has run its own centre for big data since September 2016. It works with satellite images, social media and sensors, uses machine learning, deep learning and text mining, and trains data scientists. One line in its description matters more than any of the technology: the centre acquires new data sources and examines their quality. That is the heart of data science, and the part most short courses skip. A dataset can be enormous and still describe the wrong people, measure the wrong thing or miss exactly the cases that matter. This page is for learners in the Netherlands, from teenagers to working adults, who want to learn data science properly: Python and statistics, SQL, cleaning and visualisation, and machine learning, with the question of whether the data is any good asked first, every time. Lessons are live online and in English.',
  secondaryCta: { href: '#quality', label: 'Why good data comes first' },
  wa: 'Hello Modern Age Coders, I would like a free data science lesson in the Netherlands.',
  heroNote: 'Teaching live since 2020 &middot; more than 10,000 students &middot; every lesson with a real teacher',
  spec: [
    ['Core', 'Python, statistics, SQL'],
    ['Then', 'Cleaning, visualisation, machine learning'],
    ['Habit', 'Coverage and quality checked first'],
    ['For', 'Teens, students, adults'],
    ['Format', 'Live video with a teacher'],
    ['Groups', 'Five to ten, or one to one'],
    ['Language', 'English'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches data science live online to learners in the Netherlands: Python and statistics first, then SQL, data cleaning and visualisation, then machine learning. Every project starts with the same questions a statistics office asks of a new source: who is in this data, what does it really measure and how good is it? Teenagers, students and adults are placed by ability, in groups of five to ten or one to one, and non-programmers can start with analytics tools before Python. The trial lesson costs nothing; afterwards a group seat is USD 100 and private teaching USD 150 per month.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three data science courses for three starting points',
    lede: 'One for teenagers, one full course for students and adults, and one for the mathematics underneath. Each opens its own page with syllabus, timetable and fee.',
    items: [
      { course: 'data-science-course-for-teens-python-data', code: 'DATA / 01', title: 'Data Science for Teens', note: 'Real datasets in Python, from cleaning and plotting to a first model, with the question of who is missing from the data asked every time.' },
      { course: 'data-science-complete-masterclass-college', code: 'DATA / 02', title: 'Data Science Course', note: 'Statistics, SQL, feature engineering, modelling and a portfolio, for students and adults heading into data roles.' },
      { course: 'data-analytics-mathematics-masterclass', code: 'DATA / 03', title: 'Maths for Data Science', note: 'The statistics, linear algebra and calculus behind the methods, explained through code rather than proofs.' }
    ]
  },

  sections: [
    {
      id: 'cbds', tint: 'tint', eyebrow: 'A big data centre',
      h2: 'The national statistics office runs its own big data centre',
      lede: 'CBS launched the Center for Big Data Statistics on 27 September 2016. The details below come from the CBS launch announcement and from the centre\'s own page.',
      body: [
        { kind: 'table', caption: 'The CBS Center for Big Data Statistics, in CBS\'s own words', head: ['Item', 'Detail'], rows: [
          ['Launched', '27 September 2016'],
          ['Main location', 'Heerlen, with a second connected office'],
          ['Purpose', 'Using new and existing (big) data sources and techniques to obtain better information'],
          ['Themes', 'The labour market, mobility, health, the energy transition and smart farming'],
          ['Data sources', 'Satellite data, social media data and sensor data'],
          ['Methods', 'Supervised and unsupervised machine learning, deep learning and text mining'],
          ['Also', 'Examines the quality of data sources, and trains data scientists'],
          ['Aims at launch', 'Faster, real-time statistics; statistics for smaller regional and urban areas; new indicators; a zero footprint for respondents']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The partners named at the launch show how seriously the Netherlands took the idea: seven national statistical institutes, Eurostat, the research organisation TNO, the Dutch central bank DNB, IBM, KPN, SURFsara, the universities of Maastricht, Leiden, Twente and Amsterdam, and companies including Capgemini, Dell-EMC, Pivotal, Microsoft Netherlands and Humanity X.',
            'The aims were practical: statistics that arrive faster, that describe smaller areas than before, and that ask less of the people and businesses who would otherwise fill in forms, the zero footprint the announcement describes.'
          ],
          right: [
            'For a learner, the interesting part is the order of work. Before any model is trained, the centre acquires a data source and examines its quality. Only then does it ask what statistics the source can support.',
            'That order is exactly what we teach. We have no connection with CBS; its public pages are simply the clearest Dutch example of data science done carefully.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.cbs.nl/en-gb/about-us/innovation/nieuwsberichten/big-data/cbs-launching-center-for-big-data-statistics" rel="noopener" target="_blank">CBS, CBS launching Center for Big Data Statistics</a>; <a class="ag-inline-link" href="https://www.cbs.nl/nl-nl/onze-diensten/center-for-big-data-statistics" rel="noopener" target="_blank">CBS, Center for Big Data Statistics</a>. Read 15 September 2026.' }
      ]
    },
    {
      id: 'quality', tint: 'deep', eyebrow: 'Good data first',
      h2: 'Big data is not the same as good data',
      lede: 'A huge dataset can still give the wrong answer if it describes the wrong people. The simplest way to see it is with numbers a learner can check.',
      body: [
        { kind: 'table', caption: 'An invented example: estimating the average age of a town\'s residents', head: ['Source', 'People in the data', 'Average age in the data', 'Error against the true figure'], rows: [
          ['All residents (the true figure)', '10,000', '42', 'none'],
          ['A survey of 1,000 residents chosen at random', '1,000', '43', '1 year'],
          ['Location data from an app used by 4,000 residents, mostly younger', '4,000', '31', '11 years']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The app data is four times larger than the survey and eleven years wrong, because the people who use the app are not the people who live in the town. More data from the wrong group does not fix the error; it only makes it look more certain.',
            'The numbers are invented, but the pattern is real and common. Data from apps, sensors or social media describes whoever produces it, which is rarely everyone.'
          ],
          right: [
            'So every project on our course starts with three questions. Who is in this data, and who is missing? What does each column really measure, and how was it recorded? How would we know if it were wrong? Only then do we clean, plot and model.',
            'Learners practise on real Dutch public data too; the page on <a class="ag-inline-link" href="/build-real-ai-projects-netherlands">building real AI projects</a> describes the sources.'
          ] },
        { kind: 'two', mt: true,
          left: [
            'A second trap is measurement. A column called visits might count people, sessions or page loads, and the three give very different totals. A sensor that records traffic may miss bicycles, which in a Dutch town is not a small omission. Before a learner trusts a column, they find out exactly how it was produced.',
            'The third trap is time. Data collected before a change in the rules, a new road or a new version of an app may describe a world that no longer exists. A model trained on it can be accurate about the past and wrong about today.'
          ],
          right: [
            'None of this needs advanced mathematics. It needs the habit of asking, and the patience to read the documentation of a dataset before writing any code. That is why the second rung of our ladder is questioning the data, ahead of any cleaning or modelling.',
            'Learners who form that habit early find their later models are simpler, because they have already removed the problems a complicated model would only have hidden.'
          ] },
        { kind: 'source', html: 'The age example is invented for teaching and describes no real town or app. The three questions are our course practice.' }
      ]
    },
    {
      id: 'routes', tint: '', eyebrow: 'Routes',
      h2: 'Data science for teenagers, students and adults',
      lede: 'The same discipline, reached from different starting points.',
      body: [
        { kind: 'two',
          left: [
            'Teenagers start with Python and real datasets; see <a class="ag-inline-link" href="/coding-classes-for-teens-netherlands">coding classes for teens</a>, and <a class="ag-inline-link" href="/machine-learning-for-school-students-netherlands">machine learning for school students</a> for the model-building side.',
            'Students in economics, the sciences or the social sciences often take data science beside their degree; see <a class="ag-inline-link" href="/coding-for-college-students-netherlands">coding for college students</a>.'
          ],
          right: [
            'Adults usually come for work, and non-programmers can begin with analytics tools before Python; see <a class="ag-inline-link" href="/coding-and-ai-classes-for-adults-netherlands">coding and AI classes for adults</a>. The language itself is covered on <a class="ag-inline-link" href="/python-classes-netherlands">Python classes in the Netherlands</a>.',
            'For those in the south of the country, <a class="ag-inline-link" href="/coding-classes-in-heerlen">Heerlen</a>, the centre\'s main location, has its own city page.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The data science ladder',
    h2: 'From a first dataset to a model you can defend',
    lede: 'Each rung depends on the one below. A model built on data nobody has questioned can be precise and wrong at the same time.',
    table: { caption: 'The data science route', head: ['Rung', 'What the learner can do'], rows: [
      ['1. Python and statistics', 'Load data, describe it with averages and spreads, and plot it'],
      ['2. Questioning the data', 'Ask who is in it, what it measures and how it was recorded'],
      ['3. SQL and cleaning', 'Query databases, join tables and fix what is broken'],
      ['4. Machine learning', 'Train models, test them on unseen data and compare with a baseline'],
      ['5. Communicating', 'Explain results and limits in a report or a public repository']
    ] },
    left: { h3: 'Why questioning comes before cleaning', ps: [
      'Cleaning makes data tidy; it cannot make it representative. A learner who asks who is missing before cleaning saves themselves from polishing a dataset that should not have been used.',
      'How data science connects to the programming before it and the AI after it is set out on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Pace for each group', ps: [
      'Teenagers usually take two lessons a week and build a project each term. Students and adults often study in the evening, some one to one around a thesis or job.',
      'Non-programmers can start with analytics tools and add Python later.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live data science courses',
    lede: 'Ordered from spreadsheets to machine learning. Open a card for the syllabus, the timetable and the fee; the trial lesson decides which comes first.',
    bands: [
      { num: 'I', h3: 'Teenagers', sub: 'Python and real data', courses: [
        { code: 'DATA / TEEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Real datasets in Python, from cleaning to a first model.' },
        { code: 'DATA / TEEN / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange Data Mining for Teens', blurb: 'Data mining through visual workflows, before or beside code.' }
      ] },
      { num: 'II', h3: 'Students and adults', sub: 'The full discipline', courses: [
        { code: 'DATA / PRO / 01', slug: 'data-science-complete-masterclass-college', title: 'Data Science Course', blurb: 'Statistics, SQL, modelling and a portfolio.' },
        { code: 'DATA / PRO / 02', slug: 'data-analysis-mastery-course-college', title: 'Data Analysis Course', blurb: 'Excel, SQL, Python and BI for analysts.' },
        { code: 'DATA / PRO / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for Data Science', blurb: 'The mathematics behind the methods, through code.' },
        { code: 'DATA / PRO / 04', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL Course', blurb: 'Databases and SQL, the ground most data work stands on.' },
        { code: 'DATA / PRO / 05', slug: 'orange-data-mining-machine-learning-course-for-college-students', title: 'Orange Data Mining for College Students', blurb: 'Applied machine learning through visual workflows, for students.' }
      ] },
      { num: 'III', h3: 'Beyond analysis', sub: 'Models and analytics for non-programmers', courses: [
        { code: 'DATA / NEXT / 01', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'From classical methods to deep learning, evaluated properly.' },
        { code: 'DATA / NEXT / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI Analytics for Non-Programmers', blurb: 'Spreadsheets, dashboards and AI assistants for people who do not code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Data lessons, live, at a Dutch hour',
    lede: 'Our teachers are in India, where the clock stays put all year, so they are three and a half hours ahead of the Netherlands during Dutch summer time and four and a half ahead in winter. Teenagers learn after school, students and adults in the evening or at the weekend, at a regular time set in the free lesson.',
    slots: [
      { time: 'After school', l: 'Late afternoon, Dutch time, for teenagers.' },
      { time: 'Evening', l: 'By arrangement, for students and adults.' },
      { time: 'Weekend', l: 'Saturday or Sunday, for longer analysis sessions.' }
    ],
    cells: [
      { h3: 'A free first lesson', p: 'You explore a real dataset with a teacher, who sees your level and proposes a route.' },
      { h3: 'Groups of five to ten', p: 'Learners at the same level from several countries, often analysing the same data differently.' },
      { h3: 'One to one for theses', p: 'For a thesis analysis, a work project or a learner who prefers a teacher to themselves.' },
      { h3: 'Data questioned aloud', p: 'Teachers ask who is in the data and what it measures before any chart is drawn.' },
      { h3: 'In English', p: 'The language of the tools and libraries; Dutch datasets are used as they come.' },
      { h3: 'Work published', p: 'Analyses, code and write-ups go into the learner\'s own GitHub repository.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Four live projects by our students. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'From Google, as posted. We do not write or pay for reviews.',

  fees: {
    h2: 'Data science fees',
    lede: 'One monthly price in US dollars for every country outside India, whether the learner analyses data in spreadsheets or in Python. Joining is free of charge and there is no annual commitment.',
    free: ['A real lesson on real data', 'A route proposed', 'No card needed'],
    group: ['Five to ten learners at one level', 'The same live teacher each week', 'Analyses reviewed weekly', 'A certificate at the end'],
    one: ['A teacher for one learner', 'Built around a thesis or job', 'Pace set by your goal']
  },

  faq: {
    eyebrow: 'Questions about data science',
    h2: 'What learners in the Netherlands ask about data science',
    items: [
      { q: 'What is data science, in one sentence?', a: 'Using data, statistics and code to answer real questions, with honest checks on whether the data can answer them at all.' },
      { q: 'Does CBS really have a big data centre?', a: 'Yes. CBS launched its Center for Big Data Statistics on 27 September 2016, with its main location in Heerlen. It works with satellite, social media and sensor data and trains data scientists. We have no connection with it.' },
      { q: 'Why does the course stress data quality so much?', a: 'Because a large dataset from the wrong people gives a confident wrong answer. Checking coverage and quality first is what separates data science from number crunching.' },
      { q: 'Do I need to be good at maths?', a: 'School maths is enough to start. The statistics and mathematics are taught through code as they become necessary, and there is a separate course for those who want more.' },
      { q: 'Can I start without programming?', a: 'Yes. Non-programmers can begin with the analytics course, using spreadsheets and dashboards, and move to Python later.' },
      { q: 'Is this suitable for teenagers?', a: 'Yes, once a teenager can write basic Python, usually from about thirteen or fourteen.' },
      { q: 'Are lessons in English?', a: 'Yes. The tools and most documentation are in English; Dutch datasets are used as they are.' },
      { q: 'What does it cost?', a: 'After the free trial, learning in a group costs USD 100 a month and learning one to one USD 150 a month, in US dollars. No sign-up charge applies and the arrangement runs month by month.' },
      { q: 'When are lessons held?', a: 'After school, in the evening or at the weekend, Dutch time. From India our teachers are three and a half hours ahead of Dutch summer time and four and a half ahead in winter.' },
      { q: 'What happens after I send the form?', a: 'We ring back at an hour that works in the Netherlands and set up a trial lesson around a real dataset. Nothing is billed unless you stay on.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for data learners in the Netherlands',
    lede: 'Related pages for projects, languages and each age group.',
    items: [
      { href: '/build-real-ai-projects-netherlands', label: 'Build real AI projects', p: 'Projects on real Dutch open data.' },
      { href: '/python-classes-netherlands', label: 'Python classes', p: 'The language most data science is done in.' },
      { href: '/coding-for-college-students-netherlands', label: 'Coding for college students', p: 'Data skills beside a degree.' },
      { href: '/coding-and-ai-classes-for-adults-netherlands', label: 'Coding and AI classes for adults', p: 'Data and automation for working adults.' },
      { href: '/coding-classes-in-heerlen', label: 'Coding classes in Heerlen', p: 'The city where the CBS big data centre is based.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The national ladder from Python to AI.' }
    ]
  },

  start: {
    h2: 'Book a free data science lesson',
    lede: 'Send us a number and we phone back at a time that suits you in the Netherlands. In the first lesson you explore a real dataset with a teacher, and by the end you will know where to start.',
    readFirst: 'Reading first is fine. The <a class="ag-inline-link" href="/courses">course catalogue</a>, our page on <a class="ag-inline-link" href="/how-we-teach">how lessons are taught</a> and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> are open to everyone.',
    note: 'WhatsApp is free from a Dutch phone and usually gets the quickest reply. Our number is Indian, and we have no Dutch office or premises.',
    formNote: 'No card, no commitment. One call to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Netherlands', links: [
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' },
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/build-real-ai-projects-netherlands', label: 'Real AI projects' },
        { href: '/coding-classes-in-heerlen', label: 'Heerlen' }
      ] },
      { h4: 'Data', links: [
        { href: '/python-classes-netherlands', label: 'Python classes' },
        { href: '/coding-for-college-students-netherlands', label: 'Coding for students' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching data science in the Netherlands on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-dsn .ag-hero-grid { gap: clamp(1.2rem, 3.2vw, 2.8rem); }
.ag-root.ag-dsn .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-dsn .ag-capsule { border-left-width: 6px; }
.ag-root.ag-dsn .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-dsn .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-dsn .ag-table caption { text-align: left; }
.ag-root.ag-dsn .ag-spec dt { letter-spacing: 0.13em; }
.ag-root.ag-dsn .ag-slots { gap: 1.15rem; }
`,

  mustMention: ['Center for Big Data Statistics', '27 September 2016', 'Heerlen', 'Eurostat', 'SURFsara', 'satellite, social media and sensor data', 'text mining', 'smart farming', 'zero footprint', '11 years']
};
