'use strict';
// Coleraine (cg- town page, UK cluster Phase 8, towns band A, row 430; Northern Ireland). Keyword slug per the owner's
// rotation, with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how do agents that can only
// talk to their neighbours agree on the best route, and what happens when a bridge closes? (distance-vector routing, the
// distributed Bellman-Ford algorithm, rounds of message passing, "good news travels fast, bad news slowly", the
// count-to-infinity effect and poison reverse).
// Data (read 29 September 2026): OpenStreetMap API 0.6 over bbox -6.700,55.115,-6.630,55.150 (6 tiles, ODbL): public roads
// (motorway to living street and links; private and no-access left out), one-way rules ignored, simplified to 1,459
// junctions and 1,601 links, 119.7 km. Destination: the junction nearest the node OpenStreetMap uses to label the town
// (place=town "Coleraine", id 267763060). Bridges in the data include the way named "A2 Coleraine Bann Bridge"
// (bridge:name Bann Bridge, way 28692020) and the A29 ways named Sandelford Bridge.
// Our run (scratchpad crn/dv.py): every junction is an agent holding its distance to the destination; each synchronous
// round it asks every neighbour for its estimate and keeps the lowest neighbour estimate plus link length. Farthest
// junction 35 links from the destination; network diameter 55 links. Cold start: 41 rounds, 134,442 messages, every
// estimate equal to Dijkstra's. Bann Bridge way removed: network stays connected; 610 junctions' true distance rises
// (median 2,229 m, largest 3,170 m); plain distance-vector from the old estimates: 663 rounds, 2,124,136 messages; with
// poison reverse (an agent tells its next hop its distance is infinite): 167 rounds, 537,432 messages; both end exactly
// at Dijkstra's answers. Reopening from the closed state: 36 rounds.
// Lesson family: distance-vector routing / distributed Bellman-Ford as multi-agent coordination, count to infinity,
// poison reverse. Screened: "distance-vector", "count to infinity", "poison reverse", "split horizon", "message passing",
// "Bellman-Ford" 0 hits in content/uk (course and resource files only). Hamilton owns route inspection, Motherwell strongly
// connected components, Irvine isochrones, St Andrews BFS/DFS exploration.
// Place facts: NISRA Census 2021 MS-A01: settlement COLERAINE 24,483 (NISRA approximation); Coleraine DEA 23,625 (exact);
// Causeway Coast and Glens 141,746. OpenStreetMap locality nodes: Killowen, The Crannagh. (postcodes.io places does not
// cover Northern Ireland.)

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'COLERAINE', label: 'Coleraine', blurb: 'Vibe coding and AI agents classes for Coleraine, with a project where 1,459 road-junction agents work out routes by talking only to their neighbours, then cope with a bridge closing.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-coleraine',
  code: 'crn',
  accent: '#5C2955',
  accentRationale: 'Coleraine: a deep plum (8.89:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Coleraine',
    eyebrow: 'Coleraine, Causeway Coast and Glens, Northern Ireland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Causeway Coast and Glens' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Causeway Coast and Glens', href: '/coding-classes-in-causeway-coast-and-glens' },
    { label: 'Derry~Londonderry', href: '/best-coding-class-in-derry-londonderry' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Coleraine, Northern Ireland',
  title: 'Vibe Coding and AI Agents Classes in Coleraine | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents and Python lessons for Coleraine, Killowen and Causeway Coast and Glens learners aged 6 to 67, P1 to adult. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Coleraine, with a project where road-junction agents share routes with their neighbours and react when the Bann Bridge closes.',
  twitterDescription: 'Coleraine vibe coding, AI agents and Python classes online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Coleraine',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Coleraine and Causeway Coast and Glens, taught live with systems thinking first.'
  },

  h1: 'Vibe coding and AI agents classes in Coleraine',
  capsuleQ: 'Where can Coleraine learners find the best vibe coding and AI agents classes?',
  capsule: 'NISRA approximates Coleraine at 24,483 usual residents in the 2021 census, and counts 23,625 in the Coleraine electoral area, both within Causeway Coast and Glens, a district of 141,746. OpenStreetMap marks Killowen and The Crannagh among the town\'s localities. From P1 pupils to adults of 67, learners join India-based tutors on video for vibe coding, AI agents, Python, coding and maths, alone or with four to nine others at their level. Systems thinking comes before tools, so learners understand how a team of agents reaches a shared answer and where it can go wrong. The first lesson is free, and we end it with a course recommendation. In the Coleraine project, 1,459 road-junction agents each learn the way to the town centre by talking only to their neighbours, then have to adjust when one bridge is taken out of the map. After that, it is USD 100 a month to stay in a group or USD 150 a month for private lessons.',
  lead: 'Some AI systems are built from many small agents, none of which sees the whole picture. Each one knows its own situation, can message its neighbours, and must still help the group reach a good answer. Early internet routing protocols worked in this way, using distance-vector routing, a distributed version of the Bellman-Ford algorithm: every router tells its neighbours how far it thinks it is from each destination, and updates its own estimate from theirs. The method is simple and it always settles, but it has a famous weakness: good news spreads fast and bad news spreads slowly. Coleraine\'s road network from OpenStreetMap, with its bridges, makes a clear test of both halves of that saying.',
  wa: 'Hello Modern Age Coders, could we book a free vibe coding or AI agents lesson for a learner in Coleraine?',

  picks: {
    eyebrow: 'Coleraine course picks',
    h2: 'Coleraine courses in systems thinking, vibe coding and agents',
    intro: 'Four starting points by age. Each one opens with a free live class, and nobody is asked for card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: passing messages along a chain and seeing how long news takes to spread.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, coded with an AI and tested hard.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the Coleraine junction agents.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Multi-agent systems, message passing and building agents in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Coleraine and Causeway Coast and Glens',
      h2: 'Coleraine, Killowen and the Causeway Coast and Glens',
      intro: 'NISRA 2021 census counts for the town, its electoral area and the district.',
      body: [
        { kind: 'table', caption: 'People counted in 2021: three NISRA areas that include Coleraine', head: ['NISRA area', 'Type', 'People'], rows: [
          ['Coleraine town', 'Settlement, approximated', '24,483'],
          ['Coleraine', 'Electoral area (DEA)', '23,625'],
          ['Causeway Coast and Glens', 'Council', '141,746']
        ] },
        { kind: 'p', text: 'The settlement and the electoral area share a name but not a boundary, which is why their figures differ; we show each as NISRA publishes it and never combine them. On OpenStreetMap, Killowen and The Crannagh appear as localities within the town. Coleraine pupils follow the Northern Ireland Curriculum, and our tutors use the same P1 to Year 14 structure, with CCEA GCSE and A level work where needed. Share your school holiday dates and we will plan around them.' },
        { kind: 'callout', h3: 'Causeway Coast, Derry~Londonderry and CCEA', p: 'See <a class="cg-inline-link" href="/coding-classes-in-causeway-coast-and-glens">coding classes in Causeway Coast and Glens</a>, <a class="cg-inline-link" href="/best-coding-class-in-derry-londonderry">Derry~Londonderry</a> and <a class="cg-inline-link" href="/ccea-a-level-software-systems-development-help">CCEA A level Software Systems Development help</a>. Our reasons for teaching thinking first are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Coleraine project',
      h2: 'Agents that only talk to neighbours: distance-vector routing on Coleraine\'s roads',
      intro: 'A network of junction agents, rounds of messages, a closed bridge, and a fix called poison reverse.',
      body: [
        { kind: 'p', text: 'The learner downloads the public roads of Coleraine from OpenStreetMap and simplifies them to 1,459 junctions joined by 1,601 links, 119.7 km in total, ignoring one-way rules for this experiment. The destination is the junction nearest the point OpenStreetMap uses to label the town. Each junction becomes an agent that remembers one number, how far it believes it is from the destination. In every round, all agents at once ask each neighbour for that neighbour\'s number, add the length of the road between them, and keep the smallest total. The destination always says zero; everyone else starts at infinity.' },
        { kind: 'table', caption: 'Distance-vector agents on Coleraine\'s road network, our Python run on OpenStreetMap data', head: ['Situation', 'Rounds until every agent is right', 'Messages exchanged'], rows: [
          ['Starting from nothing', '41', '134,442'],
          ['After closing the Bann Bridge, plain method', '663', '2,124,136'],
          ['After closing the Bann Bridge, with poison reverse', '167', '537,432'],
          ['Reopening the bridge', '36', 'Not counted']
        ] },
        { kind: 'p', text: 'From a cold start the agents agree in 41 rounds, and every final estimate matches Dijkstra\'s algorithm exactly; the farthest junction is 35 links from the destination, so good news needs only a little longer than that to reach everyone. Then the learner deletes the road OpenStreetMap names the A2 Coleraine Bann Bridge. Traffic can still cross by Sandelford Bridge, but 610 junctions now have a longer true route, typically by 2,229 m. Their agents do not know that. Each still hears old, optimistic numbers from neighbours who were relying on it, so estimates creep upwards a little at a time. The plain method takes 663 rounds and over two million messages to settle. With poison reverse, where an agent tells the neighbour it routes through that its own distance is infinite, it takes 167. Reopening the bridge, good news again, takes just 36.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Pass a whispered number down a row of friends, then change the start and see how long the correction takes to arrive.' },
          { h3: 'Years 8 to 10', p: 'Build a tiny road network in Python and let each junction update from its neighbours one round at a time.' },
          { h3: 'Years 11 to 14', p: 'Run distance-vector routing on all of Coleraine, close a bridge, and add poison reverse to speed recovery.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap roads, our agents', p: 'Road geometry and bridge names are from OpenStreetMap and its contributors under the Open Database Licence. One-way rules were ignored and the closure is imaginary; the agents, rounds and message counts are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agent teams',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Stale news loves an echo chamber, even one made of software.',
      body: [
        { kind: 'table', caption: 'From the Coleraine junction agents to teams of AI agents', head: ['In the routing project', 'When AI agents share information'], rows: [
          ['41 rounds to agree from scratch', 'Local messages can reach a correct global answer'],
          ['663 rounds after a bridge closed', 'Bad news spreads slowly through a team'],
          ['Neighbours kept echoing old numbers', 'Agents can reinforce each other\'s stale beliefs'],
          ['Poison reverse cut it to 167', 'Simple rules about who to trust help a lot'],
          ['Reopening took only 36 rounds', 'Good news spreads fast, which can hide the problem']
        ] },
        { kind: 'p', text: 'Multi-agent AI systems pass summaries, plans and findings between agents, and the same trap applies: if agent A relied on agent B, and B now relies on A, a wrong belief can bounce between them for a long time. With vibe coding the learner states the goal while an AI produces the code; in Coleraine lessons they also decide what each agent may believe from others and how old news is flagged, then test it by breaking something on purpose. Agents that act for people need that design more than any. Agent building is for learners whose Python already stands on its own, mostly sixth-formers and adults, and Copilot Studio agents are covered only one-to-one. Next steps are on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the agents course for UK students</a>; our teaching principle is on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We used NISRA and OpenStreetMap open data; neither organisation is involved with Modern Age Coders, and the junction agents, bugs included, are our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From whisper chains to agent networks',
    intro: 'The school year, P1 to Year 14, is our first guide; the trial lesson confirms the level.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Passing messages, keeping track and noticing when news goes stale.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to Year 9', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 10 to 14', h3: 'Python and networks', p: 'Graphs, routing and simulation alongside CCEA GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Multi-agent AI', p: 'Agent teams, message passing and trust rules, built in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and coordination',
    h2: 'How do AI agents coordinate when each can only talk to its neighbours?',
    intro: 'They pass messages: each agent shares its current estimate with its neighbours and updates from theirs, as in distance-vector routing, a distributed Bellman-Ford method that reaches the right answer but spreads bad news slowly.',
    p1: 'On Coleraine\'s road network, 1,459 junction agents agreed on every route in 41 rounds, but after the Bann Bridge was removed they needed 663 rounds to recover, or 167 with poison reverse.',
    p2: 'Learners who have watched that happen ask of any team of AI agents: how does a correction reach everyone, and what stops old beliefs bouncing back?',
    closer: 'Designing how agents share news keeps Coleraine teenagers in control of the systems they build, and learning to code is where that begins in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Lessons reach Coleraine by video',
    intro: 'No kit beyond a webcam-equipped computer and broadband good enough for a call.',
    cells: [
      { h3: 'Learner-built', p: 'Everything on screen is typed by the student, and the tutor keeps asking what the next round will change.' },
      { h3: 'Level from the trial', p: 'The free session shows where to start, with any CCEA exam noted.' },
      { h3: 'Trial on the house', p: 'Session one is free, and it closes with the course we would choose for the learner.' },
      { h3: 'Classmates at your level', p: 'Each group seats five to ten learners, chosen by stage rather than by town.' },
      { h3: 'Twice a week', p: 'Lessons pause in school holidays.' },
      { h3: 'Same hour all year', p: 'Our tutors move with the UK clock changes so you do not have to.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level who share a free evening rarely live near each other. Online, distance is no obstacle.' }
  },

  fees: {
    h2: 'Coleraine fees',
    intro: 'Coleraine learners pay our international rates, which cover every country except India.',
    first: 'A full lesson free, followed by our advice.',
    group: 'Around eight live group lessons a month.',
    private: 'Around eight live one-to-one lessons a month.',
    closer: 'Fees are set in US dollars, never pounds, and billing starts only once the trial has fixed a course and a weekly slot. The pricing page explains holidays, absences and switching between group and private.'
  },

  reviewsH2: 'Google reviews: north coast parents and UK learners',

  book: {
    h2: 'Book a free Coleraine lesson',
    intro: 'All we need is an age or year group and one interest. The trial could open with a whisper-chain puzzle, a Scratch game made with an AI, first steps in Python, or a few junction agents passing messages.',
    success: 'Thank you. Your Coleraine request is with us.'
  },

  faq: {
    h2: 'Coleraine questions',
    intro: 'Neighbour-to-neighbour agents, the bridge experiment, vibe coding and lesson logistics.',
    items: [
      { q: 'What is the population of Coleraine?', a: 'NISRA approximates the Coleraine settlement at 24,483 usual residents in the 2021 census.' },
      { q: 'Can Coleraine learners take these classes online?', a: 'They are. Every class is a live video call, open to ages 6 to 67 from Coleraine to Limavady and Ballymoney.' },
      { q: 'What is the Bellman-Ford algorithm?', a: 'A shortest-path method that repeatedly relaxes every link, improving each distance estimate from its neighbours. Run by many agents at once, it becomes distance-vector routing.' },
      { q: 'What is the count-to-infinity problem?', a: 'When a route breaks, neighbours keep quoting each other\'s outdated distances, so estimates climb slowly instead of updating at once. After our Bann Bridge closure the plain method took 663 rounds to settle.' },
      { q: 'What does the Coleraine project involve?', a: 'Turning 119.7 km of Coleraine roads into 1,459 junction agents that learn routes by messaging neighbours, then closing a bridge and measuring the recovery with and without poison reverse.' },
      { q: 'How does vibe coding fit in?', a: 'It runs through every stage: the learner sets the goal in words, the AI drafts code, and the learner hunts down whatever is wrong with it.' },
      { q: 'How soon do learners build agents?', a: 'When their Python no longer needs propping up, usually sixth form or later; Copilot Studio is private tuition only.' },
      { q: 'Do you support CCEA GCSE and A level?', a: 'Yes, in computing and maths, including A level Software Systems Development, taught for understanding with no grade promised.' },
      { q: 'What are the fees?', a: 'The trial costs nothing; carrying on is USD 100 per month with a group or USD 150 per month on your own.' },
      { q: 'Are lessons paused in the holidays?', a: 'They do stop for school holidays; just tell us when.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Elsewhere on the north coast and across Northern Ireland',
    html: 'Each runs a different experiment: <a class="cg-inline-link" href="/coding-classes-in-causeway-coast-and-glens">Causeway Coast and Glens</a> (why three runways), <a class="cg-inline-link" href="/best-coding-class-in-derry-londonderry">Derry~Londonderry</a>, <a class="cg-inline-link" href="/coding-classes-in-mid-and-east-antrim">Mid and East Antrim</a> and <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a>. For other places, start from <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Coleraine and Causeway Coast and Glens',
  footerPlaces: [
    { href: '/coding-classes-in-causeway-coast-and-glens', label: 'Causeway Coast and Glens' },
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-crn .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-crn .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-crn .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-crn .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-crn .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-crn .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-crn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-crn .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-crn .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-crn .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Causeway Coast and Glens (N09000004). Northern Ireland Curriculum, P1 to Year 14, CCEA GCSE and A level. NISRA Census 2021 MS-A01: settlement COLERAINE 24,483 (approximation); Coleraine DEA 23,625; LGD 141,746. OpenStreetMap locality nodes: Killowen, The Crannagh.',
    localProject: 'OSM API 0.6 bbox -6.700,55.115,-6.630,55.150: public roads simplified to 1,459 junctions, 1,601 links, 119.7 km (one-way ignored). Destination nearest place=town node 267763060. Eccentricity 35 links, diameter 55. Synchronous distance-vector: cold start 41 rounds, 134,442 messages (matches Dijkstra). Remove way 28692020 (A2 Coleraine Bann Bridge): 610 junctions longer (median +2,229 m, max +3,170 m); plain 663 rounds, 2,124,136 messages; poison reverse 167 rounds, 537,432 messages; reopening 36 rounds. Lesson family: distance-vector routing, distributed Bellman-Ford, count to infinity, poison reverse.',
    requiredMentions: [
      '24,483',
      '23,625',
      '119.7 km',
      'Killowen',
      'The Crannagh',
      'Bann Bridge',
      'Sandelford Bridge',
      'distance-vector',
      'poison reverse',
      'count-to-infinity'
    ],
    sources: [
      { claim: 'NISRA Census 2021 MS-A01 usual resident population by settlement, DEA and LGD.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'OpenStreetMap roads, bridges and locality names in Coleraine, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'OpenStreetMap way 28692020, tagged bridge:name Bann Bridge.', url: 'https://www.openstreetmap.org/way/28692020' }
    ],
    rejectedClaims: [
      'That the Bann Bridge has closed or will close: the closure is imaginary, for the experiment only.',
      'River, university or harbour history: not read from a source; not claimed.',
      'Real traffic routes or one-way rules: ignored in the model and said so.',
      'Transfer test advice, community background or identity data: excluded by rule.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
