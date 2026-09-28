'use strict';
// Tamworth (cg- town page, UK cluster Phase 8, towns band A, row 377). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: what does a hidden layer add to a
// neural network, and when is a bigger network worse?
// Data (read 28 September 2026): Nomis API, Census 2021 TS007 age by single year (NM_2027_1) for Tamworth (E07000199):
// 101 ages (0 to 100 and over), total 78,646 (= TS001); largest single-year count 1,223 at age 50; mean 860 per age for
// ages 0 to 90.
// Our run (scratchpad tam/nn.py): train on even ages 0 to 90 (46 points), test on odd ages 1 to 89 (45 points); inputs
// scaled; one hidden layer of tanh units trained by hand-written backpropagation with Adam, 30,000 steps, 10 random starts.
// Mean test error (RMSE, people per single year of age): no hidden layer (straight line) 207.3; 1 unit 93.1; 2 units 73.1;
// 4 units 63.6 (random starts ranged 49.0 to 78.0); 8 units 43.6 (train 34.0); 16 units 45.3 (train 29.1); 64 units 46.0
// (train 25.4). Straight-line interpolation between neighbouring even ages: 41.2. Error score for 8 units, first start:
// 1.0932 at step 1, 0.0263 at 100, 0.0135 at 1,000, 0.0029 at 10,000, 0.0026 at 30,000.
// Lesson family: hidden layer, backpropagation, capacity vs overfitting, random initialisation, simple baseline wins.
// Screened: hidden layer, backprop 0 hits; overfit 1 (Waltham Forest, different model). Eastbourne owns a single neuron
// classifier.
// Place facts: Tamworth TS001 78,646; ONS 2021 Tamworth BUA (published) 76,090, our OA sum inside the borough 75,312;
// Fazeley straddles; excluded. postcodes.io suburban areas in Tamworth district: Wilnecote, Glascote, Amington, Belgrave,
// Kettlebrook, Stonydelph, Dosthill, Bolehall.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'TAMWORTH', label: 'Tamworth', blurb: 'Coding and AI classes for Tamworth, with a project that builds a small neural network by hand and finds out when more hidden units make it worse.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-tamworth',
  code: 'tmw',
  accent: '#20485C',
  accentRationale: 'Tamworth: a deep teal blue (7.9:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Tamworth',
    eyebrow: 'Tamworth, Staffordshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Staffordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'Staffordshire', href: '/coding-classes-in-staffordshire' },
    { label: 'Lichfield', href: '/best-coding-class-in-lichfield' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Tamworth, England',
  title: 'Coding and AI Classes in Tamworth | Python, Vibe Coding, 6 to 67',
  description: 'Online coding, AI, Python and vibe coding classes for Tamworth, Wilnecote, Amington and Glascote learners aged 6 to 67, private or in groups. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Tamworth, and a Python project that builds a neural network by hand on the borough\'s census ages.',
  twitterDescription: 'Tamworth coding, AI, Python and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Tamworth',
    description: 'Online coding, AI, Python, vibe coding and mathematics for children, teenagers and adults in Tamworth borough, taught live with thinking skills first.'
  },

  h1: 'Coding and AI classes in Tamworth',
  capsuleQ: 'Where can Tamworth learners find the best coding and AI classes?',
  capsule: 'The 2021 census counted 78,646 usual residents in Tamworth borough, and the ONS gives the Tamworth built-up area 76,090. Our India-based tutors reach Wilnecote, Amington, Glascote and Dosthill homes over live video, teaching coding, AI, Python, vibe coding and maths to anyone between 6 and 67, one learner at a time or in groups of five to ten sharing a level. Learners are taught to think before they prompt, so AI stays a tool they can question. Lesson one is on us, and at the end we suggest the right course. The Tamworth project opens up a neural network, the kind of model behind modern AI, and builds a small one from scratch. Carrying on after that costs USD 100 per month for group lessons, or USD 150 per month for lessons alone with a tutor.',
  lead: 'The 2021 census does not stop at age bands: for Tamworth it publishes how many residents were each single year of age, from newborns to people aged 100 and over. Plot those 101 numbers and you get a lumpy curve, peaking at 1,223 people aged 50. A straight line cannot follow a curve like that. A neural network with a hidden layer can, and building one by hand, including the backpropagation step that lets it learn, is the clearest way to see what the famous word "neural" really means. The surprise comes at the end, when a far simpler method is put up against it.',
  wa: 'Hello Modern Age Coders, can we book a free coding or AI lesson for a learner in Tamworth?',

  picks: {
    eyebrow: 'Tamworth course picks',
    h2: 'Tamworth picks for thinking, vibe coding and AI',
    intro: 'Match the course to the learner\'s age and passions. Whichever you pick, lesson one is live, free and booked without payment details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: patterns, estimates and checking a guess against the real answer.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch first, then small apps made with AI help and tested by the young builder.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python up to neural networks, including this hand-built one.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Neural networks, language models, retrieval and AI agents, explained from the inside.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Tamworth borough',
      h2: 'Tamworth and its neighbourhoods',
      intro: 'Two census counts and the places within the borough.',
      body: [
        { kind: 'table', caption: 'Four Tamworth numbers from the 2021 census', head: ['What was counted', 'Count'], rows: [
          ['Borough residents', '78,646'],
          ['Built-up area, as published', '76,090'],
          ['Built-up area residents inside the borough (our sum)', '75,312'],
          ['Largest single-year age group', '1,223 people aged 50']
        ] },
        { kind: 'p', text: 'The borough and the built-up area follow different boundaries, which is why the two totals differ; a small part of the built-up area lies outside the borough. Wilnecote, Glascote, Amington, Belgrave, Kettlebrook, Stonydelph, Dosthill and Bolehall are all recorded within Tamworth district. Staffordshire schools use the national curriculum for England, and if you send us your holiday dates, no lessons will fall in them.' },
        { kind: 'callout', h3: 'Staffordshire, the region and our approach', p: 'County-wide options are on <a class="cg-inline-link" href="/coding-classes-in-staffordshire">coding classes in Staffordshire</a>, and the wider picture on <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">our West Midlands region page</a>. Why reasoning comes before prompting in every course is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Tamworth project',
      h2: 'A neural network built by hand on Tamworth\'s ages',
      intro: 'Learn the curve from even ages, predict the odd ones, and compare networks of different sizes.',
      body: [
        { kind: 'p', text: 'The learner downloads Census 2021 table TS007 for Tamworth from the Nomis API: one count for every age from 0 to 100 and over. The even ages from 0 to 90 become the training data, 46 points, and the odd ages from 1 to 89 are hidden away as the test, 45 points. The job is to learn the shape of the curve well enough to fill in the hidden ages. With no hidden layer, the model can only draw a straight line through the points, and its predictions for the odd ages are off by 207.3 people on average (the root mean square error), against a typical count of about 860 per age.' },
        { kind: 'p', text: 'A hidden layer changes that. Each hidden unit takes the age, applies a smooth S-shaped function called tanh, and passes the result on; the output adds the units together. One unit lets the line bend once, two let it bend twice, and so on. Learning happens by backpropagation: the program measures the error, works backwards through the network with the chain rule to find how each weight contributed, and nudges every weight to reduce it. For an 8-unit network the error score starts at 1.0932, falls to 0.0263 after 100 steps and 0.0029 after 10,000, and has almost stopped moving, at 0.0026, by 30,000.' },
        { kind: 'table', caption: 'Average error on the hidden odd ages, 10 random starts per size, our Python run, 28 September 2026', head: ['Model', 'Error on training ages', 'Error on hidden ages'], rows: [
          ['No hidden layer (straight line)', '218.6', '207.3'],
          ['1 hidden unit', '104.5', '93.1'],
          ['2 hidden units', '82.6', '73.1'],
          ['4 hidden units', '69.3', '63.6'],
          ['8 hidden units', '34.0', '43.6'],
          ['16 hidden units', '29.1', '45.3'],
          ['64 hidden units', '25.4', '46.0'],
          ['Average of the two neighbouring even ages', 'n/a', '41.2']
        ] },
        { kind: 'p', text: 'Three lessons come out of the table. First, hidden units help a great deal at the start: from a straight line to eight units, the error on hidden ages falls from 207.3 to 43.6. Second, more is not always better. Beyond eight units the error on training ages keeps shrinking, down to 25.4 with 64 units, but the error on the hidden ages creeps back up to 46.0. The bigger network is starting to memorise the wiggles of the training points instead of the shape between them, which is called overfitting. Third, luck matters: with four units, the ten random starting points gave errors anywhere from 49.0 to 78.0.' },
        { kind: 'p', text: 'Then the humbling part. Simply averaging the two neighbouring even ages, a method a ten-year-old could do with a calculator, predicts the odd ages with an error of 41.2, better than every network in the table. For filling a gap in a smooth sequence, the neighbours already hold the answer. Neural networks earn their place on problems where no simple rule exists; a good engineer checks which kind of problem they have before reaching for one.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw the age curve on paper, then guess missing points from their neighbours.' },
          { h3: 'Ages 11 to 15', p: 'Fit a straight line in Python and see exactly where it fails on the curve.' },
          { h3: 'Ages 15 and up', p: 'Write backpropagation by hand, vary the hidden units and measure overfitting.' }
        ] },
        { kind: 'callout', h3: 'Census counts, our network', p: 'The single-year counts are Census 2021 figures from the Office for National Statistics, read through Nomis. The network, its training, the random starts and every error figure are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'From one layer to modern AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Scale the Tamworth network up enormously and the same trade-offs remain.',
      body: [
        { kind: 'table', caption: 'The Tamworth network beside modern AI', head: ['Our small network', 'Modern AI models'], rows: [
          ['One input, one hidden layer', 'Many layers and a vast number of weights'],
          ['Learns by backpropagation', 'Also trained by backpropagation, at huge scale'],
          ['64 units memorised training wiggles', 'Big models can repeat training data too'],
          ['Random starts changed the result', 'Training runs can differ in surprising ways'],
          ['Beaten by averaging two neighbours', 'The simplest tool is sometimes the right one']
        ] },
        { kind: 'p', text: 'Knowing what sits inside a neural network helps learners use AI with their eyes open. In our vibe coding lessons, where a learner describes what they want and an AI writes the code, a Tamworth learner who asks for "a neural network to fill in missing values" will know to test it against the neighbour average before trusting it. AI agents, which choose tools and take several steps on their own, are built on these same models, so their confident output deserves the same checks. Building agents of your own waits until Python feels comfortable, typically for older teenagers and adults; for Copilot Studio agents we only run private lessons. Our <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agents course page for UK learners</a> and the article <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> go further.' },
        { kind: 'p', text: 'Modern Age Coders is independent of the Office for National Statistics, Nomis and postcodes.io. The counts and place records come from them; the network and any mistakes in it come from us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From drawing curves to training networks',
    intro: 'School year is our first estimate; the free lesson decides where each learner actually starts.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Patterns, estimates and testing a guess.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI and checked by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and neural networks', p: 'Data, models and backpropagation alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Deep learning and agents', p: 'Networks, language models and agents, built in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and size',
    h2: 'Is a bigger neural network always smarter?',
    intro: 'Not on Tamworth\'s ages: eight hidden units beat sixty-four on unseen data.',
    p1: 'The 64-unit network matched its training ages more closely than any other and still did worse on the ages it had not seen. Size bought memory, not understanding.',
    p2: 'Learners who have watched that happen, and then seen a neighbour average win, judge AI claims by tests on unseen data rather than by how large or impressive the model sounds.',
    closer: 'Having trained a network with their own code, Tamworth teenagers approach AI tools as informed users rather than fans, a very good reason to learn coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Amington to Dosthill, online',
    intro: 'A computer and a reliable internet connection are all a Tamworth household needs.',
    cells: [
      { h3: 'The learner codes', p: 'Every line is typed, prompted and run by the student, and the tutor follows the shared screen with questions.' },
      { h3: 'Starting point by trial', p: 'Year groups vary, so the free session is what fixes the first topic; exam boards get written down too.' },
      { h3: 'Free first lesson', p: 'There is no fee for the introductory session, which finishes with a recommendation.' },
      { h3: 'Classes by level', p: 'Five to ten UK learners at a similar stage share each group.' },
      { h3: 'Two lessons a week', p: 'They pause for the school holidays.' },
      { h3: 'Times that do not drift', p: 'Our tutors adjust to UK clock changes so your lesson hour stays fixed.' }
    ],
    spec: { title: 'Why lessons are online', p: 'Five learners at one level who are all free at one time seldom live on the same street. Online, they can learn together anyway.' }
  },

  fees: {
    h2: 'Tamworth fees',
    intro: 'Tamworth learners pay our international fee, used everywhere except India.',
    first: 'A complete first lesson free, then our course suggestion.',
    group: 'Around eight live lessons a month in a small group.',
    private: 'Around eight live one-to-one lessons a month.',
    closer: 'Our fees are quoted in US dollars, never sterling. The first invoice follows the trial, once a course and a lesson time are agreed, and the pricing page sets out what happens with holidays, absences or a switch between group and private.'
  },

  reviewsH2: 'Reviews on Google from Staffordshire and the rest of the country',

  book: {
    h2: 'Book a free Tamworth lesson',
    intro: 'A school year or age and one or two hobbies is plenty. The trial might be number-pattern challenges, a Scratch game made alongside an AI, a first go at Python, or drawing a curve from real data.',
    success: 'Thank you. Your Tamworth request has been received.'
  },

  faq: {
    h2: 'Tamworth questions',
    intro: 'About the network project, vibe coding and agents, plus fees and timing.',
    items: [
      { q: 'What is the population of Tamworth?', a: 'The 2021 census recorded 78,646 usual residents in Tamworth borough, and the ONS gives the built-up area 76,090.' },
      { q: 'Do you offer coding and AI classes in Tamworth?', a: 'We do, over live video; any Tamworth resident between 6 and 67 is welcome.' },
      { q: 'Is vibe coding available?', a: 'They can, at any age from primary school up, with a plan written before the AI starts and every result tested after.' },
      { q: 'Do you teach AI agents?', a: 'We do, once the basics of Python are in place, which usually means the later teens; Copilot Studio agent lessons are private only.' },
      { q: 'What happens in the neural network project?', a: 'Learners build a small network by hand on Tamworth\'s census ages, train it with backpropagation and test how many hidden units actually help.' },
      { q: 'Are lessons face to face?', a: 'No. All teaching is live online.' },
      { q: 'Is GCSE and A level help available?', a: 'Yes, in computer science and maths, focused on understanding; grades are never promised.' },
      { q: 'What ages do you teach?', a: 'Learners from 6 to 67.' },
      { q: 'How much do lessons cost?', a: 'Free to begin with; afterwards USD 100 monthly for a class seat or USD 150 monthly for one-to-one.' },
      { q: 'Do you stop for school holidays?', a: 'Yes. Tell us the dates and we will pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Staffordshire and West Midlands pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-lichfield">Lichfield</a> has its own page, as do <a class="cg-inline-link" href="/online-coding-and-python-classes-in-stafford">Stafford</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-newcastle-under-lyme">Newcastle-under-Lyme</a>, each with a different project. <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a> is covered too, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Tamworth and Staffordshire',
  footerPlaces: [
    { href: '/coding-classes-in-staffordshire', label: 'Staffordshire' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-tmw .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.9vw, 2.5rem); }
.cg-root.cg-tmw .cg-hero h1 { font-weight: 750; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-tmw .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.9rem 0; }
.cg-root.cg-tmw .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-tmw .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-tmw .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-tmw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tmw .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-tmw .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-tmw .cg-callout { border-left-width: 4px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Tamworth (E07000199), Census 2021 TS001 usual residents 78,646. ONS 2021 Tamworth BUA (published) 76,090; our OA sum inside the borough 75,312; Fazeley straddles, excluded. postcodes.io suburban areas in Tamworth district: Wilnecote, Glascote, Amington, Belgrave, Kettlebrook, Stonydelph, Dosthill, Bolehall.',
    localProject: 'TS007 single year of age (NM_2027_1), 101 ages, max 1,223 at 50, mean 860 for 0 to 90. Train even ages 0 to 90 (46), test odd 1 to 89 (45). Hand-written backprop, tanh hidden layer, Adam, 30,000 steps, 10 starts. Test RMSE: linear 207.3; 1 unit 93.1; 2: 73.1; 4: 63.6 (49.0 to 78.0); 8: 43.6 (train 34.0); 16: 45.3 (29.1); 64: 46.0 (25.4). Neighbour average 41.2. Lesson family: hidden layer, backpropagation, overfitting, initialisation, simple baseline.',
    requiredMentions: [
      '78,646',
      '76,090',
      'Wilnecote',
      'Glascote',
      'Amington',
      'Stonydelph',
      'Dosthill',
      'hidden layer',
      'backpropagation',
      '1,223'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Census 2021 TS007, age by single year, and TS001 usual residents for Tamworth, via the Nomis API.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2027_1.data.csv?geography=E07000199&measures=20100' },
      { claim: 'postcodes.io places: suburban areas within Tamworth district, Staffordshire.', url: 'https://api.postcodes.io/places?q=Wilnecote' }
    ],
    rejectedClaims: [
      'Anglo-Saxon or castle history of Tamworth: not read from a source; not claimed.',
      'Why the age curve peaks at 50: not measured; not claimed.',
      'How modern AI models are trained in detail: described only in general terms.',
      'Fazeley population: built-up area crosses the borough boundary; not tabled.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
