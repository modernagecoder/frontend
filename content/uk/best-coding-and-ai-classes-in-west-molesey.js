'use strict';
// West Molesey (cg- town page, UK cluster Phase 10, towns band B, row 525). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: Harris's rule for the Hampton Court maze
// in Three Men in a Boat ("keep on taking the first turning to the right") is the wall follower; when does it work, and
// what does it cost against a search that keeps a map? (maze solving: wall follower versus breadth-first search.)
// Text: Project Gutenberg eBook 308, Jerome K. Jerome, Three Men in a Boat (1889), read 30 September 2026. Chapter VI
// holds Harris's maze story with the sentence quoted; Chapter VII opens "It was while passing through Moulsey Lock that
// Harris told me about his maze experience." OSM (one Overpass query, 30 September 2026): way 605722573 "Molesey Lock"
// at 51.4048, -0.3459; postcodes.io nearest postcode KT8 9AW (40 m), BUA West Molesey, ward Molesey East.
// Our run (scratchpad wml/maze.py, seed 20260930): 1,000 random 15 by 15 mazes (225 cells) made by recursive
// backtracking, so exactly one route joins any two cells (196 interior walls). Start: middle of the top edge; goal:
// centre cell. Perfect mazes: right-hand wall follower reached the centre in 1,000 of 1,000; breadth-first search mean
// 53.2 steps, wall follower mean 140.2 steps, median 2.36 times the shortest, worst 41.4 times. Extra walls removed at
// random to create loops: 10 walls, follower reached the centre in 594 of 1,000; 20 walls, 304; 39 walls, 62. The
// left-hand version succeeded in exactly the same numbers. Breadth-first search found the centre every time.
// Lesson family: maze solving, wall follower vs breadth-first search. Screened: "wall follower", "right-hand rule",
// "moulsey", "three men in a boat" 0 hits in content/; claimed in claims.txt. Surrey county page = GPS week rollover.
// Place facts: Elmbridge TS001 138,754. ONS 2021 BUA (published): West Molesey 47,150. postcodes.io places whose closest
// postcode is in the West Molesey BUA: West Molesey, East Molesey (KT8), Thames Ditton, Weston Green (KT7), Long Ditton
// (KT6), Hinchley Wood, Claygate (KT10). Esher and Hersham have their own BUAs; not listed as inside.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WEST MOLESEY', label: 'West Molesey', blurb: 'Coding and AI classes for West Molesey, with a maze project that tests the rule Harris swore by in Three Men in a Boat.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-west-molesey',
  code: 'wml',
  accent: '#7A3145',
  accentRationale: 'West Molesey: a dark claret (8.93:1 contrast), picked by hand and checked for distance from every accent in use',
  pageType: 'city',
  place: {
    name: 'West Molesey',
    eyebrow: 'West Molesey, Elmbridge, Surrey',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Surrey' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Surrey', href: '/coding-classes-in-surrey' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'West Molesey, Surrey',
  title: 'Coding and AI Classes in West Molesey, Surrey | Ages 6 to 67',
  description: 'Live online coding and AI classes for West Molesey, East Molesey, Thames Ditton and Claygate, ages 6 to 67: Python, vibe coding and agents. First lesson free.',
  ogDescription: 'Coding and AI classes for West Molesey, with a maze project built on Harris\'s rule from Three Men in a Boat.',
  twitterDescription: 'West Molesey coding and AI lessons, live online for ages 6 to 67. Your first lesson is free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for West Molesey',
    description: 'Online coding, AI, Python and maths lessons for children, teenagers and adults in West Molesey and Elmbridge, taught through search algorithms the learner writes and tests.'
  },

  h1: 'Coding and AI classes in West Molesey',
  capsuleQ: 'Which coding and AI classes are best for West Molesey?',
  capsule: 'The 2021 census counted 47,150 usual residents in the ONS built-up area named West Molesey, and 138,754 in the borough of Elmbridge. By the postcode gazetteer that built-up area also takes in East Molesey, Thames Ditton, Weston Green, Long Ditton, Hinchley Wood and Claygate. Learners aged six to 67 there study coding, AI, Python, vibe coding and maths with Modern Age Coders over live video; tutors based in India teach them privately or in level-matched groups of five to ten. Our lessons ask learners to test ideas, not just type them. We recommend a course only after a free first lesson. The West Molesey project starts from a rule for escaping a maze that Harris gives in Three Men in a Boat, told as the boat passes through Moulsey Lock, and tests it on 1,000 computer-made mazes against breadth-first search. Past the trial, a group place costs USD 100 monthly and private tuition USD 150 monthly.',
  lead: 'In Three Men in a Boat, Harris leads a country cousin into the Hampton Court maze, confident that it is simple. Jerome gives his method in one line: "You keep on taking the first turning to the right." Soon a whole crowd is following him round and round, and a keeper has to let them out. Jerome\'s narrator hears the story as their boat passes through Moulsey Lock. Harris\'s rule has a name in computing, the wall follower, and it is not foolish. In some mazes it can never fail. In others it can walk in circles for ever. Finding out which is which takes about forty lines of Python.',
  wa: 'Hello Modern Age Coders, we would like a free coding or AI trial lesson, please. We are in West Molesey.',

  picks: {
    eyebrow: 'Choosing a course',
    h2: 'Coding and AI courses for West Molesey learners',
    intro: 'One recommendation for each age. Each begins with a live first lesson that is free and needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Thinking like a programmer: mazes, rules and step-by-step instructions tested by hand.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: an AI helps build a Scratch maze game, and the child checks it.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 17', note: 'Search, graphs and recursion in Python, with the Moulsey maze project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from scratch to algorithms and a first AI agent that explores.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Where we mean',
      h2: 'West Molesey, East Molesey, Thames Ditton and Claygate',
      intro: 'The census count for the built-up area, the borough total, and which places the gazetteer puts inside.',
      body: [
        { kind: 'table', caption: 'Usual residents at the 2021 census (ONS)', head: ['Place', 'Residents'], rows: [
          ['West Molesey built-up area', '47,150'],
          ['Elmbridge borough', '138,754']
        ] },
        { kind: 'p', text: 'The ONS names this built-up area after West Molesey, but it reaches well beyond the village. For West Molesey and East Molesey in KT8, Thames Ditton and Weston Green in KT7, Long Ditton in KT6, and Hinchley Wood and Claygate in KT10, the closest postcode to each gazetteer point lies inside it. Esher, Hersham and Walton-on-Thames have built-up areas of their own and are counted separately. The borough row covers all of them, so the two figures are never added. Schools here follow the national curriculum for England; give us the year group, Year 2 to Year 13, and lessons can support GCSE or A level computer science.' },
        { kind: 'callout', h3: 'Other pages near the Thames', p: 'See <a class="cg-inline-link" href="/coding-classes-in-kingston-upon-thames-london">Kingston upon Thames</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-twickenham-london">Twickenham</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-woking">Woking</a> and the <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey county page</a>. The reason we put reasoning ahead of tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The West Molesey project',
      h2: 'Testing Harris\'s maze rule on a thousand mazes',
      intro: 'A sentence from an 1889 novel, a maze generator, and two ways to reach the centre.',
      body: [
        { kind: 'p', text: 'The novel is free from Project Gutenberg, so the learner begins by loading the text in Python and finding the passages themselves: the maze story in Chapter VI, and the opening of Chapter VII, which places the telling in Moulsey Lock. OpenStreetMap has Molesey Lock on the Thames, and the postcode nearest to it, KT8 9AW, lies 40 m away inside the West Molesey built-up area.' },
        { kind: 'p', text: 'Next the learner writes a maze maker. Recursive backtracking carves passages through a 15 by 15 grid of 225 cells until every cell is joined, leaving exactly one route between any two cells and 196 inside walls. The walker starts in the middle of the top edge and aims for the centre cell, as in a hedge maze. Harris\'s rule becomes code: at each cell, turn right if you can, otherwise go straight, otherwise left, otherwise back. That is the right-hand wall follower. The rival is breadth-first search, which explores outward one step at a time, remembering every cell it has seen, and so finds the shortest route.' },
        { kind: 'table', caption: 'Right-hand rule against breadth-first search, 1,000 mazes per row, our Python run', head: ['Maze', 'Rule reached the centre', 'Search reached the centre', 'Notes'], rows: [
          ['One route between any two cells', '1,000 of 1,000', '1,000 of 1,000', 'Rule used 140.2 steps on average; shortest was 53.2'],
          ['10 extra walls removed', '594 of 1,000', '1,000 of 1,000', 'Loops appear'],
          ['20 extra walls removed', '304 of 1,000', '1,000 of 1,000', ''],
          ['39 extra walls removed', '62 of 1,000', '1,000 of 1,000', 'About one wall in five gone']
        ] },
        { kind: 'p', text: 'In the mazes with a single route between any two cells, Harris would have been right: keeping a hand on one wall reached the centre every time. It was slow, though. The median walk was 2.36 times the shortest route and the longest was 41.4 times. Removing a few walls creates loops, and a loop can surround the goal like a moat, so a hand on the outer wall circles round it and back to the entrance. With ten walls removed the rule failed in 406 mazes; with 39 removed it failed in 938. Keeping the left hand on the wall instead succeeded in exactly the same number of mazes each time. Breadth-first search never failed, because it remembers where it has been.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw two paper mazes, one with a loop round the middle, and try the right-hand rule on both.' },
          { h3: 'Ages 11 to 15', p: 'Store a maze as a Python grid and code the wall follower with a heading that turns.' },
          { h3: 'Ages 15 and up', p: 'Generate mazes, add loops, write breadth-first search with a queue, and reproduce the table.' }
        ] },
        { kind: 'callout', h3: 'Text, map and code', p: 'Three Men in a Boat by Jerome K. Jerome (1889) is Project Gutenberg eBook 308. The lock\'s position comes from OpenStreetMap contributors (Open Database Licence) and the postcode check from postcodes.io. The mazes, the seed (20260930) and every count in the table come from our own program. We make no claim about the layout of the real Hampton Court maze.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Coding next to AI',
      h2: 'What Harris\'s rule teaches about trusting AI',
      intro: 'A rule that works in one world can quietly fail in the next.',
      body: [
        { kind: 'table', caption: 'From a Victorian maze to AI-written code', head: ['In the maze runs', 'With AI'], rows: [
          ['The rule was perfect when every route was unique', 'Know the conditions an answer relies on'],
          ['A few loops broke it 406 times in 1,000', 'Test beyond the easy cases'],
          ['Both hands failed in the same mazes', 'A mirror-image fix is often the same bug'],
          ['Search succeeded because it kept a memory', 'Ask what state a method keeps'],
          ['Harris sounded certain throughout', 'Confidence is not evidence']
        ] },
        { kind: 'p', text: 'An AI assistant asked to solve a maze may well produce a wall follower: it is short, it looks clever and it passes a quick test on a simple maze. The difference between a rule that is guaranteed only for some inputs and a method that is guaranteed for all is exactly what learners in West Molesey practise spotting when they vibe code. They state the job, study the reply, and then design a test the reply could fail. Exploring agents face the same choice between remembering and wandering. Agent projects wait until a learner\'s own Python holds up without help, which for most happens around sixth form or later in life, and Copilot Studio agent work is private tuition only. Two related pages: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents route for UK students</a>, and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Project Gutenberg, OpenStreetMap, postcodes.io and the ONS have no connection with Modern Age Coders. We rely on their open resources; the experiment is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'Paper mazes at seven, search algorithms at seventeen',
    intro: 'Where a learner starts depends on the trial lesson more than on age or school year.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Rules and steps', p: 'Mazes, sequences and instructions, worked through by hand first.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Games that work', p: 'Scratch games built with AI help, then a first move to Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Search in Python', p: 'Queues, grids, recursion and graph search, all tested.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Algorithms and agents', p: 'Algorithms properly, then exploring agents built on readable code.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Search and AI',
    h2: 'What is the wall follower, and why does it matter when AI writes the code?',
    intro: 'The wall follower is a maze-solving rule that keeps one hand on the same wall at every turn, and it matters because it is guaranteed only when the maze has no loops round the goal, a condition an AI will rarely mention when it hands you one.',
    p1: 'Across 1,000 loop-free mazes the right-hand rule reached the centre every time, but with 10 walls removed it succeeded in 594 of 1,000 and with 39 removed in 62, while breadth-first search never failed.',
    p2: 'Having seen a confident rule collapse, a learner asks what any code assumes about its input, whoever wrote it.',
    closer: 'For a West Molesey teenager, spotting the assumption behind a clever answer is what keeps them in charge of AI, and that skill is learned by writing and breaking code.',
    blogAnchor: 'is it still worth learning to code in 2026'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'What lessons look like for West Molesey learners',
    intro: 'Every class is a live video session. A laptop or desktop with a keyboard is required; tablets alone are not suited to programming.',
    cells: [
      { h3: 'Learner in control', p: 'The learner types, runs and fixes the code while the tutor asks why.' },
      { h3: 'Placed by the trial', p: 'We watch what the learner can do in the first lesson before recommending anything.' },
      { h3: 'Trial without payment', p: 'No fee and no card details are taken for the first lesson.' },
      { h3: 'Five to ten learners', p: 'Each group shares one level, with classmates from across the UK.' },
      { h3: 'About eight a month', p: 'Typically two a week in term, with Surrey holidays left free if you ask.' },
      { h3: 'Stable UK time', p: 'Clock changes are handled by the tutor; your lesson time stays the same.' }
    ],
    spec: { title: 'Why we teach online', p: 'Grouping learners by level works far better when the whole country is the pool. Live video means nobody travels and nobody waits for a local class to fill.' }
  },

  fees: {
    h2: 'Lesson fees in West Molesey',
    intro: 'West Molesey learners pay the rates we charge everyone outside India.',
    first: 'First lesson: free and full length, followed by a course recommendation.',
    group: 'Group tuition, roughly eight lessons per month.',
    private: 'One-to-one tuition, roughly eight lessons per month.',
    closer: 'We charge in US dollars and give no sterling price. There is no charge before the trial, and billing starts only once you have chosen a course and a weekly time. Holiday pauses, missed lessons and moving between group and private tuition are explained on the pricing page.'
  },

  reviewsH2: 'Surrey families and learners elsewhere in Britain, on Google',

  book: {
    h2: 'Request a free West Molesey trial',
    intro: 'Start with the learner\'s age or school year, plus a hobby. Trials vary: a paper maze to escape, an AI-assisted Scratch game, some opening Python, or a search written from nothing.',
    success: 'Thank you. Your West Molesey request is with us.'
  },

  faq: {
    h2: 'West Molesey FAQs',
    intro: 'The maze project, search algorithms, coding, vibe coding and the lesson arrangements.',
    items: [
      { q: 'What is the population of West Molesey?', a: 'The ONS built-up area named West Molesey had 47,150 usual residents at the 2021 census. It takes in East Molesey, Thames Ditton, Long Ditton, Hinchley Wood and Claygate. Elmbridge borough had 138,754.' },
      { q: 'Can West Molesey learners join these coding and AI classes?', a: 'They can. Lessons happen on live video, open to anyone from 6 to 67, whether in West Molesey, East Molesey, Thames Ditton or elsewhere in Elmbridge.' },
      { q: 'What is breadth-first search?', a: 'Breadth-first search explores a maze or network outward from the start, one step at a time, keeping a record of every place visited. It always finds a shortest route if one exists.' },
      { q: 'Does the right-hand rule always get you out of a maze?', a: 'Only if the maze has no loops around the goal. In our tests it reached the centre in all 1,000 loop-free mazes but in only 594 of 1,000 once ten walls were removed.' },
      { q: 'Where does Moulsey Lock come in?', a: 'Jerome\'s narrator hears Harris\'s maze story while the boat passes through Moulsey Lock, at the start of Chapter VII. The nearest postcode to Molesey Lock, KT8 9AW, is in the West Molesey built-up area.' },
      { q: 'What is vibe coding?', a: 'Vibe coding means describing what you want to an AI, then running, checking and improving the code it writes. We teach it next to typed Python.' },
      { q: 'At what age do learners build AI agents?', a: 'When their Python stands up without a tutor, typically around sixth form or in adulthood. Copilot Studio agents are one-to-one only.' },
      { q: 'Is this relevant to GCSE computer science?', a: 'Searching and algorithm design are on GCSE and A level specifications, and we teach them thoroughly. We make no promise about grades.' },
      { q: 'How much are the lessons?', a: 'Nothing for the opening lesson. After it, USD 100 per month buys a group place and USD 150 per month buys private teaching.' },
      { q: 'Do you pause for school holidays?', a: 'Yes. Send us the dates and those weeks are skipped.' }
    ]
  },

  next: {
    eyebrow: 'Around here',
    h2: 'More Surrey and Thames-side pages',
    html: 'Try <a class="cg-inline-link" href="/coding-classes-in-kingston-upon-thames-london">Kingston upon Thames</a>, <a class="cg-inline-link" href="/coding-classes-in-richmond-upon-thames-london">Richmond upon Thames</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-guildford">Guildford</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-woking">Woking</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> have the full list.',
    waLabel: 'Chat to us on WhatsApp'
  },

  footerHeading: 'West Molesey and Surrey',
  footerPlaces: [
    { href: '/coding-classes-in-surrey', label: 'Surrey' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wml .cg-hero-grid { align-items: center; gap: clamp(1.3rem, 3vw, 2.5rem); }
.cg-root.cg-wml .cg-hero h1 { font-weight: 720; letter-spacing: -0.018em; line-height: 1.1; }
.cg-root.cg-wml .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-wml .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; text-transform: uppercase; font-size: 0.84rem; }
.cg-root.cg-wml .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-wml .cg-table caption { font-weight: 580; text-align: left; font-size: 0.93rem; font-style: italic; }
.cg-root.cg-wml .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wml .cg-table th { font-weight: 690; letter-spacing: 0.02em; }
.cg-root.cg-wml .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-wml .cg-callout { border-left-width: 3px; border-radius: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Elmbridge (E07000207), Census 2021 TS001 usual residents 138,754. ONS 2021 BUA (published): West Molesey 47,150. English national curriculum, GCSE and A level. postcodes.io places whose closest postcode is in the West Molesey BUA: West Molesey, East Molesey (KT8), Thames Ditton, Weston Green (KT7), Long Ditton (KT6), Hinchley Wood, Claygate (KT10).',
    localProject: 'Project Gutenberg eBook 308 (Jerome, Three Men in a Boat, 1889): Harris\'s maze rule in Chapter VI; Chapter VII opens at Moulsey Lock. OSM Molesey Lock 51.4048, -0.3459; nearest postcode KT8 9AW (40 m) in the West Molesey BUA. 1,000 random 15 by 15 mazes (recursive backtracker, seed 20260930, 196 interior walls), start top middle, goal centre. Loop-free: right-hand wall follower 1,000 of 1,000, mean 140.2 steps vs breadth-first shortest 53.2, median ratio 2.36, worst 41.4. Walls removed 10 / 20 / 39: follower 594 / 304 / 62 of 1,000; left-hand identical; BFS 1,000 every time. Lesson family: maze solving, wall follower vs breadth-first search.',
    requiredMentions: [
      '47,150',
      'East Molesey',
      'Thames Ditton',
      'Hinchley Wood',
      'Claygate',
      'Moulsey Lock',
      'wall follower',
      '594 of 1,000',
      'KT8 9AW'
    ],
    sources: [
      { claim: 'Jerome K. Jerome (1889), Three Men in a Boat, Project Gutenberg eBook 308, Chapters VI and VII.', url: 'https://www.gutenberg.org/ebooks/308' },
      { claim: 'OpenStreetMap contributors, Molesey Lock, via the Overpass API, Open Database Licence.', url: 'https://www.openstreetmap.org/way/605722573' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups in Elmbridge.', url: 'https://api.postcodes.io/postcodes?lon=-0.3459492&lat=51.4048' }
    ],
    rejectedClaims: [
      'The layout or solvability of the real Hampton Court maze: not modelled and not claimed.',
      'That Hampton Court is in West Molesey: it is not claimed; only the lock is placed, by postcode.',
      'That Harris\'s rule is exactly a textbook wall follower in the novel: the page says the rule becomes one when written as code.',
      'That Esher or Hersham are inside the West Molesey built-up area: each has its own; left out.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
