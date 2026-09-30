'use strict';
// Wembley, Brent (cg- district page, UK cluster Phase 9, row 437). Keyword slug per the owner's 2026-09-30 decision
// (rotation with city suffix), with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when a
// choice has several goals at once, which options are genuinely worth considering, and why does a single score hide
// some of them? (Pareto front / non-dominated set, dominance, weighted-sum scores, more objectives making more options
// non-dominated).
// Data (read 30 September 2026): OpenStreetMap API 0.6 over bbox -0.325,51.540,-0.270,51.570 in 9 tiles (ODbL). Walkable
// ways inside the box: 223.0 km (main connected piece). 8 station nodes (Sudbury Town, Sudbury and Harrow Road, Alperton,
// Wembley Central, North Wembley, Stonebridge Park, Wembley Stadium, Wembley Park), 25 ways tagged leisure=park (459
// vertices inside the box), 4 libraries, 279 shops, 3,167 building centres inside the box.
// Our run (scratchpad g1/wmb.py): walking distance from each building centre (snapped to the path network, snap added) to
// the nearest station, park edge, library and shop, by multi-source Dijkstra. Medians: station 599 m, park 506 m, library
// 946 m. Non-dominated buildings: 2 objectives (station, park) 7 (0.22%); 3 objectives (+ library) 44 (1.39%); 4
// objectives (+ shop) 90 (2.84%). Weighted sums w x station + (1 - w) x park over 101 weights pick only 3 distinct
// buildings; 4 of the 7 two-objective front buildings are never chosen by any weighting. Two extreme front members:
// 21 m to a station and 193 m to a park; 903 m to a station and 8 m to a park.
// Lesson family: Pareto front / multi-objective trade-offs. Screened 30 September 2026: "Pareto" 0 hits in content/uk,
// nl, ie and dossiers; claimed in scratchpad claims.txt as wmb. Brent borough page = marching squares; not reused.
// Place facts: Census 2021 usual residents by 2022 ward (Nomis NM_2021_1, TYPE153), published per ward and not summed:
// Wembley Central 17,925; Wembley Hill 15,063; Wembley Park 7,548; Tokyngton 10,006; Alperton 15,056. postcodes.io
// (Brent) suburban areas: Alperton, North Wembley, Sudbury, Tokyngton, Wembley Park.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WEMBLEY', label: 'Wembley', blurb: 'Coding and AI classes for Wembley in Brent, with a project that finds which homes offer a genuinely good trade-off between stations, parks, libraries and shops.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-wembley-london',
  code: 'wmb',
  accent: '#0B5F8A',
  accentRationale: 'Wembley: a deep cerulean (6.96:1 contrast), chosen by hand to sit apart from recent purples and greens',
  pageType: 'city',
  place: {
    name: 'Wembley',
    eyebrow: 'Wembley, Brent, London',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'Brent', href: '/coding-classes-in-brent-london' },
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wembley, London',
  title: 'Coding and AI Classes in Wembley, London | Python, 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Wembley, Alperton, Sudbury and North Wembley learners aged 6 to 67, taught live by a tutor. First lesson free.',
  ogDescription: 'Coding and AI classes for Wembley, with a Pareto front project that shows which homes are real trade-offs between stations, parks, libraries and shops.',
  twitterDescription: 'Wembley coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Wembley',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Wembley and Brent, taught live with decision-making skills first.'
  },

  h1: 'Coding and AI classes in Wembley',
  capsuleQ: 'Where can Wembley learners find the best coding and AI classes?',
  capsule: 'Wembley has no single official population, but the ONS publishes each 2022 ward on its own: 17,925 usual residents in Wembley Central, 15,063 in Wembley Hill and 7,548 in Wembley Park at Census 2021. Alperton, North Wembley, Sudbury and Tokyngton are recorded suburban areas of Brent around them. Tutors based in India teach coding, AI, Python, vibe coding and maths over live video to learners aged six to 67, one-to-one or with between five and ten classmates of similar ability. Every course starts with how to weigh a decision, so learners can question a ranking that an AI produces. There is no charge for lesson one, which ends with our course pick. The Wembley project measures, for 3,167 mapped buildings, the walk to the nearest station, park, library and shop, and finds the handful that no other building beats on every count. From month two, fees are USD 100 for group tuition or USD 150 for individual tuition, per month.',
  lead: 'Choosing somewhere to live, a laptop or an AI model almost always means juggling goals that pull against each other. A home close to a station may be far from a park; a model that answers faster may answer worse. The honest way to handle this is not to squash everything into one score but to throw out only the options that are worse on every count. Whatever survives is called the Pareto front, after the economist Vilfredo Pareto. This project builds one in Python from real Wembley map data: walking distances from every mapped building to four kinds of places, and a count of how many buildings are never beaten on all of them at once.',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Wembley?',

  picks: {
    eyebrow: 'Wembley course picks',
    h2: 'Wembley courses in decisions, Python and AI',
    intro: 'Pick by age and interest. The opening class of every course is live and free, with no card needed to book.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: comparing choices that are good in different ways, and ruling out ones that lose everywhere.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with an AI and put through proper tests.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including trade-offs between accuracy, speed and cost, and the Wembley trade-off map.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data, optimisation, machine learning and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wembley and Brent',
      h2: 'Wembley Central, Wembley Park, Alperton and Sudbury',
      intro: 'Census 2021 ward counts for the Wembley area, and suburbs recorded in Brent.',
      body: [
        { kind: 'table', caption: 'Usual residents by 2022 ward, Census 2021, ONS via Nomis', head: ['Ward', 'Residents (2021)'], rows: [
          ['Wembley Central', '17,925'],
          ['Wembley Hill', '15,063'],
          ['Alperton', '15,056'],
          ['Tokyngton', '10,006'],
          ['Wembley Park', '7,548']
        ] },
        { kind: 'p', text: 'Each row is the ONS figure for that ward alone; the wards are not added up here, and none of them is the whole of what people call Wembley. Postcodes.io lists Alperton, North Wembley, Sudbury, Tokyngton and Wembley Park as suburban areas of Brent. Schools in the borough teach England\'s national curriculum, so lessons use school years and support GCSE and A level; send us the holiday dates and those weeks stay free.' },
        { kind: 'callout', h3: 'Brent, London and how we teach', p: 'For more nearby choices see <a class="cg-inline-link" href="/coding-classes-in-brent-london">coding classes in Brent</a> and <a class="cg-inline-link" href="/best-coding-class-in-london">London</a>. Why reasoning comes before prompting is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Wembley project',
      h2: 'The Pareto front: which Wembley homes are genuine trade-offs?',
      intro: 'Four walking distances for every building, a test for being beaten on every count, and what a single score leaves out.',
      body: [
        { kind: 'p', text: 'A rectangle of OpenStreetMap data around Wembley gives the raw material: 223.0 km of walkable streets and paths, 8 stations, 25 parks, 4 libraries, 279 shops and 3,167 mapped buildings. For every building Python works out the walk along real paths to the nearest station, the nearest park edge, the nearest library and the nearest shop. The typical building is 599 m from a station, 506 m from a park and 946 m from a library.' },
        { kind: 'p', text: 'One building dominates another if it is at least as close on every goal and strictly closer on at least one. Any building dominated by some other building is dropped. The survivors form the Pareto front: none of them can be improved on one goal without losing on another.' },
        { kind: 'table', caption: 'Buildings on the Pareto front as goals are added, our Python run on OpenStreetMap data for Wembley', head: ['Goals considered', 'Buildings never beaten on every goal', 'Share of 3,167'], rows: [
          ['Station and park', '7', '0.22%'],
          ['Station, park and library', '44', '1.39%'],
          ['Station, park, library and shop', '90', '2.84%']
        ] },
        { kind: 'p', text: 'With two goals only seven buildings survive. At one end is a building 21 m from a station and 193 m from a park; at the other, one 903 m from a station and 8 m from a park. The usual shortcut is a weighted score, say 70% station and 30% park, then pick the lowest. Across 101 different weightings that shortcut only ever picks three distinct buildings, and four of the seven front members are never chosen by any weighting, because they sit in a dip in the front that a straight-line score cannot reach. Add goals and the front grows fast: 44 buildings with a library, 90 with a shop, because with more goals it gets easier to be unbeaten on at least one.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Compare lunchboxes on taste and price, cross out any that lose on both, and see what is left.' },
          { h3: 'Ages 11 to 15', p: 'Plot Wembley buildings by distance to a station and a park in Python and circle the ones nobody beats.' },
          { h3: 'Ages 15 and up', p: 'Code a dominance check, compute the front for two to four goals, and test weighted scores against it.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap data, our analysis', p: 'Paths, stations, parks, libraries, shops and buildings are from OpenStreetMap and its contributors under the Open Database Licence. The distances, fronts and weightings are our own calculations and are not advice about where to live.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Trade-offs and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Squash several goals into one number and some sensible choices vanish.',
      body: [
        { kind: 'table', caption: 'From the Wembley trade-off map to working with AI', head: ['In the Pareto project', 'When AI ranks or chooses for you'], rows: [
          ['Only 7 of 3,167 buildings survived two goals', 'Most options are beaten on every count'],
          ['A weighted score reached 3 of the 7', 'A single score can hide real alternatives'],
          ['Four front members were never picked', 'Some good trade-offs are invisible to simple scores'],
          ['More goals made the front grow to 90', 'Every extra goal widens the set of reasonable picks'],
          ['Weights were a human choice', 'Ask who set the weights and why']
        ] },
        { kind: 'p', text: 'AI systems face this constantly: a model can be more accurate but slower, cheaper but less careful, and choosing one means deciding what matters. An assistant asked to "pick the right option" usually collapses everything into one hidden score. In vibe coding the learner describes the program while an AI writes it; our Wembley learners ask it to show the full front of options and the weights it used, then decide themselves. AI agents that make choices for you should do the same. Agents come later in the course, when a learner can code Python independently, typically from the mid-teens; Copilot Studio is taught privately. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'This page is not connected with OpenStreetMap, the ONS, Nomis or postcodes.io; their open data is all we used, and the analysis, with any errors, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From crossing out lunchboxes to multi-objective optimisation',
    intro: 'We treat the school year as a starting point and adjust after the free lesson.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Comparing choices on more than one thing at once.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner, built with an AI and tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and optimisation', p: 'Real data, trade-offs and algorithms beside GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Decisions, data and agents', p: 'Optimisation, machine learning and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and trade-offs',
    h2: 'What is a Pareto front, and why can one score not replace it?',
    intro: 'A Pareto front is the set of options that no other option beats on every goal at once; a single weighted score only ever picks points from part of it, so some genuinely good trade-offs never show up.',
    p1: 'For 3,167 Wembley buildings measured on walking distance to a station and a park, only 7 were on the front, and a weighted score tried over 101 weightings picked just 3 of them.',
    p2: 'Learners who have built that front ask of any AI ranking: which goals did it trade off, and what weights did someone choose?',
    closer: 'Seeing the whole set of reasonable options keeps Wembley teenagers in charge of choices that AI helps to make, a strong reason to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Alperton to Wembley Park, online',
    intro: 'The only kit is a computer, a webcam and an internet connection that can carry a video call.',
    cells: [
      { h3: 'The learner types', p: 'Students write and run every line; the tutor follows the shared screen and asks what each result shows.' },
      { h3: 'Found in the first hour', p: 'The trial shows us the right opening topic and which exam board, if any, lies ahead.' },
      { h3: 'Free first lesson', p: 'Lesson one costs nothing and ends with a course suggestion.' },
      { h3: 'Matched peers', p: 'Groups hold five to ten British learners at a similar level, wherever they live.' },
      { h3: 'Two a week', p: 'Lessons pause during school holidays.' },
      { h3: 'A slot that holds', p: 'When UK clocks change our tutors move, so your lesson time does not.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level who are all free on the same evening rarely share a postcode. Online, it does not matter.' }
  },

  fees: {
    h2: 'Wembley fees',
    intro: 'Our international rate card, used for every country but India, covers Wembley.',
    first: 'One whole lesson free, then a recommendation.',
    group: 'About eight live small-group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Brent families see prices in US dollars only, with the first invoice sent once the trial has fixed a course and a regular slot; term breaks, absences and changing format are handled on the pricing page.'
  },

  reviewsH2: 'Google reviews from Brent households and learners elsewhere',

  book: {
    h2: 'Book a free Wembley lesson',
    intro: 'We only need an age or year group and a hobby to plan the trial. Perhaps a which-lunchbox-wins puzzle, an AI-assisted Scratch game, some starter Python, or mapping real trade-offs across the borough.',
    success: 'Thank you. Your Wembley request is with us.'
  },

  faq: {
    h2: 'Wembley questions',
    intro: 'Dominance, fronts, the map data and the everyday running of lessons.',
    items: [
      { q: 'How many people live in Wembley?', a: 'There is no single official Wembley figure. Census 2021 counted 17,925 in Wembley Central ward, 15,063 in Wembley Hill and 7,548 in Wembley Park, each measured separately.' },
      { q: 'Are coding and AI classes available online in Wembley?', a: 'Every lesson runs over live video, so from Sudbury to Tokyngton anyone aged 6 to 67 can join.' },
      { q: 'What does it mean for one option to dominate another?', a: 'It is at least as good on every goal and strictly better on at least one. Dominated options can be ruled out whatever your priorities are.' },
      { q: 'Why do more goals make the Pareto front bigger?', a: 'With more goals it is easier to be unbeaten on at least one. In Wembley the front grew from 7 buildings with two goals to 90 with four.' },
      { q: 'What does the Wembley project involve?', a: 'Measuring walks from 3,167 mapped buildings to the nearest station, park, library and shop, finding the Pareto front, and comparing it with weighted scores.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, at every age, with the learner planning the program and testing what the AI writes.' },
      { q: 'Is agent building part of the course?', a: 'Only after Python feels comfortable on their own, which for most is the mid-teens upward; Copilot Studio work happens in private sessions.' },
      { q: 'Do you help with GCSE and A level?', a: 'GCSE and A level computer science and maths are both covered, aiming at real understanding rather than a promised result.' },
      { q: 'What are the fees?', a: 'Nothing for the opening session. Carrying on costs USD 100 each month for a class seat, USD 150 each month for a tutor to yourself.' },
      { q: 'Do lessons stop in the school holidays?', a: 'Yes; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More north-west London pages',
    html: 'Pages with projects of their own: <a class="cg-inline-link" href="/coding-classes-in-brent-london">Brent</a> (drawing contour lines), <a class="cg-inline-link" href="/coding-classes-in-harrow-london">Harrow</a>, <a class="cg-inline-link" href="/coding-classes-in-ealing-london">Ealing</a> and <a class="cg-inline-link" href="/best-coding-class-in-london">London</a>. Everywhere else is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wembley and Brent',
  footerPlaces: [
    { href: '/coding-classes-in-brent-london', label: 'Brent' },
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wmb .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-wmb .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-wmb .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-wmb .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wmb .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.02em; }
.cg-root.cg-wmb .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-wmb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wmb .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-wmb .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-wmb .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Brent (E09000005), London. England: national curriculum, GCSE and A level. Census 2021 usual residents by 2022 ward (Nomis NM_2021_1, TYPE153): Wembley Central 17,925; Wembley Hill 15,063; Wembley Park 7,548; Tokyngton 10,006; Alperton 15,056. postcodes.io (Brent) suburban areas: Alperton, North Wembley, Sudbury, Tokyngton, Wembley Park.',
    localProject: 'OSM API 0.6 bbox -0.325,51.540,-0.270,51.570 (9 tiles): walk network 223.0 km, 8 stations, 25 parks (459 vertices), 4 libraries, 279 shops, 3,167 buildings. Multi-source Dijkstra walking distances; medians station 599 m, park 506 m, library 946 m. Pareto fronts: 2 goals 7 (0.22%), 3 goals 44 (1.39%), 4 goals 90 (2.84%). Weighted sums over 101 weights pick 3 distinct buildings; 4 of 7 front members never chosen. Lesson family: Pareto front, dominance, weighted sums.',
    requiredMentions: [
      '17,925',
      '15,063',
      '7,548',
      '3,167',
      'Tokyngton',
      'North Wembley',
      'Sudbury',
      'Wembley Park',
      'Pareto front'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by 2022 ward, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'OpenStreetMap map data for Wembley, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io places: suburban areas in Brent.', url: 'https://api.postcodes.io/places?q=Tokyngton' }
    ],
    rejectedClaims: [
      'A population for Wembley as a whole: no published figure for exactly that area; ward figures only, not summed.',
      'Stadium, arena or event history: not read from a source; not claimed.',
      'Advice on where to live: the front describes walking distances only.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
