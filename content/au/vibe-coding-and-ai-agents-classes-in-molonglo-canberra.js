'use strict';
// Molonglo, Canberra (cg- district page, Australia cluster Phase 8, row 332). Keyword slug vibe-coding-and-ai-agents-classes-in-*,
// district page (ABS SA3 80110 Molonglo) under Canberra and the ACT.
// Spine: push-down aggregation for an agent. Counting ACT Government tree records in the five Molonglo suburbs by downloading rows
// took 22 API calls, 17,689,823 bytes and 107.6 seconds (21,041 rows); one call without paging returns 1,000 rows; asking the
// Socrata API to group and count took 1 call, 192 bytes and 1.4 seconds with the same totals. Measured 13 October 2026.
// Script: scratchpad au/b16/a_molo.py. Lesson family: push-down aggregation; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MOLONGLO',
    label: 'Molonglo, Canberra',
    blurb: 'Vibe coding and AI agent classes for Molonglo, where an agent learns to ask the data service for a count instead of downloading 17.7 megabytes to make one.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-molonglo-canberra',
  code: 'molo',
  accent: '#5A1515',
  accentRationale: 'Molonglo: a muted deep red earth (hue 0.0, s 0.77, v 0.35), at least 68.9 RGB from every ACT and Canberra page accent, 12.4 from other AU accents and 7.5 from every other site colour; 11.0:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Molonglo',
    eyebrow: 'Molonglo Valley district, west Canberra, ACT',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Molonglo' },
      { type: 'City', name: 'Canberra' },
      { type: 'AdministrativeArea', name: 'Australian Capital Territory' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-australian-capital-territory', name: 'Australian Capital Territory' },
    { slug: 'vibe-coding-and-ai-agents-classes-in-canberra', name: 'Canberra' }
  ],
  nav: [
    { label: 'Canberra', href: '/vibe-coding-and-ai-agents-classes-in-canberra' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Molonglo, Canberra',
  title: 'Vibe Coding and AI Agents Classes in Molonglo, Canberra',
  description: 'Live online vibe coding and AI agent classes for Molonglo Valley, ages 6 to adult, with an agent project measuring smart and wasteful ways to query ACT open data.',
  ogDescription: 'Counting Molonglo\'s public tree records: 22 calls and 17.7 MB the naive way, one call and 192 bytes when the agent lets the server count.',
  twitterDescription: 'AI agents and vibe coding for Molonglo learners, live online with a free trial lesson.',
  ogImageCourse: 'complete-generative-ai-masterclass-college',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Molonglo',
    description: 'Agent, vibe coding and Python lessons for children, teenagers and adults in Molonglo Valley, set by level after a free trial.'
  },
  h1: 'Vibe coding and AI agents classes in Molonglo',
  capsuleQ: 'What does the Molonglo agent project teach?',
  capsule: 'That an agent should push work to the tool built for it. Asked how many public trees each Molonglo suburb has, an agent can download every record and count, or ask the ACT data service to count. We measured both: 22 calls and 17.7 megabytes against one call and 192 bytes, with identical answers.',
  lead: 'Molonglo Valley is a young district of five suburbs west of the city, from Wright and Coombs to Denman Prospect and Whitlam. Its population is rising fast and its public records grow with every new street. That makes it a good place to teach an AI agent to ask data services clever questions instead of bulk-downloading.',
  wa: 'Hi Modern Age Coders, could we try a free AI agents or vibe coding lesson for a Molonglo learner?',
  picks: {
    eyebrow: 'Course picks for Molonglo',
    h2: 'Agents, APIs and Python',
    intro: 'Courses that build the skills behind the query project. The trial lesson sets the starting point.',
    items: [
      { course: 'complete-generative-ai-masterclass-college', band: 'University and adult', note: 'Agents that call APIs and check what comes back.' },
      {
        course: 'codex-and-claude-code-ai-coding-agents-course-for-teens',
        band: 'Ages 13 to 17',
        note: 'Coding agents for teenagers, with every tool call reviewed.'
      },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Requests, JSON and simple counting in Python.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 6 to 12', note: 'First steps building with AI help, in blocks.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Molonglo in the Census',
      h2: 'A new district, growing quickly',
      intro: 'Figures for the Molonglo statistical area (ABS SA3 80110) from the 2021 Census QuickStats, read on 13 October 2026, with the latest two ABS estimates.',
      body: [
        {
          kind: 'table',
          caption: 'Molonglo counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents, 2021 Census', '11,435'],
            ['Estimated residents, 2024', '16,180'],
            ['Estimated residents, 2025', '18,064'],
            ['Median age', '31'],
            ['Private dwellings', '4,601'],
            ['Bedrooms per dwelling', '3.0']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Molonglo shares compared with the ACT',
          head: ['Share', 'Molonglo', 'ACT'],
          rows: [
            ['Flat or apartment', '35.2% (1,471)', '19.4%'],
            ['Bachelor degree or higher', '55.5% (4,866)', '42.9%'],
            ['Residents aged 5 to 9', '8.9% (1,023)', '6.4%'],
            ['Professionals among workers', '39.0% (2,726)', '31.4%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Growth',
              p: 'Between the ABS estimates for 2024 and 2025, Molonglo grew by 1,884 residents, about 12% in one year, by far the fastest of the districts on our pages.'
            },
            { h3: 'Mixed housing', p: 'Separate houses made up only 40.8% of dwellings in 2021, with apartments and townhouses taking most of the rest.' },
            { h3: 'Young families', p: 'Couples with children were 51.2% of families, and almost one resident in eleven was aged 5 to 9.' }
          ]
        },
        {
          kind: 'p',
          text: 'Because the district has grown so fast, the 2021 Census already describes a smaller place. It was also held during the pandemic. ABS shares are rounded and small counts adjusted, so we copy the published figures and compare only like with like.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Let the data service do the counting',
      intro: 'An agent is asked: how many public tree records does each Molonglo suburb have, and how many are native? It has one tool, the ACT open data API for the tree asset list. A naive agent downloads matching records page by page and counts them itself. A better agent sends a single query that groups and counts on the server. We ran both on 13 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Three ways to answer the same question (our measurement)',
          head: ['Approach', 'Calls', 'Data moved', 'Time', 'Answer'],
          rows: [
            ['Download every record, 1,000 per page', '22', '17,689,823 bytes', '107.6 s', '21,041 records'],
            ['One call, no paging', '1', '838,642 bytes', 'not timed', '1,000 records, wrong'],
            ['Group and count on the server', '1', '192 bytes', '1.4 s', '21,041 records']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Same totals',
              p: 'Both complete methods agree: Denman Prospect 6,938 records, Coombs 5,018, Whitlam 4,842, Wright 4,058 and the suburb of Molonglo 185.'
            },
            {
              h3: 'Native and exotic',
              p: 'One more grouped call of 847 bytes splits each suburb by label. Denman Prospect has 4,800 exotic records against 1,511 native.'
            },
            {
              h3: 'Why it matters',
              p: 'Agents pay for every byte they read, in time, money and context space. Pushing the aggregation down cut the data moved by a factor of about 92,000.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The quiet wrong answer',
          p: 'The middle row is the dangerous one. The API returns 1,000 records by default, and an agent that counts them reports 1,000 trees for the whole district with total confidence. Pushing the count to the server avoids the trap because the server counts everything that matches.'
        },
        {
          kind: 'p',
          text: 'Records come from the ACTGOV Tree Assets dataset on data.act.gov.au, licensed CC BY 4.0, queried through its public API. Calls, bytes and times are our own measurements on one connection and will differ elsewhere; the counts themselves come from the data.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Teaching the agent',
      h2: 'Describe the tool so the agent uses it well',
      intro: 'The fix is mostly in the tool description: tell the agent that the API can filter, group and count, and show one example query.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Write a tool that fetches tree records for a list of suburbs, page by page.'],
            ['2', 'Measure calls, bytes and seconds for the Molonglo question.'],
            ['3', 'Add a second tool that sends a grouped count query, and measure again.'],
            ['4', 'Give an agent both tools and check which one it chooses for five questions.']
          ]
        },
        {
          kind: 'p',
          text: 'In step 4 learners discover that the description of a tool shapes the agent\'s choices as much as the code does. A count question should go to the grouped tool, while a request to list the native trees on one street still needs records. Writing those two cases into the descriptions, and testing them, is the craft.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Ask a librarian for "how many dinosaur books" instead of carrying every book to the table to count.' },
            { h3: 'Teenagers', p: 'Build both tools in Python and log every call the agent makes.' },
            { h3: 'Adults', p: 'Push filtering and aggregation into databases and APIs before data reach an agent at work.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Molonglo',
      h2: 'Sculptures, shelters and Monday bins',
      intro: 'Local details from ACT Government open data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Sculpture valley', p: 'Of the 49 artworks recorded in Molonglo suburbs, 45 are sculptures.' },
            { h3: 'Shelters', p: 'The ACT shelter list places 85 shelters in the district, more than in Woden, Weston Creek or North Canberra.' },
            { h3: 'Bin day', p: 'All five Molonglo suburbs in the ACT NOWaste list collect garbage on a Monday.' }
          ]
        },
        {
          kind: 'spec',
          title: 'District used',
          p: 'Molonglo is the ABS statistical area of about 27.2 square kilometres; our test assigns five named suburbs to it. In 2027, ACT Term 3 runs from Tuesday 20 July to Friday 24 September.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From library questions to API queries',
    intro: 'Ages give a starting point; the trial decides.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Ask, then build',
        p: 'Scratch and AI-assisted games built step by step.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and data',
        p: 'Lists, counts and first web requests.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Agents',
        p: 'Tools, APIs and agents that justify their calls.',
        courses: ['codex-and-claude-code-ai-coding-agents-course-for-teens', 'vibe-coding-for-teens-python-web-ai-projects-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Agents at work',
        p: 'Efficient, auditable agents for real systems.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'Will agents learn this on their own?',
    intro: 'Only if their tools are described well, and someone checks.',
    p1: 'Left alone, many agents fetch first and think later, because downloading feels safe. On a small table that costs nothing; on 21,041 records it costs 17.7 megabytes, and without paging it silently gives the wrong total.',
    p2: 'Molonglo learners measure the cost of each plan and design tools that make the efficient plan the obvious one. That is engineering, not prompting.',
    closer: 'Our agent classes measure what agents do, not just what they say.',
    blogAnchor: 'why programming still repays the effort'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Molonglo lessons run',
    intro: 'All lessons are live online, so families join from home anywhere in the valley.',
    cells: [
      { h3: 'Live teaching', p: 'A teacher leads and checks each learner\'s work in real time.' },
      { h3: 'ACT calendar', p: 'Lessons pause in ACT school holidays.' },
      { h3: 'Free trial', p: 'Start with one free lesson and a plan.' },
      { h3: 'Group or solo', p: 'Level groups of five to ten, or private lessons.' },
      { h3: 'Rhythm', p: 'Two lessons a week, about eight a month.' },
      { h3: 'India time', p: 'From April to October a 6pm Molonglo lesson is 1:30pm in India.' }
    ],
    spec: {
      title: 'Time zone',
      p: 'Molonglo keeps Canberra time, which the IANA database links to Sydney: daylight saving from the first Sunday in October to the first Sunday in April.'
    }
  },
  fees: {
    h2: 'Molonglo fees',
    intro: 'The same fees apply to every learner.',
    first: 'The opening lesson is free and ends with a plan.',
    group: 'Group classes: around eight a month, five to ten learners.',
    private: 'One-to-one: around eight a month with a single teacher.',
    closer: 'Fees are charged in US dollars once the trial has fixed a course and weekly time. The pricing page sets out holiday and missed-lesson rules.'
  },
  reviewsH2: 'Reviews from families',
  book: {
    h2: 'Book a free Molonglo lesson',
    intro: 'Tell us the learner\'s age and interests. A child might play the librarian game; a teenager might build the two tree-count tools.',
    success: 'Thank you. We will be in touch about a Molonglo lesson.'
  },
  faq: {
    h2: 'Molonglo agents and vibe coding questions',
    intro: 'Questions from Molonglo families and adult learners.',
    items: [
      { q: 'How many people live in Molonglo?', a: 'The 2021 Census counted 11,435 people. The ABS estimates 16,180 for 2024 and 18,064 for 2025.' },
      {
        q: 'What is push-down aggregation?',
        a: 'Sending a counting or summing query to the database or API that holds the data, so only the small answer travels back.'
      },
      {
        q: 'Why did one call return only 1,000 records?',
        a: 'The ACT open data API returns 1,000 rows unless asked for more, so an agent that does not page or count on the server undercounts.'
      },
      { q: 'Does a smarter model fix this?', a: 'Not by itself. The tools and their descriptions decide what an agent can do efficiently.' },
      {
        q: 'Can children learn about agents?',
        a: 'Younger learners start with block coding and AI-assisted projects; building agents usually starts in the teens.'
      },
      { q: 'Which suburbs are in Molonglo?', a: 'Our test places five: Coombs, Denman Prospect, Molonglo, Whitlam and Wright.' },
      {
        q: 'Do you have a centre in Molonglo?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Molonglo classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are groups organised?',
        a: 'By level and pace, five to ten learners each, not by age or suburb. One-to-one lessons are available when no group time fits.',
        boiler: true
      },
      { q: 'Can adults build agents with you?', a: 'Yes. Adults learn in adult groups or one to one, often wiring agents to their own systems.' }
    ]
  },
  next: {
    eyebrow: 'More for Canberra learners',
    h2: 'Further reading',
    html: 'Molonglo families can explore the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canberra">Canberra agents page</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-australian-capital-territory">ACT guide</a> and <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">thinking, not just using AI tools</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Molonglo and Canberra',
  footerPlaces: [
    { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Think, not just use AI' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canberra', label: 'Canberra' },
    { href: '/coding-and-ai-classes-in-australian-capital-territory', label: 'ACT' },
    { href: '/coding-classes-for-kids-canberra', label: 'Kids in Canberra' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-molo .cg-hero-grid { align-items: start; gap: clamp(0.95rem, 2.4vw, 1.95rem); }
.cg-root.cg-molo .cg-hero h1 { font-weight: 640; letter-spacing: -0.023em; line-height: 1.06; }
.cg-root.cg-molo .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-molo .cg-eyebrow { letter-spacing: 0.095em; font-weight: 700; font-size: 0.8rem; }
.cg-root.cg-molo .cg-section-head h2 { max-width: 23ch; }
.cg-root.cg-molo .cg-grid-3 { gap: clamp(1.05rem, 2.6vw, 1.8rem); }
.cg-root.cg-molo .cg-table caption { text-align: left; font-weight: 655; font-size: 0.88rem; }
.cg-root.cg-molo .cg-table td { hyphens: auto; font-variant-numeric: tabular-nums; }
.cg-root.cg-molo .cg-ladder-col { border-left: 3px double var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-molo .cg-callout { border-radius: 12px; }
`,
  dossier: {
    curriculumAuthority: 'Molonglo SA3 80110, ABS Census 2021 QuickStats (read 13 October 2026): 11,435 people; median age 31; 3,100 families; 4,601 private dwellings; 3.0 bedrooms per dwelling; flat or apartment 1,471 (35.2%, ACT 19.4%); separate houses 1,704 (40.8%); bachelor or higher 4,866 (55.5%, ACT 42.9%); aged 5-9 1,023 (8.9%, ACT 6.4%); professionals 2,726 (39.0%, ACT 31.4%); couple families with children 1,588 (51.2%). ABS ERP (SA3 80110): 2024 16,180; 2025 18,064 (difference 1,884, 11.6%, our calculation; largest growth of the eight SA3s on these pages). ABS SA3 area 27.1507 sq km; 5 named suburbs by our SAL-centroid test. ACT open data (CC BY 4.0, 13 October 2026): artworks 49 (45 sculpture); shelters 85 (Woden 24, Weston Creek 16, North Canberra 30); ACT NOWaste 5 Molonglo suburbs, all Monday. ACT 2027 Term 3 Tuesday 20 July to Friday 24 September. Canberra = Australia/Sydney (IANA 2026e).',
    localProject: 'Socrata API for ACTGOV Tree Assets (9qch-rvqr), where suburb in Coombs, Denman Prospect, Molonglo, Whitlam, Wright, measured 13 October 2026: paging 1,000 rows per call 22 calls, 17,689,823 bytes, 107.6 s, 21,041 rows; one call without $limit 1,000 rows, 838,642 bytes; $select=suburb,count(*) $group=suburb 1 call, 192 bytes, 1.38 s: Coombs 5,018, Denman Prospect 6,938, Molonglo 185, Whitlam 4,842, Wright 4,058. Grouped by label 847 bytes: Denman Prospect exotic 4,800, native 1,511. Ratio of bytes about 92,000. Our measurement. Script: scratchpad au/b16/a_molo.py.',
    requiredMentions: [
      '18,064',
      '4,601',
      '35.2% (1,471)',
      '55.5% (4,866)',
      '17,689,823 bytes',
      '192 bytes',
      'Denman Prospect 6,938',
      '45 are sculptures',
      '1,884 residents'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Molonglo statistical area level 3 (SA3 80110), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/80110'
      },
      {
        claim: 'ABS Data API, Estimated Resident Population by ASGS 2021 regions (ABS_ANNUAL_ERP_ASGS2021), SA3 80110 Molonglo, 2025.',
        url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_ASGS2021,1.2.0/ERP.SA3.80110.A?startPeriod=2024&format=csvfilewithlabels'
      },
      {
        claim: 'ABS ASGS 2021 Statistical Area Level 3 boundary service (district outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SA3/MapServer'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines, used to place each suburb in a district).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'ACT Government open data, ACTGOV Tree Assets (data.act.gov.au 9qch-rvqr), Creative Commons Attribution 4.0, queried through the public API on 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/9qch-rvqr'
      },
      {
        claim: 'Socrata SODA API documentation, $limit parameter: "defaults to 1,000 records per request".',
        url: 'https://dev.socrata.com/docs/queries/limit.html'
      },
      {
        claim: 'ACT Government open data, ACTGOV Artwork Assets (data.act.gov.au a69k-qah8), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/a69k-qah8'
      },
      {
        claim: 'ACT Government open data, ACTGOV Shelter Assets (data.act.gov.au pf5q-vheg), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/pf5q-vheg'
      },
      {
        claim: 'ACT Government open data, ACT Suburb Next Garbage, Recycling and Green Waste Collection Dates (data.act.gov.au jzzy-44un), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/jzzy-44un'
      },
      {
        claim: 'ACT Government open data, ACT Education Public Holidays and Term Dates (data.act.gov.au 4kcq-44ad): 2027 Term 1 begins Monday 1 February (new students), Canberra Day Monday 8 March, Term 3 Tuesday 20 July to Friday 24 September, Term 4 Tuesday 12 October to Friday 17 December.',
        url: 'https://www.data.act.gov.au/d/4kcq-44ad'
      },
      {
        claim: 'IANA time zone database 2026e, backward file: Australia/Canberra links to Australia/Sydney.',
        url: 'https://data.iana.org/time-zones/tzdb/backward'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: rule AN, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Network speeds or API performance in general: not claimed; times are one measurement on one connection.',
      'Molonglo suburb (SAL) Census figures: not used; the page uses the SA3 district.',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the ACT Government.'
    ]
  }
};
