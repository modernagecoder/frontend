'use strict';
// Melbourne (cg- city page, Australia cluster Phase 1 preview; AI-shaped city slug).
// Spine: test an agent's tool against a golden set before trusting a "harmless" change. One OpenStreetMap
// Overpass query (snapshot 2026-10-07T08:07Z) for a rectangle we chose over central and inner Melbourne
// (37.70 to 37.95 degrees south, 144.85 to 145.15 degrees east): 1,603 nodes tagged railway=tram_stop carrying
// 916 distinct names. Measured by us on 7 October 2026 (scratchpad au/mel_golden.py): 300 test questions, each a
// point placed at random within 400 m of a randomly chosen stop (seed 2026); the golden answer is the nearest
// stop by the haversine formula (median 157 m, at most 396 m away). Tool version 1 compares raw degrees of
// latitude and longitude as if they were the same length: it names a different stop in 21 of 300 answers and
// picks a different stop node in 39 (the extra walk is a median 1.7 m among the wrong ones, at most 79.1 m).
// Version 2 scales longitude by the cosine of the latitude: 0 of 300 wrong. A refactor that swaps latitude and
// longitude: 300 of 300 wrong. A random golden subset catches version 1 in 52.5% of 10,000 draws at 10
// questions, 77.4% at 20, 89.9% at 30, 98.1% at 50 and 99.97% at 100. Lesson family: golden-set (regression)
// testing for an AI agent's tool and the detection power of a small test set; screened free site-wide on
// 7 October 2026 ("golden set": 0 hits in content/, claims and spent families).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Greater Melbourne (GCCSA 2GMEL):
// 4,917,750 people, median age 37 (Australia 38), 1,299,184 families, 2,057,482 private dwellings; flat or
// apartment 277,512 (15.6 percent; Australia 14.2 percent); Professionals 656,333 (26.8 percent; Australia
// 24.0 percent); aged 20 to 24 328,543 (6.7 percent; Australia 6.2) and 25 to 29 383,135 (7.8 percent; 7.0).
// VCAA: VCE Algorithmics (HESS), Units 3 and 4, accreditation period from 2023; Unit 3 Algorithmic
// problem-solving; areas of study Data modelling with abstract data types, Algorithm design and Applied
// algorithms; a School-assessed Task; the planning page lists the Master Theorem among ways to analyse time
// complexity. VCAA: VCE Applied Computing, accreditation period from 2025, Units 1 to 4, with 2026 school-based
// assessment information for Data Analytics and Software Development. Victorian Government term dates 2026
// and 2027. Bureau of Meteorology Capital City Observations IDV60901 names station 95936 Melbourne (Olympic
// Park). Time offsets from the IANA time zone database (Australia/Melbourne, Asia/Kolkata).

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'MELBOURNE', label: 'Melbourne', blurb: 'Vibe coding and AI agents for Melbourne teens and adults, VCE Algorithmics, and a project that tests an agent tool on 300 tram-stop questions.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-melbourne',
  code: 'mel',
  accent: '#941830',
  accentRationale: 'Melbourne: a deep laneway red (HSV saturation 0.84, value 0.58, hue 348), at least 15 RGB units from every accent in content/ and clear of the Sydney blue and NSW green, 4.8:1 or better on every paper tint',
  pageType: 'city',
  place: {
    name: 'Melbourne',
    eyebrow: 'Melbourne, Victoria, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Melbourne, Victoria',
  title: 'Vibe Coding and AI Agents Classes in Melbourne | Live Online',
  description: 'Live online vibe coding, AI agents, Python and maths classes for Melbourne teens and adults, plus VCE Algorithmics technique, taught by a teacher. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Melbourne, with a project that tests an agent tool against 300 tram-stop questions before trusting a change.',
  twitterDescription: 'Melbourne vibe coding and AI agents classes, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Melbourne Learners',
    description: 'Level-matched online vibe coding, AI agents, Python, data and mathematics for teenagers and adults across Greater Melbourne, with technique for VCE Algorithmics and Applied Computing.'
  },

  h1: 'Vibe coding and AI agents classes in Melbourne',
  capsuleQ: 'What are the best vibe coding and AI agents classes in Melbourne?',
  capsule: 'Ones where the learner directs the AI and can still prove its work is right. Vibe coding means building software by describing it to an AI assistant; an AI agent is a program that uses tools to act on a goal. Greater Melbourne counted 4,917,750 people in 2021. We teach both live online to teens and adults, privately or in a small group at the same standard, alongside Python, maths and VCE technique, and the trial lesson is free.',
  lead: 'Here is a small AI agent a Melbourne learner can build in an afternoon: ask it where the nearest tram stop is, and it calls a tool that searches the 1,603 tram stop points OpenStreetMap records across inner Melbourne. The tool works. Then someone tidies the code and swaps the careful distance formula for a quicker one that treats a degree of longitude as if it were as long as a degree of latitude. In Melbourne it is not. Is the agent still right? Nobody can tell by reading the answers, because they all sound fine. So our learners write 300 test questions with known correct answers, a golden set, and run every version of the tool against it before anything ships. The quicker formula gets 21 of the 300 wrong.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Melbourne.',

  picks: {
    eyebrow: 'Course picks for Melbourne',
    h2: 'Four ways into vibe coding and AI agents',
    intro: 'Chosen by what the learner wants to build. Every course starts with a free lesson and no card details.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python and first AI experiments, with a teacher checking that the child understands every line the computer runs.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Building real apps by describing them to AI tools, then testing what comes back until the learner can defend every part.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 14 to 18', note: 'How models learn, how they fail and how to measure both, the grounding a student needs before trusting an agent.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'University and adult', note: 'Full-stack projects built with AI assistants, plus the algorithms and tests that keep generated code honest.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Greater Melbourne in the Census',
      h2: 'A city of nearly five million, heavy on twenty-somethings',
      intro: 'Selected QuickStats rows for the Greater Melbourne capital city area, each beside the figure for Australia.',
      body: [
        { kind: 'table', caption: 'Greater Melbourne, 2021: ABS QuickStats', head: ['Measure', 'Greater Melbourne', 'Australia'], rows: [
          ['People', '4,917,750', 'Not compared'],
          ['Median age', '37', '38'],
          ['Families', '1,299,184', 'Not compared'],
          ['Private dwellings', '2,057,482', 'Not compared'],
          ['Residents aged 25 to 29', '383,135, or 7.8%', '7.0%'],
          ['Employed people working as professionals', '656,333, or 26.8%', '24.0%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Young adults', p: 'In 2021, 6.7% of Greater Melbourne residents were aged 20 to 24, 328,543 people, against 6.2% across Australia.' },
          { h3: 'Professional work', p: 'Professionals were 26.8% of employed Melbourne residents aged 15 and over, against 24.0% nationally: the group most likely to be handed AI agents at work.' },
          { h3: 'Mostly houses', p: 'Flats and apartments were 15.6% of occupied homes in Greater Melbourne, 277,512 of them, close to the national 14.2%.' }
        ] },
        { kind: 'p', text: 'All figures are the Australian Bureau of Statistics\' published totals and shares. Census tables are adjusted separately to protect privacy, so the parts are never added up here to produce a figure of our own. Live data for the city is published too: the Bureau of Meteorology\'s half-hourly capital city observations for Melbourne come from the station it names Melbourne (Olympic Park), a feed our older learners use when they first point an agent at data that changes while they watch.' }
      ]
    },
    {
      id: 'agents', tint: 'tint', eyebrow: 'Vibe coding and AI agents',
      h2: 'What Melbourne learners actually build',
      intro: 'Two phrases everyone is searching for, and what they mean in a real lesson.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Vibe coding', p: 'Describing what you want to an AI assistant in plain English and letting it write the code. It is fast and genuinely useful. In our lessons the learner then reads, runs and tests every piece until they can explain it without the assistant.' },
          { h3: 'AI agents', p: 'Programs that take a goal, decide which tool to call, read the result and keep going. Our learners build small ones that answer questions from real data, such as Melbourne\'s tram stops, and then measure how often they are right.' },
          { h3: 'The habit underneath', p: 'Every agent or vibe-coded app gets a golden set: questions with known answers that it must pass before and after any change. It is the cheapest insurance in software, and it is the centre of our Melbourne project.' }
        ] },
        { kind: 'spec', title: 'Who this suits', p: 'Teenagers who already build things with AI tools and want to understand them, university students whose courses now expect it, and adults across Melbourne\'s professional workforce who want agents at work without handing over their judgement.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Does the tram-stop agent still give the right answers after a tidy-up?',
      intro: 'An agent tool that finds the nearest tram stop, three versions of its distance code, and 300 test questions with answers we already know.',
      body: [
        { kind: 'table', caption: 'Three versions of the nearest-stop tool against the golden set (our calculation, 7 October 2026)', head: ['Tool version', 'Answers naming the wrong stop', 'Worst extra walk'], rows: [
          ['Careful: longitude scaled by the cosine of the latitude', '0 of 300', 'None'],
          ['Quick: raw degrees, as if latitude and longitude were equal', '21 of 300', '79.1 metres'],
          ['Refactor bug: latitude and longitude swapped', '300 of 300', 'Kilometres']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Build the golden set', p: 'Pick 300 points, each within 400 metres of a real tram stop, and work out the true nearest stop for each with the haversine formula. The answers are typically 157 metres away and never more than 396.' },
          { h3: '2. Run every version', p: 'The careful tool matches all 300. The quick one names a different stop 21 times, a 7% failure rate that no single test would reveal. The swapped version fails everything, which any test catches.' },
          { h3: '3. Ask how many tests are enough', p: 'A random handful of 10 golden questions catches the quick version only about half the time. Thirty catch it 89.9% of the time, and fifty 98.1%.' }
        ] },
        { kind: 'callout', h3: 'Why the quick version fails in Melbourne', p: 'Melbourne sits about 37.8 degrees south, where a degree of longitude covers only about 79% of the ground a degree of latitude does. Treat them as equal and the tool quietly favours stops to the east or west. Among the answers that chose a farther stop point, half added less than two metres to the walk, which is exactly why nobody notices them; the worst added 79.1. A golden set notices.' },
        { kind: 'p', text: 'The stop list is an OpenStreetMap snapshot taken on 7 October 2026 for a rectangle we chose over central and inner Melbourne. OpenStreetMap records each side of the road as a separate stop point, so the 1,603 points carry 916 distinct names; some answers counted as different points still share a name. The golden answers are straight-line distances, not walking routes, and nothing here describes the tram network\'s service or timetables.' }
      ]
    },
    {
      id: 'vce', tint: 'tint', eyebrow: 'The Victorian school side',
      h2: 'VCE Algorithmics and Applied Computing, as VCAA describes them',
      intro: 'From the Victorian Curriculum and Assessment Authority\'s study design pages. We teach the technique these studies draw on; assessed work is always the student\'s own.',
      body: [
        { kind: 'table', caption: 'Two VCE studies for students who like code, from VCAA', head: ['Study', 'Accreditation', 'What VCAA lists'], rows: [
          ['VCE Algorithmics (HESS)', 'Units 3 and 4, from 2023', 'Unit 3 Algorithmic problem-solving; areas of study on data modelling with abstract data types, algorithm design and applied algorithms; a School-assessed Task'],
          ['VCE Applied Computing', 'Units 1 to 4, from 2025', '2026 school-based assessment information for Data Analytics and for Software Development']
        ] },
        { kind: 'p', text: 'VCAA\'s planning advice for Algorithmics lists several ways to analyse an algorithm\'s running time, from step counting to the Master Theorem and measuring how long implemented code actually takes. The golden-set project above is the measuring kind of thinking that advice describes, applied to whether an answer is right rather than how fast it arrives.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Algorithmics', p: 'Graphs, search and algorithm design written in real code, with complexity worked out by hand and then checked by experiment.' },
          { h3: 'Applied Computing', p: 'Data analysis and software development projects, with the documentation and testing habits a School-assessed Task rewards.' },
          { h3: 'Integrity first', p: 'School-assessed Tasks belong to the student under VCAA rules. We teach methods and give feedback on practice work, never on the assessed task itself.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From asking an AI for a game to testing an agent before it ships',
    intro: 'The bands are a guide. The free lesson sets the starting level.',
    cols: [
      { band: 'Ages 9 to 12', h3: 'First prompts, first code', p: 'Making small programs with and without AI help, and noticing when the computer did something nobody asked for.', courses: ['python-ai-kids-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 13 to 15', h3: 'Vibe coding with checks', p: 'Apps built by describing them to an AI tool, then read line by line and tested on cases chosen to break them.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 16 to 18', h3: 'Agents and evidence', p: 'Agents that call tools on real data, golden sets, failure rates and the algorithm thinking VCE Algorithmics expects.', courses: ['ai-ml-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Agents at work', p: 'Building and evaluating agents for real tasks, and knowing which decisions should never leave a person\'s hands.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI can write the code, why should a Melbourne teenager learn to test it?',
    intro: 'Because the quick version of our tram-stop tool sounded right in all 300 answers and was wrong in 21 of them.',
    p1: 'An agent that answers in a confident sentence gives no sign when it is wrong. The quick tool never crashed, never raised an error and never produced an absurd result; it simply chose a slightly farther stop about one time in fourteen. A person reading a few answers would approve it. Only a set of questions with known answers, run before and after the change, exposes the drift, and only someone who understands the distance formula can say why it happened and fix it.',
    p2: 'That is the job vibe coding creates rather than removes. When an assistant writes more of the code, the human\'s work shifts to deciding what correct means, writing the tests that prove it and reading failures with understanding. A Melbourne learner who has watched 10 golden questions miss a 7% failure rate half the time will never again trust an agent on the strength of a short demo.',
    closer: 'So the reason to learn to code in 2026 is not to compete with AI at typing. It is to be the person who can tell a working agent from a plausible one, and that takes knowing how the code underneath behaves.',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Footscray, Box Hill or St Kilda, the same lesson at the same minute',
    intro: 'From the inner north to the Mornington Peninsula, the commute to class is the walk to a laptop.',
    cells: [
      { h3: 'No trip across town', p: 'A teenager in the inner north and an adult in the outer east can share one lesson from their own desks.' },
      { h3: 'Victorian vocabulary', p: 'Teachers say Foundation, Year 9 or Unit 3 the way a Victorian school does, and plan around the four Victorian terms. Teaching is in English.' },
      { h3: 'Try it properly', p: 'The trial is a full working lesson. The teacher then proposes a level, a course and a regular hour, and no payment details are requested.' },
      { h3: 'Classmates at your standard', p: 'A group is fifteen to twenty people at a similar point, gathered from Victoria, other states and other countries, so a reasonable hour exists for nearly every level.' },
      { h3: 'A steady rhythm', p: 'Normally two sessions a week, roughly eight a month, with breaks for Victorian holidays and the VCE exam period arranged ahead of time.' },
      { h3: 'Teachers on India time', p: 'Melbourne moves its clocks on the same Sundays as Sydney, 4 October 2026 and 4 April 2027, so our teachers are five and a half hours behind Melbourne in summer and four and a half in winter.' }
    ],
    spec: { title: 'The Victorian school year', p: 'The Victorian Government lists Term 4 of 2026 as Monday 5 October to Friday 18 December, and Term 1 of 2027 opening on Wednesday 27 January, with students in government schools starting on 28 January. It calls the first year of primary school Foundation or Prep: a child starting Foundation (Prep) in 2027 needs to turn 5 by 30 April 2027. Course plans follow those dates.' }
  },

  fees: {
    h2: 'What classes cost in Melbourne',
    intro: 'Three figures, and nothing hidden behind them.',
    first: 'A full lesson at no cost, ending with a recommended level, course and weekly time.',
    group: 'A month of teaching, usually eight lessons, with fifteen to twenty learners at the same level.',
    private: 'The same monthly rhythm of around eight lessons, one teacher and one learner.',
    closer: 'One price in US dollars applies to every learner outside India, so Brunswick and Frankston receive the same invoice and there is no Melbourne price sheet. You pay only once the trial has settled what to study and when; breaks, missed sessions and moves between group and private teaching are set out on the pricing page.'
  },

  reviewsH2: 'What families say on Google, word for word',

  book: {
    h2: 'Tell us what the learner wants to build',
    intro: 'The first task fits the learner: a first AI-assisted program for a younger teen, a vibe-coded app with tests for a confident one, or the tram-stop golden set for anyone who wants to see an agent fail.',
    success: 'Thank you. The team will be in touch shortly about a Melbourne class.'
  },

  faq: {
    h2: 'Melbourne vibe coding and AI agents questions',
    intro: 'What Melbourne learners and families ask us first.',
    items: [
      { q: 'What is vibe coding?', a: 'Vibe coding is building software by describing what you want to an AI assistant and letting it write the code. In our classes the learner then reads, runs and tests that code until they understand it and can change it themselves.' },
      { q: 'What is an AI agent?', a: 'An AI agent is a program that takes a goal, chooses tools to use, reads their results and keeps working towards the goal. Our learners build small agents that answer questions from real data and then measure how often they are right.' },
      { q: 'What is a golden set?', a: 'A golden set is a collection of test questions whose correct answers are already known. Every version of an agent or tool is run against it, so a change that quietly breaks some answers is caught before anyone relies on it.' },
      { q: 'What is the Melbourne tram-stop project?', a: 'Learners build a nearest-tram-stop tool on 1,603 OpenStreetMap stop points, write 300 golden questions and test three versions of the distance code. The quick version gets 21 answers wrong; the careful one gets none.' },
      { q: 'How many people live in Greater Melbourne?', a: 'QuickStats gives Greater Melbourne 4,917,750 residents at the August 2021 count, with a median age of 37, one year under the Australian median of 38.' },
      { q: 'Do you help with VCE Algorithmics?', a: 'We teach the algorithm design, data structures and analysis that VCE Algorithmics (HESS) draws on. School-assessed Tasks are the student\'s own work under VCAA rules, and we never work on any assessed task.' },
      { q: 'What time are lessons for Melbourne learners?', a: 'Weekday afternoons and evenings or weekend slots, settled at the trial and always quoted in Melbourne time. India sits four and a half hours behind Melbourne from April to October and five and a half behind over summer.' },
      { q: 'Is there a Modern Age Coders centre in Melbourne?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do classes cost in Melbourne?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Melbourne and Australian learners',
    html: 'For machine learning in more depth, read <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-australia">AI and machine learning classes in Australia</a>. North of the Murray, <a class="cg-inline-link" href="/best-coding-classes-in-sydney">our Sydney page</a> hunts for a median bus stop and <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">the New South Wales page</a> explains the HSC. Start from the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a> for every other Australian guide.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Melbourne and Australia',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI in Australia' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-mel .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.8vw, 2.4rem); }
.cg-root.cg-mel .cg-hero h1 { font-weight: 800; letter-spacing: -0.03em; line-height: 1.04; }
.cg-root.cg-mel .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-mel .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; font-size: 0.84rem; text-transform: uppercase; }
.cg-root.cg-mel .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.018em; }
.cg-root.cg-mel .cg-grid-3 { gap: clamp(0.95rem, 2.3vw, 1.8rem); }
.cg-root.cg-mel .cg-table caption { font-weight: 700; letter-spacing: 0.012em; text-align: left; }
.cg-root.cg-mel .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mel .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 1rem; }
.cg-root.cg-mel .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Greater Melbourne, ABS Census 2021 QuickStats, GCCSA 2GMEL (read 7 October 2026): 4,917,750 people; median age 37 (Victoria 38, Australia 38); 1,299,184 families; 2,057,482 private dwellings; occupied private dwellings: flat or apartment 277,512 (15.6 percent; Australia 14.2 percent); occupation of employed people aged 15 and over: Professionals 656,333 (26.8 percent; Australia 24.0 percent); age 20 to 24: 328,543 (6.7 percent; Australia 6.2 percent); age 25 to 29: 383,135 (7.8 percent; Australia 7.0 percent). VCAA, VCE Algorithmics (HESS): accreditation period from 2023, Units 3 and 4; planning page: Unit 3 Algorithmic problem-solving; Area of Study 1 Data modelling with abstract data types, Area of Study 2 Algorithm design, Area of Study 3 Applied algorithms; School-assessed Task; time complexity analysis by step counting, inspection, the Master Theorem or measuring execution time. VCAA, VCE Applied Computing: accreditation period from 2025, Units 1 to 4; 2026 administrative information for school-based assessment in Data Analytics and in Software Development. Victorian Government, Enrolling in Foundation (Prep): in Victoria the first year of primary school is called Foundation or Prep; to start Foundation (Prep) in 2027 a child must turn 5 years old by 30 April 2027; school is compulsory for children who have turned 6. Victorian Government school term dates: 2026 Term 4 Monday 5 October to Friday 18 December; 2027 Term 1 Wednesday 27 January (students start 28 January in government schools) to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September; Term 4 Monday 4 October to Friday 17 December. Bureau of Meteorology Capital City Observations IDV60901: station 95936 Melbourne (Olympic Park). IANA tz database: Australia/Melbourne UTC+10 before and UTC+11 from 4 October 2026, back to UTC+10 on 4 April 2027; Asia/Kolkata UTC+5:30.',
    localProject: 'Golden-set regression testing of an agent tool on Melbourne tram stops. One OpenStreetMap Overpass query, snapshot 2026-10-07T08:07Z, rectangle 37.70 to 37.95 degrees south and 144.85 to 145.15 degrees east: 1,603 railway=tram_stop nodes with 916 distinct names. 300 golden questions (seed 2026): a point uniformly within 400 m of a randomly chosen stop; golden answer = nearest stop by haversine (R = 6,371,008.8 m); golden distances median 157 m, maximum 396 m. Tool v1 (raw-degree Euclidean): 21 of 300 answers name a different stop, 39 a different node; extra distance among wrong answers median 1.7 m, maximum 79.1 m. Tool v2 (longitude times cos latitude): 0 of 300 wrong. Tool v3 (latitude and longitude swapped): 300 of 300 wrong. Detection power of a random golden subset for v1 over 10,000 draws: 10 questions 52.46 percent (theory 51.6), 20 77.41 (76.6), 30 89.85 (88.7), 50 98.07 (97.3), 100 99.97 (99.9). Lesson family: golden-set regression testing for an AI agent tool and the detection power of a small test set; distinct from precision and recall, confusion matrices and calibration pages.',
    requiredMentions: [
      '4,917,750',
      '1,299,184',
      '2,057,482',
      '277,512',
      '656,333',
      '383,135',
      '1,603 OpenStreetMap stop points',
      '21 of 300',
      'Melbourne (Olympic Park)',
      'Algorithmics (HESS)'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Greater Melbourne (2GMEL): people, median age, families, private dwellings, dwelling structure, occupation, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2GMEL' },
      { claim: 'OpenStreetMap via the Overpass API: railway=tram_stop nodes in the stated rectangle, snapshot 2026-10-07T08:07Z (ODbL).', url: 'https://overpass-api.de/api/interpreter' },
      { claim: 'VCAA, VCE Algorithmics (HESS) study design page and planning page: accreditation from 2023, Units 3 and 4, areas of study, School-assessed Task, Master Theorem in the planning advice.', url: 'https://vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/algorithmics/planning' },
      { claim: 'VCAA, VCE Applied Computing: accreditation from 2025, Units 1 to 4, Data Analytics and Software Development assessment information for 2026.', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/applied-computing-data-analytics/applied-computing' },
      { claim: 'Victorian Government, school term dates and holidays 2026 and 2027.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'Victorian Government, Enrolling in Foundation (Prep): first year called Foundation or Prep; turn 5 by 30 April 2027.', url: 'https://www.vic.gov.au/enrolling-foundation-prep' },
      { claim: 'Bureau of Meteorology Capital City Observations, station 95936 Melbourne (Olympic Park).', url: 'https://www.bom.gov.au/fwo/IDV60901/IDV60901.95936.json' }
    ],
    rejectedClaims: [
      'Any claim about the size or ranking of Melbourne\'s tram network: no primary source was read for it, and the stop count is an OpenStreetMap snapshot for our own rectangle.',
      'Tram timetables, frequencies or service quality: not part of the data used.',
      'VCE study scores, ATAR outcomes or school results: excluded by the cluster rules.',
      'Income, rent, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with VCAA, Public Transport Victoria, Yarra Trams, OpenStreetMap, the ABS or the Bureau of Meteorology.'
    ]
  }
};
