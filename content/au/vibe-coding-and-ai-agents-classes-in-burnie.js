'use strict';
// Burnie (cg- city page, Australia cluster Phase 7, row 178). Shaped page: vibe coding and AI agents, leading
// with teenagers and adults; younger learners are covered by the kids pages and the national hub.
// Spine: does your agent notice when its data tool has quietly cut the answer short? Data: LIST Address Points,
// layer 9 of the LIST OpenDataWFS map service (services.thelist.tas.gov.au, Tasmanian Government, used under the
// LIST Web Services Terms and Conditions), queried 9 October 2026 with POSTCODE = 7320. A count-only query
// returns 9,267. A normal feature query returns 2,000 records with exceededTransferLimit set to true (the layer's
// maxRecordCount is 2,000). Paging with resultOffset 0, 2,000, 4,000, 6,000 and 8,000 returns 2,000, 2,000,
// 2,000, 2,000 and 1,267 records (9,267 unique OBJECTIDs); only the last page lacks the flag. Address points by
// LOCALITY, all pages: Park Grove 1,248; Shorewell Park 1,163; Upper Burnie 1,056; Romaine 810; Burnie 741; Acton
// 701; Montello 644; Hillcrest 529; Parklands 389; Havenview 355; Cooee 347; South Burnie 295; Brooklyn 293;
// Wivenhoe 184; Ocean Vista 165; Downlands 129; Emu Heights 90; Camdale 68; Round Hill 60 (19 localities). First
// page only (ordered by OBJECTID): Park Grove 280, Upper Burnie 240, Shorewell Park 198, Romaine 182, Burnie 163.
// Street with the most points: Mount Street 248. GEO_TYPE: Urban Centroid 8,597 of 9,267.
// Lesson family: reading a tool's truncation flag (silent result caps, exceededTransferLimit) in an agent's data
// tool; screened free site-wide on 9 October 2026 ("exceededTransferLimit", "silently truncat": 0 page hits;
// claimed by AU-R6). Distinct from the tool-call budget lesson on the Port Macquarie page.
// Place facts read raw on 9 October 2026: ABS Census 2021 QuickStats, Burnie - Somerset Significant Urban Area
// (6001): 27,826 people; median age 43 (Tasmania 42, Australia 38); 7,526 families; 13,095 private dwellings; 2.2
// people per household; separate house 10,349 (89.4%; Tasmania 87.7%; Australia 72.3%); flat or apartment 156
// (1.3%; Tasmania 5.3%); Professionals 1,896 (16.3%; Tasmania 20.0%); Technicians and Trades Workers 1,678
// (14.5%; Tasmania 13.9%); aged 10 to 14 1,790 (6.4%); aged 15 to 19 1,572 (5.7%). Tasmanian Department for
// Education, Children and Young People, 2027 term dates: Term 1 4 February to 9 April; Term 2 26 April to 2 July;
// Term 3 19 July to 24 September; Term 4 11 October to 16 December. IANA tz: Australia/Hobart daylight saving
// Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health, and
// any individual address (only counts by locality and street are printed).

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'BURNIE', label: 'Burnie', blurb: 'Vibe coding and AI agents for Burnie teens and adults, and a project about a data tool that quietly stops at 2,000 records.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-burnie',
  code: 'bur',
  accent: '#1C1E92',
  accentRationale: 'Burnie: a deep indigo (HSV saturation 0.81, value 0.57, hue 239), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, and 10.3:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Burnie',
    eyebrow: 'Burnie, Tasmania, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Tasmania' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-tasmania', name: 'Tasmania' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Burnie, Tasmania',
  title: 'Vibe Coding and AI Agents Classes in Burnie | Live Online',
  description: 'Live online vibe coding and AI agents classes for Burnie and Somerset teenagers and adults, with a real teacher, in small groups or one to one. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Burnie teens and adults, with a project on an agent that misses 7,267 addresses because it ignores one flag.',
  twitterDescription: 'Vibe coding and AI agents classes in Burnie, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Burnie Learners',
    description: 'Level-matched online classes in vibe coding, building AI agents that use data tools correctly, and Python, for teenagers and adults in Burnie and Somerset, Tasmania, taught live in English.'
  },

  h1: 'Vibe coding and AI agents classes in Burnie',
  capsuleQ: 'What are the best vibe coding and AI agents classes in Burnie?',
  capsule: 'Live classes where a Burnie teenager or adult builds AI agents in Python and learns to check what their tools hand back, with a teacher at their side. The 2021 Census counted 27,826 people in the Burnie and Somerset urban area, median age 43. We teach over video, one to one or in a small group at your level, and the first lesson is free.',
  lead: 'Ask an AI agent how many addresses Tasmania\'s land information system holds for postcode 7320, Burnie, and give it a tool that queries the state\'s address service. It calls once, counts the records it receives and answers 2,000 with complete confidence. The real figure is 9,267. The service did warn it: the reply carried a flag saying the limit had been reached. The agent simply never read the flag. Our Burnie project builds that agent, then fixes it twice, once by paging through the results and once by asking the service to count.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Burnie.',

  picks: {
    eyebrow: 'Course picks for Burnie',
    h2: 'Courses for agents that check their own data',
    intro: 'Each course leads into the truncation project below. The free first lesson points to the right fit, and no card is requested.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Describe a program to an AI, then read, test and repair what it writes, in Python and on the web.' },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 18', note: 'How AI tools work, where they slip up, and how to use them with care and judgement.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'University and adult', note: 'Complete applications built with AI help, plus the algorithms and checks that keep them correct.' },
      { course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', band: 'Professionals, one to one', note: 'Workplace agents in Copilot Studio, taught one to one, with attention to the data they rely on.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Burnie in the Census',
      h2: 'A city of houses with very few flats',
      intro: 'Numbers from the 2021 Census for the Burnie - Somerset Significant Urban Area, as published by the statistics bureau, beside Tasmania and Australia.',
      body: [
        { kind: 'table', caption: 'Burnie - Somerset urban area, 2021 Census QuickStats', head: ['Census total', 'Burnie - Somerset'], rows: [
          ['Residents', '27,826'],
          ['Families', '7,526'],
          ['Private dwellings', '13,095'],
          ['Average household size', '2.2 people']
        ] },
        { kind: 'table', mt: true, caption: 'Burnie - Somerset alongside Tasmania and Australia', head: ['Measure', 'Burnie - Somerset', 'Tasmania', 'Australia'], rows: [
          ['Median age', '43', '42', '38'],
          ['Separate houses, share of occupied homes', '89.4% (10,349)', '87.7%', '72.3%'],
          ['Flats or apartments, share of occupied homes', '1.3% (156)', '5.3%', '14.2%'],
          ['Technicians and trades workers, share of workers', '14.5% (1,678)', '13.9%', '12.9%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Close to the state', p: 'With a median age of 43, Burnie and Somerset sit one year above Tasmania as a whole and five above Australia.' },
          { h3: 'Very few flats', p: 'Only 156 occupied homes were flats or apartments, 1.3%, while 10,349 were separate houses.' },
          { h3: 'Teenagers', p: 'The Census found 1,790 residents aged 10 to 14 and 1,572 aged 15 to 19.' }
        ] },
        { kind: 'p', text: 'About the census figures: to keep people anonymous, the bureau makes tiny random changes to its counts, which can leave rows a little off their printed totals. We copy the bureau\'s totals and percentages directly and never produce a total by adding rows together.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Does your agent notice when its tool stops at 2,000?',
      intro: 'Tasmania\'s LIST service publishes every address point in the state. We gave an agent a tool that queries it for postcode 7320 and asked simple questions, first with a careless tool loop and then with two careful ones.',
      body: [
        { kind: 'table', caption: 'One question, three ways of asking (queried 9 October 2026; our code)', head: ['Approach', 'Calls', 'Records seen', 'Answer to "how many address points?"'], rows: [
          ['One query, flag ignored', '1', '2,000', '2,000 (wrong)'],
          ['Read the flag, then page with an offset', '5', '9,267', '9,267'],
          ['Ask the service to count only', '1', 'none', '9,267']
        ] },
        { kind: 'table', mt: true, caption: 'Which localities have the most address points? (our count)', head: ['Locality', 'All 9,267 points', 'First 2,000 only'], rows: [
          ['Park Grove', '1,248', '280'],
          ['Shorewell Park', '1,163', '198'],
          ['Upper Burnie', '1,056', '240'],
          ['Romaine', '810', '182'],
          ['Burnie', '741', '163']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. The careless tool', p: 'A Python function sends one query and returns the list of features. The agent counts them and reports. Every answer is built on a fifth of the data.' },
          { h3: '2. Read the flag', p: 'The reply contains exceededTransferLimit: true. A careful tool checks it and keeps asking with resultOffset until a page arrives without the flag. Five pages give all 9,267 records.' },
          { h3: '3. Ask the right question', p: 'For a count, the service can do the work itself: returnCountOnly gives 9,267 in a single call and moves no records at all.' }
        ] },
        { kind: 'callout', h3: 'Wrong totals, and wrong rankings too', p: 'Truncation does more than shrink totals. On the first 2,000 records Upper Burnie comes second with 240 points, ahead of Shorewell Park; across all the data Shorewell Park is second with 1,163 and Upper Burnie third. An agent that reports "the second-largest locality" from a capped tool gets the order wrong as well as the size, and nothing in its answer shows it.' },
        { kind: 'p', text: 'The agent and its tools are our own code; the counts come from querying the public LIST service on 9 October 2026 and will change as addresses are added. We print only totals by locality and street, never an individual address, and the project describes how the service returns data, not anything about the places themselves.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Agents that read the small print',
      h2: 'Checks every data tool an agent uses should make',
      intro: 'Almost every web service limits how much it returns at once. The Burnie experiment turns that fact into a short list of habits for anyone building agents.',
      body: [
        { kind: 'table', caption: 'Lessons from the LIST address tool', head: ['Check', 'What happened in Burnie', 'Habit to keep'], rows: [
          ['Does the reply say it was cut short?', 'exceededTransferLimit was true and ignored', 'Read every flag the service sends'],
          ['Is the count suspiciously round?', 'Exactly 2,000 records', 'Treat round numbers at a limit as a warning'],
          ['Can the service answer directly?', 'returnCountOnly gave 9,267 in one call', 'Ask for the summary, not the rows'],
          ['Does the agent say how much it saw?', 'The careless agent gave no hint', 'Report coverage with every answer']
        ] },
        { kind: 'p', text: 'Vibe coding a tool like this takes a few minutes, and assistants often write the one-call version because it is shortest. Nothing breaks and the answer arrives quickly. Learners who have watched an agent lose 7,267 addresses learn to open the raw reply and look for the words that signal a limit, a habit that protects every agent they build afterwards.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write the query function, call it once, find the flag in the reply, and add paging until the counts match.' },
          { h3: 'University students', p: 'Pagination schemes, rate limits and designing tool interfaces that make truncation impossible to miss.' },
          { h3: 'Adults', p: 'Building workplace agents on top of company systems without silently trusting partial results.' }
        ] },
        { kind: 'p', text: 'We are independent of the Tasmanian Government, Burnie City Council and the Australian Bureau of Statistics. The LIST service supplies the address data under its published web service terms and the bureau supplies the census figures; the agent, its tools and every count on this page are our own work.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Burnie',
      h2: 'Nineteen localities in one postcode',
      intro: 'Further facts from the same address data and the Tasmanian school calendar.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One postcode, many places', p: 'Postcode 7320 covers 19 localities in the LIST data, from Park Grove and Shorewell Park to Camdale and Round Hill.' },
          { h3: 'The busiest street', p: 'Mount Street has 248 address points, more than any other street in the postcode.' },
          { h3: 'Tasmania in 2027', p: 'Term 1 runs from 4 February to 9 April 2027, and Term 4 from 11 October to 16 December.' }
        ] },
        { kind: 'spec', title: 'A good extension task', p: 'Most address points in the data are urban centroids, 8,597 of the 9,267, with smaller numbers of rural, building and parent-property points. Counting by type, then by locality and type together, is a natural next step once the tool can be trusted to return everything.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From prompting an AI to building agents that check their tools',
    intro: 'The ages are suggestions; the free lesson sets each learner\'s actual level.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Reading generated code', p: 'Vibe coding small Python programs, then reading each line the AI wrote and testing what it returns.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'Agents with tools', p: 'Agents that call web services, read the whole reply and say how much data they actually saw.', courses: ['teens-ai-tools-mastery-course', 'ai-ml-masterclass-teens'] },
      { band: 'University', h3: 'Reliable systems', p: 'Pagination, error handling and tool design for applications built around language models.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'complete-generative-ai-masterclass-college'] },
      { band: 'Adults', h3: 'Agents at work', p: 'Coding agents and workplace agents that never pass off partial data as the whole answer.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why should a Burnie learner read the raw reply from a tool?',
    intro: 'Because an agent is only as complete as the data its tools hand back, and services rarely shout when they hold some back.',
    p1: 'Agents are increasingly built to fetch data from real services and reason over it. Those services nearly always cap how much they return in one go, and they signal it in a field the agent has to look for. Our Burnie agent missed 7,267 of 9,267 addresses because it never checked a single word in the reply.',
    p2: 'We teach learners to treat a tool\'s reply as evidence to examine, not a finished answer: look for limit flags, distrust totals that land exactly on a round number, ask the service for summaries when that is what you need, and make the agent state how much it saw.',
    closer: 'Agents will keep getting easier to build through 2026, and a Burnie learner who checks whether a tool told the whole story is the one whose agents can be relied on.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Park Grove to Somerset, one shared lesson',
    intro: 'The urban area takes in both Burnie and Somerset, and a lesson on video includes every part of it equally.',
    cells: [
      { h3: 'Burnie and Somerset', p: 'A student in Shorewell Park and an adult in Somerset can work on the same agent at the same time, with no travel at all.' },
      { h3: 'Tasmanian school years', p: 'Lessons follow Tasmanian year levels and the four-term calendar, and older students can connect agent projects to the subjects they study.' },
      { h3: 'A trial with real code', p: 'The first lesson is a genuine class. Afterwards you get a recommended level, course and lesson time, and no card details are taken.' },
      { h3: 'Same-level groups', p: 'Fifteen to twenty learners at one stage, from Burnie, Somerset and elsewhere, so every group runs at full strength.' },
      { h3: 'Two lessons a week', p: 'Two fixed slots each week, about eight lessons a month, with breaks arranged around holidays and exams.' },
      { h3: 'Teachers in India', p: 'A 5pm Burnie lesson in winter starts at 12:30pm in India; once Tasmania moves to daylight saving, it starts at 11:30am there.' }
    ],
    spec: { title: 'Tasmanian clocks and India', p: 'Tasmania begins daylight saving on Sunday 4 October 2026 and ends it on Sunday 4 April 2027. India does not change its clocks, so the difference grows from four and a half to five and a half hours in summer, and all lesson times are quoted in Burnie time.' }
  },

  fees: {
    h2: 'Burnie class fees',
    intro: 'Everything you pay, in three parts.',
    first: 'A free, complete first lesson, ending with a recommended level, course and time.',
    group: 'Roughly eight lessons a month in a group of fifteen to twenty at one level.',
    private: 'Roughly eight lessons a month with a teacher, one to one.',
    closer: 'Everyone outside India pays in US dollars, so a household in Cooee and one in Romaine see the same invoice and there is no Burnie price. Charging begins only after the trial has agreed a course and time, and the pricing page covers holidays, missed lessons and switching between group and one to one.'
  },

  reviewsH2: 'Reviews from families, on Google',

  book: {
    h2: 'What would the learner like to build first?',
    intro: 'Give us an age and an interest and we will plan around them. A Year 9 student might begin by calling a web service from Python and reading its reply; an adult might start with the full truncation project.',
    success: 'Thank you. Our team will contact you soon about a Burnie class.'
  },

  faq: {
    h2: 'Burnie vibe coding and AI agents questions',
    intro: 'The questions Burnie learners and parents tend to ask first.',
    items: [
      { q: 'How many people live in the Burnie urban area?', a: 'The 2021 Census QuickStats give 27,826 residents for the Burnie - Somerset Significant Urban Area, with a median age of 43, compared with 42 for Tasmania.' },
      { q: 'What does exceededTransferLimit mean?', a: 'It is a field that some map and data services add to a reply when they have hit their maximum number of records and stopped. It means more data exists than was returned, and a program should ask for the next page or request a count instead.' },
      { q: 'What is the Burnie address project?', a: 'Learners build an AI agent with a tool that queries Tasmania\'s LIST address service for postcode 7320. The careless version answers 2,000 because it ignores the limit flag; the careful versions page through the results or ask for a count and reach the true 9,267.' },
      { q: 'Does the project show anyone\'s address?', a: 'No. It works only with totals by locality and street. No individual address is printed, and nothing on this page describes any person or household.' },
      { q: 'Do you teach senior Tasmanian students?', a: 'Yes. Year 11 and 12 students taking computing or maths in Tasmania have lessons that match their year and term dates. Marked school work must be the student\'s own; we teach methods and never write assessed work.' },
      { q: 'What time are lessons?', a: 'Slots are chosen at the trial and written in Burnie time, often after school or on a weekend. India is four and a half hours behind Burnie in winter and five and a half hours behind during Tasmanian daylight saving.' },
      { q: 'Can younger children join?', a: 'Yes, from age six. Younger children learn with Scratch and visual programs first; the agent project on this page is meant for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Burnie?', a: 'No, and none is claimed. All lessons are live and online and we have no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection; the contact number shown is Indian.', boiler: true },
      { q: 'What do Burnie vibe coding and AI agents classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are settled before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, grouped by level, pace and goals rather than by age or postcode. When no group suits the time a learner needs, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Burnie and Tasmanian learners',
    html: 'Tasmanian senior students can read <a class="cg-inline-link" href="/tasc-computer-science-help">TASC Computer Science help</a>, and families in the north will find <a class="cg-inline-link" href="/best-coding-classes-in-launceston">coding classes in Launceston</a>. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-tasmania">Tasmania page</a> covers the whole state, and the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia hub</a> lists every other place and topic.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Burnie and Australia',
  footerPlaces: [
    { href: '/best-coding-classes-in-launceston', label: 'Launceston' },
    { href: '/best-coding-classes-in-hobart', label: 'Hobart' },
    { href: '/coding-and-ai-classes-in-tasmania', label: 'Tasmania' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-bur .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-bur .cg-hero h1 { font-weight: 770; letter-spacing: -0.019em; line-height: 1.07; }
.cg-root.cg-bur .cg-capsule { border-left: 3px solid var(--cg-accent); border-right: 3px solid var(--cg-accent); padding: 0.5rem 1rem; }
.cg-root.cg-bur .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-bur .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.011em; }
.cg-root.cg-bur .cg-grid-3 { gap: clamp(0.95rem, 2.4vw, 1.95rem); }
.cg-root.cg-bur .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-bur .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bur .cg-ladder-col { border-top: 2px dashed var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-bur .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Burnie, ABS Census 2021 QuickStats, Burnie - Somerset Significant Urban Area 6001 (read 9 October 2026): 27,826 people; median age 43 (Tasmania 42, Australia 38); 7,526 families; 13,095 private dwellings; average 2.2 people per household; dwelling structure, occupied private dwellings: separate house 10,349 (89.4 percent; Tasmania 87.7; Australia 72.3), semi-detached, row or terrace house, townhouse 979 (8.5 percent), flat or apartment 156 (1.3 percent; Tasmania 5.3; Australia 14.2); occupation: Professionals 1,896 (16.3 percent; Tasmania 20.0), Technicians and Trades Workers 1,678 (14.5 percent; Tasmania 13.9); aged 10 to 14 1,790 (6.4 percent); aged 15 to 19 1,572 (5.7 percent). Tasmanian Department for Education, Children and Young People, 2027 school term dates (read raw): Term 1 4 February to 9 April; Term 2 26 April to 2 July; Term 3 19 July to 24 September; Term 4 11 October to 16 December. IANA tz database: Australia/Hobart, daylight saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.',
    localProject: 'Reading a tool\'s truncation flag. LIST Address Points, OpenDataWFS MapServer layer 9 (services.thelist.tas.gov.au/arcgis/rest/services/Public/OpenDataWFS/MapServer/9; maxRecordCount 2000; LIST Web Services Terms and Conditions), queried 9 October 2026 with where POSTCODE=7320. returnCountOnly=true: count 9,267. Default feature query: 2,000 features, exceededTransferLimit true. Paging orderByFields=OBJECTID, resultOffset 0/2000/4000/6000/8000, resultRecordCount 2000: 2,000/2,000/2,000/2,000/1,267 features, flag true on the first four pages and absent on the last; 9,267 unique OBJECTIDs. LOCALITY counts, all records: Park Grove 1,248; Shorewell Park 1,163; Upper Burnie 1,056; Romaine 810; Burnie 741; Acton 701; Montello 644; Hillcrest 529; Parklands 389; Havenview 355; Cooee 347; South Burnie 295; Brooklyn 293; Wivenhoe 184; Ocean Vista 165; Downlands 129; Emu Heights 90; Camdale 68; Round Hill 60. First page only: Park Grove 280, Upper Burnie 240, Shorewell Park 198, Romaine 182, Burnie 163. Most points by street: Mount Street 248. GEO_TYPE: Urban Centroid 8,597; Parent Property Centroid 401; Rural Centroid 136; Building Centroid 132; Property Access Point 1. Addresses missed by the one-call agent: 7,267.',
    requiredMentions: [
      '27,826',
      '7,526',
      '13,095',
      '10,349',
      '9,267',
      'exceededTransferLimit',
      'Shorewell Park',
      'Mount Street has 248',
      'returnCountOnly'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Burnie - Somerset Significant Urban Area (6001): people, median age, families, private dwellings, dwelling structure, occupation, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/6001' },
      { claim: 'Tasmanian Government, LIST Address Points, OpenDataWFS map service layer 9 (record limit 2,000 per request).', url: 'https://services.thelist.tas.gov.au/arcgis/rest/services/Public/OpenDataWFS/MapServer/9' },
      { claim: 'LIST Web Services Terms and Conditions.', url: 'http://listdata.thelist.tas.gov.au/public/LISTWebServicesTermsConditions.pdf' },
      { claim: 'Tasmanian Department for Education, Children and Young People, school term dates.', url: 'https://www.decyp.tas.gov.au/learning/term-dates/' },
      { claim: 'IANA time zone database, australasia file: Australia/Hobart.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any individual address, owner or household: not printed; the project uses counts only.',
      'That postcode 7320 matches the Burnie - Somerset urban area: it does not exactly, and the page treats the two separately.',
      'Burnie port, paper mill or industrial history: not verified at a primary source, so not stated.',
      'Tasmanian transport data: the state\'s transport open-data pages returned 403 and were not used.',
      'Bureau of Meteorology station facts: the Bureau\'s pages returned 403 and were not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the Tasmanian Government, Burnie City Council or the ABS.'
    ]
  }
};
