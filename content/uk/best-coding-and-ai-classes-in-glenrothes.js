'use strict';
// Glenrothes (cg- town page, UK cluster Phase 8, towns band A, row 417). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: where does rain go once it lands, and can a
// program work that out from heights alone? (D8 flow direction, pit filling, flow accumulation, and checking the predicted
// streams against the waterways people have mapped).
// Data (read 29 September 2026): OpenTopoData public API, eudem25m (Copernicus EU-DEM v1.1): a 40 by 40 grid over bbox
// -3.235,56.175,-3.135,56.215 (27.39 square km; cells about 159 m east-west by 113 m north-south), heights 49.3 to 174.3 m.
// OpenStreetMap API 0.6 (6 tiles, ODbL): 46 ways tagged waterway, including River Leven, Lothrie Burn, Camby Burn, Back Burn,
// Bighty Burn and Balbirnie Burn.
// Our run (scratchpad glr/d8.py): 19 interior pits (cells with no lower neighbour); priority-flood filling raised 33 cells by
// up to 5.98 m, leaving none. D8: each cell drains to its steepest downhill neighbour; accumulation = cells draining through
// it. Largest: 944 cells (17.0 square km). Cells predicted as streams, share within 150 m of a mapped waterway (all cells:
// 18.5%): catchment at least 0.45 square km, 185 cells, 38.4%; at least 0.9, 111 cells, 49.5%; at least 1.8, 60 cells, 66.7%.
// Lesson family: terrain flow routing (D8 flow direction, depression filling, flow accumulation), validation against
// mapped data. Screened: "flow accumulation", "flow direction", "watershed", "D8" (as a method) 0 hits; Brent owns marching
// squares and contours, St Asaph slope/aspect/hillshade, Hull flood fill, Greenock regularisation on the same DEM source.
// Place facts: NRS mid-2020 localities: Glenrothes 38,360 (third in Fife after Dunfermline 54,990 and Kirkcaldy and Dysart
// 50,370, per the Fife page). postcodes.io (Fife, KY6/KY7) suburban areas: Auchmuty, Balfarg, Cadham, Caskieberran,
// Macedonia, Newcastle, Pitcoudie, Pitteuchar, Rimbleton, Stenton, Tanshall, Woodside; Leslie and Markinch towns.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'GLENROTHES', label: 'Glenrothes', blurb: 'Coding and AI classes for Glenrothes, with a project that predicts where rain flows from height data alone and checks the answer against mapped burns.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-glenrothes',
  code: 'glr',
  accent: '#151C8A',
  accentRationale: 'Glenrothes: a deep indigo blue (10.81:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Glenrothes',
    eyebrow: 'Glenrothes, Fife, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Fife' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Fife', href: '/coding-classes-in-fife' },
    { label: 'Kirkcaldy', href: '/ai-and-programming-classes-in-kirkcaldy' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Glenrothes, Scotland',
  title: 'Coding and AI Classes in Glenrothes | Python, Ages 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Glenrothes, Pitteuchar, Cadham and Tanshall learners aged 6 to 67, taught live by tutors. First lesson free.',
  ogDescription: 'Coding and AI classes for Glenrothes, with a terrain project that predicts where rain flows and checks it against the burns on the map.',
  twitterDescription: 'Glenrothes coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Glenrothes',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Glenrothes and Fife, taught live with reasoning and checking first.'
  },

  h1: 'Coding and AI classes in Glenrothes',
  capsuleQ: 'Where can Glenrothes learners find the best coding and AI classes?',
  capsule: 'Only Dunfermline and Kirkcaldy are bigger in Fife than Glenrothes, whose locality National Records of Scotland estimated at 38,360 people in mid-2020. Pitteuchar, Cadham, Tanshall, Rimbleton, Caskieberran and Auchmuty are among the suburbs recorded in the KY6 and KY7 districts. Learners from six to 67 can take coding, AI, Python, vibe coding and maths live on video with our tutors in India, as private lessons or in a class of five to ten at the same level. Our courses begin with reasoning and checking, so learners test what a model predicts before trusting it. Your opening lesson costs nothing, and we close it with a suggested course. The Glenrothes project builds a 1,600-point height grid, works out which way rain would run from every cell, and checks the predicted streams against the River Leven and the burns people have mapped. If you carry on, expect USD 100 per calendar month in a shared class or USD 150 for lessons alone with a tutor.',
  lead: 'Rain that falls on a hillside runs downhill, joins other water and eventually forms a stream. A program can imitate that using nothing but a grid of heights. The classic method, called D8, sends each cell\'s water to whichever of its eight neighbours is steepest downhill; counting how many cells drain through each one, the flow accumulation, then shows where streams should be. Real height data is messy, though: small hollows trap water where no real pond exists, and must be filled first. This project runs the whole method on the Glenrothes area and then does what every model should face: a check against reality, here the waterways mapped on OpenStreetMap.',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Glenrothes?',

  picks: {
    eyebrow: 'Glenrothes course picks',
    h2: 'Glenrothes courses in reasoning, Python and AI',
    intro: 'Choose by age and interest; each course opens with a free live lesson and needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: following rules step by step and checking the result against the real world.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with AI help and thoroughly tested.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first steps to grids and simulations, including the Glenrothes rain model.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data, geospatial models, machine learning and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Glenrothes and Fife',
      h2: 'Glenrothes, Pitteuchar, Cadham and Tanshall',
      intro: 'The NRS estimate for Glenrothes, and suburbs on record in KY6 and KY7.',
      body: [
        { kind: 'table', caption: 'Glenrothes in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['Glenrothes locality, mid-2020', '38,360']
        ] },
        { kind: 'p', text: 'Postcodes.io lists Auchmuty, Balfarg, Cadham, Caskieberran, Macedonia, Newcastle, Pitcoudie, Pitteuchar, Rimbleton, Stenton, Tanshall and Woodside as suburban areas of Fife in KY6 and KY7, with Leslie and Markinch recorded as towns. Fife schools follow the Curriculum for Excellence, and so do our year groups, with SQA Computing Science and Maths help from National 5 up. Send us your holiday dates and we will work around them.' },
        { kind: 'callout', h3: 'Fife, Kirkcaldy and SQA help', p: 'See <a class="cg-inline-link" href="/coding-classes-in-fife">coding classes in Fife</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-kirkcaldy">Kirkcaldy</a> and <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science help</a>. Why checking comes before trusting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Glenrothes project',
      h2: 'Where does the rain go? D8 flow routing on a Glenrothes height grid',
      intro: 'Fill the false hollows, route every cell downhill, count what flows through, then compare with the map.',
      body: [
        { kind: 'p', text: 'The learner requests heights for a 40 by 40 grid covering 27.39 square kilometres around Glenrothes from the OpenTopoData service, which serves the European EU-DEM elevation model. Each cell is about 159 m by 113 m, and heights range from 49.3 m to 174.3 m. Nineteen cells turn out to be pits, lower than all eight neighbours, where the model\'s water would be stuck; a filling step raises 33 cells by up to 5.98 m so that every cell can drain to the edge. Then each cell sends its water to its steepest downhill neighbour, and the program counts how many cells drain through each one. The largest single flow gathers 944 cells, about 17.0 square kilometres.' },
        { kind: 'p', text: 'To test the model, the learner downloads the waterways mapped on OpenStreetMap in the same area: 46 of them, including the River Leven, Lothrie Burn, Camby Burn, Back Burn, Bighty Burn and Balbirnie Burn. A predicted stream cell counts as a hit if it lies within 150 m of a mapped waterway. By chance alone, 18.5% of all cells are that close.' },
        { kind: 'table', caption: 'Predicted stream cells near mapped waterways, our Python run on EU-DEM heights and OpenStreetMap waterways', head: ['Cells counted as streams', 'Cells', 'Within 150 m of a mapped waterway'], rows: [
          ['Draining at least 0.45 square km', '185', '38.4%'],
          ['Draining at least 0.9 square km', '111', '49.5%'],
          ['Draining at least 1.8 square km', '60', '66.7%'],
          ['Any cell, for comparison', '1,600', '18.5%']
        ] },
        { kind: 'p', text: 'The bigger the predicted stream, the more often it matches a real one: two in three of the largest flow lines sit beside a mapped waterway, more than three times the chance rate. Smaller predicted streams match less often. Some of the gap is the coarse grid, some is that town drainage runs through pipes and culverts the height data cannot see, and some may be small burns that nobody has mapped. The model is useful and imperfect, and the check tells you how imperfect.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Pour water on a crumpled sheet of foil and draw where it runs, then predict it first from the shape.' },
          { h3: 'S1 to S3', p: 'Load a small Glenrothes height grid in Python and find the steepest downhill neighbour of each cell.' },
          { h3: 'S4 and up', p: 'Fill pits, run D8 and flow accumulation, and score the streams against mapped waterways.' }
        ] },
        { kind: 'callout', h3: 'EU-DEM heights, OpenStreetMap waterways, our model', p: 'Heights come from Copernicus EU-DEM v1.1 via OpenTopoData; produced using Copernicus data and information funded by the European Union. Waterways are from OpenStreetMap and its contributors under the Open Database Licence. The grid, the flow model and the scores are our own work and are not a flood assessment.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Models and reality',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A map drawn by a model is a hypothesis until something independent backs it up.',
      body: [
        { kind: 'table', caption: 'From the Glenrothes rain model to working with AI', head: ['In the flow project', 'When AI builds a model or prediction'], rows: [
          ['19 false pits had to be filled', 'Raw data often needs careful cleaning'],
          ['Large predicted streams matched 66.7%', 'Check predictions against independent data'],
          ['Chance alone gave 18.5%', 'Always compare with a chance baseline'],
          ['Small streams matched less often', 'Accuracy varies across the range'],
          ['Culverts are invisible to heights', 'Know what your inputs cannot see']
        ] },
        { kind: 'p', text: 'An AI assistant can write a flow-routing program in moments, and it will produce a convincing map of streams whether or not it matches reality. Vibe coding means describing what you want while an AI writes the code; our Glenrothes learners also ask it to build the check against independent data, and read the check before believing the map. AI agents that model the world for you, predicting demand, risk or routes, need that kind of test built in. Learners reach agent building after they can write Python on their own, around S5 for most, while Copilot Studio agents are covered in one-to-one tuition. Both <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our route into AI agents for UK students</a> say more.' },
        { kind: 'p', text: 'OpenTopoData, the Copernicus programme, OpenStreetMap, National Records of Scotland and postcodes.io simply publish the open data this project reads; the flow model is Modern Age Coders\' work, faults included.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From foil and water to terrain models',
    intro: 'We begin with the school year as a guide and use the trial to confirm.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Rules, predictions and checking them against what really happens.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and simulation', p: 'Grids, algorithms and validation alongside SQA Computing Science and Maths.', courses: ['python-complete-masterclass-teens', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Geospatial Python and agents', p: 'Terrain data, models and AI agents, step by step.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and terrain',
    h2: 'How can a computer work out where rainwater flows from height data?',
    intro: 'It uses a flow-routing method such as D8: fill false hollows, send each cell\'s water to its steepest downhill neighbour, and count how many cells drain through each one; high counts mark likely streams.',
    p1: 'On a 1,600-cell height grid around Glenrothes, cells predicted to drain at least 1.8 square km lay within 150 m of a mapped waterway 66.7% of the time, against 18.5% for cells chosen at random.',
    p2: 'Learners who have run that check ask of any AI-made map or forecast: what was it tested against, and how often was it right?',
    closer: 'Testing a model against the real world keeps Glenrothes teenagers in charge of the AI they use, and that is worth learning to code for in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'How lessons reach Glenrothes',
    intro: 'Kit: a laptop or desktop, a camera and a connection that can stream video. Nothing else.',
    cells: [
      { h3: 'Learner-run lessons', p: 'Students write and run the code themselves while the tutor follows on screen share and asks how they would check it.' },
      { h3: 'Level found in the trial', p: 'Half an hour of hands-on work tells us what to teach first, and we log any SQA exam on the horizon.' },
      { h3: 'Free first lesson', p: 'Lesson one has no fee and ends with a course suggestion.' },
      { h3: 'Peers at your level', p: 'Class sizes run from five to ten, grouped by ability rather than postcode.' },
      { h3: 'Two per week', p: 'Paused through school holidays.' },
      { h3: 'Fixed hour', p: 'Our tutors follow UK clock changes, so your slot stays put.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, free on the same evening, rarely live near one another. On video, distance does not matter.' }
  },

  fees: {
    h2: 'Glenrothes fees',
    intro: 'Glenrothes learners pay our international prices, which apply in every country except India.',
    first: 'A complete free lesson, then advice on a course.',
    group: 'About eight live small-group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'There is no sterling tariff; we charge in US dollars, from the point the trial has pinned down course and weekly slot. School breaks, sick days and switching class type are explained on the pricing page.'
  },

  reviewsH2: 'Reviews left on Google by Fife parents and learners elsewhere',

  book: {
    h2: 'Book a free Glenrothes lesson',
    intro: 'Send an age, a year group and something the learner likes, and we will shape the trial, perhaps a where-does-water-go puzzle, a Scratch game made with an AI, some first Python, or a small grid simulation.',
    success: 'Thank you. Your Glenrothes request is with us.'
  },

  faq: {
    h2: 'Glenrothes questions',
    intro: 'Rain routing, height grids, vibe coding and the nuts and bolts of lessons.',
    items: [
      { q: 'What is the population of Glenrothes?', a: 'National Records of Scotland estimated 38,360 people in the Glenrothes locality in mid-2020.' },
      { q: 'Are coding and AI classes available online in Glenrothes?', a: 'Every lesson is a live video call, so learners aged 6 to 67 in Leslie, Markinch or anywhere in Fife can join.' },
      { q: 'What is the D8 algorithm?', a: 'A way to route water over a height grid: each cell drains to whichever of its eight neighbours gives the steepest drop. It is simple and widely taught.' },
      { q: 'What is flow accumulation?', a: 'For each cell, the number of cells whose water passes through it. Large values mark valleys and likely streams.' },
      { q: 'What does the Glenrothes project involve?', a: 'Building a 1,600-cell height grid, filling false hollows, routing rain downhill with D8 and checking predicted streams against 46 mapped waterways.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, at all ages; learners plan the program and test what the AI writes.' },
      { q: 'When do learners build AI agents?', a: 'Once Python is something they can do solo, typically from S5; Copilot Studio is taught privately.' },
      { q: 'Do you help with SQA exams?', a: 'We cover SQA Computing Science and Maths at every level from National 5, teaching the ideas rather than promising marks.' },
      { q: 'What do lessons cost?', a: 'The first is free; then USD 100 a month for a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons pause in the holidays?', a: 'They stop for school holidays; just let us know when those are.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other Fife and Tayside pages',
    html: 'Each of these runs a different experiment: <a class="cg-inline-link" href="/ai-and-programming-classes-in-kirkcaldy">Kirkcaldy</a> (boosting on building shapes), <a class="cg-inline-link" href="/coding-classes-in-fife">Fife</a>, <a class="cg-inline-link" href="/best-coding-class-in-dunfermline">Dunfermline</a> and <a class="cg-inline-link" href="/best-coding-class-in-perth-scotland">Perth</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> reach everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Glenrothes and Fife',
  footerPlaces: [
    { href: '/coding-classes-in-fife', label: 'Fife' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-glr .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-glr .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-glr .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-glr .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-glr .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.02em; }
.cg-root.cg-glr .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-glr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-glr .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-glr .cg-ladder-col { border-left: 4px double var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-glr .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Fife (S12000047). Scotland: Curriculum for Excellence, SQA National 5 to Advanced Higher. NRS mid-2020 settlement and locality estimates: Glenrothes 38,360 (Dunfermline 54,990; Kirkcaldy and Dysart 50,370). postcodes.io (Fife, KY6/KY7): Auchmuty, Balfarg, Cadham, Caskieberran, Macedonia, Newcastle, Pitcoudie, Pitteuchar, Rimbleton, Stenton, Tanshall, Woodside (suburban areas); Leslie, Markinch (towns).',
    localProject: 'OpenTopoData eudem25m 40 x 40 grid, bbox -3.235,56.175,-3.135,56.215 (27.39 sq km, cells ~159 x 113 m), 49.3 to 174.3 m. 19 pits; fill raised 33 cells up to 5.98 m. D8 + accumulation; largest 944 cells (17.0 sq km). OSM 46 waterways (River Leven, Lothrie, Camby, Back, Bighty, Balbirnie burns). Within 150 m of mapped water (all cells 18.5%): >= 0.45 sq km 185 cells 38.4%; >= 0.9 111 cells 49.5%; >= 1.8 60 cells 66.7%. Lesson family: D8 flow routing, pit filling, flow accumulation, validation.',
    requiredMentions: [
      '38,360',
      'Pitteuchar',
      'Cadham',
      'Tanshall',
      'Rimbleton',
      'Caskieberran',
      'Auchmuty',
      'Lothrie Burn',
      'flow accumulation',
      'D8 algorithm'
    ],
    sources: [
      { claim: 'OpenTopoData API, EU-DEM 25 m dataset (Copernicus EU-DEM v1.1).', url: 'https://www.opentopodata.org/datasets/eudem/' },
      { claim: 'OpenStreetMap waterways around Glenrothes, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas and towns in Fife.', url: 'https://api.postcodes.io/places?q=Pitteuchar' }
    ],
    rejectedClaims: [
      'New-town history or planning claims: not read from a source; not claimed.',
      'Flood risk: the model is not a flood assessment and none is implied.',
      'That unmatched predicted streams are real but unmapped: possible, not claimed.',
      'Third locality in Fife: per NRS mid-2020 figures quoted on the Fife page (Dunfermline 54,990, Kirkcaldy and Dysart 50,370, Glenrothes 38,360).',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
