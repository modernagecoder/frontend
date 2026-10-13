'use strict';
// Traralgon (cg- regional city page, Australia cluster Phase 7, row 161). Shaped page: AI and programming for
// teenagers and adults. Spine: which stops sit within walking distance of the new Traralgon to Morwell path?
// Data: Latrobe City Council "Latrobe Traralgon to Morwell Shared Path" (data.gov.au, CC BY 2.5 AU, metadata
// modified 1 October 2026), GeoJSON via data.gov.au geoserver, 8 stage features, 1,717 vertices. Stops:
// Transport Victoria GTFS Schedule (discover.data.vic.gov.au, CC BY 4.0), regional bus feed (folder 6) and
// regional train feed (folder 1), files dated 2 October 2026; 15 stop records inside 146.35 to 146.58 E,
// 38.17 to 38.26 S (11 bus, 4 train). Our code (scratchpad au/r4/trg_buf.py): path length 15.37 km by status
// as recorded: Completed 5.44 km (Stages 1A 670 m, 1C 633 m, 2A 3,319 m, 5 816 m), Under Construction
// 5.85 km (1B 1,456 m, 3A 3,613 m, 3B 780 m), Out to Tender 4.09 km (Stage 4, 4,086 m). Point-to-segment
// distance: 4 stop records within 200 m (and within 400 m), 5 within 800 m; Morwell Bus Interchange /
// Commercial Rd 38 m; Morwell station records 164 and 167 m; Mid Valley Shopping Centre stop 591 m;
// Traralgon Railway Station record 2,210 m. Thinning: full path vertex and segment distances agree within
// 1 m; every 10th vertex (184) vertex rule up to 14 m long; every 25th vertex (82) segment distance moves
// by up to 22 m and the vertex rule adds up to 12 m more. Lesson family: buffer zone by point-to-segment
// distance; screened 0 content hits 8 October 2026; claimed by AU-R4. Place facts: ABS Census 2021
// QuickStats SUA 2018 Traralgon - Morwell; Victorian school term dates; IANA tz 2026e Australia/Melbourne
// (rule AV), Asia/Kolkata. Excluded by the cluster rules: income, rent, ancestry, religion, health; stop
// names that refer to health or care facilities are not printed.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'TRARALGON', label: 'Traralgon', blurb: 'Traralgon in the Latrobe Valley, a 15 km shared path being built towards Morwell, and the point-to-segment distance behind every buffer zone.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-traralgon',
  code: 'trg',
  accent: '#116E1D',
  accentRationale: 'Traralgon: a valley pasture green (HSV saturation 0.85, value 0.43, hue 128), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, with 5.2:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Traralgon',
    eyebrow: 'Traralgon, Victoria, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Victoria', href: '/coding-and-ai-classes-in-victoria' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Traralgon, Victoria',
  title: 'AI and Programming Classes in Traralgon | Live Online Lessons',
  description: 'Live online AI and programming classes for Traralgon and Morwell teens and adults, built on real Latrobe Valley data. Small groups or one to one, first lesson free.',
  ogDescription: 'AI and programming classes for Traralgon teens and adults, with a project that measures how close bus and train stops sit to the new Traralgon to Morwell path.',
  twitterDescription: 'Traralgon AI and programming classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'complete-generative-ai-masterclass-college',
  verifiedOn: '8 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Traralgon Learners',
    description: 'Python, machine learning and the spatial tools AI assistants rely on, taught live online to teenagers and adults in Traralgon, Morwell and the Latrobe Valley.'
  },

  h1: 'AI and programming classes in Traralgon',
  capsuleQ: 'What are the best AI and programming classes in Traralgon?',
  capsule: 'For Traralgon teenagers and adults, classes where AI is something you program and test rather than just chat to: Python first, then the data, maps and models that real AI tools are built from. The 2021 Census counted 43,252 people in the Traralgon and Morwell urban area. Every lesson is live with a teacher on video, either one to one or in a small group at your stage, and the first lesson costs nothing.',
  lead: 'Ask an AI travel assistant whether a train station is near a new cycling path and it will answer confidently. Underneath, a good assistant has to call a small, unglamorous tool: the distance from a point to a line. Latrobe City Council publishes the route of the shared path it is building between Traralgon and Morwell, stage by stage, as open data. Transport Victoria publishes every bus and train stop. Our project joins the two and draws a buffer zone around the path, a band a set distance wide, to see which stops fall inside it. The answer surprised us, and so did how easily the wrong method could have hidden it.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Traralgon.',

  picks: {
    eyebrow: 'AI courses for Traralgon',
    h2: 'Starting points for AI in the Latrobe Valley',
    intro: 'Each course builds a skill this project uses. The free trial settles which suits the learner, and booking it needs no card.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning for teenagers, from labelling data by hand to training and testing real models in Python.' },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 17', note: 'Using AI tools well: prompting, checking their answers and knowing when to write code instead.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'University and adult', note: 'Language models, retrieval and agents, including the tools an agent calls to answer questions about places.' },
      { course: 'data-science-complete-masterclass-college', band: 'Adults', note: 'Joining datasets, spatial thinking and honest reporting with Python, pandas and SQL.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Traralgon and Morwell in 2021',
      h2: 'Two Latrobe Valley towns counted as one urban area',
      intro: 'The statistics bureau treats Traralgon and Morwell as a single Significant Urban Area. These are its 2021 Census figures.',
      body: [
        { kind: 'table', caption: 'The Traralgon and Morwell urban area in four numbers', head: ['Census 2021', 'Figure'], rows: [
          ['Residents', '43,252'],
          ['Median age', '40'],
          ['Families', '11,185'],
          ['Private dwellings', '19,912, averaging 2.3 people per household']
        ] },
        { kind: 'table', mt: true, caption: 'How the urban area compares with Victoria and Australia', head: ['Measure', 'Traralgon and Morwell', 'Victoria', 'Australia'], rows: [
          ['Occupied homes that are separate houses', '14,753, or 86.1%', '73.4%', '72.3%'],
          ['Occupied homes that are flats or apartments', '1,405, or 8.2%', '12.1%', '14.2%'],
          ['Employed people working as technicians or in trades', '2,802, or 15.5%', '12.6%', '12.9%'],
          ['People aged 15 and over with a bachelor degree or higher', '4,810, or 13.6%', '29.2%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A valley of houses', p: '86.1% of occupied homes are separate houses, well above the Victorian share of 73.4%.' },
          { h3: 'Practical work', p: 'Technicians and trades workers make up 15.5% of employed residents, higher than across the state or the country.' },
          { h3: 'Room to grow', p: 'Degree holders are 13.6% of adults, less than half Victoria\'s 29.2%, which makes strong online options for further study more useful here.' }
        ] },
        { kind: 'p', text: 'Because the bureau randomly adjusts small cells to protect privacy, sums of Census categories can differ slightly from printed totals. We report the bureau\'s own totals and percentages unchanged.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which stops are within walking distance of the new path?',
      intro: 'Measure from each bus and train stop to the nearest point on the shared path, then count the stops inside 200, 400 and 800 metre buffer zones.',
      body: [
        { kind: 'table', caption: 'The Traralgon to Morwell shared path by status, as recorded in the council dataset (our measurement)', head: ['Status', 'Stages', 'Length'], rows: [
          ['Completed', '1A, 1C, 2A and 5', '5.44 km'],
          ['Under construction', '1B, 3A and 3B', '5.85 km'],
          ['Out to tender', '4', '4.09 km'],
          ['All eight stages', '1,717 mapped points', '15.37 km']
        ] },
        { kind: 'table', mt: true, caption: 'Stop records within each buffer distance of the path (our calculation, 15 stop records in the area)', head: ['Buffer width', 'Stops inside'], rows: [
          ['200 m', '4'],
          ['400 m', '4'],
          ['800 m', '5'],
          ['Nearest stop record to the path', 'Morwell Bus Interchange on Commercial Road, 38 m'],
          ['Traralgon Railway Station record', '2,210 m from the mapped path']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Project the point', p: 'For each stop, slide along every straight piece of the path and find where a perpendicular from the stop would land, clamped to the piece\'s ends.' },
          { h3: 'Keep the minimum', p: 'The smallest of those distances is the stop\'s distance to the path. Do that for all 15 stop records.' },
          { h3: 'Draw the band', p: 'A buffer zone of width d is simply every point within d of the path, so a stop is inside when its distance is d or less.' }
        ] },
        { kind: 'callout', h3: 'The path, as mapped, stops short of Traralgon station', p: 'The two Morwell station records sit 164 and 167 metres from the path, comfortably inside a 400 metre band. Traralgon\'s station is 2,210 metres away from the nearest mapped section. Nothing here says that will stay true, since stages are still being built and tendered, but it shows what a buffer query is for: turning "near" into a number someone can check.' },
        { kind: 'p', text: 'Distances are straight lines from the published stop positions to the path as drawn in the council file; they are not walking routes. Some stops appear twice because the feed lists each platform or side separately. Every figure is ours, from the files as downloaded.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Inside the code',
      h2: 'Why measuring to points is not measuring to a line',
      intro: 'A tempting shortcut is to measure only to the path\'s corner points. Here is when that works and when it fails.',
      body: [
        { kind: 'table', caption: 'Corner points versus segments as the path is simplified (our test)', head: ['Path detail kept', 'Corner points', 'Corner-only error, up to', 'Segment answer moves by, up to'], rows: [
          ['Every point', '1,717', 'under 1 m', '0 m'],
          ['Every 10th point', '184', '14 m', '1 m'],
          ['Every 25th point', '82', '12 m', '22 m']
        ] },
        { kind: 'p', text: 'With all 1,717 points the council drew, the path\'s pieces are so short that measuring to corners almost matches measuring to segments. Thin the line to every 10th point and the corner shortcut overstates distances by up to 14 metres while the proper segment method barely changes. Thin it further and the line itself drifts, so even correct code inherits the coarser drawing. Good spatial code is honest about both kinds of error.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Draw a line and a dot on graph paper, find the closest point with a ruler, then write the Python that does it and test it on the Latrobe path.' },
          { h3: 'University students', p: 'Use vector projection with clamping, then add a spatial index so thousands of stops can be checked quickly.' },
          { h3: 'Adults', p: 'Join two public datasets with different owners and formats, and present the result with its limits written alongside.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with Latrobe City Council, Transport Victoria, the Victorian Government or the statistics bureau. The bureau supplied the Census data; the path lengths, distances and counts were produced by our own code from the two open datasets.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Traralgon',
      h2: 'Victorian terms and the October clock change',
      intro: 'Dates that matter when a Traralgon learner picks a lesson time.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Rest of 2026', p: 'Victoria lists Term 4 of 2026 from Monday 5 October to Friday 18 December.' },
          { h3: 'Start of 2027', p: 'Term 1 of 2027 begins on Wednesday 27 January, with government school students starting on Thursday 28 January, and ends on Thursday 25 March.' },
          { h3: 'Daylight saving', p: 'Victorian clocks move forward on the first Sunday in October and back on the first Sunday in April under the time zone rules for Melbourne.' }
        ] },
        { kind: 'spec', title: 'A path still being built', p: 'Datasets that track construction change from month to month. Recording the date a file was downloaded, here the council\'s update of 1 October 2026, keeps a measurement honest about when it was true.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a dot and a line to tools an AI agent can call',
    intro: 'Treat the ages as a guide; the trial lesson finds the real starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Coordinates in code', p: 'Python that stores points, measures between them and plots a simple map of a few stops and a path.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'First models', p: 'Classifying and predicting with real data, while learning to check what a model or an AI tool claims.', courses: ['ai-ml-masterclass-teens', 'teens-ai-tools-mastery-course'] },
      { band: 'University', h3: 'Agents and tools', p: 'Building the functions an AI agent calls, such as distance queries, and testing them against known answers.', courses: ['complete-generative-ai-masterclass-college', 'artificial-intelligence-complete-masterclass-college'] },
      { band: 'Adults', h3: 'Data for decisions', p: 'Joining public datasets, measuring carefully and writing findings that colleagues can trust.', courses: ['data-science-complete-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI assistants already answer "is it near?". Why should a Traralgon learner build the tool behind them?',
    intro: 'Because an assistant is only as accurate as the distance function it calls, and a lazy one that measures to corners can be wrong by tens of metres without any warning.',
    p1: 'Language models do not measure maps themselves. When an assistant answers a question about distance, it relies on code someone wrote, often a buffer or nearest-feature query. If that code measures only to corner points, or uses a simplified line, the assistant repeats the error fluently. A learner who has written the point-to-segment calculation can test the tool with a stop whose answer is already known, such as the 38 metre Morwell interchange.',
    p2: 'We teach that testing habit alongside the coding. Traralgon learners write the function, try it on easy cases, then on the real path, and finally ask an AI assistant the same question to compare. Seeing where they disagree is the fastest way to understand what AI tools can and cannot do.',
    closer: 'Agents will keep getting better at calling tools; the people who write and test those tools are the ones who decide whether the answers are right.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Traralgon or Morwell, the same live lesson',
    intro: 'Lessons happen on video, so the distance between the two towns never matters.',
    cells: [
      { h3: 'From home', p: 'Learners join from wherever they study, which means no drive along the Princes Freeway to a classroom.' },
      { h3: 'Victorian context', p: 'Teachers use Victorian year levels and plan revision around the four Victorian terms. Teaching is in English.' },
      { h3: 'An honest trial', p: 'The first lesson is real teaching and ends with a suggested course and weekly time, with no card requested.' },
      { h3: 'Matched groups', p: 'Fifteen to twenty learners at a similar level form a group, drawn from Traralgon and beyond so sessions stay full.' },
      { h3: 'Regular slots', p: 'Two lessons each week, about eight a month, at a fixed time agreed after the trial.' },
      { h3: 'Teachers in India', p: 'During daylight saving Traralgon is five and a half hours ahead of India time; from April to October the gap is four and a half.' }
    ],
    spec: { title: 'Times in local clock', p: 'We always quote lesson times in Traralgon time, so the twice-yearly clock change shifts our side of the call, not yours.' }
  },

  fees: {
    h2: 'Traralgon class fees',
    intro: 'The full pricing fits in three lines.',
    first: 'One free lesson, after which you get a recommended level, course and weekly time.',
    group: 'A month of group classes, normally eight, with fifteen to twenty learners at your level.',
    private: 'About eight private lessons a month on the same pattern, with your own teacher.',
    closer: 'Families outside India pay in US dollars, so Traralgon and Morwell pay the same as every other Australian town. No fee is charged until the trial has fixed a course and a slot; the pricing page covers holidays, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Reviews left on Google by our families',

  book: {
    h2: 'Book a free AI or programming lesson',
    intro: 'Say how old the learner is and what interests them. A younger teen might measure a dot to a line on paper first; an adult might start with the Latrobe path and the stop data.',
    success: 'Thank you. We will be in touch shortly about a Traralgon lesson.'
  },

  faq: {
    h2: 'Traralgon AI class questions',
    intro: 'Answers to what Latrobe Valley learners ask us most.',
    items: [
      { q: 'How many people live in Traralgon and Morwell?', a: 'The combined Traralgon and Morwell urban area had 43,252 residents at the 2021 Census, with a median age of 40.' },
      { q: 'What is a buffer zone in mapping?', a: 'A buffer zone is the area within a fixed distance of a feature such as a path. A point lies inside a 400 metre buffer when its shortest distance to the path is 400 metres or less.' },
      { q: 'What does the Traralgon project find?', a: 'Of 15 bus and train stop records in the area, 4 lie within 400 metres of the shared path as mapped, including both Morwell station records at 164 and 167 metres. The Traralgon Railway Station record is 2,210 metres from the nearest mapped section.' },
      { q: 'How long is the Traralgon to Morwell shared path?', a: 'Our measurement of the council\'s file gives 15.37 km across eight stages: 5.44 km recorded as completed, 5.85 km under construction and 4.09 km out to tender.' },
      { q: 'Do you help Victorian senior students?', a: 'Yes, with the programming and maths that sit behind senior subjects, organised around Victorian terms. School-assessed work stays entirely the student\'s own.' },
      { q: 'When are lessons for Traralgon learners?', a: 'Late afternoons on weekdays and Saturday mornings are common, settled at the trial and shown in Traralgon time. Our teachers are four and a half or five and a half hours behind, depending on daylight saving.' },
      { q: 'Can younger children learn with you?', a: 'Yes. Live classes start at age six with Scratch and drawing projects; the path project is designed for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Traralgon?', a: 'No. We have no premises in Australia and claim none; all classes are live online. Learners need a computer, sound and a steady internet connection, and our listed phone number is an Indian one.', boiler: true },
      { q: 'How much are Traralgon AI classes?', a: 'The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Everything is agreed before any payment.', boiler: true },
      { q: 'How many students are in each group?', a: 'From five to ten, grouped by level, pace and goals rather than age or town. If no group suits the learner\'s timetable, one-to-one classes are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More reading for Latrobe Valley learners',
    html: 'The state-wide guide is <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">coding and AI classes in Victoria</a>. Students heading into VCE computing can read <a class="cg-inline-link" href="/vce-algorithmics-hess-help">VCE Algorithmics help</a>, and anyone curious about thinking with AI should try <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learn to think, not just use AI tools</a>. Every Australian page is on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Traralgon and Victoria',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/vce-algorithmics-hess-help', label: 'VCE Algorithmics' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-trg .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3vw, 2.3rem); }
.cg-root.cg-trg .cg-hero h1 { font-weight: 780; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-trg .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.7rem 0 0.7rem 1rem; background: rgba(17, 110, 29, 0.04); }
.cg-root.cg-trg .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-trg .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-trg .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.85rem); }
.cg-root.cg-trg .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-trg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-trg .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-trg .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Traralgon - Morwell, ABS Census 2021 QuickStats, Significant Urban Area 2018 (read 8 October 2026): 43,252 people; median age 40; 11,185 families; 19,912 private dwellings; average 2.3 people per household; separate house 14,753 (86.1 percent; Victoria 73.4; Australia 72.3); flat or apartment 1,405 (8.2 percent; Victoria 12.1; Australia 14.2); Technicians and Trades Workers 2,802 (15.5 percent; Victoria 12.6; Australia 12.9); Bachelor Degree level and above 4,810 (13.6 percent; Victoria 29.2; Australia 26.3). Victorian Government school term dates: 2026 Term 4 Monday 5 October to Friday 18 December; 2027 Term 1 Wednesday 27 January (students start Thursday 28 January in government schools) to Thursday 25 March. IANA tz 2026e: Australia/Melbourne rule AV, daylight saving from the first Sunday in October to the first Sunday in April; Asia/Kolkata UTC+5:30.',
    localProject: 'Buffer zone by point-to-segment distance. Latrobe City Council, Latrobe Traralgon to Morwell Shared Path (data.gov.au, Creative Commons Attribution 2.5 Australia, metadata modified 2026-10-01), GeoJSON from the data.gov.au geoserver WFS: 8 MultiLineString features, 1,717 vertices, properties ID, Stage, Condition. Projected equirectangular about 38.2 S. Lengths: Stage 1A 670 m Completed, 1B 1,456 m Under Construction, 1C 633 m Completed, 2A 3,319 m Completed, 3A 3,613 m Under Construction, 3B 780 m Under Construction, 4 4,086 m Out to Tender, 5 816 m Completed; totals Completed 5.44 km, Under Construction 5.85 km, Out to Tender 4.09 km, all 15.37 km. Stops: Transport Victoria GTFS Schedule regional bus (folder 6) and regional train (folder 1) stops.txt, files dated 2026-10-02, inside 146.35 to 146.58 E and 38.17 to 38.26 S: 15 records (11 bus, 4 train). Nearest distance to any path segment (clamped projection): within 200 m 4, within 400 m 4, within 800 m 5; Morwell Bus Interchange/Commercial Rd 38 m; Morwell Railway Station 164 m; Morwell Station 167 m; Mid Valley Shopping Centre/Mid Valley Dr 591 m; Traralgon Railway Station 2,210 m. Thinning test: every vertex, vertex and segment distances within 1 m; every 10th vertex (184) vertex-only overstates by up to 14 m, segment distance moves up to 1 m; every 25th (82) vertex-only overstates by up to 12 m beyond segment, segment distance moves up to 22 m.',
    requiredMentions: [
      '43,252',
      '4,810',
      '19,912',
      '14,753',
      '2,802',
      '15.37 km',
      'Morwell Bus Interchange',
      '2,210 metres',
      '1,717',
      'Out to tender'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Traralgon - Morwell Significant Urban Area (2018): people, median age, families, dwellings, dwelling structure, occupation, education.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2018' },
      { claim: 'Latrobe City Council, Latrobe Traralgon to Morwell Shared Path (Creative Commons Attribution 2.5 Australia).', url: 'https://data.gov.au/data/dataset/latrobe-traralgon-to-morwell-shared-path' },
      { claim: 'Transport Victoria GTFS Schedule (CC BY 4.0), regional bus and regional train feeds.', url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule' },
      { claim: 'Victorian Government, school term dates and holidays.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'IANA time zone database, australasia file: Australia/Melbourne and rule AV.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Completion dates for any stage: the dataset gives a status, not dates, so none are stated.',
      'Walking times or routes between stops and the path: only straight-line distances were computed.',
      'Stop names that refer to health or care facilities: measured and counted but not printed, under the cluster rule against health content.',
      'Latrobe Valley local bus routes: not present in the regional feed files used, so only the stops that are present were measured and the page says the area has 15 stop records.',
      'Towns in Time population history for Traralgon (planning.vic.gov.au): returned 403 to automated reads and was not circumvented.',
      'Income, rent, ancestry, religion and health figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Latrobe City Council, Transport Victoria, the Victorian Government or the ABS.'
    ]
  }
};
