'use strict';
// Build real AI projects, Netherlands (ag- topic door, national).
// Spine: a project is real when its data is real, its constraints are
// respected and its limits are written down. Three Dutch public sources,
// each read at its own page on 15 September 2026: data.overheid.nl, the
// Dataregister van de Nederlandse Overheid (26,986 search results across
// datasets, services, applications and organisations; open and closed data);
// CBS StatLine (every table as open data; catalogue service, standard OData
// API capped at 10,000 cells per request, feed with no record maximum; OData
// 3, OData 4 in development); the KNMI Data Platform (10-minute and daily
// observations, the HARMONIE weather model, CC BY 4.0 with attribution).
// Rotterdam owns forecasting, Amsterdam owns documentation of algorithms;
// this page owns licences, API limits and reproducibility.

module.exports = {
  cluster: 'ag',
  slug: 'build-real-ai-projects-netherlands',
  code: 'brp',
  accent: '#367500',
  accentRationale: 'Projects door: a leaf green from the solver, more than thirty-four units from every page it links to, the academy pages, the teens and college doors and both Dutch oranges among them, with an unlinked town as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'Build real AI projects, Netherlands',
  title: 'Build Real AI Projects in the Netherlands | Live Online',
  description: 'Build real AI projects on Dutch open data, from CBS StatLine to KNMI weather, with licences, limits and results handled properly. Live online, first lesson free.',
  ogDescription: 'Tens of thousands of Dutch government datasets, every CBS table as open data, and KNMI weather observations every ten minutes. Learn to turn them into AI projects that hold up. Live online.',
  twitterDescription: 'Real AI projects on real Dutch data, taught live online. First lesson free.',
  pageName: 'Build Real AI Projects in the Netherlands',
  webPageDescription: 'Live online classes in which learners in the Netherlands build AI and data projects on real Dutch open data, from CBS StatLine and KNMI weather observations to government datasets, and publish them properly.',
  courseDescription: 'A live online project programme for learners in the Netherlands: Python, data handling, machine learning and publishing, built around real Dutch open data and the licences, limits and records that make a project trustworthy.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and Python Academy, Netherlands', href: '/ai-and-python-academy-netherlands' }],
  crumbLabel: 'Real AI projects',
  navLinks: [
    { href: '#data', label: 'Dutch open data' },
    { href: '#rules', label: 'Three constraints' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; Project work &middot; Live online',
  h1: 'Build real AI projects in the Netherlands',
  lede: 'A tutorial project uses a tidy dataset that someone else cleaned years ago, answers a question nobody asked and ends when the notebook does. A real project is different in three ways: the data comes from somewhere that matters, the rules that come with that data are respected, and the result is written up so that someone else could check it. The Netherlands makes the first part unusually easy. The national statistics office publishes every one of its StatLine tables as open data, the meteorological institute publishes weather observations taken every ten minutes, and the government\'s data register lists tens of thousands of entries. The other two parts, the licences and limits and the honest write-up, are what we teach. This page is for learners in the Netherlands, from confident teenagers to working adults, who want to build AI projects on real Dutch data, live online and in English.',
  secondaryCta: { href: '#rules', label: 'See the three constraints' },
  wa: 'Hello Modern Age Coders, I would like a free lesson on building real AI projects with Dutch data.',
  heroNote: 'Live classes since 2020 &middot; more than 10,000 learners &middot; projects built with a teacher, never alone with a video',
  spec: [
    ['Data', 'CBS StatLine, KNMI, data.overheid.nl'],
    ['Skills', 'Python, APIs, cleaning, models, publishing'],
    ['Standard', 'Licences respected, limits measured'],
    ['For', 'Confident teens, students, adults'],
    ['Format', 'Live video with a teacher'],
    ['Groups', 'Five to ten, or one to one'],
    ['Language', 'English'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches learners in the Netherlands to build AI and data projects on real Dutch open data, live online. Learners fetch data from CBS StatLine, the KNMI Data Platform and the government data register, clean it, model it and publish the result with its licence, its limits and its sources written down. Teenagers usually start once they can write Python; students and adults can start at any rung. Groups hold five to ten learners at one level, or lessons are one to one. The opening lesson is free; after it a group place is USD 100 a month and one-to-one lessons USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for project builders',
    lede: 'A data course for teenagers, a full data science course for students and adults, and an automation course for turning a project into something that runs by itself. Each card opens its own syllabus and timetable.',
    items: [
      { course: 'data-science-course-for-teens-python-data', code: 'PROJ / 01', title: 'Data Science for Teens', note: 'A teenager fetches a real CBS table, cleans it, plots it and builds a first model, then writes down what the data cannot say.' },
      { course: 'data-science-complete-masterclass-college', code: 'PROJ / 02', title: 'Data Science Course', note: 'Statistics, SQL, APIs and modelling for students and adults, ending in a portfolio project on public data that an employer can open and rerun.' },
      { course: 'python-ai-automation-masterclass-college', code: 'PROJ / 03', title: 'Python and AI Automation', note: 'Scheduled scripts that fetch new observations, refresh a model and publish the result, so a project keeps working after the lesson ends.' }
    ]
  },

  sections: [
    {
      id: 'data', tint: 'tint', eyebrow: 'Dutch open data',
      h2: 'Real projects start with real data, and the Netherlands publishes a great deal of it',
      lede: 'Three public sources carry most of our learners\' projects. Each was read at its own page on 15 September 2026, and each comes with rules of its own.',
      body: [
        { kind: 'table', caption: 'Three Dutch open data sources and the rule each one brings', head: ['Source', 'What it offers', 'How learners reach it', 'The rule to respect'], rows: [
          ['data.overheid.nl, the Dataregister van de Nederlandse Overheid', 'The national register of government data, listing both open and closed data; its search showed 26,986 results across datasets, data services, applications and organisations', 'Search the register, then follow each entry to its publisher', 'Check each dataset\'s own licence and whether it is open at all'],
          ['CBS StatLine', 'Every StatLine table from the national statistics office, published as open data', 'A catalogue service, a standard API and a feed, built on OData 3 with OData 4 in development', 'The standard API returns at most 10,000 cells per request; larger downloads go through the feed'],
          ['KNMI Data Platform', '10-minute observations, hourly to yearly ground-based weather observations, and the HARMONIE weather model', 'Datasets in the platform\'s catalogue, downloaded through its APIs', 'CC BY 4.0: users must state that the data comes from the KNMI']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The breadth matters for learners. A teenager interested in climate can work with ten-minute weather observations. A student interested in housing, work or population can pull CBS tables for every municipality. An adult interested in their own sector can search the government register for what their ministry or province publishes.',
            'None of these sources was designed for a school project, which is exactly why they teach so well. The columns have official names, the units are stated, the documentation is written for professionals, and the data arrives with the quirks real data has.'
          ],
          right: [
            'Each source also brings a rule, and meeting it is part of the project rather than an obstacle to it. A learner who has respected an attribution licence, designed around an API limit and checked whether a dataset is actually open has learned more about working with data than any clean practice set could teach.',
            'The same approach runs through the city academy pages: <a class="ag-inline-link" href="/ai-and-python-academy-amsterdam">Amsterdam</a> reads the public algorithm register, and <a class="ag-inline-link" href="/ai-and-python-academy-rotterdam">Rotterdam</a> scores forecasts against what happened.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://data.overheid.nl/" rel="noopener" target="_blank">data.overheid.nl</a>; <a class="ag-inline-link" href="https://www.cbs.nl/nl-nl/onze-diensten/open-data/statline-als-open-data" rel="noopener" target="_blank">CBS, StatLine als open data</a>; <a class="ag-inline-link" href="https://www.knmidata.nl/open-data" rel="noopener" target="_blank">KNMI Data Platform, open data</a>. Read 15 September 2026; counts and services may change after that date. We have no connection with any of these organisations.' }
      ]
    },
    {
      id: 'rules', tint: 'deep', eyebrow: 'Three constraints',
      h2: 'Licence, limit and record: the three constraints that make a project real',
      lede: 'Every project on our track is built around the same three questions. They are simple to ask and easy to skip, and skipping them is what turns a real dataset back into a toy.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The licence: may I use this, and how?', p: 'KNMI publishes its open data under CC BY 4.0, which allows reuse on one condition: the user must say that the data comes from the KNMI. The government register lists open and closed data side by side, so each dataset has to be checked before it is used. A learner writes the licence and the attribution into the project before writing any model.' },
          { h3: 'The limit: how much can I ask for at once?', p: 'The standard StatLine API returns at most 10,000 cells in a single request, while the feed has no maximum number of records. A project that needs a large table therefore has to be designed for it: download through the feed, or request the data in pieces and join them. Learning to read an API\'s limits before writing the code is a professional habit worth starting young.' },
          { h3: 'The record: could someone repeat this?', p: 'Public data changes as tables are revised and observations added. A project records which table or dataset it used, when it was downloaded and what was removed during cleaning, and keeps the raw download next to the cleaned version. Without that record, nobody, including the learner a month later, can check the result.' }
        ] },
        { kind: 'table', mt: true, caption: 'Project ideas our learners build on Dutch open data (our own examples)', head: ['Project', 'Data', 'The AI or data step', 'The constraint it teaches'], rows: [
          ['Rain and your own measurements', 'KNMI daily observations joined to data the learner collects', 'A simple model relating weather to the learner\'s variable', 'Attribution under CC BY 4.0'],
          ['A municipality comparison', 'CBS StatLine tables for several municipalities', 'Clustering municipalities by their figures', 'The 10,000-cell API limit'],
          ['A dataset nobody has used yet', 'An entry found on data.overheid.nl', 'Cleaning, a first chart and a baseline model', 'Checking whether the data is open'],
          ['A weekly refresh', 'Any of the above, fetched on a schedule', 'Automation that retrains and republishes', 'Recording versions and download dates']
        ] },
        { kind: 'source', html: 'The rules in this section are quoted from the source pages listed above. The project ideas are our own teaching examples and make no claim about what the data will show.' }
      ]
    },
    {
      id: 'publish', tint: '', eyebrow: 'Publishing',
      h2: 'Finished means published, with its limits written down',
      lede: 'A project on our track is not finished when the model runs. It is finished when a stranger could open it, understand it and rerun it.',
      body: [
        { kind: 'two',
          left: [
            'Every project ends in a public repository with a short write-up: the question, the data and its licence, the steps taken, the result with its error, and the limits, the things the data cannot say. For teenagers, that write-up is often the most impressive part of a university application; for adults, it is the part an employer reads first.',
            'For ideas at school level, see <a class="ag-inline-link" href="/ai-projects-for-high-school-students">AI projects for high school students</a> and <a class="ag-inline-link" href="/science-fair-project-ideas-ai">AI science fair project ideas</a>.'
          ],
          right: [
            'For students and adults, <a class="ag-inline-link" href="/ai-ml-projects-for-students">AI and ML projects for students</a> goes further into model-driven projects, and <a class="ag-inline-link" href="/vibe-coding-projects-for-students">vibe coding projects</a> shows what can be built quickly with AI help, and what still needs checking.',
            'The national <a class="ag-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a> sets out the full ladder that these projects sit on.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs for project builders',
    h2: 'From a first chart to a project that runs by itself',
    lede: 'A good project needs each rung beneath it. The model is the exciting part, but the download, the cleaning and the write-up decide whether anyone should believe it.',
    table: { caption: 'The route from first data to published project', head: ['Rung', 'Usually', 'What the learner can do'], rows: [
      ['1. Python by hand', 'Age 11 and up, or any adult beginner', 'Read a file, loop through it, make a first chart'],
      ['2. Real data', 'Once Python is comfortable', 'Fetch from an API, respect its limits, clean and record'],
      ['3. Models', 'Upper school, students, adults', 'Fit a model, compare it with a baseline, state its error'],
      ['4. Automation', 'After the first model', 'Refresh data and results on a schedule, safely'],
      ['5. Publishing', 'At every stage', 'A repository with licence, sources, results and limits']
    ] },
    left: { h3: 'Why the second rung takes longest', ps: [
      'Fetching and cleaning real data is where most of the time goes, in learner projects and in professional ones. We do not skip it with pre-cleaned files, because that is where the real learning happens.',
      'The order of every subject we teach is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Projects around school and work', ps: [
      'Teenagers often build one project a term, timed around school tests. Adults usually choose a project close to their work and use their own sector\'s public data.',
      'Younger children work with simpler data first, in the kids courses, and reach these projects later.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Ten live courses behind the projects',
    lede: 'Grouped by stage. Each card opens the full course with its own timetable and fee; the free lesson settles where a learner starts.',
    bands: [
      { num: 'I', h3: 'Getting started with data', sub: 'For teenagers and younger learners ready to type', courses: [
        { code: 'PROJ / START / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'For children of nine to twelve: typed Python, small datasets and a first program that learns from examples.' },
        { code: 'PROJ / START / 02', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The Python foundation, including files, loops and functions, that every later project depends on.' },
        { code: 'PROJ / START / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Reading, cleaning and plotting real datasets, then a first model with its error stated.' }
      ] },
      { num: 'II', h3: 'Models and machine learning', sub: 'For upper-school learners, students and adults', courses: [
        { code: 'PROJ / ML / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'From statistics to neural networks, each model trained on real data and compared with a simple baseline.' },
        { code: 'PROJ / ML / 02', slug: 'data-science-complete-masterclass-college', title: 'Data Science Course', blurb: 'Statistics, SQL, APIs, modelling and a portfolio built on public data.' },
        { code: 'PROJ / ML / 03', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'Classical methods to deep learning, with evaluation and deployment given proper weight.' }
      ] },
      { num: 'III', h3: 'Running and publishing projects', sub: 'The skills that keep a project alive', courses: [
        { code: 'PROJ / RUN / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI Automation', blurb: 'Scheduled fetching, retraining and publishing, so a project updates itself.' },
        { code: 'PROJ / RUN / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL Course', blurb: 'Storing downloads and results properly, with versions and dates kept.' },
        { code: 'PROJ / RUN / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub for College Students', blurb: 'Version control and public repositories, the home of every finished project.' },
        { code: 'PROJ / RUN / 04', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'The same habits for teenagers, from the first commit to a public portfolio.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Project lessons, live and hands-on',
    lede: 'Our teachers are in India, where clocks do not change for summer, so they sit three and a half hours ahead of the Netherlands in the Dutch summer and four and a half ahead in winter. Project lessons usually happen in the late afternoon, evening or at the weekend, at a fixed time agreed in the free lesson.',
    slots: [
      { time: 'Late afternoon', l: 'Dutch time, for teenagers building projects after school.' },
      { time: 'Evening', l: 'Dutch time, by arrangement, for students and working adults.' },
      { time: 'Weekend', l: 'Longer sessions on Saturday or Sunday, popular for project work.' }
    ],
    cells: [
      { h3: 'A free project lesson', p: 'The first lesson starts a small project on real data, so both learner and teacher see how the learner works before anything is decided.' },
      { h3: 'Groups of five to ten', p: 'Learners at the same level, often working on different projects with the same data sources, which makes for useful comparison.' },
      { h3: 'One to one for big projects', p: 'For a school profile project, a thesis, a portfolio piece for an application, or an adult\'s work-related project.' },
      { h3: 'Code seen as it is written', p: 'Shared screens mean the teacher catches a wrong join or a missed licence line while it is still easy to fix.' },
      { h3: 'English, with Dutch data', p: 'Lessons are in English, while the data itself often has Dutch column names; learners get used to working across both.' },
      { h3: 'Everything in a repository', p: 'Raw downloads, cleaned data, code, results and the write-up all live in the learner\'s own GitHub repository.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Four live projects built by our students. Try them, then look at how they were made; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'Word for word from Google. We do not write, reward or alter reviews.',

  fees: {
    h2: 'Fees for project learners',
    lede: 'Charged monthly in US dollars, the same in every country outside India. There is no separate project fee, no enrolment charge and no annual contract. Copilot Studio courses, which are taught one to one only, use the one-to-one rate.',
    free: ['A real project lesson', 'Places you at the right rung', 'No card needed'],
    group: ['Five to ten learners at one level', 'The same live teacher throughout', 'Project work reviewed weekly', 'A certificate at the end'],
    one: ['A teacher for your project alone', 'Pace set by your deadline', 'Right for theses and portfolios']
  },

  faq: {
    eyebrow: 'Questions about projects',
    h2: 'What learners ask before building on Dutch data',
    items: [
      { q: 'Is Dutch government data really free to use?', a: 'Much of it is, but not all. KNMI open data is published under CC BY 4.0, which requires crediting the KNMI. The government data register lists open and closed data together, so each dataset\'s own terms must be checked. Our projects always record the licence.' },
      { q: 'What is StatLine?', a: 'The database of the national statistics office, CBS. All its tables are available as open data through a catalogue service, a standard API that returns at most 10,000 cells per request, and a feed for larger downloads.' },
      { q: 'Do I need to read Dutch?', a: 'It helps a little, because many column names are Dutch, but teachers help learners work with them. The lessons themselves are in English.' },
      { q: 'What age is right for these projects?', a: 'Most teenagers are ready once they can write basic Python, usually from about thirteen. Younger children start with simpler data in the kids courses. Students and adults can start at any rung.' },
      { q: 'Can I use a project for school or university?', a: 'Yes. Many learners use one for a profile project, an application portfolio or a thesis. We teach the skills; the work and the conclusions are the learner\'s own.' },
      { q: 'Will my project be public?', a: 'Usually yes, in the learner\'s own GitHub repository, because a published project is worth far more. Learners decide, and nothing personal or confidential is ever published.' },
      { q: 'Is there any connection with CBS, KNMI or the government?', a: 'No. We use their public data under its published terms, like any other user.' },
      { q: 'What does it cost?', a: 'A group place is USD 100 a month and one-to-one lessons are USD 150 a month, billed in US dollars, with no enrolment fee and no yearly contract. The opening lesson is free.' },
      { q: 'When are lessons?', a: 'Late afternoons, evenings or weekends, Dutch time. The teacher is three and a half hours ahead of Dutch summer time and four and a half ahead of winter time.' },
      { q: 'What happens after I send the form?', a: 'We phone at a Dutch hour to set up the first project lesson. It costs nothing, and payment only comes up if you decide to continue.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More on projects and on AI in the Netherlands',
    lede: 'Related pages for project ideas and for the wider route.',
    items: [
      { href: '/ai-projects-for-high-school-students', label: 'AI projects for high school students', p: 'Project ideas pitched at secondary-school level.' },
      { href: '/ai-ml-projects-for-students', label: 'AI and ML projects for students', p: 'Model-driven projects for students.' },
      { href: '/science-fair-project-ideas-ai', label: 'AI science fair project ideas', p: 'Ideas that suit a school fair or profile project.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The national ladder these projects sit on.' },
      { href: '/coding-for-college-students-netherlands', label: 'Coding for college students', p: 'For students building portfolios alongside a degree.' },
      { href: '/coding-classes-for-teens-netherlands', label: 'Coding classes for teens', p: 'For teenagers still building their Python foundation.' }
    ]
  },

  start: {
    h2: 'Start a project in your free lesson',
    lede: 'Leave a number and we will ring at a Dutch hour to fix a time. In the free lesson you start a small project on real Dutch data with a teacher, and by the end you know which rung to build on.',
    readFirst: 'Want to look around first? The <a class="ag-inline-link" href="/student-labs">student labs</a> show finished work, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'From a Dutch phone, a WhatsApp message costs nothing and usually gets the quickest answer. The number is Indian, and we have no office or premises in the Netherlands.',
    formNote: 'No payment details. One call to arrange the first project lesson.'
  },

  footer: {
    cols: [
      { h4: 'Netherlands', links: [
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/coding-classes-for-teens-netherlands', label: 'Coding for teens' },
        { href: '/coding-for-college-students-netherlands', label: 'Coding for students' },
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' }
      ] },
      { h4: 'Projects', links: [
        { href: '/ai-projects-for-high-school-students', label: 'AI projects for high school' },
        { href: '/ai-ml-projects-for-students', label: 'AI and ML projects' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Building projects with learners in the Netherlands on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-brp .ag-hero-grid { gap: clamp(1.2rem, 3.1vw, 2.7rem); }
.ag-root.ag-brp .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-brp .ag-capsule { border-left-width: 5px; }
.ag-root.ag-brp .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-brp .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-brp .ag-table caption { text-align: left; }
.ag-root.ag-brp .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-brp .ag-slots { gap: 1.25rem; }
`,

  mustMention: ['data.overheid.nl', 'Dataregister van de Nederlandse Overheid', '26,986', 'StatLine', '10,000 cells', 'OData 3', 'KNMI Data Platform', 'HARMONIE', 'CC BY 4.0', '10-minute observations']
};
