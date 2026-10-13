'use strict';
// Indooroopilly, Brisbane (cg- district page, Australia cluster Phase 8, row 284). Keyword slug vibe-coding-and-ai-agents-classes-in-*,
// suburb page (ABS SAL31389, City of Brisbane) under Brisbane and Queensland.
// Spine: an agent fetches next-departure data for the 84 Indooroopilly stop records served on a Wednesday through a tool that
// accepts at most 5 requests in flight (our simulated rule). No cap: 79 rejected, 5 answered. Semaphore of 5: all 84 in 9.2 s.
// Script: scratchpad au/b11/p2_ind.py. Lesson family: semaphores for agent tool concurrency; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'INDOOROOPILLY',
    label: 'Indooroopilly, Brisbane',
    blurb: 'Vibe coding and AI agents classes for Indooroopilly, with a project on capping how many tool calls an agent sends at once.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-indooroopilly-brisbane',
  code: 'indo',
  accent: '#2F1A6F',
  accentRationale: 'Indooroopilly: a deep indigo (hue 254.8) found by search at least 10 RGB units from all 2,215 colours in content, the shared stylesheets and the claims log; 14.0:1 on white and 11.4:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Indooroopilly',
    eyebrow: 'Indooroopilly, City of Brisbane, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Indooroopilly' },
      { type: 'AdministrativeArea', name: 'City of Brisbane' },
      { type: 'City', name: 'Brisbane' },
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' },
    { slug: 'best-coding-classes-in-brisbane', name: 'Brisbane' }
  ],
  nav: [
    { label: 'Brisbane', href: '/best-coding-classes-in-brisbane' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Indooroopilly, Brisbane',
  title: 'Vibe Coding and AI Agents Classes in Indooroopilly, Brisbane',
  description: 'Live online vibe coding and AI agents classes for Indooroopilly learners: AI tools, Python and agents that call tools safely, in small groups or one to one.',
  ogDescription: 'An Indooroopilly AI agents project: 84 stop lookups, a tool that allows five calls at once, and the one-line semaphore that turns 79 failures into a full answer.',
  twitterDescription: 'Indooroopilly vibe coding and AI agents classes, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Indooroopilly',
    description: 'Level-matched vibe coding, AI agents and Python lessons for children, teenagers and adults in Indooroopilly, Brisbane, taught live online in English.'
  },
  h1: 'Vibe coding and AI agents classes in Indooroopilly',
  capsuleQ: 'What does an AI agents class teach in Indooroopilly?',
  capsule: 'How an agent should behave when the tools it calls have limits. In our Indooroopilly project an agent looks up 84 stops through a tool that accepts five requests at a time. Sent all at once, 79 bounce and the agent still reports back. Capped with a semaphore of five, every stop is answered in about nine seconds.',
  lead: 'Indooroopilly is a busy junction: a railway station, a shopping-centre bus station and a long run of Moggill Road stops all sit inside the suburb outline. Translink schedules 4,365 stop visits there on Wednesday 21 October 2026 across 41 routes. An assistant asked "when is the next bus at every stop?" has to make 84 separate tool calls, and how it makes them is the lesson.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Indooroopilly.',
  picks: {
    eyebrow: 'Course picks for Indooroopilly',
    h2: 'Agents and AI tool courses',
    intro: 'These courses pair AI tools with code the learner reads and tests. The free lesson finds the right starting point.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Projects built with AI help, then checked line by line.' },
      {
        course: 'python-ai-automation-masterclass-college',
        band: 'University and adult',
        note: 'Scripts that call AI services and APIs without breaking their limits.'
      },
      {
        course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev',
        band: 'Ages 8 to 12',
        note: 'Games and stories made with Scratch and friendly AI tools.'
      },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Working with AI coding agents on real repositories.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Indooroopilly in the 2021 Census',
      h2: 'Apartments, students and short commutes',
      intro: 'Values for the Indooroopilly suburb (ABS SAL31389), taken from its 2021 QuickStats page on 12 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Indooroopilly headline counts',
          head: ['Measure', 'Indooroopilly'],
          rows: [
            ['People', '13,622'],
            ['Median age', '33'],
            ['Families', '3,478'],
            ['Private dwellings', '5,747'],
            ['People per household', '2.5'],
            ['Motor vehicles per dwelling', '1.6']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Indooroopilly shares beside Queensland',
          head: ['Share', 'Indooroopilly', 'Queensland'],
          rows: [
            ['Flats or apartments', '45.4% (2,337)', '12.5%'],
            ['Bachelor degree or above', '54.2% (6,063)', '21.9%'],
            ['Professionals among workers', '42.6% (2,988)', '21.4%'],
            ['Train to work', '5.5% (384)', '1.1%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children 5 to 9', p: 'There were 903 residents aged 5 to 9, 6.6% of the suburb.' },
            { h3: 'Houses', p: '2,406 dwellings, 46.7%, were separate houses, close to the apartment share.' },
            { h3: 'Working at home', p: 'On Census day in August 2021, during the pandemic, 2,050 workers (29.2%) worked at home; that week was not typical.' }
          ]
        },
        {
          kind: 'p',
          text: 'Published percentages are rounded and small counts are slightly altered by the bureau for privacy. We quote them as printed and do not add rows together to make totals.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Five calls at a time, 84 stops to answer',
      intro: 'The tool in this exercise is a stand-in for a real timetable API. We gave it a rule many services have: no more than five requests in flight. Each call takes between 0.2 and 0.9 seconds, drawn at random with a fixed seed, so every run repeats exactly.',
      body: [
        {
          kind: 'table',
          caption: 'How long the agent takes, by strategy (our simulation)',
          head: ['Strategy', 'Stops answered', 'Time'],
          rows: [
            ['One call after another', '84 of 84', '44.8 s'],
            ['Semaphore of 2', '84 of 84', '22.5 s'],
            ['Semaphore of 3', '84 of 84', '15.1 s'],
            ['Semaphore of 5', '84 of 84', '9.2 s'],
            ['Eight or more at once, no cap', '5 of 84', '0.85 s, 79 rejected']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Fast and wrong',
              p: 'Firing every call at once looks quickest. The service accepts the first five and turns the rest away, so the agent returns in under a second with most of the answer missing.'
            },
            {
              h3: 'Slow and safe',
              p: 'Waiting for each reply before the next call never breaks the rule, but the total is simply all 84 waits added up: about 45 seconds.'
            },
            {
              h3: 'Matched to the limit',
              p: 'A semaphore with five permits lets exactly five calls run. Each finished call releases a permit for the next stop, and the job finishes in about a fifth of the sequential time.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Why the cap matters for agents',
          p: 'An agent that hides failed calls behind a confident summary is worse than a slow one. Matching concurrency to the tool\'s stated limit, and reporting any call that still fails, keeps the answer honest.'
        },
        {
          kind: 'p',
          text: 'The stop list is real: 84 of the 87 stop records inside the suburb outline have at least one scheduled visit that Wednesday. The latencies and the five-request rule are our simulation, not measured Translink behaviour.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The semaphore in Python',
      h2: 'Three lines that protect a rate limit',
      intro: 'Python\'s asyncio library includes a Semaphore. Wrapping each tool call in "async with sem:" makes extra calls wait their turn instead of being sent.',
      body: [
        {
          kind: 'table',
          caption: 'Steps learners follow',
          head: ['Step', 'What they do'],
          rows: [
            ['1', 'Load the 84 served stop records from the feed.'],
            ['2', 'Write a fake tool with a five-in-flight rule and random delays.'],
            ['3', 'Run all calls at once and count the rejections.'],
            ['4', 'Add asyncio.Semaphore(5) and compare answered stops and time.']
          ]
        },
        {
          kind: 'p',
          text: 'A semaphore is different from a rate limit. It caps how many calls are running together; a rate limit caps how many start per second. Real APIs often have both, and learners test each one separately.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Act it out: five tokens on the table, and a messenger may only run with a token in hand.' },
            { h3: 'Teenagers', p: 'Build the simulation in Python and chart answered stops against the semaphore size.' },
            { h3: 'Adults', p: 'Add concurrency caps and retries to an agent that calls paid AI or data APIs at work.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'In Indooroopilly',
      h2: 'Trains, buses and the 2027 school year',
      intro: 'Counts from the Translink feed for Wednesday 21 October 2026 and dates from the Queensland Department of Education.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Train and bus',
              p: 'Of the 4,365 Wednesday stop visits, trains make 189 and buses 4,176. Indooroopilly station has four platform records in the feed.'
            },
            { h3: '41 routes', p: 'Forty-one routes call at a stop in the suburb that day. The feed groups six stop records under the shopping-centre bus station.' },
            { h3: 'School terms', p: 'Queensland state schools begin the 2027 year on Wednesday 27 January; Term 1 closes on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'Stop records are matched to the ABS outline of the Indooroopilly suburb, about 6.92 square kilometres, using our own point-in-polygon test. The feed lists Indooroopilly Shopping Centre station, a bus station, separately from the railway station.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From turn-taking games to agents',
    intro: 'Ages are a rough guide; we place each learner after the free lesson.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Taking turns',
        p: 'Scratch projects where sprites wait, signal and share.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 8 to 12',
        h3: 'Building with AI',
        p: 'Games made with AI help while reading the code.',
        courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Python and tools',
        p: 'Programs that call web APIs and handle their limits.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'University and adult',
        h3: 'Agents that behave',
        p: 'Concurrency, retries and checks for production agents.',
        courses: ['python-ai-automation-masterclass-college', 'complete-generative-ai-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why learn concurrency if an agent can write it?',
    intro: 'Because an agent that cannot see the limit will happily break it.',
    p1: 'Vibe coding means describing what you want and letting an AI tool draft the program. Ask for "fetch every stop in parallel" and you will often get code that sends all 84 calls at once, exactly the version that lost 79 answers in our test.',
    p2: 'A learner who has watched that happen reads the generated code for the cap before running it. That one habit separates an agent demo from an agent you can leave running overnight.',
    closer: 'In Indooroopilly classes, learners steer the AI and check every call it makes.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Joining from Indooroopilly',
    intro: 'Lessons are live on video, so any home in the suburb works as the classroom.',
    cells: [
      { h3: 'Shared screen', p: 'The teacher follows the learner\'s own code as they type and test it.' },
      { h3: 'Holiday breaks', p: 'Classes run in Queensland terms and stop for school holidays.' },
      { h3: 'No-cost first lesson', p: 'A full trial lesson, then a recommendation in writing.' },
      { h3: 'Matched groups', p: 'Fifteen to twenty learners at the same level, or private lessons.' },
      { h3: 'Two lessons weekly', p: 'Around eight live sessions a month.' },
      { h3: 'Teachers in India', p: 'A 4:30pm Indooroopilly class is noon in India, every week of the year.' }
    ],
    spec: {
      title: 'Brisbane time',
      p: 'Queensland stopped daylight saving in March 1992, according to the IANA time zone database, so the gap to India stays at four and a half hours.'
    }
  },
  fees: {
    h2: 'Indooroopilly class fees',
    intro: 'The same fees for every learner.',
    first: 'The opening lesson costs nothing and finishes with a plan.',
    group: 'Groups: roughly eight lessons a month, fifteen to twenty learners.',
    private: 'One to one: roughly eight lessons a month with your own teacher.',
    closer: 'Fees for Indooroopilly families are in US dollars. Payment starts once the trial has settled a course and a weekly time; the pricing page covers holidays and missed lessons.'
  },
  reviewsH2: 'Google reviews from our learners and families',
  book: {
    h2: 'Book a free Indooroopilly class',
    intro: 'Tell us the learner\'s age and what they like. A child might begin with a Scratch turn-taking game; a teenager might cap the 84-stop agent.',
    success: 'Thank you. We will be in touch about an Indooroopilly class shortly.'
  },
  faq: {
    h2: 'Indooroopilly vibe coding and AI agents questions',
    intro: 'Common questions from Indooroopilly parents and adult learners.',
    items: [
      { q: 'How many people live in Indooroopilly?', a: 'The 2021 Census counted 13,622 people in the Indooroopilly suburb, with a median age of 33.' },
      {
        q: 'What is a semaphore in programming?',
        a: 'A semaphore is a counter of permits. A task takes a permit before it starts and gives it back when it ends, so only a fixed number of tasks run at the same time.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Vibe coding is describing the program you want to an AI tool and letting it write a first draft, which you then read, run and correct.'
      },
      {
        q: 'Is an AI agent the same as a chatbot?',
        a: 'Not quite. An agent uses a language model to plan steps and call tools, such as a timetable lookup, rather than only replying with text.'
      },
      {
        q: 'Can children learn about AI agents?',
        a: 'Younger children learn the ideas with Scratch and kid-safe tools. Building agents on real AI services suits teenagers and adults.'
      },
      {
        q: 'Is the coding agents course open to teenagers?',
        a: 'The adult coding agents course is for ages 18 and over; teenagers use the teen vibe coding and AI tools courses instead.'
      },
      {
        q: 'Do you have a centre in Indooroopilly?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Indooroopilly classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      {
        q: 'How many bus and train routes stop in Indooroopilly?',
        a: 'The Translink timetable for Wednesday 21 October 2026 shows 41 routes calling at a stop inside the suburb.'
      }
    ]
  },
  next: {
    eyebrow: 'More for Brisbane learners',
    h2: 'Where to go next',
    html: 'See the <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">Brisbane page</a> for the whole city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland guide</a> for the state, and <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens</a> for older students.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Indooroopilly and Brisbane',
  footerPlaces: [
    { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Think, not just use AI' },
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-brisbane', label: 'Kids in Brisbane' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-indo .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3vw, 2.4rem); }
.cg-root.cg-indo .cg-hero h1 { font-weight: 680; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-indo .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-indo .cg-eyebrow { letter-spacing: 0.09em; font-weight: 650; font-size: 0.78rem; }
.cg-root.cg-indo .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.01em; }
.cg-root.cg-indo .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.8rem); }
.cg-root.cg-indo .cg-table caption { text-align: left; font-weight: 660; }
.cg-root.cg-indo .cg-table td:nth-child(3) { text-align: right; }
.cg-root.cg-indo .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-indo .cg-callout { border-radius: 2px; }
`,
  dossier: {
    curriculumAuthority: 'Indooroopilly (SAL31389), ABS Census 2021 QuickStats (read 12 October 2026): 13,622 people; median age 33; 3,478 families; 5,747 private dwellings; 2.5 people per household; 1.6 vehicles per dwelling; aged 5-9 903 (6.6%); flats 2,337 (45.4%, Queensland 12.5%); separate houses 2,406 (46.7%); bachelor or higher 6,063 (54.2%, Queensland 21.9%); professionals 2,988 (42.6%, Queensland 21.4%); train to work 384 (5.5%, Queensland 1.1%); worked at home 2,050 (29.2%). ABS SAL area 6.9158 square kilometres. Translink SEQ GTFS, Wednesday 21 October 2026: 87 stop records inside the SAL polygon, 84 with at least one visit; 4,365 scheduled stop visits (bus 4,176, train 189); 41 routes; Indooroopilly station (4 platform records), Indooroopilly Shopping Centre station, Indooroopilly interchange. Queensland 2027 Term 1: Wednesday 27 January to Thursday 25 March. Brisbane: no daylight saving since March 1992 (IANA 2026e).',
    localProject: 'Simulated agent fetching next departures for the 84 served Indooroopilly stop records. Latency per call random.Random(42).randint(200, 900) ms; tool rule (ours): at most 5 requests in flight, extra requests rejected at once. Sequential 44,824 ms; semaphore 2: 22,462 ms; 3: 15,130 ms; 5: 9,238 ms, 84 of 84; 8 or more slots without a cap: 5 answered, 79 rejected, done at 854 ms. Script: scratchpad au/b11/p2_ind.py.',
    requiredMentions: ['13,622', '3,478', '5,747', '45.4% (2,337)', '54.2% (6,063)', '4,365', '41 routes', 'Indooroopilly Shopping Centre station', '79 bounce'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Indooroopilly suburb and locality (SAL31389), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL31389'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026, downloaded October 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      { claim: 'Python documentation, asyncio synchronization primitives: Semaphore.', url: 'https://docs.python.org/3/library/asyncio-sync.html' },
      {
        claim: 'Queensland Department of Education, future school dates: 2027 Queensland term dates (Term 1 Wednesday 27 January to Thursday 25 March).',
        url: 'https://education.qld.gov.au/about-us/calendar/future-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Brisbane follows rule AQ, whose last daylight saving period ended in March 1992.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Real Translink API limits or response times: not claimed; the five-request rule and latencies are our simulation.',
      'Passenger numbers at Indooroopilly stops: not claimed; the feed gives scheduled stop visits.',
      'Naming individual schools near stops: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Sums of Census age bands into a child total: not computed.',
      'Any affiliation with Brisbane City Council, Translink or the Queensland Department of Education.'
    ]
  }
};
