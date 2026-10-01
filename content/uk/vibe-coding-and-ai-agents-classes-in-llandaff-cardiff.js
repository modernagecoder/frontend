'use strict';
// Llandaff, Cardiff (cg- district page, UK cluster Phase 9, row 474). Keyword slug per the owner's rotation with a city
// suffix, and the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: what can an agent actually see
// from where it stands, and where should a team of agents stand to see the most? (isovists: line-of-sight tests against
// building walls; greedy placement for maximum coverage against random placement).
// Data (read 30 September 2026): OpenStreetMap API 0.6 map calls over bbox -3.232,51.488,-3.205,51.503 in 4 tiles (ODbL):
// 2,569 mapped buildings (19,452 wall segments) and the public streets and paths.
// Our run (scratchpad lld/vis.py): 2,248 sample points on streets and paths, about 20 m apart, at least 80 m inside the
// rectangle. Two points see each other if they are within 120 m and the straight line between them crosses no building
// wall (trees, walls, slopes and parked vehicles are not modelled). Points seen by one observer: median 27, tenth
// percentile 9, ninetieth 51, maximum 80; median share of the points within 120 m that are visible 66.7%. Greedy placement
// (always add the observer that sees the most not-yet-seen points): 1 observer 80 points (3.6%); 3 216 (9.6%); 5 325
// (14.5%); 10 583 (25.9%); 20 986 (43.9%). Random placement, median of 200 draws: 5 observers 6.2%; 10 11.7%; 20 22.1%.
// Lesson family: isovists / visibility by ray casting, and greedy maximum coverage for placing observer agents. Screened:
// "isovist", "visibility polygon", "sensor placement", "maximum coverage" 0 hits anywhere in content/; Durham owns
// terrain viewsheds with Bresenham lines on a height grid, a different method and object.
// Place facts: Nomis Census 2021 TS001, 2022 wards: Llandaff 8,776; Llandaff North 8,425. postcodes.io places: Llandaff
// (CF5) and Llandaff North (CF14), suburban areas of Cardiff; CF5 2ED resolves to Llandaff ward and community.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'LLANDAFF', label: 'Llandaff, Cardiff', blurb: 'Vibe coding and AI agents classes for Llandaff in Cardiff, with a project on what an agent can see from the street and where a team of agents should stand.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-llandaff-cardiff',
  code: 'lld',
  accent: '#7A1F4A',
  accentRationale: 'Llandaff: a deep mulberry (9.89:1 contrast), picked by hand to differ in hue from recent pages',
  pageType: 'city',
  place: {
    name: 'Llandaff',
    eyebrow: 'Llandaff, Cardiff, Wales',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Cardiff' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-cardiff', name: 'Cardiff' }],
  nav: [
    { label: 'Cardiff', href: '/best-coding-class-in-cardiff' },
    { label: 'Roath', href: '/best-coding-and-ai-classes-in-roath-cardiff' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Llandaff, Cardiff',
  title: 'Vibe Coding and AI Agents Classes in Llandaff, Cardiff | 6 to 67',
  description: 'Live online vibe coding, AI agents and Python lessons for Llandaff and Llandaff North learners in Cardiff, aged 6 to 67, with WJEC support. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Llandaff, Cardiff, with a project on what an agent can see from the street and where a team should stand.',
  twitterDescription: 'Llandaff, Cardiff: vibe coding, AI agents and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Llandaff, Cardiff',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Llandaff and across Cardiff, taught live with spatial reasoning first.'
  },

  h1: 'Vibe coding and AI agents classes in Llandaff, Cardiff',
  capsuleQ: 'Where can Llandaff learners find the best vibe coding and AI agents classes?',
  capsule: 'Llandaff ward in Cardiff counted 8,776 usual residents at the 2021 census, and the separate Llandaff North ward 8,425, on Nomis figures for 2022 ward boundaries. Both names are also recorded as suburban areas of the city. From age six to 67, learners here study vibe coding, AI agents, Python, coding and maths in live video lessons with tutors who teach from India, in a private slot or a class of five to ten at one stage. We teach reasoning about what a program can and cannot know before any tool, so learners can judge what an agent is working from. The opening lesson is free and ends with a suggested course. The Llandaff project asks what an agent standing in the street can see past the buildings, then where a team of agents should stand to see the most. Afterwards a class place costs USD 100 a month and private lessons USD 150 a month.',
  lead: 'A robot, a drone or a camera only knows about the part of the world it can see, and buildings get in the way. The patch visible from one spot has a name borrowed from architecture: an isovist. Working it out is a matter of geometry, drawing straight lines from the observer and checking whether any wall crosses them. Once a program can do that for one position, a harder question opens up: given only a few agents, where should they stand so that together they see as much as possible? This project answers both for the streets of Llandaff, using the buildings mapped on OpenStreetMap as the walls.',
  wa: 'Hello Modern Age Coders, could we book a free vibe coding or AI agents lesson for a learner in Llandaff, Cardiff?',

  picks: {
    eyebrow: 'Llandaff course picks',
    h2: 'Llandaff courses in thinking, vibe coding and agents',
    intro: 'Four ways to begin, by age. Whichever suits, lesson one is live and free, with no card details taken.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: what can you see from here, what is hidden, and how do you know?' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games imagined by the learner, coded with an AI and checked piece by piece.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the line-of-sight agents on Llandaff streets.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents that perceive, plan and act, and the limits of what they can observe.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Llandaff and Cardiff',
      h2: 'Llandaff and Llandaff North in the census',
      intro: 'Two Cardiff wards that carry the name, counted separately.',
      body: [
        { kind: 'table', caption: 'Census 2021 usual residents, 2022 wards, via Nomis', head: ['Ward', 'Residents (2021)'], rows: [
          ['Llandaff', '8,776'],
          ['Llandaff North', '8,425']
        ] },
        { kind: 'p', text: 'These are two separate wards and the figures are not combined. Postcodes.io lists Llandaff (CF5) and Llandaff North (CF14) as suburban areas of Cardiff, and a postcode in the middle of our study rectangle, CF5 2ED, resolves to Llandaff ward. Schools here teach the Curriculum for Wales across Years 1 to 13. Send us your school holiday dates and no lesson will be booked inside them.' },
        { kind: 'callout', h3: 'Cardiff, Roath and WJEC support', p: 'More is on <a class="cg-inline-link" href="/best-coding-class-in-cardiff">the Cardiff page</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-roath-cardiff">Roath</a> and <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC GCSE Digital Technology help</a>. Our reasons for teaching thinking before tools are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Llandaff project',
      h2: 'What can an agent see? Isovists on Llandaff\'s streets, and where to post a team',
      intro: 'Buildings as walls, 2,248 places to stand, and a contest between careful and careless placement.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data for a rectangle over Llandaff: 2,569 buildings, whose outlines give 19,452 wall segments, plus the streets and paths. Python marks 2,248 points along those streets and paths, roughly 20 m apart. Two points can see each other if they are no more than 120 m apart and the straight line between them crosses no building wall. That test, repeated for every nearby pair, gives each point its isovist: the set of other street points it can see.' },
        { kind: 'p', text: 'From a typical point an observer sees 27 others, about two thirds of those within range. The spread is wide: one point in ten sees 9 or fewer, one in ten sees 51 or more, and the single most open spot sees 80. Then comes the team question. A greedy planner posts agents one at a time, always choosing the spot that adds the most street points nobody on the team can see yet. A careless planner posts them at random.' },
        { kind: 'table', caption: 'Share of Llandaff\'s 2,248 street points seen by a team of observers, our Python run on OpenStreetMap data', head: ['Observers', 'Placed greedily', 'Placed at random (median of 200 tries)'], rows: [
          ['1', '3.6%', 'Not run'],
          ['5', '14.5%', '6.2%'],
          ['10', '25.9%', '11.7%'],
          ['20', '43.9%', '22.1%']
        ] },
        { kind: 'p', text: 'Careful placement sees about twice as much as random placement at every team size: ten well-placed observers cover more than twenty careless ones. Even so, twenty agents see under half the streets, because 120 m is a short reach and corners hide a great deal. The model is also generous. It knows nothing of trees, garden walls, slopes or parked vans, so real visibility would be lower. Greedy placement is not guaranteed to be the perfect arrangement either, only a good one that is quick to compute.' },
        { kind: 'grid3', cells: [
          { h3: 'Years 3 to 6', p: 'Stand toy figures on a model street and mark what each can see past the box buildings.' },
          { h3: 'Years 7 to 9', p: 'Test in Python whether the line between two Llandaff street points crosses a building wall.' },
          { h3: 'Years 10 and up', p: 'Compute isovists for every point, then place a team greedily and compare with random placement.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap buildings, our sight lines', p: 'Buildings, streets and paths are from OpenStreetMap and its contributors under the Open Database Licence. The sample points, the 120 m limit, the sight-line tests and every percentage are our own work. This is a geometry exercise about imaginary observers, not a plan for cameras or surveillance.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents and perception',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'An agent can only reason about what reaches it.',
      body: [
        { kind: 'table', caption: 'From the Llandaff sight lines to real AI agents', head: ['In the visibility project', 'When you build or use an agent'], rows: [
          ['A typical point saw 27 others', 'Every agent has a limited view'],
          ['Some points saw 9, some 80', 'Where an agent sits changes what it knows'],
          ['Greedy placement doubled coverage', 'Choosing what to observe is worth planning'],
          ['20 agents still saw under half', 'More agents do not remove blind spots'],
          ['Trees and slopes were ignored', 'A model of the world is simpler than the world']
        ] },
        { kind: 'p', text: 'Software agents have isovists too. A coding agent sees only the files it was shown; a chatbot sees only the text in its context; a research agent sees only the pages it opened. Its answers can be confident and still miss whatever sat round the corner. Vibe coding means describing a program while an AI writes it, and our Llandaff learners make a habit of asking what the AI was given to look at before judging what it produced. Agent projects begin when a learner can build small Python programs alone, usually from Year 11 or as an adult, and Copilot Studio agents are private lessons only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, Nomis, the Office for National Statistics and postcodes.io publish the open data used here and have no connection with us. The model and its mistakes are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From toy streets to agents that perceive',
    intro: 'The Welsh school year is our first guess at a level, and the trial lesson checks it.',
    cols: [
      { band: 'Years 1 to 6', h3: 'How to think', p: 'Seen and hidden, points of view and testing a hunch.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with an AI and checked by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and geometry', p: 'Lines, intersections and simulations next to WJEC GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Agents and perception', p: 'What agents observe, how they plan, and building them in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and sight',
    h2: 'What is an isovist, and how does an AI agent work out what it can see?',
    intro: 'An isovist is the area visible from one point; an agent computes it by casting straight lines outward and cutting each one off where it first meets a wall.',
    p1: 'On Llandaff\'s streets, with 2,569 mapped buildings as walls and a 120 m reach, a typical point saw 27 of its neighbours, and ten observers placed greedily saw 25.9% of all street points against 11.7% for ten placed at random.',
    p2: 'Learners who have built this ask of any agent: what could it actually see when it decided, and what was out of view?',
    closer: 'A Llandaff teenager who has coded an agent\'s field of view understands why an AI can be sure and wrong at once, and that understanding comes from building, not from prompting.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Lessons for Llandaff, by video',
    intro: 'One computer with a camera and a connection that streams video is the full equipment list.',
    cells: [
      { h3: 'Learner-built', p: 'The student writes and runs every line. The tutor follows on a shared screen and asks what the program can and cannot see.' },
      { h3: 'Trial first', p: 'A free session shows what the learner already knows, and any WJEC course goes on the plan.' },
      { h3: 'No charge to start', p: 'The first lesson is free and closes with a course we would suggest.' },
      { h3: 'Classes at one level', p: 'Groups hold five to ten learners from around Britain, matched by stage.' },
      { h3: 'Twice a week', p: 'School holidays are left clear.' },
      { h3: 'Unmoving hour', p: 'UK clock changes are handled on the tutor\'s side.' }
    ],
    spec: { title: 'Why online', p: 'Finding five learners at one stage who are free on the same evening within one ward is unlikely. A video class draws them from everywhere.' }
  },

  fees: {
    h2: 'Llandaff fees',
    intro: 'Llandaff families are charged our international rate, the one that applies everywhere but India.',
    first: 'A complete lesson without charge, followed by our advice.',
    group: 'Around eight live lessons each month in a small class.',
    private: 'Around eight live private lessons each month.',
    closer: 'All prices are in US dollars and none in pounds. Billing begins after the trial has agreed a course and a regular slot, and the pricing page explains holiday breaks, missed lessons and moving between class and private tuition.'
  },

  reviewsH2: 'Google reviews from Cardiff parents and learners elsewhere in Britain',

  book: {
    h2: 'Book a free Llandaff lesson',
    intro: 'Share an age or Year group and whatever the learner is keen on. The trial may be a what-can-you-see puzzle with toy buildings, a Scratch game made alongside an AI, a first Python program, or a sight-line test on a real street map.',
    success: 'Thank you. We have your Llandaff request.'
  },

  faq: {
    h2: 'Llandaff questions',
    intro: 'Sight lines, observer agents, vibe coding, Python and how lessons are arranged.',
    items: [
      { q: 'How many people live in Llandaff?', a: 'Llandaff ward had 8,776 usual residents at the 2021 census. Llandaff North is a separate ward with 8,425.' },
      { q: 'Are vibe coding and AI agents classes available online in Llandaff?', a: 'Yes. They run as live video lessons for ages 6 to 67 in Llandaff, Llandaff North and the rest of Cardiff.' },
      { q: 'What is ray casting?', a: 'Sending an imaginary straight line from a point and finding the first thing it hits. It is how programs test what is visible, and how some early 3D games drew their view.' },
      { q: 'What is a greedy algorithm for placing observers?', a: 'Add one observer at a time, each time choosing the spot that sees the most ground not yet covered. In our Llandaff test it roughly doubled what random placement saw.' },
      { q: 'What does the Llandaff project involve?', a: 'Testing sight lines between 2,248 street points past 2,569 mapped buildings, then placing teams of observer agents greedily and at random to compare coverage.' },
      { q: 'Is vibe coding taught?', a: 'Yes, to all ages. Learners explain what they want built, then check and correct what the AI produces.' },
      { q: 'When can a learner build AI agents?', a: 'When they can write small Python programs alone, usually from Year 11 or as adults. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Do you support WJEC courses?', a: 'Yes: GCSE and A level Computer Science, GCSE Digital Technology and Maths, taught so the ideas make sense. We promise no grades.' },
      { q: 'What do lessons cost?', a: 'The trial is free. Continuing costs USD 100 a month in a class or USD 150 a month one-to-one.' },
      { q: 'Are there lessons in school holidays?', a: 'No. Send us the dates and we plan around them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other Cardiff and south Wales pages',
    html: 'A different experiment on each: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-roath-cardiff">Roath</a> (outlining a shopping area), <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a>, <a class="cg-inline-link" href="/coding-classes-in-vale-of-glamorgan">the Vale of Glamorgan</a> and <a class="cg-inline-link" href="/best-coding-class-in-newport-wales">Newport</a>. Go via the <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales guide</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> for anywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Llandaff and Cardiff',
  footerPlaces: [
    { href: '/best-coding-class-in-cardiff', label: 'Cardiff' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-lld .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-lld .cg-hero h1 { font-weight: 760; letter-spacing: -0.027em; line-height: 1.05; }
.cg-root.cg-lld .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-lld .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lld .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-lld .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-lld .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lld .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-lld .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-lld .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Cardiff (W06000015). Wales: Curriculum for Wales, Years 1 to 13, WJEC GCSE and A level. Nomis Census 2021 TS001, 2022 wards: Llandaff 8,776; Llandaff North 8,425. postcodes.io places: Llandaff (CF5) and Llandaff North (CF14), suburban areas of Cardiff; CF5 2ED resolves to Llandaff ward.',
    localProject: 'OSM API 0.6 bbox -3.232,51.488,-3.205,51.503 (4 tiles): 2,569 buildings (19,452 wall segments); 2,248 street/path sample points about 20 m apart. Sight line within 120 m crossing no wall. Points seen: median 27, p10 9, p90 51, max 80; median visible share 66.7%. Greedy coverage 1/5/10/20 observers: 3.6 / 14.5 / 25.9 / 43.9%; random median 5/10/20: 6.2 / 11.7 / 22.1%. Lesson family: isovists, ray casting, greedy maximum coverage.',
    requiredMentions: [
      '8,776',
      '8,425',
      '2,569',
      '2,248',
      'Llandaff North',
      'CF5 2ED',
      'isovist',
      '19,452',
      '25.9%'
    ],
    sources: [
      { claim: 'OpenStreetMap buildings, streets and paths in Llandaff, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'Nomis Census 2021 TS001 usual residents by 2022 ward, Cardiff.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and postcode lookup: Llandaff, Llandaff North; CF5 2ED in Llandaff ward.', url: 'https://api.postcodes.io/places?q=Llandaff' }
    ],
    rejectedClaims: [
      'Cathedral, village or river history: not read from a source; not claimed.',
      'Real camera, policing or surveillance coverage: not modelled or implied; observers are imaginary.',
      'That greedy placement is optimal: stated as good but not guaranteed.',
      'Sum of the two wards: separate wards, not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
