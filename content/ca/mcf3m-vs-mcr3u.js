'use strict';
// MCF3M vs MCR3U (ag- comparison door; Canada cluster Plan 2, row 18).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/mcf3m-vs-mcr3u/):
//  - The Ontario Curriculum, Grades 11 and 12: Mathematics (2007), www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf
//    (math1112currb.pdf, pdftotext math1112currb-raw.txt). MCF3M description: "This course introduces basic features of the function by
//    extending students' experiences with quadratic relations."; "It focuses on quadratic, trigonometric, and exponential functions and
//    their use in modelling real-world situations."; prerequisite "Principles of Mathematics, Grade 10, Academic, or Foundations of
//    Mathematics, Grade 10, Applied"; strands A Quadratic Functions, B Exponential Functions, C Trigonometric Functions; overall
//    expectations "relate the roots of a quadratic equation to the corresponding graph", "demonstrate an understanding of compound
//    interest and annuities, and solve related problems", "trigonometry in acute triangles using the sine law and the cosine law",
//    "periodic relationships and the sine function". MCR3U description "This course introduces the mathematical concept of the function
//    by extending students' experiences with linear and quadratic relations." and "investigate inverse functions"; prerequisite
//    "Principles of Mathematics, Grade 10, Academic"; four strands. Programme overview on MCF3M: "provides preparation for students who
//    plan to pursue technology-related programs in college, while also leaving the option open for some students to pursue
//    postsecondary programs that require the Grade 12 university preparation course Mathematics of Data Management" and "using a more
//    applied approach with less emphasis on abstract concepts than in the Grade 11 university preparation course, Functions"; on MCT4C:
//    "may help students who decide to pursue certain university programs to prepare for the Grade 12 university preparation course
//    Advanced Functions". Course type definition: "University/college preparation courses are designed to equip students with the
//    knowledge and skills they need to meet the entrance requirements for specific programs offered at universities and colleges."
//    Course pages: MHF4U prerequisite (MCR3U or MCT4C); MDM4U (MCR3U or MCF3M); MCT4C (MCF3M or MCR3U); MAP4C ("Foundations for College
//    Mathematics, Grade 11, College Preparation, or Functions and Applications, Grade 11, University/College Preparation").
//  - Ontario curriculum content API (facts-schools-contests.md fact 38, ontario/api-senior-math-courses.json): MCF3M "Functions and
//    Applications", 2007, Grade 11, destination "University-College Preparation"; MCR3U "Functions", 2007, "University Preparation";
//    the same prerequisite texts.
//  - uwaterloo.ca/future-students/programs/economics (raw copy): "any Grade 12 U English (minimum final grade of at least 70%)";
//    "Admission average: High 70s (co-op and regular)"; "We strongly recommend that you take high school Calculus and Vectors and
//    Advanced Functions (or equivalents) as economics is a mathematically intensive discipline."
//  - future.utoronto.ca/undergraduate-programs/psychology/ (raw copy): Scarborough block "One Math (Calculus & Vectors / Advanced
//    Functions / Mathematics of Data Management)" marked Recommended.
//  - Time: facts-geo.md section 3 (tzdb 2026e).
// Our own material, labelled on the page and checked in verify_ours.py (SymPy 1.14, Python 3.13): the decision table; the same
// quadratic h(t) = -4.9t^2 + 19.6t + 1.5 asked two ways (MCF3M style: maximum 21.1 m at t = 2 s, lands at about 4.08 s, 15 m at
// about 0.88 s and 3.12 s; MCR3U style: inverse on t >= 2, t = 2 + root((21.1 - h)/4.9), domain 0 <= h <= 21.1, g(1.5) = 4.00,
// h(g(h)) = h); a ten-question placement set with answers; the four-week exam plan; the ladder.
// Lesson family: start from where you want to be (choose Grade 11 by working back from Grade 12 and the program).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PDF = '<a class="ag-inline-link" href="https://www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf" rel="noopener" target="_blank">2007 Ontario mathematics curriculum for Grades 11 and 12</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'MCF3M VS MCR3U', blurb: 'Which Grade 11 math to take in Ontario: MCF3M and MCR3U compared from the 2007 curriculum, with a decision table, one problem asked both ways and a placement check.' },
  slug: 'mcf3m-vs-mcr3u',
  code: 'mm',
  accent: '#274C2B',
  accentRationale: 'MCF3M vs MCR3U, Canada: a pine green, #274C2B, allocated for this row; 7.3 RGB units from the nearest site accent (#28522F), 18.3 from the nearest built Canada page (#2A523C), but only 13.1 from the alloc.tsv accent of the unbuilt row coding-and-ai-classes-in-st-johns-newfoundland (#2E572A), under the 14 floor: kept as allocated and flagged in the report; contrast 9.19 on the paper #FBF8F2 and 7.91 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'MCF3M vs MCR3U',
  title: 'MCF3M vs MCR3U: Which Grade 11 Math to Take in Ontario',
  description: 'MCF3M vs MCR3U for Ontario Grade 11: content and prerequisites from the curriculum, the Grade 12 courses each opens, a decision table and a placement check.',
  ogDescription: 'Functions and Applications or Functions? The two Grade 11 math courses compared from the 2007 Ontario curriculum: what each covers, which Grade 12 courses each leads to, a decision table, one problem asked both ways, and ten placement questions.',
  twitterDescription: 'MCF3M or MCR3U? Ontario Grade 11 math compared, with a decision table.',
  pageName: 'MCF3M vs MCR3U',
  webPageDescription: 'A comparison for Ontario families of the two Grade 11 math courses that lead on to Grade 12 university or college math, MCF3M Functions and Applications and MCR3U Functions, built from the 2007 curriculum, with a decision table and an original placement check.',
  courseDescription: 'Live online help with MCF3M or MCR3U for Ontario Grade 11 students, in a batch or one to one, alongside the school course. No Ontario credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'MCF3M vs MCR3U',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#compare', label: 'Side by side' },
    { href: '#paths', label: 'Grade 12 paths' },
    { href: '#decide', label: 'Decision table' },
    { href: '#worked', label: 'Same problem, two ways' },
    { href: '#placement', label: 'Placement check' }
  ],
  eyebrow: 'Ontario &middot; Grade 11 &middot; MCF3M or MCR3U',
  h1: 'MCF3M vs MCR3U: choosing Grade 11 math in Ontario',
  lede: 'Every year, Ontario Grade 10 students pick between two Grade 11 math courses with similar names: Functions and Applications (MCF3M) and Functions (MCR3U). The choice looks small and decides which Grade 12 math courses are open a year later. This page compares the two from the 2007 curriculum, maps where each leads, gives a decision table, and shows one problem asked the MCF3M way and the MCR3U way. We teach both courses alongside school and do not grant Ontario credits; the school grants the credit.',
  secondaryCta: { href: '#decide', label: 'Jump to the decision table' },
  wa: 'Hello Modern Age Coders, my teen in Ontario is choosing between MCF3M and MCR3U for Grade 11 math. Could we book a free first class to see which fits?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Both Grade 11 courses taught',
  spec: [
    ['MCF3M', 'Functions and Applications'],
    ['MCR3U', 'Functions'],
    ['MCF3M type', 'University/college preparation'],
    ['MCR3U type', 'University preparation'],
    ['Decides', 'Which Grade 12 math is open'],
    ['Format', 'A batch, or one to one'],
    ['Credit', 'None granted: the school grants it'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'The short version',
  capsule: 'MCF3M (Functions and Applications) is Ontario&rsquo;s applied Grade 11 university/college math course; MCR3U (Functions) is the university course and the usual route to Advanced Functions and Calculus. Both lead to Data Management. Modern Age Coders teaches both live online, to a batch or privately, in our course High School Mathematics: Algebra to Calculus.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Courses for either Grade 11 route',
    lede: 'The first teaches the Grade 11 content of both courses. The second and third follow the two main Grade 12 routes.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'MM / 01', title: 'High school math', note: 'Quadratics, exponentials and trigonometry at the depth of MCF3M or MCR3U, whichever the student takes.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', code: 'MM / 02', title: 'Ontario Grade 12 University Math', note: 'Advanced Functions and Calculus and Vectors, the Grade 12 route that MCR3U opens.' },
      { course: 'statistics-probability-maths-course', code: 'MM / 03', title: 'Statistics and probability', note: 'Ready for Data Management, the Grade 12 university course both Grade 11 options lead to.' }
    ]
  },

  sections: [
    {
      id: 'compare', tint: 'tint', eyebrow: 'From the curriculum',
      h2: 'MCF3M and MCR3U side by side',
      lede: 'Both courses are described in the 2007 Ontario curriculum for Grades 11 and 12, and both are worth one credit. The table below takes each row from the document or from the ministry&rsquo;s online course records, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'MCF3M and MCR3U compared, from the 2007 Ontario mathematics curriculum and the ministry&rsquo;s course records (read 22 October 2026)', head: ['', 'MCF3M', 'MCR3U'], rows: [
          ['Full name', 'Functions and Applications, Grade 11', 'Functions, Grade 11'],
          ['Course type', 'University/college preparation', 'University preparation'],
          ['Description opens', '&ldquo;This course introduces basic features of the function by extending students&rsquo; experiences with quadratic relations.&rdquo;', '&ldquo;This course introduces the mathematical concept of the function by extending students&rsquo; experiences with linear and quadratic relations.&rdquo;'],
          ['Focus', '&ldquo;It focuses on quadratic, trigonometric, and exponential functions and their use in modelling real-world situations.&rdquo;', 'Discrete and continuous functions, &ldquo;inverse functions&rdquo; and equivalent algebraic expressions'],
          ['Strands', 'Three: Quadratic Functions, Exponential Functions, Trigonometric Functions', 'Four: Characteristics of Functions, Exponential Functions, Discrete Functions, Trigonometric Functions'],
          ['Prerequisite', '&ldquo;Principles of Mathematics, Grade 10, Academic, or Foundations of Mathematics, Grade 10, Applied&rdquo;', '&ldquo;Principles of Mathematics, Grade 10, Academic&rdquo;'],
          ['Trigonometry', '&ldquo;trigonometry in acute triangles using the sine law and the cosine law&rdquo;, and the sine function', 'Angles up to 360 degrees, identities, the ambiguous case, and sine and cosine functions'],
          ['Financial math', '&ldquo;demonstrate an understanding of compound interest and annuities, and solve related problems&rdquo;, inside the exponential strand', 'Compound interest and annuities, inside the discrete functions strand with sequences and series'],
          ['Credit', 'One', 'One']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How the curriculum describes the difference',
          left: [
            'The programme overview is unusually direct. Functions and Applications explores functions &ldquo;using a more applied approach with less emphasis on abstract concepts than in the Grade 11 university preparation course, Functions&rdquo;. Both courses cover quadratics, exponentials and trigonometry; MCR3U goes further into inverses, transformations, rational expressions and sequences.',
            'The two course types are defined differently too. The document says &ldquo;University/college preparation courses are designed to equip students with the knowledge and skills they need to meet the entrance requirements for specific programs offered at universities and colleges.&rdquo; University preparation courses aim at university entrance requirements generally.'
          ],
          rightH3: 'Who MCF3M was written for',
          right: [
            'The overview says MCF3M &ldquo;provides preparation for students who plan to pursue technology-related programs in college, while also leaving the option open for some students to pursue postsecondary programs that require the Grade 12 university preparation course Mathematics of Data Management&rdquo;.',
            'It is also the course with the wider entry. Its prerequisite accepts either Grade 10 course, Academic or Applied, while MCR3U lists only the Academic one. Grade 10 course offerings have changed in some schools since 2007, so check your school&rsquo;s current calendar for the Grade 10 course it treats as the prerequisite.'
          ] },
        { kind: 'source', html: 'Source: ' + PDF + ' (programme overview, course types, the MCF3M and MCR3U course pages), read 22 October 2026, and the ministry&rsquo;s online records for both courses, checked that day. This comparison is ours; the ministry has not reviewed it.' }
      ]
    },
    {
      id: 'paths', tint: 'deep', eyebrow: 'Where each course leads',
      h2: 'The Grade 12 courses each Grade 11 option opens',
      lede: 'The real difference between MCF3M and MCR3U shows up a year later. Each Grade 12 course page in the 2007 document prints its prerequisite, and the table collects them.',
      body: [
        { kind: 'table', caption: 'Grade 12 math courses and which Grade 11 course meets their prerequisite, as printed in the 2007 document (checked 22 October 2026)', head: ['Grade 12 course', 'Type', 'After MCF3M?', 'After MCR3U?'], rows: [
          ['MHF4U, Advanced Functions', 'University', 'Not directly: the prerequisite is MCR3U or MCT4C, so the route is MCF3M, then MCT4C, then MHF4U', 'Yes'],
          ['MCV4U, Calculus and Vectors', 'University', 'Only after reaching MHF4U, which comes first or alongside', 'Yes, with MHF4U first or alongside'],
          ['MDM4U, Mathematics of Data Management', 'University', 'Yes', 'Yes'],
          ['MCT4C, Mathematics for College Technology', 'College', 'Yes', 'Yes'],
          ['MAP4C, Foundations for College Mathematics', 'College', 'Yes', 'Not listed: the prerequisite names MBF3C or MCF3M']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The longer road from MCF3M to Advanced Functions',
          left: [
            'Advanced Functions lists two prerequisites: Grade 11 Functions, or Mathematics for College Technology, a Grade 12 college course. So an MCF3M student who later wants university math has a route, but it adds a course: MCT4C first, then MHF4U.',
            'The overview describes MCT4C in exactly that role: it &ldquo;may help students who decide to pursue certain university programs to prepare for the Grade 12 university preparation course Advanced Functions&rdquo;. In timetable terms, that can mean an extra semester, summer school, or a fifth year for a student who also needs Calculus and Vectors.'
          ],
          rightH3: 'Data Management is open from both',
          right: [
            'Mathematics of Data Management accepts either Grade 11 course. For university programs that need some Grade 12 U math but not calculus, MCF3M followed by MDM4U can be enough; the overview names this option itself.',
            'What MCF3M does not open directly is the calculus route. A student heading for engineering, computer science, the physical sciences or most mathematics programs needs MCR3U in Grade 11 to keep that route at its normal length.'
          ] },
        { kind: 'source', html: 'Source: ' + PDF + ', course pages for MHF4U, MCV4U, MDM4U, MCT4C and MAP4C, read 22 October 2026. Schools decide which courses they offer each year and may have their own rules on changing course types, so confirm with the school&rsquo;s guidance office.' }
      ]
    },
    {
      id: 'decide', tint: 'tint', eyebrow: 'Decision table, ours',
      h2: 'Which Grade 11 math to take: a decision table',
      lede: 'This table is ours. It turns the prerequisite map into plain choices. It is a starting point for a conversation with the school, not a rule, and every row assumes the student will check the exact program pages in Grade 12.',
      body: [
        { kind: 'table', caption: 'Choosing between MCF3M and MCR3U by goal (ours, built from the 2007 prerequisite lines and the admission pages cited on this page)', head: ['If the plan after high school is', 'Grade 12 math likely needed', 'Grade 11 choice that keeps it simplest', 'Why'], rows: [
          ['Engineering, computer science, physical sciences, mathematics', 'MHF4U and MCV4U', 'MCR3U', 'Both courses sit on MCR3U; from MCF3M the route adds MCT4C'],
          ['Business or economics at university', 'Often MCV4U, with MHF4U first or alongside', 'MCR3U', 'The business and economics listings we read name Calculus and Vectors or strongly recommend it'],
          ['Social sciences or humanities that use statistics', 'Often MDM4U, or one Grade 12 U math', 'Either', 'MDM4U accepts MCF3M or MCR3U'],
          ['College technology programs', 'MCT4C', 'Either; MCF3M is written for this', 'MCT4C accepts both, and the overview names college technology as MCF3M&rsquo;s purpose'],
          ['Other college programs', 'MAP4C or MCT4C', 'MCF3M', 'MAP4C lists MCF3M, not MCR3U, among its prerequisites'],
          ['Not sure yet', 'Unknown', 'MCR3U if the student can manage it', 'It keeps every Grade 12 university math course one step away']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When MCR3U is the wrong choice anyway',
          left: [
            'A student who scraped through Grade 10 Academic math with weak algebra may do better in MCF3M, earn a solid mark and take MDM4U, than fail MCR3U. A failed course costs more time than the MCT4C route does.',
            'Our placement questions below are one way to test readiness. If questions 1 to 5 feel comfortable and 6 to 10 feel foreign, the gap is real but closable over a summer. If questions 1 to 5 are hard too, MCF3M deserves a serious look.'
          ],
          rightH3: 'Programs where Grade 12 math is not listed at all',
          right: [
            'Some university programs list no Grade 12 math. Waterloo&rsquo;s Economics page, for example, lists six Grade 12 U and/or M courses including English, gives an &ldquo;Admission average: High 70s (co-op and regular)&rdquo;, and then adds: &ldquo;We strongly recommend that you take high school Calculus and Vectors and Advanced Functions (or equivalents) as economics is a mathematically intensive discipline.&rdquo;',
            'A program that does not require a course may still assume it. Recommendations like this one are worth reading as requirements in all but name.'
          ] },
        { kind: 'table', mt: true, caption: 'Two university listings that accept a non-calculus math, read 22 October 2026', head: ['Program', 'Math on the listing'], rows: [
          ['University of Toronto Scarborough, Psychology', '&ldquo;One Math (Calculus &amp; Vectors / Advanced Functions / Mathematics of Data Management)&rdquo;, marked Recommended'],
          ['University of Waterloo, Economics', 'No Grade 12 math listed as required; Calculus and Vectors and Advanced Functions strongly recommended']
        ] },
        { kind: 'source', html: 'Sources, read 22 October 2026: <a class="ag-inline-link" href="https://uwaterloo.ca/future-students/programs/economics" rel="noopener" target="_blank">University of Waterloo, Economics</a>; <a class="ag-inline-link" href="https://future.utoronto.ca/undergraduate-programs/psychology/" rel="noopener" target="_blank">University of Toronto, Psychology</a>. Requirements are revised each cycle; check them again in Grade 12. Neither university has any link with us.' }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Same problem, two ways (ours)',
      h2: 'One quadratic, asked the MCF3M way and the MCR3U way',
      lede: 'The clearest way to see the difference between the courses is the same function asked about twice. Both versions are our own, written at Grade 11 test level, and every value was checked with SymPy.',
      body: [
        { kind: 'p', html: '<b>The model.</b> A ball is thrown upward from a balcony. Its height in metres after t seconds is h(t) = &minus;4.9t<sup>2</sup> + 19.6t + 1.5.' },
        { kind: 'p', html: '<b>Version A, the MCF3M way.</b> Find the maximum height and when it occurs, when the ball reaches 15 m, and when it lands.' },
        { kind: 'ol', items: [
          '<b>Find the vertex.</b> The axis of symmetry is t = &minus;b/(2a) = &minus;19.6/(2 &times; &minus;4.9) = 2. So the maximum is at t = 2 s, and h(2) = &minus;19.6 + 39.2 + 1.5 = 21.1 m.',
          '<b>Write the vertex form as a check.</b> h(t) = &minus;4.9(t &minus; 2)<sup>2</sup> + 21.1. Expanding returns the original, so the vertex is right.',
          '<b>Solve for 15 m.</b> &minus;4.9t<sup>2</sup> + 19.6t + 1.5 = 15 rearranges to 4.9t<sup>2</sup> &minus; 19.6t + 13.5 = 0. The quadratic formula gives t of about 0.88 s on the way up and about 3.12 s on the way down. Two answers, both meaningful.',
          '<b>Solve for landing.</b> Set h(t) = 0. The formula gives t of about &minus;0.08 or about 4.08. A negative time is before the throw, so it is rejected: the ball lands after about 4.08 s.',
          '<b>Interpret.</b> The two 15 m times are equally spaced around t = 2 (2 &minus; 1.12 and 2 + 1.12), which is the symmetry of the parabola showing up in the story.'
        ] },
        { kind: 'p', mt: true, html: '<b>Version B, the MCR3U way.</b> State a domain and range that fit the context. Then restrict h to the falling part of the flight, find its inverse, and explain what the inverse tells you.' },
        { kind: 'ol', items: [
          '<b>Domain and range from the context.</b> The ball is in the air from t = 0 to about t = 4.08, so the domain is 0 &le; t &le; 4.08 (approximately). Its height runs from 0 up to the maximum of 21.1, so the range is 0 &le; h &le; 21.1.',
          '<b>Why restrict before inverting.</b> On the whole flight, most heights happen twice, once rising and once falling, so the inverse would not be a function. On the falling part, t &ge; 2, each height happens once.',
          '<b>Undo the vertex form in reverse.</b> From h = &minus;4.9(t &minus; 2)<sup>2</sup> + 21.1: subtract 21.1, divide by &minus;4.9, take the positive square root (because t &ge; 2), add 2. So t = 2 + &radic;((21.1 &minus; h)/4.9).',
          '<b>State the inverse&rsquo;s domain and range.</b> On the falling part, heights run from 21.1 down to 0, so the inverse takes 0 &le; h &le; 21.1 and returns times from 2 to about 4.08.',
          '<b>Check and interpret.</b> At h = 1.5, the balcony height, the inverse gives 2 + &radic;(19.6/4.9) = 2 + 2 = 4 s: the ball falls past the balcony exactly 4 seconds after the throw. The inverse answers &ldquo;when is it at this height?&rdquo; for any height at all, in one formula.'
        ] },
        { kind: 'table', mt: true, caption: 'What each version asked of the student (ours)', head: ['', 'Version A (MCF3M style)', 'Version B (MCR3U style)'], rows: [
          ['Main skill', 'Solving: vertex, quadratic formula, rejecting a negative time', 'Reasoning about the function: domain, range, one-to-one, inverse'],
          ['Typical output', 'Numbers with units', 'A new function and an explanation'],
          ['Algebra', 'Substitution and the quadratic formula', 'Rearranging a formula in reverse order, choosing a root'],
          ['Where marks are lost', 'Keeping the negative root', 'Inverting without restricting the domain']
        ] },
        { kind: 'p', mt: true, html: 'Students who enjoy version B, or at least follow it, are usually ready for MCR3U. Students who find version A comfortable and version B baffling are not wrong to choose MCF3M, but they should know which Grade 12 courses that choice leaves one step further away.' }
      ]
    },
    {
      id: 'placement', tint: 'tint', eyebrow: 'Placement check, ours',
      h2: 'Ten placement questions: MCF3M-ready, MCR3U-ready',
      lede: 'Our own short check, written for this page, for a Grade 10 student deciding. Questions 1 to 5 test the base both courses assume. Questions 6 to 10 preview ideas that only MCR3U treats in depth. Answers follow; try them without a calculator except for question 5.',
      body: [
        { kind: 'ol', items: [
          '<b>Expand.</b> (2x &minus; 3)(x + 4).',
          '<b>Solve by factoring.</b> x<sup>2</sup> &minus; 5x &minus; 14 = 0.',
          '<b>Exponent laws.</b> Evaluate 2<sup>3</sup> &times; 2<sup>&minus;1</sup>.',
          '<b>Growth.</b> A phone game has 1000 players and the number grows by 4% each week. About how many players will it have after 5 weeks?',
          '<b>Sine law.</b> In a triangle, A = 50&deg;, B = 60&deg; and side a = 12 cm. Find side b to one decimal place.',
          '<b>Inverse.</b> Find the inverse of f(x) = (x &minus; 4)/2.',
          '<b>Rational expressions.</b> Simplify (x<sup>2</sup> &minus; 4)/(x<sup>2</sup> &minus; x &minus; 2) and state the restrictions.',
          '<b>Fractional exponents.</b> What is 16<sup>3/4</sup>?',
          '<b>Series.</b> Add the first 8 terms of 3 + 6 + 12 + &hellip;',
          '<b>Angles beyond 90&deg;.</b> Find every angle from 0&deg; to 360&deg; with sin x = &minus;1/2.'
        ] }
      ]
    },
    {
      id: 'answers', tint: 'deep', eyebrow: 'Answers, ours',
      h2: 'Placement answers, and what they say',
      lede: 'Mark each answer right only if the reason is right too. Then read the note after the list.',
      body: [
        { kind: 'ol', items: [
          '<b>2x<sup>2</sup> + 5x &minus; 12.</b> 2x &times; x = 2x<sup>2</sup>; the middle terms are 8x &minus; 3x = 5x; the constant is &minus;12.',
          '<b>x = 7 or x = &minus;2.</b> Find two numbers that multiply to &minus;14 and add to &minus;5: &minus;7 and 2. So (x &minus; 7)(x + 2) = 0.',
          '<b>4.</b> Add the exponents: 2<sup>3 + (&minus;1)</sup> = 2<sup>2</sup> = 4.',
          '<b>About 1217.</b> Multiply by 1.04 five times: 1000 &times; 1.04<sup>5</sup> is about 1216.7. Growth by a fixed percentage is exponential, not linear, so adding 40 each week is wrong.',
          '<b>About 13.6 cm.</b> b = 12 sin 60&deg; / sin 50&deg;, about 13.57. The longer side faces the larger angle, which is a quick check.',
          '<b>f<sup>&minus;1</sup>(x) = 2x + 4.</b> f subtracts 4 then halves; the inverse doubles then adds 4.',
          '<b>(x + 2)/(x + 1), with x &ne; 2 and x &ne; &minus;1.</b> Factor: (x &minus; 2)(x + 2) over (x &minus; 2)(x + 1). The restrictions come from the original denominator, before cancelling.',
          '<b>8.</b> The fourth root of 16 is 2, and 2 cubed is 8.',
          '<b>765.</b> Each term doubles, so it is geometric with first term 3 and ratio 2. The sum is 3(2<sup>8</sup> &minus; 1)/(2 &minus; 1) = 3 &times; 255 = 765.',
          '<b>210&deg; and 330&deg;.</b> The reference angle is 30&deg;, and sine is negative in the third and fourth quadrants: 180&deg; + 30&deg; and 360&deg; &minus; 30&deg;.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the result',
          left: [
            'Four or five right in 1 to 5: the base for either course is there. Fewer than three: rebuild Grade 10 algebra first, whichever course is chosen, because both assume it.',
            'Questions 6 to 10 are MCR3U topics that MCF3M treats lightly or not at all. A student who manages two or three of them before Grade 11 starts is in good shape for MCR3U.'
          ],
          rightH3: 'What the check cannot tell you',
          right: [
            'Ten questions are a snapshot, not a verdict. Motivation and the Grade 12 plan matter as much as one evening of algebra. A student set on engineering can close a gap over the summer; a student without a plan may prefer the course where they can do well.',
            'This check is ours and is not used by any school. The school&rsquo;s guidance staff and the Grade 10 teacher know the student&rsquo;s work and should have the final word.'
          ] }
      ]
    },
    {
      id: 'exam', tint: 'tint', eyebrow: 'Final exam plan, ours',
      h2: 'A four-week final exam plan for either course',
      lede: 'Whichever course your teen takes, the last month before the Grade 11 math exam can follow the same plan. The rows that differ by course are marked. Confirm the exam&rsquo;s weight and the calculator rules with the teacher first.',
      body: [
        { kind: 'table', caption: 'Four weeks to the MCF3M or MCR3U final (ours)', head: ['Week', 'Both courses', 'MCF3M adds', 'MCR3U adds'], numCols: [0], rows: [
          ['4', 'Sort every lost mark from the term by unit', 'Applications: reading a word problem into an equation', 'Function notation, domain and range, inverses'],
          ['3', 'Quadratics in all forms, exponent laws', 'Compound interest and annuities in the exponential unit', 'Rational expressions with restrictions, sequences and series'],
          ['2', 'Trigonometry and sinusoidal graphs', 'Sine law and cosine law in acute triangles', 'Angles to 360 degrees, identities, the ambiguous case'],
          ['1', 'Two timed practice tests, then the error list only', 'Units and interpretation on every answer', 'A written reason for every step']
        ] },
        { kind: 'p', mt: true, html: 'The common rule in both: never study a topic by rereading notes. Close the book, solve a problem, then check. The placement questions above double as a warm-up in week 4.' }
      ]
    },
    {
      id: 'credit', tint: 'deep', eyebrow: 'Credit, switching and timing',
      h2: 'Switching courses, summer school, and where the credit comes from',
      lede: 'Families sometimes ask whether they can change their mind after Grade 11. Often they can, with some cost in time. Here is what we can say from the curriculum and what only the school can say.',
      body: [
        { kind: 'two',
          leftH3: 'Changing route after MCF3M',
          left: [
            'The curriculum gives an MCF3M student two ways into Advanced Functions: take MCT4C first, or take MCR3U as an additional course, for example in summer school. Which of these a school offers, and whether it accepts other routes, is the school&rsquo;s decision.',
            'Either way, the earlier the decision, the shorter the detour. A Grade 11 student unsure of their Grade 12 plans should speak to guidance before the course selection deadline, not after.'
          ],
          rightH3: 'The credit, and our role',
          right: [
            'Only the school or program delivering a course can award its credit, whether for MCF3M, MCR3U or any Grade 12 math. Our part is tutoring beside the student&rsquo;s course, and we do not grant Ontario credits.',
            'We help in both directions: catching up an MCF3M student moving towards MCR3U or MCT4C, and keeping an MCR3U student on track for Advanced Functions.'
          ] },
        { kind: 'p', mt: true, html: 'Eastern time covers most of Ontario. It reads UTC-4 until 1 November 2026, UTC-5 through the winter, and UTC-4 again from 14 March 2027. India time, our teachers&rsquo; clock, stays at UTC+5:30 all year, so the gap is nine and a half hours in summer and ten and a half in winter. Anyone in a northwestern community with its own clock should mention it when booking.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four stages of readiness for Grade 11 math',
    lede: 'Our own stages, for a Grade 10 student choosing between the two courses.',
    table: { caption: 'Grade 11 math readiness (ours)', head: ['Stage', 'What we see'], rows: [
      ['1. Shaky base', 'Expanding and factoring still cause errors; Grade 10 algebra needs work before either course'],
      ['2. Ready for MCF3M', 'Solves quadratics and applied problems reliably; abstract questions feel unfamiliar'],
      ['3. Ready for MCR3U', 'Comfortable with algebra and starting to reason about functions, not only compute them'],
      ['4. Ahead', 'Handles inverses and restrictions already; may enjoy contests alongside MCR3U']
    ] },
    left: { h3: 'For parents', ps: [
      'Start the conversation from Grade 12, not Grade 11. Ask your teen which kinds of programs interest them, then look at which Grade 12 math those programs list.',
      'A course chosen to avoid difficulty is not always the easy option later. A course chosen beyond current skill is not either. The placement check is one honest data point.'
    ] },
    right: { h3: 'For students', ps: [
      'Try the placement questions without notes. Your score is information, not a judgement.',
      'If you choose MCF3M and change your mind later, there is a route. It is just longer, so decide as early as you can.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for Grade 10 and 11 students',
    lede: 'Taught live on video by a regular teacher, to a batch or privately.',
    bands: [
      { num: 'I', h3: 'Before and during Grade 11', sub: 'Grades 9 to 11', courses: [
        { code: 'MM / G11 / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The Grade 10 algebra both courses assume.' },
        { code: 'MM / G11 / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'For gaps that go back before Grade 9.' },
        { code: 'MM / G11 / 03', slug: 'ap-precalculus-exam-prep-course', title: 'Precalculus', blurb: 'Extra depth on functions for the MCR3U route.' }
      ] },
      { num: 'II', h3: 'Contests and tests', sub: 'Grades 9 to 12', courses: [
        { code: 'MM / CON / 01', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Preparation for the Waterloo CEMC math contests.' },
        { code: 'MM / CON / 02', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'For students also considering US universities.' },
        { code: 'MM / CON / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'For stage 4 students who want a challenge.' }
      ] },
      { num: 'III', h3: 'Math with technology', sub: 'Teens', courses: [
        { code: 'MM / TEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Model a thrown ball or a growing game in code.' },
        { code: 'MM / TEC / 02', slug: 'ics3u-ics4u-computer-science-companion-course', title: 'Ontario computer science companion', blurb: 'ICS3U and ICS4U support, for a Grade 11 STEM timetable.' },
        { code: 'MM / TEC / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'A first look at the statistics behind Data Management.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes for either Grade 11 course',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Late afternoons, Eastern time, fixed by the batch.' },
      { time: 'Weekends', l: 'Eastern time mornings, often before tests.' },
      { time: '1-on-1', l: 'Around course selection, tests and summer school.' }
    ],
    cells: [
      { h3: 'Either course', p: 'MCF3M or MCR3U, at its own depth.' },
      { h3: 'Grade 12 in view', p: 'Each unit linked to what comes next.' },
      { h3: 'Placement first', p: 'A short check in the first class.' },
      { h3: 'Applied and abstract', p: 'Word problems and function reasoning.' },
      { h3: 'Homework sets', p: 'Brief, and returned with notes.' },
      { h3: 'Group or private', p: 'Fifteen to twenty students, or one.' }
    ]
  },

  projectsH2: 'Student work',
  projectsLede: 'A few projects by students who learn coding with us; many also take Grade 11 math. See the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Families and students on Google, in their own words.',

  fees: {
    h2: 'Fees',
    lede: 'The first class is free, and it can double as the placement conversation. After that, a monthly fee covers eight live classes, the fee shows its currency code, and there is no term contract: stop after any month.',
    free: ['Free first class', 'Placement questions included', 'No card needed'],
    group: ['Fifteen to twenty per batch', 'One regular teacher', 'Batch time you choose', 'Paid monthly'],
    one: ['One teacher for your teen', 'Paced to the chosen course', 'Times around school']
  },

  faq: {
    eyebrow: 'Questions from Ontario families',
    h2: 'MCF3M vs MCR3U: common questions',
    items: [
      { q: 'What is the difference between MCF3M and MCR3U?', a: 'MCF3M is Functions and Applications, a Grade 11 university/college preparation course with three strands: quadratic, exponential and trigonometric functions, taught with an applied approach. MCR3U is Functions, the Grade 11 university preparation course, with four strands that add inverses, transformations, rational expressions, and sequences and series.' },
      { q: 'Which is harder, MCF3M or MCR3U?', a: 'MCR3U is more abstract. The 2007 curriculum describes MCF3M as using a more applied approach with less emphasis on abstract concepts than MCR3U. Difficulty depends on the student, though: a strong algebra base matters more than the course name.' },
      { q: 'Can I take MHF4U after MCF3M?', a: 'Not directly. Advanced Functions lists Grade 11 Functions (MCR3U) or Mathematics for College Technology (MCT4C) as its prerequisite. From MCF3M, the curriculum route is MCT4C first, then MHF4U. Some students take MCR3U in summer school instead; ask the school which routes it accepts.' },
      { q: 'Can I take Data Management after MCF3M?', a: 'Yes. Mathematics of Data Management (MDM4U) lists either Grade 11 Functions or Grade 11 Functions and Applications as its prerequisite, so both MCF3M and MCR3U lead to it.' },
      { q: 'Which Grade 11 math do I need for university?', a: 'It depends on the program. Programs that need Advanced Functions or Calculus and Vectors, such as engineering, computer science and most mathematics and science programs, are simplest from MCR3U. Some social science programs accept MDM4U, which MCF3M also leads to. Check the program pages before choosing.' },
      { q: 'Do you grant the MCF3M or MCR3U credit?', a: 'No. Our lessons support whichever course the student takes at school, and we do not grant Ontario credits; those come only from the institution teaching and evaluating it.' },
      { q: 'Can a student in Grade 10 Applied math take MCR3U?', a: 'The MCR3U course page lists Principles of Mathematics, Grade 10, Academic as its prerequisite, while MCF3M accepts either the Academic or the Applied course. Grade 10 offerings have changed in some schools, so check how your school treats its current Grade 10 course.' },
      { q: 'Can you help my teen decide?', a: 'We can give a placement check and an honest view of readiness in the free first class, and explain the prerequisite routes. The decision belongs to the family with the school\'s guidance staff, who know the student\'s record and the school\'s course offerings.' },
      { q: 'When can classes be scheduled?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are agreed in Eastern time, and we check them again around the clock changes of 1 November 2026 and 14 March 2027.' },
      { q: 'How much do Grade 11 math classes cost?', a: 'Nothing for the first class. From then on, eight live classes a month are paid monthly, with no lock-in. See the fees section above for today\'s batch and one-to-one amounts.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Ontario families planning high school math.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our pages for families across Canada.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor for Canada', p: 'Help for Canadian students from the early grades to Grade 12.' },
      { href: '/online-math-tutor-11th-grade', label: 'Grade 11 math tutoring', p: 'Private help with whichever Grade 11 course is chosen.' },
      { href: '/online-math-tutor-10th-grade', label: 'Grade 10 math tutoring', p: 'Fixing the base before Grade 11.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Live coding for teens across the province.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U computer science help', p: 'Computer science alongside Grade 11 math.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests', p: 'The Gauss to Euclid contest family, explained.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live class method, described.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Share which course your teen is taking or considering, their Grade 10 math mark if you are comfortable sharing it, and their thoughts on Grade 12. The first class includes a short placement check.',
    readFirst: 'Reading first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains our classes, and our <a class="ag-inline-link" href="/online-math-tutor-canada">Canada math tutoring page</a> covers every grade.',
    note: 'Lessons are live on video, taught by teachers working from India, so nobody has to travel. Message us on WhatsApp for the fastest answer from Ontario.',
    formNote: 'The free class needs no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Grade 11 math', links: [
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'High school math course' },
        { href: '/courses/statistics-probability-maths-course', label: 'Statistics and probability' },
        { href: '/online-math-tutor-11th-grade', label: 'Grade 11 math tutoring' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
        { href: '/ics3u-computer-science-help', label: 'ICS3U help' }
      ] }
    ],
    bottomRight: 'Choose Grade 11 by working back from Grade 12'
  },

  personalityCss: `
.ag-root.ag-mm .ag-hero h1 { letter-spacing: -0.012em; max-width: 24ch; }
.ag-root.ag-mm .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-mm .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-mm .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-mm .ag-steps li { margin-bottom: 0.6rem; }
`,

  dossier: {
    curriculumAuthority: 'The Ontario Curriculum, Grades 11 and 12: Mathematics (2007), fetched raw 22 October 2026: programme overview for MCF3M and MCT4C; the university/college preparation course type definition; MCF3M and MCR3U descriptions, prerequisites, strands and overall expectations; the prerequisite lines of MHF4U, MDM4U, MCT4C and MAP4C. Ontario curriculum content API records for MCF3M and MCR3U (titles, 2007, destinations). Waterloo Economics and U of T Psychology admission pages.',
    localProject: 'Our decision table (goal, likely Grade 12 math, simplest Grade 11 choice, reason); one quadratic h(t) = -4.9t^2 + 19.6t + 1.5 asked two ways, MCF3M style (maximum 21.1 m at 2 s, 15 m at about 0.88 s and 3.12 s, lands at about 4.08 s) and MCR3U style (context domain and range, inverse on the falling part t = 2 + root((21.1 - h)/4.9), balcony check at 4 s); a ten-question placement set with answers; a four-week exam plan for either course. Lesson family: start from where you want to be.',
    requiredMentions: ['This course introduces basic features of the function by extending students&rsquo; experiences with quadratic relations.', 'It focuses on quadratic, trigonometric, and exponential functions and their use in modelling real-world situations.', 'Principles of Mathematics, Grade 10, Academic, or Foundations of Mathematics, Grade 10, Applied', 'using a more applied approach with less emphasis on abstract concepts', 'leaving the option open for some students to pursue postsecondary programs', 'may help students who decide to pursue certain university programs', 'Not listed: the prerequisite names MBF3C or MCF3M', 'Admission average: High 70s (co-op and regular)', 'h(t) = &minus;4.9t<sup>2</sup> + 19.6t + 1.5', 't = 2 + &radic;((21.1 &minus; h)/4.9)', 'Ten placement questions: MCF3M-ready, MCR3U-ready', 'Choose Grade 11 by working back from Grade 12'],
    sources: [
      { claim: 'MCF3M and MCR3U descriptions, prerequisites, strands, expectations; course type definitions; programme overview on MCF3M and MCT4C; Grade 12 prerequisite lines.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf' },
      { claim: 'Current course records for MCF3M (University-College Preparation) and MCR3U (University Preparation), 2007, with prerequisite texts.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=MCR3U,MHF4U,MCV4U,MDM4U,MPM2D,MTH1W,MCF3M,MAP4C,MEL4E&depth=0' },
      { claim: 'Waterloo Economics: English required, High 70s, Calculus and Vectors and Advanced Functions strongly recommended.', url: 'https://uwaterloo.ca/future-students/programs/economics' },
      { claim: 'U of T Scarborough Psychology: one of MCV4U, MHF4U or MDM4U recommended.', url: 'https://future.utoronto.ca/undergraduate-programs/psychology/' }
    ],
    rejectedClaims: [
      'That a student can switch from MCF3M to MHF4U directly: the MHF4U prerequisite names MCR3U or MCT4C only.',
      'Reading transfer-course arrows off the 2007 prerequisite chart: the extracted chart is ambiguous, so no transfer route is claimed.',
      'That Grade 10 Applied is still offered under that name everywhere: the page asks families to check their school.',
      'That MCF3M is the easier course for every student: the page says difficulty depends on the algebra base.',
      'A worked example about money: the financial strands are described from the curriculum, not modelled.',
      'Any mark, placement outcome or admission result from our classes: none promised; the placement check is labelled ours and not used by schools.',
      'Named schools or guidance policies: none named; routes are left to the school.',
      'Any affiliation with the Ontario Ministry of Education, Waterloo or U of T: none, and the page says so.'
    ]
  }
};
