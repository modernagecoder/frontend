'use strict';
// Wallasey (cg- town page, UK cluster Phase 8, towns band A, row 394). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: what should an AI agent do when a tool
// call is refused, and what happens when hundreds of agents retry at once? (retry storms, exponential backoff, jitter).
// Real measurement (29 September 2026): Department for Transport road traffic API, average-annual-daily-flow for Wirral
// (local_authority_id 84), year 2024: 100 records; five polite calls two seconds apart took 1.26, 1.07, 1.11, 0.93 and
// 0.96 s (median 1.07 s).
// Our simulation (scratchpad wly/backoff.py; the capacity is an assumption, not a DfT figure): 200 agents each need one
// answer at the same moment; the tool accepts 20 calls per second and answers in 1.07 s; a refused call returns in 0.05 s.
// Strategies, median of 50 runs: immediate retry every 0.1 s: last agent done 10.2 s, 6,300 calls sent, 6,100 refused,
// median agent 5.6 s; exponential backoff (0.1 s doubling, cap 20 s) without jitter: 107.2 s, 1,640 calls, 1,440 refused,
// median agent 20.5 s; exponential backoff with full jitter (random wait up to the same limit): 19.6 s, 1,354 calls, 1,154
// refused, median agent 5.8 s. Ideal floor: 200 / 20 = 10 s plus latency.
// Lesson family: retry storms, exponential backoff, jitter, thundering herd, being a good API citizen. Screened: exponential
// backoff, thundering herd 0 hits; Capelle aan den IJssel owns the circuit breaker; Lelystad owns single points of failure;
// Bury owns tool budgets (N+1).
// Place facts: Wirral (E08000015) TS001 320,199. ONS 2021 BUAs (published): Wallasey 85,610; Birkenhead 109,835.
// postcodes.io (Wirral) suburban areas: New Brighton, Liscard, Seacombe, Egremont, Poulton, Leasowe, Moreton.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WALLASEY', label: 'Wallasey', blurb: 'Vibe coding and AI agents classes for Wallasey, with a project on what 200 AI agents should do when a busy tool starts saying no.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-wallasey',
  code: 'wly',
  accent: '#4C223E',
  accentRationale: 'Wallasey: a deep damson (10.54:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Wallasey',
    eyebrow: 'Wallasey, Wirral, Merseyside, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Merseyside' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Merseyside', href: '/coding-classes-in-merseyside' },
    { label: 'Birkenhead', href: '/best-coding-and-ai-classes-in-birkenhead' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wallasey, England',
  title: 'Vibe Coding and AI Agents Classes in Wallasey | Ages 6 to 67',
  description: 'Online vibe coding, AI agents and Python classes for Wallasey, New Brighton, Liscard and Seacombe learners aged 6 to 67, private or in groups. First lesson free.',
  ogDescription: 'Live online vibe coding and AI agents classes for Wallasey, and a Python project on retry storms and how AI agents should back off.',
  twitterDescription: 'Wallasey vibe coding, AI agents and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Wallasey',
    description: 'Online vibe coding, AI agents, Python, coding and mathematics for children, teenagers and adults in Wallasey and across Wirral, taught live with thinking skills first.'
  },

  h1: 'Vibe coding and AI agents classes in Wallasey',
  capsuleQ: 'Where can Wallasey learners find the best vibe coding and AI agents classes?',
  capsule: 'At the 2021 census the ONS put Wallasey\'s built-up area at 85,610 people, in a Wirral borough of 320,199, and New Brighton, Liscard, Seacombe and Egremont are among the recorded suburbs. Wirral learners from six up to 67 work on vibe coding, AI agents, Python, coding and maths over a live camera link with India-based tutors, either individually or within a class of five to ten matched by stage. Every course trains clear thinking first, so a learner can reason about what an agent is doing. Session one is on us and wraps up with a course suggestion. The Wallasey project looks at a problem every agent builder meets: what to do when a busy tool refuses a request, and what happens when many agents retry at the same moment. Continuing is USD 100 per month as part of a small class or USD 150 per month for private teaching.',
  lead: 'An AI agent that calls tools will sooner or later be told "not now": a service is busy, a rate limit is hit, a request times out. The obvious response is to try again. Now imagine hundreds of agents all asking the same service at the same instant, all getting refused, all trying again. This project measures what happens. First the learner times a real tool: Wirral\'s 2024 counting records from the Department for Transport\'s road traffic API came back in a median of 1.07 seconds a call, and then simulates 200 agents hitting a busy version of it with three different retry rules. One rule floods the service, one freezes the agents in lockstep, and one simple trick fixes both.',
  wa: 'Hello Modern Age Coders, we would like a free vibe coding or AI agents lesson for a learner in Wallasey.',

  picks: {
    eyebrow: 'Wallasey course picks',
    h2: 'Wallasey courses for thinking, vibe coding and agents',
    intro: 'Four age-banded options. All four start with a free live session, reserved without payment details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: taking turns, sharing a queue fairly and planning for "not now".' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch projects, then apps built by describing them to an AI and testing them properly.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including this retry simulation.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents, tool calls, rate limits and resilient design, built from first principles.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wallasey and Wirral',
      h2: 'Wallasey and its neighbourhoods',
      intro: 'The ONS census count for Wallasey, and the suburbs recorded around it.',
      body: [
        { kind: 'table', caption: 'Wallasey and Birkenhead, ONS 2021 census counts', head: ['Built-up area', 'People (2021)'], rows: [
          ['Wallasey', '85,610'],
          ['Birkenhead', '109,835']
        ] },
        { kind: 'p', text: 'These are separate ONS figures, shown as released; the Wirral borough total of 320,199 comes from its own census table and covers many more places. New Brighton, Liscard, Seacombe, Egremont, Poulton, Leasowe and Moreton are all recorded as suburban areas in Wirral. Merseyside schools teach England\'s national curriculum; tell us your holiday dates and lessons will leave them free.' },
        { kind: 'callout', h3: 'Merseyside, the North West and our approach', p: 'See <a class="cg-inline-link" href="/coding-classes-in-merseyside">coding classes in Merseyside</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a> for the wider area. Why every course puts judgement ahead of prompting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Wallasey project',
      h2: 'Two hundred agents, one busy tool: retry storms and how to avoid them',
      intro: 'Time a real API, then simulate a crowd of agents and compare three ways of trying again.',
      body: [
        { kind: 'p', text: 'The learner first calls the Department for Transport\'s road traffic API for Wirral\'s 2024 records, politely, five times with a pause between: it returns 100 records and each call takes between 0.93 and 1.26 seconds, a median of 1.07. That becomes the answer time in a simulation. The rest is a stated assumption, not anything the DfT publishes: 200 agents all need an answer at once, the tool can accept 20 calls per second, and any call beyond that is refused straight away. Perfect coordination would finish in about 10 seconds plus the answer time.' },
        { kind: 'p', text: 'Three retry rules are compared, each run 50 times. Immediate retry tries again every tenth of a second. Exponential backoff waits a tenth of a second after the first refusal, then doubles the wait each time, up to 20 seconds. Exponential backoff with jitter uses the same growing limit, but each agent picks a random wait anywhere up to that limit.' },
        { kind: 'table', caption: 'Two hundred simulated agents sharing a tool that accepts 20 calls a second, median of 50 runs, our Python simulation, 29 September 2026', head: ['Retry rule', 'Last agent served', 'Calls sent', 'Calls refused', 'Typical agent served'], rows: [
          ['Retry immediately', '10.2 s', '6,300', '6,100', '5.6 s'],
          ['Exponential backoff', '107.2 s', '1,640', '1,440', '20.5 s'],
          ['Backoff with jitter', '19.6 s', '1,354', '1,154', '5.8 s']
        ] },
        { kind: 'p', text: 'Retrying immediately gets everyone served quickly, but only by sending 6,300 calls for 200 answers, more than 30 times the real need. A real service would likely block agents behaving like that. Plain exponential backoff cuts the calls to 1,640 but makes things far slower, because every refused agent waits exactly the same time and then returns at exactly the same moment: the whole crowd surges back together, gets refused together, and doubles its wait together. This is called a thundering herd, and here it pushes the last answer out to 107.2 seconds.' },
        { kind: 'p', text: 'Adding jitter, a random share of the wait, breaks the lockstep. The returning agents spread out, the tool stays steadily busy instead of swamped and then idle, and the crowd is served with the fewest calls of all, 1,354, while the typical agent is answered in 5.8 seconds, almost as fast as the flood. One line of randomness turns the slowest strategy into the most balanced one.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Act out a crowd at a door that fits a few people at a time, then try taking turns at random.' },
          { h3: 'Ages 11 to 15', p: 'Simulate ten agents and a slow tool in Python and count how many retries each rule sends.' },
          { h3: 'Ages 15 and up', p: 'Build the full simulation, add backoff and jitter, and measure load against waiting time.' }
        ] },
        { kind: 'callout', h3: 'A real API timing, a simulated crowd', p: 'The response times were measured on the Department for Transport road traffic API with a handful of spaced-out calls. The crowd, the capacity and the retry rules are a simulation of our own design; no real service was put under load.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Resilient agents',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A refusal is where careless agents and careful ones part ways.',
      body: [
        { kind: 'table', caption: 'From the Wallasey simulation to agents in practice', head: ['In the simulation', 'For AI agents and apps'], rows: [
          ['Immediate retry sent 6,300 calls', 'Hammering a tool gets you rate-limited or blocked'],
          ['Plain backoff moved in lockstep', 'Identical agents fail in identical ways'],
          ['Jitter spread the crowd out', 'A little randomness keeps shared services healthy'],
          ['Jitter used the fewest calls', 'Good manners and good performance can coincide'],
          ['Only five real calls were made', 'Test at scale in simulation, not on someone else\'s service']
        ] },
        { kind: 'p', text: 'Retry logic is one of the first things an AI assistant adds when asked to make code "more robust", and one of the easiest places for it to go wrong: a loop that retries forever, or retries instantly, can burn through a quota or get an account blocked. So whenever Wallasey learners vibe code, letting an AI draft a program from their description, they inspect each retry loop for three things: a wait that grows, a ceiling on it, and jitter. Agents built on language models call tools constantly, so the same habits apply. Older teens and adults take up agent building when their Python is steady; Copilot Studio agents are the one topic we teach only privately. More reading: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agents in our UK course range</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We have no tie to the Department for Transport, the ONS or postcodes.io beyond making a few courteous requests to their open services; the simulation, with its flaws, is ours alone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From taking turns to resilient agents',
    intro: 'We use the school year as a first guess and let the free lesson set the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Turn-taking, fairness and planning for when things are busy.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and simulation', p: 'Events, randomness and APIs alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Production-ready agents', p: 'Tool calls, retries, rate limits and monitoring in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and reliability',
    h2: 'What should an AI agent do when a tool call fails?',
    intro: 'Wait before retrying, make each wait longer, cap it, and add a random element so agents do not all return at once.',
    p1: 'In the Wallasey simulation that combination served 200 agents with the fewest calls, 1,354, while immediate retries sent 6,300 and plain backoff took 107.2 seconds because the crowd moved in lockstep.',
    p2: 'Learners who have watched a thundering herd form in their own code build agents that are polite to the services they depend on.',
    closer: 'Wallasey teenagers who can make agents fail gracefully are learning exactly what AI engineering needs in 2026, a strong reason to learn to code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'New Brighton to Seacombe, online',
    intro: 'You need a computer and a broadband connection that can handle a video call.',
    cells: [
      { h3: 'Learner-run programs', p: 'Students type, prompt and run the code themselves; the tutor watches via screen share and keeps asking what comes next.' },
      { h3: 'A trial to set the level', p: 'Rather than relying on school year, the free lesson reveals where to begin, and any exam board is noted.' },
      { h3: 'Lesson one free', p: 'The first session is free and finishes with a recommended course.' },
      { h3: 'Level-based classes', p: 'Groups are formed from five to ten British learners who share a stage.' },
      { h3: 'Twice a week', p: 'Lessons pause for school holidays.' },
      { h3: 'Times that stay put', p: 'Tutors adjust for UK clock changes, so your lesson hour holds all year.' }
    ],
    spec: { title: 'Why lessons are online', p: 'Five learners at one stage, all free on one evening, are rarely neighbours. Online, they can be classmates wherever they live.' }
  },

  fees: {
    h2: 'Wallasey fees',
    intro: 'Wallasey learners pay our international rate, the one used in every country except India.',
    first: 'A full first lesson free, finishing with our course suggestion.',
    group: 'Around eight live group lessons each month.',
    private: 'Around eight live one-to-one lessons each month.',
    closer: 'Our prices are in US dollars and we never bill in sterling. Payment is only requested after the trial, when a course and a weekly slot exist, and the pricing page deals with holidays, absences and format changes.'
  },

  reviewsH2: 'What Merseyside families and others across Britain say on Google',

  book: {
    h2: 'Book a free Wallasey lesson',
    intro: 'Share the learner\'s age or year and a favourite interest. The trial might feature a queueing puzzle, a Scratch game co-written with an AI, first lines of Python, or a miniature crowd of retrying agents.',
    success: 'Thank you. We have received your Wallasey request.'
  },

  faq: {
    h2: 'Wallasey questions',
    intro: 'Backoff, the retry simulation, vibe coding, agents and the practical side.',
    items: [
      { q: 'How many people live in Wallasey?', a: 'The 2021 census counted 85,610 in the Wallasey built-up area, according to the ONS.' },
      { q: 'Are vibe coding and AI agent lessons open to Wallasey learners?', a: 'Yes, through live online lessons for anyone aged 6 to 67 in Wallasey and across Wirral.' },
      { q: 'What is exponential backoff?', a: 'A retry rule where a program waits a little after a failure and doubles the wait after each further failure, usually with a cap and some randomness, called jitter.' },
      { q: 'What is the Wallasey project?', a: 'Learners time a real traffic-data API, then simulate 200 AI agents sharing a busy version of it and compare immediate retries, plain backoff and backoff with jitter.' },
      { q: 'Is agent building on offer?', a: 'After Python feels easy, which for most is the late teens or later; for Copilot Studio agents we offer private lessons only.' },
      { q: 'Are lessons face to face?', a: 'No, all teaching is online.' },
      { q: 'Do you support GCSE and A level students?', a: 'Yes, in computer science and maths, building understanding rather than promising grades.' },
      { q: 'What ages can join?', a: 'Any age from 6 to 67.' },
      { q: 'How much are lessons?', a: 'No charge for the first lesson; after that it is USD 100 per month to learn in a class or USD 150 per month on your own.' },
      { q: 'Are there lessons in the holidays?', a: 'No, we pause for them; send the dates and we plan around them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Merseyside and North West pages',
    html: 'Elsewhere on Wirral, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-birkenhead">Birkenhead</a> has its own project, as do <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-southport">Southport</a> and <a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool</a> in Merseyside. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every area we cover.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wallasey and Merseyside',
  footerPlaces: [
    { href: '/coding-classes-in-merseyside', label: 'Merseyside' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wly .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-wly .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-wly .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-wly .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wly .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.02em; }
.cg-root.cg-wly .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-wly .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wly .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-wly .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-wly .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Wirral (E08000015), Census 2021 TS001 usual residents 320,199. ONS 2021 BUAs (published): Wallasey 85,610; Birkenhead 109,835. postcodes.io (Wirral) suburban areas: New Brighton, Liscard, Seacombe, Egremont, Poulton, Leasowe, Moreton.',
    localProject: 'DfT road traffic API, Wirral 2024 AADF: 100 records; five spaced calls 0.93 to 1.26 s, median 1.07 s. Simulation (assumed capacity 20 calls/s, 200 agents at once), median of 50: immediate retry 10.2 s, 6,300 calls, 6,100 refused, typical agent 5.6 s; backoff 107.2 s, 1,640 calls, 1,440 refused, 20.5 s; backoff with jitter 19.6 s, 1,354 calls, 1,154 refused, 5.8 s. Lesson family: retry storms, exponential backoff, jitter, thundering herd.',
    requiredMentions: [
      '85,610',
      '320,199',
      'New Brighton',
      'Liscard',
      'Seacombe',
      'Egremont',
      'Leasowe',
      'thundering herd',
      'exponential backoff',
      '1,354'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations and TS001 usual residents via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Department for Transport road traffic statistics API, average annual daily flow for Wirral, 2024.', url: 'https://roadtraffic.dft.gov.uk/api/average-annual-daily-flow?filter[local_authority_id]=84&filter[year]=2024' },
      { claim: 'postcodes.io places: suburban areas in Wirral.', url: 'https://api.postcodes.io/places?q=Liscard' }
    ],
    rejectedClaims: [
      'The DfT API\'s real capacity or rate limits: not tested and not claimed; the simulated capacity is our assumption.',
      'Seaside, ferry or resort history: not read from a source; not claimed.',
      'That any service would block immediate retries: stated as "likely", not as a fact about a named service.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
