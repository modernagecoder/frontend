'use strict';
// Carrickfergus (cg- town page, UK cluster Phase 8, towns band A, row 429; Northern Ireland). Keyword slug per the owner's
// rotation, with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: why does a single decision tree
// change its mind when the data changes slightly, and how does bagging calm it down? (bootstrap samples, variance of a
// model, averaging many trees, and why a stable but simple model gains little).
// Data (read 29 September 2026): NISRA Census 2021 main statistics, Data Zone sheets of MS-A09 (single year of age) and
// MS-E02 (household size), 3,780 data zones. Target: share of households that are one person. Inputs: shares of residents
// aged 0-15, 16-24, 25-44, 45-64, 65-79, 80 and over, plus usual residents. Test set: the 74 data zones whose names begin
// Carrick_Castle or Knockagh (the Carrick Castle and Knockagh district electoral areas of Mid and East Antrim); training
// set: the other 3,706. Test one-person share: median 28.4%, range 6.2% to 68.3%.
// Our run (scratchpad ckf/bag.py): mean absolute error in percentage points on the 74 test zones. Guess the training mean:
// 11.51. One unlimited-depth tree on all training data: 10.07. 50 unlimited trees each on a bootstrap sample: median error
// 10.83; one zone's prediction varies with a standard deviation of 8.02 points across them (median over zones); their
// average (bagging): 8.55. scikit-learn BaggingRegressor with 10 / 50 / 200 trees: 8.17 / 8.28 / 8.23; ten 100-tree
// ensembles with different seeds: prediction standard deviation 0.68 points. Depth-3 trees: single on all data 11.90;
// bootstrap trees median 11.12, spread 3.01; averaged 10.86.
// Lesson family: bagging (bootstrap aggregation), model variance and instability. Screened: "bagging", "bootstrap
// aggregat", "bootstrap sample" 0 hits in content/uk (only course and resource files); Gosport owns the bootstrap for
// confidence intervals, Kirkcaldy boosting, Meierijstad random forests.
// Place facts: NISRA Census 2021 MS-A01: settlement CARRICKFERGUS 28,141 (NISRA approximation); DEAs Carrick Castle
// 18,430 and Knockagh 17,272 (exact); Mid and East Antrim 138,994. OpenStreetMap place nodes inside bbox
// -5.870,54.700,-5.760,54.740: suburbs Barn, Boneybefore, Burleigh Hill, Castlemara, Clipperstown, Eden, Kilroot,
// Sunnylands; villages Trooperslane, Woodburn. (postcodes.io places does not cover Northern Ireland.)

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CARRICKFERGUS', label: 'Carrickfergus', blurb: 'Coding and AI classes for Carrickfergus, with a machine learning project that shows why one decision tree is jumpy and how averaging many of them, bagging, steadies it.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-carrickfergus',
  code: 'ckf',
  accent: '#8A3E70',
  accentRationale: 'Carrickfergus: a deep mulberry (5.63:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Carrickfergus',
    eyebrow: 'Carrickfergus, Mid and East Antrim, Northern Ireland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Mid and East Antrim' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Mid and East Antrim', href: '/coding-classes-in-mid-and-east-antrim' },
    { label: 'Belfast', href: '/best-coding-class-in-belfast' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Carrickfergus, Northern Ireland',
  title: 'Coding and AI Classes in Carrickfergus | Python, Ages 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Carrickfergus, Greenisland, Eden and Sunnylands learners aged 6 to 67, with CCEA exam help. First lesson free.',
  ogDescription: 'Coding and AI classes for Carrickfergus, with a Census project showing how bagging turns a jumpy decision tree into a steady prediction.',
  twitterDescription: 'Carrickfergus coding, AI, Python and vibe coding classes online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Carrickfergus',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Carrickfergus and Mid and East Antrim, taught live with careful reasoning first.'
  },

  h1: 'Coding and AI classes in Carrickfergus',
  capsuleQ: 'Where can Carrickfergus learners find the best coding and AI classes?',
  capsule: 'At the 2021 census NISRA put the Carrickfergus settlement at roughly 28,141 usual residents, part of Mid and East Antrim, a district of 138,994. OpenStreetMap names Eden, Sunnylands, Castlemara, Clipperstown, Boneybefore and Burleigh Hill among the town\'s neighbourhoods, and the same map area includes the villages of Trooperslane and Woodburn. Primary pupils, secondary students and adults up to 67 are taught coding, AI, Python, vibe coding and maths on camera by tutors based in India, singly or in level-matched groups of five to ten. Reasoning is taught before tools, so learners can tell a model that has learned something from one that has memorised noise. The trial lesson is free and ends with the course we recommend. The Carrickfergus project uses NISRA census data for 3,780 small areas to show why a single decision tree changes its mind so easily, and how bagging, averaging many trees, steadies it. Staying on costs USD 100 for each month of small-group teaching or USD 150 for each month of individual tuition.',
  lead: 'A decision tree is one of the easiest machine learning models to understand: a flowchart of yes or no questions. It also has an awkward habit. Train it on a slightly different sample of the same data and it can build a quite different flowchart and give a quite different answer. Statisticians call this high variance. In 1996 Leo Breiman proposed a simple cure called bagging, short for bootstrap aggregating: train many trees, each on a random resample of the data, and average what they say. This project tests it on NISRA\'s Census 2021 figures for Northern Ireland\'s 3,780 data zones, predicting how many households live alone and checking the answers on the 74 zones of the Carrick Castle and Knockagh electoral areas.',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Carrickfergus?',

  picks: {
    eyebrow: 'Carrickfergus course picks',
    h2: 'Carrickfergus courses in reasoning, Python and AI',
    intro: 'Four routes in, by age. Each begins with a free live class, booked without any payment details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: asking a crowd instead of one person, and why averages are steadier.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with AI help and checked piece by piece.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including decision trees and bagging on NISRA census data.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python through data science, ensemble models and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Carrickfergus and Mid and East Antrim',
      h2: 'Carrickfergus, Eden, Sunnylands and Castlemara',
      intro: 'NISRA 2021 census figures for the town and its two electoral areas, and neighbourhoods named on the map.',
      body: [
        { kind: 'table', caption: 'Carrickfergus in NISRA Census 2021 figures, usual residents', head: ['Area', 'Kind of area', 'Usual residents'], rows: [
          ['Carrickfergus', 'Settlement (NISRA approximation)', '28,141'],
          ['Carrick Castle', 'District electoral area', '18,430'],
          ['Knockagh', 'District electoral area', '17,272'],
          ['Mid and East Antrim', 'Council district', '138,994']
        ] },
        { kind: 'p', text: 'Each number is printed as NISRA publishes it; the areas overlap in different ways, so we never add them. OpenStreetMap labels Barn, Boneybefore, Burleigh Hill, Castlemara, Clipperstown, Eden, Kilroot and Sunnylands as parts of the town, and Trooperslane and Woodburn as villages within the same map area. Schools here follow the Northern Ireland Curriculum, so we place learners by P and Year group and support CCEA GCSE and A level work. Send us your holiday dates and lessons will fit round them.' },
        { kind: 'callout', h3: 'Mid and East Antrim, Belfast and CCEA help', p: 'See <a class="cg-inline-link" href="/coding-classes-in-mid-and-east-antrim">coding classes in Mid and East Antrim</a>, <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a> and <a class="cg-inline-link" href="/ccea-gcse-digital-technology-programming-help">CCEA GCSE Digital Technology help</a>. Why thinking comes before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Carrickfergus project',
      h2: 'Bagging on census data: steadying a jumpy decision tree',
      intro: 'One target, seven inputs, fifty resampled trees, and a measure of how much each one wobbles.',
      body: [
        { kind: 'p', text: 'The learner downloads two NISRA Census 2021 tables at data zone level, the smallest areas NISRA publishes these for: age by single year and household size. For each of the 3,780 zones the target is the share of households with one person living alone; the inputs are the shares of residents in six age bands plus the number of residents. The 74 zones of the Carrick Castle and Knockagh electoral areas are held back as the test, where one-person households range from 6.2% to 68.3%. Every model trains on the other 3,706 zones.' },
        { kind: 'table', caption: 'Predicting the share of one-person households in 74 Carrick Castle and Knockagh data zones, typical error in percentage points, our Python run on NISRA data', head: ['Model', 'Typical error', 'Note'], rows: [
          ['Guess the Northern Ireland average', '11.51', 'The baseline to beat'],
          ['One full-depth decision tree', '10.07', 'Swings about 8 points between resamples'],
          ['Average of 50 resampled full-depth trees', '8.55', 'Bagging, built by hand'],
          ['Bagging with 200 trees (scikit-learn)', '8.23', '100-tree runs differ by about 0.7 points'],
          ['One shallow tree, three questions deep', '11.90', 'Swings about 3 points between resamples'],
          ['Average of 50 shallow trees', '10.86', 'Bagging barely helps here']
        ] },
        { kind: 'p', text: 'A full-depth tree fits its training data closely, and that is its weakness: train it on a bootstrap sample, the same zones drawn at random with repeats, and the prediction for a single Carrickfergus zone typically moves by about 8 percentage points from one sample to the next. Averaging 50 such trees cancels much of that wobble and cuts the typical error from 10.07 to 8.55 points; scikit-learn\'s bagging with 10, 50 or 200 trees lands between 8.17 and 8.28, and separate 100-tree ensembles differ by only about 0.7 points on a zone. Bagging does little for the shallow tree. It was already fairly steady, and its problem is that three questions are too few to capture the pattern, a bias that averaging cannot fix: 50 averaged shallow trees still missed by 10.86 points.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Ask one friend to guess the sweets in a jar, then ask twenty and average, and compare how close each gets.' },
          { h3: 'Years 8 to 10', p: 'Load the NISRA household table in Python and build a small decision tree by hand.' },
          { h3: 'Years 11 to 14', p: 'Train single and bagged trees, measure their variance and explain why bagging helps one and not the other.' }
        ] },
        { kind: 'callout', h3: 'NISRA census data, our models', p: 'Age and household size counts are NISRA Census 2021 main statistics, published under the Open Government Licence. The choice of test zones, inputs and models, and every error figure, are our own work and not NISRA outputs.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Ensembles and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A lone confident answer may just be a lucky draw.',
      body: [
        { kind: 'table', caption: 'From the Carrickfergus bagging project to working with AI', head: ['In the census project', 'When AI gives you an answer'], rows: [
          ['One tree swung about 8 points between samples', 'A single run can be unusually good or bad'],
          ['Averaging 50 trees cut the error', 'Combining several attempts smooths out quirks'],
          ['200 trees barely beat 50', 'Beyond a point, more copies add little'],
          ['Shallow trees gained almost nothing', 'Averaging fixes wobble, not a wrong approach'],
          ['Test zones were never seen in training', 'Always check on data the model has not met']
        ] },
        { kind: 'p', text: 'Many AI systems use the same trick: generate several answers and combine them. It works when the individual answers are unstable, and it does nothing when every answer shares the same blind spot. In vibe coding the learner explains what to build while an AI writes the code; our Carrickfergus learners run the AI\'s suggestion more than once, compare the versions, and ask whether the differences are noise or a real flaw. Agents that produce reports or decisions for you can be checked the same way. We move learners on to agents when their Python holds up without help, which in Northern Ireland schooling tends to mean the A level years or adulthood, and Copilot Studio agents are taught only in private sessions. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for students in the UK</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'NISRA and OpenStreetMap supply the open data used here and have no link with Modern Age Coders; the models, and any errors in them, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From guessing jars to ensemble models',
    intro: 'We start from the school year, P1 to Year 14, and let the free lesson fine-tune it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Guessing, averaging and asking why a crowd beats one voice.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to Year 9', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner, built with an AI and tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 10 to 14', h3: 'Python and machine learning', p: 'Trees, resampling and ensembles alongside CCEA GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Data science and agents', p: 'Python, ensemble models and AI agents, step by step.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and ensembles',
    h2: 'What is bagging in machine learning, and why does it help?',
    intro: 'Bagging, short for bootstrap aggregating, trains many copies of a model on random resamples of the data and averages their predictions, which steadies models such as deep decision trees whose answers swing with small changes in the data.',
    p1: 'Predicting the share of one-person households in 74 Carrick Castle and Knockagh data zones from NISRA census data, bagging cut the typical error of a full-depth tree from 10.07 to 8.55 percentage points and shrank its run-to-run wobble from about 8 points to under 1.',
    p2: 'Learners who have seen that ask of any AI answer: would it say the same thing if I asked again, and does averaging several answers change it?',
    closer: 'A Carrickfergus teenager who knows when averaging helps, and when it cannot, will read AI claims with the right amount of doubt, and coding is where that instinct forms.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Eden to Sunnylands, online',
    intro: 'A computer, a webcam and an internet connection steady enough for video are all you need.',
    cells: [
      { h3: 'Learners drive', p: 'Students write the code and the prompts; our tutor watches the shared screen and keeps asking for a prediction first.' },
      { h3: 'Starting point found', p: 'Thirty minutes of real work in the trial tells us where to begin, and any CCEA exam is written into the plan.' },
      { h3: 'No fee to start', p: 'Lesson one is free and finishes with our course suggestion.' },
      { h3: 'Small matched groups', p: 'Between five and ten learners per class, from all over Britain, at a single level.' },
      { h3: 'Two each week', p: 'Lessons pause for school holidays.' },
      { h3: 'Fixed time', p: 'UK clock changes are handled by our tutors, so your slot stays put.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at the same level, all free the same evening, rarely live on the same street. Video removes the distance.' }
  },

  fees: {
    h2: 'Carrickfergus fees',
    intro: 'Carrickfergus learners pay our international prices, which apply everywhere apart from India.',
    first: 'A whole lesson free, then a recommendation.',
    group: 'About eight live small-group lessons each month.',
    private: 'About eight live private lessons each month.',
    closer: 'We charge in US dollars and never in sterling, and billing starts only after the trial has settled a course and a weekly time. Holidays, missed lessons and changing between group and private are explained on the pricing page.'
  },

  reviewsH2: 'What County Antrim parents and UK learners write on Google',

  book: {
    h2: 'Book a free Carrickfergus lesson',
    intro: 'A P or Year group, or simply an age, plus one hobby lets us shape the trial. It might be a guess-the-jar game, a Scratch game built with an AI, some first Python, or a tiny tree trained on real census numbers.',
    success: 'Thank you. Your Carrickfergus request has reached us.'
  },

  faq: {
    h2: 'Carrickfergus questions',
    intro: 'Bagging, the census project, vibe coding, Python and practical details.',
    items: [
      { q: 'What is the population of Carrickfergus?', a: 'NISRA approximates the Carrickfergus settlement at 28,141 usual residents in the 2021 census.' },
      { q: 'Are coding and AI classes available online in Carrickfergus?', a: 'Yes, as live video lessons for ages 6 to 67 in Carrickfergus, Greenisland, Whitehead and across Mid and East Antrim.' },
      { q: 'What is a bootstrap sample?', a: 'A new dataset made by drawing rows at random from the original, with replacement, until it is the same size. Some rows appear twice and some not at all, which is what lets each tree in bagging see a slightly different world.' },
      { q: 'What is the difference between bagging and boosting?', a: 'Bagging trains many models independently on resamples and averages them, mainly to reduce wobble; boosting trains models one after another, each fixing the last one\'s mistakes, mainly to reduce bias.' },
      { q: 'What does the Carrickfergus project involve?', a: 'Predicting the share of one-person households in 3,780 NISRA data zones from their age mix, testing on the 74 zones of Carrick Castle and Knockagh, and comparing single trees with bagged ones.' },
      { q: 'Is vibe coding included?', a: 'From P1 beginners to adults, the learner decides what to build, prompts the AI and then hunts for its mistakes.' },
      { q: 'At what stage do agents come in?', a: 'Once they write Python unaided, usually from Year 12 or as adults; Copilot Studio agents are private lessons.' },
      { q: 'Do you help with CCEA GCSE and A level?', a: 'CCEA GCSE Digital Technology, GCSE Maths and the A levels are all covered, taught so the ideas stick; no grade is promised.' },
      { q: 'How much are lessons?', a: 'Trial lesson free. After that, group classes are USD 100 monthly and one-to-one lessons USD 150 monthly.' },
      { q: 'Do lessons stop for school holidays?', a: 'Yes; send us the dates and we will pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Antrim and Northern Ireland pages',
    html: 'Pages with projects of their own: <a class="cg-inline-link" href="/coding-classes-in-mid-and-east-antrim">Mid and East Antrim</a> (the Carrickfergus gasworks), <a class="cg-inline-link" href="/coding-classes-in-antrim-and-newtownabbey">Antrim and Newtownabbey</a>, <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a> and <a class="cg-inline-link" href="/best-coding-class-in-bangor-northern-ireland">Bangor</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> cover the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Carrickfergus and Mid and East Antrim',
  footerPlaces: [
    { href: '/coding-classes-in-mid-and-east-antrim', label: 'Mid and East Antrim' },
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ckf .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-ckf .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-ckf .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-ckf .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ckf .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.02em; }
.cg-root.cg-ckf .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-ckf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ckf .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-ckf .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-ckf .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Mid and East Antrim (N09000008). Northern Ireland Curriculum, P1 to Year 14, CCEA GCSE and A level. NISRA Census 2021 MS-A01: settlement CARRICKFERGUS 28,141 (approximation); DEAs Carrick Castle 18,430 and Knockagh 17,272; LGD 138,994. OpenStreetMap place nodes: Barn, Boneybefore, Burleigh Hill, Castlemara, Clipperstown, Eden, Kilroot, Sunnylands (suburbs); Trooperslane, Woodburn (villages).',
    localProject: 'NISRA Census 2021 MS-A09 and MS-E02 Data Zone sheets, 3,780 zones. Target one-person household share; inputs six age-band shares plus residents. Test = 74 zones named Carrick_Castle* or Knockagh* (median 28.4%, range 6.2 to 68.3%). MAE (points): mean guess 11.51; one deep tree 10.07; bootstrap deep trees median 10.83, per-zone sd 8.02; average of 50 (bagging) 8.55; BaggingRegressor 10/50/200 trees 8.17/8.28/8.23; seed-to-seed sd 0.68. Depth-3: 11.90 single, sd 3.01, averaged 10.86. Lesson family: bagging, variance.',
    requiredMentions: [
      '28,141',
      '18,430',
      '17,272',
      'Boneybefore',
      'Castlemara',
      'Clipperstown',
      'Sunnylands',
      'Burleigh Hill',
      'Trooperslane',
      'bagging',
      'bootstrap sample'
    ],
    sources: [
      { claim: 'NISRA Census 2021 MS-A01 usual resident population by settlement, DEA and LGD.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'NISRA Census 2021 MS-A09 single year of age and MS-E02 household size, Data Zone level.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-e02.xlsx' },
      { claim: 'OpenStreetMap place names in and around Carrickfergus, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' }
    ],
    rejectedClaims: [
      'Castle, gasworks or harbour history: not read from a source here; not claimed (the Mid and East Antrim page covers the gasworks).',
      'That the 74 test zones exactly match the Carrickfergus settlement: not claimed; they are the zones of two electoral areas.',
      'Why some zones have more people living alone: no cause claimed.',
      'Transfer test advice, community background or identity data: excluded by rule.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
