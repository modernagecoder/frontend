'use strict';
// Worksop (cg- town page, UK cluster Phase 10, towns band B, row 542). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: four agents share 240 jobs of very different
// sizes; how should they split the work so nobody sits idle? (work stealing vs static split vs a shared queue).
// Data (read 30 September 2026): OpenStreetMap via one Overpass query, highway ways (motorway to service, with links)
// in the box 53.285 to 53.335 N, 1.170 to 1.075 W: 2,922 ways, 15,739 nodes, 2,733 junctions (three or more road
// links), 315.0 km of road. Tasks (scratchpad wkp/ws.py, seed 2026): 240 junctions drawn at random; each task is a
// shortest-path search by road out to 1,500 m from its junction, costed as the number of road-segment checks: min 326,
// median 4,021, max 8,368; all 240 together 969,483. Scheduling for four agents (wkp/sched.py): lower bound 242,371
// (a quarter of the work). Static west-to-east split into four equal-count blocks: finishing time 336,566 (38.9% over
// the bound), block loads 143,016 / 282,554 / 336,566 / 207,347, mean task cost by block 2,384 / 4,709 / 5,609 /
// 3,456. Round robin: 257,374 (6.2% over). Shared queue: 242,545 (0.07% over), 240 visits to the queue. Work stealing
// (each agent starts with its west-to-east block; an idle agent picks another agent at random and takes one task from
// the far end of its list; 200 runs): mean 243,767 (0.6% over), range 243,664 to 245,580, 33.4 steals and 18.0 failed
// tries on average. With 50 units charged for every contact: stealing 244,109, shared queue 245,601. Stealing half a
// list at a time: 9.1 steals on average, finishing time 244,374.
// Lesson family: work stealing (load balancing across agents; static split vs central queue vs stealing).
// Place facts: Bassetlaw (E07000171) TS001 117,804. ONS 2021 BUAs (published): Worksop 43,440; Retford 23,740;
// Harworth and Bircotes 8,885. postcodes.io suburban areas with nearest postcode in the Worksop BUA: Manton, Kilton,
// Gateford. Villages: Rhodesia, Shireoaks.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WORKSOP', label: 'Worksop', blurb: 'Vibe coding and AI agents classes for Worksop in Bassetlaw, with a project on four agents sharing 240 jobs of uneven size.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-worksop',
  code: 'wkp',
  accent: '#902622',
  accentRationale: 'Worksop: a muted sandstone red (8.45:1 contrast on white, 6.86:1 on the darkest paper tint), picked by hand under the muted-accent rule, at least 40 RGB steps from East Midlands pages and neighbouring rows',
  pageType: 'city',
  place: {
    name: 'Worksop',
    eyebrow: 'Worksop, Bassetlaw, Nottinghamshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Nottinghamshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-midlands', name: 'East Midlands' }],
  nav: [
    { label: 'Nottinghamshire', href: '/coding-classes-in-nottinghamshire' },
    { label: 'Mansfield', href: '/online-coding-and-python-classes-in-mansfield' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Worksop, Nottinghamshire',
  title: 'Vibe Coding and AI Agents Classes in Worksop | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents, Python and coding classes for Worksop, Manton, Kilton, Gateford, Rhodesia and Shireoaks, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Vibe coding and AI agents classes for Worksop, Nottinghamshire, with a project on work stealing: four agents, 240 uneven jobs, and why an equal split finished 38.9% late.',
  twitterDescription: 'Worksop, Nottinghamshire: vibe coding, AI agents, Python and coding on live video for ages 6 to 67, beginning with a free lesson.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Worksop, Nottinghamshire',
    description: 'Vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Worksop and across Bassetlaw, taught live online by tutors who teach learners to plan how agents share work.'
  },

  h1: 'Vibe coding and AI agents classes in Worksop',
  capsuleQ: 'Where are the best vibe coding and AI agents classes for Worksop learners?',
  capsule: 'Worksop, as a built-up area, had 43,440 residents in 2021 by the ONS count, and its district, Bassetlaw, had 117,804. Manton, Kilton and Gateford are suburban areas of the town in postcode data, and Rhodesia and Shireoaks are villages close by. Whether a Worksop learner is six or 67, we can teach vibe coding, AI agents, Python, programming or maths, over live video from India, either privately or among five to ten classmates who share a level. When our learners build with agents, they plan who does what before anything runs, because a team of agents is only as quick as its slowest member. The Worksop project hands 240 route-finding jobs from the town\'s road map to four agents and compares ways of sharing them out, including one called work stealing. The first lesson is free and closes with a course suggestion; later on, a class place is USD 100 a month and a private tutor USD 150 a month.',
  lead: 'Give one job to four AI agents and the obvious plan is to cut it into four equal parts. It rarely works. Jobs that look the same size turn out not to be, and three agents end up waiting for the fourth. Worksop\'s road map shows why. Finding every road within 1.5 km of a junction is quick near the edge of the mapped area and slow nearer the middle, where far more road falls within reach. Split 240 such jobs by position and one agent inherits the costly middle. Computer scientists solved this for processors with a trick called work stealing: an agent that runs out of jobs quietly takes one from a busy neighbour. It is now a standard way of sharing work in parallel programs, and it applies just as well to teams of AI agents.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents lesson for a learner in Worksop.',

  picks: {
    eyebrow: 'Course routes',
    h2: 'Four Worksop routes into vibe coding and agents',
    intro: 'Match the route to the learner\'s age; whichever you pick opens with a free live lesson and no card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: four friends share a pile of chores of different sizes and find the fairest way to finish together.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children ask an AI for a Scratch game with several helpers, then fix the helper that always finishes last.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects built with AI help, including the Worksop job-sharing simulation.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Language models, retrieval and agents, with orchestration of several agents that share one task.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The district',
      h2: 'Worksop, Retford and the rest of Bassetlaw',
      intro: 'Three of the district\'s built-up areas as the ONS published them for 2021, and the places around Worksop in postcode data.',
      body: [
        { kind: 'table', caption: 'Worksop, Retford, and Harworth and Bircotes: 2021 census residents as published by the ONS', head: ['Town (built-up area)', 'People counted in 2021'], rows: [
          ['Worksop', '43,440'],
          ['Retford', '23,740'],
          ['Harworth and Bircotes', '8,885']
        ] },
        { kind: 'p', text: 'Each number stands alone, rounded by the ONS, and none is added to another; Bassetlaw\'s 117,804 comes from a separate district count. In postcodes.io, Manton, Kilton and Gateford are suburban areas whose nearest postcode lies in the Worksop built-up area, while Rhodesia and Shireoaks are listed as villages with built-up areas of their own. The national curriculum for England applies in Nottinghamshire schools; send your holiday weeks and lessons will skip them.' },
        { kind: 'callout', h3: 'Nottinghamshire, the East Midlands and our approach', p: 'For the county see <a class="cg-inline-link" href="/coding-classes-in-nottinghamshire">coding classes in Nottinghamshire</a>, and for the region <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">East Midlands</a>. Why we teach thinking before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>, and the teenage route is on <a class="cg-inline-link" href="/vibe-coding-for-teens">vibe coding for teens</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Worksop project',
      h2: 'Four agents, 240 jobs, and the case for work stealing',
      intro: 'Measure how big each job really is, then test four ways of sharing the jobs among four agents.',
      body: [
        { kind: 'p', text: 'The learner downloads the roads mapped in OpenStreetMap across a box around Worksop: 315.0 km of road meeting at 2,733 junctions. Python picks 240 junctions at random, and each becomes a job: find every road within 1,500 m of that junction by the shortest route. The cost of a job is the number of road segments the search has to check. The cheapest job needed 326 checks and the dearest 8,368; the middle one needed 4,021, and the whole set 969,483. Shared perfectly among four agents, nobody could finish before 242,371, a quarter of the total, so that is the target.' },
        { kind: 'table', caption: 'When the last of four agents finishes, by way of sharing 240 jobs (cost in road-segment checks, our simulation)', head: ['How the jobs are shared', 'Last agent finishes at', 'Over the ideal'], rows: [
          ['Four equal blocks, west to east', '336,566', '38.9%'],
          ['Dealt out in turn, like cards', '257,374', '6.2%'],
          ['Work stealing, 200 runs on average', '243,767', '0.6%'],
          ['One shared queue for everyone', '242,545', '0.07%']
        ] },
        { kind: 'p', text: 'The equal split failed because position predicts cost. Jobs in the westernmost quarter averaged 2,384 checks and those in the third quarter 5,609, so one agent carried 336,566 while another was done at 143,016. Dealing jobs out in turn broke that pattern and got within 6.2%. The last two methods share work while it happens. With a shared queue, every agent collects its next job from one central list, which gets closest to the ideal but means 240 visits to that list. With work stealing, each agent starts with its own block and, when it runs dry, picks another agent at random and takes one job from the far end of that agent\'s list. Over 200 runs, that took 33.4 steals and 18.0 wasted tries on average, about 51 contacts instead of 240, and finished within 0.6% of the ideal.' },
        { kind: 'p', text: 'Contacts are not free. When each one was charged 50 units of time, stealing finished at 244,109 on average and the shared queue at 245,601, so the decentralised method came out ahead. Taking half of a victim\'s list at once cut the steals to 9.1 but finished slightly later, at 244,374, because big grabs are harder to balance at the end.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Share a pile of chore cards of different sizes among four friends, first in equal piles, then by letting the fast ones help.' },
          { h3: 'Ages 11 to 15', p: 'Load the Worksop roads in Python, time a search from one junction, and see how the cost changes across town.' },
          { h3: 'Ages 15 and up', p: 'Simulate the four sharing methods, add a cost per contact, and explain when stealing beats a central queue.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Road data is from OpenStreetMap contributors under the Open Database Licence. The box includes countryside around the town and service roads such as car park lanes, so the search costs describe the map, not traffic. Costs are counted in road-segment checks rather than seconds, which keeps runs repeatable on any computer. The jobs, the agents and the sharing rules are our simulation.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents that share work',
      h2: 'What job sharing teaches about AI agents and vibe coding',
      intro: 'The slowest agent sets the pace for the whole team.',
      body: [
        { kind: 'table', caption: 'From Worksop road searches to multi-agent AI', head: ['In the Worksop run', 'In AI agent design'], rows: [
          ['Equal-looking blocks finished 38.9% late', 'Tasks rarely take equal time, so avoid fixed splits'],
          ['Position predicted cost', 'Hidden patterns in the task list skew any plan'],
          ['A shared queue needed 240 visits', 'A central coordinator can become the bottleneck'],
          ['Stealing needed about 51 contacts', 'Letting idle agents help themselves scales better'],
          ['Charging for contacts changed the winner', 'Coordination has a cost, so measure it']
        ] },
        { kind: 'p', text: 'Agent frameworks often run a planner that splits a job and hands the pieces to worker agents. If the planner guesses sizes wrongly, some workers idle while one grinds on, and the whole system waits. The Worksop run gives a learner the vocabulary to spot this: the ideal finishing time, the cost of coordination, and the choice between one central list and agents that help themselves. It also shapes how they vibe code. An assistant asked to "run these jobs in parallel" will usually split them evenly; asking what happens when the jobs are uneven is the learner\'s contribution. Agent projects begin when a learner\'s Python is secure, typically in sixth form, with Copilot Studio kept to one-to-one teaching. Further reading: how UK students <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">move on to agents</a>, and why we ask them to <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand code rather than paste it</a>.' },
        { kind: 'p', text: 'We built this page on open data from OpenStreetMap contributors, the Office for National Statistics and postcodes.io. They have not endorsed it, and the simulation is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Pathway',
    h2: 'From chore charts to parallel agents',
    intro: 'We start from a school year and adjust after the free lesson.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Planning, sharing and spotting the step that holds everyone up.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games with several helpers, built with an AI and tuned by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, simulation and agents', p: 'Queues, simulations and models, alongside GCSE and A level work.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Agents that cooperate', p: 'Dependable Python, then language models, retrieval and agent teams.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and work',
    h2: 'How do you split work between multiple AI agents?',
    intro: 'You split work between AI agents by breaking the job into many small tasks and letting any agent that runs out take more, from a shared queue or from a busy agent\'s list, instead of dividing the job into equal-looking chunks up front, because tasks rarely take equal time.',
    p1: 'For 240 road-search jobs in Worksop shared among four agents, four equal blocks finished 38.9% later than the ideal, while work stealing finished within 0.6% of it.',
    p2: 'Work stealing needed about 51 contacts between agents against 240 visits to a central queue, and when every contact carried a cost it finished first.',
    closer: 'A Worksop teenager who has built that simulation will ask how an agent system shares its work before trusting it with a real job. That question comes from writing and testing code, and it is why learning to code still pays off in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lessons',
    h2: 'Manton, Kilton and Gateford on a live call',
    intro: 'Any computer with a camera and a home broadband line is enough.',
    cells: [
      { h3: 'Build, then explain', p: 'The learner writes the code on a shared screen and talks the tutor through it before pressing run.' },
      { h3: 'Level from the trial', p: 'The free session tells us where to start, and we record any exam board.' },
      { h3: 'Try it free', p: 'No charge and no card for lesson one, which ends with a course suggestion.' },
      { h3: 'A class at your stage', p: 'Five to ten learners in a group, all at one level, from around the UK.' },
      { h3: 'Two lessons each week', p: 'Tell us your holidays and we leave them clear.' },
      { h3: 'Clocks change, lessons do not', p: 'Our tutors follow British Summer Time so your slot stays the same.' }
    ],
    spec: { title: 'Why online', p: 'Classes grouped by level need learners from a wide area. One district cannot fill them; the UK can.' }
  },

  fees: {
    h2: 'Worksop fees',
    intro: 'Worksop learners pay our international rates, which apply outside India.',
    first: 'A free lesson of full length, finishing with our course recommendation.',
    group: 'Around eight live lessons a month in a small class.',
    private: 'Around eight live lessons a month, one-to-one.',
    closer: 'Fees are in US dollars only, with no pound price shown. We start billing once the trial has led to an agreed course and weekly time; holidays, missed lessons and switching format are on the pricing page.'
  },

  reviewsH2: 'Nottinghamshire parents and UK learners, in their Google reviews',

  book: {
    h2: 'Book a free lesson for Worksop',
    intro: 'All we need is how old the learner is, or their school year, and a hobby or two. From that we plan a trial: perhaps a fair-sharing puzzle, an AI-built Scratch game, a first Python program, or a tiny team of agents.',
    success: 'Thank you. Your Worksop request has reached us and we will reply.'
  },

  faq: {
    h2: 'Worksop questions',
    intro: 'Sharing work, the road-search jobs, vibe coding, and fees and timings.',
    items: [
      { q: 'How many people live in Worksop?', a: 'The ONS counted 43,440 residents in the Worksop built-up area at the 2021 census, in a Bassetlaw district of 117,804.' },
      { q: 'Are online AI agents classes available in Worksop?', a: 'They are. With every lesson on a live video call, learners aged 6 to 67 in Manton, Kilton, Gateford, Rhodesia or Shireoaks can take part.' },
      { q: 'What is work stealing?', a: 'A way of sharing tasks in which each worker keeps its own list, and a worker that runs out takes a task from another worker\'s list instead of waiting.' },
      { q: 'What is load balancing?', a: 'Spreading work across several workers, machines or agents so that none is overloaded while others sit idle.' },
      { q: 'What happens in the Worksop project?', a: 'Learners turn 240 road searches on the Worksop map into jobs, measure their real costs in Python, and simulate four agents sharing them in four different ways.' },
      { q: 'How is vibe coding taught?', a: 'At every age the learner describes the program to an AI, then tests and repairs what it writes, here by timing uneven jobs.' },
      { q: 'Is there a minimum level for building agents?', a: 'Independent Python comes first, which usually means sixth form or adulthood. Copilot Studio agents are only offered one-to-one.' },
      { q: 'Can you support exam years?', a: 'GCSE and A level computer science and maths, yes, always aiming at understanding. Grades are never guaranteed.' },
      { q: 'How much does it cost?', a: 'The first lesson is free. After it, USD 100 a month for a group place, or USD 150 a month for private lessons.' },
      { q: 'Can lessons stop for school holidays?', a: 'Of course. Share your holiday dates and no lessons are booked for them.' }
    ]
  },

  next: {
    eyebrow: 'Beyond Worksop',
    h2: 'More pages for Nottinghamshire and nearby',
    html: 'Other projects are on the <a class="cg-inline-link" href="/online-coding-and-python-classes-in-mansfield">Mansfield</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-rotherham">Rotherham</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-chesterfield">Chesterfield</a> pages, and the county page is <a class="cg-inline-link" href="/coding-classes-in-nottinghamshire">Nottinghamshire</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Worksop and Nottinghamshire',
  footerPlaces: [
    { href: '/coding-classes-in-nottinghamshire', label: 'Nottinghamshire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wkp .cg-hero-grid { align-items: end; gap: clamp(1.05rem, 3.1vw, 2.7rem); }
.cg-root.cg-wkp .cg-hero h1 { font-weight: 780; letter-spacing: -0.032em; line-height: 1.03; }
.cg-root.cg-wkp .cg-capsule { border-left: 5px solid var(--cg-accent); border-radius: 0 12px 12px 0; padding: 0.4rem 0 0.4rem 1rem; }
.cg-root.cg-wkp .cg-eyebrow { letter-spacing: 0.16em; font-weight: 650; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-wkp .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.022em; }
.cg-root.cg-wkp .cg-table caption { text-align: left; font-size: 0.87rem; font-weight: 700; }
.cg-root.cg-wkp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wkp .cg-table th { font-size: 0.81rem; font-weight: 800; letter-spacing: 0.04em; }
.cg-root.cg-wkp .cg-ladder-col { border-bottom: 5px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-wkp .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Bassetlaw (E07000171), Census 2021 TS001 usual residents 117,804. ONS 2021 BUAs inside Bassetlaw (published): Worksop 43,440; Retford 23,740; Harworth and Bircotes 8,885. postcodes.io: Manton (S80), Kilton (S81), Gateford (S81): suburban areas with nearest postcode in the Worksop BUA; Rhodesia and Shireoaks: villages with their own BUAs.',
    localProject: 'OpenStreetMap via one Overpass query: highway ways (motorway, trunk, primary, secondary, tertiary, unclassified, residential, living_street, service and links) in 53.285 to 53.335 N, 1.170 to 1.075 W; 2,922 ways, 15,739 nodes, 2,733 junctions (degree 3 or more), 315.0 km. 240 random junctions (seed 2026); job = Dijkstra search out to 1,500 m, cost = edge relaxations: min 326, median 4,021, max 8,368, total 969,483. Four agents, lower bound 242,371. Static west-to-east blocks 336,566 (+38.9%), loads 143,016 / 282,554 / 336,566 / 207,347, mean job cost by block 2,384 / 4,709 / 5,609 / 3,456. Round robin 257,374 (+6.2%). Shared queue 242,545 (+0.07%), 240 queue visits. Work stealing (one job from the far end of a random victim, 200 runs): mean 243,767 (+0.6%), range 243,664 to 245,580, steals 33.4, failed tries 18.0. Overhead 50 per contact: stealing 244,109, shared queue 245,601. Steal-half: 9.1 steals, 244,374. Lesson family: work stealing and load balancing across agents.',
    requiredMentions: [
      '117,804',
      '43,440',
      'Manton',
      'Kilton',
      'Gateford',
      'work stealing',
      '969,483',
      '242,371',
      '336,566',
      '243,767',
      '2,733'
    ],
    sources: [
      { claim: 'OpenStreetMap contributors: roads around Worksop via the Overpass API, under the Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'Blumofe R. D. and Leiserson C. E. (1999), Scheduling multithreaded computations by work stealing, Journal of the ACM 46(5), 720 to 748.', url: 'https://doi.org/10.1145/324133.324234' },
      { claim: 'Graham R. L. (1969), Bounds on multiprocessing timing anomalies, SIAM Journal on Applied Mathematics 17(2), 416 to 429.', url: 'https://doi.org/10.1137/0117039' },
      { claim: 'ONS Census 2021 TS001 usual residents and 2021 built-up area populations; postcodes.io places.', url: 'https://www.nomisweb.co.uk/sources/census_2021' }
    ],
    rejectedClaims: [
      'That the centre of Worksop has more junctions per square kilometre than the edges: not measured directly; only search costs by west-to-east quarter are reported.',
      'Road traffic, journey times or congestion: not measured; costs are search steps on the map.',
      'That work stealing always beats a central queue: rejected; without a contact cost the queue finished first.',
      'Rank of Worksop among Bassetlaw towns: not claimed.',
      'Heritage or history of Worksop: not read from a source; not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
