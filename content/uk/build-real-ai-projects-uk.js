'use strict';
// Build real AI projects, UK (ag- language and track door; UK cluster Phase 3).
// Sources, read raw on 21 September 2026:
//  - Intellectual Property Office on gov.uk, Exceptions to copyright (updated 4 January 2021): text and data mining
//    "is the use of automated analytical techniques to analyse text and data for patterns, trends and other useful
//    information"; researchers may copy material for computational analysis with lawful access; "This exception
//    only permits the making of copies for the purpose of text and data mining for non-commercial research.";
//    "Contract terms that stop researchers making copies to carry out text and data mining will be
//    unenforceable." (Curly-quoted phrases from this page are paraphrased: the raw text carries encoding
//    artefacts.)
//  - The National Archives, Open Government Licence v3.0: "You are encouraged to use and re-use the Information that
//    is available under this licence freely and flexibly, with only a few conditions."; worldwide, royalty-free,
//    perpetual, non-exclusive; may "exploit the Information commercially and non-commercially"; the default
//    attribution statement quoted; exclusions include personal data, logos and third party rights; no official
//    status or endorsement may be implied.
//  - Data Use and Access Act 2025: plans for commencement (gov.uk, updated 5 February 2026): Stage 1 on 20 August
//    2025 included "provisions requiring the government to prepare a progress update and a report on copyright works
//    and artificial intelligence systems". Whether the report has been published is not claimed.
//  - Inspect documentation (inspect.aisi.org.uk): "An open-source framework for large language model evaluations";
//    developed by the UK AI Security Institute and Meridian Labs; building blocks "datasets, agents, tools, and
//    scorers"; "A collection of over 200 pre-built evaluations ready to run on any model."; sandboxing for untrusted
//    model code.
// Spine: in the UK, the first question about an AI project is where its data came from. The text and data mining
// exception covers non-commercial research only; the Open Government Licence allows commercial use with
// attribution; personal data is a separate matter. The last question is how you know it works, and the UK AI
// Security Institute publishes an open evaluation framework anyone can use. The Ireland page's Met Eireann dataset
// is not repeated. Not legal advice, and says so.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'AI PROJECTS', blurb: 'Building real AI projects in the UK: data you may legally use, from the TDM exception to the Open Government Licence, and evaluation with open tools.' },
  slug: 'build-real-ai-projects-uk',
  code: 'rap',
  accent: '#A51D75',
  accentRationale: 'Build real AI projects, UK: a strong magenta from the solver (5.62:1 on every paper tint, dE 8.1 from the nearest used accent), energetic for a building page',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Build real AI projects, UK',
  title: 'Build Real AI Projects in the UK | Live AI Course',
  description: 'Build real AI projects in the UK: data you may legally use, models you train and test, and evaluation with open tools. Teens and adults, first class free.',
  ogDescription: 'The UK\'s text and data mining exception covers non-commercial research only. A real AI project starts by asking where its data came from.',
  twitterDescription: 'Real AI projects for UK learners: lawful data, trained models, honest evaluation with open tools like Inspect. Live online, first class free.',
  pageName: 'Build Real AI Projects in the UK',
  webPageDescription: 'A live online course for UK teenagers and adults building real AI projects, covering UK data rules for training and open evaluation tools.',
  courseDescription: 'Live online AI project building for UK learners: choosing lawful data, training and fine-tuning models in Python, retrieval over licensed documents, and evaluating results with open frameworks.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Real AI projects',
  navLinks: [
    { href: '#data', label: 'Data you may use' },
    { href: '#licence', label: 'Open data' },
    { href: '#evaluate', label: 'Proving it works' },
    { href: '#projects-list', label: 'Project ideas' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; Teens and adults &middot; Python and models',
  h1: 'Build real AI projects in the UK',
  lede: 'A real AI project is mostly two questions that demos skip: where did the data come from, and how do you know it works? In the UK the first has a legal edge. The Intellectual Property Office explains that the copyright exception for text and data mining lets researchers copy material they can lawfully read for computational analysis, but "This exception only permits the making of copies for the purpose of text and data mining for non-commercial research." A school or personal research project may sit inside that; an app you plan to sell does not. Public sector data under the Open Government Licence is different again: you may "exploit the Information commercially and non-commercially", provided you credit the source. The second question has an unusual UK answer too. The UK AI Security Institute co-develops Inspect, "An open-source framework for large language model evaluations", which anyone can install. Our lessons show UK teenagers and adults how to build AI projects that answer both questions: lawful data in, a trained or grounded model in the middle, and a measured result out.',
  secondaryCta: { href: '#data', label: 'Which data you may use' },
  wa: 'Hello Modern Age Coders, I would like a free first class on building real AI projects in the UK.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; AI projects with lawful data and measured results',
  spec: [
    ['Data rule', 'TDM exception: non-commercial research only'],
    ['Open data', 'OGL: commercial use with attribution'],
    ['Personal data', 'A separate question, kept out'],
    ['Models', 'Trained, fine-tuned or grounded by you'],
    ['Evaluation', 'Open tools such as Inspect'],
    ['For', 'Teens and adults'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'In the UK, copyright law includes an exception allowing copies of lawfully accessed material to be made for text and data mining, but only for non-commercial research, and contract terms that forbid such copying are unenforceable, according to the Intellectual Property Office. Public sector information under the Open Government Licence v3.0 may be used commercially and non-commercially with attribution, though the licence excludes personal data, logos and third party rights. Evaluation matters as much as data: the UK AI Security Institute co-develops Inspect, an open-source framework for large language model evaluations with over 200 pre-built evaluations. Modern Age Coders teaches UK teenagers and adults to build real AI projects live and online: choosing lawful data, training and fine-tuning models in Python, grounding assistants in licensed documents, and evaluating results. This is general information, not legal advice. Your first class costs nothing; after that, group places are USD 100 a month and one-to-one teaching USD 150 a month.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three ways into building AI',
    lede: 'Machine learning for teenagers, generative AI engineering for adults, and a project sprint. Each card opens the full syllabus.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'RAP / 01', title: 'AI and Machine Learning for Teens', note: 'Python to real models, for ages 13 to 18, with school maths enough to start.' },
      { course: 'complete-generative-ai-masterclass-college', code: 'RAP / 02', title: 'Generative AI: LLMs, RAG and Agents', note: 'Retrieval, fine-tuning and evaluation for adults, built in Python.' },
      { course: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', code: 'RAP / 03', title: 'Hackathon Prep for Teens', note: 'Scoping, building and presenting an AI project against a clock.' }
    ]
  },

  sections: [
    {
      id: 'data', tint: 'tint', eyebrow: 'Data you may use',
      h2: 'The first question: where did the data come from?',
      lede: 'From the Intellectual Property Office\'s guidance on exceptions to copyright on gov.uk. Training data is where most student AI projects quietly go wrong.',
      body: [
        { kind: 'p', html: 'The IPO describes text and data mining as "the use of automated analytical techniques to analyse text and data for patterns, trends and other useful information", and notes that it usually requires copying the work being analysed. The exception lets researchers make those copies when they already have lawful access to the work, that is, the right to read it. Two limits matter for anyone building AI: "This exception only permits the making of copies for the purpose of text and data mining for non-commercial research", and researchers still have to pay for access where access costs money.' },
        { kind: 'table', mt: true, caption: 'Common data sources for a student AI project, and the question each raises', head: ['Data source', 'The question to ask', 'Usual answer for a learner'], rows: [
          ['Public sector data under the Open Government Licence', 'Have I credited the source as the licence asks?', 'Usable, including commercially, with attribution'],
          ['Texts or images you can lawfully read', 'Is my project non-commercial research?', 'Possibly within the exception; not for a product'],
          ['Datasets published with their own licence', 'What does that licence allow?', 'Read it; many allow research, some forbid commercial use'],
          ['Data you create yourself', 'Does it include anyone else\'s personal data?', 'Usually the cleanest choice'],
          ['Social media posts and profiles', 'Is this personal data about real people?', 'Avoid for learning projects']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A contract cannot switch it off',
          left: [
            'The IPO adds that "Contract terms that stop researchers making copies to carry out text and data mining will be unenforceable." Publishers may still use reasonable measures to protect their networks.',
            'That protects research. It does not turn a research project into permission to build a commercial product on the same material.'
          ],
          rightH3: 'The law is still being discussed',
          right: [
            'The Data (Use and Access) Act 2025 included "provisions requiring the government to prepare a progress update and a report on copyright works and artificial intelligence systems", which came into force in August 2025.',
            'Anyone planning to commercialise a model trained on other people\'s work should take proper legal advice. This page, and the course, give general information only.'
          ] },
        { kind: 'source', html: 'Sources, read 21 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/guidance/exceptions-to-copyright" rel="noopener" target="_blank">Intellectual Property Office, Exceptions to copyright</a>; <a class="ag-inline-link" href="https://www.gov.uk/guidance/data-use-and-access-act-2025-plans-for-commencement" rel="noopener" target="_blank">Data Use and Access Act 2025: plans for commencement</a>. Not legal advice.' }
      ]
    },
    {
      id: 'licence', tint: 'deep', eyebrow: 'Open data',
      h2: 'The Open Government Licence: data built to be reused',
      lede: 'Much UK public sector information is published under the Open Government Licence v3.0, maintained by The National Archives. It is the most generous licence a learner is likely to meet.',
      body: [
        { kind: 'table', caption: 'What the Open Government Licence v3.0 allows and excludes', head: ['', 'As the licence states'], rows: [
          ['The spirit', '"You are encouraged to use and re-use the Information that is available under this licence freely and flexibly, with only a few conditions."'],
          ['The grant', 'A worldwide, royalty-free, perpetual, non-exclusive licence'],
          ['Commercial use', 'You may "exploit the Information commercially and non-commercially", including in your own product or application'],
          ['The main condition', 'Acknowledge the source; the default statement is "Contains public sector information licensed under the Open Government Licence v3.0."'],
          ['Not covered', 'Personal data, logos and crests, third party rights, other intellectual property such as trade marks'],
          ['No endorsement', 'You may not suggest official status or that the provider endorses your use']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why it suits AI projects',
          left: [
            'Because commercial use is allowed, a model or app trained on OGL data can keep going after the course, as long as every use keeps the attribution.',
            'Students learn to put the attribution statement in the project README and the app itself from the first commit.'
          ],
          rightH3: 'What to check first',
          right: [
            'Not everything on a government website is OGL. Each dataset states its own licence, and some include third party material the government cannot license.',
            'And the licence never covers personal data, which brings in data protection law instead.'
          ] },
        { kind: 'source', html: 'Source, read 21 September 2026: <a class="ag-inline-link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="noopener" target="_blank">The National Archives, Open Government Licence v3.0</a>.' }
      ]
    },
    {
      id: 'evaluate', tint: 'tint', eyebrow: 'Proving it works',
      h2: 'The last question: how do you know it works?',
      lede: 'A demo shows a model working once. An evaluation shows how often it works, on cases chosen before the results were known.',
      body: [
        { kind: 'p', html: 'The UK AI Security Institute, with Meridian Labs, develops Inspect, described in its documentation as "An open-source framework for large language model evaluations". It is built from "datasets, agents, tools, and scorers", ships "A collection of over 200 pre-built evaluations ready to run on any model", and can run untrusted model code in a sandbox. It is used for serious frontier model testing, and it is free for a student to install and learn.' },
        { kind: 'table', mt: true, caption: 'An evaluation in four parts, and what a student writes for each', head: ['Part', 'What it is', 'In a student project'], rows: [
          ['Dataset', 'The test cases, with the answers you expect', 'Thirty to a hundred real examples, written before looking at results'],
          ['Solver or agent', 'How the model is asked, with any tools', 'The prompt, retrieval step or fine-tuned model being tested'],
          ['Scorer', 'How each answer is marked', 'Exact match, a rubric, or a second model with its own checks'],
          ['Report', 'The score, and where it fails', 'A pass rate, the failures listed, and what changed between runs']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Classical machine learning too',
          left: [
            'For models trained from scratch, the same idea appears as a held-out test set: data the model never saw in training, used only once to measure it.',
            'Students learn why accuracy alone can mislead, and when precision, recall or a confusion matrix tell the real story.'
          ],
          rightH3: 'Honest numbers',
          right: [
            'A project that reports 60% on a fair test is better work than one that reports 99% on the data it was trained on. The course rewards the first.',
            'How models learn and are assured is also covered on <a class="ag-inline-link" href="/learn-to-train-ai-not-just-prompt-it-uk">learn to train AI, not just prompt it</a>.'
          ] },
        { kind: 'source', html: 'Source, read 21 September 2026: <a class="ag-inline-link" href="https://inspect.aisi.org.uk/" rel="noopener" target="_blank">Inspect documentation</a>, UK AI Security Institute and Meridian Labs. We are not connected with either organisation.' }
      ]
    },
    {
      id: 'projects-list', tint: '', eyebrow: 'Project ideas',
      h2: 'Projects that answer both questions',
      lede: 'Each one names its data source and its evaluation before any code is written.',
      body: [
        { kind: 'table', caption: 'Starter AI projects', head: ['Project', 'Data', 'How it is evaluated'], rows: [
          ['A guidance assistant', 'Public guidance pages published under the Open Government Licence, credited', 'Fifty questions with known answers from the pages, scored for accuracy and citation'],
          ['A handwritten digit or leaf classifier', 'A public benchmark dataset, or photos the student takes', 'A held-out test set and a confusion matrix'],
          ['A local air quality forecaster', 'Public environmental monitoring data under an open licence', 'Error on months the model never saw'],
          ['A study-notes quiz generator', 'The student\'s own notes', 'A rubric marking whether each question is answerable from the notes'],
          ['A text classifier for research', 'Texts the student can lawfully read, for a non-commercial project', 'Precision and recall on a labelled sample']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Written before coding', p: 'Each project starts with a one-page plan: the data, its licence, the test set and what counts as success.' },
          { h3: 'Kept in the open', p: 'Code and results live in the student\'s own repository, with attribution statements where licences require them.' },
          { h3: 'Presented honestly', p: 'Every project ends with a short write-up of what the model gets wrong, not only what it gets right.' }
        ] },
        { kind: 'p', mt: true, html: 'Younger learners start gently: our <a class="ag-inline-link" href="/ai-classes-for-kids-uk">AI classes for kids</a> build the ideas behind this. Students who want an audience can take a finished project to <a class="ag-inline-link" href="/student-hackathons-uk">a student hackathon</a> or the <a class="ag-inline-link" href="/uk-olympiad-in-artificial-intelligence-preparation">UK Olympiad in Artificial Intelligence</a>. We never work on coursework, NEA or anything submitted for assessment.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages to a real AI project',
    lede: 'Where you begin depends on your Python and maths, not your age.',
    table: { caption: 'From using a model to building and measuring one', head: ['Stage', 'What should be true'], rows: [
      ['1. Data first', 'You can find a dataset, read its licence and describe what is in it'],
      ['2. A first model', 'You train a simple model in Python and understand every line'],
      ['3. Grounded or fine-tuned', 'You build a retrieval assistant or fine-tune a model on lawful data'],
      ['4. Measured', 'You evaluate on a fair test set, report the failures and improve the score honestly']
    ] },
    left: { h3: 'Stage one is not optional', ps: [
      'A brilliant model on data you may not use is not a finished project.',
      'The wider sequence of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Stage four is the proof', ps: [
      'The evaluation is what turns a demo into evidence.',
      'It is also what employers and competition judges look for first.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for building AI',
    lede: 'From first models to generative AI engineering, and the data skills underneath.',
    bands: [
      { num: 'I', h3: 'Machine learning', sub: 'By age', courses: [
        { code: 'RAP / ML / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'The first step, for younger learners.' },
        { code: 'RAP / ML / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Python to real models, ages 13 to 18.' },
        { code: 'RAP / ML / 03', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning for Adults', blurb: 'Models, evaluation and deployment.' }
      ] },
      { num: 'II', h3: 'Generative AI', sub: 'Engineering, not prompting', courses: [
        { code: 'RAP / GEN / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'Retrieval, fine-tuning and evaluation.' },
        { code: 'RAP / GEN / 02', slug: 'artificial-intelligence-complete-masterclass-college', title: 'Artificial Intelligence Masterclass', blurb: 'The wider field, from search to neural networks.' },
        { code: 'RAP / GEN / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'AI Projects for Teens', blurb: 'Python, web and AI projects, reviewed line by line.' }
      ] },
      { num: 'III', h3: 'Data and delivery', sub: 'Under and around the model', courses: [
        { code: 'RAP / DAT / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Cleaning and exploring the data first.' },
        { code: 'RAP / DAT / 02', slug: 'data-science-complete-masterclass-college', title: 'Data Science for Adults', blurb: 'Python, SQL and machine learning.' },
        { code: 'RAP / DAT / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon Prep for Teens', blurb: 'Building and presenting under time pressure.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons around a real project',
    lede: 'Classes come from India, which never changes its clocks. Against the UK that means a four and a half hour gap in summer and five and a half in winter, so weekday evenings and weekends in UK time are easy to schedule.',
    slots: [
      { time: 'After school or work', l: 'A weekday evening session.' },
      { time: 'Saturday', l: 'A longer block for training runs.' },
      { time: 'Sunday', l: 'For evaluation and write-ups.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'We check your Python and maths and agree a first project with you.' },
      { h3: 'Small groups', p: 'Between five and ten learners, grouped by ability.' },
      { h3: 'One to one', p: 'For a competition deadline or a particular idea.' },
      { h3: 'Licence checked', p: 'No dataset is used until its licence has been read and recorded.' },
      { h3: 'Evaluation built in', p: 'A test set is written before the model is judged.' },
      { h3: 'Your own accounts', p: 'Code, data notes and results stay in your own repository.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Four projects completed by our students. The rest, across every age group, are in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews on Google from our students and their families, shown as written.',

  fees: {
    h2: 'Fees for AI projects',
    lede: 'Billed monthly in US dollars, at the same rate for every country outside India, with no joining charge and no commitment past the current month. Most tools used are free; any paid AI service is your own choice and your own account.',
    free: ['A look at your Python and maths', 'A first project agreed with you', 'Nothing to pay that day'],
    group: ['Five to ten learners at one level', 'The same teacher each week', 'Data and evaluation reviewed', 'Stop at the end of any month'],
    one: ['One teacher, one learner', 'Your own project at the centre', 'Suits a competition deadline']
  },

  faq: {
    eyebrow: 'Questions about AI projects',
    h2: 'What UK learners ask about building AI',
    items: [
      { q: 'Can I train an AI model on anything I find online?', a: 'Not safely. The UK text and data mining exception covers copies made for non-commercial research from material you can lawfully access. Commercial projects need data licensed for that use. This is general information, not legal advice.' },
      { q: 'What is the Open Government Licence?', a: 'A licence from The National Archives for public sector information, allowing commercial and non-commercial reuse with attribution. It excludes personal data, logos and third party rights.' },
      { q: 'Can a website stop me text and data mining for research?', a: 'The IPO says contract terms that stop researchers making copies to carry out text and data mining will be unenforceable, though publishers may use reasonable measures to protect their networks.' },
      { q: 'What is Inspect?', a: 'An open-source framework for large language model evaluations, developed by the UK AI Security Institute and Meridian Labs, with over 200 pre-built evaluations. We use tools like it to teach evaluation; we are not connected with either organisation.' },
      { q: 'Do I need to be good at maths?', a: 'School maths is enough to start the teen course. The maths grows with the projects, and it is taught as needed.' },
      { q: 'Which language is used?', a: 'Python throughout, with standard machine learning and data libraries.' },
      { q: 'Can younger children build AI projects?', a: 'Younger learners start with Python and AI for Kids, which builds the ideas step by step before full projects.' },
      { q: 'Do you help with school coursework?', a: 'No. We never work on coursework, NEA or anything submitted for assessment. Projects are separate and the student\'s own.' },
      { q: 'How much are lessons?', a: 'Nothing for the first class. Then a group place is USD 100 a month and one-to-one teaching USD 150 a month, and nothing is charged for joining.' },
      { q: 'What time of day are classes?', a: 'Usually a weekday evening, or a longer weekend block for training runs, set in UK time at the first class. India is four and a half hours ahead of British Summer Time and five and a half ahead in winter.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Training, data and competitions around AI.',
    items: [
      { href: '/learn-to-train-ai-not-just-prompt-it-uk', label: 'Learn to train AI, not just prompt it', p: 'How models are measured and assured.' },
      { href: '/data-science-course-uk', label: 'Data science course', p: 'The data skills underneath every model.' },
      { href: '/uk-olympiad-in-artificial-intelligence-preparation', label: 'UK Olympiad in Artificial Intelligence', p: 'A competition for AI projects.' },
      { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids', p: 'Where younger learners start.' },
      { href: '/ai-agents-course-for-students-uk', label: 'AI agents for students', p: 'Agents as portfolio evidence.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Bring an AI idea to a free class',
    lede: 'Leave a number and we will call at a UK time that suits you. Bring an idea; the class checks your level and turns it into a plan with a data source and a test.',
    readFirst: 'Reading first? Every <a class="ag-inline-link" href="/courses">course page</a> lists its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> sets out the approach, and <a class="ag-inline-link" href="/student-labs">student labs</a> gathers finished projects.',
    note: 'WhatsApp from a UK number is usually the fastest way to reach us. We are based in India, so our number starts +91; there is no UK office.',
    formNote: 'Free, and only a phone number needed.'
  },

  footer: {
    cols: [
      { h4: 'AI', links: [
        { href: '/learn-to-train-ai-not-just-prompt-it-uk', label: 'Learn to train AI' },
        { href: '/data-science-course-uk', label: 'Data science' },
        { href: '/uk-olympiad-in-artificial-intelligence-preparation', label: 'UK AI Olympiad' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' },
        { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids' },
        { href: '/student-hackathons-uk', label: 'Student hackathons' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Lawful data in, a measured result out'
  },

  personalityCss: `
.ag-root.ag-rap .ag-hero h1 { letter-spacing: -0.024em; font-weight: 700; }
.ag-root.ag-rap .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-rap .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-rap .ag-table caption { text-align: left; font-weight: 660; }
.ag-root.ag-rap .ag-table th:first-child { width: 28%; }
.ag-root.ag-rap .ag-spec dt { letter-spacing: 0.098em; }
`,

  mustMention: ['text and data mining', 'non-commercial research', 'Open Government Licence', 'attribution', 'Inspect', 'AI Security Institute', 'evaluation', 'Python', 'personal data'],

  dossier: {
    curriculumAuthority: 'United Kingdom, AI project data and evaluation. IPO, Exceptions to copyright (updated 4 January 2021): TDM definition quoted; lawful access; "This exception only permits the making of copies for the purpose of text and data mining for non-commercial research."; "Contract terms that stop researchers making copies to carry out text and data mining will be unenforceable." The National Archives, OGL v3.0: encouragement line quoted; worldwide, royalty-free, perpetual, non-exclusive; "exploit the Information commercially and non-commercially"; default attribution statement quoted; exclusions (personal data, logos, third party rights, other IP); no implied endorsement. DUAA commencement: Stage 1 (20 August 2025) "provisions requiring the government to prepare a progress update and a report on copyright works and artificial intelligence systems". Inspect: "An open-source framework for large language model evaluations"; UK AI Security Institute and Meridian Labs; "datasets, agents, tools, and scorers"; "over 200 pre-built evaluations"; sandboxing.',
    localProject: 'In the UK, the first question about an AI project is where its data came from, and the last is how you know it works. The page explains the text and data mining exception (non-commercial research, lawful access, contract override), the Open Government Licence (commercial reuse with attribution, exclusions), a source-by-source table of what a learner may use, and evaluation with the AISI-developed Inspect framework and held-out test sets, then lists starter projects that each name data and evaluation up front. Not legal advice; no affiliation with AISI, Meridian Labs or The National Archives. Lesson family: data licensing and evaluation treated as the two halves of a real AI project.',
    requiredMentions: ['text and data mining', 'Open Government Licence', 'Inspect', 'non-commercial research'],
    sources: [
      { claim: 'IPO on gov.uk, Exceptions to copyright: text and data mining exception and contract override.', url: 'https://www.gov.uk/guidance/exceptions-to-copyright' },
      { claim: 'The National Archives, Open Government Licence v3.0: grant, commercial use, attribution statement, exclusions.', url: 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/' },
      { claim: 'gov.uk, Data Use and Access Act 2025: plans for commencement: Stage 1 AI and copyright report provisions.', url: 'https://www.gov.uk/guidance/data-use-and-access-act-2025-plans-for-commencement' },
      { claim: 'Inspect documentation: open-source LLM evaluation framework from the UK AI Security Institute and Meridian Labs.', url: 'https://inspect.aisi.org.uk/' }
    ],
    rejectedClaims: [
      'Whether the government has published its AI and copyright report: not checked, so not claimed.',
      'Any legal conclusion about a specific project or dataset: the page gives general information and says so.',
      'Any affiliation with the UK AI Security Institute, Meridian Labs or The National Archives: denied.',
      'Specific named datasets and their licences for the project table: described generically so that each licence is read by the student.',
      'Any help with coursework or NEA: refused.'
    ]
  }
};
