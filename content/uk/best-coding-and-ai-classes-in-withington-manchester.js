'use strict';
// Withington, Manchester (cg- district page, UK cluster Phase 9, row 457). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: why do data maps use hexagons, and does the shape
// of the bins change what the map says? (hexagonal binning against a square grid; grid offset sensitivity).
// Data (read 30 September 2026): Nomis Census 2021 TS001 usual residents for all 1,593 Manchester output areas; ONS Output
// Areas (December 2021) population-weighted centroids; centre = postcodes.io place "Withington" (easting 384904, northing
// 392774). 386 output areas have their centroid inside a 5 km square on that centre; our sum of their census counts is
// 141,227 (an aggregate of ours, not a published figure).
// Our run (scratchpad wth/hex.py): equal-area cells of 0.25 square km: squares of side 500 m, hexagons with centres 537.3 m
// apart (corner distance 310.2 m). 200 random grid offsets each. Busiest cell's population: squares median 4,204, range
// 3,273 to 5,309 (48.4% of the median); hexagons median 4,110, range 3,268 to 5,442 (52.9%). The busiest cell's centre
// sat on average 870 m (squares) and 895 m (hexagons) from its mean position. Farthest a point can be from its cell
// centre: 353.6 m square, 310.2 m hexagon; population-weighted mean distance to cell centre 191.4 m against 188.6 m.
// Neighbours: hexagon 6 at 537.3 m; square 4 at 500 m and 4 at 707.1 m.
// Lesson family: hexagonal binning vs square grids, bin-placement sensitivity. Screened: "hexagonal", "hexbin" 0 hits;
// claimed in claims.txt. The modifiable areal unit idea appears on NL pages by name; here the lesson is the bin shape and
// offset experiment. Manchester city page = cross-correlation of river levels.
// Place facts: Census 2021 TS001: Withington ward (E05011380) 15,439. postcodes.io: Withington (suburban area, M20);
// outcode M20 wards: Burnage, Chorlton Park, Didsbury East, Didsbury West, Old Moat, Withington.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WITHINGTON', label: 'Withington, Manchester', blurb: 'Coding and AI classes for Withington in Manchester, with a mapping project that tests whether hexagons really make fairer data maps than squares.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-withington-manchester',
  code: 'wth',
  accent: '#3F4F8A',
  accentRationale: 'Withington: a slate indigo (hand-picked for hue distance from other Phase 9 pages, contrast above 7:1)',
  pageType: 'city',
  place: {
    name: 'Withington',
    eyebrow: 'Withington, Manchester, England',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-manchester', name: 'Manchester' }],
  nav: [
    { label: 'Manchester', href: '/best-coding-class-in-manchester' },
    { label: 'Didsbury', href: '/online-coding-and-python-classes-in-didsbury-manchester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Withington, Manchester',
  title: 'Coding and AI Classes in Withington, Manchester | Ages 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Withington, Old Moat and Burnage learners in Manchester M20, ages 6 to 67, taught live. First lesson free.',
  ogDescription: 'Coding and AI classes for Withington, Manchester, with a Census mapping project that compares hexagon and square bins and shows how the grid changes the map.',
  twitterDescription: 'Withington, Manchester: coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Withington, Manchester',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Withington and the M20 district, taught live with questioning habits first.'
  },

  h1: 'Coding and AI classes in Withington',
  capsuleQ: 'Where can Withington learners find the best coding and AI classes?',
  capsule: 'Withington ward in Manchester had 15,439 usual residents at the 2021 census. It lies in the M20 postcode district, whose ward list also includes Old Moat and Burnage. From age six up to 67, people here take coding, AI, Python, vibe coding and maths on live video calls with our India-based tutors, either privately or in a class of five to ten who share a level. We build the habit of questioning first, so a learner can ask how a chart was made before trusting what it shows. Lesson one is free and finishes with our view on which course suits. The Withington project maps Census population around the area twice, once in square cells and once in hexagons, then slides each grid about to see how much the picture changes. From then on a group place is USD 100 each month and private tuition USD 150.',
  lead: 'Maps of data often sort points into cells and colour each cell by its total. For years the cells were squares; now many maps use hexagons. The usual explanation is that hexagons are fairer: every neighbour is the same distance away, and no part of a cell is far from its centre. That is true, and measurable. But a quieter question sits underneath: whichever shape you choose, the grid has to be placed somewhere, and nobody tells you where. This project measures both effects on real numbers, using the 2021 census counts for the small areas around Withington.',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Withington, Manchester?',

  picks: {
    eyebrow: 'Withington course picks',
    h2: 'Withington courses in questioning, Python and AI',
    intro: 'Find the learner\'s age below. All four open with a live lesson that costs nothing, and no card is taken to reserve it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think course: sorting things into boxes and noticing that the boxes are a choice.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games built by telling an AI what to make, then testing every rule.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the first program to maps and charts, including the Withington hexagon test.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Modern AI, reading its charts critically, and building agents in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Withington and M20',
      h2: 'Withington and its neighbouring wards',
      intro: 'The census figure for Withington ward, and the wards that share its postcode district.',
      body: [
        { kind: 'table', caption: 'Withington in the 2021 census (ONS table TS001, via Nomis)', head: ['Area', 'Usual residents'], rows: [
          ['Withington ward', '15,439']
        ] },
        { kind: 'p', text: 'Postcodes.io records Withington as a suburban area of Manchester in M20, and lists Burnage, Chorlton Park, Didsbury East, Didsbury West, Old Moat and Withington as the wards that district touches. Schools here teach England\'s national curriculum. Once you tell us the holiday dates, lessons are planned around them.' },
        { kind: 'callout', h3: 'Manchester pages and how we teach', p: 'The city page is <a class="cg-inline-link" href="/best-coding-class-in-manchester">coding classes in Manchester</a>, and next door is <a class="cg-inline-link" href="/online-coding-and-python-classes-in-didsbury-manchester">Didsbury</a>. Why questions come before tools is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Withington project',
      h2: 'Hexagonal binning against a square grid on Census data around Withington',
      intro: 'The same people, the same cell size, two shapes and 200 different placements.',
      body: [
        { kind: 'p', text: 'The learner downloads the 2021 census count for every output area in Manchester and the official centre point of each, then keeps the 386 areas whose centre falls inside a 5 km square around Withington. Added up by us, those areas hold 141,227 people. Python drops each area\'s population into a cell of a quarter of a square kilometre: first squares 500 m across, then hexagons of the same area, whose centres are 537.3 m apart. Then comes the real experiment: the grid is shifted by a random amount and the binning repeated, 200 times for each shape.' },
        { kind: 'table', caption: 'Squares against hexagons of equal area around Withington, our Python run on Census 2021 data', head: ['Measure', 'Square cells', 'Hexagon cells'], rows: [
          ['Farthest any point can be from its cell centre', '353.6 m', '310.2 m'],
          ['Neighbours at the nearest distance', '4 of 8', '6 of 6'],
          ['Busiest cell, typical population', '4,204', '4,110'],
          ['Busiest cell across 200 placements', '3,273 to 5,309', '3,268 to 5,442'],
          ['That range as a share of the typical value', '48.4%', '52.9%']
        ] },
        { kind: 'p', text: 'Hexagons do what is claimed for them. A hexagon\'s corner is 310.2 m from its centre against 353.6 m for a square, and all six neighbours sit at one distance, where a square has four close neighbours and four diagonal ones 707.1 m away. But neither shape fixes the placement problem. Slide the grid and the population of the busiest cell swings by about half its typical value for squares and hexagons alike, and the busiest cell itself jumps around by some 870 to 895 m. A map that announces "the densest spot has 5,300 people" could just as honestly say 3,300.' },
        { kind: 'p', text: 'So the shape is a refinement and the placement is the bigger choice. Careful analysts show more than one placement, or smooth the data, or at least say how the cells were laid down.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Scatter counters on squared paper and on hexagon paper, then slide the paper and recount the fullest cell.' },
          { h3: 'Ages 11 to 15', p: 'Bin real Census points into squares in Python and see how the totals change when the grid moves.' },
          { h3: 'Ages 15 and up', p: 'Code hexagonal binning from scratch, run 200 offsets for each shape and compare the spread.' }
        ] },
        { kind: 'callout', h3: 'Census data, our grids', p: 'Population counts and area centre points are Office for National Statistics data, from Nomis and the Open Geography Portal, under the Open Government Licence. The 5 km square, the cells, the offsets and the totals are our own work, and the 141,227 figure is our sum, not a published one.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Charts and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Every chart is built on choices that the chart itself does not show.',
      body: [
        { kind: 'table', caption: 'From the Withington grids to AI-made charts', head: ['In the binning project', 'When an AI draws a chart for you'], rows: [
          ['Hexagons were more compact than squares', 'Some defaults really are better'],
          ['Shifting the grid moved the peak by half', 'Ask how sensitive the picture is'],
          ['The busiest cell changed place', 'A hotspot may be an accident of the bins'],
          ['Cell area was held equal', 'Compare like with like'],
          ['200 placements were tested', 'One drawing is one opinion']
        ] },
        { kind: 'p', text: 'Ask an AI assistant for "a heat map of where people live" and it will choose a cell size, a shape and a starting corner without telling you. When Withington learners vibe code, giving the AI a plain-English brief, the brief includes those choices, and the finished map is redrawn with the grid moved before anyone reads meaning into it. AI agents that produce reports make hundreds of such silent choices, which is why a person who knows to ask about them is valuable. Agent building waits until Python is second nature, typically from sixteen or so, and Copilot Studio agents are taught only one-to-one. Two longer reads go with this: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>, then <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We have no link to the Office for National Statistics, to Nomis or to postcodes.io. The open data is theirs; the experiment and any slips in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From counters on paper to honest maps',
    intro: 'School year is where we begin guessing; the trial is where we find out.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Sorting, counting and seeing that the boxes are chosen.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps made with an AI and tested by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and data maps', p: 'Coordinates, binning and charts, alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Data, AI and agents', p: 'Visualisation, modern AI and Python agents.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Data and maps',
    h2: 'Why do data maps use hexagons instead of squares?',
    intro: 'Hexagons are used because every neighbouring cell is the same distance away and no point is far from its cell\'s centre, which makes patterns less distorted than on a square grid; they do not, however, remove the effect of where the grid is placed.',
    p1: 'Binning Census population around Withington into equal-area cells, a hexagon kept every point within 310.2 m of its centre against 353.6 m for a square, yet moving either grid changed the busiest cell\'s population by about half.',
    p2: 'Learners who have slid those grids ask of any AI-made map: what were the bins, and would the hotspot survive if they moved?',
    closer: 'A Withington teenager who has coded the bins knows a map is an argument, not a photograph, and can hold an AI\'s chart to account.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Withington lessons, live on video',
    intro: 'Any computer with a camera will do, plus broadband that can carry a video call.',
    cells: [
      { h3: 'Students build it', p: 'The learner writes and runs the code themselves, while the tutor follows on a shared screen and asks why each step is there.' },
      { h3: 'Trial lesson first', p: 'We use the free session to find the right starting point and note any exam board.' },
      { h3: 'Nothing to pay at first', p: 'The opening lesson is free and closes with a course suggestion.' },
      { h3: 'Classes of similar level', p: 'Five to ten learners who are at the same stage, from anywhere in Britain.' },
      { h3: 'Twice a week', p: 'Stopping for school holidays.' },
      { h3: 'A slot that holds', p: 'Tutors move with UK clock changes so the lesson time stays the same for you.' }
    ],
    spec: { title: 'Why online', p: 'Finding five learners at one level, free at one time, inside one postcode is rare. A video class draws them from further afield.' }
  },

  fees: {
    h2: 'Withington fees',
    intro: 'Learners in Withington pay our international prices, the same in every country outside India.',
    first: 'A full lesson at no cost, then our suggestion.',
    group: 'About eight live group lessons each month.',
    private: 'About eight live private lessons each month.',
    closer: 'We price in US dollars only. Invoices begin after the trial has decided the course and the weekly time, and holidays, missed lessons and changes of format are covered on the pricing page.'
  },

  reviewsH2: 'Manchester parents and learners across the UK, on Google',

  book: {
    h2: 'Book a free Withington lesson',
    intro: 'Give us the learner\'s age or year group, plus something they enjoy. The trial might be a counters-and-grids puzzle, a Scratch game built with an AI, first steps in Python, or a small map of real data.',
    success: 'Thank you. Your Withington request has arrived.'
  },

  faq: {
    h2: 'Withington questions',
    intro: 'Hexagon maps, the Census project, vibe coding and how lessons run.',
    items: [
      { q: 'How many people live in Withington?', a: 'Withington ward had 15,439 usual residents at the 2021 census.' },
      { q: 'Are coding and AI classes available online in Withington?', a: 'Yes. Lessons are live video calls for ages 6 to 67 in Withington and the rest of Manchester.' },
      { q: 'What is hexagonal binning?', a: 'Grouping points into hexagon-shaped cells and summarising each cell, for example by its total. It is a common way to map many points without drawing each one.' },
      { q: 'Does the choice of grid change a heat map?', a: 'Yes. In our Withington test, moving a grid of equal-area cells changed the busiest cell\'s population from about 3,300 to about 5,300, for squares and hexagons alike.' },
      { q: 'What is the Withington project?', a: 'Binning 2021 census population for 386 small areas around Withington into squares and hexagons of equal area, then shifting each grid 200 times to see how stable the map is.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, at every age. Learners brief an AI in plain English, then check and correct what it builds.' },
      { q: 'When do learners build AI agents?', a: 'Once Python is second nature, typically from about sixteen; Copilot Studio agents are one-to-one only.' },
      { q: 'Is there support for GCSE or A level work?', a: 'Yes, in computer science and maths. We aim for understanding and make no promises about grades.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free; after that it is USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons run during school holidays?', a: 'No, we pause them. Just send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Manchester pages',
    html: 'Every page has its own experiment: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-didsbury-manchester">Didsbury</a> (measuring an area with darts), <a class="cg-inline-link" href="/ai-and-programming-classes-in-chorlton-manchester">Chorlton</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-wythenshawe-manchester">Wythenshawe</a> and <a class="cg-inline-link" href="/best-coding-class-in-salford">Salford</a>. Other areas are listed on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Withington and Manchester',
  footerPlaces: [
    { href: '/best-coding-class-in-manchester', label: 'Manchester' },
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wth .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-wth .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-wth .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; border-radius: 0 6px 6px 0; }
.cg-root.cg-wth .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wth .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.02em; }
.cg-root.cg-wth .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-wth .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wth .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-wth .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-wth .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Manchester (E08000003). Census 2021 TS001: Withington ward (E05011380) 15,439. postcodes.io: Withington (suburban area, M20); M20 wards Burnage, Chorlton Park, Didsbury East, Didsbury West, Old Moat, Withington. England national curriculum, GCSE and A level.',
    localProject: 'Census 2021 TS001 for 1,593 Manchester OAs at ONS population-weighted centroids; 386 OAs in a 5 km square on postcodes.io Withington point (384904, 392774), our sum 141,227. Equal-area 0.25 sq km cells: squares 500 m; hexagons centre spacing 537.3 m, corner 310.2 m (square corner 353.6 m; diagonal neighbours 707.1 m). 200 offsets: busiest cell squares median 4,204 (3,273 to 5,309, 48.4%); hexagons median 4,110 (3,268 to 5,442, 52.9%); top-cell centre wander 870 m / 895 m. Lesson family: hexagonal binning vs squares, placement sensitivity.',
    requiredMentions: [
      '15,439',
      '141,227',
      'Old Moat',
      'Burnage',
      '537.3 m',
      '310.2 m',
      '353.6 m',
      'hexagonal binning',
      'hexagon'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by output area and ward, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Output Areas (December 2021) population-weighted centroids, Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io place Withington and outcode M20 ward list.', url: 'https://api.postcodes.io/outcodes/M20' }
    ],
    rejectedClaims: [
      '141,227 as a published population: it is our own sum of output-area counts inside our square, and labelled so.',
      'That hexagons remove bias: only compactness and equal neighbours are claimed; placement sensitivity is shown to remain.',
      'Hospital, university, high-street or history claims about Withington: not read from a source; not made.',
      'Any density ranking of real neighbourhoods: cells are not named or ranked.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
