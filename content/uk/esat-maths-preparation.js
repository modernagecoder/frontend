'use strict';
// ESAT maths preparation (ag- exam door, UK and US exams cluster, row UK072).
// Sources read raw with curl on 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/esat-maths-preparation/):
//  - UAT-UK, ESAT page (esat-tmua.ac.uk/about-the-tests/esat-test/): "The Engineering and Science Admissions Test";
//    Test Sitting 1 "12th-16th October 2026", "Applicable to all candidates for 2027 entry"; Test Sitting 2 "4th-8th
//    January 2027", not for Cambridge or Oxford applicants except mature-college January applicants at Cambridge or
//    an Oxford Foundation Year with a January deadline (Astrophoria Foundation Year named further down); "All
//    candidates need to sit Maths 1. Most other candidates need to sit two further modules."; modules "cannot be
//    changed without cancelling and re-booking your test"; conflicting compulsory modules: contact UAT-UK before
//    booking; "For the ESAT you will receive a score per module taken."; "1 (low) to 9 (high) to one decimal place";
//    "There is no pass/fail score for the ESAT."; "There are five ESAT modules."; "Each module lasts 40 minutes and
//    contains 27 multiple choice questions. The ESAT will be 120 minutes long for most candidates."; no calculator or
//    dictionary; "You do not lose marks for incorrect answers"; "the best way to prepare is to familiarise yourself
//    with the test format and style of questions"; "answer the specimen test under timed conditions"; bursaries for
//    UK candidates "will cover the full cost of your test", apply before booking; "Imperial College London, the
//    University of Cambridge, the University of Oxford and UCL all use the ESAT"; "Not registering for the ESAT when
//    it's required might make your application invalid."; results "approximately four weeks after your test
//    sitting", sent automatically. The page prints test fees; we do not.
//  - UAT-UK, ESAT Preparation Materials (esat-tmua.ac.uk/esat/): an ESAT Guide per module (Mathematics 1, Biology,
//    Chemistry, Physics, Mathematics 2); historic ENGAA and NSAA papers 2016 to 2023 "that contain questions of the
//    type found in the ESAT"; "We have indicated in the papers where questions are not in the ESAT specification."
//  - UAT-UK, ESAT Content Specification, "For assessment in October 2026 and January 2027" (PDF, pdftext): purpose
//    "to determine a candidate's potential to achieve in an academically demanding undergraduate degree course";
//    "Each module is separately timed. If a candidate finishes a module early, the time will not be carried over to
//    the next module"; "erasable booklet for working"; "Calculators may NOT be used."; "All modules will assume
//    knowledge of the content of Mathematics 1"; Mathematics 2 assumes topics labelled 'M' and 'MM'; "each correct
//    answer will score 1 mark. No marks are deducted for incorrect answers."; M1 headings M1 Units to M7 Probability;
//    MM headings MM1 Algebra and functions to MM8 Graphs of functions; MM5.2 "Questions requiring knowledge of the
//    change of base formula will not be set."; MM6.1 "Differentiation from first principles is excluded."; MM6.3
//    "Points of inflexion will not be examined"; MM4.1 sine rule "ambiguous" case; MM7.5 trapezium rule over or
//    underestimate; MM7.4 combining integrals with equal or contiguous ranges; MM2.3 sum to infinity; MM1.6 Factor
//    and Remainder Theorems; SI prefixes nano to giga.
//  - Imperial College London, ESAT page: required for Aeronautics, Chemical Engineering, Civil and Environmental
//    Engineering, Dyson School of Design Engineering, Electrical and Electronic Engineering, Life Sciences, Mechanical
//    Engineering, Physics; module table (Dyson: Mathematics 1 and Mathematics 2 only; Chemical Engineering: Maths 1,
//    Maths 2, Chemistry; Life Sciences: Maths 1, Chemistry, Biology; the rest Maths 1, Maths 2, Physics); windows 12 to
//    16 October 2026 and 4 to 8 January 2027; China, Hong Kong and Macau "12 to 13 October 2026" (en dash in original) and "6 January 2027";
//    booking 20 July to 28 September 2026 and 28 October to 21 December 2026 (15.00 and 18.00 UK time); "Only your
//    first test score will be considered."; seven user universities listed (Imperial, Cambridge, Durham, LSE, UCL,
//    Oxford, Warwick) "for certain courses in Engineering, Science, Natural Sciences and Veterinary Medicine".
//  - University of Cambridge, ESAT page: Chemical Engineering and Biotechnology, Engineering, Natural Sciences,
//    Veterinary Medicine; Engineering takes Mathematics 1, Physics and Mathematics 2; the other three choose two of
//    Biology, Chemistry, Physics, Mathematics 2; book by 28 September 2026; bursary voucher from 1 June 2026,
//    deadline 21 September 2026; access arrangements from 1 June 2026, register by 14 September 2026; "we recommend
//    that you revise relevant topics and familiarise yourself with the format of the test".
//  - University of Cambridge, Admission tests and assessments: "Almost no one gets full marks."; "Some strong
//    applicants may not even complete the paper in the time given."; "a strong performance is usually needed to get
//    through to interview"; "Sharing admissions assessment or interview questions is strictly prohibited."
// ox.ac.uk returned HTTP 403 on 31 October 2026; not retried. Oxford and UCL are named only as UAT-UK names them.
// UAT-UK lists four ESAT universities; Imperial's page lists seven. The page reports both and says so.
// Our own material, labelled on the page: 40 minutes / 27 = about 1 minute 29 seconds per question; module minutes by
// course (two modules = 80 minutes, three = 120); the surd, exponential-substitution, trapezium and ambiguous-case
// examples; a seven-question practice set with answers checked by hand. No ESAT, ENGAA or NSAA question is reproduced.
// Lesson family: exact arithmetic without a calculator, at ninety seconds a question.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'ESAT', blurb: 'Five forty-minute modules, and Mathematics 1 is the only one everybody sits. Which modules each Cambridge and Imperial course asks for, and how to work at ninety seconds a question.' },
  slug: 'esat-maths-preparation',
  code: 'ep',
  accent: '#71330C',
  accentRationale: 'ESAT maths: a burnt umber #71330C from the cluster allocation, about 9.1:1 on #FBF8F2 and well clear of 4.5:1 on every paper tint, warmer and darker than the green of the TMUA page so the two admissions-test doors read apart',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'ESAT maths preparation',
  title: 'ESAT Maths Preparation: Mathematics 1 and 2, 2026 to 2027',
  description: 'ESAT preparation for the maths modules: 27 questions in 40 minutes, which modules each Cambridge and Imperial course needs, and worked examples of ours.',
  ogDescription: 'Every ESAT candidate sits Mathematics 1, and most engineers sit Mathematics 2 as well. Modules by course, the October 2026 and January 2027 sittings, and how to pace 27 questions in 40 minutes.',
  twitterDescription: 'ESAT maths preparation: Mathematics 1 and 2, modules by course, sittings and pacing, from UAT-UK and university pages.',
  pageName: 'ESAT Maths Preparation',
  webPageDescription: 'A guide to the mathematics modules of the Engineering and Science Admissions Test for 2027 entry, built from UAT-UK\'s ESAT pages and content specification and the admissions pages of Imperial College London and the University of Cambridge, with original worked examples.',
  courseDescription: 'Live online preparation for ESAT Mathematics 1 and Mathematics 2 for Year 12 and Year 13 applicants to engineering, physics and natural sciences: the specification topic by topic, exact arithmetic without a calculator, and timed modules.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'ESAT maths preparation',
  navLinks: [
    { href: '#modules', label: 'Modules' },
    { href: '#courses', label: 'By course' },
    { href: '#content', label: 'Maths content' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#sittings', label: 'Sittings' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Years 12 and 13 &middot; Sittings 12 to 16 October 2026 and 4 to 8 January 2027',
  h1: 'ESAT maths preparation: Mathematics 1 and Mathematics 2',
  lede: 'The Engineering and Science Admissions Test is sat in modules, and mathematics runs through all of it. Mathematics 1 is compulsory for every candidate, every other module assumes its content, and most engineering and physics applicants sit Mathematics 2 as well. Each module is 27 multiple-choice questions in 40 minutes, on screen, with no calculator. This page shows which modules each Cambridge and Imperial course asks for, maps the two mathematics modules from UAT-UK\'s own specification, and works through the kind of exact, quick arithmetic they reward, using examples we wrote ourselves.',
  secondaryCta: { href: '#examples', label: 'See the worked examples' },
  wa: 'Hello Modern Age Coders, I am sitting the ESAT and would like a free maths class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; ESAT facts from UAT-UK, Imperial and Cambridge pages',
  spec: [
    ['Full name', 'Engineering and Science Admissions Test'],
    ['Run by', 'UAT-UK, at Pearson test centres'],
    ['Modules', 'Mathematics 1, Biology, Chemistry, Physics, Mathematics 2'],
    ['Compulsory', 'Mathematics 1, for everyone'],
    ['Each module', '27 multiple-choice questions, 40 minutes'],
    ['Score', '1 to 9 per module, one decimal place'],
    ['Sittings', '12 to 16 October 2026; 4 to 8 January 2027'],
    ['Start', 'One free class']
  ],
  capsuleQ: 'In short',
  capsule: 'The ESAT (Engineering and Science Admissions Test) is sat on screen at Pearson test centres and administered by UAT-UK, for entry to engineering and science degrees. It has five modules of 27 multiple-choice questions and 40 minutes each; every candidate sits Mathematics 1, and most add two more, such as Mathematics 2 and Physics. There is no calculator and no penalty for a wrong answer. For 2027 entry the October sitting runs 12 to 16 October 2026 and the January sitting 4 to 8 January 2027. Modern Age Coders teaches the two mathematics modules live online, either in a class of 15 to 20 students or with a single teacher 1-on-1.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for an ESAT candidate',
    lede: 'The A Level the mathematics modules are built on, a course that trains admissions-test thinking, and the Further Maths most engineering offers expect.',
    items: [
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'EP / 01', title: 'A Level Maths', note: 'Mathematics 2 is AS-level pure in all but name; this is where its topics are taught properly.' },
      { course: 'tmua-mat-step-preparation-course', code: 'EP / 02', title: 'Admissions-test maths', note: 'Fast multiple-choice reasoning without a calculator, the habit both mathematics modules lean on.' },
      { course: 'a-level-further-maths-course', code: 'EP / 03', title: 'A Level Further Maths', note: 'Not examined in the ESAT, but asked for by many of the engineering courses that set it.' }
    ]
  },

  sections: [
    {
      id: 'modules', tint: 'tint', eyebrow: 'How the test is built',
      h2: 'What is the ESAT, and how many modules do you sit?',
      lede: 'Five modules exist and most candidates sit three of them, back to back, for 120 minutes in total. Mathematics 1 is the only module every candidate sits; the other two depend on the course, and UAT-UK warns that they cannot be changed without cancelling and re-booking.',
      body: [
        { kind: 'table', caption: 'ESAT structure for 2027 entry, from the UAT-UK ESAT page and content specification (read 31 October 2026)', head: ['Feature', 'What UAT-UK says'], rows: [
          ['Modules on offer', 'Mathematics 1, Biology, Chemistry, Physics, Mathematics 2'],
          ['Who sits Mathematics 1', 'All candidates'],
          ['Who sits the others', 'Most candidates sit two of the remaining four, set by the course'],
          ['Questions per module', '27 multiple-choice'],
          ['Time per module', '40 minutes, each separately timed; unused minutes are not carried over'],
          ['Total for most candidates', '120 minutes'],
          ['Aids', 'No calculator or dictionary; an erasable booklet for working'],
          ['Marking', 'One mark per correct answer; none deducted for a wrong one'],
          ['Score report', 'One score per module, 1 (low) to 9 (high) to one decimal place'],
          ['Pass mark', 'None: "There is no pass/fail score for the ESAT."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Mathematics 1 sits under everything',
          left: [
            'UAT-UK\'s specification says that "All modules will assume knowledge of the content of Mathematics 1". A Physics or Chemistry question can therefore expect a student to rearrange a formula, handle standard form or work with ratio as fluently as a Mathematics 1 question does.',
            'That makes the compulsory module the most valuable hour of revision. A biologist who skips it to concentrate on Biology is weakening both scores at once.'
          ],
          rightH3: 'Scores are reported module by module',
          right: [
            'There is no single ESAT score. A Cambridge engineer receives three numbers on the 1 to 9 scale, one each for Mathematics 1, Mathematics 2 and Physics, and admissions tutors weigh them with the school record, reference and interview.',
            'So a weak module is visible on its own; it is not averaged away. That is a reason to prepare every module the course requires, not only the one a student enjoys most.'
          ] },
        { kind: 'table', mt: true, caption: 'Pacing and length, worked out by us from UAT-UK\'s format', head: ['Item', 'Our figure', 'In the room'], rows: [
          ['Time per question', '40 minutes / 27 = about 1 minute 29 seconds', 'Ninety seconds, then move on; a long question steals from two short ones'],
          ['Two modules (Imperial Design Engineering)', '2 &times; 40 = 80 minutes', 'Mathematics 1 and Mathematics 2 only'],
          ['Three modules (most courses)', '3 &times; 40 = 120 minutes', 'Matches the 120 minutes UAT-UK gives for most candidates'],
          ['Time left at the end of a module', 'Lost, per the specification', 'Use any spare minute to recheck flagged answers before the module closes']
        ] },
        { kind: 'source', html: 'Sources: UAT-UK <a class="ag-inline-link" href="https://esat-tmua.ac.uk/about-the-tests/esat-test/" rel="noopener" target="_blank">ESAT page</a> and <a class="ag-inline-link" href="https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/05/03165424/ESAT_Content_Specification.pdf" rel="noopener" target="_blank">ESAT Content Specification</a> for October 2026 and January 2027, read 31 October 2026. The pacing figures are our own division. Modern Age Coders has no connection with UAT-UK, Pearson or the universities on this page.' }
      ]
    },
    {
      id: 'courses', tint: 'deep', eyebrow: 'Which modules, for which course',
      h2: 'Which ESAT modules does your course require?',
      lede: 'It depends on the department, and the course page is the authority. At Cambridge, Engineering fixes all three modules while Natural Sciences lets the applicant choose two after Mathematics 1. At Imperial, every department names its modules, and one of them asks for only two.',
      body: [
        { kind: 'table', caption: 'ESAT modules by course, from the Imperial and Cambridge ESAT pages (read 31 October 2026)', head: ['University and course', 'Module 1', 'Further modules'], rows: [
          ['Cambridge: Engineering', 'Mathematics 1', 'Physics and Mathematics 2'],
          ['Cambridge: Chemical Engineering and Biotechnology', 'Mathematics 1', 'Two chosen from Biology, Chemistry, Physics, Mathematics 2'],
          ['Cambridge: Natural Sciences', 'Mathematics 1', 'Two chosen from Biology, Chemistry, Physics, Mathematics 2'],
          ['Cambridge: Veterinary Medicine', 'Mathematics 1', 'Two chosen from Biology, Chemistry, Physics, Mathematics 2'],
          ['Imperial: Aeronautics; Civil and Environmental; Electrical and Electronic; Mechanical Engineering; Physics', 'Mathematics 1', 'Mathematics 2 and Physics'],
          ['Imperial: Chemical Engineering', 'Mathematics 1', 'Mathematics 2 and Chemistry'],
          ['Imperial: Dyson School of Design Engineering', 'Mathematics 1', 'Mathematics 2 only'],
          ['Imperial: Life Sciences', 'Mathematics 1', 'Chemistry and Biology']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Applying to two ESAT courses',
          left: [
            'UAT-UK sets the rule for clashes: if one course has a free choice of modules and the other names a compulsory one, sit the compulsory module. A student applying to Cambridge Natural Sciences and Imperial Physics would therefore take Mathematics 2 and Physics, which satisfies both.',
            'Where two courses demand modules that cannot both fit, UAT-UK asks candidates to contact it through their online account before booking, not after.'
          ],
          rightH3: 'Who else uses it',
          right: [
            'UAT-UK says Imperial College London, the University of Cambridge, the University of Oxford and UCL all use the ESAT. Imperial\'s own page lists seven universities, adding Durham, LSE and Warwick, for certain courses in engineering, science, natural sciences and veterinary medicine.',
            'The two lists differ, and we could not read Oxford\'s admissions pages on the day we checked. For anywhere beyond Cambridge and Imperial, take the course page itself as the answer.'
          ] },
        { kind: 'source', html: 'Course and module lists from Imperial College London\'s <a class="ag-inline-link" href="https://www.imperial.ac.uk/study/apply/undergraduate/process/admissions-tests/esat/" rel="noopener" target="_blank">ESAT page</a> and the University of Cambridge <a class="ag-inline-link" href="https://www.undergraduate.study.cam.ac.uk/apply/how/science-engineering-admission-test" rel="noopener" target="_blank">ESAT page</a>; the clash rule and the four-university list from the UAT-UK ESAT page; all read 31 October 2026. The Oxford admissions site refused our request that day and we did not retry it.' }
      ]
    },
    {
      id: 'content', tint: 'tint', eyebrow: 'The two mathematics modules',
      h2: 'What maths is in ESAT Mathematics 1 and Mathematics 2?',
      lede: 'Mathematics 1 covers seven areas from units to probability, at roughly GCSE Higher depth. Mathematics 2 adds eight more, from algebra and functions to graphs of functions, which together look very like AS-level pure mathematics. The specification also names what is left out, which is worth knowing before revising.',
      body: [
        { kind: 'table', caption: 'Topic headings in the ESAT Content Specification for October 2026 and January 2027', head: ['Mathematics 1 (labelled M)', 'Mathematics 2 (labelled MM)'], rows: [
          ['M1 Units', 'MM1 Algebra and functions'],
          ['M2 Number', 'MM2 Sequences and series'],
          ['M3 Ratio and proportion', 'MM3 Coordinate geometry in the (x, y)-plane'],
          ['M4 Algebra', 'MM4 Trigonometry'],
          ['M5 Geometry', 'MM5 Exponentials and logarithms'],
          ['M6 Statistics', 'MM6 Differentiation'],
          ['M7 Probability', 'MM7 Integration'],
          ['', 'MM8 Graphs of functions']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Inside Mathematics 2',
          left: [
            'The detail is precise. MM1.6 includes the Factor Theorem and the Remainder Theorem; MM2.3 includes the sum to infinity of a convergent geometric series; MM4.1 expects the sine rule\'s ambiguous case, in two or three dimensions; MM7.5 asks whether a trapezium-rule estimate is an overestimate or an underestimate.',
            'Mathematics 2 assumes everything labelled M as well as everything labelled MM, so a student cannot sit it on calculus alone. Weak fractions or surds will show up inside a calculus question.'
          ],
          rightH3: 'What the specification leaves out',
          right: [
            'UAT-UK says plainly that "Questions requiring knowledge of the change of base formula will not be set", that differentiation from first principles is excluded, and that points of inflexion "will not be examined", though a qualitative sense of them is expected.',
            'There is nothing from Further Maths, no mechanics as such, and no statistics beyond Mathematics 1. Revising those for the ESAT is time spent somewhere else.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Units are mathematics here.</strong> The specification expects the SI prefixes from nano to giga and negative indices in units such as m s<sup>&minus;1</sup>. Converting 72 km/h to 20 m/s, or 1 m<sup>3</sup> to 10<sup>6</sup> cm<sup>3</sup>, is a Mathematics 1 skill that Physics and Chemistry questions quietly depend on.' },
        { kind: 'source', html: 'Topic headings, inclusions and exclusions from the UAT-UK <a class="ag-inline-link" href="https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/05/03165424/ESAT_Content_Specification.pdf" rel="noopener" target="_blank">ESAT Content Specification</a>, read 31 October 2026. The comparisons with GCSE Higher and AS-level are our own reading of it, not UAT-UK\'s wording. The two unit conversions are our examples.' }
      ]
    },
    {
      id: 'examples', tint: 'plain', eyebrow: 'Worked examples, ours',
      h2: 'How do you answer ESAT maths questions without a calculator?',
      lede: 'By keeping numbers exact for as long as possible and reaching for structure before arithmetic. Every example below is ours, written for this page in the spirit of the specification; none is an ESAT, ENGAA or NSAA question.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Surds stay surds', p: 'Find &radic;48 + &radic;27. Pull out squares first: &radic;48 = 4&radic;3 and &radic;27 = 3&radic;3, so the sum is 7&radic;3. Squaring it gives 147. No decimal ever appears, which is how a no-calculator question wants to be answered.' },
          { h3: 'Disguised quadratics', p: 'Solve 4<sup>x</sup> &minus; 6 &times; 2<sup>x</sup> + 8 = 0. Write y = 2<sup>x</sup>, so 4<sup>x</sup> = y<sup>2</sup>, and the equation is y<sup>2</sup> &minus; 6y + 8 = 0, giving y = 2 or y = 4. Then x = 1 or x = 2. Spotting the substitution is the whole question.' },
          { h3: 'Over or under?', p: 'Estimate the area under y = x<sup>2</sup> from 0 to 2 with two trapezium strips: (1/2)(0 + 2 &times; 1 + 4) = 3. The exact value is 8/3. The curve bends upwards, so every straight top sits above it and the estimate is too large.' }
        ] },
        { kind: 'p', mt: true, html: '<strong>Our ambiguous-case example.</strong> In triangle ABC, a = 5, b = 7 and angle A = 30&deg;. How many triangles fit? The sine rule gives sin B = 7 &times; sin 30&deg; / 5 = 0.7. Two angles between 0&deg; and 180&deg; have a sine of 0.7, one acute and one obtuse, and they add to 180&deg;.' },
        { kind: 'two', mt: true,
          leftH3: 'Finishing the triangle',
          left: [
            'The acute angle is a little under 45&deg;, so the obtuse one is a little over 135&deg;. Add angle A: 30&deg; plus just over 135&deg; is still under 180&deg;, so the obtuse case leaves room for angle C. Both triangles exist, and the answer is two.',
            'Nobody needs the angle to a decimal place. Knowing that sin 45&deg; is about 0.71 is enough to place the acute angle, and that is the kind of number sense the module rewards.'
          ],
          rightH3: 'The ninety-second habit',
          right: [
            'Each example above can be done in well under 90 seconds by a student who looks for structure first: squares inside surds, a hidden quadratic, the shape of a curve, the sum of angles. The same examples take three or four minutes by brute force.',
            'Our lessons train that first look. Before writing anything, the student says out loud what kind of question it is; only then do they start working.'
          ] },
        { kind: 'table', mt: true, caption: 'Seven questions we wrote, answers alongside', head: ['#', 'Our question', 'Answer'], rows: [
          ['1', 'Simplify (&radic;12 + &radic;3)<sup>2</sup>.', '27, since &radic;12 + &radic;3 = 3&radic;3'],
          ['2', 'Find the remainder when x<sup>3</sup> &minus; 2x + 5 is divided by (x &minus; 2).', '9, by the Remainder Theorem: 8 &minus; 4 + 5'],
          ['3', 'Find the sum to infinity of 6 + 3 + 1.5 + ...', '12, since 6 / (1 &minus; 1/2) = 12'],
          ['4', 'How many solutions does sin 2x = 1/2 have for 0&deg; &le; x &lt; 360&deg;?', '4: x = 15&deg;, 75&deg;, 195&deg;, 255&deg;'],
          ['5', 'Evaluate log<sub>2</sub> 8 + log<sub>2</sub> (1/4).', '1, since 3 + (&minus;2) = 1'],
          ['6', 'Find the coefficient of x<sup>2</sup> in (1 + 2x)<sup>5</sup>.', '40, since 10 &times; 2<sup>2</sup> = 40'],
          ['7', 'Find the gradient of the normal to y = x<sup>3</sup> at x = 1.', '&minus;1/3, since the tangent gradient is 3']
        ] },
        { kind: 'source', html: 'We wrote every example and practice question here on 31 October 2026; none comes from an ESAT, ENGAA or NSAA paper. UAT-UK publishes an ESAT Guide for each module, a specimen test, and historic ENGAA and NSAA papers from 2016 to 2023, marked where questions fall outside the ESAT specification, all free on its <a class="ag-inline-link" href="https://esat-tmua.ac.uk/esat/" rel="noopener" target="_blank">preparation page</a>.' }
      ]
    },
    {
      id: 'sittings', tint: 'deep', eyebrow: 'Dates for 2027 entry',
      h2: 'When is the ESAT in 2026 and 2027, and when do you book?',
      lede: 'October is the main sitting, from 12 to 16 October 2026, and almost every Cambridge and Oxford applicant must use it. January, from 4 to 8 January 2027, is the second chance for other courses. October bookings shut on 28 September 2026; the January list has been open since 28 October 2026 and shuts at six in the evening, UK time, on 21 December 2026.',
      body: [
        { kind: 'table', caption: 'ESAT sittings and deadlines for 2027 entry, from the Imperial, Cambridge and UAT-UK ESAT pages', head: ['', 'Sitting 1', 'Sitting 2'], rows: [
          ['Days on which to sit', 'Monday 12 October to Friday 16 October 2026', 'Monday 4 January to Friday 8 January 2027'],
          ['Candidates in China, Hong Kong or Macau', 'Only 12 to 13 October 2026', 'Only 6 January 2027'],
          ['Bookings accepted from', '3pm UK time on 20 July 2026', '3pm UK time on 28 October 2026'],
          ['Last moment to book', '6pm UK time on 28 September 2026', '6pm UK time on 21 December 2026'],
          ['Cambridge bursary voucher deadline', '21 September 2026', 'See UAT-UK'],
          ['Cambridge and Oxford applicants', 'Required, apart from the exceptions below', 'Only Cambridge mature-college January applicants and Oxford\'s Astrophoria Foundation Year'],
          ['Results', 'About four weeks after the sitting, sent to the universities automatically', 'The same']
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Check every course page.</strong> Write down the modules each course requires before opening the booking system, because UAT-UK will not change them at the test centre.',
          '<strong>Open a UAT-UK account.</strong> Accounts could be created from 1 June, and a returning candidate keeps the same one.',
          '<strong>Ask for a bursary or access arrangements first.</strong> Both must be approved before booking; UAT-UK says it cannot refund a test already paid for under a later bursary.',
          '<strong>Book the sitting, the modules and a Pearson centre.</strong> UAT-UK advises that earlier bookings are more likely to find a slot at the preferred centre.',
          '<strong>Bring compliant photo ID on the day.</strong> UAT-UK points candidates to its ID policy and a Pearson video on what to expect.',
          '<strong>Wait about four weeks.</strong> Results arrive in the UAT-UK account and go automatically to every university that asked for the ESAT.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'One sitting per cycle',
          left: [
            'Imperial is explicit that the ESAT counts once in each application cycle: whichever sitting comes first is the score universities use. Booking January as a back-up for a disappointing October does not work.',
            'Cambridge and Oxford applicants are tied to October in any case, which means their October modules travel to Imperial, UCL and anywhere else on the UCAS form.'
          ],
          rightH3: 'What registration mistakes cost',
          right: [
            'UAT-UK is blunt: "Not registering for the ESAT when it\'s required might make your application invalid." Missing a deadline is not an inconvenience; it can end the application to that course.',
            'The same applies to the wrong modules. A Cambridge engineer who books Chemistry instead of Mathematics 2 has sat a test the course cannot use.'
          ] },
        { kind: 'source', html: 'Dates, booking times and the one-score rule from Imperial\'s ESAT page; the Cambridge bursary, access arrangement and booking deadlines from the Cambridge ESAT page; the January exceptions, results timing and registration warnings from the UAT-UK ESAT page; all read 31 October 2026. Test fees are set by UAT-UK by test centre location and are not printed here.' }
      ]
    },
    {
      id: 'prepare', tint: 'tint', eyebrow: 'How much preparation',
      h2: 'Do you need an ESAT tutor, and what does a good score look like?',
      lede: 'UAT-UK and Cambridge both say good preparation means knowing the format and revising any specification topics you have not met. Neither publishes a target score. Cambridge says almost no one gets full marks and that some strong applicants do not finish in the time.',
      body: [
        { kind: 'table', caption: 'Preparation and scores in the words of UAT-UK and Cambridge (read 31 October 2026)', head: ['Who', 'Their words'], rows: [
          ['UAT-UK', 'Preparation means knowing the format and style of questions, reading the specification for unfamiliar topics, then doing the specimen test "under timed conditions"'],
          ['UAT-UK', 'The test "is designed to be challenging in order to differentiate effectively between able applicants", including those with top school grades'],
          ['Cambridge', '"we recommend that you revise relevant topics and familiarise yourself with the format of the test"'],
          ['Cambridge', '"Almost no one gets full marks." and "Some strong applicants may not even complete the paper in the time given."'],
          ['Cambridge', 'There is no pass mark, but "a strong performance is usually needed to get through to interview"'],
          ['Cambridge', '"Sharing admissions assessment or interview questions is strictly prohibited."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When a class earns its place',
          left: [
            'A Year 12 student who has not yet reached AS-level calculus, logarithms or the circle theorems in MM3.3 will meet Mathematics 2 topics for the first time while preparing. Some school courses teach them late in Year 12; some international curricula order them differently.',
            'A second case is the student who knows the content but works slowly without a calculator. Ninety seconds a question is a skill, and it improves fastest with feedback on each attempt.'
          ],
          rightH3: 'What we do not do',
          right: [
            'We do not teach the Biology or Chemistry modules, and our Physics help is limited to the mathematics inside physics questions. Students sitting those modules should use UAT-UK\'s free guides for them.',
            'We do not circulate questions from past sittings, which Cambridge forbids sharing, and we do not promise a score on the 1 to 9 scale. The ESAT has no pass mark and we will not invent one.'
          ] },
        { kind: 'source', html: 'Quotations from the UAT-UK ESAT page and specification, the Cambridge ESAT page, and the Cambridge <a class="ag-inline-link" href="https://www.undergraduate.study.cam.ac.uk/apply/how/admission-tests" rel="noopener" target="_blank">Admission tests and assessments</a> page, read 31 October 2026. Score scale details for the ESAT are also explained on Imperial\'s page about understanding ESAT and TMUA scores.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From Year 12 to the October sitting',
    h2: 'Four stages before the ESAT',
    lede: 'The order we suggest for an October sitting at the start of Year 13. A mature applicant using January 2027 runs the same four stages in a few weeks. Every stage is finished by a skill, never by a date.',
    table: { caption: 'Our ESAT mathematics plan', head: ['When', 'Stage', 'How you know it is done'], rows: [
      ['Year 12, spring term', '1. Mathematics 1 made automatic', 'Fractions, surds, standard form, ratio and unit conversions done exactly, without a calculator'],
      ['Year 12, summer term', '2. Mathematics 2 topics all met', 'Every MM heading has been taught at least once, including logs, the trapezium rule and circle theorems'],
      ['Year 13, September', '3. The UAT-UK guides and specimen test, untimed', 'Most answers right with no clock, and each mistake explained'],
      ['Final three weeks', '4. Timed modules, back to back', 'Three 40-minute modules in a row with no blanks left']
    ] },
    left: { h3: 'If the sitting is January 2027', ps: [
      'Only a mature Cambridge applicant in the January round or an Oxford Astrophoria applicant can use it for those universities. Others should check that their courses accept January.',
      'With under ten weeks, skip stage 2 for topics already taught at school and go straight to the guides and timed modules.'
    ] },
    right: { h3: 'If the sitting is next October', ps: [
      'Spend Year 12 on secure AS-level pure in ordinary lessons; test papers can wait until September.',
      'Students also sitting the TMUA for a joint course will find the mathematics overlaps, but the ESAT gives about half the time per question, so speed work is not interchangeable.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'What we teach an ESAT candidate',
    lede: 'Grouped by what the student needs: the mathematics modules, the A Levels behind them, and wider skills for engineering applicants.',
    bands: [
      { num: 'I', h3: 'The mathematics modules', sub: 'Mathematics 1 and 2', courses: [
        { code: 'EP / T / 01', slug: 'tmua-mat-step-preparation-course', title: 'Admissions-test maths', blurb: 'No calculator, multiple choice, under time.' },
        { code: 'EP / T / 02', slug: 'gcse-mathematics-mastery', title: 'GCSE Higher mathematics', blurb: 'The ground Mathematics 1 stands on.' },
        { code: 'EP / T / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For headings M6 and M7.' }
      ] },
      { num: 'II', h3: 'The A Levels behind it', sub: 'A Level and IB', courses: [
        { code: 'EP / A / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A Level Maths', blurb: 'Where Mathematics 2 topics come from.' },
        { code: 'EP / A / 02', slug: 'a-level-further-maths-course', title: 'A Level Further Maths', blurb: 'Asked for by many engineering offers.' },
        { code: 'EP / A / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'Analysis and Approaches covers both maths modules.' }
      ] },
      { num: 'III', h3: 'For future engineers', sub: 'Beyond the test', courses: [
        { code: 'EP / E / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'Unfamiliar problems, the ESAT\'s favourite kind.' },
        { code: 'EP / E / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most engineering courses teach first.' },
        { code: 'EP / E / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'A full refresh for a gap-year applicant.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live ESAT maths classes from summer to January',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday evenings', l: 'One specification heading per lesson.' },
      { time: 'Weekend mornings', l: 'A timed 40-minute module, then the review.' },
      { time: '1-on-1', l: 'A single applicant with a near sitting.' }
    ],
    cells: [
      { h3: 'Exact first', p: 'Answers stay as fractions, surds and powers until the very last line.' },
      { h3: 'Name it, then solve it', p: 'Students say what kind of question it is before they write a symbol.' },
      { h3: 'Ninety seconds', p: 'The clock comes in once accuracy is steady, never in the first weeks.' },
      { h3: 'Groups of 15 to 20', p: 'Comparing two routes to one answer shows which route is quicker.' },
      { h3: 'Our own questions', p: 'We write the practice; students work through UAT-UK\'s free guides on their own.' },
      { h3: 'No score promised', p: 'There is no ESAT pass mark, and we name no target on the 1 to 9 scale.' }
    ]
  },

  projectsH2: 'Work our students have published',
  projectsLede: 'Some of the maths, code and machine-learning projects our students have built and shared. More are in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews quoted word for word from our Google business profile.',

  fees: {
    h2: 'Fees',
    lede: 'The ESAT fee is paid to UAT-UK, varies with the test centre, and is covered in full by a bursary for eligible UK candidates. Our classes are a separate monthly fee with no joining charge, and most ESAT students stop once their sitting is over.',
    free: ['A free first class', 'Five of our Mathematics 2 questions, worked together', 'No card details needed'],
    group: ['Groups of 15 to 20', 'One teacher all term', 'Timed modules marked', 'Monthly, stop after the sitting'],
    one: ['One applicant, one teacher', 'Planned from your weakest headings', 'For a sitting weeks away']
  },

  faq: {
    eyebrow: 'ESAT questions',
    h2: 'What ESAT applicants and parents ask',
    items: [
      { q: 'What is the ESAT?', a: 'The Engineering and Science Admissions Test, a computer-based test run by UAT-UK at Pearson test centres. Cambridge and Imperial, among others, use it for engineering, physical and natural sciences and veterinary medicine courses.' },
      { q: 'What replaced the ENGAA and NSAA?', a: 'The ESAT. UAT-UK still publishes ENGAA and NSAA papers from 2016 to 2023 as practice, because they contain questions of the type found in the ESAT, and marks the questions that fall outside the ESAT specification.' },
      { q: 'How long is the ESAT?', a: 'Each module lasts 40 minutes and has 27 multiple-choice questions. Most candidates sit three modules, so the test is 120 minutes long; a course that asks for only Mathematics 1 and Mathematics 2, such as Imperial Design Engineering, means 80 minutes.' },
      { q: 'Is Mathematics 1 compulsory in the ESAT?', a: 'Yes. UAT-UK says all candidates need to sit Mathematics 1, and its specification says every other module assumes Mathematics 1 content. Whether you also sit Mathematics 2 depends on the course.' },
      { q: 'Can you use a calculator in the ESAT?', a: 'No. The specification states that calculators may not be used, and the only aid is an erasable booklet for rough work. That is why exact arithmetic with fractions and surds matters so much.' },
      { q: 'Is there negative marking in the ESAT?', a: 'No. The specification says each correct answer scores one mark and nothing is deducted for an incorrect answer, so a candidate should answer every question before a module closes.' },
      { q: 'When is the ESAT for 2027 entry?', a: 'UAT-UK gives a week in each window: 12 to 16 October 2026, which Cambridge and Oxford applicants use, and 4 to 8 January 2027. Imperial says January bookings close at 6pm UK time on 21 December 2026.' },
      { q: 'What is a good ESAT score?', a: 'Each module gets its own score between 1 and 9, given to one decimal place, and UAT-UK sets no pass mark. Cambridge says almost no one gets full marks and that a strong performance is usually needed for interview, but publishes no target figure.' },
      { q: 'Do I need an ESAT tutor?', a: 'UAT-UK recommends familiarity with the format, a check of the specification, and the specimen test under timed conditions. A class helps most when Mathematics 2 topics have not been taught yet or when working without a calculator is slow.' },
      { q: 'What days are your classes on?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with UAT-UK?', a: 'No. We are an independent online school with no link to UAT-UK, Pearson or any university on this page. Every candidate registers, picks modules and pays UAT-UK directly.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Other pages for engineering and science applicants',
    lede: 'The school mathematics the modules draw on, and stretch beyond it.',
    items: [
      { href: '/a-level-maths-tuition-online', label: 'A Level Maths tuition online', p: 'The pure mathematics that Mathematics 2 tests.' },
      { href: '/further-maths-tuition-online', label: 'Further Maths tuition online', p: 'Outside the ESAT, inside most engineering offers.' },
      { href: '/ib-maths-tuition-online', label: 'IB Maths tuition online', p: 'IB candidates aiming at Cambridge or Imperial engineering.' },
      { href: '/ukmt-maths-challenge-tutoring', label: 'UKMT maths challenge tutoring', p: 'Fast multiple-choice problem solving, a year or two earlier.' },
      { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad', p: 'For applicants who want harder problems than any test sets.' },
      { href: '/maths-tuition-in-london', label: 'Maths tuition in London', p: 'Live lessons for London sixth formers, wherever they apply.' }
    ]
  },

  start: {
    h2: 'Book a free ESAT maths class',
    lede: 'Tell us the courses you are applying for and the sitting you have booked. In the free class we work through five of our Mathematics 2 questions with you and point out which specification headings need the most time.',
    readFirst: 'If you would like to look around first, see <a class="ag-inline-link" href="/courses">the course list</a> or how a lesson runs on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'Classes are taught live from India and timetabled in UK time. From a UK mobile, WhatsApp usually gets the fastest reply.',
    formNote: 'Free, with no payment details; we reply once to agree a time.'
  },

  footer: {
    cols: [
      { h4: 'School mathematics', links: [
        { href: '/a-level-maths-tuition-online', label: 'A Level Maths tuition' },
        { href: '/further-maths-tuition-online', label: 'Further Maths tuition' },
        { href: '/ib-maths-tuition-online', label: 'IB Maths tuition' },
        { href: '/ukmt-maths-challenge-tutoring', label: 'UKMT challenges' }
      ] },
      { h4: 'Courses', links: [
        { href: '/courses/a-level-maths-course-pure-mechanics-statistics', label: 'A Level Maths' },
        { href: '/courses/a-level-further-maths-course', label: 'A Level Further Maths' },
        { href: '/courses/tmua-mat-step-preparation-course', label: 'Admissions-test maths' },
        { href: '/coding-classes-in-united-kingdom', label: 'All UK pages' }
      ] }
    ],
    bottomRight: 'Exact until the last line'
  },

  personalityCss: `
.ag-root.ag-ep .ag-hero h1 { letter-spacing: -0.012em; max-width: 24ch; }
.ag-root.ag-ep .ag-capsule { border-left-width: 5px; padding-left: 1.2rem; }
.ag-root.ag-ep .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ep .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ep .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-ep .ag-three h3 { letter-spacing: -0.004em; }
.ag-root.ag-ep .ag-steps li { line-height: 1.62; }
.ag-root.ag-ep .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'ESAT facts read raw on 31 October 2026 from UAT-UK (esat-tmua.ac.uk ESAT page: sittings 12 to 16 October 2026 and 4 to 8 January 2027 with the Cambridge and Oxford January exceptions; Mathematics 1 compulsory; modules fixed at booking; clash rule; per-module score 1 to 9 to one decimal place; no pass mark; five modules of 27 questions and 40 minutes; 120 minutes for most; no calculator; no penalty; preparation advice; bursaries cover the full cost; four universities named; registration warning; results in about four weeks), the ESAT preparation materials page (guides per module; ENGAA and NSAA 2016 to 2023), the ESAT Content Specification for October 2026 and January 2027 (separate timing; erasable booklet; Mathematics 1 assumed by all modules; M1 to M7 and MM1 to MM8 headings; change of base, first principles and inflexion exclusions), Imperial\'s ESAT page (departments, module table, windows, China dates, booking times, seven universities, first score only) and Cambridge\'s ESAT and admission tests pages (courses, module rules, bursary and access deadlines, almost no one gets full marks, sharing prohibited).',
    localProject: 'An ESAT mathematics lesson of our own on exact work without a calculator: the surd sum root 48 plus root 27 = 7 root 3; the disguised quadratic 4^x - 6(2^x) + 8 = 0 (x = 1 or 2); a two-strip trapezium estimate of 3 against the exact 8/3 for y = x^2 on [0, 2], an overestimate because the curve is convex; and the ambiguous case a = 5, b = 7, A = 30 degrees giving sin B = 0.7 and two triangles. With our pacing arithmetic of about 1 minute 29 seconds a question, module minutes by course, and seven original practice questions. Lesson family: exact arithmetic without a calculator, at ninety seconds a question.',
    requiredMentions: ['All modules will assume knowledge of the content of Mathematics 1', 'about 1 minute 29 seconds', 'Imperial: Dyson School of Design Engineering', 'change of base formula will not be set', 'Astrophoria Foundation Year', '12 to 13 October 2026', 'Almost no one gets full marks.', 'might make your application invalid', 'sin B = 7 &times; sin 30&deg; / 5 = 0.7', 'MM8 Graphs of functions', 'Exact until the last line'],
    sources: [
      { claim: 'ESAT sittings, modules, timing, scoring, no calculator, preparation advice, bursaries, user universities and results timing.', url: 'https://esat-tmua.ac.uk/about-the-tests/esat-test/' },
      { claim: 'ESAT guides per module and the ENGAA and NSAA practice archive.', url: 'https://esat-tmua.ac.uk/esat/' },
      { claim: 'Content specification for October 2026 and January 2027: topic headings, exclusions and marking.', url: 'https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/05/03165424/ESAT_Content_Specification.pdf' },
      { claim: 'Imperial departments, module table, windows, China dates, booking times and first-score rule.', url: 'https://www.imperial.ac.uk/study/apply/undergraduate/process/admissions-tests/esat/' },
      { claim: 'Cambridge courses, module rules, booking, bursary and access deadlines.', url: 'https://www.undergraduate.study.cam.ac.uk/apply/how/science-engineering-admission-test' },
      { claim: 'Cambridge statements on full marks, completion, interview shortlisting and sharing questions.', url: 'https://www.undergraduate.study.cam.ac.uk/apply/how/admission-tests' }
    ],
    rejectedClaims: [
      'Test fees: UAT-UK prints them by test centre region; not printed here, and no currency is typed on the page.',
      'Oxford ESAT courses: ox.ac.uk returned HTTP 403 on 31 October 2026 and was not retried; Oxford is named only as UAT-UK and Imperial name it.',
      'Durham, LSE and Warwick as ESAT users: they appear on Imperial\'s list but not on UAT-UK\'s; the page reports the discrepancy rather than choosing.',
      'Any ESAT, ENGAA or NSAA question: not reproduced; the free archive is pointed to and our questions are labelled ours.',
      'Teaching of the Biology and Chemistry modules: we do not offer it and the page says so.',
      'Any target or typical score: none is published by UAT-UK or Cambridge; none invented.',
      'Any affiliation with UAT-UK, Pearson or any university: none, stated on the page.'
    ]
  }
};
