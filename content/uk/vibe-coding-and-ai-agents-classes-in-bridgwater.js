'use strict';
// Bridgwater (cg- town page, UK cluster Phase 10, towns band B, row 522). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does an agent build a trustworthy
// map from readings that are sometimes wrong? (occupancy grid mapping: last reading wins, plain majority, and a
// log-odds score that adds up evidence).
// Data (read 30 September 2026): OpenStreetMap building outlines and streets from one Overpass query for the box
// 51.1235 to 51.1325 north, 3.0135 to 2.9992 west, in Bridgwater.
// Our run (scratchpad bwt/og2.py): box 999 m by 1,001 m, cells of 2 m, 499 by 500 = 249,500 cells. 2,085 building
// outlines cover 58,365 cells (23.4%). The simulated agent follows 17.45 km of streets (service roads left out),
// stops every 5 m (3,149 stops outside buildings) and fires 72 beams of 30 m range: 226,380 readings. Perfect
// sensor: 124,723 cells observed (50.0%), 13,642 wall cells found, which is 23.4% of building cells. Noisy sensor
// (seed 20260930): 10% of beams return a false early echo, 10% miss the wall, the rest have a range error with
// standard deviation 0.7 cell. Last reading wins: 95.57% of observed cells correct, 2,384 phantom wall cells, 74.0%
// of the 13,642 visible wall cells kept (3,012 wiped to free). Plain majority of hits against passes: 98.75%,
// 298 phantoms, 79.7% kept. Log-odds score (+0.85 per hit, -0.4 per pass): 98.32%, 1,420 phantoms, 92.1% kept
// (543 wiped).
// Lesson family: occupancy grid mapping, evidence accumulation in log-odds.
// Place facts: Sedgemoor (E07000188, the census district in 2021) TS001 125,343. ONS 2021 BUAs of 6,000+
// (published): Bridgwater 47,860; Burnham-on-Sea 16,320.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BRIDGWATER', label: 'Bridgwater', blurb: 'Vibe coding and AI agents classes for Bridgwater in Somerset, with an agent that maps a square kilometre of the town from 226,380 unreliable sensor readings.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-bridgwater',
  code: 'bwt',
  accent: '#00703A',
  accentRationale: 'Bridgwater: a deep levels green (6.22:1 contrast on white), chosen by hand to stay clear of the Ashton-under-Lyne red',
  pageType: 'city',
  place: {
    name: 'Bridgwater',
    eyebrow: 'Bridgwater, Somerset, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Somerset' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-west-england', name: 'South West England' }],
  nav: [
    { label: 'Somerset', href: '/coding-classes-in-somerset' },
    { label: 'Taunton', href: '/vibe-coding-and-ai-agents-classes-in-taunton' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bridgwater, Somerset',
  title: 'Vibe Coding and AI Agents Classes in Bridgwater, Somerset',
  description: 'Vibe coding, AI agents, Python and coding lessons on live video for Bridgwater, Hamp, Sydenham, Eastover and Wembdon, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Vibe coding and AI agents classes for Bridgwater, Somerset, with an agent project: an occupancy grid built from 226,380 noisy readings of real building outlines.',
  twitterDescription: 'Bridgwater, Somerset: vibe coding, AI agents, Python and coding classes online for ages 6 to 67. Free first lesson.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Bridgwater, Somerset',
    description: 'Vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Bridgwater and the surrounding Somerset villages, taught live online with evidence weighed before it is believed.'
  },

  h1: 'Vibe coding and AI agents classes in Bridgwater, Somerset',
  capsuleQ: 'Which vibe coding and AI agents classes are best for Bridgwater?',
  capsule: 'Bridgwater\'s built-up area had 47,860 residents when the ONS counted in 2021, and Sedgemoor, the census district it belonged to, had 125,343. Postcode data records Hamp, Sydenham and Eastover as suburban areas of the town, and Wembdon and Chilton Trinity as villages in Somerset. Learners in Bridgwater aged six to 67 study vibe coding, AI agents, Python, coding and maths with us. Every lesson is live on video with a tutor in India, taken alone or with five to ten classmates at the same level. We train learners to ask what an agent actually knows and how it came to believe it. In the Bridgwater project an agent drives the streets of central Bridgwater with a faulty range sensor and has to draw the buildings anyway. The opening lesson costs nothing and finishes with a recommended course. After that, a group place is billed at USD 100 monthly and one-to-one tuition at USD 150 monthly.',
  lead: 'A robot vacuum cleaner learns the shape of a room by bouncing signals off the walls. Some bounces lie. A beam catches a chair leg, or slips through a doorway, or returns a distance that is simply off. If the robot believed each reading as it arrived, its map would flicker with walls that are not there and lose walls that are. What it does instead is keep a score for every small square of floor and let many readings vote. The same idea, called an occupancy grid, guides self-driving cars and warehouse robots, and it is a clean model of how any AI agent should treat information it cannot fully trust. We tried it on a box one kilometre square in central Bridgwater.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents lesson for a learner in Bridgwater.',

  picks: {
    eyebrow: 'Picks for Bridgwater',
    h2: 'Bridgwater routes into vibe coding, thinking and AI agents',
    intro: 'Pick the row that matches the learner\'s age. We ask for no card, and the first live lesson of every course is free.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children get an AI to help build a Scratch robot game and then check what the robot really sensed.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: map a hidden shape from yes and no answers when one answer in ten is a fib.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Vibe coding in Python and on the web for teenagers, with the Bridgwater mapping agent to build.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the first line up to simulations, probability and agents that weigh evidence.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bridgwater in numbers',
      h2: 'Bridgwater and the places around it',
      intro: 'Two census figures for built-up areas, and the suburbs, villages and hamlets that postcode data lists.',
      body: [
        { kind: 'table', caption: 'Built-up areas of 6,000 residents or more in the 2021 census district of Sedgemoor, ONS', head: ['Built-up area', 'Residents at the 2021 census'], rows: [
          ['Bridgwater', '47,860'],
          ['Burnham-on-Sea', '16,320']
        ] },
        { kind: 'p', text: 'Both rows are ONS figures as issued, with no sum taken; 125,343 is the census count for Sedgemoor district as it stood in 2021. In postcodes.io the county for all these places is Somerset. It lists Hamp, Sydenham and Eastover as suburban areas, Wembdon, Chilton Trinity, Cannington and Puriton as villages, Durleigh and Dunwear as hamlets, and North Petherton as a town. Bridgwater schools follow the national curriculum for England, and lessons with us stop for whichever holiday dates you pass on.' },
        { kind: 'callout', h3: 'Somerset, the South West and our method', p: 'For the county go to <a class="cg-inline-link" href="/coding-classes-in-somerset">coding classes in Somerset</a>, and for the region to <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a>. The thinking behind our teaching is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bridgwater project',
      h2: 'An occupancy grid from 226,380 sensor readings',
      intro: 'Real building outlines are the hidden truth. A simulated agent has to rediscover them with a sensor that makes mistakes.',
      body: [
        { kind: 'p', text: 'One Overpass request collects every building outline and street that OpenStreetMap holds for a box in Bridgwater measuring 999 m by 1,001 m. The learner lays a grid of 2 m cells over it, 249,500 cells, and marks the 58,365 that fall inside one of the 2,085 building outlines. That is the answer sheet, and the agent never sees it. The agent travels 17.45 km of streets in the box, stops every 5 m, and at each of its 3,149 stops fires 72 beams in a circle, each reaching 30 m. A beam reports the first building cell it meets. Everything the beam crossed on the way counts as a "pass" for those cells, and the cell where it stopped gets a "hit".' },
        { kind: 'p', text: 'With a perfect sensor the limits of the task show at once. The agent observes 124,723 cells, exactly half of the grid, and finds 13,642 wall cells. That is only 23.4% of all building cells, because a sensor on the street sees the faces of buildings and nothing of their insides or backs. The other half of the grid stays unknown, and unknown is not the same as empty. Then the sensor is made realistic. One beam in ten returns a false early echo. One in ten goes through the wall without noticing it. The rest misjudge the distance by about a cell either way.' },
        { kind: 'table', caption: 'Three ways of turning the same noisy readings into a map, scored against the real outlines (our Python simulation)', head: ['How the agent updates a cell', 'Observed cells correct', 'Phantom wall cells', 'Visible walls kept'], rows: [
          ['Last reading wins', '95.57%', '2,384', '74.0%'],
          ['Majority of hits against passes', '98.75%', '298', '79.7%'],
          ['Log-odds score: +0.85 per hit, -0.4 per pass', '98.32%', '1,420', '92.1%']
        ] },
        { kind: 'p', text: 'Trusting the latest reading is the worst plan by every measure. A single stray beam repaints a cell that many earlier beams had agreed on, and a quarter of the real walls are wiped away. Counting votes fixes most of that: phantoms fall from 2,384 to 298. But plain counting treats a hit and a pass as equal, and with a jittery range a wall cell is often passed as well as struck, so a fifth of the walls still vanish. The log-odds score gives evidence different weights. A hit adds 0.85 to the cell\'s score and a pass takes away 0.4, and the cell is called a wall while its score is above zero. That keeps 92.1% of the walls. The price is 1,420 phantoms. Neither of the last two rows is simply right. The weights are a decision about which mistake costs more, driving into a wall the map forgot or steering round one that was never there, and the agent\'s designer has to make it.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Battleships with a twist: one answer in ten is wrong. Tally every answer per square before deciding.' },
          { h3: 'Ages 11 to 15', p: 'Simulate a noisy sensor on a small hand-made grid in Python and compare last reading with a vote.' },
          { h3: 'Ages 15 and up', p: 'Rasterise real outlines, cast the beams, keep a log-odds grid in NumPy and tune the two weights.' }
        ] },
        { kind: 'callout', h3: 'What is real and what is simulated', p: 'Building outlines and streets are © OpenStreetMap contributors, used under the Open Database Licence. The agent, the sensor, its error rates and every score are simulated by us. No vehicle was driven and nothing was measured on the ground. Outlines that volunteers have not yet drawn are missing from the answer sheet, and a different box, cell size or noise level would change the numbers.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Belief from evidence',
      h2: 'What a noisy map teaches about AI agents and vibe coding',
      intro: 'An agent\'s picture of the world should change by weight of evidence, never on the word of one reading.',
      body: [
        { kind: 'table', caption: 'From the mapping agent to AI agents generally', head: ['In the Bridgwater run', 'When building with agents'], rows: [
          ['Last reading wins lost 26% of the walls', 'Do not let the newest tool result overwrite what was established'],
          ['Half the grid was never observed', 'Keep "unknown" as a state; do not fill gaps with guesses'],
          ['Only building faces were seen', 'Ask what the agent\'s sources cannot see at all'],
          ['298 phantoms or 1,420, by choice of weights', 'Decide which error is worse before tuning'],
          ['Scores checked against real outlines', 'Test an agent where the truth is known']
        ] },
        { kind: 'p', text: 'Software agents built on language models face the same problem with different sensors. A web search returns a page that is out of date. A tool call times out and the agent assumes the answer was no. A model states something confidently that it never looked up. Vibe coding an agent takes an afternoon, and the first version nearly always believes whatever came back last. Bridgwater learners have watched that rule erase a quarter of a town centre, so they build agents that keep track of how well supported each belief is. We start learners on AI agents once they can write Python by themselves, typically at sixth-form age or as adults. Copilot Studio agents are available as a one-to-one course only. Further reading: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>, then <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents route for students in the UK</a>.' },
        { kind: 'p', text: 'The open data came from OpenStreetMap, the ONS and postcodes.io, and that is their only part in this. None of them has seen or endorsed the project, and its errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Course ladder',
    h2: 'From battleships to mapping agents',
    intro: 'We read the school year as a hint. The free lesson is what fixes the level.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Weighing clues and deciding how sure to be, away from the screen first.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'AI-assisted Scratch and first Python, with every result checked.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Vibe coding in Python', p: 'Simulations and web apps made with an assistant and proved by testing.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Agents and automation', p: 'Working Python, then agents that handle unreliable information well.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents and evidence',
    h2: 'What is an occupancy grid, and how does an AI agent map a place with unreliable sensors?',
    intro: 'An occupancy grid is a map cut into small cells, each holding the agent\'s current belief that the cell is blocked; the agent builds it by adding up the evidence of many imperfect sensor readings for each cell instead of trusting any one of them.',
    p1: 'In a simulation over real building outlines in Bridgwater, an agent that believed only its latest reading kept 74.0% of the walls it could see and invented 2,384 wall cells, while one that added weighted evidence kept 92.1%.',
    p2: 'Even a perfect sensor observed just half of the 249,500 cells, so the map also has to record what is unknown.',
    closer: 'Bridgwater teenagers who have written that update rule will not build an AI agent that swallows its most recent input whole. It is a lesson learned by coding the agent and watching it fail, which is why learning to code still matters in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Hamp, Sydenham and Wembdon, live by video',
    intro: 'Learners join from home with a computer, a camera and a steady connection.',
    cells: [
      { h3: 'Built by the learner', p: 'Each student codes on their own shared screen. Tutors prompt, question and wait for an explanation.' },
      { h3: 'Seen before placed', p: 'The free lesson lets us watch a learner think, and the course suggestion comes from that.' },
      { h3: 'Opening lesson free', p: 'There is nothing to pay and no card to give for lesson one.' },
      { h3: 'Small matched classes', p: 'Five to ten learners at a single stage, joining from anywhere in the UK.' },
      { h3: 'Two lessons a week', p: 'Somerset term breaks are kept free once we know the dates.' },
      { h3: 'One UK time, all year', p: 'The tutor handles both clock changes.' }
    ],
    spec: { title: 'Why live and online', p: 'A tutor who is present can interrupt with "how do you know?". A class gathered online can be made up of learners at exactly one level, which no single town could manage.' }
  },

  fees: {
    h2: 'Bridgwater fees',
    intro: 'Bridgwater is on the international price list that serves every country apart from India.',
    first: 'The first lesson is free, runs full length and ends with our recommendation.',
    group: 'Group tuition, near enough eight lessons a month.',
    private: 'One-to-one tuition, near enough eight lessons a month.',
    closer: 'Our prices are in US dollars, with nothing quoted in sterling. We charge nothing ahead of the trial and send a first invoice only when a course and a regular time have been agreed. The pricing page covers holidays, missed lessons and swapping between group and private.'
  },

  reviewsH2: 'Somerset families and learners around the UK, reviewing us on Google',

  book: {
    h2: 'Request a free Bridgwater lesson',
    intro: 'Tell us an age or school year and what the learner is keen on. We will build the trial round it: a battleships game with fibs, a Scratch robot made with AI help, early Python, or a tiny mapping agent.',
    success: 'Thank you. Your Bridgwater request has come through.'
  },

  faq: {
    h2: 'Questions from Bridgwater',
    intro: 'Occupancy grids, the mapping project, vibe coding, AI agents and the arrangements.',
    items: [
      { q: 'What is the population of Bridgwater?', a: 'The ONS figure for the Bridgwater built-up area at the 2021 census is 47,860. The census district of Sedgemoor had 125,343.' },
      { q: 'Are vibe coding and AI agents classes available in Bridgwater?', a: 'Yes, by live video for ages 6 to 67, so Bridgwater, Hamp, Sydenham, Eastover, Wembdon and the villages round about are all within reach.' },
      { q: 'What is vibe coding?', a: 'Writing software by explaining the goal to an AI model in plain language and letting it produce the code. The person stays responsible for reading, testing and correcting it.' },
      { q: 'Why does the agent only ever see half the grid?', a: 'Its beams start on the street and stop at the first wall they meet, so the insides and backs of buildings are never reached. Even with a perfect sensor, 124,723 of the 249,500 cells were observed.' },
      { q: 'What does log-odds mean?', a: 'A way of writing a probability as a score that can be any positive or negative number. It is handy because separate pieces of evidence can simply be added to it.' },
      { q: 'What did the Bridgwater project find?', a: 'That an agent trusting its latest sensor reading lost 26% of the walls it could see, that counting or weighting the evidence kept far more, and that half the map stayed unknown even with a perfect sensor.' },
      { q: 'When can a learner begin building AI agents?', a: 'When they can write Python without help, usually in sixth form or as an adult. The Copilot Studio agents course is private lessons only.' },
      { q: 'Do you help with school computer science?', a: 'Yes, including GCSE and A level computer science and maths. We teach understanding and make no grade promises.' },
      { q: 'What do lessons cost?', a: 'Lesson one is free. Later months are USD 100 for a group place and USD 150 for private lessons.' },
      { q: 'Do lessons stop for the holidays?', a: 'They do, for the dates you give us.' }
    ]
  },

  next: {
    eyebrow: 'Elsewhere in Somerset',
    h2: 'More Somerset and South West pages',
    html: 'A different agent project is on the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-taunton">Taunton</a> page, and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-weston-super-mare">Weston-super-Mare</a> has its own. The county page is <a class="cg-inline-link" href="/coding-classes-in-somerset">Somerset</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has everything else.',
    waLabel: 'Write to us on WhatsApp'
  },

  footerHeading: 'Bridgwater and Somerset',
  footerPlaces: [
    { href: '/coding-classes-in-somerset', label: 'Somerset' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bwt .cg-hero-grid { align-items: start; gap: clamp(1.05rem, 3.1vw, 2.5rem); }
.cg-root.cg-bwt .cg-hero h1 { font-weight: 730; letter-spacing: -0.024em; line-height: 1.06; }
.cg-root.cg-bwt .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-bwt .cg-eyebrow { letter-spacing: 0.085em; font-weight: 700; font-size: 0.82rem; }
.cg-root.cg-bwt .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.013em; }
.cg-root.cg-bwt .cg-table caption { text-align: left; font-size: 0.89rem; font-weight: 500; font-style: italic; }
.cg-root.cg-bwt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bwt .cg-table th { font-size: 0.81rem; font-weight: 700; border-bottom: 1px solid var(--cg-accent); }
.cg-root.cg-bwt .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-bwt .cg-callout { border-left-width: 3px; border-radius: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Sedgemoor (E07000188), the 2021 census district, TS001 usual residents 125,343. ONS 2021 BUAs of 6,000+ (published): Bridgwater 47,860; Burnham-on-Sea 16,320. postcodes.io (county_unitary Somerset): Bridgwater (town); Hamp, Sydenham, Eastover (suburban areas); Wembdon, Chilton Trinity, Cannington, Puriton (villages); Durleigh, Dunwear (hamlets); North Petherton (town).',
    localProject: 'OpenStreetMap building ways and streets via one Overpass query, box 51.1235-51.1325 N, 3.0135-2.9992 W (999 m x 1,001 m). 2 m cells, 499 x 500 = 249,500. 2,085 building outlines rasterised to 58,365 cells (23.4%). Simulated agent: 17.45 km of streets (no service roads), 3,149 stops 5 m apart, 72 beams of 30 m, 226,380 readings. Perfect sensor: 124,723 cells observed (50.0%), 13,642 wall cells found (23.4% of building cells). Noisy sensor, seed 20260930: 10% false early echo, 10% missed wall, range error sd 0.7 cell. Last reading wins: 95.57% of observed cells correct, 2,384 phantom wall cells, 74.0% of visible walls kept (3,012 wiped). Majority of hits vs passes: 98.75%, 298, 79.7%. Log-odds +0.85 hit / -0.4 pass: 98.32%, 1,420, 92.1% (543 wiped). Lesson family: occupancy grid mapping, log-odds evidence accumulation, unknown vs free.',
    requiredMentions: [
      '47,860',
      '125,343',
      'Puriton',
      'Wembdon',
      'Chilton Trinity',
      'Durleigh',
      'Dunwear',
      'Eastover',
      'occupancy grid',
      '249,500',
      '13,642'
    ],
    sources: [
      { claim: 'OpenStreetMap building outlines and streets (ODbL) fetched through the Overpass API for a box in Bridgwater.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas, villages and hamlets in Somerset around Bridgwater.', url: 'https://api.postcodes.io/places?q=Wembdon' }
    ],
    rejectedClaims: [
      'That the box is "the town centre" in any official sense: it is our box; the page says central Bridgwater loosely and gives coordinates in the dossier.',
      'Which named buildings or streets were mapped well or badly: not published.',
      'The river, docks, carnival or any town history: not read from a source; not claimed.',
      'Local government changes in Somerset: not stated; Sedgemoor is described only as the 2021 census district.',
      'That the log-odds weights used are optimal: not claimed; they are one reasonable choice.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
