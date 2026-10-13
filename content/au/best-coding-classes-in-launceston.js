'use strict';
// Launceston (cg- regional city page, Australia cluster Phase 7, row 147). Shaped page: leads with teenagers and
// adults.
// Spine: how far apart are two versions of the same boundary? Data: City of Launceston Open Data,
// AdministrativeAreas feature service (ArcGIS item d622bbe04fb74325a6b0c18e1678e965, licensed Creative Commons
// Attribution 4.0 per the item's licence information), layers 3 "Launceston_LGA" and 1 "Launceston_LGA_Pre1985",
// GeoJSON queried 7 October 2026. Layer 3: one polygon, 3,265 vertices, Shape__Area 1,420,268,518 m2 (1,420.3 km2);
// layer 1: one polygon, 1,057 vertices, Shape__Area 28,562,958 m2 (28.6 km2). Our code (scratchpad
// au/r2/lst_haus.py), local equirectangular metres at 41.44 S, boundaries sampled every 50 m (5,966 and 1,413
// points): our own areas 1,411.4 and 28.4 km2. Directed Hausdorff, regions: older area to current area 17.2 m
// (251 of the 1,413 older-boundary samples fall outside the current area, none by more than 17.2 m; 10 of 11,369
// 50 m grid cells inside the older area fall outside the current one); current area to older area 38.99 km.
// Directed Hausdorff, boundary lines only: older line to current line 5.47 km. Farthest point of the current
// area from the older one near 147.65 E, 41.48 S. Lesson family: directed versus symmetric Hausdorff distance;
// screened 0 location-page hits on 7 October 2026; claimed by AU-R2.
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Significant Urban Area 6004 Launceston:
// 90,953 people; median age 39; 24,061 families; 40,151 private dwellings; 2.4 people per household; separate
// house 29,618 (82.2%; Tasmania 87.7%; Australia 72.3%); flat or apartment 2,904 (8.1%; Tasmania 5.3%; Australia
// 14.2%); Professionals 8,939 (20.9%; Tasmania 20.0%; Australia 24.0%); Bachelor Degree level and above 16,406
// (21.8%; Tasmania 21.9%; Australia 26.3%); aged 15 to 19 5,242 (5.8%; Tasmania 5.4%); aged 20 to 24 5,898
// (6.5%; Tasmania 5.6%). Department for Education, Children and Young People, 2027 term dates: Term 2 26 April
// to 2 July; Term 3 19 July to 24 September; teachers in schools start Monday 1 February; colleges set their own
// finishing dates. IANA tz: Australia/Hobart, daylight saving 4 October 2026 to 4 April 2027. Excluded: income,
// rent, mortgage, ancestry, birthplace, language, religion, health; flood layers on the same portal were not used.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'LAUNCESTON', label: 'Launceston', blurb: 'Launceston at the head of the Tamar, two council boundaries, and the Hausdorff distance between them.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-launceston',
  code: 'lstn',
  accent: '#1A3E5C',
  accentRationale: 'Launceston: a deep river-gorge navy (HSV saturation 0.72, value 0.36, hue 207), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, and 4.8:1 or better on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Launceston',
    eyebrow: 'Launceston, Tasmania, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Tasmania' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-tasmania', name: 'Tasmania' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Tasmania', href: '/coding-and-ai-classes-in-tasmania' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Launceston, Tasmania',
  title: 'Best Coding Classes in Launceston | Live Online, Teens and Adults',
  description: 'Live online coding, Python and geometry classes for Launceston teenagers and adults, taught by a real teacher one to one or in small groups. First lesson free.',
  ogDescription: 'Coding classes for Launceston teens and adults, with a project measuring how far two versions of the council boundary sit apart.',
  twitterDescription: 'Launceston coding classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Geometry Classes for Launceston Learners',
    description: 'Level-matched online Python, computational geometry, maps and problem solving for teenagers and adults in Launceston and northern Tasmania, taught live in English.'
  },

  h1: 'Coding classes in Launceston',
  capsuleQ: 'What are the best coding classes in Launceston?',
  capsule: 'For Launceston teenagers and adults, a live class in which a teacher writes real code beside you, from Python fundamentals to the geometry inside every mapping app, using Tasmania\'s own open data. The Launceston urban area counted 90,953 people at the 2021 Census, with 5,898 of them aged 20 to 24. Classes run online, one to one or in a small level-matched group, and the opening lesson costs nothing.',
  lead: 'Two shapes can be close in one direction and far apart in the other. The City of Launceston publishes its council boundary as open data, and alongside it a second, much smaller boundary the council labels "Launceston LGA Pre1985". How far apart are they? The answer depends on which way you ask. Start anywhere inside the older area and you are never more than 17.2 metres from the current one, because the older area sits almost entirely within it. Start anywhere inside the current area and you can be 38.99 kilometres from the older one. That lopsided pair of numbers is the Hausdorff distance, and our Launceston learners compute it from scratch.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Launceston.',

  picks: {
    eyebrow: 'Course picks for Launceston',
    h2: 'Courses that suit a Launceston learner',
    intro: 'Each one connects to the boundary project. The free first lesson chooses between them, with no card required.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from scratch to reading map files and working with coordinates, one tested step at a time.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Geometry, searching and careful reasoning about distance, practised on real shapes instead of textbook squares.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Algorithms for points, lines and polygons, with honest attention to accuracy and running time.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Handling public datasets, including spatial ones, with Python and SQL and a record of every choice made.' }
    ]
  },

  sections: [
    {
      id: 'quickstats', tint: '', eyebrow: 'Launceston in the 2021 Census',
      h2: 'Northern Tasmania\'s city, a little younger than its state',
      intro: 'The bureau\'s QuickStats for the Launceston Significant Urban Area, read beside Tasmania and Australia.',
      body: [
        { kind: 'table', caption: 'Launceston urban area, 2021 Census QuickStats, with Tasmanian and national shares', head: ['Measure', 'Launceston', 'Tasmania', 'Australia'], rows: [
          ['Usual residents', '90,953', 'not listed', 'not listed'],
          ['Median age', '39', 'not listed', 'not listed'],
          ['Families', '24,061', 'not listed', 'not listed'],
          ['Private dwellings', '40,151', 'not listed', 'not listed'],
          ['Flats or apartments among occupied homes', '2,904 (8.1%)', '5.3%', '14.2%'],
          ['People aged 20 to 24', '5,898 (6.5%)', '5.6%', 'not listed']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'More flats than the state', p: '8.1% of occupied homes in urban Launceston were flats or apartments, against 5.3% across Tasmania, though separate houses still made up 82.2%.' },
          { h3: 'Young adults', p: '5,898 residents were aged 20 to 24, a larger share than in Tasmania overall, alongside 5,242 aged 15 to 19.' },
          { h3: 'Qualifications', p: '16,406 people aged 15 and over held a bachelor degree or above, 21.8%, and 8,939 employed residents worked as professionals.' }
        ] },
        { kind: 'p', text: 'A standing rule for our census work: the bureau perturbs small counts slightly to keep people anonymous, so a table\'s pieces need not add up to its printed total. We copy each number exactly as published and never manufacture a total from the parts.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How far apart are two versions of one boundary?',
      intro: 'The Hausdorff distance between the City of Launceston\'s current council area and the older boundary it publishes beside it, measured in both directions.',
      body: [
        { kind: 'table', caption: 'The two boundary layers, as downloaded on 7 October 2026', head: ['Layer', 'Corner points', 'Area in the file', 'Area by our code'], rows: [
          ['Launceston LGA (current)', '3,265', '1,420.3 km²', '1,411.4 km²'],
          ['Launceston LGA Pre1985', '1,057', '28.6 km²', '28.4 km²']
        ] },
        { kind: 'table', mt: true, caption: 'Directed distances between the two (our calculation)', head: ['Question', 'Answer'], rows: [
          ['From anywhere in the older area, how far to the current area?', '17.2 metres at most'],
          ['From anywhere in the current area, how far to the older area?', '38.99 kilometres at most'],
          ['From the older boundary line, how far to the current boundary line?', '5.47 kilometres at most'],
          ['Older-area grid cells (50 m) lying outside the current area', '10 of 11,369']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Sample', p: 'Walk around each boundary and drop a point every 50 metres, so a long straight edge counts as much as a wiggly one.' },
          { h3: '2. Measure', p: 'For every point on one shape, find the nearest point of the other. The largest of those nearest distances is the directed Hausdorff distance.' },
          { h3: '3. Swap and compare', p: 'Run it the other way round. Here one direction gives 17.2 metres and the other 38.99 kilometres: the shapes are not symmetrically related.' }
        ] },
        { kind: 'callout', h3: 'Why the boundary-only answer is different', p: 'Measured between the two boundary lines alone, the older line can sit 5.47 kilometres from the current line, because most of the older line now runs through the middle of the larger area rather than along its edge. Measured between the areas, that same older line is never more than 17.2 metres outside. Which version you compute decides what question you have answered, and choosing correctly is the real lesson.' },
        { kind: 'p', text: 'All distances are ours, computed from the council\'s layers as downloaded on 7 October 2026 with a flat local projection that is adequate at the scale of one council area. The 17.2-metre slivers almost certainly come from the two layers being drawn separately, but we have not confirmed that with the council. Nothing here describes when or why any boundary changed.' }
      ]
    },
    {
      id: 'geometry', tint: 'tint', eyebrow: 'Inside the calculation',
      h2: 'Five decisions hidden in one distance',
      intro: 'Every spatial result rests on choices that change the answer. Learners make each one deliberately and write it down.',
      body: [
        { kind: 'table', caption: 'Choices in the Launceston Hausdorff project and their effect', head: ['Decision', 'What we chose', 'If you choose differently'], rows: [
          ['Area or outline', 'Areas, with the outline result shown alongside', '17.2 metres becomes 5.47 kilometres'],
          ['Direction', 'Both directions, reported separately', 'A single number hides the asymmetry'],
          ['Sampling interval', 'A point every 50 metres', 'Coarser sampling can miss a narrow spike'],
          ['Flat or round Earth', 'Flat projection at Launceston\'s latitude', 'Errors grow on continent-sized shapes'],
          ['Which area figure', 'Our own, with the file\'s value shown beside it', 'A small, unexplained 0.6% gap goes unnoticed']
        ] },
        { kind: 'p', text: 'The last row matters more than it looks. Our area for the current council comes to 1,411.4 square kilometres; the file\'s own field says 1,420.3. A difference of about 0.6% usually means the two numbers were measured on different map projections. Reporting both, rather than quietly picking one, is the habit that keeps spatial work honest.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Hausdorff distance between two hand-drawn shapes on graph paper, then the same code on the real Launceston layers.' },
          { h3: 'University students', p: 'Directed distances, efficient nearest-point search and the link to shape matching in computer vision.' },
          { h3: 'Adults', p: 'Compare versions of maps, plans or designs your work produces, and report what actually changed.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is independent of the City of Launceston, the Tasmanian Government and the statistics bureau, and claims no partnership with any of them. Census figures come from the bureau; areas and distances were produced by our own code from the council\'s published layers.' }
      ]
    },
    {
      id: 'terms', tint: '', eyebrow: 'Launceston\'s year',
      h2: 'Tasmanian terms and summer time',
      intro: 'The calendar a Launceston learner studies around in 2027.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Mid-year terms', p: 'Term 2 runs from 26 April to 2 July 2027 and Term 3 from 19 July to 24 September, according to the Tasmanian education department.' },
          { h3: 'Colleges differ', p: 'The department notes that colleges have their own finishing dates, which may depend on exam dates.' },
          { h3: 'Daylight saving', p: 'Tasmania puts its clocks forward on Sunday 4 October 2026 and back on Sunday 4 April 2027.' }
        ] },
        { kind: 'spec', title: 'Why the council publishes an old boundary', p: 'Councils keep historical layers because records, plans and statistics from earlier years still refer to them. A program that compares old and new versions has to know which one a given record belongs to, which is exactly what the Hausdorff project trains learners to think about.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From plotting points to measuring shapes',
    intro: 'Ages here are guidance only; the free lesson finds the right level.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Points on a grid', p: 'Python that stores coordinates, measures distances and finds the nearest of a set of points.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Shapes in code', p: 'Polygons, areas and the Hausdorff distance, tested on the Launceston layers and on shapes learners invent.', courses: ['problem-solving-dsa-masterclass-teens', 'java-programming-masterclass-for-teens'] },
      { band: 'University', h3: 'Computational geometry', p: 'Nearest-point structures, projections and accuracy on real spatial datasets.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Maps you can trust', p: 'Spatial data for work and community projects, with every assumption recorded and checked.', courses: ['data-analysis-mastery-course-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can compute a Hausdorff distance in one line. Why should a Launceston learner understand it?',
    intro: 'Because a one-line answer will not tell you whether it measured outlines or areas, one direction or both, and those choices changed this result from metres to kilometres.',
    p1: 'Ask an AI assistant how far apart Launceston\'s two boundaries are and it will probably call a geometry library and return a single number. That number could be 38.99 kilometres, 5.47 kilometres or something else, depending on whether the library compared outlines or filled shapes and whether it took the larger of the two directions. Each is a valid computation. Only one matches the question you meant to ask.',
    p2: 'Learners who have built the measurement themselves know which questions to put to any answer, whether it comes from a library, a colleague or an AI: what was compared, in which direction, on what projection, sampled how finely. Those four questions turn a confident figure into an understood one.',
    closer: 'In 2026 every tool will give you a distance; a Launceston learner who knows what was measured is the one whose maps and conclusions hold up.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Newnham, Kings Meadows or Riverside, the same live lesson',
    intro: 'Launceston climbs the hills on both sides of the Tamar, and a video lesson reaches every one of them without the drive.',
    cells: [
      { h3: 'East and West Tamar', p: 'A learner in Trevallyn and one in Mowbray can share a class, each joining from their own home.' },
      { h3: 'Tasmanian schooling', p: 'Lessons follow Tasmanian year levels and the four-term year, and college students can relate projects to TASC courses. Teaching is in English.' },
      { h3: 'An actual lesson first', p: 'The free trial is regular teaching, and it closes with a level, a course suggestion and a weekly time. Card details are never requested.' },
      { h3: 'Classmates at your stage', p: 'Groups of fifteen to twenty learners at the same level, from northern Tasmania and further away, so nobody waits for a class to fill.' },
      { h3: 'Lessons twice weekly', p: 'Approximately eight a month at a regular time, with holidays and assessment periods planned with the teacher.' },
      { h3: 'Where our teachers are', p: 'A 5pm Launceston lesson begins at 11:30am in India while Tasmania is on daylight saving, and at 12:30pm after the clocks go back.' }
    ],
    spec: { title: 'Tasmanian time and India time', p: 'Tasmania changes its clocks with the eastern mainland and India never does, so our teachers are five and a half hours behind Launceston in summer and four and a half in winter. Lesson times are always confirmed in Launceston time.' }
  },

  fees: {
    h2: 'What classes cost in Launceston',
    intro: 'Every price, stated once.',
    first: 'A free full lesson that ends with your level, a course recommendation and a regular slot.',
    group: 'Around eight lessons a month, shared with fifteen to twenty learners working at your level.',
    private: 'Close to eight lessons a month, with a teacher devoted to one learner.',
    closer: 'Except in India, we set fees in US dollars, so a household in Prospect pays the same as one in Ravenswood and there is no Tasmanian rate. We bill only after the trial confirms a course and a time, and the pricing page explains breaks, absences and changing between group and one-to-one lessons.'
  },

  reviewsH2: 'Google reviews from the families we teach',

  book: {
    h2: 'Book a free first lesson',
    intro: 'Give an age and an interest. A Year 8 student might start by measuring distances between points on a grid; an adult might tackle the full two-boundary comparison.',
    success: 'Thank you. A member of the team will contact you about a Launceston class.'
  },

  faq: {
    h2: 'Launceston coding class questions',
    intro: 'What Launceston learners and parents most often ask.',
    items: [
      { q: 'How many people live in Launceston?', a: 'The 2021 Census counted 90,953 people in the Launceston urban area, according to the statistics bureau\'s QuickStats. The median age was 39.' },
      { q: 'What is the Hausdorff distance?', a: 'A way to measure how far apart two shapes are. For every point of the first shape, find its nearest point on the second; the largest of those distances is the directed Hausdorff distance. Computing it in both directions and taking the larger gives the symmetric version.' },
      { q: 'What is the Launceston boundary project?', a: 'Learners download two council boundary layers from the City of Launceston\'s open data, sample them every 50 metres and measure the Hausdorff distance both ways. From the older area to the current one it is 17.2 metres; from the current area to the older one, 38.99 kilometres.' },
      { q: 'Why are the two directions so different?', a: 'Because the older area sits almost entirely inside the much larger current one. Nothing in the older area is far from the current area, but much of the current area is far from the older one. The Hausdorff distance is not symmetric unless you deliberately make it so.' },
      { q: 'Do you help Tasmanian college students?', a: 'Yes. We follow Tasmanian year levels and help college students with computing and maths, including TASC subjects. Work submitted for assessment always remains the student\'s own.' },
      { q: 'What time are lessons for Launceston learners?', a: 'Usually after school, in the evening or on a weekend morning, decided at the trial and quoted in Launceston time. Tasmania uses daylight saving and India does not, so the gap to our teachers changes by an hour twice a year.' },
      { q: 'Can primary-school children join?', a: 'Yes. Children from six start with Scratch and visual puzzles and move on to typed code when ready. The projects on this page aim at older learners.' },
      { q: 'Is there a Modern Age Coders centre in Launceston?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Launceston coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and goals rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Launceston and Tasmanian learners',
    html: 'The <a class="cg-inline-link" href="/coding-and-ai-classes-in-tasmania">Tasmania coding page</a> covers the whole state, and Hobart learners have the <a class="cg-inline-link" href="/best-coding-classes-in-hobart">Hobart page</a>. College students will find <a class="cg-inline-link" href="/tasc-computer-science-help">TASC Computer Science help</a> and <a class="cg-inline-link" href="/tasc-mathematics-methods-tutoring">TASC Mathematics Methods tutoring</a>. Every Australian page is listed on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Launceston and Tasmania',
  footerPlaces: [
    { href: '/best-coding-classes-in-hobart', label: 'Hobart' },
    { href: '/coding-and-ai-classes-in-tasmania', label: 'Tasmania' },
    { href: '/tasc-computer-science-help', label: 'TASC Computer Science' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-lstn .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.1vw, 2.4rem); }
.cg-root.cg-lstn .cg-hero h1 { font-weight: 790; letter-spacing: -0.022em; line-height: 1.05; }
.cg-root.cg-lstn .cg-capsule { border: 1px solid var(--cg-accent); border-left-width: 5px; padding: 0.8rem 1rem; }
.cg-root.cg-lstn .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-lstn .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.015em; }
.cg-root.cg-lstn .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2rem); }
.cg-root.cg-lstn .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-lstn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lstn .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-lstn .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Launceston, ABS Census 2021 QuickStats, Significant Urban Area 6004 (read 7 October 2026): 90,953 people; median age 39; 24,061 families; 40,151 private dwellings; average 2.4 people per household; dwelling structure, occupied private dwellings: separate house 29,618 (82.2 percent; Tasmania 87.7; Australia 72.3), flat or apartment 2,904 (8.1 percent; Tasmania 5.3; Australia 14.2); occupation: Professionals 8,939 (20.9 percent; Tasmania 20.0; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 16,406 (21.8 percent; Tasmania 21.9; Australia 26.3); aged 15 to 19 5,242 (5.8 percent; Tasmania 5.4); aged 20 to 24 5,898 (6.5 percent; Tasmania 5.6). Department for Education, Children and Young People, 2027 term dates: Term 2 26 April to 2 July; Term 3 19 July to 24 September; teachers in schools commence Monday 1 February; colleges have their own finishing dates. IANA tz database: Australia/Hobart daylight saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.',
    localProject: 'Directed versus symmetric Hausdorff distance. City of Launceston Open Data, AdministrativeAreas FeatureServer (services.arcgis.com/yeXpdyjk3azbqItW), item d622bbe04fb74325a6b0c18e1678e965, licence CC BY 4.0, queried as GeoJSON (outSR 4326) on 7 October 2026. Layer 3 Launceston_LGA: 1 polygon, 3,265 vertices, Shape__Area 1,420,268,517.9 m2, Shape__Length 228,166.0 m. Layer 1 Launceston_LGA_Pre1985: 1 polygon, 1,057 vertices, Shape__Area 28,562,958.4 m2. Local equirectangular projection at 41.44 S; our shoelace areas 1,411.36 and 28.42 km2. Boundaries densified to 50 m: 5,966 and 1,413 points. Older-boundary samples inside the current polygon: 1,162 of 1,413; the 251 outside are at most 17.2 m from the current boundary (region-directed Hausdorff older to current 17.2 m). Grid of 50 m cells inside the older polygon: 11,369, of which 10 outside the current polygon. Region-directed Hausdorff current to older: 38.99 km (farthest sample near 147.648 E, 41.478 S). Boundary-only directed Hausdorff older line to current line: 5.47 km.',
    requiredMentions: [
      '90,953',
      '24,061',
      '40,151',
      '16,406',
      '8,939',
      '5,898',
      '17.2 metres',
      '38.99 kilometres',
      '5.47 kilometres',
      '10 of 11,369'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Launceston Significant Urban Area (6004): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/6004' },
      { claim: 'City of Launceston Open Data, Launceston LGA and Launceston LGA Pre1985 layers (CC BY 4.0).', url: 'https://opendata.launceston.tas.gov.au/datasets/launceston::launceston-lga-1' },
      { claim: 'Department for Education, Children and Young People, Tasmanian school term dates 2027.', url: 'https://www.decyp.tas.gov.au/learning/term-dates/' },
      { claim: 'IANA time zone database, australasia file: Australia/Hobart.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'When or why Launceston\'s council boundary changed: the layer names do not explain it and no council history page was verified, so no history is given.',
      'That the 17.2-metre slivers are digitising differences: likely but unconfirmed, and stated only as likely.',
      'Flood extent, discharge and evacuation layers on the same portal: excluded by the cluster rules on disaster content.',
      'Tasmanian Government transport data (GTFS): transport.tas.gov.au returned 403 and was not circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the City of Launceston, the Tasmanian Government or the ABS.'
    ]
  }
};
