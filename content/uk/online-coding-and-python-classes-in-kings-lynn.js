'use strict';
// King's Lynn (cg- town page, UK cluster Phase 10, towns band B, row 523). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: two tide gauges on the Great Ouse report
// on different clocks (every 5 minutes and every 15 minutes); how do you line their readings up without inventing data
// or peeking at the future? (as-of join, pandas merge_asof, direction and tolerance.)
// Data (read 30 September 2026): Environment Agency flood-monitoring API, readings from 1 September 2026 00:05 UTC to
// 30 September 2026 17:15 UTC. King's Lynn gauge E47901 (River Great Ouse, tidal level, 5-minute measure, m AOD): 8,533
// readings, 8 gaps, longest 30 minutes; lowest -1.805 m AOD at 16:45 UTC on 12 September, highest 4.483 m AOD at 06:55
// UTC on 28 September. Freebridge gauge E22184 (15-minute measure, local datum in metres): 2,850 readings, one gap of 45
// minutes. EA coordinates put Freebridge 1.18 km from the King's Lynn gauge (our great-circle sum), to the south.
// Our run (scratchpad h7/kln/asof.py): 8,528 King's Lynn readings inside the shared window. Exact join on time: 2,841
// matched, 5,687 blank. merge_asof backward, tolerance 10 minutes: 8,522 filled, 6 blank; ages 0 min 2,841, 5 min 2,841,
// 10 min 2,840. direction nearest, tolerance 10 minutes: 2,841 rows filled from a reading 5 minutes later. Self-test,
// King's Lynn thinned to quarter hours then refilled: backward mean error 0.0818 m, largest 0.694 m, 26.2% over 0.10 m
// (5,671 rows); nearest 0.0637, 0.477, 16.2% (5,689 rows); straight-line interpolation 0.0104, 0.281, 0.8%. Steepest
// 10-minute rise at King's Lynn 0.884 m (to 17:00 UTC, 12 September); steepest 10-minute fall 0.238 m.
// Lesson family: as-of join. Screened: "as-of join", "merge_asof" 0 hits in content/; claimed in claims.txt. Norfolk
// county page = golden-section search; Norwich, Lowestoft and Ely pages use different families.
// Place facts: King's Lynn and West Norfolk TS001 154,325. ONS 2021 BUA (published): King's Lynn 47,615. postcodes.io
// suburban areas whose closest postcode is in the King's Lynn BUA: Gaywood, South Lynn, North Lynn, Fairstead, North
// Wootton, South Wootton, Hardwick (all PE30). West Lynn has no postcodes.io place entry; not listed.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'KING\'S LYNN', label: 'King\'s Lynn', blurb: 'Online coding and Python classes for King\'s Lynn, with a Python project that lines up two Great Ouse tide gauges reporting on different clocks.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-kings-lynn',
  code: 'kln',
  accent: '#0B386B',
  accentRationale: 'King\'s Lynn: a deep estuary blue (11.72:1 contrast), picked by hand and checked for distance from every accent in use',
  pageType: 'city',
  place: {
    // Typographic apostrophe: render-cg.js places place.name inside a single-quoted inline script without escaping.
    name: 'King’s Lynn',
    eyebrow: 'King\'s Lynn, West Norfolk, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Norfolk' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Norfolk', href: '/coding-classes-in-norfolk' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'King\'s Lynn, Norfolk',
  title: 'Online Coding and Python Classes in King\'s Lynn | Ages 6 to 67',
  description: 'Live online coding and Python lessons for King\'s Lynn, Gaywood, South Lynn and the Woottons, ages 6 to 67, with vibe coding and AI. Your first lesson is free.',
  ogDescription: 'Online coding and Python classes for King\'s Lynn, with a project that joins two Great Ouse tide gauges.',
  twitterDescription: 'King\'s Lynn Python and coding lessons, taught live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for King\'s Lynn',
    description: 'Online Python, coding, AI and maths lessons for children, teenagers and adults in King\'s Lynn and West Norfolk, taught live around real data the learner cleans and joins.'
  },

  h1: 'Online coding and Python classes in King\'s Lynn',
  capsuleQ: 'What are the best online coding and Python classes for King\'s Lynn?',
  capsule: 'The ONS counts 47,615 usual residents in the King\'s Lynn built-up area at the 2021 census, and 154,325 in the borough of King\'s Lynn and West Norfolk. Gaywood, South Lynn, North Lynn, Fairstead, Hardwick and North and South Wootton are gazetteer suburbs inside that built-up area. Modern Age Coders teaches Python, coding, vibe coding, AI and maths to people there aged six to 67, live over video from India, either privately or in a group of five to ten learners at one level. We start from real data rather than tidy exercises. After a free trial lesson we suggest a course. The King\'s Lynn project takes a month of Environment Agency readings from two tide gauges on the Great Ouse, one reporting every five minutes and one every fifteen, and teaches the learner to line them up honestly in Python. Monthly fees after the trial are USD 100 for group lessons and USD 150 for one-to-one.',
  lead: 'Two gauges watch the tidal Great Ouse at King\'s Lynn. One reports every five minutes, the other every fifteen, and neither waits for the other. Put their readings side by side and most rows have nothing to pair with. The obvious fixes each carry a quiet risk. Borrow the last reading and it may be ten minutes old, which on this river can mean most of a metre. Borrow the closest reading and it may come from the future. Fill the gap with a straight line and you have written numbers nobody measured. Choosing between them is a real programming decision, and the river makes the cost of each choice easy to see.',
  wa: 'Hello Modern Age Coders, we would like to book a free Python or coding trial lesson. We live in King\'s Lynn.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Python and coding courses for King\'s Lynn learners',
    intro: 'A starting point for each age. The opening lesson is live, costs nothing and needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Thinking like a programmer: ordering, matching, and writing instructions exact enough for a machine.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: describe a Scratch game to an AI, then test what it builds.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Typed Python with real data files, including the two-gauge tide project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from first steps to pandas, data cleaning and a first AI agent.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The town',
      h2: 'King\'s Lynn, Gaywood, Fairstead and the Woottons',
      intro: 'Two census totals and the suburb names that fall inside the town\'s built-up area.',
      body: [
        { kind: 'table', caption: 'Usual residents, Census 2021 (ONS)', head: ['Area', 'People'], rows: [
          ['King\'s Lynn built-up area', '47,615'],
          ['Borough of King\'s Lynn and West Norfolk', '154,325']
        ] },
        { kind: 'p', text: 'The two rows describe different areas and should not be combined. The borough stretches well beyond the town to Downham Market, Hunstanton and dozens of villages. On postcodes.io, Gaywood, South Lynn, North Lynn, Fairstead, Hardwick, North Wootton and South Wootton are suburban areas in the PE30 district, and for each one the nearest postcode lies in the King\'s Lynn built-up area. Schools here follow the national curriculum for England, so tell us the year group, anywhere from Year 2 to Year 13, and we will work around GCSE or A level computer science where it applies.' },
        { kind: 'callout', h3: 'Nearby pages', p: 'Try <a class="cg-inline-link" href="/best-coding-class-in-norwich">Norwich</a>, <a class="cg-inline-link" href="/best-coding-class-in-ely">Ely</a> or the <a class="cg-inline-link" href="/coding-classes-in-norfolk">Norfolk county page</a>. Why we teach judgement before tools is set out in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The King\'s Lynn project',
      h2: 'Joining two tide gauges that keep different clocks',
      intro: 'A month of Great Ouse readings, three ways of pairing them, and a test of what each one costs.',
      body: [
        { kind: 'p', text: 'The Environment Agency publishes live river and tide readings through an open web service. The learner downloads September 2026 for two gauges on the Great Ouse. The King\'s Lynn gauge reported every five minutes: 8,533 readings between 00:05 UTC on 1 September and 17:15 UTC on 30 September, with eight short breaks, the longest half an hour. The Freebridge gauge, 1.18 km to the south by the Agency\'s own coordinates, reported every quarter of an hour: 2,850 readings with a single 45-minute break. Over the month the King\'s Lynn level ran from -1.805 m to 4.483 m above Ordnance Datum.' },
        { kind: 'p', text: 'Inside the window both gauges cover, King\'s Lynn has 8,528 rows. A plain join on the timestamp, the way a spreadsheet lookup works, finds a Freebridge reading for 2,841 of them and leaves 5,687 empty, two rows in every three. The fix pandas offers is merge_asof, an as-of join: for each King\'s Lynn row, take the Freebridge reading that was current at that moment. Two settings decide what "current" means. Direction says whether to look back, forward or to whichever reading is closest. Tolerance says how old a reading may be before it no longer counts.' },
        { kind: 'table', caption: 'Pairing 8,528 King\'s Lynn readings with Freebridge, our pandas run', head: ['Method', 'Rows filled', 'Left empty', 'What to watch'], rows: [
          ['Exact timestamp match', '2,841', '5,687', 'Most rows lost'],
          ['As-of, look back, 10 minute limit', '8,522', '6', 'Values up to 10 minutes old'],
          ['As-of, nearest, 10 minute limit', '8,524', '4', '2,841 rows use a later reading']
        ] },
        { kind: 'p', text: 'Looking back filled all but six rows; those six sit in the Freebridge break, where the limit stopped the code reaching further. The ages split almost exactly into thirds: 2,841 readings were fresh, 2,841 were five minutes old and 2,840 were ten. Nearest was fresher on average, but for 2,841 rows it reached forward and took a reading from five minutes later. In a historical chart that does no harm. In anything that decides in real time, it uses information nobody had yet.' },
        { kind: 'table', caption: 'Self-test: King\'s Lynn thinned to quarter hours, then refilled and checked against the true 5-minute readings', head: ['Refill method', 'Mean error', 'Largest error', 'Off by more than 10 cm'], rows: [
          ['Look back', '8.2 cm', '69.4 cm', '26.2%'],
          ['Nearest', '6.4 cm', '47.7 cm', '16.2%'],
          ['Straight line between readings', '1.0 cm', '28.1 cm', '0.8%']
        ] },
        { kind: 'p', text: 'To measure the price of stale values, the learner hides two readings in every three at King\'s Lynn, refills them each way and compares with what the gauge actually said. The straight line wins easily, but it needs the next reading before it can draw anything, so it cannot run live. Why do stale values cost so much here? The steepest ten minutes of the month came at 17:00 UTC on 12 September, when the level at King\'s Lynn rose 0.884 m. The sharpest ten-minute drop all month was 0.238 m, so the fastest rise was more than three and a half times the fastest fall. Of the 1,487 look-back refills that missed by more than 10 cm, 831 came while the water was rising and 656 while it was falling.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Two friends read a clock at different times; match each note to the latest one before it.' },
          { h3: 'Ages 11 to 15', p: 'Load both gauges into Python lists and write the look-back match with a loop.' },
          { h3: 'Ages 15 and up', p: 'Use pandas merge_asof, try every direction and tolerance, then run the thinning test.' }
        ] },
        { kind: 'callout', h3: 'Sources and licence', p: 'Readings are from the Environment Agency flood-monitoring API under the Open Government Licence. The station details, including coordinates, are the Agency\'s. The joins, the thinning test and every figure above were produced in our own Python run.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Python alongside AI',
      h2: 'What an as-of join teaches about code an AI writes',
      intro: 'Plausible code can still be answering a slightly different question.',
      body: [
        { kind: 'table', caption: 'From tide gauges to AI-written code', head: ['On the Great Ouse', 'In your own projects'], rows: [
          ['An exact join dropped two rows in three, silently', 'Count rows before and after every join'],
          ['Nearest borrowed readings from five minutes ahead', 'Ask whether code could see the future'],
          ['A 10-minute limit left six honest gaps', 'An empty cell can be the truthful answer'],
          ['Interpolation looked accurate and could not run live', 'Match the method to how it will be used'],
          ['A 0.884 m rise in ten minutes made old values costly', 'Test where the data changes fastest']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to combine two sensor files and it will often write a merge on the time column, which runs without complaint and discards most of the data. Ask it to fix the gaps and it may pick nearest or interpolation without mentioning that both look ahead. King\'s Lynn learners practise vibe coding with those habits in mind: say what you need, read what the AI produced, count the rows, and check direction and tolerance before trusting a single chart. Agents come later, once a learner writes Python unaided, which usually means the later teens or adulthood, and Copilot Studio agents are taught one-to-one only. More on this in <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents route for UK students</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no link with the Environment Agency, the Office for National Statistics or postcodes.io. We use their open data; the analysis on this page is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From matching games at seven to pandas at seventeen',
    intro: 'The trial lesson shows us where a learner is; the school year is only a first guess.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Clear thinking', p: 'Sequences, sorting and precise instructions, on and off the screen.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Building things', p: 'Scratch projects made with AI help, then a first move into typed Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python with data', p: 'Lists, files, dates and times, and joining real datasets.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Data and agents', p: 'Pandas, algorithms, then agents built on Python you can read.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Joins, time and AI',
    h2: 'What is an as-of join, and why does it matter when AI writes the code?',
    intro: 'An as-of join pairs each row in one time series with the most recent row of another that is not later than it, within an age limit, and it matters because an AI will choose the direction and the limit for you unless you know to check them.',
    p1: 'For 8,528 King\'s Lynn readings, an exact join filled 2,841 rows, a look-back as-of join with a 10-minute limit filled 8,522, and nearest took 2,841 values from five minutes in the future.',
    p2: 'A learner who has measured those numbers reads any merge, their own or an AI\'s, by asking what was dropped and what was borrowed.',
    closer: 'For a teenager in King\'s Lynn, knowing when data was actually known is what separates using AI from being misled by it, and that understanding comes from writing code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it runs',
    h2: 'What a King\'s Lynn lesson looks like',
    intro: 'Every lesson is a live video call. A laptop or desktop with a keyboard is needed; a tablet on its own will not run Python comfortably.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'The learner types and runs the code while the tutor asks what each line is for.' },
      { h3: 'Placed after the trial', p: 'We see what the learner can already do before suggesting a course.' },
      { h3: 'Free first session', p: 'No payment and no card details are needed to try a lesson.' },
      { h3: 'Groups of five to ten', p: 'Everyone in a group works at the same stage, joining from across the UK.' },
      { h3: 'Around eight a month', p: 'Usually two lessons a week in term time, with Norfolk holidays kept free if you ask.' },
      { h3: 'Fixed UK time', p: 'When the clocks change, the tutor adjusts and your slot stays put.' }
    ],
    spec: { title: 'Why live online', p: 'Programming sticks when someone asks you to explain the line you just wrote. Online classes let us group learners by level rather than by who lives nearby.' }
  },

  fees: {
    h2: 'What King\'s Lynn lessons cost',
    intro: 'King\'s Lynn families pay the same rates as everyone we teach outside India.',
    first: 'First lesson: free, full length, with a course suggestion at the end.',
    group: 'Group class, about eight lessons a month.',
    private: 'One-to-one lessons, about eight a month.',
    closer: 'Prices are quoted in US dollars only; we do not publish a sterling figure. Nothing is charged before the trial, and billing starts only after you agree a course and a lesson time. The pricing page covers holiday breaks, missed lessons and moving between group and private.'
  },

  reviewsH2: 'Norfolk families and learners across Britain, on Google',

  book: {
    h2: 'Book a free King\'s Lynn trial',
    intro: 'Give us the learner\'s age or school year and something they enjoy. The trial could be a matching puzzle, a Scratch game built with an AI, a first Python program, or a first look at real tide data.',
    success: 'Thank you. We have your King\'s Lynn request.'
  },

  faq: {
    h2: 'King\'s Lynn questions',
    intro: 'The tide project, Python, vibe coding and how the lessons are organised.',
    items: [
      { q: 'How many people live in King\'s Lynn?', a: 'At the 2021 census the ONS counted 47,615 usual residents in the King\'s Lynn built-up area. The wider borough of King\'s Lynn and West Norfolk had 154,325.' },
      { q: 'Can learners in King\'s Lynn take these Python classes?', a: 'Yes. Lessons run live online for ages 6 to 67 in King\'s Lynn, Gaywood, Fairstead, the Woottons and anywhere else in West Norfolk.' },
      { q: 'What is merge_asof in pandas?', a: 'merge_asof is the pandas function for as-of joins. It pairs each row with the nearest earlier (or later, or closest) row in another table, with an optional limit on how far apart they may be.' },
      { q: 'What did the King\'s Lynn project find?', a: 'An exact join matched 2,841 of 8,528 King\'s Lynn readings to Freebridge. A look-back as-of join with a 10-minute limit matched 8,522, and a nearest join used a later reading for 2,841 rows.' },
      { q: 'Why not just fill the gaps with a straight line?', a: 'It was the most accurate refill in our test, at 1.0 cm average error, but it needs the next reading first, so it cannot be used for decisions made as the data arrives.' },
      { q: 'What does vibe coding mean?', a: 'Vibe coding means describing a program to an AI, then running, reading and correcting what it writes. We teach it next to typed Python so learners can spot where the AI went wrong.' },
      { q: 'When do learners start on AI agents?', a: 'Once they can write Python without help, usually in the later teens or as adults. Copilot Studio agents are one-to-one only.' },
      { q: 'Is this useful for GCSE or A level computer science?', a: 'Working with files, records and algorithms appears in both, and we cover those topics carefully. We do not promise any grade.' },
      { q: 'How much do lessons cost?', a: 'The trial is free. After that, group lessons cost USD 100 a month and one-to-one lessons USD 150 a month.' },
      { q: 'Do lessons stop in the school holidays?', a: 'If you want them to. Send the dates and we skip those weeks.' }
    ]
  },

  next: {
    eyebrow: 'Also in the region',
    h2: 'More pages for Norfolk and the East of England',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-norwich">Norwich</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-lowestoft">Lowestoft</a> and <a class="cg-inline-link" href="/best-coding-class-in-ely">Ely</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> list the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'King\'s Lynn and Norfolk',
  footerPlaces: [
    { href: '/coding-classes-in-norfolk', label: 'Norfolk' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-kln .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 2.6vw, 2.2rem); }
.cg-root.cg-kln .cg-hero h1 { font-weight: 760; letter-spacing: -0.021em; line-height: 1.09; }
.cg-root.cg-kln .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-kln .cg-eyebrow { letter-spacing: 0.11em; font-weight: 680; text-transform: uppercase; font-size: 0.82rem; }
.cg-root.cg-kln .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.015em; }
.cg-root.cg-kln .cg-table caption { font-weight: 600; text-align: left; font-size: 0.92rem; }
.cg-root.cg-kln .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kln .cg-table th { font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-kln .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-kln .cg-callout { border-left-width: 5px; border-radius: 3px; }
`,

  dossier: {
    curriculumAuthority: 'King\'s Lynn and West Norfolk (E07000146), Census 2021 TS001 usual residents 154,325. ONS 2021 BUA (published): King\'s Lynn 47,615. English national curriculum, GCSE and A level. postcodes.io suburban areas whose closest postcode is in the King\'s Lynn BUA: Gaywood, South Lynn, North Lynn, Fairstead, North Wootton, South Wootton, Hardwick (PE30).',
    localProject: 'EA flood-monitoring API, 1 September 2026 00:05 UTC to 30 September 17:15 UTC. King\'s Lynn E47901 5-minute tidal level: 8,533 readings, 8 gaps (longest 30 min), range -1.805 to 4.483 m AOD. Freebridge E22184 15-minute: 2,850 readings, one 45-minute gap; 1.18 km apart. Of 8,528 King\'s Lynn rows in the shared window: exact join 2,841 matched, 5,687 blank; merge_asof backward, tolerance 10 min, 8,522 filled (ages 0/5/10 min: 2,841/2,841/2,840); nearest used a later reading for 2,841 rows. Thinning self-test: backward mean error 8.2 cm (max 69.4, 26.2% over 10 cm), nearest 6.4 cm, straight line 1.0 cm. Steepest 10-minute rise 0.884 m (12 September), steepest fall 0.238 m. Lesson family: as-of join (merge_asof, direction and tolerance, look-ahead leakage).',
    requiredMentions: [
      '47,615',
      'Gaywood',
      'Fairstead',
      'North Wootton',
      'merge_asof',
      'Freebridge',
      '5,687',
      '0.884',
      '8,533'
    ],
    sources: [
      { claim: 'Environment Agency real-time flood-monitoring API, stations E47901 (King\'s Lynn) and E22184 (Freebridge), Open Government Licence.', url: 'https://environment.data.gov.uk/flood-monitoring/doc/reference' },
      { claim: 'pandas documentation for merge_asof: direction and tolerance parameters.', url: 'https://pandas.pydata.org/docs/reference/api/pandas.merge_asof.html' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for suburban areas in King\'s Lynn and West Norfolk.', url: 'https://api.postcodes.io/places?q=Gaywood' }
    ],
    rejectedClaims: [
      'Comparing the two gauges\' levels directly: Freebridge is published against a local datum, not Ordnance Datum, so no level difference is stated.',
      'That the Freebridge gauge is upstream or downstream in flow terms: only its position to the south, from coordinates, is given.',
      'Record or flood levels from station metadata: not used.',
      'That West Lynn is inside the built-up area: postcodes.io has no place entry for it; left out.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
