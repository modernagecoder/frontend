'use strict';
// Pearson Edexcel A level Further Mathematics 9FM0 help (ag- exam door, UK and US exams cluster Phase 2, row UK037).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/edexcel-a-level-further-maths-9fm0-help/):
//  - Pearson Edexcel Level 3 Advanced GCE in Further Mathematics (9FM0) specification, "Issue 4 – June 2023" (PDF linked
//    from qualifications.pearson.com edexcel-a-levels/mathematics-2017). Verbatim: "consists of four externally-examined
//    papers. Students must take Paper 1 and Paper 2, the two mandatory Core Pure papers, and two optional papers.
//    Students are permitted to take more than the two optional papers if they want to extend their course of study.";
//    "Students must complete all assessments in May/June in any single year."; Paper 1 and Paper 2 Core Pure
//    Mathematics 1 and 2 (9FM0/01, 9FM0/02), each "1 hour and 30 minutes written examination", "25% of the
//    qualification", "75 marks"; content "Proof, Complex numbers, Matrices, Further algebra and functions, Further
//    calculus, Further vectors, Polar coordinates, Hyperbolic functions, Differential equations"; "Paper 1 and Paper 2
//    may contain questions on any topics from the Pure Mathematics content."; optional papers 9FM0/3A to 3D and 4A to 4D,
//    each 1 hour 30 minutes, 25%, 75 marks; "Students take two options from the following eight"; Option 1 papers 3A
//    Further Pure Mathematics 1, 3B Further Statistics 1, 3C Further Mechanics 1, 3D Decision Mathematics 1; Option 2
//    papers 4A Further Pure Mathematics 2, 4B Further Statistics 2, 4C Further Mechanics 2, 4D Decision Mathematics 2;
//    "Students choose a pair of options, either: • any two Option 1 papers, or • a matching pair of Option 1 and Option 2
//    papers"; "This makes a total of ten different option pairs."; "*This paper is also the Paper 4 option 4B paper"
//    (and 4C, 4D for Further Mechanics 1 and Decision Mathematics 1); "Calculators can be used in the assessment."; the
//    booklet "Mathematical Formulae and Statistical Tables" provided; grading "on a six-grade scale from A* to E using the
//    total combined marks (out of 300) for the two compulsory papers and the two optional papers chosen. The different
//    routes within the qualification may have different grade thresholds."; "Where students take more than two optional
//    papers, the combination of papers that result in the best grade will be used. The combination of papers that is
//    graded may not be the combination that gives the highest number of marks."; "The first certification opportunity
//    for this qualification will be 2019."; "There are no prior learning or other requirements for this
//    qualification."; "Students who would benefit most from studying this qualification are likely to have a Level 3
//    GCE in Mathematics qualification."; Appendix 3 calculators: "an iterative function", "the ability to perform
//    calculations with matrices up to at least order 3 × 3", summary statistics and distributions; no symbolic algebra,
//    differentiation or integration; "exam mode" acceptable if it makes the calculator compliant; Appendix 9: entry
//    codes for each optional route are in the UK Information Manual; D1 content: "When using the quick sort algorithm,
//    the pivot should be chosen as the middle item of the list."; FP1 content: "The t-formulae".
// Our own material, labelled on the page: the list of ten option pairs (derived from Pearson's rule: six pairs of Option
// 1 papers plus four matching pairs), a core pure complex-number example (z^2 - 4z + 13 = 0, z = 2 +/- 3i), a matrix
// inverse ([[2,1],[5,3]], det 1, inverse [[3,-1],[-5,2]]), a Further Mechanics 1 collision (3 kg at 4 m/s, 1 kg at rest,
// e = 0.5: 2.5 and 4.5 m/s), an induction outline (sum of r(r+1) = n(n+1)(n+2)/3), and a six-question practice set, all
// checked in Python on 31 October 2026. No Pearson question is reproduced.
// Spine: option routes. 9FM0 is half fixed core pure and half chosen options, ten legal pairs, separate grade
// thresholds by route and best-combination grading for extra options; the school's choice of route shapes the A level.
// Lesson family: choosing and covering an option route.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'EDEXCEL 9FM0', blurb: 'Two core pure papers and a choice of ten option pairs, with grade thresholds that can differ by route. Here is how the routes work.' },
  slug: 'edexcel-a-level-further-maths-9fm0-help',
  code: 'elf',
  accent: '#5C3653',
  accentRationale: 'Edexcel A level Further Maths 9FM0: a deep plum #5C3653 from the cluster allocation, 9.40:1 on #FBF8F2, darker and more violet than the burnt umber of Edexcel 9MA0 so the two Pearson maths pages stay apart',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Edexcel A level Further Maths 9FM0 help',
  title: 'Edexcel A Level Further Maths 9FM0 Help: Option Routes',
  description: 'Edexcel A level Further Maths 9FM0 help: the two Core Pure papers, all ten option pairs, how extra options are graded, the calculator rules, and live online classes.',
  ogDescription: 'Pearson Edexcel A level Further Mathematics 9FM0 from the specification: Core Pure 1 and 2, the eight optional papers, the ten legal option pairs and how grades are worked out by route.',
  twitterDescription: 'Edexcel Further Maths 9FM0: four 90-minute papers, two compulsory and two chosen from eight. Which pairs are allowed, and why route matters.',
  pageName: 'Edexcel A Level Further Maths 9FM0 Help',
  webPageDescription: 'Live online teaching for Pearson Edexcel A level Further Mathematics 9FM0 students in Years 12 and 13, written from the Pearson specification.',
  courseDescription: 'Live online classes for Edexcel A level Further Mathematics 9FM0: Core Pure 1 and 2, with Further Pure, Further Statistics, Further Mechanics or Decision options taught to the school\'s route or to cover an option it does not teach.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Edexcel A level Further Maths 9FM0',
  navLinks: [
    { href: '#structure', label: 'Four papers' },
    { href: '#routes', label: 'Ten routes' },
    { href: '#grading', label: 'Grading' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Pearson Edexcel &middot; A level Further Mathematics 9FM0 &middot; Years 12 and 13',
  h1: 'Edexcel A level Further Maths 9FM0 help',
  lede: 'Pearson Edexcel A level Further Mathematics, code 9FM0, is four papers of 90 minutes each. Two are fixed: Core Pure Mathematics 1 and 2. The other two are chosen from eight optional papers, and Pearson allows ten different pairings. The route a school picks decides half of what a student studies, and families often only discover it when a student wants an option the school does not teach. This page lays out the papers, all ten routes, the grading rules and how we teach 9FM0.',
  secondaryCta: { href: '#routes', label: 'See the ten routes' },
  wa: 'Hello Modern Age Coders, I would like a free first class for Edexcel A level Further Maths 9FM0.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Not connected with Pearson',
  spec: [
    ['Qualification', 'Pearson Edexcel A level Further Mathematics'],
    ['Code', '9FM0'],
    ['Compulsory', 'Core Pure 1 and Core Pure 2'],
    ['Options', 'Two papers from eight'],
    ['Each paper', '90 minutes, 75 marks, 25%'],
    ['Total', '300 marks'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'What 9FM0 is',
  capsule: 'Pearson Edexcel A level Further Mathematics (9FM0) is a linear A level of four 90-minute papers worth 75 marks each: Core Pure Mathematics 1 and 2, which every student sits, plus two optional papers chosen from Further Pure, Further Statistics, Further Mechanics and Decision Mathematics, in ten permitted pairs. Grades A* to E come from the 300-mark total. Modern Age Coders teaches 9FM0 live online in its A Level Further Maths course; students join a 15 to 20 strong batch or learn 1-on-1, after an opening lesson at no cost.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Courses a 9FM0 student tends to take',
    lede: 'The Further Maths course carries Core Pure and every option. The A level Maths course runs alongside it; statistics adds depth for the FS routes.',
    items: [
      { course: 'a-level-further-maths-course', code: 'EF / 01', title: 'A Level Further Maths', note: 'Core Pure 1 and 2 plus whichever pair of options the student is entered for.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'EF / 02', title: 'A Level Maths', note: 'The 9MA0 content that Further Maths builds on.' },
      { course: 'statistics-probability-maths-course', code: 'EF / 03', title: 'Statistics and Probability', note: 'Background for Further Statistics 1 and 2.' }
    ]
  },

  sections: [
    {
      id: 'structure', tint: 'tint', eyebrow: 'Four papers',
      h2: 'What are the four Edexcel Further Maths papers?',
      lede: 'Four, all 1 hour 30 minutes and 75 marks. Papers 1 and 2 are compulsory Core Pure; Papers 3 and 4 are the options.',
      body: [
        { kind: 'p', html: 'The specification states that 9FM0 "consists of four externally-examined papers. Students must take Paper 1 and Paper 2, the two mandatory Core Pure papers, and two optional papers." It also says "Students must complete all assessments in May/June in any single year", so all four papers are sat in the same summer. "Calculators can be used in the assessment" on every paper, and the booklet Mathematical Formulae and Statistical Tables is provided.' },
        { kind: 'table', caption: 'Pearson Edexcel A level Further Mathematics 9FM0: the papers', head: ['Paper', 'Title', 'Time', 'Marks', 'Weight'], rows: [
          ['9FM0/01', 'Core Pure Mathematics 1', '1 hour 30 minutes', '75', '25%'],
          ['9FM0/02', 'Core Pure Mathematics 2', '1 hour 30 minutes', '75', '25%'],
          ['9FM0/3A to 3D', 'Option 1: Further Pure 1, Further Statistics 1, Further Mechanics 1 or Decision Mathematics 1', '1 hour 30 minutes', '75', '25%'],
          ['9FM0/4A to 4D', 'Option 2: Further Pure 2, Further Statistics 2, Further Mechanics 2 or Decision Mathematics 2', '1 hour 30 minutes', '75', '25%']
        ] },
        { kind: 'source', html: 'Source: Pearson Edexcel Level 3 Advanced GCE in Further Mathematics (9FM0) specification, Issue 4, June 2023, Qualification at a glance, from the <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/mathematics-2017.html" rel="noopener" target="_blank">Pearson mathematics 2017 page</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'Core Pure is not split by topic',
          left: [
            'The Core Pure content is proof, complex numbers, matrices, further algebra and functions, further calculus, further vectors, polar coordinates, hyperbolic functions and differential equations. Pearson says "Paper 1 and Paper 2 may contain questions on any topics from the Pure Mathematics content."',
            'So there is no "Paper 1 topics" list to revise from. Either paper can ask anything in Core Pure.'
          ],
          rightH3: 'Options carry half the marks',
          right: [
            'Papers 3 and 4 together are 150 of the 300 marks. Which two a student sits is therefore not a detail: it decides half the A level.',
            'The Department for Education\'s subject content sets this shape for every board, with a prescribed core of about half and options for the rest. Edexcel delivers the options as separate papers.'
          ] }
      ]
    },
    {
      id: 'routes', tint: 'deep', eyebrow: 'Ten routes',
      h2: 'Which Edexcel Further Maths options can be taken together?',
      lede: 'Either any two Option 1 papers, or an Option 1 paper with its matching Option 2 paper. Pearson counts ten pairs in all.',
      body: [
        { kind: 'p', html: 'Pearson\'s rule is short: "Students choose a pair of options, either: any two Option 1 papers, or a matching pair of Option 1 and Option 2 papers. This makes a total of ten different option pairs." There are four Option 1 papers, so six ways to pick two of them, and four matching pairs, which gives the ten. Further Statistics 1, Further Mechanics 1 and Decision Mathematics 1 can each be sat as Paper 3 or as Paper 4, which Pearson explains with the note that, for example, Further Statistics 1 "is also the Paper 4 option 4B paper".' },
        { kind: 'table', mt: true, caption: 'The ten 9FM0 option pairs, listed by us from Pearson\'s rule', head: ['#', 'Pair', 'Kind', 'What it suits'], rows: [
          ['1', 'Further Pure 1 + Further Pure 2', 'Matching pair', 'Students heading for pure maths or physics'],
          ['2', 'Further Statistics 1 + Further Statistics 2', 'Matching pair', 'Deep statistics, economics, data degrees'],
          ['3', 'Further Mechanics 1 + Further Mechanics 2', 'Matching pair', 'Engineering and physics'],
          ['4', 'Decision Mathematics 1 + Decision Mathematics 2', 'Matching pair', 'Computing and operational research interests'],
          ['5', 'Further Pure 1 + Further Statistics 1', 'Two Option 1 papers', 'A broad pure and data mix'],
          ['6', 'Further Pure 1 + Further Mechanics 1', 'Two Option 1 papers', 'A broad pure and physics mix'],
          ['7', 'Further Pure 1 + Decision Mathematics 1', 'Two Option 1 papers', 'Pure with algorithms and networks'],
          ['8', 'Further Statistics 1 + Further Mechanics 1', 'Two Option 1 papers', 'Two applied areas at first level'],
          ['9', 'Further Statistics 1 + Decision Mathematics 1', 'Two Option 1 papers', 'Applied work without mechanics'],
          ['10', 'Further Mechanics 1 + Decision Mathematics 1', 'Two Option 1 papers', 'Applied work without statistics']
        ] },
        { kind: 'source', html: 'Pairs listed by us from the rule in the 9FM0 specification, Issue 4, page 5 and Appendix 9. The "What it suits" column is our opinion, not Pearson\'s. Entry codes for each route are in Pearson\'s UK Information Manual.' },
        { kind: 'ol', mt: true, items: [
          'Ask the school which route it teaches. Many teach one route for the whole class.',
          'Check the route against the degree the student is aiming for. Engineering applicants often want mechanics; computing applicants often like decision mathematics.',
          'If the student wants a different option, ask whether the school can enter them for it while they are taught elsewhere. Entry is by route code, so the exams officer must know early.',
          'Plan teaching time: each option paper is a quarter of the A level, the same as a Core Pure paper.',
          'Confirm the final entry, 9FM0 plus the route code, before the entry deadline.'
        ] }
      ]
    },
    {
      id: 'grading', tint: '', eyebrow: 'Grading',
      h2: 'How is Edexcel A level Further Maths graded, and what if you take extra options?',
      lede: 'On the 300-mark total of four papers, with thresholds that can differ by route. If a student sits more than two options, Pearson grades the combination giving the highest grade.',
      body: [
        { kind: 'p', html: 'Pearson writes that 9FM0 "will be graded and certificated on a six-grade scale from A* to E using the total combined marks (out of 300) for the two compulsory papers and the two optional papers chosen. The different routes within the qualification may have different grade thresholds." A student below E receives U.' },
        { kind: 'p', mt: true, html: 'Taking more than two options is allowed: "Students are permitted to take more than the two optional papers if they want to extend their course of study." Then "the combination of papers that result in the best grade will be used. The combination of papers that is graded may not be the combination that gives the highest number of marks." That last sentence surprises people, but it follows from the previous one: if routes have different thresholds, a lower raw total on one route can still clear a higher grade than a larger total on another.' },
        { kind: 'table', mt: true, caption: 'Other 9FM0 rules from the specification', head: ['Rule', 'Pearson\'s wording or a close restatement'], rows: [
          ['Prior learning', '"There are no prior learning or other requirements for this qualification." Pearson adds that students who would benefit most are likely to have a Level 3 GCE in Mathematics'],
          ['Timing', 'All assessments in May and June of a single year'],
          ['First certification', '2019'],
          ['Formulae', 'The booklet Mathematical Formulae and Statistical Tables is provided; some formulae must be recalled'],
          ['Calculator', 'Must have an iterative function, matrix calculations up to at least 3 &times; 3, and statistics; no symbolic algebra, differentiation or integration; an exam mode is acceptable if it makes the calculator compliant']
        ] },
        { kind: 'p', mt: true, html: 'The matrix requirement is particular to Further Maths. A calculator that handles 3 &times; 3 determinants and inverses saves time on Core Pure, but, as on every A level, working that shows the method still earns the method marks.' }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples, ours',
      h2: 'Core Pure and option examples we wrote',
      lede: 'Two short Core Pure problems, an induction outline and a Further Mechanics 1 collision. None is a Pearson question.',
      body: [
        { kind: 'p', html: '<strong>Our Core Pure problem on complex numbers.</strong> Solve z<sup>2</sup> &minus; 4z + 13 = 0 and describe the roots on an Argand diagram.' },
        { kind: 'two', mt: true,
          leftH3: 'Solving',
          left: [
            'The discriminant is 16 &minus; 52 = &minus;36, so z = (4 &plusmn; 6i) &divide; 2 = 2 &plusmn; 3i.',
            'Real-coefficient quadratics always give conjugate pairs, which is a quick check.'
          ],
          rightH3: 'Interpreting',
          right: [
            'The roots are reflections of each other in the real axis, at (2, 3) and (2, &minus;3). Each has modulus &radic;13.',
            'Their sum 4 and product 13 match the coefficients, a second check worth one line.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Our Core Pure problem on matrices.</strong> For M = (2 1; 5 3), the determinant is 2 &times; 3 &minus; 1 &times; 5 = 1, so M is invertible and M<sup>&minus;1</sup> = (3 &minus;1; &minus;5 2). Since det M = 1, M preserves area: a unit square maps to a parallelogram of area 1.' },
        { kind: 'p', mt: true, html: '<strong>Our induction outline.</strong> Prove that the sum of r(r + 1) for r = 1 to n equals n(n + 1)(n + 2)/3. Base case n = 1: both sides are 2. Assume it for n = k. Adding (k + 1)(k + 2) gives k(k + 1)(k + 2)/3 + (k + 1)(k + 2) = (k + 1)(k + 2)(k + 3)/3, which is the formula for n = k + 1. Conclude in a sentence that the result holds for all positive integers n. Checked by us for n = 10: both sides are 440.' },
        { kind: 'p', mt: true, html: '<strong>Our Further Mechanics 1 problem.</strong> A 3 kg sphere moving at 4 m s<sup>&minus;1</sup> hits a 1 kg sphere at rest, directly, with coefficient of restitution e = 0.5. Momentum: 3 &times; 4 = 3v<sub>1</sub> + v<sub>2</sub>. Restitution: v<sub>2</sub> &minus; v<sub>1</sub> = 0.5 &times; 4 = 2. Solving, v<sub>1</sub> = 2.5 m s<sup>&minus;1</sup> and v<sub>2</sub> = 4.5 m s<sup>&minus;1</sup>, both in the original direction.' },
        { kind: 'table', mt: true, caption: 'Six practice questions we wrote for 9FM0 students (answers checked in Python)', head: ['#', 'Our question', 'Paper', 'Answer'], rows: [
          ['1', 'Find cosh(ln 3) exactly.', 'Core Pure', '5/3'],
          ['2', 'Find the Maclaurin series of e<sup>x</sup> sin x up to the x<sup>3</sup> term.', 'Core Pure', 'x + x<sup>2</sup> + x<sup>3</sup>/3'],
          ['3', 'The region under y = &radic;x from x = 0 to 4 is rotated fully about the x-axis. Find the volume.', 'Core Pure', '8&pi;'],
          ['4', 'Find the area enclosed by the polar curve r = 2 cos &theta;.', 'Core Pure', '&pi;'],
          ['5', 'X ~ Po(3). Find P(X = 2).', 'Further Statistics 1', '0.224'],
          ['6', 'Apply one pass of quick sort to 9, 4, 7, 1, 8, choosing the middle item as pivot, as the specification directs.', 'Decision Mathematics 1', 'Pivot 7; list becomes 4, 1, 7, 9, 8']
        ] },
        { kind: 'source', html: 'All examples and practice questions were written by us on 31 October 2026. Pearson publishes past papers, mark schemes and examiners\' reports for 9FM0 on its <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/mathematics-2017.html" rel="noopener" target="_blank">qualification page</a>.' }
      ]
    },
    {
      id: 'gap', tint: 'deep', eyebrow: 'When the school\'s route does not fit',
      h2: 'What if my school does not teach the 9FM0 option I need?',
      lede: 'Talk to the exams officer first; an option is entered as part of a route, so the entry has to be planned. Teaching the option can then happen outside school.',
      body: [
        { kind: 'p', html: 'Because Pearson enters students for 9FM0 "along with the entry code for the optional route that they wish to take", a student who wants, say, Further Mechanics while the class sits Decision Mathematics needs a different route code, not just extra lessons. Some schools can accommodate that; others cannot. Asking in Year 12 gives everyone time.' },
        { kind: 'p', mt: true, html: 'Where a school agrees, we teach the missing option as a 1-on-1 course alongside the school\'s Core Pure lessons, and we teach Core Pure too for students whose school does not offer Further Maths at all. We never enter students ourselves, and we cannot promise a school will change an entry. Our <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths tuition page</a> covers the subject more broadly.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'How Core Pure and the options fit across two years',
    lede: 'Core Pure grows alongside A level Maths; options are added once the matching A level Maths content is in place.',
    table: { caption: 'Stages through 9FM0', head: ['Stage', 'Usually', 'Sign that it is done'], rows: [
      ['1. Core Pure first half', 'Year 12', 'Complex numbers, matrices, proof by induction and roots of polynomials fluent'],
      ['2. First options', 'Late Year 12', 'Option 1 papers started once the related A level Maths topics are secure'],
      ['3. Core Pure second half', 'Year 13', 'Hyperbolic functions, polar coordinates, further calculus and differential equations'],
      ['4. Four-paper practice', 'Final two terms', 'Timed 90-minute papers in the student\'s actual route']
    ] },
    left: { h3: 'Why options wait a little', ps: [
      'Further Statistics leans on A level statistics, and Further Mechanics on A level mechanics.',
      'Starting them too early means teaching two levels at once.'
    ] },
    right: { h3: 'Why practice uses the real route', ps: [
      'A student sitting FS1 and FM1 practises those papers, not FP1.',
      'Ninety minutes is short; familiarity with the actual paper matters.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses near Edexcel Further Maths',
    lede: 'Arranged by role. The free class helps us recommend one.',
    bands: [
      { num: 'I', h3: 'The two maths A levels', sub: 'Years 12 and 13', courses: [
        { code: 'UK / EF1 / 01', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'Core Pure and every 9FM0 option.' },
        { code: 'UK / EF1 / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'The 9MA0 foundation under Further Maths.' },
        { code: 'UK / EF1 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For FS1 and FS2 routes.' }
      ] },
      { num: 'II', h3: 'Supporting skills', sub: 'Algebra and computation', courses: [
        { code: 'UK / EF2 / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'When manipulation is the bottleneck.' },
        { code: 'UK / EF2 / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Algorithms from Decision Mathematics run in Python.' },
        { code: 'UK / EF2 / 03', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'For a younger student preparing early.' }
      ] },
      { num: 'III', h3: 'Beyond A level', sub: 'Admissions and university', courses: [
        { code: 'UK / EF3 / 01', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP', blurb: 'Admissions tests many Further Maths students sit.' },
        { code: 'UK / EF3 / 02', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'Linear algebra and analysis ahead of university.' },
        { code: 'UK / EF3 / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Olympiad problem solving for strong students.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Taught to the student\'s actual route',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All lessons are set in UK time; our teachers are based in India, and we keep the UK slot the same when the clocks change.',
    slots: [
      { time: 'After school', l: 'The common slot for Core Pure groups.' },
      { time: 'Evening', l: 'Often used for 1-on-1 option teaching.' },
      { time: 'Weekend morning', l: 'Fits two 90-minute papers back to back.' }
    ],
    cells: [
      { h3: 'Route first', p: 'We confirm the student\'s option pair before planning.' },
      { h3: 'Core Pure as one', p: 'Both papers revised as a single body of content.' },
      { h3: 'Missing options', p: '1-on-1 teaching for an option the school does not offer.' },
      { h3: 'Matrix calculator', p: '3 by 3 work practised on the student\'s own model.' },
      { h3: 'Proof written out', p: 'Induction and conclusions in full sentences.' },
      { h3: 'Batch or 1-on-1', p: 'A group of 15 to 20, or individual lessons.' }
    ]
  },

  projectsH2: 'Projects made in our classes',
  projectsLede: 'Class work for practice, not exam submissions. More sit in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, unedited.',

  fees: {
    h2: 'Fees for Edexcel 9FM0 classes',
    lede: 'UK families pay a single monthly fee in US dollars. A first lesson costs nothing, and we only take payment once a course and a regular slot are settled.',
    free: ['A free 9FM0 lesson in Core Pure or an option', 'A check of the student\'s route', 'Booked by phone or WhatsApp'],
    group: ['A batch of 15 to 20 Further Maths students', 'Core Pure across both years', 'Common option routes taught in groups', 'Quieter weeks in exam season'],
    one: ['One teacher, one student', 'Ideal for an option the school does not teach', 'Planned around the 9MA0 timetable']
  },

  faq: {
    eyebrow: '9FM0 questions',
    h2: 'What students ask about Edexcel A level Further Maths',
    items: [
      { q: 'How many exams are in Edexcel A level Further Maths?', a: 'Four, each 1 hour 30 minutes and 75 marks. Core Pure Mathematics 1 and 2 are compulsory, and the other two are optional papers.' },
      { q: 'What are the Edexcel Further Maths options?', a: 'Further Pure 1 and 2, Further Statistics 1 and 2, Further Mechanics 1 and 2, and Decision Mathematics 1 and 2. Students take two of the eight, in an allowed pair.' },
      { q: 'Can I take Further Pure 2 with Further Statistics 1?', a: 'No. Pearson allows any two Option 1 papers or a matching Option 1 and Option 2 pair. Further Pure 2 only pairs with Further Pure 1.' },
      { q: 'How many option routes are there in 9FM0?', a: 'Ten. Six come from choosing two of the four Option 1 papers, and four are the matching pairs, such as Further Mechanics 1 with Further Mechanics 2.' },
      { q: 'Are the grade boundaries the same for every 9FM0 route?', a: 'Not necessarily. Pearson says the different routes may have different grade thresholds, so compare a mark with the boundaries for the route actually sat.' },
      { q: 'What happens if I sit three option papers?', a: 'Pearson grades whichever combination produces the highest grade. That may not be the combination with the highest raw total, because thresholds can differ between routes.' },
      { q: 'Do I need A level Maths to take Edexcel Further Maths?', a: 'Pearson sets no formal prior learning requirement, but says students who would benefit most are likely to have a Level 3 GCE in Mathematics. In practice it is taken alongside or after A level Maths.' },
      { q: 'What calculator do I need for 9FM0?', a: 'One with an iterative function, matrix calculations up to at least 3 by 3, and statistical distributions, without symbolic algebra or calculus. An exam mode is fine if it makes the calculator compliant.' },
      { q: 'When are your 9FM0 classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are in UK time.' },
      { q: 'Are you linked with Pearson or Edexcel?', a: 'No. Modern Age Coders is independent and has no connection with Pearson. Every example and practice question here was written by us.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for Further Maths students',
    lede: 'The A level Maths companion, costs and the bigger question.',
    items: [
      { href: '/edexcel-a-level-maths-9ma0-help', label: 'Edexcel A level Maths 9MA0 help', p: 'The Pearson A level Maths that 9FM0 builds on.' },
      { href: '/further-maths-tuition-online', label: 'Further maths tuition online', p: 'Our general Further Maths page.' },
      { href: '/is-a-level-further-maths-worth-it', label: 'Is A level Further Maths worth it?', p: 'A plain look at the commitment.' },
      { href: '/further-maths-tutor-cost-uk', label: 'Further maths tutor cost in the UK', p: 'How families plan for tuition.' },
      { href: '/tmua-preparation', label: 'TMUA preparation', p: 'An admissions test many Further Maths students take.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free 9FM0 class',
    lede: 'Send a number and we will ring at a UK time that works. We begin by confirming the student\'s option route, then teach one Core Pure topic so you can judge the lesson.',
    readFirst: 'Want to look first? <a class="ag-inline-link" href="/courses">Our courses</a> each show a syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the method, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows projects.',
    note: 'A WhatsApp message gets the swiftest response and costs nothing from a UK phone. We answer from India, so the number starts +91.',
    formNote: 'Asking is free and binds you to nothing; we reply once with a time.'
  },

  footer: {
    cols: [
      { h4: 'Further Maths', links: [
        { href: '/further-maths-tuition-online', label: 'Further maths tuition' },
        { href: '/further-maths-tutor-cost-uk', label: 'Further maths costs' },
        { href: '/is-a-level-further-maths-worth-it', label: 'Is it worth it?' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'Edexcel and more', links: [
        { href: '/edexcel-a-level-maths-9ma0-help', label: 'Edexcel A level Maths 9MA0' },
        { href: '/tmua-preparation', label: 'TMUA preparation' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Edexcel 9FM0 lessons, booked on UK time'
  },

  personalityCss: `
.ag-root.ag-elf .ag-hero h1 { letter-spacing: -0.019em; font-weight: 715; }
.ag-root.ag-elf .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-elf .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-elf .ag-table caption { text-align: left; font-weight: 640; }
.ag-root.ag-elf .ag-table th:first-child { width: 8%; }
.ag-root.ag-elf .ag-steps li { padding-bottom: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Pearson Edexcel Level 3 Advanced GCE in Further Mathematics (9FM0) specification, Issue 4, June 2023: four papers of 1 hour 30 minutes, 75 marks, 25% each; Papers 1 and 2 Core Pure (any Core Pure topic on either); two optional papers from 3A to 3D and 4A to 4D; any two Option 1 papers or a matching pair, ten option pairs; FS1, FM1 and D1 also serve as Paper 4; more options allowed, highest-grade combination graded; graded A* to E on 300 marks, thresholds may differ by route; all assessments in May and June of one year; first certification 2019; no prior learning requirement; calculator with iterative function, 3 by 3 matrices and statistics, no symbolic algebra or calculus; entry by route code.',
    localProject: 'Option routes. The page tabulates the four 9FM0 paper slots, lists all ten option pairs we derived from Pearson\'s rule with our view of what each suits, gives a five-step plan for choosing and entering a route, explains route-specific thresholds and highest-grade combination grading, then works our own Core Pure complex-number and matrix examples, an induction outline, a Further Mechanics 1 collision (2.5 and 4.5 m/s) and a six-question practice set.',
    requiredMentions: ['This makes a total of ten different option pairs.', 'The different routes within the qualification may have different grade thresholds.', 'may not be the combination that gives the highest number of marks', 'All assessments in May and June of a single year', 'Paper 1 and Paper 2 may contain questions on any topics from the Pure Mathematics content.', 'is also the Paper 4 option 4B paper', 'matrix calculations up to at least 3 &times; 3', 'Further Mechanics 1 + Decision Mathematics 1', 'z = (4 &plusmn; 6i) &divide; 2 = 2 &plusmn; 3i', 'v<sub>1</sub> = 2.5 m s<sup>&minus;1</sup> and v<sub>2</sub> = 4.5 m s<sup>&minus;1</sup>'],
    sources: [
      { claim: 'Pearson Edexcel Level 3 Advanced GCE in Further Mathematics (9FM0) specification, Issue 4: papers, options, pairing rule, grading, extra options, timing, prior learning, calculators and entry codes.', url: 'https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-further-mathematics-specification.pdf' },
      { claim: 'Pearson Edexcel A levels Mathematics 2017 page linking the 9FM0 specification, past papers and grade boundaries.', url: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/mathematics-2017.html' },
      { claim: 'Department for Education, Further mathematics AS and A level content (April 2016): prescribed core of about 50 per cent, options for the rest.', url: 'https://assets.publishing.service.gov.uk/media/5a8185ebe5274a2e8ab54725/GCE_AS_and_A_level_subject_content_for_further_mathematics_with_appendices.pdf' }
    ],
    rejectedClaims: [
      'Grade boundaries for any 9FM0 route: Pearson publishes them separately; they were not read and none is printed.',
      'Which route is most popular nationally: no primary statistic read; not claimed.',
      'Summer 2027 exam dates: the Pearson timetable was not read.',
      'That any route is easier: not claimed; the "What it suits" column is labelled as our opinion about interests, not difficulty.',
      'Any Pearson past paper question: not reproduced.',
      'That a school will change a student\'s route, or any grade promise: both declined; we do not enter students.'
    ]
  }
};
