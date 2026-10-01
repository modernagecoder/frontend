'use strict';
// Port Talbot (cg- town page, UK cluster Phase 10, towns band B, row 562). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when several AI agents each keep their own
// log, how do you tell what happened first? (Lamport clocks, vector clocks, happened-before, concurrency; wall-clock
// skew reorders cause and effect.)
// Model (INVENTED, stated on the page): three agents; events across the system roughly every 0.1 s (exponential); 35%
// of events send a message to one of the other two agents; delivery delay exponential, mean 0.2 s; each agent's wall
// clock has a fixed offset drawn uniformly from plus or minus the skew. 20 runs of about 300 events each, seeds 0 to 19
// (scratchpad ptb/clocks.py). 1,537 messages in total. Receives stamped earlier than their own send by wall clock: skew
// 0: 0; 0.05 s: 84 (5.5%); 0.2 s: 305 (19.8%); 0.5 s: 484 (31.5%); 1 s: 618 (40.2%). Lamport clocks: 0 at every skew.
// Pairs of events: 57,104 of 899,102 are concurrent (6.4%); Lamport numbers differ for 52,786 of them (92.4%), so a
// Lamport-sorted log shows an order that never existed; vector clocks mark all 57,104 as concurrent. Vector clocks
// cost one integer per agent on every message (3 here).
// Lesson family: logical clocks (Lamport, vector). Screened: vector clock, logical clock, happened-before, lamport clock:
// 0 hits; "lamport" appears only as the author of the Byzantine generals paper on Grays; claimed. NPT county page =
// stack effect; Swansea, Bridgend, Neath (H11, collation) checked: none about clocks.
// Place facts: Neath Port Talbot TS001 142,289. ONS 2021 BUA (published): Port Talbot 31,555. postcodes.io suburban
// areas whose nearest postcode is in the Port Talbot BUA: Aberavon, Sandfields, Taibach, Margam, Velindre. Baglan,
// Cwmavon and Bryn have their own BUAs; left out.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'PORT TALBOT', label: 'Port Talbot', blurb: 'Vibe coding and AI agents classes for Port Talbot, with a project on merging the logs of several agents whose clocks disagree.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-port-talbot',
  code: 'ptb',
  accent: '#68641C',
  accentRationale: 'Port Talbot: a muted dune olive (6.13:1 contrast on white), chosen by hand and kept clear of the other South Wales pages',
  pageType: 'city',
  place: {
    name: 'Port Talbot',
    eyebrow: 'Port Talbot, Neath Port Talbot, Wales',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Neath Port Talbot' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Neath Port Talbot', href: '/coding-classes-in-neath-port-talbot' },
    { label: 'Swansea', href: '/best-coding-class-in-swansea' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Port Talbot, Neath Port Talbot',
  title: 'Vibe Coding and AI Agents Classes in Port Talbot | Ages 6 to 67',
  description: 'Live online vibe coding and AI agents classes for Port Talbot, Aberavon, Sandfields and Margam, ages 6 to 67, with Python and maths. The first lesson is free.',
  ogDescription: 'Vibe coding and AI agents classes for Port Talbot, with a project on vector clocks and agents whose clocks disagree.',
  twitterDescription: 'Port Talbot vibe coding and AI agents lessons, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Port Talbot',
    description: 'Online vibe coding, AI agents, Python and maths lessons for children, teenagers and adults in Port Talbot and Neath Port Talbot, built on simulations the learner writes and checks.'
  },

  h1: 'Vibe coding and AI agents classes in Port Talbot',
  capsuleQ: 'Where are the best vibe coding and AI agents classes for Port Talbot?',
  capsule: 'Port Talbot\'s built-up area numbered 31,555 usual residents in Census 2021; the wider county borough of Neath Port Talbot numbered 142,289. Aberavon, Sandfields, Taibach, Margam and Velindre all sit within that built-up area. Learners from Port Talbot, from six-year-olds to people of 67, study vibe coding, AI agents, Python, coding and maths with us over live video, taught by tutors in India either privately or in a level-matched class of five to ten. The first lesson is a free trial that ends with a course recommendation. The Port Talbot project tackles a puzzle every team of AI agents runs into: when three agents each write their own log and their clocks disagree, how do you work out what happened first? Fees after the trial are USD 100 a month for a group place and USD 150 a month for private lessons.',
  lead: 'Put three AI agents on one job, perhaps one gathering facts, one drafting and one checking, and give each its own log. Something goes wrong, and you merge the logs to see the order of events. If you sort by the times the agents wrote down, you will sometimes see a reply recorded before the question that caused it. Nobody lied; their clocks simply disagree by a fraction of a second. In 1978 Leslie Lamport showed how to order events without trusting clocks at all, and the idea is about forty lines of Python.',
  wa: 'Hello Modern Age Coders, we would like to book a free vibe coding or AI agents trial lesson. We are in Port Talbot.',

  picks: {
    eyebrow: 'Courses to start with',
    h2: 'Vibe coding and AI agents courses for Port Talbot learners',
    intro: 'Pick by age. Each one begins with a live lesson that is free, with no card asked for.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Logic, order and timing puzzles: who did what first, and how can you tell?' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Describe a Scratch game to an AI, then test it and put right what it gets wrong.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python built with AI help, including the three-agent clock project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from zero to data work and multi-agent systems you can debug.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Port Talbot by numbers',
      h2: 'Port Talbot, Aberavon, Sandfields, Taibach and Margam',
      intro: 'The census headline counts and the neighbourhoods inside the built-up area.',
      body: [
        { kind: 'table', caption: 'Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Port Talbot built-up area', '31,555'],
          ['Neath Port Talbot county borough', '142,289']
        ] },
        { kind: 'p', text: 'Neath Port Talbot also contains Neath, Baglan, Cwmavon and the upper valleys, so the borough figure is a count in its own right. Using postcodes.io, Aberavon, Sandfields, Taibach, Margam and Velindre are suburban areas whose nearest postcode lies inside the Port Talbot built-up area; Baglan, Cwmavon and Bryn each have a built-up area of their own and are not counted here. Port Talbot schools teach the Curriculum for Wales, from progression step 1 to WJEC GCSEs and A levels. We teach in English and use the Welsh school year as a starting guess, which the trial lesson then confirms or changes.' },
        { kind: 'callout', h3: 'Neighbouring pages', p: 'See <a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea</a>, <a class="cg-inline-link" href="/coding-classes-in-neath-port-talbot">Neath Port Talbot</a>, <a class="cg-inline-link" href="/coding-classes-in-bridgend">Bridgend</a> and <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science help</a>. Why we start with thinking rather than tools is argued in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Port Talbot project',
      h2: 'Three agents, three clocks and one merged log',
      intro: 'A simulation of agents sending each other messages, and three ways of putting their logs in order.',
      body: [
        { kind: 'p', text: 'The agents here are simulated, and the numbers that drive them are our own choices, stated plainly: three agents, something happening somewhere in the system about ten times a second, a little over a third of those events being a message to another agent, and messages taking a fifth of a second on average to arrive. Each agent stamps every event with its own wall clock, and each clock is wrong by a fixed amount, up to the "skew" the learner sets. Twenty runs of about three hundred events produce 1,537 messages to examine.' },
        { kind: 'p', text: 'The first check is the most basic rule of cause and effect: a message cannot be received before it was sent. The learner merges the three logs, sorts them by wall-clock time, and counts how often a receive appears earlier than its send. With perfect clocks the answer is zero. It does not stay zero for long.' },
        { kind: 'table', caption: 'Messages whose receipt is stamped before their sending, our Python run', head: ['Clocks wrong by up to', 'Sorted by wall clock', 'Sorted by Lamport clock'], rows: [
          ['0 seconds', '0 of 1,537', '0'],
          ['0.05 seconds', '84 (5.5%)', '0'],
          ['0.2 seconds', '305 (19.8%)', '0'],
          ['0.5 seconds', '484 (31.5%)', '0'],
          ['1 second', '618 (40.2%)', '0']
        ] },
        { kind: 'p', text: 'A Lamport clock is just a counter. Each agent adds one for every event, attaches its counter to every message, and on receiving a message jumps its own counter past the one it was sent. That guarantees the number on a receipt is always bigger than the number on its send, whatever the wall clocks say, which is why the right-hand column stays at zero even when clocks are a full second out.' },
        { kind: 'p', text: 'Lamport clocks have a blind spot, though. Many pairs of events have no connection at all: two agents each did something without hearing from the other. Of 899,102 pairs of events across the twenty runs, 57,104 were concurrent in exactly that sense. Lamport counters still give 52,786 of those pairs different numbers, so a log sorted by them shows an order that never existed. Vector clocks fix this by having each agent carry a small list, one counter per agent. Comparing two lists tells you whether one event came first, the other did, or neither, and in our runs they flagged all 57,104 concurrent pairs correctly. The price is that every message carries a list as long as the number of agents: three numbers here, a hundred in a system of a hundred agents.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Pass notes around the room with a counter on each one, and rebuild the story of who heard what first.' },
          { h3: 'Ages 11 to 15', p: 'Simulate two agents in Python with skewed clocks and catch a reply logged before its question.' },
          { h3: 'Ages 15 and up', p: 'Add Lamport and vector clocks, count concurrent pairs, and explain what each clock can and cannot tell you.' }
        ] },
        { kind: 'callout', h3: 'Where this comes from', p: 'The clock rules follow Lamport (1978); vector clocks are explained in Schwarz and Mattern (1994). The agents, their timings and every count above come from our own simulation; nothing on this page describes a real computer system in Port Talbot.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Teams of agents',
      h2: 'What clocks that disagree teach about building multi-agent AI',
      intro: 'The moment more than one agent works on a task, "what happened first?" becomes a real question.',
      body: [
        { kind: 'table', caption: 'From the simulation to real agent teams', head: ['Result from the three agents', 'Lesson for anyone wiring agents together'], rows: [
          ['Small clock errors put replies before questions', 'Do not debug a multi-agent run by timestamps alone'],
          ['A counter on each message fixed cause and effect', 'Pass ordering information along with the work'],
          ['Lamport numbers invented orders for 52,786 pairs', 'A neat sorted log can still be misleading'],
          ['Vector clocks recognised every concurrent pair', 'Sometimes the honest answer is "neither came first"'],
          ['The vector grows with the number of agents', 'Every guarantee has a running cost']
        ] },
        { kind: 'p', text: 'Multi-agent frameworks are popular, and vibe coding makes it easy to spin up several agents that talk to each other. The trouble comes later, when something goes wrong and the logs disagree about the order of events. A learner who has watched 40.2% of replies jump ahead of their questions knows not to trust timestamps from different machines, and knows there is a forty-line fix. Our learners only start on agents of their own once they can write Python unaided, which for most arrives in Year 12 or later; Copilot Studio is reserved for private lessons. Two related reads: <a class="cg-inline-link" href="/learn-to-train-ai-not-just-prompt-it-uk">learn to train AI, not just prompt it</a>, and the outline of <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agent lessons for UK students</a>.' },
        { kind: 'p', text: 'The ONS and postcodes.io are not connected with Modern Age Coders; their data gives the place figures. The simulation is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growth path',
    h2: 'From note-passing puzzles at seven to multi-agent logs at seventeen',
    intro: 'We begin from the Welsh school year, and the trial lesson fine-tunes it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Order and logic', p: 'Puzzles about sequence and cause, often played before any typing.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'AI as a helper', p: 'Scratch games built with an AI, then a first Python program.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Simulating agents', p: 'Agents, messages and logs in Python, checked against what should happen.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Agents that can be debugged', p: 'Python for work and multi-agent designs whose behaviour can be traced.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Clocks and agents',
    h2: 'What is a vector clock, and why does it matter for teams of AI agents?',
    intro: 'A vector clock is a small list of counters, one per agent, that each agent updates and attaches to its messages, so that comparing two lists shows whether one event happened before another or whether the two were independent, without trusting anyone\'s wall clock.',
    p1: 'In our simulated three-agent system, sorting by wall clocks that were up to half a second out placed 484 of 1,537 replies before their own messages, while Lamport clocks placed none there and vector clocks also identified all 57,104 independent pairs.',
    p2: 'Learners who reach those numbers stop treating a merged log as the truth and start asking what ordering information their agents pass along.',
    closer: 'For a Port Talbot teenager, being able to untangle what a team of agents actually did is what keeps them in charge of it, and that skill grows from writing the code.',
    blogAnchor: 'why coding is still worth learning for teenagers in 2026'
  },

  delivery: {
    eyebrow: 'Class set-up',
    h2: 'Lessons for a Port Talbot learner',
    intro: 'Classes take place live on video. Learners need a computer with a keyboard; a tablet alone will not run Python properly.',
    cells: [
      { h3: 'Learner does the typing', p: 'Every program is written and run by the learner, with the tutor asking why.' },
      { h3: 'Trial shows the level', p: 'We see where a learner is before recommending a course.' },
      { h3: 'Trial costs nothing', p: 'The first session is free and needs no card.' },
      { h3: 'Classes of five to ten', p: 'Learners at the same stage, joining from across the UK.' },
      { h3: 'Around eight a month', p: 'Two lessons a week in term, with Neath Port Talbot holidays skipped on request.' },
      { h3: 'Stable UK hour', p: 'The lesson time stays fixed when the clocks change.' }
    ],
    spec: { title: 'Why lessons are online', p: 'A class of five to ten learners at one precise level forms far more easily across the UK than in one town, and video spares everyone a journey.' }
  },

  fees: {
    h2: 'Fees for Port Talbot families',
    intro: 'Port Talbot learners pay the same as every learner outside India.',
    first: 'First lesson: free, full length, with a course suggestion afterwards.',
    group: 'Group class, about eight lessons a month.',
    private: 'Private lessons, about eight a month.',
    closer: 'All fees are charged in US dollars; we quote no sterling price. The trial is free, and billing begins once you have chosen a course and a weekly time. The pricing page covers holidays, missed lessons and changing between group and private classes.'
  },

  reviewsH2: 'Google reviews from Welsh families and learners across Britain',

  book: {
    h2: 'Book a free Port Talbot lesson',
    intro: 'Let us know roughly how old the learner is, or their school year, and an interest or two. A trial could be a note-passing logic puzzle, an AI-made Scratch game, some first Python, or a two-agent clock experiment.',
    success: 'Thank you. Your Port Talbot request has been received.'
  },

  faq: {
    h2: 'Port Talbot questions',
    intro: 'The clock project, multi-agent systems, vibe coding and how lessons are organised.',
    items: [
      { q: 'How many people live in Port Talbot?', a: 'The ONS counted 31,555 usual residents in the Port Talbot built-up area at the 2021 census. Neath Port Talbot had 142,289.' },
      { q: 'Are vibe coding and AI agents classes available in Port Talbot?', a: 'Yes. Anyone aged 6 to 67 can join live from Port Talbot, Aberavon, Sandfields, Taibach, Margam or elsewhere in the borough.' },
      { q: 'What is a Lamport clock?', a: 'A counter that each process increases with every event and sends with every message; a receiver moves its counter past the one it receives, so causes always get smaller numbers than their effects.' },
      { q: 'What does concurrent mean in distributed systems?', a: 'Two events are concurrent when neither could have influenced the other: no chain of messages links them, so neither truly came first.' },
      { q: 'What did the Port Talbot simulation show?', a: 'With clocks up to one second out, 618 of 1,537 replies were stamped before their own messages. Lamport and vector clocks put none in the wrong order.' },
      { q: 'What is vibe coding?', a: 'Getting an AI to draft code from a plain-English request, after which you test it, read it and mend it. We do this in Python the learner types, so the judgement stays theirs.' },
      { q: 'At what point do learners make their own agents?', a: 'From the point where Python comes without prompting, for most in Year 12 or beyond. Copilot Studio is taught privately and nowhere else.' },
      { q: 'Is this useful for WJEC computer science?', a: 'Programming, networks and logic all feature in WJEC GCSE and A level computer science, and lessons give them proper time. Grades are never promised.' },
      { q: 'How much are lessons?', a: 'Nothing for the trial. Afterwards it is USD 100 per month to join a group, or USD 150 per month for one-to-one.' },
      { q: 'Can lessons pause for school holidays?', a: 'Yes. Tell us the Neath Port Talbot term dates and the holiday weeks stay free.' }
    ]
  },

  next: {
    eyebrow: 'Along the coast',
    h2: 'More pages along the South Wales coast',
    html: 'Read about <a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea</a>, <a class="cg-inline-link" href="/coding-classes-in-neath-port-talbot">Neath Port Talbot</a> and <a class="cg-inline-link" href="/coding-classes-in-bridgend">Bridgend</a>, or our <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC Digital Technology help</a>. For other towns, go to the <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales overview</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Send a WhatsApp'
  },

  footerHeading: 'Port Talbot and Neath Port Talbot',
  footerPlaces: [
    { href: '/coding-classes-in-neath-port-talbot', label: 'Neath Port Talbot' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ptb .cg-hero-grid { align-items: start; gap: clamp(1.3rem, 2.9vw, 2.6rem); }
.cg-root.cg-ptb .cg-hero h1 { font-weight: 800; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-ptb .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-ptb .cg-eyebrow { letter-spacing: 0.115em; font-weight: 730; text-transform: uppercase; font-size: 0.83rem; }
.cg-root.cg-ptb .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.018em; }
.cg-root.cg-ptb .cg-table caption { font-weight: 520; text-align: left; font-size: 0.94rem; }
.cg-root.cg-ptb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ptb .cg-table th { font-weight: 740; letter-spacing: 0.015em; }
.cg-root.cg-ptb .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-ptb .cg-callout { border-left-width: 7px; border-radius: 0; }
`,

  dossier: {
    curriculumAuthority: 'Neath Port Talbot (W06000012), Census 2021 TS001 usual residents 142,289. ONS 2021 BUA (published): Port Talbot 31,555. Curriculum for Wales, progression steps, WJEC GCSE and A level. postcodes.io suburban areas whose nearest postcode is in the Port Talbot BUA: Aberavon, Sandfields, Taibach, Margam, Velindre.',
    localProject: 'Invented three-agent simulation: events about 10 per second, 35% are messages, delay exponential mean 0.2 s, fixed clock offsets uniform within plus or minus the skew; 20 runs of about 300 events (seeds 0 to 19); 1,537 messages. Receives stamped before their send by wall clock: skew 0: 0; 0.05 s: 84 (5.5%); 0.2 s: 305 (19.8%); 0.5 s: 484 (31.5%); 1 s: 618 (40.2%); Lamport: 0 at every skew. 899,102 event pairs, 57,104 concurrent (6.4%); Lamport numbers differ for 52,786 (92.4%); vector clocks flag all 57,104. Vector length = number of agents (3). Lesson family: logical clocks, Lamport clocks, vector clocks, happened-before, concurrency.',
    requiredMentions: [
      '31,555',
      'Aberavon',
      'Sandfields',
      'Taibach',
      'Velindre',
      'vector clock',
      '57,104',
      '1,537',
      'Lamport clock'
    ],
    sources: [
      { claim: 'Lamport L. (1978), Time, clocks, and the ordering of events in a distributed system, Communications of the ACM 21(7), 558 to 565.', url: 'https://doi.org/10.1145/359545.359563' },
      { claim: 'Schwarz R., Mattern F. (1994), Detecting causal relationships in distributed computations: in search of the holy grail, Distributed Computing 7(3), 149 to 174.', url: 'https://doi.org/10.1007/BF02277859' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/datasets/c2021ts001' },
      { claim: 'postcodes.io place and nearest-postcode lookups for SA12 and SA13.', url: 'https://api.postcodes.io/places?q=Sandfields' }
    ],
    rejectedClaims: [
      'That the agents or timings describe any real system in Port Talbot: invented and labelled; the page says so.',
      'Any statement about local industry or employment: none made.',
      'That Baglan, Cwmavon or Bryn are part of the Port Talbot built-up area: each has its own; left out.',
      'That vector clocks are free: they cost one counter per agent per message; the page says so.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
