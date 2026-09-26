'use strict';
// Isle of Wight (cg- county index, UK cluster Phase 7, row 236). One unitary council. Spine: a fair race between
// unequal boats. Cowes Week site (cowesweek.co.uk, read raw 26 September 2026): thanks to everyone in "this year's
// bicentenary regatta"; "North Sails Cowes Week 2026 wraps up at the start of its third century"; next event 31 July
// to 6 August 2027. RYA Portsmouth Yardstick page: "each boats elapsed time ... must be converted to a corrected time
// (time converted based on a boats handicap)". RYA PY guidance (asset 48003): "Corrected time = (Elapsed time x most
// laps x 1000) / (PN x actual laps)". RYA Portsmouth Number list (asset 50500): 29er 900; RS Aero 7 1062; ILCA 7 /
// Laser 1103 (change -1); Wayfarer 1107; Solo 1139; ILCA 6 1156; RS Feva XL 1248; Mirror 1364; Topper 1369; Optimist
// 1629. Our model race (scratchpad iow/race.py, seed 20260926; times are ours): a course a PN 1100 boat sails in an
// hour, crews varying by about 2 per cent. Elapsed times 49:15 (29er) to 1:28:07 (Optimist), a spread of 2,332 s;
// corrected times spread 157.9 s. Close group after correction: RS Aero 7 3,277.8 s, Solo 3,280.1, ILCA 7 3,282.9,
// 29er 3,283.3. One PN point on the ILCA 7 (1104) moves it from third to second; minus one (1102) drops it to fourth.
// Lesson family: handicapping by normalisation (corrected time), ranking and sensitivity to a published constant;
// screened (handicap, corrected time: 0 lesson hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (Isle of Wight 140,459); ONS built-up areas above
// 3,000, all inside. Island Sailing Club site 406; Round the Island Race site no connection. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'ISLE OF WIGHT', blurb: 'One council, ten towns, and a Cowes lesson in how a Topper and a 29er can race each other fairly.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-isle-of-wight',
  code: 'iow',
  accent: '#464D6B',
  accentRationale: 'Isle of Wight: a Solent slate blue from the solver (6.68:1 on the darkest paper tint), more violet than the East Riding and Cumbria blues',
  pageType: 'governorate',
  place: {
    name: 'Isle of Wight',
    eyebrow: 'Isle of Wight',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'South East England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Hampshire', href: '/coding-classes-in-hampshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Isle of Wight',
  title: 'Coding Classes on the Isle of Wight | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across the Isle of Wight, from Newport, Ryde and Cowes to Sandown, Shanklin, East Cowes, Freshwater and Ventnor.',
  ogDescription: 'Coding classes for every Island town, and a Cowes project: use the RYA\'s Portsmouth Numbers to race a Topper against a 29er fairly, and see one point change a result.',
  twitterDescription: 'Isle of Wight coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for the Isle of Wight',
    description: 'Ability-placed online coding, Python, data and mathematics for children, teenagers and adults across the Isle of Wight, taught live in English.'
  },

  h1: 'Coding classes on the Isle of Wight',
  capsuleQ: 'What are the best coding classes on the Isle of Wight?',
  capsule: 'The Isle of Wight had 140,459 residents at the 2021 Census, in one council area: Newport and Ryde are the two biggest towns at about 25,000 and 24,000, then Cowes, Sandown, Shanklin, East Cowes, Freshwater and Totland, and Ventnor. An island is exactly where online teaching earns its keep, because the ferry is not a sensible way to reach a weekly club. We teach live over video from India, place each learner by ability rather than by age, welcome anyone from 6 to 67, and offer small groups of five to ten or one-to-one lessons in programming, Python, data and maths. The Island project comes from Cowes and its sailing. There is no charge to try a first lesson. Stay on and a group place costs USD 100 each month, with private lessons at USD 150 each month.',
  lead: 'Cowes Week, which calls 2026 its bicentenary regatta and itself now "at the start of its third century", brings together boats of every size. That raises a question every club race has to answer: how can a small Topper and a fast 29er race each other fairly? The answer in British dinghy racing is the Portsmouth Yardstick, run by the RYA. Each class gets a Portsmouth Number, and each boat\'s time on the water is converted to a corrected time before the results are decided. This page\'s project uses the RYA\'s own numbers and formula, runs a model race in Python, and then shows how a single point in a published number can decide who wins.',
  wa: 'Hello Modern Age Coders, please could we book a free lesson for a learner on the Isle of Wight?',

  picks: {
    eyebrow: 'Courses for the Island',
    h2: 'Where Isle of Wight learners begin',
    intro: 'A seven-year-old in Bembridge who sails an Optimist, a Year 7 in Ryde who likes ratios and records, a Year 11 in Cowes who wants to build real programs, and a club volunteer in Newport who keeps the race results in a spreadsheet. Each starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, including races with timers and a leaderboard.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, with ratios, fractions and averages built as Python projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Beginner to advanced Python for teenagers across games, automation, data and AI projects.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Spreadsheets, statistics and SQL, then Python and dashboards, for adults who keep records that matter.' }
    ]
  },

  sections: [
    {
      id: 'isle-of-wight', tint: '', eyebrow: 'The Island in figures',
      h2: '140,459 people and ten towns across one island',
      intro: 'The population is the 2021 Census count on Nomis. Towns are the ONS built-up areas, checked against our own total of the census output areas on the Island.',
      body: [
        { kind: 'table', caption: 'Isle of Wight built-up areas with at least 3,000 residents, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Newport', '25,405', 'East Cowes', '8,430'],
          ['Ryde', '24,105', 'Freshwater and Totland', '7,520'],
          ['Cowes', '14,365', 'Ventnor', '5,565'],
          ['Sandown', '11,655', 'Bembridge', '3,560'],
          ['Shanklin', '9,120', 'Wootton', '3,105']
        ] },
        { kind: 'p', text: 'No Island town is large, and the biggest two together hold about a third of the population. Every row matches our own output-area count to within rounding. For a young programmer, the distances inside the Island are short but the numbers are small: finding five or six others at exactly the same stage, on the same evening, in the same town, is unlikely. The Isle of Wight Council and academies set school calendars, which we did not read; lesson breaks are agreed with each family.' },
        { kind: 'callout', h3: 'Close to Hampshire, but its own county', p: 'The Island has its own council and is a county in its own right. The mainland across the Solent has its own page for <a class="cg-inline-link" href="/coding-classes-in-hampshire">Hampshire</a>, with Portsmouth and Southampton on the other side of the water.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Isle of Wight project',
      h2: 'Racing a Topper against a 29er, fairly',
      intro: 'The RYA\'s published Portsmouth Numbers, its corrected-time formula, a model race in Python, and a result that turns on one point.',
      body: [
        { kind: 'p', text: 'The RYA\'s guidance sets out the calculation: "Corrected time = (Elapsed time x most laps x 1000) / (PN x actual laps)". When everyone sails the same number of laps, that becomes simply elapsed time times 1,000 divided by the boat\'s Portsmouth Number. A fast boat has a low number and a slow one a high number. In the RYA\'s list, a 29er is 900, an ILCA 7 1103, a Topper 1369 and an Optimist 1629. The learner types in ten classes and writes a function that turns a table of finishing times into a ranked result.' },
        { kind: 'table', caption: 'Our model race of 26 September 2026: RYA Portsmouth Numbers, our invented finishing times', head: ['Boat', 'Portsmouth Number (RYA)', 'Time on the water', 'Corrected time'], rows: [
          ['29er', '900', '49:15', '54:43'],
          ['RS Aero 7', '1062', '58:01', '54:38'],
          ['ILCA 7', '1103', '1:00:21', '54:43'],
          ['RS Feva XL', '1248', '1:06:28', '53:16'],
          ['Topper', '1369', '1:15:09', '54:54'],
          ['Optimist', '1629', '1:28:07', '54:06']
        ] },
        { kind: 'p', text: 'On the water, the 29er finished almost thirty-nine minutes before the Optimist; across our ten boats, times on the water were spread over 2,332 seconds. After correction the whole fleet sits within 157.9 seconds, and the result depends on how well each crew sailed its own boat, not on which boat was fastest. That is the whole point of handicapping, and it is a clean example of normalisation: dividing out an effect you do not want to judge so that you can compare what you do.' },
        { kind: 'p', text: 'Now the sharp end. Four of our boats finish within 5.5 seconds of each other after correction: RS Aero 7 at 3,277.8 seconds, Solo 3,280.1, ILCA 7 3,282.9 and 29er 3,283.3. The RYA\'s list shows the ILCA 7 number moved by one point this year. In our race, raising the ILCA 7 by one point, to 1104, lifts it from third to second; lowering it to 1102 drops it to fourth. A published number that looks like a technicality decides places, which is why handicap lists are revised with data every year.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Time three toy boats down a gutter, give the slowest a handicap, and work out corrected times on a calculator and then in Python.' },
          { h3: 'Ages 13 to 16', p: 'Write the corrected-time function, rank a ten-boat race, and print both the order on the water and the corrected order.' },
          { h3: 'Ages 16 and up', p: 'Add the average-lap formula for boats that sailed fewer laps, and test how sensitive the podium is to one-point changes in each number.' }
        ] },
        { kind: 'callout', h3: 'What is real and what is ours', p: 'The Portsmouth Numbers and the formula are the RYA\'s. The finishing times are invented for teaching from a simple model of our own, and the race did not happen. Clubs can and do adjust numbers for local conditions, as the RYA\'s page explains.' }
      ]
    },
    {
      id: 'cowes', tint: 'deep', eyebrow: 'Why Cowes',
      h2: 'Two hundred years of racing, and a national handicap system',
      intro: 'The Island link, from Cowes Week and the RYA.',
      body: [
        { kind: 'table', caption: 'Cowes Week and the Portsmouth Yardstick, in their own words', head: ['Source', 'What it says'], rows: [
          ['Cowes Week', '2026 was its bicentenary regatta; the event now stands at the start of its third century.'],
          ['Cowes Week', 'The next event runs from 31 July to 6 August 2027.'],
          ['RYA, Portsmouth Yardstick', 'An easy way for different classes of dinghy to race competitively against each other.'],
          ['RYA, Portsmouth Yardstick', 'Each boat\'s elapsed time must be converted to a corrected time based on its handicap.'],
          ['RYA, Portsmouth Yardstick', 'Handicaps are allocated and administered by clubs to suit local factors such as boat type, wind and water.']
        ] },
        { kind: 'p', text: 'An island with two centuries of racing is a natural place to learn that fairness can be engineered. The same idea sits behind golf handicaps, age-graded running times, exam grade boundaries and every leaderboard that compares unlike things. A learner who has built the calculation and watched one point change a result understands both how powerful normalisation is and how much depends on the numbers behind it.' },
        { kind: 'p', text: 'This page is ours alone: we are not connected with Cowes Week, the RYA or the Isle of Wight Council. Their facts and numbers are theirs; the model race and any error in it are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/coding-classes-in-hampshire">Hampshire</a> is across the Solent, with city pages for <a class="cg-inline-link" href="/best-coding-class-in-portsmouth">Portsmouth</a> and <a class="cg-inline-link" href="/best-coding-class-in-southampton">Southampton</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From a timer on screen to a fair results table',
    intro: 'The free lesson places each learner. School year is a hint; ability decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Races and timers', p: 'Block-coding races with timers and leaderboards, where children first sort results by a number.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Ratios that matter', p: 'Python with ratios, averages and rankings, applied to sports results and records.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'Programs that decide', p: 'Python that reads data, applies rules and produces a ranked table, with tests for the awkward cases.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Records done properly', p: 'Spreadsheets, SQL and Python for adults who run club results, rotas or accounts of any kind.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and fair comparisons',
    h2: 'An AI can rank a handicap race. Will it tell you the result hangs on one point?',
    intro: 'It will compute what you ask; the sensitivity question is yours to ask.',
    p1: 'Give a chatbot a table of finishing times and Portsmouth Numbers and it will apply the formula and rank the boats correctly. What it is unlikely to mention, unless asked, is that four boats are separated by five seconds and that a one-point change to one class\'s number reverses two of their places. A clean-looking result table hides how fragile it is.',
    p2: 'An Island student who has recalculated the race with 1102, 1103 and 1104 knows to ask how close the result is, which inputs it depends on, and how certain those inputs are. That habit protects any decision built on a ranking, from sports tables to exam grades to the league tables that decide funding.',
    closer: 'So an Isle of Wight teenager should learn to code in 2026 to see how much a neat-looking answer depends on the numbers behind it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practical details',
    h2: 'Freshwater to Bembridge, and no ferry needed',
    intro: 'Island life makes weekly travel to mainland clubs impractical. Online lessons remove the problem.',
    cells: [
      { h3: 'At home on the Island', p: 'A bedroom in Shanklin, a kitchen in Wootton, a desk in East Cowes. The teacher shares the screen; the learner does the coding.' },
      { h3: 'The words schools use', p: 'Year groups, GCSE options and A levels are named just as Island schools name them, all in English.' },
      { h3: 'A free lesson to start', p: 'A complete lesson with real work and an honest recommendation afterwards. No payment details are asked for.' },
      { h3: 'A class at your level', p: 'Five to ten learners at the same stage from across the UK and beyond, which a small island rarely has locally.' },
      { h3: 'Holidays by agreement', p: 'Two lessons a week for most learners, pausing for your own school\'s holidays.' },
      { h3: 'Island time, not India time', p: 'However the clocks change, the slot we give you is in UK time; we do the conversion at our end, where India runs a few hours ahead.' }
    ],
    spec: { title: 'Why groups are formed by level', p: 'With ten towns and about 140,000 people, the Island seldom has enough learners at one stage on one evening. Level-based groups let a Ventnor learner join a class that fits.' }
  },

  fees: {
    h2: 'Fees on the Isle of Wight',
    intro: 'Newport or Niton, the price is the same, and it matches what families pay in every other country bar India.',
    first: 'A full lesson of genuine work, ending with a suggested level and course.',
    group: 'About eight lessons a month in a group of five to ten at the same level.',
    private: 'About eight lessons a month, one teacher and one learner.',
    closer: 'Prices are quoted and billed in US dollars; we do not publish sterling prices. Nothing is billed before the free lesson has agreed a course and weekly time; the pricing page explains pauses, missed lessons and switching between group and private teaching.'
  },

  reviewsH2: 'What Island and mainland families say on Google',

  book: {
    h2: 'Try a lesson on us',
    intro: 'Send an age or year group and a hobby or two. The first lesson could be a block-coding race, a first Python ratio calculator, or the handicap race on this page.',
    success: 'Thank you. Your Isle of Wight request has been received.'
  },

  faq: {
    h2: 'Isle of Wight questions',
    intro: 'The Island, the sailing project and how lessons work.',
    items: [
      { q: 'How many people live on the Isle of Wight?', a: 'The Isle of Wight had 140,459 usual residents at the 2021 Census, from ONS figures on Nomis.' },
      { q: 'What are the largest towns on the Isle of Wight?', a: 'By ONS built-up area: Newport 25,405, Ryde 24,105, Cowes 14,365, Sandown 11,655 and Shanklin 9,120.' },
      { q: 'What is the sailing project?', a: 'Learners use the RYA\'s Portsmouth Numbers and corrected-time formula to rank a model dinghy race, see the fleet\'s spread shrink from 2,332 seconds to 157.9 seconds after correction, and test how one point in a number changes the podium.' },
      { q: 'What is a Portsmouth Number?', a: 'A handicap number for a class of dinghy from the RYA\'s Portsmouth Yardstick scheme. A boat\'s elapsed time is multiplied by 1,000 and divided by its number to give a corrected time.' },
      { q: 'Why is Cowes linked to this?', a: 'Cowes Week describes 2026 as its bicentenary regatta, and it gathers boats of many different classes, which is exactly the situation handicaps are designed for.' },
      { q: 'Is there a classroom on the Island?', a: 'No. Every lesson is live online, so an Island learner never needs the ferry to join a class.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Block coding for young children, typed Python from around ten, Python and data for teenagers, and data or Python for adults. The free lesson sets the level.' },
      { q: 'Do you teach Python to teenagers?', a: 'Yes. The teen Python course runs from beginner to advanced through games, web apps, automation, data and AI projects.' },
      { q: 'What does it cost?', a: 'The first lesson is free. If the learner carries on, groups are USD 100 per month and one-to-one lessons USD 150 per month, and there is nothing to pay to join or to commit to.' },
      { q: 'When are Isle of Wight school holidays?', a: 'The Isle of Wight Council and academies set their own dates. We arrange lesson breaks around your school\'s calendar.' }
    ]
  },

  next: {
    eyebrow: 'Across the water',
    h2: 'Pages beyond the Island',
    html: '<a class="cg-inline-link" href="/coding-classes-in-hampshire">Hampshire</a> is across the Solent, with <a class="cg-inline-link" href="/best-coding-class-in-portsmouth">Portsmouth</a> and <a class="cg-inline-link" href="/best-coding-class-in-southampton">Southampton</a> the nearest cities. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has everything else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Isle of Wight and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/coding-classes-in-hampshire', label: 'Hampshire' },
    { href: '/best-coding-class-in-portsmouth', label: 'Portsmouth' }
  ],

  personalityCss: `
.cg-root.cg-iow .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-iow .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.04; }
.cg-root.cg-iow .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-iow .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-iow .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.018em; }
.cg-root.cg-iow .cg-table caption { font-weight: 600; font-style: italic; }
.cg-root.cg-iow .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-iow .cg-table th { letter-spacing: 0.045em; font-weight: 700; }
.cg-root.cg-iow .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-iow .cg-callout { border-left-width: 6px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Isle of Wight (one unitary council). ONS Census 2021 TS001 via Nomis: Isle of Wight 140,459. ONS Census 2021 built-up areas above 3,000 (published; all agree with our OA sums): Newport 25,405; Ryde 24,105; Cowes 14,365; Sandown 11,655; Shanklin 9,120; East Cowes 8,430; Freshwater and Totland 7,520; Ventnor 5,565; Bembridge 3,560; Wootton 3,105. Cowes Week website: "Thank you to all competitors and spectators who took part in this year\'s bicentenary regatta"; "North Sails Cowes Week 2026 wraps up at the start of its third century"; "31 JUL - 6 AUG 2027". RYA Portsmouth Yardstick: "An easy way for different classes of dinghy to be competitively race against each other"; "each boats elapsed time ... must be converted to a corrected time (time converted based on a boats handicap)"; "Handicaps are allocated and administered by clubs to suit their local factors". RYA PY guidance: "Corrected time = (Elapsed time x most laps x 1000) / (PN x actual laps)". RYA PN list: 29er 900; RS Aero 7 1062; ILCA 7 / Laser 1103 (change -1); Wayfarer 1107; Solo 1139; ILCA 6 / Laser Radial 1156; RS Feva XL 1248; Mirror 1364; Topper 1369; Optimist 1629.',
    localProject: 'Handicapping by normalisation. Model race (ours, seed 20260926): course sailed by a PN 1100 boat in one hour, elapsed = 3,600/1,100 x PN x skill, skill normal mean 1, sd 0.02. Elapsed: 29er 49:15, RS Aero 7 58:01, ILCA 7 1:00:21, Wayfarer 1:01:48, Solo 1:02:16, ILCA 6 1:03:22, RS Feva XL 1:06:28, Topper 1:15:09, Mirror 1:16:14, Optimist 1:28:07; spread 2,332 s. Corrected (elapsed x 1000 / PN): RS Feva XL 3,195.5 s, Optimist 3,245.5, RS Aero 7 3,277.8, Solo 3,280.1, ILCA 7 3,282.9, 29er 3,283.3, ILCA 6 3,288.9, Topper 3,293.6, Wayfarer 3,349.6, Mirror 3,353.4; spread 157.9 s. Sensitivity: ILCA 7 at 1104 corrects to 3,279.9 (second); at 1102, 3,285.8 (fourth). Page states the race is a model and PNs and formula are the RYA\'s. AI angle: an assistant ranks without flagging a five-second margin that one point reverses. Lesson family: handicapping by normalisation, ranking and sensitivity to a published constant.',
    requiredMentions: [
      '140,459',
      'bicentenary regatta',
      'third century',
      '31 July to 6 August 2027',
      'Corrected time = (Elapsed time x most laps x 1000)',
      'ILCA 7',
      '157.9 seconds',
      'Portsmouth Yardstick',
      'Freshwater and Totland',
      '2,332 seconds'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the Isle of Wight, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Isle of Wight towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cowes Week: 2026 bicentenary regatta, third century, 2027 dates.', url: 'https://www.cowesweek.co.uk/' },
      { claim: 'RYA Portsmouth Yardstick scheme: corrected time, club administration of handicaps, current PN list.', url: 'https://www.rya.org.uk/racing/portsmouth-yardstick' }
    ],
    rejectedClaims: [
      'Cowes Week entry numbers: the site shows a live counter whose year is unclear, so no entry figure is printed.',
      'Round the Island Race facts: its site gave no connection and the Island Sailing Club site returned 406, so the race is not mentioned.',
      'How corrected times are rounded in official results: not stated on the pages read, so no rounding rule is claimed.',
      'Isle of Wight school term dates: none read.',
      'Ferry times and fares: not needed and not claimed.',
      'Named Island schools or sailing clubs\' junior programmes: none is named.'
    ]
  }
};
