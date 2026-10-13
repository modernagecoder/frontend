'use strict';
// Melville, Perth (cg- district page, Australia cluster Phase 8, row 306). Keyword slug ai-and-programming-classes-in-*,
// council page (ABS LGA55320, City of Melville) under Perth and Western Australia. Applecross (row 312) is a suburb of this
// council; its figures and required mentions are kept off.
// Spine: a monotonic constraint in scikit-learn 1.7.2 HistGradientBoostingRegressor predicting weekend from weekday volume (plus
// heavy share), trained on 931 Perth metropolitan Traffic Digest sites outside Melville, tested on 70 Melville sites. Free model:
// MAE 2,599, 2,070 of 11,060 grid steps go down; constrained: MAE 2,232, 0 violations; the plain median ratio (0.801) wins with
// MAE 1,673. Script: scratchpad au/b13/a_mlvl.py. Lesson family: monotonic constraint; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MELVILLE',
    label: 'Melville, Perth',
    blurb: 'AI and programming classes for the City of Melville, with a model that should never predict less weekend traffic for a busier road, until a constraint makes it behave.'
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
  slug: 'ai-and-programming-classes-in-melville-perth',
  code: 'mlvl',
  accent: '#373C73',
  accentRationale: 'Melville: a muted river indigo (hue 235.0, s 0.52, v 0.45), at least 33.5 RGB from every WA page accent, 13.5 from other AU accents and 8.6 from every other site colour; 8.3:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Melville',
    eyebrow: 'City of Melville, south of the Swan River, Western Australia',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Melville' },
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
  routeLabel: 'Melville, Perth',
  title: 'AI and Programming Classes in Melville, Perth',
  description: 'Live online AI and programming classes for the City of Melville, ages 6 to adult, with a machine learning project that tests monotonic constraints on traffic data.',
  ogDescription: 'A Melville model predicted less weekend traffic for some busier roads, 2,070 times. A constraint fixed that. A one-line ratio beat both.',
  twitterDescription: 'Machine learning and coding for Melville learners, live online, with a free first lesson.',
  ogImageCourse: 'ai-ml-masterclass-complete-college',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Melville',
    description: 'Machine learning, Python and programming lessons for Melville children, teenagers and adults, set by level after a free trial and taught live.'
  },
  h1: 'AI and programming classes in Melville',
  capsuleQ: 'What does the Melville machine learning project test?',
  capsule: 'Whether a model respects common sense. A road with more weekday traffic should not be predicted to have less weekend traffic, all else equal. An unconstrained model breaks that rule 2,070 times on a test grid. A monotonic constraint removes every break and improves accuracy, yet a simple ratio still predicts Melville roads more accurately than either model.',
  lead: 'The City of Melville spreads along the southern shore of the Swan River, crossed by Leach Highway, Canning Highway and the Kwinana Freeway. Main Roads lists 79 traffic count sites in the council. They make a compact, real test set for a question every model builder meets: should the model be allowed any shape it likes?',
  wa: 'Hi Modern Age Coders, I am in Melville and would like to book a free AI or programming lesson.',
  picks: {
    eyebrow: 'Course picks for Melville',
    h2: 'Machine learning and Python',
    intro: 'Courses suited to the constraint project below. A free trial lesson sets the starting point.',
    items: [
      {
        course: 'ai-ml-masterclass-complete-college',
        band: 'University and adult',
        note: 'Models, validation and constraints that encode what you already know.'
      },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Training and testing models on real public data.' },
      { course: 'statistics-probability-maths-course', band: 'University and adult', note: 'Error measures and baselines that keep models honest.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python and AI ideas for children.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Melville at a glance',
      h2: 'A riverside council of graduates and professionals',
      intro: 'Council-level figures for the City of Melville (ABS LGA55320) from 2021 Census QuickStats, read on 12 October 2026, alongside the ABS 2025 estimate.',
      body: [
        {
          kind: 'table',
          caption: 'City of Melville counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents, 2021 Census', '103,523'],
            ['Estimated residents, 2025', '115,945'],
            ['Median age', '42'],
            ['Families', '28,676'],
            ['Private dwellings', '42,881'],
            ['Bedrooms per dwelling', '3.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Melville shares compared with WA',
          head: ['Share', 'Melville', 'WA'],
          rows: [
            ['Bachelor degree or higher', '38.4% (32,842)', '23.8%'],
            ['Professionals among workers', '33.2% (17,167)', '22.0%'],
            ['Worked at home', '10.0% (5,168)', '7.5%'],
            ['Semi-detached, terrace or townhouse', '18.6% (7,179)', '13.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Study and work', p: 'A third of Melville workers were professionals, about half again the state share, and degree holders were common.' },
            {
              h3: 'Two population figures',
              p: 'The 2021 Census count of 103,523 and the 2025 ABS estimate of 115,945 come from different methods, so both are shown without subtraction.'
            },
            { h3: 'Schools', p: 'Our map test finds 25 government schools inside the council outline, 18 of them primary schools.' }
          ]
        },
        {
          kind: 'p',
          text: 'The 2021 Census fell during the pandemic, so working-from-home figures in particular may be higher than in a usual week. The ABS rounds shares and lightly perturbs small counts, which means table parts may not add exactly to totals; we copy its numbers as published.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'A model that must not slope the wrong way',
      intro: 'The task: predict a site\'s average weekend traffic from its average weekday traffic and weekday heavy-vehicle share. Learners train a gradient-boosted model on 931 Perth metropolitan count sites outside Melville, then test it on the 70 Melville sites that have both figures. Common sense says busier weekday roads should never get lower weekend predictions, so they check that too.',
      body: [
        {
          kind: 'table',
          caption: 'Three predictors on 70 Melville sites (our calculation)',
          head: ['Predictor', 'Mean absolute error', 'Wrong-way steps'],
          rows: [
            ['Gradient boosting, unconstrained', '2,599 vehicles', '2,070 of 11,060'],
            ['Gradient boosting, monotonic in weekday volume', '2,232 vehicles', '0 of 11,060'],
            ['Weekday volume times median ratio 0.801', '1,673 vehicles', '0 by design']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Counting violations',
              p: 'For each Melville site, learners hold its heavy share fixed and sweep weekday volume from 1,000 to 80,000 in 159 steps. Any step where the prediction falls is a wrong-way step. The free model\'s worst single drop is 7,719 vehicles.'
            },
            {
              h3: 'The constraint',
              p: 'One setting tells the model that predictions may only rise with weekday volume. It removes every violation, and here it also cuts the average error by 367 vehicles.'
            },
            {
              h3: 'The baseline wins',
              p: 'Multiplying weekday volume by the median weekend ratio from the training sites beats both models. Traffic shape is simple enough that the flexible model mostly learns noise.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Honest conclusion',
          p: 'Constraints make a model safer and easier to trust, but they do not make it the most accurate tool. On this data a one-line rule wins, and the right report says so. Learners who skip the baseline would have shipped the weaker model with pride.'
        },
        {
          kind: 'p',
          text: 'Volumes come from the Main Roads Traffic Digest, downloaded on 12 October 2026. Training uses metropolitan sites in other councils; testing uses sites Main Roads assigns to the City of Melville. Count years vary from 2021/22 to 2026/27. Models were fitted with scikit-learn 1.7.2 and every error and violation figure is our own calculation.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'In code',
      h2: 'One parameter, measured properly',
      intro: 'In scikit-learn the constraint is a single argument, monotonic_cst, with 1 for features that may only push predictions up and 0 for free ones.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Split the Traffic Digest into Melville test sites and metropolitan training sites.'],
            ['2', 'Fit the free model and write a function that counts wrong-way steps on a grid.'],
            ['3', 'Refit with monotonic_cst=[1, 0] and compare errors and violations.'],
            ['4', 'Build the ratio baseline first next time, and explain why it wins.']
          ]
        },
        {
          kind: 'p',
          text: 'The heavy-vehicle share is left unconstrained on purpose. Freight roads such as Leach Highway carry far more trucks on weekdays, so a higher weekday heavy share could reasonably mean lower weekend traffic. Learners argue each constraint from knowledge of the world, not from the data alone, and write that reasoning beside the code.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Draw a staircase that must only go up, then spot the steps where a messy drawing dips.' },
            { h3: 'Teenagers', p: 'Train both models, count violations and present the baseline result fairly.' },
            { h3: 'Adults', p: 'Add monotonic constraints to pricing, risk or demand models where the direction is known.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Melville',
      h2: 'Freight routes, river paths and 2027 dates',
      intro: 'Local facts from Main Roads and the WA Department of Education.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Leach Highway',
              p: 'West of Moolyeen Road the highway averaged 82,759 vehicles on weekdays in a 2021/22 count. West of Stock Road, 14.2% of all vehicles are heavy.'
            },
            {
              h3: 'Riverside path',
              p: 'The Tompkins Park path counter west of Dunkley Avenue averages 814 riders a day, 501 heading to South Perth and 313 toward Fremantle.'
            },
            { h3: 'Term 3, 2027', p: 'The third WA school term of 2027 begins on Monday 19 July and ends on Friday 24 September.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Boundary used',
          p: 'The council is the ABS outline of about 52.9 square kilometres. Count sites are those Main Roads records against the City of Melville; school figures use our point-in-polygon test.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From staircases to constrained models',
    intro: 'Ages are a guide only; the free lesson decides.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Patterns',
        p: 'Block-code games about rising and falling patterns.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 8 to 12',
        h3: 'Numbers in code',
        p: 'Python, simple charts and first predictions.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Machine learning',
        p: 'Models, baselines and fair testing.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied ML',
        p: 'Constraints, validation and statistics for work.',
        courses: ['ai-ml-masterclass-complete-college', 'statistics-probability-maths-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why learn this if AutoML tools exist?',
    intro: 'Because an automatic tool optimises error, not common sense.',
    p1: 'An automated pipeline would happily pick the unconstrained model if its validation score looked fine. It would not notice that some busier roads get lower predictions, and it might not try the one-line ratio at all.',
    p2: 'A Melville learner who has counted 2,070 wrong-way steps knows to ask what shape a model should have, and to compare it with a simple rule before trusting it.',
    closer: 'Our AI classes teach learners to judge models, not just train them.',
    blogAnchor: 'the case for learning to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Melville lessons, delivered live',
    intro: 'Every class takes place live over video, so learners join from home on either side of Leach Highway.',
    cells: [
      { h3: 'Live teacher', p: 'Lessons are taught in real time with code checked as it is written.' },
      { h3: 'School terms', p: 'Classes match WA terms and pause during holidays.' },
      { h3: 'Free trial', p: 'Start with a free lesson and a short written plan.' },
      { h3: 'Group sizes', p: 'Groups of fifteen to twenty at one level, or private lessons.' },
      { h3: 'Schedule', p: 'Two lessons a week, about eight a month.' },
      { h3: 'India timing', p: 'A 6:30pm Melville lesson begins at 4pm in India.' }
    ],
    spec: {
      title: 'Perth time',
      p: 'WA last used daylight saving in a period that ended in March 2009, according to the IANA time zone database, so the offset from India never changes.'
    }
  },
  fees: {
    h2: 'Melville class fees',
    intro: 'Fees are the same for all learners.',
    first: 'Lesson one is free, with a plan afterwards.',
    group: 'Group classes: about eight lessons monthly with fifteen to twenty learners.',
    private: 'Private classes: about eight lessons monthly with one teacher.',
    closer: 'Fees are in US dollars and start only after the trial has agreed the course and a weekly time. Holiday and missed-lesson rules are on the pricing page.'
  },
  reviewsH2: 'Google reviews',
  book: {
    h2: 'Book a free Melville lesson',
    intro: 'Tell us the learner\'s age and interests. A young child might draw the only-up staircase; a teenager might count the model\'s wrong-way steps.',
    success: 'Thanks. We will be in touch about a Melville lesson.'
  },
  faq: {
    h2: 'Melville AI and programming questions',
    intro: 'Questions Melville families and adult learners ask.',
    items: [
      {
        q: 'How big is the City of Melville?',
        a: 'The 2021 Census counted 103,523 residents, median age 42. The ABS estimate for 2025 is 115,945, and the council covers about 52.9 square kilometres.'
      },
      {
        q: 'What is a monotonic constraint?',
        a: 'A rule that a model\'s prediction may only move one way as a chosen input increases, such as weekend traffic never falling as weekday traffic rises.'
      },
      {
        q: 'Did the constraint make the model better?',
        a: 'Safer and a little more accurate here, but a simple ratio baseline was still more accurate than either model.'
      },
      {
        q: 'Why compare with a baseline?',
        a: 'Because a complex model is only worth using if it beats a simple rule. Without the comparison, nobody would know the ratio won.'
      },
      { q: 'Do children learn machine learning?', a: 'Younger learners explore patterns and AI ideas. Training real models usually starts around 13.' },
      {
        q: 'How many traffic counters are in Melville?',
        a: 'Main Roads lists 79 count sites in the City of Melville; 70 have both weekday and weekend averages.'
      },
      {
        q: 'Do you have a centre in Melville?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Melville classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'What are the groups like?',
        a: 'Fifteen to twenty learners matched by level and pace, not by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can adults study AI with you?', a: 'Yes. Adults learn in adult groups or privately, often applying models to problems at work.' }
    ]
  },
  next: {
    eyebrow: 'More for Perth learners',
    h2: 'Where else to look',
    html: 'South-of-the-river families can also browse the <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">Perth classes page</a>, our <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">Western Australia overview</a>, and <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teenagers</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Melville and Perth',
  footerPlaces: [
    { href: '/ai-classes-for-teens-australia', label: 'AI for teens' },
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/coding-classes-for-kids-perth', label: 'Kids in Perth' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-mlvl .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.5vw, 2.05rem); }
.cg-root.cg-mlvl .cg-hero h1 { font-weight: 650; letter-spacing: -0.029em; line-height: 1.06; }
.cg-root.cg-mlvl .cg-capsule { border-left: 2px solid var(--cg-accent); border-right: 2px solid var(--cg-accent); padding: 0 0.9rem; }
.cg-root.cg-mlvl .cg-eyebrow { letter-spacing: 0.115em; font-weight: 670; font-size: 0.8rem; }
.cg-root.cg-mlvl .cg-section-head h2 { max-width: 19ch; }
.cg-root.cg-mlvl .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.65rem); }
.cg-root.cg-mlvl .cg-table caption { text-align: left; font-weight: 600; font-size: 0.9rem; }
.cg-root.cg-mlvl .cg-table td:nth-child(n+2) { font-variant-numeric: tabular-nums; }
.cg-root.cg-mlvl .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.7rem; }
.cg-root.cg-mlvl .cg-callout { border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'City of Melville (LGA55320), ABS Census 2021 QuickStats (read 12 October 2026): 103,523 people; median age 42; 28,676 families; 42,881 private dwellings; 3.4 bedrooms per dwelling; bachelor or higher 32,842 (38.4%, WA 23.8%); professionals 17,167 (33.2%, WA 22.0%); worked at home 5,168 (10.0%, WA 7.5%); semi-detached 7,179 (18.6%, WA 13.0%). ABS ERP 2025 (LGA 55320): 115,945. ABS LGA area 52.8505 sq km. 25 government schools inside the LGA polygon (our test), 18 primary. Main Roads Traffic Digest: 79 sites with LG_NAME Melville (C), 70 with weekday and weekend averages; Leach Hwy West of Moolyeen Rd MON_FRI 82,759, SAT_SUN 66,771 (2021/22); Leach Hwy West of Stock Rd PCT_HEAVY_MON_SUN 14.2 (2025/26). Bike Count Sites: Tompkins Park RSP W of Dunkley Av combined 814 (501 to South Perth, 313 to Fremantle). WA 2027 Term 3: Monday 19 July to Friday 24 September. Perth +8:00, last DST ended March 2009 (IANA 2026e).',
    localProject: 'scikit-learn 1.7.2 HistGradientBoostingRegressor(max_iter=300, learning_rate=0.1, min_samples_leaf=10, random_state=0), features MON_FRI and PCT_HEAVY_MON_FRI, target SAT_SUN; train 931 Metropolitan sites outside Melville, test 70 Melville sites. Free: MAE 2,599, violations 2,070 of 11,060 grid steps (159-point weekday grid 1,000 to 80,000 at each site\'s heavy share), worst drop 7,719. monotonic_cst=[1,0]: MAE 2,232, 0 violations. Median-ratio baseline 0.801 x MON_FRI: MAE 1,673 (best). OLS through origin 0.767: MAE 2,034. Our calculation. Script: scratchpad au/b13/a_mlvl.py.',
    requiredMentions: ['115,945', '42,881', '38.4% (32,842)', '10.0% (5,168)', '2,070', 'monotonic_cst', '82,759', 'Tompkins Park', '0.801'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Melville local government area (LGA55320), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA55320'
      },
      {
        claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Melville LGA 55320, total persons, 2025.',
        url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.55320.LGA2025.A?format=csvfilewithlabels'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Main Roads Western Australia, Traffic Digest (count sites with average weekday, weekend and all-day volumes and heavy vehicle shares for the latest count year), Creative Commons Attribution 4.0, downloaded 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/mrwa-traffic-digest'
      },
      {
        claim: 'Main Roads Western Australia, Bike Count Sites (permanent counters with volumes by direction for the latest count year), Creative Commons Attribution 4.0, downloaded 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/mrwa-bike-count-sites'
      },
      {
        claim: 'WA Department of Education, Western Australian Schools Lists (Excel), currently active schools with student numbers as at the 2026 Semester 1 census, Creative Commons Attribution 4.0, downloaded 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/western-australian-schools-lists'
      },
      {
        claim: 'scikit-learn 1.7.2 documentation, HistGradientBoostingRegressor monotonic_cst parameter.',
        url: 'https://scikit-learn.org/stable/modules/ensemble.html#monotonic-constraints'
      },
      {
        claim: 'WA Department of Education, future term dates: 2027 Term 1 Monday 1 February to Friday 9 April; Term 3 Monday 19 July to Friday 24 September.',
        url: 'https://www.education.wa.edu.au/future-term-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Perth at +8:00 on rule AW, whose last daylight saving period ended on the last Sunday of March 2009.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Applecross figures (it has its own page in the City of Melville): kept off this council page.',
      'Claims that the model or ratio forecasts future traffic: not made; the test compares published averages.',
      'Melville suburb (SAL) figures: the page uses the council area only.',
      'Naming individual schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the City of Melville, Main Roads WA or the WA Department of Education.'
    ]
  }
};
