'use strict';
// Tipton (cg- town page, UK cluster Phase 10, towns band B, row 524). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: a route planner that returns "the next best
// route" often returns the same route with a five-metre wiggle; when does a second route count as a real alternative?
// (Yen's k shortest loopless paths, overlap with the first route.)
// Data (read 30 September 2026): one Overpass query for walkable highway ways (trunk to footway, paths, cycleways,
// steps, service, track; access and foot not private or no) in 52.511 to 52.555 N, 2.083 to 2.030 W, plus railway
// stations: 6,349 ways. Graph (scratchpad tpn/yen.py): largest connected part 9,626 junctions and ends, 11,974 links,
// 482.3 km; 25.1 km of it on ways tagged towpath=yes. Tipton station (52.530527, -2.0657314) and Dudley Port station
// (52.524461, -2.0492538) from OSM, snapped 7.8 m and 6.9 m; straight line 1,303 m. networkx shortest_simple_paths
// (Yen), 200 routes: 1st 1,497 m (1,112 m towpath; Station Drive the only named street); 2nd 1,502 m (+0.34%, 98.8% of
// its length shared with the 1st); 3rd 1,562 m (+4.38%, 30.3% shared); 4 routes within 5%; routes 1 to 8 each use at
// least 1,098 m of towpath; 9th 1,624 m (+8.48%, 26.8% shared, 68 m towpath, first to use Owen Street and Alexandra
// Road); 200th 1,764 m (+17.84%).
// Lesson family: Yen's k shortest loopless paths. Screened: "yen's" 0 hits in content/; claimed in claims.txt.
// Portsmouth = min cut and graph bridges; Bloxwich = friendship paradox; Cumbernauld = circuity; different families.
// Place facts: Sandwell TS001 341,832. ONS 2021 BUA (published): Tipton 47,200. postcodes.io suburban areas whose closest
// postcode is in the Tipton BUA: Ocker Hill, Princes End, Tipton Green, Dudley Port, Horseley Heath, Toll End, Burnt
// Tree (all DY4). Tividale's closest postcode is in Rowley Regis; not listed.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'TIPTON', label: 'Tipton', blurb: 'AI and programming classes for Tipton, with a route-finding project that asks when a second route is really a different one.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-tipton',
  code: 'tpn',
  accent: '#084C15',
  accentRationale: 'Tipton: a dark towpath green (10.22:1 contrast), picked by hand and checked for distance from every accent in use and from the other Sandwell pages',
  pageType: 'city',
  place: {
    name: 'Tipton',
    eyebrow: 'Tipton, Sandwell, West Midlands',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'West Midlands', href: '/coding-classes-in-the-west-midlands' },
    { label: 'West Bromwich', href: '/vibe-coding-and-ai-agents-classes-in-west-bromwich' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Tipton, West Midlands',
  title: 'AI and Programming Classes in Tipton, Sandwell | Ages 6 to 67',
  description: 'Live online AI and programming classes for Tipton, Ocker Hill, Princes End and Dudley Port, ages 6 to 67, with Python, vibe coding and agents. Try one free lesson.',
  ogDescription: 'AI and programming classes for Tipton, with a project on how route planners find a second route.',
  twitterDescription: 'Tipton AI and programming lessons, live online for ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Tipton',
    description: 'Online programming, AI, Python and maths lessons for children, teenagers and adults in Tipton and the borough of Sandwell, built around algorithms tested on local open data.'
  },

  h1: 'AI and programming classes in Tipton',
  capsuleQ: 'Which are the best AI and programming classes for Tipton?',
  capsule: 'In the 2021 census the ONS counted 47,200 usual residents in the Tipton built-up area and 341,832 in the borough of Sandwell around it. Ocker Hill, Princes End, Tipton Green, Dudley Port, Horseley Heath, Toll End and Burnt Tree are gazetteer suburbs that sit inside the Tipton built-up area. Modern Age Coders teaches programming, AI, Python, vibe coding and maths live online to learners there from six to 67. The tutors work from India, one-to-one or with groups of five to ten learners at one level. Lessons are built on algorithms the learner runs on real data. A free first lesson comes before any course suggestion. The Tipton project asks a route planner for the second, third and ninth shortest walks between Tipton and Dudley Port stations, and finds out how different those alternatives really are. Group classes then cost USD 100 a month and private ones USD 150 a month.',
  lead: 'Ask a map app for alternatives and it shows two or three routes that look clearly different. Ask a textbook algorithm for the second shortest route and you often get the first one again with a tiny detour, five metres longer, round the other side of a bollard. The algorithm is not wrong. Second shortest and genuinely different are separate questions, and a good program has to know which one it is answering. Tipton, with its network of streets, footpaths and canal towpaths, turns that distinction into something a learner can count.',
  wa: 'Hello Modern Age Coders, could we arrange a free AI or programming trial lesson? We are in Tipton.',

  picks: {
    eyebrow: 'Course suggestions',
    h2: 'Programming and AI courses for Tipton learners',
    intro: 'A first suggestion for each age group. Every course begins with a free live lesson and no card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think before coding: routes, choices and step-by-step plans a computer could follow.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: build Scratch games with an AI and test every part.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 17', note: 'Graphs, shortest paths and search in Python, including the Tipton route project.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Students and adults', note: 'Algorithms in depth, from Dijkstra to Yen, then agents that plan with them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Local picture',
      h2: 'Tipton, Ocker Hill, Princes End and Dudley Port',
      intro: 'Census figures for the town and its borough, and the suburb names the gazetteer places inside it.',
      body: [
        { kind: 'table', caption: 'Census 2021, usual residents (ONS)', head: ['Area', 'Residents'], rows: [
          ['Tipton built-up area', '47,200'],
          ['Sandwell borough', '341,832']
        ] },
        { kind: 'p', text: 'The borough total also counts West Bromwich, Smethwick, Oldbury, Rowley Regis and Wednesbury, so the two figures are not parts of one sum. postcodes.io lists Ocker Hill, Princes End, Tipton Green, Dudley Port, Horseley Heath, Toll End and Burnt Tree as suburban areas in the DY4 postcode district, each with its nearest postcode inside the Tipton built-up area. Tividale is left off: its nearest postcode falls in the Rowley Regis built-up area. Tipton schools teach the national curriculum for England. Tell us which year, anywhere between Year 2 and Year 13, and lessons can sit alongside GCSE or A level computer science.' },
        { kind: 'callout', h3: 'Black Country pages', p: 'Look at <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-west-bromwich">West Bromwich</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-smethwick">Smethwick</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-dudley">Dudley</a> and the <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">West Midlands county page</a>. Our view on thinking skills before AI tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Tipton project',
      h2: 'The second shortest route, and the first different one',
      intro: 'Two railway stations, 482 km of walkable paths, and two hundred routes in order of length.',
      body: [
        { kind: 'p', text: 'The learner downloads every walkable way in a box around Tipton from OpenStreetMap with a single query: streets, footpaths, cycleways, steps and service roads, leaving out anything marked private. Joined at their junctions they form a network of 9,626 points and 11,974 links covering 482.3 km, of which 25.1 km is tagged as canal towpath. The start and end are the two stations OpenStreetMap names Tipton and Dudley Port. As the crow flies they are 1,303 m apart.' },
        { kind: 'p', text: 'Dijkstra\'s algorithm finds the shortest walk: 1,497 m, with 1,112 m of it on towpath and Station Drive the only named street. Then the learner runs Yen\'s algorithm, published by Jin Y. Yen in 1971, which lists loopless routes in order of length: take the shortest, then for each point along it, block the next step and search again from there. Python\'s networkx library has it built in as shortest_simple_paths. The learner asks for 200 routes and, for each one, measures how much of its length it shares with the first.' },
        { kind: 'table', caption: 'Walking routes from Tipton station to Dudley Port station, our networkx run', head: ['Route', 'Length', 'Longer than route 1', 'Shared with route 1'], rows: [
          ['1', '1,497 m', 'n/a', '100%'],
          ['2', '1,502 m', '0.34%', '98.8%'],
          ['3', '1,562 m', '4.38%', '30.3%'],
          ['9', '1,624 m', '8.48%', '26.8%'],
          ['200', '1,764 m', '17.84%', 'not measured']
        ] },
        { kind: 'p', text: 'Route 2 is route 1 with a swap of 19 m of path for 14 m, which no walker would call a different route. Route 3 is the first to share less than half its length with route 1, and it is only 4.38% longer. Yet routes 1 to 8 all spend at least 1,098 m on towpath, so a person would describe them as the same walk along the canal with variations. Route 9 is the first to use Owen Street and Alexandra Road, with just 68 m of towpath, and it costs 8.48% more distance. Only four of the 200 routes came within 5% of the shortest.' },
        { kind: 'p', text: 'So "the second route" has at least three honest answers: the second shortest (route 2), the shortest that overlaps route 1 by no more than half (route 3), and the shortest that a person would describe differently (route 9). A program must be told which one is wanted, as a number such as a maximum overlap, or it will return route 2.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'On a squared street map, find three ways between two points and colour the parts they share.' },
          { h3: 'Ages 11 to 15', p: 'Build a small network in Python as a dictionary and code Dijkstra with a priority queue.' },
          { h3: 'Ages 15 and up', p: 'Run Yen\'s algorithm on the Tipton network, then write an overlap filter and try thresholds.' }
        ] },
        { kind: 'callout', h3: 'Data and credits', p: 'Paths, towpath tags and station positions are from OpenStreetMap contributors under the Open Database Licence, fetched with one Overpass query. Yen\'s method is from his 1971 paper in Management Science. The network building, the route counts and the overlap figures are ours.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Programming with AI',
      h2: 'What counting route overlap teaches about AI answers',
      intro: 'A list of alternatives is only useful if the alternatives differ.',
      body: [
        { kind: 'table', caption: 'From Tipton walks to working with an AI', head: ['What the routes showed', 'What to do with AI output'], rows: [
          ['Route 2 was route 1 plus a 19 m swap', 'Check whether several answers are really one answer'],
          ['Route 3 differed on paper and still followed the canal', 'Decide what "different" means before measuring it'],
          ['Only four routes were within 5%', 'Ask how much worse the alternatives are'],
          ['A threshold picked route 3 instead of route 2', 'Turn a vague wish into a number the code can test'],
          ['Every figure came from our own run', 'Measure rather than accept']
        ] },
        { kind: 'p', text: 'Language models produce alternatives in much the same way: ask for five options and you may receive one idea phrased five ways. Tipton learners practise vibe coding by asking an AI for code, then reading it, running it, and checking whether its answers are distinct or merely reworded. The same skill decides whether an AI agent that proposes plans is useful. Building agents comes after a learner has shown they can write Python without a helping hand, which for most is in sixth form or adulthood; Copilot Studio agent lessons are private only. Read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and the <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents route for UK students</a>.' },
        { kind: 'p', text: 'Modern Age Coders is not connected with OpenStreetMap, the Office for National Statistics or postcodes.io. Their open data made the project possible; the analysis is our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'From map puzzles at seven to graph algorithms at seventeen',
    intro: 'A learner\'s starting point comes from the trial lesson, with school year as a rough guide.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Thinking in steps', p: 'Routes, patterns and instructions, often on paper first.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'First programs', p: 'Scratch built with AI help, then first lines of Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Algorithms in Python', p: 'Graphs, searching and shortest paths, tested on real maps.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Algorithms, then agents', p: 'Deeper algorithms, then agents that plan with code you understand.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Routes and AI',
    h2: 'What is Yen\'s algorithm, and why does it matter when AI suggests alternatives?',
    intro: 'Yen\'s algorithm lists the shortest loopless routes through a network in order of length, and it matters because the next shortest answer is often a near copy of the first, which is exactly the trap an AI falls into when asked for options.',
    p1: 'Between Tipton and Dudley Port stations, route 2 was 1,502 m and shared 98.8% of its length with route 1, route 3 shared 30.3%, and route 9 was the first to leave the towpaths for Owen Street.',
    p2: 'A learner who has measured overlap knows to ask of any list of options, from an algorithm or an AI, how different the options really are.',
    closer: 'For Tipton teenagers, being able to put a number on "different" is part of directing AI rather than following it, and that ability grows from writing code.',
    blogAnchor: 'is learning to code still worth it in 2026'
  },

  delivery: {
    eyebrow: 'Lesson format',
    h2: 'How Tipton lessons are run',
    intro: 'All teaching happens live over video. The learner needs a computer with a keyboard; a phone or tablet is not enough for programming.',
    cells: [
      { h3: 'Learner at the keyboard', p: 'The learner writes and runs the code; the tutor questions each decision.' },
      { h3: 'Level first', p: 'The free lesson shows us what the learner knows before any course is named.' },
      { h3: 'Nothing to pay upfront', p: 'The first lesson needs no payment and no card.' },
      { h3: 'Five to ten per group', p: 'Groups are formed by stage, with classmates joining from around the UK.' },
      { h3: 'Roughly eight a month', p: 'Two lessons a week during term, with Sandwell holidays skipped on request.' },
      { h3: 'Same slot all year', p: 'Tutors absorb the clock changes so your UK lesson time does not move.' }
    ],
    spec: { title: 'Why online', p: 'A class of learners at exactly the same stage is easier to form from the whole country than from one town. Live video makes that possible without travel.' }
  },

  fees: {
    h2: 'Fees for Tipton learners',
    intro: 'Tipton learners pay our standard rates for students outside India.',
    first: 'First lesson: free, full length, ending with a suggested course.',
    group: 'Group class, about eight lessons each month.',
    private: 'Private one-to-one lessons, about eight each month.',
    closer: 'Fees are set in US dollars and we do not quote them in pounds. The trial carries no charge, and billing begins only when you have agreed a course and a regular slot. The pricing page explains holiday breaks, missed lessons and changing between group and private.'
  },

  reviewsH2: 'Sandwell families and learners around Britain, reviewing us on Google',

  book: {
    h2: 'Arrange a free Tipton lesson',
    intro: 'Share the learner\'s age or year and what interests them. A trial might be a paper route puzzle, a Scratch game made with AI, first steps in Python, or a shortest path on a real map.',
    success: 'Thank you. Your Tipton request has reached us.'
  },

  faq: {
    h2: 'Tipton questions answered',
    intro: 'Routes, Yen\'s algorithm, programming, vibe coding and practical details.',
    items: [
      { q: 'What is the population of Tipton?', a: 'The ONS gives 47,200 usual residents for the Tipton built-up area at the 2021 census. Sandwell borough as a whole had 341,832.' },
      { q: 'Are there AI and programming classes for Tipton?', a: 'Yes. Anyone from 6 to 67 in Tipton, Ocker Hill, Princes End, Dudley Port or elsewhere in Sandwell can join, since every lesson is a live video call.' },
      { q: 'What is a loopless path?', a: 'A route through a network that never visits the same point twice. Yen\'s algorithm lists only loopless routes, because a route with a loop is never needed as an alternative.' },
      { q: 'What did the Tipton project measure?', a: 'Between Tipton and Dudley Port stations the shortest walk was 1,497 m. Route 2 was 1,502 m and 98.8% the same; route 3 was 1,562 m and shared 30.3%; route 9 was the first on Owen Street.' },
      { q: 'Why is the second shortest route often useless?', a: 'Because the cheapest change to a shortest route is usually a tiny detour. To get a real alternative you must also limit how much of the first route it may reuse.' },
      { q: 'What is vibe coding?', a: 'Vibe coding is describing the program you want to an AI, then reading, running and fixing its code. We teach it alongside hand-written Python.' },
      { q: 'When are AI agents taught?', a: 'After a learner can write Python on their own, usually in the later teens or as an adult. Copilot Studio agents are one-to-one only.' },
      { q: 'Does this support GCSE computer science?', a: 'Graphs, searching and algorithm design turn up in GCSE and A level specifications, and the route project covers all three. Grades are never promised.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free, then USD 100 a month for group lessons or USD 150 a month one-to-one.' },
      { q: 'Can we take a break for school holidays?', a: 'Yes. Tell us the weeks and we leave them out.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More West Midlands pages',
    html: 'Visit <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-west-bromwich">West Bromwich</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-smethwick">Smethwick</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-dudley">Dudley</a> and <a class="cg-inline-link" href="/best-coding-class-in-wolverhampton">Wolverhampton</a>. The <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">West Midlands page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> link to the rest.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Tipton and the West Midlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-west-midlands', label: 'West Midlands' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-tpn .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.4vw, 2rem); }
.cg-root.cg-tpn .cg-hero h1 { font-weight: 800; letter-spacing: -0.027em; line-height: 1.06; }
.cg-root.cg-tpn .cg-capsule { background: color-mix(in srgb, var(--cg-accent) 6%, transparent); padding: 0.9rem 1rem; border-radius: 6px; }
.cg-root.cg-tpn .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-tpn .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.02em; }
.cg-root.cg-tpn .cg-table caption { font-weight: 560; text-align: left; font-size: 0.9rem; }
.cg-root.cg-tpn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tpn .cg-table th { font-weight: 730; letter-spacing: 0.01em; }
.cg-root.cg-tpn .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-tpn .cg-callout { border-left-width: 4px; border-radius: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Sandwell (E08000028), Census 2021 TS001 usual residents 341,832. ONS 2021 BUA (published): Tipton 47,200. English national curriculum, GCSE and A level. postcodes.io suburban areas whose closest postcode is in the Tipton BUA: Ocker Hill, Princes End, Tipton Green, Dudley Port, Horseley Heath, Toll End, Burnt Tree (DY4).',
    localProject: 'One Overpass query, walkable highway ways in 52.511 to 52.555 N, 2.083 to 2.030 W, plus stations: 6,349 ways; largest connected part 9,626 nodes, 11,974 links, 482.3 km (25.1 km towpath=yes). Tipton to Dudley Port stations, straight line 1,303 m. Yen (networkx shortest_simple_paths), 200 routes: 1st 1,497 m (1,112 m towpath); 2nd 1,502 m (+0.34%, 98.8% shared); 3rd 1,562 m (+4.38%, 30.3% shared); 4 within 5%; routes 1 to 8 at least 1,098 m towpath; 9th 1,624 m (+8.48%, 26.8% shared, first on Owen Street and Alexandra Road); 200th 1,764 m (+17.84%). Lesson family: Yen\'s k shortest loopless paths and route overlap.',
    requiredMentions: [
      '47,200',
      'Ocker Hill',
      'Princes End',
      'Tipton Green',
      'Yen\'s algorithm',
      '1,497 m',
      '98.8%',
      '30.3%',
      'Alexandra Road'
    ],
    sources: [
      { claim: 'OpenStreetMap contributors, walkable ways, towpath tags and railway stations via the Overpass API, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'Yen J. Y. (1971), Finding the k shortest loopless paths in a network, Management Science 17(11), 712 to 716.', url: 'https://doi.org/10.1287/mnsc.17.11.712' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations and output area centroids.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for suburban areas in Sandwell.', url: 'https://api.postcodes.io/places?q=Ocker%20Hill' }
    ],
    rejectedClaims: [
      'Names of the canals the towpaths follow: OpenStreetMap tags were read only as towpath=yes; no canal names are given.',
      'That routes 1 and 3 are on opposite banks: not checked; only shared length is stated.',
      'Walking times: none given, only distances.',
      'That Tividale is inside the Tipton built-up area: its closest postcode is in Rowley Regis; left out.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
