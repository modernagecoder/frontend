'use strict';
// Macclesfield (cg- town page, UK cluster Phase 10, towns band B, row 495). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: if you search for a route from both ends
// at once, how much work do you save, and is the answer still exact? (bidirectional Dijkstra versus one-way Dijkstra).
// Data (read 30 September 2026): OpenStreetMap public roads (motorway down to living street, with link roads) from one
// Overpass query for the box 53.235 to 53.285 north, 2.175 to 2.085 west, around Macclesfield. 246.1 km of road
// segments; the largest connected network has 11,974 mapped points. Roads treated as two-way; cost is distance.
// Our run (scratchpad mcf/bi.py): 400 random pairs of points (seed 2026). Median route 3.39 km. Points settled before
// the answer was certain: one-way Dijkstra median 6,252.5, bidirectional median 3,536; median ratio 0.554. Two-way
// settled fewer points on 93.8% of trips and over 10% more on 4.2%. By route length: under 1.5 km (58 trips) ratio
// 0.506; 1.5 to 3 km (107) 0.516; over 3 km (235) 0.579. Totals 2,423,317 against 1,387,810. Same distance on all 400.
// Lesson family: bidirectional search (bidirectional Dijkstra, stopping rule, circle-area intuition).
// Place facts: Cheshire East (E06000049) TS001 398,772. ONS 2021 BUAs (published): Crewe 74,120; Macclesfield 54,345;
// Congleton 30,005; Wilmslow 25,725; Nantwich 18,740. postcodes.io (Cheshire East): Tytherington, Hurdsfield, Broken
// Cross (suburban areas); Bollington (town); Prestbury, Gawsworth, Sutton Lane Ends, Langley (villages).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'MACCLESFIELD', label: 'Macclesfield', blurb: 'Online coding and Python classes for Macclesfield in Cheshire, with a route-finding project that searches from both ends of a journey at once.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-macclesfield',
  code: 'mcf',
  accent: '#34457A',
  accentRationale: 'Macclesfield: a slate indigo (9.2:1 contrast on white), chosen by hand as unused and separate from the other Phase 10 accents',
  pageType: 'city',
  place: {
    name: 'Macclesfield',
    eyebrow: 'Macclesfield, Cheshire East, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Cheshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Cheshire', href: '/coding-classes-in-cheshire' },
    { label: 'Crewe', href: '/vibe-coding-and-ai-agents-classes-in-crewe' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Macclesfield, Cheshire',
  title: 'Online Coding and Python Classes in Macclesfield | AI, 6 to 67',
  description: 'Python, coding, AI and vibe coding lessons, live online, for learners aged 6 to 67 in Macclesfield, Tytherington, Hurdsfield and Bollington. First lesson free.',
  ogDescription: 'Online coding and Python classes for Macclesfield, Cheshire, plus a project on real streets: does searching from both ends find the same route with less work?',
  twitterDescription: 'Macclesfield, Cheshire: online Python, coding, AI and vibe coding classes, ages 6 to 67. Free first lesson.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Macclesfield, Cheshire',
    description: 'Python, algorithms, coding, AI, vibe coding and maths for children, teenagers and adults in Macclesfield and Cheshire East, taught live online with reasoning before tools.'
  },

  h1: 'Online coding and Python classes in Macclesfield, Cheshire',
  capsuleQ: 'Which online coding and Python classes are best for Macclesfield learners?',
  capsule: 'Macclesfield\'s built-up area recorded 54,345 residents in the 2021 census, per the ONS, in a Cheshire East council area of 398,772. Tytherington, Hurdsfield and Broken Cross are listed as suburban areas, with Bollington, Prestbury and Gawsworth close by in the postcode data. Learners aged six to 67 take Python, coding, AI, vibe coding and maths with us over live video. The tutors are in India, and lessons are private or shared by five to ten learners of equal level. We teach reasoning first, so that students can check a program or a chatbot answer for themselves. In the Macclesfield project a learner codes Dijkstra\'s route-finder twice in Python on the town\'s real street network, once from the start only and once from both ends, and counts how much searching the second version saves. A free first lesson ends with our course advice. Later lessons are USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'Dijkstra\'s algorithm finds the shortest route by spreading outward from the start like a ripple, settling the closest unvisited point each time, until the ripple reaches the destination. A bidirectional version sends out two ripples, one from each end, and stops when they have met in a way that proves no shorter route can exist. Two small ripples cover less ground than one large one, so there should be less work. How much less, and does the answer stay exactly right? Macclesfield\'s streets, as mapped by OpenStreetMap contributors, give a learner a real network on which to find out.',
  wa: 'Hello Modern Age Coders, I am looking for a free Python or coding lesson for a learner in Macclesfield.',

  picks: {
    eyebrow: 'Macclesfield picks',
    h2: 'Python, algorithm and AI courses for Macclesfield',
    intro: 'Start from the learner\'s age. Each course opens with one free live lesson, and nobody asks for a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: solve a maze from the entrance, from the exit, then from both.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Have an AI draft a Scratch maze game, then check whether its path really is the shortest.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the ground up, reaching graphs, priority queues and the Macclesfield route race.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web builds with an AI assistant, where every shortcut has to be proved correct.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Cheshire East',
      h2: 'Macclesfield among the Cheshire East towns',
      intro: 'Five built-up areas of the council area in ONS figures, and the places postcode data lists around Macclesfield.',
      body: [
        { kind: 'table', caption: 'Selected built-up areas in Cheshire East, ONS 2021 census figures', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Crewe', '74,120'],
          ['Macclesfield', '54,345'],
          ['Congleton', '30,005'],
          ['Wilmslow', '25,725'],
          ['Nantwich', '18,740']
        ] },
        { kind: 'p', text: 'The five rows are a selection, shown exactly as the ONS gives them and not summed. Cheshire East as a whole had 398,772 usual residents, a figure from a different census table. Postcodes.io names Tytherington, Hurdsfield and Broken Cross as suburban areas, Bollington as a town, and Prestbury, Gawsworth, Sutton Lane Ends and Langley as villages in Cheshire East. England\'s national curriculum applies in local schools, and we fit lessons around the term dates you pass on.' },
        { kind: 'callout', h3: 'Cheshire, the North West and the way we teach', p: 'More places appear on <a class="cg-inline-link" href="/coding-classes-in-cheshire">coding classes in Cheshire</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>. For the reasoning-first method, read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Macclesfield project',
      h2: 'Bidirectional Dijkstra on Macclesfield\'s streets: 400 trips, counted',
      intro: 'The same route, found two ways, with a tally of how many points each search had to settle.',
      body: [
        { kind: 'p', text: 'One request to the Overpass service returns every public road that OpenStreetMap holds in a box around Macclesfield: 246.1 km of road segments. In Python the learner turns them into a graph, keeps the largest connected network of 11,974 mapped points, and gives each segment its length as a cost. To keep the first version simple, every street is treated as two-way and the cost is distance, not time. Then 400 random pairs of points are drawn and each pair is solved twice.' },
        { kind: 'table', caption: '400 random trips on the Macclesfield street graph, our Python run on OpenStreetMap data', head: ['Measure', 'One-way Dijkstra', 'Bidirectional Dijkstra'], rows: [
          ['Points settled, median trip', '6,252.5', '3,536'],
          ['Points settled, all 400 trips', '2,423,317', '1,387,810'],
          ['Trips where it settled fewer points', '25 (6.2%)', '375 (93.8%)'],
          ['Same shortest distance as the other method', '400 of 400', '400 of 400']
        ] },
        { kind: 'p', text: 'The typical trip was 3.39 km long. On a typical trip the two-ended search settled 55% of the points that the one-ended search needed (a median ratio of 0.554), and across all trips it did about 43% less work. It was not a clean win every time: on 4.2% of trips it settled over a tenth more points than the ordinary search. The distances, though, matched on all 400 trips. That depends on the stopping rule. It is tempting to stop the moment the two ripples first touch, but the first meeting point is not always on the shortest route. The correct rule keeps going until the two frontiers, added together, are at least as long as the shortest complete route found so far.' },
        { kind: 'table', caption: 'Work ratio by route length (bidirectional points settled divided by one-way), median of each group, our calculation', head: ['Shortest route length', 'Trips', 'Median ratio'], rows: [
          ['Under 1.5 km', '58', '0.506'],
          ['1.5 km to 3 km', '107', '0.516'],
          ['Over 3 km', '235', '0.579']
        ] },
        { kind: 'p', text: 'Why roughly a half? A ripple on a flat map covers an area that grows with the square of its radius. One circle of radius r has area pi r squared; two circles of radius r over 2 have half that in total. Short trips in the middle of the network land almost exactly on the prediction. Long trips save a little less, because a ripple that has already reached the edge of the mapped box has nothing more to explore there, which flatters the one-way search.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Two pupils solve a paper maze from opposite ends and count the squares they each coloured.' },
          { h3: 'Ages 11 to 15', p: 'Code one-way Dijkstra in Python on a small grid and print the number of points it settled.' },
          { h3: 'Ages 15 and up', p: 'Add the backward search and the stopping rule, then run the 400-trip comparison on the real graph.' }
        ] },
        { kind: 'callout', h3: 'Map data and its limits', p: 'Road data is © OpenStreetMap contributors, available under the Open Database Licence. The graph, the trips and the counts are ours. The network stops at the edge of our box and ignores one-way rules and speed limits, so these figures describe the exercise, not real journey times.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Search and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A faster method only counts if it still gives the right answer, and the proof is a test you run yourself.',
      body: [
        { kind: 'table', caption: 'From the route race to AI-assisted coding', head: ['In the Macclesfield race', 'When code comes from an AI'], rows: [
          ['Both methods agreed on 400 of 400 trips', 'Check a clever version against a plain one'],
          ['Stopping at first contact can be wrong', 'The subtle bug hides in the stopping condition'],
          ['About 45% less work on a typical trip', 'Measure a speed-up; do not take it on trust'],
          ['Worse on 4.2% of trips', 'Averages hide the cases that go the other way'],
          ['The map edge changed the result', 'Know the limits of the data before drawing conclusions']
        ] },
        { kind: 'p', text: 'With vibe coding, the learner asks an AI assistant for a bidirectional route-finder and gets code within seconds. Often it stops as soon as the searches meet, which passes casual testing and fails on awkward maps. Macclesfield students keep the simple one-way version as a referee and run hundreds of random trips through both. AI agents plan by searching too, through steps and tools instead of streets, and the same question applies: did it stop at the right moment? Learners take up agent building once they code Python confidently on their own, as a rule in sixth form or adulthood, and Copilot Studio agents are taught only in private lessons. See <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the UK student route into AI agents</a>.' },
        { kind: 'p', text: 'We are not affiliated with OpenStreetMap, the Office for National Statistics or postcodes.io. Their open data made the project possible; the code, the counts and any errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Levels',
    h2: 'From paper mazes to graph algorithms',
    intro: 'Use the year groups loosely. A free lesson shows us where a learner really stands.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Mazes, shortest paths by hand and explaining a strategy aloud.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games made with an AI helper and tested by their young authors.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and algorithms', p: 'Graphs, queues and searching, in parallel with GCSE and A level.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Algorithms and AI', p: 'Python first, then data structures and generative AI.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and search',
    h2: 'What is bidirectional search?',
    intro: 'Bidirectional search looks for a route from the start and from the goal at the same time and joins the two searches in the middle, which usually means exploring far less than searching from one end.',
    p1: 'On 400 random trips across Macclesfield\'s street graph, bidirectional Dijkstra settled a median of 3,536 points against 6,252.5 for the one-way version, and returned an identical distance every time.',
    p2: 'The saving is real but conditional: the search must not stop at first contact, and on about one trip in twenty-four it did noticeably more work.',
    closer: 'A Macclesfield teenager who has coded both versions can test an AI-written shortcut instead of hoping it is right, which is why programming still matters in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'The set-up',
    h2: 'Tytherington, Hurdsfield and Bollington, taught online',
    intro: 'A computer with a camera and a connection fit for video is enough.',
    cells: [
      { h3: 'Student at the controls', p: 'Learners write and run their own programs. Tutors watch the shared screen and ask them to justify each choice.' },
      { h3: 'Level set by the trial', p: 'We decide the first topic from the free lesson and note the exam board where relevant.' },
      { h3: 'Free to try', p: 'The first session is not charged and closes with a course suggestion.' },
      { h3: 'Classes of five to ten', p: 'Learners are matched by stage with others across the UK.' },
      { h3: 'Twice a week', p: 'We leave out the school holidays you tell us about.' },
      { h3: 'A steady slot', p: 'Your lesson time holds through the British Summer Time switch; the tutor adjusts instead.' }
    ],
    spec: { title: 'Why lessons are online', p: 'Grouping by level works only with enough learners to choose from. A national pool over video gives us that for every stage.' }
  },

  fees: {
    h2: 'Macclesfield fees',
    intro: 'Learners in Macclesfield are on our international price list, used for all countries other than India.',
    first: 'A whole live lesson, free, followed by a course recommendation.',
    group: 'Some eight live group lessons every month.',
    private: 'Some eight live private lessons every month.',
    closer: 'Fees are charged in US dollars, with no pound price given. You are invoiced only once the trial has fixed a course and a weekly lesson time. For holidays, missed lessons and swapping between group and private, see the pricing page.'
  },

  reviewsH2: 'What Cheshire families and learners around the UK tell Google',

  book: {
    h2: 'Book a free Macclesfield lesson',
    intro: 'Let us know the learner\'s age or school year and a favourite pastime. A trial might feature a two-ended maze, an AI-drafted Scratch game, a few lines of Python, or a shortest route on real streets.',
    success: 'Thanks. Your Macclesfield request has arrived.'
  },

  faq: {
    h2: 'Macclesfield questions',
    intro: 'Route-finding, the street project, Python, vibe coding and the practical arrangements.',
    items: [
      { q: 'How big is Macclesfield?', a: 'The ONS recorded 54,345 residents in the Macclesfield built-up area at the 2021 census.' },
      { q: 'Can Macclesfield learners join Python classes online?', a: 'Yes. Ages 6 to 67 are taught on live video, from Macclesfield, Tytherington, Hurdsfield, Bollington or any of the villages.' },
      { q: 'What is Dijkstra\'s algorithm?', a: 'A method for finding the shortest route in a network by always settling the closest point not yet settled, until the destination is reached.' },
      { q: 'What is bidirectional Dijkstra?', a: 'Dijkstra\'s algorithm run from both the start and the destination at once, with a stopping rule that guarantees the two halves join into a true shortest route.' },
      { q: 'What is the Macclesfield project?', a: 'Coding both versions in Python on the town\'s street graph and comparing the points each settles across 400 random trips.' },
      { q: 'Will my child learn vibe coding?', a: 'Yes. In every age band learners describe a program to an AI, then test the result and repair it.' },
      { q: 'When do AI agents come into the course?', a: 'When a learner programs in Python with confidence, generally sixth form or later. Copilot Studio agents are one-to-one only.' },
      { q: 'Do you teach for GCSE and A level computer science?', a: 'We do, along with maths. We teach for understanding and do not promise grades.' },
      { q: 'How much do classes cost?', a: 'The trial is free. Group classes are USD 100 a month after that, and private lessons USD 150 a month.' },
      { q: 'Do you break for school holidays?', a: 'We do, on the dates you send.' }
    ]
  },

  next: {
    eyebrow: 'Close to Cheshire',
    h2: 'More Cheshire and North West pages',
    html: 'Other towns with a project of their own include <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-crewe">Crewe</a>, <a class="cg-inline-link" href="/best-coding-class-in-chester">Chester</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-stockport">Stockport</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-warrington">Warrington</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links to all of them.',
    waLabel: 'Send a WhatsApp message'
  },

  footerHeading: 'Macclesfield and Cheshire',
  footerPlaces: [
    { href: '/coding-classes-in-cheshire', label: 'Cheshire' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-mcf .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.8vw, 3.2rem); }
.cg-root.cg-mcf .cg-hero h1 { font-weight: 750; letter-spacing: -0.021em; line-height: 1.08; }
.cg-root.cg-mcf .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-mcf .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mcf .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.017em; }
.cg-root.cg-mcf .cg-table caption { text-align: left; font-size: 0.88rem; font-weight: 600; }
.cg-root.cg-mcf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mcf .cg-table th { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
.cg-root.cg-mcf .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-mcf .cg-callout { border-left-width: 4px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Cheshire East (E06000049), Census 2021 TS001 usual residents 398,772. ONS 2021 BUAs (published): Crewe 74,120; Macclesfield 54,345; Congleton 30,005; Wilmslow 25,725; Nantwich 18,740. postcodes.io (Cheshire East): Tytherington, Hurdsfield, Broken Cross (suburban areas); Bollington (town); Prestbury, Gawsworth, Sutton Lane Ends, Langley (villages).',
    localProject: 'OpenStreetMap public roads via one Overpass query, box 53.235-53.285 N, 2.175-2.085 W: 246.1 km of segments, largest connected network 11,974 points; two-way, distance cost. 400 random trips (seed 2026), median route 3.39 km. Points settled: one-way Dijkstra median 6,252.5, bidirectional 3,536; median ratio 0.554; bidirectional fewer on 93.8% (375 trips), over 10% more on 4.2%. Ratio by length: under 1.5 km (58) 0.506; 1.5-3 km (107) 0.516; over 3 km (235) 0.579. Totals 2,423,317 vs 1,387,810. Equal distances on all 400. Lesson family: bidirectional search.',
    requiredMentions: [
      '54,345',
      '11,974',
      '246.1',
      'Tytherington',
      'Hurdsfield',
      'Broken Cross',
      'Bollington',
      'Prestbury',
      'bidirectional',
      'Gawsworth'
    ],
    sources: [
      { claim: 'OpenStreetMap road data (ODbL) fetched through the Overpass API for a box around Macclesfield.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas, towns and villages in Cheshire East.', url: 'https://api.postcodes.io/places?q=Tytherington' }
    ],
    rejectedClaims: [
      'Real journey times or traffic: not modelled; cost is distance and streets are two-way in the exercise.',
      'Silk, mills, hills or railway facts: not read from a source; not claimed.',
      'That bidirectional search always does less work: not claimed; it did more on 4.2% of trips.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
