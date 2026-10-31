'use strict';
// Cambridge International AS & A Level Mathematics 9709 help (ag- exam door, UK and US exams cluster, row UK067).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/cambridge-a-level-maths-9709-help/):
//  - Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027 (/Images/697427-2026-2027-syllabus.pdf),
//    "version 4, published December 2025. There are no significant changes which affect" teaching. Verbatim: six
//    components (Paper 1 Pure Mathematics 1, Paper 2 Pure Mathematics 2, Paper 3 Pure Mathematics 3, Paper 4 Mechanics,
//    Paper 5 Probability & Statistics 1, Paper 6 Probability & Statistics 2); "Candidates take two components for AS
//    Level Mathematics."; "Candidates take four components for A Level Mathematics."; "Candidates following an AS Level
//    route will be eligible for grades a–e. Candidates following an A Level route are eligible for grades A*–E."; Paper 1
//    "1 hour 50 minutes", "75 marks", "10 to 12 structured questions", "60% of the AS Level", "30% of the A Level";
//    Paper 2 "1 hour 15 minutes", "50 marks", "6 to 8 structured questions", "40% of the AS Level", "Offered only as part
//    of AS Level"; Paper 3 "1 hour 50 minutes", "75 marks", "9 to 11 structured questions", "30% of the A Level only";
//    Paper 4 "1 hour 15 minutes", "50 marks", "40% of the AS Level", "20% of the A Level"; Paper 5 same, "Compulsory for A
//    Level"; Paper 6 "20% of the A Level only"; A Level: "All candidates take: Paper 1 ... and Paper 3", then Papers 4 and
//    5 or Papers 5 and 6; "it is not possible to combine Paper 4 and Paper 6. This is because Paper 6 depends on prior
//    knowledge of the subject content for Paper 5."; "the Pure Mathematics only route (Paper 1 and Paper 2) is available
//    at AS Level only. Candidates who take the Pure Mathematics only route cannot then use their AS result and carry
//    forward to complete the A Level."; staged route and linear route; "Computers, graphical calculators and calculators
//    capable of symbolic algebraic manipulation or symbolic differentiation or integration are not permitted.";
//    "Candidates are expected to show all necessary working; no marks will be given for unsupported answers from a
//    calculator."; "correct to three significant figures (or one decimal place for angles in degrees)"; "A list of
//    formulae and statistical tables (MF19) is supplied"; Mechanics: "use of the approximate numerical value 10 (m s–2)
//    for g is expected", "Vector notation will not be used in the question papers.", extended bodies "should be treated
//    as particles"; "about 180 guided learning hours for each Cambridge International AS Level and about 360 guided
//    learning hours for a Cambridge International A Level"; previous study "equivalent to Cambridge IGCSE (Extended) or
//    Cambridge O Level"; June and November series, March in India; "Private candidates can enter for this syllabus.";
//    "Candidates can retake Cambridge International AS Level and Cambridge International A Level as many times as they
//    want to."; progression to Further Mathematics 9231 with recommended component combinations; P3 content includes
//    3.8 Differential equations and 3.9 Complex numbers; P5 includes 5.2 Permutations and combinations.
//  - Syllabus update for 2026 and 2027 (/Images/723728-...): version 2 "updated the headers on page 14", version 3
//    corrected typographical errors, version 4 updated a weblink; "We have not updated the specimen materials".
//  - 9709 syllabus for 2028, 2029 and 2030 (/Images/744634-2028-2030-syllabus.pdf): "version 1, published September
//    2025"; "There are no significant changes which affect teaching."
// Our own material, labelled on the page: the discriminant example (-4 < k < 4), the complex roots 2 +- 3i (modulus
// root 13, argument 0.983 radians), the smooth-plane example with g = 10 (a = 5, 10 m in 2 s), the STATISTICS
// arrangements count (50,400), and a six-question practice set, all checked in Python on 31 October 2026.
// Spine: six papers, three routes, and the choice of applied pair is the real decision. Paper 4 cannot sit with Paper
// 6, the pure-only AS cannot carry forward, and Cambridge Mechanics uses g = 10 and treats every body as a particle.
// Lesson family: choosing a route, then working to MF19 and three significant figures.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'CAMBRIDGE 9709', blurb: 'Six papers and three routes. The applied pair is the real choice: Paper 4 cannot sit with Paper 6, and a pure-only AS cannot carry forward.' },
  slug: 'cambridge-a-level-maths-9709-help',
  code: 'cal',
  accent: '#725D3C',
  accentRationale: 'Cambridge International 9709: a weathered bronze #725D3C from the cluster allocation, 5.92:1 on #FBF8F2 and 5.09:1 on the deepest paper tint, earthier and greyer than the two English A level pages',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Cambridge A Level Maths 9709 help',
  title: 'Cambridge A Level Maths 9709 Help: Papers, Routes, Syllabus',
  description: 'Cambridge AS and A Level Maths 9709 help: six papers from Pure 1 to Statistics 2, three routes, and which pairs can combine. Live online classes, 1-on-1 or group.',
  ogDescription: 'Cambridge International AS & A Level Mathematics 9709 from the 2026 to 2027 syllabus: the six papers, the AS and A Level routes, the rules on combining them, and the exam conventions.',
  twitterDescription: '9709 maths: P1, P2, P3, M1, S1 and S2, how the routes work, and why Paper 4 and Paper 6 cannot go together.',
  pageName: 'Cambridge A Level Maths 9709 Help',
  webPageDescription: 'Live online teaching for Cambridge International AS & A Level Mathematics 9709, written from the syllabus for 2026 and 2027.',
  courseDescription: 'Live online classes for Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 1 to 3, Mechanics, and Probability and Statistics 1 and 2, on any route.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Cambridge A Level Maths 9709',
  navLinks: [
    { href: '#papers', label: 'Six papers' },
    { href: '#routes', label: 'Routes' },
    { href: '#conventions', label: 'Exam conventions' },
    { href: '#example', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Cambridge International &middot; AS &amp; A Level 9709 &middot; Ages 16 to 19',
  h1: 'Cambridge A Level Maths 9709 help',
  lede: 'Cambridge International AS & A Level Mathematics, syllabus code 9709, is taken by sixth formers in UK independent schools and international schools and by private candidates around the world. Where English A levels set three fixed papers, 9709 offers six and lets the school choose which to sit, at AS after one year or as a full A Level. That flexibility comes with rules. This page sets out the six papers, the three routes and the combinations Cambridge does not allow, the exam conventions, and how we teach 9709 live online.',
  secondaryCta: { href: '#routes', label: 'The three routes' },
  wa: 'Hello Modern Age Coders, I would like a free first class for Cambridge A Level Maths 9709.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Not connected with Cambridge University Press &amp; Assessment',
  spec: [
    ['Qualification', 'Cambridge International AS &amp; A Level Mathematics'],
    ['Code', '9709'],
    ['Syllabus in use', 'For exams in 2026 and 2027'],
    ['Components', 'Six: three pure, one mechanics, two statistics'],
    ['AS Level', 'Two papers, grades a to e'],
    ['A Level', 'Four papers, grades A* to E'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Cambridge International AS & A Level Mathematics 9709 is built from six papers: Pure Mathematics 1, 2 and 3, Mechanics, and Probability & Statistics 1 and 2. AS Level takes two papers, always including Pure Mathematics 1, and is graded a to e. A Level takes four, always Pure Mathematics 1 and 3 plus either Mechanics with Statistics 1 or Statistics 1 with Statistics 2, and is graded A* to E. Exams run in June and November. Modern Age Coders teaches every 9709 paper live online within its A Level Maths course, as a group of 15 to 20 or 1-on-1, starting with a free class.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for a 9709 student',
    lede: 'Our A level course carries all six 9709 papers. Statistics adds depth for Papers 5 and 6, and Further Maths leads on to Cambridge 9231.',
    items: [
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'CL / 01', title: 'A Level Maths', note: 'Pure 1 to 3, Mechanics and Statistics 1, taught to the route the school has chosen.' },
      { course: 'statistics-probability-maths-course', code: 'CL / 02', title: 'Statistics and Probability', note: 'For students on the Statistics 1 and 2 route, including the Poisson distribution and hypothesis tests.' },
      { course: 'a-level-further-maths-course', code: 'CL / 03', title: 'A Level Further Maths', note: 'For students also taking Further Mathematics, with Cambridge or another board.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'Six papers',
      h2: 'What are the 9709 papers, and how long is each?',
      lede: 'Three pure papers, one mechanics paper and two statistics papers, of two lengths.',
      body: [
        { kind: 'p', html: 'The syllabus states the structure simply: "Candidates take two components for AS Level Mathematics. Candidates take four components for A Level Mathematics." The two longer papers, Pure Mathematics 1 and 3, carry most of the weight. The four shorter papers are each 1 hour 15 minutes and 50 marks, and each one counts for a different share depending on whether it is sat for AS or for A Level.' },
        { kind: 'table', caption: 'Cambridge International AS & A Level Mathematics 9709: the six components', head: ['Paper', 'Time', 'Marks', 'Questions', 'Share of AS', 'Share of A Level'], rows: [
          ['1: Pure Mathematics 1', '1 hour 50 minutes', '75', '10 to 12', '60 per cent', '30 per cent'],
          ['2: Pure Mathematics 2', '1 hour 15 minutes', '50', '6 to 8', '40 per cent', 'Not available'],
          ['3: Pure Mathematics 3', '1 hour 50 minutes', '75', '9 to 11', 'Not available', '30 per cent'],
          ['4: Mechanics', '1 hour 15 minutes', '50', '6 to 8', '40 per cent', '20 per cent'],
          ['5: Probability &amp; Statistics 1', '1 hour 15 minutes', '50', '6 to 8', '40 per cent', '20 per cent'],
          ['6: Probability &amp; Statistics 2', '1 hour 15 minutes', '50', '6 to 8', 'Not available', '20 per cent']
        ] },
        { kind: 'source', html: 'Source: Cambridge International AS &amp; A Level Mathematics 9709 syllabus for 2026 and 2027, "Assessment overview", from the <a class="ag-inline-link" href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-mathematics-9709/" rel="noopener" target="_blank">Cambridge International 9709 page</a>. Students and tutors often shorten these to P1, P2, P3, M1, S1 and S2; Cambridge numbers them Paper 1 to Paper 6.' },
        { kind: 'two', mt: true,
          leftH3: 'Pure Mathematics 2 against 3',
          left: [
            'Paper 2 is "Offered only as part of AS Level"; Paper 3 is for "the A Level only". They overlap in topic headings, but Paper 3 goes further, adding vectors, differential equations and complex numbers among its sections.',
            'A student heading for the full A Level therefore usually never sits Paper 2. Its role is the pure-only AS.'
          ],
          rightH3: 'The applied papers',
          right: [
            'Mechanics covers forces and equilibrium, kinematics, momentum, Newton\'s laws, and energy, work and power. Probability &amp; Statistics 1 covers data representation, permutations and combinations, probability, discrete random variables and the normal distribution.',
            'Probability &amp; Statistics 2 begins with the Poisson distribution and ends with sampling, estimation and hypothesis tests. It builds directly on Paper 5.'
          ] }
      ]
    },
    {
      id: 'routes', tint: 'deep', eyebrow: 'Routes',
      h2: 'Which papers do you take for 9709 AS and A Level?',
      lede: 'Pure Mathematics 1 is in every route. The rest is a choice, and two combinations are closed.',
      body: [
        { kind: 'p', html: 'Cambridge describes three routes. Route 1 is AS Level only, sat in one series. Route 2 is a staged A Level: AS in the first year, with the result carried forward, and two more papers in a later series. Route 3 is a linear A Level with all four papers in one series. Within those routes the syllabus allows these combinations and no others.' },
        { kind: 'table', mt: true, caption: 'Permitted 9709 combinations, from the syllabus', head: ['Qualification', 'Papers', 'Content', 'Note'], rows: [
          ['AS Level', '1 and 2', 'Pure only', 'Cannot be carried forward to A Level'],
          ['AS Level', '1 and 4', 'Pure and Mechanics', 'Can be carried forward'],
          ['AS Level', '1 and 5', 'Pure and Probability &amp; Statistics', 'Can be carried forward'],
          ['A Level', '1, 3, 4 and 5', 'Pure, Mechanics and Probability &amp; Statistics', 'The mixed applied route'],
          ['A Level', '1, 3, 5 and 6', 'Pure and Probability &amp; Statistics', 'The statistics-only applied route']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Closed combination one',
          left: [
            'The syllabus is explicit: "it is not possible to combine Paper 4 and Paper 6. This is because Paper 6 depends on prior knowledge of the subject content for Paper 5."',
            'A student who has studied Mechanics and Statistics 2 but not Statistics 1 has no valid A Level route. Paper 5 is "Compulsory for A Level".'
          ],
          rightH3: 'Closed combination two',
          right: [
            'The pure-only AS of Papers 1 and 2 stands alone. Cambridge says: "Candidates who take the Pure Mathematics only route cannot then use their AS result and carry forward to complete the A Level."',
            'A family that might want the full A Level later should choose an AS route with Paper 4 or Paper 5 instead.'
          ] },
        { kind: 'p', mt: true, html: 'Grades follow the route. Cambridge makes AS Level candidates eligible for grades a to e, in lower case, and A Level candidates for A* to E. Cambridge adds that teachers should check recommended combinations if a student may progress to Cambridge International AS &amp; A Level Further Mathematics, 9231.' }
      ]
    },
    {
      id: 'conventions', tint: '', eyebrow: 'Exam conventions',
      h2: 'What are the rules for answers in 9709?',
      lede: 'Three significant figures, no rounding until the end, no unsupported calculator answers, g = 10 in Mechanics, and MF19 on the desk.',
      body: [
        { kind: 'table', caption: 'Standing conventions from the 9709 syllabus', head: ['Convention', 'Cambridge\'s rule', 'What we train'], rows: [
          ['Accuracy', 'Three significant figures, or one decimal place for angles in degrees, unless the question says otherwise', 'Final answers rounded once, at the end'],
          ['Rounding', 'Avoid rounding figures until the final answer, to earn accuracy marks', 'Stored values carried through every part'],
          ['Working', '"no marks will be given for unsupported answers from a calculator"', 'Every calculator result preceded by its method'],
          ['Calculator', 'Scientific only; graphical, symbolic and computer devices not permitted', 'Practice on the student\'s exam calculator'],
          ['Formulae', 'A list of formulae and statistical tables, MF19, is supplied', 'Knowing what MF19 contains, and what it does not'],
          ['Gravity', 'In Mechanics, "use of the approximate numerical value 10 (m s&minus;2) for g is expected"', 'g = 10 throughout Paper 4 practice']
        ] },
        { kind: 'p', mt: true, html: 'The Mechanics paper has two further features that surprise students used to English A levels. "Vector notation will not be used in the question papers", and bodies in realistic contexts "should be treated as particles, so any force acting on them is modelled as acting at a single point." There are no moments questions about beams and rods, because there are no extended bodies. The weight instead falls on forces, friction, momentum, and energy, work and power.' },
        { kind: 'source', html: 'Source: 9709 syllabus for 2026 and 2027, "Details of the assessment" and the Mechanics content notes. The right-hand column is our teaching practice.' }
      ]
    },
    {
      id: 'example', tint: 'tint', eyebrow: 'Worked examples, ours',
      h2: 'Four problems at 9709 level, one per paper type',
      lede: 'Written by us to match the content of Papers 1, 3, 4 and 5.',
      body: [
        { kind: 'p', html: '<strong>Our first problem, Pure Mathematics 1.</strong> Find the set of values of k for which the line y = kx &minus; 1 does not meet the curve y = x<sup>2</sup> + 3.' },
        { kind: 'ol', mt: true, items: [
          'Set the expressions equal: x<sup>2</sup> + 3 = kx &minus; 1, so x<sup>2</sup> &minus; kx + 4 = 0.',
          'The line misses the curve when this quadratic has no real roots, which means its discriminant is negative: k<sup>2</sup> &minus; 16 &lt; 0.',
          'Factorise: (k &minus; 4)(k + 4) &lt; 0, so &minus;4 &lt; k &lt; 4. The answer is a set of values written as an inequality, not a single number.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our second problem, Pure Mathematics 3',
          left: [
            'Solve z<sup>2</sup> &minus; 4z + 13 = 0, and find the modulus and argument of the root with positive imaginary part.',
            'The quadratic formula gives z = (4 &plusmn; &radic;(16 &minus; 52)) &divide; 2 = (4 &plusmn; 6i) &divide; 2 = 2 &plusmn; 3i. For 2 + 3i the modulus is &radic;13, about 3.61, and the argument is tan<sup>&minus;1</sup>(3/2) = 0.983 radians to three significant figures.'
          ],
          rightH3: 'Our third problem, Mechanics',
          right: [
            'A particle is released from rest on a smooth plane inclined at 30&deg; to the horizontal. Using g = 10, find its acceleration and the distance it travels in 2 seconds.',
            'Resolving down the plane, the only force component is mg sin 30&deg;, so a = 10 &times; 0.5 = 5 m s<sup>&minus;2</sup>. Then s = &frac12; &times; 5 &times; 2<sup>2</sup> = 10 m. With g = 10, as the syllabus expects, the numbers stay exact.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Our fourth problem, Probability &amp; Statistics 1.</strong> How many different arrangements are there of the ten letters of the word STATISTICS? The word has three S, three T, two I, one A and one C. The count is 10! &divide; (3! &times; 3! &times; 2!) = 3,628,800 &divide; 72 = 50,400. The division by the factorials of the repeated letters is the whole idea; without it, identical arrangements are counted many times.' },
        { kind: 'table', mt: true, caption: 'Six practice questions we wrote at 9709 level, each answer checked in Python', head: ['#', 'Our question', 'Paper', 'Answer'], rows: [
          ['1', 'Find the coefficient of x<sup>3</sup> in the expansion of (2 &minus; x)<sup>6</sup>.', 'Paper 1', '&minus;160'],
          ['2', 'Find the sum to infinity of the geometric progression 1 + 0.8 + 0.64 + ...', 'Paper 1', '5'],
          ['3', 'Using partial fractions, find the exact value of the integral of 1/(x(x + 1)) from x = 1 to x = 2.', 'Paper 3', 'ln(4/3)'],
          ['4', 'Solve dy/dx = 2xy given that y = 3 when x = 0.', 'Paper 3', 'y = 3e<sup>x<sup>2</sup></sup>'],
          ['5', 'A car of mass 1200 kg has a driving force of 3000 N and resistance of 600 N. Find its acceleration.', 'Paper 4', '2 m s<sup>&minus;2</sup>'],
          ['6', 'X ~ B(10, 0.2). Find P(X &le; 1) to 3 significant figures.', 'Paper 5', '0.376']
        ] },
        { kind: 'source', html: 'We wrote the four worked problems and the practice set on 31 October 2026; Cambridge set none of them. For real papers, start from the specimen materials on the <a class="ag-inline-link" href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-mathematics-9709/" rel="noopener" target="_blank">Cambridge 9709 page</a>; a school or centre can supply past papers.' }
      ]
    },
    {
      id: 'entries', tint: 'deep', eyebrow: 'Entries and timing',
      h2: 'When is 9709 sat, and has the syllabus changed?',
      lede: 'June and November series, a syllabus stable to 2027, and a 2028 to 2030 version with no significant teaching changes.',
      body: [
        { kind: 'table', caption: 'Entry facts from the 9709 syllabus documents', head: ['Question', 'Answer from Cambridge'], rows: [
          ['Series', 'June and November; schools in India can also enter in March'],
          ['Private candidates', '"Private candidates can enter for this syllabus."'],
          ['Retakes', 'AS and A Level can be retaken as many times as a candidate wants'],
          ['Carry forward', 'An AS result can be carried forward to complete the A Level in a later series, under the rules in the Cambridge Handbook'],
          ['Teaching time', 'Designed around about 180 guided learning hours for AS and about 360 for the full A Level'],
          ['Previous study', 'A course equivalent to Cambridge IGCSE (Extended) or Cambridge O Level'],
          ['2026 and 2027 syllabus', 'Version 4, December 2025: weblink, header and typographical corrections only'],
          ['2028, 2029 and 2030 syllabus', '"There are no significant changes which affect teaching."']
        ] },
        { kind: 'p', mt: true, html: 'The November series matters for families outside a school timetable. A student who sits AS in June can complete the A Level the following June, or a candidate retaking one paper can use November instead of waiting a full year. A UK-based private candidate needs a centre that enters Cambridge International A Levels; our page on <a class="ag-inline-link" href="/coding-for-home-educated-children-uk">home-educated learners</a> covers the wider picture.' },
        { kind: 'p', mt: true, html: 'For English boards, see <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths tuition online</a>. For the step after 9709, <a class="ag-inline-link" href="/further-maths-tuition-online">further maths tuition</a> covers Further Mathematics, and families in the Gulf can read <a class="ag-inline-link" href="/a-level-maths-tutor-uae">A level maths tutoring in the UAE</a>. Students also taking computing may want <a class="ag-inline-link" href="/cambridge-a-level-computer-science-online-classes">Cambridge A Level Computer Science</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through 9709',
    lede: 'Pure Mathematics 1 first, because every route needs it; the applied pair once the route is fixed.',
    table: { caption: 'The order we teach 9709 in', head: ['Level', 'Usually', 'Checked by'], rows: [
      ['1. IGCSE Extended secure', 'Before starting', 'Algebra, surds, indices and trigonometry done accurately'],
      ['2. Pure Mathematics 1 and the AS applied paper', 'First year', 'Timed Paper 1 practice and the chosen Paper 4 or Paper 5'],
      ['3. Pure Mathematics 3', 'Second year', 'Further algebra, calculus, vectors, differential equations and complex numbers'],
      ['4. The second applied paper', 'Second year', 'Paper 4 with 5, or Paper 6 after 5, practised to time']
    ] },
    left: { h3: 'Rung two fixes the route', ps: [
      'Choosing Paper 4 or Paper 5 at AS sets what the A Level can contain. We confirm the route with the school or centre first.',
      'Students who enjoy modelling can try simulations through the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Rung four depends on rung two', ps: [
      'Paper 6 only follows Paper 5. A student on Mechanics at AS adds Paper 5, not Paper 6.',
      'Lessons ease off during the June and November series.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Cambridge sixth formers',
    lede: 'Grouped by role. The free first class sets the start.',
    bands: [
      { num: 'I', h3: 'The A Level', sub: 'Any 9709 route', courses: [
        { code: 'UK / CL1 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure 1 to 3, Mechanics and Statistics 1 to 2.' },
        { code: 'UK / CL1 / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'More depth for Papers 5 and 6.' },
        { code: 'UK / CL1 / 03', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'The next step, towards Cambridge 9231.' }
      ] },
      { num: 'II', h3: 'Bridging', sub: 'From IGCSE', courses: [
        { code: 'UK / CL2 / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE mathematics', blurb: 'Extended 0580 and Additional 0606 secured first.' },
        { code: 'UK / CL2 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For a student whose algebra slows Paper 1.' },
        { code: 'UK / CL2 / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB mathematics', blurb: 'For international students comparing IB and A Level.' }
      ] },
      { num: 'III', h3: 'Beyond', sub: 'University and stretch', courses: [
        { code: 'UK / CL3 / 01', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'First-year university maths after 9709.' },
        { code: 'UK / CL3 / 02', slug: 'gre-gmat-quant-maths-prep-course', title: 'GRE and GMAT quant', blurb: 'For older students heading to graduate study.' },
        { code: 'UK / CL3 / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Hard problems beyond any syllabus.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Taught to the route your school chose',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our teachers work from India, on a clock that never changes, and UK students receive every time in UK time; international families can ask for their own time zone too.',
    slots: [
      { time: 'After school', l: 'Typical for sixth formers in the UK.' },
      { time: 'Evening', l: 'Works for many international time zones too.' },
      { time: 'Weekend morning', l: 'Space for a Paper 1 or Paper 3 under time.' }
    ],
    cells: [
      { h3: 'Route first', p: 'We confirm the papers before teaching, so no time goes on an unused paper.' },
      { h3: 'MF19 practice', p: 'Working with the supplied list, and learning what it leaves out.' },
      { h3: 'g = 10', p: 'Mechanics practised with Cambridge\'s value of g and particle models.' },
      { h3: 'Method shown', p: 'No bare calculator answers, because Cambridge gives them no marks.' },
      { h3: 'June or November', p: 'Plans paced to whichever series the school or centre enters.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20 on one route, or one teacher for one student.' }
    ]
  },

  projectsH2: 'Work our students did in class',
  projectsLede: 'From ordinary lessons, not marked for any exam. Many more are in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, shown as they were written.',

  fees: {
    h2: 'Fees for 9709 classes',
    lede: 'Families outside India pay a single monthly fee in US dollars. The first class is free, and billing starts only when a course and weekly time are settled.',
    free: ['A first class on a 9709 paper', 'A view on route and readiness', 'A phone number is enough'],
    group: ['A group of 15 to 20 on one route', 'One teacher across AS and A Level', 'Practice timed to each paper', 'Lighter weeks in June and November'],
    one: ['One teacher for one student', 'Fitted to a staged or linear route', 'Suits a student retaking a single paper']
  },

  faq: {
    eyebrow: 'Questions about 9709',
    h2: 'What students and families ask about 9709 maths',
    items: [
      { q: 'How many papers are in Cambridge A Level Maths 9709?', a: 'Six papers exist. AS Level candidates take two and A Level candidates take four. Pure Mathematics 1 is in every route, and Pure Mathematics 3 is in every A Level route.' },
      { q: 'Which papers make up 9709 A Level?', a: 'Paper 1 and Paper 3, plus either Paper 4 Mechanics with Paper 5 Probability and Statistics 1, or Paper 5 with Paper 6 Probability and Statistics 2.' },
      { q: 'Can I take Paper 4 and Paper 6 for 9709?', a: 'No. The syllabus says Paper 4 and Paper 6 cannot be combined because Paper 6 depends on the content of Paper 5, and Paper 5 is compulsory for A Level.' },
      { q: 'Can a pure-only AS lead to the full A Level?', a: 'No. Cambridge says candidates who take the Pure Mathematics only route of Papers 1 and 2 cannot carry their AS result forward to complete the A Level.' },
      { q: 'How long is 9709 Paper 1?', a: 'Pure Mathematics 1 is 1 hour 50 minutes and 75 marks, with 10 to 12 structured questions. It is 60 per cent of the AS Level and 30 per cent of the A Level.' },
      { q: 'What value of g is used in 9709 Mechanics?', a: 'The syllabus expects g = 10 m s to the minus 2 in Paper 4, where questions are mainly numerical. Bodies are modelled as particles and vector notation is not used.' },
      { q: 'Is a formula sheet given in 9709?', a: 'Yes. A list of formulae and statistical tables, known as MF19, is supplied in the exams. It does not include everything, so students still need to know key results.' },
      { q: 'When are 9709 exams?', a: 'In the June and November series, and also in March for schools in India. Each administrative zone has its own timetable on the Cambridge site.' },
      { q: 'When do your 9709 classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. UK times are always given.' },
      { q: 'Are you part of Cambridge International?', a: 'No. Modern Age Coders has no tie to Cambridge University Press and Assessment. Each practice item here is original, and no Cambridge paper is copied.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for Cambridge and A level students',
    lede: 'Other boards, Further Maths, and computing alongside maths.',
    items: [
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition online', p: 'Our page across the English A level boards.' },
      { href: '/further-maths-tuition-online', label: 'Further maths tuition online', p: 'The next qualification for keen 9709 students.' },
      { href: '/a-level-maths-tutor-uae', label: 'A level maths tutor in the UAE', p: 'For Cambridge A Level families in the Gulf.' },
      { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition online', p: 'The Extended IGCSE that 9709 builds on.' },
      { href: '/cambridge-a-level-computer-science-online-classes', label: 'Cambridge A Level Computer Science', p: 'The Cambridge computing A level many 9709 students take.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The index of our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free 9709 class',
    lede: 'Send us a number and we ring back at a UK time, or your local time abroad, that suits. The first class checks the route and works one of our problems from the paper you find hardest.',
    readFirst: 'Would you rather read first? Every <a class="ag-inline-link" href="/courses">course page</a> lists its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a lesson, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows students\' projects.',
    note: 'The fastest way in is WhatsApp, at no cost on a UK mobile. Expect our reply from India, on +91.',
    formNote: 'Free to book, no commitment; we reply with one time.'
  },

  footer: {
    cols: [
      { h4: 'Cambridge maths', links: [
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/a-level-maths-tutor-uae', label: 'A level maths in the UAE' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'After 9709', links: [
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/cambridge-a-level-computer-science-online-classes', label: 'Cambridge Computer Science' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Cambridge A Level Maths 9709, live in UK hours'
  },

  personalityCss: `
.ag-root.ag-cal .ag-hero h1 { letter-spacing: -0.017em; font-weight: 700; }
.ag-root.ag-cal .ag-capsule { border-left-width: 5px; border-radius: 5px; }
.ag-root.ag-cal .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-cal .ag-table caption { text-align: left; font-weight: 610; }
.ag-root.ag-cal .ag-table th:first-child { width: 20%; }
.ag-root.ag-cal .ag-steps li { padding-bottom: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027 (version 4, December 2025): six components with times, marks, question counts and AS and A Level weights; AS two components graded a to e, A Level four components graded A* to E; Paper 1 in every route and Paper 3 in every A Level route; Paper 4 cannot combine with Paper 6; pure-only AS cannot be carried forward; three routes (AS only, staged, linear); three significant figures, no unsupported calculator answers, no graphical or symbolic calculators; MF19 supplied; g = 10 in Mechanics, particles only, no vector notation; 180 and 360 guided learning hours; June and November series; private candidates can enter; 2028 to 2030 syllabus has no significant changes which affect teaching.',
    localProject: 'Six papers, three routes, and the applied pair is the real choice. The page tabulates the six 9709 components with time, marks, question counts and AS and A Level shares, lists the five permitted combinations and the two closed ones in Cambridge\'s words, sets out the answer conventions including MF19 and g = 10, and explains why Cambridge Mechanics has no moments, then works four of our own problems (a discriminant range -4 < k < 4, complex roots 2 +- 3i, a smooth plane with g = 10, and 50,400 arrangements of STATISTICS) and a six-question practice set written by us.',
    requiredMentions: ['it is not possible to combine Paper 4 and Paper 6', 'cannot then use their AS result and carry forward to complete the A Level', 'Offered only as part of AS Level', 'no marks will be given for unsupported answers from a calculator', 'Vector notation will not be used in the question papers', 'should be treated as particles', 'MF19', 'about 180 guided learning hours', '50,400', 'Candidates take four components for A Level Mathematics.'],
    sources: [
      { claim: 'Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027: components, routes, combinations, grades, conventions, Mechanics notes, entries and teaching time.', url: 'https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf' },
      { claim: 'Syllabus update for 2026 and 2027: versions 2 to 4 changes.', url: 'https://www.cambridgeinternational.org/Images/723728-2026-2027-syllabus-update.pdf' },
      { claim: '9709 syllabus for 2028, 2029 and 2030: no significant changes which affect teaching.', url: 'https://www.cambridgeinternational.org/Images/744634-2028-2030-syllabus.pdf' },
      { claim: 'Cambridge International 9709 qualification page.', url: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-mathematics-9709/' }
    ],
    rejectedClaims: [
      'Grade thresholds for any series, the subject of many 9709 searches: not read at a primary source, not printed.',
      'June or November 2027 dates: set per administrative zone and not read; families are pointed to the Cambridge timetable.',
      'Carry-forward time limits: Cambridge refers to its Handbook for the relevant year, which was not read; the page says so instead of stating a limit.',
      'Third-party past-paper sites named in search suggestions: not linked or named; Cambridge material is linked from Cambridge\'s own page only.',
      'Any Cambridge past paper or specimen question: not reproduced; examples and practice set are ours.',
      'Any grade promise or affiliation with Cambridge International: both declined on the page.'
    ]
  }
};
