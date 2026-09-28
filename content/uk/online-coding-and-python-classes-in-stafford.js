'use strict';
// Stafford (cg- town page, UK cluster Phase 8, towns band A, row 359). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how should an AI agent choose between
// trying something new and sticking with what works? Anchors (read raw 28 September 2026): Project Gutenberg 2422, Andrew
// Lang, "Introduction to the Compleat Angler": "Izaak himself was born at Stafford, on August 9, 1593, and was baptized on
// September 21." Project Gutenberg 683, Izaak Walton, "The Compleat Angler": Venator: "I have put on patience, and followed
// you these two hours, and not seen a fish stir, neither at your minnow nor your worm." Piscator: "Well, scholar, you must
// endure worse luck sometime, or you will never make a good angler."
// Our simulation (scratchpad sta/bandit.py; bite chances per cast INVENTED for the exercise and labelled so on the page:
// minnow 10%, worm 6%, fly 14%): 200 casts a day, 2,000 simulated days. Best possible 28 fish a day (fly every cast).
// Random 19.94; greedy (try each bait once, then the best average) 20.54, uses fly most on only 12.4% of days; on 72.7% of
// days the first cast with every bait catches nothing (expected 72.8%), all averages tie at zero and the program keeps the
// first bait on its list; explore 5% 21.44 (fly 26.1%); 10% 21.95 (35.2%); 30% 22.18 (53.9%); UCB1 21.02 (fly 71.3%).
// Lesson family: multi-armed bandit (explore vs exploit), tie-breaking trap, epsilon-greedy, UCB, regret, simulation with
// seeds. Screened: bandit, explore, epsilon, exploration 0 hits (Vlaardingen/Scheveningen fishing pages are herring trade
// and harbour topics).
// Place facts: Nomis Census 2021 TS007A, Stafford E07000197: total 136,869; 15 to 19 6,431 (4.7%; England 5.7%); 20 to 24
// 6,331 (4.6%; 6.0%); 55 to 59 10,139 (7.4%; 6.7%); 70 to 74 8,410 (6.1%; 5.0%); 75 to 79 6,665 (4.9%; 3.6%); 80 to 84
// 4,502 (3.3%; 2.5%). ONS 2021 BUAs: Stafford 71,690; Stone 17,280; Gnosall 4,040; Eccleshall 3,230; Yarnfield 2,145;
// Hixon 2,080; Great Haywood 2,030.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'STAFFORD', label: 'Stafford', blurb: 'Online coding and Python classes for Stafford, with an AI project that teaches an angling agent when to try a new bait, inspired by Stafford-born Izaak Walton.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-stafford',
  code: 'sfd',
  accent: '#414C13',
  accentRationale: 'Stafford: a river-weed olive for the angler\'s town (7.46:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Stafford',
    eyebrow: 'Stafford, Staffordshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Staffordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'Staffordshire', href: '/coding-classes-in-staffordshire' },
    { label: 'West Midlands', href: '/coding-and-ai-classes-in-west-midlands-region' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Stafford, England',
  title: 'Online Coding and Python Classes in Stafford | AI, Ages 6 to 67',
  description: 'Live online coding, Python, vibe coding and AI classes for Stafford, Stone, Gnosall and Eccleshall learners aged 6 to 67, one-to-one or in groups. First lesson free.',
  ogDescription: 'Live online coding and Python classes for Stafford, and an AI project where an angling agent learns when to try a new bait, after Izaak Walton.',
  twitterDescription: 'Stafford online coding, Python, vibe coding and AI classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Stafford',
    description: 'Online coding, Python, vibe coding, AI and mathematics for children, teenagers and adults in Stafford borough, taught live with thinking skills first.'
  },

  h1: 'Online coding and Python classes in Stafford',
  capsuleQ: 'Which are the best online coding and Python classes in Stafford?',
  capsule: 'Stafford borough counted 136,869 people at the 2021 census, and the ONS gives 71,690 for the Stafford built-up area and 17,280 for Stone, with Gnosall and Eccleshall smaller. The borough leans older than England: each band from 55 upward runs above the national share, and people aged 15 to 24 are clearly fewer. In Stafford itself or in Stone and Gnosall, anyone aged 6 to 67 can learn coding, Python, vibe coding, AI and maths through live video lessons with tutors in India, privately or as one of five to ten classmates at a similar stage. Our teaching begins with how to think, which keeps learners in control when AI writes code for them. No fee applies to the first lesson; continuing costs USD 100 per month for a group place or USD 150 per month for private study.',
  lead: 'Izaak Walton, according to Andrew Lang\'s introduction to his most famous book, "was born at Stafford, on August 9, 1593." The Compleat Angler is a long conversation between an expert, Piscator, and a beginner, Venator, who at one point complains that he has followed his master "these two hours, and not seen a fish stir, neither at your minnow nor your worm." Should the angler keep using the bait that has worked before, or try another? That exact question sits at the heart of AI agents that learn by trial and error, from recommendation systems to robots. Our Stafford project turns Walton\'s riverbank into a simulation, and shows how easily a simple agent gets stuck.',
  wa: 'Hello Modern Age Coders, we would like a free coding or Python lesson for a learner in Stafford.',

  picks: {
    eyebrow: 'Stafford course picks',
    h2: 'Thinking, vibe coding and Python courses',
    intro: 'Choose with the learner\'s age and passions in mind; we begin with a free live lesson, and booking asks for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: puzzles, probability games and careful planning.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps built by describing them to AI and testing them.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and AI projects for teenagers, including the angling agent.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How modern AI and AI agents work, built in Python from the ground up.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Stafford borough',
      h2: 'An older-leaning borough',
      intro: 'Six 2021 census age bands for Stafford borough, read from Nomis, beside the England share.',
      body: [
        { kind: 'table', caption: 'Stafford borough and England, six age bands (TS007A, 2021)', head: ['Age band', 'Stafford residents', 'Stafford share', 'England share'], rows: [
          ['15 to 19', '6,431', '4.7%', '5.7%'],
          ['20 to 24', '6,331', '4.6%', '6.0%'],
          ['55 to 59', '10,139', '7.4%', '6.7%'],
          ['70 to 74', '8,410', '6.1%', '5.0%'],
          ['75 to 79', '6,665', '4.9%', '3.6%'],
          ['80 to 84', '4,502', '3.3%', '2.5%']
        ] },
        { kind: 'p', text: 'The early twenties are 1.4 points below England and the late seventies 1.3 points above. Outside the main town the ONS counts Stone, Gnosall, Eccleshall, Yarnfield, Hixon and Great Haywood as built-up areas in the borough. Staffordshire schools use the national curriculum for England; if you tell us the holiday weeks, lessons will not land on them.' },
        { kind: 'callout', h3: 'County, region and our approach', p: 'See <a class="cg-inline-link" href="/coding-classes-in-staffordshire">Staffordshire</a> for the county and <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands region</a> for the region. Why thinking comes before AI tools is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Stafford project',
      h2: 'An angling agent that must learn which bait works',
      intro: 'Simulate a day by the river, try different strategies, and measure what each one catches.',
      body: [
        { kind: 'p', text: 'The learner gives a simulated angler three baits from Walton\'s book: minnow, worm and fly. Each has a hidden chance of a bite on every cast, which the agent does not know. For the exercise we invented the numbers: 10 percent for minnow, 6 percent for worm and 14 percent for fly, so the fly is secretly the winner. A day has 200 casts, and the program runs 2,000 different simulated days, each with its own random seed so the results can be repeated. A perfect angler who somehow knew the answer would expect 28 fish a day. The question is how close a learning agent can get. This is the classic multi-armed bandit problem, named after rows of slot machines.' },
        { kind: 'table', caption: 'Fish per day for each strategy over 2,000 simulated days, invented bite chances, our Python run, 28 September 2026', head: ['Strategy', 'Average fish a day', 'Days the fly was used most'], rows: [
          ['Pick a bait at random every cast', '19.94', 'About a third'],
          ['Try each bait once, then always use the top scorer so far', '20.54', '12.4%'],
          ['Same, but explore at random 5% of the time', '21.44', '26.1%'],
          ['Explore 10% of the time', '21.95', '35.2%'],
          ['Explore 30% of the time', '22.18', '53.9%'],
          ['Upper confidence bound (UCB1)', '21.02', '71.3%']
        ] },
        { kind: 'p', text: 'The obvious strategy, try each bait once and then stick with the top scorer, barely beats random casting and finds the fly on only 12.4 percent of days. The learner investigates and discovers why. On 72.7 percent of days, the very first cast with every bait catches nothing, so all three averages are zero. The program breaks the tie by taking the first bait in its list, the minnow, and because it never tries anything else, it never learns the fly is better. That is Venator\'s complaint turned into code: a couple of unlucky early tries decide everything. Piscator\'s advice, that you "must endure worse luck sometime", is really an argument for exploring.' },
        { kind: 'p', text: 'Adding a little randomness helps. Exploring 10 percent of the time lifts the catch to 21.95 fish a day, and 30 percent reaches 22.18. A cleverer method called UCB1 gives an untested bait the benefit of the doubt until it has been tried enough, and it settles on the fly on 71.3 percent of days, yet over only 200 casts it spends so long checking that it catches fewer fish than simple exploring. There is no free lunch: the right balance depends on how long the day is. The learner finishes by rerunning everything with different invented chances to see which conclusions still hold.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play a game with three hidden-chance spinners and decide when to switch.' },
          { h3: 'Ages 11 to 15', p: 'Simulate the three baits in Python with random numbers and count the catches.' },
          { h3: 'Ages 15 and up', p: 'Compare greedy, exploring and UCB1 agents, and find the tie-breaking bug.' }
        ] },
        { kind: 'callout', h3: 'Walton\'s words, invented chances', p: 'Quotations come from Project Gutenberg\'s editions of The Compleat Angler and Andrew Lang\'s introduction to it. The bite chances are made up for teaching, and the simulation and its results are our own work.' }
      ]
    },
    {
      id: 'agents', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'Explore or exploit: the question every AI agent faces',
      intro: 'Why the angling problem matters for vibe coding and for building AI agents.',
      body: [
        { kind: 'table', caption: 'Izaak Walton, from Project Gutenberg sources', head: ['Detail', 'From the source'], rows: [
          ['Born', 'At Stafford, 9 August 1593 (Andrew Lang)'],
          ['Baptised', '21 September 1593 (Andrew Lang)'],
          ['The two speakers', 'Piscator, the angler, and Venator, the learner'],
          ['Venator\'s complaint', '"not seen a fish stir, neither at your minnow nor your worm"'],
          ['Piscator\'s reply', '"you must endure worse luck sometime"']
        ] },
        { kind: 'p', text: 'Any AI agent that acts in the world must decide whether to use what already seems to work or to try something that might be better, whether it is choosing which video to recommend or which tool to call. Vibe coding such an agent is quick; noticing that it quietly breaks ties in favour of the first option takes someone who tests it. That testing habit starts early with our how-to-think programme; teenagers then vibe code projects they must also check, and older students and adults go on to write agents in Python, where Copilot Studio agent building happens one-to-one only. See <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and the <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">UK students\' AI agents course</a>.' },
        { kind: 'p', text: 'We have no connection with Project Gutenberg or the census office. The texts and statistics are theirs, the invented bite chances and the simulation are ours, and so is any mistake in them.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From spinner games to learning agents',
    intro: 'Start from the school year, then let the trial lesson adjust it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Logic, chance and careful planning through puzzles.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps made with AI help, always tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Python and AI', p: 'Simulation, probability and AI beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'AI agents', p: 'How agents decide and act, built in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and trial and error',
    h2: 'Would an AI-written agent notice the tie?',
    intro: 'Code that looks right can hide a decision nobody chose.',
    p1: 'Ask an assistant to write a "pick the highest-scoring bait" agent and common code, such as Python using max() on the scores, quietly picks the first option whenever scores are equal. Nothing crashes, and the agent simply never learns.',
    p2: 'A Stafford learner who has found that bug by simulation reads any AI-written agent looking for the choices it makes silently.',
    closer: 'A Stafford teenager who can spot the choice an AI agent makes without telling anyone has a skill that matters more each year, and that is why coding is still worth learning in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Stone to Eccleshall, taught live online',
    intro: 'Any home in the borough with a computer and broadband can join.',
    cells: [
      { h3: 'The learner decides', p: 'Students write, prompt and test their own code while the tutor watches the shared screen and asks questions.' },
      { h3: 'Start at the right step', p: 'From Year 4 to Year 13, what the free lesson reveals sets the first topic, and the exam board is noted.' },
      { h3: 'Free to try', p: 'One complete lesson at no charge, finishing with a recommendation.' },
      { h3: 'Groups by stage', p: 'Five to ten UK learners at a similar level.' },
      { h3: 'Twice a week', p: 'Paused for school holidays.' },
      { h3: 'Same hour all year', p: 'Tutors follow the UK clock changes for you.' }
    ],
    spec: { title: 'Why online groups work', p: 'Five Stafford learners at the same stage, free at the same time, seldom live near each other. Online, each finds a class that fits.' }
  },

  fees: {
    h2: 'Stafford fees',
    intro: 'Stafford pays the international rate we charge everywhere except India.',
    first: 'A full trial lesson free, then a course suggestion.',
    group: 'About eight live group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Fees are set in US dollars rather than sterling. We invoice only once the trial has agreed a course and a weekly slot; for holidays, missed lessons and format changes, see the pricing page.'
  },

  reviewsH2: 'Google reviews from Staffordshire and further afield',

  book: {
    h2: 'Book a free Stafford lesson',
    intro: 'Tell us roughly how old the learner is, or their school year, and what they do for fun. A first lesson could be a chance-and-logic puzzle, a Scratch game built with AI help, a first Python program, or a tiny angling simulation.',
    success: 'Thank you. Your Stafford request is with us.'
  },

  faq: {
    h2: 'Stafford questions',
    intro: 'The angling agent, vibe coding and practical details.',
    items: [
      { q: 'What is the population of Stafford?', a: 'The ONS gives 71,690 for the Stafford built-up area at the 2021 census; Stafford borough as a whole had 136,869.' },
      { q: 'Are online coding and Python classes open to Stafford families?', a: 'Yes; lessons are live over video, so the whole borough, from Hixon to Yarnfield, can join.' },
      { q: 'Is vibe coding part of what you teach?', a: 'We do, for every age group. The AI drafts, but the learner sets the goal, reads each line and runs the tests.' },
      { q: 'Do you teach how AI agents make decisions?', a: 'Yes. Agent-building starts once a learner has some Python, usually in the later teens, and our Copilot Studio agent courses run one-to-one.' },
      { q: 'What is the angling agent project?', a: 'Learners simulate an angler choosing between three baits with invented bite chances and compare strategies for exploring and exploiting.' },
      { q: 'Are lessons face to face?', a: 'No. All teaching is live online.' },
      { q: 'Do you support GCSE and A level students?', a: 'Yes, in computer science and maths, for understanding; grades are never promised.' },
      { q: 'What ages do you teach?', a: 'From 6 up to 67.' },
      { q: 'What does it cost?', a: 'Trial lesson: free. Afterwards: USD 100 monthly in a class, USD 150 monthly one-to-one.' },
      { q: 'Are there lessons in the school holidays?', a: 'No; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other pages in Staffordshire',
    html: 'In the same county, <a class="cg-inline-link" href="/best-coding-class-in-stoke-on-trent">Stoke-on-Trent</a> and <a class="cg-inline-link" href="/best-coding-class-in-lichfield">Lichfield</a> have their own pages, and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-nuneaton">Nuneaton</a> has another AI agent project. Our <a class="cg-inline-link" href="/coding-classes-in-staffordshire">Staffordshire</a> page covers the county and <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands region</a> the region, while the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> leads everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Stafford and Staffordshire',
  footerPlaces: [
    { href: '/coding-classes-in-staffordshire', label: 'Staffordshire' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-sfd .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-sfd .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-sfd .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-sfd .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sfd .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-sfd .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-sfd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sfd .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-sfd .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-sfd .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Stafford (E07000197). Nomis Census 2021 TS007A: total 136,869; 15 to 19 6,431 (4.7%, England 5.7%); 20 to 24 6,331 (4.6%, 6.0%); 55 to 59 10,139 (7.4%, 6.7%); 70 to 74 8,410 (6.1%, 5.0%); 75 to 79 6,665 (4.9%, 3.6%); 80 to 84 4,502 (3.3%, 2.5%). ONS 2021 BUAs: Stafford 71,690; Stone 17,280; Gnosall 4,040; Eccleshall 3,230; Yarnfield 2,145; Hixon 2,080; Great Haywood 2,030. Project Gutenberg 2422, Andrew Lang: "Izaak himself was born at Stafford, on August 9, 1593, and was baptized on September 21." Project Gutenberg 683, Walton: Venator "not seen a fish stir, neither at your minnow nor your worm"; Piscator "you must endure worse luck sometime, or you will never make a good angler".',
    localProject: 'Invented bite chances minnow 10%, worm 6%, fly 14%; 200 casts/day, 2,000 seeded days; best possible 28. Random 19.94; greedy try-once 20.54 (fly 12.4%); 72.7% of days all first casts fail (tie at zero, first-listed bait kept); explore 5% 21.44 (26.1%), 10% 21.95 (35.2%), 30% 22.18 (53.9%); UCB1 21.02 (71.3%). Lesson family: multi-armed bandit, explore vs exploit, tie-breaking trap, epsilon-greedy, UCB1.',
    requiredMentions: [
      '136,869',
      '71,690',
      'Gnosall',
      'Eccleshall',
      'Great Haywood',
      'Izaak Walton',
      'Andrew Lang',
      'Venator',
      'Piscator',
      'multi-armed bandit'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Stafford and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Andrew Lang, Introduction to the Compleat Angler (ebook 2422).', url: 'https://www.gutenberg.org/ebooks/2422' },
      { claim: 'Project Gutenberg, Izaak Walton, The Compleat Angler (ebook 683).', url: 'https://www.gutenberg.org/ebooks/683' }
    ],
    rejectedClaims: [
      'Real bite rates for any bait or river: none exist in the sources; the page uses clearly invented numbers.',
      'Walton memorials or buildings in Stafford today: not read from a source; not claimed.',
      'Which rivers near Stafford Walton fished: not established from the sources read.',
      'Stone is named only as an ONS built-up area; its population figure is given, nothing more.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
