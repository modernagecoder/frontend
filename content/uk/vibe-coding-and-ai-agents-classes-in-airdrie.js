'use strict';
// Airdrie (cg- town page, UK cluster Phase 8, towns band A, row 418). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: when several AI agents disagree, how should their
// opinions be combined? (voting rules: plurality, Borda count, Condorcet pairwise majority, instant-runoff; ties and
// cycles; the rule, not the agents, can decide the outcome).
// Data (read 29 September 2026): OpenStreetMap API 0.6 over bbox -4.010,55.850,-3.945,55.880 (6 tiles, ODbL): 171 nodes
// tagged highway=bus_stop (47 shelter=yes, 113 shelter=no, 11 untagged), 9,649 buildings, 295 shop nodes, roads.
// OpenTopoData eudem25m heights for the chosen stops.
// Our run (scratchpad adr/vote2.py): 8 of the 113 shelter=no stops picked at random (seed 2026), labelled A to H (names
// not used). Five rule-following agents each rank all eight: homes = buildings within 300 m (more first); shops = distance
// to nearest shop node (closer first); gap = distance to nearest shelter=yes stop (farther first); height = EU-DEM height
// (higher first, our assumption that exposed stops need cover more); road = distance to nearest primary or secondary road
// (closer first). Ballots: homes E C A G D F B H; shops B A H C D F G E; gap G B F E H C D A; height G F E D C A H B;
// road A B H C E F G D. Plurality: G (2 first places; A, B, E 1 each). Borda: A, B, G tie on 20 (E and C 19). Condorcet:
// no winner; A, B and G each win 5 of 7 head-to-head contests. Instant-runoff (ties at elimination broken alphabetically):
// G beats B 3 to 2 in the final round.
// Lesson family: social choice / voting rules for aggregating agents (Borda, Condorcet, instant-runoff). Screened:
// "Borda", "Condorcet", "instant-runoff" 0 hits anywhere in content/. Tynemouth owns wisdom of crowds (averaging numeric
// estimates); this is ranking aggregation.
// Place facts: NRS mid-2020 localities: Airdrie 36,390 (third in North Lanarkshire after Cumbernauld 50,530 and Coatbridge
// 43,950). postcodes.io (North Lanarkshire, ML6) suburban areas: Cairnhill, Clarkston, Craigneuk, Gartlea, Holehills,
// Petersburn, Rawyards, Thrashbush, Whinhall; villages Calderbank, Caldercruix, Chapelhall, Glenmavis, Plains.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'AIRDRIE', label: 'Airdrie', blurb: 'Vibe coding and AI agents classes for Airdrie, with a project where five agents rank the same bus stops and four voting rules disagree about the winner.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-airdrie',
  code: 'adr',
  accent: '#466B5A',
  accentRationale: 'Airdrie: a deep teal green (4.82:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Airdrie',
    eyebrow: 'Airdrie, North Lanarkshire, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'North Lanarkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'North Lanarkshire', href: '/coding-classes-in-north-lanarkshire' },
    { label: 'Coatbridge', href: '/online-coding-and-python-classes-in-coatbridge' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Airdrie, Scotland',
  title: 'Vibe Coding and AI Agents Classes in Airdrie | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents and Python lessons for Airdrie, Petersburn, Clarkston and Chapelhall learners in Lanarkshire, aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Airdrie, with a project where five agents rank bus stops and different voting rules crown different winners.',
  twitterDescription: 'Airdrie vibe coding, AI agents and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Airdrie',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Airdrie and North Lanarkshire, taught live with fair reasoning first.'
  },

  h1: 'Vibe coding and AI agents classes in Airdrie',
  capsuleQ: 'Where can Airdrie learners find the best vibe coding and AI agents classes?',
  capsule: 'Airdrie ranks third among North Lanarkshire\'s localities, after Cumbernauld and Coatbridge, with 36,390 residents in the National Records of Scotland mid-2020 estimate. Petersburn, Clarkston, Rawyards, Holehills, Whinhall and Cairnhill are recorded suburbs in the ML6 district, alongside villages such as Chapelhall and Glenmavis. Learners from six to 67 join tutors in India on camera for vibe coding, AI agents, Python, coding and maths, alone or in a level-matched class of five to ten. Fair reasoning comes first, so learners can see how a decision was actually reached. Lesson one is on us, and closes with the course we think suits. In the Airdrie project five simple agents each rank eight real bus stops, and the learner discovers that the voting rule used to combine them can matter as much as the agents do. After the trial, group lessons are USD 100 a month and private lessons USD 150 a month.',
  lead: 'Teams of AI agents, and panels of AI judges, often have to reach one decision from several opinions. The usual shortcut is a vote, but which vote? Counting first choices, adding up points for every position, checking who wins each head-to-head contest, and eliminating the least popular option round by round are all reasonable rules, studied by mathematicians for centuries, and they do not always agree. This project gives five agents one question about real Airdrie data: of eight bus stops mapped without a shelter on OpenStreetMap, which most needs one? Each agent follows a different rule of thumb, and the learner combines their rankings four ways.',
  wa: 'Hello Modern Age Coders, could we book a free vibe coding or AI agents lesson for a learner in Airdrie?',

  picks: {
    eyebrow: 'Airdrie course picks',
    h2: 'Airdrie courses in thinking, vibe coding and agents',
    intro: 'Choose by age. Each course opens with a free live lesson, and we never ask for card details to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: fair votes, ties and why the rules of a contest matter.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games dreamed up by the learner, built with AI help and tested fully.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the voting agents on Airdrie data.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Multi-agent systems, AI judges and combining their verdicts, in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Airdrie and North Lanarkshire',
      h2: 'Airdrie, Petersburn, Clarkston and Chapelhall',
      intro: 'The NRS estimate for Airdrie, and places recorded in the ML6 district.',
      body: [
        { kind: 'table', caption: 'Airdrie in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['Airdrie locality, mid-2020', '36,390']
        ] },
        { kind: 'p', text: 'Postcodes.io records Cairnhill, Clarkston, Craigneuk, Gartlea, Holehills, Petersburn, Rawyards, Thrashbush and Whinhall as suburban areas of North Lanarkshire in ML6, and Calderbank, Caldercruix, Chapelhall, Glenmavis and Plains as villages. Teaching follows Scotland\'s Curriculum for Excellence year structure, with SQA help available in Computing Science and Maths. Holiday dates from your school let us plan around them.' },
        { kind: 'callout', h3: 'Lanarkshire neighbours and SQA help', p: 'See <a class="cg-inline-link" href="/coding-classes-in-north-lanarkshire">coding classes in North Lanarkshire</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-coatbridge">Coatbridge</a> and <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science help</a>. Our view on reasoning before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Airdrie project',
      h2: 'Five agents, eight bus stops, four voting rules: combining agent opinions',
      intro: 'Real map data, simple agents with different priorities, and a winner that depends on the rule.',
      body: [
        { kind: 'p', text: 'OpenStreetMap shows 171 bus stops across Airdrie; 113 are tagged as having no shelter. Python picks eight of those at random and labels them A to H. Five agents each rank all eight. The homes agent prefers stops with the most buildings within 300 m. The shops agent prefers stops closest to a shop. The gap agent prefers stops farthest from any stop that already has a shelter. The height agent prefers higher stops, on our assumption that exposed places need cover more. The road agent prefers stops closest to a main road.' },
        { kind: 'table', caption: 'Each agent\'s ranking of the eight stops, first choice on the left, our Python run on OpenStreetMap and EU-DEM data', head: ['Agent', 'Ranking'], rows: [
          ['Homes', 'E C A G D F B H'],
          ['Shops', 'B A H C D F G E'],
          ['Shelter gap', 'G B F E H C D A'],
          ['Height', 'G F E D C A H B'],
          ['Main road', 'A B H C E F G D']
        ] },
        { kind: 'table', caption: 'The same five rankings combined by four rules', head: ['Rule', 'How it works', 'Result'], rows: [
          ['Plurality', 'Most first places wins', 'G, with 2 of 5'],
          ['Borda count', 'Points for every position, 7 for first down to 0', 'A, B and G tie on 20'],
          ['Condorcet', 'Must beat every other stop head-to-head', 'No winner'],
          ['Instant-runoff', 'Drop the least-liked, recount, repeat', 'G, beating B 3 to 2']
        ] },
        { kind: 'p', text: 'The agents saw the same data, yet the combined answer is G, a three-way tie, or nobody, depending on the rule. Under Condorcet\'s test each of A, B and G wins five of its seven head-to-head contests, but none beats all the others, so no stop can claim a majority against every rival. Instant-runoff also needed tie-breaking along the way; we broke ties alphabetically, which is itself a choice that could change the outcome. None of this says which stop really needs a shelter. It shows that combining opinions is a design decision, and the design should be chosen and stated before the votes are counted.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Hold a class vote on a snack three different ways and see whether the winner stays the same.' },
          { h3: 'S1 to S3', p: 'Write each agent\'s ranking rule in Python and print the five ballots for the Airdrie stops.' },
          { h3: 'S4 and up', p: 'Code plurality, Borda, Condorcet and instant-runoff, then find where the rules disagree.' }
        ] },
        { kind: 'callout', h3: 'Map data, our agents', p: 'Bus stops, buildings, shops and roads are from OpenStreetMap and its contributors under the Open Database Licence; heights from Copernicus EU-DEM via OpenTopoData. The random choice, the agents, their rules and every result are our own. This is a teaching exercise, not a recommendation about any real bus stop.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents that vote',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Disagreement between agents is normal; the tie-breaking machinery is where the power sits.',
      body: [
        { kind: 'table', caption: 'From the Airdrie vote to teams of AI agents', head: ['In the bus stop project', 'When several AI agents or judges decide'], rows: [
          ['Plurality and instant-runoff chose G', 'Some rules favour strong first choices'],
          ['Borda produced a three-way tie', 'Point systems reward being broadly liked'],
          ['No Condorcet winner existed', 'Majorities can go round in a circle'],
          ['Ties were broken alphabetically', 'Tie-breaks are hidden decisions'],
          ['Each agent had one narrow priority', 'Agents reflect the goals they are given']
        ] },
        { kind: 'p', text: 'AI systems increasingly ask several models or agents for an answer and combine the results, whether picking the reply most of them favour or ranking options by averaged scores. The combining rule can decide the outcome as surely as the agents do. In vibe coding the learner describes a program while an AI writes it; our Airdrie learners also write down how disagreements will be settled, and test the rule on cases like this one. Agents that make decisions for you need that rule spelled out in advance. Agent building begins once a learner writes Python confidently, usually in S5 or S6 or as an adult, and Copilot Studio agents are one-to-one lessons only. Read about the pathway on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agents for UK students</a>; the reasoning is on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Data came openly from OpenStreetMap, OpenTopoData, the Copernicus programme, National Records of Scotland and postcodes.io, none of which is linked to us; the agents, rules and any slips are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From class votes to voting agents',
    intro: 'The school year guides where we start; the trial lesson confirms it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Fairness, ranking and comparing different ways to decide.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and decisions', p: 'Ranking, voting rules and data beside SQA Computing Science and Maths.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Multi-agent AI', p: 'Agent teams, AI judges and aggregation rules, built in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and voting',
    h2: 'How should several AI agents combine their opinions?',
    intro: 'By a voting or aggregation rule chosen in advance, such as plurality, a Borda count, a Condorcet pairwise check or instant-runoff, because different rules can pick different winners from the same opinions.',
    p1: 'Five agents ranking eight Airdrie bus stops produced a winner G under plurality and instant-runoff, a three-way tie under Borda and no winner at all under Condorcet\'s head-to-head test.',
    p2: 'Learners who have seen that ask of any multi-agent AI: how were the answers combined, and who chose that rule?',
    closer: 'An Airdrie teenager who asks which voting rule an agent team used will not be fooled by a unanimous-sounding verdict, and building such teams in code is the surest way to learn that.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Petersburn to Chapelhall, online',
    intro: 'Bring any computer with a webcam and a connection that manages a video call.',
    cells: [
      { h3: 'Learners write it', p: 'All code and prompts come from the learner. From the screen share, our tutor keeps asking what a different rule would change.' },
      { h3: 'Level from the trial', p: 'The free session shows where to start; any SQA course is noted.' },
      { h3: 'First lesson free', p: 'We charge nothing for the opening lesson and suggest a course at the end.' },
      { h3: 'Level, not location', p: 'Groups of five to ten are formed by stage, with classmates drawn from all over Britain.' },
      { h3: 'Two a week', p: 'None during school holidays.' },
      { h3: 'Fixed slot', p: 'Tutors adjust for UK clock changes; your time stays the same.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, free on one evening, rarely live near one another. Video solves that.' }
  },

  fees: {
    h2: 'Airdrie fees',
    intro: 'Airdrie learners pay our international prices, which apply to every country other than India.',
    first: 'One full lesson free, then advice on a course.',
    group: 'Close to eight live group lessons per month.',
    private: 'Close to eight live private lessons per month.',
    closer: 'We price in US dollars (never sterling) and start charging only after the trial settles a course and a time slot. The pricing page spells out holidays, missed sessions and format changes.'
  },

  reviewsH2: 'North Lanarkshire parents and learners across Britain, on Google',

  book: {
    h2: 'Book a free Airdrie lesson',
    intro: 'Give us the learner\'s age or school year and something they enjoy. Options include holding one vote three ways, making a Scratch game with AI help, writing early Python, or pitting two tiny agents against each other.',
    success: 'Thank you. Your Airdrie request is with us.'
  },

  faq: {
    h2: 'Airdrie questions',
    intro: 'Ballots, agents, Airdrie bus stops, vibe coding and how lessons run.',
    items: [
      { q: 'What is the population of Airdrie?', a: 'National Records of Scotland estimated 36,390 people in the Airdrie locality in mid-2020.' },
      { q: 'Are vibe coding and AI agents classes available online in Airdrie?', a: 'All of our teaching is on live video, so Chapelhall, Glenmavis and every other corner of North Lanarkshire is covered, for ages 6 to 67.' },
      { q: 'What is a Borda count?', a: 'A voting rule where each ranking gives points by position, most for first place, and the option with the highest total wins. In our Airdrie test three stops tied on 20 points.' },
      { q: 'What is a Condorcet winner?', a: 'An option that beats every other option in head-to-head majority contests. Sometimes none exists, as with our five agents, because the majorities go round in a circle.' },
      { q: 'What does the Airdrie project involve?', a: 'Five simple agents rank eight real, unsheltered Airdrie bus stops from map data, and the learner combines their rankings with four different voting rules.' },
      { q: 'Where does vibe coding fit in?', a: 'Throughout, at every age: learners explain what they want, then test and correct what the AI makes.' },
      { q: 'When can learners start building AI agents?', a: 'When they can build small Python programs unaided, most often in the senior years or later; Copilot Studio needs one-to-one tuition.' },
      { q: 'Is SQA exam support available?', a: 'Computing Science and Maths are both covered up to Advanced Higher; we aim for real understanding and make no grade promises.' },
      { q: 'How are lessons priced?', a: 'Zero for the taster lesson. Regular tuition runs at USD 100 a month in a class, USD 150 a month for a personal tutor.' },
      { q: 'Are there lessons in the school holidays?', a: 'No, lessons pause; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Lanarkshire pages nearby',
    html: 'Every one of these runs its own experiment: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-coatbridge">Coatbridge</a> (how grid-like the streets are), <a class="cg-inline-link" href="/online-coding-and-python-classes-in-cumbernauld">Cumbernauld</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-hamilton-scotland">Hamilton</a> and <a class="cg-inline-link" href="/coding-classes-in-north-lanarkshire">North Lanarkshire</a>. Further afield, go via <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Airdrie and North Lanarkshire',
  footerPlaces: [
    { href: '/coding-classes-in-north-lanarkshire', label: 'North Lanarkshire' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-adr .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-adr .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-adr .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-adr .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-adr .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-adr .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-adr .cg-table td { font-variant-numeric: tabular-nums; letter-spacing: 0.02em; }
.cg-root.cg-adr .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-adr .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-adr .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'North Lanarkshire (S12000050). Scotland: Curriculum for Excellence, SQA National 5 to Advanced Higher. NRS mid-2020 settlement and locality estimates: Airdrie 36,390 (Cumbernauld 50,530, Coatbridge 43,950). postcodes.io (North Lanarkshire, ML6): Cairnhill, Clarkston, Craigneuk, Gartlea, Holehills, Petersburn, Rawyards, Thrashbush, Whinhall (suburban areas); Calderbank, Caldercruix, Chapelhall, Glenmavis, Plains (villages).',
    localProject: 'OSM API 0.6 bbox -4.010,55.850,-3.945,55.880: 171 bus stops (47 shelter=yes, 113 no, 11 untagged); 8 random shelter=no stops A-H (seed 2026). Agents rank by homes within 300 m, nearest shop, gap to nearest shelter, EU-DEM height, distance to primary/secondary road. Plurality G (2 firsts); Borda A=B=G 20; Condorcet none (A, B, G each 5 of 7); instant-runoff G over B 3-2 (alphabetical tie-breaks). Lesson family: voting rules for aggregating agent rankings.',
    requiredMentions: [
      '36,390',
      'Petersburn',
      'Rawyards',
      'Holehills',
      'Whinhall',
      'Cairnhill',
      'Chapelhall',
      'Borda count',
      'Condorcet',
      'instant-runoff'
    ],
    sources: [
      { claim: 'OpenStreetMap bus stops, buildings, shops and roads in Airdrie, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'OpenTopoData API, EU-DEM 25 m dataset (Copernicus EU-DEM v1.1).', url: 'https://www.opentopodata.org/datasets/eudem/' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas and villages in North Lanarkshire.', url: 'https://api.postcodes.io/places?q=Petersburn' }
    ],
    rejectedClaims: [
      'Which real bus stop needs a shelter: not claimed; a teaching exercise only, stop names deliberately not shown.',
      'That OpenStreetMap shelter tags are complete or current: not claimed.',
      'That the height agent\'s priority is correct: stated as our assumption.',
      'Third locality in North Lanarkshire: per NRS mid-2020 figures quoted on the North Lanarkshire page (Cumbernauld 50,530, Coatbridge 43,950, Airdrie 36,390).',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
