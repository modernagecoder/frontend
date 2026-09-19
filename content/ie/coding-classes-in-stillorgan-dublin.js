'use strict';
// Stillorgan, County Dublin (cg- district page, Ireland cluster, Phase 6). Named sources only
// (owner rule for districts), read 20 September 2026: DLR Development Plan 2022-2028 Boundary
// Plan Areas (GeoJSON in lon/lat, shapefile in ITM, CSV with SHAPE_Area/SHAPE_Length);
// DLR library locations CSV; DLR traffic signals and SCATS sites CSV; DLR's Stillorgan Local
// Area Plan page; Uisce Eireann's Stillorgan Reservoir project, FAQ and news pages; St
// Raphaela's Primary School's own site. Spine: projection, a degree east is not a degree north.
// Scratchpad stl/area.js: 736-corner ring; raw-degree shoelace with 111,320 m both ways
// 269,680 m2 (1.670x the file, almost exactly 1/cos 53.29 = 1.673; the gap is N != M), naive
// perimeter 5,294; sphere R 6,371,008.8 with cos(lat) 160,846 (-0.41%), perimeter 3,894.5;
// GRS80 local scales (lat degree 111,291.7 m, lon degree 66,687.6 m) 161,513.82 vs file
// 161,513.34 (0.48 m2), perimeter 3,902.6; ITM shapefile shoelace 161,513.3 = file; GeoJSON ring
// counter-clockwise (+), shapefile ring clockwise (-). Point-in-polygon (result only, not
// taught: the Netherlands cluster owns the even-odd rule; Oman owns bounding box vs shoelace):
// 4 of 290 SCATS sites inside; 1 of the 14 named "Stillorgan Rd..." (6008 @ Stillorgan Park);
// Stillorgan Library inside (lon/lat and ITM agree). The dataset's own Hyperlink for the plan
// returns 404; the live page is dlrcoco.ie/local-area-plans/stillorgan-local-area-plan-2018-...
// Euro sums on the Uisce Eireann pages are NOT used. A94 NT29 and A94 W7W7 NOT printed
// (not confirmed at the schools' own sites).

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'STILLORGAN', blurb: 'A planning boundary measured from its 735 corners, and why a degree east on the map is not a degree north.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-stillorgan-dublin',
  code: 'stl',
  accent: '#172545',
  accentRationale: 'Stillorgan: a survey-map navy from the widened solver search, well clear of the Dundrum indigo and the Blackrock sea-green',
  pageType: 'district',
  place: {
    name: 'Stillorgan',
    eyebrow: 'Stillorgan, County Dublin',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Dun Laoghaire-Rathdown' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-dun-laoghaire-rathdown', name: 'Dún Laoghaire-Rathdown' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Dún Laoghaire-Rathdown', href: '/coding-classes-in-dun-laoghaire-rathdown' },
    { label: 'Blackrock', href: '/coding-classes-in-blackrock-dublin' }
  ],
  routeLabel: 'Stillorgan, County Dublin, Ireland',
  title: 'Coding Classes in Stillorgan, Dublin | Modern Age Coders',
  description: 'Coding, Python, AI and maths lessons for Stillorgan learners from age 6 to 67, taught live online in small same-level groups or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Stillorgan, with a map-data project that measures the local plan area from its corners and finds why degrees are not metres.',
  twitterDescription: 'Live online coding, Python, AI and maths for Stillorgan, ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Stillorgan',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Stillorgan, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Stillorgan',
  capsuleQ: 'What are the best coding classes in Stillorgan?',
  capsule: 'Stillorgan learners are taught live on video by a teacher, either in a small group of people working at the same level or one to one, normally two lessons a week, and anyone aged six through sixty-seven can take part. Nobody has to travel. The opening lesson is free; each month after that is USD 100 in a group or USD 150 one to one.',
  lead: 'The county council publishes the boundary of the Stillorgan Local Area Plan as a list of 735 corners, and it states the area inside as 161,513 square metres. Give those corners to a standard area formula without thinking and it returns 269,680, two thirds too much. Nothing is wrong with the formula or with the file. The corners are written in degrees, and at Stillorgan a degree east covers much less ground than a degree north. This page teaches a learner to spot that, fix it in three steps of increasing care, and land within half a square metre of the council\'s figure.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Stillorgan.',

  picks: {
    eyebrow: 'Courses for Stillorgan',
    h2: 'Four first courses for Stillorgan',
    intro: 'Pick by age to begin with; the teacher confirms the level in the free first lesson and suggests a different course if it fits better.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks on a grid: drawing a shape from its corners and counting the squares inside it.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python with coordinates, turning a list of corners into a perimeter and an area.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Map data in Python: reading GeoJSON, converting degrees to metres and checking results against an official figure.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who work with locations, sites or service areas and need numbers that hold up on the ground.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Degrees are not metres: measuring the Stillorgan plan area from its corners',
      intro: 'The boundary comes from the council\'s development plan data, in two versions of the same 735 corners: one in latitude and longitude, one in metres on the Irish grid. The council\'s own figure for the area is 161,513 square metres.',
      body: [
        { kind: 'table', caption: 'One boundary, four ways of measuring it', head: ['How the corners are treated', 'Area in square metres', 'Against the council figure'], rows: [
          ['Degrees counted as 111,320 m in both directions', '269,680', '67 percent too big'],
          ['Longitude shrunk by the cosine of the latitude, round Earth', '160,846', '0.41 percent too small'],
          ['Separate north and east scales for the flattened Earth', '161,514', 'within half a square metre'],
          ['Irish grid coordinates, already in metres', '161,513', 'the same figure']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why degrees mislead', p: 'At Stillorgan a degree of latitude is 111,292 metres of ground but a degree of longitude is only 66,688, because the lines of longitude draw together towards the pole. Count both as 111,320 metres, the length of a degree at the equator, and every east-west step is stretched, so the area comes out 1.670 times too large: almost exactly one over the cosine of the latitude.' },
          { h3: 'A round Earth', p: 'Shrinking each east-west step by the cosine of the latitude repairs nearly all of it: 160,846 square metres, 0.41 percent short. The remainder is there because the Earth is slightly flattened, and one radius cannot fit the north-south and east-west directions at once.' },
          { h3: 'A flattened Earth', p: 'Using the separate north-south and east-west scales of the GRS80 ellipsoid at Stillorgan\'s latitude gives 161,513.82 square metres, within half a square metre of the council\'s 161,513.34. The perimeter agrees as well, at 3,902.6 metres.' }
        ] },
        { kind: 'callout', h3: 'Ask what one unit of each coordinate means on the ground', p: 'A pair like 53.29 and minus 6.20 looks like an ordinary x and y, and an area formula will turn a list of them into a number without complaint. The number is in square degrees, and a square degree is not a fixed patch of land: at Stillorgan it is a rectangle about 111 kilometres tall and 67 wide. Before any sum, check what a step in each coordinate is worth in metres, and convert both directions to the same thing. The formula was never the problem; the input was.' },
        { kind: 'p', text: 'The learner\'s program opens the council\'s GeoJSON file, pulls out the 735 corners (the file lists 736 points because the last repeats the first to close the ring) and adds up the cross-products of neighbouring corners, the shoelace formula, first on the raw degrees and then after each conversion. It then reads the shapefile, a binary format with the same boundary in Irish grid metres, and gets 161,513.3, the council\'s own number, which shows the file and the method agree. Two details come up on the way. The signed area is positive in one file and negative in the other, because the GeoJSON walks round the boundary anticlockwise and the shapefile clockwise, so the program takes the size and ignores the sign. And the perimeter suffers less than the area in the naive version, 5,294 metres against 3,902.6, because stretching the map east-west lengthens the east-west part of each edge and leaves the north-south part almost as it was.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Inside the line', p: 'With the boundary in hand, the program tests named points. Stillorgan Library is inside. Of the 290 traffic-signal sites the council lists, four are inside, and of the 14 whose names begin with Stillorgan Road only one, at Stillorgan Park, falls within the plan area.' },
          { h3: 'A link that moved', p: 'The plan-area file stores a web address for the Stillorgan plan, and that address now returns a page-not-found error; the plan sits at a different address on the council\'s site. Data outlives its links, so a careful program records where each fact came from and checks it still resolves.' },
          { h3: 'Rounded for the reader', p: 'The same file rounds the area to 16 hectares. At 10,000 square metres to the hectare, the unrounded figure is 16.15, which is the kind of detail a program should keep until the final line.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Stillorgan, named',
      h2: 'Stillorgan in the words of its council, its water utility and its schools',
      intro: 'Each line below is taken from the body responsible for the place.',
      body: [
        { kind: 'table', caption: 'Named places in Stillorgan', head: ['Place', 'What its own source says'], rows: [
          ['Stillorgan Library', 'St Laurence\'s Park, A94 XT02'],
          ['St Raphaela\'s Primary School', 'St Raphaela\'s Road, A94 R7N8'],
          ['Stillorgan Reservoir', 'A covered store for 160 million litres of treated drinking water'],
          ['Stillorgan Local Area Plan', 'Adopted 10 September 2018, extended 13 November 2023']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The reservoir', p: 'Uisce Éireann says the covered reservoir holds 160 million litres of treated drinking water for more than 200,000 people in south Dublin. It was built within the footprint of the Gray Reservoir, which had not been fully drained since it was built in 1885; construction began in November 2018.' },
          { h3: 'Where the water comes from', p: 'The utility names two treatment plants that feed it, Vartry in County Wicklow and Ballymore Eustace in County Kildare. The original Vartry scheme included a four-kilometre tunnel under Callowhill and 40 kilometres of trunk mains to Stillorgan.' },
          { h3: 'The plan', p: 'The council adopted the Stillorgan Local Area Plan on 10 September 2018 for six years, and on 13 November 2023 extended it for a further five. St Raphaela\'s Primary School lists STEM among its school initiatives.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is stated for Stillorgan, because the page uses only what named bodies publish about the place. The plan boundary is a planning line, not the edge of the village, and the reservoir figures are Uisce Éireann\'s own.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'A Stillorgan learner\'s week',
      intro: 'Most weeks bring two lessons, each one taught live by the teacher throughout.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children start with block code and grid games, drawing shapes from their corners and counting what fits inside.' },
          { h3: 'Teenagers', p: 'Teenagers go on to Python, websites, AI projects and real map files like the plan boundary, with the maths laid bare by the code.' },
          { h3: 'Adults', p: 'Adults can arrive with no experience; the first lesson decides the course.' }
        ] },
        { kind: 'p', text: 'Boundary, library and signal-site data are Dún Laoghaire-Rathdown County Council\'s; the areas, perimeters and inside-or-outside results are our own calculations, run on 20 September 2026. Reservoir details are Uisce Éireann\'s and school details the school\'s own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From squares on a grid to shapes on the Earth',
    intro: 'Use the bands as a first guess; lesson one sets the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Count the squares', p: 'Block-coded shapes on a grid, with areas found by counting.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Corners to area', p: 'Python that walks round a list of corners and adds up an area.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Degrees to metres', p: 'Latitude, longitude and the conversions that make map arithmetic honest.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Location data at work', p: 'Sites, catchments and boundaries measured so that the numbers match the ground.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant to find the area of a boundary',
    intro: 'It may write the formula perfectly and still get the answer wrong.',
    p1: 'Give an AI assistant a list of latitude and longitude pairs and ask for the area inside, and it may well produce correct-looking code for the shoelace formula and a confident number. Unless it converts the degrees first, that number is in the wrong unit, and for the Stillorgan boundary it is two thirds too big. The code runs; the answer is still wrong.',
    p2: 'The learner who has done this project knows the question to ask next: what is a degree of longitude worth in metres here, and does the result match the council\'s own figure? An assistant can then help with the conversion, and the official number is the check.',
    closer: 'Correct code on the wrong units gives a wrong answer. A learner who checks the units catches it.',
    blogAnchor: 'why learning to code is still worth the time'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Stillorgan',
    intro: 'The essentials.',
    cells: [
      { h3: 'In real time', p: 'No recorded video stands in for the teacher: every lesson happens live, with help on each learner\'s own code.' },
      { h3: 'Matched by stage', p: 'Five to ten learners at the same stage, whether they join from Stillorgan, another county or another country.' },
      { h3: 'Fixed days', p: 'Two set days a week, which comes to about eight lessons in a month.' },
      { h3: 'Term-aware', p: 'The plan leaves room for school holidays, mid-terms and exams.' },
      { h3: 'Equipment', p: 'A laptop or desktop computer, a microphone, something to listen through, and broadband that copes with a video call.' },
      { h3: 'One to one', p: 'Private teaching when a learner is well ahead, needs extra time, or can only manage unusual hours.' }
    ],
    spec: { title: 'Nothing to travel to', p: 'There is no Modern Age Coders building in Stillorgan or anywhere in Ireland. Lessons happen on video and are identical wherever the learner sits.' }
  },

  fees: {
    h2: 'Fees for Stillorgan',
    intro: 'Briefly.',
    first: 'The first lesson, level check included, costs nothing.',
    group: 'One month in a same-level group of five to ten: roughly eight live lessons.',
    private: 'One month of one-to-one teaching on the same pattern.',
    closer: 'Outside India every family pays the same fee in US dollars, a month at a time. The opening lesson carries no obligation and billing starts only when the course does; the pricing page explains holidays, missed lessons and moving between group and private lessons.'
  },

  reviewsH2: 'Google reviews from families, as they wrote them',

  book: {
    h2: 'Book a free first lesson in Stillorgan',
    intro: 'Tell us how old the learner is and what they like, and we will plan the first lesson around that. It may end with a small game, a working program, or a shape on a map measured from its corners.',
    success: 'Thank you. We will be in touch to arrange the lesson.'
  },

  faq: {
    h2: 'Stillorgan coding class questions',
    intro: 'What families in Stillorgan tend to ask first.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Stillorgan?', a: 'No. We teach live over video and have no premises in Ireland. A learner needs a computer, a microphone and sound, and a reliable connection. The phone number on this page is an Indian one.', boiler: true },
      { q: 'What is the plan boundary project?', a: 'The learner takes the 735 corners of the Stillorgan Local Area Plan boundary from the council\'s files and works out the area inside: 269,680 square metres if the degrees are treated as metres, 161,513.82 once north and east are converted properly, against the council\'s 161,513.34.' },
      { q: 'Is the plan boundary the edge of Stillorgan?', a: 'No. It is the area the council\'s local plan covers. The page uses it as a real, published shape to measure, not as a definition of the district.' },
      { q: 'Why does this page give no population for Stillorgan?', a: 'District pages here print only what named bodies publish about the place, in this case the council, Uisce Éireann and a school, and none of them gives a head count for Stillorgan.' },
      { q: 'What times are the lessons?', a: 'After school on weekdays and through the evening, plus daytime at weekends. Times are quoted in Irish time. India, where the teachers are based, sits five and a half hours ahead of Stillorgan from the end of October to the end of March and four and a half hours ahead for the rest of the year, and the timetable only uses hours that suit both.' },
      { q: 'Can an adult sign up?', a: 'Yes. Anyone up to sixty-seven is welcome, including complete beginners, and after the free lesson they choose between a same-level group and one-to-one lessons.' },
      { q: 'Will my child be with other children from Stillorgan?', a: 'Only by chance. Groups are formed by level, so classmates may live anywhere in Ireland or further away.' },
      { q: 'What do coding classes in Stillorgan cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for about eight live lessons, two a week, in a group of five to ten learners, and one-to-one teaching on the same schedule is USD 150 a month. Terms are agreed before anything is paid.', boiler: true },
      { q: 'How large are the groups?', a: 'Five to ten learners, matched by level, pace and goals rather than by age or postcode. If no group fits a workable time, the lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Stillorgan',
    html: 'To the north-east, <a class="cg-inline-link" href="/coding-classes-in-blackrock-dublin">Blackrock</a> has a project on DART waiting times, while <a class="cg-inline-link" href="/coding-classes-in-sandyford-dublin">Sandyford</a> and <a class="cg-inline-link" href="/coding-classes-in-dundrum-dublin">Dundrum</a> are neighbouring districts with pages of their own. The <a class="cg-inline-link" href="/coding-classes-in-dun-laoghaire-rathdown">Dún Laoghaire-Rathdown</a> page covers the county, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Stillorgan, Dún Laoghaire-Rathdown and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-blackrock-dublin', label: 'Blackrock' },
    { href: '/coding-classes-in-dun-laoghaire-rathdown', label: 'Dún Laoghaire-Rathdown' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-stl .cg-hero-grid { align-items: start; gap: clamp(1.19rem, 3.08vw, 2.53rem); }
.cg-root.cg-stl .cg-hero h1 { font-weight: 690; letter-spacing: -0.0203em; line-height: 1.06; }
.cg-root.cg-stl .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1.26rem; }
.cg-root.cg-stl .cg-eyebrow { letter-spacing: 0.141em; font-weight: 620; text-transform: uppercase; }
.cg-root.cg-stl .cg-section-head h2 { max-width: 36ch; letter-spacing: -0.0109em; }
.cg-root.cg-stl .cg-grid-3 { gap: clamp(1.13rem, 2.66vw, 2.07rem); }
.cg-root.cg-stl .cg-table caption { letter-spacing: 0.037em; font-weight: 680; }
.cg-root.cg-stl .cg-table td { font-variant-numeric: tabular-nums slashed-zero; }
.cg-root.cg-stl .cg-table tr td:last-child { font-weight: 560; }
.cg-root.cg-stl .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.94rem; }
.cg-root.cg-stl .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Stillorgan, named sources only (owner rule for districts), read 20 September 2026. DLR Development Plan 2022-2028 Boundary Plan Areas on data.smartdublin.ie (dataset 70f527be...): CSV row "Boundary of Stillorgan Local Area Plan", Map_Number 2, Area__Ha_ 16, SHAPE_Length 3902.565451, SHAPE_Area 161513.3371, Hyperlink https://www.dlrcoco.ie/en/planning/local-area-plans/stillorgan-local-area-plan-2018-%E2%80%93-2024 (returns 404 on 20 September 2026); GeoJSON (no crs member, lon/lat) Polygon with one ring of 736 positions, first and last equal, so 735 distinct corners; shapefile .prj IRENET95_Irish_Transverse_Mercator (central meridian -8, scale 0.99982). Our arithmetic (stl/area.js): raw-degree shoelace 2.1762e-5 square degrees, positive (anticlockwise); 111,320 m per degree both ways (6,378,137 x pi/180 = 111,319.49) gives 269,680 m2, 1.670 x file, perimeter 5,294 m; sphere R 6,371,008.8 m with longitude x cos(53.28932) gives 160,846 m2 (-0.41%), perimeter 3,894.5; GRS80 at 53.28932 N: 111,291.7 m per degree of latitude, 66,687.6 m per degree of longitude (ratio 0.5992), area 161,513.82 m2 against 161,513.34 (0.48 m2), perimeter 3,902.6; ITM shapefile shoelace -161,513.3 (clockwise), perimeter 3,902.6. 1/cos(53.28932) = 1.6729; the naive factor is 1.6697 because the meridian degree (111,291.7) is not 111,320. Point in polygon (ray casting, result only): of 290 rows in DLR "Traffic signals and SCATS sites locations" (dlr_scats_sites-1.csv), 4 inside (6008 Stillorgan Rd @ Stillorgan Park; 6063 Kilmacud Rd Lwr/Old Stillorgan Rd; 6216 Lower Kilmacud Road; 6375 Kilmacud Road); 14 sites begin "Stillorgan R", 1 inside. DLR library locations CSV: "STILLORGAN PUBLIC LIBRARY", "SAINT LAURENCE\'S PARK", eircode A94XT02, ITM 720232.168 728129.271, lon -6.196652528 lat 53.28981732: inside in both coordinate systems. DLR Stillorgan LAP page (https://www.dlrcoco.ie/local-area-plans/stillorgan-local-area-plan-2018-%E2%80%93-2024): "A Local Area Plan for Stillorgan was adopted by the Council on 10th September 2018 and will be valid for a period of 6 years"; "On the 13th November 2023 it was extended in accordance with the legislation for a further period of 5 years from the 13th November 2023." Uisce Eireann Stillorgan Reservoir project page: "The new reservoir has the capacity to store 160 million litres of treated drinking water"; "a safer, more secure and sustainable water supply for over 200,000 in south Dublin"; "the draining down of the Gray Reservoir, which had not been fully drained since it was built in 1885"; "The new covered reservoir was then constructed within the footprint of the Gray Reservoir"; Vartry scheme "two impounding reservoirs at Roundwood, County Wicklow, a water treatment plant, a four kilometre long tunnel under Callowhill and 40 kilometres of trunk mains to deliver water to the Stillorgan Reservoir". FAQ: "The reservoirs at Stillorgan store treated drinking water from water treatment plants at Vartry in County Wicklow and Ballymore Eustace in County Kildare"; "Construction commenced in November 2018." St Raphaela\'s Primary School: "St. Raphaela\'s Primary School, St. Raphaela\'s Road, Stillorgan, Co. Dublin, A94 R7N8"; menu item "S.T.E.M" under School Initiatives.',
    localProject: 'Projection: a degree east is not a degree north. From the council\'s Stillorgan Local Area Plan boundary (735 corners), the learner computes the area on raw degrees (269,680 square metres with 111,320 m per degree both ways, 67 percent too big), with a round-Earth cosine correction (160,846, 0.41 percent short) and with GRS80 north and east scales (161,513.82, within half a square metre of the council\'s 161,513.34), then confirms against the Irish grid shapefile (161,513.3). Side findings: opposite ring orientation in the two files; the naive perimeter is stretched less than the area; four of 290 signal sites and the library fall inside the boundary; the file\'s own link to the plan is dead. Lessons: check what one unit of each coordinate means on the ground; correct code on the wrong units gives a wrong answer; verify against the publisher\'s own figure. New family for the cluster and site: PROJECTION / ANISOTROPIC DEGREES (not Arklow units, not Bahla bounding box, not Baarle even-odd).',
    requiredMentions: [
      '269,680',
      '160,846',
      '161,513.82',
      '0.41 percent',
      '66,688',
      '111,292',
      '3,902.6',
      '735 corners',
      'A94 XT02',
      'A94 R7N8',
      'Gray Reservoir',
      'Ballymore Eustace'
    ],
    sources: [
      { claim: 'Dún Laoghaire-Rathdown County Council, Development Plan 2022-2028 Boundary Plan Areas: Stillorgan Local Area Plan boundary (GeoJSON), with SHAPE_Area 161,513.34 square metres, SHAPE_Length 3,902.57 metres and a rounded 16 hectares (CSV).', url: 'https://data.smartdublin.ie/dataset/70f527be-1f31-4c37-9c88-c1e757e5140b/resource/c826ba32-1800-4e9b-996b-a62ab64278db/download/devplan2022_2028_boundary-plan-areas.geojson' },
      { claim: 'The same boundary as an Irish Transverse Mercator shapefile.', url: 'https://data.smartdublin.ie/dataset/70f527be-1f31-4c37-9c88-c1e757e5140b/resource/e956e4e1-f274-4ff3-8beb-1e0798b41b9c/download/boundary-plan-areas.zip' },
      { claim: 'Dún Laoghaire-Rathdown County Council, Traffic signals and SCATS sites locations: 290 sites with coordinates.', url: 'https://data.smartdublin.ie/dataset/9376ee85-c576-44a4-80bf-9b87f46f0682/resource/60018c00-d47e-4ea9-a960-01ec1786a150/download/dlr_scats_sites-1.csv' },
      { claim: 'Dún Laoghaire-Rathdown County Council, library locations: Stillorgan Public Library, Saint Laurence\'s Park, A94 XT02, with coordinates.', url: 'https://data.smartdublin.ie/dataset/a6d9b80d-563d-4bc7-b2db-dae2c57ba361/resource/004af97a-71c3-4d54-9cb1-71b8fa91cf03/download/librarylocationsdlr.csv' },
      { claim: 'Dún Laoghaire-Rathdown County Council, Stillorgan Local Area Plan 2018-2024: adopted 10 September 2018 for six years; extended on 13 November 2023 for a further five years.', url: 'https://www.dlrcoco.ie/local-area-plans/stillorgan-local-area-plan-2018-%E2%80%93-2024' },
      { claim: 'Uisce Éireann, Stillorgan Reservoir Upgrade Project: 160 million litres; over 200,000 people in south Dublin; built within the footprint of the Gray Reservoir, built in 1885; the Vartry scheme\'s four-kilometre tunnel under Callowhill and 40 kilometres of trunk mains.', url: 'https://www.water.ie/projects/local-projects/stillorgan-reservoir-upgrade-project' },
      { claim: 'Uisce Éireann, Stillorgan Reservoir Project FAQs: water from treatment plants at Vartry, County Wicklow, and Ballymore Eustace, County Kildare; construction commenced November 2018.', url: 'https://www.water.ie/projects/local-projects/stillorgan/faqs' },
      { claim: 'St Raphaela\'s Primary School: St Raphaela\'s Road, Stillorgan, A94 R7N8; STEM listed among school initiatives.', url: 'https://straphaelasns.ie/' }
    ],
    rejectedClaims: [
      'Bounding box against shoelace area: the Bahla page in the Oman cluster owns that comparison.',
      'Teaching the even-odd ray-casting rule: the Netherlands cluster owns it; this page reports inside-or-outside results only.',
      'Any euro figure from the Uisce Éireann pages.',
      'A94 NT29 (St Raphaela\'s Secondary School) and A94 W7W7 (Oatlands College): not confirmed at the schools\' own sites.',
      'The plan boundary as the edge of Stillorgan, and any population figure for Stillorgan or census small-area aggregation: owner rule for district pages.'
    ]
  }
};
