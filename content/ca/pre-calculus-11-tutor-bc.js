'use strict';
// Pre-calculus 11 tutor, British Columbia (ag- school course door; Canada cluster Plan 2, row 23).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 23 October 2026 by the coordinator (shared copies in keyword-research-2026-09/ca/src-pilots/
// bc-math-shared-mt/, copied to src-pilots/pre-calculus-11-tutor-bc/):
//  - curriculum.gov.bc.ca/curriculum/mathematics/11/pre-calculus (mathematics_11_pre-calculus.txt). Big ideas (fragments around
//    glossary links): "relationships through abstract thinking."; "between, operations extend to powers, radicals, and polynomials.";
//    "are prevalent in the world around us."; "Trigonometry involves using proportional reasoning"; elaboration "using measurable values
//    to calculate immeasurable values (e.g., calculating the width of a river using the distance between two points on one shore and an
//    angle to a point on the other shore)"; inquiry questions "What is the connection between domain and extraneous roots?", "How do we
//    tell if a mathematical solution is reasonable?", "How is the cosine law related to the Pythagorean theorem?", "When would we choose
//    to represent a number with a radical rather than a rational exponent?", "Why is the shape of a quadratic function called a
//    parabola?". Content: "positive and negative rational exponents"; "ordering a set of irrational numbers"; "solving simple (one
//    radical only) equations algebraically and graphically"; "identifying domain restrictions and extraneous roots of radical
//    equations"; "identifying non-permissible values"; "solving equations (e.g., factoring, quadratic formula, completing the square,
//    graphing, square root method)"; "sign analysis: identifying intervals where a function is positive, negative, or zero"; "symbolic
//    notation for inequality statements, including interval notation"; "use of sine and cosine laws to solve non-right triangles,
//    including ambiguous cases"; "special angles, as connected with the 30-60-90 and 45-45-90 triangles"; "angles in standard position:
//    degrees". Competency: "(e.g., trinomial factoring, roots of quadratic equations)".
//  - curriculum.gov.bc.ca/curriculum/mathematics/10/foundations-of-mathematics-and-pre-calculus (mathematics_10_...txt): content
//    "types of equations of lines (point-slope, slope intercept, and general)"; "solving algebraically by inspection, substitution,
//    elimination"; arithmetic sequences "applying formal language (common difference, first term, general term)".
//  - curriculum.gov.bc.ca/curriculum/mathematics/12/pre-calculus (same coordinator fetch): "examining angles in standard position in
//    both radians and degrees".
//  - curriculum.gov.bc.ca/curriculum/mathematics (research copy 22 October 2026; facts row 72): course list.
//  - you.ubc.ca requirements tool, BC applicants (ubc-ajax-programs-686.json, saved raw 22 October 2026 by the UBC writer): Science
//    Grade 12 "Pre-Calculus 12"; Grade 11 "Chemistry 11", "Physics 11".
//  - Time: facts-geo.md section 3 (BC UTC-7 permanent after 8 March 2026; East Kootenay and Golden UTC-6).
// Our own material, labelled on the page: the launched-ball quadratic h(t) = -5t^2 + 20t + 1 (vertex form -5(t - 2)^2 + 21, h >= 16
// for 1 <= t <= 3, lands near t = 4.049; SymPy), the radical equation sqrt(2x + 9) = x + 3 (candidates 0 and -4, -4 rejected, Python
// table and scan), twelve practice questions with answers checked in SymPy 1.14 and Python 3.13 (sine law case A = 35, a = 7, b = 11:
// B 64.3 or 115.7, c 12.04 or 5.98), the Grade 10 to 12 table, the plan, the ladder. Lesson family: check the answer against the
// question.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const RAD_PY = `# sqrt(2x + 9) = x + 3: test both candidates, then scan the graph (ours)
import math

def left(x):
    return math.sqrt(2*x + 9)

def right(x):
    return x + 3

for x in [0, -4]:                      # the two candidates from squaring
    print(f"x = {x:>2}: left = {left(x):.1f}, right = {right(x):.1f}",
          "keep" if math.isclose(left(x), right(x)) else "reject")

# Scan the domain x >= -4.5 in steps of 0.5 for places where left - right changes sign
xs = [-4.5 + 0.5*i for i in range(20)]
for x1, x2 in zip(xs, xs[1:]):
    d1, d2 = left(x1) - right(x1), left(x2) - right(x2)
    if d1 == 0:
        print(f"graphs meet exactly at x = {x1}")
    elif d1 * d2 < 0:
        print(f"graphs cross between x = {x1} and x = {x2}")`;

const RAD_OUT = `x =  0: left = 3.0, right = 3.0 keep
x = -4: left = 1.0, right = -1.0 reject
graphs meet exactly at x = 0.0`;

const AMBIG_PY = `# The ambiguous case of the sine law: A = 35 degrees, a = 7, b = 11 (ours)
import math

A, a, b = 35, 7, 11
sin_B = b * math.sin(math.radians(A)) / a
print(f"sin B = {sin_B:.4f}")
if sin_B > 1:
    print("No triangle: side a is too short to reach")
else:
    B1 = math.degrees(math.asin(sin_B))      # the acute answer
    for B in (B1, 180 - B1):                 # and its supplement
        C = 180 - A - B
        if C <= 0:
            print(f"B = {B:.1f}: rejected, angles already exceed 180")
            continue
        c = a * math.sin(math.radians(C)) / math.sin(math.radians(A))
        print(f"B = {B:.1f}, C = {C:.1f}, c = {c:.2f}")`;

const AMBIG_OUT = `sin B = 0.9013
B = 64.3, C = 80.7, c = 12.04
B = 115.7, C = 29.3, c = 5.98`;

const SRC_PC11 = '<a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/mathematics/11/pre-calculus" rel="noopener" target="_blank">BC Pre-calculus 11 curriculum</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'PRE-CALCULUS 11 BC', blurb: 'BC Pre-calculus 11 from the provincial curriculum: radicals, rational expressions, quadratics, inequalities and the sine and cosine laws, with worked problems and twelve questions.' },
  slug: 'pre-calculus-11-tutor-bc',
  code: 'pre',
  accent: '#6B2A43',
  accentRationale: 'Pre-calculus 11, British Columbia: a muted mulberry, #6B2A43, allocated to this row in the Plan 2 group list (at least 6 RGB units from every site accent and 14 from other Canada accents), contrast 9.72 on the paper #FBF8F2, 9.14 on #F5F1E8 and 8.37 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Pre-calculus 11 tutor, BC',
  title: 'Pre-calculus 11 BC Tutor: Course Topics, Practice and Help',
  description: 'BC Pre-calculus 11 from the curriculum: exponents and radicals, rational expressions, quadratics, inequalities, sine and cosine laws, worked problems, practice.',
  ogDescription: 'What Pre-calculus 11 covers in British Columbia, quoted from curriculum.gov.bc.ca, with a quadratic in context, a radical equation with an extraneous root and twelve original questions.',
  twitterDescription: 'BC Pre-calculus 11 from the curriculum, with two worked problems and twelve practice questions.',
  pageName: 'Pre-calculus 11 Tutor for BC Students',
  webPageDescription: 'A guide for British Columbia students and parents to Pre-calculus 11, built from the provincial curriculum page fetched on 23 October 2026, with two worked problems, twelve practice questions and a plan for the year.',
  courseDescription: 'Live online Pre-calculus 11 tutoring for British Columbia students, alongside the school course, in a batch or one to one. No provincial credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'British Columbia', href: '/coding-classes-in-british-columbia' }],
  crumbLabel: 'Pre-calculus 11 tutor',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#topics', label: 'Topics' },
    { href: '#path', label: 'Grade 10 to 12' },
    { href: '#ball', label: 'Worked problems' },
    { href: '#practice', label: 'Practice' },
    { href: '#year', label: 'The year plan' }
  ],
  eyebrow: 'British Columbia &middot; Grade 11 &middot; Pre-calculus 11',
  h1: 'Pre-calculus 11 tutor for BC students, live online',
  lede: 'Grade 11 is when algebra in BC gets serious. Pre-calculus 11 takes the exponent and factoring skills of Grade 10 and pushes them into radicals, rational expressions, quadratic functions, inequalities and non-right triangles, all in one year. Each topic leans on the one before, so a gap in October shows up again in March. This guide walks through the course as BC&rsquo;s curriculum lists it, works a quadratic in context and a radical equation with a trap in it, give twelve original questions with answers, and suggest a plan for the year. We teach alongside the school course; we do not grant provincial credits.',
  secondaryCta: { href: '#practice', label: 'See the practice questions' },
  wa: 'Hello Modern Age Coders, my teen in BC is taking Pre-calculus 11 and would like help alongside the school course. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; algebra taught so it stays learned',
  spec: [
    ['For', 'Grade 11 students in BC'],
    ['Before it', 'Foundations of Mathematics and Pre-calculus 10'],
    ['Leads to', 'Pre-calculus 12'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Clock', 'Pacific time, UTC-7 all year'],
    ['Credit', 'None granted: we teach alongside school'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Pre-calculus 11 is British Columbia&rsquo;s Grade 11 pre-calculus course. Its curriculum covers rational exponents and radicals, polynomial factoring and rational expressions, quadratic functions and equations, linear and quadratic inequalities, and the sine and cosine laws. Modern Age Coders teaches Pre-calculus 11 to BC students live online, in a group batch or one to one, using our High School Mathematics course.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses around Pre-calculus 11',
    lede: 'The first is the Grade 12 course this year leads into; the other two are the courses we use for Pre-calculus 11 itself and for the algebra under it.',
    items: [
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', code: 'PRE / 01', title: 'Western Canada Grade 12 Math', note: 'Ages 16 to 18. Pre-calculus 12 alongside school, for the year after this one. We grant no credit.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'PRE / 02', title: 'High school mathematics', note: 'Grades 9 to 12. The course we pace to a Pre-calculus 11 outline: radicals, rationals, quadratics, trigonometry.' },
      { course: 'algebra-foundations-masterclass', code: 'PRE / 03', title: 'Algebra foundations', note: 'For students whose Grade 10 factoring and exponents need rebuilding before Grade 11 moves on.' }
    ]
  },

  sections: [
    {
      id: 'topics', tint: 'tint', eyebrow: 'The BC curriculum',
      h2: 'What Pre-calculus 11 covers, topic by topic',
      lede: 'The BC curriculum page lists Pre-calculus 11 content under seven headings. The table quotes the parts students meet in tests and adds what we see students do with each.',
      body: [
        { kind: 'table', caption: 'Pre-calculus 11 content by heading (BC curriculum website, raw copy saved 23 October 2026)', head: ['Topic', 'What the curriculum lists', 'In practice (our reading)'], rows: [
          ['Real number system', 'Real number classification', 'Sort numbers into natural, integer, rational and irrational'],
          ['Powers', '&ldquo;positive and negative rational exponents&rdquo;; exponent laws; order of operations; numerical and variable bases', 'Read 27<sup>&minus;2/3</sup> as a root, a power and a reciprocal'],
          ['Radicals', 'Simplifying radicals; &ldquo;ordering a set of irrational numbers&rdquo;; operations; &ldquo;solving simple (one radical only) equations algebraically and graphically&rdquo;; &ldquo;identifying domain restrictions and extraneous roots of radical equations&rdquo;', 'Isolate, square, then check every answer in the original'],
          ['Polynomial factoring', 'Greatest common factor; trinomials of the form ax<sup>2</sup> + bx + c; difference of squares', 'Factor before anything else in a rational or quadratic problem'],
          ['Rational expressions and equations', 'Simplifying and operating; &ldquo;identifying non-permissible values&rdquo;; solving and identifying extraneous roots', 'Write the excluded values first, then simplify'],
          ['Quadratic functions and equations', 'Graph characteristics, multiple forms, function notation; &ldquo;solving equations (e.g., factoring, quadratic formula, completing the square, graphing, square root method)&rdquo;; problems in context', 'Pick the form that answers the question: vertex form for maximums, factored form for zeros'],
          ['Linear and quadratic inequalities', '&ldquo;sign analysis: identifying intervals where a function is positive, negative, or zero&rdquo;; &ldquo;symbolic notation for inequality statements, including interval notation&rdquo;', 'Find the zeros, test each interval, write the answer in interval notation'],
          ['Trigonometry', '&ldquo;use of sine and cosine laws to solve non-right triangles, including ambiguous cases&rdquo;; &ldquo;angles in standard position: degrees&rdquo;; &ldquo;special angles, as connected with the 30-60-90 and 45-45-90 triangles&rdquo;; the unit circle', 'Solve any triangle, and know when there are two']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Three big ideas',
          left: [
            'The first big idea says algebra allows us to generalize &ldquo;relationships through abstract thinking.&rdquo; The second says that, as with numbers, &ldquo;operations extend to powers, radicals, and polynomials.&rdquo; The third says quadratic relationships &ldquo;are prevalent in the world around us.&rdquo;',
            'A fourth statement frames the trigonometry: &ldquo;Trigonometry involves using proportional reasoning&rdquo; to solve indirect measurement problems. The elaboration gives a lovely example: &ldquo;calculating the width of a river using the distance between two points on one shore and an angle to a point on the other shore&rdquo;. That is a sine law problem, and a very BC one.'
          ],
          rightH3: 'Questions worth asking aloud',
          right: [
            'The sample inquiry questions point straight at test traps. &ldquo;What is the connection between domain and extraneous roots?&rdquo; is the radical-equation lesson in one sentence. &ldquo;How do we tell if a mathematical solution is reasonable?&rdquo; is the habit that catches them.',
            'Two more make good revision prompts: &ldquo;How is the cosine law related to the Pythagorean theorem?&rdquo; and &ldquo;When would we choose to represent a number with a radical rather than a rational exponent?&rdquo; A student who can answer both in their own words understands the trigonometry and powers units.'
          ] },
        { kind: 'source', html: 'Source: ' + SRC_PC11 + '; we read its big ideas, content and competencies from a raw copy saved on 23 October 2026. We are an independent tutoring service, with no tie to the province&rsquo;s education ministry or to any district.' }
      ]
    },
    {
      id: 'path', tint: 'deep', eyebrow: 'Grade 10 to Grade 12',
      h2: 'Where Pre-calculus 11 sits between Grade 10 and Grade 12',
      lede: 'Pre-calculus 11 is the middle of a three-year line. Seeing what comes before and after explains why some Grade 11 topics feel familiar and others feel brand new.',
      body: [
        { kind: 'table', caption: 'One thread through three BC courses, each quoted from its curriculum page (fetched 23 October 2026)', head: ['Course', 'A content item from its page', 'How it connects (ours)'], rows: [
          ['Foundations of Mathematics and Pre-calculus 10', '&ldquo;types of equations of lines (point-slope, slope intercept, and general)&rdquo;; systems solved &ldquo;by inspection, substitution, elimination&rdquo;', 'Linear relationships, the base that quadratics then curve away from'],
          ['Pre-calculus 11', '&ldquo;solving equations (e.g., factoring, quadratic formula, completing the square, graphing, square root method)&rdquo;', 'Quadratics in five ways; the first real choice of method'],
          ['Pre-calculus 11', '&ldquo;angles in standard position: degrees&rdquo;', 'The unit circle begins, in degrees only'],
          ['Pre-calculus 12', '&ldquo;examining angles in standard position in both radians and degrees&rdquo;', 'The same circle again, now in radians too']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What Grade 10 should leave behind',
          left: [
            'Pre-calculus 11 assumes a student can factor a trinomial, apply exponent laws with integer exponents, and work with lines and their equations fluently. When those are shaky, Grade 11 feels like learning two courses at once.',
            'Our first lesson with a new Grade 11 student includes a short Grade 10 check: three factoring questions, three exponent questions, one line through two points. Whatever wobbles goes on the plan for the first month.'
          ],
          rightH3: 'What Grade 12 will build on',
          right: [
            'Almost everything in Pre-calculus 11 returns in Pre-calculus 12: factoring becomes the factor theorem, rational expressions become rational functions with asymptotes, and the degrees-only unit circle becomes the radian one. Our <a class="ag-inline-link" href="/canada-high-school-math-courses-compared">Grade 12 math comparison</a> shows where Pre-calculus 12 sits among the provinces&rsquo; courses.',
            'Students choosing between Pre-calculus 11 and Foundations of Mathematics 11 should know that many UBC programs list Pre-Calculus 12 for BC applicants, Science among them. The Grade 11 choice keeps that route open or makes it longer.'
          ] }
      ]
    },
    {
      id: 'ball', tint: 'tint', eyebrow: 'Worked problem 1, ours',
      h2: 'A quadratic in context: a launched ball',
      lede: 'This problem is ours. It touches four Pre-calculus 11 skills in one story: completing the square, reading a vertex, solving a quadratic inequality by sign analysis, and restricting a domain to what makes sense.',
      body: [
        { kind: 'p', html: '<b>The problem.</b> A ball is launched upward from a platform. After t seconds it is h(t) = &minus;5t<sup>2</sup> + 20t + 1 metres above the ground. (a) Find the greatest height and when it happens. (b) For how long is the ball at least 16 m up? (c) When does it land, and what domain makes sense for h?' },
        { kind: 'ol', items: [
          '<b>Complete the square.</b> Factor &minus;5 from the t terms: &minus;5(t<sup>2</sup> &minus; 4t) + 1. Half of &minus;4 is &minus;2, and (&minus;2)<sup>2</sup> = 4, so add and subtract 4 inside: &minus;5[(t &minus; 2)<sup>2</sup> &minus; 4] + 1 = &minus;5(t &minus; 2)<sup>2</sup> + 21.',
          '<b>Read the vertex.</b> The vertex is (2, 21). The parabola opens down, so the greatest height is 21 m, at t = 2 s.',
          '<b>Set up the inequality.</b> h(t) &ge; 16 means &minus;5t<sup>2</sup> + 20t &minus; 15 &ge; 0. Divide by &minus;5 and flip the sign: t<sup>2</sup> &minus; 4t + 3 &le; 0, that is (t &minus; 1)(t &minus; 3) &le; 0.',
          '<b>Use sign analysis.</b> The zeros 1 and 3 split the line into three intervals. Testing t = 0, 2 and 4 gives positive, negative, positive for (t &minus; 1)(t &minus; 3). The product is at most 0 on the closed interval [1, 3].',
          '<b>Answer in context.</b> The ball is at least 16 m up from t = 1 s to t = 3 s, so for 2 seconds.',
          '<b>Find the landing time.</b> Solve h(t) = 0 with the quadratic formula: t = 2 &plusmn; &radic;(21/5), so t &asymp; 4.049 or t &asymp; &minus;0.049. Reject the negative root: time starts at launch. The sensible domain is 0 &le; t &le; about 4.049, and the range is 0 &le; h &le; 21.'
        ] },
        { kind: 'table', mt: true, caption: 'Sign analysis for (t &minus; 1)(t &minus; 3) (ours)', head: ['Interval', 'Test value', 't &minus; 1', 't &minus; 3', 'Product'], rows: [
          ['t &lt; 1', '0', 'negative', 'negative', 'positive'],
          ['1 &lt; t &lt; 3', '2', 'positive', 'negative', 'negative'],
          ['t &gt; 3', '4', 'positive', 'positive', 'positive']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The sign flip',
          left: [
            'Step 3 divides an inequality by a negative number, and the inequality sign reverses. Forgetting that turns the right answer, [1, 3], into its opposite: t &le; 1 or t &ge; 3, which says the ball is high up before launch and after landing. Reading the answer in context catches it immediately.',
            'That is the inquiry question &ldquo;How do we tell if a mathematical solution is reasonable?&rdquo; in action: the algebra produced an answer, and the story decides whether to trust it.'
          ],
          rightH3: 'Why the domain matters',
          right: [
            'The formula h(t) is defined for every real t, but the situation is not. The curriculum lists &ldquo;domain and range restrictions from problems in situational contexts&rdquo; for exactly this reason. A negative time or a negative height has no meaning here.',
            'Students who write the restricted domain before solving tend to reject the negative landing time without a second thought, and the marks for interpretation follow.'
          ] }
      ]
    },
    {
      id: 'radical', tint: 'deep', eyebrow: 'Worked problem 2, ours',
      h2: 'A radical equation with an extraneous root, solved twice',
      lede: 'The curriculum asks students to solve one-radical equations &ldquo;algebraically and graphically&rdquo; and to identify extraneous roots. This problem of ours does both, and uses a few lines of Python as the graph.',
      body: [
        { kind: 'p', html: '<b>The problem.</b> Solve &radic;(2x + 9) = x + 3. State the domain restriction, find every candidate, and decide which candidates are real solutions.' },
        { kind: 'ol', items: [
          '<b>Restrict the domain first.</b> The expression under the root cannot be negative: 2x + 9 &ge; 0, so x &ge; &minus;4.5. A square root is never negative either, so the right side must satisfy x + 3 &ge; 0, that is x &ge; &minus;3.',
          '<b>Square both sides.</b> 2x + 9 = (x + 3)<sup>2</sup> = x<sup>2</sup> + 6x + 9.',
          '<b>Solve the quadratic.</b> 0 = x<sup>2</sup> + 4x = x(x + 4), so the candidates are x = 0 and x = &minus;4.',
          '<b>Check each candidate in the original equation.</b> At x = 0: &radic;9 = 3 and 0 + 3 = 3. Keep it. At x = &minus;4: &radic;1 = 1 but &minus;4 + 3 = &minus;1. Reject it.',
          '<b>Explain the rejection.</b> Squaring turned &minus;1 into 1, so the squared equation accepted a value the original never could. The restriction x &ge; &minus;3 from step 1 already ruled out &minus;4.',
          '<b>Confirm graphically.</b> The program below compares the two sides at each candidate, then scans the domain for every place the graphs meet.'
        ] },
        { kind: 'code', label: 'Python &middot; check and scan (ours)', lang: 'python', code: RAD_PY },
        { kind: 'code', label: 'Output, Python 3.13', lang: 'text', code: RAD_OUT, note: 'One meeting point, at x = 0. The graphs never meet near x = &minus;4, which is what extraneous means.' },
        { kind: 'two', mt: true,
          leftH3: 'Domain and extraneous roots, connected',
          left: [
            'This is the curriculum&rsquo;s inquiry question about domain and extraneous roots, answered with one example. Squaring is not reversible: it erases signs. Any value that makes the right side negative can sneak through the squared equation, and the domain restriction on the right side names exactly those values.',
            'Students who write both restrictions in step 1 can often reject an extraneous root before they compute it, and they still check, because checking is quicker than losing marks.'
          ],
          rightH3: 'Why the graph helps',
          right: [
            'Algebra produced two candidates and the graph showed one crossing. When the two disagree, the graph is telling you something real about the original equation. Graphing technology is named in the curriculum&rsquo;s competencies for exploring relationships, and a short program does the same job.',
            'Our scan uses steps of 0.5, which would miss two crossings very close together. For a test, the algebraic check is the proof; the scan is the sanity check.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice, ours',
      h2: 'Twelve Pre-calculus 11 practice questions',
      lede: 'Twelve questions of our own, not lifted from any classroom, district test or exam. They move through the year in order, powers first and triangles last. Try every one on paper before looking below.',
      body: [
        { kind: 'ol', items: [
          '<b>Rational exponents.</b> Evaluate 27<sup>&minus;2/3</sup>, and simplify (8x<sup>6</sup>)<sup>2/3</sup>.',
          '<b>Radicals.</b> Simplify &radic;50 + 3&radic;8 &minus; &radic;18.',
          '<b>Ordering irrationals.</b> Put in order from least to greatest, without a calculator first: 2&radic;3, 3&radic;2, &radic;11, 3.3.',
          '<b>Trinomial.</b> Factor 6x<sup>2</sup> &minus; x &minus; 15.',
          '<b>Difference of squares.</b> Factor 25x<sup>2</sup> &minus; 36y<sup>2</sup>.',
          '<b>Rational expression.</b> Simplify (x<sup>2</sup> &minus; 9)/(x<sup>2</sup> + 5x + 6) &divide; (x &minus; 3)/(x + 2), and state every non-permissible value.',
          '<b>Rational equation.</b> Solve x/(x &minus; 3) = 3/(x &minus; 3) + 2.',
          '<b>Vertex form.</b> Write y = 2x<sup>2</sup> &minus; 12x + 13 in vertex form. Give the vertex, axis of symmetry, range and x-intercepts.',
          '<b>Inequality.</b> Solve x<sup>2</sup> &minus; 2x &minus; 15 &gt; 0 and write the answer in interval notation.',
          '<b>Sine law, ambiguous case.</b> In triangle ABC, angle A = 35&deg;, a = 7 and b = 11. How many triangles are possible? Solve each one.',
          '<b>Cosine law.</b> Two sides of a triangle are 8 cm and 11 cm with a 40&deg; angle between them. Find the third side to two decimal places.',
          '<b>Standard position.</b> For an angle of 150&deg; in standard position, give the reference angle and the exact values of its sine and cosine.'
        ] }
      ]
    },
    {
      id: 'answers', tint: 'deep', eyebrow: 'Answers, ours',
      h2: 'Answers and the reasoning behind them',
      lede: 'We confirmed every result by computer algebra (SymPy 1.14) or by running Python. Read the reasoning even when your number matches; it is what the marker looks for.',
      body: [
        { kind: 'ol', items: [
          '<b>1/9 and 4x<sup>4</sup>.</b> The cube root of 27 is 3, squared is 9, and the negative exponent gives the reciprocal. For the second, the cube root of 8 is 2 and squared is 4; x<sup>6</sup> to the power 2/3 is x<sup>4</sup>.',
          '<b>8&radic;2.</b> &radic;50 = 5&radic;2, 3&radic;8 = 6&radic;2 and &radic;18 = 3&radic;2, so 5 + 6 &minus; 3 = 8 of them.',
          '<b>3.3, &radic;11, 2&radic;3, 3&radic;2.</b> Square everything: 10.89, 11, 12 and 18. Squaring keeps the order for positive numbers.',
          '<b>(2x + 3)(3x &minus; 5).</b> Find two numbers that multiply to 6 &times; (&minus;15) = &minus;90 and add to &minus;1: &minus;10 and 9. Split and group: 6x<sup>2</sup> &minus; 10x + 9x &minus; 15.',
          '<b>(5x &minus; 6y)(5x + 6y).</b> Both terms are perfect squares and they are subtracted.',
          '<b>1, with x &ne; &minus;3, &minus;2, 3.</b> Factor: (x &minus; 3)(x + 3)/[(x + 2)(x + 3)] &times; (x + 2)/(x &minus; 3). Everything cancels. The excluded values come from every denominator, including the divisor&rsquo;s numerator x &minus; 3, which becomes a denominator when you flip it.',
          '<b>No solution.</b> Multiply by x &minus; 3: x = 3 + 2(x &minus; 3), so x = 3. But 3 is non-permissible, so the only candidate is extraneous.',
          '<b>y = 2(x &minus; 3)<sup>2</sup> &minus; 5.</b> Vertex (3, &minus;5), axis x = 3, range y &ge; &minus;5, x-intercepts 3 &plusmn; &radic;10/2, about 1.42 and 4.58.',
          '<b>(&minus;&infin;, &minus;3) &cup; (5, &infin;).</b> Factor as (x &minus; 5)(x + 3) &gt; 0. Testing an interval each side and between the zeros shows positive outside, negative between. Round brackets, because the inequality is strict.',
          '<b>Two triangles.</b> sin B = 11 sin 35&deg; / 7 &asymp; 0.9013, so B &asymp; 64.3&deg; or 115.7&deg;. Both leave room for C: 80.7&deg; with c &asymp; 12.04, or 29.3&deg; with c &asymp; 5.98. The code below does the same check.',
          '<b>About 7.08 cm.</b> c<sup>2</sup> = 8<sup>2</sup> + 11<sup>2</sup> &minus; 2(8)(11) cos 40&deg; = 185 &minus; 176 cos 40&deg; &asymp; 50.18. With a 90&deg; angle the cosine term vanishes and the law becomes Pythagoras, which answers that inquiry question.',
          '<b>Reference angle 30&deg;; sin 150&deg; = 1/2, cos 150&deg; = &minus;&radic;3/2.</b> 150&deg; is in the second quadrant, where sine is positive and cosine negative. The values come from the 30-60-90 triangle.'
        ] },
        { kind: 'code', label: 'Answer 10 &middot; Python (ours)', lang: 'python', code: AMBIG_PY },
        { kind: 'code', label: 'Output, Python 3.13', lang: 'text', code: AMBIG_OUT, note: 'If sin B came out above 1, there would be no triangle at all; if the supplement left no room for C, there would be only one. The program tests both conditions, as you should by hand.' }
      ]
    },
    {
      id: 'year', tint: 'tint', eyebrow: 'A plan for the year, ours',
      h2: 'How to get through Pre-calculus 11 without falling behind',
      lede: 'Because each topic depends on the last, Pre-calculus 11 rewards steady work more than end-of-year cramming. This plan is ours; fit it to the order of your teen&rsquo;s course outline.',
      body: [
        { kind: 'ol', items: [
          '<b>Run the Grade 10 check in the first two weeks.</b> Factoring, exponent laws, lines. Fix gaps before radicals arrive.',
          '<b>Learn the exponent and radical forms as one idea.</b> Practise rewriting each radical as a power and back until it is automatic.',
          '<b>Write restrictions before solving.</b> For every radical or rational equation, write the domain restriction or non-permissible values first.',
          '<b>Check every candidate root.</b> Substitute into the original equation and write the check down, even when you are sure.',
          '<b>Solve each quadratic two ways.</b> One method you choose, one you would not, then compare. The curriculum lists five methods for a reason.',
          '<b>Draw a sign chart for every inequality.</b> Zeros, intervals, test values, then interval notation.',
          '<b>Sketch every triangle.</b> Label the given parts before deciding between the sine and cosine laws. For the sine law with two sides and a non-included angle, test the supplement every time.',
          '<b>Keep a mistakes page.</b> Log each error, then mark it as carelessness or as an idea that needs teaching again.',
          '<b>Review one old unit each week.</b> Ten minutes on a past topic stops it fading before the final.',
          '<b>Before each unit test, do a mixed set.</b> Our twelve questions above make a reasonable start.'
        ] },
        { kind: 'table', mt: true, caption: 'Pre-calculus 11 through the year: what to secure by when (ours; reorder to match the school outline)', head: ['Part of the year', 'Secure these', 'Warning sign'], rows: [
          ['First month', 'Grade 10 check; powers and radicals', 'Rational exponents still feel like a trick'],
          ['Second month', 'Factoring and rational expressions', 'Non-permissible values forgotten'],
          ['Middle of the year', 'Quadratic functions and equations', 'Only one solving method used'],
          ['Later in the year', 'Inequalities and sign analysis', 'Sign not flipped when dividing by a negative'],
          ['Final stretch', 'Trigonometry and a full mixed review', 'The ambiguous case skipped']
        ] }
      ]
    },
    {
      id: 'credit', tint: 'deep', eyebrow: 'Credit and the BC clock',
      h2: 'Pre-calculus 11 tutoring, with the credit left to the school',
      lede: 'Pre-calculus 11 credit is a school matter. Here is what we do, what we do not, and how class times work from BC.',
      body: [
        { kind: 'two',
          leftH3: 'What we do not do',
          left: [
            'We do not grant high school credits, award marks or write report cards. Pre-calculus 11 credit belongs to the school that teaches and evaluates it, which may be the teen&rsquo;s own school, a summer course run by a district, or an online school.',
            'Questions about which Grade 11 math a diploma needs belong with a school counsellor. We could not load the provincial graduation page during our research, so we do not state those rules.'
          ],
          rightH3: 'What we do',
          right: [
            'We teach the course alongside school: explain the unit the class is on, build the skills it rests on, and practise until the student can do it alone. The student does the homework; we make sure they understand it.',
            'Many families start in the first term of Grade 11, when radicals and rational expressions arrive. Others come in spring, before the trigonometry unit and the final.'
          ] },
        { kind: 'table', mt: true, caption: 'BC lesson times against India time, 2026 to 2027 (BC time announcement of 2026; tz data 2026e)', head: ['Region', 'Clock', 'Hours behind India', 'A 4:30 pm BC lesson on the teacher&rsquo;s clock'], rows: [
          ['BC outside East Kootenay and Golden', 'UTC-7, no changes', '12.5', '5:00 am, next day'],
          ['East Kootenay and Golden', 'UTC-6, no changes', '11.5', '4:00 am, next day']
        ] },
        { kind: 'p', mt: true, html: 'Since 8 March 2026 BC has kept one clock all year, so a lesson agreed for a BC afternoon stays at that BC time through the winter. Other provinces still change; our <a class="ag-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones page</a> has them all.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'Four stages in Grade 11 algebra',
    lede: 'Our placement stages for Pre-calculus 11 students.',
    table: { caption: 'From copying steps to checking answers (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Step-copier', 'Follows a worked example closely, loses the thread on a new question'],
      ['2. Factor-first', 'Factors before anything else and spots common factors quickly'],
      ['3. Method-chooser', 'Picks the quadratic method or triangle law that suits the question'],
      ['4. Answer-checker', 'Writes restrictions, solves, checks, and explains any rejected root']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your teen why one answer to their last radical equation was rejected. If they can explain it, they are past stage 2.',
      'Gaps in Grade 11 compound. A small fix in October saves a lot of stress in May.'
    ] },
    right: { h3: 'For students', ps: [
      'Write the restrictions before you solve. It takes ten seconds and saves whole questions.',
      'When a test question looks new, ask what it looks like that you have seen before.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for a Grade 11 student in BC',
    lede: 'Live lessons with one regular teacher, in a class group or one to one.',
    bands: [
      { num: 'I', h3: 'Algebra and functions', sub: 'Grades 10 to 12', courses: [
        { code: 'PRE / FUN / 01', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Function families at an exam standard.' },
        { code: 'PRE / FUN / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data, chance and distributions.' },
        { code: 'PRE / FUN / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'For students applying to US universities.' }
      ] },
      { num: 'II', h3: 'Contests and depth', sub: 'Grades 9 to 12', courses: [
        { code: 'PRE / CON / 01', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'CEMC-style problem solving.' },
        { code: 'PRE / CON / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Harder problems and real proofs.' },
        { code: 'PRE / CON / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic and algorithms with code.' }
      ] },
      { num: 'III', h3: 'Math with a keyboard', sub: 'Teens', courses: [
        { code: 'PRE / COD / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Check your algebra with your own programs.' },
        { code: 'PRE / COD / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'A second language for BC senior coding.' },
        { code: 'PRE / COD / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Fit quadratics to real measurements.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Pre-calculus 11 lessons, live from India to BC',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After BC school hours, at a batch time you choose.' },
      { time: 'Weekends', l: 'Saturday or Sunday, before lunch on the BC clock.' },
      { time: '1-on-1', l: 'Fitted around unit tests in the Grade 11 year.' }
    ],
    cells: [
      { h3: 'Same teacher each week', p: 'Continuity across a building-block year.' },
      { h3: 'Grade 10 gaps found', p: 'Checked in the first lesson.' },
      { h3: 'Restrictions first', p: 'Written before every solve.' },
      { h3: 'Two methods', p: 'Each quadratic solved twice.' },
      { h3: 'Weekly review', p: 'One old unit revisited.' },
      { h3: 'Group or private', p: 'Fifteen to twenty students, or one.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'A few projects from students who learn math and code with us; the complete set is on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Families and students reviewing us on Google, in their own words.',

  fees: {
    h2: 'Fees',
    lede: 'You pay nothing for the first class. Regular lessons cost a monthly fee for eight live classes, displayed in your local currency, and you can leave when any month ends without a term commitment.',
    free: ['First class free', 'Bring a recent quiz', 'No card to book'],
    group: ['Fifteen to twenty in a batch', 'One regular teacher', 'Your choice of batch time', 'Paid per month'],
    one: ['A private teacher', 'Around test dates', 'Following the school outline']
  },

  faq: {
    eyebrow: 'Questions from BC families',
    h2: 'Pre-calculus 11: questions families ask',
    items: [
      { q: 'What does Pre-calculus 11 cover in BC?', a: 'In BC\'s curriculum, Pre-calculus 11 includes the real number system, rational exponents, radicals and radical equations, polynomial factoring, rational expressions and equations, quadratic functions and equations, linear and quadratic inequalities with sign analysis and interval notation, and trigonometry with the sine and cosine laws, including ambiguous cases.' },
      { q: 'Do you grant Pre-calculus 11 credit?', a: 'No, we do not grant provincial credits. Our lessons run beside the school course. To earn Pre-calculus 11, a student enrols with a school that teaches and marks it: their own secondary, a district summer course, or an online school.' },
      { q: 'Is Pre-calculus 11 harder than Foundations of Math 11?', a: 'They are different rather than simply harder or easier. Pre-calculus 11 is heavier on algebra: radicals, rational expressions and quadratics. Foundations of Mathematics 11 includes logical reasoning, optimization, statistics, scale models and financial topics. The right choice depends on the courses a student will need in Grade 12.' },
      { q: 'Do I need Pre-calculus 11 for university?', a: 'Universities usually name Grade 12 courses. For BC applicants, UBC listed Pre-Calculus 12 for Science and several other programs on 22 October 2026, and Pre-calculus 12 builds on Pre-calculus 11. So Pre-calculus 11 is usually the route to those programs. Check each program\'s page.' },
      { q: 'What is the hardest part of Pre-calculus 11?', a: 'In our lessons, students most often struggle with rational expressions, because they need fluent factoring and careful non-permissible values, and with the ambiguous case of the sine law. Both improve quickly once factoring is secure and every triangle is sketched before solving.' },
      { q: 'What is an extraneous root?', a: 'It is a value that solves a transformed equation but not the original one. In Pre-calculus 11 it appears when squaring both sides of a radical equation or multiplying through a rational equation. Checking every candidate in the original equation finds it.' },
      { q: 'Does Pre-calculus 11 use radians?', a: 'The BC Pre-calculus 11 curriculum lists angles in standard position in degrees. Radians appear in Pre-calculus 12, whose curriculum lists angles in standard position in both radians and degrees.' },
      { q: 'How should my teen keep up through the year?', a: 'Fix Grade 10 gaps early, write domain restrictions before solving, check every root, solve each quadratic two ways, draw a sign chart for every inequality, sketch every triangle, keep a mistakes page, and review one old unit every week.' },
      { q: 'When are classes for BC families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. BC no longer changes its clocks, so a time agreed on Pacific time holds all year.' },
      { q: 'What does Pre-calculus 11 tutoring cost?', a: 'Your first class is free. After that the fee is monthly and covers eight live classes; there is no term contract, so you can stop when a month ends. The fees section shows today\'s group and private figures.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for BC students in Grades 10 to 12.',
    items: [
      { href: '/canada-high-school-math-courses-compared', label: 'Grade 12 math by province', p: 'Pre-calculus 12 beside other provinces.' },
      { href: '/calculus-12-tutor-bc', label: 'Calculus 12 tutor, BC', p: 'Where the pre-calculus line ends up.' },
      { href: '/computer-programming-11-and-12-bc', label: 'Computer Programming 11 and 12', p: 'Coding in Grades 11 and 12, the BC way.' },
      { href: '/homeschool-coding-and-math-bc', label: 'Homeschool coding and math, BC', p: 'Grade 11 math for home-educated teens.' },
      { href: '/coding-classes-in-british-columbia', label: 'British Columbia', p: 'All our BC classes in one place.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'Function skills for any curriculum.' },
      { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada', p: 'Grades and courses across the country.' },
      { href: '/coding-classes-in-canada', label: 'Canada', p: 'Our Canada pages, listed.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live lesson.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Let us know the current unit and the next quiz date. The first lesson begins with your teen&rsquo;s own homework.',
    readFirst: 'Want more detail first? The <a class="ag-inline-link" href="/courses/complete-high-school-mathematics-mastery">High School Mathematics syllabus</a> sets out the topics, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson.',
    note: 'Lessons happen live on video with teachers in India; nothing happens in person and there is no BC address. A WhatsApp message gets the quickest reply.',
    formNote: 'You will not be asked for a card to book.'
  },

  footer: {
    cols: [
      { h4: 'BC senior math', links: [
        { href: '/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course', label: 'Western Canada Grade 12 Math' },
        { href: '/calculus-12-tutor-bc', label: 'Calculus 12 tutor' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'High school mathematics' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring' }
      ] },
      { h4: 'British Columbia', links: [
        { href: '/coding-classes-in-british-columbia', label: 'Classes in BC' },
        { href: '/homeschool-coding-and-math-bc', label: 'Homeschool in BC' },
        { href: '/computer-programming-11-and-12-bc', label: 'Computer Programming 11 and 12' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Canada class times' }
      ] }
    ],
    bottomRight: 'Restrict, solve, then check'
  },

  personalityCss: `
.ag-root.ag-pre .ag-hero h1 { letter-spacing: -0.01em; max-width: 23ch; }
.ag-root.ag-pre .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-pre .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-pre .ag-table caption { text-align: left; }
.ag-root.ag-pre .ag-steps li { margin-bottom: 0.6rem; }
`,

  dossier: {
    curriculumAuthority: 'curriculum.gov.bc.ca Pre-calculus 11 fetched raw 23 October 2026 (coordinator copy in src-pilots/bc-math-shared-mt): big ideas with elaborations and sample inquiry questions, all content headings, competency elaboration. Foundations of Mathematics and Pre-calculus 10 and Pre-calculus 12 pages, same fetch, for the three-year thread. you.ubc.ca requirements tool, BC applicants. BC permanent UTC-7 (facts-geo.md).',
    localProject: 'Our launched-ball quadratic h(t) = -5t^2 + 20t + 1: vertex form -5(t - 2)^2 + 21, greatest height 21 m at 2 s, at least 16 m for 1 <= t <= 3 by sign analysis, landing near 4.049 s with the negative root rejected and a restricted domain; our radical equation sqrt(2x + 9) = x + 3 with restrictions x >= -4.5 and x >= -3, candidates 0 and -4, -4 rejected, confirmed by a Python check and scan; twelve original questions with checked answers including a two-triangle sine law case (A = 35, a = 7, b = 11) solved in Python; a ten-step year plan and a term table. Lesson family: check the answer against the question.',
    requiredMentions: ['relationships through abstract thinking.', 'operations extend to powers, radicals, and polynomials.', 'calculating the width of a river using the distance between two points on one shore and an angle to a point on the other shore', 'What is the connection between domain and extraneous roots?', 'identifying domain restrictions and extraneous roots of radical equations', 'sign analysis: identifying intervals where a function is positive, negative, or zero', '&minus;5(t &minus; 2)<sup>2</sup> + 21', 'graphs meet exactly at x = 0.0', 'A, a, b = 35, 7, 11', 'Restrict, solve, then check'],
    sources: [
      { claim: 'Pre-calculus 11 big ideas, inquiry questions, content and competencies.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/11/pre-calculus' },
      { claim: 'Foundations of Mathematics and Pre-calculus 10 content.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/10/foundations-of-mathematics-and-pre-calculus' },
      { claim: 'Pre-calculus 12 angles in radians and degrees.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/12/pre-calculus' },
      { claim: 'UBC Science requirements for BC applicants (Pre-Calculus 12).', url: 'https://you.ubc.ca/applying-ubc/requirements/canadian-high-schools/' },
      { claim: 'BC permanent UTC-7.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' }
    ],
    rejectedClaims: [
      'That Pre-calculus 11 is formally required for Pre-calculus 12: prerequisites are set by schools and were not verified; the page says Pre-calculus 12 builds on it.',
      'Graduation rules for Grade 11 math: the provincial graduation page was not reachable; none printed.',
      'UBC Grade 11 math requirements for health programs: left out under the content rules.',
      'Any mark, grade or admission outcome from our classes: none promised.',
      'Named BC schools, districts or online schools: none named.',
      'Any affiliation with the BC ministry or UBC: none, and the page says so.'
    ]
  }
};
