'use strict';
// Farnborough (cg- town page, UK cluster Phase 8, towns band A, row 405). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how can you tell which inputs an AI model
// really relies on? (feature importance: impurity-based scores versus permutation importance, a random-noise control
// column, correlated features sharing credit, instability on small data).
// Data (read 29 September 2026): Nomis Census 2021 for all 318 output areas in Rushmoor (E07000092): TS044 accommodation
// type (NM_2062_1; 39,339 households, 10,831 in a flat of any kind: categories 4 to 7, of which 9,138 purpose-built),
// TS045 no-car share (NM_2063_1), TS017 one-person share (NM_2037_1), TS006 density (NM_2026_1).
// Our run (scratchpad fbr/imp.py): target = % of households in a flat. Inputs: log density, one-person share, no-car
// share, and a column of uniform random numbers. scikit-learn random forest (300 trees), 20 random 70/30 splits; test R2
// mean 0.652. Mean impurity (built-in) importance: no-car 45.3%, one-person 36.6%, density 12.1%, random 6.0%. Mean
// permutation importance on the test set (drop in R2, 20 shuffles): no-car 0.429, one-person 0.342, density 0.065 (range
// -0.023 to 0.121 across splits), random -0.001. Correlation one-person vs no-car share 0.66.
// Lesson family: feature importance and explainability of a trained model (permutation importance, impurity bias, a noise
// control). Screened: "permutation importance", "feature importance", "impurity" 0 hits. Redditch = decision tree depth
// and explainability; Hastings = active learning on flats; here only the target coincides.
// Place facts: Rushmoor TS001 99,756. ONS 2021 BUAs (published): Farnborough 60,655; Aldershot 39,825. postcodes.io
// suburban areas whose nearest OA centroid lies in the Farnborough BUA (our check): Cove, North Camp, Southwood, West
// Heath, Farnborough Park, Farnborough Street.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'FARNBOROUGH', label: 'Farnborough', blurb: 'Coding and AI classes for Farnborough in Hampshire, with a project that asks a machine learning model which inputs it truly depends on.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-farnborough',
  code: 'fnb',
  accent: '#466B4D',
  accentRationale: 'Farnborough: a grey-green (4.88:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Farnborough',
    eyebrow: 'Farnborough, Rushmoor, Hampshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Hampshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Hampshire', href: '/coding-classes-in-hampshire' },
    { label: 'Guildford', href: '/ai-and-programming-classes-in-guildford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Farnborough, Hampshire',
  title: 'Coding and AI Classes in Farnborough | Python, Ages 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Farnborough, Cove, North Camp and Aldershot learners aged 6 to 67, taught live by a tutor. First lesson free.',
  ogDescription: 'Coding and AI classes for Farnborough, Hampshire, with a Census project that tests which inputs a machine learning model genuinely relies on.',
  twitterDescription: 'Farnborough coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Farnborough',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Farnborough, Aldershot and Rushmoor, taught live with reasoning skills first.'
  },

  h1: 'Coding and AI classes in Farnborough',
  capsuleQ: 'Where can Farnborough learners find the best coding and AI classes?',
  capsule: 'The ONS gives the Farnborough built-up area 60,655 residents at the 2021 census and Aldershot 39,825, in Rushmoor, a borough of 99,756. Cove, North Camp, Southwood, West Heath and Farnborough Park are recorded suburbs lying inside Farnborough\'s built-up area. Rushmoor learners aged six to 67 are taught coding, AI, Python, vibe coding and maths on camera by tutors working from India, privately or inside a level-matched class of five to ten. We put thinking first, so learners can explain why a model or chatbot said what it did. Your first lesson is free and closes with our course recommendation. The Farnborough project trains a model on 318 Census areas and then interrogates it about which inputs it actually uses, with a column of random numbers planted as a test. Past the trial, a class place is USD 100 per month and a private tutor USD 150 per month.',
  lead: 'Once a machine learning model is trained, people want to know why it predicts what it does. The common shortcut is a feature importance score, a percentage for each input that most libraries print with one line of code. Those numbers look authoritative, but they are not all equally trustworthy. This project gives a random forest four inputs about each of Rushmoor\'s 318 Census areas, three genuine and one made of pure random numbers, and asks it to predict how many households live in flats. Then it compares two ways of asking the model which inputs mattered. A good method should give the random column nothing.',
  wa: 'Hello Modern Age Coders, may we book a free coding or AI lesson for a learner in Farnborough?',

  picks: {
    eyebrow: 'Farnborough course picks',
    h2: 'Farnborough courses in reasoning, Python and AI',
    intro: 'Pick a course by age and interest. Lesson one of each is live and free, with no card needed.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: testing ideas, controls and asking which clue really mattered.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with an AI and tested for every bug.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including the random-column importance test on Rushmoor data.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Modern AI, how models are evaluated and explained, and AI agents in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Farnborough and Rushmoor',
      h2: 'Farnborough, Aldershot, Cove and North Camp',
      intro: 'The borough\'s two ONS built-up areas, and recorded suburbs within Farnborough.',
      body: [
        { kind: 'table', caption: 'ONS built-up areas in Rushmoor, 2021 census residents', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Farnborough', '60,655'],
          ['Aldershot', '39,825']
        ] },
        { kind: 'p', text: 'These counts come straight from the ONS and are not added together; the Rushmoor figure of 99,756 is from a separate table. Postcodes.io records Cove, North Camp, Southwood, West Heath, Farnborough Park and Farnborough Street as suburban areas, and in each case the nearest Census output area sits in the Farnborough built-up area. Hampshire schools teach England\'s national curriculum; share the holiday dates and lessons will avoid them.' },
        { kind: 'callout', h3: 'Hampshire, the South East and why reasoning first', p: 'More choices are on <a class="cg-inline-link" href="/coding-classes-in-hampshire">coding classes in Hampshire</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>. Our view on thinking before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Farnborough project',
      h2: 'Which inputs does the model use? Feature importance with a random-number control',
      intro: 'Train a model, plant a fake input, and see which importance method is fooled.',
      body: [
        { kind: 'p', text: 'From the Nomis API the learner downloads four Census 2021 tables for all 318 output areas in Rushmoor. Of 39,339 households, 10,831 live in a flat of some kind, most of them, 9,138, in purpose-built blocks. The share in flats is the target. The inputs are population density, the share of one-person households, the share of households without a car, and a fourth column filled with random numbers that cannot carry any information. A random forest is trained on 70% of the areas and tested on the other 30%, and the whole process is repeated on 20 different random splits.' },
        { kind: 'p', text: 'On unseen areas the model explains about 65% of the variation in the flat share. Two importance methods are then compared. The first is the forest\'s built-in score, based on how much each input helped split the training data. The second, permutation importance, shuffles one input at a time on the test areas and measures how much worse the predictions become.' },
        { kind: 'table', caption: 'Importance of each input for predicting the share of households in flats, averages over 20 splits, our Python run on Census 2021 data for Rushmoor', head: ['Input', 'Built-in score', 'Permutation: accuracy lost when shuffled'], rows: [
          ['No-car share', '45.3%', '0.429'],
          ['One-person share', '36.6%', '0.342'],
          ['Population density', '12.1%', '0.065'],
          ['Random numbers', '6.0%', '-0.001']
        ] },
        { kind: 'p', text: 'The built-in score hands the random column 6.0%, half as much as density. That happens because the score is measured on the training data, where a forest can always find some split on noise that fits a few areas slightly better. Permutation importance, measured on areas the model never saw, gives the random column essentially zero: shuffling it changes nothing. Two more warnings emerge. Density\'s permutation score swings from -0.023 to 0.121 across the 20 splits, so with only a few hundred areas the smaller scores are shaky. And the no-car and one-person shares are correlated (0.66), so they partly stand in for each other; their scores describe this model, not which one causes flats.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Hide one clue in a guessing game, see if the guesses get worse, and decide which clues really helped.' },
          { h3: 'Ages 11 to 15', p: 'Chart Rushmoor\'s flat share against each input in Python and spot which ones move together.' },
          { h3: 'Ages 15 and up', p: 'Train the forest, add a noise column, and compare built-in and permutation importance.' }
        ] },
        { kind: 'callout', h3: 'Census tables, our model', p: 'Accommodation, car, household and density data are Office for National Statistics Census 2021 releases via Nomis, under the Open Government Licence. The model, the random column and every importance figure are our own calculations.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Explaining models',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'When a model explains itself, treat the explanation as one more output to verify.',
      body: [
        { kind: 'table', caption: 'From the Farnborough importance test to working with AI', head: ['In the flats project', 'When AI explains a result'], rows: [
          ['Random numbers scored 6.0% built-in', 'Default explanations can credit noise'],
          ['Permutation gave them about zero', 'Test importance on data the model has not seen'],
          ['Density swung between splits', 'Small datasets give unstable explanations'],
          ['Two inputs were correlated', 'Importance is not the same as cause'],
          ['A planted fake input exposed the flaw', 'Build controls into every check']
        ] },
        { kind: 'p', text: 'Ask an AI assistant which factors matter most in a dataset and it will often train a quick model and read out the built-in importance scores as if they were facts. Vibe coding lets learners describe the analysis in words while an AI writes the Python; our Farnborough learners add a random control column and a permutation check before they believe any ranking. AI agents that analyse data and write reports face the same trap, so the controls belong in their instructions. Agents come later in our courses, once Python flows, which is mostly for sixteen-plus learners; anything in Copilot Studio is delivered only in private lessons. Our <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">UK agents course page</a> maps the steps; <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> explains the thinking.' },
        { kind: 'p', text: 'The ONS, Nomis and postcodes.io have no part in this page beyond publishing the open data it uses; the forest, the planted column and any error are ours alone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From clue games to explaining models',
    intro: 'A school year gives a starting guess; the free lesson pins down the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Clues, controls and asking what really made the difference.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps built with an AI and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Models, importance and controls alongside GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'AI, evaluation and agents', p: 'How models are judged and explained, then agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Explainable AI',
    h2: 'What is feature importance in machine learning, and can you trust it?',
    intro: 'Feature importance scores how much each input contributes to a model\'s predictions; permutation importance on held-out data is generally more trustworthy than the built-in scores many libraries print by default.',
    p1: 'On Rushmoor\'s 318 Census areas, a random forest\'s built-in score credited a column of pure random numbers with 6.0%, while permutation importance on unseen areas gave it about zero.',
    p2: 'Learners who have run that test ask of any AI explanation: was it measured on new data, and would it credit noise?',
    closer: 'Farnborough teenagers who can audit an explanation will not be talked round by a confident chart, and coding is where that audit skill is learned.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Cove to North Camp, all online',
    intro: 'Bring a computer and an internet connection that handles video; that is the whole kit list.',
    cells: [
      { h3: 'Learner at the controls', p: 'Code, prompts and test runs are all done by the student, with the tutor following the shared screen and asking for reasons.' },
      { h3: 'Starting from the trial', p: 'What the free session uncovers sets the first topic; exam boards go on file.' },
      { h3: 'No fee for lesson one', p: 'The trial is free and wraps up with a course suggestion.' },
      { h3: 'Same-level classes', p: 'Five to ten learners from across the UK make up each class, all at one stage.' },
      { h3: 'Two each week', p: 'Paused in school holidays.' },
      { h3: 'Stable lesson time', p: 'Tutors adjust when UK clocks change, so your hour stays put.' }
    ],
    spec: { title: 'Why lessons are online', p: 'Five learners at the same level with the same free evening are rarely neighbours. Video means they do not need to be.' }
  },

  fees: {
    h2: 'Farnborough fees',
    intro: 'Farnborough learners pay our international prices, which apply everywhere except India.',
    first: 'A full lesson at no charge, then a recommendation.',
    group: 'Roughly eight live group lessons per month.',
    private: 'Roughly eight live private lessons per month.',
    closer: 'Fees are set in US dollars, not pounds, and billing starts only after the trial has confirmed a course and a weekly time. The pricing page covers holidays, missed lessons and swaps between group and private.'
  },

  reviewsH2: 'Hampshire parents and learners across the UK, in their Google reviews',

  book: {
    h2: 'Book a free Farnborough lesson',
    intro: 'Share an age or school year and whatever the learner loves doing. The trial might be a hidden-clue game, a Scratch game co-designed with an AI, first steps in Python, or checking which inputs a small model uses.',
    success: 'Thank you. Your Farnborough request is in.'
  },

  faq: {
    h2: 'Farnborough questions',
    intro: 'Feature importance, the Census project, Python, vibe coding and practical points.',
    items: [
      { q: 'What is the population of Farnborough?', a: 'The ONS counted 60,655 residents in the Farnborough built-up area at the 2021 census; Rushmoor borough had 99,756.' },
      { q: 'Are coding and AI classes available online in Farnborough?', a: 'They are. Rushmoor learners aged 6 to 67, Aldershot included, join each lesson by live video.' },
      { q: 'What is permutation importance?', a: 'A way to measure how much a trained model relies on an input: shuffle that input on data the model has not seen and see how much the predictions worsen.' },
      { q: 'Why can built-in feature importance be misleading?', a: 'Scores calculated on training data can reward inputs the model merely used to fit noise. In our Rushmoor test, a column of random numbers received 6.0% from the built-in score.' },
      { q: 'What happens in the Farnborough project?', a: 'Learners predict the share of households in flats across 318 Census areas, plant a random column, and compare two ways of ranking the inputs.' },
      { q: 'Is vibe coding taught?', a: 'Yes, for all ages; the learner plans the program and tests the code an AI writes.' },
      { q: 'When do learners build AI agents?', a: 'Python has to feel routine first, which for most is sixteen or over; Copilot Studio is taught privately.' },
      { q: 'Do lessons support exam courses?', a: 'GCSE and A level computer science and maths, yes, with the focus on real understanding rather than any promised grade.' },
      { q: 'What do lessons cost?', a: 'The first is free. After that, USD 100 a month for group lessons or USD 150 a month for one-to-one.' },
      { q: 'Do lessons pause in school holidays?', a: 'Yes, just send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Hampshire, Surrey and Berkshire pages',
    html: 'Pages with projects of their own: <a class="cg-inline-link" href="/ai-and-programming-classes-in-guildford">Guildford</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-woking">Woking</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-basingstoke">Basingstoke</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bracknell">Bracknell</a>. Everywhere else we teach is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Farnborough and Hampshire',
  footerPlaces: [
    { href: '/coding-classes-in-hampshire', label: 'Hampshire' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-fnb .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-fnb .cg-hero h1 { font-weight: 760; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-fnb .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-fnb .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-fnb .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.02em; }
.cg-root.cg-fnb .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-fnb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-fnb .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-fnb .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-fnb .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Rushmoor (E07000092), Census 2021 TS001 usual residents 99,756. ONS 2021 BUAs (published): Farnborough 60,655; Aldershot 39,825. postcodes.io suburban areas (nearest OA centroid in Farnborough BUA, our check): Cove, North Camp, Southwood, West Heath, Farnborough Park, Farnborough Street.',
    localProject: 'Census 2021 TS044/TS045/TS017/TS006 for 318 Rushmoor OAs: 39,339 households, 10,831 in flats (9,138 purpose-built). Random forest on % in flats with inputs no-car, one-person, log density, random numbers; 20 splits 70/30, test R2 0.652. Built-in importance 45.3 / 36.6 / 12.1 / 6.0%; permutation (R2 drop) 0.429 / 0.342 / 0.065 (range -0.023 to 0.121) / -0.001. One-person vs no-car r 0.66. Lesson family: feature importance, permutation vs impurity, noise control.',
    requiredMentions: [
      '99,756',
      '60,655',
      '39,825',
      '39,339',
      '10,831',
      'North Camp',
      'Southwood',
      'West Heath',
      'Farnborough Park',
      'permutation importance'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS044, TS045, TS017, TS006 and TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Nomis API dataset NM_2062_1, Census 2021 TS044 accommodation type.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2062_1.def.sdmx.json' },
      { claim: 'postcodes.io places: suburban areas in Rushmoor.', url: 'https://api.postcodes.io/places?q=North%20Camp' }
    ],
    rejectedClaims: [
      'Airshow, aviation or army history: not read from a source; not claimed.',
      'What causes flats to be common in an area: not claimed; importance describes this model only.',
      'That the Farnborough built-up area lies wholly in Rushmoor: not claimed.',
      'Sum of the built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
