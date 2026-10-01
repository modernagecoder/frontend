'use strict';
// Urmston (cg- town page, UK cluster Phase 10, towns band B, row 550). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: many agents share one street network and each
// plans its own shortest route; what happens when their plans meet, and how do they plan around each other?
// (Multi-agent path finding by prioritised planning with a reservation table: cooperative A*; priority order.)
// Data (read 1 October 2026): one Overpass query for highway ways trunk to living_street (no service roads) in 53.433 to
// 53.468 N, 2.412 to 2.322 W: 1,606 ways, 204.4 km. Graph (scratchpad urm/mapf.py): junctions and road ends only, largest
// connected part 2,113 points, 2,479 links. Invented rules: robots move 20 m per 10-second tick; a link takes its length
// / 20 m ticks (at least 1); one robot per junction per tick; no two robots crossing the same link head-on at overlapping
// times; robots leave the network on arrival; distinct starts and goals (seed 20261001). Space-time A* with waiting,
// heuristic = true remaining ticks. Independent shortest routes, conflicts (robots involved): 20 robots 11 (12); 40 robots
// 37 (29), total 5,173 ticks, mean trip 2.59 km; 80 robots 152 (68). Prioritised planning, conflicts after: 0 in every
// case (checked). Delay in ticks: 20 robots longest-first 63 (10 delayed, max 16), shortest-first 70 (7, max 24), 20 random
// orders 50 to 86 (median 71); 40 robots 165 (22 delayed, max 21), 163 (17, max 24), random 125 to 209 (median 170.5);
// 80 robots 457 (51, max 31), 493 (43, max 30), random 416 to 640 (median 479). No robot failed to find a plan. 40 robots
// longest-first: 9 waited at least once, 13 were delayed by detours alone.
// Lesson family: multi-agent path finding, prioritised planning, reservation table. Screened: "multi-agent path",
// "reservation table", "prioriti[sz]ed planning" 0 hits; claimed in claims.txt. Keighley = leader election; Coleraine =
// distance-vector routing; Kilmarnock = consistent hashing; different families.
// Place facts: Trafford TS001 235,052 (a requiredMention on the Sale page; printed, not listed). ONS 2021 BUA (published):
// Urmston 41,740. postcodes.io suburban areas with nearest postcode in the Urmston BUA: Flixton, Davyhulme.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'URMSTON', label: 'Urmston', blurb: 'Vibe coding and AI agents classes for Urmston, Flixton and Davyhulme, with robots that must plan routes around each other on the town\'s streets.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-urmston',
  code: 'urm',
  accent: '#322C9E',
  accentRationale: 'Urmston: a muted ink blue (10.55:1 on white, 8.57:1 on the ledger beige), chosen by hand at least 40 RGB steps from every Greater Manchester and North West page',
  pageType: 'city',
  place: {
    name: 'Urmston',
    eyebrow: 'Urmston, Flixton and Davyhulme, Trafford',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater Manchester' },
      { type: 'AdministrativeArea', name: 'North West England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Greater Manchester', href: '/coding-classes-in-greater-manchester' },
    { label: 'Sale', href: '/ai-and-programming-classes-in-sale' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Urmston, Greater Manchester',
  title: 'Vibe Coding and AI Agents Classes in Urmston, Trafford',
  description: 'Vibe coding, AI agents, Python and coding lessons on live video for Urmston, Flixton and Davyhulme in Trafford, ages 6 to 67. Your first lesson is free.',
  ogDescription: 'Vibe coding and AI agents classes for Urmston, with a project on many robots planning routes around each other.',
  twitterDescription: 'Urmston vibe coding and AI agents lessons, live online for ages 6 to 67. Try one free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Urmston',
    description: 'Vibe coding, AI agent, Python and maths lessons online for children, teenagers and adults in Urmston, Flixton, Davyhulme and Trafford, built on agents tested on local open data.'
  },

  h1: 'Vibe coding and AI agents classes in Urmston',
  capsuleQ: 'Which vibe coding and AI agents classes are best for Urmston?',
  capsule: 'In 2021 the census counted 41,740 usual residents in the Urmston built-up area, which takes in Flixton and Davyhulme, and 235,052 in the borough of Trafford. From India, our tutors teach Urmston learners between six and 67 over live video: vibe coding, agents, Python, general programming and maths, privately or with five to ten classmates at the same stage. The first lesson is free, and a course is suggested once it is over. The Urmston project puts dozens of simulated delivery robots on the town\'s real road network, lets each plan its own shortest route, counts the collisions, and then has them plan one after another around a shared timetable. Beyond the trial, a monthly group place costs USD 100 and monthly private tuition USD 150.',
  lead: 'One agent finding its way across town is a solved problem. Forty agents doing it at once is not, because the shortest route for each one ignores where the others will be. The fix most systems use is surprisingly social: agents plan one at a time and write their plans into a shared timetable that later agents must respect. The roads of Urmston, Flixton and Davyhulme make a real map to try it on.',
  wa: 'Hi Modern Age Coders, could we book a free vibe coding or AI agents lesson? We are in Urmston.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Vibe coding and AI agents courses for Urmston learners',
    intro: 'Our usual first choice at each age. Each course starts with a live lesson that is free and asks for no card.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children design Scratch games with an AI and then test and fix them.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Taking turns, planning moves and following rules, the ideas behind cooperating agents.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python projects built with AI, including the Urmston robots and their shared timetable.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'A full Python route for adults, the foundation for building real agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Urmston in Trafford',
      h2: 'Urmston, Flixton and Davyhulme',
      intro: 'The census counts for the town and the borough, and the two suburbs we could confirm.',
      body: [
        { kind: 'table', caption: 'Census 2021 usual residents (ONS)', head: ['Area', 'Residents'], rows: [
          ['Urmston built-up area', '41,740'],
          ['Trafford borough', '235,052']
        ] },
        { kind: 'p', text: 'Trafford also includes Sale, Altrincham, Stretford, Hale, Partington and more, so the borough count covers a much bigger area than the town and the two should not be combined. Flixton and Davyhulme are the named suburban areas on postcodes.io whose nearest postcode lies in the Urmston built-up area; that is the only test we used to list them. Urmston schools follow the national curriculum for England, and lessons can sit beside GCSE or A level computer science for learners in Year 9 and above.' },
        { kind: 'callout', h3: 'Trafford and Manchester', p: 'Nearby pages cover <a class="cg-inline-link" href="/ai-and-programming-classes-in-sale">Sale</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-altrincham">Altrincham</a>, <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a> and <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a>. We explain why thinking comes before AI tools on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">our thinking-first approach</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Urmston robots',
      h2: 'When every agent takes the shortest route',
      intro: 'A real road network, invented robots, and a timetable they all have to share.',
      body: [
        { kind: 'p', text: 'The learner downloads the roads of Urmston, Flixton and Davyhulme from OpenStreetMap in one query, 1,606 roads adding up to 204.4 km, and reduces them to a network of 2,113 junctions and road ends joined by 2,479 links. Then the rules are invented, and stated as invented. Imaginary delivery robots move 20 metres every 10-second tick. Only one robot may stand at a junction in any tick, and two robots may not travel along the same link towards each other at the same time. Each robot gets its own start and destination, and it leaves the network when it arrives.' },
        { kind: 'p', text: 'First every robot plans alone, taking its shortest route and ignoring the others. With 40 robots on the road, those plans clash 37 times, and 29 of the 40 robots are caught up in at least one clash. Then the learner switches to prioritised planning with a reservation table, the method David Silver called cooperative A* in 2005. Robots plan one at a time. Each searches in space and time, allowed to move or to wait a tick, and treats every junction and link already booked by an earlier robot as unavailable at that moment. Its own route is then written into the table for the next robot to respect.' },
        { kind: 'table', caption: 'Simulated robots on the Urmston road network: clashes when planning alone, and total delay in ticks after planning around each other, our Python run', head: ['Robots', 'Clashes, planning alone', 'Delay, longest trip first', 'Delay, shortest trip first', 'Delay, 20 random orders'], rows: [
          ['20', '11 (12 robots)', '63 ticks', '70 ticks', '50 to 86 ticks'],
          ['40', '37 (29 robots)', '165 ticks', '163 ticks', '125 to 209 ticks'],
          ['80', '152 (68 robots)', '457 ticks', '493 ticks', '416 to 640 ticks']
        ] },
        { kind: 'p', text: 'After prioritised planning there are no clashes at all, which the program confirms by checking every pair of plans, and no robot is left without a route. The cost is small in total: for 40 robots, 165 ticks of delay, about 27 and a half minutes spread across the whole fleet against 5,173 ticks of travel, with the worst single robot 21 ticks, three and a half minutes, late. Nine robots waited at a junction at least once, and thirteen more were delayed only by taking a longer way round. The order matters more than it looks. With 80 robots, twenty random orders produced anything from 416 to 640 ticks of delay, and planning the longest trips first beat planning the shortest first. No order is guaranteed to win, and choosing it is a real design decision.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Move three counters across a squared board in turns without two ever sharing a square.' },
          { h3: 'Ages 11 to 15', p: 'Plan one route in Python with breadth-first search, then add a second robot and find the clash.' },
          { h3: 'Ages 15 and up', p: 'Write space-time A* with a reservation table and test different priority orders.' }
        ] },
        { kind: 'callout', h3: 'Sources and assumptions', p: 'Roads are from OpenStreetMap contributors under the Open Database Licence, read with one Overpass query on 1 October 2026. Prioritised planning goes back to Erdmann and Lozano-Pérez in 1987, and cooperative A* to Silver in 2005. The robots, their speed and every rule about junctions and links are ours, invented for the exercise; no delivery robots are claimed to operate in Urmston.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents together',
      h2: 'What the Urmston robots teach about AI agents',
      intro: 'Agents that are each sensible can still get in each other\'s way.',
      body: [
        { kind: 'table', caption: 'From Urmston robots to multi-agent AI', head: ['What happened on the roads', 'What it means for AI agents'], rows: [
          ['37 clashes from 40 sensible solo plans', 'Good individual plans can conflict'],
          ['A shared timetable removed every clash', 'Agents need a shared record of what is taken'],
          ['9 robots waited, 13 more took longer ways round', 'Giving way can mean pausing or rerouting, and both cost time'],
          ['Order changed delay from 416 to 640 ticks', 'Who goes first is a decision, not a detail'],
          ['Every plan was checked after planning', 'Verify the combined result, not just each part']
        ] },
        { kind: 'p', text: 'Teams of AI agents that share files, calendars or tools face the same problem: each one\'s plan is reasonable until it collides with another\'s. Urmston learners use vibe coding to get an AI to draft the space-time search, then read it, run it on the real network and prove to themselves that no two robots ever meet. Real agent building follows once a learner\'s Python holds up without a helper, usually around sixteen or later in life; Copilot Studio agent lessons are only ever private. Read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">why understanding beats copying</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">how our agents route for UK students works</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the ONS and postcodes.io provide the open data used on this page. None of those organisations works with us or has reviewed the simulation; its conclusions are ours alone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stage by stage',
    h2: 'From board games at seven to cooperating agents as an adult',
    intro: 'Our free lesson decides the starting stage; school year is only a hint.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Rules and turns', p: 'Taking turns, following rules and planning moves, on paper and screen.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Games with an AI', p: 'Scratch built with AI help, then first steps in Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Search and simulation', p: 'Python projects with AI, search algorithms and simulated agents.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Python, then agent teams', p: 'Confident Python first, then generative AI and agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Many agents',
    h2: 'What is multi-agent path finding, and what does it teach about teams of AI agents?',
    intro: 'Multi-agent path finding is the problem of planning routes for many agents on one map so that no two are in the same place at the same time, and it teaches that a team of AI agents needs a shared record of claimed resources, because plans that are each sensible can still collide.',
    p1: 'On Urmston\'s roads, 40 robots planning alone clashed 37 times; planning in turn with a reservation table removed every clash for 165 ticks of total delay, and with 80 robots the planning order alone moved the delay between 416 and 640 ticks.',
    p2: 'A learner who has built the timetable asks of any group of AI agents who records what each one has claimed, and who checks the combined plan.',
    closer: 'Urmston teenagers who can make agents cooperate in their own code will be ready to manage AI teams, and that starts with learning to program.',
    blogAnchor: 'why coding still belongs in a teenager\'s week in 2026'
  },

  delivery: {
    eyebrow: 'Lesson basics',
    h2: 'How Urmston lessons are run',
    intro: 'Each lesson happens live over video. A laptop or desktop with a keyboard is required, since phones and tablets get in the way of real programming.',
    cells: [
      { h3: 'Learner drives', p: 'The keyboard stays with the learner; the tutor steers with questions.' },
      { h3: 'Trial finds the level', p: 'A free first lesson shows us where the learner stands before we pick a course.' },
      { h3: 'Free first session', p: 'No fee and no card to try us out.' },
      { h3: 'Five to ten together', p: 'Groups at one level, with learners joining from around the country.' },
      { h3: 'Two a week', p: 'Around eight lessons a month in term, with Trafford holidays left out if you ask.' },
      { h3: 'Unmoving slot', p: 'Clock changes are managed by us, so your lesson stays at the same UK time.' }
    ],
    spec: { title: 'Why lessons are online', p: 'The whole of Britain gives enough learners to form a group at one exact level, and video saves everyone the journey.' }
  },

  fees: {
    h2: 'Fees for Urmston learners',
    intro: 'Urmston learners pay the same fee as all our students outside India.',
    first: 'First lesson: free and full length, ending with our course suggestion.',
    group: 'Group lessons, about eight each month.',
    private: 'One-to-one lessons, about eight each month.',
    closer: 'Fees are in US dollars, and we do not quote in pounds sterling. The trial is free of charge, and billing begins only once a course and a regular slot are agreed. Holidays, missed lessons and swapping between group and private are on the pricing page.'
  },

  reviewsH2: 'Google reviews from Greater Manchester families and learners further afield',

  book: {
    h2: 'Book a free Urmston lesson',
    intro: 'Let us know how old the learner is, or their school year, and what they enjoy. The trial could be a turn-taking puzzle, a Scratch game built with an AI, some first Python, or one robot finding its way across Urmston.',
    success: 'Thanks. We have your Urmston request.'
  },

  faq: {
    h2: 'Urmston questions answered',
    intro: 'Robots, timetables, vibe coding and how lessons are arranged.',
    items: [
      { q: 'How many people live in Urmston?', a: 'The ONS counted 41,740 usual residents in the Urmston built-up area, including Flixton and Davyhulme, at the 2021 census. Trafford had 235,052.' },
      { q: 'Are there vibe coding and AI agents classes for Urmston, Flixton and Davyhulme?', a: 'Yes. Learners aged 6 to 67 in Urmston, Flixton, Davyhulme or elsewhere in Trafford can join, because every lesson is taught live over video.' },
      { q: 'What is a reservation table?', a: 'A shared record of which junction or link each agent will occupy at each moment. An agent planning later must avoid anything already reserved.' },
      { q: 'What is prioritised planning?', a: 'A way of planning for many agents by giving them an order: each plans in turn around the reserved plans of those before it. It is fast but the order affects the result.' },
      { q: 'What did the Urmston project find?', a: 'Forty simulated robots planning alone clashed 37 times on Urmston\'s roads. Planning in turn with a reservation table removed every clash at a cost of 165 ticks of total delay.' },
      { q: 'What is vibe coding?', a: 'Explaining the program you want to an AI in plain words, then reading, running and fixing the code it writes. We teach it together with hand-written Python.' },
      { q: 'When do learners build AI agents?', a: 'When their own Python is reliable, for most from about sixteen, or as adults. Copilot Studio work happens in private lessons.' },
      { q: 'Does this help with GCSE computer science?', a: 'The robot project leans on search algorithms, abstraction and testing, three topics that run through GCSE and A level computer science. Grades are never promised.' },
      { q: 'What do lessons cost?', a: 'Nothing for the first; after that USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Can lessons pause for school holidays?', a: 'Yes. Tell us which weeks and we will skip them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More in Trafford and Greater Manchester',
    html: 'Try <a class="cg-inline-link" href="/ai-and-programming-classes-in-sale">Sale</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-altrincham">Altrincham</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-stockport">Stockport</a> and <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a>. Everything else is linked from <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">our Greater Manchester page</a>, <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">the North West page</a> and <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">the UK index</a>.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Urmston and Greater Manchester',
  footerPlaces: [
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-urm .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.7vw, 2.4rem); }
.cg-root.cg-urm .cg-hero h1 { font-weight: 770; letter-spacing: -0.028em; line-height: 1.06; }
.cg-root.cg-urm .cg-capsule { border-left: 3px solid var(--cg-accent); background: color-mix(in srgb, var(--cg-accent) 4%, transparent); padding: 0.85rem 1rem; }
.cg-root.cg-urm .cg-eyebrow { letter-spacing: 0.14em; font-weight: 660; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-urm .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.021em; }
.cg-root.cg-urm .cg-table caption { font-weight: 610; text-align: left; font-size: 0.9rem; }
.cg-root.cg-urm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-urm .cg-table th { font-weight: 740; }
.cg-root.cg-urm .cg-ladder-col { border-top: 3px dotted var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-urm .cg-callout { border-left-width: 5px; border-radius: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Trafford (E08000009), Census 2021 TS001 usual residents 235,052. ONS 2021 BUA (published): Urmston 41,740. English national curriculum, GCSE and A level. postcodes.io suburban areas with nearest postcode in the Urmston BUA: Flixton, Davyhulme.',
    localProject: 'Multi-agent path finding by prioritised planning with a reservation table (cooperative A*). One Overpass query, roads trunk to living_street, 53.433 to 53.468 N, 2.412 to 2.322 W: 1,606 ways, 204.4 km; graph 2,113 points, 2,479 links. Invented rules: 20 m per 10 s tick, one robot per junction per tick, no head-on link sharing. Solo plans clash: 20 robots 11, 40 robots 37 (29 involved), 80 robots 152. Prioritised: 0 clashes; delay 40 robots longest-first 165 ticks (max 21), shortest-first 163; 80 robots random orders 416 to 640, longest-first 457, shortest-first 493.',
    requiredMentions: [
      '41,740',
      'Flixton',
      'Davyhulme',
      'reservation table',
      'cooperative A*',
      '2,113 junctions',
      '37 times',
      '165 ticks',
      '416 to 640'
    ],
    sources: [
      { claim: 'OpenStreetMap contributors, road ways via the Overpass API, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'Silver D. (2005), Cooperative pathfinding, Proceedings of the AAAI Conference on Artificial Intelligence and Interactive Digital Entertainment 1, 117 to 122.', url: 'https://doi.org/10.1609/aiide.v1i1.18726' },
      { claim: 'Erdmann M. and Lozano-Pérez T. (1987), On multiple moving objects, Algorithmica 2, 477 to 521.', url: 'https://doi.org/10.1007/BF01840371' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations and output-area lookup.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for Trafford.', url: 'https://api.postcodes.io/places?q=Flixton' }
    ],
    rejectedClaims: [
      'That delivery robots operate in Urmston: none claimed; the robots are invented and labelled so.',
      'Real traffic, speeds or journey times: not modelled; ticks are a simulation unit.',
      'That longest-first is always the better order: true in two of three runs here only (shortest-first won at 40 robots); stated as a single experiment.',
      'That prioritised planning always finds a plan: it can fail in general; none failed here, stated.',
      'Woodsend, Lostock and Moorside as suburbs: no matching postcodes.io suburban area; left out.',
      'Sterling prices: none.'
    ]
  }
};
