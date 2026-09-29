'use strict';
// Musselburgh (cg- town page, UK cluster Phase 8, towns band A, row 423). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how do you work out the distance between every
// pair of places at once? (all-pairs shortest paths with the Floyd-Warshall algorithm, vectorised in numpy, checked against
// repeated Dijkstra, and turned into a road distance chart).
// Data (read 29 September 2026): OpenStreetMap API 0.6 over bbox -3.100,55.925,-3.010,55.955 (6 tiles, ODbL). Public roads
// (trunk to living street and links; no service roads, no private ways) inside the box, largest connected piece: 120.5 km;
// merged at bends to 1,124 junctions and 1,286 road segments. Place points from postcodes.io (East Lothian, EH21),
// snapped to the nearest junction (2 to 29 m).
// Our run (scratchpad msb/fw.py): Floyd-Warshall in numpy, 1,124 passes over a 1,124 by 1,124 table (about 1.42 billion
// elementary updates), 10.1 s on our laptop; Dijkstra from every junction (networkx) estimated at 4.2 s; results agree.
// Average road distance between two junctions 3.21 km; longest shortest route (diameter) 10.26 km. Place chart (km):
// Fisherrow-Stoneyhill 1.3; Monktonhall-Stoneybank 0.4; Levenhall-Pinkie Braes 0.8; Wallyford-Monktonhall 5.1;
// Wallyford-Stoneyhill 5.1; Inveresk-Monktonhall 3.2 by road against 1.09 km straight (2.9 times, the largest ratio);
// Pinkie-Pinkie Braes 1.10 km by road against 1.00 km straight (smallest ratio); median ratio 1.5.
// Lesson family: all-pairs shortest paths, Floyd-Warshall dynamic programming, vectorisation, distance tables. Screened:
// "Floyd-Warshall", "all-pairs shortest", "mileage chart" 0 hits in content/uk, nl, ie. Cumbernauld owns circuity for random
// pairs; Irvine isochrones; here the object is the complete table and the algorithm that fills it.
// Place facts: NRS mid-2020 localities: Musselburgh 21,100 (largest in East Lothian; Tranent 11,910 next, per the East
// Lothian page). postcodes.io (East Lothian, EH21) suburban areas: Fisherrow, Inveresk, Levenhall, Monktonhall, Pinkie,
// Pinkie Braes, Stoneybank, Stoneyhill; villages Wallyford, Whitecraig, Old Craighall.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'MUSSELBURGH', label: 'Musselburgh', blurb: 'Online coding and Python classes for Musselburgh, with a project that fills in a complete road distance chart for the town using the Floyd-Warshall algorithm.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-musselburgh',
  code: 'msb',
  accent: '#8A4C8A',
  accentRationale: 'Musselburgh: a soft heather violet (4.86:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Musselburgh',
    eyebrow: 'Musselburgh, East Lothian, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'East Lothian' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'East Lothian', href: '/coding-classes-in-east-lothian' },
    { label: 'Edinburgh', href: '/best-coding-class-in-edinburgh' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Musselburgh, Scotland',
  title: 'Online Coding and Python Classes in Musselburgh | AI, 6 to 67',
  description: 'Live online coding, Python, AI and vibe coding lessons for Musselburgh, Fisherrow, Inveresk and Wallyford learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Online coding and Python classes for Musselburgh, with a project that computes every road distance in town at once using Floyd-Warshall.',
  twitterDescription: 'Musselburgh online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Musselburgh',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Musselburgh and East Lothian, taught live with algorithmic thinking first.'
  },

  h1: 'Online coding and Python classes in Musselburgh',
  capsuleQ: 'Which are the best online coding and Python classes in Musselburgh?',
  capsule: 'East Lothian\'s largest locality is Musselburgh, put at 21,100 residents by National Records of Scotland for mid-2020. Fisherrow, Inveresk, Levenhall, Monktonhall, Stoneybank and Pinkie Braes are suburbs on record in the EH21 district, and Wallyford and Whitecraig are listed there as villages. Six-year-olds through to adults of 67 study coding, Python, AI, vibe coding and maths with an India-based tutor on a live video call, alone or with a handful of classmates at the same stage. We start from algorithmic thinking, so a learner knows what a program is doing before trusting its output. There is no charge for the first lesson, and we end it by naming a course. The Musselburgh project turns 120.5 km of mapped roads into a single table giving the shortest drive between every pair of 1,124 junctions. Afterwards a place in a class is USD 100 a month, and private tuition USD 150 a month.',
  lead: 'Old road atlases carried a triangular chart listing the distance between every pair of towns. Filling one in for a whole street network is a classic computing problem called all-pairs shortest paths. One way is to run a route-finder from every starting point in turn. Another, the Floyd-Warshall algorithm, is startlingly short: for each junction k, check whether going via k shortens the route between every pair i and j, and keep the better value. Three nested loops, and when they finish, every entry in the table is correct. This project writes it in Python, speeds it up with numpy, and runs it on Musselburgh\'s roads as mapped on OpenStreetMap.',
  wa: 'Hello Modern Age Coders, could we arrange a free coding or Python lesson for a learner in Musselburgh?',

  picks: {
    eyebrow: 'Musselburgh course picks',
    h2: 'Musselburgh courses in algorithms, Python and AI',
    intro: 'Four ways in, arranged by age. Lesson one on any of them is live, free, and bookable without card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: tables, shortcuts and checking whether a detour through a third place helps.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games the learner designs and an AI helps build, tested scene by scene.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first lines to numpy and graphs, including the Musselburgh distance table.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for algorithms, data, performance and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Musselburgh and East Lothian',
      h2: 'Musselburgh, Fisherrow, Inveresk and Levenhall',
      intro: 'The NRS estimate for Musselburgh, and neighbourhoods recorded in EH21.',
      body: [
        { kind: 'table', caption: 'Musselburgh in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['Musselburgh locality, mid-2020', '21,100']
        ] },
        { kind: 'p', text: 'In EH21, postcodes.io records Fisherrow, Inveresk, Levenhall, Monktonhall, Pinkie, Pinkie Braes, Stoneybank and Stoneyhill as suburban areas of East Lothian, with Wallyford, Whitecraig and Old Craighall as villages. East Lothian schools run on the Curriculum for Excellence; our tutors plan in P and S years and prepare learners for SQA Computing Science and Maths, National 5 through Advanced Higher. Holiday weeks come out of the timetable once we have the dates.' },
        { kind: 'callout', h3: 'East Lothian, Edinburgh and SQA subjects', p: 'Read <a class="cg-inline-link" href="/coding-classes-in-east-lothian">coding classes in East Lothian</a>, <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a> and <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths tuition</a>. Why we teach reasoning before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Musselburgh project',
      h2: 'A road distance chart for Musselburgh with the Floyd-Warshall algorithm',
      intro: 'Every junction to every junction, three loops, a numpy speed-up and a cross-check.',
      body: [
        { kind: 'p', text: 'From OpenStreetMap the learner keeps the public roads in a rectangle over Musselburgh, 120.5 km of them, and merges points where a road merely bends, leaving 1,124 junctions joined by 1,286 road segments. A 1,124 by 1,124 table starts with the length of each direct segment and infinity everywhere else. Floyd-Warshall then makes 1,124 passes: on pass k, any pair whose route would be shorter by going through junction k gets its entry lowered. That is about 1.42 billion small updates, which numpy handles in 10.1 seconds on an ordinary laptop by updating a whole row block at a time.' },
        { kind: 'p', text: 'To be sure the table is right, the learner compares it with Dijkstra\'s algorithm run from a sample of junctions: every value agrees. Dijkstra from every junction would take an estimated 4.2 seconds here, so on a sparse road network the repeated single-source approach is faster, while Floyd-Warshall wins on simplicity and on dense networks. Across all pairs, the average drive between two junctions is 3.21 km and the longest shortest route, the network\'s diameter within the rectangle, is 10.26 km.' },
        { kind: 'table', caption: 'Part of the Musselburgh road distance chart, shortest drive in km between recorded places, our Python run on OpenStreetMap data', head: ['From', 'To', 'By road', 'Straight line'], rows: [
          ['Monktonhall', 'Stoneybank', '0.4 km', '0.31 km'],
          ['Levenhall', 'Pinkie Braes', '0.8 km', '0.41 km'],
          ['Fisherrow', 'Stoneyhill', '1.3 km', '0.87 km'],
          ['Inveresk', 'Monktonhall', '3.2 km', '1.09 km'],
          ['Wallyford', 'Monktonhall', '5.1 km', '2.93 km']
        ] },
        { kind: 'p', text: 'Most pairs of places are about one and a half times as far by road as in a straight line, but Inveresk to Monktonhall stands out at nearly three times. The table cannot say why; a learner would look at the map to see what the roads must go round. Distances here use public roads inside the rectangle only, so any quicker route leaving the box is not counted.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Fill in a small distance chart for five places, then check whether any trip is shorter via a third.' },
          { h3: 'S1 to S3', p: 'Write Floyd-Warshall in plain Python for a ten-junction map of Musselburgh streets.' },
          { h3: 'S4 and up', p: 'Vectorise it with numpy for 1,124 junctions and time it against Dijkstra from every start.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap roads, our table', p: 'Road geometry is from OpenStreetMap and its contributors under the Open Database Licence; place points from postcodes.io. The rectangle, the simplification, the timings and every distance are our own work, not an official route planner.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Algorithms and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Short code can hide a very large amount of work.',
      body: [
        { kind: 'table', caption: 'From the Musselburgh distance chart to coding with AI', head: ['In the Floyd-Warshall project', 'When an AI writes code for you'], rows: [
          ['Three loops did 1.42 billion updates', 'Count the work, not the lines'],
          ['numpy made it take 10.1 seconds', 'How code runs matters as much as what it says'],
          ['Repeated Dijkstra was faster here', 'The textbook choice depends on the data'],
          ['A cross-check confirmed every value', 'Verify results a second, independent way'],
          ['Routes leaving the box were ignored', 'Know the limits of your input']
        ] },
        { kind: 'p', text: 'Ask an AI assistant for "distances between all places" and it will usually produce working Floyd-Warshall code in seconds, correct and possibly far too slow if written as plain Python loops. Vibe coding means the learner states what is needed and an AI drafts the code; in Musselburgh lessons the learner then times it, estimates its cost and checks a sample of answers another way before using it. AI agents that write and run code for you make these speed and correctness trade-offs silently. Agent building comes once a learner writes Python unassisted, normally in the senior years or adulthood, and Copilot Studio agents are taught in private lessons only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">how students in the UK move on to AI agents</a>, and the reasoning in <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We have no affiliation with OpenStreetMap, National Records of Scotland or postcodes.io. Their data is open and was used as published; the analysis and any error in it belong to Modern Age Coders.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From distance charts to dynamic programming',
    intro: 'A school year tells us roughly where to start; the free lesson pins it down.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Tables, shortcuts and checking every possible route.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and small apps the learner plans and an AI helps build.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and algorithms', p: 'Graphs, dynamic programming and numpy alongside SQA Computing Science.', courses: ['python-complete-masterclass-teens', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Python, performance and agents', p: 'Efficient code, data work and AI agents, built step by step.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and graphs',
    h2: 'What is the Floyd-Warshall algorithm, and how do you run it in Python?',
    intro: 'Floyd-Warshall finds the shortest route between every pair of points in a network by checking, for each point in turn, whether going through it shortens any route; in Python it is three nested loops, and numpy makes it fast.',
    p1: 'On 120.5 km of Musselburgh roads with 1,124 junctions, a numpy version filled the whole distance table in 10.1 seconds, agreeing with Dijkstra\'s algorithm at every checked value.',
    p2: 'Learners who have built it ask of any code an AI hands them: how much work does this really do, and how would I check its answers?',
    closer: 'Being able to weigh an algorithm\'s cost lets Musselburgh teenagers judge AI-written code instead of simply running it, which is reason enough to learn Python in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Fisherrow to Wallyford, on screen',
    intro: 'The whole set-up is a computer with a camera and an internet line good enough to stream.',
    cells: [
      { h3: 'Learner drives the code', p: 'Typing, prompting and running are the student\'s job; the tutor watches on screen share and questions every choice.' },
      { h3: 'Trial finds the start', p: 'In the free session we see the current level and note any SQA exam coming up.' },
      { h3: 'First session free', p: 'The opening lesson costs nothing and finishes with a course suggestion.' },
      { h3: 'Classes of equals', p: 'Five to ten learners from across the UK make each group, matched by stage.' },
      { h3: 'Two per week', p: 'None during Scottish school holidays.' },
      { h3: 'Fixed evening', p: 'Clock changes are our tutors\' problem; your lesson time does not move.' }
    ],
    spec: { title: 'Why lessons are online', p: 'Gathering five learners of one level in one room on one evening is hard in any town. Over video it is easy.' }
  },

  fees: {
    h2: 'Musselburgh fees',
    intro: 'Musselburgh learners are charged our international rates, which cover every country outside India.',
    first: 'One whole lesson free, then a course suggestion.',
    group: 'About eight live small-class lessons per month.',
    private: 'About eight live one-to-one lessons per month.',
    closer: 'All pricing is in US dollars, never sterling, and the first invoice waits until the trial has agreed a course and a regular weekly time. The pricing page explains holidays, missed sessions and moving between private and group lessons.'
  },

  reviewsH2: 'East Lothian parents and UK learners, in their Google reviews',

  book: {
    h2: 'Book a free Musselburgh lesson',
    intro: 'Tell us the learner\'s age or year and one or two interests. The first session might be a distance-chart puzzle, a Scratch game planned with an AI, a first Python script, or timing two ways of solving the same problem.',
    success: 'Thank you. We have received your Musselburgh request.'
  },

  faq: {
    h2: 'Musselburgh questions',
    intro: 'Distance tables, Floyd-Warshall, Python, vibe coding and lesson practicalities.',
    items: [
      { q: 'What is the population of Musselburgh?', a: 'National Records of Scotland estimated 21,100 people in the Musselburgh locality in mid-2020.' },
      { q: 'Do you teach online Python classes in Musselburgh?', a: 'We do, over live video, for learners aged 6 to 67 in Musselburgh, Wallyford, Whitecraig and the rest of East Lothian.' },
      { q: 'What is the difference between Floyd-Warshall and Dijkstra?', a: 'Dijkstra finds shortest routes from one starting point; Floyd-Warshall finds them between all pairs at once. On Musselburgh\'s sparse road network, running Dijkstra from every junction was quicker, but Floyd-Warshall is simpler to write.' },
      { q: 'What is all-pairs shortest paths?', a: 'The problem of finding the shortest route between every pair of points in a network, the computer version of a road atlas distance chart.' },
      { q: 'What does the Musselburgh project involve?', a: 'Building a road network of 1,124 junctions from OpenStreetMap, filling its complete distance table with Floyd-Warshall in numpy, and checking it against Dijkstra.' },
      { q: 'Is vibe coding taught?', a: 'Throughout, at every age: the learner plans, the AI helps draft, and the learner tests and fixes.' },
      { q: 'When can students start building AI agents?', a: 'When they write Python without help, usually senior pupils or adults; Copilot Studio agents are private lessons only.' },
      { q: 'Is there help with SQA exams?', a: 'Yes, in Computing Science and Maths from National 5 to Advanced Higher, taught for understanding with no promised grades.' },
      { q: 'What are the fees?', a: 'No charge for the trial lesson, then USD 100 a month in a class or USD 150 a month for one-to-one teaching.' },
      { q: 'What happens in the school holidays?', a: 'Lessons pause; send the dates and we plan round them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other Lothians pages',
    html: 'Each with a different project: <a class="cg-inline-link" href="/coding-classes-in-east-lothian">East Lothian</a> (predators and prey), <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a>, <a class="cg-inline-link" href="/coding-classes-in-midlothian">Midlothian</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-livingston">Livingston</a> (a hash tree of the map). Beyond them, go through <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Musselburgh and East Lothian',
  footerPlaces: [
    { href: '/coding-classes-in-east-lothian', label: 'East Lothian' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-msb .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-msb .cg-hero h1 { font-weight: 760; letter-spacing: -0.024em; line-height: 1.06; }
.cg-root.cg-msb .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; border-radius: 0 6px 6px 0; }
.cg-root.cg-msb .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-msb .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.019em; }
.cg-root.cg-msb .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; font-style: italic; }
.cg-root.cg-msb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-msb .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-msb .cg-ladder-col { border-left: 4px double var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-msb .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'East Lothian (S12000010). Scotland: Curriculum for Excellence, SQA National 5 to Advanced Higher. NRS mid-2020 settlement and locality estimates: Musselburgh 21,100 (Tranent 11,910 next). postcodes.io (East Lothian, EH21): Fisherrow, Inveresk, Levenhall, Monktonhall, Pinkie, Pinkie Braes, Stoneybank, Stoneyhill (suburban areas); Wallyford, Whitecraig, Old Craighall (villages).',
    localProject: 'OSM API 0.6 bbox -3.100,55.925,-3.010,55.955: public roads 120.5 km, 1,124 junctions, 1,286 segments. Floyd-Warshall in numpy 10.1 s (1.42 billion updates); Dijkstra-from-all est. 4.2 s; agree. Mean pair 3.21 km, diameter 10.26 km. Chart: Monktonhall-Stoneybank 0.4, Levenhall-Pinkie Braes 0.8, Fisherrow-Stoneyhill 1.3, Inveresk-Monktonhall 3.2 (straight 1.09, ratio 2.9), Wallyford-Monktonhall 5.1; median ratio 1.5. Lesson family: all-pairs shortest paths, Floyd-Warshall.',
    requiredMentions: [
      '21,100',
      '120.5 km',
      'Fisherrow',
      'Inveresk',
      'Levenhall',
      'Monktonhall',
      'Stoneybank',
      'Pinkie Braes',
      'Floyd-Warshall',
      'all-pairs shortest paths'
    ],
    sources: [
      { claim: 'OpenStreetMap roads in Musselburgh, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas and villages in East Lothian (EH21).', url: 'https://api.postcodes.io/places?q=Fisherrow' }
    ],
    rejectedClaims: [
      'Racecourse, harbour or Roman history: not read from a source; not claimed.',
      'Why Inveresk to Monktonhall is a long drive: not claimed; left for the learner to read from the map.',
      'Official driving distances or journey times: none; our table covers public roads inside the rectangle only.',
      'Largest locality in East Lothian: per NRS mid-2020 figures quoted on the East Lothian page (Musselburgh 21,100, Tranent 11,910).',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
