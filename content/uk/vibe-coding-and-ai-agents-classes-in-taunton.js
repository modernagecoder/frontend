'use strict';
// Taunton (cg- town page, UK cluster Phase 8, towns band A, row 386). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when a whole swarm of AI agents
// agrees, does that make it right? (ant colony optimisation, consensus vs correctness, premature convergence).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map call, bbox -3.114,51.009,-3.100,51.019 (ODbL). Highway ways
// simplified to junctions: largest connected piece 1,044 junctions, 1,270 links. Taunton Library (node 1651599681)
// snapped 9.0 m to a junction; Vivary Park (way 554994523) 38.8 m; the two junctions are 384 m apart in a straight line.
// Our run (scratchpad tnt/aco.py): Dijkstra shortest walking route 523.4 m, 465 junctions settled. Ant colony
// optimisation (20 ants, 100 rounds, evaporation 0.3, pheromone weight 1, distance weight 2, ants never revisit a
// junction), 10 seeds: the optimum was never found; in all 10 runs every one of the 20 ants ended on the same route,
// 195.8 to 337.5 m longer than the optimum (median 222.0 m, about 42% longer). In 4 of the 10 runs the colony had found
// a shorter route earlier and then abandoned it. The first ant reached the park in round 21 (median; range 2 to 56).
// Other settings (evaporation 0.1 or 0.5; 50 ants; distance weight 3 or 5), 6 seeds each, 150 rounds: optimum found in
// none of 24 runs; closest 163.1 m longer.
// Lesson family: ant colony optimisation / swarm intelligence, consensus vs correctness, premature convergence,
// forgetting the best-so-far. Screened: ant colony, swarm, pheromone 0 hits. Crewe owns Q-learning (learn vs plan);
// Worcester owns A*; Kettering owns minimax.
// Place facts: ONS 2021 BUAs (published): Taunton 61,665; Norton Fitzwarren 3,770; Monkton Heathfield 4,585.
// postcodes.io (Somerset), suburban areas: Wilton, Priorswood, Halcon, Holway, Galmington, Lyngford, Comeytrowe; villages:
// Staplegrove, Trull.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'TAUNTON', label: 'Taunton', blurb: 'Vibe coding and AI agents classes for Taunton, with a swarm project where 20 AI ants all agree on a route through the town, and are all wrong.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-taunton',
  code: 'tnt',
  accent: '#7A1F7A',
  accentRationale: 'Taunton: a deep damson purple (7.34:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Taunton',
    eyebrow: 'Taunton, Somerset, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Somerset' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-west-england', name: 'South West England' }],
  nav: [
    { label: 'Somerset', href: '/coding-classes-in-somerset' },
    { label: 'South West', href: '/coding-and-ai-classes-in-south-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Taunton, England',
  title: 'Vibe Coding and AI Agents Classes in Taunton | Ages 6 to 67',
  description: 'Online vibe coding, AI agents and Python classes for Taunton, Wilton, Priorswood and Galmington learners aged 6 to 67, one-to-one or in groups. First lesson free.',
  ogDescription: 'Live online vibe coding and AI agents classes for Taunton, and a swarm-intelligence project where a whole colony of AI ants agrees on the wrong route.',
  twitterDescription: 'Taunton vibe coding, AI agents and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Taunton',
    description: 'Online vibe coding, AI agents, Python, coding and mathematics for children, teenagers and adults in Taunton and Somerset, taught live with thinking skills first.'
  },

  h1: 'Vibe coding and AI agents classes in Taunton',
  capsuleQ: 'Where can Taunton learners find the best vibe coding and AI agents classes?',
  capsule: 'At the 2021 census the ONS counted 61,665 people in the Taunton built-up area, with Monkton Heathfield and Norton Fitzwarren listed as separate smaller areas; Wilton, Priorswood, Halcon, Holway and Galmington are among the town\'s recorded suburbs. Children from six, teenagers and adults up to 67 across the town work with our India-based tutors over a live video call on vibe coding, AI agents, Python, coding and maths, privately or alongside five to ten peers at their level. We teach clear thinking first, so that learners can challenge an agent\'s answer instead of just accepting it. Lesson one costs nothing and closes with a course we think fits. The Taunton project releases a swarm of 20 small AI agents into the town\'s streets and asks a question that matters more as agents multiply: when they all agree, are they right? From month two, a shared class is USD 100 and a private tutor USD 150, each billed monthly.',
  lead: 'Ant colonies are famous for finding short routes to food without a map or a leader: each ant leaves a scent trail, shorter trails get walked more often, the scent builds up, and the colony settles on a path. Computer scientists copied the idea, calling it ant colony optimisation, and it is one of the classic examples of swarm intelligence: many simple agents producing clever group behaviour. This project lets a colony of 20 virtual ants loose on central Taunton\'s real street map, between Taunton Library and Vivary Park, and compares their route with the exact answer. The result is a lesson every builder of multi-agent AI needs: a confident, unanimous swarm can still be wrong.',
  wa: 'Hello Modern Age Coders, please could we book a free vibe coding or AI agents lesson for a learner in Taunton?',

  picks: {
    eyebrow: 'Taunton course picks',
    h2: 'Courses for Taunton: thinking, vibe coding, agents',
    intro: 'Choose from these by age. The opening lesson on each is live and free, and nothing needs to be paid to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: testing a popular answer, spotting when everyone is wrong together.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games and simulations, then apps made by describing them to an AI.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the ant colony on Taunton\'s streets.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Multi-agent systems, language-model agents and how to check what they conclude.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Taunton',
      h2: 'Taunton and its neighbourhoods',
      intro: 'ONS census counts for Taunton and two smaller built-up areas, plus the suburbs recorded in the town.',
      body: [
        { kind: 'table', caption: 'Taunton, Monkton Heathfield and Norton Fitzwarren, 2021 census counts from the ONS', head: ['Built-up area', 'People (2021)'], rows: [
          ['Taunton', '61,665'],
          ['Monkton Heathfield', '4,585'],
          ['Norton Fitzwarren', '3,770']
        ] },
        { kind: 'p', text: 'These three figures are printed exactly as the ONS released them, with no total added. Wilton, Priorswood, Halcon, Holway, Galmington, Lyngford and Comeytrowe are recorded as suburban areas, and Staplegrove and Trull as villages, in Somerset. The national curriculum for England applies in Taunton\'s schools; tell us your holiday dates and we will leave them lesson-free.' },
        { kind: 'callout', h3: 'Somerset, the South West and our approach', p: 'See <a class="cg-inline-link" href="/coding-classes-in-somerset">coding classes in Somerset</a> for the county and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a> for the region. The reasons we put thinking before prompting are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Taunton project',
      h2: 'Twenty AI ants, one street map, and a unanimous wrong answer',
      intro: 'Build an ant colony in Python, let it choose a route from Taunton Library to Vivary Park, then check it against the exact shortest path.',
      body: [
        { kind: 'p', text: 'The street map comes from the OpenStreetMap API: central Taunton turned into 1,044 junctions joined by 1,270 links. Taunton Library and Vivary Park are attached to their nearest junctions, which are 384 m apart in a straight line. An exact algorithm, Dijkstra\'s, examines 465 junctions and reports the shortest walking route: 523.4 m. That is the answer to beat.' },
        { kind: 'p', text: 'Each virtual ant starts at the library and wanders from junction to junction, never revisiting one, choosing its next link at random but favouring short links and links with more scent on them. Ants that reach the park lay scent along their whole route, more for shorter routes, and after every round some scent evaporates so that old choices can fade. Twenty ants run for 100 rounds, and the experiment is repeated with 10 different random seeds. For the first rounds most ants get lost in dead ends; in the median run the first ant only reaches the park in round 21.' },
        { kind: 'table', caption: 'Where the ants finished after 100 rounds in each of 10 runs (Python, OpenStreetMap data, 29 September 2026)', head: ['Question', 'Answer'], rows: [
          ['Exact shortest route (Dijkstra)', '523.4 m'],
          ['Runs where the colony found that route', '0 of 10'],
          ['Runs where all 20 ants agreed on one route at the end', '10 of 10'],
          ['How much longer the agreed route was', '195.8 to 337.5 m (median 222.0 m)'],
          ['Runs where a better route was found and then abandoned', '4 of 10']
        ] },
        { kind: 'p', text: 'The colony always reached a decision. In every one of the ten runs, all 20 ants ended up walking exactly the same route, a perfect consensus. And in every run that route was wrong, typically 222.0 m longer than the shortest, about 42% further. Worse, in four runs the ants had actually found a shorter route earlier on, and then drifted away from it as the scent on their favourite path drowned it out. Tuning did not rescue them: across 24 more runs with more ants, faster or slower evaporation, or a stronger pull towards short links, the colony never found the 523.4 m route, and its closest was still 163.1 m too long.' },
        { kind: 'p', text: 'A likely cause shows up in the logs. The first ants to arrive, after long wandering routes, laid the first scent, and every later ant was nudged along those same streets. The swarm amplified its first idea instead of searching for a better one, a trap known as premature convergence. Simple fixes exist, such as always remembering the shortest route ever found, but the deeper lesson is that agreement among agents is not evidence of being right.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play a follow-the-trail game on a paper map and see how quickly everyone copies the first path.' },
          { h3: 'Ages 11 to 15', p: 'Program a single random-walking ant in Python and count how often it reaches the park.' },
          { h3: 'Ages 15 and up', p: 'Build the full colony, measure consensus and add a "remember the shortest" rule to fix it.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap streets, our ants', p: 'Street data is from OpenStreetMap and its contributors under the Open Database Licence. The colony, the shortest-path check and all the route measurements are our own work, describing the mapped network inside one rectangle.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Swarms of agents',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A crowd that agrees has not necessarily checked.',
      body: [
        { kind: 'table', caption: 'From Taunton\'s ant colony to teams of AI agents', head: ['In the ant colony', 'In multi-agent AI'], rows: [
          ['All 20 ants agreed, and were wrong', 'Several agents agreeing can still be mistaken'],
          ['Early routes shaped every later choice', 'Agents copying each other amplify early errors'],
          ['Better routes were found, then lost', 'Keep a record of the strongest answer so far'],
          ['An exact method settled it', 'Check swarm conclusions against a trusted source'],
          ['Tuning did not fix it', 'Some problems need a different method, not more effort']
        ] },
        { kind: 'p', text: 'Systems built from several AI agents are becoming common: one plans, another searches, a third reviews. When they read each other\'s outputs, they can reinforce a shared mistake just as the ants did. Describe a colony like this to an AI in a vibe coding session and you will get working code in minutes, and it will be easy to get subtly wrong, so Taunton learners always keep an exact answer to compare against. Language-model agents are for older teens and adults with confident Python, and Copilot Studio agents run as private lessons only. The steps are on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our UK students\' agents course page</a>, with the philosophy in <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders works independently of OpenStreetMap, the ONS, postcodes.io and the venues named here. The map and figures are theirs; the swarm and its mistakes, deliberate and otherwise, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From trail games to multi-agent systems',
    intro: 'School year gives a first guess; the free lesson shows the true starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Testing the popular answer and explaining why.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Simulations and games built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and simulations', p: 'Randomness, agents and graphs alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Multi-agent AI', p: 'Agents, tools, review loops and verification, built in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and agreement',
    h2: 'What is swarm intelligence, and can a swarm of AI agents be wrong?',
    intro: 'It is clever group behaviour from many simple agents, and yes: in Taunton all 20 agreed on a route 42% longer than the shortest.',
    p1: 'Swarms are good at finding decent answers without central control. They are not guaranteed to find the correct one, and their confidence grows as they converge, whether or not they are right.',
    p2: 'Learners who have watched a unanimous colony pick the wrong road treat agreement between AI tools as a reason to check, not a reason to relax.',
    closer: 'Knowing that a crowd of agents can agree and still be wrong puts Taunton teenagers a step ahead with AI, a solid reason to take up coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Wilton to Priorswood, online',
    intro: 'A laptop or desktop and a broadband line that copes with video are all that is needed.',
    cells: [
      { h3: 'Learner in the driving seat', p: 'Students type, prompt and run their own code; the tutor watches through screen share and keeps the questions coming.' },
      { h3: 'Level set by a trial', p: 'The free lesson decides where to start, whatever the school year, and we note any exam board.' },
      { h3: 'No charge for lesson one', p: 'The first session is free and ends with a course suggestion.' },
      { h3: 'Matched classes', p: 'Groups of five to ten UK learners who are at about the same point.' },
      { h3: 'Two sessions a week', p: 'Paused through the school holidays.' },
      { h3: 'Steady slots', p: 'Tutors adjust when the clocks change, so the lesson hour stays the same.' }
    ],
    spec: { title: 'Why lessons happen online', p: 'Five learners at one stage, all free on one evening, seldom live on the same side of town. Online, they can share a class wherever they are.' }
  },

  fees: {
    h2: 'Taunton fees',
    intro: 'Taunton learners pay the international rate we charge everywhere except India.',
    first: 'A full lesson free to start, with our course suggestion at the end.',
    group: 'Roughly eight live lessons a month in a small group.',
    private: 'Roughly eight live one-to-one lessons a month.',
    closer: 'Fees are charged in US dollars, not pounds. Invoicing waits until the trial has fixed a course and a time each week; holidays, absences and format swaps are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews: Somerset households and families nationwide',

  book: {
    h2: 'Book a free Taunton lesson',
    intro: 'Tell us roughly how old the learner is and what they like doing. A trial might be a trail-following puzzle, an AI-assisted Scratch simulation, a first Python program, or a single virtual ant of their own.',
    success: 'Thank you. Your Taunton request has arrived.'
  },

  faq: {
    h2: 'Taunton questions',
    intro: 'Swarm intelligence, the ant colony project, vibe coding and practical details.',
    items: [
      { q: 'How big is Taunton?', a: 'The Taunton built-up area had 61,665 residents at the 2021 census, according to the ONS.' },
      { q: 'Are vibe coding and AI agents lessons available to Taunton learners?', a: 'They are, over live video, for anyone from 6 to 67 in Taunton or elsewhere in Somerset.' },
      { q: 'What is ant colony optimisation?', a: 'A way of finding good routes by simulating many ants that lay and follow scent trails, so that popular short paths become stronger over time.' },
      { q: 'What is the Taunton project?', a: 'Learners release 20 virtual ants onto central Taunton\'s real streets, watch them agree on a route between Taunton Library and Vivary Park, and prove with an exact algorithm that the agreed route is not the shortest.' },
      { q: 'When can learners start building AI agents?', a: 'Once Python feels natural, which tends to mean the late teens or adulthood; Copilot Studio agent work is private tuition only.' },
      { q: 'Are lessons in person?', a: 'No, everything is live online.' },
      { q: 'Is exam-year help on offer?', a: 'For GCSE and A level computer science and maths, yes; we build understanding and never promise grades.' },
      { q: 'What ages can join?', a: 'From 6 to 67.' },
      { q: 'What are the fees?', a: 'Nothing for lesson one; after that USD 100 per month to join a group, or USD 150 per month for one-to-one tuition.' },
      { q: 'Do lessons stop for school holidays?', a: 'Yes. Just send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Somerset and South West pages',
    html: '<a class="cg-inline-link" href="/online-coding-and-python-classes-in-weston-super-mare">Weston-super-Mare</a> runs a dynamic programming project in North Somerset, and <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol</a> has its own page too. Every area we teach is listed on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Taunton and Somerset',
  footerPlaces: [
    { href: '/coding-classes-in-somerset', label: 'Somerset' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-tnt .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-tnt .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-tnt .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-tnt .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-tnt .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.02em; }
.cg-root.cg-tnt .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-tnt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tnt .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-tnt .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-tnt .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'ONS 2021 BUAs (published): Taunton 61,665; Monkton Heathfield 4,585; Norton Fitzwarren 3,770. postcodes.io (Somerset): Wilton, Priorswood, Halcon, Holway, Galmington, Lyngford, Comeytrowe (suburban areas); Staplegrove, Trull (villages). OSM: Taunton Library (node 1651599681), Vivary Park (way 554994523).',
    localProject: 'OSM bbox -3.114,51.009,-3.100,51.019: 1,044 junctions, 1,270 links. Dijkstra 523.4 m (465 settled). ACO 20 ants x 100 rounds, 10 seeds: optimum 0/10; unanimous final route 10/10, 195.8 to 337.5 m longer (median 222.0); better route found then abandoned 4/10; first arrival median round 21 (2 to 56). 24 more runs over 4 settings: optimum 0, closest +163.1 m. Lesson family: ant colony optimisation, consensus vs correctness, premature convergence.',
    requiredMentions: [
      '61,665',
      'Monkton Heathfield',
      'Norton Fitzwarren',
      'Priorswood',
      'Halcon',
      'Galmington',
      'Taunton Library',
      'Vivary Park',
      'ant colony',
      '523.4'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'OpenStreetMap map data for central Taunton, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'OpenStreetMap API 0.6 map call used for the street graph.', url: 'https://api.openstreetmap.org/api/0.6/map?bbox=-3.114,51.009,-3.100,51.019' },
      { claim: 'postcodes.io places in Somerset around Taunton (suburban areas and villages).', url: 'https://api.postcodes.io/places?q=Priorswood' }
    ],
    rejectedClaims: [
      'Castle, county town or cider history: not read from a source; not claimed.',
      'How real ant colonies perform: described only in general terms, not measured.',
      'That ant colony optimisation always fails: not claimed; it failed on this map with these settings.',
      'That the mapped route is a safe or recommended walk: not assessed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
