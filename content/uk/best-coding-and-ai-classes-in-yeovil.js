'use strict';
// Yeovil (cg- town page, UK cluster Phase 10, towns band B, row 513). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how far apart must two places be before one
// stops telling you about the other? (Variogram / semivariance of ground height.)
// Data (read 30 September 2026): OS Code-Point Open 2026.3.0 (copyright date 20 July 2026), postcode units in districts
// BA20 (489) and BA21 (773): 1,262 postcodes at 1,204 distinct grid points (positional quality 10). Ground height at
// each point from OpenTopoData, dataset eudem25m (EU-DEM, 25 m grid), 13 polite requests of up to 100 points.
// Our run (scratchpad yvl/vg.py): heights 22.4 m to 111.5 m, mean 65.7 m, variance 377.9. All 724,206 pairs of points:
//   separation        pairs     mean abs height difference   semivariance
//   under 100 m       2,254     2.0 m                        3.5
//   100 to 200 m      6,649     4.4                          15.4
//   200 to 300 m      9,865     7.0                          37.6
//   400 to 500 m      15,253    11.1                         90.0
//   750 to 1,000 m    52,570    17.3                         219.8
//   1,000 to 1,500 m  116,428   22.4                         365.4
//   1,500 to 2,000 m  123,439   26.8                         508.3
//   2,500 to 3,000 m  90,623    24.0                         421.5
//   All pairs: mean abs difference 22.3 m. Semivariance first exceeds the overall variance in the 1,300 to 1,400 m band.
// Consequence test, predicting each point's height from the nearest point whose height is known: random 20% hold-out
// (200 repeats, seed 2026) mean error 2.16 m, known neighbour 70 m away on average; leaving out one whole 1 km grid
// square at a time (33 squares) 6.23 m, neighbour 238 m away; always guessing the mean 16.47 m.
// Lesson family: variogram / semivariance / spatial dependence. Screened: "variogram" and "semivarian" 0 hits in
// content/, claims and spent lists; claimed in claims.txt. Somerset county page = rejection sampling; Taunton = ant
// colony; Weston-super-Mare = optimal binning; Bebington = Getis-Ord hot spots; the South West region page uses
// Yeovilton weather, which is not used here.
// Place facts: ONS 2021 BUA (published): Yeovil 50,170. South Somerset district (the 2021 census district, since
// replaced by the Somerset Council area; Code-Point lists these postcodes under E06000066) TS001 172,671. postcodes.io
// (Somerset): Preston Plucknett (suburban area, BA20), Yeovil Marsh (village, BA21), Mudford (village, BA21), West
// Coker (village, BA22), Brympton d'Evercy (hamlet, BA22).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'YEOVIL', label: 'Yeovil', blurb: 'Coding and AI classes for Yeovil, with a project that measures how quickly nearby places stop resembling each other.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-yeovil',
  code: 'yvl',
  accent: '#A8410A',
  accentRationale: 'Yeovil: a burnt orange (6.13:1 on white), set by hand; brighter and redder than the browns used nearby in the list',
  pageType: 'city',
  place: {
    name: 'Yeovil',
    eyebrow: 'Yeovil, Somerset, South West England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Somerset' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-west-england', name: 'South West England' }],
  nav: [
    { label: 'Somerset', href: '/coding-classes-in-somerset' },
    { label: 'South West', href: '/coding-and-ai-classes-in-south-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Yeovil, Somerset',
  title: 'Coding and AI Classes in Yeovil | Python, Ages 6 to 67',
  description: 'Coding, AI, Python and vibe coding for learners aged 6 to 67 in Yeovil, Preston Plucknett, Yeovil Marsh and Mudford. Live online tutors. Free first lesson.',
  ogDescription: 'Coding and AI classes for Yeovil, with a variogram project on the heights of 1,204 postcode points across the town.',
  twitterDescription: 'Yeovil coding, AI, Python and vibe coding classes, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Yeovil',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Yeovil and south Somerset, taught live with projects built on open map and height data.'
  },

  h1: 'Coding and AI classes in Yeovil',
  capsuleQ: 'Which are the best coding and AI classes in Yeovil?',
  capsule: 'Yeovil\'s built-up area had 50,170 usual residents when the 2021 census was taken, on the Office for National Statistics figures. The postcode gazetteer records Preston Plucknett as a suburban area in the BA20 district and Yeovil Marsh and Mudford as villages in BA21, all in Somerset. We offer coding, AI, Python, vibe coding and maths to learners there from age six to 67. Teaching is live, by video, from tutors in India, either privately or in a group of five to ten learners at one level. The aim of every course is that the learner can explain the idea before the machine runs it. There is a free first lesson, and at the end of it we say which course we would pick. Yeovil\'s project looks at the ground itself: using the heights of 1,204 postcode points, learners measure how fast two places stop being alike as the distance between them grows, and what that does to an AI model\'s test score. If you carry on, a group seat is USD 100 per month and private tuition USD 150 per month.',
  lead: 'Houses on the same street sit at almost the same height. Houses across town may not. This ordinary fact, that near things are more alike than far things, is the first law of geography, and it causes real trouble in data science. Most statistical tests and most machine learning recipes assume each data point is a fresh, independent piece of evidence. Points on a map are not. A variogram is the tool that measures the problem: it shows how the typical difference between two measurements grows with the distance between them, and where it stops growing. Yeovil, where the postcode heights span almost 90 m, is a good place to draw one.',
  wa: 'Hello Modern Age Coders, could I book a free coding or AI lesson for a learner in Yeovil?',

  picks: {
    eyebrow: 'Good first courses',
    h2: 'Courses Yeovil learners begin with',
    intro: 'Sorted by age. The first live lesson of each is free to try and we ask for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think like a scientist: measure, compare, and ask whether two clues are really separate clues.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for younger learners, who design a Scratch game and test what the AI builds for them.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, with the Yeovil heights used to show how a test can flatter a model.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the beginning through files, data handling and first models.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'About the town',
      h2: 'Yeovil, Preston Plucknett, Yeovil Marsh and Mudford',
      intro: 'What the census and the gazetteer say, before any analysis of ours.',
      body: [
        { kind: 'table', caption: 'Yeovil and the former South Somerset district, Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Yeovil built-up area', '50,170'],
          ['South Somerset district, as it stood in 2021', '172,671']
        ] },
        { kind: 'p', text: 'South Somerset was the local authority district at the time of the census. It has since been replaced, and Ordnance Survey\'s postcode file now lists Yeovil postcodes under the single Somerset Council area. The two rows are separate published counts, and the district covered many other towns and villages. postcodes.io lists Preston Plucknett as a suburban area in BA20, Yeovil Marsh and Mudford as BA21 villages, and West Coker as a village in BA22. Yeovil pupils are taught the national curriculum for England. A child\'s school year, from Year 2 through Year 13, sets our starting level, and we can run in parallel with GCSE or A level computer science, maths and geography.' },
        { kind: 'callout', h3: 'Somerset pages', p: 'Also in the county: <a class="cg-inline-link" href="/coding-classes-in-somerset">coding classes in Somerset</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-taunton">Taunton</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-weston-super-mare">Weston-super-Mare</a>. Our argument for reasoning first is in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Yeovil project',
      h2: 'A variogram of Yeovil\'s hills',
      intro: 'Take every pair of places, note how far apart they are and how different, and look for the pattern.',
      body: [
        { kind: 'p', text: 'Ordnance Survey publishes the grid position of every postcode. The BA20 and BA21 districts, which cover Yeovil and some villages beyond its edge, contain 1,262 postcodes at 1,204 distinct points. For each point the learner asks an open elevation service for the ground height, taken from a European height model with a 25 m grid. The heights run from 22.4 m to 111.5 m above sea level, with a mean of 65.7 m. Then comes the big loop: all 724,206 possible pairs of points. For each pair Python records the distance between them and the difference in height, and sorts the pairs into distance bands.' },
        { kind: 'table', caption: 'Height difference between pairs of Yeovil postcode points, by distance apart (our Python run on OS Code-Point Open and EU-DEM heights)', head: ['Distance apart', 'Pairs', 'Average height difference'], rows: [
          ['Under 100 m', '2,254', '2.0 m'],
          ['100 to 200 m', '6,649', '4.4 m'],
          ['200 to 300 m', '9,865', '7.0 m'],
          ['400 to 500 m', '15,253', '11.1 m'],
          ['750 m to 1 km', '52,570', '17.3 m'],
          ['1 to 1.5 km', '116,428', '22.4 m'],
          ['1.5 to 2 km', '123,439', '26.8 m'],
          ['2.5 to 3 km', '90,623', '24.0 m']
        ] },
        { kind: 'p', text: 'Across all pairs, whatever their distance, the average difference is 22.3 m. Neighbours under 100 m apart differ by only 2.0 m, a tenth of that. The difference climbs steadily with distance and reaches the all-pairs level at a little over 1 km. Statisticians plot half the average squared difference, called the semivariance, against distance; that plot is the variogram. Here the semivariance is 3.5 for the closest band and first passes the overall variance of the heights, 377.9, between 1.3 and 1.4 km. That distance is the range: beyond it, knowing the height of one place tells you nothing useful about the other. Past 2 km the figure drifts down again, which reflects the particular shape of these hills and the edges of the area, and is a reminder not to over-read the far end of the plot.' },
        { kind: 'p', text: 'Why does this matter for AI? The learner builds the simplest possible predictor: guess a point\'s height from the nearest point whose height is known. Tested the usual way, by hiding a random fifth of the points, it looks superb, with an average error of 2.16 m. But the hidden points had known neighbours just 70 m away on average. Tested honestly, by hiding a whole 1 km grid square at a time so the nearest known point is further off, the error is 6.23 m, nearly three times worse. Guessing the mean height every time scores 16.47 m. The model did not change between the two tests; only the test did. One caution about the data: points closer together than 25 m can fall in the same cell of the height model, which makes the very shortest band look a little smoother than the ground is.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Mark heights on a paper map and compare next-door houses with houses across town.' },
          { h3: 'Ages 11 to 15', p: 'Loop over pairs of points in Python, bin them by distance and chart the average difference.' },
          { h3: 'Ages 15 and up', p: 'Compute the semivariance, read off the range, and compare a random test split with a block split.' }
        ] },
        { kind: 'callout', h3: 'Data and licences', p: 'Contains OS data (C) Crown copyright and database right 2026 (Code-Point Open, Open Government Licence). Heights are from the EU-DEM model, served by OpenTopoData, read 30 September 2026. Distance bands, averages and the two tests are our own calculations. A postcode point is a position for a group of addresses, so these are heights at postcode points and no survey of any property.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Dependence and AI',
      h2: 'What nearby data teaches about AI, vibe coding and agents',
      intro: 'A thousand measurements are not always a thousand separate pieces of evidence.',
      body: [
        { kind: 'table', caption: 'From the Yeovil heights to machine learning', head: ['Measured in Yeovil', 'What to carry into AI work'], rows: [
          ['Neighbours differed by 2.0 m, all pairs by 22.3 m', 'Nearby data points repeat each other'],
          ['Likeness faded by about 1.3 km', 'Dependence has a reach you can measure'],
          ['A random test gave an error of 2.16 m', 'A test can leak answers through near-duplicates'],
          ['A block test gave 6.23 m', 'Test the way the model will really be used'],
          ['The same model got both scores', 'A score describes the test as much as the model']
        ] },
        { kind: 'p', text: 'The same leak appears well beyond maps. Frames from one video, readings taken seconds apart, several photos of the same object, paragraphs copied between web pages: if some land in the training set and their near-twins in the test set, the model is being marked on questions it has already seen. Vibe coding is the practice of asking an AI, in plain words, to write a program for you. Ask for "a model with a train and test split" and you will nearly always get a random split, because that is the common recipe. A learner who has drawn the Yeovil variogram knows when that recipe is wrong and what to ask for instead. An AI agent that evaluates its own work can be fooled in the same way unless someone designs its test. Agent building is a later step, for learners who can already write Python without a tutor at their shoulder (sixth formers and adults, for the most part), and we never teach Copilot Studio in a group. Related reading: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>.' },
        { kind: 'p', text: 'Ordnance Survey, OpenTopoData, the Office for National Statistics and postcodes.io are not connected with Modern Age Coders. We used their open data; the processing and the conclusions are ours alone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Steps',
    h2: 'Paper maps, then Python, then models',
    intro: 'Year group is our starting estimate. The free lesson tells us if it is right.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Measuring, comparing and sorting, with maps, grids and Scratch.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small tools made with an AI partner and checked by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Loops over real data, charts, and models tested properly, next to GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Data and AI', p: 'Python, statistics and machine learning for a degree, a job or a project.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'Testing AI fairly',
    h2: 'What is a variogram, and why does nearby data fool AI models?',
    intro: 'A variogram is a chart of how different two measurements tend to be as a function of the distance between them, and nearby data fools AI models because close points are near-copies of each other, so a model tested on the neighbours of its training points scores better than it deserves.',
    p1: 'Among 1,204 Yeovil postcode points, heights under 100 m apart differed by 2.0 m on average, against 22.3 m for all pairs, and the likeness ran out at about 1.3 km.',
    p2: 'A nearest-neighbour predictor scored an error of 2.16 m on a random test and 6.23 m when whole 1 km squares were held back.',
    closer: 'Knowing which of those numbers to believe is the sort of judgement that coding builds, and Yeovil teenagers will need it around AI in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'In practice',
    h2: 'Lessons for Yeovil, step by step',
    intro: 'All lessons are video calls. A learner needs a computer, a camera and a reasonably calm place to work.',
    cells: [
      { h3: 'Learner-led typing', p: 'The learner shares a screen and writes the code. The tutor steers by asking questions.' },
      { h3: 'Free first session', p: 'It is a real lesson, and we use it to work out which course fits.' },
      { h3: 'Book without paying', p: 'No card or deposit is needed for the trial.' },
      { h3: 'Small matched groups', p: 'Five to ten learners at one level, joining from across the country.' },
      { h3: 'Twice each week', p: 'In school terms, with Somerset holiday weeks skipped when you send the dates.' },
      { h3: 'Your time stays fixed', p: 'Tutors move their own schedule at the clock change so yours is untouched.' }
    ],
    spec: { title: 'Why it is online', p: 'Screen sharing lets the tutor follow each step as it happens, and a national intake means a class can be formed at exactly one level.' }
  },

  fees: {
    h2: 'Fees for Yeovil',
    intro: 'The international fee below is what all learners outside India pay.',
    first: 'Free first lesson, full length, ending in a course suggestion.',
    group: 'Small group, five to ten learners, close to eight lessons monthly.',
    private: 'Your own tutor, close to eight lessons monthly.',
    closer: 'We price in US dollars and publish no figure in sterling. Charging starts after the trial, when you have picked a course and a regular time. The pricing page explains holiday breaks, missed lessons and changing between formats.'
  },

  reviewsH2: 'Somerset parents and UK learners, in their Google reviews',

  book: {
    h2: 'Get a free Yeovil lesson',
    intro: 'Share the learner\'s age or school year and a thing they are curious about. The trial might be a height puzzle on a map, a Scratch game with AI help, a first Python loop, or a small chart from real data.',
    success: 'Thanks. Your Yeovil request has been received.'
  },

  faq: {
    h2: 'Yeovil questions',
    intro: 'The heights project, fair testing, courses, vibe coding and the everyday details.',
    items: [
      { q: 'How many people live in Yeovil?', a: 'The ONS recorded 50,170 usual residents in the Yeovil built-up area at the 2021 census.' },
      { q: 'Can my child take coding and AI classes from Yeovil?', a: 'Yes. Classes are live online for ages 6 to 67, so Yeovil, Preston Plucknett, Yeovil Marsh, Mudford and West Coker are all covered.' },
      { q: 'What is a variogram?', a: 'A variogram is a plot of how much two measurements differ, on average, against how far apart they were taken. It shows the distance over which places stay alike.' },
      { q: 'What is spatial autocorrelation?', a: 'It is the tendency of measurements taken close together to be more similar than measurements taken far apart.' },
      { q: 'What did the Yeovil project find?', a: 'Postcode points under 100 m apart differed in height by 2.0 m on average, all pairs by 22.3 m, and a model\'s error rose from 2.16 m to 6.23 m when it was tested on whole blocks.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, from primary age. Learners describe a program to an AI, then read, test and repair what it produces.' },
      { q: 'When are AI agents taught?', a: 'Later on, when a learner writes Python unaided, which mostly means sixth form or adulthood. Copilot Studio is private-lesson material.' },
      { q: 'Is it relevant to GCSE and A level?', a: 'Programming, data handling and statistics are all part of those courses. We teach understanding and promise no grades.' },
      { q: 'How much do classes cost?', a: 'Nothing for the trial. Afterwards it is USD 100 monthly for a group seat or USD 150 monthly for private tuition.' },
      { q: 'Are there lessons in school holidays?', a: 'Only if you want them. Send dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Further reading',
    h2: 'More from Somerset',
    html: 'Different towns, different problems: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-taunton">Taunton</a> (ants finding a route), <a class="cg-inline-link" href="/online-coding-and-python-classes-in-weston-super-mare">Weston-super-Mare</a> (cutting ages into bands) and <a class="cg-inline-link" href="/best-coding-class-in-bath">Bath</a>. See also the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Yeovil and Somerset',
  footerPlaces: [
    { href: '/coding-classes-in-somerset', label: 'Somerset' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-yvl .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.1vw, 2.75rem); }
.cg-root.cg-yvl .cg-hero h1 { font-weight: 770; letter-spacing: -0.031em; line-height: 1.05; }
.cg-root.cg-yvl .cg-capsule { border-left: 8px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-yvl .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.83rem; }
.cg-root.cg-yvl .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.025em; }
.cg-root.cg-yvl .cg-table caption { font-weight: 600; text-align: left; font-size: 0.88rem; }
.cg-root.cg-yvl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-yvl .cg-table th { font-weight: 700; border-bottom: 3px solid var(--cg-accent); }
.cg-root.cg-yvl .cg-ladder-col { border-top: 6px solid var(--cg-accent); padding-top: 0.65rem; }
.cg-root.cg-yvl .cg-callout { border-radius: 6px; border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Somerset Council area (Code-Point lists Yeovil postcodes under E06000066); at Census 2021 the district was South Somerset (E07000189), TS001 usual residents 172,671. ONS 2021 BUA (published): Yeovil 50,170. English national curriculum, GCSE and A level. postcodes.io (Somerset): Preston Plucknett (suburban area, BA20), Yeovil Marsh, Mudford (villages, BA21), West Coker (village, BA22).',
    localProject: 'OS Code-Point Open 2026.3.0: BA20 (489) and BA21 (773) postcodes, 1,262 units at 1,204 distinct points; heights from OpenTopoData eudem25m (EU-DEM 25 m). Heights 22.4 to 111.5 m, mean 65.7, variance 377.9. 724,206 pairs. Mean absolute height difference by separation: under 100 m 2.0 m (2,254 pairs); 100 to 200 m 4.4; 200 to 300 m 7.0; 400 to 500 m 11.1; 750 m to 1 km 17.3; 1 to 1.5 km 22.4; 1.5 to 2 km 26.8; 2.5 to 3 km 24.0; all pairs 22.3. Semivariance 3.5 in the first band, passes the variance between 1.3 and 1.4 km. Nearest-known-point predictor: random 20% hold-out error 2.16 m (neighbour 70 m away); leave-one-1-km-square-out 6.23 m (238 m away, 33 squares); mean guess 16.47 m. Lesson family: variogram, semivariance, range, spatial dependence, random vs block test split.',
    requiredMentions: [
      '50,170',
      '172,671',
      'Preston Plucknett',
      'Yeovil Marsh',
      'Mudford',
      'West Coker',
      'variogram',
      'semivariance',
      '1,204',
      '724,206'
    ],
    sources: [
      { claim: 'OS Code-Point Open 2026.3.0, postcode unit positions for BA20 and BA21 (Open Government Licence).', url: 'https://www.ordnancesurvey.co.uk/products/code-point-open' },
      { claim: 'OpenTopoData public API, dataset eudem25m (EU-DEM 25 m elevation model).', url: 'https://www.opentopodata.org/datasets/eudem/' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: Yeovil and the named places in Somerset.', url: 'https://api.postcodes.io/places?q=Yeovil' }
    ],
    rejectedClaims: [
      'Heights of named hills, streets or buildings in Yeovil: none given; only summary figures for postcode points.',
      'That Yeovil is hillier than another town: not compared, not claimed.',
      'Flooding, drainage or property matters: nothing of the kind is inferred from the heights.',
      'A fitted variogram model (sill, nugget) with confidence limits: not fitted; the range is read from 100 m bands.',
      'That the listed villages lie close to the town centre: not claimed; they are listed as recorded by postcodes.io.',
      'Yeovilton weather data (used on the regional page) and sterling prices: not used.'
    ]
  }
};
