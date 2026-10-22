'use strict';
// Math 30-1 tutor, Alberta (ag- school course door; Canada cluster Plan 2, row 28).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/math-30-1-tutor-alberta/;
// shared copies in ca/src-pilots/alberta-math-shared/). Alberta writes "Mathematics 30–1" with an en dash; the page writes a
// hyphen, and ranges such as "53%–58%" are written "53% to 58%" (house rule: no en dash).
//  - Mathematics 30-1 Information Bulletin, Diploma Examinations Program 2026-2027 (alberta.ca/system/files/ecc-math-30-1-info-bulletin.pdf):
//    course objective "entry into post-secondary programs that require the study of calculus"; "algebraic, numerical, and graphical
//    approaches are used to solve problems"; the seven mathematical processes [C] [CN] [ME] [PS] [R] [T] [V]; acceptable standard
//    "between 50% and 79%, inclusive", standard of excellence "80% or higher"; specifications: Machine Scored 32 / 75%, Written Response
//    3 / 25%; Relations and Functions 53%-58%, Trigonometry 27%-33%, Permutations, Combinations, and Binomial Theorem 14%-18%; cognitive
//    levels Conceptual 34%, Problem Solving 36%, Procedural 30%; "designed so that the majority of students can complete it within 3 hours"
//    and "up to 6 hours"; "requires the use of an approved graphing calculator"; commentary bullets quoted: "difficulty determining the
//    domain and range of a rational function that contains a point of discontinuity", "difficulty solving equations when an identity
//    substitution is required", "combining multiple logarithm laws to simplify an expression into a single logarithm", "difficulty
//    determining the number of invariant points associated with other transformations", "difficulty using this notation to represent
//    stretches", "three or more constraints or multiple cases", "non-linear terms"; written-response observations: "the difference between
//    simplifying or factoring an expression and solving an equation", "the difference between verifying and proving a trigonometric
//    identity", "forget to include the angle argument", "write expressions in place of equations", "Using abbreviations in written
//    explanations is inappropriate and not acceptable."
//  - Mathematics 30-1 Assessment Standards and Exemplars (2023, alberta.ca/system/files/custom_downloaded_images/edc-math30-1-assessment-standards-exemplars.pdf):
//    general outcomes "Develop algebraic and graphical reasoning through the study of relations.", "Develop trigonometric reasoning.",
//    "Develop algebraic and numeric reasoning that involves combinatorics."; specific outcomes RF1 to RF14, T1 to T6, PCBT1 to PCBT4
//    (wording quoted in the outcomes table); "Stretches and reflections are performed prior to translations unless otherwise stated.";
//    technology note "students are expected to meet these outcomes without the use of technology" (RF2 to RF7, RF10, RF11); "Students
//    should understand that proving an identity is different from solving an equation."; "In most classrooms, students will use a
//    graphing calculator daily."
//  - General Information Bulletin 2026-2027: Diploma Examinations Program, schedule pages 11 to 15 (edc-diploma-exam-schedule.pdf):
//    Mathematics 30-1, 9 AM to 12 PM, Tuesday 3 November 2026; Wednesday 20 January, Thursday 8 April, Thursday 17 June and Thursday
//    5 August 2027 (rows confirmed by PyMuPDF word positions and a weekday check).
//  - alberta.ca/diploma-exams-overview: "The weighting of diploma exams returned to 30% effective September 1, 2023."; "70% of the final
//    mark comes from course work. The remaining 30% comes from the diploma exam."
//  - Guide to Education (manuals.alberta.ca, Transfer points and course sequences for senior high school, version updated 4 September 2026):
//    Mathematics Program "(Each course is 5 credits.)"; "Mathematics 30-1 is a prerequisite or corequisite for Mathematics 31."; the
//    sequence chart (image) shows Mathematics 10C to 20-1 to 30-1 as the typical progression and 30-1 to Mathematics 31.
//  - Time: facts-geo.md section 3 (tzdb 2026e): Alberta UTC-6 all year; India time is 11 hours 30 minutes ahead all year.
// Failures recorded: education.alberta.ca/media/564028/math10to12.pdf (the 10 to 12 program of studies) now returns a one-page
// "We've Moved" notice; curriculum.learnalberta.ca printable curriculum is JavaScript only; open.alberta.ca returned a 403 challenge
// (not retried). So the program of studies is quoted only through the Assessment Standards document, which reprints its outcomes.
// Our own material, labelled on the page: both worked problems (rational function with a hole; trigonometric equation needing an
// identity substitution), the ten practice questions and answers (every numeric answer checked in Python 3.13: roots pi/6, 5pi/6,
// 3pi/2 by substitution and a grid scan; hole value 4/3; (f o g)(-2) = 5, (g o f)(-2) = 49; image point (3, 13); x = 5; 3^x = 20 gives
// 2.7268; zeros -2, 1, 3; arc 8 pi = 25.13; CANADA arrangements 120 and 24), the term plan, the unit map and the ladder.
// Lesson family: show every step (exact values, restrictions, checking).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SRC_BULLETIN = '<a class="ag-inline-link" href="https://www.alberta.ca/system/files/ecc-math-30-1-info-bulletin.pdf" rel="noopener" target="_blank">Mathematics 30-1 Information Bulletin 2026-2027</a>';
const SRC_STANDARDS = '<a class="ag-inline-link" href="https://www.alberta.ca/system/files/custom_downloaded_images/edc-math30-1-assessment-standards-exemplars.pdf" rel="noopener" target="_blank">Mathematics 30-1 Assessment Standards and Exemplars</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'MATH 30-1', blurb: 'Alberta Math 30-1 unit by unit from Alberta Education\'s own outcomes, with the topics markers say students miss, two worked problems and ten practice questions.' },
  slug: 'math-30-1-tutor-alberta',
  code: 'mat',
  accent: '#187028',
  accentRationale: 'Math 30-1 tutor, Alberta: a prairie spruce green, #187028, allocated for this row in alloc.tsv; 7.0 RGB units from the nearest site accent (#127326) and 13.2 from the nearest Canada page accent (#166B34, a page added after allocation); contrast 5.85 on the paper #FBF8F2 and 5.03 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Math 30-1 tutor, Alberta',
  title: 'Math 30-1 Tutor, Alberta: Outcomes, Worked Problems, Practice',
  description: 'Alberta Math 30-1 explained from Alberta Education\'s outcomes: functions, logs, trig and combinatorics, two worked problems, ten practice questions and a plan.',
  ogDescription: 'What Math 30-1 asks for, outcome by outcome, from Alberta Education\'s own documents. Plus the topics markers flag every year, two worked problems and ten original practice questions with answers.',
  twitterDescription: 'Alberta Math 30-1, outcome by outcome, with worked problems and practice.',
  pageName: 'Math 30-1 Tutor, Alberta',
  webPageDescription: 'A guide for Alberta Grade 12 students and parents to Mathematics 30-1, built from Alberta Education\'s information bulletin and assessment standards, with two worked problems, ten practice questions and a term plan.',
  courseDescription: 'Live online Math 30-1 help for Alberta students, taught alongside the school course in a batch or one to one. No provincial credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Alberta', href: '/coding-classes-in-alberta' }],
  crumbLabel: 'Math 30-1 tutor',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#outcomes', label: 'Outcomes' },
    { href: '#trouble', label: 'Where marks go' },
    { href: '#worked', label: 'Worked problems' },
    { href: '#practice', label: 'Practice' },
    { href: '#plan', label: 'Term plan' }
  ],
  eyebrow: 'Alberta &middot; Grade 12 &middot; Mathematics 30-1',
  h1: 'Math 30-1 tutor for Alberta students',
  lede: 'Mathematics 30-1 is the Grade 12 course Alberta designs for students heading to programs that need calculus, and it ends in a provincial diploma exam that counts for 30 per cent of the final mark. Most students who struggle with it are not weak at math: they lose marks on a short list of skills that Alberta&rsquo;s own markers name every year. This page lays out the course from Alberta Education&rsquo;s documents, then works through two of those skills step by step. We teach alongside your teen&rsquo;s school course, and we do not grant provincial credits: that credit is the school&rsquo;s to give.',
  secondaryCta: { href: '#practice', label: 'Ten practice questions' },
  wa: 'Hello Modern Age Coders, my teen in Alberta is taking Math 30-1 and would like help alongside the school course. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Edmonton, Calgary and anywhere in Alberta',
  spec: [
    ['For', 'Grade 12, Mathematics 30-1'],
    ['Exam', 'Provincial diploma exam, 30% of the final mark'],
    ['Calculator', 'An approved graphing model, as on the exam'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Clock', 'Alberta time, UTC-6 all year'],
    ['Credit', 'None granted: we teach alongside school'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Math 30-1 is Alberta&rsquo;s Grade 12 math course for students bound for programs that require calculus: functions and their transformations, exponents and logarithms, polynomial, radical and rational functions, trigonometry, and permutations and combinations, finished by a diploma exam worth 30 per cent. Modern Age Coders tutors it live online through our Western Canada Grade 12 Math course, in a batch or one to one.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for a Math 30-1 student',
    lede: 'The first follows Alberta&rsquo;s Grade 12 outcomes directly. The other two suit students who want a broader base or a head start on calculus.',
    items: [
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', code: 'MAT / 01', title: 'Western Canada Grade 12 Math', note: 'Grade 12. Paced to Math 30-1 and BC Pre-calculus 12, with written-response practice in the diploma style.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'MAT / 02', title: 'High school mathematics', note: 'Grades 9 to 12. Rebuilds the algebra underneath 30-1 for students carrying gaps from earlier courses.' },
      { course: 'ap-calculus-exam-prep', code: 'MAT / 03', title: 'Calculus', note: 'Grades 11 and 12. Limits and derivatives for students taking Math 31 or heading into first-year calculus.' }
    ]
  },

  sections: [
    {
      id: 'outcomes', tint: 'tint', eyebrow: 'Alberta&rsquo;s own outcomes',
      h2: 'What Math 30-1 covers, outcome by outcome',
      lede: 'Alberta Education describes the course this way in its 2026 to 2027 bulletin: Math 30-1 builds the &ldquo;critical-thinking skills identified for entry into post-secondary programs that require the study of calculus&rdquo;, and &ldquo;algebraic, numerical, and graphical approaches are used to solve problems.&rdquo; The program of studies groups the course under three general outcomes. The wording below is Alberta&rsquo;s, as reprinted in its Assessment Standards and Exemplars document.',
      body: [
        { kind: 'table', caption: 'Mathematics 30-1 general and specific outcomes, quoted from Alberta Education&rsquo;s Assessment Standards and Exemplars (read 22 October 2026)', head: ['Strand and general outcome', 'Specific outcomes, in Alberta&rsquo;s words (shortened)', 'What that means at the desk (our reading)'], rows: [
          ['Relations and Functions: &ldquo;Develop algebraic and graphical reasoning through the study of relations.&rdquo;', '&ldquo;operations on, and compositions of, functions&rdquo;; translations, stretches and reflections &ldquo;on the graphs of functions and their related equations&rdquo;; &ldquo;inverses of relations&rdquo;', 'Reading a transformed equation like a set of instructions, mapping notation, finding an inverse and its restrictions'],
          ['Relations and Functions, continued', '&ldquo;Demonstrate an understanding of logarithms.&rdquo;; &ldquo;the product, quotient, and power laws of logarithms&rdquo;; &ldquo;Graph and analyze exponential and logarithmic functions.&rdquo;; &ldquo;Solve problems that involve exponential and logarithmic equations.&rdquo;', 'Switching between exponential and logarithmic form, combining log laws, solving equations with and without a common base'],
          ['Relations and Functions, continued', '&ldquo;factoring polynomials of degree greater than 2&rdquo;; &ldquo;Graph and analyze polynomial functions&rdquo;; &ldquo;Graph and analyze radical functions&rdquo;; &ldquo;Graph and analyze rational functions&rdquo;', 'Factor theorem and zeros with multiplicity, square-root graphs, asymptotes and holes'],
          ['Trigonometry: &ldquo;Develop trigonometric reasoning.&rdquo;', '&ldquo;angles in standard position, expressed in degrees and radians&rdquo;; &ldquo;Develop and apply the equation of the unit circle.&rdquo;; &ldquo;the six trigonometric ratios&rdquo;; graphs of sine, cosine and tangent', 'Radians as a ratio of arc to radius, exact values from the unit circle, amplitude, period and phase shift'],
          ['Trigonometry, continued', '&ldquo;Solve, algebraically and graphically, first- and second-degree trigonometric equations&rdquo;; &ldquo;Prove trigonometric identities&rdquo; using reciprocal, quotient, Pythagorean, sum or difference and double-angle identities', 'Solving with every solution in the domain, and writing a proof that works one side only'],
          ['Permutations, Combinations, and Binomial Theorem: &ldquo;Develop algebraic and numeric reasoning that involves combinatorics.&rdquo;', '&ldquo;Apply the fundamental counting principle to solve problems.&rdquo;; permutations &ldquo;of n elements taken r at a time&rdquo;; combinations &ldquo;of n different elements taken r at a time&rdquo;; &ldquo;Expand powers of a binomial in a variety of ways, including using the binomial theorem&rdquo;', 'Counting with cases and restrictions, telling order from no order, finding one term of an expansion without writing them all']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The fine print students miss',
          left: [
            'The general notes in the same document carry rules that cost marks when they are ignored. One is about order: &ldquo;Stretches and reflections are performed prior to translations unless otherwise stated.&rdquo; A student who translates first gets the right shape in the wrong place.',
            'Another is about technology. For the transformation, inverse and logarithm outcomes, and for factoring polynomials, Alberta says that &ldquo;students are expected to meet these outcomes without the use of technology&rdquo;, even though they may use it to explore. In practice that means the graphing calculator can confirm an answer but cannot be the method.'
          ],
          rightH3: 'Seven processes, not just topics',
          right: [
            'Alberta lists seven mathematical processes that are meant to run through the whole course: Communication [C], Connections [CN], Mental Mathematics and Estimation [ME], Problem Solving [PS], Reasoning [R], Technology [T] and Visualization [V]. Every specific outcome is tagged with some of them.',
            'Communication is the one families underestimate. The bulletin says students are expected to &ldquo;communicate solutions clearly and effectively when solving both routine and non-routine problems.&rdquo; On the diploma exam that is not a slogan: it is a quarter of the mark, the written-response part.'
          ] },
        { kind: 'table', mt: true, caption: 'How the 2026 to 2027 Math 30-1 diploma exam is weighted, from the Information Bulletin (read 22 October 2026)', head: ['Part of the blueprint', 'Alberta&rsquo;s figure'], numCols: [1], rows: [
          ['Machine-scored questions', '32 questions, 75% of the exam'],
          ['Written-response questions', '3 questions, 25% of the exam, equally weighted'],
          ['Relations and Functions', '53% to 58%'],
          ['Trigonometry', '27% to 33%'],
          ['Permutations, Combinations, and Binomial Theorem', '14% to 18%'],
          ['Cognitive level: conceptual, problem solving, procedural', '34%, 36% and 30%'],
          ['Time', 'Designed for 3 hours; a further 3 hours allowed']
        ] },
        { kind: 'source', html: 'Sources: ' + SRC_STANDARDS + ' (general notes and specific outcomes) and the ' + SRC_BULLETIN + ' (course objectives, processes, specifications), both read 22 October 2026. Alberta prints the course name with an en dash; we write Math 30-1. We have no connection with Alberta Education and Childcare.' }
      ]
    },
    {
      id: 'trouble', tint: 'deep', eyebrow: 'Where marks go',
      h2: 'The Math 30-1 skills Alberta&rsquo;s markers flag',
      lede: 'Each year&rsquo;s bulletin carries a commentary on how students did on past diploma exams. It is the most useful page a Math 30-1 student never reads. We use it as a teaching map: the left column is Alberta&rsquo;s observation, the right is what we do about it in class.',
      body: [
        { kind: 'table', caption: 'Areas for improvement named in the 2026 to 2027 Math 30-1 bulletin commentary, and our response (left column quoted; right column ours)', head: ['Alberta&rsquo;s commentary says students...', 'How we teach it'], rows: [
          ['have &ldquo;difficulty using this notation to represent stretches&rdquo; (mapping notation)', 'Every transformation is written as a mapping rule first, (x, y) to (new x, new y), before any graph is drawn'],
          ['have &ldquo;difficulty determining the number of invariant points associated with other transformations&rdquo;', 'Students solve for the points a rule leaves unchanged instead of guessing from a sketch'],
          ['have difficulty &ldquo;combining multiple logarithm laws to simplify an expression into a single logarithm or to solve a logarithmic equation&rdquo;', 'Laws are applied one per line, with the power law always first, and every solution checked in the original equation'],
          ['have &ldquo;difficulty determining the domain and range of a rational function that contains a point of discontinuity&rdquo;', 'Factor first, cancel second, and record what the cancelled factor removed from the domain and the range: worked problem 1 below'],
          ['have &ldquo;difficulty solving equations when an identity substitution is required&rdquo;', 'Students learn to spot a mixed equation, choose the identity that leaves one function, then factor: worked problem 2 below'],
          ['struggle with identities &ldquo;that involve conjugates, double angle identities, and the use of rational operations&rdquo;', 'Proofs written in two columns, one side at a time, never moving terms across an equals sign'],
          ['struggle with permutation problems with &ldquo;three or more constraints or multiple cases&rdquo;', 'Cases are listed in a table before any factorial is written, then added'],
          ['have &ldquo;difficulty determining specific terms in the expansion of a binomial with non-linear terms&rdquo;', 'The general term is written out with its exponent as an expression in k, and k is solved for']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What markers say about written responses',
          left: [
            'The written-response observations are blunter. Markers saw many students who do not grasp &ldquo;the difference between simplifying or factoring an expression and solving an equation&rdquo;, or &ldquo;the difference between verifying and proving a trigonometric identity&rdquo;. Those are not slips; they are misunderstandings of what the question asked.',
            'Smaller habits cost marks too: students &ldquo;forget to include the angle argument&rdquo; (writing sin instead of sin x), drop brackets, and &ldquo;write expressions in place of equations&rdquo;. Alberta also warns that &ldquo;Using abbreviations in written explanations is inappropriate and not acceptable.&rdquo;'
          ],
          rightH3: 'What they say students do well',
          right: [
            'The commentary is not all bad news. Alberta reports that students &ldquo;continue to perform well&rdquo; on coterminal angles, arc length and angles in standard position, that they can &ldquo;solve exponential equations that can be simplified to a common base&rdquo;, and that they relate the parameters of a sinusoidal equation to its graph.',
            'That shapes how we spend time. A student already strong on sinusoidal graphs does not need another week of them; the hour goes to the identity substitution or the multi-case counting problem instead.'
          ] },
        { kind: 'source', html: 'Source: the commentary pages of the ' + SRC_BULLETIN + ', read 22 October 2026. The table quotes Alberta&rsquo;s observations; the teaching responses are ours.' }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked problems, ours',
      h2: 'Two Math 30-1 problems, solved the way markers want to see',
      lede: 'Both problems are our own, written for this page, and both sit on a line of Alberta&rsquo;s commentary above. They are not Alberta Education questions. Each one is laid out as a full written response: every step shown, every restriction stated, every answer checked.',
      body: [
        { kind: 'p', html: '<b>Problem 1: a rational function with a hole.</b> For f(x) = (x<sup>2</sup> &minus; 4) / (x<sup>2</sup> &minus; x &minus; 2), state the non-permissible values, the point of discontinuity, the asymptotes, and the domain and range.' },
        { kind: 'ol', items: [
          '<b>Factor numerator and denominator.</b> x<sup>2</sup> &minus; 4 = (x &minus; 2)(x + 2) and x<sup>2</sup> &minus; x &minus; 2 = (x &minus; 2)(x + 1). So f(x) = (x &minus; 2)(x + 2) / ((x &minus; 2)(x + 1)).',
          '<b>Record the non-permissible values before cancelling.</b> The original denominator is zero at x = 2 and x = &minus;1. Both are excluded from the domain, whatever happens next.',
          '<b>Cancel, and name what the cancelled factor leaves behind.</b> The factor (x &minus; 2) cancels, leaving y = (x + 2) / (x + 1) with x &ne; 2. A factor that cancels gives a hole, not an asymptote.',
          '<b>Find the hole&rsquo;s coordinates.</b> Substitute x = 2 into the simplified form: (2 + 2) / (2 + 1) = 4/3. The point of discontinuity is (2, 4/3).',
          '<b>Find the asymptotes.</b> The factor (x + 1) remains in the denominator, so x = &minus;1 is a vertical asymptote. Numerator and denominator have equal degree with leading coefficients 1 and 1, so y = 1 is the horizontal asymptote.',
          '<b>Write the domain.</b> {x | x &ne; &minus;1, x &ne; 2, x &isin; R}.',
          '<b>Write the range, and check the hole.</b> The simplified form is 1 + 1/(x + 1), which never equals 1. It equals 4/3 only when x + 1 = 3, that is x = 2, which is excluded. So the range is {y | y &ne; 1, y &ne; 4/3, y &isin; R}. Forgetting the second restriction is exactly the slip the commentary describes.'
        ] },
        { kind: 'p', mt: true, html: '<b>Problem 2: an equation that needs an identity substitution.</b> Solve 2cos<sup>2</sup>x &minus; sin x &minus; 1 = 0 algebraically for 0 &le; x &lt; 2&pi;, giving exact values.' },
        { kind: 'ol', items: [
          '<b>Notice the problem.</b> The equation mixes cos<sup>2</sup>x and sin x, so it cannot be factored as it stands. One function has to go.',
          '<b>Choose the identity that leaves one function.</b> From sin<sup>2</sup>x + cos<sup>2</sup>x = 1, replace cos<sup>2</sup>x with 1 &minus; sin<sup>2</sup>x: 2(1 &minus; sin<sup>2</sup>x) &minus; sin x &minus; 1 = 0.',
          '<b>Simplify to a quadratic in sin x.</b> 2 &minus; 2sin<sup>2</sup>x &minus; sin x &minus; 1 = 0 becomes 2sin<sup>2</sup>x + sin x &minus; 1 = 0 after multiplying by &minus;1.',
          '<b>Factor and set each factor to zero.</b> (2sin x &minus; 1)(sin x + 1) = 0, so sin x = 1/2 or sin x = &minus;1. Markers specifically remind students to set factors equal to zero rather than stopping at the factored form.',
          '<b>Solve each case on the unit circle.</b> sin x = 1/2 at x = &pi;/6 and x = 5&pi;/6 (quadrants I and II). sin x = &minus;1 at x = 3&pi;/2.',
          '<b>State the solution set and check it.</b> x = &pi;/6, 5&pi;/6 or 3&pi;/2. Substituting x = 3&pi;/2: 2(0)<sup>2</sup> &minus; (&minus;1) &minus; 1 = 0. The other two check the same way, and a graph of the left side crosses zero at exactly these three points in the domain.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the steps are numbered',
          left: [
            'Alberta&rsquo;s directing word algebraically means &ldquo;Using mathematical procedures that involve variables or symbols to represent values&rdquo;. A graphing calculator would find the three solutions of problem 2 in seconds, but a response that only reports them has not answered a question that says algebraically.',
            'Writing one step per line also makes the response markable. Alberta scores each written-response part against a general scoring guide, and partial credit is available, so a student who sets up the substitution correctly and then slips still earns something.'
          ],
          rightH3: 'What the two problems have in common',
          right: [
            'In both, the trap is a restriction. In problem 1 it is a value the cancelled factor removed; in problem 2 it is the solutions hiding in a second quadrant. Neither is hard mathematics. Both are skipped by students in a hurry.',
            'So our students finish every solution with the same question: what did I exclude, and did I find everything in the domain? It takes ten seconds and it is the habit we most want them to carry into the exam room.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice, ours',
      h2: 'Ten Math 30-1 practice questions',
      lede: 'We wrote these ten for this page; none is an Alberta Education question and none comes from a released exam. They follow the course from functions to combinatorics. Work them without a calculator unless a question says otherwise, then check the answers in the next section.',
      body: [
        { kind: 'ol', items: [
          '<b>Composition.</b> Given f(x) = 2x &minus; 3 and g(x) = x<sup>2</sup>, evaluate (f &#8728; g)(&minus;2) and (g &#8728; f)(&minus;2). Are they equal?',
          '<b>Transformations.</b> The point (6, &minus;4) is on the graph of y = f(x). Find its image on the graph of y = &minus;2f(3(x &minus; 1)) + 5.',
          '<b>Invariant points.</b> The graph of y = x<sup>2</sup> &minus; 9 is reflected in the x-axis. How many invariant points are there, and what are they?',
          '<b>Logarithm laws.</b> Write 2log<sub>5</sub>x &minus; log<sub>5</sub>(x + 1) + log<sub>5</sub>3 as a single logarithm.',
          '<b>Common base.</b> Solve 4<sup>x + 1</sup> = 8<sup>x &minus; 1</sup> algebraically.',
          '<b>No common base (calculator allowed).</b> Solve 3<sup>x</sup> = 20, to the nearest hundredth.',
          '<b>Logarithmic equation.</b> Solve log<sub>3</sub>(x + 6) + log<sub>3</sub>x = 3 algebraically, and justify any value you reject.',
          '<b>Polynomials.</b> Factor P(x) = x<sup>3</sup> &minus; 2x<sup>2</sup> &minus; 5x + 6 and state its zeros and y-intercept.',
          '<b>Radians.</b> A circle has radius 12 cm. Find the arc subtended by a central angle of 2&pi;/3, exactly and to the nearest hundredth. Then give the negative angle coterminal with 5&pi;/3 that lies between &minus;2&pi; and 0.',
          '<b>Counting.</b> How many different arrangements of the letters in CANADA are there? How many begin and end with A?'
        ] },
        { kind: 'p', mt: true, html: 'Questions 2, 3, 4 and 7 come straight from the commentary&rsquo;s list of weak spots, so a student who gets them right has fixed something markers see often. A question you cannot start is information, not failure: note it, and bring it to a class.' }
      ]
    },
    {
      id: 'answers', tint: 'tint', eyebrow: 'Answers, ours',
      h2: 'Answers to the ten questions, with the reasoning',
      lede: 'Each answer was checked by substitution and in Python. The reasoning matters more than the number, because on the written-response part it is the reasoning that earns the marks.',
      body: [
        { kind: 'ol', items: [
          '<b>5 and 49; not equal.</b> (f &#8728; g)(&minus;2) = f(g(&minus;2)) = f(4) = 5. (g &#8728; f)(&minus;2) = g(f(&minus;2)) = g(&minus;7) = 49. Composition is not commutative, which is the point of the question.',
          '<b>(3, 13).</b> The mapping rule is (x, y) to (x/3 + 1, &minus;2y + 5): the horizontal stretch by 1/3 and the reflection and vertical stretch come before the translations. x: 6/3 + 1 = 3. y: &minus;2(&minus;4) + 5 = 13.',
          '<b>Two: (&minus;3, 0) and (3, 0).</b> A reflection in the x-axis leaves a point unchanged only where y = 0, so the invariant points are the x-intercepts. Solve x<sup>2</sup> &minus; 9 = 0.',
          '<b>log<sub>5</sub>(3x<sup>2</sup> / (x + 1)).</b> Power law first: 2log<sub>5</sub>x = log<sub>5</sub>x<sup>2</sup>. Then the product law joins x<sup>2</sup> and 3, and the quotient law puts x + 1 underneath.',
          '<b>x = 5.</b> Write both sides as powers of 2: 2<sup>2x + 2</sup> = 2<sup>3x &minus; 3</sup>. Equate exponents: 2x + 2 = 3x &minus; 3, so x = 5. Check: 4<sup>6</sup> = 8<sup>4</sup> = 4096.',
          '<b>x &asymp; 2.73.</b> Take logarithms of both sides: x = log 20 / log 3 = 2.7268..., which rounds to 2.73. Keep every decimal until the final step, as the bulletin instructs.',
          '<b>x = 3.</b> The product law gives log<sub>3</sub>(x(x + 6)) = 3, so x<sup>2</sup> + 6x = 27 and (x + 9)(x &minus; 3) = 0. Reject x = &minus;9: log<sub>3</sub>(&minus;9) is undefined, since a logarithm takes positive arguments only. Check x = 3: log<sub>3</sub>9 + log<sub>3</sub>3 = 2 + 1 = 3.',
          '<b>(x &minus; 1)(x + 2)(x &minus; 3); zeros &minus;2, 1 and 3; y-intercept 6.</b> P(1) = 1 &minus; 2 &minus; 5 + 6 = 0, so x &minus; 1 is a factor by the factor theorem. Dividing leaves x<sup>2</sup> &minus; x &minus; 6 = (x + 2)(x &minus; 3).',
          '<b>8&pi; cm, about 25.13 cm; and &minus;&pi;/3.</b> Arc length is radius times angle in radians: 12 &times; 2&pi;/3 = 8&pi;. For the coterminal angle, subtract one full turn: 5&pi;/3 &minus; 2&pi; = &minus;&pi;/3.',
          '<b>120, then 24.</b> CANADA has six letters with A repeated three times: 6! / 3! = 720 / 6 = 120. Fixing an A at each end leaves C, N, D and A in the middle, all different, so 4! = 24.'
        ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A term plan, ours',
      h2: 'How we pace Math 30-1 across a school term',
      lede: 'Schools set their own unit order, so we start from the student&rsquo;s course outline. When a family asks us for a default, this is the order we use and the reason for each step. It is our plan, not Alberta&rsquo;s.',
      body: [
        { kind: 'table', caption: 'A default unit order for Math 30-1 tutoring (ours)', head: ['Stage', 'Units', 'Finished when the student can'], rows: [
          ['1', 'Transformations, inverses, function operations and composition', 'Write any transformation as a mapping rule and find invariant points by solving, not sketching'],
          ['2', 'Exponential and logarithmic functions and equations', 'Combine three log laws in one line and reject an extraneous root with a reason'],
          ['3', 'Polynomial, radical and rational functions', 'Find zeros with multiplicity, and the domain and range of a rational function with a hole'],
          ['4', 'Angles, the unit circle, the six ratios and trigonometric graphs', 'Give exact values from memory and read amplitude, period and phase shift from an equation'],
          ['5', 'Trigonometric equations and identities', 'Solve with an identity substitution, and prove an identity working one side'],
          ['6', 'Permutations, combinations and the binomial theorem', 'Split a counting problem into cases and find one term of an expansion with a non-linear term'],
          ['7', 'Mixed review and timed practice', 'Finish a full-length mixed set in three hours with the written responses fully laid out']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why functions come first',
          left: [
            'Relations and Functions is more than half of the exam blueprint, and its ideas return everywhere: a sinusoidal graph is a transformed sine function, and an exponential model is a function to be inverted. Students who master mapping notation early find the trigonometry unit shorter.',
            'Logarithms come early for a different reason. They take repetition to become automatic, and a student who meets them in October has months of spaced practice before the exam. A student who meets them in May has days.'
          ],
          rightH3: 'What a weekly class looks like',
          right: [
            'A class starts with five minutes of mixed retrieval from earlier units, then the current school topic taught from the student&rsquo;s own homework, then one written response laid out in full. The student does the writing; the teacher asks questions.',
            'Every few weeks we set a short mixed set in the diploma style: machine-scored questions first, then one written response. Its mistakes go into a log the student keeps until exam week.'
          ] },
        { kind: 'p', mt: true, html: 'For the exam itself, Alberta&rsquo;s schedule for 2026 to 2027 sets Mathematics 30-1 at 9 AM on Tuesday 3 November 2026, and on Wednesday 20 January, Thursday 8 April, Thursday 17 June and Thursday 5 August 2027. The exam earns a separate plan for its final weeks, built around the written-response rules, and we start that plan about eight weeks before the student&rsquo;s sitting. Our <a class="ag-inline-link" href="/canada-high-school-math-courses-compared">comparison of Grade 12 math across Canada</a> shows how Math 30-1 sits beside Pre-calculus 12 and MHF4U for families who move between provinces.' }
      ]
    },
    {
      id: 'calc', tint: 'tint', eyebrow: 'Calculator, Math 31 and the credit',
      h2: 'The calculator, the step to Math 31, and who grants the credit',
      lede: 'Three questions families ask in the first class, answered from Alberta&rsquo;s documents.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Which calculator?', p: 'The bulletin says the Math 30-1 diploma exam &ldquo;requires the use of an approved graphing calculator&rdquo;, cleared and configured before and after the exam, with the approved list in Alberta&rsquo;s 2026 to 2027 Calculator Information and Rules document. We teach on the model the student will write with.' },
          { h3: 'Where Math 31 fits', p: 'Alberta&rsquo;s Guide to Education, updated 4 September 2026, says &ldquo;Mathematics 30-1 is a prerequisite or corequisite for Mathematics 31.&rdquo; Its course chart shows Math 10C to 20-1 to 30-1 as the typical route, and notes that each math course is 5 credits.' },
          { h3: 'Who grants the credit', p: 'The credit and the school-awarded 70 per cent come from the student&rsquo;s own school, and the 30 per cent from Alberta&rsquo;s diploma exam. Our classes run beside that school course, and we do not grant provincial credits.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Edmonton, Calgary and the rest of Alberta',
          left: [
            'Classes are live online, so a student in Edmonton, Calgary, Red Deer or a rural school division gets the same teacher and the same plan. What changes is only the clock.',
            'Alberta keeps UTC-6 all year in the IANA time zone database (2026e), so there is no spring or autumn change to plan around. Our teachers work on India time, which is 11 hours 30 minutes ahead of Alberta throughout the year.'
          ],
          rightH3: 'When families usually start',
          right: [
            'The most common start is the first month of the course, when the transformation unit is new and fixable. The second most common is about eight weeks before the diploma date, which still leaves room for the stage 7 review above.',
            'Starting in the last fortnight is possible, but it changes what a teacher can do: by then the work is triage, choosing the two or three skills with the most marks attached and drilling them.'
          ] },
        { kind: 'source', html: 'Sources: the ' + SRC_BULLETIN + ' (calculators); Alberta Education and Childcare, <a class="ag-inline-link" href="https://manuals.alberta.ca/guide-to-education/program-planning-courses-and-programs/transfer-points-and-course-sequences-for-senior-high-school/" rel="noopener" target="_blank">Guide to Education, transfer points and course sequences</a> (version updated 4 September 2026); <a class="ag-inline-link" href="https://www.alberta.ca/diploma-exams-overview" rel="noopener" target="_blank">Diploma exams overview</a>. All read 22 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'Four stages from Math 20-1 habits to diploma-ready',
    lede: 'Our own stages, drawn from teaching Grade 12 students through pre-calculus courses like this one.',
    table: { caption: 'Stages of a Math 30-1 student (ours)', head: ['Stage', 'How it shows up'], rows: [
      ['1. Answer-getter', 'Gets numbers on routine questions, often with the calculator doing the thinking, and loses written-response marks'],
      ['2. Step-writer', 'Shows each step, states restrictions, and can say why a root was rejected'],
      ['3. Connector', 'Sees a sinusoidal model or a log equation as a transformed function, and switches methods when one stalls'],
      ['4. Diploma-ready', 'Finishes a mixed timed set with every written response complete, labelled and checked']
    ] },
    left: { h3: 'For parents', ps: [
      'Pick one solution from this week and have your teen talk you through it, restrictions included. Fluent talk there says more than a single test mark.',
      'Stage 2 is where outside help pays off most. Writing every step feels slow, and a patient second teacher turns it into a habit before the exam makes it urgent.'
    ] },
    right: { h3: 'For students', ps: [
      'When you check an answer, check the restriction too. It is the cheapest mark on the paper.',
      'Keep a list of the directing words you meet in questions, with Alberta&rsquo;s definition beside each. By May it will save you more time than any formula.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for Alberta senior high students',
    lede: 'Every course runs live online with a regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Math beyond the course', sub: 'Grades 10 to 12', courses: [
        { code: 'MAT / SR / 01', slug: 'ap-precalculus-exam-prep-course', title: 'Precalculus', blurb: 'Functions, logs and trigonometry from another angle.' },
        { code: 'MAT / SR / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For students who enjoyed the counting unit.' },
        { code: 'MAT / SR / 03', slug: 'sat-math-prep-course', title: 'SAT math', blurb: 'For students applying to US universities.' }
      ] },
      { num: 'II', h3: 'Contests', sub: 'Grades 9 to 12', courses: [
        { code: 'MAT / CON / 01', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Pascal to Euclid, for students who want harder problems.' },
        { code: 'MAT / CON / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'Proof and problem solving well past the course.' },
        { code: 'MAT / CON / 03', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC preparation', blurb: 'Waterloo&rsquo;s programming contest, step by step.' }
      ] },
      { num: 'III', h3: 'Where calculus leads', sub: 'Teens', courses: [
        { code: 'MAT / NXT / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Graph a function, then make it move.' },
        { code: 'MAT / NXT / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Exponential models fitted to real data.' },
        { code: 'MAT / NXT / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Where logs and functions turn up next.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes paced to the Alberta school year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school on Alberta time, fixed once you pick a batch.' },
      { time: 'Weekends', l: 'Weekend mornings suit many Grade 12 timetables in Alberta.' },
      { time: '1-on-1', l: 'Booked around unit tests and the diploma date.' }
    ],
    cells: [
      { h3: 'One teacher', p: 'The same person from the first unit to the exam.' },
      { h3: 'The school outline', p: 'Your teen&rsquo;s unit order, not ours.' },
      { h3: 'Written responses', p: 'Laid out in full, every class.' },
      { h3: 'Graphing calculator', p: 'Used to check, never to replace a step.' },
      { h3: 'Error log', p: 'Kept by the student, read before exams.' },
      { h3: 'Group or solo', p: 'A batch of fifteen to twenty, or one student.' }
    ]
  },

  projectsH2: 'Things our students have made',
  projectsLede: 'Projects by students who use functions and data in their own code, from graphs to simulations. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents and students on Google, in their own words.',

  fees: {
    h2: 'Fees',
    lede: 'The first class is free. From then on it is a monthly fee for eight live classes a month, shown below in your own currency; there is no term contract, and you can cancel before any new month begins.',
    free: ['A free first class', 'Bring a recent unit test', 'No card details needed'],
    group: ['A batch of fifteen to twenty', 'The same teacher each week', 'Pick the batch time', 'Billed monthly'],
    one: ['Your teen, one teacher, no batch', 'Times set around the diploma date', 'Planned from their own outline']
  },

  faq: {
    eyebrow: 'Questions from Alberta families',
    h2: 'Math 30-1: common questions',
    items: [
      { q: 'What is Math 30-1 in Alberta?', a: 'Mathematics 30-1 is the Grade 12 Alberta math course for students heading to post-secondary programs that require calculus. Its three strands are Relations and Functions, Trigonometry, and Permutations, Combinations and Binomial Theorem, and it ends with a provincial diploma exam.' },
      { q: 'Do you grant the Math 30-1 credit?', a: 'No. We teach alongside your teen\'s Math 30-1 class and do not grant provincial credits. The credit and the school-awarded mark come from their own school, and the diploma exam portion is set and marked by Alberta Education and Childcare.' },
      { q: 'How much is the Math 30-1 diploma exam worth?', a: 'Alberta says the weighting of diploma exams returned to 30 percent on 1 September 2023: 70 percent of the final mark comes from course work and 30 percent from the diploma exam.' },
      { q: 'What is on the Math 30-1 diploma exam?', a: 'For 2026 to 2027 the bulletin lists 32 machine-scored questions worth 75 percent and 3 written-response questions worth 25 percent. Relations and Functions carries 53 to 58 percent, Trigonometry 27 to 33 percent, and the counting strand 14 to 18 percent.' },
      { q: 'When is the Math 30-1 diploma exam in 2026 to 2027?', a: 'Alberta schedules it at 9 AM on Tuesday 3 November 2026, Wednesday 20 January 2027, Thursday 8 April 2027, Thursday 17 June 2027 and Thursday 5 August 2027. Schools register first-time students.' },
      { q: 'Which units of Math 30-1 are hardest?', a: 'Alberta\'s own commentary points to logarithm equations that combine several laws, rational functions with a hole, trigonometric equations that need an identity substitution, identity proofs, and counting problems with several cases. Those are the units we spend most time on.' },
      { q: 'Can I use a calculator in Math 30-1?', a: 'Yes, an approved graphing calculator is required on the diploma exam, cleared and configured before and after. But Alberta expects several outcomes, including transformations and logarithm laws, to be met without technology, so steps still have to be shown.' },
      { q: 'What comes before and after Math 30-1?', a: 'Alberta\'s Guide to Education shows Math 10C, then Math 20-1, then Math 30-1 as the typical route, and says Math 30-1 is a prerequisite or corequisite for Mathematics 31.' },
      { q: 'Do you tutor Math 30-1 in Edmonton and Calgary?', a: 'Yes, live online for students anywhere in Alberta, including Edmonton and Calgary. Alberta is on UTC-6 all year, so class times stay the same through the school year.' },
      { q: 'What times are classes for Alberta students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Class times are set in Alberta time.' },
      { q: 'How much does Math 30-1 tutoring cost?', a: 'Nothing for the first class. Families who continue pay one monthly fee covering eight live classes, with no term contract. The current batch and one-to-one figures appear in the Fees part of this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Further reading',
    lede: 'Pages that pair well with Math 30-1.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All of our pages for Canadian families.' },
      { href: '/coding-classes-in-alberta', label: 'Classes in Alberta', p: 'Coding and math for Alberta learners of every age.' },
      { href: '/canada-high-school-math-courses-compared', label: 'Grade 12 math by province', p: 'Math 30-1 beside Pre-calculus 12 and MHF4U.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Math help from Grade 1 to Grade 12.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'Functions and trigonometry in more depth.' },
      { href: '/calculus-tutoring-online', label: 'Calculus tutoring', p: 'For Math 31 and first-year calculus.' },
      { href: '/blog/sohcahtoa-trigonometry-for-beginners', label: 'Trigonometry basics', p: 'The ratios underneath the unit circle.' },
      { href: '/euclid-contest-preparation', label: 'Euclid contest', p: 'Waterloo&rsquo;s contest for senior students.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live class, minute by minute.' }
    ]
  },

  start: {
    h2: 'Start with a free class',
    lede: 'Send us the unit your teen is on, the date of the next test and whether they are writing the diploma in November, January, April, June or August. The first class starts from their own work.',
    readFirst: 'Want to look first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a class in detail, and the <a class="ag-inline-link" href="/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course">Western Canada Grade 12 Math syllabus</a> lists the plan week by week.',
    note: 'Lessons happen live on video with teachers based in India, so there is no travel and no stranger in the house. From Alberta, WhatsApp is usually the fastest way to reach us.',
    formNote: 'Booking the free class never asks for a card.'
  },

  footer: {
    cols: [
      { h4: 'Grade 12 math', links: [
        { href: '/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course', label: 'Western Canada Grade 12 Math' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring' },
        { href: '/calculus-tutoring-online', label: 'Calculus tutoring' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-alberta', label: 'Classes in Alberta' },
        { href: '/canada-high-school-math-courses-compared', label: 'Grade 12 math by province' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
      ] }
    ],
    bottomRight: 'State the restriction, then check the answer'
  },

  personalityCss: `
.ag-root.ag-mat .ag-hero h1 { letter-spacing: -0.01em; max-width: 20ch; }
.ag-root.ag-mat .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-mat .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-mat .ag-table caption { text-align: left; font-style: normal; font-weight: 600; }
.ag-root.ag-mat .ag-steps li { margin-bottom: 0.6rem; line-height: 1.65; }
.ag-root.ag-mat .ag-table td { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'Alberta Education and Childcare: Mathematics 30-1 Information Bulletin, Diploma Examinations Program 2026-2027 (course objectives, seven processes, standards, specifications, commentary); Mathematics 30-1 Assessment Standards and Exemplars (general and specific outcomes, general notes, technology note); General Information Bulletin 2026-2027 schedule pages (Math 30-1 dates); alberta.ca diploma exams overview (30% weighting, 70/30 split); Guide to Education, transfer points and course sequences (updated 4 September 2026: 5 credits, Math 30-1 prerequisite or corequisite for Math 31, sequence chart). The 10 to 12 program of studies PDF has moved and LearnAlberta is JavaScript only, so outcomes are quoted through the Assessment Standards document.',
    localProject: 'Two original written responses: a rational function with a hole (domain {x | x not -1, 2}, range {y | y not 1, 4/3}) and 2cos^2 x - sin x - 1 = 0 solved by identity substitution (pi/6, 5pi/6, 3pi/2); ten original practice questions with checked answers keyed to the bulletin commentary; a seven-stage unit order and a four-stage ladder. Lesson family: show every step.',
    requiredMentions: ['Develop algebraic and graphical reasoning through the study of relations', 'Develop algebraic and numeric reasoning that involves combinatorics', 'Stretches and reflections are performed prior to translations unless otherwise stated', 'students are expected to meet these outcomes without the use of technology', 'difficulty determining the domain and range of a rational function that contains a point of discontinuity', 'difficulty solving equations when an identity substitution is required', 'A default unit order for Math 30-1 tutoring (ours)', 'Problem 2: an equation that needs an identity substitution', 'Using abbreviations in written explanations is inappropriate and not acceptable', 'How many different arrangements of the letters in CANADA'],
    sources: [
      { claim: 'Course objective, processes, performance standards, 2026-27 specifications and topic weights, commentary on strengths and weaknesses, calculator rule.', url: 'https://www.alberta.ca/system/files/ecc-math-30-1-info-bulletin.pdf' },
      { claim: 'General outcomes, specific outcomes and general notes for Mathematics 30-1.', url: 'https://www.alberta.ca/system/files/custom_downloaded_images/edc-math30-1-assessment-standards-exemplars.pdf' },
      { claim: 'Math 30-1 diploma exam dates, November 2026 to August 2027.', url: 'https://www.alberta.ca/system/files/custom_downloaded_images/edc-diploma-exam-schedule.pdf' },
      { claim: 'Diploma exam weighting 30%, final mark 70/30.', url: 'https://www.alberta.ca/diploma-exams-overview' },
      { claim: 'Each math course 5 credits; Math 30-1 prerequisite or corequisite for Math 31; typical sequence.', url: 'https://manuals.alberta.ca/guide-to-education/program-planning-courses-and-programs/transfer-points-and-course-sequences-for-senior-high-school/' }
    ],
    rejectedClaims: [
      'Math 31 content or Math 20-1 content: the program of studies could not be read (moved PDF, JavaScript-only LearnAlberta), so neither course is described beyond its place in the sequence.',
      'Named university requirements for Math 30-1 or Math 31: the University of Alberta page returned 403 and the University of Calgary page renders its requirements by script; none is stated.',
      'Any mark, standard or diploma outcome from our classes: none promised; Alberta\'s standards are quoted only as definitions.',
      'Released items, the 2022 practice test or exemplar questions: none reproduced or adapted; every question on the page is ours.',
      'The names of Alberta exam managers in the bulletins: left out.',
      'Any connection with Alberta Education and Childcare or a school authority: none, and the page says so.'
    ]
  }
};
