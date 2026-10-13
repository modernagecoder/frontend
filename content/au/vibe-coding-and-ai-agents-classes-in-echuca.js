'use strict';
// Echuca (cg- regional city page, Australia cluster Phase 7, row 186). Shaped page: vibe coding and AI agents for
// teenagers and adults. Spine: an agent with two school-calendar tools, one per state, must choose the right one for
// a place on either bank of the Murray. Data: Victorian GTFS schedule (Department of Transport and Planning, CC BY
// 4.0, file last modified 4 October 2026), regional bus folder 6, Echuca town routes 1 to 5 (route 8 to Barmah left
// out); ABS SAL 2021 polygons give each stop its state. Our code (scratchpad au/r7/ech_stops.py): 93 distinct stops
// on 78 trips; 62 in Victoria (locality Echuca), 31 in New South Wales (locality Moama); route 3 Echuca - Moama has
// 28 NSW stops and 1 Victorian; route 5 has 4 NSW and 1 Victorian; routes 1, 2 and 4 are entirely Victorian. Term
// dates 2027 (NSW Department of Education; Victorian Government): NSW Term 2 Tue 27 Apr to Fri 2 Jul, Term 3 Mon 19
// Jul to Fri 24 Sep, Term 4 Mon 11 Oct to Mon 20 Dec; Vic Term 2 Mon 12 Apr to Fri 25 Jun, Term 3 Mon 12 Jul to Fri 17
// Sep, Term 4 Mon 4 Oct to Fri 17 Dec. NSW Term 1 differs between Eastern and Western divisions, so the window starts
// 12 April. Our count (ech_terms.py), weekdays 12 April to 20 December 2027: 181; both states in term 139; NSW only 11;
// Victoria only 21; neither 10; the two calendars disagree on 32 (17.7 percent). Lesson family: agent tool routing by
// jurisdiction (route on the attribute that decides the answer, the school's state, not the stop's); screened 0
// location-page hits and 0 claims 10 October 2026; distinct from the clarifying-question family; claimed by AU-R7.
// Place facts read raw 10 October 2026: ABS Census 2021 QuickStats, Echuca - Moama SUA (2007, state comparison column
// Victoria): 22,568 people; median age 46; 6,168 families; 10,298 private dwellings; 2.4 per household; separate
// house 7,564 (86.2; Vic 73.4; Australia 72.3); flat or apartment 21 (0.2; Vic 12.1); Technicians and Trades Workers
// 1,621 (16.0; Vic 12.6); car as driver 6,857 (67.5; Vic 49.9); aged 20 to 24 1,051 (4.7; Vic 6.3). SUA area 350.96
// square kilometres. SAL polygons at least 80 percent inside: Echuca, Echuca Village (Moama only 28.6 percent inside,
// so not listed as inside). Excluded: income, rent, ancestry, religion, health, Indigenous status.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'ECHUCA', label: 'Echuca', blurb: 'Vibe coding and AI agents for Echuca and Moama, and an agent that must pick the right state\'s school calendar on a bus route that crosses the Murray.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-echuca',
  code: 'echm',
  accent: '#16308E',
  accentRationale: 'Echuca: a deep paddle-steamer navy (HSV saturation 0.85, value 0.56, hue 228), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, with contrast above 4.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Echuca',
    eyebrow: 'Echuca, Victoria, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' }],
  nav: [
    { label: 'Victoria', href: '/coding-and-ai-classes-in-victoria' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Echuca, Victoria',
  title: 'Vibe Coding and AI Agents Classes in Echuca | Live Online',
  description: 'Vibe coding and AI agents classes for Echuca and Moama teens and adults, live online: build agents that choose the right state\'s tool. First lesson free.',
  ogDescription: 'Echuca AI agents classes, with a project where an agent must choose between the Victorian and NSW school calendars for places on a bus route across the Murray.',
  twitterDescription: 'Live online vibe coding and AI agents classes for Echuca and Moama, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Echuca Learners',
    description: 'Vibe coding, tool-using AI agents and Python, taught live online to teenagers and adults in Echuca, Moama and the Campaspe district.'
  },

  h1: 'Vibe coding and AI agents classes in Echuca',
  capsuleQ: 'What are the best vibe coding and AI agents classes in Echuca?',
  capsule: 'Live online classes in which Echuca and Moama teenagers and adults vibe code real programs, then build AI agents in Python that call tools and pick the right one for each question. The 2021 Census counted 22,568 people in the Echuca - Moama urban area, which spans two states. A teacher leads every lesson, and the first is free.',
  lead: 'Echuca is one of the few Australian towns where a single local bus crosses a state border. Route 3 runs from Echuca over the bridge to Moama, and when we placed every stop on the five town routes inside the bureau\'s locality boundaries, 31 of the 93 stops were in New South Wales. That matters to an AI agent. Give an assistant two tools, a Victorian school calendar and a New South Wales one, and ask whether a student has school on a given day: if it picks the wrong tool, it gives a confident wrong answer. Across the last three terms of 2027 the two calendars disagree on 32 of 181 weekdays. Teaching an agent to route each question to the right tool, and on the right fact, is the project at the heart of this page.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Echuca.',

  picks: {
    eyebrow: 'Course picks for Echuca',
    h2: 'Courses for agents that use the right tool',
    intro: 'All four lead to projects like the two-calendar agent. Book the free trial first; it asks for no card.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Vibe coding with Python underneath: describe a program, then read, run and correct what the AI writes.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The Python an agent builder needs: functions, dictionaries, dates and reading data files.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'University and adult', note: 'Language models, tool calling and agent design, with each agent tested against known answers.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from first steps to the level needed to write and test the tools an agent calls.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Echuca - Moama at the Census',
      h2: 'Twin river towns, counted as one',
      intro: 'The bureau treats Echuca and Moama as one urban area across the Murray. Figures from the 2021 Census, with Victoria as the comparison.',
      body: [
        { kind: 'table', caption: 'Echuca - Moama urban area: core 2021 counts', head: ['Measure', 'Echuca - Moama'], rows: [
          ['Residents', '22,568'],
          ['Median age', '46'],
          ['Families', '6,168'],
          ['Private dwellings', '10,298'],
          ['Average people per household', '2.4'],
          ['Area of the urban area', 'about 351 square kilometres']
        ] },
        { kind: 'table', mt: true, caption: 'Echuca - Moama alongside Victoria and Australia', head: ['Measure', 'Echuca - Moama', 'Vic', 'Australia'], rows: [
          ['Occupied homes that are separate houses', '7,564 (86.2%)', '73.4%', '72.3%'],
          ['Occupied homes that are flats or apartments', '21 (0.2%)', '12.1%', '14.2%'],
          ['Technicians and trades workers among employed residents', '1,621 (16.0%)', '12.6%', '12.9%'],
          ['Workers who drove themselves on Census day', '6,857 (67.5%)', '49.9%', '52.7%'],
          ['Residents aged 20 to 24', '1,051 (4.7%)', '6.3%', '6.2%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Almost no flats', p: 'Just 21 occupied homes were flats or apartments, 0.2% of the total, against 12.1% across Victoria.' },
          { h3: 'Trades country', p: 'Technicians and trades workers are 16.0% of employed residents, above the Victorian 12.6%.' },
          { h3: 'Two banks', p: 'Bureau localities lying almost wholly inside the urban area are Echuca and Echuca Village. The Moama locality stretches far beyond the town, so only part of it is inside.' }
        ] },
        { kind: 'p', text: 'Census tables are slightly randomised to protect privacy, so components may not add exactly to totals. Every figure is copied as the bureau printed it.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which state\'s calendar should the agent call?',
      intro: 'An assistant has two tools. Learners write the code that decides which one answers each question.',
      body: [
        { kind: 'table', caption: 'Stops on the Echuca town bus routes, placed in bureau locality boundaries (our count from the Victorian timetable data)', head: ['Route', 'Stops in Victoria', 'Stops in New South Wales'], rows: [
          ['1 Echuca - Echuca South', '34', '0'],
          ['2 Echuca - Echuca East', '26', '0'],
          ['3 Echuca - Moama', '1', '28'],
          ['4 Echuca - Cunningham Downs', '5', '0'],
          ['5 Echuca - 24 Lane', '1', '4'],
          ['All five routes, distinct stops', '62', '31']
        ] },
        { kind: 'table', mt: true, caption: 'Weekdays from 12 April to 20 December 2027, by which state is in term (our count from the published term dates)', head: ['Situation', 'Weekdays', 'Calendars agree?'], rows: [
          ['Both states in term', '139', 'Yes'],
          ['Neither state in term', '10', 'Yes'],
          ['New South Wales in term, Victoria on holiday', '11', 'No'],
          ['Victoria in term, New South Wales on holiday', '21', 'No'],
          ['Total weekdays', '181', '32 disagree (17.7%)']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two tools', p: 'One function answers from the Victorian 2027 term dates and one from the New South Wales dates. Each is tested alone first.' },
          { h3: 'A router', p: 'The agent reads the question, finds the place, looks up its state from the locality boundaries and calls the matching tool.' },
          { h3: 'The right attribute', p: 'A student who lives in Moama may attend a school in Echuca. The router must use the school\'s state when it is given, not the home or the bus stop.' }
        ] },
        { kind: 'callout', h3: 'Why 17.7% matters', p: 'An agent that always calls the Victorian tool, because Echuca is a Victorian town, is wrong on 32 of 181 weekdays for a student at a New South Wales school. Victorian Term 2 starts on Monday 12 April, fifteen days before the New South Wales term on Tuesday 27 April, and in each later term the gap is a week at the start. Nothing in the agent\'s output looks unusual on those days; it is simply wrong.' },
        { kind: 'p', text: 'Term 1 is left out because New South Wales schools in the Eastern and Western divisions start on different dates. Stop locations come from the Victorian Department of Transport and Planning timetable data; the state of each stop, the weekday counts and the router are our own work.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Routing in agent design',
      h2: 'Tool choice is where many agents go wrong',
      intro: 'A modern AI agent is a language model plus tools. Choosing the tool is a decision the builder must be able to test.',
      body: [
        { kind: 'p', text: 'Learners build the router twice. First they let the language model decide from a description of each tool, then they write a small deterministic rule: find the place, look up its state, call that tool. Next they run both versions over a test set of questions mentioning Echuca, Moama, the bridge and named schools, and count the wrong calls. The lesson generalises far beyond calendars: tax rules, opening hours and transport fares all change at borders, and an agent that serves more than one place needs routing that can be checked.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write two calendar functions and an if statement that picks between them, then try to break it with tricky questions.' },
          { h3: 'University students', p: 'Compare model-chosen and rule-based routing on a labelled test set, and report how often each picks the wrong tool.' },
          { h3: 'Adults', p: 'Design an assistant for a business with customers in two states, and make the rule for choosing state-specific answers explicit.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is independent of the Victorian and New South Wales governments, the Department of Transport and Planning and Campaspe Shire Council. The timetable, boundaries and term dates are theirs; the stop counts, weekday analysis and agents described here are ours.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Echuca planner',
      h2: 'One clock on both banks of the Murray',
      intro: 'School terms differ across the bridge, but the time does not.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Same time zone', p: 'Victoria and New South Wales keep the same standard time and change their clocks on the same days, so an Echuca lesson time is the same in Moama.' },
          { h3: 'Summer clocks', p: 'Daylight saving runs from Sunday 4 October 2026 to Sunday 4 April 2027 in both states.' },
          { h3: 'Teachers in India', p: 'India is four and a half hours behind Echuca in winter and five and a half in summer, so a 5pm lesson starts at 12:30 or 11:30 India time.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From one if statement to agents with many tools',
    intro: 'The age bands are only a guide; the free first lesson places each learner.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Decisions in code', p: 'Python conditions, functions and dates, building toward a program that answers from the right table.', courses: ['python-complete-masterclass-teens', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 15 to 18', h3: 'First agents', p: 'Vibe coded apps and simple agents that call tools, with every tool tested on its own.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Agent evaluation', p: 'Tool calling, routing and measuring an agent\'s mistakes on labelled questions.', courses: ['complete-generative-ai-masterclass-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Assistants for work', p: 'Agents that answer from the right rules for each customer, site or state.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI agent can call any tool, why should Echuca learners learn to route?',
    intro: 'Because the agent cannot know which fact decides the answer unless someone who understands the problem tells it.',
    p1: 'An agent that assumes Echuca always means Victoria is right most of the time. On a route where 28 of 29 stops are in Moama, and for students who cross the bridge every morning, the same assumption fails on almost one weekday in five. The failure is quiet: the agent answers in a calm, confident sentence either way.',
    p2: 'Our Echuca learners build both calendar tools, then the router, then a test set that tries to fool it. They finish knowing that every agent has a decision point like this, and that the person who builds the agent is responsible for testing it.',
    closer: 'Connecting a model to tools is easy in 2026; making sure it calls the right one is what a builder is for.',
    blogAnchor: 'why coding is still worth learning when AI can write code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons reach Echuca and Moama',
    intro: 'Classes are live on video, so learners on either side of the river join the same way.',
    cells: [
      { h3: 'Home set-up', p: 'A computer, a microphone and a steady internet connection are enough to join.' },
      { h3: 'Either state', p: 'Teachers know both the Victorian and New South Wales school years, and plan around the learner\'s own school.' },
      { h3: 'Trial class', p: 'The free first class teaches real material and ends with a suggested course and weekly time.' },
      { h3: 'Groups', p: 'Groups hold fifteen to twenty learners at one level, drawn from many towns.' },
      { h3: 'Weekly rhythm', p: 'Two group lessons a week on fixed days, close to eight each month.' },
      { h3: 'Teaching team', p: 'Teachers are based in India and confirm every time in Echuca time.' }
    ],
    spec: { title: 'Holidays on both sides', p: 'Families with children in schools in different states can pause lessons around either set of holidays.' }
  },

  fees: {
    h2: 'Echuca class fees',
    intro: 'Fees are simple and the same for every Australian learner.',
    first: 'The first class is free and finishes with a recommended level, course and lesson time.',
    group: 'One month of group lessons, close to eight, with fifteen to twenty learners at the same level.',
    private: 'Close to eight one-to-one lessons a month with a dedicated teacher.',
    closer: 'Fees outside India are charged in US dollars, and Echuca and Moama pay the same as the rest of Australia. Nothing is billed until the trial has settled the course and time, and the pricing page covers holidays, missed classes and changing between group and private lessons.'
  },

  reviewsH2: 'What families say on Google',

  book: {
    h2: 'Book a free AI agents lesson in Echuca',
    intro: 'Give us the learner\'s age and what they enjoy. A beginner might vibe code a small game; an older learner might build the two-calendar agent and try to trick it.',
    success: 'Thank you. We will get back to you shortly about an Echuca lesson.'
  },

  faq: {
    h2: 'Echuca AI agents questions',
    intro: 'Answers for families and adult learners in Echuca and Moama.',
    items: [
      { q: 'What is tool routing in an AI agent?', a: 'Tool routing is the step where an agent decides which of its tools should answer a question. A wrong choice gives a fluent but wrong answer, so routing has to be tested.' },
      { q: 'How often do the Victorian and NSW calendars disagree?', a: 'From 12 April to 20 December 2027 they disagree on 32 of 181 weekdays, or 17.7%, by our count from the published term dates.' },
      { q: 'How many people live in Echuca - Moama?', a: 'The 2021 Census counted 22,568 people in the Echuca - Moama urban area, with a median age of 46.' },
      { q: 'How many town bus stops are in New South Wales?', a: 'Of 93 distinct stops on the five Echuca town routes, 31 fall in New South Wales, almost all of them on route 3 to Moama.' },
      { q: 'Can Moama learners join?', a: 'Yes. Lessons are online, so learners in Moama and anywhere in New South Wales join exactly as Echuca learners do.' },
      { q: 'What is vibe coding?', a: 'Vibe coding is building software by describing it to an AI in plain words. We pair it with reading and testing the code, so the learner always understands what was built.' },
      { q: 'Can primary school children start?', a: 'Yes. Children from six begin with Scratch and block coding; the agent project is for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Echuca?', a: 'No. We have no premises in Australia and claim none. Every class is live online; learners need a computer and a steady connection, and our listed phone number is in India.', boiler: true },
      { q: 'What do Echuca classes cost?', a: 'The first class is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one-to-one. Nothing is charged before the plan is agreed.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, grouped by level and goals rather than age or town. When no group time suits, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for northern Victoria',
    html: 'Start with the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victorian state guide</a>, or look south to <a class="cg-inline-link" href="/ai-and-programming-classes-in-bendigo">AI and programming classes in Bendigo</a> and east to <a class="cg-inline-link" href="/online-coding-and-python-classes-in-shepparton">online coding in Shepparton</a>. Senior students choosing subjects can read <a class="cg-inline-link" href="/vce-applied-computing-software-development-help">VCE Software Development help</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Echuca and Victoria',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/ai-and-programming-classes-in-bendigo', label: 'Bendigo' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-echm .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-echm .cg-hero h1 { font-weight: 700; letter-spacing: -0.016em; line-height: 1.12; }
.cg-root.cg-echm .cg-capsule { border: 1px solid rgba(22, 48, 142, 0.28); border-left-width: 4px; padding: 0.8rem 1.05rem; }
.cg-root.cg-echm .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-echm .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.011em; }
.cg-root.cg-echm .cg-grid-3 { gap: clamp(0.85rem, 2.2vw, 1.75rem); }
.cg-root.cg-echm .cg-table caption { font-weight: 650; text-align: left; letter-spacing: 0.003em; }
.cg-root.cg-echm .cg-table td + td { font-variant-numeric: tabular-nums; text-align: right; }
.cg-root.cg-echm .cg-ladder-col { border-bottom: 2px solid rgba(22, 48, 142, 0.26); padding-bottom: 0.8rem; }
.cg-root.cg-echm .cg-callout { border-left: 4px solid var(--cg-accent); }
`,

  dossier: {
    curriculumAuthority: 'Echuca - Moama, ABS Census 2021 QuickStats, Significant Urban Area 2007, comparison column Victoria (read 10 October 2026): 22,568 people; median age 46; 6,168 families; 10,298 private dwellings; average 2.4 people per household; separate house 7,564 (86.2 percent; Vic 73.4; Australia 72.3); flat or apartment 21 (0.2 percent; Vic 12.1; Australia 14.2); Technicians and Trades Workers 1,621 (16.0 percent; Vic 12.6; Australia 12.9); car as driver 6,857 (67.5 percent; Vic 49.9; Australia 52.7); aged 20 to 24 1,051 (4.7 percent; Vic 6.3; Australia 6.2). ABS ASGS 2021 SUA area 350.96 square kilometres. ABS SAL 2021 polygons at least 80 percent inside (our overlay): Echuca, Echuca Village; Moama 28.6 percent inside. NSW Department of Education future and past term dates and Victorian Government school term dates (read 10 October 2026): NSW 2027 Term 2 Tuesday 27 April to Friday 2 July, Term 3 Monday 19 July to Friday 24 September, Term 4 Monday 11 October to Monday 20 December; Victoria 2027 Term 2 Monday 12 April to Friday 25 June, Term 3 Monday 12 July to Friday 17 September, Term 4 Monday 4 October to Friday 17 December. IANA tzdb australasia: Australia/Melbourne rule AV, Australia/Sydney rule AN, both 10:00 with daylight saving from the first Sunday in October to the first Sunday in April.',
    localProject: 'Agent tool routing by jurisdiction. Victorian GTFS schedule (Department of Transport and Planning, CC BY 4.0, gtfs.zip last modified 4 October 2026), folder 6 regional bus, routes 6-a36 (1 Echuca - Echuca South), 6-a37 (2 Echuca - Echuca East), 6-a38 (3 Echuca - Moama), 6-Ec4 (4), 6-Ec5 (5 Echuca - 24 Lane); route 8 to Barmah excluded. Our code (scratchpad au/r7/ech_stops.py): 78 trips, 93 distinct stops; stop coordinates point-in-polygon against ABS SAL 2021: 62 Victoria (Echuca), 31 New South Wales (Moama); per route Vic/NSW: 1 34/0, 2 26/0, 3 1/28, 4 5/0, 5 1/4. Our code (ech_terms.py): weekdays 12 April to 20 December 2027 = 181; both in term 139; NSW only 11; Vic only 21; neither 10; disagree 32 (17.7 percent). Start gaps (NSW minus Vic): Term 2 15 days, Term 3 7, Term 4 7; end gaps 7, 7, 3 days.',
    requiredMentions: [
      '22,568',
      '6,168',
      '10,298',
      '7,564',
      '6,857',
      'Echuca Village',
      'tool routing',
      '17.7%',
      '32 of 181'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Echuca - Moama Significant Urban Area (2007): people, median age, families, dwellings, dwelling structure, occupation, travel to work, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2007' },
      { claim: 'Victorian GTFS schedule, Department of Transport and Planning (regional bus routes and stops, Echuca).', url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule' },
      { claim: 'NSW Department of Education, future and past NSW term and vacation dates (2027).', url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates' },
      { claim: 'Victorian Government, school term dates and holidays (2027).', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'ABS ASGS 2021 Suburbs and Localities boundaries, used to place each stop in a state.', url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer/0' },
      { claim: 'IANA time zone database, australasia file: Australia/Melbourne and Australia/Sydney.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'NSW Term 1 2027 dates: they differ between Eastern and Western division schools, so the comparison starts at Term 2.',
      'Which school any Moama student attends, or how many cross the bridge: not measured; the page says only that the router must use the school\'s state.',
      'Listing Moama as a locality inside the urban area: only 28.6 percent of the Moama locality lies inside it.',
      'Route 8 to Barmah: left out of the town-route counts.',
      'Income, rent, ancestry, religion, health and Indigenous status figures: excluded by the cluster rules.',
      'Any affiliation with the Victorian or NSW governments, the Department of Transport and Planning or Campaspe Shire Council.'
    ]
  }
};
