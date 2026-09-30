'use strict';
// Roath, Cardiff (cg- district page, UK cluster Phase 9, row 473). Keyword slug per the owner's rotation with a city
// suffix, and the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: where does a shopping area begin
// and end? (alpha shapes / concave hulls from a Delaunay triangulation, against the convex hull; one parameter decides how
// many "areas" there are).
// Data (read 30 September 2026): OpenStreetMap API 0.6 map calls over bbox -3.185,51.483,-3.150,51.505 in 6 tiles (ODbL).
// 529 places tagged as a shop (not "vacant" or "yes") or as a cafe, restaurant, fast-food outlet, pub, bar or ice-cream
// shop (nodes, plus centres of mapped building outlines); 328 carry an addr:street tag.
// Our run (scratchpad rth/alpha.py): convex hull of all 529 places 4.842 square km. Delaunay triangulation, triangles kept
// when their circumradius is under a threshold; pieces = triangles joined along shared edges. Threshold / area / share of
// hull / pieces / places inside a piece / largest pieces with their most common addr:street tag: 60 m 0.181 km2 3.7% 21
// 472, 235 (Wellfield Road), 101 (Crwys Road), 27 (Salisbury Road); 100 m 0.531 11.0% 13 509, 310 (Wellfield Road), 103
// (Crwys Road), 33 (Clifton Street); 150 m 1.268 26.2% 9 517, 451 (Crwys Road); 250 m 2.44 50.4% 3 526; 400 m 3.714 76.7% 1
// 528.
// Lesson family: alpha shapes / concave hulls, triangulation filtering, a scale parameter that defines "a region".
// Screened: "alpha shape", "concave hull" 0 hits anywhere in content/; Carlisle owns Delaunay/TIN interpolation, Runcorn
// DBSCAN; here the object is the outline of a set of points and its dependence on alpha.
// Place facts: postcodes.io places lists Roath (Y Rhath) and Roath Park as suburban areas of Cardiff (CF23). Reverse
// lookups put 51.4956,-3.1562 in Penylan ward and 51.4900,-3.1650 (CF24 3HG) in Plasnewydd ward. Nomis Census 2021 TS001,
// 2022 wards: Plasnewydd 18,277; Penylan 12,911; Cathays 21,821. No figure is published for "Roath" itself.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ROATH', label: 'Roath, Cardiff', blurb: 'Coding and AI classes for Roath in Cardiff, with a geometry project that asks where a shopping area really begins and ends.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-roath-cardiff',
  code: 'rth',
  accent: '#1F5C8A',
  accentRationale: 'Roath: a harbour steel blue (7.1:1 contrast), picked by hand to differ in hue from recent pages',
  pageType: 'city',
  place: {
    name: 'Roath',
    eyebrow: 'Roath, Cardiff, Wales',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Cardiff' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-cardiff', name: 'Cardiff' }],
  nav: [
    { label: 'Cardiff', href: '/best-coding-class-in-cardiff' },
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Roath, Cardiff',
  title: 'Coding and AI Classes in Roath, Cardiff | Python, Ages 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Roath, Penylan, Plasnewydd and Cathays learners in Cardiff, aged 6 to 67, with WJEC help. First lesson free.',
  ogDescription: 'Coding and AI classes for Roath, Cardiff, with a project that draws the outline of the area\'s shops and asks how many shopping areas there really are.',
  twitterDescription: 'Roath, Cardiff: coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Roath, Cardiff',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Roath and across Cardiff, taught live with careful reasoning first.'
  },

  h1: 'Coding and AI classes in Roath, Cardiff',
  capsuleQ: 'Where can Roath learners find the best coding and AI classes?',
  capsule: 'Roath (Y Rhath) is recorded on postcodes.io as a suburban area of Cardiff, next to Roath Park, and postcode lookups put points in Roath inside Plasnewydd and Penylan wards, which counted 18,277 and 12,911 residents at the 2021 census; no separate figure is published for Roath itself. Our tutors, who work from India, teach coding, AI, Python, vibe coding and maths by live video to learners of six to 67, alone or in a class of five to ten pitched at one level. We start with how to reason, so learners can question a neat answer a computer draws for them. Lesson one is free, and we finish it by suggesting a course. The Roath project takes 529 shops, cafes and pubs mapped on OpenStreetMap and asks a computer to draw the outline of the local shopping streets, then shows how one setting changes the answer from one big blob to twenty-one tight clusters. From there, a class place is USD 100 each month and a private tutor USD 150 each month.',
  lead: 'Draw a line round every shop in a neighbourhood and you get a shape. The simplest shape, the convex hull, is what a rubber band would make if stretched round all the points: it never dents inwards, so it swallows parks, back streets and houses along with the shops. A better outline hugs the points. The standard way to get one is an alpha shape: join the points into triangles, then throw away any triangle that is too big to belong to a crowd. What counts as too big is a choice, and that choice decides how many separate shopping areas the computer finds. This project runs the idea on Roath and its neighbouring streets.',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Roath, Cardiff?',

  picks: {
    eyebrow: 'Roath course picks',
    h2: 'Roath courses in shapes, Python and AI',
    intro: 'Pick a course by age. The first live lesson on each is free, and booking takes no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: drawing boundaries round groups and arguing about where they should go.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with AI help and tested to destruction.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first programs to geometry and maps, including the Roath shop outlines.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How AI finds structure in data, where its choices hide, and AI agents in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Roath and Cardiff',
      h2: 'Roath, Plasnewydd, Penylan and Roath Park',
      intro: 'Census counts for the wards Roath\'s streets fall in, and how the area is recorded.',
      body: [
        { kind: 'table', caption: 'Census 2021 usual residents, 2022 wards, via Nomis', head: ['Ward', 'Residents (2021)'], rows: [
          ['Plasnewydd', '18,277'],
          ['Penylan', '12,911'],
          ['Cathays', '21,821']
        ] },
        { kind: 'p', text: 'Roath is a name people use, not an official boundary, so no count exists for it. Postcode lookups place a point in the heart of Roath in Penylan ward and a nearby postcode, CF24 3HG, in Plasnewydd ward; Cathays is shown because the analysis rectangle runs into it. The ward figures are printed as Nomis publishes them and are not added up. Cardiff schools teach the Curriculum for Wales in Years 1 to 13, and we plan lessons around your school\'s holiday dates once you share them.' },
        { kind: 'callout', h3: 'Cardiff, Wales and WJEC help', p: 'See <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales guide</a> and <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science help</a>. Why reasoning comes first is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Roath project',
      h2: 'Where does a shopping area end? Alpha shapes round Roath\'s 529 shops and cafes',
      intro: 'One set of real points, a rubber-band outline, and an outline that hugs the crowd at five different settings.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data for a rectangle over Roath and its neighbours and keeps every mapped shop, cafe, restaurant, takeaway, pub and bar: 529 places. The convex hull round all of them covers 4.842 square kilometres, far more than any shopping street, because it has to reach every outlier. Python then joins the places into a Delaunay triangulation, a mesh of triangles with no point inside any triangle\'s circle, and keeps only triangles whose circle is smaller than a chosen radius, called alpha. Triangles that touch along an edge form one piece of the outline.' },
        { kind: 'table', caption: 'Alpha shapes round Roath\'s shops and food places at five settings, our Python run on OpenStreetMap data', head: ['Alpha (circle radius)', 'Area covered', 'Share of the convex hull', 'Separate pieces'], rows: [
          ['60 m', '0.181 km2', '3.7%', '21'],
          ['100 m', '0.531 km2', '11.0%', '13'],
          ['150 m', '1.268 km2', '26.2%', '9'],
          ['250 m', '2.440 km2', '50.4%', '3'],
          ['400 m', '3.714 km2', '76.7%', '1']
        ] },
        { kind: 'p', text: 'At 60 m the outline breaks into 21 tight pieces. The largest holds 235 places, and the street most often written in their address tags is Wellfield Road; the second holds 101, mostly tagged Crwys Road. At 150 m those streets merge into one piece of 451 places, and at 400 m everything is a single blob covering three quarters of the hull. None of these answers is wrong. Each alpha is a different definition of "one shopping area", and the table shows how much hangs on it.' },
        { kind: 'grid3', cells: [
          { h3: 'Years 3 to 6', p: 'Stretch an elastic band round pins on a map, then trace a tighter outline by hand and compare.' },
          { h3: 'Years 7 to 9', p: 'Plot Roath\'s shops in Python and draw their convex hull, then measure how much empty space it takes in.' },
          { h3: 'Years 10 and up', p: 'Build alpha shapes from a Delaunay triangulation and chart area and piece count against alpha.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap data, our outlines', p: 'Shops, cafes and address tags are from OpenStreetMap and its contributors under the Open Database Licence. The triangulation, outlines and counts are our own work; street names are only the most common address tag in each piece, not official boundaries.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Outlines and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A neat boundary on a map is the product of a dial someone turned.',
      body: [
        { kind: 'table', caption: 'From the Roath outlines to working with AI', head: ['In the alpha shape project', 'When AI groups or outlines data'], rows: [
          ['The convex hull covered 4.842 km2', 'The simplest summary can be very misleading'],
          ['60 m gave 21 pieces, 400 m gave 1', 'One parameter can change the whole answer'],
          ['No alpha was the right one', 'Some questions need a stated definition'],
          ['Street names came from address tags', 'Labels depend on what the data records'],
          ['Five settings were compared', 'Show the answer under several settings']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to "find the shopping areas" in a list of points and it will return clean outlines without mentioning the setting that produced them. In vibe coding a learner describes the program and an AI writes it; our Roath learners also ask which parameter shaped the answer and rerun it at several values before trusting any map. AI agents that summarise data into regions or segments make the same hidden choice. We hold back agent projects until Python is no longer the obstacle, which tends to mean sixth form or adult learners, and anything built in Copilot Studio is taught in private sessions. The thinking is laid out on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>, and the next steps on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents course page for UK learners</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no link with OpenStreetMap, Nomis, the Office for National Statistics or postcodes.io; we used their open data, and the outlines and any errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From elastic bands to computational geometry',
    intro: 'Welsh school years, Years 1 to 13, guide where we begin; the trial settles it.',
    cols: [
      { band: 'Years 1 to 6', h3: 'How to think', p: 'Shapes, groups and deciding where a boundary goes.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and geometry', p: 'Coordinates, triangulations and maps alongside WJEC GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data, AI and agents', p: 'Spatial data, machine learning and AI agents, built in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Geometry and code',
    h2: 'What is an alpha shape, and how is it different from a convex hull?',
    intro: 'A convex hull is the tightest outline with no dents, like an elastic band round all the points; an alpha shape keeps only the small triangles between nearby points, so it can dent inwards, leave holes and split into pieces, with the alpha value setting how close counts as close.',
    p1: 'Round Roath\'s 529 mapped shops and cafes, the convex hull covered 4.842 square km, while alpha shapes covered 3.7% of that in 21 pieces at 60 m and 76.7% in one piece at 400 m.',
    p2: 'Learners who have run that comparison ask of any outline an AI draws: which setting made this shape, and what happens if it changes?',
    closer: 'Seeing the choice behind a boundary lets Roath teenagers question AI-drawn maps and segments, and building them in code is the quickest way to learn that in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'How lessons reach Roath',
    intro: 'You supply a computer with a webcam and a line fast enough for video; we supply the tutor.',
    cells: [
      { h3: 'The learner codes', p: 'Everything is typed and run by the student; the tutor watches the shared screen and asks why each step works.' },
      { h3: 'Level from the trial', p: 'The free session shows where to start, and any WJEC course is noted.' },
      { h3: 'First lesson free', p: 'No fee for lesson one, which ends with a course recommendation.' },
      { h3: 'Classes by level', p: 'Five to ten learners from around the UK, all working at one stage.' },
      { h3: 'Two a week in term', p: 'We stop for school holidays.' },
      { h3: 'Same slot all year', p: 'Our tutors absorb UK clock changes, so your time stays put.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, free on the same evening, are rarely neighbours even in a busy district. Over video it does not matter.' }
  },

  fees: {
    h2: 'Roath fees',
    intro: 'Roath is billed at the international rate, the same one every country outside India pays.',
    first: 'A full lesson free, then a recommendation.',
    group: 'About eight live group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Tuition is quoted in US dollars only. No invoice goes out until the trial has fixed both the course and the weekly hour, and the pricing page answers questions about holidays, absences and swapping format.'
  },

  reviewsH2: 'What people in Cardiff and further afield have written about us on Google',

  book: {
    h2: 'Book a free Roath lesson',
    intro: 'A school year (or just an age) and a hobby give us enough to plan. Expect something like an elastic-band puzzle on a pinboard map, a Scratch game co-built with an AI, a few lines of beginner Python, or an outline drawn round real shops.',
    success: 'Thank you. Your Roath request is with us.'
  },

  faq: {
    h2: 'Roath questions',
    intro: 'Outlines, the shop project, Python, vibe coding and the practical side.',
    items: [
      { q: 'What is the population of Roath?', a: 'No official figure exists for Roath, which is not a census area. Postcode lookups put points in Roath inside Plasnewydd ward (18,277 residents in 2021) and Penylan ward (12,911).' },
      { q: 'Can Roath learners join coding and AI classes online?', a: 'They are. Every lesson is a live video call, so Penylan, Cathays and the rest of Cardiff are all within reach for ages 6 to 67.' },
      { q: 'What is a convex hull?', a: 'The smallest outline with no inward dents that contains every point, the shape an elastic band makes round a set of pins.' },
      { q: 'What does the alpha value control in an alpha shape?', a: 'How big a gap between points can be bridged. Small values give tight outlines in many pieces; large values approach the convex hull. In Roath, 60 m gave 21 pieces and 400 m gave one.' },
      { q: 'What does the Roath project involve?', a: 'Mapping 529 shops, cafes and pubs from OpenStreetMap, drawing their convex hull and alpha shapes, and measuring how the outline changes with alpha.' },
      { q: 'Does the course include vibe coding?', a: 'It does, whatever the age. The learner sets out what the program must do, an AI drafts it, and the learner hunts for what it got wrong.' },
      { q: 'When do learners start on AI agents?', a: 'Once they write Python unaided, usually Year 11 or later or as adults; Copilot Studio agents are one-to-one only.' },
      { q: 'Is WJEC exam support offered?', a: 'For GCSE and A level Computer Science, Digital Technology and Maths, yes. We teach the ideas and promise no grade.' },
      { q: 'How much are lessons?', a: 'Nothing for the trial. Monthly tuition after it is USD 100 in a class, or USD 150 with a tutor to yourself.' },
      { q: 'Do lessons stop in the holidays?', a: 'They pause; tell us when your school breaks up.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Cardiff and south Wales pages',
    html: 'Each of these is built round a different experiment: <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a> (city size and Zipf\'s law), <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-llandaff-cardiff">Llandaff</a>, <a class="cg-inline-link" href="/coding-classes-in-vale-of-glamorgan">the Vale of Glamorgan</a> and <a class="cg-inline-link" href="/best-coding-class-in-newport-wales">Newport</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales guide</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> cover everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Roath and Cardiff',
  footerPlaces: [
    { href: '/best-coding-class-in-cardiff', label: 'Cardiff' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-rth .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-rth .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-rth .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-rth .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rth .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-rth .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-rth .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rth .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-rth .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-rth .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Cardiff (W06000015). Wales: Curriculum for Wales, Years 1 to 13, WJEC GCSE and A level. Nomis Census 2021 TS001, 2022 wards: Plasnewydd 18,277; Penylan 12,911; Cathays 21,821. postcodes.io places: Roath (Y Rhath) and Roath Park, suburban areas of Cardiff, CF23; reverse lookups: 51.4956,-3.1562 Penylan ward; CF24 3HG Plasnewydd ward.',
    localProject: 'OSM API 0.6 bbox -3.185,51.483,-3.150,51.505 (6 tiles): 529 shops and food places (328 with addr:street). Convex hull 4.842 km2. Alpha (circumradius) 60 / 100 / 150 / 250 / 400 m: area 0.181 / 0.531 / 1.268 / 2.44 / 3.714 km2; share 3.7 / 11.0 / 26.2 / 50.4 / 76.7%; pieces 21 / 13 / 9 / 3 / 1. Largest at 60 m: 235 (Wellfield Road tag), 101 (Crwys Road). Lesson family: alpha shapes, concave hulls.',
    requiredMentions: [
      '18,277',
      '12,911',
      '4.842',
      'Plasnewydd',
      'Penylan',
      'Roath Park',
      'Wellfield Road',
      'Crwys Road',
      'alpha shape',
      'Y Rhath'
    ],
    sources: [
      { claim: 'OpenStreetMap shops, food places and address tags in Roath, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'Nomis Census 2021 TS001 usual residents by 2022 ward, Cardiff.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and reverse postcode lookups: Roath (Y Rhath), Roath Park; Plasnewydd and Penylan wards.', url: 'https://api.postcodes.io/places?q=Roath' }
    ],
    rejectedClaims: [
      'A population for Roath: no official figure exists; ward counts shown instead and not added together.',
      'That Roath is exactly Plasnewydd and Penylan wards: not claimed; only that sample points fall there.',
      'Named shops or the quality of any shopping street: none named or judged.',
      'Park, lake or history claims: not read from a source; not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
