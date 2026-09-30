'use strict';
// Hampstead, London (cg- district page, UK cluster Phase 9, row 449). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: when is a data point unusual? (Mahalanobis distance
// against plain Euclidean distance when two features are correlated: unusual values versus unusual combinations).
// Data (read 30 September 2026): Nomis Census 2021 for all 751 output areas in Camden (E09000007): TS045 car or van
// availability (NM_2063_1; 92,763 households, 59,026 with no car or van) and TS017 household size (NM_2037_1; one-person
// share). ONS output area population-weighted centroids and Wards (December 2022) boundaries: 33 output areas fall in
// Hampstead Town ward and 27 in Frognal ward.
// Our run (scratchpad hsd/mah.py): two features per area, % of households with no car and % one-person households. Camden
// means 63.01 and 38.61, standard deviations 14.81 and 11.15, correlation 0.552. Euclidean distance on standardised
// values against Mahalanobis distance (uses the covariance). Top 20 most unusual areas: 14 appear on both lists, 6 only on
// the Euclidean list, 6 only on the Mahalanobis list. Example Mahalanobis-only area: 65.0% no car, 10.7% one-person,
// Euclidean rank 46, Mahalanobis rank 16. Example Euclidean-only area: 20.2% and 20.0%, Euclidean rank in the top 20,
// Mahalanobis rank 22. Over the 97.5% chi-square cut-off (2 degrees of freedom, distance 2.72): 35 areas by Euclidean, 31
// by Mahalanobis. The 60 Hampstead Town and Frognal areas: means 44.38% no car and 33.65% one-person; 8 over the cut-off
// by Euclidean, 5 by Mahalanobis.
// Lesson family: Mahalanobis distance, covariance-aware outlier detection. Screened: "Mahalanobis" 0 hits site-wide;
// claimed in claims.txt. London page = API pagination; Camden page = percentile lines; anomaly rules (Huddersfield) are
// threshold rules on one series.
// Place facts: Census 2021 TS001 by 2022 ward (Nomis): Hampstead Town 8,016; Frognal 7,725 (7,725 is registered elsewhere,
// so it is text only); Belsize 12,299; West Hampstead 11,162; South Hampstead 12,166. postcodes.io (Camden): Hampstead
// (NW3), Vale of Health, Gospel Oak, West Hampstead, South Hampstead.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HAMPSTEAD', label: 'Hampstead, London', blurb: 'Coding and AI classes for Hampstead in north London, with a data project on spotting unusual combinations, not just unusual numbers.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-hampstead-london',
  code: 'hsd',
  accent: '#1F5F3A',
  accentRationale: 'Hampstead: a deep heath green (7.62:1 contrast), hand-picked to differ in hue from recent pages',
  pageType: 'city',
  place: {
    name: 'Hampstead',
    eyebrow: 'Hampstead, Camden, London',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'Camden', href: '/coding-classes-in-camden-london' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Hampstead, London',
  title: 'Coding and AI Classes in Hampstead, London | Python, 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Hampstead, Frognal, Belsize and West Hampstead learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Coding and AI classes for Hampstead, London, with a Census project on why an unusual combination can hide behind two ordinary-looking numbers.',
  twitterDescription: 'Hampstead coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Hampstead, London',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Hampstead and the NW3 area, taught live with statistical reasoning first.'
  },

  h1: 'Coding and AI classes in Hampstead, London',
  capsuleQ: 'Where can Hampstead learners find the best coding and AI classes?',
  capsule: 'Hampstead Town ward had 8,016 usual residents at the 2021 census, with Frognal, Belsize, West Hampstead and South Hampstead counted as separate Camden wards around it. The Vale of Health and Gospel Oak are recorded places in the same NW3 postcode district. Tuition in coding, AI, Python, vibe coding and maths reaches NW3 by video call from our tutors in India, for any age between six and 67, as solo sessions or in a class of five to ten pitched at a single level. We teach statistical reasoning before tools, so a learner can say why something is unusual, not just that a program flagged it. The first lesson is free and finishes with the course we would suggest. The Hampstead project measures how unusual each of Camden\'s 751 Census areas is in two different ways, and shows that the ordinary ruler misses some of the strangest ones. Beyond the trial the monthly fee is USD 100 (class) or USD 150 (solo).',
  lead: 'Fraud checks, quality control and AI safety filters all ask the same question: is this case unusual? The obvious way to answer is to measure how far each number sits from its average. That works for one number at a time, but real cases have several numbers that move together. Tall people are usually heavier, so a person of average height and average weight is ordinary, while someone very tall and very light is odd even though neither number alone is extreme. A measure called the Mahalanobis distance takes such relationships into account. This project tries it on Census data for Camden, where two household measures are clearly linked, and compares it with the ordinary ruler.',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Hampstead?',

  picks: {
    eyebrow: 'Hampstead course picks',
    h2: 'Hampstead courses in statistics, Python and AI',
    intro: 'Choose by the learner\'s age. Every course begins with a live lesson that is free, and no card is needed to reserve it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: spotting the odd one out, and explaining what makes it odd.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games the learner designs, builds with an AI and then tries to break.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including outlier detection on real Camden Census data.' },
      { course: 'statistics-probability-maths-course', band: 'Ages 14 and up', note: 'Correlation, covariance and distance, the ideas behind the Hampstead project.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Hampstead and its neighbours',
      h2: 'Hampstead Town, Frognal, Belsize and West Hampstead',
      intro: 'Census 2021 residents in five Camden wards, on the ward boundaries in use since 2022.',
      body: [
        { kind: 'table', caption: 'Usual residents by Camden ward, Census 2021 via Nomis', head: ['Ward', 'Residents (2021)'], rows: [
          ['Hampstead Town', '8,016'],
          ['Frognal', '7,725'],
          ['Belsize', '12,299'],
          ['West Hampstead', '11,162'],
          ['South Hampstead', '12,166']
        ] },
        { kind: 'p', text: 'Each count is the published figure for one ward and we do not add them together; "Hampstead" has no single official boundary. Postcodes.io records Hampstead itself in NW3, with the Vale of Health and Gospel Oak as suburban areas of Camden in the same district, and West Hampstead and South Hampstead in NW6. Camden schools follow England\'s national curriculum, so give us the term dates and lessons will miss the holidays.' },
        { kind: 'callout', h3: 'London, Camden and our approach', p: 'The wider picture is on <a class="cg-inline-link" href="/best-coding-class-in-london">our London page</a> and <a class="cg-inline-link" href="/coding-classes-in-camden-london">coding classes in Camden</a>. Why we put reasoning ahead of tools is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Hampstead project',
      h2: 'Unusual values or unusual combinations? Mahalanobis distance on Camden Census areas',
      intro: 'Two linked measurements, two ways of measuring distance, and two different lists of outliers.',
      body: [
        { kind: 'p', text: 'The learner downloads two Census 2021 tables from the Nomis API for all 751 output areas in Camden. Across 92,763 households, 59,026 have no car or van. For each small area the program works out two percentages: households with no car, and households where one person lives alone. Across Camden the averages are 63.01% and 38.61%, and the two move together, with a correlation of 0.552: areas with more people living alone tend to have fewer cars.' },
        { kind: 'p', text: 'The ordinary method standardises each percentage and measures straight-line (Euclidean) distance from the average. The Mahalanobis distance does the same job but first accounts for the link between the two measures, so that being high on both, which is common, counts as less surprising than being high on one and low on the other.' },
        { kind: 'table', caption: 'The 20 most unusual Camden output areas by each method, our Python run on Census 2021 data', head: ['Result', 'Areas'], rows: [
          ['On both top-20 lists', '14'],
          ['Only on the Euclidean list', '6'],
          ['Only on the Mahalanobis list', '6'],
          ['Beyond the usual 97.5% cut-off, Euclidean', '35'],
          ['Beyond the usual 97.5% cut-off, Mahalanobis', '31']
        ] },
        { kind: 'p', text: 'The two rulers agree on 14 of the top 20 and disagree on the rest. One area has 65.0% of households without a car, almost exactly the Camden average, but only 10.7% living alone. Neither figure is dramatic, and the ordinary ruler ranks it 46th. The Mahalanobis distance ranks it 16th, because so few cars with so few single-person homes is a rare pairing here. The reverse also happens: an area with about 20% on both measures looks extreme to the ordinary ruler, yet low on both is exactly what the correlation predicts, so it drops out of the Mahalanobis top 20. Among the 60 areas in Hampstead Town and Frognal wards, where on average 44.38% of households have no car, 8 pass the cut-off on the ordinary ruler and 5 on the Mahalanobis one.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Line up toy animals by height and weight and find the one that does not fit the pattern.' },
          { h3: 'Ages 11 to 15', p: 'Plot Camden\'s areas on a scatter chart in Python and circle the points that sit away from the cloud.' },
          { h3: 'Ages 15 and up', p: 'Compute the covariance matrix and both distances, then explain every area the two lists disagree on.' }
        ] },
        { kind: 'callout', h3: 'Census data, our distances', p: 'Household counts are Office for National Statistics Census 2021 data from Nomis, and boundaries are from the ONS Open Geography Portal, under the Open Government Licence. The percentages, distances and rankings are our own calculations. "Unusual" here is a statistical description, not a judgement about any neighbourhood.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Outliers and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Choose the ruler and you have chosen which oddities get noticed.',
      body: [
        { kind: 'table', caption: 'From the Camden distances to working with AI', head: ['In the outlier project', 'When AI flags something as unusual'], rows: [
          ['Two measures were correlated at 0.552', 'Features rarely vary independently'],
          ['6 of the top 20 changed with the ruler', 'The method chooses the outliers'],
          ['A 65.0% and 10.7% area ranked 46th, then 16th', 'Odd combinations hide behind ordinary values'],
          ['A low-low area stopped looking extreme', 'Expected patterns are not anomalies'],
          ['A cut-off of 97.5% was our choice', 'Thresholds are decisions, not facts']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to "find the outliers" in a table and it will usually check each column separately, which is the ordinary ruler again. With vibe coding the learner explains the goal and an AI writes the code; our Hampstead learners then ask which distance it used and whether the columns are related. AI agents that watch for fraud, faults or odd behaviour make the same choice out of sight, and what they miss depends on it. We hold agent building until Python is a working tool for the learner, which tends to mean sixth form or later, and we teach Copilot Studio agents solely in private lessons. The principle is argued on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>; the agent syllabus itself is on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the UK students\' agents page</a>.' },
        { kind: 'p', text: 'The Office for National Statistics, Nomis and postcodes.io have no connection with Modern Age Coders. We used only what they publish openly, and the analysis and its mistakes are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From odd one out to outlier detection',
    intro: 'School year gives a starting point; the free lesson shows the real level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Patterns, exceptions and saying why something stands out.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps made with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, statistics and AI', p: 'Scatter plots, covariance and detection methods next to GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Data science and agents', p: 'Python, statistics, machine learning and AI agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and anomalies',
    h2: 'What is Mahalanobis distance, and when should you use it instead of Euclidean distance?',
    intro: 'Mahalanobis distance measures how far a point is from the centre of a dataset after allowing for how the features vary together, so use it instead of Euclidean distance whenever the features are correlated.',
    p1: 'On 751 Camden Census areas with two measures correlated at 0.552, the two distances agreed on only 14 of the 20 most unusual areas, and one area ranked 46th by Euclidean distance came 16th by Mahalanobis.',
    p2: 'Learners who have compared the two ask of any AI anomaly report: unusual by which measure, and were the features treated together?',
    closer: 'Knowing which ruler was used keeps Hampstead teenagers from taking an AI\'s "anomaly" at face value, and that habit comes from writing the code themselves.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Live lessons for NW3 and NW6, online',
    intro: 'You need a computer with a camera and broadband that carries a video call.',
    cells: [
      { h3: 'The learner does the work', p: 'Every line of code and every prompt is typed by the student, with the tutor following on screen share and asking for the reasoning.' },
      { h3: 'First topic from the trial', p: 'The free session shows what is secure and what is not; exam boards are noted where relevant.' },
      { h3: 'Trial without charge', p: 'Lesson one is free and ends with a named course.' },
      { h3: 'Classes of similar level', p: 'Five to ten learners from across the UK share a class at one stage.' },
      { h3: 'Two lessons a week', p: 'Paused for school holidays.' },
      { h3: 'Same hour all year', p: 'Tutors adjust for British Summer Time so your slot stays where it is.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level with the same evening free seldom live within a walk of each other, even in London. Video removes the problem.' }
  },

  fees: {
    h2: 'Hampstead fees',
    intro: 'Hampstead learners pay our international rate, the one used everywhere outside India.',
    first: 'A full free lesson, then a course recommendation.',
    group: 'About eight live lessons a month in a small class.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'There is no sterling tariff: fees are in US dollars, and nothing is invoiced before the trial has settled which course and which weekly hour. Holidays, absences and changing between class and private lessons are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from north London households and learners elsewhere',

  book: {
    h2: 'Book a free Hampstead lesson',
    intro: 'An age, a school year and a single hobby are enough for us to plan. Depending on age, the trial could mean hunting the odd one out in a set of cards, steering an AI through building a small Scratch game, writing a few lines of Python, or plotting Census areas on a scatter chart.',
    success: 'Thank you. Your Hampstead request has reached us.'
  },

  faq: {
    h2: 'Hampstead questions',
    intro: 'Outliers, the Census project, Python, vibe coding and practical details.',
    items: [
      { q: 'How many people live in Hampstead?', a: 'Hampstead has no single official boundary. At the 2021 census Hampstead Town ward had 8,016 usual residents, with Frognal, Belsize, West Hampstead and South Hampstead counted as separate wards.' },
      { q: 'Are coding and AI classes available online in Hampstead?', a: 'Yes, as live video lessons for ages 6 to 67 across NW3, NW6 and the rest of Camden.' },
      { q: 'What is an outlier?', a: 'A data point that sits far from the rest. How far counts as "far" depends on the distance you use and the cut-off you choose.' },
      { q: 'What is covariance?', a: 'A number that says whether two measurements tend to rise and fall together. Mahalanobis distance uses it; Euclidean distance ignores it.' },
      { q: 'What does the Hampstead project involve?', a: 'Measuring how unusual each of Camden\'s 751 Census areas is with Euclidean and Mahalanobis distance, and explaining the areas where the two disagree.' },
      { q: 'Is vibe coding on the timetable?', a: 'It is, whatever the age: the learner explains the idea, an AI drafts code, and the learner tests and repairs it.' },
      { q: 'When can learners build AI agents?', a: 'After Python has become a working tool for them, typically sixth formers and adults; Copilot Studio is taught privately.' },
      { q: 'Is exam tuition offered?', a: 'GCSE and A level computer science and maths are both taught, for understanding; no grade is ever promised.' },
      { q: 'What do lessons cost?', a: 'Nothing for the trial; then USD 100 monthly for a class place, USD 150 monthly for solo tuition.' },
      { q: 'What happens at half term and in the holidays?', a: 'Lessons stop for those weeks once we have your dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More London pages',
    html: 'Each of these has its own project: <a class="cg-inline-link" href="/coding-classes-in-camden-london">Camden</a>, <a class="cg-inline-link" href="/best-coding-class-in-london">London</a>, <a class="cg-inline-link" href="/coding-classes-in-brent-london">Brent</a> and <a class="cg-inline-link" href="/coding-classes-in-hackney-london">Hackney</a>. Everywhere else is reached from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hampstead and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-camden-london', label: 'Camden' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hsd .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-hsd .cg-hero h1 { font-weight: 760; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-hsd .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-hsd .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hsd .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-hsd .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-hsd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hsd .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-hsd .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-hsd .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Camden (E09000007), London. Census 2021 TS001 by 2022 ward via Nomis: Hampstead Town 8,016; Frognal 7,725; Belsize 12,299; West Hampstead 11,162; South Hampstead 12,166. postcodes.io (Camden): Hampstead (NW3), Vale of Health, Gospel Oak, West Hampstead, South Hampstead.',
    localProject: 'Census 2021 TS045 and TS017 for 751 Camden OAs (92,763 households, 59,026 no car). Features: % no car, % one-person; means 63.01/38.61, sd 14.81/11.15, r 0.552. Top 20 Euclidean vs Mahalanobis: 14 shared, 6 + 6 differ. Example 65.0%/10.7%: Euclidean rank 46, Mahalanobis 16. 97.5% cut-off: 35 Euclidean, 31 Mahalanobis. Hampstead Town + Frognal 60 OAs: mean no-car 44.38%; 8 vs 5 over cut-off. Lesson family: Mahalanobis distance, covariance-aware outliers.',
    requiredMentions: [
      '8,016',
      '12,299',
      '92,763',
      '59,026',
      'Frognal',
      'Vale of Health',
      'West Hampstead',
      'South Hampstead',
      'Mahalanobis distance'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001, TS045 and TS017 via Nomis (wards and output areas in Camden).', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Wards (December 2022) boundaries and output area population-weighted centroids, ONS Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: Hampstead and suburban areas in Camden.', url: 'https://api.postcodes.io/places?q=Vale%20of%20Health' }
    ],
    rejectedClaims: [
      'Heath, literary or house-price claims about Hampstead: not read from a source; not claimed.',
      'A single population for "Hampstead": no official boundary; ward figures shown separately and not summed.',
      'Why any area is unusual: no cause claimed; areas are not named or located.',
      'Camden total 210,136: registered by the Camden page; not repeated as a mention here.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
