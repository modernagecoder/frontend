'use strict';
// Oadby (cg- district page, UK cluster Phase 9, row 462). Keyword slug per the owner's 2026-09-30 ruling. Oadby is in the
// borough of Oadby and Wigston, Leicestershire, a separate district from the City of Leicester; the page says so and never
// places it inside the city. Spine: how should a team of agents share out jobs? (contract net protocol: announce a task,
// collect bids, award to the lowest bidder, compared with the optimal assignment and with random allocation).
// Data (read 30 September 2026): Overpass API (OpenStreetMap, ODbL), rectangle 52.585 to 52.615 N, 1.110 to 1.055 W: roads
// open to vehicles (primary to residential, links, service; private and no-access left out), 161.1 km, 6,696 network points;
// 1,375 mapped buildings, snapped to 641 distinct delivery points on the network.
// Our run (scratchpad oby/cnp.py, seed 2026): n agents at random network points, n jobs at random delivery points, cost =
// shortest road distance. Contract net: jobs announced one at a time, every free agent bids its distance, lowest bid wins.
// Optimal: Hungarian method (scipy linear_sum_assignment). Random: mean of 20 random allocations. Total distance against
// optimal, median / mean / 90th percentile / share exactly optimal: 3 agents (150 trials) 1.000 / 1.062 / 1.229 / 56.7%,
// random 1.188; 5 agents (150) 1.050 / 1.085 / 1.224 / 22.0%, random 1.356; 10 agents (80) 1.122 / 1.140 / 1.263 / 0%,
// random 1.712. Median optimal total: 6.58 km, 9.90 km, 15.81 km.
// Lesson family: contract net protocol (task allocation by bidding among agents) against optimal assignment. Screened:
// "contract net" 0 page hits; claimed in the fork claims file. Kilmarnock owns consistent hashing (sharing by hash),
// Airdrie voting rules, Tynemouth crowds.
// Place facts: ONS 2021 built-up area Oadby 24,030; Oadby and Wigston district (E07000135) TS001 57,747. Census 2021 wards
// (TS001): Oadby Grange 6,052; Oadby Woodlands 4,634; Oadby St Peter's 4,551; Oadby Uplands 4,522; Oadby Brocks Hill 4,272.
// postcodes.io: Oadby (LE2), district Oadby and Wigston.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'OADBY', label: 'Oadby', blurb: 'Vibe coding and AI agents classes for Oadby in Leicestershire, with a project where delivery agents bid for jobs and the learner measures how close bidding gets to the ideal.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-oadby-leicester',
  code: 'oby',
  accent: '#9F1239',
  accentRationale: 'Oadby: a deep ruby (8.02:1 contrast), chosen by hand to stand apart from recent teals, navies and purples',
  pageType: 'city',
  place: {
    name: 'Oadby',
    eyebrow: 'Oadby, Oadby and Wigston, Leicestershire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Leicestershire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-classes-in-leicestershire', name: 'Leicestershire' }],
  nav: [
    { label: 'Leicestershire', href: '/coding-classes-in-leicestershire' },
    { label: 'East Midlands', href: '/coding-and-ai-classes-in-east-midlands' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Oadby, Leicestershire',
  title: 'Vibe Coding and AI Agents Classes in Oadby | Leicestershire, 6-67',
  description: 'Live online vibe coding, AI agents and Python lessons for Oadby learners in Leicestershire, from Oadby Grange to Brocks Hill, aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Oadby, with a project where agents bid for delivery jobs on the town\'s real roads and we measure the cost of bidding.',
  twitterDescription: 'Oadby vibe coding, AI agents and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Oadby',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Oadby and the borough of Oadby and Wigston, taught live with clear reasoning first.'
  },

  h1: 'Vibe coding and AI agents classes in Oadby',
  capsuleQ: 'Where can Oadby learners find the best vibe coding and AI agents classes?',
  capsule: 'The ONS counted 24,030 people in the Oadby built-up area at the 2021 census. Oadby belongs to the borough of Oadby and Wigston, a Leicestershire district of 57,747 that is separate from the City of Leicester, and its census wards include Oadby Grange, Oadby Woodlands, Oadby Uplands and Oadby Brocks Hill. Our tutors, who teach from India by live video, take Oadby learners aged six to 67 through vibe coding, AI agents, Python, coding and maths, individually or five to ten to a class by level. We teach reasoning first, so a learner can judge how a team of agents made its choices. The opening session is free, and we finish it by naming a course. In the Oadby project, delivery agents bid for jobs on 161.1 km of real roads, and the learner measures how far simple bidding falls short of the ideal share-out. If you stay on, a seat in a class is USD 100 each month and a tutor to yourself USD 150 each month.',
  lead: 'When several AI agents share a workload, something has to decide who does what. One of the oldest answers, first described in 1980 in research on distributed computing, is the contract net protocol: a task is announced, each available agent replies with a bid, and the task goes to whoever bid lowest. It needs no central planner and it is easy to build. The question is how much it costs compared with a planner that sees everything at once. This project puts both on the road network of Oadby, as mapped on OpenStreetMap: agents start at random points, jobs appear at real building locations, and every bid is an actual driving distance.',
  wa: 'Hello Modern Age Coders, could we book a free vibe coding or AI agents lesson for a learner in Oadby?',

  picks: {
    eyebrow: 'Oadby course picks',
    h2: 'Oadby courses in reasoning, vibe coding and agents',
    intro: 'Find the row that fits the learner\'s age. Whichever it is, the opening lesson is live, costs nothing and is booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: sharing jobs fairly and asking whether a quick rule is good enough.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games invented by the learner, built with an AI and tested until they work.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the bidding agents on Oadby roads.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Multi-agent systems, task allocation and evaluation, built in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Oadby and its borough',
      h2: 'Oadby, Oadby Grange, Uplands and Brocks Hill',
      intro: 'ONS figures for Oadby, its district and its census wards.',
      body: [
        { kind: 'table', caption: 'Oadby in the 2021 census (ONS, via Nomis)', head: ['Area', 'Residents (2021)'], rows: [
          ['Oadby built-up area', '24,030'],
          ['Oadby Grange ward', '6,052'],
          ['Oadby Woodlands ward', '4,634'],
          ['Oadby St Peter\'s ward', '4,551'],
          ['Oadby Uplands ward', '4,522'],
          ['Oadby Brocks Hill ward', '4,272']
        ] },
        { kind: 'p', text: 'Each figure is published separately and none is added to another here; ward and built-up area boundaries differ. The borough of Oadby and Wigston as a whole had 57,747 residents and is a district of Leicestershire in its own right, with the City of Leicester a separate council area. Leicestershire schools teach England\'s national curriculum; send the holiday dates and lessons will miss those weeks.' },
        { kind: 'callout', h3: 'Leicestershire, the East Midlands and how we teach', p: 'See <a class="cg-inline-link" href="/coding-classes-in-leicestershire">coding classes in Leicestershire</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">East Midlands</a>. Why thinking comes before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Oadby project',
      h2: 'Agents that bid for jobs: the contract net protocol on Oadby\'s roads',
      intro: 'Announce, bid, award, repeat, then compare the bill with the ideal plan.',
      body: [
        { kind: 'p', text: 'The learner downloads the roads and buildings of a rectangle around Oadby through the Overpass service: 161.1 km of road and 1,375 mapped buildings. A trial places a team of agents at random points on the network and the same number of jobs at random buildings. Under the contract net, jobs are announced one at a time; each agent still free bids its shortest driving distance to the job, and the lowest bid wins. For comparison, the Hungarian method finds the allocation with the smallest possible total distance, and a third run simply allocates at random.' },
        { kind: 'table', caption: 'Total driving distance against the ideal allocation, our Python simulation on OpenStreetMap roads around Oadby', head: ['Team size', 'Bidding, typical', 'Bidding, worst tenth', 'Bidding matched the ideal', 'Random allocation'], rows: [
          ['3 agents, 3 jobs', 'Same as ideal', '22.9% more', 'In 56.7% of trials', '18.8% more'],
          ['5 agents, 5 jobs', '5.0% more', '22.4% more', 'In 22.0% of trials', '35.6% more'],
          ['10 agents, 10 jobs', '12.2% more', '26.3% more', 'Never in 80 trials', '71.2% more']
        ] },
        { kind: 'p', text: 'Bidding is cheap and mostly decent. With three agents it matches the ideal plan more often than not; with ten it never does, and typically drives 12.2% further, because an early job can grab the agent a later job needed far more. Still, that is a fraction of the 71.2% wasted by allocating at random. The practical lesson is a trade: the planner gives the shortest total but must know every job and every agent in advance, while bidding works as jobs arrive and nobody is in charge. Which one a team should use depends on what it knows and when.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Hand out chores by letting each person call out how far away they are, then look for a fairer share-out.' },
          { h3: 'Ages 11 to 15', p: 'Code three bidding agents on a small map of Oadby roads and total the distance.' },
          { h3: 'Ages 15 and up', p: 'Build the contract net, compare it with the optimal assignment and explain where bidding loses.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap roads, our agents', p: 'Roads and buildings are from OpenStreetMap and its contributors under the Open Database Licence. The agents, jobs and every distance are simulated by us; no real delivery service is modelled.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents sharing work',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Whoever writes the hand-out rule decides how well the whole team performs.',
      body: [
        { kind: 'table', caption: 'From the Oadby bidding agents to real multi-agent systems', head: ['In the Oadby simulation', 'When AI agents work as a team'], rows: [
          ['Bidding needed no central planner', 'Simple protocols are easy to run'],
          ['Ten agents drove 12.2% further than ideal', 'Local choices add up to a global cost'],
          ['Random allocation wasted 71.2%', 'Any sensible rule beats none'],
          ['Early awards blocked better ones', 'The order of decisions matters'],
          ['The ideal plan needed full knowledge', 'The right method depends on what is known']
        ] },
        { kind: 'p', text: 'Multi-agent AI systems hand tasks to worker agents all the time, and many use something like bidding: whichever agent claims to be the right fit gets the job. Vibe coding lets a learner describe such a system while an AI writes the code; our Oadby learners also ask how the work is allocated and measure it against a known ideal on small cases. Hands-on agent building is kept for learners who already write Python without support, in practice sixteen-plus, and Copilot Studio is offered purely as private tuition. The course route is laid out on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents page for UK learners</a>; the teaching idea behind it is <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Neither OpenStreetMap nor the Office for National Statistics is connected with Modern Age Coders. We used their open data, and the simulation and its errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From sharing chores to agent teams',
    intro: 'Year group is a rough marker only; twenty minutes of the trial tells us more.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Fair shares, quick rules and checking them.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and optimisation', p: 'Graphs, allocation and simulation alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Multi-agent AI', p: 'Agent teams, protocols and evaluation in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and allocation',
    h2: 'How do AI agents decide which agent does which task?',
    intro: 'Often by a protocol such as the contract net, in which a task is announced, agents bid, and the lowest or most suitable bid wins; it is simple and needs no central planner, but it can cost more than an optimal assignment computed with full knowledge.',
    p1: 'On Oadby\'s road network, ten bidding agents drove a median 12.2% further than the optimal allocation and never matched it in 80 trials, while random allocation drove 71.2% further.',
    p2: 'Learners who have run that comparison ask of any agent team: who hands out the work, by what rule, and what does that rule cost?',
    closer: 'Knowing how work is shared keeps Oadby teenagers in charge of the agent teams they design, and that starts with learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'How an Oadby lesson runs',
    intro: 'A webcam-equipped computer and broadband that streams smoothly: nothing more.',
    cells: [
      { h3: 'Learners build it', p: 'Code and prompts are written by the student; the tutor follows on screen share and asks why each rule was chosen.' },
      { h3: 'Trial sets the start', p: 'The free session shows the level, and any exam board is noted.' },
      { h3: 'Try it free', p: 'The first session is on us and closes with our pick of course.' },
      { h3: 'Small and matched', p: 'A class means five to ten people at a shared stage, wherever in Britain they log in from.' },
      { h3: 'Two a week', p: 'Lessons stop for school holidays.' },
      { h3: 'Time stays fixed', p: 'UK clock changes are absorbed by our tutors.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level who are all free the same evening rarely live in the same town. Video removes that limit.' }
  },

  fees: {
    h2: 'Oadby fees',
    intro: 'Oadby learners pay our international rates, used everywhere outside India.',
    first: 'A full lesson at no cost, then our advice.',
    group: 'About eight live group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Quoted and billed in US dollars, with no sterling list. Payment starts once the trial has pinned down the course and a regular time, and the pricing page answers questions on breaks, missed lessons and changing format.'
  },

  reviewsH2: 'What Leicestershire parents and learners elsewhere tell Google about us',

  book: {
    h2: 'Book a free Oadby lesson',
    intro: 'All we need is an age or year group and a hobby. From there the trial can be a who-does-which-chore puzzle, an AI-assisted Scratch game, a first taste of Python, or a pair of tiny agents bidding against each other.',
    success: 'Thank you. Your Oadby request is with us.'
  },

  faq: {
    h2: 'Oadby questions',
    intro: 'Bidding agents, the road project, vibe coding, Python and practical points.',
    items: [
      { q: 'What is the population of Oadby?', a: 'The ONS gives 24,030 residents for the Oadby built-up area at the 2021 census; the borough of Oadby and Wigston had 57,747.' },
      { q: 'Is Oadby part of Leicester?', a: 'Oadby is in the borough of Oadby and Wigston, a Leicestershire district that is separate from the City of Leicester council area.' },
      { q: 'What is the contract net protocol?', a: 'A way for agents to share tasks: a task is announced, agents reply with bids, and the task is awarded to the most suitable bid. It needs no central controller.' },
      { q: 'What is the assignment problem?', a: 'Matching workers to jobs, one each, so the total cost is as small as possible. The Hungarian method solves it exactly when all costs are known.' },
      { q: 'What does the Oadby project involve?', a: 'Simulated delivery agents bid for jobs on 161.1 km of Oadby roads, and the learner compares bidding, the optimal assignment and random allocation.' },
      { q: 'Are vibe coding and AI agents classes available online in Oadby?', a: 'They are: every lesson is a live video call, so the whole borough is covered, for ages 6 to 67.' },
      { q: 'How soon do agents enter the course?', a: 'After Python no longer needs a tutor\'s help, so mostly from sixteen; Copilot Studio is private tuition.' },
      { q: 'What about exam courses?', a: 'We teach GCSE and A level computer science and maths so the ideas make sense; grades are not something we promise.' },
      { q: 'What are the fees?', a: 'Nothing for the trial. Then USD 100 monthly per class place, or USD 150 monthly for individual lessons.' },
      { q: 'What happens at half term and in the holidays?', a: 'Lessons stop; tell us the dates in advance.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Leicestershire and East Midlands pages',
    html: 'Pages with their own projects: <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-loughborough">Loughborough</a>, <a class="cg-inline-link" href="/best-coding-class-in-nottingham">Nottingham</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-corby">Corby</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Oadby and Leicestershire',
  footerPlaces: [
    { href: '/coding-classes-in-leicestershire', label: 'Leicestershire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-oby .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-oby .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-oby .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-oby .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-oby .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-oby .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-oby .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-oby .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-oby .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-oby .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Oadby and Wigston (E07000135), Leicestershire; separate from the City of Leicester. Census 2021 TS001 district 57,747. ONS 2021 BUA Oadby 24,030. Wards (TS001): Oadby Grange 6,052; Oadby Woodlands 4,634; Oadby St Peter\'s 4,551; Oadby Uplands 4,522; Oadby Brocks Hill 4,272.',
    localProject: 'Overpass (OSM) rectangle 52.585-52.615 N, 1.110-1.055 W: roads 161.1 km, 1,375 buildings (641 delivery points). Contract net vs Hungarian optimal vs random, road shortest paths. Ratio to optimal median / p90 / exactly optimal: 3 agents 1.000 / 1.229 / 56.7% (random 1.188); 5 agents 1.050 / 1.224 / 22.0% (random 1.356); 10 agents 1.122 / 1.263 / 0% of 80 (random 1.712). Lesson family: contract net protocol, task allocation by bidding.',
    requiredMentions: [
      '24,030',
      '57,747',
      '161.1 km',
      'Oadby Grange',
      'Oadby Woodlands',
      'Oadby Uplands',
      'Brocks Hill',
      '6,052',
      'contract net'
    ],
    sources: [
      { claim: 'OpenStreetMap roads and buildings via the Overpass API, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 usual residents (district and wards) via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: Oadby, district Oadby and Wigston.', url: 'https://api.postcodes.io/places?q=Oadby' }
    ],
    rejectedClaims: [
      'That Oadby is inside the City of Leicester: false; stated as a separate district of Leicestershire.',
      'Sum of the Oadby wards or a comparison with the built-up area: different boundaries; not added.',
      'Any real delivery company, racecourse, university or town history: not read from a source; not claimed.',
      'That real agent products use the contract net: described only as a common pattern.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
