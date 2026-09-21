'use strict';
// Data science course, UK (ag- language and track door; UK cluster Phase 3).
// Sources, read raw on 21 September 2026:
//  - DfE, GCE AS and A level subject content for mathematics (with appendices), paragraphs 8 to 10: "The use of
//    technology, in particular mathematical and statistical graphing tools and spreadsheets, must permeate the
//    study of AS and A level mathematics."; specifications must require students to "become familiar with one or
//    more specific large data set(s) in advance of the final assessment (these data must be real and sufficiently
//    rich...)", "use technology such as spreadsheets or specialist statistical packages to explore the data
//    set(s)", "interpret real data presented in summary or graphical form", "use data to investigate questions
//    arising in real contexts"; analyse a subset "using a calculator with standard statistical functions".
//  - Ofqual, GCE Subject Level Guidance for Mathematics (April 2016): large data sets "consist of real data - the
//    data may be reorganised into a standard format but should not be cleansed by the awarding organisation";
//    include the source where possible; mix of categorical and numerical data; "suitable for analysis using a
//    spreadsheet and/or statistical data package"; questions should "give a material advantage" to learners
//    familiar with the data set.
//  - AQA 7357 specification, Use of data in statistics: Family Food 2014 extract for 2018 and 2019 exams; "For
//    exams from 2020 there is a new dataset." (contents not named in the raw page, so not named here).
//  - Pearson Edexcel A level Mathematics specification (issue 4): "Pearson has provided a large data set, which will
//    support the assessment of Statistics in Paper 3: Statistics and Mechanics."
//  - OCR support articles: spec A pre-release LDS "will be used for the life of the specification"; Mathematics B
//    (MEI) "has provided a set of three large data sets, with each one either updated or replaced in a three year
//    cycle"; "Students will not have access to the data set in the exam" (spec A wording; spec B equivalent).
//  - OCR blog, A Level Maths: the introduction of the Large Data Set: "The LDS is published as an Excel file to
//    make it easy to extract data for tables and charts."; "Scheduling whole class lessons in computer suites is
//    still an issue for some teachers."
// Spine: A level maths already hands every student real, uncleaned data. The data arrives as a spreadsheet, the
// exam is sat with a calculator, and nobody is required to touch code. Data science is the missing middle:
// doing to real data in Python what the exam asks you to reason about on paper. The requirement is for A levels in
// England (DfE subject content); Wales and Northern Ireland are not claimed.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'DATA SCIENCE', blurb: 'Data science in the UK: the real large data set every A level maths student meets, and live Python courses that take it further.' },
  slug: 'data-science-course-uk',
  code: 'dsu',
  accent: '#474912',
  accentRationale: 'Data science, UK: a dark olive from the solver (7.64:1 on every paper tint, dE 7.9 from the nearest used accent), the colour of an old chart axis',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Data science course, UK',
  title: 'Data Science Course in the UK | Live Online, Python',
  description: 'A live data science course in the UK: Python, pandas and charts for teens and adults, starting from the real large data set every A level maths student meets.',
  ogDescription: 'Every A level maths student in England studies a real, uncleaned data set, then sits the exam with a calculator. Data science is the part in between.',
  twitterDescription: 'Data science for UK learners: real data, Python, pandas, charts and first models, taught live. For A level students and adults. First class free.',
  pageName: 'Data Science Course in the UK',
  webPageDescription: 'A live online data science course for UK teenagers and adults, starting from the large data set requirement in A level mathematics and moving to Python analysis.',
  courseDescription: 'Live online data science for UK learners: Python, pandas, cleaning and joining real data, summary statistics, charts, sampling and first machine learning models, for teens and adults.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Data science',
  navLinks: [
    { href: '#data-set', label: 'The large data set' },
    { href: '#middle', label: 'The missing middle' },
    { href: '#skills', label: 'From exam to code' },
    { href: '#beyond', label: 'Beyond A level' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; Sixth formers and adults &middot; Python',
  h1: 'Data science course in the UK',
  lede: 'Every student taking A level maths in England already works with real data. The Department for Education\'s subject content requires specifications to make students "become familiar with one or more specific large data set(s) in advance of the final assessment", data that "must be real and sufficiently rich", explored with "spreadsheets or specialist statistical packages". Ofqual adds that the data "should not be cleansed by the awarding organisation": missing values and awkward units stay in. Then comes the exam, where, in OCR\'s words, "Students will not have access to the data set in the exam", and the analysis is done with a calculator\'s statistical functions. Code is nowhere in that picture. Yet the thing students are practising, turning a messy real table into a defensible conclusion, is exactly what data scientists do in Python every day. This course fills that gap for UK sixth formers who want to go further than the exam asks, and for adults who want data skills for work: loading real data, cleaning it honestly, summarising and charting it, and building first models.',
  secondaryCta: { href: '#data-set', label: 'What the requirement says' },
  wa: 'Hello Modern Age Coders, I would like a free first data science class in the UK.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; real data, cleaned honestly, analysed in code',
  spec: [
    ['A level maths', 'A real large data set, studied in advance'],
    ['The data', 'Real, and not cleansed by the board'],
    ['In the exam', 'No data set; a calculator'],
    ['Our course', 'Python, pandas and charts'],
    ['Then', 'Sampling, correlation, first models'],
    ['For', 'Ages 14 to 18 and adults'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The DfE subject content for AS and A level mathematics in England requires every specification to make students familiar with one or more real large data sets before the final assessment, explored using technology such as spreadsheets or statistical packages. Ofqual\'s guidance says the data should be real, not cleansed by the exam board, and include a mix of categorical and numerical data, and that exam questions should give a material advantage to students who know it. Students do not have the data set in the exam and analyse subsets with a calculator. Modern Age Coders teaches data science live and online to UK teenagers aged 14 to 18 and adults: Python and pandas, cleaning and joining real data, summary statistics, charts, sampling, correlation and first machine learning models. Sixth formers can explore their own board\'s large data set in code as a teaching resource; we never work on anything submitted for assessment. The first class is free; afterwards a group place is USD 100 a month and one-to-one lessons USD 150 a month.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for working with data',
    lede: 'Data science for teenagers, data science for adults, and A level maths with its statistics. Each card opens the full syllabus.',
    items: [
      { course: 'data-science-course-for-teens-python-data', code: 'DSU / 01', title: 'Data Science for Teens', note: 'Python, pandas, charts and first machine learning models, for ages 14 to 18 with basic Python.' },
      { course: 'data-science-complete-masterclass-college', code: 'DSU / 02', title: 'Data Science for Adults', note: 'Python, SQL, machine learning and deep learning, for university students, graduates and professionals.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'DSU / 03', title: 'A Level Maths', note: 'Pure, mechanics and statistics, including work with the large data set.' }
    ]
  },

  sections: [
    {
      id: 'data-set', tint: 'tint', eyebrow: 'The large data set',
      h2: 'Every A level maths student in England is handed real data',
      lede: 'From the DfE\'s subject content for AS and A level mathematics and Ofqual\'s guidance on it. The requirement covers A levels in England.',
      body: [
        { kind: 'table', caption: 'What the specifications must require, as the DfE subject content puts it', head: ['Requirement', 'Wording'], rows: [
          ['Know a data set in advance', '"become familiar with one or more specific large data set(s) in advance of the final assessment"'],
          ['Explore it with technology', '"use technology such as spreadsheets or specialist statistical packages to explore the data set(s)"'],
          ['Read real summaries', '"interpret real data presented in summary or graphical form"'],
          ['Ask real questions', '"use data to investigate questions arising in real contexts"'],
          ['Technology throughout', 'Graphing tools and spreadsheets "must permeate the study of AS and A level mathematics"']
        ] },
        { kind: 'table', mt: true, caption: 'How each board handles it, from its own pages', head: ['Board', 'Large data set arrangement'], rows: [
          ['AQA (7357)', 'A Family Food extract for 2018 and 2019 exams; "For exams from 2020 there is a new dataset", available on AQA\'s site'],
          ['Pearson Edexcel', 'A large data set that supports the assessment of Statistics in Paper 3: Statistics and Mechanics'],
          ['OCR Mathematics A', 'One pre-release data set, used for the life of the specification'],
          ['OCR Mathematics B (MEI)', 'Three large data sets, each updated or replaced on a three-year cycle, with one assessed']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Real, and deliberately messy',
          left: [
            'Ofqual\'s guidance says the data sets "consist of real data", and that "the data may be reorganised into a standard format but should not be cleansed by the awarding organisation". They should include the source where possible, a mix of categorical and numerical data, and be "suitable for analysis using a spreadsheet and/or statistical data package".',
            'Uncleaned real data is the everyday material of data science. A level students meet it at 16.'
          ],
          rightH3: 'Knowing it pays in the exam',
          right: [
            'Ofqual expects questions on the data set to "give a material advantage" to students who have studied it. OCR notes that exam questions set in its context often come with several graphs and more reading than traditional statistics questions.',
            'OCR also says students "should work with real data from many different sources", not only the pre-release set.'
          ] },
        { kind: 'source', html: 'Sources, read 21 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gce-as-and-a-level-mathematics" rel="noopener" target="_blank">DfE, AS and A level mathematics subject content</a>; <a class="ag-inline-link" href="https://assets.publishing.service.gov.uk/media/5a80f51fed915d74e33fd5bc/gce-subject-level-guidance-for-mathematics.pdf" rel="noopener" target="_blank">Ofqual, GCE Subject Level Guidance for Mathematics</a>; <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357/specification/subject-content/use-of-data-in-statistics" rel="noopener" target="_blank">AQA 7357, Use of data in statistics</a>; Pearson Edexcel A level Mathematics specification; OCR support articles on the large data set for Mathematics A and Mathematics B (MEI).' }
      ]
    },
    {
      id: 'middle', tint: 'deep', eyebrow: 'The missing middle',
      h2: 'A spreadsheet in class, a calculator in the exam, and no code at all',
      lede: 'The requirement stops at spreadsheets and statistical packages, and the exam at a calculator. Nothing asks a student to write a line of code, which is why so few do.',
      body: [
        { kind: 'p', html: 'OCR describes the practical side candidly: "The LDS is published as an Excel file to make it easy to extract data for tables and charts", and "Scheduling whole class lessons in computer suites is still an issue for some teachers." In the exam itself, students have no data set and analyse any subset with "a calculator with standard statistical functions", as the DfE content puts it.' },
        { kind: 'table', mt: true, caption: 'Three ways to work with the same data', head: ['', 'Spreadsheet in class', 'Calculator in the exam', 'Python in our course'], rows: [
          ['Size it handles comfortably', 'Thousands of rows', 'A small subset typed in', 'Millions of rows'],
          ['Cleaning', 'By hand, cell by cell', 'Not possible', 'Written once, rerun on every update'],
          ['Repeatable', 'Hard to audit what was clicked', 'Only on paper', 'Every step recorded in code'],
          ['Charts', 'Built-in chart types', 'None', 'Any chart, reproducible'],
          ['Next step', 'More formulas', 'The exam answer', 'Joining data, sampling, models']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the exam does not need code',
          left: [
            'The exam is testing statistical reasoning: what a summary means, whether a sample is fair, whether a correlation says anything. Code would add a skill the qualification does not examine.',
            'That is a fair design choice, and it leaves room for a course that adds the skill deliberately.'
          ],
          rightH3: 'Why a student might want it anyway',
          right: [
            'Running the same analysis in Python forces every assumption into the open. A student who has cleaned the data in code knows exactly which rows were dropped and why, which is the reasoning the exam rewards.',
            'We explore a student\'s own board data set as a teaching resource; we never touch anything submitted for assessment.'
          ] }
      ]
    },
    {
      id: 'skills', tint: 'tint', eyebrow: 'From exam to code',
      h2: 'The A level statistics skills, and what they become in Python',
      lede: 'Each topic in the statistics section has a direct counterpart in data science. Learning them side by side makes both stronger.',
      body: [
        { kind: 'table', caption: 'A level statistics topics and their data science equivalents', head: ['A level topic', 'In Python', 'Why it matters beyond the exam'], rows: [
          ['Sampling methods', 'Random and stratified samples drawn in code', 'Every survey, experiment and model starts with a sample'],
          ['Summary statistics', 'Means, medians, quartiles and spreads computed per group', 'The first look at any new data set'],
          ['Outliers and cleaning', 'Rules for missing values and outliers, written down and applied', 'Decisions others can check and challenge'],
          ['Charts and interpretation', 'Histograms, box plots and scatter plots from the data', 'Showing a result honestly'],
          ['Correlation and regression', 'Correlation coefficients and a fitted line', 'The simplest predictive model'],
          ['Hypothesis testing', 'Tests run on real samples, with the assumptions stated', 'Telling a real effect from noise']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Weather and climate', p: 'Public weather records make a good first project: missing readings, units to convert, and seasons to compare.' },
          { h3: 'Transport and travel', p: 'Public travel and vehicle statistics raise real questions about sampling, grouping and fair comparison.' },
          { h3: 'Your own question', p: 'The strongest projects start from something the student actually wants to know, with public data to test it.' }
        ] },
        { kind: 'p', mt: true, html: 'Public data sets from UK government sources are free to use for projects. Students keep their notebooks and code in their own repository, and every chart they publish says where its data came from, the same habit Ofqual asks boards to follow by including sources.' }
      ]
    },
    {
      id: 'beyond', tint: '', eyebrow: 'Beyond A level',
      h2: 'Data science for adults, and for students not taking A level maths',
      lede: 'Nobody needs A level maths to start. The course meets learners where they are.',
      body: [
        { kind: 'table', caption: 'Routes into data science', head: ['You are', 'A sensible route'], rows: [
          ['A sixth former taking A level maths', 'Python basics, then Data Science for Teens alongside the statistics course'],
          ['A teenager who codes but does not take maths', 'Data Science for Teens, with the statistics taught as needed'],
          ['An adult who lives in spreadsheets', 'Data Analysis: Excel, SQL, then Python'],
          ['An adult aiming at data roles', 'Data Science for Adults, from Python to machine learning'],
          ['Someone who wants models without code first', 'The Orange visual machine learning course, then Python']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Data and AI',
          left: [
            'Modern AI is built on data, and understanding how data is sampled, cleaned and labelled is the strongest defence against trusting a model too much.',
            'Our pages on <a class="ag-inline-link" href="/learn-to-train-ai-not-just-prompt-it-uk">training AI, not just prompting it</a> and <a class="ag-inline-link" href="/build-real-ai-projects-uk">building real AI projects</a> take this further.'
          ],
          rightH3: 'Maths support alongside',
          right: [
            'Students who find the statistics hard can study A level maths with us as well, with the large data set covered as part of the course.',
            'For university students using data in any subject, <a class="ag-inline-link" href="/coding-for-university-students-uk">coding for university students</a> maps useful coding by degree.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages in data science',
    lede: 'Start at the stage your current skills put you in.',
    table: { caption: 'From loading a file to a first model', head: ['Stage', 'What should be true'], rows: [
      ['1. Load and look', 'You load a real data file in Python and describe what it contains'],
      ['2. Clean and summarise', 'You handle missing values and outliers by stated rules and compute group summaries'],
      ['3. Chart and question', 'You chart the data honestly and test a question with a sample'],
      ['4. Model and explain', 'You fit a first model, measure how well it does and explain its limits']
    ] },
    left: { h3: 'Stage two is where honesty lives', ps: [
      'Every cleaning decision changes the answer, so each one is written down.',
      'The wider sequence of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Stage four needs stage two', ps: [
      'A model trained on carelessly cleaned data is confidently wrong.',
      'Measuring a model means admitting where it fails.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for data work',
    lede: 'Data science itself, the maths and tools under it, and where it leads.',
    bands: [
      { num: 'I', h3: 'Data science', sub: 'By age', courses: [
        { code: 'DSU / DS / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Python, pandas and first models, ages 14 to 18.' },
        { code: 'DSU / DS / 02', slug: 'data-science-complete-masterclass-college', title: 'Data Science for Adults', blurb: 'Python, SQL, machine learning and deep learning.' },
        { code: 'DSU / DS / 03', slug: 'data-analysis-mastery-course-college', title: 'Data Analysis', blurb: 'Excel, SQL, Python and dashboards for work.' }
      ] },
      { num: 'II', h3: 'Foundations', sub: 'Maths and code', courses: [
        { code: 'DSU / FN / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A Level Maths', blurb: 'Statistics and the large data set, with pure and mechanics.' },
        { code: 'DSU / FN / 02', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The language data science is written in.' },
        { code: 'DSU / FN / 03', slug: 'mysql-mastery-for-teens', title: 'MySQL for Teens', blurb: 'Querying data where it is stored.' }
      ] },
      { num: 'III', h3: 'Where data leads', sub: 'Models and AI', courses: [
        { code: 'DSU / AI / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Python to real models.' },
        { code: 'DSU / AI / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange Visual Machine Learning', blurb: 'Models without code, for ages 13 to 18.' },
        { code: 'DSU / AI / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for Non-Programmers', blurb: 'Answers from data for adults who do not code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons with real data',
    lede: 'Lessons are taught from India, where there is no clock change, so the UK sits four and a half hours behind in British Summer Time and five and a half hours behind in winter. That leaves after-school, evening and weekend slots in UK time.',
    slots: [
      { time: 'After sixth form', l: 'Early evening on weekdays.' },
      { time: 'Evening', l: 'For adults fitting learning around work.' },
      { time: 'Weekend', l: 'Longer sessions for a data project.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'We look at your maths and coding, and pick a route and a first data set.' },
      { h3: 'Small groups', p: 'Five to ten learners at the same level.' },
      { h3: 'One to one', p: 'For a faster pace or a particular project.' },
      { h3: 'Notebooks you keep', p: 'Every analysis is saved in your own repository.' },
      { h3: 'Sources on every chart', p: 'Students record where each data set came from.' },
      { h3: 'Nothing assessed', p: 'We never work on anything you submit to a school, college or university.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Four finished projects from our students. The full collection, across ages and subjects, is in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What our students and their families wrote on Google, unchanged.',

  fees: {
    h2: 'Fees for data science',
    lede: 'Charged monthly in US dollars, at one rate for learners anywhere outside India. There is no joining fee, and you can stop when any month ends. The software we use is free.',
    free: ['A look at your maths and coding', 'A route and a first data set', 'No payment details needed'],
    group: ['Five to ten learners at one level', 'The same teacher each week', 'Real data in every lesson', 'Stop at the end of any month'],
    one: ['A teacher for you alone', 'Built around your own data question', 'Paced to suit you']
  },

  faq: {
    eyebrow: 'Questions about data science',
    h2: 'What UK learners ask about data science',
    items: [
      { q: 'What is the large data set in A level maths?', a: 'A real data set each exam board provides in advance, which the DfE requires students to explore using technology. Exam questions are set in its context, but students do not have the data set in the exam.' },
      { q: 'Is the large data set cleaned?', a: 'No. Ofqual\'s guidance says it may be reorganised into a standard format but should not be cleansed by the exam board, so missing values and quirks remain.' },
      { q: 'Does A level maths teach coding?', a: 'No. The requirement is for technology such as spreadsheets or statistical packages, and the exam uses a calculator. Coding is an extra skill that our course adds.' },
      { q: 'Can you help my child with the large data set?', a: 'Yes, as a teaching resource: we can explore it in Python and discuss what it shows. We never work on anything submitted for assessment.' },
      { q: 'Do I need A level maths for data science?', a: 'No. Teenagers can start with basic Python, and adults can begin with our data analysis course. Statistics is taught as it is needed.' },
      { q: 'Which language do you use?', a: 'Python, with pandas for data and plotting libraries for charts, plus SQL for querying databases in the adult courses.' },
      { q: 'What age is the teen course for?', a: 'Data Science for Teens is for ages 14 to 18 and expects basic Python. Younger or newer coders start with Python for Teens.' },
      { q: 'Can I learn data science as an adult with no coding?', a: 'Yes. Our data analysis course starts with Excel and SQL before Python, and a non-programmers course covers data and AI without code.' },
      { q: 'What does it cost?', a: 'The first class is free. After that it is USD 100 a month in a group or USD 150 a month one to one, with no enrolment fee.' },
      { q: 'When can I have lessons?', a: 'Weekday evenings or weekends in UK time, fixed in the free class. Our teachers are four and a half hours ahead of the UK in summer and five and a half in winter.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Maths, AI and the coding around data.',
    items: [
      { href: '/learn-to-train-ai-not-just-prompt-it-uk', label: 'Learn to train AI, not just prompt it', p: 'Where data meets models.' },
      { href: '/build-real-ai-projects-uk', label: 'Build real AI projects', p: 'Projects that use what data science teaches.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online', p: 'The language underneath.' },
      { href: '/coding-for-university-students-uk', label: 'Coding for university students', p: 'Data skills for any degree.' },
      { href: '/best-coding-classes-for-teens-uk', label: 'Coding classes for teens', p: 'How we teach teenagers.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Bring a data question to a free class',
    lede: 'Leave a number and we will call at a UK time that suits you. Tell us your maths and coding level and a question you would like data to answer; the class starts there.',
    readFirst: 'Would you like to read first? See the <a class="ag-inline-link" href="/courses">full course list</a>, <a class="ag-inline-link" href="/how-we-teach">how lessons are taught</a>, and <a class="ag-inline-link" href="/student-labs">work students have finished</a>.',
    note: 'WhatsApp from a UK phone is often quickest. Our team is in India, so the number begins +91, and we have no UK office.',
    formNote: 'A free class, with only a phone number asked for.'
  },

  footer: {
    cols: [
      { h4: 'Data and AI', links: [
        { href: '/learn-to-train-ai-not-just-prompt-it-uk', label: 'Learn to train AI' },
        { href: '/build-real-ai-projects-uk', label: 'Real AI projects' },
        { href: '/coding-for-university-students-uk', label: 'University students' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' },
        { href: '/best-python-classes-online-uk', label: 'Python classes online' },
        { href: '/best-coding-classes-for-teens-uk', label: 'Coding for teens' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Real data, cleaned honestly, analysed in code'
  },

  personalityCss: `
.ag-root.ag-dsu .ag-hero h1 { letter-spacing: -0.022em; font-weight: 690; }
.ag-root.ag-dsu .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-dsu .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-dsu .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-dsu .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-dsu .ag-band-head h3 { letter-spacing: -0.011em; }
`,

  mustMention: ['large data set', 'A level maths', 'Ofqual', 'should not be cleansed', 'spreadsheets', 'calculator', 'Python', 'pandas', 'AQA', 'Edexcel', 'OCR', 'MEI'],

  dossier: {
    curriculumAuthority: 'England, A level mathematics. DfE GCE AS and A level subject content for mathematics, paragraphs 8 to 10: technology "must permeate the study of AS and A level mathematics"; students must "become familiar with one or more specific large data set(s) in advance of the final assessment (these data must be real and sufficiently rich...)", "use technology such as spreadsheets or specialist statistical packages to explore the data set(s)", "interpret real data presented in summary or graphical form", "use data to investigate questions arising in real contexts"; subsets analysed "using a calculator with standard statistical functions". Ofqual GCE Subject Level Guidance for Mathematics (April 2016): real data "should not be cleansed by the awarding organisation"; sources included where possible; categorical and numerical mix; "suitable for analysis using a spreadsheet and/or statistical data package"; questions give "a material advantage". AQA 7357: Family Food for 2018 and 2019; "For exams from 2020 there is a new dataset." Edexcel: LDS supports Paper 3 Statistics and Mechanics. OCR A: LDS for the life of the spec; OCR B (MEI): three LDS on a three-year cycle; "Students will not have access to the data set in the exam". OCR blog: "The LDS is published as an Excel file..."; computer suite scheduling issue.',
    localProject: 'A level maths already hands every student real, uncleaned data. The page sets out the DfE large data set requirement and Ofqual\'s interpretation, the four boards\' arrangements, the gap between a spreadsheet in class and a calculator in the exam with no code required, a topic-by-topic map from A level statistics to Python, and routes for adults and non-maths students. Board data sets are explored only as teaching resources; nothing assessed is touched. Lesson family: a qualification\'s data requirement read as the on-ramp to a technical skill it stops short of.',
    requiredMentions: ['large data set', 'should not be cleansed', 'calculator', 'Python'],
    sources: [
      { claim: 'DfE, GCE AS and A level subject content for mathematics: technology and large data set requirements.', url: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/516949/GCE_AS_and_A_level_subject_content_for_mathematics_with_appendices.pdf' },
      { claim: 'Ofqual, GCE Subject Level Guidance for Mathematics: interpretation of large data sets and questions.', url: 'https://assets.publishing.service.gov.uk/media/5a80f51fed915d74e33fd5bc/gce-subject-level-guidance-for-mathematics.pdf' },
      { claim: 'AQA 7357, Use of data in statistics: Family Food 2018 and 2019, new dataset from 2020.', url: 'https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357/specification/subject-content/use-of-data-in-statistics' },
      { claim: 'Pearson Edexcel A level Mathematics specification: LDS for Paper 3.', url: 'https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf' },
      { claim: 'OCR support, Mathematics A large data set: life of the specification; no access in the exam.', url: 'https://support.ocr.org.uk/hc/en-gb/articles/360036136812-AS-and-A-Level-Mathematics-A-What-is-the-Use-of-data-in-statistics-requirement-i-e-the-use-of-a-large-data-set-in-A-Level-Maths' },
      { claim: 'OCR support, Mathematics B (MEI) large data sets: three sets, three-year cycle.', url: 'https://support.ocr.org.uk/hc/en-gb/articles/360035948052-AS-and-A-Level-Mathematics-B-What-is-the-Use-of-data-in-statistics-requirement-i-e-the-use-of-a-large-data-set-in-A-Level-Maths' },
      { claim: 'OCR blog, A Level Maths: the introduction of the Large Data Set: Excel file; computer suite scheduling.', url: 'https://www.ocr.org.uk/blog/alevel-maths-introduction-of-the-large-data-set/' }
    ],
    rejectedClaims: [
      'The contents of the current AQA and Edexcel data sets (vehicles, weather): seen only in search summaries or third-party sites, so the boards are described without naming the data.',
      'Wales and Northern Ireland A level maths arrangements: not read, so the requirement is described for England only.',
      'The Level 3 data science and AI qualification the government will explore: already quoted on the AI for kids page, so only the maths route is used here.',
      'Any help with assessed work: refused; board data sets are used only as teaching resources.',
      'Data science salary or job figures: not read for this build.'
    ]
  }
};
