'use strict';
// Cairns (cg- regional city page, Australia cluster Phase 7, row 142). Shaped page (vibe coding and AI agents): leads
// with teenagers and adults. Spine: an agent plans a bus trip with a tool; what must the tool get right so the agent
// does not give a confident wrong answer? Data: Translink CNS_GTFS.zip (feed_info: Department of Transport and Main Roads
// - Translink Division, valid 20261007 to 20261206; agency Kinetic (Cairns); Creative Commons Attribution 4.0 on the
// Queensland Government open data portal), downloaded 7 October 2026: 22 routes, 463 stops, 1,493 trips. Measured by us
// on 7 October 2026 (scratchpad au/r1/cns_csa.py, cns_q.py): for Wednesday 14 October 2026 (calendar.txt and
// calendar_dates.txt resolved) 638 trips run, giving 17,125 elementary connections (consecutive stop pairs) sorted by
// departure; ignoring the calendar the file yields 40,802. Connection scan algorithm (earliest arrival), platforms of a
// stop merged into one node and transfers assumed instant (our simplifications): Palm Cove (Cedar Rd at Coral Coast
// Drive) at 08:00 to Edmonton Centre (Ravizza Dr at Hancock St): route 110 08:06 to Cairns City bus station 09:01, route
// 133 09:30 to Cairns Central Shopping Centre (Spence St) 09:33, route 140 09:35 to Edmonton Centre 10:12; 2,649
// connections scanned. The same query on all 40,802 connections claims arrival at 09:40 via route 150E departing Cairns
// City bus station at 09:08, a trip that does not run on that Wednesday; 4,302 connections scanned. Palm Cove at 08:00 to
// Cairns City bus station: route 110 08:06 to 09:01; 1,253 connections scanned. Lesson family: the connection scan
// algorithm for earliest arrival, and the service-calendar filter a planning tool must apply; screened free site-wide on
// 7 October 2026 ("connection scan": 0 hits; claimed by AU-R1).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Cairns Significant Urban Area (3004), compared with
// Queensland and Australia: 153,425 people; median age 39; 38,870 families; 66,690 private dwellings; 2.5 people per
// household; separate house 39,513 (71.0%; Queensland 74.8%); flat or apartment 9,440 (17.0%; Queensland 12.5%; Australia
// 14.2%); Professionals 15,309 (20.9%; Queensland 21.4%; Australia 24.0%); Technicians and Trades Workers 10,791 (14.7%;
// Queensland 13.7%); Bachelor Degree level and above 24,519 (19.7%; Queensland 21.9%; Australia 26.3%); aged 15 to 19
// 9,428 (6.1%); aged 20 to 24 8,537 (5.6%). Queensland Department of Education 2026 Term 4 Tuesday 6 October to Friday 11
// December. IANA tz: Australia/Brisbane UTC+10 without daylight saving since 1992. Excluded by the cluster rules: income,
// rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'CAIRNS', label: 'Cairns', blurb: 'Cairns, a bus network from Palm Cove to Edmonton, and an AI agent project on planning trips without inventing buses.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-cairns',
  code: 'cnsa',
  accent: '#1C560E',
  accentRationale: 'Cairns: a rainforest green (HSV saturation 0.84, value 0.34, hue 108), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 8.8:1 on white and 7.1:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Cairns',
    eyebrow: 'Cairns, Queensland, Australia',
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
  routeLabel: 'Cairns, Queensland',
  title: 'Vibe Coding and AI Agents Classes in Cairns',
  description: 'Live online vibe coding and AI agent classes for Cairns teens and adults: build agents with real tools, test their answers and keep them honest. First lesson free.',
  ogDescription: 'AI agent classes in Cairns, with a project where a trip-planning agent invents a bus unless its tool checks the timetable calendar.',
  twitterDescription: 'Vibe coding and AI agents classes in Cairns, live online, first lesson free.',
  ogImageCourse: 'codex-and-claude-code-ai-coding-agents-course-for-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agent Classes for Cairns Learners',
    description: 'Level-matched online vibe coding, AI agents, tool building and Python for teenagers and adults across Cairns, taught live in English.'
  },

  h1: 'Vibe coding and AI agents classes in Cairns',
  capsuleQ: 'What is the best way for a Cairns learner to build AI agents that can be trusted?',
  capsule: 'Give the agent well-built tools, test the tools against real data, and check every answer it produces, because an agent is only as reliable as the tools it calls. The Cairns urban area counted 153,425 people at the 2021 Census. We teach vibe coding and agents live online, privately or in small groups at the same level, and the first lesson is free.',
  lead: 'Ask a trip-planning agent how to get from Palm Cove to Edmonton by bus, leaving at 8am on a Wednesday. Behind the scenes it calls a tool that searches the open Cairns timetable. Built carefully, the tool answers: route 110 into the city, then two short connections, arriving at 10:12. Built carelessly, it answers 9:40, by putting the traveller on a route 150E bus that does not run that day. The timetable file contains every trip for every day of its two months, and only a filter on the service calendar separates Wednesday\'s buses from the rest. Our Cairns learners build the search, catch the invented bus, and learn why an agent\'s confidence says nothing about its tools.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Cairns.',

  picks: {
    eyebrow: 'Agent and vibe coding picks for Cairns',
    h2: 'Four ways into building with AI in Cairns',
    intro: 'Pick by what you want to make; the free lesson settles the level. No card details are ever requested.',
    items: [
      { course: 'codex-and-claude-code-ai-coding-agents-course-for-teens', band: 'Ages 13 to 18', note: 'Coding agents used carefully: giving them tools, reading their changes and testing what they produce.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 18', note: 'Describe a project to an AI, then understand, test and fix every part of what it builds.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'University students', note: 'Full-stack apps and algorithms built with AI help, with the testing that keeps them correct.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults at work', note: 'Agentic workflows for real jobs, with tools that are checked before anyone relies on them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Cairns in the Census',
      h2: 'A tropical urban area of 153,425 people',
      intro: 'Census 2021 QuickStats for the Cairns Significant Urban Area, set beside the Queensland and Australian shares the bureau publishes.',
      body: [
        { kind: 'table', caption: 'Cairns urban area, selected 2021 Census figures', head: ['Figure', 'Cairns', 'Queensland', 'Australia'], rows: [
          ['Residents', '153,425', 'Not shown', 'Not shown'],
          ['Median age', '39', 'Not shown', 'Not shown'],
          ['Families', '38,870', 'Not shown', 'Not shown'],
          ['Private dwellings', '66,690', 'Not shown', 'Not shown'],
          ['Flats or apartments among occupied dwellings', '9,440, or 17.0%', '12.5%', '14.2%'],
          ['Professionals among employed residents', '15,309, or 20.9%', '21.4%', '24.0%'],
          ['Bachelor degree or higher, people aged 15 and over', '24,519, or 19.7%', '21.9%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'More apartments than the state', p: 'Flats and apartments are 17.0% of occupied dwellings in Cairns, compared with 12.5% across Queensland; separate houses are 71.0%.' },
          { h3: 'Teens and young adults', p: 'The Census counted 9,428 residents aged 15 to 19 and 8,537 aged 20 to 24.' },
          { h3: 'Technical work', p: 'Technicians and trades workers number 10,791, or 14.7% of employed residents, against 13.7% for Queensland.' }
        ] },
        { kind: 'p', text: 'A note on method: the ABS slightly alters small census cells for privacy, so a table\'s parts can differ from its total. We print the published totals and shares and never sum rows to create new figures.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can a trip-planning agent invent a bus?',
      intro: 'The open Cairns bus timetable from Translink, a connection scan search as the agent\'s tool, and one setting that decides whether its answers are real.',
      body: [
        { kind: 'table', caption: 'The timetable file (our count, 7 October 2026)', head: ['What we counted', 'Result'], rows: [
          ['Routes, stops and trips in the file', '22 routes, 463 stops, 1,493 trips'],
          ['Trips that run on Wednesday 14 October 2026', '638'],
          ['Stop-to-stop connections on that day', '17,125'],
          ['Connections if the service calendar is ignored', '40,802']
        ] },
        { kind: 'table', caption: 'Palm Cove to Edmonton Centre, leaving 8am Wednesday (our calculation)', head: ['Tool behaviour', 'Plan returned', 'Arrival', 'Connections scanned'], rows: [
          ['Filters trips by the service calendar', 'Route 110 at 08:06 to the city, route 133 at 09:30, route 140 at 09:35', '10:12', '2,649'],
          ['Ignores the service calendar', 'Route 110 at 08:06 to the city, then route 150E at 09:08', '09:40, impossible', '4,302']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Sort every connection', p: 'Each pair of consecutive stops on each trip becomes one connection with a departure and an arrival. Sorted by departure time, the whole day becomes a single list.' },
          { h3: '2. Scan once, in order', p: 'The connection scan walks that list from 8am onward and records the earliest time each stop can be reached. It stops as soon as departures are later than the earliest arrival already found at the destination.' },
          { h3: '3. Filter by the day', p: 'A timetable file covers many weeks. Only trips whose service runs on the chosen date belong in the list; leave that filter out and the search happily uses a bus from another day.' }
        ] },
        { kind: 'callout', h3: 'Why this matters for agents', p: 'An agent that receives the 09:40 plan has no way to know it is false. It will present it fluently, perhaps with a friendly note about the short connection. The mistake lives entirely in the tool. Testing tools against known answers, here a trip that can be checked against the published route 110, 133 and 140 timetables, is the step that makes agents safe to rely on.' },
        { kind: 'p', text: 'All plans and counts here are our own, computed from the file valid 7 October to 6 December 2026. To keep the project manageable we treat the platforms at Cairns City bus station as one stop and assume changes between buses take no time, so a real traveller should allow longer. Timetables change; check Translink before travelling.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Building agents that can be trusted',
      h2: 'Five checks for any tool an agent will call',
      intro: 'Worked out on a bus planner, then applied to tools that search documents, query databases or call other services.',
      body: [
        { kind: 'table', caption: 'Testing an agent\'s tools', head: ['Check', 'In the Cairns project', 'What it prevents'], rows: [
          ['Known-answer tests', 'Palm Cove to the city must give route 110, 08:06 to 09:01', 'Tools that drift silently'],
          ['Scope filters', 'Only trips that run on the chosen date', 'Answers built from the wrong day'],
          ['Stated assumptions', 'Instant transfers and merged platforms written down', 'Plans that look precise but are not'],
          ['Cost limits', 'Stop scanning once departures pass the earliest known arrival', 'Tools that are correct but too slow to use'],
          ['Traceable output', 'Every leg names its route and times', 'Answers no one can check']
        ] },
        { kind: 'p', text: 'Vibe coding makes it easy to produce a working-looking tool in minutes. The difference between a demo and something people can rely on is this table. Our learners write the known-answer tests first, then let an AI help build the tool, and keep the tests running every time either of them changes the code.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Build the connection scan in Python on the Cairns file, then wrap it as a tool a simple agent can call.' },
          { h3: 'University students', p: 'Routing algorithms, tool design and evaluation for agents that call real services.' },
          { h3: 'Adults at work', p: 'Decide which tools an assistant may use, and how each one is tested before it touches real decisions.' }
        ] },
        { kind: 'p', text: 'Translink, Kinetic, the Department of Transport and Main Roads, the ABS and the Queensland Department of Education have no involvement with our teaching. The census figures are published by the ABS; the trip plans, connection counts and scan counts are results of our own code on the open timetable.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Cairns',
      h2: 'From the northern beaches to the southern suburbs',
      intro: 'Local details with a programming angle.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Twenty-two routes', p: 'The Cairns file lists 22 routes run by Kinetic for Translink, from Palm Cove in the north to Edmonton and beyond in the south.' },
          { h3: 'Final school term', p: 'Queensland state schools teach Term 4 of 2026 from Tuesday 6 October to Friday 11 December, says the education department.' },
          { h3: 'Clocks that never jump', p: 'Queensland has kept UTC+10 without daylight saving since 1992, according to the IANA time zone database.' }
        ] },
        { kind: 'spec', title: 'Calendars inside the timetable', p: 'The Cairns file holds 1,493 trips but only 638 run on our Wednesday. Weekday, weekend and holiday services all sit in the same file, separated only by the calendar tables, which is exactly the detail a hurried tool forgets.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first prompt to agents with tested tools',
    intro: 'Ages are guidance; the free lesson decides the real starting rung.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Vibe coding basics', p: 'Asking an AI to build small programs, then reading and fixing what it wrote.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'Tools for agents', p: 'Writing search tools such as the connection scan, testing them, and connecting them to a simple agent.', courses: ['codex-and-claude-code-ai-coding-agents-course-for-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Agents in depth', p: 'Planning, tool design, evaluation and failure analysis for agents on real data.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Agents at work', p: 'Designing, testing and governing the tools an assistant may use in your organisation.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an agent can plan the trip, why should a Cairns teenager learn how the search works?',
    intro: 'Because the agent cannot see inside its tools, and someone has to know when a tool is wrong.',
    p1: 'An agent that calls a planning tool and receives "arrive 09:40 via route 150E" will repeat that answer with complete assurance. It has no access to the timetable\'s service calendar and no reason to doubt the tool. In our project that single missing filter turns a correct 10:12 arrival into an impossible 09:40 one, and nothing in the agent\'s reply would warn the traveller.',
    p2: 'Learners who have built the connection scan themselves know where such errors hide: in day filters, transfer rules and assumptions about platforms. They test tools against known answers before letting an agent use them, and they read an agent\'s confident reply as a claim to be checked rather than a fact.',
    closer: 'Agents will keep handling more of our planning, and a Cairns learner who can test the tools behind them will be the person people trust in 2026.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Palm Cove to Edmonton without the bus',
    intro: 'Cairns stretches along the coast between beaches and ranges, and an online lesson reaches every suburb at once.',
    cells: [
      { h3: 'North or south', p: 'A learner in the northern beaches and one in Edmonton join the same class at the same time, each from home.' },
      { h3: 'Queensland school levels', p: 'Teachers use the Queensland year levels, Year 7 to Year 12, and every lesson is taught in English.' },
      { h3: 'A trial that builds something', p: 'The free first session is an actual agent or vibe coding task with a teacher, ending with a suggested level, course and time. Nothing is charged.' },
      { h3: 'Fifteen to twenty per group', p: 'Learners at the same stage from Far North Queensland, the rest of Australia and abroad, so each level has a sensible slot.' },
      { h3: 'Regular lessons', p: 'Normally two a week, about eight a month, with holidays and exam weeks planned with the teacher.' },
      { h3: 'Four and a half hours, all year', p: 'Cairns and India both keep one clock time year round, so our teachers are always 4 hours 30 minutes behind.' }
    ],
    spec: { title: 'Lesson times never move', p: 'With no daylight saving in Queensland or India, a Cairns lesson set for 5pm stays at 5pm all year and begins at 12:30pm for our teachers.' }
  },

  fees: {
    h2: 'What vibe coding and agent classes cost in Cairns',
    intro: 'Just three figures.',
    first: 'A complimentary first lesson ending with a level, a course and a weekly time.',
    group: 'One month of lessons, generally eight, with fifteen to twenty learners at your level.',
    private: 'About eight lessons a month with a teacher to yourself.',
    closer: 'Cairns families pay in US dollars at the one rate charged everywhere outside India, with no Far North loading. Billing begins only after the trial confirms a course and time; the pricing page covers breaks, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Google reviews, exactly as our families wrote them',

  book: {
    h2: 'Tell us what you want an agent to do',
    intro: 'We choose a first task that suits: a small app built with AI help for a Year 8, a first tool and agent for a Year 11, or the full timetable planner and its tests for an adult.',
    success: 'Thank you. We will be in touch soon about a vibe coding or AI agents class in Cairns.'
  },

  faq: {
    h2: 'Cairns vibe coding and AI agents questions',
    intro: 'What Cairns learners and parents ask us first.',
    items: [
      { q: 'How many people live in the Cairns urban area?', a: 'The 2021 Census counted 153,425 residents, with a median age of 39.' },
      { q: 'What is the connection scan algorithm?', a: 'The connection scan algorithm finds the earliest arrival on a public transport timetable by sorting every stop-to-stop connection by departure time and scanning the list once, recording the earliest time each stop can be reached. It is simple, fast and easy to test.' },
      { q: 'What is an AI agent?', a: 'An AI agent is a language model that can take steps towards a goal by calling tools, such as a search or a calculator, and using their results. Its answers are only as good as those tools and the checks around them.' },
      { q: 'What is the Cairns timetable project?', a: 'Learners build a trip planner on Translink\'s open Cairns timetable and connect it to an agent. Planning Palm Cove to Edmonton at 8am on a Wednesday gives a correct arrival of 10:12, but if the tool ignores the service calendar it claims 09:40 using a bus that does not run that day.' },
      { q: 'Are AI agent classes suitable for teenagers?', a: 'Yes. Teenagers build agents for projects like the trip planner using tools and accounts suited to their age, and each AI provider\'s own age rules are followed.' },
      { q: 'When are lessons for Cairns learners?', a: 'After school, in the evening or at weekends, agreed in the trial and stated in Cairns time, 4 hours 30 minutes ahead of India time all year.' },
      { q: 'Do you teach younger children in Cairns?', a: 'Yes, from age 6, usually starting with Scratch and simple AI experiments; this page is aimed at teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Cairns?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Cairns coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Cairns and Queensland learners',
    html: 'Anyone building with AI should read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, don\'t copy-paste</a>, and teenagers can compare <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens in Australia</a>. Down the coast there is <a class="cg-inline-link" href="/ai-and-programming-classes-in-townsville">a Townsville page on AI and programming</a>, and the state guide is <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">coding and AI classes in Queensland</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Cairns and Queensland',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-townsville', label: 'Townsville' },
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-cnsa .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.7vw, 2.3rem); }
.cg-root.cg-cnsa .cg-hero h1 { font-weight: 725; letter-spacing: -0.019em; line-height: 1.08; }
.cg-root.cg-cnsa .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-cnsa .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-cnsa .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.011em; }
.cg-root.cg-cnsa .cg-grid-3 { gap: clamp(0.9rem, 2.2vw, 1.75rem); }
.cg-root.cg-cnsa .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-cnsa .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cnsa .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-cnsa .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Cairns Significant Urban Area, ABS Census 2021 QuickStats, area code 3004, compared with Queensland and Australia (read 7 October 2026): 153,425 people; median age 39; 38,870 families; 66,690 private dwellings; average 2.5 people per household; dwelling structure: separate house 39,513 (71.0 percent; Queensland 74.8), flat or apartment 9,440 (17.0 percent; Queensland 12.5; Australia 14.2); occupation: Professionals 15,309 (20.9 percent; Queensland 21.4; Australia 24.0), Technicians and Trades Workers 10,791 (14.7 percent; Queensland 13.7); Bachelor Degree level and above 24,519 (19.7 percent; Queensland 21.9; Australia 26.3); aged 15 to 19: 9,428 (6.1 percent); aged 20 to 24: 8,537 (5.6 percent). Queensland Department of Education term dates: 2026 Term 4 Tuesday 6 October to Friday 11 December. IANA tz database: Australia/Brisbane UTC+10 without daylight saving since March 1992; Asia/Kolkata UTC+5:30.',
    localProject: 'Connection scan algorithm (earliest arrival) and the service-calendar filter. Translink CNS_GTFS.zip (publisher Department of Transport and Main Roads - Translink Division, 20261007 to 20261206; agency Kinetic (Cairns)): routes.txt 22 routes, stops.txt 463 stops, 1,493 trips with stop_times. Service day Wednesday 14 October 2026 resolved from calendar.txt and calendar_dates.txt: 638 trips; elementary connections (consecutive stop_times by stop_sequence) 17,125, sorted by departure; ignoring the calendar 40,802. CSA with stop names stripped of ", platform N" (platforms merged) and zero transfer time (our simplifications). Query 1: from "Cedar Rd at Coral Coast Drive (Palm Cove)" at 08:00 to "Ravizza Dr at Hancock St (Edmonton Centre)": legs 110 08:06 to Cairns City bus station 09:01; 133 09:30 to Cairns Central Shopping Centre (Spence St) 09:33; 140 09:35 to Edmonton Centre 10:12; connections scanned 2,649. Same query on all 40,802 connections: 110 08:06 to 09:01 then 150E 09:08 to Edmonton Centre 09:40 (trip not in the Wednesday service set); scanned 4,302. Query 2: Palm Cove 08:00 to Cairns City bus station: 110 08:06 to 09:01; scanned 1,253 (2,602 without the filter). Lesson family: connection scan earliest-arrival routing; tool testing for agents.',
    requiredMentions: [
      '153,425',
      '38,870',
      '66,690',
      '24,519',
      '15,309',
      '10,791',
      '17,125',
      '40,802',
      'Palm Cove to Edmonton without the bus',
      '09:40, impossible'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Cairns Significant Urban Area (3004): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3004' },
      { claim: 'Translink General Transit Feed Specification, Cairns feed (CNS_GTFS.zip), Creative Commons Attribution 4.0, Queensland Government open data portal.', url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink' },
      { claim: 'Queensland Department of Education, term dates 2026.', url: 'https://education.qld.gov.au/about-us/calendar/term-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Brisbane.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That the plans are travel advice: transfers are assumed instant and platforms merged, and the page tells travellers to check Translink.',
      'Real-time bus positions or delays: not in the static timetable and not used.',
      'OpenStreetMap walking paths between stops: the Overpass API returned 406 to this machine on 7 October 2026; no mirror was tried.',
      'Bureau of Meteorology observations and QCAA syllabus details: the observations feed returned 403 and qcaa.qld.edu.au a Cloudflare 403; neither was circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Translink, Kinetic, the Department of Transport and Main Roads, the ABS or the Queensland Department of Education.'
    ]
  }
};
