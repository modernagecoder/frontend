'use strict';
// Hamilton, South Lanarkshire (cg- town page, UK cluster Phase 8, towns band A, row 410). Keyword slug per the owner's
// rotation (-scotland suffix as in the tracker), with the vibe coding / AI agents / how-to-think picks, FAQ and door links.
// Spine: should an AI agent plan the whole job before acting? (route inspection / the Chinese postman problem: an agent that
// must travel every street and return, planned optimally with odd-junction matching versus acting greedily).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map calls over bbox -4.055,55.765,-4.025,55.782 (about 1.9 km by 1.9
// km over central Hamilton) in 4 tiles (ODbL). Drivable streets only (primary to residential and living streets, links;
// private or no-access ways left out), treated as two-way, cut at the rectangle's edge, largest connected piece. After
// merging pass-through points: 453 junctions and dead ends, 545 street segments, 44.82 km of street, 148 dead ends, 420
// junctions with an odd number of streets.
// Our run (scratchpad ham/cpp.py): minimum-weight perfect matching of the 420 odd junctions by shortest-path distance adds
// 22.99 km, so the best closed route is 67.80 km (51.3% more than the streets themselves). A greedy agent (take any
// untravelled street from here; if none, go to the nearest junction that has one; finally return home), 20 random runs:
// mean 80.55 km, range 77.82 to 82.99 km (79.7% overhead). 188 named streets touched the rectangle.
// Lesson family: route inspection (Chinese postman), Euler circuits, odd-degree matching, planning versus greedy agents.
// Screened: "Chinese postman", "route inspection", "Euler circuit", "odd degree" 0 hits; "Eulerian" appears only in course
// syllabus files. Prompt injection is owned by Roosendaal and permissions by Burnley, so neither is used.
// Place facts: NRS mid-2020 localities: Hamilton 54,480. postcodes.io (South Lanarkshire, ML3) suburban areas: Burnbank,
// Eddlewood, Fairhill, Hillhouse, Laighstonehall, Low Waters, Silvertonhill, Whitehill, Earnock, Meikle Earnock, Udston;
// Ferniegair village.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HAMILTON', label: 'Hamilton', blurb: 'Vibe coding and AI agents classes for Hamilton in South Lanarkshire, with a project where an agent must travel every street in the town centre and learns why planning beats improvising.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-hamilton-scotland',
  code: 'hms',
  accent: '#6B1C10',
  accentRationale: 'Hamilton: a deep rust red (9.41:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Hamilton',
    eyebrow: 'Hamilton, South Lanarkshire, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'South Lanarkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'South Lanarkshire', href: '/coding-classes-in-south-lanarkshire' },
    { label: 'East Kilbride', href: '/ai-and-programming-classes-in-east-kilbride' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Hamilton, Scotland',
  title: 'Vibe Coding and AI Agents Classes in Hamilton | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents and Python lessons for Hamilton, Burnbank, Eddlewood and Silvertonhill learners in Lanarkshire, aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Hamilton, South Lanarkshire, with a project where an agent must cover every street and learns to plan first.',
  twitterDescription: 'Hamilton, Lanarkshire: vibe coding, AI agents and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Hamilton, South Lanarkshire',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Hamilton and South Lanarkshire, taught live with planning skills first.'
  },

  h1: 'Vibe coding and AI agents classes in Hamilton',
  capsuleQ: 'Where can Hamilton learners find the best vibe coding and AI agents classes?',
  capsule: 'Hamilton\'s locality held an estimated 54,480 people in mid-2020, according to National Records of Scotland, making it the second largest in South Lanarkshire. Burnbank, Eddlewood, Silvertonhill, Laighstonehall, Whitehill and Low Waters are among the suburbs listed in the ML3 district. Vibe coding, AI agents, Python, coding and maths are taught to anyone from six to 67 by our tutors in India over live video, as private lessons or in a group of five to ten matched by level. Planning and reasoning come before tools, so a learner can tell when an agent is improvising badly. We give the first session free and name the course that suits at the end. In the Hamilton project an agent must drive every one of 44.82 km of streets in the town centre and get home, and we measure how much planning ahead saves. Group lessons then cost USD 100 per month, private lessons USD 150 per month.',
  lead: 'Some jobs mean visiting every street rather than reaching one place: a survey vehicle photographing roads, a delivery round, a robot checking pavements. An AI agent given such a job can simply act, taking whichever untravelled street is nearest, or it can plan the whole route first. Mathematicians solved the planning version long ago. It is called the route inspection problem, or the Chinese postman problem, after the Chinese mathematician Kwan Mei-Ko who studied it. This project hands both kinds of agent the drivable streets of central Hamilton, as mapped on OpenStreetMap, and compares the distances they cover.',
  wa: 'Hello Modern Age Coders, could we book a free vibe coding or AI agents lesson for a learner in Hamilton, South Lanarkshire?',

  picks: {
    eyebrow: 'Hamilton course picks',
    h2: 'Hamilton courses in planning, vibe coding and agents',
    intro: 'Match a course to the learner\'s age. Lesson one is always live and free, and no card is taken.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: tracing routes, drawing without lifting the pen and planning before moving.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games dreamed up by the learner, coded with an AI and tested hard.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the street-covering agent.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents that plan, act and check, built in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Hamilton and South Lanarkshire',
      h2: 'Hamilton, Burnbank, Eddlewood and Silvertonhill',
      intro: 'The NRS estimate for Hamilton, and suburbs recorded in the ML3 postcode district.',
      body: [
        { kind: 'table', caption: 'Hamilton in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['Hamilton locality, mid-2020', '54,480']
        ] },
        { kind: 'p', text: 'Postcodes.io records Burnbank, Eddlewood, Fairhill, Hillhouse, Laighstonehall, Low Waters, Silvertonhill, Whitehill, Earnock, Meikle Earnock and Udston as suburban areas of South Lanarkshire in ML3, and Ferniegair as a village. Lanarkshire schools work to the Curriculum for Excellence, and our lessons use the same primary and secondary years and SQA levels, from National 5 upward. Tell us your holiday weeks and lessons will skip them.' },
        { kind: 'callout', h3: 'South Lanarkshire, Glasgow and exam help', p: 'More is on <a class="cg-inline-link" href="/coding-classes-in-south-lanarkshire">coding classes in South Lanarkshire</a>, <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> and <a class="cg-inline-link" href="/national-5-maths-tuition-online">National 5 Maths tuition</a>. Our reasons for teaching thinking first are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Hamilton project',
      h2: 'An agent that must travel every street: the Chinese postman problem in central Hamilton',
      intro: 'Map the streets, find the junctions that force repeats, and race a planner against an improviser.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data for a rectangle about 1.9 km across over central Hamilton and keeps the drivable streets inside it, treating each as two-way and cutting any that cross the edge. Joining up the points where a street merely bends leaves 453 junctions and dead ends linked by 545 street segments, 44.82 km in total. The agent starts at one junction, must travel every segment at least once, and must finish where it began.' },
        { kind: 'p', text: 'A route that never repeats a street exists only if every junction has an even number of streets, so that each arrival can be matched with a departure. Here 420 junctions are odd, including 148 dead ends, where the only way out is back the way you came. The planner pairs the odd junctions up so that the total distance between partners is as small as possible, a step called minimum-weight matching, and repeats exactly those connecting stretches. The greedy agent does no planning: it takes any street it has not yet driven and, when stuck, heads for the nearest junction that still has one.' },
        { kind: 'table', caption: 'Covering every drivable street in central Hamilton and returning, our Python run on OpenStreetMap data', head: ['Agent', 'Distance driven', 'Extra over the 44.82 km of streets'], rows: [
          ['Planned route (Chinese postman)', '67.80 km', '51.3%'],
          ['Greedy agent, average of 20 runs', '80.55 km', '79.7%'],
          ['Greedy agent, shortest of 20 runs', '77.82 km', '73.6%']
        ] },
        { kind: 'p', text: 'Even the perfect plan drives 22.99 km twice, because so many streets end in cul-de-sacs or at the rectangle\'s edge. The greedy agent drives about 12.75 km more than that on average, and never came within 10 km of the plan in 20 attempts. Its early choices feel efficient, yet they leave scattered unfinished streets that it must later cross town to reach. Planning cost a few lines of code and a matching step; improvising cost nearly 19% more driving.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Try to draw shapes without lifting the pencil or retracing a line, and find the rule for when it is possible.' },
          { h3: 'S1 to S3', p: 'Count the odd junctions on a small Hamilton street map in Python and predict whether a no-repeat route exists.' },
          { h3: 'S4 and up', p: 'Code the matching, build the optimal route and pit it against a greedy agent over many runs.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap streets, our agents', p: 'Street data is from OpenStreetMap and its contributors under the Open Database Licence. One-way rules and access restrictions beyond private roads are ignored; the rectangle, the agents and every distance are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Planning agents',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Short-sighted steps add up to a long way round.',
      body: [
        { kind: 'table', caption: 'From the Hamilton street agent to real AI agents', head: ['In the route project', 'When an AI agent tackles a task'], rows: [
          ['420 odd junctions forced repeats', 'Some cost is unavoidable; know how much'],
          ['The plan drove 67.80 km', 'A global plan can be computed before acting'],
          ['Greedy averaged 80.55 km', 'Step-by-step choices can add up badly'],
          ['Greedy never got within 10 km', 'Running it more often did not fix it'],
          ['Edges of the map made dead ends', 'Limits of the data shape the result']
        ] },
        { kind: 'p', text: 'Many AI agents work step by step: look at the situation, pick the next action, repeat. That suits open-ended tasks, but when the whole job is known in advance a planner can do far better, and the agent should be asked to make a plan and show it first. In vibe coding the learner describes a program for an AI to write; our Hamilton learners also ask for the plan before the code and judge it before a line is run. Agents that act on your behalf, booking, sending or deleting, need that step most. Learners start building agents once Python is second nature, mostly in the upper secondary years or as adults, and Copilot Studio agents are private lessons only. Our <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> page explains the thinking; <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the UK agents pathway</a> lays out the steps.' },
        { kind: 'p', text: 'OpenStreetMap, National Records of Scotland and postcodes.io did not review this page; we simply used their open data, and the two agents and any errors belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From pencil puzzles to planning agents',
    intro: 'We begin from the school year and let the trial adjust it.',
    cols: [
      { band: 'Primary years', h3: 'How to think', p: 'Routes, puzzles and planning before moving.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Apps and games made with AI help, planned and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and graphs', p: 'Networks, shortest paths and agents, alongside SQA Maths and Computing Science.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Agents that plan', p: 'Planning, tool use and checking, built as Python agents.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and planning',
    h2: 'Why should an AI agent plan before it acts?',
    intro: 'When the whole task is known in advance, planning finds a solution that step-by-step choices usually miss, because greedy moves that look good now create costly detours later.',
    p1: 'Covering all 44.82 km of drivable streets in central Hamilton, a planned Chinese postman route drove 67.80 km while a greedy agent averaged 80.55 km over 20 runs.',
    p2: 'Learners who have raced the two ask of any AI agent: did it make a plan, and can I see it before it starts?',
    closer: 'A Hamilton teenager who demands to see the plan first stays the one in charge, and writing code is where that instinct is trained.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Lessons across Hamilton, all on video',
    intro: 'Kit list: a computer with a webcam, and internet steady enough to stream.',
    cells: [
      { h3: 'Learner in control', p: 'Students write, prompt and run everything while the tutor follows the shared screen and asks for their plan.' },
      { h3: 'Level from the trial', p: 'The free lesson shows where to begin; SQA courses are written down if relevant.' },
      { h3: 'Opening lesson free', p: 'No fee for the first session, which ends with a suggested course.' },
      { h3: 'Classes by level', p: 'Each class is five to ten UK learners at one stage.' },
      { h3: 'Two lessons a week', p: 'No lessons in school holidays.' },
      { h3: 'Reliable slot', p: 'UK clock changes are absorbed by our tutors; your time stays fixed.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, all free on one evening, are unlikely to be neighbours. Online, they do not have to be.' }
  },

  fees: {
    h2: 'Hamilton fees',
    intro: 'Learners in Hamilton pay our international rates, the ones for every country outside India.',
    first: 'A full free lesson, then a recommendation.',
    group: 'About eight live group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Fees are quoted in US dollars with no pound equivalent, and the first bill follows the trial only once a course and a regular time are agreed. See the pricing page for holiday weeks, absences and moving from class to private tuition or back.'
  },

  reviewsH2: 'South Lanarkshire families and learners elsewhere in the UK, on Google',

  book: {
    h2: 'Book a free Hamilton lesson',
    intro: 'Tell us an age or school year and something the learner enjoys. We might start with a no-lift drawing puzzle, a Scratch game planned with an AI, some first Python, or a route-planning challenge on a real map.',
    success: 'Thank you. Your Hamilton request has arrived.'
  },

  faq: {
    h2: 'Hamilton questions',
    intro: 'Route planning, the street agent, vibe coding, Python and the practical side.',
    items: [
      { q: 'What is the population of Hamilton, South Lanarkshire?', a: 'National Records of Scotland estimated 54,480 people in the Hamilton locality in mid-2020.' },
      { q: 'Are vibe coding and AI agents classes available online in Hamilton?', a: 'Yes, as live video lessons for ages 6 to 67 in Hamilton and across South Lanarkshire.' },
      { q: 'What is the Chinese postman problem?', a: 'Finding the shortest closed route that travels every street at least once. It is solved by pairing up junctions with an odd number of streets and repeating the shortest links between each pair.' },
      { q: 'What is a greedy algorithm?', a: 'A method that grabs whatever looks most attractive at each step, with no look-ahead. It is quick and simple, yet its total can end up far from the optimum.' },
      { q: 'What happens in the Hamilton project?', a: 'An agent must cover all 44.82 km of drivable streets in central Hamilton and return; a planned route needs 67.80 km and a greedy agent about 80.55 km.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, for every age, with the learner planning the program and checking what the AI writes.' },
      { q: 'When can learners build AI agents?', a: 'Once Python stops being a struggle, which is usually S4 upwards or adulthood; Copilot Studio work is private tuition.' },
      { q: 'Do you teach towards SQA exams?', a: 'Maths and Computing Science from National 5 up, taught for genuine understanding, with no grade guarantees.' },
      { q: 'What do lessons cost?', a: 'Lesson one is free. Ongoing classes are USD 100 per month, or USD 150 per month for one-to-one.' },
      { q: 'Are lessons held in the holidays?', a: 'No, they pause for school holidays; send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Lanarkshire and central Scotland pages',
    html: 'Pages with their own projects: <a class="cg-inline-link" href="/ai-and-programming-classes-in-east-kilbride">East Kilbride</a> (spotting roundabouts), <a class="cg-inline-link" href="/coding-classes-in-south-lanarkshire">South Lanarkshire</a>, <a class="cg-inline-link" href="/coding-classes-in-north-lanarkshire">North Lanarkshire</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-livingston">Livingston</a>. Everything else starts at the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hamilton and South Lanarkshire',
  footerPlaces: [
    { href: '/coding-classes-in-south-lanarkshire', label: 'South Lanarkshire' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hms .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-hms .cg-hero h1 { font-weight: 790; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-hms .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-hms .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hms .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.02em; }
.cg-root.cg-hms .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-hms .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hms .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-hms .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-hms .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'South Lanarkshire (S12000029). Scotland: Curriculum for Excellence, SQA National 5 upward. NRS mid-2020 settlement and locality estimates: Hamilton 54,480. postcodes.io (South Lanarkshire, ML3): Burnbank, Eddlewood, Fairhill, Hillhouse, Laighstonehall, Low Waters, Silvertonhill, Whitehill, Earnock, Meikle Earnock, Udston (suburban areas); Ferniegair (village).',
    localProject: 'OSM API 0.6 bbox -4.055,55.765,-4.025,55.782 (4 tiles), drivable streets, two-way, cut at edge: 453 junctions, 545 segments, 44.82 km, 148 dead ends, 420 odd junctions. Min-weight matching adds 22.99 km: optimal closed route 67.80 km (+51.3%). Greedy agent 20 runs mean 80.55 km (+79.7%), range 77.82 to 82.99. Lesson family: route inspection (Chinese postman), Euler circuits, planning vs greedy agents.',
    requiredMentions: [
      '54,480',
      '44.82 km',
      'Burnbank',
      'Eddlewood',
      'Silvertonhill',
      'Laighstonehall',
      'Low Waters',
      'Chinese postman',
      'route inspection'
    ],
    sources: [
      { claim: 'OpenStreetMap map data for central Hamilton, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas in South Lanarkshire.', url: 'https://api.postcodes.io/places?q=Burnbank' }
    ],
    rejectedClaims: [
      'Palace, racecourse or mausoleum history: not read from a source; not claimed.',
      'Real council, gritting or delivery routes: none modelled or claimed; the agents are ours.',
      'One-way streets: ignored in the model and said so on the page.',
      'Second largest locality in South Lanarkshire: per NRS mid-2020 figures quoted on the South Lanarkshire page (East Kilbride 75,310, Hamilton 54,480).',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
