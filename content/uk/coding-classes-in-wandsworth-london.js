'use strict';
// Wandsworth (cg- London borough page, UK cluster Phase 5, row 170). Named sources only.
// Spine: are winning streaks real? The Boat Race site (theboatrace.org/the-course): the course is 8 km and stretches from
// Putney to Mortlake; postcodes.io puts the Putney riverside (SW15 1ES, 1HF, 1ER) in Wandsworth, Thamesfield ward.
// Men's results table (theboatrace.org/results/the-mens-boat-race), 171 races 1829-2026: Cambridge 89, Oxford 81, dead
// heat 1877. On the 170 decisive races in order: 66 runs vs 85.8 expected if each race were independent (Wald-Wolfowitz
// z -3.05, p 0.002); 100,000 shuffles (seed 20260925): 0.15% have 66 runs or fewer; longest streak Cambridge 13
// (1924-1936), then Oxford 10 (1976-1985), Oxford 9 (1861-1869, 1890-1898); shuffles reach 13 or more in 1.6%, median
// longest 7, 95th percentile 11. Winner repeats 104 of 169 (61.5%) vs 50.1% under independence; 1829-1914 60.9% (70
// races), 1920-1990 67.2% (65), 1991-2026 50.0% (35). Lesson family: runs test and permutation test on streaks; screened
// 25 September 2026 (runs test 0, Boat Race 0). We imply no link with the Boat Race Company or either university club.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'WANDSWORTH', blurb: 'Battersea Power Station, the Putney start of the Boat Race and a project asking whether winning streaks are real.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-wandsworth-london',
  code: 'wds',
  accent: '#885A3A',
  accentRationale: 'Wandsworth: an oar-wood brown from the solver (4.77:1 on every paper tint), chosen to avoid both crews\' blues and any affiliation',
  pageType: 'governorate',
  place: {
    name: 'Wandsworth',
    eyebrow: 'London Borough of Wandsworth',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wandsworth, London',
  title: 'Coding Classes in Wandsworth and Putney | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Wandsworth: Putney, Battersea, Tooting, Balham, Earlsfield, Southfields and Roehampton. Ages 6 to 67.',
  ogDescription: 'Wandsworth coding and Python classes, with a project that tests whether Boat Race winning streaks since 1829 are longer than chance alone would produce.',
  twitterDescription: 'Wandsworth coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Wandsworth Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Wandsworth, taught live in English.'
  },

  h1: 'Coding classes in Wandsworth',
  capsuleQ: 'What are the best coding classes in Wandsworth?',
  capsule: 'Wandsworth is the south west London borough of Putney, Battersea, Tooting, Balham, Wandsworth Town, Earlsfield, Southfields and Roehampton, with 327,506 residents at the 2021 Census and the Putney end of the Boat Race course on its riverbank. Worthwhile coding classes teach a learner to tell a real pattern from a lucky one, and this page does that with every men\'s Boat Race since 1829: are the long winning streaks evidence of something, or just what chance produces? Classes are live on video with teachers in India, for learners from 6 to 67, one to one or in groups of five to ten at the same level. You pay nothing for the first lesson. Then a group place is USD 100 a month and one-to-one teaching USD 150 a month.',
  lead: 'The Boat Race runs 8 kilometres from Putney to Mortlake, according to the race\'s own website, and it starts beside Putney\'s riverside in Wandsworth. The same website lists the winner of every men\'s race since 1829: 171 races, 89 won by Cambridge, 81 by Oxford, and one dead heat in 1877. Look down the list and the streaks jump out. Cambridge won 13 in a row from 1924 to 1936; Oxford won 10 in a row from 1976 to 1985. Does that mean something carries over from year to year, or would a fair coin produce streaks like that anyway? Our learners answer with two tools: a formula that counts the runs, and a program that shuffles the 170 results 100,000 times to see what chance alone looks like.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Wandsworth.',

  picks: {
    eyebrow: 'Course picks for Wandsworth',
    h2: 'Where Wandsworth learners usually begin',
    intro: 'Imagine a Year 2 child in Balham who flips coins to decide everything, a Year 9 pupil in Putney who watches the race from the towpath each spring, a Year 12 student in Tooting weighing up economics or statistics, and a parent in Battersea who keeps hearing about players being "on a streak" and doubts it. The first lesson is free for all of them.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch coin-flip game that counts streaks, and a first surprise at how long they can run.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with real results: count each crew\'s wins and find the longest winning run.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including the runs test and the 100,000-shuffle experiment on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who hear about streaks and momentum at work or in sport and want to check whether they are real.' }
    ]
  },

  sections: [
    {
      id: 'wandsworth', tint: '', eyebrow: 'Wandsworth in figures',
      h2: '327,506 residents, 306 listed buildings and eleven libraries',
      intro: 'Each figure is either published by the body named or counted by us from that body\'s own data.',
      body: [
        { kind: 'table', caption: 'Wandsworth at a glance, with who counted what', head: ['Thing counted', 'Count', 'Counted by'], rows: [
          ['People living here, Census 2021', '327,506', 'ONS, table TS001'],
          ['Listed buildings and structures within the boundary', '306, of them 5 at Grade I and 32 at Grade II*', 'Us, from Historic England data, 25 September 2026'],
          ['Libraries on the council\'s list', '11', 'Wandsworth Council, read 25 September 2026'],
          ['Services at Clapham Junction', 'Southern, South Western Railway, Mildmay and Windrush lines', 'TfL open data, checked 25 September 2026'],
          ['Men\'s Boat Races on record', '171, from 1829 to 2026', 'The Boat Race results page']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Five at Grade I', p: 'Wandsworth\'s Grade I entries include Mount Clare, Parkstead House, Roehampton House and the Church of St Mary in Battersea with its churchyard wall and gate.' },
          { h3: 'Power and art', p: 'Battersea Power Station is listed at Grade II*, as are Battersea Arts Centre, the former Battersea Town Hall, and Old Battersea House.' },
          { h3: 'Roehampton blocks', p: 'Several Roehampton housing blocks are Grade II*, among them Binley House, Charcot House and Denmead House, alongside the former Royal Victoria Patriotic School.' }
        ] },
        { kind: 'p', text: 'Wandsworth Council lists libraries at Balham, Battersea, Battersea Park, Earlsfield, Northcote, Putney, Roehampton, Southfields, Tooting, Wandsworth Town and York Gardens.' }
      ]
    },
    {
      id: 'results', tint: 'tint', eyebrow: 'The data',
      h2: '171 races, one line each',
      intro: 'The results table gives the race number, year, winner, winning distance and time. For this project only the winner matters: a string of 170 letters, O or C, once the 1877 dead heat is set aside.',
      body: [
        { kind: 'table', caption: 'The four longest winning streaks in the men\'s race', head: ['Crew', 'Wins in a row', 'From', 'To'], rows: [
          ['Cambridge', '13', '1924', '1936'],
          ['Oxford', '10', '1976', '1985'],
          ['Oxford', '9', '1861', '1869'],
          ['Oxford', '9', '1890', '1898']
        ] },
        { kind: 'p', text: 'Years with no race, such as during the two world wars, are simply skipped, so a streak here means consecutive races rather than consecutive calendar years. Two races were rowed in 1849, in March and December, and both count. Learners write down these choices before running any test, because each one could change the answer.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Streaks or chance? A runs test and 100,000 shuffles',
      intro: 'Learners measure how streaky the real sequence is, then build the world where every race is independent and compare.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Count the runs', p: 'A run is an unbroken stretch of wins by one crew. Fewer runs than expected means longer streaks. The real sequence has 66 runs.' },
          { h3: '2. The formula', p: 'With 81 Oxford and 89 Cambridge wins in random order, a runs test expects about 85.8 runs. Getting only 66 is about three standard deviations short.' },
          { h3: '3. The shuffle', p: 'Shuffle the same 170 results 100,000 times and count runs and the longest streak each time. That is chance, made visible.' }
        ] },
        { kind: 'table', caption: 'Real results against 100,000 shuffles, run 25 September 2026', head: ['Measure', 'Real sequence', 'Typical shuffle', 'Shuffles at least as extreme'], rows: [
          ['Number of runs', '66', 'about 86', '0.15%'],
          ['Longest winning streak', '13', '7', '1.6%'],
          ['Share of races won by last year\'s winner', '61.5%', 'about 50%', 'see text']
        ] },
        { kind: 'p', text: 'The real sequence is streakier than chance: last year\'s winner won again in 104 of 169 races, and shuffled results almost never produce so few runs. But split the history and the picture changes. From 1829 to 1914 the winner repeated in 61% of races and from 1920 to 1990 in 67%; from 1991 to 2026, across 35 races, exactly half. In the modern era the results look like coin tosses. A trend in the past is not a law for the future, and a learner who finds that has learned something most commentators never check.' },
        { kind: 'callout', h3: 'Why an AI answer is not enough', p: 'Ask an assistant whether the Boat Race is streaky and it may tell you a story about dominant eras. It is far less likely to run the shuffle, report how often chance matches the longest streak, or notice that the effect disappears after 1991. Learners who have built the shuffle themselves can check any claim about hot hands, winning runs or momentum, including the claims AI tools make.' }
      ]
    },
    {
      id: 'caution', tint: 'tint', eyebrow: 'Careful conclusions',
      h2: 'What the test shows, and what it cannot',
      intro: 'Finding a pattern is the start of the thinking, not the end.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'It shows dependence', p: 'Across the whole history, one race\'s winner tells you something about the next. The shuffle makes that hard to dismiss as luck.' },
          { h3: 'It does not show why', p: 'Rowers returning, coaching, money or selection might all carry strength from year to year. This data holds only winners, so it cannot tell those apart.' },
          { h3: 'Eras differ', p: 'A pattern strong before 1990 and absent after it is a warning against averaging over very different times.' }
        ] },
        { kind: 'p', text: 'Pupils studying GCSE maths can follow the idea of expected runs and the shuffle; A-level students can derive the runs-test formula and code the permutation test from scratch. The results belong to the Boat Race\'s published record; the runs, shuffles and percentages are ours, calculated on 25 September 2026. The Boat Race, both university boat clubs, Wandsworth Council, Historic England, TfL and the ONS are not connected with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Clapham Junction, and a laptop at home',
      intro: 'Wandsworth has plenty of stations, from Putney to Tooting. A learner joining our classes needs none of them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Clapham Junction', p: 'TfL\'s open data lists Southern, South Western Railway and the Mildmay and Windrush lines at Clapham Junction.' },
          { h3: 'Roehampton to Tooting', p: 'A learner on the western edge and another in the south east of the borough can row in the same class, so to speak, from home.' },
          { h3: 'Evenly matched', p: 'Each class has five to ten learners at one stage, so nobody is left paddling to keep up.' }
        ] },
        { kind: 'spec', title: 'Wandsworth among the boroughs', p: 'Wandsworth is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> brings them all together with the City and links each page once it is ready, including <a class="cg-inline-link" href="/coding-classes-in-richmond-upon-thames-london">Richmond upon Thames</a>, where the race ends at Mortlake.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From coin flips to permutation tests',
    intro: 'The free lesson shows where a learner really stands. Their school year only tells us where to start looking.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Heads and tails', p: 'Children code coin-flip games in Scratch and are surprised how long random streaks can be.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Counting streaks', p: 'Python that finds the longest run in a list and compares real results with random ones.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Is it chance?', p: 'Runs tests, shuffles and eras compared, good material for a maths, statistics or computing project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Patterns at work', p: 'Adults learn to test claims of momentum and streaks in sales, sport or markets before acting on them.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI spots patterns everywhere. Why should a Wandsworth teenager learn to doubt them?',
    intro: 'Because pattern-finding machines, like people, find patterns in noise.',
    p1: 'Modern AI is extraordinarily good at finding patterns, and just as capable of finding ones that are not there. The discipline that protects against that is simple: build the world where nothing is going on, and see whether the real data looks different. On the Boat Race record it does, overall, and it does not after 1991. A learner who has written that shuffle can apply the same check to any pattern an AI claims to have found.',
    p2: 'Learners leave with three habits: say in advance what counts as a streak, compare against chance built by shuffling, and check whether the pattern holds in every era. AI tools will keep producing confident pattern claims. The people who can test them will keep being needed.',
    closer: 'Every spring the Boat Race starts on Wandsworth\'s riverbank. A learner from the borough who can tell a real streak from a lucky run has a skill that lasts far longer than any race.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Putney to Balham, lessons in your own room',
    intro: 'Wherever a learner lives in Wandsworth, class starts when the laptop opens.',
    cells: [
      { h3: 'Home-based', p: 'The classroom is wherever the learner\'s computer is, as long as the sound works and the broadband holds.' },
      { h3: 'Key Stages we use', p: 'We describe progress in the Key Stages of schools in England, Key Stage 1 up to sixth form, mentioning GCSE and A level when they matter. Every lesson is in English.' },
      { h3: 'A first lesson free', p: 'Real teaching rather than a sales call, ending with a recommended level and course. No card details are asked for.' },
      { h3: 'Same-stage groups', p: 'Each group has five to ten learners at one stage, from around the UK and overseas, so a convenient hour is usually easy to find.' },
      { h3: 'Two sessions weekly', p: 'Classes usually meet two evenings a week, with breaks around half terms, holidays and exams by agreement.' },
      { h3: 'UK clock, always', p: 'Our teachers work in India, and every time in our messages is already UK time.' }
    ],
    spec: { title: 'A busy borough, one well-matched class', p: 'More than 327,000 people live in Wandsworth, but a good class still depends on five learners at the same level being free together, so ours draw from well beyond it.' }
  },

  fees: {
    h2: 'Fees for Wandsworth families',
    intro: 'The first lesson is free; then there is one monthly fee, the same from Roehampton to Battersea.',
    first: 'A complete first lesson with a teacher, at no charge, closing with a suggested level, course and time.',
    group: 'Around eight live lessons a month in a class of five to ten at one stage.',
    private: 'Around eight live lessons a month, one to one with a teacher.',
    closer: 'Wandsworth families pay in US dollars, as do all families outside India, and no sterling prices are shown on the site. Nothing is charged until after the free lesson, when you have chosen a course and a regular time. The pricing page sets out pauses, missed lessons and switching between group and private teaching.'
  },

  reviewsH2: 'Parents and learners on Google, word for word',

  book: {
    h2: 'Get a free lesson',
    intro: 'A rough age and one hobby is all we need to plan lesson one. We could open with a Scratch coin-flip game, a Python streak counter, or the Boat Race shuffle on this page.',
    success: 'Thank you. Your Wandsworth lesson request has reached our team.'
  },

  faq: {
    h2: 'Questions from Wandsworth',
    intro: 'About the borough, the Boat Race project and our classes.',
    items: [
      { q: 'How many people live in Wandsworth?', a: 'Census 2021 found 327,506 people usually resident in the borough, the figure given in ONS table TS001.' },
      { q: 'Does the Boat Race start in Wandsworth?', a: 'The race\'s website describes the course as 8 km from Putney to Mortlake. The postcode directory places the Putney riverside in Wandsworth\'s Thamesfield ward; the finish at Mortlake is in Richmond upon Thames.' },
      { q: 'What is a runs test?', a: 'A test of whether a sequence of two outcomes is more or less streaky than chance. It counts the runs, stretches of the same outcome, and compares that with the number expected if the order were random.' },
      { q: 'Are Boat Race winning streaks more than luck?', a: 'Across all 170 decisive men\'s races, yes: there are 66 runs where chance would give about 86, and only 0.15% of 100,000 shuffles are as streaky. But from 1991 onwards the winner repeated in exactly half of races, just as chance would suggest.' },
      { q: 'Why shuffle the results?', a: 'Shuffling keeps the same number of wins for each crew but destroys any link between one year and the next. Doing it many times shows the range of streaks that chance alone produces, to compare with the real history.' },
      { q: 'When do Wandsworth learners have lessons?', a: 'The free lesson tells us the level; we then name a class at that level with a spare seat and a fixed evening. The teacher sits in India, and the evening we name is London time.' },
      { q: 'What does a learner need?', a: 'An ordinary computer with sound and broadband that will not drop out. The Boat Race project needs only Python and the published results table.' },
      { q: 'Is there a Modern Age Coders centre in Wandsworth?', a: 'No. There is no Wandsworth centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Wandsworth cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Further along the river, and beyond',
    html: 'Our <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> indexes every borough and the City, adding each one as it is published, from <a class="cg-inline-link" href="/coding-classes-in-kingston-upon-thames-london">Kingston upon Thames</a> upstream to <a class="cg-inline-link" href="/coding-classes-in-newham-london">Newham</a> downstream. Once streaks and shuffles make sense, <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">machine learning in London</a> is a natural next topic, and families moving between UK nations can compare school years on our <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wandsworth and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-richmond-upon-thames-london', label: 'Richmond' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-wds .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.7rem); }
.cg-root.cg-wds .cg-hero h1 { font-weight: 790; letter-spacing: -0.02em; line-height: 1.03; }
.cg-root.cg-wds .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-wds .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wds .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.013em; }
.cg-root.cg-wds .cg-grid-3 { gap: clamp(1rem, 2.7vw, 1.9rem); }
.cg-root.cg-wds .cg-table caption { font-weight: 700; letter-spacing: 0.016em; }
.cg-root.cg-wds .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wds .cg-table td:nth-child(2) { font-weight: 650; }
.cg-root.cg-wds .cg-ladder-col { border-left: 5px double var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-wds .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Wandsworth. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000032): 327,506 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 306 (I 5, II* 32, II 269); Grade I 1184436 MOUNT CLARE, 1357626 Church of St Mary and churchyard wall and gate, 1357675 PARKSTEAD HOUSE, 1357694 ROEHAMPTON HOUSE (AT QUEEN MARY\'S HOSPITAL), and one further entry not named on the page; II* include 1357620 BATTERSEA POWER STATION, 1184293 BATTERSEA ARTS CENTRE (FORMERLY BATTERSEA TOWN HALL), 1065500 OLD BATTERSEA HOUSE, 1065496 FORMER ROYAL VICTORIA PATRIOTIC SCHOOL, 1246040 BINLEY HOUSE, 1246043 CHARCOT HOUSE, 1246044 DENMEAD HOUSE. Wandsworth Council /leisure-and-culture/libraries/find-a-library/, 25 September 2026: Balham, Battersea, Battersea Park, Earlsfield, Northcote, Putney, Roehampton, Southfields, Tooting, Wandsworth Town, York Gardens. TfL Unified API 910GCLPHMJC (Clapham Junction): Southern, South Western Railway, Mildmay, Windrush. theboatrace.org/the-course: 8 km long, from Putney to Mortlake. postcodes.io reverse lookup at the Putney riverside: SW15 1ES, SW15 1HF, SW15 1ER, all Wandsworth, Thamesfield.',
    localProject: 'theboatrace.org/results/the-mens-boat-race table (Race, Year, Winner, Winning Distance, Winning Time), read 25 September 2026: 171 rows, race 1 1829 Oxford to race 171 2026 Cambridge; Cambridge 89, Oxford 81, Dead Heat 1 (race 34, 1877); 1849 has March and December races. Decisive sequence n = 170 (O 81, C 89), runs 66; Wald-Wolfowitz expected 85.8, z -3.05, p 0.0023. Permutation (100,000 shuffles, random.Random(20260925)): runs <= 66 in 0.145%; longest streak >= 13 in 1.55%; median longest 7, 95th percentile 11. Longest streaks: C 13 1924-1936; O 10 1976-1985; O 9 1861-1869; O 9 1890-1898. Winner repeats 104 of 169 (0.615); independence 0.501. Eras (by year): 1829-1914 70 races, repeat 0.609; 1920-1990 65, 0.672; 1991-2026 35, 0.500. Lesson family: runs test and permutation test on streaks, screened 25 September 2026.',
    requiredMentions: [
      '327,506',
      'Putney to Mortlake',
      'runs test',
      'Mount Clare',
      'Parkstead House',
      'Roehampton House',
      'Battersea Power Station',
      'Royal Victoria Patriotic School',
      'York Gardens'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Wandsworth E09000032: 327,506 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000032&measures=20100' },
      { claim: 'The Boat Race, men\'s results 1829-2026.', url: 'https://www.theboatrace.org/results/the-mens-boat-race' },
      { claim: 'The Boat Race, the course: 8 km from Putney to Mortlake.', url: 'https://www.theboatrace.org/the-course' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Wandsworth on 25 September 2026: 306 (5 I, 32 II*, 269 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'Wandsworth Council, find a library: eleven libraries.', url: 'https://www.wandsworth.gov.uk/leisure-and-culture/libraries/find-a-library/' },
      { claim: 'TfL Unified API, StopPoint 910GCLPHMJC (Clapham Junction).', url: 'https://api.tfl.gov.uk/StopPoint/910GCLPHMJC' }
    ],
    rejectedClaims: [
      'Causes of Boat Race streaks (returning rowers, coaching, funding): not in the results data; the page lists them only as possibilities.',
      'The women\'s and reserve races: also published, not analysed here.',
      'That Clapham Junction is the busiest station (by any measure): not verified at ORR for this build, so not stated.',
      'The fifth Grade I entry: a former cinema now a bingo club; not named on a page for young learners.',
      'Wandsworth schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth for Wandsworth: never a standout; used only to order the build.'
    ]
  }
};
