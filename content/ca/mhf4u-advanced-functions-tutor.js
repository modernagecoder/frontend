'use strict';
// MHF4U Advanced Functions tutor (ag- school course door; Canada cluster Plan 2, row 15).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/mhf4u-advanced-functions-tutor/):
//  - The Ontario Curriculum, Grades 11 and 12: Mathematics (2007), www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf
//    (math1112currb.pdf, pdftotext math1112currb-raw.txt). MHF4U course description: "This course extends students' experience
//    with functions."; "develop techniques for combining functions; broaden their understanding of rates of change"; "This course
//    is intended both for students taking the Calculus and Vectors course as a prerequisite for a university program and for those
//    wishing to consolidate their understanding of mathematics before proceeding to any one of a variety of university programs.";
//    course page prerequisite "Functions, Grade 11, University Preparation, or Mathematics for College Technology, Grade 12, College
//    Preparation"; programme overview "satisfies the mathematical prerequisite for some universities in areas that include business,
//    social science, and health science programs" and "radian measure and logarithmic functions"; strands A Exponential and
//    Logarithmic Functions, B Trigonometric Functions, C Polynomial and Rational Functions, D Characteristics of Functions, with
//    overall expectations quoted in plain-word fragments only (A1 "apply the laws of logarithms to simplify numeric expressions",
//    A3 "solve exponential and simple logarithmic equations in one variable algebraically", B1 "the meaning and application of
//    radian measure", B3 "solve problems involving trigonometric equations and prove trigonometric identities", C4 "solving
//    polynomial and simple rational inequalities", D1 "average and instantaneous rate of change", D3 "including problems with
//    solutions that are not accessible by standard algebraic techniques"); specific expectations C3.1 remainder and factor theorem
//    ("to verify the remainder theorem and the factor theorem"), C3.2 "of degree no higher than four", B3.2 "student reproduction
//    of the development of the general case is not required", D2.5 "is not always equal to"; MCV4U note "The new Advanced Functions
//    course (MHF4U) must be taken prior to or concurrently with Calculus and Vectors (MCV4U)."; the seven mathematical processes;
//    "Thirty per cent of the grade will be based on a final evaluation" (assessment section); "Each of the courses listed above is
//    worth one credit." Expectations containing notation lost in extraction (pi, inequality signs, minus signs) are not quoted.
//  - Ontario curriculum content API (ws.api.dcp.edu.gov.on.ca), course list for MCR3U, MHF4U, MCV4U, MDM4U ... (facts-schools-contests.md
//    facts 38 to 40, ontario/api-senior-math-courses.json): MHF4U "Advanced Functions", year issued 2007, Grade 12, University
//    Preparation; prerequisite field "Functions, Grade 11, University Preparation, or Mathematics for College Technology, Grade 12,
//    College Preparation".
//  - uwaterloo.ca/future-students/programs/accounting-and-financial-management (raw copy): "Six Grade 12 U and/or M courses including";
//    "Advanced Functions (minimum final grade of 75% is required)"; "Calculus and Vectors (minimum final grade of 75% is required)";
//    "Any Grade 12 U English (minimum final grade of 75% is required)"; "Admission average: Mid-80s"; recommended courses "Principles
//    of Financial Accounting" and "Mathematics of Data Management".
//  - future.utoronto.ca/undergraduate-programs/economics/ (raw copy): the Mississauga campus block lists ENG4U / EAE4U, MHF4U and
//    MCV4U; the St. George block (OUAC code TAX) lists ENG4U / EAE4U and MCV4U; "Ontario Secondary School Diploma (OSSD) with six
//    subjects at the 4U/M level, including English".
//  - uwaterloo.ca/future-students/programs/computer-science (facts 203 to 205): Advanced Functions among the required courses.
//  - Time: facts-geo.md section 3 (tzdb 2026e): Eastern UTC-5 winter / UTC-4 summer, back 1 November 2026, forward 14 March 2027.
// Our own material, labelled on the page and checked in verify_ours.py (SymPy 1.14, Python 3.13): worked problem 1 (two clips,
// 2000 x 2^(t/3) = 500 x 3^(t/4), solved with base-10 logs as MHF4U A3.2 suggests ("recognizing that logarithms base 10 are commonly used"),
// t = log 4 / (log 3 / 4 - log 2 / 3) = 31.79 days, day 31 and day 32 values checked); worked problem 2
// (x^3 - 2x^2 - 5x + 6 = (x - 1)(x - 3)(x + 2), positive for -2 < x < 1 or x > 3, test values -3, 0, 2, 4); twelve practice questions
// and answers; the strand error table; the six-week plan; the four-stage ladder.
// Lesson family: undo the operation (logarithms undo exponents, factors undo expansion, inverses undo functions).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SRC_MATH = '<a class="ag-inline-link" href="https://www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf" rel="noopener" target="_blank">The Ontario Curriculum, Grades 11 and 12: Mathematics (2007)</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'MHF4U TUTOR', blurb: 'Advanced Functions explained strand by strand from the 2007 Ontario curriculum, with two worked problems, twelve practice questions and a six-week exam plan.' },
  slug: 'mhf4u-advanced-functions-tutor',
  code: 'maft',
  accent: '#8A5115',
  accentRationale: 'MHF4U tutor, Canada: a burnt ochre, #8A5115, allocated for this row; 6.8 RGB units from the nearest site accent (#8B5718), 25.2 from the nearest other alloc.tsv accent (#7A4625) and 26.5 from the nearest built Canada page (#8F512F); contrast 6.06 on the paper #FBF8F2 and 5.21 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'MHF4U Advanced Functions tutor',
  title: 'MHF4U Advanced Functions Tutor: Grade 12 Help and Exam Prep',
  description: 'MHF4U tutor for Ontario Grade 12: all four Advanced Functions strands from the curriculum, two worked problems, twelve practice questions and an exam plan.',
  ogDescription: 'Advanced Functions, strand by strand, from the 2007 Ontario curriculum: logarithms, radians, polynomial and rational functions, rates of change. Two worked problems, twelve practice questions with answers, and a six-week plan for the final.',
  twitterDescription: 'MHF4U Advanced Functions explained from the Ontario curriculum, with worked problems and practice.',
  pageName: 'MHF4U Advanced Functions Tutor',
  webPageDescription: 'A guide for Ontario Grade 12 students and parents to MHF4U, Advanced Functions, built from the 2007 curriculum document, with two worked problems, twelve original practice questions and a final exam plan.',
  courseDescription: 'Live online MHF4U help for Ontario Grade 12 students, taught alongside the school course in a batch or one to one. No Ontario credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'MHF4U tutor',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#covers', label: 'The four strands' },
    { href: '#stuck', label: 'Where it gets hard' },
    { href: '#worked', label: 'Worked problems' },
    { href: '#practice', label: 'Practice' },
    { href: '#exam', label: 'Exam plan' }
  ],
  eyebrow: 'Ontario &middot; Grade 12 &middot; MHF4U Advanced Functions',
  h1: 'MHF4U Advanced Functions tutor, for Ontario Grade 12',
  lede: 'Advanced Functions is the course that decides whether Calculus and Vectors feels possible. Logarithms arrive, angles switch to radians, and graphs that used to be parabolas grow asymptotes and holes. Here we take MHF4U apart from the ministry&rsquo;s own 2007 document, show two problems solved with every decision explained, and give twelve practice questions of our own with answers. Our classes run beside the school course, and we do not grant Ontario credits: that stays with the school that teaches and marks MHF4U.',
  secondaryCta: { href: '#practice', label: 'Try the twelve questions' },
  wa: 'Hello Modern Age Coders, my teen in Ontario is taking MHF4U Advanced Functions and wants help alongside the school course. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Paced to the school&rsquo;s own unit order',
  spec: [
    ['Course', 'MHF4U, Advanced Functions'],
    ['Grade', '12, university preparation'],
    ['Before it', 'MCR3U Functions (or MCT4C)'],
    ['Leads to', 'MCV4U, first or alongside'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Credit', 'None granted: we teach alongside school'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'MHF4U is Advanced Functions, Ontario&rsquo;s Grade 12 university-preparation math course: logarithms, radian trigonometry, polynomial and rational functions, and rates of change. It follows MCR3U and must come before or alongside MCV4U. Modern Age Coders teaches MHF4U live online, one to one or in a batch, through our course Ontario Grade 12 University Math: Advanced Functions and Calculus and Vectors.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for a student in Advanced Functions',
    lede: 'The first follows the Ontario course itself. The other two are for families who want a wider base under it.',
    items: [
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', code: 'MAFT / 01', title: 'Ontario Grade 12 University Math', note: 'MHF4U and MCV4U, taught in the order your teen&rsquo;s school uses, with practice sets between classes.' },
      { course: 'ap-precalculus-exam-prep-course', code: 'MAFT / 02', title: 'Precalculus', note: 'Polynomial, rational, exponential, logarithmic and trigonometric functions: the same families, from a second angle.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'MAFT / 03', title: 'High school math, Grades 9 to 12', note: 'For students whose Grade 10 and 11 algebra needs rebuilding before MHF4U can stick.' }
    ]
  },

  sections: [
    {
      id: 'covers', tint: 'tint', eyebrow: 'The Ontario curriculum',
      h2: 'What MHF4U covers, in the curriculum&rsquo;s words',
      lede: 'Every Advanced Functions class in Ontario is taught from The Ontario Curriculum, Grades 11 and 12: Mathematics, issued in 2007. Its course description opens: &ldquo;This course extends students&rsquo; experience with functions.&rdquo; Students then &ldquo;develop techniques for combining functions; broaden their understanding of rates of change&rdquo;. The expectations sit in four strands, set out below.',
      body: [
        { kind: 'table', caption: 'MHF4U strands and overall expectations, quoted in part from the 2007 Ontario mathematics curriculum (read 22 October 2026)', head: ['Strand', 'From the overall expectations', 'What it looks like on a test (our reading)'], rows: [
          ['A. Exponential and Logarithmic Functions', '&ldquo;apply the laws of logarithms to simplify numeric expressions&rdquo;; &ldquo;solve exponential and simple logarithmic equations in one variable algebraically&rdquo;', 'Rewrite a log as an exponent, combine logs with the product, quotient and power laws, then solve an equation where x sits in an exponent'],
          ['B. Trigonometric Functions', 'demonstrate an understanding of &ldquo;the meaning and application of radian measure&rdquo;; &ldquo;solve problems involving trigonometric equations and prove trigonometric identities&rdquo;', 'Work in radians from the first day, find exact values at the special angles, sketch transformed sine and cosine graphs, prove an identity line by line'],
          ['C. Polynomial and Rational Functions', '&ldquo;identify and describe some key features of polynomial functions&rdquo;; demonstrate an understanding of &ldquo;solving polynomial and simple rational inequalities&rdquo;', 'Factor a cubic or quartic with the factor theorem, sketch from the factored form, find the asymptotes of a rational function, solve an inequality with a sign chart'],
          ['D. Characteristics of Functions', 'demonstrate an understanding of &ldquo;average and instantaneous rate of change&rdquo;; solve problems &ldquo;including problems with solutions that are not accessible by standard algebraic techniques&rdquo;', 'Secant slopes that shrink towards a tangent, sums, products and compositions of functions, and graphing technology where algebra runs out']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The details that shape a unit test',
          left: [
            'The specific expectations are more exact than most families expect. Polynomial factoring is limited to expressions &ldquo;of degree no higher than four&rdquo;, using common factoring, grouping, and the remainder and factor theorems. Students investigate division by x minus a &ldquo;to verify the remainder theorem and the factor theorem&rdquo;, which is why our second worked problem below starts there.',
            'In the trigonometry strand, the compound angle formulas are explored and used, but the document adds that &ldquo;student reproduction of the development of the general case is not required&rdquo;. Students must be able to use the formulas for exact values and identities; deriving them from scratch is not the target.'
          ],
          rightH3: 'Two ideas students meet for the first time',
          right: [
            'The programme overview names what is new: Grade 11&rsquo;s exponential and trigonometric functions are revisited &ldquo;to address related concepts such as radian measure and logarithmic functions&rdquo;. Radians and logarithms are the two words that change the feel of the course, because the old habits from degrees and powers stop working.',
            'The fourth strand is a quiet preview of calculus. An instantaneous rate of change is approximated by average rates over shrinking intervals, and composition gets its own expectation, including showing that f(g(x)) &ldquo;is not always equal to&rdquo; g(f(x)). Question 9 in our practice set checks exactly that.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Who the course is for',
          left: [
            'The description names two groups. MHF4U is &ldquo;intended both for students taking the Calculus and Vectors course as a prerequisite for a university program and for those wishing to consolidate their understanding of mathematics before proceeding to any one of a variety of university programs.&rdquo;',
            'The programme overview adds that Advanced Functions &ldquo;satisfies the mathematical prerequisite for some universities in areas that include business, social science, and health science programs&rdquo;. So the course is not only a stepping stone to calculus; for some programs it is the math requirement on its own.'
          ],
          rightH3: 'Prerequisite, credit and the final mark',
          right: [
            'The MHF4U course page gives its prerequisite as &ldquo;Functions, Grade 11, University Preparation, or Mathematics for College Technology, Grade 12, College Preparation&rdquo;, which is MCR3U or MCT4C. The ministry&rsquo;s online curriculum record says the same, with 2007 as the issue year.',
            'MHF4U carries one credit. The 2007 document weights the end-of-course evaluation at 30 per cent of the grade, and in Advanced Functions that is usually a written exam. Term work makes up the other 70 per cent, so steady unit tests matter as much as the final.'
          ] },
        { kind: 'source', html: 'Source: ' + SRC_MATH + ': programme overview, MHF4U course pages and assessment rules, read on 22 October 2026, plus the MHF4U record in the ministry&rsquo;s online curriculum data, checked that morning. Where an expectation uses symbols we paraphrase it rather than quote it. This is an independent guide; we have no link to the Ontario Ministry of Education.' }
      ]
    },
    {
      id: 'stuck', tint: 'deep', eyebrow: 'Where it gets hard',
      h2: 'Where MHF4U students usually get stuck',
      lede: 'These are the errors we see most often when Grade 12 students bring us their Advanced Functions tests. None of them is about talent. Each is a habit from an earlier course that no longer fits, and each has a check the student can learn to run.',
      body: [
        { kind: 'table', caption: 'Common MHF4U mistakes by strand, and the check that catches each one (ours, from teaching the course)', head: ['Strand', 'The mistake', 'The check'], rows: [
          ['Logarithms', 'Splitting log(a + b) into log a + log b', 'The product law is about log(ab). Try a = b = 1: log 2 is not 0'],
          ['Logarithms', 'Keeping a solution that makes the argument zero or negative', 'Substitute every answer back into each original log before writing it down'],
          ['Trigonometry', 'A calculator left in degrees while the question is in radians', 'Check sin(&pi;/2) gives 1 before the first question, every time'],
          ['Trigonometry', 'Finding one angle and stopping', 'Ask which quadrants share the sign, then list every solution from 0 to 2&pi;'],
          ['Polynomials', 'Dividing both sides of an inequality by an expression that can be negative', 'Move everything to one side, factor, and use a sign chart instead'],
          ['Rational functions', 'Calling every zero of the denominator a vertical asymptote', 'Factor first: a factor that cancels leaves a hole, not an asymptote'],
          ['Combining functions', 'Working f(g(x)) from the outside in', 'Read it as: do g first, then feed the answer to f'],
          ['Rates of change', 'Mixing up average rate over an interval with the rate at a point', 'An average needs two points; an instantaneous rate needs one point and a shrinking interval']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the logarithm unit feels so different',
          left: [
            'Until Grade 12, most algebra moves forward: expand, simplify, substitute. A logarithm asks a backward question: what exponent turns the base into this number? Students who memorize the laws without that question in mind apply them to sums, to products of logs, and to anything else that looks close.',
            'We teach every log rule by translating it back into exponents first. Once a student sees that log<sub>2</sub> 8 = 3 says the same thing as 2<sup>3</sup> = 8, the laws stop being a list and become consequences they can rebuild during a test.'
          ],
          rightH3: 'Why rational functions cost marks',
          right: [
            'A rational function hides its behaviour in its factors. Students who skip factoring miss holes, put asymptotes in the wrong place, and draw graphs that cross where they should not. The sketch is never the hard part; reading the factored form is.',
            'Our routine has five lines, written before any drawing: domain, intercepts, vertical asymptotes or holes, horizontal behaviour, and the sign in each interval. With those five written down, the graph almost draws itself, and a marker can follow the reasoning.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked problems, ours',
      h2: 'Two MHF4U problems, solved with the reasoning shown',
      lede: 'We wrote both problems ourselves, pitched like a question on an MHF4U unit test. Read the decisions, not just the algebra: each step says why it comes next. A computer algebra system confirmed every answer.',
      body: [
        { kind: 'p', html: '<b>Problem 1, exponential equations.</b> Two short videos are uploaded on the same day. Clip A starts with 2000 views and doubles every 3 days. Clip B starts with only 500 views but triples every 4 days. After how many days does clip B catch up with clip A?' },
        { kind: 'ol', items: [
          '<b>Write each clip as a function of t, the number of days.</b> A(t) = 2000 &times; 2<sup>t/3</sup> and B(t) = 500 &times; 3<sup>t/4</sup>. The exponent counts how many doubling or tripling periods have passed, which is why t is divided by the length of the period.',
          '<b>Set them equal and isolate the powers.</b> 2000 &times; 2<sup>t/3</sup> = 500 &times; 3<sup>t/4</sup>. Divide both sides by 500 and by 2<sup>t/3</sup>: 4 = 3<sup>t/4</sup> &divide; 2<sup>t/3</sup>. Collecting the constants on one side first keeps the next step clean.',
          '<b>Decide between a common base and logarithms.</b> 2 and 3 share no common base, so a common base is out. Take the logarithm base 10 of both sides; the curriculum itself notes, &ldquo;recognizing that logarithms base 10 are commonly used&rdquo;. The power law then gives log 4 = (t/4) log 3 &minus; (t/3) log 2.',
          '<b>Factor out t.</b> log 4 = t (log 3 / 4 &minus; log 2 / 3), so t = log 4 &divide; (log 3 / 4 &minus; log 2 / 3). Notice that t appears once on the right: that is the moment to stop rearranging.',
          '<b>Evaluate, then interpret.</b> log 3 / 4 is about 0.1193 and log 2 / 3 is about 0.1003, a difference of about 0.0189. So t is about 0.6021 &divide; 0.0189, roughly 31.8 days. Clip B catches up during day 32. Any base gives the same t, because the base only rescales both sides.',
          '<b>Check with numbers, not algebra.</b> At day 31, A has about 2.58 million views and B about 2.49 million: B is still behind. At day 32, A has about 3.25 million and B about 3.28 million: B is ahead. The answer sits between them, as it should.'
        ] },
        { kind: 'p', html: 'The habit worth keeping is the last step. A student who checks day 31 and day 32 will catch a sign error or a flipped fraction that the algebra alone hides. The difference 0.0189 is small, which also explains the story: B&rsquo;s growth rate is only slightly faster, so it takes a month to close a four-times gap.' },
        { kind: 'p', mt: true, html: '<b>Problem 2, a polynomial inequality.</b> Solve x<sup>3</sup> &minus; 2x<sup>2</sup> &minus; 5x + 6 &gt; 0, and explain how you know your answer is complete.' },
        { kind: 'ol', items: [
          '<b>Look for a root among the factors of the constant term.</b> By the rational root idea, any integer root divides 6, so test 1, &minus;1, 2, &minus;2, 3, &minus;3, 6, &minus;6. f(1) = 1 &minus; 2 &minus; 5 + 6 = 0, so by the factor theorem, (x &minus; 1) is a factor.',
          '<b>Divide to find what is left.</b> Dividing by (x &minus; 1) leaves x<sup>2</sup> &minus; x &minus; 6, which factors as (x &minus; 3)(x + 2). So f(x) = (x &minus; 1)(x &minus; 3)(x + 2), with zeros at &minus;2, 1 and 3.',
          '<b>Do not divide the inequality by anything.</b> Dividing by (x &minus; 1) would flip the sign for some x and not others. Keep the product whole and ask where it is positive.',
          '<b>Build a sign chart.</b> The three zeros split the number line into four intervals. Test one value in each: f(&minus;3) = &minus;24, f(0) = 6, f(2) = &minus;4 and f(4) = 18. The signs run negative, positive, negative, positive.',
          '<b>Read off the answer and check the boundaries.</b> f(x) &gt; 0 for &minus;2 &lt; x &lt; 1 or x &gt; 3. The zeros themselves are excluded because the inequality is strict. A cubic with a positive leading coefficient ends positive on the right, which agrees with the last interval.'
        ] },
        { kind: 'table', mt: true, caption: 'The sign chart for (x &minus; 1)(x &minus; 3)(x + 2) (ours; every test value computed)', head: ['Interval', 'Test x', 'x + 2', 'x &minus; 1', 'x &minus; 3', 'f(x)', 'Sign'], numCols: [1, 5], rows: [
          ['x &lt; &minus;2', '&minus;3', '&minus;', '&minus;', '&minus;', '&minus;24', 'negative'],
          ['&minus;2 &lt; x &lt; 1', '0', '+', '&minus;', '&minus;', '6', 'positive'],
          ['1 &lt; x &lt; 3', '2', '+', '+', '&minus;', '&minus;4', 'negative'],
          ['x &gt; 3', '4', '+', '+', '+', '18', 'positive']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the sign chart beats a sketch alone',
          left: [
            'A quick sketch tells a student roughly where the graph is above the axis. The chart proves it, factor by factor, so the answer can be defended in writing. Ontario markers give communication marks for that kind of justification, and the curriculum asks students to &ldquo;justify conclusions&rdquo; as one of the reasoning skills.',
            'The same chart solves rational inequalities too. The only change is that zeros of the denominator join the boundary list and are always excluded.'
          ],
          rightH3: 'What both problems have in common',
          right: [
            'Each one undoes something. In the first, a logarithm undoes the exponent so t can be reached. In the second, factoring undoes the expansion so the zeros can be read. Most of MHF4U has this shape: find the operation that is in the way, and apply its inverse.',
            'That is also why we spend time on inverses early in the course. A student who understands that a log function is the inverse of an exponential function has one idea where others have two chapters.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice, ours',
      h2: 'Twelve MHF4U practice questions',
      lede: 'We wrote all twelve for this page and confirmed each by computer; none comes from a school, a board or a textbook. They follow the four strands in order, three per strand. Work each one on paper first; the answers follow in the next section.',
      body: [
        { kind: 'ol', items: [
          '<b>Logarithms.</b> Evaluate log<sub>2</sub> 32 &minus; log<sub>3</sub> (1/9) without a calculator.',
          '<b>Logarithms.</b> Solve log<sub>3</sub> (2x + 1) = 2.',
          '<b>Exponential equations.</b> Solve 4<sup>x</sup> = 8<sup>x &minus; 1</sup> by finding a common base.',
          '<b>Radians.</b> Convert 225&deg; to radians, then give the exact value of sin of that angle.',
          '<b>Transformations.</b> For y = 3 sin(2(x &minus; &pi;/6)) + 1, state the amplitude, period, phase shift, maximum and minimum.',
          '<b>Trigonometric equations.</b> Solve 2 sin<sup>2</sup> x &minus; sin x &minus; 1 = 0 for x from 0 to 2&pi;.',
          '<b>Remainder theorem.</b> Find the remainder when x<sup>3</sup> + 2x<sup>2</sup> &minus; 5x + 1 is divided by x &minus; 2, without long division.',
          '<b>Rational functions.</b> For f(x) = (x + 1)/(x &minus; 2), give the vertical and horizontal asymptotes and both intercepts.',
          '<b>Composition.</b> With f(x) = x<sup>2</sup> + 1 and g(x) = 2x &minus; 3, find f(g(x)) and g(f(x)), and evaluate f(g(2)).',
          '<b>Rates of change.</b> For f(x) = 2<sup>x</sup>, find the average rate of change from x = 1 to x = 3, then estimate the instantaneous rate at x = 2 using points 0.001 on either side.',
          '<b>Identities.</b> Prove that (1 &minus; cos<sup>2</sup> x) &divide; sin x = sin x wherever sin x is not 0.',
          '<b>Mixed.</b> Solve log<sub>2</sub> x + log<sub>2</sub> (x &minus; 2) = 3, and explain why one algebraic answer must be rejected.'
        ] }
      ]
    },
    {
      id: 'answers', tint: 'tint', eyebrow: 'Answers, ours',
      h2: 'Answers, with the reason behind each one',
      lede: 'An answer without a reason earns little on an Ontario test, so each one below says how it was reached. All twelve were checked with SymPy, a computer algebra library.',
      body: [
        { kind: 'ol', items: [
          '<b>7.</b> log<sub>2</sub> 32 = 5 because 2<sup>5</sup> = 32. log<sub>3</sub> (1/9) = &minus;2 because 3<sup>&minus;2</sup> = 1/9. So 5 &minus; (&minus;2) = 7. Each log is a question about an exponent, answered in your head.',
          '<b>x = 4.</b> Rewrite in exponential form: 2x + 1 = 3<sup>2</sup> = 9, so x = 4. Check: the argument 2(4) + 1 = 9 is positive, so the answer stands.',
          '<b>x = 3.</b> 4<sup>x</sup> = 2<sup>2x</sup> and 8<sup>x &minus; 1</sup> = 2<sup>3x &minus; 3</sup>. Equal powers of the same base have equal exponents, so 2x = 3x &minus; 3 and x = 3.',
          '<b>5&pi;/4, and sin(5&pi;/4) = &minus;&radic;2/2.</b> Multiply by &pi;/180: 225 &times; &pi;/180 = 5&pi;/4. The angle lies in the third quadrant, where sine is negative, with a reference angle of &pi;/4.',
          '<b>Amplitude 3, period &pi;, phase shift &pi;/6 to the right, maximum 4, minimum &minus;2.</b> The period is 2&pi; divided by k = 2. The vertical shift of 1 moves the centre line up, so the graph runs from 1 &minus; 3 to 1 + 3.',
          '<b>x = &pi;/2, 7&pi;/6, 11&pi;/6.</b> Treat sin x as a single unknown: the quadratic factors as (2 sin x + 1)(sin x &minus; 1) = 0. So sin x = 1, giving &pi;/2, or sin x = &minus;1/2, which happens in the third and fourth quadrants at 7&pi;/6 and 11&pi;/6. Students who stop at one angle per factor lose a mark here.',
          '<b>7.</b> By the remainder theorem, the remainder is f(2) = 8 + 8 &minus; 10 + 1 = 7. No division is needed, which is the whole point of the theorem.',
          '<b>Vertical asymptote x = 2, horizontal asymptote y = 1, x-intercept &minus;1, y-intercept &minus;1/2.</b> Nothing cancels, so x = 2 is a true asymptote. Numerator and denominator have the same degree, so the horizontal asymptote is the ratio of leading coefficients, 1 over 1.',
          '<b>f(g(x)) = 4x<sup>2</sup> &minus; 12x + 10, g(f(x)) = 2x<sup>2</sup> &minus; 1, f(g(2)) = 2.</b> For f(g(2)), work inside out: g(2) = 1, then f(1) = 2. The two compositions differ, which is what the curriculum asks students to notice.',
          '<b>Average rate 3; instantaneous rate about 2.7726.</b> The average is (2<sup>3</sup> &minus; 2<sup>1</sup>) &divide; (3 &minus; 1) = 6 &divide; 2 = 3. Using x = 1.999 and x = 2.001 gives about 2.7726. In MCV4U this number turns out to be exactly 4 ln 2, which a student can check now on a calculator.',
          '<b>Proof.</b> Start with the left side. By the Pythagorean identity, 1 &minus; cos<sup>2</sup> x = sin<sup>2</sup> x. So the left side is sin<sup>2</sup> x &divide; sin x = sin x, which is the right side. Work on one side only; moving terms across both sides turns a proof into an equation.',
          '<b>x = 4; reject x = &minus;2.</b> Combine with the product law: log<sub>2</sub> (x(x &minus; 2)) = 3, so x<sup>2</sup> &minus; 2x = 8, which gives (x &minus; 4)(x + 2) = 0. x = &minus;2 makes both arguments negative, and a logarithm of a negative number is undefined, so only x = 4 survives.'
        ] }
      ]
    },
    {
      id: 'exam', tint: 'deep', eyebrow: 'Exam plan, ours',
      h2: 'A six-week plan for the MHF4U final exam',
      lede: 'This plan is ours. It assumes a written final that covers all four strands, which is the common format, but confirm the details with the teacher first: weighting, whether a formula sheet is allowed, and which calculator.',
      body: [
        { kind: 'table', caption: 'Six weeks to the Advanced Functions final (ours)', head: ['Week', 'Focus', 'Done when'], numCols: [0], rows: [
          ['6', 'Collect every unit test and quiz; sort each lost mark by strand and by type of mistake', 'One page lists the five mistakes you make most'],
          ['5', 'Logarithms and exponential equations', 'You can solve a two-base equation and check it with numbers'],
          ['4', 'Radians, trig graphs, equations and identities', 'You can list every solution from 0 to 2&pi; and prove three identities cleanly'],
          ['3', 'Polynomial and rational functions, factoring, inequalities', 'You can sketch a rational function from its five lines and solve a cubic inequality with a sign chart'],
          ['2', 'Rates of change and combined functions, then a first full practice paper', 'One timed paper done, every error logged'],
          ['1', 'Second timed paper, then review of the error log only', 'No new topics after the second paper']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Ask the teacher three questions in week six.</b> What share of the final is the exam, is there a formula sheet, and is a graphing calculator allowed. Each answer changes how you revise.',
          '<b>Rank strands by marks lost, not by how they feel.</b> Many students fear trigonometry and then lose more marks on rational functions. The test papers already know which strand hurts.',
          '<b>Rewrite one problem per day from memory.</b> Pick a problem you got wrong, close the book and solve it again with every step justified. Copying the correction does not count.',
          '<b>Keep a formula page in your own handwriting.</b> Log laws, the special angle values, the compound angle formulas, the five-line rational routine. If a formula sheet is allowed, you will know where everything is on it; if not, you will have written it many times.',
          '<b>Practise in radians only.</b> For the last three weeks, keep the calculator in radian mode and convert any degree question by hand.',
          '<b>Time the papers.</b> Our two practice papers are full length. Finishing early on a practice paper is a sign to check answers by substitution, the habit from problem 1.',
          '<b>Sleep the night before.</b> The last evening is for reading the error log once. Nothing new goes in after the second paper.'
        ] }
      ]
    },
    {
      id: 'pathway', tint: 'tint', eyebrow: 'After Grade 12',
      h2: 'How MHF4U sits in university admission',
      lede: 'Advanced Functions appears on more admission pages than almost any other Grade 12 course. Below: three listings from two Ontario universities, copied from their own admission pages, and the ministry sequencing rule that sits behind them.',
      body: [
        { kind: 'table', caption: 'Programs that list Advanced Functions, from the universities&rsquo; own admission pages (read 22 October 2026)', head: ['Program', 'Math courses named', 'Other details listed'], rows: [
          ['University of Waterloo, Accounting and Financial Management', '&ldquo;Advanced Functions (minimum final grade of 75% is required)&rdquo; and &ldquo;Calculus and Vectors (minimum final grade of 75% is required)&rdquo;', '&ldquo;Admission average: Mid-80s&rdquo;; Mathematics of Data Management is a recommended course'],
          ['University of Toronto Mississauga, Economics', 'ENG4U / EAE4U, MHF4U and MCV4U', 'OSSD with six 4U/M subjects including English'],
          ['University of Toronto St. George, Economics (TAX)', 'ENG4U / EAE4U and MCV4U', 'MHF4U is absent from this listing; the ministry rule below explains why it is still needed']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The rule that makes MHF4U unavoidable for calculus',
          left: [
            'The Calculus and Vectors course page carries a note: &ldquo;The new Advanced Functions course (MHF4U) must be taken prior to or concurrently with Calculus and Vectors (MCV4U).&rdquo; So when a program lists MCV4U alone, as the St. George Economics listing does, a student who meets it has already taken MHF4U or is taking it alongside.',
            'For families planning Grade 12, that means MHF4U goes in the first semester if the school allows it, or in the same semester as MCV4U if not. Taking calculus first is not an option the curriculum offers.'
          ],
          rightH3: 'Minimum grades are a separate hurdle',
          right: [
            'Some programs set a floor on individual courses as well as an overall average. Waterloo&rsquo;s Accounting and Financial Management page asks for a final grade of at least 75% in Advanced Functions, Calculus and Vectors and English, and it lists the program average in the mid-80s.',
            'We do not promise any mark, and we would distrust anyone who did. What we can do is make sure the mark a student earns reflects what they understand, not lost points on radian mode and rejected log solutions. Admission rules are revised from cycle to cycle, so reread each page in the autumn your teen applies.'
          ] },
        { kind: 'source', html: 'Sources, read 22 October 2026: <a class="ag-inline-link" href="https://uwaterloo.ca/future-students/programs/accounting-and-financial-management" rel="noopener" target="_blank">University of Waterloo, Accounting and Financial Management</a>; <a class="ag-inline-link" href="https://future.utoronto.ca/undergraduate-programs/economics/" rel="noopener" target="_blank">University of Toronto, Economics</a>; ' + SRC_MATH + ', MCV4U course page. Neither university has any connection with us.' }
      ]
    },
    {
      id: 'credit', tint: '', eyebrow: 'Credit and timing',
      h2: 'MHF4U online or in summer school: we teach, the school grants the credit',
      lede: 'Families often search for MHF4U online because they want the credit in a hurry. That is a different service from ours, and it helps to keep the two apart.',
      body: [
        { kind: 'two',
          leftH3: 'Where an MHF4U credit comes from',
          left: [
            'Only an institution that both teaches and evaluates MHF4U can grant it: a day school, a board-run summer or evening program, or a private school permitted to grant Ontario credits. We are not any of those. Our classes sit beside that course, we do not grant Ontario credits, and no mark of ours appears on a report card.',
            'For the diploma itself, Ontario asks for three math credits, with at least one in Grade 11 or 12. MHF4U is usually a student&rsquo;s fourth or fifth math course, taken for university admission rather than for graduation.'
          ],
          rightH3: 'When families bring us in',
          right: [
            'Some come in September, before the first logarithm test. Some come after a midterm that went badly, with six weeks to the final. Some book the summer before Grade 12 so that MHF4U feels like a second pass, especially when MCV4U is planned for the same year.',
            'If a student is taking MHF4U in a compressed summer course, the pace is brutal: a full credit in a few weeks. A second teacher who knows the unit order can keep the evenings productive.'
          ] },
        { kind: 'p', mt: true, html: 'Most of Ontario keeps Eastern time: UTC-4 today, UTC-5 once the clocks fall back on 1 November 2026, and UTC-4 again from 14 March 2027. Our teachers are on India time, UTC+5:30, which puts India 9 hours 30 minutes ahead of Ottawa in summer and 10 hours 30 minutes ahead in winter. A few communities in the northwest keep another clock, so families there should check class times against their own zone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'Four stages in Advanced Functions',
    lede: 'Our own stages, drawn from teaching Grade 12 students through the course. Most students move between stages strand by strand, not all at once.',
    table: { caption: 'Stages of an MHF4U student (ours)', head: ['Stage', 'What you notice'], rows: [
      ['1. Pattern matcher', 'Solves a question that looks like the textbook example, and freezes when the numbers or the order change'],
      ['2. Rule user', 'Knows the log laws and the trig identities, and sometimes applies them where they do not hold'],
      ['3. Checker', 'Substitutes answers back, rejects impossible ones, and tests a value in each interval without being told'],
      ['4. Ready for MCV4U', 'Explains why each step is allowed, and moves between a graph, an equation and a table without losing the thread']
    ] },
    left: { h3: 'For parents', ps: [
      'Have your teen talk you through one solved problem, step by step, saying why each step is allowed. The &ldquo;why&rdquo; is where you will hear whether the course has landed.',
      'A sudden drop in marks halfway through MHF4U is common. It often means the course moved from Grade 11 ideas to new ones, and the student&rsquo;s habits have not caught up yet.'
    ] },
    right: { h3: 'For students', ps: [
      'Check before you hand in. Put every log answer back into the original equation, and every trig answer into a calculator in radian mode.',
      'When a question looks unfamiliar, ask what operation is in the way and what undoes it. That one question solves more MHF4U problems than any formula sheet.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for Ontario senior math students',
    lede: 'A regular teacher runs each of these live online, for a batch or for a single student.',
    bands: [
      { num: 'I', h3: 'Around Grade 12 math', sub: 'Grades 11 and 12', courses: [
        { code: 'MAFT / G12 / 01', slug: 'ap-calculus-exam-prep', title: 'Calculus', blurb: 'Limits, derivatives and integrals for the year after Advanced Functions.' },
        { code: 'MAFT / G12 / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For students adding Data Management to their timetable.' },
        { code: 'MAFT / G12 / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Factoring and exponent rules, rebuilt from the ground up.' }
      ] },
      { num: 'II', h3: 'Contests and depth', sub: 'Grades 9 to 12', courses: [
        { code: 'MAFT / CON / 01', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Preparation for the CEMC contests, including Euclid.' },
        { code: 'MAFT / CON / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'Proof and problem solving well past the curriculum.' },
        { code: 'MAFT / CON / 03', slug: 'college-mathematics-complete-masterclass', title: 'University math, early', blurb: 'Calculus, linear algebra and proof for the keenest.' }
      ] },
      { num: 'III', h3: 'Math with code', sub: 'Teens', courses: [
        { code: 'MAFT / COD / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Plot a function, test a conjecture, automate the arithmetic.' },
        { code: 'MAFT / COD / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Exponential and logarithmic models on real data.' },
        { code: 'MAFT / COD / 03', slug: 'ics3u-ics4u-computer-science-companion-course', title: 'Ontario computer science companion', blurb: 'For a timetable that mixes senior math with programming.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes paced to the Ontario semester',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school on Eastern time, fixed once you pick a batch.' },
      { time: 'Weekends', l: 'Mornings on Eastern time, popular in the weeks before a unit test.' },
      { time: '1-on-1', l: 'Booked around midterms, the final and summer school.' }
    ],
    cells: [
      { h3: 'Unit by unit', p: 'Matched to the school outline, not ours.' },
      { h3: 'Radians from day one', p: 'The calculator habit, built early.' },
      { h3: 'Real tests reviewed', p: 'Lost marks become next week&rsquo;s plan.' },
      { h3: 'Shared whiteboard', p: 'Every step written where both can see.' },
      { h3: 'Practice between classes', p: 'Short sets, marked with reasons.' },
      { h3: 'Group or private', p: 'A batch of fifteen to twenty, or your teen alone.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Some of our math students also code, and their projects show the same habit of checking work. See more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Families and students on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Start with a free class. If it fits, families pay by the month for eight live classes, the currency code is printed beside the amount, and there is no term contract to sign: stop after any month.',
    free: ['A free first class', 'Bring the latest MHF4U test', 'No card details asked'],
    group: ['Fifteen to twenty students', 'The same teacher each week', 'Pick the batch time', 'Billed monthly'],
    one: ['Your teen and one teacher', 'Booked around tests and the final', 'Built from their own course']
  },

  faq: {
    eyebrow: 'Questions from Ontario families',
    h2: 'MHF4U: common questions',
    items: [
      { q: 'What is MHF4U?', a: 'MHF4U is Advanced Functions, Grade 12, University Preparation, an Ontario math course described in the 2007 curriculum for Grades 11 and 12. It has four strands: exponential and logarithmic functions, trigonometric functions in radians, polynomial and rational functions, and characteristics of functions, including rates of change and composition.' },
      { q: 'Do you grant the MHF4U credit?', a: 'No. Our classes support the school course, and we do not grant Ontario credits. The credit comes from the student\'s school, a board summer or night school, or an Ontario credit provider. Our classes are the teaching and practice around that course.' },
      { q: 'What is the prerequisite for MHF4U?', a: 'The MHF4U course page in the 2007 curriculum lists Functions, Grade 11, University Preparation (MCR3U), or Mathematics for College Technology, Grade 12, College Preparation (MCT4C). The current Ontario curriculum website gives the same two options.' },
      { q: 'Can I take MHF4U and MCV4U at the same time?', a: 'Yes, the curriculum allows it. The Calculus and Vectors course page says Advanced Functions must be taken prior to or concurrently with Calculus and Vectors. Taking them together is heavy, because MCV4U leans on MHF4U ideas from its first unit, so many students prefer MHF4U first when the timetable allows.' },
      { q: 'Is MHF4U hard?', a: 'It is a step up from MCR3U because two ideas are new: logarithms and radian measure. Most lost marks come from a few habits, such as misusing log laws, leaving the calculator in degrees, and dividing an inequality by an expression that can be negative. Those habits can be fixed with practice. We do not promise marks, and no honest tutor can.' },
      { q: 'Which universities require MHF4U?', a: 'Many list it directly. On 22 October 2026, Waterloo\'s Accounting and Financial Management page asked for Advanced Functions with a minimum final grade of 75%, and Waterloo Computer Science listed it among the required Grade 12 courses. Programs that list only MCV4U still need MHF4U first or alongside, by the ministry\'s own rule.' },
      { q: 'How is the MHF4U final mark built?', a: 'The 2007 curriculum splits the grade 70 to 30. Work during the term counts for the larger share, and an end-of-course evaluation, usually a written exam in MHF4U, counts for the rest. Schools set the details, so ask the teacher about formula sheets and calculators.' },
      { q: 'How do you revise for the MHF4U final exam?', a: 'Start six weeks out. Sort every lost mark from the term by strand, work through logarithms, trigonometry, polynomial and rational functions, then rates of change, and finish with two timed practice papers. Check every answer by substitution and practise with the calculator in radian mode.' },
      { q: 'Do you teach from the student\'s textbook?', a: 'We teach from the student\'s own course outline, tests and homework, whatever textbook the school uses. The curriculum is the same across Ontario, but the unit order and the emphasis differ between schools, so we follow the teacher\'s plan.' },
      { q: 'When do classes run for Ontario students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We set class times in Eastern time for most of the province and reconfirm them in the weeks of 1 November 2026 and 14 March 2027, when the clocks move.' },
      { q: 'How much do MHF4U classes cost?', a: 'Your first class costs nothing. Ongoing classes are billed by the month for eight live sessions, with no term contract to sign. The current amounts for a batch and for private teaching appear in the fees section above.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for Grade 11 and 12 math in Ontario.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our pages for Canadian families, in one place.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor for Canada', p: 'Math help from the early grades up to Grade 12.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Live coding classes for Ontario learners.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests', p: 'Euclid and the CEMC contests, explained.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'The function families of MHF4U under another name.' },
      { href: '/calculus-tutoring-online', label: 'Calculus tutoring', p: 'For the course that comes next.' },
      { href: '/blog/sohcahtoa-trigonometry-for-beginners', label: 'Trigonometry for beginners', p: 'The ratios behind every radian question.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U computer science help', p: 'For students pairing senior math with code.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class with us, described step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send us the unit your teen is on, the date of the next test, and a photo of a recent quiz if you have one. The first class works from that, not from a script.',
    readFirst: 'Want to know more before booking? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a class from start to finish, and the <a class="ag-inline-link" href="/online-math-tutor-canada">Canada math page</a> covers the earlier grades.',
    note: 'Every class is live on video with a teacher working from India, so there is no travel and no one comes to the house. From Ontario, WhatsApp is the fastest way to reach us.',
    formNote: 'The first class is free. We will not ask for card details to book it.'
  },

  footer: {
    cols: [
      { h4: 'Senior math', links: [
        { href: '/courses/ap-precalculus-exam-prep-course', label: 'Precalculus course' },
        { href: '/courses/ap-calculus-exam-prep', label: 'Calculus course' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
        { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests' }
      ] }
    ],
    bottomRight: 'Find what is in the way, then undo it'
  },

  personalityCss: `
.ag-root.ag-maft .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-maft .ag-capsule { border-left-width: 6px; }
.ag-root.ag-maft .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-maft .ag-table caption { text-align: left; }
.ag-root.ag-maft .ag-steps li { margin-bottom: 0.6rem; line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'The Ontario Curriculum, Grades 11 and 12: Mathematics (2007), fetched raw 22 October 2026: programme overview for Advanced Functions; MHF4U course description and prerequisite; overall expectations of strands A to D (plain-word fragments); specific expectations C3.1, C3.2, B3.2 and D2.5; the MCV4U sequencing note; the assessment section. Ontario curriculum content API course record for MHF4U (2007, prerequisite field). Waterloo AFM and CS admission pages; U of T Economics admission page (Mississauga and St. George blocks).',
    localProject: 'Our two worked problems: two video clips growing at different rates (2000 x 2^(t/3) = 500 x 3^(t/4), solved with base-10 logarithms to about 31.8 days and checked at days 31 and 32) and a cubic inequality solved with the factor theorem and a four-interval sign chart; twelve original practice questions, three per strand, with SymPy-checked answers; a strand-by-strand error table; a six-week exam plan. Lesson family: undo the operation.',
    requiredMentions: ['This course extends students&rsquo; experience with functions.', 'of degree no higher than four', 'student reproduction of the development of the general case is not required', 'satisfies the mathematical prerequisite for some universities', 'Mathematics for College Technology, Grade 12, College Preparation', 'Advanced Functions (minimum final grade of 75% is required)', 'Admission average: Mid-80s', 'University of Toronto St. George, Economics (TAX)', '500 &times; 3<sup>t/4</sup>', '(x &minus; 1)(x &minus; 3)(x + 2)', 'five-line rational routine', 'Find what is in the way, then undo it'],
    sources: [
      { claim: 'MHF4U description, prerequisite, strands and expectations; the MCV4U sequencing note; programme overview; assessment rule; one credit.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf' },
      { claim: 'The current MHF4U course record: title, year issued 2007, Grade 12 University Preparation, prerequisite field.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=MCR3U,MHF4U,MCV4U,MDM4U,MPM2D,MTH1W,MCF3M,MAP4C,MEL4E&depth=0' },
      { claim: 'Waterloo Accounting and Financial Management: Advanced Functions and Calculus and Vectors with a 75% minimum, Mid-80s average, Data Management recommended.', url: 'https://uwaterloo.ca/future-students/programs/accounting-and-financial-management' },
      { claim: 'Waterloo Computer Science: Advanced Functions among the required courses, low to mid-90s.', url: 'https://uwaterloo.ca/future-students/programs/computer-science' },
      { claim: 'U of T Economics: Mississauga lists MHF4U and MCV4U; St. George (TAX) lists MCV4U.', url: 'https://future.utoronto.ca/undergraduate-programs/economics/' }
    ],
    rejectedClaims: [
      'That St. George Economics does not need MHF4U: the page lists MCV4U only, and the ministry note says MHF4U comes first or alongside, so the page says both.',
      'Quoting expectations that contain pi, inequality signs or minus signs: the PDF extraction lost them, so they are paraphrased.',
      'Any mark, grade or admission outcome from our classes: none promised.',
      'That MHF4U is required for the OSSD: the diploma asks for three math credits with one in Grade 11 or 12, not MHF4U by name.',
      'Named credit providers, summer schools or individual Ontario schools: none named.',
      'That a given textbook is used across Ontario: the page says schools differ.',
      'An admission year for the U of T listing: none is stated, so the read date is given.',
      'Any affiliation with the Ontario Ministry of Education, Waterloo or U of T: none, and the page says so.'
    ]
  }
};
