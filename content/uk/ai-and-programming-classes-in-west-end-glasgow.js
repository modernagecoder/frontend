'use strict';
// West End, Glasgow (cg- district page, UK cluster Phase 9, row 468). Keyword slug per the owner's 2026-09-30 ruling, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how can a program choose a cut-off by itself?
// (Otsu's method: pick the threshold that maximises between-class variance of a histogram; it needs two humps, so the
// scale matters).
// Data (read 30 September 2026): OpenStreetMap API 0.6 map calls over bbox -4.320,55.866,-4.280,55.890 (4 tiles, ODbL):
// 5,045 closed building footprints of at least 2 square metres with centre inside the box. Tags: 2,242 building=yes; 1,169
// houses (house 1,062, semidetached_house 64, detached 34, terrace 9); 884 apartments; others (residential 371, retail 68,
// university 66 and so on) not used as labels.
// Our run (scratchpad wng/otsu.py): footprint area by the shoelace formula; median 158.2 square metres, largest 19,889.
// Otsu on log10(area), 256 bins: cut-off 144.4 square metres (2,277 footprints below, 2,768 above), between-class share of
// variance 0.494. Checked against labels it never saw: houses below / apartments at or above the cut: 76.6% of houses and
// 86.8% of apartments correct, 81.0% overall. Best possible single cut-off using the labels: 152 square metres, 82.0%. Fixed
// guesses: 50 sq m 46.1%, 100 sq m 63.0%, 200 sq m 75.1%, 300 sq m 66.3%. Otsu on raw area (no logarithm): cut-off 4,973.9
// square metres, only 9 footprints above, 56.9% (no better than calling everything a house). Median footprint: houses 114.6,
// apartments 209.3 square metres.
// Lesson family: Otsu's method / automatic thresholding. Screened: "Otsu" 0 hits outside course syllabus files; rm.js and
// famq.js clean; claimed in claims.txt. Kirkcaldy (gradient boosting on footprints) and East Kilbride (circularity) use
// building shapes for other lessons.
// Place facts: no NRS figure exists for "the West End", so none is given; Glasgow City 620,700 (Scotland's Census 2022
// rounded) is registered by the Glasgow page and quoted only in text. postcodes.io (Glasgow City, G3/G11/G12) suburban
// areas: Broomhill, Dowanhill, Hillhead, Hyndland, Kelvindale, Kelvingrove, Kelvinside, Partick, Yorkhill.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WEST END, GLASGOW', label: 'West End, Glasgow', blurb: 'AI and programming classes for Glasgow\'s West End, with a project where a program picks its own cut-off to tell houses from apartment blocks.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-west-end-glasgow',
  code: 'wng',
  accent: '#2E6B4F',
  accentRationale: 'West End, Glasgow: a pine green (6.3:1 contrast), chosen by hand to differ in hue from neighbouring Phase 9 pages',
  pageType: 'city',
  place: {
    name: 'West End, Glasgow',
    eyebrow: 'West End, Glasgow, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Glasgow City' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-glasgow', name: 'Glasgow' }],
  nav: [
    { label: 'Glasgow', href: '/best-coding-class-in-glasgow' },
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'West End, Glasgow',
  title: 'AI and Programming Classes in the West End, Glasgow | 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Hillhead, Hyndland, Partick and Dowanhill learners in Glasgow, aged 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Glasgow\'s West End, with a project where Otsu\'s method chooses a threshold between houses and apartment blocks by itself.',
  twitterDescription: 'West End, Glasgow: AI, programming, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for the West End of Glasgow',
    description: 'Online AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Glasgow\'s West End, taught live with reasoning first.'
  },

  h1: 'AI and programming classes in the West End, Glasgow',
  capsuleQ: 'Which are the best AI and programming classes in Glasgow\'s West End?',
  capsule: 'We found no official boundary or population for Glasgow\'s West End, so we quote none; it lies within Glasgow City, which counted about 620,700 residents in Scotland\'s 2022 census. Hillhead, Hyndland, Partick, Dowanhill, Kelvinside, Kelvindale and Yorkhill are recorded suburbs in the G3, G11 and G12 postcode districts. AI, programming, Python, vibe coding and maths are taught by our India-based tutors on live video to anyone aged six to 67, solo or among five to ten classmates of the same stage. Reasoning is taught ahead of tools, so a learner can question where a model drew its line. The opening lesson is free of charge and closes with a named course recommendation. The West End project measures 5,045 mapped building footprints and lets a classic algorithm, Otsu\'s method, pick the dividing size between houses and apartment blocks with no labels at all. Families who continue pay USD 100 monthly when the learner joins a class, USD 150 monthly when the tutor is theirs alone.',
  lead: 'Many AI systems end with a simple question: above or below some cut-off? Spam or not, edge or background, large or small. Someone has to choose that cut-off, and guessing it is a poor plan. In 1979 Nobuyuki Otsu published a way for the data to choose: try every possible threshold, and keep the one that pulls the two resulting groups furthest apart while keeping each group tight. It is still the standard first step in turning a grey image into black and white. This project applies it to something easier to picture: the ground area of every building mapped on OpenStreetMap across the West End, where houses sit among larger apartment blocks.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Glasgow\'s West End?',

  picks: {
    eyebrow: 'West End course picks',
    h2: 'West End courses in reasoning, Python and AI',
    intro: 'Four courses arranged by age. Each begins with a live lesson that is free, and booking takes no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: sorting things into two groups and arguing about where the line goes.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games imagined by the learner, built with an AI and tested properly.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including automatic thresholds on West End building data.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data, images, machine learning and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The West End',
      h2: 'Hillhead, Hyndland, Partick and Dowanhill',
      intro: 'Recorded suburbs in the West End postcode districts, and why no population is quoted.',
      body: [
        { kind: 'table', caption: 'Suburban areas recorded by postcodes.io in three Glasgow postcode districts', head: ['Postcode district', 'Recorded suburban areas'], rows: [
          ['G12', 'Hillhead, Hyndland, Dowanhill, Kelvinside, Kelvindale'],
          ['G11', 'Partick, Broomhill'],
          ['G3', 'Kelvingrove, Yorkhill']
        ] },
        { kind: 'p', text: 'National Records of Scotland publishes figures for Glasgow City, not for the West End, and we will not invent one. Schools here follow the Curriculum for Excellence, so our tutors plan by P and S stage and support SQA Computing Science and Maths at National 5, Higher and Advanced Higher. Tell us the school holiday dates and lessons will stop for them.' },
        { kind: 'callout', h3: 'Glasgow, Scotland and SQA help', p: 'The city-wide page is <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a>, with more on <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> and <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths tuition</a>. Why thinking comes before prompting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The West End project',
      h2: 'Otsu\'s method on 5,045 West End buildings: a threshold the data chooses',
      intro: 'Measure every footprint, draw the histogram, and let the algorithm find the gap.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data for a rectangle over the West End and computes the ground area of each of its 5,045 building outlines with the shoelace formula. The median footprint is 158.2 square metres and the largest is 19,889. Otsu\'s method takes the histogram of those areas, tries each of 256 possible cut-offs, and scores every one by the between-class variance: how far apart the two group averages are, weighted by group size. No labels are used. Only afterwards does the learner check the answer against buildings that mappers have tagged: 1,169 houses and 884 apartment blocks.' },
        { kind: 'table', caption: 'Cut-offs for telling houses from apartment blocks by footprint, checked on 2,053 tagged buildings, our Python run on OpenStreetMap data', head: ['Cut-off', 'How it was chosen', 'Tagged buildings on the right side'], rows: [
          ['50 sq m', 'A guess', '46.1%'],
          ['100 sq m', 'A guess', '63.0%'],
          ['144.4 sq m', 'Otsu on log area, no labels', '81.0%'],
          ['152 sq m', 'Tuned using the labels', '82.0%'],
          ['300 sq m', 'A guess', '66.3%'],
          ['4,973.9 sq m', 'Otsu on raw area', '56.9%']
        ] },
        { kind: 'p', text: 'Working on the logarithm of area, Otsu chooses 144.4 square metres, putting 76.6% of tagged houses below the line and 86.8% of apartment blocks above it, 81.0% overall. The highest-scoring single cut-off, found by peeking at the labels, is 152 square metres at 82.0%, so the unsupervised answer is within a point of the ceiling. Run the same method on raw areas and it fails: a handful of enormous buildings stretch the scale, the cut-off jumps to 4,973.9 square metres with only nine buildings above it, and the score of 56.9% is what you get by calling everything a house. Otsu assumes two humps in the histogram. Footprints only show two humps once the scale is logarithmic.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Line up objects by size and decide together where "small" stops and "large" starts, then defend the choice.' },
          { h3: 'S1 to S3', p: 'Compute a few West End footprint areas in Python with the shoelace formula and plot a histogram.' },
          { h3: 'S4 and up', p: 'Write Otsu\'s method from the between-class variance and compare raw and logarithmic scales.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap footprints, our thresholds', p: 'Building outlines and tags are from OpenStreetMap and its contributors under the Open Database Licence. Areas, thresholds and scores are our own; the tags are volunteers\' descriptions, not a survey of how buildings are used.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Thresholds and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A formula can place the line, but someone still chose the formula.',
      body: [
        { kind: 'table', caption: 'From the West End threshold to working with AI', head: ['In the footprint project', 'When AI makes a yes or no call'], rows: [
          ['Guessed cut-offs scored 46% to 75%', 'Arbitrary thresholds cost accuracy'],
          ['Otsu reached 81.0% without labels', 'Data can often set its own threshold'],
          ['Labels only added one point', 'Check how much supervision really buys'],
          ['Raw areas broke the method', 'The scale of the input changes the answer'],
          ['2,242 buildings had no type', 'Unlabelled cases cannot confirm anything']
        ] },
        { kind: 'p', text: 'Classifiers, spam filters and image tools all hide a threshold somewhere, and an AI assistant asked to "separate the two groups" will pick one without comment. In vibe coding the learner describes the task and the AI writes the code; our West End students then ask how the cut-off was chosen, on what scale, and test it against cases with known answers. Agents that sort or flag things automatically need that question built in. Learners take on agent building when their Python runs without help, usually from S5 or as adults, and Copilot Studio agents are taught only in private lessons. Start with <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>, then see <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">how UK students reach agent building</a>.' },
        { kind: 'p', text: 'OpenStreetMap, National Records of Scotland and postcodes.io supplied open data only and have no link with us; the analysis and its mistakes are Modern Age Coders\' own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From sorting by size to automatic thresholds',
    intro: 'School stage is a rough guide; ten minutes of the trial shows the true level.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Grouping, borderline cases and explaining a rule.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and small apps made with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and machine learning', p: 'Histograms, variance and classifiers beside SQA Maths and Computing Science.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Machine learning and agents', p: 'Python, models, thresholds and AI agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and thresholds',
    h2: 'What is Otsu\'s method, and how does it choose a threshold automatically?',
    intro: 'Otsu\'s method tests every possible cut-off on a histogram and keeps the one that maximises the between-class variance, so the two groups it creates are as separate as possible; it needs no labels, but it assumes the data has two humps.',
    p1: 'On 5,045 West End building footprints it chose 144.4 square metres, which put 81.0% of tagged houses and apartment blocks on the right side, against 82.0% for a cut-off tuned with the labels and 56.9% when the method was run on raw, unlogged areas.',
    p2: 'Learners who have coded it ask of any AI decision: where is the threshold, who set it, and on what scale?',
    closer: 'Being able to find and question the cut-off keeps West End teenagers in control of the models they build, and that skill is learned by programming.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Hillhead to Partick, taught online',
    intro: 'A computer with a camera and a connection that handles video is the full equipment list.',
    cells: [
      { h3: 'Learner at the keyboard', p: 'The student writes and runs every line; the tutor watches on screen share and asks them to justify each choice.' },
      { h3: 'Trial sets the start', p: 'We find the first topic in the free lesson and note any SQA course.' },
      { h3: 'Nothing to pay at first', p: 'Lesson one is free and finishes with our course suggestion.' },
      { h3: 'Matched by stage', p: 'Classes hold five to ten learners at one level, drawn from across Britain.' },
      { h3: 'Two lessons a week', p: 'Term time only.' },
      { h3: 'Same hour all year', p: 'When the clocks change, our tutors shift, not you.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one stage, all free on the same evening, are rarely found on one street. Online, they do not have to be.' }
  },

  fees: {
    h2: 'West End fees',
    intro: 'West End learners pay our international rates, used everywhere outside India.',
    first: 'A free full lesson, then a recommendation.',
    group: 'About eight live lessons a month in a small class.',
    private: 'About eight live private lessons a month.',
    closer: 'Our invoices are raised in US dollars (we keep no pound price list), and the first one waits until a course and weekly hour have been agreed at the trial. Holidays, absences and changing format are explained on the pricing page.'
  },

  reviewsH2: 'Glasgow families and learners elsewhere in the UK, reviewing us on Google',

  book: {
    h2: 'Book a free West End lesson',
    intro: 'Give us an age or school stage and one thing the learner enjoys. We might begin with a size-sorting argument, a Scratch game built with an AI, first Python, or measuring real buildings.',
    success: 'Thank you. Your West End request has reached us.'
  },

  faq: {
    h2: 'West End questions',
    intro: 'Automatic thresholds, the footprint project, vibe coding and how lessons work.',
    items: [
      { q: 'How many people live in Glasgow\'s West End?', a: 'We found no official figure for an area called the West End, so we quote none. Glasgow City as a whole had about 620,700 people in the 2022 census.' },
      { q: 'Are AI and programming classes available online in the West End?', a: 'Yes, as live video lessons for ages 6 to 67 in Hillhead, Hyndland, Partick and the surrounding districts.' },
      { q: 'What is between-class variance?', a: 'A measure of how far apart two groups\' averages are, weighted by the size of each group. Otsu\'s method picks the cut-off that makes it largest.' },
      { q: 'When does Otsu\'s method fail?', a: 'When the histogram does not have two clear humps. On raw West End footprint areas, a few huge buildings dragged the cut-off to 4,973.9 square metres; on a logarithmic scale it worked well.' },
      { q: 'What is the West End project?', a: 'Measuring 5,045 mapped building footprints and letting Otsu\'s method choose the size that separates houses from apartment blocks, then checking it against tagged buildings.' },
      { q: 'Is vibe coding taught?', a: 'Yes, at every age: the learner explains what to build and tests what the AI produces.' },
      { q: 'When can learners build AI agents?', a: 'Once their Python runs without help, usually from S5 or as adults; Copilot Studio agents are one-to-one only.' },
      { q: 'Do you support National 5, Higher and Advanced Higher?', a: 'Yes, in Computing Science and Maths, taught for understanding with no grade promised.' },
      { q: 'What do lessons cost?', a: 'Zero for the trial lesson, then a monthly USD 100 (class) or USD 150 (private).' },
      { q: 'Do you teach through the school holidays?', a: 'We stop for them. Share your dates and those weeks are left clear.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Glasgow and west of Scotland pages',
    html: 'Pages with different projects: <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> (how long is the city boundary?), <a class="cg-inline-link" href="/online-coding-and-python-classes-in-paisley">Paisley</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-east-kilbride">East Kilbride</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-coatbridge">Coatbridge</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'West End and Glasgow',
  footerPlaces: [
    { href: '/best-coding-class-in-glasgow', label: 'Glasgow' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wng .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-wng .cg-hero h1 { font-weight: 760; letter-spacing: -0.026em; line-height: 1.06; }
.cg-root.cg-wng .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-wng .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wng .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-wng .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-wng .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wng .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-wng .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-wng .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Glasgow City (S12000049). Scotland: Curriculum for Excellence, SQA National 5, Higher, Advanced Higher. No NRS figure for the West End; Glasgow City about 620,700 (Scotland\'s Census 2022, rounded). postcodes.io (Glasgow City, G3/G11/G12): Broomhill, Dowanhill, Hillhead, Hyndland, Kelvindale, Kelvingrove, Kelvinside, Partick, Yorkhill (suburban areas).',
    localProject: 'OSM API 0.6 bbox -4.320,55.866,-4.280,55.890: 5,045 building footprints (2,242 untyped; 1,169 houses; 884 apartments). Otsu on log10 area: 144.4 sq m, 81.0% of 2,053 tagged correct (houses 76.6%, apartments 86.8%); label-tuned optimum 152 sq m 82.0%; guesses 50/100/200/300 sq m 46.1/63.0/75.1/66.3%; Otsu on raw area 4,973.9 sq m, 56.9%. Median footprint 158.2 (houses 114.6, apartments 209.3). Lesson family: Otsu automatic threshold.',
    requiredMentions: [
      '5,045',
      '144.4',
      'Hillhead',
      'Hyndland',
      'Partick',
      'Dowanhill',
      'Kelvinside',
      'Yorkhill',
      'Otsu',
      'between-class variance'
    ],
    sources: [
      { claim: 'OpenStreetMap building footprints in the West End of Glasgow, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io places: suburban areas in Glasgow City (G3, G11, G12).', url: 'https://api.postcodes.io/places?q=Hyndland' },
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 rounded population estimates (Glasgow City).', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' }
    ],
    rejectedClaims: [
      'A population or boundary for the West End: none found; not stated.',
      'University, museum or park history: not read from a source; not claimed.',
      'That OpenStreetMap "apartments" means tenements specifically: not claimed; the tag is quoted as mapped.',
      'That footprint size shows how a building is used: not claimed; only agreement with volunteer tags is reported.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
