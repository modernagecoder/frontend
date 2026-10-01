'use strict';
// Grays (cg- town page, UK cluster Phase 10, towns band B, row 538). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how many agents do you need if some of them
// might be lying? (Byzantine fault tolerance: seven elevation models as agents, mean vs median, 3f + 1).
// Data (read 30 September 2026): OpenTopoData public API, one request per dataset, 100 points each: eudem25m,
// srtm30m, srtm90m, aster30m, mapzen, etopo1, gebco2020. Grid: 10 x 10 points 250 m apart centred on 51.488 N,
// 0.330 E (our choice, over the town). Our run (scratchpad gys/an.py, gys/byz.py): spread between highest and lowest
// report per point mean 8.4 m, range 2.0 to 23.0 m; worst point 51.482386 N 0.33541 E: eudem25m 28.6, srtm30m 29,
// srtm90m 29, aster30m 40, mapzen 29, etopo1 17, gebco2020 22. srtm30m and mapzen identical at all 100 points.
// Mean absolute distance from the median of all seven: eudem25m 0.46 m, srtm90m 0.50, srtm30m 0.63, mapzen 0.63,
// gebco2020 2.00, aster30m 3.89, etopo1 4.92. Liars (trusted collector): one report of 1,000 m moves the mean by 139.8 m
// on average; worst-case shift of the median of seven over every choice of liars, both directions: 1 liar mean 1.07 m,
// max 5.00 m; 2 liars 2.66 m, max 8.86 m; 3 liars 6.32 m, max 14.86 m; 4 liars unbounded. Oral Messages OM(1)
// (Lamport, Shostak and Pease 1982), one traitor, ties fall back to one shared default, traitor lies by +50 m:
// 3 agents 1,000 of 3,000 runs correct (all 2,000 runs with a traitorous lieutenant failed); 4 agents 4,000 of 4,000;
// 5 agents 5,000 of 5,000; 7 agents 7,000 of 7,000.
// Lesson family: Byzantine fault tolerance (agents that lie; median vote; 3f + 1 without a trusted referee).
// Place facts: Thurrock (E06000034) TS001 176,001. ONS 2021 BUAs (published, all inside Thurrock): Grays 44,345;
// Stanford-le-Hope 29,525; Chafford Hundred and West Thurrock 23,585; South Ockendon 22,440; Tilbury 14,185.
// postcodes.io: Little Thurrock (suburban area, nearest postcode in the Grays BUA); Orsett (village).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'GRAYS', label: 'Grays', blurb: 'Vibe coding and AI agents classes for Grays in Thurrock, with a project in which seven agents report heights and some of them lie.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-grays',
  code: 'gys',
  accent: '#3E6438',
  accentRationale: 'Grays: a muted marsh green (6.81:1 contrast on white, 5.53:1 on the darkest paper tint), picked by hand under the muted-accent rule, at least 40 RGB steps from East of England pages and neighbouring rows',
  pageType: 'city',
  place: {
    name: 'Grays',
    eyebrow: 'Grays, Thurrock, Essex',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Essex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Essex', href: '/coding-classes-in-essex' },
    { label: 'Basildon', href: '/best-coding-and-ai-classes-in-basildon' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Grays, Essex',
  title: 'Vibe Coding and AI Agents Classes in Grays, Essex | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents, Python and coding classes for Grays, Little Thurrock, Chadwell St Mary and Orsett, for ages 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Grays, Thurrock, with a project on Byzantine fault tolerance: seven elevation models as agents, and what happens when some lie.',
  twitterDescription: 'Grays, Essex: vibe coding, AI agents, Python and coding taught live on video for ages 6 to 67, beginning with a free lesson.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Grays, Essex',
    description: 'Vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Grays and across Thurrock, taught live online by tutors who make learners test what an agent tells them.'
  },

  h1: 'Vibe coding and AI agents classes in Grays',
  capsuleQ: 'Where are the best vibe coding and AI agents classes for Grays learners?',
  capsule: 'The ONS recorded 44,345 people in the Grays built-up area in 2021, within a Thurrock borough of 176,001. Little Thurrock is listed as a suburban area of the town in postcode data, with Chadwell St Mary and Orsett as villages close by. Anyone in Grays from six to 67 can study with Modern Age Coders, whether the goal is vibe coding, agents, Python, general programming or maths. Every lesson is live on video with a tutor in India, taken privately or in a group of five to ten learners who share a level. Our learners design agents that expect things to go wrong, and they learn to decide in advance which answers to trust. The Grays project gives seven agents the same question, the height of the ground at 100 points across town, and then turns some of them into liars. The opening lesson costs nothing and ends with the course we recommend. Continuing costs USD 100 per month for a shared class or USD 150 per month for solo teaching.',
  lead: 'When several AI agents work on the same job, somebody has to combine what they report. If every agent is honest and roughly right, averaging their answers works well. But agents fail in stranger ways than crashing. One may be fed poisoned data, another may hallucinate with total confidence, and a third may simply repeat what a fourth said. Computer scientists call an agent that can send any wrong or contradictory message Byzantine, after a 1982 puzzle about generals who cannot trust each other\'s messengers. Grays makes a good test ground, because seven public elevation models will each tell you how high the town stands, and they do not quite agree.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents lesson for a learner in Grays.',

  picks: {
    eyebrow: 'Course routes',
    h2: 'Grays courses in vibe coding, clear thinking and agents',
    intro: 'Pick by age. Each route opens with a live lesson that is free and asks for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: a class votes on a secret number while two pupils are told to fib, and works out how to catch them.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children steer an AI to build Scratch games with several sprites that must share information fairly.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects built with AI help, including the Grays liar experiment as a simulation.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Large language models, retrieval and agents, with checks for agents that give confident wrong answers.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The borough',
      h2: 'Grays and the other built-up areas of Thurrock',
      intro: 'Five of the borough\'s built-up areas, with the populations the ONS published for 2021.',
      body: [
        { kind: 'table', caption: 'Five built-up areas that lie inside Thurrock, with ONS census 2021 populations', head: ['Built-up area', 'Residents (2021 census)'], rows: [
          ['Grays', '44,345'],
          ['Stanford-le-Hope', '29,525'],
          ['Chafford Hundred and West Thurrock', '23,585'],
          ['South Ockendon', '22,440'],
          ['Tilbury', '14,185']
        ] },
        { kind: 'p', text: 'Each row is the ONS\'s own rounded figure for one built-up area, and the rows are not meant to be added; the borough total of 176,001 is a separate count. Postcode data names Little Thurrock as a suburban area whose nearest postcode lies in the Grays built-up area, while Chadwell St Mary forms a built-up area of its own and Orsett is listed as a village. Thurrock schools follow the national curriculum for England, and we leave out any holiday weeks you tell us about.' },
        { kind: 'callout', h3: 'Essex, the East of England and how we teach', p: 'For the wider county see <a class="cg-inline-link" href="/coding-classes-in-essex">coding classes in Essex</a>, and for the region see <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a>. The thinking behind our lessons is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>, and the teenage route on <a class="cg-inline-link" href="/vibe-coding-for-teens">vibe coding for teens</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Grays project',
      h2: 'Seven agents, 100 points, and a few liars',
      intro: 'Ask seven independent sources the same question, see how honest sources disagree, then find out how many dishonest ones the group can survive.',
      body: [
        { kind: 'p', text: 'The learner lays a grid of 10 by 10 points, 250 m apart, over Grays and asks seven public elevation models, served by OpenTopoData, for the height of the ground at every point. Each model plays the part of an agent. Even with nobody lying, the answers differ: the gap between the highest and lowest report at a point averages 8.4 m and ranges from 2.0 m to 23.0 m. At the worst point, the seven agents said 17, 22, 28.6, 29, 29, 29 and 40 m. Two of the agents, the 30 m SRTM model and the Mapzen tiles, gave identical heights at all 100 points, which is what you would see if both drew on the same source here. Seven voices, then, but only six independent ones.' },
        { kind: 'table', caption: 'Average distance of each agent from the median of all seven, over 100 points in Grays (our Python run)', head: ['Agent (elevation model)', 'Average distance from the median'], rows: [
          ['EU-DEM, 25 m', '0.46 m'],
          ['SRTM, 90 m', '0.50 m'],
          ['SRTM, 30 m', '0.63 m'],
          ['Mapzen', '0.63 m'],
          ['GEBCO 2020', '2.00 m'],
          ['ASTER, 30 m', '3.89 m'],
          ['ETOPO1', '4.92 m']
        ] },
        { kind: 'p', text: 'Then some agents turn Byzantine and report whatever does the most damage. If a trusted collector combines the reports, the choice of rule decides everything. One agent claiming 1,000 m drags the mean of seven up by 139.8 m on average. The median barely notices: across every choice of which agent lies, and in either direction, one liar shifted it by 1.07 m on average and 5.00 m at most, two liars by 2.66 m and at most 8.86 m, and three liars by 6.32 m and at most 14.86 m. A fourth liar gives the liars a majority, and then the median goes wherever they send it.' },
        { kind: 'p', text: 'Without a trusted collector, the agents must agree among themselves, relaying what they were told. We coded the Oral Messages algorithm from the 1982 paper by Lamport, Shostak and Pease, with one traitor who changes a height by 50 m. With three agents, the loyal pair ended up wrong or split in 2,000 of 3,000 runs, every run in which the traitor was one of the relaying agents. With four agents, every one of 4,000 runs ended with the loyal agents in agreement, and on the commander\'s value whenever the commander was loyal. That is the rule the paper proves: tolerating f traitors without a referee takes at least 3f + 1 agents.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Five pupils report a measurement, two secretly fib, and the class compares averaging with picking the middle value.' },
          { h3: 'Ages 11 to 15', p: 'Fetch the seven sets of heights in Python, find the median at each point, then add a liar and measure the damage.' },
          { h3: 'Ages 15 and up', p: 'Code Oral Messages for three and four agents, run thousands of trials, and explain why three is not enough.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Heights come from the EU-DEM (produced using Copernicus data and information funded by the European Union), SRTM, ASTER GDEM, Mapzen terrain tiles, ETOPO1 and GEBCO 2020 datasets, all read through the public OpenTopoData API. The coarse global models were never meant for street-level work, so their larger gaps are expected. None of the models is ground truth, so we measure disagreement, not error. The grid, the liars, the 50 m lie and the tie rule are our choices, and other choices give other numbers.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents you can trust',
      h2: 'Why this matters for AI agents and vibe coding',
      intro: 'A multi-agent system is only as reliable as the rule that combines what the agents say.',
      body: [
        { kind: 'table', caption: 'From Grays heights to multi-agent AI', head: ['In the Grays run', 'In AI agent design'], rows: [
          ['Honest agents still differed by up to 23.0 m', 'Expect disagreement even when nothing is wrong'],
          ['Two agents echoed each other exactly', 'Count independent sources, not agents'],
          ['One liar moved the mean by 139.8 m', 'Averaging is fragile against one bad agent'],
          ['The median held until liars were a majority', 'Robust voting buys safety up to a limit'],
          ['Three agents failed, four agreed', 'With no referee, f liars need 3f + 1 agents']
        ] },
        { kind: 'p', text: 'Modern AI setups often run several agents or several samples from one model and then vote, a trick sometimes called self-consistency. Grays shows when that works and when it does not. Votes help against occasional wrong answers, but agents built on the same model or fed the same retrieved document can fail together, and one agent that has been manipulated can wreck a naive average. A vibe coder asking an assistant for an agent pipeline should ask one extra question: what happens if one of these agents lies? Our learners move on to building agents once they write Python with confidence, typically in sixth form or later, and Copilot Studio agents are a one-to-one course only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We used open data from the Copernicus programme, the providers behind the other elevation models, OpenTopoData, the Office for National Statistics and postcodes.io. None of them endorses this page, and the simulations are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Pathway',
    h2: 'From fibbing games to fault-tolerant agents',
    intro: 'We place learners by age or school year first, then adjust after the free lesson.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Clues, evidence and spotting the witness who does not fit.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games made with an AI partner, then tested by breaking them.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, simulation and AI', p: 'Voting rules, simulations and models, beside GCSE and A level work.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Agents built to be doubted', p: 'Sound Python, then language models, retrieval and agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and trust',
    h2: 'What is Byzantine fault tolerance?',
    intro: 'Byzantine fault tolerance is the ability of a group of computers or AI agents to reach a correct shared decision even when some members send wrong or contradictory messages, and without a trusted referee it needs at least 3f + 1 members to survive f such faults.',
    p1: 'In the Grays run, seven elevation models acted as agents: one liar moved their mean by 139.8 m, while the median of the seven moved at most 5.00 m and stayed bounded until liars made up a majority.',
    p2: 'When the agents had to agree among themselves, three agents with one traitor went wrong in 2,000 of 3,000 runs, and four agents got it right in all 4,000.',
    closer: 'A Grays teenager who has written that simulation will design agent systems that assume some agents fail, which is exactly what the field needs. You gain that from building and breaking the code yourself, which is why learning to code still pays in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lessons',
    h2: 'Little Thurrock, Chadwell St Mary and Orsett on a live call',
    intro: 'A laptop or desktop with a webcam and a home internet connection is all the kit.',
    cells: [
      { h3: 'Code, not slides', p: 'Learners type on a shared screen while the tutor keeps asking what the code will do next.' },
      { h3: 'A trial to find the level', p: 'The free lesson shows us where to start, and we write down any exam board.' },
      { h3: 'Nothing to pay at first', p: 'Lesson one is free, no card is taken, and a course suggestion follows.' },
      { h3: 'Matched classmates', p: 'Groups of five to ten learners at one level, drawn from across the UK.' },
      { h3: 'Two lessons weekly', p: 'Holiday weeks you give us are kept free.' },
      { h3: 'Clock changes handled', p: 'Our tutors move with British Summer Time so your lesson time does not.' }
    ],
    spec: { title: 'Why online', p: 'A class where everyone shares a level needs learners from far and wide. A single borough cannot provide them, but the whole UK can.' }
  },

  fees: {
    h2: 'Fees for Grays',
    intro: 'Grays pays our international rates, the same for every country except India.',
    first: 'A full free lesson, ending with the course we would suggest.',
    group: 'Roughly eight live group lessons each month.',
    private: 'Roughly eight live one-to-one lessons each month.',
    closer: 'We bill in US dollars and quote no sterling amount. Billing starts only after the trial has fixed a course and a regular slot; the pricing page explains breaks, missed sessions and switching between group and private.'
  },

  reviewsH2: 'Google reviews from Essex families and learners around the UK',

  book: {
    h2: 'Book a free lesson for Grays',
    intro: 'Tell us an age or school year and one thing the learner enjoys. The trial could be a liar-spotting game, a Scratch project built with AI, first steps in Python, or a small agent that checks its own answers.',
    success: 'Thank you. We have your Grays request and will reply soon.'
  },

  faq: {
    h2: 'Grays questions',
    intro: 'Agents, the liar project, vibe coding and the practical details.',
    items: [
      { q: 'How many people live in Grays?', a: 'The ONS counted 44,345 residents in the Grays built-up area at the 2021 census, within the borough of Thurrock at 176,001.' },
      { q: 'Are there online vibe coding classes for Grays?', a: 'Yes. Lessons are live on video for ages 6 to 67, so Grays, Little Thurrock, Chadwell St Mary and Orsett are all within reach.' },
      { q: 'What is a multi-agent AI system?', a: 'A setup in which several AI agents, each with its own task or view, work on one problem and pass results to each other or to a coordinator.' },
      { q: 'Why is the median safer than the mean?', a: 'One extreme report can drag a mean anywhere, but it can shift a median only as far as the next honest value, so the median holds until liars are a majority.' },
      { q: 'What happens in the Grays project?', a: 'Learners collect heights for 100 points from seven elevation models in Python, measure how honest sources disagree, then add liars and code the Oral Messages algorithm.' },
      { q: 'What is vibe coding?', a: 'Vibe coding means telling an AI in plain words what program you want, letting it write the code, and then checking and fixing that code yourself. We teach it at every age, with the checking built in.' },
      { q: 'When can learners build AI agents?', a: 'Once they can write Python unaided, usually from sixth form or as adults. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Can you help with GCSE or A level?', a: 'Yes, in computer science and maths, with understanding as the goal. No grade outcome is promised.' },
      { q: 'What are the fees?', a: 'Nothing for lesson one. Then it is USD 100 monthly for a class seat, or USD 150 monthly to learn with a tutor alone.' },
      { q: 'Do lessons stop for holidays?', a: 'They can. Give us the dates and those weeks stay empty.' }
    ]
  },

  next: {
    eyebrow: 'Beyond Grays',
    h2: 'More pages for Essex and the East of England',
    html: 'Other projects are on the <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-basildon">Basildon</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-brentwood">Brentwood</a> and <a class="cg-inline-link" href="/best-coding-class-in-southend-on-sea">Southend-on-Sea</a> pages, and the county page is <a class="cg-inline-link" href="/coding-classes-in-essex">Essex</a>. Everything else is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Grays and Essex',
  footerPlaces: [
    { href: '/coding-classes-in-essex', label: 'Essex' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-gys .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.5vw, 3rem); }
.cg-root.cg-gys .cg-hero h1 { font-weight: 760; letter-spacing: -0.03em; line-height: 1.04; }
.cg-root.cg-gys .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-gys .cg-eyebrow { letter-spacing: 0.15em; font-weight: 600; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-gys .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-gys .cg-table caption { text-align: left; font-size: 0.86rem; font-weight: 600; font-style: italic; }
.cg-root.cg-gys .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gys .cg-table th { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; }
.cg-root.cg-gys .cg-ladder-col { border-top: 4px double var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-gys .cg-callout { border-left-width: 4px; border-radius: 16px; }
`,

  dossier: {
    curriculumAuthority: 'Thurrock (E06000034), Census 2021 TS001 usual residents 176,001. ONS 2021 BUAs inside Thurrock (published): Grays 44,345; Stanford-le-Hope 29,525; Chafford Hundred and West Thurrock 23,585; South Ockendon 22,440; Tilbury 14,185. postcodes.io: Little Thurrock (suburban area; nearest postcode RM17 5TF in the Grays BUA); Chadwell St Mary (village; its own BUA); Orsett (village; its own BUA).',
    localProject: 'OpenTopoData public API, one request per dataset: eudem25m, srtm30m, srtm90m, aster30m, mapzen, etopo1, gebco2020; 10 x 10 grid, 250 m apart, centred 51.488 N 0.330 E. Spread (max - min report) per point mean 8.4 m, range 2.0 to 23.0 m; worst point 51.482386 N 0.33541 E (eudem25m 28.6, srtm30m 29, srtm90m 29, aster30m 40, mapzen 29, etopo1 17, gebco2020 22). srtm30m and mapzen identical at 100 of 100 points. Mean absolute distance from the median of seven: eudem25m 0.46, srtm90m 0.50, srtm30m 0.63, mapzen 0.63, gebco2020 2.00, aster30m 3.89, etopo1 4.92 m. One liar at 1,000 m moves the mean by 139.8 m on average. Median worst-case shift over all liar sets and both directions: 1 liar mean 1.07 max 5.00 m; 2 liars 2.66, max 8.86; 3 liars 6.32, max 14.86; 4 liars unbounded. OM(1) (Lamport, Shostak, Pease 1982), one traitor lying by +50 m, ties fall back to a shared default, 10 runs per point and traitor position: 3 agents 1,000 of 3,000 correct (all 2,000 with a traitorous lieutenant failed); 4 agents 4,000 of 4,000; 5 agents 5,000 of 5,000; 7 agents 7,000 of 7,000. Lesson family: Byzantine fault tolerance (median vote vs mean, correlated agents, 3f + 1).',
    requiredMentions: [
      '176,001',
      '44,345',
      '29,525',
      '23,585',
      'Little Thurrock',
      'Byzantine',
      '3f + 1',
      '139.8',
      '14.86',
      'Oral Messages',
      '4.92'
    ],
    sources: [
      { claim: 'OpenTopoData public API and dataset notes for EU-DEM, SRTM, ASTER, Mapzen, ETOPO1 and GEBCO.', url: 'https://www.opentopodata.org/' },
      { claim: 'Lamport L., Shostak R. and Pease M. (1982), The Byzantine Generals Problem, ACM Transactions on Programming Languages and Systems 4(3), 382 to 401.', url: 'https://doi.org/10.1145/357172.357176' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: Little Thurrock, Chadwell St Mary and Orsett, with the built-up area of the nearest postcode.', url: 'https://api.postcodes.io/places?q=Little%20Thurrock' }
    ],
    rejectedClaims: [
      'Which elevation model is closest to the true ground height in Grays: not claimed; there is no ground truth in the run.',
      'That Mapzen copies SRTM in Grays: not claimed as fact; only that the two agree at all 100 points.',
      'Chalk quarry, river or port history of Grays: not read from a source; not claimed.',
      'Rank of Grays among Thurrock towns: not claimed.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
