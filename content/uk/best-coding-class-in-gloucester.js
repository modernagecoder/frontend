'use strict';
// Gloucester (cg- city page, UK cluster Phase 4). Spine: matching two curves that do not keep time.
// Dynamic time warping and event matching on Environment Agency river level gauges along the tidal Severn
// (flood-monitoring API, readings 25 August to 23 September 2026 in UTC, levels in metres above each gauge's stage
// datum, read 23 September 2026; scratchpad glo/dtw.py, reach.py): Sharpness (2195, 5-minute), Epney (2153),
// Minsterworth (2102), Gloucester (2165), all put on a 15-minute grid (21 or 22 missing slots each). 54 high tides at
// Sharpness (local maxima at least 8 h apart). Gloucester gauge range 0.14 to 1.89 m; Sharpness 0.28 to 9.69 m. Rise
// at Gloucester within 4 h of each Sharpness peak: 16 tides raised it by 0.3 m or more (lowest Sharpness peak among
// them 7.57 m), while a 7.76 m tide did not; for a 0.5 m rise, 15 tides (lowest 7.57) with an 8.20 m tide below the
// line. Correlation between Sharpness peak and Gloucester rise 0.79. For the 15 tides with a rise of at least 0.5 m
// the Gloucester peak came 105 to 240 minutes after Sharpness, median 120. Largest: 9.69 m at 20:45 on 12 September,
// Gloucester up 1.65 m two hours later; 9.54 m on 13 September 21:30 (rise 1.47 m); 9.53 m on 29 August 20:45 (1.61
// m). Standardised series, Sharpness against Gloucester: best fixed lag 150 minutes, mean absolute gap 0.849
// standard deviations; dynamic time warping with a 4 h band, mean gap 0.547, shifts from -30 to 240 minutes (it also
// warps through neap tides that never reach Gloucester).
// Lesson family: dynamic time warping and event matching (fixed lag against elastic alignment, band constraints,
// matching events that are not the same event). Screened 23 September 2026: dynamic time warping 0 hits; distinct
// from Manchester fixed-lag cross-correlation and the Liverpool and Cork tidal pages.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Gloucester E07000081: TS001 132,416 usual residents,
// 130,621 in households, 1,795 in communal establishments; TS007A 7,459 aged 4 and under (5.6 percent, England 5.4),
// 8,331 aged 5 to 9 (6.3, England 5.9), 8,170 aged 10 to 14 (6.2, England 6.0), 8,486 aged 20 to 24 (6.4, England
// 6.0), 9,807 aged 30 to 34 (7.4, England 7.0); TS068 25,155 students of 124,957 aged 5 and over (20.1 percent,
// England 20.4); TS006 3,266.6 usual residents per square km (England 433.5). Gloucester Cathedral, Heritage: a site
// of continuous Christian worship since 678-9 AD; architecture spanning almost 1,000 years; the tomb of a king.
// East Cloister Project page: the Great Cloister, built in the late fourteenth century, contains the earliest known
// example of fan vaulting anywhere in the world.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'GLOUCESTER', blurb: 'The cathedral city on the Severn, with a project that follows the tide upriver from Sharpness and learns when two curves belong together.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-gloucester',
  code: 'glo',
  accent: '#931A1A',
  accentRationale: 'Gloucester: a deep cathedral red from the solver (7.09:1 on every paper tint, dE 7.3 from the nearest used accent), brighter than the Wolverhampton red and cooler than the Swansea copper',
  pageType: 'city',
  place: {
    name: 'Gloucester',
    eyebrow: 'Gloucester, Gloucestershire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Gloucester' },
      { type: 'AdministrativeArea', name: 'Gloucestershire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Gloucester, England',
  title: 'Best Coding Classes in Gloucester | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Gloucester learners aged 6 to 67, from Kingsholm and Hucclecote to Quedgeley. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Gloucester, on a page that follows the tide up the Severn with dynamic time warping and finds most tides never reach the city.',
  twitterDescription: 'Gloucester learners aged six to sixty-seven can learn coding, Python and AI with us in live online lessons, starting free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Gloucester Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, time series, AI and mathematics taught live online in English to Gloucester children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Gloucester',
  capsuleQ: 'What are the best coding classes in Gloucester?',
  capsule: 'The 2021 census counted 132,416 usual residents in Gloucester, and children aged five to nine made up 6.3% of them, against 5.9% in England. Gloucester Cathedral says its site has seen continuous Christian worship since 678 to 679 AD, and that its Great Cloister holds the earliest known fan vaulting in the world. Anyone in Gloucester aged between six and sixty-seven can have a live video lesson with one of our India-based teachers, either alone or with five to ten classmates at the same stage, timed for UK after-school and evening hours. The first lesson is free, and after that a group place is USD 100 a month and private teaching USD 150.',
  lead: 'Environment Agency gauges measure the River Severn every few minutes at Sharpness, Epney, Minsterworth and Gloucester. At Sharpness the tide rises and falls by several metres twice a day. Does each tide reach Gloucester, and when? Line the two records up with one fixed delay and even the closest choice, 150 minutes, still leaves them badly out of step. Dynamic time warping lets the delay stretch and shrink, and the match improves sharply. Look closer, though, and in four weeks only 16 of 54 tides lifted Gloucester by 30 centimetres or more; the rest barely register. The flexible method was also bending itself to match river wiggles that were not the tide at all. Our teenagers learn both lessons.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Gloucester.',

  picks: {
    eyebrow: 'Course picks for Gloucester',
    h2: 'Four courses for the city on the Severn',
    intro: 'Pick the course that fits what the learner enjoys. Every one opens with a free live lesson, and there is no card to enter.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding for young learners, with timing puzzles where two things must happen in step.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real sensor records in Python, from putting readings on a common clock to comparing and aligning them.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning for teenagers, where comparing sequences such as speech and movement uses the same ideas as this page.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'Data science for adults, including time series, similarity measures and knowing when a match is meaningful.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Gloucester today',
      h2: 'A compact city of young families',
      intro: 'Census 2021 figures for Gloucester, from the Office for National Statistics via Nomis, set beside England.',
      body: [
        { kind: 'table', caption: 'Gloucester, Census 2021', head: ['Measure', 'Gloucester', 'England'], rows: [
          ['Usual residents', '132,416', '56,490,048'],
          ['Living in households', '130,621', 'Not compared'],
          ['Aged 5 to 9', '8,331 (6.3%)', '5.9%'],
          ['Aged 10 to 14', '8,170 (6.2%)', '6.0%'],
          ['Aged 30 to 34', '9,807 (7.4%)', '7.0%'],
          ['Students among residents aged 5 and over', '25,155 (20.1%)', '20.4%'],
          ['Usual residents per square kilometre', '3,266.6', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Children and parents', p: 'Every band from birth to fourteen, and the early thirties, made up a larger share of Gloucester\'s residents in 2021 than of England\'s.' },
          { h3: 'Students close to average', p: 'Of 124,957 residents aged five and over, 25,155 were at school or in full-time study, 20.1%, almost exactly the English figure.' },
          { h3: 'A tight boundary', p: 'At 3,266.6 residents per square kilometre, the council area holds the city itself, with most of the surrounding countryside in neighbouring districts.' }
        ] },
        { kind: 'p', text: 'Our Gloucester learners reflect that mix of families. A Year 2 child in Kingsholm might be making first steps in code, a Year 10 student in Tuffley preparing for GCSE Computer Science, and a parent in Quedgeley learning Python for work, each in a group at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Thirteen centuries on one site',
      h2: 'A cathedral with the world\'s earliest known fan vaulting',
      intro: 'From Gloucester Cathedral\'s own heritage pages.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '678 to 679 AD', p: 'The Cathedral describes its site as one of continuous Christian worship since then, more than 1,300 years, with architecture spanning almost a thousand.' },
          { h3: 'The Great Cloister', p: 'Built in the late fourteenth century, it contains what the Cathedral calls the earliest known example of fan vaulting anywhere in the world.' },
          { h3: 'A king\'s tomb', p: 'The Cathedral counts the tomb of a king among the things visitors come to discover, one of many layers of history in the building.' }
        ] },
        { kind: 'p', text: 'We have no connection with Gloucester Cathedral. Fan vaulting opens this page because it is pattern made precise: the same curved shape repeated and fitted together until the whole ceiling reads as one design. The project below is about fitting patterns too, deciding when the rise of the river at Sharpness and the rise at Gloucester are really the same event seen twice.' },
        { kind: 'spec', title: 'Where the river readings come from', p: 'The Environment Agency\'s flood-monitoring service publishes recent river levels for its gauges, every five minutes at Sharpness and every fifteen at Epney, Minsterworth and Gloucester, as heights on each gauge\'s own scale.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Following the tide from Sharpness to Gloucester',
      intro: 'Dynamic time warping aligns two sequences by letting one run faster or slower than the other, finding the stretching that makes them match most closely.',
      body: [
        { kind: 'table', caption: 'River Severn gauges, 25 August to 23 September 2026, compared with the Sharpness record', head: ['Question', 'Answer', 'Detail'], rows: [
          ['High tides seen at Sharpness', '54', 'Two a day for four weeks'],
          ['Tides that lifted Gloucester by 0.3 m or more', '16', 'Smallest such Sharpness tide 7.57 m'],
          ['A bigger tide that did not', '7.76 m', 'The threshold is not a sharp line'],
          ['Delay from Sharpness to Gloucester peak', '105 to 240 minutes', 'Median 120, for tides that arrived'],
          ['Gap after the closest single fixed delay', '0.849', 'Standard deviations, with a 150-minute delay'],
          ['Gap after dynamic time warping', '0.547', 'Within a four-hour band']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Put records on one clock', p: 'The gauges report at different intervals and occasionally miss a slot. Every reading goes onto one 15-minute grid first, so like is compared with like.' },
          { h3: '2. Try one delay', p: 'Slide the Gloucester record back in time and measure the gap. The closest single delay, 150 minutes, still leaves a mean gap of 0.849 standard deviations.' },
          { h3: '3. Let the delay vary', p: 'Dynamic time warping builds a table of partial matches and finds the cheapest path through it, allowing the delay to change from tide to tide within a four-hour band.' }
        ] },
        { kind: 'callout', h3: 'A flexible match will find something', p: 'Warping cut the gap to 0.547, which looks like a clear win. But in four weeks, 38 of the 54 tides lifted Gloucester by less than 30 centimetres, and during those neap tides the warping path still bent itself to pair Sharpness with whatever the river was doing upstream. Dynamic time warping always returns a match. Whether the matched pieces are the same event is a question the learner has to answer separately.' },
        { kind: 'p', text: 'For the tides that clearly arrived, the story is consistent. The largest, 9.69 metres on the Sharpness gauge at 20:45 GMT on 12 September, lifted Gloucester by 1.65 metres about two hours later. Across all 54 tides, the height at Sharpness and the rise at Gloucester correlate at 0.79, but the dividing line is fuzzy: a 7.57-metre tide got through while a 7.76-metre one did not, so the height at Sharpness is clearly not the only thing that matters on the day.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Matching sequences',
      h2: 'Five questions before trusting an alignment',
      intro: 'Learned on a tidal river, then used on speech recognition, handwriting, step counts in sports watches, gestures, music and sensor streams from machines.',
      body: [
        { kind: 'table', caption: 'Using dynamic time warping without fooling yourself', head: ['Question', 'For the Severn gauges', 'What it prevents'], rows: [
          ['Are the clocks the same?', 'All readings moved onto one 15-minute grid in UTC', 'Comparing a reading with the wrong moment'],
          ['How much stretch is allowed?', 'A band of four hours', 'Pairing a tide with the next day\'s'],
          ['Is the event present in both?', 'Only 16 of 54 tides clearly reach Gloucester', 'Aligning a signal with noise'],
          ['What is the baseline?', 'The closest fixed delay, 150 minutes', 'Praising a gain that a simple method nearly matches'],
          ['What do the heights mean?', 'Each gauge uses its own datum', 'Comparing numbers that are not on one scale']
        ] },
        { kind: 'p', text: 'The last row trips people up. Each gauge reports height above its own reference level, so 9.69 at Sharpness and 1.89 at Gloucester cannot be compared directly. That is why the project standardises each record before aligning them, and talks about rises rather than raw heights when it asks whether a tide arrived.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Two people clapping a rhythm at slightly different speeds, and working out which claps belong together.' },
          { h3: 'Teenagers', p: 'Four gauge records in Python, a shared time grid, a fixed-lag comparison and dynamic time warping written from scratch.' },
          { h3: 'Adults', p: 'Comparing time series at work, from machine sensors to sales, with the alignment rules and baselines stated.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Environment Agency, Gloucester Cathedral or Gloucester City Council. The gauge readings and census tables are published openly; the alignments, rises and comparisons shown are our own calculations and make no flood forecast.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From clapping in time to dynamic time warping',
    intro: 'The age bands are a rough starting point, and the free lesson settles the right level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Keeping in step', p: 'Rhythms, timing and patterns that repeat, and spotting when two of them drift apart.', courses: ['kids-coding-blocks-masterclass', 'mental-maths-mastery-kids'] },
      { band: 'Ages 11 to 13', h3: 'Time in code', p: 'Storing readings with their times, drawing them as lines, and shifting one line to match another.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Aligning sequences', p: 'Fixed lags, dynamic programming tables and dynamic time warping on real river data, with bands and baselines.', courses: ['data-science-course-for-teens-python-data', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Time series at work', p: 'Similarity, alignment and event detection in sensor and business data, with the traps explained.', courses: ['data-science-complete-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI tools match patterns automatically. Why should a Gloucester teenager learn how alignment works?',
    intro: 'Because an algorithm that always finds a match needs a person who asks whether it is real.',
    p1: 'Hand an assistant two river records and ask how well they line up, and it may run dynamic time warping and report a close match. It will not point out that most of the tides never reached Gloucester. A learner who has watched the warping path bend around neap tides knows to check that the event exists in both records before celebrating the fit.',
    p2: 'Sequence alignment runs through AI: recognising speech, reading handwriting, comparing movements and matching patterns in sensor streams. The same caution applies everywhere. Flexible matching is powerful precisely because it can fit almost anything, which is why the people who build these systems test whether the matches mean what they seem to.',
    closer: 'So a Gloucester teenager should still learn to program in 2026, in a city whose cloister first made fan vaulting fit together: the algorithm finds a fit, but deciding whether the fit is true is still up to us.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Kingsholm, Barnwood or Quedgeley, from home',
    intro: 'From Longlevens to Quedgeley, a school-run crossing of Gloucester takes time. A live online lesson takes none.',
    cells: [
      { h3: 'North to south of the city', p: 'A learner in Longlevens and another in Abbeymead can join the same lesson without anyone driving across town.' },
      { h3: 'Stages from Reception on', p: 'We use the stages Gloucester schools use, Reception and Key Stages 1 to 4 through to GCSE and A level, and we teach in English.' },
      { h3: 'A free lesson worth the time', p: 'The first session is real teaching and ends with a suggested level, course and weekly time. Nobody asks for card details.' },
      { h3: 'Groups of five to ten', p: 'Everyone in a group is at the same stage, drawn from Gloucester, the rest of the UK and abroad, so each level has a workable hour.' },
      { h3: 'A twice-weekly habit', p: 'Two fixed lessons each week, about eight a month, with school holidays and exams planned with the teacher in advance.' },
      { h3: 'Teachers on Indian time', p: 'A 4 pm class in Gloucester begins at 8.30 pm in India in British Summer Time and 9.30 pm in winter, because India never changes its clocks; our teachers work those evenings for UK learners.' }
    ],
    spec: { title: 'Across Gloucestershire', p: 'Families in Cheltenham, Stroud, Tewkesbury or the Forest of Dean join exactly the same classes, as lessons are online and groups form by level.' }
  },

  fees: {
    h2: 'Gloucester lesson fees',
    intro: 'One free lesson, then a single monthly fee.',
    first: 'A full lesson at no charge, finishing with a recommended level, course and weekly slot.',
    group: 'About eight live lessons a month in a group of five to ten learners at one stage.',
    private: 'About eight live lessons a month, just the teacher and your learner.',
    closer: 'Matson and Hempsted pay the same as any other family outside India, one fee in US dollars, and you will find no pound prices on our site. You are billed only after the free lesson, once a course and a time are agreed; pausing, missed lessons and switching between group and one-to-one lessons are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from six families, reproduced faithfully',

  book: {
    h2: 'Book a free lesson for a Gloucester learner',
    intro: 'We set the first task by level: a clapping-in-time pattern game for a young child, a short Python program that lines up two lists for a beginner, or the Severn gauge records and dynamic time warping for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Gloucester learner.'
  },

  faq: {
    h2: 'Gloucester coding class questions',
    intro: 'The questions Gloucester families ask us most.',
    items: [
      { q: 'How many people live in Gloucester?', a: 'The 2021 census counted 132,416 usual residents in the Gloucester council area, with 130,621 living in households and 1,795 in communal establishments such as care homes and halls.' },
      { q: 'How does Gloucester compare with England?', a: 'Gloucester has more children than average: in 2021, 6.3% of residents were aged 5 to 9 (England 5.9%), while 20.1% of those aged five and over were students (England 20.4%). It had 3,266.6 residents per square kilometre (England 433.5).' },
      { q: 'What is dynamic time warping?', a: 'A method for comparing two sequences that may run at different speeds. It finds the stretching and squeezing of time that makes them match most closely, within limits the user sets.' },
      { q: 'Does every tide reach Gloucester?', a: 'No. In four weeks of Environment Agency readings, only 16 of 54 high tides at Sharpness lifted the river at Gloucester by 30 centimetres or more; the biggest raised it by 1.65 metres about two hours later.' },
      { q: 'Where do the river readings come from?', a: 'The Environment Agency\'s flood-monitoring service, which publishes recent levels for its gauges at Sharpness, Epney, Minsterworth and Gloucester as heights on each gauge\'s own scale.' },
      { q: 'What is special about Gloucester Cathedral?', a: 'The Cathedral says its Great Cloister, built in the late fourteenth century, contains the earliest known example of fan vaulting in the world, and that worship on the site goes back to 678 to 679 AD. We are not connected with the Cathedral.' },
      { q: 'When do Gloucester lessons take place?', a: 'Most Gloucester families pick a weekday slot straight after school or later in the evening, and some prefer Saturdays; we fix the time together during the free lesson. Our teachers are four and a half hours ahead in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Gloucester?', a: 'No. There is no Gloucester centre and no premises anywhere in the UK; every lesson is taught live online. Learners need a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Gloucester lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Gloucester groups formed?', a: 'By level, pace and goals rather than age or address, with five to ten learners at one stage. If no group suits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The Severn and beyond',
    html: 'Down the Severn, the <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol page</a> divides its city into library catchments, and across the estuary <a class="cg-inline-link" href="/best-coding-class-in-newport-wales">Newport</a> measures what scrapping the Severn tolls did to traffic. <a class="cg-inline-link" href="/best-coding-class-in-exeter">Exeter</a> sorts a whole river network into flow order. School stages are explained in our <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> leads to every other place we cover.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Gloucester and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-bristol', label: 'Bristol' },
    { href: '/best-coding-class-in-exeter', label: 'Exeter' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-glo .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.45rem); }
.cg-root.cg-glo .cg-hero h1 { font-weight: 690; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-glo .cg-capsule { border-top: 5px double var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-glo .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-glo .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.016em; }
.cg-root.cg-glo .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-glo .cg-table th { letter-spacing: 0.024em; }
.cg-root.cg-glo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-glo .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-glo .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Gloucester, Census 2021 via Nomis (E07000081): TS001 132,416 usual residents, 130,621 in households, 1,795 in communal establishments; TS007A 8,331 aged 5 to 9 (6.3 percent, England 5.9), 8,170 aged 10 to 14 (6.2, England 6.0), 9,807 aged 30 to 34 (7.4, England 7.0); TS068 25,155 students of 124,957 residents aged 5 and over (20.1 percent, England 20.4); TS006 3,266.6 usual residents per square kilometre (England 433.5). Gloucester Cathedral, Heritage: continuous Christian worship since 678-9 AD; architecture spanning almost 1,000 years; the tomb of a king. East Cloister Project: the Great Cloister, late fourteenth century, earliest known example of fan vaulting anywhere in the world.',
    localProject: 'Following the tide from Sharpness to Gloucester. EA flood-monitoring levels, 25 August to 23 September 2026 (UTC), Sharpness (5-minute), Epney, Minsterworth, Gloucester (15-minute), on one 15-minute grid. 54 Sharpness high tides; 16 lifted Gloucester by 0.3 m or more (smallest such tide 7.57 m; a 7.76 m tide did not); delay to Gloucester peak 105 to 240 minutes, median 120; correlation of Sharpness peak with Gloucester rise 0.79; largest 9.69 m on 12 September, Gloucester up 1.65 m. Fixed lag best 150 minutes, gap 0.849 sd; dynamic time warping in a 4 h band, gap 0.547 sd, shifts -30 to 240 minutes including neap tides that never reach Gloucester. Lesson family: dynamic time warping and event matching; distinct from Manchester fixed-lag correlation.',
    requiredMentions: [
      '132,416',
      '130,621',
      '3,266.6',
      '9,807',
      '25,155',
      '124,957',
      'fan vaulting',
      'Minsterworth',
      'Sharpness',
      'dynamic time warping',
      'Epney',
      '0.849'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Gloucester: 132,416 usual residents; 130,621 in households; 1,795 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000081' },
      { claim: 'Nomis, Census 2021 TS007A: Gloucester and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000081,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Gloucester 25,155 students of 124,957 aged 5 and over (20.1 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000081,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Gloucester 3,266.6 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E07000081,E92000001' },
      { claim: 'Environment Agency flood-monitoring API: Sharpness, Epney, Minsterworth and Gloucester river level readings.', url: 'https://environment.data.gov.uk/flood-monitoring/id/stations/2195' },
      { claim: 'Gloucester Cathedral, Heritage: continuous worship since 678-9 AD, architecture spanning almost 1,000 years.', url: 'https://www.gloucestercathedral.org.uk/cathedral/heritage' },
      { claim: 'Gloucester Cathedral, The East Cloister Project: the Great Cloister and the earliest known fan vaulting.', url: 'https://www.gloucestercathedral.org.uk/support/the-east-cloister-project' }
    ],
    rejectedClaims: [
      'The Severn Bore: no source was read for it, so the page does not describe it.',
      'Naming the king buried in the Cathedral: the Cathedral page read does not name him, so the page does not either.',
      'A school allocation model for Gloucester (tried with DfE register data): selective, single-sex and faith admissions make any simple model misleading, so it was dropped.',
      'Any flood forecast or risk statement: the project compares levels and timing only.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Environment Agency, Gloucester Cathedral or Gloucester City Council.'
    ]
  }
};
