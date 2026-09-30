'use strict';
// Leith, Edinburgh (cg- district page, UK cluster Phase 9, row 472). Keyword slug per the owner's 2026-09-30 ruling, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does a computer find the corners in a
// picture? (Harris corner detection: brightness gradients in two directions, a response score, a threshold and local
// maxima; precision against recall; resolution limits).
// Data (read 30 September 2026): OpenStreetMap API 0.6 map calls over bbox -3.195,55.968,-3.160,55.984 (ODbL). Window for
// the experiment: longitude -3.1800 to -3.1720, latitude 55.9730 to 55.9775, a 498 m square. 275 building ways lie wholly
// inside it, with 3,102 outline vertices. Ground truth: vertices where the outline turns by 30 degrees or more, merged
// within 1 m: 1,485 corners.
// Our run (scratchpad lei/har.py): footprints drawn as filled white shapes on black, Harris response with k = 0.04 and
// Gaussian window sigma 1.5 pixels, local maxima above a share of the strongest response, matched to true corners within
// 2 m. At 0.5 m per pixel: threshold 5% gives 1,053 detections, precision 97.2%, recall 82.0%; threshold 1% gives 2,061
// detections, precision 54.1%, recall 85.0%; threshold 40% gives 860 detections, precision 99.8%, recall 69.3%. Threshold 5% at 1 m per
// pixel: precision 87.8%, recall 55.5%; at 2 m per pixel: precision 46.8%, recall 16.4%. Recall counts true corners with a
// detection inside 2 m, so one detection can serve two corners that sit close together.
// Lesson family: Harris corner detection. Screened: "Harris corner", "corner detection" 0 hits in content/; rm.js and
// famq.js clean; claimed in claims.txt. Edge detection (Sobel, Canny) and Hough lines belong to earlier pages; this is the
// two-direction test that separates a corner from an edge.
// Place facts: no NRS figure for Leith as named here; City of Edinburgh about 512,700 (Scotland's Census 2022 rounded,
// registered by the Edinburgh page). postcodes.io (City of Edinburgh): EH6 Leith, North Leith, South Leith, Newhaven,
// Bonnington, Pilrig, Trinity; EH7 Lochend, Restalrig.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'LEITH', label: 'Leith', blurb: 'AI and programming classes for Leith in Edinburgh, with a computer vision project that hunts for 1,485 building corners in a drawn map of the district.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-leith-edinburgh',
  code: 'lei',
  accent: '#7A2E5E',
  accentRationale: 'Leith: a dark plum (8.4:1 contrast), set by hand against the teal and violet used for Stockbridge and Morningside',
  pageType: 'city',
  place: {
    name: 'Leith',
    eyebrow: 'Leith, Edinburgh, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Edinburgh' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-edinburgh', name: 'Edinburgh' }],
  nav: [
    { label: 'Edinburgh', href: '/best-coding-class-in-edinburgh' },
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Leith, Edinburgh',
  title: 'AI and Programming Classes in Leith, Edinburgh | Live Online',
  description: 'Live online AI and programming classes for Leith, Newhaven, Pilrig, Bonnington and Restalrig learners in Edinburgh, ages 6 to 67. Your first lesson is free.',
  ogDescription: 'AI and programming classes for Leith, Edinburgh, with a computer vision project that finds building corners and measures how many it gets right.',
  twitterDescription: 'Leith, Edinburgh: online AI, Python and programming classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Leith, Edinburgh',
    description: 'Online AI, Python, programming and maths for children, teenagers and adults in Leith and across Edinburgh, taught live with computer vision explained from first principles.'
  },

  h1: 'AI and programming classes in Leith, Edinburgh',
  capsuleQ: 'What are the best AI and programming classes for Leith learners?',
  capsule: 'Leith sits within the City of Edinburgh council area, home to about 512,700 people at Scotland\'s 2022 census. We could find no official count for Leith under that name, so we print none. Open postcode data lists North Leith, South Leith, Newhaven, Bonnington, Pilrig and Trinity in EH6, and Lochend and Restalrig in EH7. Modern Age Coders teaches AI, Python, programming and maths to learners aged six to 67 in live online lessons led from India, either individually or in classes of five to ten at the same level. We teach how a method works before using a library that hides it. There is no charge for the opening lesson, and it ends with the course we think fits. For Leith the project is computer vision: a program looks for the corners of 275 buildings and is marked against the 1,485 corners actually on the map. Ongoing lessons cost USD 100 monthly for a class or USD 150 monthly for a tutor of your own.',
  lead: 'Before a computer can match two photos, track a moving object or stitch a panorama, it needs points it can find again. Corners are ideal. Along a plain wall, brightness changes in one direction only, so a small patch looks the same if you slide it along the edge. At a corner, brightness changes in two directions, and any slide changes the patch. Harris corner detection turns that observation into a score for every pixel, then keeps the peaks above a threshold. Two choices decide how well it works: where the threshold sits, and how fine the image is. This project measures both on a drawn map of Leith, where the true corners are known.',
  wa: 'Hello Modern Age Coders, please could we arrange a free AI or programming lesson for a learner in Leith?',

  picks: {
    eyebrow: 'Leith course picks',
    h2: 'Leith courses: how to think, vibe coding, AI and Python',
    intro: 'Four starting points by age, each with a live first lesson that costs nothing and asks for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: what makes a corner a corner, and other rules a computer can follow.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the child, drafted with an AI, then played and fixed.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning and computer vision in Python, including the Leith corner finder.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for images, data, automation and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Leith in open postcode data',
      h2: 'Leith, Newhaven, Pilrig, Bonnington and Restalrig',
      intro: 'The places recorded in EH6 and EH7, and the school system lessons fit around.',
      body: [
        { kind: 'table', caption: 'Places recorded by postcodes.io in two Edinburgh postcode districts', head: ['Postcode district', 'Recorded places'], rows: [
          ['EH6', 'Leith, North Leith, South Leith, Newhaven, Bonnington, Pilrig, Trinity'],
          ['EH7', 'Lochend, Restalrig']
        ] },
        { kind: 'p', text: 'We quote a population only where an official body publishes one for exactly the place named, and for Leith we found none. Children in Leith are taught under the Curriculum for Excellence, so we ask for a P or S stage, not a year group, and we help with SQA Maths and Computing Science from National 5 through Higher to Advanced Higher. Share the Edinburgh holiday dates and we keep those weeks clear.' },
        { kind: 'callout', h3: 'Edinburgh, Scotland and exam help', p: 'For the city as a whole see <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a>, and for the nation <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a>. SQA support is described on <a class="cg-inline-link" href="/advanced-higher-maths-tuition-online">Advanced Higher Maths tuition</a>, and our teaching approach on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Leith project',
      h2: 'Finding 1,485 building corners with Harris corner detection',
      intro: 'A map drawn as a picture, a detector run over it, and a mark out of 1,485.',
      body: [
        { kind: 'p', text: 'The learner takes a 498 m square from OpenStreetMap, lying wholly inside the area the map outlines as Leith. It holds 275 complete building outlines with 3,102 points between them. A point counts as a true corner when the outline turns there by 30 degrees or more, which gives 1,485 corners once points within a metre of each other are merged. The program then draws the buildings as white shapes on a black picture and forgets the outlines. The detector sees only pixels. For each pixel it measures how fast brightness changes across and down, combines the two into a Harris score, and keeps the local peaks above a chosen share of the strongest score. A detection is right if a true corner lies within 2 m.' },
        { kind: 'table', caption: 'Changing the threshold at 0.5 m per pixel, our Python run on OpenStreetMap footprints', head: ['Threshold (share of strongest score)', 'Detections', 'Precision', 'Recall'], rows: [
          ['1%', '2,061', '54.1%', '85.0%'],
          ['5%', '1,053', '97.2%', '82.0%'],
          ['40%', '860', '99.8%', '69.3%']
        ] },
        { kind: 'table', caption: 'Changing the pixel size at a 5% threshold', head: ['Pixel size', 'Detections', 'Precision', 'Recall'], rows: [
          ['0.5 m', '1,053', '97.2%', '82.0%'],
          ['1 m', '765', '87.8%', '55.5%'],
          ['2 m', '457', '46.8%', '16.4%']
        ] },
        { kind: 'p', text: 'Precision is the share of detections that are real corners; recall is the share of real corners that were found. At a 5% threshold the detector made 1,053 detections, 97.2% of them correct, and 82.0% of the true corners had a detection within 2 m. Drop the threshold to 1% and detections nearly double to 2,061, but recall only creeps up to 85.0% while precision collapses to 54.1%: almost all the extra detections are false. Raise it to 40% and nearly every detection is right, at the price of missing three corners in ten. Coarser pictures are worse on both counts. At 2 m per pixel the detector finds 16.4% of corners and fewer than half of its 457 detections are right; one pixel is then as wide as the whole 2 m matching tolerance. Recall can run ahead of the detection count because one detection may sit within 2 m of two close corners.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Slide a small paper window over a drawn shape and sort each spot into flat, edge or corner.' },
          { h3: 'S1 to S3', p: 'Draw the building picture in Python and count true corners from the outline angles.' },
          { h3: 'S4 and up', p: 'Code the Harris score with NumPy, sweep the threshold and plot precision against recall.' }
        ] },
        { kind: 'callout', h3: 'Map data from OpenStreetMap, analysis by us', p: 'Building outlines come from OpenStreetMap and its contributors under the Open Database Licence. They are drawn by volunteers, so a real building may have corners the map leaves out. A clean drawing is also far easier than a photograph. These scores describe our exercise, not how the method performs on real images.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Vision, vibe coding and agents',
      h2: 'From a corner finder to AI that sees',
      intro: 'Modern vision models learn their own features, yet the same trade-offs remain.',
      body: [
        { kind: 'table', caption: 'What the Leith corner finder shows about AI systems', head: ['In the corner project', 'In AI more widely'], rows: [
          ['A 1% threshold doubled detections and halved precision', 'A confidence cut-off trades false alarms against misses'],
          ['A 40% threshold was almost always right but missed three in ten', 'High precision alone can hide poor coverage'],
          ['Recall fell to 16.4% at 2 m pixels', 'Low-resolution input limits what any model can see'],
          ['True corners came from the map outlines', 'Scores mean nothing without trusted ground truth'],
          ['A drawing is easier than a photo', 'Test data must resemble real use']
        ] },
        { kind: 'p', text: 'A vision library will return corners in one line, and an AI assistant will write that line for you without mentioning a threshold. In vibe coding, a person states what the program should do and an AI produces the code; Leith learners are taught to ask for the threshold and the pixel size as named settings, then measure what changing them does. That is the difference between using a tool and understanding it. AI agents that read screens, documents or camera feeds depend on the same kind of detector underneath. Building agents starts when a learner writes Python with confidence, often about S5 onwards, and our Copilot Studio agents course runs one-to-one only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, National Records of Scotland and postcodes.io are independent publishers of open data with no link to Modern Age Coders. We wrote the detector and the scoring, and errors in either are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Routes',
    h2: 'From shapes on paper to computer vision',
    intro: 'A P or S stage suggests a band; the trial lesson confirms it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Shapes, rules and sorting things a computer could sort.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and apps built alongside an AI, with the learner in charge.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python, AI and vision', p: 'Arrays, gradients and classifiers, in step with SQA Computing Science and Maths.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'AI, vision and agents', p: 'Image processing, models and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Computer vision',
    h2: 'How does a computer find corners in an image?',
    intro: 'It looks for pixels where brightness changes strongly in two directions at once: Harris corner detection scores every pixel from the brightness gradients around it, and the peaks above a threshold are reported as corners, since an edge changes in one direction only and a flat area in none.',
    p1: 'On a drawn map of 275 Leith buildings with 1,485 true corners, a 5% threshold at 0.5 m per pixel gave 97.2% precision and 82.0% recall; a 1% threshold cut precision to 54.1%, and 2 m pixels cut recall to 16.4%.',
    p2: 'Learners who have moved that threshold themselves ask of any AI vision system: what was it tuned to avoid, false alarms or misses?',
    closer: 'A Leith teenager who has scored a detector against known answers understands evaluation, the part of AI that matters most once models are easy to call.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Format',
    h2: 'Live lessons for Leith, Newhaven and Restalrig',
    intro: 'You will need a computer with a working camera and an internet line that carries a video call.',
    cells: [
      { h3: 'The pupil does the coding', p: 'With the screen shared, the pupil writes and runs the program. The tutor questions and explains, and never takes over the keys.' },
      { h3: 'Trial first', p: 'A free session tells us the level and whether an SQA course is in play.' },
      { h3: 'Opening lesson free', p: 'It costs nothing and closes with a suggested course.' },
      { h3: 'Classes of five to ten', p: 'Grouped by level, with classmates from across Britain.' },
      { h3: 'Two sessions weekly', p: 'During the school term.' },
      { h3: 'Your hour is fixed', p: 'Tutors shift with the UK clock changes so you never have to.' }
    ],
    spec: { title: 'Why online', p: 'Matching five to ten people by level and free hour is hard inside one district and easy across a country. Video makes that possible.' }
  },

  fees: {
    h2: 'Fees for Leith',
    intro: 'Leith pays what every learner outside India pays: our international rates.',
    first: 'A whole lesson without charge, followed by course advice.',
    group: 'Eight or so live group lessons monthly.',
    private: 'Eight or so live one-to-one lessons monthly.',
    closer: 'Prices are set in US dollars and we publish none in sterling. Nothing is charged until the trial is over and a course and time are agreed. The pricing page explains holiday breaks, missed lessons and changing between a class and a private tutor.'
  },

  reviewsH2: 'What Edinburgh and UK learners wrote on Google',

  book: {
    h2: 'Reserve a free lesson in Leith',
    intro: 'An age or school stage and one interest are enough. The trial may be a shape-sorting puzzle, a Scratch game made with an AI, a first Python program, or a look at how a computer finds corners.',
    success: 'Thank you. The Leith request is with us.'
  },

  faq: {
    h2: 'Leith questions',
    intro: 'Corner detection, the Leith project, vibe coding, agents and the practical side.',
    items: [
      { q: 'What is the population of Leith?', a: 'We found no official figure published for Leith under that name, so we give none. The City of Edinburgh council area had about 512,700 residents in the 2022 census.' },
      { q: 'Are there online AI and programming classes for Leith?', a: 'Yes. We teach live by video, for ages 6 to 67, in Leith, Newhaven, Pilrig, Bonnington, Restalrig and the rest of Edinburgh.' },
      { q: 'What is Harris corner detection?', a: 'A method that scores each pixel by how strongly brightness changes in two directions around it. High-scoring peaks are corners; edges and flat areas score low.' },
      { q: 'What is the difference between precision and recall?', a: 'Precision is how many of the things a detector reported were real. Recall is how many of the real things it reported. In the Leith project a 5% threshold gave 97.2% precision and 82.0% recall.' },
      { q: 'What is the Leith project?', a: 'A Python program draws 275 Leith buildings from open map data, runs a corner detector on the picture, and checks the result against 1,485 known corners.' },
      { q: 'How do you teach vibe coding?', a: 'The learner says what they want, an AI writes a draft, and the learner reads, tests and fixes it. Children start from about age eight.' },
      { q: 'When do learners build AI agents?', a: 'After they write Python with confidence, often about S5 onwards. The Copilot Studio agents course is one-to-one only.' },
      { q: 'Do you cover SQA Computing Science and Maths?', a: 'Yes, from National 5 to Advanced Higher. We work on understanding and make no promise about grades.' },
      { q: 'What do lessons cost?', a: 'The opening lesson is free. A class is USD 100 monthly and a private tutor USD 150 monthly.' },
      { q: 'Do you teach in the school holidays?', a: 'Not in the weeks you ask us to skip; send the dates and we plan round them.' }
    ]
  },

  next: {
    eyebrow: 'Further afield',
    h2: 'More pages across Scotland',
    html: 'Each page has a project of its own: <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-musselburgh">Musselburgh</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-livingston">Livingston</a> and <a class="cg-inline-link" href="/best-coding-class-in-dundee">Dundee</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every other place.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Leith and Edinburgh',
  footerPlaces: [
    { href: '/best-coding-class-in-edinburgh', label: 'Edinburgh' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-lei .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.3vw, 2.8rem); }
.cg-root.cg-lei .cg-hero h1 { font-weight: 770; letter-spacing: -0.022em; line-height: 1.09; }
.cg-root.cg-lei .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 1rem; }
.cg-root.cg-lei .cg-eyebrow { letter-spacing: 0.2em; font-weight: 600; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-lei .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.016em; }
.cg-root.cg-lei .cg-table caption { font-weight: 500; text-align: left; font-size: 0.88rem; }
.cg-root.cg-lei .cg-table td { font-variant-numeric: tabular-nums; padding-block: 0.6rem; }
.cg-root.cg-lei .cg-table th { letter-spacing: 0.07em; font-weight: 650; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-lei .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-lei .cg-callout { border-left-width: 6px; border-radius: 0 6px 6px 0; }
`,

  dossier: {
    curriculumAuthority: 'City of Edinburgh (S12000036). Scotland: Curriculum for Excellence, SQA National 5, Higher, Advanced Higher. No NRS figure quoted for Leith; City of Edinburgh about 512,700 (Scotland\'s Census 2022, rounded). postcodes.io (City of Edinburgh): EH6 Leith, North Leith, South Leith, Newhaven, Bonnington, Pilrig, Trinity; EH7 Lochend, Restalrig.',
    localProject: 'OSM API 0.6, window -3.1800..-3.1720, 55.9730..55.9775 (498 m square): 275 buildings, 3,102 vertices, 1,485 true corners (turn 30 degrees or more, merged at 1 m). Harris k 0.04, sigma 1.5 px, match 2 m. 0.5 m/px: 5% threshold 1,053 detections, precision 97.2%, recall 82.0%; 1% 2,061 detections, 54.1% / 85.0%; 40% 99.8% / 69.3%. 5% at 1 m/px 87.8% / 55.5%; at 2 m/px 46.8% / 16.4%. Lesson family: Harris corner detection.',
    requiredMentions: [
      'Newhaven',
      'Pilrig',
      'Bonnington',
      'Restalrig',
      'North Leith',
      'Harris corner detection',
      '1,485',
      '97.2%',
      'precision'
    ],
    sources: [
      { claim: 'OpenStreetMap building outlines in Leith, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io places in the City of Edinburgh (EH6, EH7).', url: 'https://api.postcodes.io/places?q=Leith' },
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 rounded population estimates (City of Edinburgh).', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' }
    ],
    rejectedClaims: [
      'A population for Leith: no figure found for exactly that name; not stated.',
      'Port, dock or waterfront descriptions and any compass direction: not sourced; left out.',
      'That the scores show how Harris performs on photographs: not claimed; the test image is a clean drawing.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
