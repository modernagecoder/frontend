'use strict';
// Learn to train AI, not just prompt it, Australia (ag- think door; AU cluster Phase 2, row 33).
// Sources, read raw on 7 October 2026:
//  - ACARA, Australian Curriculum v9, Digital Technologies 7-10 (.docx): elaboration under AC9TDI8P02 "comparing the
//    output from a classification model against data tagged manually to verify its accuracy and effectiveness";
//    elaborations under AC9TDI10P02 "exploring machine learning, a form of artificial intelligence where an
//    algorithm is trained using a data set" and "adjusting parameters of an AI model to observe the impact of
//    different factors on predicted outcomes".
//  - scikit-learn documentation, cohen_kappa_score: "a statistic that measures inter-annotator agreement".
//  - scikit-learn User Guide 3.1, Cross-validation: "Learning the parameters of a prediction function and testing it
//    on the same data is a methodological mistake".
// Our calculation and simulation: two labellers each right with probability p agree p^2 + (1-p)^2 of the time on
// two-label data (p = 0.95, 0.9, 0.8 give 90.5%, 82.0%, 68.0%; 500 simulated runs of 200 items gave 90.5%, 82.1%,
// 68.0%). A majority of three labellers at 90% is right 97.2% of the time.
// Lesson family: inter-annotator agreement (label quality as the ceiling on what a trained model can show).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'TRAIN AI, NOT JUST PROMPT', blurb: 'Why Australian students should learn to train models rather than only prompt them, starting with the labels: two careful labellers at 90% agree only 82% of the time.' },
  slug: 'learn-to-train-ai-not-just-prompt-it-australia',
  code: 'trau',
  accent: '#247038',
  accentRationale: 'Learn to train AI, Australia: a muted eucalyptus green chosen by hand, at least 11 RGB units from every accent in use',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Learn to train AI, not just prompt it, Australia',
  title: 'Learn to Train AI, Not Just Prompt It | Australian Students',
  description: 'For Australian students: what the curriculum says about training AI models, why labels matter more than prompts, and the agreement maths that caps any model built.',
  ogDescription: 'Prompting uses someone else\'s model. Training builds your own. Why Australian students should learn the second, starting with the labels the model learns from.',
  twitterDescription: 'Learn to train AI, not just prompt it: labels, agreement and honest testing for Australian students.',
  pageName: 'Learn to Train AI, Not Just Prompt It',
  webPageDescription: 'A guide for Australian students on training machine learning models rather than only prompting chatbots, covering labelled data, labeller agreement and held-out testing.',
  courseDescription: 'Live online courses in which Australian students label data, train machine learning models and test them honestly, from AI literacy for children to machine learning for teens and adults.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Train AI, not just prompt it',
  navLinks: [
    { href: '#difference', label: 'Prompt or train' },
    { href: '#curriculum', label: 'The curriculum' },
    { href: '#labels', label: 'Labels first' },
    { href: '#testing', label: 'Testing honestly' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 10 and up &middot; Build the model',
  h1: 'Learn to train AI, not just prompt it',
  lede: 'Typing a request into a chatbot uses a model that someone else trained, on data someone else chose, tested in ways someone else decided. Training a model, even a tiny one, puts all three decisions in the student\'s hands. It is also where the most important lesson in machine learning becomes obvious: a model can only be as good as the labels it learns from. This page explains the difference between prompting and training, what the Australian Curriculum asks students to explore, and a short calculation every young model-builder should do before trusting their own results.',
  secondaryCta: { href: '#labels', label: 'Labels first' },
  wa: 'Hello Modern Age Coders, my child wants to build AI, not just use chatbots. Could we book a free lesson about training models?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; models you train and test yourself',
  spec: [
    ['For', 'Ages 10 and up'],
    ['Focus', 'Training and testing models'],
    ['Starts with', 'Labelling your own data'],
    ['Then', 'Python and real libraries'],
    ['Curriculum', 'Digital Technologies, Years 7 to 10'],
    ['Format', 'Live online video'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Training AI means building a model from labelled examples and testing it on examples it has not seen, rather than prompting a model someone else built. The labels set the ceiling: two careful labellers who are each right 90% of the time agree on only about 82% of two-label examples. Students who check their own labels, hold back test data and measure honestly understand AI in a way prompting alone cannot teach.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses where students build the model',
    lede: 'From labelling pictures to training in Python. The free first lesson picks the right level.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'TRAU / 01', title: 'How machines learn, for children', note: 'Ages 8 to 14. Collect and label examples, train a simple classifier, then try to fool it.' },
      { course: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'TRAU / 02', title: 'Machine learning without code first', note: 'Teens. Build and test models visually, so the ideas come before the syntax.' },
      { course: 'ai-ml-masterclass-teens', code: 'TRAU / 03', title: 'Machine learning in Python', note: 'Teens ready for Python. Real datasets, real libraries, honest test scores.' }
    ]
  },

  sections: [
    {
      id: 'difference', tint: 'tint', eyebrow: 'Prompt or train',
      h2: 'Two very different ways to use AI',
      lede: 'Both are useful. Only one teaches how AI actually works.',
      body: [
        { kind: 'table', caption: 'Prompting a model compared with training one', head: ['Question', 'When you prompt a chatbot', 'When you train a model'], rows: [
          ['Who chose the data?', 'The company that built it', 'You'],
          ['Who decided what counts as right?', 'Its builders and their labellers', 'You and your labels'],
          ['How was it tested?', 'In ways you usually cannot see', 'On test data you held back'],
          ['Can you explain a wrong answer?', 'Rarely', 'Often, by inspecting your data'],
          ['What you learn', 'How to ask', 'How AI learns, and where it fails']
        ] },
        { kind: 'p', mt: true, html: 'Students who have trained even a small classifier read AI news differently. When a system makes a strange mistake, their first question is "what was it trained on, and who labelled it?", which is exactly the right question.' }
      ]
    },
    {
      id: 'curriculum', tint: 'deep', eyebrow: 'The curriculum',
      h2: 'What the Australian Curriculum asks students to explore',
      lede: 'Training, not only prompting, is already part of the Australian Curriculum v9. The elaborations for Digital Technologies in Years 7 to 10 describe it directly.',
      body: [
        { kind: 'table', caption: 'Machine learning in the Australian Curriculum v9, Digital Technologies, as published', head: ['Years', 'Code', 'Elaboration'], rows: [
          ['7 and 8', 'AC9TDI8P02', '"comparing the output from a classification model against data tagged manually to verify its accuracy and effectiveness"'],
          ['9 and 10', 'AC9TDI10P02', '"exploring machine learning, a form of artificial intelligence where an algorithm is trained using a data set, for example to classify images into categories"'],
          ['9 and 10', 'AC9TDI10P02', '"adjusting parameters of an AI model to observe the impact of different factors on predicted outcomes"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Data tagged manually',
          left: [
            'The Years 7 and 8 example compares a model\'s output with "data tagged manually". That phrase hides the whole subject of this page: someone has to tag the data, and people do not always agree.',
            'If the manual tags are unreliable, comparing a model against them measures the tags as much as the model.'
          ],
          rightH3: 'Trained using a data set',
          right: [
            'The Years 9 and 10 example describes machine learning as an algorithm "trained using a data set". The data set is where the student\'s choices live: what to collect, how to label it, and what to keep aside for testing.',
            'We teach those choices explicitly, because they matter more than any single algorithm.'
          ] },
        { kind: 'source', html: 'Source, read 7 October 2026: ACARA, <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Australian Curriculum v9, Digital Technologies content, Years 7 to 10</a>. Elaborations are examples, not compulsory content.' }
      ]
    },
    {
      id: 'labels', tint: 'tint', eyebrow: 'Labels first',
      h2: 'Inter-annotator agreement: the ceiling on your model',
      lede: 'Before training anything, ask two people to label the same examples independently and count how often they agree. Machine learning practitioners call this inter-annotator agreement, and it tells you how much your labels can be trusted.',
      body: [
        { kind: 'table', caption: 'How often two independent labellers agree on two-label data (our calculation and simulation)', head: ['Each labeller is right', 'Agreement, by formula', 'Agreement, 500 simulated runs of 200 items'], rows: [
          ['95% of the time', '90.5%', '90.5%'],
          ['90% of the time', '82.0%', '82.1%'],
          ['80% of the time', '68.0%', '68.0%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why agreement falls so fast',
          left: [
            'Two labellers agree when both are right or both are wrong in the same way. On two-label data the chance is p times p plus (1 minus p) times (1 minus p). At 90% each, that is 0.81 plus 0.01, or 82.0%.',
            'So two people who are each careful nine times in ten still disagree on nearly one example in five. Children are usually amazed by this, and then they understand why labelled data is precious.'
          ],
          rightH3: 'What it means for a model',
          right: [
            'Test a perfect model against labels that are 90% right and it will appear to score about 90%, because the "mistakes" are in the labels. A model can never look better than its answer key.',
            'One fix is a majority vote: three labellers at 90% each produce a majority label that is right 97.2% of the time. Better labels raise the ceiling for every model trained on them.'
          ] },
        { kind: 'p', mt: true, html: 'The scikit-learn library, which our older students use, has a ready-made measure called Cohen\'s kappa, which its documentation describes as "a statistic that measures inter-annotator agreement". Younger students start with simple percentage agreement, counted by hand and then by a few lines of Python.' },
        { kind: 'source', html: 'Source, read 7 October 2026: <a class="ag-inline-link" href="https://scikit-learn.org/stable/modules/generated/sklearn.metrics.cohen_kappa_score.html" rel="noopener" target="_blank">scikit-learn, cohen_kappa_score</a>. The agreement figures are our own calculation and simulation, labelled as such.' }
      ]
    },
    {
      id: 'testing', tint: 'deep', eyebrow: 'Testing honestly',
      h2: 'Keep some data back, every time',
      lede: 'The second habit of a real model-builder is never testing on the examples the model learned from.',
      body: [
        { kind: 'two',
          leftH3: 'The rule, in a library\'s own words',
          left: [
            'The scikit-learn user guide puts it bluntly: "Learning the parameters of a prediction function and testing it on the same data is a methodological mistake."',
            'A model that memorised its training examples would score perfectly on them and still fail on anything new.'
          ],
          rightH3: 'How children practise it',
          right: [
            'Younger students label 40 pictures, train on 30 and test on the other 10, which they hid in a separate folder. Older students use a train and test split in Python.',
            'Both learn the same thing: a score only means something if the model has never seen the test.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Label twice', p: 'Have two people label a sample independently and count agreement before training.' },
          { h3: 'Hide the test set', p: 'Set test examples aside before training starts, and do not peek.' },
          { h3: 'Change one thing', p: 'Adjust one setting at a time and watch the test score, just as the curriculum\'s example suggests.' }
        ] },
        { kind: 'source', html: 'Source, read 7 October 2026: <a class="ag-inline-link" href="https://scikit-learn.org/stable/modules/cross_validation.html" rel="noopener" target="_blank">scikit-learn User Guide, 3.1 Cross-validation</a>.' }
      ]
    },
    {
      id: 'at-home', tint: '', eyebrow: 'Try it at home',
      h2: 'A labelling experiment for a kitchen table',
      lede: 'Families can run the first stage of this page in half an hour with a pile of photos and two pencils. It needs no computer at all, and it makes the rest of machine learning easier to grasp.',
      body: [
        { kind: 'table', caption: 'A home labelling experiment in five steps', head: ['Step', 'What to do', 'What it teaches'], rows: [
          ['1. Choose a question', 'Pick something with two answers, such as "is this photo of a dog or a cat?" or "is this leaf from a gum tree?"', 'A model always starts from a clearly defined question'],
          ['2. Gather 30 examples', 'Print or collect 30 pictures, including a few awkward ones', 'Real data contains hard cases'],
          ['3. Label separately', 'Two family members label every picture without talking', 'Labels are human judgements'],
          ['4. Count agreement', 'Count how many of the 30 labels match and turn it into a percentage', 'Agreement is a measurement, not a feeling'],
          ['5. Discuss the misses', 'Look at every disagreement and decide what the rule should have been', 'Better instructions make better labels']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What families usually find',
          left: [
            'Most pairs agree on the easy pictures and split on the strange ones: a blurry photo, an animal half out of frame, a leaf from a garden shrub. Those disagreements are exactly the examples a model will find hard too.',
            'Writing a one-line rule for each disputed case, then labelling again, usually raises agreement. That is how professional labelling teams work.'
          ],
          rightH3: 'The step into code',
          right: [
            'Once the labels are agreed, the same 30 pictures become a first training set. Children train a simple classifier on 20 and test it on the other 10, and then explain every test mistake.',
            'The habit they carry forward is the most valuable one in the field: look hard at the data before trusting any score.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From prompting to building',
    lede: 'The progression we use, from a first labelled set to a tested model.',
    table: { caption: 'Four stages of training AI', head: ['Stage', 'What the student does'], rows: [
      ['1. Label', 'Collect and label a small set of examples, and measure agreement'],
      ['2. Train', 'Train a simple classifier in a visual tool'],
      ['3. Test', 'Hold back data, test honestly and explain the errors'],
      ['4. Code', 'Train and evaluate models in Python with real libraries']
    ] },
    left: { h3: 'For children', ps: [
      'Stages one and two use pictures, sounds and simple tools that need no adult-only accounts.',
      'The lessons are hands-on: children see their own labelling mistakes turn into model mistakes.'
    ] },
    right: { h3: 'For teens and adults', ps: [
      'Stages three and four use Python, real datasets and libraries such as scikit-learn.',
      'For the thinking side of AI use, read our page on <a class="ag-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learning to think, not just use AI tools</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for building AI yourself',
    lede: 'Grouped by age and experience. The free first lesson places each learner.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 8 to 12', courses: [
        { code: 'TRAU / CHD / 01', slug: 'ai-literacy-for-kids-course', title: 'Machines that learn from examples', blurb: 'Label, train, test, repeat.' },
        { code: 'TRAU / CHD / 02', slug: 'python-ai-kids-masterclass', title: 'Python and small models', blurb: 'First code that learns.' },
        { code: 'TRAU / CHD / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Games with an AI helper', blurb: 'Describe, build, then understand.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'TRAU / TEN / 01', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Visual machine learning', blurb: 'Models built with blocks and charts.' },
        { code: 'TRAU / TEN / 02', slug: 'ai-ml-masterclass-teens', title: 'Python machine learning', blurb: 'Real data, honest evaluation.' },
        { code: 'TRAU / TEN / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Cleaning and labelling data well.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'TRAU / ADL / 01', slug: 'ai-ml-masterclass-complete-college', title: 'Machine learning and deep learning', blurb: 'From Python to neural networks.' },
        { code: 'TRAU / ADL / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science, end to end', blurb: 'Data, models and evaluation.' },
        { code: 'TRAU / ADL / 03', slug: 'orange-data-mining-machine-learning-course-for-college-students', title: 'Machine learning without code', blurb: 'For analysts and students.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons where students make the data',
    lede: 'Students collect, label, train and test in every course. Teachers ask "how do you know?" until the answer is a measurement.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in your state.' },
      { time: 'Evenings', l: 'For senior students and adults.' },
      { time: 'Weekends', l: 'Saturday and Sunday options.' }
    ],
    cells: [
      { h3: 'Their own data', p: 'Students build datasets about things they care about.' },
      { h3: 'Agreement checked', p: 'Labels are double-checked before any training.' },
      { h3: 'Tests held back', p: 'Every model is tested on data it has never seen.' },
      { h3: 'Errors explained', p: 'Students find out why a model got something wrong.' },
      { h3: 'Groups', p: 'Fifteen to twenty learners, or one to one.' },
      { h3: 'Age-appropriate tools', p: 'Younger students use tools that need no adult accounts.' }
    ]
  },

  projectsH2: 'Models and projects our students built',
  projectsLede: 'Real work by learners who trained and tested their own models. See more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Families\' Google reviews, quoted exactly as they appear.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly fee in US dollars applies to every country outside India, at one shared rate. There is no charge to start and no term-length commitment, so any month can be your last.',
    free: ['A trial lesson at no cost', 'A frank view of the right level', 'Card details not needed'],
    group: ['Fifteen to twenty learners', 'A dedicated teacher', 'Similar age and level', 'Pay as you go, monthly'],
    one: ['Individual teaching', 'Flexible weekly time', 'Learner-led pace']
  },

  faq: {
    eyebrow: 'Questions from students and parents',
    h2: 'Common questions about training AI',
    items: [
      { q: 'What does learn to train AI, not just prompt it mean?', a: 'It means building and testing machine learning models from labelled data yourself, rather than only typing requests into a chatbot that someone else trained.' },
      { q: 'What is inter-annotator agreement?', a: 'Inter-annotator agreement measures how often two or more people labelling the same examples independently give the same label. It shows how reliable the labels are, and therefore how far any model trained on them can be trusted.' },
      { q: 'Why does agreement matter so much?', a: 'Because a model learns from labels and is scored against labels. If two careful labellers at 90% each agree only about 82% of the time, a model tested on those labels cannot show its true quality.' },
      { q: 'Is training AI part of the Australian Curriculum?', a: 'Yes. The Australian Curriculum v9 includes elaborations in Digital Technologies about exploring machine learning trained on a data set and comparing a classification model with manually tagged data.' },
      { q: 'What age can my child start training models?', a: 'Children from about 8 can label examples and train simple classifiers in visual tools. Training in Python usually starts from around 12 or 13.' },
      { q: 'Does my child need maths to train AI?', a: 'Basic percentages are enough to begin. More maths becomes useful later, and our maths and coding courses support each other.' },
      { q: 'What is a test set?', a: 'A test set is a group of examples kept aside and never shown to the model during training, so that its score on them shows how well it handles new data.' },
      { q: 'Will my child use ChatGPT or Claude in these courses?', a: 'Not to build the models. Students train their own. Where chatbots appear, we follow each tool\'s minimum age in its terms.' },
      { q: 'Are classes live?', a: 'Yes. Every lesson is live online with a teacher, in a group of fifteen to twenty or one to one, at times set for your state.' },
      { q: 'How much are the courses?', a: 'The first lesson is free. Families then pay monthly with no joining fee and no term lock-in, as shown in the fees section.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on thinking with AI, AI for different ages and Python.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main page for Australian families.' },
      { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Learn to think, not just use AI', p: 'Checking AI answers properly.' },
      { href: '/python-ai-course-for-kids-australia', label: 'Python and AI for kids', p: 'A first AI course in Python.' },
      { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens', p: 'AI for secondary students.' },
      { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code', p: 'Owning what you write.' },
      { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning in Australia', p: 'Our AI hub for Australian learners.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Share a number and a time. The learner labels a few examples, trains a tiny model and tests it with a teacher, so you can see the difference between building AI and asking it.',
    readFirst: 'Reading first is fine too: <a class="ag-inline-link" href="/how-we-teach">how a lesson runs</a>, or <a class="ag-inline-link" href="/courses">the full course list</a>.',
    note: 'WhatsApp from Australia reaches our team in India fastest; replies come from a +91 number, as we have no Australian office.',
    formNote: 'Free trial, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Building AI', links: [
        { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning' },
        { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Think, not just use AI' },
        { href: '/python-ai-course-for-kids-australia', label: 'Python and AI for kids' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens' },
        { href: '/ai-courses-for-kids-australia', label: 'AI courses for kids' },
        { href: '/online-coding-tutor-australia', label: 'Online coding tutor' }
      ] }
    ],
    bottomRight: 'A model is only as good as its answer key'
  },

  personalityCss: `
.ag-root.ag-trau .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-trau .ag-capsule { border-left-width: 4px; border-radius: 12px; }
.ag-root.ag-trau .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-trau .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-trau .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-trau .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, training AI. ACARA v9 Digital Technologies 7-10: elaboration under AC9TDI8P02 "comparing the output from a classification model against data tagged manually to verify its accuracy and effectiveness"; elaborations under AC9TDI10P02 "exploring machine learning, a form of artificial intelligence where an algorithm is trained using a data set, for example to classify images into categories" and "adjusting parameters of an AI model to observe the impact of different factors on predicted outcomes". scikit-learn: cohen_kappa_score is "a statistic that measures inter-annotator agreement"; User Guide 3.1: "Learning the parameters of a prediction function and testing it on the same data is a methodological mistake".',
    localProject: 'Inter-annotator agreement on two-label data: two independent labellers each right with probability p agree p^2 + (1-p)^2 of the time; p = 0.95, 0.90, 0.80 give 90.5%, 82.0%, 68.0% (500 simulated runs of 200 items gave 90.5%, 82.1%, 68.0%); a majority of three labellers at 90% is right 97.2% of the time; a perfect model scored against 90%-right labels appears to score about 90%. Lesson family: inter-annotator agreement.',
    requiredMentions: ['inter-annotator agreement', 'AC9TDI8P02', 'trained using a data set', 'data tagged manually', 'adjusting parameters of an AI model', '90.5%', '82.0%', '68.0%', 'methodological mistake'],
    sources: [
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies content 7-10: AC9TDI8P02 and AC9TDI10P02 elaborations.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' },
      { claim: 'scikit-learn, cohen_kappa_score: measures inter-annotator agreement.', url: 'https://scikit-learn.org/stable/modules/generated/sklearn.metrics.cohen_kappa_score.html' },
      { claim: 'scikit-learn User Guide 3.1, Cross-validation: testing on training data is a methodological mistake.', url: 'https://scikit-learn.org/stable/modules/cross_validation.html' }
    ],
    rejectedClaims: [
      'The AC9TDI10P01 "zero problem" elaboration: already the lesson of the AI courses for kids page, so not repeated here.',
      'Teachable Machine features: its pages render by script and were not read raw, so the tool is not named.',
      'Australia\'s AI Ethics Principles: industry.gov.au timed out, so they are not quoted.',
      'Real agreement rates for any public dataset: no primary source read; the page uses formula and simulation and says so.',
      'Claims that any chatbot was trained on mislabelled data: refused.'
    ]
  }
};
