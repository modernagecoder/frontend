'use strict';
// Grantham (cg- town page, UK cluster Phase 10, towns band B, row 536). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: does the order in which a model sees its
// training examples matter, and is "easy first" a free win? (curriculum learning on South Kesteven output areas).
// Data (read 30 September 2026): Nomis Census 2021 for all 466 South Kesteven output areas: TS006 density, TS017
// household size, TS007A age, TS044 accommodation type; ONS OA21 to BUA22 lookup.
// Our run (scratchpad gtm/feat.py, gtm/cur.py, output gtm/cur_final.txt): label = output area inside one of the five
// built-up areas of 5,000+ wholly in the district (Grantham, Stamford, Bourne, Deeping St James, Market Deeping): 321
// yes, 145 no; majority guess 68.9%. Six features, standardised on the training part: log10 density, one-person
// household share, 65+ share, detached share, flats share, under-15 share. 200 random splits, 326 train / 140 test.
// Difficulty from a teacher logistic regression fitted to the training part (confidence in the true label). Student:
// logistic regression by stochastic gradient descent, learning rate 0.1, one pass in the chosen order, test accuracy
// after 10 / 25 / 50 / 100 / 200 / 326 examples, then four reshuffled passes. Mean accuracy (%): random 79.4 / 84.3 /
// 86.8 / 88.1 / 88.3 / 88.2, after five passes 88.1; easy first 68.5 / 73.1 / 74.8 / 77.1 / 88.3 / 86.9, 88.2; easy
// first with classes alternated 71.2 / 71.7 / 73.1 / 75.2 / 74.9 / 83.0, 88.1; hard first 21.3 / 16.5 / 20.2 / 72.7 /
// 87.4 / 88.3, 88.2. Easy first behind random at 50 examples in 200 of 200 splits; hard first behind random at 10, 25
// and 50 examples in 200 of 200. After five passes: easy ahead of random in 73 splits, behind in 74; hard ahead 77,
// behind 69. The 40 easiest training areas (whole data teacher): 33 town (82.5%).
// Lesson family: curriculum learning (order of training examples; easy-first, hard-first, class balance).
// Place facts: South Kesteven (E07000141) TS001 143,404. ONS 2021 BUAs of 5,000+ wholly inside it (published):
// Grantham 44,905; Stamford 20,750; Bourne 17,495; Deeping St James 7,255; Market Deeping 6,535.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'GRANTHAM', label: 'Grantham', blurb: 'AI and programming classes for Grantham in Lincolnshire, with a machine learning project that tests whether teaching a model the easy cases first really helps.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-grantham',
  code: 'gtm',
  accent: '#207050',
  accentRationale: 'Grantham: a sea green (6.01:1 contrast on white), chosen by hand as a muted tone kept clear of neighbouring pages',
  pageType: 'city',
  place: {
    name: 'Grantham',
    eyebrow: 'Grantham, South Kesteven, Lincolnshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Lincolnshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-midlands', name: 'East Midlands' }],
  nav: [
    { label: 'Lincolnshire', href: '/coding-classes-in-lincolnshire' },
    { label: 'Boston', href: '/best-coding-and-ai-classes-in-boston' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Grantham, Lincolnshire',
  title: 'AI and Programming Classes in Grantham, Lincolnshire',
  description: 'AI, programming, Python and vibe coding classes live online for Grantham, Harrowby, Spittlegate, Manthorpe and Great Gonerby, ages 6 to 67. The first lesson is free.',
  ogDescription: 'AI and programming classes for Grantham, with a machine learning project: does feeding a model the easy examples first help? Tested 200 times on South Kesteven census areas.',
  twitterDescription: 'Grantham, Lincolnshire: AI, programming, Python and vibe coding lessons live online for ages 6 to 67, starting with a free lesson.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Grantham, Lincolnshire',
    description: 'AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Grantham and South Kesteven, taught live online with experiments repeated until the result is clear.'
  },

  h1: 'AI and programming classes in Grantham',
  capsuleQ: 'Where can Grantham learners find the best AI and programming classes?',
  capsule: 'Grantham\'s built-up area had 44,905 residents at the 2021 census, on ONS figures, in a South Kesteven district of 143,404. postcodes.io records Spittlegate, Manthorpe, Earlesfield and Gonerby Hill Foot as suburban areas and Harrowby as a settlement, all with their nearest postcode inside the Grantham built-up area, and lists Great Gonerby, Barrowby, Londonthorpe, Belton, Harlaxton and Barkston as villages. Modern Age Coders teaches AI, programming, Python, vibe coding and maths to anyone aged six to 67 through live video lessons with tutors in India, as private lessons or as a class of five to ten at one level. We want learners to treat a clever-sounding idea as a hypothesis, and to test it enough times to believe the answer. The Grantham project trains a small machine learning model on South Kesteven census areas and checks, 200 times over, whether showing it the easy examples first helps it learn. The opening lesson is free and ends with our recommended course; afterwards a class seat is USD 100 monthly and a private tutor USD 150 monthly.',
  lead: 'Teachers start with easy examples and build up to hard ones, so why not machines? The idea has a name, curriculum learning, and it is attractive enough that it often gets used without being checked. Whether it helps depends on the model, the data and what "easy" means. That makes it a perfect question for a learner to settle by experiment rather than by opinion, and the census areas of South Kesteven, some plainly town and some plainly countryside, with plenty of awkward cases in between, give a model something real to learn.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a learner in Grantham.',

  picks: {
    eyebrow: 'Choose a course',
    h2: 'AI, programming and thinking courses for Grantham',
    intro: 'Pick by age. The first live lesson on each course is free, and no card is taken to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: sort picture cards into town and country, then argue about the ones that fit neither.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Get an AI to make a Scratch sorting game, then change the order of the questions and see if scores change.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'How models learn, including the South Kesteven training-order experiment in Python.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects written with an assistant, where every claim is tested more than once.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'South Kesteven',
      h2: 'Grantham and the district\'s other towns',
      intro: 'The five built-up areas of at least 5,000 people that lie wholly inside South Kesteven, which also define "town" in the project below.',
      body: [
        { kind: 'table', caption: 'Built-up areas of 5,000 or more wholly inside South Kesteven, 2021 census residents (ONS)', head: ['Built-up area', 'Residents'], rows: [
          ['Grantham', '44,905'],
          ['Stamford', '20,750'],
          ['Bourne', '17,495'],
          ['Deeping St James', '7,255'],
          ['Market Deeping', '6,535']
        ] },
        { kind: 'p', text: 'We reproduce the ONS figures without adding them together; the district figure of 143,404 comes from a separate census table. Around Grantham, postcodes.io also lists Great Ponton, Syston, Denton, Allington, Sedgebrook, Ropsley, Old Somerby and Colsterworth as villages. Grantham schools follow the national curriculum for England, and our lessons are arranged round whichever term dates you pass on.' },
        { kind: 'callout', h3: 'Lincolnshire, the East Midlands and our teaching', p: 'The county page is <a class="cg-inline-link" href="/coding-classes-in-lincolnshire">coding classes in Lincolnshire</a> and the region\'s is <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">the East Midlands</a>. The case for putting thinking before tools is made in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Grantham project',
      h2: 'Curriculum learning, tested 200 times',
      intro: 'Train the same model on the same examples in four different orders and see what order really does.',
      body: [
        { kind: 'p', text: 'The learner downloads four census tables from Nomis for all 466 output areas in South Kesteven and builds six numbers for each: population density on a log scale, and the shares of one-person households, residents aged 65 or over, detached homes, flats and children under 15. The label says whether the area lies inside one of the five towns in the table above: 321 do and 145 do not. A model that always answered "town" would be right 68.9% of the time, so that is the score to beat.' },
        { kind: 'p', text: 'The model is logistic regression, trained one example at a time by gradient descent, which makes the order of examples matter. To rank examples from easy to hard the learner first trains a "teacher" model on the training data and records how confident it is about each example\'s true label. Then four students are trained on the same 326 training areas in different orders: random, easiest first, easiest first but alternating town and country, and hardest first. Each student is scored on 140 areas it has never seen, after 10, 25, 50, 100, 200 and all 326 examples, then again after four more passes in random order. The whole thing is repeated on 200 random splits of the data.' },
        { kind: 'table', caption: 'Accuracy on unseen areas after a given number of training examples, mean of 200 splits (our Python)', head: ['Order of examples', 'After 10', 'After 50', 'After 100', 'After 326', 'After five full passes'], rows: [
          ['Random', '79.4%', '86.8%', '88.1%', '88.2%', '88.1%'],
          ['Easiest first', '68.5%', '74.8%', '77.1%', '86.9%', '88.2%'],
          ['Easiest first, town and country alternated', '71.2%', '73.1%', '75.2%', '83.0%', '88.1%'],
          ['Hardest first', '21.3%', '20.2%', '72.7%', '88.3%', '88.2%']
        ] },
        { kind: 'p', text: 'Easy first did not help. It was behind random order after 50 examples in every one of the 200 splits. Part of the reason is visible straight away: the 40 easiest areas, ranked by a teacher trained on all 466, are 82.5% town, so an easy-first model spends its early lessons on one class. Alternating town and country fixes that and still loses to random, in 199 of 200 splits at 100 examples. Our reading is that the easy examples sit far from the boundary between town and country: they show which way the line should face but not where it should go, and the examples that pin it down come last.' },
        { kind: 'p', text: 'Hardest first was dramatic in the other direction. After 10 to 50 examples it scored between 16% and 21%, far worse than always guessing "town", in all 200 splits. The hardest examples are the ones that break the pattern, town areas that look rural and village areas that look urban, so a model that learns from them first learns the rule backwards. And the ending matters as much as the start: after five full passes every order finished between 88.1% and 88.2%, and easy first beat random in 73 splits while losing in 74. Order changed how the model got there, not where it ended up.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Teach a friend to sort town and country pictures, once starting with obvious ones and once with odd ones, and compare.' },
          { h3: 'Ages 11 to 15', p: 'Train a tiny model in Python on the census areas and plot its accuracy as each example arrives.' },
          { h3: 'Ages 15 and up', p: 'Build the teacher, the four orders and the 200 splits, then design a curriculum that actually beats random.' }
        ] },
        { kind: 'callout', h3: 'Data and honesty notes', p: 'Census 2021 tables TS006, TS017, TS007A and TS044 via Nomis, and the ONS output area to built-up area lookup, under the Open Government Licence. The label, the features, the models and every percentage are ours. A different model, a smaller learning rate or a different idea of "easy" could give a different result; the page reports what this setup did, not a law of machine learning.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Order and learning',
      h2: 'What training order teaches about AI and vibe coding',
      intro: 'An idea that sounds obviously right still needs an experiment, repeated enough times to trust.',
      body: [
        { kind: 'table', caption: 'From South Kesteven\'s census areas to AI practice', head: ['In the project', 'In AI practice'], rows: [
          ['Easy first behind random in 200 of 200 splits', 'Intuitions about teaching do not transfer automatically to models'],
          ['The 40 easiest were 82.5% town', 'Check what a sorting rule does to class balance'],
          ['Hardest first 16% to 21% accurate early on', 'Atypical data seen early can mislead a model'],
          ['All orders 88.1% to 88.2% after five passes', 'Separate effects on speed from effects on the final result'],
          ['200 splits, not one', 'One lucky run proves nothing']
        ] },
        { kind: 'p', text: 'The order of training data is a live design question for the people who train large AI models, which see enormous mixtures of text in some sequence. The same caution applies there: an ordering that sounds sensible has to be tested, and effects on how fast a model learns are easy to confuse with effects on how well it ends up. Ask an AI assistant to vibe code a training loop and it will shuffle the data or not, usually without mentioning why. Grantham learners know that choice can matter early and vanish later, and they know how to check. Building AI agents follows once someone can write Python on their own, generally from the sixth form onwards, and Copilot Studio agents are kept to private lessons. Read <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for students in the UK</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'This experiment has not been reviewed by the Office for National Statistics or by postcodes.io, who are not connected with us. We use their open data; the experiment and its conclusions are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning route',
    h2: 'From sorting cards to training models',
    intro: 'Year groups are only a first guess; the free lesson shows us the right place to start.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Sorting, rules and the examples that break them.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Sorting and quiz games made with AI help and tested by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Training, testing and repeating experiments, next to GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Machine learning at work', p: 'Python basics, then machine learning, generative AI and agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and training',
    h2: 'What is curriculum learning in machine learning?',
    intro: 'Curriculum learning is the practice of training a machine learning model on its examples in a planned order, usually from easy to hard, instead of in random order, on the idea that a model, like a pupil, learns faster when the difficulty builds up gradually; whether it helps has to be tested for each model and dataset.',
    p1: 'Training a small model on 466 South Kesteven census areas, easiest-first ordering was behind random order after 50 examples in all 200 of our test splits, 74.8% accurate against 86.8%.',
    p2: 'Hardest first scored 16% to 21% early on, yet after five full passes every ordering finished between 88.1% and 88.2%.',
    closer: 'Grantham teenagers who have run that experiment ask two things of any claimed AI improvement: was it tested more than once, and did it change the end result or only the speed? Asking well comes from coding the test yourself, which is a sound reason to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson basics',
    h2: 'Harrowby, Spittlegate and Great Gonerby in the same online class',
    intro: 'A computer with a camera and a connection that can hold a video call is enough.',
    cells: [
      { h3: 'Learner leads', p: 'The student codes on a shared screen; the tutor asks the questions.' },
      { h3: 'Placed after the trial', p: 'We see what a learner can do before recommending a level.' },
      { h3: 'Free first lesson', p: 'A full lesson with no card, ending with our advice.' },
      { h3: 'One level per class', p: 'Five to ten learners at the same stage, from around the UK.' },
      { h3: 'Two sessions weekly', p: 'Send us your holiday weeks and we drop them.' },
      { h3: 'A time that holds', p: 'Clock changes are managed by our tutors, not by you.' }
    ],
    spec: { title: 'Why learn online', p: 'A class of learners at exactly one stage needs more candidates than a single district holds. The UK as a whole has plenty.' }
  },

  fees: {
    h2: 'Grantham lesson prices',
    intro: 'Grantham is billed at our international rates, which apply outside India.',
    first: 'One full lesson free, finishing with our course recommendation.',
    group: 'Around eight group lessons a month.',
    private: 'Around eight private lessons a month.',
    closer: 'All fees are in US dollars; we give no price in pounds. Billing starts once the trial is done and a course and weekly slot are agreed. The pricing page covers holidays, missed sessions and changing format.'
  },

  reviewsH2: 'East Midlands families and UK learners on Google',

  book: {
    h2: 'Request a free Grantham lesson',
    intro: 'Send an age or school year and one interest. The trial might be a sorting puzzle, a Scratch game built with AI, first Python code, or a first model trained on real data.',
    success: 'Thank you. We have your Grantham request and will be in touch shortly.'
  },

  faq: {
    h2: 'Grantham questions',
    intro: 'Curriculum learning, the census project, AI, programming and practical details.',
    items: [
      { q: 'What is the population of Grantham?', a: 'The ONS recorded 44,905 usual residents in the Grantham built-up area at the 2021 census, within a South Kesteven district of 143,404.' },
      { q: 'Can Grantham learners join AI and programming classes online?', a: 'Yes. Lessons are live on video for ages 6 to 67, for Grantham, Harrowby, Spittlegate, Manthorpe, Great Gonerby and the rest of South Kesteven.' },
      { q: 'What is logistic regression?', a: 'A simple machine learning model that combines input numbers with learned weights and turns the total into a probability between 0 and 1, for example the chance that an area is part of a town.' },
      { q: 'Why did hardest first do so badly at the start?', a: 'Because the hardest examples are the exceptions: town areas that look rural and village areas that look urban. Learning from those first taught the model the opposite of the usual pattern.' },
      { q: 'What do learners build in the Grantham project?', a: 'Six census features for 466 South Kesteven areas, a logistic regression trained one example at a time, four training orders, and a test repeated on 200 random splits.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, at all ages. The learner directs an AI to write code, then reads and tests it.' },
      { q: 'When can learners build AI agents?', a: 'When Python comes naturally to them without support, which for most means sixteen or older. Copilot Studio work is private-lesson only.' },
      { q: 'Do lessons help with GCSE and A level?', a: 'They do, for computer science and maths. The goal is understanding, and no grade is guaranteed.' },
      { q: 'What does it cost?', a: 'Lesson one costs nothing. Continuing is USD 100 per month in a class or USD 150 per month on your own with a tutor.' },
      { q: 'Do lessons pause for holidays?', a: 'Yes, for any dates you send us.' }
    ]
  },

  next: {
    eyebrow: 'More of Lincolnshire',
    h2: 'Nearby towns with their own projects',
    html: 'You will find quite different lessons on the pages for <a class="cg-inline-link" href="/best-coding-class-in-lincoln">Lincoln</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-boston">Boston</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-grimsby">Grimsby</a>, and the county has a page at <a class="cg-inline-link" href="/coding-classes-in-lincolnshire">Lincolnshire</a>. For the rest of the country, use the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Grantham and Lincolnshire',
  footerPlaces: [
    { href: '/coding-classes-in-lincolnshire', label: 'Lincolnshire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-gtm .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.1vw, 2.5rem); }
.cg-root.cg-gtm .cg-hero h1 { font-weight: 760; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-gtm .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-gtm .cg-eyebrow { letter-spacing: 0.1em; font-weight: 690; font-size: 0.82rem; }
.cg-root.cg-gtm .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.019em; }
.cg-root.cg-gtm .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 500; }
.cg-root.cg-gtm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gtm .cg-table th { font-size: 0.82rem; font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-gtm .cg-ladder-col { border-right: 3px solid var(--cg-accent); padding-right: 0.8rem; }
.cg-root.cg-gtm .cg-callout { border-left-width: 4px; border-radius: 0; }
`,

  dossier: {
    curriculumAuthority: 'South Kesteven (E07000141), Census 2021 TS001 usual residents 143,404. ONS 2021 BUAs of 5,000+ wholly inside the district (published): Grantham 44,905; Stamford 20,750; Bourne 17,495; Deeping St James 7,255; Market Deeping 6,535. postcodes.io (South Kesteven), nearest postcode in the Grantham BUA: Spittlegate, Manthorpe (NG31), Earlesfield, Gonerby Hill Foot (suburban areas), Harrowby (other settlement); villages: Great Gonerby, Barrowby, Londonthorpe, Belton, Harlaxton, Barkston, Great Ponton, Syston, Denton, Allington, Sedgebrook, Ropsley, Old Somerby, Colsterworth. England national curriculum.',
    localProject: 'Nomis Census 2021 TS006, TS017, TS007A, TS044 for 466 South Kesteven OAs; ONS OA21-BUA22 lookup. Label: OA in Grantham, Stamford, Bourne, Deeping St James or Market Deeping BUA (321 yes, 145 no; majority 68.9%). Features: log10 density, one-person share, 65+ share, detached share, flats share, under-15 share (standardised on train). 200 splits 326/140. Teacher logistic regression on train gives difficulty. Student SGD logistic regression lr 0.1, one ordered pass then four shuffled passes. Test accuracy after 10/25/50/100/200/326 and after 5 passes: random 79.4/84.3/86.8/88.1/88.3/88.2, 88.1; easy first 68.5/73.1/74.8/77.1/88.3/86.9, 88.2; easy alternated 71.2/71.7/73.1/75.2/74.9/83.0, 88.1; hard first 21.3/16.5/20.2/72.7/87.4/88.3, 88.2. Easy behind random at 50 in 200/200; alternated behind at 100 in 199/200; hard behind at 10/25/50 in 200/200. Final: easy ahead 73, behind 74; hard ahead 77, behind 69. 40 easiest: 82.5% town. Lesson family: curriculum learning, training order, class balance.',
    requiredMentions: [
      '44,905',
      '143,404',
      'Harrowby',
      'Spittlegate',
      'Earlesfield',
      'Gonerby Hill Foot',
      'Great Gonerby',
      'Londonthorpe',
      'Harlaxton',
      'curriculum learning',
      '68.9%'
    ],
    sources: [
      { claim: 'Census 2021 tables TS006, TS017, TS007A and TS044 for South Kesteven output areas, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS output area (2021) to built-up area (2022) lookup and 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places and nearest postcodes for South Kesteven.', url: 'https://api.postcodes.io/places?q=Spittlegate' },
      { claim: 'Bengio, Louradour, Collobert and Weston (2009), Curriculum learning, Proceedings of the 26th International Conference on Machine Learning, 41 to 48.', url: 'https://doi.org/10.1145/1553374.1553380' }
    ],
    rejectedClaims: [
      'Isaac Newton, the King\'s School or any other Grantham history: not used.',
      'That curriculum learning never helps: not claimed; only this setup was tested.',
      'How any named AI company orders its training data: not claimed.',
      'Anything about residents of particular output areas: not claimed.',
      'Sum of the listed built-up areas: not added.',
      'Named schools and term dates: none named.',
      'Sterling prices: none.'
    ]
  }
};
