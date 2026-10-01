'use strict';
// Leighton Buzzard (cg- town page, UK cluster Phase 10, towns band B, row 544). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: a route planner answers millions of
// questions on one road map; is it cheaper to search the map afresh each time, or to prepare the map once so every
// later search is tiny? (Contraction hierarchies: node contraction, shortcuts, witness search, upward search.)
// Data (read 1 October 2026): one Overpass query for highway ways motorway to service (links included) in 51.890 to
// 51.950 N, 0.712 to 0.612 W: 3,008 ways, 305.0 km. Graph (scratchpad lbz/ch.py): junctions and road ends only, chains
// merged into links, one-way rules ignored; largest connected part 4,689 junctions and ends, 5,040 links, 296.3 km.
// 1,000 random origin/destination pairs (seed 20261001). Dijkstra, stopping at the target: mean 2,399.8 junctions settled,
// median 2,467; 7.83 s for all 1,000 in our Python. Contraction hierarchy, order by edge difference (lazy updates),
// witness search capped at 500 settled: 3,552 shortcuts, built in 0.9 s; bidirectional upward search settles mean 44.0,
// median 44, max 74; 0.14 s for 1,000; 1,000 of 1,000 distances equal to Dijkstra's. Same method, random order: 30,434
// shortcuts, 727.5 s to build, mean 582.7 settled, 7.44 s for 1,000, still 1,000 of 1,000 equal. Mean trip 3.27 km,
// longest 9.74 km. Last node contracted: the junction joining Lake Street, Stanbridge Road and Leckbridge Court (A4012).
// Lesson family: contraction hierarchies. Screened: "contraction hierarch" 0 hits in content/ and dossiers; claimed.
// Place facts: Central Bedfordshire TS001 294,252. ONS 2021 BUA (published): Leighton Buzzard 42,735 (our OA sum 42,736;
// the figure is a requiredMention on the Dundalk page, so printed but not listed). postcodes.io: Linslade (LU7) has its
// nearest postcode in the Leighton Buzzard BUA; Heath and Reach, Billington and Stanbridge are separate BUAs; left out.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'LEIGHTON BUZZARD', label: 'Leighton Buzzard', blurb: 'AI and programming classes for Leighton Buzzard and Linslade, with a route-planning project that prepares a road map once so every later search is tiny.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-leighton-buzzard',
  code: 'lbz',
  accent: '#8A5827',
  accentRationale: 'Leighton Buzzard: a muted sandpit ochre (5.99:1 on white, 4.86:1 on the ledger beige), picked by hand at least 40 RGB steps from every Bedfordshire and East of England page',
  pageType: 'city',
  place: {
    name: 'Leighton Buzzard',
    eyebrow: 'Leighton Buzzard and Linslade, Central Bedfordshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Bedfordshire' },
      { type: 'AdministrativeArea', name: 'East of England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Bedfordshire', href: '/coding-classes-in-bedfordshire' },
    { label: 'Luton', href: '/best-coding-class-in-luton' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Leighton Buzzard, Bedfordshire',
  title: 'AI and Programming Classes in Leighton Buzzard | Ages 6 to 67',
  description: 'AI and programming classes for Leighton Buzzard and Linslade, taught live online to ages 6 to 67: Python, algorithms, vibe coding and AI agents. First lesson free.',
  ogDescription: 'AI and programming classes for Leighton Buzzard, with a project on preparing a road map so route searches become tiny.',
  twitterDescription: 'Leighton Buzzard AI and programming lessons, live on video for ages 6 to 67. The first one is free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Leighton Buzzard',
    description: 'Online programming, AI, Python and maths lessons for children, teenagers and adults in Leighton Buzzard, Linslade and Central Bedfordshire, built around algorithms run on local open data.'
  },

  h1: 'AI and programming classes in Leighton Buzzard',
  capsuleQ: 'Which are the best AI and programming classes for Leighton Buzzard?',
  capsule: 'Leighton Buzzard, with Linslade across the river, had 42,735 usual residents at the 2021 census by the ONS count for its built-up area, inside Central Bedfordshire\'s 294,252. Our tutors, who work from India, run live video lessons in programming, AI, Python, vibe coding and maths for anyone aged six to 67 in the town, either privately or in a class of five to ten learners matched by level. No course is recommended until a free trial lesson has happened. The Leighton Buzzard project takes the town\'s road map and asks a question every navigation service faces: search the whole map for each journey, or prepare it once so that each later search touches only a few dozen junctions. After the trial, group lessons are USD 100 a month and private lessons USD 150 a month.',
  lead: 'A sat nav does not think very hard about your journey. The heavy thinking happened earlier, when the map was prepared, and your question is answered by a search so small it barely notices the rest of the country. Learners rarely meet that idea, because textbooks teach the search and skip the preparation. Leighton Buzzard\'s own streets make a good place to try both and count the difference.',
  wa: 'Hello Modern Age Coders, we are in Leighton Buzzard and would like to book a free AI or programming lesson.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'AI and programming courses for Leighton Buzzard learners',
    intro: 'One suggestion for each stage. Whichever it is, it opens with a live lesson that costs nothing and needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Thinking before typing: maps, routes and instructions a computer could carry out.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children describe a Scratch game to an AI, then test and repair what it builds.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 17', note: 'Graphs, priority queues and shortest paths in Python, leading to the road-map project.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Students and adults', note: 'Algorithm design in depth, including preprocessing, then agents built on code you can explain.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The town',
      h2: 'Leighton Buzzard, Linslade and Central Bedfordshire',
      intro: 'Two census figures and one suburb name, each checked against its source.',
      body: [
        { kind: 'table', caption: 'Census 2021 usual residents (ONS)', head: ['Area', 'Residents'], rows: [
          ['Leighton Buzzard built-up area', '42,735'],
          ['Central Bedfordshire', '294,252']
        ] },
        { kind: 'p', text: 'The council figure covers Dunstable, Houghton Regis, Biggleswade, Flitwick, Sandy and many villages as well, so the smaller number is a part of the larger, not a rival to it. On postcodes.io, Linslade is the only named suburban area whose nearest postcode lies inside the Leighton Buzzard built-up area. Heath and Reach, Billington and Stanbridge are counted by the ONS as places of their own, so we do not list them as parts of the town. Local schools teach England\'s national curriculum; from Year 9 our lessons can run alongside GCSE and then A level computer science.' },
        { kind: 'callout', h3: 'Bedfordshire and beyond', p: 'Try <a class="cg-inline-link" href="/best-coding-class-in-luton">Luton</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bedford">Bedford</a>, <a class="cg-inline-link" href="/best-coding-class-in-milton-keynes">Milton Keynes</a> and the <a class="cg-inline-link" href="/coding-classes-in-bedfordshire">Bedfordshire county page</a>. We explain why reasoning comes before AI tools on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Leighton Buzzard project',
      h2: 'Prepare the map once, then every search is small',
      intro: 'One road network, a thousand journeys, and two ways of answering them.',
      body: [
        { kind: 'p', text: 'The learner downloads every road in a box around the town from OpenStreetMap in one query, from the A roads down to service roads: 3,008 pieces of road, 305.0 km in total. Keeping only junctions and road ends, and joining the stretches between them, leaves a network of 4,689 points and 5,040 links in its largest connected part. One-way rules are ignored to keep the first version simple. The program then picks 1,000 random pairs of points and finds the shortest road distance between each pair. The average trip is 3.27 km and the longest 9.74 km.' },
        { kind: 'p', text: 'Dijkstra\'s algorithm, stopping the moment it reaches the destination, has to settle 2,399.8 junctions on average for each journey, about half the whole map, because it spreads outwards in every direction until it arrives. Then the learner builds a contraction hierarchy. Junctions are removed one at a time, least important first. Whenever removing one would break the shortest route between two of its neighbours, a shortcut is added between them, but only after a small local search, the witness search, fails to find another route that is just as short. At query time, the search runs from both ends and only ever climbs towards more important junctions.' },
        { kind: 'table', caption: '1,000 random journeys on the Leighton Buzzard road network, our Python run', head: ['Method', 'Shortcuts added', 'Preparation', 'Junctions settled per journey', 'Distances correct'], rows: [
          ['Dijkstra from scratch', 'none', 'none', '2,399.8 on average', 'reference'],
          ['Hierarchy, careful order', '3,552', '0.9 seconds', '44.0 on average, 74 at most', '1,000 of 1,000'],
          ['Hierarchy, random order', '30,434', '727.5 seconds', '582.7 on average', '1,000 of 1,000']
        ] },
        { kind: 'p', text: 'With a careful order, which removes first the junctions that need the fewest new shortcuts, each search settles 44 junctions instead of about 2,400, and every one of the 1,000 answers matches Dijkstra to the metre. The same method with the junctions removed in random order is still correct, but it adds 30,434 shortcuts, takes over twelve minutes to prepare, and its searches settle 582.7 junctions. The algorithm was the same both times; only the order changed. The last junction to be removed, and so the most important one by this measure, joins Lake Street, Stanbridge Road and Leckbridge Court.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'On a paper map, remove a village and draw the direct lines its roads imply between neighbours.' },
          { h3: 'Ages 11 to 15', p: 'Write Dijkstra in Python with a priority queue and count how many places it visits.' },
          { h3: 'Ages 15 and up', p: 'Build the hierarchy, then change the contraction order and measure what it costs.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Roads are from OpenStreetMap contributors under the Open Database Licence, read with a single Overpass query on 1 October 2026. Contraction hierarchies come from the work of Robert Geisberger and colleagues, published in 2008. The network, the shortcut counts and every timing are ours, from ordinary Python on one computer, and one-way streets were deliberately left out.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Programming with AI',
      h2: 'What the road map teaches about AI systems',
      intro: 'Much of what feels instant in AI was paid for in advance.',
      body: [
        { kind: 'table', caption: 'From Leighton Buzzard roads to AI tools', head: ['On the road map', 'In AI work'], rows: [
          ['0.9 seconds of preparation made every search about 54 times smaller', 'Indexing documents once is what makes fast retrieval possible'],
          ['A random order still gave right answers, slowly', 'Correct is not the same as usable; measure cost as well'],
          ['Shortcuts were added only when no witness route existed', 'Check a claim before storing it for reuse'],
          ['1,000 answers were compared with plain Dijkstra', 'Keep a slow, trusted method to test the fast one against'],
          ['One-way streets were left out on purpose', 'Write down what a model ignores']
        ] },
        { kind: 'p', text: 'Leighton Buzzard learners use vibe coding to get a first version of the hierarchy from an AI, then do the part that teaches: run it against plain Dijkstra, count the settled junctions and find out whether the AI\'s contraction order was a good one. Agents that plan routes or look up documents depend on the same prepare-once, search-small idea. Agent projects come once someone programs confidently alone, for most people around sixth form or later, and our Copilot Studio agent lessons are one-to-one. Two related pages explain <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">why every line gets read before it is trusted</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">how our agent-building route is laid out</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the ONS and postcodes.io publish the data used here. None of them is linked to Modern Age Coders or has checked this analysis, which is entirely ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'From paper maps at seven to route planners at seventeen',
    intro: 'The trial lesson sets the starting point; school year is only a rough guide.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Steps and routes', p: 'Instructions, patterns and paths, often with pencil and paper first.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'First programs', p: 'Scratch built with an AI, then first steps in Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Graphs in Python', p: 'Priority queues, shortest paths and the hierarchy project.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Algorithms, then agents', p: 'Deeper algorithm design, then agents whose code you understand.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Maps and AI',
    h2: 'What is a contraction hierarchy, and what does it show about fast AI answers?',
    intro: 'A contraction hierarchy is a road map prepared in advance by removing junctions in order of importance and adding shortcuts, so that a later route search only climbs towards important junctions; it shows that fast answers usually rest on slow, careful preparation.',
    p1: 'On the Leighton Buzzard network, 3,552 shortcuts cut each search from about 2,400 settled junctions to 44, with all 1,000 test distances unchanged, while a random order needed 30,434 shortcuts.',
    p2: 'A learner who has built one asks of any quick AI system what was prepared beforehand, and how anyone checked it.',
    closer: 'Leighton Buzzard teenagers who can explain that trade-off in their own code are ready to direct AI tools rather than trust them blindly, and that starts with writing programs.',
    blogAnchor: 'why writing your own code still counts in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'How Leighton Buzzard lessons run',
    intro: 'Every lesson is live on video. Bring a laptop or desktop with a proper keyboard; tablets and phones make programming too awkward.',
    cells: [
      { h3: 'Hands on the keys', p: 'The learner types and runs the code; the tutor asks why at each step.' },
      { h3: 'Placement by trial', p: 'The trial shows the level, and only then do we propose a course.' },
      { h3: 'Free first lesson', p: 'Trying costs nothing and we never ask for card numbers first.' },
      { h3: 'Groups of five to ten', p: 'Classmates share a level and log in from all over Britain.' },
      { h3: 'About eight a month', p: 'Two a week is typical in term; holiday weeks are simply left out.' },
      { h3: 'Fixed UK time', p: 'Clock changes are our problem, so your lesson hour stays put.' }
    ],
    spec: { title: 'Why online works here', p: 'A group of learners at exactly one level is easier to gather from the whole country than from one town, and nobody has to travel for it.' }
  },

  fees: {
    h2: 'Fees for Leighton Buzzard learners',
    intro: 'Leighton Buzzard families are charged the same rates as every learner we teach outside India.',
    first: 'First lesson: free and full length, ending with a course suggestion.',
    group: 'Group class, about eight lessons a month.',
    private: 'Private one-to-one lessons, about eight a month.',
    closer: 'We price in US dollars and do not quote in pounds. Nothing is charged for the trial, and billing starts only once a course and a regular time are agreed. Holiday breaks, missed lessons and switching between group and private are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from Bedfordshire families and learners elsewhere',

  book: {
    h2: 'Book a free Leighton Buzzard lesson',
    intro: 'Tell us roughly how old the learner is, or their school year, plus one thing they like doing. A trial might mean solving a route puzzle on paper, asking an AI to help build a Scratch game, writing some first Python, or searching a real Leighton Buzzard map.',
    success: 'Thank you. Your Leighton Buzzard request is with us.'
  },

  faq: {
    h2: 'Leighton Buzzard questions answered',
    intro: 'The road-map project, programming, AI and the practical side.',
    items: [
      { q: 'How many people live in Leighton Buzzard?', a: 'The ONS counted 42,735 usual residents in the Leighton Buzzard built-up area, which includes Linslade, at the 2021 census. Central Bedfordshire had 294,252.' },
      { q: 'Are AI and programming classes available in Leighton Buzzard and Linslade?', a: 'Yes. Learners aged 6 to 67 anywhere in Leighton Buzzard, Linslade or the rest of Central Bedfordshire can join, because every lesson is live on video.' },
      { q: 'What is a shortcut in a contraction hierarchy?', a: 'An extra link added between two neighbours of a removed junction, with the length of the route through it, so that removing the junction never makes a shortest route longer.' },
      { q: 'What is a witness search?', a: 'A small search that looks for another route between two neighbours that is no longer than the route through the junction being removed. If it finds one, no shortcut is needed.' },
      { q: 'What did the Leighton Buzzard project find?', a: 'On 1,000 random journeys, plain Dijkstra settled about 2,400 junctions each. The prepared map settled 44 on average after adding 3,552 shortcuts, and all 1,000 distances matched.' },
      { q: 'What is vibe coding?', a: 'An AI is told in plain words what program is wanted, and the learner then checks, runs and corrects every line it produces. It sits beside Python written by hand.' },
      { q: 'When do learners build AI agents?', a: 'Once they can write Python unaided, usually in the later teens or as adults. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Does this help with GCSE computer science?', a: 'Searching, graphs and how fast an algorithm runs all feature in GCSE and A level computer science, and this project exercises each one. Grades are never promised.' },
      { q: 'How much are lessons?', a: 'Trial free; from then on, USD 100 monthly for a group place or USD 150 monthly for private tuition.' },
      { q: 'Can lessons pause for school holidays?', a: 'Yes. Send us the dates and those weeks are skipped.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More around Bedfordshire',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-luton">Luton</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bedford">Bedford</a>, <a class="cg-inline-link" href="/best-coding-class-in-milton-keynes">Milton Keynes</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-aylesbury">Aylesbury</a>. For anywhere else, begin from <a class="cg-inline-link" href="/coding-classes-in-bedfordshire">our county guide</a>, <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">the regional overview</a> or <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">the national index</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Leighton Buzzard and Bedfordshire',
  footerPlaces: [
    { href: '/coding-classes-in-bedfordshire', label: 'Bedfordshire' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-lbz .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-lbz .cg-hero h1 { font-weight: 780; letter-spacing: -0.025em; line-height: 1.07; }
.cg-root.cg-lbz .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-lbz .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-lbz .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.018em; }
.cg-root.cg-lbz .cg-table caption { font-weight: 600; text-align: left; font-size: 0.92rem; }
.cg-root.cg-lbz .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lbz .cg-table th { font-weight: 720; }
.cg-root.cg-lbz .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-lbz .cg-callout { border-radius: 4px; border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Central Bedfordshire (E06000056), Census 2021 TS001 usual residents 294,252. ONS 2021 BUA (published): Leighton Buzzard 42,735. English national curriculum, GCSE and A level. postcodes.io: Linslade (LU7) nearest postcode in the Leighton Buzzard BUA; Heath and Reach, Billington and Stanbridge are separate BUAs.',
    localProject: 'Contraction hierarchies on the Leighton Buzzard road network. One Overpass query, highway motorway to service in 51.890 to 51.950 N, 0.712 to 0.612 W: 3,008 ways, 305.0 km; largest connected part 4,689 junctions and ends, 5,040 links, 296.3 km; one-way ignored. 1,000 random pairs (seed 20261001), mean trip 3.27 km, longest 9.74 km. Dijkstra to target: mean 2,399.8 settled. Edge-difference order: 3,552 shortcuts, 0.9 s build, mean 44.0 settled (max 74), 1,000 of 1,000 equal. Random order: 30,434 shortcuts, 727.5 s, mean 582.7 settled. Last contracted: Lake Street, Stanbridge Road and Leckbridge Court junction.',
    requiredMentions: [
      'Linslade',
      'contraction hierarchy',
      '4,689 points',
      '3,552 shortcuts',
      '2,399.8 junctions',
      '30,434 shortcuts',
      'witness search',
      'Stanbridge Road',
      'Leckbridge Court'
    ],
    sources: [
      { claim: 'OpenStreetMap contributors, road ways via the Overpass API, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'Geisberger R., Sanders P., Schultes D. and Delling D. (2008), Contraction hierarchies: faster and simpler hierarchical routing in road networks, WEA 2008, Lecture Notes in Computer Science 5038, 319 to 333.', url: 'https://doi.org/10.1007/978-3-540-68552-4_24' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations and output-area lookup.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for Central Bedfordshire.', url: 'https://api.postcodes.io/places?q=Linslade' }
    ],
    rejectedClaims: [
      'One-way streets: ignored in this version; stated on the page.',
      'That the Lake Street junction is the busiest in town: not claimed; it is only the last node contracted under our ordering.',
      'Journey times in minutes: none given; only distances and junction counts.',
      'Timings as general facts: they are from our Python on one computer and are presented that way.',
      'Heath and Reach, Billington and Stanbridge as parts of the town: separate ONS built-up areas; left out.',
      'Sterling prices: none.'
    ]
  }
};
