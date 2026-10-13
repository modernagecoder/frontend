'use strict';
// Gungahlin, Canberra (cg- district page, Australia cluster Phase 8, row 328). Keyword slug vibe-coding-and-ai-agents-classes-in-*,
// district page (ABS SA3 80104 Gungahlin) under Canberra and the ACT.
// Spine: an agent's calendar tool built on recurrence rules (iCalendar RRULE via python-dateutil 2.9.0) for bin collections in the
// 16 Gungahlin suburbs listed by ACT NOWaste. Rules anchored on the published next dates pass every check; a fortnight anchored on
// the garbage date is wrong for the 12 week-B suburbs. ACT-wide the simple week-letter rule holds for 93 of 119 rows on 13 October
// 2026 (24 Monday suburbs have already rolled to next week). Script: scratchpad au/b16/a_gung.py. Lesson family: recurrence rules.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'GUNGAHLIN',
    label: 'Gungahlin, Canberra',
    blurb: 'Vibe coding and AI agent classes for Gungahlin, where an agent learns to put bin days into a calendar with recurrence rules instead of guesswork.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-gungahlin-canberra',
  code: 'gung',
  accent: '#145D43',
  accentRationale: 'Gungahlin: a muted grassland green (hue 158.6, s 0.78, v 0.36), at least 24.7 RGB from every ACT and Canberra page accent, 12.4 from other AU accents and 7.5 from every other site colour; 6.4:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Gungahlin',
    eyebrow: 'Gungahlin district, north Canberra, ACT',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Gungahlin' },
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
  routeLabel: 'Gungahlin, Canberra',
  title: 'Vibe Coding and AI Agents Classes in Gungahlin, Canberra',
  description: 'Live online vibe coding and AI agent classes for Gungahlin, ages 6 to adult, with an agent project that turns ACT bin collection data into checked calendar rules.',
  ogDescription: 'An agent that adds Gungahlin bin days to a calendar: right for all 16 suburbs with proper recurrence rules, wrong for 12 with a lazy shortcut.',
  twitterDescription: 'AI agents and vibe coding for Gungahlin learners, taught live online with a free first lesson.',
  ogImageCourse: 'codex-and-claude-code-ai-coding-agents-course-for-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Gungahlin',
    description: 'Lessons on AI agents, vibe coding and Python for Gungahlin children, teenagers and adults, matched by level and taught live over video.'
  },
  h1: 'Vibe coding and AI agents classes in Gungahlin',
  capsuleQ: 'What does the Gungahlin agent project build?',
  capsule: 'A calendar helper that answers "which bin goes out this week?" for any Gungahlin suburb. Instead of letting a language model reason about fortnights, the agent calls a tool that expands recurrence rules, the same format phone calendars use. Learners check every rule against published ACT dates, and find the shortcut that breaks for 12 suburbs.',
  lead: 'Gungahlin is a young district: its median age at the 2021 Census was 32, more than half of its families were couples with children, and 2.8% of its workers rode light rail to work. Its suburbs all run on a weekly garbage collection and alternating fortnights for recycling and green waste, which is exactly the kind of schedule AI tools get wrong.',
  wa: 'Hi Modern Age Coders, we are in Gungahlin and would like a free AI agents or vibe coding lesson.',
  picks: {
    eyebrow: 'Course picks for Gungahlin',
    h2: 'Agents, vibe coding and Python',
    intro: 'Courses that suit the calendar-tool project below. The free trial chooses the level.',
    items: [
      {
        course: 'codex-and-claude-code-ai-coding-agents-course-for-teens',
        band: 'Ages 13 to 17',
        note: 'Coding agents for teenagers, with tools and tests written by hand.'
      },
      { course: 'complete-generative-ai-masterclass-college', band: 'University and adult', note: 'Tool calling and checking agent output against data.' },
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Projects drafted with an assistant, then tested properly.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python, including dates and simple schedules.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Gungahlin in the 2021 Census',
      h2: 'Young families and the light rail',
      intro: 'Figures for the Gungahlin statistical area (ABS SA3 80104), from Census QuickStats read on 13 October 2026, with the ABS estimate for 2025.',
      body: [
        {
          kind: 'table',
          caption: 'Gungahlin district counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents, 2021 Census', '87,682'],
            ['Estimated residents, 2025', '94,130'],
            ['Median age', '32'],
            ['Families', '23,748'],
            ['Private dwellings', '31,952'],
            ['People per household', '2.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Gungahlin shares compared with the ACT',
          head: ['Share', 'Gungahlin', 'ACT'],
          rows: [
            ['Couple families with children', '54.5% (12,944)', '45.3%'],
            ['Residents aged 5 to 9', '8.3% (7,314)', '6.4%'],
            ['Tram or light rail to work', '2.8% (1,396)', '0.9%'],
            ['Drove a car to work', '64.1% (31,749)', '59.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'One Gungahlin resident in twelve was aged 5 to 9, well above the ACT share of 6.4%.' },
            { h3: 'Rail commuters', p: 'Light rail carried 2.8% of Gungahlin workers to work on Census day, about three times the territory share.' },
            { h3: 'Two figures', p: 'The Census count of 87,682 and the 2025 estimate of 94,130 use different methods; we show both without subtracting.' }
          ]
        },
        {
          kind: 'p',
          text: 'The Census was held during the pandemic, so travel answers reflect that week. ABS figures are rounded and small counts are lightly adjusted, so parts of a table may not add up to its total; we quote them as published.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Bin days as recurrence rules',
      intro: 'ACT NOWaste publishes, for each suburb, its collection day, a week letter A or B, and the next date for garbage, recycling and green waste. Sixteen Gungahlin suburbs are listed. The agent\'s tool turns those facts into three rules: garbage every week, recycling every second week, green waste every second week, each starting from its published next date.',
      body: [
        {
          kind: 'table',
          caption: 'Checks on the 16 Gungahlin suburbs (our script, data read 13 October 2026)',
          head: ['Check', 'Suburbs passing'],
          rows: [
            ['Next garbage date falls on the stated collection day', '16 of 16'],
            ['Week A means recycling this week, week B means green waste', '16 of 16'],
            ['Recycling and green waste never share a week', '16 of 16'],
            ['Shortcut: count fortnights from the garbage date', '4 of 16']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The shortcut',
              p: 'Starting every fortnight on the garbage date assumes recycling goes out first. That is only true in week A suburbs, so the shortcut is wrong for all 12 week B suburbs.'
            },
            {
              h3: 'A year of events',
              p: 'For the suburb of Gungahlin itself, the rules produce 53 garbage days, 26 recycling days and 27 green waste days up to 15 October 2027, with no clashes.'
            },
            { h3: 'Two days a week', p: 'Eleven of the listed suburbs collect on Wednesday and five on Friday. Mitchell does not appear in the list at all.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Letters are relative, dates are not',
          p: 'Across all 119 ACT rows, the simple letter rule held for only 93 on 13 October. Twenty-four Monday suburbs had already had their pickup, so their next dates belong to the following week and the letter points the wrong way. An agent that trusts dates rather than letters stays right whatever day it is asked.'
        },
        {
          kind: 'p',
          text: 'Collection data come from the ACT NOWaste suburb list on data.act.gov.au, licensed CC BY 4.0. The rules were expanded with python-dateutil 2.9.0; every check and count is our own. The data do not mention public holidays, so the agent says so instead of guessing changes.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Building the tool',
      h2: 'A deterministic tool behind a chatty agent',
      intro: 'The agent handles the question; the tool does the date arithmetic. That split is the lesson.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Load the 16 Gungahlin rows and print the day, letter and three next dates.'],
            ['2', 'Write rrule(WEEKLY) and rrule(WEEKLY, interval=2) generators anchored on the published dates.'],
            ['3', 'Test the three checks above, then try the garbage-date shortcut and count failures.'],
            ['4', 'Expose the tool to an agent and require it to quote the source date in every answer.']
          ]
        },
        {
          kind: 'p',
          text: 'Step 4 turns a calendar script into a trustworthy agent. The tool returns structured dates, and the agent may only phrase them, never compute them. Learners also export the rules as iCalendar text so a family can subscribe in a phone calendar, then compare two weeks of events with the published list.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Colour a calendar with alternating weeks and spot the pattern before coding it in blocks.' },
            { h3: 'Teenagers', p: 'Build the rule tool in Python and connect it to an agent that explains its answer.' },
            { h3: 'Adults', p: 'Use recurrence rules for rosters, reminders and maintenance schedules at work.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Gungahlin',
      h2: 'Sculptures, trees and 2027 dates',
      intro: 'Local details from ACT Government open data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Public art',
              p: 'The ACT artwork list records 131 pieces in Gungahlin suburbs, 87 of them sculptures, more artworks than any other Canberra district.'
            },
            { h3: 'Exotic majority', p: 'Of 100,434 public tree records in the district, 39,727 are labelled exotic and 32,886 native, the rest unlabelled.' },
            { h3: 'Term 3, 2027', p: 'ACT public schools run Term 3 from Tuesday 20 July to Friday 24 September 2027.' }
          ]
        },
        {
          kind: 'spec',
          title: 'District used',
          p: 'Gungahlin is the ABS statistical area of about 91.9 square kilometres. We assign 17 named suburbs to it by testing ABS suburb outlines against that boundary.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From coloured calendars to agent tools',
    intro: 'Ages guide the start; the trial lesson confirms it.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Patterns in time',
        p: 'Scratch projects with repeating events and timers.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI',
        p: 'Dates, loops and a realistic view of AI.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Agents',
        p: 'Tools, tests and agents that cite their data.',
        courses: ['codex-and-claude-code-ai-coding-agents-course-for-teens', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Agents at work',
        p: 'Generative AI and coding agents for real tasks.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'Why not let the model work out the dates?',
    intro: 'Because fortnight arithmetic is exactly where language models slip.',
    p1: 'A model asked about bin day may confuse this week with next, or count fortnights from the wrong start, and answer fluently either way. The shortcut in our table is the kind of error it makes.',
    p2: 'Gungahlin learners build agents that hand every calculation to a tested tool and quote the date it came from. That habit applies far beyond bins.',
    closer: 'In our agent classes, the model talks and the tools compute.',
    blogAnchor: 'is coding still worth learning in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons for Gungahlin',
    intro: 'Classes run on video, so learners join from home across the district.',
    cells: [
      { h3: 'Teacher-led', p: 'Every lesson is live, with questions answered as code is written.' },
      { h3: 'ACT calendar', p: 'Lessons follow ACT school terms and stop for holidays.' },
      { h3: 'Trial first', p: 'A free lesson, then a short written plan.' },
      { h3: 'Group sizes', p: 'Fifteen to twenty learners at a level, or private sessions.' },
      { h3: 'Weekly rhythm', p: 'Two lessons a week, about eight a month.' },
      { h3: 'India hours', p: 'During daylight saving a 6pm Gungahlin lesson is 12:30pm in India.' }
    ],
    spec: {
      title: 'Daylight saving',
      p: 'Canberra uses Sydney time in the IANA database, with daylight saving from 4 October 2026 to 4 April 2027, so the gap with India moves between five and a half and four and a half hours.'
    }
  },
  fees: {
    h2: 'Gungahlin fees',
    intro: 'Every learner pays the same fees.',
    first: 'The first lesson is free, with a plan to follow.',
    group: 'Groups: around eight lessons monthly, fifteen to twenty learners.',
    private: 'Private: around eight lessons monthly with one teacher.',
    closer: 'Fees are in US dollars and begin only after the trial has settled a course and weekly time. See the pricing page for holidays and missed lessons.'
  },
  reviewsH2: 'Reviews from Google',
  book: {
    h2: 'Book a free Gungahlin lesson',
    intro: 'Tell us the learner\'s age and interests. A child might colour an alternating-week calendar; a teenager might build the bin-day tool.',
    success: 'Thank you. We will contact you about a Gungahlin lesson.'
  },
  faq: {
    h2: 'Gungahlin agents and vibe coding questions',
    intro: 'Questions Gungahlin families and adult learners ask.',
    items: [
      {
        q: 'What is the population of Gungahlin?',
        a: 'The 2021 Census counted 87,682 people in the Gungahlin district, median age 32. The ABS estimate for 2025 is 94,130.'
      },
      {
        q: 'What is a recurrence rule?',
        a: 'A compact description of a repeating event, such as every second Wednesday from a given date. Phone calendars use the iCalendar RRULE format.'
      },
      {
        q: 'Why give an agent a tool instead of letting it answer?',
        a: 'Tools give the same correct result every time and can be tested. Language models can phrase answers well but slip on date arithmetic.'
      },
      {
        q: 'Do the rules handle public holidays?',
        a: 'The published data do not say how holidays change collections, so the agent reports that rather than inventing changes.'
      },
      { q: 'Can children learn about agents?', a: 'Younger learners start with patterns and block code. Building agents usually begins in the teenage years.' },
      { q: 'Which days are bins collected in Gungahlin?', a: 'In the ACT NOWaste list, 11 Gungahlin suburbs collect on Wednesday and 5 on Friday.' },
      {
        q: 'Do you have a centre in Gungahlin?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Gungahlin classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are groups organised?',
        a: 'By level and pace, fifteen to twenty learners, not by age or suburb. One-to-one lessons are there when no group time fits.',
        boiler: true
      },
      { q: 'Can adults learn to build agents?', a: 'Yes. Adults study in adult groups or privately, often automating schedules at work.' }
    ]
  },
  next: {
    eyebrow: 'More for Canberra learners',
    h2: 'Where to go next',
    html: 'Gungahlin belongs to our wider <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canberra">Canberra agents page</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-australian-capital-territory">ACT overview</a>. Parents of younger children can start with <a class="cg-inline-link" href="/coding-classes-for-kids-canberra">coding for Canberra kids</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Gungahlin and Canberra',
  footerPlaces: [
    { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Think, not just use AI' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canberra', label: 'Canberra' },
    { href: '/coding-and-ai-classes-in-australian-capital-territory', label: 'ACT' },
    { href: '/coding-classes-for-kids-canberra', label: 'Kids in Canberra' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-gung .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 2.9vw, 2.3rem); }
.cg-root.cg-gung .cg-hero h1 { font-weight: 620; letter-spacing: -0.021em; line-height: 1.08; }
.cg-root.cg-gung .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-gung .cg-eyebrow { letter-spacing: 0.12em; font-weight: 620; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-gung .cg-section-head h2 { max-width: 18ch; }
.cg-root.cg-gung .cg-grid-3 { gap: clamp(1.05rem, 2.8vw, 1.85rem); }
.cg-root.cg-gung .cg-table caption { text-align: left; font-weight: 640; font-size: 0.87rem; }
.cg-root.cg-gung .cg-table td:last-child { text-align: right; font-variant-numeric: tabular-nums; }
.cg-root.cg-gung .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.6rem; }
.cg-root.cg-gung .cg-callout { border-radius: 10px; }
`,
  dossier: {
    curriculumAuthority: 'Gungahlin SA3 80104, ABS Census 2021 QuickStats (read 13 October 2026): 87,682 people; median age 32; 23,748 families; 31,952 private dwellings; 2.9 people per household; couple families with children 12,944 (54.5%, ACT 45.3%); aged 5-9 7,314 (8.3%, ACT 6.4%); tram/light rail to work 1,396 (2.8%, ACT 0.9%); car as driver 31,749 (64.1%, ACT 59.0%). ABS ERP 2025 (SA3 80104): 94,130. ABS SA3 area 91.8779 sq km; 17 named suburbs by our SAL-centroid test. ACT open data (CC BY 4.0, 13 October 2026): artworks 131 in Gungahlin suburbs (87 sculptures), the most of the eight districts; tree records 100,434 (39,727 exotic, 32,886 native); ACT NOWaste list 16 Gungahlin suburbs (Mitchell absent), 11 Wednesday, 5 Friday, 4 week A, 12 week B. ACT 2027 Term 3 Tuesday 20 July to Friday 24 September. Canberra = Australia/Sydney (IANA 2026e), DST 4 October 2026 to 4 April 2027.',
    localProject: 'Recurrence rules with python-dateutil 2.9.0 on ACT NOWaste rows read 13 October 2026. Gungahlin 16 suburbs: garbage date weekday matches stated day 16/16; week A = recycling date equals garbage date 16/16; recycling and green dates differ 16/16; fortnight anchored on garbage date matches the published recycling date for 4/16 (wrong for 12 week B suburbs). Suburb of Gungahlin to 15 October 2027: 53 garbage, 26 recycling, 27 green, 0 clashes. ACT-wide letter rule 93 of 119 rows (24 Monday suburbs rolled to next week, 2 other inconsistent rows). Our script. Script: scratchpad au/b16/a_gung.py.',
    requiredMentions: [
      '94,130',
      '31,952',
      '54.5% (12,944)',
      '2.8% (1,396)',
      'week B suburbs',
      '93 on 13 October',
      'python-dateutil 2.9.0',
      '87 of them sculptures',
      '100,434'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Gungahlin statistical area level 3 (SA3 80104), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/80104'
      },
      {
        claim: 'ABS Data API, Estimated Resident Population by ASGS 2021 regions (ABS_ANNUAL_ERP_ASGS2021), SA3 80104 Gungahlin, 2025.',
        url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_ASGS2021,1.2.0/ERP.SA3.80104.A?startPeriod=2024&format=csvfilewithlabels'
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
        claim: 'ACT Government open data, ACT Suburb Next Garbage, Recycling and Green Waste Collection Dates (data.act.gov.au jzzy-44un), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/jzzy-44un'
      },
      {
        claim: 'ACT Government open data, ACTGOV Artwork Assets (data.act.gov.au a69k-qah8), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/a69k-qah8'
      },
      {
        claim: 'ACT Government open data, ACTGOV Tree Assets (data.act.gov.au 9qch-rvqr), Creative Commons Attribution 4.0, grouped counts by suburb queried 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/9qch-rvqr'
      },
      {
        claim: 'python-dateutil 2.9.0 documentation, rrule module (iCalendar RFC 5545 recurrence rules).',
        url: 'https://dateutil.readthedocs.io/en/stable/rrule.html'
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
      'Public holiday changes to collections: not claimed; the dataset does not state them.',
      'Light rail patronage or service frequency: not claimed; Transport Canberra developer pages returned 403 and were not used.',
      'Gungahlin suburb (SAL) Census figures: not used; the page uses the SA3 district.',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the ACT Government, ACT NOWaste or Transport Canberra.'
    ]
  }
};
