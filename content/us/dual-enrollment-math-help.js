'use strict';
// Dual enrollment math help (ag- guide door; UK and US exams cluster, row US060). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Code 'dem' per coordinator ('de' is taken in ai-global.css).
// Every fact read raw with curl on 31 October 2026; copies in keyword-research-2026-09/uk-us-gap/src/dual-enrollment-math-help/:
//  - nacep.org (home page): NACEP "works to ensure that college courses offered by high school teachers are as rigorous as
//    courses offered on the sponsoring college campus"; "As the sole accrediting body for concurrent enrollment
//    partnerships"; in its 2025 to 2026 cycle (en dash in source) the national total reached "136 programs at 132
//    institutions in 27 states".
//  - Washington SBCTC Running Start page: "allows 11th and 12th grade students to take college courses at Washington's 34
//    community and technical colleges"; students "do not pay tuition" but pay "mandatory fees, books and transportation".
//    Running Start FAQ (rsfaq2026 PDF): students must have "completed 10th grade or be eligible to enroll in 11th grade";
//    enrollment "automatically establishes a college transcript"; mandatory fees include "course and placement testing
//    fees"; on retakes "Both the original course and the retaken course, as well as the corresponding grades earned, will
//    show on both the college and high school transcripts."
//  - Georgia GAfutures Dual Enrollment page: for "Georgia resident students enrolled at an eligible public or private high
//    school or home study program"; "provides for standard tuition, mandatory fees and required books".
//  - Houston Community College Dual Credit page: eligibility list ("Be currently enrolled in 9th grade or higher"; "Meet the
//    dual credit course prerequisite requirements"); "High school students interested in dual credit must be assessed in
//    Reading, Writing, and Mathematics prior to enrollment"; minimums for math-based classes e.g. College Algebra: ACT Math
//    22+ (after 2/15/2023), SAT Math Section Score 530+, STAAR EOC Algebra II 4000+, TSI Assessment 2 Math 950-990 OR Math
//    910-949 AND Diagnostic Level 6, Mathematics College Prep course with grade C or higher.
//  - Utah State Board of Education Graduation Pathways PDF (2021) and concurrent math flyer: Math 1050 and Math 1060
//    "are Concurrent Enrollment classes"; "1050 also satisfies the QL requirement for a bachelor's degree"; Math 1010
//    "doesn't give you the QL math credit"; college credit options after Secondary Math III (quantitative reasoning, statistics, Math 1050, AP
//    Statistics) and after Pre-Calculus (AP Calculus AB or BC, Math 1210/1220); College Algebra for majors in Business,
//    Biological and Physical Sciences, Engineering, Mathematics.
// Not used: Florida DOE (403), Minnesota PSEO (bot challenge), Ohio College Credit Plus (script-rendered, no text).
// Our own material, labelled: a doubling-time model (ln 2 / 0.3, about 2.31 hours), a rational inequality, a piecewise
// continuity check, the fence problem solved by vertex and by derivative (x = 10, area 200), the derivative of x^2 at 3 from
// the limit definition, a tangent line, an integral, a Python check, a twelve-item set and a semester routine.
// Lesson family: one problem across two courses (vertex in College Algebra, derivative in Calculus I).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COLLEGE CREDIT', blurb: 'Dual enrollment College Algebra and Calculus I: entry requirements as colleges and states publish them, transcript stakes, and worked problems.' },
  slug: 'dual-enrollment-math-help',
  code: 'dem',
  accent: '#795200',
  accentRationale: 'Dual enrollment math help: a dark ochre #795200 from the US allocation table, 6.56:1 on paper #FBF8F2 and 5.64:1 on the deepest tint, a college-gold that sits apart from the teal and blue course pages',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'Dual enrollment math help',
  title: 'Dual Enrollment Math Help: College Algebra and Calculus I',
  description: 'Dual enrollment math help: what colleges and states require for dual credit College Algebra and Calculus I, why the grade goes on a college transcript, and practice.',
  ogDescription: 'A dual enrollment math grade is a college grade. Entry rules from Texas, Utah, Washington and Georgia sources, and how to keep up with a college-paced course.',
  twitterDescription: 'Dual enrollment College Algebra and Calculus I, from state and college pages, with worked problems.',
  pageName: 'Dual Enrollment Math Help',
  webPageDescription: 'A guide for high school students and parents to dual enrollment and concurrent enrollment math, quoting published requirements from a Texas college, Utah, Washington and Georgia, with original College Algebra and Calculus I examples.',
  courseDescription: 'College Algebra, precalculus and Calculus I support taught live online for high school students taking dual enrollment courses, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Dual enrollment math help',
  navLinks: [
    { href: '#what', label: 'What it is' },
    { href: '#entry', label: 'Entry rules' },
    { href: '#stakes', label: 'The transcript' },
    { href: '#worked', label: 'Worked problems' },
    { href: '#ladder', label: 'Which course' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 11 and 12 &middot; College credit in high school',
  h1: 'Dual enrollment math help: College Algebra and Calculus I',
  lede: 'Dual enrollment lets a high school student take a real college math course, often College Algebra, Precalculus or Calculus I, and earn college and high school credit together. It can save a semester later. It can also put a low grade on a college transcript at sixteen. The rules for getting in vary by state and college, and the pace is a college pace. This page collects published entry rules in their owners\' words, explains the stakes, and works through the math.',
  secondaryCta: { href: '#entry', label: 'See the entry rules' },
  wa: 'Hello Modern Age Coders, my child is taking (or planning) a dual enrollment math course. Could we book a free first class?',
  heroNote: 'Live math teaching since 2020 &middot; 10,000+ students &middot; high school juniors and seniors',
  spec: [
    ['Also called', 'Dual credit, concurrent enrollment, Running Start'],
    ['Common courses', 'College Algebra, Precalculus, Calculus I'],
    ['Typical grades', '11 and 12, some programs from grade 9'],
    ['Entry', 'Placement scores or prior course, by college'],
    ['Stakes', 'The grade goes on a college transcript'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Dual enrollment math means a high school student takes a college math course, such as College Algebra or Calculus I, for both college and high school credit. Each state and college sets its own entry rules, often a placement score such as TSIA2 or an SAT or ACT math score, and the grade starts a college transcript. Our College Mathematics course gives live support online, in a 15 to 20 student batch or 1-on-1.',

  picks: {
    eyebrow: 'College math support',
    h2: 'Three courses for dual enrollment math',
    lede: 'The college course runs alongside the dual credit class; the other two help a student qualify and then keep up.',
    items: [
      { course: 'college-mathematics-complete-masterclass', code: 'DEM / 01', title: 'College math', note: 'College Algebra through Calculus I, at college pace.' },
      { course: 'college-math-placement-test-prep-course', code: 'DEM / 02', title: 'Placement test prep', note: 'TSIA2, ACCUPLACER and ALEKS, the usual way in.' },
      { course: 'ap-calculus-exam-prep', code: 'DEM / 03', title: 'AP Calculus', note: 'For students weighing AP against dual credit calculus.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What it is',
      h2: 'What is dual enrollment math?',
      lede: 'A college math course taken while still in high school. It may run on a college campus, online, or in the high school with a high school teacher approved by the college. Names differ by state.',
      body: [
        { kind: 'table', caption: 'How four sources describe their programs (pages read 31 October 2026)', head: ['Source', 'Program', 'In its own words'], rows: [
          ['NACEP (national)', 'Concurrent enrollment', 'Works "to ensure that college courses offered by high school teachers are as rigorous as courses offered on the sponsoring college campus"'],
          ['Washington SBCTC', 'Running Start', 'A program that "allows 11th and 12th grade students to take college courses at Washington\'s 34 community and technical colleges"'],
          ['Georgia Student Finance Commission (GAfutures)', 'Dual Enrollment', 'For "Georgia resident students enrolled at an eligible public or private high school or home study program in Georgia"'],
          ['Utah State Board of Education', 'Concurrent Enrollment', 'Math 1050 and Math 1060 "are Concurrent Enrollment classes"']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.nacep.org/" rel="noopener" target="_blank">NACEP</a>, <a class="ag-inline-link" href="https://www.sbctc.edu/colleges-staff/programs-services/running-start/" rel="noopener" target="_blank">Washington SBCTC Running Start</a>, <a class="ag-inline-link" href="https://www.gafutures.org/hope-state-aid-programs/scholarships-grants/dual-enrollment/" rel="noopener" target="_blank">GAfutures Dual Enrollment</a> and the <a class="ag-inline-link" href="https://www.schools.utah.gov/curr/mathematics/_mathematics_/_core/CoreStandardsGraduationPathways.pdf" rel="noopener" target="_blank">Utah Graduation Pathways</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'Who pays for what',
          left: [
            'It depends on the state. Washington says Running Start students "do not pay tuition" but remain responsible for "mandatory fees, books and transportation."',
            'Georgia says its program "provides for standard tuition, mandatory fees and required books." Check your own state and college before enrolling.'
          ],
          rightH3: 'Quality checks',
          right: [
            'NACEP calls itself "the sole accrediting body for concurrent enrollment partnerships". It reports that, in its 2025 to 2026 cycle, the national total reached "136 programs at 132 institutions in 27 states."',
            'Accreditation is one sign a high school-taught college course matches the campus version. It is worth asking about, especially when credits need to transfer.'
          ] }
      ]
    },
    {
      id: 'entry', tint: 'deep', eyebrow: 'Entry rules',
      h2: 'What do you need to take dual enrollment College Algebra?',
      lede: 'Usually a qualifying placement score, or a completed prerequisite course, plus the high school\'s approval. One Texas college publishes its rules in full, which makes it a clear example.',
      body: [
        { kind: 'table', caption: 'Houston Community College: minimum scores for math-based dual credit classes such as College Algebra (HCC Dual Credit page, read 31 October 2026)', head: ['Route', 'Minimum HCC lists for math-based classes'], rows: [
          ['TSI Assessment 2 (TSIA2)', 'Math 950 to 990, or Math 910 to 949 with Diagnostic Level 6'],
          ['SAT (after 3/2016)', 'Math Section Score 530+'],
          ['ACT (after 2/15/2023)', 'Math 22+'],
          ['STAAR end-of-course', 'Algebra II 4000+'],
          ['College prep course', 'Mathematics College Prep course with grade C or higher']
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.hccs.edu/programs--courses/high-school-programs/dual-credit/" rel="noopener" target="_blank">Houston Community College, Dual Credit</a>. HCC also lists earlier ACT and TSI versions; other Texas colleges set their own course prerequisites on top of the state rules.' },
        { kind: 'two', mt: true,
          leftH3: 'The rest of HCC\'s list',
          left: [
            'HCC says "High school students interested in dual credit must be assessed in Reading, Writing, and Mathematics prior to enrollment." Students must also "Be currently enrolled in 9th grade or higher" and be recommended by their high school.',
            'The last line matters most for math: students must "Meet the dual credit course prerequisite requirements." Calculus I will need more than College Algebra does.'
          ],
          rightH3: 'Other states, other gates',
          right: [
            'Washington ties Running Start to grade standing: its FAQ says a student "must have completed 10th grade or be eligible to enroll in 11th grade", with colleges handling placement and charging "course and placement testing fees" as allowed.',
            'Utah\'s pathways chart puts its concurrent College Algebra and Statistics courses after Secondary Math III, and its calculus options after Pre-Calculus.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>Ask the high school counselor which college partners it uses.</b> The rules are the college\'s, applied through the school.',
          '<b>Find the college\'s dual credit page.</b> Look for the placement test, the minimum math score and each course\'s prerequisite.',
          '<b>Check which tests you already have.</b> An SAT, ACT or state end-of-course score may already qualify, as HCC\'s table shows.',
          '<b>If a placement test is needed, prepare for it.</b> TSIA2, ACCUPLACER or ALEKS are common; our placement course covers all three.',
          '<b>Confirm transfer.</b> Ask target universities whether the course will count toward a degree, not just as elective credit.'
        ] }
      ]
    },
    {
      id: 'stakes', tint: 'tint', eyebrow: 'The transcript',
      h2: 'Does a dual enrollment math grade go on your college transcript?',
      lede: 'Yes, in the programs we checked. Washington\'s FAQ states it outright, and the same is true wherever the credit is college credit.',
      body: [
        { kind: 'two',
          leftH3: 'A transcript begins at once',
          left: [
            'Washington\'s Running Start FAQ says enrollment "automatically establishes a college transcript." That transcript follows the student when they apply to universities and, later, to some graduate programs.',
            'On retakes it is equally clear: "Both the original course and the retaken course, as well as the corresponding grades earned, will show on both the college and high school transcripts."'
          ],
          rightH3: 'College pace in a high school week',
          right: [
            'A semester of College Algebra or Calculus I covers in about four months what a high school course might spread over a year. Homework is often online with firm deadlines, and tests carry most of the grade.',
            'Students who did well in high school math can still be caught out by the speed. The first two or three weeks decide most outcomes, which is when we suggest support starts.'
          ] },
        { kind: 'table', mt: true, caption: 'Dual enrollment against AP for math credit (our comparison; check each college\'s policy)', head: ['Question', 'Dual enrollment course', 'AP course and exam'], rows: [
          ['What earns credit?', 'The final course grade', 'The May exam score'],
          ['Where does the grade appear?', 'On a college transcript and the high school one', 'On the high school transcript; the exam score is sent separately'],
          ['Who accepts it?', 'Often in-state public colleges; transfer varies', 'Depends on each college\'s AP policy'],
          ['One bad day?', 'Spread across a semester of work', 'Concentrated in one exam']
        ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked problems',
      h2: 'What is in a dual enrollment College Algebra or Calculus I course?',
      lede: 'College Algebra centers on functions and models; Calculus I on limits, derivatives and the first integrals. The problems below are ours. The last one is solved twice, once with each course\'s tools.',
      body: [
        { kind: 'table', caption: 'College Algebra, worked by us', head: ['Problem', 'Reasoning', 'Result'], rows: [
          ['A culture grows as P = 500e^(0.3t), t in hours. When does it double?', 'Set 1000 = 500e^(0.3t), so e^(0.3t) = 2 and 0.3t = ln 2', 't = ln 2 / 0.3, about 2.31 hours'],
          ['Solve (x - 2)/(x + 3) &ge; 0', 'Critical values -3 and 2; test each interval; x = -3 is excluded, x = 2 included', 'x &lt; -3 or x &ge; 2'],
          ['f(x) = x^2 for x &lt; 1, and 2x - 1 for x &ge; 1. Is f continuous at 1?', 'Left value 1^2 = 1, right value 2(1) - 1 = 1', 'Yes, both sides meet at 1']
        ] },
        { kind: 'table', mt: true, caption: 'Calculus I, worked by us', head: ['Problem', 'Reasoning', 'Result'], rows: [
          ['Find f\'(3) for f(x) = x^2 from the limit definition', '((3 + h)^2 - 9)/h = (6h + h^2)/h = 6 + h, and h goes to 0', '6'],
          ['Tangent line to y = x^2 at (3, 9)', 'Slope 6 through (3, 9): y - 9 = 6(x - 3)', 'y = 6x - 9'],
          ['Evaluate the integral of 3x^2 from 0 to 2', 'An antiderivative is x^3; 2^3 - 0^3', '8']
        ] },
        { kind: 'table', mt: true, caption: 'One problem, two courses (ours): 40 meters of fence on three sides of a rectangle against a wall. Largest area?', head: ['Step', 'College Algebra: use the vertex', 'Calculus I: use the derivative'], rows: [
          ['Model', 'Sides x, x and 40 - 2x: A(x) = x(40 - 2x) = 40x - 2x^2', 'Same model'],
          ['Find the optimal x', 'Vertex at x = -b/(2a) = -40/(2 x -2) = 10', 'A\'(x) = 40 - 4x = 0, so x = 10'],
          ['Confirm a maximum', 'Leading coefficient -2, so the parabola opens down', 'A\'\'(x) = -4 &lt; 0'],
          ['Answer', 'Sides 10, 10 and 20; area 200 square meters', 'The same']
        ] },
        { kind: 'code', mt: true, label: 'check_dual_enrollment_examples.py (our example)', lang: 'Python 3', code: 'from math import log\n\nprint(round(log(2) / 0.3, 2))       # doubling time: 2.31 hours\n\nf = lambda x: x ** 2\nfor h in [0.1, 0.01, 0.001]:\n    print(h, (f(3 + h) - f(3)) / h)  # 6.1, 6.01, 6.001: heading to 6\n\narea = lambda x: x * (40 - 2 * x)\ntop = max(range(0, 21), key=area)\nprint(top, area(top))             # 10 200', note: 'Our own check. The shrinking-h loop is the limit definition made visible, which helps students who find the algebra abstract.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Which course',
    h2: 'Which dual enrollment math course should a student take?',
    lede: 'The one their likely major needs. Utah\'s concurrent enrollment flyer and pathways chart, from 2021, give an unusually clear guide; other states have similar course families under other numbers.',
    table: { caption: 'Utah\'s college math options for high school students (Utah State Board of Education pathways chart and concurrent math flyer, 2021)', head: ['Course', 'Utah\'s note on who it suits or what it does'], rows: [
      ['Quantitative Reasoning', 'For majors such as English, fine arts, humanities and performing arts'],
      ['Statistics', 'For majors such as history, nursing, psychology and social sciences'],
      ['College Algebra (Math 1050)', 'For business, biological and physical sciences, engineering and mathematics; "1050 also satisfies the QL requirement for a bachelor\'s degree"'],
      ['Math 1050 and 1060 together', '"most of the same topics as Precalculus", taken before university calculus'],
      ['Calculus (AP Calculus AB or BC, or Math 1210/1220)', 'Listed after Pre-Calculus'],
      ['Math 1010', 'Utah notes it "doesn\'t give you the QL math credit you need for a bachelor\'s degree"']
    ] },
    left: { h3: 'If the plan is STEM', ps: [
      'College Algebra is rarely the last math course. Students heading for engineering or science usually want trigonometry and calculus next, so Calculus I readiness is the real goal.',
      'A strong grade in College Algebra matters because it is often the prerequisite the college checks for Calculus I.'
    ] },
    right: { h3: 'If the plan is not STEM', ps: [
      'Statistics or quantitative reasoning may satisfy the degree requirement more directly than College Algebra.',
      'Ask the target university which course meets its general education math requirement before choosing.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'College-level math courses for high school students',
    lede: 'Live courses for getting in, keeping up and going further.',
    bands: [
      { num: 'I', h3: 'Getting in', sub: 'Placement and readiness', courses: [
        { code: 'DEM / P / 01', slug: 'college-math-placement-test-prep-course', title: 'Placement test prep', blurb: 'TSIA2, ACCUPLACER, ALEKS.' },
        { code: 'DEM / P / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra 2 and precalculus.' },
        { code: 'DEM / P / 03', slug: 'sat-math-prep-course', title: 'SAT math', blurb: 'A score many colleges accept.' }
      ] },
      { num: 'II', h3: 'Keeping up', sub: 'The dual credit semester', courses: [
        { code: 'DEM / K / 01', slug: 'college-mathematics-complete-masterclass', title: 'College math', blurb: 'College Algebra to Calculus I.' },
        { code: 'DEM / K / 02', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Functions and trigonometry.' },
        { code: 'DEM / K / 03', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'For a dual credit statistics class.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'After the first course', courses: [
        { code: 'DEM / F / 01', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'AB and BC.' },
        { code: 'DEM / F / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Math for data science', blurb: 'Linear algebra and statistics.' },
        { code: 'DEM / F / 03', slug: 'gre-gmat-quant-maths-prep-course', title: 'Quantitative reasoning', blurb: 'For later admissions tests.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Support timed to a college syllabus',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'The evening before each online homework deadline.' },
      { time: 'Weekends', l: 'Exam review and the coming week\'s preview.' },
      { time: '1-on-1', l: 'Planned around the college syllabus dates.' }
    ],
    cells: [
      { h3: 'Syllabus first', p: 'We plan from the college\'s calendar.' },
      { h3: 'Preview, then class', p: 'New topics seen before lectures.' },
      { h3: 'Exam rehearsal', p: 'Timed mixed problems before each test.' },
      { h3: 'Your own work', p: 'We teach; graded work stays the student\'s.' },
      { h3: 'Two-course view', p: 'Algebra methods linked to calculus.' },
      { h3: 'Group or private', p: 'A class of 15 to 20, or one to one.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Older students often put calculus and modeling into code. Look through <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from families and students on Google, reproduced unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'Our support is billed monthly in US dollars, separately from anything the college or state charges for the dual enrollment course. A student can join for one semester only.',
    free: ['One free class first', 'Bring the college syllabus', 'No card requested'],
    group: ['Classes of 15 to 20', 'A steady teacher', 'Batch times to choose from', 'Monthly fee'],
    one: ['Private sessions', 'Fitted to the college calendar', 'Flexible hours']
  },

  faq: {
    eyebrow: 'Questions students ask',
    h2: 'Dual enrollment math: common questions',
    items: [
      { q: 'What math classes can you take in dual enrollment?', a: 'Commonly College Algebra, Precalculus or trigonometry, Statistics, quantitative reasoning and Calculus I, depending on the college. Utah, for example, lists quantitative reasoning, statistics, Math 1050 and Math 1060, with calculus after precalculus.' },
      { q: 'What score do I need for dual enrollment College Algebra?', a: 'It depends on the college. Houston Community College, for instance, lists TSIA2 Math 950 to 990 (or 910 to 949 with Diagnostic Level 6), SAT Math 530, ACT Math 22 or STAAR Algebra II 4000 among its routes for math-based classes such as College Algebra.' },
      { q: 'Is there a dual enrollment math practice test?', a: 'The test is usually the college\'s placement test, such as TSIA2, ACCUPLACER or ALEKS. Use the official free practice from the test owner, and see our placement test prep course. This page also has our own College Algebra and Calculus I problems.' },
      { q: 'Does a dual enrollment grade count on my college transcript?', a: 'In the programs we checked, yes. Washington says Running Start enrollment automatically establishes a college transcript, and both an original and a retaken course appear on it.' },
      { q: 'Is dual enrollment College Algebra hard?', a: 'It moves at college pace, so a semester can cover what a high school class spreads over a year. Students with solid Algebra 2 skills usually manage well if they keep up from the first week.' },
      { q: 'Is dual enrollment better than AP for math?', a: 'Neither is better for everyone. Dual enrollment credit comes from a semester grade and often transfers well within a state; AP credit comes from one exam score and depends on each college\'s AP policy. Check your target colleges.' },
      { q: 'Can you help with my dual enrollment math homework?', a: 'We teach the methods and work through similar problems, and we review the student\'s own reasoning. We do not complete graded homework, online assignments or exams for anyone.' },
      { q: 'Can homeschool students take dual enrollment math?', a: 'Often, yes. Georgia\'s program, for example, includes students in an eligible home study program, and Washington applies district grade placement rules to home and private school students. Check your state and college.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you a dual enrollment provider?', a: 'No. We do not grant college or high school credit and are not affiliated with any college, state agency or NACEP. We provide tutoring alongside the course a student takes through their own program.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Related help for juniors, seniors and college-bound students.',
    items: [
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'The bridge to Calculus I.' },
      { href: '/calculus-tutoring-online', label: 'Calculus tutoring', p: 'Limits, derivatives and integrals.' },
      { href: '/ap-calculus-tutoring-online', label: 'AP Calculus tutoring', p: 'The exam-based alternative.' },
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'The skills College Algebra assumes.' },
      { href: '/online-math-tutor-12th-grade', label: 'Twelfth grade math', p: 'Senior-year options.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math', p: 'Planning college credit at home.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send the course name, the college and its syllabus, or the placement test you are facing. The first class works through the opening topics of that syllabus so you can judge the fit.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how we teach older students</a> or browse <a class="ag-inline-link" href="/courses">our courses</a>.',
    note: 'Our teachers teach live from India and offer evening slots across US time zones, which suits students with college classes during the day. WhatsApp is the quickest contact.',
    formNote: 'The first class is free; no payment card is needed.'
  },

  footer: {
    cols: [
      { h4: 'College-level math', links: [
        { href: '/precalculus-tutoring-online', label: 'Precalculus' },
        { href: '/calculus-tutoring-online', label: 'Calculus' },
        { href: '/ap-calculus-tutoring-online', label: 'AP Calculus' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-math-tutor-12th-grade', label: 'Grade 12 math' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'A(x) = 40x - 2x^2, best at x = 10'
  },

  personalityCss: `
.ag-root.ag-dem .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-dem .ag-capsule { border-left-width: 4px; border-radius: 5px; }
.ag-root.ag-dem .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-dem .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-dem .ag-section-head h2 { max-width: 30ch; }
`,

  dossier: {
    curriculumAuthority: 'Pages read raw 31 October 2026: NACEP home page; Washington SBCTC Running Start page and Running Start FAQ PDF (2026); GAfutures Georgia Dual Enrollment page; Houston Community College Dual Credit page (eligibility and TSI minimums); Utah State Board of Education Graduation Pathways PDF and concurrent math flyer (2021).',
    localProject: 'Our worked problems: doubling time ln 2 / 0.3 (about 2.31 hours); (x - 2)/(x + 3) >= 0; a piecewise continuity check; f\'(3) = 6 for x^2 from the limit definition; tangent y = 6x - 9; integral of 3x^2 from 0 to 2 = 8; the fence problem solved by vertex and by derivative (x = 10, area 200); a Python check. Lesson family: one problem across two courses.',
    requiredMentions: ['as rigorous as courses offered on the sponsoring college campus', 'the sole accrediting body for concurrent enrollment partnerships', '136 programs at 132 institutions in 27 states', 'automatically establishes a college transcript', 'as well as the corresponding grades earned, will show on both the college and high school transcripts', 'provides for standard tuition, mandatory fees and required books', 'must be assessed in Reading, Writing, and Mathematics prior to enrollment', 'Meet the dual credit course prerequisite requirements', '1050 also satisfies the QL requirement for a bachelor\'s degree'],
    sources: [
      { claim: 'NACEP: purpose, accreditation role, national totals.', url: 'https://www.nacep.org/' },
      { claim: 'Washington Running Start: grades, colleges, tuition and fees.', url: 'https://www.sbctc.edu/colleges-staff/programs-services/running-start/' },
      { claim: 'Running Start FAQ 2026: eligibility, transcript, retakes, fees.', url: 'https://www.sbctc.edu/colleges-staff/programs-services/running-start/docs/rsfaq2026-10926.pdf' },
      { claim: 'Georgia Dual Enrollment: eligibility and what it covers.', url: 'https://www.gafutures.org/hope-state-aid-programs/scholarships-grants/dual-enrollment/' },
      { claim: 'Houston Community College dual credit eligibility and math minimums.', url: 'https://www.hccs.edu/programs--courses/high-school-programs/dual-credit/' },
      { claim: 'Utah concurrent enrollment math options.', url: 'https://www.schools.utah.gov/curr/mathematics/_mathematics_/_core/CoreStandardsGraduationPathways.pdf' }
    ],
    rejectedClaims: [
      'Florida Department of Education dual enrollment page: returned 403; not retried.',
      'Minnesota PSEO page: served a bot challenge; not retried.',
      'Ohio College Credit Plus page: script-rendered with no readable text; not used.',
      'Texas Administrative Code rule text: the Secretary of State site redirected; only HCC\'s published application of TSI is quoted.',
      'Tuition or fee amounts at any college: not printed.',
      'Credit transfer promises: refused; each college decides.',
      'Any affiliation with a college, state or NACEP: none.'
    ]
  }
};
