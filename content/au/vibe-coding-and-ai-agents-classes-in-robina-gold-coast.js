'use strict';
// Robina, Gold Coast (cg- district page, Australia cluster Phase 8, row 336). Keyword slug vibe-coding-and-ai-agents-classes-in-*,
// suburb page (ABS SAL32445) in the City of Gold Coast, under Gold Coast and Queensland.
// Spine: nondeterminism in an agent tool. A naive stop lookup builds name -> stop_id from a Python set of the 90 served Robina stop
// records (Translink SEQ GTFS, Wednesday 21 October 2026); 22 names are shared by 44 records, so under 20 PYTHONHASHSEED values every
// one of those 22 answers changes and all 20 runs differ (Bond University at 8am: route 750 at 8:02 in 11 runs, route 753 at 8:11 in 9).
// Script: scratchpad au/b18/a_rbna.py with rb_tool.py. Lesson family: nondeterminism from unordered results; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'ROBINA',
    label: 'Robina, Gold Coast',
    blurb: 'Vibe coding and AI agent classes for Robina, where a bus agent gave 20 different sets of answers in 20 runs until learners found why.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-robina-gold-coast',
  code: 'rbna',
  accent: '#4C407F',
  accentRationale: 'Robina: a muted dusk violet (hue 251.4, s 0.50, v 0.50), at least 24.5 RGB from every Queensland page accent and all claimed accents, 10.7 from other AU accents and 6.5 from every other site colour; 7.3:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Robina',
    eyebrow: 'Robina, City of Gold Coast, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Robina' },
      { type: 'AdministrativeArea', name: 'City of Gold Coast' },
      { type: 'City', name: 'Gold Coast' },
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' },
    { slug: 'best-coding-classes-in-gold-coast', name: 'Gold Coast' }
  ],
  nav: [
    { label: 'Gold Coast', href: '/best-coding-classes-in-gold-coast' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Robina, Gold Coast',
  title: 'Vibe Coding and AI Agents Classes in Robina, Gold Coast',
  description: 'Live online vibe coding and AI agent classes for Robina, ages 6 to adult, with an agent project that traces why a bus helper gives different answers each run.',
  ogDescription: 'Ask a Robina bus agent the same 68 questions 20 times and get 20 different answer sets. The cause is one line of Python.',
  twitterDescription: 'AI agents and vibe coding for Robina learners, taught live online, first session free.',
  ogImageCourse: 'codex-and-claude-code-ai-coding-agents-course-for-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Robina',
    description: 'Lessons on agents, vibe coding and Python for Robina children, teens and adults, set by level after a free trial session.'
  },
  h1: 'Vibe coding and AI agents classes in Robina',
  capsuleQ: 'What does the Robina agent project uncover?',
  capsule: 'Why an AI agent can give different answers to the same question. Learners give an agent a tool that looks up the next bus from a Robina stop by name. Twenty-two stop names belong to two stops each, one per direction. The tool picks one at random-looking order, so 20 runs produce 20 different answer sets. Fixing it is a lesson in deterministic tools.',
  lead: 'Robina is in the southern Gold Coast, with a station on the Gold Coast rail line, a town centre and many townhouses. Its 90 served stop records carry buses and trains through the day, and many of them share a name with a stop across the road. That small detail is enough to make a careless agent unpredictable.',
  wa: 'Hi Modern Age Coders, we are in Robina and would like to try a free AI agents or vibe coding session.',
  picks: {
    eyebrow: 'Course picks for Robina',
    h2: 'Agents, vibe coding and Python',
    intro: 'For learners who like to know why software behaves as it does. The free session points to the right one.',
    items: [
      {
        course: 'codex-and-claude-code-ai-coding-agents-course-for-teens',
        band: 'Ages 13 to 17',
        note: 'Agents with tools that teenagers write and test themselves.'
      },
      { course: 'complete-generative-ai-masterclass-college', band: 'University and adult', note: 'Tool calling, evaluation and repeatable behaviour.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'AI-assisted projects, run twice to check they agree.' },
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 12', note: 'Why computers sometimes surprise us, explained simply.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Robina in the Census',
      h2: 'Townhouses and home offices',
      intro: 'From the 2021 Census QuickStats for the Robina suburb and locality (ABS SAL32445), read on 13 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Robina counts',
          head: ['Measure', 'Value'],
          rows: [
            ['People', '25,659'],
            ['Median age', '39'],
            ['Families', '7,163'],
            ['Private dwellings', '10,180'],
            ['People per household', '2.6'],
            ['Motor vehicles per dwelling', '1.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Robina shares compared with Queensland',
          head: ['Share', 'Robina', 'Queensland'],
          rows: [
            ['Semi-detached, terrace or townhouse', '31.6% (2,962)', '11.7%'],
            ['Worked at home', '15.2% (1,949)', '14.1%'],
            ['Bachelor degree or higher', '25.5% (5,471)', '21.9%'],
            ['Residents aged 15 to 19', '6.6% (1,684)', '6.1%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Townhouse suburb', p: 'Almost a third of Robina homes were townhouses or terraces, nearly three times the Queensland share.' },
            { h3: 'Houses too', p: 'Separate houses still made up 54.6% of dwellings, so the suburb mixes both kinds of home.' },
            { h3: 'Pandemic Census', p: 'The working-at-home share comes from a Census taken during the pandemic, so it may be higher than usual.' }
          ]
        },
        {
          kind: 'p',
          text: 'Shares are as the bureau printed them; it rounds and slightly perturbs small counts, so we never add its rows into totals of our own.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Same question, different answer',
      intro: 'The agent\'s tool takes a stop name and returns the next bus after 8am on Wednesday 21 October 2026. To find the stop, it builds a lookup from a Python set of (name, stop) pairs. There are 90 served stop records in Robina but only 68 distinct names: 22 names are used twice, usually for the stops on opposite sides of one road.',
      body: [
        {
          kind: 'table',
          caption: 'The naive tool run under 20 different PYTHONHASHSEED values (our measurement)',
          head: ['What we measured', 'Result'],
          rows: [
            ['Stop names asked about', '68'],
            ['Names whose answer changed between runs', '22 of 68'],
            ['Different complete answer sets in 20 runs', '20'],
            ['Bond University at 8am', 'Route 750 at 8:02 (11 runs) or route 753 at 8:11 (9 runs)']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why it happens',
              p: 'Python randomises the order of strings in a set each time it starts. Building a dict from that set keeps whichever duplicate name comes last, so the chosen stop changes run to run.'
            },
            {
              h3: 'Why it looks fine',
              p: 'Every answer is a real bus at a real Robina stop. Nothing crashes, and a single test passes. Only running twice reveals the problem.'
            },
            {
              h3: 'Direction matters',
              p: 'The two stops with one name usually serve opposite directions, so the agent may send someone towards Robina station or away from it.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The deterministic fix',
          p: 'Key the lookup by stop ID, not name. When a name matches two stops, return both with their direction and let the agent ask which way the person is going. Sort any list before choosing from it. With those changes, all 20 runs return identical answers.'
        },
        {
          kind: 'p',
          text: 'Stops and timetables come from the Translink SEQ GTFS feed on data.qld.gov.au, CC BY 4.0, valid 7 October to 6 December 2026. Which stops lie in Robina is our point-in-polygon test on the ABS outline; the tool, the 20 runs and every count are our own scripts.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Debugging the agent',
      h2: 'Run it twice before you trust it',
      intro: 'Repeatability is a property you test for, not one you assume.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Build the naive name lookup and ask it about every Robina stop name.'],
            ['2', 'Run the same script under 20 hash seeds and compare the outputs.'],
            ['3', 'Count duplicate names and explain each changing answer.'],
            ['4', 'Rewrite the tool around stop IDs and deterministic sorting, then rerun all 20.']
          ]
        },
        {
          kind: 'p',
          text: 'Learners also meet the other sources of drift an agent faces: model sampling, unsorted database results and network timing. Each one gets a matching habit, from fixing seeds in tests to sorting before choosing. The Robina case is the easiest to see because the data are public and the bug is one line long.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Draw names from a hat with two cards saying the same thing and see why the result changes.' },
            { h3: 'Teenagers', p: 'Reproduce the bug with hash seeds and fix it with IDs and sorted output.' },
            { h3: 'Adults', p: 'Add repeat-run checks to agents and scripts that feed reports at work.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Robina',
      h2: 'Trains, counts and 2027 terms',
      intro: 'A few more Robina facts from the timetable feed and council open data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Rail and bus', p: 'On Wednesday 21 October 2026 the feed schedules 4,546 stop visits in Robina, 88 of them by train.' },
            { h3: 'Traffic surveys', p: 'City of Gold Coast traffic counts include 223 surveys recorded in Robina between 2017 and 2026.' },
            { h3: 'Term 2, 2027', p: 'Queensland state schools run Term 2 from Monday 12 April to Friday 25 June 2027.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'Robina is the ABS suburb outline of about 15.0 square kilometres; stops inside it come from our point-in-polygon test.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From names in a hat to reliable agents',
    intro: 'A rough guide to where learners start.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Rules and chance',
        p: 'Scratch games where luck and logic meet.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI',
        p: 'First programs and an honest look at AI.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Agents',
        p: 'Tools, tests and repeatable behaviour.',
        courses: ['codex-and-claude-code-ai-coding-agents-course-for-teens', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Agents at work',
        p: 'Agents that give the same answer every time.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'Is randomness always the model\'s fault?',
    intro: 'No. Often the tools around the model are the unpredictable part.',
    p1: 'People blame AI agents for inconsistent answers, and sometimes the model is the cause. In Robina the model is not involved at all: the tool itself returns different stops depending on how Python happens to order a set.',
    p2: 'Learners who have chased this bug check their tools before blaming the model, and they write tests that run each question more than once.',
    closer: 'Our agent classes teach learners to make software repeatable before making it clever.',
    blogAnchor: 'why checking code still beats trusting it in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Robina sessions, online',
    intro: 'Learners log in from home for a live session; nobody has to drive to the town centre.',
    cells: [
      { h3: 'Real teacher', p: 'Each session is taught live, with questions answered on the spot.' },
      { h3: 'Term pattern', p: 'Sessions follow Queensland school terms and pause for breaks.' },
      { h3: 'Free start', p: 'Try one session free, then receive a short plan.' },
      { h3: 'Group size', p: 'Groups of fifteen to twenty at a matching level, or private.' },
      { h3: 'Weekly', p: 'Two sessions each week, around eight monthly.' },
      { h3: 'Indian time', p: 'A 5pm Robina session is 12:30pm in India on any date.' }
    ],
    spec: {
      title: 'No daylight saving',
      p: 'Queensland has stayed on standard time since daylight saving last ended in March 1992, according to the IANA time zone database.'
    }
  },
  fees: {
    h2: 'Robina fees',
    intro: 'Every learner pays the same published fees.',
    first: 'The opening session is free, with a course suggestion afterwards.',
    group: 'Group: around eight sessions a month, fifteen to twenty learners.',
    private: 'Private: around eight sessions a month with a personal teacher.',
    closer: 'Billing is in US dollars and begins once the trial has settled a course and a regular slot. Holiday and absence rules are on the pricing page.'
  },
  reviewsH2: 'Google reviews from parents',
  book: {
    h2: 'Book a free Robina session',
    intro: 'Tell us the learner\'s age and what they enjoy. A child might play the names-in-a-hat game; a teenager might hunt the hash-seed bug.',
    success: 'Thanks. We will be in touch about a Robina session.'
  },
  faq: {
    h2: 'Robina agents and vibe coding questions',
    intro: 'What Robina families and adult learners ask us.',
    items: [
      { q: 'What is Robina\'s population?', a: 'The 2021 Census counted 25,659 people in the Robina suburb, median age 39.' },
      {
        q: 'What does nondeterministic mean?',
        a: 'Giving different results for the same input on different runs. In agents it can come from the model, the tools or the data order.'
      },
      {
        q: 'What is PYTHONHASHSEED?',
        a: 'A setting that controls how Python randomises string hashing. Changing it changes the iteration order of sets of strings.'
      },
      {
        q: 'How did you fix the Robina tool?',
        a: 'By looking stops up by ID, returning both stops when a name is shared, and sorting results before choosing.'
      },
      { q: 'Are agents suitable for children?', a: 'Younger learners explore AI ideas through guided games; building agents usually starts in the teens.' },
      { q: 'How many stop names are shared in Robina?', a: 'In the timetable feed, 22 names belong to two stop records each, out of 68 distinct names.' },
      {
        q: 'Do you have a centre in Robina?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Robina classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who are the other learners?',
        a: 'Fifteen to twenty learners at a similar level and pace, not grouped by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can adults build agents here?', a: 'Yes. Adults have their own groups or private sessions and often bring a tool from work to make reliable.' }
    ]
  },
  next: {
    eyebrow: 'More for Gold Coast learners',
    h2: 'Where next',
    html: 'Robina families can also read our <a class="cg-inline-link" href="/best-coding-classes-in-gold-coast">Gold Coast overview</a>, the statewide <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland guide</a>, and <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">thinking, not just using AI tools</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Robina and the Gold Coast',
  footerPlaces: [
    { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Think, not just use AI' },
    { href: '/best-coding-classes-in-gold-coast', label: 'Gold Coast' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-gold-coast', label: 'Kids on the Gold Coast' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-rbna .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 2.9vw, 2.35rem); }
.cg-root.cg-rbna .cg-hero h1 { font-weight: 610; letter-spacing: -0.019em; line-height: 1.09; }
.cg-root.cg-rbna .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-rbna .cg-eyebrow { letter-spacing: 0.13em; font-weight: 610; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-rbna .cg-section-head h2 { max-width: 18ch; }
.cg-root.cg-rbna .cg-grid-3 { gap: clamp(1.1rem, 2.9vw, 1.9rem); }
.cg-root.cg-rbna .cg-table caption { text-align: left; font-weight: 645; font-size: 0.86rem; }
.cg-root.cg-rbna .cg-table td:last-child { font-variant-numeric: tabular-nums; }
.cg-root.cg-rbna .cg-ladder-col { border-top: 2px dashed var(--cg-accent); padding-top: 0.65rem; }
.cg-root.cg-rbna .cg-callout { border-radius: 14px; }
`,
  dossier: {
    curriculumAuthority: 'Robina (SAL32445), ABS Census 2021 QuickStats (read 13 October 2026): 25,659 people; median age 39; 7,163 families; 10,180 private dwellings; 2.6 people per household; 1.9 vehicles per dwelling; semi-detached 2,962 (31.6%, Queensland 11.7%); separate houses 5,116 (54.6%); worked at home 1,949 (15.2%, Queensland 14.1%); bachelor or higher 5,471 (25.5%, Queensland 21.9%); aged 15-19 1,684 (6.6%, Queensland 6.1%). ABS SAL area 14.9594 sq km. Translink SEQ GTFS (feed 7 October to 6 December 2026): 91 stop records in the SAL by our test (90 served), 20 route short names incl. Gold Coast line services; Wednesday 21 October 2026 4,546 stop visits, 88 by train. City of Gold Coast traffic counts suburb ROBINA 223 (2017 to 2026). Queensland 2027 Term 2 Monday 12 April to Friday 25 June. Brisbane time, no DST since March 1992 (IANA 2026e).',
    localProject: 'Naive agent tool (rb_tool.py): lookup = {name: stop_id for name, stop_id in set_of_pairs} over 90 served Robina stop records (68 distinct names, 22 names shared by 44 records); next departure after 08:00 on Wednesday 21 October 2026 by (time, route). Run under PYTHONHASHSEED 0 to 19: all 22 shared names change answer; 20 distinct complete answer sets. Bond University: route 750 to Robina station 8:02 in 11 runs, route 753 to Broadbeach South 8:11 in 9. Fix: key by stop_id, return both stops for shared names, sort before choosing. Our measurement. Script: scratchpad au/b18/a_rbna.py.',
    requiredMentions: [
      '25,659',
      '10,180',
      '31.6% (2,962)',
      '15.2% (1,949)',
      '68 distinct names',
      'PYTHONHASHSEED',
      'Bond University',
      '4,546 stop visits',
      '223 surveys'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Robina suburb and locality (SAL32445), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL32445'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      {
        claim: 'City of Gold Coast open data, Traffic Count, Creative Commons Attribution 3.0, queried 13 October 2026.',
        url: 'https://data-goldcoast.opendata.arcgis.com/'
      },
      {
        claim: 'Python documentation, PYTHONHASHSEED: hash randomisation of str and bytes objects, which changes set iteration order between runs.',
        url: 'https://docs.python.org/3/using/cmdline.html#envvar-PYTHONHASHSEED'
      },
      {
        claim: 'Queensland Department of Education, future school dates: 2027 Term 1 Wednesday 27 January to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September; Term 4 Tuesday 5 October to Friday 10 December.',
        url: 'https://education.qld.gov.au/about-us/calendar/future-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Brisbane follows rule AQ, whose last daylight saving period ended in March 1992.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Claims about any real Translink app or journey planner behaving this way: not made; the tool is our own script.',
      'Passenger numbers: not claimed; the feed gives scheduled services.',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the City of Gold Coast, Translink or the Queensland Department of Education.'
    ]
  }
};
