'use strict';
// Scunthorpe (cg- town page, UK cluster Phase 8, towns band A, row 390). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when an AI agent calls a tool and
// gets data back, what should it check before trusting it? (schema validation of real API output: types, missing
// values, totals that do not add up, measured vs estimated).
// Data (read 29 September 2026): Department for Transport road traffic statistics API, average-annual-daily-flow,
// filter local_authority_id=130 (North Lincolnshire), all years: 8 paged calls, 1,844 rows, years 2000 to 2025,
// 154 count points (149 counted at least once, 5 never). Count point 16218, A18 (Scotter Road roundabout to A159), 2024:
// Counted, 15,374 motor vehicles a day, link 2.6 km.
// Our checks (scratchpad frn/val.py): latitude and longitude are text strings in all 1,844 rows ("53.54942998" + the same
// string gives "53.5494299853.54942998"); link_length_km, link_length_miles, start and end junction names null in 436
// rows; the six HGV classes differ from all_hgvs in 464 rows and the vehicle types from all_motor_vehicles in 462 rows,
// by one or two vehicles in the examples checked (e.g. count point 6222, 2012: 19,293 published vs 19,294 summed);
// estimation_method Estimated 1,078, Counted 766; detail: "Estimated using AADF from previous year on this link" 1,050,
// "Manual count" 709, "Dependent on a neighbouring counted link" 40, "Estimated from nearby links" 28, "Automatic counter"
// 17. 2025: 23 counted, 44 estimated.
// Lesson family: validating tool output against a schema (types, nulls, invariants, provenance), structured output for
// agents. Screened: JSON schema, structured output, type checking 0 hits. Ede owns multi-valued fields; Letterkenny owns
// long-format tables; Hilversum owns record longevity; Preston and Newport use DfT counts for other methods. Traffic
// cellular automata were tried first and dropped: Barnet owns Nagel-Schreckenberg (ledger miss, now logged).
// Place facts: North Lincolnshire (E06000013) TS001 169,680. ONS 2021 BUAs (published): Scunthorpe 81,265; Brigg 5,635;
// Winterton 4,765. postcodes.io (North Lincolnshire) suburban areas: Ashby, Bottesford, Frodingham, Crosby, Old Brumby,
// New Brumby, Westcliff, Riddings, Yaddlethorpe; village: Burringham.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'SCUNTHORPE', label: 'Scunthorpe', blurb: 'Vibe coding and AI agents classes for Scunthorpe, with a project that checks real traffic data an AI agent fetches before anyone trusts it.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-scunthorpe',
  code: 'scn',
  accent: '#24205C',
  accentRationale: 'Scunthorpe: a deep navy (11.78:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Scunthorpe',
    eyebrow: 'Scunthorpe, North Lincolnshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Lincolnshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-yorkshire-and-the-humber', name: 'Yorkshire and the Humber' }],
  nav: [
    { label: 'Lincolnshire', href: '/coding-classes-in-lincolnshire' },
    { label: 'Yorkshire and the Humber', href: '/coding-and-ai-classes-in-yorkshire-and-the-humber' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Scunthorpe, England',
  title: 'Vibe Coding and AI Agents Classes in Scunthorpe | Ages 6 to 67',
  description: 'Online vibe coding, AI agents and Python classes for Scunthorpe, Ashby, Bottesford and Brigg learners aged 6 to 67, one-to-one or in groups. First lesson free.',
  ogDescription: 'Live online vibe coding and AI agents classes for Scunthorpe, and a Python project that validates real traffic data before an AI agent is allowed to use it.',
  twitterDescription: 'Scunthorpe vibe coding, AI agents and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Scunthorpe',
    description: 'Online vibe coding, AI agents, Python, coding and mathematics for children, teenagers and adults in Scunthorpe and North Lincolnshire, taught live with thinking skills first.'
  },

  h1: 'Vibe coding and AI agents classes in Scunthorpe',
  capsuleQ: 'Where can Scunthorpe learners find the best vibe coding and AI agents classes?',
  capsule: 'Scunthorpe\'s built-up area held 81,265 people at the 2021 census, according to the ONS, in a North Lincolnshire of 169,680 that also takes in Brigg and Winterton; Ashby, Bottesford, Frodingham, Crosby and Yaddlethorpe are among Scunthorpe\'s recorded suburbs. Children from six, teenagers and adults up to 67 across the area learn vibe coding, AI agents, Python, coding and maths on camera with our tutors in India, either on their own or in a class of five to ten at one stage. Thinking skills come ahead of tools, so an agent\'s output is something the learner checks, not simply accepts. We give the first lesson free and finish it with a course recommendation. The Scunthorpe project looks at the moment an AI agent receives data from a tool, and at everything that can be wrong with it. Continuing lessons are USD 100 monthly in a class or USD 150 monthly one-to-one.',
  lead: 'AI agents are useful because they call tools: they look things up, fetch data and then act on what comes back. The weak point is that last step. This project plays the part of an agent asked about traffic around Scunthorpe. It calls the Department for Transport\'s public road traffic API, receives 1,844 records for North Lincolnshire going back to 2000, and then does what a careful agent must do before answering anything: checks every record against what it expected. Numbers arrive as text, almost a quarter of the road details are missing, and hundreds of totals do not quite add up. None of that is an error by the data provider. All of it would trip up an agent that trusted the data blindly.',
  wa: 'Hello Modern Age Coders, we would like a free vibe coding or AI agents lesson for a learner in Scunthorpe.',

  picks: {
    eyebrow: 'Scunthorpe course picks',
    h2: 'Scunthorpe courses in thinking, vibe coding and agents',
    intro: 'Four starting points arranged by age, each opening with a live lesson that costs nothing and needs no card to book.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: checking information, spotting odd values and asking where a number came from.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch projects, then apps created by describing them to an AI and testing each part.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects built with AI, including this traffic data checker.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents, tool calls, structured output and the checks that keep them honest.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Scunthorpe and North Lincolnshire',
      h2: 'Scunthorpe, Brigg and Winterton',
      intro: 'ONS 2021 census counts for three built-up areas in North Lincolnshire, and the suburbs recorded in Scunthorpe.',
      body: [
        { kind: 'table', caption: 'Scunthorpe, Brigg and Winterton, 2021 census counts from the ONS', head: ['Built-up area', 'People (2021)'], rows: [
          ['Scunthorpe', '81,265'],
          ['Brigg', '5,635'],
          ['Winterton', '4,765']
        ] },
        { kind: 'p', text: 'The ONS publishes each of these separately, so they appear here unadded; North Lincolnshire\'s total of 169,680 comes from its own census table. Ashby, Bottesford, Frodingham, Crosby, Old Brumby, New Brumby, Westcliff, Riddings and Yaddlethorpe are recorded as suburban areas and Burringham as a village. Schools teach England\'s national curriculum; send your holiday dates and we will leave those weeks lesson-free.' },
        { kind: 'callout', h3: 'The county, the region and our approach', p: 'Wider options are on <a class="cg-inline-link" href="/coding-classes-in-lincolnshire">coding classes in Lincolnshire</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a>. Why every course puts reasoning before prompting is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Scunthorpe project',
      h2: 'Checking an AI agent\'s tool output: real traffic data from the DfT',
      intro: 'Fetch the records, write down what you expect them to look like, and count every place the data disagrees.',
      body: [
        { kind: 'p', text: 'The learner writes a small Python "tool" of the kind an AI agent would call: it asks the Department for Transport\'s road traffic API for every average daily flow record in North Lincolnshire, following the pages politely. Eight requests return 1,844 records covering 154 counting points from 2000 to 2025. One of them is the A18 between the Scotter Road roundabout and the A159, where 15,374 motor vehicles a day were counted in 2024. Before answering any question, the learner writes a schema: a description of what each field should be, such as "latitude is a number", "the vehicle types add up to the total" and "every record says whether it was counted or estimated". Then every record is checked.' },
        { kind: 'table', caption: 'What the schema checks found in 1,844 DfT records for North Lincolnshire, our Python run, 29 September 2026', head: ['Check', 'Result'], rows: [
          ['Latitude and longitude supplied as numbers', 'No: text in all 1,844 records'],
          ['Road-link length and junction names present', 'Missing in 436 records'],
          ['Vehicle types add up to the all-vehicles total', 'Off in 462 records, by one or two vehicles'],
          ['HGV classes add up to the HGV total', 'Off in 464 records'],
          ['Records estimated rather than counted', '1,078 of 1,844'],
          ['Counting points never counted at all', '5 of 154']
        ] },
        { kind: 'p', text: 'Each finding is a trap for an agent. Because the coordinates arrive as text, adding two of them with a plus sign in Python joins them into nonsense, "53.5494299853.54942998", instead of adding the numbers; the fix is to convert types deliberately, straight after the tool call. Missing link lengths mean any "traffic per kilometre" answer has to leave out almost a quarter of the records, or say that it cannot answer. The totals that are one or two vehicles out look like mistakes but are consistent with each figure being rounded separately, so a sensible agent reports the published total rather than "correcting" it by adding up the parts.' },
        { kind: 'p', text: 'The last check matters most for honesty. The field "estimation_method" shows that 1,078 records, 58%, are estimates rather than counts, and the most common detail is "Estimated using AADF from previous year on this link", which appears 1,050 times. In 2025, 23 records were counted and 44 estimated. An agent that reports "the A18 carries 15,374 vehicles a day" should add that this was a counted figure; for most other roads, the same kind of number is an estimate built from an earlier year.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Check a printed table for gaps and odd entries, and explain what each problem could lead to.' },
          { h3: 'Ages 11 to 15', p: 'Fetch the traffic records in Python, convert the text numbers and count the missing values.' },
          { h3: 'Ages 15 and up', p: 'Write a full schema, validate every record and design how an agent should report each problem.' }
        ] },
        { kind: 'callout', h3: 'DfT data, our checks', p: 'Traffic records come from the Department for Transport road traffic statistics service, and the census counts from the ONS. The schema, the checks and every count in the table are our own work; none of the findings is a criticism of the publisher.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents and tools',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Trust in an agent rests on the checks it runs on its tools.',
      body: [
        { kind: 'table', caption: 'From the DfT records to any AI agent with tools', head: ['In the Scunthorpe project', 'For AI agents in general'], rows: [
          ['Coordinates arrived as text', 'Convert and check types right after every tool call'],
          ['436 records lacked link details', 'Handle missing values explicitly, never silently'],
          ['Totals were one or two vehicles out', 'Know when a mismatch is rounding, not an error'],
          ['58% of records were estimates', 'Carry the source and method along with the number'],
          ['A schema caught it all', 'Validate structured output before acting on it']
        ] },
        { kind: 'p', text: 'Structured output, where a tool or a model returns data in a fixed format such as JSON, is central to how AI agents work, and validating it against a schema is a dependable safety habit in agent design. When Scunthorpe learners vibe code, describing what they want while an AI writes the program, they ask it for a validation step too and then run that step against the real records above. Agents themselves are for older teenagers and adults once Python is comfortable, and Copilot Studio agent lessons are private only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">where agent building fits in our UK courses</a>, and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> for the habits behind it.' },
        { kind: 'p', text: 'Modern Age Coders is independent of the Department for Transport, the ONS and postcodes.io. We relied only on what they publish openly; any slips in the checking are down to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From spotting gaps to validating agent output',
    intro: 'A school year gives a rough starting point, and the trial lesson refines it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Checking information and asking where a number came from.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and real data', p: 'APIs, data types and validation alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Reliable AI agents', p: 'Tool calling, structured output, validation and guardrails in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and tools',
    h2: 'How should an AI agent check the data its tools return?',
    intro: 'Against a schema: the right types, no silent gaps, totals that make sense and a clear note of where each number came from.',
    p1: 'In Scunthorpe\'s project those checks found text where numbers were expected in every record, gaps in 436, near-miss totals in about 460 and estimates in 1,078.',
    p2: 'Learners who have built the checks themselves insist on them in any agent they design, and read agent answers with the same care.',
    closer: 'A Scunthorpe teenager who can make an AI agent check its own data is ready for how software is being built in 2026, and that makes coding well worth learning.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Ashby to Bottesford, online',
    intro: 'A laptop or desktop and a broadband connection that can hold a video call are enough.',
    cells: [
      { h3: 'Learners type the code', p: 'Students write, prompt and run each program; the tutor watches their shared screen and keeps asking why.' },
      { h3: 'Start at the right level', p: 'We watch what the learner can do in the trial and pick topic one from that; exam boards are written down.' },
      { h3: 'No fee for lesson one', p: 'Session one is free, and we end it by naming a course.' },
      { h3: 'Classes by stage', p: 'Each group has five to ten learners from around Britain at one level.' },
      { h3: 'Twice weekly', p: 'Lessons pause in school holidays.' },
      { h3: 'Fixed hours', p: 'Tutors adjust for UK clock changes so the lesson time stays put.' }
    ],
    spec: { title: 'Why lessons run online', p: 'Five learners at one stage who are all free on one evening seldom live on the same road. Online, they can still learn together.' }
  },

  fees: {
    h2: 'Scunthorpe fees',
    intro: 'Scunthorpe learners pay our international rate, as does every country other than India.',
    first: 'A full lesson free at the start, with a suggested course at the end.',
    group: 'About eight live group lessons per month.',
    private: 'About eight live private lessons per month.',
    closer: 'We bill in US dollars rather than pounds, and not until the trial has fixed a course and a regular slot. Time away, missed sessions and group-private switches are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews: Lincolnshire households and families nationwide',

  book: {
    h2: 'Book a free Scunthorpe lesson',
    intro: 'An age or year group plus a hobby is plenty to start with. A trial might be a spot-the-odd-value puzzle, a Scratch game made with AI help, a first Python program, or fetching real data and checking it.',
    success: 'Thank you. We have your Scunthorpe request.'
  },

  faq: {
    h2: 'Scunthorpe questions',
    intro: 'Structured output, the traffic data project, vibe coding and practical details.',
    items: [
      { q: 'What is the population of Scunthorpe?', a: 'The ONS gives 81,265 for the Scunthorpe built-up area at the 2021 census.' },
      { q: 'Can Scunthorpe learners study vibe coding and AI agents?', a: 'They can, over live video, anywhere in North Lincolnshire and at any age from 6 to 67.' },
      { q: 'What is structured output in AI?', a: 'Data returned in a fixed, predictable format such as JSON, so a program or agent can check it against a schema before using it.' },
      { q: 'What is the Scunthorpe project?', a: 'Learners fetch 1,844 real traffic records for North Lincolnshire from the Department for Transport, validate every one against a schema and decide how an AI agent should report what they find.' },
      { q: 'When can learners start building AI agents?', a: 'Once Python feels natural, often around the late teens or in adulthood; lessons on Copilot Studio agents are one-to-one.' },
      { q: 'Is there a local classroom?', a: 'No; every session is taught online.' },
      { q: 'Is exam support available?', a: 'For GCSE and A level computer science and maths, yes, with understanding as the target and no grade guarantees.' },
      { q: 'How young or old can learners be?', a: 'Anywhere between 6 and 67.' },
      { q: 'What are the fees?', a: 'Lesson one is free of charge. Afterwards it is USD 100 monthly for a class seat or USD 150 monthly for private teaching.' },
      { q: 'Do lessons stop for school holidays?', a: 'Yes. Let us know the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Lincolnshire and Humber pages',
    html: '<a class="cg-inline-link" href="/ai-and-programming-classes-in-grimsby">Grimsby</a> and <a class="cg-inline-link" href="/best-coding-class-in-lincoln">Lincoln</a> have pages and projects of their own, as does <a class="cg-inline-link" href="/ai-and-programming-classes-in-harrogate">Harrogate</a> in the same region. Every area we cover is listed on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Scunthorpe and Lincolnshire',
  footerPlaces: [
    { href: '/coding-classes-in-lincolnshire', label: 'Lincolnshire' },
    { href: '/coding-and-ai-classes-in-yorkshire-and-the-humber', label: 'Yorkshire and the Humber' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-scn .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-scn .cg-hero h1 { font-weight: 790; letter-spacing: -0.027em; line-height: 1.03; }
.cg-root.cg-scn .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-scn .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-scn .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.02em; }
.cg-root.cg-scn .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-scn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-scn .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-scn .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-scn .cg-callout { border-left-width: 5px; border-radius: 0 11px 11px 0; }
`,

  dossier: {
    curriculumAuthority: 'North Lincolnshire (E06000013), Census 2021 TS001 usual residents 169,680. ONS 2021 BUAs (published): Scunthorpe 81,265; Brigg 5,635; Winterton 4,765. postcodes.io (North Lincolnshire): Ashby, Bottesford, Frodingham, Crosby, Old Brumby, New Brumby, Westcliff, Riddings, Yaddlethorpe (suburban areas); Burringham (village). DfT count point 16218, A18, 2024 Counted 15,374.',
    localProject: 'DfT AADF API, North Lincolnshire, 8 calls, 1,844 rows, 2000 to 2025, 154 count points (5 never counted). Latitude/longitude text in 1,844; link length and junction names null in 436; vehicle types vs all_motor_vehicles off in 462 (1 or 2 vehicles), HGV classes vs all_hgvs off in 464; Estimated 1,078, Counted 766; "Estimated using AADF from previous year on this link" 1,050; 2025: 23 counted, 44 estimated. Lesson family: schema validation of tool output, types, nulls, invariants and rounding, provenance.',
    requiredMentions: [
      '81,265',
      '169,680',
      'Brigg',
      'Ashby',
      'Bottesford',
      'Frodingham',
      'Yaddlethorpe',
      '1,844',
      'JSON',
      '15,374'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations and TS001 usual residents via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Department for Transport road traffic statistics API, average annual daily flow for North Lincolnshire.', url: 'https://roadtraffic.dft.gov.uk/api/average-annual-daily-flow?filter[local_authority_id]=130' },
      { claim: 'Department for Transport road traffic statistics site.', url: 'https://roadtraffic.dft.gov.uk/' },
      { claim: 'postcodes.io places in North Lincolnshire (suburban areas and village).', url: 'https://api.postcodes.io/places?q=Bottesford' }
    ],
    rejectedClaims: [
      'Steel industry history: not read from a source; not claimed.',
      'Why DfT totals differ from their parts: described as consistent with separate rounding, not asserted as the cause.',
      'Traffic trends or congestion at any road: not analysed; not claimed.',
      'That any finding is an error by the DfT: explicitly not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
