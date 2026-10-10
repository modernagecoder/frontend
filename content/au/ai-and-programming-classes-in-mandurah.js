'use strict';
// Mandurah (cg- regional city page, Australia cluster Phase 7, row 197). Shaped page (AI and programming).
// Spine: when a model guesses straight-line distance from distance along a road, does one error band fit every
// distance? Data: Main Roads WA, SLK Points for Road Network (CC BY 4.0), ArcGIS FeatureServer layer 0, queried
// 10 October 2026 for the rectangle 115.66 to 115.80 E, 32.62 to 32.47 S (scratchpad au/r8/dl/slk_0/2000/4000.json):
// 5,887 points on 1,557 road carriageways. Our code (au/r8/mnd_hetero.py): carriageways with 10 or more points and
// no SLK gap over 0.15 km, pairs from each run's first point (x = SLK distance along the road, y = straight-line
// distance): 1,824 pairs on 102 roads. Restricted to x up to 4 km: 1,623 pairs, slope through the origin 0.8710,
// pooled residual sd 0.2587 km. Residual sd by band: 0 to 0.5 km 0.0276; 0.5 to 1 km 0.1070; 1 to 2 km 0.2764; 2 to 4
// km 0.6058. Fixed band +/-1.96 sd (+/-507 m) covers 100.0, 99.6, 92.2 and 78.6 percent (95.4 overall). Band
// proportional to distance (c 0.2909) covers 99.4, 97.2, 91.2 and 85.4 percent (95.0 overall), mean widths 0.175,
// 0.461, 0.844 and 1.637 km. Weighted least squares (weights 1/x^2) slope 0.9132. Beyond 4 km pairs come mostly from a
// few long main roads (4 to 8 km sd 0.1235), so the analysis stops at 4 km. Most pairs: Lakelands Lake Clifton Rd 185,
// Pinjarra Rd 89, Melville Mandurah Hwy 61. Transperth GTFS was considered and dropped: its licence restricts use of
// PTA trademarks with the data. Lesson family: heteroscedastic residuals and prediction bands; screened free site-wide
// on 10 October 2026 and claimed by AU-R8.
// Place facts read raw on 10 October 2026: ABS Census 2021 QuickStats, Mandurah LGA (LGA55110), with Western Australia
// and Australia: 90,306 people; median age 45; 25,111 families; 44,094 private dwellings; 2.4 people per household;
// separate house 29,540 (83.5 percent; WA 79.7; Australia 72.3); flat or apartment 1,006 (2.8; WA 6.5; Australia 14.2);
// Professionals 5,215 (14.4; WA 22.0; Australia 24.0); Technicians and Trades Workers 6,739 (18.6; WA 15.3; Australia
// 12.9); Bachelor Degree level and above 9,103 (12.2; WA 23.8; Australia 26.3); aged 15 to 19: 4,962 (5.5); aged 20 to
// 24: 4,506 (5.0); aged 65 to 69: 6,242 (6.9; WA 5.0; Australia 5.1). ABS ERP Mandurah LGA (55110) 30 June 2025:
// 106,827. WA Department of Education 2027 term dates. Excluded by the cluster rules: income, rent, mortgage, ancestry,
// birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'MANDURAH', label: 'Mandurah', blurb: 'Mandurah, where thousands of road reference points show why one error band cannot fit every distance.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-mandurah',
  code: 'mndr',
  accent: '#4A609E',
  accentRationale: 'Mandurah: a muted estuary blue (HSV saturation 0.53, value 0.62, hue 224), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 6.4:1 on white and 5.1:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Mandurah',
    eyebrow: 'Mandurah, Peel region, Western Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Western Australia', href: '/coding-and-ai-classes-in-western-australia' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Mandurah, Western Australia',
  title: 'AI and Programming Classes in Mandurah | Live Online Teacher',
  description: 'Live online AI and programming classes for Mandurah teenagers and adults, with a project that tests whether one error band fits every distance on local roads.',
  ogDescription: 'AI and programming for Mandurah learners, built on Main Roads WA data and a question every prediction should answer: how wrong could it be?',
  twitterDescription: 'Mandurah AI and programming classes, live online, first lesson free.',
  ogImageCourse: 'artificial-intelligence-complete-masterclass-college',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Mandurah Learners',
    description: 'Level-matched online Python, regression, prediction intervals and machine learning for teenagers and adults in Mandurah and the Peel region, taught live in English.'
  },

  h1: 'AI and programming classes in Mandurah',
  capsuleQ: 'What are the best AI and programming classes in Mandurah?',
  capsule: 'Live lessons in which a Mandurah teenager or adult builds a prediction from real Western Australian data and then measures honestly how far off it can be. The City of Mandurah held 90,306 people at the 2021 Census. Classes are online, in a small group at the same level or one to one, and the first costs nothing.',
  lead: 'Main Roads WA marks its roads with reference points every hundred metres or so, each one tagged with its distance along the road and its exact position. Around Mandurah that open dataset holds 5,887 points. Pair them up along each road and a simple question appears: if you know how far a trip runs along the road, how well can you predict the straight-line distance? A line through the data answers on average. But the errors are tiny for short hops and large for longer ones, so a single error band of plus or minus 507 metres is far too wide for a 300 metre trip and too narrow for a 3 kilometre one. Our Mandurah learners find out why a model\'s uncertainty must grow with what it is predicting.',
  wa: 'Hello Modern Age Coders, I would like a free AI and programming class for a learner in Mandurah.',

  picks: {
    eyebrow: 'Course picks for Mandurah',
    h2: 'Routes in for a Mandurah learner',
    intro: 'Each course reaches the road-distance project below. The free lesson recommends one, with no card details asked for.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning basics, from fitting a line to measuring how wrong it is.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Python with real tables, charts of errors and fair comparisons between models.' },
      { course: 'artificial-intelligence-complete-masterclass-college', band: 'University and adult', note: 'AI and machine learning in full, including uncertainty and evaluation.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'Regression, residual analysis, weighting and intervals that hold up.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Mandurah in the Census',
      h2: 'A coastal city of 90,306 south of Perth',
      intro: 'The 2021 Census for the City of Mandurah council area, set beside Western Australia and Australia.',
      body: [
        { kind: 'p', text: 'Mandurah counted 90,306 residents with a median age of 45, living as 25,111 families in 44,094 private dwellings at 2.4 people per household.' },
        { kind: 'table', caption: 'Mandurah beside WA and Australia (2021 Census shares)', head: ['Measure', 'Mandurah', 'WA', 'Australia'], rows: [
          ['Technicians and trades workers (6,739 people)', '18.6%', '15.3%', '12.9%'],
          ['Professionals (5,215 people)', '14.4%', '22.0%', '24.0%'],
          ['Bachelor degree or higher (9,103 people)', '12.2%', '23.8%', '26.3%'],
          ['Residents aged 65 to 69 (6,242 people)', '6.9%', '5.0%', '5.1%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Houses', p: 'Separate houses numbered 29,540, 83.5% of dwellings, against 79.7% across WA.' },
          { h3: 'Apartments', p: 'Flats and apartments numbered 1,006, only 2.8% of dwellings.' },
          { h3: 'Teenagers', p: 'The count included 4,962 people aged 15 to 19 and 4,506 aged 20 to 24.' }
        ] },
        { kind: 'p', text: 'The ABS estimate for the City of Mandurah at 30 June 2025 is 106,827. Census values include small random adjustments for privacy, so a table\'s rows can differ from its total; we print what the bureau printed and never add rows to make a total.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Does one error band fit every distance on Mandurah\'s roads?',
      intro: 'Pairs of Main Roads WA reference points on the same road, comparing distance along the road with distance as the crow flies, for trips up to 4 kilometres.',
      body: [
        { kind: 'table', caption: 'How the errors grow with distance, 1,623 pairs (our analysis, 10 October 2026)', head: ['Distance along the road', 'Pairs', 'Typical error', 'Fixed band covers', 'Scaled band covers'], rows: [
          ['Up to 0.5 km', '520', '28 m', '100.0%', '99.4%'],
          ['0.5 to 1 km', '503', '107 m', '99.6%', '97.2%'],
          ['1 to 2 km', '408', '276 m', '92.2%', '91.2%'],
          ['2 to 4 km', '192', '606 m', '78.6%', '85.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Fit a line', p: 'A straight line through the origin predicts the crow-flies distance as 0.8710 times the road distance. On average that is a fair summary of how much the roads bend.' },
          { h3: '2. Look at the misses', p: 'The typical miss grows from 28 metres on short hops to 606 metres between 2 and 4 kilometres. Statisticians call errors whose size changes like this heteroscedastic.' },
          { h3: '3. Test the band', p: 'A single band of plus or minus 507 metres catches 95.4% of all pairs, which sounds right, but only 78.6% of the longest group, while being absurdly wide for the shortest.' }
        ] },
        { kind: 'callout', h3: 'An average that hides two failures', p: 'Overall coverage of 95.4% looks like a well calibrated model. It is really two mistakes cancelling: far too cautious for short trips and overconfident for long ones. A band that grows in proportion to distance is much narrower where errors are small, about 175 metres wide on average for the shortest trips, and catches more of the long ones. Weighting the fit so that noisy long pairs count less also moves the slope from 0.8710 to 0.9132.' },
        { kind: 'p', text: 'Pairs come from 102 roads whose points run continuously, led by Lakelands Lake Clifton Road, Pinjarra Road and Melville Mandurah Highway. Beyond 4 kilometres nearly all pairs come from a few long main roads, so the analysis stops there. Every fit and percentage is our own calculation from the Main Roads WA open data.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Honest uncertainty',
      h2: 'Checking whether a model\'s errors behave',
      intro: 'Practised on Mandurah\'s road points, then used on house price models, delivery time estimates or any AI prediction with a confidence figure.',
      body: [
        { kind: 'table', caption: 'Checks on the Mandurah road model', head: ['Check', 'Method', 'What it showed'], rows: [
          ['Plot residuals against the input', 'Scatter of error against road distance', 'A funnel that widens to the right'],
          ['Split coverage by group', 'Band coverage for each distance range', '100.0% for short trips, 78.6% for long'],
          ['Let the band grow', 'Width proportional to distance', 'Closer to 95% in three of four ranges, far narrower for short trips'],
          ['Weight the fit', 'Least squares weighted by 1 over distance squared', 'Slope rises from 0.8710 to 0.9132']
        ] },
        { kind: 'p', text: 'An overall accuracy figure is a single number covering many situations. Breaking it down by the size of the input, or by any group that matters, is how hidden overconfidence is found, and it costs only a few lines of code.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Fit the line, plot the residuals and explain in a paragraph why the points fan out.' },
          { h3: 'University students', p: 'Weighted least squares, conformal-style bands and testing calibration within groups.' },
          { h3: 'Adults at work', p: 'Any forecast with a plus or minus attached deserves the same check by size and by group.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is not affiliated with Main Roads Western Australia, the ABS or the City of Mandurah. The road data and statistics are theirs, used under their open licences; the analysis is ours.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Mandurah',
      h2: 'Perth time and the WA school year',
      intro: 'Details that shape when a Mandurah learner can take a live lesson.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Steady clock', p: 'Mandurah keeps Western Australian time, UTC plus 8, with no daylight saving in any season.' },
          { h3: 'India time', p: 'India time is two and a half hours behind Mandurah all year, which makes early evening slots easy to fill.' },
          { h3: 'Eastern states', p: 'Sydney is two hours ahead of Mandurah in winter and three during eastern daylight saving.' }
        ] },
        { kind: 'spec', title: 'WA public school terms in 2027', p: 'The department lists Term 1 from Monday 1 February to Friday 9 April, Term 2 from Monday 26 April to Friday 2 July, Term 3 from Monday 19 July to Friday 24 September and Term 4 from Monday 11 October to Thursday 16 December.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first scatter plot to calibrated models',
    intro: 'Age bands are a starting guide; the free lesson decides.',
    cols: [
      { band: 'Ages 12 to 14', h3: 'Plotting data', p: 'Reading a table, drawing points and describing a pattern in words.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Lines and errors', p: 'Fitting lines, measuring residuals and seeing where a model fails.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'University', h3: 'Uncertainty', p: 'Weighted fits, prediction intervals and calibration checks.', courses: ['data-science-complete-masterclass-college', 'artificial-intelligence-complete-masterclass-college'] },
      { band: 'Adults', h3: 'Models at work', p: 'Building and auditing predictions that colleagues will rely on.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant report the right uncertainty?',
    intro: 'It tends to give one number for everything.',
    p1: 'Ask a chatbot to fit this data and add a 95% interval, and it will usually compute one standard deviation from all the residuals and apply it everywhere. The summary statistics look perfect, and the band is wrong for nearly every individual trip.',
    p2: 'Our Mandurah learners let AI write the regression, then split the errors by distance and test coverage in each range themselves. When the tool says 95%, they ask: for whom?',
    closer: 'A Mandurah learner who has seen a 95% band cover only 78.6% of the cases that matter will question any confidence figure an AI produces, in 2026 and long after.',
    blogAnchor: 'how to learn AI properly rather than just using it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Peel region learners, live from home',
    intro: 'An online lesson reaches Mandurah without the trip up the freeway.',
    cells: [
      { h3: 'Kept in WA time', p: 'Every slot is set in Western Australian time, which never changes during the year.' },
      { h3: 'WA year levels', p: 'Teachers work to WA year levels, ATAR students included, and teach entirely in English.' },
      { h3: 'Learn first, decide later', p: 'The trial is a genuine programming lesson. Afterwards we suggest a course and time, and payment details are never taken.' },
      { h3: 'Five to ten learners', p: 'Each group shares one level, with learners from different places so every stage has a sensible hour.' },
      { h3: 'Twice weekly sessions', p: 'About eight a month, with holiday and exam breaks agreed early.' },
      { h3: 'Adults and retirees too', p: 'Daytime and evening groups suit adults at any stage of working life, as do one-to-one lessons.' }
    ],
    spec: { title: 'Times in Mandurah time', p: 'All lesson times are written in Western Australian time, so nobody converts from the East Coast.' }
  },

  fees: {
    h2: 'Cost of AI and programming classes in Mandurah',
    intro: 'Here is everything you pay for.',
    first: 'One free lesson, with a recommended level, course and time at the end.',
    group: 'Close to eight group lessons each month, with five to ten learners at one level.',
    private: 'Close to eight private lessons each month with the same teacher.',
    closer: 'Mandurah pays the national US dollar rate, with nothing added or removed for location. No payment is due until the trial fixes a course and slot, and the pricing page sets out holidays, missed lessons and changes of format.'
  },

  reviewsH2: 'Google reviews from our students and families',

  book: {
    h2: 'A few details and we will prepare the first lesson',
    intro: 'We choose the opening task ahead of time: a scatter plot for a Year 8 beginner, the residual funnel for a Year 11 student, or the full calibration test for an adult.',
    success: 'Thank you. We will be in touch soon about an AI and programming class in Mandurah.'
  },

  faq: {
    h2: 'Questions about AI and programming in Mandurah',
    intro: 'What Mandurah families and adult learners ask before they begin.',
    items: [
      { q: 'How many people live in Mandurah?', a: 'The 2021 Census counted 90,306 people in the City of Mandurah council area. The ABS estimate at 30 June 2025 is 106,827.' },
      { q: 'What does heteroscedastic mean?', a: 'Heteroscedastic describes errors whose spread changes with the input. In the Mandurah road data the typical error is about 28 metres for trips under half a kilometre and about 606 metres for trips of 2 to 4 kilometres, so one fixed error band cannot suit both.' },
      { q: 'What is the Mandurah road distance project?', a: 'Learners download Main Roads WA reference points around Mandurah, pair points on the same road, predict straight-line distance from road distance, and test whether a fixed or a distance-scaled error band gives honest coverage at every distance.' },
      { q: 'What is an SLK?', a: 'SLK stands for straight line kilometre, the distance along a road from its starting point that Main Roads WA uses to locate places on the network. The open data gives the SLK and coordinates of each reference point.' },
      { q: 'Can ATAR students join?', a: 'Yes. Year 11 and 12 students fit lessons around ATAR courses, and assessed school work always stays their own.' },
      { q: 'What lesson times work in Mandurah?', a: 'After school, evenings, weekends and some daytime slots for adults, agreed in the trial and written in Western Australian time. India time is two and a half hours behind Mandurah year round.' },
      { q: 'Are younger children catered for?', a: 'Yes, from age 6 with visual coding, although the road data project is designed for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders office in Mandurah?', a: 'No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.', boiler: true },
      { q: 'What do AI and programming classes in Mandurah cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How large are the groups?', a: 'Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'More in Western Australia',
    h2: 'Nearby pages for Mandurah learners',
    html: 'Up the coast is <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">online coding and Python in Perth</a>, with <a class="cg-inline-link" href="/coding-classes-for-kids-perth">coding classes for kids in Perth</a> for younger learners. Further south there is <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-bunbury">a Bunbury page on vibe coding and AI agents</a>, and the whole state is covered at <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">coding and AI classes in Western Australia</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Mandurah and Western Australia',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/vibe-coding-and-ai-agents-classes-in-bunbury', label: 'Bunbury' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-mndr .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.1vw, 2.6rem); }
.cg-root.cg-mndr .cg-hero h1 { font-weight: 720; letter-spacing: -0.019em; line-height: 1.06; }
.cg-root.cg-mndr .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-mndr .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-mndr .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.012em; }
.cg-root.cg-mndr .cg-grid-3 { gap: clamp(0.95rem, 2.5vw, 1.8rem); }
.cg-root.cg-mndr .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-mndr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mndr .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-mndr .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Mandurah LGA, ABS Census 2021 QuickStats, area code LGA55110, with Western Australia and Australia (read 10 October 2026): 90,306 people; median age 45; 25,111 families; 44,094 private dwellings; 2.4 people per household; separate house 29,540 (83.5 percent; WA 79.7; Australia 72.3); flat or apartment 1,006 (2.8 percent; WA 6.5; Australia 14.2); Professionals 5,215 (14.4 percent; WA 22.0; Australia 24.0); Technicians and Trades Workers 6,739 (18.6 percent; WA 15.3; Australia 12.9); Bachelor Degree level and above 9,103 (12.2 percent; WA 23.8; Australia 26.3); aged 15 to 19: 4,962 (5.5 percent); aged 20 to 24: 4,506 (5.0 percent); aged 65 to 69: 6,242 (6.9 percent; WA 5.0; Australia 5.1). ABS ERP Mandurah LGA (55110) 30 June 2025: 106,827. WA Department of Education 2027 term dates: Term 1 Monday 1 February to Friday 9 April; Term 2 Monday 26 April to Friday 2 July; Term 3 Monday 19 July to Friday 24 September; Term 4 Monday 11 October to Thursday 16 December. IANA tz Australia/Perth UTC+8, no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Heteroscedastic residuals and prediction bands. Main Roads WA, SLK Points for Road Network (CC BY 4.0), FeatureServer layer 0, queried 10 October 2026, envelope 115.66 to 115.80 E, -32.62 to -32.47: 5,887 points, 1,557 carriageways (ROAD_NAME, RoadCway). Runs with 10 or more points and SLK gaps up to 0.15 km: 102 roads, 1,824 pairs from each run\'s first point (x SLK difference, y equirectangular straight-line distance). x up to 4 km: n 1,623; slope through origin 0.8710; pooled residual sd 0.2587 km. By band: 0 to 0.5 km n 520 sd 0.0276; 0.5 to 1 n 503 sd 0.1070; 1 to 2 n 408 sd 0.2764; 2 to 4 n 192 sd 0.6058. Fixed band +/-0.507 km coverage 100.0, 99.6, 92.2, 78.6 (95.4 overall). Proportional band c 0.2909: coverage 99.4, 97.2, 91.2, 85.4 (95.0 overall), mean widths 0.175, 0.461, 0.844, 1.637 km. WLS (1/x^2) slope 0.9132. Most pairs: Lakelands Lake Clifton Rd 185, Pinjarra Rd 89, Melville Mandurah Hwy 61, Lakes Rd 53, Kwinana Fwy 53.',
    requiredMentions: [
      '90,306',
      '25,111',
      '44,094',
      '106,827',
      '5,887 points',
      '1,623 pairs',
      'plus or minus 507 metres',
      'from 0.8710 to 0.9132',
      'Peel region learners, live from home'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Mandurah LGA (LGA55110): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA55110' },
      { claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Mandurah LGA 55110, total persons, 2025.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.55110.LGA2025.A?format=csvfilewithlabels' },
      { claim: 'Main Roads Western Australia, SLK Points for Road Network (CC BY 4.0), listed on data.wa.gov.au.', url: 'https://catalogue.data.wa.gov.au/dataset/mrwa-slk-points-for-road-network' },
      { claim: 'WA Department of Education, future term dates (2027).', url: 'https://www.education.wa.edu.au/future-term-dates' }
    ],
    rejectedClaims: [
      'Transperth timetable data: considered for the project but dropped because its licence restricts use of PTA trademarks with the data.',
      'Travel times, traffic volumes or crash figures on Mandurah roads: not part of the reference point data and excluded by the cluster rules.',
      'Any reason the roads bend, such as particular waterways or estates: not verified against a source, so not stated.',
      'Pairs longer than 4 km: dominated by a few long main roads, so excluded from the error analysis and not presented as representative.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Main Roads WA, the ABS or the City of Mandurah.'
    ]
  }
};
