'use strict';
// Sutton Coldfield, Birmingham (cg- district page, UK cluster Phase 9, row 450). Keyword slug per the owner's rotation,
// with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how should an AI agent behave towards a
// service that limits how fast it may ask? (token bucket rate limiting: burst capacity, refill rate, and an agent that
// keeps its own copy of the bucket instead of hammering and retrying).
// Data (read 30 September 2026): 20 real map downloads from the OpenStreetMap API 0.6 over bbox -1.870,52.530,-1.770,52.600
// (5 by 4 tiles, ODbL), with the size and duration of each recorded (scratchpad stc/tiles.json): total 112.0 MB, largest
// tile 11.4 MB, smallest 0.95 MB, median 5.8 MB, 54.9 s of download time in all. (An earlier 24-tile fetch in this session
// received one real HTTP 509 "Bandwidth Limit Exceeded" from the same API.)
// Our simulation (stc/tb.py): an INVENTED server policy, stated as invented on the page: a bucket of 20 MB that refills at
// 1 MB per second; a request larger than the tokens available is refused. Agents replay the 20 real tile sizes and
// download times. Total time / refused requests: retry every 1 s 93.9 s / 39; retry every 5 s 94.9 s / 8; retry every 30 s
// 144.9 s / 3; doubling backoff 93.9 s / 22; fixed 2 s gap 102.9 s / 4; fixed 10 s gap 254.9 s / 0; agent keeping its own
// token bucket 93.2 s / 0. Floor from the refill rate: (112.0 - 20) / 1 = 92.0 s.
// Lesson family: token bucket rate limiting, polite clients. Screened: "token bucket", "leaky bucket" 0 hits; claimed in
// claims.txt. Wallasey owns exponential backoff and jitter when a tool says no; here the lesson is the bucket model and
// never being refused at all.
// Place facts: ONS 2021 BUA (published): Royal Sutton Coldfield 93,375. Census 2021 TS001 by 2022 ward: Sutton Vesey 20,113;
// Sutton Walmley & Minworth 16,318; Sutton Roughley 11,965; Sutton Mere Green 10,145; Sutton Reddicap 10,035; Sutton
// Trinity 9,485; Sutton Four Oaks 9,329; Sutton Wylde Green 9,295. postcodes.io (Birmingham) suburban areas: Four Oaks,
// Mere Green, Walmley, Wylde Green, Boldmere, Maney, New Oscott, Minworth, Roughley, Reddicap Heath.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'SUTTON COLDFIELD', label: 'Sutton Coldfield, Birmingham', blurb: 'Vibe coding and AI agents classes for Sutton Coldfield, with a project on how a well-behaved agent paces its requests to a rate-limited service.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-sutton-coldfield-birmingham',
  code: 'stc',
  accent: '#8A4B00',
  accentRationale: 'Sutton Coldfield: a burnt amber brown (6.8:1 contrast), hand-picked to differ in hue from recent pages',
  pageType: 'city',
  place: {
    name: 'Sutton Coldfield',
    eyebrow: 'Sutton Coldfield, Birmingham, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'Birmingham', href: '/coding-classes-in-birmingham' },
    { label: 'West Midlands', href: '/coding-classes-in-the-west-midlands' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Sutton Coldfield, Birmingham',
  title: 'Vibe Coding and AI Agents Classes in Sutton Coldfield | 6 to 67',
  description: 'Live online vibe coding, AI agents and Python lessons for Sutton Coldfield, Four Oaks, Boldmere and Walmley learners aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Sutton Coldfield, with a project on token buckets: how an agent should pace requests to a rate-limited service.',
  twitterDescription: 'Sutton Coldfield vibe coding, AI agents and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Sutton Coldfield',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Sutton Coldfield and north Birmingham, taught live with careful system thinking.'
  },

  h1: 'Vibe coding and AI agents classes in Sutton Coldfield',
  capsuleQ: 'Where can Sutton Coldfield learners find the best vibe coding and AI agents classes?',
  capsule: 'The ONS counted 93,375 people in the Royal Sutton Coldfield built-up area at the 2021 census, inside the city of Birmingham. Four Oaks, Mere Green, Boldmere, Walmley, Wylde Green and Maney are among its recorded suburbs. Six-year-olds, teenagers and adults up to 67 can all take vibe coding, AI agents, Python, coding and maths here by live video with a tutor in India, in private sessions or a class of five to ten at one stage. We teach how systems behave before handing over tools, so learners understand why an agent gets blocked and how to stop it happening. A free first session ends with our pick of course. The Sutton Coldfield project records 20 real map downloads covering the town, then tests how different agents fare against a service that rations data with a token bucket. Afterwards a class place is USD 100 per month and a private tutor USD 150 per month.',
  lead: 'Almost every online service an AI agent uses, from map data to language models, limits how fast a client may ask. A common way to do it is the token bucket. Picture a bucket that holds a fixed number of tokens and is topped up at a steady drip. Every request spends tokens; if there are not enough, the request is refused. A full bucket allows a short burst, and after that the drip sets the pace. An agent that does not understand this fires requests, gets refused, waits a guess, and tries again. An agent that does understand it never gets refused at all. This project compares them, using the sizes of real map downloads over Sutton Coldfield.',
  wa: 'Hello Modern Age Coders, could we book a free vibe coding or AI agents lesson for a learner in Sutton Coldfield?',

  picks: {
    eyebrow: 'Sutton Coldfield course picks',
    h2: 'Sutton Coldfield courses in thinking, vibe coding and agents',
    intro: 'Pick the age band that fits. Whichever course it is, lesson one is live, costs nothing and needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: taking turns, sharing a limited supply and planning ahead.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games the child invents, an AI helps to code, and the child tests.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the rate-limited download agent.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents that call real services politely: limits, queues and retries, in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Sutton Coldfield',
      h2: 'Four Oaks, Boldmere, Walmley and the Sutton wards',
      intro: 'The ONS built-up area count, and Census 2021 residents in the eight Sutton wards of Birmingham.',
      body: [
        { kind: 'table', caption: 'Royal Sutton Coldfield built-up area (ONS) and Birmingham wards beginning "Sutton", Census 2021 via Nomis', head: ['Area', 'Residents (2021)'], rows: [
          ['Royal Sutton Coldfield built-up area', '93,375'],
          ['Sutton Vesey ward', '20,113'],
          ['Sutton Walmley & Minworth ward', '16,318'],
          ['Sutton Roughley ward', '11,965'],
          ['Sutton Mere Green ward', '10,145'],
          ['Sutton Reddicap ward', '10,035'],
          ['Sutton Trinity ward', '9,485'],
          ['Sutton Four Oaks ward', '9,329'],
          ['Sutton Wylde Green ward', '9,295']
        ] },
        { kind: 'p', text: 'The built-up area and the wards are drawn on different boundaries, so the ward rows are not meant to add up to the first line and we have not added them. Postcodes.io records Four Oaks, Mere Green, Walmley, Wylde Green, Boldmere, Maney, New Oscott, Minworth, Roughley and Reddicap Heath as suburban areas of Birmingham. Schools here follow England\'s national curriculum; tell us the holiday weeks and no lesson will land in them.' },
        { kind: 'callout', h3: 'Birmingham, the West Midlands and how we teach', p: 'See <a class="cg-inline-link" href="/coding-classes-in-birmingham">coding classes in Birmingham</a> and <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">the West Midlands</a>. The reason thinking comes before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Sutton Coldfield project',
      h2: 'A token bucket and seven agents: fetching Sutton Coldfield without being refused',
      intro: 'Real download sizes, one invented rationing rule, and a count of every refusal.',
      body: [
        { kind: 'p', text: 'First the learner downloads the OpenStreetMap data for a rectangle over Sutton Coldfield in 20 tiles, slowly and politely, and records how big each download was and how long it took. The tiles vary a great deal: the smallest is 0.95 MB, the largest 11.4 MB, and the whole town comes to 112.0 MB and 54.9 seconds of downloading.' },
        { kind: 'p', text: 'Then comes the experiment, which is a simulation. We invent a server rule, and it is ours, not OpenStreetMap\'s: a bucket holding 20 MB of allowance that refills at 1 MB per second, with any request bigger than the current allowance refused. Seven agents replay the same 20 real tiles against that rule. Because 112.0 MB must pass through a bucket that starts with 20 MB and gains 1 MB a second, no agent can possibly finish in under about 92 seconds.' },
        { kind: 'table', caption: 'Twenty real Sutton Coldfield map tiles replayed against our invented 20 MB, 1 MB per second token bucket', head: ['Agent', 'Time to finish', 'Requests refused'], rows: [
          ['Fire at once, retry every second', '93.9 s', '39'],
          ['Fire at once, retry every 5 seconds', '94.9 s', '8'],
          ['Fire at once, retry every 30 seconds', '144.9 s', '3'],
          ['Fire at once, doubling the wait each time', '93.9 s', '22'],
          ['Always pause 2 seconds between tiles', '102.9 s', '4'],
          ['Always pause 10 seconds between tiles', '254.9 s', '0'],
          ['Keep its own copy of the bucket', '93.2 s', '0']
        ] },
        { kind: 'p', text: 'The impatient agents finish almost as quickly as is possible, but only by being refused again and again: 39 times for the one that retries every second. Real services notice that, and respond with longer blocks or bans. The cautious agent that always waits 10 seconds is never refused, and takes nearly three times as long as it needed to. The agent that models the bucket itself, waiting exactly until enough allowance has dripped in for the next tile, finishes in 93.2 seconds, within about a second of the limit, and is not refused once. Knowing the rule beats both guessing and grovelling.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play a game with a jar of counters refilled one at a time, and work out when you can afford each move.' },
          { h3: 'Ages 11 to 15', p: 'Write a token bucket in Python and feed it the 20 real tile sizes.' },
          { h3: 'Ages 15 and up', p: 'Build all seven agents, measure refusals and time, and design one that copes when the rule is unknown.' }
        ] },
        { kind: 'callout', h3: 'Real tile sizes, invented limit', p: 'Tile sizes and timings come from our own downloads of OpenStreetMap data, which is published by OpenStreetMap and its contributors under the Open Database Licence. The 20 MB and 1 MB per second rule is invented for teaching and is not OpenStreetMap\'s policy; real services publish their own limits, and an agent should read and respect them.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Polite agents',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'An agent is a guest on every service it calls.',
      body: [
        { kind: 'table', caption: 'From the Sutton Coldfield bucket to real AI agents', head: ['In the download project', 'When an agent calls real services'], rows: [
          ['Retrying every second was refused 39 times', 'Hammering a limit gets clients blocked'],
          ['A 10-second pause wasted two and a half minutes', 'Blind caution is slow'],
          ['Modelling the bucket gave zero refusals', 'Knowing the rule lets an agent go at full speed safely'],
          ['Tiles ranged from 0.95 to 11.4 MB', 'Costs differ per request; count them'],
          ['No agent could beat about 92 seconds', 'Some limits are arithmetic, not skill']
        ] },
        { kind: 'p', text: 'Language model services meter their clients in much the same way, by requests and by tokens per minute, and an agent that ignores the meter spends its time being turned away. When our Sutton Coldfield learners vibe code, telling an AI what to build in plain English, they add one line to every brief that touches the network: say what the limits are and how the program will stay inside them. They then check the code really does. Agent building is for learners whose Python is already reliable, generally from about sixteen, and Copilot Studio agents are covered in private lessons only. The course outline is on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>; the thinking behind it is on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We are independent of OpenStreetMap, the Office for National Statistics, Nomis and postcodes.io. Their open data is all we used, and the simulation, with any faults, is our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From counters in a jar to well-behaved agents',
    intro: 'We treat the school year as a first guess and let the trial lesson correct it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Turns, limits and planning with a fixed supply.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small games and apps, described to an AI and tested by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and the web', p: 'APIs, limits and simulation alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Agents in production', p: 'Rate limits, queues, retries and monitoring for Python agents.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and limits',
    h2: 'What is a token bucket, and how should an AI agent handle rate limits?',
    intro: 'A token bucket is a rate limit that allows a burst up to a fixed size and then a steady refill rate; an agent should track the same bucket itself and wait until it can afford each request, instead of firing requests and retrying after refusals.',
    p1: 'Replaying 20 real map downloads over Sutton Coldfield (112.0 MB) against an invented 20 MB, 1 MB per second bucket, an agent that retried every second was refused 39 times, while one that kept its own copy of the bucket finished in 93.2 seconds with no refusals.',
    p2: 'Learners who have run that race ask of any agent that calls a service: does it know the limit, and how many times was it turned away?',
    closer: 'Building agents that respect limits is how Sutton Coldfield teenagers learn to be trusted with real systems, and that starts with writing the code themselves.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Four Oaks to Wylde Green, by video',
    intro: 'A computer, a webcam and a home connection that can stream are the full kit list.',
    cells: [
      { h3: 'Pupils at the keyboard', p: 'The learner writes the code and the prompts; the tutor watches the shared screen and asks what will happen next.' },
      { h3: 'Trial decides the level', p: 'Half an hour of real work shows where to start, and any exam board is noted.' },
      { h3: 'First session free', p: 'No fee for the trial, which ends with a course suggestion.' },
      { h3: 'Five to ten per class', p: 'Classmates come from across the UK and share a level.' },
      { h3: 'Twice a week', p: 'Term time only.' },
      { h3: 'Fixed slot', p: 'Clock changes are handled by the tutor, so your time does not move.' }
    ],
    spec: { title: 'Why not a classroom', p: 'A class of five at one level, free on the same evening, is hard to gather in one suburb. Online, the class forms wherever the learners are.' }
  },

  fees: {
    h2: 'Sutton Coldfield fees',
    intro: 'Learners in Sutton Coldfield are on our international price list, used in every country except India.',
    first: 'One complete lesson free, then our advice.',
    group: 'Around eight live class lessons each month.',
    private: 'Around eight live private lessons each month.',
    closer: 'We quote US dollars and do not publish pound prices. Billing starts only after the trial has fixed the course and a regular time, and the pricing page explains holidays, missed lessons and moving between class and private tuition.'
  },

  reviewsH2: 'What West Midlands parents and learners elsewhere say on Google',

  book: {
    h2: 'Book a free Sutton Coldfield lesson',
    intro: 'Send an age or year group and something the learner is keen on. We might begin with the counter-jar game, a Scratch project steered by the child and typed by an AI, some beginner Python, or a small agent that fetches data politely.',
    success: 'Thank you. Your Sutton Coldfield request is with us.'
  },

  faq: {
    h2: 'Sutton Coldfield questions',
    intro: 'Rate limits, the download project, vibe coding, agents and the practical side.',
    items: [
      { q: 'How many people live in Sutton Coldfield?', a: 'The ONS gives 93,375 residents for the Royal Sutton Coldfield built-up area at the 2021 census.' },
      { q: 'Are vibe coding and AI agents classes available in Sutton Coldfield?', a: 'Yes, online: live video lessons for ages 6 to 67 across Four Oaks, Boldmere, Walmley and the other Sutton wards.' },
      { q: 'What is rate limiting?', a: 'A rule that caps how much a client may ask of a service in a given time, to keep the service fair and stable. Going over the limit means requests are refused.' },
      { q: 'What does HTTP 429 mean?', a: 'It is the standard "Too Many Requests" reply from a web service, telling the client it has exceeded a rate limit and should slow down. Some services use other codes for the same message.' },
      { q: 'What is the Sutton Coldfield project?', a: 'Recording 20 real map downloads over the town, then simulating seven agents against a token bucket limit to compare speed and refusals.' },
      { q: 'What is vibe coding?', a: 'Building software by describing it in everyday language to an AI that writes the code, while the learner plans, checks and corrects it.' },
      { q: 'At what age do learners build agents?', a: 'Once Python is reliable, generally from about sixteen; Copilot Studio agents are private lessons only.' },
      { q: 'Do you cover GCSE and A level?', a: 'Computer science and maths, yes, taught for understanding; we do not promise grades.' },
      { q: 'What are the fees?', a: 'Free for the trial, then USD 100 per month in a class or USD 150 per month privately.' },
      { q: 'Are there lessons in the holidays?', a: 'No; tell us the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Birmingham and West Midlands pages',
    html: 'Other pages, each with a different project: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-tamworth">Tamworth</a>, <a class="cg-inline-link" href="/best-coding-class-in-lichfield">Lichfield</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-walsall">Walsall</a> and <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Sutton Coldfield and Birmingham',
  footerPlaces: [
    { href: '/coding-classes-in-birmingham', label: 'Birmingham' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-stc .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-stc .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-stc .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-stc .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-stc .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.02em; }
.cg-root.cg-stc .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-stc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-stc .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-stc .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-stc .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Birmingham (E08000025). ONS 2021 BUA (published): Royal Sutton Coldfield 93,375. Census 2021 TS001 by 2022 ward via Nomis: Sutton Vesey 20,113; Sutton Walmley & Minworth 16,318; Sutton Roughley 11,965; Sutton Mere Green 10,145; Sutton Reddicap 10,035; Sutton Trinity 9,485; Sutton Four Oaks 9,329; Sutton Wylde Green 9,295. postcodes.io (Birmingham): Four Oaks, Mere Green, Walmley, Wylde Green, Boldmere, Maney, New Oscott, Minworth, Roughley, Reddicap Heath.',
    localProject: 'OSM API 0.6, bbox -1.870,52.530,-1.770,52.600, 20 tiles: 112.0 MB, 0.95 to 11.4 MB, 54.9 s download. Simulated INVENTED token bucket 20 MB + 1 MB/s. Time / refusals: retry 1 s 93.9/39; 5 s 94.9/8; 30 s 144.9/3; doubling 93.9/22; gap 2 s 102.9/4; gap 10 s 254.9/0; own bucket 93.2/0; floor 92.0 s. Lesson family: token bucket rate limiting.',
    requiredMentions: [
      '93,375',
      '20,113',
      'Four Oaks',
      'Boldmere',
      'Walmley',
      'Wylde Green',
      'Mere Green',
      'Maney',
      'token bucket',
      '112.0 MB'
    ],
    sources: [
      { claim: 'OpenStreetMap API 0.6 map data over Sutton Coldfield, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 by ward via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas in Birmingham.', url: 'https://api.postcodes.io/places?q=Boldmere' }
    ],
    rejectedClaims: [
      'OpenStreetMap\'s actual rate or bandwidth limits: not stated; the bucket on the page is invented and labelled so.',
      'Sutton Park, royal town or civic history: not read from a source; not claimed.',
      'Sum of the eight ward counts, or any comparison with the built-up area: different boundaries; not added.',
      'Any named language-model provider\'s limits: not quoted.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
