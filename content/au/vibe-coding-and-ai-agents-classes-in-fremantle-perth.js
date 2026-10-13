'use strict';
// Fremantle, Perth (cg- district page, Australia cluster Phase 8, row 300). Keyword slug vibe-coding-and-ai-agents-classes-in-*,
// council page (ABS LGA53430, City of Fremantle) under Perth and Western Australia.
// Spine: an agent asked for the busiest counted places in Fremantle reads two Main Roads layers with different schemas.
// Code written for the Traffic Digest raises KeyError on all 7 bike counters; .get(..., 0) turns them into zeros. A field-mapping
// adapter gives one schema (mode, per_day, weekday, weekend, year) and keeps 2 new counters as "no count yet", not 0.
// Script: scratchpad au/b13/a_frmt.py. Lesson family: field-mapping adapter over two tools; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'FREMANTLE',
    label: 'Fremantle, Perth',
    blurb: 'Vibe coding and AI agent classes for Fremantle, where an agent must read car counters and bike counters that describe the same idea with different field names.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-fremantle-perth',
  code: 'frmt',
  accent: '#741435',
  accentRationale: 'Fremantle: a muted port-wine red (hue 339.4, s 0.83, v 0.45), at least 32.0 RGB from every WA page accent, 13.9 from other AU accents and 8.6 from every other site colour; 9.0:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Fremantle',
    eyebrow: 'City of Fremantle, southern Perth, Western Australia',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Fremantle' },
      { type: 'City', name: 'Perth' },
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' },
    { slug: 'online-coding-and-python-classes-in-perth-western-australia', name: 'Perth' }
  ],
  nav: [
    { label: 'Perth', href: '/online-coding-and-python-classes-in-perth-western-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Fremantle, Perth',
  title: 'Vibe Coding and AI Agents Classes in Fremantle, Perth',
  description: 'Live online vibe coding and AI agent classes for the City of Fremantle, with an agent project that merges Main Roads car and bike counter data through one adapter.',
  ogDescription: 'A Fremantle agent reads car counters and bike counters. Without an adapter it crashes on 7 rows or, worse, reports them as zero.',
  twitterDescription: 'Fremantle vibe coding and AI agent classes, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Fremantle',
    description: 'Vibe coding, AI agents and Python lessons for children, teenagers and adults in the City of Fremantle, grouped by level and taught live online.'
  },
  h1: 'Vibe coding and AI agents classes in Fremantle',
  capsuleQ: 'What can a Fremantle learner build with an AI agent?',
  capsule: 'An agent that answers questions from public data and is honest about what that data contains. In our Fremantle project the agent ranks counted places using two Main Roads tools, one for vehicles and one for bicycles. The tools name the same idea differently. Learners write a small adapter so the agent sees one clear schema and never turns a missing count into a zero.',
  lead: 'The City of Fremantle is small, at about 19 square kilometres, and busy. Main Roads lists 46 vehicle count sites on 27 roads here, plus 7 permanent bicycle counters on paths by the beaches, the river and the railway. Those two lists are a ready-made test of how an AI agent copes when its tools disagree about names.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Fremantle.',
  picks: {
    eyebrow: 'Course picks for Fremantle',
    h2: 'Agents, vibe coding and Python',
    intro: 'Courses that suit the adapter project below. A free trial lesson sets the starting point.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Projects built with an AI partner, then read, tested and explained.'
      },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Coding agents on real repositories, with every change reviewed.'
      },
      {
        course: 'complete-generative-ai-masterclass-college',
        band: 'University and adult',
        note: 'Tool use, structured output and checking what a model returns.'
      },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Dictionaries, functions and error handling, the parts every adapter needs.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Fremantle by the numbers',
      h2: 'Older terraces, short commutes and a port city',
      intro: 'Figures for the City of Fremantle council area (ABS LGA53430), from 2021 Census QuickStats read on 12 October 2026, with the latest ABS estimate.',
      body: [
        {
          kind: 'table',
          caption: 'City of Fremantle counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents, 2021 Census', '31,930'],
            ['Estimated residents, 2025', '37,542'],
            ['Median age', '42'],
            ['Private dwellings', '15,687'],
            ['People per household', '2.2'],
            ['Bedrooms per dwelling', '2.8']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Fremantle shares compared with the state',
          head: ['Share', 'Fremantle', 'WA'],
          rows: [
            ['Semi-detached, terrace or townhouse', '22.3% (2,932)', '13.0%'],
            ['Flat or apartment', '16.4% (2,154)', '6.5%'],
            ['Walked to work', '4.0% (661)', '2.2%'],
            ['Professionals among workers', '37.5% (6,213)', '22.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Residents aged 5 to 9 numbered 1,449, or 4.5%, below the 6.5% share for Western Australia.' },
            { h3: 'Degrees', p: 'Of residents aged 15 and over, 39.2% held a bachelor degree or higher, against 23.8% statewide.' },
            {
              h3: 'Growth',
              p: 'The ABS estimate of 37,542 residents for 2025 sits well above the 2021 Census count. They are different measures, so we show both and leave them unsubtracted.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'The Census was taken during the pandemic, so the travel-to-work shares describe that week. The ABS rounds figures and lightly perturbs small counts, so parts of its tables may not add up to its totals; we quote each number as published.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Two tools, one question, one adapter',
      intro: 'The task given to the agent is short: rank the counted places in Fremantle by how much traffic they carry. It has two tools. One returns Traffic Digest rows for vehicles; the other returns Bike Count Sites. Only 10 field names appear in both, and none of them is a volume.',
      body: [
        {
          kind: 'table',
          caption: 'What each tool calls the same idea (Main Roads field names)',
          head: ['Idea', 'Vehicle tool', 'Bike tool'],
          rows: [
            ['Average per day, whole week', 'MON_SUN', 'COMBINED_DIRECTION_MON_SUN'],
            ['Average per weekday', 'MON_FRI', 'COMBINED_DIRECTION_MON_FRI'],
            ['Average per weekend day', 'SAT_SUN', 'COMBINED_DIRECTION_SAT_SUN'],
            ['Fields found only here', '8', '12']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Three versions of the agent\'s ranking step on 53 Fremantle rows (our scripts)',
          head: ['Version', 'Result'],
          rows: [
            ['row["MON_SUN"]', 'KeyError on all 7 bike rows; the run stops'],
            ['row.get("MON_SUN", 0)', 'Runs, but all 7 bike counters score zero'],
            ['Adapter, then rank by mode', '46 vehicle sites and 5 bike counters ranked; 2 marked as no count yet']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The quiet failure',
              p: 'The second version is worse than the crash. It looks finished, yet it reports the path counter at Stirling Bridge, averaging 703 riders a day, as carrying nothing.'
            },
            {
              h3: 'Missing is not zero',
              p: 'Two underpass counters were commissioned on 21 July 2026 and have no counts yet. The adapter maps their volume to None and the agent says so in words.'
            },
            {
              h3: 'Separate rankings',
              p: 'Mixing modes puts the busiest bike counter 45th of 51, behind 44 vehicle sites. The adapter adds a mode field, and the agent ranks vehicles and bikes apart.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'What the adapter reveals',
          p: 'Once both tools speak one schema, a real local pattern appears. Four of the five counted bike paths are busier at the weekend than on weekdays; the path at Stirling Bridge rises from 619 to 911 riders. Vehicle sites go the other way, with a median weekend to weekday ratio of 0.908.'
        },
        {
          kind: 'p',
          text: 'Volumes come from the Main Roads Traffic Digest and Bike Count Sites layers, downloaded on 12 October 2026, for sites Main Roads assigns to the City of Fremantle. Count years differ between sites, from 2021/22 to 2026/27. The adapter, the rankings and the ratios are our own scripts and calculations.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Building the adapter',
      h2: 'One function between the agent and its tools',
      intro: 'An adapter is a translation layer. It takes a row from either tool and returns a dictionary with the same keys every time.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Print the keys of one row from each tool and list the shared names.'],
            ['2', 'Run the naive ranking and read the KeyError carefully.'],
            ['3', 'Write adapt(row) returning site, road, place, mode, per_day, weekday, weekend and year.'],
            ['4', 'Give the agent only adapted rows, and test it on a counter with no data.']
          ]
        },
        {
          kind: 'p',
          text: 'Step 4 is where most first attempts slip. A default of zero feels harmless while writing the adapter, but it turns a new counter into a dead path. Learners write a test that feeds in a bike row with blank volumes and asserts that the agent\'s answer contains the words no count yet. When the agent later meets a third tool, such as pedestrian counts, the same adapter pattern absorbs it in a few lines.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Translate two picture cards that say the same thing in different words, then make one shared card.' },
            { h3: 'Teenagers', p: 'Write the adapter in Python, then let an AI assistant extend it and check every field it maps.' },
            { h3: 'Adults', p: 'Put adapters between an agent and two internal systems that disagree about names and units.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Fremantle',
      h2: 'Bridges, beaches and the 2027 school year',
      intro: 'Local details from the two Main Roads layers and the WA Department of Education.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Busiest road site', p: 'Stirling Highway north of Stirling Bridge averages 36,707 vehicles a day across the week, from a 2023/24 count.' },
            { h3: 'Coast path', p: 'The South Beach counter north of Douro Road averages 359 riders a day, with 174 heading to Fremantle and 185 to Coogee.' },
            { h3: 'Term 3, 2027', p: 'WA public schools run Term 3 from Monday 19 July to Friday 24 September 2027, a good moment to begin or switch a course.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Area used',
          p: 'The council area is the ABS outline of about 19.3 square kilometres. Count sites are those Main Roads attaches to the City of Fremantle. Our point-in-polygon test places 11 government schools inside the outline.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From translation cards to agent tools',
    intro: 'Ages are guidance; the free trial sets the rung.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Blocks and stories',
        p: 'Scratch games built step by step, with each step said aloud.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI basics',
        p: 'First typed code and a sense of what AI gets wrong.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Vibe coding',
        p: 'Apps made with AI help, then tested by the learner.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Agents at work',
        p: 'Coding agents and tool use for study and jobs.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'Why teach adapters when agents can write them?',
    intro: 'Because an agent that guesses field names can be confidently wrong.',
    p1: 'Ask a coding agent to merge the two Fremantle tools and it may well produce a working adapter. It may also choose the primary-direction column instead of the combined one, or fill gaps with zero, and the output will still look tidy.',
    p2: 'A learner who has mapped the fields by hand knows which column means both directions and why a blank must stay blank. That knowledge turns a plausible draft into a checked one.',
    closer: 'Fremantle learners let agents draft the glue code and then read every line of it.',
    blogAnchor: 'why checking code still beats trusting it in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Classes for Fremantle, online',
    intro: 'Lessons happen live over video, so there is no travel across the river or the city.',
    cells: [
      { h3: 'Teacher-led', p: 'Every lesson is run live, with code checked as learners write it.' },
      { h3: 'Term-time rhythm', p: 'Classes match the WA school terms and break for the holidays.' },
      { h3: 'Free first session', p: 'One trial lesson, then a short written plan.' },
      { h3: 'Group or solo', p: 'Groups of fifteen to twenty at one level, or private lessons.' },
      { h3: 'Twice weekly', p: 'Two lessons each week, about eight a month.' },
      { h3: 'Clock check', p: 'A 4pm Fremantle lesson begins at 1:30pm in India, all year.' }
    ],
    spec: {
      title: 'No clock changes',
      p: 'The IANA time zone database shows Western Australia last ended daylight saving in March 2009, so the gap with India stays at two and a half hours.'
    }
  },
  fees: {
    h2: 'Fremantle class fees',
    intro: 'One fee table for every learner.',
    first: 'The trial lesson is free and includes a plan.',
    group: 'Group lessons: around eight a month, with fifteen to twenty learners.',
    private: 'Private lessons: around eight a month with a dedicated teacher.',
    closer: 'Fremantle fees are in US dollars and start only after the trial has fixed a course and a weekly slot. Holiday and missed-lesson rules are on the pricing page.'
  },
  reviewsH2: 'Reviews from families on Google',
  book: {
    h2: 'Book a free Fremantle lesson',
    intro: 'Share the learner\'s age and interests. A child might make matching translation cards; a teenager might write the Fremantle adapter.',
    success: 'Thank you. We will be in touch about a Fremantle lesson.'
  },
  faq: {
    h2: 'Fremantle vibe coding and agents questions',
    intro: 'Questions from Fremantle families and adult learners.',
    items: [
      {
        q: 'How many people live in the City of Fremantle?',
        a: 'The 2021 Census counted 31,930 residents, with a median age of 42. The ABS estimate for 2025 is 37,542.'
      },
      {
        q: 'What is an adapter in programming?',
        a: 'A small piece of code that converts data from one shape into another, so the rest of a program, or an agent, only has to understand one format.'
      },
      {
        q: 'Why not just use a default of zero?',
        a: 'Because a missing count and a count of zero mean different things. In Fremantle, two new path counters would be reported as unused.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Building software by describing what you want to an AI assistant and steering its drafts. Our classes add the reading and testing that keep the result correct.'
      },
      {
        q: 'Are agents safe for children to use?',
        a: 'Younger learners work with guided, age-appropriate tools in class. Open agent tools come later, under supervision and within each tool\'s age rules.'
      },
      {
        q: 'How many bike counters are in Fremantle?',
        a: 'Main Roads lists 7 permanent bicycle counters in the City of Fremantle, five of them with counts in the data downloaded on 12 October 2026.'
      },
      {
        q: 'Do you have a centre in Fremantle?',
        a: 'No. All lessons are live online, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Fremantle classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who will my child learn with?',
        a: 'Fifteen to twenty learners matched by level and pace, not by age or suburb. One-to-one lessons are there when no group time fits.',
        boiler: true
      },
      { q: 'Can adults learn about agents?', a: 'Yes. Adults join adult groups or private lessons and often build agents around their own tools at work.' }
    ]
  },
  next: {
    eyebrow: 'More for Perth learners',
    h2: 'Where to go next',
    html: 'Read the <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">Perth page</a> for the city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">Western Australia guide</a> for the state, or <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">thinking, not just using AI tools</a> for the habits behind this project.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Fremantle and Perth',
  footerPlaces: [
    { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Think, not just use AI' },
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/coding-classes-for-kids-perth', label: 'Kids in Perth' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-frmt .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3vw, 2.4rem); }
.cg-root.cg-frmt .cg-hero h1 { font-weight: 610; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-frmt .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-frmt .cg-eyebrow { letter-spacing: 0.13em; font-weight: 600; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-frmt .cg-section-head h2 { max-width: 18ch; }
.cg-root.cg-frmt .cg-grid-3 { gap: clamp(1.1rem, 2.9vw, 1.9rem); }
.cg-root.cg-frmt .cg-table caption { text-align: left; font-weight: 650; font-size: 0.86rem; }
.cg-root.cg-frmt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-frmt .cg-ladder-col { border-left: 2px dashed var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-frmt .cg-callout { border-radius: 10px; }
`,
  dossier: {
    curriculumAuthority: 'City of Fremantle (LGA53430), ABS Census 2021 QuickStats (read 12 October 2026): 31,930 people; median age 42; 15,687 private dwellings; 2.2 people per household; 2.8 bedrooms per dwelling; semi-detached 2,932 (22.3%, WA 13.0%); flat or apartment 2,154 (16.4%, WA 6.5%); walked to work 661 (4.0%, WA 2.2%); professionals 6,213 (37.5%, WA 22.0%); aged 5-9 1,449 (4.5%, WA 6.5%); bachelor or higher 39.2% (WA 23.8%). ABS ERP 2025 (LGA 53430): 37,542. ABS LGA area 19.2892 sq km. Main Roads Traffic Digest: 46 sites, 27 roads with LG_NAME Fremantle (C); Stirling Hwy North of Stirling Bridge MON_SUN 36,707 (2023/24). Bike Count Sites: 7 in Fremantle (C), 2 commissioned 21 July 2026 with no counts; South Beach RSP N of Douro Rd combined 359 (174 to Fremantle, 185 to Coogee); Stirling Hwy RSP at Stirling Bridge combined 703, weekday 619, weekend 911. 11 government schools inside the LGA polygon (our test). WA 2027 Term 3: Monday 19 July to Friday 24 September. Perth +8:00, last DST ended March 2009 (IANA 2026e).',
    localProject: 'Adapter over Main Roads Traffic Digest (46 Fremantle rows) and Bike Count Sites (7 rows): 10 shared field names, none a volume; 8 traffic-only, 12 bike-only fields. row["MON_SUN"]: KeyError on 7 bike rows. row.get("MON_SUN", 0): 7 bike counters score 0. Adapter: 46 vehicle + 5 bike ranked, 2 no count yet (None). Mixed ranking puts busiest bike counter (703) 45th of 51. Bike weekend/weekday: 1.404, 1.136, 1.472, 1.218, 0.815 (4 of 5 above 1); vehicles median 0.908, 12 of 45 above 1. Our scripts. Script: scratchpad au/b13/a_frmt.py.',
    requiredMentions: ['37,542', '15,687', '22.3% (2,932)', '16.4% (2,154)', 'COMBINED_DIRECTION_MON_SUN', '703 riders', '0.908', '36,707', 'Douro Road'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Fremantle local government area (LGA53430), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA53430'
      },
      {
        claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Fremantle LGA 53430, total persons, 2025.',
        url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.53430.LGA2025.A?format=csvfilewithlabels'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Main Roads Western Australia, Traffic Digest (count sites with average weekday, weekend and all-day volumes and heavy vehicle shares for the latest count year), Creative Commons Attribution 4.0, downloaded 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/mrwa-traffic-digest'
      },
      {
        claim: 'Main Roads Western Australia, Bike Count Sites (permanent counters with volumes by direction for the latest count year), Creative Commons Attribution 4.0, downloaded 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/mrwa-bike-count-sites'
      },
      {
        claim: 'WA Department of Education, Western Australian Schools Lists (Excel), currently active schools with student numbers as at the 2026 Semester 1 census, Creative Commons Attribution 4.0, downloaded 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/western-australian-schools-lists'
      },
      {
        claim: 'WA Department of Education, future term dates: 2027 Term 1 Monday 1 February to Friday 9 April; Term 3 Monday 19 July to Friday 24 September.',
        url: 'https://www.education.wa.edu.au/future-term-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Perth at +8:00 on rule AW, whose last daylight saving period ended on the last Sunday of March 2009.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Adding vehicle and bike volumes into one movement total: not done; different measures and published parts are never summed.',
      'Riders per year or trends over time: not claimed; the layers give averages for each site\'s latest count year.',
      'Fremantle suburb (SAL) figures: the page uses the council area only.',
      'Naming individual schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the City of Fremantle, Main Roads WA or the WA Department of Education.'
    ]
  }
};
