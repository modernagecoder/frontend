'use strict';
// Mount Gambier (cg- regional city page, Australia cluster Phase 7, row 174). Shaped page (vibe coding and AI agents):
// leads with teenagers and adults. Spine: an AI agent is asked to find the flat ground on an elevation grid around
// Mount Gambier; why does its answer change from 7,993 patches to 6,309 when nobody changed the data? Data: NASA SRTM
// 1 arc-second elevation (SRTMGL1 version 3, LP DAAC), sampled through the OpenTopoData srtm30m service on 8 October
// 2026 at points 0.0005 degrees apart, latitude -37.865 to -37.815, longitude 140.740 to 140.800: 101 by 121 points,
// 12,221 cells, spacing 43.96 m east-west by 55.29 m north-south; every value returned in whole metres, range -1 to
// 174 m. Measured by us (scratchpad au/r5/mgb_ccl.py), two-pass labelling of equal-value neighbours with union-find:
// 4-connectivity 8,298 provisional labels, 7,993 final components; 8-connectivity 6,668 provisional, 6,309 final.
// Largest components (same under both): 193 cells (46.9 ha) at 24 m, centroid -37.8471, 140.778; 74 cells (17.98 ha)
// at -1 m, centroid -37.84, 140.7668. Third largest: 4-connectivity 21 cells (5.1 ha) at 41 m; 8-connectivity 58 cells
// (14.1 ha) at 42 m. The flats are not identified as named lakes; the -1 m value is treated as a processing value
// (our interpretation). Department for Environment and Water catalogue record on data.gov.au, "Mt Gambier, South
// Australia, Blue Lake Levels" (CC BY 3.0 AU), notes "Time series of water levels the Mt Gambier Blue Lake summarized
// to daily intervals sourced from a telemetered data logger located at lakes edge"; its file is hosted on
// data.sa.gov.au, which returned 403 and was not used. Lesson family: two-pass connected-component labelling of flat
// surfaces in an elevation grid; screened free site-wide on 9 October 2026 and claimed by AU-R5.
// Place facts read raw on 8 October 2026: ABS Census 2021 QuickStats, Mount Gambier Significant Urban Area (4002), with
// South Australia and Australia: 29,446 people; median age 41 (SA 41; Australia 38); 7,834 families; 13,763 private
// dwellings; 2.3 people per household; separate house 9,334 (79.0 percent; SA 78.0; Australia 72.3); flat or apartment
// 934 (7.9; SA 6.8); Professionals 2,035 (14.7; SA 21.5); Technicians and Trades Workers 2,027 (14.7; SA 13.2); Machinery
// Operators and Drivers 1,256 (9.1; SA 6.0); Bachelor Degree level and above 2,863 (11.9; SA 22.7; Australia 26.3); aged
// 15 to 19: 1,868 (6.3; SA 5.6); aged 20 to 24: 1,600 (5.4); industry: Road Freight Transport 408 (3.0; SA 1.2;
// Australia 1.1). IANA tz: Australia/Adelaide, ACST UTC+9:30, ACDT UTC+10:30 from the first Sunday in October to the
// first Sunday in April. South Australian term dates and council pages returned 403 and are omitted. Excluded by the
// cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'MOUNT GAMBIER', label: 'Mount Gambier', blurb: 'Mount Gambier, a 12,221-cell elevation grid, and an AI agent whose count of flat ground changes with one hidden setting.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-mount-gambier',
  code: 'mgmb',
  accent: '#261852',
  accentRationale: 'Mount Gambier: a deep night violet blue (HSV saturation 0.71, value 0.32, hue 254), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 15.7:1 on white and 12.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Mount Gambier',
    eyebrow: 'Mount Gambier, South Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'South Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-south-australia', name: 'South Australia' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'South Australia', href: '/coding-and-ai-classes-in-south-australia' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Mount Gambier, South Australia',
  title: 'Vibe Coding and AI Agents Classes in Mount Gambier',
  description: 'Live online vibe coding and AI agents classes for Mount Gambier teens and adults: let AI write code, then prove it right on elevation data. Groups or one to one.',
  ogDescription: 'Vibe coding and AI agents classes for Mount Gambier teens and adults, with an agent whose count of flat ground shifts from 7,993 to 6,309.',
  twitterDescription: 'Vibe coding and AI agents classes in Mount Gambier, live online, first lesson free.',
  ogImageCourse: 'codex-and-claude-code-ai-coding-agents-course-for-teens',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Mount Gambier Learners',
    description: 'Level-matched online vibe coding, coding agents, Python and grid algorithms for teenagers and adults in Mount Gambier and nearby towns, taught live in English.'
  },

  h1: 'Vibe coding and AI agents classes in Mount Gambier',
  capsuleQ: 'How does a Mount Gambier learner get the best out of AI coding agents?',
  capsule: 'By letting the agent draft code quickly, then checking every assumption it made on data the learner understands, with a live teacher asking why. Mount Gambier counted 29,446 residents at the 2021 Census. Classes are online and live, alone with a teacher or in a small group at one level, and the first is free.',
  lead: 'Ask an AI agent to find the flat ground on NASA\'s elevation grid around Mount Gambier and it will write a labelling program in seconds: give every cell a label, join neighbours with exactly the same height, count the patches. On our 12,221-cell grid the program reports 7,993 flat patches. Ask again in a fresh session and it may report 6,309. The data did not change. The agent quietly decided whether diagonal cells count as neighbours, and that one choice also moves the third largest flat from 21 cells to 58. The two biggest flats do not move at all, and one of them sits at minus one metre, which deserves a question of its own.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding and AI agents class for a learner in Mount Gambier.',

  picks: {
    eyebrow: 'Course picks for Mount Gambier',
    h2: 'Working with AI agents, at every level',
    intro: 'Four routes for Mount Gambier learners. The trial picks the right one, and we never ask for card details.',
    items: [
      { course: 'codex-and-claude-code-ai-coding-agents-course-for-teens', band: 'Ages 13 to 17', note: 'Directing coding agents on real tasks, and only with tools whose terms allow the learner\'s age.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Projects built with AI help, from web pages to Python scripts, with testing taught from week one.' },
      { course: 'competitive-programming-for-teens-course', band: 'Ages 14 to 18', note: 'Grid search, flood fill and union-find, the algorithms agents reach for without explaining.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults and professionals', note: 'Agents for real work, with review, testing and the habit of asking what was assumed.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Mount Gambier in the Census',
      h2: 'A South Australian city of 29,446',
      intro: 'The 2021 Census QuickStats for the Mount Gambier urban area, alongside South Australia and Australia.',
      body: [
        { kind: 'table', caption: 'Mount Gambier, Census 2021', head: ['Topic', 'Mount Gambier', 'South Australia', 'Australia'], rows: [
          ['Persons', '29,446', 'Not shown here', 'Not shown here'],
          ['Median age', '41', '41', '38'],
          ['Families', '7,834', 'Not shown here', 'Not shown here'],
          ['Private dwellings', '13,763', 'Not shown here', 'Not shown here'],
          ['Separate houses, share of occupied dwellings', '9,334, or 79.0%', '78.0%', '72.3%'],
          ['Machinery operators and drivers', '1,256, or 9.1%', '6.0%', '6.3%'],
          ['Bachelor degree or above, aged 15 and over', '2,863, or 11.9%', '22.7%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Trucks on the road', p: 'Road freight transport employed 408 residents, 3.0% of workers, well above the 1.2% across South Australia.' },
          { h3: 'Trades and professions level', p: 'Technicians and trades workers numbered 2,027 and professionals 2,035, each 14.7% of employed residents.' },
          { h3: 'Plenty of teenagers', p: 'There were 1,868 residents aged 15 to 19, 6.3% of the population against 5.6% statewide.' }
        ] },
        { kind: 'p', text: 'Because the ABS makes small random changes to census cells to protect privacy, rows and columns may not add up exactly. We reproduce each published figure unchanged and print no totals of our own making.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Why did the agent count 7,993 flat patches one day and 6,309 the next?',
      intro: 'NASA\'s SRTM elevation grid around Mount Gambier, 101 by 121 points, labelled in two passes.',
      body: [
        { kind: 'table', caption: 'Equal-height patches on the grid (our measurement, 8 October 2026)', head: ['Neighbour rule', 'Labels after pass one', 'Patches after pass two', 'Third largest patch'], rows: [
          ['Up, down, left, right (4)', '8,298', '7,993', '21 cells at 41 m'],
          ['Including diagonals (8)', '6,668', '6,309', '58 cells at 42 m']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. First pass', p: 'Scan the grid row by row. A cell with no already-labelled neighbour of equal height gets a new label; otherwise it borrows one, and any clash between labels is recorded as an equivalence.' },
          { h3: '2. Second pass', p: 'A union-find structure resolves every recorded equivalence, and a second scan replaces each provisional label with its final root. With four neighbours, 8,298 labels become 7,993 patches.' },
          { h3: '3. The hidden choice', p: 'Allowing diagonal neighbours joins patches that touch only at a corner. That single rule drops the count to 6,309 and almost triples the third largest flat.' }
        ] },
        { kind: 'callout', h3: 'What does not change, and what looks wrong', p: 'The two largest flats are identical under both rules: 193 cells, about 46.9 hectares, all at 24 m, and 74 cells, about 18 hectares, all at minus one metre. A whole patch below sea level inland is a reason for suspicion, and we treat that value as a processing artefact rather than a real surface height. Mount Gambier learners are asked to say what could produce a large, perfectly flat area on a radar elevation grid, and how they would check it against another source before trusting the agent\'s summary.' },
        { kind: 'p', text: 'We have not labelled any flat as a particular lake; the grid carries no names. The Department for Environment and Water lists a daily Blue Lake water level series on data.gov.au, which a learner could use for that check. Areas are our approximations on a 43.96 by 55.29 metre spacing.' }
      ]
    },
    {
      id: 'agents', tint: 'tint', eyebrow: 'Working with agents',
      h2: 'Questions to ask before trusting an agent\'s program',
      intro: 'Practised on the Mount Gambier grid, then carried into any project an agent helps with.',
      body: [
        { kind: 'table', caption: 'Assumptions an agent may make silently', head: ['Question', 'On the elevation grid', 'What it changes'], rows: [
          ['Which cells are neighbours?', 'Four or eight', 'Patch count, 7,993 or 6,309'],
          ['What counts as equal?', 'Exactly the same whole metre', 'A tolerance would merge gentle slopes'],
          ['Are odd values real?', 'Minus one metre inland', 'Whether the second largest flat means anything'],
          ['Does it scale?', 'Recursion against an explicit stack', 'Whether larger grids crash']
        ] },
        { kind: 'p', text: 'Vibe coding is the habit of describing what you want and letting an AI write it. Agents go further, planning steps and editing files on their own. Both are fast, and both hide decisions inside code a beginner may never read. Our classes teach learners to surface those decisions and test each one.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Ask an agent for the labeller, then rerun it with the other neighbour rule and explain the difference in writing.' },
          { h3: 'University students', p: 'Union-find, two-pass labelling and complexity, with agents as fast collaborators rather than authorities.' },
          { h3: 'Adults at work', p: 'Using agents on spreadsheets, images or sensor data while keeping a list of every assumption they made.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with NASA, the South Australian Department for Environment and Water or the ABS. The grid and census figures are theirs; the patch counts, sizes and comparisons are our own analysis.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Mount Gambier',
      h2: 'Central time and a half-hour offset',
      intro: 'Clock details that matter when booking from Mount Gambier.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Adelaide time', p: 'Mount Gambier keeps South Australian time, UTC plus 9:30 in winter, the same clock as Adelaide.' },
          { h3: 'Summer time', p: 'Clocks go forward to UTC plus 10:30 on the first Sunday in October and back on the first Sunday in April.' },
          { h3: 'Whole-hour gap', p: 'India runs exactly four hours behind Mount Gambier in winter and five in summer.' }
        ] },
        { kind: 'spec', title: 'An easy conversion', p: 'A 5pm lesson in Mount Gambier is 1pm for our teachers in winter and noon in summer. We confirm every time in Mount Gambier time, so families never do the sum.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first prompt to directing agents with confidence',
    intro: 'The age bands are rough. A free lesson sets the real starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Prompt and read', p: 'Getting small programs from an AI and reading them line by line before running.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'Agents and algorithms', p: 'Directing coding agents on grid problems and checking their choices.', courses: ['codex-and-claude-code-ai-coding-agents-course-for-teens', 'competitive-programming-for-teens-course'] },
      { band: 'University', h3: 'Agents in real projects', p: 'Full projects with agents, code review and automated tests.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Agents for work', p: 'Safe, checkable automation of everyday data and reporting tasks.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why learn to code when an agent can write the labeller?',
    intro: 'Because the agent will not mention the choice that changed its answer.',
    p1: 'Both versions of the Mount Gambier labeller are correct programs. Each one answers a slightly different question, and an agent that picks one will describe its result with equal confidence either way. It will also happily report a lake surface at minus one metre if nobody asks whether that makes sense.',
    p2: 'Our Mount Gambier learners use agents throughout, and they finish every task by listing the assumptions in the code and testing the ones that matter. Reading code well enough to find those assumptions is the skill that turns an agent from a risk into a tool.',
    closer: 'A Mount Gambier learner who has caught an agent\'s hidden neighbour rule is ready to work alongside AI in 2026, because they still understand the code it writes.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Across Mount Gambier, one live lesson',
    intro: 'Every learner in the city joins from home, so distance across town or across the region does not matter.',
    cells: [
      { h3: 'From any street', p: 'Learners anywhere in Mount Gambier sit in the same online class with no travel.' },
      { h3: 'South Australian levels', p: 'Lessons fit South Australian year levels, including SACE study in Years 11 and 12, in English.' },
      { h3: 'Opening lesson free', p: 'Build something with an AI and a teacher, then get a suggested level, course and slot; no card is requested.' },
      { h3: 'Five to ten learners', p: 'A group shares one level and draws from South Australia, the rest of Australia and abroad.' },
      { h3: 'Two lessons weekly', p: 'Roughly eight lessons a month, with school holidays planned around.' },
      { h3: 'Daylight saving handled', p: 'When South Australian clocks change, the lesson stays at its Mount Gambier time.' }
    ],
    spec: { title: 'Booked in Mount Gambier time', p: 'Every lesson is confirmed in South Australian time, so nobody at home has to convert.' }
  },

  fees: {
    h2: 'What vibe coding classes cost in Mount Gambier',
    intro: 'The complete list of prices.',
    first: 'A free first lesson that ends with a level, a course and a time.',
    group: 'A month in a group of five to ten learners, usually eight lessons.',
    private: 'About eight lessons a month alone with one teacher.',
    closer: 'Mount Gambier learners pay the same US dollar rate as everyone in Australia, with no regional loading. Payment starts once the trial has fixed a course and time; the pricing page explains breaks, missed lessons and changing formats.'
  },

  reviewsH2: 'Family reviews from Google, unedited',

  book: {
    h2: 'Tell us what the learner hopes to build with AI',
    intro: 'The first lesson is built around the answer: a small AI-assisted game for a Year 8 beginner, the elevation-grid labeller for a Year 11 student, or an agent-driven data task for an adult.',
    success: 'Thank you. We will be in touch soon about a vibe coding class in Mount Gambier.'
  },

  faq: {
    h2: 'Mount Gambier vibe coding and AI agents questions',
    intro: 'Common questions from Mount Gambier learners and parents.',
    items: [
      { q: 'How many people live in Mount Gambier?', a: 'The Mount Gambier urban area counted 29,446 residents in 2021, with a median age of 41.' },
      { q: 'What is connected-component labelling?', a: 'Connected-component labelling gives the same label to every cell in a connected group that shares a property, such as equal height. The two-pass method assigns provisional labels in one scan, records which labels touch, and merges them in a second scan.' },
      { q: 'What is an AI coding agent?', a: 'An AI coding agent is a tool that plans and writes code, runs it and edits files with limited supervision. It is fast, and it makes choices on the learner\'s behalf that need checking.' },
      { q: 'What is the Mount Gambier elevation project?', a: 'Learners ask an agent to label flat ground on a NASA elevation grid around Mount Gambier, then compare four-neighbour and eight-neighbour results, 7,993 against 6,309 patches, and investigate a large flat at minus one metre.' },
      { q: 'Can teenagers use coding agents?', a: 'Yes, under a teacher\'s guidance and only with tools whose terms permit their age. Tools that require users to be 18 or over are used only by adult learners.' },
      { q: 'When are Mount Gambier lessons held?', a: 'After school or at weekends, agreed in the trial and written in South Australian time, four hours ahead of India in winter and five in summer.' },
      { q: 'Are there classes for younger children?', a: 'Yes, from age 6, usually starting with Scratch. This page focuses on teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Mount Gambier?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Mount Gambier coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore South Australia',
    h2: 'More for Mount Gambier and South Australian learners',
    html: 'In the state capital there are <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">AI and programming classes in Adelaide</a> and <a class="cg-inline-link" href="/coding-classes-for-kids-adelaide">coding classes for Adelaide kids</a>. Senior students can see <a class="cg-inline-link" href="/sace-digital-technologies-help">SACE Digital Technologies help</a>, and the state overview is <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">coding and AI classes in South Australia</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Mount Gambier and South Australia',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/coding-classes-for-kids-adelaide', label: 'Adelaide kids' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-mgmb .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-mgmb .cg-hero h1 { font-weight: 750; letter-spacing: -0.021em; line-height: 1.05; }
.cg-root.cg-mgmb .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-mgmb .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-mgmb .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.015em; }
.cg-root.cg-mgmb .cg-grid-3 { gap: clamp(0.94rem, 2.05vw, 1.78rem); }
.cg-root.cg-mgmb .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-mgmb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mgmb .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-mgmb .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Mount Gambier Significant Urban Area, ABS Census 2021 QuickStats, area code 4002, with South Australia and Australia (read 8 October 2026): 29,446 people; median age 41 (SA 41; Australia 38); 7,834 families; 13,763 private dwellings; 2.3 people per household; separate house 9,334 (79.0 percent; SA 78.0; Australia 72.3); flat or apartment 934 (7.9 percent; SA 6.8); Professionals 2,035 (14.7 percent; SA 21.5); Technicians and Trades Workers 2,027 (14.7 percent; SA 13.2); Machinery Operators and Drivers 1,256 (9.1 percent; SA 6.0; Australia 6.3); Bachelor Degree level and above 2,863 (11.9 percent; SA 22.7; Australia 26.3); aged 15 to 19: 1,868 (6.3 percent; SA 5.6); aged 20 to 24: 1,600 (5.4 percent); industry: Road Freight Transport 408 (3.0 percent; SA 1.2; Australia 1.1). IANA tz database: Australia/Adelaide ACST UTC+9:30, ACDT UTC+10:30 first Sunday in October to first Sunday in April; Asia/Kolkata UTC+5:30. South Australian school term dates not published here (education.sa.gov.au returned 403).',
    localProject: 'Two-pass connected-component labelling of flat surfaces. NASA SRTMGL1 version 3 sampled via OpenTopoData srtm30m on 8 October 2026, points every 0.0005 degrees, latitude -37.865 to -37.815, longitude 140.740 to 140.800, 101 by 121 = 12,221 cells, spacing 43.96 m by 55.29 m, integer metres, range -1 to 174 m. Equal-value labelling with union-find: 4-connectivity 8,298 provisional labels to 7,993 components; 8-connectivity 6,668 to 6,309. Largest: 193 cells (46.9 ha) at 24 m, centroid -37.8471, 140.778; 74 cells (17.98 ha) at -1 m, centroid -37.84, 140.7668 (both identical under both rules). Third largest: 4-conn 21 cells (5.1 ha) at 41 m; 8-conn 58 cells (14.1 ha) at 42 m. Flats not identified as named lakes; -1 m treated as a processing value. DEW record "Mt Gambier, South Australia, Blue Lake Levels" on data.gov.au (CC BY 3.0 AU) cited only as an available check; its data file on data.sa.gov.au returned 403 and was not used.',
    requiredMentions: [
      '29,446',
      '7,834',
      '13,763',
      '9,334',
      '2,027',
      '2,863',
      '7,993 flat patches',
      '6,309',
      '12,221-cell'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Mount Gambier Significant Urban Area (4002): people, median age, families, dwellings, dwelling structure, occupation, education, age, industry.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/4002' },
      { claim: 'NASA LP DAAC, SRTMGL1 version 3 elevation product.', url: 'https://lpdaac.usgs.gov/products/srtmgl1v003/' },
      { claim: 'Department for Environment and Water, Mt Gambier, South Australia, Blue Lake Levels: catalogue record, Creative Commons Attribution 3.0 Australia.', url: 'https://data.gov.au/data/dataset/mt-gambier-south-australia-blue-lake-levels' },
      { claim: 'IANA time zone database, australasia file: Australia/Adelaide offsets and daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Naming any flat on the grid as a particular crater lake: the grid carries no labels, so no identification is made.',
      'Treating the minus one metre flat as a real surface height: it is presented as a likely processing value, our interpretation.',
      'South Australian school term dates and City of Mount Gambier pages: education.sa.gov.au, data.sa.gov.au and mountgambier.sa.gov.au returned 403 to this machine in October 2026; access was not circumvented and nothing from them is used.',
      'Suburb names: none could be verified from an accessible official source, so none are printed.',
      'OpenStreetMap data and Bureau of Meteorology observations: Overpass returned 406 and BOM 403; neither was circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with NASA, the Department for Environment and Water, the City of Mount Gambier or the ABS.'
    ]
  }
};
