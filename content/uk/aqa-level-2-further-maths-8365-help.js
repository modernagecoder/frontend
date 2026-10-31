'use strict';
// AQA Level 2 Certificate in Further Maths 8365 help (ag- maths door, England; UK and US exams cluster, row UK024).
// Sources, read raw on 31 October 2026 (curl -sL; PDFs through macOS PDFKit; raw copies in
// keyword-research-2026-09/uk-us-gap/src/aqa-level-2-further-maths-8365-help/):
//  - AQA Level 2 Certificate in Further Mathematics (8365) specification, "Version 1.4 November 2020" (the file linked
//    from aqa.org.uk/subjects/mathematics/aqa-certificate/mathematics-8365/specification on 31 October 2026). Verbatim:
//    "This qualification fills the gap for high achieving students by assessing their higher order mathematical
//    skills, particularly in algebraic reasoning, in greater depth"; "intended as an additional qualification to the
//    GCSE Mathematics, rather than as a replacement"; "an untiered Level 2 linear qualification for learners who:
//    either already have, or are expected to achieve, grades 7, 8 and 9 in GCSE mathematics; are likely to progress
//    to A-Level study in Mathematics and possibly Further Mathematics"; "Students take two question papers. Both
//    question papers must be taken in the same series."; each paper "written exam: 1 hour 45 minutes", "80 marks",
//    "50%"; "Guided Learning Hours: 120"; "either in parallel with GCSE Mathematics" or "after GCSE Mathematics"; six
//    areas "Number", "Algebra", "Coordinate Geometry (2 dimensions only)", "Calculus", "Matrix Transformations",
//    "Geometry"; "All calculations will be restricted to 2 × 2 or 2 × 1 matrices"; transformations "restricted to
//    rotations of 90o, 180o or 270o about the origin, reflections in the lines x = 0, y = 0, y = x, y = –x and
//    enlargements centred on the origin"; "Differentiation of kxn where n is an integer"; Pythagorean triples "3, 4,
//    5; 5,12,13; 8,15,17; 7, 24, 25"; AO1 "56 – 64", AO2 "36 – 44"; "graded on a grade scale of 5 to 9. A student who
//    fails to achieve grade 5 will be awarded an allowed grade 4."; "Hence, a strong performance in one paper can
//    compensate for a weaker performance in the other."; "The Ofqual qualification accreditation number (QAN) is
//    603/3104/5."; resources "from the legacy specification 8360"; "You must be based in the UK."
//  - AQA 8365 key dates page: June 2027 series, 8365/1 on 11 Jun, 8365/2 on 15 Jun, "Start time: PM | Duration: 1h
//    45m". No November series listed.
//  - AQA Reports on the examination, June 2025. 8365/1: "Overall students performed better on this year's paper than
//    they did in 2024."; struggled "Product rule for counting", "solving a cubic equation", "deducing the value of a
//    function", "showing that a function is increasing"; Q9 "This topic continues to be challenging for many
//    students."; Q23 "Students who used the quadratic formula or completing the square on the quadratic inequality
//    rarely managed to get to the answer and on this paper most of the quadratics will factorise into double
//    brackets."; "All students need to take extra care with their working when asked for a proof or to 'show that'
//    something is true." 8365/2: "The overall number of non-attempts was the lowest there has been on this paper.";
//    struggled "using a second derivative to work out the nature of a turning point", "questions involving
//    trigonometry of angles that are not acute"; "Students should make their fraction answers clear, especially when
//    the denominator is algebraic."; Q21(b) "This question had the most non-attempts on the paper."
// Our own: the "bridge" framing, the four worked examples, the practice set and the Year 10 to 11 plan.
// Spine: a bridge, not a replacement. 8365 sits beside GCSE Maths for students heading to grades 7 to 9 and A level,
// introduces calculus and matrices early, and in 2025 its marks were lost to algebra and to "show that" working.
// Lesson family: a top-set qualification door, distinct from the A level further maths door.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'L2 FURTHER MATHS 8365', blurb: 'Two 80-mark papers beside GCSE Maths, with calculus and matrices. In 2025 the marks went on algebra and show-that working.' },
  slug: 'aqa-level-2-further-maths-8365-help',
  code: 'alf',
  accent: '#215A36',
  accentRationale: 'AQA Level 2 Further Maths 8365: a deep forest green (#215A36, 7.68:1 on #FBF8F2 and 6.61:1 on the deepest paper tint), yellower than the grade 9 teal-green so the two top-set pages read apart',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'AQA Level 2 Further Maths 8365 help',
  title: 'AQA Level 2 Further Maths 8365 Help | Calculus, Matrices, 2027',
  description: 'AQA Level 2 Further Maths 8365 help: two 80-mark papers, grades 5 to 9, the June 2027 dates, calculus and matrices, and what the 2025 examiners reported.',
  ogDescription: 'AQA\'s Level 2 Certificate in Further Mathematics sits beside GCSE Maths for top-set students. The papers, the content and how to prepare.',
  twitterDescription: 'AQA Level 2 Further Maths 8365: who it is for, the two papers, the June 2027 dates, the content and the 2025 examiner reports.',
  pageName: 'AQA Level 2 Further Maths 8365 Help',
  webPageDescription: 'Live online help for the AQA Level 2 Certificate in Further Mathematics 8365, built from AQA\'s version 1.4 specification, its key dates and the June 2025 reports on the examination.',
  courseDescription: 'Live online teaching for AQA Level 2 Further Maths 8365: algebra and functions, coordinate geometry, introductory calculus, matrix transformations and trigonometry for any angle.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'AQA Level 2 Further Maths 8365',
  navLinks: [
    { href: '#who', label: 'Who it is for' },
    { href: '#exam', label: 'The exam' },
    { href: '#content', label: 'Content' },
    { href: '#reports', label: '2025 reports' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; AQA Level 2 Certificate in Further Mathematics 8365 &middot; Years 10 and 11',
  h1: 'AQA Level 2 Further Maths 8365 help',
  lede: 'AQA\'s Level 2 Certificate in Further Mathematics is a small qualification with an outsized effect. It is taken alongside GCSE Maths by students heading for the top grades, and it introduces calculus, matrices and trigonometry for any angle a year or two before A level. Where a school can give it only a lesson or two a week, a student meeting differentiation for the first time in Year 11 may need more time with it than the timetable has room for. This page sets out who AQA designed 8365 for, how the two papers and the grades work, what the six content areas contain, and what AQA\'s examiners said about the June 2025 papers. It ends with four worked examples of our own and a plan for the run to June 2027.',
  secondaryCta: { href: '#content', label: 'What the content covers' },
  wa: 'Hello Modern Age Coders, I would like a free first class for AQA Level 2 Further Maths 8365.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; From AQA\'s 8365 specification, key dates and June 2025 reports',
  spec: [
    ['Qualification', 'AQA Level 2 Certificate in Further Mathematics 8365'],
    ['Papers', 'Two, 1 hour 45 minutes, 80 marks each'],
    ['Paper 1', 'Non-calculator'],
    ['Grades', '5 to 9, with an allowed grade 4'],
    ['June 2027', '11 and 15 June, afternoons'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'The AQA Level 2 Certificate in Further Mathematics (8365) is an untiered qualification for students in England who have, or are expected to get, grades 7, 8 or 9 in GCSE Maths, taken alongside or after the GCSE rather than instead of it. It is assessed by two papers of 1 hour 45 minutes and 80 marks, one without a calculator, and graded 5 to 9 with an allowed grade 4. Modern Age Coders teaches 8365 students live online, 1-on-1 or in a group of 15 to 20, building on the Higher content of its GCSE Maths: Foundation and Higher course, with its IGCSE and Additional Maths course covering much of the calculus and further algebra. AQA lists the June 2027 papers on 11 and 15 June 2027. We are not connected with AQA.',

  picks: {
    eyebrow: 'Courses',
    h2: 'Three courses for an 8365 student',
    lede: 'The GCSE course secures the Higher algebra 8365 is built on. The Additional Maths course is the closest match to the new 8365 topics, and A level is where they lead.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'LF / 01', title: 'GCSE Maths: Foundation and Higher', note: 'Higher GCSE algebra and geometry made secure, which the 2025 reports show is where most 8365 marks go.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'LF / 02', title: 'A Level Maths', note: 'The course 8365 was designed to lead into, for students who want to start early.' },
      { course: 'igcse-mathematics-mastery', code: 'LF / 03', title: 'IGCSE and Additional Maths', note: 'Its Additional Mathematics strand teaches functions, identities and introductory calculus, close to the new 8365 topics.' }
    ]
  },

  sections: [
    {
      id: 'who', tint: 'tint', eyebrow: 'Who it is for',
      h2: 'Who is AQA Level 2 Further Maths for?',
      lede: 'AQA is specific: students heading for the top GCSE grades and for A level, who want more algebra and an early meeting with calculus.',
      body: [
        { kind: 'p', html: 'The specification describes 8365 as a qualification that "fills the gap for high achieving students by assessing their higher order mathematical skills, particularly in algebraic reasoning, in greater depth". It is meant for learners who "either already have, or are expected to achieve, grades 7, 8 and 9 in GCSE mathematics" and who "are likely to progress to A-Level study in Mathematics and possibly Further Mathematics". AQA is just as clear about what it is not: it is "intended as an additional qualification to the GCSE Mathematics, rather than as a replacement".' },
        { kind: 'two', mt: true,
          leftH3: 'Taught alongside or after',
          left: [
            'AQA says the certificate can be taught "either in parallel with GCSE Mathematics" or "after GCSE Mathematics". Taught in parallel, it runs through Years 10 and 11 beside the GCSE.',
            'The specification gives it 120 guided learning hours. Schools that fit it into one or two lessons a week across Year 11 alone are covering it quickly, which is where outside help is often wanted.'
          ],
          rightH3: 'Is it right for my child?',
          right: [
            'A student secure at grade 7 or above on Higher GCSE papers, who enjoys algebra, is the student AQA had in mind. A student still working to secure Higher technique usually gains more from the GCSE itself first.',
            'If the school does not offer 8365, a student can sit it as a private candidate through an AQA-approved centre; AQA says private candidates "must be based in the UK".'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/aqa-certificate/mathematics-8365/specification" rel="noopener" target="_blank">AQA Level 2 Certificate in Further Mathematics 8365 specification</a>, version 1.4, November 2020, read on 31 October 2026.' }
      ]
    },
    {
      id: 'exam', tint: 'deep', eyebrow: 'The exam',
      h2: 'How is AQA Level 2 Further Maths 8365 examined and graded?',
      lede: 'Two papers, no tiers, one series. The grade comes from the total, so the papers can make up for each other.',
      body: [
        { kind: 'table', caption: 'AQA 8365: the two papers and the June 2027 dates (specification and AQA key dates page)', head: ['Paper', 'Calculator', 'Length and marks', 'Weight', 'June 2027'], rows: [
          ['8365/1', 'Not allowed', '1 hour 45 minutes, 80 marks', '50 per cent', 'Friday 11 June 2027, afternoon'],
          ['8365/2', 'Allowed', '1 hour 45 minutes, 80 marks', '50 per cent', 'Tuesday 15 June 2027, afternoon']
        ] },
        { kind: 'p', html: 'Both papers must be sat in the same series, and AQA\'s key dates page lists 8365 only in the June 2027 series, with no November sitting. The dates interleave with GCSE Maths. On AQA\'s 2027 timetable, 8365 Paper 1 on 11 June falls between GCSE Paper 2 (27 May) and GCSE Paper 3 (14 June), and 8365 Paper 2 comes the day after GCSE Paper 3, so a student sitting both has three maths papers in five days.' },
        { kind: 'table', mt: true, caption: 'How 8365 is graded (from section 5.3 of the specification)', head: ['Outcome', 'What AQA says'], rows: [
          ['Grades 5 to 9', 'The qualification "will be graded on a grade scale of 5 to 9"'],
          ['Allowed grade 4', '"A student who fails to achieve grade 5 will be awarded an allowed grade 4"'],
          ['U', 'Below the allowed grade 4, the result is unclassified and no certificate is issued'],
          ['Compensation', '"a strong performance in one paper can compensate for a weaker performance in the other"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the marks reward',
          left: [
            'Across the two papers, AQA aims for 56 to 64 per cent of marks on recalling and using the content (AO1), and 36 to 44 per cent on reasoning, problem solving, "rigorous justification and formal proof" (AO2).',
            'That second share is large for a Level 2 qualification, and it is why "show that" questions matter so much here.'
          ],
          rightH3: 'Codes and resources',
          right: [
            'AQA\'s accreditation number for 8365 is 603/3104/5. The specification says older practice material comes "from the legacy specification 8360", alongside the current papers.',
            'AQA publishes recent 8365 papers, mark schemes, examiner reports and a formulae sheet on its assessment resources page.'
          ] }
      ]
    },
    {
      id: 'content', tint: '', eyebrow: 'Content',
      h2: 'What is in the AQA 8365 specification?',
      lede: 'Six areas. Two of them, calculus and matrix transformations, are new to most GCSE students; the rest take GCSE algebra and geometry further.',
      body: [
        { kind: 'table', caption: 'The six content areas of 8365, with examples from the specification', head: ['Area', 'What it adds beyond GCSE', 'Limits AQA sets'], rows: [
          ['Number', 'The product rule for counting; surds and rationalising denominators', 'Exact calculation with surds expected'],
          ['Algebra', 'Functions, domain and range, composite and inverse functions, binomial expansion, the factor theorem, algebraic proof', 'Inverse functions on domains chosen to be one-one'],
          ['Coordinate geometry', 'Gradients, dividing a line in a ratio, circles with any centre, tangents to circles', '"2 dimensions only"'],
          ['Calculus', 'Gradient functions, tangents and normals, increasing and decreasing functions, the second derivative, maxima and minima', '"Differentiation of kxn where n is an integer", and sums of such terms'],
          ['Matrix transformations', 'Multiplying matrices, the identity matrix, transforming the unit square, combining transformations', '"restricted to 2 × 2 or 2 × 1 matrices"'],
          ['Geometry', 'Geometric proof, sine and cosine rules, 3D trigonometry, graphs and equations of sin, cos and tan for any angle', 'Angles in degrees, up to 360°']
        ] },
        { kind: 'p', html: 'The matrix section is tightly fenced. Transformations are restricted to rotations of 90, 180 or 270 degrees about the origin, reflections in the lines x = 0, y = 0, y = x and y = &minus;x, and enlargements centred on the origin. That is a short list, and a student who knows the image of the unit square under each one can answer most matrix questions by checking two points. The geometry section also names Pythagorean triples to recognise: 3, 4, 5; 5, 12, 13; 8, 15, 17; and 7, 24, 25, with their multiples.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Know these identities', p: 'The appendix expects students to know, without being given them, that tan θ is sin θ over cos θ and that sin²θ + cos²θ = 1, for any angle.' },
          { h3: 'Exact values', p: 'The 30, 60, 90 and 45, 45, 90 triangles are listed by name, with their side ratios. Exact trigonometric values come up on the non-calculator paper.' },
          { h3: 'Overlap with GCSE', p: 'AQA notes "some overlap" with its GCSE Maths. Higher GCSE algebra, especially factorising and rearranging, is assumed throughout.' }
        ] }
      ]
    },
    {
      id: 'reports', tint: 'tint', eyebrow: '2025 reports',
      h2: 'What did AQA examiners say about the June 2025 Level 2 Further Maths papers?',
      lede: 'AQA\'s two reports on the June 2025 papers are short and pointed. Performance improved, non-attempts fell, and the marks that were lost were mostly lost to algebra and to written justification.',
      body: [
        { kind: 'table', caption: 'From AQA\'s reports on 8365/1 and 8365/2, June 2025 (summarised)', head: ['Paper', 'Overall', 'Topics where students struggled'], rows: [
          ['8365/1, non-calculator', '"Overall students performed better on this year\'s paper than they did in 2024."', 'The product rule for counting; solving a cubic equation; deducing the value of a function; showing that a function is increasing'],
          ['8365/2, calculator', '"The overall number of non-attempts was the lowest there has been on this paper."', 'The range of possible values of n²; using a second derivative to find the nature of a turning point; trigonometry of angles that are not acute']
        ] },
        { kind: 'p', html: 'Three comments are worth quoting in full, because each points to a habit. On counting: "This topic continues to be challenging for many students." On a quadratic inequality: "Students who used the quadratic formula or completing the square on the quadratic inequality rarely managed to get to the answer and on this paper most of the quadratics will factorise into double brackets." And across the non-calculator paper: "All students need to take extra care with their working when asked for a proof or to \'show that\' something is true."' },
        { kind: 'two', mt: true,
          leftH3: 'Try factorising first',
          left: [
            'The inequality comment is a strategy, not just a criticism. On 8365, a quadratic that looks awkward usually factorises, and factorising gives the critical values and the sign pattern at once.',
            'The formula is the fallback, not the first move.'
          ],
          rightH3: 'Angles beyond 90 degrees',
          right: [
            'On the calculator paper, a trigonometric equation with several solutions "had the most non-attempts on the paper", and many students found only two of four angles.',
            'Sketching the sine or cosine graph from 0 to 360 degrees before solving is the cure; it shows how many solutions there should be.'
          ] },
        { kind: 'source', html: 'Source: AQA, Level 2 Certificate Further Mathematics 8365/1 and 8365/2, Reports on the examination, June 2025, from the <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/aqa-certificate/mathematics-8365/assessment-resources" rel="noopener" target="_blank">8365 assessment resources page</a>. We summarise the comments and reproduce no questions.' }
      ]
    },
    {
      id: 'examples', tint: '', eyebrow: 'Worked examples',
      h2: 'Four 8365-style examples we wrote, with full reasoning',
      lede: 'Our own questions on the topics the 2025 reports flagged. None is an AQA question.',
      body: [
        { kind: 'two',
          leftH3: '1. A turning point and its nature',
          left: [
            '<strong>Question (ours).</strong> Find the stationary point of y = x³ &minus; 12x + 5 for x &gt; 0, and decide whether it is a maximum or a minimum.',
            '<strong>Differentiate.</strong> dy/dx = 3x² &minus; 12. Set it to zero: 3x² = 12, so x² = 4 and, for x &gt; 0, x = 2.',
            '<strong>The y value.</strong> y = 8 &minus; 24 + 5 = &minus;11, so the point is (2, &minus;11).',
            '<strong>Nature.</strong> d²y/dx² = 6x, which is 12 at x = 2. Positive, so the point is a <strong>minimum</strong>. Stating the sign and what it means is the mark the 2025 report saw lost.'
          ],
          rightH3: '2. Show that a function is increasing',
          right: [
            '<strong>Question (ours).</strong> Show that f(x) = x³ + 3x² + 5x is an increasing function for all x.',
            '<strong>Gradient.</strong> f\'(x) = 3x² + 6x + 5.',
            '<strong>Complete the square.</strong> 3x² + 6x + 5 = 3(x² + 2x) + 5 = 3(x + 1)² &minus; 3 + 5 = 3(x + 1)² + 2.',
            '<strong>Conclude.</strong> 3(x + 1)² is never negative, so f\'(x) is at least 2 for every x. The gradient is always positive, so f is increasing for all x.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. A matrix transformation',
          left: [
            '<strong>Question (ours).</strong> Describe the transformation given by the matrix with rows (0, 1) and (1, 0).',
            '<strong>Image of the unit square.</strong> The point (1, 0) maps to (0, 1), and (0, 1) maps to (1, 0).',
            '<strong>Read it.</strong> Every point (x, y) becomes (y, x): the coordinates swap.',
            '<strong>Answer.</strong> A reflection in the line y = x. Checking two points is enough, because AQA restricts 8365 to a short list of transformations.'
          ],
          rightH3: '4. Trigonometry for any angle',
          right: [
            '<strong>Question (ours).</strong> Solve sin θ = &minus;0.5 for 0° &le; θ &le; 360°.',
            '<strong>Reference angle.</strong> sin 30° = 0.5, so the reference angle is 30°.',
            '<strong>Where sine is negative.</strong> From the graph of y = sin θ, sine is negative between 180° and 360°.',
            '<strong>Answer.</strong> θ = 180° + 30° = 210° and θ = 360° &minus; 30° = 330°. A calculator gives &minus;30°, which is outside the range and is where the 2025 errors began.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, with answers).</strong> (1) How many four-digit codes use only the digits 1 to 6 with no digit repeated? (2) Expand (1 + 2x)⁴. (3) Find the equation of the tangent to y = x² &minus; 3x at x = 4. (4) Solve x² &minus; x &minus; 12 &lt; 0. (5) Write 12 / (3 &minus; &radic;3) in the form a + b&radic;3. <strong>Answers:</strong> (1) 6 × 5 × 4 × 3 = 360; (2) 1 + 8x + 24x² + 32x³ + 16x⁴; (3) the gradient is 5 and the point is (4, 4), so y = 5x &minus; 16; (4) (x &minus; 4)(x + 3) &lt; 0, so &minus;3 &lt; x &lt; 4; (5) multiply top and bottom by 3 + &radic;3 to get 12(3 + &radic;3) / 6 = 6 + 2&radic;3.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'A plan to June 2027',
      h2: 'How should a student prepare for 8365 alongside GCSE Maths?',
      lede: 'Our own plan for a Year 11 student sitting both qualifications in summer 2027, with one live class a week.',
      body: [
        { kind: 'ol', items: [
          '<strong>November 2026: secure the algebra.</strong> Factorising, rearranging, surds and algebraic fractions at full Higher GCSE standard, because 8365 assumes them everywhere.',
          '<strong>December 2026: functions and the factor theorem.</strong> Domain and range, composite and inverse functions, and dividing a cubic by a known factor.',
          '<strong>January 2027: calculus.</strong> Differentiating powers, tangents and normals, then increasing functions and the second derivative.',
          '<strong>February 2027: matrices and coordinate geometry.</strong> The short list of transformations, then circles with any centre and their tangents.',
          '<strong>March 2027: trigonometry for any angle.</strong> The three graphs from 0 to 360 degrees, exact values, and the two identities AQA expects students to know.',
          '<strong>April to May 2027: past papers, one of each a fortnight.</strong> A non-calculator and a calculator paper, marked, with "show that" answers reread line by line.',
          '<strong>June 2027: three papers in five days.</strong> After GCSE Paper 2 on 27 May, revise for 8365 Paper 1 (11 June), then GCSE Paper 3 (14 June), then 8365 Paper 2 (15 June). We plan that fortnight paper by paper.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we do',
          left: [
            'Teach the 8365 content live, in the order above or around the school\'s own scheme, with AQA\'s past papers and mark schemes.',
            'Keep the GCSE work moving at the same time, so neither qualification is neglected in the spring.'
          ],
          rightH3: 'What we will not do',
          right: [
            'Promise a grade, or enter students ourselves. Entries go through the school or an approved centre.',
            'Claim any link with AQA. We are independent tutors teaching to the published specification.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through Level 2 Further Maths',
    lede: 'Measured on AQA 8365 papers and our own topic tests.',
    table: { caption: 'What an 8365 student should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. GCSE algebra fluent', 'Start of Year 11', 'Factorising, rearranging and surds accurate without a calculator'],
      ['2. Calculus routine', 'Midway through Year 11', 'Derivatives, tangents, normals and stationary points done reliably'],
      ['3. "Show that" written', 'Spring of Year 11', 'Every proof or show-that ends with a sentence that states the result'],
      ['4. Both papers paced', 'May 2027', 'Full 1 hour 45 minute papers finished with time to check']
    ] },
    left: { h3: 'Rung one is the foundation', ps: [
      'Most 8365 marks lost in 2025 were lost in algebra, not in the new topics.',
      'Students who also code may enjoy <a class="ag-inline-link" href="/coding-roadmap">the coding roadmap</a>.'
    ] },
    right: { h3: 'Rung three is the hardest', ps: [
      'Written justification is a third or more of the marks and is built slowly.',
      'Classes drop back in the exam weeks.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for top-set maths students',
    lede: 'GCSE and Level 2, the algebra underneath, and the sixth-form courses ahead.',
    bands: [
      { num: 'I', h3: 'GCSE and Level 2', sub: 'Years 10 and 11', courses: [
        { code: 'UK / LF1 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE Maths', blurb: 'The Higher GCSE that 8365 is built on.' },
        { code: 'UK / LF1 / 02', slug: 'igcse-mathematics-mastery', title: 'IGCSE and Additional Maths', blurb: 'Similar calculus and algebra on an international route.' },
        { code: 'UK / LF1 / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'For a strong student with an algebra gap to close.' }
      ] },
      { num: 'II', h3: 'Depth and stretch', sub: 'Beyond the specification', courses: [
        { code: 'UK / LF2 / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Counting, proof and non-routine problems.' },
        { code: 'UK / LF2 / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Gradients and sequences explored in Python.' },
        { code: 'UK / LF2 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The A level statistics that 8365 leaves out.' }
      ] },
      { num: 'III', h3: 'Sixth form', sub: 'Where 8365 leads', courses: [
        { code: 'UK / LF3 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, mechanics and statistics.' },
        { code: 'UK / LF3 / 02', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'For students who loved the matrices and proof.' },
        { code: 'UK / LF3 / 03', slug: 'college-mathematics-complete-masterclass', title: 'College maths', blurb: 'Calculus and linear algebra for the very keen.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How 8365 classes run',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teachers are based in India and every lesson time is quoted in UK time.',
    slots: [
      { time: 'After school', l: 'Year 10 and Year 11 top-set students.' },
      { time: 'Evening', l: 'After school clubs and GCSE homework.' },
      { time: 'Weekend morning', l: 'A full 1 hour 45 minute paper.' }
    ],
    cells: [
      { h3: 'AQA 8365 papers', p: 'Past papers and mark schemes from AQA, with show-that answers reread line by line.' },
      { h3: 'Algebra first', p: 'Factorising and rearranging kept sharp, since 2025 marks went there.' },
      { h3: 'Graphs before solving', p: 'Sine, cosine and quadratic sketches drawn before any equation is solved.' },
      { h3: 'GCSE kept moving', p: 'Higher GCSE practice alongside, so both papers in June 2027 are ready.' },
      { h3: 'First class free', p: 'A live class on 8365 content, with nothing to pay.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20 top-set students, or 1-on-1 at the student\'s pace.' }
    ]
  },

  projectsH2: 'Projects made in our students\' classes',
  projectsLede: 'Examples of work students built in class, none of it assessed. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, as they were written.',

  fees: {
    h2: 'Fees for Level 2 Further Maths classes',
    lede: 'A free first class, then one monthly fee, lower for a group place and higher for 1-on-1. Nothing is billed until the course and weekly time are settled, and there is no contract.',
    free: ['A live class on 8365 topics', 'A view of how the algebra holds up', 'Booking needs only a phone number'],
    group: ['15 to 20 top-set students', 'One teacher through to June 2027', 'An 8365 paper section most weeks', 'A brief monthly report'],
    one: ['A teacher for one student', 'Fitted around the school\'s own scheme', 'Good when the school offers few lessons']
  },

  faq: {
    eyebrow: '8365 questions',
    h2: 'What families ask about AQA Level 2 Further Maths',
    items: [
      { q: 'What is AQA Level 2 Further Maths?', a: 'It is the AQA Level 2 Certificate in Further Mathematics, specification code 8365. It is an untiered qualification taken alongside or after GCSE Maths by students expected to get grades 7 to 9, and it introduces calculus and matrices.' },
      { q: 'How many papers are there in AQA Level 2 Further Maths?', a: 'Two. Paper 1 is non-calculator and Paper 2 allows a calculator. Each lasts 1 hour 45 minutes and is worth 80 marks, and both must be sat in the same series.' },
      { q: 'When is the AQA Level 2 Further Maths exam in 2027?', a: 'AQA\'s key dates page lists Paper 1 on Friday 11 June 2027 and Paper 2 on Tuesday 15 June 2027, both in the afternoon. There is no November series.' },
      { q: 'What grades can you get in Level 2 Further Maths?', a: 'Grades 5 to 9. A student who just misses grade 5 can be awarded an allowed grade 4; below that the result is unclassified.' },
      { q: 'Is Level 2 Further Maths a GCSE?', a: 'No. It is a Level 2 certificate, designed by AQA as an addition to GCSE Maths rather than a replacement. Students still take GCSE Maths.' },
      { q: 'Is Level 2 Further Maths hard?', a: 'It is demanding, because it assumes secure Higher GCSE algebra and adds calculus and matrices. AQA\'s 2025 reports show most lost marks came from algebra and from written show-that answers.' },
      { q: 'Does Level 2 Further Maths help with A level maths?', a: 'AQA designed it for students likely to take A level Mathematics and possibly Further Mathematics, and it introduces differentiation and matrices early. Sixth forms set their own entry requirements.' },
      { q: 'Can I take Level 2 Further Maths if my school does not offer it?', a: 'Possibly, as a private candidate through an AQA-approved school or college. AQA says private candidates must be based in the UK, and the centre makes the entry.' },
      { q: 'When are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are UK time.' },
      { q: 'Are you connected with AQA?', a: 'No. We are independent and teach to AQA\'s published 8365 specification with its public past papers. We do not promise grades.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'More for top-set maths students',
    lede: 'The GCSE, the top grades and sixth form.',
    items: [
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition online', p: 'Our GCSE Maths page for every board and tier.' },
      { href: '/further-maths-tuition-online', label: 'Further maths tuition', p: 'A level further maths, the next step for many 8365 students.' },
      { href: '/is-a-level-further-maths-worth-it', label: 'Is A level further maths worth it?', p: 'An honest look at the choice.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'Pure, mechanics and statistics.' },
      { href: '/maths-olympiad-training-uk', label: 'Maths olympiad training', p: 'Competition problems for keen students.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page, in one hub.' }
    ]
  },

  start: {
    h2: 'Book a free Level 2 Further Maths class',
    lede: 'Send a number and we will ring at a UK time you choose. The class works through 8365 topics and checks how the algebra underneath holds up.',
    readFirst: 'Want to read first? The <a class="ag-inline-link" href="/courses/gcse-mathematics-mastery">GCSE Maths course</a> lists its units, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson.',
    note: 'WhatsApp is quickest and free from a UK phone. Our India team will reply from a +91 number.',
    formNote: 'No card, no sign-up fee. One reply with a time to talk.'
  },

  footer: {
    cols: [
      { h4: 'GCSE and Level 2', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/gcse-maths-grades-explained', label: 'GCSE grades' },
        { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'The GCSE boards' },
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths' }
      ] },
      { h4: 'Sixth form', links: [
        { href: '/a-level-maths-tuition-online', label: 'A level maths' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'AQA Level 2 Further Maths, live in UK time'
  },

  personalityCss: `
.ag-root.ag-alf .ag-hero h1 { letter-spacing: -0.022em; font-weight: 710; }
.ag-root.ag-alf .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-alf .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-alf .ag-table caption { text-align: left; font-weight: 660; }
.ag-root.ag-alf .ag-table th:first-child { width: 20%; }
.ag-root.ag-alf .ag-grid-3 h3 { font-weight: 680; }
`,

  dossier: {
    curriculumAuthority: 'England, AQA Level 2 Certificate in Further Mathematics 8365, specification version 1.4 November 2020: fills the gap for high achieving students; additional to GCSE, not a replacement; untiered, for learners with or expecting grades 7 to 9 and likely to progress to A level; two papers in one series, each 1 hour 45 minutes, 80 marks, 50%, Paper 1 non-calculator; 120 guided learning hours; taught in parallel with or after GCSE; six areas (Number; Algebra; Coordinate Geometry, 2 dimensions only; Calculus; Matrix Transformations; Geometry); 2 × 2 or 2 × 1 matrices and a fixed list of transformations; differentiation of kx^n for integer n; Pythagorean triples listed; AO1 56 to 64, AO2 36 to 44; grades 5 to 9 with an allowed grade 4; compensation between papers; QAN 603/3104/5; legacy 8360 resources; private candidates in the UK. AQA key dates: 11 and 15 June 2027, PM. AQA June 2025 reports on 8365/1 and 8365/2.',
    localProject: 'A bridge, not a replacement. The page explains who AQA designed 8365 for and how it sits beside GCSE Maths, tabulates the two papers with AQA\'s June 2027 dates and the 5 to 9 grade scale with its allowed grade 4, maps the six content areas with the limits AQA sets (matrix transformations fenced to a short list, differentiation of integer powers), and summarises the June 2025 reports: better performance, fewest non-attempts, but marks lost to counting, cubics, show-that working, second derivatives and angles beyond 90 degrees. Four original worked examples (a turning point and its nature, an increasing function by completing the square, a reflection matrix, a sine equation) with an original practice set and a month-by-month plan to June 2027. Lesson family: a top-set qualification door.',
    requiredMentions: [
      'fills the gap for high achieving students by assessing their higher order mathematical skills, particularly in algebraic reasoning, in greater depth',
      'intended as an additional qualification to the GCSE Mathematics, rather than as a replacement',
      '603/3104/5',
      'Friday 11 June 2027, afternoon',
      'A student who fails to achieve grade 5 will be awarded an allowed grade 4',
      'This topic continues to be challenging for many students.',
      'on this paper most of the quadratics will factorise into double brackets',
      'The overall number of non-attempts was the lowest there has been on this paper.',
      'from the legacy specification 8360'
    ],
    sources: [
      { claim: 'AQA Level 2 Certificate in Further Mathematics 8365 specification, version 1.4: purpose, audience, papers, content, AOs, grading, QAN, private candidates.', url: 'https://www.aqa.org.uk/subjects/mathematics/aqa-certificate/mathematics-8365/specification' },
      { claim: 'AQA 8365 key dates: June 2027 paper dates and start times.', url: 'https://www.aqa.org.uk/subjects/mathematics/aqa-certificate/mathematics-8365/key-dates' },
      { claim: 'AQA Reports on the examination, 8365/1 and 8365/2, June 2025.', url: 'https://www.aqa.org.uk/subjects/mathematics/aqa-certificate/mathematics-8365/assessment-resources' }
    ],
    rejectedClaims: [
      'How many schools offer 8365, how much lesson time they give it, or entry numbers: not published on the pages read, so the page states none of these and speaks only conditionally about limited lesson time.',
      'Grade boundaries for 8365: not read at a primary source, not quoted.',
      'That 8365 is required or preferred for A level entry: not stated by AQA, so not claimed.',
      'Any promised grade: declined.'
    ]
  }
};
