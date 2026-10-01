'use strict';
// Batley (cg- town page, UK cluster Phase 10, towns band B, row 537). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how much of Batley sits high up, and
// why does a small sample get that wrong? (hypsometric curve and hypsometric integral from an elevation grid).
// Data (read 30 September 2026): Copernicus EU-DEM v1.1 heights through the OpenTopoData eudem25m API, 17 requests.
// Grid: 41 x 41 points 100 m apart (a square 4 km on each side) centred on the OS Open Names point for Batley as
// served by postcodes.io (53.71444 N, 1.63370 W). 1,681 heights: lowest 46.7 m, highest 157.8 m, mean 105.2 m,
// median 107.7 m. Share of points at or above 60 m 96.0%, 80 m 81.6%, 100 m 59.3%, 120 m 33.6%, 140 m 6.2%.
// Hypsometric integral (mean - min) / (max - min) = 0.527; 56.9% of points in the upper half of the range, 2.0% in the
// top tenth. Random samples (2,000 draws each, seed 2026; scratchpad bty/hyp.py): 10 points, integral 0.407 to 0.661
// (5th to 95th percentile), highest height seen 138.9 m on average; 25 points 0.452 to 0.631, 145.2 m; 100 points
// 0.487 to 0.592, 151.6 m; 400 points 0.507 to 0.553, 156.2 m. Regular sub-grid 1 km apart (25 points): 0.543,
// highest 155.2 m. Mean slope between neighbouring grid points 4.8%, steepest 24.7%.
// Lesson family: hypsometric curve and integral (area-altitude distribution; statistics built on extremes).
// Place facts: Kirklees (E08000034) TS001 433,216; ONS 2021 BUA Batley 44,500 (published). postcodes.io places whose
// nearest postcode lies in the Batley BUA: Birstall, Batley Carr, Carlinghow, Staincliffe, Healey, Mount Pleasant,
// Hanging Heaton, Upper Batley, Howden Clough, Birstall Smithies (suburban areas).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BATLEY', label: 'Batley', blurb: 'Coding and AI classes for Batley in Kirklees, with a project that maps how much of the town lies high on its slopes.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-batley',
  code: 'bty',
  accent: '#466092',
  accentRationale: 'Batley: a muted slate blue (6.27:1 contrast on white, 5.09:1 on the darkest paper tint), picked by hand under the muted-accent rule, at least 40 RGB steps from Yorkshire pages and neighbouring rows',
  pageType: 'city',
  place: {
    name: 'Batley',
    eyebrow: 'Batley, Kirklees, West Yorkshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-yorkshire-and-the-humber', name: 'Yorkshire and the Humber' }],
  nav: [
    { label: 'West Yorkshire', href: '/coding-classes-in-west-yorkshire' },
    { label: 'Dewsbury', href: '/ai-and-programming-classes-in-dewsbury' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Batley, West Yorkshire',
  title: 'Coding and AI Classes in Batley, West Yorkshire | Ages 6 to 67',
  description: 'Live online coding, AI, Python and vibe coding lessons for Batley, Birstall, Carlinghow, Staincliffe and Hanging Heaton, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Batley, Kirklees, with a data project: 1,681 ground heights turned into a hypsometric curve, and why ten points miss the hilltop.',
  twitterDescription: 'Batley, West Yorkshire: live video lessons in coding, AI, Python and vibe coding for ages 6 to 67, starting with a free lesson.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Batley, West Yorkshire',
    description: 'Coding, AI, Python, data analysis, vibe coding and maths for children, teenagers and adults in Batley and the rest of Kirklees, taught live online by tutors who ask learners to justify each result.'
  },

  h1: 'Coding and AI classes in Batley, West Yorkshire',
  capsuleQ: 'Which are the best coding and AI classes for learners in Batley?',
  capsule: 'At the 2021 census the ONS counted 44,500 residents in the Batley built-up area, inside a Kirklees district of 433,216. Birstall, Carlinghow, Staincliffe, Healey, Hanging Heaton and Howden Clough appear among its suburban areas in postcode data. Anyone in Batley aged six to 67 can learn maths, Python, vibe coding, AI and general coding with us over live video, taught from India by tutors who run private sessions or level-matched groups of five to ten. Each course trains the habit of explaining an answer before trusting it, which is exactly what makes AI output checkable. The Batley project reads 1,681 ground heights across the town and draws its hypsometric curve, a picture of how much land sits at each height. Your trial is free and ends with our advice on a course. Ongoing lessons then cost USD 100 monthly in a group, or USD 150 monthly with a tutor to yourself.',
  lead: 'Ask for a single number that describes the ground under Batley and most people would give an average height, about 105 m above sea level. That number throws away nearly everything worth knowing. Is the town a high plateau cut by a few deep valleys, or a valley floor with a handful of lonely hilltops? Geographers settle it with a hypsometric curve, which shows how much of an area lies above each height. Underneath, it is a cumulative distribution, one of the workhorse tools of data science, and building one from real elevation data makes an excellent first data project. It also exposes a trap that AI summaries fall into all the time: any figure that leans on the highest or lowest value is fragile.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a learner in Batley.',

  picks: {
    eyebrow: 'Batley course picks',
    h2: 'Coding, thinking and AI courses picked for Batley',
    intro: 'We suggest one course per age group. Each begins with a free live lesson that needs no card to book.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: guess the height of a hill from three clues, then find out which clue misled you.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children direct an AI to make a Scratch climbing game, then test whether its hills behave.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Distributions, sampling and machine learning, with the Batley height curve as a working dataset.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects written alongside an AI, each result re-run on a fresh sample.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The town',
      h2: 'Batley, Birstall and the neighbourhoods in between',
      intro: 'Ten suburban areas that postcode data places in the Batley built-up area, with the ward of each one\'s nearest postcode.',
      body: [
        { kind: 'table', caption: 'Suburban areas of Batley in postcodes.io, with the ward of the postcode nearest to each named point', head: ['Suburban area', 'Ward of nearest postcode'], rows: [
          ['Birstall', 'Birstall and Birkenshaw'],
          ['Howden Clough', 'Birstall and Birkenshaw'],
          ['Birstall Smithies', 'Batley West'],
          ['Carlinghow', 'Batley West'],
          ['Healey', 'Batley West'],
          ['Staincliffe', 'Batley West'],
          ['Upper Batley', 'Batley East'],
          ['Mount Pleasant', 'Batley East'],
          ['Hanging Heaton', 'Batley East'],
          ['Batley Carr', 'Batley East']
        ] },
        { kind: 'p', text: 'We kept a name only when the postcode closest to its point in the gazetteer falls inside the ONS Batley built-up area, which is why a few familiar local names are missing here. The Batley figure of 44,500 residents is the ONS\'s rounded 2021 count for the built-up area, and the Kirklees count of 433,216 covers the whole district. Schools here follow the national curriculum for England, and any holiday dates you pass on stay free of lessons.' },
        { kind: 'callout', h3: 'West Yorkshire, the region and our approach', p: 'The county page is <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">coding classes in West Yorkshire</a> and the regional one is <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a>. Why we put reasoning ahead of any particular tool is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Batley project',
      h2: 'A hypsometric curve for Batley from 1,681 heights',
      intro: 'Lay a grid over the town, read the ground height at every point, and ask what share of the land lies above each level.',
      body: [
        { kind: 'p', text: 'The learner centres a square 4 km on each side on the point that OS Open Names, served through postcodes.io, gives for Batley, then marks a grid of 41 by 41 points 100 m apart: 1,681 points in all. An open elevation model returns the height of the ground at each one. The lowest reading is 46.7 m and the highest 157.8 m; the mean is 105.2 m and the median 107.7 m. Between neighbouring points the ground rises or falls by 4.8% on average, and the steepest single step on the grid is 24.7%.' },
        { kind: 'table', caption: 'Share of the 1,681 grid points at or above each height (our Python run)', head: ['Height above sea level', 'Share of points at or above it'], rows: [
          ['60 m', '96.0%'],
          ['80 m', '81.6%'],
          ['100 m', '59.3%'],
          ['120 m', '33.6%'],
          ['140 m', '6.2%']
        ] },
        { kind: 'p', text: 'Sort the heights and the curve draws itself: for each level, the fraction of points at or above it. To squeeze the whole curve into one number, measure where the mean sits inside the range, (mean minus lowest) divided by (highest minus lowest). That ratio is the hypsometric integral, and for the Batley square it comes to 0.527. The ground is spread fairly evenly through its range, leaning slightly high: 56.9% of the points lie in the upper half of the range, yet only 2.0% reach its top tenth, so the high ground is broad shoulders rather than sharp peaks.' },
        { kind: 'p', text: 'Now the trap. The integral depends on the single highest and single lowest points, and a small sample rarely contains either. We drew 10 of the 1,681 points at random, 2,000 times over. The highest height seen averaged 138.9 m instead of 157.8 m, and the integral wandered between 0.407 and 0.661 across the middle 90% of draws. With 100 points it stayed between 0.487 and 0.592, and with 400 points between 0.507 and 0.553. A regular grid 1 km apart, 25 points again, gave 0.543 and a highest point of 155.2 m. More data narrows the answer, but the extremes are the last thing a sample finds.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Stand ten counters on a paper hill, record their heights, then compare the tallest counter with the true summit.' },
          { h3: 'Ages 11 to 15', p: 'Fetch the heights in Python, sort them, draw the curve, and work out the integral by hand for a small grid.' },
          { h3: 'Ages 15 and up', p: 'Resample thousands of times, plot the spread of the integral against sample size, and explain its shape.' }
        ] },
        { kind: 'callout', h3: 'Where the heights come from, and the limits', p: 'Heights come from the EU-DEM v1.1 elevation model, produced using Copernicus data and information funded by the European Union, read through the OpenTopoData service. Its grid is 25 m and a reading can be a few metres out, more so among buildings and trees. The square is ours and is not the built-up area boundary, so it includes some open land. The grid, the sampling and every figure computed from them are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Shape before summary',
      h2: 'Why this matters for AI and vibe coding',
      intro: 'A single average hides the shape of the data, and small samples hide its edges.',
      body: [
        { kind: 'table', caption: 'From Batley heights to everyday AI work', head: ['In the Batley run', 'In AI practice'], rows: [
          ['The mean of 105.2 m said nothing about shape', 'Ask for the distribution, not one average'],
          ['Ten random points missed the summit by about 19 m', 'Small samples miss rare cases, and rare cases matter'],
          ['On ten points the integral ranged from 0.407 to 0.661', 'Resample and see how far an answer moves'],
          ['A sorted list became a curve', 'Many model scores are curves read at a threshold'],
          ['Every step was a few lines of Python', 'Code you can rerun beats a number you were handed']
        ] },
        { kind: 'p', text: 'Tools used to judge AI models are often built the same way as this curve: sort the outputs, then count what lies above each threshold. Knowing how the curve was made is what lets a learner read one critically. The Batley exercise also gives vibe coders a habit worth keeping. An assistant asked for the average height of Batley will happily return a number. Asking how many points it used, and how much that number changes on another sample, is the learner\'s job. When Python comes easily, usually from sixth form onward, learners move on to building AI agents, and agents built in Copilot Studio are taught one-to-one only. Read more on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>.' },
        { kind: 'p', text: 'This page draws on open data from the European Union\'s Copernicus programme, OpenTopoData, the Office for National Statistics, Ordnance Survey and postcodes.io, none of whom endorse it. The analysis is our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Pathway',
    h2: 'From paper hills to resampled data',
    intro: 'A school year gives a starting guess, and the free lesson settles the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Clues, estimates and the question of which clue to trust.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games built with an AI helper, then played to find the bugs.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, data and AI', p: 'Distributions, sampling and models, alongside GCSE and A level study.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'AI you can check', p: 'Confident Python first, then generative AI and agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Data and AI',
    h2: 'What is a hypsometric curve?',
    intro: 'A hypsometric curve is a graph showing how much of an area lies above each height, made by sorting elevation readings and plotting, for every level, the share of the area at or above it.',
    p1: 'Across 1,681 points in and around Batley, 59.3% of the ground stands at 100 m or higher and 6.2% at 140 m or higher, and the hypsometric integral, which condenses the curve to one number, is 0.527.',
    p2: 'A random sample of ten points put that integral anywhere from 0.407 to 0.661 and usually missed the true summit by about 19 m.',
    closer: 'A Batley teenager who has watched a summary swing like that will question the next confident figure an AI hands over. That instinct comes from writing and rerunning the code, and it is a sound reason to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'In a lesson',
    h2: 'Birstall, Staincliffe and Upper Batley on a live call',
    intro: 'Bring a computer with a webcam; ordinary home broadband is plenty.',
    cells: [
      { h3: 'The learner drives', p: 'Every line is typed by the learner on a shared screen, and the tutor asks for a prediction before each run.' },
      { h3: 'A level set by the trial', p: 'The free session shows us where to begin, and we note any exam board in play.' },
      { h3: 'No charge to start', p: 'Lesson one is free, needs no card, and finishes with our course advice.' },
      { h3: 'Classmates at your stage', p: 'Groups hold five to ten learners from across the UK working at the same level.' },
      { h3: 'Two sessions a week', p: 'Tell us your holiday weeks and they stay clear.' },
      { h3: 'Steady through clock changes', p: 'When the clocks go forward or back, our tutors shift, so your time stays put.' }
    ],
    spec: { title: 'Why we teach online', p: 'Level-matched classes need a large pool of learners to draw on. One town is too small for that; the whole country is not.' }
  },

  fees: {
    h2: 'Batley fees',
    intro: 'Batley learners pay the international rates we use everywhere outside India.',
    first: 'A full-length free lesson that ends with a course recommendation.',
    group: 'About eight live group lessons a month.',
    private: 'About eight live private lessons a month.',
    closer: 'Prices are set in US dollars only, with no conversion to pounds shown. Nothing is billed until the trial has settled a course and a weekly slot, and the pricing page covers holidays, missed lessons and changing format.'
  },

  reviewsH2: 'Google reviews from West Yorkshire families and learners around the UK',

  book: {
    h2: 'Book a free lesson for Batley',
    intro: 'Send us an age or school year and one interest. The trial could be a height-guessing puzzle, a Scratch game made with AI, a first Python script, or a small look at real data.',
    success: 'Thank you. Your Batley request has arrived and we will be in touch.'
  },

  faq: {
    h2: 'Batley questions',
    intro: 'The height project, coding, AI and how lessons work.',
    items: [
      { q: 'How many people live in Batley?', a: 'The ONS counted 44,500 residents in the Batley built-up area at the 2021 census; the Kirklees district as a whole had 433,216.' },
      { q: 'Can Batley learners take coding and AI classes online?', a: 'Yes. Lessons run live on video for ages 6 to 67, so Birstall, Carlinghow, Staincliffe, Hanging Heaton and the rest of Batley are all covered.' },
      { q: 'What is a hypsometric integral?', a: 'A single number between 0 and 1 that says where the average height sits within an area\'s range of heights: (mean minus lowest) divided by (highest minus lowest).' },
      { q: 'Why does a small sample get the range wrong?', a: 'The highest and lowest points are rare, so a handful of readings seldom includes them. Any measure built on the range inherits that error.' },
      { q: 'What happens in the Batley project?', a: 'Learners fetch 1,681 ground heights in Python, sort them into a curve, compute the integral of 0.527, and then resample to see how much smaller samples wobble.' },
      { q: 'Is vibe coding part of the course?', a: 'Throughout. The learner describes what to build, an AI drafts it, and the learner checks the result, here by rerunning it on a new sample.' },
      { q: 'When do learners build AI agents?', a: 'Once they write Python on their own, which for most is sixth form or later. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, in computer science and maths. Our aim is understanding, and grades are never guaranteed.' },
      { q: 'How much do lessons cost?', a: 'Nothing for the trial. From the second month of lessons onward we charge USD 100 monthly for a class seat and USD 150 monthly for solo tuition.' },
      { q: 'Can we pause for school holidays?', a: 'Yes. Send the dates and those weeks are left free.' }
    ]
  },

  next: {
    eyebrow: 'Beyond Batley',
    h2: 'More pages for West Yorkshire',
    html: 'Nearby projects are on the <a class="cg-inline-link" href="/ai-and-programming-classes-in-dewsbury">Dewsbury</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-huddersfield">Huddersfield</a> and <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a> pages, and the county has <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">West Yorkshire</a>. Every other town is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Batley and West Yorkshire',
  footerPlaces: [
    { href: '/coding-classes-in-west-yorkshire', label: 'West Yorkshire' },
    { href: '/coding-and-ai-classes-in-yorkshire-and-the-humber', label: 'Yorkshire and the Humber' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bty .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.3vw, 2.8rem); }
.cg-root.cg-bty .cg-hero h1 { font-weight: 720; letter-spacing: -0.021em; line-height: 1.07; }
.cg-root.cg-bty .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-bty .cg-eyebrow { letter-spacing: 0.11em; font-weight: 650; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-bty .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.014em; }
.cg-root.cg-bty .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 650; }
.cg-root.cg-bty .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-bty .cg-table th { font-size: 0.82rem; font-weight: 700; letter-spacing: 0.04em; }
.cg-root.cg-bty .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-bty .cg-callout { border-left-width: 6px; border-radius: 10px; }
`,

  dossier: {
    curriculumAuthority: 'Kirklees (E08000034), Census 2021 TS001 usual residents 433,216. ONS 2021 BUA Batley 44,500 (published). postcodes.io places (suburban areas) whose nearest postcode lies in the Batley BUA, with admin ward: Birstall (Birstall & Birkenshaw), Howden Clough (Birstall & Birkenshaw), Birstall Smithies (Batley West), Carlinghow (Batley West), Healey (Batley West), Staincliffe (Batley West), Upper Batley (Batley East), Mount Pleasant (Batley East), Hanging Heaton (Batley East), Batley Carr (Batley East). Excluded: Chidswell and Dewsbury Moor (nearest postcode in the Dewsbury BUA); Heckmondwike (own BUA); Soothill, Brownhill, Purlwell (no postcodes.io place).',
    localProject: 'Copernicus EU-DEM v1.1 via OpenTopoData eudem25m, 17 requests. 41 x 41 grid, 100 m spacing, 4 km square centred on 53.71444 N, 1.63370 W (OS Open Names point for Batley via postcodes.io). 1,681 heights: min 46.7 m, max 157.8 m, mean 105.2 m, median 107.7 m. At or above 60 m 96.0%, 80 m 81.6%, 100 m 59.3%, 120 m 33.6%, 140 m 6.2%. Hypsometric integral (mean - min)/(max - min) 0.527; upper half of range 56.9%; top tenth 2.0%. Random samples, 2,000 draws each (seed 2026): 10 points integral 0.407 to 0.661 (5th to 95th percentile), highest seen 138.9 m on average; 25 points 0.452 to 0.631, 145.2 m; 100 points 0.487 to 0.592, 151.6 m; 400 points 0.507 to 0.553, 156.2 m. Sub-grid 1 km apart (25 points) 0.543, highest 155.2 m. Mean slope between neighbours 4.8%, steepest 24.7%. Lesson family: hypsometric curve and hypsometric integral (area-altitude distribution; fragility of range-based statistics under sampling).',
    requiredMentions: [
      '433,216',
      '1,681',
      '157.8',
      '46.7',
      '0.527',
      'hypsometric',
      'Carlinghow',
      'Staincliffe',
      'Hanging Heaton',
      'Howden Clough',
      'Birstall Smithies',
      '138.9'
    ],
    sources: [
      { claim: 'Copernicus EU-DEM v1.1 elevation model, read through the OpenTopoData eudem25m API.', url: 'https://www.opentopodata.org/datasets/eudem/' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and postcodes: suburban areas of Batley and the ward and built-up area of the nearest postcode.', url: 'https://api.postcodes.io/places?q=Carlinghow' }
    ],
    rejectedClaims: [
      'Names of the hills, valleys or rivers at the highest and lowest grid points: not read from a source; not named.',
      'Batley textile or mill history: not read from a source; not claimed.',
      'Rank of Batley among Kirklees towns: not claimed on this page.',
      'That a regular grid always beats a random sample of the same size: not claimed; only one grid was drawn.',
      'Chidswell and Dewsbury Moor as parts of Batley: rejected; their nearest postcodes lie in the Dewsbury built-up area.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
