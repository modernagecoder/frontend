'use strict';
// Pre-calculus 12 tutor, British Columbia (ag- school course door; Canada cluster Plan 2, row 24).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 23 October 2026 by the coordinator after curriculum.gov.bc.ca came back (shared copies in
// keyword-research-2026-09/ca/src-pilots/bc-math-shared-mt/, copied to src-pilots/pre-calculus-12-tutor-bc/):
//  - curriculum.gov.bc.ca/curriculum/mathematics/12/pre-calculus (mathematics_12_pre-calculus.txt). Big ideas (fragments around
//    glossary links): inverses "is the foundation of solving equations and can be extended to relationships between functions.";
//    "Understanding the characteristics of families of functions"; "allows us to model and understand relationships and to build
//    connections between classes of functions."; transformations "of shapes extend to functions and relations in all of their
//    representations."; inquiry questions "How are the laws of exponents connected to the laws of logarithms?", "Why do some equations
//    have extraneous roots and other equations do not?", "How can a rational function of the form y = (ax+b) / (cx+d) be considered as
//    a transformation of the reciprocal function y = 1/x ?", "A set of data looks like a parabola, but it is not. What function could be
//    used to model this data?". Content: "vertical and horizontal translations, stretches, and reflections"; "inverses: graphs and
//    equations"; "solving equations with same base and with different bases, including base e"; "geometric sequences connecting to
//    exponential functions"; "infinite geometric series"; "sigma notation"; "using common and natural logarithms"; "polynomial
//    factoring, including the factor theorem and the remainder theorem"; "graphing and the characteristics of a graph (e.g., degree,
//    extrema, zeros, end-behaviour)"; "characteristics of graphs, including asymptotes, intercepts, point discontinuities, domain,
//    end-behaviour"; "examining angles in standard position in both radians and degrees"; "exploring unit circle, reference and
//    coterminal angles, special angles"; "solving first- and second-degree equations (over restricted domains and all real numbers)";
//    "using identities to reduce complexity in expressions and solve equations (e.g., Pythagorean, quotient, double angle, reciprocal,
//    sum and difference)". Competencies: "(e.g., exponential functions to geometric sequences)"; "be able to defend the reasonableness
//    of an estimated value or a solution to a problem or equation (e.g., the zeros of a graphed polynomial function)"; "(e.g., with
//    puzzles, games, and coding)".
//  - curriculum.gov.bc.ca/curriculum/mathematics/12/calculus (research copy, 22 October 2026): content item "parent functions from
//    Pre-Calculus 12".
//  - you.ubc.ca requirements tool, programs for British Columbia applicants (ubc-ajax-programs-686.json, saved raw 22 October 2026 by
//    the UBC writer; copy in this row's folder): "Pre-Calculus 12" listed for Science, Applied Science (Engineering), Commerce (UBC
//    Sauder School of Business), International Economics, Applied Biology; Food and Resource Economics "Pre-Calculus 12 (minimum 67%)";
//    Arts "If you intend to major in Economics, you must complete Pre-Calculus 12"; Media Studies "Pre-Calculus 12 is strongly
//    recommended".
//  - Time: facts-geo.md section 3 and gov_2026AG0013-000209 (BC UTC-7 permanent after 8 March 2026; East Kootenay and Golden UTC-6).
// Our own material, labelled on the page: the rational-function problem y = (2x + 7)/(x + 3) = 2 + 1/(x + 3) with its inverse
// 1/(x - 2) - 3 and a Python round-trip table (Python 3.13), the trig equation sin 2x = sin x on [0, 2pi) (0, pi/3, pi, 5pi/3; SymPy
// solveset), twelve practice questions with answers checked in SymPy 1.14 (and numerically where SymPy's solveset under-reported),
// the unit-by-unit table, the study plan and countdown, the ladder. Lesson family: read the function's family first.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const INV_PY = `# Check that two functions undo each other, on a table of values (ours)
def f(x):
    return (2*x + 7) / (x + 3)

def f_inv(x):
    return 1 / (x - 2) - 3

for x in [-5, -2, 1, 1.5, 10]:
    y = f(x)
    print(f"x = {x:>5}   f(x) = {y:8.4f}   f_inv(f(x)) = {f_inv(y):8.4f}")`;

const INV_OUT = `x =    -5   f(x) =   1.5000   f_inv(f(x)) =  -5.0000
x =    -2   f(x) =   3.0000   f_inv(f(x)) =  -2.0000
x =     1   f(x) =   2.2500   f_inv(f(x)) =   1.0000
x =   1.5   f(x) =   2.2222   f_inv(f(x)) =   1.5000
x =    10   f(x) =   2.0769   f_inv(f(x)) =  10.0000`;

const SRC_PC12 = '<a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/mathematics/12/pre-calculus" rel="noopener" target="_blank">BC Pre-calculus 12 curriculum</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'PRE-CALCULUS 12 BC', blurb: 'BC Pre-calculus 12 unit by unit from the provincial curriculum, with a rational function and its inverse, a trig equation, twelve practice questions and a plan.' },
  slug: 'pre-calculus-12-tutor-bc',
  code: 'prc',
  accent: '#613811',
  accentRationale: 'Pre-calculus 12, British Columbia: a muted burnt umber, #613811, allocated to this row in the Plan 2 group list (at least 6 RGB units from every site accent and 14 from other Canada accents), contrast 9.52 on the paper #FBF8F2, 8.95 on #F5F1E8 and 8.19 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Pre-calculus 12 tutor, BC',
  title: 'Pre-calculus 12 BC Tutor: Units, Practice Questions, Plan',
  description: 'BC Pre-calculus 12 from the provincial curriculum: transformations, logarithms, series, polynomials, trigonometry, two worked problems, 12 practice questions.',
  ogDescription: 'Every Pre-calculus 12 unit as the BC curriculum lists it, from inverses and logarithms to trig identities. Two problems worked in full, twelve original questions with answers and a study plan.',
  twitterDescription: 'BC Pre-calculus 12 from the curriculum, with two worked problems and twelve practice questions.',
  pageName: 'Pre-calculus 12 Tutor for BC Students',
  webPageDescription: 'A guide for British Columbia students and parents to Pre-calculus 12, built from the provincial curriculum page fetched on 23 October 2026, with two worked problems, twelve practice questions and a study plan.',
  courseDescription: 'Live online Pre-calculus 12 tutoring for British Columbia students, taught alongside the school course in a batch or one to one. No provincial credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'British Columbia', href: '/coding-classes-in-british-columbia' }],
  crumbLabel: 'Pre-calculus 12 tutor',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#units', label: 'The units' },
    { href: '#ideas', label: 'Big ideas' },
    { href: '#rational', label: 'Worked problems' },
    { href: '#practice', label: 'Practice' },
    { href: '#plan', label: 'Study plan' }
  ],
  eyebrow: 'British Columbia &middot; Grade 12 &middot; Pre-calculus 12',
  h1: 'Pre-calculus 12 tutor for BC students, live online',
  lede: 'Pre-calculus 12 asks a BC student to see every function as a member of a family: a parent graph that has been moved, stretched, reflected or inverted. Once that habit forms, logarithms, rational functions and trigonometry stop being separate chapters and start looking like variations on one idea. Below: the course unit by unit as the BC curriculum states it, a rational function and a trig equation we worked from start to finish, twelve questions we wrote with answers, and a revision plan. Our tutoring runs next to the school course, and we do not grant provincial credits; only the school can award Pre-calculus 12.',
  secondaryCta: { href: '#practice', label: 'Jump to the twelve questions' },
  wa: 'Hello Modern Age Coders, my teen in BC is taking Pre-calculus 12 and would like help alongside the school course. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; reasoning first, formulas second',
  spec: [
    ['For', 'Grade 12 students in BC'],
    ['Before it', 'Pre-calculus 11'],
    ['Units', 'Functions, logarithms, series, polynomials, trigonometry'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Clock', 'Pacific time, UTC-7 all year'],
    ['Credit', 'None granted: we teach alongside school'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Pre-calculus 12 is British Columbia&rsquo;s Grade 12 pre-calculus course. Its curriculum covers transformations and inverses of functions, exponential and logarithmic equations, geometric sequences and series, polynomial and rational functions, and trigonometry in radians with identities. Modern Age Coders tutors it live online, in a batch or one to one, through our Western Canada Grade 12 Math course.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for a Pre-calculus 12 student',
    lede: 'The first is built for this exact course. The second goes deeper on functions; the third is the calculus that comes next.',
    items: [
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', code: 'PRC / 01', title: 'Western Canada Grade 12 Math', note: 'Ages 16 to 18. Pre-calculus 12 taught beside the school course, in the order of the teacher&rsquo;s outline. No credit is granted by us.' },
      { course: 'ap-precalculus-exam-prep-course', code: 'PRC / 02', title: 'AP Precalculus', note: 'The same function families as Pre-calculus 12, practised to the standard of an external exam.' },
      { course: 'ap-calculus-exam-prep', code: 'PRC / 03', title: 'AP Calculus AB and BC', note: 'For a student moving on to Calculus 12: limits, derivatives and integrals.' }
    ]
  },

  sections: [
    {
      id: 'units', tint: 'tint', eyebrow: 'The BC curriculum',
      h2: 'The five Pre-calculus 12 units, as the curriculum lists them',
      lede: 'The BC curriculum page for Pre-calculus 12 groups its content into five areas. Each area has a short label and a list of what students work on. The table quotes those lists and adds our reading of what a student actually does.',
      body: [
        { kind: 'table', caption: 'Pre-calculus 12 content areas, quoted from curriculum.gov.bc.ca (copy fetched 23 October 2026)', head: ['Area', 'What the curriculum lists', 'At the desk (our reading)'], rows: [
          ['Transformations of functions and relations', 'Parent functions such as absolute value, radical, reciprocal, conics, exponential, logarithmic and trigonometric; &ldquo;vertical and horizontal translations, stretches, and reflections&rdquo;; &ldquo;inverses: graphs and equations&rdquo;; operations on functions', 'Move a parent graph and say where every key point lands; find and graph an inverse'],
          ['Exponential functions and equations', 'Exponential graphing with transformations; &ldquo;solving equations with same base and with different bases, including base e&rdquo;; problems in situational contexts', 'Match the bases when you can, use logarithms when you cannot'],
          ['Sequences and series', 'Common ratio, first term, general term; &ldquo;geometric sequences connecting to exponential functions&rdquo;; &ldquo;infinite geometric series&rdquo;; &ldquo;sigma notation&rdquo;', 'Write a general term, sum a finite series, decide whether an infinite one converges'],
          ['Logarithms', 'Applying the laws of logarithms; evaluating with different bases; &ldquo;using common and natural logarithms&rdquo;; exploring the inverse of the exponential; graphing and solving', 'Turn a product into a sum, an exponent into a coefficient, and check the domain afterwards'],
          ['Polynomial and rational functions', '&ldquo;polynomial factoring, including the factor theorem and the remainder theorem&rdquo;; graph characteristics (&ldquo;degree, extrema, zeros, end-behaviour&rdquo;); rational functions with &ldquo;asymptotes, intercepts, point discontinuities, domain, end-behaviour&rdquo;', 'Find a factor by testing values; tell a hole from an asymptote'],
          ['Trigonometry', '&ldquo;examining angles in standard position in both radians and degrees&rdquo;; &ldquo;exploring unit circle, reference and coterminal angles, special angles&rdquo;; graphing with transformations; &ldquo;solving first- and second-degree equations (over restricted domains and all real numbers)&rdquo;; identities', 'Work in radians by default; solve on an interval, then write the general solution']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Identities by name',
          left: [
            'The trigonometry content names the identity families a student is expected to use: &ldquo;using identities to reduce complexity in expressions and solve equations (e.g., Pythagorean, quotient, double angle, reciprocal, sum and difference)&rdquo;. That list is a good checklist. A student who can write each family from memory, and say when it helps, is ready for the identity questions on any test.',
            'Notice the verb: identities are used to reduce complexity. They are tools for simplifying and solving, not only statements to prove. Our second worked problem uses a double-angle identity in exactly that way.'
          ],
          rightH3: 'One course, then calculus',
          right: [
            'Pre-calculus 12 is the course that BC&rsquo;s Calculus 12 builds on: the Calculus 12 curriculum lists &ldquo;parent functions from Pre-Calculus 12&rdquo; as content. The families of functions learned here are the functions calculus then differentiates and integrates.',
            'So the habits that matter most for Calculus 12 are made in this course: rewriting an expression into a friendlier form, reading a graph&rsquo;s behaviour at its edges, and finding where a function is undefined. Our <a class="ag-inline-link" href="/calculus-12-tutor-bc">Calculus 12 page</a> shows what comes next.'
          ] },
        { kind: 'source', html: 'Source: ' + SRC_PC12 + ', content and curricular competencies, in a copy fetched raw on 23 October 2026; the Calculus 12 reference is from the BC Calculus 12 page, fetched 22 October 2026. Modern Age Coders has no connection with the BC ministry of education or any school district.' }
      ]
    },
    {
      id: 'ideas', tint: 'deep', eyebrow: 'Big ideas and inquiry',
      h2: 'The three big ideas, and the questions that test them',
      lede: 'Pre-calculus 12 has three big ideas, each with sample questions the curriculum offers for inquiry. The questions are worth reading as a student, because each one names a confusion that shows up on tests.',
      body: [
        { kind: 'table', caption: 'Pre-calculus 12 big ideas with a sample inquiry question for each, quoted from curriculum.gov.bc.ca (fetched 23 October 2026)', head: ['Big idea, in the curriculum&rsquo;s words', 'A sample inquiry question it offers', 'Why the question matters (ours)'], rows: [
          ['Using inverses &ldquo;is the foundation of solving equations and can be extended to relationships between functions.&rdquo;', '&ldquo;Why do some equations have extraneous roots and other equations do not?&rdquo;', 'Squaring both sides or taking a logarithm can add or lose solutions; checking is part of solving'],
          ['Understanding families of functions &ldquo;allows us to model and understand relationships and to build connections between classes of functions.&rdquo;', '&ldquo;A set of data looks like a parabola, but it is not. What function could be used to model this data?&rdquo;', 'Two graphs can look alike near the middle and differ completely at the edges'],
          ['Transformations &ldquo;of shapes extend to functions and relations in all of their representations.&rdquo;', '&ldquo;How can a rational function of the form y = (ax+b) / (cx+d) be considered as a transformation of the reciprocal function y = 1/x ?&rdquo;', 'Rewriting a function as a moved parent makes its asymptotes visible at once']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Exponents and logarithms are one topic',
          left: [
            'Another inquiry question asks: &ldquo;How are the laws of exponents connected to the laws of logarithms?&rdquo; Many students learn the two sets of laws as separate lists to memorise. They are the same facts read in opposite directions. Multiplying powers adds exponents, so the logarithm of a product is the sum of logarithms.',
            'A competency elaboration makes a related connection, naming &ldquo;exponential functions to geometric sequences&rdquo; as an example of linked ideas. A geometric sequence is an exponential function sampled at whole numbers. Students who see that stop treating sequences as a separate unit.'
          ],
          rightH3: 'Defend the answer, not just the method',
          right: [
            'The estimation competency asks students to &ldquo;be able to defend the reasonableness of an estimated value or a solution to a problem or equation (e.g., the zeros of a graphed polynomial function)&rdquo;. In practice: sketch first, estimate where the zeros or asymptotes should be, then solve, then compare.',
            'The reasoning competency mentions conclusions drawn &ldquo;(e.g., with puzzles, games, and coding)&rdquo;. That is why our first worked problem ends with a short Python check: a program that plugs values into a function and its inverse is a quick, honest test of an algebraic answer.'
          ] }
      ]
    },
    {
      id: 'rational', tint: 'tint', eyebrow: 'Worked problem 1, ours',
      h2: 'A rational function seen as a moved reciprocal, and its inverse',
      lede: 'This problem is ours. It takes the curriculum&rsquo;s own inquiry question about y = (ax + b) / (cx + d) and answers it with one function, from rewriting to graph features to the inverse, then checks the inverse with a few lines of Python.',
      body: [
        { kind: 'p', html: '<b>The problem.</b> Let f(x) = (2x + 7) / (x + 3). (a) Write f as a transformation of y = 1/x. (b) State its asymptotes, domain, range and intercepts. (c) Find the inverse function and check it.' },
        { kind: 'ol', items: [
          '<b>Divide to expose the parent.</b> 2x + 7 = 2(x + 3) + 1, so f(x) = 2 + 1/(x + 3). That is y = 1/x moved 3 units left and 2 units up. No stretch and no reflection: the coefficient of the fraction is 1.',
          '<b>Read the asymptotes from the moves.</b> The parent has asymptotes x = 0 and y = 0, so f has x = &minus;3 and y = 2. Domain: every real number except &minus;3. Range: every real number except 2.',
          '<b>Find the intercepts.</b> Setting x = 0 gives f(0) = 7/3. Setting f(x) = 0 means 2x + 7 = 0, so x = &minus;3.5.',
          '<b>Swap and solve for the inverse.</b> Write x = 2 + 1/(y + 3). Then x &minus; 2 = 1/(y + 3), so y + 3 = 1/(x &minus; 2), and f<sup>&minus;1</sup>(x) = 1/(x &minus; 2) &minus; 3.',
          '<b>Check with the graph&rsquo;s logic.</b> An inverse reflects the graph in y = x, so its asymptotes swap: x = 2 and y = &minus;3. They do. Its domain is the original range, all reals except 2.',
          '<b>Check with numbers.</b> Feed values through f and then through the inverse; each should come back unchanged.'
        ] },
        { kind: 'code', label: 'Python &middot; round-trip check (ours)', lang: 'python', code: INV_PY },
        { kind: 'code', label: 'Output, Python 3.13', lang: 'text', code: INV_OUT, note: 'Every value returns to itself, so the inverse is right for these inputs. The value x = &minus;3 is left out on purpose: f is undefined there.' },
        { kind: 'two', mt: true,
          leftH3: 'Why rewrite first',
          left: [
            'Students who skip step 1 usually find the vertical asymptote correctly (the denominator is zero at &minus;3) and then guess at the horizontal one. Rewriting as 2 + 1/(x + 3) removes the guessing: as x grows in either direction the fraction shrinks towards 0, so f approaches 2.',
            'The same move works for any (ax + b) / (cx + d) with c not zero: the horizontal asymptote is a/c. Here that is 2/1 = 2, which agrees.'
          ],
          rightH3: 'A hole is not an asymptote',
          right: [
            'The curriculum lists point discontinuities beside asymptotes, and the difference is a classic test question. If the top and bottom share a factor, the graph has a hole where that factor is zero, not an asymptote. Question 9 in our practice set has one.',
            'This function has no common factor, because 2x + 7 is not a multiple of x + 3, so there is no hole. Checking for a common factor before anything else is a habit worth building.'
          ] }
      ]
    },
    {
      id: 'trig', tint: 'deep', eyebrow: 'Worked problem 2, ours',
      h2: 'A trig equation where dividing loses half the answers',
      lede: 'Our second problem is a second-degree trigonometric equation solved with a double-angle identity, on a restricted domain and then over all real numbers, as the curriculum asks. It also shows the single most common mistake in this unit.',
      body: [
        { kind: 'p', html: '<b>The problem.</b> Solve sin 2x = sin x for 0 &le; x &lt; 2&pi;. Then write the general solution over all real numbers.' },
        { kind: 'ol', items: [
          '<b>Use the identity to get one angle.</b> sin 2x = 2 sin x cos x, so the equation becomes 2 sin x cos x = sin x.',
          '<b>Move everything to one side.</b> 2 sin x cos x &minus; sin x = 0.',
          '<b>Factor, do not divide.</b> sin x (2 cos x &minus; 1) = 0. Dividing both sides by sin x instead would throw away every solution where sin x = 0.',
          '<b>Solve each factor on the interval.</b> sin x = 0 gives x = 0 and x = &pi;. 2 cos x &minus; 1 = 0 gives cos x = 1/2, so x = &pi;/3 or x = 5&pi;/3.',
          '<b>Collect and check.</b> Four solutions: 0, &pi;/3, &pi; and 5&pi;/3. At x = &pi;/3, sin(2&pi;/3) = &radic;3/2 = sin(&pi;/3). A computer algebra check (SymPy solveset) returns the same four values.',
          '<b>Extend to all real numbers.</b> x = k&pi;, x = &pi;/3 + 2k&pi; and x = 5&pi;/3 + 2k&pi;, for any integer k.'
        ] },
        { kind: 'table', mt: true, caption: 'Two ways to solve sin 2x = sin x on 0 &le; x &lt; 2&pi; (ours)', head: ['Approach', 'Steps after the identity', 'Solutions found', 'Verdict'], rows: [
          ['Divide by sin x', '2 cos x = 1', '&pi;/3, 5&pi;/3', 'Loses 0 and &pi;'],
          ['Factor out sin x', 'sin x (2 cos x &minus; 1) = 0', '0, &pi;/3, &pi;, 5&pi;/3', 'Complete']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the general solution has three parts',
          left: [
            'The sine factor is zero at every multiple of &pi;, so one family covers both 0 and &pi;. The cosine factor repeats every 2&pi;, so &pi;/3 and 5&pi;/3 each start their own family. Writing x = k&pi; for the first, rather than two separate families, is tidier and equally correct.',
            'Testing one value from each family in the original equation, say x = 2&pi; and x = 7&pi;/3, is a fast way to catch a wrong period.'
          ],
          rightH3: 'Radians by default',
          right: [
            'The curriculum asks students to work with angles &ldquo;in both radians and degrees&rdquo;. In Pre-calculus 12 the answer to a solve-on-an-interval question is usually expected in radians, and Calculus 12 works almost entirely in radians, so it is worth making radians the habit now.',
            'A quick conversion check: &pi;/3 is 60&deg; and 5&pi;/3 is 300&deg;, the two angles on the unit circle whose cosine is one half.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice, ours',
      h2: 'Twelve Pre-calculus 12 practice questions',
      lede: 'All twelve were written by us for this page; none is copied from a BC school, district or exam. They go through the units in the order the curriculum lists them. Try each without notes before you read the answers.',
      body: [
        { kind: 'ol', items: [
          '<b>Transformations.</b> The point (4, 5) is on the graph of y = f(x). Where does it land on y = &minus;3f(2(x &minus; 1)) + 4?',
          '<b>Inverse.</b> Find the inverse of f(x) = (x &minus; 2) / (x + 5).',
          '<b>Same base.</b> Solve 4<sup>x + 1</sup> = 8<sup>2x &minus; 1</sup>.',
          '<b>Different bases.</b> Solve 3<sup>x</sup> = 5<sup>x &minus; 2</sup>, exactly and to three decimal places.',
          '<b>Logarithm laws.</b> Solve log<sub>3</sub> (x + 6) + log<sub>3</sub> x = 3, and test each candidate in the original equation.',
          '<b>Infinite series.</b> A geometric series has first term 12 and common ratio 3/4. Write its general term and find the sum to infinity.',
          '<b>Sigma notation.</b> Evaluate the sum of 5 &middot; 2<sup>k &minus; 1</sup> for k = 1 to 6.',
          '<b>Factor and remainder theorems.</b> Factor P(x) = x<sup>3</sup> &minus; 4x<sup>2</sup> + x + 6 fully, then find the remainder when P(x) is divided by x &minus; 4.',
          '<b>Rational function.</b> For y = (x<sup>2</sup> &minus; 4) / (x<sup>2</sup> &minus; x &minus; 2), find every asymptote and every point discontinuity.',
          '<b>Trig graph.</b> Describe y = &minus;2 cos(3(x + &pi;/4)) &minus; 1: its amplitude, its period, its horizontal shift and its range.',
          '<b>Trig equation.</b> Solve 2 cos<sup>2</sup> x &minus; cos x &minus; 1 = 0 for 0 &le; x &lt; 2&pi;.',
          '<b>Identity.</b> Show that (1 &minus; cos 2x) / sin 2x = tan x, and state any values of x where the statement is not defined.'
        ] }
      ]
    },
    {
      id: 'answers', tint: 'deep', eyebrow: 'Answers, ours',
      h2: 'Answers, with the step that matters',
      lede: 'We checked every answer with SymPy 1.14, and by direct substitution where a solver can miss roots. The working is what a teacher marks, so each answer shows it.',
      body: [
        { kind: 'ol', items: [
          '<b>(3, &minus;11).</b> Horizontal changes undo in reverse: solve 2(x &minus; 1) = 4, so x = 3. Vertical changes act directly: &minus;3(5) + 4 = &minus;11.',
          '<b>f<sup>&minus;1</sup>(x) = (5x + 2) / (1 &minus; x).</b> Swap: x = (y &minus; 2)/(y + 5). Then xy + 5x = y &minus; 2, so y(x &minus; 1) = &minus;5x &minus; 2 and y = (5x + 2)/(1 &minus; x).',
          '<b>x = 5/4.</b> Write both sides in base 2: 2<sup>2x + 2</sup> = 2<sup>6x &minus; 3</sup>. Equal bases mean equal exponents: 2x + 2 = 6x &minus; 3.',
          '<b>x = 2 ln 5 / (ln 5 &minus; ln 3), about 6.301.</b> Take natural logarithms: x ln 3 = (x &minus; 2) ln 5. Collect the x terms: x(ln 5 &minus; ln 3) = 2 ln 5.',
          '<b>x = 3.</b> The product law gives log<sub>3</sub> [x(x + 6)] = 3, so x<sup>2</sup> + 6x = 27, that is (x + 9)(x &minus; 3) = 0. The candidate &minus;9 fails: neither logarithm accepts a negative input. One genuine root and one extraneous one, the situation the inquiry question asks about.',
          '<b>t<sub>n</sub> = 12(3/4)<sup>n &minus; 1</sup>; the sum is 48.</b> The ratio is between &minus;1 and 1, so the series converges, and the sum is 12 / (1 &minus; 3/4) = 48.',
          '<b>315.</b> It is a geometric series with first term 5, ratio 2 and six terms: 5(2<sup>6</sup> &minus; 1)/(2 &minus; 1) = 315.',
          '<b>(x + 1)(x &minus; 2)(x &minus; 3); remainder 10.</b> P(&minus;1) = &minus;1 &minus; 4 &minus; 1 + 6 = 0, so x + 1 is a factor; dividing leaves x<sup>2</sup> &minus; 5x + 6. The remainder theorem says dividing by x &minus; 4 leaves P(4), which is 64 &minus; 64 + 4 + 6 = 10.',
          '<b>A hole at (2, 4/3), a vertical asymptote x = &minus;1, a horizontal asymptote y = 1.</b> Factor: (x &minus; 2)(x + 2) / [(x &minus; 2)(x + 1)]. The shared factor gives a hole at x = 2, where the simplified form (x + 2)/(x + 1) equals 4/3.',
          '<b>Amplitude 2, period 2&pi;/3, shifted &pi;/4 to the left, range from &minus;3 to 1.</b> The negative sign reflects the curve but leaves the amplitude at 2. Dividing 2&pi; by 3 gives the period, and the midline &minus;1 plus or minus 2 gives the range.',
          '<b>x = 0, 2&pi;/3, 4&pi;/3.</b> Factor as (2 cos x + 1)(cos x &minus; 1) = 0. Then cos x = 1 gives 0, and cos x = &minus;1/2 gives 2&pi;/3 and 4&pi;/3. We confirmed all three by substitution, because one solver run returned only 0: always check a tool&rsquo;s output against the factored form.',
          '<b>Use two double-angle identities.</b> 1 &minus; cos 2x = 2 sin<sup>2</sup> x and sin 2x = 2 sin x cos x, so the left side is 2 sin<sup>2</sup> x / (2 sin x cos x) = sin x / cos x = tan x. It is undefined wherever sin 2x = 0, that is at every multiple of &pi;/2.'
        ] },
        { kind: 'p', mt: true, html: 'Answer 11 has a lesson beyond the math: a computer algebra system is a strong checker but not an infallible one. For more functions practice at a gentler pace, our <a class="ag-inline-link" href="/precalculus-tutoring-online">precalculus tutoring page</a> covers the same families for any curriculum.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Study plan, ours',
      h2: 'Revising for Pre-calculus 12 unit tests and the final',
      lede: 'Pre-calculus 12 assessments are set by the school, so the first job is learning what they look like. The plan below is ours; it assumes unit tests and a final, and you can trim it to your teen&rsquo;s course.',
      body: [
        { kind: 'ol', items: [
          '<b>Ask for the assessment plan.</b> Unit tests, quizzes, a final exam, calculator rules, and how each piece is weighted.',
          '<b>Make a parent-function sheet.</b> One small graph each for absolute value, radical, reciprocal, exponential, logarithmic, sine and cosine, with key points and asymptotes marked.',
          '<b>Practise transformations on points, not whole graphs.</b> Take three key points, apply the change, plot them. It is faster and catches order-of-operations errors.',
          '<b>Pair every exponential with a logarithm.</b> For each exponential equation solved, solve its logarithmic twin. The two units then reinforce each other.',
          '<b>Check every candidate root.</b> After any logarithm, radical or squaring step, substitute each answer into the original equation. Write the check down.',
          '<b>Build an identity list from memory weekly.</b> Pythagorean, quotient, reciprocal, double angle, sum and difference: write them out without notes, then use two in a fresh problem.',
          '<b>Solve trig equations twice.</b> Once on the interval asked, once over all real numbers, so the general solution is never a surprise.',
          '<b>Keep a mistakes page by unit.</b> Note whether each error was a slip or a misunderstanding; misunderstandings get re-taught first.',
          '<b>Do a mixed set every week from week three.</b> A final mixes units; practice should too, like our twelve questions above.',
          '<b>Seven days out, do one full paper against the clock.</b> After that, revise only from the mistakes page; no new topics.'
        ] },
        { kind: 'table', mt: true, caption: 'A five-week run-up to a Pre-calculus 12 final (ours)', head: ['Weeks to go', 'Focus', 'Ready when'], numCols: [0], rows: [
          ['5', 'Assessment plan; parent-function sheet; transformations and inverses', 'Any key point moved correctly under four combined changes'],
          ['4', 'Exponentials, logarithms, sequences and series', 'Same-base and different-base equations solved and checked'],
          ['3', 'Polynomials and rational functions', 'Holes and asymptotes told apart on three new functions'],
          ['2', 'Trigonometry: radians, unit circle, graphs, equations', 'Interval and general solutions for three equations'],
          ['1', 'Identities and one paper against the clock', 'Every error from that paper copied to the mistakes page']
        ] }
      ]
    },
    {
      id: 'after', tint: 'deep', eyebrow: 'After Grade 12',
      h2: 'Where Pre-calculus 12 shows up in university requirements',
      lede: 'For BC students, Pre-calculus 12 is the math course UBC names most often. The table quotes UBC&rsquo;s requirements tool for British Columbia applicants, program by program.',
      body: [
        { kind: 'table', caption: 'What UBC says about Pre-calculus 12, program by program, for applicants from BC (UBC requirements tool output saved 22 October 2026)', head: ['Program', 'What UBC lists about Pre-calculus 12'], rows: [
          ['Science', '&ldquo;Pre-Calculus 12&rdquo; among the Grade 12 requirements'],
          ['Applied Science (Engineering)', '&ldquo;Pre-Calculus 12&rdquo; among the Grade 12 requirements'],
          ['Commerce (UBC Sauder School of Business)', '&ldquo;Pre-Calculus 12&rdquo; among the Grade 12 requirements'],
          ['Food and Resource Economics', '&ldquo;Pre-Calculus 12 (minimum 67%)&rdquo;'],
          ['Arts', '&ldquo;If you intend to major in Economics, you must complete Pre-Calculus 12&rdquo;'],
          ['Media Studies', '&ldquo;Pre-Calculus 12 is strongly recommended&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table',
          left: [
            'For several of the programs above, Pre-calculus 12 is a requirement, not an extra. A student who drops it in Grade 12 closes those doors at UBC unless they make the course up later. That is a planning fact worth knowing in Grade 11, when students choose between Pre-calculus 11 and Foundations of Mathematics 11.',
            'UBC revises these lists, and other universities write their own, so recheck every program in your teen&rsquo;s application year. Applying outside BC? Our <a class="ag-inline-link" href="/canada-high-school-math-courses-compared">Grade 12 math comparison</a> lines Pre-calculus 12 up with Ontario, Alberta and prairie courses.'
          ],
          rightH3: 'Math and code together',
          right: [
            'Students aiming at computer science often take Pre-calculus 12 alongside a programming course. Function thinking and programming support each other: a function in Python is a rule from input to output, exactly as in math. Our <a class="ag-inline-link" href="/computer-programming-11-and-12-bc">BC Computer Programming 11 and 12 page</a> covers that side.',
            'Families who home-educate in BC can find how a Pre-calculus 12 plan fits a home-education year on our <a class="ag-inline-link" href="/homeschool-coding-and-math-bc">BC homeschool coding and math page</a>.'
          ] },
        { kind: 'source', html: 'Source: UBC&rsquo;s requirements tool, BC applicant program list, saved 22 October 2026, with the general rules on UBC&rsquo;s <a class="ag-inline-link" href="https://you.ubc.ca/applying-ubc/requirements/canadian-high-schools/" rel="noopener" target="_blank">requirements for Canadian high schools</a>. UBC has no part in our classes.' }
      ]
    },
    {
      id: 'credit', tint: '', eyebrow: 'Credit and class times',
      h2: 'Pre-calculus 12 help beside the school course',
      lede: 'A family searching for Pre-calculus 12 online may want the credit itself. That comes only from a school, so we say it first.',
      body: [
        { kind: 'two',
          leftH3: 'The school awards the credit',
          left: [
            'Pre-calculus 12 credit is awarded by a school that delivers and evaluates the course, whether that is your teen&rsquo;s own secondary, a summer program run by the district, or an online school. We tutor; we do not grant high school credits or issue marks for a transcript.',
            'Diploma rules, including how many Grade 12 courses a student needs, are provincial and best confirmed with a school counsellor. The provincial graduation page would not load during our research, so this page does not state them.'
          ],
          rightH3: 'What families use us for',
          right: [
            'Most students come mid-course: transformations went well, then logarithms did not, or trigonometry in radians arrived and the unit circle never quite settled. We start from the last test, find the first idea that slipped, and rebuild forward.',
            'A few book lessons over the July and August before Grade 12, so that logarithms and radians are familiar before they count. Students taking an online Pre-calculus 12 course for credit often add a weekly live hour for explanation and feedback.'
          ] },
        { kind: 'table', mt: true, caption: 'Lesson clock for BC families, 2026 to 2027 (from the province&rsquo;s time announcement and time zone data version 2026e; India keeps UTC+5:30)', head: ['Part of BC', 'Offset', 'Gap to India', 'Teacher&rsquo;s clock for a 5:00 pm BC lesson'], rows: [
          ['Most of BC, including the Lower Mainland, Vancouver Island and the Okanagan', 'UTC-7 all year', '12 h 30 min', '5:30 am the next day'],
          ['East Kootenay and Golden', 'UTC-6 all year', '11 h 30 min', '4:30 am the next day']
        ] },
        { kind: 'p', mt: true, html: 'BC stopped changing its clocks after 8 March 2026, when it moved to permanent UTC-7. A Pre-calculus 12 lesson set for a BC weekday afternoon therefore stays put in November. For every province&rsquo;s clock, see our <a class="ag-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'Four stages through Pre-calculus 12',
    lede: 'Stages we use when placing a Grade 12 student, from our own teaching.',
    table: { caption: 'From formula-user to function-reader (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Formula-user', 'Solves a familiar equation type, but stalls when it looks new'],
      ['2. Family-spotter', 'Names the parent function behind an equation and sketches it'],
      ['3. Transformer', 'Rewrites a function into a moved parent and reads its features off'],
      ['4. Checker', 'Predicts the answer, solves, then defends it, catching extraneous roots alone']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your teen which parent function is hiding in their latest homework question. A quick, confident answer is a good sign.',
      'Stage 1 students often have algebra gaps from Grade 10 or 11. Those close fastest when found early in the year.'
    ] },
    right: { h3: 'For students', ps: [
      'Before solving, sketch. Before submitting, substitute. Those two habits cover most lost marks.',
      'Keep your parent-function sheet in view while you study until you no longer need it.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for Grade 11 and 12 math in BC',
    lede: 'Live online, with a regular teacher, as a group class or one to one.',
    bands: [
      { num: 'I', h3: 'Shore up the base', sub: 'Grades 9 to 11', courses: [
        { code: 'PRC / BAS / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Factoring and exponents, rebuilt properly.' },
        { code: 'PRC / BAS / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Grade 9 to 12 math in one sequence.' },
        { code: 'PRC / BAS / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For students also taking Statistics 12.' }
      ] },
      { num: 'II', h3: 'Push further', sub: 'Grades 11 and 12', courses: [
        { code: 'PRC / EXT / 01', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'University-level math, started early.' },
        { code: 'PRC / EXT / 02', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Contest problems in the CEMC style.' },
        { code: 'PRC / EXT / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Proof and problem solving at depth.' }
      ] },
      { num: 'III', h3: 'Functions in code', sub: 'Teens', courses: [
        { code: 'PRC / COD / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Graph and test functions you define.' },
        { code: 'PRC / COD / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Fit exponential and log models to data.' },
        { code: 'PRC / COD / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Logarithms and exponentials at work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live Pre-calculus 12 lessons for BC students',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After the BC school day, at the batch time you pick.' },
      { time: 'Weekends', l: 'Mornings on the Pacific clock, evenings in India.' },
      { time: '1-on-1', l: 'Timed around unit tests and the final.' }
    ],
    cells: [
      { h3: 'One regular teacher', p: 'Who remembers last unit&rsquo;s gaps.' },
      { h3: 'Your outline&rsquo;s order', p: 'Units taught as the class meets them.' },
      { h3: 'Sketch before solve', p: 'A rough graph for every problem.' },
      { h3: 'Checked answers', p: 'Every root substituted back.' },
      { h3: 'Mistakes page', p: 'Kept by unit, reviewed weekly.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one student.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Some of our math students build software as well; a sample is below, with the rest on our <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from families and students, reproduced as posted.',

  fees: {
    h2: 'Fees',
    lede: 'Begin with a free class. Ongoing lessons are billed monthly for eight live classes, shown in the currency of your region; nothing ties you to a term, and you can end at the close of any month.',
    free: ['A free first class', 'Bring the latest test or quiz', 'No card needed to book'],
    group: ['Fifteen to twenty students', 'A regular teacher', 'Choose a batch time', 'Monthly billing'],
    one: ['One student, one teacher', 'Lessons fitted to test dates', 'Paced to the school outline']
  },

  faq: {
    eyebrow: 'Questions from BC families',
    h2: 'Pre-calculus 12: common questions',
    items: [
      { q: 'What is covered in Pre-calculus 12 in BC?', a: 'The BC curriculum lists transformations and inverses of functions, exponential functions and equations, geometric sequences and series with sigma notation, logarithms, polynomial and rational functions, and trigonometry in radians and degrees, including the unit circle, graphs, equations and identities.' },
      { q: 'Do you grant Pre-calculus 12 credit?', a: 'No. Pre-calculus 12 credit is awarded by the school that teaches and evaluates the course. We tutor alongside it and we do not grant provincial credits, so a family that needs the credit takes the course through a secondary school, a district summer session or an online learning school.' },
      { q: 'Is Pre-calculus 12 hard?', a: 'It is one of the heavier Grade 12 courses because it covers five areas and expects fluent algebra throughout. Most difficulty comes from gaps in factoring, exponent laws or trigonometry from Grade 11. Those gaps can be closed, though nobody can honestly promise a mark in advance.' },
      { q: 'Do I need Pre-calculus 12 for UBC?', a: 'For many programs, yes. When we read UBC\'s tool for BC applicants on 22 October 2026, Science, Engineering and Commerce each named Pre-Calculus 12 as a requirement, and Arts required it of students planning an Economics major. Recheck in your application year.' },
      { q: 'What comes after Pre-calculus 12?', a: 'Calculus 12 is the BC course that builds directly on it, starting from the same parent functions. Some students take Statistics 12 or Foundations of Mathematics 12 as well, depending on their plans.' },
      { q: 'Should I take Pre-calculus 12 and Calculus 12 at the same time?', a: 'That depends on your school\'s timetable and prerequisites, which each school sets. If the two do overlap, plan for Pre-calculus topics such as logarithms and trigonometry to be needed in Calculus 12 early, and keep both teachers\' outlines side by side.' },
      { q: 'What is the hardest unit in Pre-calculus 12?', a: 'In our experience it is usually trigonometry: radians, the unit circle, general solutions and identities arrive together. Logarithms come a close second, mostly because of extraneous roots. Both improve quickly with regular mixed practice and a habit of checking every answer.' },
      { q: 'How should my teen study for the Pre-calculus 12 final?', a: 'Find out the format, build a parent-function sheet, practise transformations on key points, pair exponential and logarithmic equations, check every root, write the identities from memory each week, do a mixed set weekly and sit one timed practice before the final.' },
      { q: 'What times are classes for BC families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. BC has kept UTC-7 year-round since March 2026, so a lesson time agreed on the Pacific clock is the same in winter and summer.' },
      { q: 'How much does Pre-calculus 12 tutoring cost?', a: 'The first class is free. Ongoing lessons are paid monthly for eight live classes, with no term commitment, and you can finish at the end of any month. The current group and one-to-one amounts are in the fees section of this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for BC math and coding students.',
    items: [
      { href: '/calculus-12-tutor-bc', label: 'Calculus 12 tutor, BC', p: 'The course Pre-calculus 12 leads into.' },
      { href: '/computer-programming-11-and-12-bc', label: 'Computer Programming 11 and 12', p: 'BC&rsquo;s senior coding courses, read from the curriculum.' },
      { href: '/homeschool-coding-and-math-bc', label: 'Homeschool coding and math in BC', p: 'Math and code for home-educated BC teens.' },
      { href: '/coding-classes-in-british-columbia', label: 'Classes in British Columbia', p: 'Every subject we teach for BC families.' },
      { href: '/canada-high-school-math-courses-compared', label: 'Grade 12 math by province', p: 'Pre-calculus 12 next to MHF4U and Math 30-1.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'Function families for any curriculum.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Math help across provinces and grades.' },
      { href: '/coding-classes-in-canada', label: 'Canada', p: 'The full list of our Canada guides.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live lesson.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us which unit the class is on and when the next test falls. The first lesson starts from your teen&rsquo;s own recent work.',
    readFirst: 'Prefer to read more first? The <a class="ag-inline-link" href="/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course">Western Canada Grade 12 Math syllabus</a> lists the course week by week, and <a class="ag-inline-link" href="/how-we-teach">our teaching method</a> explains a lesson.',
    note: 'Our teachers are in India and every lesson is live on video, so there is no BC office and no travel. WhatsApp reaches us fastest.',
    formNote: 'Booking the free class takes no card details.'
  },

  footer: {
    cols: [
      { h4: 'Grade 12 math in BC', links: [
        { href: '/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course', label: 'Western Canada Grade 12 Math' },
        { href: '/calculus-12-tutor-bc', label: 'Calculus 12 tutor' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring' },
        { href: '/courses/ap-precalculus-exam-prep-course', label: 'AP Precalculus' }
      ] },
      { h4: 'British Columbia', links: [
        { href: '/coding-classes-in-british-columbia', label: 'Classes in BC' },
        { href: '/computer-programming-11-and-12-bc', label: 'Computer Programming 11 and 12' },
        { href: '/homeschool-coding-and-math-bc', label: 'Homeschool in BC' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Canada class times' }
      ] }
    ],
    bottomRight: 'Name the parent, then move it'
  },

  personalityCss: `
.ag-root.ag-prc .ag-hero h1 { letter-spacing: -0.012em; max-width: 22ch; }
.ag-root.ag-prc .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-prc .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-prc .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-prc .ag-steps li { margin-bottom: 0.55rem; line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'curriculum.gov.bc.ca Pre-calculus 12 fetched raw 23 October 2026 (coordinator copy in src-pilots/bc-math-shared-mt): three big ideas and their sample inquiry questions; the content areas (transformations and inverses, exponential functions, sequences and series, logarithms, polynomial and rational functions, trigonometry with identities); curricular competency elaborations. Calculus 12 page (22 October 2026) for the parent-functions link. you.ubc.ca requirements tool, programs for BC applicants. BC permanent UTC-7 (facts-geo.md and the BC release).',
    localProject: 'Our rational-function problem: f(x) = (2x + 7)/(x + 3) rewritten as 2 + 1/(x + 3), asymptotes x = -3 and y = 2, intercepts 7/3 and -3.5, inverse 1/(x - 2) - 3 with swapped asymptotes, and a Python round-trip table returning -5, -2, 1, 1.5 and 10 unchanged; our trig problem sin 2x = sin x on [0, 2pi) solved by factoring (0, pi/3, pi, 5pi/3) against the divide-by-sin-x error, with the general solution; twelve original practice questions with checked answers (one solver under-report caught by substitution); a ten-step plan and five-week run-up. Lesson family: read the function family first.',
    requiredMentions: ['is the foundation of solving equations and can be extended to relationships between functions.', 'How can a rational function of the form y = (ax+b) / (cx+d) be considered as a transformation of the reciprocal function y = 1/x ?', 'solving equations with same base and with different bases, including base e', 'Why do some equations have extraneous roots and other equations do not?', 'polynomial factoring, including the factor theorem and the remainder theorem', 'using identities to reduce complexity in expressions and solve equations', 'Pre-Calculus 12 is strongly recommended', 'f_inv(f(x))', 'sin x (2 cos x &minus; 1) = 0', 'Name the parent, then move it', 'parent-function sheet'],
    sources: [
      { claim: 'Pre-calculus 12 big ideas, inquiry questions, content and curricular competencies.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/12/pre-calculus' },
      { claim: 'Calculus 12 content lists parent functions from Pre-Calculus 12.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/12/calculus' },
      { claim: 'UBC program requirements naming Pre-Calculus 12 for British Columbia applicants.', url: 'https://you.ubc.ca/applying-ubc/requirements/canadian-high-schools/' },
      { claim: 'BC permanent UTC-7 from 8 March 2026.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' }
    ],
    rejectedClaims: [
      'That Pre-calculus 12 has a provincial exam: not verified; families are told to ask the school for the format.',
      'Credit value and graduation rules: the provincial graduation page was not reachable for the research; none printed.',
      'Health-program requirements in the UBC list (for example Dental Hygiene, Pharmaceutical Sciences): left out under the content rules.',
      'A count of how many UBC programs require Pre-calculus 12: not printed; programs are quoted individually.',
      'Any mark, grade or admission outcome from our classes: none promised.',
      'Named BC schools, districts or online learning schools: none named.',
      'Any affiliation with the BC ministry, UBC or CEMC: none, and the page says so.'
    ]
  }
};
