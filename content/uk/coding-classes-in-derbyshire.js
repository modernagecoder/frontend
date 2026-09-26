'use strict';
// Derbyshire (cg- county index, UK cluster Phase 7, row 227). Ceremonial Derbyshire: eight districts under Derbyshire
// County Council plus Derby. Spine: one extra tooth. Cromford Mills (Arkwright Society; read raw 26 September 2026):
// "Built in 1771 by Sir Richard Arkwright Cromford Mills was the world's first successful water-powered cotton
// spinning mill"; the water frame; Arkwright "known as the 'Father of the Factory System' for launching the world's
// first production line". Derwent Valley Mills World Heritage Site: "Snaking 15 miles down the river valley from
// Matlock Bath to Derby", "some of the world's first 'modern' factories". Our run (26 September 2026), gear teeth
// chosen by us for teaching: a 96-tooth wheel with a 24-tooth pinion (gcd 24) repeats after 96 contacts and each
// pinion tooth only ever meets 4 of the 96 wheel teeth; with 25 teeth (gcd 1) the pattern repeats after 2,400
// contacts (25 wheel turns, 96 pinion turns) and every pinion tooth meets all 96; ratio 3.840 instead of 4.000;
// other coprime choices 23 (4.174), and 97 over 24 (4.042). Further pairs: 60/24 (gcd 12, 5 of 60 met) against
// 60/23 (1,380 contacts, all 60); 48/18 against 48/17; 100/40 against 100/41 (4,100 contacts). Lesson family: gcd
// and least common multiple applied to gear wear (the hunting-tooth idea), with simulation checked against the
// formula; screened 26 September 2026 (lcm, hunting tooth: 0 hits; gcd appears elsewhere only as Euclid's method).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (1,055,996, our sum of nine councils); ONS built-up
// areas with our OA check (Burton upon Trent excluded, Staffordshire; Hadfield 9,910 of 16,275 in High Peak, printed
// with a note; Derby BUA spans Derby, Amber Valley and South Derbyshire). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'DERBYSHIRE', blurb: 'Nine councils, thirty-seven towns, and the arithmetic of mill gears: why one extra tooth makes a machine last longer.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-derbyshire',
  code: 'dbs',
  accent: '#7A502B',
  accentRationale: 'Derbyshire: a gritstone ochre brown from the solver (5.62:1 on the darkest paper tint), more orange than the other UK county browns',
  pageType: 'governorate',
  place: {
    name: 'Derbyshire',
    eyebrow: 'County of Derbyshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'East Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Derby', href: '/best-coding-class-in-derby' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Derbyshire',
  title: 'Coding Classes in Derbyshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, maths and automation classes across Derbyshire, from Derby and Chesterfield to Ilkeston, Long Eaton, Swadlincote, Buxton and Matlock.',
  ogDescription: 'Coding classes for every Derbyshire town, and a Derwent Valley project: simulate mill gears and find out why one extra tooth spreads the wear across the whole wheel.',
  twitterDescription: 'Derbyshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Derbyshire',
    description: 'Ability-placed online coding, Python, mathematics, automation and AI for children, teenagers and adults across Derby and the eight Derbyshire districts, taught live in English.'
  },

  h1: 'Coding classes in Derbyshire',
  capsuleQ: 'What are the best coding classes in Derbyshire?',
  capsule: 'Derbyshire is Derby plus eight districts, 1,055,996 people at the 2021 Census. Derby\'s built-up area is the largest place by far, spilling into two neighbouring districts, followed by Chesterfield, then the Erewash towns of Ilkeston and Long Eaton, Swadlincote in the south, and the Peak towns of Buxton, Glossop and Matlock. We teach every one of them the same way: a teacher in India teaches live over video, learners are grouped by what they can already do rather than by age, and we welcome everyone from 6 to 67 in groups of five to ten or one to one. On offer are programming, Python, maths, automation and AI. The Derbyshire project begins in the Derwent Valley mills. There is no charge for the first lesson; group lessons then cost USD 100 a month and private lessons USD 150.',
  lead: 'Cromford Mills, built by Richard Arkwright in 1771, describes itself as the world\'s first successful water-powered cotton spinning mill, and the Derwent Valley below it became a string of early factories stretching fifteen miles to Derby. Every one of those mills ran on gears, and gears hide a lovely piece of arithmetic. Pair a 96-tooth wheel with a 24-tooth pinion and each pinion tooth only ever touches four of the wheel\'s teeth, round and round, so any damage keeps hitting the same spots. Give the pinion one extra tooth, 25, and every tooth meets every other tooth before the pattern repeats. This page\'s project simulates both, and finds the rule behind it: greatest common divisors and least common multiples.',
  wa: 'Hello Modern Age Coders, I would like a free lesson for a learner in Derbyshire.',

  picks: {
    eyebrow: 'Courses for Derbyshire',
    h2: 'Four courses Derbyshire learners start with',
    intro: 'A seven-year-old in Belper building gadgets out of boxes, a Year 7 in Glossop who likes number puzzles, a Year 10 in Dronfield learning Python seriously, and an engineer in Derby who wants to automate spreadsheets. Each begins with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game to Minecraft and Roblox, with kid-safe AI and a first taste of Python.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, with factors, multiples, fractions and probability built as Python projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Beginner to advanced Python for teenagers through games, automation, data and AI projects.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Python automation for working adults: scripts, scraping, browser automation and applied AI.' }
    ]
  },

  sections: [
    {
      id: 'derbyshire', tint: '', eyebrow: 'Derbyshire\'s numbers',
      h2: 'Nine councils, 1,055,996 people, from the Peak to the Trent',
      intro: 'Each council\'s total is its 2021 Census count on Nomis. Towns are ONS built-up areas, each compared with our own sum of census output areas so that places crossing the county line are flagged.',
      body: [
        { kind: 'table', caption: 'Derby and the eight Derbyshire districts, usual residents at Census 2021, largest first', head: ['Council', 'Usual residents', 'Main towns'], rows: [
          ['Derby', '261,364', 'Derby'],
          ['Amber Valley', '126,206', 'Heanor, Ripley, Belper, Alfreton'],
          ['Erewash', '112,906', 'Ilkeston, Long Eaton, Sandiacre'],
          ['South Derbyshire', '107,205', 'Swadlincote, Hilton'],
          ['Chesterfield', '103,569', 'Chesterfield, Staveley'],
          ['North East Derbyshire', '102,001', 'Dronfield, Clay Cross, Killamarsh, Eckington'],
          ['High Peak', '90,933', 'Buxton, Glossop, New Mills, Chapel-en-le-Frith'],
          ['Bolsover', '80,272', 'Shirebrook, Bolsover, Clowne'],
          ['Derbyshire Dales', '71,540', 'Matlock, Ashbourne']
        ] },
        { kind: 'p', text: 'Derby\'s built-up area held 275,575 people, more than the city council\'s 261,364, because it runs into Amber Valley and South Derbyshire. Chesterfield\'s likewise reaches into North East Derbyshire. The rest of the county splits into very different landscapes: former mining towns in the east, the Erewash towns towards Nottingham, and the Peak District towns in the north-west, where Buxton, Glossop and Matlock are separated by moorland rather than suburbs.' },
        { kind: 'table', caption: 'The thirty largest Derbyshire built-up areas, 2021 Census; Burton upon Trent, a Staffordshire town, is left out', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Derby', '275,575', 'Matlock', '11,990'],
          ['Chesterfield', '76,420', 'Shirebrook', '11,575'],
          ['Ilkeston', '38,725', 'Bolsover', '11,225'],
          ['Long Eaton', '37,820', 'Brimington', '11,075'],
          ['Swadlincote', '34,565', 'North Wingfield and Holmewood', '9,540'],
          ['Heanor', '24,260', 'Sandiacre', '9,370'],
          ['Dronfield', '21,160', 'New Mills', '9,200'],
          ['Ripley', '20,180', 'Killamarsh', '9,080'],
          ['Buxton', '20,050', 'Clay Cross', '8,920'],
          ['Belper', '19,075', 'Ashbourne', '8,855'],
          ['Glossop', '17,820', 'Alfreton', '8,795'],
          ['Hadfield', '16,275', 'Hilton', '8,275'],
          ['South Normanton and Pinxton', '16,025', 'Clowne', '7,760'],
          ['Staveley', '15,145', 'Eckington', '7,435'],
          ['Somercotes and Swanwick', '15,100', 'Breaston and Draycott', '7,395']
        ] },
        { kind: 'p', text: 'Seven more places are between five and seven and a half thousand: Woodville, Chapel-en-le-Frith, Borrowash, Wingerworth, West Hallam, Creswell, and Overseal and Castle Gresley. A few rows reach across the county boundary. Hadfield has about 9,900 of its 16,275 residents in High Peak and the rest in Greater Manchester; Swadlincote and Woodville edge into Leicestershire; New Mills touches Cheshire. The councils and academies set their own school calendars, which we did not read, so lesson breaks are agreed with each family.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Derbyshire project',
      h2: 'Why one extra tooth makes a gear last longer',
      intro: 'Tooth counts we chose for teaching, a simulation of every contact, and the number theory that predicts the answer before the simulation finishes.',
      body: [
        { kind: 'p', text: 'Picture two gears meshing. Number the wheel\'s teeth 0 to 95 and the pinion\'s 0 to 23. At every contact one wheel tooth touches one pinion tooth, and both gears move on by one. The learner writes a loop that records each pair that touches and stops when a pair comes round for the second time, because after that the whole pattern repeats exactly. Then they ask a practical question: how many different wheel teeth does each pinion tooth ever meet? If a pinion tooth is chipped, those are the teeth it will damage, over and over.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: gear pairs we chose, and what the simulation found', head: ['Wheel and pinion teeth', 'Common factor', 'Contacts before the pattern repeats', 'Wheel teeth each pinion tooth meets'], rows: [
          ['96 and 24', '24', '96', '4 of the 96'],
          ['96 and 25', '1', '2,400', 'All 96'],
          ['60 and 24', '12', '120', '5 of the 60'],
          ['60 and 23', '1', '1,380', 'All 60'],
          ['100 and 40', '20', '200', '5 of the 100'],
          ['100 and 41', '1', '4,100', 'All 100']
        ] },
        { kind: 'p', text: 'The pattern in the table is exact. The number of contacts before repeating is the least common multiple of the two tooth counts, and each pinion tooth meets the wheel\'s tooth count divided by their greatest common divisor. When the two counts share no factor, like 96 and 25, the divisor is 1, so every tooth meets every tooth and wear spreads evenly over the whole wheel. Millwrights and clockmakers have a name for a tooth added for exactly this reason: a hunting tooth.' },
        { kind: 'p', text: 'There is a price, and it is the second lesson. A 96 and 24 pair gives a speed ratio of exactly 4; a 96 and 25 pair gives 3.840, and 96 and 23 gives 4.174. The learner writes a short search for coprime pairs close to the ratio they need, and finds, for example, that 97 teeth against 24 gives 4.042. Engineering is full of choices like this, where a perfect number on paper is traded for a machine that lasts. A program that checks every option is how you make that trade knowingly.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Cut two paper circles with 12 and 8 notches, mark one notch, and count turns until it meets the same partner again; then check with a Python loop.' },
          { h3: 'Ages 13 to 16', p: 'Simulate the contacts for any two tooth counts, record the pairs that meet, and show that the repeat length equals the least common multiple.' },
          { h3: 'Ages 16 and up', p: 'Prove the gcd rule, then search all coprime pairs within a tooth range for the one nearest a target speed ratio.' }
        ] },
        { kind: 'callout', h3: 'What is historical and what is ours', p: 'The mill facts are Cromford Mills\' and the Derwent Valley Mills World Heritage Site\'s. The tooth counts, the simulation and the ratios are our own teaching example; we are not describing the gears of any particular mill, and nothing here is engineering advice.' }
      ]
    },
    {
      id: 'derwent', tint: 'deep', eyebrow: 'Why the Derwent Valley',
      h2: 'The first water-powered spinning mill, fifteen miles from Derby',
      intro: 'The Derbyshire link, from Cromford Mills and the World Heritage Site\'s own pages.',
      body: [
        { kind: 'table', caption: 'Cromford and the Derwent Valley, in their own words', head: ['Source', 'What it says'], rows: [
          ['Cromford Mills', '"Built in 1771 by Sir Richard Arkwright Cromford Mills was the world\'s first successful water-powered cotton spinning mill."'],
          ['Cromford Mills', 'Arkwright\'s spinning machine, the water frame, turned cotton from a cottage industry into large-scale factory production.'],
          ['Cromford Mills', 'Arkwright became known as the "Father of the Factory System" for launching the world\'s first production line.'],
          ['Derwent Valley Mills World Heritage Site', 'The site snakes "15 miles down the river valley from Matlock Bath to Derby", with some of the world\'s first "modern" factories.'],
          ['Derwent Valley Mills World Heritage Site', 'Its highlights include Cromford Mills, Strutt\'s North Mill at Belper, Darley Abbey and the Museum of Making at Derby Silk Mill.']
        ] },
        { kind: 'p', text: 'A production line is an algorithm made of machines: steps in a fixed order, each doing one job, all kept in time by shafts and gears. That makes the Derwent Valley a natural place to meet the idea that a program is a machine you can reason about exactly. The gear puzzle on this page is small, but it is the same kind of thinking that keeps a factory, a railway timetable or a computer\'s clock running without surprises.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Cromford Mills, the Arkwright Society, the Derwent Valley Mills World Heritage Site or any Derbyshire council, and nothing here suggests one. Their history is theirs; our gear example and any error in it are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-derby">Derby</a> has its own page, <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a> is to the south and <a class="cg-inline-link" href="/coding-classes-in-cheshire">Cheshire</a> to the west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Levels of learning',
    h2: 'From counting teeth to proving a rule',
    intro: 'The free lesson decides where to start, by ability. School year is a helpful hint.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Turning and counting', p: 'Block-coding projects with wheels, timers and repeats, where children discover patterns that come back round.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Factors and multiples', p: 'Python loops that find factors, common multiples and remainders, turning times-tables knowledge into programs.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'Simulate, then prove', p: 'Python simulations checked against a formula, the habit behind both good exam answers and good software.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Ages 18 to 67', h3: 'Automate the routine', p: 'Adults write Python that handles repetitive work, from reports to scheduling, with results they can trust.', courses: ['python-ai-automation-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and simple rules',
    h2: 'An AI can pick gear sizes for a ratio. Would it add the extra tooth?',
    intro: 'Only if the question mentions wear, and most questions do not.',
    p1: 'Ask a chatbot for two gears with a 4 to 1 ratio and it will happily suggest 96 and 24, which is exactly right for the ratio and exactly wrong for wear. It answered the question it was asked. The idea of spreading contact across every tooth only appears if someone knows it matters and says so. That is the general shape of the risk with AI help: correct answers to incomplete questions.',
    p2: 'A Derbyshire student who has watched a simulation show each tooth meeting only four partners will ask what the design is for, how long it must last, and what an exact ratio is worth compared with even wear. Those follow-up questions turn a quick suggestion into a sound design, and they come from understanding, not from typing a better prompt.',
    closer: 'So a Derbyshire teenager should learn to code in 2026, in the valley where the factory system began, to be the person who knows which question was missing.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Getting started',
    h2: 'Glossop to Swadlincote without the Snake Pass',
    intro: 'Derbyshire\'s towns are separated by moors, valleys and slow roads. Online lessons take none of that into account.',
    cells: [
      { h3: 'Home is where it happens', p: 'A bedroom in Heanor, a kitchen in Ashbourne, a desk in Killamarsh. The learner writes code while the teacher watches the same screen.' },
      { h3: 'School words you know', p: 'Year groups, GCSE options and A levels are named as Derbyshire schools name them, all in English.' },
      { h3: 'Try a lesson for free', p: 'A real first lesson with a teacher, then an honest recommendation. No card is requested.' },
      { h3: 'Right-level groups', p: 'Five to ten learners at one stage, gathered widely, so the lesson is pitched for everyone in it.' },
      { h3: 'Holidays around school', p: 'Two lessons a week is usual, pausing when your own school breaks up, whoever sets its dates.' },
      { h3: 'Times in UK time', p: 'India, where our teachers are, is 5.5 hours ahead of the UK in winter and 4.5 in summer; every lesson is booked in UK time.' }
    ],
    spec: { title: 'Why groups follow level', p: 'Thirty-seven towns in very different landscapes mean no one place has enough learners at every stage. Level-based groups let a Buxton learner and a Long Eaton learner share a class.' }
  },

  fees: {
    h2: 'Derbyshire fees',
    intro: 'Every Derbyshire town, and every country other than India, pays the same.',
    first: 'A complete lesson of real work, ending in a suggested level and course.',
    group: 'Around eight lessons a month, five to ten learners at one level.',
    private: 'Around eight lessons a month, one teacher with one learner.',
    closer: 'We price in US dollars for everyone outside India and do not keep a pound list. Nothing is billed until after the free lesson, when a course and a weekly slot are agreed; for pauses, missed lessons and changes between group and one-to-one teaching, see the pricing page.'
  },

  reviewsH2: 'Families on Google, unedited',

  book: {
    h2: 'Book your first lesson free',
    intro: 'Let us know an age or school year and one interest. The first lesson might be a block-coding game, a first Python factor finder, or the gear simulation on this page.',
    success: 'Thank you. Your Derbyshire request is with us.'
  },

  faq: {
    h2: 'Derbyshire questions',
    intro: 'On the county, the gear project and our lessons.',
    items: [
      { q: 'How many people live in Derbyshire?', a: 'Derby and the eight Derbyshire districts held 1,055,996 usual residents at the 2021 Census, from ONS figures on Nomis. Derby had 261,364 and Derbyshire Dales, the smallest, 71,540.' },
      { q: 'What are the largest towns in Derbyshire?', a: 'By ONS built-up area: Derby 275,575, Chesterfield 76,420, Ilkeston 38,725, Long Eaton 37,820 and Swadlincote 34,565. Thirty-seven Derbyshire places above five thousand are covered on this page.' },
      { q: 'What is the gear project?', a: 'Learners simulate two meshing gears, record which teeth touch, and find that the pattern repeats after the least common multiple of the tooth counts. A 96 and 24 pair means each pinion tooth meets only 4 of the 96; a 96 and 25 pair makes every tooth meet every tooth.' },
      { q: 'What is a hunting tooth?', a: 'An extra tooth added so the two tooth counts share no common factor. Then each tooth meets every tooth of the other gear before the pattern repeats, which spreads wear.' },
      { q: 'Why does Cromford matter?', a: 'Cromford Mills says it was built in 1771 by Richard Arkwright as the world\'s first successful water-powered cotton spinning mill, and that Arkwright launched the world\'s first production line.' },
      { q: 'Is there a classroom in Derby or Chesterfield?', a: 'No. Every lesson is live online, so a learner in Clay Cross and one in New Mills can share a class with no travelling.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Block coding for young children, typed Python from about ten, maths and Python projects for teenagers, and automation or data for adults. The free lesson sets the level.' },
      { q: 'Can you help with maths as well as coding?', a: 'Yes. Maths through coding teaches factors, fractions, algebra, geometry and probability as Python projects for ages 10 to 15, and we teach GCSE and A level maths too.' },
      { q: 'What does it cost?', a: 'Lesson one is free of charge. A monthly place in a small group then costs USD 100, and one-to-one teaching USD 150 a month; nobody pays a registration fee or signs up for a term.' },
      { q: 'When are Derbyshire school holidays?', a: 'Derbyshire County Council, Derby and academies set their own dates. We arrange lesson breaks around the calendar your school gives you.' }
    ]
  },

  next: {
    eyebrow: 'The wider UK',
    h2: 'Pages beyond Derbyshire',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-derby">Derby</a> page covers the city. Neighbouring counties so far include <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a>, <a class="cg-inline-link" href="/coding-classes-in-cheshire">Cheshire</a> and <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every other page.',
    waLabel: 'Chat on WhatsApp'
  },

  footerHeading: 'Derbyshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-derby', label: 'Derby' },
    { href: '/coding-classes-in-leicestershire', label: 'Leicestershire' }
  ],

  personalityCss: `
.cg-root.cg-dbs .cg-hero-grid { align-items: end; gap: clamp(1.2rem, 3vw, 2.6rem); }
.cg-root.cg-dbs .cg-hero h1 { font-weight: 750; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-dbs .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-dbs .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dbs .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.018em; }
.cg-root.cg-dbs .cg-table caption { font-weight: 600; font-style: italic; letter-spacing: 0.008em; }
.cg-root.cg-dbs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dbs .cg-table th { letter-spacing: 0.05em; font-weight: 700; }
.cg-root.cg-dbs .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-dbs .cg-callout { border-left-width: 8px; border-radius: 0 6px 6px 0; }
`,

  dossier: {
    curriculumAuthority: 'Derbyshire (ceremonial: eight districts under Derbyshire County Council plus Derby unitary). ONS Census 2021 TS001 via Nomis: Derby 261,364; Amber Valley 126,206; Erewash 112,906; South Derbyshire 107,205; Chesterfield 103,569; North East Derbyshire 102,001; High Peak 90,933; Bolsover 80,272; Derbyshire Dales 71,540; total 1,055,996 (our sum). ONS Census 2021 built-up areas (published; checked with our OA sums): Derby 275,575 (Derby, Amber Valley, South Derbyshire); Chesterfield 76,420 (Chesterfield, North East Derbyshire); Ilkeston 38,725; Long Eaton 37,820; Swadlincote 34,565 (33,920 inside); Heanor 24,260; Dronfield 21,160; Ripley 20,180; Buxton 20,050; Belper 19,075; Glossop 17,820; Hadfield 16,275 (9,910 in High Peak); South Normanton and Pinxton 16,025; Staveley 15,145; Somercotes and Swanwick 15,100; Matlock 11,990; Shirebrook 11,575; Bolsover 11,225; Brimington 11,075; North Wingfield and Holmewood 9,540; Sandiacre 9,370; New Mills 9,200 (8,698 inside); Killamarsh 9,080; Clay Cross 8,920; Ashbourne 8,855; Alfreton 8,795; Hilton 8,275; Clowne 7,760; Eckington 7,435; Breaston and Draycott 7,395; Woodville 7,255 (6,497 inside); Chapel-en-le-Frith 7,240; Borrowash 7,165; Wingerworth 6,400; West Hallam 5,910; Creswell 5,795; Overseal and Castle Gresley 5,055. Burton upon Trent (1,198 of 76,255 in South Derbyshire) excluded. Cromford Mills, Our History: "Built in 1771 by Sir Richard Arkwright Cromford Mills was the world\'s first successful water-powered cotton spinning mill and a cornerstone of the Industrial Revolution"; "the water frame"; "Arkwright became known as the \'Father of the Factory System\' for launching the world\'s first production line". Derwent Valley Mills WHS: "Snaking 15 miles down the river valley from Matlock Bath to Derby, the World Heritage Site contains a fascinating series of historic mill complexes, including some of the world\'s first \'modern\' factories"; highlights Cromford Mills and Cromford Canal, Strutt\'s North Mill and Belper River Gardens, Darley Abbey, the Museum of Making at Derby Silk Mill.',
    localProject: 'gcd and lcm on gear wear. Contact k touches wheel tooth k mod a and pinion tooth k mod b; the pattern repeats after lcm(a, b) contacts; each pinion tooth meets a / gcd(a, b) wheel teeth. Teaching pairs (ours): 96/24 gcd 24, lcm 96, each pinion tooth meets 4 of 96; 96/25 gcd 1, 2,400 contacts (25 wheel turns, 96 pinion turns), all 96; 96/23 2,208, all 96; 60/24 gcd 12, 120, 5 of 60; 60/23 1,380, all 60; 48/18 gcd 6, 144, 8 of 48; 48/17 816, all 48; 100/40 gcd 20, 200, 5 of 100; 100/41 4,100, all 100. Ratios: 96/24 = 4.000, 96/25 = 3.840, 96/23 = 4.174, 97/24 = 4.042, 95/24 = 3.958. Simulation checked against the formula. Page states tooth counts are ours, not any mill\'s. AI angle: an assistant proposes 96 and 24 for a 4:1 ratio unless wear is mentioned. Lesson family: gcd/lcm applied to gear wear (hunting tooth), simulation checked against number theory.',
    requiredMentions: [
      '1,055,996',
      'water frame',
      '15 miles',
      '2,400',
      '4 of the 96',
      'hunting tooth',
      'North Wingfield and Holmewood',
      'Overseal and Castle Gresley',
      'Somercotes and Swanwick',
      '275,575'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Derby and the eight Derbyshire districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Derbyshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cromford Mills: built in 1771 by Richard Arkwright, first successful water-powered cotton spinning mill, water frame, first production line.', url: 'https://www.cromfordmills.org.uk/about/our-history/' },
      { claim: 'Derwent Valley Mills World Heritage Site: 15 miles from Matlock Bath to Derby, early modern factories.', url: 'https://www.derwentvalleymills.org/' }
    ],
    rejectedClaims: [
      'The actual gear tooth counts used in any Derwent Valley mill: not read at a primary source, so all counts are our teaching examples.',
      'Working conditions and child labour at the mills: outside the scope of a coding page and not summarised here.',
      'The UNESCO inscription details for the Derwent Valley Mills: the UNESCO page returned 403 on 26 September 2026, so no inscription date is printed.',
      'Burton upon Trent as a Derbyshire town: almost all of it lies in Staffordshire.',
      'Derbyshire school term dates: set by councils and academies; none read.',
      'Named Derbyshire schools: none is named.'
    ]
  }
};
