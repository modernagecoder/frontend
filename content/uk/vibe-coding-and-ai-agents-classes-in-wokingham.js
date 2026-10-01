'use strict';
// Wokingham (cg- town page, UK cluster Phase 10, towns band B, row 510). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how should an agent travel when it only finds
// out a road is shut by arriving at it? (Canadian traveller problem.)
// Data (read 30 September 2026): OpenStreetMap via one Overpass query (wkh/q.txt), bounding box 51.371,-0.896,51.429,-0.8
// (the postcodes.io extent of the Wokingham place record, converted from grid references). Ways tagged highway =
// motorway, trunk, primary, secondary, tertiary, unclassified, residential, living_street or a link road. 2,839 ways.
// Our run (scratchpad wkh/ctp.py, seed 2026): junction graph of the largest connected piece (pass-through points merged):
// 3,382 junctions, 3,712 links, 271.6 km. For each closure rate, 500 trips between random junctions at least 2 km apart
// by road; each link shut independently with that probability; a draw is thrown away if the closures cut the
// destination off (72 draws at 2%, 236 at 5%, 986 at 10%), so kept trips are the ones that stayed possible.
// Agent "junction-only": knows the map, not the closures; sees the state of the links at the junction it stands on;
// always follows the shortest route consistent with what it has seen. Agent "one junction ahead": also sees the links at
// every junction one open link away. Hindsight = shortest route knowing every closure from the start.
//   2%: open-map mean 4,904 m; hindsight 5,216 m; junction-only 5,776 m, ratio to hindsight mean 1.083, median 1.000,
//       95th pct 1.482, max 2.33, 271 of 500 equal to hindsight, 2.16 replans per trip; one-ahead 5,669 m, 1.066, 305, max 2.19.
//   5%: hindsight 5,886 m; junction-only 7,566 m, mean 1.232, median 1.100, max 3.66, 142 of 500; one-ahead 7,231 m, 1.185, 176.
//   10%: hindsight 6,507 m; junction-only 10,444 m, mean 1.504, median 1.322, max 5.85, 55 of 500; one-ahead 9,579 m, 1.393, 75.
// Lesson family: Canadian traveller problem (travel with unknown blockages, replanning, cost of missing information).
// Screened: "canadian travel" 0 hits in content/, 0 in claims and spent lists; claimed in claims.txt. Berkshire county
// page = ensemble forecast; Bracknell = quantisation; Reading = copy chain; Clacton = potential field (different idea:
// no map); Kettering = pursuit on a street graph.
// Place facts: Wokingham unitary authority TS001 177,503. ONS 2021 BUA (published): Wokingham 50,325. postcodes.io
// (Wokingham unitary): Emmbrook (suburban area, RG41), Barkham and Sindlesham (villages, RG41), Finchampstead (village,
// RG40), Winnersh (RG41).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WOKINGHAM', label: 'Wokingham', blurb: 'Vibe coding and AI agents classes for Wokingham, with an agent that crosses the town while finding shut roads only on arrival.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-wokingham',
  code: 'wkh',
  accent: '#BE185D',
  accentRationale: 'Wokingham: a strong raspberry pink (6.04:1 on white), picked by hand; no recent page sits in this hue',
  pageType: 'city',
  place: {
    name: 'Wokingham',
    eyebrow: 'Wokingham, Berkshire, South East England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Wokingham' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Berkshire', href: '/coding-classes-in-berkshire' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wokingham, Berkshire',
  title: 'Vibe Coding and AI Agents Classes in Wokingham | Ages 6 to 67',
  description: 'Vibe coding, AI agents, Python and coding classes for Wokingham, Emmbrook, Barkham and Finchampstead, ages 6 to 67. Live online tutors, first lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Wokingham, with a project where an agent meets shut roads it was never told about.',
  twitterDescription: 'Wokingham vibe coding, AI agents and Python classes, live online for ages 6 to 67. Free first lesson.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Wokingham',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Wokingham and the surrounding borough, taught live with projects about planning when information is missing.'
  },

  h1: 'Vibe coding and AI agents classes in Wokingham',
  capsuleQ: 'Which are the best vibe coding and AI agents classes in Wokingham?',
  capsule: 'The Office for National Statistics counted 50,325 usual residents in the Wokingham built-up area at the 2021 census. Emmbrook is recorded as a suburban area of the borough, and Barkham, Sindlesham and Finchampstead as villages in its RG40 and RG41 postcode districts. Anyone from six to 67 in these places can take vibe coding, AI agents, Python, coding and maths with us; teaching is by live video call and our tutors work from India. Lessons are one-to-one, or shared with five to ten learners who have reached the same point. The habit we build is to reason a problem through yourself and only then let a machine, or an AI, do the typing. Your first lesson costs nothing and finishes with our view of which course fits. For the Wokingham project, a software agent crosses the town on a map of 3,382 junctions while some roads are shut, and it learns about each closure only by driving up to it. Carrying on costs USD 100 each month in a shared class, or USD 150 each month with a tutor to yourself.',
  lead: 'A route planner that knows every closure in advance has an easy job: leave the shut roads out and find the shortest way. A delivery driver, a robot or an AI agent rarely has that luxury. It sets off with a map that was true yesterday and discovers today\'s surprises one at a time. Computer scientists call this the Canadian traveller problem, after a driver who cannot tell which roads are snowed in until reaching them. The interesting questions are how much further such a traveller goes than someone with perfect knowledge, and how much a little extra information is worth. This project measures both on the streets of Wokingham.',
  wa: 'Hello Modern Age Coders, please could you arrange a free vibe coding or AI agents lesson for a learner in Wokingham.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Four Wokingham starting courses',
    intro: 'Pick by age. All four begin with a live trial lesson that is free and needs no payment details.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: they describe a Scratch game to an AI, then test every piece it hands back.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Learning how to think: plans, back-up plans and what to do when the first idea is blocked.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Teenagers vibe code in Python and on the web, and build the Wokingham replanning agent as a project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from nothing to graph search, automation and agents that cope with surprises.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The town in figures',
      h2: 'Wokingham, Emmbrook, Barkham and Finchampstead',
      intro: 'Two census counts and the place names the postcode gazetteer gives for the borough.',
      body: [
        { kind: 'table', caption: 'Wokingham town and borough, Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Wokingham built-up area', '50,325'],
          ['Wokingham borough (unitary authority)', '177,503']
        ] },
        { kind: 'p', text: 'These are two separate published figures. The borough count covers other settlements as well as the town, so neither should be added to or taken from the other. In the postcodes.io gazetteer, Emmbrook appears as a suburban area in RG41, Barkham and Sindlesham as RG41 villages, Finchampstead as a village in RG40 and Winnersh as a settlement in RG41, every one of them inside the borough. Wokingham schools teach the English national curriculum, so a child\'s year group, anywhere from Year 2 up to Year 13, tells us where to start, and older pupils can have lessons lined up with GCSE or A level computer science.' },
        { kind: 'callout', h3: 'Elsewhere in Berkshire', p: 'See <a class="cg-inline-link" href="/coding-classes-in-berkshire">coding classes in Berkshire</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bracknell">Bracknell</a> and <a class="cg-inline-link" href="/best-coding-class-in-reading">Reading</a>. Our reasons for putting thinking ahead of tools are set out in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Wokingham project',
      h2: 'The Canadian traveller problem on Wokingham streets',
      intro: 'The agent has the map. Nobody has told it which roads are shut today.',
      body: [
        { kind: 'p', text: 'One request to OpenStreetMap returns 2,839 mapped roads inside a box around Wokingham, from main roads to residential streets. The learner\'s program joins them into a network of 3,382 junctions and 3,712 links, 271.6 km of road in all. Then the experiment begins. The program picks two junctions at least 2 km apart by road and shuts each link at random with a fixed chance. The agent starts with the full map and no knowledge of the closures. Standing at a junction, it can see whether the roads leaving that junction are open. Each time it spots a closure it replans the shortest route using everything seen so far. We compare its journey with a hindsight route, the shortest one a traveller could take who knew every closure before setting out.' },
        { kind: 'table', caption: 'Replanning agent against the hindsight route, 500 Wokingham trips at each closure rate (our Python run, OpenStreetMap data)', head: ['Links shut', 'Trips as short as hindsight', 'Average distance, hindsight = 1', 'Worst trip'], rows: [
          ['2%', '271 of 500', '1.083', '2.33'],
          ['5%', '142 of 500', '1.232', '3.66'],
          ['10%', '55 of 500', '1.504', '5.85']
        ] },
        { kind: 'p', text: 'With 2% of links shut, the average open-map route was 4,904 m, the hindsight route 5,216 m and the agent\'s actual journey 5,776 m. It replanned a little over twice per trip. More than half its journeys could not have been shorter. The cost sits in the tail: one trip in twenty was at least 1.48 times the hindsight distance, and the unluckiest was 2.33 times. At 10% the typical trip is about a third longer than hindsight and the worst is nearly six times.' },
        { kind: 'p', text: 'Next the learner gives the agent slightly better eyes: it can now also see the roads at any junction one open link ahead. Nothing else changes. At 2% closures the perfect trips rise from 271 to 305 and the average factor falls from 1.083 to 1.066. At 5% the factor drops from 1.232 to 1.185, and at 10% from 1.504 to 1.393. A small amount of early warning is worth real distance, and the learner can put a number on it. Two cautions belong with these results. The closures are random draws made by our program and have nothing to do with actual roadworks in Wokingham. And we kept only trips where the destination could still be reached, discarding 72 draws at 2%, 236 at 5% and 986 at 10%, so the figures describe journeys that remained possible.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play it as a board game: a friend hides "road closed" cards on a paper map and you find your way across.' },
          { h3: 'Ages 11 to 15', p: 'Code the map as a Python dictionary and write the agent that replans each time it meets a closure.' },
          { h3: 'Ages 15 and up', p: 'Run 500 trips, compare against hindsight, then test whether seeing one junction ahead pays for itself.' }
        ] },
        { kind: 'callout', h3: 'Data credit and limits', p: 'Road data (C) OpenStreetMap contributors, Open Database Licence, read 30 September 2026. The network, the simulated closures and every figure are our own work. Roads that cross the edge of the box are cut there, and the results would shift with a different box or different random draws.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents and surprises',
      h2: 'What blocked roads teach about vibe coding and AI agents',
      intro: 'An agent\'s plan is a guess about a world it has not fully seen.',
      body: [
        { kind: 'table', caption: 'From the Wokingham trips to agents in general', head: ['Seen on the street network', 'What it means for an AI agent'], rows: [
          ['271 of 500 trips matched hindsight', 'An optimistic plan is often fine'],
          ['The worst trip was 2.33 times longer', 'Judge an agent by its bad days too'],
          ['One junction of lookahead cut the factor to 1.066', 'Checking ahead is cheaper than backtracking'],
          ['Each closure triggered a new plan', 'Replan when facts change, not on a timer'],
          ['Cut-off trips were discarded', 'Know which cases your test left out']
        ] },
        { kind: 'p', text: 'An AI agent is a program that is given a goal, chooses its own steps and uses tools to carry them out. The tools fail in ways the agent was not told about: a web page has moved, a file is locked, a service is down. That is a shut road. A good agent does what the Wokingham traveller does. It acts on the most sensible plan, notices when the world disagrees, and replans from where it now stands instead of starting again. Vibe coding means describing a program in plain language and letting an AI write the code. It will happily write you a route finder that assumes every road is open. A learner who has run this experiment asks the next question unprompted: what happens when a step fails? We hold agent building back until a learner\'s Python is solid, which tends to mean the mid teens or an adult course, and anything made in Copilot Studio is taught privately, never in a group. Two longer reads: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">why copying code without understanding it fails</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">how UK students learn to build agents with us</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with OpenStreetMap, the Office for National Statistics or postcodes.io. We used their open data, and the calculations and any mistakes in them are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stage by stage',
    h2: 'From paper mazes to agents that replan',
    intro: 'A year group suggests where to start, and the trial lesson confirms it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Plans and fallback plans, worked out with pencil, paper and Scratch.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'The child is the director; the AI drafts; the child tests.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Vibe coding in Python', p: 'Route finders, web apps and search, each with tests written first.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Agents and automation', p: 'Python agents that use tools, handle failure and report what they did.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and planning',
    h2: 'What is the Canadian traveller problem, and why must AI agents replan?',
    intro: 'The Canadian traveller problem asks how to reach a destination over a known map when some roads are blocked and each blockage is discovered only on arrival, and AI agents must replan for the same reason: their tools and data can fail without warning.',
    p1: 'On 3,382 Wokingham junctions with 2% of links shut at random, our replanning agent matched the hindsight route on 271 of 500 trips and averaged 1.083 times its length.',
    p2: 'Letting it see one junction further raised that to 305 trips, which is a measured price for a little extra information.',
    closer: 'A teenager in Wokingham who has coded this knows what to ask of any AI agent in 2026: what does it do when a step fails?',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'A Wokingham lesson, start to finish',
    intro: 'The classroom is a video call. Bring a laptop or desktop with a webcam, and find a room without too much noise.',
    cells: [
      { h3: 'Learner at the keyboard', p: 'The learner shares their screen and types. The tutor watches, asks and nudges.' },
      { h3: 'A trial that is a lesson', p: 'The free session is real teaching, and it shows us which course to suggest.' },
      { h3: 'Nothing to pay up front', p: 'We do not take card details to book the trial.' },
      { h3: 'Groups by level', p: 'Between five and ten classmates, all at one stage, logging in from different parts of the country.' },
      { h3: 'Two lessons a week', p: 'In term time, pausing for Berkshire school holidays once you tell us the dates.' },
      { h3: 'UK time, all year', p: 'Our tutors shift their day when the clocks change, so yours stays the same.' }
    ],
    spec: { title: 'Why online suits this', p: 'Screen sharing shows the tutor each line as it is typed, and drawing on the whole country makes it possible to fill a class with learners at exactly one level.' }
  },

  fees: {
    h2: 'What Wokingham lessons cost',
    intro: 'One international price list covers all learners outside India.',
    first: 'First lesson: a full session, free, ending with a course recommendation.',
    group: 'Group of five to ten learners, about eight lessons each month.',
    private: 'One learner with one tutor, about eight lessons each month.',
    closer: 'We quote in US dollars only and do not publish a sterling figure. Billing begins after the trial, once a course and a weekly time are agreed. The pricing page covers holiday pauses, missed lessons and moving between group and one-to-one.'
  },

  reviewsH2: 'What Berkshire families and other UK learners say on Google',

  book: {
    h2: 'Book a free Wokingham trial lesson',
    intro: 'Send us the learner\'s age or year group and something they enjoy. The first session might be a blocked-road puzzle on paper, a Scratch game built with an AI, some early Python, or a tiny route finder.',
    success: 'Thanks. We have your Wokingham request and will be in touch.'
  },

  faq: {
    h2: 'Wokingham questions, answered',
    intro: 'Shut roads, replanning, what vibe coding is, and how lessons are run.',
    items: [
      { q: 'How many people live in Wokingham?', a: 'The ONS counted 50,325 usual residents in the Wokingham built-up area at the 2021 census, and 177,503 in the whole borough.' },
      { q: 'Are vibe coding and AI agents classes available in Wokingham?', a: 'Yes. They are taught live online to ages 6 to 67, which covers Wokingham, Emmbrook, Barkham, Sindlesham and Finchampstead.' },
      { q: 'What is the Canadian traveller problem?', a: 'It is the problem of reaching a destination on a known map when some roads are blocked and you only learn of each blockage when you get there.' },
      { q: 'What is an AI agent?', a: 'An AI agent is software that is given a goal, decides its own steps and uses tools to complete them, checking results as it goes.' },
      { q: 'What did the Wokingham experiment show?', a: 'With 2% of links shut, the agent equalled the hindsight route on 271 of 500 trips, averaged 1.083 times its length, and at worst travelled 2.33 times as far.' },
      { q: 'Do you teach vibe coding?', a: 'Vibe coding means telling an AI, in ordinary words, what program you want, reading what it writes, and testing and fixing the result yourself.' },
      { q: 'At what stage do learners build agents?', a: 'When their own Python is dependable, typically mid teens onward or as adults. Copilot Studio agent work is kept to private lessons.' },
      { q: 'Does this help with GCSE computer science?', a: 'It covers algorithms, data structures and programming, which are all examined. We teach for understanding and do not promise grades.' },
      { q: 'What are the fees?', a: 'The trial lesson is free. After it, group lessons are USD 100 per month and one-to-one lessons USD 150 per month.' },
      { q: 'Do lessons stop in the holidays?', a: 'They can. Give us your holiday dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Keep reading',
    h2: 'More Berkshire projects',
    html: 'Other pages in the county take different problems: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bracknell">Bracknell</a> (what a rain gauge rounds away), <a class="cg-inline-link" href="/best-coding-class-in-reading">Reading</a> (errors building up along a chain of copies) and <a class="cg-inline-link" href="/ai-and-programming-classes-in-maidenhead">Maidenhead</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> list the rest.',
    waLabel: 'Ask us a question on WhatsApp'
  },

  footerHeading: 'Wokingham and Berkshire',
  footerPlaces: [
    { href: '/coding-classes-in-berkshire', label: 'Berkshire' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wkh .cg-hero-grid { align-items: center; gap: clamp(1.4rem, 3.6vw, 3.2rem); }
.cg-root.cg-wkh .cg-hero h1 { font-weight: 720; letter-spacing: -0.024em; line-height: 1.09; }
.cg-root.cg-wkh .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-wkh .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; font-size: 0.82rem; }
.cg-root.cg-wkh .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.018em; }
.cg-root.cg-wkh .cg-table caption { font-style: italic; text-align: left; font-size: 0.9rem; }
.cg-root.cg-wkh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wkh .cg-table th { border-bottom: 3px double var(--cg-accent); }
.cg-root.cg-wkh .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-wkh .cg-callout { border-radius: 2px; border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Wokingham unitary authority (E06000041), Census 2021 TS001 usual residents 177,503. ONS 2021 BUA (published): Wokingham 50,325. English national curriculum, GCSE and A level. postcodes.io (Wokingham): Emmbrook (suburban area, RG41), Barkham, Sindlesham (villages, RG41), Finchampstead (village, RG40), Winnersh (RG41).',
    localProject: 'OSM via Overpass (read 30 September 2026), bbox 51.371,-0.896,51.429,-0.8, 2,839 highway ways (motorway to residential, living_street, link roads). Junction graph, largest component: 3,382 junctions, 3,712 links, 271.6 km. 500 random trips of at least 2 km per closure rate, seed 2026; each link shut independently; draws that cut the destination off discarded (72, 236, 986). Agent sees links at its own junction and replans on each discovery. 2%: open map 4,904 m, hindsight 5,216 m, agent 5,776 m, ratio mean 1.083, median 1.000, 95th pct 1.482, max 2.33, 271 of 500 equal to hindsight; with one junction of lookahead 1.066, 305. 5%: 1.232, max 3.66, 142; lookahead 1.185, 176. 10%: 1.504, max 5.85, 55; lookahead 1.393, 75. Closures simulated, not real. Lesson family: Canadian traveller problem, replanning under unknown blockages, value of information.',
    requiredMentions: [
      '50,325',
      '3,382',
      '3,712',
      '271 of 500',
      '5,216',
      'Emmbrook',
      'Barkham',
      'Sindlesham',
      'Finchampstead',
      'Canadian traveller'
    ],
    sources: [
      { claim: 'OpenStreetMap road data via the Overpass API, (C) OpenStreetMap contributors, ODbL.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: Wokingham extent and the named places in the borough.', url: 'https://api.postcodes.io/places?q=Wokingham' }
    ],
    rejectedClaims: [
      'Real road closures, roadworks or traffic in Wokingham: none used; every closure is a random draw in our program.',
      'That the agent is optimal or that no better strategy exists: not claimed; two simple strategies are compared.',
      'That Wokingham streets are easier or harder to cross than another town: not compared.',
      'That the named villages are close to the town centre: not claimed; they are listed as recorded in the borough.',
      'Named schools, term dates or exam results: none.',
      'Sterling prices: none.'
    ]
  }
};
