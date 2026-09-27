'use strict';
// Huddersfield (cg- town page, UK cluster Phase 8, towns band A, row 341). Keyword slug per the owner's 2026-09-27
// instruction. Spine: when is a sensor reading suspicious? Anchors (read raw 27 September 2026): EA Hydrology API station
// "Huddersfield Longroyd Bridge", River Colne (c570853f-a563-424f-aeb2-a926b1c30223; lat 53.641316, long -1.795095;
// opened 1978-11-01), 15-minute level measure ...-level-i-900-m-qualified; postcodes.io nearest HD1 3LF and HD1 3LE,
// Kirklees. NRFA 27061 "Colne at Longroyd Bridge": catchment 72.3 km2; "Limited range flat-V weir on the River Colne.
// Lower catchment is urbanised (Huddersfield)"; "Limited range flat-V weir, 12m wide".
// Our run (scratchpad hud/anom.py, 27 September 2026): calendar year 2025. First download used min-date=2025-01-01, which
// is exclusive, and so lost 1 January (96 readings); mineq-date includes it. Full year: 35,040 readings, none missing, all
// quality "Good"; level 0.206 to 1.94 m; median 0.275 m. Flatline rule (same value for 8+ readings = 2 hours): 723 runs, 517
// at or below the median level, 32.6% of all readings inside such runs; 6+ hours: 107 runs; 24 hours: 1 run, 0.223 m from
// 2025-08-06 14:45. Spike rule (up and straight back by more than T): T 0.05 m 13; T 0.1 m 3 (4 September, 8 September
// counted twice); T 0.2 m 0. Largest 15-minute rise 0.262 m (4 September 13:00).
// Lesson family: anomaly detection rules (flatline, spike, gap) with thresholds and false alarms, checked against the
// provider's own quality flags; screened (anomaly detection, flatline, sensor spikes, false alarm: 0 hits; Stoke used a
// median filter for smoothing, a different aim). High-water events are not described.
// Place facts: Nomis Census 2021 TS007A, Kirklees E08000034: total 433,214; 5 to 9 27,644 (6.4%; England 5.9%); 10 to 14
// 28,614 (6.6%; 6.0%); 15 to 19 26,867 (6.2%; 5.7%); 30 to 34 28,424 (6.6%; 7.0%); 50 to 54 30,860 (7.1%; 6.9%); 85+ 9,206
// (2.1%; 2.4%). ONS 2021 BUAs wholly in Kirklees: Huddersfield 141,675; Honley 14,395; Linthwaite and Slaithwaite 9,245;
// Meltham 8,325; Holmfirth 4,985; Marsden 3,690 (Dewsbury, Batley, Mirfield and the rest are left for the Dewsbury page).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HUDDERSFIELD', label: 'Huddersfield', blurb: 'Coding and AI classes for Huddersfield, with a project that hunts for faulty readings in a year of River Colne sensor data.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-huddersfield',
  code: 'hud',
  accent: '#12277A',
  accentRationale: 'Huddersfield: a deep mill-town blue (10.6:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Huddersfield',
    eyebrow: 'Huddersfield, West Yorkshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-yorkshire-and-the-humber', name: 'Yorkshire and the Humber' }],
  nav: [
    { label: 'West Yorkshire', href: '/coding-classes-in-west-yorkshire' },
    { label: 'Yorkshire and the Humber', href: '/coding-and-ai-classes-in-yorkshire-and-the-humber' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Huddersfield, England',
  title: 'Coding and AI Classes in Huddersfield | Python Online, 6 to 67',
  description: 'Online coding, AI and Python classes for Huddersfield, Honley, Holmfirth and Meltham learners aged 6 to 67, live one-to-one or in small groups. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Huddersfield, and a Python project that searches a year of River Colne sensor readings for faults and false alarms.',
  twitterDescription: 'Huddersfield coding, AI and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Huddersfield',
    description: 'Online coding, AI, Python and mathematics for children, teenagers and adults in Huddersfield and Kirklees, taught live at the right level.'
  },

  h1: 'Coding and AI classes in Huddersfield',
  capsuleQ: 'Where can Huddersfield learners find the best coding and AI classes?',
  capsule: 'The 2021 census put Kirklees at 433,214 people, and 141,675 of them lived in the ONS built-up area of Huddersfield. School-age children and older teenagers are above the England share, while adults in their early thirties are a little below it. From Honley to Marsden, anyone aged 6 to 67 can learn coding, AI, Python or maths with our India-based tutors in real-time video lessons, solo or in level-matched classes of five to ten. The opening lesson is free and chooses the course. The Huddersfield project checks a year of readings from a river sensor in the town. After that, valley families pay USD 100 monthly in a class of peers or USD 150 monthly with a tutor alone.',
  lead: 'At Longroyd Bridge, a weir on the River Colne in Huddersfield carries an Environment Agency level sensor that reports every fifteen minutes, day and night. In 2025 it sent 35,040 readings. Sensors fail in ordinary ways: they stick and repeat one number, they jump for a moment and fall back, or they go silent. Data teams write rules to catch these faults automatically. So a Huddersfield learner writes three rules in Python, runs them over the whole year, and waits for the alarms. Plenty arrive. The real lesson is what happens next, when the learner checks each alarm against what the Agency itself says about the data, and discovers that the very first fault found was not in the sensor at all.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a learner in Huddersfield.',

  picks: {
    eyebrow: 'Huddersfield course picks',
    h2: 'Courses Huddersfield learners start with',
    intro: 'Pick by age and interest; each course begins with one free live session, and no payment card is asked for.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with sensors, counters and alarm games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python programs with real numbers, plus simple AI.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teens, including the River Colne sensor project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Adult Python from the start, up to data quality work.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Kirklees',
      h2: 'Young people across the valleys',
      intro: 'Borough counts from the 2021 census age table on Nomis, each beside the national share.',
      body: [
        { kind: 'table', caption: 'Selected ages, Kirklees compared with England (TS007A, 2021)', head: ['Age band', 'Kirklees residents', 'Kirklees %', 'England %'], rows: [
          ['5 to 9', '27,644', '6.4%', '5.9%'],
          ['10 to 14', '28,614', '6.6%', '6.0%'],
          ['15 to 19', '26,867', '6.2%', '5.7%'],
          ['30 to 34', '28,424', '6.6%', '7.0%'],
          ['50 to 54', '30,860', '7.1%', '6.9%'],
          ['85 and over', '9,206', '2.1%', '2.4%']
        ] },
        { kind: 'p', text: 'Children and teenagers stand well above the national share. Around Huddersfield the ONS lists Honley at 14,395, Linthwaite and Slaithwaite at 9,245, Meltham at 8,325, Holmfirth at 4,985 and Marsden at 3,690, all inside Kirklees. Kirklees schools work to England\'s national curriculum; tell us your half-terms and our timetable leaves them empty.' },
        { kind: 'callout', h3: 'County and region', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">West Yorkshire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a> page links the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Huddersfield project',
      h2: 'Anomaly detection on the River Colne',
      intro: 'Three simple rules, thousands of alarms, and a careful look at which ones matter.',
      body: [
        { kind: 'p', text: 'The learner asks the Environment Agency\'s data service for every 15-minute level reading at Longroyd Bridge in 2025. The gap rule fires first: a whole day, 1 January, is missing. It looks like a sensor outage, until the learner reads the service\'s notes. The filter they used, min-date, leaves out the starting date itself; mineq-date includes it. Downloaded again properly, the year has all 35,040 readings, none missing. The first anomaly was a bug in the learner\'s own request.' },
        { kind: 'table', caption: 'Our Python anomaly rules on Longroyd Bridge levels, 2025, 27 September 2026', head: ['Rule', 'Threshold', 'Alarms', 'What checking showed'], rows: [
          ['Gap in the readings', 'Any missing 15-minute slot', '1 day, then 0', 'Our download bug, not the sensor'],
          ['Flatline', 'Same value for 2 hours', '723 runs', 'Mostly calm low water, 32.6% of readings'],
          ['Flatline', 'Same value for 24 hours', '1 run', '0.223 m from 6 August, worth a question'],
          ['Spike', 'Up and straight back by 0.05 m', '13', 'Short bursts of fast water'],
          ['Spike', 'Up and straight back by 0.1 m', '3', 'All in April and September'],
          ['Spike', 'Up and straight back by 0.2 m', '0', 'Nothing that extreme']
        ] },
        { kind: 'p', text: 'The flatline rule is next: flag any value that repeats unchanged for two hours. It raises 723 alarms, and a third of the whole year sits inside them. That cannot all be faults. Sorting by level shows why: 517 of the runs are at or below the year\'s median level of 0.275 metres. In calm, low water a sensor that reads to the millimetre really can show the same number for hours. Lengthening the threshold to a full day leaves one run, at 0.223 metres from 6 August, which deserves a human look.' },
        { kind: 'p', text: 'Every one of the year\'s readings carries the Agency\'s own quality label, and all 35,040 say Good. So the learner treats the rules as questions, not verdicts, and measures them: how many alarms per month, how many at low water, how many survive a stricter threshold. The final program flags only the day-long flatline and the three largest spikes, and writes a short report explaining each. Tests use a made-up series with a planted stuck sensor and a planted spike to prove the rules still catch real faults.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Take the temperature every hour for a day and circle any reading that looks odd, then explain why.' },
          { h3: 'Ages 11 to 15', p: 'Write the gap and flatline rules in Python and count the alarms.' },
          { h3: 'Ages 15 and up', p: 'Add the spike rule, tune thresholds by level, and test with planted faults.' }
        ] },
        { kind: 'callout', h3: 'Agency readings, our rules', p: 'The readings and quality labels come from the Environment Agency hydrology service, and the gauge description from the National River Flow Archive. The rules, thresholds and counts are ours.' }
      ]
    },
    {
      id: 'gauge', tint: 'deep', eyebrow: 'Why Longroyd Bridge',
      h2: 'A weir in the middle of town',
      intro: 'Station 27061 as the flow archive describes it.',
      body: [
        { kind: 'table', caption: 'Colne at Longroyd Bridge, National River Flow Archive', head: ['Detail', 'Recorded'], rows: [
          ['Station', '27061, Colne at Longroyd Bridge'],
          ['Structure', 'A limited range flat-V weir, 12 m wide'],
          ['Catchment area', '72.3 square kilometres'],
          ['Setting', 'Lower catchment urbanised, around Huddersfield'],
          ['Readings in 2025', '35,040, one every 15 minutes'],
          ['Agency quality label, 2025', 'Good on every reading']
        ] },
        { kind: 'p', text: 'Anomaly detection runs quietly behind modern life. Banks flag unusual card payments, factories watch machine vibration for early faults, and websites raise an alert when traffic suddenly drops. Every system faces the same trade-off the Colne data shows: sensitive rules catch more real problems but bury people in false alarms, and strict rules stay quiet but miss things. A Huddersfield learner who has tuned three rules on a real river has met that trade-off directly.' },
        { kind: 'p', text: 'We are an independent school with no tie to the Agency, the flow archive or the census office; their readings are theirs, and every rule and slip on this page is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From odd temperatures to monitoring systems',
    intro: 'Years are a rough guide; the free lesson decides the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Sensors in blocks', p: 'Block coding with counters, timers and alarms.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and data', p: 'Lists, loops and simple rules in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Data and AI', p: 'Real datasets, thresholds and AI beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data quality', p: 'Adult Python for checking and cleaning data.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and alarms',
    h2: 'Would an AI flag the right readings?',
    intro: 'An alarm is only useful if someone can trust it.',
    p1: 'Ask a chatbot to find faults in sensor data and it may produce a neat list of suspicious values. Whether those are real faults or calm low water, and whether the first "fault" came from the download itself, it usually cannot tell you.',
    p2: 'A Huddersfield learner who has checked 723 alarms against the provider\'s own labels knows to ask how many false alarms any detector raises.',
    closer: 'Counting false alarms before trusting a detector is a habit that makes coding worth learning for Huddersfield teenagers in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson format',
    h2: 'Honley to Marsden, all online',
    intro: 'Every village in the valleys joins by video.',
    cells: [
      { h3: 'Hands on the code', p: 'Nothing is typed for the learner; the tutor watches over screen share and nudges with a question instead.' },
      { h3: 'Started at the right level', p: 'Year 5 or Year 12, the school year and the trial together set the first topic, with the exam board in mind.' },
      { h3: 'Try before paying', p: 'A complete first lesson is free, and it closes with the course we suggest and the reason for it.' },
      { h3: 'Same-stage groups', p: 'Classes of five to ten UK learners at one level.' },
      { h3: 'Two lessons a week', p: 'During term time; holidays stay free.' },
      { h3: 'Fixed hour', p: 'UK clock changes are handled by our tutors.' }
    ],
    spec: { title: 'Why groups are online', p: 'Five Huddersfield learners at one stage, all free at the same hour, rarely live near each other. Online groups solve that.' }
  },

  fees: {
    h2: 'Huddersfield fees',
    intro: 'A single rate covers Huddersfield and every other country we teach outside India.',
    first: 'A full lesson at no cost, with a course recommendation.',
    group: 'About eight live small-group lessons per month.',
    private: 'About eight live one-to-one lessons per month.',
    closer: 'All prices are in US dollars, never sterling. The first invoice waits until the free session has pinned down a course and a regular slot; breaks, sick days and a switch between shared and solo tuition are described under pricing.'
  },

  reviewsH2: 'Kirklees and UK families on Google',

  book: {
    h2: 'Book a free Huddersfield lesson',
    intro: 'Send us an age or school year and one thing the learner is keen on. Trial ideas: a Scratch alarm, first steps in Python, a small AI build, or checking Colne readings for faults.',
    success: 'Thank you. Your Huddersfield request is with us.'
  },

  faq: {
    h2: 'Huddersfield questions',
    intro: 'River data, local figures and lesson arrangements.',
    items: [
      { q: 'What is the population of Huddersfield?', a: 'The ONS gives 141,675 for the Huddersfield built-up area in 2021; Kirklees as a whole had 433,214.' },
      { q: 'Is online coding and AI tuition available in Huddersfield?', a: 'They can. Our live coding, AI, Python and maths lessons reach homes across the Colne and Holme valleys, for ages 6 to 67.' },
      { q: 'What is the River Colne project?', a: 'Learners write anomaly detection rules in Python for a year of 15-minute river level readings and check every alarm against the Agency\'s quality labels.' },
      { q: 'What is a false alarm?', a: 'A warning raised by a rule when nothing is actually wrong, such as calm low water that looks like a stuck sensor.' },
      { q: 'What was the first fault the project found?', a: 'A missing day caused by the download filter, not the sensor: min-date excludes the start date, mineq-date includes it.' },
      { q: 'Are lessons in person?', a: 'No, all lessons run live online.' },
      { q: 'Is exam-year help offered?', a: 'GCSE and A level maths and computing are covered, taught for understanding with no grade guarantee.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67.' },
      { q: 'How much do lessons cost?', a: 'Nothing for the trial; after it, USD 100 per month for group tuition and USD 150 per month for private tuition.' },
      { q: 'What happens in the school holidays?', a: 'We stop for them once you share the calendar.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Huddersfield',
    html: 'County choices sit on our <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">West Yorkshire</a> page; <a class="cg-inline-link" href="/ai-and-programming-classes-in-middlesbrough">Middlesbrough</a> hunts for the right Marton, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a> covers the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Huddersfield and West Yorkshire',
  footerPlaces: [
    { href: '/coding-classes-in-west-yorkshire', label: 'West Yorkshire' },
    { href: '/coding-and-ai-classes-in-yorkshire-and-the-humber', label: 'Yorkshire and the Humber' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hud .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-hud .cg-hero h1 { font-weight: 750; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-hud .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-hud .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hud .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-hud .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-hud .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hud .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-hud .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-hud .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Kirklees (E08000034). Nomis Census 2021 TS007A: total 433,214; 5 to 9 27,644 (6.4%, England 5.9%); 10 to 14 28,614 (6.6%, 6.0%); 15 to 19 26,867 (6.2%, 5.7%); 30 to 34 28,424 (6.6%, 7.0%); 50 to 54 30,860 (7.1%, 6.9%); 85+ 9,206 (2.1%, 2.4%). ONS 2021 BUAs: Huddersfield 141,675; Honley 14,395; Linthwaite and Slaithwaite 9,245; Meltham 8,325; Holmfirth 4,985; Marsden 3,690. EA Hydrology Huddersfield Longroyd Bridge, River Colne, 15-minute level (postcodes.io HD1 3LF, Kirklees). NRFA 27061: catchment 72.3 km2; "Limited range flat-V weir, 12m wide"; "Lower catchment is urbanised (Huddersfield)".',
    localProject: 'Anomaly detection, 2025: 35,040 readings, all Good, none missing after fixing the min-date (exclusive) vs mineq-date (inclusive) download bug; flatline 2 h 723 runs (517 at or below median 0.275 m; 32.6% of readings), 6 h 107, 24 h 1 (0.223 m from 6 August); spike 0.05 m 13, 0.1 m 3, 0.2 m 0. Lesson family: anomaly rules, thresholds, false alarms.',
    requiredMentions: [
      '141,675',
      '433,214',
      'Honley',
      'Meltham',
      'Longroyd Bridge',
      'anomaly detection',
      'false alarm',
      'mineq-date',
      '35,040'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Kirklees and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Environment Agency hydrology data, Huddersfield Longroyd Bridge 15-minute level.', url: 'https://environment.data.gov.uk/hydrology/' },
      { claim: 'National River Flow Archive, station 27061 Colne at Longroyd Bridge.', url: 'https://nrfa.ceh.ac.uk/data/station/info/27061' }
    ],
    rejectedClaims: [
      'High-water events and their dates: not described.',
      'That the 6 August flatline was a fault: not claimed; flagged for a human look.',
      'Textile, Luddite and rugby league history: not claimed (no primary source read; some content excluded).',
      'Dewsbury, Batley and Mirfield figures: left for the Dewsbury page.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
