'use strict';
// Dungannon (cg- town page, UK cluster Phase 8, towns band A, row 434). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: what should an AI agent do when its plan breaks
// halfway? (a driving agent meets a closed road: full replanning against local plan repair against knowing in advance;
// cost in extra distance, cost in search effort, and goals that become unreachable).
// Data (read 29 September 2026): OpenStreetMap API 0.6 over bbox -6.810,54.485,-6.735,54.525 in 6 tiles (ODbL). Public
// drivable roads (trunk to living street and links; private or no-access ways left out), inside the box, largest
// connected piece: 105.0 km, simplified to 972 junctions and 1,043 segments.
// Our run (scratchpad dgn/rep.py): random start and destination at least 800 m apart by road; one segment on the planned
// route (not the first or last) is closed, and the agent only learns of it on arrival. 383 trips drawn: in 83 the closure
// left no route inside the rectangle; the other 300 are scored. Against the route the agent would have driven had it known
// in advance: full replan from the closure median +8.3% (90th percentile +45.4%); local repair (detour from the closure to
// the nearest later point of the old route, then follow it) median +10.4% (90th percentile +49.5%), within 1% of the full
// replan in 78.7% of trips. Junctions examined at the closure (median): full replan 403, local repair 117 (the first plan
// examined 476.5).
// Lesson family: dynamic replanning and plan repair for an acting agent, detecting an unreachable goal. Screened:
// "replanning", "plan repair", "dynamic replanning", "road closure" 0 hits in content/uk, nl, ie (replanning appears only
// in a course syllabus). St Andrews owns BFS/DFS exploration and Hamilton the Chinese postman route on the same kind of
// data.
// Place facts: NISRA Census 2021 MS-A01 (usual residents): Dungannon settlement 16,282; Dungannon DEA 25,640; Mid Ulster LGD
// 150,293 (Coalisland settlement 6,349 is registered by the Mid Ulster page). Wards: Ballysaggart 5,062, Killymeal 5,003,
// Mullaghmore 4,408, Moygashel 3,606 (Nominatim places each in Dungannon or Mid-Ulster). OSM place nodes in the box:
// Granville (village), Lardan (locality). No Plantation, transfer test or identity content.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'DUNGANNON', label: 'Dungannon', blurb: 'Vibe coding and AI agents classes for Dungannon, with a project where a driving agent meets a closed road and must decide how to recover.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-dungannon',
  code: 'dgn',
  accent: '#A0461F',
  accentRationale: 'Dungannon: a warm terracotta (5.84:1 on paper), chosen by hand to stand apart from the purples, navies and greens of recent pages',
  pageType: 'city',
  place: {
    name: 'Dungannon',
    eyebrow: 'Dungannon, County Tyrone, Northern Ireland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Mid Ulster' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Mid Ulster', href: '/coding-classes-in-mid-ulster' },
    { label: 'Armagh', href: '/best-coding-class-in-armagh' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Dungannon, Northern Ireland',
  title: 'Vibe Coding and AI Agents Classes in Dungannon | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents and Python lessons for Dungannon, Ballysaggart, Killymeal and Moygashel learners in Tyrone, aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Dungannon, with a project where an agent driving the town\'s roads hits a closure and must replan or repair.',
  twitterDescription: 'Dungannon vibe coding, AI agents and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Dungannon',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Dungannon and Mid Ulster, taught live with planning and recovery skills first.'
  },

  h1: 'Vibe coding and AI agents classes in Dungannon',
  capsuleQ: 'Where can Dungannon learners find the best vibe coding and AI agents classes?',
  capsule: 'Dungannon town had 16,282 people usually resident on census day 2021, NISRA reports, and the wider Dungannon electoral area of Mid Ulster held 25,640. Ballysaggart, Killymeal, Mullaghmore and Moygashel are among the census wards around the town. Our tutors in India teach vibe coding, AI agents, Python, coding and maths on camera to anyone from six to 67, privately or in a class of five to ten matched by stage. We start with reasoning, so a learner can spot an agent carrying on with a plan that no longer works. Lesson one is free, and by the end of it we suggest which course suits. In the Dungannon project an agent drives 105.0 km of mapped roads, finds a road closed partway through a trip, and the learner compares ways of recovering. Carrying on costs USD 100 a month in a small group or USD 150 a month for one-to-one teaching.',
  lead: 'An AI agent works from a plan: book this, then send that, then update the other. Real plans break. A website is down, a file is missing, a road is closed. What the agent does next matters as much as the plan it started with. It can throw the plan away and replan from scratch, which is thorough but costly. It can patch the plan locally, finding a way around the broken step and carrying on, which is cheap but not always as good. And sometimes the goal is no longer reachable at all, which a well-built agent must notice rather than loop. This project tests all three on Dungannon\'s road network from OpenStreetMap, with a driving agent that only discovers a closure when it gets there.',
  wa: 'Hello Modern Age Coders, could we book a free vibe coding or AI agents lesson for a learner in Dungannon?',

  picks: {
    eyebrow: 'Dungannon course picks',
    h2: 'Where Dungannon learners begin: thinking, vibe coding and agents',
    intro: 'Four starting points by age. The first live class of each is free and books without card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: making a plan, spotting when it fails and choosing a sensible way round.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games the learner designs, builds with an AI and then tests to breaking point.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the Dungannon replanning agent.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents that plan, fail gracefully and recover, built step by step in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Dungannon in the 2021 census',
      h2: 'Dungannon, Ballysaggart, Killymeal and Moygashel',
      intro: 'NISRA counts for the town, its electoral area and Mid Ulster, plus the wards named around it.',
      body: [
        { kind: 'table', caption: 'Dungannon and Mid Ulster in the 2021 census (NISRA MS-A01, people usually resident)', head: ['Place', 'Kind of area', 'People'], rows: [
          ['Dungannon town', 'NISRA settlement', '16,282'],
          ['Dungannon', 'Electoral area (DEA)', '25,640'],
          ['Mid Ulster', 'Council district', '150,293']
        ] },
        { kind: 'p', text: 'These are three different NISRA geographies and are never added together. Ballysaggart (5,062 residents), Killymeal (5,003), Mullaghmore (4,408) and Moygashel (3,606) are census wards in Mid Ulster, and OpenStreetMap marks Granville as a village and Lardan as a locality inside our map rectangle. Tyrone schools teach the Northern Ireland Curriculum; we plan in the same primary and post-primary years and help with CCEA qualifications where needed. Share your school holiday dates and we will fit round them.' },
        { kind: 'callout', h3: 'Mid Ulster pages and CCEA help', p: 'Visit <a class="cg-inline-link" href="/coding-classes-in-mid-ulster">coding classes in Mid Ulster</a>, <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland</a> and <a class="cg-inline-link" href="/ccea-gcse-digital-technology-programming-help">CCEA GCSE Digital Technology help</a>. Our reasons for teaching thinking before tools are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Dungannon project',
      h2: 'When the plan breaks: an agent replanning around road closures in Dungannon',
      intro: 'Plan a trip, close a road on the route, and compare three ways to recover.',
      body: [
        { kind: 'p', text: 'The learner downloads the public roads inside a rectangle over Dungannon from OpenStreetMap: 105.0 km, simplified to 972 junctions joined by 1,043 road segments. For each trip the program picks a random start and destination at least 800 m apart by road, plans the shortest route, and then quietly closes one segment somewhere in the middle of that route. The agent does not know until it arrives at the closed road. Then it can either replan completely from where it stands, or repair the plan by finding the shortest way around to any later point on its old route and carrying on from there. As a yardstick, the program also works out the route the agent would have taken had it known about the closure before setting off.' },
        { kind: 'table', caption: 'Recovering from a road closure met partway through a trip, 300 trips, our Python run on OpenStreetMap roads in Dungannon', head: ['What the agent does', 'Extra distance, median', 'Extra distance, 90th percentile', 'Junctions examined at the closure'], rows: [
          ['Knew in advance (yardstick)', '0%', '0%', 'None'],
          ['Replans from scratch', '8.3%', '45.4%', '403'],
          ['Repairs the plan locally', '10.4%', '49.5%', '117']
        ] },
        { kind: 'p', text: 'Discovering a problem late always costs something: even a full replan drives a median 8.3% further than a driver who knew all along, and one trip in ten costs over 45% more. The local repair is slightly worse on distance, 10.4% at the median, but it looks at only 117 junctions to find its way round instead of 403, and in 78.7% of trips it lands within 1% of the full replan. A further 83 closures, from 383 attempted trips, left no route inside the rectangle at all. An agent that keeps searching in that situation wastes effort for ever; it has to recognise the goal is unreachable and report back.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Plan a walk on a paper map, block one street with a counter, and find the smallest change to the route.' },
          { h3: 'Years 8 to 10', p: 'Load a small piece of Dungannon\'s roads in Python and find a new route when one road is removed.' },
          { h3: 'Year 11 and up', p: 'Code both recovery strategies, run hundreds of trips and weigh extra distance against search effort.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap roads, our agent', p: 'Road geometry is from OpenStreetMap and its contributors under the Open Database Licence. The rectangle, the random trips, the closures and every figure are our own; no real closure or roadworks are modelled.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents that recover',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Recovery, not the first plan, separates a sturdy agent from a fragile one.',
      body: [
        { kind: 'table', caption: 'From the Dungannon closures to real AI agents', head: ['In the road project', 'When an AI agent\'s plan fails'], rows: [
          ['Learning late cost a median 8.3%', 'Surprises always cost something; plan for them'],
          ['Repair searched 117 junctions, replan 403', 'A quick patch is often nearly as good'],
          ['Repair matched replan in 78.7% of trips', 'Know when the cheap fix is enough'],
          ['83 closures made the goal unreachable', 'An agent must be able to say it cannot finish'],
          ['The yardstick knew everything in advance', 'Compare an agent with an all-knowing run']
        ] },
        { kind: 'p', text: 'AI agents that call tools meet broken steps all the time: an API returns an error, a page has moved, a permission is missing. The weakest agents repeat the failing step or quietly give up; better ones patch around it, replan when the patch is poor, and tell a person when the goal cannot be reached. In vibe coding an AI drafts the program from the learner\'s plain-English description; our Dungannon learners also write down what the program must do when a step fails, and test that with deliberately broken inputs. Building agents comes after Python is second nature, for most from Year 12 on, and Copilot Studio is kept for one-to-one sessions. Read about the route on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and the principle behind it on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap and NISRA are not connected with Modern Age Coders; we used only their openly published data, and the agent, the closures and any mistakes are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From blocked-street puzzles to agents that recover',
    intro: 'We read the school year as a first guess and let the trial lesson confirm the level.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Plans, obstacles and choosing a sensible detour.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to Year 9', h3: 'Vibe coding for kids', p: 'Games and small apps the learner plans and builds with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 10 to 14', h3: 'Python and search', p: 'Graphs, shortest paths and failure handling alongside CCEA GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Robust AI agents', p: 'Planning, tools, error recovery and hand-over to people, in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and plans',
    h2: 'What should an AI agent do when its plan fails?',
    intro: 'It should notice the failure, then either repair the plan locally or replan from its current state, choosing by how much the cheaper fix costs, and it should report back when the goal can no longer be reached.',
    p1: 'A driving agent on Dungannon\'s mapped roads that met a closure mid-trip drove a median 8.3% further after a full replan and 10.4% further after a local repair, yet the repair searched 117 junctions instead of 403.',
    p2: 'Having built it, a learner asks two things of any AI tool: how it copes with a failed step, and whether it will admit when a job cannot be done.',
    closer: 'Designing agents that recover sensibly keeps Dungannon teenagers in charge of the AI they build, and learning to code is where that design sense grows in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'How Dungannon lessons run',
    intro: 'Kit: any laptop or desktop with a camera, plus broadband good enough for video.',
    cells: [
      { h3: 'The learner types', p: 'Every line of code and every prompt comes from the student, while the tutor follows through screen share and asks what should happen if a step fails.' },
      { h3: 'Level from lesson one', p: 'Half an hour of real coding in the trial tells the tutor where to begin; upcoming CCEA exams go on the plan.' },
      { h3: 'First lesson on us', p: 'Session one is free and closes with a course suggestion.' },
      { h3: 'Classmates at your level', p: 'Groups of five to ten are formed by ability, not by postcode.' },
      { h3: 'Term-time rhythm', p: 'Twice weekly, stopping for holidays.' },
      { h3: 'Slot that stays put', p: 'Tutors adjust to UK clock changes so your lesson time does not.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, free on the same evening, rarely live within reach of one room. On video, that stops mattering.' }
  },

  fees: {
    h2: 'Dungannon fees',
    intro: 'Dungannon learners pay our international rates, which apply everywhere outside India.',
    first: 'A full lesson free, then our recommendation.',
    group: 'About eight live small-group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Fees are in US dollars, never sterling, and we invoice only after the trial has settled a course and a weekly time. School holidays, missed lessons and switching between group and private are explained on the pricing page.'
  },

  reviewsH2: 'What Tyrone parents and learners across Britain write on Google',

  book: {
    h2: 'Book a free Dungannon lesson',
    intro: 'An age or school year and a hobby is all we ask. Trials might be a blocked-street puzzle, an AI-assisted Scratch game, a few lines of beginner Python, or an agent forced to find a new route.',
    success: 'Thank you. Your Dungannon request has reached us.'
  },

  faq: {
    h2: 'Dungannon questions',
    intro: 'Broken plans, closed roads, vibe coding and lesson logistics.',
    items: [
      { q: 'How many people live in Dungannon?', a: 'NISRA\'s Census 2021 counts 16,282 usual residents in the Dungannon settlement and 25,640 in the Dungannon District Electoral Area.' },
      { q: 'Are vibe coding and AI agents classes available online in Dungannon?', a: 'They are. Every lesson runs on live video, so Moygashel, Granville and anywhere else in Mid Ulster is covered for ages 6 to 67.' },
      { q: 'What is the difference between replanning and plan repair?', a: 'Replanning throws the old plan away and plans again from the current state; plan repair keeps as much of the old plan as possible and fixes only the broken part. Repair is cheaper; replanning is usually a little better.' },
      { q: 'How does an AI agent know a goal is unreachable?', a: 'It searches every option still open and finds no way to the goal. In our Dungannon test, 83 of 383 closures left no route inside the map, and the agent had to report that rather than keep trying.' },
      { q: 'What does the Dungannon project involve?', a: 'An agent plans trips on 105.0 km of mapped Dungannon roads, meets a closed road partway through, and the learner compares full replanning, local repair and knowing in advance.' },
      { q: 'Is vibe coding part of it?', a: 'Throughout: learners say what the program should do, then check and fix what the AI produces.' },
      { q: 'At what age do agents come in?', a: 'Usually around Year 12, or later for adults starting fresh: Python has to be comfortable first. Copilot Studio work is private tuition only.' },
      { q: 'Is there CCEA exam help?', a: 'For GCSE Digital Technology, A level Software Systems Development and Maths, yes, focused on understanding rather than any promised result.' },
      { q: 'How much are lessons?', a: 'The first lesson is free; after that, USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons stop for school holidays?', a: 'Yes; send us the dates and we will pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Northern Ireland pages',
    html: 'Each runs its own experiment: <a class="cg-inline-link" href="/coding-classes-in-mid-ulster">Mid Ulster</a> (a linen mill\'s slowest machine), <a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh</a>, <a class="cg-inline-link" href="/best-coding-class-in-newry">Newry</a> and <a class="cg-inline-link" href="/best-coding-class-in-derry-londonderry">Derry</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> list the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dungannon and Mid Ulster',
  footerPlaces: [
    { href: '/coding-classes-in-mid-ulster', label: 'Mid Ulster' },
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-dgn .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-dgn .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-dgn .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; border-radius: 0 8px 8px 0; }
.cg-root.cg-dgn .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dgn .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-dgn .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; font-style: italic; }
.cg-root.cg-dgn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dgn .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-dgn .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-dgn .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Mid Ulster (N09000009). Northern Ireland Curriculum; CCEA GCSE and A level. NISRA Census 2021 MS-A01: Dungannon settlement 16,282; Dungannon DEA 25,640; Mid Ulster LGD 150,293. Wards: Ballysaggart 5,062; Killymeal 5,003; Mullaghmore 4,408; Moygashel 3,606 (Nominatim: each in Dungannon or Mid-Ulster District). OSM place nodes: Granville (village), Lardan (locality).',
    localProject: 'OSM API 0.6 bbox -6.810,54.485,-6.735,54.525 (6 tiles): public roads 105.0 km, 972 junctions, 1,043 segments. 383 random trips (>= 800 m) with one mid-route segment closed; 83 left no route in the box; 300 scored. Extra distance vs knowing in advance: full replan median 8.3% (p90 45.4%); local repair median 10.4% (p90 49.5%), within 1% of replan in 78.7%. Junctions examined: replan 403, repair 117. Lesson family: dynamic replanning, plan repair, unreachable goals.',
    requiredMentions: [
      '16,282',
      '25,640',
      'Ballysaggart',
      'Killymeal',
      'Mullaghmore',
      'Moygashel',
      'Granville',
      'replanning',
      'plan repair'
    ],
    sources: [
      { claim: 'NISRA, Census 2021 main statistics table MS-A01, usual residents by settlement, ward, district electoral area and LGD.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'OpenStreetMap road data for Dungannon, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'CCEA qualifications used in Northern Ireland schools (GCSE and A level).', url: 'https://ccea.org.uk/' }
    ],
    rejectedClaims: [
      'Town history, castle or plantation-era claims: not read from a source; not claimed, and identity topics avoided.',
      'Real roadworks or closures: none modelled; closures are random.',
      'That the 83 disconnected trips are real dead ends: many may be artefacts of cutting the map at the rectangle; not claimed otherwise.',
      'Sum of settlement, DEA and LGD figures: different geographies; never added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
