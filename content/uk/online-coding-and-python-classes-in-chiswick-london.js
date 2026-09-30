'use strict';
// Chiswick, Hounslow (cg- district page, UK cluster Phase 9, row 447). Keyword slug per the owner's 2026-09-30 decision
// (rotation with city suffix), with the vibe coding / AI agents / how-to-think picks, FAQ and door links.
// Spine: what do you do with data so lopsided that the average and the usual "two standard deviations" rule stop making
// sense? (skewness, log and Box-Cox transforms, the geometric mean, and what a transform does to outlier rules).
// Data (read 30 September 2026): OpenStreetMap API 0.6, bounding box -0.285,51.482,-0.245,51.500 fetched as four tiles.
// We kept closed ways tagged building=* with a footprint of at least 5 square metres and a centre inside the box: 3,109
// footprints (building=house 1,339; building=yes 1,326; building=apartments 108; others the rest). Area by the shoelace
// formula on a local metre projection.
// Our run (scratchpad csk/csk.py): smallest 5.0 m2, largest 21,588 m2; mean 212.6, median 95.3, standard deviation 649.8;
// skewness 18.09; 82.6% of footprints are smaller than the mean; the largest 1% hold 22.6% of all footprint area.
// Percentiles 10/25/50/75/90/99: 48.3, 60.5, 95.3, 164.5, 350.2, 2,490.8. Mean minus two standard deviations = -1,086.9 m2.
// Skewness after a transform: square root 5.13; log 1.08 (geometric mean 110.2 m2); power -0.5: -1.55; reciprocal: -5.51.
// Box-Cox lambda chosen by maximum likelihood: -0.246, skewness -0.119. Beyond three standard deviations: raw 36, all
// large; after Box-Cox 38, of which 6 large and 32 small. Within two standard deviations: raw 98.3%, after Box-Cox 93.9%.
// Lesson family: power transforms for skewed data (Box-Cox, log, geometric mean). Screened 30 September 2026: "Box-Cox" 0
// hits; claimed in claims.txt as csk. Hayes owns robust averages (median, trimmed mean, breakdown point), a different
// tool for the same lopsidedness; Hounslow borough page = error budget, not reused.
// Place facts: Census 2021 usual residents by 2022 ward, per ward, never summed: Chiswick Gunnersbury 12,697; Chiswick
// Homefields 13,740; Chiswick Riverside 10,301. postcodes.io (Hounslow): Chiswick, Grove Park, Gunnersbury and Strand on
// the Green (all W4), Brentford (TW8).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CHISWICK', label: 'Chiswick', blurb: 'Online coding and Python classes for Chiswick, with a project that measures 3,109 mapped building footprints and finds a scale on which such lopsided numbers behave.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-chiswick-london',
  code: 'csk',
  accent: '#5B4BB0',
  accentRationale: 'Chiswick: a wisteria violet (6.4:1 contrast), chosen by hand and unused elsewhere in the cluster',
  pageType: 'city',
  place: {
    name: 'Chiswick',
    eyebrow: 'Chiswick, Hounslow, London',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'Hounslow', href: '/coding-classes-in-hounslow-london' },
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Chiswick, London',
  title: 'Online Coding and Python Classes in Chiswick | Ages 6 to 67',
  description: 'Live online coding, Python, AI and maths lessons for learners aged 6 to 67 in Chiswick, Grove Park, Gunnersbury and Strand on the Green. First lesson free.',
  ogDescription: 'Online coding and Python classes for Chiswick, with a project on 3,109 mapped building footprints and the Box-Cox transform that tames their skew.',
  twitterDescription: 'Chiswick coding, Python, AI and maths classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Chiswick',
    description: 'Online coding, Python, AI and maths for children, teenagers and adults in Chiswick and the borough of Hounslow, taught live with the shape of the data examined before any model is fitted.'
  },

  h1: 'Online coding and Python classes in Chiswick',
  capsuleQ: 'Which are the best online coding and Python classes for Chiswick learners?',
  capsule: 'Chiswick gives its name to three wards of the London Borough of Hounslow: Chiswick Gunnersbury, with 12,697 residents at the 2021 census, Chiswick Homefields with 13,740 and Chiswick Riverside with 10,301. Grove Park, Gunnersbury and Strand on the Green are recorded in the same W4 postcode district. A Chiswick learner of any age from six to 67 studies coding, Python, AI, vibe coding and maths with us over live video; the tutor is in India, and the lesson is either private or shared with five to ten others at the same stage. We ask learners to look at the shape of their data before they calculate anything. The opening Chiswick lesson is free and finishes with a suggested course. Our Chiswick project measures 3,109 building footprints from OpenStreetMap, finds them far too lopsided for ordinary statistics, and uses a Box-Cox transform to put them on a scale that works. Continuing costs USD 100 a month in a class, or USD 150 a month one-to-one.',
  lead: 'Most school statistics quietly assume a bell curve: values pile up in the middle and thin out evenly on both sides. Sizes of things rarely oblige. A few huge items and a great many small ones give a long right tail, measured by a number called skewness, and on such data the mean sits where almost nothing is and "two standard deviations below the mean" can be a negative area. The fix is old and elegant: change the scale. Take logarithms, or let the Box-Cox method choose the power that straightens the data, and do the statistics there. This project does it to every mapped building in a rectangle around Chiswick.',
  wa: 'Hello Modern Age Coders, please could we arrange a free online coding or Python lesson for a learner in Chiswick?',

  picks: {
    eyebrow: 'Chiswick course picks',
    h2: 'Coding and Python courses for Chiswick, by age',
    intro: 'Find the row that matches the Chiswick learner. Every one of these starts with a live lesson that costs nothing and asks for no card.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 11', note: 'First programs in Scratch: loops, decisions and sprites that sort big things from small.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'A gentle start in Python, with lists of real measurements to plot and question.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python written properly, up to reading map data and drawing its histogram.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'From nothing to data analysis, including transforms and when to use them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Chiswick and Hounslow',
      h2: 'Chiswick Homefields, Chiswick Riverside and Chiswick Gunnersbury',
      intro: 'What the 2021 census recorded for the three Chiswick wards, and the W4 place names around them.',
      body: [
        { kind: 'table', caption: 'The three Chiswick wards of Hounslow at the 2021 census (ONS, via Nomis; 2022 wards)', head: ['Ward', 'Residents (2021)'], rows: [
          ['Chiswick Gunnersbury', '12,697'],
          ['Chiswick Homefields', '13,740'],
          ['Chiswick Riverside', '10,301']
        ] },
        { kind: 'p', text: 'Each figure stands alone as the ONS published it. We have not added them into a "Chiswick population", since no official boundary by that name exists to add them for. Postcodes.io records Chiswick, Grove Park, Gunnersbury and Strand on the Green as W4 places in Hounslow, and Brentford in TW8. Hounslow schools teach the national curriculum for England, and a Chiswick family only has to share term dates for lessons to sit clear of every break.' },
        { kind: 'callout', h3: 'Hounslow, London and the way we teach', p: 'The borough is covered on <a class="cg-inline-link" href="/coding-classes-in-hounslow-london">coding classes in Hounslow</a> and the capital on the <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a>. Our reasons for teaching thinking first are set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Chiswick project',
      h2: 'A Box-Cox transform for 3,109 building footprints',
      intro: 'Measure every mapped building, see why the usual statistics fail, then find the scale on which they work.',
      body: [
        { kind: 'p', text: 'We downloaded OpenStreetMap data for a rectangle around Chiswick and kept every closed building outline of at least five square metres: 3,109 of them. Python turns each outline into an area with the shoelace formula. The smallest is a 5.0 square metre outbuilding and the largest covers 21,588 square metres. The mean footprint is 212.6 square metres, but the median is only 95.3, and 82.6% of buildings are smaller than the mean. The largest 1% hold 22.6% of all the footprint area. The skewness is 18.09, where a symmetric bell curve would score zero.' },
        { kind: 'p', text: 'Ordinary rules collapse on numbers like these. The standard deviation is 649.8 square metres, so "the mean minus two standard deviations" is minus 1,086.9 square metres, an area no building can have. The familiar outlier rule, anything more than three standard deviations from the mean, flags 36 buildings, every one of them large; it can never flag a small one, because there is no room below.' },
        { kind: 'table', caption: 'The same 3,109 footprints on different scales, our Python run on OpenStreetMap data', head: ['Scale', 'Skewness', 'Verdict'], rows: [
          ['Raw area', '18.09', 'Hopelessly lopsided'],
          ['Square root', '5.13', 'Better, still a long tail'],
          ['Logarithm', '1.08', 'Nearly there'],
          ['Box-Cox, power -0.246', '-0.119', 'Close to symmetric'],
          ['Power -0.5', '-1.55', 'Overshot: tail now on the left'],
          ['Reciprocal (power -1)', '-5.51', 'Badly overshot']
        ] },
        { kind: 'p', text: 'Box-Cox treats the power as a dial and picks the setting under which the data look most like a bell curve. Here it chooses minus 0.246, a little stronger than a logarithm, and the skewness falls to minus 0.119. On the log scale the natural average is the geometric mean, 110.2 square metres, which sits close to the median and describes a typical Chiswick building far better than 212.6 does. The transform is no magic wand, though. On the new scale the three-deviation rule flags 38 buildings, 6 large and 32 small, so sheds and garages become visible as the oddities they are; and only 93.9% of buildings lie within two deviations, against the 95% a true bell curve would give. The tails are still heavier than the textbook shape, and an honest report says so.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort paper rectangles by size and see why "the average one" looks like none of them.' },
          { h3: 'Ages 11 to 15', p: 'Compute footprint areas in Python and plot them on an ordinary and a log axis.' },
          { h3: 'Ages 15 and up', p: 'Code the Box-Cox search, compare skewness by power and rerun the outlier rule.' }
        ] },
        { kind: 'callout', h3: 'Whose map, whose measurements', p: 'The building outlines are from OpenStreetMap, © OpenStreetMap contributors, under the Open Database Licence, read on 30 September 2026. They are what volunteers have drawn, which is not a survey of every structure, and outlines may be merged or missing. The areas, statistics and transforms are our own calculations.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Python and AI',
      h2: 'What this teaches about Python and AI',
      intro: 'A model inherits every assumption of the scale its numbers arrive on.',
      body: [
        { kind: 'table', caption: 'From Chiswick footprints to work with AI', head: ['In the footprint project', 'When you use or build AI'], rows: [
          ['The mean was above 82.6% of buildings', 'An average can describe nobody'],
          ['Two deviations down was a negative area', 'Default formulas assume a bell curve'],
          ['A log scale brought skew to 1.08', 'Rescaling is ordinary preparation'],
          ['Power -0.5 overshot to -1.55', 'A stronger fix is not a better one'],
          ['32 small oddities appeared afterwards', 'The scale decides what counts as unusual']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to "summarise this column and list the outliers" and it will usually reach for the mean and the three-deviation rule without checking whether the data suit them. A Chiswick learner who has watched that rule miss every shed knows to look at the histogram first. It is the same habit we ask for in vibe coding, where the learner describes the program and an AI drafts it: the draft is a starting point, and the learner supplies the question the AI did not ask. Building AI agents waits until a learner writes Python unaided, usually at sixteen or older, and we teach Copilot Studio agents in one-to-one lessons only. Further reading: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for UK students</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the Office for National Statistics, Nomis and postcodes.io have no connection with Modern Age Coders and have not endorsed this page. We used their open data and nothing more.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From sorting shapes to statistics on the right scale',
    intro: 'A Chiswick school year gives us a first guess at the rung; the free lesson confirms it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Thinking and Scratch', p: 'Sorting, comparing and first programs built from blocks.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'First Python', p: 'Typed code, lists of measurements and simple charts.', courses: ['python-ai-kids-masterclass', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev'] },
      { band: 'Years 9 to 13', h3: 'Python and statistics', p: 'Files, functions, logarithms and distributions beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Data and AI', p: 'Analysis in Python, then machine learning on data prepared with care.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and statistics',
    h2: 'What is a Box-Cox transform, and when should you use one?',
    intro: 'A Box-Cox transform raises every value to a power chosen so that the data become as close to a bell curve as possible, with the logarithm as a special case; use one when positive data are strongly skewed and the method you want assumes symmetry.',
    p1: 'For 3,109 building footprints around Chiswick the raw skewness was 18.09; a logarithm cut it to 1.08 and the Box-Cox power of minus 0.246 to minus 0.119, while going further to minus 0.5 overshot to minus 1.55.',
    p2: 'Having turned that dial themselves, learners ask a sharper question of any AI-written analysis: what scale were these numbers on, and did anyone look at their shape?',
    closer: 'A Chiswick teenager who can write the transform in Python can also tell when an AI has skipped it, and that judgement is why the coding still matters.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Grove Park to Gunnersbury, taught live',
    intro: 'For a Chiswick lesson you need a laptop or desktop, a camera and broadband good enough for a video call.',
    cells: [
      { h3: 'Hands on the keys', p: 'The Chiswick learner writes each line. Our tutor sees the screen and keeps asking what the picture of the data shows.' },
      { h3: 'Level set at the trial', p: 'In the free lesson we gauge what is known, pick where to begin and ask about any exam board.' },
      { h3: 'No charge to try', p: 'The Chiswick trial is a whole lesson, and you leave with a named course.' },
      { h3: 'Classes sorted by stage', p: 'Between five and ten learners from anywhere in the UK, all working at one level.' },
      { h3: 'Twice-weekly rhythm', p: 'Two lessons a week, with school holidays left empty.' },
      { h3: 'The time does not drift', p: 'British clock changes are absorbed at the tutor\'s end.' }
    ],
    spec: { title: 'Why Chiswick lessons are online', p: 'Filling a room in W4 with five learners at one level on one free evening is unlikely. Draw them from the whole country by video and it becomes routine.' }
  },

  fees: {
    h2: 'Chiswick fees',
    intro: 'Chiswick learners pay our international rate, which is the same in every country other than India.',
    first: 'One complete lesson, free, with a course suggested at the end.',
    group: 'About eight live lessons a month in a class.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Chiswick prices are stated in US dollars and we publish no figure in pounds. Nothing is invoiced before the trial has settled the course and the weekly slot. Holidays, missed lessons and switching between a class and private teaching are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from Hounslow families and learners around the UK',

  book: {
    h2: 'Book a free Chiswick lesson',
    intro: 'Send an age or school year and something the learner enjoys. A Chiswick trial might then be a sorting puzzle, a Scratch animation, a first page of Python, or a histogram of real building sizes.',
    success: 'Thank you. We have your Chiswick request.'
  },

  faq: {
    h2: 'Chiswick questions',
    intro: 'Skewed data, the footprint project, Python, vibe coding and how a Chiswick lesson is run.',
    items: [
      { q: 'How many people live in the Chiswick wards?', a: 'At the 2021 census Chiswick Gunnersbury had 12,697 residents, Chiswick Homefields 13,740 and Chiswick Riverside 10,301. The ONS publishes them ward by ward.' },
      { q: 'Can a Chiswick learner take coding and Python classes online?', a: 'Yes. We teach ages 6 to 67 by live video in Chiswick, Grove Park, Gunnersbury, Strand on the Green and the rest of Hounslow.' },
      { q: 'What is skewness?', a: 'A measure of how lopsided a set of numbers is. Zero means symmetric; a large positive value means a long tail of big values. The Chiswick footprints score 18.09.' },
      { q: 'What is a geometric mean?', a: 'The average taken on a logarithmic scale and converted back. For the Chiswick footprints it is 110.2 square metres, close to the median of 95.3 and far below the ordinary mean of 212.6.' },
      { q: 'What is the Chiswick project?', a: 'Measuring 3,109 building footprints from OpenStreetMap in Python, showing why mean-based rules fail on them, and finding the Box-Cox power, minus 0.246, that makes them nearly symmetric.' },
      { q: 'Is vibe coding part of the lessons?', a: 'At every age. The learner explains what the program should do, an AI writes a draft, and the learner tests and corrects it.' },
      { q: 'At what point are AI agents taught?', a: 'When Python is secure without help, normally from sixteen upward. Copilot Studio agents are one-to-one only.' },
      { q: 'Is there support for GCSE and A level?', a: 'For computer science and maths, yes. We teach for understanding and make no promise about grades.' },
      { q: 'How much are Chiswick lessons?', a: 'The trial is free. After it, USD 100 a month for a class place or USD 150 a month for private lessons.' },
      { q: 'Do lessons continue through the holidays?', a: 'They stop for school holidays as soon as we have your dates.' }
    ]
  },

  next: {
    eyebrow: 'Read on',
    h2: 'More Hounslow and London pages',
    html: 'A different project on each: <a class="cg-inline-link" href="/coding-classes-in-hounslow-london">Hounslow</a> (an error budget), <a class="cg-inline-link" href="/coding-classes-in-ealing-london">Ealing</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-hayes-london">Hayes</a> (averages that survive a bad value) and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-twickenham-london">Twickenham</a> (an agent that updates its belief). For the whole capital see <a class="cg-inline-link" href="/best-coding-class-in-london">our London page</a>, and for every other UK page the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Chiswick and Hounslow',
  footerPlaces: [
    { href: '/coding-classes-in-hounslow-london', label: 'Hounslow' },
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-csk .cg-hero-grid { align-items: center; gap: clamp(1.4rem, 3.4vw, 3rem); }
.cg-root.cg-csk .cg-hero h1 { font-weight: 740; letter-spacing: -0.03em; line-height: 1.06; }
.cg-root.cg-csk .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-csk .cg-eyebrow { letter-spacing: 0.13em; font-weight: 600; text-transform: uppercase; font-size: 0.76rem; }
.cg-root.cg-csk .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.017em; }
.cg-root.cg-csk .cg-table caption { font-weight: 500; text-align: left; font-size: 0.93rem; padding-bottom: 0.45rem; }
.cg-root.cg-csk .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-csk .cg-table th { letter-spacing: 0.03em; font-weight: 650; font-size: 0.81rem; }
.cg-root.cg-csk .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-csk .cg-callout { border-left-width: 3px; border-radius: 10px; }
`,

  dossier: {
    curriculumAuthority: 'London Borough of Hounslow (E09000018). Census 2021 usual residents by 2022 ward (per ward, not summed): Chiswick Gunnersbury 12,697; Chiswick Homefields 13,740; Chiswick Riverside 10,301. postcodes.io (Hounslow): Chiswick, Grove Park, Gunnersbury, Strand on the Green (W4); Brentford (TW8).',
    localProject: 'OpenStreetMap API 0.6, bbox -0.285,51.482,-0.245,51.500, read 30 September 2026: 3,109 closed building footprints of at least 5 m2. Min 5.0, max 21,588 m2; mean 212.6, median 95.3, SD 649.8, skewness 18.09; 82.6% below the mean; top 1% hold 22.6% of area. Skew by scale: sqrt 5.13, log 1.08 (geometric mean 110.2), power -0.5 -1.55, reciprocal -5.51, Box-Cox lambda -0.246 -> -0.119. Mean minus 2 SD = -1,086.9. Beyond 3 SD: raw 36 (all large), Box-Cox 38 (6 large, 32 small). Within 2 SD: raw 98.3%, Box-Cox 93.9%. Lesson family: power transforms for skewed data.',
    requiredMentions: [
      '21,588',
      '12,697',
      '13,740',
      '10,301',
      'Chiswick Homefields',
      'Strand on the Green',
      'Grove Park',
      'Gunnersbury',
      'Box-Cox',
      'geometric mean'
    ],
    sources: [
      { claim: 'OpenStreetMap building outlines for the Chiswick bounding box, © OpenStreetMap contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 usual residents by ward (TS001), via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: Chiswick, Grove Park, Gunnersbury, Strand on the Green and Brentford.', url: 'https://api.postcodes.io/places?q=Chiswick' }
    ],
    rejectedClaims: [
      'A population for "Chiswick": no single official boundary; ward figures given separately, never summed.',
      'That the 3,109 outlines are every building in Chiswick: not claimed; they are what is mapped in our rectangle, which is not a ward boundary.',
      'Named buildings for the largest or smallest footprint: not identified from a source; not named.',
      'That Box-Cox makes the data normal: not claimed; only 93.9% fall within two deviations and the page says the tails stay heavy.',
      'Chiswick House, brewery or riverside claims: not read from a source; not claimed.',
      'Sterling prices: none.'
    ]
  }
};
