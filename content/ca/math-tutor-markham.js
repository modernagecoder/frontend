'use strict';
// Math tutor, Markham (cg- city page, Canada cluster Wave 2, row 162). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: where distance and coordinates appear in Ontario math (Grade 8, MPM2D analytic geometry, MCV4U vectors), routed
// to the live spokes; one geometry lesson, the distance formula on real projected coordinates, checking our length of
// every City of Markham trail segment against the stored LENGTH field; a rounding worked problem on one segment; the
// CIMC and CSMC contest slice; a price section on what a monthly fee covers.
// Sources, read raw on 22 October 2026 (curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md
// with saved raw files in ca/src/; geography from ca/facts-geo.md; Markham files in ca/src-pilots/math-tutor-markham/):
//  - Ontario DCP API: MPM2D "Principles of Mathematics" (2005, Grade 10 Academic) as the MCR3U prerequisite; MCV4U
//    "Calculus and Vectors", MHF4U "prior to or concurrently"; MTH1W (2021); MDM4U. Strand summaries are ours.
//  - CEMC CIMC/CSMC: "Students in Grades 9 and 10 are eligible to write the CIMC." / "Students in Grades 11 and 12 and CEGEP
//    students are eligible to write the CSMC."; "9 questions; 6 are answer only and 3 are full-solution."; "Time allowed for
//    completion is 2 hours."; "North and South America: Wednesday, November 18, 2026"; ordering deadline "Thursday,
//    October 22, 2026"; through a school; past contests free.
//  - facts-geo.md: Markham is in the Toronto CMA; 905 belt overlay 289/365/742/905; Ontario UTC-5 from 1 November 2026.
//  - City of Markham, "Trails" item c445d4d0a22041d2a961e919a8df59ed (saved): snippet "This feature contains trails within
//    Markham used for walking and hiking."; licenseInfo links the City of Markham Terms of Use page, saved as
//    markham-terms-page-item.txt: "Open Data Licence - City of Markham (Version 1.0)"; "use the Information commercially";
//    credit statement "Contains public sector Information made available under the City of Markham's Open Data Licence"
//    (curly apostrophe in source). Layer OD_TRAILS queried in two pages (offsets 0 and 2000) on 22 October 2026;
//    spatialReference wkid 26917 (NAD83 / UTM zone 17N, metres); fields OBJECTID, LENGTH, TRAIL_NAME, PUBLIC_, MATERIAL.
// Our own calculations (trails.py, page_snippet.py, python -I): 3,424 segments, all with geometry, 3,424 distinct OBJECTID;
// our polyline length matches LENGTH within 1 cm for 3,240 segments and within 1 m for 3,422; the two largest gaps are
// OBJECTID 3066 (ours 41.21 m, LENGTH 44.92 m, gap 3.70 m) and OBJECTID 3064 (gap 2.99 m); 12 segments have more than one
// path; median segment 36.7 m, mean 72.4 m, longest 3,139.6 m, shortest 0.11 m; median 5 vertices; MATERIAL CONC 1,348,
// ASPH 1,250, GRAV 420, blank 224, BDWK 59, INTR 52, LMST 42, NTRL 29; PUBLIC_ Yes 3,033, No 377, blank 14; 320 distinct
// names, 58 unnamed segments. Worked segment OBJECTID 45 (Randall Park, asphalt, 3 vertices): 5.3845 + 4.4034 = 9.7879 m,
// LENGTH 9.78788496; the same coordinates rounded to 2 decimals give 9.7954 m. No total trail length is printed (a sum of
// published segment lengths), and no per-trail sums.
// Lesson family: distance formula on projected coordinates; checking a computed value against a stored field; rounding error.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CODE = [
  'import json, math',
  '',
  'def polyline_length(paths):',
  '    total = 0.0',
  '    for path in paths:',
  '        for a, b in zip(path, path[1:]):',
  '            total += math.dist(a[:2], b[:2])',
  '    return total',
  '',
  'segments = []',
  'for name in ("trails_page_0.json", "trails_page_2000.json"):',
  '    segments += json.load(open(name))["features"]',
  '',
  'gaps = []',
  'for seg in segments:',
  '    ours = polyline_length(seg["geometry"]["paths"])',
  '    gaps.append((abs(ours - seg["attributes"]["LENGTH"]), seg["attributes"]["OBJECTID"]))',
  '',
  'print("segments:", len(gaps))',
  'print("within 1 cm:", sum(g < 0.01 for g, _ in gaps))',
  'print("within 1 m:", sum(g < 1 for g, _ in gaps))',
  'print("largest gaps:", sorted(gaps, reverse=True)[:2])'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'MARKHAM MATH', label: 'Math tutor in Markham', blurb: 'Math help for Markham students with coordinates and distance traced through Ontario math, a City of Markham trails geometry lesson, and the CIMC and CSMC contests.' },
  market: CA,
  slug: 'math-tutor-markham',
  code: 'mtum',
  accent: '#615C2F',
  accentRationale: 'Markham math: a muted moss bronze, #615C2F, allocated for this row; the nearest other Canada accent is #606628, 12.2 RGB units away (Euclidean); contrast 6.43 on the paper #FBF8F2 (6.05 and 5.53 on the two paper tints)',
  pageType: 'city',
  place: {
    name: 'Markham',
    eyebrow: 'Math tutor, Markham, Ontario',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-ontario', name: 'Ontario' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Math in Canada', href: '/online-math-tutor-canada' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Math tutor in Markham',
  title: 'Math Tutor Markham | Live Online Help from Grade 1 to Grade 12',
  description: 'Live online math tutoring for Markham students: Ontario courses from Grade 8 geometry to MCV4U, a City of Markham trails lesson on distance, and the CIMC and CSMC.',
  ogDescription: 'We measured all 3,424 Markham trail segments with the distance formula and checked the City\'s own lengths. A Markham math tutor page built on that lesson.',
  twitterDescription: 'Markham math tutoring, live online, with real coordinate geometry on City of Markham trail data.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring for Markham Students',
    description: 'Live online math lessons for Markham students from Grade 1 to Grade 12, with Ontario analytic geometry, MCR3U, MHF4U and MCV4U support, and CIMC, CSMC and Euclid contest preparation.'
  },

  h1: 'Math tutor in Markham, taught live online',
  capsuleQ: 'Can a Markham student get a live math tutor online?',
  capsule: 'Yes. Modern Age Coders teaches math to Markham students live online from the early grades to Grade 12, either one to one or in a live group of 15 to 20 working at the same level. Contest-minded teens take Waterloo Math Contests: Gauss to Euclid, seniors take Ontario Grade 12 University Math for MHF4U and MCV4U, and younger students take an age-matched maths course. The first lesson is free.',
  lead: 'Quick, accurate arithmetic gets a student a long way in the early grades. What separates a good Grade 10 mark from a great Grade 12 one is something slower: knowing why a formula works, and noticing when a number on the page should not be trusted. This page follows one formula, the distance between two points, from where it first appears in Ontario math to where it reappears in vectors, and links each stage to the page that covers it. Then it uses the formula on real data. The City of Markham publishes its trails as lines made of coordinates, along with the length of each piece, so a student can measure every segment and check the City&rsquo;s numbers against their own.',
  wa: 'Hello Modern Age Coders, I would like a free math class for a student in Markham.',

  picks: {
    eyebrow: 'Math course picks for Markham',
    h2: 'Four courses Markham students choose',
    intro: 'One per stage, then confirmed in a free lesson where the teacher hears the student reason.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', band: 'Grades 6 to 8', note: 'Ratio, equations, the Pythagorean relationship and early coordinate work, so analytic geometry in Grade 10 starts on solid ground.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Grades 9 and 10', note: 'Linear relations, analytic geometry and quadratics, the Grade 9 and 10 math that later courses take for granted.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', band: 'Grades 11 and 12', note: 'Advanced Functions and Calculus and Vectors, beside the school course. It does not grant an Ontario credit; the school does.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12, contest-minded', note: 'Preparation for the CIMC, CSMC and the rest of the CEMC contests, built on original problems.' }
    ]
  },

  sections: [
    {
      id: 'distance', tint: '', eyebrow: 'Ontario math in Markham',
      h2: 'Where the distance between two points turns up in Ontario math',
      intro: 'Markham public schools teach the Ontario curriculum. Following one formula through the grades shows how the courses connect, and each row links to our detailed page for that stage.',
      body: [
        { kind: 'table', caption: 'One idea across Ontario math, our summary by stage; course titles and order from the Ontario curriculum service', head: ['Stage', 'How distance appears', 'Our page'], rows: [
          ['Grades 3 to 6', 'Measuring and comparing lengths, then grids and positions; EQAO Grade 3 and Grade 6 assessments both listed for 4 May to 8 June 2027', '<a class="cg-inline-link" href="/eqao-grade-3-math-practice">Grade 3</a>, <a class="cg-inline-link" href="/eqao-grade-6-math-practice">Grade 6</a>'],
          ['Grades 7 and 8', 'The Pythagorean relationship for right triangles, the seed of every distance formula', '<a class="cg-inline-link" href="/math-classes-for-kids-in-canada">Math for kids</a>'],
          ['Grade 9, MTH1W', 'Points on a grid, slope as rise over run, and coding to model relationships', '<a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W</a>, <a class="cg-inline-link" href="/eqao-grade-9-math-practice">Grade 9 practice</a>'],
          ['Grade 10, MPM2D', 'Analytic geometry: length and midpoint of a line segment from coordinates, and the prerequisite for MCR3U', '<a class="cg-inline-link" href="/canada-high-school-math-courses-compared">Courses compared</a>'],
          ['Grade 11, MCR3U', 'Distance hidden inside trigonometry and the unit circle', '<a class="cg-inline-link" href="/mcr3u-functions-tutor">MCR3U</a>'],
          ['Grade 12, MCV4U', 'Vectors: the magnitude of a vector is the distance formula again, now in three dimensions', '<a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U</a>, <a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U</a>']
        ] },
        { kind: 'p', text: 'The value of tracing one idea like this is practical. When a Markham Grade 12 student struggles with the magnitude of a vector, the gap is rarely in Grade 12 at all; it is usually a Grade 8 triangle that was memorised rather than understood. Our first lesson with a new student looks backwards along the chain before it looks forwards. MCV4U also needs MHF4U before or alongside it, according to the ministry, so a weak Advanced Functions term affects the vectors and calculus course too.' },
        { kind: 'p', text: 'Data management, MDM4U, sits on a different branch: distributions, probability and counting. Students choosing between the Grade 12 courses can read our <a class="cg-inline-link" href="/mdm4u-data-management-tutor">MDM4U page</a> next to the MHF4U and MCV4U pages before course selection.' },
        { kind: 'callout', h3: 'Alongside school', p: 'We teach beside the school math course and we do not grant Ontario credits; credits and marks come from the student&rsquo;s school. We are not connected with the Ontario Ministry of Education, EQAO or the Markham school boards.' }
      ]
    },
    {
      id: 'trails', tint: 'deep', eyebrow: 'Markham data lesson',
      h2: 'Measuring 3,424 Markham trail segments with the distance formula',
      intro: 'The City of Markham publishes its Trails layer as open data: each piece of trail is a list of coordinates in metres, stored with the City&rsquo;s own LENGTH value. We computed every length ourselves and compared. The results below are our calculations.',
      body: [
        { kind: 'p', text: 'The City describes the layer as trails within Markham used for walking and hiking. Its coordinates are in a projected system, UTM zone 17 north, where x and y are measured in metres east and north. That matters for a student: in a projected grid, the length of a short straight piece really is the square root of (change in x) squared plus (change in y) squared, the same formula taught in Grade 10. On a map in latitude and longitude it would not be.' },
        { kind: 'table', caption: 'Our checks on the City of Markham Trails layer, downloaded 22 October 2026', head: ['What we checked', 'Our result'], rows: [
          ['Segments in the layer', '3,424, each with its own OBJECTID and geometry'],
          ['Our length within 1 cm of the LENGTH field', '3,240 segments'],
          ['Our length within 1 m of the LENGTH field', '3,422 segments'],
          ['Largest disagreement', 'OBJECTID 3066: ours 41.21 m, stored 44.92 m, a gap of 3.70 m'],
          ['Second largest', 'OBJECTID 3064, a gap of 2.99 m'],
          ['Median segment length', '36.7 m (mean 72.4 m, longest 3,139.6 m)'],
          ['Surface field, most common values', 'CONC 1,348, ASPH 1,250, GRAV 420, blank 224'],
          ['Marked public in the PUBLIC_ field', '3,033 Yes, 377 No, 14 blank']
        ] },
        { kind: 'p', text: 'A segment is not one straight line but a chain of short ones, so its length is the sum of the distance formula over each pair of neighbouring points. The program below does exactly that for every segment, then counts how often our answer agrees with the City&rsquo;s stored value. It uses only Python&rsquo;s standard library; math.dist is the distance formula written for you:<code class="cg-mt-2">' + CODE + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Agreement is evidence', p: 'Our formula and the City&rsquo;s field agree to the centimetre on 3,240 segments. That is strong evidence the stored lengths are flat, two-dimensional lengths on the same grid, not lengths along the slope of the ground.' },
          { h3: 'Disagreement is a question', p: 'Two segments are off by about three metres. The file does not say why, so we do not guess. A student should report the gap, show both numbers and say which further check would settle it.' },
          { h3: 'Mean against median', p: 'The mean segment, 72.4 m, is about twice the median, 36.7 m, because a few long segments stretch the average. Most pieces of a trail network are short.' }
        ] },
        { kind: 'callout', h3: 'Licence and attribution', p: 'Contains public sector Information made available under the City of Markham&rsquo;s Open Data Licence (<a class="cg-inline-link" href="https://data-markham.opendata.arcgis.com/pages/terms-of-use">licence</a>). The lengths, comparisons and counts on this page are ours. The City of Markham does not endorse this page or our classes. We print no total trail length, because adding the City&rsquo;s segment lengths would only restate their numbers.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'One short piece of path in Randall Park, measured by hand',
      intro: 'Segment OBJECTID 45 is an asphalt path in Randall Park with just three points, which makes it ideal for a Grade 10 analytic geometry question. The coordinates are the City&rsquo;s; the question and solution are ours.',
      body: [
        { kind: 'table', caption: 'The three vertices of segment OBJECTID 45 in the City of Markham Trails layer, in metres (UTM zone 17 north), shown to four decimals', head: ['Point', 'x (east)', 'y (north)'], rows: [
          ['A', '637,875.1172', '4,855,890.0231'],
          ['B', '637,869.8114', '4,855,889.1058'],
          ['C', '637,865.7645', '4,855,887.3702']
        ] },
        { kind: 'p', text: '<strong>Part (a), A to B.</strong> The change in x is &minus;5.3058 and the change in y is &minus;0.9173. Squaring gives 28.1515 and 0.8414, which add to 28.9930, so AB = &radic;28.9930 &asymp; 5.3845 m.' },
        { kind: 'p', text: '<strong>Part (b), B to C.</strong> The changes are &minus;4.0469 and &minus;1.7356. Their squares are 16.3774 and 3.0123, with sum 19.3897, so BC &asymp; 4.4034 m.' },
        { kind: 'p', text: '<strong>Part (c), the whole segment.</strong> AB + BC &asymp; 9.7879 m. The City&rsquo;s LENGTH field stores 9.78788496 m. The two agree to a tenth of a millimetre, which tells us the field was computed from these very coordinates in the same flat grid.' },
        { kind: 'p', text: '<strong>Part (d), the rounding trap.</strong> Round each coordinate to two decimals first and repeat the calculation: the answer becomes about 9.7954 m, seven millimetres too long. Rounding the inputs before subtracting large, nearly equal numbers loses accuracy; round only at the end. This is the same caution MCV4U asks for with vector components.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> Find the midpoint of AC and the straight-line distance from A to C. Explain why AC is shorter than AB + BC, and what that says about how curved this little path is.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Waterloo contests in Markham',
      h2: 'The CIMC and CSMC: November contests that mix short answers with full solutions',
      intro: 'Many Markham students already know the multiple-choice Waterloo contests. The Canadian Intermediate and Senior Mathematics Contests ask for more, and they come early in the school year.',
      body: [
        { kind: 'table', caption: 'CEMC&rsquo;s November contests in 2026, from the CEMC pages read on 22 October 2026', head: ['Contest', 'Eligible, in CEMC&rsquo;s terms', 'Paper', 'Date'], rows: [
          ['CIMC (Intermediate)', 'Students in Grades 9 and 10', '9 questions: 6 answer only, 3 full solution; 2 hours', 'Wednesday 18 November 2026'],
          ['CSMC (Senior)', 'Students in Grades 11 and 12, and CEGEP students', 'The same structure at senior level', 'Wednesday 18 November 2026']
        ] },
        { kind: 'p', text: 'CEMC&rsquo;s ordering deadline for schools was Thursday 22 October 2026, the day this page was checked, so a Markham student not already entered through a school should treat the 2026 sitting as closed and plan for the next one. The three full-solution questions are where a careful student gains the most: like part (d) above, the marks go to reasoning that is complete and honest about its steps. Our <a class="cg-inline-link" href="/cimc-and-csmc-contest-guide">CIMC and CSMC guide</a> covers both papers.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Through a school only', p: 'CEMC does not take entries from individual students. A Markham student enters through their school, or or, when their own school sits the contest out, through a nearby school willing to take them in.' },
          { h3: 'Past papers, no account', p: 'CEMC posts the last ten years of contests free of charge. Students use them at home; our lessons add original problems written in the same spirit.' },
          { h3: 'The rest of the year', p: 'CEMC lists Pascal, Cayley and Fermat for 23 and 24 February 2027, Euclid for 6 April 2027 and the Fryer, Galois and Hypatia papers for 7 April 2027. Our <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests page</a> has the full calendar.' }
        ] },
        { kind: 'callout', h3: 'Not connected with CEMC', p: 'CEMC&rsquo;s rule is that &ldquo;all students must participate through their school&rdquo;. We are not connected with CEMC or the University of Waterloo. We never reproduce their problems or solutions; our contest material is original and labelled as ours.' }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Markham',
      h2: 'What a monthly fee covers, compared with paying a tutor by the hour',
      intro: 'Our fees are listed in the fees section of this page, in the currency for where you are. Here is how to compare them fairly with other math help in Markham.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Our live online class', p: 'A class of fifteen to twenty Markham and other students at one level, eight live lessons each month, one monthly fee. The teacher works through problems on a shared board and takes questions as they come.' },
          { h3: 'Our one-to-one lessons', p: 'One teacher, one student, at the family&rsquo;s chosen times, for a higher monthly fee. Best for a specific weakness, a student far ahead of their class, or the weeks before finals.' },
          { h3: 'A home tutor', p: 'Someone who comes to the house usually charges by the hour at their own rate, and part of what you pay covers the journey. It suits families who want a person physically beside the student.' }
        ] },
        { kind: 'p', text: 'To compare any two offers, turn both into the same unit: hours of live teaching each month. Then look past the hours. Is practice set and checked between lessons? Is the plan built on the Ontario course code the school is marking? Does the teacher ask the student to explain, or just demonstrate? A price only means something once you know what it buys.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From measuring lengths to the magnitude of a vector',
    intro: 'Bands are approximate; the free lesson places each student by what they can already do and explain.',
    cols: [
      { band: 'Grades 1 to 4', h3: 'Number and measurement', p: 'Place value, operations and measuring, with reasons said aloud.', courses: ['early-math-foundations', 'elementary-mathematics-complete-masterclass'] },
      { band: 'Grades 5 to 8', h3: 'Ratio and right triangles', p: 'Fractions, ratio, equations and the Pythagorean relationship, plus contest puzzles.', courses: ['comprehensive-middle-school-mathematics-mastery', 'middle-school-math-competitions-course'] },
      { band: 'Grades 9 and 10', h3: 'Coordinates and algebra', p: 'MTH1W relations and Grade 10 analytic geometry and quadratics.', courses: ['complete-high-school-mathematics-mastery', 'maths-through-coding'] },
      { band: 'Grades 11 and 12', h3: 'Functions and vectors', p: 'MCR3U, MHF4U and MCV4U, with CIMC, CSMC and Euclid practice.', courses: ['ontario-grade-12-university-math-mhf4u-mcv4u-course', 'waterloo-math-contests-gauss-to-euclid-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'Should a Markham student let AI measure the trails?',
    intro: 'It can run the formula. It cannot tell whether the formula was the right one for the coordinates.',
    p1: 'An AI tool will sum distances for you in a second. Hand it latitude and longitude and it may still apply the flat formula and return nonsense with confidence. Knowing that this layer is in metres on a projected grid, and that rounding early costs seven millimetres, is mathematical judgement the student has to own.',
    p2: 'Our teachers keep that judgement with the student: sketch first, compute one case by hand, then let code do the rest and check it against something independent. School work that is marked stays the student&rsquo;s own.',
    closer: 'Ontario math asks students to reason and communicate, not only compute; those are the parts a tool cannot do for them.',
    blogAnchor: 'why real understanding outlasts the tools that compute for us'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online math lessons across Markham',
    intro: 'Unionville, Cornell or Markham Village: the lesson reaches the student at home, with no drive along Highway 7.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Eastern time all year', p: 'Markham clocks move to UTC-5 on 1 November 2026 and back to UTC-4 on 14 March 2027. Class times are always written in Eastern time and re-sent in the week of each change.' },
      { h3: 'Working on a shared board', p: 'Students write their steps where the teacher can see them, so the exact line where a sign or a square root goes wrong is visible.' },
      { h3: 'Taught to the course code', p: 'A Grade 10 lesson follows MPM2D, a Grade 12 lesson follows MHF4U or MCV4U, at the pace the school sets.' },
      { h3: 'Markham numbers', p: 'The form accepts Markham numbers on 289, 905, 742 or 365. Enter all ten digits; we add the country code.' },
      { h3: 'A free first lesson', p: 'A full lesson at the right level, ending with a placement suggestion, and no payment details requested.' }
    ],
    spec: { title: 'No Markham centre', p: 'Modern Age Coders has no tutoring centre in Markham and claims none. Every lesson is live and online, taught from India, and a student needs a computer, a microphone and a steady connection.' }
  },

  fees: {
    h2: 'Math tutoring fees for Markham families',
    intro: 'Three options, shown in your own currency.',
    first: 'One complete live lesson, free, finishing with a recommended course and level.',
    group: 'The monthly fee for a live class of fifteen to twenty at the same level.',
    private: 'The monthly fee for one-to-one teaching at times you choose.',
    closer: 'Markham families pay the same fee as families anywhere in Canada. Nothing is billed until after the free lesson, once the course and the time are settled.'
  },

  reviewsH2: 'What our families and students have written on Google',

  book: {
    h2: 'Book a free math lesson for a Markham student',
    intro: 'Tell us the grade and any course code. A Grade 4 child might start with a measuring puzzle; a Grade 10 student might start with segment OBJECTID 45.',
    success: 'Thank you. The team will be in touch soon about a math class for Markham.'
  },

  faq: {
    h2: 'Markham math tutoring questions',
    intro: 'The questions Markham parents and students ask us most.',
    items: [
      { q: 'Do you have a math tutor in Markham?', a: 'Yes, online. We have no Markham building; a student joins from home and is taught in real time, alone or as part of a group of 15 to 20.' },
      { q: 'What is the math tutor price in Markham with you?', a: 'Please see the fees section on this page, which lists the free first lesson and the two monthly fees in your own currency. We keep figures out of this answer deliberately.' },
      { q: 'Is a live online class as good as a tutor who comes to the house?', a: 'It is different. Someone tutoring in your home normally bills hourly and has to travel. Our class gives fifteen to twenty students at one level a live teacher for a monthly fee, and one-to-one online gives a student undivided attention with no travel.' },
      { q: 'Can you help with Grade 10 analytic geometry?', a: 'Yes. Distance, midpoint and slope from coordinates are taught carefully, because Grade 11 and Grade 12 vectors depend on them.' },
      { q: 'Do you support MCV4U Calculus and Vectors?', a: 'Yes, alongside the school course. We do not grant Ontario credits; the credit and the mark come from the school.' },
      { q: 'Is it too late for the 2026 CIMC or CSMC?', a: 'Probably. CEMC lists both for Wednesday 18 November 2026, and the ordering deadline for schools was 22 October 2026. We can prepare a student for the next sitting and the other CEMC contests this year.' },
      { q: 'How do Markham students enter Waterloo contests?', a: 'Through a school. CEMC does not accept individual entries, but a student whose school is not taking part can ask another local school to host them.' },
      { q: 'When are classes for Markham students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Eastern time.' },
      { q: 'My child is quick at arithmetic but loses marks on explanations. Can you help?', a: 'Yes. That is common, and our lessons ask students to write and say each step, which is what Ontario courses and the full-solution contests reward.' },
      { q: 'Do you teach younger children in Markham?', a: 'Yes, from about age 6, with short lessons on number sense, measurement and explaining answers.' }
    ]
  },

  next: {
    eyebrow: 'More for Markham and Canada',
    h2: 'Related math pages for Markham students',
    html: 'For every province, see <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutoring in Canada</a>. Course pages: <a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U</a>, <a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U</a> and <a class="cg-inline-link" href="/mcr3u-functions-tutor">MCR3U</a>. Contest students can read the <a class="cg-inline-link" href="/cimc-and-csmc-contest-guide">CIMC and CSMC guide</a>, and the province page is <a class="cg-inline-link" href="/coding-classes-in-ontario">Ontario</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Markham math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/mcv4u-calculus-and-vectors-tutor', label: 'MCV4U help' },
    { href: '/cimc-and-csmc-contest-guide', label: 'CIMC and CSMC' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' }
  ],

  personalityCss: `
.cg-root.cg-mtum .cg-hero h1 { font-weight: 690; letter-spacing: -0.016em; line-height: 1.06; }
.cg-root.cg-mtum .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-mtum .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-mtum .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mtum .cg-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.cg-root.cg-mtum #trails code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.6; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-mtum #worked strong { color: var(--cg-accent); }
.cg-root.cg-mtum .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: MTH1W (2021), MPM2D (2005) as the MCR3U prerequisite, MCR3U, MHF4U, MCV4U (MHF4U prior or concurrent), MDM4U; EQAO 2026-27 windows. CEMC CIMC and CSMC eligibility, format, 18 November 2026 date and 22 October 2026 ordering deadline; the through-a-school rule. Markham area codes and Eastern time offsets from facts-geo.md.',
    localProject: 'City of Markham Open Data, Trails layer (Open Data Licence - City of Markham, Version 1.0), downloaded 22 October 2026 in two pages, UTM zone 17N metres. Our distance-formula lengths for all 3,424 segments: 3,240 within 1 cm of the LENGTH field, 3,422 within 1 m; OBJECTID 3066 off by 3.70 m and OBJECTID 3064 by 2.99 m; median 36.7 m, mean 72.4 m. Worked segment OBJECTID 45 in Randall Park: 9.7879 m against stored 9.78788496 m, and 9.7954 m from coordinates rounded to two decimals. Labelled as ours. Lesson family: distance formula and checking a stored field.',
    requiredMentions: [
      'OBJECTID 3066',
      '3,240 segments',
      'Randall Park',
      '9.78788496',
      '9.7954',
      'Its coordinates are in a projected system',
      'Marked public in the PUBLIC_ field',
      'CONC 1,348',
      '6 answer only, 3 full solution',
      '36.7 m'
    ],
    sources: [
      { claim: 'City of Markham Open Data: Trails item record (description, licence link).', url: 'https://www.arcgis.com/home/item.html?id=c445d4d0a22041d2a961e919a8df59ed' },
      { claim: 'City of Markham: Trails feature service (OD_TRAILS).', url: 'https://utility.arcgis.com/usrsvcs/servers/c445d4d0a22041d2a961e919a8df59ed/rest/services/OpenData/OD_TRAILS/FeatureServer' },
      { claim: 'City of Markham: Open Data Licence Version 1.0 (commercial use, credit statement, non-endorsement).', url: 'https://data-markham.opendata.arcgis.com/pages/terms-of-use' },
      { claim: 'Ontario curriculum content API: senior math course records and prerequisites.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=MCR3U,MHF4U,MCV4U,MDM4U,MPM2D,MTH1W,MCF3M,MAP4C,MEL4E&depth=0' },
      { claim: 'EQAO: 2026-27 assessment windows.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'CEMC: CIMC and CSMC (eligibility, format, 2026 date).', url: 'https://cemc.uwaterloo.ca/contests/csimc' },
      { claim: 'CEMC: contest dates and ordering deadlines for 2026/27.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets for 2026-27.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Markham population figure: StatCan was not reachable live.',
      'A total length of Markham trails, or per-trail totals: not printed; it would be a sum of the City\'s published segment lengths.',
      'Why OBJECTID 3066 and 3064 disagree with LENGTH: the file does not say, so no cause is given.',
      'That trail segments marked PUBLIC_ No are closed or private land: the field is not defined in the saved record, so it is only counted.',
      'Other tutors\' rates in Markham: not sourced, so not printed.',
      'Any fee figure or currency in the copy: fees render from the template only.',
      'That our lessons earn an Ontario credit: refused; we do not grant Ontario credits.',
      'Names of Markham schools, boards or private people: not used (park names appear only as the City stores them for one segment).',
      'Any affiliation with the City of Markham, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
