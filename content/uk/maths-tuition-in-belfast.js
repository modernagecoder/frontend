'use strict';
// Maths tuition in Belfast (ag- maths by city, UK cluster Phase 11, worker M3).
// Read on 1 October 2026 by curl, quotes grepped from the raw text (CCEA web pages returned HTTP 403 to curl and were not
// circumvented; the specification PDFs on ccea.org.uk downloaded normally):
//  - CCEA GCSE Specification in Mathematics (first teaching September 2017, subject code 2210): "This specification has two
//    tiers: Foundation and Higher."; units M1 to M8 including Foundation and Higher Tier Completion Tests; "At Foundation Tier,
//    students can achieve a Level 1 or Level 2 in Functional Mathematics as well as a grade in GCSE Mathematics."; content
//    "identify and apply circle definitions and properties, including tangent, arc, sector and segment"; Higher Tier unit M4
//    "understand and use circle theorems"; "use Pythagoras' theorem and trigonometry to solve 2D and 3D problems".
//  - CCEA GCSE Specification in Further Mathematics (subject code 2330): Unit 1 Pure Mathematics, Unit 2 Mechanics, Unit 3
//    Statistics, Unit 4 Discrete and Decision Mathematics.
//  - CCEA GCE Specification in Mathematics (first teaching September 2018): Unit AS 1 Pure Mathematics, Unit AS 2 Applied
//    Mathematics, Unit A2 1 Pure Mathematics, Unit A2 2 Applied Mathematics.
//  - Maths Week Ireland (mathsweek.ie/2026): 2026 dates 10 to 18 October 2026; "Maths Week is an all-island initiative
//    promoting positive attitudes towards maths and highlighting the importance of maths in our lives."; annual since 2006.
//  - Queen's University Belfast and Ulster University returned HTTP 403 to curl; not circumvented, nothing quoted.
// Local project (our calculation): summits from OpenStreetMap via Nominatim and the OSM API on 1 October 2026: Divis (node
// 332373083, ele=478), Black Mountain (node 3936300587, ele=389), McArt's Fort (node 2129302448, no ele tag); Belfast City Hall
// (way 539787113). Ground heights from OpenTopoData: eudem25m Divis 468.8, Black Mountain 380.7, McArt's Fort 334.5, City Hall
// 12.2; srtm30m 474, 385, 343, 14. Horizon distance on a smooth sphere, R = 6,371 km, no refraction: d = sqrt((R + h)^2 - R^2).
// Divis 478 m -> 78.0 km (DEM 468.8 m -> 77.3 km); Black Mountain 389 m -> 70.4 km; McArt's Fort 334.5 m -> 65.3 km; a 1.6 m
// eye at sea level -> 4.5 km; the same eye on City Hall ground (13.8 m) -> 13.3 km. Height needed to see 100 km: 785 m. Drop of
// a sphere below a level line: 10 km 7.85 m, 20 km 31.4 m, 50 km 196.2 m. Great-circle distances: Divis to McArt's Fort 6.05
// km, Divis to Black Mountain 1.43 km, Divis to City Hall 5.96 km. Angle at the Earth's centre for the Divis horizon 0.70 deg.
// Spine: how far could you see from the top of Divis on a perfectly smooth Earth? Family: circle theorems (tangent meets
// radius at a right angle), Pythagoras with a very large and a very small number, approximations (sqrt(2Rh)), map heights
// versus elevation-model heights.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'BELFAST MATHS', label: 'Maths tuition in Belfast', blurb: 'CCEA GCSE, Further Maths and A level maths for Belfast, plus primary and adult learners, with a horizon project from the Belfast Hills.' },
  slug: 'maths-tuition-in-belfast',
  code: 'mbf',
  accent: '#187230',
  accentRationale: 'Belfast maths: a muted hill green, chosen by hand and kept apart from the olive on our Belfast coding page',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Belfast',
  title: 'Maths Tuition in Belfast | CCEA GCSE and A Level, Online',
  description: 'Online maths tuition in Belfast for ages 6 to 67: CCEA GCSE Maths and Further Maths, AS and A2, primary and adult maths, plus a horizon project from Divis.',
  ogDescription: 'A Belfast maths tutor, live online: primary maths, CCEA GCSE Mathematics at Foundation or Higher tier, GCSE Further Mathematics, AS and A2 Maths, and adults.',
  twitterDescription: 'Belfast maths, taught live online: how far could you see from the top of Divis on a perfectly smooth Earth? One right angle answers it.',
  pageName: 'Maths Tuition in Belfast',
  webPageDescription: 'Live online maths tuition for Belfast learners aged 6 to 67 under the Northern Ireland Curriculum, from primary maths to CCEA GCSE Mathematics and Further Mathematics, AS and A2 Mathematics, and adult study, with a circle-theorem project on the Belfast Hills.',
  courseDescription: 'Live online maths for Belfast learners at every stage, taught in level-matched groups of five to ten or one to one, with GCSE and A level lessons steered to the CCEA specifications.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Belfast',
  navLinks: [
    { href: '#ccea', label: 'CCEA' },
    { href: '#horizon', label: 'The horizon' },
    { href: '#geometry', label: 'The geometry' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Belfast &middot; Maths for learners aged 6 to 67 &middot; Live and online, small classes or one to one',
  h1: 'Maths tuition in Belfast',
  lede: 'OpenStreetMap gives the summit of Divis as 478 metres. Imagine the Earth as a perfectly smooth ball with no air to bend the light. How far away is the horizon from the top? One fact from GCSE geometry answers it: a tangent meets a radius at a right angle. Put Pythagoras on that right angle, with the Earth\'s radius of 6,371 kilometres on one side, and the horizon sits 78.0 kilometres away. Stand at sea level with your eyes 1.6 metres up and it shrinks to 4.5 kilometres. This page explains how we teach maths to Belfast learners, from P1 to A2 and adult study, and uses the Belfast Hills to show how much a single circle theorem can do.',
  secondaryCta: { href: '#horizon', label: 'See the horizon numbers' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Belfast.',
  heroNote: 'Maths only on this page &middot; Primary, secondary, sixth form and adults &middot; Not linked with any Belfast school, college or university',
  spec: [
    ['Who', 'Belfast learners aged 6 to 67'],
    ['Primary', 'P1 to P7 number, shape and measure'],
    ['Secondary', 'Years 8 to 12, CCEA GCSE Mathematics'],
    ['Extra GCSE', 'CCEA GCSE Further Mathematics'],
    ['Sixth form', 'CCEA AS and A2 Mathematics'],
    ['Adults', 'Refreshers, Functional Mathematics, GCSE'],
    ['Format', 'Live video, 5 to 10 per class or one to one'],
    ['Local project', 'Horizons from Divis and Black Mountain']
  ],
  capsuleQ: 'In short',
  capsule: 'Belfast learners from 6 to 67 can study maths with us live online: primary maths from P1 to P7, Years 8 to 10, CCEA GCSE Mathematics at Foundation or Higher tier, CCEA GCSE Further Mathematics, CCEA AS and A2 Mathematics, and adult maths. Classes hold five to ten learners at the same level, or a learner can work one to one. Our Belfast example uses the hills: on a smooth Earth without refraction, the horizon from the 478 metre summit of Divis is 78.0 kilometres away, found with the circle theorem that a tangent is perpendicular to a radius and with Pythagoras. The first lesson is free. Afterwards, group places cost USD 100 a month and private lessons USD 150 a month.',

  picks: {
    eyebrow: 'Common starting points in Belfast',
    h2: 'Three courses most families start with',
    lede: 'Pick by stage. The complete list, from first counting to degree-level maths, follows below.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'BFS / 1', title: 'Primary maths, P1 to P7', note: 'Number, fractions, measure and problem solving, with clear written working from the start.' },
      { course: 'gcse-mathematics-mastery', code: 'BFS / 2', title: 'GCSE maths', note: 'Written for the English boards; for Belfast learners we teach to the CCEA specification and its unit structure.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'BFS / 3', title: 'AS and A2 maths', note: 'Pure and applied mathematics, sequenced to follow the CCEA AS and A2 units.' }
    ]
  },

  sections: [
    {
      id: 'ccea', tint: 'tint', eyebrow: 'Maths in Northern Ireland',
      h2: 'CCEA GCSE, Further Maths and A level maths for Belfast learners',
      lede: 'Northern Ireland has its own curriculum and its own awarding body, CCEA. A Belfast pupil\'s path looks different from one in England, Scotland or Wales.',
      body: [
        { kind: 'table', caption: 'Maths stages for a Belfast learner, and what our lessons concentrate on', head: ['Stage', 'Usual ages', 'Our concentration'], rows: [
          ['P1 to P4', '4 to 8', 'Counting, place value, number facts, money and simple shape.'],
          ['P5 to P7', '8 to 11', 'Times tables, fractions and decimals, measure, and multi-step problems.'],
          ['Years 8 to 10', '11 to 14', 'Algebra, ratio, Pythagoras, angles and data handling.'],
          ['CCEA GCSE', '14 to 16', 'Mathematics at Foundation or Higher tier; Further Mathematics alongside for strong students.'],
          ['CCEA AS and A2', '16 to 18', 'Pure and applied mathematics across four units.'],
          ['Adults', '18 to 67', 'Confidence with number, Functional Mathematics, or GCSE as an adult.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'CCEA GCSE maths tutor',
          left: [
            'CCEA\'s GCSE Mathematics specification says plainly: "This specification has two tiers: Foundation and Higher." It is built from units, including completion tests at each tier, and the specification adds that at Foundation Tier "students can achieve a Level 1 or Level 2 in Functional Mathematics as well as a grade in GCSE Mathematics".',
            'Geometry runs right through it. The content asks students to "identify and apply circle definitions and properties, including tangent, arc, sector and segment", and the Higher Tier unit M4 asks them to "understand and use circle theorems". The horizon project below uses exactly those ideas.'
          ],
          rightH3: 'Further Maths and A level',
          right: [
            'Strong students can also take CCEA GCSE Further Mathematics, which has four units: Pure Mathematics, Mechanics, Statistics, and Discrete and Decision Mathematics. At sixth form, CCEA GCE Mathematics runs as Unit AS 1 Pure, Unit AS 2 Applied, Unit A2 1 Pure and Unit A2 2 Applied.',
            'Our national pages go into detail: <a class="ag-inline-link" href="/ccea-gcse-maths-help">CCEA GCSE maths</a>, <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths</a> and <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths</a>. For P7 families, our <a class="ag-inline-link" href="/transfer-test-maths-practice-northern-ireland">transfer test maths page</a> covers the maths side only.'
          ] },
        { kind: 'source', html: 'Sources: CCEA specifications for <a class="ag-inline-link" href="https://ccea.org.uk/downloads/docs/Specifications/GCSE/GCSE%20Mathematics%20(2017)/GCSE%20Mathematics%20(2017)-specification-Standard.pdf" rel="noopener" target="_blank">GCSE Mathematics</a>, <a class="ag-inline-link" href="https://ccea.org.uk/downloads/docs/Specifications/GCSE/GCSE%20Further%20Mathematics%20(2017)/GCSE%20Further%20Mathematics%20(2017)-specification-Standard.pdf" rel="noopener" target="_blank">GCSE Further Mathematics</a> and <a class="ag-inline-link" href="https://ccea.org.uk/downloads/docs/Specifications/GCE/GCE%20Mathematics%20(2018)/GCE%20Mathematics%20(2018)-specification-Standard.pdf" rel="noopener" target="_blank">GCE Mathematics</a>, read on 1 October 2026. The ages in the table are typical, not fixed.' }
      ]
    },
    {
      id: 'horizon', tint: 'plain', eyebrow: 'The Belfast project',
      h2: 'How far could you see from Divis on a perfectly smooth Earth?',
      lede: 'A geometry question with real numbers: the heights of the Belfast Hills, the size of the Earth, and one right angle.',
      body: [
        { kind: 'two',
          left: [
            'We took three summits from OpenStreetMap: Divis, tagged at 478 metres; Black Mountain, tagged at 389 metres; and McArt\'s Fort on Cave Hill, which has no height tag. To check the tags, we looked each point up in two public elevation models. EU-DEM, with a 25 metre grid, gives 468.8, 380.7 and 334.5 metres; SRTM, with a 30 metre grid, gives 474, 385 and 343 metres.',
            'The models come in lower than the tags because each one averages the ground across a grid cell, and a summit is the highest point in its cell. That disagreement is worth a lesson on its own: which number would you use, and why?'
          ],
          right: [
            'Now the question. From a height h above a smooth sphere of radius R, the line of sight that just grazes the surface is a tangent. The radius to the point where it touches meets that tangent at a right angle. So the horizon distance d satisfies d² + R² = (R + h)².',
            'With R = 6,371 kilometres and h = 478 metres, d comes to 78.0 kilometres. Using the EU-DEM height of 468.8 metres instead gives 77.3 kilometres. A 9 metre difference in height moves the horizon by about 750 metres, which shows how sensitive the answer is to the input.'
          ] },
        { kind: 'table', mt: true, caption: 'Horizon distance on a smooth Earth of radius 6,371 km, ignoring refraction and terrain (our calculation)', head: ['Viewpoint', 'Height used', 'Horizon distance'], numCols: [1, 2], rows: [
          ['Divis, map tag', '478 m', '78.0 km'],
          ['Divis, EU-DEM', '468.8 m', '77.3 km'],
          ['Black Mountain, map tag', '389 m', '70.4 km'],
          ['McArt\'s Fort, EU-DEM', '334.5 m', '65.3 km'],
          ['Eye 1.6 m above City Hall ground', '13.8 m', '13.3 km'],
          ['Eye 1.6 m above sea level', '1.6 m', '4.5 km']
        ] },
        { kind: 'source', html: 'Summits and City Hall: <a class="ag-inline-link" href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap contributors</a>, 1 October 2026. Heights: <a class="ag-inline-link" href="https://www.opentopodata.org/" rel="noopener" target="_blank">OpenTopoData</a> eudem25m (EU-DEM v1.1, produced using Copernicus data) and srtm30m. Horizons are Modern Age Coders\' calculations for an idealised smooth sphere; real views depend on the air, the weather and the land in between, and this page makes no claim about what can actually be seen from any hill.' }
      ]
    },
    {
      id: 'geometry', tint: 'deep', eyebrow: 'From GCSE to A level',
      h2: 'A circle theorem, Pythagoras and an approximation worth knowing',
      lede: 'The same right-angled triangle carries a learner from Year 10 geometry to A level approximation, and it hides a lovely piece of algebra.',
      body: [
        { kind: 'two',
          leftH3: 'Why the shortcut works',
          left: [
            'Expand (R + h)² − R² and you get 2Rh + h². Because h is tiny compared with R, the h² term hardly matters, so d ≈ √(2Rh). With R in metres, that becomes roughly 3,570 × √h metres. For Divis the shortcut gives 78,052 metres against the exact 78,044: an error of eight metres in seventy-eight kilometres.',
            'Turning the formula round answers a different question. To see 100 kilometres across a smooth sphere you would need to stand about 785 metres up, h = d² ÷ 2R. No point in the Belfast Hills comes close.'
          ],
          rightH3: 'How quickly the Earth falls away',
          right: [
            'Another way to see the curve: how far below a perfectly level line does the sphere drop after a distance x? Very nearly x² ÷ 2R. After 10 kilometres it is 7.85 metres; after 20 kilometres, 31.4 metres; after 50 kilometres, 196.2 metres.',
            'Doubling the distance quadruples the drop, which is the square law in action. Students who see the table usually ask whether that is why ships seem to sink as they sail away, and that question leads naturally into A level modelling.'
          ] },
        { kind: 'table', mt: true, caption: 'How far a smooth Earth drops below a level line, x² ÷ 2R with R = 6,371 km (our calculation)', head: ['Distance', 'Drop below the level line'], numCols: [1], rows: [
          ['1 km', '0.08 m'],
          ['10 km', '7.85 m'],
          ['20 km', '31.4 m'],
          ['50 km', '196.2 m']
        ] },
        { kind: 'p', mt: true, html: 'There is one more number worth showing. Seen from the centre of the Earth, the whole 78 kilometres from Divis to its horizon spans an angle of only 0.70°. Meanwhile, on the map, Divis is 5.96 kilometres in a straight line from Belfast City Hall and 6.05 kilometres from McArt\'s Fort. The local distances are tiny next to the horizon, and a learner who puts both on one sketch understands scale in a way no worksheet manages.' },
        { kind: 'source', html: 'All values are our calculations from the inputs above. CCEA wording from the <a class="ag-inline-link" href="https://ccea.org.uk/downloads/docs/Specifications/GCSE/GCSE%20Mathematics%20(2017)/GCSE%20Mathematics%20(2017)-specification-Standard.pdf" rel="noopener" target="_blank">GCSE Mathematics specification</a>.' }
      ]
    },
    {
      id: 'beyond', tint: 'tint', eyebrow: 'Maths outside lessons',
      h2: 'Maths Week Ireland, maths challenges and where a keen Belfast learner can go',
      lede: 'Families often ask what else is on. Here is what we could confirm on public pages; we organise none of it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Maths Week Ireland', p: 'Its site gives the 2026 dates as 10 to 18 October and describes it as "an all-island initiative promoting positive attitudes towards maths and highlighting the importance of maths in our lives".' },
          { h3: 'A long-running festival', p: 'The same page says the week has been an annual festival since 2006, run as a partnership of many organisations. Schools register to take part.' },
          { h3: 'UK maths challenges', p: 'Northern Ireland schools can enter the UK Mathematics Trust challenges at Junior, Intermediate and Senior level. Our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists the dates.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Universities in Belfast run their own events for schools, but their websites refused our automated requests, so we have not quoted them. A learner who is interested should ask a maths teacher, who will usually know what is coming up.',
            'For a learner who enjoys puzzles, the horizon project is good preparation for challenge papers. It needs one key insight, the right angle, and then careful arithmetic, which is how many challenge problems work.'
          ],
          right: [
            'All our lessons are live online, so a learner in Ormeau, Malone or the Shankill joins from home. Classes are made up by level, so a Belfast learner might share a lesson with someone in Derry, Dublin or Glasgow.',
            'For learners heading towards competition maths, our <a class="ag-inline-link" href="/maths-olympiad-training-uk">olympiad page</a> explains how we prepare for the harder rounds.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.mathsweek.ie/2026/" rel="noopener" target="_blank">Maths Week Ireland 2026</a>, read on 1 October 2026; <a class="ag-inline-link" href="https://ukmt.org.uk/" rel="noopener" target="_blank">UK Mathematics Trust</a>. Modern Age Coders has no connection with Maths Week Ireland, the UKMT, CCEA or any Belfast school, college or university.' }
      ]
    },
    {
      id: 'adults', tint: 'plain', eyebrow: 'Adults welcome',
      h2: 'Maths for adults in Belfast',
      lede: 'Many of our learners are adults, and almost all of them are better at maths than they believe.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Number confidence', p: 'Fractions, percentages and simple algebra rebuilt slowly, with explanations instead of rules and no question too basic.' },
          { h3: 'Functional Mathematics and GCSE', p: 'For a course, an apprenticeship or a job that asks for a maths qualification, at Foundation or Higher tier.' },
          { h3: 'Maths for daily life', p: 'Budgets, rates, measurements and charts. Our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths page</a> explains how adult groups run.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults enjoy the horizon project because it starts from something they have wondered about on a clear day. Ten minutes later they have used a circle theorem and Pythagoras, often for the first time since school, and found that both make perfect sense.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Building up',
    h2: 'From measuring to circle theorems, in four steps',
    lede: 'Each step relies on the previous one. A learner joins at whichever step fits, and the free lesson finds it.',
    table: { caption: 'Four steps from measure to geometric proof, with a sign that each is secure', head: ['Usually', 'Step', 'Secure when the learner'], rows: [
      ['P5 to P7', '1. Measure and square numbers', 'Works with metres and kilometres and squares numbers accurately'],
      ['Years 8 to 10', '2. Pythagoras', 'Finds any side of a right-angled triangle and checks it is sensible'],
      ['Years 11 and 12', '3. Circle theorems', 'Uses the tangent and radius rule to set up a triangle'],
      ['Years 13 and 14', '4. Approximation', 'Explains which terms can be dropped and estimates the error']
    ] },
    left: { h3: 'Joining in Year 11 or 12', ps: [
      'It is still worth it. We make number and algebra secure first, because shaky foundations cost marks on every unit.',
      'If there is more to do than time allows, we will say so honestly after the trial lesson.'
    ] },
    right: { h3: 'After GCSE', ps: [
      'Many carry on to AS and A2, some to <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability</a>, and some to <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where a short program draws the horizon for any height.',
      'A few fall for problem solving and move on to competition maths.'
    ] }
  },

  catalogue: {
    eyebrow: 'Every course',
    h2: 'Maths courses for Belfast learners',
    lede: 'Arranged by stage. Courses written for English exams are matched to the CCEA specification for Belfast learners.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'P1 to P7', courses: [
        { code: 'MBF / A1', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Counting and shape for the youngest pupils.' },
        { code: 'MBF / A2', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'All primary topics, explained properly.' },
        { code: 'MBF / A3', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Calculation in the head, quickly and accurately.' },
        { code: 'MBF / A4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus maths', blurb: 'Beads first, then a mental abacus.' }
      ] },
      { num: 'II', h3: 'Years 8 to 12', sub: 'Key Stage 3 and GCSE', courses: [
        { code: 'MBF / B1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Years 8 to 10 maths', blurb: 'Algebra, geometry and data before GCSE.' },
        { code: 'MBF / B2', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Firm algebra for the GCSE years.' },
        { code: 'MBF / B3', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Taught to CCEA units at either tier.' },
        { code: 'MBF / B4', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For international qualification entries.' }
      ] },
      { num: 'III', h3: 'Years 13 and 14 and beyond', sub: 'AS, A2 and university', courses: [
        { code: 'MBF / C1', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'AS and A2 maths', blurb: 'Pure and applied units in CCEA order.' },
        { code: 'MBF / C2', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'Probability and data at depth.' },
        { code: 'MBF / C3', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus and linear algebra for degree study.' },
        { code: 'MBF / C4', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Challenge-style problems with no recipe.' }
      ] },
      { num: 'IV', h3: 'Applied and adult', sub: 'Work and curiosity', courses: [
        { code: 'MBF / D1', slug: 'complete-business-finance-mathematics-mastery', title: 'Money maths', blurb: 'Interest, loans and investment.' },
        { code: 'MBF / D2', slug: 'data-analytics-mathematics-masterclass', title: 'Data maths', blurb: 'Numbers behind charts and reports.' },
        { code: 'MBF / D3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Using Python to explore geometry.' },
        { code: 'MBF / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Speed methods once basics are secure.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'Fitting maths around a Belfast week',
    lede: 'Teaching happens from India, where the clocks do not change. India is five and a half hours ahead of Belfast in winter and four and a half hours ahead in British Summer Time. Every time we agree is given in UK time.',
    slots: [
      { time: 'Weekdays after school', l: 'Primary and post-primary pupils.' },
      { time: 'Weekday evenings', l: 'Years 13 and 14, and adults.' },
      { time: 'Saturday and Sunday mornings', l: 'For anyone who prefers weekends.' }
    ],
    cells: [
      { h3: 'One teacher throughout', p: 'The same teacher each week, who learns each learner\'s habits.' },
      { h3: 'Updates home', p: 'A brief note after lessons on progress and next steps.' },
      { h3: 'Classes by level', p: 'Five to ten learners at one level in each class.' },
      { h3: 'Real numbers', p: 'Hill heights, maps and records next to exam questions.' },
      { h3: 'Private teaching', p: 'One to one for a single topic or the last weeks before exams.' },
      { h3: 'Understanding before speed', p: 'Methods are explained, then practised.' }
    ]
  },

  projectsH2: 'Projects our learners built later on',
  projectsLede: 'Learners who began with geometry and numbers created the four projects below. More are in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Copied exactly from the Google reviews our families and learners wrote.',

  fees: {
    h2: 'Fees',
    lede: 'Paid monthly in US dollars, at the same rate for every country outside India, with no joining fee and no fixed term.',
    free: ['A real lesson at the right level', 'Our candid view afterwards', 'No card details asked for'],
    group: ['Five to ten learners at one level', 'A regular teacher', 'Marked work, discussed in class', 'A certificate when you finish'],
    one: ['Individual teaching', 'Focused on the exact gap', 'Well suited to the run-up to exams']
  },

  faq: {
    eyebrow: 'Belfast maths questions',
    h2: 'What Belfast families and adult learners ask',
    items: [
      { q: 'What is the circle theorem about a tangent and a radius?', a: 'A tangent to a circle meets the radius drawn to the point of contact at a right angle. That right angle lets you use Pythagoras, which is how the horizon distance from a hill can be calculated.' },
      { q: 'How much does a maths tutor cost in Belfast?', a: 'The first lesson is free. After that it is USD 100 a month for a place in a small class or USD 150 a month for one to one teaching, with no joining fee.' },
      { q: 'Are you a CCEA GCSE maths tutor?', a: 'Yes. We teach CCEA GCSE Mathematics at Foundation or Higher tier, following its unit structure, and CCEA GCSE Further Mathematics for strong students.' },
      { q: 'Do you teach CCEA AS and A2 maths?', a: 'Yes. We teach the pure and applied units of CCEA GCE Mathematics at AS and A2.' },
      { q: 'What is the best age to start extra maths?', a: 'Whenever a learner first starts to feel unsure, before the gap grows. We teach children from 6 and adults up to 67.' },
      { q: 'Is online maths tuition as good as an in-person tutor?', a: 'For most learners it is. The teacher watches working appear on screen and responds immediately. Lessons are live, never pre-recorded, and each class keeps its teacher.' },
      { q: 'Can you help with the transfer test?', a: 'We help with the maths side only. Our transfer test maths page explains what we cover; we do not give advice on schools or admissions.' },
      { q: 'Do you teach adults in Belfast?', a: 'Yes, from first steps with number to Functional Mathematics and GCSE, in adult classes or one to one.' },
      { q: 'Do you promise a grade?', a: 'No. Nobody can honestly promise a grade. We teach thoroughly and tell you clearly how things are going.' },
      { q: 'Are you connected with CCEA or a Belfast university?', a: 'No. We quote CCEA\'s published specifications so families know what is examined, but we have no link with CCEA, any university or any school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Belfast learners',
    lede: 'Northern Ireland maths pages, our Northern Ireland page and coding in Belfast.',
    items: [
      { href: '/ccea-gcse-maths-help', label: 'CCEA GCSE maths help', p: 'The CCEA GCSE in detail.' },
      { href: '/transfer-test-maths-practice-northern-ireland', label: 'Transfer test maths', p: 'The maths side of P7 preparation.' },
      { href: '/further-maths-tuition-online', label: 'Further Maths tuition', p: 'For learners who want more.' },
      { href: '/best-coding-class-in-belfast', label: 'Coding classes in Belfast', p: 'Our coding page for the city.' },
      { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland', p: 'Our page for learners across Northern Ireland.' },
      { href: '/maths-tuition-in-cardiff', label: 'Maths tuition in Cardiff', p: 'A census histogram project.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us the learner\'s age or school year and the topic they find hardest. The trial is a proper lesson, and you get an honest picture of where things stand.',
    readFirst: 'Want to look around first? Our <a class="ag-inline-link" href="/courses">courses</a> and our page on <a class="ag-inline-link" href="/how-we-teach">how we teach</a> are good places to start.',
    note: 'WhatsApp gets the fastest reply. Our number starts with India\'s code because the team works there; there is no Belfast office, and all teaching is online.',
    formNote: 'No card needed. We write back to agree a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths in Northern Ireland', links: [
        { href: '/ccea-gcse-maths-help', label: 'CCEA GCSE maths' },
        { href: '/transfer-test-maths-practice-northern-ireland', label: 'Transfer test maths' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/online-maths-classes-for-adults-in-uk', label: 'Maths for adults' }
      ] },
      { h4: 'In the UK', links: [
        { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
        { href: '/best-coding-class-in-belfast', label: 'Coding in Belfast' },
        { href: '/maths-tuition-in-cardiff', label: 'Maths tuition in Cardiff' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'Maths for all ages, live online'
  },

  personalityCss: `
.ag-root.ag-mbf .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-mbf .ag-capsule { border-left-width: 4px; }
.ag-root.ag-mbf .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-mbf .ag-table caption { text-align: left; font-weight: 600; font-style: normal; }
.ag-root.ag-mbf .ag-table td:nth-child(3) { font-weight: 600; }
.ag-root.ag-mbf .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-mbf .ag-three h3 { letter-spacing: -0.006em; }
.ag-root.ag-mbf .ag-slots { gap: 1.15rem; }
`,

  mustMention: ['Divis', '78.0 kilometres', '468.8', 'McArt\'s Fort', 'Discrete and Decision Mathematics', 'Unit A2 2 Applied', 'Maths Week Ireland', 'an all-island initiative', '196.2 metres'],

  dossier: {
    curriculumAuthority: 'Northern Ireland Curriculum; CCEA GCSE Mathematics (2017, two tiers, units M1 to M8), CCEA GCSE Further Mathematics (2017, four units), CCEA GCE Mathematics (2018, AS 1, AS 2, A2 1, A2 2).',
    localProject: 'Belfast Hills horizons on a smooth Earth, R = 6,371 km, no refraction: Divis OSM 478 m -> 78.0 km, EU-DEM 468.8 m -> 77.3 km; Black Mountain 389 m -> 70.4 km; McArt\'s Fort EU-DEM 334.5 m -> 65.3 km; 1.6 m eye at sea level 4.5 km, on City Hall ground 13.3 km; 785 m needed for 100 km; drop x^2/2R: 7.85 m at 10 km, 31.4 m at 20 km, 196.2 m at 50 km; Divis horizon angle at centre 0.70 deg; Divis to City Hall 5.96 km, to McArt\'s Fort 6.05 km.',
    requiredMentions: ['Divis', '78.0 kilometres', '468.8', 'McArt\'s Fort', 'Discrete and Decision Mathematics', 'Unit A2 2 Applied', 'Maths Week Ireland', 'an all-island initiative', '196.2 metres'],
    sources: [
      { claim: 'CCEA GCSE Mathematics specification: two tiers; Functional Mathematics Level 1 or 2 at Foundation Tier; circle definitions including tangent; circle theorems at Higher Tier.', url: 'https://ccea.org.uk/downloads/docs/Specifications/GCSE/GCSE%20Mathematics%20(2017)/GCSE%20Mathematics%20(2017)-specification-Standard.pdf' },
      { claim: 'CCEA GCSE Further Mathematics specification: Pure Mathematics, Mechanics, Statistics, Discrete and Decision Mathematics.', url: 'https://ccea.org.uk/downloads/docs/Specifications/GCSE/GCSE%20Further%20Mathematics%20(2017)/GCSE%20Further%20Mathematics%20(2017)-specification-Standard.pdf' },
      { claim: 'CCEA GCE Mathematics specification: Units AS 1, AS 2, A2 1, A2 2.', url: 'https://ccea.org.uk/downloads/docs/Specifications/GCE/GCE%20Mathematics%20(2018)/GCE%20Mathematics%20(2018)-specification-Standard.pdf' },
      { claim: 'Maths Week Ireland 2026: 10 to 18 October 2026; an all-island initiative; annual since 2006.', url: 'https://www.mathsweek.ie/2026/' },
      { claim: 'OpenStreetMap summit tags (Divis 478, Black Mountain 389) and OpenTopoData eudem25m and srtm30m heights.', url: 'https://www.opentopodata.org/' }
    ],
    rejectedClaims: [
      'Any claim about what can actually be seen from the Belfast Hills (Scotland, the Isle of Man or anywhere else): the page computes only an idealised smooth-sphere horizon.',
      'Queen\'s University Belfast or Ulster University outreach details: both sites returned HTTP 403; not circumvented, nothing quoted.',
      'An official surveyed height for Divis or McArt\'s Fort: only map tags and model heights, each labelled.',
      'Transfer test format, dates or school admissions advice: not given; the page links to our maths-only page.',
      'Belfast exam results or school performance: excluded by the spec.'
    ]
  }
};
