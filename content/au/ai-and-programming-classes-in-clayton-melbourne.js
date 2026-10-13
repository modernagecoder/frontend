'use strict';
// Clayton, Melbourne (cg- district page, Australia cluster Phase 8, row 250). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page (ABS SAL20569, City of Monash) under Melbourne and Victoria.
// Spine: a model learns how school holidays change weekday entries from stations whose PM peak is smaller than their
// AM peak. Clayton's PM peak is larger, so it sits outside the training range: covariate shift, measured.
// Data: Department of Transport and Planning annual metropolitan train station entries FY24-25 (CC BY 4.0), daily
// averages by day type and time band, rounded to 50; the publisher gives no hour definitions for the time bands.
// 73 stations with normal weekday >= 2,000; features interpeak/AM and PM/AM; target school-holiday weekday / normal
// weekday; linear least squares trained on the 44 with PM/AM < 1. LOO MAE 0.066 (median baseline 0.060); 29
// out-of-range stations MAE 0.132 (median baseline 0.088). Clayton predicted 0.896, actual 0.818, training median 0.796.
// Script: scratchpad au/b6/clyt.py.
// Lesson family: covariate shift; 0 location-page hits, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CLAYTON',
    label: 'Clayton, Melbourne',
    blurb: 'AI and programming classes for Clayton, with a machine learning project on what happens when a model meets data unlike its training set.'
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
  slug: 'ai-and-programming-classes-in-clayton-melbourne',
  code: 'clyt',
  accent: '#243E96',
  accentRationale: 'Clayton: a royal blue (hue 226), chosen by hand at least 10 RGB units from all 1,278 accent declarations in content, the shared stylesheets and the claims log, 9.5:1 on white and 9.0:1 on the paper colour #FBF8F2',
  pageType: 'city',
  place: {
    name: 'Clayton',
    eyebrow: 'Clayton, City of Monash, Melbourne, Victoria',
    schemaType: 'Place',
    chain: [
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
  routeLabel: 'Clayton, Melbourne',
  title: 'AI and Programming Classes in Clayton, Melbourne',
  description: 'Live online AI and programming classes for Clayton learners of every age: Scratch, Python, machine learning and data, taught by a teacher in groups or one to one.',
  ogDescription: 'Clayton AI classes with a lesson in model failure: trained on stations unlike Clayton, a model\'s error doubled, and a plain median guessed Clayton better.',
  twitterDescription: 'Clayton AI and programming classes, live online, first class free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Clayton',
    description: 'Level-matched online AI, machine learning and programming lessons for children, teenagers, students and adults in Clayton, taught live in English.'
  },
  h1: 'AI and programming classes in Clayton',
  capsuleQ: 'What do AI and programming classes offer learners in Clayton?',
  capsule: 'Live online lessons where a teacher builds real programs with the learner, from Scratch to Python and machine learning, and teaches them to test what a model gets wrong. Clayton is a suburb of students: at the 2021 Census, 4,841 residents in education, 54.4% of them, were at university.',
  lead: 'Machine learning models are trained on examples and then used on new cases. They work well when the new cases look like the old ones. Clayton\'s train station gives a clean, local demonstration of what happens when they do not, a problem called covariate shift.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Clayton.',
  picks: {
    eyebrow: 'Course picks for Clayton',
    h2: 'Courses for building and testing models',
    intro: 'The station model needs Python, a little statistics and the habit of testing on unseen data, and each of these courses gets there. A free first lesson matches the learner to one.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Training and testing models in Python, including what to do when they fail.' },
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 17',
        note: 'Real data sets, averages, charts and the checks that keep conclusions honest.'
      },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Machine learning from regression to evaluation and deployment.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'University and adult', note: 'Generative AI, with honest testing of its limits.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Clayton in the Census',
      h2: 'Students, townhouses and a young median age',
      intro: 'Figures for the Clayton suburb (ABS code SAL20569) from the 2021 Census QuickStats. Clayton South is a separate suburb with its own figures.',
      body: [
        {
          kind: 'table',
          caption: 'Clayton, 2021 Census headline counts',
          head: ['Headline', 'Clayton'],
          rows: [
            ['Residents', '18,988'],
            ['Median age', '28'],
            ['Families', '3,390'],
            ['Private dwellings', '7,846'],
            ['Average people per household', '2.5'],
            ['Average motor vehicles per dwelling', '1.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Clayton beside Victoria',
          head: ['Measure', 'Clayton', 'Victoria'],
          rows: [
            ['People in education who attend university', '54.4% (4,841)', '16.6%'],
            ['Homes that are semi-detached or townhouses', '42.5% (2,605)', '13.9%'],
            ['Homes that are separate houses', '35.4% (2,171)', '73.4%'],
            ['Adults with a bachelor degree or higher', '42.3% (7,363)', '29.2%'],
            ['Median age', '28', '38']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Early twenties', p: '4,186 residents, 22.0% of Clayton, were aged 20 to 24 on Census night.' },
            { h3: 'Late twenties', p: 'A further 3,715, or 19.6%, were aged 25 to 29.' },
            {
              h3: 'Fewer children',
              p: 'The Census counted 490 residents aged 5 to 9 and 383 aged 10 to 14; lockdown also cut travel, with 19.9% (1,874) of workers at home.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'Because QuickStats rounds percentages and alters small counts for privacy, we print each value exactly as published and never total the parts.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'A model meets a station unlike the ones it learned from',
      intro: 'The FY24-25 station file gives each station\'s average entries on a normal weekday and on a school-holiday weekday, and by time band. We kept the 73 stations with at least 2,000 normal weekday entries and asked a simple model to predict the school-holiday ratio from the shape of each station\'s day.',
      body: [
        {
          kind: 'table',
          caption: 'Clayton station, FY24-25 daily averages (published, rounded to 50)',
          head: ['Measure', 'Entries'],
          rows: [
            ['Normal weekday', '4,950'],
            ['School-holiday weekday', '4,050'],
            ['AM peak band', '1,350'],
            ['Interpeak band', '1,300'],
            ['PM peak band', '1,500']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Trained on 44 stations whose PM peak is smaller than their AM peak (our calculation)',
          head: ['Test set', 'Model error', 'Median-guess error'],
          rows: [
            ['The 44 training-type stations, each left out in turn', '0.066', '0.060'],
            ['The 29 stations with a larger PM peak, Clayton included', '0.132', '0.088']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Outside the range',
              p: 'Clayton\'s PM-to-AM ratio is 1.11. Every training station was between 0.17 and 0.93, so the model is guessing beyond anything it has seen.'
            },
            {
              h3: 'Clayton\'s miss',
              p: 'The model predicts a school-holiday ratio of 0.896. The published figures give 0.818. The training median, 0.796, was closer.'
            },
            { h3: 'The worst case', p: 'For Melbourne Central the model predicts 1.413, more holiday travel than normal, against a published ratio of 0.831.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Error doubled, and the warning sign was visible',
          p: 'Average error rose from 0.066 to 0.132 once the model left its training range, and on both sets a plain median did better. Comparing the new data\'s ranges with the training data\'s ranges would have flagged the problem before any prediction was trusted.'
        },
        {
          kind: 'p',
          text: 'The publisher labels the time bands AM peak, interpeak and PM peak but gives no hour definitions, and it notes that station-level estimates are less precise than network ones. The ratios are ours, built from rounded figures, and they describe patterns, not causes.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'How the model works',
      h2: 'A straight line through two ratios',
      intro: 'The model is a linear regression: two inputs, the interpeak-to-AM ratio and the PM-to-AM ratio, and one output, the school-holiday ratio. It is small enough to check by hand.',
      body: [
        {
          kind: 'table',
          caption: 'Four checks before trusting any model',
          head: ['Check', 'What it caught here'],
          rows: [
            ['Compare input ranges, training versus new', 'Clayton\'s PM ratio sits above every training station'],
            ['Test on held-out data', 'Leave-one-out error of 0.066 inside the range'],
            ['Beat a simple baseline', 'The median guess won on both sets'],
            ['Inspect the biggest misses', 'Melbourne Central and Huntingdale stand out']
          ]
        },
        {
          kind: 'p',
          text: 'Huntingdale, next door to Clayton on the line, has a published ratio of 0.589 against a prediction of 0.873. The data says how large the gap is; it does not say why.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Train a guessing game on summer examples, then test it on winter ones.' },
            { h3: 'Secondary students', p: 'Fit the line in Python and plot training and test stations in different colours.' },
            { h3: 'University and adult', p: 'Add a range check to any model before it reaches real decisions.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Clayton',
      h2: 'Schools, stops and the school year',
      intro: 'From the Victorian school locations file, the timetable feeds and the state calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Three schools',
              p: 'The 2025 school locations file places 3 schools inside the Clayton suburb boundary, among them Clayton North Primary School.'
            },
            { h3: 'Station and buses', p: 'Clayton station lies inside the boundary, and the metropolitan bus feed lists 89 stop entries within it.' },
            { h3: 'Term 1, 2027', p: 'Victorian government school students go back on Thursday 28 January 2027, and Term 1 ends on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Suburb boundary',
          p: 'Census, school and stop figures use the ABS boundary of the Clayton suburb, 7.82 square kilometres. Station figures are for Clayton station alone.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From guessing games to tested models',
    intro: 'Each band is a suggestion; the free first lesson sets the actual level.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and AI ideas',
        p: 'Games, patterns and first ideas about how machines learn.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and data',
        p: 'Typing real code and drawing charts from numbers.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Machine learning',
        p: 'Fitting, testing and questioning models.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied AI',
        p: 'Models, evaluation and generative AI for study or work.',
        courses: ['ai-ml-masterclass-complete-college', 'complete-generative-ai-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI tools build models instantly. Who notices when the data has moved?',
    intro: 'Someone who knows to look. Covariate shift produces no error message, just confident numbers.',
    p1: 'An assistant asked to predict school-holiday travel for every station will fit a model and fill the table. Melbourne Central will get 1.413 beside the rest, and nothing in the output says that its inputs lie far outside anything the model learned from.',
    p2: 'A learner who has watched the error double on the Clayton set checks input ranges first and compares every model with a simple baseline. Those two habits catch most of the quiet failures that AI-built models make.',
    closer: 'In Clayton the lesson is clear: a model is only as good as the match between its training data and the world it meets.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Clayton lessons that fit round lectures and school',
    intro: 'Every class is live online, so Clayton learners join from home, a study room or anywhere with a laptop.',
    cells: [
      { h3: 'Wherever you study', p: 'Any laptop with a stable connection works; the teacher follows your screen.' },
      { h3: 'School calendar', p: 'Children\'s and teenagers\' classes follow the Victorian terms and pause in state holidays.' },
      { h3: 'A free start', p: 'One complete free lesson, then advice on the course and a time.' },
      { h3: 'Level groups', p: 'Fifteen to twenty learners at one level, from a range of places.' },
      { h3: 'Weekly pattern', p: 'Two fixed lessons each week, roughly eight a month.' },
      { h3: 'Teachers in India', p: 'With Melbourne on daylight saving, a 5pm Clayton lesson is 11:30am India time; from April it is 12:30pm.' }
    ],
    spec: {
      title: 'Lesson times stay in Melbourne time',
      p: 'Melbourne observes daylight saving from Sunday 4 October 2026 to Sunday 4 April 2027, while India keeps one time year round, so we quote every lesson in Melbourne time.'
    }
  },
  fees: {
    h2: 'Clayton class fees',
    intro: 'Only three prices to know.',
    first: 'A first lesson at no cost, followed by a recommendation.',
    group: 'A month of group classes, roughly eight, with fifteen to twenty learners at one level.',
    private: 'A month of one-to-one classes, roughly eight, with your own teacher.',
    closer: 'Learners in Clayton pay in US dollars, as everyone outside India does, at a single rate. No payment is taken until the trial settles course and time; the pricing page covers holidays and missed classes.'
  },
  reviewsH2: 'Google reviews from our learners\' families',
  book: {
    h2: 'Book a free Clayton class',
    intro: 'Tell us the learner\'s age and goals. A child might begin with Scratch; a university student might begin by fitting the station model.',
    success: 'Thank you. We will get in touch soon about a Clayton class.'
  },
  faq: {
    h2: 'Clayton AI and programming questions',
    intro: 'What Clayton families, students and adult learners ask us.',
    items: [
      {
        q: 'What is the population of Clayton?',
        a: 'The 2021 Census QuickStats for the Clayton suburb record 18,988 residents, a median age of 28 and 7,846 private dwellings.'
      },
      {
        q: 'What is covariate shift?',
        a: 'Covariate shift happens when the inputs a model sees in use differ from the inputs it was trained on. The model still produces answers, but they can be much less accurate.'
      },
      {
        q: 'How can you detect covariate shift?',
        a: 'Compare the range and spread of each input in the new data with the training data, and test the model against a simple baseline on the new cases.'
      },
      {
        q: 'What did the Clayton station model show?',
        a: 'Trained on 44 stations unlike Clayton, its average error was 0.066 on similar stations and 0.132 on the 29 different ones. For Clayton it predicted 0.896 against a published 0.818.'
      },
      {
        q: 'Can university students take these classes?',
        a: 'Yes. University students join adult groups or one-to-one lessons, often to deepen Python or machine learning alongside their degree.'
      },
      { q: 'Is Copilot Studio in the Clayton group course?', a: 'No. Copilot Studio is taught one to one only; group learners build agents in Python.' },
      {
        q: 'Is there a Clayton office?',
        a: 'No. Lessons are online and live only, we have no Australian office, and the phone number we list is an Indian one.',
        boiler: true
      },
      {
        q: 'What are the fees for Clayton learners?',
        a: 'The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one classes cost USD 150 a month. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How many people are in a group?',
        a: 'Five to ten, grouped by level, pace and aims rather than age or suburb, with private lessons if no group time works.',
        boiler: true
      },
      { q: 'What age can children start?', a: 'From about six with Scratch, moving to Python at around ten.' }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Clayton learners',
    html: 'Also in the City of Monash, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-glen-waverley-melbourne">Glen Waverley</a> has its own page. See the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> and the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia overview</a> for more.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Clayton and Monash',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-glen-waverley-melbourne', label: 'Glen Waverley' },
    { href: '/vibe-coding-and-ai-agents-classes-in-box-hill-melbourne', label: 'Box Hill' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-clyt .cg-hero-grid { align-items: center; gap: clamp(1.05rem, 3vw, 2.45rem); }
.cg-root.cg-clyt .cg-hero h1 { font-weight: 660; letter-spacing: -0.016em; line-height: 1.1; }
.cg-root.cg-clyt .cg-capsule { border-left: 2px solid var(--cg-accent); padding: 0.55rem 0 0.55rem 1.15rem; }
.cg-root.cg-clyt .cg-eyebrow { letter-spacing: 0.08em; font-weight: 680; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-clyt .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.01em; }
.cg-root.cg-clyt .cg-grid-3 { gap: clamp(0.85rem, 2.1vw, 1.75rem); }
.cg-root.cg-clyt .cg-table caption { font-style: italic; font-weight: 600; text-align: left; }
.cg-root.cg-clyt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-clyt .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-clyt .cg-callout { border-radius: 2px; }
`,
  dossier: {
    curriculumAuthority: 'Clayton, ABS Census 2021 QuickStats, Clayton suburb SAL20569 (read 10 October 2026): 18,988 people; median age 28; 3,390 families; 7,846 private dwellings; 2.5 people per household; 1.4 vehicles per dwelling; university 4,841 (54.4% of people attending an educational institution; Victoria 16.6%); semi-detached 42.5% (2,605); flats 21.7% (1,331); separate houses 35.4% (2,171); bachelor degree or higher 42.3% (7,363); worked at home 19.9% (1,874, lockdown Census day); aged 5-9 490; 10-14 383; 20-24 4,186 (22.0%); 25-29 3,715 (19.6%). Victoria: semi 13.9%, houses 73.4%, bachelor 29.2%, median age 38. ABS SAL area 7.821 square kilometres. Victorian School Locations 2025: 3 schools inside the boundary, including Clayton North Primary School. Clayton station inside; 89 metro bus stop entries inside. Victorian 2027 Term 1: 28 January to 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'Covariate shift. Annual metropolitan train station entries FY24-25 (daily averages by day type and time band, rounded to 50; no published hour definitions for bands). 73 stations with Pax_norm_weekday >= 2000. Features: interpeak/AM, PM/AM. Target: Pax_sch_hol_weekday / Pax_norm_weekday. Linear least squares (numpy lstsq) trained on 44 stations with PM/AM < 1 (training PM/AM 0.17 to 0.93; interpeak/AM 0.28 to 1.13); weights [0.689, 0.305, -0.078]. Leave-one-out MAE in range 0.066 (median baseline 0.060); MAE on 29 out-of-range stations 0.132 (median baseline 0.088). Clayton: normal weekday 4,950, school-holiday weekday 4,050, AM 1,350, interpeak 1,300, PM 1,500; f1 0.96, f2 1.11; predicted 0.896, actual 0.818, training median 0.796. Melbourne Central predicted 1.413, actual 0.831. Huntingdale predicted 0.873, actual 0.589. Script: scratchpad au/b6/clyt.py.',
    requiredMentions: ['18,988', '3,390', '7,846', '4,186', '3,715', '7,363', '1.413', '0.132', 'Clayton North Primary School'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Clayton suburb (SAL20569).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20569' },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Department of Transport and Planning, GTFS Schedule (Creative Commons Attribution 4.0), metropolitan train and bus feeds.',
        url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'NumPy linalg.lstsq, least-squares solution used for the linear model.',
        url: 'https://numpy.org/doc/stable/reference/generated/numpy.linalg.lstsq.html'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL20569 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
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
      'Naming any university or campus near Clayton station: not done; the relevant site could not be fetched (403) and the page relies on Census education figures only.',
      'Reasons why Clayton, Huntingdale or Melbourne Central differ from the model: not claimed.',
      'Hour definitions for AM peak, interpeak and PM peak: not given by the publisher, so none are stated.',
      'Selective-entry school and Catholic school names: not printed.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the City of Monash, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
