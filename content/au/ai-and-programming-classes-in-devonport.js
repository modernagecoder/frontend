'use strict';
// Devonport, Tasmania (cg- regional city page, Australia cluster Phase 7, row 173). Shaped page (AI and programming):
// leads with teenagers and adults. Spine: a decision tree tries to guess which mapped Devonport structures are sheds;
// why does one way of scoring a split see an improvement while the other sees none at all? Data: Land Tasmania, LIST
// Building Points (OpenDataWFS MapServer layer 12; Creative Commons Attribution 3.0 Australia per the layer's copyright
// text; structures with every side under 25 m, larger buildings being a separate polygon layer), queried 8 October 2026
// for the rectangle longitude 146.32 to 146.40, latitude -41.21 to -41.15. Measured by us (scratchpad
// au/r5/dev_gini.py): 5,265 points; BUILD_TY Shed 4,242 (80.57 percent), Residential Building 475, Commercial Facility
// 419, smaller types not printed. Root Gini impurity 0.3131. Feature 1, distance to nearest other point (metres, local
// flat projection): quantiles 10/25/50/75/90 percent 9.0/12.5/18.3/26.1/41.0 m; best Gini split at 10.77 m: weighted
// Gini 0.3083 (gain 0.0048); 895 points at or below with 91.4 percent sheds, 4,370 above with 78.4 percent sheds; both
// sides still predict Shed, so accuracy stays 80.57 percent and misclassification error is unchanged at all 3,623
// candidate thresholds. Feature 2, other points within 30 m: best split above 6: weighted Gini 0.3085 (gain 0.0046);
// 47 points above with 29.8 percent sheds; stump accuracy 80.93 percent. Lesson family: Gini impurity against
// misclassification error as a decision-tree split criterion; screened free site-wide and claimed by AU-R5 on 9 October
// 2026 (replacing an earlier claim of non-maximum suppression, dropped because MEAN_HGT was empty in this layer).
// Place facts read raw on 8 October 2026: ABS Census 2021 QuickStats, Devonport Significant Urban Area (6002), with
// Tasmania and Australia: 31,721 people; median age 43 (Tasmania 42; Australia 38); 8,712 families; 14,512 private
// dwellings; 2.3 people per household; separate house 11,453 (88.2 percent; Tas 87.7; Australia 72.3); flat or
// apartment 34 (0.3; Tas 5.3); Professionals 1,882 (13.7; Tas 20.0); Technicians and Trades Workers 2,126 (15.5; Tas
// 13.9); Labourers 2,056 (15.0; Tas 11.3); Bachelor Degree level and above 3,324 (12.6; Tas 21.9; Australia 26.3); aged
// 15 to 19: 1,741 (5.5); aged 20 to 24: 1,714 (5.4); industry: Supermarket and Grocery Stores 463 (3.4; Tas 2.9),
// Primary Education 401 (2.9; Tas 2.6). Tasmanian Department for Education, Children and Young People term dates:
// 2026 Term 4 19 October to 18 December; 2027 Term 1 4 February to 9 April. IANA tz: Australia/Hobart, AEST UTC+10,
// AEDT UTC+11 first Sunday in October to first Sunday in April. Localities Miandetta and Quoiba: Suburb/Locality
// features (status Normal) in the LIST placenames layer inside the same rectangle. Excluded by the cluster rules:
// income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'DEVONPORT', label: 'Devonport, Tasmania', blurb: 'Devonport, 5,265 mapped small structures, and a decision tree that sees progress one way and none the other.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-devonport',
  code: 'dvpt',
  accent: '#463E92',
  accentRationale: 'Devonport: a dusk indigo (HSV saturation 0.58, value 0.57, hue 246), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 8.9:1 on white and 7.2:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Devonport',
    eyebrow: 'Devonport, Tasmania',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Tasmania' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-tasmania', name: 'Tasmania' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Tasmania', href: '/coding-and-ai-classes-in-tasmania' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Devonport, Tasmania',
  title: 'AI and Programming Classes in Devonport, Tasmania',
  description: 'Live online AI and programming classes for Devonport teens and adults: Python, decision trees and Tasmanian map data. Small groups or one to one, first lesson free.',
  ogDescription: 'AI and programming classes for Devonport teens and adults, with a decision tree on 5,265 mapped structures that one scoring rule says cannot improve.',
  twitterDescription: 'AI and programming classes in Devonport, Tasmania, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Devonport Learners',
    description: 'Level-matched online Python, machine learning, decision trees and data handling for teenagers and adults across Devonport and nearby Tasmanian towns, taught live in English.'
  },

  h1: 'AI and programming classes in Devonport',
  capsuleQ: 'Which AI and programming class is best for a Devonport learner?',
  capsule: 'One where the learner builds the model in Python, measures it honestly and can explain each choice to a live teacher. Devonport\'s urban area held 31,721 residents in 2021. We teach online and in real time, privately or in a small group at the learner\'s stage, and the first lesson is free.',
  lead: 'Land Tasmania maps small structures across the state as points, each tagged with a type. In a rectangle over Devonport there are 5,265 of them, and 4,242 are tagged Shed. Train the simplest decision tree to separate sheds from everything else, using how close each point sits to its neighbour, and something odd happens. Score the split by Gini impurity and the strongest cut, at 10.77 m, is a measurable improvement. Score it by the share of wrong guesses and no cut anywhere improves anything, because both sides are still mostly sheds. Understanding why the textbooks prefer Gini is the start of understanding how machine learning chooses.',
  wa: 'Hello Modern Age Coders, I would like a free AI and programming class for a learner in Devonport.',

  picks: {
    eyebrow: 'AI and programming picks for Devonport',
    h2: 'Courses for Devonport teens and adults',
    intro: 'Four options matched to the project below. The free trial settles which suits, and no payment details are taken.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Decision trees, accuracy and the scores models use to choose their splits.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The Python needed to load map data, compute distances and count classes.' },
      { course: 'artificial-intelligence-complete-masterclass-college', band: 'University and adult', note: 'Tree learning, impurity measures and model evaluation, built from first principles.' },
      { course: 'data-science-complete-masterclass-college', band: 'Adults working with data', note: 'Feature building and honest baselines on messy public datasets.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Devonport in the Census',
      h2: 'A Tasmanian city of 31,721',
      intro: 'Census 2021 QuickStats for the Devonport urban area, beside Tasmania and Australia.',
      body: [
        { kind: 'table', caption: 'Devonport at the 2021 Census', head: ['Count', 'Devonport', 'Tasmania', 'Australia'], rows: [
          ['Residents', '31,721', 'Not given', 'Not given'],
          ['Median age', '43', '42', '38'],
          ['Families', '8,712', 'Not given', 'Not given'],
          ['Private dwellings', '14,512', 'Not given', 'Not given'],
          ['Separate houses, share of occupied dwellings', '11,453, or 88.2%', '87.7%', '72.3%'],
          ['Technicians and trades workers', '2,126, or 15.5%', '13.9%', '12.9%'],
          ['Bachelor degree or above, aged 15 and over', '3,324, or 12.6%', '21.9%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Barely any apartments', p: 'Devonport counted only 34 flats or apartments, 0.3% of occupied homes, against 5.3% across Tasmania.' },
          { h3: 'Hands-on work', p: 'Labourers made up 15.0% of employed residents and technicians and trades workers 15.5%, both above the state shares.' },
          { h3: 'Young adults', p: 'There were 1,741 residents aged 15 to 19 and 1,714 aged 20 to 24 on Census night.' }
        ] },
        { kind: 'p', text: 'Small random adjustments are applied to census cells for privacy, so table rows may not sum to the printed totals. Each figure appears exactly as the ABS released it, and none of them is our own total.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Why does one scoring rule see progress and the other see none?',
      intro: 'Land Tasmania\'s LIST Building Points over Devonport, a one-split decision tree, and two ways to judge the split.',
      body: [
        { kind: 'table', caption: 'Strongest single split on distance to the nearest neighbour (our measurement, 8 October 2026)', head: ['Group', 'Points', 'Share tagged Shed', 'Tree predicts'], rows: [
          ['All points, before splitting', '5,265', '80.57%', 'Shed'],
          ['Nearest neighbour within 10.77 m', '895', '91.4%', 'Shed'],
          ['Nearest neighbour further than 10.77 m', '4,370', '78.4%', 'Shed']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Gini impurity', p: 'Gini measures how mixed a group is. It starts at 0.3131 for all points and falls to a weighted 0.3083 after the split, a gain of 0.0048. Small, but the tree knows it has learnt something.' },
          { h3: '2. Misclassification error', p: 'Error counts wrong guesses. Both halves still predict Shed, so the same points are wrong as before. We tried all 3,623 possible cut points and error did not move at any of them.' },
          { h3: '3. Why it matters', p: 'A tree that grows only when error falls would stop at the root. A tree using Gini makes this split, and a later split inside the purer group may then change predictions.' }
        ] },
        { kind: 'callout', h3: 'A second feature that does change a guess', p: 'Counting how many other points lie within 30 m gives a different picture. The top Gini cut separates 47 points with more than 6 neighbours, of which only 29.8% are tagged Shed, so the tree predicts not-shed there and accuracy rises from 80.57% to 80.93%. Here both scoring rules agree, which shows learners that the disagreement depends on whether a split changes any majority.' },
        { kind: 'p', text: 'The layer holds structures with every side shorter than 25 metres; larger buildings are mapped separately as outlines, which is why sheds dominate the points. Distances are our approximations on a flat projection. The tree describes the map labels and is not a survey of how any building is used.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Scoring a split',
      h2: 'Three things a decision tree measures, and when they disagree',
      intro: 'Learnt on the Devonport points, then applied to any classification task.',
      body: [
        { kind: 'table', caption: 'Comparing split scores on the Devonport points', head: ['Measure', 'Before', 'After the 10.77 m split'], rows: [
          ['Gini impurity', '0.3131', '0.3083'],
          ['Share of points misclassified', '19.43%', '19.43%'],
          ['Accuracy of the prediction', '80.57%', '80.57%'],
          ['Accuracy of always guessing Shed', '80.57%', 'Unchanged baseline']
        ] },
        { kind: 'p', text: 'The last row is the most important habit of all. A model that guesses the commonest label every time is already right 80.57% of the time here, so any accuracy figure must beat that before it means anything. Learners write the baseline first, and only then train the tree.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Compute Gini and error by hand for small groups, then check the numbers in Python on the full map.' },
          { h3: 'University students', p: 'Impurity measures, entropy, greedy tree growth and why the criterion changes the shape of the final tree.' },
          { h3: 'Adults at work', p: 'Reading model reports critically: baselines, imbalanced classes and why accuracy alone can mislead.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no tie to Land Tasmania, the Devonport City Council or the ABS. The map layer and census data are theirs; the splits, scores and accuracies are our own analysis.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Devonport',
      h2: 'Tasmanian terms and daylight saving',
      intro: 'School dates and clock changes that shape a Devonport timetable.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term 4 in 2026', p: 'The Tasmanian Department for Education, Children and Young People lists Term 4 from 19 October to 18 December 2026.' },
          { h3: 'Term 1 in 2027', p: 'Students return on 4 February 2027, with Term 1 running to 9 April.' },
          { h3: 'Summer time', p: 'Tasmania moves its clocks forward on the first Sunday in October and back on the first Sunday in April.' }
        ] },
        { kind: 'spec', title: 'A midday slot in India', p: 'A 4:30pm Devonport lesson falls at noon India time in winter and at 11am in summer, within our teachers\' working day either way.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting labels to models with honest baselines',
    intro: 'Ages here are rough. The free lesson places each learner.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Counting and rules', p: 'Counting categories, writing if-rules by hand and checking how often they are right.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 15 to 18', h3: 'First models', p: 'Decision trees, Gini impurity and baselines, trained on real map data.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'University', h3: 'Learning algorithms', p: 'Tree growth, entropy, pruning and evaluation on imbalanced data.', courses: ['artificial-intelligence-complete-masterclass-college', 'data-science-complete-masterclass-college'] },
      { band: 'Adults', h3: 'Models at work', p: 'Building and checking classifiers for business data without fooling yourself.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant explain why its tree stopped growing?',
    intro: 'Only if the learner knew to ask.',
    p1: 'Ask an assistant for a decision tree that scores splits by error rate and it will write one. On the Devonport points it returns a single leaf predicting Shed with 80.57% accuracy, which sounds respectable. Nothing in the output says that this is exactly the do-nothing baseline, or that a different score would have let the tree learn.',
    p2: 'Our Devonport learners write the baseline before any model, compare split scores side by side and ask why a number did not move. The assistant is useful for the boilerplate; the questions that expose a stalled model come from understanding what each score measures.',
    closer: 'A Devonport learner who has seen a model stall at its own baseline will interrogate AI-generated results in 2026, and that habit is the reason programming still matters.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Miandetta to Quoiba, one live lesson',
    intro: 'An online class reaches every Devonport suburb equally, with no travel for anyone.',
    cells: [
      { h3: 'Suburb makes no difference', p: 'A learner in Miandetta and another in Quoiba join the same lesson from home.' },
      { h3: 'Tasmanian year levels', p: 'Teaching follows Tasmanian year levels, including Years 11 and 12, in English.' },
      { h3: 'Free opening lesson', p: 'You build something real with a teacher, then hear a suggested level, course and time; no card details needed.' },
      { h3: 'Fifteen to twenty learners', p: 'Groups at one level drawn from Tasmania, the mainland and overseas.' },
      { h3: 'Two a week', p: 'Around eight lessons a month, with Tasmanian holidays planned in advance.' },
      { h3: 'Clock changes covered', p: 'When summer time starts or ends, the lesson keeps its Devonport time.' }
    ],
    spec: { title: 'Confirmed in Devonport time', p: 'Every lesson time is written in Tasmanian time, so families never need to convert anything.' }
  },

  fees: {
    h2: 'What AI and programming classes cost in Devonport',
    intro: 'Three lines cover every price.',
    first: 'An opening lesson at no cost, ending with a level, course and time.',
    group: 'A month in a group of fifteen to twenty, normally eight lessons.',
    private: 'Normally eight private lessons a month with a single teacher.',
    closer: 'Devonport learners pay the same US dollar rate as the rest of Australia, with no island loading. Payment only begins after the trial has agreed a course and slot; the pricing page covers holidays, missed lessons and switching between formats.'
  },

  reviewsH2: 'Google reviews, copied word for word',

  book: {
    h2: 'Tell us what the learner is curious about',
    intro: 'We shape the first lesson around it: hand-written rules that sort a small list for a Year 8 beginner, the Devonport decision tree for a Year 11 student, or the Gini and error comparison on the full map for an adult.',
    success: 'Thank you. We will be in touch soon about an AI and programming class in Devonport.'
  },

  faq: {
    h2: 'Devonport AI and programming questions',
    intro: 'What Devonport learners and parents ask before starting.',
    items: [
      { q: 'How many people live in Devonport?', a: 'The Devonport urban area counted 31,721 residents in 2021, with a median age of 43.' },
      { q: 'What is Gini impurity?', a: 'Gini impurity measures how mixed a group of labels is: the chance that two items drawn at random from the group have different labels. A pure group scores 0, and decision trees choose splits that lower it.' },
      { q: 'What is the Devonport decision tree project?', a: 'Learners load 5,265 building points from Land Tasmania\'s LIST, build distance features in Python, and compare how Gini impurity and misclassification error score the same splits, finding a cut that one rule rewards and the other ignores.' },
      { q: 'Do I need to know Python first?', a: 'No. Beginners learn Python alongside the AI ideas, starting with counting and simple rules before any model.' },
      { q: 'Is this useful for TASC subjects?', a: 'The programming and data skills overlap with TASC Computer Science. Lessons build understanding; assessed work stays the student\'s own and no results are promised.' },
      { q: 'What times do Devonport lessons run?', a: 'After school or at weekends, agreed in the trial and confirmed in Tasmanian time. Summer time changes the gap to India, not the lesson.' },
      { q: 'Can younger children join?', a: 'Yes, from age 6, usually starting with Scratch. This page is written for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Devonport?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Devonport coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Tasmania',
    h2: 'More for Devonport and Tasmanian learners',
    html: 'Elsewhere in Tasmania there are <a class="cg-inline-link" href="/best-coding-classes-in-launceston">coding classes in Launceston</a> and <a class="cg-inline-link" href="/best-coding-classes-in-hobart">coding classes in Hobart</a>. College students can see <a class="cg-inline-link" href="/tasc-computer-science-help">TASC Computer Science help</a>, and the state overview is <a class="cg-inline-link" href="/coding-and-ai-classes-in-tasmania">coding and AI classes in Tasmania</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Devonport and Tasmania',
  footerPlaces: [
    { href: '/best-coding-classes-in-launceston', label: 'Launceston' },
    { href: '/best-coding-classes-in-hobart', label: 'Hobart' },
    { href: '/coding-and-ai-classes-in-tasmania', label: 'Tasmania' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-dvpt .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.7vw, 2.3rem); }
.cg-root.cg-dvpt .cg-hero h1 { font-weight: 725; letter-spacing: -0.016em; line-height: 1.08; }
.cg-root.cg-dvpt .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-dvpt .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-dvpt .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.013em; }
.cg-root.cg-dvpt .cg-grid-3 { gap: clamp(0.9rem, 2.3vw, 1.65rem); }
.cg-root.cg-dvpt .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-dvpt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dvpt .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-dvpt .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Devonport Significant Urban Area, ABS Census 2021 QuickStats, area code 6002, with Tasmania and Australia (read 8 October 2026): 31,721 people; median age 43 (Tasmania 42; Australia 38); 8,712 families; 14,512 private dwellings; 2.3 people per household; separate house 11,453 (88.2 percent; Tas 87.7; Australia 72.3); flat or apartment 34 (0.3 percent; Tas 5.3); Professionals 1,882 (13.7 percent; Tas 20.0); Technicians and Trades Workers 2,126 (15.5 percent; Tas 13.9; Australia 12.9); Labourers 2,056 (15.0 percent; Tas 11.3); Bachelor Degree level and above 3,324 (12.6 percent; Tas 21.9; Australia 26.3); aged 15 to 19: 1,741 (5.5 percent); aged 20 to 24: 1,714 (5.4 percent); industry: Supermarket and Grocery Stores 463 (3.4 percent; Tas 2.9), Primary Education 401 (2.9 percent; Tas 2.6). Tasmanian Department for Education, Children and Young People: 2026 Term 4 19 October to 18 December; 2027 Term 1 4 February to 9 April. IANA tz database: Australia/Hobart AEST UTC+10, AEDT UTC+11 first Sunday in October to first Sunday in April; Asia/Kolkata UTC+5:30.',
    localProject: 'Gini impurity against misclassification error as a decision-tree split criterion. Land Tasmania LIST Building Points (OpenDataWFS MapServer layer 12; CC BY 3.0 AU per layer copyright text; layer description: structures with one side under 25 m, larger buildings in LIST Building Polygons), envelope 146.32,-41.21,146.40,-41.15, queried 8 October 2026. 5,265 points; Shed 4,242 (80.57 percent), Residential Building 475, Commercial Facility 419. Root Gini 0.3131; misclassification error 19.43 percent. Nearest-neighbour distance (local equirectangular metres): quantiles 10/25/50/75/90 percent = 9.0/12.5/18.3/26.1/41.0; best Gini threshold 10.77 m, weighted Gini 0.3083, gain 0.0048, left 895 (91.4 percent Shed), right 4,370 (78.4 percent Shed); stump accuracy 80.57 percent = majority baseline; misclassification error unchanged at all 3,623 candidate thresholds. Points within 30 m: best threshold above 6, weighted Gini 0.3085, gain 0.0046, right 47 (29.8 percent Shed), accuracy 80.93 percent.',
    requiredMentions: [
      '31,721',
      '8,712',
      '14,512',
      '11,453',
      '2,126',
      '3,324',
      '5,265 building points',
      '10.77 m',
      'Miandetta to Quoiba'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Devonport Significant Urban Area (6002): people, median age, families, dwellings, dwelling structure, occupation, education, age, industry.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/6002' },
      { claim: 'Land Tasmania, LIST Building Points layer (OpenDataWFS layer 12), Creative Commons Attribution 3.0 Australia, layer description and attributes.', url: 'https://services.thelist.tas.gov.au/arcgis/rest/services/Public/OpenDataWFS/MapServer/12' },
      { claim: 'Tasmanian Department for Education, Children and Young People, school term dates for 2026 and 2027.', url: 'https://www.decyp.tas.gov.au/learning/term-dates/' },
      { claim: 'IANA time zone database, australasia file: Australia/Hobart offsets and daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any statement about how individual structures are used or who owns them: the tree works only with the map type labels.',
      'Building heights: the MEAN_HGT field was empty for this layer, so an earlier height-based project was dropped.',
      'Naming smaller structure categories that refer to care or emergency services: excluded under the cluster rules on health and disaster topics.',
      'Treating the study rectangle as the Devonport urban area boundary: the project uses the rectangle as stated.',
      'OpenStreetMap data and Bureau of Meteorology observations: Overpass returned 406 and BOM 403 to this machine in October 2026; neither was circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Land Tasmania, Devonport City Council, the Tasmanian Department for Education, Children and Young People or the ABS.'
    ]
  }
};
