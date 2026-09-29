'use strict';
// Kettering (cg- town page, UK cluster Phase 8, towns band A, row 382). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does a game-playing AI agent
// choose a move against an opponent, and what should it do when winning is impossible? (minimax, alpha-beta, retrograde
// analysis on a real street map).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map call, bbox -0.734,52.396,-0.722,52.404 (ODbL). Roads, paths,
// footways, steps and cycleways inside the box, simplified to junctions: largest connected piece 640 junctions, 756 links,
// 101 dead ends. Landmarks snapped to nearest junction: Kettering Library (way 699064990, 16.3 m), Manor House Museum
// (way 699064991, 9.9 m), Newlands Shopping Centre (way 190925893, 27.3 m), Kettering Arts Centre (node 12102727893),
// Meadow Road Park (way 35904994), The Yards (node 13580229056), Garden of Rest (way 35906610), Bonkers Playhouse
// (node 5548322577).
// Game (ours): one cop and one robber on junctions; the cop moves first; each turn a player moves along one link or stays;
// capture when both share a junction. Retrograde analysis over all 408,960 cop-to-move start pairs: the cop can force
// capture from 5,781 (1.41%); among those, median 13 turns, longest 43. From Kettering Library the cop cannot force capture
// of a robber starting at any of the seven other landmarks (Manor House Museum is 6 links away).
// Minimax, cop at Kettering Library, robber at Newlands Shopping Centre (24 links apart), score = capture or minus the
// links between them: positions examined, plain vs alpha-beta, same value -24 every time: 2 turns 11 vs 9; 4: 119 vs
// 52; 6: 1,271 vs 239; 8: 14,381 vs 1,023; 10: 167,653 vs 4,217 (97.5% fewer).
// Lesson family: adversarial search (minimax), alpha-beta pruning, look-ahead horizon, provably unwinnable goals.
// Screened: minimax, alpha-beta 0 hits. Crewe owns Q-learning on OSM; Worcester owns A*.
// Place facts: ONS 2021 BUAs in North Northamptonshire (published): Kettering 63,150; Desborough 11,900; Burton Latimer
// 10,445; Rothwell (North Northamptonshire) 8,620. postcodes.io: Barton Seagrave (suburban area), Pytchley (village),
// North Northamptonshire. The unitary total is shared with Corby and Wellingborough; not registered here.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'KETTERING', label: 'Kettering', blurb: 'Vibe coding and AI agents classes for Kettering, with a project where two AI agents play cops and robbers on the town centre\'s real streets.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-kettering',
  code: 'ktg',
  accent: '#223E8A',
  accentRationale: 'Kettering: a deep ink blue (7.97:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Kettering',
    eyebrow: 'Kettering, North Northamptonshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Northamptonshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-midlands', name: 'East Midlands' }],
  nav: [
    { label: 'Northamptonshire', href: '/coding-classes-in-northamptonshire' },
    { label: 'East Midlands', href: '/coding-and-ai-classes-in-east-midlands' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kettering, England',
  title: 'Vibe Coding and AI Agents Classes in Kettering | Ages 6 to 67',
  description: 'Online vibe coding, AI agents and Python classes for Kettering, Barton Seagrave, Desborough and Rothwell learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Live online vibe coding and AI agents classes for Kettering, and a Python project where two game-playing agents chase each other through the town centre.',
  twitterDescription: 'Kettering vibe coding, AI agents and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Kettering',
    description: 'Online vibe coding, AI agents, Python, coding and mathematics for children, teenagers and adults in Kettering and North Northamptonshire, taught live with thinking skills first.'
  },

  h1: 'Vibe coding and AI agents classes in Kettering',
  capsuleQ: 'Where can Kettering learners find the best vibe coding and AI agents classes?',
  capsule: 'The ONS counted 63,150 people in the Kettering built-up area at the 2021 census, with Desborough, Burton Latimer and Rothwell listed separately in North Northamptonshire and Barton Seagrave recorded as one of the town\'s suburbs. Any learner from 6 to 67 there can study vibe coding, AI agents, Python, coding and maths with us over live video, with a tutor in India all to themselves or in a same-level class of five to ten. Reasoning is taught before tools, so an agent\'s choices make sense to the person running it. A free first lesson closes with our recommendation. The Kettering project sets two game-playing agents against each other on the real streets of the town centre. Ongoing lessons are USD 100 a month in a class or USD 150 a month one-to-one.',
  lead: 'Chess programs and many other game-playing and planning agents rest on one idea: before choosing a move, imagine the opponent\'s strongest reply, and theirs, and so on. That idea is called minimax. This project turns the streets of central Kettering, taken from OpenStreetMap, into a board for an old puzzle called cops and robbers. One agent chases, one escapes, and both look ahead. The learner discovers how a clever trick named alpha-beta pruning lets an agent see further with far less work, and something more surprising: on these streets, a lone cop usually cannot win at all, and an agent needs a way to find that out.',
  wa: 'Hello Modern Age Coders, please book a free vibe coding or AI agents lesson for a Kettering learner.',

  picks: {
    eyebrow: 'Kettering course picks',
    h2: 'Kettering picks for thinking, vibe coding and agents',
    intro: 'Age and enthusiasm are the guide. Lesson one on any course is live and free, and no payment card is needed to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: strategy games, thinking two moves ahead and spotting a trap.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games first, then apps built by describing them to an AI and playtesting them.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the street-map chase game.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents that plan, search, use tools and know when a goal cannot be reached.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Kettering and nearby towns',
      h2: 'Kettering, Desborough, Burton Latimer and Rothwell',
      intro: 'Census counts published by the ONS for Kettering and three smaller built-up areas in the same unitary area.',
      body: [
        { kind: 'table', caption: 'Kettering and three more North Northamptonshire built-up areas, 2021 census, ONS', head: ['Built-up area', 'People (2021)'], rows: [
          ['Kettering', '63,150'],
          ['Desborough', '11,900'],
          ['Burton Latimer', '10,445'],
          ['Rothwell', '8,620']
        ] },
        { kind: 'p', text: 'The ONS publishes these as four separate figures, and we leave them that way rather than inventing a total. North Northamptonshire also contains Corby, Wellingborough, Rushden and many smaller places. Barton Seagrave is recorded as a suburban area and Pytchley as a village in the same unitary authority. Schools here teach the national curriculum for England, so tell us your holiday weeks and we will keep them clear.' },
        { kind: 'callout', h3: 'The county, the region and our approach', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-northamptonshire">Northamptonshire page</a> covers the wider county and <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">the East Midlands page</a> the region. Why thinking comes before prompting is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Kettering project',
      h2: 'Two AI agents play cops and robbers in Kettering town centre',
      intro: 'Turn OpenStreetMap into a game board, let a minimax agent look ahead, and prove which chases can ever be won.',
      body: [
        { kind: 'p', text: 'The learner downloads a small rectangle of central Kettering from the OpenStreetMap API and keeps the roads, paths, footways and steps. Each junction becomes a square on the board: 640 junctions joined by 756 links, including 101 dead ends. The rules are simple. The cop moves first; on each turn a player either walks along one link or stays put; the cop wins by landing on the robber\'s junction. Eight real places are pinned to their nearest junctions, among them Kettering Library, the Manor House Museum and Newlands Shopping Centre.' },
        { kind: 'p', text: 'A minimax agent chooses a move by imagining every reply. The cop tries each of its moves; for each, it assumes the robber will answer with the move that is worst for the cop; then it looks another turn deeper, and so on, up to a limit called the horizon. At the horizon it scores the position by how many links still separate the two. Alpha-beta pruning is the clever part: as soon as a move is shown to be worse than one already found, the agent stops exploring it, because a sensible opponent would never allow it. The answer is identical; the work is not.' },
        { kind: 'table', caption: 'Positions examined by the cop at Kettering Library chasing a robber at Newlands Shopping Centre, 24 links apart, our Python run on OpenStreetMap data, 29 September 2026', head: ['Turns looked ahead', 'Plain minimax', 'With alpha-beta pruning', 'Work saved'], rows: [
          ['2', '11', '9', '18.2%'],
          ['4', '119', '52', '56.3%'],
          ['6', '1,271', '239', '81.2%'],
          ['8', '14,381', '1,023', '92.9%'],
          ['10', '167,653', '4,217', '97.5%']
        ] },
        { kind: 'p', text: 'Every extra pair of turns multiplies plain minimax\'s work by roughly eleven, and at ten turns it examines 167,653 positions. With alpha-beta pruning the same search needs 4,217 and reaches exactly the same verdict. The savings grow the deeper the agent looks, which is why pruning matters so much to any game-playing program. The verdict itself is sobering, though: after ten turns the cop is still 24 links away. Looking ahead does not help if the chase cannot be won.' },
        { kind: 'p', text: 'To settle that, the learner stops searching forwards and works backwards through every possible position, a method called retrograde analysis. Of all 408,960 starting pairs, the cop can force a capture from just 5,781, or 1.41%. In 77.4% of those, the robber starts on one of the 186 junctions that sit on branches leading to dead ends rather than on a loop; the wins take a median of 13 turns and at most 43. From Kettering Library the cop cannot force a capture against a robber starting at any of the seven other landmarks, not even the Manor House Museum six links away. Wherever streets form a loop around a block, the robber can keep the block between them forever.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play cops and robbers on a hand-drawn street map and find the loop that saves the robber.' },
          { h3: 'Ages 11 to 15', p: 'Load a small street map into Python and let a two-turn look-ahead agent choose its moves.' },
          { h3: 'Ages 15 and up', p: 'Code minimax with alpha-beta, count the pruned positions and run the backwards analysis.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap streets, our agents', p: 'Street data is from OpenStreetMap and its contributors under the Open Database Licence. The game, the agents, the position counts and the retrograde analysis are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents that look ahead',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Planning well includes knowing when a goal is out of reach.',
      body: [
        { kind: 'table', caption: 'Lessons from the Kettering chase for today\'s agents', head: ['On the Kettering streets', 'For AI agents in general'], rows: [
          ['Assume the opponent replies well', 'Plan for the world pushing back, not the easy case'],
          ['Pruning saved 97.5% of the work', 'Smart search beats brute force'],
          ['Ten turns ahead was still not enough', 'A longer horizon cannot fix an impossible goal'],
          ['Working backwards proved it', 'Check whether success is even possible'],
          ['A lone cop fails around a loop', 'Sometimes the answer is more resources, not more effort']
        ] },
        { kind: 'p', text: 'In our vibe coding lessons the learner describes a game and an AI writes the first version, and a chase like this one is a favourite. It is also a good test of whether the learner understands the code: an AI will happily produce a minimax function that runs forever, or one that never notices the robber can always escape. AI agents built on language models face the same trap, trying again and again at a task that cannot succeed. A well-built agent checks whether a goal is achievable and says so. Learners move on to agents after Python, usually as older teenagers or adults, and Copilot Studio agents are covered in one-to-one lessons only. For the full path, read <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the agents course for students in the UK</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with OpenStreetMap, the ONS or any venue named on this page. Their maps and figures made the project possible; the agents, and any mistakes in them, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From board games to game-playing agents',
    intro: 'We treat the school year as a starting hint, and the free session fixes the real level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Strategy, thinking ahead and explaining a choice.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps made with AI help and playtested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and game AI', p: 'Graphs, search and adversarial agents beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Planning agents', p: 'Search, planning, tools and language-model agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and games',
    h2: 'How does an AI decide its next move in a game?',
    intro: 'It imagines the opponent\'s strongest reply to each move, then picks the move whose worst case is least bad.',
    p1: 'That is minimax, and in Kettering it needed 167,653 positions to look ten turns ahead until alpha-beta pruning cut the work to 4,217. Many game-playing programs combine this kind of search with learned judgement about which positions are good.',
    p2: 'Learners who build it themselves also learn its limits: no amount of looking ahead helps when, as on most Kettering starting squares, the game cannot be won.',
    closer: 'Understanding how agents plan against an opponent gives Kettering teenagers a real head start with AI, a strong reason to learn coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Barton Seagrave to Rothwell, online',
    intro: 'A home computer and a broadband connection that manages video calls are enough.',
    cells: [
      { h3: 'Learner at the controls', p: 'Typing, prompting and running are all done by the student, while the tutor follows along on their screen and keeps asking why.' },
      { h3: 'Level set by the trial', p: 'Year groups are only a clue; the opening lesson picks the first topic, and we note any exam board.' },
      { h3: 'Free to start', p: 'Session one is free of charge and ends with a suggested course.' },
      { h3: 'Classes that match', p: 'Five to ten UK learners at a similar stage share every group.' },
      { h3: 'Two per week', p: 'None during school holidays.' },
      { h3: 'Steady timetable', p: 'Tutors move with the UK clocks in spring and autumn, so the hour you chose stays put.' }
    ],
    spec: { title: 'Why lessons happen online', p: 'Finding five learners at one level, all free on one evening, in a single town is rare. Online, geography stops mattering.' }
  },

  fees: {
    h2: 'Kettering fees',
    intro: 'In Kettering, as everywhere outside India, our international rate applies.',
    first: 'One full lesson free, rounded off with a course suggestion.',
    group: 'Around eight live lessons a month in a small class.',
    private: 'Around eight live private lessons a month.',
    closer: 'Fees are quoted in US dollars rather than pounds. The first invoice comes only after the trial has fixed a course and a regular slot, and the pricing page explains breaks, absences and moving between class and private tuition.'
  },

  reviewsH2: 'Northamptonshire parents and UK learners reviewing us on Google',

  book: {
    h2: 'Book a free Kettering lesson',
    intro: 'We only need an age or year group and something the learner loves. A trial might be a strategy puzzle, a Scratch chase game built with an AI, a first Python program, or a two-move look-ahead of their own.',
    success: 'Thank you. Your Kettering request has been received.'
  },

  faq: {
    h2: 'Kettering questions',
    intro: 'Minimax, the chase project, vibe coding, agents and the practical details.',
    items: [
      { q: 'What is the population of Kettering?', a: 'The ONS gives 63,150 for the Kettering built-up area at the 2021 census.' },
      { q: 'Do you teach vibe coding and AI agents in Kettering?', a: 'Yes, over live video for learners aged 6 to 67 across Kettering and North Northamptonshire.' },
      { q: 'What is minimax in AI?', a: 'A way for a game-playing agent to choose a move by assuming the opponent always replies as well as possible, then picking the move with the least bad worst case.' },
      { q: 'What is the Kettering project?', a: 'Two agents play cops and robbers on the real streets of Kettering town centre; learners code minimax with alpha-beta pruning and prove which chases the cop can ever win.' },
      { q: 'At what age can learners start on AI agents?', a: 'Once they have some Python, usually from the later teens; Copilot Studio agents are taught one-to-one only.' },
      { q: 'Are the lessons face to face?', a: 'No, everything is taught live online.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, in computer science and maths, with understanding as the aim rather than promised grades.' },
      { q: 'Which ages do you teach?', a: 'From 6 up to 67.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free, then USD 100 a month in a group or USD 150 a month privately.' },
      { q: 'What about school holidays?', a: 'Lessons pause. Send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Northamptonshire and East Midlands pages',
    html: '<a class="cg-inline-link" href="/best-coding-and-ai-classes-in-northampton">Northampton</a> has a page and project of its own, as do <a class="cg-inline-link" href="/online-coding-and-python-classes-in-mansfield">Mansfield</a> and <a class="cg-inline-link" href="/best-coding-class-in-leicester">Leicester</a>. Every town and county we cover is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Kettering and Northamptonshire',
  footerPlaces: [
    { href: '/coding-classes-in-northamptonshire', label: 'Northamptonshire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ktg .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.3vw, 2.7rem); }
.cg-root.cg-ktg .cg-hero h1 { font-weight: 760; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-ktg .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-ktg .cg-eyebrow { letter-spacing: 0.19em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-ktg .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-ktg .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-ktg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ktg .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-ktg .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-ktg .cg-callout { border-left-width: 5px; border-radius: 0 11px 11px 0; }
`,

  dossier: {
    curriculumAuthority: 'North Northamptonshire (E06000061). ONS 2021 BUAs (published): Kettering 63,150; Desborough 11,900; Burton Latimer 10,445; Rothwell (North Northamptonshire) 8,620. postcodes.io: Barton Seagrave (suburban area), Pytchley (village). OSM landmarks: Kettering Library (way 699064990), Manor House Museum (way 699064991), Newlands Shopping Centre (way 190925893).',
    localProject: 'OSM bbox -0.734,52.396,-0.722,52.404: 640 junctions, 756 links, 101 dead ends. Cops and robbers, cop first, move or stay. Retrograde over 408,960 start pairs: cop forces capture from 5,781 (1.41%), median 13 turns, max 43; from the Library no landmark robber can be caught. Minimax Library vs Newlands (24 links), plain vs alpha-beta: 2: 11/9; 4: 119/52; 6: 1,271/239; 8: 14,381/1,023; 10: 167,653/4,217 (97.5% saved). Lesson family: minimax, alpha-beta, horizon, unwinnable goals.',
    requiredMentions: [
      '63,150',
      'Desborough',
      'Barton Seagrave',
      'Kettering Library',
      'Manor House Museum',
      'Newlands Shopping Centre',
      'minimax',
      'alpha-beta',
      'cops and robbers',
      '167,653'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'OpenStreetMap map data for central Kettering, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'OpenStreetMap API 0.6 map call used for the street graph.', url: 'https://api.openstreetmap.org/api/0.6/map?bbox=-0.734,52.396,-0.722,52.404' },
      { claim: 'postcodes.io places: Barton Seagrave and Pytchley in North Northamptonshire.', url: 'https://api.postcodes.io/places?q=Barton%20Seagrave' }
    ],
    rejectedClaims: [
      'Footwear or other industrial history: not read from a source; not claimed.',
      'Opening hours or services of the named venues: not read; not claimed.',
      'That the street graph is a complete or safe walking network: not assessed; it is the mapped links inside one rectangle.',
      'North Northamptonshire unitary total: shared with other towns; not used here.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
