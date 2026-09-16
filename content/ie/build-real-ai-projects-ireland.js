'use strict';
// Build real AI projects, Ireland (ag- door, Ireland cluster, Phase 2).
// Signature dataset measured on 16 September 2026: Met Eireann daily data for
// Dublin Airport, station file dly532.csv, published on data.gov.ie under
// Creative Commons Attribution 4.0, with Met Eireann's five required
// accreditation statements. Measured facts: 30,924 daily rows from 1 January
// 1942 to 31 August 2026 with no gaps or duplicate dates; 44 header lines
// before the column header; missing values stored as a single space, so eleven
// numeric columns load as text and isna() reports zero missing, while dropna()
// cuts 30,924 rows to 16,977 and silently starts the data on 28 October 1979;
// 13,116 rows have rain equal to 0.0 and 5,460 of those carry rain indicator 2,
// which Met Eireann's key defines as "trace or sum of precipitation"; the
// label threshold changes the class counts (rain above 0: 17,808 days; at least
// 0.2 mm: 16,109; at least 1.0 mm: 11,144); a time split at 1 January 2015
// gives a test set that is 36.5% wet, so always guessing dry scores 0.635, an
// honest logistic regression scores 0.667, and adding tomorrow's soil moisture
// deficit change, a leaked feature, scores 0.923. The 1 mm and 0.2 mm
// thresholds are our own naming, not Met Eireann definitions. Seasonality is
// mild and is not presented as a trap. The data science page owns CPM01 and the
// open data portal facts; the Python page owns PEA01.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'AI PROJECTS', blurb: 'Building AI projects on real Irish data, including how to tell an honest result from a leaked one.' },
  slug: 'build-real-ai-projects-ireland',
  code: 'bra',
  accent: '#0B764D',
  accentRationale: 'AI projects, Ireland: a deep emerald from the solver, separated from the Irish flag greens and from every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Build real AI projects, Ireland',
  title: 'Build Real AI Projects in Ireland | Live Online Classes',
  description: 'Build real AI projects in Ireland on open Irish data: train a model, test it honestly and find the leaks. Live online classes for teens and adults, first free.',
  ogDescription: 'A model that scores 92% is usually cheating. Here is a real Irish dataset, an honest 67%, and how to tell the difference.',
  twitterDescription: 'Real AI projects on Irish open data, taught live: training, evaluation and the leaks that fake good results.',
  pageName: 'Build Real AI Projects in Ireland',
  webPageDescription: 'Live online classes for building genuine AI projects in Ireland: real Met Eireann data, a model trained and evaluated honestly, a measured demonstration of data leakage, and the habits that separate a finished project from a demo.',
  courseDescription: 'Live online AI project classes for learners in Ireland: data cleaning, baselines, training, evaluation, leakage and honest reporting, built on open Irish datasets into finished projects.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and machine learning classes in Ireland', href: '/ai-and-machine-learning-classes-in-ireland' }],
  crumbLabel: 'Build real AI projects, Ireland',
  navLinks: [
    { href: '#dataset', label: 'A real dataset' },
    { href: '#leak', label: 'The leak' },
    { href: '#honest', label: 'An honest result' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; AI projects &middot; Teens and adults',
  h1: 'Build real AI projects in Ireland',
  lede: 'Most AI projects you see online are demonstrations. A clean dataset goes in, a model comes out with an impressive accuracy, and nobody asks what the number means. A real project is different, and much more useful: you choose a question, find data that might answer it, discover the data is untidy in ways nobody documented, build a baseline, train something, and then spend the rest of your time trying to prove your own result wrong. This page walks through one such project on Irish data anybody can download, weather records from Dublin Airport going back to 1942. Along the way it shows a model scoring 92%, explains why that score is worthless, and shows the honest version scoring 67% against a baseline of 63.5%. If that sounds like a let-down, it is the single most valuable thing an AI learner can understand, and it is what our project classes teach.',
  secondaryCta: { href: '#leak', label: 'See the leak' },
  wa: 'Hello Modern Age Coders, I am in Ireland and would like a free first class on building real AI projects.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; projects that survive questioning',
  spec: [
    ['For', 'Teens, students and adults'],
    ['Builds', 'One finished, tested project'],
    ['Teaches', 'Baselines and honest evaluation'],
    ['Catches', 'Leakage and bad labels'],
    ['Data', 'Open Irish datasets'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'A real AI project starts with a question and a baseline, not a model. Our project classes use open Irish data, teach cleaning and labelling first, and treat evaluation as the main event: what does the model beat, by how much, and could the result be an accident? Learners see a measured example of data leakage, where an innocent-looking feature lifts accuracy from 0.667 to 0.923 because it could only be known after the event. Classes are live, in groups of five to ten or one to one, for teenagers, students and adults. The first is free; then it is USD 100 a month in a group or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that end in a finished project',
    lede: 'One for teenagers, one for college students and adults, one for the data itself. Each card opens its syllabus.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'PROJECT / 01', title: 'AI and Machine Learning for Teens', note: 'Models a teenager trains, tests and explains, ending with a project they can show and defend to anyone who asks.' },
      { course: 'ai-ml-masterclass-complete-college', code: 'PROJECT / 02', title: 'AI and Machine Learning Masterclass', note: 'For college students and adults: the full path from data cleaning to evaluation, with the statistics done properly.' },
      { course: 'data-science-complete-masterclass-college', code: 'PROJECT / 03', title: 'Data Science Masterclass', note: 'The data half of the work, which is where most projects are won or lost long before a model is trained.' }
    ]
  },

  sections: [
    {
      id: 'dataset', tint: 'tint', eyebrow: 'A real dataset',
      h2: 'Eighty-four years of Irish weather, and its hidden problems',
      lede: 'Met Éireann publishes daily records for Dublin Airport as a single file, free to use under a Creative Commons Attribution 4.0 licence. It is an ideal first project, and it is not clean.',
      body: [
        { kind: 'table', caption: 'Met Éireann daily data, Dublin Airport (station file dly532)', head: ['Aspect', 'What the file holds'], rows: [
          ['Rows', '30,924 daily records, 1 January 1942 to 31 August 2026, with no gaps and no duplicate dates'],
          ['Header', '44 lines of station details and a column key before the data begins'],
          ['Columns', 'Temperatures, rainfall, wind, sunshine, soil and evaporation, plus six separate indicator columns all named ind'],
          ['Licence', 'Creative Commons Attribution 4.0, with five accreditation statements Met Éireann asks you to reproduce']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Trap 1: nothing is missing', p: 'Missing values are stored as a single space, so a standard load returns eleven numeric columns as text and reports zero missing values. Asking for an average raises an error instead of a warning.' },
          { h3: 'Trap 2: dropping rows loses 37 years', p: 'Convert those blanks properly and drop incomplete rows and 30,924 becomes 16,977. Worse, the data now silently starts on 28 October 1979, because some instruments began later than others.' },
          { h3: 'Trap 3: zero is not dry', p: '13,116 days show rainfall of 0.0, but 5,460 of them carry the indicator Met Éireann defines as "trace or sum of precipitation". A trace of rain is recorded as zero.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Before a model exists, the learner has already made three decisions that will govern the result: how to read blanks, which rows to keep, and what counts as a wet day. None of them is in a tutorial, and all of them change the answer.',
            'The label question is the sharpest. Counting any rain gives 17,808 wet days; a threshold of 0.2 mm gives 16,109; a threshold of 1 mm gives 11,144. Those are three different questions wearing the same name.'
          ],
          right: [
            'We make students write their choices down before training anything, with a sentence of justification each. It takes ten minutes and it is what separates a project from a demonstration.',
            'The thresholds above are our own naming rather than official definitions, which is exactly the kind of thing a project write-up has to say out loud.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://data.gov.ie/dataset/dublin-airport-daily-data" rel="noopener" target="_blank">Dublin Airport Daily Data</a>, published by Met Éireann on data.gov.ie under Creative Commons Attribution 4.0, with the <a class="ag-inline-link" href="https://www.met.ie/cms/assets/uploads/2018/05/KeyDaily.txt" rel="noopener" target="_blank">official key to the indicator codes</a>; licence terms at <a class="ag-inline-link" href="https://www.met.ie/about-us/specialised-services/open-data" rel="noopener" target="_blank">Met Éireann open data</a>. Copyright Met Éireann, source met.ie. Met Éireann does not accept any liability whatsoever for any error or omission in the data, their availability, or for any loss or damage arising from their use. The counts above are ours, computed from the file as published and not modified.' }
      ]
    },
    {
      id: 'leak', tint: 'deep', eyebrow: 'The leak',
      h2: 'A model that scores 92%, and why it is worthless',
      lede: 'The question: will tomorrow be wet, given today\'s weather? The data is split by time, training on 1979 to 2014 and testing on 2015 onwards, because a model that has seen the future is not being tested.',
      body: [
        { kind: 'table', caption: 'The same question, three ways', head: ['Approach', 'Accuracy on the test years'], rows: [
          ['Always guess dry, the baseline', '0.635'],
          ['Honest model, using today\'s temperature, rain, cloud, wind, sun and soil moisture', '0.667'],
          ['The same model, plus tomorrow\'s change in soil moisture deficit', '0.923']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The third row looks like a triumph and is a bug. Soil moisture deficit is calculated partly from rainfall, so tomorrow\'s change in it already contains tomorrow\'s rain. The model is being told the answer and then congratulated for repeating it.',
            'Nobody put that feature in the file. A learner builds it themselves, usually while doing something sensible like measuring change over time, and the score jumps so pleasingly that the mistake is easy to keep.'
          ],
          right: [
            'The lesson generalises far beyond weather. A sales model that includes the delivery date, a health model that includes the treatment, a churn model that includes the cancellation email: the shape is always the same, a feature that exists only because the thing you are predicting already happened.',
            'The test is a question, asked of every feature: would I actually have this value at the moment I need to make the prediction? Our students ask it out loud, feature by feature, before they train.'
          ] },
        { kind: 'source', html: 'Measured by us on 16 September 2026 using the published file, a logistic regression and a time-based split at 1 January 2015. The leaked feature was constructed deliberately to demonstrate the effect; the file as published does not contain it.' }
      ]
    },
    {
      id: 'honest', tint: 'tint', eyebrow: 'An honest result',
      h2: 'What a good result actually looks like',
      lede: 'The honest model scores 0.667 against a baseline of 0.635. That is a gain of about three points, and it is a perfectly respectable outcome for one station and one day ahead.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Always quote a baseline', p: 'An accuracy without a baseline means nothing. On this test set, guessing dry every single day is right 63.5% of the time, because 36.5% of days are wet.' },
          { h3: 'Say what you would need to do better', p: 'Weather forecasting uses atmospheric models and many stations. A learner who explains why their single-station model is limited understands more than one who reports a big number.' },
          { h3: 'Report what you tried and dropped', p: 'A project write-up names the features considered, the ones removed as leaks, and the split used. Without those, a result cannot be checked by anyone.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What students finish with',
          left: [
            'A repository containing the data-loading code, the cleaning decisions, the baseline, the model, the evaluation and a short honest write-up. It runs from top to bottom on someone else\'s machine.',
            'That is a portfolio piece an interviewer can actually interrogate, and the questions they ask are the ones the project already answers.'
          ],
          rightH3: 'Where to take it next',
          right: [
            'Other Irish sources make natural follow-ups, and the licence conditions vary, so every project starts with reading them. How Irish open data is licensed is covered on <a class="ag-inline-link" href="/data-science-course-ireland">the data science page</a>.',
            'Students who want to build agents rather than models can go on to <a class="ag-inline-link" href="/ai-agents-course-for-students-ireland">AI agents for students</a> or, at work, <a class="ag-inline-link" href="/ai-agents-course-for-professionals-ireland">agents for professionals</a>.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs',
    h2: 'Five rungs of a real project',
    lede: 'Most learners take three to six months to go from the first rung to a finished, defensible project.',
    table: { caption: 'From a question to a result you can defend', head: ['Rung', 'What the learner does'], rows: [
      ['1. The question', 'States what is being predicted, for whom, and what would count as useful'],
      ['2. The data', 'Loads it properly, reads the notes, and writes down every cleaning decision'],
      ['3. The baseline', 'Measures the dumbest sensible approach, before any model'],
      ['4. The model', 'Trains something simple, splits honestly, and compares against the baseline'],
      ['5. The attack', 'Tries to break their own result, checks for leaks, and writes the limits down']
    ] },
    left: { h3: 'Why simple models first', ps: [
      'A simple model you understand tells you whether the data has any signal in it. Reaching for a complicated one first usually hides the fact that it does not.',
      'How this sits with everything else is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'What we do not do', ps: [
      'We do not run competitions on cleaned datasets, and we do not teach students to chase accuracy numbers. Neither survives contact with real work.',
      'And we never write, edit or review work being submitted for assessment.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses for AI project work',
    lede: 'By stage and age. The free first class sets the starting point.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Before a model makes sense', courses: [
        { code: 'AI / BASE / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'The language every project here is written in.' },
        { code: 'AI / BASE / 02', slug: 'data-science-complete-masterclass-college', title: 'Data Science Masterclass', blurb: 'Cleaning, checking and charting real data.' },
        { code: 'AI / BASE / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'The same habits, at secondary-school pace.' }
      ] },
      { num: 'II', h3: 'Models', sub: 'Trained and evaluated', courses: [
        { code: 'AI / MODEL / 01', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'From regression to evaluation done properly.' },
        { code: 'AI / MODEL / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'A first real model, explained by the student.' },
        { code: 'AI / MODEL / 03', slug: 'orange-data-mining-machine-learning-course-for-college-students', title: 'Orange Data Mining', blurb: 'Visual machine learning for people new to code.' }
      ] },
      { num: 'III', h3: 'Modern AI', sub: 'Beyond a single model', courses: [
        { code: 'AI / NEXT / 01', slug: 'artificial-intelligence-complete-masterclass-college', title: 'Artificial Intelligence Masterclass', blurb: 'The wider field, with its methods and limits.' },
        { code: 'AI / NEXT / 02', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'Language models, grounded and evaluated.' },
        { code: 'AI / NEXT / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI Automation', blurb: 'Putting a working model to use.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Project weeks with a teacher who asks hard questions',
    lede: 'Classes are live with teachers in India, at a fixed weekly hour in Irish time. Their clock never changes and Ireland\'s does twice a year, so they sit four and a half hours ahead of you in summer and five and a half in winter. Project sessions are usually longer, which is why many learners take a weekend slot.',
    slots: [
      { time: 'Weekday evening', l: 'Steady progress, Irish time.' },
      { time: 'Weekend', l: 'Longer blocks for training and analysis.' },
      { time: 'Intensive weeks', l: 'School holidays and quiet work periods.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'You look at a real dataset with a teacher and see how the first decisions are made.' },
      { h3: 'Five to ten per group', p: 'Learners at one level, reviewing each other\'s evaluation as much as their code.' },
      { h3: 'One to one', p: 'For a specific project, a thesis or a portfolio deadline.' },
      { h3: 'Baselines every time', p: 'No model is accepted in class without the baseline it has to beat.' },
      { h3: 'Leak hunting', p: 'Every feature is questioned before training: would you really know this in advance?' },
      { h3: 'A write-up that stands', p: 'Projects finish with an honest account of the method, the result and the limits.' }
    ]
  },

  projectsH2: 'Projects our students defended',
  projectsLede: 'Four published projects by our students. There are many more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from our students and their families, exactly as they were written.',

  fees: {
    h2: 'Fees for project classes',
    lede: 'The same monthly price in US dollars we charge everywhere outside India, whichever course you take. Nothing to pay in advance for a term, and you can stop once a project is finished.',
    free: ['A real dataset opened with a teacher', 'An honest view of your starting point', 'No card taken'],
    group: ['Five to ten learners at one level', 'One teacher across the project', 'Evaluation reviewed weekly', 'A certificate at the end'],
    one: ['A teacher to yourself', 'Your own dataset and question', 'Suited to theses and deadlines']
  },

  faq: {
    eyebrow: 'Questions',
    h2: 'What learners in Ireland ask about AI projects',
    items: [
      { q: 'What makes a project real rather than a demo?', a: 'A question worth asking, data you had to clean yourself, a baseline, an honest split, and a write-up that states the limits. Demos skip most of those.' },
      { q: 'Where do I get Irish data to work on?', a: 'Plenty is published openly. Met Éireann\'s daily station files are a good start, released under a Creative Commons Attribution 4.0 licence with attribution conditions to follow.' },
      { q: 'My model scored 95%. Is that good?', a: 'Check the baseline first, then hunt for leakage. Very high scores on messy real data usually mean a feature is telling the model the answer.' },
      { q: 'What is data leakage, in plain words?', a: 'Using information at training time that you would not have when the prediction is actually needed. It makes results look excellent and makes them useless.' },
      { q: 'Do I need a powerful computer or a GPU?', a: 'No. Everything on this page runs on an ordinary laptop. Heavy hardware matters only for large models, and that is rarely where the learning is.' },
      { q: 'What age is this suitable for?', a: 'From about thirteen for the teen course, provided Python is already comfortable. Younger children build up to it through our data and Python courses.' },
      { q: 'Can I use AI tools while building the project?', a: 'Yes, once you can read the code they produce, and every project records what the tools contributed.' },
      { q: 'What does it cost?', a: 'The first class is free, then USD 100 a month for a group place or USD 150 a month one to one, charged in US dollars, with no enrolment fee.' },
      { q: 'When do classes run?', a: 'Weekday evenings and weekends, at a time set in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.' },
      { q: 'What happens after I send the form?', a: 'We phone you at a reasonable Irish hour and arrange the free class. You are charged nothing unless you carry on.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'The data, the language and the agents.',
    items: [
      { href: '/data-science-course-ireland', label: 'Data science course in Ireland', p: 'Irish open data and its licences.' },
      { href: '/best-python-classes-online-ireland', label: 'Best Python classes online in Ireland', p: 'The language underneath.' },
      { href: '/ai-agents-course-for-students-ireland', label: 'AI agents course for students', p: 'Agents rather than models.' },
      { href: '/ai-agents-course-for-professionals-ireland', label: 'AI agents course for professionals', p: 'The same work, at work.' },
      { href: '/learn-to-train-ai-not-just-prompt-it-ireland', label: 'Learn to train AI, not just prompt it', p: 'Under the tools.' },
      { href: '/ai-and-machine-learning-classes-in-ireland', label: 'AI and machine learning classes in Ireland', p: 'The national AI page.' }
    ]
  },

  start: {
    h2: 'Open a real dataset in a free class',
    lede: 'Leave a number and we will ring at a time that suits you in Ireland. In the free class you open a genuine dataset with a teacher and see the first decisions being made, before any model exists.',
    readFirst: 'Prefer to read first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, the <a class="ag-inline-link" href="/courses">course list</a> and <a class="ag-inline-link" href="/student-labs">projects our students published</a>.',
    note: 'WhatsApp is usually fastest and costs nothing from an Irish number. Ours is an Indian number, because our team works from India, and there is no Irish office.',
    formNote: 'No card details, no commitment, one call.'
  },

  footer: {
    cols: [
      { h4: 'AI work', links: [
        { href: '/data-science-course-ireland', label: 'Data science' },
        { href: '/best-python-classes-online-ireland', label: 'Python classes' },
        { href: '/ai-agents-course-for-students-ireland', label: 'AI agents for students' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Ireland', links: [
        { href: '/ai-and-machine-learning-classes-in-ireland', label: 'AI classes in Ireland' },
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Real projects, honest numbers'
  },

  personalityCss: `
.ag-root.ag-bra .ag-hero-grid { gap: clamp(1.02rem, 3.35vw, 2.92rem); }
.ag-root.ag-bra .ag-hero h1 { letter-spacing: -0.0225em; }
.ag-root.ag-bra .ag-capsule { border-left-width: 4px; }
.ag-root.ag-bra .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-bra .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-bra .ag-band-head h3 { letter-spacing: -0.0025em; }
.ag-root.ag-bra .ag-spec dt { letter-spacing: 0.128em; }
.ag-root.ag-bra .ag-slots { gap: 1.26rem; }
`,

  mustMention: ['30,924', '16,977', '28 October 1979', '5,460', 'trace or sum of precipitation', '17,808', '16,109', '11,144', '0.635', '0.667', '0.923', 'Creative Commons Attribution 4.0']
};
