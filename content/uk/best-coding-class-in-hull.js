'use strict';
// Hull (cg- city page, UK cluster Phase 4). Spine: where could the water reach, and where only on paper?
// Flood fill (breadth-first search over a height grid) on Ordnance Survey Terrain 50 (50 m cells, heights in metres
// above Ordnance Datum, tiles SE92 SE93 TA02 TA03 TA12 TA13 TA22 TA23, OS Downloads API, read 22 September 2026;
// scratchpad hul/flood.py). Hull land = ONS LAD DEC 2025 BFC for E06000010, 28,633 cells (71.6 km2); estuary seeds =
// the extent-of-realm boundary (BFE) minus BFC, 3,951 cells. Hull heights: min -4.3, 10th percentile 1.5, median
// 2.3, 90th percentile 5.0, max 12.2 m. Environment Agency flood-monitoring API, Hull Barrier Victoria Pier (L3203),
// downstream stage in mAOD, 15-minute readings 24 August to 22 September 2026: highest 4.235 m at 07:00 GMT on
// 13 September, lowest -0.348 m at 05:00 GMT on 20 September; daily highs from 1.649 (21 Sep) to 4.235. Fill from
// the estuary into cells at or below each level (4-neighbour; 8-neighbour in brackets):
// 2.0 m: 24.06 km2 of Hull at or below (33.6 percent), 8.46 km2 reached (35.2 percent of it) (12.56); isolated 15.60.
// 3.0 m: 55.86 km2 (78.0 percent), 55.59 reached (99.5) (55.73). 4.235 m: 62.23 km2 (86.9 percent), 61.70 reached
// (99.2) (61.78), 32 isolated pockets, largest 145 cells. 5.0 m: 64.64 (90.3), 64.13 (99.2) (64.22). 6.0 m: 68.03
// (95.0), 68.01 (100.0) (68.02). BFS visited 139,527 cells across the mosaic at 4.235 m. The model has no walls:
// a 50 m grid averages away embankments, dock edges and the barrier, so it describes ground height, not flooding.
// GOV.UK, Hull's new flood defences officially opened (4 March 2022): 5 December 2013 surge, "The highest ever tide
// (5.8m) was recorded at the Hull Barrier" (datum not stated, so not placed on the model's scale); Humber Hull
// Frontages scheme covers around 7 km of about 12 km of frontage, St Andrew's Quay to Victoria Dock Village, a 0.5
// per cent chance in any given year standard, construction January 2019 to December 2021.
// Lesson family: flood fill and breadth-first search on a grid (connectivity, 4 against 8 neighbours, iterative
// queue against recursion depth, what the grid cannot see). Screened 22 September 2026: flood fill appears only in
// the Belfast dossier as an idea examined and dropped; the Bebras page's breadth-first search is over orderings.
// Place facts read raw 22 September 2026: Census 2021 via Nomis, Kingston upon Hull E06000010: TS001 267,014
// usual residents, 262,426 in households, 4,588 in communal establishments; TS007A aged 5 to 9 17,343 (6.5 percent,
// England 5.9), 10 to 14 16,735 (6.3, England 6.0), 20 to 24 19,426 (7.3, England 6.0), 25 to 29 20,220 (7.6,
// England 6.6); TS068 54,703 students of 251,060 aged 5 and over (21.8 percent, England 20.4); TS006 3,730.1 usual
// residents per square km (England 433.5). KCOM, History: Telegraph Act 1899; of 1,334 local authorities Hull
// Corporation was one of 55 that decided to go ahead; only 28 of 600 local businesses originally supported it;
// licence 1902; Thomas Holme appointed manager October 1903 aged 24, managed the service for 43 years; first
// exchange opened 28 November 1904 at 7 Wincolmlee, a former public baths, capable of 1,000 subscribers; by 1913
// the only remaining council-owned telephone department; kiosks painted cream and without crowns, cream to this
// day; Kingston Communications (HULL) PLC from 1987.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'HULL', blurb: 'The city on the Humber, with a project that floods a height map from the estuary and asks what the map cannot see.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-hull',
  code: 'hul',
  accent: '#5D5632',
  accentRationale: 'Hull: a Humber mud olive from the solver (6.00:1 on every paper tint, dE 7.4 from the nearest used accent), greener and greyer than the Belfast ochre',
  pageType: 'city',
  place: {
    name: 'Hull',
    eyebrow: 'Kingston upon Hull, East Yorkshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Kingston upon Hull' },
      { type: 'AdministrativeArea', name: 'East Riding of Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Hull, England',
  title: 'Best Coding Classes in Hull | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Hull learners aged 6 to 67, from the Avenues and Sutton-on-Hull to Bransholme. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Hull, on a page that runs a flood fill from the Humber across a height map of the city and shows what a model can and cannot know.',
  twitterDescription: 'Learners in Hull aged six to sixty-seven can study coding, Python and AI live online with us, starting with a free lesson.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '22 September 2026',
  courseSchema: {
    name: 'Hull Online Coding, Maths and AI Lessons',
    description: 'Live online coding, Python, algorithms, AI and mathematics lessons for children, teenagers and adults in Hull, taught in English in level-matched groups or one to one.'
  },

  h1: 'Coding classes in Hull',
  capsuleQ: 'What are the best coding classes in Hull?',
  capsule: 'Census 2021 counted 267,014 usual residents in Kingston upon Hull, where children aged five to nine made up 6.5% of the population against 5.9% in England. Hull has run its own telephone network since its first exchange opened in 1904, which is why its phone boxes are cream. We teach Hull learners aged six to sixty-seven in live online lessons, in a level-matched group of five to ten or one to one, with teachers based in India and times set in UK hours. There is no charge for the first lesson; after it, a group place is USD 100 a month and one-to-one teaching USD 150 a month.',
  lead: 'At 07:00 GMT on 13 September 2026 the Environment Agency gauge at the Hull Barrier read 4.235 metres above Ordnance Datum, the highest tide in four weeks of readings. Ordnance Survey\'s 50-metre height grid puts 86.9% of Hull\'s land at or below that level. Does that mean the tide could cover most of Hull? No, because the grid knows heights and nothing else. A flood fill starting in the Humber can move into any low cell next to one already reached, and it reports almost all of that land as connected. The embankments, dock walls and tidal barrier that actually hold the water back are narrower than one cell, so the model never sees them. Our teenagers write the fill, then learn to say exactly what it proves and what it cannot.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Hull.',

  picks: {
    eyebrow: 'Course picks for Hull',
    h2: 'Four courses for the city on the Humber',
    intro: 'Start from what the learner enjoys. Every course begins with a free live lesson, and no card is taken to book it.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with mazes and paint-bucket puzzles, where filling a shape one square at a time is the first algorithm a child writes.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Queues, grids and graph searches built from scratch, the exact tools a flood fill is made from.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from the first line to full programs, including reading a grid of numbers from a file and walking across it.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Python for adults starting out or starting again, from scripts to working with real data files and maps.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Hull today',
      h2: 'A young city on the north bank of the Humber',
      intro: 'Census 2021 figures for Kingston upon Hull, taken from Nomis and printed as the Office for National Statistics published them.',
      body: [
        { kind: 'table', caption: 'Kingston upon Hull, Census 2021', head: ['Measure', 'Hull', 'England'], rows: [
          ['Usual residents', '267,014', '56,490,048'],
          ['Living in households', '262,426', 'Not compared'],
          ['Living in communal establishments', '4,588', 'Not compared'],
          ['Aged 5 to 9', '17,343 (6.5%)', '5.9%'],
          ['Aged 10 to 14', '16,735 (6.3%)', '6.0%'],
          ['Aged 20 to 24', '19,426 (7.3%)', '6.0%'],
          ['Aged 25 to 29', '20,220 (7.6%)', '6.6%'],
          ['Usual residents per square kilometre', '3,730.1', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Plenty of children', p: 'Children aged five to fourteen made up a larger share of Hull\'s residents than of England\'s in 2021, in both the 5 to 9 and 10 to 14 bands.' },
          { h3: 'Young adults too', p: 'People aged 25 to 29 were 7.6% of residents against 6.6% nationally, and 54,703 of the 251,060 residents aged five and over were in study.' },
          { h3: 'Close-packed', p: 'At 3,730.1 residents per square kilometre, Hull is a compact city, with its boundary drawn tightly around the built-up area.' }
        ] },
        { kind: 'p', text: 'That mix shows up in our classes. A Year 3 child in Bransholme might be solving a first maze with code blocks, a Year 10 student in the Avenues preparing for GCSE Computer Science, and an adult near Hessle Road learning Python for a new job, each in a group of five to ten learners at a matching level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'A network of its own',
      h2: 'Hull\'s own telephone company, since 1904',
      intro: 'From the history published by KCOM, the company that grew out of the council\'s telephone department.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1 of 55', p: 'After the Telegraph Act of 1899, KCOM says, only 55 of 1,334 local authorities decided to build their own telephone systems, and Hull Corporation was one of them, despite only 28 of 600 local businesses backing the idea.' },
          { h3: '28 November 1904', p: 'The Hull Telephone Department opened its first exchange at 7 Wincolmlee, a former public baths, with room for 1,000 subscribers. Thomas Holme, appointed manager at 24, ran the service for 43 years.' },
          { h3: 'The last one left', p: 'By 1913 Hull\'s was the only council-owned telephone department still operating. When the red kiosk spread across Britain, Hull\'s were painted cream and made without crowns, and they are cream to this day.' }
        ] },
        { kind: 'p', text: 'We have no connection with KCOM. The story belongs on this page because it is about a network, and so is the project below. A telephone system is useful only if every subscriber can reach every other through a chain of links. A flood fill asks the same question of a map: starting from one place, which cells can be reached by steps between neighbours, and which are cut off?' },
        { kind: 'spec', title: 'Where the heights come from', p: 'Ordnance Survey publishes Terrain 50 as free open data: a height in metres above Ordnance Datum for every 50-metre square of Great Britain. Inside Hull\'s coastline boundary that is 28,633 squares, about 71.6 square kilometres, with a median height of 2.3 metres.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A flood fill from the Humber, and what it cannot see',
      intro: 'A flood fill puts the estuary squares in a queue, then repeatedly takes one out and adds any neighbour that is low enough and not yet visited.',
      body: [
        { kind: 'table', caption: 'Hull land in the Terrain 50 grid at or below each level, and how much a four-neighbour fill from the Humber reaches, before any defences are considered', head: ['Level above Ordnance Datum', 'Land at or below', 'Reached from the Humber', 'With diagonal steps too'], rows: [
          ['2.0 m', '24.06 km2 (33.6%)', '8.46 km2', '12.56 km2'],
          ['3.0 m', '55.86 km2 (78.0%)', '55.59 km2', '55.73 km2'],
          ['4.235 m, the 13 September tide', '62.23 km2 (86.9%)', '61.70 km2', '61.78 km2'],
          ['5.0 m', '64.64 km2 (90.3%)', '64.13 km2', '64.22 km2'],
          ['6.0 m', '68.03 km2 (95.0%)', '68.01 km2', '68.02 km2']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Seed from the water', p: 'Every square inside Hull\'s boundary that lies out in the estuary goes into the queue first: 3,951 squares between the shoreline and the middle of the Humber.' },
          { h3: '2. Step to neighbours', p: 'Take a square from the front of the queue, look north, south, east and west, and add any neighbour at or below the level that has not been visited.' },
          { h3: '3. Count what is left', p: 'Low land the fill never reached is cut off by higher ground. At 2 metres that was most of it, 15.60 square kilometres, sitting in hollows behind ridges.' }
        ] },
        { kind: 'callout', h3: 'Four neighbours or eight?', p: 'At 2 metres, letting the fill also step diagonally raises the land reached from 8.46 to 12.56 square kilometres. Water cannot squeeze between two squares that only touch at a corner, but a careless program can. The choice of neighbourhood is part of the model, and a learner has to decide it deliberately and report it.' },
        { kind: 'p', text: 'At 4.235 metres, the fill from the estuary visits 139,527 squares across the surrounding map. Written as a recursive function that calls itself for each neighbour, it would need a call stack that deep, and Python stops at a depth of about a thousand by default. The queue does the same job with no recursion at all, which is why real flood fills, from paint programs to maze solvers, are written this way.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Models and walls',
      h2: 'Five things a height model cannot tell you',
      intro: 'Learned on the Humber, then applied to every simulation a learner will build: games, robots, network maps and machine learning models.',
      body: [
        { kind: 'table', caption: 'Reading a flood fill honestly', head: ['What the grid lacks', 'In Hull', 'So the honest statement is'], rows: [
          ['Walls thinner than a square', 'Embankments and dock walls are metres wide, the grid 50 m', 'Low and connected, not flooded'],
          ['Moving structures', 'The barrier at the mouth of the River Hull, where the gauge stands', 'The model assumes nothing is shut'],
          ['Time', 'A tide stays high for an hour or two, not for ever', 'Where water could reach, not where it would'],
          ['Drainage', 'Pumping stations lift water out of low land', 'Isolated hollows are not safe or unsafe by height alone'],
          ['A common datum', 'A tide height is meaningful only against the same zero as the map', 'Check the datum before comparing any two numbers']
        ] },
        { kind: 'p', text: 'The last row matters in practice. GOV.UK reports that on 5 December 2013 a tidal surge caused devastating flooding in Hull and that the highest tide ever recorded at the Hull Barrier was 5.8 metres. The article does not say which datum that figure uses, so we do not place it on our height scale. The same article says the Humber Hull Frontages scheme now covers around 7 kilometres of the city\'s 12 kilometres of estuary frontage, to a standard of a 0.5% chance of flooding in any given year.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Colouring a squared map from one corner, one neighbour at a time, and finding the squares a wall keeps dry.' },
          { h3: 'Teenagers', p: 'The Terrain 50 grid read in Python, a queue-based fill from the estuary, and four against eight neighbours compared.' },
          { h3: 'Adults', p: 'Grid searches and connectivity in geographic and network data at work, with the model\'s blind spots written down.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Environment Agency, Ordnance Survey, KCOM or Hull City Council. Terrain 50, the gauge readings and the census tables are open data; the fills, areas and comparisons are our own arithmetic and are not a flood risk assessment. The Environment Agency\'s flood maps are the place to check risk for a real address.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From colouring squares to a flood fill',
    intro: 'The age bands are only a guide. The free lesson shows where the learner is ready to start.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Fill the shape', p: 'Colouring a squared picture outward from one square, stopping at walls, and seeing that corners are tricky.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Grids in code', p: 'Storing a map as rows of numbers, finding a square\'s neighbours in code, and solving simple mazes.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Breadth-first fills', p: 'A queue-based fill over real height data, connectivity rules and the reason recursion fails at scale.', courses: ['problem-solving-dsa-masterclass-teens', 'competitive-programming-for-teens-course'] },
      { band: 'Ages 18 to 67', h3: 'Graphs at work', p: 'Grid and graph searches in mapping, logistics and network data, with assumptions stated alongside results.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write a flood fill in seconds. Why should a Hull teenager write one?',
    intro: 'Because the code was never the hard part. Knowing what the answer means is.',
    p1: 'Ask an AI assistant for a flood fill and it will return working code, perhaps recursive, perhaps with eight neighbours. Run on Hull it would print a dramatic number. A learner who has written the fill knows that the recursive version would crash on this map, that diagonal steps leak through corners, and that the grid cannot see a wall two metres thick.',
    p2: 'That habit carries straight into AI work. Every model is trained and tested on a representation of the world, and what the representation leaves out is invisible to the model. Engineers who ask what their data cannot contain, and who write that down next to their results, are the ones whose systems can be trusted.',
    closer: 'So a Hull teenager should still learn to program in 2026, in a city that built its own telephone network when almost nobody else would: machines produce answers quickly, and somebody still has to know which of them are true.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Newland, Marfleet or Orchard Park, from home',
    intro: 'Crossing Hull after school on a wet afternoon is slow. A live online lesson means nobody has to.',
    cells: [
      { h3: 'East and west of the river', p: 'A learner off Holderness Road and another near Anlaby Road can share a lesson without either crossing the River Hull.' },
      { h3: 'English school stages', p: 'Reception, Key Stages 1 to 4, GCSEs and A levels, called what Hull schools call them, with all teaching in English.' },
      { h3: 'A proper first lesson', p: 'The free session covers a real task, then recommends a level, a course and a weekly time. We take no card details to book it.' },
      { h3: 'Classmates who match', p: 'Groups of five to ten learners at one level, from Hull, elsewhere in the UK and overseas, so every stage can find a workable hour.' },
      { h3: 'Twice a week, every week', p: 'Two fixed weekly lessons, about eight a month, with school holidays and exams arranged with the teacher in good time.' },
      { h3: 'India\'s clock stands still', p: 'India never changes its clocks, so it runs four and a half hours ahead of Hull in British Summer Time and five and a half in winter, keeping UK after-school and evening lessons inside the teaching day.' }
    ],
    spec: { title: 'Across East Yorkshire', p: 'Families in Cottingham, Hessle, Beverley or Hedon join exactly the same classes, since lessons are online and groups are formed by level rather than address.' }
  },

  fees: {
    h2: 'Hull lesson fees',
    intro: 'A free lesson to begin, then one monthly fee.',
    first: 'A complete lesson without charge, ending with a recommended level, course and weekly time.',
    group: 'About eight live lessons a month in a group of five to ten learners working at one level.',
    private: 'About eight live lessons a month, with the teacher working with your learner only.',
    closer: 'All families outside India pay the same US dollar fee, whether in Kingswood or the Old Town, and we show no prices in pounds. Nothing is charged until the free lesson has agreed a course and a slot; the pricing page covers pausing, missed lessons and switching between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews from families, word for word',

  book: {
    h2: 'Book a free lesson for a Hull learner',
    intro: 'We choose the first task by level: a fill-the-shape puzzle for a young child, a first Python program on a small grid for a beginner, or the Terrain 50 file and a flood fill for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Hull learner.'
  },

  faq: {
    h2: 'Hull coding class questions',
    intro: 'The questions Hull families most often ask us.',
    items: [
      { q: 'How many people live in Hull?', a: 'Census 2021 counted 267,014 usual residents in Kingston upon Hull, of whom 262,426 lived in households and 4,588 in communal establishments such as student halls and care homes.' },
      { q: 'How does Hull compare with England?', a: 'In 2021, 6.5% of Hull residents were aged 5 to 9 against 5.9% in England, 7.6% were aged 25 to 29 against 6.6%, and the city had 3,730.1 residents per square kilometre against 433.5.' },
      { q: 'What is a flood fill?', a: 'An algorithm that starts from one or more squares on a grid and spreads to every neighbouring square that meets a rule, such as being low enough, until nothing new can be reached. Paint programs use it for the bucket tool.' },
      { q: 'Does the project show that Hull floods?', a: 'No. It shows how much of Hull\'s land is low and connected to the estuary in a 50-metre height grid. That grid cannot see embankments, dock walls or the tidal barrier, so it describes ground height, not flood risk.' },
      { q: 'Where do the tide readings come from?', a: 'The Environment Agency publishes readings from its gauge at the Hull Barrier every 15 minutes. In the four weeks to 22 September 2026 the highest was 4.235 metres above Ordnance Datum, on 13 September.' },
      { q: 'Why are Hull\'s phone boxes cream?', a: 'KCOM says Hull has run its own telephone network since the council opened its first exchange in 1904, and its kiosks were painted cream and made without crowns. We are not connected with KCOM.' },
      { q: 'When are Hull lessons held?', a: 'Weekday afternoons and evenings or weekends, at a UK time agreed during the free lesson. India is four and a half hours ahead of Hull in summer and five and a half hours ahead in winter.' },
      { q: 'Is there a Modern Age Coders centre in Hull?', a: 'No. There is no Hull centre and we have no premises anywhere in the UK, because every lesson is taught live online. Learners need a computer with sound and a dependable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Hull lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Hull groups organised?', a: 'By level, pace and aims rather than age or postcode, with five to ten learners at one stage in each group. If no group meets at a suitable time, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'Yorkshire neighbours and other cities',
    html: 'Along the M62, the <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds page</a> samples a year of city-centre footfall fairly, and <a class="cg-inline-link" href="/best-coding-class-in-sheffield">Sheffield</a> shows how a least-squares trend shifts with its starting year. <a class="cg-inline-link" href="/best-coding-class-in-bradford">Bradford</a> sends a random walk across its streets. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> explains the school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> lists every city we cover.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hull and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-leeds', label: 'Leeds' },
    { href: '/best-coding-class-in-sheffield', label: 'Sheffield' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-hul .cg-hero-grid { align-items: center; gap: clamp(0.9rem, 2.7vw, 2.3rem); }
.cg-root.cg-hul .cg-hero h1 { font-weight: 680; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-hul .cg-capsule { border-top: 3px solid var(--cg-accent); border-bottom: 3px solid var(--cg-accent); padding: 0.9rem 0; }
.cg-root.cg-hul .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hul .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.014em; }
.cg-root.cg-hul .cg-grid-3 { gap: clamp(1rem, 2.4vw, 2.05rem); }
.cg-root.cg-hul .cg-table th { letter-spacing: 0.026em; }
.cg-root.cg-hul .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hul .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-hul .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Kingston upon Hull, Census 2021 via Nomis (E06000010): TS001 267,014 usual residents, 262,426 in households, 4,588 in communal establishments; TS007A aged 5 to 9 17,343 (6.5 percent, England 5.9), 10 to 14 16,735 (6.3, England 6.0), 20 to 24 19,426 (7.3, England 6.0), 25 to 29 20,220 (7.6, England 6.6); TS068 54,703 students of 251,060 residents aged 5 and over (21.8 percent, England 20.4); TS006 3,730.1 usual residents per square kilometre (England 433.5). KCOM, History: of 1,334 local authorities after the 1899 Telegraph Act, Hull Corporation one of 55 that went ahead; 28 of 600 local businesses in support; licence 1902; Thomas Holme manager from October 1903 aged 24, for 43 years; first exchange 28 November 1904 at 7 Wincolmlee, a former public baths, for 1,000 subscribers; by 1913 the only remaining council-owned telephone department; cream kiosks without crowns.',
    localProject: 'A flood fill from the Humber, and what it cannot see. OS Terrain 50 (50 m, metres above Ordnance Datum, read 22 September 2026); Hull land = ONS LAD BFC E06000010, 28,633 cells (71.6 km2), median height 2.3 m; seeds = BFE minus BFC, 3,951 estuary cells. EA Hull Barrier (L3203) downstream stage, 24 August to 22 September 2026: high 4.235 mAOD at 07:00 GMT 13 September, low -0.348. Four-neighbour breadth-first fill: 2.0 m 24.06 km2 at or below (33.6 percent), 8.46 reached, 12.56 with diagonals, 15.60 isolated; 3.0 m 55.86 (78.0), 55.59 reached; 4.235 m 62.23 (86.9), 61.70 reached, 32 isolated pockets; 5.0 m 64.64 (90.3), 64.13; 6.0 m 68.03 (95.0), 68.01. 139,527 cells visited at 4.235 m (recursion would overflow). GOV.UK 2022: 2013 surge, highest tide 5.8 m at the Hull Barrier (datum unstated, not compared); frontages scheme about 7 of 12 km, 0.5 percent annual chance standard. Lesson family: flood fill and breadth-first search on a grid; distinct from Coventry union-find and Belfast PageRank.',
    requiredMentions: [
      '267,014',
      '262,426',
      '4,588',
      '3,730.1',
      '19,426',
      '20,220',
      '251,060',
      '4.235',
      'Wincolmlee',
      'Thomas Holme',
      'Hull Barrier',
      '139,527'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Kingston upon Hull: 267,014 usual residents; 262,426 in households; 4,588 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000010' },
      { claim: 'Nomis, Census 2021 TS007A: Hull and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000010,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Hull 54,703 students of 251,060 aged 5 and over; England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000010,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Hull 3,730.1 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E06000010,E92000001' },
      { claim: 'Ordnance Survey Terrain 50 (ASCII grid download): 50 m heights above Ordnance Datum.', url: 'https://api.os.uk/downloads/v1/products/Terrain50/downloads' },
      { claim: 'Environment Agency flood-monitoring API, Hull Barrier Victoria Pier (L3203) downstream stage in mAOD.', url: 'https://environment.data.gov.uk/flood-monitoring/id/stations/L3203' },
      { claim: 'ONS, Local Authority Districts December 2025 boundaries, BFC and BFE, for Kingston upon Hull.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_DEC_2025_Boundaries_UK_BFE/FeatureServer' },
      { claim: 'GOV.UK, Hull\'s new flood defences officially opened (2022): 5 December 2013 surge, 5.8 m highest tide at the Hull Barrier, about 7 of 12 km of frontage, 0.5 percent standard.', url: 'https://www.gov.uk/government/news/hull-s-new-flood-defences-officially-opened' },
      { claim: 'KCOM, History: Telegraph Act, 55 of 1,334 authorities, 1904 exchange at 7 Wincolmlee, Thomas Holme, cream kiosks.', url: 'https://www.kcom.com/about-us/our-history' }
    ],
    rejectedClaims: [
      'Any statement that a share of Hull would flood: the fill ignores defences, the barrier, drainage and time, so the page reports low and connected land only and points readers to the Environment Agency flood maps.',
      'The EA station record field (maxOnRecord 4.34, 2019): its datum and completeness are unclear beside the 5.8 m figure GOV.UK gives for 2013, so it is not used.',
      'Placing the 2013 5.8 m tide on the Ordnance Datum scale: the GOV.UK article does not state the datum.',
      'KCOM group website history page: returned 403; the kcom.com history page was used instead. Money figures from the history are excluded by the cluster rules.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Environment Agency, Ordnance Survey, KCOM or Hull City Council.'
    ]
  }
};
