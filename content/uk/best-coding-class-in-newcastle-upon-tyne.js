'use strict';
// Newcastle upon Tyne (cg- city page, UK cluster Phase 4). Spine: four colours for 26 wards. Graph colouring of
// the ONS Wards (December 2023) inside the Newcastle local authority (26 wards, selected by label point inside the
// ONS LAD December 2023 BGC boundary), read 21 September 2026 (scratchpad ncl/colour.py). Adjacency = at least one
// shared boundary segment; built from the generalised (BGC) and the full-resolution (BFC) files, which agree
// exactly: 59 bordering pairs; four pairs touch at a single point only (Benwell & Scotswood / Denton & Westerhope,
// Dene & South Gosforth / Wingrove, Gosforth / North Jesmond, Lemington / West Fenham). Wingrove has 8 neighbours;
// Walker and Manor Park 2 each. Greedy: alphabetical order 6 colours; largest degree first (Welsh-Powell) 5;
// 100,000 random orders (seed 20260921): 4 colours in about 17%, 5 in about 77%, 6 in about 6%, 7 in 7 orders.
// Backtracking (largest first): 3 colours impossible after 1,704 tries; 4 colours found after 81. Two sets of four
// mutually bordering wards (Arthur's Hill, Elswick, Monument, Wingrove; Callerton & Throckley, Chapel, Denton &
// Westerhope, Lemington) prove four are needed. One four-colouring: classes of 7, 7, 8 and 4 wards (Castle,
// Chapel, Kenton and Monument together). 34 triangles. Lesson family: graph colouring (greedy order dependence,
// lower bounds from cliques, exact backtracking). Screened free site-wide on 21 September 2026 (graph colouring,
// four colour, Welsh-Powell: 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 for Newcastle upon Tyne E08000021 (300,125
// usual residents; 282,879 in households, 94.3%; 17,246 in communal establishments, 5.7%), TS007A (23,355 aged 15 to
// 19, 7.8%; 36,645 aged 20 to 24, 12.2%; 23,390 aged 25 to 29, 7.8%; England 5.7, 6.0 and 6.6%), TS068 (82,809
// schoolchildren and full-time students of 284,474 aged 5 and over, 29.1%; England 20.4%). Literary and
// Philosophical Society of Newcastle upon Tyne, About us and home (founded 1793; library opened 1825 on Westgate
// Road; George Stephenson demonstrated his miners' safety lamp to the Society in 1815; Joseph Swan lit a public room
// with electric light for the first time there in 1881). Newcastle University, History (School of Medicine and
// Surgery formally established on 1 October 1834; first cohort fewer than a dozen students).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'NEWCASTLE', blurb: 'Where Swan first lit a public room by electric light, with a project that colours the city\'s 26 wards so no neighbours match.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-newcastle-upon-tyne',
  code: 'ncl',
  accent: '#1D2787',
  accentRationale: 'Newcastle: a deep royal blue from the solver (10.07:1 on every paper tint, dE 7.2 from the nearest used accent), brighter than the Sheffield indigo and the Milton Keynes navy',
  pageType: 'city',
  place: {
    name: 'Newcastle upon Tyne',
    eyebrow: 'Newcastle upon Tyne, Tyne and Wear, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Tyne and Wear' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Newcastle upon Tyne, England',
  title: 'Best Coding Classes in Newcastle upon Tyne | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Newcastle upon Tyne learners aged 6 to 67, from Jesmond and Heaton to Fenham and Kenton. First lesson free.',
  ogDescription: 'Coding and AI lessons for Newcastle upon Tyne, on a page that colours the city\'s 26 wards so no neighbours match and proves why three colours can never work.',
  twitterDescription: 'Newcastle learners from six to sixty-seven can learn coding and AI with us live online; the first lesson is free.',
  ogImageCourse: 'competitive-programming-for-teens-course',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Newcastle upon Tyne Live Online Coding and AI Lessons',
    description: 'Coding, Python, AI, data and mathematics taught live online in English to children, teenagers and adults in Newcastle upon Tyne, in level-based groups or one to one.'
  },

  h1: 'Coding classes in Newcastle upon Tyne',
  capsuleQ: 'What are the best coding classes in Newcastle upon Tyne?',
  capsule: 'Newcastle upon Tyne had 300,125 usual residents at the 2021 Census, and 29.1% of those aged five and over were schoolchildren or full-time students, against 20.4% in England. Its Literary and Philosophical Society, founded in 1793, says Joseph Swan lit a public room with electric light for the first time there in 1881. Modern Age Coders teaches Newcastle learners aged six to sixty-seven in live online lessons, either privately or in a small group of five to ten matched by level, with teachers based in India and lesson times set in UK hours. There is no fee for the first lesson. Later months cost USD 100 in a group or USD 150 for private lessons.',
  lead: 'Give each of Newcastle\'s 26 council wards a colour so that no two wards sharing a border match. How few colours will do? The quick method, taking wards one at a time and giving each the first colour its neighbours are not already using, needs six colours in alphabetical order and five if the busiest ward, Wingrove with eight neighbours, goes first. Across 100,000 random orders it manages four only about 17% of the time. A careful search settles the question: three colours are impossible, and four are enough. The proof of the first half is sitting in the map, where Arthur\'s Hill, Elswick, Monument and Wingrove all border one another, so they need four different colours between them. That is graph colouring, a problem behind exam timetables and computer chips alike, and it is the lesson Newcastle\'s ward map teaches our teenage learners.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Newcastle upon Tyne.',

  picks: {
    eyebrow: 'Course picks for Newcastle',
    h2: 'Four courses for the city of the Lit & Phil',
    intro: 'Start from what the learner already enjoys. Every course begins with a free live lesson, booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Logic puzzles, patterns and first programs, where colouring a map with as few crayons as possible is a classic challenge.' },
      { course: 'competitive-programming-for-teens-course', band: 'Ages 13 to 18', note: 'Recursion, backtracking and first graphs in contest form, the exact tools the ward project uses.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Stacks, trees and graphs built from scratch, with greedy methods and their limits made concrete.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Graphs, greedy methods and backtracking at interview standard, where colouring and scheduling problems are staples.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Newcastle today',
      h2: 'A city shaped by its students',
      intro: 'Census 2021 for the Newcastle upon Tyne local authority, from the Office for National Statistics tables on Nomis.',
      body: [
        { kind: 'table', caption: 'Newcastle upon Tyne, Census 2021', head: ['Census 2021 measure', 'Newcastle', 'England'], rows: [
          ['Usual residents', '300,125', 'Not compared'],
          ['In households', '282,879, 94.3%', 'Not compared'],
          ['In communal establishments', '17,246, 5.7%', 'Not compared'],
          ['Aged 15 to 19', '23,355, 7.8%', '5.7%'],
          ['Aged 20 to 24', '36,645, 12.2%', '6.0%'],
          ['Aged 25 to 29', '23,390, 7.8%', '6.6%'],
          ['Schoolchildren and full-time students, of 284,474 aged five and over', '82,809, 29.1%', '20.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Twenty to twenty-four', p: 'Residents aged 20 to 24 made up 12.2% of Newcastle, against 6.0% across England, with 15 to 19 year olds at 7.8%.' },
          { h3: 'Study at 29.1%', p: 'Counted together, schoolchildren and full-time students made up 29.1% of Newcastle residents aged five and over in 2021; the England figure was 20.4%.' },
          { h3: 'Communal living', p: 'Some 17,246 people, 5.7% of residents, lived in communal establishments, a Census category that includes student halls.' }
        ] },
        { kind: 'p', text: 'Behind those figures sit learners of every age. A Newcastle learner could be an eight-year-old in Kenton making a first puzzle game, a Year 12 student in Gosforth taking A level Computer Science, or a graduate in Heaton learning data skills for a new job, and each joins five to ten others at the same stage.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Lamps, lectures and a medical school',
      h2: 'Safety lamps, electric light and a medical school',
      intro: 'From the Literary and Philosophical Society of Newcastle upon Tyne and from Newcastle University.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1793', p: 'The Literary and Philosophical Society was founded that year, and its purpose-built library opened in 1825, becoming a hub of learning long before the city had universities.' },
          { h3: '1815 and 1881', p: 'The Society says George Stephenson demonstrated his miners\' safety lamp there in 1815, and that Joseph Swan lit a public room with electric light for the first time there in 1881.' },
          { h3: '1 October 1834', p: 'Newcastle University traces itself to the School of Medicine and Surgery, formally established that day with a first cohort of fewer than a dozen students.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Society or the University. We tell their stories because Newcastle has long been a place where practical problems met careful thinking, and map colouring is a perfect example: a puzzle that began with printed maps and ended up inside timetables, phone networks and the software that turns programs into machine instructions.' },
        { kind: 'spec', title: 'Twenty-six wards, checked twice', p: 'The project uses the Office for National Statistics ward boundaries for December 2023, which place 26 wards inside Newcastle. We built the map of neighbours from both the simplified and the full-detail boundary files, and they agree exactly, so no border in the project is an artefact of a smoothed outline.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Four colours for 26 wards',
      intro: 'Graph colouring gives every region a colour so that no two regions sharing a border match. We turned Newcastle\'s wards into a graph and coloured it several ways.',
      body: [
        { kind: 'table', caption: 'Colouring Newcastle\'s 26 wards, ONS December 2023 boundaries', head: ['Method', 'Colours used', 'Note'], rows: [
          ['Greedy, alphabetical order', '6', 'Each ward takes the first colour its coloured neighbours are not using'],
          ['Greedy, most neighbours first', '5', 'Wingrove, with 8 neighbours, is coloured first'],
          ['Greedy, 100,000 random orders', '4 to 7', 'Four colours in about 17% of orders, seven in just 7'],
          ['Backtracking search', '4', 'Three colours proved impossible, four found']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Build the graph', p: 'Each ward becomes a dot, and two dots are joined when their wards share a stretch of boundary: 26 dots and 59 joins. Four pairs meet at a single point only, which does not count.' },
          { h3: '2. Colour greedily', p: 'Take the wards in some order and give each the lowest colour its neighbours are not already using. It is fast, but the order decides the result.' },
          { h3: '3. Search exactly', p: 'Backtracking tries colours and undoes any choice that leads to a clash. It proves three colours cannot work after 1,704 tries and finds a four-colour map after 81.' }
        ] },
        { kind: 'callout', h3: 'Why three can never be enough', p: 'Arthur\'s Hill, Elswick, Monument and Wingrove all border one another, and so do Callerton & Throckley, Chapel, Denton & Westerhope and Lemington. Four regions that all touch need four different colours, so no three-colour map of Newcastle exists. The famous four colour theorem says four are always enough for any flat map, and its first proof, in 1976, relied on a computer to check the cases.' },
        { kind: 'p', text: 'The four-colour answer splits the wards into groups of 7, 7, 8 and 4; Castle, Chapel, Kenton and Monument can safely share one colour because none of them borders another. Learners draw the result, then check every one of the 59 borders by program, because a map that looks right can still hide one clash. The same map also contains 34 triangles of three mutually bordering wards, which is why two colours fail almost at once.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Colouring problems everywhere',
      h2: 'Five habits for any clash-free assignment',
      intro: 'Learned on a ward map, used afterwards on exam timetables, radio frequencies, processor registers and seating plans where some pairs must not sit together.',
      body: [
        { kind: 'table', caption: 'Solving a colouring problem you can defend', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Define a clash exactly', 'Decide that a shared border counts and a single touching point does not', 'A graph full of joins nobody meant'],
          ['Check the data twice', 'Build the graph from simplified and full-detail boundaries and compare', 'Neighbours invented or lost by smoothed outlines'],
          ['Try several orders', 'Run the greedy method in different orders and keep the fewest colours', 'Accepting six colours because of alphabetical luck'],
          ['Prove the lower bound', 'Find a group of regions that all touch one another', 'Searching forever for a three-colour map that cannot exist'],
          ['Search when size allows', 'Use backtracking for an exact answer on small problems', 'Settling for five colours when four will do']
        ] },
        { kind: 'p', text: 'Exam timetabling is the same problem in disguise: subjects are dots, a join means some student takes both, and colours are time slots. Schools face a version of it whenever they build an exam timetable, which is why a map puzzle turns out to be one of the most practical ideas in the course.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A printed ward map, four crayons and the rule that neighbours must differ, then a short program that checks the colouring.' },
          { h3: 'Teenagers', p: 'The ONS boundaries turned into a graph in Python, greedy colouring in many orders, and a backtracking search that proves the answer.' },
          { h3: 'Adults', p: 'Scheduling and allocation at work, from rotas to room bookings, with clashes defined and the number of slots minimised.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Office for National Statistics, the Literary and Philosophical Society of Newcastle upon Tyne or Newcastle University. The ward boundaries are published for public use; the graph, colourings and counts are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From four crayons to a colouring you can prove',
    intro: 'Treat the ages as a starting point; the free lesson finds the actual level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Colour the map', p: 'Crayons, simple maps and the one rule that neighbours must differ, with a count of how few colours will do.', courses: ['problem-solving-and-computational-thinking-for-kids', 'mental-maths-mastery-kids'] },
      { band: 'Ages 11 to 13', h3: 'Rules in code', p: 'Storing neighbours in lists, checking a colouring automatically and trying a first greedy method.', courses: ['python-ai-kids-masterclass', 'comprehensive-middle-school-mathematics-mastery'] },
      { band: 'Ages 14 to 18', h3: 'Graphs and backtracking', p: 'Real boundaries turned into graphs, greedy orders compared, and exact search with a proof of the lower bound.', courses: ['competitive-programming-for-teens-course', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Scheduling at work', p: 'Allocation and timetabling problems framed as graphs, with honest reporting of when an answer is exact.', courses: ['data-structures-algorithms-masterclass-college', 'college-mathematics-complete-masterclass'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A mapping tool can colour a map instantly. Why should a Newcastle teenager write the colouring?',
    intro: 'Because the tool will not tell you whether its answer uses the fewest colours possible.',
    p1: 'Ask an AI assistant to colour Newcastle\'s wards and it may well produce a tidy map, but a quick greedy method uses five or six colours in most orders, and nothing in the picture shows that four would do. Nor will it mention that two groups of four wards make three colours impossible. A learner who has built the graph and searched it knows the difference between an answer and the fewest possible.',
    p2: 'Graph colouring also runs quietly inside computing. Compilers use it to decide which values can share a processor register, networks use it to assign radio frequencies without interference, and schedulers use it to avoid clashes. It is one of the classic problems that becomes very hard as it grows, so knowing when a small case can be solved exactly is a real skill.',
    closer: 'So a Newcastle teenager should still learn to program in 2026, in the city where Swan lit a public room with electric light: tools give answers in an instant, and knowing whether an answer is merely good or truly the fewest possible is what programming teaches.',
    blogAnchor: 'is it still worth learning to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Jesmond, Heaton or Fenham, from your own desk',
    intro: 'Newcastle is compact, but a live online lesson still saves the trip across town.',
    cells: [
      { h3: 'East end or west end', p: 'A learner in Walker and another in Benwell can share one lesson without either crossing the city centre.' },
      { h3: 'Stages that match local schools', p: 'From Reception and the four Key Stages through Year 9 options to GCSEs and A levels, we use the stage names Newcastle schools use and teach in English.' },
      { h3: 'A free lesson with a result', p: 'The first lesson teaches something real and finishes by recommending a level, a course and a regular weekly time. No card is needed.' },
      { h3: 'Matched by level', p: 'Five to ten learners at the same stage, from Newcastle, the rest of the UK and abroad, so that every level can find a workable slot.' },
      { h3: 'A steady weekly pattern', p: 'The timetable is two fixed lessons a week, roughly eight a month; holiday and exam pauses are arranged with the teacher well before they start.' },
      { h3: 'Teaching on India time', p: 'India Standard Time does not change with the seasons, so our teachers are four and a half hours ahead of Newcastle in summer and five and a half in winter, which puts after-school and evening lessons inside their day.' }
    ],
    spec: { title: 'Across the Tyne as well', p: 'Families in Gateshead, just over the river, join exactly the same groups, because every lesson is online and groups are formed by level rather than postcode.' }
  },

  fees: {
    h2: 'Newcastle lesson fees',
    intro: 'One free lesson, then one of two monthly prices.',
    first: 'A full lesson with nothing to pay, ending in a level, a recommended course and a proposed weekly time.',
    group: 'About eight live lessons each month in a group of five to ten learners at one level.',
    private: 'About eight live lessons each month given to one learner alone.',
    closer: 'Byker or Gosforth, the fee is identical: families outside India all pay the same US dollar amount, and we publish nothing in pounds. You pay nothing before the free lesson has settled which course and which weekly slot suit, and the pricing page explains how pauses, missed lessons and a change between group and private teaching are handled.'
  },

  reviewsH2: 'Unedited Google reviews from six of our families',

  book: {
    h2: 'Book a free lesson for a Newcastle learner',
    intro: 'We choose the first task by level: a map and four crayons for a young child, a first Python program that checks a colouring, or the ONS ward boundaries and a backtracking search for a teenager ready for real algorithms.',
    success: 'Thank you. We will contact you shortly to arrange a Newcastle lesson.'
  },

  faq: {
    h2: 'Newcastle coding class questions',
    intro: 'What Newcastle families most often ask.',
    items: [
      { q: 'How many people live in Newcastle upon Tyne?', a: 'The 2021 Census counted 300,125 usual residents in the local authority: 282,879 in households and 17,246, or 5.7%, in communal establishments.' },
      { q: 'How many Newcastle residents are students?', a: 'In 2021, 82,809 of the 284,474 residents aged five and over were schoolchildren or full-time students, 29.1% against 20.4% in England.' },
      { q: 'What happened at the Lit & Phil?', a: 'The Literary and Philosophical Society says George Stephenson demonstrated his miners\' safety lamp there in 1815 and Joseph Swan lit a public room with electric light for the first time there in 1881. We are not connected with the Society.' },
      { q: 'What is graph colouring?', a: 'Giving every region or item a colour so that no two connected ones match, using as few colours as possible. For Newcastle\'s 26 wards, four colours are needed and four are enough.' },
      { q: 'Why can Newcastle\'s wards not be coloured with three colours?', a: 'Because Arthur\'s Hill, Elswick, Monument and Wingrove all border one another, as do Callerton & Throckley, Chapel, Denton & Westerhope and Lemington. Four regions that all touch need four different colours.' },
      { q: 'Which Newcastle ward has the most neighbours?', a: 'Wingrove, which shares a boundary with eight other wards. Walker and Manor Park have the fewest, with two each, on the ONS December 2023 boundaries.' },
      { q: 'When are Newcastle lessons held?', a: 'Lessons run on weekday afternoons and evenings or at weekends, at a UK time agreed during the free lesson. Our teachers are four and a half hours ahead of Newcastle in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Newcastle?', a: 'No. There is no Newcastle centre and no premises anywhere in the UK; all teaching is live online. Learners need a computer with sound and a reliable connection, and our contact number is Indian.', boiler: true },
      { q: 'How much do Newcastle lessons cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Newcastle groups organised?', a: 'By level, pace and goals rather than age or postcode, with five to ten learners at one stage. If no group meets at a good time, we propose one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'Northern cities and the national guide',
    html: 'Down the coast and inland, the <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds page</a> samples a footfall record fairly, <a class="cg-inline-link" href="/best-coding-class-in-bradford">Bradford</a> takes a random walk through its rain, and <a class="cg-inline-link" href="/best-coding-class-in-sheffield">Sheffield</a> tests how a trend line shifts with its starting year. School stages across England are explained in the <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a>, and every page in the UK series is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Newcastle and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-leeds', label: 'Leeds' },
    { href: '/best-coding-class-in-sheffield', label: 'Sheffield' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-ncl .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.8rem); }
.cg-root.cg-ncl .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.07; }
.cg-root.cg-ncl .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.35rem; }
.cg-root.cg-ncl .cg-eyebrow { letter-spacing: 0.18em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-ncl .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.013em; }
.cg-root.cg-ncl .cg-grid-3 { gap: clamp(1.15rem, 2.7vw, 2.3rem); }
.cg-root.cg-ncl .cg-table caption { font-weight: 700; letter-spacing: 0.02em; }
.cg-root.cg-ncl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ncl .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-ncl .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Newcastle upon Tyne, Census 2021 via Nomis: TS001 Newcastle upon Tyne local authority (E08000021) 300,125 usual residents, 282,879 in households (94.3 percent), 17,246 in communal establishments (5.7 percent); TS007A 23,355 aged 15 to 19 (7.8 percent), 36,645 aged 20 to 24 (12.2 percent), 23,390 aged 25 to 29 (7.8 percent), against England 5.7, 6.0 and 6.6 percent; TS068 82,809 schoolchildren and full-time students of 284,474 residents aged 5 and over, 29.1 percent, against 20.4 percent in England. Literary and Philosophical Society of Newcastle upon Tyne: founded 1793; purpose-built library opened 1825; George Stephenson demonstrated his miners\' safety lamp to the Society in 1815; Joseph Swan lit a public room with electric light for the first time there in 1881. Newcastle University, History: School of Medicine and Surgery formally established on 1 October 1834, first cohort fewer than a dozen students.',
    localProject: 'Four colours for 26 wards. ONS Wards December 2023 (BGC and BFC agree), 26 wards inside the Newcastle local authority; adjacency by shared boundary segment: 59 pairs; four point-only contacts excluded. Wingrove 8 neighbours; Walker and Manor Park 2. Greedy alphabetical 6 colours; largest first 5; 100,000 random orders: 4 colours about 17 percent, 5 about 77, 6 about 6, 7 in 7 orders. Backtracking: 3 colours impossible (1,704 tries), 4 found (81 tries). Cliques of four: Arthur\'s Hill, Elswick, Monument, Wingrove; Callerton & Throckley, Chapel, Denton & Westerhope, Lemington. Colour classes 7, 7, 8, 4. 34 triangles. Lesson family: graph colouring (greedy order dependence, clique lower bounds, exact backtracking); distinct from constraint satisfaction puzzles, Voronoi and union-find.',
    requiredMentions: [
      '300,125',
      '282,879',
      '17,246',
      '36,645',
      '82,809',
      '284,474',
      'Wingrove',
      'Literary and Philosophical Society',
      'Joseph Swan',
      'four colour',
      '1 October 1834',
      'graph colouring'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Newcastle upon Tyne: 300,125 usual residents; 282,879 in households; 17,246 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E08000021' },
      { claim: 'Nomis, Census 2021 TS007A: Newcastle upon Tyne and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E08000021,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Newcastle upon Tyne 82,809 students of 284,474 aged 5 and over (29.1 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E08000021,E92000001' },
      { claim: 'ONS Open Geography, Wards December 2023 Boundaries UK BGC: the 26 Newcastle wards.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Wards_December_2023_Boundaries_UK_BGC/FeatureServer/0' },
      { claim: 'ONS Open Geography, Wards December 2023 Boundaries UK BFC: full-resolution check of the same adjacency.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Wards_December_2023_Boundaries_UK_BFC/FeatureServer/0' },
      { claim: 'Literary and Philosophical Society of Newcastle upon Tyne, About us: 1793, 1825, Stephenson 1815, Swan 1881.', url: 'https://www.litandphil.org.uk/about-us' },
      { claim: 'Newcastle University, History: School of Medicine and Surgery established on 1 October 1834.', url: 'https://www.ncl.ac.uk/who-we-are/history/' }
    ],
    rejectedClaims: [
      'Newcastle University and Northumbria University student counts: no figure found on the pages read, so none stated.',
      'The year given on the University history page for John Snow\'s cholera work: not used.',
      'That any colouring shown is the only four-colouring: the page presents one example.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the ONS, the Literary and Philosophical Society of Newcastle upon Tyne or Newcastle University.'
    ]
  }
};
