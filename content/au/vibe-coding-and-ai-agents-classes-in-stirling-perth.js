'use strict';
// Stirling, Perth (cg- district page, Australia cluster Phase 8, row 304). Keyword slug vibe-coding-and-ai-agents-classes-in-*,
// council page (ABS LGA57910, City of Stirling) under Perth and Western Australia. The suburb of Stirling (SAL51405) lies inside
// the council by our test; no suburb figures are used.
// Spine: place-name homonyms. An agent asked about traffic "in Stirling" with a keyword tool finds 34 Main Roads count sites whose
// road or description contains Stirling, in 12 councils, none in the City of Stirling (precision 0/34, recall 0/107). A council
// filter on LG_NAME returns all 107. Bike counters: keyword 3 (none in the City), filter 7. Script: scratchpad au/b13/a_strl.py.
// Lesson family: place-name homonyms for an agent's search tool; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'STIRLING',
    label: 'Stirling, Perth',
    blurb: 'Vibe coding and AI agent classes for the City of Stirling, where an agent searching for "Stirling" finds 34 traffic counters and not one of them is in Stirling.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-stirling-perth',
  code: 'strl',
  accent: '#9B475D',
  accentRationale: 'Stirling: a muted dusty rose (hue 344.3, s 0.54, v 0.61), at least 27.6 RGB from every WA page accent, 10.7 from other AU accents and 6.4 from every other site colour; 4.9:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Stirling',
    eyebrow: 'City of Stirling, northern suburbs of Perth, Western Australia',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Stirling' },
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
  routeLabel: 'Stirling, Perth',
  title: 'Vibe Coding and AI Agents Classes in Stirling, Perth',
  description: 'Stirling learners aged 6 to adult join live online vibe coding and AI agent lessons, with a project on place names that confuse agents, built on Main Roads data.',
  ogDescription: 'Ask an agent for traffic in Stirling and a keyword search returns 34 counters in 12 other councils. The City itself has 107.',
  twitterDescription: 'Agents and vibe coding for Stirling learners: taught live online, with a free trial lesson.',
  ogImageCourse: 'codex-and-claude-code-ai-coding-agents-course-for-teens',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Stirling',
    description: 'Lessons on AI agents, vibe coding and Python for Stirling families and adults, each learner placed by level, all taught live over video.'
  },
  h1: 'Vibe coding and AI agents classes in Stirling',
  capsuleQ: 'What goes wrong when an agent searches for Stirling?',
  capsule: 'It finds the wrong Stirling. A keyword search over Main Roads traffic counters matches Stirling Highway, Stirling Street and Stirling Crescent in other councils, 34 sites in all, and none inside the City of Stirling. A filter on the council field finds all 107. Learners build an agent that decides which Stirling a question means before it searches.',
  lead: 'The City of Stirling counted 226,369 residents in 2021, more than Joondalup, Wanneroo or Melville, and runs from the coast at Scarborough and North Beach inland to Mirrabooka and Dianella. Its name is shared by a highway, several streets, a suburb inside the council and much else across the state, which makes it the perfect place to teach an AI agent that a word is not a place.',
  wa: 'Hi Modern Age Coders, could we book a free trial lesson on AI agents or vibe coding for a Stirling learner?',
  picks: {
    eyebrow: 'Course picks for Stirling',
    h2: 'Agents, vibe coding and careful search',
    intro: 'Courses that suit the homonym project below. The first lesson is free and sets the level.',
    items: [
      {
        course: 'codex-and-claude-code-ai-coding-agents-course-for-teens',
        band: 'Ages 13 to 17',
        note: 'Coding agents for teenagers, with plans checked before code runs.'
      },
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Small apps drafted with an assistant and checked line by line.'
      },
      { course: 'complete-generative-ai-masterclass-college', band: 'University and adult', note: 'Tool calling, retrieval and evaluation of agent answers.' },
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 12', note: 'How AI reads words, and why it confuses names.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'The City of Stirling',
      h2: 'A big, mixed council of townhouses and buses',
      intro: 'Council-wide numbers (ABS LGA57910) taken from the 2021 Census QuickStats on 12 October 2026, beside the bureau\'s population estimate for 2025.',
      body: [
        {
          kind: 'table',
          caption: 'City of Stirling counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents, 2021 Census', '226,369'],
            ['Estimated residents, 2025', '254,821'],
            ['Median age', '38'],
            ['Families', '59,778'],
            ['Private dwellings', '102,101'],
            ['People per household', '2.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Stirling shares compared with Western Australia',
          head: ['Share', 'Stirling', 'WA'],
          rows: [
            ['Semi-detached, terrace or townhouse', '32.0% (28,890)', '13.0%'],
            ['Separate houses', '58.0% (52,380)', '79.7%'],
            ['Bus to work', '4.0% (4,700)', '2.9%'],
            ['Bachelor degree or higher', '33.7% (63,451)', '23.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Denser housing', p: 'Almost a third of Stirling dwellings were semi-detached, terrace or townhouse homes, far above the state share.' },
            {
              h3: 'Two population figures',
              p: 'The Census counted 226,369 people; the ABS estimate for 2025 is 254,821. They are measured differently, so we report them separately.'
            },
            { h3: 'Schools', p: 'Our map test finds 47 government schools inside the council outline, 35 of them primary schools.' }
          ]
        },
        {
          kind: 'p',
          text: 'Census night fell during the pandemic, so commuting answers may reflect that week. The ABS rounds shares and lightly adjusts small counts for privacy; parts of its tables can differ slightly from totals, and we print its numbers unchanged.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Which Stirling did you mean?',
      intro: 'A user asks the agent: how busy are the roads in Stirling? The agent has two ways to search the Main Roads Traffic Digest. One matches the word in road names and site descriptions. The other filters on the council field Main Roads attaches to each count site. Learners run both and score them.',
      body: [
        {
          kind: 'table',
          caption: 'Two search tools on the same question (Main Roads data; scoring is our calculation)',
          head: ['Tool', 'Sites found', 'In the City of Stirling'],
          rows: [
            ['Keyword "stirling" in road or description', '34', '0'],
            ['Council field equals City of Stirling', '107', '107'],
            ['Keyword search of bike counters', '3', '0'],
            ['Council filter on bike counters', '7', '7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Where the 34 keyword matches actually are (councils as Main Roads records them)',
          head: ['Council', 'Matches'],
          rows: [
            ['Fremantle and Claremont', '5 each'],
            ['Perth and Nedlands', '4 each'],
            ['Swan, Mosman Park and East Fremantle', '3 each'],
            ['Peppermint Grove and Cottesloe', '2 each'],
            ['Toodyay, Northam and Vincent', '1 each']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Stirling Highway',
              p: 'Fifteen matches are counters on Stirling Highway, recorded in councils from Nedlands to Fremantle, none of them in the City of Stirling.'
            },
            {
              h3: 'Hidden matches',
              p: 'Another 14 sites match only because their description mentions Stirling, such as a counter west of Stirling Highway or near Stirling Bridge.'
            },
            {
              h3: 'Zero and zero',
              p: 'The keyword tool scores no correct sites out of 34 found and finds none of the 107 it should. Yet its answer would look confident and full of numbers.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Resolve first, then search',
          p: 'The fixed agent keeps a short list of what Stirling can mean here: the council, the suburb of the same name inside it, a highway, streets and a bridge. It maps the question to one of them and calls the matching structured tool. When the question cannot be resolved, it says which meanings it found rather than guessing.'
        },
        {
          kind: 'p',
          text: 'Every site and council name is as Main Roads publishes it in its vehicle and bicycle counter layers, fetched on 12 October 2026. The two search tools, the matching rules and the precision and recall scores are our own scripts and arithmetic.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Building the agent',
      h2: 'A resolver step in front of every search',
      intro: 'The agent gains one new step: before calling a tool, it turns the place words in a question into an identifier the data understands.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Write the keyword tool and the council-filter tool over the downloaded table.'],
            ['2', 'Ask both for Stirling, then score precision and recall against the council field.'],
            ['3', 'Build a small resolver that lists the meanings of a place word with their types.'],
            ['4', 'Test the agent on ten questions, including ones about Stirling Highway that should not go to the council.']
          ]
        },
        {
          kind: 'p',
          text: 'The most revealing part of step 4 is the reverse case. A question about Stirling Highway traffic should reach the keyword or road tool and return the 15 highway counters, while a question about the City should not. Learners find that one tool is not right or wrong in general; it is right for one meaning. The same lesson applies to Perth, which on this website alone names a city in Western Australia and a city in Scotland.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Sort picture cards of things that share a name, such as a bat for cricket and a bat that flies.' },
            { h3: 'Teenagers', p: 'Code both tools, measure precision and recall, and write the resolver with an AI assistant.' },
            { h3: 'Adults', p: 'Add entity resolution to a work agent that searches customers, products or sites by name.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around the City of Stirling',
      h2: 'Busy highways, freeway paths and 2027 terms',
      intro: 'Local figures from Main Roads and the WA Department of Education.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Reid Highway',
              p: 'The counter at the bridge over Alexander Drive averages 76,071 vehicles a day, the highest of the 107 Stirling sites, from a 2024/25 count.'
            },
            {
              h3: 'Freeway path',
              p: 'The path beside Mitchell Freeway north of Hutton Street averages 744 riders a day, the busiest of the city\'s seven bike counters.'
            },
            {
              h3: 'Second semester',
              p: 'In 2027 the third WA school term opens on Monday 19 July and closes on Friday 24 September, a tidy window for a new course.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'We use the ABS council boundary, roughly 104.7 square kilometres. A suburb called Stirling also lies within it according to our point-in-polygon test; its own figures are left off this council page.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From picture cards to agent resolvers',
    intro: 'Ages are a starting guide; the trial decides.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Words and meanings',
        p: 'Scratch stories about names that mean two things.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI',
        p: 'First code and a clear picture of AI\'s limits.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Agents',
        p: 'Tools, search and checking what an agent returns.',
        courses: ['codex-and-claude-code-ai-coding-agents-course-for-teens', 'vibe-coding-for-teens-python-web-ai-projects-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Agents at work',
        p: 'Generative AI and coding agents for real jobs.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'Will smarter models fix this alone?',
    intro: 'They help with language, but the tools still decide what comes back.',
    p1: 'A strong model may guess that "roads in Stirling" means the council. If its only tool is a keyword search, the guess changes nothing: the tool still returns Stirling Highway counters in Nedlands and Claremont.',
    p2: 'Learners who have scored both tools understand that agent quality depends on the tools it is given and on the step that chooses between them. They design that step instead of hoping for it.',
    closer: 'In Stirling classes, every agent answer is checked against the data it came from.',
    blogAnchor: 'why coding is still worth learning alongside AI agents'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Stirling classes, live online',
    intro: 'Lessons run over video, so learners join from home anywhere between the coast and Mirrabooka.',
    cells: [
      { h3: 'Real-time teaching', p: 'A teacher leads and checks code during each lesson.' },
      { h3: 'In step with school', p: 'Classes keep to WA term dates and rest in the holidays.' },
      { h3: 'No-cost trial', p: 'One free lesson, then a short course plan.' },
      { h3: 'Group or private', p: 'Level-matched groups of fifteen to twenty, or a private teacher.' },
      { h3: 'Two per week', p: 'Around eight lessons a month.' },
      { h3: 'Indian clock', p: 'A 4:30pm Stirling lesson starts at 2pm in India.' }
    ],
    spec: {
      title: 'Fixed offset',
      p: 'Western Australia\'s last daylight saving period ended in March 2009, as the IANA time zone database records, so Perth stays two and a half hours ahead of India.'
    }
  },
  fees: {
    h2: 'Stirling class fees',
    intro: 'The same fees for every learner.',
    first: 'There is no charge for the opening lesson, which ends with a plan.',
    group: 'Group lessons: about eight a month in groups of fifteen to twenty.',
    private: 'Private lessons: about eight a month with your own teacher.',
    closer: 'Fees are in US dollars and begin only after the free lesson has agreed a course and a weekly slot. The pricing page explains holidays and missed lessons.'
  },
  reviewsH2: 'Google reviews by families',
  book: {
    h2: 'Book a free Stirling lesson',
    intro: 'Say how old the learner is and what they enjoy. Children often start by sorting same-name picture cards; teenagers can go straight to scoring the two Stirling search tools.',
    success: 'Thank you. We will reach out soon about a Stirling lesson.'
  },
  faq: {
    h2: 'Stirling vibe coding and agents questions',
    intro: 'Answers for Stirling families and adult learners.',
    items: [
      {
        q: 'What is the population of the City of Stirling?',
        a: 'The 2021 Census counted 226,369 residents and the ABS estimate for 2025 is 254,821. The median age in 2021 was 38.'
      },
      {
        q: 'What is a homonym in data?',
        a: 'A name shared by different things, such as Stirling the council, Stirling the suburb and Stirling Highway. Search tools cannot tell them apart without extra information.'
      },
      {
        q: 'What are precision and recall?',
        a: 'Precision is the share of found items that are correct; recall is the share of correct items that were found. The keyword tool scored zero on both.'
      },
      {
        q: 'Is Stirling Highway in the City of Stirling?',
        a: 'Not according to Main Roads\' count sites: its 15 counters are recorded in councils between Perth and Fremantle, such as Nedlands and Claremont.'
      },
      {
        q: 'Can children learn about agents?',
        a: 'Younger learners explore how AI reads words through guided activities. Building agents usually starts in the teenage years.'
      },
      {
        q: 'How many traffic counters are in the City of Stirling?',
        a: 'Main Roads lists 107 traffic count sites on 56 roads in the City of Stirling, plus 7 bike counters.'
      },
      {
        q: 'Do you have a centre in Stirling?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Stirling classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How do you form groups?',
        a: 'By level and pace, fifteen to twenty learners each, not by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can adults build agents with you?', a: 'Yes. Adults learn in adult groups or one to one, often building agents for their own work.' }
    ]
  },
  next: {
    eyebrow: 'More for Perth learners',
    h2: 'More to read',
    html: 'Stirling sits inside the wider <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">Perth classes page</a>, which in turn belongs to our <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">guide to Western Australia</a>. Parents of primary children may prefer <a class="cg-inline-link" href="/coding-classes-for-kids-perth">coding for Perth kids</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Stirling and Perth',
  footerPlaces: [
    { href: '/ai-classes-for-teens-australia', label: 'AI for teens' },
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/coding-classes-for-kids-perth', label: 'Kids in Perth' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-strl .cg-hero-grid { align-items: start; gap: clamp(0.9rem, 2.3vw, 1.9rem); }
.cg-root.cg-strl .cg-hero h1 { font-weight: 630; letter-spacing: -0.022em; line-height: 1.07; }
.cg-root.cg-strl .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-strl .cg-eyebrow { letter-spacing: 0.09em; font-weight: 690; font-size: 0.81rem; }
.cg-root.cg-strl .cg-section-head h2 { max-width: 23ch; }
.cg-root.cg-strl .cg-grid-3 { gap: clamp(1.05rem, 2.6vw, 1.8rem); }
.cg-root.cg-strl .cg-table caption { text-align: left; font-weight: 660; font-size: 0.88rem; }
.cg-root.cg-strl .cg-table td:last-child { text-align: right; font-variant-numeric: tabular-nums; }
.cg-root.cg-strl .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-strl .cg-callout { border-radius: 12px; }
`,
  dossier: {
    curriculumAuthority: 'City of Stirling (LGA57910), ABS Census 2021 QuickStats (read 12 October 2026): 226,369 people; median age 38; 59,778 families; 102,101 private dwellings; 2.4 people per household; semi-detached 28,890 (32.0%, WA 13.0%); separate houses 52,380 (58.0%, WA 79.7%); bus to work 4,700 (4.0%, WA 2.9%); bachelor or higher 63,451 (33.7%, WA 23.8%). ABS ERP 2025 (LGA 57910): 254,821. ABS LGA area 104.7273 sq km; Stirling (WA) SAL51405 inside the LGA by our test (32 of 32 sampled vertices). 47 government schools inside the LGA polygon (our test), 35 primary. Main Roads Traffic Digest: 107 sites on 56 roads with LG_NAME Stirling (C); Reid Hwy At Bridge Over Alexander Dr MON_SUN 76,071 (2024/25). Bike Count Sites: 7 in Stirling (C); Mitchell Fwy PSP N of Hutton St combined 744. Keyword "stirling" in ROAD_NAME or LOCATION_DESC: 34 sites in 12 councils, 0 in Stirling (C); road names Stirling Hwy 15, Stirling St 3, Stirling Cr 2; 14 description-only. WA 2027 Term 3: Monday 19 July to Friday 24 September. Perth +8:00, last DST ended March 2009 (IANA 2026e).',
    localProject: 'Agent search tools over Main Roads Traffic Digest: keyword "stirling" in road or description returns 34 sites (Fremantle 5, Claremont 5, Perth 4, Nedlands 4, Swan 3, Mosman Park 3, East Fremantle 3, Peppermint Grove 2, Cottesloe 2, Toodyay 1, Northam 1, Vincent 1), 0 in City of Stirling: precision 0/34, recall 0/107. LG_NAME filter returns 107 of 107. Bike counters: keyword 3 (2 Fremantle, 1 Perth), filter 7. Resolver lists council, suburb, highway, streets, bridge. Our scripts. Script: scratchpad au/b13/a_strl.py.',
    requiredMentions: ['254,821', '102,101', '32.0% (28,890)', '4.0% (4,700)', '34 sites in all', 'Stirling Crescent', '76,071', 'Hutton Street', 'Peppermint Grove'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Stirling local government area (LGA57910), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA57910'
      },
      {
        claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Stirling LGA 57910, total persons, 2025.',
        url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.57910.LGA2025.A?format=csvfilewithlabels'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
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
      'Stirling suburb (SAL) figures: not used; this is the council page.',
      'Claims about where Stirling Highway runs beyond the councils Main Roads records for its count sites.',
      'Naming individual schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the City of Stirling, Main Roads WA or the WA Department of Education.'
    ]
  }
};
