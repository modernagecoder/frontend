'use strict';
// Math tutor, Surrey, British Columbia (cg- city page, Canada cluster Wave 2, row 169). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: the Grade 10 fork a Surrey student meets (Workplace Mathematics 10 or Foundations of Mathematics and Pre-calculus 10)
// and the two Grade 11 routes after it, routed to the live BC and Canada pages; a Foundations 11 geometry and optimization
// lesson (shoelace area, perimeter, holes in a polygon, a compactness ratio) on the City of Surrey's dog off-leash areas; a
// worked fencing problem of ours; the Fraser Valley Math Kangaroo and CEMC contests; price. Never repeats the Vancouver page.
// Sources, read raw (curl -sL -A "Mozilla/5.0"); copies in keyword-research-2026-09/ca/src-pilots/math-tutor-surrey-bc/:
//  - curriculum.gov.bc.ca, fetched 23 October 2026: Workplace Mathematics 10 content ("surface area and volume including prisms
//    and cylinders, formula manipulation"; "metric and imperial measurement and conversions"; "experimental probability");
//    Foundations of Mathematics and Pre-calculus 10 ("slope: positive, negative, zero, and undefined"; "arithmetic sequences";
//    "primary trigonometric sine, cosine, and tangent ratios"; systems "solving algebraically by inspection, substitution,
//    elimination"); Foundations of Mathematics 11 ("forms of mathematical reasoning logic, conjecturing, inductive and deductive
//    thinking, proofs, game/puzzle analysis, counter-examples"; "optimization using feasible region to optimize objective
//    function"; "maximizing area or volume while minimizing perimeter"; "square-cube law"; "compound interest"); Pre-calculus 11
//    (quadratics, radicals, rational expressions; sine and cosine laws). Course list (facts-schools-contests.md row 72).
//  - UFV Canadian Math Kangaroo host-centre page (ufv-canadian-math-kangaroo.html, from ca/src/other-contests): "Students from
//    grades 1 to 12 are welcome to write the contest, with different versions for grades 1-2, 3-4, 5-6, 7-8, 9-10, and 11-12!";
//    "The Fraser Valley Contest will take place on Sunday, March 21, 2027 at the Abbotsford Campus of the University of the
//    Fraser Valley"; Grades 5 to 12 "30 multiple-choice questions, arranged in increasing difficulty, to be answered in 75
//    minutes" (Grades 1-2: 18 in 45; 3-4: 24 in 60, facts-schools-contests.md row 197). Fees on that page are 2026 figures: not used.
//  - CEMC (facts-schools-contests.md): Gauss 10 to 21 May 2027; PCF 23 and 24 February 2027; through a school.
//  - BC Gov News 2026AG0013-000209: permanent UTC-7 after 8 March 2026. facts-geo.md: Surrey in the Vancouver CMA; area codes
//    604, 778, 236, 672, 257. No populations used.
//  - City of Surrey open data, "Park Dog Off Leash Areas", ArcGIS item 6f382ce77e64436b82f5d4e34752a53f (item_offleash.json):
//    accessInformation "City of Surrey | Contact: Parks Recreation and Culture"; "Update frequency: Monthly"; snippet "This
//    dataset includes dog off-leash areas in Surrey." Layer native spatial reference NAD 1983 UTM Zone 10N in metres
//    (layer_offleash.json). Queried with curl on 23 October 2026 at 09:11 UTC, outSR 26910, 22 features (offleash_26910.json).
//    Licence: SurreyGIS Hub page item 55089a19491a4fe59a41e059fd8af708 "Open Data License" (licence-page-data.json, fetched by
//    this writer): "including for commercial purposes"; attribution "Contains information licensed under the Open Government
//    License - City of Surrey." (dash in source); non-endorsement "suggests any official status or that the Information
//    Provider endorses you".
// Our own calculations (offleash.py and worked.py, python -I; outputs *.out.txt): 22 polygons, all STATUS OPERATING; shoelace
// areas match SHAPE__Area to within 0.0002 percent; areas from 622.2 to 85,586.6 square metres; our sum 213,749 square metres
// (21.37 ha); median 5,392.5; compactness 4 pi A / P^2 from 0.104 (Tynehead Park, 24,012.2 m2, perimeter 1,703.1 m) to 0.883
// (Nicomekl Off Leash Park, 3,538.1 m2, 224.4 m); Dogwood Park largest, 85,586.6 m2, perimeter 1,272.1 m, 0.665; East View Trail
// Park has three rings: outer 14,383.4 minus holes 357.2 and 622.1 gives 13,404.1; Bolivar Park 5,592.2 m2, 289.2 m, 0.840;
// Joe Brown Park has separate large-dog (3,186.6) and small-dog (1,243.8) areas. Worked problem: 240 m of fence, rectangles
// 2,000 / 3,200 / 3,600 / 3,200 / 2,000; circle 4,583.7; square ratio 0.7854; Bolivar perimeter as a square 5,227.3 and as a
// circle 6,655.6; Tynehead perimeter 2.75 times that of a square of equal area (side 155.0, perimeter 619.8).
// Lesson family: area and perimeter from coordinates, optimization of area for a fixed perimeter.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SHOELACE = [
  'import json, math',
  '',
  'def signed_area(ring):',
  '    total = 0',
  '    for (x1, y1), (x2, y2) in zip(ring, ring[1:]):',
  '        total += x1 * y2 - x2 * y1',
  '    return total / 2',
  '',
  'def perimeter(ring):',
  '    return sum(math.dist(a, b) for a, b in zip(ring, ring[1:]))',
  '',
  'with open("offleash_26910.json", encoding="utf-8") as f:',
  '    areas = json.load(f)["features"]',
  '',
  'for park in areas:',
  '    rings = park["geometry"]["rings"]',
  '    area = abs(sum(signed_area(r) for r in rings))',
  '    edge = sum(perimeter(r) for r in rings)',
  '    ratio = 4 * math.pi * area / edge ** 2',
  '    print(park["attributes"]["DESCRIPTION"], round(area, 1), round(edge, 1), round(ratio, 3))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'SURREY MATH', label: 'Math tutor in Surrey, BC', blurb: 'Math help for Surrey, BC students across the Grade 10 fork and both Grade 11 routes, with a Foundations 11 geometry lesson on the city\'s off-leash parks.' },
  market: CA,
  slug: 'math-tutor-surrey-bc',
  code: 'maac',
  accent: '#39662B',
  accentRationale: 'Surrey math: a deep fir green, #39662B, allocated for this row and kept at least 14 RGB units from every other Canada accent; contrast 6.5 on the paper #FBF8F2 and above 4.5 on both paper tints (checked by the build gate)',
  pageType: 'city',
  place: {
    name: 'Surrey',
    eyebrow: 'Math tutor, Surrey, British Columbia',
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
  routeLabel: 'Math tutor in Surrey',
  title: 'Math Tutor Surrey, BC | Live Online, Grade 1 to Pre-calculus 12',
  description: 'Live online math tutoring for Surrey, BC students: the Grade 10 fork, Foundations 11 or Pre-calculus 11, a park geometry lesson on city data, and Math Kangaroo.',
  ogDescription: 'Surrey has 22 dog off-leash areas in its open data, and the roundest scores more than eight times the thinnest. A math tutor page built on that geometry and the BC pathway.',
  twitterDescription: 'Math tutoring for Surrey, BC students, live online, from early number sense to Pre-calculus 12.',
  ogImageCourse: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring for Surrey, BC Students',
    description: 'Live online math for Surrey students from Grade 1 to Grade 12: number sense, Mathematics 9, Workplace Mathematics 10 or Foundations of Mathematics and Pre-calculus 10, Foundations 11, Pre-calculus 11 and 12, and Math Kangaroo and CEMC contest problems, in a group of fifteen to twenty or one to one.'
  },

  h1: 'Math tutor in Surrey, BC',
  capsuleQ: 'Can a Surrey student get live math tutoring without travelling?',
  capsule: 'Yes. Modern Age Coders teaches math to students in Surrey, British Columbia, live over video, from Grade 1 to Pre-calculus 12, with a teacher for one student or for a group of fifteen to twenty at one level. Grade 12 students often join Western Canada Grade 12 Math: Pre-calculus 12 and Math 30-1. The opening lesson costs nothing.',
  lead: 'The decision that shapes a Surrey teenager&rsquo;s math most is made quietly in Grade 9, when families choose a Grade 10 course. BC offers Workplace Mathematics 10 and Foundations of Mathematics and Pre-calculus 10, and in Grade 11 the Foundations and Pre-calculus courses go separate ways. Neither route is a lesser one, but they lead to different places. This page explains both from the province&rsquo;s own course content, then spends most of its length on mathematics itself: a geometry lesson on the City of Surrey&rsquo;s dog off-leash areas that touches area, perimeter and optimization, a fencing problem worked by hand, the Fraser Valley Math Kangaroo and the CEMC contests, and a plain account of what tutoring in Surrey costs a family.',
  wa: 'Hello Modern Age Coders, I would like a free math lesson for a student in Surrey, BC.',

  picks: {
    eyebrow: 'Math course picks for Surrey',
    h2: 'Courses Surrey students begin with',
    intro: 'Each is tied to a stage of BC math. The teacher in the free lesson confirms the choice after hearing the student work through a problem.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', band: 'Grades 1 to 5', note: 'Place value, operations, fractions and measurement, taught by asking a child to explain the method as well as the answer.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Grades 9 to 11', note: 'Mathematics 9, either Grade 10 course, then Foundations 11 or Pre-calculus 11, with the reasoning written out line by line.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', band: 'Grade 12', note: 'Pre-calculus 12 support paced to the school course: transformations, logarithms, series and trigonometry. Credits stay with the school.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12, contest-minded', note: 'Puzzle-style problems we write ourselves for the Gauss, Pascal and Math Kangaroo kind of student, plus the free CEMC archive.' }
    ]
  },

  sections: [
    {
      id: 'fork', tint: '', eyebrow: 'BC math in Surrey',
      h2: 'The Grade 10 fork and the two Grade 11 routes, explained',
      intro: 'Surrey&rsquo;s public schools follow the British Columbia curriculum. We copied the content phrases below from the province&rsquo;s curriculum website on 23 October 2026; the plain-language column is our own summary.',
      body: [
        { kind: 'table', caption: 'BC Grade 10 and Grade 11 math courses, with phrases from the provincial content lists. Quoted wording from curriculum.gov.bc.ca; the last column is ours', head: ['Course', 'From the content list', 'In plain terms'], rows: [
          ['Workplace Mathematics 10', '&ldquo;surface area and volume including prisms and cylinders, formula manipulation&rdquo;', 'Applied measurement, graphs, probability by experiment and personal finance'],
          ['Foundations of Mathematics and Pre-calculus 10', '&ldquo;slope: positive, negative, zero, and undefined&rdquo;', 'Linear functions, systems, polynomials, exponents and right-triangle trigonometry'],
          ['Foundations of Mathematics 11', '&ldquo;maximizing area or volume while minimizing perimeter&rdquo;', 'Logic and proof, statistics, optimization, scale models and compound interest'],
          ['Pre-calculus 11', 'Quadratic functions, radical and rational expressions, sine and cosine laws', 'The algebra and trigonometry Pre-calculus 12 builds on']
        ] },
        { kind: 'p', text: 'The shared Grade 10 course is the wider door: its content includes slope, systems solved &ldquo;by inspection, substitution, elimination&rdquo;, arithmetic sequences and the primary trigonometric ratios. Workplace Mathematics 10 covers useful ground too, including metric and imperial conversions and the volume of cylinders, but it is a different course with a different emphasis. Because school course requirements vary, we always tell a Surrey family to ask the counsellor which Grade 11 courses each Grade 10 choice allows before the timetable is set.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Foundations 11 is real math', p: 'Its content opens with &ldquo;forms of mathematical reasoning&rdquo;: logic, conjecturing, inductive and deductive thinking, proofs, game and puzzle analysis and counter-examples. Students who like arguments over algebra often find it the more interesting Grade 11 course.' },
          { h3: 'Pre-calculus 11 is the algebra year', p: 'Quadratics in several forms, radicals with domain restrictions and extraneous roots, rational expressions with non-permissible values, then the sine and cosine laws. Gaps from Grade 10 factoring surface here first.' },
          { h3: 'Then Grade 12', p: 'For the senior years, our <a class="cg-inline-link" href="/calculus-12-tutor-bc">Calculus 12 tutor page</a> covers calculus, and <a class="cg-inline-link" href="/canada-high-school-math-courses-compared">math courses compared across Canada</a> sets Pre-calculus 12 beside Ontario and Alberta equivalents.' }
        ] },
        { kind: 'callout', h3: 'Next to school, not a replacement for it', p: 'Our teaching supports the course a Surrey student is taking at school. We do not grant BC credits; every credit and final mark comes from the school. We have no connection with the BC Ministry of Education and Child Care, the City of Surrey or the Surrey school district.' }
      ]
    },
    {
      id: 'offleash', tint: 'deep', eyebrow: 'Surrey data lesson',
      h2: 'Which Surrey off-leash park is the roundest? Area and perimeter from city coordinates',
      intro: 'The City of Surrey maps its dog off-leash areas as polygons in its open data. Foundations 11 students compute each area and perimeter from the corner coordinates, then compare shapes with one ratio. All the numbers below are our calculations.',
      body: [
        { kind: 'p', text: 'The layer is called Park Dog Off Leash Areas, and its summary reads simply: this dataset includes dog off-leash areas in Surrey. We queried it on 23 October 2026 and received 22 polygons, every one marked as operating. Each polygon is a list of corner points in metres, east and north, in the city&rsquo;s map projection, which is exactly what a student needs to work out area and perimeter from first principles.' },
        { kind: 'table', caption: 'Selected Surrey off-leash areas: our shoelace areas and perimeters from the polygon corners, and our compactness ratio 4&pi;A/P&sup2; (1 for a circle, about 0.785 for a square). City of Surrey open data, queried 23 October 2026', head: ['Off-leash area', 'Area (m&sup2;)', 'Perimeter (m)', 'Compactness'], rows: [
          ['Dogwood Park', '85,586.6', '1,272.1', '0.665'],
          ['Tynehead Park', '24,012.2', '1,703.1', '0.104'],
          ['East View Trail Park', '13,404.1', '676.5', '0.368'],
          ['Clayton Dog-Off-Leash Park', '12,222.9', '454.4', '0.744'],
          ['Bolivar Park', '5,592.2', '289.2', '0.840'],
          ['Nicomekl Off Leash Park, main area', '3,538.1', '224.4', '0.883'],
          ['Joe Brown Park, large dogs', '3,186.6', '268.2', '0.557'],
          ['Joe Brown Park, small dogs', '1,243.8', '173.6', '0.519']
        ] },
        { kind: 'p', text: 'Across all 22 polygons our areas run from 622.2 to 85,586.6 square metres, with a median of 5,392.5, and they add up to 213,749 square metres, about 21.4 hectares. That total is our own sum of our own areas, not a City figure. Our shoelace results agree with the area the City stores for each polygon to within 0.0002 percent, a good check that the method and the units are right.' },
        { kind: 'p', text: 'The shoelace formula adds up cross products of neighbouring corners and halves the result. This program applies it to every ring of every polygon and prints the area, perimeter and compactness:<code class="cg-mt-2">' + SHOELACE + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Long and thin', p: 'Tynehead&rsquo;s area is a strip along the park, and its ratio of 0.104 says so. Its perimeter of 1,703.1 m is 2.75 times the perimeter of a square with the same area, which would need only 619.8 m of fence.' },
          { h3: 'Holes subtract', p: 'East View Trail Park is stored as three rings: an outer boundary of 14,383.4 square metres and two holes of 357.2 and 622.1. The signs in the shoelace sum handle this automatically, and the area left is 13,404.1. Students should explain why.' },
          { h3: 'Two fields, one park', p: 'Joe Brown Park has separate polygons for large dogs and small dogs, 3,186.6 and 1,243.8 square metres. Counting parks and counting polygons give different answers, and a good report says which one it means.' }
        ] },
        { kind: 'callout', h3: 'What compactness does and does not say', p: 'A ratio near 1 means the shape encloses a lot of area for its edge; a ratio near 0 means a lot of edge. Nicomekl&rsquo;s main area, at 0.883, is rounder than a square; Tynehead, at 0.104, is a corridor. The ratio says nothing about how pleasant a park is for a dog. It answers one geometric question, and students are expected to keep it to that question.' },
        { kind: 'p', text: 'Contains information licensed under the Open Government License - City of Surrey. We use the layer on those terms, which allow commercial use (<a class="cg-inline-link" href="https://surrey-open-data-surreygis.hub.arcgis.com/pages/open-data-license">licence</a>, <a class="cg-inline-link" href="https://surrey-open-data-surreygis.hub.arcgis.com/datasets/6f382ce77e64436b82f5d4e34752a53f_0">dataset page</a>). The City of Surrey does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'Worked problem: the most area from 240 metres of fence',
      intro: 'Our own problem, at Foundations 11 level, answering the question the off-leash table raises: for a fixed amount of fence, which shape encloses most?',
      body: [
        { kind: 'p', text: '<strong>Question.</strong> A city crew has 240 m of fencing for a new off-leash area. (a) If the area is a rectangle, which width gives the largest area? (b) How much more would a circle enclose? (c) Bolivar Park&rsquo;s off-leash polygon has a perimeter of 289.2 m and an area of 5,592.2 square metres. Is it more or less efficient than a square with the same perimeter?' },
        { kind: 'p', text: '<strong>Step 1, write the area as a function.</strong> If the width is w, the length is 120 minus w, because two widths and two lengths make 240. The area is A(w) = w(120 &minus; w), a quadratic that opens downward with zeros at 0 and 120.' },
        { kind: 'p', text: '<strong>Step 2, find the maximum.</strong> The vertex sits halfway between the zeros, at w = 60, so the best rectangle is a 60 by 60 square with area 3,600 square metres. A table shows the symmetry: widths 20, 40, 60, 80 and 100 give 2,000, 3,200, 3,600, 3,200 and 2,000.' },
        { kind: 'p', text: '<strong>Step 3, try a circle.</strong> A circumference of 240 m gives a radius of 240 divided by 2&pi;, about 38.197 m, and an area of about 4,583.7 square metres, roughly 27 percent more than the square. Of all shapes with a given perimeter the circle encloses the most, which is why the compactness ratio is built so that a circle scores exactly 1.' },
        { kind: 'p', text: '<strong>Step 4, judge Bolivar.</strong> A square with a 289.2 m perimeter has sides of 72.3 m and an area of about 5,227.3 square metres. Bolivar&rsquo;s polygon encloses 5,592.2, more than that square, which matches its compactness of 0.840 being above a square&rsquo;s 0.785. A circle with the same perimeter would enclose about 6,655.6.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> (1) If one side of the rectangle is a river and needs no fence, what dimensions maximise the area now? (2) Find the compactness of a 30 by 120 rectangle. (3) Explain in two sentences why a long, thin park can still be a sensible design. We take answers in the free lesson.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests near Surrey',
      h2: 'Math Kangaroo in the Fraser Valley, and the CEMC contests',
      intro: 'Surrey students have one well-known contest close by and several national ones through school. Each date is as published by the contest&rsquo;s organiser when we checked on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Math contests a Surrey student can write in 2026 to 2027. Kangaroo details from the University of the Fraser Valley host-centre page; CEMC details from cemc.uwaterloo.ca', head: ['Contest', 'Grades', 'Format, as the organiser states it', 'Date'], rows: [
          ['Math Kangaroo, Fraser Valley contest', 'Grades 1 to 12, six versions', 'Grades 5 to 12: 30 multiple-choice questions in 75 minutes', 'Sunday 21 March 2027, UFV Abbotsford campus'],
          ['Pascal, Cayley, Fermat (CEMC)', 'Grades 9, 10, 11', '25 multiple-choice questions in 60 minutes', '23 and 24 February 2027'],
          ['Gauss (CEMC)', 'Grades 7 and 8', '25 multiple-choice questions in 60 minutes', '10 to 21 May 2027']
        ] },
        { kind: 'p', text: 'The University of the Fraser Valley page says students from grades 1 to 12 are welcome to write the Kangaroo, with different versions for grades 1-2, 3-4, 5-6, 7-8, 9-10 and 11-12. Younger children get shorter papers: 18 questions in 45 minutes for Grades 1 and 2, and 24 questions in 60 minutes for Grades 3 and 4. Questions are arranged in increasing difficulty, so the last ten are where preparation shows. Our <a class="cg-inline-link" href="/math-kangaroo-canada-preparation">Math Kangaroo Canada preparation page</a> goes through the format by level.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Kangaroo for young children', p: 'Because the Kangaroo starts at Grade 1, it is often a Surrey child&rsquo;s first contest. We prepare young students with puzzles, not drills, and never with past papers we have copied.' },
          { h3: 'CEMC through school', p: 'CEMC says all students must participate through their school. A student whose school does not run Pascal or Gauss can ask another local school to host them, as CEMC suggests.' },
          { h3: 'Our problems, labelled', p: 'Every contest problem we teach with is written by us and marked as ours. We are not connected with Math Kangaroo, the University of the Fraser Valley or CEMC.' }
        ] }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Surrey',
      h2: 'Math tutor prices in Surrey: what a monthly fee should include',
      intro: 'The fees section below shows our prices in your own currency, so none are typed here. This section is about what to check behind any price you are quoted.',
      body: [
        { kind: 'table', caption: 'A checklist for comparing math help in Surrey. Our answers are in the middle column; we do not quote other providers&rsquo; prices', head: ['Check', 'With us', 'Why it matters'], rows: [
          ['Lessons a month', 'Eight live classes', 'Price per lesson is the only fair comparison'],
          ['Class size', 'Fifteen to twenty at one level, or one to one', 'A mixed-level room slows everyone'],
          ['Course knowledge', 'Workplace 10, both Grade 10 routes, Foundations 11, Pre-calculus 11 and 12', 'Foundations and Pre-calculus need different lessons'],
          ['Travel', 'None; lessons on a home computer', 'A drive across Surrey adds an hour that nobody bills but someone pays for'],
          ['Free trial', 'One full live lesson', 'You see the teaching before deciding']
        ] },
        { kind: 'p', text: 'A rough rule we give Surrey parents: work out the cost of one lesson that actually happens, then ask how many minutes of it the student spends solving. A group class at one level gives structure and steady practice for a student who is roughly on track. One to one makes sense for a single hard gap, a student switching routes between Grade 10 and Grade 11, or the weeks before a Pre-calculus 12 final.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting to Pre-calculus 12 in Surrey',
    intro: 'Grade bands are approximate. The free lesson places a student by what they can explain, not by age alone.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Numbers that make sense', p: 'Counting, place value and simple measurement, plus Kangaroo-style puzzles for curious children.', courses: ['early-math-foundations', 'mental-maths-mastery-kids'] },
      { band: 'Grades 4 to 8', h3: 'Fractions to equations', p: 'Fractions, decimals, area and perimeter, integers and first equations before Mathematics 9.', courses: ['elementary-mathematics-complete-masterclass', 'comprehensive-middle-school-mathematics-mastery'] },
      { band: 'Grades 9 to 11', h3: 'Through the fork', p: 'Mathematics 9, either Grade 10 course, then Foundations 11 or Pre-calculus 11 with the next step in view.', courses: ['complete-high-school-mathematics-mastery', 'maths-through-coding'] },
      { band: 'Grade 12', h3: 'Senior courses', p: 'Pre-calculus 12, with Calculus 12 or contest work alongside for students who want more.', courses: ['western-canada-grade-12-math-pre-calculus-12-math-30-1-course', 'waterloo-math-contests-gauss-to-euclid-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'If an AI can compute the area, what is left for a Surrey student?',
    intro: 'Choosing the right formula, checking the units and deciding what the number means.',
    p1: 'An AI assistant will happily compute an area from a list of coordinates. Give it the East View Trail Park polygon and it may add the holes instead of subtracting them, or treat degrees as metres, and print a confident wrong answer. Only someone who understands why the shoelace formula carries signs will notice.',
    p2: 'Our teachers ask Surrey students to estimate first, compute second and explain third. AI tools come in only for older students, within the age rules we follow, and only to check work the student has already done. School assignments that are marked stay entirely the student&rsquo;s work.',
    closer: 'Foundations 11 lists counter-examples and proof among its first topics, which is a good description of what a student must do to an AI answer.',
    blogAnchor: 'why thinking skills matter in an AI world'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How live online math reaches Surrey homes',
    intro: 'Surrey is spread out, from Whalley and Guildford to Cloverdale and South Surrey. Online lessons remove the drive.',
    cells: [
      { h3: 'Times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'One clock all year', p: 'Since 8 March 2026 BC has stayed on UTC-7, so Surrey lesson times no longer move in November or March. India is 12 hours 30 minutes ahead, and invitations are written in Pacific time.' },
      { h3: 'Working you can see', p: 'Each student writes on a shared board in view of the teacher, which shows the exact step where a method goes wrong.' },
      { h3: 'The right course', p: 'Teachers know whether a Grade 11 student is in Foundations or Pre-calculus and plan accordingly, because the two courses differ.' },
      { h3: 'Surrey phone numbers', p: 'The form accepts 604, 778, 236, 672 and 257 mobiles. Type the full ten digits; the country code is already set.' },
      { h3: 'A free start', p: 'Lesson one is a proper lesson at no cost. It ends with a suggested course, level and time; no card is asked for.' }
    ],
    spec: { title: 'No Surrey centre', p: 'Modern Age Coders has no learning centre in Surrey and does not claim one. Our teachers teach live online from India; a student needs a computer, a microphone and a reliable internet connection.' }
  },

  fees: {
    h2: 'Math tutoring fees for Surrey families',
    intro: 'Three lines, each in your local currency.',
    first: 'A full live lesson for free, finishing with a recommended course and level.',
    group: 'The monthly fee for eight live group classes, fifteen to twenty students at one stage.',
    private: 'The monthly fee for eight lessons with a teacher of your own.',
    closer: 'Surrey families pay the same as every other Canadian family. We bill only after the free lesson, once a course and a time are agreed; holidays and missed classes are explained on the pricing page.'
  },

  reviewsH2: 'Reviews families have left us on Google',

  book: {
    h2: 'Book a free math lesson for your Surrey student',
    intro: 'Let us know the grade, and from Grade 10 which course. A Grade 2 child might start with shape puzzles; a Foundations 11 student might start with the off-leash polygons.',
    success: 'Thank you. The team will be in touch soon about a math lesson for Surrey.'
  },

  faq: {
    h2: 'Surrey math tutoring questions',
    intro: 'What Surrey parents and students most often ask us.',
    items: [
      { q: 'Is there a math tutor in Surrey, BC with Modern Age Coders?', a: 'Yes, online. There is no building in Surrey. A teacher teaches live, one to one or to a group of fifteen to twenty at one level, and the student joins from home.' },
      { q: 'What does math tutoring in Surrey cost?', a: 'See the fees section on this page: a free first lesson, then a monthly group fee or a monthly one-to-one fee, shown in your currency. No payment is taken before the free lesson.' },
      { q: 'Should my child take Workplace Mathematics 10 or the Foundations and Pre-calculus course?', a: 'Ask the school counsellor what each choice allows in Grade 11 before deciding. The shared Foundations and Pre-calculus 10 course covers slope, systems and trigonometry and keeps more routes open; we can help a student who is worried about it.' },
      { q: 'Do you teach Foundations of Mathematics 11?', a: 'Yes. Logic, statistics, optimization and scale models are all in it, and the off-leash lesson on this page is the kind of problem we use.' },
      { q: 'Can you help with Pre-calculus 11 and 12?', a: 'Yes, beside the school course. Factoring, radicals, rational expressions and trigonometry in Grade 11, then functions, logarithms and series in Grade 12.' },
      { q: 'Do your lessons count as BC credits?', a: 'No. We do not grant BC credits. The school awards every credit and mark; we teach alongside it.' },
      { q: 'When is the Math Kangaroo near Surrey?', a: 'The University of the Fraser Valley lists its Fraser Valley contest for Sunday 21 March 2027 at its Abbotsford campus, for Grades 1 to 12 in six versions.' },
      { q: 'What times are lessons for Surrey students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. The clock in Surrey is fixed at UTC-7 now, so times hold steady through winter.' },
      { q: 'Do you teach students in Delta, Langley and White Rock as well?', a: 'Yes. Because lessons are online, students across the Fraser Valley and Metro Vancouver join the same classes on Pacific time.' },
      { q: 'My child is in Grade 5 and dislikes math. Can a live class help?', a: 'Often, yes, when the class starts where the child actually is. The free lesson finds that point, usually in fractions or multiplication facts.' }
    ]
  },

  next: {
    eyebrow: 'More for Surrey and Canada',
    h2: 'Other pages for Surrey math students',
    html: 'Start with <a class="cg-inline-link" href="/online-math-tutor-canada">our online math tutor page for Canada</a> or the province page, <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a>. Young contest fans can read <a class="cg-inline-link" href="/math-kangaroo-canada-preparation">Math Kangaroo preparation</a>, and home-educating parents will find <a class="cg-inline-link" href="/homeschool-coding-and-math-bc">our BC homeschool math and coding guide</a> useful.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Surrey math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/math-kangaroo-canada-preparation', label: 'Math Kangaroo' },
    { href: '/calculus-12-tutor-bc', label: 'Calculus 12' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' }
  ],

  personalityCss: `
.cg-root.cg-maac .cg-hero h1 { font-weight: 700; letter-spacing: -0.012em; line-height: 1.09; }
.cg-root.cg-maac .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-maac .cg-section-head h2 { max-width: 31ch; }
.cg-root.cg-maac .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-maac .cg-table caption { text-align: left; font-weight: 620; line-height: 1.45; }
.cg-root.cg-maac #offleash code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.79rem; line-height: 1.55; padding: 0.85rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-maac #worked strong { color: var(--cg-accent); font-weight: 680; }
.cg-root.cg-maac .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'British Columbia, read 23 October 2026 from curriculum.gov.bc.ca and saved raw: Workplace Mathematics 10, Foundations of Mathematics and Pre-calculus 10, Foundations of Mathematics 11 and Pre-calculus 11 content lists (quoted phrases); course list incl. Calculus 12 (facts-schools-contests.md row 72); BC permanent UTC-7 (BC Gov News 2026AG0013-000209); Vancouver CMA area codes (facts-geo.md); UFV Math Kangaroo host-centre page (grades, versions, formats, Sunday 21 March 2027 at the Abbotsford campus); CEMC 2026-27 Gauss and PCF dates and the through-a-school rule.',
    localProject: 'City of Surrey open data, Park Dog Off Leash Areas (Open Government License - City of Surrey, commercial use allowed), 22 polygons queried with curl on 23 October 2026 in UTM Zone 10N and analysed with our scripts offleash.py and worked.py (python -I): shoelace areas match SHAPE__Area within 0.0002%; areas 622.2 to 85,586.6 m2, median 5,392.5, our sum 213,749 m2; compactness 0.104 (Tynehead) to 0.883 (Nicomekl); East View Trail Park outer ring 14,383.4 minus holes 357.2 and 622.1; Joe Brown Park large and small dog areas; Bolivar Park 0.840. Labelled as ours. Lesson family: area and perimeter from coordinates, optimization for a fixed perimeter.',
    requiredMentions: [
      'Park Dog Off Leash Areas',
      'Tynehead&rsquo;s area is a strip',
      'outer boundary of 14,383.4 square metres',
      '213,749 square metres',
      'within 0.0002 percent',
      'Nicomekl&rsquo;s main area, at 0.883',
      'about 5,227.3 square metres',
      'Bolivar&rsquo;s polygon encloses 5,592.2',
      'Workplace Mathematics 10 covers useful ground',
      'Joe Brown Park has separate polygons'
    ],
    sources: [
      { claim: 'City of Surrey open data: Park Dog Off Leash Areas dataset page.', url: 'https://surrey-open-data-surreygis.hub.arcgis.com/datasets/6f382ce77e64436b82f5d4e34752a53f_0' },
      { claim: 'City of Surrey: Open Data License (commercial use, attribution statement, non-endorsement).', url: 'https://surrey-open-data-surreygis.hub.arcgis.com/pages/open-data-license' },
      { claim: 'BC curriculum: Foundations of Mathematics 11 content.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/11/foundations-of-mathematics' },
      { claim: 'BC curriculum: Foundations of Mathematics and Pre-calculus 10 content.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/10/foundations-of-mathematics-and-pre-calculus' },
      { claim: 'BC curriculum: Workplace Mathematics 10 content.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/10/workplace-mathematics' },
      { claim: 'BC curriculum: Pre-calculus 11 content.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/11/pre-calculus' },
      { claim: 'University of the Fraser Valley: Canadian Math Kangaroo host-centre page.', url: 'https://ufv.ca/math/contests/canadian-math-kangaroo' },
      { claim: 'CEMC: contest dates for 2026/27 and how contests work.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'BC Gov News: permanent daylight time, UTC-7.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' }
    ],
    rejectedClaims: [
      'Any Surrey population figure: StatCan was not reachable live.',
      'Which Grade 11 courses each Grade 10 course leads to: no provincial prerequisite source was saved, so families are sent to the school.',
      'BC graduation requirements and the Grade 10 numeracy assessment: the provincial page could not be reached.',
      'Math Kangaroo fees: the host page shows 2026 figures only, and the page is currency-neutral.',
      'That a high compactness ratio means a better park: refused; the page limits the ratio to geometry.',
      'That our lessons earn BC credits: refused.',
      'Names of Surrey schools, district results or private people: not used.',
      'Any affiliation with the City of Surrey, the BC Ministry of Education and Child Care, Math Kangaroo, the University of the Fraser Valley or CEMC.'
    ]
  }
};
