'use strict';
// County Durham (cg- county index, UK cluster Phase 7, row 230). This page covers Durham County Council together with
// the three unitary boroughs to its south-east, Darlington, Hartlepool and Stockton-on-Tees (the Stockton figures
// are for the whole borough). Spine: two trains, one track, neither will back off. Locomotion, Shildon (Science
// Museum Group; read raw 26 September 2026): "On 27 September 1825 Locomotion No.1 ran the first passenger service on
// the brand-new Stockton & Darlington Railway"; "Built by Robert Stephenson and Co in Newcastle"; Timothy Hackworth,
// "first locomotive superintendent of the Stockton & Darlington Railway"; Shildon, "the world's first railway town";
// an S&DR anniversary event on 26 and 27 September 2026. Our model (scratchpad dur/deadlock.py, 26 September 2026):
// six single-track sections with passing places at 0, 3 and 6; trains start at random ends and times (seeds 0 to
// 999). Naive rule (take the next section whenever it is free): deadlocks 304 of 1,000 runs with 2 trains, 641 with
// 3, 844 with 4, 963 with 6, 991 with 8. Token rule (at a passing place, claim every section to the next passing
// place at once, or wait): 0 deadlocks in every case; mean finishing time 13.0 ticks for 2 trains (same as naive),
// 21.7 for 8 (naive runs that finished averaged 16.2). Lesson family: deadlock and its prevention by acquiring all
// needed resources at once (the single-line token idea); screened 26 September 2026 (deadlock: 0 hits; Essex's
// headway and meeting-point lesson is about timetables, not locking).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (County Durham 522,068; Stockton-on-Tees 196,595;
// Darlington 107,799; Hartlepool 92,338; our total 918,800); ONS built-up areas with our OA check (Fence Houses
// excluded, mostly Sunderland). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'COUNTY DURHAM', blurb: 'Four councils, thirty-one towns, and the railway that began at Shildon, turned into a lesson on deadlock.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-county-durham',
  code: 'cdu',
  accent: '#22228A',
  accentRationale: 'County Durham: a railway-livery royal blue from the solver (10.17:1 on the lightest paper), brighter than the navy county accents',
  pageType: 'governorate',
  place: {
    name: 'County Durham',
    eyebrow: 'County Durham and the Tees valley boroughs',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'North East England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Durham', href: '/best-coding-class-in-durham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'County Durham',
  title: 'Coding Classes in County Durham | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, databases and maths classes across County Durham and the Tees, from Durham and Darlington to Hartlepool, Stockton and Consett.',
  ogDescription: 'Coding classes for every town in County Durham and around it, and a railway project on deadlock: why two trains can get stuck forever, and the rule that stops it.',
  twitterDescription: 'County Durham coding, Python and database classes for ages 6 to 67, live online. Free first lesson.',
  ogImageCourse: 'mysql-database-complete-masterclass-college',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Database Classes for County Durham',
    description: 'Ability-placed online coding, Python, databases, algorithms and mathematics for children, teenagers and adults across County Durham, Darlington, Hartlepool and Stockton-on-Tees, taught live in English.'
  },

  h1: 'Coding classes in County Durham',
  capsuleQ: 'What are the best coding classes in County Durham?',
  capsule: 'This page covers Durham County Council and the three boroughs on its south-east edge, Darlington, Hartlepool and Stockton-on-Tees, which together held 918,800 people at the 2021 Census. Darlington, Hartlepool and Stockton are the biggest towns, then the city of Durham, Billingham and Consett, with dozens of former mining towns and villages in between. Whichever of these towns you live in, the lessons are identical: a live video class with a teacher in India, a level set by your skills rather than your age, a welcome for any learner aged 6 to 67, and a choice between a small group of five to ten and a teacher to yourself. We teach programming, Python, databases, algorithms and maths. The project here comes from the railway that began in this county. You will not be charged for the opening lesson; if you stay, it is USD 100 a month to learn in a group and USD 150 to learn alone with a teacher.',
  lead: 'On 27 September 1825, Locomotion No.1 ran the first passenger service on the brand-new Stockton and Darlington Railway, and Shildon, where the line\'s engines were kept, now calls itself the world\'s first railway town. Early railways had to solve a problem that every programmer meets sooner or later. Picture two trains heading towards each other on a single track. Each moves forward whenever the section ahead is empty, and each ends up in a section the other one needs. Neither can move, and neither will ever move again. In computing this is called a deadlock. This page\'s project builds the railway in Python, shows how often a simple rule jams it, and tests the old railway answer that stops it completely.',
  wa: 'Hello Modern Age Coders, I would like a free lesson for a learner in County Durham.',

  picks: {
    eyebrow: 'Courses for County Durham',
    h2: 'How County Durham learners usually begin',
    intro: 'A seven-year-old in Shildon who loves trains, an eleven-year-old in Chester-le-Street who has outgrown Scratch, a Year 10 in Darlington sitting GCSE Computer Science, and a stock controller in Stockton learning SQL for work. Each starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, including trains and signals that wait their turn.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed Python for children: conditions, loops and the idea of a program waiting for something.' },
      { course: 'gcse-computer-science-course', band: 'GCSE years', note: 'Taught to the specification your child sits, AQA 8525, OCR J277 or Edexcel 1CP2.' },
      { course: 'mysql-database-complete-masterclass-college', band: 'Adults', note: 'SQL, database design, stored procedures and transactions, the place where real deadlocks happen.' }
    ]
  },

  sections: [
    {
      id: 'durham', tint: '', eyebrow: 'The area in figures',
      h2: 'Four councils, 918,800 people and thirty-one towns',
      intro: 'The four council totals are the 2021 Census on Nomis; Stockton-on-Tees is counted as a whole borough. Towns are ONS built-up areas, each checked against census output areas we added up ourselves.',
      body: [
        { kind: 'table', caption: 'The four councils covered on this page, usual residents at Census 2021', head: ['Council', 'Usual residents', 'Main towns'], rows: [
          ['Durham County Council', '522,068', 'Durham, Consett, Newton Aycliffe, Chester-le-Street, Bishop Auckland, Seaham'],
          ['Stockton-on-Tees', '196,595', 'Stockton-on-Tees, Billingham, Ingleby Barwick, Thornaby-on-Tees, Yarm'],
          ['Darlington', '107,799', 'Darlington'],
          ['Hartlepool', '92,338', 'Hartlepool']
        ] },
        { kind: 'p', text: 'Durham County Council alone covers more than half a million people, but no single town in it is large: the city of Durham\'s built-up area has 50,510 residents, and the next biggest, Consett, under 30,000. The large towns lie on the edge, in Darlington, Hartlepool and Stockton. Between them, the former coalfield towns and villages sit close on the map but can be awkward to link by bus, especially in the evening.' },
        { kind: 'table', caption: 'The thirty largest built-up areas across the four councils, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Darlington', '93,015', 'Egglescliffe', '10,250'],
          ['Hartlepool', '87,995', 'Crook', '9,715'],
          ['Stockton-on-Tees', '84,815', 'Shildon', '9,645'],
          ['Durham', '50,510', 'Yarm', '9,600'],
          ['Billingham', '33,920', 'Brandon', '9,505'],
          ['Consett', '29,885', 'Ferryhill', '8,860'],
          ['Newton Aycliffe', '25,765', 'Annfield Plain', '7,785'],
          ['Chester-le-Street', '23,560', 'Pelton and Ouston', '7,305'],
          ['Ingleby Barwick', '23,380', 'Murton', '7,240'],
          ['Bishop Auckland', '23,355', 'Easington', '6,965'],
          ['Thornaby-on-Tees', '23,350', 'Horden', '6,805'],
          ['Seaham', '21,665', 'Ushaw Moor and Bearpark', '6,480'],
          ['Spennymoor', '20,410', 'Barnard Castle', '5,785'],
          ['Peterlee', '19,750', 'Willington', '5,685'],
          ['Stanley', '19,415', 'Sacriston', '5,190']
        ] },
        { kind: 'p', text: 'Wingate, with 5,035, is the thirty-first. Every row agrees with our output-area count to within rounding. Fence Houses is listed by the ONS partly against County Durham, but only about 1,650 of its 6,945 residents are on this side of the line, so it belongs with Sunderland. The four councils and academies set school calendars separately, and we did not read them; lesson breaks are agreed family by family.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The County Durham project',
      h2: 'Two trains, one track, and a deadlock nobody planned',
      intro: 'A six-section railway in Python, a thousand random timetables per setting, and a rule borrowed from real single-line railways.',
      body: [
        { kind: 'p', text: 'The learner builds a toy line of six single-track sections, with passing places at each end and one in the middle where trains can wait side by side. Each section can hold only one train. Trains set off from either end at random times. The first rule anyone tries is the obvious one: move into the next section whenever it is empty. Run it, and it often works. Run it a thousand times with different random timetables, and a pattern appears. Sooner or later an eastbound train sits in one section wanting the next, while a westbound train sits in that next section wanting the first. Both wait for ever.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: 1,000 random timetables for each number of trains', head: ['Trains on the line', 'Deadlocks with the naive rule', 'Deadlocks with the token rule', 'Average finish time with tokens'], rows: [
          ['2', '304 of 1,000', '0 of 1,000', '13.0 steps'],
          ['3', '641 of 1,000', '0 of 1,000', '14.5 steps'],
          ['4', '844 of 1,000', '0 of 1,000', '15.8 steps'],
          ['6', '963 of 1,000', '0 of 1,000', '18.6 steps'],
          ['8', '991 of 1,000', '0 of 1,000', '21.7 steps']
        ] },
        { kind: 'p', text: 'The fix is the token rule, an idea railways have long used on single lines: a train may only leave a passing place once it holds the right to every section up to the next passing place, all at once. If any of them is taken, it waits where there is room to wait. With that one change, not a single run out of five thousand deadlocks. The price shows in the last column: trains sometimes wait at a station when they could have crept forward, so with eight trains the line takes 21.7 steps on average against 16.2 for the few naive runs that happened to finish.' },
        { kind: 'p', text: 'This is exactly the deadlock that computer scientists study. Four things together cause it: something only one user can hold at a time, users holding one thing while waiting for another, no way to take a thing away from its holder, and a circle of waiting. Break any one and deadlock is impossible. The token rule breaks the second: nobody holds part of what they need while waiting for the rest. Databases, operating systems and online games all use versions of the same trick.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Act it out with two toy trains on a paper track, find the jam, then write the simple rule in Python and watch it happen on screen.' },
          { h3: 'Ages 13 to 16', p: 'Run the naive rule a thousand times with different random seeds, count the deadlocks, and see how the count grows with more trains.' },
          { h3: 'Ages 16 and up', p: 'Implement the token rule, prove it cannot deadlock using the four conditions, and measure the time it costs in exchange.' }
        ] },
        { kind: 'callout', h3: 'What the model is', p: 'The railway, the rules and the numbers are our own simplified model, not a description of how the Stockton and Darlington Railway or any modern line was signalled. The railway history is Locomotion\'s. The point of the model is the computer science, which is the same whether the track is iron or a table in a database.' }
      ]
    },
    {
      id: 'shildon', tint: 'deep', eyebrow: 'Why Shildon',
      h2: 'The world\'s first railway town, in its museum\'s words',
      intro: 'The County Durham link, from Locomotion, part of the Science Museum Group.',
      body: [
        { kind: 'table', caption: 'The Stockton and Darlington Railway, as Locomotion tells it', head: ['Topic', 'What the museum says'], rows: [
          ['The first passenger service', 'On 27 September 1825 Locomotion No.1 ran the first passenger service on the brand-new Stockton and Darlington Railway.'],
          ['Its builder', 'Built by Robert Stephenson and Co in Newcastle.'],
          ['Its significance', 'Considered by many to be the start of the modern railway as we know it today.'],
          ['The engineer', 'Timothy Hackworth, the first locomotive superintendent of the Stockton and Darlington Railway.'],
          ['The town', 'Shildon, described by Locomotion as the world\'s first railway town.']
        ] },
        { kind: 'p', text: 'The railway that opened here two centuries ago had to answer questions that now belong to computing: how many things can share one resource, who goes first, what happens when two want the same thing at once. A County Durham learner working through this project is doing, in a few dozen lines of Python, the same reasoning that keeps a modern signalling system, a bank\'s database and a multiplayer game from seizing up.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Locomotion, the Science Museum Group or any of the four councils, and nothing here implies one. The history is theirs; the model and any error in it are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-durham">Durham</a> and <a class="cg-inline-link" href="/best-coding-class-in-sunderland">Sunderland</a> have city pages of their own, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links everything else.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The route up',
    h2: 'From taking turns to proving a system cannot jam',
    intro: 'Where to begin is decided in the free lesson. Year group helps; ability decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Taking turns', p: 'Block-coding projects where characters wait, signal and go, the first idea of sharing something fairly.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Rules that wait', p: 'Python with conditions and loops, and small simulations where things move only when it is safe.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 13 to 18', h3: 'Systems thinking', p: 'GCSE and A level computing topics on processes and resources, backed by simulations that test a rule thousands of times.', courses: ['gcse-computer-science-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Databases at work', p: 'SQL, transactions and locking for adults, where deadlocks are a daily fact of life and preventing them is part of the job.', courses: ['mysql-database-complete-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and systems that jam',
    h2: 'An AI can write code for two processes sharing a resource. Will it notice the deadlock?',
    intro: 'Deadlocks hide in code that looks correct line by line.',
    p1: 'Ask a chatbot to write two workers that each lock a pair of shared records and it will often produce tidy, readable code that deadlocks under the wrong timing, exactly like our naive trains. Each line is correct; the problem is in how they interact, and it may only appear once in hundreds of runs. A quick test passes, and the fault waits for a busy day.',
    p2: 'A County Durham student who has watched 991 of 1,000 timetables jam knows to ask how a design behaves when things happen at the same time, to test it many times rather than once, and to look for the four conditions that make deadlock possible. That is how experienced engineers review concurrent code, whoever or whatever wrote it.',
    closer: 'So a County Durham teenager should learn to code in 2026, two hundred years on from Locomotion No.1, to be the one who spots the jam before the trains do.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Getting started',
    h2: 'Barnard Castle to Hartlepool, with no connection to miss',
    intro: 'The area\'s towns are spread across dales, coalfield and coast. Online lessons turn every journey into zero.',
    cells: [
      { h3: 'Learning from home', p: 'A bedroom in Spennymoor, a kitchen in Peterlee, a desk in Yarm. Teacher and learner share one screen.' },
      { h3: 'The same school words', p: 'Key Stages, GCSE options and A levels are named as local schools name them, and every lesson is in English.' },
      { h3: 'First lesson free', p: 'A real lesson with real work and an honest recommendation. There is no card to hand over.' },
      { h3: 'Right-level classmates', p: 'Five to ten learners at the same stage, gathered from many places, so the pace suits everyone.' },
      { h3: 'Holidays fitted in', p: 'Two lessons a week is usual, paused when your own school stops, whichever council or trust sets its dates.' },
      { h3: 'Times written in UK time', p: 'Teachers work from India, five and a half hours ahead of UK winter time and four and a half ahead of UK summer time; your timetable shows UK time.' }
    ],
    spec: { title: 'Why groups follow level, not location', p: 'Thirty-one towns, most of them small, mean few places have enough learners at the same stage on the same evening. Level-based groups let a Crook learner and a Billingham learner share a class.' }
  },

  fees: {
    h2: 'Fees across County Durham',
    intro: 'The same fees in every town on this page, and in every country outside India.',
    first: 'A full lesson of real work, finishing with a recommended level and course.',
    group: 'Around eight lessons a month in a group of five to ten learners at one level.',
    private: 'Around eight lessons a month, one teacher with one learner.',
    closer: 'All families outside India pay in US dollars, and there is no pound price list. The first payment follows the free lesson, once a course and weekly slot are agreed; details on pausing, missed lessons and changing between group and private are on the pricing page.'
  },

  reviewsH2: 'Parents and learners, reviewing us on Google',

  book: {
    h2: 'Ask for the free first lesson',
    intro: 'We only need to know an age or a school year, and what the learner is into. The first lesson might be a block-coding train game, a first Python loop, or the deadlock railway on this page.',
    success: 'Thank you. Your County Durham request has reached us.'
  },

  faq: {
    h2: 'County Durham questions',
    intro: 'About the area, the railway project and how lessons run.',
    items: [
      { q: 'How many people live in County Durham and the Tees boroughs?', a: 'Durham County Council, Stockton-on-Tees, Darlington and Hartlepool together held 918,800 usual residents at the 2021 Census, from ONS data on Nomis. Durham County Council\'s area alone had 522,068.' },
      { q: 'What are the largest towns here?', a: 'By ONS built-up area: Darlington 93,015, Hartlepool 87,995, Stockton-on-Tees 84,815, Durham 50,510 and Billingham 33,920. The page lists thirty-one towns above five thousand people.' },
      { q: 'What is the railway deadlock project?', a: 'Learners build a six-section single-track railway in Python and run a thousand random timetables. With the naive rule, 991 of 1,000 jam when eight trains run; with the token rule, none do.' },
      { q: 'What is a deadlock?', a: 'A situation where two or more things each hold something the other needs and wait for ever. It happens in railways, databases and computer programs whenever resources are shared carelessly.' },
      { q: 'When did the Stockton and Darlington Railway open?', a: 'Locomotion, the Shildon museum, says Locomotion No.1 ran the first passenger service on the brand-new line on 27 September 1825.' },
      { q: 'Is there a classroom in Durham or Darlington?', a: 'Not in either town, or anywhere else. We teach over live video only, which means a Seaham learner and a Newton Aycliffe learner can be classmates without leaving home.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Block coding for young children, typed Python from around ten, GCSE computing and algorithms for teenagers, and databases or Python for adults. The free lesson finds the level.' },
      { q: 'Do you teach SQL and databases to adults?', a: 'Yes. The adult MySQL course covers SQL, database design, stored procedures, transactions and Python integration.' },
      { q: 'What does it cost?', a: 'The first lesson has no charge. Carrying on costs USD 100 a month in a group or USD 150 a month one to one, with nothing to pay to register and no minimum period.' },
      { q: 'When are school holidays here?', a: 'Each council and academy trust sets its own dates. Tell us your school’s dates and we pause lessons to match.' }
    ]
  },

  next: {
    eyebrow: 'More of the North East',
    h2: 'Pages near County Durham',
    html: 'City pages for <a class="cg-inline-link" href="/best-coding-class-in-durham">Durham</a> and <a class="cg-inline-link" href="/best-coding-class-in-sunderland">Sunderland</a> each have their own project, and <a class="cg-inline-link" href="/coding-classes-in-cumbria">Cumbria</a> lies over the Pennines. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has everything else.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'County Durham and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-durham', label: 'Durham' },
    { href: '/best-coding-class-in-sunderland', label: 'Sunderland' }
  ],

  personalityCss: `
.cg-root.cg-cdu .cg-hero-grid { align-items: stretch; gap: clamp(1rem, 2.8vw, 2.4rem); }
.cg-root.cg-cdu .cg-hero h1 { font-weight: 800; letter-spacing: -0.028em; line-height: 1.03; }
.cg-root.cg-cdu .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-cdu .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cdu .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.02em; }
.cg-root.cg-cdu .cg-table caption { font-style: italic; font-weight: 600; letter-spacing: 0.01em; }
.cg-root.cg-cdu .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cdu .cg-table th { letter-spacing: 0.055em; text-transform: uppercase; }
.cg-root.cg-cdu .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-cdu .cg-callout { border-left-width: 8px; border-radius: 0 7px 7px 0; }
`,

  dossier: {
    curriculumAuthority: 'County Durham page: Durham County Council plus Stockton-on-Tees (whole borough), Darlington and Hartlepool. ONS Census 2021 TS001 via Nomis: County Durham 522,068; Stockton-on-Tees 196,595; Darlington 107,799; Hartlepool 92,338; total 918,800 (our sum). ONS Census 2021 built-up areas (published; checked with our OA sums): Darlington 93,015; Hartlepool 87,995; Stockton-on-Tees 84,815; Durham 50,510; Billingham 33,920; Consett 29,885; Newton Aycliffe 25,765; Chester-le-Street 23,560; Ingleby Barwick 23,380; Bishop Auckland 23,355; Thornaby-on-Tees 23,350; Seaham 21,665; Spennymoor 20,410; Peterlee 19,750; Stanley 19,415; Egglescliffe 10,250; Crook 9,715; Shildon 9,645; Yarm 9,600; Brandon 9,505; Ferryhill 8,860; Annfield Plain 7,785; Pelton and Ouston 7,305; Murton 7,240; Easington 6,965; Horden 6,805; Ushaw Moor and Bearpark 6,480; Barnard Castle 5,785; Willington 5,685; Sacriston 5,190; Wingate 5,035. Fence Houses excluded (1,654 of 6,945 in County Durham). Locomotion (Science Museum Group), Locomotion No.1: "On 27 September 1825 Locomotion No.1 ran the first passenger service on the brand-new Stockton & Darlington Railway - a significant milestone in railway history considered by many to be the start of the modern railway as we know it today"; "Built by Robert Stephenson and Co in Newcastle". Objects and stories: "Railway pioneer Timothy Hackworth, first locomotive superintendent of the Stockton & Darlington Railway". Homepage: "Shildon - the world\'s first railway town"; S&DR anniversary event Saturday 26 and Sunday 27 September 2026.',
    localProject: 'Deadlock and its prevention. Python model: six single-track sections, passing places at boundaries 0, 3 and 6 (unlimited capacity), one train per section; trains start at a random end with a random start tick (0 to 11); seeds 0 to 999 per setting. Naive rule: enter the next section whenever free; deadlock when no train moves after all have started. Token rule: at a passing place, reserve every section up to the next passing place atomically, else wait. Deadlocks (naive vs token) out of 1,000: 2 trains 304 vs 0; 3 trains 641 vs 0; 4 trains 844 vs 0; 6 trains 963 vs 0; 8 trains 991 vs 0. Mean finishing ticks, token: 13.0, 14.5, 15.8, 18.6, 21.7; naive (finished runs only): 13.0, 14.2, 14.9, 15.9, 16.2. Coffman\'s four conditions explained; the token rule removes hold-and-wait. Page states the model is ours and not a description of historical signalling. AI angle: generated concurrent code deadlocks under rare timings. Lesson family: deadlock, prevented by acquiring all resources at once.',
    requiredMentions: [
      '918,800',
      '27 September 1825',
      'Robert Stephenson and Co',
      'world\'s first railway town',
      'Timothy Hackworth',
      '991 of 1,000',
      '304 of 1,000',
      'Ushaw Moor and Bearpark',
      'Pelton and Ouston',
      'Newton Aycliffe'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for County Durham, Stockton-on-Tees, Darlington and Hartlepool, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for towns in these council areas.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Locomotion: Locomotion No.1 ran the first passenger service on the Stockton and Darlington Railway on 27 September 1825; built by Robert Stephenson and Co.', url: 'https://www.locomotion.org.uk/whats-on/locomotion-no1' },
      { claim: 'Locomotion: Timothy Hackworth, first locomotive superintendent of the S&DR.', url: 'https://www.locomotion.org.uk/objects-and-stories' },
      { claim: 'Locomotion: Shildon, the world\'s first railway town.', url: 'https://www.locomotion.org.uk/' }
    ],
    rejectedClaims: [
      'Which parts of Stockton-on-Tees borough lie in ceremonial County Durham or North Yorkshire: not read at a primary source, so the whole borough is counted and the page says so.',
      'The S&DR200 organisation\'s own facts: its site returned 403 on 26 September 2026.',
      'How the Stockton and Darlington Railway was actually signalled or operated in 1825: not read at a primary source; the page\'s railway is explicitly a model.',
      'Fence Houses as a County Durham town: most of it lies in Sunderland.',
      'School term dates: set by four councils and academies; none read.',
      'Named schools in the area: none is named.'
    ]
  }
};
