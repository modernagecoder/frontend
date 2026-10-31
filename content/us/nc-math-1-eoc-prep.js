'use strict';
// NC Math 1 and NC Math 3 EOC prep (ag- state-test door; UK and US exams cluster, row US033). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Sibling algebra-1-eoc-prep covers NC Math 1 in one table row
// among four states; this page takes both North Carolina math EOCs in depth with a different lesson family. Every fact read
// raw with curl on 31 October 2026 from the North Carolina Department of Public Instruction (dpi.nc.gov); copies in
// keyword-research-2026-09/uk-us-gap/src/nc-math-1-eoc-prep/:
//  - End-of-Course NC Math 1 and NC Math 3 Tests, North Carolina Test Specifications (April 2026): NCSCOS for Mathematics
//    "adopted by the North Carolina State Board of Education in June 2016"; Table 1 domain weights (Number and Quantity and
//    Algebra NC Math 1 36 to 40, NC Math 3 32 to 36; Functions 32 to 36 and 32 to 36; Geometry 8 to 12 and 20 to 24;
//    Statistics and Probability 18 to 20 and 8 to 12); Table 2 DOK (both courses DOK 1 20 to 30, DOK 2 60 to 65, DOK 3 8 to
//    12); Table 3 operational 50, field test 10, "Total Items 60" for each; "The EOC NC Math 3 Test will include only
//    calculator active items."; Table 4 NC Math 1 inactive 15, active 35, NC Math 3 active 50; "All items will be worth one
//    point each."; "three hours (180 minutes) for most students"; maximum "four hours (240 minutes)"; "last five days
//    (4x4/semester courses/summer school) or the last ten days (traditional yearlong schedule)"; English only; online via
//    NCTest; Online Assessment Tutorial at least once at school; "Students in NC Math 1 and NC Math 3 must be provided a
//    graphing calculator."; graph paper, scratch paper on request; released forms; ALDs adopted August 2019.
//  - State Tests page: "The EOC assessments are available for Biology, English II, NC Math 1, and NC Math 3."; "Students
//    enrolled for credit in courses where EOC assessments are required must take the appropriate EOC assessment at the
//    completion of the course."; "Per SBE policy TEST-003, schools are to use results from all EOC assessments as at least
//    twenty (20) percent of the student's final grade for each respective course."; "All EOC assessments are required to be
//    administered online" with exceptions.
//  - End-of-Course page: released forms for NC Math 1 and NC Math 3 with graph paper and graphing calculator; Desmos
//    "Graphing Calculator (Grade 8 and high school)"; example gridded response space.
//  - Test Coordinator's Policies and Procedures Handbook 2026-27: 16 N.C. Admin. Code 06G .0315 (a) reporting list "(5)
//    grade 11 EOC assessments in NC Math 1, NC Math 3, and EOC Biology"; ACCT-021 "all eligible students in membership at
//    grade 8 enrolled for credit in NC Math 1 shall take the EOC assessment at the completion of the course" and "These
//    students will take the NC Math 3 EOC assessment for federal accountability in high school."; statute G.S.
//    115C-174.12(a)(4) "within the final five instructional days of the semester for semester courses".
// Blocked: simbli.eboardsolutions.com (Achievement Level Descriptors) returned an Incapsula block; the EOC score report
// guide link returned Page not Found. No achievement level names or scale ranges printed.
// Dashes written "to". No released-form item reproduced (NCDPI forbids use for personal or financial gain).
// Our own material, labelled: the NC Math 1 calculator-inactive elimination example (tickets), the NC Math 3 circle by
// completing the square (center (3, -2), radius 5), the side-by-side course comparison reading, the twelve-item practice
// set, the two study plans.
// Lesson family: completing the square, from NC Math 1 quadratics to NC Math 3 circles.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const DPI = 'https://www.dpi.nc.gov';
const ST = DPI + '/districts-schools/accountability-and-testing/state-tests';
const SPECS = DPI + '/documents/accountability/testing/eoc/eoc-nc-math-1-and-nc-math-3-test-specifications';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'NC MATH 1 AND 3 EOC', blurb: 'North Carolina&rsquo;s two math end-of-course tests side by side: NC Math 1 and NC Math 3 items, calculator rules, domain weights, the 20 percent grade rule, timing and original practice.' },
  slug: 'nc-math-1-eoc-prep',
  code: 'ne',
  accent: '#74588B',
  accentRationale: 'NC Math 1 and 3 EOC prep: a heather purple #74588B as allocated, 5.64:1 on paper #FBF8F2, clearly apart from the olive of the NC EOG page and the violet-grey of New Jersey',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-and-ai-classes-in-north-carolina', name: 'North Carolina' }],
  routeLabel: 'NC Math 1 EOC prep',
  title: 'NC Math 1 EOC Prep, With NC Math 3: The North Carolina Tests',
  description: 'NC Math 1 EOC prep, plus NC Math 3: items, calculator-inactive rules, domain weights, the 20 percent grade rule and timing from NCDPI, with original practice.',
  ogDescription: 'Sixty items, a calculator-free section only in NC Math 1, and a result worth at least a fifth of the course grade. North Carolina&rsquo;s two math EOCs compared from NCDPI&rsquo;s April 2026 specifications.',
  twitterDescription: 'NC Math 1 and NC Math 3 EOC tests from NCDPI&rsquo;s own specifications, with original practice.',
  pageName: 'NC Math 1 EOC Prep, With NC Math 3',
  webPageDescription: 'A guide for North Carolina high school and middle school families to the NC Math 1 and NC Math 3 end-of-course tests, built from NCDPI&rsquo;s April 2026 test specifications, State Tests and End-of-Course pages and the 2026 to 2027 Test Coordinator&rsquo;s Handbook, with original worked examples and practice.',
  courseDescription: 'Live online NC Math 1 and NC Math 3 content for North Carolina students, from linear and quadratic functions to circles and polynomial functions, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'NC Math 1 and 3 EOC prep',
  navLinks: [
    { href: '#compare', label: 'Math 1 vs Math 3' },
    { href: '#weights', label: 'Weights' },
    { href: '#grade', label: 'Course grade' },
    { href: '#square', label: 'Worked examples' },
    { href: '#window', label: 'When' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'North Carolina &middot; NC Math 1 and NC Math 3 &middot; From NCDPI&rsquo;s specifications',
  h1: 'NC Math 1 EOC prep, and NC Math 3 after it',
  lede: 'North Carolina has two math end-of-course tests, and they behave quite differently. NC Math 1 includes a section with the calculator switched off; NC Math 3 has none at all and leans much harder on geometry. Both have 60 items, both count for at least 20 percent of the course grade, and for many students the second one is the state&rsquo;s high school accountability test. Knowing which test your teenager faces, and what each one weights, is the start of preparing well.',
  secondaryCta: { href: '#compare', label: 'Compare the two tests' },
  wa: 'Hello Modern Age Coders, my child in North Carolina has the NC Math 1 (or NC Math 3) EOC this year. Could we book a free first class?',
  heroNote: 'Live math since 2020 &middot; 10,000+ students &middot; lessons on Eastern Time',
  spec: [
    ['Tests', 'EOC NC Math 1 and NC Math 3'],
    ['Run by', 'NCDPI'],
    ['Items', '60 each, 50 scored'],
    ['Calculator', 'Graphing; Math 1 has 15 inactive items'],
    ['Time', 'About 3 hours; 4 at most'],
    ['Course grade', 'At least 20 percent'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The NC Math 1 and NC Math 3 End-of-Course (EOC) tests are NCDPI&rsquo;s state exams for those two courses, taken online at the end of the course. Each has 60 items, 50 of them scored, with a graphing calculator; NC Math 1 also has 15 calculator-inactive items. Results count for at least 20 percent of the final course grade. Our Algebra Foundations course covers NC Math 1 live online, with group batches and 1-on-1 options, and our high school course carries on to NC Math 3.',

  picks: {
    eyebrow: 'Courses for North Carolina students',
    h2: 'Three courses mapped to NC Math 1 and NC Math 3',
    lede: 'Algebra for NC Math 1, the wider high school sequence for NC Math 3, and statistics for the share both tests give it.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'NE / 01', title: 'Algebra foundations', note: 'Linear, quadratic and exponential functions: the NC Math 1 core.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'NE / 02', title: 'High school math', note: 'Polynomials, circles and trigonometry for NC Math 3.' },
      { course: 'statistics-probability-maths-course', code: 'NE / 03', title: 'Statistics and probability', note: 'Up to a fifth of NC Math 1, a smaller share of NC Math 3.' }
    ]
  },

  sections: [
    {
      id: 'compare', tint: 'tint', eyebrow: 'Side by side',
      h2: 'What is the difference between the NC Math 1 and NC Math 3 EOC?',
      lede: 'Same length, same scoring, different calculator rules and different content weights. NCDPI writes one specification for both, which makes the comparison exact.',
      body: [
        { kind: 'table', caption: 'EOC NC Math 1 and NC Math 3 compared (NCDPI, End-of-Course NC Math 1 and NC Math 3 Tests, North Carolina Test Specifications, April 2026, Tables 3 and 4)', head: ['Feature', 'NC Math 1', 'NC Math 3'], rows: [
          ['Operational items', '50', '50'],
          ['Field test items', '10', '10'],
          ['Total items', '60', '60'],
          ['Calculator inactive operational items', '15', 'None'],
          ['Calculator active operational items', '35', '50'],
          ['Points per item', 'One', 'One'],
          ['Calculator', 'Graphing, in the calculator-active section', 'Graphing, throughout'],
          ['Estimated time', 'Three hours (180 minutes) for most students', 'Three hours (180 minutes) for most students'],
          ['Maximum time', 'Four hours (240 minutes), except documented accommodations', 'Four hours (240 minutes), except documented accommodations']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'NC Math 1: the calculator-free fifteen',
          left: [
            'Fifteen of the 50 scored NC Math 1 items are calculator inactive. That is where simplifying expressions, solving linear equations, working with exponents and factoring are tested without the graphing calculator to check the answer.',
            'Students who rely on Desmos all year often lose points here first. We teach every NC Math 1 skill by hand before we show the calculator shortcut.'
          ],
          rightH3: 'NC Math 3: the calculator never leaves',
          right: [
            'NCDPI&rsquo;s specification is plain: &ldquo;The EOC NC Math 3 Test will include only calculator active items.&rdquo; Every one of the 50 scored items allows the graphing calculator.',
            'That changes the skill: not avoiding the calculator but using it well, to graph a polynomial, find intersections and check a trigonometric answer quickly, so time is left for the reasoning items.'
          ] },
        { kind: 'source', html: 'Source: the NCDPI <a class="ag-inline-link" href="' + SPECS + '" rel="noopener" target="_blank">EOC NC Math 1 and NC Math 3 specifications</a> dated April 2026, which we downloaded on 31 October 2026. We are an independent school with no connection to NCDPI.' }
      ]
    },
    {
      id: 'weights', tint: 'deep', eyebrow: 'Domain weights',
      h2: 'What is on the NC Math 1 EOC, and what is on NC Math 3?',
      lede: 'Four domains of North Carolina&rsquo;s math standards for high school, adopted in June 2016. The big shift from NC Math 1 to NC Math 3 is geometry, which more than doubles.',
      body: [
        { kind: 'table', caption: 'Domain weights for the two math EOCs (Table 1 of NCDPI&rsquo;s April 2026 EOC specifications)', head: ['Domain', 'NC Math 1', 'NC Math 3'], rows: [
          ['Number and Quantity and Algebra', '36 to 40%', '32 to 36%'],
          ['Functions', '32 to 36%', '32 to 36%'],
          ['Geometry', '8 to 12%', '20 to 24%'],
          ['Statistics and Probability', '18 to 20%', '8 to 12%']
        ] },
        { kind: 'table', mt: true, caption: 'Share of EOC items at each Depth of Knowledge level (Table 2 of the same EOC specifications)', head: ['Course', 'DOK 1', 'DOK 2', 'DOK 3'], rows: [
          ['NC Math 1', '20 to 30%', '60 to 65%', '8 to 12%'],
          ['NC Math 3', '20 to 30%', '60 to 65%', '8 to 12%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the NC Math 1 weights',
          left: [
            'Algebra and functions together dominate NC Math 1. Statistics and Probability, at 18 to 20 percent, is larger than Geometry, at 8 to 12 percent, which surprises families who think of geometry as part of every math course.',
            'In practice that means scatter plots, lines of best fit, residuals and two-way tables deserve real lesson time in NC Math 1.'
          ],
          rightH3: 'Reading the NC Math 3 weights',
          right: [
            'Geometry rises to 20 to 24 percent in NC Math 3, while statistics falls to 8 to 12. Circles, their equations and their arcs and angles become a central topic.',
            'The Depth of Knowledge profile is identical for both tests, with 60 to 65 percent at DOK 2. Most items ask for a decision or two linked steps, not recall.'
          ] }
      ]
    },
    {
      id: 'grade', tint: 'tint', eyebrow: 'Why it counts',
      h2: 'Does the NC Math 1 EOC count toward your grade?',
      lede: 'Yes. Under State Board policy TEST-003, schools use results from all EOC assessments as at least twenty percent of the student&rsquo;s final grade for the course.',
      body: [
        { kind: 'table', caption: 'What the EOC decides, in NCDPI&rsquo;s and the State Board&rsquo;s words (NCDPI State Tests page and the coordinators&rsquo; handbook for this school year)', head: ['Rule', 'Source wording, in short'], rows: [
          ['Which EOCs exist', 'Biology, English II, NC Math 1 and NC Math 3'],
          ['Who must take one', 'Students enrolled for credit in a course with an EOC, at the completion of the course'],
          ['Course grade', 'At least twenty (20) percent of the final grade for each respective course, per TEST-003'],
          ['Grade 8 students in NC Math 1', 'Sit the course EOC at the end of NC Math 1 and skip the grade 8 EOG, per ACCT-021'],
          ['Their high school test', 'The NC Math 3 EOC, for federal accountability'],
          ['State reporting', 'Grade 11 EOC results in NC Math 1, NC Math 3 and Biology are reported to NCDPI']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A fifth of the grade is a lot',
          left: [
            'A student averaging a B in class who struggles on a test worth at least 20 percent of the final grade can watch the report card grade drop. The reverse is also true: a strong EOC can lift a borderline grade.',
            'The exact conversion from EOC score to course grade is set locally. Ask the school how it applies the 20 percent minimum.'
          ],
          rightH3: 'The accelerated path',
          right: [
            'For an eighth grader enrolled in NC Math 1, the coordinators&rsquo; handbook quotes policy ACCT-021: these students take the NC Math 1 EOC at the end of the course and will take the NC Math 3 EOC for federal accountability in high school.',
            'So a student who took NC Math 1 early faces two EOCs several years apart. The NC Math 3 test then matters for the school&rsquo;s accountability as well as for the course grade.'
          ] },
        { kind: 'source', html: 'Read on 31 October 2026: the <a class="ag-inline-link" href="' + ST + '" rel="noopener" target="_blank">NCDPI state testing overview</a> and NCDPI&rsquo;s <a class="ag-inline-link" href="' + DPI + '/documents/accountability/testing/north-carolina-test-coordinators-handbook" rel="noopener" target="_blank">testing policies handbook for 2026 to 2027</a>.' }
      ]
    },
    {
      id: 'square', tint: 'deep', eyebrow: 'Worked examples',
      h2: 'How do we teach the hardest topics on each test?',
      lede: 'One calculator-inactive NC Math 1 problem and one NC Math 3 circle problem, both ours. They share a thread: rewriting an expression until its structure shows.',
      body: [
        { kind: 'ol', items: [
          '<b>Our NC Math 1 problem, calculator off.</b> A school sells adult tickets and student tickets. 3 adult and 5 student tickets cost 41; 3 adult and 2 student tickets cost 29. Find each price.',
          '<b>The reasoning, by elimination.</b> Write 3a + 5s = 41 and 3a + 2s = 29. Both have 3a, so subtract the second from the first: 3s = 12, so s = 4. Substitute into the second: 3a + 8 = 29, so 3a = 21 and a = 7. Check in the first: 21 + 20 = 41.',
          '<b>The habit we teach with it.</b> If elimination gives an awkward fraction for a ticket price, reread the numbers before going on. On a calculator-off item there is no screen to catch a copying slip, so the context itself becomes the check.',
          '<b>Our NC Math 3 problem.</b> Find the center and radius of the circle x&sup2; + y&sup2; - 6x + 4y - 12 = 0.',
          '<b>The reasoning, by completing the square.</b> Group: (x&sup2; - 6x) + (y&sup2; + 4y) = 12. Half of -6 is -3, squared 9; half of 4 is 2, squared 4. Add both to each side: (x&sup2; - 6x + 9) + (y&sup2; + 4y + 4) = 25. So (x - 3)&sup2; + (y + 2)&sup2; = 25: center (3, -2), radius 5.',
          '<b>The thread.</b> Completing the square first appears with quadratics, to find a vertex. In NC Math 3 the same move finds a circle&rsquo;s center. Students who learned it as a trick in NC Math 1 relearn it in NC Math 3; students who understood it once keep it.'
        ] },
        { kind: 'p', mt: true, html: 'Both problems are ours. NCDPI&rsquo;s released NC Math 1 and NC Math 3 forms are free for students on the End-of-Course page and in NCTest, but the department reserves them from commercial use, so they stay out of our paid lessons; we point families to them for practice at home.' }
      ]
    },
    {
      id: 'window', tint: 'tint', eyebrow: 'When and how',
      h2: 'When is the NC Math 1 EOC taken?',
      lede: 'At the end of the course: in the last five days of a semester, 4x4 block or summer course, or the last ten days of a traditional yearlong course. Your school&rsquo;s calendar sets the dates.',
      body: [
        { kind: 'table', caption: 'How and when the two math EOCs are given (NCDPI EOC specifications and the coordinators&rsquo; handbook)', head: ['Item', 'Rule'], rows: [
          ['Semester, 4x4 or summer course', 'Last five days of the instructional period'],
          ['Traditional yearlong course', 'Last ten days of the instructional period'],
          ['Mode', 'Required online in NCTest, with paper kept for approved hardship or a documented accessibility need'],
          ['Language', 'English only'],
          ['Before test day', 'Each student must have done the NCTest tutorial at school'],
          ['Materials on request', 'Graph paper, scratch paper and a writing utensil']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Block schedules test in January too',
          left: [
            'A student in a fall semester or 4x4 NC Math 1 course takes the EOC in the last five instructional days of that semester, whenever that term ends on the school&rsquo;s calendar. Yearlong students test in the last ten days of the school year.',
            'The statute quoted in the handbook sets the same rule: the final ten instructional days for yearlong courses and the final five for semester courses.'
          ],
          rightH3: 'Practise on the real calculator',
          right: [
            'NCDPI links a North Carolina version of the Desmos graphing calculator for grade 8 and high school. It is the calculator in NCTest, so it is the one we teach with.',
            'NCDPI also posts an example gridded response space for both tests. Typing a fraction or a negative number correctly into it is worth one rehearsal.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice',
      h2: 'NC Math 1 and NC Math 3 practice: twelve questions we wrote',
      lede: 'Six for each course, at EOC level, with the domain each practises. For NC Math 1, the starred ones are for calculator-off practice.',
      body: [
        { kind: 'table', caption: 'Original practice (ours, not NCDPI items), with answers', head: ['Course', 'Question', 'Domain', 'Answer'], rows: [
          ['NC Math 1', 'Factor x&sup2; - 5x - 14.*', 'Algebra', '(x - 7)(x + 2)'],
          ['NC Math 1', 'Simplify (2x&sup3;)&sup2;.*', 'Number and Quantity', '4x^6'],
          ['NC Math 1', 'Solve 5 - 2x less than or equal to 11.*', 'Algebra', 'x greater than or equal to -3'],
          ['NC Math 1', 'f(x) = 2x + 3. Find x when f(x) = 17.', 'Functions', '7'],
          ['NC Math 1', 'A population of 800 grows 5 percent a year. Model it.', 'Functions', 'P = 800(1.05)^t'],
          ['NC Math 1', 'Points (1, 4), (2, 6), (3, 9). A line of fit is y = 2.5x + 1.3. Find the residual at x = 3.', 'Statistics', '0.2'],
          ['NC Math 3', 'Find the zeros of x&sup3; - 4x.', 'Functions', '0, 2 and -2'],
          ['NC Math 3', 'Find the inverse of f(x) = (x - 1)/3.', 'Functions', 'f^-1(x) = 3x + 1'],
          ['NC Math 3', 'Solve log base 2 of x = 5.', 'Algebra', 'x = 32'],
          ['NC Math 3', 'An arc subtends 60 degrees in a circle of radius 9. Find its length.', 'Geometry', '3 pi'],
          ['NC Math 3', 'Write the circle with center (-1, 4) and radius 6.', 'Geometry', '(x + 1)&sup2; + (y - 4)&sup2; = 36'],
          ['NC Math 3', 'Simplify (x&sup2; - 9)/(x + 3).', 'Algebra', 'x - 3, for x not equal to -3']
        ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Two plans',
      h2: 'How to study for the NC Math 1 or NC Math 3 EOC',
      lede: 'Our plans for the last eight weeks of the course, one per test, counted back from the school&rsquo;s EOC days.',
      body: [
        { kind: 'ol', items: [
          '<b>NC Math 1, weeks 1 and 2: calculator-off algebra.</b> Linear equations, inequalities, exponent rules and factoring by hand, because those are the 15 inactive items.',
          '<b>NC Math 1, weeks 3 and 4: functions.</b> Linear, exponential and quadratic functions, from tables, graphs and context.',
          '<b>NC Math 1, week 5: statistics.</b> Scatter plots, lines of fit, residuals and two-way tables, which together can reach a fifth of the test.',
          '<b>NC Math 1, weeks 6 to 8: mixed rehearsal.</b> The released form at home, our timed sets in class, and one full sitting of about three hours.',
          '<b>NC Math 3, weeks 1 to 3: functions and algebra.</b> Polynomials, rational expressions, inverses, exponentials and logarithms, with the graphing calculator from day one.',
          '<b>NC Math 3, weeks 4 and 5: geometry.</b> Circle equations, arcs, sectors and angle relationships for the 20 to 24 percent share.',
          '<b>NC Math 3, weeks 6 to 8: speed with the calculator.</b> Graph-and-read routines so the reasoning items get time, then a full rehearsal.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'For a student retaking the course',
          left: [
            'We start from the domain where the class grade was weakest and use the domain weights to decide how far to go into each one.'
          ],
          rightH3: 'For an accelerated eighth grader',
          right: [
            'NC Math 1 in grade 8 is the same test as in grade 9. We add more calculator-off practice, since younger students often lean on the calculator early.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where you start',
    h2: 'Matching preparation to your teenager&rsquo;s course and year',
    lede: 'Our advice for common North Carolina paths, built on NCDPI&rsquo;s rules and weights.',
    table: { caption: 'Paths (rules from NCDPI; advice ours)', head: ['Path', 'Test to prepare for', 'Focus'], rows: [
      ['NC Math 1 in grade 8', 'NC Math 1 EOC now, NC Math 3 EOC in high school', 'Calculator-off algebra'],
      ['NC Math 1 in grade 9', 'NC Math 1 EOC', 'Functions and statistics'],
      ['NC Math 2 this year', 'No state math EOC this year', 'Keep NC Math 1 skills alive for NC Math 3'],
      ['NC Math 3 in grade 10 or 11', 'NC Math 3 EOC', 'Circles, polynomials and calculator speed'],
      ['Block or semester schedule', 'EOC in the last five days of the term', 'Start the plan early in the term']
    ] },
    left: { h3: 'For parents', ps: [
      'Find out whether your teenager&rsquo;s course is yearlong or semester; it changes the test date by months.',
      'Ask how the school applies the 20 percent EOC rule to the final grade.'
    ] },
    right: { h3: 'For students', ps: [
      'In NC Math 1, practise without a calculator until it feels normal.',
      'In NC Math 3, learn the graphing calculator so well that it saves time rather than costing it.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'High school math courses for North Carolina',
    lede: 'NC Math 1 through to AP and the grade 11 ACT.',
    bands: [
      { num: 'I', h3: 'Core', sub: 'NC Math 1 to 3', courses: [
        { code: 'NE / C / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'NC Math 1 content.' },
        { code: 'NE / C / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Circles, polynomials, logs.' },
        { code: 'NE / C / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and models.' }
      ] },
      { num: 'II', h3: 'Tests', sub: 'Beyond the EOC', courses: [
        { code: 'NE / T / 01', slug: 'act-math-prep-course', title: 'ACT Math', blurb: 'North Carolina juniors take the ACT.' },
        { code: 'NE / T / 02', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'For college applications.' },
        { code: 'NE / T / 03', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'After NC Math 3.' }
      ] },
      { num: 'III', h3: 'Earlier', sub: 'Middle school', courses: [
        { code: 'NE / E / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Before NC Math 1.' },
        { code: 'NE / E / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Python for curious students.' },
        { code: 'NE / E / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'Harder problems.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Teen-friendly evening slots, scheduled in ET',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weeknights ET', l: 'Alongside the course, all term.' },
      { time: 'Weekends', l: 'Three-hour rehearsals before the EOC.' },
      { time: '1-on-1', l: 'For a semester course with an early test.' }
    ],
    cells: [
      { h3: 'By hand first', p: 'For NC Math 1&rsquo;s calculator-inactive items.' },
      { h3: 'Desmos fluency', p: 'For every NC Math 3 item.' },
      { h3: 'NCDPI weights', p: 'Lesson time follows the domain shares.' },
      { h3: 'Gridded entry', p: 'Fractions and negatives typed correctly.' },
      { h3: 'State forms, family use', p: 'NCDPI&rsquo;s practice forms, worked at home.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty students, or one to one.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Teenagers in our classes often code their math. A few projects are on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents&rsquo; reviews of us on Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly billing in US dollars, no lock-in: many North Carolina families join for the last two months of the course and stop after the EOC.',
    free: ['A free first class', 'Bring a recent unit test', 'No card details'],
    group: ['Fifteen to twenty students', 'One teacher to the EOC', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Timed to a semester or yearlong course', 'Flexible times']
  },

  faq: {
    eyebrow: 'North Carolina families ask',
    h2: 'NC Math 1 and NC Math 3 EOC: questions from parents',
    items: [
      { q: 'How many items does the NC Math 1 EOC have?', a: 'NCDPI\'s April 2026 specifications list 60 items: 50 operational items that count and 10 field-test items that do not. NC Math 3 has the same 60.' },
      { q: 'Can students use a calculator on NC Math 1?', a: 'Yes, a graphing calculator, but 15 of the 50 scored items are calculator inactive. NC Math 3 has no calculator-inactive items; all 50 scored items allow the graphing calculator.' },
      { q: 'How long is the NC Math 1 EOC?', a: 'Plan on roughly three hours; NCDPI caps it at four, and only an accommodation such as Scheduled Extended Time goes beyond that. NC Math 3 runs to the same clock.' },
      { q: 'Does the NC Math 1 EOC count toward my grade?', a: 'Yes. Under State Board policy TEST-003, schools use EOC results as at least 20 percent of the final grade for the course. Your school decides exactly how it applies that minimum.' },
      { q: 'What is on the NC Math 1 EOC?', a: 'Number and Quantity and Algebra at 36 to 40 percent, Functions at 32 to 36 percent, Statistics and Probability at 18 to 20 percent and Geometry at 8 to 12 percent, according to NCDPI.' },
      { q: 'What is on the NC Math 3 EOC?', a: 'Number and Quantity and Algebra at 32 to 36 percent, Functions at 32 to 36 percent, Geometry at 20 to 24 percent and Statistics and Probability at 8 to 12 percent.' },
      { q: 'When do you take the NC Math 1 EOC?', a: 'In the last five days of a semester, 4x4 or summer course, or the last ten days of a traditional yearlong course. Your school calendar sets the actual days.' },
      { q: 'My 8th grader is in NC Math 1. Which math test do they sit?', a: 'Only the NC Math 1 EOC that year. State Board policy ACCT-021 keeps them off the grade 8 EOG, and later, in high school, the NC Math 3 EOC becomes their federal accountability test.' },
      { q: 'Where can I find an NC Math 1 EOC practice test?', a: 'NCDPI posts released forms for NC Math 1 and NC Math 3 on its End-of-Course page and in NCTest, with graph paper and the graphing calculator. Our own practice questions are on this page.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Lessons are scheduled on Eastern Time.' },
      { q: 'Are you affiliated with NCDPI?', a: 'No. We are a tutoring company working independently; neither the state department nor any North Carolina high school is involved in our classes. What we report about the tests is drawn from documents NCDPI publishes for everyone.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More high school math for North Carolina students.',
    items: [
      { href: '/online-math-tutor-9th-grade', label: 'Ninth grade math tutoring', p: 'The usual NC Math 1 year.' },
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'Much of the NC Math 3 algebra.' },
      { href: '/trigonometry-tutoring-online', label: 'Trigonometry tutoring', p: 'Right triangles and the unit circle.' },
      { href: '/act-math-tutoring-online', label: 'ACT math tutoring', p: 'The grade 11 test in North Carolina.' },
      { href: '/best-coding-classes-for-kids-in-charlotte', label: 'Coding classes in Charlotte', p: 'For North Carolina families.' },
      { href: '/coding-and-ai-classes-in-north-carolina', label: 'Coding and AI in North Carolina', p: 'Python and AI classes for NC teens.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us whether it is NC Math 1 or NC Math 3, yearlong or semester, and send a recent unit test. The teacher will work through its hardest question with your teenager in the first class.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or see the full <a class="ag-inline-link" href="/courses">course catalogue</a>.',
    note: 'Lessons run from India on times fixed in Eastern Time, so they fit North Carolina evenings and weekends. WhatsApp gets the quickest response.',
    formNote: 'The first class is free; we never ask for a card to book it.'
  },

  footer: {
    cols: [
      { h4: 'High school', links: [
        { href: '/online-math-tutor-10th-grade', label: 'Grade 10 math' },
        { href: '/online-math-tutor-11th-grade', label: 'Grade 11 math' },
        { href: '/ap-precalculus-tutoring-online', label: 'AP Precalculus' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'North Carolina and the US', links: [
        { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
        { href: '/best-coding-classes-for-kids-in-charlotte', label: 'Charlotte' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Sixty items, a fifth of the grade'
  },

  personalityCss: `
.ag-root.ag-ne .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-ne .ag-capsule { border-left-width: 4px; }
.ag-root.ag-ne .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ne .ag-table td.ag-num { font-variant-numeric: tabular-nums; text-align: right; }
.ag-root.ag-ne .ag-steps li { padding-bottom: 7px; }
`,

  dossier: {
    curriculumAuthority: 'North Carolina Department of Public Instruction, read raw 31 October 2026: End-of-Course NC Math 1 and NC Math 3 Tests, North Carolina Test Specifications (April 2026: domain weights, DOK, items, calculator inactive and active items, timing, window, mode, calculator); State Tests page (EOC list, completion rule, TEST-003 twenty percent, online requirement); End-of-Course page (released forms, Desmos graphing calculator, gridded response space); North Carolina Test Coordinator&rsquo;s Policies and Procedures Handbook 2026 to 2027 (reporting list, ACCT-021, statutory windows).',
    localProject: 'Our NC Math 1 calculator-off elimination example (3a + 5s = 41 and 3a + 2s = 29 give s = 4, a = 7, checked in the first equation), our NC Math 3 circle (x&sup2; + y&sup2; - 6x + 4y - 12 = 0 to center (3, -2), radius 5), our twelve-item practice set by course and domain, our two eight-week plans and path table. Lesson family: completing the square from NC Math 1 quadratics to NC Math 3 circles.',
    requiredMentions: ['The EOC NC Math 3 Test will include only calculator active items.', 'Calculator inactive operational items', 'At least twenty (20) percent of the final grade for each respective course, per TEST-003', 'Four hours (240 minutes), except documented accommodations', 'Statistics and Probability, at 18 to 20 percent', 'Last five days of the instructional period', 'Biology, English II, NC Math 1 and NC Math 3', 'The NC Math 3 EOC, for federal accountability', 'center (3, -2), radius 5', 'adopted in June 2016'],
    sources: [
      { claim: 'End-of-Course NC Math 1 and NC Math 3 Tests, North Carolina Test Specifications, April 2026.', url: SPECS },
      { claim: 'NCDPI State Tests page.', url: ST },
      { claim: 'NCDPI End-of-Course resources page.', url: ST + '/end-course-eoc' },
      { claim: 'North Carolina Test Coordinator&rsquo;s Policies and Procedures Handbook, 2026 to 2027.', url: DPI + '/documents/accountability/testing/north-carolina-test-coordinators-handbook' }
    ],
    rejectedClaims: [
      'Achievement level names and scale ranges for the EOCs: the State Board policy host (simbli.eboardsolutions.com) returned an Incapsula block and the EOC score report guide link returned Page not Found; not retried, not printed.',
      'How a school converts an EOC score into the 20 percent of the course grade: set locally; not stated.',
      'Credit by Demonstrated Mastery: the guidelines are linked on the EOC page but were not read; not described.',
      'Specific 2027 test dates: none statewide; they follow each school&rsquo;s course calendar.',
      'Reproducing or using released-form items: refused, also because NCDPI forbids their use for personal or financial gain.',
      'Grade or score promises for our classes: refused. Any affiliation with NCDPI or a school: none.'
    ]
  }
};
