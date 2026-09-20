'use strict';
// Learn to train AI, not just prompt it (ag- door, national; UK cluster Phase 3, Think group).
// Source: DSIT, "Introduction to AI assurance", published on gov.uk 12 February 2024, foreword by
// Viscount Camrose, then Minister for Artificial Intelligence and Intellectual Property. Read raw from
// gov.uk on 20 September 2026. Verbatim material used:
//  - The measure, evaluate, communicate triad: "Measure: Gathering qualitative and quantitative data on
//    how an AI system functions, to ensure that it performs as intended"; "Evaluate: Activities
//    encompassing techniques to assess the risks and impacts of AI systems and inform further
//    decision-making... evaluating the implications of an AI system against agreed benchmarks set out
//    in standards and regulatory guidelines to identify issues"; "Communicate: A range of communication
//    techniques can be applied to ensure effective communication both within an organisation and
//    externally."
//  - THE SPINE, the six named assurance techniques, quoted as definitions:
//    * "Risk assessment: Used to consider and identify a range of potential risks that might arise from
//      the development and/or deployment of an AI product/ system."
//    * "(Algorithmic) impact assessment: Used to anticipate the wider effects of a system/product on the
//      environment, equality, human rights, data protection, or other outcomes."
//    * "Bias audit: Assesses the inputs and outputs of algorithmic systems to determine if there is
//      unfair bias in the input data, the outcome of a decision or classification made by the system."
//    * "Compliance audit: Involves reviewing adherence to internal policies, external regulations and,
//      where relevant, legal requirements."
//    * "Conformity assessment: The process of conformity assessment demonstrates whether a product or
//      system meets relevant requirements, prior to being placed on the market. Often includes
//      performance testing."
//    * "Formal verification: Formal verification establishes whether a system satisfies specific
//      requirements, often using formal mathematical methods and proofs."
//  - "Given the complexity of AI systems, we require a toolbox of different products, services, and
//    standards to assure them effectively."
//  - "There is a spectrum of AI assurance mechanisms that can, and should, be used in combination with
//    one another across the AI lifecycle."
//  - "When setting metrics, teams should build in rigorous software testing and performance assessment
//    methodologies with comparisons to clear performance benchmarks."
//  - The guide's own scope note: it "focuses on the underlying concepts of AI assurance rather than
//    technical detail".
// Spine: you cannot audit a prompt. Every one of the six techniques the UK government names operates on
// a system somebody built, with inputs they chose and outputs they can measure against a benchmark. A
// person who only types into a box has no inputs to audit, no benchmark to test against and nothing to
// verify. Training is the side of the line where the work is checkable, and checkable work is the only
// kind that can be marked, trusted or employed.
// Written fresh; the Ireland page of a similar name was deliberately not opened.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'THINK', blurb: 'The UK government names six things you can do to an AI system you built. None of them is available to someone who only prompts.' },
  slug: 'learn-to-train-ai-not-just-prompt-it-uk',
  code: 'ltr',
  accent: '#557114',
  accentRationale: 'Train AI, UK: an olive lime from the solver (4.53:1 on every paper tint), clearly apart from the oxblood, claret and orchid used by the other three Think pages',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Learn to train AI, not just prompt it',
  title: 'Learn to Train AI, Not Just Prompt It | UK Classes',
  description: 'The UK government names six ways to check an AI system you built. None works on a prompt. What training involves, and how we teach it. First class free.',
  ogDescription: 'Risk assessment, impact assessment, bias audit, compliance audit, conformity assessment, formal verification. None of the six works on a prompt.',
  twitterDescription: 'Why training a model is checkable and prompting is not. Live UK classes, first one free.',
  pageName: 'Learn to Train AI, Not Just Prompt It',
  webPageDescription: 'What the UK government guidance on AI assurance says can be done to a system you built, why none of it applies to prompting, and how training is taught to learners.',
  courseDescription: 'Live online teaching for UK learners in training, testing and evaluating AI and machine learning models, with the Python and data work that makes it possible.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Train AI, do not just prompt it',
  navLinks: [
    { href: '#six', label: 'Six ways to check' },
    { href: '#line', label: 'Which side of the line' },
    { href: '#taught', label: 'How training is taught' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Training models &middot; Ages 12 to 67',
  h1: 'Learn to train AI, not just prompt it',
  lede: 'The UK government publishes an introduction to AI assurance, and in it there is a list of six techniques an organisation can apply to an AI system. Risk assessment. Impact assessment. Bias audit. Compliance audit. Conformity assessment. Formal verification. Read them together and something becomes obvious: every single one operates on a system somebody built, with input data somebody chose and outputs somebody can measure against a benchmark. Not one of them can be applied to a prompt. That is the practical difference between training a model and typing at one, and it is the reason this page exists. Prompting is a thing you do to a product. Training is a thing you can be held to account for, and therefore a thing worth learning.',
  secondaryCta: { href: '#taught', label: 'How we teach it' },
  wa: 'Hello Modern Age Coders, I would like a free first class on training AI models in the UK.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Models built, tested and broken',
  spec: [
    ['The question', 'Can the work be checked?'],
    ['Prompting', 'No inputs, no benchmark, no audit'],
    ['Training', 'All six assurance techniques apply'],
    ['We teach', 'Data, training, evaluation, failure'],
    ['Ages', 'About 12 upwards, and adults'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'There is a line running through everything people call AI work, and it falls between using a system and building one. The UK government\'s introduction to AI assurance names six techniques for checking an AI system: risk assessment, algorithmic impact assessment, bias audit, compliance audit, conformity assessment and formal verification. All six assume a system with inputs you selected and outputs you can measure against a benchmark, which is exactly what a person who only prompts does not have. Learning to train models puts a learner on the side of the line where work can be inspected, measured and defended. We teach it with real data and small models, to learners from about twelve upwards and to adults, in groups of five to ten at one level or one to one. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses about building, not using',
    lede: 'Each one ends with a model the learner trained, tested and can explain. Cards open the full syllabus.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'TRAIN / 01', title: 'AI and Machine Learning for Teens', note: 'Data gathered, a model trained, evaluated against a held-out set, and then broken on purpose to find where it fails.' },
      { course: 'data-science-course-for-teens-python-data', code: 'TRAIN / 02', title: 'Data Science with Python', note: 'The part everyone skips: cleaning, questioning and understanding the data before a model ever sees it.' },
      { course: 'complete-generative-ai-masterclass-college', code: 'TRAIN / 03', title: 'Generative AI, Properly', note: 'For adults and older students who need what is happening underneath rather than a tour of an interface.' }
    ]
  },

  sections: [
    {
      id: 'six', tint: 'tint', eyebrow: 'Six ways to check',
      h2: 'What the government says you can do to an AI system',
      lede: 'From the Department for Science, Innovation and Technology\'s Introduction to AI assurance, published 12 February 2024. These are its own definitions, shortened only where marked.',
      body: [
        { kind: 'table', caption: 'The six assurance techniques, as DSIT defines them', head: ['Technique', 'What the guidance says it does', 'What it needs to exist'], rows: [
          ['Risk assessment', 'Used "to consider and identify a range of potential risks that might arise from the development and/or deployment of an AI product/system"', 'A system with a known development history'],
          ['Algorithmic impact assessment', 'Used "to anticipate the wider effects of a system/product on the environment, equality, human rights, data protection, or other outcomes"', 'A stated purpose and a population it affects'],
          ['Bias audit', '"Assesses the inputs and outputs of algorithmic systems to determine if there is unfair bias in the input data, the outcome of a decision or classification made by the system"', 'Access to the input data. This is the decisive one'],
          ['Compliance audit', '"Involves reviewing adherence to internal policies, external regulations and, where relevant, legal requirements"', 'A record of how the system was built and operated'],
          ['Conformity assessment', 'Demonstrates "whether a product or system meets relevant requirements, prior to being placed on the market. Often includes performance testing"', 'Requirements written down in advance'],
          ['Formal verification', '"Establishes whether a system satisfies specific requirements, often using formal mathematical methods and proofs"', 'A specification precise enough to be proved against']
        ] },
        { kind: 'capsule', mt: true, q: 'Read the third column down', p: 'Every entry needs something a person who only prompts does not possess: the training data, the build record, the stated requirements, the specification. The guidance describes a "toolbox of different products, services, and standards", and none of the tools in it fit around a text box.' },
        { kind: 'two', mt: true,
          leftH3: 'The three verbs underneath',
          left: [
            'The guidance organises all of this under three headings. Measure means "gathering qualitative and quantitative data on how an AI system functions, to ensure that it performs as intended". Evaluate means assessing risks and impacts, including "against agreed benchmarks set out in standards and regulatory guidelines". Communicate means being able to say what you found, inside the organisation and outside it.',
            'Measure, evaluate, communicate. A student who has trained a model can do all three about it. A student who has only prompted one can do none.'
          ],
          rightH3: 'Benchmarks are the crux',
          right: [
            'The guidance is specific that teams should "build in rigorous software testing and performance assessment methodologies with comparisons to clear performance benchmarks".',
            'A benchmark requires a held-out set of examples the model has never seen. Creating one is a ten-minute idea and the single most important habit in machine learning, because without it a model that has simply memorised looks identical to one that has learnt.'
          ] },
        { kind: 'source', html: 'Source, read 20 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/introduction-to-ai-assurance/introduction-to-ai-assurance" rel="noopener" target="_blank">Introduction to AI assurance</a>, Department for Science, Innovation and Technology, published 12 February 2024. The guide states that it "focuses on the underlying concepts of AI assurance rather than technical detail", and it is written for organisations rather than for learners; the application to learning here is ours.' }
      ]
    },
    {
      id: 'line', tint: 'deep', eyebrow: 'Which side of the line',
      h2: 'Using a system, or building one',
      lede: 'Both are legitimate. They are not the same activity, they do not build the same knowledge, and only one of them leaves evidence.',
      body: [
        { kind: 'table', caption: 'The same word, two different jobs', head: ['', 'Prompting a system', 'Training a system'], rows: [
          ['What you control', 'The wording of a request', 'The data, the structure, the objective and the stopping point'],
          ['What you can measure', 'Whether this answer looked reasonable', 'Accuracy against examples the model has never seen'],
          ['What you can audit', 'Nothing in the guidance applies', 'Inputs, outputs, bias, conformity, and the build record'],
          ['What failure teaches', 'Try different words', 'Which part of the data or the design was wrong'],
          ['What transfers', 'Familiarity with one product', 'The behaviour of the whole family of systems, product by product'],
          ['What you can show', 'A conversation', 'A model, its data, its results and its limits']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'This is not snobbery', p: 'Prompting well is a real and useful ability, and we use these tools in lessons. The point is narrower: it is not a substitute for knowing what the system is doing, and it cannot be checked by anybody.' },
          { h3: 'It is about evidence', p: 'A learner who trained something can hand over the data, the code and the results. That is what a coursework marker, an interviewer or a regulator can actually examine.' },
          { h3: 'And about failure', p: 'A model that fails tells you where. A prompt that fails tells you to rephrase. Only one of those two is a lesson.' }
        ] },
        { kind: 'p', html: 'The bias audit row deserves a sentence on its own, because it is the one that most surprises students. The guidance defines it as assessing inputs and outputs to find unfair bias "in the input data, the outcome of a decision or classification made by the system". Input data first. A learner who has chosen a training set with their own hands understands immediately why that is the first place to look, and a learner who has only ever typed into a box has no way to reach the question at all.' },
        { kind: 'p', html: 'What the wider evidence says about AI literacy points the same way, and <a class="ag-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">the page on learning to think</a> sets that out: in the most cited framework, nine of seventeen competencies are about how these systems work rather than how to operate them.' }
      ]
    },
    {
      id: 'taught', tint: '', eyebrow: 'How training is taught',
      h2: 'Data, model, benchmark, failure',
      lede: 'Four stages that fit in a term and scale from a twelve-year-old to an adult professional. The only thing that changes is the dataset.',
      body: [
        { kind: 'two',
          leftH3: 'The first two',
          left: [
            'Data comes before anything. Where did these examples come from, what is missing from them, and who would be poorly served by a system trained on this? Doing this badly is the commonest failure in machine learning and the one nobody notices until much later.',
            'Then the model. Small and simple to begin with, because a learner needs to be able to hold the whole thing in their head and say what each part is for. A big model that works is worth less to a student than a small one they can explain.'
          ],
          rightH3: 'And the two that matter most',
          right: [
            'The benchmark. Split the data before training, hold some back, and only ever judge the model on examples it has never seen. This one rule separates measurement from wishful thinking, and it is what the guidance means by comparing against clear performance benchmarks.',
            'Then failure, deliberately. Find the input that makes the model confidently wrong. Work out whether the fault was in the data, the design or the question. A learner who has done this stops believing confident outputs, permanently.'
          ] },
        { kind: 'table', mt: true, caption: 'What a learner can demonstrate at each stage', head: ['Stage', 'What they produce', 'Which assurance idea it mirrors'], rows: [
          ['Data', 'A described dataset, with what is missing written down', 'Bias audit, which begins with the input data'],
          ['Model', 'A trained model they can explain part by part', 'The build record a compliance audit would ask for'],
          ['Benchmark', 'A result on examples the model never saw', 'Performance testing against a clear benchmark'],
          ['Failure', 'A documented case where it fails and why', 'Risk assessment, done at the scale of a classroom']
        ] },
        { kind: 'p', html: 'That final column is not a claim that a school project is an audit. It is a claim that the thinking is the same shape, and that a learner who has done the small version recognises the large one when they meet it at work. Beginning in the right shape costs nothing extra.' },
        { kind: 'p', html: 'Younger learners do all four stages with data they collect themselves, usually drawings, which is described in detail on <a class="ag-inline-link" href="/ai-classes-for-kids-uk">the AI classes for kids page</a>. Older students use published datasets, and adults usually bring something from their own work, which is where the questions get sharpest.' },
        { kind: 'p', html: 'One honest limitation. We teach how these systems are built, trained and evaluated at a scale a learner can hold; we do not train large language models, and nobody in a classroom does. What transfers from the small version is the reasoning, not the hardware.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs into building rather than using',
    lede: 'Placement follows what a learner has actually built, which is usually less than they expect and easy to fix.',
    table: { caption: 'What a learner can build at each rung', head: ['Rung', 'What they can do', 'What they still take on trust'], rows: [
      ['1. Describe the data', 'Say where a dataset came from and what is missing from it', 'That the training process will do something sensible with it'],
      ['2. Train something', 'Produce a working model from labelled examples', 'That the accuracy figure means what it appears to mean'],
      ['3. Hold data back', 'Judge the model only on examples it has never seen', 'That the held-out set represents the real world'],
      ['4. Break it deliberately', 'Find inputs that defeat it, and say why they do', 'Very little, which is the point of getting here']
    ] },
    left: { h3: 'Rung three is where it becomes real', ps: [
      'Until a learner holds data back, every result they produce is untrustworthy in a way they cannot see. It is a single habit and it changes everything downstream.',
      'The whole topic sequence, including the Python that makes it possible, is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Adults often start at rung one', ps: [
      'Professionals who use AI daily frequently have never described a training set. That is not a gap in intelligence, it is a gap in exposure, and it closes fast.',
      'Where anyone starts is settled in the free lesson rather than assumed from a job title or a school year.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses about building AI systems',
    lede: 'Grouped by how much programming a learner has before they begin. Full syllabuses sit behind the cards.',
    bands: [
      { num: 'I', h3: 'Before the model', sub: 'The language and the data', courses: [
        { code: 'UK / TR1 / 01', slug: 'python-complete-masterclass-teens', title: 'Python in full', blurb: 'The language everything here is written in, taught by predicting output before running it.' },
        { code: 'UK / TR1 / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Cleaning and questioning real datasets, which is most of the work and all of the risk.' },
        { code: 'UK / TR1 / 03', slug: 'mysql-database-complete-masterclass-college', title: 'Databases and SQL', blurb: 'Where data actually lives before anybody trains anything on it.' }
      ] },
      { num: 'II', h3: 'Training models', sub: 'The core of this page', courses: [
        { code: 'UK / TR2 / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Train, hold data back, measure honestly, then break it on purpose.' },
        { code: 'UK / TR2 / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Visual machine learning', blurb: 'Models built and compared visually first, so the ideas land before the notation does.' },
        { code: 'UK / TR2 / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'The same four stages for younger learners, with examples the child gathers themselves.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'For students and adults heading somewhere', courses: [
        { code: 'UK / TR3 / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI, properly', blurb: 'The architecture and the training process behind the tools, for people who need more than a feature list.' },
        { code: 'UK / TR3 / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science, complete', blurb: 'The full route for adults with a destination, from spreadsheets to deployed models.' },
        { code: 'UK / TR3 / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI automation', blurb: 'Putting trained systems to work, with the checks that catch them failing quietly.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Hold data back, then try to break it',
    lede: 'India keeps one clock all year, which leaves the UK five and a half hours behind from October and four and a half from March. Pick a slot in UK time and it is yours.',
    slots: [
      { time: 'After school', l: 'Where most school-age learners land.' },
      { time: 'Evening', l: 'Older students and working adults, after the day winds down.' },
      { time: 'Weekend morning', l: 'A longer block, which suits training a model from start to finish.' }
    ],
    cells: [
      { h3: 'Data first, always', p: 'Where it came from and what is missing, before a single model is trained. Skipping this is how projects fail quietly.' },
      { h3: 'Small models on purpose', p: 'A model a learner can explain part by part beats a bigger one that works for reasons nobody in the room can state.' },
      { h3: 'A held-out set every time', p: 'Judged only on examples it has never seen. Without this, a memorised model is indistinguishable from a good one.' },
      { h3: 'Deliberate failure', p: 'Every project ends with the learner hunting for the input that defeats their own model.' },
      { h3: 'Written limits', p: 'Each finished model comes with a short note on what it cannot do, which is the habit the assurance guidance is built on.' },
      { h3: 'Groups by level', p: 'Five to ten learners at one stage, comparing results and arguing about whose benchmark was fairer.' }
    ]
  },

  projectsH2: 'Models our learners trained',
  projectsLede: 'Four published projects. The <a class="ag-inline-link" href="/student-labs">student labs</a> page holds more.',
  reviewsLede: 'Straight from Google, unedited, from families nobody prompted.',

  fees: {
    h2: 'What it costs',
    lede: 'One charge a month, set in US dollars for every country but India. Try the free lesson first; billing begins only when a course and a weekly time are fixed.',
    free: ['A genuine lesson, not a sales call', 'A straight view of the right rung', 'Only a phone number needed'],
    group: ['Five to ten learners at one rung', 'The same teacher for the course', 'Weekly written feedback on real work', 'A certificate at the end of a syllabus'],
    one: ['One learner and one teacher', 'Built around a specific target or dataset', 'Suits adults bringing work from their own job']
  },

  faq: {
    eyebrow: 'Questions about training AI',
    h2: 'What learners and parents ask',
    items: [
      { q: 'What is the difference between prompting and training?', a: 'Prompting means wording a request to a system somebody else built. Training means choosing the data, building the model, measuring it against examples it has never seen, and being able to say where it fails.' },
      { q: 'Why does that difference matter?', a: 'Because the UK government\'s introduction to AI assurance names six techniques for checking an AI system, and every one of them needs something a prompt does not have: the input data, the build record, the stated requirements or a specification.' },
      { q: 'What are the six?', a: 'Risk assessment, algorithmic impact assessment, bias audit, compliance audit, conformity assessment and formal verification.' },
      { q: 'What is a bias audit?', a: 'The guidance defines it as assessing the inputs and outputs of algorithmic systems to determine if there is unfair bias in the input data or in the decision or classification the system makes. Input data comes first in that definition.' },
      { q: 'What age can a learner start training models?', a: 'About twelve for the full version with real datasets, and from around eight for a simpler form using examples the child collects, which is covered on our AI classes for kids page.' },
      { q: 'Do they need to be good at maths?', a: 'Not to begin. The first term is about data, evidence and honest measurement. The mathematics arrives gradually and much later.' },
      { q: 'Will they train a large language model?', a: 'No, and nor does anyone in a classroom. We teach the reasoning at a scale a learner can hold, and the reasoning is what transfers.' },
      { q: 'What is a held-out set?', a: 'Examples put aside before training and used only to judge the finished model. Without one, a model that has memorised the data looks exactly like a model that has learnt something.' },
      { q: 'Is prompting useless then?', a: 'No. It is useful and we use these tools in lessons. It is simply not a substitute for knowing what the system is doing, and it cannot be inspected by anybody.' },
      { q: 'What does it cost?', a: 'Nothing for the opening lesson. A place in a group runs at USD 100 each month afterwards, or USD 150 for a teacher to yourself, billed month by month and never up front.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Other pages on this',
    lede: 'Each page takes one strand of this somewhere specific.',
    items: [
      { href: '/learn-to-think-not-just-use-ai-tools-uk', label: 'Learn to think, not just use AI tools', p: 'Five assumptions about software that AI breaks, from a DSIT-supported review.' },
      { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids in the UK', p: 'The same four stages, with data a child collects themselves.' },
      { href: '/problem-solving-skills-through-coding-uk', label: 'Problem-solving skills through coding', p: 'Why we will not tell you coding makes a child better at everything.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online in the UK', p: 'The language all of this is built in, and what the boards examine.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, and the index of every UK page we publish.' },
      { href: '/student-labs', label: 'Student labs', p: 'Work our learners built and published.' }
    ]
  },

  start: {
    h2: 'Train something in your first lesson',
    lede: 'Leave a number and we will reply at a British hour you choose. The first lesson is real teaching, and for most learners it ends with a model they trained themselves.',
    readFirst: 'Would rather read? Every <a class="ag-inline-link" href="/courses">course page</a> lists its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the method and its limits, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> shows the whole sequence.',
    note: 'WhatsApp is quickest and free from a British mobile. The number is registered in India, stated here rather than discovered later.',
    formNote: 'No card and no contract. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'United Kingdom', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/coding-and-ai-classes-in-england', label: 'England' },
        { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
        { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' }
      ] },
      { h4: 'Building AI', links: [
        { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids' },
        { href: '/learn-to-think-not-just-use-ai-tools-uk', label: 'Learn to think' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live lessons for UK learners, on UK time'
  },

  personalityCss: `
.ag-root.ag-ltr .ag-hero h1 { letter-spacing: -0.024em; font-weight: 650; }
.ag-root.ag-ltr .ag-capsule { border-left-width: 7px; padding-left: 1.15rem; }
.ag-root.ag-ltr .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-ltr .ag-section-head p { max-width: 65ch; }
.ag-root.ag-ltr .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-ltr .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-ltr .ag-band-head h3 { letter-spacing: 0.004em; }
`,

  mustMention: ['Bias audit', 'Formal verification', 'Conformity assessment', 'clear performance benchmarks', '12 February 2024', 'held-out', 'input data', 'toolbox of different products', 'risk assessment', 'impact assessment'],

  dossier: {
    curriculumAuthority: 'United Kingdom, training AI. Department for Science, Innovation and Technology, "Introduction to AI assurance", published on gov.uk 12 February 2024, with a foreword by Viscount Camrose, then Minister for Artificial Intelligence and Intellectual Property, read raw from gov.uk on 20 September 2026. The six assurance techniques, verbatim: "Risk assessment: Used to consider and identify a range of potential risks that might arise from the development and/or deployment of an AI product/ system"; "(Algorithmic) impact assessment: Used to anticipate the wider effects of a system/product on the environment, equality, human rights, data protection, or other outcomes"; "Bias audit: Assesses the inputs and outputs of algorithmic systems to determine if there is unfair bias in the input data, the outcome of a decision or classification made by the system"; "Compliance audit: Involves reviewing adherence to internal policies, external regulations and, where relevant, legal requirements"; "Conformity assessment: The process of conformity assessment demonstrates whether a product or system meets relevant requirements, prior to being placed on the market. Often includes performance testing"; "Formal verification: Formal verification establishes whether a system satisfies specific requirements, often using formal mathematical methods and proofs". The measure, evaluate, communicate triad: "Measure: Gathering qualitative and quantitative data on how an AI system functions, to ensure that it performs as intended"; "Evaluate: Activities encompassing techniques to assess the risks and impacts of AI systems and inform further decision-making", including "evaluating the implications of an AI system against agreed benchmarks set out in standards and regulatory guidelines to identify issues"; "Communicate: A range of communication techniques can be applied to ensure effective communication both within an organisation and externally." Also: "Given the complexity of AI systems, we require a toolbox of different products, services, and standards to assure them effectively"; "There is a spectrum of AI assurance mechanisms that can, and should, be used in combination with one another across the AI lifecycle"; "When setting metrics, teams should build in rigorous software testing and performance assessment methodologies with comparisons to clear performance benchmarks"; and the guide\'s own scope note that it "focuses on the underlying concepts of AI assurance rather than technical detail".',
    localProject: 'You cannot audit a prompt. The UK government names six techniques for checking an AI system, and the page tabulates each one beside what it requires in order to exist at all: the input data, the build record, requirements written in advance, a specification precise enough to prove against. Not one is available to somebody who only types into a box, which turns a vague preference for building over using into a concrete argument about evidence. The bias audit is singled out because its definition starts with input data, a question a prompter cannot reach. The second section contrasts prompting and training across six rows, including what failure teaches: a model that fails tells you where, a prompt that fails tells you to rephrase. The teaching section maps four classroom stages, data, model, benchmark and deliberate failure, onto the assurance ideas they mirror, while saying explicitly that a school project is not an audit and that the claim is only about the shape of the thinking. It also states an honest limit: nobody in a classroom trains a large language model, and what transfers is the reasoning rather than the hardware. Lesson family: a public accountability vocabulary that only applies on one side of a line, used to decide which side is worth learning on.',
    requiredMentions: ['Bias audit', 'Formal verification', 'clear performance benchmarks', '12 February 2024', 'held-out'],
    sources: [
      { claim: 'DSIT, Introduction to AI assurance, published 12 February 2024: the six assurance techniques and their definitions, the measure, evaluate and communicate framing, the toolbox and spectrum statements, the requirement for comparisons to clear performance benchmarks, and the guide\'s own scope note.', url: 'https://www.gov.uk/government/publications/introduction-to-ai-assurance/introduction-to-ai-assurance' }
    ],
    rejectedClaims: [
      'That a school or classroom project constitutes an assurance activity: the page says explicitly that the claim is only that the thinking is the same shape.',
      'That the guidance is written for learners: it is addressed to organisations, and the page states that the application to learning is ours.',
      'Any regulatory obligation on an individual or a school: the guidance is not law and the page makes no compliance claim.',
      'That our learners train large language models: nobody in a classroom does, and the page says so.',
      'Any figure from the same guide about the assurance market or the cyber security industry: not used, to keep the page about learning rather than economics.',
      'Any claim about how accurate or safe a named AI product is: no primary source was read for that.'
    ]
  }
};
