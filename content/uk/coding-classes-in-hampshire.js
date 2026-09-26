'use strict';
// Hampshire (cg- county index, UK cluster Phase 7, row 234). Eleven districts under Hampshire County Council plus
// Portsmouth and Southampton (the Isle of Wight is its own county and is not counted here). Spine: count the ones you
// see twice. Verderers of the New Forest (read raw 26 September 2026): "The Court of Verderers is a corporate body set
// up under the New Forest Act of 1877"; the Verderers regulate commoning. New Forest National Park Authority: "made a
// National Park in 2005. Covering 220 square miles, the unique landscape is shaped by the grazing of ponies, cattle and
// pigs that roam freely". No published animal count was read, so the project uses a model herd. Our run (scratchpad
// ham/cr.py, seed 20260926; all values ours): herd of 3,000, 300 marked on day one, 300 seen on day two, expected 30
// recaptures (range 13 to 48 in 2,000 surveys). Lincoln-Petersen estimate M x C / R: mean 3,089 (biased high), median
// 3,000, spread 542, 46.2 per cent within 10 per cent. Chapman's correction (M+1)(C+1)/(R+1) - 1: mean 3,003, spread
// 507, 44.9 per cent within 10 per cent. Broken assumption: if marked animals are half as likely to be seen, Chapman
// median 5,328; if twice as likely, 1,708. Lesson family: capture-recapture estimation, bias correction and the
// assumptions behind it; screened (capture-recapture, Lincoln-Petersen: 0 hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (1,857,822, our sum of thirteen councils); ONS
// built-up areas above 8,000 with our OA check (Emsworth 9,886 of 11,505 inside, rest in West Sussex). BLOCKED or not
// found: Ordnance Survey national grid guide page (404), HMS Victory site (no connection), NMRN signal pages (404).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'HAMPSHIRE', blurb: 'Thirteen councils, thirty-five towns, and a New Forest problem: counting animals that never stand still.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-hampshire',
  code: 'hmp',
  accent: '#3C4C32',
  accentRationale: 'Hampshire: a New Forest heath green from the solver (7.45:1 on the darkest paper tint), darker and greyer than the Surrey and East Sussex greens',
  pageType: 'governorate',
  place: {
    name: 'Hampshire',
    eyebrow: 'County of Hampshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'South East England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Southampton', href: '/best-coding-class-in-southampton' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Hampshire',
  title: 'Coding Classes in Hampshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, AI and maths classes across Hampshire, from Southampton, Portsmouth and Basingstoke to Winchester, Andover, Farnborough and Fleet.',
  ogDescription: 'Coding classes for every Hampshire town, and a New Forest project: estimate a herd that roams freely by counting the animals you see twice, then break the method.',
  twitterDescription: 'Hampshire coding, Python and AI classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Hampshire',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across Portsmouth, Southampton and the eleven Hampshire districts, taught live in English.'
  },

  h1: 'Coding classes in Hampshire',
  capsuleQ: 'What are the best coding classes in Hampshire?',
  capsule: 'Hampshire is thirteen councils, Portsmouth, Southampton and eleven districts, and 1,857,822 people at the 2021 Census, not counting the Isle of Wight. Southampton and Portsmouth are the two cities; then come Basingstoke, Gosport, Farnborough, Winchester, Andover and Eastleigh, with the New Forest, the South Downs and dozens of towns in between. Our classes cover the whole county identically: live video lessons with teachers in India, learners placed by skill rather than by age, a welcome for anyone from 6 to 67, and a choice between groups of five to ten and one-to-one teaching. We teach programming, Python, AI, data and maths. The Hampshire project comes from the New Forest. You pay nothing for lesson one; after that, USD 100 a month in a group or USD 150 a month privately.',
  lead: 'The New Forest National Park Authority says the Forest\'s landscape is shaped by ponies, cattle and pigs that roam freely, and the Verderers have regulated that commoning since the New Forest Act of 1877. Animals that roam freely pose a problem every ecologist knows: how do you count a population you can never see all at once? One classic answer is almost magical. Mark some animals one day, look again another day, and count how many of the second group carry a mark. From that single number you can estimate the whole population. This page\'s project builds the method in Python, tests it on a model herd thousands of times, and then shows how one broken assumption can throw the answer out by three-quarters.',
  wa: 'Hello Modern Age Coders, I would like a free lesson for a learner in Hampshire.',

  picks: {
    eyebrow: 'Courses for Hampshire',
    h2: 'How Hampshire learners get started',
    intro: 'A seven-year-old in Ringwood who spots ponies on every drive, an eleven-year-old in Romsey learning Python, a Year 12 in Fleet curious about machine learning, and an analyst in Basingstoke who wants the maths behind data science. Each starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, with kid-safe AI and a first taste of Python.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Real Python for children, including random choices and simple experiments run many times over.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Python, machine learning, neural networks and modern AI, with estimation and error treated seriously.' },
      { course: 'data-analytics-mathematics-masterclass', band: 'Adults', note: 'Statistics, probability, linear algebra, regression and Bayesian methods, the maths under data science.' }
    ]
  },

  sections: [
    {
      id: 'hampshire', tint: '', eyebrow: 'Hampshire by the numbers',
      h2: 'Thirteen councils, 1,857,822 people and two cities on the Solent',
      intro: 'Council totals are 2021 Census counts on Nomis. The towns are ONS built-up areas above 8,000 people, checked against our own addition of census output areas.',
      body: [
        { kind: 'table', caption: 'Portsmouth, Southampton and the eleven Hampshire districts, usual residents at Census 2021, largest first', head: ['Council', 'Usual residents', 'Main towns'], rows: [
          ['Southampton', '248,922', 'Southampton'],
          ['Portsmouth', '208,003', 'Portsmouth, Southsea'],
          ['Basingstoke and Deane', '185,154', 'Basingstoke, Tadley'],
          ['New Forest', '175,785', 'Totton, Hythe and Dibden Purlieu, Lymington, Ringwood, New Milton'],
          ['Eastleigh', '136,443', 'Eastleigh, Chandler\'s Ford, Hedge End, West End'],
          ['Test Valley', '130,492', 'Andover, Romsey'],
          ['Winchester', '127,444', 'Winchester, Whiteley in part'],
          ['East Hampshire', '125,744', 'Alton, Petersfield, Horndean in part, Bordon'],
          ['Havant', '124,208', 'Havant, Waterlooville, South Hayling, Emsworth'],
          ['Fareham', '114,511', 'Fareham, Locks Heath'],
          ['Rushmoor', '99,756', 'Farnborough, Aldershot'],
          ['Hart', '99,408', 'Fleet, Yateley, Hook'],
          ['Gosport', '81,952', 'Gosport, Lee-on-the-Solent in part']
        ] },
        { kind: 'p', text: 'The two cities hold under a quarter of the county between them. Portsmouth\'s built-up area, 223,305 people, reaches over the city boundary into Fareham and Havant; Southampton\'s runs into Eastleigh. North of them the county is spread across market towns and commuter towns, from Andover and Basingstoke to Farnborough, Fleet and Alton, many of them a long way from the cities\' universities and clubs.' },
        { kind: 'table', caption: 'Hampshire built-up areas with more than 8,000 residents at the 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Southampton', '249,620', 'Lee-on-the-Solent', '24,315'],
          ['Portsmouth', '223,305', 'Hedge End', '23,190'],
          ['Basingstoke', '117,210', 'Romsey', '19,920'],
          ['Gosport', '70,110', 'Hythe and Dibden Purlieu', '19,855'],
          ['Farnborough', '60,655', 'Alton', '17,880'],
          ['Winchester', '48,480', 'South Hayling', '15,305'],
          ['Andover', '48,480', 'Petersfield', '14,995'],
          ['Eastleigh', '48,360', 'Lymington', '14,865'],
          ['Havant', '46,960', 'Tadley', '14,760'],
          ['Fareham', '42,625', 'Yateley', '14,685'],
          ['Aldershot', '39,825', 'Ringwood', '12,785'],
          ['Fleet', '37,790', 'New Milton', '11,870'],
          ['Locks Heath', '35,755', 'Emsworth', '11,505'],
          ['Waterlooville', '34,775', 'West End', '10,870'],
          ['Horndean', '34,050', 'Whiteley', '9,350'],
          ['Chandler\'s Ford', '31,975', 'Bordon', '9,350'],
          ['Totton', '28,090', 'Hook', '9,065']
        ] },
        { kind: 'p', text: 'Bursledon, with 8,070, completes the list. Every row agrees with our count to within rounding except Emsworth, which has about 1,600 of its 11,505 residents over the border in West Sussex; the table prints the ONS total. Hampshire County Council, Portsmouth, Southampton and academies set school calendars separately, and we did not read them; lesson breaks are agreed with each family.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Hampshire project',
      h2: 'Counting a herd that never stands still',
      intro: 'A model herd in Python, two thousand simulated surveys, and the one assumption that the whole method rests on.',
      body: [
        { kind: 'p', text: 'We do not know how many animals graze the Forest, and we have not read a published count, so the learner builds a model herd of 3,000, a number we chose. On day one, 300 animals are found and marked. On day two, 300 animals are seen again, some marked and some not. If the herd is well mixed, the share of marked animals among those seen on day two should match the share of the whole herd that was marked. So if 30 of the 300 seen carry marks, a tenth of the herd was marked, and 300 marked animals means about 3,000 in all. That is the Lincoln-Petersen estimate: marked times seen, divided by recaptures.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: 2,000 simulated surveys of a model herd of 3,000', head: ['Method or situation', 'Typical estimate', 'Spread', 'Within 10 per cent of 3,000'], rows: [
          ['Lincoln-Petersen, fair mixing', 'Mean 3,089, median 3,000', '542', '46.2 per cent of surveys'],
          ['Chapman\'s correction, fair mixing', 'Mean 3,003', '507', '44.9 per cent of surveys'],
          ['Marked animals half as likely to be seen', 'Median 5,328', '', 'Badly too high'],
          ['Marked animals twice as likely to be seen', 'Median 1,708', '', 'Badly too low']
        ] },
        { kind: 'p', text: 'Three lessons sit in that table. First, luck matters: recaptures ranged from 13 to 48 across the surveys, so any single estimate can be well off, and fewer than half land within 10 per cent. Second, the obvious formula is slightly biased high, averaging 3,089, because a survey that happens to recapture few marked animals divides by a small number; a small correction due to Chapman, adding one in the right places, brings the average to 3,003.' },
        { kind: 'p', text: 'The third lesson matters most. The whole method assumes marking changes nothing. If marked animals learn to avoid people and become half as likely to be seen, recaptures fall and the estimate balloons to around 5,328, three-quarters too high. If they become easier to spot, it collapses to about 1,708. The mathematics is fine in every case; the assumption is what fails. Real surveys spend much of their effort checking exactly that.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Mark twenty beans in a jar, shake, draw a handful, count the marked ones, and estimate the whole jar; then check by counting.' },
          { h3: 'Ages 13 to 16', p: 'Write the survey in Python, run it two thousand times, and plot how widely the Lincoln-Petersen estimate varies.' },
          { h3: 'Ages 16 and up', p: 'Add Chapman\'s correction, measure the bias of each method, and model marked animals that behave differently.' }
        ] },
        { kind: 'callout', h3: 'What is modelled', p: 'The herd size, the numbers marked and seen, and the behaviour changes are values we chose to teach the method. The Verderers and the National Park Authority do not describe how animals are counted on the pages we read, and nothing here describes their methods or their numbers.' }
      ]
    },
    {
      id: 'new-forest', tint: 'deep', eyebrow: 'Why the New Forest',
      h2: 'A National Park grazed by animals that roam freely',
      intro: 'The Hampshire link, in the words of the organisations that look after the Forest.',
      body: [
        { kind: 'table', caption: 'The New Forest, from the Verderers and the National Park Authority', head: ['Source', 'What it says'], rows: [
          ['Verderers of the New Forest', 'The Court of Verderers is a corporate body set up under the New Forest Act of 1877.'],
          ['Verderers of the New Forest', 'It is the last remnant of an old form of Forest government, and regulates commoning on the Forest.'],
          ['New Forest National Park Authority', 'The Forest was made a National Park in 2005 and covers 220 square miles.'],
          ['New Forest National Park Authority', 'Its landscape is shaped by the grazing of ponies, cattle and pigs that roam freely.']
        ] },
        { kind: 'p', text: 'Estimating a population you cannot count directly is one of the most useful ideas a learner can meet. The same reasoning estimates fish in a lake, bugs in a program found by two independent testers, and people who are hard to reach in a survey. A Hampshire teenager who has built it, tested it and broken it knows both how powerful it is and exactly where it can go wrong.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the Verderers of the New Forest, the New Forest National Park Authority or any Hampshire council, and nothing on this page implies one. Their facts are theirs; the model herd and its numbers are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-southampton">Southampton</a>, <a class="cg-inline-link" href="/best-coding-class-in-portsmouth">Portsmouth</a> and <a class="cg-inline-link" href="/best-coding-class-in-winchester">Winchester</a> have pages of their own, and <a class="cg-inline-link" href="/coding-classes-in-dorset">Dorset</a> is to the west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages of learning',
    h2: 'From counting beans to trusting an estimate',
    intro: 'The free lesson sets the starting level, by ability. Year group is only a hint.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting and guessing', p: 'Block-coding games that count, estimate and check, the beginning of thinking about how many.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Experiments in code', p: 'Python that repeats a random experiment many times and summarises what happened.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Estimation and models', p: 'Machine learning and statistics that treat every estimate as uncertain and every model as a set of assumptions.', courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The maths behind data', p: 'Probability, regression and Bayesian methods for adults who need to know how far to trust a number.', courses: ['data-analytics-mathematics-masterclass', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and estimates',
    h2: 'An AI can apply a population formula. Will it question the assumption underneath?',
    intro: 'Rarely, and the answer looks just as confident when the assumption is false.',
    p1: 'Give a chatbot the numbers from a mark-and-recapture survey and it will apply the formula correctly and report a population with a neat margin of error. It will not usually ask whether marking changed the animals\' behaviour, whether the herd mixed between surveys, or whether the two days saw the same area. Those are the questions that decide whether the answer is 3,000 or 5,300, and they are questions about the world, not about arithmetic.',
    p2: 'A Hampshire student who has watched a single behavioural change push the estimate three-quarters too high will ask about assumptions before trusting any number, whether it comes from a survey, a model or an AI. That habit is the core of good science and good data work, and it is exactly what a fluent machine answer tends to skip.',
    closer: 'So a Hampshire teenager should learn to code in 2026 to be able to test the assumption, not just run the formula.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Getting started',
    h2: 'Tadley to Lymington without the M3',
    intro: 'Hampshire is large and its roads are busy at school pick-up time. Online lessons remove every mile.',
    cells: [
      { h3: 'From home', p: 'A bedroom in Alton, a kitchen in Hedge End, a desk in Yateley. The teacher shares a screen and the learner writes the code.' },
      { h3: 'English and school terms', p: 'Year groups, GCSE options and A levels are named as Hampshire schools name them, and every lesson is in English.' },
      { h3: 'Free first lesson', p: 'A proper lesson of real work, then an honest suggestion of level and course. There are no card details to give.' },
      { h3: 'Classmates at your stage', p: 'Groups of five to ten learners who have reached the same point, gathered widely, so the lesson suits each of them.' },
      { h3: 'Breaks with your school', p: 'Two lessons a week for most learners, stopping when their own school stops.' },
      { h3: 'All times in UK time', p: 'Our teachers keep India time, four and a half hours ahead in UK summer and five and a half in UK winter; every booking is written in UK time.' }
    ],
    spec: { title: 'Why groups are formed by level', p: 'Thirty-five towns and two cities spread across a large county mean few places have enough learners at one stage on one evening. Level-based groups let a Petersfield learner and a Gosport learner share a class.' }
  },

  fees: {
    h2: 'Hampshire fees',
    intro: 'The same prices across the whole county, and in every country apart from India.',
    first: 'A full lesson of genuine work, ending with a recommended level and course.',
    group: 'Roughly eight lessons a month, in a group of five to ten at one level.',
    private: 'Roughly eight lessons a month with one teacher and one learner.',
    closer: 'All fees are in US dollars for families outside India, with no pound list. You are charged only after the free lesson has settled a course and a weekly slot; the pricing page explains pausing, missed lessons and changing between group and private teaching.'
  },

  reviewsH2: 'Reviews our families left on Google',

  book: {
    h2: 'Book a free lesson',
    intro: 'We need only an age or school year and something the learner enjoys. The first lesson might be a block-coding counting game, a first Python experiment, or the herd survey on this page.',
    success: 'Thank you. Your Hampshire request has reached us.'
  },

  faq: {
    h2: 'Hampshire questions',
    intro: 'On the county, the New Forest project and how lessons work.',
    items: [
      { q: 'How many people live in Hampshire?', a: 'Portsmouth, Southampton and the eleven Hampshire districts held 1,857,822 usual residents at the 2021 Census, from ONS figures on Nomis. That total does not include the Isle of Wight.' },
      { q: 'What are the largest towns in Hampshire?', a: 'By ONS built-up area: Southampton 249,620, Portsmouth 223,305, Basingstoke 117,210, Gosport 70,110 and Farnborough 60,655. The page lists thirty-five Hampshire towns above eight thousand.' },
      { q: 'What is the herd counting project?', a: 'Learners mark some animals in a model herd, look again, and estimate the total from how many marked animals reappear. They test the Lincoln-Petersen and Chapman estimates over 2,000 simulated surveys and see what happens when marking changes behaviour.' },
      { q: 'What is capture-recapture?', a: 'A way to estimate a population you cannot count directly: mark some individuals, sample again, and use the share of marked ones in the second sample to scale up to the whole.' },
      { q: 'Who looks after the New Forest?', a: 'The Verderers, a body set up under the New Forest Act of 1877, regulate commoning; the New Forest National Park Authority, since 2005, looks after the National Park, which covers 220 square miles.' },
      { q: 'Is there a classroom in Southampton or Portsmouth?', a: 'No. All teaching is live online, so a learner in Andover and one in Hayling can be in the same class without travelling.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Block coding for young children, typed Python from about ten, AI and data for teenagers, and maths for data science or Python for adults. The free lesson finds the level.' },
      { q: 'Do you teach machine learning to teenagers?', a: 'Yes. The teen AI and machine learning course covers Python, real ML models, neural networks, computer vision, language processing and generative AI.' },
      { q: 'How much are lessons?', a: 'No charge for the first lesson. Continuing is USD 100 a month for a group or USD 150 a month for private lessons, with nothing to pay to join and no minimum term.' },
      { q: 'When are Hampshire school holidays?', a: 'Hampshire County Council, Portsmouth, Southampton and academies set their own dates. We fit lesson breaks around your school\'s calendar.' }
    ]
  },

  next: {
    eyebrow: 'More UK pages',
    h2: 'Beyond Hampshire',
    html: 'City pages for <a class="cg-inline-link" href="/best-coding-class-in-southampton">Southampton</a>, <a class="cg-inline-link" href="/best-coding-class-in-portsmouth">Portsmouth</a> and <a class="cg-inline-link" href="/best-coding-class-in-winchester">Winchester</a> each have their own project; <a class="cg-inline-link" href="/coding-classes-in-dorset">Dorset</a> and <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a> are neighbouring counties. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hampshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-southampton', label: 'Southampton' },
    { href: '/best-coding-class-in-portsmouth', label: 'Portsmouth' }
  ],

  personalityCss: `
.cg-root.cg-hmp .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.1vw, 2.7rem); }
.cg-root.cg-hmp .cg-hero h1 { font-weight: 750; letter-spacing: -0.026em; line-height: 1.03; }
.cg-root.cg-hmp .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-hmp .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hmp .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-hmp .cg-table caption { font-style: italic; font-weight: 600; letter-spacing: 0.012em; }
.cg-root.cg-hmp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hmp .cg-table th { letter-spacing: 0.05em; text-transform: uppercase; }
.cg-root.cg-hmp .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-hmp .cg-callout { border-left-width: 8px; border-radius: 0 9px 9px 0; }
`,

  dossier: {
    curriculumAuthority: 'Hampshire (eleven districts under Hampshire County Council plus Portsmouth and Southampton; Isle of Wight excluded). ONS Census 2021 TS001 via Nomis: Southampton 248,922; Portsmouth 208,003; Basingstoke and Deane 185,154; New Forest 175,785; Eastleigh 136,443; Test Valley 130,492; Winchester 127,444; East Hampshire 125,744; Havant 124,208; Fareham 114,511; Rushmoor 99,756; Hart 99,408; Gosport 81,952; total 1,857,822 (our sum). ONS Census 2021 built-up areas above 8,000 (published; checked with our OA sums): Southampton 249,620 (Southampton, Eastleigh); Portsmouth 223,305 (Portsmouth, Fareham, Havant); Basingstoke 117,210; Gosport 70,110; Farnborough 60,655; Winchester 48,480; Andover 48,480; Eastleigh 48,360; Havant 46,960; Fareham 42,625; Aldershot 39,825; Fleet 37,790; Locks Heath 35,755; Waterlooville 34,775; Horndean 34,050; Chandler\'s Ford 31,975; Totton 28,090; Lee-on-the-Solent 24,315; Hedge End 23,190; Romsey 19,920; Hythe and Dibden Purlieu 19,855; Alton 17,880; South Hayling 15,305; Petersfield 14,995; Lymington 14,865; Tadley 14,760; Yateley 14,685; Ringwood 12,785; New Milton 11,870; Emsworth 11,505 (9,886 inside); West End 10,870; Whiteley 9,350; Bordon 9,350; Hook 9,065; Bursledon 8,070. Verderers of the New Forest: "The Court of Verderers is a corporate body set up under the New Forest Act of 1877. It is the last remnant of the old form of Forest government"; "The Verderers are charged with regulating commoning on the Forest". New Forest NPA: "made a National Park in 2005. Covering 220 square miles, the unique landscape is shaped by the grazing of ponies, cattle and pigs that roam freely".',
    localProject: 'Capture-recapture. Model herd N = 3,000 (ours), M = 300 marked, C = 300 seen, expected R = 30; 2,000 surveys (seed 20260926): R from 13 to 48. Lincoln-Petersen MC/R: mean 3,089, median 3,000, spread 542, 46.2 per cent within 10 per cent. Chapman (M+1)(C+1)/(R+1) - 1: mean 3,003, median 2,922, spread 507, 44.9 per cent within 10 per cent. Trap-shy (marked seen at half weight, 1,000 surveys): Chapman median 5,328; trap-happy (double weight): 1,708. Page states herd and behaviour values are ours, not the Verderers\' or NPA\'s. AI angle: an assistant applies the formula without testing the equal-catchability assumption. Lesson family: capture-recapture estimation, bias correction, assumption failure.',
    requiredMentions: [
      '1,857,822',
      'New Forest Act of 1877',
      '220 square miles',
      'ponies, cattle and pigs',
      '5,328',
      '3,089',
      'Chapman',
      'Hythe and Dibden Purlieu',
      'Lee-on-the-Solent',
      'Locks Heath'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Portsmouth, Southampton and the eleven Hampshire districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Hampshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Verderers of the New Forest: set up under the New Forest Act of 1877; regulate commoning.', url: 'https://www.verderers.org.uk/' },
      { claim: 'New Forest National Park Authority: National Park since 2005, 220 square miles, ponies, cattle and pigs roam freely.', url: 'https://www.newforestnpa.gov.uk/' }
    ],
    rejectedClaims: [
      'The number of ponies or cattle on the New Forest: no published count was read, so the page uses a model herd.',
      'How New Forest animals are actually counted or marked: not described on the pages read.',
      'Ordnance Survey grid reference lettering: the OS guide page tried returned 404, so the planned grid project was dropped; OS\'s Southampton headquarters is not used.',
      'HMS Victory and the Trafalgar signal code: no primary page describing the code was reachable, so it is not used.',
      'Hampshire school term dates: set by councils and academies; none read.',
      'Named Hampshire schools: none is named.'
    ]
  }
};
