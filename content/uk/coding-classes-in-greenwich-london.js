'use strict';
// Greenwich (cg- London borough page, UK cluster Phase 5, row 175). Named sources only.
// Spine: a rate becomes a drift. IERS EOP 20 C04 daily series (Paris Observatory, sampled at 0h UTC), 1962-01-01 to
// 2026-08-26 (23,614 days): LOD = length of day minus 86,400 s; UT1-UTC. IERS Leap_Second.dat (updated through Bulletin
// C 72, July 2026): TAI-UTC 10 s on 1972-01-01 to 37 s from 2017-01-01, 27 leap seconds, none since. Summing daily LOD
// from 1972-01-01 reconstructs UT1-TAI at 2026-08-26 as -36.996 s against the published -36.993 s (max error 0.004 s over
// 54 years). Yearly mean LOD excess: 1972 3.125 ms (sum 1.144 s), 1990 1.945, 2005 0.432, 2016 1.341, 2020 -0.004,
// 2021 -0.179 (230 days short), 2022 -0.249 (239 short), 2024 -0.103. Shortest day in the series 2024-07-05, -1.6508 ms;
// longest 1972-04-12, +4.355 ms; first day shorter than 86,400 s on 1986-08-02. UT1-UTC since 2017 between -0.256 and
// +0.591 s. Historic England: 1220877 Royal Observatory, The Transit House (Grade I): transit telescopes of three
// Astronomers Royal; the finally decided Prime Meridian runs through its eastern part. 1220888: wall with the 24-hour
// astronomical clock. 1358976: Flamsteed House, 1675-6, attributed to Wren. Lesson family: accumulation (running sums of
// a small daily rate) checked against a published drift; screened 25 September 2026 (UT1 0, length of day 0).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'GREENWICH', blurb: 'The Royal Observatory, the Prime Meridian and a project that rebuilds 27 leap seconds from the length of each day.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-greenwich-london',
  code: 'grn',
  accent: '#454C73',
  accentRationale: 'Greenwich: an observatory slate-blue from the solver (6.72:1 on every paper tint), greyer than the Richmond navy and bluer than the Kingston slate',
  pageType: 'governorate',
  place: {
    name: 'Greenwich',
    eyebrow: 'Royal Borough of Greenwich',
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
  routeLabel: 'Greenwich, London',
  title: 'Coding Classes in Greenwich and Woolwich | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Greenwich: Woolwich, Eltham, Charlton, Plumstead, Abbey Wood and Greenwich Peninsula. Ages 6 to 67.',
  ogDescription: 'Greenwich coding and Python classes, with a project that adds up the length of every day since 1972 and rebuilds the leap seconds that keep clocks in step with the Earth.',
  twitterDescription: 'Greenwich coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Greenwich Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the Royal Borough of Greenwich, taught live in English.'
  },

  h1: 'Coding classes in Greenwich',
  capsuleQ: 'What are the best coding classes in Greenwich?',
  capsule: 'Greenwich is the south east London borough of Greenwich, Woolwich, Eltham, Charlton, Plumstead, Abbey Wood, Kidbrooke and the Greenwich Peninsula, with 289,068 residents at the 2021 Census and the Royal Observatory, where the Prime Meridian runs through the Transit House. A coding class worth the time teaches a learner how tiny, repeated effects add up to something large, and this page does it with time itself: daily measurements of how long the Earth takes to turn, summed over half a century until they rebuild every leap second ever added to the world\'s clocks. We teach live by video from India, for anyone from 6 to 67, individually or in groups of five to ten at one level. Nothing is charged for the first lesson. From then on it is USD 100 a month in a group or USD 150 a month one to one.',
  lead: 'Historic England\'s list entry for the Transit House at the Royal Observatory says that the Prime Meridian runs through its eastern part. Greenwich gave the world a way of measuring time and place; our learners use modern data to check how steady the Earth\'s own clock really is. The International Earth Rotation and Reference Systems Service publishes, for every day since 1962, how much longer or shorter than 86,400 seconds the Earth took to spin. The differences are thousandths of a second. In 1972 each day ran about 3 milliseconds long. That sounds like nothing, but add it up over a year and it comes to more than a second, which is why leap seconds exist. Learners add up every day from 1972 to 2026 and rebuild all 27 leap seconds to within four thousandths of a second.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Greenwich.',

  picks: {
    eyebrow: 'Course picks for Greenwich',
    h2: 'First courses from Greenwich',
    intro: 'Picture a Year 1 child in Eltham who loves the big clock at the Observatory gate, a Year 9 pupil in Woolwich curious about how GPS keeps time, a Year 12 student in Charlton choosing physics or computer science, and a commuter on the Peninsula who has always wondered what a leap second is. Every one of them can start with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch clock with a second hand that drifts slightly, and a counter that adds up the drift day by day.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python: add up thousands of tiny numbers and watch a big total appear.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including the length-of-day and leap second project on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who handle rates and totals at work and want to see how small daily effects become big yearly ones.' }
    ]
  },

  sections: [
    {
      id: 'greenwich', tint: '', eyebrow: 'Greenwich in figures',
      h2: '289,068 residents and 28 Grade I entries',
      intro: 'The organisation named beside each figure publishes it, or publishes the data we counted it from.',
      body: [
        { kind: 'table', caption: 'Royal Borough of Greenwich: figures and their origin', head: ['What', 'Figure', 'Origin'], rows: [
          ['People counted at the 2021 Census', '289,068', 'ONS, table TS001'],
          ['Listed entries inside the borough, by our count', '540, including 28 Grade I and 45 Grade II*', 'Historic England data, 25 September 2026'],
          ['Council libraries in its directory', '12', 'Royal Borough of Greenwich, read 25 September 2026'],
          ['Services at Greenwich station', 'DLR, Southeastern and Thameslink', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The Observatory', p: 'Flamsteed House, built in 1675 and 1676 and attributed to Sir Christopher Wren, the Transit House, the former Great Equatorial Building and the wall holding the 24-hour astronomical clock are all Grade I.' },
          { h3: 'The river front', p: 'The quarters of the former Royal Naval College, the National Maritime Museum and the Cutty Sark are also listed at Grade I.' },
          { h3: 'Palaces and houses', p: 'The Great Hall of Eltham Palace, Charlton House, the Ranger\'s House, Vanbrugh Castle and the Paragon in Blackheath complete a remarkable list.' }
        ] },
        { kind: 'p', text: 'The council\'s directory lists libraries at Abbey Wood, Blackheath, Charlton House, Coldharbour, Eltham Centre, Greenwich Centre, New Eltham, Plumstead, Slade Centre, Thamesmere, West Greenwich and Woolwich Centre.' }
      ]
    },
    {
      id: 'earth', tint: 'tint', eyebrow: 'The data',
      h2: 'How long was yesterday?',
      intro: 'Atomic clocks keep perfectly steady seconds. The Earth does not keep perfectly steady days. The IERS series records the difference for every day since 1 January 1962: 23,614 days up to 26 August 2026.',
      body: [
        { kind: 'table', caption: 'Average length of day minus 86,400 seconds, in milliseconds', head: ['Year', 'Average excess', 'Days shorter than 86,400 s', 'Added up over the year'], rows: [
          ['1972', '+3.13', '0', '+1.14 seconds'],
          ['1990', '+1.95', '0', '+0.71 seconds'],
          ['2005', '+0.43', '73', '+0.16 seconds'],
          ['2016', '+1.34', '2', '+0.49 seconds'],
          ['2022', '-0.25', '239', '-0.09 seconds']
        ] },
        { kind: 'p', text: 'The longest day in the series was 12 April 1972, 4.355 milliseconds over 86,400 seconds. The first day shorter than 86,400 seconds came on 2 August 1986, and the shortest of all was 5 July 2024, 1.651 milliseconds under. In recent years more than half of all days have been slightly short. The IERS also publishes every leap second: atomic time and the world\'s civil time were 10 seconds apart in 1972 and have been 37 seconds apart since 1 January 2017, the last time one was added.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Rebuilding 27 leap seconds from 19,962 days',
      intro: 'Learners turn a rate into a total: add each day\'s extra length to a running sum, and compare the result with the official record.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. A running total', p: 'Start on 1 January 1972. For each day, add how much longer than 86,400 seconds it lasted. The running total is how far the Earth has fallen behind the atomic clocks.' },
          { h3: '2. Compare with the record', p: 'The IERS publishes the real gap between Earth time and atomic time. Subtract the two and see how close a simple running sum gets.' },
          { h3: '3. Find the leap seconds', p: 'Each time the gap grows by about another second, a leap second was added to keep civil clocks close to the Earth. Mark them on the chart.' }
        ] },
        { kind: 'table', caption: 'The running sum against the published record, run 25 September 2026', head: ['Measure', 'Value'], rows: [
          ['Gap between Earth time and atomic time, 1 January 1972', '10.05 seconds'],
          ['Published gap, 26 August 2026', '36.993 seconds'],
          ['Gap rebuilt by adding up every day\'s length', '36.996 seconds'],
          ['Largest error of the running sum at any point', '0.004 seconds'],
          ['Leap seconds added over the same years', '27']
        ] },
        { kind: 'p', text: 'A day about three thousandths of a second too long is invisible on any watch, yet over a year it adds up to more than a second, and over forty-five years it accounted for 27 leap seconds. The running sum rebuilds the official record to within four thousandths of a second across more than half a century. Then the story turns: since about 2020 the Earth has been spinning slightly faster, many days are now short, and no leap second has been needed since 2016. Learners see the running total level off and even dip, straight from the data.' },
        { kind: 'callout', h3: 'Why an AI answer does not replace this', p: 'An AI assistant can explain leap seconds in a paragraph. It cannot give a learner the experience of watching thousandths of a second pile up into whole seconds in their own running total, or of checking that total against the published record and finding it right to four thousandths. That experience, small rates becoming large totals, underlies interest, population growth, climate and software performance alike.' }
      ]
    },
    {
      id: 'accumulate', tint: 'tint', eyebrow: 'The big idea',
      h2: 'Small rates, large totals',
      intro: 'Summing a rate over time is one of the most useful ideas in maths and coding. Greenwich\'s data shows it with unusual clarity.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Rate and total', p: 'The length-of-day excess is a rate: seconds lost per day. The gap between clocks is its total. One is the running sum of the other.' },
          { h3: 'Check against truth', p: 'A calculation is only as good as its check. Here the published gap is an independent record to test the running sum against.' },
          { h3: 'Trends turn', p: 'The rate was positive for decades and has recently dipped below zero. A forecast made in 1990 by drawing a straight line would have been wrong.' }
        ] },
        { kind: 'p', text: 'Pupils studying GCSE maths can follow the running total and the units; A-level students can connect it to integration and compare the running sum with the trapezium rule. The Earth rotation figures are the IERS\'s, published by the Paris Observatory; the running sums, yearly averages and comparisons are our own, computed on 25 September 2026. The IERS, the Paris Observatory, Royal Museums Greenwich, the Royal Borough of Greenwich, Historic England, TfL and the ONS have no link with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Greenwich station, the DLR and a desk at home',
      intro: 'Greenwich is served by the DLR and main-line trains. Our classes are served by broadband.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Greenwich', p: 'TfL\'s open data lists the DLR, Southeastern and Thameslink at Greenwich station.' },
          { h3: 'Eltham to the Peninsula', p: 'A learner in Eltham and one on the Greenwich Peninsula can join the same lesson from home.' },
          { h3: 'On time', p: 'Our timetable keeps steadier time than the Earth: two evenings a week, the same group of five to ten learners at one stage.' }
        ] },
        { kind: 'spec', title: 'Greenwich among the boroughs', p: 'Greenwich is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> covers all of them and the City, adding a link to each page as it is published, including <a class="cg-inline-link" href="/coding-classes-in-bexley-london">Bexley</a> to the east.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a drifting clock to running sums',
    intro: 'In the free lesson we see what the learner can already do, and that, more than a year group, sets where they start.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Clocks and counting', p: 'Children build clocks in Scratch and count how a small change each tick adds up.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Loops that add', p: 'Python loops that keep a running total over thousands of values and print where it crosses each whole number.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Rates and totals', p: 'Running sums checked against a published record, the idea behind integration, a strong physics or computing project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Compounding effects', p: 'Adults learn to see how small, persistent rates turn into large totals, in data they meet every day.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can explain leap seconds. Why should a Greenwich teenager compute them?',
    intro: 'Because explanations are cheap, and checking them against the record is not.',
    p1: 'Any assistant can tell you that the Earth\'s rotation is irregular and that leap seconds correct for it. A learner who has added up 19,962 daily measurements and landed within four thousandths of a second of the official gap knows it, and knows how to check a claim rather than repeat it. They have also seen the trend reverse in the 2020s, something a confident summary written from older sources could easily miss.',
    p2: 'Running sums, units and independent checks are the backbone of trustworthy software, from bank balances to satellite navigation. AI will keep generating explanations. People who can verify them against real data will keep being needed.',
    closer: 'Greenwich has been measuring time for three and a half centuries. A Greenwich learner who can measure the Earth\'s own timekeeping with code is part of that story.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Woolwich to Blackheath, live lessons at home',
    intro: 'Anywhere in the Royal Borough, a lesson begins when the video call does.',
    cells: [
      { h3: 'Home desk', p: 'Learners need a laptop or desktop, headphones and an internet connection good enough for video calls.' },
      { h3: 'English school stages', p: 'We talk about progress using the Key Stages English schools use, Key Stage 1 up to sixth form, with GCSE and A level mentioned where relevant. Lessons are in English.' },
      { h3: 'Start for free', p: 'A proper first lesson with a teacher, free, ending with a recommended level and course. No payment details are requested.' },
      { h3: 'Same-level classes', p: 'Five to ten learners at the same stage form each class, drawn from across the UK and abroad, so there is usually a suitable hour.' },
      { h3: 'Two evenings weekly', p: 'Classes generally meet twice a week in the evening, pausing for half terms, holidays and exams as agreed.' },
      { h3: 'Greenwich Mean Time, naturally', p: 'Teachers work from India, but every time we send is given as it reads on a UK clock.' }
    ],
    spec: { title: 'A large borough, one right class', p: 'Nearly 290,000 people live in Greenwich, and a good class still needs five learners at one level free together, so our groups draw far beyond the borough.' }
  },

  fees: {
    h2: 'Fees for Greenwich families',
    intro: 'The first lesson is free; after that one monthly fee applies across the Royal Borough.',
    first: 'A full lesson with a teacher, free, finishing with a recommended level, course and time.',
    group: 'About eight live lessons a month in a group of five to ten at one stage.',
    private: 'About eight live lessons a month, one to one.',
    closer: 'Greenwich families pay in US dollars, as all families outside India do, and the site shows no prices in pounds. Nothing is charged until the free lesson is complete and you have chosen a course and regular time. Pausing, missed lessons and switching between group and private lessons are explained on the pricing page.'
  },

  reviewsH2: 'Families\' reviews from Google',

  book: {
    h2: 'Request a free lesson',
    intro: 'Tell us an age or school year and one interest. We could start with a Scratch clock, a Python running total, or the leap second project from this page.',
    success: 'Thank you. Your Greenwich lesson request has reached us.'
  },

  faq: {
    h2: 'Greenwich questions',
    intro: 'About the borough, the Earth rotation project and our classes.',
    items: [
      { q: 'How many people live in Greenwich?', a: 'The 2021 Census counted 289,068 usual residents in the Royal Borough of Greenwich, published in ONS table TS001.' },
      { q: 'Does the Prime Meridian really run through Greenwich?', a: 'Yes. Historic England\'s list entry for the Transit House at the Royal Observatory, a Grade I building, states that the finally decided Prime Meridian runs through its eastern part.' },
      { q: 'What is a leap second?', a: 'A second added to civil time to keep it close to the time kept by the Earth\'s rotation. According to the IERS, 27 were added between 1972 and 2016, and none since.' },
      { q: 'Is the Earth speeding up?', a: 'In recent years, slightly. The IERS data shows that in 2022, 239 days were shorter than 86,400 seconds, and the shortest day since records in this series began in 1962 was 5 July 2024, about 1.65 thousandths of a second short.' },
      { q: 'How can adding up days rebuild leap seconds?', a: 'Each day\'s excess length is how much the Earth fell behind atomic time that day. Adding them all up from 1972 gives the total gap; our running sum lands within 0.004 seconds of the published figure in 2026.' },
      { q: 'When are lessons for Greenwich learners?', a: 'After the free lesson we offer a regular weekly time in a class at the right level with space. Teachers are in India; the time is given in UK time.' },
      { q: 'What does a learner need?', a: 'A computer with sound and a steady connection. The Earth rotation project needs Python and two free files from the IERS.' },
      { q: 'Is there a Modern Age Coders centre in Greenwich?', a: 'No. There is no Greenwich centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Greenwich cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'From the meridian outwards',
    html: 'Every borough and the City has a place on the <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a>, linked when its page goes live, such as <a class="cg-inline-link" href="/coding-classes-in-richmond-upon-thames-london">Richmond upon Thames</a>, home of Kew Observatory, and <a class="cg-inline-link" href="/coding-classes-in-newham-london">Newham</a> across the Thames. Learners who enjoy data and prediction can continue with our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> compares school stages across the four UK nations.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Greenwich and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-bexley-london', label: 'Bexley' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-grn .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-grn .cg-hero h1 { font-weight: 730; letter-spacing: -0.016em; line-height: 1.05; }
.cg-root.cg-grn .cg-capsule { border-left: 1px solid var(--cg-accent); border-right: 1px solid var(--cg-accent); border-top: 4px solid var(--cg-accent); padding: 0.9rem; }
.cg-root.cg-grn .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-grn .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-grn .cg-grid-3 { gap: clamp(0.9rem, 2.4vw, 1.75rem); }
.cg-root.cg-grn .cg-table caption { font-weight: 700; letter-spacing: 0.016em; }
.cg-root.cg-grn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-grn .cg-table td:nth-child(2) { font-weight: 650; }
.cg-root.cg-grn .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-grn .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Greenwich. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000011): 289,068 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 540 (I 28, II* 45, II 467); Grade I include 1358976 ROYAL OBSERVATORY FLAMSTEED HOUSE (1675-6, attributed to Wren), 1220877 Royal Observatory, The Transit House (transit telescopes of three Astronomers Royal; the finally decided Prime Meridian runs through the eastern part), 1078998 Royal Observatory former Great Equatorial Building, 1220888 ROYAL OBSERVATORY WALL AND CLOCK (24-hour astronomical clock), 1211481 NATIONAL MARITIME MUSEUM, 1079013 CUTTY SARK, Royal Naval College quarters, 1079041 GREAT HALL OF ELTHAM PALACE, 1218593 CHARLTON HOUSE, 1218679 THE RANGER\'S HOUSE, 1078943 VANBRUGH CASTLE, 1211997 THE PARAGON. Royal Greenwich directory/26/libraries, 25 September 2026: Abbey Wood, Blackheath, Charlton House, Coldharbour, Eltham Centre, Greenwich Centre, New Eltham, Plumstead, Slade Centre, Thamesmere, West Greenwich, Woolwich Centre. TfL Unified API HUBGNW (Greenwich): DLR, Southeastern, Thameslink.',
    localProject: 'IERS EOP 20 C04 (hpiers.obspm.fr/iers/eop/eopc04/eopc04.1962-now), sampled at 0h UTC, 1962-01-01 to 2026-08-26: 23,614 days; columns UT1-UTC (s) and LOD (s excess over 86,400). IERS Leap_Second.dat (updated through Bulletin 72, July 2026; expires 28 June 2027): TAI-UTC 10 s from 1972-01-01 to 37 s from 2017-01-01 (27 leap seconds). UT1-TAI = UT1-UTC - (TAI-UTC): 1972-01-01 -10.0455; 2026-08-26 -36.9931; running sum of -LOD from 1972-01-01 gives -36.9955 (max abs error 0.004 s over 19,962 days). Yearly mean LOD excess (ms) / days < 86,400 / yearly sum (s): 1972 3.125/0/1.144; 1990 1.945/0/0.710; 2005 0.432/73/0.158; 2016 1.341/2/0.491; 2020 -0.004/168/-0.001; 2021 -0.179/230/-0.065; 2022 -0.249/239/-0.091; 2024 -0.103/207/-0.038. Extremes: longest 1972-04-12 +4.355 ms; shortest 2024-07-05 -1.6508 ms; first negative 1986-08-02; 2,095 negative days in all. UT1-UTC since 2017: -0.2562 to +0.5913 s. Lesson family: running sums of a rate checked against a published cumulative record; screened 25 September 2026 (UT1 0, length of day 0; Wakefield taught numerical integration of a different kind).',
    requiredMentions: [
      '289,068',
      'Transit House',
      'Flamsteed House',
      'Prime Meridian',
      'leap seconds',
      'Great Equatorial',
      'Eltham Palace',
      'Charlton House',
      'Vanbrugh Castle'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Greenwich E09000011: 289,068 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000011&measures=20100' },
      { claim: 'IERS EOP 20 C04 daily Earth orientation parameters, 1962 to 2026 (UT1-UTC and length of day).', url: 'https://hpiers.obspm.fr/iers/eop/eopc04/eopc04.1962-now' },
      { claim: 'IERS table of TAI-UTC and leap seconds since 1972.', url: 'https://hpiers.obspm.fr/iers/bul/bulc/Leap_Second.dat' },
      { claim: 'Historic England list entry 1220877, Royal Observatory, The Transit House: Prime Meridian runs through the eastern part.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1220877' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Greenwich on 25 September 2026: 540 (28 I, 45 II*, 467 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'Royal Borough of Greenwich library directory.', url: 'https://www.royalgreenwich.gov.uk/directory/26/libraries' },
      { claim: 'TfL Unified API, StopPoint HUBGNW (Greenwich): DLR, Southeastern, Thameslink.', url: 'https://api.tfl.gov.uk/StopPoint/HUBGNW' }
    ],
    rejectedClaims: [
      'The exact rule for when leap seconds are added (0.9 s tolerance): not read in a primary standard for this build; the page says only that they keep civil time close to Earth time.',
      'Causes of the recent speed-up (core, oceans, ice melt): not established from the data; not stated.',
      'Proposals to abolish leap seconds: not read at a primary source for this build; not mentioned.',
      'Thames Barrier closure trends: the only per-season figures are in a chart image on gov.uk; not digitised or used.',
      'Greenwich schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth for Greenwich: never a standout; used only to order the build.'
    ]
  }
};
