'use strict';
// Kilmarnock (cg- town page, UK cluster Phase 8, towns band A, row 414). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when a team of AI agents shares out work and one
// agent joins or leaves, how much work has to move? (consistent hashing: modulo assignment against a hash ring, virtual
// points for balance).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map calls over bbox -4.545,55.590,-4.455,55.635 in 16 tiles (ODbL):
// 12,925 ways tagged building, used as the list of jobs ("check each mapped building"), keyed by OSM way id.
// Our run (scratchpad kil/ch.py): SHA-256 of each id. Share of buildings that change agent, and busiest / quietest agent's
// load against the average: modulo 4 to 5 agents 80.6% moved; hash ring 1 point per agent 22.3% (load 1.61 / 0.29); 10
// points 18.4% (1.39 / 0.72); 100 points 19.2% (1.15 / 0.84); ideal 20%. 5 to 4: modulo 80.6%; ring 100 points 19.2%.
// 8 to 9: modulo 88.5%; ring 1 point 14.9% (load 2.19 / 0.08); 100 points 11.5% (1.12 / 0.89); ideal 11.1%.
// Lesson family: consistent hashing, hash rings, virtual nodes, load balance of work shared between agents. Screened:
// "consistent hashing", "hash ring", "virtual node", "sharding", "load balancing" 0 hits. Livingston owns Merkle trees and
// Southampton hash tables; this is about assignment stability.
// Place facts: NRS mid-2020 localities: Kilmarnock 46,970, the largest in East Ayrshire (list on the East Ayrshire page).
// postcodes.io (East Ayrshire, KA1/KA3) suburban areas: Altonhill, Beansburn, Bellfield, Bonnyton, Grange, Knockinlaw,
// Longpark, New Farm Loch, Onthank, Riccarton, Shortlees; Hurlford and Crosshouse villages.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'KILMARNOCK', label: 'Kilmarnock', blurb: 'Vibe coding and AI agents classes for Kilmarnock, with a project where a team of agents shares 12,925 mapped buildings and learns how to add a helper without reshuffling everything.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-kilmarnock',
  code: 'kmk',
  accent: '#256B25',
  accentRationale: 'Kilmarnock: a deep leaf green (5.27:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Kilmarnock',
    eyebrow: 'Kilmarnock, East Ayrshire, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'East Ayrshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'East Ayrshire', href: '/coding-classes-in-east-ayrshire' },
    { label: 'Ayr', href: '/best-coding-and-ai-classes-in-ayr' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kilmarnock, Scotland',
  title: 'Vibe Coding and AI Agents Classes in Kilmarnock | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents and Python lessons for Kilmarnock, Onthank, Bellfield and Shortlees learners in East Ayrshire, aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Kilmarnock, with a project on sharing work between agents so that adding one does not reshuffle everything.',
  twitterDescription: 'Kilmarnock vibe coding, AI agents and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Kilmarnock',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Kilmarnock and East Ayrshire, taught live with systems thinking first.'
  },

  h1: 'Vibe coding and AI agents classes in Kilmarnock',
  capsuleQ: 'Where can Kilmarnock learners find the best vibe coding and AI agents classes?',
  capsule: 'East Ayrshire\'s biggest locality by a wide margin is Kilmarnock, estimated by National Records of Scotland at 46,970 residents in mid-2020. Onthank, Bellfield, Shortlees, New Farm Loch, Knockinlaw and Bonnyton are among the suburbs recorded in the KA1 and KA3 districts. Anyone from six to 67 can join vibe coding, AI agents, Python, coding or maths lessons streamed live from our tutors in India, solo or among five to ten classmates of similar ability. We teach systems thinking before tools, so learners understand what a team of agents is actually doing. Session one is on the house and wraps up with our course pick. In the Kilmarnock project a team of agents shares out 12,925 mapped buildings, and the learner discovers why the obvious way of dividing work falls apart when one more agent joins. Continuing is priced at USD 100 monthly for group places and USD 150 monthly for solo tuition.',
  lead: 'Large AI jobs are often split between several agents, or several copies of one agent, each handling its own share. The obvious way to divide the work is to number the agents and give each job to agent number "job ID modulo number of agents". It spreads the work evenly, until the team changes size. Add one agent and almost every job lands on a different agent, so everything has to be handed over again. Consistent hashing, invented for spreading web traffic across servers, fixes this by placing agents and jobs on a circle. This project tests both methods on a real list of jobs: every building mapped on OpenStreetMap across Kilmarnock.',
  wa: 'Hello Modern Age Coders, could we book a free vibe coding or AI agents lesson for a learner in Kilmarnock?',

  picks: {
    eyebrow: 'Kilmarnock course picks',
    h2: 'Kilmarnock courses in thinking, vibe coding and agents',
    intro: 'Pick by age; every course starts with one free live lesson, and no card is taken to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: sharing jobs fairly and what happens when the team changes.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with an AI and tested properly.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the agent team on Kilmarnock data.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Multi-agent systems, sharing work and scaling up, built in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Kilmarnock and East Ayrshire',
      h2: 'Kilmarnock, Onthank, Bellfield and Shortlees',
      intro: 'The NRS estimate for Kilmarnock, and suburbs on record in KA1 and KA3.',
      body: [
        { kind: 'table', caption: 'Kilmarnock in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['Kilmarnock locality, mid-2020', '46,970']
        ] },
        { kind: 'p', text: 'Altonhill, Beansburn, Bellfield, Bonnyton, Grange, Knockinlaw, Longpark, New Farm Loch, Onthank, Riccarton and Shortlees are suburban areas of East Ayrshire in the KA1 and KA3 districts on postcodes.io, with Hurlford and Crosshouse listed as villages. East Ayrshire schools use the Curriculum for Excellence; our lessons run by Scottish year groups, and exam help follows SQA Computing Science and Maths. Share the holiday dates and those weeks stay lesson-free.' },
        { kind: 'callout', h3: 'Ayrshire pages and SQA help', p: 'See <a class="cg-inline-link" href="/coding-classes-in-east-ayrshire">coding classes in East Ayrshire</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-ayr">Ayr</a> and <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science help</a>. Why thinking comes before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Kilmarnock project',
      h2: 'Sharing work between agents: modulo hashing against a consistent hash ring',
      intro: 'Nearly thirteen thousand jobs, a team that grows and shrinks, and a count of every hand-over.',
      body: [
        { kind: 'p', text: 'The learner downloads every building mapped on OpenStreetMap across Kilmarnock, 12,925 of them, and treats each as a job for the team: check this building. Each building\'s ID is turned into a large number by a hash function. The modulo method gives the job to agent number "hash modulo team size". The ring method places each agent at one or more points on a circle of hash values; each job goes clockwise to the next agent point it meets. Adding an agent only takes over the jobs just behind its new points.' },
        { kind: 'table', caption: 'Growing the team from 4 to 5 agents over Kilmarnock\'s 12,925 buildings, our Python run on OpenStreetMap data', head: ['Method', 'Jobs that change agent', 'Busiest agent against average'], rows: [
          ['Modulo', '80.6%', 'Even'],
          ['Ring, 1 point per agent', '22.3%', '1.61 times'],
          ['Ring, 10 points per agent', '18.4%', '1.39 times'],
          ['Ring, 100 points per agent', '19.2%', '1.15 times'],
          ['Ideal: new agent takes a fair fifth', '20.0%', 'Even']
        ] },
        { kind: 'p', text: 'With modulo, adding a fifth agent moves 80.6% of the jobs, even though the new agent needs only a fifth of them. Going from 8 to 9 agents is worse: 88.5% move. The ring moves close to the ideal share, but with only one point per agent the circle is carved unevenly: with four agents the busiest had 1.61 times an average load and the quietest 0.29 times, and with eight the quietest was down to 0.08. Giving each agent 100 virtual points smooths the circle: 19.2% of jobs move when growing to five, 11.5% when growing to nine against an ideal 11.1%, and no agent carries more than 1.15 times the average.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Deal cards round a table of four, add a fifth player, and count how many cards must change hands.' },
          { h3: 'S1 to S3', p: 'Hash Kilmarnock building numbers in Python and share them out with modulo, then change the team size.' },
          { h3: 'S4 and up', p: 'Build a hash ring with virtual points and measure hand-overs and load balance.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap buildings, our agents', p: 'Building IDs are from OpenStreetMap and its contributors under the Open Database Licence and serve only as a real list of jobs. The hashing, the agents and every percentage are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agent teams',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Teams change size; the way they split work should not fall apart when they do.',
      body: [
        { kind: 'table', caption: 'From the Kilmarnock hash ring to teams of AI agents', head: ['In the sharing project', 'When several AI agents work together'], rows: [
          ['Modulo moved 80.6% of jobs', 'A simple split can be fragile'],
          ['The ring moved about a fifth', 'Good designs keep most work where it is'],
          ['One point per agent was lopsided', 'Fair on average is not fair in practice'],
          ['100 virtual points balanced the load', 'Small design choices fix big imbalances'],
          ['12,925 real jobs tested it', 'Test a design on realistic volumes']
        ] },
        { kind: 'p', text: 'As AI agents take on bigger jobs, they are increasingly run as teams: one agent per batch of documents, per customer or per region. Whenever a team member is added, restarted or removed, the question is how much work has to be handed over, and handing over costs time and risks mistakes. Vibe coding lets a learner describe a program while an AI writes it; our Kilmarnock learners also ask how its work would be shared if it ran as ten copies, and test the answer. Agent building begins once Python is secure, usually from S4 upward or in adulthood, and Copilot Studio agents are taught one-to-one only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents route for UK learners</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, National Records of Scotland and postcodes.io are not connected with this page; we used their open data, and the design and any errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From dealing cards to agent teams',
    intro: 'We start from the school year and let the trial lesson adjust it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Fair shares, remainders and what changes when the team does.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and systems', p: 'Hashing, distributed work and testing at scale beside SQA Computing Science.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Multi-agent AI', p: 'Agent teams, work sharing and scaling, built in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and scaling',
    h2: 'What is consistent hashing, and why does it matter for teams of AI agents?',
    intro: 'Consistent hashing places workers and jobs on a circle of hash values so that when a worker joins or leaves, only a fair share of jobs moves, instead of nearly all of them as with simple modulo division.',
    p1: 'Sharing Kilmarnock\'s 12,925 mapped buildings between agents, adding a fifth agent moved 80.6% of jobs under modulo but 19.2% on a hash ring with 100 virtual points per agent, with no agent above 1.15 times the average load.',
    p2: 'Learners who have built the ring ask of any multi-agent system: what happens to the work when one agent is added or goes offline?',
    closer: 'Designing for change keeps Kilmarnock teenagers in control of the agent teams they build, and learning to code is where that design sense comes from in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Onthank to Shortlees, online',
    intro: 'Any computer with a webcam and a video-ready connection is enough.',
    cells: [
      { h3: 'Learner at the helm', p: 'Code and prompts are the student\'s own; tutors follow via screen share and ask what would break if the design changed.' },
      { h3: 'Pitched by the trial', p: 'The free first lesson shows where to begin, and SQA courses are noted.' },
      { h3: 'Try before paying', p: 'We teach the opening session free and point you to a course afterwards.' },
      { h3: 'Classes by stage', p: 'Five to ten UK learners at the same level in each class.' },
      { h3: 'Two a week', p: 'No lessons in school holidays.' },
      { h3: 'Fixed slot', p: 'UK clock changes are handled by our tutors; your time does not move.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level who are free the same evening rarely live near each other. Video removes the problem.' }
  },

  fees: {
    h2: 'Kilmarnock fees',
    intro: 'Kilmarnock learners pay our international rates, which apply outside India.',
    first: 'A full free lesson, then advice on a course.',
    group: 'About eight live group lessons a month.',
    private: 'About eight live private lessons a month.',
    closer: 'Every price is in US dollars rather than pounds; charging begins after the trial fixes the course and the weekly slot, and the pricing page handles breaks, absences and format swaps.'
  },

  reviewsH2: 'Google reviews from East Ayrshire parents and learners further afield',

  book: {
    h2: 'Book a free Kilmarnock lesson',
    intro: 'One age or school year and one hobby let us plan the trial, which might be a card-dealing puzzle, a Scratch game built with an AI, first Python steps, or sharing real jobs between simple agents.',
    success: 'Thank you. Your Kilmarnock request is with us.'
  },

  faq: {
    h2: 'Kilmarnock questions',
    intro: 'Agent teams, the hashing project, vibe coding, Python and the practical details.',
    items: [
      { q: 'What is the population of Kilmarnock?', a: 'National Records of Scotland estimated 46,970 people in the Kilmarnock locality in mid-2020.' },
      { q: 'Are vibe coding and AI agents classes available online in Kilmarnock?', a: 'Yes. Classes happen over live video, so ages 6 to 67 anywhere in East Ayrshire can take part.' },
      { q: 'What is a hash function?', a: 'A rule that turns any input, such as a building ID, into a fixed-size number that looks random but is always the same for the same input.' },
      { q: 'What are virtual nodes in consistent hashing?', a: 'Extra points on the ring for each worker. With 100 per agent, no agent in our Kilmarnock test carried more than 1.15 times the average share of jobs.' },
      { q: 'What does the Kilmarnock project involve?', a: 'Sharing 12,925 mapped buildings between a team of agents, then adding and removing agents and counting how many jobs must be handed over.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, at every age; the learner plans and tests while the AI helps write code.' },
      { q: 'When do learners build AI agents?', a: 'Once Python is secure, usually from S4 upward or as adults; Copilot Studio agents are private lessons.' },
      { q: 'Do you support SQA Computing Science and Maths?', a: 'Yes, from National 5 to Advanced Higher, taught for understanding without promised grades.' },
      { q: 'What do lessons cost?', a: 'Nothing for lesson one, afterwards USD 100 per month grouped or USD 150 per month on your own.' },
      { q: 'What about school holidays?', a: 'We break for them; tell us when they fall.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Ayrshire and west of Scotland pages',
    html: 'Pages with projects of their own: <a class="cg-inline-link" href="/coding-classes-in-east-ayrshire">East Ayrshire</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-ayr">Ayr</a> (aligning two editions of a poem), <a class="cg-inline-link" href="/coding-classes-in-north-ayrshire">North Ayrshire</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-paisley">Paisley</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> reach the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Kilmarnock and East Ayrshire',
  footerPlaces: [
    { href: '/coding-classes-in-east-ayrshire', label: 'East Ayrshire' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-kmk .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-kmk .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-kmk .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-kmk .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-kmk .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.02em; }
.cg-root.cg-kmk .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-kmk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kmk .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-kmk .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-kmk .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'East Ayrshire (S12000008). Scotland: Curriculum for Excellence, SQA National 5 to Advanced Higher. NRS mid-2020 settlement and locality estimates: Kilmarnock 46,970 (Cumnock 8,700 next). postcodes.io (East Ayrshire, KA1/KA3): Altonhill, Beansburn, Bellfield, Bonnyton, Grange, Knockinlaw, Longpark, New Farm Loch, Onthank, Riccarton, Shortlees (suburban areas); Hurlford, Crosshouse (villages).',
    localProject: 'OSM API 0.6 bbox -4.545,55.590,-4.455,55.635 (16 tiles): 12,925 buildings as jobs. SHA-256 of way id. 4 to 5 agents: modulo 80.6% moved; ring 1 point 22.3% (max 1.61, min 0.29 of average); 10 points 18.4% (1.39/0.72); 100 points 19.2% (1.15/0.84); ideal 20%. 8 to 9: modulo 88.5%; ring 1 point 14.9% (2.19/0.08); 100 points 11.5% (1.12/0.89); ideal 11.1%. Lesson family: consistent hashing, virtual nodes.',
    requiredMentions: [
      '46,970',
      '12,925',
      'Onthank',
      'Bellfield',
      'Shortlees',
      'New Farm Loch',
      'Knockinlaw',
      'Bonnyton',
      'consistent hashing',
      'virtual points'
    ],
    sources: [
      { claim: 'OpenStreetMap building data for Kilmarnock, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas in East Ayrshire.', url: 'https://api.postcodes.io/places?q=Onthank' }
    ],
    rejectedClaims: [
      'Burns, football or industrial history: not read from a source; not claimed (East Ayrshire page covers Burns).',
      'That any real AI service shares work this way: described as a common pattern only; no product named.',
      'Building types or counts as a housing statistic: the IDs are used only as a list of jobs.',
      'Largest locality in East Ayrshire: per NRS mid-2020 figures quoted on the East Ayrshire page (Kilmarnock 46,970, Cumnock 8,700).',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
