'use strict';
// Bury (cg- town page, UK cluster Phase 8, towns band A, row 371). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how many tool calls should an AI
// agent spend on a simple question? Anchor (measured 28 September 2026): the Nomis API for Census 2021 TS007A
// (NM_2020_1), Bury E08000002 and England. Plan A, one call per age band per place: 38 calls, 718 bytes, 80.0 seconds in
// total. Plan B, one batched call with both places and all bands: 1 call, 932 bytes, 1.0 second, 38 rows, identical
// numbers. (Times depend on the network; reported as our run.)
// Lesson family: agent tool budgets, batching requests (the N+1 pattern), measuring calls and time, planning before acting.
// Screened: tool budget, N+1, API request, request count 0 hits (Stratum's "batch" is a different topic; Hertfordshire
// used light-time latency to Mars).
// Place facts: TS001 Bury 193,851 (TS007A total 193,850); TS007A: 0 to 4 11,159 (5.8%; England 5.4%); 5 to 9 12,490 (6.4%;
// 5.9%); 10 to 14 12,851 (6.6%; 6.0%); 20 to 24 9,545 (4.9%; 6.0%); 25 to 29 11,534 (5.9%; 6.6%); 85 and over 4,224 (2.2%;
// 2.4%). ONS 2021 BUAs: Bury 81,095; Prestwich 31,495; Radcliffe 31,115; Whitefield 22,185; Ramsbottom 17,075.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BURY', label: 'Bury', blurb: 'Online coding and Python classes for Bury, with an AI agent project that turns 38 slow data requests into one fast one.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-bury',
  code: 'bym',
  accent: '#320E5C',
  accentRationale: 'Bury: a deep mill-town violet (12.51:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Bury',
    eyebrow: 'Bury, Greater Manchester, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Greater Manchester', href: '/coding-classes-in-greater-manchester' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bury, Greater Manchester, England',
  title: 'Online Coding and Python Classes in Bury | AI, Ages 6 to 67',
  description: 'Live online coding, Python, vibe coding and AI classes for Bury, Prestwich, Radcliffe and Ramsbottom learners aged 6 to 67, solo or in groups. First lesson free.',
  ogDescription: 'Live online coding and Python classes for Bury, and an AI agent project that turns 38 slow data requests into a single fast one.',
  twitterDescription: 'Bury online coding, Python, vibe coding and AI classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Bury',
    description: 'Online coding, Python, vibe coding, AI and mathematics for children, teenagers and adults in Bury borough, taught live with thinking skills first.'
  },

  h1: 'Online coding and Python classes in Bury',
  capsuleQ: 'Which are the best online coding and Python classes in Bury?',
  capsule: 'Bury borough had 193,851 usual residents at the 2021 census, and the ONS gives 81,095 for the Bury built-up area, with Prestwich and Radcliffe each just over 31,000, Whitefield at 22,185 and Ramsbottom at 17,075. School-age children are a larger share than across England; people in their twenties, a smaller one. For families in Prestwich, Radcliffe, Whitefield, Ramsbottom or Bury itself, any learner aged 6 to 67 can study coding, Python, vibe coding, AI and maths in live video lessons led by our India-based tutors, either one-to-one or in a class of five to ten at the same stage. Good reasoning comes before any AI tool in our teaching. No charge applies to the opening lesson, and from the second lesson on it is USD 100 monthly in a class or USD 150 monthly on your own.',
  lead: 'AI agents get things done by calling tools: searching, fetching data, running code. Each call takes time and often costs money, so a well-designed agent plans before it acts. Our Bury project makes that concrete with a real public data service. A learner asks an agent a simple question: which age groups in Bury differ most from England? A first, vibe-coded agent answers it by fetching every number separately from the Nomis census service, one request per age band per place. That is 38 requests, and in our run they took 80 seconds. A single well-planned request fetched exactly the same 38 numbers in one second.',
  wa: 'Hello Modern Age Coders, please book a free coding or Python lesson for a Bury learner.',

  picks: {
    eyebrow: 'Bury course picks',
    h2: 'Thinking, vibe coding and Python courses for Bury',
    intro: 'Let age and interests lead; the first live lesson is free for every course, and there is no card to enter.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: planning, logic and working out the smart way first.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps built by talking to AI, with every result checked.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI builds for teenagers, including the tool-budget agent.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Students and adults', note: 'Python and AI automation, where efficient requests really matter.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bury borough',
      h2: 'More children, fewer young adults',
      intro: 'Six 2021 census age groups for Bury borough from Nomis, alongside England.',
      body: [
        { kind: 'table', caption: 'Bury borough against England: six age groups (TS007A)', head: ['Ages', 'Bury people', 'Bury share', 'England share'], rows: [
          ['0 to 4', '11,159', '5.8%', '5.4%'],
          ['5 to 9', '12,490', '6.4%', '5.9%'],
          ['10 to 14', '12,851', '6.6%', '6.0%'],
          ['20 to 24', '9,545', '4.9%', '6.0%'],
          ['25 to 29', '11,534', '5.9%', '6.6%'],
          ['85 and over', '4,224', '2.2%', '2.4%']
        ] },
        { kind: 'p', text: 'Children aged 10 to 14 are 0.6 points above England, and people aged 20 to 24 are 1.1 points below. Besides Bury, the ONS publishes Prestwich, Radcliffe, Whitefield and Ramsbottom as built-up areas in the borough. Schools here follow England\'s national curriculum, and our timetable leaves the holiday weeks you give us free of lessons.' },
        { kind: 'callout', h3: 'Plan first, prompt second', p: 'Our approach is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>. County options are on <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bury project',
      h2: 'From 38 requests to one',
      intro: 'Time an agent that fetches numbers one at a time, then teach it to plan a single request.',
      body: [
        { kind: 'p', text: 'The census age table on Nomis has 19 rows for each place, a total plus 18 age bands. To compare Bury with England, an agent needs all 38 numbers. The learner\'s first agent treats the data service like a person answering questions one by one: "how many Bury residents are aged 20 to 24?", then "how many in England?", and so on, each a separate web request. It works, and it gets every number right. It also makes 38 requests that, in our run, added up to 80.0 seconds of waiting and 718 bytes of data.' },
        { kind: 'table', caption: 'Two ways to fetch the Bury and England age table from Nomis, our timed run, 28 September 2026', head: ['Plan', 'Requests', 'Data received', 'Time taken'], rows: [
          ['One request per age band per place', '38', '718 bytes', '80.0 seconds'],
          ['One batched request for both places and all bands', '1', '932 bytes', '1.0 second'],
          ['Numbers returned', '38 in each case', 'Identical', 'Checked by the program']
        ] },
        { kind: 'p', text: 'The batched request asks for both places and every age band at once, and the service returns all 38 rows in a single reply. It carries slightly more data, 932 bytes, because each row includes labels, but it finishes in about one second, eighty times faster. The program checks that every number matches the 38 separate answers exactly. Programmers call the slow pattern the N+1 problem: fetching a list, then fetching each item separately. It is one of the most common reasons real software, and real AI agents, feel sluggish or run up large bills.' },
        { kind: 'p', text: 'Finally the learner gives the agent a tool budget: at most five requests per question. The first agent now fails halfway through, so the learner adds a planning step where the agent writes down what it needs before calling anything and groups those needs into as few requests as possible. With the plan in place, the question about Bury uses one request out of five and leaves room for follow-ups. The timing depends on the network, so the learner runs it several times and reports the range, not a single lucky number.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Ask for items one at a time, then with a shopping list, and time both.' },
          { h3: 'Ages 11 to 15', p: 'Fetch census numbers in Python one by one, then in a single request, and compare.' },
          { h3: 'Ages 15 and up', p: 'Give an agent a request budget, add a planning step and measure the difference.' }
        ] },
        { kind: 'callout', h3: 'Nomis data, our timings', p: 'Numbers come from the Census 2021 age table TS007A through the Nomis API. The two fetching plans and the timings are our own, measured on one day and one connection.' }
      ]
    },
    {
      id: 'agents', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'Efficient agents start with a plan',
      intro: 'Why the Bury lesson applies to every AI agent that calls tools.',
      body: [
        { kind: 'table', caption: 'Built-up areas in Bury borough, ONS 2021 published figures', head: ['Built-up area', 'People'], rows: [
          ['Bury', '81,095'],
          ['Prestwich', '31,495'],
          ['Radcliffe', '31,115'],
          ['Whitefield', '22,185'],
          ['Ramsbottom', '17,075']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to vibe code a data fetcher and you may well get the one-at-a-time version: correct, readable and slow. Recognising the pattern and fixing it takes someone who thinks about what the program does, not just whether it runs. That thinking starts with planning puzzles in our how-to-think programme, grows as teenagers vibe code and then improve their own projects, and matures when older students and adults build Python agents with budgets and planning steps; Copilot Studio agents are taught in private lessons. Read about <a class="cg-inline-link" href="/vibe-coding-for-teens">vibe coding for teenagers</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for students in the UK</a>.' },
        { kind: 'p', text: 'Nomis and the Office for National Statistics are not connected with Modern Age Coders; the data are theirs, and the fetching plans, timings and any errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From shopping lists to efficient agents',
    intro: 'Start with the school year; the free lesson finds the true level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Planning, logic and smart shortcuts.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps built with AI, then tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, data and web', p: 'APIs, data and AI projects beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-science-course-for-teens-python-data'] },
      { band: 'Adults', h3: 'Automation and agents', p: 'Efficient Python automation and AI agents.', courses: ['python-ai-automation-masterclass-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents and efficiency',
    h2: 'Is your AI agent asking 38 questions when one would do?',
    intro: 'Correct is not the same as well designed.',
    p1: 'The first Bury agent got every number right and took eighty times longer than it needed to. Large AI agents that call tools one by one can waste time and money in exactly the same way.',
    p2: 'A learner who has measured both plans knows to ask how many calls a program makes, and to plan before acting.',
    closer: 'Bury teenagers who can make AI agents both correct and efficient will be ahead of the crowd, which is why coding is still worth learning in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Prestwich to Ramsbottom, online',
    intro: 'A computer and a good connection bring lessons to any home in the borough.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'Learners write, prompt and test the code themselves; the tutor follows the shared screen with questions.' },
      { h3: 'Placed by ability', p: 'What the trial reveals, more than the year group on paper, decides the first topic; exam boards are recorded too.' },
      { h3: 'Free trial', p: 'A complete lesson without charge, then a clear recommendation.' },
      { h3: 'Peers at your pace', p: 'Classes gather five to ten UK learners who are progressing at the same rate.' },
      { h3: 'Two lessons weekly', p: 'Holidays are left clear.' },
      { h3: 'Same hour, every week', p: 'Tutors adjust for the UK clock changes.' }
    ],
    spec: { title: 'Why classes are online', p: 'Five Bury learners at one stage, free at one hour, rarely share a street. Online, each finds a suitable group.' }
  },

  fees: {
    h2: 'Bury fees',
    intro: 'In Bury, as in every country apart from India, one international price applies.',
    first: 'A full lesson for free, followed by our course suggestion.',
    group: 'Roughly eight live group lessons per month.',
    private: 'Roughly eight live one-to-one lessons per month.',
    closer: 'All prices are in US dollars. We only invoice after the trial has agreed a course and a weekly slot; the pricing page explains holidays, absences and changing format.'
  },

  reviewsH2: 'Google reviews: Greater Manchester households and others',

  book: {
    h2: 'Book a free Bury lesson',
    intro: 'Just mention the learner\'s age or school year and one thing that excites them. The first lesson could be a planning puzzle, a Scratch game built with AI, a first Python program, or timing slow and fast data requests.',
    success: 'Thank you. Your Bury request has been received.'
  },

  faq: {
    h2: 'Bury questions',
    intro: 'Tool budgets, vibe coding, AI agents and practical details.',
    items: [
      { q: 'What is the population of Bury?', a: 'The 2021 census counted 193,851 usual residents in Bury borough; the ONS gives 81,095 for the Bury built-up area.' },
      { q: 'Can Bury learners take coding and Python classes online?', a: 'Certainly. Teaching happens on live video, so Ramsbottom is as close to us as Prestwich.' },
      { q: 'What is the N+1 problem?', a: 'Fetching a list and then each item separately, which multiplies the number of requests; batching the requests fixes it.' },
      { q: 'Is vibe coding included?', a: 'Yes, with learners planning first and then reading, testing and improving what the AI writes.' },
      { q: 'Where do AI agents fit in?', a: 'They come after some Python, usually for older teenagers and adults; Copilot Studio agent work is private tuition only.' },
      { q: 'Is there a classroom I bring my child to?', a: 'No; every session is online and live.' },
      { q: 'Will you help with exam-year computing or maths?', a: 'Yes, at GCSE and A level. We build understanding and do not guarantee results.' },
      { q: 'Which ages can join?', a: 'From age 6 to age 67.' },
      { q: 'How much are lessons?', a: 'Lesson one: free. Afterwards: USD 100 a month to learn in a group, USD 150 a month for private lessons.' },
      { q: 'Do lessons pause for school holidays?', a: 'Yes; tell us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other Greater Manchester pages',
    html: 'Close by, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bolton">Bolton</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-rochdale">Rochdale</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-wigan">Wigan</a> have their own pages. Wider choices live on <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">the Greater Manchester page</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>, with the complete list on our <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bury and Greater Manchester',
  footerPlaces: [
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bym .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-bym .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-bym .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-bym .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bym .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-bym .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-bym .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bym .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-bym .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-bym .cg-callout { border-left-width: 6px; border-radius: 0 11px 11px 0; }
`,

  dossier: {
    curriculumAuthority: 'Bury (E08000002). Nomis Census 2021 TS001 193,851 (TS007A 193,850). TS007A: 0 to 4 11,159 (5.8%, England 5.4%); 5 to 9 12,490 (6.4%, 5.9%); 10 to 14 12,851 (6.6%, 6.0%); 20 to 24 9,545 (4.9%, 6.0%); 25 to 29 11,534 (5.9%, 6.6%); 85 and over 4,224 (2.2%, 2.4%). ONS 2021 BUAs: Bury 81,095; Prestwich 31,495; Radcliffe 31,115; Whitefield 22,185; Ramsbottom 17,075.',
    localProject: 'Nomis API NM_2020_1, Bury + England, 19 values each. Plan A: 38 calls, 718 bytes, 80.0 s. Plan B: 1 batched call, 932 bytes, 1.0 s, 38 rows, identical numbers. Budget of 5 calls: plan A fails, planning step groups needs into 1 call. Lesson family: agent tool budget, batching (N+1), measuring calls/time, plan before act.',
    requiredMentions: [
      '193,851',
      '81,095',
      'Prestwich',
      'Radcliffe',
      'Whitefield',
      'Ramsbottom',
      'N+1',
      'tool budget',
      'batched'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A via the Nomis API, Bury and England.', url: 'https://www.nomisweb.co.uk/api/v01/help' },
      { claim: 'Nomis Census 2021 TS001, Bury.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' }
    ],
    rejectedClaims: [
      'Typical response times of Nomis: not claimed; only our single run is reported.',
      'Costs of any commercial AI agent: not claimed.',
      'Textile and market history: not read from a source; not claimed.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
