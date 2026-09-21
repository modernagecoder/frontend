'use strict';
// Nottingham (cg- city page, UK cluster Phase 4). Spine: stretch a rubber band round every tram stop. Convex
// hull of the 50 active Nottingham Express Transit stops in NaPTAN (national area 940, ATCO prefix 9400ZZNO,
// StopType MET, status active; Station Street is listed inactive), read 21 September 2026 in British National
// Grid metres (scratchpad ntm/hull.py, inside.py). Monotone chain: 8 hull corners (Toton Lane, Clifton South,
// Holy Trinity, Ruddington Lane, Nottingham Station, Lace Market, Butler's Hill, Hucknall), 90 pops; gift wrapping
// gives the same 8 corners with 392 orientation tests. Hull area 67.94 km2, perimeter 37.05 km. Removing one
// corner at a time: Toton Lane -5.78 km2 (8.5%), Hucknall -5.64 (8.3%), Lace Market -1.08 (1.6%), Butler's Hill
// -0.54 (0.8%), Clifton South -0.48 (0.7%), Holy Trinity -0.44 (0.7%), Ruddington Lane -0.43 (0.6%), Nottingham
// Station -0.26 (0.4%); effects are not additive and are never summed. Phoenix Park, one of the four places
// trams run to (NET timetables: towards Hucknall and Phoenix Park, towards Toton Lane and Clifton South), lies
// inside the hull. Against the ONS LAD December 2023 BGC boundary (74.62 km2 on that file by our calculation):
// 15 of 50 stops outside the Nottingham local authority area; 74.0% of the hull (50 m grid) inside it. Farthest
// pair Hucknall to Clifton South 15.76 km. Lesson family: convex hull (orientation test, monotone chain against
// gift wrapping, collinear handling, sensitivity to extreme points). Screened free site-wide on 21 September 2026
// (famcheck.js: convex hull 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 for Nottingham E06000018 (323,632 usual
// residents; 301,065 in households; 22,567 in communal establishments, 7.0%), TS007A (31,692 aged 15 to 19, 9.8%;
// 43,635 aged 20 to 24, 13.5%; 24,275 aged 25 to 29, 7.5%; England 5.7, 6.0 and 6.6%), TS068 (102,350
// schoolchildren and full-time students of 305,813 aged 5 and over, 33.5%; England 20.4%). Green's Windmill and
// Science Centre, About George Green (14 months at school, left at ten; 1828 greatest work; Caius College,
// Cambridge, five years later at forty; died 1841 aged 47; buried at St Stephen's; Westminster Abbey plaque 1993;
// Bromley House Library his gateway to the academic world; the mill on Windmill Lane). Nottingham UNESCO City of
// Literature, About (permanent designation as a UNESCO Creative City).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'NOTTINGHAM', blurb: 'George Green\'s city, with a project that stretches a rubber band round every stop on the tram network.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-nottingham',
  code: 'ngm',
  accent: '#415936',
  accentRationale: 'Nottingham: a deep forest green from the solver (6.30:1 on every paper tint, dE 7.0 from the nearest used accent), a quiet nod to Sherwood, and clear of the Leeds green and the Bristol brown',
  pageType: 'city',
  place: {
    name: 'Nottingham',
    eyebrow: 'Nottingham, East Midlands, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Nottinghamshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Nottingham, England',
  title: 'Best Coding Classes in Nottingham | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Nottingham learners aged 6 to 67, from Bulwell and Sherwood to Clifton and Wollaton. First lesson free.',
  ogDescription: 'Coding and AI lessons for Nottingham, George Green\'s city, on a page that stretches a rubber band round all 50 tram stops and asks what the shape really shows.',
  twitterDescription: 'Coding and AI lessons, live online, for Nottingham learners from six to sixty-seven, starting with a free first lesson.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Nottingham Coding, Maths and AI Classes Online',
    description: 'Live online lessons in coding, Python, AI, data and mathematics for Nottingham children, teenagers and adults, grouped by level or taught one to one in English.'
  },

  h1: 'Coding classes in Nottingham',
  capsuleQ: 'What are the best coding classes in Nottingham?',
  capsule: 'Nottingham had 323,632 usual residents at the 2021 Census, and 13.5% of them were aged 20 to 24, against England\'s 6.0%. It is the home city of George Green, the self-taught miller whose mathematics is still used by scientists and engineers, and it holds a permanent designation as a UNESCO City of Literature. Modern Age Coders teaches Nottingham learners aged six to sixty-seven in live online lessons: one to one, or in groups of five to ten at the same level, with teachers in India and times set in UK hours. The opening lesson is free. Groups then cost USD 100 a month, and one-to-one teaching USD 150 a month.',
  lead: 'Put a pin in a map at each of Nottingham\'s 50 tram stops and stretch a rubber band around all of them. The shape the band makes is called the convex hull, and finding it is one of the first problems in computational geometry. For the NET network, listed stop by stop in the Department for Transport\'s NaPTAN register, the band touches just 8 of the 50 stops, from Hucknall in the north to Clifton South and Toton Lane in the south, and encloses 67.94 square kilometres. Phoenix Park, one of the four places the trams run to, sits inside the band rather than on it. Take away Toton Lane and the enclosed area shrinks by 8.5%; take away Hucknall instead and it shrinks by 8.3%. Two stops out of fifty each hold up a large slice of the shape, which is why a hull on its own can mislead. Finding it, and knowing what it cannot tell you, is the lesson Nottingham\'s trams give our teenage learners.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Nottingham, please.',

  picks: {
    eyebrow: 'Course picks for Nottingham',
    h2: 'Four courses for George Green\'s city',
    intro: 'Go by the learner\'s interests. Each course starts with a free live lesson, and booking needs no card.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Python with turtle graphics, a natural way to plot a handful of stops and draw the band around them.' },
      { course: 'gcse-mathematics-mastery', band: 'GCSE years', note: 'Coordinates, vectors and area at GCSE level, the exact tools the hull calculation leans on.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Stacks, sorting and geometry basics built from scratch, the ingredients of the sort-then-stack hull method.' },
      { course: 'college-mathematics-complete-masterclass', band: 'University and adult', note: 'Linear algebra from vectors upwards, including the cross product that sits inside every turn test.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Nottingham today',
      h2: 'Nottingham\'s late teens and early twenties stand out',
      intro: 'From the 2021 Census tables for the Nottingham local authority area, published by the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Nottingham, Census 2021', head: ['What was counted', 'Nottingham', 'England'], rows: [
          ['Usual residents', '323,632', 'Not compared'],
          ['Living in households', '301,065', 'Not compared'],
          ['Living in communal establishments', '22,567, 7.0%', 'Not compared'],
          ['Aged 15 to 19', '31,692, 9.8%', '5.7%'],
          ['Aged 20 to 24', '43,635, 13.5%', '6.0%'],
          ['Aged 25 to 29', '24,275, 7.5%', '6.6%'],
          ['Schoolchildren and full-time students, of 305,813 aged five and over', '102,350, 33.5%', '20.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A peak at twenty', p: 'Residents aged 20 to 24 made up 13.5% of Nottingham, against 6.0% nationally, and those aged 15 to 19 another 9.8%.' },
          { h3: 'A third in study', p: 'In 2021, 33.5% of residents aged five and over were schoolchildren or full-time students, compared with 20.4% across England.' },
          { h3: 'Halls in the count', p: 'The 22,567 people in communal establishments, 7.0% of residents, include those in student halls of residence.' }
        ] },
        { kind: 'p', text: 'The drop after 24 is just as telling: those aged 25 to 29 were 7.5%, much closer to England\'s 6.6%. For our classes, that shape simply means Nottingham learners arrive at every stage, from a child in Bilborough on their first block program to a sixth former in Sherwood preparing for A level Computer Science, and each joins a group at their own level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'George Green',
      h2: 'A miller who changed mathematics',
      intro: 'From Green\'s Windmill and Science Centre and from Nottingham UNESCO City of Literature.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '14 months', p: 'Green\'s Windmill and Science Centre says George Green had only 14 months at school, leaving at ten to work in his father\'s bakery and later in the windmill his father built.' },
          { h3: '1828', p: 'That year, the Centre says, the self-taught Green published his greatest work, a completely new way of using mathematics to understand electricity and magnetism.' },
          { h3: '1993', p: 'For the bicentenary of his birth, a memorial plaque to Green was dedicated in Westminster Abbey. Green\'s theorem and Green\'s functions are still used by scientists and engineers.' }
        ] },
        { kind: 'p', text: 'Five years after that essay, Green became a student at Caius College, Cambridge, at the age of forty, and later a Fellow of the college. He died in 1841 aged 47 and is buried at St Stephen\'s church, close to the windmill on Windmill Lane, which today works as a mill and science centre. Nottingham also holds a permanent designation as a UNESCO City of Literature. We have no connection with either organisation. Green\'s story matters to our learners because it shows how far a self-taught mathematician could go with a library and persistence; the Centre calls Bromley House Library his gateway to the academic world.' },
        { kind: 'spec', title: 'Fifty stops in a national register', p: 'The project uses NaPTAN, the Department for Transport\'s register of public transport stops, which lists 50 active stops for Nottingham Express Transit. A former stop, Station Street, is kept in the register but marked inactive, so a program that forgets to filter on status finds 51.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A rubber band round 50 tram stops',
      intro: 'The convex hull is the smallest convex shape containing every point. We built it for the NET stops in British National Grid metres, twice, by two different methods.',
      body: [
        { kind: 'table', caption: 'The eight NET stops on the convex hull, and how much the hull shrinks if each one alone is removed', head: ['Stop on the hull', 'Area lost if removed', 'Share of the hull'], rows: [
          ['Toton Lane', '5.78 sq km', '8.5%'],
          ['Hucknall', '5.64 sq km', '8.3%'],
          ['Lace Market', '1.08 sq km', '1.6%'],
          ['Butler\'s Hill', '0.54 sq km', '0.8%'],
          ['Clifton South', '0.48 sq km', '0.7%'],
          ['Holy Trinity', '0.44 sq km', '0.7%'],
          ['Ruddington Lane', '0.43 sq km', '0.6%'],
          ['Nottingham Station', '0.26 sq km', '0.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. The turn test', p: 'For three points in order, one cross product says whether the path turns left, turns right or runs straight. Every hull method is built on that single test.' },
          { h3: '2. Sort, then sweep', p: 'Sort the stops west to east, then build the lower and upper edges, throwing out any stop that makes a right turn. On the NET data that meant 90 removals.' },
          { h3: '3. Check another way', p: 'Gift wrapping walks round the outside, testing every stop at each corner: 392 turn tests here. Both methods find the same 8 corners and 67.94 square kilometres.' }
        ] },
        { kind: 'callout', h3: 'The band is not the network', p: 'The hull is an outline of stops, not a map of where trams go. By our check against the ONS boundary, 15 of the 50 stops lie outside the Nottingham local authority area, and only 74.0% of the hull falls inside the city. The band also stretches across land between the branches that no tram runs through. A hull is a quick, honest summary of how far a set of points spreads, and a misleading one if it is read as coverage.' },
        { kind: 'p', text: 'The removal table carries its own warning. Each row removes one stop and keeps the rest, so the rows cannot be added together: take away Toton Lane and Hucknall together and the hull loses 11.01 square kilometres, not the 11.42 the two rows would suggest, because Inham Road becomes a new corner. Learners predict the combined effect first, then run it and explain the gap.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Geometry on real maps',
      h2: 'Five habits for honest shapes',
      intro: 'Practised on tram stops, used afterwards on collision checks in games, outlines of clusters in data science, sensor readings and delivery areas.',
      body: [
        { kind: 'table', caption: 'Building a convex hull you can defend', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Work in metres', 'Use British National Grid eastings and northings, not raw latitude and longitude', 'Areas warped because degrees are not square'],
          ['Decide on straight lines', 'Choose whether three stops in a row keep the middle one as a corner', 'Hulls with duplicate or missing corners'],
          ['Build it twice', 'Compare a sorting method with gift wrapping on the same data', 'A clever algorithm with a bug nobody noticed'],
          ['Test the extremes', 'Remove each corner stop in turn and record the change in area', 'A shape quietly held up by one outlier'],
          ['Say what the shape is', 'Describe the hull as an outline of points, not the area served', 'An envelope mistaken for a service map']
        ] },
        { kind: 'p', text: 'The second habit is where most first attempts go wrong. If the turn test treats a straight run as a turn, stops lying exactly on an edge get added as extra corners; if it throws them out, they vanish. Neither is wrong, but the program must choose on purpose and say which it did. Ours removes them, which is why the NET hull has 8 corners and not more.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Pins, a rubber band and a printed tram map, then a short program that draws the band round a few points.' },
          { h3: 'Teenagers', p: 'The NaPTAN file read in Python, filtered to active stops, both hull methods written and compared, and the removal table built.' },
          { h3: 'Adults', p: 'Outlines of sites, customers or sensors, with outliers tested before any area or spread is reported.' }
        ] },
        { kind: 'p', text: 'We are not connected with Nottingham Express Transit, the Department for Transport, the Office for National Statistics, Green\'s Windmill and Science Centre or Nottingham UNESCO City of Literature. NaPTAN and the boundary are published for public use; the hull, areas and counts are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From pins and a rubber band to a hull you can prove',
    intro: 'Ages give a rough starting point; the free lesson settles the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Pins and a rubber band', p: 'Plotting points on squared paper, finding the outside ones by eye and checking with a real band.', courses: ['elementary-mathematics-complete-masterclass', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Coordinates on a grid', p: 'Points as pairs of numbers, drawn with turtle graphics, with distances and areas worked out in code.', courses: ['python-ai-kids-masterclass', 'comprehensive-middle-school-mathematics-mastery'] },
      { band: 'Ages 14 to 18', h3: 'Hull algorithms in Python', p: 'The turn test, the sort-then-stack method and gift wrapping, run on real stop data and compared.', courses: ['problem-solving-dsa-masterclass-teens', 'gcse-mathematics-mastery'] },
      { band: 'Ages 18 to 67', h3: 'Geometry for real data', p: 'Computational geometry, vectors and complexity for analysts and engineers who work with locations.', courses: ['data-structures-algorithms-masterclass-college', 'college-mathematics-complete-masterclass'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A mapping tool draws an outline in one click. Why should a Nottingham teenager write a convex hull?',
    intro: 'Because the outline depends on things the click never shows.',
    p1: 'Ask an assistant how much ground the Nottingham tram network covers and it may well draw a hull and quote a number. It is unlikely to add that two stops each hold up more than 8% of that area, that about 26% of it lies outside the city, or that the shape includes land no tram goes near. Those facts decide whether the number means anything, and they only surface when someone tests the shape.',
    p2: 'Convex hulls also sit inside a lot of software. Collision checks in games, the outlines drawn round clusters in data science and some machine learning methods all rest on the same turn test learners write for the trams. Understanding that one primitive means understanding a small piece of a great deal of code.',
    closer: 'So a Nottingham teenager should still learn to program in 2026, in the city of George Green: software can draw any shape instantly, but knowing what holds a shape up, and what it leaves out, remains a skill worth learning properly.',
    blogAnchor: 'why learning to code still pays off in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Bulwell, Clifton or Wollaton, with no tram ride needed',
    intro: 'Even with trams, crossing Nottingham takes time; a live online lesson removes the trip.',
    cells: [
      { h3: 'No journey across the city', p: 'A learner in Bulwell and another in Clifton, near opposite ends of the tram network, can join the same lesson from home.' },
      { h3: 'Stages that match local schools', p: 'Reception, Key Stages 1 to 4, Year 9 options, GCSEs and A levels, in the terms English schools use, with lessons in English throughout.' },
      { h3: 'A first lesson with substance', p: 'The free lesson is genuine teaching on a real task and finishes with a clear level, a suggested course and a proposed time. No card is needed.' },
      { h3: 'Grouped by what they know', p: 'Five to ten learners working at one level, from Nottingham, the rest of the UK and abroad, so every level has a workable slot.' },
      { h3: 'The same time, twice a week', p: 'Two lessons weekly at a fixed hour, around eight a month, with pauses for holidays and exams agreed with the teacher ahead of time.' },
      { h3: 'Teachers on India time', p: 'India Standard Time has no summer change, so our teachers are four and a half hours ahead of Nottingham from late March to late October and five and a half in winter; after-school and evening slots land in their working day.' }
    ],
    spec: { title: 'Room for university students', p: 'University students can take evening or weekend slots around lectures, and pause for exam periods by agreement with the teacher, then pick up again at the same level.' }
  },

  fees: {
    h2: 'Nottingham lesson prices',
    intro: 'Short enough to read in one breath.',
    first: 'A free, complete lesson that ends with a level, a recommended course and a suggested weekly time.',
    group: 'A month of group teaching, about eight live lessons, with five to ten learners at the same level.',
    private: 'A month of one-to-one teaching, about eight live lessons, with the teacher\'s attention on one learner.',
    closer: 'Every family outside India pays the same US dollar fee, so a household in Sherwood and one in Lenton pay identical amounts, and we keep no pound prices. We bill only once the free lesson has settled the course and slot; the pricing page explains pausing, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews by families, shown unedited',

  book: {
    h2: 'Request a free lesson for a Nottingham learner',
    intro: 'We pick the first task by level: pins and a rubber band for a young child, a Python program that plots the tram stops, or the full convex hull with a removal table for a teenager ready for real algorithms.',
    success: 'Thank you. The team will contact you shortly about a Nottingham lesson.'
  },

  faq: {
    h2: 'Nottingham coding class questions',
    intro: 'What Nottingham families ask us most.',
    items: [
      { q: 'What is the population of Nottingham?', a: 'The 2021 Census counted 323,632 usual residents in the Nottingham local authority area: 301,065 in households and 22,567, or 7.0%, in communal establishments.' },
      { q: 'How many Nottingham residents are students?', a: 'In 2021, 102,350 of the 305,813 residents aged five and over were schoolchildren or full-time students, 33.5% against 20.4% across England.' },
      { q: 'Who was George Green?', a: 'A Nottingham miller and self-taught mathematician who, according to Green\'s Windmill and Science Centre, had only 14 months at school and published his greatest work in 1828. Green\'s theorem and Green\'s functions are named after him. We are not connected with the Centre.' },
      { q: 'What is a convex hull?', a: 'The smallest convex shape that contains a set of points, like a rubber band stretched round pins. For Nottingham\'s 50 tram stops it touches 8 of them and encloses 67.94 square kilometres.' },
      { q: 'Which tram stops are on the hull?', a: 'Toton Lane, Clifton South, Holy Trinity, Ruddington Lane, Nottingham Station, Lace Market, Butler\'s Hill and Hucknall. Phoenix Park, one of the four places NET trams run to, lies inside it.' },
      { q: 'How many tram stops are outside the city boundary?', a: 'By our check against the ONS boundary, 15 of the 50 stops lie outside the Nottingham local authority area, including Hucknall, Toton Lane and Clifton South, so the network reaches well beyond the city.' },
      { q: 'What time are Nottingham lessons?', a: 'After school, in the evening and at weekends, fixed in UK time during the free lesson. India is four and a half hours ahead of Nottingham in summer and five and a half in winter.' },
      { q: 'Does Modern Age Coders have a Nottingham centre?', a: 'No. There is no centre in Nottingham and no premises anywhere in the UK; every lesson happens live online. Learners need a computer with audio and a dependable connection, and our phone number is based in India.', boiler: true },
      { q: 'How much do Nottingham lessons cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight in total, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. We agree course, format and time before any charge.', boiler: true },
      { q: 'How do you form Nottingham groups?', a: 'On ability, pace and goals, not age or postcode, with five to ten learners at one level. If no group meets at a suitable time, we offer one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'More Midlands and northern cities',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-coventry">Coventry page</a> links bus stops into groups, <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a> samples a footfall record fairly, and <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a> times a rise travelling down the River Medlock. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out the school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> lists every UK page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Nottingham and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-leeds', label: 'Leeds' },
    { href: '/best-coding-class-in-coventry', label: 'Coventry' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-ngm .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.2vw, 2.8rem); }
.cg-root.cg-ngm .cg-hero h1 { font-weight: 700; letter-spacing: -0.016em; line-height: 1.09; }
.cg-root.cg-ngm .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.3rem; }
.cg-root.cg-ngm .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ngm .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.013em; }
.cg-root.cg-ngm .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2.1rem); }
.cg-root.cg-ngm .cg-table caption { font-weight: 600; letter-spacing: 0.018em; }
.cg-root.cg-ngm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ngm .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-ngm .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Nottingham, Census 2021 via Nomis: TS001 Nottingham local authority (E06000018) 323,632 usual residents, 301,065 in households, 22,567 in communal establishments (7.0 percent); TS007A 31,692 aged 15 to 19 (9.8 percent), 43,635 aged 20 to 24 (13.5 percent), 24,275 aged 25 to 29 (7.5 percent), against England 5.7, 6.0 and 6.6 percent; TS068 102,350 schoolchildren and full-time students of 305,813 residents aged 5 and over, 33.5 percent, against 20.4 percent in England. Green\'s Windmill and Science Centre, About George Green: 14 months at school, left at ten; 1828 greatest work; Caius College, Cambridge, five years later at forty, then a Fellow; died 1841 aged 47; buried at St Stephen\'s; memorial plaque in Westminster Abbey in 1993; Bromley House Library his gateway to the academic world; the mill on Windmill Lane. Nottingham UNESCO City of Literature: permanent designation as a UNESCO Creative City.',
    localProject: 'A rubber band round 50 tram stops. NaPTAN national area 940, ATCO prefix 9400ZZNO, StopType MET, status active: 50 NET stops (Station Street inactive), read 21 September 2026, British National Grid metres. Monotone chain hull: 8 corners (Toton Lane, Clifton South, Holy Trinity, Ruddington Lane, Nottingham Station, Lace Market, Butler\'s Hill, Hucknall), 90 pops; gift wrapping: same 8 corners, 392 orientation tests. Area 67.94 km2, perimeter 37.05 km. Single removals: Toton Lane 5.78 km2 (8.5 percent), Hucknall 5.64 (8.3), Lace Market 1.08 (1.6), Butler\'s Hill 0.54 (0.8), Clifton South 0.48 (0.7), Holy Trinity 0.44 (0.7), Ruddington Lane 0.43 (0.6), Nottingham Station 0.26 (0.4); not additive: removing Toton Lane and Hucknall together loses 11.01 km2 (16.2 percent) and makes Inham Road a corner. Phoenix Park, a destination on NET timetables, lies inside the hull. ONS LAD December 2023 BGC boundary: 15 of 50 stops outside; 74.0 percent of the hull inside (50 m grid). Lesson family: convex hull (orientation test, monotone chain, gift wrapping, collinear handling, sensitivity to extreme points); distinct from Voronoi, point-in-polygon and Monte Carlo coverage.',
    requiredMentions: [
      '323,632',
      '301,065',
      '22,567',
      '43,635',
      '102,350',
      '305,813',
      'George Green',
      'Windmill Lane',
      'Toton Lane',
      'Hucknall',
      'Clifton South',
      'Caius'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Nottingham: 323,632 usual residents; 301,065 in households; 22,567 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000018' },
      { claim: 'Nomis, Census 2021 TS007A: Nottingham and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000018,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Nottingham 102,350 students of 305,813 aged 5 and over (33.5 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000018,E92000001' },
      { claim: 'Department for Transport, NaPTAN access nodes for national area 940: 50 active NET stops, Station Street inactive.', url: 'https://naptan.api.dft.gov.uk/v1/access-nodes?dataFormat=csv&atcoAreaCodes=940' },
      { claim: 'Nottingham Express Transit, timetables: trams towards Hucknall and Phoenix Park, and towards Toton Lane and Clifton South.', url: 'https://www.thetram.net/timetables' },
      { claim: 'ONS Open Geography, Local Authority Districts December 2023 BGC: the Nottingham boundary.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2023_Boundaries_UK_BGC/FeatureServer/0' },
      { claim: 'Green\'s Windmill and Science Centre, About George Green: schooling, 1828, Caius College, 1841, Westminster Abbey plaque.', url: 'https://www.greensmill.org.uk/about/about-george-green/' },
      { claim: 'Nottingham UNESCO City of Literature, About: permanent designation as a UNESCO Creative City.', url: 'https://nottinghamcityofliterature.com/about/' }
    ],
    rejectedClaims: [
      'University of Nottingham and Nottingham Trent University student numbers: no dated figure found on a primary page read for this build, so none stated.',
      'University research rankings: not used; the page makes no ranking claims.',
      'Published NET route length and opening dates: not found on a primary page read for this build, so not stated.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Nottingham Express Transit, the Department for Transport, the ONS, Green\'s Windmill and Science Centre or Nottingham UNESCO City of Literature.'
    ]
  }
};
