'use strict';
// Tea Tree Gully, Adelaide (cg- district page, Australia cluster Phase 8, row 324). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), council page (ABS LGA47700, City of Tea Tree Gully) under Adelaide and SA.
// Golden Grove and Modbury (committed suburb pages) lie inside; their figures and required mentions are kept off.
// Spine: an agent has two tools, a stop-name search and a council-boundary query, both described as "find stops for a
// place". It picks the name search: 0 stop names contain "Tea Tree Gully". With precise descriptions it picks the
// boundary query: 607 stop records, 27,084 Wednesday visits. GTFS v1708; agent turns are our scripts.
// Lesson family: tool descriptions steering an agent's tool choice; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'TEA TREE GULLY',
    label: 'Tea Tree Gully, Adelaide',
    blurb: 'Vibe coding and AI agent classes for the City of Tea Tree Gully, where one vague tool description made an agent report no bus stops at all.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-tea-tree-gully-adelaide',
  code: 'ttgc',
  accent: '#106A32',
  accentRationale: 'Tea Tree Gully: a deep gum-leaf green (hue 142.7), 5.45:1 on #EDE7DA; 32.4 RGB from the nearest South Australian accent, 12.9 from any other Australian accent and 7.6 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Tea Tree Gully',
    eyebrow: 'City of Tea Tree Gully, Adelaide, South Australia',
    schemaType: 'Place',
    chain: [
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
  routeLabel: 'Tea Tree Gully, Adelaide',
  title: 'Vibe Coding and AI Agents Classes in Tea Tree Gully, Adelaide',
  description: 'Live online vibe coding and AI agent classes for Tea Tree Gully teens and adults, plus Scratch and Python for children from six, in small groups or one to one.',
  ogDescription: 'Tea Tree Gully agent project: two tools with the same vague description, an answer of zero bus stops, and the clear wording that found 607.',
  twitterDescription: 'Vibe coding and AI agents for Tea Tree Gully, live online.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '14 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agent Classes for Tea Tree Gully',
    description: 'Level-matched online lessons in vibe coding, AI agents and Python for teenagers and adults across the City of Tea Tree Gully, with coding for children from six.'
  },
  h1: 'Vibe coding and AI agent classes in Tea Tree Gully',
  capsuleQ: 'Why do AI agents in Tea Tree Gully projects pick the wrong tool?',
  capsule: 'Usually because the tool descriptions do not say clearly what each tool does, so the agent guesses from names. Our live online classes teach learners to write tool descriptions an agent cannot misread. The City of Tea Tree Gully had 101,174 residents in 2021.',
  lead: 'Asked how many bus stops serve Tea Tree Gully, our scripted agent answered: none. Not one stop name in South Australia\'s timetable contains the words "Tea Tree Gully". The agent had searched names because both of its tools were described the same way, as "find stops for a place".',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Tea Tree Gully.',
  picks: {
    eyebrow: 'Course picks for Tea Tree Gully',
    h2: 'Courses for building agents that choose well',
    intro: 'This project needs Python functions, docstrings and an understanding of how agents read tools. These courses build all three; a free trial lesson finds the fit.',
    items: [
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Building and directing coding agents, including the tools they call.'
      },
      {
        course: 'complete-generative-ai-masterclass-college',
        band: 'University and adult',
        note: 'Tool use, function calling and evaluating agent behaviour.'
      },
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Making apps with AI help, with clear instructions as a core skill.'
      },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Functions, parameters and docstrings that explain themselves.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Tea Tree Gully in the Census',
      h2: 'Separate houses and bus commuters in the north-east',
      intro: 'Council-wide figures from the 2021 Census for the City of Tea Tree Gully (ABS code LGA47700), set beside South Australia.',
      body: [
        {
          kind: 'table',
          caption: 'City of Tea Tree Gully, 2021',
          head: ['Measure', 'City of Tea Tree Gully'],
          rows: [
            ['Residents', '101,174'],
            ['Median age', '41'],
            ['Families', '29,197'],
            ['Private dwellings', '41,022'],
            ['People per household', '2.5']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Tea Tree Gully compared with the state',
          head: ['Indicator', 'Tea Tree Gully', 'South Australia'],
          rows: [
            ['Separate houses', '89.1% (34,400)', '78.0%'],
            ['Workers who took a bus to work', '5.8% (2,944)', '3.1%'],
            ['Workers who drove to work', '65.5% (33,080)', '63.9%'],
            ['Adults with a bachelor degree or higher', '21.0% (17,603)', '22.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'School ages', p: 'Residents aged 5 to 9 numbered 6,030, aged 10 to 14 6,173, and aged 15 to 19 5,846.' },
            { h3: 'Older residents', p: '2,482 residents were aged 85 or over.' },
            { h3: 'Size', p: 'The council area spans about 95 square kilometres in the north-east of Adelaide.' }
          ]
        },
        { kind: 'p', text: 'Figures are exactly as the ABS released them; its privacy noise on small cells is one reason we never add them up.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Same description, wrong tool',
      intro: 'The agent had two Python functions available as tools. stops_named(text) searches stop names. stops_in_council(name) returns stop records whose location falls inside a council boundary. In version one, both docstrings read "Find stops for a place."',
      body: [
        {
          kind: 'table',
          caption: 'What each tool returned for Tea Tree Gully (our run on timetable version 1708)',
          head: ['Tool call', 'Result'],
          rows: [
            ['stops_named("Tea Tree Gully")', '0 stop records'],
            ['stops_named("Tea Tree")', '8 records, all at one interchange'],
            ['stops_in_council("Tea Tree Gully")', '607 stop records'],
            ['Wednesday 21 October 2026 visits at those 607', '27,084']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The two versions of the descriptions',
          head: ['Tool', 'Version one', 'Version two'],
          rows: [
            [
              'stops_named',
              'Find stops for a place.',
              'Search stop NAMES for text. Suburb and council names rarely appear in stop names.'
            ],
            [
              'stops_in_council',
              'Find stops for a place.',
              'Return every stop record located inside a council boundary. Use for questions about an area.'
            ]
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'What the agent saw',
              p: 'With identical descriptions, the agent had nothing to go on but the function names, and "named" sounded like the right match for a place name.'
            },
            {
              h3: 'What changed',
              p: 'With version two, our scripted agent chose stops_in_council and reported 607 stop records. Nothing else about the agent or the data changed.'
            },
            {
              h3: 'Why zero was believable',
              p: 'An empty result looks like an answer. The agent reported "no stops found" with no error, which is exactly why it is dangerous.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Descriptions are instructions',
          p: 'For an agent, a tool\'s description is the main evidence for when to use it. Write what the tool does, what it does not do, and when to prefer another tool. Test with a question that only one tool can answer correctly, as Tea Tree Gully does here.'
        },
        {
          kind: 'p',
          text: 'Adelaide Metro publishes the timetable openly; working out which stops fall within the council, and all the tallies, was done in our own code. The agent is a small script of ours built to isolate the effect of wording, so no commercial model\'s output appears here.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Agents and tools',
      h2: 'Writing tool descriptions an agent can use',
      intro: 'A few lines of plain English decide most tool choices.',
      body: [
        {
          kind: 'table',
          caption: 'A checklist for tool descriptions',
          head: ['Include', 'Why', 'In the Tea Tree Gully tools'],
          rows: [
            ['What the input means', 'Agents fill parameters from it', 'text versus council name'],
            ['What the tool does not do', 'Prevents near-miss choices', 'Name search ignores location'],
            ['When to use it', 'Guides choice between similar tools', 'Area questions use the boundary tool'],
            ['What an empty result means', 'Stops false "none found" answers', 'Zero names is not zero stops']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Label two boxes so clearly that a friend always picks the right one without asking.' },
            { h3: 'Secondary learners', p: 'Give an AI tool two functions with vague docstrings, ask it a question, then rewrite the docstrings and ask again.' },
            { h3: 'Adults', p: 'Review the descriptions of tools your agents use at work, especially pairs that sound alike.' }
          ]
        },
        { kind: 'p', text: 'Good descriptions help people too. The same docstring that steers an agent tells the next programmer what the function is for.' }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Tea Tree Gully',
      h2: 'A bus-only council',
      intro: 'Council-wide timetable markers for Wednesday 21 October 2026, with weekend days for comparison.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'No train', p: 'None of the 607 stop records inside the council is a railway station; all visits are by bus, including 243 school bus visits.' },
            { h3: 'Routes', p: '66 routes served the council\'s stop records that Wednesday.' },
            { h3: 'Weekends', p: 'Visits fell to 13,399 on Saturday 24 October and 11,976 on Sunday 25 October.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Council figures',
          p: 'This page covers the whole City of Tea Tree Gully. Suburbs inside it, such as Golden Grove and Modbury, have their own pages, and their figures are not repeated here. Neighbouring councils include Salisbury, Playford, Port Adelaide Enfield, Campbelltown and Adelaide Hills.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From labelled boxes to well-described tools',
    intro: 'The trial lesson matters more than these age bands.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and play',
        p: 'Clear names and instructions in first programs.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI basics',
        p: 'Functions and a realistic idea of AI.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Vibe coding',
        p: 'Directing AI tools with precise instructions.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Agents',
        p: 'Tools, descriptions and agent evaluation.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'If the agent picks the tool, who writes the label?',
    intro: 'The person building the agent. An agent can only be as precise as the descriptions it reads.',
    p1: 'Vibe coding often means asking an agent to "add a tool for that". It will, and it may describe the new tool in the vaguest possible words. Later, when two tools sound alike, the agent chooses by guesswork and reports the result with confidence.',
    p2: 'Learners who have watched "no stops" become 607 with two rewritten sentences treat tool descriptions as part of the program. That is how they build agents that keep working as more tools are added.',
    closer: 'In Tea Tree Gully, the learner who writes clear tool descriptions gets the 607, not the zero.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Tea Tree Gully lessons online',
    intro: 'Lessons run live over video, so learners join from home.',
    cells: [
      { h3: 'Tools on screen', p: 'Every tool, description and agent answer is reviewed together.' },
      { h3: 'Holidays respected', p: 'We pause when South Australian schools break and restart with each new term.' },
      { h3: 'Trial lesson free', p: 'One full class without charge, then honest advice.' },
      { h3: 'Five to ten learners', p: 'Grouped by level, or taught one to one.' },
      { h3: 'Twice weekly', p: 'Two fixed lessons a week, roughly eight a month.' },
      { h3: 'India time', p: 'With teachers in India, a 6pm Tea Tree Gully class is 1pm India time in summer and 2pm from April.' }
    ],
    spec: {
      title: 'Summer and winter time',
      p: 'South Australia\'s daylight saving runs from the first Sunday in October to the first Sunday in April (IANA time zone database); India has none, so the gap moves between five and four hours.'
    }
  },
  fees: {
    h2: 'Tea Tree Gully class fees',
    intro: 'Three clear prices.',
    first: 'The first lesson is free and ends with a written recommendation.',
    group: 'Group month: around eight lessons with five to ten learners.',
    private: 'Private month: around eight lessons with one teacher.',
    closer: 'Fees are charged in US dollars once the trial has fixed a course and a weekly time. Holiday pauses and missed lessons are covered on the pricing page.'
  },
  reviewsH2: 'Student and parent ratings on Google',
  book: {
    h2: 'Book a free Tea Tree Gully class',
    intro: 'A line on the learner\'s age and hobbies helps us plan. Teens could begin by rewording a pair of tool descriptions, and children by labelling Scratch sprites for a friend.',
    success: 'Thank you. We will contact you soon about a Tea Tree Gully class.'
  },
  faq: {
    h2: 'Tea Tree Gully vibe coding and agent questions',
    intro: 'Questions from across the City of Tea Tree Gully.',
    items: [
      {
        q: 'What is the population of the City of Tea Tree Gully?',
        a: 'The 2021 Census QuickStats count 101,174 residents in the City of Tea Tree Gully local government area, with 41,022 private dwellings and a median age of 41.'
      },
      {
        q: 'What is a tool description for an AI agent?',
        a: 'A short text, often a function\'s docstring, telling the agent what a tool does and when to use it. Agents rely on it to choose between tools.'
      },
      {
        q: 'Why did the agent report no stops?',
        a: 'It searched stop names for "Tea Tree Gully" because both tools were described identically. No stop name contains those words, so the search returned zero.'
      },
      {
        q: 'How many stop records are in the City of Tea Tree Gully?',
        a: 'By our boundary check of the Adelaide Metro timetable, 607 stop records lie inside the council, with 27,084 scheduled visits on Wednesday 21 October 2026.'
      },
      {
        q: 'What does vibe coding mean in practice?',
        a: 'You explain the program you want to an AI assistant, it drafts the code, and you test, question and refine that draft until it works properly.'
      },
      { q: 'Is Claude part of the teen courses?', a: 'No. We keep Claude for learners who are 18 or older, and teenagers work with other AI tools.' },
      {
        q: 'Is there a classroom in Tea Tree Gully?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Tea Tree Gully learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can a group class here cover Copilot Studio?', a: 'No. We teach Copilot Studio only in private lessons; groups write agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Adelaide and South Australia',
    h2: 'More for Tea Tree Gully learners',
    html: 'Two suburbs here have their own pages: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-golden-grove-adelaide">Golden Grove</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-modbury-adelaide">Modbury</a>. For the city as a whole, see <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">the Adelaide page</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">the South Australia guide</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Tea Tree Gully and Adelaide',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/vibe-coding-and-ai-agents-classes-in-golden-grove-adelaide', label: 'Golden Grove' },
    { href: '/online-coding-and-python-classes-in-modbury-adelaide', label: 'Modbury' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' }
  ],
  personalityCss: `
.cg-root.cg-ttgc .cg-hero-grid { align-items: center; gap: clamp(0.98rem, 2.94vw, 2.34rem); }
.cg-root.cg-ttgc .cg-hero h1 { font-weight: 628; letter-spacing: -0.024em; line-height: 1.09; }
.cg-root.cg-ttgc .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.53rem 0 0.53rem 1.06rem; }
.cg-root.cg-ttgc .cg-eyebrow { letter-spacing: 0.104em; font-weight: 700; font-size: 0.84rem; text-transform: uppercase; }
.cg-root.cg-ttgc .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.015em; }
.cg-root.cg-ttgc .cg-grid-3 { gap: clamp(0.73rem, 1.9vw, 1.49rem); }
.cg-root.cg-ttgc .cg-table caption { font-style: italic; font-weight: 618; text-align: left; }
.cg-root.cg-ttgc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ttgc .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.87rem; }
.cg-root.cg-ttgc .cg-callout { border-left-width: 4px; border-radius: 6px; }
`,
  dossier: {
    curriculumAuthority: 'City of Tea Tree Gully (LGA47700). ABS Census 2021 QuickStats (read 12 October 2026): 101,174 people; median age 41; 29,197 families; 41,022 private dwellings; 2.5 per household; separate houses 34,400 (89.1%, SA 78.0%); bus 2,944 (5.8%, SA 3.1%); drove 33,080 (65.5%, SA 63.9%); bachelor or higher 17,603 (21.0%, SA 22.7%); aged 5-9 6,030; 10-14 6,173; 15-19 5,846; 85+ 2,482. ABS LGA area 95.2109 sq km. Adelaide Metro GTFS v1708: 607 stop records inside the LGA polygon; Wednesday 21 Oct 2026 27084 visits (bus 26823, school 712 243, regional 701 18), 66 routes, no rail; Saturday 24 Oct 13,399; Sunday 25 Oct 11,976. Neighbouring LGAs (ABS touches): Adelaide Hills, Campbelltown, Playford, Port Adelaide Enfield, Salisbury. Golden Grove and Modbury figures deliberately not used.',
    localProject: 'Tool descriptions. stops_named(text): case-insensitive substring over stop_name (location_type 0): "tea tree gully" 0; "tea tree" 8 (all Tea Tree Plaza Interchange zones). stops_in_council(name): point-in-polygon on LGA47700: 607 records; Wednesday visits 27,084. Agent tool choices are our scripts.',
    requiredMentions: ['101,174', '41,022', '6,173', '607 stop records', 'Adelaide Hills', 'stops_named', 'stops_in_council', 'tool description', 'Playford'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Tea Tree Gully local government area (LGA47700), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA47700'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Local Government Area and Suburbs and Localities boundary services, used for our point-in-boundary and intersection checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Department for Infrastructure and Transport (South Australia), Adelaide Metro General Transit Feed, version 1708 (valid 9 October 2026 to 9 April 2027), Creative Commons Attribution 3.0 Australia per its data.gov.au listing; downloaded 13 October 2026.',
        url: 'https://data.gov.au/data/dataset/https-gtfs-adelaidemetro-com-au'
      },
      {
        claim: 'Anthropic, Define tools (tool use documentation): detailed tool descriptions are the most important factor in tool performance.',
        url: 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Adelaide, rule AS, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Golden Grove and Modbury figures: not used; those suburbs have their own pages.',
      'Any transcript from a commercial AI model: not claimed; the agent is our script.',
      'Passenger numbers: not claimed.',
      'School term dates: not given; official SA term-date pages refused automated access (HTTP 403).',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Tea Tree Gully or Adelaide Metro.'
    ]
  }
};
