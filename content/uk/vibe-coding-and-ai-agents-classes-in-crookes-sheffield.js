'use strict';
// Crookes, Sheffield (cg- district page, UK cluster Phase 9, row 478). Keyword slug per the owner's rotation (city suffix),
// with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: does a walking agent need to know about
// hills? (Tobler's hiking function as the agent's cost model: slope-aware walking speed, asymmetric costs, and where a
// better world model changes the prediction more than it changes the plan).
// Data (read 30 September 2026): OpenStreetMap API 0.6, bbox -1.535,53.372,-1.490,53.395 (6 tiles, ODbL): walkable ways,
// main connected piece 11,237 nodes, 12,246 edges, 197.5 km. OpenTopoData eudem25m (Copernicus EU-DEM v1.1): 61 by 52 grid over
// the same box, 82.8 to 263.0 m; node heights by bilinear interpolation, 84.4 to 261.1 m.
// Our run (scratchpad cks/tob.py): Tobler speed = 6 exp(-3.5 |slope + 0.05|) km/h per edge, each direction separately. 300
// random pairs at least 600 m apart (seed 2026). Medians: a flat 5 km/h estimate on the shortest route 22.0 min; Tobler time
// on that same route 24.1 min; Tobler-optimal route 24.0 min. The two agents choose different routes in 37.7% of trips; where
// they differ the hill-aware route saves a median 0.4% (3.4% at the 90th percentile) for 0.3% more distance. Climb on the
// route: median 53 m against 52 m. Going there against coming back: times differ by a median 10.2% (28.8% at the 90th
// percentile). The flat estimate is a median 9.7% below the hill-aware time.
// Lesson family: Tobler's hiking function, slope-aware and direction-dependent edge costs for a route-planning agent.
// Screened: "Tobler", "hiking function" 0 hits anywhere in content/. Cumbernauld owns circuity, Irvine isochrones, Hamilton
// route inspection, St Andrews BFS/DFS; Greenock used an elevation profile for regularisation.
// Place facts: Nomis Census 2021 TS001, 2022 wards: Crookes and Crosspool (E05010863) 17,195. postcodes.io (Sheffield, S10):
// Crookes, Crosspool, Nether Green, Lodge Moor, Sandygate, Tapton Hill suburban areas.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CROOKES', label: 'Crookes', blurb: 'Vibe coding and AI agents classes for Crookes in Sheffield, with a project that gives a walking agent a model of hills and measures what that knowledge is worth.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-crookes-sheffield',
  code: 'cks',
  accent: '#7A3A2A',
  accentRationale: 'Crookes: a burnt sienna (8.52:1 contrast), hand-picked away from the blues, purples and greens of recent pages',
  pageType: 'city',
  place: {
    name: 'Crookes',
    eyebrow: 'Crookes, Sheffield, South Yorkshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Sheffield' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-sheffield', name: 'Sheffield' }],
  nav: [
    { label: 'Sheffield', href: '/best-coding-class-in-sheffield' },
    { label: 'Ecclesall', href: '/best-coding-and-ai-classes-in-ecclesall-sheffield' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Crookes, Sheffield',
  title: 'Vibe Coding and AI Agents Classes in Crookes, Sheffield | 6 to 67',
  description: 'Vibe coding, AI agents and Python taught live online for Crookes, Crosspool, Nether Green and Sandygate learners in Sheffield, ages 6 to 67. Free first lesson.',
  ogDescription: 'Vibe coding and AI agents classes for Crookes, Sheffield, with a project that teaches a route-planning agent about hills using Tobler\'s hiking function.',
  twitterDescription: 'Crookes, Sheffield: vibe coding, AI agents and Python classes online for ages 6 to 67. Free first lesson.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Crookes, Sheffield',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Crookes, Crosspool and west Sheffield, taught live with modelling skills first.'
  },

  h1: 'Vibe coding and AI agents classes in Crookes, Sheffield',
  capsuleQ: 'Where can Crookes learners find the best vibe coding and AI agents classes?',
  capsule: 'Crookes shares a Sheffield council ward with Crosspool, and that ward had 17,195 usual residents at the 2021 census (ONS, via Nomis). Nether Green, Sandygate, Tapton Hill and Lodge Moor are also recorded as suburban areas in the S10 postcode district. Whether the learner is six or 67, vibe coding, AI agents, Python, coding and maths are taught by video call with a tutor in India, in a private lesson or a set of five to ten at the same level. We start with how to build a sensible model of a problem, because an agent is only as good as its picture of the world. There is no fee for the first lesson, and we finish it by suggesting a course. The Crookes project gives a route-planning agent a model of hills, Tobler\'s hiking function, and measures what changes: its routes hardly at all, its time estimates by about a tenth. Beyond the trial it is USD 100 a month for a group place, USD 150 a month one-to-one.',
  lead: 'A walking route planner that treats every street as flat will tell you a trip takes the same time in both directions. Anyone who has walked a steep street knows better. In 1993 the geographer Waldo Tobler published a simple rule for walking speed on a slope: about 5 km/h on the flat, fastest on a gentle downhill, slower the steeper it gets either way. Give an agent that rule and real heights, and its map of the world changes. This project builds two agents for the streets and paths around Crookes, one blind to hills and one that knows them, and compares what each plans and what each predicts.',
  wa: 'Hello Modern Age Coders, we are in Crookes, Sheffield and would like a free vibe coding or AI agents lesson.',

  picks: {
    eyebrow: 'Crookes course picks',
    h2: 'Crookes courses in modelling, vibe coding and agents',
    intro: 'Find the age band that fits. Whichever course it leads to, lesson one is a live session at no charge, and no card details are requested.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: turning "uphill is slower" into a rule a computer can use.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games the learner imagines, an AI helps build and the learner then tries to break.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, among them the hill-aware walking agent.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents, the models of the world they rely on, and how to test both in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Crookes and west Sheffield',
      h2: 'Crookes, Crosspool, Nether Green and Sandygate',
      intro: 'One Census figure for the ward, and the S10 suburbs on record.',
      body: [
        { kind: 'table', caption: 'Crookes and Crosspool ward at the 2021 census (ONS via Nomis)', head: ['Area', 'Usual residents (2021)'], rows: [
          ['Crookes and Crosspool ward, Sheffield', '17,195']
        ] },
        { kind: 'p', text: 'On postcodes.io, Crookes, Crosspool, Nether Green, Lodge Moor, Sandygate and Tapton Hill all appear as suburban areas of Sheffield in S10; we give the ward figure as published and do not say which suburbs fall inside its boundary. Lessons follow the national curriculum used in Sheffield schools, up to GCSE and A level computer science and maths. If you send term dates, holiday weeks are left clear.' },
        { kind: 'callout', h3: 'Sheffield links and why models come first', p: 'The city page is <a class="cg-inline-link" href="/best-coding-class-in-sheffield">coding classes in Sheffield</a>, and the county page is <a class="cg-inline-link" href="/coding-classes-in-south-yorkshire">South Yorkshire</a>. Our argument for understanding before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Crookes project',
      h2: 'A walking agent that knows about hills: Tobler\'s hiking function on Crookes streets',
      intro: 'Same map, same trips, two pictures of the world.',
      body: [
        { kind: 'p', text: 'The learner downloads the walkable streets and paths around Crookes from OpenStreetMap, 197.5 km joined at 11,237 points, and a grid of heights from the European EU-DEM elevation model, which runs from about 83 m to 263 m across the area. Every stretch of path gets a slope in each direction. The flat agent assumes 5 km/h everywhere and plans the shortest route. The hill-aware agent uses Tobler\'s hiking function, in which speed is 6 times e to the power of minus 3.5 times the slope plus 0.05, so a climb and the matching descent cost different times, and plans the quickest route. Both are sent on 300 random trips of at least 600 m.' },
        { kind: 'table', caption: 'Flat agent against hill-aware agent on 300 random walks around Crookes, medians, our Python run on OpenStreetMap and EU-DEM data', head: ['Measure', 'Result'], rows: [
          ['Flat agent\'s time estimate for its route', '22.0 minutes'],
          ['Tobler time for that same route', '24.1 minutes'],
          ['Tobler time for the hill-aware agent\'s route', '24.0 minutes'],
          ['Trips where the two agents pick different routes', '37.7%'],
          ['Time saved on those trips', '0.4% (3.4% for the top tenth)'],
          ['Gap between going there and coming back', '10.2% (28.8% for the top tenth)']
        ] },
        { kind: 'p', text: 'The surprise is how little the plan changes. The hill-aware agent takes a different route on 37.7% of trips, but those routes are typically only 0.4% quicker, because on a hillside most alternatives climb about the same amount: the median climb is 53 m on the shortest route and 52 m on the quickest. What changes is the prediction. The flat agent\'s estimate runs a median 9.7% short, and it cannot see that the same walk takes 10.2% longer one way than the other, or 28.8% for the hilliest tenth of trips. Knowing about hills barely improves where the agent goes and greatly improves what it tells you to expect.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Time a walk up a slope and back down, then invent a rule that would have predicted both.' },
          { h3: 'Ages 11 to 15', p: 'Work out slopes between height points in Python and turn them into walking speeds.' },
          { h3: 'Ages 15 and up', p: 'Build both agents, run 300 trips and explain why plans agree while predictions differ.' }
        ] },
        { kind: 'callout', h3: 'Open map and height data, our agents', p: 'Paths are from OpenStreetMap and its contributors (Open Database Licence). Heights are from Copernicus EU-DEM v1.1 through OpenTopoData; produced using Copernicus data and information funded by the European Union. Tobler\'s rule is a published approximation, not a measurement of anyone\'s walking; the agents and figures are our own.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'World models',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'An agent can choose well and still mislead you about the cost.',
      body: [
        { kind: 'table', caption: 'From the Crookes walking agents to AI agents in general', head: ['On the Crookes hillside', 'In any agent you build or use'], rows: [
          ['Routes changed on 37.7% of trips', 'A richer model changes some decisions'],
          ['Those changes saved only 0.4%', 'Better decisions may be worth little'],
          ['Time estimates were 9.7% short without hills', 'Missing knowledge shows up in predictions'],
          ['There and back differed by 10.2%', 'Real costs are often not symmetric'],
          ['Tobler\'s rule is itself approximate', 'Every world model has limits to state']
        ] },
        { kind: 'p', text: 'When an AI agent plans something for you, a journey, a schedule, a budget, it works from an internal picture of costs. If that picture leaves something out, the plan may still be fine while the promised time or cost is wrong, and the promise is usually what you act on. During vibe coding sessions our Crookes learners tell the AI which real-world effects the program must model, then test its estimates against cases they can check themselves. We introduce agent building after Python has become comfortable, which usually means sixth form age or older, and anything involving Copilot Studio agents is taught privately. Two pages go further: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the agents course for UK students</a>.' },
        { kind: 'p', text: 'Neither OpenStreetMap, OpenTopoData, the Copernicus programme, the ONS nor postcodes.io has any involvement here beyond publishing open data. Responsibility for the agents and any mistakes rests with Modern Age Coders.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From timing a hill to modelling one',
    intro: 'Year group suggests a level. The trial lesson decides it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Rules of thumb, fair timing and turning experience into a rule.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small games and apps, described to an AI and checked by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and modelling', p: 'Slopes, exponentials and route planning, in step with GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Agents and their models', p: 'Planning agents, cost models and testing them, in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and world models',
    h2: 'What is Tobler\'s hiking function, and why would an AI agent need it?',
    intro: 'Tobler\'s hiking function estimates walking speed from slope, about 5 km/h on the flat and slower on steep ground in either direction, and an agent needs a rule like it because a plan built on a flat-world model gives wrong journey times on hills.',
    p1: 'Around Crookes, a hill-aware agent chose a different route from a flat one on 37.7% of 300 trips yet saved a median 0.4%, while the flat agent\'s time estimates ran 9.7% short and missed a 10.2% gap between walking there and walking back.',
    p2: 'Having built both, learners ask any planning agent what its model of the world leaves out, and whether its estimates were ever checked.',
    closer: 'Crookes teenagers who have given an agent a better picture of their own hills know what to demand of AI planners, and they learned it by coding one.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'How lessons reach Crookes',
    intro: 'A home computer, its camera and ordinary broadband cover everything.',
    cells: [
      { h3: 'Whose hands are on the keys', p: 'The learner\'s, always. Tutors watch the shared screen and ask for a prediction before each run.' },
      { h3: 'What the trial is for', p: 'Finding the right first topic, and noting an exam board when one applies.' },
      { h3: 'What the trial costs', p: 'Nothing. It ends with our suggestion of a course.' },
      { h3: 'Who is in a group', p: 'Five to ten learners at one level, from anywhere in the UK.' },
      { h3: 'How often', p: 'Twice a week in term.' },
      { h3: 'When the clocks change', p: 'Our tutors shift; your lesson hour in Sheffield does not.' }
    ],
    spec: { title: 'Why not in person?', p: 'A group works when everyone is at one level and free at one time. Finding that within walking distance is unlikely; finding it across the country is easy.' }
  },

  fees: {
    h2: 'Crookes fees',
    intro: 'One international price list covers every learner outside India, Crookes included.',
    first: 'First lesson: free, with a recommendation at the end.',
    group: 'Group: about eight live lessons a month.',
    private: 'One-to-one: about eight live lessons a month.',
    closer: 'Bills are in US dollars, and there is no sterling version. The first one is raised after the trial, once course and weekly time are settled; the pricing page explains holidays, missed lessons and changes of format.'
  },

  reviewsH2: 'Google reviews from west Sheffield and further afield',

  book: {
    h2: 'Book a free Crookes lesson',
    intro: 'We ask for an age or school year and a hobby. With that we can plan a trial around a hill-timing puzzle, a Scratch game built with an AI, some first Python, or a tiny route planner.',
    success: 'Thanks. Your Crookes request has reached us.'
  },

  faq: {
    h2: 'Crookes questions',
    intro: 'Hills, agents, vibe coding and the practicalities.',
    items: [
      { q: 'How many people live in Crookes?', a: 'There is no separate census figure for Crookes. The Sheffield ward of Crookes and Crosspool had 17,195 usual residents in 2021, according to the ONS.' },
      { q: 'Do you run vibe coding and AI agents classes for Crookes?', a: 'Yes. They are live video lessons, open to ages 6 to 67 in Crookes, Crosspool and the rest of Sheffield.' },
      { q: 'What is a world model in an AI agent?', a: 'The agent\'s internal picture of how actions lead to costs and outcomes. A route planner that ignores hills has a poor world model for Crookes, and its time estimates show it.' },
      { q: 'Why does walking there take a different time from walking back?', a: 'Because a climb one way is a descent the other, and walking speed depends on slope. Around Crookes the two directions differed by a median 10.2% in our test.' },
      { q: 'What is the Crookes project?', a: 'Two route-planning agents on 197.5 km of mapped Crookes paths, one assuming flat ground and one using Tobler\'s hiking function with real heights, compared over 300 trips.' },
      { q: 'What does vibe coding mean in your lessons?', a: 'The learner explains in plain words what a program should do, an AI writes a draft, and the learner tests and corrects it.' },
      { q: 'How old do learners need to be for agent building?', a: 'It depends on Python, not age, but most are sixth form age or older; Copilot Studio agents are private lessons.' },
      { q: 'Is there help for GCSE and A level?', a: 'In computer science and maths, yes. We teach for understanding and make no promises about grades.' },
      { q: 'What will it cost?', a: 'Nothing for the trial. After it, USD 100 each month in a group or USD 150 each month for private lessons.' },
      { q: 'What happens in school holidays?', a: 'Lessons stop. Let us know the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other Sheffield pages',
    html: 'Also in Sheffield is <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-ecclesall-sheffield">Ecclesall</a>, where the project hunts for the fairest meeting point. The <a class="cg-inline-link" href="/best-coding-class-in-sheffield">Sheffield</a> page fits a trend line, and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-rotherham">Rotherham</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-chesterfield">Chesterfield</a> have projects of their own. Start at the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> for anywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Crookes and Sheffield',
  footerPlaces: [
    { href: '/best-coding-class-in-sheffield', label: 'Sheffield' },
    { href: '/coding-classes-in-south-yorkshire', label: 'South Yorkshire' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-cks .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-cks .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.05; }
.cg-root.cg-cks .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-cks .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cks .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-cks .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-cks .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cks .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-cks .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-cks .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Sheffield (E08000019), Crookes and Crosspool ward (E05010863), Census 2021 TS001 usual residents 17,195 (Nomis NM_2021_1, 2022 wards). England national curriculum; GCSE and A level. postcodes.io (Sheffield, S10): Crookes, Crosspool, Nether Green, Lodge Moor, Sandygate, Tapton Hill (suburban areas).',
    localProject: 'OSM API 0.6 bbox -1.535,53.372,-1.490,53.395: walk graph 11,237 nodes, 197.5 km. OpenTopoData eudem25m 61x52 grid, 82.8 to 263.0 m. Tobler 6 exp(-3.5|s+0.05|) km/h per direction. 300 random pairs >= 600 m. Medians: flat estimate 22.0 min, Tobler on shortest route 24.1, Tobler-optimal 24.0; routes differ 37.7%; saving 0.4% (p90 3.4%); climb 53 vs 52 m; there vs back 10.2% (p90 28.8%); flat estimate 9.7% short. Lesson family: Tobler hiking function, slope-aware asymmetric costs for a planning agent.',
    requiredMentions: [
      '17,195',
      '197.5 km',
      'Crosspool',
      'Nether Green',
      'Sandygate',
      'Tapton Hill',
      'Lodge Moor',
      'Tobler',
      'hiking function'
    ],
    sources: [
      { claim: 'OpenStreetMap paths and streets around Crookes, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'OpenTopoData API, EU-DEM 25 m dataset (Copernicus EU-DEM v1.1).', url: 'https://www.opentopodata.org/datasets/eudem/' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis, 2022 wards.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas of Sheffield (S10).', url: 'https://api.postcodes.io/places?q=Crosspool' }
    ],
    rejectedClaims: [
      'A population for Crookes alone: none is published; only the ward figure is given.',
      'That Tobler\'s rule matches real walkers in Crookes: not claimed; stated as a published approximation.',
      'Named streets, steepest-street or highest-suburb claims: none made.',
      'Official journey times: none; all times are model outputs.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
