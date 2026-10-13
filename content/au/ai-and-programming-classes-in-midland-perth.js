'use strict';
// Midland, Perth (cg- district page, Australia cluster Phase 8, row 314). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page (ABS SAL50947, City of Swan) under Perth and Western Australia.
// Spine: test-set reuse. 665 Perth Metro stop records within 6 km of Midland station (our selection), target = bay.
// 852 one-word rules from stop names; in each of 500 random half splits (seed 2026) the rule with the best score on the
// "test" half is chosen, then scored on the other half. Chosen-on-test mean 81.32%; same rules on fresh data 79.95%;
// always "no bay" 79.52%. Most of the apparent gain disappears. Lesson family: test-set reuse; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MIDLAND',
    label: 'Midland, Perth',
    blurb: 'AI and programming classes for Midland, where picking the top scorer among 852 rules on the test data makes a model look better than it is.'
  },
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  slug: 'ai-and-programming-classes-in-midland-perth',
  code: 'mdld',
  accent: '#575A12',
  accentRationale: 'Midland: a dark olive (hue 62.5), 5.93:1 on #EDE7DA; 26.9 RGB from the nearest Western Australian accent, 12.4 from any other Australian accent and 7.3 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Midland',
    eyebrow: 'Midland, City of Swan, Western Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Midland' },
      { type: 'AdministrativeArea', name: 'City of Swan' },
      { type: 'City', name: 'Perth' },
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' },
    { slug: 'online-coding-and-python-classes-in-perth-western-australia', name: 'Perth' }
  ],
  nav: [
    { label: 'Perth', href: '/online-coding-and-python-classes-in-perth-western-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Midland, Perth',
  title: 'AI and Programming Classes in Midland, Perth',
  description: 'Live online AI and programming classes for Midland children, teenagers and adults, with machine learning tested honestly on real Perth data, in groups or one to one.',
  ogDescription: 'Midland AI project: 665 stop records, 852 simple rules, and why a score measured on the same data used to choose the rule cannot be trusted.',
  twitterDescription: 'AI and programming for Midland learners, live online.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Midland',
    description: 'Level-matched online AI, machine learning and programming lessons for children, teenagers and adults in Midland, Perth, taught live in English.'
  },
  h1: 'AI and programming classes in Midland',
  capsuleQ: 'What can Midland learners gain from AI and programming classes?',
  capsule: 'The ability to build machine learning models and to measure them honestly, keeping data used for choosing a model apart from data used for judging it. Young children start in Scratch at six, and older learners build and test models in Python. Midland had 6,335 residents in 2021.',
  lead: 'Around Midland station, about one stop record in five carries a Y in the state file\'s bay field. Try 852 simple rules to predict which, keep the one that scores highest on your test data, and it looks like progress. Score that same rule on data it has never met and almost all of the progress vanishes.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Midland.',
  picks: {
    eyebrow: 'Course picks for Midland',
    h2: 'Courses that teach honest evaluation',
    intro: 'The bus bay experiment needs Python, numpy and a firm grasp of training, validation and test data. These courses teach it; the trial lesson finds the level.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning with proper train, validation and test splits from the start.' },
      {
        course: 'data-science-complete-masterclass-college',
        band: 'University and adult',
        note: 'Experiments, evaluation and reporting results that hold up.'
      },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Models from first principles to validated, deployable work.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python and AI projects with fair tests.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Midland in the Census',
      h2: 'Small households and many townhouses',
      intro: 'Census 2021 numbers for Midland (ABS code SAL50947), paired with Western Australia\'s.',
      body: [
        {
          kind: 'table',
          caption: 'Midland residents and homes, 2021',
          head: ['Measure', 'Midland'],
          rows: [
            ['Residents', '6,335'],
            ['Median age', '39'],
            ['Families', '1,366'],
            ['Private dwellings', '3,868'],
            ['People per household', '1.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Midland compared with Western Australia',
          head: ['Indicator', 'Midland', 'Western Australia'],
          rows: [
            ['Semi-detached, row or townhouse homes', '50.6% (1,468)', '13.0%'],
            ['Flats or apartments', '16.8% (487)', '6.5%'],
            ['Separate houses', '32.2% (933)', '79.7%'],
            ['Employed residents working from home', '3.5% (98)', '7.5%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Young residents', p: 'Midland counted 316 children under five, 259 aged 5 to 9 and 215 aged 10 to 14.' },
            { h3: 'Older residents', p: 'Residents aged 85 and over numbered 275, 4.3% of the suburb.' },
            { h3: 'Size', p: 'The suburb boundary covers about 4.2 square kilometres east of central Perth.' }
          ]
        },
        {
          kind: 'p',
          text: 'Figures are as published by the bureau, which nudges small cells for privacy. Adding them together would compound those nudges, so we do not.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Choosing on the test set',
      intro: 'Our selection: the 665 Perth Metro stop records within 6 km of Midland station, 136 of them with Y in the bay field. Each rule is a single word from the stop names: "bay if the name contains this word", or the reverse. That gives 852 rules from 426 distinct words.',
      body: [
        {
          kind: 'table',
          caption: 'Averages over 500 random half-and-half splits (our calculation)',
          head: ['Measurement', 'Accuracy'],
          rows: [
            ['Top rule, scored on the half used to choose it', '81.32%'],
            ['Same rule, scored on the other half', '79.95%'],
            ['Always guessing "no bay", on the other half', '79.52%']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How the apparent gain shrinks',
          head: ['Compared with always "no bay"', 'Points gained'],
          rows: [
            ['As reported on the reused test half', '1.80'],
            ['On fresh data', '0.43']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why the score inflates',
              p: 'With 852 rules, some will fit any particular half by luck. Choosing the top scorer picks up that luck, and reporting its score on the same half counts the luck as skill.'
            },
            { h3: 'How often', p: 'In 64.2% of the 500 splits the chosen rule did worse on the fresh half than on the half used to pick it.' },
            {
              h3: 'The honest finding',
              p: 'Single words in Midland-area stop names barely predict bays. The model is only fractionally better than guessing, and only fresh data reveals that.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The three-way split',
          p: 'Keep training data for fitting, validation data for choosing between models or settings, and a test set that is opened once, at the end. Every time a test score influences a decision, that test set becomes validation data and its scores stop being trustworthy.'
        },
        {
          kind: 'p',
          text: 'The Public Transport Authority of Western Australia publishes the stop file; drawing a 6 km circle around the Midland platform record was our decision. All splits, rules and accuracies are our calculation (numpy, seed 2026). The bay field describes the file, not a street survey.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Evaluating models',
      h2: 'Keeping the test set clean',
      intro: 'Test-set reuse rarely looks like cheating. It looks like ordinary tinkering: one more feature, one more setting, checked against the same test score each time.',
      body: [
        {
          kind: 'table',
          caption: 'Habits that protect a test set',
          head: ['Habit', 'How', 'Midland lesson'],
          rows: [
            ['Split three ways', 'Training, validation, test', 'Choose rules on validation only'],
            ['Lock the test set', 'Score it once, at the end', 'Avoids the 1.80-point illusion'],
            ['Report a baseline', 'Always guess the majority class', '79.52% here'],
            ['Repeat the split', 'Average over many random splits', '500 splits, seed 2026']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Practise spelling with one word list and get tested on a different one, then talk about why that is fairer.' },
            { h3: 'Secondary learners', p: 'Rebuild the Midland experiment, then add a validation split and watch the reported score fall to the truth.' },
            { h3: 'Adults', p: 'Ask of any dashboard model: was the reported score measured on data that influenced its design?' }
          ]
        },
        {
          kind: 'p',
          text: 'Public leaderboards suffer the same effect at scale: when many teams tune against one fixed test set, the top scores drift upward without real improvement. Holding back unseen data is the standard defence.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Midland',
      h2: 'A rail terminus and regional coaches',
      intro: 'What the stops file and school calendar say about Midland in particular.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Stop mix', p: 'Our boundary check finds 69 stop records in Midland: 58 standard, 6 school, 3 regional coach and 2 rail platform records.' },
            { h3: 'Main roads', p: 'Great Eastern Highway and The Crescent carry 8 stop records each; Great Northern Highway and Lloyd Street 7 each.' },
            { h3: 'Term 4, 2027', p: 'WA public schools hold Term 4 of 2027 from Monday 11 October to Thursday 16 December.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Midland suburb only',
          p: 'Census and stop figures here describe the suburb of Midland in the City of Swan. Midvale, Middle Swan, Woodbridge, Viveash, Hazelmere and Bellevue border it and are counted separately, although the 6 km project area reaches into them.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From fair spelling tests to fair model tests',
    intro: 'Ages are indicative; the free trial lesson sets each learner\'s rung.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Games and puzzles with fair rules.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI ideas',
        p: 'First code and simple models trained on examples.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Machine learning',
        p: 'Training, validating and testing models properly.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied machine learning',
        p: 'Experiment design and evaluation for real work.',
        courses: ['data-science-complete-masterclass-college', 'ai-ml-masterclass-complete-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can run a thousand experiments. Who keeps score honestly?',
    intro: 'The person who designs the evaluation. Automated search makes test-set reuse easier, not harder.',
    p1: 'An AI assistant asked to "find a rule that predicts bus bays" can try hundreds of candidates in seconds and report the winner\'s accuracy. If it scored them all on one test half, that headline figure carries the luck of the search.',
    p2: 'Learners who have watched 81.32% fall to 79.95% on fresh data insist on a locked test set and a baseline. That is what separates a real result from an artefact of searching.',
    closer: 'In Midland, the learner who guards the test set reports results that survive contact with new data.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Midland lessons on video',
    intro: 'Lessons are live online, so learners join from home.',
    cells: [
      { h3: 'Results read aloud', p: 'Every score is read together and questioned before anyone believes it.' },
      { h3: 'Following WA terms', p: 'Plans fit the state school year, with holiday breaks.' },
      { h3: 'Free trial', p: 'One full lesson free, then a frank recommendation.' },
      { h3: 'Fifteen to twenty learners', p: 'Groups by level, or one-to-one teaching.' },
      { h3: 'Weekly pattern', p: 'A pair of fixed lessons every week, near enough eight per month.' },
      { h3: 'Across time zones', p: 'Teaching happens from India, so a Midland class at 6:30pm is 4pm India time.' }
    ],
    spec: {
      title: 'Stable lesson times',
      p: 'Since a trial ended in March 2009, Western Australia has had no daylight saving (IANA time zone database); India has none either, so times stay fixed.'
    }
  },
  fees: {
    h2: 'Midland class fees',
    intro: 'Three prices, the same for every learner.',
    first: 'Lesson one is free and finishes with a written next step.',
    group: 'About eight group lessons a month, fifteen to twenty in each class.',
    private: 'About eight private lessons a month, one teacher per learner.',
    closer: 'Fees are charged in US dollars, and nothing is paid until after the trial when a course and timing have been chosen. See the pricing page for holiday and absence rules.'
  },
  reviewsH2: 'Reviews posted on Google',
  book: {
    h2: 'Book a free Midland class',
    intro: 'Write a line about who will be learning and their age. Teenagers could rebuild the test-set experiment, and children could open with a fair-test Scratch game.',
    success: 'Thank you. We will contact you soon about a Midland class.'
  },
  faq: {
    h2: 'Midland AI and programming questions',
    intro: 'Questions Midland families and adults frequently ask.',
    items: [
      {
        q: 'How many people live in Midland, WA?',
        a: 'The 2021 Census QuickStats count 6,335 residents in the suburb of Midland, with 3,868 private dwellings and 1.9 people per household.'
      },
      {
        q: 'What is test-set reuse?',
        a: 'Using the same test data repeatedly to choose between models or settings. Each choice leaks information from the test set, so its final score overstates how the model will do on new data.'
      },
      {
        q: 'What is a validation set?',
        a: 'A portion of data kept separate from training and used to compare models or tune settings, so the test set can stay untouched until the final check.'
      },
      {
        q: 'What did the Midland experiment show?',
        a: 'Selecting the highest-scoring of 852 one-word rules on a test half gave 81.32% accuracy on that half but 79.95% on fresh data, barely above the 79.52% of always guessing "no bay".'
      },
      {
        q: 'When can my child start AI?',
        a: 'Midland children can begin at six with Scratch games that show how computers learn from examples; building real models in Python comes nearer thirteen.'
      },
      { q: 'Are Claude courses for teenagers?', a: 'No. Only adults of 18 or over join our Claude-based courses, and teenagers learn with other AI tools.' },
      {
        q: 'Is there a classroom in Midland?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Midland learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Will Midland groups cover Copilot Studio?', a: 'No. Copilot Studio is one to one only; groups code their agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Perth and Western Australia',
    h2: 'More for Midland learners',
    html: 'See <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">the Perth page</a> and <a class="cg-inline-link" href="/coding-classes-for-kids-perth">coding for Perth kids</a>. Learners heading inland will find <a class="cg-inline-link" href="/best-coding-classes-in-kalgoorlie">a Kalgoorlie page</a>, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">our Western Australia guide</a> lists every region.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Midland and Perth',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/best-coding-classes-in-kalgoorlie', label: 'Kalgoorlie' },
    { href: '/coding-classes-for-kids-perth', label: 'Kids in Perth' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' }
  ],
  personalityCss: `
.cg-root.cg-mdld .cg-hero-grid { align-items: start; gap: clamp(1.02rem, 2.95vw, 2.42rem); }
.cg-root.cg-mdld .cg-hero h1 { font-weight: 645; letter-spacing: -0.023em; line-height: 1.07; }
.cg-root.cg-mdld .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.66rem 0 0.66rem 1.12rem; }
.cg-root.cg-mdld .cg-eyebrow { letter-spacing: 0.108em; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; }
.cg-root.cg-mdld .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.017em; }
.cg-root.cg-mdld .cg-grid-3 { gap: clamp(0.76rem, 2.05vw, 1.6rem); }
.cg-root.cg-mdld .cg-table caption { font-weight: 675; text-align: left; }
.cg-root.cg-mdld .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mdld .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.04rem; }
.cg-root.cg-mdld .cg-callout { border-left-width: 7px; border-radius: 2px; }
`,
  dossier: {
    curriculumAuthority: 'Midland (SAL50947), City of Swan. ABS Census 2021 QuickStats (read 12 October 2026): 6,335 people; median age 39; 1,366 families; 3,868 private dwellings; 1.9 per household; semi-detached 1,468 (50.6%, WA 13.0%); flats 487 (16.8%, WA 6.5%); separate houses 933 (32.2%, WA 79.7%); worked at home 98 (3.5%, WA 7.5%); aged 0-4 316; 5-9 259; 10-14 215; 85+ 275. ABS SAL area 4.1925 sq km; council verified by ABS LGA point query (Swan). PTA-001: 69 records inside the SAL polygon (Standard 58, School 6, regional coach 3, Rail 2: Midland Stn Platforms 2 and 3); bay Y 28; Great Eastern Hwy 8, The Crescent 8, Great Northern Hwy 7, Lloyd St 7. Neighbours (ABS touches): Bellevue, Hazelmere, Middle Swan, Midvale, Viveash, Woodbridge. WA 2027 Term 4: Monday 11 October to Thursday 16 December. Perth no daylight saving since March 2009 (IANA).',
    localProject: 'Test-set reuse. Perth Metro PTA-001 records within 6,000 m (haversine) of Midland Stn Platform 2 (-31.89232, 116.00330): 665; bay Y 136 (majority 79.55%). Words: regex [A-Za-z\']+ over stop names, 426 distinct; rules word->bay and not-word->bay = 852. 500 random half splits, numpy default_rng(2026): argmax accuracy on half A (mean 81.32%); same rule on half B (79.95%); majority on half B (79.52%); share of splits with B < A 64.2%.',
    requiredMentions: ['3,868', '1,468', '275', 'Great Eastern Highway', 'The Crescent', '852 rules', '81.32%', '79.95%', 'test-set reuse'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Midland suburb and locality (SAL50947), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL50947'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities and Local Government Areas boundary services, used for our point-in-boundary checks and areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Public Transport Authority of Western Australia, Stops (PTA-001), Creative Commons Attribution 4.0, published on data.wa.gov.au; 16,822 stop records read from the SLIP map service on 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/public-transport-authority-stops-bus-stops'
      },
      {
        claim: 'scikit-learn documentation, Cross-validation: evaluating estimator performance, on keeping a held-out test set and the risk of overfitting it when tuning.',
        url: 'https://scikit-learn.org/stable/modules/cross_validation.html'
      },
      {
        claim: 'WA Department of Education, future term dates: 2027 public school terms as gazetted.',
        url: 'https://www.education.wa.edu.au/future-term-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Perth follows rule AW, whose last daylight saving period ended in March 2009.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'That stop names cause bays: not claimed; the rules only correlate.',
      'That every stop in the 6 km area belongs to Midland: rejected; the project area is our choice and reaches neighbouring suburbs.',
      'Passenger or service numbers: not claimed.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Swan or the Public Transport Authority.'
    ]
  }
};
