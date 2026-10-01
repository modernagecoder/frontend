'use strict';
// Bletchley, Milton Keynes (cg- town page, UK cluster Phase 10, towns band B, row 535). Keyword slug per the owner's
// rotation, with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how can a Python program
// answer "which rows match all these conditions?" hundreds of times faster by storing each yes/no column as the bits of
// one integer? (a bitmap index built from Python ints, on Milton Keynes census output areas).
// Data (read 30 September 2026): Nomis Census 2021 for all 874 Milton Keynes output areas: TS006 density, TS017
// household size, TS044 accommodation type, TS007A age; ONS OA21 to BUA22 lookup: 129 output areas in the Bletchley BUA.
// Our run (scratchpad blt/bm.py, Python 3.13.6 on our laptop): seven yes/no columns, each held as one Python int with a
// bit per output area: Bletchley BUA 129; density at least 5,000 per km2 355; one-person households at least 35% 148;
// flats (purpose-built, converted or in another converted building) at least 25% 225; aged 65+ at least 20% 234;
// detached at least 40% 250; aged 0-14 at least 20% 418. Queries (answers identical three ways; timings are the fastest
// of five repeats): Q1 Bletchley & flats & one-person = 10 output areas, int bitmap 0.25 us, Python loop 53.0 us, NumPy
// boolean arrays 5.31 us; Q2 Bletchley & children & not detached = 61, 0.29 / 58.1 / 5.61 us; Q3 (dense | flats) & not
// Bletchley & older = 56, 0.37 / 109.8 / 6.85 us. Loop time over bitmap time 197x to 299x. Size of one column: int 136
// bytes; list of 874 bools 7,832 bytes; NumPy bool array 874 bytes.
// Lesson family: bitmap index with Python ints as bitsets (AND, OR, NOT, bit_count).
// Place facts: Milton Keynes TS001 287,060; ONS 2021 BUAs: Milton Keynes 197,340; Bletchley 45,010 (our OA sum inside
// the borough 44,119, so the BUA reaches over the boundary); Newport Pagnell 15,250; Olney 6,600.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BLETCHLEY', label: 'Bletchley', blurb: 'Online coding and Python classes for Bletchley in Milton Keynes, with a Python project that answers census questions by AND-ing the bits of whole integers.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-bletchley',
  code: 'blt',
  accent: '#1C2868',
  accentRationale: 'Bletchley: a deep navy (13.52:1 contrast on white), chosen by hand as a muted tone kept clear of neighbouring pages',
  pageType: 'city',
  place: {
    name: 'Bletchley',
    eyebrow: 'Bletchley, Milton Keynes, Buckinghamshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Buckinghamshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Milton Keynes', href: '/best-coding-class-in-milton-keynes' },
    { label: 'Buckinghamshire', href: '/coding-classes-in-buckinghamshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bletchley, Milton Keynes',
  title: 'Online Coding and Python Classes in Bletchley, Milton Keynes',
  description: 'Online coding, Python, AI and vibe coding classes for Bletchley, Fenny Stratford, Far Bletchley, Water Eaton and Newton Leys, ages 6 to 67. Lesson one is free.',
  ogDescription: 'Online coding and Python classes for Bletchley, with a Python project: a bitmap index over 874 Milton Keynes census areas answers queries about 200 times faster than a loop.',
  twitterDescription: 'Bletchley, Milton Keynes: coding, Python, AI and vibe coding lessons live online for ages 6 to 67, beginning with a free one.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Bletchley, Milton Keynes',
    description: 'Coding, Python, AI, vibe coding and maths for children, teenagers and adults in Bletchley and Milton Keynes, taught live online with Python projects that are timed and checked.'
  },

  h1: 'Online coding and Python classes in Bletchley',
  capsuleQ: 'Which online coding and Python classes serve Bletchley learners best?',
  capsule: 'The ONS counted 45,010 people in the Bletchley built-up area at the 2021 census; Milton Keynes as a whole had 287,060. Fenny Stratford, Far Bletchley, Water Eaton, Newton Leys and Eaton Leys are recorded by postcodes.io as suburban areas whose nearest postcode sits in the Bletchley built-up area. Modern Age Coders teaches coding, Python, AI, vibe coding and maths live over video to learners from six to 67, with tutors in India, in one-to-one lessons or in classes of five to ten at matching levels. Our learners are expected to know what their code costs, in time and in memory, and to measure it rather than guess. The Bletchley project stores yes-or-no facts about every census area in Milton Keynes as the bits of a handful of whole numbers, then answers questions with single operations that run hundreds of times faster than a loop. Lesson one is free and ends with our suggestion for a course; group lessons then cost USD 100 a month and private lessons USD 150 a month.',
  lead: 'A computer already thinks in bits, and Python lets you use that directly. A Python integer can be as long as you like, so a single integer can hold one bit for every row of a table: 1 for yes, 0 for no. Two such integers can be combined with one "and" operation, and CPython works through them in chunks of 30 bits at a time instead of one row at a time. Databases call a set of these a bitmap index. It is one of the oldest tricks for answering "which rows match all of these conditions?" quickly, and Milton Keynes\' 874 census output areas, 129 of them in Bletchley, make a good table to try it on.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python lesson for a learner in Bletchley.',

  picks: {
    eyebrow: 'Courses to start with',
    h2: 'Python, coding and AI courses for Bletchley',
    intro: 'A course for every age range. Whichever you pick, lesson one is live, costs nothing and is booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: write each classmate\'s answers as a row of lights, then find who said yes to everything.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Ask an AI for a Scratch game with switches that turn lights on and off, then predict the pattern.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from data types to bit operations, with the Milton Keynes bitmap index as a project.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Web and Python builds made with an AI assistant, each one timed and tested by the learner.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Milton Keynes borough',
      h2: 'Bletchley among the built-up areas of Milton Keynes',
      intro: 'The ONS built-up areas in the borough, with their 2021 populations as published.',
      body: [
        { kind: 'table', caption: 'Built-up areas in Milton Keynes borough, residents at the 2021 census (ONS)', head: ['Built-up area', 'Residents'], rows: [
          ['Milton Keynes', '197,340'],
          ['Bletchley', '45,010'],
          ['Newport Pagnell', '15,250'],
          ['Olney', '6,600']
        ] },
        { kind: 'p', text: 'We print the ONS figures as they are and do not add them. One detail matters for the project below: when we sum the census output areas of Milton Keynes that the ONS lookup places in Bletchley, we get 44,119, a little short of 45,010, so the Bletchley built-up area reaches over the borough boundary. postcodes.io records Bow Brickhill as a village with its own built-up area. Schools here follow the national curriculum for England, and we plan round whatever term dates you send.' },
        { kind: 'callout', h3: 'Milton Keynes, Buckinghamshire and how we teach', p: 'The city has its own page at <a class="cg-inline-link" href="/best-coding-class-in-milton-keynes">coding classes in Milton Keynes</a>, the county at <a class="cg-inline-link" href="/coding-classes-in-buckinghamshire">Buckinghamshire</a> and the region at <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>. Our reasons for teaching thinking before tools are in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bletchley project',
      h2: 'A bitmap index in Python for 874 census areas',
      intro: 'Turn census facts into yes-or-no columns, store each column as one integer, and race three ways of querying them.',
      body: [
        { kind: 'p', text: 'The learner downloads four census tables from Nomis for every output area in Milton Keynes: population density, household size, type of home and age. From them the program makes seven yes-or-no columns, for example "at least a quarter of homes are flats" or "at least a fifth of residents are under 15", plus one column saying whether the area is in Bletchley. Each column is stored three ways: as a Python list of True and False, as a NumPy array of booleans, and as a single Python integer whose bit number i is 1 when output area i says yes.' },
        { kind: 'table', caption: 'How many of the 874 output areas answer yes (our thresholds on Census 2021 tables)', head: ['Column', 'Areas marked yes'], rows: [
          ['In the Bletchley built-up area', '129'],
          ['At least 5,000 residents per square kilometre', '355'],
          ['At least 35% of households are one person', '148'],
          ['At least 25% of homes are flats', '225'],
          ['At least 20% of residents are 65 or over', '234'],
          ['At least 40% of homes are detached', '250'],
          ['At least 20% of residents are under 15', '418']
        ] },
        { kind: 'p', text: 'A question such as "which Bletchley areas have many flats and many one-person households?" becomes one line: bletchley & flats & solo, followed by .bit_count() to count the ones. "Not" needs care, because Python integers have no fixed width: the learner flips the bits against a mask of 874 ones rather than using the ~ operator, which would produce a negative number. The program checks that all three methods return exactly the same answer before timing anything.' },
        { kind: 'table', caption: 'Three queries timed three ways (fastest of five repeats, Python 3.13 on our laptop; your machine will differ, the ratios much less)', head: ['Query', 'Matching areas', 'Integer bitmap', 'NumPy booleans', 'Python loop'], rows: [
          ['Bletchley and flats and one-person households', '10', '0.25 microseconds', '5.31 microseconds', '53.0 microseconds'],
          ['Bletchley and many children and not detached', '61', '0.29 microseconds', '5.61 microseconds', '58.1 microseconds'],
          ['Dense or flats, outside Bletchley, older residents', '56', '0.37 microseconds', '6.85 microseconds', '109.8 microseconds']
        ] },
        { kind: 'p', text: 'The integer bitmap answered each query between 197 and 299 times faster than looping over the rows, and more than ten times faster than NumPy, whose fixed overhead dominates on a table this small. It is also compact. One column as a Python integer takes 136 bytes; the same column as a list takes 7,832 bytes for the list alone; as a NumPy array, 874 bytes, one per area. Learners then ask the useful follow-up question: which part of the speed comes from handling 30 rows per internal step, and which from avoiding Python\'s loop overhead? Timing a loop in which every step does almost nothing helps separate the two.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Write yes and no answers as rows of lights on paper, then lay two rows on top of each other to find the "both" lights.' },
          { h3: 'Ages 11 to 15', p: 'Store a small class survey as integers in Python and answer questions with &, | and bit_count().' },
          { h3: 'Ages 15 and up', p: 'Build the full census bitmap index, time it against lists and NumPy, and explain the gaps.' }
        ] },
        { kind: 'callout', h3: 'Data and caveats', p: 'Census 2021 tables TS006, TS017, TS044 and TS007A via Nomis, and the ONS output area to built-up area lookup, under the Open Government Licence. The thresholds are ours and chosen to make interesting queries, not to describe any neighbourhood. Timings depend on the computer and the Python version; the counts do not.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Speed you can explain',
      h2: 'What a bitmap index teaches about AI and vibe coding',
      intro: 'Knowing how data is laid out in memory is what separates code that works from code that scales.',
      body: [
        { kind: 'table', caption: 'From Milton Keynes\' output areas to AI practice', head: ['In the project', 'In AI and vibe coding'], rows: [
          ['One integer holds a whole column', 'Representation decides speed as much as the algorithm'],
          ['197 to 299 times faster than a loop', 'Measure before and after any "optimisation"'],
          ['~ gave a negative number', 'Language details can quietly change an answer'],
          ['Three methods, identical answers first', 'Check correctness before timing anything'],
          ['NumPy slower on a tiny table', 'The fastest tool depends on the size of the job']
        ] },
        { kind: 'p', text: 'AI systems lean on the same idea at huge scale: models are increasingly stored and run with fewer bits per number because moving memory, not doing arithmetic, is often the bottleneck. At a smaller scale, when a learner vibe codes a data filter, the AI assistant will almost always write a loop or a pandas expression, which is fine until the table has millions of rows. Bletchley learners can recognise when a different representation is worth it, and can prove it with a timing rather than a hunch. AI agents come next for anyone who can already write Python alone, which in practice means older teenagers and adults, and we teach Copilot Studio agent building in private lessons and nowhere else. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents pathway for UK learners</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Nothing here has been checked by the Office for National Statistics or by postcodes.io; we simply use what they publish openly, and any slip in the analysis is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'From rows of lights to bit operations',
    intro: 'School years give us a first guess; the free lesson gives us the real starting point.',
    cols: [
      { band: 'Years 1 to 6', h3: 'How to think', p: 'Yes-and-no logic, patterns and counting in twos.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Switches, lights and games built with AI help and checked by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python in depth', p: 'Types, binary, bit operations and timing, alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Efficient Python', p: 'Working Python, then data structures, algorithms and AI.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and bits',
    h2: 'What is a bitmap index, and how do you build one in Python?',
    intro: 'A bitmap index stores each yes-or-no property of a table as a sequence of bits, one per row, so that questions combining several properties are answered by bitwise AND, OR and NOT on whole sequences at once; in Python each sequence can simply be one integer, and int.bit_count() counts the matching rows.',
    p1: 'Over 874 Milton Keynes census output areas, integer bitmaps answered three combined queries in 0.25 to 0.37 microseconds each, against 53.0 to 109.8 microseconds for a plain Python loop.',
    p2: 'A column stored as one integer took 136 bytes, where the same column as a Python list took 7,832.',
    closer: 'Bletchley teenagers who have timed their own index look past the first working version of any AI-written code and ask whether it will cope at scale. That instinct is built by writing and measuring code, which is exactly why learning to code still pays in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Class details',
    h2: 'Fenny Stratford, Far Bletchley and Water Eaton, live online',
    intro: 'All a learner needs is a computer with a webcam and a connection good enough for video.',
    cells: [
      { h3: 'Writing, not watching', p: 'The learner codes on a shared screen and the tutor keeps asking why.' },
      { h3: 'Starting level measured', p: 'The trial shows us what the learner already knows before we recommend.' },
      { h3: 'Free, full-length trial', p: 'No payment details, and a course suggestion at the end.' },
      { h3: 'Learners at one level', p: 'Classes of five to ten, gathered from all over the UK.' },
      { h3: 'Twice a week', p: 'We leave out any holiday weeks you tell us about.' },
      { h3: 'Unmoved by clock changes', p: 'Your UK lesson time stays the same when the clocks go forward or back.' }
    ],
    spec: { title: 'Why online', p: 'Enough learners at exactly the same stage are hard to find in one town. The whole of the UK supplies them easily.' }
  },

  fees: {
    h2: 'Bletchley lesson fees',
    intro: 'Bletchley learners are charged our international prices, the same everywhere outside India.',
    first: 'A full live lesson free of charge, ending with a course suggestion.',
    group: 'About eight group lessons a month.',
    private: 'About eight one-to-one lessons a month.',
    closer: 'We quote only in US dollars, never in sterling. Invoices begin after the trial, when the course and weekly time are agreed. Holidays, absences and moving between group and private lessons are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from South East families and learners across the UK',

  book: {
    h2: 'Book a free lesson for Bletchley',
    intro: 'Tell us the learner\'s age or year and one interest. The trial might be a rows-of-lights logic puzzle, a Scratch game built with AI, first Python, or a first bit operation.',
    success: 'Thank you. Your Bletchley request has arrived and we will reply soon.'
  },

  faq: {
    h2: 'Bletchley questions',
    intro: 'The bitmap project, Python, AI, vibe coding and practical arrangements.',
    items: [
      { q: 'How many people live in Bletchley?', a: 'The ONS figure for the Bletchley built-up area at the 2021 census is 45,010 usual residents. Milton Keynes as a whole had 287,060.' },
      { q: 'Are online coding and Python classes available in Bletchley?', a: 'Yes, live on video for ages 6 to 67, reaching Bletchley, Fenny Stratford, Far Bletchley, Water Eaton, Newton Leys and the rest of Milton Keynes.' },
      { q: 'What does bit_count() do in Python?', a: 'It returns how many 1 bits an integer has. Since Python 3.10 every int has it, which makes it the natural way to count matching rows in a bitmap.' },
      { q: 'Why not use ~ for NOT on a Python bitmap?', a: 'Because Python integers have no fixed width, so ~x equals -x - 1, a negative number. Flipping against a mask of ones, mask ^ x, keeps the bitmap the right length.' },
      { q: 'What do learners build in the Bletchley project?', a: 'Seven yes-or-no census columns for 874 Milton Keynes output areas, stored as lists, NumPy arrays and integers, with three queries answered and timed each way.' },
      { q: 'Is vibe coding taught?', a: 'Yes, at every age. The learner guides an AI to write code, then checks and tests it.' },
      { q: 'When do learners build AI agents?', a: 'Once they write Python without help, usually in sixth form or as adults. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Do you support GCSE and A level?', a: 'Yes, in computer science and maths, working for understanding. We do not promise grades.' },
      { q: 'How much are the lessons?', a: 'The first is free. After that, USD 100 per month for a group or USD 150 per month one-to-one.' },
      { q: 'Can we pause for holidays?', a: 'Yes. Send the dates and those weeks are skipped.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other Milton Keynes and Buckinghamshire pages',
    html: 'Different projects feature on the pages for <a class="cg-inline-link" href="/best-coding-class-in-milton-keynes">Milton Keynes</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-aylesbury">Aylesbury</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-high-wycombe">High Wycombe</a>, and the county is covered at <a class="cg-inline-link" href="/coding-classes-in-buckinghamshire">Buckinghamshire</a>. Start from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> for anywhere else.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Bletchley and Milton Keynes',
  footerPlaces: [
    { href: '/best-coding-class-in-milton-keynes', label: 'Milton Keynes' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-blt .cg-hero-grid { align-items: end; gap: clamp(1.2rem, 3.3vw, 2.6rem); }
.cg-root.cg-blt .cg-hero h1 { font-weight: 710; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-blt .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-blt .cg-eyebrow { letter-spacing: 0.13em; font-weight: 640; font-size: 0.8rem; }
.cg-root.cg-blt .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.015em; }
.cg-root.cg-blt .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 500; }
.cg-root.cg-blt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-blt .cg-table th { font-size: 0.82rem; font-weight: 700; letter-spacing: 0.02em; }
.cg-root.cg-blt .cg-ladder-col { border-left: 4px double var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-blt .cg-callout { border-left-width: 4px; border-radius: 14px; }
`,

  dossier: {
    curriculumAuthority: 'Milton Keynes (E06000042), Census 2021 TS001 usual residents 287,060. ONS 2021 BUAs (published): Milton Keynes 197,340; Bletchley 45,010 (straddles: our OA sum inside the borough 44,119); Newport Pagnell 15,250; Olney 6,600. postcodes.io suburban areas whose nearest postcode lies in the Bletchley BUA: Fenny Stratford, Far Bletchley, Water Eaton, Newton Leys, Eaton Leys; Bow Brickhill is a village with its own BUA. England national curriculum.',
    localProject: 'Nomis Census 2021 TS006, TS017, TS044, TS007A for 874 Milton Keynes OAs; ONS OA21-BUA22 lookup: 129 in Bletchley BUA. Seven boolean columns as Python ints (one bit per OA): Bletchley 129; density >=5,000/km2 355; one-person households >=35% 148; flats >=25% 225; 65+ >=20% 234; detached >=40% 250; under 15 >=20% 418. Queries (identical answers three ways; fastest of five repeats, Python 3.13.6): Bletchley & flats & solo 10 OAs, int 0.25 us, NumPy 5.31 us, loop 53.0 us; Bletchley & kids & not detached 61, 0.29/5.61/58.1; (dense | flats) & not Bletchley & older 56, 0.37/6.85/109.8; loop/bitmap 197-299x. Column size: int 136 bytes, list 7,832 bytes, NumPy 874 bytes. NOT via mask ^ x (Python ~x = -x-1). Lesson family: bitmap index, Python ints as bitsets, bit_count.',
    requiredMentions: [
      '45,010',
      '197,340',
      'Fenny Stratford',
      'Far Bletchley',
      'Water Eaton',
      'Newton Leys',
      'Eaton Leys',
      'bitmap index',
      'bit_count',
      '44,119',
      '7,832'
    ],
    sources: [
      { claim: 'Census 2021 tables TS006, TS017, TS044 and TS007A for Milton Keynes output areas, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS output area (2021) to built-up area (2022) lookup and 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places and nearest postcodes for Milton Keynes.', url: 'https://api.postcodes.io/places?q=Fenny%20Stratford' },
      { claim: 'Python documentation, int.bit_count() (added in Python 3.10) and bitwise operations on integers.', url: 'https://docs.python.org/3/library/stdtypes.html#int.bit_count' }
    ],
    rejectedClaims: [
      'Bletchley Park history: not used on this page (covered elsewhere on the site).',
      'Which neighbourhood any output area is: not named.',
      'That the timings hold on other machines: stated as machine-dependent.',
      'Denbigh, Mount Farm, Old Bletchley, Lakes Estate and Granby as suburbs: not found in postcodes.io; not listed.',
      'Sum of the listed built-up areas: not added (our OA sum of 44,119 is labelled as ours).',
      'Named schools and term dates: none named.',
      'Sterling prices: none.'
    ]
  }
};
