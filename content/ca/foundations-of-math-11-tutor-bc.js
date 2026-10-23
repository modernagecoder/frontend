'use strict';
// Foundations of Mathematics 11 tutor, British Columbia (ag- school course door; Canada cluster Plan 2, row 26).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 23 October 2026 by the coordinator (shared copies in keyword-research-2026-09/ca/src-pilots/
// bc-math-shared-mt/, copied to src-pilots/foundations-of-math-11-tutor-bc/):
//  - curriculum.gov.bc.ca/curriculum/mathematics/11/foundations-of-mathematics (mathematics_11_foundations-of-mathematics.txt).
//    Big ideas (fragments around glossary links): similar "shapes and objects have proportional relationships that can be described,
//    measured, and compared."; optimization "a mathematical analysis used to determine the minimum or maximum output for a given
//    situation", "informs the decision-making process in situations involving extreme values."; logical reasoning "the process of
//    using a strategic, systematic series of steps based on valid mathematical procedures and given statements to form a conclusion",
//    "helps us discover and describe mathematical truths."; statistical analysis "allows us to notice, wonder about, and answer
//    questions about variation". Inquiry: "How do the properties of 3D objects change in an enlargement or a reduction?", "How does
//    puzzle and game analysis help us in the world outside the math classroom?", "How do graphs aid in understanding a situation that
//    is being optimized?". Content: "logic, conjecturing, inductive and deductive thinking, proofs, game/puzzle analysis,
//    counter-examples"; "properties, proofs, parallel lines, triangles and other polygons, angle constructions"; graphical analysis
//    "using technology only"; "graphing of the solution region"; "characteristics of graphs, including end behaviour,
//    maximum/minimum, vertex, symmetry, intercepts"; "systems of equations including linear with linear, linear with quadratic, and
//    quadratic with quadratic"; "using feasible region to optimize objective function"; "maximizing area or volume while minimizing
//    perimeter"; "posing a question about an observed variation, collecting and interpreting data, and answering the question";
//    "measures of central tendency, standard deviation, confidence intervals, z-scores, distributions"; "enlargements and reductions of
//    2D shapes and 3D objects"; "comparing the properties of similar objects (length, area, volume)"; "square-cube law"; financial
//    literacy listed (named only, no financial examples on the page). Competency: "(e.g., angle size reasonableness, scale
//    calculations and unit choice, optimal solutions)".
//  - curriculum.gov.bc.ca/curriculum/mathematics/11/pre-calculus (same fetch) for the comparison table.
//  - curriculum.gov.bc.ca/curriculum/mathematics (research copy 22 October 2026): Foundations of Mathematics 11 and 12 and Pre-calculus
//    11 and 12 on the course list.
//  - you.ubc.ca requirements tool, BC applicants (ubc-ajax-programs-686.json, saved raw 22 October 2026 by the UBC writer): Arts "If
//    you intend to major in Economics, you must complete Pre-Calculus 12"; Commerce and Science "Pre-Calculus 12"; Media Studies
//    "Pre-Calculus 12 is strongly recommended".
//  - Time: facts-geo.md section 3 (BC UTC-7 permanent after 8 March 2026).
// Our own material, labelled on the page: the garden-club feasible region (3t + 2k <= 60, 2t + 3k <= 48; corners (0, 0), (20, 0),
// (0, 16), (16.8, 4.8); harvest 5t + 4k peaks at 103.2 kg at the fractional corner, best whole-number plan (18, 3) at 102 kg; Python
// 3.13), the 1:25 scale-model problem (lengths x25, areas x625, volumes x15,625), twelve practice questions with checked answers, the
// Foundations or Pre-calculus chooser, the plan, the ladder. Lesson family: reason it out, then test it.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const LP_PY = `# Garden club plan: maximize harvest inside the feasible region (ours)
# Tomato tray: 3 m^2 of bed, 2 volunteer hours, 5 kg. Kale tray: 2 m^2, 3 hours, 4 kg.
# Limits: 60 m^2 of bed space, 48 volunteer hours.

def feasible(t, k):
    return t >= 0 and k >= 0 and 3*t + 2*k <= 60 and 2*t + 3*k <= 48

def harvest(t, k):
    return 5*t + 4*k

# 1. The corners of the region (from solving pairs of boundary lines by hand)
corners = [(0, 0), (20, 0), (0, 16), (16.8, 4.8)]
for t, k in corners:
    print(f"corner ({t}, {k}): harvest {harvest(t, k):.1f} kg")

# 2. Trays come in whole numbers, so test every whole-number plan
top = max(((t, k) for t in range(21) for k in range(17) if feasible(t, k)),
           key=lambda p: harvest(*p))
print("top whole-number plan:", top, "harvest", harvest(*top), "kg")`;

const LP_OUT = `corner (0, 0): harvest 0.0 kg
corner (20, 0): harvest 100.0 kg
corner (0, 16): harvest 64.0 kg
corner (16.8, 4.8): harvest 103.2 kg
top whole-number plan: (18, 3) harvest 102 kg`;

const SRC_FM11 = '<a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/mathematics/11/foundations-of-mathematics" rel="noopener" target="_blank">BC Foundations of Mathematics 11 curriculum</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'FOUNDATIONS 11 BC', blurb: 'BC Foundations of Mathematics 11 from the curriculum: logic and proof, optimization, statistics and scale, with a feasible-region problem in Python and twelve questions.' },
  slug: 'foundations-of-math-11-tutor-bc',
  code: 'fou',
  accent: '#485717',
  accentRationale: 'Foundations of Mathematics 11, British Columbia: a muted moss green, #485717, allocated to this row in the Plan 2 group list (at least 6 RGB units from every site accent and 14 from other Canada accents), contrast 7.47 on the paper #FBF8F2, 7.03 on #F5F1E8 and 6.43 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Foundations of Math 11 tutor, BC',
  title: 'Foundations of Math 11 BC Tutor: Curriculum, Practice, Help',
  description: 'BC Foundations of Mathematics 11 from the curriculum: reasoning, angle proofs, optimization, statistics, scale models, a worked feasible-region problem in Python.',
  ogDescription: 'What Foundations of Mathematics 11 covers in BC, quoted from curriculum.gov.bc.ca, how it differs from Pre-calculus 11, two worked problems and twelve original questions with answers.',
  twitterDescription: 'BC Foundations of Math 11 from the curriculum, with a feasible-region problem and twelve practice questions.',
  pageName: 'Foundations of Math 11 Tutor for BC Students',
  webPageDescription: 'A guide for British Columbia students and parents to Foundations of Mathematics 11, built from the provincial curriculum page fetched on 23 October 2026, with two worked problems, twelve practice questions and a plan.',
  courseDescription: 'Live online Foundations of Mathematics 11 tutoring for British Columbia students, alongside the school course, in a batch or one to one. No provincial credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'British Columbia', href: '/coding-classes-in-british-columbia' }],
  crumbLabel: 'Foundations of Math 11 tutor',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#course', label: 'The course' },
    { href: '#choose', label: 'Foundations or Pre-calc' },
    { href: '#garden', label: 'Worked problems' },
    { href: '#practice', label: 'Practice' },
    { href: '#prep', label: 'Preparing' }
  ],
  eyebrow: 'British Columbia &middot; Grade 11 &middot; Foundations of Mathematics 11',
  h1: 'Foundations of Math 11 tutor for BC students, live online',
  lede: 'Foundations of Mathematics 11 is the BC Grade 11 course for reasoning with math rather than manipulating it: proving things about angles, finding the optimal plan inside a set of limits, judging what a set of data really says, and working out what happens when a model is scaled up. It suits many students well and surprises others, because it asks for explanation as much as calculation. Below you will find the course as the province defines it, an honest comparison with Pre-calculus 11, works two problems of our own and gives twelve practice questions. We teach beside the school course and do not grant provincial credits.',
  secondaryCta: { href: '#practice', label: 'Try the practice set' },
  wa: 'Hello Modern Age Coders, my teen in BC is taking Foundations of Math 11 and would like help alongside the school course. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; math explained, not memorised',
  spec: [
    ['For', 'Grade 11 students in BC'],
    ['Strands', 'Reasoning, optimization, statistics, scale'],
    ['Leads to', 'Foundations of Mathematics 12'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Clock', 'Pacific time, UTC-7 all year'],
    ['Credit', 'None granted: we teach alongside school'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Foundations of Mathematics 11 is a BC Grade 11 math course. Its curriculum covers logical reasoning and angle proofs, graphing inequalities, quadratics and systems with technology, optimization with feasible regions, statistics including z-scores and confidence intervals, scale models and financial literacy. Modern Age Coders offers Foundations 11 help to BC teens live online, as a group batch or as one-to-one lessons, through our High School Mathematics course.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for a Foundations 11 student',
    lede: 'The first is the course we pace to Foundations 11. The second deepens the statistics strand; the third is for students switching towards Pre-calculus 12.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'FOU / 01', title: 'High school mathematics', note: 'Grades 9 to 12. Paced to the Foundations 11 outline: reasoning, graphs, optimization, statistics and scale.' },
      { course: 'statistics-probability-maths-course', code: 'FOU / 02', title: 'Statistics and probability', note: 'Central tendency, spread, z-scores and confidence intervals, with real data.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', code: 'FOU / 03', title: 'Western Canada Grade 12 Math', note: 'Ages 16 to 18. For a student who later needs Pre-calculus 12. No credit from us.' }
    ]
  },

  sections: [
    {
      id: 'course', tint: 'tint', eyebrow: 'The BC curriculum',
      h2: 'What Foundations of Mathematics 11 covers',
      lede: 'Seven content headings make up the course on the BC curriculum site. Below, each heading&rsquo;s list is quoted, with a note from us on the work it produces in class. One note stands out: the graphing topics carry the elaboration &ldquo;using technology only&rdquo;, so students graph inequalities, quadratics and systems with tools rather than by hand.',
      body: [
        { kind: 'table', caption: 'Foundations of Mathematics 11 content, quoted from the BC curriculum website (raw copy of 23 October 2026)', head: ['Heading', 'What the curriculum lists', 'What students do (our reading)'], rows: [
          ['Forms of mathematical reasoning', '&ldquo;logic, conjecturing, inductive and deductive thinking, proofs, game/puzzle analysis, counter-examples&rdquo;', 'Make a conjecture, test it, then prove it or break it'],
          ['Angle relationships', '&ldquo;properties, proofs, parallel lines, triangles and other polygons, angle constructions&rdquo;', 'Write two-column or paragraph proofs about angles'],
          ['Graphical analysis', 'Linear inequalities: &ldquo;graphing of the solution region&rdquo;, slope and intercepts, intersection points; quadratic functions: &ldquo;characteristics of graphs, including end behaviour, maximum/minimum, vertex, symmetry, intercepts&rdquo;; &ldquo;systems of equations including linear with linear, linear with quadratic, and quadratic with quadratic&rdquo;', 'Graph with technology, then read and explain what the graph shows'],
          ['Optimization', '&ldquo;using feasible region to optimize objective function&rdquo;; &ldquo;maximizing area or volume while minimizing perimeter&rdquo;', 'Pick the optimal plan within the limits'],
          ['Applications of statistics', '&ldquo;posing a question about an observed variation, collecting and interpreting data, and answering the question&rdquo;; &ldquo;measures of central tendency, standard deviation, confidence intervals, z-scores, distributions&rdquo;', 'Run a small study from question to conclusion'],
          ['Scale models', '&ldquo;enlargements and reductions of 2D shapes and 3D objects&rdquo;; &ldquo;comparing the properties of similar objects (length, area, volume)&rdquo;; &ldquo;square-cube law&rdquo;', 'Predict how area and volume change when lengths are scaled'],
          ['Financial literacy', 'Compound interest; investments and loans with regular payments, using technology; buy or lease', 'Taught at school with the class&rsquo;s own tools; not covered on this page']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Four big ideas',
          left: [
            'Similar &ldquo;shapes and objects have proportional relationships that can be described, measured, and compared.&rdquo; Optimization, defined as &ldquo;a mathematical analysis used to determine the minimum or maximum output for a given situation&rdquo;, &ldquo;informs the decision-making process in situations involving extreme values.&rdquo;',
            'Logical reasoning, &ldquo;the process of using a strategic, systematic series of steps based on valid mathematical procedures and given statements to form a conclusion&rdquo;, &ldquo;helps us discover and describe mathematical truths.&rdquo; And statistical analysis &ldquo;allows us to notice, wonder about, and answer questions about variation&rdquo;.'
          ],
          rightH3: 'Inquiry questions to use as revision',
          right: [
            'Three of the curriculum&rsquo;s sample questions make good spoken revision: &ldquo;How do the properties of 3D objects change in an enlargement or a reduction?&rdquo;, &ldquo;How do graphs aid in understanding a situation that is being optimized?&rdquo; and &ldquo;How does puzzle and game analysis help us in the world outside the math classroom?&rdquo;',
            'If your teen can answer each in a few sentences with an example, they understand the scale, optimization and reasoning strands. Our two worked problems below answer the first two.'
          ] },
        { kind: 'source', html: 'Source: ' + SRC_FM11 + '. Big ideas, content and competencies come from the page as downloaded with curl on 23 October 2026. Modern Age Coders works independently of BC&rsquo;s education ministry and every school district.' }
      ]
    },
    {
      id: 'choose', tint: 'deep', eyebrow: 'Foundations or Pre-calculus',
      h2: 'Foundations of Math 11 or Pre-calculus 11?',
      lede: 'The Grade 11 choice in BC is often framed as easy against hard. It is better framed as two different kinds of math, leading to different Grade 12 courses. The comparison is ours, built from the two curriculum pages.',
      body: [
        { kind: 'table', caption: 'The two Grade 11 BC math courses side by side (our comparison from the curriculum pages, fetched 23 October 2026)', head: ['', 'Foundations of Mathematics 11', 'Pre-calculus 11'], rows: [
          ['Big ideas centre on', 'Similarity, optimization, logical reasoning, statistical analysis', 'Algebra, operations on powers and radicals, quadratics, trigonometry'],
          ['Algebra load', 'Moderate: quadratics and systems, graphed with technology', 'Heavy: radicals, rational expressions, factoring, solving by several methods'],
          ['Proof and logic', 'Named content: inductive and deductive thinking, counter-examples, angle proofs', 'Reasoning through algebra rather than as its own topic'],
          ['Statistics', 'Central tendency, standard deviation, confidence intervals, z-scores', 'Not listed'],
          ['Trigonometry', 'Not listed', 'Sine and cosine laws, including ambiguous cases'],
          ['Graphing', '&ldquo;using technology only&rdquo; for its graphical analysis', 'By hand and with technology'],
          ['Next course on the list', 'Foundations of Mathematics 12', 'Pre-calculus 12']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the choice matters for Grade 12',
          left: [
            'Many UBC programs name Pre-Calculus 12 for BC applicants. When we read UBC&rsquo;s requirements tool on 22 October 2026, Science and Commerce both listed it, Arts listed it for students who &ldquo;intend to major in Economics&rdquo;, and Media Studies said &ldquo;Pre-Calculus 12 is strongly recommended&rdquo;.',
            'A Foundations 11 student who later wants one of those programs usually has extra ground to cover, since the Grade 12 pre-calculus course assumes Grade 11 pre-calculus algebra. Whether a school lets a student switch, and how, is the school&rsquo;s rule; ask the counsellor before Grade 11 starts.'
          ],
          rightH3: 'Who Foundations suits',
          right: [
            'Students who like arguing a point, analysing a game or making sense of data often enjoy Foundations 11 more than any math course before it. Its statistics strand is genuinely useful in every field, from biology to journalism.',
            'If a student is unsure, our honest advice is to look at the Grade 12 courses their likely programs require and work backwards. For the algebra-heavy route, our <a class="ag-inline-link" href="/precalculus-tutoring-online">precalculus tutoring page</a> shows the kind of work involved.'
          ] }
      ]
    },
    {
      id: 'garden', tint: 'tint', eyebrow: 'Worked problem 1, ours',
      h2: 'Optimization with a feasible region: the garden club',
      lede: 'This problem is ours. It follows the curriculum&rsquo;s optimization content, a feasible region and an objective function, then asks the question real plans always raise: what if the answer has to be a whole number? Technology does the graphing and the checking, as the course expects.',
      body: [
        { kind: 'p', html: '<b>The problem.</b> A school garden club grows tomatoes and kale in trays. A tomato tray needs 3 m<sup>2</sup> of bed space and 2 volunteer hours and yields about 5 kg; a kale tray needs 2 m<sup>2</sup> and 3 hours and yields about 4 kg. The club has 60 m<sup>2</sup> of beds and 48 volunteer hours for the season. How many trays of each should it plant to harvest the most?' },
        { kind: 'ol', items: [
          '<b>Name the variables.</b> Let t be tomato trays and k be kale trays.',
          '<b>Write the constraints.</b> Space: 3t + 2k &le; 60. Time: 2t + 3k &le; 48. And t &ge; 0, k &ge; 0, because trays cannot be negative.',
          '<b>Write the objective function.</b> Harvest H = 5t + 4k, to be maximized.',
          '<b>Graph the feasible region.</b> With graphing technology, shade the region that satisfies all four inequalities. It is a four-sided shape with corners on the axes and one where the two boundary lines cross.',
          '<b>Find the crossing corner.</b> Solve 3t + 2k = 60 and 2t + 3k = 48 together. Triple the first and double the second: 9t + 6k = 180 and 4t + 6k = 96. Subtract: 5t = 84, so t = 16.8 and k = 4.8.',
          '<b>Test the objective at every corner.</b> The maximum of a linear objective over a region like this occurs at a corner. The program checks all four, then checks every whole-number plan.'
        ] },
        { kind: 'code', label: 'Python &middot; corners and whole-number plans (ours)', lang: 'python', code: LP_PY },
        { kind: 'code', label: 'Output, Python 3.13', lang: 'text', code: LP_OUT },
        { kind: 'two', mt: true,
          leftH3: 'The corner answer and the real answer',
          left: [
            'Mathematically, the optimal point is the corner (16.8, 4.8), with 103.2 kg. But a club cannot plant 0.8 of a tray. The obvious fix, rounding to 17 tomato trays and 5 kale trays, needs 3(17) + 2(5) = 61 m<sup>2</sup>, one more than the club has. Rounding broke a constraint.',
            'Checking every whole-number plan finds 18 tomato trays and 3 kale trays: exactly 60 m<sup>2</sup> and 45 hours, for 102 kg. Only 1.2 kg below the corner value, and actually possible. That gap between the ideal and the feasible is the kind of judgement the optimization big idea calls decision making.'
          ],
          rightH3: 'How graphs help, in the curriculum&rsquo;s terms',
          right: [
            'The inquiry question asks how graphs aid in understanding an optimized situation. Here the graph shows at a glance that the time limit only matters near the top of the region, and that the winning corner is where both limits bite at once.',
            'A competency elaboration asks students to judge the reasonableness of &ldquo;optimal solutions&rdquo;. Testing the rounded plan against the constraints, as above, is that judgement in practice.'
          ] }
      ]
    },
    {
      id: 'scale', tint: 'deep', eyebrow: 'Worked problem 2, ours',
      h2: 'Scale models and the square-cube law',
      lede: 'The scale-model content asks students to compare &ldquo;the properties of similar objects (length, area, volume)&rdquo; and names the &ldquo;square-cube law&rdquo;. This problem of ours shows why the three properties scale so differently.',
      body: [
        { kind: 'p', html: '<b>The problem.</b> A student builds a 1:25 scale model of a garden shed. The model is 12 cm long, its walls and roof use 0.18 m<sup>2</sup> of card, and it encloses 2,000 cm<sup>3</sup>. Find the shed&rsquo;s real length, surface area and volume, and explain why the surface area to volume ratio changes.' },
        { kind: 'ol', items: [
          '<b>Lengths scale by the factor.</b> The scale factor is 25, so the real length is 12 &times; 25 = 300 cm, which is 3 m.',
          '<b>Areas scale by the square of the factor.</b> 25<sup>2</sup> = 625, so the real surface is 0.18 &times; 625 = 112.5 m<sup>2</sup>.',
          '<b>Volumes scale by the cube.</b> 25<sup>3</sup> = 15,625, so the real volume is 2,000 &times; 15,625 = 31,250,000 cm<sup>3</sup>. Since 1 m<sup>3</sup> is 1,000,000 cm<sup>3</sup>, that is 31.25 m<sup>3</sup>.',
          '<b>Compare the ratios.</b> In the model, surface over volume is 1,800 cm<sup>2</sup> / 2,000 cm<sup>3</sup> = 0.9 per cm. In the shed it is 1,125,000 cm<sup>2</sup> / 31,250,000 cm<sup>3</sup> = 0.036 per cm, exactly 1/25 of the model&rsquo;s.',
          '<b>State the law.</b> Scaling lengths by k multiplies area by k<sup>2</sup> and volume by k<sup>3</sup>, so surface per unit of volume falls by a factor of k. That is the square-cube law.'
        ] },
        { kind: 'table', mt: true, caption: 'How each property of the 1:25 shed scales (ours)', head: ['Property', 'Model', 'Multiply by', 'Real shed'], rows: [
          ['Length', '12 cm', '25', '3 m'],
          ['Surface area', '0.18 m<sup>2</sup>', '625', '112.5 m<sup>2</sup>'],
          ['Volume', '2,000 cm<sup>3</sup>', '15,625', '31.25 m<sup>3</sup>'],
          ['Surface per volume', '0.9 per cm', '1/25', '0.036 per cm']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Unit choice is half the problem',
          left: [
            'The competencies mention &ldquo;scale calculations and unit choice&rdquo; for good reason. Mixing square metres of card with cubic centimetres of volume is the fastest way to a wrong ratio. Converting everything to centimetres before step 4 (0.18 m<sup>2</sup> is 1,800 cm<sup>2</sup>) keeps it honest.',
            'A useful habit: write the unit after every number, every time, and check that both sides of an equation carry the same unit.'
          ],
          rightH3: 'Why the law matters outside class',
          right: [
            'The square-cube law explains why a large building needs proportionally less heating surface per cubic metre than a small one, why ice cubes melt faster when crushed, and why a model bridge that holds up perfectly may fail when built full size: weight grows with volume, but the strength of a beam grows with its cross-section area.',
            'So the sample question on 3D enlargements gets a numerical reply: every doubling of length leaves each cubic unit with half the surface it had.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice, ours',
      h2: 'Twelve Foundations of Math 11 practice questions',
      lede: 'Every question here is our own work, written for this guide rather than taken from a school, a district or an exam. They cover reasoning, angles, graphs, statistics and scale. Answer on paper, using a graphing tool where the course would.',
      body: [
        { kind: 'ol', items: [
          '<b>Deductive proof.</b> Prove that the sum of any two odd integers is even.',
          '<b>Counter-example.</b> A student notices that n<sup>2</sup> + n + 41 is prime for n = 0, 1, 2, 3 and 4, and conjectures it is always prime. Find a counter-example.',
          '<b>Game analysis.</b> Two players take turns removing 1, 2 or 3 counters from a pile of 15. Whoever takes the last counter wins. Should you go first, and how many should you take?',
          '<b>Parallel lines.</b> A transversal crosses two parallel lines, making alternate interior angles of (3x + 10)&deg; and (5x &minus; 30)&deg;. Find x and the angle.',
          '<b>Polygons.</b> Find the sum of the interior angles of a hexagon, and each interior angle of a regular hexagon.',
          '<b>Solution region.</b> Is the point (2, 3) in the region defined by y &lt; &minus;x + 6 and y &ge; 2x &minus; 3? Show the test.',
          '<b>Quadratic graph.</b> For y = &minus;x<sup>2</sup> + 6x &minus; 5, give the vertex, the maximum, the axis of symmetry and the intercepts.',
          '<b>Linear-quadratic system.</b> Find where y = x<sup>2</sup> &minus; 4 and y = 2x &minus; 1 meet.',
          '<b>z-score.</b> A class test has mean 72 and standard deviation 8. What is the z-score of a mark of 84, and what does it tell you?',
          '<b>Confidence interval.</b> A school survey reports that 62% of students walk or cycle to school, accurate within 4 percentage points, 19 times out of 20. State the interval and explain what 19 times out of 20 means.',
          '<b>Scale.</b> A 1:200 model of a building is 45 cm tall and its footprint is 0.06 m<sup>2</sup>. Find the real height and footprint.',
          '<b>Square-cube law.</b> Every length of a solid is tripled. By what factors do its surface area, volume and surface-to-volume ratio change?'
        ] }
      ]
    },
    {
      id: 'answers', tint: 'deep', eyebrow: 'Answers, ours',
      h2: 'Answers, explained',
      lede: 'We checked the numerical answers by computation and the proofs line by line. In Foundations 11 the explanation earns the marks, so each answer gives it.',
      body: [
        { kind: 'ol', items: [
          '<b>Proof.</b> Any odd integer can be written 2m + 1 for some integer m. Two odd integers sum to (2m + 1) + (2n + 1) = 2(m + n + 1), which is 2 times an integer, so it is even. Checking examples is inductive; this argument is deductive, because it covers every case.',
          '<b>n = 40.</b> 40<sup>2</sup> + 40 + 41 = 1,681 = 41 &times; 41, which is not prime. (n = 41 also works.) Five true cases never prove a pattern; one counter-example disproves it.',
          '<b>Go first and take 3.</b> That leaves 12. Whatever your opponent takes (1, 2 or 3), you take enough to make the total for the round 4, leaving 8, then 4, then 0. Multiples of 4 are losing positions for whoever must move.',
          '<b>x = 20, angle 70&deg;.</b> Alternate interior angles are equal: 3x + 10 = 5x &minus; 30, so 40 = 2x.',
          '<b>720&deg; and 120&deg;.</b> A polygon with n sides has interior angles summing to (n &minus; 2) &times; 180&deg;; for n = 6 that is 720&deg;, and 720 / 6 = 120.',
          '<b>Yes.</b> First inequality: 3 &lt; &minus;2 + 6 = 4, true. Second: 3 &ge; 2(2) &minus; 3 = 1, true. Both hold, so the point is inside.',
          '<b>Vertex (3, 4), maximum 4, axis x = 3, x-intercepts 1 and 5, y-intercept &minus;5.</b> It factors as &minus;(x &minus; 1)(x &minus; 5), and the vertex lies midway between the zeros.',
          '<b>(3, 5) and (&minus;1, &minus;3).</b> Set x<sup>2</sup> &minus; 4 = 2x &minus; 1, so x<sup>2</sup> &minus; 2x &minus; 3 = 0 and (x &minus; 3)(x + 1) = 0. Substitute each x into the line.',
          '<b>z = 1.5.</b> (84 &minus; 72) / 8 = 1.5: the mark is one and a half standard deviations above the mean. In a roughly normal distribution, that is well above most of the class.',
          '<b>58% to 66%.</b> 62 &plusmn; 4. &ldquo;19 times out of 20&rdquo; is a 95% confidence level: if the survey were repeated many times in the same way, about 95% of the intervals produced would contain the true value. It does not mean the true value is 95% likely to be in this particular interval.',
          '<b>90 m tall; footprint 2,400 m<sup>2</sup>.</b> 45 cm &times; 200 = 9,000 cm = 90 m. Areas scale by 200<sup>2</sup> = 40,000, and 0.06 &times; 40,000 = 2,400.',
          '<b>Area &times; 9, volume &times; 27, surface-to-volume ratio &divide; 3.</b> Area scales by 3<sup>2</sup>, volume by 3<sup>3</sup>, and the ratio by 9/27 = 1/3.'
        ] },
        { kind: 'p', mt: true, html: 'Question 3 is the kind of puzzle the curriculum&rsquo;s game analysis means, and it is also a programming exercise: a few lines of code can test the multiples-of-4 strategy against every possible reply. If that appeals, the senior coding courses are described on our <a class="ag-inline-link" href="/computer-programming-11-and-12-bc">Computer Programming 11 and 12 guide</a>.' }
      ]
    },
    {
      id: 'prep', tint: 'tint', eyebrow: 'Preparing, ours',
      h2: 'How to prepare for Foundations 11 tests and projects',
      lede: 'Foundations 11 assessments often mix calculation with written explanation, and some teachers set a statistics project. The format is the school&rsquo;s choice; this preparation plan is ours.',
      body: [
        { kind: 'ol', items: [
          '<b>Ask how the course is assessed.</b> Tests, a statistics project, presentations, and which graphing tools are allowed.',
          '<b>Learn the vocabulary of reasoning.</b> Conjecture, inductive, deductive, counter-example, proof. Write one example of each.',
          '<b>Practise proofs in a set format.</b> Statement and reason, line by line, for angle proofs; the teacher&rsquo;s preferred layout is the one to use.',
          '<b>Get fluent with one graphing tool.</b> Inequalities, quadratics and systems are graphed with technology in this course, so speed with the tool matters.',
          '<b>For optimization, follow the same five steps every time.</b> Variables, constraints, objective, region, corners. Then ask whether the answer must be a whole number.',
          '<b>For statistics, start from the question.</b> Pose it, decide what data answers it, collect, summarise with mean and standard deviation, and answer the question in a sentence.',
          '<b>For scale, write units everywhere.</b> Convert before comparing, and square or cube the factor for area or volume.',
          '<b>Keep an explanation log.</b> For each topic, one paragraph in your own words explaining why the method works.',
          '<b>Do a mixed review every two weeks.</b> Our twelve questions above make a starting set.',
          '<b>Before a test, explain three answers out loud</b> to someone who has not taken the course. If they follow, you are ready.'
        ] },
        { kind: 'table', mt: true, caption: 'A four-week run-up to a Foundations 11 unit test or project deadline (ours)', head: ['Weeks before', 'Work on', 'Done when'], numCols: [0], rows: [
          ['4', 'Assessment format; vocabulary; one graphing tool', 'Five reasoning terms defined with examples'],
          ['3', 'Proofs and optimization steps', 'Two proofs and one optimization written without notes'],
          ['2', 'Statistics and scale', 'One small data question answered from start to finish'],
          ['1', 'Mixed review and explaining aloud', 'Three answers explained clearly to a listener']
        ] }
      ]
    },
    {
      id: 'credit', tint: 'deep', eyebrow: 'Credit and the clock',
      h2: 'Help with Foundations 11; the credit stays with the school',
      lede: 'Some families searching for Foundations of Math 11 online really want the credit. Only a school can give that, so here is what our lessons cover instead.',
      body: [
        { kind: 'two',
          leftH3: 'The credit',
          left: [
            'To earn Foundations of Mathematics 11, a student enrols where the course is delivered and marked, such as their own secondary, a summer session or an online school. We do not grant high school credits, and nothing we mark goes on a transcript.',
            'For diploma questions, such as whether Foundations 11 satisfies a requirement, talk to the school counsellor. We could not open the province&rsquo;s graduation page while researching, so we stay silent on it.'
          ],
          rightH3: 'What we offer',
          right: [
            'Live lessons that follow the school&rsquo;s own unit order: proofs explained, graphing tools practised, statistics projects planned, scale problems worked until they make sense. Your teen does the work; we make sure the reasoning holds.',
            'Home-educating in BC? A weekly Grade 11 math routine for registered home learners is sketched on our <a class="ag-inline-link" href="/homeschool-coding-and-math-bc">homeschool coding and math guide for BC</a>.'
          ] },
        { kind: 'table', mt: true, caption: 'Weekend lesson times, BC against India (provincial time change of 2026, tz version 2026e; India runs on UTC+5:30)', head: ['BC region', 'UTC offset', 'India difference', 'A 9:00 am Saturday BC lesson, for the teacher'], rows: [
          ['Most of the province', 'UTC-7, fixed', '12 hours 30 minutes ahead', '9:30 pm Saturday'],
          ['East Kootenay and Golden', 'UTC-6, fixed', '11 hours 30 minutes ahead', '8:30 pm Saturday']
        ] },
        { kind: 'p', mt: true, html: 'BC kept its spring 2026 clock after 8 March and no longer moves it in November, so a lesson time set on Pacific time holds all year. Our <a class="ag-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones page</a> covers the other provinces, several of which still change.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'Four stages in Foundations 11 thinking',
    lede: 'Stages we use to place a Foundations 11 student, from our own lessons.',
    table: { caption: 'From answer-getter to explainer (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Answer-getter', 'Can produce a number, cannot yet say why it is right'],
      ['2. Tester', 'Checks a claim with examples and finds counter-examples'],
      ['3. Prover', 'Writes a short deductive argument that covers every case'],
      ['4. Judge', 'Decides whether an optimal or statistical answer is reasonable in its context']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your teen to prove one small fact to you, such as why two odd numbers add to an even one. How they explain it shows their stage.',
      'Foundations 11 rewards talking about math. A teen who explains aloud at home tends to write better answers in tests.'
    ] },
    right: { h3: 'For students', ps: [
      'After every answer, add one sentence explaining why it makes sense. That sentence is often worth more marks than the number.',
      'Look for a counter-example before trying to prove something. It saves time when the claim is false.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for BC Grade 11 students',
    lede: 'Live and online, with the same teacher each week, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Math beside Foundations', sub: 'Grades 10 to 12', courses: [
        { code: 'FOU / MTH / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations and graphs, rebuilt calmly.' },
        { code: 'FOU / MTH / 02', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'If the plan moves towards Pre-calculus.' },
        { code: 'FOU / MTH / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'For students looking at US universities.' }
      ] },
      { num: 'II', h3: 'Reasoning and puzzles', sub: 'Grades 9 to 12', courses: [
        { code: 'FOU / RSN / 01', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Logic-heavy contest problems.' },
        { code: 'FOU / RSN / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Proof as a sport.' },
        { code: 'FOU / RSN / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Game analysis turned into code.' }
      ] },
      { num: 'III', h3: 'Data and code', sub: 'Teens', courses: [
        { code: 'FOU / DAT / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Questions answered from real data sets.' },
        { code: 'FOU / DAT / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Simulate, graph and test your own ideas.' },
        { code: 'FOU / DAT / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Statistics behind modern models.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live Foundations 11 lessons for BC teens',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Once the BC school day ends, in a batch you pick.' },
      { time: 'Weekends', l: 'Weekend mornings on the Pacific clock.' },
      { time: '1-on-1', l: 'Around project deadlines and unit tests.' }
    ],
    cells: [
      { h3: 'A regular teacher', p: 'Who knows your teen&rsquo;s course order.' },
      { h3: 'Graphing tools used', p: 'As the course itself requires.' },
      { h3: 'Proofs written out', p: 'Line by line, with reasons.' },
      { h3: 'Projects planned', p: 'From question to conclusion.' },
      { h3: 'Explain it back', p: 'Every lesson ends with a summary.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one learner.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Our students make things with code as well as solve problems on paper; here are a few, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Google reviews left by families and students, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'The first class is on us. After that, a monthly fee covers eight live classes and is shown in your region&rsquo;s currency; there is no term to commit to, so you can stop at the end of a month.',
    free: ['Free first class', 'Bring a current assignment', 'No card asked'],
    group: ['A batch of fifteen to twenty', 'One regular teacher', 'Batch time you choose', 'Monthly, no term'],
    one: ['Just your teen and a teacher', 'Booked around deadlines', 'Built on the school outline']
  },

  faq: {
    eyebrow: 'Questions from BC families',
    h2: 'Foundations of Math 11: common questions',
    items: [
      { q: 'What is Foundations of Math 11 in BC?', a: 'It is a BC Grade 11 mathematics course. Its curriculum covers forms of mathematical reasoning and proof, angle relationships, graphical analysis of inequalities, quadratics and systems using technology, optimization with feasible regions, applications of statistics, scale models and financial literacy.' },
      { q: 'Do you grant Foundations of Math 11 credit?', a: 'No: we do not grant provincial credits. Think of us as a second teacher beside the class. The Foundations of Mathematics 11 credit itself has to come from a school that runs and marks the course, online or in person.' },
      { q: 'Is Foundations of Math 11 easier than Pre-calculus 11?', a: 'It is different. Foundations 11 has lighter algebra but asks for proofs, written reasoning, statistics and judgement about whether an answer makes sense. Its Grade 11 neighbour, Pre-calculus 11, leans harder on algebra and trigonometry. Students who find algebra hard often still find Foundations 11 demanding in its own way.' },
      { q: 'Can I go to university with Foundations of Math 11?', a: 'It depends on the program. When we checked UBC\'s requirements tool for BC applicants on 22 October 2026, Arts listed English Studies 12 or English First Peoples 12 and asked for Pre-Calculus 12 only from students planning an Economics major, while Science and Commerce listed Pre-Calculus 12. Check each program you are considering.' },
      { q: 'What comes after Foundations of Math 11?', a: 'The BC mathematics course list includes Foundations of Mathematics 12, the next course in the same line. Some students also take Statistics 12. Moving to Pre-calculus 12 instead usually needs Pre-calculus 11 algebra, and the school decides the rules.' },
      { q: 'Does Foundations of Math 11 include statistics?', a: 'Yes. The curriculum lists posing a question about variation, collecting and interpreting data, and measures of central tendency, standard deviation, confidence intervals, z-scores and distributions.' },
      { q: 'Do students graph by hand in Foundations 11?', a: 'The curriculum attaches the note "using technology only" to its graphical analysis content, which covers linear inequalities, quadratic functions, systems of equations and optimization. So students use graphing tools, and the skill being assessed is reading and explaining the graph.' },
      { q: 'How should my teen prepare for Foundations 11 tests?', a: 'Find out the assessment format, learn the vocabulary of reasoning, practise proofs in the teacher\'s layout, get quick with one graphing tool, follow fixed steps for optimization and statistics, keep units on every number, and practise explaining answers aloud.' },
      { q: 'What lesson times work in BC?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. The province dropped clock changes in 2026, which means your agreed lesson hour is the same in January as in June.' },
      { q: 'How much is Foundations 11 tutoring?', a: 'The first class is free. Ongoing classes are billed by the month for eight live lessons, with no term contract, and stop whenever a month ends. The fees section on this page lists the group and private amounts.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for BC students choosing and taking Grade 11 and 12 math.',
    items: [
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'The algebra-heavy route, for comparison.' },
      { href: '/canada-high-school-math-courses-compared', label: 'Grade 12 math by province', p: 'Where the Grade 12 options sit nationally.' },
      { href: '/calculus-12-tutor-bc', label: 'Calculus 12 tutor, BC', p: 'For students heading to calculus.' },
      { href: '/computer-programming-11-and-12-bc', label: 'Computer Programming 11 and 12', p: 'Coding alongside senior math.' },
      { href: '/homeschool-coding-and-math-bc', label: 'Homeschool math and coding, BC', p: 'Planning Grade 11 at home.' },
      { href: '/coding-classes-in-british-columbia', label: 'British Columbia hub', p: 'Every BC page we offer.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutoring, Canada', p: 'Help across provinces.' },
      { href: '/blog/probability-for-beginners', label: 'Probability for beginners', p: 'A gentle start for the statistics strand.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a lesson looks like.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the unit, any project due and the date of the next test. We start from the work your teen is doing now.',
    readFirst: 'Curious first? Read the <a class="ag-inline-link" href="/courses/complete-high-school-mathematics-mastery">High School Mathematics syllabus</a> or see <a class="ag-inline-link" href="/how-we-teach">how our lessons work</a>.',
    note: 'Every lesson is a live video call with a teacher working from India. No premises in BC, no home visits; send a WhatsApp for the fastest answer.',
    formNote: 'No payment card is needed for the free class.'
  },

  footer: {
    cols: [
      { h4: 'BC Grade 11 math', links: [
        { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring' },
        { href: '/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course', label: 'Western Canada Grade 12 Math' },
        { href: '/courses/statistics-probability-maths-course', label: 'Statistics and probability' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'High school mathematics' }
      ] },
      { h4: 'British Columbia', links: [
        { href: '/coding-classes-in-british-columbia', label: 'Classes in BC' },
        { href: '/homeschool-coding-and-math-bc', label: 'Homeschool in BC' },
        { href: '/calculus-12-tutor-bc', label: 'Calculus 12 tutor' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Canada class times' }
      ] }
    ],
    bottomRight: 'Reason it out, then test it'
  },

  personalityCss: `
.ag-root.ag-fou .ag-hero h1 { letter-spacing: -0.008em; max-width: 24ch; }
.ag-root.ag-fou .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-fou .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-fou .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-fou .ag-steps li { margin-bottom: 0.5rem; }
`,

  dossier: {
    curriculumAuthority: 'curriculum.gov.bc.ca Foundations of Mathematics 11 fetched raw 23 October 2026 (coordinator copy in src-pilots/bc-math-shared-mt): four big ideas with definitions and inquiry questions, all content headings including the "using technology only" note on graphical analysis, competency elaborations. Pre-calculus 11 page, same fetch, for the comparison. Mathematics course list. you.ubc.ca requirements tool, BC applicants. BC permanent UTC-7 (facts-geo.md).',
    localProject: 'Our garden-club optimization: tomato and kale trays under 3t + 2k <= 60 m^2 and 2t + 3k <= 48 hours, harvest 5t + 4k; corners (0, 0), (20, 0), (0, 16) and (16.8, 4.8) found by elimination; Python prints 103.2 kg at the fractional corner, shows rounding to (17, 5) breaks the space limit, and finds the best whole-number plan (18, 3) at 102 kg. Our 1:25 shed model: lengths x25, areas x625, volumes x15,625, surface per volume 0.9 to 0.036 per cm. Twelve original questions (proof, counter-example, a take-away game, angles, regions, quadratics, systems, z-score, confidence interval, scale, square-cube law) with checked answers; a ten-step preparation plan. Lesson family: reason it out, then test it.',
    requiredMentions: ['a mathematical analysis used to determine the minimum or maximum output for a given situation', 'using feasible region to optimize objective function', 'logic, conjecturing, inductive and deductive thinking, proofs, game/puzzle analysis, counter-examples', 'corner (16.8, 4.8): harvest 103.2 kg', 'comparing the properties of similar objects (length, area, volume)', 'How do graphs aid in understanding a situation that is being optimized?', 'top whole-number plan: (18, 3) harvest 102 kg', '15,625', 'n<sup>2</sup> + n + 41', 'Reason it out, then test it'],
    sources: [
      { claim: 'Foundations of Mathematics 11 big ideas, content and competencies.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/11/foundations-of-mathematics' },
      { claim: 'Pre-calculus 11 content for the comparison.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/11/pre-calculus' },
      { claim: 'BC Mathematics course list including Foundations of Mathematics 12.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics' },
      { claim: 'UBC program requirements naming Pre-Calculus 12 for BC applicants.', url: 'https://you.ubc.ca/applying-ubc/requirements/canadian-high-schools/' },
      { claim: 'BC permanent UTC-7.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' }
    ],
    rejectedClaims: [
      'Financial literacy worked examples (compound interest, loans, leasing): the strand is named from the curriculum only; no money content per the brief.',
      'The statistics big idea examples (medications, income levels, graduation rates): not quoted under the content rules.',
      'That a Foundations 11 student may or may not switch to Pre-calculus 12: school rules, not verified; the page says to ask the counsellor.',
      'Foundations of Mathematics 12 content: not fetched; only its place on the course list is stated.',
      'Any mark, grade or admission outcome from our classes: none promised.',
      'Named BC schools or districts: none named.',
      'Any affiliation with the BC ministry or UBC: none, and the page says so.'
    ]
  }
};
