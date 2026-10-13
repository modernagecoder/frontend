'use strict';
// Moreton Bay (cg- regional city page, Australia cluster Phase 7, row 200). Shaped page (online coding and Python).
// Spine: how much memory does it take to hold every timetabled bus and train stop in Moreton Bay, and why does the
// container matter more than the data? Data: Translink SEQ GTFS (Queensland Government open data, CC BY 4.0), feed
// valid 7 October to 6 December 2026 (feed_info 20261007 to 20261206), 2,879,577 stop times in the whole feed.
// Stops filtered by point-in-polygon against the ABS ASGS 2021 Moreton Bay LGA boundary (code 35010, read 10 October
// 2026, scratchpad au/r8/dl/mrb_lga.json): 1,347 stops, 137,865 stop time rows, 8,525 trips. Our code (au/r8/
// mrb_slots2.py, Python 3.13.6, tracemalloc, same strings shared): dict 38.6 MB (272 bytes per object including its
// container); plain class 18.8 MB (176 bytes, object plus instance dict); __slots__ class 13.3 MB (88 bytes); tuple
// 14.4 MB (96); namedtuple 15.5 MB (96); dataclass 18.8 MB (176); dataclass(slots=True) 13.3 MB (88). Lesson family:
// __slots__ and per-object memory; screened free site-wide on 10 October 2026 and claimed by AU-R8. An earlier
// rectangle filter (2,794 stops, 450,795 rows) was dropped because it included northern Brisbane suburbs.
// Place facts read raw on 10 October 2026: ABS Census 2021 QuickStats, Moreton Bay LGA (LGA35010), with Queensland
// and Australia: 476,340 people; median age 39; 132,607 families; 188,200 private dwellings; 2.6 people per household;
// separate house 138,771 (81.1 percent; Qld 74.8; Australia 72.3); flat or apartment 7,974 (4.7; Qld 12.5; Australia
// 14.2); Professionals 39,202 (17.9; Qld 21.4; Australia 24.0); Technicians and Trades Workers 32,335 (14.7; Qld 13.7;
// Australia 12.9); Bachelor Degree level and above 65,353 (17.1; Qld 21.9; Australia 26.3); aged 15 to 19: 30,026
// (6.3; Qld 6.1); aged 20 to 24: 27,256 (5.7; Qld 6.3). ABS ERP Moreton Bay LGA (35010) 30 June 2025: 532,445.
// Queensland 2027 term dates from education.qld.gov.au future dates. Excluded by the cluster rules: income, rent,
// mortgage, ancestry, birthplace, language, religion, health (aged care industry figures omitted).

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'MORETON BAY', label: 'Moreton Bay', blurb: 'Moreton Bay, where 137,865 timetabled stops show how much memory a Python object really costs.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-moreton-bay',
  code: 'mrtb',
  accent: '#203262',
  accentRationale: 'Moreton Bay: a deep tidal navy (HSV saturation 0.67, value 0.38, hue 224), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 12.6:1 on white and 10.1:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Moreton Bay',
    eyebrow: 'Moreton Bay, north of Brisbane, Queensland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Queensland', href: '/coding-and-ai-classes-in-queensland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Moreton Bay, Queensland',
  title: 'Online Coding and Python Classes in Moreton Bay | Live Lessons',
  description: 'Live online Python and coding classes for Moreton Bay teenagers and adults, with a project that loads every local timetabled stop and measures the memory it uses.',
  ogDescription: 'Python for Moreton Bay learners, built on Translink timetable data and a question most courses skip: what does each object cost?',
  twitterDescription: 'Online Python for Moreton Bay teens and adults, live lessons, first one free.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Moreton Bay Learners',
    description: 'Level-matched online Python, data structures, memory and performance for teenagers and adults from Redcliffe to Caboolture and across Moreton Bay, taught live in English.'
  },

  h1: 'Online coding and Python classes in Moreton Bay',
  capsuleQ: 'What are the best online coding and Python classes in Moreton Bay?',
  capsule: 'Live Python lessons in which a Moreton Bay teenager or adult works with data big enough to matter, measures what their code costs, and explains the trade-offs to a teacher. The council area counted 476,340 people at the 2021 Census. Lessons run online, privately or in a small group at the same level, and the first lesson is free.',
  lead: 'Translink publishes its whole south east Queensland timetable as open data: every trip, every stop, every scheduled time. Inside the Moreton Bay council boundary that comes to 1,347 stops and 137,865 timetabled stop times in the current feed, from Kippa-Ring and Petrie stations to the buses of Bribie Island. Load them into Python as dictionaries and they take 38.6 megabytes. Load the same values into a class that declares its fields with __slots__ and they take 13.3. Nothing about the timetable changed, only the containers holding it. Our Moreton Bay learners find out where memory goes in a Python program and how to stop wasting it.',
  wa: 'Hello Modern Age Coders, I would like a free online Python class for a learner in Moreton Bay.',

  picks: {
    eyebrow: 'Course picks for Moreton Bay',
    h2: 'Python paths for Moreton Bay learners',
    intro: 'Each one arrives at the timetable project below. A free lesson picks the right start, and no card is asked for.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the start through files, dictionaries and the first custom classes.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Choosing data structures by cost, measuring speed and memory instead of guessing.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Classes, dataclasses, __slots__ and profiling, with tests at every stage.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'How containers are built underneath, and when that changes a design.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Moreton Bay in the Census',
      h2: 'A council area of 476,340 north of Brisbane',
      intro: 'The 2021 Census for the Moreton Bay council area, placed beside Queensland and Australia.',
      body: [
        { kind: 'p', text: 'Moreton Bay was home to 476,340 people with a median age of 39. They made up 132,607 families and lived in 188,200 private dwellings, at 2.6 people per household.' },
        { kind: 'table', caption: 'Moreton Bay against Queensland and Australia (2021 Census shares)', head: ['Share', 'Moreton Bay', 'Queensland', 'Australia'], rows: [
          ['Separate houses (138,771 dwellings)', '81.1%', '74.8%', '72.3%'],
          ['Professionals (39,202 people)', '17.9%', '21.4%', '24.0%'],
          ['Bachelor degree or above (65,353 people)', '17.1%', '21.9%', '26.3%'],
          ['Technicians and trades workers (32,335 people)', '14.7%', '13.7%', '12.9%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Units and flats', p: 'There were 7,974 flats and apartments, 4.7% of dwellings, against 12.5% for Queensland.' },
          { h3: 'Fifteen to nineteen', p: 'Residents aged 15 to 19 numbered 30,026, or 6.3% of the population.' },
          { h3: 'Twenty to twenty-four', p: 'Another 27,256 residents were aged 20 to 24, 5.7% of the total.' }
        ] },
        { kind: 'p', text: 'The ABS estimates 532,445 people in Moreton Bay at 30 June 2025. Because the bureau adds small random changes to Census cells, rows may not sum to totals; all figures are printed as published, and we never total rows ourselves.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How much memory does Moreton Bay\'s timetable take in Python?',
      intro: 'The 137,865 stop times at Moreton Bay stops in Translink\'s open timetable feed, loaded seven different ways and measured with Python\'s tracemalloc.',
      body: [
        { kind: 'table', caption: 'Same 137,865 records, seven containers (our measurements, Python 3.13, 10 October 2026)', head: ['Container', 'Memory for all records', 'Bytes per record'], rows: [
          ['Dictionary', '38.6 MB', '272'],
          ['Plain class', '18.8 MB', '176'],
          ['Dataclass', '18.8 MB', '176'],
          ['Named tuple', '15.5 MB', '96'],
          ['Tuple', '14.4 MB', '96'],
          ['Class with __slots__', '13.3 MB', '88'],
          ['Dataclass with slots=True', '13.3 MB', '88']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Pick out the stops', p: 'The feed lists stops by coordinates. A point-in-polygon test against the ABS council boundary keeps the 1,347 inside Moreton Bay and drops the northern Brisbane suburbs a simple rectangle would catch.' },
          { h3: '2. Load seven ways', p: 'Each stop time has seven fields: trip, arrival, departure, stop, sequence and two pickup flags. The same strings and numbers go into every container, so only the container changes.' },
          { h3: '3. Measure, do not guess', p: 'tracemalloc counts the bytes each version allocates. Dictionaries cost almost three times as much as slotted objects for exactly the same timetable.' }
        ] },
        { kind: 'callout', h3: 'Where the bytes go', p: 'An ordinary Python object keeps its attributes in a hidden dictionary, built to accept new keys at any time. Declaring __slots__ tells Python the fields in advance, so it stores them in fixed positions with no dictionary at all. Across 137,865 records that saves 25.3 megabytes against plain dictionaries. The whole south east Queensland feed holds 2,879,577 stop times, roughly 21 times as many, which is where these choices stop being academic.' },
        { kind: 'p', text: 'The feed is Translink\'s, valid from 7 October to 6 December 2026, used under its open licence. Memory figures are our own, measured on Python 3.13.6; other versions and platforms give somewhat different numbers, which is why learners measure on their own machines.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Measuring memory',
      h2: 'How to find out what your data really costs',
      intro: 'Practised on Moreton Bay\'s timetable, then applied to logs, sensor readings and any program that holds many small records.',
      body: [
        { kind: 'table', caption: 'Steps in the Moreton Bay memory study', head: ['Step', 'Tool', 'Why'], rows: [
          ['Fix the data first', 'Load the strings once and reuse them', 'Only the container should differ between runs'],
          ['Measure allocation', 'tracemalloc', 'Counts what each version adds, not what the process already held'],
          ['Inspect one object', 'sys.getsizeof on the object and its __dict__', 'Shows 272, 176 and 88 bytes directly'],
          ['Weigh the trade-off', 'Try adding a new attribute', 'Slotted objects refuse, which is the price of the saving']
        ] },
        { kind: 'p', text: 'Memory optimisation is not always worth it. For a few thousand records the difference is invisible. The skill is knowing how to measure, so the decision rests on numbers rather than on habit or a rule copied from a forum.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Load the stop times as dictionaries, then as a small class, and compare sys.getsizeof for one record.' },
          { h3: 'University students', p: 'Profile all seven containers with tracemalloc, explain each result and test how attribute access speed compares.' },
          { h3: 'Adults at work', p: 'Before scaling a script up to millions of rows, measure the container cost on a sample like this one.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is not affiliated with Translink, the Queensland Government, the ABS or the City of Moreton Bay. The timetable and statistics belong to them; the measurements are our own.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Moreton Bay',
      h2: 'Queensland time and the second half of 2027',
      intro: 'When a Moreton Bay learner can fit in a live lesson.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A fixed clock', p: 'Moreton Bay keeps Queensland time, UTC plus 10, with no daylight saving to plan around.' },
          { h3: 'India time', p: 'Moreton Bay is four and a half hours ahead of India time all through the year.' },
          { h3: 'Southern summer', p: 'Between October and April, Sydney and Melbourne are an hour ahead; Moreton Bay lessons keep their hour.' }
        ] },
        { kind: 'spec', title: 'Queensland school terms later in 2027', p: 'The department lists Term 3 of 2027 from Monday 12 July to Friday 17 September and Term 4 from Tuesday 5 October to Friday 10 December, with 44 days of summer holidays to follow.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first dictionary to profiled programs',
    intro: 'Ages give a rough idea only; the free lesson places each learner.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Lists and dictionaries', p: 'Storing records, looking things up and printing tidy results.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Classes and costs', p: 'Writing classes, comparing containers and timing code.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Profiling', p: 'tracemalloc, cProfile and designing for memory and speed together.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Scaling scripts', p: 'Taking a working script from a sample to the full dataset without surprises.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant choose a lean container?',
    intro: 'It usually reaches for a dictionary.',
    p1: 'Ask a chatbot to load the Moreton Bay timetable and it will most likely produce a list of dictionaries, the most familiar pattern in its training. It works, and it uses almost three times the memory of a slotted class for the same records.',
    p2: 'Our Moreton Bay learners let AI write the loader, then measure it with tracemalloc and try the alternatives themselves. They learn to ask the assistant for the trade-offs, not just the code.',
    closer: 'A Moreton Bay learner who has measured 38.6 megabytes shrink to 13.3 will check the cost of AI-written code before trusting it at scale, whatever arrives after 2026.',
    blogAnchor: 'why understanding code still beats copying it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Redcliffe to Caboolture, one online class',
    intro: 'A live lesson online is equally close to every part of Moreton Bay.',
    cells: [
      { h3: 'Queensland time only', p: 'Lesson times are written in Moreton Bay time and stay put all year.' },
      { h3: 'Queensland year levels', p: 'Teachers plan to Queensland year levels, including QCE seniors, and teach in English.' },
      { h3: 'Write code on day one', p: 'The trial lesson is genuine programming with a teacher; we then suggest a course and time, and no payment details are taken.' },
      { h3: 'Fifteen to twenty per group', p: 'Learners share a level, drawn from different places so every stage has a usable slot.' },
      { h3: 'Two lessons each week', p: 'About eight a month, with holidays and exam periods planned ahead.' },
      { h3: 'Evening slots for workers', p: 'Adults commuting into Brisbane can join later groups or book one-to-one lessons.' }
    ],
    spec: { title: 'Written in local time', p: 'Every lesson time we send is in Queensland time, so there is nothing to convert.' }
  },

  fees: {
    h2: 'Online Python fees for Moreton Bay',
    intro: 'Three options, stated plainly.',
    first: 'One free lesson that ends with our suggested level, course and time.',
    group: 'About eight group lessons a month, with fifteen to twenty learners at your level.',
    private: 'About eight one-to-one lessons a month with the same teacher.',
    closer: 'Moreton Bay families pay the same US dollar fee as families anywhere else in Australia. Nothing is charged before the trial settles a course and time, and the pricing page explains holidays, missed lessons and changing format.'
  },

  reviewsH2: 'What learners and parents say on Google',

  book: {
    h2: 'A few details and we will get the trial ready',
    intro: 'We set the first exercise ahead: building a small dictionary of stops for a Year 8 beginner, the container comparison for a Year 11 student, or a full tracemalloc study for an adult.',
    success: 'Thank you. We will be in touch soon about an online Python class in Moreton Bay.'
  },

  faq: {
    h2: 'Moreton Bay Python class questions',
    intro: 'Questions Moreton Bay families and adult learners ask before they book.',
    items: [
      { q: 'How many people live in Moreton Bay?', a: 'The 2021 Census counted 476,340 people in the Moreton Bay council area. The ABS estimate at 30 June 2025 is 532,445.' },
      { q: 'What does __slots__ do in Python?', a: '__slots__ is a class attribute that lists the only fields an object may have. Python then stores those fields in fixed slots instead of a per-object dictionary, which saves memory and stops new attributes being added by mistake.' },
      { q: 'What is the Moreton Bay timetable project?', a: 'Learners download Translink\'s open timetable feed, keep the stops inside the Moreton Bay council boundary, load the 137,865 stop times in seven kinds of container, and measure the memory each one uses with tracemalloc.' },
      { q: 'Is a dataclass more efficient than a dictionary?', a: 'In our Moreton Bay measurements a plain dataclass used 18.8 MB against 38.6 MB for dictionaries, and a dataclass with slots=True used 13.3 MB. The exact numbers vary with Python version, so learners measure on their own machine.' },
      { q: 'Can QCE students join?', a: 'Yes. Year 11 and 12 students fit lessons around their QCE subjects, and any assessed work stays entirely their own.' },
      { q: 'What lesson times suit Moreton Bay?', a: 'After school, evenings and weekends, agreed in the trial and written in Queensland time, four and a half hours ahead of India time.' },
      { q: 'Is there anything for primary school children?', a: 'Yes, from age 6 with visual coding tools; the timetable project here is designed for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders office in Moreton Bay?', a: 'No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.', boiler: true },
      { q: 'What do online Python classes in Moreton Bay cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How large are the groups?', a: 'Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'More in Queensland',
    h2: 'Pages for Moreton Bay\'s neighbours',
    html: 'South across the boundary is <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">the Brisbane coding page</a>, with <a class="cg-inline-link" href="/coding-classes-for-kids-brisbane">coding classes for kids in Brisbane</a> for younger learners. Further north there is <a class="cg-inline-link" href="/ai-and-programming-classes-in-sunshine-coast">AI and programming on the Sunshine Coast</a>, and the state guide is <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">coding and AI classes in Queensland</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Moreton Bay and Queensland',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/ai-and-programming-classes-in-sunshine-coast', label: 'Sunshine Coast' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-mrtb .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.9vw, 2.35rem); }
.cg-root.cg-mrtb .cg-hero h1 { font-weight: 715; letter-spacing: -0.017em; line-height: 1.08; }
.cg-root.cg-mrtb .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-mrtb .cg-eyebrow { letter-spacing: 0.13em; font-weight: 650; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-mrtb .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.01em; }
.cg-root.cg-mrtb .cg-grid-3 { gap: clamp(0.95rem, 2.3vw, 1.75rem); }
.cg-root.cg-mrtb .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-mrtb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mrtb .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-mrtb .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Moreton Bay LGA, ABS Census 2021 QuickStats, area code LGA35010, with Queensland and Australia (read 10 October 2026): 476,340 people; median age 39; 132,607 families; 188,200 private dwellings; 2.6 people per household; separate house 138,771 (81.1 percent; Qld 74.8; Australia 72.3); flat or apartment 7,974 (4.7 percent; Qld 12.5; Australia 14.2); Professionals 39,202 (17.9 percent; Qld 21.4; Australia 24.0); Technicians and Trades Workers 32,335 (14.7 percent; Qld 13.7; Australia 12.9); Bachelor Degree level and above 65,353 (17.1 percent; Qld 21.9; Australia 26.3); aged 15 to 19: 30,026 (6.3 percent; Qld 6.1); aged 20 to 24: 27,256 (5.7 percent; Qld 6.3). ABS ERP Moreton Bay LGA (35010) 30 June 2025: 532,445. Queensland Department of Education future dates: 2027 Term 3 Monday 12 July to Friday 17 September; Term 4 Tuesday 5 October to Friday 10 December; holidays to Sunday 23 January 2028 (44 days). IANA tz Australia/Brisbane UTC+10, no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: '__slots__ and per-object memory. Translink SEQ GTFS (data.qld.gov.au, CC BY 4.0), feed_info start 20261007, end 20261206; 2,879,577 stop_times rows in the feed. Stops inside the ABS ASGS 2021 Moreton Bay LGA polygon (lga_code_2021 35010, 7 rings, maxAllowableOffset 0.0005, even-odd test): 1,347 stops; 137,865 stop_times rows; 8,525 trips. Stops checked: Kippa-Ring, Petrie, Strathpine and Caboolture stations and Bribie Island stops inside; Bracken Ridge and Chermside stops outside. tracemalloc, Python 3.13.6, strings shared across runs, 7 fields per record: dict 38.6 MB, per-object 272 B; plain class 18.8 MB, 176 B (object plus instance dict); __slots__ 13.3 MB, 88 B; tuple 14.4 MB, 96 B; namedtuple 15.5 MB, 96 B; dataclass 18.8 MB, 176 B; dataclass(slots=True) 13.3 MB, 88 B.',
    requiredMentions: [
      '476,340',
      '132,607',
      '188,200',
      '532,445',
      '137,865',
      '38.6 megabytes',
      '1,347 stops',
      '2,879,577',
      'From Redcliffe to Caboolture, one online class'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Moreton Bay LGA (LGA35010): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA35010' },
      { claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Moreton Bay LGA 35010, total persons, 2025.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.35010.LGA2025.A?format=csvfilewithlabels' },
      { claim: 'Translink General transit feed specification (GTFS), Queensland Government open data (CC BY 4.0).', url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink' },
      { claim: 'ABS ASGS 2021 Local Government Areas layer, Moreton Bay boundary used for the point-in-polygon filter.', url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer' },
      { claim: 'Python documentation, tracemalloc and the data model entry for __slots__.', url: 'https://docs.python.org/3/reference/datamodel.html#slots' },
      { claim: 'Queensland Department of Education, future term dates (2027).', url: 'https://education.qld.gov.au/about-us/calendar/future-dates' }
    ],
    rejectedClaims: [
      'Service frequency, punctuality or patronage for Moreton Bay routes: not measured here and not shown.',
      'Exact memory figures for other Python versions or platforms: measured only on Python 3.13.6 on Windows, and stated as such.',
      'Stops just outside the council boundary, including northern Brisbane suburbs: excluded by the polygon filter.',
      'Aged care and health industry figures from QuickStats: excluded by the cluster rules.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Translink, the Queensland Government, the ABS or the City of Moreton Bay.'
    ]
  }
};
