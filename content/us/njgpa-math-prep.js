'use strict';
// NJGPA math prep (ag- state-test door; UK and US exams cluster, row US028). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from the New
// Jersey Department of Education (nj.gov/education); copies in keyword-research-2026-09/uk-us-gap/src/njgpa-math-prep/:
//  - Overview 2025-2026 NJGPA-A: "Students in Grade 11"; satisfies the graduation assessment requirement "while maintaining
//    multiple pathways for students who do not pass, including retesting, approved substitute assessments, and the
//    portfolio appeal process"; computer-based on district-supplied devices.
//  - Preparing Our Students for Success 2026 NJGPA-A flyer: "the mathematics component is aligned to Algebra I and Geometry
//    standards"; 2026 window "March 16 to April 1, 2026".
//  - NJGPA-A Blueprints (last updated 08/12/2026): mathematics minimum total items 40; Algebra 1 total 20 to 24 (Algebra 10
//    to 12, Functions 10 to 12, Numbers 0 to 2*, Statistics and Probability 0 to 2*); Geometry total 16 to 20 (Similarity,
//    Right Triangles, and Trigonometry 10 to 12; Congruence, Geometric Measurement and Dimension, & Circles 6 to 8*);
//    "* Aggregate reporting only".
//  - Units Testing Times: NJGPA-A Mathematics 75 + 75 = 150 minutes.
//  - NJSLA-A and NJGPA-A FAQ (last updated 09/23/2026): "The NJGPA-A was first administered to students in the Class of
//    2027."; first participation in grade 11; second and third pathways; calculator: "For all end-of-course assessments and
//    the NJGPA-A, students have access to Desmos graphing calculators and the TI84+ graphing calculator"; the math unit
//    "is 150 minutes long and is divided into two sessions of 75 minutes each"; answers changeable only within a session;
//    NJGPA-A has two performance levels; "Not Yet Graduation Ready"; reporting dates Fall 2026 NJGPA-A December 9, 2026 and
//    Spring 2027 NJGPA-A April 23, 2027; a student can be Within Expectations in every category and still Not Yet
//    Graduation Ready; math "only machine-scorable item types".
//  - SBE resolution, August 5, 2026: overall scale 300-650, passing cut 450, theta -0.450 for mathematics.
//  - Broadcast, August 5, 2026, Graduation Ready Cut Scores: first pathway "≥ 450 (Graduation Ready)"; second pathway math
//    list: ACT Math 17, Accuplacer Next-Generation QAS 250, PSAT10 Math Section or PSAT/NMSQT Math Section 420, SAT Math
//    Section 440 (plus older tests "no longer administered"); third pathway Portfolio Appeals for the class of 2027.
//  - Broadcast, September 2, 2026, Fall 2026 NJGPA-A Key Dates: "October 13 through October 28, 2026"; retake must be
//    offered; "LEAs and APSSDs must offer targeted support prior to any student retaking"; "students must receive a valid
//    score in each component of the NJGPA-A prior to accessing the alternative pathways"; class of 2028 grade 11 "must wait
//    until the spring 2027 administration".
//  - Statewide Assessment Testing Schedule 2026-27: Portfolio Appeals "January 4, 2027 through May 3, 2027"; NJGPA-A Spring
//    "March 1, 2027 through March 19, 2027"; Summer "July 19, 2027 through August 3, 2027".
//  - Practicing for the NJGPA-A flyer: on the portal choose "High School" (not 11).
// Dashes written "to"; the symbol ≥ written "at least". No practice-test item reproduced. Category minimums not summed.
// Our own material, labelled: the flagpole shadow similarity example, the ramp trigonometry example, the ten-item practice
// set, the twelve-week junior-year plan, the pathway decision steps.
// Lesson family: similar triangles to right-triangle trigonometry, the single largest Geometry category.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const NJ = 'https://www.nj.gov/education/assessment';
const AD = NJ + '/adaptive';
const BC = 'https://www.nj.gov/education/broadcasts/2026';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'NJGPA MATH', blurb: 'The New Jersey graduation math test, NJGPA-A: Algebra I and Geometry items, the 450 cut on a 300 to 650 scale, the three pathways and the 2026 to 2027 dates, with original practice.' },
  slug: 'njgpa-math-prep',
  code: 'njx',
  accent: '#7E634B',
  accentRationale: 'NJGPA math prep: a walnut brown #7E634B as allocated, 5.25:1 on paper #FBF8F2, a sober graduation tone set apart from the violet of the NJSLA page beside it',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-classes-in-new-jersey', name: 'New Jersey' }],
  routeLabel: 'NJGPA math prep',
  title: 'NJGPA Math Prep: The 450 Graduation Score, Class of 2028',
  description: 'NJGPA math prep for New Jersey juniors: the adaptive NJGPA-A, Algebra I and Geometry items, the 450 cut, the three pathways and the 2027 dates, with practice.',
  ogDescription: 'A score of 450 on a 300 to 650 scale is what New Jersey calls Graduation Ready. What NJDOE publishes about the NJGPA-A math component, the other two pathways and how to prepare.',
  twitterDescription: 'The NJGPA-A math component from NJDOE&rsquo;s own documents, with original practice.',
  pageName: 'NJGPA Math Prep',
  webPageDescription: 'A guide for New Jersey high school students and parents to the mathematics component of the New Jersey Graduation Proficiency Assessment-Adaptive, built from NJDOE&rsquo;s blueprint, FAQ, State Board resolution, cut-score and key-date broadcasts and 2026 to 2027 schedule, with original worked examples and practice.',
  courseDescription: 'Live online Algebra I and Geometry for New Jersey high school students preparing for the NJGPA-A, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'NJGPA math prep',
  navLinks: [
    { href: '#stakes', label: 'Why it matters' },
    { href: '#blueprint', label: 'What is tested' },
    { href: '#score', label: 'The 450 cut' },
    { href: '#pathways', label: 'Pathways' },
    { href: '#dates', label: 'Dates' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New Jersey &middot; Grade 11 &middot; From NJDOE&rsquo;s own documents',
  h1: 'NJGPA math prep for the graduation test',
  lede: 'The NJGPA is not a test about this year&rsquo;s math class. It is New Jersey&rsquo;s graduation proficiency test, sat in grade 11, and its math half is built from Algebra I and Geometry, courses most juniors finished one or two years earlier. Since 2026 it has been the adaptive NJGPA-A, and in August 2026 the State Board set the line at 450. A student who misses it has other routes to a diploma, but the cleanest one is to clear 450 the first time, and that usually means reopening ninth- and tenth-grade math before spring.',
  secondaryCta: { href: '#pathways', label: 'See the three pathways' },
  wa: 'Hello Modern Age Coders, my teenager in New Jersey has the NJGPA in grade 11. Could we book a free first class for the math part?',
  heroNote: 'Live math since 2020 &middot; 10,000+ students &middot; lessons on Eastern Time',
  spec: [
    ['Test', 'NJGPA-A, mathematics component'],
    ['Run by', 'NJ Department of Education'],
    ['Taken in', 'Grade 11'],
    ['Content', 'Algebra I and Geometry'],
    ['Time', 'Two sessions of 75 minutes'],
    ['Graduation Ready', 'A scale score of 450'],
    ['Spring 2027', 'March 1 to March 19'],
    ['Our classes', 'Batch or 1-on-1']
  ],
  capsuleQ: 'In short',
  capsule: 'The NJGPA-A (New Jersey Graduation Proficiency Assessment-Adaptive) is the New Jersey Department of Education&rsquo;s graduation test, taken in grade 11. Its math component covers Algebra I and Geometry, at least 40 items in two 75-minute sessions, and 450 on a 300 to 650 scale is Graduation Ready. Our High School Mathematics course rebuilds that content live online for juniors, either in a group batch or 1-on-1.',

  picks: {
    eyebrow: 'Courses for New Jersey juniors',
    h2: 'Three courses that rebuild the math the NJGPA tests',
    lede: 'Algebra I and Geometry first, then the second-pathway tests if a family wants a backup.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'NJX / 01', title: 'High school math', note: 'Geometry, trigonometry and functions, rebuilt for a junior.' },
      { course: 'algebra-foundations-masterclass', code: 'NJX / 02', title: 'Algebra foundations', note: 'Equations, inequalities and linear functions, the Algebra half of the test.' },
      { course: 'sat-math-prep-course', code: 'NJX / 03', title: 'SAT Math', note: 'A Math Section score of 440 is one of the second-pathway options.' }
    ]
  },

  sections: [
    {
      id: 'stakes', tint: 'tint', eyebrow: 'Why it matters',
      h2: 'What is the NJGPA, and do you need to pass it to graduate?',
      lede: 'It is the test New Jersey uses for its graduation assessment requirement, in English language arts and mathematics. Passing it is the first of three pathways; the other two exist for students who do not reach the cut.',
      body: [
        { kind: 'table', caption: 'The NJGPA-A in NJDOE&rsquo;s own words (Overview 2025-2026, 2026 testing dates flyer and FAQ, read 31 October 2026)', head: ['Question', 'What NJDOE says'], rows: [
          ['Who takes it?', 'Students in grade 11; students first participate in their junior year'],
          ['Which class first took the adaptive version?', 'The NJGPA-A was first administered to students in the Class of 2027'],
          ['What does the math part cover?', 'The mathematics component is aligned to Algebra I and Geometry standards'],
          ['What does the result decide?', 'Whether the student is graduation ready, as one way to meet the graduation assessment requirement'],
          ['What if a student does not pass?', 'Retesting, approved substitute assessments, and the portfolio appeal process'],
          ['How is it taken?', 'Computer-based, on district-supplied devices, with math items that are all machine-scorable']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Old math, new pressure',
          left: [
            'Because the content is Algebra I and Geometry, a junior in Algebra II or Precalculus can be strong in this year&rsquo;s class and rusty on the test. Volume formulas, congruence proofs and slope from two points fade quickly when nobody asks for them.',
            'The first thing we do with an eleventh grader is find out which ninth- and tenth-grade topics have slipped, not reteach the whole of Algebra I.'
          ],
          rightH3: 'Adaptive, like the grade 3 to 8 test',
          right: [
            'The NJGPA-A uses computer adaptive testing in the same way as the younger students&rsquo; NJSLA-A. It adjusts difficulty after groups of items, and answers can be changed only within the same session.',
            'For a junior that means steady, checked work in session 1 matters. Session 2 continues where session 1 ended, and the first session&rsquo;s answers stay locked.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + AD + '/docs/2026_NJGPA-A_Overview.pdf" rel="noopener" target="_blank">Overview 2025-2026: NJGPA-A</a>, <a class="ag-inline-link" href="' + AD + '/docs/2026_NJGPA-A_TestingDates.pdf" rel="noopener" target="_blank">Preparing Our Students for Success 2026: NJGPA-A</a> and the <a class="ag-inline-link" href="' + AD + '/faq.shtml" rel="noopener" target="_blank">NJSLA-A and NJGPA-A FAQ</a>, NJDOE. Modern Age Coders has no link with NJDOE.' }
      ]
    },
    {
      id: 'blueprint', tint: 'deep', eyebrow: 'Blueprint',
      h2: 'What math is on the NJGPA, and how many questions are there?',
      lede: 'At least 40 items, split between an Algebra 1 group of 20 to 24 and a Geometry group of 16 to 20. Within Geometry, similarity, right triangles and trigonometry carry the most items.',
      body: [
        { kind: 'table', caption: 'NJGPA-A Mathematics blueprint (NJDOE, NJGPA-A Blueprints for ELA and Mathematics, last updated August 12, 2026)', head: ['Part', 'Reporting category', 'Minimum items', 'Maximum items'], numCols: [2, 3], rows: [
          ['Algebra 1 (20 to 24 items)', 'Algebra', '10', '12'],
          ['Algebra 1', 'Functions', '10', '12'],
          ['Algebra 1', 'Numbers (aggregate reporting only)', '0', '2'],
          ['Algebra 1', 'Statistics and Probability (aggregate reporting only)', '0', '2'],
          ['Geometry (16 to 20 items)', 'Similarity, Right Triangles, and Trigonometry', '10', '12'],
          ['Geometry', 'Congruence, Geometric Measurement and Dimension, and Circles (aggregate reporting only)', '6', '8']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where the weight sits',
          left: [
            'Three reporting categories hold 10 to 12 items each: Algebra, Functions, and Similarity, Right Triangles, and Trigonometry. Those three deserve most of the preparation time.',
            'Numbers and Statistics and Probability can have as few as zero items. We cover them, but we do not let a junior spend a month on box plots when trigonometry carries far more weight.'
          ],
          rightH3: 'What aggregate reporting only means',
          right: [
            'Categories marked with an asterisk still count toward the overall score, but the student report does not give a separate rating for them. The three larger categories are each rated Above, Within or Below Expectations on the report.',
            'NJDOE&rsquo;s FAQ warns that a student can be Within Expectations in every category and still be Not Yet Graduation Ready, because Within covers a range that includes slightly below the expectation.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + AD + '/gpablueprints.shtml" rel="noopener" target="_blank">NJGPA-A Blueprints for ELA and Mathematics</a>, NJDOE, read 31 October 2026. Minimums and maximums are NJDOE&rsquo;s; we have not added them up.' }
      ]
    },
    {
      id: 'example', tint: 'tint', eyebrow: 'The heaviest Geometry category',
      h2: 'How do similar triangles and trigonometry show up, and how do we teach them?',
      lede: 'As one idea, not two. A right-triangle trigonometry ratio is a similarity fact with a name, so we teach the shadow problem first and the sine button second.',
      body: [
        { kind: 'ol', items: [
          '<b>Our similarity problem.</b> At the same moment, a 1.5 meter student casts a 2 meter shadow and a flagpole casts a 14 meter shadow. How tall is the flagpole?',
          '<b>The reasoning.</b> The sun&rsquo;s rays hit both at the same angle, so the two right triangles are similar and their sides are in proportion: height / shadow is the same for both. 1.5 / 2 = h / 14, so h = 14 x 1.5 / 2 = 10.5 meters.',
          '<b>Our trigonometry problem.</b> A wheelchair ramp rises 0.9 meters over a sloped length of 10.8 meters. What angle does it make with the ground, to the nearest degree?',
          '<b>The reasoning.</b> Rise over sloped length is opposite over hypotenuse, which is sine. sin(x) = 0.9 / 10.8, about 0.0833, so x is about 4.8 degrees, or 5 degrees to the nearest degree, using the inverse sine on the graphing calculator.',
          '<b>The link we want students to see.</b> Every right triangle with this same angle is similar to the ramp, so the ratio 0.0833 is the same for all of them. That is all a trig ratio is.'
        ] },
        { kind: 'p', mt: true, html: 'Both problems are ours, written for teaching. The NJDOE practice test on the New Jersey Assessments Portal shows the real item formats; we do not reproduce its items here.' }
      ]
    },
    {
      id: 'score', tint: 'deep', eyebrow: 'The score',
      h2: 'What is a passing score on the NJGPA math test?',
      lede: '450. The State Board of Education adopted 450 as the Graduation Ready cut for both ELA and mathematics on August 5, 2026, on an overall scale from 300 to 650.',
      body: [
        { kind: 'table', caption: 'NJGPA-A Graduation Ready cut scores (New Jersey State Board of Education resolution, August 5, 2026)', head: ['Item', 'ELA', 'Mathematics'], rows: [
          ['Overall scale', '300 to 650', '300 to 650'],
          ['Scale score passing cut', '450', '450'],
          ['Performance levels', 'Graduation Ready or Not Yet Graduation Ready', 'Graduation Ready or Not Yet Graduation Ready'],
          ['Time for the unit', '150 minutes reading plus 90 minutes writing', '150 minutes, two sessions of 75'],
          ['Calculator', 'Not applicable', 'Desmos graphing and TI84+ in the platform']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two levels only',
          left: [
            'The NJGPA-A has two performance levels, not five. The overall result is a yes or a not yet; the category ratings explain why.',
            'That is why we read the three rated categories on a junior&rsquo;s report before anything else. A Below in Functions is a clearer to-do list than the scale score.'
          ],
          rightH3: 'A graphing calculator throughout',
          right: [
            'NJDOE&rsquo;s FAQ says that for the NJGPA-A students have access to Desmos graphing calculators and the TI84+ graphing calculator within the testing platform.',
            'We teach with Desmos so that graphing a system, finding an intersection or checking a trig answer is automatic by test day, not something learned in the room.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.nj.gov/education/sboe/meetings/agenda/2026/August/public/5c1_Item_C_Resolution_Establish_Proficiency_Cut_Scores_NJGPA_A.pdf" rel="noopener" target="_blank">State Board resolution, August 5, 2026</a>, with calculator and level details from NJDOE&rsquo;s FAQ, both read 31 October 2026.' }
      ]
    },
    {
      id: 'pathways', tint: 'tint', eyebrow: 'Three pathways',
      h2: 'What happens if you do not pass the NJGPA math section?',
      lede: 'There are two more routes for the class of 2027: a menu of alternative tests, then a portfolio appeal. NJDOE&rsquo;s August 5, 2026 broadcast lists the math scores that count.',
      body: [
        { kind: 'table', caption: 'Graduation assessment pathways for mathematics, class of 2027 (NJDOE broadcast, Graduation Ready Cut Scores Established for the NJGPA-A, August 5, 2026)', head: ['Pathway', 'Mathematics requirement'], rows: [
          ['First: NJGPA-A', 'A scale score of at least 450 (Graduation Ready)'],
          ['Second: ACT', 'ACT Math of at least 17'],
          ['Second: Accuplacer', 'Accuplacer Next-Generation QAS of at least 250'],
          ['Second: PSAT', 'PSAT10 Math Section or PSAT/NMSQT Math Section of at least 420'],
          ['Second: SAT', 'SAT Math Section of at least 440'],
          ['Third: Portfolio Appeals', 'Available to the class of 2027; the 2026 to 2027 window runs January 4, 2027 through May 3, 2027']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Take the NJGPA-A first.</b> NJDOE&rsquo;s fall memo says students must receive a valid score in each component of the NJGPA-A prior to accessing the alternative pathways. Skipping it is not an option.',
          '<b>If the math score is under 450, ask about the retake.</b> Schools must offer a retake, and must offer targeted support before it, according to the same memo.',
          '<b>Check scores your child already has.</b> A PSAT or SAT taken for college reasons may already meet a second-pathway number. Ask the counselor whether it can be used.',
          '<b>Use the portfolio only as the last route.</b> It is the third pathway for twelfth graders, with its own guides on NJDOE&rsquo;s graduation requirements page.'
        ] },
        { kind: 'p', mt: true, html: 'The broadcast also lists older tests marked as no longer administered; we have left them out. Requirements are set class by class, so a student in the class of 2028 should confirm the list that NJDOE publishes for that class.' }
      ]
    },
    {
      id: 'dates', tint: 'deep', eyebrow: '2026 to 2027',
      h2: 'When is the NJGPA in 2027?',
      lede: 'The spring 2027 NJGPA-A runs March 1 through March 19, 2027, for grades 11 and 12. There is also a summer administration and, this school year, a fall one already held.',
      body: [
        { kind: 'table', caption: 'NJGPA-A administrations, 2026 to 2027 (NJDOE Statewide Assessment Testing Schedule 2026-27; Fall 2026 key dates memo; FAQ reporting schedule)', head: ['Administration', 'Testing window', 'Results to districts'], rows: [
          ['Fall 2026', 'October 13 through October 28, 2026', 'December 9, 2026'],
          ['Spring 2027', 'March 1, 2027 through March 19, 2027', 'April 23, 2027'],
          ['Summer 2027', 'July 19, 2027 through August 3, 2027', 'Not yet published']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'For the class of 2028',
          left: [
            'NJDOE&rsquo;s fall memo says grade 11 students who are expected to graduate in the class of 2028 must wait until the spring 2027 administration to take the NJGPA-A for the first time.',
            'So this year&rsquo;s juniors get their first attempt in March 2027. A preparation plan that starts in December gives about twelve weeks.'
          ],
          rightH3: 'Seniors and repeaters',
          right: [
            'The schedule notes that students in grade 12 and students repeating grade 11 may take the NJGPA-A if needed to meet the graduation assessment requirement, in the fall and summer windows as well as spring.',
            'Each district sets its own testing days within a window and must offer a make-up date.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + NJ + '/resources/district/statewide_schedule_2627.shtml" rel="noopener" target="_blank">Statewide Assessment Testing Schedule 2026-27</a> and <a class="ag-inline-link" href="' + BC + '/sep/2/Fall2026NewJerseyGraduationProficiencyAssessmentAdaptiveKeyDatesandInformation.pdf" rel="noopener" target="_blank">Fall 2026 NJGPA-A Key Dates and Information</a>, NJDOE, read 31 October 2026.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice',
      h2: 'NJGPA math practice: ten questions of our own',
      lede: 'Algebra I and Geometry at the level of the graduation test, with the reporting category each belongs to. Work them with a graphing calculator open, as on the real platform.',
      body: [
        { kind: 'table', caption: 'Original practice (ours, not NJDOE items), with answers', head: ['Category', 'Question', 'Answer'], rows: [
          ['Algebra', 'Solve 4(x + 3) - 2x = 20.', 'x = 4'],
          ['Algebra', 'Solve the system y = 3x - 5 and y = -x + 7.', '(3, 4)'],
          ['Algebra', 'For which x is 2x - 7 greater than 9?', 'x greater than 8'],
          ['Functions', 'f(x) = x&sup2; - 6x + 5. Where does the graph cross the x-axis?', 'x = 1 and x = 5'],
          ['Functions', 'A value doubles every 3 years from 500. Write a model.', 'V = 500 x 2^(t/3)'],
          ['Functions', 'What is the vertex of y = (x - 2)&sup2; + 3?', '(2, 3)'],
          ['Similarity and trigonometry', 'In a right triangle the legs are 9 and 12. Find the hypotenuse.', '15'],
          ['Similarity and trigonometry', 'cos(x) = 0.6 in a right triangle with hypotenuse 20. Find the adjacent side.', '12'],
          ['Congruence and measurement', 'A cylinder has radius 3 and height 10. Find its volume in terms of pi.', '90 pi'],
          ['Congruence and measurement', 'A circle has center (2, -1) and radius 5. Write its equation.', '(x - 2)&sup2; + (y + 1)&sup2; = 25']
        ] },
        { kind: 'p', mt: true, html: 'NJDOE hosts a free online practice version of the graduation test on its assessments portal. Its flyer for the class of 2027 says to choose &ldquo;High School&rdquo; rather than grade 11 when picking the test, and that the practice tests are for learning the platform and tools rather than for studying content.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan',
      h2: 'How to study for the NJGPA math test in twelve weeks',
      lede: 'Our plan for a junior aiming at the March 1 to March 19, 2027 window, starting in early December.',
      body: [
        { kind: 'ol', items: [
          '<b>Week 1: a diagnostic across the four big areas.</b> Algebra, Functions, Similarity and Trigonometry, and Congruence and Measurement, using our own questions.',
          '<b>Weeks 2 to 4: Algebra and Functions.</b> Linear equations, inequalities and systems; then function notation, quadratics and exponential models.',
          '<b>Weeks 5 to 7: similarity and right-triangle trigonometry.</b> Proportions, the Pythagorean Theorem, sine, cosine and tangent, and their inverses on the calculator.',
          '<b>Week 8: congruence, volume and circles.</b> The smaller Geometry category, kept short but complete.',
          '<b>Weeks 9 and 10: Desmos fluency.</b> Graphing to solve, finding intersections, checking answers by substitution.',
          '<b>Week 11: the portal practice test.</b> As a guest, choosing High School, to learn the item formats and tools.',
          '<b>Week 12: a mock NJGPA in two sittings.</b> Seventy-five minutes each, then rest before the district&rsquo;s test days.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If the plan starts late',
          left: [
            'With four weeks or fewer, we spend almost all of the time on the three rated categories and on calculator fluency, because that is where the items are.'
          ],
          rightH3: 'If a retake is coming',
          right: [
            'We start from the category ratings on the score report, and we keep the second-pathway scores in view so the family knows every option.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'By starting point',
    h2: 'Where to begin, depending on where your teenager is now',
    lede: 'Our reading of the NJGPA-A blueprint against common junior-year situations.',
    table: { caption: 'Starting points (blueprint from NJDOE; advice ours)', head: ['Situation', 'Start with', 'Then'], rows: [
      ['Took Algebra I in grade 8', 'Functions and exponential models', 'Trigonometry and volume'],
      ['Took Algebra I in grade 9', 'Systems and inequalities', 'Similarity and right triangles'],
      ['Struggled in Geometry', 'Similarity and the Pythagorean Theorem', 'Sine, cosine and tangent'],
      ['Strong in Algebra II now', 'Geometry review, circles and volume', 'A timed rehearsal'],
      ['Retaking after a score under 450', 'The categories rated Below', 'Second-pathway options with the counselor']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask the counselor whether your child already has a PSAT, SAT, ACT or Accuplacer score, and what NJDOE lists for your child&rsquo;s graduating class.',
      'Keep the score report. It is the best tool for planning a retake, if one is needed.'
    ] },
    right: { h3: 'For students', ps: [
      'This is ninth- and tenth-grade math. Being good at it again takes weeks, not a year.',
      'Learn the graphing calculator properly; it is in the platform for every question.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses for New Jersey high schoolers',
    lede: 'Algebra I rebuilding, plus the college tests that can stand in as a second pathway.',
    bands: [
      { num: 'I', h3: 'Core', sub: 'The NJGPA content', courses: [
        { code: 'NJX / C / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The Algebra 1 half.' },
        { code: 'NJX / C / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry onward.' },
        { code: 'NJX / C / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The small data strand.' }
      ] },
      { num: 'II', h3: 'Second pathway', sub: 'College tests', courses: [
        { code: 'NJX / P / 01', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'The digital SAT math section.' },
        { code: 'NJX / P / 02', slug: 'act-math-prep-course', title: 'ACT Math', blurb: 'The ACT mathematics test.' },
        { code: 'NJX / P / 03', slug: 'college-math-placement-test-prep-course', title: 'Placement tests', blurb: 'Accuplacer and similar tests.' }
      ] },
      { num: 'III', h3: 'Beyond', sub: 'Senior year', courses: [
        { code: 'NJX / B / 01', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'After the graduation test.' },
        { code: 'NJX / B / 02', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'For the strongest students.' },
        { code: 'NJX / B / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Functions you can program.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Evening and weekend lessons on Eastern Time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weeknights ET', l: 'After practice, rehearsal or a part-time job.' },
      { time: 'Weekends', l: 'Longer review lessons from January to March.' },
      { time: '1-on-1', l: 'For a retake, starting from the score report.' }
    ],
    cells: [
      { h3: 'Algebra I and Geometry', p: 'The content the state names.' },
      { h3: 'Trig from similarity', p: 'Ratios explained, not memorized.' },
      { h3: 'Desmos daily', p: 'The calculator in the platform.' },
      { h3: 'Category-led', p: 'Built from Above, Within and Below.' },
      { h3: 'Pathway aware', p: 'SAT, ACT, PSAT and Accuplacer options explained.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Our older students often put their algebra into code. See some of it on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents have written about us on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Billed monthly in US dollars, cancel any month: a typical junior studies from December to the March window and then stops.',
    free: ['A free first class', 'Bring any NJGPA or PSAT report', 'No card needed'],
    group: ['Fifteen to twenty students', 'One teacher through the spring', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Built around a retake date', 'Flexible times']
  },

  faq: {
    eyebrow: 'New Jersey families ask',
    h2: 'The NJGPA math test, answered',
    items: [
      { q: 'What is the NJGPA?', a: 'The New Jersey Graduation Proficiency Assessment, now the adaptive NJGPA-A, is New Jersey\'s graduation test in English language arts and mathematics, first taken in grade 11. Its math component is aligned to Algebra I and Geometry standards.' },
      { q: 'What is a passing score on the NJGPA math?', a: 'A scale score of 450, on an overall scale from 300 to 650, is Graduation Ready. The State Board of Education adopted that cut for both ELA and math on August 5, 2026.' },
      { q: 'When is the NJGPA in 2027?', a: 'NJDOE\'s schedule sets the spring 2027 window from March 1 through March 19, 2027, with a summer window from July 19 through August 3, 2027. Districts pick their own days within each window.' },
      { q: 'Do you have to pass the NJGPA to graduate in New Jersey?', a: 'Passing it is the first pathway to the graduation assessment requirement. Students who do not reach 450 can retest, use an approved alternative test score, or, as a third pathway, a portfolio appeal.' },
      { q: 'What SAT score replaces the NJGPA math?', a: 'For the class of 2027, NJDOE\'s list includes an SAT Math Section score of at least 440. It also lists ACT Math of 17, PSAT10 or PSAT/NMSQT Math Section of 420 and Accuplacer Next-Generation QAS of 250, but a valid NJGPA-A score must come first.' },
      { q: 'How many questions are on the NJGPA math test?', a: 'NJDOE\'s blueprint gives a minimum of 40 items: 20 to 24 from Algebra 1 and 16 to 20 from Geometry, with similarity, right triangles and trigonometry the largest Geometry category.' },
      { q: 'How long is the NJGPA math section?', a: 'It is a 150-minute unit taken as two sessions of 75 minutes each. Answers can be changed only within the session in which they were given.' },
      { q: 'Is a calculator allowed on the NJGPA math?', a: 'Yes. NJDOE says students have Desmos graphing calculators and the TI84+ graphing calculator inside the testing platform for the NJGPA-A.' },
      { q: 'Where is the NJGPA math practice test?', a: 'NJDOE hosts it on its assessments portal; open the practice tests and sign in as a guest. NJDOE\'s flyer says to choose High School rather than grade 11 for the graduation test.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We set every time on Eastern Time.' },
      { q: 'Is Modern Age Coders part of the NJGPA program?', a: 'No. We are an independent tutoring company and have nothing to do with NJDOE, New Jersey high schools or the test vendor. Everything we say about the test comes from NJDOE\'s own public documents, which we link.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'High school math and the second-pathway tests.',
    items: [
      { href: '/online-math-tutor-10th-grade', label: 'Tenth grade math tutoring', p: 'Geometry year for most students.' },
      { href: '/online-math-tutor-11th-grade', label: 'Eleventh grade math tutoring', p: 'The NJGPA year.' },
      { href: '/sat-math-tutoring-online', label: 'SAT math tutoring', p: 'One of the second-pathway tests.' },
      { href: '/act-math-tutoring-online', label: 'ACT math tutoring', p: 'Another second-pathway option.' },
      { href: '/trigonometry-tutoring-online', label: 'Trigonometry tutoring', p: 'For the largest Geometry category.' },
      { href: '/coding-classes-in-new-jersey', label: 'Coding classes in New Jersey', p: 'Coding and AI for New Jersey teens.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your teenager&rsquo;s graduating class and send any score report you have. The teacher starts with the weakest of the three rated categories in the first lesson.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look through all our <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'Teachers work from India on a schedule fixed in Eastern Time, so evening and weekend lessons fit around a New Jersey school week. Write to us on WhatsApp for the fastest reply.',
    formNote: 'No charge and no card for the first class.'
  },

  footer: {
    cols: [
      { h4: 'High school', links: [
        { href: '/online-math-tutor-9th-grade', label: 'Grade 9 math' },
        { href: '/online-math-tutor-10th-grade', label: 'Grade 10 math' },
        { href: '/psat-math-prep', label: 'PSAT math' },
        { href: '/accuplacer-math-prep', label: 'Accuplacer math' }
      ] },
      { h4: 'New Jersey and the US', links: [
        { href: '/coding-classes-in-new-jersey', label: 'New Jersey' },
        { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '450 on 300 to 650'
  },

  personalityCss: `
.ag-root.ag-njx .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-njx .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-njx .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-njx .ag-table td.ag-num { font-variant-numeric: tabular-nums; text-align: center; }
.ag-root.ag-njx .ag-steps li { padding-bottom: 7px; }
`,

  dossier: {
    curriculumAuthority: 'New Jersey Department of Education, read raw 31 October 2026: Overview 2025-2026 NJGPA-A; 2026 NJGPA-A testing dates flyer; NJGPA-A Blueprints; Units Testing Times; NJSLA-A and NJGPA-A FAQ; State Board resolution of August 5, 2026 (300 to 650 scale, 450 cut); broadcast of August 5, 2026 on Graduation Ready cut scores and the three pathways; broadcast of September 2, 2026 on fall 2026 key dates; Statewide Assessment Testing Schedule 2026-27; Practicing for the NJGPA-A flyer.',
    localProject: 'Our flagpole shadow example (1.5 / 2 = h / 14 gives 10.5 meters), our ramp example (sin x = 0.9 / 10.8 gives about 5 degrees), the link from similarity to trig ratios, our ten-item practice set by category, our twelve-week plan and starting-point table. Lesson family: similar triangles to right-triangle trigonometry.',
    requiredMentions: ['The NJGPA-A was first administered to students in the Class of 2027', 'Similarity, Right Triangles, and Trigonometry', 'Accuplacer Next-Generation QAS of at least 250', 'SAT Math Section of at least 440', 'January 4, 2027 through May 3, 2027', 'March 1, 2027 through March 19, 2027', 'July 19, 2027 through August 3, 2027', 'Desmos graphing and TI84+', 'Graduation Ready or Not Yet Graduation Ready', 'so h = 14 x 1.5 / 2 = 10.5 meters', 'must wait until the spring 2027 administration', 'a valid score in each component of the NJGPA-A'],
    sources: [
      { claim: 'NJGPA-A Blueprints for ELA and Mathematics.', url: AD + '/gpablueprints.shtml' },
      { claim: 'State Board resolution establishing NJGPA-A cut scores, August 5, 2026.', url: 'https://www.nj.gov/education/sboe/meetings/agenda/2026/August/public/5c1_Item_C_Resolution_Establish_Proficiency_Cut_Scores_NJGPA_A.pdf' },
      { claim: 'Graduation Ready cut scores and alternative assessments, August 5, 2026.', url: BC + '/aug/5/GraduationReadyCutScoresEstablishedfortheNewJerseyGraduationProficiencyAssessmentAdaptiveNJGPAAEnglishLanguageArtsELAandMathematicsandAlternativeAssessments.pdf' },
      { claim: 'Fall 2026 NJGPA-A key dates and information.', url: BC + '/sep/2/Fall2026NewJerseyGraduationProficiencyAssessmentAdaptiveKeyDatesandInformation.pdf' },
      { claim: 'Statewide Assessment Testing Schedule 2026-27.', url: NJ + '/resources/district/statewide_schedule_2627.shtml' },
      { claim: 'NJSLA-A and NJGPA-A FAQs.', url: AD + '/faq.shtml' }
    ],
    rejectedClaims: [
      'Second-pathway requirements for the class of 2028: not published in what we read; the page gives the class of 2027 list and tells families to confirm their own class.',
      'Statewide NJGPA-A pass rates for spring 2026: not quoted.',
      'A total number of math items: NJDOE prints a minimum of 40 and category ranges; we did not sum the ranges into a maximum.',
      'Portfolio appeal details for mathematics: the guides on the graduation requirements page are for the class of 2026; not summarized.',
      'The New Jersey Assessments Portal (nj.portal.cambiumast.com) was not used as a source; nothing quoted from it.',
      'Score or graduation promises for our classes: refused. Any affiliation with NJDOE, a district or the test vendor: none.'
    ]
  }
};
