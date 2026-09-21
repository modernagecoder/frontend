'use strict';
// Belfast (cg- city page, UK cluster Phase 4). Spine: which stop holds the network together? PageRank on the
// Translink Metro and Glider timetable published through OpenDataNI (TransXChange file
// metro-glider-from-1st-sept-26.zip, dataset updated 4 September 2026; operating period 1 September 2026 to 30
// June 2027), read 21 September 2026 (scratchpad bel/pagerank.py). Network: 2,090 stops, 132 lines, 7,722
// scheduled vehicle journeys, 2,494 directed stop-to-stop links, 231,651 journey-weighted traversals; 7 stops have
// no onward link; median out-degree 1, maximum 8. Weighted PageRank (damping 0.85): 1 May Street (St George's
// Market) 0.00310, 2 Central Library, 3 May Street (City Hall), 4 Donegall Place, 5 Victoria Square (Victoria
// Street). Dundonald Park and Ride has the most journeys (1,321) but ranks 19th. Donegall Square West is 7th by
// journeys, 10th by weighted PageRank and 186th when the weights are dropped. Convergence: 39 passes to 1e-4, 96 to
// 1e-9; the top ten settles after 21 passes; damping from 0.50 to 0.95 leaves the same top stop. Lesson family:
// PageRank and network centrality (random surfer, damping, weighted edges, convergence). Screened free site-wide on
// 21 September 2026 (PageRank, damping: 0 hits).
// Place facts read raw on 21 September 2026: NISRA Census 2021 main statistics, MS-A01 (Belfast Local Government
// District N09000003: 345,418 usual residents) and MS-A02 (the same district totals 345,417 in the age table, one
// fewer, so the two tables are never mixed or added: 19,788 aged 0 to 4; 21,328 aged 5 to 9; 21,213 aged 10 to 14;
// 21,412 aged 15 to 19; 28,919 aged 20 to 24, 8.37%; 26,735 aged 25 to 29, 7.74%; Northern Ireland shares 5.85% and
// 6.12%, and 6.54% for 5 to 9 against Belfast's 6.17%). Queen's University Belfast, About (founded in 1845 as
// Queen's College Belfast, an independent university from 1908, a member of the Russell Group). Translink Glider
// pages returned HTTP 404 and were not used; Glider stops appear in the timetable file itself.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'BELFAST', blurb: 'A project that runs PageRank over 2,090 Metro and Glider stops to find the one that holds Belfast together.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-belfast',
  code: 'bel',
  accent: '#5F581C',
  accentRationale: 'Belfast: a dark shipyard ochre from the solver (5.88:1 on every paper tint, dE 7.8 from the nearest used accent), a quiet nod to the cranes and clear of the Coventry olive',
  pageType: 'city',
  place: {
    name: 'Belfast',
    eyebrow: 'Belfast, Northern Ireland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Belfast' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Belfast, Northern Ireland',
  title: 'Best Coding Classes in Belfast | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Belfast learners aged 6 to 67, from the Ormeau Road and Stranmillis to Andersonstown. First lesson free.',
  ogDescription: 'Coding and AI lessons for Belfast, on a page that runs PageRank across 2,090 Metro and Glider stops to find the one holding the network together.',
  twitterDescription: 'Belfast learners aged six to sixty-seven can learn coding and AI with us live online, starting with one free lesson.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Belfast Live Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, AI, data and mathematics taught live online in English to Belfast children, teenagers and adults, in level-based groups or one to one.'
  },

  h1: 'Coding classes in Belfast',
  capsuleQ: 'What are the best coding classes in Belfast?',
  capsule: 'Belfast counted 345,418 usual residents at the 2021 Census, and 8.37% of them were aged 20 to 24, against 5.85% across Northern Ireland. Queen\'s University Belfast, founded in 1845 as Queen\'s College Belfast, became an independent university in 1908. Learners in Belfast, from six-year-olds to people of sixty-seven, study with Modern Age Coders live online, one to one or in groups of five to ten set by level, with teachers based in India and lesson times fixed in UK hours. The first lesson is free. After it, a group place costs USD 100 a month and one-to-one teaching USD 150 a month.',
  lead: 'Which bus stop matters most in Belfast? The busiest is easy to find: Translink\'s published timetable sends 1,321 scheduled journeys through Dundonald Park and Ride. But busiest is not the same as most central. Imagine a passenger who hops on at a random stop, rides one leg, then repeats, occasionally starting again somewhere new. Where does that wanderer spend most time? That question is answered by PageRank, the algorithm that first ranked the web, and run over 2,090 Metro and Glider stops it puts May Street at St George\'s Market first, with the Central Library and May Street at City Hall next. Dundonald, for all its journeys, comes 19th, because a terminus takes passengers in and rarely passes them on. Working out why the two rankings disagree is the lesson Belfast\'s bus network gives our teenage learners.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Belfast.',

  picks: {
    eyebrow: 'Course picks for Belfast',
    h2: 'Four courses for a city of networks',
    intro: 'Start from what the learner enjoys. Each course opens with a free live lesson, booked without card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Logic, patterns and first programs, where drawing a map of stops and counting the routes between them is a natural puzzle.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Graphs, trees and traversals built from scratch, the structures a transport network turns into.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning from the ground up, where ranking, weighting and iteration appear again and again.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Interview-standard graph algorithms for adults, including the iterative methods behind ranking systems.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Belfast today',
      h2: 'A city with a pronounced bulge in its twenties',
      intro: 'From the Northern Ireland Statistics and Research Agency, Census 2021 main statistics for the Belfast Local Government District.',
      body: [
        { kind: 'table', caption: 'Belfast Local Government District, Census 2021', head: ['Measure', 'Belfast', 'Northern Ireland'], rows: [
          ['Usual residents (table MS-A01)', '345,418', 'Not compared'],
          ['Aged 5 to 9', '21,328, 6.17%', '6.54%'],
          ['Aged 10 to 14', '21,213, 6.14%', '6.67%'],
          ['Aged 15 to 19', '21,412, 6.20%', '5.95%'],
          ['Aged 20 to 24', '28,919, 8.37%', '5.85%'],
          ['Aged 25 to 29', '26,735, 7.74%', '6.12%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Students and early careers', p: 'The share aged 20 to 24 reached 8.37% in Belfast against 5.85% across Northern Ireland, and 25 to 29 year olds were 7.74% against 6.12%.' },
          { h3: 'Fewer primary-age children', p: 'Children aged 5 to 9 made up 6.17% of Belfast residents, a little below the Northern Ireland figure of 6.54%.' },
          { h3: 'Two tables, two totals', p: 'The population table gives Belfast 345,418 residents and the age table 345,417. Each is protected separately, so we quote them apart and never mix them.' }
        ] },
        { kind: 'p', text: 'That profile shapes who learns with us here. A Belfast household might include a Year 6 pupil in Cregagh working towards the transfer test, a Year 12 student in Stranmillis taking CCEA GCSE Digital Technology, or a graduate near the Ormeau Road picking up Python, and each joins five to ten learners at their own level rather than their age.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'A university and a network',
      h2: 'From Queen\'s College to a city of 2,090 stops',
      intro: 'From Queen\'s University Belfast and from Translink\'s published timetable data.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1845', p: 'Queen\'s University Belfast says it was founded that year as Queen\'s College Belfast, becoming an independent university in 1908. It is a member of the Russell Group.' },
          { h3: '132 lines', p: 'The Metro and Glider timetable published through OpenDataNI lists 132 line names and 7,722 scheduled vehicle journeys for the period from 1 September 2026 to 30 June 2027.' },
          { h3: '2,090 stops', p: 'The same file names 2,090 stops and 2,494 one-way links between neighbouring stops, from the city centre out to Glengormley, Twinbrook and Dundonald.' }
        ] },
        { kind: 'p', text: 'We have no connection with Queen\'s University Belfast or Translink. We use the timetable because it is published as open data and because a bus network is a graph a learner can walk through in their head: stops are the dots, and every pair of consecutive stops on a journey is an arrow between them. Most stops are simple: the median stop has exactly one onward link, and only seven have none at all, which is what the end of a route looks like in data.' },
        { kind: 'spec', title: 'A timetable, not a headcount', p: 'The file says how many buses are scheduled, not how many people ride them. Every figure on this page therefore describes planned services, and a stop that sees many journeys is not necessarily a stop where many passengers get on.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which stop holds the network together?',
      intro: 'PageRank imagines a passenger riding random legs forever and asks where they spend their time. We ran it over the Metro and Glider network, weighting each link by the number of scheduled journeys along it.',
      body: [
        { kind: 'table', caption: 'Belfast Metro and Glider stops by weighted PageRank, timetable from 1 September 2026', head: ['Rank', 'Stop', 'Scheduled journeys', 'Rank by journeys'], rows: [
          ['1', 'May Street, St George\'s Market', '1,099', '5'],
          ['2', 'Central Library', '1,039', '6'],
          ['3', 'May Street, City Hall', '1,234', '3'],
          ['4', 'Donegall Place', '1,278', '2'],
          ['5', 'Victoria Square, Victoria Street', '1,212', '4'],
          ['19', 'Dundonald Park and Ride', '1,321', '1']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Build the graph', p: 'Every pair of consecutive stops on a journey pattern becomes an arrow, and each arrow carries the number of scheduled journeys that use it: 2,494 arrows and 231,651 journey-weighted crossings.' },
          { h3: '2. Send the passenger', p: 'Start with equal importance everywhere. Each pass, every stop hands its importance along its arrows in proportion to the journeys, keeping 15% back to scatter evenly. That 15% is the damping rule.' },
          { h3: '3. Repeat until still', p: 'The numbers stop moving: 39 passes bring the total change below a ten-thousandth, and 96 passes below a billionth. The top ten stops settle after 21.' }
        ] },
        { kind: 'callout', h3: 'Busiest is not most central', p: 'Dundonald Park and Ride sees more scheduled journeys than any other stop, 1,321, yet it comes 19th on PageRank. It sits at the end of a corridor: buses arrive and turn round, so importance flows in and stops. May Street at St George\'s Market carries fewer journeys but sits where many routes hand passengers onward, and that is what the algorithm rewards.' },
        { kind: 'p', text: 'The weights matter as much as the shape. Drop them, treating every link as equal, and Donegall Square West falls from tenth to 186th, because it is a stop with few distinct links but a great many buses along them. Changing the damping from 0.50 to 0.95 does not change the top stop at all, which is a useful reassurance: the ranking reflects the network rather than one arbitrary setting.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Ranking a network',
      h2: 'Five habits for ranking anything connected',
      intro: 'Learned on bus stops, used afterwards on web links, citations, social follows, road networks and any system where importance flows from one thing to another.',
      body: [
        { kind: 'table', caption: 'Ranking a network you can defend', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Say what an arrow means', 'Define a link as one leg between consecutive stops on a scheduled journey', 'A graph nobody can reproduce'],
          ['Decide about weights', 'Weight links by scheduled journeys, and report the unweighted ranking too', 'A ranking that hides how often a link is used'],
          ['Handle dead ends', 'Spread the importance of stops with no onward link across the network', 'Importance leaking away at termini'],
          ['Check convergence', 'Keep passing until the numbers stop moving, and say how many passes that took', 'Publishing a half-finished ranking'],
          ['Test the settings', 'Rerun with damping from 0.50 to 0.95 and see whether the order changes', 'A result that depends on one arbitrary choice']
        ] },
        { kind: 'p', text: 'The third habit matters in Belfast more than it sounds. Seven stops have no onward link in the timetable, and without a rule for them the importance flowing in would simply vanish, leaving every other number slightly wrong. PageRank handles it by scattering that share evenly, which is exactly what the original web algorithm does with pages that link nowhere.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A hand-drawn map of a few stops, counters passed along the arrows by hand, and the surprise of seeing one stop collect the most.' },
          { h3: 'Teenagers', p: 'The Translink file parsed in Python, the graph built, PageRank written from scratch and tested against journey counts and damping changes.' },
          { h3: 'Adults', p: 'Centrality measures at work, from networks and supply chains to recommendation systems, with their assumptions stated.' }
        ] },
        { kind: 'p', text: 'We are not connected with Translink, OpenDataNI or the Northern Ireland Statistics and Research Agency. The timetable and census tables are published for public use; the graph, the rankings and the convergence counts are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a map of stops to PageRank in Python',
    intro: 'Ages are a rough guide only; the free lesson settles the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Maps and arrows', p: 'Drawing places and the paths between them, counting how many ways lead to each place and spotting the busy one.', courses: ['problem-solving-and-computational-thinking-for-kids', 'elementary-mathematics-complete-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Lists that point at lists', p: 'Storing a network in code, following links from one place to the next, and counting what arrives where.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Graphs and PageRank', p: 'Real timetable data turned into a weighted graph, the algorithm coded from scratch and its settings tested.', courses: ['problem-solving-dsa-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Centrality at work', p: 'Graph algorithms and iterative methods for analysts and engineers, with assumptions and convergence reported.', courses: ['data-structures-algorithms-masterclass-college', 'data-analytics-mathematics-masterclass'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant can name Belfast\'s busiest bus stop. Why should a teenager here code PageRank?',
    intro: 'Because counting is easy and importance is not.',
    p1: 'Ask an AI tool which Belfast stop is most important and it will probably answer with the busiest, or with the most familiar name in the city centre. The timetable says those are different questions: Dundonald Park and Ride has the most scheduled journeys and comes 19th for centrality. A learner who has built the graph knows that the honest answer begins by asking what important is supposed to mean.',
    p2: 'PageRank is also a piece of AI history worth knowing. It ranked the early web by treating links as votes that carry weight, and the same idea of importance flowing through a network now runs under recommendation systems, fraud detection and the graph methods used in machine learning. Coding it once, on a network you can walk through, makes all of those far less mysterious.',
    closer: 'So a Belfast teenager should still learn to program in 2026, in a city whose bus map is a graph in disguise: tools will rank anything you ask them to, and knowing what a ranking actually measures is what makes it worth using.',
    blogAnchor: 'why coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Stranmillis, Andersonstown or Cregagh, from home',
    intro: 'Belfast is a compact city, but a live online lesson removes the journey altogether.',
    cells: [
      { h3: 'East or west of the Lagan', p: 'A learner in Ballysillan and another in Titanic Quarter can share the same lesson without either taking a bus.' },
      { h3: 'Northern Ireland school years', p: 'Years 1 to 14, the transfer test, CCEA GCSEs and A levels: lessons follow the names local schools use, and teaching is in English.' },
      { h3: 'A free lesson with a plan', p: 'The first lesson teaches something real and ends with a suggested level, a course and a weekly time. No card details are asked for.' },
      { h3: 'Level, not postcode', p: 'Each group holds five to ten learners at one stage, drawn from Belfast, the rest of the UK and abroad, so every level finds a workable hour.' },
      { h3: 'Two lessons a week', p: 'The rhythm is two fixed lessons weekly, roughly eight a month, with holiday and exam pauses agreed with the teacher in advance.' },
      { h3: 'Teachers on India time', p: 'India Standard Time never changes, so our teachers run four and a half hours ahead of Belfast in summer and five and a half in winter, which puts after-school and evening lessons inside their day.' }
    ],
    spec: { title: 'Across Northern Ireland', p: 'Families in Lisburn, Bangor or Newtownabbey join exactly the same groups, because every lesson is online and groups are formed by level rather than address.' }
  },

  fees: {
    h2: 'Belfast lesson fees',
    intro: 'One free lesson, then a single monthly price.',
    first: 'A complete lesson at no cost, closing with a level, a recommended course and a proposed weekly time.',
    group: 'About eight live lessons a month in a group of five to ten learners at one level.',
    private: 'About eight live lessons a month with the teacher working only with your learner.',
    closer: 'Everyone outside India pays the same US dollar fee, so a family on the Antrim Road pays what a family in Ballyhackamore pays, and we publish no prices in pounds. Nothing is charged until the free lesson has agreed a course and a slot; the pricing page explains pauses, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews from families, quoted in full',

  book: {
    h2: 'Book a free lesson for a Belfast learner',
    intro: 'We match the first task to the learner: a hand-drawn map of stops for a young child, a first Python program that follows links, or the Translink timetable and PageRank from scratch for a teenager ready for real data.',
    success: 'Thank you. The team will be in touch shortly to arrange a Belfast lesson.'
  },

  faq: {
    h2: 'Belfast coding class questions',
    intro: 'The questions Belfast families ask us most.',
    items: [
      { q: 'How many people live in Belfast?', a: 'The 2021 Census counted 345,418 usual residents in the Belfast Local Government District, according to NISRA table MS-A01. The separate age table, MS-A02, totals 345,417, because each table is protected for confidentiality on its own.' },
      { q: 'Is Belfast a young city?', a: 'It has a clear bulge in its twenties: 8.37% of residents were aged 20 to 24 against 5.85% across Northern Ireland, and 7.74% were 25 to 29 against 6.12%.' },
      { q: 'What is PageRank?', a: 'An algorithm that ranks the parts of a network by imagining something moving along its links at random and asking where it spends its time. It was created to rank web pages and works on any network, including a bus map.' },
      { q: 'Which Belfast stop ranks highest?', a: 'On the Metro and Glider timetable from 1 September 2026, weighted PageRank puts May Street at St George\'s Market first, followed by the Central Library and May Street at City Hall.' },
      { q: 'Which stop has the most buses?', a: 'Dundonald Park and Ride, with 1,321 scheduled journeys, but it ranks 19th on PageRank because it sits at the end of a corridor rather than in the middle of the network.' },
      { q: 'Do you follow the Northern Ireland curriculum?', a: 'We use Northern Ireland school years and CCEA course names, and support learners working towards CCEA GCSE Digital Technology and A level Software Systems Development; our CCEA pages explain each one.' },
      { q: 'When are Belfast lessons held?', a: 'On weekday afternoons and evenings or at weekends, at a UK time agreed in the free lesson. India runs four and a half hours ahead of Belfast in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Belfast?', a: 'No. There is no Belfast centre and no premises anywhere in the UK; every lesson is taught live online. Learners need a computer with sound and a steady connection, and our phone number is based in India.', boiler: true },
      { q: 'How much do Belfast lessons cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same timetable are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Belfast groups formed?', a: 'By level, pace and aims rather than age or postcode, with five to ten learners at one stage. If no group meets at a suitable time, we offer one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Northern Ireland and the UK',
    h2: 'Northern Irish guides and other cities',
    html: 'The <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland guide</a> explains how computing sits in the local curriculum, and exam help lives on the <a class="cg-inline-link" href="/ccea-gcse-digital-technology-programming-help">CCEA GCSE Digital Technology</a> and <a class="cg-inline-link" href="/ccea-a-level-software-systems-development-help">A level Software Systems Development</a> pages. Across the water, <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> measures its own boundary eight different ways. Every UK page is listed on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Belfast and the UK',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/ccea-gcse-digital-technology-programming-help', label: 'CCEA GCSE' },
    { href: '/best-coding-class-in-glasgow', label: 'Glasgow' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-bel .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.9vw, 2.6rem); }
.cg-root.cg-bel .cg-hero h1 { font-weight: 700; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-bel .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.3rem; }
.cg-root.cg-bel .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bel .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.014em; }
.cg-root.cg-bel .cg-grid-3 { gap: clamp(1.2rem, 2.8vw, 2.35rem); }
.cg-root.cg-bel .cg-table caption { font-weight: 700; letter-spacing: 0.013em; }
.cg-root.cg-bel .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bel .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-bel .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Belfast, NISRA Census 2021 main statistics: MS-A01 Belfast Local Government District (N09000003) 345,418 usual residents; MS-A02 age table for the same district totals 345,417 and gives 19,788 aged 0 to 4, 21,328 aged 5 to 9 (6.17 percent), 21,213 aged 10 to 14 (6.14), 21,412 aged 15 to 19 (6.20), 28,919 aged 20 to 24 (8.37), 26,735 aged 25 to 29 (7.74), against Northern Ireland shares of 6.54, 6.67, 5.95, 5.85 and 6.12 percent. The two tables are quoted separately and never added. Queen\'s University Belfast: founded 1845 as Queen\'s College Belfast, independent university from 1908, Russell Group member. Translink Metro and Glider timetable via OpenDataNI (TransXChange, dataset updated 4 September 2026, operating period 1 September 2026 to 30 June 2027): 2,090 stops, 132 line names, 7,722 scheduled vehicle journeys.',
    localProject: 'Which stop holds the network together? PageRank over the Translink Metro and Glider TransXChange file: 2,090 stops, 2,494 directed stop-to-stop links, 231,651 journey-weighted crossings, 7 stops with no onward link, median out-degree 1 and maximum 8. Weighted PageRank at damping 0.85: May Street (St George\'s Market) 0.00310, Central Library, May Street (City Hall), Donegall Place, Victoria Square (Victoria Street). Dundonald Park and Ride leads on scheduled journeys (1,321) but ranks 19th. Donegall Square West: 7th by journeys, 10th weighted, 186th unweighted. Convergence 39 passes to 1e-4 and 96 to 1e-9; top ten stable after 21; damping 0.50 to 0.95 leaves the top stop unchanged. The data is scheduled service, not passenger counts. Lesson family: PageRank and network centrality; distinct from union-find, shortest paths, Voronoi and Markov chains.',
    requiredMentions: [
      '345,418',
      '345,417',
      '28,919',
      '26,735',
      '21,328',
      'PageRank',
      'Donegall',
      'Dundonald',
      '2,090',
      'damping',
      'Queen\'s College Belfast',
      '2,494'
    ],
    sources: [
      { claim: 'NISRA, Census 2021 MS-A01: Belfast Local Government District 345,418 usual residents.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'NISRA, Census 2021 MS-A02: Belfast and Northern Ireland five-year age bands and shares.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a02.xlsx' },
      { claim: 'NISRA, Census 2021 main statistics demography tables (age and sex) publication page.', url: 'https://www.nisra.gov.uk/publications/census-2021-main-statistics-demography-tables-age-and-sex' },
      { claim: 'Translink Metro and Glider timetable data via OpenDataNI (TransXChange, from 1 September 2026).', url: 'https://www.opendatani.gov.uk/@translink/metro-timetable-data-valid-from-18-june-until-31-august-2016' },
      { claim: 'Queen\'s University Belfast, About: founded 1845 as Queen\'s College Belfast, independent university in 1908, Russell Group.', url: 'https://www.qub.ac.uk/about/' }
    ],
    rejectedClaims: [
      'Glider route facts from Translink\'s own pages: those pages returned HTTP 404, so only the timetable file is used.',
      'Passenger numbers: the timetable records scheduled journeys, not boardings, and the page says so.',
      'Belfast LiDAR flood modelling: examined and dropped, because open water carries surface heights in the terrain model, so a flood fill could not be trusted.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Translink, OpenDataNI, NISRA or Queen\'s University Belfast.'
    ]
  }
};
