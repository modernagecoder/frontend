'use strict';
// Calculus 12 tutor, British Columbia (ag- school course door; Canada cluster Plan 2, row 25).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources. The BC Calculus 12 page is the research copy fetched raw with curl on 22 October 2026 (manifest
// ca/src/MANIFEST-schools-contests.tsv, HTTP 200), copied into keyword-research-2026-09/ca/src/calculus-12-tutor-bc/. A re-fetch by
// this writer the same day could not connect to curriculum.gov.bc.ca (curl exit 7), so the Pre-calculus 12 page was never read and
// nothing about its content is printed here.
//  - curriculum.gov.bc.ca/curriculum/mathematics/12/calculus (math-calculus-12.txt). Big ideas (fragments around glossary links):
//    the concept of a limit "is foundational to calculus."; "Differential calculus develops the concept of"; "Integral calculus
//    develops the concept of determining a product involving a"; elaboration "area (height x width) under a curve where the height of
//    the region is changing; volume of a solid (area x length) where cross-sectional area is changing; work (force x distance) where
//    force is changing"; "Finding these products requires finding an infinite sum."; "Derivatives and integrals are"; inquiry
//    questions "How can we use historical examples (e.g., Achilles and the tortoise) to describe a limit?", "How can a rate of change
//    be instantaneous?", "What is the value of using rectangles to approximate the area under a curve?", "Why is the fundamental
//    theorem of calculus so fundamental?", "What is the difference between an antiderivative and an integral?". Content: "piecewise
//    functions"; "inverse trigonometric functions"; limits "from table of values, graphically, and algebraically"; "one-sided versus
//    two-sided"; "end behaviour"; "intermediate value theorem"; "limits to infinity"; "continuity"; "definition of derivative";
//    "average versus instantaneous"; "slope of secant and tangent lines"; "power, product; quotient and chain"; "transcendental
//    functions: logarithmic, exponential, trigonometric"; "higher order, implicit"; "increasing/decreasing, concavity";
//    "differentiability, mean value theorem"; "Newton's method" (curly apostrophe in source); "problems in contextual situations,
//    including related rates and optimization problems"; "definite and indefinite"; "Riemann sum, rectangle approximation method,
//    trapezoidal method"; "antiderivatives of functions"; "substitution"; "by parts"; "area under a curve, volume of solids, average
//    value of functions"; "initial value problems"; "slope fields". Competencies: "applying number strategies to approximate limits,
//    derivatives, and integrals"; "examine the structure of and connections between mathematical ideas (e.g., limits, derivatives,
//    integrals)"; "graphing technology, dynamic geometry, calculators, virtual manipulatives, concept-based apps"; mistakes "range
//    from calculation errors to misconceptions"; "Have students explore which of two scenarios they would choose and then defend their
//    choice."
//  - curriculum.gov.bc.ca/curriculum/mathematics (math-home.txt; facts-schools-contests.md row 72): the list includes Pre-calculus 11,
//    Pre-calculus 12, Calculus 12, Foundations of Mathematics 11 and 12, Statistics 12.
//  - you.ubc.ca requirements tool, programs for British Columbia applicants (ubc-ajax-programs-686.json, saved raw on 22 October 2026
//    by the UBC writer from the site's public admin-ajax endpoint; copy in this row's folder): Food and Resource Economics "Pre-Calculus
//    12 (minimum 67%)" and "Calculus 12 (recommended)"; Science and Applied Science (Engineering) list "Pre-Calculus 12" and no
//    Calculus 12; general "Minimum of 70% in Grade 11 or Grade 12 English (or their equivalents)" not used.
//  - Time: facts-geo.md section 3 and gov_2026AG0013-000209: "Pacific time will be set seven hours behind co-ordinated universal
//    time (UTC-7)"; permanent after 8 March 2026; East Kootenay and Golden UTC-6; India UTC+5:30.
// Our own material, labelled on the page: the Newton's method problem x^3 + 2x - 7 = 0 (IVT bracket f(1) = -4, f(2) = 5,
// f(1.5) = -0.625, f(1.6) = 0.296; Python 3.13 iterates 1.5714285714, 1.5689494887, 1.5689464031; SymPy nsolve 1.56894640305),
// the area problem for 4x - x^2 on [0, 3] (exact 9; n = 6 left 8.1250, right 9.6250, midpoint 9.0625, trapezoid 8.8750; average
// value 3 at x = 1), twelve practice questions with SymPy 1.14 checked answers, the stuck-points table, the study plan and
// countdown, the ladder. Lesson family: approximate, then prove.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const NEWTON_PY = `# Newton's method for x^3 + 2x - 7 = 0 (ours)
def f(x):
    return x**3 + 2*x - 7

def df(x):
    return 3*x**2 + 2

x = 1.5                      # start inside [1.5, 1.6], where f changes sign
for step in range(1, 5):
    x = x - f(x) / df(x)
    print(step, f"{x:.10f}", f"f(x) = {f(x):.2e}")`;

const NEWTON_OUT = `1 1.5714285714 f(x) = 2.33e-02
2 1.5689494887 f(x) = 2.90e-05
3 1.5689464031 f(x) = 4.48e-11
4 1.5689464031 f(x) = 0.00e+00`;

const RIEMANN_PY = `# Area under f(x) = 4x - x^2 from 0 to 3: four approximations against the exact 9 (ours)
def f(x):
    return 4*x - x**2

a, b, n = 0, 3, 6
w = (b - a) / n                                   # width 0.5
xs = [a + i*w for i in range(n + 1)]              # 0, 0.5, ..., 3
left = sum(f(xs[i]) for i in range(n)) * w
right = sum(f(xs[i]) for i in range(1, n + 1)) * w
mid = sum(f((xs[i] + xs[i+1]) / 2) for i in range(n)) * w
trap = (left + right) / 2
for name, val in [("left", left), ("right", right), ("midpoint", mid), ("trapezoid", trap)]:
    print(f"{name:>9}: {val:.4f}   error {val - 9:+.4f}")`;

const RIEMANN_OUT = `     left: 8.1250   error -0.8750
    right: 9.6250   error +0.6250
 midpoint: 9.0625   error +0.0625
trapezoid: 8.8750   error -0.1250`;

const SRC_CALC = '<a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/mathematics/12/calculus" rel="noopener" target="_blank">BC Calculus 12 curriculum</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CALCULUS 12 BC', blurb: 'BC Calculus 12 read from the provincial curriculum: limits, derivatives, integrals and differential equations, with Newton\'s method, a Riemann sum study and twelve practice questions.' },
  slug: 'calculus-12-tutor-bc',
  code: 'calc',
  accent: '#523F2A',
  accentRationale: 'Calculus 12, British Columbia: a muted walnut brown, #523F2A, allocated to this row in the Plan 2 group list (at least 6 RGB units from every site accent and 14 from other Canada accents), contrast 9.42 on the paper #FBF8F2, 8.86 on #F5F1E8 and 8.10 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Calculus 12 tutor, BC',
  title: 'Calculus 12 BC Tutor Online: Limits, Derivatives, Integrals',
  description: 'Calculus 12 in British Columbia, read from the BC curriculum: every topic, Newton\'s method and a Riemann sum worked in full, twelve practice questions and a plan.',
  ogDescription: 'What BC Calculus 12 covers, quoted from curriculum.gov.bc.ca, from limits and the intermediate value theorem to slope fields. Two worked problems, twelve original questions with answers, a study plan.',
  twitterDescription: 'BC Calculus 12 from the curriculum, with two worked problems and twelve practice questions.',
  pageName: 'Calculus 12 Tutor for BC Students',
  webPageDescription: 'A guide for British Columbia students and parents to Calculus 12, built from the provincial curriculum page, with two worked problems, twelve practice questions with answers and a study plan.',
  courseDescription: 'Live online Calculus 12 help for British Columbia students, taught alongside the school course in a batch or one to one, after Pre-calculus 12. No provincial credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'British Columbia', href: '/coding-classes-in-british-columbia' }],
  crumbLabel: 'Calculus 12 tutor',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#content', label: 'Course content' },
    { href: '#stuck', label: 'Sticking points' },
    { href: '#newton', label: 'Worked problems' },
    { href: '#practice', label: 'Practice' },
    { href: '#plan', label: 'Study plan' }
  ],
  eyebrow: 'British Columbia &middot; Grade 12 &middot; Calculus 12',
  h1: 'Calculus 12 tutor for BC students, live online',
  lede: 'Calculus 12 is the course where the functions a BC student spent two years graphing start to move. A slope becomes a rate, an area becomes a sum of infinitely many thin pieces, and a single theorem ties the two together. This page sets out the course from the BC curriculum itself, works two problems of our own in full, gives twelve practice questions with answers, and lays out a study plan. The credit itself belongs to the school that runs the course; our role is tutoring next to it, and we do not grant provincial credits.',
  secondaryCta: { href: '#practice', label: 'Try the twelve questions' },
  wa: 'Hello Modern Age Coders, my teen in BC is taking Calculus 12 and would like help alongside the school course. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; math taught for understanding, not shortcuts',
  spec: [
    ['For', 'Grade 12 students in BC'],
    ['After', 'Pre-calculus 12, or alongside it'],
    ['Covers', 'Limits, derivatives, integrals, differential equations'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Clock', 'Pacific time, UTC-7 all year'],
    ['Credit', 'None granted: we teach alongside school'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Calculus 12 is British Columbia&rsquo;s Grade 12 calculus course. Its curriculum covers limits and continuity, derivatives and their rules, related rates, optimization and Newton&rsquo;s method, integrals by Riemann sums, substitution and by parts, and slope fields. Modern Age Coders tutors Calculus 12 live online, in a batch or one to one, through our AP Calculus AB and BC course, with Western Canada Grade 12 Math for the Pre-calculus 12 groundwork.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for a Calculus 12 student',
    lede: 'The first course covers Pre-calculus 12, the groundwork Calculus 12 is built on. The second is where we teach the calculus itself; the third goes on to university math.',
    items: [
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', code: 'CALC / 01', title: 'Western Canada Grade 12 Math', note: 'Ages 16 to 18. Pre-calculus 12 alongside school, with the functions, logarithms and trigonometry that Calculus 12 leans on.' },
      { course: 'ap-calculus-exam-prep', code: 'CALC / 02', title: 'AP Calculus AB and BC', note: 'Limits, derivatives and integrals taught to an exam standard: the course we pace to a BC Calculus 12 outline, and to AP if the school offers it.' },
      { course: 'college-mathematics-complete-masterclass', code: 'CALC / 03', title: 'College mathematics', note: 'First-year calculus and linear algebra, for students who finish Calculus 12 and want a head start.' }
    ]
  },

  sections: [
    {
      id: 'content', tint: 'tint', eyebrow: 'The BC curriculum',
      h2: 'What Calculus 12 covers, in the curriculum&rsquo;s words',
      lede: 'The BC curriculum page for Calculus 12 lists its content in seven groups. Read top to bottom, it is a complete first course in single-variable calculus: functions, limits, derivatives, their uses, integrals, their uses, and a first look at differential equations.',
      body: [
        { kind: 'table', caption: 'Calculus 12 content in seven groups, as printed on the BC curriculum page (copy saved 22 October 2026)', head: ['Group', 'Content items as the curriculum lists them', 'What a student does with them (our reading)'], rows: [
          ['Functions', 'Parent functions carried over from Grade 12 pre-calculus; &ldquo;piecewise functions&rdquo;; &ldquo;inverse trigonometric functions&rdquo; and their graphs', 'Rebuild fluency with the functions calculus will act on'],
          ['Limits', 'Limits &ldquo;from table of values, graphically, and algebraically&rdquo;; &ldquo;one-sided versus two-sided&rdquo;; &ldquo;end behaviour&rdquo;; &ldquo;intermediate value theorem&rdquo;; &ldquo;limits to infinity&rdquo;; &ldquo;continuity&rdquo;', 'Say what a function approaches, three ways, and when it is continuous'],
          ['Differentiation', 'History; &ldquo;definition of derivative&rdquo;; notation; rate of change, &ldquo;average versus instantaneous&rdquo;; &ldquo;slope of secant and tangent lines&rdquo;; rules: &ldquo;power, product; quotient and chain&rdquo;; &ldquo;transcendental functions: logarithmic, exponential, trigonometric&rdquo;; &ldquo;higher order, implicit&rdquo;', 'Find derivatives from the limit definition, then by rule, for every function type'],
          ['Applications of differentiation', 'Relating a graph of f(x) to f&prime;(x) and f&Prime;(x): &ldquo;increasing/decreasing, concavity&rdquo;; &ldquo;differentiability, mean value theorem&rdquo;; &ldquo;Newton&rsquo;s method&rdquo;; &ldquo;problems in contextual situations, including related rates and optimization problems&rdquo;', 'Read graphs through their derivatives, solve equations numerically, model change'],
          ['Integration', '&ldquo;definition of an integral&rdquo;; notation, &ldquo;definite and indefinite&rdquo;; approximations: &ldquo;Riemann sum, rectangle approximation method, trapezoidal method&rdquo;; the fundamental theorem; methods: &ldquo;antiderivatives of functions&rdquo;, &ldquo;substitution&rdquo;, &ldquo;by parts&rdquo;', 'Approximate an area with thin strips, then compute it exactly'],
          ['Applications of integration', '&ldquo;area under a curve, volume of solids, average value of functions&rdquo;', 'Turn a geometric or physical question into an integral'],
          ['Differential equations', '&ldquo;initial value problems&rdquo;; &ldquo;slope fields&rdquo;', 'Find a function from its rate of change and one known point']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The four big ideas, in one paragraph each',
          left: [
            'The first big idea says the concept of a limit &ldquo;is foundational to calculus.&rdquo; Everything else in the course is defined through it. The second says &ldquo;Differential calculus develops the concept of&rdquo; instantaneous rate of change, built up from average rate of change. The third says &ldquo;Integral calculus develops the concept of determining a product involving a&rdquo; continuously changing quantity over an interval.',
            'That third idea has a lovely elaboration: area as &ldquo;height x width&rdquo; when the height keeps changing, volume as &ldquo;area x length&rdquo; when the cross-section keeps changing, and work as &ldquo;force x distance&rdquo; when the force keeps changing. Then: &ldquo;Finding these products requires finding an infinite sum.&rdquo; The fourth idea says &ldquo;Derivatives and integrals are&rdquo; inversely related, which is the fundamental theorem.'
          ],
          rightH3: 'The inquiry questions are good revision questions',
          right: [
            'The page offers sample questions for teachers. Several make excellent oral revision for students: &ldquo;How can we use historical examples (e.g., Achilles and the tortoise) to describe a limit?&rdquo;, &ldquo;How can a rate of change be instantaneous?&rdquo; and &ldquo;What is the value of using rectangles to approximate the area under a curve?&rdquo;',
            'Two more go straight to the heart of the integration unit: &ldquo;Why is the fundamental theorem of calculus so fundamental?&rdquo; and &ldquo;What is the difference between an antiderivative and an integral?&rdquo; A student who can answer the last one aloud, in two sentences, understands the unit. We ask it in nearly every integration lesson.'
          ] },
        { kind: 'source', html: 'Source: ' + SRC_CALC + ', big ideas, content and curricular competencies, from a copy saved with curl on 22 October 2026. When we went back that day for Pre-calculus 12, the server refused every connection, so its content is not described anywhere on this page. We have no link with the BC education ministry or with any district.' }
      ]
    },
    {
      id: 'competencies', tint: 'deep', eyebrow: 'How the course expects students to think',
      h2: 'The curricular competencies, and what they mean at a desk',
      lede: 'BC math courses pair their content with curricular competencies: the ways of working a student should show. The Calculus 12 elaborations name calculus directly in several of them, which makes them practical rather than decorative.',
      body: [
        { kind: 'table', caption: 'Where the Calculus 12 curricular competencies name calculus itself (BC curriculum page, copy saved 22 October 2026)', head: ['Competency', 'Elaboration, quoted', 'What we practise'], rows: [
          ['Explore and analyze', '&ldquo;examine the structure of and connections between mathematical ideas (e.g., limits, derivatives, integrals)&rdquo;', 'Explaining how a derivative and an integral are each built from a limit'],
          ['Estimate reasonably', '&ldquo;applying number strategies to approximate limits, derivatives, and integrals&rdquo;', 'Predicting a limit from a table, or an area from a sketch, before computing it'],
          ['Use technology', '&ldquo;graphing technology, dynamic geometry, calculators, virtual manipulatives, concept-based apps&rdquo;', 'Graphing a function and its derivative together to check a sign chart'],
          ['Explain and justify', '&ldquo;Have students explore which of two scenarios they would choose and then defend their choice.&rdquo;', 'Choosing between two approximation methods and defending the choice with numbers'],
          ['Use mistakes', 'Mistakes &ldquo;range from calculation errors to misconceptions&rdquo;', 'Sorting each error into slip or misunderstanding, because they need different fixes']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Estimate before you calculate',
          left: [
            'The estimation competency is the one most students skip and most teachers reward. Before finding the area under a curve, sketch it and guess. Before computing a limit, try x values close to the target in a table. A guess that is far from the computed answer is the earliest warning that something went wrong.',
            'Both worked problems below begin with an estimate. In the first, a sign change tells us where the root must be before any calculus happens. In the second, rectangles give an approximate area that the exact answer then confirms.'
          ],
          rightH3: 'Slips and misunderstandings are different problems',
          right: [
            'The curriculum&rsquo;s note that mistakes range from calculation errors to misconceptions is practical advice. A dropped negative sign in the chain rule is a slip: the student knows the rule and needs a checking habit. Writing the derivative of sin(3x) as cos(3x) is a misconception: the student does not yet see the inner function and needs the idea rebuilt.',
            'We keep a two-column error log with each student: slips on one side, misunderstandings on the other. Slips shrink with routine. Misunderstandings need a lesson, and the log shows exactly which lesson.'
          ] }
      ]
    },
    {
      id: 'stuck', tint: 'tint', eyebrow: 'Where students struggle',
      h2: 'Where Calculus 12 students usually get stuck',
      lede: 'From our teaching, the same handful of places trip up most students, and very few of them are about calculus itself. Most are algebra and function skills from earlier grades showing their gaps under pressure. This table is ours.',
      body: [
        { kind: 'table', caption: 'Common sticking points in Calculus 12, and the fix we use (ours)', head: ['Topic', 'What goes wrong', 'The fix'], rows: [
          ['Limits algebraically', 'Substituting, getting 0 over 0, and stopping', 'Treat 0 over 0 as a signal to factor, rationalize or simplify, then substitute again'],
          ['One-sided limits', 'Assuming the left and right limits agree', 'Test both sides with a small table before claiming a two-sided limit'],
          ['The chain rule', 'Differentiating the outside and forgetting the inside', 'Name the inner function in writing before differentiating anything'],
          ['Implicit differentiation', 'Forgetting that y is a function of x, so its derivative carries dy/dx', 'Circle every y term and attach dy/dx as you differentiate it'],
          ['Related rates', 'Substituting the given values before differentiating', 'Differentiate the general relationship first; substitute the moment last'],
          ['The mean value theorem', 'Using it without checking continuity and differentiability', 'Write the two conditions down every time, then compute'],
          ['Substitution in integrals', 'Changing the variable but keeping the old limits', 'Change the limits with the variable, or switch back before evaluating'],
          ['Integration by parts', 'Choosing the part to differentiate badly and going in circles', 'Pick the factor that gets simpler when differentiated, usually a polynomial']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The algebra underneath',
          left: [
            'A Calculus 12 student who struggles is rarely struggling with the idea of a derivative. They are struggling to factor a cubic, rewrite a root as a power, or simplify a fraction with fractions inside it, all while also learning something new. The calculus is the visible part; the algebra is the weight underneath.',
            'So our first class with a new student includes ten minutes of pre-calculus checks: exponent laws, factoring, logarithms, the unit circle. Whatever breaks becomes the first thing we fix, because it will otherwise break again in every unit.'
          ],
          rightH3: 'Taking it alongside Pre-calculus 12',
          right: [
            'If your teen&rsquo;s timetable places Calculus 12 in the same year as Pre-calculus 12, a decision each school makes for itself, expect the two to meet early. The curriculum lists Pre-calculus 12 parent functions in its content, so the two courses overlap in their opening weeks.',
            'If your teen is doing both at once, the order of units matters. We look at both teachers&rsquo; outlines together and teach the function topic one week before the calculus topic that needs it, whenever the timetable allows.'
          ] }
      ]
    },
    {
      id: 'newton', tint: 'deep', eyebrow: 'Worked problem 1, ours',
      h2: 'A root found twice: the intermediate value theorem, then Newton&rsquo;s method',
      lede: 'The curriculum lists both the intermediate value theorem and Newton&rsquo;s method. This problem, ours, uses them as a pair: the first proves a root exists and traps it, the second finds it to ten decimal places in three steps.',
      body: [
        { kind: 'p', html: '<b>The problem.</b> Show that the equation x<sup>3</sup> + 2x &minus; 7 = 0 has a solution between 1 and 2. Narrow it to an interval of width 0.1, then use Newton&rsquo;s method from x<sub>0</sub> = 1.5 to find it to ten decimal places.' },
        { kind: 'ol', items: [
          '<b>Check the theorem&rsquo;s condition.</b> f(x) = x<sup>3</sup> + 2x &minus; 7 is a polynomial, so it is continuous everywhere. The intermediate value theorem needs exactly that: a continuous function on a closed interval.',
          '<b>Find a sign change.</b> f(1) = 1 + 2 &minus; 7 = &minus;4 and f(2) = 8 + 4 &minus; 7 = 5. One is negative and one is positive, so by the theorem f takes the value 0 somewhere between 1 and 2.',
          '<b>Narrow it.</b> f(1.5) = 3.375 + 3 &minus; 7 = &minus;0.625 and f(1.6) = 4.096 + 3.2 &minus; 7 = 0.296. The sign changes again, so the root lies between 1.5 and 1.6. That is our estimate, before any derivative.',
          '<b>Set up Newton&rsquo;s method.</b> f&prime;(x) = 3x<sup>2</sup> + 2. Each step follows the tangent line down to the x-axis: x<sub>new</sub> = x &minus; f(x) / f&prime;(x).',
          '<b>Do the first step by hand.</b> At x = 1.5, f = &minus;0.625 and f&prime; = 3(2.25) + 2 = 8.75. So x<sub>1</sub> = 1.5 + 0.625 / 8.75 = 1.5 + 0.0714... = 1.5714..., which is 11/7, inside the interval as expected.',
          '<b>Let the program do the rest, and check it.</b> Each step roughly doubles the number of correct digits. The code below prints four steps.'
        ] },
        { kind: 'code', label: 'Python &middot; Newton&rsquo;s method (ours)', lang: 'python', code: NEWTON_PY },
        { kind: 'code', label: 'Output, Python 3.13', lang: 'text', code: NEWTON_OUT, note: 'The root is x &asymp; 1.5689464031. A computer algebra check (SymPy nsolve) agrees to every digit shown.' },
        { kind: 'two', mt: true,
          leftH3: 'What the steps show',
          left: [
            'Look at f(x) in the output: about 0.02, then 0.00003, then 0.00000000004. The error does not just shrink, it collapses, because near a simple root each tangent line is an almost perfect copy of the curve. Students who watch this happen once remember why the method is worth learning.',
            'Steps 3 and 4 print the same ten digits. The method has converged as far as those ten places can show, and the last f(x) of zero is the computer reaching the limit of its own precision.'
          ],
          rightH3: 'When Newton&rsquo;s method goes wrong',
          right: [
            'The formula divides by f&prime;(x). Start where the tangent is nearly flat and the next guess flies far away; start exactly where f&prime;(x) = 0 and the method cannot take a step at all. Here f&prime;(x) = 3x<sup>2</sup> + 2 is never smaller than 2, so this function is well behaved, which is why we chose it.',
            'This is why the intermediate value theorem comes first in a careful solution. A trapped root and a sensible starting value inside the trap make Newton&rsquo;s method reliable. Without them, a test question can send a student into a calculation that never settles.'
          ] }
      ]
    },
    {
      id: 'area', tint: 'tint', eyebrow: 'Worked problem 2, ours',
      h2: 'An area by rectangles, by trapezoids, and exactly',
      lede: 'The curriculum names the &ldquo;Riemann sum, rectangle approximation method, trapezoidal method&rdquo; and the fundamental theorem, and lists average value among the applications. This problem of ours uses all of them on one curve, so the approximations can be judged against the exact answer.',
      body: [
        { kind: 'p', html: '<b>The problem.</b> Let f(x) = 4x &minus; x<sup>2</sup> on the interval from 0 to 3. (a) Estimate the area under the curve with six strips of width 0.5, using left endpoints, right endpoints, midpoints and trapezoids. (b) Find the exact area. (c) Find the average value of f on the interval and the x value where f equals it.' },
        { kind: 'ol', items: [
          '<b>Sketch and guess.</b> The curve rises from 0 at x = 0 to a peak of 4 at x = 2, then falls to 3 at x = 3. A rectangle 3 wide and about 3 high suggests an area near 9.',
          '<b>Compute the four approximations.</b> With width 0.5 the strips start at 0, 0.5, 1, 1.5, 2 and 2.5. The program below adds the six heights for each method and multiplies by the width.',
          '<b>Find the exact area with the fundamental theorem.</b> An antiderivative of 4x &minus; x<sup>2</sup> is 2x<sup>2</sup> &minus; x<sup>3</sup>/3. Evaluate from 0 to 3: (18 &minus; 9) &minus; 0 = 9.',
          '<b>Find the average value.</b> Average value is the integral divided by the width: 9 / 3 = 3. Solve 4x &minus; x<sup>2</sup> = 3: x<sup>2</sup> &minus; 4x + 3 = 0, so (x &minus; 1)(x &minus; 3) = 0 and x = 1 or x = 3. Inside the interval, the function equals its average at x = 1, and again at the right endpoint.'
        ] },
        { kind: 'code', label: 'Python &middot; four approximations (ours)', lang: 'python', code: RIEMANN_PY },
        { kind: 'code', label: 'Output, Python 3.13', lang: 'text', code: RIEMANN_OUT },
        { kind: 'table', mt: true, caption: 'Six strips under 4x &minus; x&sup2; from 0 to 3, against the exact area of 9 (ours, from the run above)', head: ['Method', 'Estimate', 'Error', 'Why it errs that way'], numCols: [1, 2], rows: [
          ['Left rectangles', '8.1250', '&minus;0.8750', 'The curve mostly rises, so left heights are mostly too low'],
          ['Right rectangles', '9.6250', '+0.6250', 'Right heights are mostly too high while the curve rises'],
          ['Midpoint rectangles', '9.0625', '+0.0625', 'The curve bends down, so a midpoint height slightly overshoots'],
          ['Trapezoids', '8.8750', '&minus;0.1250', 'Straight tops cut under a curve that bends down']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The pattern worth noticing',
          left: [
            'The midpoint error is +0.0625 and the trapezoid error is &minus;0.1250: half the size and the opposite sign. That is not a coincidence for a curve like this one, which bends the same way everywhere. A student who spots it can defend choosing the midpoint method with evidence, which is exactly the explain-and-justify competency at work.',
            'The trapezoid estimate is also the average of the left and right estimates, (8.125 + 9.625) / 2. Seeing that in the numbers is a good way to remember why the trapezoidal method works.'
          ],
          rightH3: 'Why the exact answer still matters',
          right: [
            'Six strips got the midpoint method within 0.07, but only the fundamental theorem says the true value is exactly 9. That is the answer to the curriculum&rsquo;s question about why the theorem is so fundamental: it turns an infinite sum, which we can only approximate, into a subtraction of two antiderivative values.',
            'The average-value step is the third big idea in miniature. A rectangle of height 3 and width 3 has the same area as the curved region, and the curve reaches that height at x = 1.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice, ours',
      h2: 'Twelve Calculus 12 practice questions',
      lede: 'We wrote all twelve of these ourselves; none comes from a BC school, a district or an exam paper. They run through the content groups in order, limits first and differential equations last. Use paper and pencil before checking the answers further down.',
      body: [
        { kind: 'ol', items: [
          '<b>Limit algebraically.</b> Find the limit of (x<sup>2</sup> &minus; 9) / (x &minus; 3) as x approaches 3.',
          '<b>One-sided limits.</b> For f(x) = |x &minus; 2| / (x &minus; 2), find the left and right limits at x = 2. Does the two-sided limit exist?',
          '<b>End behaviour.</b> Find the limit of (3x<sup>2</sup> &minus; x) / (5x<sup>2</sup> + 4) as x grows without bound.',
          '<b>Definition of the derivative.</b> Use the limit definition to find the derivative of f(x) = x<sup>2</sup> + 3x.',
          '<b>Rules.</b> Differentiate (a) x<sup>2</sup> sin(3x) and (b) ln(x) / x.',
          '<b>Implicit differentiation.</b> For the curve x<sup>2</sup> + xy + y<sup>2</sup> = 7, find dy/dx at the point (1, 2).',
          '<b>Related rates.</b> A spherical snowball melts so that its volume decreases at 10 cm<sup>3</sup> per minute. How fast is its radius decreasing when the radius is 5 cm?',
          '<b>Mean value theorem.</b> For f(x) = x<sup>3</sup> &minus; 3x on the interval from 0 to 2, check the conditions and find every c that the theorem promises.',
          '<b>Substitution.</b> Evaluate the integral of 2x(x<sup>2</sup> + 1)<sup>4</sup> from x = 0 to x = 1.',
          '<b>By parts.</b> Find the integral of x e<sup>x</sup>, then evaluate it from 0 to 1.',
          '<b>Volume of a solid.</b> The region under y = &radic;x from x = 0 to x = 4 is rotated about the x-axis. Find the volume.',
          '<b>Initial value problem.</b> Solve dy/dx = 2y with y(0) = 3. Then describe the slope field: where are the slopes positive, negative and zero?'
        ] }
      ]
    },
    {
      id: 'answers', tint: 'tint', eyebrow: 'Answers, ours',
      h2: 'Answers, with the reasoning',
      lede: 'Every answer was checked with SymPy 1.14, a computer algebra system. The working is what earns marks, so each answer shows the step that matters.',
      body: [
        { kind: 'ol', items: [
          '<b>6.</b> Substituting gives 0 over 0, the signal to simplify. Factor: (x &minus; 3)(x + 3) / (x &minus; 3) = x + 3 for x &ne; 3, so the limit is 3 + 3 = 6.',
          '<b>Left limit &minus;1, right limit 1; no two-sided limit.</b> For x just below 2, the top is the positive version of a negative bottom, so the ratio is &minus;1. Just above 2 it is 1. The one-sided limits disagree.',
          '<b>3/5.</b> Divide top and bottom by x<sup>2</sup>: (3 &minus; 1/x) / (5 + 4/x<sup>2</sup>). As x grows, 1/x and 4/x<sup>2</sup> go to 0, leaving 3/5. The leading coefficients decide end behaviour when the degrees match.',
          '<b>2x + 3.</b> [(x + h)<sup>2</sup> + 3(x + h) &minus; x<sup>2</sup> &minus; 3x] / h = (2xh + h<sup>2</sup> + 3h) / h = 2x + h + 3, which approaches 2x + 3 as h approaches 0.',
          '<b>(a) 2x sin(3x) + 3x<sup>2</sup> cos(3x). (b) (1 &minus; ln x) / x<sup>2</sup>.</b> Part (a) is the product rule, with the chain rule giving the 3 inside the cosine term. Part (b) is the quotient rule: (x &middot; 1/x &minus; ln x &middot; 1) / x<sup>2</sup>.',
          '<b>&minus;4/5.</b> Differentiate every term: 2x + (y + x dy/dx) + 2y dy/dx = 0. Collect: dy/dx (x + 2y) = &minus;(2x + y), so dy/dx = &minus;(2x + y) / (x + 2y). At (1, 2): &minus;4/5. The xy term needs the product rule, the most common place to lose marks.',
          '<b>About 0.0318 cm per minute, exactly 1/(10&pi;).</b> V = (4/3)&pi;r<sup>3</sup>, so dV/dt = 4&pi;r<sup>2</sup> dr/dt. Only now substitute: &minus;10 = 4&pi;(25) dr/dt, so dr/dt = &minus;1/(10&pi;). The negative sign says the radius is shrinking.',
          '<b>c = 2/&radic;3, about 1.155.</b> A polynomial is continuous and differentiable everywhere, so the conditions hold. The average rate of change is (f(2) &minus; f(0)) / 2 = (2 &minus; 0) / 2 = 1. Solve 3c<sup>2</sup> &minus; 3 = 1: c<sup>2</sup> = 4/3. Only the positive root lies inside the interval.',
          '<b>31/5.</b> Let u = x<sup>2</sup> + 1, so du = 2x dx, and the limits change from 0 and 1 to 1 and 2. The integral of u<sup>4</sup> from 1 to 2 is (32 &minus; 1)/5 = 31/5.',
          '<b>(x &minus; 1)e<sup>x</sup> + C, and 1 from 0 to 1.</b> Take u = x (it gets simpler) and dv = e<sup>x</sup> dx. Then the integral is x e<sup>x</sup> &minus; &int; e<sup>x</sup> dx = (x &minus; 1)e<sup>x</sup> + C. From 0 to 1: 0 &minus; (&minus;1) = 1.',
          '<b>8&pi;.</b> Each disc has radius &radic;x, so area &pi;x. The volume is &pi; times the integral of x from 0 to 4, which is &pi; &middot; 16/2 = 8&pi;, about 25.1 cubic units.',
          '<b>y = 3e<sup>2x</sup>.</b> The rate is proportional to y, so the solution is exponential: y = Ce<sup>2x</sup>, and y(0) = 3 gives C = 3. In the slope field, slopes are positive above the x-axis, negative below it and zero along it, and they steepen the further a point is from the axis.'
        ] },
        { kind: 'p', mt: true, html: 'Question 12 is the kind a calculator cannot do for you: drawing a slope field by hand, row by row, is the fastest way to understand what a differential equation says. For more graph-reading practice before Grade 12, our <a class="ag-inline-link" href="/precalculus-tutoring-online">precalculus tutoring page</a> covers the functions that Calculus 12 builds on.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Study plan, ours',
      h2: 'A study plan for Calculus 12 tests and the final',
      lede: 'How Calculus 12 is assessed is set by the school and the teacher, so start by finding out. This plan is ours and assumes unit tests plus a final assessment; adjust it once you know the real format.',
      body: [
        { kind: 'ol', items: [
          '<b>Get the format in writing.</b> Ask how many unit tests there are, whether there is a final exam, whether calculators are allowed, and how much each piece counts.',
          '<b>Do the pre-calculus check first.</b> Exponent laws, factoring, logarithm rules, the unit circle and inverse trigonometric values. Ten minutes each, and fix whatever breaks before anything else.',
          '<b>Learn each rule with its reason.</b> For the product, quotient and chain rules, keep one example per rule that you can differentiate both ways (by rule and by expanding) to check.',
          '<b>Practise limits three ways.</b> For each limit, try a table of values, a graph and algebra. The curriculum lists all three, and a test may ask for any of them.',
          '<b>Write the conditions every time.</b> Before using the intermediate value theorem or the mean value theorem, write its conditions and check them. Teachers mark this.',
          '<b>For related rates and optimization, draw first.</b> Picture, variables with units, the relationship, differentiate, then substitute. In that order, every time.',
          '<b>Pair each integral with a sketch.</b> A sketch with a guessed area catches sign errors and wrong limits before they cost marks.',
          '<b>Keep the two-column error log.</b> Slips on one side, misunderstandings on the other. Review it before every test.',
          '<b>Do one mixed set each week.</b> Twelve questions from different units, like our set above, because a final mixes topics and a unit test does not.',
          '<b>Sit one timed practice under real conditions</b> a week before the final, then spend the last days on the error log, not on new material.'
        ] },
        { kind: 'table', mt: true, caption: 'A five-week run-up to a Calculus 12 final assessment (ours)', head: ['Weeks to go', 'Focus', 'Done when'], numCols: [0], rows: [
          ['5', 'Format confirmed; pre-calculus check; limits and continuity', 'Every pre-calculus gap listed and the first two fixed'],
          ['4', 'Derivative rules, implicit and higher order', 'Ten mixed derivatives correct without notes'],
          ['3', 'Applications: graphs, mean value theorem, Newton&rsquo;s method, related rates, optimization', 'Four contextual problems solved with diagrams'],
          ['2', 'Integration: approximations, the fundamental theorem, substitution, by parts, applications', 'Each method used on two fresh problems'],
          ['1', 'Differential equations, then a timed mixed practice', 'One full timed practice done and its errors logged']
        ] }
      ]
    },
    {
      id: 'after', tint: 'tint', eyebrow: 'After Grade 12',
      h2: 'Is Calculus 12 required for university?',
      lede: 'Families often ask whether Calculus 12 is needed for a science or engineering degree. UBC&rsquo;s own requirements tool gives a clear answer for British Columbia applicants, and it is not what many people expect.',
      body: [
        { kind: 'table', caption: 'Math courses UBC lists for British Columbia applicants in three programs (UBC requirements tool at you.ubc.ca, as returned on 22 October 2026)', head: ['Program', 'Grade 12 math UBC lists', 'Calculus 12'], rows: [
          ['Science', '&ldquo;Pre-Calculus 12&rdquo;', 'Not listed'],
          ['Applied Science (Engineering)', '&ldquo;Pre-Calculus 12&rdquo;', 'Not listed'],
          ['Food and Resource Economics', '&ldquo;Pre-Calculus 12 (minimum 67%)&rdquo;', '&ldquo;Calculus 12 (recommended)&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What that means',
          left: [
            'In the program list the tool returned for BC applicants, Pre-Calculus 12 is the math requirement for Science and for Engineering, and Calculus 12 appears only once, as recommended for Food and Resource Economics. So Calculus 12 is, on UBC&rsquo;s lists, preparation rather than a gate.',
            'Preparation still counts. First-year science and engineering students start university calculus in their first term, and those who have met limits, derivatives and integrals once already spend that term deepening ideas instead of meeting them. Requirements change between years and between universities, so check each program&rsquo;s own page in the year your teen applies.'
          ],
          rightH3: 'Calculus 12, AP Calculus and first-year math',
          right: [
            'If your teen&rsquo;s school also offers AP Calculus, that is a separate program with its own exam, not a BC provincial course; depending on the school, a student may take one, the other or both. Our <a class="ag-inline-link" href="/ap-calculus-tutoring-online">AP Calculus tutoring page</a> covers that route.',
            'Students moving between provinces often ask how Calculus 12 compares with Ontario&rsquo;s MCV4U or Alberta&rsquo;s courses. Our <a class="ag-inline-link" href="/canada-high-school-math-courses-compared">Grade 12 math comparison across Canada</a> sets them side by side, and the <a class="ag-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U page</a> goes deeper on Ontario&rsquo;s course.'
          ] },
        { kind: 'source', html: 'Source: the program list UBC&rsquo;s requirements tool returned for British Columbia applicants on 22 October 2026, kept as a raw file; see also UBC&rsquo;s <a class="ag-inline-link" href="https://you.ubc.ca/applying-ubc/requirements/canadian-high-schools/" rel="noopener" target="_blank">Canadian high school requirements</a> page. Modern Age Coders is not connected with UBC.' }
      ]
    },
    {
      id: 'credit', tint: '', eyebrow: 'The credit, and the clock',
      h2: 'Calculus 12 help alongside school, not a credit',
      lede: 'Some families search for Calculus 12 online because they need the credit. That comes from a school, and we say so plainly before anything else.',
      body: [
        { kind: 'two',
          leftH3: 'Who grants the credit',
          left: [
            'Only a school can award Calculus 12: the student&rsquo;s own secondary school, a district summer program or an online learning school that teaches the course and marks it. We do not grant high school credits. What we offer is the teaching around the course: explanation, practice and feedback, paced to the school&rsquo;s own outline.',
            'Which courses a diploma needs is a provincial rule, and a counsellor is the person who applies it to your teen. The government page that lists those rules would not load for our research, so this page says nothing about them.'
          ],
          rightH3: 'How families use us',
          right: [
            'Most students join when the course gets ahead of them: limits made sense, then the chain rule did not; related rates arrived and the diagrams stopped helping. We start from the latest test or assignment, find the first idea that broke, and rebuild from there.',
            'Others join in the summer before Grade 12 to meet limits and derivatives once without the pressure of marks. Students taking Calculus 12 and Pre-calculus 12 in the same year often find a weekly hour with one teacher who sees both outlines helps most.'
          ] },
        { kind: 'table', mt: true, caption: 'Calculus class times on the BC clock, 2026 to 2027 (provincial time release and tz database version 2026e; teachers on India time, UTC+5:30)', head: ['Where in BC', 'UTC offset', 'India time is ahead by', 'A 4:00 pm class in BC is, in India'], rows: [
          ['Most of BC, including Vancouver, Victoria, Kelowna and Prince George', 'UTC-7, all year', '12 hours 30 minutes', '4:30 am the next day'],
          ['East Kootenay and Golden', 'UTC-6, all year', '11 hours 30 minutes', '3:30 am the next day']
        ] },
        { kind: 'p', mt: true, html: 'BC moved to permanent daylight saving time after the clocks went forward on 8 March 2026; the provincial release fixes Pacific time at seven hours behind UTC. A Calculus 12 class booked for a BC afternoon therefore stays at the same BC time all year, with no change in November. The <a class="ag-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones page</a> has every province.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'From rule-runner to explainer: four stages',
    lede: 'Our stages, drawn from teaching Grade 12 calculus to students in several countries.',
    table: { caption: 'From rule-follower to calculus thinker (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Rule-runner', 'Applies the power rule correctly, but freezes when a function is a product or a composition'],
      ['2. Method-matcher', 'Recognises which rule or method a question needs, and mostly carries it out'],
      ['3. Modeller', 'Turns a word problem into a diagram, an equation and a derivative or integral without prompting'],
      ['4. Explainer', 'Says why the method works, estimates first, and catches their own errors before the teacher does']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your teen to explain, in two sentences, the difference between an antiderivative and an integral. The answer tells you more about where they are than the last test mark.',
      'Most stage 1 students are held back by algebra, not calculus. That is fixable, and usually faster than families expect.'
    ] },
    right: { h3: 'For students', ps: [
      'Estimate before every answer. A guess that disagrees with your result is a free warning.',
      'When you get a question wrong, write down whether it was a slip or a misunderstanding. They need different fixes.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine further courses around Calculus 12',
    lede: 'Each taught live online by a regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Foundations and support', sub: 'Grades 10 to 12', courses: [
        { code: 'CALC / BAS / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The factoring and exponent skills calculus rests on.' },
        { code: 'CALC / BAS / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Grades 9 to 12 math, from algebra up to calculus.' },
        { code: 'CALC / BAS / 03', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Functions in depth, with an exam at the end.' }
      ] },
      { num: 'II', h3: 'Beyond the course', sub: 'Grades 11 and 12', courses: [
        { code: 'CALC / EXT / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The other half of university math.' },
        { code: 'CALC / EXT / 02', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Problem solving in the CEMC contest style.' },
        { code: 'CALC / EXT / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Harder problems for students who enjoy proof.' }
      ] },
      { num: 'III', h3: 'Math meets code', sub: 'Teens', courses: [
        { code: 'CALC / COD / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Write your own Newton&rsquo;s method and Riemann sums.' },
        { code: 'CALC / COD / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Rates of change in real data sets.' },
        { code: 'CALC / COD / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Where derivatives train a model.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live calculus classes on the BC clock',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Late afternoon in BC, set once you pick the batch.' },
      { time: 'Weekends', l: 'A weekend morning on the BC clock, around jobs and sports.' },
      { time: '1-on-1', l: 'Booked around unit tests and the final assessment.' }
    ],
    cells: [
      { h3: 'One teacher through the year', p: 'Who knows every earlier mistake.' },
      { h3: 'The school&rsquo;s outline', p: 'Units taught in the class&rsquo;s order.' },
      { h3: 'Shared whiteboard', p: 'Every step written where both can see.' },
      { h3: 'Estimate, then solve', p: 'A guess before each calculation.' },
      { h3: 'Error log kept', p: 'Slips and misunderstandings, sorted.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or your teen alone.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Plenty of our math students code too. Here is some of what they made; the full gallery lives on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews from families and students on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Your first class costs nothing. From then on, each month&rsquo;s fee pays for eight live classes and appears here in your own currency; there is no term to sign up for, and you can stop when a month ends.',
    free: ['A free first class', 'Bring the latest test', 'No card at booking'],
    group: ['Fifteen to twenty students', 'The same teacher weekly', 'Pick a batch time', 'Paid each month'],
    one: ['One teacher, one student', 'Booked around test dates', 'Planned from the school outline']
  },

  faq: {
    eyebrow: 'Questions from BC families',
    h2: 'Calculus 12: frequently asked questions',
    items: [
      { q: 'What does Calculus 12 cover in BC?', a: 'The BC curriculum lists functions, limits and continuity, the definition of the derivative and the differentiation rules, applications such as concavity, the mean value theorem, Newton\'s method, related rates and optimization, integration by Riemann sums, the trapezoidal method, substitution and by parts, areas, volumes and average value, and differential equations with slope fields.' },
      { q: 'Do you grant Calculus 12 credit?', a: 'No. Calculus 12 credit comes only from a school that teaches and marks the course; we tutor beside it and do not grant provincial credits. That school might be the student\'s own secondary school, a district summer program or an online learning school.' },
      { q: 'Do I need Pre-calculus 12 before Calculus 12?', a: 'Usually, yes: the first content group of Calculus 12 starts from the parent functions met in Pre-calculus 12, so the course builds on it. Prerequisites and timetables are set by each school, so ask yours how it schedules the two; if they overlap, we can teach the function topic just before the calculus topic that needs it.' },
      { q: 'Is Calculus 12 required for UBC Science or Engineering?', a: 'On 22 October 2026, UBC\'s requirements tool for British Columbia applicants listed Pre-Calculus 12 as the math requirement for Science and for Applied Science (Engineering), with no Calculus 12. It listed Calculus 12 as recommended for Food and Resource Economics. Check UBC\'s pages in the year you apply.' },
      { q: 'Is Calculus 12 hard?', a: 'It is demanding, mostly because it uses every algebra and function skill from earlier grades at once. Students who struggle are usually stuck on factoring, exponents, logarithms or trigonometry rather than on calculus ideas, and those gaps can be fixed. Nobody can honestly promise a mark in advance.' },
      { q: 'What is the difference between Calculus 12 and AP Calculus?', a: 'Calculus 12 is a BC provincial course taught and assessed by the school. AP Calculus is a separate program with its own exam, available only where a school offers it. Both cover limits, derivatives and integrals; the BC topic list is on this page. Whether a student can take one or both depends on the school.' },
      { q: 'Does Calculus 12 include integration?', a: 'Yes. The curriculum lists the definition of an integral, definite and indefinite integrals, Riemann sums, the rectangle and trapezoidal methods, the fundamental theorem of calculus, antiderivatives, substitution and integration by parts, with applications to area, volume of solids and average value of functions.' },
      { q: 'How should my teen study for the Calculus 12 final?', a: 'Confirm the format first, then check pre-calculus skills, practise limits by table, graph and algebra, learn each derivative rule with an example, draw before every related rates or optimization problem, sketch before every integral, keep an error log, and sit one timed mixed practice a week before.' },
      { q: 'What times are classes for BC families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Since March 2026 the BC clock no longer changes, so the class time you agree in Pacific time does not move in November.' },
      { q: 'How much does Calculus 12 tutoring cost?', a: 'The first class is free. After it, each month is paid on its own, for eight live classes, and you can leave at any month end. The fees section on this page shows the current figure for a batch and for one to one.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for BC senior math students.',
    items: [
      { href: '/coding-classes-in-british-columbia', label: 'Classes in British Columbia', p: 'Coding and math for BC learners of every age.' },
      { href: '/coding-classes-in-canada', label: 'Canada', p: 'Every page we have written for Canadian families.' },
      { href: '/canada-high-school-math-courses-compared', label: 'Grade 12 math across Canada', p: 'Calculus 12 beside MCV4U and the prairie courses.' },
      { href: '/calculus-tutoring-online', label: 'Calculus tutoring online', p: 'Our general calculus page, for any curriculum.' },
      { href: '/ap-calculus-tutoring-online', label: 'AP Calculus tutoring', p: 'For BC students also writing AP Calculus.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'The function skills Calculus 12 rests on.' },
      { href: '/mcv4u-calculus-and-vectors-tutor', label: 'MCV4U Calculus and Vectors', p: 'Ontario&rsquo;s Grade 12 calculus course.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor for Canada', p: 'Math help for every grade and province.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class with us, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the unit your teen is on, the date of the next test and whether they are taking Pre-calculus 12 in the same year. The first class starts from their latest work.',
    readFirst: 'Would you rather read first? See <a class="ag-inline-link" href="/how-we-teach">how our classes run</a>, or open the <a class="ag-inline-link" href="/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course">Western Canada Grade 12 Math syllabus</a>.',
    note: 'Lessons are live online with teachers in India. There is no BC location and nobody visits your home; for a quick question, WhatsApp us.',
    formNote: 'No card details are needed to book the free class.'
  },

  footer: {
    cols: [
      { h4: 'Grade 12 math', links: [
        { href: '/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course', label: 'Western Canada Grade 12 Math' },
        { href: '/courses/ap-calculus-exam-prep', label: 'AP Calculus AB and BC' },
        { href: '/calculus-tutoring-online', label: 'Calculus tutoring' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring' }
      ] },
      { h4: 'British Columbia', links: [
        { href: '/coding-classes-in-british-columbia', label: 'Classes in BC' },
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/canada-high-school-math-courses-compared', label: 'Grade 12 math compared' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Canada class times' }
      ] }
    ],
    bottomRight: 'Approximate first, then prove it exactly'
  },

  personalityCss: `
.ag-root.ag-calc .ag-hero h1 { letter-spacing: -0.014em; max-width: 21ch; }
.ag-root.ag-calc .ag-capsule { border-left-width: 6px; border-radius: 1px; }
.ag-root.ag-calc .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-calc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-calc .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-calc .ag-steps li { margin-bottom: 0.5rem; line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'curriculum.gov.bc.ca Calculus 12 research copy fetched raw 22 October 2026: four big ideas with elaborations and sample inquiry questions; all seven content groups (functions, limits, differentiation, applications of differentiation, integration, applications of integration, differential equations); calculus-specific curricular competency elaborations. Mathematics course list. Re-fetch failed (curl exit 7), so Pre-calculus 12 content is not quoted. you.ubc.ca requirements tool, programs for BC applicants (Science, Applied Science, Food and Resource Economics). BC permanent UTC-7 (facts-geo.md and the BC release).',
    localProject: 'Our Newton\'s method problem for x^3 + 2x - 7 = 0: continuity and the intermediate value theorem (f(1) = -4, f(2) = 5, then f(1.5) = -0.625, f(1.6) = 0.296), one step by hand to 11/7, then a Python run printing 1.5714285714, 1.5689494887, 1.5689464031, checked by SymPy; our area problem for 4x - x^2 on [0, 3] with six strips (left 8.1250, right 9.6250, midpoint 9.0625, trapezoid 8.8750) against the exact 9 by the fundamental theorem and the average value 3 reached at x = 1; twelve original practice questions with SymPy-checked answers; a sticking-points table; a ten-step plan and five-week run-up. Lesson family: approximate, then prove.',
    requiredMentions: ['from table of values, graphically, and algebraically', 'Riemann sum, rectangle approximation method, trapezoidal method', 'problems in contextual situations, including related rates and optimization problems', 'How can we use historical examples (e.g., Achilles and the tortoise) to describe a limit?', 'Finding these products requires finding an infinite sum.', 'applying number strategies to approximate limits, derivatives, and integrals', 'Calculus 12 (recommended)', '1.5689464031', 'x<sup>3</sup> + 2x &minus; 7 = 0', 'midpoint: 9.0625', 'two-column error log', 'Approximate first, then prove it exactly'],
    sources: [
      { claim: 'Calculus 12 big ideas, content and curricular competencies.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/12/calculus' },
      { claim: 'BC Mathematics course list including Pre-calculus 11 and 12 and Calculus 12.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics' },
      { claim: 'UBC program requirements for British Columbia applicants (Science, Applied Science, Food and Resource Economics).', url: 'https://you.ubc.ca/applying-ubc/requirements/canadian-high-schools/' },
      { claim: 'BC permanent UTC-7 from 8 March 2026.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' }
    ],
    rejectedClaims: [
      'Pre-calculus 12 content: the page could not be fetched on re-visit (curl exit 7); only the Calculus 12 reference to its parent functions is used.',
      'That Calculus 12 has or does not have a provincial exam: not verified; the page tells families to ask the school for the format.',
      'Credit value of Calculus 12 and graduation rules: www2.gov.bc.ca was unreachable for the research; none printed.',
      'That Calculus 12 is required for UBC Science or Engineering: the tool lists Pre-Calculus 12 only; stated as read.',
      'Any comparison of difficulty or marks between Calculus 12 and AP Calculus: none made.',
      'Any mark, grade or admission outcome from our classes: none promised.',
      'Named BC schools, districts or online learning schools: none named.',
      'Any affiliation with the BC Ministry of Education and Child Care or UBC: none, and the page says so.'
    ]
  }
};
