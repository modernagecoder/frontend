'use strict';
// St Asaph (cg- city page, UK cluster Phase 4, Wales). Spine: which way does the Vale of Clwyd face? Sobel gradients,
// slope, aspect and hillshading on OS Terrain 50 (50 m grid, tiles SH96-98, SJ06-08 and SJ16-18; a 30 km square from
// 290000E 360000N; read 23 September 2026; scratchpad sta2/sobel.py and side.py). Checks: Sobel on a test plane z = 0.1E
// + 0.05N returns 0.1000 and 0.0500 exactly; Sobel against a plain central difference, median absolute difference 0.12
// degrees, 95th percentile 1.30. Grid 600 by 600, no gaps, heights -2.7 to 554.5 m; the highest cell (316125E 362675N)
// is 70 m from the OS Open Names point for Moel Famau. Slope: median 2.30 degrees, 12.7 percent of cells over 10 degrees,
// 1.8 percent over 20. River Clwyd line from OS Open Rivers (name1 River Clwyd, name2 Afon Clwyd; known in 443 of 600
// rows). Cells steeper than 10 degrees, between 0.5 and 6 km of the river: west side 2,308 cells, circular mean facing
// 73.0 degrees, 32.8 percent facing east and 20.8 percent facing west; east side 12,605 cells, mean facing 260.2 degrees,
// 13.7 percent east and 39.2 percent west. Band 0.5 to 3 km: west 296 cells (mean 44.8), east 1,217 (mean 241.4, 63.3
// percent facing west). Band 3 to 8 km: west 4,167 (mean 42.0), east 15,695 (mean 275.9). Mean height, 0.5 to 6 km band:
// west 57 m, east 144 m. Neighbouring cells are not independent, so no p-value is quoted. Cathedral cell 35.7 m, ground
// within 1 km from 5.7 to 48.9 m. OS Open Rivers: the Elwy joins the Clwyd 2.3 km north of the St Asaph point.
// Lesson family: Sobel operator (image gradients), slope and aspect, hillshade, circular mean. Screened 23 September 2026:
// Sobel and hillshade 0 hits in src/pages and content/uk. Distinct from Durham (Bresenham line of sight), Ely
// (percolation) and Hull (flood fill), which used Terrain 50 differently.
// Heritage read raw 23 September 2026 from Cadw's listed building full reports (DataMapWales WFS, Cadw_ListedBuildings):
// record 1460 Cathedral Church of St Asaph, Grade I, designated 16 November 1962, 'At the top of the hill'; monastery
// founded by St Kentigern of Glasgow about 560, continued under St Asaph; see re-established 1143; rebuilding thought to
// have begun 1284 under Bishop Anian and continued until 1381; central tower added 1391/2 by Robert Fagan; burnt 10 years
// later by Owain Glyndwr; restoration completed under Bishop Redman 1482; top of the tower blown down on 2 February 1714;
// restoration 1867-75 by Sir George Gilbert Scott. Record 1461 Translator's Memorial, Grade II: to Bishop William Morgan
// and the translation of the Bible into Welsh, commissioned 1888 on the tercentenary, unveiled 22 April 1892; inscription
// gives 1588. Record 1447 St Kentigern and St Asaph Parish Church, Grade II*; record 1469 The Old Palace, Grade II*.
// Census 2021 via Nomis: St Asaph and Trefnant W02000051 5,301 usual residents, 175 communal, 761 students of 5,087 aged 5
// and over (15.0 percent), 165.8 per square km, 428 aged 70 to 74 of 5,297 (8.1 percent); Rhuddlan and Bodelwyddan
// W02000050 6,378, 1,032 of 6,099 (16.9 percent), 210.2; Denbighshire W06000004 95,817, 16,394 of 91,048 (18.0 percent),
// 114.5, 6,625 aged 70 to 74 (6.9 percent); Wales 3,107,494, 19.9 percent, 149.9, 5.8 percent aged 70 to 74.
// Kill gate: passed. St Asaph is very small (one MSOA shared with Trefnant), but Cadw's reports give a dated history and
// the terrain around the city supports an open-data project that no other page uses.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'ST ASAPH', blurb: 'The hilltop cathedral city in the Vale of Clwyd, with a project that reads which way the valley\'s slopes face from a height map.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-st-asaph',
  code: 'asa',
  accent: '#34246B',
  accentRationale: 'St Asaph: a deep indigo, from the solver (10.58:1 on every paper tint, dE 7.0 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'St Asaph',
    eyebrow: 'St Asaph, Denbighshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Denbighshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'St Asaph',
  title: 'Best Coding Classes in St Asaph | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for St Asaph learners aged 6 to 67, from Pen-rhewl and The Roe to Trefnant and Rhuallt. Your first lesson is free.',
  ogDescription: 'Coding and AI lessons for St Asaph, on a page that runs the Sobel operator over an Ordnance Survey height map to find which way the Vale of Clwyd faces.',
  twitterDescription: 'St Asaph learners from six to sixty-seven can learn coding, Python, maths and AI with us in live online lessons, beginning with a free one.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'St Asaph Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, maps and image processing, mathematics and AI taught live online in English to St Asaph children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in St Asaph',
  capsuleQ: 'What are the best coding classes in St Asaph?',
  capsule: 'St Asaph and Trefnant, the middle-layer area that includes the city, had 5,301 usual residents at the 2021 census, at 165.8 people per square kilometre. Cadw\'s listing for the cathedral records a monastery founded by St Kentigern about 560. St Asaph learners from six to sixty-seven have live video lessons with our teachers in India, either one to one or in a class of five to ten at one level, timed around Welsh school days and working hours. There is no fee for the opening lesson; after it, a place in a class is USD 100 a month and one-to-one teaching is USD 150 a month.',
  lead: 'Cadw describes St Asaph\'s cathedral as standing at the top of the hill, and the city sits in the Vale of Clwyd with high ground on both sides. Our St Asaph project asks which way those slopes face. Teenagers load Ordnance Survey\'s 50 metre height grid for a 30 kilometre square, 360,000 heights in all, and run the Sobel operator, a small grid of weights that image software uses to find edges, to work out how steeply and in which direction the ground falls at every point. Within 6 km of the River Clwyd, the eastern side has more than five times as many steep cells as the western side, and they face west, down into the vale.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in St Asaph.',

  picks: {
    eyebrow: 'Course picks for St Asaph',
    h2: 'Four courses for the city in the vale',
    intro: 'Start from whatever the learner enjoys today and pick the closest course. Each one begins with a free live lesson, booked without card details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, from simple games to drawing a hill that shades itself as a light moves.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Gradients, angles and grids worked out in short programs, the geometry behind every slope on a map.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to full projects, enough to read an Ordnance Survey height grid and run image filters over it.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Python for adults working with maps, photographs or scans, where edges and gradients carry the useful information.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'St Asaph today',
      h2: 'A very small city in a rural county',
      intro: 'Results from the 2021 census, published by the Office for National Statistics through Nomis, for the middle-layer areas the House of Commons Library calls St Asaph and Trefnant, and Rhuddlan and Bodelwyddan, alongside Denbighshire and Wales.',
      body: [
        { kind: 'table', caption: 'St Asaph and its neighbours in the 2021 census', head: ['Area', 'Usual residents', 'Students among those aged 5 and over', 'Residents per square kilometre'], rows: [
          ['St Asaph and Trefnant', '5,301', '15.0%', '165.8'],
          ['Rhuddlan and Bodelwyddan', '6,378', '16.9%', '210.2'],
          ['Denbighshire', '95,817', '18.0%', '114.5'],
          ['Wales', '3,107,494', '19.9%', '149.9']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The city\'s area', p: 'St Asaph and Trefnant had 175 residents in communal establishments, and 761 of its 5,087 residents aged five and over were in full-time education.' },
          { h3: 'Early seventies', p: 'In St Asaph and Trefnant, 8.1% of residents were aged 70 to 74, against 6.9% across Denbighshire and 5.8% in Wales.' },
          { h3: 'Down the vale', p: 'Rhuddlan and Bodelwyddan, to the north, is the more densely settled neighbour, with 210.2 residents per square kilometre.' }
        ] },
        { kind: 'p', text: 'Each percentage is taken from its own census table, since every table is adjusted separately for privacy. Our St Asaph classes bring together the city and the villages of the vale. A Pen-rhewl seven-year-old building a first game, a Year 10 student from The Roe starting WJEC GCSE Computer Science and a Tremeirchion adult learning Python to organise a photo archive might each join a different class, grouped by level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'The cathedral on the hill',
      h2: 'Fifteen centuries in one listing report',
      intro: 'Dates below are from Cadw\'s full report for the Cathedral Church of St Asaph, record 1460, listed at Grade I on 16 November 1962.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'About 560', p: 'Cadw records that the monastery was founded by St Kentigern of Glasgow and continued under St Asaph, and that the see was re-established in 1143, when a Norman cathedral was built.' },
          { h3: '1391 to 1482', p: 'A central tower was added in 1391 or 1392 by Robert Fagan; about ten years later the cathedral was burnt by Owain Glyndwr, and restoration was completed under Bishop Redman in 1482.' },
          { h3: '2 February 1714', p: 'Cadw notes that the top of the tower was blown down on that day. The full restoration came between 1867 and 1875 under Sir George Gilbert Scott.' }
        ] },
        { kind: 'p', text: 'Just north of the cathedral stands the Translator\'s Memorial, listed at Grade II (Cadw record 1461). Cadw describes it as a monument to Bishop William Morgan and the translation of the Bible into Welsh, commissioned in 1888 on the tercentenary and unveiled on 22 April 1892; its inscription gives the year 1588. Cadw also lists the parish church of St Kentigern and St Asaph and the Old Palace, below the cathedral, at Grade II*, and its register of historic landscapes includes the Vale of Clwyd itself. We have no connection with Cadw or the cathedral, and the history here is Cadw\'s.' },
        { kind: 'spec', title: 'Where the height data comes from', p: 'OS Terrain 50 is Ordnance Survey\'s free height model of Great Britain, one height for every 50 metre square. Its highest point in our 30 kilometre square is 554.5 metres, 70 metres from the spot Ordnance Survey\'s gazetteer names Moel Famau.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which way does the Vale of Clwyd face?',
      intro: 'The Sobel operator looks at the eight neighbours of every cell, weighting the nearest ones twice as heavily, and returns how fast the height changes towards the east and towards the north. From those two numbers come the slope and the direction the ground faces.',
      body: [
        { kind: 'table', caption: 'Cells steeper than 10 degrees, OS Terrain 50, measured from the River Clwyd as drawn in OS Open Rivers', head: ['Distance from the river', 'Side', 'Steep cells', 'Average direction faced', 'Facing east', 'Facing west'], rows: [
          ['0.5 to 6 km', 'West of the Clwyd', '2,308', '73 degrees (east)', '32.8%', '20.8%'],
          ['0.5 to 6 km', 'East of the Clwyd', '12,605', '260 degrees (west)', '13.7%', '39.2%'],
          ['0.5 to 3 km', 'East of the Clwyd', '1,217', '241 degrees (south-west)', '9.0%', '63.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Test on a known slope', p: 'Before touching real data, run Sobel over a made-up tilted plane. It returns the exact gradients, 0.1 east and 0.05 north, so the code and the scaling are right.' },
          { h3: '2. Slope and direction', p: 'Turn the two gradients into a slope angle and a compass direction for all 360,000 cells. Only 12.7% of the square is steeper than 10 degrees, and 1.8% steeper than 20.' },
          { h3: '3. Average an angle properly', p: 'Directions wrap around: the average of 350 and 10 degrees is north, not south. So average them as arrows, adding up their east and north parts, which is called a circular mean.' }
        ] },
        { kind: 'callout', h3: 'A lopsided valley', p: 'The two sides of the vale are not mirror images. Within 6 km of the river, the eastern side has 12,605 steep cells and an average height of 144 metres; the western side has 2,308 steep cells and averages 57 metres. The steep eastern slopes face west, into the vale, whichever distance band we use, and on the nearest band, 0.5 to 3 km, 63.3% of them face west. The gentler western side leans east, towards the river, but less decisively. Neighbouring cells on a slope are not independent evidence, so we give no p-value; the consistency across every band is the evidence.' },
        { kind: 'p', text: 'Hillshading uses the same numbers to draw the land: pick a direction for an imaginary sun, work out how squarely each cell faces it, and shade the cell by that amount. A learner who lights the vale from the west sees the eastern hills glow and the western side fade, the same asymmetry the table describes. Checking Sobel against a simpler two-point difference gives a median disagreement of just 0.12 degrees, so the pattern is not an artefact of the method.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reading a height map',
      h2: 'Five checks before trusting a slope map',
      intro: 'Learned on the Vale of Clwyd, then used for photographs, medical scans, satellite images and any grid of numbers where edges and gradients carry meaning.',
      body: [
        { kind: 'table', caption: 'Decisions behind the St Asaph terrain study', head: ['Question', 'For the Vale of Clwyd', 'What goes wrong if you skip it'], rows: [
          ['Is the code right?', 'Sobel tested on a plane with known gradients', 'A scaling slip that makes every slope wrong'],
          ['Which way is north?', 'Grid rows run north to south, so the sign is flipped', 'Every slope reported facing the wrong way'],
          ['How are directions averaged?', 'A circular mean of arrows', 'North-facing slopes averaging to south'],
          ['What counts as a side?', 'Bands measured from the river line', 'Distant hills mixed in with the valley walls'],
          ['Are the cells independent?', 'No p-value; bands compared instead', 'A tiny p-value from thousands of look-alike cells']
        ] },
        { kind: 'p', text: 'The second row is the easiest to get wrong. A height grid is stored with its top row in the north, so moving down a row means moving south. Forgetting to flip that sign turns every north-facing slope into a south-facing one, and the result still looks perfectly plausible. The plane test in step one is what exposes it.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Building a hill from numbers on squared paper, then shading the squares that face a torch held to one side.' },
          { h3: 'Teenagers', p: 'Grids, image filters, the Sobel operator and circular statistics in Python, on Ordnance Survey height data.' },
          { h3: 'Adults', p: 'Edge detection and gradients for photographs, scans or maps, with the method tested before it is trusted.' }
        ] },
        { kind: 'p', text: 'We have no connection with Ordnance Survey, Cadw, St Asaph Cathedral or Denbighshire County Council. The height grid, river network and census tables are published openly; the gradients, directions and shading on this page are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From squared paper to the Sobel operator',
    intro: 'Treat the ages as a rough guide; the free lesson shows the right starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Grids and shading', p: 'Drawing on a grid in block code and colouring squares by a simple rule.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Gradients by hand', p: 'Rise over run, angles and small grids of numbers in Python, with a program that finds the steepest step.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Image filters', p: 'The Sobel operator, slope, aspect, hillshading and circular means on real Ordnance Survey data.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Images at work', p: 'Edges, gradients and filters on photographs, scans and maps, tested against a known answer first.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Image AI sees edges in everything. Why should a St Asaph teenager build an edge detector by hand?',
    intro: 'Because the first layers of many image systems do something very like the Sobel operator, and understanding it removes the mystery.',
    p1: 'The Sobel operator is a nine-number grid slid across an image. Convolutional networks learn thousands of grids like it, and the earliest ones often end up resembling edge detectors. A learner who has written one by hand, and run it over a real valley, has seen from the inside what those systems start with.',
    p2: 'The sign trap is the other lesson. A flipped north would make every slope face the wrong way while the map still looked sensible. AI output can be wrong in exactly that confident, plausible way, and only a test against a known answer, like the tilted plane, catches it.',
    closer: 'So a St Asaph teenager should keep learning to code in 2026, in a city whose cathedral tower Cadw records being blown down in 1714: machines can read images now, but someone has to check which way is up.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Pen-rhewl, Trefnant or Rhuallt, and the same class',
    intro: 'St Asaph is small, and many learners live in the villages across the vale and on the hills around it. Online, each of them is as near to the lesson as the cathedral.',
    cells: [
      { h3: 'City and vale', p: 'A learner in Nant-y-Patrick and another in Waen Goleugoed can share a class without anyone crossing the Clwyd.' },
      { h3: 'Welsh school stages', p: 'Our levels follow Welsh school years and the Curriculum for Wales, and we use WJEC GCSE and A level course names; lessons are taught in English.' },
      { h3: 'The first session', p: 'The free lesson has the learner build something real, then the teacher recommends a level, a course and a weekly time. No card is ever asked for.' },
      { h3: 'One level to a class', p: 'Five to ten learners at the same stage, from St Asaph, the rest of the UK and abroad, so every level has workable times.' },
      { h3: 'Two lessons a week', p: 'Two fixed lessons weekly, about eight a month, with school holidays and exam weeks agreed with the teacher beforehand.' },
      { h3: 'Late evenings in India', p: 'India keeps one time all year, so a 5 pm lesson in St Asaph begins at half past nine at night for our teachers in summer and half past ten in winter.' }
    ],
    spec: { title: 'Across North Wales', p: 'Learners in Rhyl, Denbigh, Ruthin or Prestatyn join exactly the same classes, because all lessons are online and classes are grouped by level.' }
  },

  fees: {
    h2: 'St Asaph lesson fees',
    intro: 'Your first lesson is free, then there is a single monthly fee.',
    first: 'A full lesson at no cost, ending with a recommended level, course and weekly time.',
    group: 'About eight live lessons a month in a class of five to ten learners at one stage.',
    private: 'About eight live lessons a month, with the teacher working with your learner alone.',
    closer: 'Families in Tremeirchion or Cwm pay in US dollars, as all families outside India do, and pound prices never appear on our site. Billing starts only after the free lesson, once a course and a weekly time have been agreed with us; the pricing page covers pausing, missed lessons and changing between a class and one-to-one lessons.'
  },

  reviewsH2: 'Six Google reviews from families, as written',

  book: {
    h2: 'Book a free lesson for a St Asaph learner',
    intro: 'The first lesson matches the learner: a shading game on a grid for a young child, a short Python program that finds the steepest step in a row of heights for a beginner, or Ordnance Survey\'s height map and the Sobel operator for a teenager ready for image processing.',
    success: 'Thank you. We will be in touch soon to arrange the lesson for your St Asaph learner.'
  },

  faq: {
    h2: 'St Asaph coding class questions',
    intro: 'What St Asaph families ask us most.',
    items: [
      { q: 'How many people live in St Asaph?', a: 'Census 2021 counted 5,301 usual residents in St Asaph and Trefnant, the middle-layer area that includes the city, at 165.8 people per square kilometre. Denbighshire as a whole had 95,817.' },
      { q: 'How does Denbighshire compare with Wales?', a: 'Denbighshire is more thinly settled, at 114.5 residents per square kilometre against 149.9 for Wales, and 6.9% of its residents were aged 70 to 74 in 2021, against 5.8% in Wales.' },
      { q: 'What is the Sobel operator?', a: 'A small three-by-three grid of weights slid across an image or a height map. It measures how fast values change across and down the grid, which gives the steepness and direction of every slope, or the edges in a picture.' },
      { q: 'Which way do the slopes of the Vale of Clwyd face?', a: 'Within 6 km of the River Clwyd, the eastern side has 12,605 cells steeper than 10 degrees and they face west on average, into the vale. The western side has 2,308 steep cells, which lean east. The valley is steeper and higher on its eastern side.' },
      { q: 'Where does the height data come from?', a: 'From OS Terrain 50, Ordnance Survey\'s free height model with one value for every 50 metre square, and the river line from OS Open Rivers. We are not connected with Ordnance Survey.' },
      { q: 'How old is St Asaph Cathedral?', a: 'Cadw\'s listing report records a monastery founded by St Kentigern about 560 and a see re-established in 1143, with the building rebuilt and restored many times since, most fully between 1867 and 1875. It is listed at Grade I.' },
      { q: 'When do St Asaph lessons happen?', a: 'Families in St Asaph usually take an after-school slot, a weekday evening or a weekend morning, fixed in the free lesson. Our teachers in India are four and a half hours ahead of Wales in British Summer Time and five and a half hours ahead in winter.' },
      { q: 'Is there a centre in St Asaph?', a: 'No. We have no St Asaph centre and no premises anywhere in the UK, as every lesson is live online. Learners need a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do St Asaph lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one teaching on the same timetable is USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than age or where they live, with five to ten learners at the same stage. If no group suits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Wales and the UK',
    h2: 'Wales and beyond',
    html: 'Along the coast, the <a class="cg-inline-link" href="/best-coding-class-in-bangor-wales">Bangor page</a> asks whether Anglesey\'s sunshine changed or only the instrument measuring it, and in the south <a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea</a> hunts for the moment roadside air changed. Learners taking <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> or <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC GCSE Digital Technology</a> have pages of their own. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales guide</a> explains how our levels fit Welsh schooling, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> leads to every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'St Asaph and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-bangor-wales', label: 'Bangor' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE Computer Science' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-asa .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.55rem); }
.cg-root.cg-asa .cg-hero h1 { font-weight: 730; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-asa .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-asa .cg-eyebrow { letter-spacing: 0.15em; font-weight: 660; text-transform: uppercase; }
.cg-root.cg-asa .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-asa .cg-grid-3 { gap: clamp(1rem, 2.7vw, 2.2rem); }
.cg-root.cg-asa .cg-table th { letter-spacing: 0.026em; }
.cg-root.cg-asa .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-asa .cg-ladder-col { border-top: 3px dashed var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-asa .cg-callout { border-left-width: 5px; border-radius: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Census 2021 via Nomis. St Asaph and Trefnant W02000051: TS001 5,301 usual residents, 175 communal; TS068 761 of 5,087 aged 5 and over (15.0 percent); TS006 165.8; TS007A 428 aged 70 to 74 of 5,297 (8.1 percent). Rhuddlan and Bodelwyddan W02000050 6,378, 1,032 of 6,099 (16.9 percent), 210.2. Denbighshire W06000004 95,817, 16,394 of 91,048 (18.0 percent), 114.5, 6,625 aged 70 to 74 (6.9 percent). Wales 3,107,494, 19.9 percent, 149.9, 5.8 percent aged 70 to 74. Cadw records 1460 (cathedral, Grade I, 16 November 1962; Kentigern about 560; 1143; 1391/2; Glyndwr; 1482; 2 February 1714; 1867-75), 1461 (Translator\'s Memorial, Grade II; 1888; 22 April 1892; 1588), 1447 and 1469 (Grade II*).',
    localProject: 'Which way does the Vale of Clwyd face? OS Terrain 50, 30 km square, 360,000 cells; Sobel gradients checked on a plane (exact) and against central differences (median 0.12 degrees). Steep cells (over 10 degrees) 0.5 to 6 km from the River Clwyd: west 2,308, mean facing 73 degrees, 32.8 percent east, 20.8 percent west, mean height 57 m; east 12,605, mean facing 260 degrees, 13.7 percent east, 39.2 percent west, mean height 144 m. 0.5 to 3 km east: 1,217 cells, 63.3 percent facing west. Highest cell 554.5 m, 70 m from OS Open Names Moel Famau. No p-value (spatial dependence). Lesson family: Sobel operator, slope, aspect, hillshade, circular mean.',
    requiredMentions: [
      '5,301',
      '165.8',
      'Sobel',
      'hillshading',
      'Moel Famau',
      'Clwyd',
      'Glyndwr',
      'Trefnant',
      'Pen-rhewl',
      'Rhuallt',
      'Tremeirchion',
      'Nant-y-Patrick'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001: St Asaph and Trefnant 5,301; Rhuddlan and Bodelwyddan 6,378; Denbighshire 95,817; Wales 3,107,494.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=W02000051,W02000050,W06000004,W92000004' },
      { claim: 'Nomis, Census 2021 TS007A: age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=W02000051,W02000050,W06000004,W92000004' },
      { claim: 'Nomis, Census 2021 TS068: students among usual residents aged 5 and over.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=W02000051,W02000050,W06000004,W92000004' },
      { claim: 'Nomis, Census 2021 TS006: population density.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=W02000051,W02000050,W06000004,W92000004' },
      { claim: 'House of Commons Library, MSOA Names: St Asaph and Trefnant; Rhuddlan and Bodelwyddan.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'Ordnance Survey, OS Terrain 50: 50 metre height grid.', url: 'https://www.ordnancesurvey.co.uk/products/os-terrain-50' },
      { claim: 'Ordnance Survey, OS Open Rivers: River Clwyd and River Elwy.', url: 'https://www.ordnancesurvey.co.uk/products/os-open-rivers' },
      { claim: 'Ordnance Survey, OS Open Names: St Asaph, nearby places and Moel Famau.', url: 'https://www.ordnancesurvey.co.uk/products/os-open-names' },
      { claim: 'Cadw full report, listed building 1460: Cathedral Church of St Asaph.', url: 'http://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=1460' },
      { claim: 'Cadw full report, listed building 1461: Translator\'s Memorial.', url: 'http://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=1461' },
      { claim: 'DataMapWales, Cadw listed buildings layer: records 1447 and 1469.', url: 'https://datamap.gov.wales/layers/inspire-wg:Cadw_ListedBuildings' },
      { claim: 'DataMapWales, Cadw historic landscapes layer: The Vale of Clwyd (Dyffryn Clwyd).', url: 'https://datamap.gov.wales/layers/inspire-wg:Cadw_HistoricLandscapes' }
    ],
    rejectedClaims: [
      'St Asaph Cathedral\'s own website returned 403 for every page tried, not circumvented; cathedral history comes from Cadw.',
      'A p-value for the difference between the two sides of the vale: neighbouring cells are not independent, so none is quoted.',
      'Names for the upland areas on either side of the vale: not taken from a fetched source, apart from Moel Famau in OS Open Names.',
      'The cost of the Translator\'s Memorial: a sum in pounds, left out under the site\'s currency rule.',
      'Welsh language and national identity figures: not used, in line with the cluster rules on identity data.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Ordnance Survey, Cadw, St Asaph Cathedral or Denbighshire County Council.'
    ]
  }
};
