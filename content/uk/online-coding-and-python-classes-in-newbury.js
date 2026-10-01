'use strict';
// Newbury (cg- town page, UK cluster Phase 10, towns band B, row 547). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: a river gauge's readings wobble; how do you
// smooth them without flattening the rises you actually care about? (Savitzky-Golay filter against a moving average,
// centred and trailing; window length and polynomial order.)
// Data (read 1 October 2026): Environment Agency Hydrology API, station Shaw on the River Lambourn (NRFA 39041,
// measure level-i-900-m-qualified), 1 January 2025 to 31 December 2025: 35,040 quality "Good" readings on the 15-minute
// grid, none missing; 98 extra "Unchecked" off-grid readings on 11 to 13 November excluded. Level 1.363 to 1.832 m,
// median 1.432. 15-minute steps: sd 0.62 mm, largest rise 19.0 mm. Eight largest rises (above the previous 24 h low,
// peaks at least 3 days apart), e.g. 143 mm to 23:15 on 5 January, 141 mm on 27 January, 134 mm on 18 December.
// Filters (scratchpad nby/sg.py, scipy.signal.savgol_filter): share of each rise kept (mean, worst) and median peak shift:
// 3 h window (13): moving average 98.4%, 95.0%, 30 min; SG order 2 99.7%, 99.0%, 30 min; SG order 4 100.0%, 99.6%,
// 15 min. 6 h (25): MA 96.4%, 88.3%, 52 min; SG2 99.1%, 96.5%, 30; SG4 99.5%, 98.4%, 30. 12 h (49): MA 90.9%, 79.7%,
// 82; SG2 99.1%, 90.8%, 45; SG4 99.4%, 94.4%, 30. 24 h (97): MA 77.8%, 63.6%, 262 min; SG2 94.5%, 83.5%, 82; SG4 99.1%,
// 89.4%, 60. Trailing average (live-display style) keeps the same share as the centred MA but shifts peaks 120, 232,
// 442 and 982 min. Step sd after 24 h filters: MA 0.183 mm, SG2 0.268, SG4 0.305 (raw 0.615). Orders 2 and 3 give
// identical output for a centred window (property of the method; matches our run).
// Lesson family: Savitzky-Golay smoothing. Screened: "savitzky" 0 hits; claimed in claims.txt.
// Place facts: West Berkshire TS001 161,448. ONS 2021 BUA (published): Newbury 42,260. postcodes.io suburban areas with
// nearest postcode in the Newbury BUA: Speen, Shaw, Wash Common, Donnington, Greenham (Donnington is a requiredMention
// on the Chichester page; printed, not listed).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'NEWBURY', label: 'Newbury', blurb: 'Online coding and Python classes for Newbury, with a project that smooths a year of River Lambourn readings without flattening the rises.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-newbury',
  code: 'nby',
  accent: '#1E6B63',
  accentRationale: 'Newbury: a muted chalk-stream teal (6.29:1 on white, 5.11:1 on the ledger beige), picked by hand at least 40 RGB steps from every Berkshire and neighbouring page',
  pageType: 'city',
  place: {
    name: 'Newbury',
    eyebrow: 'Newbury, West Berkshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Berkshire' },
      { type: 'AdministrativeArea', name: 'South East England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Berkshire', href: '/coding-classes-in-berkshire' },
    { label: 'Reading', href: '/best-coding-class-in-reading' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Newbury, Berkshire',
  title: 'Online Coding and Python Classes in Newbury | Ages 6 to 67',
  description: 'Online coding and Python classes for Newbury, Speen, Shaw, Wash Common and Greenham, for ages 6 to 67, with data projects, vibe coding and AI. First lesson free.',
  ogDescription: 'Online coding and Python classes for Newbury, with a data project on a year of River Lambourn readings.',
  twitterDescription: 'Newbury online coding and Python lessons for ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Newbury',
    description: 'Online coding, Python, data and maths lessons for children, teenagers and adults in Newbury and West Berkshire, using real open data such as river readings.'
  },

  h1: 'Online coding and Python classes in Newbury',
  capsuleQ: 'What are the best online coding and Python classes in Newbury?',
  capsule: 'The Newbury built-up area had 42,260 usual residents at the 2021 census, according to the ONS, and West Berkshire as a whole had 161,448. Speen, Shaw, Wash Common, Donnington and Greenham are gazetteer suburbs whose nearest postcode falls inside the built-up area. Modern Age Coders gives live online lessons in coding, Python, vibe coding, AI and maths to Newbury learners aged six to 67; our tutors are in India and teach either one-to-one or in level-matched groups of five to ten. A free lesson happens before we recommend any course. The Newbury project takes a full year of water levels from the Environment Agency gauge at Shaw on the River Lambourn and asks how to smooth out the wobble without shaving the tops off the rises. Lessons after the trial are USD 100 a month in a group or USD 150 a month privately.',
  lead: 'Every sensor wobbles, and the usual cure is an average: replace each reading with the mean of its neighbours. It works, and it quietly lies. Averages flatten peaks and, if they only look backwards, they report every rise late. A method from 1964 chemistry labs, the Savitzky-Golay filter, fits a small curve through each window instead of a flat line, and a year of River Lambourn readings shows exactly how much difference that makes.',
  wa: 'Hello Modern Age Coders, could we try a free online coding or Python lesson? We are in Newbury.',

  picks: {
    eyebrow: 'First courses',
    h2: 'Online coding and Python courses for Newbury learners',
    intro: 'The course we would usually suggest at each age. All of them open with a free live lesson, no card needed.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Puzzles and patterns that train the step-by-step thinking coding depends on.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games built with an AI, then tested and put right by the child.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python with real data: loading, cleaning, charting and filtering, as in the Lambourn project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'A complete Python route for adults, from first script to confident projects.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Newbury and West Berkshire',
      h2: 'Newbury, Speen, Shaw, Wash Common and Greenham',
      intro: 'The census figures for the town and the district, and the suburb names we checked.',
      body: [
        { kind: 'table', caption: 'Usual residents at the 2021 census (ONS)', head: ['Area', 'Residents'], rows: [
          ['Newbury built-up area', '42,260'],
          ['West Berkshire', '161,448']
        ] },
        { kind: 'p', text: 'West Berkshire also contains Thatcham, Hungerford, part of the Reading built-up area and many villages, so the district figure is a different area rather than a total to add the town to. Each suburb named here was checked the same way: we found the postcode nearest to its gazetteer point and confirmed that postcode is inside the Newbury built-up area. Newbury schools follow the national curriculum for England, and lessons can run beside GCSE computer science, GCSE maths and A level courses.' },
        { kind: 'callout', h3: 'Across Berkshire', p: 'Neighbouring pages: <a class="cg-inline-link" href="/best-coding-class-in-reading">Reading</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bracknell">Bracknell</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-wokingham">Wokingham</a> and <a class="cg-inline-link" href="/coding-classes-in-berkshire">the Berkshire page</a>. Why we put thinking ahead of AI tools is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">reasoning first, tools second</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Lambourn project',
      h2: 'Smoothing a river without flattening it',
      intro: '35,040 readings from one gauge, four window lengths and three ways to smooth.',
      body: [
        { kind: 'p', text: 'The learner downloads a year of readings from the Environment Agency\'s open hydrology service: the water level at the gauge called Shaw, on the River Lambourn, every 15 minutes through 2025. That is 35,040 quality-checked values with none missing; 98 extra readings taken at odd times on 11 to 13 November were marked unchecked, so they are left out. The level moves between 1.363 m and 1.832 m on the gauge\'s own scale. Most of the time it barely changes, with a typical 15-minute step of 0.62 mm, but the eight largest rises of the year, each at least three days apart, were all 76 mm or more within a day, the largest 143 mm to a peak at 23:15 on 5 January.' },
        { kind: 'p', text: 'Three smoothers are tried on the whole year. A centred moving average replaces each reading with the mean of a window around it. A trailing average uses only the past, the way a live dashboard must. The Savitzky-Golay filter, published by Abraham Savitzky and Marcel Golay in 1964, fits a small polynomial through each window by least squares and keeps its middle value, so a curved peak can survive. In Python it is one call, scipy.signal.savgol_filter. For each of the eight big rises the learner measures how much of the rise is left after smoothing, and how far the peak moves.' },
        { kind: 'table', caption: 'Share of each big rise kept after smoothing (average, worst of eight) and median shift of the peak, our run on the 2025 Shaw readings', head: ['Window', 'Moving average', 'Savitzky-Golay, order 2', 'Savitzky-Golay, order 4'], rows: [
          ['3 hours', '98.4%, 95.0%, 30 min', '99.7%, 99.0%, 30 min', '100.0%, 99.6%, 15 min'],
          ['6 hours', '96.4%, 88.3%, 52 min', '99.1%, 96.5%, 30 min', '99.5%, 98.4%, 30 min'],
          ['12 hours', '90.9%, 79.7%, 82 min', '99.1%, 90.8%, 45 min', '99.4%, 94.4%, 30 min'],
          ['24 hours', '77.8%, 63.6%, 262 min', '94.5%, 83.5%, 82 min', '99.1%, 89.4%, 60 min']
        ] },
        { kind: 'p', text: 'With a day-long window the moving average keeps only 77.8% of a typical rise, as little as 63.6% of one, and moves the peak by more than four hours. Savitzky-Golay of order 4 over the same window keeps 99.1%. The trailing average keeps the same share as the centred one but reports peaks late: by a median of 982 minutes, more than 16 hours, at the 24-hour window. There is a price, and the learner measures it too. After the 24-hour moving average the typical step is 0.183 mm; after order-4 Savitzky-Golay it is 0.305 mm, so less of the wobble is removed. One more surprise: orders 2 and 3 gave identical results, a known property of the centred filter that the numbers confirm.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Plot a week of readings on squared paper and try averaging each point with its neighbours.' },
          { h3: 'Ages 11 to 15', p: 'Read the file with Python\'s csv module and write a moving average with a loop.' },
          { h3: 'Ages 15 and up', p: 'Use numpy and scipy to compare filters, then measure what each one costs on real peaks.' }
        ] },
        { kind: 'callout', h3: 'Where the data comes from', p: 'River levels are Environment Agency data from the Hydrology API, used under the Open Government Licence, read on 1 October 2026. The filter is from Savitzky and Golay, Analytical Chemistry, 1964. The choice of peaks, the windows and every percentage above are from our own Python; we say nothing about flooding or what caused any rise.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Python and AI',
      h2: 'What smoothing a river teaches about AI and data',
      intro: 'Cleaning data is a decision, and each method decides differently.',
      body: [
        { kind: 'table', caption: 'From Lambourn readings to working with AI', head: ['What the filters did', 'What to remember with AI'], rows: [
          ['A 24-hour average kept 77.8% of a typical rise', 'Tidying data can erase the very thing you want'],
          ['The trailing average was 16 hours late at the peak', 'A model that only sees the past lags behind change'],
          ['Savitzky-Golay kept peaks but removed less wobble', 'Every improvement has a cost; measure both sides'],
          ['Orders 2 and 3 matched exactly', 'Check a claim by running it, not by reading about it'],
          ['98 unchecked readings were left out', 'Know which data you trust, and say what you dropped']
        ] },
        { kind: 'p', text: 'AI assistants suggest smoothing, averaging and cleaning steps readily, and they rarely mention what those steps remove. Newbury learners practise vibe coding by asking an AI for the filter code, then plotting the result against the raw readings and measuring the peaks themselves. Building AI agents begins once a learner writes Python unaided, usually in the sixth form or as an adult, and Copilot Studio agents are taught one-to-one only. For more, see <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">our reasons for explaining code rather than pasting it</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the agent-building course for UK students</a>.' },
        { kind: 'p', text: 'The Environment Agency, the ONS and postcodes.io provided open data for this page, but they have no link with Modern Age Coders and have not reviewed our figures.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Steps up',
    h2: 'From squared paper at seven to signal processing at seventeen',
    intro: 'A learner joins at the step the free lesson points to; school year is only a starting guess.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Patterns first', p: 'Sequences, averages and puzzles, often on paper before the screen.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Code with AI', p: 'Scratch with an AI helper, then early Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and data', p: 'Files, charts, numpy and filters on real readings.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Python in depth', p: 'Thorough Python, then data structures and algorithms.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Data and AI',
    h2: 'What is a Savitzky-Golay filter, and why does it matter when AI cleans data?',
    intro: 'A Savitzky-Golay filter smooths a series by fitting a small polynomial through each window of readings and keeping its centre value, and it matters because a plain average, the kind of step an AI often suggests, can quietly flatten and delay the peaks that matter most.',
    p1: 'On the 2025 Shaw readings from the River Lambourn, a 24-hour moving average kept 77.8% of a typical rise while an order-4 Savitzky-Golay filter kept 99.1%, and a trailing average reported peaks 982 minutes late.',
    p2: 'A learner who has measured that asks of every cleaning step, from an AI or anyone else, what it removed along with the noise.',
    closer: 'Newbury teenagers who can check a data pipeline with their own code keep control of the AI tools they use, and that skill is built by programming.',
    blogAnchor: 'why learning Python is still a smart move in 2026'
  },

  delivery: {
    eyebrow: 'Format',
    h2: 'How Newbury lessons work',
    intro: 'All lessons are live on video. A laptop or desktop with a keyboard is needed, since phones and tablets are too limited for real programming.',
    cells: [
      { h3: 'Learner in control', p: 'The learner types every line and runs it; the tutor asks what it should do.' },
      { h3: 'Start at the right step', p: 'The free lesson shows the level, and the course follows from that.' },
      { h3: 'Free to try', p: 'The trial lesson has no fee and asks for no card.' },
      { h3: 'Level-matched groups', p: 'Five to ten learners at one stage, from towns all over the UK.' },
      { h3: 'Regular rhythm', p: 'Around eight lessons a month in term, two a week, with holidays skipped on request.' },
      { h3: 'Same hour all year', p: 'Clock changes are handled on our side so your lesson time holds.' }
    ],
    spec: { title: 'Why online', p: 'A group at exactly one level is far easier to build from the whole country than from a single town, and video removes the journey.' }
  },

  fees: {
    h2: 'Fees for Newbury learners',
    intro: 'Newbury learners pay the rate we use for all students outside India.',
    first: 'First lesson: free, full length, with a course suggestion at the end.',
    group: 'Group lessons, about eight a month.',
    private: 'Private lessons, about eight a month.',
    closer: 'Our prices are in US dollars and we do not convert them to pounds. The trial is free, and no invoice is raised until a course and a regular time are agreed. See the pricing page for holidays, missed lessons and changes between group and private.'
  },

  reviewsH2: 'Google reviews from Berkshire families and learners around the UK',

  book: {
    h2: 'Book a free Newbury lesson',
    intro: 'Tell us the learner\'s age or school year and a subject or hobby they like. The first lesson might be a pattern puzzle, a Scratch game made with an AI, some first Python, or a chart of real river readings.',
    success: 'Thank you. We have received your Newbury request.'
  },

  faq: {
    h2: 'Newbury questions',
    intro: 'The river project, Python, AI and the practical details.',
    items: [
      { q: 'What is the population of Newbury?', a: 'The ONS gives 42,260 usual residents for the Newbury built-up area at the 2021 census. West Berkshire had 161,448.' },
      { q: 'Do you offer online coding and Python classes in Newbury?', a: 'Yes. Learners aged 6 to 67 in Newbury, Speen, Shaw, Wash Common, Greenham or anywhere in West Berkshire can join, since all lessons are live online.' },
      { q: 'What does a Savitzky-Golay filter do?', a: 'It smooths noisy readings by fitting a low-order polynomial to each window of points by least squares and keeping the fitted middle value, which preserves peaks better than a plain average.' },
      { q: 'Why do trailing averages lag?', a: 'Because they only use past readings, so a rise shows up only after enough of it has entered the window. At a 24-hour window the Lambourn peaks appeared a median of 982 minutes late.' },
      { q: 'What did the Newbury project find?', a: 'Over a 24-hour window, a moving average kept 77.8% of a typical rise in the 2025 Shaw readings, while an order-4 Savitzky-Golay filter kept 99.1% but removed less of the small wobble.' },
      { q: 'What is vibe coding?', a: 'Asking an AI in ordinary words for a program, then reading, running and fixing its code. We teach it alongside Python written by the learner.' },
      { q: 'When do learners move on to AI agents?', a: 'Once they can write Python unaided, usually from the sixth form or as adults. Copilot Studio agents are one-to-one only.' },
      { q: 'Will this help with GCSE computer science or maths?', a: 'Data handling, averages and algorithms feature in GCSE and A level computer science and maths, and this project uses all of them. We make no promises about grades.' },
      { q: 'How much do lessons cost?', a: 'The first lesson is free; then USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Can lessons pause for holidays?', a: 'Yes. Let us know the dates and we will skip those weeks.' }
    ]
  },

  next: {
    eyebrow: 'See also',
    h2: 'Other Berkshire and South East pages',
    html: 'We also have pages for <a class="cg-inline-link" href="/best-coding-class-in-reading">Reading</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bracknell">Bracknell</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-wokingham">Wokingham</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-basingstoke">Basingstoke</a>. Other places are listed on <a class="cg-inline-link" href="/coding-classes-in-berkshire">the county page</a>, <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">the South East region page</a> and <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">the page for the whole UK</a>.',
    waLabel: 'Contact us on WhatsApp'
  },

  footerHeading: 'Newbury and Berkshire',
  footerPlaces: [
    { href: '/coding-classes-in-berkshire', label: 'Berkshire' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-nby .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.5vw, 2rem); }
.cg-root.cg-nby .cg-hero h1 { font-weight: 740; letter-spacing: -0.02em; line-height: 1.1; }
.cg-root.cg-nby .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-nby .cg-eyebrow { letter-spacing: 0.13em; font-weight: 680; text-transform: uppercase; font-size: 0.81rem; }
.cg-root.cg-nby .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.016em; }
.cg-root.cg-nby .cg-table caption { font-weight: 540; text-align: left; font-size: 0.9rem; }
.cg-root.cg-nby .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nby .cg-table td:first-child { font-weight: 640; }
.cg-root.cg-nby .cg-ladder-col { background: color-mix(in srgb, var(--cg-accent) 4%, transparent); border-radius: 6px; padding: 0.7rem; }
.cg-root.cg-nby .cg-callout { border-left-width: 4px; border-radius: 8px; }
`,

  dossier: {
    curriculumAuthority: 'West Berkshire (E06000037), Census 2021 TS001 usual residents 161,448. ONS 2021 BUA (published): Newbury 42,260. English national curriculum, GCSE and A level. postcodes.io suburban areas with nearest postcode in the Newbury BUA: Speen, Shaw, Wash Common, Donnington, Greenham.',
    localProject: 'Savitzky-Golay vs moving average on Environment Agency Hydrology API, Shaw (River Lambourn, NRFA 39041), 15-minute level, 2025: 35,040 Good readings, none missing (98 unchecked off-grid excluded). Level 1.363 to 1.832 m; step sd 0.62 mm; 8 largest rises, largest 143 mm (5 January). Kept (mean, worst) at 24 h: MA 77.8%, 63.6%; SG2 94.5%, 83.5%; SG4 99.1%, 89.4%. Trailing average median peak delay 982 min at 24 h. Step sd after 24 h: MA 0.183 mm, SG4 0.305 mm. Orders 2 and 3 identical.',
    requiredMentions: [
      '42,260',
      'Wash Common',
      'Greenham',
      'River Lambourn',
      'Savitzky-Golay',
      '35,040 quality-checked values',
      '77.8%',
      '982 minutes',
      'savgol_filter'
    ],
    sources: [
      { claim: 'Environment Agency Hydrology API, station Shaw (River Lambourn), 15-minute level readings for 2025, Open Government Licence.', url: 'https://environment.data.gov.uk/hydrology/id/stations/a7709ed1-2912-4369-b70e-b9e78568408e' },
      { claim: 'Savitzky A. and Golay M. J. E. (1964), Smoothing and differentiation of data by simplified least squares procedures, Analytical Chemistry 36(8), 1627 to 1639.', url: 'https://doi.org/10.1021/ac60214a047' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations and output-area lookup.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for West Berkshire.', url: 'https://api.postcodes.io/places?q=Wash%20Common' }
    ],
    rejectedClaims: [
      'Flooding or flood risk at Newbury: not analysed or mentioned.',
      'Causes of any rise (rain, weed cutting, gauge work): not investigated; not claimed.',
      'Levels as depths of water: the readings are on the gauge\'s own scale; described that way.',
      'That the River Lambourn joins the Kennet in Newbury: not needed and not stated.',
      'Named schools and term dates: none read or named.',
      'Sterling prices: none.'
    ]
  }
};
