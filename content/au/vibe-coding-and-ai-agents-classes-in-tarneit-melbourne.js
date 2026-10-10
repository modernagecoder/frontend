'use strict';
// Tarneit, Melbourne (cg- district page, Australia cluster Phase 8, row 248). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), suburb page (ABS SAL22451, City of Wyndham) under Melbourne and Victoria.
// Spine: an AI agent is asked how many people use Tarneit station. Tarneit is in the regional station file, not the
// metropolitan one, so a tool that turns "no rows" into 0 gives a confident wrong answer.
// Data: Department of Transport and Planning annual metropolitan and regional train station entries (CC BY 4.0),
// FY18-19 and FY24-25, rounded to 50; GTFS Schedule regional train feed (calendar 8 October to 31 December 2026).
// Our scripted test: 10 stations x 2 years = 20 lookups; tool A (metro only, empty -> 0) 10 right / 10 wrong; tool B
// (metro only, empty -> not found) 10 right / 10 not found; tool C (both files, normalised names) 20 right.
// West Tarneit station: in the timetable feed (100 trips on Wed 14 Oct 2026) but in neither FY24-25 entries file.
// Script: scratchpad au/b6/trnt.py.
// Lesson family: agent tool coverage, an empty result is not a zero; 0 location-page hits, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'TARNEIT',
    label: 'Tarneit, Melbourne',
    blurb: 'Vibe coding and AI agent classes for Tarneit, with a project on why an agent\'s tool must never turn "no data" into zero.'
  },
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  slug: 'vibe-coding-and-ai-agents-classes-in-tarneit-melbourne',
  code: 'trnt',
  accent: '#2A2690',
  accentRationale: 'Tarneit: a strong ultramarine (hue 242), chosen by hand at least 10 RGB units from all 1,278 accent declarations in content, the shared stylesheets and the claims log, 11.8:1 on white and 11.1:1 on the paper colour #FBF8F2',
  pageType: 'city',
  place: {
    name: 'Tarneit',
    eyebrow: 'Tarneit, City of Wyndham, Melbourne, Victoria',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Melbourne' },
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' },
    { slug: 'vibe-coding-and-ai-agents-classes-in-melbourne', name: 'Melbourne' }
  ],
  nav: [
    { label: 'Melbourne', href: '/vibe-coding-and-ai-agents-classes-in-melbourne' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Tarneit, Melbourne',
  title: 'Vibe Coding and AI Agents Classes in Tarneit, Melbourne',
  description: 'Live online vibe coding and AI agent classes for Tarneit teenagers and adults, plus Scratch and Python for children, taught by a teacher in groups or one to one.',
  ogDescription: 'Tarneit AI agent classes with a real test: Tarneit station is in the regional entries file, so an agent tool that reads only the metro file reports 0 instead of 1,717,700.',
  twitterDescription: 'Tarneit vibe coding and AI agent classes, live online, first class free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Tarneit',
    description: 'Level-matched online lessons in vibe coding, AI agents and Python for teenagers and adults in Tarneit, with Scratch for children, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in Tarneit',
  capsuleQ: 'How can a Tarneit learner study vibe coding and AI agents?',
  capsule: 'Online, live, with a teacher who checks every tool the agent uses. Learners build with AI help in Python, then test what the AI produced against real data. In Tarneit that means station figures: Tarneit had 1,717,700 entries in FY24-25, but only in the regional file, which a careless agent never opens.',
  lead: 'An AI agent is only as honest as its tools. Give one a tool that reads the metropolitan station file, ask it about Tarneit, and the tool finds no rows. If the tool reports that as 0, the agent will tell you, politely and confidently, that nobody used a station with well over a million entries.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Tarneit.',
  picks: {
    eyebrow: 'Course picks for Tarneit',
    h2: 'Courses for building and checking AI agents',
    intro: 'Each course gets learners building with AI and testing the result, the skill behind the station project. The free first lesson shows which suits.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Build Python and web projects with AI help, then test every piece.'
      },
      {
        course: 'python-ai-automation-masterclass-college',
        band: 'University and adult',
        note: 'Agents and automations with tools, inputs and honest error handling.'
      },
      {
        course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course',
        band: 'University and adult',
        note: 'Full projects built with AI, reviewed line by line.'
      },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults only',
        note: 'Coding agents for working professionals, with tests as the safety net.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Tarneit in the Census',
      h2: 'A young suburb, with a median age of 30',
      intro: 'Figures for the Tarneit suburb (ABS code SAL22451) from the 2021 Census QuickStats. Neighbouring Truganina and Hoppers Crossing have their own figures.',
      body: [
        {
          kind: 'table',
          caption: 'Tarneit, 2021 Census headline counts',
          head: ['Headline', 'Tarneit'],
          rows: [
            ['Residents', '56,370'],
            ['Median age', '30'],
            ['Families', '14,117'],
            ['Private dwellings', '17,274'],
            ['Average people per household', '3.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Tarneit beside Victoria',
          head: ['Measure', 'Tarneit', 'Victoria'],
          rows: [
            ['Median age', '30', '38'],
            ['Homes that are separate houses', '89.5% (13,914)', '73.4%'],
            ['Homes that are flats or apartments', '0.3% (41)', '12.1%'],
            ['Adults with a bachelor degree or higher', '37.7% (15,085)', '29.2%'],
            ['Workers who took the train to work', '3.0% (766)', '1.6%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Under fives', p: '6,068 residents, 10.8% of Tarneit, were aged 0 to 4 at the 2021 Census.' },
            { h3: 'Primary age', p: '5,872 were aged 5 to 9, or 10.4%.' },
            { h3: 'A lockdown count', p: 'Census day was in a Melbourne lockdown, so travel figures are low: 21.5% (5,550) of workers stayed home.' }
          ]
        },
        {
          kind: 'p',
          text: 'Because QuickStats rounds percentages and adjusts small numbers, parts of a table need not match its total; we quote every figure as printed and never add them up.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'When "no rows" becomes "zero passengers"',
      intro: 'Victoria publishes station entries in two files, metropolitan and regional. Tarneit, Wyndham Vale, Deer Park, Ardeer and Little River are in the regional one. We wrote three versions of a station-lookup tool for an AI agent and tested each on 10 stations in two years: 20 lookups.',
      body: [
        {
          kind: 'table',
          caption: 'Three tools, 20 lookups (our scripted test)',
          head: ['Tool', 'What it does with no rows', 'Right', 'Wrong', 'Says not found'],
          rows: [
            ['A', 'Metro file only; returns 0', '10', '10', '0'],
            ['B', 'Metro file only; says not found', '10', '0', '10'],
            ['C', 'Both files, names cleaned; says not found', '20', '0', '0']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'What tool A reported as 0 (published entries, rounded to 50)',
          head: ['Station', 'FY18-19', 'FY24-25'],
          rows: [
            ['Tarneit', '1,350,500', '1,717,700'],
            ['Wyndham Vale', '786,100', '1,128,400'],
            ['Deer Park', '453,950', '636,300'],
            ['Ardeer', '53,500', '88,250'],
            ['Little River', '22,450', '18,550']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Names change too',
              p: 'In the FY18-19 regional file the station is "Tarneit Railway Station (Tarneit)"; in FY24-25 it is just "Tarneit". Tool C cleans the name; without that, its five FY18-19 regional lookups fail.'
            },
            { h3: 'Not found is honest', p: 'Tool B is incomplete but never wrong. An agent that hears "not found" can say so or try another source.' },
            { h3: 'Zero is a claim', p: 'Tool A turns a gap in its coverage into a fact about the world, and the agent repeats it.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'West Tarneit',
          p: 'West Tarneit station is in the regional timetable feed, with 100 trips calling there on Wednesday 14 October 2026, yet it has no row in either FY24-25 entries file. Even tool C must answer "not found" for it, and that is the right answer.'
        },
        {
          kind: 'p',
          text: 'Tarneit\'s FY24-25 entries were 127.2% of its FY18-19 figure, by our calculation from the two rounded values. The files publish counts only, so we offer no reason for the change.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'How the agent tool works',
      h2: 'Three rules for a tool an agent can trust',
      intro: 'An agent tool is a small function the AI is allowed to call. The AI cannot see inside it, so the tool\'s answers must be honest about what it does not know.',
      body: [
        {
          kind: 'table',
          caption: 'Tool design rules from the Tarneit test',
          head: ['Rule', 'Why'],
          rows: [
            ['Say which files were searched', 'The agent can tell the user where the answer came from.'],
            ['Never return 0 for missing rows', 'Zero is a measurement; "not found" is a gap.'],
            ['Clean names the same way every year', 'Publishers rename columns and values between files.']
          ]
        },
        { kind: 'p', text: 'The test itself matters as much as the tool: a list of questions with known answers, run every time the tool changes.' },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Play a guessing game where "I don\'t know" scores better than a wrong answer.' },
            { h3: 'Secondary students', p: 'Write tools A, B and C in Python and run the 20-lookup test.' },
            { h3: 'Adults', p: 'Audit an agent\'s tools at work for silent zeros and missing sources.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Tarneit',
      h2: 'Schools, stations and the calendar',
      intro: 'From the Victorian school locations file, the timetable feeds and the state calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Fifteen schools',
              p: 'The 2025 school locations file places 15 schools inside Tarneit, among them Barayip Primary School, Wimba Primary School and Brinbeal Secondary College.'
            },
            {
              h3: 'Two stations',
              p: 'Tarneit and West Tarneit stations both sit inside the suburb boundary, and the metropolitan bus feed lists 177 stop entries within it.'
            },
            { h3: 'Term 1, 2027', p: 'Victorian government school students start on Thursday 28 January 2027; the first term ends on Thursday 25 March.' }
          ]
        },
        { kind: 'spec', title: 'Suburb boundary', p: 'Census, school and stop figures use the ABS boundary of the Tarneit suburb, 38.19 square kilometres.' }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From honest guessing games to agent tools',
    intro: 'Age bands are a starting point only; the free lesson places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch with AI ideas',
        p: 'Games, stories and first ideas about how AI decides.',
        courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'scratch-programming-complete-course']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI',
        p: 'First code, then small programs that use AI.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Vibe coding',
        p: 'Building with AI help and testing every result.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Agents and automation',
        p: 'Tools, tests and agents that report their gaps.',
        courses: ['python-ai-automation-masterclass-college', 'vibe-coding-for-college-fullstack-ai-dsa-career-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Agents write fluent answers. Who checks the tools behind them?',
    intro: 'The person who built the tools, or someone who has learned to read them. That is the point of learning to code alongside AI.',
    p1: 'An agent never sees the station files. It sees what its tool returns. If the tool says 0, the agent has no way to know that 0 means "I only looked in one file", and it will build a confident sentence on top of it.',
    p2: 'A learner who has watched tool A get 10 of 20 lookups wrong writes tools that name their sources and admit gaps, and keeps a small test of known answers to run after every change.',
    closer: 'A Tarneit learner who can read the tool knows what the agent is really saying.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Tarneit lessons, wherever the laptop is',
    intro: 'Every lesson is live online, so a Tarneit learner logs in from home with no trip to make.',
    cells: [
      { h3: 'Live on screen', p: 'Teacher and learner share screens and work on the same code.' },
      { h3: 'Victorian terms', p: 'Lessons follow Victorian school terms and pause for the holidays.' },
      { h3: 'Trial first', p: 'One full free lesson, then advice on course and a regular time.' },
      { h3: 'Matched groups', p: 'Groups of five to ten at one level, with learners from many places.' },
      { h3: 'Twice weekly', p: 'Two fixed lessons a week, about eight a month.' },
      { h3: 'India-based teachers', p: 'A 5pm lesson in Tarneit is 11:30am India time during Melbourne daylight saving and 12:30pm after it ends.' }
    ],
    spec: {
      title: 'Melbourne time only',
      p: 'Daylight saving in Melbourne starts on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India keeps one time all year, so all our lesson times are in Melbourne time.'
    }
  },
  fees: {
    h2: 'Tarneit class fees',
    intro: 'Three prices cover everything.',
    first: 'A free first lesson that ends with a clear recommendation.',
    group: 'One month of group classes, around eight, with five to ten learners matched on level.',
    private: 'One month of private classes, around eight, with a dedicated teacher.',
    closer: 'Tarneit families, like all families outside India, pay in US dollars at one rate. Nothing is paid until the trial settles course and time; holidays and missed lessons are explained on the pricing page.'
  },
  reviewsH2: 'Families\' Google reviews of our teaching',
  book: {
    h2: 'Book a free Tarneit class',
    intro: 'Send the learner\'s age and interests. A nine-year-old might start with a Scratch game; a teenager might start by building tool C.',
    success: 'Thank you. We will be in touch soon about a Tarneit class.'
  },
  faq: {
    h2: 'Tarneit vibe coding and AI agents questions',
    intro: 'Questions Tarneit families and adult learners often ask.',
    items: [
      {
        q: 'How many people live in Tarneit?',
        a: 'The 2021 Census QuickStats for the Tarneit suburb record 56,370 residents, a median age of 30 and 14,117 families.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Vibe coding means building software by describing what you want to an AI and shaping its output. We teach it with testing, so learners can tell when the AI is wrong.'
      },
      {
        q: 'What is a tool in an AI agent?',
        a: 'A tool is a function the AI may call to fetch data or take an action. The agent only knows what the tool returns, so a tool that hides gaps misleads the agent.'
      },
      {
        q: 'How many entries did Tarneit station have in FY24-25?',
        a: 'The regional station entries file gives 1,717,700 for FY24-25, rounded to the nearest 50. It is not in the metropolitan file.'
      },
      {
        q: 'Is vibe coding suitable for children?',
        a: 'Younger children start with Scratch and simple AI activities; full vibe coding with Python usually starts at about 13.'
      },
      {
        q: 'Do Tarneit group classes use Copilot Studio?',
        a: 'No. Copilot Studio is taught only in one-to-one lessons; group classes build agents in Python.'
      },
      {
        q: 'Is there a Tarneit campus?',
        a: 'No. Classes are online and live only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do classes cost for Tarneit learners?',
        a: 'The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one classes cost USD 150 a month. Course, format and time are fixed before payment.',
        boiler: true
      },
      {
        q: 'How big is a group?',
        a: 'Five to ten learners, grouped by level, pace and aims rather than age or suburb, with one-to-one lessons when no group time works.',
        boiler: true
      },
      { q: 'Can adults learn to build agents?', a: 'Yes. Adults join adult groups or private lessons, often building agents for tasks from their own work.' }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Tarneit learners',
    html: 'Nearby in Wyndham, see <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-werribee-melbourne">Werribee</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-point-cook-melbourne">Point Cook</a>. The <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> cover the rest of the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Tarneit and Wyndham',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-werribee-melbourne', label: 'Werribee' },
    { href: '/ai-and-programming-classes-in-point-cook-melbourne', label: 'Point Cook' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-trnt .cg-hero-grid { align-items: end; gap: clamp(1.2rem, 3.3vw, 2.6rem); }
.cg-root.cg-trnt .cg-hero h1 { font-weight: 720; letter-spacing: -0.024em; line-height: 1.04; }
.cg-root.cg-trnt .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.4rem 0 0.4rem 1rem; }
.cg-root.cg-trnt .cg-eyebrow { letter-spacing: 0.07em; font-weight: 700; font-size: 0.83rem; }
.cg-root.cg-trnt .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.011em; }
.cg-root.cg-trnt .cg-grid-3 { gap: clamp(0.95rem, 2.5vw, 1.8rem); }
.cg-root.cg-trnt .cg-table caption { font-weight: 700; text-align: left; font-size: 0.95rem; }
.cg-root.cg-trnt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-trnt .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-trnt .cg-callout { border-left-width: 7px; }
`,
  dossier: {
    curriculumAuthority: 'Tarneit, ABS Census 2021 QuickStats, Tarneit suburb SAL22451 (read 10 October 2026): 56,370 people; median age 30; 14,117 families; 17,274 private dwellings; 3.4 people per household; separate houses 89.5% (13,914); flats 0.3% (41); bachelor degree or higher 37.7% (15,085); train to work 3.0% (766); drove 53.6% (13,833); worked at home 21.5% (5,550, lockdown Census day); aged 0-4 6,068 (10.8%); 5-9 5,872 (10.4%). Victoria: median age 38, houses 73.4%, flats 12.1%, bachelor 29.2%, train 1.6%. ABS SAL area 38.1905 square kilometres. Victorian School Locations 2025: 15 schools inside the boundary, including Barayip Primary School, Wimba Primary School and Brinbeal Secondary College. Tarneit and West Tarneit stations (GTFS regional train feed) inside the boundary; 177 metro bus stop entries inside. Victorian 2027 Term 1: 28 January to 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'Agent tool coverage: an empty result is not a zero. Annual metropolitan and regional train station entries, FY18-19 and FY24-25 (rounded to 50). 10 stations (Tarneit, Wyndham Vale, Werribee, Hoppers Crossing, Williams Landing, Deer Park, Ardeer, Laverton, Footscray, Little River) x 2 years. Tool A (metro only, empty -> 0): 10 right, 10 wrong. Tool B (metro only, empty -> not found): 10 right, 10 not found. Tool C (both files, names normalised): 20 right. FY18-19 regional names carry " Railway Station (Place)"; without normalising, tool C fails 5 FY18-19 lookups. Tarneit 1,350,500 -> 1,717,700 (127.2%); Wyndham Vale 786,100 -> 1,128,400; Deer Park 453,950 -> 636,300; Ardeer 53,500 -> 88,250; Little River 22,450 -> 18,550. West Tarneit (stop 49937) in GTFS regional train feed, 100 trips Wed 14 Oct 2026, 93 Sat 17 Oct, 89 Sun 18 Oct; absent from both FY24-25 entries files. Script: scratchpad au/b6/trnt.py.',
    requiredMentions: ['56,370', '14,117', '17,274', '13,914', '15,085', '1,717,700', '1,350,500', 'Barayip Primary School', 'Brinbeal Secondary College'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Tarneit suburb (SAL22451).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL22451' },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Department of Transport and Planning, Annual regional train station patronage (station entries), FY18-19 and FY24-25 (Creative Commons Attribution 4.0).',
        url: 'https://discover.data.vic.gov.au/dataset/annual-regional-train-station-patronage-station-entries'
      },
      {
        claim: 'Department of Transport and Planning, GTFS Schedule (Creative Commons Attribution 4.0), metropolitan train and bus feeds.',
        url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL22451 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Victorian Government, school term dates and holidays, 2027 Victorian school term dates.',
        url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria'
      },
      {
        claim: 'IANA time zone database, australasia file: Australia/Melbourne daylight saving rules.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Why West Tarneit has no FY24-25 entries row, or when it opened: not claimed; only presence in the feed and absence from the files are stated.',
      'Reasons for Tarneit\'s growth in entries: not claimed.',
      'Line names, frequencies or journey times for Tarneit trains: not claimed.',
      'Catholic, independent and religious school names: not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Claude-based courses for teenagers: not suggested; the Claude Code course is listed for adults only.',
      'Any affiliation with the City of Wyndham, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
