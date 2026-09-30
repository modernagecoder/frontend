'use strict';
// Morningside, Edinburgh (cg- district page, UK cluster Phase 9, row 470). Keyword slug per the owner's 2026-09-30 ruling,
// with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how should an agent choose when it does
// not know what will happen? (decision rules under uncertainty: expected value with equal chances, maximin / smallest worst
// case, minimax regret; the rule is part of the agent's instructions).
// Data (read 30 September 2026): OpenStreetMap API 0.6 map calls over bbox -3.232,55.912,-3.195,55.935 (4 tiles, ODbL):
// walkable ways (motorway, trunk, construction, foot=no and private left out), 130.0 km, main connected piece 9,799 nodes.
// 14 place nodes tagged suburb or neighbourhood inside the box, snapped to the network: Comiston, Greenbank, Firrhill,
// Merchiston, Craighouse, Shandon, Shaftesbury Park Colonies, Flower Colonies, Meggetland, Braid Hills, Midmar, Morningside,
// Greenhill, Church Hill. Dijkstra walking distances between all pairs.
// Our run (scratchpad mrn/dec2.py): an agent must fix one meeting point for a learner who will walk from one of the 14
// places, unknown in advance. Venues = the five nodes tagged suburb. Mean walk / longest walk (from) / largest regret (when
// the walker starts at), metres: Comiston 1,387 / 1,990 (Flower Colonies) / 1,967 (Merchiston); Morningside 1,414 / 2,830
// (Firrhill) / 1,839 (Greenbank); Merchiston 1,551 / 3,250 (Firrhill) / 2,692 (Greenbank); Greenbank 1,840 / 2,692
// (Merchiston) / 2,692 (Merchiston); Braid Hills 2,068 / 3,248 (Flower Colonies) / 2,560 (Merchiston). Picks: equal-chance
// expected value Comiston; maximin (smallest worst case) Comiston; minimax regret Morningside; shortest possible walk
// (optimism) ties every venue at 0 m.
// Lesson family: decision rules under uncertainty (Laplace, Wald maximin, Savage minimax regret). Screened: "minimax
// regret", "maximin" 0 hits in content/; rm.js and famq.js clean; claimed in claims.txt. Minimax for games belongs to an
// earlier page (adversarial search); Airdrie owns voting rules; this is one agent against an unknown state of the world.
// Place facts: no NRS figure for Morningside alone; City of Edinburgh about 512,700 (Scotland's Census 2022 rounded,
// registered by the Edinburgh page). postcodes.io (City of Edinburgh, EH9/EH10) suburban areas: Morningside, Bruntsfield,
// Churchhill, Greenbank, Comiston, Marchmont, Blackford.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'MORNINGSIDE', label: 'Morningside', blurb: 'Vibe coding and AI agents classes for Morningside in Edinburgh, with a project where an agent must choose a meeting point without knowing where its visitor will set out from.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-morningside-edinburgh',
  code: 'mrn',
  accent: '#5E4B8A',
  accentRationale: 'Morningside: a slate violet (7.37:1 contrast), chosen by hand to differ in hue from neighbouring Phase 9 pages',
  pageType: 'city',
  place: {
    name: 'Morningside',
    eyebrow: 'Morningside, Edinburgh, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Edinburgh' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-edinburgh', name: 'Edinburgh' }],
  nav: [
    { label: 'Edinburgh', href: '/best-coding-class-in-edinburgh' },
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Morningside, Edinburgh',
  title: 'Vibe Coding and AI Agents Classes in Morningside, Edinburgh',
  description: 'Live online vibe coding, AI agents and Python lessons for Morningside, Bruntsfield, Greenbank and Comiston learners in Edinburgh, aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Morningside, Edinburgh, with a project on how an agent should decide when it cannot know what will happen.',
  twitterDescription: 'Morningside, Edinburgh: vibe coding, AI agents and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Morningside, Edinburgh',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Morningside and across Edinburgh, taught live with decision-making explained.'
  },

  h1: 'Vibe coding and AI agents classes in Morningside, Edinburgh',
  capsuleQ: 'Where can Morningside learners find the best vibe coding and AI agents classes?',
  capsule: 'We found no official population for an area matching Morningside exactly, so none is quoted here; the City of Edinburgh, which contains it, counted about 512,700 residents in Scotland\'s 2022 census. Bruntsfield, Churchhill, Greenbank, Comiston, Marchmont and Blackford are recorded suburbs in the EH9 and EH10 postcode districts. Lessons reach Morningside by live video from our teachers in India: agent building, vibe coding, Python and maths, for a six-year-old or a 67-year-old, taken alone with a tutor or among five to ten classmates of matching level. We explain the reasoning before the tools, so learners know what rule an agent is following when it makes a choice. A first session is free and finishes with our view on a suitable course. In the Morningside project an agent has to pick a meeting point before it knows which of 14 neighbourhoods its visitor will walk from, and three sensible rules give two different answers. Continuing costs USD 100 monthly in a class, or USD 150 monthly for a tutor of your own.',
  lead: 'Agents act before all the facts are in. A scheduling agent books a room without knowing who will turn up; a delivery agent picks a depot before the orders arrive. There are well-known rules for deciding under that kind of uncertainty. You can average over the possibilities and pick the lowest expected cost. You can assume the worst will happen and pick the option whose worst case is least bad, a rule called maximin. Or you can minimise regret: how much worse you did than you could have, had you known. These rules can disagree, and an agent will quietly use whichever one its designer assumed. This project tests them on real walking distances across Morningside and its neighbours.',
  wa: 'Hello Modern Age Coders, could we book a free vibe coding or AI agents lesson for a learner in Morningside?',

  picks: {
    eyebrow: 'Morningside course picks',
    h2: 'Morningside courses in thinking, vibe coding and agents',
    intro: 'Four courses by age. The opening lesson on each is live and free, and we ask for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: choosing when you cannot be sure, and saying which rule you used.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games thought up by the learner, built with an AI and tested fully.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the deciding agent on a Morningside map.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents that plan, decide under uncertainty and explain their choices, in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Morningside in the EH9 and EH10 postcodes',
      h2: 'Morningside, Bruntsfield, Greenbank and Comiston',
      intro: 'Recorded suburbs in EH9 and EH10, and why no population appears.',
      body: [
        { kind: 'table', caption: 'Suburban areas recorded by postcodes.io in two Edinburgh postcode districts', head: ['Postcode district', 'Recorded suburban areas'], rows: [
          ['EH10', 'Morningside, Churchhill, Greenbank, Comiston'],
          ['EH9', 'Bruntsfield, Marchmont, Blackford']
        ] },
        { kind: 'p', text: 'We looked for a National Records of Scotland figure covering exactly Morningside and found none, so the only count on this page is the city\'s. Edinburgh schools teach the Curriculum for Excellence, and our lessons follow its P and S stages, with SQA Computing Science and Maths help at National 5, Higher and Advanced Higher. Give us the school holiday dates and no lesson will fall in them.' },
        { kind: 'callout', h3: 'Edinburgh, Scotland and exam support', p: 'The city page is <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a>; see also <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> and <a class="cg-inline-link" href="/advanced-higher-maths-tuition-online">Advanced Higher Maths tuition</a>. Why we teach reasoning first is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Morningside project',
      h2: 'Expected value, maximin or minimax regret? An agent picks a meeting point',
      intro: 'Real walking distances, one unknown, and three rules that do not all agree.',
      body: [
        { kind: 'p', text: 'The learner builds a walking network from OpenStreetMap, 130.0 km of streets and paths, and finds the points the map uses to label 14 neighbourhoods in the area, from Firrhill and Greenbank to Merchiston and Greenhill. Dijkstra\'s algorithm gives the walking distance between every pair. The agent\'s job: choose one of five venues, the places the map tags as suburbs, for a learner who will walk from one of the 14 neighbourhoods. The agent does not know which. For each venue the program works out the average walk if all 14 starts are equally likely, the longest possible walk, and the largest regret, meaning the most extra distance compared with the venue that would have suited that walker.' },
        { kind: 'table', caption: 'Five possible meeting points for a walker from an unknown one of 14 neighbourhoods, metres, our Python run on OpenStreetMap data', head: ['Venue', 'Average walk', 'Longest walk', 'Largest regret'], rows: [
          ['Comiston', '1,387', '1,990', '1,967'],
          ['Morningside', '1,414', '2,830', '1,839'],
          ['Merchiston', '1,551', '3,250', '2,692'],
          ['Greenbank', '1,840', '2,692', '2,692'],
          ['Braid Hills', '2,068', '3,248', '2,560']
        ] },
        { kind: 'p', text: 'An agent told to minimise the average walk chooses the Comiston label point, at 1,387 m. So does a cautious agent using maximin, since Comiston\'s longest walk, 1,990 m from the Flower Colonies, is the shortest of the five worst cases. But an agent told to minimise regret chooses Morningside: its largest regret is 1,839 m, against 1,967 m for Comiston, whose weak spot is a walker from Merchiston who had a venue on the doorstep. A fourth rule, pure optimism, is useless here: every venue has a shortest possible walk of 0 m. None of the rules is wrong. They answer different questions, and the agent must be told which question it is answering.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Pick where to meet a friend who could come from three different places, first by averages and then by the worst case.' },
          { h3: 'S1 to S3', p: 'Build the table of walking distances in Python and find each venue\'s average and longest walk.' },
          { h3: 'S4 and up', p: 'Code expected value, maximin and minimax regret and explain why they split.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap places, our agent', p: 'Paths and place labels are from OpenStreetMap and its contributors under the Open Database Licence. A label point is where the map prints a name, not the edge of a neighbourhood. The distances, rules and picks are our own teaching exercise, not advice about where to meet.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents that decide',
      h2: 'Why every deciding agent carries a rule',
      intro: 'An agent cannot avoid a decision rule; it can only hide one.',
      body: [
        { kind: 'table', caption: 'From the Morningside meeting point to real AI agents', head: ['In the meeting-point project', 'When an agent chooses for you'], rows: [
          ['Average and worst-case rules chose Comiston', 'Some goals happen to agree'],
          ['Minimax regret chose Morningside', 'A different goal gives a different action'],
          ['Optimism tied every venue at 0 m', 'Some rules cannot tell options apart'],
          ['All 14 starts were treated as equally likely', 'Hidden assumptions drive the average'],
          ['The table was built from real distances', 'Decisions are only as good as the payoffs fed in']
        ] },
        { kind: 'p', text: 'Ask an AI agent to "pick the most convenient place" and it will choose something, using an unstated mix of averages and guesses. With vibe coding, where the learner describes a program and an AI writes it, our Morningside learners write the decision rule into the description, average, worst case or regret, and check the code really applies it. For agents that book, buy or schedule on your behalf, that one line of instruction is the difference between cautious and optimistic behaviour. Agent building begins when a learner can write Python on their own, in practice around S5 or later, and Copilot Studio agents are taught one-to-one only. Two longer reads: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for students</a>, then <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understanding code instead of pasting it</a>.' },
        { kind: 'p', text: 'OpenStreetMap, National Records of Scotland and postcodes.io published the open data used here and have no tie to us; the agent and any error in it belong to Modern Age Coders.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From fair guesses to deciding agents',
    intro: 'The P or S year gives a first hint; the trial shows the real starting point.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Choices, worst cases and explaining a decision.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and decisions', p: 'Tables of outcomes, averages and risk, beside SQA Maths and Computing Science.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Agents that choose', p: 'Decision rules, planning and tool use in Python agents.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and uncertainty',
    h2: 'How should an AI agent decide when it does not know what will happen?',
    intro: 'By an explicit decision rule: minimise the expected cost if chances can be estimated, minimise the worst case (maximin) if caution matters most, or minimise regret if being far from the ideal choice is the real danger; the rules can disagree, so the designer has to pick one.',
    p1: 'Choosing a meeting point for a walker from an unknown one of 14 neighbourhoods around Morningside, the average-walk and worst-case rules both chose Comiston, at 1,387 m and 1,990 m, while minimax regret chose Morningside, with a largest regret of 1,839 m.',
    p2: 'Learners who have coded the three rules ask of any agent: which rule did it use, and who decided that?',
    closer: 'A Morningside teenager who can name the rule behind a choice will not mistake an agent\'s confidence for wisdom, and writing such agents is how that judgement is earned.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Bruntsfield to Comiston, by video',
    intro: 'Equipment is simple: a computer, a webcam and a connection that holds a video call.',
    cells: [
      { h3: 'The learner decides and types', p: 'Code, prompts and design choices are the student\'s; the tutor watches the shared screen and asks which rule they chose and why.' },
      { h3: 'Trial finds the level', p: 'The free session shows what to teach first; any SQA course is noted.' },
      { h3: 'A free opening lesson', p: 'Lesson one costs nothing, and its last minutes go on which course fits.' },
      { h3: 'Classmates at your stage', p: 'Groups have five to ten learners at one level, from around the UK.' },
      { h3: 'Two a week', p: 'In term time only.' },
      { h3: 'Time that holds', p: 'Our tutors absorb the UK clock changes, so your slot is constant.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one stage, free on one evening, rarely share a neighbourhood. On video that stops mattering.' }
  },

  fees: {
    h2: 'Morningside fees',
    intro: 'Learners in Morningside pay our international rates, the ones for every country except India.',
    first: 'A complete free lesson, then advice on a course.',
    group: 'About eight live group lessons each month.',
    private: 'About eight live one-to-one lessons each month.',
    closer: 'Billing is in US dollars with no sterling price, and starts when the trial has agreed a course and a regular time. The pricing page sets out holidays, absences and switching between class and private lessons.'
  },

  reviewsH2: 'Edinburgh families and learners around Britain, on Google',

  book: {
    h2: 'Book a free Morningside lesson',
    intro: 'Send an age or school stage and something the learner likes. The trial might be a where-shall-we-meet puzzle, a Scratch game made with an AI, a first Python script, or a small agent that has to choose.',
    success: 'Thank you. Your Morningside request has arrived.'
  },

  faq: {
    h2: 'Morningside questions',
    intro: 'Decision rules, the meeting-point agent, vibe coding and how lessons run.',
    items: [
      { q: 'What is the population of Morningside?', a: 'We found no official figure for exactly Morningside and quote none. The City of Edinburgh as a whole had about 512,700 people in the 2022 census.' },
      { q: 'Can someone in Morningside learn vibe coding and agent building online?', a: 'Yes, as live video lessons for ages 6 to 67 in Morningside, Bruntsfield, Greenbank and the rest of Edinburgh.' },
      { q: 'What is the maximin rule?', a: 'Choose the option whose worst outcome is the least bad. It suits cautious decisions where nothing is known about the chances.' },
      { q: 'What is minimax regret?', a: 'For each option, find the most you could regret choosing it, compared with the ideal choice in each situation, and pick the option where that figure is smallest. In our Morningside table it chose a different venue from the other rules.' },
      { q: 'What is the Morningside project?', a: 'An agent picks one of five meeting points for a walker from an unknown one of 14 neighbourhoods, using real walking distances and three decision rules.' },
      { q: 'How do Morningside learners use vibe coding?', a: 'They tell an AI what the program must do, including which decision rule to apply, read the code it returns, and test it until it behaves as asked.' },
      { q: 'When can a learner start building AI agents?', a: 'Once they write Python on their own, in practice around S5 or later; Copilot Studio agents are private lessons only.' },
      { q: 'Do you help with SQA Maths and Computing Science?', a: 'Yes, from National 5 to Advanced Higher, aiming for understanding and promising no grades.' },
      { q: 'What are the fees?', a: 'Nothing for the trial lesson. A place in a class then costs USD 100 each month, and a tutor to yourself costs USD 150 each month.' },
      { q: 'Do lessons stop in the holidays?', a: 'Yes, during school holidays, once you send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Edinburgh and Lothian pages',
    html: 'Each page runs a different experiment: <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a> (why summer nights never get dark), <a class="cg-inline-link" href="/online-coding-and-python-classes-in-musselburgh">Musselburgh</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-livingston">Livingston</a> and <a class="cg-inline-link" href="/coding-classes-in-midlothian">Midlothian</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Morningside and Edinburgh',
  footerPlaces: [
    { href: '/best-coding-class-in-edinburgh', label: 'Edinburgh' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-mrn .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-mrn .cg-hero h1 { font-weight: 750; letter-spacing: -0.026em; line-height: 1.07; }
.cg-root.cg-mrn .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-mrn .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mrn .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-mrn .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-mrn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mrn .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-mrn .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-mrn .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'City of Edinburgh (S12000036). Scotland: Curriculum for Excellence, SQA National 5, Higher, Advanced Higher. No NRS figure for Morningside; City of Edinburgh about 512,700 (Scotland\'s Census 2022, rounded). postcodes.io (City of Edinburgh, EH9/EH10): Morningside, Bruntsfield, Churchhill, Greenbank, Comiston, Marchmont, Blackford (suburban areas).',
    localProject: 'OSM API 0.6 bbox -3.232,55.912,-3.195,55.935: walking network 130.0 km, 9,799 nodes; 14 place nodes (suburb/neighbourhood); venues = 5 suburb nodes. Mean / longest / largest regret (m): Comiston 1,387 / 1,990 / 1,967; Morningside 1,414 / 2,830 / 1,839; Merchiston 1,551 / 3,250 / 2,692; Greenbank 1,840 / 2,692 / 2,692; Braid Hills 2,068 / 3,248 / 2,560. Expected value and maximin pick Comiston; minimax regret picks Morningside. Lesson family: decision rules under uncertainty.',
    requiredMentions: [
      'Bruntsfield',
      'Greenbank',
      'Comiston',
      'Churchhill',
      'Merchiston',
      'Braid Hills',
      'minimax regret',
      'maximin',
      '1,387'
    ],
    sources: [
      { claim: 'OpenStreetMap paths and place nodes in south Edinburgh, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io places: suburban areas in the City of Edinburgh (EH9, EH10).', url: 'https://api.postcodes.io/places?q=Morningside' },
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 rounded population estimates (City of Edinburgh).', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' }
    ],
    rejectedClaims: [
      'A population or boundary for Morningside: none found for exactly this area; not stated.',
      'That a label point marks the centre of a neighbourhood: not claimed; it is where the map prints the name.',
      'That any venue is a good place to meet: a teaching exercise only.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
