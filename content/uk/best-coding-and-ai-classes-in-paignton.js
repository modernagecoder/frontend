'use strict';
// Paignton (cg- town page, UK cluster Phase 8, towns band A, row 393). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how do game-playing AIs search, and
// when does a simple formula beat all that searching? (Monte Carlo tree search against the exact nim-sum strategy).
// Data (read 29 September 2026): ONS Census 2021 built-up areas: Paignton 67,520; Torquay 52,035; Brixham 17,840. Torbay
// (E06000027) TS001 139,324. The game board is taken from Paignton's figure: Nim with heaps 6, 7, 5 and 2 (the non-zero
// digits of 67,520). postcodes.io (Torbay): Goodrington (suburban area), Little Blagdon (suburban area), Collaton St Mary
// (village).
// Our run (scratchpad pgn/mcts.py): normal-play Nim (taking the last object wins); 1,008 positions with heaps up to
// 6, 7, 5, 2 (including the empty one), 882 of them wins for the player to move (non-zero nim-sum). Start nim-sum 6, so the
// first player can force a win. UCT Monte Carlo tree search (c = 1.4, random playouts) moving first against a perfect
// nim-sum opponent, 40 games per setting: 10 playouts 1 win; 100: 0; 1,000: 4; 5,000: 40. Single-move test on 200 sampled
// winning positions (seed 7): correct winning move 47 at 10 playouts, 100 at 100, 190 at 1,000.
// Lesson family: Monte Carlo tree search, playouts, exploration vs exploitation, exact theory (XOR nim-sum) as a
// benchmark. Screened: Monte Carlo tree search, nim-sum, playouts 0 hits ("Nim" famq hits are substrings of other words).
// Kettering owns minimax and alpha-beta; Milton Keynes owns Monte Carlo estimation of an area.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'PAIGNTON', label: 'Paignton', blurb: 'Coding and AI classes for Paignton, with a game-AI project that pits Monte Carlo tree search against a perfect formula on heaps taken from the town\'s census count.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-paignton',
  code: 'pgn',
  accent: '#7A4B2B',
  accentRationale: 'Paignton: a warm sandstone brown (5.9:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Paignton',
    eyebrow: 'Paignton, Torbay, Devon, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Devon' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-west-england', name: 'South West England' }],
  nav: [
    { label: 'Devon', href: '/coding-classes-in-devon' },
    { label: 'South West', href: '/coding-and-ai-classes-in-south-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Paignton, England',
  title: 'Coding and AI Classes in Paignton | Python, Vibe Coding, 6-67',
  description: 'Online coding, AI, Python and vibe coding classes for Paignton, Goodrington, Brixham and Torquay learners aged 6 to 67, taught live online. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Paignton, and a Python project that tests Monte Carlo tree search, the game-AI search method, against a perfect formula.',
  twitterDescription: 'Paignton coding, AI, Python and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Paignton',
    description: 'Online coding, AI, Python, vibe coding and mathematics for children, teenagers and adults in Paignton and across Torbay, taught live with thinking skills first.'
  },

  h1: 'Coding and AI classes in Paignton',
  capsuleQ: 'Where can Paignton learners find the best coding and AI classes?',
  capsule: 'Paignton\'s built-up area recorded 67,520 residents at the 2021 census, making it one of three Torbay towns the ONS lists alongside Torquay and Brixham, in a borough of 139,324. Goodrington and Little Blagdon are among its recorded suburbs, and Collaton St Mary is a village in Torbay. A learner of any age from 6 to 67 can study coding, AI, Python, vibe coding and maths here over a live video link with a tutor in India, one-to-one or with five to ten learners at the same stage. We start with thinking skills, so the learner stays ahead of the tools. The first lesson carries no charge and ends with a course we think suits. Paignton\'s project turns the town\'s own census count into a game board for testing a famous game-AI search method. Afterwards, class places cost USD 100 each month and private tuition USD 150 each month.',
  lead: 'Game-playing programs that reached headlines, famously including AlphaGo, combined learned judgement with a search method called Monte Carlo tree search. Instead of trying every move, it plays thousands of quick random games from the current position and leans towards the moves that tend to win. This project tries it on an ancient game with a secret: Nim. The heaps come from Paignton\'s 2021 census count, 67,520, so the board is heaps of 6, 7, 5 and 2. Nim has an exact winning formula, so the learner can see precisely how often the search gets it right, and how much searching it needs before it plays as well as a single line of mathematics.',
  wa: 'Hello Modern Age Coders, please could we book a free coding or AI lesson for a learner in Paignton?',

  picks: {
    eyebrow: 'Paignton course picks',
    h2: 'Paignton courses in thinking, vibe coding and AI',
    intro: 'Sorted by age, each beginning with a live lesson that is free and needs no payment details to reserve.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: strategy games, winning positions and finding the pattern behind them.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then apps built by describing them to an AI and playtesting them.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Game AI and machine learning in Python, including this tree-search project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Search, planning, learned models and agents, with the maths behind them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Paignton and Torbay',
      h2: 'Paignton, Torquay and Brixham',
      intro: 'The three Torbay built-up areas in the ONS 2021 census, and places recorded around Paignton.',
      body: [
        { kind: 'table', caption: 'Torbay built-up areas, 2021 census counts published by the ONS', head: ['Built-up area', 'People (2021)'], rows: [
          ['Paignton', '67,520'],
          ['Torquay', '52,035'],
          ['Brixham', '17,840']
        ] },
        { kind: 'p', text: 'The ONS publishes these three separately, and we show them that way; Torbay\'s borough count of 139,324 comes from its own table. Goodrington and Little Blagdon are recorded as suburban areas and Collaton St Mary as a village in Torbay. Local schools follow the national curriculum for England; share your holiday dates and no lessons will be booked in them.' },
        { kind: 'callout', h3: 'Devon, the South West and our approach', p: 'More options are on <a class="cg-inline-link" href="/coding-classes-in-devon">coding classes in Devon</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a>. The case for putting thinking before prompting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Paignton project',
      h2: 'Monte Carlo tree search against a perfect formula, on a Paignton game board',
      intro: 'Build the search, give it more and more random playouts, and measure it against Nim\'s exact winning rule.',
      body: [
        { kind: 'p', text: 'In Nim, players take turns removing any number of counters from a single heap, and whoever takes the last counter wins. With heaps of 6, 7, 5 and 2 there are 1,008 possible positions. Nim is completely solved: write each heap in binary, combine them with the exclusive-or operation, and if the result, the nim-sum, is not zero, the player to move can always force a win by making it zero. Here the starting nim-sum is 6, so the first player should win every game with perfect play, and 882 of the 1,008 positions are winning ones for whoever moves next.' },
        { kind: 'p', text: 'The learner codes Monte Carlo tree search from scratch. From the current position it repeatedly picks a path through the moves it has already explored, balancing moves that have done well against moves it has barely tried, then finishes each game with random moves, called a playout, and records who won. After its playouts it makes the move it explored most. It never sees the nim-sum formula. The opponent in the test plays the formula perfectly.' },
        { kind: 'table', caption: 'Monte Carlo tree search against perfect play on heaps 6, 7, 5, 2, our Python run, 29 September 2026', head: ['Playouts per move', 'Games won out of 40 (moving first)', 'Correct winning move, 200 sample positions'], rows: [
          ['10', '1', '47'],
          ['100', '0', '100'],
          ['1,000', '4', '190'],
          ['5,000', '40', 'not tested']
        ] },
        { kind: 'p', text: 'The search clearly learns: with 10 playouts it finds a winning move in fewer than a quarter of positions, with 1,000 it finds one 95% of the time. Yet against a perfect opponent that is still not enough, because a single slip anywhere in the game hands the win away, and at 1,000 playouts it won only 4 games of 40. At 5,000 playouts per move it won all 40. The exclusive-or formula, meanwhile, plays perfectly from any position after one line of arithmetic. Search is powerful when nobody knows a formula; when someone does, the formula wins on speed and certainty.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play Nim with counters, lose a few games, and hunt for the pattern that always wins.' },
          { h3: 'Ages 11 to 15', p: 'Write binary and exclusive-or in Python, then build a perfect Nim player.' },
          { h3: 'Ages 15 and up', p: 'Code Monte Carlo tree search, vary the playouts and measure it against the perfect player.' }
        ] },
        { kind: 'callout', h3: 'Census numbers, our game', p: 'Paignton\'s 2021 count is an ONS figure; turning its digits into Nim heaps is simply our choice of board. The search, the games and every result above are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Search and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Brute search and known answers each have their place.',
      body: [
        { kind: 'table', caption: 'From Paignton Nim to modern AI', head: ['In the Nim project', 'In AI systems and agents'], rows: [
          ['More playouts, better moves', 'More computation can buy better decisions'],
          ['95% right per move still lost most games', 'Small error rates compound over long tasks'],
          ['5,000 playouts matched perfect play', 'Enough search can reach expert level'],
          ['A one-line formula did it instantly', 'Use exact methods when they exist'],
          ['The search never saw the formula', 'Learning from experience needs no rules, but costs effort']
        ] },
        { kind: 'p', text: 'The idea that errors pile up over many steps matters far beyond games. AI agents that carry out long tasks face the same arithmetic: a tool that is right 95% of the time at each step can easily go wrong somewhere in a twenty-step job. In our vibe coding lessons, where a learner describes what to build and an AI drafts the code, a Paignton learner who builds this search knows to break long tasks into checked steps. Older teenagers and adults move on to building agents once Python is secure, and Copilot Studio agents are taught in private lessons only. Two related pages: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agent building for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is independent of the ONS, postcodes.io and any AI company mentioned. The census figures are theirs; the game, the search and any errors in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From counter games to game AI',
    intro: 'We treat the school year as a clue, then the trial lesson tells us where to start.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Strategy games, patterns and explaining a winning idea.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and game AI', p: 'Binary, search and simulation alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Search and agents', p: 'Search, planning, models and agents, built in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and games',
    h2: 'What is Monte Carlo tree search, and how do game AIs use it?',
    intro: 'It chooses a move by playing many quick random games from each option and favouring the ones that win most.',
    p1: 'On Paignton\'s Nim board it went from finding a winning move in under a quarter of positions to 95% as the playouts rose from 10 to 1,000, and beat a perfect opponent every time at 5,000.',
    p2: 'Learners who have built it understand why game AIs need so much computation, and why an exact rule, when one exists, is better still.',
    closer: 'Building a real game AI and testing it honestly gives Paignton teenagers a strong grounding for the AI era, reason enough to start coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Goodrington to Collaton St Mary, online',
    intro: 'Any home computer with broadband good enough for a video call will do.',
    cells: [
      { h3: 'The learner at the keys', p: 'Code is typed, prompted and run by the student throughout, while the tutor watches the shared screen and poses questions.' },
      { h3: 'Levelled by the trial', p: 'Topic one depends on what the learner shows in the free session, and we keep a note of any exam board.' },
      { h3: 'Free first session', p: 'We charge nothing for lesson one and close it with a recommendation.' },
      { h3: 'Classes at one level', p: 'Groups run with five to ten UK students who are equally far along.' },
      { h3: 'Two sessions a week', p: 'No lessons in the school holidays.' },
      { h3: 'Constant times', p: 'When the UK clocks change, our tutors adjust, so your hour holds.' }
    ],
    spec: { title: 'Why we teach online', p: 'Five learners at the same level, all free on one evening, seldom live close together. Online, they can share a class anyway.' }
  },

  fees: {
    h2: 'Paignton fees',
    intro: 'Paignton, like every country outside India, is charged our international rate.',
    first: 'The whole first lesson free, finishing with a suggested course.',
    group: 'About eight live small-group lessons monthly.',
    private: 'About eight live one-to-one lessons monthly.',
    closer: 'All prices are in US dollars and never in pounds. Nothing is invoiced until the trial settles a course and a weekly slot, and the pricing page explains time away, missed sessions and switching format.'
  },

  reviewsH2: 'Google reviews from Devon families and learners elsewhere in Britain',

  book: {
    h2: 'Book a free Paignton lesson',
    intro: 'Send an age or school year and a favourite pastime. Trial ideas: a counters puzzle to crack, an AI-assisted Scratch game, a first look at Python, or a Nim player that never loses.',
    success: 'Thank you. Your Paignton request has reached us.'
  },

  faq: {
    h2: 'Paignton questions',
    intro: 'Game AI, the Nim project, vibe coding, agents and practical points.',
    items: [
      { q: 'What is the population of Paignton?', a: 'The ONS gives 67,520 for the Paignton built-up area at the 2021 census.' },
      { q: 'Are coding and AI lessons available in Paignton?', a: 'Yes, live online, for any learner aged 6 to 67 in Paignton or elsewhere in Torbay.' },
      { q: 'What is Nim, and how is it solved?', a: 'A take-away game with heaps of counters; combine the heaps with the exclusive-or operation, and if the result is not zero the player to move can always win.' },
      { q: 'What is the Paignton project?', a: 'Learners build Monte Carlo tree search, play it on Nim heaps taken from Paignton\'s census count and measure how many playouts it needs to match the perfect formula.' },
      { q: 'Can learners here try vibe coding?', a: 'Yes, at any age: they plan, an AI drafts, and they test each part.' },
      { q: 'Can older learners build AI agents?', a: 'Yes. After a solid start in Python, typically in the late teens or as adults, agents come next; Copilot Studio work is one-to-one.' },
      { q: 'Is there a classroom?', a: 'No; every lesson is taught online.' },
      { q: 'Do you help exam-year students?', a: 'Yes, with GCSE and A level computer science and maths, aiming at understanding; grades are never guaranteed.' },
      { q: 'What are the fees?', a: 'We waive the fee for the opening lesson. Regular lessons are then USD 100 per month with a group or USD 150 per month on your own.' },
      { q: 'Do lessons pause for school holidays?', a: 'Yes; just send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Devon and South West pages',
    html: 'South West neighbours with their own projects: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-taunton">Taunton</a> (an ant colony) and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-weston-super-mare">Weston-super-Mare</a> (optimal age bands). Grammar-school families will find <a class="cg-inline-link" href="/11-plus-maths-tuition-torbay">11 plus maths tuition in Torbay</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every other area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Paignton and Devon',
  footerPlaces: [
    { href: '/coding-classes-in-devon', label: 'Devon' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-pgn .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-pgn .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-pgn .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-pgn .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-pgn .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.02em; }
.cg-root.cg-pgn .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-pgn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pgn .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-pgn .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-pgn .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Torbay (E06000027), Census 2021 TS001 usual residents 139,324. ONS 2021 BUAs (published): Paignton 67,520; Torquay 52,035; Brixham 17,840. postcodes.io (Torbay): Goodrington, Little Blagdon (suburban areas); Collaton St Mary (village).',
    localProject: 'Nim heaps 6, 7, 5, 2 from 67,520. 1,008 positions, 882 winning; start nim-sum 6. UCT MCTS vs perfect nim-sum player, 40 games each: 10 playouts 1 win; 100: 0; 1,000: 4; 5,000: 40. Correct winning move in 200 sampled winning positions: 47 (10 playouts), 100 (100), 190 (1,000). Lesson family: Monte Carlo tree search, playouts, compounding error, exact theory as benchmark.',
    requiredMentions: [
      '67,520',
      '139,324',
      '17,840',
      'Brixham',
      'Goodrington',
      'Collaton St Mary',
      'Monte Carlo tree search',
      'nim-sum',
      'playouts',
      'Nim'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations and TS001 usual residents via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Open Geography portal, built-up areas.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places in Torbay (suburban areas and village).', url: 'https://api.postcodes.io/places?q=Goodrington' }
    ],
    rejectedClaims: [
      'Seaside or resort history: not read from a source; not claimed.',
      'How AlphaGo worked in detail: only the general combination of learned judgement and tree search is mentioned.',
      'That the census digits mean anything as a game: stated as our arbitrary choice of board.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
