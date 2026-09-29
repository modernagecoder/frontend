'use strict';
// Tynemouth (cg- town page, UK cluster Phase 8, towns band A, row 398). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: does asking several AI agents, or
// one agent several times, give a better answer? (wisdom of crowds, self-consistency, independent vs shared errors).
// Data (read 29 September 2026): Nomis API, Census 2021 TS045 cars or vans (NM_2063_1), all 729 output areas in North
// Tyneside (E08000022): 96,231 households, 26,773 without a car or van = 27.82% (our sum of output areas).
// Our run (scratchpad tyn/crowd.py): each "agent" estimates the no-car share from 10 randomly chosen output areas; the
// crowd's answer is the median of its agents' estimates; 4,000 repetitions per setting. Mean error in percentage points
// (90th percentile in brackets), independent agents / agents sharing 8 of their 10 areas: 1 agent 4.08 (8.37) / 4.07
// (8.21); 3: 2.69 (5.56) / 3.79 (7.73); 5: 2.17 (4.54) / 3.82 (7.84); 9: 1.67 (3.46) / 3.71 (7.58); 15: 1.31 (2.67) / 3.67
// (7.59).
// Lesson family: wisdom of crowds, ensembles and self-consistency, independence of errors, shared sources. Screened:
// wisdom of crowds, self-consistency 0 hits. Gosport owns calibration of bootstrap intervals; Taunton owns swarm
// consensus (ant colony); Milton Keynes owns Monte Carlo area estimation.
// Place facts: North Tyneside (E08000022) TS001 208,967. ONS 2021 BUAs (published): Tynemouth 60,605; Whitley Bay 36,880;
// Wallsend 45,355. postcodes.io (North Tyneside) suburban areas: Cullercoats, Monkseaton, West Monkseaton, Percy Main,
// West Chirton.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'TYNEMOUTH', label: 'Tynemouth', blurb: 'Vibe coding and AI agents classes for Tynemouth, with a project on whether asking many AI agents beats asking one, measured on North Tyneside\'s census.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-tynemouth',
  code: 'tyn',
  accent: '#0E5C28',
  accentRationale: 'Tynemouth: a deep bottle green (6.56:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Tynemouth',
    eyebrow: 'Tynemouth, North Tyneside, Tyne and Wear, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Tyne and Wear' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-east-england', name: 'North East England' }],
  nav: [
    { label: 'Tyne and Wear', href: '/coding-classes-in-tyne-and-wear' },
    { label: 'North East', href: '/coding-and-ai-classes-in-north-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Tynemouth, England',
  title: 'Vibe Coding and AI Agents Classes in Tynemouth | Ages 6 to 67',
  description: 'Online vibe coding, AI agents and Python classes for Tynemouth, Whitley Bay, Cullercoats and Monkseaton learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Live online vibe coding and AI agents classes for Tynemouth, and a Python project testing whether a crowd of AI agents really beats a single one.',
  twitterDescription: 'Tynemouth vibe coding, AI agents and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Tynemouth',
    description: 'Online vibe coding, AI agents, Python, coding and mathematics for children, teenagers and adults in Tynemouth and North Tyneside, taught live with thinking skills first.'
  },

  h1: 'Vibe coding and AI agents classes in Tynemouth',
  capsuleQ: 'Where can Tynemouth learners find the best vibe coding and AI agents classes?',
  capsule: 'The 2021 census put 60,605 people in Tynemouth\'s built-up area, and the ONS lists Whitley Bay and Wallsend separately within North Tyneside, a borough of 208,967; Cullercoats, Monkseaton and Percy Main are among the recorded suburbs. From six to 67, learners in the borough can take vibe coding, AI agents, Python, coding and maths with an India-based tutor over live video, solo or among five to ten classmates at their level. We build thinking skills first, so learners can judge what an agent concludes rather than just accept it. Lesson one costs nothing and closes with our course suggestion. The Tynemouth project tests a popular idea about AI agents: that asking several of them, and taking the common answer, is safer than asking one. From then on it is USD 100 per month in a small class or USD 150 per month with a tutor of your own.',
  lead: 'A popular trick with AI systems is to ask the same question several times, or ask several agents, and go with the answer most of them give. It is called self-consistency, and it is a version of an old idea, the wisdom of crowds: many rough guesses, combined, can beat any single one. This project tests exactly when that works, using a question with a known answer. The 2021 census says 27.82% of North Tyneside\'s 96,231 households have no car or van. Each simulated agent estimates that figure from just ten output areas, and the learner compares crowds of agents that work independently with crowds that mostly look at the same evidence.',
  wa: 'Hello Modern Age Coders, we would like a free vibe coding or AI agents lesson for a learner in Tynemouth.',

  picks: {
    eyebrow: 'Tynemouth course picks',
    h2: 'Tynemouth courses for thinking, vibe coding and agents',
    intro: 'Four starting points arranged by age; every one begins with a free live lesson and needs no card to book.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: estimating, comparing guesses and asking where each guess came from.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps made by describing them to an AI and testing them.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the crowd-of-agents experiment.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents, ensembles, evaluation and how to combine several answers sensibly.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Tynemouth and North Tyneside',
      h2: 'Tynemouth, Whitley Bay and Wallsend',
      intro: 'Three North Tyneside built-up areas in the ONS 2021 census, and suburbs recorded around Tynemouth.',
      body: [
        { kind: 'table', caption: 'Three North Tyneside built-up areas, ONS 2021 census counts', head: ['Built-up area', 'People (2021)'], rows: [
          ['Tynemouth', '60,605'],
          ['Wallsend', '45,355'],
          ['Whitley Bay', '36,880']
        ] },
        { kind: 'p', text: 'The ONS publishes each of these separately, so they appear here without a total; North Tyneside\'s count of 208,967 comes from its own table. Cullercoats, Monkseaton, West Monkseaton, Percy Main and West Chirton are recorded as suburban areas in North Tyneside. North Tyneside schools follow England\'s national curriculum; share the holiday dates and we timetable around them.' },
        { kind: 'callout', h3: 'Tyne and Wear, the North East and our approach', p: 'Wider choices are on <a class="cg-inline-link" href="/coding-classes-in-tyne-and-wear">coding classes in Tyne and Wear</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-east-england">North East England</a>. Why we teach reasoning ahead of prompting is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Tynemouth project',
      h2: 'Is a crowd of AI agents wiser than one? Only if they think independently',
      intro: 'Give each agent ten output areas, combine their answers, and compare independent crowds with crowds that share evidence.',
      body: [
        { kind: 'p', text: 'Census 2021 table TS045 arrives from the Nomis API covering every one of North Tyneside\'s 729 output areas. Adding them up gives the true answer to the question every agent will be asked: 26,773 of 96,231 households, 27.82%, have no car or van. Each simulated agent answers from a sample of just ten output areas, so any one agent can easily be several points out. A crowd answers with the median of its agents\' estimates, a middle value that ignores wild outliers. Every setting is repeated 4,000 times to measure the typical error.' },
        { kind: 'table', caption: 'Typical error of a crowd\'s answer in percentage points (90th-percentile error in brackets), our Python run on North Tyneside census data, 29 September 2026', head: ['Agents in the crowd', 'Each with its own 10 areas', 'All sharing 8 of their 10 areas'], rows: [
          ['1', '4.08 (8.37)', '4.07 (8.21)'],
          ['3', '2.69 (5.56)', '3.79 (7.73)'],
          ['5', '2.17 (4.54)', '3.82 (7.84)'],
          ['9', '1.67 (3.46)', '3.71 (7.58)'],
          ['15', '1.31 (2.67)', '3.67 (7.59)']
        ] },
        { kind: 'p', text: 'When agents look at their own evidence, the crowd really is wiser: the typical error falls from 4.08 points for one agent to 1.31 for fifteen, and the bad days, the 90th-percentile errors, shrink from 8.37 points to 2.67. When the agents share most of their evidence, the crowd barely improves at all. Fifteen agents that each look at the same eight areas plus two of their own miss by 3.67 points on average, hardly better than one agent alone. They agree with each other because they share the same blind spots, not because they are right.' },
        { kind: 'p', text: 'This is the catch in self-consistency for AI. Asking the same model the same question five times, or giving five agents the same documents, produces answers with shared errors, and their agreement can look far more reassuring than it deserves. Combining answers helps most when the answers come from genuinely different evidence, methods or models.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Ask the class to guess the sweets in a jar, then compare the middle guess with each person\'s own.' },
          { h3: 'Ages 11 to 15', p: 'Draw ten random areas at a time in Python and see how far a lone estimate strays from 27.82%.' },
          { h3: 'Ages 15 and up', p: 'Build independent and shared-evidence crowds, measure their errors and explain the gap.' }
        ] },
        { kind: 'callout', h3: 'Census counts, our simulated agents', p: 'The car counts are Census 2021 figures from the Office for National Statistics, read through Nomis. The agents are simple simulations of our own; no language model was used, and every error figure comes from our code.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Crowds of agents',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Many voices only count as many if they did not copy each other.',
      body: [
        { kind: 'table', caption: 'From the Tynemouth crowd to real AI practice', head: ['In the simulation', 'With AI assistants and agents'], rows: [
          ['15 independent agents: 1.31-point error', 'Diverse sources really do help'],
          ['15 agents sharing evidence: 3.67', 'Many copies of one view add little'],
          ['The median ignored wild guesses', 'Combine answers in a way outliers cannot hijack'],
          ['Agreement came from shared blind spots', 'Consensus is not the same as correctness'],
          ['The true answer was known', 'Test combination methods where you can check them']
        ] },
        { kind: 'p', text: 'Multi-agent AI systems, where several agents draft, check and vote, are increasingly common, and they are easy to build with vibe coding: describe the agents and an AI writes the orchestration. Tynemouth learners go one step further and ask what each agent actually sees, because a panel fed identical inputs is one opinion said several times. The same question applies to asking one chatbot the same thing repeatedly. Real agent projects start when Python is second nature, mostly for older teens and adults; Copilot Studio work happens only in private sessions. Where it leads: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">building agents on our UK courses</a>; why we teach it this way: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We are independent of the ONS, Nomis and postcodes.io and drew only on their open data; the simulated agents, with any mistakes, are our work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From guessing jars to agent ensembles',
    intro: 'We take the school year as a hint and let the trial lesson decide the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Estimating, comparing guesses and spotting shared mistakes.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and simulation', p: 'Sampling, randomness and combining estimates beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Multi-agent AI', p: 'Agents, voting, evaluation and diverse sources in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and consensus',
    h2: 'Does asking an AI several times give a better answer?',
    intro: 'Only when the answers are independent; repeated answers from the same evidence mostly repeat the same mistakes.',
    p1: 'In the Tynemouth simulation, fifteen independent agents cut the typical error from 4.08 to 1.31 points, but fifteen agents sharing most of their evidence stayed at 3.67.',
    p2: 'Learners who have run both crowds look past agreement and ask what each answer was based on, whether it comes from people, chatbots or agents.',
    closer: 'A Tynemouth teenager who knows when many voices really help will build and use AI agents far more wisely, a great reason to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Cullercoats to Monkseaton, online',
    intro: 'All you need is a computer and a broadband line fit for video calls.',
    cells: [
      { h3: 'The learner codes', p: 'Students handle the keyboard throughout; tutors watch the screen share and keep probing with questions.' },
      { h3: 'Level from the trial', p: 'What the learner shows in the free session sets the starting point; exam boards are noted.' },
      { h3: 'Free first session', p: 'We charge nothing for session one and end it by recommending a course.' },
      { h3: 'Stage-based groups', p: 'Every class is five to ten British learners working at one stage.' },
      { h3: 'Two sessions weekly', p: 'Lessons pause during school holidays.' },
      { h3: 'Stable times', p: 'Our tutors move with the UK clocks, so the lesson hour holds.' }
    ],
    spec: { title: 'Why classes are online', p: 'Five learners at one stage who are free on the same evening rarely live near one another. Online, they can share a class wherever they are.' }
  },

  fees: {
    h2: 'Tynemouth fees',
    intro: 'Tynemouth learners pay our international rate, which covers every country but India.',
    first: 'A full lesson free at the start, ending with our course advice.',
    group: 'Around eight live group lessons per month.',
    private: 'Around eight live one-to-one lessons per month.',
    closer: 'We price in US dollars, never sterling. Nothing is billed before the trial agrees a course and a regular slot, and our pricing page handles holidays away, missed lessons and format swaps.'
  },

  reviewsH2: 'North East families and learners across Britain, on Google',

  book: {
    h2: 'Book a free Tynemouth lesson',
    intro: 'Tell us the learner\'s age or year group and something they enjoy. A trial might be a jar-guessing challenge, a Scratch game co-built with an AI, first steps in Python, or a small crowd of estimating agents.',
    success: 'Thank you. Your Tynemouth request has reached us.'
  },

  faq: {
    h2: 'Tynemouth questions',
    intro: 'Crowds of agents, self-consistency, vibe coding and practical details.',
    items: [
      { q: 'How many people live in Tynemouth?', a: 'At the 2021 census the Tynemouth built-up area had 60,605 residents, per the ONS.' },
      { q: 'Are vibe coding and AI agents lessons available in Tynemouth?', a: 'They are, over live video, open to learners from 6 to 67 anywhere in North Tyneside.' },
      { q: 'What is self-consistency in AI?', a: 'Asking a model or agent the same question several times and taking the most common answer; it helps most when the answers are genuinely independent.' },
      { q: 'What is the Tynemouth project?', a: 'Learners simulate crowds of agents estimating a real census figure for North Tyneside and compare crowds that use independent evidence with crowds that share it.' },
      { q: 'When can learners start building AI agents?', a: 'When Python feels natural, for most in the late teens or adulthood; Copilot Studio agent lessons are private.' },
      { q: 'Are lessons in person?', a: 'No, all lessons are online.' },
      { q: 'Can you support exam years?', a: 'GCSE and A level computer science and maths are covered, with understanding as the aim and no grade promised.' },
      { q: 'What ages do you teach?', a: 'Any age from 6 to 67.' },
      { q: 'How much are lessons?', a: 'Free for the first lesson; then USD 100 monthly within a group, or USD 150 monthly one-to-one.' },
      { q: 'Do lessons pause for school holidays?', a: 'Yes. Send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Tyne and Wear and North East pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle upon Tyne</a> has its own page and project, as do <a class="cg-inline-link" href="/online-coding-and-python-classes-in-hartlepool">Hartlepool</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-darlington">Darlington</a> elsewhere in the region. Every area is listed on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Tynemouth and Tyne and Wear',
  footerPlaces: [
    { href: '/coding-classes-in-tyne-and-wear', label: 'Tyne and Wear' },
    { href: '/coding-and-ai-classes-in-north-east-england', label: 'North East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-tyn .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-tyn .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-tyn .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-tyn .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-tyn .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.02em; }
.cg-root.cg-tyn .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-tyn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tyn .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-tyn .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-tyn .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'North Tyneside (E08000022), Census 2021 TS001 usual residents 208,967. ONS 2021 BUAs (published): Tynemouth 60,605; Wallsend 45,355; Whitley Bay 36,880. postcodes.io (North Tyneside) suburban areas: Cullercoats, Monkseaton, West Monkseaton, Percy Main, West Chirton.',
    localProject: 'TS045 over 729 North Tyneside OAs: 96,231 households, 26,773 no car (27.82%). Agents estimate from 10 random OAs; crowd = median; 4,000 repeats. Mean error (90th pct), independent / sharing 8 of 10: 1 agent 4.08 (8.37) / 4.07 (8.21); 3: 2.69 / 3.79; 5: 2.17 / 3.82; 9: 1.67 / 3.71; 15: 1.31 (2.67) / 3.67 (7.59). Lesson family: wisdom of crowds, self-consistency, independence of errors.',
    requiredMentions: [
      '60,605',
      '208,967',
      '96,231',
      'Whitley Bay',
      'Cullercoats',
      'Monkseaton',
      'Percy Main',
      'wisdom of crowds',
      'self-consistency'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations and TS001 usual residents via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Census 2021 TS045 cars or vans for North Tyneside output areas, via the Nomis API.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2063_1.data.csv?geography=E08000022&measures=20100' },
      { claim: 'postcodes.io places: suburban areas in North Tyneside.', url: 'https://api.postcodes.io/places?q=Cullercoats' }
    ],
    rejectedClaims: [
      'Priory, castle or seaside history: not read from a source; not claimed.',
      'That any named AI product uses self-consistency: described only as a general technique.',
      'Why some households have no car: not measured; not claimed.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
