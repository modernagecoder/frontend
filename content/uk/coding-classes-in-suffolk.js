'use strict';
// Suffolk (cg- county index, UK cluster Phase 7, row 250). Suffolk County Council over five districts: Babergh, East
// Suffolk, Ipswich, Mid Suffolk, West Suffolk. Spine: how many containers does a pile of cargo need? Source: Department
// for Transport, Port Freight Statistics table PORT0203 (unitised main freight traffic by port, cargo type, metric and
// loaded status; last updated July 2026), year 2025, both directions, read 26 September 2026: Felixstowe Lo-Lo units
// 1,959.4 thousand, Lo-Lo TEU 3,510.4 thousand, loaded units 1,250.8 thousand, loaded TEU 2,214.1 thousand, weight of
// goods 19,299.1 thousand tonnes; London 2,802.6 thousand TEU; All UK major ports 10,738.9 thousand TEU. The table notes
// figures are in thousands and "might not sum up to the displayed totals due to rounding". Port of Felixstowe site 403
// (logged, not retried).
// Our arithmetic on PORT0203: 1.79 TEU per unit; 63.8 per cent of units loaded; about 15.4 tonnes per loaded unit;
// Felixstowe 32.7 per cent of the UK major-port TEU total as printed.
// Our packing model (scratchpad sfk/bins.py, seed 20260926): 200 invented consignments of 10 to 40 volume units,
// containers of 60, total 4,922, lower bound 83. Next fit 105 (78.1 per cent full), first fit 87 (94.3), best fit 87,
// first fit decreasing 84 (97.7), next fit decreasing 115 (71.3).
// Lesson family: bin packing heuristics against a proven lower bound, online vs offline, and a sort that makes one
// method worse; screened (bin packing, first fit, Felixstowe: 0 hits; container appears in Dutch pages for other ideas).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (our sum 760,688); ONS built-up areas checked against
// our OA sums (Newmarket reaches into Cambridgeshire). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'SUFFOLK', blurb: 'Ipswich, Lowestoft, Bury and the coast, and a Felixstowe lesson on packing cargo into as few containers as possible.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-suffolk',
  code: 'sfk',
  accent: '#6B3044',
  accentRationale: 'Suffolk: a deep Suffolk-pink plum from the solver (7.94:1 on the darkest paper tint), browner and softer than the Somerset and Lancashire accents',
  pageType: 'governorate',
  place: {
    name: 'Suffolk',
    eyebrow: 'Suffolk',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'East of England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Norfolk', href: '/coding-classes-in-norfolk' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Suffolk',
  title: 'Coding Classes in Suffolk | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Suffolk, from Ipswich, Lowestoft and Bury St Edmunds to Haverhill, Felixstowe, Sudbury and Stowmarket.',
  ogDescription: 'Coding classes for all of Suffolk, and a Felixstowe project: pack 200 consignments into containers four ways and see how close each gets to the proven minimum.',
  twitterDescription: 'Suffolk coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Suffolk',
    description: 'Ability-placed online coding, Python, algorithms and mathematics for children, teenagers and adults across Suffolk, taught live in English.'
  },

  h1: 'Coding classes in Suffolk',
  capsuleQ: 'What are the best coding classes in Suffolk?',
  capsule: 'Suffolk has one county council and five district councils, and the 2021 Census counted 760,688 people across the five districts, our addition of their published figures. Ipswich is the largest town, then Lowestoft, Bury St Edmunds, Haverhill and Felixstowe. Our teachers work live over video from India, and every learner is put in a class for their level rather than their age. We take learners aged 6 to 67 for coding, Python, algorithms and maths, taught one-to-one or in groups of five to ten. The Suffolk project comes from the Port of Felixstowe and the containers that pass through it. Trying us costs nothing for the first lesson. Carrying on is USD 100 per month for a group seat or USD 150 per month for one-to-one.',
  lead: 'Department for Transport figures for 2025 show Felixstowe handling 3,510.4 thousand TEU of container traffic, the largest figure for any single port in the table, where a TEU is a standard twenty-foot container. Every one of those boxes raises a question programmers call bin packing: given a pile of goods of different sizes, how do you fit them into as few containers as possible? No quick method is guaranteed to find the perfect answer every time, but some simple rules come remarkably close. This page\'s project tests four of them in Python on 200 consignments and measures each against a minimum that no packing could ever beat.',
  wa: 'Hello Modern Age Coders, we are in Suffolk and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Suffolk',
    h2: 'Where Suffolk learners begin',
    intro: 'A six-year-old in Beccles who loves stacking puzzles, a Year 8 in Stowmarket keen on logic, a Year 12 in Bury St Edmunds heading for computer science, and an adult in Ipswich working in logistics. Each starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, with puzzles about fitting shapes into spaces.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Logic puzzles and computational thinking, with step-by-step strategies and real-world challenges.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Algorithms for teenagers, including greedy methods and how to prove how good an answer is.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Spreadsheets, statistics and SQL, then Python and dashboards, for adults whose work runs on numbers.' }
    ]
  },

  sections: [
    {
      id: 'suffolk', tint: '', eyebrow: 'Suffolk in figures',
      h2: '760,688 people across five districts',
      intro: 'District counts are 2021 Census figures from Nomis, and the total is our sum of them. Towns are ONS built-up areas, which we checked by adding up census output areas.',
      body: [
        { kind: 'table', caption: 'Suffolk\'s twelve largest built-up areas, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Ipswich', '151,565', 'Stowmarket', '21,535'],
          ['Lowestoft', '71,315', 'Newmarket', '18,855'],
          ['Bury St Edmunds', '41,280', 'Kesgrave', '14,950'],
          ['Haverhill', '26,705', 'Woodbridge', '10,145'],
          ['Felixstowe', '24,220', 'Beccles', '9,810'],
          ['Sudbury', '23,920', 'Mildenhall', '9,685']
        ] },
        { kind: 'p', text: 'East Suffolk is the largest district at 246,058 and Babergh the smallest at 92,341. The ONS Ipswich area spreads into three neighbouring districts, which is why it holds more people than Ipswich borough\'s 139,642. Newmarket reaches over the border, with about 2,100 of its residents in Cambridgeshire by our count. After the table come Brandon and Hadleigh. Holiday dates are set by Suffolk County Council and by academy trusts. We have not read them, so we ask each family for its own.' },
        { kind: 'callout', h3: 'Neighbours with pages', p: '<a class="cg-inline-link" href="/coding-classes-in-norfolk">Norfolk</a> lies to the north, <a class="cg-inline-link" href="/coding-classes-in-essex">Essex</a> to the south, and <a class="cg-inline-link" href="/coding-classes-in-cambridgeshire">Cambridgeshire</a> to the west.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Suffolk project',
      h2: 'How few containers will the cargo fit in?',
      intro: 'Two hundred consignments, four packing rules, and a minimum no rule can beat.',
      body: [
        { kind: 'p', text: 'The learner invents 200 consignments with sizes between 10 and 40 units, and containers that hold 60. The sizes add up to 4,922 units, and since each container holds 60, at least 83 containers are needed however cleverly the goods are packed. That number, the total divided by the capacity and rounded up, is a lower bound: a guaranteed floor to measure every method against.' },
        { kind: 'p', text: 'Next fit keeps one container open and starts a new one whenever the next item does not fit. First fit tries every open container from the first. Tightest fit puts each item where it leaves the least space. First fit decreasing sorts the items largest first, then uses first fit. The first three can work as goods arrive; the last needs to see everything before it starts.' },
        { kind: 'table', caption: 'Packing our 200 consignments, runs of 26 September 2026', head: ['Rule', 'Containers used', 'Average fill', 'Above the minimum of 83'], rows: [
          ['Next fit, in arrival order', '105', '78.1%', '22'],
          ['First fit, in arrival order', '87', '94.3%', '4'],
          ['Tightest fit, in arrival order', '87', '94.3%', '4'],
          ['First fit decreasing', '84', '97.7%', '1'],
          ['Next fit, largest first', '115', '71.3%', '32']
        ] },
        { kind: 'p', text: 'First fit decreasing uses 84 containers, just one above the floor of 83, so we know for certain it is within one container of perfect without ever finding the perfect packing. That is the power of a lower bound: it lets you judge an answer when the perfect answer is too expensive to compute. Next fit wastes 22 containers because it never goes back to fill a gap. And the last row is the surprise: sorting largest first, which helps first fit, makes next fit even worse, because the big items arrive together and each leaves a gap that nothing else will fill until much later.' },
        { kind: 'p', text: 'Real ports are more complicated: boxes have weight as well as volume, some goods cannot travel together, and containers must also come back. The DfT table itself shows this last point: by our arithmetic, only 63.8 per cent of the container units through Felixstowe in 2025 were recorded as loaded. Packing well is only half the problem; getting the empties back where they are needed is the other.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Pack paper strips of different lengths into envelopes, first in any order and then biggest first, and count envelopes.' },
          { h3: 'Ages 11 to 15', p: 'Write next fit and first fit in Python, compute the lower bound, and compare how many containers each uses.' },
          { h3: 'Ages 15 and up', p: 'Add tightest fit and first fit decreasing, test many random piles, and explain why sorting helps one rule and harms another.' }
        ] },
        { kind: 'callout', h3: 'Published figures and our model', p: 'The Felixstowe container figures are the Department for Transport\'s, from table PORT0203 for 2025; the shares and averages derived from them are our arithmetic. The consignments, container size and all packing results are our own teaching model and do not describe how any port loads cargo.' }
      ]
    },
    {
      id: 'felixstowe', tint: 'deep', eyebrow: 'Why Felixstowe',
      h2: 'Millions of boxes through one Suffolk port',
      intro: 'The Suffolk link, in the Department for Transport\'s own numbers.',
      body: [
        { kind: 'table', caption: 'Container (Lo-Lo) traffic in 2025, from DfT table PORT0203, thousands, both directions', head: ['Measure', 'Felixstowe'], rows: [
          ['Container units', '1,959.4'],
          ['TEU (twenty-foot equivalent units)', '3,510.4'],
          ['Loaded units', '1,250.8'],
          ['Loaded TEU', '2,214.1'],
          ['Weight of goods, thousand tonnes', '19,299.1']
        ] },
        { kind: 'p', text: 'For comparison, the same table gives London 2,802.6 thousand TEU and all UK major ports 10,738.9 thousand, so Felixstowe handled about a third of the total. Our arithmetic also shows about 1.79 TEU per container unit, a sign that longer boxes outnumber twenty-foot ones, and roughly 15.4 tonnes of goods per loaded unit. Behind numbers like these sit software systems that plan stowage, schedule cranes and track every box, and at their heart are problems like the one on this page.' },
        { kind: 'p', text: 'Modern Age Coders has no link with the Port of Felixstowe, the Department for Transport or Suffolk County Council. The published figures are theirs; our model and any mistakes are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/coding-classes-in-norfolk">Norfolk</a> and <a class="cg-inline-link" href="/best-coding-class-in-norwich">Norwich</a> are north, <a class="cg-inline-link" href="/coding-classes-in-essex">Essex</a> and <a class="cg-inline-link" href="/best-coding-class-in-colchester">Colchester</a> south, and <a class="cg-inline-link" href="/coding-classes-in-cambridgeshire">Cambridgeshire</a> west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From stacking puzzles to provable algorithms',
    intro: 'The free lesson finds the right start. A birthday suggests; ability decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Fit it in', p: 'Block coding and puzzles about fitting shapes and objects into limited spaces.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 7 to 13', h3: 'Strategies', p: 'Logic and Python where learners try a rule, count the result and look for a better rule.', courses: ['problem-solving-and-computational-thinking-for-kids', 'python-ai-kids-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'Greedy and exact', p: 'Algorithms for teenagers, including greedy methods, bounds and when to search exhaustively.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Data at work', p: 'Spreadsheets, SQL and Python for adults who plan, schedule and report.', courses: ['data-analysis-mastery-course-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and good-enough answers',
    h2: 'An AI can give you a packing plan. How do you know it is any good?',
    intro: 'Without a benchmark, a plausible answer and a poor one look the same.',
    p1: 'Ask an assistant to pack 200 consignments and it will produce a plan that looks sensible. Whether it used 84 containers or 105, the plan will read just as confidently. What tells you how good it is, without ever finding the perfect answer, is a lower bound: the total divided by the capacity. If the plan is close to the bound, it is close to perfect; if not, there is room to improve.',
    p2: 'A Suffolk student who has used a bound to judge a heuristic knows to ask of any AI answer: compared with what is possible, how good is this? That question is how engineers check automated plans for routes, rotas and shipments before trusting them with real money and real time.',
    closer: 'That is why coding in 2026 is worth learning for a Suffolk teenager: it teaches you to measure how good an answer is instead of accepting that it looks right.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Getting started',
    h2: 'Coast, heath and farmland, all within reach',
    intro: 'Many Suffolk villages sit a long way from the nearest town with a coding club. Learning online removes the distance entirely.',
    cells: [
      { h3: 'At home, wherever', p: 'A cottage near Framlingham, a flat in Lowestoft, a house in Haverhill. The learner types while the teacher follows the shared screen.' },
      { h3: 'School language', p: 'Year groups, key stages, GCSEs and A levels are named as Suffolk schools name them, and lessons are in English.' },
      { h3: 'Free to try', p: 'A proper first lesson, then plain advice on level and course, with no card details requested.' },
      { h3: 'Matched by stage', p: 'Groups of five to ten learners at one level, gathered from Suffolk and far beyond.' },
      { h3: 'Holiday breaks', p: 'Two lessons a week suits most learners, and we pause for your own school holidays.' },
      { h3: 'Fixed in UK time', p: 'Lessons are booked in UK time and keep the same slot through the clock changes; the teacher, on India time some hours ahead, shifts instead.' }
    ],
    spec: { title: 'Why groups follow level', p: 'In a county of market towns and villages, five learners at the same stage free on one evening rarely live close together. Grouping by level lets a learner in Brandon or Hadleigh join a class that fits.' }
  },

  fees: {
    h2: 'Fees in Suffolk',
    intro: 'Felixstowe or Newmarket, the price is the same, and so it is in every country we teach bar India.',
    first: 'One complete lesson of real work, then a suggested level and course.',
    group: 'About eight lessons a month with five to ten learners at one level.',
    private: 'About eight lessons a month, taught one-to-one.',
    closer: 'Fees are in US dollars; we publish no pound prices. Billing starts only once the free lesson has agreed a course and a weekly time, and the pricing page covers pauses, missed lessons and swapping between group and private teaching.'
  },

  reviewsH2: 'What Google reviewers say about us',

  book: {
    h2: 'Book a free Suffolk lesson',
    intro: 'Send the learner\'s age or school year and an interest or two. A first lesson could be a Scratch stacking game, a Python packing rule, or the container problem on this page.',
    success: 'Thank you. Your Suffolk request has reached us.'
  },

  faq: {
    h2: 'Suffolk questions',
    intro: 'The county, the container project and the practicalities.',
    items: [
      { q: 'How many people live in Suffolk?', a: 'Adding the five district counts from Nomis gives 760,688 usual residents at the 2021 Census; the total is our sum of the ONS figures.' },
      { q: 'What are the largest towns in Suffolk?', a: 'By ONS built-up area: Ipswich 151,565, Lowestoft 71,315, Bury St Edmunds 41,280, Haverhill 26,705 and Felixstowe 24,220.' },
      { q: 'What is the container project?', a: 'Learners pack 200 invented consignments into containers using next fit, first fit, tightest fit and first fit decreasing, and compare each with a lower bound of 83; first fit decreasing needs 84.' },
      { q: 'What is bin packing?', a: 'The problem of fitting items of different sizes into as few fixed-size bins as possible. It appears in shipping, cloud computing, cutting materials and scheduling, and simple rules often come close to the ideal answer.' },
      { q: 'How busy is the Port of Felixstowe?', a: 'Department for Transport table PORT0203 gives Felixstowe 3,510.4 thousand TEU of container traffic in 2025, out of 10,738.9 thousand for all UK major ports.' },
      { q: 'Do you have a Suffolk classroom?', a: 'No. Classes happen on video, so Lowestoft and Haverhill are equally close.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67. The youngest start with blocks and puzzles; typed Python usually arrives between eight and ten; teenagers can go on to algorithms; adults most often choose data skills or Python. We decide the starting point together in the free lesson.' },
      { q: 'Do you teach algorithms to teenagers?', a: 'Yes. The teen problem solving and algorithms course includes greedy methods and how to judge an answer against a bound.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that, a group place is USD 100 a month and one-to-one lessons USD 150 a month, with no joining fee and no minimum term.' },
      { q: 'Do lessons pause for Suffolk school holidays?', a: 'Yes, if you wish. Suffolk County Council and academy trusts publish their own dates; tell us yours and we plan around them.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages near Suffolk',
    html: 'Try <a class="cg-inline-link" href="/coding-classes-in-norfolk">Norfolk</a>, <a class="cg-inline-link" href="/coding-classes-in-essex">Essex</a>, <a class="cg-inline-link" href="/coding-classes-in-cambridgeshire">Cambridgeshire</a> or <a class="cg-inline-link" href="/best-coding-class-in-colchester">Colchester</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every other area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Suffolk and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/coding-classes-in-norfolk', label: 'Norfolk' },
    { href: '/coding-classes-in-essex', label: 'Essex' }
  ],

  personalityCss: `
.cg-root.cg-sfk .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.9vw, 2.5rem); }
.cg-root.cg-sfk .cg-hero h1 { font-weight: 700; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-sfk .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-sfk .cg-eyebrow { letter-spacing: 0.17em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-sfk .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.016em; }
.cg-root.cg-sfk .cg-table caption { font-weight: 600; font-style: italic; text-align: left; }
.cg-root.cg-sfk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sfk .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-sfk .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-sfk .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Suffolk: Suffolk County Council over Babergh, East Suffolk, Ipswich, Mid Suffolk, West Suffolk. ONS Census 2021 TS001 via Nomis: East Suffolk 246,058; West Suffolk 179,948; Ipswich 139,642; Mid Suffolk 102,699; Babergh 92,341; our sum 760,688. ONS built-up areas (published; agree with our OA sums except Newmarket 18,855 with 16,766 inside): Ipswich 151,565 (Babergh, East Suffolk, Ipswich, Mid Suffolk); Lowestoft 71,315; Bury St Edmunds 41,280; Haverhill 26,705; Felixstowe 24,220; Sudbury 23,920; Stowmarket 21,535; Newmarket 18,855; Kesgrave 14,950; Woodbridge 10,145; Beccles 9,810; Mildenhall 9,685; Brandon 9,225; Hadleigh 8,640. DfT Port Freight Statistics PORT0203 (last updated July 2026), 2025, both directions, thousands: Felixstowe Lo-Lo units 1,959.4; Lo-Lo TEU 3,510.4; loaded units 1,250.8; loaded TEU 2,214.1; weight of goods 19,299.1 thousand tonnes; London 2,802.6 TEU; All UK major ports 10,738.9 TEU; note: "Displayed figures might not sum up to the displayed totals due to rounding."',
    localProject: 'Bin packing heuristics vs lower bound. 200 invented consignments uniform 10 to 40, capacity 60, total 4,922, lower bound ceil(4922/60) = 83. Next fit 105 (78.1 per cent), first fit 87 (94.3), best fit 87 (94.3), first fit decreasing 84 (97.7), next fit decreasing 115 (71.3). Derived from PORT0203 (ours): 1.79 TEU per unit; 63.8 per cent of units loaded; 15.4 tonnes per loaded unit; Felixstowe 32.7 per cent of the UK major-port TEU total as printed. Page labels model as ours. AI angle: judge a plan against a bound. Lesson family: bin packing, greedy heuristics, lower bounds, online vs offline, sorting harming next fit.',
    requiredMentions: [
      '760,688',
      '3,510.4',
      '10,738.9',
      'PORT0203',
      'first fit decreasing',
      'bin packing',
      'Felixstowe',
      'Lowestoft',
      'Bury St Edmunds',
      'Haverhill',
      'Stowmarket',
      'Kesgrave'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the five Suffolk districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Suffolk towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Department for Transport, Port Freight Statistics table PORT0203, unitised main freight traffic by port, 2025.', url: 'https://www.gov.uk/government/statistical-data-sets/port-and-domestic-waterborne-freight-statistics-port' }
    ],
    rejectedClaims: [
      'Port of Felixstowe\'s own claims about its size and history: its website returned 403 and was not retried, so none are quoted.',
      'That Felixstowe is the UK\'s busiest container port in general terms: the page states only the 2025 DfT TEU figures and ranking within that table.',
      'Container internal dimensions and weight limits: not read, so the model uses abstract units.',
      'Sutton Hoo and Lowestoft\'s easterly position: not researched for this page, not claimed.',
      'Suffolk school term dates: none read.',
      'Named Suffolk schools: none named.'
    ]
  }
};
