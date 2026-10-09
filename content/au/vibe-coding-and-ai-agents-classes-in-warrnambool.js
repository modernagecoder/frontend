'use strict';
// Warrnambool (cg- regional city page, Australia cluster Phase 7, row 166). Shaped page: vibe coding and AI
// agents for teenagers and adults. Spine: can a frequency detector read a bus timetable, and why does it say
// "every 15 minutes" when no bus runs that often? Data: Transport Victoria GTFS Schedule (discover.data.vic.gov.au,
// CC BY 4.0), regional bus feed (folder 6), files dated 2 October 2026; Warrnambool routes (route ids 6-wr*):
// 1 Dennington, 2 Gateway Plaza, 3 Deakin University via Gateway Plaza, 4 Tower Square via Gateway Plaza,
// 5 Lake Pertobe Loop, 6 Merrivale, 8 Port Fairy, 9 Allansford. Service day Wednesday 14 October 2026: 202
// trips. Our code (scratchpad au/r4/wbl_goertzel.py): first-stop departure minutes per route and direction as
// a one-minute impulse series; Goertzel power at periods 15, 20, 24, 30, 40, 45, 50, 60, 75, 90, 120 minutes.
// Route 1, first direction in the feed: 16 departures 08:00 to 18:30, gaps 30 min x 9 and 60 min x 6,
// relative power 15: 1.00, 20: 0.14, 30: 1.00, 60: 0.14, 120: 0.01. Eleven busy directions (10 or more
// departures): plain argmax matched the most common gap in 6; the longest period within 90 percent of the
// maximum matched 8. Route 2 (second direction) and route 4 (both directions) have most common gap 60 min
// yet power at 60 of 0.06 to 0.11. Routes 8 and 9 have 5 or 6 departures. Lesson family: Goertzel algorithm
// on clock-face headways; screened 0 content hits 8 October 2026; claimed by AU-R4. Place facts: ABS Census
// 2021 QuickStats SUA 2021 Warrnambool; Victorian school term dates; IANA tz 2026e Australia/Melbourne (rule
// AV). Excluded by the cluster rules: income, rent, ancestry, religion, health. No suburb names verified.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'WARRNAMBOOL', label: 'Warrnambool', blurb: 'Warrnambool on the south-west Victorian coast, a day of town bus timetables, and the Goertzel algorithm that hears a half-hour beat.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-warrnambool',
  code: 'wbl',
  accent: '#2E3274',
  accentRationale: 'Warrnambool: a Southern Ocean indigo (HSV saturation 0.60, value 0.45, hue 237), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, with strong contrast on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Warrnambool',
    eyebrow: 'Warrnambool, Victoria, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Victoria', href: '/coding-and-ai-classes-in-victoria' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Warrnambool, Victoria',
  title: 'Vibe Coding and AI Agents Classes in Warrnambool | Live Online',
  description: 'Vibe coding and AI agents classes for Warrnambool teens and adults: build with AI helpers, then test their answers on real local bus data. First lesson free.',
  ogDescription: 'Warrnambool vibe coding and AI agents classes, with a project that asks a frequency detector how often the town buses run.',
  twitterDescription: 'Vibe coding and AI agents classes for Warrnambool teens and adults, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-college-fullstack-ai-dsa-career-course',
  verifiedOn: '8 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Warrnambool Learners',
    description: 'Building software with AI assistants and agents, plus the Python and signal ideas needed to check them, taught live online to teenagers and adults in Warrnambool.'
  },

  h1: 'Vibe coding and AI agents classes in Warrnambool',
  capsuleQ: 'What are the best vibe coding and AI agents classes in Warrnambool?',
  capsule: 'For Warrnambool teenagers and adults, classes where you build apps by talking to AI coding tools and agents, and learn just enough Python and maths to catch them when they are wrong. Warrnambool had 35,743 residents at the 2021 Census. A teacher runs every lesson live on video, in a group of five to ten or one to one, and the first lesson is free.',
  lead: 'Here is a question an AI travel agent might be asked in Warrnambool: how often does the Merrivale bus run? To answer from raw timetable data, a tempting trick borrowed from audio engineering is to treat departures like a sound and listen for the strongest beat. The Goertzel algorithm does exactly that, testing one period at a time. We ran it over every town route on a Wednesday in October. For route 1 it heard a 15-minute beat just as loudly as a 30-minute one, although no bus on that route ever runs 15 minutes apart. Working out why is the whole lesson.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Warrnambool.',

  picks: {
    eyebrow: 'Courses for Warrnambool',
    h2: 'Four ways into building with AI',
    intro: 'Each runs live and teaches both the building and the checking. The free trial, no card needed, decides the fit.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Teenagers build web pages, games and Python tools with AI assistants, testing each piece as it arrives.' },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 17', note: 'A practical tour of AI tools: what each does well, where it fails, and how to tell the difference.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'University and adult', note: 'Full apps built with AI help, alongside the algorithms that let you review generated code properly.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Python and AI for automating everyday work, from timetables and spreadsheets to simple agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Warrnambool in figures',
      h2: 'A coastal city with a large school population',
      intro: 'The statistics bureau\'s Warrnambool Significant Urban Area, as counted in the 2021 Census.',
      body: [
        { kind: 'table', caption: 'Warrnambool urban area, 2021', head: ['Statistic', 'Warrnambool'], rows: [
          ['Residents', '35,743'],
          ['Median age', '42'],
          ['Families', '9,525'],
          ['Private dwellings', '16,101'],
          ['Mean household size', '2.3 people']
        ] },
        { kind: 'table', mt: true, caption: 'Warrnambool compared with Victoria and Australia', head: ['Measure', 'Warrnambool', 'Victoria', 'Australia'], rows: [
          ['Residents aged 15 to 19', '2,129 (6.0%)', '5.6%', '5.7%'],
          ['People in education who attend a government secondary school', '1,416 (14.2%)', '11.7%', '12.2%'],
          ['Occupied homes that are separate houses', '11,775 (83.4%)', '73.4%', '72.3%'],
          ['Occupied homes that are flats or apartments', '619 (4.4%)', '12.1%', '14.2%'],
          ['People 15 and over with a bachelor degree or higher', '5,724 (19.4%)', '29.2%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Plenty of teenagers', p: 'People aged 15 to 19 are 6.0% of residents, a little above Victoria\'s 5.6%.' },
          { h3: 'Government secondary', p: 'Among everyone in education, 14.2% attend a government secondary school, compared with 11.7% statewide.' },
          { h3: 'Houses by the sea', p: '83.4% of occupied homes are separate houses; only 4.4% are flats or apartments.' }
        ] },
        { kind: 'p', text: 'The bureau adds small random changes to Census cells for privacy, so breakdowns may not total exactly. Figures here match the bureau\'s publication.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can a frequency detector read a bus timetable?',
      intro: 'Turn a day of departures into a signal, then test which repeating period fits it most closely.',
      body: [
        { kind: 'table', caption: 'Warrnambool town buses in the regional feed, Wednesday 14 October 2026 (our count)', head: ['Item', 'Value'], rows: [
          ['Routes named in the feed', '1 Dennington, 2 Gateway Plaza, 3 Deakin University via Gateway Plaza, 4 Tower Square via Gateway Plaza, 5 Lake Pertobe Loop, 6 Merrivale, 8 Port Fairy, 9 Allansford'],
          ['Trips running that day', '202'],
          ['Route and direction pairs with 10 or more departures', '11'],
          ['Periods tested, in minutes', '15, 20, 24, 30, 40, 45, 50, 60, 75, 90 and 120']
        ] },
        { kind: 'table', mt: true, caption: 'Route 1, first direction in the feed: 16 departures from 08:00 to 18:30 (our Goertzel run)', head: ['Period tested', 'Relative strength'], rows: [
          ['15 minutes', '1.00'],
          ['20 minutes', '0.14'],
          ['30 minutes', '1.00'],
          ['60 minutes', '0.14'],
          ['120 minutes', '0.01'],
          ['Actual gaps between buses', '30 minutes nine times, 60 minutes six times']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Make a signal', p: 'Lay out the day minute by minute and put a 1 wherever a bus leaves the first stop, 0 everywhere else.' },
          { h3: 'Test one beat', p: 'Goertzel measures how strongly the 1s line up with a chosen period, using a two-line loop instead of a full Fourier transform.' },
          { h3: 'Compare periods', p: 'Repeat for each period in the list and look for the strongest. That last step is where it goes wrong.' }
        ] },
        { kind: 'callout', h3: 'The harmonic trap', p: 'Buses leaving on the hour and half hour line up perfectly with a 30-minute grid, and therefore with a 15-minute grid too, since every half hour is also a quarter hour. So 15 and 30 tie. Picking the single strongest period matched the most common gap in only 6 of the 11 busy directions. Picking the longest period within 90% of the top matched 8.' },
        { kind: 'p', text: 'The other three are revealing. Route 2 in its second direction and route 4 in both directions most often run an hour apart, yet their strength at 60 minutes is only 0.06 to 0.11, because the buses still keep to half-hour marks. The detector hears the clock face, not the gap. Routes 8 and 9 run only five or six times that day, too few for any period to be meaningful. Timetable data from Transport Victoria under Creative Commons Attribution 4.0; all strengths and counts are ours.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'What it teaches',
      h2: 'Harmonics, and why agents need guard rails',
      intro: 'One misread signal explains a whole class of AI tool mistakes.',
      body: [
        { kind: 'p', text: 'Any pattern that repeats every 30 minutes also repeats every 15, 10 and 6 minutes in the sense a frequency test measures, because those grids contain all the half-hour marks. Engineers call these harmonics. In audio the fix is well known: look for the fundamental, the longest period that explains the signal. Timetables add a twist the audio world rarely meets: a route can follow a strict clock-face pattern while still skipping many slots, so the most common gap and the underlying grid are genuinely different facts.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write the Goertzel loop in Python, test it on a made-up timetable with a known beat, then run it on route 1.' },
          { h3: 'University students', p: 'Connect Goertzel to the discrete Fourier transform, explain the tie between 15 and 30, and design a better period estimator.' },
          { h3: 'Adults', p: 'Build a small agent tool that answers "how often" from timetable data and returns both the clock pattern and the typical gap.' }
        ] },
        { kind: 'spec', title: 'Two answers, both true', p: 'For route 2 in its second direction, "buses keep to the half-hour grid" and "most buses are an hour apart" are both correct. A good tool says which question it is answering.' },
        { kind: 'p', text: 'Modern Age Coders is independent of Transport Victoria, the Victorian Government, Warrnambool City Council and the statistics bureau. Census figures are the bureau\'s; the departure series, Goertzel strengths and match counts all come from our own code.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Warrnambool calendar',
      h2: 'Victorian terms and the daylight saving switch',
      intro: 'What to keep in mind when choosing a weekly lesson.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term 4, 2026', p: 'Monday 5 October to Friday 18 December, according to the Victorian Government term list.' },
          { h3: 'Term 1, 2027', p: 'Starts Wednesday 27 January, with government school students back on Thursday 28 January, and finishes Thursday 25 March.' },
          { h3: 'Clocks', p: 'Victoria moves to daylight saving on the first Sunday in October and back to standard time on the first Sunday in April.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a timetable loop to tools an agent can trust',
    intro: 'The ages guide the first step; the trial lesson confirms it.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Patterns in code', p: 'Python that reads times, works out gaps and spots repeating patterns in simple lists.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Building with AI', p: 'AI-assisted projects that come with the learner\'s own tests, so nothing unchecked ships.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course'] },
      { band: 'University', h3: 'Signals and agents', p: 'Fourier ideas, estimators and agent tools that report their method alongside the answer.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'artificial-intelligence-complete-masterclass-college'] },
      { band: 'Adults', h3: 'Automation that holds up', p: 'Scripts and agents for real tasks, with checks that catch confident wrong answers.', courses: ['python-ai-automation-masterclass-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'An AI agent can analyse a timetable for you. Why should a Warrnambool learner learn how?',
    intro: 'Because an agent that picks the loudest beat will tell a passenger "every 15 minutes" with complete confidence, and only someone who understands harmonics knows to doubt it.',
    p1: 'Vibe coding lets you describe a tool and have an AI assistant write it, and agents can now chain such tools together on their own. Ask one how often a Warrnambool bus runs and it may well write a frequency test, take the strongest result and report it. On two of the eleven busy route directions that answer is 15 minutes, half the true clock pattern.',
    p2: 'Our Warrnambool learners vibe-code the timetable tool, then deliberately break it: feed it known patterns, find the harmonic tie, and add the rule that prefers the longest strong period. That checked tool is what they give the agent. The lesson carries to any AI output that sounds precise.',
    closer: 'Agents will do more of the routine work; the people who know where they fail will decide when to trust them.',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Warrnambool lessons, run online',
    intro: 'Every class happens on video, so the distance to Melbourne or Geelong changes nothing.',
    cells: [
      { h3: 'From home', p: 'Learners log in from their own computer, with no trip to a city campus for a class.' },
      { h3: 'Victorian levels', p: 'Lessons are pitched at Victorian year levels and paced around the state\'s four terms. Teaching is in English.' },
      { h3: 'Free trial', p: 'The first lesson teaches something real and ends with a suggested course and weekly time.' },
      { h3: 'Five to ten', p: 'Group classes hold five to ten learners at the same level, combined from Warrnambool and other places.' },
      { h3: 'Every week', p: 'Two live sessions each week, close to eight a month, on days agreed after the trial.' },
      { h3: 'Teachers in India', p: 'In summer Warrnambool runs five and a half hours ahead of India time; from April to October the difference is four and a half hours.' }
    ],
    spec: { title: 'Local time, always', p: 'We confirm each lesson in Warrnambool time, and handle the April and October clock changes ourselves.' }
  },

  fees: {
    h2: 'Warrnambool fees',
    intro: 'Pricing is brief and uniform across Australia.',
    first: 'A free first lesson that finishes with a recommended level, course and weekly slot.',
    group: 'A month of group sessions, normally eight, with five to ten learners at your level.',
    private: 'Close to eight one-to-one sessions a month with your own teacher.',
    closer: 'Fees outside India are in US dollars, so Warrnambool learners pay the national rate. No payment is taken until the trial has fixed what and when you will study; the pricing page explains holidays, missed sessions and switching formats.'
  },

  reviewsH2: 'Reviews our families posted on Google',

  book: {
    h2: 'Book a free vibe coding or agents lesson',
    intro: 'Tell us the learner\'s age and what they are curious about. A teenager might begin by vibe-coding a small game; an adult might start with the bus timetable and an agent that answers questions about it.',
    success: 'Thank you. We will be in touch shortly to set up a Warrnambool lesson.'
  },

  faq: {
    h2: 'Warrnambool vibe coding questions',
    intro: 'Common questions from Warrnambool learners and parents.',
    items: [
      { q: 'What is the Goertzel algorithm?', a: 'The Goertzel algorithm measures how strongly a signal contains one chosen frequency or period. It matches one frequency term of a Fourier transform, computed with a short loop.' },
      { q: 'What does the Warrnambool bus project show?', a: 'Run over 202 town bus trips on Wednesday 14 October 2026, the detector rated 15-minute and 30-minute periods equally strong because of harmonics. Choosing the longest strong period matched the most common gap in 8 of 11 busy route directions.' },
      { q: 'How many people live in Warrnambool?', a: 'Warrnambool had 35,743 residents at the 2021 Census, with a median age of 42.' },
      { q: 'What is vibe coding?', a: 'Vibe coding is making software by describing it to an AI coding assistant, then running and refining what it writes. Our classes add the testing that makes the result dependable.' },
      { q: 'Do you support Victorian senior students?', a: 'Yes, with the coding and maths behind senior Victorian subjects, planned around Victorian terms. All assessed work stays the student\'s own.' },
      { q: 'When do Warrnambool lessons run?', a: 'Typically after school on weekdays or on Saturday mornings, agreed at the trial and confirmed in Warrnambool time.' },
      { q: 'Is there anything for younger children?', a: 'Yes. Live classes begin at age six with Scratch; the timetable and agents project is meant for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Warrnambool?', a: 'No. We have no premises in Australia and do not claim any. Classes are live online only, learners need a computer with sound and stable internet, and our listed phone number is an Indian number.', boiler: true },
      { q: 'How much are Warrnambool classes?', a: 'The first lesson is free. Afterwards a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one to one. Everything is agreed before you pay.', boiler: true },
      { q: 'How many learners are in each group?', a: 'Five to ten, grouped by level and goals rather than age or town. If no group fits the timetable, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for south-west Victoria',
    html: 'See <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">coding and AI classes in Victoria</a> for the whole state. VCE students can read <a class="cg-inline-link" href="/vce-applied-computing-software-development-help">VCE Applied Computing: Software Development help</a>, and anyone using AI tools should try <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learn to think, not just use AI tools</a>. Every Australian page is gathered on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Warrnambool and Victoria',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/online-coding-and-python-classes-in-geelong', label: 'Geelong' },
    { href: '/online-coding-and-python-classes-in-ballarat', label: 'Ballarat' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-wbl .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.1vw, 2.5rem); }
.cg-root.cg-wbl .cg-hero h1 { font-weight: 690; letter-spacing: -0.023em; line-height: 1.06; }
.cg-root.cg-wbl .cg-capsule { border-left: 2px solid var(--cg-accent); padding: 0.6rem 0 0.6rem 1.1rem; background: rgba(46, 50, 116, 0.035); }
.cg-root.cg-wbl .cg-eyebrow { letter-spacing: 0.14em; font-weight: 650; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-wbl .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.016em; }
.cg-root.cg-wbl .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.95rem); }
.cg-root.cg-wbl .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-wbl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wbl .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-wbl .cg-callout { background: rgba(46, 50, 116, 0.05); border-left: 4px solid var(--cg-accent); }
`,

  dossier: {
    curriculumAuthority: 'Warrnambool, ABS Census 2021 QuickStats, Significant Urban Area 2021 (read 8 October 2026): 35,743 people; median age 42; 9,525 families; 16,101 private dwellings; average 2.3 people per household; aged 15 to 19 2,129 (6.0 percent; Victoria 5.6; Australia 5.7); attending Secondary - Government 1,416 (14.2 percent of people attending an educational institution; Victoria 11.7; Australia 12.2); separate house 11,775 (83.4 percent; Victoria 73.4; Australia 72.3); flat or apartment 619 (4.4 percent; Victoria 12.1; Australia 14.2); Bachelor Degree level and above 5,724 (19.4 percent; Victoria 29.2; Australia 26.3). Victorian Government school term dates: 2026 Term 4 Monday 5 October to Friday 18 December; 2027 Term 1 Wednesday 27 January (government school students start Thursday 28 January) to Thursday 25 March. IANA tz 2026e: Australia/Melbourne rule AV; Asia/Kolkata UTC+5:30.',
    localProject: 'Goertzel algorithm on clock-face bus headways. Transport Victoria GTFS Schedule (CC BY 4.0), regional bus feed folder 6, files dated 2026-10-02; routes with ids beginning 6-wr: 1 Dennington, 2 Gateway Plaza, 3 Deakin University via Gateway Plaza, 4 Tower Square via Gateway Plaza, 5 Lake Pertobe Loop, 6 Merrivale, 8 Port Fairy, 9 Allansford. Service date Wednesday 2026-10-14 (calendar plus calendar_dates): 202 trips. First-stop departure per trip; per route and direction, one-minute impulse series from first to last departure; Goertzel power at 15, 20, 24, 30, 40, 45, 50, 60, 75, 90, 120 minutes, normalised to the maximum. Route 1 direction 0: 16 departures 08:00 to 18:30, gaps 30 x 9 and 60 x 6, relative power 15 1.00, 20 0.14, 30 1.00, 60 0.14, 120 0.01. Eleven directions with 10 or more departures: argmax equals modal gap in 6; longest period with power at least 0.9 of maximum equals modal gap in 8. Route 2 direction 1 (gaps 30 x 7, 60 x 8) and route 4 both directions (30 x 6, 60 x 7) have modal gap 60 with power at 60 of 0.06 to 0.11. Routes 8 and 9: 5 or 6 departures per direction.',
    requiredMentions: [
      '35,743',
      '9,525',
      '16,101',
      '11,775',
      '2,129',
      'Goertzel',
      '202 town bus trips',
      'harmonic trap',
      'Lake Pertobe Loop',
      '0.06 to 0.11'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Warrnambool Significant Urban Area (2021): people, median age, families, dwellings, age, education attendance, dwelling structure, qualifications.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2021' },
      { claim: 'Transport Victoria GTFS Schedule (CC BY 4.0), regional bus feed with Warrnambool town routes.', url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule' },
      { claim: 'Victorian Government, school term dates and holidays.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'IANA time zone database, australasia file: Australia/Melbourne and rule AV.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Real-time punctuality or reliability of Warrnambool buses: only the published schedule was analysed.',
      'Weekend or school-holiday timetables: only Wednesday 14 October 2026 was analysed, so no other day is described.',
      'Towns in Time population history for Warrnambool (planning.vic.gov.au): returned 403 to automated reads and was not circumvented.',
      'Suburb or locality names inside Warrnambool: not verified for this page; only route names as printed in the feed are used.',
      'Income, rent, ancestry, religion and health figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Transport Victoria, the Victorian Government, Warrnambool City Council or the ABS.'
    ]
  }
};
