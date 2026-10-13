'use strict';
// Horsham, Victoria (cg- regional city page, Australia cluster Phase 7, row 194). Shaped page (vibe coding and AI
// agents): leads with teenagers and adults. Slug carries -victoria because a UK Horsham page exists. Spine: how much
// water sits in Horsham's mains when full, and how does an agent get it wrong by a factor of a million? Data: GWM Water
// mains as published by Horsham Rural City Council on data.gov.au (dataset gwm-water-mains, gwm-water-mains.geojson,
// licence Creative Commons Attribution 2.5 Australia), downloaded 10 October 2026, CRS84 coordinates. Measured by us
// (scratchpad au/r8/hor_units.py, lengths on a local flat projection, an approximation): 3,899 line features, all
// STAGE 'IN', 1,756.43 km in all; DIAMETER field 40 to 1,200 (millimetres), 1,533 features at 100; 396 pieces shorter
// than 1 m. Within 5 km of central Horsham (our choice, first vertex test): 2,077 features, 231.62 km, length-weighted
// diameter 148.1 mm; water held if every pipe were full 6,801 cubic metres (6.80 megalitres); diameter read as
// centimetres 680,104 cubic metres; read as metres 6.801 billion cubic metres. Lesson family: unit confusion
// (millimetres vs metres) in an agent's answer over a pipe-network layer; screened free site-wide on 10 October 2026 and
// claimed by AU-R8.
// Place facts read raw on 10 October 2026: ABS Census 2021 QuickStats, Horsham Significant Urban Area (2010), with
// Victoria and Australia: 16,985 people; median age 40; 4,515 families; 7,978 private dwellings; 2.3 people per
// household; separate house 6,220 (89.5 percent; Victoria 73.4; Australia 72.3); flat or apartment 366 (5.3; Victoria
// 12.1); Professionals 1,502 (18.8; Victoria 25.0; Australia 24.0); Technicians and Trades Workers 1,158 (14.5;
// Victoria 12.6); Bachelor Degree level and above 2,045 (14.8; Victoria 29.2; Australia 26.3); aged 15 to 19: 955
// (5.6); aged 20 to 24: 977 (5.8); industry: Secondary Education 224 (2.8; Victoria 1.7), Local Government
// Administration 207 (2.6; Victoria 1.4). ABS ERP Horsham LGA (23190) 30 June 2025: 20,252. Victorian term dates
// (vic.gov.au): 2026 Term 4 Monday 5 October to Friday 18 December; 2027 Term 1 Wednesday 27 January to Thursday 25
// March, students starting Thursday 28 January in government schools; Term 2 Monday 12 April to Friday 25 June. IANA
// tz: Australia/Melbourne UTC+10, daylight saving UTC+11 from the first Sunday in October to the first Sunday in April.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'HORSHAM', label: 'Horsham, Victoria', blurb: 'Horsham, a water main layer in millimetres, and an agent whose answer comes out a million times too large.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-horsham-victoria',
  code: 'hrsv',
  accent: '#5E6220',
  accentRationale: 'Horsham, Victoria: a Wimmera wheat-stubble olive (HSV saturation 0.68, value 0.38, hue 63), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 6.5:1 on white and 5.3:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Horsham',
    eyebrow: 'Horsham, Victoria',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Victoria', href: '/coding-and-ai-classes-in-victoria' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Horsham, Victoria',
  title: 'Vibe Coding and AI Agents Classes in Horsham, Victoria',
  description: 'Live online vibe coding and AI agent classes for Horsham teenagers and adults, with a project that checks an agent\'s units on the town\'s published water main data.',
  ogDescription: 'Horsham teens and adults learn to direct AI agents, then catch one that reads pipe diameters in millimetres as metres.',
  twitterDescription: 'Vibe coding and AI agents classes for Horsham, live online, first lesson free.',
  ogImageCourse: 'codex-and-claude-code-ai-coding-agents-course-for-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Horsham Learners',
    description: 'Level-matched online classes in directing AI coding agents, checking their work with tests and units, and Python for data, for teenagers and adults across Horsham and the Wimmera.'
  },

  h1: 'Vibe coding and AI agents classes in Horsham',
  capsuleQ: 'Can AI agent classes in Horsham teach a learner to check an agent\'s answer?',
  capsule: 'Yes. In our classes a Horsham teenager or adult hands real tasks to an AI agent, then reads its code line by line and tests the result against things they can reason about, such as units and orders of magnitude. The Horsham urban area counted 16,985 residents at the 2021 Census. Lessons are live and online, privately or in a small group, and the opening one costs nothing.',
  lead: 'Horsham Rural City Council publishes the GWM Water main layer for its area as open data: 3,899 pipe pieces, each with a diameter written as a plain number such as 100 or 450. Ask an AI agent how much water those pipes hold when full and it will happily compute circles and lengths. If it reads the 100 as metres instead of millimetres, it reports about 6.8 billion cubic metres for the mains near the town centre, a figure roughly a million times too large. Read correctly, the same pipes hold about 6,801 cubic metres. Our Horsham learners practise spotting that kind of answer before anyone repeats it.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding and AI agents class for a learner in Horsham, Victoria.',

  picks: {
    eyebrow: 'Course picks for Horsham',
    h2: 'Directing AI agents, at the right level',
    intro: 'Four routes for Horsham learners. The trial session settles which fits, and card details are never asked for.',
    items: [
      { course: 'codex-and-claude-code-ai-coding-agents-course-for-teens', band: 'Ages 13 to 17', note: 'Giving coding agents real tasks with tools whose terms allow the learner\'s age, then reviewing what comes back.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Small web and Python projects built with AI help, with testing and sanity checks from the first week.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Reading open data layers, keeping track of units and charting what the numbers really say.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults and professionals', note: 'Agents for everyday work, paired with review, tests and the question of what was assumed.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Horsham in the Census',
      h2: 'The Wimmera\'s regional centre, counted in 2021',
      intro: 'The bureau\'s QuickStats for the Horsham urban area, with Victorian and national shares where they are published.',
      body: [
        { kind: 'p', text: 'Census night recorded 16,985 people in the Horsham urban area. Their median age was 40, and they formed 4,515 families spread over 7,978 private dwellings, at 2.3 people to the average household.' },
        { kind: 'table', caption: 'How Horsham compares (2021 Census shares)', head: ['Share of the relevant group', 'Horsham', 'Victoria', 'Australia'], rows: [
          ['Free-standing houses (6,220 dwellings)', '89.5%', '73.4%', '72.3%'],
          ['Workers in professional roles (1,502 people)', '18.8%', '25.0%', '24.0%'],
          ['Workers in technical and trade roles (1,158 people)', '14.5%', '12.6%', 'Not compared'],
          ['People 15 and over with a bachelor degree or higher (2,045 people)', '14.8%', '29.2%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teaching as work', p: 'Secondary education employed 224 Horsham residents, 2.8% of workers, compared with 1.7% across Victoria.' },
          { h3: 'Council as employer', p: 'Local government administration employed 207 residents, 2.6% of the workforce, against 1.4% statewide.' },
          { h3: 'Teenagers and young adults', p: 'There were 955 residents aged 15 to 19 and 977 aged 20 to 24 when the Census was taken.' }
        ] },
        { kind: 'p', text: 'The bureau adds small random changes to Census cells to protect privacy, which means parts of a table may not sum to its published total. We print each figure exactly as released and never construct a total by adding rows together.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How much water fits in Horsham\'s mains, and how does an agent miss by a million?',
      intro: 'The GWM Water main layer from Horsham Rural City Council\'s open data, read in Python and handed to an AI agent.',
      body: [
        { kind: 'table', caption: 'Mains within 5 km of central Horsham, full-pipe volume (our calculation, 10 October 2026)', head: ['How the diameter field was read', 'Volume reported', 'Compared with the correct answer'], rows: [
          ['As millimetres, converted to metres', '6,801 cubic metres (6.80 megalitres)', 'Correct'],
          ['As centimetres by mistake', '680,104 cubic metres', '100 times too large'],
          ['As metres by mistake', 'About 6.8 billion cubic metres', 'About a million times too large']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. The layer', p: 'Horsham Rural City Council publishes 3,899 water main pieces from GWM Water, every one marked as in service, each with a DIAMETER value between 40 and 1,200 and no unit stored beside it.' },
          { h3: '2. The agent\'s plan', p: 'Asked how much water the town\'s mains hold, an agent sums pi times radius squared times length for every pipe. The formula is right; the trouble is the radius, because the field holds millimetres and the lengths come out in metres.' },
          { h3: '3. The check', p: 'Before believing any figure, a learner estimates it: about 232 km of pipe at roughly 15 cm across should hold a few thousand cubic metres. Anything in the billions fails at a glance.' }
        ] },
        { kind: 'callout', h3: 'Why units go missing', p: 'Spatial layers often store a measurement as a bare number and leave its unit to a separate document. Our flat-projection measurement puts the whole layer at 1,756.43 km of main, of which 2,077 pieces totalling 231.62 km start within 5 km of the town centre. Those pipes average 148.1 mm across when weighted by length. A person reading the attribute table can guess millimetres from values like 100 and 150; a program has no such instinct unless someone writes the conversion in.' },
        { kind: 'p', text: 'The 5 km circle and the full-pipe volume are our own choices for teaching; real mains are never all full and empty at once, and nothing here describes how GWM Water operates its network. Lengths are approximate, measured on a flat projection of the published coordinates.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Units in code',
      h2: 'Four habits that keep units honest',
      intro: 'Practised on Horsham\'s pipes, then useful in physics homework, engineering data and any agent that touches measurements.',
      body: [
        { kind: 'table', caption: 'Habits for unit-safe code', head: ['Habit', 'On the Horsham layer', 'What it prevents'], rows: [
          ['Name the unit in the variable', 'diameter_mm, length_m', 'Mixing values silently in one formula'],
          ['Convert once at the edge', 'Divide by 1,000 when the data is loaded', 'Conversions scattered and forgotten'],
          ['Estimate before computing', 'A few thousand cubic metres expected', 'Accepting an answer a million times off'],
          ['Test with one known pipe', 'One 100 m length of 100 mm main holds about 0.79 cubic metres', 'A formula that is right in shape but wrong in scale']
        ] },
        { kind: 'p', text: 'Agents are fast at writing the arithmetic and poor at noticing when a number is absurd. The habits above take seconds, and they turn a learner from someone who forwards an agent\'s answer into someone who can vouch for it.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Compute the volume of a few pipes by hand, then check an agent\'s code against those numbers before running it on the whole layer.' },
          { h3: 'University students', p: 'Unit-aware libraries, dimensional checks in tests and data contracts that state units explicitly.' },
          { h3: 'Adults at work', p: 'Asset registers, spreadsheets and reports where a missing unit can turn a sensible figure into nonsense.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no link with Horsham Rural City Council, GWM Water or the ABS. The layer and the Census figures belong to them; the lengths, volumes and errors on this page are our own analysis.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Horsham',
      h2: 'Terms and clocks for Wimmera learners',
      intro: 'Dates and times that decide when Horsham learners can fit in a live lesson.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term 4 in 2026', p: 'Victorian schools run Term 4 from Monday 5 October to Friday 18 December 2026.' },
          { h3: 'Back in 2027', p: 'Term 1 starts on Wednesday 27 January 2027, with government school students returning on Thursday 28 January, and runs to Thursday 25 March.' },
          { h3: 'Two clock settings', p: 'Victoria runs on UTC plus 10 and moves to plus 11 for daylight saving between the first Sunday in October and the first Sunday in April.' }
        ] },
        { kind: 'spec', title: 'The gap to India', p: 'India time is four and a half hours behind Horsham in winter and five and a half hours behind in summer, so lesson times are always confirmed in Horsham time.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first prompt to agents you can trust with data',
    intro: 'Age bands are rough guides; the trial lesson shows where to start.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Ask and read', p: 'Getting short programs from an AI and tracing them by hand before they run.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'Agents and data', p: 'Directing coding agents on open data tasks and checking their units and totals.', courses: ['codex-and-claude-code-ai-coding-agents-course-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'University', h3: 'Agents in projects', p: 'Larger builds with agents, code review, automated tests and documented assumptions.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Agents at work', p: 'Automating reports and data checks in a way a colleague could audit.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an agent writes the code, why does a Horsham learner still need to?',
    intro: 'Because the agent cannot tell when its answer is a million times too big.',
    p1: 'The pipe-volume code an agent writes for the Horsham layer is short and tidy. It loops over every main, applies the area of a circle and adds up the results. Feed it diameters it believes are in metres and it reports billions of cubic metres with the same calm tone it would use for the correct answer, because nothing in the code knows what a reasonable answer looks like.',
    p2: 'Our Horsham learners let agents write that code, then insist on an estimate first and a test with one pipe they have worked out by hand. Reading the code closely enough to find where the unit is assumed is the skill that makes an agent safe to use.',
    closer: 'A Horsham learner who has caught an agent treating millimetres as metres has the judgement that matters most for working alongside AI in 2026: knowing when a confident answer cannot possibly be right.',
    blogAnchor: 'why reading code beats trusting it in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Across the Wimmera, from one laptop',
    intro: 'A live online class reaches Horsham and the farms and towns around it equally.',
    cells: [
      { h3: 'Classes come to you', p: 'Learners join from home anywhere around Horsham, in the same live lesson a Melbourne student would attend.' },
      { h3: 'Victorian year levels', p: 'Teaching follows Victorian year levels, with VCE students supported in Years 11 and 12, all in English.' },
      { h3: 'Start with a free session', p: 'Spend the opening lesson building something with an agent and a teacher, then receive a suggested course and time; no card is needed.' },
      { h3: 'Classmates at your stage', p: 'Groups hold fifteen to twenty learners at one level, drawn from across Australia and abroad so every stage has a workable hour.' },
      { h3: 'A steady rhythm', p: 'Two sessions each week, about eight a month, with school holidays and exam periods planned ahead.' },
      { h3: 'Daylight saving absorbed', p: 'When Victoria changes its clocks, the lesson keeps its Horsham time and our side adjusts.' }
    ],
    spec: { title: 'Times written for Horsham', p: 'Every booking is confirmed in Victorian time, so families never need to work out India time themselves.' }
  },

  fees: {
    h2: 'What vibe coding and AI agents classes cost in Horsham',
    intro: 'The price list fits in three lines.',
    first: 'A free first session that finishes with a recommended stage, course and slot.',
    group: 'A month of group lessons, normally eight, with fifteen to twenty learners at your level.',
    private: 'About eight private lessons a month with one teacher.',
    closer: 'Horsham learners are charged the same US dollar rate as every other Australian family, with no country loading. Payment only begins once the trial has settled a course and a time; holidays, missed sessions and format changes are explained on the pricing page.'
  },

  reviewsH2: 'Google reviewers on their lessons with us',

  book: {
    h2: 'Tell us about the learner and we will shape the trial',
    intro: 'We prepare the first task ahead of time: tracing a short AI-written program for a Year 8 beginner, checking an agent\'s units on a handful of pipes for a Year 11 student, or the full Horsham water main exercise for an adult.',
    success: 'Thank you. We will be in touch soon about a vibe coding and AI agents class in Horsham.'
  },

  faq: {
    h2: 'Horsham vibe coding and AI agents questions',
    intro: 'What Horsham learners and parents usually want to know first.',
    items: [
      { q: 'How many people live in Horsham?', a: 'The urban area counted 16,985 residents at the 2021 Census, and the ABS estimate for the wider council area at 30 June 2025 is 20,252.' },
      { q: 'What is unit confusion in code?', a: 'Unit confusion happens when a program combines numbers measured in different units, such as millimetres and metres, without converting them. The arithmetic still runs, so the mistake only shows up as an answer that is wrong by a factor of ten, a thousand or more.' },
      { q: 'What is the Horsham water main project?', a: 'Learners load the GWM Water main layer published by Horsham Rural City Council, ask an AI agent to work out how much water the mains near the town hold when full, then find out why its answer can be a million times too large and fix it.' },
      { q: 'What is vibe coding?', a: 'Vibe coding means describing what you want in plain language and letting an AI write most of the code. We teach it alongside reading and testing that code, so the learner can tell when the result is wrong.' },
      { q: 'Which AI tools do teenagers use?', a: 'Only tools whose published terms allow the learner\'s age. Several popular assistants require users to be 18 or older, so younger learners work with suitable alternatives under a teacher\'s guidance.' },
      { q: 'When do Horsham lessons run?', a: 'After school, in the evening or at the weekend, agreed in the trial and written in Victorian time.' },
      { q: 'Are there lessons for younger children?', a: 'There are, from age 6, usually with Scratch and other visual tools, but this page is written for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Horsham?', a: 'No, and we do not claim one. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number on this page is an Indian one.', boiler: true },
      { q: 'What do Horsham classes cost?', a: 'The first lesson is free. Afterwards a group place costs USD 100 a month for two live lessons a week, roughly eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'From five to ten, matched by level, pace and goals rather than by age or town. If no group suits a workable time, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Victoria',
    h2: 'More for Horsham and Victorian learners',
    html: 'Elsewhere in regional Victoria there are <a class="cg-inline-link" href="/online-coding-and-python-classes-in-ballarat">online coding and Python classes in Ballarat</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-mildura">AI and programming classes in Mildura</a>. In the capital, see <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">vibe coding and AI agents classes in Melbourne</a>, and for the whole state read <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">coding and AI classes in Victoria</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Horsham and Victoria',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-ballarat', label: 'Ballarat' },
    { href: '/ai-and-programming-classes-in-mildura', label: 'Mildura' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-hrsv .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-hrsv .cg-hero h1 { font-weight: 710; letter-spacing: -0.016em; line-height: 1.1; }
.cg-root.cg-hrsv .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-hrsv .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-hrsv .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.008em; }
.cg-root.cg-hrsv .cg-grid-3 { gap: clamp(0.85rem, 2.1vw, 1.65rem); }
.cg-root.cg-hrsv .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-hrsv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hrsv .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-hrsv .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Horsham Significant Urban Area, ABS Census 2021 QuickStats, area code 2010, with Victoria and Australia (read 10 October 2026): 16,985 people; median age 40; 4,515 families; 7,978 private dwellings; 2.3 people per household; separate house 6,220 (89.5 percent; Victoria 73.4; Australia 72.3); flat or apartment 366 (5.3 percent; Victoria 12.1); Professionals 1,502 (18.8 percent; Victoria 25.0; Australia 24.0); Technicians and Trades Workers 1,158 (14.5 percent; Victoria 12.6); Bachelor Degree level and above 2,045 (14.8 percent; Victoria 29.2; Australia 26.3); aged 15 to 19: 955 (5.6 percent); aged 20 to 24: 977 (5.8 percent); industry: Secondary Education 224 (2.8 percent; Victoria 1.7), Local Government Administration 207 (2.6 percent; Victoria 1.4). ABS ERP Horsham LGA (23190) 30 June 2025: 20,252. vic.gov.au school term dates: 2026 Term 4 Monday 5 October to Friday 18 December; 2027 Term 1 Wednesday 27 January (students start Thursday 28 January in government schools) to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June. IANA tz: Australia/Melbourne UTC+10, daylight saving UTC+11 from the first Sunday in October to the first Sunday in April; Asia/Kolkata UTC+5:30.',
    localProject: 'Unit confusion (millimetres vs metres) in an agent answer. GWM Water mains, Horsham Rural City Council on data.gov.au (gwm-water-mains.geojson, Creative Commons Attribution 2.5 Australia), downloaded 10 October 2026, CRS84 coordinates. 3,899 line features, STAGE IN for all; DIAMETER 40 to 1,200 (1,533 features at 100, 611 at 150, 389 at 63); materials PVC-U 1,803, PVC-M 825, S 439, PE100 324, AC 233. Lengths on a local equirectangular projection (approximation): whole layer 1,756.43 km; 396 pieces under 1 m. Pieces whose first vertex lies within 5 km of 142.1997 E, 36.7117 S (our choice): 2,077, totalling 231.62 km, length-weighted diameter 148.1 mm. Full-pipe volume sum of pi (d/2)^2 L: diameter in mm converted to m 6,801 cubic metres (6.80 ML); read as cm 680,104 cubic metres; read as m 6.801e9 cubic metres.',
    requiredMentions: [
      '16,985',
      '4,515',
      '7,978',
      '6,220',
      '1,502',
      '6,801 cubic metres',
      '231.62 km',
      '1,756.43 km',
      'Across the Wimmera, from one laptop'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Horsham Significant Urban Area (2010): people, median age, families, dwellings, dwelling structure, occupation, education, age, industry.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2010' },
      { claim: 'GWM Water mains published by Horsham Rural City Council on data.gov.au, Creative Commons Attribution 2.5 Australia.', url: 'https://data.gov.au/data/dataset/gwm-water-mains' },
      { claim: 'Victorian Government school term dates and holidays, 2026 and 2027.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'ABS Data API, Estimated Resident Population by LGA 2025, Horsham LGA 23190.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.23190.LGA2025.A?format=csvfilewithlabels' },
      { claim: 'IANA time zone database, australasia file: Australia/Melbourne offsets and daylight saving.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any statement about how much water GWM Water actually holds in or supplies through its mains: the full-pipe volume is a classroom calculation, not an operating figure.',
      'Any claim that the DIAMETER field is documented as millimetres in the layer itself: no unit is stored with the field; millimetres is inferred from the values and labelled as our reading.',
      'Suburb or locality names around Horsham: none were verified inside the urban area boundary, so none are listed.',
      'OpenStreetMap data and Bureau of Meteorology observations: Overpass returned 406 and BOM 403 to this machine in October 2026; neither was circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Horsham Rural City Council, GWM Water, the Victorian Government or the ABS.'
    ]
  }
};
