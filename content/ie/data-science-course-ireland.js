'use strict';
// Data science course, Ireland (ag- door, Ireland cluster, Phase 2).
// Facts read at primary sources on 16 September 2026: data.gov.ie states
// "22720 Datasets 143 Publishers" on its homepage, and its CKAN package_search
// API returned the same 22,720, while organization_list returned 174
// organisations, which probably includes publishers with no datasets: the page
// uses 143 as the portal's own figure and treats the difference as a counting
// lesson. The portal's licence page states that data is associated with the
// Creative Commons Attribution licence at a minimum, with a set attribution
// sentence. The Open Data Strategy 2023-2027 is quoted for its aim and for its
// own dataset count of "almost 15,000" from "160 data publishers", which is now
// out of date and is used to make that point. Some Irish public data carries
// narrower terms, and the PSRA's published re-use conditions for the property
// register are quoted as the example, without using any data from that register
// on this page, because those conditions forbid use for the principal purpose
// of advertising or promoting a product or service. Signature dataset: CSO
// table CPM01, Consumer Price Index, 62,608 rows, November 1975 to December
// 2025, updated 15 January 2026, whose single value column mixes seven units:
// six index bases and a per cent column; for All items in December 2025 the
// eight published values are 104.2, 126.2, 127.8, 133.4, 157.4, 186.1, 0.5 and
// 2.8, and a naive mean of the whole column returns a meaningless 104.8. PEA01
// belongs to the Python page and the Met Eireann station file to the AI
// projects page. No inflation commentary and no economic advice.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'DATA SCIENCE', blurb: 'Data science taught on Ireland\'s open data portal, including how to read a licence and how to spot a column that mixes units.' },
  slug: 'data-science-course-ireland',
  code: 'dsi',
  accent: '#336627',
  accentRationale: 'Data science, Ireland: a deep leaf green from the solver, separated from the Irish flag greens and from every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Data science course, Ireland',
  title: 'Data Science Course in Ireland | Live Online Classes',
  description: 'A data science course for learners in Ireland, taught on Ireland\'s own open data: cleaning, licences, analysis and honest charts. Live online, first class free.',
  ogDescription: 'Ireland publishes over 22,000 open datasets. Knowing which you may use, and what each column actually means, is most of the job.',
  twitterDescription: 'Data science taught live on Irish open data: cleaning, licences and analysis you can defend. First class free.',
  pageName: 'Data Science Course in Ireland',
  webPageDescription: 'A data science course for learners in Ireland built on the national open data portal: what is published, how it is licensed, and a worked example of a table whose single value column mixes seven different units.',
  courseDescription: 'Live online data science classes for learners in Ireland: Python and SQL for data, cleaning and joining real public datasets, statistics, charts and machine learning, taught in small groups or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'Data science, Ireland',
  navLinks: [
    { href: '#portal', label: 'Ireland\'s open data' },
    { href: '#licence', label: 'Reading a licence' },
    { href: '#units', label: 'One column, seven units' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Data science &middot; Live online',
  h1: 'Data science course in Ireland',
  lede: 'Data science is taught almost everywhere as modelling, and practised almost everywhere as cleaning. The gap between those two is where beginners lose months. This course closes it by working on Ireland\'s own public data from the first week: the national portal lists more than twenty-two thousand datasets from government bodies, councils, agencies and the Central Statistics Office, and almost all of it is free to use if you follow the licence. Working with it teaches the things a tidy training dataset never can, starting with two questions every professional asks before writing a line of analysis. Am I allowed to publish anything derived from this? And does this column mean what its name suggests? This page shows both questions being answered on real Irish data, and explains how we teach the craft, live and in small groups, to teenagers, students and adults.',
  secondaryCta: { href: '#units', label: 'See a column that lies' },
  wa: 'Hello Modern Age Coders, I am in Ireland and would like a free first data science class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; taught on Ireland\'s own public data',
  spec: [
    ['For', 'Teens, students and adults'],
    ['Tools', 'Python, pandas, SQL, charts'],
    ['Starts with', 'Cleaning, not modelling'],
    ['Includes', 'Licences and attribution'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Hours', 'Evenings and weekends, Irish time'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'A data science course should spend its time where the work is: finding data, checking whether you may use it, understanding what each column means, cleaning it, and only then analysing. We teach that on Ireland\'s open data portal, which lists over twenty-two thousand datasets, most of them under a Creative Commons Attribution licence. Students learn Python and pandas, SQL, charts that do not mislead, and the statistics needed to say how sure they are. Classes are live, in groups of five to ten at one level or one to one. The first class is free, then USD 100 a month in a group or USD 150 a month with a teacher to yourself.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three ways into data science',
    lede: 'One full course, one for people who do not yet code, one for secondary students. Each card opens its syllabus.',
    items: [
      { course: 'data-science-complete-masterclass-college', code: 'DATA / 01', title: 'Data Science Masterclass', note: 'The complete path for students and adults: Python and pandas, cleaning, statistics, visualisation and a first machine learning model.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'DATA / 02', title: 'Data and AI Analytics for Non-Programmers', note: 'For people whose work is already full of spreadsheets and who need answers before they need a programming language.' },
      { course: 'data-science-course-for-teens-python-data', code: 'DATA / 03', title: 'Data Science for Teens', note: 'Secondary students working with real public data, learning to question a figure before they chart it.' }
    ]
  },

  sections: [
    {
      id: 'portal', tint: 'tint', eyebrow: 'Ireland\'s open data',
      h2: 'What Ireland actually publishes, and how to count it',
      lede: 'The national portal is the obvious starting point, and it contains a small lesson in careful counting before you have downloaded anything at all.',
      body: [
        { kind: 'table', caption: 'Ireland\'s open data portal, data.gov.ie', head: ['Measure', 'Figure', 'Where it comes from'], rows: [
          ['Datasets', '22,720', 'Stated on the portal homepage'],
          ['Datasets, counted through the portal\'s own API', '22,720', 'The CKAN package search endpoint, which agrees exactly'],
          ['Publishers', '143', 'Stated on the portal homepage'],
          ['Organisations listed by the API', '174', 'The CKAN organisation list, which probably includes bodies with no datasets'],
          ['Datasets when the current strategy was written', '"almost 15,000" from "160 data publishers"', 'Open Data Strategy 2023 to 2027']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two counts of the same thing',
          left: [
            'The portal says 143 publishers; its own interface for machines lists 174 organisations. Neither is wrong. They count different things, and the gap is almost certainly bodies that have an account but have published nothing.',
            'A student\'s first instinct is to pick the bigger number. The professional instinct is to say which count you used and why, in a footnote nobody will read but everybody would miss.'
          ],
          rightH3: 'And a figure that aged',
          right: [
            'The government strategy that governs all this was published in 2023 and says the portal holds "almost 15,000" datasets from "160 data publishers". Today the portal itself says 22,720.',
            'Quoting the strategy as current would understate the portal by about a third. Every document has a date, and the date is part of the fact.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://data.gov.ie/" rel="noopener" target="_blank">data.gov.ie</a> and its CKAN API; <a class="ag-inline-link" href="https://data.gov.ie/docs/Open.Data.Strategy_FINAL_ENG.pdf" rel="noopener" target="_blank">Open Data Strategy 2023 to 2027</a>. The strategy also states an aim of "Creating easy access to high quality government data, promoting trust and stimulating innovation."' }
      ]
    },
    {
      id: 'licence', tint: 'deep', eyebrow: 'Reading a licence',
      h2: 'May you actually use it? The question most courses skip',
      lede: 'Open does not mean unconditional, and the conditions differ between publishers. This is a five-minute check that saves a project.',
      body: [
        { kind: 'two',
          leftH3: 'The portal default',
          left: [
            'data.gov.ie states that data and metadata linked from it "will be associated with the Creative Commons Attribution (CC-BY) Licence, at a minimum", and that public bodies may waive copyright entirely where that is appropriate.',
            'It even supplies the sentence to use: "Contains Irish Public Sector Data licensed under a Creative Commons Attribution 4.0 International (CC BY 4.0) licence". Attribution is the price of the data, and it costs one line.'
          ],
          rightH3: 'Not everything matches it',
          right: [
            'Some registers published by Irish bodies sit outside that default. The Property Services Regulatory Authority, for example, allows free re-use of its property register subject to conditions including "Not use the information in a misleading way" and "Not use the information for the principal purpose of advertising or promoting a particular product or service".',
            'That is a perfectly reasonable condition, and it is the reason no figure from that register appears anywhere on this page, even though it is one of the most interesting datasets in the country to analyse. Read the terms, then decide.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Check before you download', p: 'The licence is on the dataset page, not in the file. Two minutes there beats discovering a restriction after you have built something on it.' },
          { h3: 'Record the version', p: 'Note the download date and the file as it was that day. Public datasets are revised, and a result that cannot be reproduced is not a result.' },
          { h3: 'Attribute properly', p: 'Name the publisher, the dataset and the licence wherever a derived figure is published, and say whether you changed the data.' }
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://data.gov.ie/pages/opendatalicence" rel="noopener" target="_blank">data.gov.ie open data licence</a>; <a class="ag-inline-link" href="https://www.psr.ie/re-use-of-public-sector-information/" rel="noopener" target="_blank">PSRA, re-use of public sector information</a>, read 16 September 2026. Nothing here is legal advice; the licence on the dataset you download is the one that binds you.' }
      ]
    },
    {
      id: 'units', tint: 'tint', eyebrow: 'One column, seven units',
      h2: 'The average of this column is 104.8, and it means nothing',
      lede: 'Table CPM01 holds Ireland\'s Consumer Price Index: 62,608 rows of monthly figures from November 1975 to December 2025. It has one column called value, and that column is not measuring one thing.',
      body: [
        { kind: 'table', caption: 'What sits in the single value column of CSO table CPM01', head: ['Kind of row', 'What it is'], rows: [
          ['Index, base December 2023 equals 100', 'An index number, one of six different bases in the same column'],
          ['Index, bases from November 1996 to December 2016', 'Five further historical bases, all index numbers, none comparable with another'],
          ['Percentage change over one month', 'A percentage, in the same column as the indices'],
          ['Percentage change over twelve months', 'Another percentage, again in the same column']
        ] },
        { kind: 'two', mt: true,
          left: [
            'For all items in December 2025 the table publishes eight values: 104.2, 126.2, 127.8, 133.4, 157.4, 186.1, then 0.5 and 2.8. The first six are the same month expressed against six different base years; the last two are percentage changes.',
            'Average the whole column and you get 104.8. It is an average of index points and percentages together, which is like averaging a temperature and a shoe size.'
          ],
          right: [
            'The fix is one line: filter on the statistic label, or the unit, before any arithmetic. The habit behind it is bigger. Before averaging anything, ask what a single row means, and check that every row means the same thing.',
            'Students do this with the real file, get the absurd number themselves, then rebuild the analysis properly. It is far more memorable than being warned about it.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://data.cso.ie/table/CPM01" rel="noopener" target="_blank">CSO table CPM01, Consumer Price Index</a>, read 16 September 2026; the table was last updated on 15 January 2026. The arithmetic above is ours, and is the exercise students repeat. Nothing here is commentary on inflation.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs',
    h2: 'Five rungs of data work',
    lede: 'Notice how late modelling arrives. That ordering is deliberate, and it matches how the job is actually done.',
    table: { caption: 'The data science route', head: ['Rung', 'What the learner can do'], rows: [
      ['1. Find and check', 'Locate a dataset, read its licence, notes and units'],
      ['2. Clean', 'Load messy files, fix types, handle blanks and document each decision'],
      ['3. Join and aggregate', 'Combine sources and group without double counting'],
      ['4. Show', 'Make charts that answer a question without misleading'],
      ['5. Model and judge', 'Fit a model, measure it against a baseline, and state its limits']
    ] },
    left: { h3: 'Why cleaning comes first', ps: [
      'Most working data scientists spend the bulk of their time on rungs one to three. A course that skips them produces people who can only work on data somebody else prepared.',
      'How this connects to programming and AI is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Tools we teach', ps: [
      'Python with pandas as the main tool, SQL for anything in a database, and plain charts. Spreadsheet users are welcome and often move fastest.',
      'For learners who prefer a visual tool first, the Orange courses cover the same ideas without code.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses for data work',
    lede: 'By starting point. The free first class decides which course fits.',
    bands: [
      { num: 'I', h3: 'Getting started', sub: 'No code required to begin', courses: [
        { code: 'DS / START / 01', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI Analytics for Non-Programmers', blurb: 'Answers from data, without a language first.' },
        { code: 'DS / START / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange Data Mining for Teens', blurb: 'Visual analysis, real concepts.' },
        { code: 'DS / START / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Public data, questioned properly.' }
      ] },
      { num: 'II', h3: 'The craft', sub: 'Python, SQL and statistics', courses: [
        { code: 'DS / CRAFT / 01', slug: 'data-science-complete-masterclass-college', title: 'Data Science Masterclass', blurb: 'Cleaning, analysis and a first model.' },
        { code: 'DS / CRAFT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data Analysis Mastery', blurb: 'Turning messy files into clear answers.' },
        { code: 'DS / CRAFT / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL Masterclass', blurb: 'SQL for data that lives in a database.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Models and automation', courses: [
        { code: 'DS / MORE / 01', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'Models trained and evaluated honestly.' },
        { code: 'DS / MORE / 02', slug: 'orange-data-mining-machine-learning-course-for-college-students', title: 'Orange Data Mining for College', blurb: 'Machine learning you can see working.' },
        { code: 'DS / MORE / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI Automation', blurb: 'Running the analysis without you.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Live classes with real files open',
    lede: 'Lessons are live, with teachers working from India at a weekly hour set in Irish time. India keeps one clock all year while Ireland changes twice, so our teachers are four and a half hours ahead of you during Irish summer time and five and a half hours ahead through the winter. Most adults choose an evening slot.',
    slots: [
      { time: 'Evening', l: 'Working adults and college students, Irish time.' },
      { time: 'Weekend', l: 'Longer analysis sessions.' },
      { time: 'After school', l: 'Secondary students on the teen courses.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'You open a genuine dataset with a teacher and see what the first ten minutes of real work look like.' },
      { h3: 'Five to ten per group', p: 'Learners at one level, comparing how each of them cleaned the same file.' },
      { h3: 'One to one', p: 'For work projects, theses, or data you cannot share with a group.' },
      { h3: 'Public data throughout', p: 'Everything is done on datasets anyone can download, so every result can be checked.' },
      { h3: 'Licences taken seriously', p: 'Students learn to record source, licence and download date as a matter of habit.' },
      { h3: 'Charts that tell the truth', p: 'Axes, baselines and scales are taught as ethics, not decoration.' }
    ]
  },

  projectsH2: 'Analyses our students published',
  projectsLede: 'Four student projects, live online. More of them, across every subject we teach, are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews left on Google by our students and their families, published here word for word.',

  fees: {
    h2: 'Fees',
    lede: 'One price a month in US dollars, the same in every country outside India, covering any course on this page. No enrolment charge, and no commitment past the month you are in.',
    free: ['A real dataset opened with a teacher', 'An honest view of where to start', 'No card required'],
    group: ['Five to ten learners at one level', 'The same teacher throughout', 'Work reviewed each week', 'A certificate at the end'],
    one: ['A teacher to yourself', 'Your own data and questions', 'Right for work projects']
  },

  faq: {
    eyebrow: 'Questions',
    h2: 'What learners in Ireland ask about data science',
    items: [
      { q: 'Do I need to be able to code first?', a: 'No. One of our courses is built for people who do not code at all, and the main masterclass teaches the Python you need as you go.' },
      { q: 'How much maths does data science need?', a: 'Less than people fear to start with. Averages, percentages and a feel for uncertainty carry you a long way; the rest is taught when a problem needs it.' },
      { q: 'Where can I get Irish data to practise on?', a: 'The national portal at data.gov.ie lists over twenty-two thousand datasets, and the CSO publishes its statistical tables openly as well. Check each dataset\'s licence before publishing anything derived from it.' },
      { q: 'Is Irish public data free to use commercially?', a: 'Usually, under Creative Commons Attribution, which is the portal\'s stated minimum. Some registers set extra conditions, so read the terms on the dataset page. This is not legal advice.' },
      { q: 'Python or R?', a: 'We teach Python, because it is what most Irish employers advertise for and because it carries on into automation and AI work.' },
      { q: 'Will I finish with something to show?', a: 'Yes. Every student finishes an analysis on public data, with the code, the cleaning decisions and an honest write-up in their own repository.' },
      { q: 'Is this suitable for a teenager?', a: 'Yes, from about thirteen on the teen course, which uses the same public data and the same habits at a gentler pace.' },
      { q: 'What does it cost?', a: 'The first class is free. After that a group place is USD 100 a month and one-to-one lessons are USD 150 a month, in US dollars, with no enrolment fee.' },
      { q: 'When do classes run?', a: 'Evenings, weekends or after school, at a weekly hour agreed in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.' },
      { q: 'What happens after I send the form?', a: 'We call you at a sensible Irish hour and set up the free class. Nothing is charged unless you decide to continue.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Before and after data science.',
    items: [
      { href: '/best-python-classes-online-ireland', label: 'Best Python classes online in Ireland', p: 'The language this runs on.' },
      { href: '/build-real-ai-projects-ireland', label: 'Build real AI projects in Ireland', p: 'When the analysis becomes a model.' },
      { href: '/learn-to-train-ai-not-just-prompt-it-ireland', label: 'Learn to train AI, not just prompt it', p: 'Training, properly evaluated.' },
      { href: '/best-coding-classes-for-adults-ireland', label: 'Best coding classes for adults in Ireland', p: 'Starting from scratch.' },
      { href: '/full-stack-software-development-course-ireland', label: 'Full stack software development', p: 'Where the data is stored.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' }
    ]
  },

  start: {
    h2: 'Open a real dataset in a free class',
    lede: 'Leave a number and we will ring at a time that suits you in Ireland. In the free class you open a genuine Irish dataset with a teacher, find its first problem, and see how a professional handles it.',
    readFirst: 'Want to read first? There is <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, the <a class="ag-inline-link" href="/courses">full course list</a>, and <a class="ag-inline-link" href="/student-labs">work our students published</a>.',
    note: 'WhatsApp costs nothing from an Irish number and tends to get the fastest reply. It is an Indian number, since our team is in India, and we have no premises in Ireland.',
    formNote: 'No card, no commitment, one call.'
  },

  footer: {
    cols: [
      { h4: 'Data', links: [
        { href: '/build-real-ai-projects-ireland', label: 'Build real AI projects' },
        { href: '/best-python-classes-online-ireland', label: 'Python classes' },
        { href: '/learn-to-train-ai-not-just-prompt-it-ireland', label: 'Learn to train AI' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Ireland', links: [
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/ai-and-machine-learning-classes-in-ireland', label: 'AI classes in Ireland' },
        { href: '/best-coding-classes-for-adults-ireland', label: 'Coding for adults' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Data science on Ireland\'s public data'
  },

  personalityCss: `
.ag-root.ag-dsi .ag-hero-grid { gap: clamp(1.26rem, 3.12vw, 2.84rem); }
.ag-root.ag-dsi .ag-hero h1 { letter-spacing: -0.0185em; }
.ag-root.ag-dsi .ag-capsule { border-left-width: 8px; }
.ag-root.ag-dsi .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-dsi .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-dsi .ag-band-head h3 { letter-spacing: -0.0055em; }
.ag-root.ag-dsi .ag-spec dt { letter-spacing: 0.122em; }
.ag-root.ag-dsi .ag-slots { gap: 1.19rem; }
`,

  mustMention: ['22,720', '143', '174', 'almost 15,000', 'Creative Commons Attribution', 'Contains Irish Public Sector Data', 'principal purpose of advertising', 'CPM01', '62,608', '104.2', '186.1', '104.8']
};
