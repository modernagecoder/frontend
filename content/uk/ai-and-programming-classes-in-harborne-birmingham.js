'use strict';
// Harborne, Birmingham (cg- district page, UK cluster Phase 9, row 452). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can a model discover the hidden groups in a pile
// of numbers, and are the groups it finds the ones you expected? (Gaussian mixture models fitted by
// expectation-maximisation; BIC for the number of components; local optima; soft membership; clusters are not categories).
// Data (read 30 September 2026): OpenStreetMap API 0.6 over bbox -1.975,52.420,-1.870,52.480 (24 tiles, ODbL); building
// footprints whose centre lies inside the ONS Harborne ward boundary (Wards December 2022, E05011144, 5.09 sq km): 4,422
// footprints of at least 2 square metres, median area 101.2 square metres. Tags: 2,405 residential, 1,813 "yes", 88 retail,
// 68 garage or garages, others.
// Our run (scratchpad g3/hbn5.py): scikit-learn GaussianMixture on log10 area. BIC by number of components (lower is
// better): 1 1,888.2; 2 1,561.3; 3 1,500.0; 4 1,515.4; 5 1,511.9. Three components, typical area and share: 48.6 sq m
// (7.7%, very narrow), 102.4 sq m (78.1%), 207.9 sq m (14.1%, wide). 30 of 30 runs started from random data points reached
// this answer (192 to 1,345 EM steps, log-likelihood -716.4); the library's default start stopped after 11 steps at a worse
// answer (58.9 / 124.2 / 206.1 sq m, log-likelihood -741.4). Of 68 tagged garages and sheds, 66 fell in the middle
// component. 292 footprints measure 45 to 52 sq m (175 tagged residential). 31.5% of footprints have a top membership
// probability below 0.8.
// Lesson family: Gaussian mixture models and the EM algorithm. Screened: "Gaussian mixture", "expectation-maximisation"
// appear only in course and resource files; claimed in claims.txt. Runcorn owns DBSCAN, Cannock hierarchical clustering,
// Chiswick (Phase 9) Box-Cox transforms of footprint areas, West End Glasgow Otsu thresholds; Kirkcaldy boosting on shapes.
// Place facts: Census 2021 TS001, Harborne ward 23,002 (Nomis). postcodes.io (Birmingham): Harborne (B17), Edgbaston (B15),
// Weoley Castle and California (B29).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HARBORNE', label: 'Harborne, Birmingham', blurb: 'AI and programming classes for Harborne, with a machine learning project that lets a mixture model find hidden groups in 4,422 building footprints.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-harborne-birmingham',
  code: 'hbn',
  accent: '#7A1F2E',
  accentRationale: 'Harborne: a dark wine red (10.18:1 contrast), hand-picked to differ in hue from recent pages',
  pageType: 'city',
  place: {
    name: 'Harborne',
    eyebrow: 'Harborne, Birmingham, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'Birmingham', href: '/coding-classes-in-birmingham' },
    { label: 'Edgbaston', href: '/online-coding-and-python-classes-in-edgbaston-birmingham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Harborne, Birmingham',
  title: 'AI and Programming Classes in Harborne, Birmingham | 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Harborne, Edgbaston, Weoley Castle and B17 learners aged 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Harborne, Birmingham, with a Gaussian mixture project that finds hidden groups in the sizes of 4,422 mapped buildings.',
  twitterDescription: 'Harborne AI, programming, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Harborne, Birmingham',
    description: 'Online AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Harborne and west Birmingham, taught live with reasoning first.'
  },

  h1: 'AI and programming classes in Harborne, Birmingham',
  capsuleQ: 'Which are the best AI and programming classes in Harborne?',
  capsule: 'The 2021 census recorded 23,002 usual residents in Birmingham\'s Harborne ward. Postcodes.io records Harborne in the B17 postcode district, with Edgbaston in B15 and Weoley Castle in B29. From age six right up to 67, AI, programming, Python, vibe coding and maths are taught here on video calls by tutors working in India, to a single learner or to a class of five to ten at matching level. We teach the reasoning behind a method before the tool that runs it, so learners can tell what a model has actually found. The opening lesson is free and ends with a recommended course. The Harborne project hands a mixture model the floor areas of 4,422 mapped buildings and asks it to discover the groups hidden inside them, with a result nobody predicted. Tuition after that runs to USD 100 each month in a class, or USD 150 each month for a tutor of your own.',
  lead: 'Measure the floor area of every building in a neighbourhood and you get one long, lumpy list. You might guess it is really several lists mixed together: houses, garages, shops, big blocks. A Gaussian mixture model turns that guess into a calculation. It assumes the data is a blend of a few bell curves and works out where each curve sits, how wide it is and how much of the data belongs to it. The fitting method, called expectation-maximisation, alternates between two steps: guess which curve each building belongs to, then move the curves to fit their buildings better. This project runs it on Harborne\'s buildings as drawn on OpenStreetMap.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Harborne?',

  picks: {
    eyebrow: 'Harborne course picks',
    h2: 'Harborne courses in reasoning, Python and AI',
    intro: 'Ages run down the left. Whatever the course, its first live lesson is on the house and no card is involved.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: sorting a mixed pile into groups and defending where the lines go.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games the learner designs and an AI helps to write, tested until they work.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including the Harborne mixture model.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the beginning through statistics, clustering and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Harborne',
      h2: 'Harborne ward and the B17 district',
      intro: 'The Census 2021 count for Harborne ward, and places recorded around it.',
      body: [
        { kind: 'table', caption: 'Harborne ward, Birmingham, Census 2021 via Nomis', head: ['Area', 'Residents (2021)'], rows: [
          ['Harborne ward', '23,002']
        ] },
        { kind: 'p', text: 'The ward boundary we use for the project is the ONS one, which covers 5.09 square kilometres. Postcodes.io lists Harborne as a suburban area of Birmingham in B17, Edgbaston in B15, and Weoley Castle and California in B29. Schools in Birmingham teach England\'s national curriculum, so with the holiday dates in hand we keep lessons out of those weeks.' },
        { kind: 'callout', h3: 'Birmingham, Edgbaston and our approach', p: 'See <a class="cg-inline-link" href="/coding-classes-in-birmingham">coding classes in Birmingham</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-edgbaston-birmingham">Edgbaston</a>. Why thinking comes before tools is argued on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Harborne project',
      h2: 'A Gaussian mixture model of Harborne\'s buildings, fitted by expectation-maximisation',
      intro: 'One measurement per building, a choice of how many groups, and a lesson in what a cluster is.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data for south-west Birmingham and keeps the building outlines whose centre falls inside Harborne ward: 4,422 of them, with a median floor area of 101.2 square metres. Because areas range from a few square metres to thousands, the model works with the logarithm of the area. It is fitted with one, two, three, four and five components, and each fit is scored with the Bayesian information criterion, which rewards a close fit and penalises extra components.' },
        { kind: 'table', caption: 'Mixture models of log building area in Harborne ward, our Python run on OpenStreetMap data (lower BIC is better)', head: ['Components', 'BIC', 'What the model found'], rows: [
          ['1', '1,888.2', 'One broad curve'],
          ['2', '1,561.3', 'Typical and large'],
          ['3', '1,500.0', 'Narrow 48.6 sq m, main 102.4 sq m, wide 207.9 sq m'],
          ['4', '1,515.4', 'No improvement'],
          ['5', '1,511.9', 'No improvement']
        ] },
        { kind: 'p', text: 'Three components score lowest. The obvious guess is that they are garages, houses and big buildings. They are not. Of the 68 outlines tagged as garages or sheds, 66 sit in the middle component alongside the houses, because in this data the mapped garage blocks are of similar size to the houses. The small component is something else: a very narrow spike around 48.6 square metres holding 7.7% of the buildings. Looking at the data, 292 outlines measure between 45 and 52 square metres and most are tagged residential, which suggests rows of near-identical small footprints. The model found real structure, but not the structure a person would have named in advance.' },
        { kind: 'p', text: 'Two more cautions came out of the fitting. The starting point matters: all 30 runs started from randomly chosen buildings reached the same answer after between 192 and 1,345 steps, but the library\'s default start stopped after 11 steps at a noticeably worse one, with no warning. And membership is soft: for 31.5% of buildings the model\'s most likely component has a probability under 0.8, so drawing hard lines between the groups would overstate what it knows.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort a mixed bag of buttons by size into piles, then argue about the ones in between.' },
          { h3: 'Ages 11 to 15', p: 'Draw a histogram of Harborne building areas in Python and look for bumps.' },
          { h3: 'Ages 15 and up', p: 'Fit mixtures with one to five components, compare BIC, and test different starting points.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap outlines, our model', p: 'Building outlines and tags are from OpenStreetMap and its contributors under the Open Database Licence; the ward boundary is from the ONS Open Geography Portal. Areas are outlines on a map, not measured floor space, and the mixture model and its reading are ours.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Clusters and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Ask for groups and you will get groups; what they mean is still your call.',
      body: [
        { kind: 'table', caption: 'Harborne footprints on the left, everyday AI clustering on the right', head: ['What the mixture model did', 'The general lesson'], rows: [
          ['BIC chose three components', 'Let a criterion, not a hunch, set the number'],
          ['66 of 68 garages sat with the houses', 'Clusters need not match your categories'],
          ['A narrow spike held 7.7%', 'Look at the data behind each group'],
          ['The default start gave a worse fit', 'Rerun from several starting points'],
          ['31.5% had uncertain membership', 'Keep the probabilities, not just the labels']
        ] },
        { kind: 'p', text: 'Give an AI assistant a column of numbers and ask for "the segments" and it will return tidy groups with confident names, typically from a single run. In vibe coding, where the learner describes the analysis and an AI writes it, our Harborne learners ask for several starting points, a score for each number of groups, and a look inside every cluster before accepting a label. Agents that segment customers or sort records automatically deserve the same checks. Our agent units are reserved for learners already fluent in Python, which mostly means sixth form upward, and Copilot Studio is taught privately and nowhere else. Start with <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>; the agent syllabus for British students is <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">set out here</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the ONS, Nomis and postcodes.io supplied open data and nothing more; they are not connected with us, and any error in the model is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From button piles to mixture models',
    intro: 'The school year suggests a level; the trial lesson settles it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Grouping, borderline cases and explaining a choice.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Histograms, distributions and clustering next to GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Machine learning and agents', p: 'Statistics, unsupervised learning and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and clustering',
    h2: 'What is a Gaussian mixture model, and how does the EM algorithm fit one?',
    intro: 'A Gaussian mixture model describes data as a blend of several bell curves, and the expectation-maximisation algorithm fits it by repeatedly estimating which curve each point belongs to and then adjusting the curves to match.',
    p1: 'On the floor areas of 4,422 buildings in Harborne ward, the criterion BIC chose three components, yet 66 of 68 tagged garages fell in the same component as the houses, and the library\'s default starting point produced a worse fit than 30 random starts.',
    p2: 'Learners who have fitted that model ask of any AI clustering: how many starts, how was the number of groups chosen, and what is really inside each one?',
    closer: 'Opening up each cluster before naming it is what keeps Harborne teenagers ahead of an AI\'s confident labels, and it is a habit learned by coding the model themselves.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Harborne lessons over live video',
    intro: 'A computer with a camera and a connection fit for video calls covers everything.',
    cells: [
      { h3: 'Hands stay on the keyboard', p: 'Pupils produce every line themselves. Our tutor sees it live and keeps asking what the numbers mean.' },
      { h3: 'Pitched from lesson one', p: 'The free trial reveals the level, and exam boards are noted if one applies.' },
      { h3: 'Free to try', p: 'The first lesson carries no fee and finishes with a course suggestion.' },
      { h3: 'Level-matched classes', p: 'Groups of five to ten from across the UK, all at one stage.' },
      { h3: 'Two sessions weekly', p: 'None during school holidays.' },
      { h3: 'Fixed time', p: 'We absorb the UK clock changes so your slot holds.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level with one free evening in common rarely share a neighbourhood. Online classes draw on the whole country.' }
  },

  fees: {
    h2: 'Harborne fees',
    intro: 'Harborne learners pay the international rate that applies outside India.',
    first: 'A free full lesson and then our recommendation.',
    group: 'About eight live class lessons per month.',
    private: 'About eight live one-to-one lessons per month.',
    closer: 'All prices are in US dollars; we do not quote sterling. You are billed from the point the trial has pinned down both course and timetable; for holiday weeks, absences or a move between class and solo tuition, the pricing page has the rules.'
  },

  reviewsH2: 'Birmingham households and learners further afield, in their own Google reviews',

  book: {
    h2: 'Book a free Harborne lesson',
    intro: 'All we need is an age or a school year and a favourite pastime. The trial may be a sorting challenge with real objects, a Scratch game made with an AI helper, a first Python script, or a histogram of real building sizes.',
    success: 'Thank you. Your Harborne request is in.'
  },

  faq: {
    h2: 'Harborne questions',
    intro: 'Bell curves, building sizes, vibe coding and how the lessons are run.',
    items: [
      { q: 'How many people live in Harborne?', a: 'Harborne ward in Birmingham had 23,002 usual residents at the 2021 census.' },
      { q: 'Are AI and programming classes available online in Harborne?', a: 'They are. We teach by live video, so B17 and the rest of Birmingham are covered for anyone aged 6 to 67.' },
      { q: 'What is the difference between k-means and a Gaussian mixture model?', a: 'K-means gives every point to exactly one cluster of roughly equal width. A Gaussian mixture gives each point a probability for every cluster and lets clusters have different widths.' },
      { q: 'What is BIC?', a: 'The Bayesian information criterion, a score that balances how well a model fits against how many parameters it uses. The lowest BIC is preferred; for Harborne that was three components.' },
      { q: 'What does the Harborne project involve?', a: 'Fitting Gaussian mixtures to the areas of 4,422 mapped buildings, choosing the number of components with BIC, and checking what each component really contains.' },
      { q: 'Where does vibe coding fit?', a: 'In every course: the learner specifies, an AI drafts, and the learner tests and repairs.' },
      { q: 'How soon do agents come into it?', a: 'Fluent Python comes first, so in practice sixth formers and adults; Copilot Studio is a private-lesson topic.' },
      { q: 'What about exam classes?', a: 'We tutor GCSE and A level computer science and maths with understanding as the target; nobody here will promise a grade.' },
      { q: 'What do lessons cost?', a: 'The trial is free of charge; regular tuition is USD 100 a month (class) or USD 150 a month (one-to-one).' },
      { q: 'Are lessons held in school holidays?', a: 'No; give us the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Birmingham pages',
    html: 'Each of these teaches something different: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-edgbaston-birmingham">Edgbaston</a> (finding near-duplicate names), <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-moseley-birmingham">Moseley</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-sutton-coldfield-birmingham">Sutton Coldfield</a> and <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a>. Other areas are on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Harborne and Birmingham',
  footerPlaces: [
    { href: '/coding-classes-in-birmingham', label: 'Birmingham' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hbn .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-hbn .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-hbn .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-hbn .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hbn .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.02em; }
.cg-root.cg-hbn .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-hbn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hbn .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-hbn .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-hbn .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Birmingham (E08000025). Census 2021 TS001, Harborne ward 23,002 (Nomis). ONS Wards (December 2022) boundary E05011144, 5.09 sq km by our calculation. postcodes.io (Birmingham): Harborne (B17), Edgbaston (B15), Weoley Castle and California (B29).',
    localProject: 'OSM buildings with centre in Harborne ward: 4,422 footprints, median 101.2 sq m. GMM on log10 area: BIC 1,888.2 / 1,561.3 / 1,500.0 / 1,515.4 / 1,511.9 for 1 to 5 components. k=3: 48.6 sq m (7.7%), 102.4 (78.1%), 207.9 (14.1%). 30/30 random-data starts agree (192 to 1,345 steps, loglik -716.4); default start -741.4 after 11 steps. 66 of 68 garages/sheds in the middle component; 292 footprints of 45 to 52 sq m; 31.5% top posterior < 0.8. Lesson family: Gaussian mixture, EM, BIC, local optima.',
    requiredMentions: [
      '23,002',
      '4,422',
      'Weoley Castle',
      'Gaussian mixture',
      'expectation-maximisation',
      '101.2 square metres',
      '1,500.0',
      'B17',
      'Bayesian information criterion'
    ],
    sources: [
      { claim: 'OpenStreetMap building outlines in Harborne, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 by ward via Nomis; ONS Wards (December 2022) boundaries, Open Geography Portal.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas in Birmingham (B17, B15, B29).', url: 'https://api.postcodes.io/places?q=Harborne' }
    ],
    rejectedClaims: [
      'What the 48.6 sq m spike physically is: described only as many near-identical small footprints, mostly tagged residential.',
      'Floor space or property values: outlines only; no such claim.',
      'High street, clock tower or local history: not read from a source; not claimed.',
      'That scikit-learn is faulty: the default start is simply one local optimum; stated as such.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
