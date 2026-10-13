'use strict';
// Cranbourne, Melbourne (cg- district page, Australia cluster Phase 8, row 274). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page (ABS SAL20662, suburb of Cranbourne, in the City of Casey) under
// Melbourne and Victoria.
// Spine: predict each station's annual entries from two almost identical columns (average weekday and average normal
// weekday). The fit is excellent, but the two coefficients are wild and opposite in sign; bootstrap resamples show
// they swing while their sum and the Cranbourne prediction barely move.
// Data: DTP annual metropolitan station entries FY24-25 (CC BY 4.0, rounded to 50). Our measurements
// (scratchpad au/b9/crnb.py): 222 stations; corr 0.99985; VIF 3,435.8; bootstrap 200 resamples, seed 42.
// Lesson family: multicollinearity, unstable coefficients from correlated features; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CRANBOURNE',
    label: 'Cranbourne, Melbourne',
    blurb: 'AI and programming classes for Cranbourne, with a model whose two features are so alike that its coefficients swing wildly while its predictions hold steady.'
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
  slug: 'ai-and-programming-classes-in-cranbourne-melbourne',
  code: 'crnb',
  accent: '#371794',
  accentRationale: 'Cranbourne: a saturated royal violet (hue 254.3), picked by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, about 11.5:1 on white',
  pageType: 'city',
  place: {
    name: 'Cranbourne',
    eyebrow: 'Cranbourne, City of Casey, Melbourne, Victoria',
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
  routeLabel: 'Cranbourne, Melbourne',
  title: 'AI and Programming Classes in Cranbourne, Melbourne',
  description: 'Live online AI and programming classes for Cranbourne children, teens and adults, with machine learning on real public data, taught in small groups or one to one.',
  ogDescription: 'Cranbourne AI classes, with a project: two near-identical features, coefficients of +1,029.94 and -696.80, and predictions that still land close.',
  twitterDescription: 'AI and programming for Cranbourne learners, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Cranbourne',
    description: 'Level-matched online AI, machine learning and programming lessons for children, teenagers and adults in Cranbourne, in the City of Casey, taught live in English.'
  },
  h1: 'AI and programming classes in Cranbourne',
  capsuleQ: 'What can Cranbourne learners gain from AI and programming classes?',
  capsule: 'The ability to build machine learning models and to tell when a model\'s explanation cannot be trusted, even if its predictions look right. Children start with Scratch at six; teenagers and adults train models on public data. The suburb of Cranbourne had 21,281 residents in the 2021 Census.',
  lead: 'Give a model two inputs that say almost the same thing and it can still predict well. What it cannot do is decide how much credit each input deserves. We fitted that kind of model to every metropolitan station, including Cranbourne\'s, and watched the coefficients swing from one resample to the next.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Cranbourne.',
  picks: {
    eyebrow: 'Course picks for Cranbourne',
    h2: 'Courses that read a model, not just run it',
    intro: 'The station model needs Python, regression and a habit of testing what a model claims. These courses teach that; the free trial lesson sets the level.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning built by hand, including what each coefficient really means.' },
      {
        course: 'data-science-complete-masterclass-college',
        band: 'University and adult',
        note: 'Feature selection, regression diagnostics and resampling on real data.'
      },
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 17',
        note: 'Python data work with charts, correlations and honest conclusions.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python and AI projects, with simple models children can test.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Cranbourne in the Census',
      h2: 'A young suburb of family houses',
      intro: 'Headline 2021 Census QuickStats for the suburb of Cranbourne (ABS code SAL20662), which lies within the City of Casey, compared with Victoria.',
      body: [
        {
          kind: 'table',
          caption: 'Cranbourne suburb counts, 2021',
          head: ['Measure', 'Suburb of Cranbourne'],
          rows: [
            ['Residents', '21,281'],
            ['Median age', '35'],
            ['Families', '5,448'],
            ['Private dwellings', '8,073'],
            ['People per household', '2.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Cranbourne beside the Victorian figure',
          head: ['Indicator', 'Cranbourne', 'Victoria-wide'],
          rows: [
            ['Separate houses', '80.0% (5,763)', '73.4%'],
            ['Semi-detached, row or townhouse homes', '16.1% (1,160)', '13.9%'],
            ['Workers who drove to work', '64.0% (6,090)', '49.9%'],
            ['Workers who took the train to work', '1.7% (158)', '1.6%'],
            ['Adults with a bachelor degree or higher', '13.8% (2,342)', '29.2%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children in the suburb', p: 'Residents aged 5 to 9 numbered 1,509, and those aged 10 to 14 numbered 1,281.' },
            { h3: 'Lockdown Census', p: 'In August 2021, during lockdown, 12.0% of employed residents, 1,143 people, worked from home.' },
            { h3: 'Suburb, not council', p: 'The suburb boundary covers about 16.5 square kilometres; the wider City of Casey is a separate, much larger area.' }
          ]
        },
        {
          kind: 'p',
          text: 'Census cells carry small privacy adjustments from the bureau, so figures appear exactly as published and are never added together into totals of our own.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Which of two near-twin features matters?',
      intro: 'The FY24-25 station file gives each of 222 stations an annual entry count plus several daily averages. Two of those averages, all weekdays and normal (non-holiday) weekdays, are almost the same column. We used both to predict annual entries.',
      body: [
        {
          kind: 'table',
          caption: 'One fit with both features (our calculation)',
          head: ['Measure', 'Value'],
          rows: [
            ['Correlation between the two weekday averages', '0.99985'],
            ['Variance inflation factor', '3,435.8'],
            ['Coefficient on average weekday', '+1,029.94'],
            ['Coefficient on average normal weekday', '-696.80'],
            ['Slope with average weekday alone', '313.98']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: '200 bootstrap resamples of the 222 stations (our calculation)',
          head: ['Quantity', 'Range across resamples'],
          rows: [
            ['Coefficient on average weekday', '526.9 to 1,257.9'],
            ['Coefficient on normal weekday', '-914.5 to -210.2, always negative'],
            ['Sum of the two coefficients', '311.4 to 347.8'],
            ['Predicted annual entries at Cranbourne', '1,054,819 to 1,099,860']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Predictions stay calm',
              p: 'The two coefficients always add up to about the single-feature slope, so predictions hardly change between resamples.'
            },
            { h3: 'Explanations do not', p: 'The weekday coefficient more than doubles across resamples, and the other is negative, which makes no physical sense.' },
            {
              h3: 'One feature is enough',
              p: 'Dropping one twin leaves a single slope of 313.98 with a plain meaning; here the simpler model is the sensible choice.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Cranbourne\'s own numbers',
          p: 'Cranbourne station recorded 1,054,250 entries in FY24-25, up from 817,750 in FY18-19. Its averages were 3,500 a weekday, 3,650 on a normal weekday, 2,900 on a school holiday weekday, 1,650 on Saturdays and 1,250 on Sundays. Across the resamples the model predicted between 1,054,819 and 1,099,860 entries, a median of 1,077,860, close to the real figure whatever the coefficients said.'
        },
        {
          kind: 'p',
          text: 'All station figures are published by the Department of Transport and Planning, rounded to 50. The correlation, the fits, the variance inflation factor and the bootstrap ranges are our calculation. The negative coefficient describes the model, not passengers.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'AI and programming',
      h2: 'Spotting twin features before training',
      intro: 'Multicollinearity turns up whenever data has near-duplicate columns, which is common in real spreadsheets. These checks catch it.',
      body: [
        {
          kind: 'table',
          caption: 'Checks, with the Cranbourne example',
          head: ['Check', 'How', 'Result here'],
          rows: [
            ['Correlation matrix', 'df.corr() before fitting', '0.99985 between the two weekday columns'],
            ['Variance inflation factor', 'One regression per feature', '3,435.8, far above the usual worry level of 10'],
            ['Bootstrap the coefficients', 'Refit on resampled rows', 'Weekday coefficient spans 526.9 to 1,257.9'],
            ['Try the simpler model', 'Drop one twin and refit', 'A single slope of 313.98']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Notice when two clues in a puzzle are really the same clue said twice.' },
            { h3: 'Secondary learners', p: 'Compute the correlation and the bootstrap ranges, then explain why predictions stay steady.' },
            { h3: 'Adults', p: 'Check work dashboards for duplicate measures before reading meaning into model weights.' }
          ]
        },
        {
          kind: 'p',
          text: 'School holidays explain why the two columns differ at all: Cranbourne averaged 3,650 on normal weekdays and 2,900 on school holiday weekdays. The difference is real but small next to the gap between stations, which is why the columns move together so closely.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Cranbourne',
      h2: 'End of the line: one station, seven schools',
      intro: 'Suburb-level markers from the patronage series, the state school register and the term calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'One station',
              p: 'Cranbourne station is the only metropolitan station inside the suburb boundary by our check, and FY24-25 entries there were 128.9% of the FY18-19 figure.'
            },
            {
              h3: 'Schools in the suburb',
              p: 'By our boundary check, 7 schools in the 2025 list sit inside the suburb: 6 primary and 1 secondary. Government schools include Cranbourne Secondary College, Cranbourne Primary School and Rangebank Primary School.'
            },
            { h3: 'Term 1, 2027', p: 'The 2027 Term 1 dates for Victorian government schools are Thursday 28 January to Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Suburb figures only',
          p: 'The Census numbers here describe the suburb of Cranbourne only. Neighbouring suburbs such as Cranbourne North, East, West and South, and the City of Casey as a whole, have their own separate figures.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From spotting patterns to judging models',
    intro: 'Ages here are indicative only; the trial lesson shows where a learner fits.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Games and puzzles that build careful step-by-step thinking.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and simple AI',
        p: 'First programs and small models that learn from examples.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Machine learning',
        p: 'Regression, classification and the checks behind trustworthy models.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Data science',
        p: 'Feature work, diagnostics and models for study or work.',
        courses: ['data-science-complete-masterclass-college', 'ai-ml-masterclass-complete-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI can train the model, what does a Cranbourne learner bring?',
    intro: 'The questions. An AI tool will fit both weekday columns, report a near-perfect fit and list the coefficients without warning that they mean nothing on their own.',
    p1: 'Ask an assistant which factor "drives" station entries and it may read the coefficients literally: normal weekdays push entries down by 696.80 each. That sentence is confident and wrong. The model predicts well; it simply cannot separate two inputs that move together, so its explanation is noise.',
    p2: 'Learners who have bootstrapped those coefficients and watched them swing will check correlations and refit simpler models before believing any explanation. That habit makes AI analysis useful rather than misleading.',
    closer: 'In Cranbourne, the learner who questions a model\'s explanation is the one ready to use AI for real decisions.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online lessons for Cranbourne families',
    intro: 'Every lesson is on screen, so no travel is needed from any part of Cranbourne.',
    cells: [
      { h3: 'Shared code and plots', p: 'Teacher and learner write and run code together and talk through each chart.' },
      { h3: 'Term-based plans', p: 'Lessons follow Victorian school terms with holiday breaks.' },
      { h3: 'A genuine trial', p: 'The free first class teaches real content and ends with a clear suggestion.' },
      { h3: 'Fifteen to twenty per group', p: 'Groups formed by level and pace, sometimes across states.' },
      { h3: 'Two lessons a week', p: 'Fixed times, about eight lessons a month, with planned breaks.' },
      { h3: 'Teachers in India', p: 'A 6:30pm Cranbourne lesson in daylight saving starts at 1pm India time, and at 2pm there after April.' }
    ],
    spec: {
      title: 'Melbourne and India time',
      p: 'Melbourne daylight saving runs from Sunday 4 October 2026 to Sunday 4 April 2027; India has no daylight saving. Lesson times are agreed in Melbourne time.'
    }
  },
  fees: {
    h2: 'Cranbourne class fees',
    intro: 'Three prices, nothing hidden.',
    first: 'The first lesson is free and finishes with a straight recommendation.',
    group: 'One month of group lessons, typically eight, with fifteen to twenty learners at a similar level.',
    private: 'Around eight lessons a month, one teacher and one learner.',
    closer: 'Learners abroad pay in US dollars, and payment comes only after the trial, once a course and regular time suit the family. Holiday pauses, absences and moving to private lessons are laid out on the pricing page.'
  },
  reviewsH2: 'Reviews from families and learners on Google',
  book: {
    h2: 'Book a first Cranbourne lesson',
    intro: 'Mention the age of the learner and what grabs their attention. A secondary student could open by charting the two near-identical weekday columns side by side; a primary child could begin with a Scratch puzzle about clues that repeat.',
    success: 'Thank you. Our team will contact you soon about a Cranbourne lesson.'
  },
  faq: {
    h2: 'Cranbourne AI and programming questions',
    intro: 'Questions Cranbourne families and adult learners often ask.',
    items: [
      {
        q: 'What is the population of Cranbourne?',
        a: 'The 2021 Census QuickStats for the suburb of Cranbourne record 21,281 residents, a median age of 35 and 5,448 families. The suburb is part of the City of Casey.'
      },
      {
        q: 'What is multicollinearity?',
        a: 'It is when two or more input features in a model are strongly correlated, so the model cannot tell how much each one contributes. Predictions can stay accurate while individual coefficients become unstable.'
      },
      {
        q: 'What is a variance inflation factor?',
        a: 'A number showing how much a coefficient\'s uncertainty is inflated by correlation with other features. Values above about 10 are a common warning; our station model scored 3,435.8.'
      },
      {
        q: 'What did the Cranbourne project show?',
        a: 'Using two weekday averages correlated at 0.99985, the coefficients came out at +1,029.94 and -696.80 and swung widely across 200 resamples, yet predictions for Cranbourne stayed between 1,054,819 and 1,099,860.'
      },
      {
        q: 'What age can children start learning AI?',
        a: 'Six-year-olds can begin with Scratch and playful AI activities; training actual models normally waits until about thirteen, once Python feels comfortable.'
      },
      {
        q: 'Are Claude-based courses open to teenagers?',
        a: 'No. Our Claude-based courses enrol people aged 18 and above only, and younger students use other AI tools.'
      },
      {
        q: 'Is there a centre in Cranbourne?',
        a: 'No. All classes are live online, we have no office in Australia, and the phone number we show is an Indian number.',
        boiler: true
      },
      {
        q: 'What do classes cost for Cranbourne learners?',
        a: 'The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Course, format and time are agreed before any payment.',
        boiler: true
      },
      {
        q: 'How many learners are in a group?',
        a: 'Five to ten, matched by level, pace and goal. If no group fits the learner\'s time, one-to-one lessons are offered.',
        boiler: true
      },
      {
        q: 'Can Copilot Studio be learned in a Cranbourne group?',
        a: 'No. Copilot Studio is reserved for one-to-one lessons; Cranbourne group learners build agents in Python code.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Cranbourne learners',
    html: 'Elsewhere in Melbourne, <a class="cg-inline-link" href="/ai-and-programming-classes-in-point-cook-melbourne">Point Cook</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-glen-waverley-melbourne">Glen Waverley</a> have their own pages. Families in the south-east may also want <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">the Melbourne hub</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">the guide to Victoria</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Cranbourne and Melbourne',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-point-cook-melbourne', label: 'Point Cook' },
    { href: '/best-coding-and-ai-classes-in-glen-waverley-melbourne', label: 'Glen Waverley' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-crnb .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.1vw, 2.45rem); }
.cg-root.cg-crnb .cg-hero h1 { font-weight: 650; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-crnb .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.65rem 0 0.65rem 1rem; }
.cg-root.cg-crnb .cg-eyebrow { letter-spacing: 0.115em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-crnb .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.012em; }
.cg-root.cg-crnb .cg-grid-3 { gap: clamp(0.8rem, 2.05vw, 1.6rem); }
.cg-root.cg-crnb .cg-table caption { font-style: italic; font-weight: 600; text-align: left; }
.cg-root.cg-crnb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-crnb .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-crnb .cg-callout { border-left-width: 5px; border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Suburb of Cranbourne (City of Casey), ABS Census 2021 QuickStats, Cranbourne SAL20662 (read 11 October 2026): 21,281 people; median age 35; 5,448 families; 8,073 private dwellings; 2.7 per household; separate house 80.0% (5,763; Victoria 73.4%); semi-detached 16.1% (1,160; Victoria 13.9%); drove 64.0% (6,090; Victoria 49.9%); train 1.7% (158; Victoria 1.6%); bachelor or higher 13.8% (2,342; Victoria 29.2%); worked at home 12.0% (1,143, lockdown); aged 5-9 1,509; aged 10-14 1,281. ABS area 16.5124 sq km. Victorian School Locations 2025: 7 schools inside the SAL boundary by our point-in-polygon check (6 primary, 1 secondary); government schools named: Cranbourne Secondary College, Cranbourne PS, Rangebank PS; one Catholic primary counted, not named. Cranbourne station only metro station inside boundary; FY18-19 817,750; FY24-25 1,054,250 (128.9%); FY24-25 averages weekday 3,500, normal weekday 3,650, school holiday weekday 2,900, Saturday 1,650, Sunday 1,250. Vic 2027 Term 1: 28 January to 25 March. DST 4 Oct 2026 to 4 Apr 2027 (IANA).',
    localProject: 'Multicollinearity. FY24-25 station file, 222 stations. corr(weekday, normal weekday) 0.99985; corr(weekday, school-holiday weekday) 0.99761; VIF 3,435.8. OLS annual ~ weekday + normal weekday: +1,029.94 and -696.80, intercept 15,507.75; single-predictor slope 313.98. 200 bootstrap resamples, seed 42: weekday coef 526.9 to 1,257.9; normal-weekday coef -914.5 to -210.2 (always negative); sum 311.4 to 347.8; Cranbourne predicted 1,054,819 to 1,099,860 (median 1,077,860) vs actual 1,054,250. Script: scratchpad au/b9/crnb.py.',
    requiredMentions: ['21,281', '5,448', '5,763', '1,509', '3,435.8', '0.99985', '817,750', 'Rangebank Primary School', 'Cranbourne Secondary College'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Cranbourne suburb (SAL20662).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20662' },
      {
        claim: 'ABS ASGS Edition 3 (2021) SAL boundary SAL20662, geo.abs.gov.au map service, used for our point-in-boundary checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
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
        claim: 'Bradley Efron (1979), Bootstrap Methods: Another Look at the Jackknife, The Annals of Statistics 7(1), 1-26, DOI 10.1214/aos/1176344552.',
        url: 'https://doi.org/10.1214/aos/1176344552'
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
      'That normal weekdays reduce station entries: rejected; the negative coefficient is an artefact of collinearity.',
      'Any cause for the growth in entries at Cranbourne station: not claimed.',
      'Figures for the City of Casey as a whole: not used; this page uses suburb figures only.',
      'Names of non-government schools: not used (one Catholic primary counted, not named).',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Casey, the Department of Education or the Department of Transport and Planning.'
    ]
  }
};
