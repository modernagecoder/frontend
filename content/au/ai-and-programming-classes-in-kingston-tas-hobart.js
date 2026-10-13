'use strict';
// Kingston, Hobart (cg- district page, Australia cluster Phase 8, row 342). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page (ABS SAL60307, Kingston (Tas.), Kingborough Council) under Hobart and
// Tasmania. Slug carries "tas"; the separate page ai-and-programming-classes-in-kingston-melbourne is a different place
// and none of its figures are used.
// Spine: a logistic regression predicting unsealed road segments (2,432 LIST segments) fitted by gradient descent with
// different stopping rules: tol 1e-2 stops after 7 steps (73.5%); 1e-4 after 293 (84.8%); 1e-6 after 1,879 (84.4%);
// 1e-8 after 14,899 while the vehicular-track weight keeps growing (perfect separation); a 50-step cap gives 80.3%.
// Lesson family: stopping criteria for iterative fitting; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'KINGSTON',
    label: 'Kingston, Tasmania',
    blurb: 'AI and programming classes for Kingston, Tasmania, where the rule for when a model stops training decides whether it learns anything.'
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
  slug: 'ai-and-programming-classes-in-kingston-tas-hobart',
  code: 'kgtn',
  accent: '#4A651A',
  accentRationale: 'Kingston: a bush olive (hue 81.6), 5.38:1 on #EDE7DA; 31.3 RGB from the nearest Tasmanian accent, 12.1 from any other Australian accent and 7.1 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Kingston',
    eyebrow: 'Kingston, Kingborough, Tasmania',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Kingston' },
      { type: 'AdministrativeArea', name: 'Kingborough Council' },
      { type: 'City', name: 'Hobart' },
      { type: 'AdministrativeArea', name: 'Tasmania' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-tasmania', name: 'Tasmania' },
    { slug: 'best-coding-classes-in-hobart', name: 'Hobart' }
  ],
  nav: [
    { label: 'Hobart', href: '/best-coding-classes-in-hobart' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Kingston, Tasmania',
  title: 'AI and Programming Classes in Kingston, Tasmania',
  description: 'Live online AI and programming classes in Kingston, Tasmania, for children, teens and adults, with machine learning on real Tasmanian data, in groups or one to one.',
  ogDescription: 'Kingston AI project: 2,432 road segments, one model, and four stopping rules that end training after 7, 293, 1,879 or 14,899 steps.',
  twitterDescription: 'AI and programming for Kingston, Tasmania, live online.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '14 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Kingston, Tasmania',
    description: 'Level-matched online AI, machine learning and programming lessons for children, teenagers and adults in Kingston, Tasmania, taught live in English.'
  },
  h1: 'AI and programming classes in Kingston',
  capsuleQ: 'What do Kingston learners gain from AI and programming classes?',
  capsule: 'They see how models are really trained, including small choices such as when to stop training that change the results more than most people expect. Learning begins in Scratch at six and moves to model-building in Python for older students and adults. Kingston had 12,288 residents in 2021.',
  lead: 'Training a model is a loop: adjust, measure, repeat. Something has to say when to stop. On Kingston\'s 2,432 road segments, one stopping rule ended training after 7 steps with a model barely better than guessing; another ran for 14,899 steps chasing a number that can never settle.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Kingston, Tasmania.',
  picks: {
    eyebrow: 'Course picks for Kingston',
    h2: 'Courses that open up model training',
    intro: 'The road-surface model needs Python, numpy and a feel for optimisation. These courses build those skills; a free trial lesson sets the level.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Models trained by hand, loop by loop, with every setting explained.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Optimisation, convergence and evaluation for real projects.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'numpy and public data, from loading to modelling.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First AI projects that learn by trial and error.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Kingston in the Census',
      h2: 'A growing family suburb south of Hobart',
      intro: 'Census 2021 QuickStats for the suburb of Kingston, Tasmania (ABS code SAL60307), next to the Tasmanian figure.',
      body: [
        {
          kind: 'table',
          caption: 'Kingston, Tasmania in 2021',
          head: ['Measure', 'Kingston'],
          rows: [
            ['Residents', '12,288'],
            ['Median age', '36'],
            ['Families', '3,332'],
            ['Private dwellings', '5,114'],
            ['People per household', '2.5']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Kingston compared with Tasmania',
          head: ['Indicator', 'Kingston', 'Tasmania'],
          rows: [
            ['Adults with a bachelor degree or higher', '33.1% (3,356)', '21.9%'],
            ['Separate houses', '89.1% (4,237)', '87.7%'],
            ['Workers who took a bus to work', '5.7% (337)', '2.5%'],
            ['Employed people in professional jobs', '24.4% (1,457)', '20.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Young children', p: 'Kingston counted 716 children under five and 737 aged 5 to 9.' },
            { h3: 'Older children', p: 'There were 719 residents aged 10 to 14 and 683 aged 15 to 19.' },
            { h3: 'Area', p: 'The ABS suburb boundary covers about 37 square kilometres in Kingborough.' }
          ]
        },
        { kind: 'p', text: 'Figures are exactly as published by the ABS, whose privacy adjustments to small cells mean we never add them together.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'When should training stop?',
      intro: 'The task: predict whether each of the 2,432 road segments in the LIST transport layer for Kingston is unsealed, from its length and road class. 710 are not sealed. We fitted a logistic regression by gradient descent and stopped it with different rules.',
      body: [
        {
          kind: 'table',
          caption: 'Four stopping rules, one model (our calculation)',
          head: ['Stop when the loss changes by less than', 'Steps taken', 'Accuracy'],
          rows: [
            ['0.01', '7', '73.5%'],
            ['0.0001', '293', '84.8%'],
            ['0.000001', '1,879', '84.4%'],
            ['0.00000001', '14,899', '84.4%'],
            ['A fixed cap of 50 steps', '50', '80.3%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Too loose',
              p: 'At 0.01 the loss is still far above where it ends up, yet one step moves it by less than 0.01, so training halts at step 7, only 2.7 points above always guessing "sealed".'
            },
            { h3: 'About right', p: 'A tolerance of 0.0001 reaches 84.8% in 293 steps. Tighter tolerances add thousands of steps without improving accuracy.' },
            {
              h3: 'Chasing infinity',
              p: 'All 190 vehicular tracks are unsealed, so the model can always gain a little by growing that weight. It reached 9.1 and was still climbing when training stopped.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Two safeguards together',
          p: 'Good training loops use both a tolerance and a maximum number of steps, and report which one stopped them. A model stopped by its cap may not have finished; a model stopped by a loose tolerance may have finished too early. Checking accuracy on held-out data answers both doubts.'
        },
        {
          kind: 'p',
          text: 'Road segments are LIST open data, State of Tasmania; segments crossing the suburb boundary are included whole. The model, its tolerances and every accuracy figure are our calculation with numpy, using a learning rate of 0.5 on standardised log length plus two road-class flags.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Training loops',
      h2: 'Stopping rules in practice',
      intro: 'Every iterative method, from logistic regression to neural networks, needs a reason to stop.',
      body: [
        {
          kind: 'table',
          caption: 'Common stopping criteria',
          head: ['Criterion', 'Stops when', 'Risk'],
          rows: [
            ['Loss tolerance', 'Improvement per step falls below a threshold', 'Too loose stops early'],
            ['Maximum iterations', 'A fixed step count is reached', 'May stop before converging'],
            ['Gradient size', 'The slope is almost flat', 'Tiny gradients on separable data'],
            ['Validation loss', 'Held-out loss stops improving', 'Needs a validation split']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Play hot and cold to find a hidden object and agree beforehand when "close enough" is close enough.' },
            { h3: 'Secondary learners', p: 'Write the gradient descent loop for the Kingston data, print the step count, and try each tolerance.' },
            { h3: 'Adults', p: 'Check the convergence warnings and iteration settings in any model library you use at work.' }
          ]
        },
        {
          kind: 'p',
          text: 'scikit-learn reports a ConvergenceWarning when a solver hits its iteration cap first. Reading that warning, instead of silencing it, is part of the habit we teach.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Kingston',
      h2: 'Channel Highway and the Southern Outlet',
      intro: 'Local markers from the LIST open data and the Tasmanian school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Road network',
              p: 'The LIST records 2,432 road segments touching Kingston, totalling 279.0 km by their recorded lengths: 1,722 sealed, 666 unsealed and 44 marked 4WD.'
            },
            { h3: 'Busiest names', p: 'Channel Highway accounts for 86 segments and Summerleas Road 80, the most of any named roads in the suburb data.' },
            { h3: 'Term 1, 2027', p: 'Tasmanian government schools run Term 1 of 2027 from 4 February to 9 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Kingston, Tasmania',
          p: 'This page is about the suburb of Kingston in Kingborough, Tasmania, not the City of Kingston in Melbourne. Kingston Beach, Blackmans Bay, Huntingfield, Taroona and other neighbours are separate suburbs with their own figures.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From hot and cold to training loops',
    intro: 'Ages here are approximate; the first lesson places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Games that try, check and try again.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI ideas',
        p: 'Loops and simple learning programs.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Machine learning',
        p: 'Training loops, tolerances and evaluation.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied machine learning',
        p: 'Optimisation and model checks for work.',
        courses: ['ai-ml-masterclass-complete-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI libraries pick a stopping rule. Do you know which?',
    intro: 'Defaults decide a lot, and most people never look at them.',
    p1: 'Ask an assistant to fit a classifier and it will call a library with default settings. Those defaults include a tolerance and an iteration cap that suit typical data. On data like Kingston\'s, where one road class is perfectly unsealed, the defaults can produce warnings, huge weights or an early stop.',
    p2: 'Learners who have written the loop themselves read those settings and warnings instead of ignoring them. That habit turns a model that merely ran into a model that was trained properly.',
    closer: 'In Kingston, the learner who knows why training stopped can trust what the model learned.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Kingston lessons online',
    intro: 'Lessons are taught live on video, so there is no trip into Hobart.',
    cells: [
      { h3: 'Loops on screen', p: 'Training runs are watched step by step with the teacher.' },
      { h3: 'Tasmanian terms', p: 'Plans follow the state school year, with holiday breaks.' },
      { h3: 'Free trial', p: 'A complete first lesson free, then a written suggestion.' },
      { h3: 'Who learns together', p: 'Classmates are matched by stage, five to ten at a time, unless private lessons suit better.' },
      { h3: 'Rhythm', p: 'The same two weekly slots, which come to roughly eight lessons monthly.' },
      { h3: 'Tutors abroad', p: 'Teaching comes from India, where a 6pm Kingston class falls at 12:30pm in summer and 1:30pm after the April clock change.' }
    ],
    spec: {
      title: 'Tasmania and India',
      p: 'Tasmania observes daylight saving from the first Sunday in October to the first Sunday in April (IANA time zone database); India does not, so the difference is five and a half or four and a half hours.'
    }
  },
  fees: {
    h2: 'Kingston class fees',
    intro: 'Three prices for everyone.',
    first: 'Lesson one is free, with written advice.',
    group: 'Group lessons: about eight a month, fifteen to twenty learners.',
    private: 'Private lessons: about eight a month with one teacher.',
    closer: 'Kingston families pay in US dollars after the trial, once course and timing are agreed. Holidays and absences are explained on the pricing page.'
  },
  reviewsH2: 'Google reviews from learners in many places',
  book: {
    h2: 'Book a free Kingston class',
    intro: 'A quick note on age and interests helps. A secondary student could compare the four stopping rules, and a primary child could program a Scratch hot-and-cold game.',
    success: 'Thank you. We will contact you soon about a Kingston class.'
  },
  faq: {
    h2: 'Kingston AI and programming questions',
    intro: 'Questions Kingston families and adult learners ask.',
    items: [
      {
        q: 'How many people live in Kingston, Tasmania?',
        a: 'Kingston, the Kingborough suburb, had 12,288 people at the 2021 Census, 3,332 families among them, with half the population aged 36 or under.'
      },
      {
        q: 'What is a stopping criterion in machine learning?',
        a: 'A rule that ends an iterative training process, such as stopping when the loss improves by less than a tolerance or after a maximum number of steps.'
      },
      {
        q: 'Why can model weights keep growing during training?',
        a: 'When a feature separates the classes perfectly, the loss keeps shrinking as its weight grows, so the weight never settles. Regularisation or a step cap stops it.'
      },
      {
        q: 'What did the Kingston experiment show?',
        a: 'A loose tolerance stopped training after 7 steps at 73.5% accuracy; a tolerance of 0.0001 reached 84.8% in 293 steps, and tighter tolerances ran for thousands more steps without gaining accuracy.'
      },
      {
        q: 'Is a primary-school child too young for AI lessons?',
        a: 'No. Young learners explore how computers learn through Scratch games, and fitting real models in Python generally comes in the early teens.'
      },
      {
        q: 'Will a Kingston teenager work with Claude?',
        a: 'No. Claude is reserved for our adult courses, from 18 up, and teenagers use a different set of AI tools.'
      },
      {
        q: 'Is there a classroom in Kingston?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Kingston learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Does group study in Kingston include Copilot Studio?', a: 'No. Copilot Studio sessions are private; group learners write their agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Hobart and Tasmania',
    h2: 'More for Kingston learners',
    html: 'Read <a class="cg-inline-link" href="/best-coding-classes-in-hobart">the Hobart page</a> for Greater Hobart, or <a class="cg-inline-link" href="/coding-and-ai-classes-in-tasmania">the Tasmania guide</a> for the state. On the north-west coast, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-burnie">Burnie</a> has its own page.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Kingston and Hobart',
  footerPlaces: [
    { href: '/best-coding-classes-in-hobart', label: 'Hobart' },
    { href: '/vibe-coding-and-ai-agents-classes-in-burnie', label: 'Burnie' },
    { href: '/best-coding-classes-in-launceston', label: 'Launceston' },
    { href: '/coding-and-ai-classes-in-tasmania', label: 'Tasmania' }
  ],
  personalityCss: `
.cg-root.cg-kgtn .cg-hero-grid { align-items: start; gap: clamp(1.01rem, 2.99vw, 2.45rem); }
.cg-root.cg-kgtn .cg-hero h1 { font-weight: 647; letter-spacing: -0.021em; line-height: 1.07; }
.cg-root.cg-kgtn .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.69rem 0 0.69rem 1.13rem; }
.cg-root.cg-kgtn .cg-eyebrow { letter-spacing: 0.114em; font-weight: 700; font-size: 0.84rem; text-transform: uppercase; }
.cg-root.cg-kgtn .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.015em; }
.cg-root.cg-kgtn .cg-grid-3 { gap: clamp(0.78rem, 2.06vw, 1.61rem); }
.cg-root.cg-kgtn .cg-table caption { font-weight: 669; text-align: left; }
.cg-root.cg-kgtn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kgtn .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.01rem; }
.cg-root.cg-kgtn .cg-callout { border-left-width: 7px; border-radius: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Kingston (SAL60307, Kingston (Tas.)), Kingborough (ABS LGA point query). ABS Census 2021 QuickStats (read 12 October 2026): 12,288 people; median age 36; 3,332 families; 5,114 private dwellings; 2.5 per household; bachelor or higher 3,356 (33.1%, Tas 21.9%); separate houses 4,237 (89.1%, Tas 87.7%); bus 337 (5.7%, Tas 2.5%); professionals 1,457 (24.4%, Tas 20.0%); aged 0-4 716; 5-9 737; 10-14 719; 15-19 683. ABS SAL area 37.2153 sq km. LIST Transport Segments intersecting: 2,432 (279.0 km); class Access 942, Local 880, Vehicular Track 190, Arterial 159, National/State Highway 144, Collector 112, Sub Arterial 5; surface Sealed 1,722, Unsealed 666, 4WD 44; Channel Highway 86 segments, Summerleas Road 80. Neighbours (ABS touches): Blackmans Bay, Bonnet Hill, Fern Tree, Huntingfield, Kingston Beach, Leslie Vale, Margate, Mount Nelson, Neika, Ridgeway, Taroona. Tas 2027 Term 1 4 February to 9 April. Kingston (Melbourne) page figures not used.',
    localProject: 'Stopping criteria. y = SURFACE_TY not Sealed (710 of 2,432; majority 70.81%). X = [1, standardised log10 COMP_LEN, Vehicular Track flag, Access Road flag]. Batch gradient descent, lr 0.5, stop when |loss change| < tol: tol 1e-2 -> 7 steps, loss 0.59427, acc 73.48%; 1e-4 -> 293, 0.37916, 84.83%; 1e-6 -> 1,879, 0.35982, 84.42%; 1e-8 -> 14,899, 0.35848, 84.38%, track weight 9.10; cap 50 -> 0.47749, 80.30%. All 190 vehicular tracks unsealed or 4WD.',
    requiredMentions: ['12,288', '5,114', '716', 'Summerleas Road', 'Channel Highway', '14,899', '1,879', 'Kingston Beach', 'Huntingfield'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Kingston (Tas.) suburb and locality (SAL60307), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL60307'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Local Government Area and Suburbs and Localities boundary services, used for our point-in-boundary and intersection checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'the LIST, State of Tasmania, Transport Segments (All Transport layer), Creative Commons Attribution 3.0 Australia; queried from the LIST map service on 13 and 14 October 2026.',
        url: 'https://services.thelist.tas.gov.au/arcgis/rest/services/Public/TopographyAndRelief/MapServer/8'
      },
      {
        claim: 'scikit-learn documentation, LogisticRegression: tol (tolerance for stopping criteria) and max_iter (maximum number of iterations) parameters.',
        url: 'https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html'
      },
      {
        claim: 'Tasmanian Department for Education, Children and Young People, 2027 school term dates for school and college students.',
        url: 'https://www.decyp.tas.gov.au/learning/term-dates/'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Hobart, rule AT, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Figures from the Kingston (Melbourne) page: not used; that is a different place.',
      'That road length causes sealing: not claimed; the model only describes the LIST records.',
      'Exact road length inside the suburb: not claimed; crossing segments are counted whole.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Kingborough Council or the LIST.'
    ]
  }
};
