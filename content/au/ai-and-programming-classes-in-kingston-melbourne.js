'use strict';
// Kingston, Melbourne (cg- district page, Australia cluster Phase 8, row 266). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), council-area page (ABS LGA23430, City of Kingston, Victoria) under Melbourne and Victoria.
// Spine: which stations are as busy on Saturday as on a normal weekday? Only 15 of 197 are, so a plain logistic regression
// scores 93.4% while finding 2 of them; balanced class weights find 9 at the cost of 42 false alarms.
// Script: scratchpad au/b8/kgsv.py. Lesson family: class weights for an imbalanced rare class; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'KINGSTON',
    label: 'Kingston, Melbourne',
    blurb: 'AI and programming classes for the City of Kingston, with a machine learning project on rare cases and class weights.'
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
  slug: 'ai-and-programming-classes-in-kingston-melbourne',
  code: 'kgsv',
  accent: '#162690',
  accentRationale: 'Kingston: a strong cobalt blue (hue 232) chosen by hand at least 10 RGB units from 1,456 accent declarations in content, the shared stylesheets and the claims log, 12.3:1 on white and 9.9:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Kingston',
    eyebrow: 'City of Kingston, Melbourne, Victoria',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Kingston' },
      { type: 'City', name: 'Melbourne' },
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' },
    { slug: 'vibe-coding-and-ai-agents-classes-in-melbourne', name: 'Melbourne' }
  ],
  nav: [
    { label: 'Melbourne', href: '/vibe-coding-and-ai-agents-classes-in-melbourne' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Kingston, Melbourne',
  title: 'AI and Programming Classes in Kingston, Melbourne',
  description: 'Live online AI and programming classes for Kingston learners: Scratch, Python, data science and machine learning, in groups or one to one, first lesson free.',
  ogDescription: 'A Kingston machine learning project: 15 Saturday-busy stations among 197, a model that is 93.4% accurate and still misses 13 of them.',
  twitterDescription: 'Kingston AI and programming classes, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Kingston',
    description: 'Level-matched AI, machine learning and programming lessons for children, teenagers and adults in the City of Kingston, Melbourne, taught live online in English.'
  },
  h1: 'AI and programming classes in Kingston',
  capsuleQ: 'Why does a Kingston machine learning class care about rare cases?',
  capsule: 'Because accuracy hides them. In our Kingston project only 15 of 197 Melbourne stations are as busy on Saturday as on a weekday. A plain model scores 93.4% and finds two of them; weighting the rare class finds nine but raises 42 false alarms. Choosing between them is the real skill.',
  lead: 'Southland station is unusual. In FY24-25 it averaged more entries on a Saturday than on a normal weekday, something only four of the 197 stations with at least 500 weekday entries managed. Teaching a model to recognise that pattern from weekday travel times is a perfect lesson in imbalanced data, because the easy answer, "never Saturday-busy", is already right 92.4% of the time.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Kingston.',
  picks: {
    eyebrow: 'Course picks for Kingston',
    h2: 'Machine learning and programming courses',
    intro: 'Each course here gets learners evaluating models honestly, not just training them. The free lesson shows which suits.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning with Python, including precision, recall and imbalanced data.' },
      {
        course: 'orange-data-mining-visual-machine-learning-course-for-teens',
        band: 'Ages 13 to 17',
        note: 'Visual machine learning with Orange before writing code.'
      },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'Data science from cleaning to modelling and evaluation.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'A complete machine learning course for study and work.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Kingston in the Census',
      h2: 'A higher share of apartments than Victoria',
      intro: 'Totals for the City of Kingston (ABS LGA23430), read from 2021 Census QuickStats on 10 October 2026. This is the Victorian council, not any other Kingston.',
      body: [
        {
          kind: 'table',
          caption: 'City of Kingston, Census 2021',
          head: ['Item', 'Kingston'],
          rows: [
            ['Usual residents', '158,129'],
            ['Median age (years)', '41'],
            ['Families counted', '43,676'],
            ['Private dwellings', '67,560'],
            ['People per household', '2.5'],
            ['Motor vehicles per dwelling', '1.8']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Kingston percentages next to Victoria',
          head: ['Measure', 'Kingston', 'Victoria'],
          rows: [
            ['Separate houses', '58.8% (35,855)', '73.4%'],
            ['Flats or apartments', '15.0% (9,155)', '12.1%'],
            ['Bachelor degree or above', '31.1% (40,750)', '29.2%'],
            ['Professionals', '26.5% (21,568)', '25.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Aged 5 to 9', p: '9,279 Kingston residents, 5.9%, were in this age band.' },
            { h3: 'Aged 0 to 4', p: 'There were 8,611 under-fives, or 5.4% of the population.' },
            {
              h3: 'Census in lockdown',
              p: 'With Melbourne in lockdown on Census night, 30.0% of Kingston workers (24,383) worked from home; that share reflects the restrictions.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'QuickStats percentages are rounded and small counts are randomly adjusted by the bureau to protect privacy. We use each published value as it stands and never add categories up.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Finding Saturday stations',
      intro: 'From the FY24-25 entries file we kept the 197 stations averaging at least 500 entries on a normal weekday. We labelled a station "Saturday-busy" if its Saturday average reached 80% of its weekday average: 15 do. Each station\'s features are the shares of its weekday entries in the file\'s five time bands. We trained logistic regression and tested every station while leaving it out of training.',
      body: [
        {
          kind: 'table',
          caption: 'Leave-one-out results over 197 stations (our calculation)',
          head: ['Model', 'Accuracy', 'Saturday-busy found', 'False alarms'],
          rows: [
            ['Always say "no"', '92.4%', '0 of 15', '0'],
            ['Logistic regression, plain', '93.4%', '2 of 15', '0'],
            ['Logistic regression, balanced weights', '75.6%', '9 of 15', '42']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The eleven modelled Kingston stations',
          head: ['Station', 'Saturday-busy?', 'Plain score', 'Weighted score'],
          rows: [
            ['Southland', 'yes', '0.34', '0.95'],
            ['Mordialloc', 'yes', '0.06', '0.44'],
            ['Carrum', 'yes', '0.04', '0.31'],
            ['Moorabbin', 'no', '0.11', '0.64'],
            ['Edithvale', 'no', '0.11', '0.63'],
            ['Chelsea', 'no', '0.06', '0.42'],
            ['Westall', 'no', '0.06', '0.41'],
            ['Parkdale', 'no', '0.05', '0.34'],
            ['Aspendale', 'no', '0.05', '0.33'],
            ['Mentone', 'no', '0.03', '0.21'],
            ['Cheltenham', 'no', '0.03', '0.19']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Accurate and useless',
              p: 'The plain model beats the do-nothing answer by one point and flags no Kingston station at all. With 182 "no" stations to 15 "yes", the cheapest way to score well is to ignore the rare class.'
            },
            {
              h3: 'What weighting does',
              p: 'Balanced weights count each rare example more, here about 6.6 times a common one. Recall rises from 2 of 15 to 9 of 15, and Southland jumps from 0.34 to 0.95.'
            },
            {
              h3: 'The price',
              p: 'Weighting also flags 42 stations that are not Saturday-busy, Moorabbin and Edithvale among them, and still misses Carrum and Mordialloc. Only 9 of 51 alarms are right.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'No model wins on every number',
          p: 'If missing a Saturday-busy station is costly, the weighted model is better. If false alarms are costly, the plain one is. On accuracy alone, the simple baseline is almost as good as either. Learners write down the cost of each mistake before choosing.'
        },
        {
          kind: 'p',
          text: 'Weekday time shares are a weak signal for Saturday use, which is why neither model is strong; that limit is part of the lesson. Station entries are departmental estimates rounded to the nearest 50, and which stations are in Kingston is our test against the ABS outline. Bonbeach falls below the 500-entry cut and is left out.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'How balanced weights work',
      h2: 'Making rare examples count',
      intro: 'The idea fits in one line: weight each class by the number of samples divided by twice that class\'s count.',
      body: [
        {
          kind: 'table',
          caption: 'Balanced weights for this data',
          head: ['Class', 'Stations', 'Weight per station'],
          rows: [
            ['Saturday-busy', '15', 'about 6.6'],
            ['Not Saturday-busy', '182', 'about 0.54']
          ]
        },
        {
          kind: 'p',
          text: 'scikit-learn applies the same formula when class_weight is set to "balanced", n_samples divided by (n_classes times the class count). We wrote it by hand with NumPy so learners can see every step, then compare with the library.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary age', p: 'Sort a bag of mostly red counters with a few blue ones, and see why "always red" seems smart.' },
            { h3: 'Teenagers', p: 'Train both models, draw the confusion tables, and argue which mistake matters more.' },
            { h3: 'Adults', p: 'Re-check a work model built on rare events, such as faults or returns, with recall alongside accuracy.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Kingston counts',
      h2: 'Kingston schools and stations',
      intro: 'From the 2025 school locations list and the metropolitan entries file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: '30 government schools', p: 'The 2025 list has 23 primary, 5 secondary and 2 specific-purpose government schools in Kingston.' },
            { h3: 'Twelve stations', p: 'Twelve stations sit inside the council outline. Cheltenham was the busiest in FY24-25, with 717,500 entries.' },
            { h3: 'Back to school, 2027', p: 'Term 1 for Victorian government schools runs from Thursday 28 January to Thursday 25 March 2027.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Council outline',
          p: 'Figures use the ABS boundary of the City of Kingston, about 91.4 square kilometres. School addresses inside it include Cheltenham, Mentone, Mordialloc, Chelsea, Dingley Village and Patterson Lakes.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counters to class weights',
    intro: 'Rough starting points by age; the free lesson fine-tunes them.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Coding with blocks',
        p: 'Scratch games, sorting and simple patterns.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'Python and data',
        p: 'First Python, tables of numbers and simple predictions.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Machine learning',
        p: 'Models, evaluation and imbalanced data.',
        courses: ['ai-ml-masterclass-teens', 'orange-data-mining-visual-machine-learning-course-for-teens']
      },
      {
        band: 'University and adult',
        h3: 'Data science',
        p: 'End-to-end projects for study and careers.',
        courses: ['data-science-complete-masterclass-college', 'ai-ml-masterclass-complete-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI tools train models automatically, what is left for Kingston learners?',
    intro: 'Deciding what "good" means, which no tool can do for you.',
    p1: 'Automated tools usually rank models by accuracy unless told otherwise. On this data that would pick the plain model, 93.4%, which never flags a Kingston station. Nothing in the output warns that the rare class has been ignored.',
    p2: 'A learner who has seen recall jump from 2 to 9 while false alarms reach 42 knows to ask which mistake is worse before any model is chosen. That question shapes everything that follows, including how an AI tool is set up.',
    closer: 'Kingston learners use AI tools well when they choose the measure that matters.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lessons for Kingston, online',
    intro: 'Every class runs on video, for learners in Mentone, Chelsea, Dingley Village or elsewhere in Kingston.',
    cells: [
      { h3: 'Live and hands-on', p: 'The learner shares their screen and builds while the teacher explains.' },
      { h3: 'Term-based plan', p: 'Teaching tracks the Victorian term dates and breaks for holidays.' },
      { h3: 'No-fee first lesson', p: 'A complete lesson free of charge, with a course suggestion afterwards.' },
      { h3: 'Level groups', p: 'Fifteen to twenty learners at the same level, drawn from many suburbs.' },
      { h3: 'Two lessons a week', p: 'Two fixed sessions weekly, about eight each month.' },
      { h3: 'India-based teachers', p: 'A 4:45pm Kingston class is 11:15am India time under Melbourne daylight saving and 12:15pm once it ends.' }
    ],
    spec: {
      title: 'Daylight saving dates',
      p: 'Melbourne observes daylight saving from Sunday 4 October 2026 to Sunday 4 April 2027. India keeps one time all year, so our times are always in Melbourne time.'
    }
  },
  fees: {
    h2: 'Kingston class fees',
    intro: 'Fees are simple and identical for every family.',
    first: 'Lesson one is free, with clear advice at the end.',
    group: 'Group option: a month of lessons, usually eight, fifteen to twenty learners together.',
    private: 'Private option: a month of lessons, usually eight, one learner with one teacher.',
    closer: 'Kingston families pay in US dollars. You pay nothing until the trial agrees a course and a weekly slot; holiday and missed-lesson rules sit on the pricing page.'
  },
  reviewsH2: 'Families reviewing our classes on Google',
  book: {
    h2: 'Book a free Kingston class',
    intro: 'Tell us the learner\'s age and interests. A younger learner might start a Scratch game; a teenager might train the Saturday station model.',
    success: 'Thank you. We will be in touch soon about a Kingston class.'
  },
  faq: {
    h2: 'Kingston AI and programming questions',
    intro: 'Questions from Kingston parents and adult learners.',
    items: [
      {
        q: 'How many people live in the City of Kingston?',
        a: 'The 2021 Census counted 158,129 residents in the City of Kingston, Victoria, with a median age of 41.'
      },
      {
        q: 'What is an imbalanced data set?',
        a: 'An imbalanced data set has one class much rarer than the other, such as 15 Saturday-busy stations among 197. Models then tend to ignore the rare class.'
      },
      {
        q: 'What are class weights in machine learning?',
        a: 'Class weights make mistakes on some classes count more during training. Balanced weights give each class equal total influence, so rare examples matter as much as common ones.'
      },
      {
        q: 'Why is accuracy misleading for rare classes?',
        a: 'When one answer is right 92.4% of the time, a model can score well by always giving it. Recall and precision show what happens to the rare cases.'
      },
      {
        q: 'What age can children start learning AI?',
        a: 'The ideas suit children from about seven through games and sorting. Training real models in Python usually starts around 13.'
      },
      { q: 'Do you have data science classes for adults?', a: 'Yes. Adults can learn data science and machine learning in groups or one to one.' },
      {
        q: 'Do you teach in Kingston in person?',
        a: 'No. Every class is live online; we have no office in Australia, and the phone number we list is Indian.',
        boiler: true
      },
      {
        q: 'How much do Kingston classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are learners grouped?',
        a: 'Into groups of fifteen to twenty by level and pace, not by age or suburb, with one-to-one lessons for anyone whose timing no group fits.',
        boiler: true
      },
      {
        q: 'Which Kingston station had the most entries in FY24-25?',
        a: 'Cheltenham, with 717,500 entries, among the twelve stations inside the council outline by our calculation.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Kingston learners',
    html: 'Try the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> for the city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> for the state, and <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">coding for kids in Melbourne</a> for younger learners.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Kingston and Melbourne',
  footerPlaces: [
    { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids in Melbourne' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-kgsv .cg-hero-grid { align-items: center; gap: clamp(1.15rem, 2.7vw, 2.25rem); }
.cg-root.cg-kgsv .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.07; }
.cg-root.cg-kgsv .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-kgsv .cg-eyebrow { letter-spacing: 0.11em; font-weight: 620; font-size: 0.77rem; }
.cg-root.cg-kgsv .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.016em; }
.cg-root.cg-kgsv .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2rem); }
.cg-root.cg-kgsv .cg-table caption { text-align: left; font-weight: 660; font-size: 0.96rem; }
.cg-root.cg-kgsv .cg-table td:nth-child(n+3) { text-align: right; }
.cg-root.cg-kgsv .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-kgsv .cg-callout { border-radius: 3px; border-top-width: 3px; }
`,
  dossier: {
    curriculumAuthority: 'City of Kingston (Vic.), ABS Census 2021 QuickStats, LGA23430 (read 10 October 2026): 158,129 people; median age 41; 43,676 families; 67,560 private dwellings; 2.5 people per household; 1.8 vehicles per dwelling; aged 0-4 8,611 (5.4%); 5-9 9,279 (5.9%); bachelor or higher 40,750 (31.1%, Victoria 29.2%); professionals 21,568 (26.5%, Victoria 25.0%); worked at home 24,383 (30.0%, lockdown Census day); separate houses 35,855 (58.8%, Victoria 73.4%); flats 9,155 (15.0%, Victoria 12.1%). ABS LGA area 91.37 square kilometres. Victorian School Locations 2025: 30 government schools in Kingston (C): 23 primary, 5 secondary, 2 special. DTP FY24-25 metro stations inside the polygon (12): Carrum, Bonbeach, Chelsea, Edithvale, Aspendale, Mordialloc, Parkdale, Mentone, Cheltenham 717,500 (largest), Westall, Moorabbin, Southland. 2027 Term 1: 28 January to 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'Imbalanced classification on DTP FY24-25 station entries. 197 stations with normal weekday entries >= 500; label Saturday-busy = Pax_Saturday >= 0.8 x Pax_norm_weekday (15 positive). Features: shares of weekday entries in 5 time bands, standardised. NumPy logistic regression (gradient descent, L2 0.01), leave-one-out. Baseline always-no 92.4%. Plain: accuracy 93.4%, TP 2 (Richmond, Jolimont), FP 0, recall 2/15. Balanced weights (n/(2 x class count), about 6.6 and 0.54): accuracy 75.6%, TP 9, FP 42, FN 6, recall 9/15, precision 9/51. Kingston (11 modelled, Bonbeach under 500): Southland 0.34 -> 0.95 (positive), Mordialloc 0.06 -> 0.44 and Carrum 0.04 -> 0.31 (positives missed), Moorabbin 0.64 and Edithvale 0.63 false alarms. Script: scratchpad au/b8/kgsv.py.',
    requiredMentions: ['158,129', '43,676', '67,560', '9,279', '40,750', '9,155', '717,500', 'Southland', 'Edithvale'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Kingston local government area (LGA23430).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA23430'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council polygons and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'scikit-learn documentation, LogisticRegression: class_weight "balanced" uses n_samples / (n_classes * np.bincount(y)).',
        url: 'https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html'
      },
      {
        claim: 'Victorian Government, school term dates and holidays, 2027 Victorian school term dates.',
        url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria'
      },
      {
        claim: 'IANA time zone database, australasia file: Australia/Melbourne daylight saving rules.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Why Southland is busy on Saturdays: not claimed; the page reports the pattern only.',
      'That either model is good: not claimed; the page says weekday time shares are a weak signal.',
      'Confusion with Kingston in other states or countries: the page names the Victorian council.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Sums of Census age bands into a child total: not computed.',
      'Any affiliation with the City of Kingston or the Victorian Department of Education.'
    ]
  }
};
