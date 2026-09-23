'use strict';
// St Davids (cg- city page, UK cluster Phase 4, Wales). Spine: why does GPS put St Davids Cathedral 83 metres from where
// the National Grid says it is? National Grid to latitude and longitude on the Airy 1830 ellipsoid, then a seven-parameter
// Helmert transformation to WGS84, following Ordnance Survey's 'A Guide to Coordinate Systems in Great Britain' (v3.6,
// 2020; PDF read 23 September 2026; scratchpad std/helm.py). Checks: Annex C worked example (651409.903E 313177.270N)
// reproduced to 52 39 27.2531 N, 1 43 04.5177 E; Annex D Helmert example reproduced to 3790269.549, -110038.064,
// 5111050.261 m and 53 36 42.2972 N, 1 39 46.5416 W, 422297.792E 412878.741N. Table 4 parameters (ETRS89 to OSGB36):
// tX -446.448, tY +125.157, tZ -542.060 m, s +20.4894 ppm, rX -0.1502, rY -0.2470, rZ -0.8421 sec; reversed by changing
// all signs. The guide: a single Helmert gives errors of up to 3 m (95 percent) in plan and 3.5 m plan and height; OSTN15
// is the national standard. Validation: Environment Agency hydrology stations (9,536 with easting, northing, lat and long):
// our Helmert WGS84 vs the EA's published lat/long, median 1.01 m, 95th percentile 1.81 m, maximum 2.21 m; the EA's method
// is not stated. Skipping the datum change (OSGB36 lat/long used as if GPS): median 110.2 m, range 85.0 to 138.2 m. St
// Davids Cathedral (Cadw 175156E 225430N): OSGB36 51.881579, -5.267318; WGS84 51.881976, -5.268343; shift 44.3 m north
// and 70.5 m west, 83.2 m in all.
// Lesson family: coordinate reference systems, Transverse Mercator inverse, ellipsoids, Helmert transformation,
// validation against worked examples. Screened 23 September 2026: Helmert, OSTN15 and Airy 0 hits in src/pages and
// content/uk.
// Heritage read raw 23 September 2026 from Cadw full reports (DataMapWales WFS): 12537 Cathedral of St Davids, Grade I,
// 1 March 1963: substantially of 1180-1220 by Bishop Peter de Leia; fall of the central tower in 1220; rebuilt by 1250;
// east lancets repaired after earthquake damage 1248; restored principally by Sir G G Scott 1862-78; west front rebuilt
// by J Nash 1793, restored by Scott. 12558 The Bishop's Palace, Grade I: started about 1200, substantially built under
// Bishop Bek (1280-96) and Bishop Gower (1328-47); ruination began with stripping of lead from the Great Hall under
// Bishop Barlow (1536-48); now roofless. 12541 Porth-y-Twr, Grade I: 14th-century bell tower with a gate, possibly 15th
// century; bell tower restored 1929 by W D Caroe. 12575 The City Cross, Grade II*. OS Open Names: name1 Tyddewi (Welsh),
// name2 St Davids (English), City, Pembrokeshire; nearby Clegyr-Boia, Trevinert, Caerfarchell, Whitesands Bay (Porth
// Mawr), Rhodiad-y-Brenin, Treleddyd-fawr, Upper Solva.
// Census 2021 via Nomis: St Davids and Letterston W02000128 7,238 usual residents, 253 communal, 987 students of 6,978 aged
// 5 and over (14.1 percent), 34.9 per square km, 545 aged 70 to 74 of 7,236 (7.5 percent), 624 aged 65 to 69 (8.6
// percent); Pembrokeshire W06000009 123,360, 19,834 of 117,777 (16.8 percent), 76.2, 8,825 aged 70 to 74 (7.2 percent);
// Wales 3,107,494, 19.9 percent, 149.9, 5.8 percent aged 70 to 74.
// Kill gate: passed. St Davids is tiny, but Cadw's reports give a dated cathedral and palace history, and the project
// uses a nationwide validation set rather than local data alone.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'ST DAVIDS', blurb: 'Pembrokeshire\'s cathedral city, with a project that works out why GPS and the National Grid disagree by 83 metres.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-st-davids',
  code: 'std',
  accent: '#722277',
  accentRationale: 'St Davids: a plum purple, from the solver (7.71:1 on every paper tint, dE 7.6 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'St Davids',
    eyebrow: 'St Davids, Pembrokeshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Pembrokeshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'St Davids',
  title: 'Best Coding Classes in St Davids | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for St Davids learners aged 6 to 67, from Caerfarchell and Trevinert to Whitesands. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for St Davids, on a page that converts Ordnance Survey grid references to GPS coordinates and finds the cathedral moves 83 metres.',
  twitterDescription: 'St Davids learners from six to sixty-seven can learn coding, Python, maths and AI with us in live online lessons, and the first lesson is free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'St Davids Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, maps and coordinate geometry, mathematics and AI taught live online in English to St Davids children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in St Davids',
  capsuleQ: 'What are the best coding classes in St Davids?',
  capsule: 'St Davids and Letterston, the middle-layer area that contains the city, had 7,238 usual residents at the 2021 census and only 34.9 people per square kilometre. Cadw\'s listing dates most of St Davids Cathedral to between 1180 and 1220. Anyone from six to sixty-seven in and around St Davids can join: a teacher in India runs each lesson over a video call, one to one or with five to ten learners at a single level, fitted around the Welsh school day and working hours. The first lesson is free; after it, a class place is USD 100 a month and a teacher to themselves USD 150 a month.',
  lead: 'Ordnance Survey\'s gazetteer calls the city Tyddewi and St Davids, and gives its position on the National Grid. A phone\'s GPS gives a latitude and longitude. Put the grid position through the wrong conversion and St Davids Cathedral lands 83.2 metres away, 44.3 metres north and 70.5 metres west of where GPS would place it. Our St Davids project builds the right conversion from Ordnance Survey\'s own guide: grid to latitude and longitude on the Airy ellipsoid, then a seven-number Helmert transformation to the system GPS uses. Tested against 9,536 Environment Agency gauging stations, it agrees with their published coordinates to within 2.21 metres everywhere.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in St Davids.',

  picks: {
    eyebrow: 'Course picks for St Davids',
    h2: 'Four courses for Pembrokeshire\'s cathedral city',
    intro: 'Choose whichever course is closest to what the learner enjoys now. Each starts with a free live lesson, and booking needs no card.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, from treasure-map games with grid squares to simple animations.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Coordinates, angles and trigonometry worked out in short programs, the mathematics inside every map and GPS.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to full projects, enough to turn Ordnance Survey\'s coordinate formulae into working, tested code.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Python for adults who work with locations, maps or GPS data and need positions that line up across systems.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'St Davids today',
      h2: 'A tiny city in a thinly settled county',
      intro: 'Census 2021 results from the Office for National Statistics, taken from Nomis, for the middle-layer area the House of Commons Library calls St Davids and Letterston, with Pembrokeshire and Wales for comparison.',
      body: [
        { kind: 'table', caption: 'Census 2021 counts for the St Davids area', head: ['Where', 'People living there', 'In full-time education (aged 5 and over)', 'People per square kilometre'], rows: [
          ['St Davids and Letterston', '7,238', '14.1%', '34.9'],
          ['Pembrokeshire', '123,360', '16.8%', '76.2'],
          ['Wales', '3,107,494', '19.9%', '149.9']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Space around the city', p: 'The St Davids and Letterston area has 34.9 residents per square kilometre; Pembrokeshire as a whole averages 76.2, and Wales 149.9.' },
          { h3: 'An older population', p: 'In St Davids and Letterston, 8.6% of residents were aged 65 to 69 and 7.5% were aged 70 to 74; across Wales, 5.8% were aged 70 to 74.' },
          { h3: 'Learners at home', p: 'Of the area\'s 6,978 residents aged five and over, 987 were in full-time education, and 253 people lived in communal establishments.' }
        ] },
        { kind: 'p', text: 'Each percentage comes from its own census table, because the tables are adjusted separately for privacy. Our St Davids classes take in the city and the scattered settlements of the peninsula. A Caerfarchell eight-year-old making a first game, a Year 11 student near Clegyr-Boia preparing for WJEC GCSE Computer Science and a Trevinert adult learning Python to map walking routes could each join a different class, placed by level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Cathedral and palace',
      h2: 'A cathedral rebuilt after a fall and an earthquake',
      intro: 'Dates below come from Cadw\'s full listing reports for the Cathedral of St Davids (record 12537), the Bishop\'s Palace (12558) and Porth-y-Twr (12541), all listed at Grade I.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1180 to 1220', p: 'Cadw describes the present cathedral as substantially of these years, built by Bishop Peter de Leia, who was responsible for the nave, its arcades and much of the transepts and choir aisles.' },
          { h3: '1220 and 1248', p: 'The central tower fell in 1220, bringing down the choir and transepts, which were rebuilt by 1250; the east windows of the presbytery were repaired after earthquake damage in 1248.' },
          { h3: 'About 1200', p: 'The Bishop\'s Palace was begun around 1200 and largely built under Bishop Bek (1280 to 1296) and Bishop Gower (1328 to 1347). Stripping the lead from its Great Hall, under Bishop Barlow, began its ruin.' }
        ] },
        { kind: 'p', text: 'Cadw records that the cathedral was restored mainly by Sir George Gilbert Scott between 1862 and 1878, and that the west front is Scott\'s re-creation of the Norman original after a rebuilding by John Nash in 1793. Porth-y-Twr is a 14th-century bell tower with an attached fortified gate, possibly of the 15th century; Cadw records that the tower was restored in 1929 by W D Caroe. Cadw also lists the City Cross at Grade II*. We have no connection with Cadw or St Davids Cathedral, and the history here is taken from Cadw\'s reports.' },
        { kind: 'spec', title: 'Where the coordinates come from', p: 'Cadw\'s listing data gives the cathedral a National Grid position of 175156 east, 225430 north. Ordnance Survey\'s guide to coordinate systems supplies the ellipsoids, projection constants and Helmert parameters, and the Environment Agency publishes both grid references and latitudes and longitudes for its gauging stations.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Why does GPS move the cathedral 83 metres?',
      intro: 'The National Grid is drawn on an ellipsoid called Airy 1830, fitted to Britain in the 19th century. GPS uses a different ellipsoid, positioned for the whole Earth. The same latitude and longitude therefore name two different spots, and converting between them is a three-step job.',
      body: [
        { kind: 'table', caption: 'Converting Ordnance Survey grid references to GPS latitude and longitude, compared with the Environment Agency\'s published coordinates for 9,536 gauging stations', head: ['Method', 'Typical gap', 'Worst 5% start at', 'Largest gap'], rows: [
          ['Grid to latitude and longitude, no change of ellipsoid', '110.2 m', 'not needed', '138.2 m'],
          ['Grid to latitude and longitude, then a Helmert transformation', '1.01 m', '1.81 m', '2.21 m']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Undo the map projection', p: 'Turn easting and northing back into latitude and longitude on the Airy ellipsoid, using the Transverse Mercator formulae in Ordnance Survey\'s guide. Our code reproduces the guide\'s worked example to four decimal places of a second.' },
          { h3: '2. Move to 3D', p: 'Convert latitude and longitude into X, Y and Z coordinates from the centre of the Earth, so both ellipsoids can be compared in the same space.' },
          { h3: '3. Shift, stretch and turn', p: 'Apply seven numbers from the guide, three shifts, a scale change and three tiny rotations, then convert back to latitude and longitude on the GPS ellipsoid. The guide\'s Helmert example comes out exactly.' }
        ] },
        { kind: 'callout', h3: 'How good is a Helmert transformation?', p: 'Ordnance Survey\'s guide says a single Helmert transformation gives errors of up to 3 metres (95%) in position, because the old triangulation behind the National Grid bends slightly from place to place; its exact national method, OSTN15, uses a grid of corrections instead. Our test agrees: against the Environment Agency\'s published coordinates, the median gap is 1.01 metres and the largest 2.21 metres. We do not know which method the Agency used, so this is agreement with a trusted list, not a proof of accuracy. Skipping the change of ellipsoid entirely puts every station between 85.0 and 138.2 metres out.' },
        { kind: 'p', text: 'At St Davids Cathedral the conversion moves the point 44.3 metres north and 70.5 metres west, 83.2 metres in all. That is less than the smallest shift among the English gauges, a reminder that the gap between the two systems varies across Britain. For anyone following GPS directions to a door, 83 metres is the difference between arriving and not.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Working with coordinates',
      h2: 'Five checks before trusting a position',
      intro: 'Learned on St Davids, then used for delivery apps, drone flights, field surveys, sports tracking and any program that mixes maps from different sources.',
      body: [
        { kind: 'table', caption: 'Decisions behind the St Davids coordinate project', head: ['Question', 'For St Davids', 'What goes wrong if you skip it'], rows: [
          ['Which system is each number in?', 'Grid on Airy 1830, GPS on its own ellipsoid', 'Two positions for one place, 83 metres apart'],
          ['Does the code match the source?', 'Both worked examples in the guide reproduced', 'A formula typed wrongly and never noticed'],
          ['Which way do the rotations turn?', 'Signs taken from the guide, then reversed as it says', 'An answer that doubles the error'],
          ['How accurate is the method?', 'Helmert: up to 3 metres, as the guide warns', 'A 2 metre error treated as exact'],
          ['Tested on real data?', '9,536 Environment Agency stations', 'Code that passes one example but fails elsewhere']
        ] },
        { kind: 'p', text: 'The third row is a genuine trap. Ordnance Survey\'s guide warns that two opposite conventions exist for the rotation angles, and the parameters it lists run from GPS towards the National Grid. Going the other way means changing the sign of all seven numbers. Get it wrong and the rotations push the point the wrong way; the worked example is what confirms the direction.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Finding squares on a grid map, then discovering that two maps with different grids give the same place different numbers.' },
          { h3: 'Teenagers', p: 'Trigonometry, series expansions and matrix transformations in Python, tested against Ordnance Survey\'s worked examples.' },
          { h3: 'Adults', p: 'Combining location data from different sources without silent shifts, with every conversion checked against a known answer.' }
        ] },
        { kind: 'p', text: 'We have no connection with Ordnance Survey, the Environment Agency, Cadw, St Davids Cathedral or Pembrokeshire County Council. The guide, station list, listing data and census tables are published openly; the conversions and comparisons on this page are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From grid squares to the Helmert transformation',
    intro: 'The ages are only a guide; the free lesson finds the right starting step.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Grids and maps', p: 'Grid references, treasure maps and moving a sprite by coordinates in block code.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Coordinates in Python', p: 'Distances, angles and simple conversions between two made-up grids, written as short programs.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Real map projections', p: 'Transverse Mercator, ellipsoids and the Helmert transformation, each step tested against Ordnance Survey\'s examples.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Ages 18 to 67', h3: 'Location data at work', p: 'Merging GPS tracks, map layers and addresses in Python without positions drifting apart.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can write a coordinate converter in seconds. Why should a St Davids teenager build one?',
    intro: 'Because an 83 metre mistake looks exactly like a correct answer until you test it.',
    p1: 'A chatbot asked to convert a grid reference will often return a latitude and longitude with confident decimals. Whether it changed ellipsoid, and which way it turned the rotations, is invisible in the answer. A learner who has reproduced Ordnance Survey\'s worked examples knows to ask for that test before trusting any converter, human or machine.',
    p2: 'The project also teaches the difference between precise and accurate. Our answers carry six decimal places, yet the method is only good to about two metres. Saying how accurate a result really is, not just how many digits it has, is a habit AI tools rarely model.',
    closer: 'So a St Davids teenager should keep learning to code in 2026, beside a cathedral Cadw dates to 1180: machines can produce the numbers, but a person has to check they point to the right place.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Caerfarchell, Trevinert or Whitesands, and one class',
    intro: 'St Davids sits among farms and hamlets on a thinly settled peninsula. Online, a learner at the end of a lane is as close to the lesson as one in Cross Square.',
    cells: [
      { h3: 'City and peninsula', p: 'A learner in Rhodiad-y-Brenin and another in Upper Solva can share one class without anyone making the drive.' },
      { h3: 'Welsh schooling', p: 'Families will recognise our stages: they are matched to Welsh school years and the Curriculum for Wales, with WJEC GCSE and A level course names, though every lesson is taught in English.' },
      { h3: 'How the free lesson works', p: 'The learner builds something real in the first session, and the teacher then suggests a level, a course and a weekly time. We do not ask for a card.' },
      { h3: 'A class at every stage', p: 'Five to ten learners at one level, drawn from St Davids, the rest of the UK and abroad, so each stage has good times to choose from.' },
      { h3: 'Two lessons weekly', p: 'Two fixed lessons each week, about eight a month, with holidays and exam weeks planned with the teacher well ahead.' },
      { h3: 'Teachers on Indian time', p: 'A class that starts at five in the afternoon in Pembrokeshire is a late-evening lesson in India, at 21:30 there during British Summer Time and 22:30 in the winter months.' }
    ],
    spec: { title: 'Across Pembrokeshire', p: 'Learners in Haverfordwest, Fishguard, Narberth or Neyland join exactly the same classes, since every lesson is online and classes are formed by level.' }
  },

  fees: {
    h2: 'St Davids lesson fees',
    intro: 'The first lesson is free, and then one fee is paid each month.',
    first: 'A complete lesson without charge, ending with a suggested level, course and weekly time.',
    group: 'About eight live lessons a month, in a class of five to ten learners at one stage.',
    private: 'About eight live lessons a month, with a teacher for your learner alone.',
    closer: 'Families in Whitchurch or Treleddyd-fawr pay in US dollars, like every family outside India, and our site shows no pound prices anywhere. Payment starts only after the free lesson, once you have settled on a course and a weekly time with us; the pricing page explains pauses, missed lessons and moving between a class and one-to-one teaching.'
  },

  reviewsH2: 'Six family reviews from Google, unchanged',

  book: {
    h2: 'Book a free lesson for a St Davids learner',
    intro: 'The first lesson depends on the learner: a grid-map treasure hunt for a young child, a short Python program that measures the distance between two map points for a beginner, or Ordnance Survey\'s coordinate formulae and a Helmert transformation for a teenager ready for real geodesy.',
    success: 'Thank you. We will contact you soon to arrange the lesson for your St Davids learner.'
  },

  faq: {
    h2: 'St Davids coding class questions',
    intro: 'The questions St Davids families ask us most.',
    items: [
      { q: 'How many people live in and around St Davids?', a: 'Census 2021 counted 7,238 usual residents in St Davids and Letterston, the middle-layer area that contains the city, at 34.9 people per square kilometre. Pembrokeshire as a whole had 123,360.' },
      { q: 'How does the area compare with Wales?', a: 'Much more thinly: 34.9 people per square kilometre here, 149.9 for Wales overall. The age profile is older too, with 7.5% of residents aged 70 to 74 in 2021 compared with 5.8% nationally.' },
      { q: 'What is a Helmert transformation?', a: 'A way to move coordinates from one model of the Earth to another using seven numbers: three shifts, a scale change and three small rotations. Ordnance Survey publishes a set for converting between GPS coordinates and the National Grid, accurate to about 3 metres.' },
      { q: 'Why do GPS and the National Grid disagree?', a: 'They use different ellipsoids, mathematical shapes for the Earth. The same latitude and longitude on each names a different point; at St Davids Cathedral the two are 83.2 metres apart, 44.3 metres north and 70.5 metres west.' },
      { q: 'How was the conversion tested?', a: 'Against both worked examples in Ordnance Survey\'s guide, reproduced exactly, and against 9,536 Environment Agency gauging stations, where our results agree with the published coordinates within 2.21 metres. We are not connected with Ordnance Survey or the Environment Agency.' },
      { q: 'How old is St Davids Cathedral?', a: 'Cadw\'s listing report describes the present building as substantially of 1180 to 1220, built by Bishop Peter de Leia, with the central tower falling in 1220 and the choir rebuilt by 1250. It is listed at Grade I.' },
      { q: 'When do St Davids lessons run?', a: 'Families here usually book a slot after school, on a weekday evening or on a weekend morning, and we fix it in the free lesson. With teachers based in India, an early evening on the peninsula is late at night for them: the gap is four and a half hours while the clocks are on summer time and five and a half hours from late October to late March.' },
      { q: 'Is there a St Davids centre?', a: 'No. We have no centre in St Davids or anywhere else in the UK, because all lessons are live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do St Davids lessons cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than age or location, with five to ten learners at the same stage. Where no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Wales and the UK',
    h2: 'Wales and beyond',
    html: 'Along the south coast, the <a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea page</a> hunts for the month roadside air changed, and in the north <a class="cg-inline-link" href="/best-coding-class-in-st-asaph">St Asaph</a> reads which way a valley faces from a height map. Learners working towards <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> or <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC GCSE Digital Technology</a> have their own pages. To see how our stages line up with a Welsh school career, open the <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales guide</a>; for any other UK city, start from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'St Davids and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-swansea', label: 'Swansea' },
    { href: '/best-coding-class-in-st-asaph', label: 'St Asaph' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-std .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.45rem); }
.cg-root.cg-std .cg-hero h1 { font-weight: 745; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-std .cg-capsule { border-top: 3px solid var(--cg-accent); border-left: 1px solid var(--cg-accent); padding: 0.9rem 0 0 0.9rem; }
.cg-root.cg-std .cg-eyebrow { letter-spacing: 0.14em; font-weight: 710; text-transform: uppercase; }
.cg-root.cg-std .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.016em; }
.cg-root.cg-std .cg-grid-3 { gap: clamp(0.95rem, 2.5vw, 2.1rem); }
.cg-root.cg-std .cg-table th { letter-spacing: 0.024em; }
.cg-root.cg-std .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-std .cg-ladder-col { border-top: 4px double var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-std .cg-callout { border-left-width: 6px; border-radius: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Census 2021 via Nomis. St Davids and Letterston W02000128: TS001 7,238 usual residents, 253 communal; TS068 987 of 6,978 aged 5 and over (14.1 percent); TS006 34.9; TS007A 545 aged 70 to 74 (7.5 percent) and 624 aged 65 to 69 (8.6 percent) of 7,236. Pembrokeshire W06000009 123,360, 19,834 of 117,777 (16.8 percent), 76.2, 8,825 aged 70 to 74 (7.2 percent). Wales 3,107,494, 19.9 percent, 149.9, 5.8 percent. Cadw 12537 (cathedral, Grade I: 1180-1220, Peter de Leia, tower fell 1220, rebuilt by 1250, earthquake 1248, Scott 1862-78, Nash 1793), 12558 (Bishop\'s Palace, Grade I: about 1200, Bek, Gower, Barlow), 12541 (Porth-y-Twr, Grade I, Caroe 1929), 12575 (City Cross, II*).',
    localProject: 'Why does GPS move the cathedral 83 metres? OS guide v3.6: Airy 1830 inverse Transverse Mercator and Table 4 Helmert parameters, both worked examples reproduced exactly. EA hydrology stations, 9,536: Helmert vs published lat/long median 1.01 m, 95th 1.81 m, max 2.21 m; no datum change median 110.2 m, range 85.0 to 138.2 m. Cathedral 175156E 225430N: shift 44.3 m north, 70.5 m west, 83.2 m. Lesson family: coordinate systems and the Helmert transformation.',
    requiredMentions: [
      '7,238',
      'Helmert',
      'OSTN15',
      'Airy',
      'Tyddewi',
      'Letterston',
      'Whitesands',
      'Clegyr-Boia',
      'Caerfarchell',
      'Trevinert',
      'Peter de Leia',
      'Porth-y-Twr'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001: St Davids and Letterston 7,238; Pembrokeshire 123,360; Wales 3,107,494.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=W02000128,W06000009,W92000004' },
      { claim: 'Nomis, Census 2021 TS007A: age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=W02000128,W06000009,W92000004' },
      { claim: 'Nomis, Census 2021 TS068: students among usual residents aged 5 and over.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=W02000128,W06000009,W92000004' },
      { claim: 'Nomis, Census 2021 TS006: population density.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=W02000128,W06000009,W92000004' },
      { claim: 'House of Commons Library, MSOA Names: St Davids and Letterston.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'Ordnance Survey, A Guide to Coordinate Systems in Great Britain (v3.6): Airy 1830, Transverse Mercator formulae, Table 4 Helmert parameters, accuracy notes, worked examples in Annexes C and D, OSTN15.', url: 'https://www.ordnancesurvey.co.uk/documents/resources/guide-coordinate-systems-great-britain.pdf' },
      { claim: 'Environment Agency hydrology stations: easting, northing, latitude and longitude for 9,536 stations.', url: 'https://environment.data.gov.uk/hydrology/id/stations.json' },
      { claim: 'Ordnance Survey, OS Open Names: Tyddewi / St Davids and nearby places.', url: 'https://www.ordnancesurvey.co.uk/products/os-open-names' },
      { claim: 'Cadw full report, listed building 12537: Cathedral of St Davids.', url: 'http://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=12537' },
      { claim: 'Cadw full report, listed building 12558: The Bishop\'s Palace.', url: 'http://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=12558' },
      { claim: 'Cadw full report, listed building 12541: Porth-y-Twr.', url: 'http://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=12541' }
    ],
    rejectedClaims: [
      'That St Davids is the smallest city in Britain: not taken from a fetched source.',
      'That the Environment Agency coordinates were made with OSTN15: its method is not stated, so the page calls the comparison agreement with a trusted list.',
      'An OSTN15 comparison: the OSTN15 data files were not downloaded, so the page quotes Ordnance Survey\'s stated accuracy instead.',
      'Cadw\'s description of the palace as outstanding among the episcopal palaces of Britain: evaluative, not used.',
      'Welsh language and national identity figures: not used, in line with the cluster rules on identity data.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Ordnance Survey, the Environment Agency, Cadw, St Davids Cathedral or Pembrokeshire County Council.'
    ]
  }
};
