'use strict';
// Keighley (cg- town page, UK cluster Phase 10, towns band B, row 518). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how do thousands of agents with no
// boss agree on one leader, and what happens when a link between them fails? (leader election by flooding the
// largest ID; rounds against the network's hop diameter; split brain at a bridge).
// Data (read 30 September 2026): OpenStreetMap roads (trunk down to residential and living streets, with link roads)
// from one Overpass query for the box 53.840 to 53.890 north, 1.955 to 1.865 west, around Keighley.
// Our run (scratchpad kgh/le.py): largest connected network 232.0 km; one agent at each junction and road end,
// 2,234 agents joined by 2,594 links; 801 agents sit at dead ends. Hop radius 58, hop diameter 115. Election rule:
// every agent starts by believing its own ID is the highest, and whenever its belief changes it tells its
// neighbours. 500 random ID assignments (seed 20260930): finished in 60 to 116 rounds counting the last silent
// round, median 76.5; messages 32,669 to 51,068, median 37,681. Every agent contacting every other directly would be
// 2,234 x 2,233 = 4,988,522 messages. Stopping early, mean share of agents that have not heard of the true leader:
// 30 rounds 57.1%; 50 rounds 19.9%; 60 rounds 10.0% (494 of 500 elections unfinished); 70 rounds 4.6% (338 of 500).
// Bridges: 1,095 of 2,594 links; 801 only cut off a dead end; 16 would cut off 50 agents or more; the largest split
// is 255 against 1,979, and an election run after that cut ends with two leaders.
// Lesson family: leader election in a multi-agent network, split brain.
// Place facts: Bradford (E08000032) TS001 546,412. ONS 2021 BUAs (published): Keighley 48,750; Shipley 29,225;
// Bingley 21,330; Baildon 17,050; Ilkley 14,845.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'KEIGHLEY', label: 'Keighley', blurb: 'Vibe coding and AI agents classes for Keighley in West Yorkshire, with 2,234 agents on the street network electing a leader without a boss.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-keighley',
  code: 'kgh',
  accent: '#40546C',
  accentRationale: 'Keighley: a millstone slate blue (7.77:1 contrast on white), chosen by hand as a muted tone kept clear of neighbouring pages',
  pageType: 'city',
  place: {
    name: 'Keighley',
    eyebrow: 'Keighley, Bradford district, West Yorkshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-yorkshire-and-the-humber', name: 'Yorkshire and the Humber' }],
  nav: [
    { label: 'West Yorkshire', href: '/coding-classes-in-west-yorkshire' },
    { label: 'Bradford', href: '/best-coding-class-in-bradford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Keighley, West Yorkshire',
  title: 'Vibe Coding and AI Agents Classes in Keighley, West Yorkshire',
  description: 'Vibe coding, AI agents, Python and coding classes by live video for Keighley, Riddlesden, Ingrow, Long Lee and Oakworth, ages 6 to 67. Your first lesson is free.',
  ogDescription: 'Vibe coding and AI agents classes for Keighley, with a multi-agent project: 2,234 agents on the street network elect one leader, until a single link fails.',
  twitterDescription: 'Keighley, West Yorkshire: vibe coding, AI agents, Python and coding taught live online to ages 6 to 67, with a free first lesson.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Keighley, West Yorkshire',
    description: 'Vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Keighley and Bradford district, taught live online through problems where agents must coordinate.'
  },

  h1: 'Vibe coding and AI agents classes in Keighley',
  capsuleQ: 'Where are the best vibe coding and AI agents classes for Keighley?',
  capsule: 'ONS figures put 48,750 people in the Keighley built-up area in 2021, part of a Bradford district of 546,412. Riddlesden, Ingrow, Long Lee, Thwaites Brow and Exley Head are recorded as suburban areas and Oakworth as a village. Modern Age Coders teaches vibe coding, AI agents, Python, coding and maths to Keighley learners aged six to 67. Lessons happen live on video with a tutor in India, and can be private or shared with five to ten others at one level. Our learners are taught to plan what an agent should do, and to work out in advance how it could go wrong. The Keighley project puts one small agent on every road junction in the town and asks them to choose a single leader with nobody in charge. You pay nothing for the first lesson, which finishes with a course suggestion; from then on a group seat costs USD 100 a month and private lessons USD 150 a month.',
  lead: 'Put one AI agent on a job and it simply gets on with it. Put ten on the same job and a new problem appears before any work starts: who decides? If two agents both think they are coordinating, tasks get done twice or undone. If none does, nothing happens. Computer scientists call the fix leader election, and it has to work with no referee, because a referee would just be a leader chosen some other way. Keighley\'s street network, taken from open map data, makes a good test bed. It takes up to 115 hops to cross, ends in 801 dead ends, and contains links whose loss cuts the network in two.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents lesson for a learner in Keighley.',

  picks: {
    eyebrow: 'Course routes',
    h2: 'Keighley courses for vibe coding, thinking and agents',
    intro: 'One suggestion for each age range. The first live lesson on any of them is free and you will not be asked for card details.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children brief an AI to build Scratch games with several characters, then sort out who does what.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: a class passes on the highest number heard until everyone holds the same one.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web vibe coding for teenagers, with the Keighley election as a simulation to write.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'From first Python to networks, simulations and agents that must cooperate.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Keighley in figures',
      h2: 'Keighley and the towns of Bradford district',
      intro: 'Census counts for five built-up areas in the district, with the Keighley neighbourhoods found in postcode data.',
      body: [
        { kind: 'table', caption: 'Five built-up areas in Bradford district, 2021 census, ONS', head: ['Built-up area', 'Residents in 2021'], rows: [
          ['Keighley', '48,750'],
          ['Shipley', '29,225'],
          ['Bingley', '21,330'],
          ['Baildon', '17,050'],
          ['Ilkley', '14,845']
        ] },
        { kind: 'p', text: 'The five numbers are reproduced from the ONS without any adding up, and the district count of 546,412 stands on its own. The Bradford built-up area itself is not in the table. postcodes.io lists Riddlesden, Ingrow, Long Lee, Thwaites Brow, Stockbridge, Braithwaite, Exley Head and Bracken Bank as suburban areas in Bradford district, and Oakworth, East Morton, Laycock and Hainworth as villages. Keighley schools work to the national curriculum for England, and we time lessons around whatever term dates you send.' },
        { kind: 'callout', h3: 'West Yorkshire, the region and our teaching', p: 'The county has its own page, <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">coding classes in West Yorkshire</a>, and so does the region, <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a>. For why thinking comes before tools with us, read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Keighley project',
      h2: 'Leader election: 2,234 agents, 2,594 links, no boss',
      intro: 'Each agent knows only its own number and its neighbours. The aim is for all of them to name the same leader.',
      body: [
        { kind: 'p', text: 'The learner downloads the roads in a box around Keighley with one Overpass request and keeps the largest connected network, 232.0 km long. An agent is placed wherever roads meet or stop, which gives 2,234 agents joined by 2,594 links. Every agent is handed a different random ID. The rule is short. Each agent starts out believing its own ID is the highest. In every round, any agent whose belief has just changed tells its neighbours the highest ID it knows. An agent that hears a higher one adopts it. When a round passes in silence, the election is over and the highest ID has won.' },
        { kind: 'table', caption: 'Five hundred elections on the Keighley network, each with freshly shuffled IDs (our Python simulation)', head: ['Measure', 'Lowest', 'Median', 'Highest'], rows: [
          ['Rounds until silence', '60', '76.5', '116'],
          ['Messages sent', '32,669', '37,681', '51,068']
        ] },
        { kind: 'p', text: 'Nothing in the rule mentions the map, yet the map sets the speed. News of the winner travels one link per round, so the election lasts as long as the winner\'s distance, counted in links, to the agent furthest from it. For this network that distance ranges from 58, its radius, to 115, its diameter, and one more silent round confirms the result. The cost is modest. A median of 37,681 messages elects a leader, where every agent contacting every other directly would take 4,988,522 and would need each one to hold the address of all the rest.' },
        { kind: 'table', caption: 'What happens if agents stop listening too soon: share of agents that have not yet heard of the true leader, averaged over the 500 elections', head: ['Agents stop after', 'Share still wrong', 'Elections left unfinished'], rows: [
          ['30 rounds', '57.1%', '500 of 500'],
          ['50 rounds', '19.9%', '500 of 500'],
          ['60 rounds', '10.0%', '494 of 500'],
          ['70 rounds', '4.6%', '338 of 500']
        ] },
        { kind: 'p', text: 'This is the first trap. An agent that has heard nothing new for a while cannot tell "finished" from "the news has not reached me yet". A timeout chosen by guesswork, such as 50 rounds, leaves a fifth of the agents following leaders that lost. The second trap is a broken link. In this network 1,095 of the 2,594 links are bridges, meaning no other route goes round them. Most are harmless: 801 lead only to a dead end. But 16 would each cut off 50 agents or more, and the worst separates 255 agents from the other 1,979. We removed that link and ran the election again. It ended calmly with two leaders, each group certain it had the only one. Engineers call that split brain. The usual cure is to let a leader act only when more than half of all agents stand behind it, which 1,979 can show and 255 cannot.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Pupils in a line whisper the highest number they have heard. Count the whispers, then cut the line in the middle.' },
          { h3: 'Ages 11 to 15', p: 'Simulate the election in Python on a small hand-drawn network and time it from different starting IDs.' },
          { h3: 'Ages 15 and up', p: 'Load the real street graph, measure its diameter, find the bridges and add a majority rule.' }
        ] },
        { kind: 'callout', h3: 'Data and honesty notes', p: 'Road data © OpenStreetMap contributors, licensed under the Open Database Licence. The agents, the rule and all counts come from our own simulation. No real device sits on any junction. The network is cut at the edge of our box, and a larger box would change the radius, the diameter and the bridges.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Teams of agents',
      h2: 'What an election teaches about AI agents and vibe coding',
      intro: 'Several agents on one task need a rule for who coordinates, and a plan for the moment that rule breaks.',
      body: [
        { kind: 'table', caption: 'From Keighley\'s junctions to AI agent teams', head: ['In the simulation', 'When building with agents'], rows: [
          ['One short rule, 37,681 messages', 'Simple local rules can coordinate a large group'],
          ['60 to 116 rounds, set by the network', 'How agents are connected decides how fast they agree'],
          ['Stopping at 50 rounds left 19.9% wrong', 'A timeout is a guess unless you know the worst case'],
          ['One cut link, two leaders', 'Design for a lost connection before it happens'],
          ['1,979 is a majority, 255 is not', 'Require a majority before any agent acts as leader']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to vibe code "a team of agents with a coordinator" and it will produce one quickly, usually with the coordinator fixed in advance and no thought for what follows if it disappears. The demo works. The awkward cases, a slow agent mistaken for a dead one or two halves of a team each appointing a coordinator, show up later and are hard to see from outside. Keighley learners meet them early, in a simulation small enough to print out round by round. We introduce real AI agents when a learner can write Python without support, which tends to be in the sixth form or as an adult. Agents built with Copilot Studio are a one-to-one course only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents pathway for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'This page has no link with OpenStreetMap, the Office for National Statistics or postcodes.io apart from using the open data they release. Any mistake in the simulation is our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From whispered numbers to agent teams',
    intro: 'School years here are rough markers. We decide the level from what we see in the free lesson.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Rules a group can follow, tried out by hand before any screen.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games built with AI help where several characters must take turns.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Vibe coding in Python', p: 'Simulations and web projects, written with an assistant and checked by hand.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Agents and automation', p: 'Python to a working standard, then agents that share tasks safely.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents and coordination',
    h2: 'What is leader election, and how do AI agents decide which one is in charge?',
    intro: 'Leader election is the procedure by which a group of agents or computers with no boss agree on exactly one of them to coordinate the rest; in its simplest form every agent keeps passing on the highest ID it has heard until all of them hold the same one.',
    p1: 'With 2,234 agents on Keighley\'s street network that rule picked a single leader in 60 to 116 rounds and a median of 37,681 messages, against 4,988,522 if every agent had contacted every other.',
    p2: 'Cutting one link out of 2,594 was enough to end an election with two leaders, one for 255 agents and one for 1,979.',
    closer: 'A Keighley teenager who has built that simulation asks the right thing of any agent team: what happens when one connection drops? You only learn to ask it by coding the failure yourself, which is reason enough to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson format',
    h2: 'Riddlesden, Ingrow and Oakworth, taught live online',
    intro: 'Learners need a computer, a camera and a connection that holds a video call.',
    cells: [
      { h3: 'Active from minute one', p: 'The learner\'s screen is the one on show. They build, and the tutor questions each step.' },
      { h3: 'A trial that places', p: 'We watch how a learner tackles a problem before suggesting any course.' },
      { h3: 'First lesson free', p: 'It lasts as long as a normal lesson and asks for no card.' },
      { h3: 'Five to ten in a class', p: 'Groups are formed by stage, with classmates from across the UK.' },
      { h3: 'Two lessons each week', p: 'Bradford district school holidays are skipped once we have the dates.' },
      { h3: 'Your time stays fixed', p: 'Tutors absorb the spring and autumn clock changes.' }
    ],
    spec: { title: 'Why online suits this', p: 'Keighley alone could not fill a class where everybody is on the same step. Drawing from the whole UK can, and live video keeps the tutor in the conversation.' }
  },

  fees: {
    h2: 'Lesson fees for Keighley',
    intro: 'Keighley comes under the prices we set for learners in every country other than India.',
    first: 'A complete first lesson, free, closing with the course we would suggest.',
    group: 'Small-group lessons, about eight in a month.',
    private: 'Private lessons, about eight in a month.',
    closer: 'Fees are stated in US dollars and there is no sterling price. You are billed only after the trial, when a course and a weekly time have been chosen. The pricing page deals with holidays, lessons you miss and switching format.'
  },

  reviewsH2: 'Reviews on Google from Yorkshire families and UK learners',

  book: {
    h2: 'Claim a free Keighley lesson',
    intro: 'Send the learner\'s age or year group and a hobby, and we shape the trial to suit: a pass-the-number game, a Scratch project built with AI, some first Python, or a tiny election between agents.',
    success: 'Thank you. We have your Keighley request.'
  },

  faq: {
    h2: 'Keighley questions, answered',
    intro: 'Leader election, the street network project, vibe coding, agents and the practicalities.',
    items: [
      { q: 'How many people live in Keighley?', a: 'The Keighley built-up area had 48,750 residents at the 2021 census on ONS figures. Bradford district as a whole had 546,412.' },
      { q: 'Do you teach vibe coding and AI agents in Keighley?', a: 'Yes, online. Live video lessons reach Keighley, Riddlesden, Ingrow, Long Lee, Oakworth and the rest of the district, for ages 6 to 67.' },
      { q: 'What is vibe coding?', a: 'Building software by describing what you want to an AI model, which writes the code. The human still has to read it, test it and take responsibility for it.' },
      { q: 'Why did cutting one link give two leaders?', a: 'The link was a bridge. Nothing else joined the 255 agents on one side to the 1,979 on the other, so each side held its own election and never heard the other side\'s winner.' },
      { q: 'What does split brain mean?', a: 'A failure in which a group of cooperating machines is divided by a broken connection and each part carries on as if it were the whole, often with its own leader.' },
      { q: 'What did the Keighley project show?', a: 'That 2,234 agents can elect a leader with a one-line rule in 60 to 116 rounds, that a badly chosen timeout leaves many agents wrong, and that a single failed link can produce two leaders.' },
      { q: 'How old should a learner be to build AI agents?', a: 'Old enough to write Python on their own, which is usually sixth form or adult. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Can lessons support school computer science?', a: 'They can, for GCSE and A level computer science and maths. Understanding is the goal and we do not promise grades.' },
      { q: 'What are the fees?', a: 'A free first lesson, then USD 100 a month for a group place or USD 150 a month for private lessons.' },
      { q: 'What about school holidays?', a: 'Lessons pause on the dates you give us.' }
    ]
  },

  next: {
    eyebrow: 'Elsewhere in West Yorkshire',
    h2: 'More West Yorkshire and Yorkshire pages',
    html: 'There are different projects on the pages for <a class="cg-inline-link" href="/best-coding-class-in-bradford">Bradford</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-halifax">Halifax</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-huddersfield">Huddersfield</a>, and a county overview at <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">West Yorkshire</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Keighley and West Yorkshire',
  footerPlaces: [
    { href: '/coding-classes-in-west-yorkshire', label: 'West Yorkshire' },
    { href: '/coding-and-ai-classes-in-yorkshire-and-the-humber', label: 'Yorkshire and the Humber' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-kgh .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-kgh .cg-hero h1 { font-weight: 760; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-kgh .cg-capsule { background: color-mix(in srgb, var(--cg-accent) 5%, transparent); padding: 0.9rem 1rem; border-radius: 8px; }
.cg-root.cg-kgh .cg-eyebrow { letter-spacing: 0.08em; font-weight: 700; font-size: 0.81rem; }
.cg-root.cg-kgh .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-kgh .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 500; }
.cg-root.cg-kgh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kgh .cg-table th { font-size: 0.83rem; font-weight: 700; }
.cg-root.cg-kgh .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-kgh .cg-callout { border-left-width: 6px; border-radius: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Bradford (E08000032), Census 2021 TS001 usual residents 546,412. ONS 2021 BUAs in Bradford district (published): Keighley 48,750; Shipley 29,225; Bingley 21,330; Baildon 17,050; Ilkley 14,845. The Bradford BUA is not tabulated. postcodes.io (Bradford): Keighley (town); Riddlesden, Ingrow, Long Lee, Thwaites Brow, Stockbridge, Braithwaite, Exley Head, Bracken Bank (suburban areas); Oakworth, East Morton, Laycock, Hainworth (villages).',
    localProject: 'OpenStreetMap roads (trunk to residential, with links) via one Overpass query, box 53.840-53.890 N, 1.955-1.865 W; largest connected network 232.0 km. One agent per junction or road end: 2,234 agents, 2,594 links, 801 dead ends. Hop radius 58, hop diameter 115. Leader election by flooding the largest ID (send to neighbours when belief changes; stop after a silent round). 500 random ID assignments (seed 20260930): rounds 60 to 116, median 76.5; messages 32,669 to 51,068, median 37,681; all-pairs 4,988,522. Stopping early, mean share not knowing the leader: 30 rounds 57.1%, 50 rounds 19.9%, 60 rounds 10.0% (494/500 unfinished), 70 rounds 4.6% (338/500). Bridges 1,095 of 2,594; 801 dead-end; 16 cut off 50+; largest split 255 / 1,979, giving two leaders. Majority rule as the cure. Lesson family: leader election in a multi-agent network, split brain.',
    requiredMentions: [
      '48,750',
      'Riddlesden',
      'Ingrow',
      'Long Lee',
      'Thwaites Brow',
      'Exley Head',
      'Oakworth',
      'leader election',
      '37,681',
      'split brain'
    ],
    sources: [
      { claim: 'OpenStreetMap roads (ODbL) fetched through the Overpass API for a box around Keighley.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas and villages in Bradford district.', url: 'https://api.postcodes.io/places?q=Riddlesden' }
    ],
    rejectedClaims: [
      'Which named road is the bridge that splits 255 agents from 1,979: not published; it is a property of our box and graph.',
      'That Keighley sits in a valley or any other landscape description: not read from a source; the page reports only hop counts.',
      'Haworth, the Parsonage and the Bronte family: belong to the West Yorkshire page; not used.',
      'That flooding the largest ID is the most efficient election method: not claimed; it is the simplest.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
