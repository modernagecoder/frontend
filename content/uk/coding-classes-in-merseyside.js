'use strict';
// Merseyside (cg- county index, UK cluster Phase 7, row 239). Five metropolitan boroughs: Liverpool, Knowsley, Sefton,
// St Helens, Wirral. Spine: a specification turned into tests, from the Rainhill Trials of October 1829 (Rainhill parish
// is in St Helens: ONS OA21 to PAR22 to LTLA22 lookup, 26 September 2026). Source: Samuel Smiles, The Life of George
// Stephenson and of his Son Robert Stephenson (Project Gutenberg 46229, plain text read raw 26 September 2026):
// footnote 70 lists the eight conditions ("The engine must effectually consume its own smoke"; "if of six tons' weight,
// must be able to draw after it, day by day, twenty tons' weight (including the tender and water-tank) at ten miles an
// hour, with a pressure of steam on the boiler not exceeding fifty pounds to the square inch"; six wheels, fifteen feet
// to the chimney top; "must not weigh more than six tons; but an engine of less weight would be preferred on its drawing
// a proportionate load"; "if of only four and a half tons, then it might be put on only four wheels"; "A mercurial gauge
// must be affixed"; delivery "not later than the 1st of October, 1829"). Trial account: "a level piece of railroad,
// about two miles in length"; "twenty trips, or equal to a journey of seventy miles"; average "not under ten miles an
// hour"; entrants Novelty, Sanspareil, Rocket, Perseverance; Rocket on 8 October: steam raised in fifty-seven minutes,
// "about thirteen tons" of wagons, first ten trips 35 miles in 1 h 48 min, second ten 2 h 3 min, maximum 29 mph,
// average "fifteen miles an hour"; Sanspareil four hundredweight over the four-wheeled limit, stopped at the eighth trip,
// about 14 mph; Novelty "three tons and one hundred weight", bellows and then a feed pipe failed; Perseverance "unable to
// move at more than five or six miles an hour". Rocket "weighed only 4-1/2 tons when loaded with its coke and water".
// P. Ewart would "eat a stewed engine-wheel for his breakfast". Science Museum Group collection returned 403 (logged).
// Our test model (scratchpad mer/rainhill.py): Rocket 70 miles in 3 h 51 min = 18.18 mph; with the 57 minutes of
// raising steam 14.58 mph; first ten 19.44, second ten 17.07. Proportionate load read literally = 20/6 x weight:
// 15.0 t for 4.5 t, so Rocket's 13 t fails the literal test that the judges' verdict contradicts. Novelty 10.17 t
// needed, about 7 t drawn. 20 trips x 2 miles = 40, not 70: a trip is there and back, 3.5 miles. A missing figure
// crashed our first speed test (KeyError) until tests could answer "cannot decide".
// Lesson family: specification to acceptance tests; ambiguity, undecidable cases and a failing test against an accepted
// result; screened (acceptance test, Rainhill: 0 hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (our sum 1,423,287); ONS built-up areas checked
// against our OA sums (Southport straddles West Lancashire; Ashton-in-Makerfield mostly Wigan, left out). Term dates: none.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'MERSEYSIDE', blurb: 'Five boroughs around the Mersey, and a Rainhill lesson: turn the 1829 locomotive rules into tests and see what they catch.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-merseyside',
  code: 'mer',
  accent: '#6B4110',
  accentRationale: 'Merseyside: a dark ochre from the solver (7.08:1 on the darkest paper tint), a nod to Rocket\'s yellow darkened for text, clear of the Derbyshire and Essex browns',
  pageType: 'governorate',
  place: {
    name: 'Merseyside',
    eyebrow: 'Merseyside',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'North West England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Liverpool', href: '/best-coding-class-in-liverpool' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Merseyside',
  title: 'Coding Classes in Merseyside | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Merseyside, from Liverpool, Birkenhead and St Helens to Southport, Wallasey, Bootle, Crosby and Kirkby.',
  ogDescription: 'Coding classes for every Merseyside borough, and a Rainhill project: turn the 1829 locomotive rules into Python tests, run them on four engines, and question the test Rocket fails.',
  twitterDescription: 'Merseyside coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Merseyside',
    description: 'Ability-placed online coding, Python, computer science, testing and mathematics for children, teenagers and adults across Merseyside, taught live in English.'
  },

  h1: 'Coding classes in Merseyside',
  capsuleQ: 'What are the best coding classes in Merseyside?',
  capsule: 'Merseyside is five boroughs: Liverpool, Wirral, Sefton, St Helens and Knowsley. The 2021 Census found 1,423,287 people across them, a total we added up ourselves from the five published counts. Liverpool\'s built-up area passes half a million, and Birkenhead, St Helens, Southport and Wallasey follow. Lessons are live over video, taught from India, and learners are grouped by the level they have reached rather than their age. We take students from 6 to 67 in groups of five to ten or one-to-one, for coding, Python, computer science and maths. The Merseyside project goes back to the locomotive trials at Rainhill in 1829. Trying a lesson is free, and continuing costs USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'In October 1829, on a level stretch of line at Rainhill, now in the borough of St Helens, four locomotives competed to prove that steam could work the new Liverpool and Manchester Railway. The directors had published eight conditions in advance, and Samuel Smiles printed them in his life of the Stephensons. A written set of conditions that a machine must meet is exactly what programmers call a specification, and the way to check one is to turn it into tests. This page\'s project does that in Python, runs the tests on the four engines using the figures Smiles reports, and finds that the hardest part is not writing the code but deciding what the words meant.',
  wa: 'Hello Modern Age Coders, could we book a free lesson for a learner in Merseyside, please?',

  picks: {
    eyebrow: 'Courses for Merseyside',
    h2: 'Where Merseyside learners start out',
    intro: 'An eight-year-old in Formby building a first game, a Year 10 in Wallasey taking GCSE Computer Science, a Year 13 in Crosby ready for real Python, and a parent in Huyton learning to code after work. Every one of them begins with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, a first step towards games with rules that are checked every turn.' },
      { course: 'gcse-computer-science-course', band: 'GCSE years', note: 'GCSE Computer Science for AQA, OCR and Edexcel, including building a test plan and naming syntax, logic and runtime errors precisely.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from beginner to advanced for teenagers, through games, automation, data and AI projects.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from the first line, for adults who want programs they can trust and check.' }
    ]
  },

  sections: [
    {
      id: 'merseyside', tint: '', eyebrow: 'Merseyside in figures',
      h2: '1,423,287 people in five boroughs',
      intro: 'Borough counts come from the 2021 Census on Nomis, and the total is our sum. Towns are ONS built-up areas, checked against our own addition of census output areas.',
      body: [
        { kind: 'table', caption: 'Merseyside\'s twelve largest built-up areas, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Liverpool', '506,565', 'Bebington', '57,600'],
          ['Birkenhead', '109,835', 'Bootle', '53,720'],
          ['St Helens', '107,680', 'Crosby', '50,215'],
          ['Southport', '94,440', 'Kirkby', '45,560'],
          ['Wallasey', '85,610', 'Prescot', '39,225'],
          ['Huyton with Roby', '59,845', 'Heswall', '29,075']
        ] },
        { kind: 'p', text: 'The ONS Liverpool area reaches into Knowsley and Sefton, which is why it is larger than Liverpool the borough, at 486,088. Southport\'s figure includes about 1,460 people over the border in West Lancashire; we count it here because nearly all of it is in Sefton. After the table come Newton-le-Willows, Formby, Maghull, Litherland, Haydock and West Kirby. Wirral is the second-largest borough at 320,199 and Knowsley the smallest at 154,519. Each of the five councils and many academy trusts set school holidays; we did not read their calendars, so breaks are arranged family by family.' },
        { kind: 'callout', h3: 'Liverpool has a page of its own', p: 'The <a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool</a> page has a different project, on the tides of the Mersey. For Wirral families thinking about entrance tests there is also our <a class="cg-inline-link" href="/11-plus-maths-tuition-wirral">Wirral 11+ maths</a> page.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Merseyside project',
      h2: 'Turning the Rainhill rules into tests',
      intro: 'Eight conditions from 1829, four engines, and a test suite that finds problems in the rules as well as the machines.',
      body: [
        { kind: 'p', text: 'The conditions, as Smiles prints them, include: the engine "must effectually consume its own smoke"; if it weighs six tons it must draw twenty tons "(including the tender and water-tank) at ten miles an hour"; it must not weigh more than six tons, but a lighter engine "would be preferred on its drawing a proportionate load"; four wheels are allowed only at four and a half tons; and "a mercurial gauge must be affixed". The trial itself was twenty trips on a level piece of line "about two miles in length", averaging at least ten miles an hour. The learner writes one small Python function for each rule that can be checked from numbers, and records what Smiles says each engine did.' },
        { kind: 'table', caption: 'Our tests run on the figures in Smiles\'s account, 26 September 2026', head: ['Engine', 'All 20 trips', 'Weight rule', 'Speed of 10 mph', 'Load, read literally'], rows: [
          ['Rocket', 'Pass', 'Pass (4.5 tons)', 'Pass', 'Fail: 13 tons against 15'],
          ['Sanspareil', 'Fail: stopped at trip 8', 'Fail: over the four-wheel limit', 'Pass (about 14 mph)', 'Cannot decide'],
          ['Novelty', 'Fail: pipe burst', 'Pass (about 3 tons)', 'Cannot decide', 'Fail: about 7 tons against 10.2'],
          ['Perseverance', 'Fail: withdrawn', 'Cannot decide', 'Fail: 5 or 6 mph', 'Cannot decide']
        ] },
        { kind: 'p', text: 'Three things go wrong on the way, and each one is the real lesson. First, the very first run crashed: Smiles gives no times for Novelty\'s trial, and a test that expected a number fell over. A well-built test has three answers, not two: pass, fail, or cannot decide from the evidence. Second, the arithmetic of the course does not add up. Twenty trips on two miles of line is forty miles, not the seventy Smiles states. The account of Rocket\'s run settles it: each trip went "backward and forward", so a trip was a round journey of three and a half miles.' },
        { kind: 'p', text: 'Third, and most interesting, our test fails Rocket, the engine that won. Reading "a proportionate load" as straight proportion, a 4.5-ton engine should draw 15 tons, and Rocket drew "about thirteen tons" of wagons. But the judges said Rocket met every condition. When a test fails a result that everyone accepted, the first suspect is the test. Condition 2 counts the tender and water tank inside the twenty tons, and our test left them out; the book does not say how the judges set the load. Speed has the same trap. Rocket\'s seventy miles took 3 hours 51 minutes of running, 18.18 miles an hour; add the 57 minutes spent raising steam and it becomes 14.58, close to the fifteen Smiles reports. Both pass, but a specification has to say which clock counts.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Write three rules for a toy car race, test each car against them on paper, and argue about the rule that could be read two ways.' },
          { h3: 'Ages 11 to 15', p: 'Store the four engines in Python dictionaries, write a function per rule, and print a pass or fail table like the one above.' },
          { h3: 'Ages 15 and up', p: 'Add a third answer for missing data, write the tests with a proper testing framework, and document every assumption the rules forced you to make.' }
        ] },
        { kind: 'callout', h3: 'Whose figures these are', p: 'The conditions and every figure for the engines come from Smiles\'s book, which was written long after the event and is one account among several. The tests, their readings of the rules and the pass or fail results are ours, made for teaching. They are not a new verdict on the trials.' }
      ]
    },
    {
      id: 'rainhill', tint: 'deep', eyebrow: 'Why Rainhill',
      h2: 'Four engines, one level track, and a rule book',
      intro: 'The Merseyside link, as Samuel Smiles tells it.',
      body: [
        { kind: 'table', caption: 'The Rainhill Trials in Smiles\'s account', head: ['Point', 'What Smiles writes'], rows: [
          ['Deadline', 'Engines to be delivered, complete and ready, at the Liverpool end of the railway by 1 October 1829; the start was put back to 6 October.'],
          ['Entrants', 'Novelty, Sanspareil, Rocket and Perseverance; a horse-worked machine was not admitted.'],
          ['8 October', 'Rocket raised steam in fifty-seven minutes, then pulled about thirteen tons through all twenty trips, touching twenty-nine miles an hour.'],
          ['Other engines', 'Novelty\'s bellows and then a pipe failed; Sanspareil stopped at the eighth trip; Perseverance could not exceed five or six miles an hour.'],
          ['The doubters', 'One Liverpool critic said that if an engine ever reached ten miles an hour he would eat a stewed engine-wheel for his breakfast.']
        ] },
        { kind: 'p', text: 'Rainhill is a good place to learn that a specification is a promise written in words, and that words can be read more than one way. Every software project since has met the same problem: a customer writes what they want, a programmer writes tests from it, and the disagreements show up only when a test fails. A Merseyside student who has found three flaws in an 1829 rule book has practised the most useful habit in software testing, which is asking what the rule actually means before deciding who failed it.' },
        { kind: 'p', text: 'We have no connection with St Helens Council, any Merseyside council, the Science Museum Group or Project Gutenberg. Smiles\'s words are his; the tests and any error in them are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool</a> has its own page, with <a class="cg-inline-link" href="/coding-classes-in-lancashire">Lancashire</a> to the north, <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> at the other end of the old railway, and <a class="cg-inline-link" href="/coding-classes-in-cheshire">Cheshire</a> and <a class="cg-inline-link" href="/best-coding-class-in-chester">Chester</a> to the south.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From game rules to test suites',
    intro: 'Where a learner starts is decided in the free lesson. Age gives a hint, and ability settles it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Rules in a game', p: 'Block coding where the game checks a rule every turn: collect three keys, then the door opens.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 9 to 13', h3: 'Does it work?', p: 'Typed Python and logic puzzles, where every program is tried on examples before it is called finished.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 13 to 18', h3: 'Tested code', p: 'GCSE Computer Science and full Python, with test plans, awkward inputs and clear names for errors.', courses: ['gcse-computer-science-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Programs you trust', p: 'Python for adults, from basics to automation, with checks built in from the first week.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and specifications',
    h2: 'An AI can write tests from a rule book. Who decides what the rules mean?',
    intro: 'Generated tests inherit every guess made about unclear wording.',
    p1: 'Give an assistant the eight Rainhill conditions and ask for Python tests, and it will produce tidy code in seconds. It will also quietly choose a reading of "a proportionate load", of "trip" and of which minutes count towards the average speed, and its tests will pass or fail engines on those unspoken choices. If one of its tests fails Rocket, it will not usually stop to wonder whether the test is wrong.',
    p2: 'People who work with AI-written code spend much of their time on exactly this: checking what the tests assume, and asking the person who wrote the rules what they meant. A Merseyside learner who has argued with Smiles\'s figures knows that a green or red result is only as good as the reading behind it.',
    closer: 'So a young person on Merseyside should learn to code in 2026 to be able to question a test as well as pass one.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'The practical side',
    h2: 'Both banks of the Mersey, no crossing needed',
    intro: 'Getting from Wirral to Liverpool or from Southport to St Helens for a weekly class takes time. Online lessons take none.',
    cells: [
      { h3: 'Lessons at home', p: 'A bedroom in Bootle, a table in Heswall, a spare room in Haydock. The teacher shares a screen and the learner does the typing.' },
      { h3: 'The same school words', p: 'Year groups, key stages, GCSEs and A levels are named the way Merseyside schools name them, and everything is taught in English.' },
      { h3: 'A free first lesson', p: 'A real lesson with real work, then a straight recommendation. We do not ask for card details.' },
      { h3: 'Classmates at your level', p: 'Five to ten learners at the same stage, from across Merseyside, the UK and other countries.' },
      { h3: 'Holidays that match yours', p: 'Two lessons a week is usual, and we pause for the holidays your own school sets.' },
      { h3: 'Your clock, not ours', p: 'We give every slot in UK time and keep it steady through the clock changes; the teacher works in India time, several hours ahead, and adjusts.' }
    ],
    spec: { title: 'Why groups follow level', p: 'Five learners at one stage who are free on the same evening are rare even in a big borough. Grouping by level lets a learner from Maghull or Newton-le-Willows join a class that suits them.' }
  },

  fees: {
    h2: 'Fees on Merseyside',
    intro: 'Kirkby or West Kirby, the price is identical, and it is the price families pay everywhere we teach outside India.',
    first: 'A full lesson of genuine work, finishing with advice on level and course.',
    group: 'Around eight lessons a month, in a group of five to ten at the same level.',
    private: 'Around eight lessons a month, one teacher with one learner.',
    closer: 'Everything is charged in US dollars; there are no sterling prices. Nothing is billed until the free lesson has agreed a course and a weekly time, and the pricing page explains pauses, missed lessons and moving between group and one-to-one.'
  },

  reviewsH2: 'Reviews from families, on Google',

  book: {
    h2: 'Ask for a free Merseyside lesson',
    intro: 'Give us an age or school year and something the learner likes. A first lesson might be a Scratch game with rules, a first Python test, or the Rainhill engines on this page.',
    success: 'Thank you. We have received your Merseyside request.'
  },

  faq: {
    h2: 'Merseyside questions',
    intro: 'The boroughs, the Rainhill project and how the lessons work.',
    items: [
      { q: 'How many people live in Merseyside?', a: 'The five boroughs had 1,423,287 usual residents at the 2021 Census, by our own sum of the ONS figures on Nomis: Liverpool 486,088, Wirral 320,199, Sefton 279,233, St Helens 183,248 and Knowsley 154,519.' },
      { q: 'What are the largest towns in Merseyside?', a: 'By ONS built-up area: Liverpool 506,565, Birkenhead 109,835, St Helens 107,680, Southport 94,440 and Wallasey 85,610.' },
      { q: 'What is the Rainhill project?', a: 'Learners turn the 1829 Rainhill conditions, as printed by Samuel Smiles, into Python tests, run them on Rocket, Sanspareil, Novelty and Perseverance, and investigate why a literal reading of one rule fails the winning engine.' },
      { q: 'Is Rainhill in Merseyside?', a: 'Yes. Rainhill is a parish in the borough of St Helens, according to the ONS lookup of census areas to parishes and councils.' },
      { q: 'What is a software test?', a: 'A small piece of code that checks whether another piece of code, or here a machine\'s recorded performance, meets a stated rule. Good tests can also answer that the evidence is not enough to decide.' },
      { q: 'Are the lessons in person anywhere on Merseyside?', a: 'No. Every class is live online, so no one needs the ferry, the tunnel or a bus to attend.' },
      { q: 'What ages can learn with you?', a: 'Anyone from 6 to 67. Younger children start with block coding, Python usually begins at about ten, teenagers go on to GCSE work and advanced Python, and adults take Python or automation. The free lesson decides the level.' },
      { q: 'Do you teach GCSE Computer Science?', a: 'Yes, for AQA, OCR and Edexcel, including test plans and naming errors precisely. We help students learn; we do not promise particular grades.' },
      { q: 'What are the fees?', a: 'The first lesson is free. Group classes then cost USD 100 a month and one-to-one classes USD 150 a month. There is no joining fee and no minimum term.' },
      { q: 'Do you break for Merseyside school holidays?', a: 'Yes, if you want to. The five councils and academy trusts each publish their own dates, and we plan pauses around your school\'s.' }
    ]
  },

  next: {
    eyebrow: 'Beyond Merseyside',
    h2: 'Neighbouring pages',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool</a> for the city, then <a class="cg-inline-link" href="/coding-classes-in-lancashire">Lancashire</a>, <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> and <a class="cg-inline-link" href="/coding-classes-in-cheshire">Cheshire</a> around it. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest of the country.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Merseyside and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-liverpool', label: 'Liverpool' },
    { href: '/coding-classes-in-cheshire', label: 'Cheshire' }
  ],

  personalityCss: `
.cg-root.cg-mer .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.4vw, 3rem); }
.cg-root.cg-mer .cg-hero h1 { font-weight: 800; letter-spacing: -0.03em; line-height: 1.0; }
.cg-root.cg-mer .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-mer .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mer .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.022em; }
.cg-root.cg-mer .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-mer .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mer .cg-table th { letter-spacing: 0.04em; font-weight: 700; text-transform: uppercase; font-size: 0.82rem; }
.cg-root.cg-mer .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-mer .cg-callout { border-left-width: 7px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Merseyside metropolitan county: Liverpool, Knowsley, Sefton, St Helens, Wirral. ONS Census 2021 TS001 via Nomis: Liverpool 486,088; Wirral 320,199; Sefton 279,233; St Helens 183,248; Knowsley 154,519; our sum 1,423,287. ONS built-up areas (published; our OA sums agree except Southport 94,440 with 92,978 inside Sefton): Liverpool 506,565 (Knowsley, Liverpool, Sefton); Birkenhead 109,835; St Helens 107,680; Southport 94,440; Wallasey 85,610; Huyton with Roby 59,845; Bebington 57,600; Bootle 53,720; Crosby 50,215; Kirkby 45,560; Prescot 39,225; Heswall 29,075; Newton-le-Willows 24,650; Formby 22,890; Maghull 20,370; Litherland 18,750; Haydock 16,140; West Kirby 13,380. Ashton-in-Makerfield (26,375, 4,626 inside St Helens) excluded. ONS OA21 to PAR22 lookup: Rainhill parish in St Helens. Samuel Smiles, The Life of George Stephenson and of his Son Robert Stephenson (Project Gutenberg 46229): footnote 70 conditions 1 to 8 (smoke; six tons draws twenty tons including tender and water-tank at ten mph, steam not over fifty pounds; two safety valves; springs, six wheels, fifteen feet; not more than six tons, lighter engine preferred on a proportionate load, four and a half tons may use four wheels; mercurial gauge; delivery by 1 October 1829; a price limit). Trial: "a level piece of railroad, about two miles in length"; "twenty trips, or equal to a journey of seventy miles"; average "not under ten miles an hour"; start moved to 6 October; Rocket 8 October: fifty-seven minutes to raise steam, "about thirteen tons", 35 miles in 1 h 48 min then 2 h 3 min, max 29 mph, average fifteen; Sanspareil four hundredweight over the four-wheeled limit, eighth trip, about fourteen mph; Novelty three tons one hundredweight, bellows then pipe failed; Perseverance five or six mph; Rocket "weighed only 4-1/2 tons when loaded with its coke and water"; P. Ewart "stewed engine-wheel".',
    localProject: 'Specification to acceptance tests. Python functions per checkable condition over Smiles\'s engine records, three-valued (pass, fail, cannot decide). Results: Rocket pass complete/weight/speed, literal proportional load fail (13 t vs 20/6 x 4.5 = 15.0 t); Sanspareil fail complete (trip 8) and four-wheel limit, speed pass (14), load undecided; Novelty fail complete, weight pass (3.05 t), speed undecided, load fail (about 7 t vs 10.17 t); Perseverance fail complete and speed (5.5), others undecided. Rocket speeds: 70 miles / 3 h 51 min = 18.18 mph; with 57 min steam raising 14.58 mph; first ten 19.44, second ten 17.07. Course: 20 x 2 = 40 not 70; a trip = there and back, 3.5 miles. First version crashed with KeyError on missing Novelty times. Page labels tests and readings as ours, not a verdict. AI angle: generated tests silently pick readings of ambiguous rules. Lesson family: specification to tests, ambiguity, undecidable cases, suspect the test when it fails an accepted result.',
    requiredMentions: [
      '1,423,287',
      'Rainhill',
      'Sanspareil',
      'consume its own smoke',
      'mercurial gauge',
      'stewed engine-wheel',
      'Huyton with Roby',
      'Newton-le-Willows',
      '14.58',
      'Litherland',
      'Bebington'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the five Merseyside boroughs, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Merseyside towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area and output area to parish lookups (Rainhill in St Helens).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Samuel Smiles, The Life of George Stephenson and of his Son Robert Stephenson: Rainhill conditions, entrants, trial figures, Rocket weight.', url: 'https://www.gutenberg.org/ebooks/46229' }
    ],
    rejectedClaims: [
      'Science Museum Group collection pages for Rocket: 403, not retried; no museum facts are used.',
      'The prize amount and the engine price limit in the conditions: money figures, left out.',
      'How the judges actually set each engine\'s load, and whether the tender was counted: not stated by Smiles, so presented as open.',
      'Rocket\'s wheel arrangement: not given in the passages read, so the wheel test is not applied to it.',
      'Modern accounts of the trial distances (for example exact course length): not read; only Smiles\'s figures are used.',
      'Merseyside school term dates: none read.',
      'Named Merseyside schools or grammar school tests: none named on this page.'
    ]
  }
};
