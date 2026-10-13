'use strict';
// Golden Grove, Adelaide (cg- district page, Australia cluster Phase 8, row 320). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), suburb page (ABS SAL40516, City of Tea Tree Gully) under Adelaide and
// South Australia.
// Spine: the vague request "how busy is Golden Grove's public transport?" has several defensible answers from the same
// timetable: 75 stop records inside the boundary, 46 records whose name contains Golden Grove (15 of them inside),
// 2,843 Wednesday visits, 1,188 Saturday, 1,116 Sunday, 28 routes, 128 at the busiest record. A specific prompt pins
// one. GTFS v1708; agent turns are our scripts. Lesson family: vague vs specific prompts; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'GOLDEN GROVE',
    label: 'Golden Grove, Adelaide',
    blurb: 'Vibe coding and AI agent classes for Golden Grove, where one vague question about buses gets six different true answers.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-golden-grove-adelaide',
  code: 'gdgv',
  accent: '#616916',
  accentRationale: 'Golden Grove: an olive gold (hue 65.8), 4.81:1 on #EDE7DA; 40.4 RGB from the nearest South Australian accent, 12.2 from any other Australian accent and 7.3 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Golden Grove',
    eyebrow: 'Golden Grove, City of Tea Tree Gully, South Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Golden Grove' },
      { type: 'AdministrativeArea', name: 'City of Tea Tree Gully' },
      { type: 'City', name: 'Adelaide' },
      { type: 'AdministrativeArea', name: 'South Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-south-australia', name: 'South Australia' },
    { slug: 'ai-and-programming-classes-in-adelaide', name: 'Adelaide' }
  ],
  nav: [
    { label: 'Adelaide', href: '/ai-and-programming-classes-in-adelaide' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Golden Grove, Adelaide',
  title: 'Vibe Coding and AI Agents Classes in Golden Grove, Adelaide',
  description: 'Live online vibe coding and AI agent classes for Golden Grove teens and adults, with Scratch and Python for children from six, taught in small groups or one to one.',
  ogDescription: 'Golden Grove agent project: ask "how busy is it?" and the timetable gives six true answers; ask precisely and you get one, 2,843 visits.',
  twitterDescription: 'Vibe coding and AI agents for Golden Grove, live online.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agent Classes for Golden Grove',
    description: 'Level-matched online lessons in vibe coding, AI agents and Python for teenagers and adults in Golden Grove, Adelaide, with coding for children from six.'
  },
  h1: 'Vibe coding and AI agent classes in Golden Grove',
  capsuleQ: 'How do Golden Grove learners get useful answers from AI agents?',
  capsule: 'By writing requests precise enough that only one answer fits: which place, which day, which measure. That discipline runs through our live vibe coding and agent lessons. Golden Grove, in the City of Tea Tree Gully, had 10,299 residents at the 2021 Census.',
  lead: 'We asked a scripted agent one loose question: how busy is public transport in Golden Grove? Working from the Adelaide Metro timetable it could truthfully answer 75, or 46, or 2,843, or 1,116, depending on what "busy" and "Golden Grove" mean. None of those is wrong. That is the problem.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Golden Grove.',
  picks: {
    eyebrow: 'Course picks for Golden Grove',
    h2: 'Courses for asking AI the right question',
    intro: 'This project needs prompting skill, some Python and a feel for data definitions. These courses build each; a free lesson finds the right one.',
    items: [
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 17', note: 'Getting precise, checkable answers from AI tools.' },
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Describing software clearly enough for an AI to build the right thing.'
      },
      { course: 'complete-generative-ai-masterclass-college', band: 'University and adult', note: 'Prompt design, evaluation and agents for real tasks.' },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Specifying work for coding agents so the result matches the need.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Golden Grove in the Census',
      h2: 'Family houses and many teenagers',
      intro: 'Census 2021 figures for the suburb of Golden Grove (ABS code SAL40516), compared with South Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Golden Grove, 2021',
          head: ['Measure', 'Golden Grove'],
          rows: [
            ['Residents', '10,299'],
            ['Median age', '44'],
            ['Families', '2,974'],
            ['Private dwellings', '4,119'],
            ['People per household', '2.5']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Golden Grove and the state',
          head: ['Indicator', 'Golden Grove', 'South Australia'],
          rows: [
            ['Separate houses', '85.1% (3,341)', '78.0%'],
            ['Flats or apartments', '0.1% (3)', '6.8%'],
            ['Workers who drove to work', '65.1% (3,379)', '63.9%'],
            ['Adults with a bachelor degree or higher', '19.9% (1,711)', '22.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Golden Grove counted 684 residents aged 10 to 14 and 695 aged 15 to 19.' },
            { h3: 'Younger children', p: 'Another 556 were aged 5 to 9 and 461 were under five.' },
            { h3: 'A large suburb', p: 'The ABS boundary covers about 17.4 square kilometres on Adelaide\'s north-eastern edge.' }
          ]
        },
        { kind: 'p', text: 'We show the bureau\'s figures as published. Its privacy adjustments to small cells mean we leave the numbers unadded.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'One question, six true answers',
      intro: 'Vague request: "How busy is Golden Grove\'s public transport?" Every answer below was computed from the same timetable file (feed version 1708). Each is correct for some reading of the question.',
      body: [
        {
          kind: 'table',
          caption: 'Answers to the vague question (our calculation)',
          head: ['Reading of "busy" and "Golden Grove"', 'Answer'],
          rows: [
            ['Stop records inside the ABS suburb boundary', '75'],
            ['Stop records whose name contains "Golden Grove"', '46 (only 15 inside the suburb)'],
            ['Scheduled visits on Wednesday 21 October 2026', '2,843'],
            ['Scheduled visits on Saturday 24 October 2026', '1,188'],
            ['Scheduled visits on Sunday 25 October 2026', '1,116'],
            ['Routes serving the suburb that Wednesday', '28']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Place is ambiguous',
              p: 'Golden Grove Road runs well beyond the suburb, so searching stop names finds 46 records, 31 of them outside the boundary.'
            },
            {
              h3: 'Measure is ambiguous',
              p: 'Stops, visits and routes all describe "busy" differently, and visits change more than twofold between a weekday and a Sunday.'
            },
            { h3: 'Day is ambiguous', p: 'A timetable covers six months of service patterns. Without a date, any count mixes days that never run together.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'The specific version',
          p: '"Count scheduled visits at stop records inside the ABS boundary of Golden Grove, all modes, on Wednesday 21 October 2026." That request has one answer, 2,843, and anyone can check it against the file. Given that wording, our scripted agent has nothing left to guess.'
        },
        {
          kind: 'p',
          text: 'All six answers come from one Adelaide Metro open data file; deciding which stops sit inside Golden Grove, and every tally, was our own work. The agent answering these questions is a script we wrote to show the effect of wording, not a transcript from a commercial AI model.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Prompting agents',
      h2: 'Turning a vague request into a specific one',
      intro: 'Four quick edits remove most ambiguity before an agent writes a line of code.',
      body: [
        {
          kind: 'table',
          caption: 'Sharpening the Golden Grove request',
          head: ['Pin down', 'Vague', 'Specific'],
          rows: [
            ['The place', 'Golden Grove', 'Inside the ABS suburb boundary'],
            ['The measure', 'How busy', 'Scheduled stop visits, all modes'],
            ['The time', 'Unstated', 'Wednesday 21 October 2026'],
            ['The source', 'Unstated', 'Adelaide Metro timetable, version 1708']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Give a friend directions to draw a house, first vaguely, then precisely, and compare the drawings.' },
            { h3: 'Secondary learners', p: 'Ask an AI tool a vague and a specific question about local buses and explain why the answers differ.' },
            { h3: 'Adults', p: 'Before delegating analysis to an agent, write down the place, measure, period and source you mean.' }
          ]
        },
        {
          kind: 'p',
          text: 'Specific wording also makes the result reusable: next month, the same request run on a newer timetable gives a number that can be compared like for like, which six loosely related answers never allow.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Golden Grove',
      h2: 'An interchange on The Grove Way',
      intro: 'What the Wednesday 21 October 2026 timetable shows for this suburb.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Busiest records', p: 'Stop 62A on The Grove Way (west side) and Zone E at Golden Grove Interchange tied with 128 scheduled visits each.' },
            { h3: 'Mostly buses', p: 'Of the 2,843 Wednesday visits, 2,824 were regular buses and 17 were school bus services; there is no train or tram.' },
            { h3: 'First bus', p: 'The earliest scheduled departure from a Golden Grove stop record that day was at 5:05am.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Golden Grove the suburb',
          p: 'All figures describe the suburb of Golden Grove in the City of Tea Tree Gully. Greenwith, Wynn Vale, Surrey Downs, Fairview Park, Gulfview Heights and the other neighbouring suburbs are counted separately.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From drawing instructions to precise prompts',
    intro: 'Ages are a loose guide; the trial lesson finds the right step.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and play',
        p: 'Precise instructions to sprites, one block at a time.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI basics',
        p: 'First code and a realistic idea of AI tools.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Vibe coding',
        p: 'Clear requests to AI, then checking the result.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Agents',
        p: 'Specifying and reviewing work done by AI agents.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'If the agent does the work, what is left for the learner?',
    intro: 'Deciding exactly what is being asked. That part cannot be delegated.',
    p1: 'Vibe coding turns descriptions into software, so the quality of the description sets the ceiling on the result. An agent given "how busy is Golden Grove" will pick a reading, perhaps 46 name matches, and present it with full confidence.',
    p2: 'Learners who have seen six true answers to one question learn to specify place, measure, day and source. That skill makes every AI tool they use more accurate, now and as the tools change.',
    closer: 'In Golden Grove, the learner who asks precisely gets the one answer that matters.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Golden Grove classes online',
    intro: 'All teaching is live on video; learners stay at home.',
    cells: [
      { h3: 'Prompts reviewed', p: 'Every request to an AI tool is read and sharpened with the teacher.' },
      { h3: 'SA school terms', p: 'Lessons follow the state school year, with holidays off.' },
      { h3: 'Free first class', p: 'One complete lesson free and a clear recommendation.' },
      { h3: 'Matched groups', p: 'Fifteen to twenty learners at one level, or private lessons.' },
      { h3: 'Two lessons weekly', p: 'Fixed weekly times, close to eight lessons a month.' },
      { h3: 'India time', p: 'Teachers are based in India; a 6:30pm Golden Grove class is 1:30pm India time in summer and 2:30pm from April.' }
    ],
    spec: {
      title: 'Adelaide and India clocks',
      p: 'Adelaide\'s daylight saving runs from the first Sunday in October to the first Sunday in April (IANA time zone database). India has none, so the gap alternates between five and four hours.'
    }
  },
  fees: {
    h2: 'Golden Grove class fees',
    intro: 'Three simple prices.',
    first: 'The first lesson is free and comes with a written next step.',
    group: 'About eight group lessons monthly, fifteen to twenty learners.',
    private: 'About eight private lessons monthly with one teacher.',
    closer: 'Billing is in US dollars and starts only after the trial has fixed a course and weekly slot. See the pricing page for holidays and missed lessons.'
  },
  reviewsH2: 'Google reviews from our learners',
  book: {
    h2: 'Book a free Golden Grove class',
    intro: 'Tell us the learner\'s age and interests. A teenager might rewrite the vague bus question; a young child might give a sprite precise directions in Scratch.',
    success: 'Thank you. We will contact you soon about a Golden Grove class.'
  },
  faq: {
    h2: 'Golden Grove vibe coding and agent questions',
    intro: 'Questions Golden Grove families and adults ask about AI and coding.',
    items: [
      {
        q: 'How many people live in Golden Grove?',
        a: 'The 2021 Census QuickStats count 10,299 residents in the suburb of Golden Grove, with 2,974 families and 4,119 private dwellings.'
      },
      {
        q: 'Why do vague prompts give unreliable answers?',
        a: 'A vague prompt allows several reasonable interpretations, and an AI picks one without saying so. Different runs or tools may pick differently, so the answer seems to change.'
      },
      {
        q: 'What makes a prompt specific?',
        a: 'It names the exact place, the measure, the time period and the data source, so only one answer fits and anyone can check it.'
      },
      {
        q: 'How busy is public transport in Golden Grove?',
        a: 'It depends what you mean. By our count of the Adelaide Metro timetable, stop records inside Golden Grove had 2,843 scheduled visits on Wednesday 21 October 2026 and 1,116 on Sunday 25 October.'
      },
      {
        q: 'What is an AI agent?',
        a: 'An AI system that plans and carries out several steps, such as querying data and writing code, to complete a task rather than answer one message.'
      },
      { q: 'Can teenagers use Claude in lessons?', a: 'No. Claude-based courses are open to adults of 18 and over; teenagers use other AI tools.' },
      {
        q: 'Is there a classroom in Golden Grove?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Golden Grove learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Do Golden Grove groups cover Copilot Studio?', a: 'No. Copilot Studio is for one-to-one lessons only; groups build agents with Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Adelaide and South Australia',
    h2: 'More for Golden Grove learners',
    html: 'City-wide options are on <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">our Adelaide page</a>, with younger learners covered by <a class="cg-inline-link" href="/coding-classes-for-kids-adelaide">Adelaide kids\' coding</a>. Families on the Murray can try <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-murray-bridge">our Murray Bridge page</a>, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">a statewide guide</a> links every region.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Golden Grove and Adelaide',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/coding-classes-for-kids-adelaide', label: 'Kids in Adelaide' },
    { href: '/vibe-coding-and-ai-agents-classes-in-murray-bridge', label: 'Murray Bridge' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' }
  ],
  personalityCss: `
.cg-root.cg-gdgv .cg-hero-grid { align-items: center; gap: clamp(1.06rem, 3.12vw, 2.52rem); }
.cg-root.cg-gdgv .cg-hero h1 { font-weight: 638; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-gdgv .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.57rem 0 0.57rem 1.09rem; }
.cg-root.cg-gdgv .cg-eyebrow { letter-spacing: 0.116em; font-weight: 700; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-gdgv .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.016em; }
.cg-root.cg-gdgv .cg-grid-3 { gap: clamp(0.7rem, 1.88vw, 1.46rem); }
.cg-root.cg-gdgv .cg-table caption { font-weight: 612; text-align: left; letter-spacing: 0.02em; }
.cg-root.cg-gdgv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gdgv .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.06rem; }
.cg-root.cg-gdgv .cg-callout { border-left-width: 5px; border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Golden Grove (SAL40516), City of Tea Tree Gully. ABS Census 2021 QuickStats (read 13 October 2026): 10,299 people; median age 44; 2,974 families; 4,119 private dwellings; 2.5 per household; separate houses 3,341 (85.1%, SA 78.0%); flats 3 (0.1%, SA 6.8%); drove 3,379 (65.1%, SA 63.9%); bachelor or higher 1,711 (19.9%, SA 22.7%); aged 0-4 461; 5-9 556; 10-14 684; 15-19 695. ABS SAL area 17.4305 sq km; council by ABS LGA point query (Tea Tree Gully). Adelaide Metro GTFS v1708: Wednesday 21 Oct 2026 75 stop records, 2843 visits (bus 2824, school 712 17, regional 701 2), 28 routes; Stop 62A The Grove Way West side and Zone E Golden Grove Interchange 128 each; first 05:05:12; Saturday 24 Oct 1,188; Sunday 25 Oct 1,116; 46 stop records network-wide with Golden Grove in the name, 15 inside the SAL. Neighbours (ABS touches): Fairview Park, Gould Creek, Greenwith, Gulfview Heights, Salisbury East, Surrey Downs, Upper Hermitage, Wynn Vale, Yatala Vale.',
    localProject: 'Vague vs specific prompts. Same GTFS v1708: 75 stop records inside SAL40516; 46 stop records with "golden grove" in stop_name (15 inside); Wednesday 21 Oct 2026 visits 2,843; Saturday 24 Oct 1,188; Sunday 25 Oct 1,116; 28 routes Wednesday; busiest record 128. Specific prompt answer 2,843. Agent is our script.',
    requiredMentions: ['4,119', '3,341', '695', 'The Grove Way', 'Golden Grove Interchange', 'Wynn Vale', 'Gulfview Heights', '1,188', 'vague'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Golden Grove suburb and locality (SAL40516), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL40516'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities and Local Government Areas boundary services, used for our point-in-boundary checks and areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Department for Infrastructure and Transport (South Australia), Adelaide Metro General Transit Feed, version 1708 (valid 9 October 2026 to 9 April 2027), Creative Commons Attribution 3.0 Australia per its data.gov.au listing; downloaded 13 October 2026.',
        url: 'https://data.gov.au/data/dataset/https-gtfs-adelaidemetro-com-au'
      },
      {
        claim: 'Anthropic, Claude prompting best practices, Be clear and direct: being specific about the desired output can help enhance results.',
        url: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Adelaide, rule AS, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Passenger numbers or crowding at Golden Grove stops: not claimed; scheduled visits only.',
      'Any transcript from a commercial AI model: not claimed; the agent is our script.',
      'Figures for the City of Tea Tree Gully as a whole: not used.',
      'School term dates: not given; official SA term-date pages refused automated access (HTTP 403).',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Tea Tree Gully or Adelaide Metro.'
    ]
  }
};
