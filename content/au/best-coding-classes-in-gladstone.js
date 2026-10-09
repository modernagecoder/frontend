'use strict';
// Gladstone (cg- regional city page, Australia cluster Phase 7, row 159). Shaped page: leads with teenagers
// and adults; younger learners are welcome but are not the focus here.
// Spine: how sharply does a coal train turn at the port? Data: Queensland Government spatial services,
// Transportation/OtherTransport MapServer layer 155 "Railways [detail]", queried 8 October 2026 inside
// 151.00 to 151.45 E, 24.05 to 23.75 S: 458 railway pieces (426 captured from 10 cm orthophotography dated
// 30 May 2016), owners Aurizon 373, Queensland Rail 67, Private 18; 345 electrified, 113 not. Nine named
// balloon loops. Three-point (circumcircle) radius computed by our code (scratchpad au/r4/gla_curv.py) after
// resampling each loop at 5, 20, 50 and 100 m: Clinton Balloon Loop No 2 (4,504 m piece) minimum radius
// 36 / 171 / 229 / 257 m; Clinton No 1 (4,281 m) 49 / 159 / 260 / 288 m; Fishermans Landing piece (1,567 m)
// 48 / 149 / 196 / 220 m; Wiggins Island longest piece (12,211 m) 38 / 219 / 363 / 391 m.
// Lesson family: radius of curvature by the three-point circle; screened 0 content hits 8 October 2026;
// claimed by AU-R4. Place facts: ABS Census 2021 QuickStats SUA 3006 Gladstone; QLD Places layer 20
// (population centres inside the SUA polygon): Bangalee, Boyne Island, Clinton, Gladstone, Tannum Sands;
// Queensland Department of Education term dates 2026; IANA tz 2026e Australia/Brisbane (rule AQ, no
// daylight saving since 1992), Asia/Kolkata UTC+5:30. Excluded by the cluster rules: income, rent,
// mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'GLADSTONE', label: 'Gladstone', blurb: 'Gladstone on Port Curtis, nine railway balloon loops around the harbour, and the three-point circle that measures how tightly a track turns.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-gladstone',
  code: 'gldq',
  accent: '#753634',
  accentRationale: 'Gladstone: an oxide brick red (HSV saturation 0.56, value 0.46, hue 2), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, with 7.3:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Gladstone',
    eyebrow: 'Gladstone, Queensland, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Queensland', href: '/coding-and-ai-classes-in-queensland' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Gladstone, Queensland',
  title: 'Best Coding Classes in Gladstone | Live Online, Teens and Adults',
  description: 'Live online coding, Python and applied maths classes for Gladstone teenagers and adults, one to one or in small groups with a real teacher. First lesson free.',
  ogDescription: 'Coding classes for Gladstone teens and adults, with a project that measures how tightly the harbour railway loops turn.',
  twitterDescription: 'Gladstone coding classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '8 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Applied Maths Classes for Gladstone Learners',
    description: 'Level-matched online Python, geometry in code, spatial data and problem solving for teenagers and adults in Gladstone, Boyne Island and Tannum Sands, taught live in English.'
  },

  h1: 'Coding classes in Gladstone',
  capsuleQ: 'What are the best coding classes in Gladstone?',
  capsule: 'For a Gladstone teenager or adult, a live class where a teacher writes working programs beside you, starting with Python basics and reaching the geometry engineers use on real rail maps. At the 2021 Census the Gladstone urban area held 45,185 people, and one employed resident in five, 4,265 people, worked in a technical or trade job. Classes happen on a video call, one to one or alongside a handful of learners working at the same stage, and nothing is charged for the first session.',
  lead: 'A loaded coal train cannot turn like a car. Where it reverses at the port it runs round a balloon loop, a teardrop of track that brings it back the way it came. Queensland publishes its railway centrelines as open map data, and around Gladstone harbour that data names nine balloon loops. Our project asks a plain question of them: how sharp is the tightest part of each loop? The answer comes from a three-line piece of geometry, the circle through three points, and from one surprisingly important decision, how far apart those three points should be.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Gladstone.',

  picks: {
    eyebrow: 'Course picks for Gladstone',
    h2: 'Four courses that fit this project',
    intro: 'Each one connects to the railway geometry below. The free first lesson decides where to begin, and no card is needed to book it.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first lines to reading map coordinates and drawing them, every step explained before it is used.' },
      { course: 'maths-through-coding', band: 'Ages 11 to 16', note: 'Coordinates, triangles and circles made concrete by writing code that measures real shapes.' },
      { course: 'college-mathematics-complete-masterclass', band: 'University and adult', note: 'Calculus and linear algebra for curvature, arc length and the maths behind engineering drawings.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Pulling public datasets, checking their quality and reporting what they can and cannot support.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Gladstone in the Census',
      h2: 'A trades town of houses on Port Curtis',
      intro: 'QuickStats for the Gladstone Significant Urban Area from the 2021 Census, set beside Queensland and Australia.',
      body: [
        { kind: 'table', caption: 'Gladstone at a glance, 2021 Census', head: ['Count', 'Gladstone urban area'], rows: [
          ['Residents', '45,185'],
          ['Middle age of all residents', '36 years'],
          ['Families', '11,924'],
          ['Private dwellings and household size', '20,608 dwellings, 2.5 residents each on average']
        ] },
        { kind: 'table', mt: true, caption: 'Shares that set Gladstone apart from its state and the nation', head: ['Share of', 'Gladstone', 'Queensland', 'Australia'], rows: [
          ['Separate houses, share of occupied homes', '13,971, or 82.8%', '74.8%', '72.3%'],
          ['Flats or apartments, share of occupied homes', '1,543, or 9.1%', '12.5%', '14.2%'],
          ['Technicians and trades workers, share of employed', '4,265, or 20.4%', '13.7%', '12.9%'],
          ['Children aged 10 to 14', '3,473, or 7.7%', '6.6%', '6.2%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Trades first', p: 'One employed resident in five works as a technician or tradesperson, half again Queensland\'s share and well above Australia\'s.' },
          { h3: 'Young households', p: 'A median age of 36 and 7.7% of residents aged 10 to 14 make Gladstone younger than the state as a whole.' },
          { h3: 'More than one town', p: 'The urban area takes in Gladstone itself, Clinton, Bangalee, Boyne Island and Tannum Sands, according to Queensland\'s place data.' }
        ] },
        { kind: 'p', text: 'The bureau adjusts small Census counts slightly to protect privacy, so a table\'s rows rarely add up exactly to its printed total. We quote totals and shares exactly as published and never invent a new total by adding rows ourselves.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How tightly does a balloon loop turn?',
      intro: 'Three points on a curve define one circle. Its radius measures the bend. Run that along a loop and the smallest radius marks the tightest turn.',
      body: [
        { kind: 'table', caption: 'What the Queensland railway layer holds around Gladstone (our count, queried 8 October 2026)', head: ['Item', 'Figure'], rows: [
          ['Railway pieces in our extraction box', '458'],
          ['Pieces captured from 10 cm aerial photography dated 30 May 2016', '426'],
          ['Electrified pieces', '345 of 458'],
          ['Named balloon loops', '9'],
          ['Longest single loop piece (Wiggins Island)', '12,211 m']
        ] },
        { kind: 'table', mt: true, caption: 'Smallest three-point radius on each loop as the spacing between points changes (our calculation)', head: ['Loop piece', 'Points 5 m apart', '20 m apart', '50 m apart', '100 m apart'], rows: [
          ['Clinton Balloon Loop No 1, 4,281 m', '49 m', '159 m', '260 m', '288 m'],
          ['Clinton Balloon Loop No 2, 4,504 m', '36 m', '171 m', '229 m', '257 m'],
          ['Fishermans Landing, 1,567 m piece', '48 m', '149 m', '196 m', '220 m'],
          ['Wiggins Island, 12,211 m piece', '38 m', '219 m', '363 m', '391 m']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Resample', p: 'Walk along the mapped track and drop a new point every so many metres, so the spacing is equal whatever the original drawing did.' },
          { h3: '2. Circle through three', p: 'For every point and its two neighbours, the radius equals the product of the three side lengths divided by four times the triangle\'s area.' },
          { h3: '3. Take the minimum', p: 'The smallest radius on a loop is its sharpest bend. Straight runs give enormous radii and simply drop out.' }
        ] },
        { kind: 'callout', h3: 'Why 5 metres says 36 and 100 metres says 257', p: 'At 5 metre spacing the three points sit so close together that tiny wobbles in the drawn line, a few centimetres here and there, look like hairpin bends. Spread the points to 50 or 100 metres and those wobbles average away, leaving the real sweep of the track. A measurement can be precise and still wrong if it is taken at the wrong scale, and choosing the scale is part of the program.' },
        { kind: 'p', text: 'Every radius here is our estimate from map geometry, computed from the Queensland layer as published, not a design figure for any railway. A loop drawn as several pieces gives slightly different numbers from one drawn whole, and we make no claim about train speeds or operations.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Inside the geometry',
      h2: 'Five steps from a map line to a radius you can defend',
      intro: 'The circumcircle formula takes one line of Python. Everything around it decides whether the answer means anything.',
      body: [
        { kind: 'table', caption: 'The pieces of the calculation and what each one protects', head: ['Step', 'In the Gladstone code', 'What goes wrong without it'], rows: [
          ['Project to metres', 'Longitude and latitude scaled to metres around 23.85 degrees south', 'Distances come out in degrees and every radius is meaningless'],
          ['Resample evenly', 'A new point every 5, 20, 50 or 100 m along each loop', 'Densely drawn bends look sharper than sparsely drawn ones'],
          ['Three-point radius', 'Side lengths a, b, c and twice the area from a cross product', 'Dividing by zero on straight track'],
          ['Ignore straight runs', 'Collinear triples give an infinite radius and are skipped', 'Averages swamped by huge numbers'],
          ['Compare spacings', 'The same loop measured four ways in one table', 'One spacing chosen by accident and reported as truth']
        ] },
        { kind: 'p', text: 'The formula itself is centuries old: for a triangle with sides a, b and c and area K, the circle through its corners has radius a times b times c over 4K. What makes it modern coding is applying it a few thousand times along real track and noticing that the answer depends on the spacing, a fact the textbook formula never mentions.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Draw a circle with a compass, mark three points on it, compute the radius from them by hand, then in Python, then on the Gladstone loops.' },
          { h3: 'University students', p: 'Compare the three-point estimate with the curvature formula from calculus, and with a least-effort smoothing that keeps the loop\'s shape.' },
          { h3: 'Adults', p: 'Read a government spatial service, filter it by attribute and measure what you need with code you understand line by line.' }
        ] },
        { kind: 'p', text: 'We have no link with the state government, the rail operators named in the layer, the regional council or the statistics bureau. The bureau supplied the Census numbers; every radius and count in the project came out of our own program run over the public railway map.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Gladstone',
      h2: 'Term 4 in Queensland and a clock that stays put',
      intro: 'Two calendar facts that shape when a Gladstone learner studies.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'End of the school year', p: 'State schools run their final 2026 term from Tuesday 6 October until Friday 11 December, according to the education department, and the summer break lasts until Tuesday 26 January 2027.' },
          { h3: 'No daylight saving', p: 'Queensland keeps one clock all year, so a Gladstone lesson time never jumps when New South Wales or Victoria change theirs.' },
          { h3: 'An old photograph', p: 'Most of the railway pieces were drawn from aerial photography taken on 30 May 2016, so newer track would not appear in this layer.' }
        ] },
        { kind: 'spec', title: 'A map is a dated snapshot', p: 'Spatial layers carry the date their features were captured. Reading that date before trusting a measurement tells you what the map can and cannot show, and it is a habit every analyst of public data needs.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From plotting points to measuring real track',
    intro: 'The ages are guides; the free lesson decides where each learner starts.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Points and distances', p: 'Python that stores coordinates, measures between them and draws a simple map on screen.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Geometry in code', p: 'Triangles, circles and loops, tested on the Gladstone railway data and on shapes drawn by hand.', courses: ['problem-solving-dsa-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'University', h3: 'Curvature and smoothing', p: 'Calculus-based curvature, resampling and noise, with every method checked against another.', courses: ['college-mathematics-complete-masterclass', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Spatial data at work', p: 'Querying public map services, cleaning results and writing clear, honest summaries for colleagues.', courses: ['data-analysis-mastery-course-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI assistant will hand you a curvature function in seconds. Why should a Gladstone learner understand it?',
    intro: 'Because the function will run happily at 5 metre spacing and report hairpin bends that do not exist, and only someone who understands the geometry will doubt it.',
    p1: 'Ask a chatbot for code that finds the tightest bend on a track and you will get a neat three-point circle. It will compile, it will return numbers and those numbers will look precise to the metre. Nothing in the code warns you that the spacing of the points decides the answer, that a densely drawn curve looks sharper than it is, or that straight sections produce infinite radii that break an average.',
    p2: 'That gap is what we teach. A Gladstone learner who has resampled the loops and watched 36 metres become 257 metres knows which line of the program to question first. Pointed at AI-written code, that knowledge turns a fast first draft into a measurement worth putting in a report.',
    closer: 'Generating code costs almost nothing now; deciding whether its numbers mean anything is the skill, and it is learned by writing the code yourself.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Clinton, Boyne Island or Tannum Sands, the same live lesson',
    intro: 'The urban area stretches along the coast, and a video lesson reaches every part of it without a drive.',
    cells: [
      { h3: 'One room for the whole coast', p: 'A learner at Tannum Sands and one in central Gladstone can join the same session, each from home.' },
      { h3: 'Local year levels', p: 'Teachers speak in the year levels Gladstone schools use and line homework up with the four Queensland terms. All teaching is in English.' },
      { h3: 'A real first lesson', p: 'The free session is an ordinary lesson rather than a sales call, and it ends with a suggested level, course and time. No card is needed to book.' },
      { h3: 'Groups at one level', p: 'Five to ten learners working at the same stage, from Gladstone and other places, so a regional city still gets a full group.' },
      { h3: 'Twice a week', p: 'About eight lessons a month in a fixed slot, with exam weeks and holidays agreed with the teacher in advance.' },
      { h3: 'Four and a half hours apart', p: 'Neither Queensland nor India changes its clocks, so 6pm in Gladstone is 1:30pm India time in every month of the year.' }
    ],
    spec: { title: 'One gap, all year', p: 'Our teachers work four and a half hours behind Gladstone in January and in July alike. Lesson times are always confirmed in Queensland time.' }
  },

  fees: {
    h2: 'What classes cost in Gladstone',
    intro: 'Three lines cover the whole price list.',
    first: 'One complete lesson at no charge, after which you receive a level, a course suggestion and a regular time.',
    group: 'A month of lessons, usually eight, shared with five to ten learners at your level.',
    private: 'Roughly eight lessons a month on the same pattern, with one teacher working only with you.',
    closer: 'Fees are charged in US dollars everywhere outside India, so a family in Clinton pays exactly what a family in Boyne Island pays. Nothing is billed until the trial has settled a course and a weekly slot, and the pricing page explains holidays, missed lessons and moving between group and private classes.'
  },

  reviewsH2: 'What parents and learners say on Google',

  book: {
    h2: 'What should the first lesson cover?',
    intro: 'Mention who is learning and what they enjoy, and the opening task follows from that: a compass-drawn circle measured by hand for a Year 8 student, or the whole loop survey for an older learner.',
    success: 'Thank you. The team will contact you soon about a Gladstone class.'
  },

  faq: {
    h2: 'Gladstone coding class questions',
    intro: 'What Gladstone learners and parents usually ask first.',
    items: [
      { q: 'How many people live in Gladstone?', a: '45,185, counting everyone in the Gladstone urban area on Census night 2021. Half of them were younger than 36.' },
      { q: 'What is a balloon loop?', a: 'A balloon loop is a loop of railway track that lets a whole train turn round without reversing. Gladstone\'s port has several, and Queensland\'s railway map data names nine around the harbour.' },
      { q: 'What is the three-point radius?', a: 'Any three points that do not lie on one straight line sit on exactly one circle. Its radius is the product of the triangle\'s three sides divided by four times its area, and a smaller radius means a sharper bend.' },
      { q: 'What does the Gladstone project show?', a: 'Measured with points 5 metres apart, Clinton Balloon Loop No 2 seems to bend with a 36 metre radius; with points 100 metres apart the figure is 257 metres. Small wobbles in the drawn line dominate at fine spacing, so choosing the spacing is part of measuring well.' },
      { q: 'Can Year 11 and 12 students from Gladstone join?', a: 'Yes. Senior students get help with the computing and maths behind their subjects, timed around the Queensland school calendar. Anything handed in for school marks is written by the student alone.' },
      { q: 'When are lessons for Gladstone learners?', a: 'After school on weekdays or a Saturday morning suits most families. The slot is fixed at the trial and written in local time, which sits four and a half hours ahead of our teachers in every season.' },
      { q: 'Can younger children join?', a: 'Yes. Live classes start from age six with Scratch and simple drawing projects before any typed code; the railway project simply suits older learners.' },
      { q: 'Is there a Modern Age Coders centre in Gladstone?', a: 'No, and none is claimed. Every lesson is live and online with no premises in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Gladstone coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and goals rather than age or postcode. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Gladstone and Queensland learners',
    html: 'Up the coast, <a class="cg-inline-link" href="/ai-and-programming-classes-in-rockhampton">Rockhampton</a> has its own page, and the state capital is covered on the <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">Brisbane page</a>. For a statewide view read <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">coding and AI classes in Queensland</a>; puzzle lovers can continue with <a class="cg-inline-link" href="/problem-solving-through-coding-australia">problem solving through coding</a>, and the <a class="cg-inline-link" href="/coding-classes-in-australia">national coding page</a> links every Australian guide.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Gladstone and Queensland',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-rockhampton', label: 'Rockhampton' },
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-gldq .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-gldq .cg-hero h1 { font-weight: 800; letter-spacing: -0.018em; line-height: 1.05; }
.cg-root.cg-gldq .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.8rem 0 0.8rem 1.1rem; }
.cg-root.cg-gldq .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-gldq .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.01em; }
.cg-root.cg-gldq .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
.cg-root.cg-gldq .cg-table caption { font-weight: 700; text-align: left; padding-bottom: 0.4rem; }
.cg-root.cg-gldq .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gldq .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-gldq .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Gladstone, ABS Census 2021 QuickStats, Significant Urban Area 3006 (read 8 October 2026): 45,185 people; median age 36; 11,924 families; 20,608 private dwellings; average 2.5 people per household; separate house 13,971 (82.8 percent; Queensland 74.8; Australia 72.3); flat or apartment 1,543 (9.1 percent; Queensland 12.5; Australia 14.2); Technicians and Trades Workers 4,265 (20.4 percent; Queensland 13.7; Australia 12.9); Bachelor Degree level and above 4,645 (13.2 percent; Queensland 21.9; Australia 26.3); aged 10 to 14 3,473 (7.7 percent; Queensland 6.6; Australia 6.2). Queensland spatial services Places layer 20 (population centres) inside the ABS SUA 3006 polygon: Bangalee, Boyne Island, Clinton, Gladstone, Tannum Sands. Queensland Department of Education term dates: 2026 Term 4 Tuesday 6 October to Friday 11 December; holidays Saturday 12 December 2026 to Tuesday 26 January 2027. IANA tz 2026e: Australia/Brisbane follows rule AQ with no daylight saving in force; Asia/Kolkata UTC+5:30.',
    localProject: 'Three-point (circumcircle) radius of curvature on railway balloon loops. Queensland spatial services, Transportation/OtherTransport MapServer layer 155 Railways [detail], queried 8 October 2026 with envelope 151.00,-24.05,151.45,-23.75 (outSR 4326): 458 features; feature_source Orthophotography_10cm_Gladstone Urban for 450 and feature_date 2016-05-30 for 426; railway_owner Aurizon 373, Queensland Rail 67, Private 18; electrified 345, non electrified 113. Named loops (section_name containing Balloon or Ballon): Barney Point Loop Balloon, Clinton Balloon Loop, Clinton Balloon Loop No 1, No 2, No 3, Comlaco Ballon Loop, East End Balloon Loop, Fishermans Landing Balloon Loop, Wiggins Island Balloon Loop. Each path projected to metres (equirectangular about 23.85 S), resampled at 5, 20, 50 and 100 m, radius R = abc / (2 |cross|) for consecutive triples, collinear triples skipped. Minimum radius: Clinton No 2 (objectid 5, 4,504 m) 36 / 171 / 229 / 257 m; Clinton No 1 (objectid 271, 4,281 m) 49 / 159 / 260 / 288 m; Fishermans Landing (objectid 6836, 1,567 m) 48 / 149 / 196 / 220 m; Wiggins Island (objectid 7569, 12,211 m) 38 / 219 / 363 / 391 m.',
    requiredMentions: [
      '45,185',
      '11,924',
      '13,971',
      '4,265',
      '1,543',
      'Clinton Balloon Loop No 2',
      'nine balloon loops',
      '257 metres',
      '30 May 2016',
      'Bangalee'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Gladstone Significant Urban Area (3006): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3006' },
      { claim: 'Queensland Government spatial services, Railways [detail] layer (OtherTransport map service), State of Queensland.', url: 'https://spatial-gis.information.qld.gov.au/arcgis/rest/services/Transportation/OtherTransport/MapServer/155' },
      { claim: 'Queensland Government spatial services, Places map service, population centres layer.', url: 'https://spatial-gis.information.qld.gov.au/arcgis/rest/services/Location/Places/MapServer/20' },
      { claim: 'Queensland Department of Education, school term dates 2026.', url: 'https://education.qld.gov.au/about-us/calendar/term-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Brisbane.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Design or minimum engineering radii of any loop, and train speeds: not published in the layer; the page gives only our geometric estimates and says so.',
      'Coal tonnages or port throughput: money and trade figures excluded by the cluster rules and not needed.',
      'Tide gauge and wave buoy data from data.qld.gov.au and data.des.qld.gov.au: both returned a bot challenge to automated reads and were not circumvented.',
      'Bureau of Meteorology observations: returned 403 to automated reads and were not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the Queensland Government, Aurizon, Queensland Rail, Gladstone Regional Council or the ABS.'
    ]
  }
};
