'use strict';
// Rhodes, Sydney (cg- district page, Australia cluster Phase 8, row 226). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page under Sydney and New South Wales.
// Rhodes suburb (ABS SAL13372), wholly inside Canada Bay LGA (4,000-point sample).
// Spine: can a model that has seen only three months of one station forecast it, and does borrowing the
// seasonal pattern from 337 other stations help? Transfer learning, measured.
// Data: Transport for NSW monthly station entries (CC BY), 338 stations with complete numeric series over
// 23 months (October 2024 to August 2026). Log model: level from the target's last k months before the test
// window, month-of-year shape learned from the other 337 stations over October 2024 to February 2026.
// Test window March to August 2026; mean absolute percentage error (our calculation). Rhodes Station:
// k=1 alone 12.81% transfer 10.96%; k=2 17.72% vs 11.56%; k=3 16.60% vs 11.03%; k=6 8.96% vs 8.65%;
// k=12 7.10% vs 6.97%; k=17 9.38% vs 8.88%; seasonal naive (same month of 2025) 5.25%. All 338 stations,
// k=3: transfer better at 295, median 14.78% alone vs 10.11% transfer; k=12: 269, 9.42% vs 9.05%, seasonal
// naive 8.69%. Rhodes entries: highest March 2026 259,845; lowest January 2025 178,854; August 2026 237,289.
// NSW Department of Education file: no government school with a Rhodes address (12 in Canada Bay).
// Lesson family: transfer learning (pretrain on many stations, adapt to one); screened 0 location-page hits.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'RHODES',
    label: 'Rhodes, Sydney',
    blurb: 'AI and programming classes for Rhodes, with a forecasting project that borrows what 337 other stations know to predict one station from three months of data.'
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
  slug: 'ai-and-programming-classes-in-rhodes-sydney',
  code: 'rhds',
  accent: '#462E94',
  accentRationale: 'Rhodes: a muted violet-indigo (hue 254), at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 10.1:1 on white and 8.2:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Rhodes',
    eyebrow: 'Rhodes, City of Canada Bay, Sydney',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Sydney' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'best-coding-classes-in-sydney', name: 'Sydney' }
  ],
  nav: [
    { label: 'Sydney', href: '/best-coding-classes-in-sydney' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Rhodes, Sydney',
  title: 'AI and Programming Classes in Rhodes, Sydney',
  description: 'Live online AI, machine learning and programming classes for Rhodes children, teens and adults, with real teachers in groups or one to one. First lesson free.',
  ogDescription: 'AI and programming classes for Rhodes, with a transfer learning project: forecasting Rhodes Station from three months of its own data plus a seasonal pattern learned from 337 other stations.',
  twitterDescription: 'Rhodes AI and programming classes, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-complete-college',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Rhodes',
    description: 'Level-matched online programming, machine learning and forecasting for children, teenagers and adults in Rhodes, Sydney, taught live in English.'
  },
  h1: 'AI and programming classes in Rhodes',
  capsuleQ: 'What are the best AI and programming classes for Rhodes learners?',
  capsule: 'Live online classes where learners build AI models and then test whether they actually work. Rhodes is a suburb of apartments and young families: at the 2021 Census 95.1% of occupied homes (4,765) were flats or apartments, and 7.0% of residents were under five, but only 1.7% were aged 10 to 14. Lessons run in small level-matched groups or one to one, and the first lesson is free.',
  lead: 'Imagine a model that has seen just three months of Rhodes Station\'s entry counts, and those three are December, January and February, the quiet summer months. Asked to forecast March to August 2026, it is off by 16.60% on average. Now let it first learn the shape of a year from 337 other NSW stations, and take only the level from Rhodes. The error falls to 11.03%. That is transfer learning, the idea behind almost every modern AI model, measured on one station\'s numbers.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a learner in Rhodes.',
  picks: {
    eyebrow: 'Course picks for Rhodes',
    h2: 'Courses in AI that test their own claims',
    intro: 'Each course reaches models and evaluation at its own level. The trial lesson sets the fit, and no card is needed to book.',
    items: [
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 12', note: 'How AI learns from examples, explained with games and simple experiments.' },
      {
        course: 'ai-ml-masterclass-teens',
        band: 'Ages 14 to 18',
        note: 'Machine learning from data to evaluation, with models trained and tested by the learner.'
      },
      {
        course: 'ai-ml-masterclass-complete-college',
        band: 'University and adult',
        note: 'Complete machine learning, including pretrained models, fine-tuning and honest baselines.'
      },
      {
        course: 'data-and-ai-analytics-for-non-programmers-course',
        band: 'Adults',
        note: 'Data and AI analysis for working adults who do not yet write code.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Rhodes in the Census',
      h2: 'Babies, apartments and very few teenagers',
      intro: 'The bureau\'s 2021 QuickStats for the suburb of Rhodes, with NSW and Australian shares for comparison.',
      body: [
        {
          kind: 'table',
          caption: 'Rhodes at the 2021 Census',
          head: ['Count', 'Rhodes'],
          rows: [
            ['Residents', '11,453'],
            ['Families', '3,314'],
            ['Private dwellings', '5,871'],
            ['People per household', '2.2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'An unusual age profile',
          head: ['Measure', 'Rhodes', 'NSW', 'Australia'],
          rows: [
            ['Children under five', '7.0% (807)', '5.8%', '5.8%'],
            ['Children aged 10 to 14', '1.7% (190)', '6.2%', '6.2%'],
            ['Residents aged 30 to 34', '20.5% (2,352)', '7.3%', '7.3%'],
            ['Degree holders among those 15 and over', '62.0% (6,241)', '27.8%', '26.3%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Almost all apartments', p: 'Only 161 occupied homes, 3.2%, were separate houses, against 65.6% across the state.' },
            { h3: 'Professionals', p: 'Some 2,890 employed residents, 43.8%, worked as professionals, against 25.8% across NSW.' },
            {
              h3: 'No public school',
              p: 'The NSW Department of Education\'s school file lists no government school with a Rhodes address; the City of Canada Bay has 12.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'Small Census cells are randomly adjusted for privacy, so every figure is quoted exactly as published and none is added up from the rows.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Borrowing a year from 337 stations',
      intro: 'Two forecasters predict Rhodes Station\'s entries for March to August 2026. One sees only the last few months of Rhodes. The other learns the seasonal shape from every other station with a complete record, then adjusts it to Rhodes.',
      body: [
        {
          kind: 'table',
          caption: 'Average forecast error for Rhodes Station, March to August 2026 (our calculation)',
          head: ['Months of Rhodes data seen', 'Rhodes alone', 'With the borrowed shape'],
          rows: [
            ['1', '12.81%', '10.96%'],
            ['3', '16.60%', '11.03%'],
            ['6', '8.96%', '8.65%'],
            ['12', '7.10%', '6.97%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why three months is worst',
              p: 'December 2025 to February 2026 were among Rhodes\'s quietest months, so a model that sees only them guesses far too low for autumn and winter.'
            },
            { h3: 'What transfer adds', p: 'The other stations already know that March is busy and January is quiet. Rhodes only has to supply its own level.' },
            {
              h3: 'When it stops helping',
              p: 'With a full year of its own data the gap almost closes, 7.10% against 6.97%, because Rhodes can now see its own seasons.'
            }
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Across all 338 stations (our calculation)',
          head: ['Months seen', 'Transfer better at', 'Median error alone', 'Median error with transfer'],
          rows: [
            ['3', '295 stations', '14.78%', '10.11%'],
            ['12', '269 stations', '9.42%', '9.05%']
          ]
        },
        {
          kind: 'callout',
          h3: 'The baseline that beat both',
          p: 'Simply using each month\'s value from 2025 gave Rhodes an error of 5.25%, better than either model, and a median of 8.69% across all stations. Learners must report that. A clever method that loses to the obvious one is a finding, not a failure.'
        },
        {
          kind: 'p',
          text: 'Entries are Transport for NSW\'s published monthly counts; the 338 stations are those with a number for every one of the 23 months. Models, errors and station counts are our own calculation, and they forecast counts only, never reasons.'
        }
      ]
    },
    {
      id: 'method',
      tint: 'tint',
      eyebrow: 'Why it matters',
      h2: 'The idea inside modern AI',
      intro: 'Large AI models are pretrained on huge general data, then adapted to a narrow task with little data of its own. The station project is that idea at a size a learner can check by hand.',
      body: [
        {
          kind: 'table',
          caption: 'Pretraining and adaptation, at two scales',
          head: ['Step', 'Station project', 'Large AI model'],
          rows: [
            ['Learn general patterns', 'Seasonal shape from 337 stations', 'Language or images from vast data'],
            ['Adapt to one case', 'Level from a few Rhodes months', 'Fine-tuning on a small task set'],
            ['Test honestly', 'Six unseen months', 'Held-out test examples']
          ]
        },
        {
          kind: 'p',
          text: 'Learners code both forecasters on logged counts, slide the number of months seen from one to seventeen, and compare against the same-month-last-year baseline. They then write a short note on when transfer is worth it and when it is not, which is the judgement a data team is paid for.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Guess a new friend\'s favourite games from what most classmates like, then adjust after asking one question.' },
            { h3: 'Teenagers', p: 'Build both forecasters in Python and plot their errors month by month.' },
            { h3: 'Adults', p: 'Fine-tune pretrained models and set baselines that keep the results honest.' }
          ]
        },
        {
          kind: 'p',
          text: 'Transport for NSW, the NSW Department of Education and the statistics bureau publish the data used here. They are independent of Modern Age Coders, as is the City of Canada Bay.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Rhodes',
      h2: 'One station, busiest in March',
      intro: 'More from the Transport for NSW file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Peak month', p: 'Rhodes Station\'s highest count in the 23 months was March 2026, with 259,845 entries.' },
            { h3: 'Quietest month', p: 'January 2025 was the lowest, at 178,854 entries.' },
            { h3: 'Latest month', p: 'August 2026, the newest month in the file, recorded 237,289 entries.' }
          ]
        },
        { kind: 'spec', title: 'One council', p: 'All 4,000 random points we tested inside the bureau\'s Rhodes boundary fell within the City of Canada Bay.' }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From learning by example to fine-tuning models',
    intro: 'Age bands are loose; the trial lesson finds the right first step.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Logic first',
        p: 'Scratch projects with patterns, loops and sorting games.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'How AI learns',
        p: 'First Python and simple models trained on examples.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Models and tests',
        p: 'Python, statistics and machine learning with held-out data.',
        courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Pretrained models',
        p: 'Fine-tuning, forecasting and evaluation for real work.',
        courses: ['ai-ml-masterclass-complete-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'AI and programming',
    h2: 'Can a Rhodes learner tell when an AI forecast is worse than a simple guess?',
    intro: 'Only by running the simple guess too.',
    p1: 'An assistant asked for a forecasting model will usually return something impressive and rarely a baseline. On Rhodes Station the transfer model beat the model that saw only Rhodes, yet both lost to last year\'s numbers.',
    p2: 'A learner who has built all three knows to ask for the baseline first and to judge every model against it. That habit is what separates a working AI system from an expensive demo.',
    closer: 'In 2026 the Rhodes learners who check AI results against honest baselines will be the ones whose models get used.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online for Rhodes',
    intro: 'Every lesson is taught live and joined from home, with no travel.',
    cells: [
      { h3: 'From the apartment', p: 'A computer and headphones are enough; no special room is needed.' },
      { h3: 'Holiday breaks', p: 'Families can pause through the NSW school holidays.' },
      { h3: 'Trial first', p: 'A full free lesson, followed by a suggested course and time.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty classmates of one level, or a private teacher.' },
      { h3: 'Weekly rhythm', p: 'Two lessons a week in the same slots, about eight each month.' },
      { h3: 'India time', p: 'An 8pm Rhodes lesson begins at 2:30pm India time in daylight saving and 3:30pm once it ends.' }
    ],
    spec: {
      title: 'Sydney daylight saving',
      p: 'Clocks in Sydney go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027; India stays on one time. We list lessons in Sydney time.'
    }
  },
  fees: {
    h2: 'Rhodes class fees',
    intro: 'Three amounts explain the cost.',
    first: 'The first lesson is free and ends with a straight recommendation.',
    group: 'Two group lessons each week, about eight a month, with fifteen to twenty learners at one level.',
    private: 'Two lessons each week with a teacher for one learner.',
    closer: 'Everyone outside India is invoiced in US dollars. Nothing is charged before the trial and an agreed timetable; holidays and absences are set out on the pricing page.'
  },
  reviewsH2: 'Our Google reviews',
  book: {
    h2: 'Book a first lesson in Rhodes',
    intro: 'Give us an age and an interest. A nine-year-old might start by teaching a simple model to sort pictures; an adult might start with the two station forecasters.',
    success: 'Thank you. Our team will contact you shortly about the lesson.'
  },
  faq: {
    h2: 'Rhodes AI and programming questions',
    intro: 'The first questions Rhodes families and professionals ask us.',
    items: [
      {
        q: 'What is the population of Rhodes?',
        a: 'Rhodes had 11,453 residents at the 2021 Census, with 3,314 families, 5,871 private dwellings and a median age of 32.'
      },
      {
        q: 'What is transfer learning?',
        a: 'Transfer learning means training a model on a large general data set and then adapting it to a specific task with little data. It lets a model perform well where its own data is scarce.'
      },
      {
        q: 'What is the Rhodes station project?',
        a: 'Learners forecast Rhodes Station\'s monthly entries for March to August 2026. With three months of its own data the error was 16.60%; borrowing the seasonal shape from 337 other stations cut it to 11.03%.'
      },
      {
        q: 'Did the AI model beat a simple method?',
        a: 'No. Using the same month from 2025 gave 5.25% error for Rhodes, better than both models, and learners are taught to report that plainly.'
      },
      {
        q: 'Will this help with school subjects?',
        a: 'The programming and statistics overlap with NSW Digital Technologies and mathematics, and usually go further. We are independent of every school.'
      },
      { q: 'Does my child need to know coding first?', a: 'No. Children from six start with visual blocks, and most move to Python from about nine.' },
      { q: 'Can adults study AI with you?', a: 'Yes. Adults train in their own groups or privately, often to use machine learning at work.' },
      {
        q: 'Do you have a centre in Rhodes?',
        a: 'No. All lessons are live online and we have no premises in Australia. The phone number on our site is Indian.',
        boiler: true
      },
      {
        q: 'What do classes cost in Rhodes?',
        a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one.',
        boiler: true
      },
      {
        q: 'How many learners are in a group?',
        a: 'Five to ten, grouped by level and pace. One-to-one lessons are available if no group suits.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Rhodes learners',
    html: 'Across the river and rail line, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-homebush-sydney">Homebush</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-auburn-sydney">Auburn</a> have pages of their own. The <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> covers the city and <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI in New South Wales</a> the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Rhodes and Sydney',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-homebush-sydney', label: 'Homebush' },
    { href: '/vibe-coding-and-ai-agents-classes-in-auburn-sydney', label: 'Auburn' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-rhds .cg-hero-grid { align-items: start; gap: clamp(1.15rem, 3.4vw, 2.6rem); }
.cg-root.cg-rhds .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.06; }
.cg-root.cg-rhds .cg-capsule { border: 1px solid var(--cg-accent); padding: 0.8rem 0.95rem; border-radius: 3px; }
.cg-root.cg-rhds .cg-eyebrow { letter-spacing: 0.115em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-rhds .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.012em; }
.cg-root.cg-rhds .cg-grid-3 { gap: clamp(0.9rem, 2.3vw, 1.85rem); }
.cg-root.cg-rhds .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-rhds .cg-table th { letter-spacing: 0.02em; }
.cg-root.cg-rhds .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-rhds .cg-callout { border-left-width: 4px; border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Rhodes, ABS Census 2021 QuickStats, suburb Rhodes SAL13372 (read 10 October 2026): 11,453 people; median age 32 (NSW 39); 3,314 families; 5,871 private dwellings; 2.2 people per household; age 0 to 4 807 (7.0 percent; NSW 5.8); age 10 to 14 190 (1.7 percent; NSW 6.2); age 30 to 34 2,352 (20.5 percent; NSW 7.3); flat or apartment 4,765 (95.1 percent; NSW 21.7); separate house 161 (3.2 percent; NSW 65.6); Bachelor Degree level and above 6,241 (62.0 percent; NSW 27.8, Australia 26.3); Professionals 2,890 (43.8 percent; NSW 25.8). ABS ASGS 2021: 4,000 random points in SAL13372 all inside Canada Bay LGA. NSW Department of Education master dataset (Date_extracted 2026-10-02): no school with Town_suburb Rhodes; 12 schools with LGA Canada Bay. IANA Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027.',
    localProject: 'Transfer learning. Transport for NSW monthly entries (CC BY), 2024-10 to 2026-08; 338 stations with a numeric Entry value in all 23 months. Model on log entries: level = mean over the target\'s last k months before March 2026 of (log value minus month effect); month effect learned from the other 337 stations over 2024-10 to 2026-02 (deviation from each station\'s mean). Alone = mean of the target\'s last k months. Test March to August 2026, mean absolute percentage error (our calculation). Rhodes Station: k=1 12.81 vs 10.96; k=2 17.72 vs 11.56; k=3 16.60 vs 11.03; k=6 8.96 vs 8.65; k=12 7.10 vs 6.97; k=17 9.38 vs 8.88; seasonal naive (same month 2025) 5.25. All 338 stations: k=3 transfer better at 295, median 14.78 vs 10.11; k=12 better at 269, median 9.42 vs 9.05, seasonal naive median 8.69. Rhodes Station entries: 2025-01 178,854 (lowest), 2025-12 207,329, 2026-01 187,947, 2026-02 211,025, 2026-03 259,845 (highest), 2026-08 237,289.',
    requiredMentions: ['237,289', '3,314', '5,871', '2,352', '2,890', '259,845', '178,854', '16.60%', '14.78%'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Rhodes (SAL13372).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL13372' },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits, monthly station usage (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'ABS ASGS Edition 3 boundaries (SAL and LGA), geo.abs.gov.au map services.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Why Rhodes Station is busiest in March or quietest in January: not claimed; the file has counts only.',
      'Non-government schools in Rhodes: not checked, so the page claims only that no government school has a Rhodes address.',
      'Worked at home and travel to work: not used, because Census day 2021 needs context we did not verify.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, the NSW Department of Education, the City of Canada Bay or the ABS.'
    ]
  }
};
