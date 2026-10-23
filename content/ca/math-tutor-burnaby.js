'use strict';
// Math tutor, Burnaby (cg- city page, Canada cluster Wave 2, row 170). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: trigonometry as the thread through BC math (right triangles in Foundations of Mathematics and Pre-calculus 10, the
// sine and cosine laws with ambiguous cases in Pre-calculus 11, radians and the unit circle in Pre-calculus 12), taught on
// the City of Burnaby's own SkyTrain station points; an ambiguous-case worked problem of ours; CEMC written-solution
// contests; price. Never repeats the Vancouver (statistics) or Surrey (area and perimeter) pages.
// Sources, read raw (curl -sL -A "Mozilla/5.0"); copies in keyword-research-2026-09/ca/src-pilots/math-tutor-burnaby/:
//  - curriculum.gov.bc.ca, fetched 23 October 2026: Foundations of Mathematics and Pre-calculus 10 "right-triangle problems:
//    determining missing sides and/or angles using trigonometric ratios and the Pythagorean theorem"; Pre-calculus 11 "use of
//    sine and cosine laws to solve non-right triangles, including ambiguous cases", "angles in standard position: degrees",
//    "special angles, as connected with the 30-60-90 and 45-45-90 triangles", "unit circle"; Pre-calculus 12 "examining angles
//    in standard position in both radians and degrees", "using identities to reduce complexity in expressions and solve
//    equations"; Mathematics 9 "spatial proportional reasoning scale diagrams, similar triangles and polygons". Course list
//    (facts-schools-contests.md row 72).
//  - CEMC (facts-schools-contests.md): Fryer/Galois/Hypatia "Wednesday, April 7, 2027", "4 questions; a mix of final answer-only
//    and full-solution", 75 minutes; Euclid "Tuesday, April 6, 2027", "10 questions", "2.5 hours"; CTMC "Teams of six" (13 April
//    2027 at UWaterloo, 14 April in school); POTW "Grades 3 to 12", "every Thursday"; Courseware "no certificate or other form of
//    credential awarded"; "all students must participate through their school".
//  - BC Gov News 2026AG0013-000209: permanent UTC-7 after 8 March 2026. facts-geo.md: Burnaby in the Vancouver CMA; area codes
//    604, 778, 236, 672, 257. No populations used.
//  - City of Burnaby open data, "SkyTrain Station", ArcGIS item cff871aeb8494cb58dd65a2d06af9454 (item_skytrainstn.json):
//    accessInformation "City of Burnaby"; snippet "Points of ingress and egress for the Skytrain network."; licenseInfo
//    data.burnaby.ca/pages/open-government-licence; service gis.burnaby.ca OpenData5 MapServer layer 10 (layer_skytrainstn.json,
//    NAD83 UTM Zone 10N, wkid 26910, metres), queried with curl on 23 October 2026 at 09:18 UTC: 11 points (skytrainstn.json).
//    Licence: Hub page item 5651cd6a185c42288dfc19d102f40bc5 (burnaby_ogl_page_data.json, fetched by this writer): "Open
//    Government Licence - City of Burnaby", "based on version 2.0 of the Open Government License"; "including for commercial
//    purposes"; fallback attribution "Contains information licensed under the Open Government Licence - British Columbia." (dash
//    in source); "suggests any official status or that the Information Provider endorses you".
// Our own calculations (stations.py and worked.py, python -I; outputs *.out.txt): 11 stations, 55 pairs; closest Metrotown to
// Patterson 764.3 m, Brentwood Town Centre to Gilmore 876.1 m; farthest Gilmore to Lougheed Town Centre 8,679.9 m; triangle
// Metrotown (A), Brentwood Town Centre (B), Lougheed Town Centre (C): c = AB 4,517.9 m, b = AC 8,184.9 m, a = BC 7,877.8 m;
// angles A 69.96, B 77.44, C 32.60 degrees; sine-law ratio 8,385.6 for all three; area 17.37 km2 by 1/2 bc sin A and by the
// shoelace formula; standard-position angles from Metrotown: Brentwood 88.0 degrees (1.536 rad), Lougheed 18.1 (0.315 rad),
// Gilmore 99.2 (1.731 rad), Edmonds -25.1 (-0.438 rad). Ambiguous case from a, c, C: sin A 0.9394, A = 69.96 or 110.04; b =
// 8,184.9 or 5,088.4. Distances are straight lines between station points, not track lengths.
// Lesson family: the sine and cosine laws, the ambiguous case, and angles in standard position on real coordinates.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TRIANGLE = [
  'import json, math',
  '',
  'with open("skytrainstn.json", encoding="utf-8") as f:',
  '    points = {feat["attributes"]["NAME"]: (feat["geometry"]["x"], feat["geometry"]["y"])',
  '              for feat in json.load(f)["features"]}',
  '',
  'A = points["METROTOWN STATION"]',
  'B = points["BRENTWOOD TOWN CENTRE STATION"]',
  'C = points["LOUGHEED TOWN CENTRE STATION"]',
  'a, b, c = math.dist(B, C), math.dist(A, C), math.dist(A, B)',
  '',
  'angle_A = math.degrees(math.acos((b*b + c*c - a*a) / (2*b*c)))',
  'angle_B = math.degrees(math.acos((a*a + c*c - b*b) / (2*a*c)))',
  'angle_C = 180 - angle_A - angle_B',
  'print("sides (m):", round(a, 1), round(b, 1), round(c, 1))',
  'print("angles:", round(angle_A, 2), round(angle_B, 2), round(angle_C, 2))',
  'print("sine law:", round(a / math.sin(math.radians(angle_A)), 1))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'BURNABY MATH', label: 'Math tutor in Burnaby', blurb: 'Math help for Burnaby students, with BC trigonometry from Grade 10 right triangles to Pre-calculus 12 radians, taught on the city\'s SkyTrain station points.' },
  market: CA,
  slug: 'math-tutor-burnaby',
  code: 'maad',
  accent: '#343C85',
  accentRationale: 'Burnaby math: a deep lake-slate blue, #343C85, allocated for this row and kept at least 14 RGB units from every other Canada accent; contrast 9.4 on the paper #FBF8F2 and above 4.5 on both paper tints (checked by the build gate)',
  pageType: 'city',
  place: {
    name: 'Burnaby',
    eyebrow: 'Math tutor, Burnaby, British Columbia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'British Columbia' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-british-columbia', name: 'British Columbia' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Math in Canada', href: '/online-math-tutor-canada' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Math tutor in Burnaby',
  title: 'Math Tutor Burnaby | Live Online, Grade 1 to Pre-calculus 12',
  description: 'Live online math tutoring for Burnaby students: BC math from Grade 9 to Pre-calculus 12, trigonometry taught on the city\'s SkyTrain station data, and CEMC contests.',
  ogDescription: 'Three Burnaby SkyTrain stations make a triangle with angles of 70, 77 and 33 degrees. A math tutor page that teaches the sine and cosine laws with it.',
  twitterDescription: 'Math tutoring for Burnaby students, live online, from early number sense to Pre-calculus 12 trigonometry.',
  ogImageCourse: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring for Burnaby Students',
    description: 'Live online math for Burnaby students from Grade 1 to Grade 12: number sense, Mathematics 9, Foundations of Mathematics and Pre-calculus 10, Pre-calculus 11 and 12 trigonometry and algebra, and CEMC contest problem solving, in a group of fifteen to twenty or one to one.'
  },

  h1: 'Math tutor in Burnaby',
  capsuleQ: 'Who teaches math live to Burnaby students?',
  capsule: 'Modern Age Coders gives Burnaby students live online math tutoring, Grade 1 to Pre-calculus 12, with a teacher working one to one or with fifteen to twenty students at the same level. Grade 12 students usually choose Western Canada Grade 12 Math: Pre-calculus 12 and Math 30-1, and puzzle lovers take Waterloo Math Contests. Your first lesson is free.',
  lead: 'Trigonometry is where many Burnaby teenagers first feel that math has turned against them. It arrives gently in Grade 10 with right triangles, speeds up in Pre-calculus 11 with the sine and cosine laws and their ambiguous cases, and in Pre-calculus 12 switches to radians, the unit circle and identities. Each step leans on the last. This page follows that thread through the BC curriculum, using the province&rsquo;s own wording, and then teaches it on something every Burnaby student knows: the SkyTrain stations, as the City of Burnaby maps them in its open data. A worked problem, the CEMC contests that reward written solutions, and an honest note on prices follow.',
  wa: 'Hello Modern Age Coders, I would like a free math lesson for a student in Burnaby.',

  picks: {
    eyebrow: 'Math course picks for Burnaby',
    h2: 'Courses Burnaby families pick first',
    intro: 'Matched to stages of BC math, then confirmed in a free lesson once the teacher has watched the student solve something.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', band: 'Grades 9 to 11', note: 'Mathematics 9 through Pre-calculus 11: linear relations, factoring, right-triangle trigonometry, then the sine and cosine laws.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', band: 'Grade 12', note: 'Pre-calculus 12 alongside the school course, with radians, the unit circle, identities, logarithms and series. BC credits remain the school&rsquo;s to grant.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', band: 'Grades 6 to 8', note: 'Ratio, scale drawings, angles and equations: the ideas trigonometry quietly depends on four years later.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12, contest-minded', note: 'Problems written by us in the spirit of the CEMC contests, especially the full-solution kind, plus the free CEMC archive.' }
    ]
  },

  sections: [
    {
      id: 'trig', tint: '', eyebrow: 'BC math in Burnaby',
      h2: 'Trigonometry through BC math, from Grade 10 to Pre-calculus 12',
      intro: 'Public schools in Burnaby follow BC&rsquo;s provincial curriculum. The phrases in the table are copied from the province&rsquo;s curriculum site on 23 October 2026; the right-hand column is ours.',
      body: [
        { kind: 'table', caption: 'Where trigonometry appears in BC secondary math. Content wording from curriculum.gov.bc.ca; the summaries are ours', head: ['Course', 'The province&rsquo;s wording', 'What the student actually does'], rows: [
          ['Mathematics 9', '&ldquo;spatial proportional reasoning scale diagrams, similar triangles and polygons&rdquo;', 'Similar triangles, the idea every trigonometric ratio rests on'],
          ['Foundations of Mathematics and Pre-calculus 10', '&ldquo;right-triangle problems: determining missing sides and/or angles using trigonometric ratios and the Pythagorean theorem&rdquo;', 'Sine, cosine and tangent in right triangles'],
          ['Pre-calculus 11', '&ldquo;use of sine and cosine laws to solve non-right triangles, including ambiguous cases&rdquo;', 'Any triangle, plus angles in standard position in degrees and the unit circle'],
          ['Pre-calculus 12', '&ldquo;examining angles in standard position in both radians and degrees&rdquo;', 'Radians, graphs of trigonometric functions, equations and identities']
        ] },
        { kind: 'p', text: 'Read top to bottom, the table explains why trigonometry trouble is rarely about trigonometry. A Pre-calculus 11 student who cannot apply the cosine law usually has a Grade 9 gap in similar triangles or a Grade 10 gap in rearranging an equation. A Pre-calculus 12 student lost in radians often never felt comfortable with angles in standard position the year before. Our first lesson with a Burnaby teenager therefore starts one course back, briefly, before it moves forward.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Special angles', p: 'Pre-calculus 11 lists &ldquo;special angles, as connected with the 30-60-90 and 45-45-90 triangles&rdquo;. Students who can sketch those two triangles from memory rarely need a calculator for exact values, and Pre-calculus 12 assumes they can.' },
          { h3: 'Identities in Grade 12', p: 'Pre-calculus 12 asks students to use &ldquo;identities to reduce complexity in expressions and solve equations&rdquo;: Pythagorean, quotient, double angle, reciprocal, sum and difference. Proving an identity and solving an equation are different tasks, and we teach them as such.' },
          { h3: 'Beyond trigonometry', p: 'The same senior courses also carry logarithms, polynomials and series. For calculus after Pre-calculus 12, our <a class="cg-inline-link" href="/calculus-12-tutor-bc">Calculus 12 tutor page</a> sets out the course in full.' }
        ] },
        { kind: 'callout', h3: 'Our role beside school', p: 'Lessons with us run in parallel with a Burnaby student&rsquo;s school course. We do not grant BC credits, and every mark and credit is the school&rsquo;s. We are not connected with the BC Ministry of Education and Child Care, the City of Burnaby, TransLink or the Burnaby school district.' }
      ]
    },
    {
      id: 'stations', tint: 'deep', eyebrow: 'Burnaby data lesson',
      h2: 'Solving a triangle drawn between three Burnaby SkyTrain stations',
      intro: 'The City of Burnaby publishes the positions of the SkyTrain stations in the city as open data, in metres. Pre-calculus 11 students turn three of them into a triangle and solve it completely. The distances and angles below are our own calculations.',
      body: [
        { kind: 'p', text: 'The layer is called SkyTrain Station, and the City describes it as points of ingress and egress for the Skytrain network. Our query on 23 October 2026 returned 11 stations, from Gilmore and Brentwood Town Centre in the north to Royal Oak and Edmonds in the south. Each comes with an easting and a northing in metres, so the distance between two stations is simply the Pythagorean theorem applied to the differences.' },
        { kind: 'table', caption: 'Triangle Metrotown (A), Brentwood Town Centre (B), Lougheed Town Centre (C): our straight-line distances between the City of Burnaby station points and our angles from the cosine law. City of Burnaby open data, queried 23 October 2026', head: ['Measure', 'Value'], rows: [
          ['Side c, Metrotown to Brentwood Town Centre', '4,517.9 m'],
          ['Side b, Metrotown to Lougheed Town Centre', '8,184.9 m'],
          ['Side a, Brentwood Town Centre to Lougheed Town Centre', '7,877.8 m'],
          ['Angle at Metrotown, A', '69.96&deg;'],
          ['Angle at Brentwood Town Centre, B', '77.44&deg;'],
          ['Angle at Lougheed Town Centre, C', '32.60&deg;'],
          ['Each side divided by the sine of its opposite angle', '8,385.6 m'],
          ['Area, by one half of bc sin A', '17.37 km&sup2;']
        ] },
        { kind: 'p', text: 'Two checks are built into the table. The three angles add to 180 degrees, and the sine law ratio comes out at 8,385.6 m for all three sides, exactly as it must. The area agrees too: one half of b times c times the sine of A gives 17.37 square kilometres, the same as the shoelace formula on the three coordinates. Here is the Python that computes the sides and angles:<code class="cg-mt-2">' + TRIANGLE + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Closest and farthest', p: 'With 11 stations there are 55 pairs. The closest pair in our calculation is Metrotown and Patterson, 764.3 m apart; the farthest is Gilmore and Lougheed Town Centre at 8,679.9 m. Students find both with a loop before they guess.' },
          { h3: 'Angles in standard position', p: 'Measured from east, anticlockwise, Brentwood Town Centre sits at 88.0 degrees from Metrotown, almost due north, and Lougheed Town Centre at 18.1 degrees. In Pre-calculus 12 terms those are 1.536 and 0.315 radians.' },
          { h3: 'Negative angles', p: 'Edmonds lies south-east of Metrotown, so its angle in standard position comes out as minus 25.1 degrees. Students then find the positive coterminal angle, 334.9 degrees, which the Pre-calculus 11 content asks for by name.' }
        ] },
        { kind: 'callout', h3: 'What these numbers are not', p: 'Every distance here is a straight line between two points on the City&rsquo;s map, not the length of the track and not a travel time. The trains follow a curving guideway, so a rider covers more than 4,517.9 m between Metrotown and Brentwood Town Centre. A good answer says which distance it means.' },
        { kind: 'p', text: 'Contains information licensed under the Open Government Licence - British Columbia. The layer is published by the City of Burnaby under its Open Government Licence - City of Burnaby, which allows commercial use (<a class="cg-inline-link" href="https://data.burnaby.ca/pages/open-government-licence">licence</a>). The City of Burnaby does not endorse this page or our classes, and TransLink has no part in it.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'Worked problem: the ambiguous case, settled by a map',
      intro: 'Our own Pre-calculus 11 problem. It uses two sides and an angle from the station triangle, chosen so that the sine law offers two answers.',
      body: [
        { kind: 'p', text: '<strong>Question.</strong> In a triangle, side a is 7,877.8 m, side c is 4,517.9 m, and the angle C opposite side c is 32.6 degrees. Find angle A and side b. How many triangles fit these measurements, and which one matches the three Burnaby stations?' },
        { kind: 'p', text: '<strong>Step 1, use the sine law for A.</strong> sin A divided by a equals sin C divided by c, so sin A equals 7,877.8 times sin 32.6 degrees, divided by 4,517.9, which is about 0.9394. The calculator gives A = 69.96 degrees.' },
        { kind: 'p', text: '<strong>Step 2, look for the second angle.</strong> Sine is positive in the first and second quadrants, so 180 minus 69.96, or 110.04 degrees, has the same sine. Both are possible here, because 110.04 plus 32.6 is still less than 180. This is the ambiguous case the Pre-calculus 11 content names: two sides and an angle not between them can fit two different triangles.' },
        { kind: 'p', text: '<strong>Step 3, finish both triangles.</strong> If A is 69.96 degrees, B is 77.44 degrees and the sine law gives b = 8,184.9 m. If A is 110.04 degrees, B is 37.36 degrees and b = 5,088.4 m. Both are correct triangles.' },
        { kind: 'p', text: '<strong>Step 4, let the data decide.</strong> The real distance from Metrotown to Lougheed Town Centre, from the coordinates, is 8,184.9 m, so the stations form the first triangle. The algebra alone could not choose; extra information had to. Students who learn to ask what information would settle an ambiguity have learned something larger than a trigonometry rule.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> (1) Keep a and C the same and shrink c until only one triangle is possible; at what length does that happen? (2) Use the cosine law to find the distance from Patterson to Holdom from their coordinates, then check with the distance formula. (3) Convert the Gilmore angle from Metrotown, 99.2 degrees, to radians. We go through the answers in the free lesson.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests for Burnaby students',
      h2: 'Contests that reward written solutions, 2026 to 2027',
      intro: 'Trigonometry students who like explaining their reasoning do well in the CEMC contests that ask for full solutions. CEMC published the dates below for its North and South America sittings, and we checked them on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'CEMC contests with written-solution questions, and a team contest, for 2026 to 2027. Formats and dates as CEMC lists them', head: ['Contest', 'Who writes it', 'Format', 'CEMC date'], rows: [
          ['Fryer, Galois, Hypatia', 'Grades 9, 10 and 11', '4 questions, four questions, some answer-only and some full-solution, in 75 minutes', 'Wednesday 7 April 2027'],
          ['Euclid', 'Final year of secondary school', '10 questions, a mix of answer only and full-solution, 2.5 hours', 'Tuesday 6 April 2027'],
          ['Canadian Team Mathematics Contest', 'Teams of six, Grades 9 to 12', 'Individual and team events', 'From Wednesday 14 April 2027 in school']
        ] },
        { kind: 'p', text: 'Full-solution questions are marked on the argument, not only the final number. That suits trigonometry well: a student who writes &ldquo;by the cosine law&rdquo;, substitutes cleanly and states why only one triangle is possible is doing exactly what these contests reward. CEMC&rsquo;s weekly Problem of the Week, sent to educators for students from Grades 3 to 12 every Thursday, is good practice for writing short, complete solutions.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Entry through school', p: 'Students write these through a school, never alone, in CEMC&rsquo;s own rules. A Burnaby student whose school skips the April contests can, CEMC says, look for another local school to take them in.' },
          { h3: 'Free courseware', p: 'CEMC also publishes free courseware for Grades 4 to 12, and it is honest that no certificate or credential is awarded. We use it as reading, never as a substitute for a teacher checking the work.' },
          { h3: 'Our own problems', p: 'Contest lessons use problems we write and label as ours. We never copy CEMC past papers or solutions, and we are not connected with CEMC. See our <a class="cg-inline-link" href="/fryer-galois-hypatia-contests-guide">Fryer, Galois and Hypatia guide</a>.' }
        ] }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Burnaby',
      h2: 'Math tutor prices in Burnaby, compared fairly',
      intro: 'Our prices are shown in the fees section below, in your own currency, so this text carries no figures. This is how we suggest a Burnaby family compares any two offers.',
      body: [
        { kind: 'table', caption: 'Three ways to compare math tutoring offers in Burnaby. Our answers are ours; we do not publish other tutors&rsquo; rates', head: ['Comparison', 'How to work it out', 'Our side of it'], rows: [
          ['Cost per lesson taught', 'Monthly cost divided by lessons that really happen', 'Eight live classes a month'],
          ['Cost per minute of student solving', 'Watch a lesson: who holds the pen?', 'Students write on the shared board most of the lesson'],
          ['Hidden costs', 'Travel time, missed sessions, materials', 'No travel; the pricing page sets out missed classes']
        ] },
        { kind: 'p', text: 'For most Burnaby students a group class of fifteen to twenty at one level is enough to keep a course on track, with other students&rsquo; questions as a bonus. One to one is worth paying for when there is a sharp, specific problem: the ambiguous case refuses to make sense, identities feel like guesswork, or a Pre-calculus 12 final is a few weeks away. Many families use one to one for a term and then move to a group.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From shapes in Grade 1 to radians in Grade 12',
    intro: 'Grade bands are a guide only. Where a Burnaby student starts depends on what they can already explain in the free lesson.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Shapes and numbers', p: 'Counting, place value, simple shapes and measurement, all explained aloud.', courses: ['early-math-foundations', 'mental-maths-mastery-kids'] },
      { band: 'Grades 4 to 8', h3: 'Angles and ratio', p: 'Fractions, ratio, angles, scale drawings and first equations, the base trigonometry needs.', courses: ['elementary-mathematics-complete-masterclass', 'comprehensive-middle-school-mathematics-mastery'] },
      { band: 'Grades 9 to 11', h3: 'Triangles, then laws', p: 'Similar triangles, right-triangle trigonometry, then the sine and cosine laws in Pre-calculus 11.', courses: ['complete-high-school-mathematics-mastery', 'maths-through-coding'] },
      { band: 'Grade 12', h3: 'Radians and identities', p: 'Pre-calculus 12 trigonometry, logarithms and series, with Euclid-style problems for keen students.', courses: ['western-canada-grade-12-math-pre-calculus-12-math-30-1-course', 'waterloo-math-contests-gauss-to-euclid-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'Will an AI solve a Burnaby student&rsquo;s triangle for them?',
    intro: 'It will give an answer. Whether it gives both answers, or the right one, is another matter.',
    p1: 'Type the ambiguous-case question into a chatbot and it may return 69.96 degrees and stop, never mentioning the second triangle. Ask it for the distance between two stations and it may give a straight line when the question meant track length. A student who understands the sine law and the map catches both slips; one who copies the output does not.',
    p2: 'So every lesson asks the student to sketch, estimate and justify before computing. AI tools appear only for students old enough under our age policy, and then only as a second opinion on finished work. Work handed in at school stays the student&rsquo;s own.',
    closer: 'The Pre-calculus 11 phrase &ldquo;including ambiguous cases&rdquo; is a small reminder that mathematics is about knowing when an answer is incomplete.',
    blogAnchor: 'why problem solving beats copying in the age of AI'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How live online math works for Burnaby',
    intro: 'Lessons run at home on a laptop or desktop, so a student near Metrotown and one near Lougheed can share a teacher.',
    cells: [
      { h3: 'Lesson times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Pacific time, all year', p: 'BC went to permanent UTC-7 after 8 March 2026, so Burnaby clocks stay put in November. Our teachers keep India time, 12 hours 30 minutes ahead, and invitations name the Pacific time.' },
      { h3: 'Diagrams on screen', p: 'Trigonometry needs pictures. Teacher and student draw on one shared board, so every triangle is labelled before any formula is used.' },
      { h3: 'Taught to the course', p: 'Lessons follow the student&rsquo;s BC course, so Pre-calculus 11 and Foundations 11 students are not given the same plan.' },
      { h3: 'Burnaby numbers', p: 'Numbers on 604, 778, 236, 672 or 257 all work in the form. Enter ten digits; the +1 is pre-filled.' },
      { h3: 'Free first lesson', p: 'A complete lesson costs nothing and needs no card. It ends with a course, level and time we suggest.' }
    ],
    spec: { title: 'No Burnaby centre', p: 'There is no Modern Age Coders centre in Burnaby, and we do not suggest otherwise. Teachers in India teach live online; the student needs a computer, a microphone and a steady connection.' }
  },

  fees: {
    h2: 'Math tutoring fees for Burnaby families',
    intro: 'Free lesson, group month, private month: each priced in your currency.',
    first: 'A free, complete live lesson that ends with a course and level suggestion.',
    group: 'The monthly fee for eight live classes in a group of fifteen to twenty at one level.',
    private: 'The monthly fee for eight lessons with one teacher, at times you choose.',
    closer: 'Burnaby families pay the same as families in any other part of Canada. Nothing is charged before the free lesson and an agreed plan; holidays and missed lessons are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from families and students',

  book: {
    h2: 'Book a free math lesson for a Burnaby student',
    intro: 'Tell us the grade and the course. A Grade 5 child might begin with angles on a clock face; a Pre-calculus 11 student might begin with the station triangle.',
    success: 'Thank you. The team will be in touch soon about a math lesson for Burnaby.'
  },

  faq: {
    h2: 'Burnaby math tutoring questions',
    intro: 'The questions Burnaby families ask us most often.',
    items: [
      { q: 'Is there a math tutor for Burnaby students?', a: 'We teach Burnaby students online. There is no Burnaby building; a teacher teaches each lesson live, either one to one or to a group of fifteen to twenty at one level.' },
      { q: 'How much does a math tutor in Burnaby cost with you?', a: 'The fees section shows a free first lesson, a monthly group fee and a monthly one-to-one fee, all in your currency. You pay only after the free lesson.' },
      { q: 'My teen is struggling with the sine and cosine laws. Can you help?', a: 'Yes. We usually start a step back, with similar triangles and rearranging equations, then return to the laws and the ambiguous case with diagrams.' },
      { q: 'Do you teach Pre-calculus 12 radians and identities?', a: 'Yes, beside the school course. Our Western Canada Grade 12 Math course covers radians, the unit circle, identities, logarithms and series.' },
      { q: 'Will lessons with you count as a BC credit?', a: 'They will not, because we do not grant BC credits. Only the student\'s school awards credits and final marks.' },
      { q: 'Which contests suit a student who likes writing solutions?', a: 'CEMC\'s Fryer, Galois and Hypatia contests on 7 April 2027 and the Euclid on 6 April 2027 both include full-solution questions. Students enter through their school.' },
      { q: 'What times are lessons for Burnaby students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are given in Pacific time, which BC no longer changes.' },
      { q: 'Can a Grade 7 student start before trigonometry?', a: 'Yes, and it helps. Ratio, angles and scale drawings in Grades 6 to 8 make Grade 10 trigonometry far easier.' },
      { q: 'Do you teach students in New Westminster and Coquitlam?', a: 'Yes. Lessons are online, so a student in New Westminster or Coquitlam sits in exactly the classes a Burnaby student does.' },
      { q: 'Is the SkyTrain lesson on this page part of a course?', a: 'It is the kind of lesson we teach in Pre-calculus 11 work. The data comes from the City of Burnaby; the calculations and the problem are ours.' }
    ]
  },

  next: {
    eyebrow: 'More for Burnaby and Canada',
    h2: 'Other pages for Burnaby math students',
    html: 'The national overview is <a class="cg-inline-link" href="/online-math-tutor-canada">our online math tutor page for Canada</a>, and the provincial one is <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a>. For senior math see <a class="cg-inline-link" href="/calculus-12-tutor-bc">Calculus 12 tutoring</a>, and for contests see <a class="cg-inline-link" href="/euclid-contest-preparation">Euclid preparation</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Burnaby math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/calculus-12-tutor-bc', label: 'Calculus 12' },
    { href: '/fryer-galois-hypatia-contests-guide', label: 'Fryer, Galois, Hypatia' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' }
  ],

  personalityCss: `
.cg-root.cg-maad .cg-hero h1 { font-weight: 700; letter-spacing: -0.017em; line-height: 1.06; }
.cg-root.cg-maad .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-maad .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-maad .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-maad .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-maad #stations code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-maad #worked strong { color: var(--cg-accent); }
.cg-root.cg-maad .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'British Columbia, read 23 October 2026 from curriculum.gov.bc.ca and saved raw: Mathematics 9 (similar triangles), Foundations of Mathematics and Pre-calculus 10 (right-triangle problems), Pre-calculus 11 (sine and cosine laws including ambiguous cases, angles in standard position, special angles, unit circle), Pre-calculus 12 (radians and degrees, identities); course list incl. Calculus 12 (facts-schools-contests.md row 72); BC permanent UTC-7 (BC Gov News 2026AG0013-000209); Vancouver CMA area codes (facts-geo.md); CEMC 2026-27 FGH, Euclid and CTMC dates and formats, POTW, courseware and the through-a-school rule.',
    localProject: 'City of Burnaby open data, SkyTrain Station (Open Government Licence - City of Burnaby, commercial use allowed), 11 points in UTM Zone 10N queried with curl on 23 October 2026 and analysed with our scripts stations.py and worked.py (python -I): 55 pairs, closest Metrotown-Patterson 764.3 m, farthest Gilmore-Lougheed 8,679.9 m; triangle Metrotown, Brentwood Town Centre, Lougheed Town Centre with sides 4,517.9, 8,184.9 and 7,877.8 m, angles 69.96, 77.44 and 32.60 degrees, sine-law ratio 8,385.6 m, area 17.37 km2; standard-position angles from Metrotown; ambiguous case giving 69.96 or 110.04 degrees and b = 8,184.9 or 5,088.4 m. Labelled as ours. Lesson family: sine and cosine laws, the ambiguous case, angles in standard position.',
    requiredMentions: [
      'points of ingress and egress',
      '8,385.6 m for all three sides',
      'Metrotown and Patterson, 764.3 m apart',
      'Gilmore and Lougheed Town Centre at 8,679.9 m',
      '17.37 square kilometres',
      'minus 25.1 degrees',
      '110.04 degrees',
      'b = 5,088.4 m',
      'Brentwood Town Centre sits at 88.0 degrees',
      'Open Government Licence - City of Burnaby, which allows commercial use'
    ],
    sources: [
      { claim: 'City of Burnaby: Open Government Licence - City of Burnaby (commercial use, attribution, non-endorsement).', url: 'https://data.burnaby.ca/pages/open-government-licence' },
      { claim: 'City of Burnaby GIS: SkyTrainStn layer (station points, UTM Zone 10N).', url: 'https://gis.burnaby.ca/arcgis/rest/services/OpenData/OpenData5/MapServer/10' },
      { claim: 'BC curriculum: Pre-calculus 11 content.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/11/pre-calculus' },
      { claim: 'BC curriculum: Pre-calculus 12 content.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/12/pre-calculus' },
      { claim: 'BC curriculum: Foundations of Mathematics and Pre-calculus 10 content.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/10/foundations-of-mathematics-and-pre-calculus' },
      { claim: 'BC curriculum: Mathematics 9 content.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/9/core' },
      { claim: 'CEMC: Fryer, Galois and Hypatia contests.', url: 'https://cemc.uwaterloo.ca/contests/fgh' },
      { claim: 'CEMC: Euclid contest.', url: 'https://cemc.uwaterloo.ca/contests/euclid' },
      { claim: 'BC Gov News: permanent daylight time, UTC-7.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' }
    ],
    rejectedClaims: [
      'Any Burnaby population figure: StatCan was not reachable live.',
      'Track lengths or travel times between stations: not computed; the page says the distances are straight lines between map points.',
      'Any TransLink figure or affiliation: none used, none claimed.',
      'BC graduation requirements and the Grade 10 numeracy assessment: the provincial page could not be reached.',
      'That our lessons earn BC credits: refused.',
      'Facts about universities in Burnaby: not sourced, so not printed.',
      'Names of Burnaby schools, district results or private people: not used.',
      'Any affiliation with the City of Burnaby, the BC Ministry of Education and Child Care or CEMC.'
    ]
  }
};
