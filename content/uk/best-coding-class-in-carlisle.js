'use strict';
// Carlisle (cg- city page, UK cluster Phase 4). Spine: how do you map rain from 99 buckets? Delaunay triangulation
// and linear interpolation (TIN) of Environment Agency Hydrology daily rainfall for the rainfall day dated 5 December
// 2015 (Storm Desmond), gauges within 60 km of Carlisle opened before December 2015 with daily totals (126 stations;
// read 23 September 2026; scratchpad car/tin.py). 99 values graded Good used; 26 excluded as Suspect or not Good
// (for example Dale Head 212.8 mm Suspect). Maximum 264.4 mm at Thirlmere St Johns Beck; Brotherswater 243.7;
// median 44.2 mm. Delaunay (scipy, British National Grid): 181 triangles, 279 edges (median 13.8 km, longest 78.5 km),
// 15 hull vertices; empty-circumcircle check 0 violations. Leave-one-out over 84 gauges inside the hull: mean absolute
// error TIN 17.0 mm, nearest gauge 25.1, overall mean 38.3; median 9.1 against 15.2; TIN closer at 58 of 84. Worst:
// Thirlmere observed 264.4, TIN 163.3; Brotherswater 243.7, TIN 155.8; Honister 188.4 with Seathwaite Farm 112.4 at
// 1.7 km. EA Hydrology Sheepmount, River Eden, daily maximum level: record from 31 December 1975; highest 7.648 m on 6
// December 2015; next 7.226 m on 8 January 2005.
// Lesson family: Delaunay triangulation and TIN interpolation (empty circumcircle, convex hull, leave-one-out
// validation, interpolation cannot exceed its corners). Screened 23 September 2026: Delaunay 0 hits (other
// "triangulation" hits are land surveying); distinct from the inverse-distance pages.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Carlisle district as at 2021 (E07000028): TS001
// 110,024 usual residents, 108,840 in households, 1,184 communal; TS007A 8,267 aged 55 to 59 (7.5 percent, England
// 6.7), 7,652 aged 60 to 64 (7.0, England 5.8), 5,802 aged 20 to 24 (5.3, England 6.0); TS068 18,030 students of
// 104,647 aged 5 and over (17.2 percent, England 20.4); TS006 106.0 per square km (England 433.5). Cumberland Council
// website lists Carlisle with Allerdale and Copeland. Carlisle Cathedral, Our History: England's only medieval
// Augustinian cathedral; founded by Henry I as the Augustinian Priory of St Mary in 1122; cathedral in 1133; east
// window tracery and glass in place by about 1350. NHLE scheduled monument 1014579: Carlisle Castle, medieval tower
// keep castle, two lengths of city wall, a 16th century battery, and part of an earlier Roman fort known as
// Luguvalium (scheduled 7 August 1996). GOV.UK (31 July 2019): EA scheme to better protect more than 1,600 homes and
// businesses in Carlisle; previous scheme completed in 2005. Places in OS Open Names (Cumberland): Stanwix, Harraby,
// Upperby, Currock, Botcherby, Wetheral, Scotby, Cumwhinton, Houghton, Brampton.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'CARLISLE', blurb: 'The border city on the Eden, with a project that maps Storm Desmond\'s rain from 99 gauges by joining them into triangles.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-carlisle',
  code: 'car',
  accent: '#8B4218',
  accentRationale: 'Carlisle: a red sandstone for the castle and cathedral, from the solver (5.90:1 on every paper tint, dE 7.2 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Carlisle',
    eyebrow: 'Carlisle, Cumbria',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Cumberland' },
      { type: 'AdministrativeArea', name: 'Cumbria' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Carlisle, England',
  title: 'Best Coding Classes in Carlisle | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Carlisle learners aged 6 to 67, from Stanwix and Harraby to Brampton. Your first lesson with us is free.',
  ogDescription: 'Coding and AI lessons for Carlisle, on a page that maps Storm Desmond\'s rain from 99 gauges by joining them into a mesh of triangles.',
  twitterDescription: 'Carlisle learners aged six to sixty-seven can study coding, Python and AI in live online lessons with us, beginning with a free one.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Carlisle Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, maps and measurement, AI and mathematics taught live online in English to Carlisle children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Carlisle',
  capsuleQ: 'What are the best coding classes in Carlisle?',
  capsule: 'The Carlisle district, as it stood at the 2021 census, had 110,024 usual residents at 106.0 people per square kilometre, against 433.5 for England; it is now served by Cumberland Council. Carlisle Cathedral says it was founded by Henry I as an Augustinian priory in 1122 and became a cathedral in 1133. Carlisle learners from six to sixty-seven study with our teachers in India over live video, individually or in a group of five to ten at their level, at times chosen around UK school and work. There is no charge for lesson one; from then on it is USD 100 a month for a group place or USD 150 for one-to-one teaching.',
  lead: 'On the rainfall day dated 5 December 2015, Storm Desmond dropped 264.4 millimetres into the Environment Agency\'s gauge at Thirlmere. The next day the River Eden at Sheepmount, in Carlisle, reached 7.648 metres, the highest daily maximum in a record going back to 1975. But a gauge only measures the spot it stands on. How do you map rain between 99 of them? Our teenagers join the gauges into a Delaunay triangulation, the mesh of triangles in which no gauge sits inside another triangle\'s circumcircle, and estimate each point from the three corners around it. Tested by hiding one gauge at a time, the triangles miss by 17.0 millimetres on average, against 25.1 for simply copying the nearest gauge.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Carlisle, please.',

  picks: {
    eyebrow: 'Course picks for Carlisle',
    h2: 'Four courses for the border city',
    intro: 'Pick whichever course matches what the learner already likes. Every course starts with a free live lesson, and booking it needs no card.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, the first step before drawing shapes and meshes with code.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from a first program to full projects, the base for loading gauge readings and building a triangulation.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real measurements in Python, including testing an estimate honestly by hiding the data it is meant to predict.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who work with maps, sensors or site data and need values between the places they measure.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Carlisle today',
      h2: 'A small city with a broad rural hinterland',
      intro: 'Census 2021 figures for the former City of Carlisle district, from the Office for National Statistics on Nomis. The area is now served by Cumberland Council.',
      body: [
        { kind: 'table', caption: 'Carlisle district (2021 boundary), Census 2021', head: ['Measure', 'Carlisle', 'England'], rows: [
          ['Usual residents', '110,024', '56,490,048'],
          ['Living in households', '108,840', 'Not compared'],
          ['Living in communal establishments', '1,184', 'Not compared'],
          ['Aged 20 to 24', '5,802 (5.3%)', '6.0%'],
          ['Aged 55 to 59', '8,267 (7.5%)', '6.7%'],
          ['Aged 60 to 64', '7,652 (7.0%)', '5.8%'],
          ['Students among residents aged 5 and over', '18,030 (17.2%)', '20.4%'],
          ['Usual residents per square kilometre', '106.0', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'An older workforce', p: 'People aged 55 to 59 were 7.5% of residents and those aged 60 to 64 were 7.0%, both above the national shares of 6.7% and 5.8%.' },
          { h3: 'Fewer students', p: 'Of the 104,647 residents aged five and over, 18,030 were studying, 17.2%, below England\'s 20.4%, and 5.3% were aged 20 to 24.' },
          { h3: 'City and countryside', p: 'With 106.0 residents per square kilometre, the district mixes the compact city with a wide rural area running out towards Brampton.' }
        ] },
        { kind: 'p', text: 'Our Carlisle groups bring those communities together. A Year 3 child in Upperby might be making a first animation, a Year 10 student in Stanwix starting GCSE Computer Science, and an adult in Scotby learning Python for work, each in a small group at the right level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Priory, castle and fort',
      h2: 'From Luguvalium to an Augustinian cathedral',
      intro: 'From Carlisle Cathedral\'s own history page, Historic England\'s open data and GOV.UK.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Luguvalium', p: 'Historic England\'s scheduled monument for Carlisle Castle includes a medieval tower keep, two lengths of city wall, a 16th century battery and part of an earlier Roman fort known as Luguvalium.' },
          { h3: '1122 and 1133', p: 'The cathedral says Henry I founded the Augustinian Priory of St Mary in 1122 and made it a cathedral in 1133, and calls itself England\'s only medieval Augustinian cathedral.' },
          { h3: 'About 1350', p: 'By 1322 the arcades and easternmost bay were complete, the cathedral records, and the tracery and glass of its east window were in place by about 1350.' }
        ] },
        { kind: 'p', text: 'Water has shaped modern Carlisle too. In July 2019 the Environment Agency began a flood risk management scheme to better protect more than 1,600 homes and businesses in the city, building on a scheme completed in 2005. We have no connection with Carlisle Cathedral, Cumberland Council, Historic England or the Environment Agency; the storm belongs on this page because Carlisle flooded in 2015, as the Environment Agency\'s own announcement of the new scheme recalls.' },
        { kind: 'spec', title: 'Where the rainfall comes from', p: 'The Environment Agency\'s Hydrology service publishes daily rainfall from gauges across Cumbria as open data, with a quality grade on every value. We used gauges within 60 kilometres of Carlisle that were open in December 2015.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How do you map rain from 99 buckets?',
      intro: 'A Delaunay triangulation joins scattered points into triangles so that no point lies inside any triangle\'s circumcircle, the circle through its three corners. It gives fat, sensible triangles instead of long slivers.',
      body: [
        { kind: 'table', caption: 'Rainfall day dated 5 December 2015, 99 gauges graded good: each gauge hidden in turn and predicted from the rest (84 gauges inside the network\'s outline)', head: ['How the hidden gauge is predicted', 'Average miss', 'Typical miss'], rows: [
          ['Average of all other gauges', '38.3 mm', 'Not computed'],
          ['Copy the nearest gauge', '25.1 mm', '15.2 mm'],
          ['Linear interpolation on the Delaunay triangles', '17.0 mm', '9.1 mm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Clean the gauges', p: 'Of 126 gauges near Carlisle with daily totals, 99 had a value graded good for the day. Others were set aside, including one that recorded 212.8 millimetres but was flagged suspect.' },
          { h3: '2. Triangulate', p: 'The 99 gauges become 181 triangles and 279 edges. A check confirms the Delaunay rule: no gauge lies strictly inside any triangle\'s circumcircle.' },
          { h3: '3. Test by hiding', p: 'Remove one gauge, rebuild, and predict it from the triangle that now covers it. Repeat for every gauge inside the network. The triangles beat the nearest gauge at 58 of 84.' }
        ] },
        { kind: 'callout', h3: 'The wettest place is always underestimated', p: 'A point inside a triangle gets a weighted average of its three corners, so the estimate can never exceed the highest corner. Hide Thirlmere, which caught 264.4 millimetres, and the triangles around it predict 163.3. Mountains make this worse: Honister caught 188.4 millimetres while Seathwaite Farm, just 1.7 kilometres away, caught 112.4. Any map drawn from gauges smooths off the peaks, so the heaviest rain of Storm Desmond fell somewhere no gauge could see.' },
        { kind: 'p', text: 'The triangulation also shows where to trust it. Inside the network, edges are typically 13.8 kilometres long; around the outside, the longest reaches 78.5 kilometres, and estimates along such edges are guesses across empty country. In Carlisle itself, the Environment Agency\'s gauge on the Eden at Sheepmount reached 7.648 metres on 6 December 2015, above the previous highest daily maximum of 7.226 metres on 8 January 2005.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Measuring between points',
      h2: 'Five questions before drawing a map from scattered readings',
      intro: 'Practised on Storm Desmond, then used for air pollution maps, weather apps, soil surveys, mobile signal coverage and 3D graphics.',
      body: [
        { kind: 'table', caption: 'Choices behind an interpolated map', head: ['Question', 'For the Desmond rainfall', 'What goes wrong if you skip it'], rows: [
          ['Which readings are trustworthy?', 'Only values graded good: 99 of 126', 'A suspect reading shaping the whole map'],
          ['How are neighbours chosen?', 'Delaunay triangles, checked for the circumcircle rule', 'Long thin triangles joining distant gauges'],
          ['Where is the map a guess?', 'Near the outline, where edges reach 78.5 km', 'Confident colours over places with no data'],
          ['How is it tested?', 'Each gauge hidden and predicted', 'An error nobody measured'],
          ['What can it never show?', 'Peaks higher than any gauge', 'The worst rain missing from the map']
        ] },
        { kind: 'p', text: 'The last row is the most important for a storm. Because linear interpolation cannot exceed its corners, a triangulated map is a floor under the true peaks, not a picture of them. Better maps add more gauges in the hills or bring in radar, and they say which parts are measured and which are estimated.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Joining dots on a map into triangles and guessing the rain at a point from the three dots around it.' },
          { h3: 'Teenagers', p: 'Environment Agency gauge data in Python, a Delaunay triangulation, interpolation and a fair leave-one-out test against simple rules.' },
          { h3: 'Adults', p: 'Mapping sensor readings at work, with suspect values removed, gaps marked and every estimate tested.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Environment Agency, Carlisle Cathedral, Cumberland Council or Historic England. The rainfall, river levels, census tables and monument records are open data; the triangles, predictions and errors on this page are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From joining dots to a Delaunay mesh',
    intro: 'Read the ages loosely: where each learner begins is decided in the free lesson.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Dots and triangles', p: 'Joining points on a map into triangles and estimating a value in the middle from the corners.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Points in code', p: 'Storing gauge positions and readings in Python and finding the nearest gauge to any point.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Triangulation', p: 'A Delaunay triangulation of real gauges, interpolation inside triangles and a leave-one-out test.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Maps from sensors', p: 'Turning scattered readings into maps at work, with quality checks and honest error estimates.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI weather models map rain everywhere. Why should a Carlisle teenager triangulate 99 gauges?',
    intro: 'Because every map built from scattered readings has blind spots, and knowing where they are is the skill.',
    p1: 'Modern forecasting and AI weather tools blend gauges, radar and physics, but they are still judged against gauges like these. A learner who has hidden a gauge and watched a method miss it by 101 millimetres knows why forecasters test on data the model never saw, and why peaks are the hardest thing to get right.',
    p2: 'The Delaunay triangulation is also everywhere in computing, from 3D game graphics to engineering meshes and the maps inside navigation apps. Building one from real Cumbrian gauges, and checking its defining rule by hand, turns a textbook algorithm into something a learner has used.',
    closer: 'So a Carlisle teenager should keep learning to code in 2026, in a city that knows what a storm in the fells can do: machines can draw any map, but someone has to ask where the map is measured and where it is only guessed.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Stanwix, Botcherby or Wetheral, without leaving home',
    intro: 'Carlisle reaches from its city centre out to villages along the Eden. Online, a learner in Cumwhinton is as close to class as one beside the castle.',
    cells: [
      { h3: 'City and villages', p: 'A learner in Currock and another in Houghton can share the same class, with no journey into the city centre.' },
      { h3: 'English school stages', p: 'Our levels line up with what Cumbrian schools teach, Reception onwards through each Key Stage to GCSE and A level, with every lesson given in English.' },
      { h3: 'A useful first lesson', p: 'The free session teaches a real task and ends with a recommended level, course and weekly slot. We never ask for card details.' },
      { h3: 'Groups by level', p: 'Five to ten learners at the same stage, from Carlisle, the rest of the UK and abroad, so every level has workable times.' },
      { h3: 'A weekly routine', p: 'Two regular lessons a week, around eight a month, with holidays and exams agreed with the teacher ahead of time.' },
      { h3: 'Evenings, two time zones', p: 'A 6.30 pm lesson in Carlisle starts at 11 pm in India during British Summer Time and midnight in winter, since India keeps one clock all year; our teachers work late for UK families, and earlier slots suit the winter months.' }
    ],
    spec: { title: 'Across Cumbria and the borders', p: 'Families in Penrith, Wigton, Workington or Gretna join exactly the same classes, since every group is online and set by level.' }
  },

  fees: {
    h2: 'Carlisle lesson fees',
    intro: 'The first lesson is free, and after that there is one monthly fee.',
    first: 'A full lesson with nothing to pay, ending with advice on level, course and a weekly slot.',
    group: 'Roughly eight live lessons a month, with five to ten learners working at the same stage.',
    private: 'Roughly eight live lessons a month, with the teacher giving your learner their full attention.',
    closer: 'Harraby households are billed the way we bill every household beyond India, in US dollars, and you will not find a pound price on any of our pages. The free lesson comes before any charge, and billing starts only once a course and weekly time are settled; pausing, missed lessons and switching between group and private teaching are on the pricing page.'
  },

  reviewsH2: 'Six families\' reviews on Google, left exactly as written',

  book: {
    h2: 'Book a free lesson for a Carlisle learner',
    intro: 'What we teach first depends on who is learning: a join-the-dots map game for younger children, a short Python program that finds the nearest gauge to a point for a beginner, or Storm Desmond\'s rainfall and a Delaunay triangulation for a teenager ready for real data.',
    success: 'Thank you. We will contact you soon to arrange a lesson for your Carlisle learner.'
  },

  faq: {
    h2: 'Carlisle coding class questions',
    intro: 'The questions Carlisle families ask us most.',
    items: [
      { q: 'How many people live in the Carlisle area?', a: 'Census 2021 counted 110,024 usual residents in the Carlisle district as it then stood, 108,840 of them in households. The area is now served by Cumberland Council.' },
      { q: 'How does Carlisle compare with England?', a: 'It has an older working-age population and fewer students: 7.5% of residents were aged 55 to 59 and 7.0% aged 60 to 64 (England 6.7% and 5.8%), and 17.2% of those aged five and over were studying (England 20.4%).' },
      { q: 'What is a Delaunay triangulation?', a: 'A way of joining scattered points into triangles so that no point lies inside the circle through any triangle\'s three corners. It avoids long, thin triangles, which makes it a good base for estimating values between points.' },
      { q: 'How well did the triangles map Storm Desmond\'s rain?', a: 'Hiding each gauge in turn, linear interpolation on the triangles missed by 17.0 millimetres on average, against 25.1 for copying the nearest gauge. It always underestimates the wettest spots: Thirlmere caught 264.4 millimetres but was predicted at 163.3.' },
      { q: 'Where does the rainfall data come from?', a: 'From the Environment Agency\'s Hydrology open data: daily totals from gauges within 60 kilometres of Carlisle for the rainfall day dated 5 December 2015, using only values graded good.' },
      { q: 'How high did the Eden rise in Carlisle?', a: 'The Environment Agency\'s Sheepmount gauge recorded a daily maximum of 7.648 metres on 6 December 2015, the highest in its record since 1975; the next highest was 7.226 metres on 8 January 2005. We are not connected with the Agency.' },
      { q: 'When do Carlisle lessons take place?', a: 'Carlisle families usually choose a slot straight after school, a weekday evening or a weekend morning, and we settle the time together during the free lesson. India is four and a half hours ahead of Carlisle in summer and five and a half in winter, so early evening slots work well.' },
      { q: 'Is there a Carlisle classroom?', a: 'No. We have no Carlisle centre and no premises anywhere in the UK, as every lesson is live online. A learner needs a computer with sound and a dependable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do Carlisle lessons cost?', a: 'The first lesson is free. Then a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one lessons on the same timetable are USD 150 a month. The course, format and time are agreed before anything is charged.', boiler: true },
      { q: 'How do you choose a learner\'s group?', a: 'By level, pace and goals rather than age or postcode, with five to ten learners at the same stage. If no group fits the learner\'s week, we offer one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The North and beyond',
    html: 'Across the Pennines, the <a class="cg-inline-link" href="/best-coding-class-in-durham">Durham page</a> traces lines of sight across a grid of Ordnance Survey heights, and <a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle upon Tyne</a> colours its wards with four colours. <a class="cg-inline-link" href="/best-coding-class-in-colchester">Colchester</a> measures how long dry spells last in fourteen years of rain. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Carlisle and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-durham', label: 'Durham' },
    { href: '/best-coding-class-in-newcastle-upon-tyne', label: 'Newcastle upon Tyne' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-car .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.5rem); }
.cg-root.cg-car .cg-hero h1 { font-weight: 800; letter-spacing: -0.029em; line-height: 1.02; }
.cg-root.cg-car .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-car .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-car .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.02em; }
.cg-root.cg-car .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2.1rem); }
.cg-root.cg-car .cg-table th { letter-spacing: 0.032em; }
.cg-root.cg-car .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-car .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-car .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Carlisle district as at 2021, Census 2021 via Nomis (E07000028): TS001 110,024 usual residents, 108,840 in households, 1,184 in communal establishments; TS007A 5,802 aged 20 to 24 (5.3 percent, England 6.0), 8,267 aged 55 to 59 (7.5 percent, England 6.7), 7,652 aged 60 to 64 (7.0 percent, England 5.8); TS068 18,030 students of 104,647 residents aged 5 and over (17.2 percent, England 20.4); TS006 106.0 per square kilometre (England 433.5). Carlisle Cathedral: England\'s only medieval Augustinian cathedral; priory founded by Henry I in 1122; cathedral 1133; east window by about 1350. NHLE 1014579 Carlisle Castle scheduled monument including part of the Roman fort Luguvalium. GOV.UK 2019: EA scheme for more than 1,600 homes and businesses; previous scheme 2005.',
    localProject: 'How do you map rain from 99 buckets? EA Hydrology daily rainfall, rainfall day dated 5 December 2015, 126 gauges within 60 km of Carlisle, 99 graded Good. Max 264.4 mm Thirlmere St Johns Beck; median 44.2. Delaunay: 181 triangles, 279 edges (median 13.8 km, max 78.5 km), 0 circumcircle violations. Leave-one-out over 84 interior gauges: MAE TIN 17.0 mm, nearest gauge 25.1, mean 38.3; median 9.1 against 15.2; TIN closer at 58 of 84; Thirlmere predicted 163.3. Honister 188.4 against Seathwaite Farm 112.4 at 1.7 km. Sheepmount daily maximum 7.648 m on 6 December 2015, highest since 1975; previous 7.226 m on 8 January 2005. Lesson family: Delaunay triangulation and TIN interpolation.',
    requiredMentions: [
      '110,024',
      '108,840',
      '18,030',
      '104,647',
      '106.0',
      'Luguvalium',
      'Sheepmount',
      'Storm Desmond',
      'Thirlmere',
      'Delaunay',
      'Botcherby',
      'Stanwix'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Carlisle (E07000028): 110,024 usual residents; 108,840 in households; 1,184 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000028' },
      { claim: 'Nomis, Census 2021 TS007A: Carlisle and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000028,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Carlisle 18,030 students of 104,647 aged 5 and over (17.2 percent).', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000028,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: density, Carlisle 106.0 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E07000028,E92000001' },
      { claim: 'Environment Agency Hydrology: rainfall stations and daily totals near Carlisle, December 2015.', url: 'https://environment.data.gov.uk/hydrology/id/stations?lat=54.75&long=-2.9&dist=60&observedProperty=rainfall' },
      { claim: 'Environment Agency Hydrology: River Eden at Sheepmount, daily maximum level.', url: 'https://environment.data.gov.uk/hydrology/id/measures/078cbfd9-31ae-46f4-bbcc-0dbdaa191cd3-level-max-86400-m-qualified' },
      { claim: 'Carlisle Cathedral, Our History: Augustinian priory 1122, cathedral 1133, east window about 1350.', url: 'https://carlislecathedral.org.uk/history/' },
      { claim: 'Historic England NHLE open data: Carlisle Castle scheduled monument 1014579, including part of the Roman fort Luguvalium.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1014579' },
      { claim: 'GOV.UK, 31 July 2019: Environment Agency flood risk management scheme for Carlisle, more than 1,600 homes and businesses; previous scheme 2005.', url: 'https://www.gov.uk/government/news/25m-flood-risk-management-scheme-for-carlisle-gets-underway' },
      { claim: 'Cumberland Council website: Carlisle listed with Allerdale and Copeland.', url: 'https://www.cumberland.gov.uk/' }
    ],
    rejectedClaims: [
      'Scheme costs quoted on GOV.UK: money data, excluded; only the number of homes and businesses is used.',
      'Tullie House museum pages: returned 403 and were not circumvented.',
      'Values graded suspect or not good, including 212.8 mm at Dale Head: excluded from the triangulation.',
      'A claim that the map shows the true peak of Storm Desmond: linear interpolation cannot exceed its corners, and the page says so.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Environment Agency, Carlisle Cathedral, Cumberland Council or Historic England.'
    ]
  }
};
