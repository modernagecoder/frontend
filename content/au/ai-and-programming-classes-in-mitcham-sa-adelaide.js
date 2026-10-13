'use strict';
// Mitcham, Adelaide (cg- district page, Australia cluster Phase 8, row 326). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), council page (ABS LGA44340, City of Mitcham) under Adelaide and SA.
// Slug carries "sa" to separate it from Mitcham in Melbourne.
// Spine: logistic regression predicting whether each of Mitcham's 462 stop records has Saturday service from its
// Wednesday visit count (log-scaled). The decision boundary falls at about 8.45 Wednesday visits: 95.7% accuracy against
// 87.2% for always predicting Saturday service; 18 false positives, 2 false negatives. GTFS v1708, numpy, our run.
// Lesson family: decision boundary of a classifier; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MITCHAM',
    label: 'Mitcham, Adelaide',
    blurb: 'AI and programming classes for the City of Mitcham, where a model learns the point at which a weekday bus stop also gets Saturday buses.'
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
  slug: 'ai-and-programming-classes-in-mitcham-sa-adelaide',
  code: 'mtcm',
  accent: '#2B7222',
  accentRationale: 'Mitcham: a hills green (hue 113.3), 4.82:1 on #EDE7DA; 32.4 RGB from the nearest South Australian accent, 14.5 from any other Australian accent and 9.4 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Mitcham',
    eyebrow: 'City of Mitcham, Adelaide, South Australia',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Mitcham' },
      { type: 'City', name: 'Adelaide' },
      { type: 'AdministrativeArea', name: 'South Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-south-australia', name: 'South Australia' },
    { slug: 'ai-and-programming-classes-in-adelaide', name: 'Adelaide' }
  ],
  nav: [
    { label: 'Adelaide', href: '/ai-and-programming-classes-in-adelaide' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Mitcham, Adelaide',
  title: 'AI and Programming Classes in Mitcham, Adelaide',
  description: 'Live online AI and programming classes across the City of Mitcham, ages 6 to 67, with machine learning on real Adelaide data, in groups or one to one.',
  ogDescription: 'Mitcham AI project: 462 stop records, one feature, and a decision boundary at about 8.45 Wednesday visits that separates Saturday service from none.',
  twitterDescription: 'AI and programming for the City of Mitcham, live online.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '14 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Mitcham',
    description: 'Level-matched online AI, machine learning and programming lessons for children, teenagers and adults across the City of Mitcham, Adelaide, taught live in English.'
  },
  h1: 'AI and programming classes in Mitcham',
  capsuleQ: 'What can Mitcham learners understand about AI through these classes?',
  capsule: 'How a classifier actually decides: where its decision boundary sits, why mistakes cluster near it, and how to read a model as a rule. Children begin with Scratch at six; teenagers and adults build models in Python. The City of Mitcham had 67,617 residents in 2021.',
  lead: 'Some stop records in the City of Mitcham see buses on Saturdays; a few do not. A simple model, given only how many buses call on a Wednesday, learns a dividing line. Below it, the model says no Saturday service; above it, yes. That line is the decision boundary, and here it sits at about eight and a half visits.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Mitcham.',
  picks: {
    eyebrow: 'Course picks for Mitcham',
    h2: 'Courses that open up how models decide',
    intro: 'The Saturday-service model needs Python, numpy and the idea of a classifier. These courses teach each part; a free trial chooses the level.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Classifiers built by hand, with their boundaries drawn and explained.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Machine learning from logistic regression to evaluated models.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python and numpy on public datasets.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First AI projects with simple yes-or-no rules.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Mitcham in the Census',
      h2: 'Graduates, rail commuters and the foothills',
      intro: 'Council-wide 2021 Census QuickStats for the City of Mitcham (ABS code LGA44340), with South Australia beside it.',
      body: [
        {
          kind: 'table',
          caption: 'City of Mitcham, 2021',
          head: ['Measure', 'City of Mitcham'],
          rows: [
            ['Residents', '67,617'],
            ['Median age', '42'],
            ['Families', '18,715'],
            ['Private dwellings', '27,143'],
            ['People per household', '2.6']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Mitcham against the state',
          head: ['Indicator', 'Mitcham', 'South Australia'],
          rows: [
            ['Adults with a bachelor degree or higher', '40.0% (22,368)', '22.7%'],
            ['Employed people in professional jobs', '34.6% (11,842)', '21.5%'],
            ['Workers who took the train to work', '1.7% (580)', '0.6%'],
            ['Employed residents working from home', '13.8% (4,728)', '9.6%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'School ages', p: 'Mitcham had 4,032 residents aged 5 to 9, 4,342 aged 10 to 14 and 4,299 aged 15 to 19.' },
            { h3: 'University', p: '25.2% of residents in education, 5,111 people, attended university, against 16.7% across South Australia.' },
            { h3: 'Size', p: 'The council covers about 75.5 square kilometres in Adelaide\'s south.' }
          ]
        },
        { kind: 'p', text: 'Census counts include the bureau\'s small privacy adjustments, so we show them exactly and never sum them.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Where the model changes its mind',
      intro: 'For each of the 462 stop records inside the City of Mitcham we counted scheduled visits on Wednesday 21 October 2026 and checked whether any service ran on Saturday 24 October. A logistic regression on the logarithm of the Wednesday count learned to predict Saturday service.',
      body: [
        {
          kind: 'table',
          caption: 'The fitted model (our calculation)',
          head: ['Measure', 'Value'],
          rows: [
            ['Stop records with Saturday service', '403 of 462'],
            ['Always guessing "yes, Saturday service"', '87.2% correct'],
            ['Model accuracy', '95.7%'],
            ['Decision boundary', 'About 8.45 Wednesday visits'],
            ['Wrong "yes" predictions', '18'],
            ['Wrong "no" predictions', '2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Share of stop records with Saturday service, by Wednesday visits (our calculation)',
          head: ['Wednesday visits', 'Stop records', 'With Saturday service'],
          rows: [
            ['Fewer than 10', '56', '26.8%'],
            ['10 to 19', '86', '84.9%'],
            ['20 to 39', '138', '97.1%'],
            ['40 to 79', '117', '99.1%'],
            ['80 or more', '65', '100%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'One feature, one point',
              p: 'With a single input, the boundary is a single number: the visit count where the model\'s probability crosses one half. Here that is about 8.45.'
            },
            {
              h3: 'Mistakes live nearby',
              p: 'Of the 18 wrong "yes" answers, 13 sit just above the line at 12 to 14 Wednesday visits; the 2 wrong "no" answers sit just below it, at 8.'
            },
            {
              h3: 'Same as a rule',
              p: 'A plain rule, "9 or more Wednesday visits means Saturday service", scores exactly the same 95.7%. The model has learned a threshold, and saying so is honest.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Reading the boundary',
          p: 'Every classifier has a decision boundary, a line or surface where its prediction flips. With one feature it is a point; with two, a line on a chart; with many, a surface nobody can draw. Finding it, even roughly, is the fastest way to understand what a model really does.'
        },
        {
          kind: 'p',
          text: 'Adelaide Metro\'s open timetable, release 1708, supplies the visits; we chose which stops count as Mitcham by testing each against the council outline, then fitted the model and worked out every percentage in numpy. A stop record counts as having Saturday service if at least one visit is timetabled on 24 October 2026.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Machine learning ideas',
      h2: 'From weights to a boundary',
      intro: 'A logistic regression predicts yes when its weighted sum is above zero. Solving for zero gives the boundary.',
      body: [
        {
          kind: 'table',
          caption: 'Boundaries in different models',
          head: ['Model', 'Shape of boundary', 'With Mitcham\'s one feature'],
          rows: [
            ['Logistic regression', 'Straight line or flat surface', 'A single threshold'],
            ['Decision tree', 'Steps along each feature', 'Also a threshold'],
            ['k-nearest neighbours', 'Wiggly, follows the data', 'Can flip back and forth'],
            ['Neural network', 'Any smooth shape', 'Usually unnecessary here']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Sort pictures of animals into "big" and "small" and draw where the line between them falls.' },
            { h3: 'Secondary learners', p: 'Fit the Mitcham model, solve for the boundary, and check which stop records sit nearest to it.' },
            { h3: 'Adults', p: 'Ask where the decision boundary sits for any yes-or-no model at work, and who sits close to it.' }
          ]
        },
        {
          kind: 'p',
          text: 'When a simple rule matches a model\'s accuracy, prefer the rule or at least report it. Knowing the boundary makes that comparison possible.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Mitcham',
      h2: 'Eleven railway stations and a university drive',
      intro: 'Council-wide timetable markers for Wednesday 21 October 2026.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Rail',
              p: 'Eleven railway station records lie inside the council by our check, from Mitcham and Torrens Park to Belair and Flinders, with 958 scheduled train visits.'
            },
            { h3: 'Busiest records', p: 'Stops 26A and 26B on University Drive (west side) had 253 scheduled visits each.' },
            { h3: 'Routes', p: '112 routes served the council that Wednesday, with 20,043 visits in all.' }
          ]
        },
        {
          kind: 'spec',
          title: 'City of Mitcham, Adelaide',
          p: 'Figures cover the whole City of Mitcham in Adelaide, not the Melbourne suburb of the same name. Neighbouring councils are Unley, Burnside, Marion, Onkaparinga and Adelaide Hills.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting pictures to reading models',
    intro: 'Ages are only indicative; a trial lesson places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Yes-or-no rules in games and puzzles.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI ideas',
        p: 'First code and simple classifiers.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Machine learning',
        p: 'Building classifiers and finding their boundaries.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied machine learning',
        p: 'Interpretable models for study and work.',
        courses: ['ai-ml-masterclass-complete-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can train the classifier. Can it tell you it is a threshold?',
    intro: 'Only if asked. Tools report accuracy far more readily than they explain what a model learned.',
    p1: 'Hand the Mitcham data to an assistant and it may report a 95.7% accurate model with a confident summary. What it may not say is that the whole model amounts to "nine or more Wednesday visits", a rule anyone could apply by hand.',
    p2: 'Learners who find the boundary themselves ask that question of every model: where does it switch, and is it more than a threshold? That is how AI results turn into understanding.',
    closer: 'In Mitcham, the learner who finds the boundary understands the model, not just its score.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Mitcham lessons live online',
    intro: 'Every class is taught over video; there is nowhere to travel.',
    cells: [
      { h3: 'Plots on screen', p: 'Models and their boundaries are drawn and discussed together.' },
      { h3: 'School-term plans', p: 'Lessons pause in South Australian school holidays.' },
      { h3: 'Free trial', p: 'A full first lesson free, with a recommendation in writing.' },
      { h3: 'Groups by level', p: 'Five to ten learners at one stage, or one to one.' },
      { h3: 'Two lessons a week', p: 'Steady weekly times, about eight a month.' },
      { h3: 'Teaching from India', p: 'Our tutors work in India; a Mitcham class at 7:30pm runs at 2:30pm there over summer and 3:30pm once April arrives.' }
    ],
    spec: {
      title: 'Clock changes',
      p: 'Adelaide moves to daylight saving on the first Sunday in October and back on the first Sunday in April (IANA time zone database). India does not change, so the difference is five or four hours.'
    }
  },
  fees: {
    h2: 'Mitcham class fees',
    intro: 'Three prices for all learners.',
    first: 'The opening lesson is free and finishes with a written plan.',
    group: 'Close to eight group lessons a month with five to ten learners.',
    private: 'Close to eight private lessons a month.',
    closer: 'Mitcham families pay in US dollars, only after the trial has fixed a course and a time. Holiday and absence rules are on the pricing page.'
  },
  reviewsH2: 'Reviews on Google, from Mitcham and further afield',
  book: {
    h2: 'Book a free Mitcham class',
    intro: 'Give us an idea of age and interests. Secondary students might fit the Saturday-service model; primary children might build a Scratch sorting rule.',
    success: 'Thank you. We will contact you soon about a Mitcham class.'
  },
  faq: {
    h2: 'Mitcham AI and programming questions',
    intro: 'Questions asked across the City of Mitcham.',
    items: [
      {
        q: 'What is the population of the City of Mitcham?',
        a: 'The 2021 Census QuickStats count 67,617 residents in the City of Mitcham, with 18,715 families and a median age of 42.'
      },
      {
        q: 'What is a decision boundary?',
        a: 'The point, line or surface where a classifier\'s prediction changes from one class to another. Inputs on one side get one answer, inputs on the other side the other.'
      },
      {
        q: 'How do you find the decision boundary of a logistic regression?',
        a: 'Set the model\'s weighted sum of inputs to zero, where the predicted probability is one half, and solve for the inputs.'
      },
      {
        q: 'What did the Mitcham model learn?',
        a: 'It predicts Saturday service for stop records with more than about 8.45 Wednesday visits, reaching 95.7% accuracy against 87.2% for always predicting yes.'
      },
      {
        q: 'Is AI too advanced for a primary-school child?',
        a: 'No. Young children meet the ideas through Scratch games about sorting and rules, and real classifiers in Python usually follow in the early teens.'
      },
      {
        q: 'Will a Mitcham teenager use Claude?',
        a: 'No. Our Claude material is restricted to adults of 18 and older, and secondary students learn with other AI tools.'
      },
      {
        q: 'Is there a classroom in Mitcham?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Mitcham learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Is Copilot Studio on the Mitcham group timetable?', a: 'No. We run Copilot Studio as private tuition; our groups program their agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Adelaide and South Australia',
    h2: 'More for Mitcham learners',
    html: 'Read <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">the Adelaide page</a> for the whole city, or <a class="cg-inline-link" href="/coding-classes-for-kids-adelaide">Adelaide kids\' coding</a> for children. Neighbouring suburbs <a class="cg-inline-link" href="/ai-and-programming-classes-in-unley-adelaide">Unley</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-marion-adelaide">Marion</a> each have a page, as does <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">South Australia</a> as a whole.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Mitcham and Adelaide',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/ai-and-programming-classes-in-unley-adelaide', label: 'Unley' },
    { href: '/ai-and-programming-classes-in-marion-adelaide', label: 'Marion' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' }
  ],
  personalityCss: `
.cg-root.cg-mtcm .cg-hero-grid { align-items: end; gap: clamp(1.13rem, 3.2vw, 2.6rem); }
.cg-root.cg-mtcm .cg-hero h1 { font-weight: 674; letter-spacing: -0.018em; line-height: 1.06; }
.cg-root.cg-mtcm .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.71rem 0 0.71rem 1.21rem; }
.cg-root.cg-mtcm .cg-eyebrow { letter-spacing: 0.134em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-mtcm .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.012em; }
.cg-root.cg-mtcm .cg-grid-3 { gap: clamp(0.87rem, 2.24vw, 1.71rem); }
.cg-root.cg-mtcm .cg-table caption { font-style: italic; font-weight: 603; text-align: left; }
.cg-root.cg-mtcm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mtcm .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.81rem; }
.cg-root.cg-mtcm .cg-callout { border-left-width: 3px; border-radius: 5px; }
`,
  dossier: {
    curriculumAuthority: 'City of Mitcham (LGA44340). ABS Census 2021 QuickStats (read 12 October 2026): 67,617 people; median age 42; 18,715 families; 27,143 private dwellings; 2.6 per household; bachelor or higher 22,368 (40.0%, SA 22.7%); professionals 11,842 (34.6%, SA 21.5%); train 580 (1.7%, SA 0.6%); worked at home 4,728 (13.8%, SA 9.6%); university 5,111 (25.2%, SA 16.7%); aged 5-9 4,032; 10-14 4,342; 15-19 4,299. ABS LGA area 75.5468 sq km. Adelaide Metro GTFS v1708: 462 stop records inside the LGA polygon; Wednesday 21 Oct 2026 20043 visits (bus 18322, train 958, school 712 758, regional 701 5), 112 routes; 11 railway station records (Belair, Blackwood, Coromandel, Eden Hills, Flinders, Glenalta, Lynton, Mitcham, Pinera, Torrens Park, Unley Park); Stops 26A and 26B University Dr West side 253 each. Neighbouring LGAs (ABS touches): Adelaide Hills, Burnside, Marion, Onkaparinga, Unley.',
    localProject: 'Decision boundary. 462 Mitcham stop records; x = log1p(Wednesday 21 Oct visits), standardised; y = any visit Saturday 24 Oct (403 yes). Logistic regression by gradient descent (lr 0.5, 20,000 steps): w0 4.397, w1 3.694; boundary at 8.45 visits; accuracy 95.67% vs majority 87.23%; 18 false positives, 2 false negatives; best threshold rule (>= 9) also 95.67%. Bins: <10 56 records 26.8%; 10-19 86 84.9%; 20-39 138 97.1%; 40-79 117 99.1%; 80+ 65 100%.',
    requiredMentions: ['67,617', '27,143', '4,299', 'University Drive', 'Torrens Park', 'Belair', '8.45', '403 of 462', 'decision boundary'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Mitcham local government area (LGA44340), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA44340'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Local Government Area and Suburbs and Localities boundary services, used for our point-in-boundary and intersection checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Department for Infrastructure and Transport (South Australia), Adelaide Metro General Transit Feed, version 1708 (valid 9 October 2026 to 9 April 2027), Creative Commons Attribution 3.0 Australia per its data.gov.au listing; downloaded 13 October 2026.',
        url: 'https://data.gov.au/data/dataset/https-gtfs-adelaidemetro-com-au'
      },
      {
        claim: 'scikit-learn documentation, Logistic regression (linear models): predicted probability from a linear function of the inputs.',
        url: 'https://scikit-learn.org/stable/modules/linear_model.html'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Adelaide, rule AS, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'That busy weekday stops cause weekend service: not claimed; the model only describes the timetable.',
      'Mitcham in Melbourne: not covered; this page is the City of Mitcham in Adelaide.',
      'Passenger numbers: not claimed.',
      'School term dates: not given; official SA term-date pages refused automated access (HTTP 403).',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Mitcham or Adelaide Metro.'
    ]
  }
};
