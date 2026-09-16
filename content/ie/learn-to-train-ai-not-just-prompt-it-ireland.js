'use strict';
// Learn to train AI, not just prompt it, Ireland (ag- door, Ireland cluster,
// Phase 2). The dataset originally researched for this page was the Property
// Price Register, which is NOT used: the PSRA re-use conditions forbid use of
// that information for the principal purpose of advertising or promoting a
// product or service, and this is a marketing page. Replacement dataset,
// measured on 16 September 2026: CSO table ROA30, Driving Tests Delivered and
// Pass Rate, published by the CSO with the Road Safety Authority as source,
// listed on data.gov.ie as "Licensed under: Creative Commons Attribution 4.0",
// which permits commercial re-use with attribution. Measured facts: the raw
// file is an exact cube of 4 statistics by 68 months by 18 categories by 73
// centres, 357,408 rows, January 2021 to August 2026; the Category B modelling
// table is 3,887 rows across 68 centres; the global mean pass rate is 53.285%
// and predicting it for every row gives a mean absolute error of 6.787
// percentage points; memorising each centre's own mean gives 5.160, which is
// 24% lower; a random 80/20 split put 67 test-fold centres in the training
// fold, all 67 of them; yearly means drift 55.90, 52.19, 52.72, 51.59, 53.14
// and 54.71; 81.48% of raw cells are blank, ranging by category from 20.6% for
// Category B to 100% for Category DE, with 43 centres never missing and 4
// always missing, and overflow venues missing 55.7% against 16.2% for permanent
// centres; 24,480 rows, 6.8%, are rollups verified as exact sums in all 68
// months; three columns go constant once the pass rate statistic is selected;
// one centre name uses an en dash where three siblings use a hyphen. The
// publisher does not say why cells are blank, so no reason is claimed. No
// centre is ranked, praised or criticised anywhere on this page.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'TRAIN AI', blurb: 'The difference between prompting a model and training one, worked through on an Irish dataset with a baseline you have to beat.' },
  slug: 'learn-to-train-ai-not-just-prompt-it-ireland',
  code: 'lta',
  accent: '#384A7E',
  accentRationale: 'Training AI, Ireland: a deep indigo from the solver, separated from both Irish greens and every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Learn to train AI, not just prompt it, Ireland',
  title: 'Learn to Train AI, Not Just Prompt It | Ireland',
  description: 'Learn to train AI in Ireland, not just prompt it: labels, splits, baselines and overfitting, worked on a real Irish dataset. Live online, first class free.',
  ogDescription: 'Anyone can prompt a model. Training one means choosing labels, splitting data honestly and beating a baseline you set yourself, and that is a different skill entirely.',
  twitterDescription: 'Training AI rather than prompting it, taught live on a real Irish dataset. First class free.',
  pageName: 'Learn to Train AI, Not Just Prompt It, Ireland',
  webPageDescription: 'For learners in Ireland who want to train models rather than only prompt them: what training actually involves, a real Irish dataset with a measured baseline, and the five ways a split or a column can quietly ruin a result.',
  courseDescription: 'Live online classes for learners in Ireland on training machine learning models: labelling, feature choice, honest splits, baselines, overfitting and evaluation, worked on open Irish data.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and machine learning classes in Ireland', href: '/ai-and-machine-learning-classes-in-ireland' }],
  crumbLabel: 'Learn to train AI, Ireland',
  navLinks: [
    { href: '#difference', label: 'Prompting or training' },
    { href: '#dataset', label: 'A dataset to train on' },
    { href: '#splits', label: 'Five ways to fool yourself' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Training, not prompting &middot; Live online',
  h1: 'Learn to train AI, not just prompt it',
  lede: 'Prompting is a genuine skill, and it is a shallow one. It takes a weekend to get good at, the tools change every few months, and none of it tells you whether the answer you got is right. Training is the other half of AI, the half that decides what a model learns and how you would know if it had learned nothing useful. It involves choices no tool makes for you: what exactly are you predicting, what evidence would have been available at the moment of the prediction, how do you split the data so the test is honest, and what is the simplest possible approach your model has to beat? Ireland\'s 2024 National AI Strategy refresh makes a related point about people rather than models: "the skills needed for AI are not only digital skills, and the continued development of empathetic and cognitive skills will be crucial to the success of AI adoption in Ireland." This page shows the training half being done properly, on an Irish dataset anyone can download.',
  secondaryCta: { href: '#splits', label: 'Five ways to fool yourself' },
  wa: 'Hello Modern Age Coders, I am in Ireland and would like a free first class on training AI models.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; models trained, split and measured by the learner',
  spec: [
    ['For', 'Teens, students and adults'],
    ['Teaches', 'Labels, features, splits, baselines'],
    ['Catches', 'Overfitting and group leakage'],
    ['Uses', 'Open Irish data'],
    ['Needs', 'Python, at least the basics'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Training a model means deciding what to predict, choosing evidence you would genuinely have in advance, splitting the data so the test is fair, setting a baseline, and only then fitting anything. We teach that on real Irish data rather than on tidied teaching sets, because every important lesson lives in the mess: categories that repeat themselves as totals, missing values that are missing for a reason, and splits that let a model memorise instead of learn. Classes are live, in groups of five to ten at one level or one to one, for teenagers, students and adults. The first class is free, then USD 100 a month in a group or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses where you train the model',
    lede: 'The mechanics of training, at three levels. Each card opens its syllabus.',
    items: [
      { course: 'ai-ml-masterclass-complete-college', code: 'TRAIN / 01', title: 'AI and Machine Learning Masterclass', note: 'The full training loop for students and adults: features, splits, fitting, validation and the arithmetic of deciding whether a result is real.' },
      { course: 'ai-ml-masterclass-teens', code: 'TRAIN / 02', title: 'AI and Machine Learning for Teens', note: 'The same ideas at secondary-school pace, with a first model the student trains, breaks on purpose and then fixes.' },
      { course: 'orange-data-mining-machine-learning-course-for-college-students', code: 'TRAIN / 03', title: 'Orange Data Mining', note: 'Training made visible, for learners who want to see the pipeline before they write one in code.' }
    ]
  },

  sections: [
    {
      id: 'difference', tint: 'tint', eyebrow: 'Prompting or training',
      h2: 'What training actually asks of you',
      lede: 'Both skills matter. They are simply not the same work, and only one of them makes you able to judge a model.',
      body: [
        { kind: 'table', caption: 'Two different jobs', head: ['Question', 'Prompting', 'Training'], rows: [
          ['What do you control?', 'The words you send', 'The data, the labels, the features and the split'],
          ['How do you know it worked?', 'It looks right', 'It beats a baseline you defined in advance'],
          ['What can go wrong quietly?', 'A confident wrong answer', 'A score inflated by leakage or a bad split'],
          ['What transfers when tools change?', 'Some habits', 'Almost everything']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The first thing a learner meets in training is that the task has to be defined precisely enough to argue about. Predicting "how a place is doing" is not a task. Predicting one named number, for one month, from evidence that existed the month before, is.',
            'The second is that you must be able to fail. A prompt never reports an error rate. A trained model does, and the number is only meaningful beside the simplest alternative anyone could have used instead.'
          ],
          right: [
            'The skills side of this is national policy. The 2024 refresh of Ireland\'s National AI Strategy notes that AI skills "are not only digital skills", and that cognitive skills will matter for adoption here.',
            'The practical version of that sentence, for a learner, is judgement: knowing which questions the data can answer, and saying clearly when it cannot. The tool side is covered on <a class="ag-inline-link" href="/learn-to-think-not-just-use-ai-tools-ireland">learn to think, not just use AI tools</a>.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://enterprise.gov.ie/en/publications/publication-files/national-ai-strategy-refresh-2024.pdf" rel="noopener" target="_blank">Ireland\'s National AI Strategy: AI, Here for Good, Refresh 2024</a>, Department of Enterprise, Trade and Employment, read 16 September 2026.' }
      ]
    },
    {
      id: 'dataset', tint: 'deep', eyebrow: 'A dataset to train on',
      h2: 'Driving test pass rates: a training set every Irish family understands',
      lede: 'The Central Statistics Office publishes driving test figures from the Road Safety Authority, monthly, by test centre and test category. It is open under a Creative Commons Attribution 4.0 licence, and it is a superb first training set precisely because it is awkward.',
      body: [
        { kind: 'table', caption: 'CSO table ROA30, Driving Tests Delivered and Pass Rate', head: ['Aspect', 'Measured'], rows: [
          ['Shape', 'An exact cube: 4 statistics by 68 months by 18 test categories by 73 centres, which is 357,408 rows'],
          ['Period', 'January 2021 to August 2026'],
          ['The task we set', 'Predict the car-test pass rate for a given centre in a given month'],
          ['Usable rows for that task', '3,887, across 68 centres, once rows with no recorded pass rate are dropped'],
          ['The number to beat', 'Predicting the overall mean of 53.285% for every row gives an average error of 6.787 percentage points']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why a baseline first',
          left: [
            'That 6.787 is the whole point of the exercise. It is what you achieve by knowing nothing except the national average, and any model that cannot beat it has taught you only that your features are useless.',
            'Students compute it themselves in the first session, before any model exists. It takes two lines and it reframes everything that follows.'
          ],
          rightH3: 'And why this dataset',
          right: [
            'Because almost every household in Ireland has someone who has sat this test, so learners have real intuitions to check the model against, which is exactly when mistakes become visible.',
            'We publish no ranking of test centres, and neither should a learner. The data supports a forecasting exercise; it does not support judgements about the places or the people in them.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://data.gov.ie/dataset/roa30-driving-tests-delivered-and-pass-rate" rel="noopener" target="_blank">ROA30, Driving Tests Delivered and Pass Rate</a>, published by the Central Statistics Office with the Road Safety Authority as source, listed on data.gov.ie as "Licensed under: Creative Commons Attribution 4.0", read and measured on 16 September 2026. Contains Irish Public Sector Data licensed under a Creative Commons Attribution 4.0 International (CC BY 4.0) licence. All counts above are ours, computed from the published file.' }
      ]
    },
    {
      id: 'splits', tint: 'tint', eyebrow: 'Five ways to fool yourself',
      h2: 'Five traps in one file, each of them measured',
      lede: 'These are not hypothetical warnings. Every number below came out of this file, and each one has ruined somebody\'s project at some point.',
      body: [
        { kind: 'table', caption: 'Measured traps in ROA30', head: ['Trap', 'What we measured', 'What it costs you'], rows: [
          ['A random split', 'A random 80/20 split put 67 centres in the test set, and all 67 also appeared in training', 'The model can memorise centres instead of learning; centre memorisation alone cuts the error by 24%'],
          ['Time drift', 'Yearly mean pass rates ran 55.90, 52.19, 52.72, 51.59, 53.14 and 54.71 across the period', 'Training on one era and testing across all of them is not forecasting'],
          ['Missing for a reason', '81.48% of raw cells are blank, from 20.6% for the car test to 100% for one category; 43 centres never miss a value and 4 always do', 'Dropping blank rows silently deletes whole categories and venues'],
          ['Totals hiding in the rows', '24,480 rows, 6.8% of the file, are totals, verified as exact sums of the detailed rows in all 68 months', 'Training on them means training repeatedly on the same observations'],
          ['Columns that die', 'Once you select the pass-rate statistic, three columns hold a single value each', 'A pipeline that encodes every column wastes features on constants']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Split by group, not by row', p: 'Hold out whole test centres, or whole months, depending on the question. If your model will meet new places, test it on places it has never seen.' },
          { h3: 'Ask why a value is missing', p: 'Here, small overflow venues are missing 55.7% of their values against 16.2% at permanent centres. The publisher does not say why cells are blank, so we do not claim a reason, but the pattern is clearly not random.' },
          { h3: 'Read the names carefully', p: 'One centre name uses an en dash where three otherwise identical names use a hyphen. A split on the wrong character quietly mangles one row, and nothing warns you.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Working through these is the course. A learner who has met group leakage once, with a measured 24% gap attached to it, will check for it forever afterwards.'
          ],
          right: [
            'And when the honest model finally beats 6.787, they know exactly what the improvement is worth, which is the only thing that separates a result from a screenshot.'
          ] }
      ]
    },
    {
      id: 'limits', tint: '', eyebrow: 'What it cannot tell you',
      h2: 'The limits are part of the training',
      lede: 'A model that predicts a number says nothing about why the number is what it is. Confusing those two is the most common mistake in applied AI.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Prediction is not explanation', p: 'A model can forecast a pass rate without any idea what causes it. Who sits the test where, when and after how much practice all sit outside this file.' },
          { h3: 'Do not rank people or places', p: 'We do not publish league tables from data like this, and we teach students not to. The same restraint applies to staff, schools and patients in every other dataset they will meet.' },
          { h3: 'Say what would change your mind', p: 'Every project ends with the conditions under which the model would stop working: a new category, a new venue, a change in how the figures are recorded.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs',
    h2: 'Five rungs of training a model',
    lede: 'The order matters more than the algorithm. Most learners reach the last rung in three to five months.',
    table: { caption: 'The training loop, in order', head: ['Rung', 'What the learner does'], rows: [
      ['1. Define the target', 'States the exact quantity, the unit and the moment of prediction'],
      ['2. Choose honest features', 'Keeps only evidence that exists before the target is known'],
      ['3. Split with intent', 'Holds out groups or time periods, not random rows'],
      ['4. Baseline, then fit', 'Measures the naive approach, then trains and compares'],
      ['5. Test the result', 'Checks stability, looks for leakage, and writes the limits down']
    ] },
    left: { h3: 'Where overfitting shows up', ps: [
      'Usually between rungs three and four: the training score climbs while the held-out score stalls. Seeing it happen once, on your own data, teaches more than any definition.',
      'The wider sequence of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'After this', ps: [
      'Learners who want a finished, defensible project go on to <a class="ag-inline-link" href="/build-real-ai-projects-ireland">build real AI projects</a>, which works on a different Irish dataset.',
      'Those heading for agents and language models take <a class="ag-inline-link" href="/ai-agents-course-for-students-ireland">AI agents for students</a> instead.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses on training and evaluating models',
    lede: 'By level. The free first class decides where you start.',
    bands: [
      { num: 'I', h3: 'Before training', sub: 'The groundwork', courses: [
        { code: 'TRAIN / BASE / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'Enough Python to write a training pipeline yourself.' },
        { code: 'TRAIN / BASE / 02', slug: 'data-analysis-mastery-course-college', title: 'Data Analysis Mastery', blurb: 'Reading a file properly before modelling it.' },
        { code: 'TRAIN / BASE / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'The same groundwork for secondary students.' }
      ] },
      { num: 'II', h3: 'Training', sub: 'The loop itself', courses: [
        { code: 'TRAIN / CORE / 01', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'Features, splits, fitting, validation, judgement.' },
        { code: 'TRAIN / CORE / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'A model a teenager trains and interrogates.' },
        { code: 'TRAIN / CORE / 03', slug: 'orange-data-mining-machine-learning-course-for-college-students', title: 'Orange Data Mining', blurb: 'The pipeline seen before it is written.' }
      ] },
      { num: 'III', h3: 'Beyond one model', sub: 'Scale and modern methods', courses: [
        { code: 'TRAIN / NEXT / 01', slug: 'artificial-intelligence-complete-masterclass-college', title: 'Artificial Intelligence Masterclass', blurb: 'The field around the training loop.' },
        { code: 'TRAIN / NEXT / 02', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'What training means for language models.' },
        { code: 'TRAIN / NEXT / 03', slug: 'data-science-complete-masterclass-college', title: 'Data Science Masterclass', blurb: 'The analysis that surrounds any model.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Live sessions with the data open in front of you',
    lede: 'Classes are live, with teachers working from India at a weekly hour set in Irish time. India does not change its clocks and Ireland does, so the gap is four and a half hours through the Irish summer and five and a half through the winter. Training sessions suit longer slots, so many learners choose a weekend time.',
    slots: [
      { time: 'Weekday evening', l: 'Steady weekly progress, Irish time.' },
      { time: 'Weekend', l: 'Longer blocks for fitting and evaluation.' },
      { time: 'Quiet periods', l: 'Intensive weeks during holidays.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'You define a task and compute its baseline with a teacher, before any model is trained.' },
      { h3: 'Five to ten per group', p: 'Learners at one level, comparing splits and scores on the same data.' },
      { h3: 'One to one', p: 'For work data, a thesis, or a deadline that will not wait.' },
      { h3: 'Baseline before model', p: 'No result is accepted in class without the naive score it has to beat.' },
      { h3: 'Splits are checked', p: 'Every split is inspected for group and time leakage before training begins.' },
      { h3: 'Limits written down', p: 'Each project ends with the conditions under which its model should not be trusted.' }
    ]
  },

  projectsH2: 'Models our learners trained',
  projectsLede: 'Four projects our students published, with their code and their evaluation. More are gathered on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Straight from Google: reviews written by our students and their families, never bought.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly fee in US dollars, identical in every country outside India, for any course on this page. Nothing to pay in advance for a term, and you stop whenever you choose.',
    free: ['A task defined and a baseline computed', 'An honest view of your starting level', 'No card taken'],
    group: ['Five to ten learners at one level', 'The same teacher throughout', 'Splits and scores reviewed weekly', 'A certificate at the end'],
    one: ['A teacher to yourself', 'Your own dataset and question', 'Suited to work projects and theses']
  },

  faq: {
    eyebrow: 'Questions',
    h2: 'What learners in Ireland ask about training models',
    items: [
      { q: 'Is prompting not enough for most jobs?', a: 'For using a tool, often yes. For deciding whether to trust one, no. Training teaches you what a model can and cannot know, which is what judgement rests on.' },
      { q: 'Do I need a lot of maths?', a: 'Less than you fear. You need to be comfortable with averages, percentages and the idea of error. The heavier maths is taught only where a problem needs it.' },
      { q: 'What is a baseline, and why does it matter?', a: 'The simplest sensible prediction, such as always guessing the overall average. On the driving-test data that gives an average error of 6.787 percentage points, and any model has to beat it to be worth anything.' },
      { q: 'What is group leakage?', a: 'Letting the same group appear in training and testing. On this dataset, a random split put every one of the 67 test-fold centres into training too, so the model could memorise rather than generalise.' },
      { q: 'Where do I get data like this?', a: 'Ireland publishes plenty openly. This table is on the national portal under a Creative Commons Attribution 4.0 licence, which allows re-use with attribution.' },
      { q: 'Do I need a GPU?', a: 'No. Everything on this page trains in seconds on an ordinary laptop. Large models are a different subject and rarely where the learning is.' },
      { q: 'Can I train a model on my company\'s data?', a: 'Yes, in one-to-one lessons, and we will be careful about what leaves your machine. The method is identical; only the data changes.' },
      { q: 'What does it cost?', a: 'The first class is free. After that a group place is USD 100 a month and one-to-one lessons are USD 150 a month, in US dollars, with no enrolment fee.' },
      { q: 'When are the classes?', a: 'Evenings and weekends, at a weekly hour set in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.' },
      { q: 'What happens after I send the form?', a: 'We phone you at a reasonable Irish hour and arrange the free class. There is no charge unless you continue.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Neighbouring subjects.',
    items: [
      { href: '/build-real-ai-projects-ireland', label: 'Build real AI projects in Ireland', p: 'A finished project, start to finish.' },
      { href: '/data-science-course-ireland', label: 'Data science course in Ireland', p: 'The data work underneath.' },
      { href: '/learn-to-think-not-just-use-ai-tools-ireland', label: 'Learn to think, not just use AI tools', p: 'The judgement side.' },
      { href: '/ai-agents-course-for-professionals-ireland', label: 'AI agents course for professionals', p: 'Agents at work.' },
      { href: '/best-python-classes-online-ireland', label: 'Best Python classes online in Ireland', p: 'The language for all of it.' },
      { href: '/ai-and-machine-learning-classes-in-ireland', label: 'AI and machine learning classes in Ireland', p: 'The national AI page.' }
    ]
  },

  start: {
    h2: 'Compute your first baseline in a free class',
    lede: 'Leave a number and we will ring at a time that suits you in Ireland. In the free class you take a real Irish dataset, define a task with a teacher and work out the number any model would have to beat.',
    readFirst: 'Prefer to read first? Try <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, the <a class="ag-inline-link" href="/courses">course syllabuses</a>, and <a class="ag-inline-link" href="/student-labs">projects our students published</a>.',
    note: 'WhatsApp is free from an Irish number and usually reaches us fastest. Ours is an Indian number, because our teachers are in India, and we keep no Irish office.',
    formNote: 'No card, no obligation, one call.'
  },

  footer: {
    cols: [
      { h4: 'Training', links: [
        { href: '/build-real-ai-projects-ireland', label: 'Build real AI projects' },
        { href: '/data-science-course-ireland', label: 'Data science' },
        { href: '/learn-to-think-not-just-use-ai-tools-ireland', label: 'Learn to think' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Ireland', links: [
        { href: '/ai-and-machine-learning-classes-in-ireland', label: 'AI classes in Ireland' },
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/ai-agents-course-for-students-ireland', label: 'AI agents for students' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Training, splitting and measuring, on Irish data'
  },

  personalityCss: `
.ag-root.ag-lta .ag-hero-grid { gap: clamp(1.09rem, 3.42vw, 2.88rem); }
.ag-root.ag-lta .ag-hero h1 { letter-spacing: -0.0215em; }
.ag-root.ag-lta .ag-capsule { border-left-width: 3px; }
.ag-root.ag-lta .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-lta .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-lta .ag-band-head h3 { letter-spacing: -0.0085em; }
.ag-root.ag-lta .ag-spec dt { letter-spacing: 0.132em; }
.ag-root.ag-lta .ag-slots { gap: 1.07rem; }
`,

  mustMention: ['ROA30', '357,408', '3,887', '53.285%', '6.787', '24%', '55.90', '81.48%', '20.6%', '24,480', '55.7%', 'Creative Commons Attribution 4.0']
};
