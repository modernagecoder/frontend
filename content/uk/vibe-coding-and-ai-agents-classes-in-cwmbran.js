'use strict';
// Cwmbran (cg- town page, UK cluster Phase 10, towns band B, row 526). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: if every driver's agent picks the fastest
// route for its own driver, can a new shortcut make every journey slower? (Braess's paradox, selfish routing, Wardrop
// equilibrium, price of anarchy, and herding when all agents react at once.)
// Local data (read 30 September 2026): Census 2021 TS061 (Nomis NM_2078_1), Torfaen: 40,654 usual residents aged 16+ in
// employment the week before the census; 25,181 of them drove a car or van to work. Context only.
// Model (INVENTED, stated on the page): Braess's textbook network. 4,000 agents from Start to End. Route top: Start to
// A takes cars/100 minutes, A to End 45. Route bottom: Start to B 45, B to End cars/100. Shortcut A to B: 0 minutes.
// Our run (scratchpad cwb/braess.py, seed 20260930). Each round, every agent not on the fastest route switches to it
// with probability p. No shortcut: p = 0.1 settles near 2,000 / 2,000, 65.0 minutes; p = 1 flips the whole crowd
// between routes, 85 minutes every round. Shortcut opened from the 2,000 / 2,000 state with p = 0.1: round 1, 425 on
// the shortcut, mean 64.7; round 5, 1,580, 66.15; round 10, 2,576, 70.07; settled at round 49 with 3,974 on the
// shortcut, mean 79.77. p = 1: all 4,000 on the shortcut after one round, 80.0. Coordinated split with the shortcut
// (grid search, steps of 10): 1,750 top, 1,750 bottom, 500 shortcut, mean 64.69 minutes. Price of anarchy 80 / 64.69.
// Lesson family: Braess's paradox and selfish routing. Screened: "braess", "selfish routing", "price of anarchy",
// "wardrop" 0 hits in content/; claimed in claims.txt. Torfaen county page = spirals, ratio vs gap; Newport = Severn tolls.
// Place facts: Torfaen TS001 92,276. ONS 2021 BUA (published): Cwmbrân 47,090. postcodes.io suburban areas whose
// closest postcode is in the Cwmbrân BUA: Croesyceiliog, Llantarnam, Pontnewydd, Fairwater, Henllys, Oakfield, Coed
// Eva, Greenmeadow, Thornhill, St Dials, Two Locks, Llanyrafon, Northville, Southville, Old Cwmbran, Ty Canol,
// Hollybush, Pontrhydyrun, Upper Cwmbran (all NP44). Llanfrechfa village's closest postcode is outside any BUA.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CWMBRAN', label: 'Cwmbran', blurb: 'Vibe coding and AI agents classes for Cwmbran, with a project in which route-choosing agents make a new shortcut slow everyone down.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-cwmbran',
  code: 'cwb',
  accent: '#7A1F25',
  accentRationale: 'Cwmbran: a deep Welsh red (10.24:1 contrast), picked by hand and checked for distance from every accent in use',
  pageType: 'city',
  place: {
    name: 'Cwmbran',
    eyebrow: 'Cwmbrân, Torfaen, Wales',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Torfaen' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Torfaen', href: '/coding-classes-in-torfaen' },
    { label: 'Newport', href: '/best-coding-class-in-newport-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Cwmbran, Torfaen',
  title: 'Vibe Coding and AI Agents Classes in Cwmbran | Ages 6 to 67',
  description: 'Live online vibe coding and AI agents classes for Cwmbran, Croesyceiliog, Llantarnam and Pontnewydd, ages 6 to 67, with Python and maths. The first lesson is free.',
  ogDescription: 'Vibe coding and AI agents classes for Cwmbran, with a project on route-choosing agents and Braess\'s paradox.',
  twitterDescription: 'Cwmbran vibe coding and AI agents lessons, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Cwmbran',
    description: 'Online vibe coding, AI agents, Python and maths lessons for children, teenagers and adults in Cwmbran and Torfaen, taught through simulations the learner builds and questions.'
  },

  h1: 'Vibe coding and AI agents classes in Cwmbran',
  capsuleQ: 'Where are the best vibe coding and AI agents classes for Cwmbran?',
  capsule: 'The ONS built-up area of Cwmbrân held 47,090 usual residents at the 2021 census, within a county borough of Torfaen that held 92,276. Croesyceiliog, Llantarnam, Pontnewydd, Fairwater, Greenmeadow, Coed Eva and more than a dozen other gazetteer suburbs fall inside that built-up area. Modern Age Coders teaches vibe coding, AI agents, Python, coding and maths to learners in Cwmbran aged six to 67, live on video with tutors in India, as private lessons or in groups of five to ten at one level. Learners build things and then question what they built. A free trial lesson comes first, then a course recommendation. In the Cwmbran project a learner programs 4,000 route-choosing agents, opens a shortcut on a model road network, and watches every journey get longer. Fees after the trial: USD 100 monthly in a group, USD 150 monthly one-to-one.',
  lead: 'Picture a navigation agent in every car, each one told to get its own driver home as fast as possible. Now the council opens a new link road. Surely journeys get shorter? In 1968 the German mathematician Dietrich Braess showed a network where the opposite happens: every agent, acting sensibly for itself, takes the new link, and everyone arrives later than before. It sounds like a riddle. In Python it takes a few dozen lines to reproduce, and it is one of the clearest lessons there is about what happens when many AI agents chase the same goal at once.',
  wa: 'Hello Modern Age Coders, we would like to book a free vibe coding or AI agents trial lesson. We are in Cwmbran.',

  picks: {
    eyebrow: 'Recommended starts',
    h2: 'Vibe coding and AI agents courses for Cwmbran learners',
    intro: 'Pick by age. Each course opens with a free live lesson, and no card is asked for.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Thinking skills before tools: rules, choices, and games where every player follows the same rule.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: describe a Scratch game to an AI, then test and repair it.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Vibe coding in Python with simulations, including the Cwmbran route-agent project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the start to data work and AI agents you can explain line by line.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Cwmbran in numbers',
      h2: 'Cwmbran, Croesyceiliog, Llantarnam and Pontnewydd',
      intro: 'Census counts for the built-up area and the county borough, and how people in Torfaen got to work.',
      body: [
        { kind: 'table', caption: 'Census 2021 (ONS)', head: ['Measure', 'Count'], rows: [
          ['Usual residents, Cwmbrân built-up area', '47,090'],
          ['Usual residents, Torfaen', '92,276'],
          ['Torfaen residents in work the week before the census', '40,654'],
          ['Of those, driving a car or van to work', '25,181']
        ] },
        { kind: 'p', text: 'Torfaen also includes Pontypool and Blaenavon, so the borough and town rows are separate counts. The census was taken in March 2021, when many people worked from home, so the travel figure describes that week rather than a typical one. On postcodes.io, Croesyceiliog, Llantarnam, Pontnewydd, Fairwater, Henllys, Oakfield, Coed Eva, Greenmeadow, Thornhill, St Dials, Two Locks, Llanyrafon, Northville, Southville, Old Cwmbran, Ty Canol, Hollybush, Pontrhydyrun and Upper Cwmbran are all suburban areas in NP44 whose nearest postcode is inside the Cwmbrân built-up area. Schools follow the Curriculum for Wales, so we place learners by Welsh school year and use WJEC names for GCSE and A level; lessons are taught in English.' },
        { kind: 'callout', h3: 'South Wales pages', p: 'See <a class="cg-inline-link" href="/best-coding-class-in-newport-wales">Newport</a>, <a class="cg-inline-link" href="/coding-classes-in-blaenau-gwent">Blaenau Gwent</a>, the <a class="cg-inline-link" href="/coding-classes-in-torfaen">Torfaen page</a> and our <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science help</a>. Why thinking comes before tools is argued in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Cwmbran project',
      h2: 'Four thousand agents and a shortcut that slows everyone down',
      intro: 'A model road network, agents that each want the quickest trip, and a count of the minutes lost.',
      body: [
        { kind: 'p', text: 'The network is invented and has nothing to do with Cwmbran\'s real roads; it is the textbook example used to explain Braess\'s result. Four thousand drivers travel from Start to End. The top route runs Start to A, which takes one minute for every hundred cars on it, then A to End, a fixed 45 minutes. The bottom route mirrors it: Start to B, a fixed 45, then B to End at one minute per hundred cars. The learner writes each driver as a small agent with one job: look at yesterday\'s journey times and, if another route was quicker, consider switching to it.' },
        { kind: 'p', text: 'With only the two routes, and one agent in ten on a slower route switching each round, the crowd settles near 2,000 on each route and every trip takes about 65 minutes. Then the learner adds a free link from A to B that takes no time at all. A driver can now go Start to A, across, then B to End. Nobody is forced to use it.' },
        { kind: 'table', caption: 'After the free link opens, one slower agent in ten switches each round, our Python run', head: ['Round', 'Agents using the shortcut', 'Average trip'], rows: [
          ['0', '0', '65.00 min'],
          ['1', '425', '64.70 min'],
          ['5', '1,580', '66.15 min'],
          ['10', '2,576', '70.07 min'],
          ['49, settled', '3,974', '79.77 min']
        ] },
        { kind: 'p', text: 'The first switchers really do gain, and for one round the average trip is slightly shorter. But each car on the shortcut also loads both busy halves of the network, and as more agents follow, the other routes get slower too, which pushes even more agents onto the shortcut. By round 49 almost everyone uses it and the average trip is 79.77 minutes, nearly 15 minutes worse than before the link existed. No agent can do better by switching back alone, so nothing changes from there. Economists call such a state a Wardrop or Nash equilibrium.' },
        { kind: 'p', text: 'Two more runs finish the lesson. If a single coordinator assigned routes, a grid search finds that sending 500 cars over the shortcut and 1,750 along each other route gives 64.69 minutes, better than either result above. The ratio between the selfish outcome and the coordinated one is the price of anarchy. And if every agent reacts to the same information at the same moment, the crowd lurches: with no shortcut and everyone switching at once, all 4,000 cars pile onto one route, then all onto the other, and every trip takes 85 minutes, round after round.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'A classroom game: everyone picks one of two paths, and the busier path costs more points.' },
          { h3: 'Ages 11 to 15', p: 'Code the two-route network in Python and count journey times for any split of cars.' },
          { h3: 'Ages 15 and up', p: 'Write the agents, add the shortcut, vary how many switch per round, and search for the coordinated split.' }
        ] },
        { kind: 'callout', h3: 'Where this comes from', p: 'The network follows Braess (1968), translated into English by Braess, Nagurney and Wakolbinger (2005). The Torfaen travel figures are from the ONS Census 2021 table TS061 via Nomis. The agents, the random seed (20260930) and every number in the table are from our own run.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents and vibe coding',
      h2: 'What selfish agents teach about building AI agents',
      intro: 'An agent that does its own job well can still leave the whole system worse off.',
      body: [
        { kind: 'table', caption: 'From model traffic to real AI agents', head: ['What the simulation showed', 'What it means for agent builders'], rows: [
          ['Each agent chose sensibly, all were slower', 'Judge agents by the whole system, not one run'],
          ['Early switchers gained, then everyone lost', 'A short test can reward the wrong behaviour'],
          ['A coordinator reached 64.69 minutes', 'Sometimes agents need shared rules or a planner'],
          ['Everyone reacting at once made the crowd lurch', 'Stagger or randomise how agents update'],
          ['The network was invented and said so', 'Label models as models']
        ] },
        { kind: 'p', text: 'This is where vibe coding meets agents. A learner can describe the whole simulation to an AI and get working Python back in a minute, and many Cwmbran learners do exactly that. The real work starts afterwards: reading the update rule, spotting that it lets every agent move at once, and changing one number to watch the crowd settle instead of lurch. That habit of checking what a system of agents does, not just one agent, is what we build towards. Agent-building projects start when a learner\'s Python is strong without help, most often in sixth form or adulthood, and anything in Copilot Studio is taught one-to-one only. Further reading: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">how we teach agents to UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Neither the Office for National Statistics nor postcodes.io has any link with Modern Age Coders. We used their open data for context; the simulation is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing with us',
    h2: 'From path games at seven to agent simulations at seventeen',
    intro: 'The trial lesson sets the starting point, with the Welsh school year only as a first guess.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Rules and choices', p: 'Games, patterns and instructions, often acted out before coding.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Making with AI', p: 'Scratch games built with an AI, then the step into Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Simulations in Python', p: 'Loops, randomness and many small agents, checked against expectations.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Agents in practice', p: 'Python for real work, then agents designed with the whole system in view.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and networks',
    h2: 'What is Braess\'s paradox, and why does it matter for AI agents?',
    intro: 'Braess\'s paradox is the finding that adding a link to a network can make every journey slower when each traveller picks the fastest route for themselves, and it matters because many AI agents pursuing their own goals in one system can produce the same collective loss.',
    p1: 'In our model 4,000 agents averaged 65.00 minutes before a free shortcut opened and 79.77 minutes once they had all adopted it, while a coordinated split with the shortcut managed 64.69.',
    p2: 'Learners who have produced those numbers look past whether one agent works to what happens when many of them run together.',
    closer: 'For a Cwmbran teenager, seeing a whole system and not just one clever agent is what lets them direct AI rather than be carried along by it, and the way in is writing the code yourself.',
    blogAnchor: 'the case for learning to code in 2026'
  },

  delivery: {
    eyebrow: 'How classes work',
    h2: 'A typical lesson for a Cwmbran learner',
    intro: 'Classes are live video sessions. A computer with a keyboard is needed; a tablet alone will not do for Python.',
    cells: [
      { h3: 'Code typed, not watched', p: 'The learner writes and runs everything, with the tutor asking questions throughout.' },
      { h3: 'Placement by trial', p: 'The first lesson shows the learner\'s level before we suggest a course.' },
      { h3: 'No cost to try', p: 'The trial lesson is free, with no card required.' },
      { h3: 'Five to ten in a class', p: 'Classmates share a level and join from across the UK.' },
      { h3: 'Around eight a month', p: 'Usually two lessons a week in term, with Torfaen holidays left clear on request.' },
      { h3: 'Welsh time kept', p: 'Your lesson stays at the same UK time when the clocks go forward or back.' }
    ],
    spec: { title: 'Why the lessons are online', p: 'Gathering five to ten learners at one exact stage is far easier across the whole UK than in one valley. Video lets them learn together without travelling.' }
  },

  fees: {
    h2: 'Prices for Cwmbran families',
    intro: 'Cwmbran learners pay what everyone outside India pays.',
    first: 'First lesson: free and full length, with a course suggestion to finish.',
    group: 'Group class, around eight lessons a month.',
    private: 'Private one-to-one lessons, around eight a month.',
    closer: 'All fees are in US dollars; we publish no pound figure. You are not charged for the trial, and billing starts only once a course and a regular time are agreed. See the pricing page for holidays, missed lessons and switching between group and private classes.'
  },

  reviewsH2: 'Families in Wales and across Britain, reviewing us on Google',

  book: {
    h2: 'Book a free Cwmbran lesson',
    intro: 'Let us know the learner\'s age or school year and what they enjoy. The trial might be a path-choosing game, an AI-built Scratch game, a first Python program, or a first agent simulation.',
    success: 'Thank you. We have received your Cwmbran request.'
  },

  faq: {
    h2: 'Cwmbran questions',
    intro: 'The agent project, Braess\'s paradox, vibe coding and how lessons work.',
    items: [
      { q: 'How many people live in Cwmbran?', a: 'The ONS counted 47,090 usual residents in the Cwmbrân built-up area at the 2021 census. Torfaen county borough had 92,276.' },
      { q: 'Are there vibe coding and AI agents classes for Cwmbran?', a: 'Yes. Classes run live online for ages 6 to 67 in Cwmbran, Croesyceiliog, Llantarnam, Pontnewydd and the rest of Torfaen.' },
      { q: 'What is a Nash equilibrium in traffic?', a: 'A pattern of route choices in which no single driver can get home sooner by changing route alone. In traffic it is often called a Wardrop equilibrium.' },
      { q: 'What happened in the Cwmbran simulation?', a: 'On an invented network, 4,000 agents averaged 65.00 minutes. After a free shortcut opened they drifted onto it until the average was 79.77 minutes, even though a coordinated plan with the shortcut gave 64.69.' },
      { q: 'Is the road network real?', a: 'No. It is the standard textbook network for Braess\'s paradox, and we say so. Only the census figures describe Torfaen.' },
      { q: 'What is vibe coding?', a: 'Vibe coding is building software by describing it to an AI, then running, reading and correcting the code. We teach it with typed Python so learners can judge the result.' },
      { q: 'When do learners build their own AI agents?', a: 'Once their Python is solid without help, typically in sixth form or as adults. Copilot Studio agents are one-to-one only.' },
      { q: 'Does this help with WJEC GCSE computer science?', a: 'Algorithms, simulation and programming run through WJEC GCSE and A level courses, and we cover them carefully. We do not promise any grade.' },
      { q: 'How much do classes cost?', a: 'The trial lesson is free. Group classes then cost USD 100 a month and private lessons USD 150 a month.' },
      { q: 'What about school holidays?', a: 'Tell us the Torfaen holiday dates and lessons stop for those weeks.' }
    ]
  },

  next: {
    eyebrow: 'Neighbouring pages',
    h2: 'More pages for South Wales',
    html: 'Browse <a class="cg-inline-link" href="/best-coding-class-in-newport-wales">Newport</a>, <a class="cg-inline-link" href="/coding-classes-in-blaenau-gwent">Blaenau Gwent</a> and <a class="cg-inline-link" href="/coding-classes-in-torfaen">Torfaen</a>, plus <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science help</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> list everything else.',
    waLabel: 'Send us a WhatsApp'
  },

  footerHeading: 'Cwmbran and Torfaen',
  footerPlaces: [
    { href: '/coding-classes-in-torfaen', label: 'Torfaen' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-cwb .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 2.7vw, 2.4rem); }
.cg-root.cg-cwb .cg-hero h1 { font-weight: 790; letter-spacing: -0.025em; line-height: 1.07; }
.cg-root.cg-cwb .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-cwb .cg-eyebrow { letter-spacing: 0.12em; font-weight: 720; text-transform: uppercase; font-size: 0.81rem; }
.cg-root.cg-cwb .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.016em; }
.cg-root.cg-cwb .cg-table caption { font-weight: 540; text-align: left; font-size: 0.91rem; }
.cg-root.cg-cwb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cwb .cg-table th { font-weight: 710; letter-spacing: 0.025em; }
.cg-root.cg-cwb .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-cwb .cg-callout { border-left-width: 6px; border-radius: 0; }
`,

  dossier: {
    curriculumAuthority: 'Torfaen (W06000020), Census 2021 TS001 usual residents 92,276. ONS 2021 BUA (published): Cwmbrân 47,090. Curriculum for Wales, WJEC GCSE and A level. postcodes.io suburban areas whose closest postcode is in the Cwmbrân BUA: Croesyceiliog, Llantarnam, Pontnewydd, Fairwater, Henllys, Oakfield, Coed Eva, Greenmeadow, Thornhill, St Dials, Two Locks, Llanyrafon, Northville, Southville, Old Cwmbran, Ty Canol, Hollybush, Pontrhydyrun, Upper Cwmbran (NP44).',
    localProject: 'Census 2021 TS061 Torfaen: 40,654 in employment, 25,181 drove a car or van (context). Invented Braess network, 4,000 agents: top Start-A cars/100 + A-End 45; bottom Start-B 45 + B-End cars/100; free A-B link. Seed 20260930, slower agents switch with p per round. No link, p 0.1: about 2,000 / 2,000, 65.0 min; p 1: whole crowd flips, 85 min each round. Link opened, p 0.1: round 1 425 on it (64.70), round 5 1,580 (66.15), round 10 2,576 (70.07), settled round 49 with 3,974 (79.77). p 1: all 4,000 at once, 80.0. Coordinated optimum 1,750 / 1,750 / 500, 64.69 min. Lesson family: Braess\'s paradox, selfish routing, Wardrop equilibrium, price of anarchy.',
    requiredMentions: [
      '47,090',
      'Croesyceiliog',
      'Llantarnam',
      'Pontnewydd',
      'Greenmeadow',
      'Braess\'s paradox',
      '25,181',
      '79.77',
      '64.69'
    ],
    sources: [
      { claim: 'Braess D. (1968), Über ein Paradoxon aus der Verkehrsplanung, Unternehmensforschung 12, 258 to 268.', url: 'https://doi.org/10.1007/BF01918335' },
      { claim: 'Braess D., Nagurney A., Wakolbinger T. (2005), On a paradox of traffic planning, Transportation Science 39(4), 446 to 450.', url: 'https://doi.org/10.1287/trsc.1050.0127' },
      { claim: 'ONS Census 2021 TS001 and TS061 (method used to travel to work) via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/datasets/c2021ts061' },
      { claim: 'postcodes.io places and nearest-postcode lookups for suburban areas in Torfaen.', url: 'https://api.postcodes.io/places?q=Croesyceiliog' }
    ],
    rejectedClaims: [
      'That the model network represents any Cwmbran road: it is invented and the page says so.',
      'That the 2021 travel-to-work shares are typical: the census week fell in a period of widespread home working; the page says so.',
      'Any real-world case of a road closure speeding traffic: none cited.',
      'That Llanfrechfa is inside the Cwmbrân built-up area: its closest postcode is outside any BUA; left out.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
