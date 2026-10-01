'use strict';
// Thundersley and South Benfleet (cg- town page, UK cluster Phase 10, towns band B, row 514). Keyword slug per the
// owner's rotation, with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: with a fixed
// distance to spend, which stops should an agent visit and which should it give up? (Orienteering problem.)
// Data (read 30 September 2026): OpenStreetMap via Overpass, two small queries for the same box 51.543,0.542,51.581,0.604
// (the combined postcodes.io extents of the Thundersley and South Benfleet place records): tsb/q.txt, 858 road ways
// (motorway to residential, living_street, link roads) plus place and station nodes; tsb/q2.txt, 108 highway=bus_stop
// nodes, every one carrying a NaPTAN code. Road network, largest connected piece: 145.9 km. Start and finish: the
// OpenStreetMap node for Benfleet railway station (24 m from the closest road point). Each stop is attached to its
// closest road point (median 10 m, largest 68 m); the 108 stops sit on 105 distinct road points because stops on
// opposite sides of a road often share one, so a single visit can collect a pair.
// Our scoring rule (not an official rating of anything): 10 points for a stop under 1 km in a straight line from the
// station (14 stops), 20 for 1 to 2 km (15 stops), 30 beyond 2 km (79 stops); 2,810 points on offer.
// Our run (scratchpad tsb/op.py, seed 2026), road distances by Dijkstra, points collected (stops visited):
//   budget 4 km:  nearest stop next 200 (15); most points per metre next 220 (17); insert and tidy 220 (17); remove and repair 220 (17)
//   budget 6 km:  330 (20); 330 (20); 340 (23); 390 (25)
//   budget 8 km:  630 (30); 820 (39); 620 (33); 840 (39)
//   budget 10 km: 780 (35); 980 (45); 1,010 (46); 1,020 (46)
// "Insert and tidy" = cheapest-insertion by points per extra metre, then 2-opt; "remove and repair" = 300 rounds of
// dropping three random stops, re-inserting and keeping the result if it is no worse. The true maximum is not known.
// Lesson family: orienteering problem (prize collecting under a budget). Screened: "orienteering problem" and
// "prize-collecting" 0 hits in content/, claims and spent lists; claimed in claims.txt. Essex county page = headway and
// fleet size; Basildon = quicksort pivots; Brentwood = profiling; Clacton = potential field; Sittingbourne = Clarke-Wright
// savings (must visit everything, with van capacity; here the agent chooses what to skip).
// Place facts: Castle Point TS001 89,587. ONS 2021 BUA (published): Thundersley and South Benfleet 49,885. postcodes.io
// (Castle Point, Essex, SS7): New Thundersley (suburban area), Tarpots, Hadleigh, Daws Heath (villages).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'THUNDERSLEY AND SOUTH BENFLEET', label: 'Thundersley and South Benfleet', blurb: 'Vibe coding and AI agents classes for Thundersley and South Benfleet, with an agent that must choose which bus stops to visit on a fixed distance budget.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-thundersley-and-south-benfleet',
  code: 'tsb',
  accent: '#0B6A85',
  accentRationale: 'Thundersley and South Benfleet: a clear cyan-blue (6.15:1 on white), chosen by hand; lighter and bluer than the dark teals already in use',
  pageType: 'city',
  place: {
    name: 'Thundersley and South Benfleet',
    eyebrow: 'Thundersley and South Benfleet, Castle Point, Essex',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Essex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Essex', href: '/coding-classes-in-essex' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Thundersley and South Benfleet, Essex',
  title: 'Vibe Coding and AI Agents Classes: Thundersley, South Benfleet',
  description: 'Vibe coding, AI agents and Python classes for Thundersley, South Benfleet, New Thundersley, Tarpots and Hadleigh, ages 6 to 67. Live online. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Thundersley and South Benfleet, with an agent that plans the highest-scoring walk it can afford.',
  twitterDescription: 'Thundersley and South Benfleet vibe coding, AI agents and Python classes online, ages 6 to 67. Free first lesson.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Thundersley and South Benfleet',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Thundersley, South Benfleet and Castle Point, taught live through planning problems on real street data.'
  },

  h1: 'Vibe coding and AI agents classes in Thundersley and South Benfleet',
  capsuleQ: 'Which are the best vibe coding and AI agents classes in Thundersley and South Benfleet?',
  capsule: 'The Office for National Statistics treats Thundersley and South Benfleet as one built-up area, and counted 49,885 usual residents there in the 2021 census. It lies in the Essex borough of Castle Point, where the postcode gazetteer also lists New Thundersley as a suburban area and Tarpots, Hadleigh and Daws Heath as villages in the SS7 district. We teach vibe coding, AI agents, Python, coding and maths online to learners aged six to 67 across these places. A tutor in India leads each live video lesson, for one learner or for a class of five to ten who are at the same stage. We ask learners to work a method out for themselves first, and to use code and AI afterwards. You can try a whole lesson free, and we use it to recommend a course. The local project sets a planning agent loose on the streets around Benfleet station: it has a fixed distance to spend, 108 bus stops worth different scores, and it must decide which ones to give up. After the trial, lessons are USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'Most route problems say: visit everything, as cheaply as possible. Real planning is usually the other way round. There is a fixed budget of time, fuel or money, more worthwhile stops than the budget allows, and the hard part is choosing what to leave out. Mathematicians named this the orienteering problem, after the sport in which runners have a time limit and pick which control points to collect. An AI agent faces it whenever it has a limited number of steps and more possible tasks than it can finish. This project hands the problem to a software agent in Thundersley and South Benfleet and compares four ways of deciding.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents lesson for a learner in Thundersley or South Benfleet.',

  picks: {
    eyebrow: 'Suggested courses',
    h2: 'Starting points for Thundersley and South Benfleet',
    intro: 'Find the age band. Whichever course you choose opens with a free live lesson, booked without a card.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children vibe code Scratch games: they set the rules, the AI drafts, and they decide what stays.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think about choices: limits, trade-offs and planning a treasure hunt you can finish on time.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Vibe coding in Python and on the web for teenagers, with the budget-planning agent as a build.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from first principles to search, optimisation and agents that work inside limits.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Place facts',
      h2: 'Thundersley, South Benfleet, New Thundersley and Hadleigh',
      intro: 'The census counts and the gazetteer entries for this part of Castle Point.',
      body: [
        { kind: 'table', caption: 'Thundersley and South Benfleet, and Castle Point, Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Thundersley and South Benfleet built-up area', '49,885'],
          ['Castle Point borough', '89,587']
        ] },
        { kind: 'p', text: 'Both rows are figures the ONS publishes directly. Castle Point also contains Canvey Island, which is a separate built-up area, so the rows should not be subtracted from one another to estimate anything. In the postcodes.io gazetteer, Thundersley and South Benfleet are each recorded as settlements in the SS7 postcode district, New Thundersley as a suburban area, and Tarpots, Hadleigh and Daws Heath as villages, all in Castle Point. Schools follow the national curriculum for England. We place children by school year, Year 2 to Year 13, and lessons can run alongside GCSE and A level computer science.' },
        { kind: 'callout', h3: 'Other Essex pages', p: 'Browse <a class="cg-inline-link" href="/coding-classes-in-essex">coding classes in Essex</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-basildon">Basildon</a> and <a class="cg-inline-link" href="/best-coding-class-in-southend-on-sea">Southend-on-Sea</a>. The reason we teach thinking ahead of tools is explained in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The local project',
      h2: 'The orienteering problem, starting from Benfleet station',
      intro: 'A distance budget, 108 bus stops, and a walk that must end where it began.',
      body: [
        { kind: 'p', text: 'From OpenStreetMap the learner downloads the roads in a box around Thundersley and South Benfleet, 858 mapped roads making a network of 145.9 km, and the 108 bus stops inside the same box. The agent\'s walk starts and finishes at Benfleet railway station. To make the choice interesting, we set a scoring rule of our own: a stop less than 1 km from the station in a straight line is worth 10 points, a stop 1 to 2 km away is worth 20, and anything further is worth 30. That gives 14 stops at 10 points, 15 at 20 and 79 at 30, and 2,810 points on offer. All distances walked are measured along the roads. Stops on opposite sides of a road often attach to the same point on the network, so one visit can collect a pair.' },
        { kind: 'p', text: 'The learner codes four planners. The first always walks to the closest unvisited stop. The second goes for the stop offering the most points per metre from where it stands. Both check that they can still get back to the station. The third builds the loop differently: it starts with an empty round trip and keeps inserting whichever stop adds the most points per extra metre, then untangles the route so it does not cross itself. The fourth takes that result and spends 300 rounds removing three stops at random, re-inserting what fits, and keeping the change whenever the score is no worse.' },
        { kind: 'table', caption: 'Points collected on a round trip from Benfleet station, by distance budget (our Python run on OpenStreetMap data; scores use our own rule)', head: ['Budget', 'Closest stop next', 'Most points per metre', 'Insert and tidy', 'Remove and repair'], rows: [
          ['4 km', '200', '220', '220', '220'],
          ['6 km', '330', '330', '340', '390'],
          ['8 km', '630', '820', '620', '840'],
          ['10 km', '780', '980', '1,010', '1,020']
        ] },
        { kind: 'p', text: 'No simple rule wins everywhere. With 8 km to spend, points per metre collected 820 points from 39 stops, well ahead of the closest-stop rule on 630. The insert and tidy planner, which sounds more sophisticated, managed only 620 at that budget, fewer than the simplest rule: it spent its distance on 12 ten-point and 13 twenty-point stops and reached only 8 of the thirty-point ones, where points per metre reached 15. At 10 km it came out ahead of both simple rules with 1,010. Remove and repair finished first or level first at every budget, reaching 840 at 8 km and 1,020 at 10 km. We do not know the true maximum for any row. For problems of this kind no quick method is known that guarantees it, which is exactly why the comparison is worth running.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Plan a paper treasure hunt with a string of fixed length and see who can collect the most points.' },
          { h3: 'Ages 11 to 15', p: 'Code the two simple rules in Python and find a budget at which they disagree.' },
          { h3: 'Ages 15 and up', p: 'Add insertion, route tidying and remove and repair, then explain why 620 lost to 630.' }
        ] },
        { kind: 'callout', h3: 'Credits and caveats', p: 'Road and bus stop data (C) OpenStreetMap contributors, Open Database Licence, read 30 September 2026. The points rule, the four planners and all scores are ours; the scores say nothing about the bus services themselves. Roads are cut at the edge of the box, and the station is close to its southern edge.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Budgets and agents',
      h2: 'What a distance budget teaches about vibe coding and AI agents',
      intro: 'Every real agent runs out of something: time, money, steps or patience.',
      body: [
        { kind: 'table', caption: 'From the Benfleet walk to AI agents', head: ['On the street network', 'For an agent with a budget'], rows: [
          ['The agent had to return to the station', 'Reserve enough budget to finish the job'],
          ['Points per metre beat closest-first at 8 km', 'Weigh value against cost, not cost alone'],
          ['Insert and tidy scored 620, below 630', 'A cleverer plan is a claim to be tested'],
          ['Remove and repair was never beaten', 'Revisit early commitments'],
          ['The true maximum stayed unknown', 'Say "good", not "optimal", unless you can prove it']
        ] },
        { kind: 'p', text: 'An AI agent is a program that pursues a goal by choosing and carrying out its own steps. Those steps are rationed. There may be a cap on tool calls, a time limit or a bill for each request, and usually more useful things to do than the ration allows. Deciding what to skip, and keeping enough in hand to deliver an answer at the end, is the orienteering problem in another costume. Vibe coding means describing software in plain language for an AI to write. It produces a route planner in seconds, and that planner is nearly always a greedy one that will describe its own output as optimal. Learners who have watched a greedy rule lose by 190 points know to ask for a comparison. We teach agent building after Python is fluent, which for most is from about sixteen or as an adult, and Copilot Studio agents are one-to-one only. More detail: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the Office for National Statistics and postcodes.io are separate organisations with no tie to Modern Age Coders. Their open data is the raw material; what we computed from it is our responsibility.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Treasure hunts, then code, then planning agents',
    intro: 'We use the school year to suggest a level and the free lesson to check it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Choices under a limit, tried out with counters, string and Scratch.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'The child plans the game and tests each thing the AI adds.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Vibe coding in Python', p: 'Planners and web apps, with rival methods compared on real data.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Agents and automation', p: 'Python agents that budget their steps and report honestly on results.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Planning with limits',
    h2: 'What is the orienteering problem, and how do AI agents plan within a budget?',
    intro: 'The orienteering problem is the task of choosing which scored locations to visit, and in what order, to collect the most points on a route that fits within a fixed distance or time, and AI agents plan within a budget in the same way, by weighing the value of each possible step against what it costs.',
    p1: 'From Benfleet station with 8 km to spend, a closest-stop rule collected 630 points, a points-per-metre rule 820 and a remove and repair search 840, out of 2,810 on offer at 108 bus stops.',
    p2: 'A more elaborate insertion planner scored 620, which shows that sounding clever and scoring well are different things.',
    closer: 'Teenagers in Thundersley and South Benfleet who have run that comparison are ready to question an AI agent\'s plan in 2026, and that starts with learning to code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lessons explained',
    h2: 'How we teach learners in Thundersley and South Benfleet',
    intro: 'Teaching takes place on live video. The learner uses their own computer with a camera, in whatever room lets them focus.',
    cells: [
      { h3: 'Typing is the learner\'s job', p: 'They write every line on a shared screen while the tutor coaches.' },
      { h3: 'One free lesson first', p: 'A proper session, after which we tell you the course we would choose.' },
      { h3: 'No payment to book', p: 'We ask for contact details only.' },
      { h3: 'Classes at one level', p: 'Five to ten learners who match in stage, from many parts of the UK.' },
      { h3: 'Twice weekly in term', p: 'Essex school holidays are left free once we have your dates.' },
      { h3: 'Lesson times hold', p: 'Our tutors take care of the clock change, so your slot never moves.' }
    ],
    spec: { title: 'Why online works', p: 'The tutor watches the code appear line by line on the shared screen, and classes drawn from the whole UK can be matched closely by level.' }
  },

  fees: {
    h2: 'Fees',
    intro: 'These international fees apply to everyone learning from outside India.',
    first: 'The first full lesson is free and closes with a course recommendation.',
    group: 'Group class of five to ten, about eight lessons in each month.',
    private: 'One-to-one lessons, about eight in each month.',
    closer: 'Fees are given in US dollars and there is no sterling price list. We start billing after the free lesson, once the course and a weekly time are fixed. How holidays, absences and format changes work is on the pricing page.'
  },

  reviewsH2: 'Google reviews from Essex families and learners across the UK',

  book: {
    h2: 'Book a free lesson from Thundersley or South Benfleet',
    intro: 'Tell us the learner\'s age or year group and what they like doing. The trial could be a points-and-string treasure hunt, a Scratch game built with an AI, a first Python program, or a tiny route planner.',
    success: 'Thank you. We have your request and will reply soon.'
  },

  faq: {
    h2: 'Questions from Thundersley and South Benfleet',
    intro: 'Budget planning, the bus stop project, vibe coding, agents and lesson arrangements.',
    items: [
      { q: 'What is the population of Thundersley and South Benfleet?', a: 'The ONS counted 49,885 usual residents in the Thundersley and South Benfleet built-up area at the 2021 census. Castle Point borough had 89,587.' },
      { q: 'Are vibe coding and AI agents classes available here?', a: 'Yes. We teach live online for ages 6 to 67 in Thundersley, South Benfleet, New Thundersley, Tarpots, Hadleigh and Daws Heath.' },
      { q: 'What is the orienteering problem?', a: 'It is the problem of picking which scored places to visit so that the route stays within a fixed budget and the total score is as high as possible.' },
      { q: 'What is a greedy algorithm?', a: 'A greedy algorithm builds an answer one step at a time, always taking the option that looks most attractive right now and never going back on a choice.' },
      { q: 'What did the project find?', a: 'With an 8 km budget from Benfleet station, four planners collected 630, 820, 620 and 840 points, and the simplest-sounding and cleverest-sounding methods were both beaten.' },
      { q: 'Do you teach vibe coding?', a: 'Vibe coding is creating a program by explaining what you want to an AI in normal language, then checking and correcting the code it writes.' },
      { q: 'When do learners build AI agents?', a: 'Once they are fluent in Python, usually from about sixteen or as adults. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Does this link to GCSE computer science?', a: 'Yes, algorithms and programming are central to it. We teach for understanding and give no grade guarantees.' },
      { q: 'How much are the classes?', a: 'The first lesson is free, then USD 100 a month for a group place or USD 150 a month for one-to-one.' },
      { q: 'Do you break for school holidays?', a: 'Yes, whenever you send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Explore',
    h2: 'Projects elsewhere in Essex',
    html: 'Same county, different ideas: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-basildon">Basildon</a> (how quicksort picks a pivot), <a class="cg-inline-link" href="/online-coding-and-python-classes-in-brentwood">Brentwood</a> (finding the slow line in a program) and <a class="cg-inline-link" href="/best-coding-class-in-southend-on-sea">Southend-on-Sea</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> cover the rest.',
    waLabel: 'Send us a WhatsApp message'
  },

  footerHeading: 'Thundersley, South Benfleet and Essex',
  footerPlaces: [
    { href: '/coding-classes-in-essex', label: 'Essex' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-tsb .cg-hero-grid { align-items: start; gap: clamp(1.35rem, 3.5vw, 3.1rem); }
.cg-root.cg-tsb .cg-hero h1 { font-weight: 700; letter-spacing: -0.026em; line-height: 1.08; font-size: clamp(1.9rem, 4.4vw, 3rem); }
.cg-root.cg-tsb .cg-capsule { border-top: 5px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-tsb .cg-eyebrow { letter-spacing: 0.14em; font-weight: 650; font-size: 0.8rem; }
.cg-root.cg-tsb .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.02em; }
.cg-root.cg-tsb .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-tsb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tsb .cg-table th { font-weight: 700; border-bottom: 2px dashed var(--cg-accent); }
.cg-root.cg-tsb .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-tsb .cg-callout { border-radius: 10px; border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Castle Point (E07000069), Essex, Census 2021 TS001 usual residents 89,587. ONS 2021 BUA (published): Thundersley and South Benfleet 49,885. English national curriculum, GCSE and A level. postcodes.io (Castle Point, SS7): Thundersley, South Benfleet (other settlements), New Thundersley (suburban area), Tarpots, Hadleigh, Daws Heath (villages).',
    localProject: 'OSM via Overpass (read 30 September 2026), bbox 51.543,0.542,51.581,0.604: 858 highway ways, network 145.9 km; 108 bus stops (all with NaPTAN codes) on 105 road points; start and finish Benfleet railway station node. Our scoring rule: 10 points under 1 km straight-line from the station (14 stops), 20 for 1 to 2 km (15), 30 beyond (79); 2,810 on offer. Points (stops) by budget, road distances: 4 km closest-next 200 (15), points-per-metre 220 (17), insertion plus 2-opt 220 (17), remove and repair x300 220 (17); 6 km 330 (20), 330 (20), 340 (23), 390 (25); 8 km 630 (30), 820 (39), 620 (33), 840 (39); 10 km 780 (35), 980 (45), 1,010 (46), 1,020 (46). True maximum unknown. Lesson family: orienteering problem, prize collecting under a budget, greedy vs improvement search.',
    requiredMentions: [
      '49,885',
      '89,587',
      'New Thundersley',
      'Tarpots',
      'Hadleigh',
      'Daws Heath',
      'orienteering problem',
      '108 bus stops',
      '2,810',
      '145.9'
    ],
    sources: [
      { claim: 'OpenStreetMap road, bus stop and station data via the Overpass API, (C) OpenStreetMap contributors, ODbL.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: Thundersley, South Benfleet and the named places in Castle Point.', url: 'https://api.postcodes.io/places?q=Thundersley' }
    ],
    rejectedClaims: [
      'That any of the four routes is optimal: not claimed; the true maximum is unknown and stated as such.',
      'Bus routes, timetables, frequencies or the quality of any stop: not used; stops are only points with a score of our own making.',
      'That OpenStreetMap lists every bus stop in the area: not claimed; the 108 are those mapped inside the box on the day read.',
      'Walking times or safety of any road: not claimed; only road-network distances are used.',
      'That the listed villages are parts of Thundersley or South Benfleet: not claimed; they are listed as recorded in Castle Point.',
      'Named schools, term dates and sterling prices: none.'
    ]
  }
};
