'use strict';
// Vale of Glamorgan (cg- county page, UK cluster Phase 7, row 300). One principal area. Spine: 700 holes, 1,400 pigeons:
// what must happen, what probably happens, and does the number even fit? Anchor (read raw 26 September 2026): Cadw listed
// building record 13176, Grade I, Dovecote at Cadoxton Court, Barry: "Probably C13, restored"; "The largest of the remaining
// medieval dovecots in Glamorgan"; "Domed circular stone dovecot circa 8m high, internal diameter circa 5m; buttressed walls
// 1.1m thick, and 4.6m high to springing of corbelled dome roof which has circular opening circa 60cm across"; "Interior
// walls lined with remains of nesting holes circa 15cm square, and 45cm deep. Originally 700 nesting holes, capacity for
// 1400 pigeons"; "Graded at I as largest and best preserved of the medieval dovecots in Glamorgan".
// Our model (computed inline): pigeonhole ceil(n/700): 701 -> 2, 1,401 -> 3, 2,101 -> 4. Random choice (each bird any hole
// equally, invented behaviour): expected empty 700(1-1/700)^n: n 350 424.4 (60.6%); 700 257.3 (36.8%, about 1/e); 1,400
// 94.6 (13.5%). Simulation 2,000 trials, seed 1: n 700 mean empty 257.2, fullest hole mean 5.32, worst 8; n 1,400 94.6,
// 7.69, 11. n 1,400: holes with exactly 2 expected 189.6, with 3 or more 226.3. Wall check: circumference pi x 5 = 15.71
// m; wall to springing 72.3 m2; 700 holes of 0.15 x 0.15 m = 15.75 m2 = 21.8% of wall; 16 rows -> 43.8 per ring, 36 cm
// around, 29 cm vertically. Bug: 2 pi x 5 (diameter as radius) = 31.42 m, wall 144.5 m2.
// Lesson family: pigeonhole principle + random occupancy (balls into bins, 1/e) + sanity-checking a published count;
// screened (pigeonhole appears only as a topic on the MOG page; dovecote, nest box: 0 hits; Southampton birthday
// collisions are hashing).
// Place facts: ONS Census 2021 TS001 via Nomis: Vale of Glamorgan W06000014 131,939. ONS built-up areas wholly inside
// (published; OA sums within 16): Barry (Vale of Glamorgan) 56,605; Dinas Powis 7,890; Rhoose 6,780; Llantwit Major 5,345;
// Cowbridge 3,645; Eglwys-Brewis 3,300; Boverton 2,740; St Athan 1,595. Straddling Cardiff, Bridgend, Penarth not
// tabulated. No Welsh-language statistics. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'VALE OF GLAMORGAN', blurb: 'Barry, Dinas Powis, Rhoose, Llantwit Major and Cowbridge, and a Cadoxton dovecote lesson on 1,400 pigeons in 700 holes.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-vale-of-glamorgan',
  code: 'vog',
  accent: '#4C0B44',
  accentRationale: 'Vale of Glamorgan: a deep wood-pigeon purple from the solver (11.76:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'Vale of Glamorgan',
    eyebrow: 'Vale of Glamorgan',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Wales' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Cardiff', href: '/best-coding-class-in-cardiff' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Vale of Glamorgan',
  title: 'Coding Classes in the Vale of Glamorgan | Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across the Vale of Glamorgan: Barry, Dinas Powis, Rhoose, Llantwit Major, Cowbridge, Boverton and St Athan.',
  ogDescription: 'Vale of Glamorgan coding classes, and a Cadoxton dovecote project: 1,400 pigeons, 700 holes, one certainty, one probability and a size check, all in Python.',
  twitterDescription: 'Vale of Glamorgan coding, Python and maths for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for the Vale of Glamorgan',
    description: 'Online coding, Python, probability and mathematics for children, teenagers and adults across the Vale of Glamorgan, taught live in English with placement by level.'
  },

  h1: 'Coding classes in the Vale of Glamorgan',
  capsuleQ: 'What are the best coding classes in the Vale of Glamorgan?',
  capsule: 'At the 2021 census the Vale of Glamorgan had 131,939 residents. Barry, with a built-up area of 56,605, is by far the largest town; Dinas Powis, Rhoose, Llantwit Major and Cowbridge follow, along with Eglwys-Brewis, Boverton and St Athan. Every lesson we give is live, on video, from our teachers in India. Learners aged 6 to 67 study coding, Python and maths, as a private pupil or in a group of five to ten placed by level. It starts with a free lesson that picks the right course. The Vale project counts pigeons in a medieval dovecote. Afterwards the fee is USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'Beside Cadoxton Court in Barry stands a round stone dovecote, probably from the 13th century, which Cadw lists at Grade I as the largest and most intact medieval dovecote in Glamorgan. Inside, the walls were lined with nesting holes about 15 centimetres square and 45 deep. The record gives two numbers: originally 700 nesting holes, and capacity for 1,400 pigeons. Those two numbers hold three good problems. What is certain to happen if too many birds move in? What is likely to happen if birds choose holes at random? And could 700 holes really fit on those walls? Each question needs a different kind of maths, and this page\'s project answers all three in Python.',
  wa: 'Hello Modern Age Coders, we are in the Vale of Glamorgan and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for the Vale of Glamorgan',
    h2: 'First courses across the Vale',
    intro: 'A Year 3 pupil in Rhoose who counts birds, a Year 8 in Barry writing loops, a Year 12 in Cowbridge on WJEC A level maths, and an adult in Llantwit Major learning Python for work. Each starts with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Scratch games with birds, boxes and counting.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Counting, chance and geometry checked with code.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Serious Python for teenagers, from loops to simulations.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from nothing to working programs.' }
    ]
  },

  sections: [
    {
      id: 'vale-of-glamorgan', tint: '', eyebrow: 'The Vale in figures',
      h2: '131,939 people in the Vale',
      intro: 'The total is ONS\'s count of usual residents at the 2021 census, read on Nomis. The towns are ONS built-up areas that lie wholly inside the county.',
      body: [
        { kind: 'table', caption: 'Vale of Glamorgan built-up areas above 1,500 residents, ONS 2021', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Barry', '56,605', 'Cowbridge', '3,645'],
          ['Dinas Powis', '7,890', 'Eglwys-Brewis', '3,300'],
          ['Rhoose', '6,780', 'Boverton', '2,740'],
          ['Llantwit Major', '5,345', 'St Athan', '1,595']
        ] },
        { kind: 'p', text: 'Penarth and parts of the Cardiff and Bridgend built-up areas also reach into the county, but they cross its boundary, so they are left out. Our output-area totals agree with each published figure to within 16 people. Schools in the Vale teach the Curriculum for Wales, with WJEC GCSEs and A levels in the exam years. We have not read the council\'s holiday dates, so families tell us theirs.' },
        { kind: 'callout', h3: 'Cardiff and exam support', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a> page covers the capital. For WJEC exams, see <a class="cg-inline-link" href="/gcse-maths-and-numeracy-wales-help">GCSE Maths and Numeracy in Wales</a> and <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Vale of Glamorgan project',
      h2: '1,400 pigeons, 700 holes',
      intro: 'One certainty, one probability and one size check.',
      body: [
        { kind: 'p', text: 'Start with certainty. If 701 birds share 700 holes, at least one hole must hold two, whatever the birds do. Mathematicians call this the pigeonhole principle. The learner codes the general rule: with n birds and 700 holes, some hole holds at least n divided by 700, rounded up. So 1,400 birds could fit exactly two to a hole, but a 1,401st forces a hole to take three. No simulation is needed; the answer is guaranteed.' },
        { kind: 'table', caption: 'Our dovecote sums, 700 holes, birds choosing at random, 26 September 2026', head: ['Birds', 'Guaranteed', 'Expected empty holes', 'Fullest hole in our simulation'], rows: [
          ['350', 'Nothing shared', '424 (61%)', 'Not simulated'],
          ['700', 'Nothing shared', '257 (37%)', 'About 5, at worst 8'],
          ['1,400', 'A hole with at least 2', '95 (14%)', 'About 8, at worst 11'],
          ['1,401', 'A hole with 3', 'About 95', 'Not simulated']
        ] },
        { kind: 'p', text: 'Now probability. Suppose each bird picks any hole with equal chance; real pigeons are not so random, so this is our invented behaviour. The chance a particular hole is missed by every one of 700 birds is (699/700) to the power 700, which is about 0.368, very close to 1 divided by e. So even with exactly one bird per hole available, about 257 holes stay empty while others fill up. The learner checks the formula by simulating it 2,000 times: the average comes out at 257.2, and the fullest hole usually holds about five birds.' },
        { kind: 'p', text: 'Last, the size check. The record gives an inside diameter of about 5 metres and walls about 4.6 metres high to the start of the dome. The inside wall then has an area near 72 square metres, and 700 holes of 15 by 15 centimetres use under 16 of them, about 22 per cent, which leaves room for stone between. Sixteen rows of about 44 holes would put their centres roughly 36 centimetres apart. So the 700 is believable. The slip to catch: multiply the diameter by two pi instead of pi and the wall doubles to 144 square metres.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Put counters into egg boxes, find when two must share, then build the game in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Code the rounding-up rule, then simulate random birds in Python and count the empty holes.' },
          { h3: 'Ages 15 and up', p: 'Derive the 1 divided by e result, compare it with the simulation, and test the wall-area code.' }
        ] },
        { kind: 'callout', h3: 'The record\'s numbers, our birds', p: 'Hole count, capacity and dimensions come from Cadw. The birds\' random choices and the row layout are our assumptions, so the table explains the mathematics, not how Cadoxton\'s pigeons actually lived.' }
      ]
    },
    {
      id: 'cadoxton', tint: 'deep', eyebrow: 'Why Cadoxton Court',
      h2: 'Glamorgan\'s largest medieval dovecote',
      intro: 'What Cadw\'s record says.',
      body: [
        { kind: 'table', caption: 'Dovecote at Cadoxton Court, Barry, Cadw listed building record 13176, Grade I', head: ['Record detail', 'What it says'], rows: [
          ['Age', 'Probably 13th century, restored'],
          ['Shape', 'Domed and circular, about 8 m high, inside diameter about 5 m'],
          ['Walls', 'Buttressed, 1.1 m thick, 4.6 m high to where the dome begins'],
          ['Roof opening', 'A circular opening about 60 cm across'],
          ['Nesting holes', 'About 15 cm square and 45 cm deep; originally 700, for 1,400 pigeons'],
          ['Grade I because', 'The largest and most intact medieval dovecote in Glamorgan']
        ] },
        { kind: 'p', text: 'The same three questions run through computing. Hash tables, file storage and network addresses all put items into slots, and engineers must know what is guaranteed, what is likely, and whether the design fits. A Vale of Glamorgan learner who has separated a certainty from a probability, and checked a published number against the walls it lives on, has practised all three.' },
        { kind: 'p', text: 'Modern Age Coders is independent of Cadw. The record belongs to Cadw; the pigeon sums, and any error in them, belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing through school',
    h2: 'From egg boxes to e',
    intro: 'Year bands are only a sketch; the trial lesson settles each starting point.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Sorting and counting', p: 'Blocks that sort, count and share items into boxes.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 5 to 8', h3: 'Chance in code', p: 'Python with random numbers, counting and simple geometry.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Probability', p: 'Probability, powers and proof alongside WJEC GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Python basics and beyond', p: 'Adult Python from first steps to confident scripts.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and certainty',
    h2: 'An AI can simulate the dovecote. Will it tell you which answers are guaranteed?',
    intro: 'Some answers need proof, some need probability, and a good thinker knows which is which.',
    p1: 'Ask a chatbot how many holes stay empty and it may give one number with total confidence, blending a guaranteed fact with a random average. It rarely says which parts are certain and which only happen on average.',
    p2: 'A Vale of Glamorgan learner who has set the pigeonhole principle beside a simulation knows to ask whether an answer is proved or merely likely, from any source.',
    closer: 'Telling a proof from a probability is a clear reason for a Vale of Glamorgan teenager to keep coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons go',
    h2: 'From Cowbridge to Barry, live on screen',
    intro: 'Town or village, a home connection is enough.',
    cells: [
      { h3: 'Learners do the typing', p: 'Students build each program themselves; the tutor keeps an eye on their screen and offers a question when they get stuck.' },
      { h3: 'Welsh school years', p: 'A Boverton Year 5 or a Dinas Powis Year 11 is placed by Welsh year and progression step, and exams go by WJEC names. Teaching is in English.' },
      { h3: 'Free start', p: 'The trial lesson is complete and free, and ends with a clear suggestion.' },
      { h3: 'Classes by stage', p: 'Five to ten learners at one level, from across the UK.' },
      { h3: 'Term timetable', p: 'Twice weekly during term; holidays kept clear.' },
      { h3: 'Clock changes covered', p: 'When Britain changes its clocks, your lesson keeps its usual hour and our teachers in India move instead.' }
    ],
    spec: { title: 'Why groups go online', p: 'A small town rarely has five learners at one level free at one time. Online, a St Athan or Eglwys-Brewis learner joins peers at exactly the same stage.' }
  },

  fees: {
    h2: 'Fees in the Vale of Glamorgan',
    intro: 'Barry or Cowbridge, the fee is identical, and it matches every other country we teach outside India.',
    first: 'A full trial lesson, free, and clear advice after it.',
    group: 'Roughly eight lessons a month in a class of five to ten.',
    private: 'Roughly eight lessons a month with a personal tutor.',
    closer: 'We price in US dollars alone and never in sterling. Nothing is charged until the trial settles a course and a weekly slot, and the pricing page covers holidays, missed lessons and moving between formats.'
  },

  reviewsH2: 'Families\' Google ratings',

  book: {
    h2: 'Book a free Vale of Glamorgan lesson',
    intro: 'Tell us the learner\'s age or school year and something they enjoy. The trial might be a Scratch counting game, a first Python loop, or the Cadoxton dovecote sums.',
    success: 'Thank you. We have your Vale of Glamorgan request.'
  },

  faq: {
    h2: 'Vale of Glamorgan questions',
    intro: 'The county, the dovecote project and practical points.',
    items: [
      { q: 'How many people live in the Vale of Glamorgan?', a: 'The 2021 census counted 131,939 usual residents in the Vale of Glamorgan.' },
      { q: 'What is the largest town in the Vale of Glamorgan?', a: 'Barry, with 56,605 residents in its ONS 2021 built-up area.' },
      { q: 'What is the Cadoxton dovecote project?', a: 'Learners use Python to find what is guaranteed when birds outnumber 700 holes, how many holes random birds leave empty, and whether 700 holes fit the walls.' },
      { q: 'What is the pigeonhole principle?', a: 'If there are more items than boxes, at least one box must hold more than one item.' },
      { q: 'How many nesting holes did the Cadoxton Court dovecote have?', a: 'Cadw\'s record says originally 700, with capacity for 1,400 pigeons.' },
      { q: 'Where do the lessons take place?', a: 'Online by live video, so learners join from anywhere in the Vale.' },
      { q: 'Do you teach WJEC GCSE and A level maths?', a: 'Yes, and computing too. We teach for understanding and do not promise grades.' },
      { q: 'What ages can learn?', a: 'Anyone from 6 to 67, from first coding games to adult Python.' },
      { q: 'What are the fees?', a: 'The first lesson is free; then USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons continue in school holidays?', a: 'No. Send your holiday weeks and we skip them.' }
    ]
  },

  next: {
    eyebrow: 'Close to the Vale',
    h2: 'More pages for South Wales',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a> has a city page, <a class="cg-inline-link" href="/coding-classes-in-bridgend">Bridgend</a> lifts loads with water and gravity, and <a class="cg-inline-link" href="/coding-classes-in-rhondda-cynon-taf">Rhondda Cynon Taf</a> scales a stone arch. Every Welsh area is linked from the <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest of the country.',
    waLabel: 'Reach us on WhatsApp'
  },

  footerHeading: 'Vale of Glamorgan and South Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-cardiff', label: 'Cardiff' },
    { href: '/gcse-maths-and-numeracy-wales-help', label: 'GCSE Maths and Numeracy in Wales' }
  ],

  personalityCss: `
.cg-root.cg-vog .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-vog .cg-hero h1 { font-weight: 730; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-vog .cg-capsule { border-top: 3px solid var(--cg-accent); border-bottom: 3px solid var(--cg-accent); padding: 0.9rem 0; }
.cg-root.cg-vog .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-vog .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-vog .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-vog .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vog .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-vog .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-vog .cg-callout { border-left-width: 5px; border-radius: 0 6px 6px 0; }
`,

  dossier: {
    curriculumAuthority: 'Vale of Glamorgan (W06000014). ONS Census 2021 TS001 via Nomis: 131,939. ONS built-up areas wholly inside (published; OA sums within 16): Barry (Vale of Glamorgan) 56,605; Dinas Powis 7,890; Rhoose 6,780; Llantwit Major 5,345; Cowbridge 3,645; Eglwys-Brewis 3,300; Boverton 2,740; St Athan 1,595. Straddling (not tabulated): Cardiff, Bridgend, Penarth. Cadw listed building record 13176, Grade I, Dovecote at Cadoxton Court: "Probably C13, restored"; "Domed circular stone dovecot circa 8m high, internal diameter circa 5m; buttressed walls 1.1m thick, and 4.6m high to springing"; "nesting holes circa 15cm square, and 45cm deep. Originally 700 nesting holes, capacity for 1400 pigeons"; "largest and best preserved of the medieval dovecots in Glamorgan".',
    localProject: 'Pigeonhole ceil(n/700): 701 -> 2, 1,401 -> 3, 2,101 -> 4. Random: expected empty 700(1-1/700)^n: 350 424.4; 700 257.3 (1/e); 1,400 94.6. Sim 2,000 seed 1: 700 257.2 empty, fullest 5.32, worst 8; 1,400 94.6, 7.69, 11. Wall: 15.71 m round, 72.3 m2, holes 15.75 m2 = 21.8%; 16 rows 43.8 per ring, 36 cm, 29 cm. Slip 2 pi d: 144.5 m2. Lesson family: pigeonhole + random occupancy + sanity check of a published count.',
    requiredMentions: [
      'Dinas Powis',
      'Rhoose',
      'Llantwit Major',
      'Cowbridge',
      'Eglwys-Brewis',
      'Boverton',
      'St Athan',
      'Cadoxton Court',
      'dovecote',
      'nesting holes'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Vale of Glamorgan, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 13176: Dovecote at Cadoxton Court.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=13176' }
    ],
    rejectedClaims: [
      'How the Cadoxton pigeons chose holes, or the real row layout: not in the record; our assumptions.',
      'Whether holes extend into the dome: not stated; the wall check uses the height to springing only.',
      'Barry Docks sliding bridge (Cadw 16562): considered, not used.',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.'
    ]
  }
};
