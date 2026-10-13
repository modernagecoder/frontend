'use strict';
// Glen Eira, Melbourne (cg- district page, Australia cluster Phase 8, row 268). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), council-area page (ABS LGA22310, City of Glen Eira) under Melbourne and Victoria.
// Spine: an AI agent is told to "merge duplicate bus stops" in Glen Eira; what does a dry run reveal before any
// row is changed, and why must a person confirm the plan?
// Data: Department of Transport and Planning GTFS Schedule, metropolitan bus feed (CC BY 4.0), stops inside the ABS
// LGA boundary. Our measurements (scratchpad au/b9/glne.py, stopidx.py): 516 stops, 387 names, 129 names used twice;
// the merge would delete 129 stops (25.0%); pair separation median 19.3 m (6.0 to 142.8 m); 114 pairs serve
// opposite directions of a shared route, 12 share a route and direction, 3 share no route.
// Lesson family: agent dry run then human confirmation before a bulk write; 0 location-page hits, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'GLEN EIRA',
    label: 'Glen Eira, Melbourne',
    blurb: 'Vibe coding and AI agent classes for Glen Eira, with a project on why an agent should show a dry run before it changes 129 bus stop records.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-glen-eira-melbourne',
  code: 'glne',
  accent: '#382A5F',
  accentRationale: 'Glen Eira: a dusky indigo (hue 254.8), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 12.4:1 on white',
  pageType: 'city',
  place: {
    name: 'Glen Eira',
    eyebrow: 'City of Glen Eira, Melbourne, Victoria',
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
  routeLabel: 'Glen Eira, Melbourne',
  title: 'Vibe Coding and AI Agents Classes in Glen Eira, Melbourne',
  description: 'Live online vibe coding and AI agent classes for Glen Eira teenagers and adults, plus Scratch and Python for children, in small groups or one to one with a teacher.',
  ogDescription: 'Glen Eira AI agent classes, with a project: a dry run showed an agent\'s duplicate-stop merge would have deleted 129 of 516 real bus stops.',
  twitterDescription: 'Vibe coding and AI agents for Glen Eira learners, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agent Classes for Glen Eira',
    description: 'Level-matched online lessons in vibe coding, AI agents and Python for teenagers and adults in the City of Glen Eira, with coding for children from six.'
  },
  h1: 'Vibe coding and AI agent classes in Glen Eira',
  capsuleQ: 'How can Glen Eira learners use AI agents safely?',
  capsule: 'By learning to make an agent show what it intends to change before it changes anything, then checking that plan against real data. Live online classes teach this through Python and agent projects for teenagers and adults. The City of Glen Eira counted 148,908 residents in the 2021 Census, with a median age of 38.',
  lead: 'Victoria\'s bus timetable data lists 516 stops inside the Glen Eira boundary, and 129 stop names appear twice. Hand an AI agent the instruction "merge the duplicate stops" and it may cheerfully delete a quarter of the list. Asking it for a dry run first, a full description of every change it would make, turned that into a decision a person could check.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Glen Eira.',
  picks: {
    eyebrow: 'Course picks for Glen Eira',
    h2: 'Courses for building agents you can supervise',
    intro: 'The stop project mixes Python, data checking and agent design. These courses cover each part, and the free trial lesson finds the starting point.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Describing programs to an AI, then reading and testing every line it writes.'
      },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Coding agents at work, with review steps before anything is merged.'
      },
      {
        course: 'complete-generative-ai-masterclass-college',
        band: 'University and adult',
        note: 'Language models, tool calling and agent loops built from the ground up.'
      },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'The Python that agents depend on, from files and dictionaries to clear error messages.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Glen Eira in the Census',
      h2: 'A younger council of apartments and graduates',
      intro: 'Headline figures for the City of Glen Eira (ABS code LGA22310) from the 2021 Census QuickStats, beside the Victorian figures.',
      body: [
        {
          kind: 'table',
          caption: 'City of Glen Eira, 2021 Census headline counts',
          head: ['Headline', 'Glen Eira'],
          rows: [
            ['Residents', '148,908'],
            ['Median age', '38'],
            ['Families', '39,585'],
            ['Private dwellings', '66,162'],
            ['People per household', '2.5']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Glen Eira measured against Victoria',
          head: ['Measure', 'Glen Eira', 'Victoria'],
          rows: [
            ['Adults with a bachelor degree or higher', '46.4% (56,949)', '29.2%'],
            ['Workers employed as professionals', '36.1% (28,781)', '25.0%'],
            ['Homes that are flats or apartments', '28.3% (16,397)', '12.1%'],
            ['Homes that are separate houses', '47.5% (27,526)', '73.4%'],
            ['Workers who took the train to work', '3.2% (2,571)', '1.6%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary and lower secondary ages', p: 'The Census recorded 8,943 residents aged 5 to 9 and 9,365 aged 10 to 14.' },
            { h3: 'Census day at home', p: 'August 2021 fell in a lockdown, and 39.7% of employed residents, 31,611 people, worked from home that day.' },
            { h3: 'A compact council', p: 'The ABS boundary encloses about 38.7 square kilometres between Caulfield, Bentleigh and Murrumbeena.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau perturbs small cells to keep people anonymous, so each count is shown as published and rows are never summed into totals of our own.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'What would the agent have deleted?',
      intro: 'We took the metropolitan bus stops from the state\'s GTFS timetable feed and kept the 516 that fall inside the Glen Eira council boundary. Then we asked what an agent following the instruction "merge stops that share a name" would actually do, without letting it write anything.',
      body: [
        {
          kind: 'table',
          caption: 'The dry run, before any change (our analysis)',
          head: ['Finding', 'Count'],
          rows: [
            ['Stops inside the boundary', '516'],
            ['Distinct stop names', '387'],
            ['Names used by exactly two stops', '129'],
            ['Stops the merge would delete', '129, a quarter of the list']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Checking each pair against the timetable',
          head: ['What the two stops serve', 'Pairs', 'Should they merge?'],
          rows: [
            ['The same route, in opposite directions', '114', 'No: one stop each side of the road'],
            ['A shared route in the same direction', '12', 'A person needs to look'],
            ['No route in common', '3', 'No: different services stop at each']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Name is not identity',
              p: 'Stop names describe a corner, such as Kambrook Rd/Glen Eira Rd, and buses heading each way stop on their own side of it.'
            },
            { h3: 'Distance as a clue', p: 'The paired stops sit a median 19.3 metres apart, from 6.0 metres up to 142.8 metres for McLaurin Rd/Murrumbeena Rd.' },
            {
              h3: 'The plan as a document',
              p: 'A dry run lists every record that would change, so a reviewer can sample it, count it and say no before the damage is done.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Why confirmation matters',
          p: 'Merging the 114 opposite-direction pairs would have left each of those corners with a stop on only one side, quietly breaking timetables for passengers travelling the other way. Nothing in the instruction was malicious; it was simply too broad. The dry run made the problem visible, and the confirmation step gave a person the chance to narrow the task.'
        },
        {
          kind: 'p',
          text: 'The stops, names, coordinates and routes come from the published feed; the boundary test, pairings, distances and the classification of each pair are our own work. We make no claim about which, if any, of the 12 same-direction pairs are true duplicates.'
        }
      ]
    },
    {
      id: 'agents',
      tint: 'tint',
      eyebrow: 'Building the safeguard',
      h2: 'An agent that proposes before it acts',
      intro: 'The safeguard is a few lines of design, not a new tool. These are the parts learners build and test.',
      body: [
        {
          kind: 'table',
          caption: 'Pieces of a dry-run workflow',
          head: ['Step', 'What the agent does', 'What the learner checks'],
          rows: [
            ['Plan', 'Lists every record it would change and why', 'Is the count plausible for the task?'],
            ['Sample', 'Shows a handful of the planned changes in full', 'Do the examples match the intent?'],
            ['Confirm', 'Waits for an explicit yes, with the count repeated', 'Has a person seen the number before saying yes?'],
            ['Apply and log', 'Makes the change and records what it touched', 'Could the change be reversed from the log?']
          ]
        },
        {
          kind: 'p',
          text: 'Vibe coding speeds this up: a learner describes the workflow, the AI drafts it, and the learner reads every line before running it on a copy of the data. The skill being taught is judgement, not typing.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Write a plan on paper before tidying a toy shelf, then check it with an adult before moving anything.' },
            { h3: 'Teenagers', p: 'Build an agent in Python that must print its plan and wait for "yes" before writing to a file.' },
            { h3: 'Adults', p: 'Add a dry-run flag to scripts and agents used at work, and make confirmation repeat the number of affected records.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Glen Eira',
      h2: 'Nine stations along two lines',
      intro: 'From the station entry file, the state school list and the Victorian calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Stations inside the boundary',
              p: 'By our point-in-boundary check: Murrumbeena, Carnegie, Patterson, Bentleigh, McKinnon, Ormond, Glenhuntly, Caulfield and Elsternwick. Caulfield recorded 3,205,100 entries in FY24-25, rounded by the publisher.'
            },
            {
              h3: 'Schools in the state list',
              p: 'The 2025 file gives 34 schools a Glen Eira address, including Bentleigh Secondary College, McKinnon Secondary College and Glen Eira College.'
            },
            { h3: 'Term 1, 2027', p: 'Students at Victorian government schools start Term 1 of 2027 on Thursday 28 January; it finishes on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'One council, many suburbs',
          p: 'Every Census figure here covers the whole City of Glen Eira, which includes Caulfield, Elsternwick, Bentleigh, Carnegie and Murrumbeena; those suburbs each have separate figures.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From careful plans to supervised agents',
    intro: 'Ages are a guide; the free trial lesson sets the real starting step.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch with plans',
        p: 'Games built from a written plan, checked step by step before they run.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI literacy',
        p: 'First Python alongside what AI tools can and cannot do.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Vibe coding with review',
        p: 'AI-drafted programs, read and tested line by line before they touch data.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'University and adult',
        h3: 'Agents for work',
        p: 'Tool-using agents with dry runs, confirmations and logs.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an agent can do the job, why should a Glen Eira teenager learn to code?',
    intro: 'Because someone has to read the agent\'s plan, and a plan full of code only makes sense to a person who can code.',
    p1: 'The duplicate-stop instruction sounded reasonable. Only a reader who understood how stop records, routes and directions fit together could see that 114 of the 129 planned merges were wrong. That understanding comes from having written programs that read and change data, not from prompting alone.',
    p2: 'Teenagers who build an agent that must ask before it acts learn two lasting habits: treat any bulk change as a proposal until it is checked, and make the count of affected records visible. Both apply whether the change comes from a script, a colleague or an AI.',
    closer: 'A Glen Eira learner who can read an agent\'s plan is the one who can safely let it work.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons from home in Glen Eira',
    intro: 'Classes happen on screen, so a learner near Carnegie joins exactly as one near Elsternwick does.',
    cells: [
      { h3: 'A shared screen', p: 'Teacher and learner open the same project and write code together from the start.' },
      { h3: 'Victorian school terms', p: 'Lesson plans track the state terms and pause over the school holidays.' },
      { h3: 'A proper first lesson', p: 'The free trial covers real material and ends with a suggested course and time.' },
      { h3: 'Small level-matched groups', p: 'Fifteen to twenty learners at one level, sometimes from several states.' },
      { h3: 'Twice weekly', p: 'Two fixed lessons a week, roughly eight a month, with breaks agreed ahead.' },
      { h3: 'Teachers in India', p: 'A 6pm Glen Eira lesson in daylight saving starts at 12:30pm India time; after April it starts at 1:30pm there.' }
    ],
    spec: {
      title: 'Two time zones, one timetable',
      p: 'Melbourne moves to daylight saving on Sunday 4 October 2026 and back on Sunday 4 April 2027, while India keeps one time all year. Lesson times are always quoted in Melbourne time.'
    }
  },
  fees: {
    h2: 'Glen Eira class fees',
    intro: 'Three prices, all stated up front.',
    first: 'The opening lesson is free and closes with an honest recommendation.',
    group: 'A month of group lessons, normally eight, with fifteen to twenty learners at the same level.',
    private: 'Close to eight one-to-one lessons a month with the same teacher.',
    closer: 'Families outside India are billed in US dollars at a single rate. Nothing is charged until after the trial, once the course and time are fixed; the pricing page explains holidays, missed lessons and switching formats.'
  },
  reviewsH2: 'Google reviews from families and adult learners',
  book: {
    h2: 'Book a first Glen Eira lesson',
    intro: 'Tell us the learner\'s age and one interest. A teenager might start by building an agent that must ask permission before it edits a file; a younger child might start with a Scratch game.',
    success: 'Thank you. Our team will contact you shortly about a Glen Eira lesson.'
  },
  faq: {
    h2: 'Glen Eira vibe coding and AI agent questions',
    intro: 'The questions Glen Eira families and adult learners ask first.',
    items: [
      {
        q: 'How many people live in the City of Glen Eira?',
        a: 'The 2021 Census QuickStats for the City of Glen Eira record 148,908 residents, a median age of 38 and 39,585 families.'
      },
      {
        q: 'What is a dry run for an AI agent?',
        a: 'A dry run is a mode where the agent describes every change it would make, such as which records it would delete or edit, without making any of them. A person reviews the plan and confirms or narrows it first.'
      },
      {
        q: 'What did the Glen Eira bus stop project find?',
        a: 'Of 516 bus stops inside the council boundary, 129 names are shared by two stops. Merging them would have deleted 129 stops, but 114 of those pairs are stops on opposite sides of the road serving each direction of the same route.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Vibe coding means describing what a program should do in plain language, letting an AI draft the code, and then reading, testing and fixing it. We teach it alongside real coding so learners can judge what the AI produced.'
      },
      {
        q: 'Can younger children learn about AI agents?',
        a: 'Children from six start with Scratch and simple AI literacy. Building agents usually begins in the teenage years once Python is comfortable.'
      },
      {
        q: 'Are Copilot Studio agents taught in group classes?',
        a: 'No. We keep Copilot Studio to private lessons, and Glen Eira groups build every agent in Python.'
      },
      {
        q: 'Do you have a centre in Glen Eira?',
        a: 'No. Every lesson is live online, we have no premises in Australia, and the phone number shown is an Indian number.',
        boiler: true
      },
      {
        q: 'What do classes cost for Glen Eira learners?',
        a: 'The first lesson is free. Group lessons then cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Course, format and time are agreed before any payment.',
        boiler: true
      },
      {
        q: 'How many learners are in a group?',
        a: 'Five to ten, matched by level, pace and goal. If no group fits the learner\'s time, one-to-one lessons are offered instead.',
        boiler: true
      },
      {
        q: 'Do adults take these classes?',
        a: 'Yes. Adults have separate groups or private sessions, and many want an agent they can trust with tasks at work.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Glen Eira learners',
    html: 'Next door, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-bayside-melbourne">Bayside</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-stonnington-melbourne">Stonnington</a> have their own pages. The <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> cover the rest.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Glen Eira and Melbourne',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-bayside-melbourne', label: 'Bayside' },
    { href: '/online-coding-and-python-classes-in-stonnington-melbourne', label: 'Stonnington' },
    { href: '/best-coding-and-ai-classes-in-glen-waverley-melbourne', label: 'Glen Waverley' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-glne .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.3rem); }
.cg-root.cg-glne .cg-hero h1 { font-weight: 700; letter-spacing: -0.016em; line-height: 1.1; }
.cg-root.cg-glne .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.4rem 0 0.4rem 1.2rem; }
.cg-root.cg-glne .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.84rem; text-transform: uppercase; }
.cg-root.cg-glne .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.008em; }
.cg-root.cg-glne .cg-grid-3 { gap: clamp(0.9rem, 2vw, 1.8rem); }
.cg-root.cg-glne .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-glne .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-glne .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-glne .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'City of Glen Eira, ABS Census 2021 QuickStats, Glen Eira LGA22310 (read 11 October 2026): 148,908 people; median age 38; 39,585 families; 66,162 private dwellings; 2.5 people per household; bachelor degree or higher 46.4% (56,949; Victoria 29.2%); professionals 36.1% (28,781; Victoria 25.0%); flats 28.3% (16,397; Victoria 12.1%); separate houses 47.5% (27,526); train to work 3.2% (2,571; Victoria 1.6%); worked at home 39.7% (31,611, lockdown Census day); aged 5-9 8,943; aged 10-14 9,365. ABS area 38.6908 sq km. Victorian School Locations 2025: 34 schools with LGA_Name Glen Eira (C), including Bentleigh Secondary College, McKinnon Secondary College and Glen Eira College. Stations inside the LGA boundary by our point-in-polygon check: Murrumbeena, Carnegie, Patterson, Bentleigh, McKinnon, Ormond, Glenhuntly, Caulfield, Elsternwick; Caulfield FY24-25 entries 3,205,100. Victorian 2027 Term 1 starts Thursday 28 January, ends Thursday 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Agent dry run before a bulk write. GTFS Schedule metropolitan bus feed, stops with location_type empty or 0 inside the LGA22310 boundary: 516 stops, 387 distinct names; 129 names shared by exactly two stops; a "merge same-name stops" write would delete 129 stops (25.0%). Pair separation (equirectangular metres): median 19.3, min 6.0 (Kambrook Rd/Glen Eira Rd), max 142.8 (McLaurin Rd/Murrumbeena Rd). From stop_times joined to trips (route_id, direction_id): 114 pairs share a route with disjoint directions (opposite sides), 12 share a route and direction, 3 share no route. No claim on which same-direction pairs are true duplicates. Scripts: scratchpad au/b9/glne.py and stopidx.py.',
    requiredMentions: [
      '28,781',
      '39,585',
      '56,949',
      '9,365',
      '516 stops',
      '142.8 metres',
      'Kambrook Rd/Glen Eira Rd',
      'McKinnon Secondary College',
      'Bentleigh Secondary College'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Glen Eira local government area (LGA22310).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA22310'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) LGA boundary LGA22310, geo.abs.gov.au map service, used for our point-in-boundary checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Department of Transport and Planning, GTFS Schedule (Creative Commons Attribution 4.0), metropolitan bus feed: stops, trips and stop times.',
        url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      { claim: 'GTFS Schedule reference: stops.txt, trips.txt direction_id and stop_times.txt.', url: 'https://gtfs.org/documentation/schedule/reference/' },
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
      'That any of the 12 same-direction pairs are genuine duplicates: not claimed; they are flagged for a person to review.',
      'That the GTFS feed contains errors: not claimed; the page is about an over-broad instruction, not the data.',
      'Any change to real transport records: none made; the merge was only simulated as a dry run.',
      'Special school names, sector breakdowns, enrolments and results: not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Glen Eira City Council, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
