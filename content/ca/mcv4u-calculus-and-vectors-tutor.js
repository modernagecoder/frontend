'use strict';
// MCV4U Calculus and Vectors tutor (ag- school course door; Canada cluster Plan 2, row 16).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/mcv4u-calculus-and-vectors-tutor/):
//  - The Ontario Curriculum, Grades 11 and 12: Mathematics (2007), www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf
//    (math1112currb.pdf, pdftotext math1112currb-raw.txt). MCV4U description: "This course builds on students' previous experience
//    with functions and their developing understanding of rates of change."; "representations of lines and planes in threedimensional
//    space" (the PDF prints threedimensional as one word); "including those students who will be required to take a university-level
//    calculus, linear algebra, or physics course."; note "The new Advanced Functions course (MHF4U) must be taken prior to or
//    concurrently with Calculus and Vectors (MCV4U)."; programme overview "that include a calculus or linear algebra course in the
//    first year"; strands A Rate of Change, B Derivatives and Their Applications, C Geometry and Algebra of Vectors; overall
//    expectations in plain-word fragments (A1 "using the slopes of secants and tangents and the concept of the limit"; B1 "use the
//    connections in curve sketching"; B2 "including optimization problems"; C4 "represent lines and planes using scalar, vector, and
//    parametric equations, and solve problems involving distances and intersections"); specific expectations A1.4 "graphical and
//    numerical examples of limits, and explain the reasoning involved", A3.5 "using the product and chain rules", footnote "The
//    emphasis of this expectation is on the application of the derivative rules and not on the simplification of resulting complex
//    algebraic expressions.", B1.2 "the rate of change of the rate of change", B1.4 "explain why an infinite number of graphs is
//    possible", B2.4 "solve optimization problems involving polynomial, simple rational, and exponential functions", C1.1 "recognize
//    a vector as a quantity with both magnitude and direction", C4.2 "a line in three-space cannot be represented by a scalar
//    equation", C4.7 "between a point and a plane; between two skew lines"; course table "Grade 12 Advanced Functions, University,
//    must be taken prior to or concurrently with Calculus and Vectors." Expressions with notation lost in extraction are not quoted.
//  - Ontario curriculum content API (facts-schools-contests.md facts 38 and 40, ontario/api-senior-math-courses.json): MCV4U "Calculus
//    and Vectors", year issued 2007, Grade 12, University Preparation; the description carries the same MHF4U note.
//  - uwaterloo.ca/future-students/programs/software-engineering (raw copy): "Advanced Functions (minimum final grade of 70% is
//    required)"; "Calculus and Vectors (minimum final grade of 70% is required)"; "Chemistry (minimum final grade of 70% is required)";
//    "Physics (minimum final grade of 70% is required)"; "English (ENG4U) (minimum final grade of 70% is required)"; individual selection
//    "from the low to mid-90s".
//  - uwaterloo.ca/future-students/programs/mathematics (raw copy): Advanced Functions, Calculus and Vectors, "Any 4U English", "One other
//    4U course"; individual selection "from the mid-80s".
//  - future.utoronto.ca/undergraduate-programs/mathematics/ (raw copy): the Scarborough block (OUAC code TXS) lists ENG4U / EAE4U, MHF4U
//    and MCV4U; the St. George block (TPG) lists ENG4U / EAE4U and MCV4U.
//  - Time: facts-geo.md section 3 (tzdb 2026e).
// Our own material, labelled on the page and checked in verify_ours.py (SymPy 1.14, Python 3.13): worked problem 1 (open box, square
// base, 32 000 cm^3, base of double thickness: C(x) = 2x^2 + 128000/x, minimum at x = cube root of 32 000, about 31.75 cm, height equal
// to the base edge, about 6047.6 cm^2, C(30) = 6066.7 and C(35) = 6107.1 checked); worked problem 2 (line (1, 2, -1) + t(2, -1, 3) and
// plane 2x + y - z = 7: substitution gives 5 = 7, direction dot normal 0, so parallel; distance 2/root 6, about 0.816); twelve practice
// questions and answers; the two-halves table; the exam plan; the ladder.
// Lesson family: model first, then differentiate (write the quantity as a function of one variable before any calculus).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const DOC = '<a class="ag-inline-link" href="https://www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf" rel="noopener" target="_blank">The Ontario Curriculum, Grades 11 and 12: Mathematics (2007)</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'MCV4U TUTOR', blurb: 'Calculus and Vectors from the 2007 Ontario curriculum: derivatives, optimization, lines and planes in three-space, with two worked problems and twelve practice questions.' },
  slug: 'mcv4u-calculus-and-vectors-tutor',
  code: 'mcvt',
  accent: '#545C32',
  accentRationale: 'MCV4U tutor, Canada: a dark olive, #545C32, allocated for this row; exactly 6.0 RGB units from the nearest site accent (#4E5C32, the floor), 19.7 from the nearest built Canada page (#436631), but only 13.3 from the alloc.tsv accent of the unbuilt row math-tutor-markham (#615C2F), under the 14 floor: kept as allocated and flagged in the report; contrast 6.71 on the paper #FBF8F2 and 5.77 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'MCV4U Calculus and Vectors tutor',
  title: 'MCV4U Calculus and Vectors Tutor: Ontario Grade 12 Help',
  description: 'MCV4U tutor for Ontario Grade 12: rates of change, derivatives and vectors from the curriculum, an optimization and a 3D problem, twelve practice questions.',
  ogDescription: 'Calculus and Vectors explained from the 2007 Ontario curriculum: limits, derivative rules, curve sketching, optimization, vectors, lines and planes. Two worked problems, twelve practice questions with reasons, and a plan for the final.',
  twitterDescription: 'MCV4U Calculus and Vectors, strand by strand, with worked problems and practice.',
  pageName: 'MCV4U Calculus and Vectors Tutor',
  webPageDescription: 'A guide for Ontario Grade 12 students and parents to MCV4U, Calculus and Vectors, built from the 2007 curriculum document, with an optimization problem, a lines-and-planes problem, twelve original practice questions and an exam plan.',
  courseDescription: 'Live online MCV4U help for Ontario Grade 12 students, in a batch or one to one, alongside the school course. No Ontario credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'MCV4U tutor',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#covers', label: 'Course content' },
    { href: '#halves', label: 'Calculus vs vectors' },
    { href: '#worked', label: 'Worked problems' },
    { href: '#practice', label: 'Practice' },
    { href: '#exam', label: 'Final exam' }
  ],
  eyebrow: 'Ontario &middot; Grade 12 &middot; MCV4U Calculus and Vectors',
  h1: 'MCV4U Calculus and Vectors tutor for Ontario students',
  lede: 'Calculus and Vectors is two courses sharing one course code. One half asks how fast things change; the other asks students to picture lines and planes in three dimensions and pin them down with equations. This page lays out MCV4U from the ministry&rsquo;s 2007 document, works one optimization problem and one three-dimensional problem in full, and adds twelve practice questions we wrote. We help alongside the school course and do not grant Ontario credits, which only a credit-granting school can award.',
  secondaryCta: { href: '#practice', label: 'See the practice set' },
  wa: 'Hello Modern Age Coders, my teen in Ontario is in MCV4U Calculus and Vectors and could use help alongside the school course. Can we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Calculus and vectors, both halves',
  spec: [
    ['Course', 'MCV4U, Calculus and Vectors'],
    ['Grade', '12, university preparation'],
    ['Needs', 'MHF4U before it or at the same time'],
    ['Halves', 'Derivatives, then vectors in 3D'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Credit', 'None granted: school grants it'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'MCV4U is Calculus and Vectors, Ontario&rsquo;s Grade 12 university-preparation course on rates of change, derivatives and their uses, and vectors, lines and planes in three-space. Advanced Functions must come first or alongside. Modern Age Coders teaches MCV4U live online, in a batch or one to one, in our course Ontario Grade 12 University Math: Advanced Functions and Calculus and Vectors.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Courses that fit alongside MCV4U',
    lede: 'The first is built around the Ontario course. The second and third go further for students heading into engineering, science or math.',
    items: [
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', code: 'MCVT / 01', title: 'Ontario Grade 12 University Math', note: 'MCV4U and MHF4U in the school&rsquo;s unit order, with both the calculus and the vectors halves.' },
      { course: 'ap-calculus-exam-prep', code: 'MCVT / 02', title: 'Calculus', note: 'Derivatives in more depth, then integrals: useful in the summer before a first-year calculus course.' },
      { course: 'college-mathematics-complete-masterclass', code: 'MCVT / 03', title: 'University math', note: 'Linear algebra and calculus at first-year level, for students who finish MCV4U wanting more.' }
    ]
  },

  sections: [
    {
      id: 'covers', tint: 'tint', eyebrow: 'From the curriculum',
      h2: 'What MCV4U covers, strand by strand',
      lede: 'Calculus and Vectors is described in The Ontario Curriculum, Grades 11 and 12: Mathematics (2007). Its description begins: &ldquo;This course builds on students&rsquo; previous experience with functions and their developing understanding of rates of change.&rdquo; Three strands follow, and the third one, on vectors, is often the one families did not expect.',
      body: [
        { kind: 'table', caption: 'MCV4U strands with parts of their overall expectations, from the 2007 Ontario mathematics curriculum (read 22 October 2026)', head: ['Strand', 'In the curriculum&rsquo;s words', 'In practice (our reading)'], rows: [
          ['A. Rate of Change', 'connect average and instantaneous rates of change &ldquo;using the slopes of secants and tangents and the concept of the limit&rdquo;; graph derivatives; apply the rules for derivatives', 'From secant slopes to the derivative, then the power, product and chain rules for polynomial, sinusoidal, exponential, rational and radical functions'],
          ['B. Derivatives and Their Applications', 'connect a function with its first and second derivatives &ldquo;and use the connections in curve sketching&rdquo;; solve problems &ldquo;including optimization problems&rdquo;', 'Increasing and decreasing intervals, maxima and minima, concavity and inflection points, motion problems, and the largest or smallest value of a modelled quantity'],
          ['C. Geometry and Algebra of Vectors', '&ldquo;represent lines and planes using scalar, vector, and parametric equations, and solve problems involving distances and intersections&rdquo;', 'Vectors in two and three dimensions, dot and cross products, equations of lines and planes, and where they meet or how far apart they are']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How the calculus half is framed',
          left: [
            'Limits appear, but lightly. Students look at &ldquo;graphical and numerical examples of limits, and explain the reasoning involved&rdquo;, such as a function approaching an asymptote. The formal epsilon definition belongs to university; MCV4U uses limits to explain where the derivative comes from.',
            'The derivative rules are named precisely: students solve problems &ldquo;using the product and chain rules&rdquo;, and a rational function can be handled as a product with a negative exponent. A footnote adds that &ldquo;The emphasis of this expectation is on the application of the derivative rules and not on the simplification of resulting complex algebraic expressions.&rdquo; Many students lose time simplifying answers that were already acceptable.'
          ],
          rightH3: 'How the vectors half is framed',
          right: [
            'The strand starts from a definition students can say aloud: &ldquo;recognize a vector as a quantity with both magnitude and direction&rdquo;. It then moves into three dimensions, dot and cross products, and finally equations of lines and planes.',
            'One sentence explains why three-space feels different: students learn that &ldquo;a line in three-space cannot be represented by a scalar equation&rdquo;. In two dimensions a single equation such as y = 2x + 1 is enough. In three it is not, so lines are written in vector or parametric form, and the final expectation asks for distances &ldquo;between a point and a plane; between two skew lines&rdquo;.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Who the course is meant for',
          left: [
            'The course description is direct about its audience: careers in science, engineering, economics and some business, &ldquo;including those students who will be required to take a university-level calculus, linear algebra, or physics course.&rdquo; Vectors are the linear algebra preview; derivatives are the calculus preview.',
            'The programme overview says the same from the university side: the course prepares students for programs &ldquo;that include a calculus or linear algebra course in the first year&rdquo;.'
          ],
          rightH3: 'The rule about Advanced Functions',
          right: [
            'MCV4U has no Grade 11 prerequisite of its own. Instead its course page carries a note: &ldquo;The new Advanced Functions course (MHF4U) must be taken prior to or concurrently with Calculus and Vectors (MCV4U).&rdquo; The course table in the same document puts it as Advanced Functions &ldquo;must be taken prior to or concurrently with Calculus and Vectors.&rdquo;',
            'MCV4U is worth one credit, and the curriculum&rsquo;s 70 and 30 split applies: most of the grade comes from the term, the rest from a final evaluation near the end. Ask the teacher early whether that final is one exam or an exam plus a task.'
          ] },
        { kind: 'source', html: 'Source: ' + DOC + ', programme overview, course table and MCV4U pages, read 22 October 2026; the MCV4U record on the ministry&rsquo;s curriculum website, read the same day, gives the same description and the year 2007. Expectations written with symbols are described, not quoted. We are an independent tutoring company with no tie to the Ontario Ministry of Education.' }
      ]
    },
    {
      id: 'halves', tint: 'deep', eyebrow: 'Two halves, two skills',
      h2: 'The calculus half and the vectors half need different habits',
      lede: 'Students who do well on the first half are sometimes surprised by the second, and the reverse also happens. The table below is our own comparison, drawn from what we see in class.',
      body: [
        { kind: 'table', caption: 'What each half of MCV4U asks of a student (ours)', head: ['', 'Calculus half (strands A and B)', 'Vectors half (strand C)'], rows: [
          ['Main question', 'How fast is this changing, and where is it largest or smallest?', 'Where is this object in space, and how does it meet another?'],
          ['Core skill', 'Algebra with functions: rules applied in order, without slips', 'Spatial reasoning: picturing directions, normals and intersections'],
          ['Typical tool', 'A derivative, set equal to zero or checked for sign', 'A dot product, a cross product, or a system of equations'],
          ['Where marks go', 'Domain left out of an optimization; a chain rule step forgotten', 'Dot and cross product confused; parallel and skew lines mixed up'],
          ['Self-check', 'Test a value on each side of a critical point', 'Substitute the answer back into every equation it must satisfy'],
          ['Drawing', 'A sketch of the function and its derivative', 'A rough 3D sketch, even an untidy one, before any algebra']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Chain rule drift', p: 'Students differentiate the outside of a composite function and forget the inside. We make them name the inner function out loud before writing anything.' },
          { h3: 'Optimization without a domain', p: 'A box cannot have a negative side. Writing the allowed interval first decides which critical point counts and whether the endpoints matter.' },
          { h3: 'Dot or cross?', p: 'One gives a number, the other a vector. Asking &ldquo;do I want an angle or a perpendicular direction?&rdquo; settles it every time.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the second derivative causes trouble',
          left: [
            'The curriculum calls the second derivative &ldquo;the rate of change of the rate of change&rdquo;, which is accurate and, for many students, hard to feel. Our way in is motion: position, then velocity, then acceleration. A car can be moving forward while slowing down, and that one picture separates the sign of the first derivative from the sign of the second.',
            'Curve sketching then becomes a table: where f prime changes sign, where f double prime changes sign, and what the function does in between. Practice question 8 asks for exactly that.'
          ],
          rightH3: 'Why three-space problems feel slippery',
          right: [
            'In two dimensions, two lines either meet or are parallel. In three, they can also miss each other entirely without being parallel. Students who carry the 2D picture into 3D answer questions about skew lines as though they were impossible.',
            'We use the corner of a room as a model: the floor, two walls, and the edges where they meet. A line along the floor and a line up the opposite wall never meet and are not parallel. Once that is in a student&rsquo;s head, the algebra has something to describe.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked problems, ours',
      h2: 'One optimization problem and one problem in three-space',
      lede: 'Our own problems, set at the level of an MCV4U test, one from each half of the course. The emphasis is on the decisions: what to name, what to write before differentiating, and how to know the answer is right. SymPy confirmed every number.',
      body: [
        { kind: 'p', html: '<b>Problem 1, optimization.</b> A box with a square base and no lid must hold 32 000 cm<sup>3</sup>. The base is made from a double layer of cardboard; the four sides are a single layer. What dimensions use the least cardboard?' },
        { kind: 'ol', items: [
          '<b>Name the variables and the quantity to minimise.</b> Let x be the base edge and h the height, both in centimetres. Cardboard used: the base counts twice, so C = 2x<sup>2</sup> + 4xh.',
          '<b>Use the constraint to remove one variable.</b> The volume gives x<sup>2</sup>h = 32 000, so h = 32 000 / x<sup>2</sup>. Then C(x) = 2x<sup>2</sup> + 128 000 / x. Calculus only starts once the quantity depends on one variable.',
          '<b>Write the domain before differentiating.</b> x must be positive, and there is no upper limit, so the domain is x &gt; 0. With no endpoints to check, the answer must come from a critical point.',
          '<b>Differentiate and solve.</b> C&prime;(x) = 4x &minus; 128 000 / x<sup>2</sup>. Setting this to 0 gives 4x<sup>3</sup> = 128 000, so x<sup>3</sup> = 32 000 and x is the cube root of 32 000, about 31.75 cm.',
          '<b>Prove it is a minimum.</b> C&Prime;(x) = 4 + 256 000 / x<sup>3</sup>, which is positive for every x &gt; 0, so the graph is concave up everywhere and the critical point is the minimum. A numerical check agrees: C(30) is about 6066.7, C(35) about 6107.1, and the critical value is about 6047.6 cm<sup>2</sup>.',
          '<b>Answer the question that was asked.</b> h = 32 000 / x<sup>2</sup>, and since x<sup>3</sup> = 32 000, h equals x. The optimal box is a cube of edge about 31.75 cm, using about 6048 cm<sup>2</sup> of cardboard.'
        ] },
        { kind: 'p', html: 'The surprise is worth a sentence in a written answer: the double base pushes the shape towards a taller box, and with exactly twice the cardboard per square centimetre on the base, the height ends up equal to the edge. A student who writes that has shown they read their own result, which is what the communication marks reward.' },
        { kind: 'p', mt: true, html: '<b>Problem 2, a line and a plane.</b> The line L has vector equation r = (1, 2, &minus;1) + t(2, &minus;1, 3). The plane &Pi; has equation 2x + y &minus; z = 7. Where does L meet &Pi;? If it does not, find the distance between them.' },
        { kind: 'ol', items: [
          '<b>Write the line in parametric form.</b> x = 1 + 2t, y = 2 &minus; t, z = &minus;1 + 3t. Each coordinate is now a function of the single parameter t.',
          '<b>Substitute into the plane.</b> 2(1 + 2t) + (2 &minus; t) &minus; (&minus;1 + 3t) = 7. Expanding gives 2 + 4t + 2 &minus; t + 1 &minus; 3t = 7, and the t terms cancel: 5 = 7.',
          '<b>Read what the contradiction means.</b> No value of t works, so the line never meets the plane. The t terms cancelling is the signal: it means the direction of the line is perpendicular to the plane&rsquo;s normal, so the line runs parallel to the plane.',
          '<b>Confirm with a dot product.</b> The direction is d = (2, &minus;1, 3) and the normal is n = (2, 1, &minus;1). d &middot; n = 4 &minus; 1 &minus; 3 = 0, so d is perpendicular to n, as step 3 said.',
          '<b>Find the distance.</b> Every point of the line is the same distance from the plane, so use the point (1, 2, &minus;1). Distance = |2(1) + 1(2) &minus; 1(&minus;1) &minus; 7| divided by the length of n, which is the square root of 6. That is |&minus;2| / &radic;6 = 2/&radic;6, about 0.816 units.'
        ] },
        { kind: 'table', mt: true, caption: 'The three things a substitution like step 2 can tell you (ours)', head: ['After substituting, you get', 'It means', 'Example result'], rows: [
          ['One value of t', 'The line crosses the plane at one point', 'Put t back into the line to get the point'],
          ['A false statement, such as 5 = 7', 'The line is parallel to the plane and never meets it', 'Find the distance from any point on the line'],
          ['A true statement, such as 7 = 7', 'Every point of the line is in the plane', 'The line lies in the plane']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the two problems share',
          left: [
            'Both start by reducing the number of unknowns. In the box, the volume removes h. In the line, the parametric form turns three coordinates into one parameter. MCV4U questions that look long usually become short once that reduction is made.',
            'Both also end with a check that uses a different method: a numerical comparison in the first, a dot product in the second. A second method catches errors that rereading the first method never will.'
          ],
          rightH3: 'How a marker reads these',
          right: [
            'Ontario achievement charts give marks for knowledge, thinking, communication and application. In problem 1 the domain sentence and the concavity argument are thinking and communication marks; the derivative itself is knowledge. Students who show only the derivative leave most of the marks on the table.',
            'In problem 2 the sentence that interprets 5 = 7 matters more than the arithmetic. A student who writes &ldquo;no solution&rdquo; and stops has answered half the question.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice, ours',
      h2: 'Twelve MCV4U practice questions',
      lede: 'Our own set, written for this page: nine on the calculus half and three on vectors, in the order a course usually teaches them. None is copied from a textbook, school or board. Answers with reasons are in the next section.',
      body: [
        { kind: 'ol', items: [
          '<b>Limits.</b> Find the limit of (&radic;(4 + h) &minus; 2) / h as h approaches 0.',
          '<b>Power rule.</b> Differentiate f(x) = 3x<sup>4</sup> &minus; 5x<sup>2</sup> + 7x &minus; 2.',
          '<b>Chain rule.</b> Differentiate y = (2x + 1)<sup>5</sup>.',
          '<b>Product rule.</b> Differentiate y = x<sup>2</sup> sin x.',
          '<b>A rational function.</b> Differentiate f(x) = (x<sup>2</sup> + 1)/(x &minus; 1) by writing it as a product.',
          '<b>Exponential and trigonometric.</b> Differentiate y = e<sup>3x</sup> cos x.',
          '<b>Tangent line.</b> Find the equation of the tangent to f(x) = x<sup>3</sup> &minus; 3x<sup>2</sup> &minus; 9x + 5 at x = 1.',
          '<b>Curve sketching.</b> For the same f, find the local maximum, the local minimum and the point of inflection.',
          '<b>Motion.</b> A particle moves along a line with position s(t) = t<sup>3</sup> &minus; 6t<sup>2</sup> + 9t metres at t seconds. When is it at rest, and what is its acceleration at t = 2?',
          '<b>Dot product.</b> For u = (3, &minus;1, 2) and v = (1, 4, &minus;2), find u &middot; v and the angle between the vectors to the nearest degree.',
          '<b>Cross product.</b> Find u &times; v for the same vectors, and the area of the parallelogram they span.',
          '<b>Equation of a plane.</b> Find the scalar equation of the plane through A(1, 0, 2), B(3, 1, 0) and C(0, 2, 1).'
        ] }
      ]
    },
    {
      id: 'answers', tint: 'tint', eyebrow: 'Answers, ours',
      h2: 'Answers and the reasoning behind them',
      lede: 'Each answer gives the result and the one idea that gets you there. All twelve were checked with SymPy.',
      body: [
        { kind: 'ol', items: [
          '<b>1/4.</b> Substituting h = 0 gives 0/0, so rationalise: multiply top and bottom by (&radic;(4 + h) + 2). The top becomes h, which cancels, leaving 1/(&radic;(4 + h) + 2), which approaches 1/4.',
          '<b>f&prime;(x) = 12x<sup>3</sup> &minus; 10x + 7.</b> Apply the power rule term by term; the constant disappears.',
          '<b>y&prime; = 10(2x + 1)<sup>4</sup>.</b> Outside: 5( )<sup>4</sup>. Inside: the derivative of 2x + 1 is 2. Multiply: 5 &times; 2 = 10.',
          '<b>y&prime; = 2x sin x + x<sup>2</sup> cos x.</b> First times the derivative of the second, plus second times the derivative of the first.',
          '<b>f&prime;(x) = (x<sup>2</sup> &minus; 2x &minus; 1)/(x &minus; 1)<sup>2</sup>.</b> Write f = (x<sup>2</sup> + 1)(x &minus; 1)<sup>&minus;1</sup>. The product rule gives 2x(x &minus; 1)<sup>&minus;1</sup> &minus; (x<sup>2</sup> + 1)(x &minus; 1)<sup>&minus;2</sup>, which combines over (x &minus; 1)<sup>2</sup>. Leaving it uncombined is also correct, as the curriculum footnote says.',
          '<b>y&prime; = 3e<sup>3x</sup> cos x &minus; e<sup>3x</sup> sin x.</b> Product rule, with the chain rule inside the exponential: the derivative of e<sup>3x</sup> is 3e<sup>3x</sup>.',
          '<b>y = &minus;12x + 6.</b> f(1) = 1 &minus; 3 &minus; 9 + 5 = &minus;6, and f&prime;(x) = 3x<sup>2</sup> &minus; 6x &minus; 9, so f&prime;(1) = &minus;12. The line through (1, &minus;6) with slope &minus;12 is y + 6 = &minus;12(x &minus; 1).',
          '<b>Local maximum (&minus;1, 10), local minimum (3, &minus;22), inflection point (1, &minus;6).</b> f&prime;(x) = 3(x &minus; 3)(x + 1) is zero at &minus;1 and 3 and changes from positive to negative at &minus;1. f&Prime;(x) = 6x &minus; 6 changes sign at x = 1. The inflection point is also the tangent point from question 7.',
          '<b>At rest at t = 1 s and t = 3 s; acceleration 0 m/s<sup>2</sup> at t = 2.</b> v(t) = 3t<sup>2</sup> &minus; 12t + 9 = 3(t &minus; 1)(t &minus; 3). a(t) = 6t &minus; 12, so a(2) = 0. From t = 1 to t = 2, velocity and acceleration are both negative, so the particle speeds up while moving backwards; at t = 2 its speed peaks at 3 m/s, and from t = 2 to t = 3 it slows down until it stops.',
          '<b>u &middot; v = &minus;5; the angle is about 107&deg;.</b> |u| = &radic;14 and |v| = &radic;21, so cos &theta; = &minus;5/(&radic;14 &times; &radic;21). A negative dot product always means an angle greater than 90&deg;.',
          '<b>u &times; v = (&minus;6, 8, 13); area &radic;269, about 16.40 square units.</b> The magnitude of the cross product is the area of the parallelogram. Check: (&minus;6, 8, 13) &middot; u = &minus;18 &minus; 8 + 26 = 0, so the result is perpendicular to u, as it must be.',
          '<b>3x + 4y + 5z = 13.</b> AB = (2, 1, &minus;2) and AC = (&minus;1, 2, &minus;1); their cross product (3, 4, 5) is a normal. Substituting A gives 3 + 0 + 10 = 13. Check B: 9 + 4 + 0 = 13. Check C: 0 + 8 + 5 = 13.'
        ] }
      ]
    },
    {
      id: 'exam', tint: 'deep', eyebrow: 'Final exam, ours',
      h2: 'Preparing for the MCV4U final exam',
      lede: 'Our plan for the last five weeks. Because the course has two halves with different habits, the plan alternates them rather than revising in textbook order, so neither half goes cold.',
      body: [
        { kind: 'table', caption: 'Question types on a typical MCV4U final, and what a complete answer contains (ours)', head: ['Question type', 'Practise it', 'A full answer includes'], rows: [
          ['Derivative rules', 'Daily, ten short items', 'The rule named, the inner function identified, no forced simplification'],
          ['Curve sketching', 'Twice a week', 'A sign table for f&prime; and f&Prime;, the key points, a sketch that matches the table'],
          ['Optimization', 'Twice a week', 'Variables named, the constraint used, the domain stated, a test that it is a max or min'],
          ['Rates and motion', 'Once a week', 'Units on every answer, and a sentence on what the sign means'],
          ['Vector operations', 'Three times a week', 'The right product chosen, with a check such as a dot product of 0'],
          ['Lines and planes', 'Three times a week', 'A rough sketch, the equations written in one form, the result interpreted geometrically']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Week five: find the leaks.</b> Go through every test of the term and tally lost marks by row of the table above. That tally, not a feeling, decides where the time goes.',
          '<b>Weeks four and three: alternate halves.</b> One calculus day, one vectors day. Start each session with five minutes of derivative drills so the rules stay automatic.',
          '<b>Build a one-page formula sheet by hand.</b> Derivative rules, the dot and cross product formulas, the distance from a point to a plane, and the three outcomes of substituting a line into a plane.',
          '<b>Week two: one full paper under time.</b> Mark it strictly, then redo every question that lost marks on a blank page the next day.',
          '<b>Week one: a second full paper, then only the error list.</b> Read the list of your own mistakes every day. Stop learning new methods.',
          '<b>On the day: answer the question that was asked.</b> If it asks for dimensions, give dimensions with units, not just x.'
        ] }
      ]
    },
    {
      id: 'pathway', tint: 'tint', eyebrow: 'University admission',
      h2: 'Where MCV4U appears in university requirements',
      lede: 'For engineering, mathematics, the physical sciences and many economics and business programs, Calculus and Vectors is on the list. These are listings we read on the universities&rsquo; own pages.',
      body: [
        { kind: 'table', caption: 'Programs listing Calculus and Vectors, from university admission pages (read 22 October 2026)', head: ['Program', 'Required Grade 12 courses listed', 'Average or other notes'], rows: [
          ['University of Waterloo, Software Engineering', '&ldquo;Advanced Functions (minimum final grade of 70% is required)&rdquo;, &ldquo;Calculus and Vectors (minimum final grade of 70% is required)&rdquo;, Chemistry, Physics and English (ENG4U), each with the same 70% floor', 'Individual selection &ldquo;from the low to mid-90s&rdquo;'],
          ['University of Waterloo, Mathematics', 'Advanced Functions, Calculus and Vectors, &ldquo;Any 4U English&rdquo; and &ldquo;One other 4U course&rdquo;', 'Individual selection &ldquo;from the mid-80s&rdquo;'],
          ['University of Toronto Scarborough, Mathematics (TXS)', 'ENG4U / EAE4U, MHF4U and MCV4U', 'Six 4U/M subjects, English among them, as part of the OSSD'],
          ['University of Toronto St. George, Mathematics (TPG)', 'ENG4U / EAE4U and MCV4U', 'MHF4U is not listed separately; see the sequencing note above']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading these requirements correctly',
          left: [
            'A listing of MCV4U alone still implies Advanced Functions, because the curriculum will not let a student take Calculus and Vectors without MHF4U before or alongside it. When a page lists both, it is being explicit rather than asking for more.',
            'Software Engineering adds two sciences and a 70% minimum on each listed course. That floor sits on top of the program average, so a strong average does not rescue a weak Calculus and Vectors mark.'
          ],
          rightH3: 'What we can and cannot do',
          right: [
            'We can make the course understood: the derivative rules automatic, the optimization method reliable, the three-dimensional picture clear. We cannot promise a mark or an offer, and we do not. Admission decisions belong to the universities.',
            'Requirements are revised between application cycles. Check the university&rsquo;s page in the autumn of Grade 12, and treat any table on a tutoring site, ours included, as a starting point.'
          ] },
        { kind: 'source', html: 'Sources, read 22 October 2026: <a class="ag-inline-link" href="https://uwaterloo.ca/future-students/programs/software-engineering" rel="noopener" target="_blank">University of Waterloo, Software Engineering</a>; <a class="ag-inline-link" href="https://uwaterloo.ca/future-students/programs/mathematics" rel="noopener" target="_blank">University of Waterloo, Mathematics</a>; <a class="ag-inline-link" href="https://future.utoronto.ca/undergraduate-programs/mathematics/" rel="noopener" target="_blank">University of Toronto, Mathematics</a>; ' + DOC + '. Neither university is connected with Modern Age Coders.' }
      ]
    },
    {
      id: 'credit', tint: '', eyebrow: 'Credit and clocks',
      h2: 'MCV4U online and summer courses: our part and the school&rsquo;s part',
      lede: 'A search for MCV4U online often means a family wants the credit itself. We are clear about what we offer, because the difference matters for a transcript.',
      body: [
        { kind: 'two',
          leftH3: 'The credit sits with the school',
          left: [
            'An Ontario credit for MCV4U is granted by a school that delivers and evaluates the course, whether that is a day school, a board summer program or a private school allowed to grant credits. Modern Age Coders is a tutoring service: we do not grant Ontario credits and we do not report marks to any school.',
            'What we provide is the teaching around the course: explanations, practice, test review and exam preparation, paced to whatever the school is doing that week.'
          ],
          rightH3: 'Timing the extra help',
          right: [
            'Families most often get in touch in the weeks around the first derivative test and the first vectors test, when the two halves of the course first show their different demands.',
            'Summer MCV4U courses compress a full credit into a few weeks. If a student is taking one, booking help before it starts lets the first week be review rather than a shock.'
          ] },
        { kind: 'p', mt: true, html: 'Class times are set in Eastern time for most of Ontario. Eastern time is UTC-4 until 1 November 2026, UTC-5 from that date, and UTC-4 once more from 14 March 2027. India time, which our teachers keep, is UTC+5:30: 10 hours 30 minutes ahead of Eastern time through the winter and 9 hours 30 minutes ahead in summer. Students in parts of northwestern Ontario that keep a different clock should give us their local time when booking.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'Four stages in Calculus and Vectors',
    lede: 'Stages we see in our own Grade 12 students. A student can be at stage 3 in calculus and stage 1 in vectors, so we place them separately.',
    table: { caption: 'Stages of an MCV4U student (ours)', head: ['Stage', 'Signs to look for'], rows: [
      ['1. Rule follower', 'Differentiates simple polynomials and stalls when a chain rule hides inside a product'],
      ['2. Modeller', 'Can set up an optimization or a line-plane problem, but loses the thread halfway'],
      ['3. Interpreter', 'Says what a derivative sign or a contradiction means, and states the domain without prompting'],
      ['4. University ready', 'Moves between a function, its derivatives and its graph, and between equations of lines and planes, checking each answer a second way']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask which half of the course your teen is in this month. The calculus and the vectors halves can go very differently, and one weak unit is easier to fix than it looks.',
      'If marks drop when vectors begin, it is usually the spatial picture rather than the algebra. Sketching helps more than extra drills.'
    ] },
    right: { h3: 'For students', ps: [
      'Before differentiating anything, write the quantity as a function of one variable and state its domain.',
      'Before solving any three-space problem, sketch it. A messy drawing is better than none.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for senior math and beyond',
    lede: 'A regular teacher leads each course in live online classes, either for a batch or one student at a time.',
    bands: [
      { num: 'I', h3: 'Alongside Grade 12', sub: 'Grades 11 and 12', courses: [
        { code: 'MCVT / G12 / 01', slug: 'ap-precalculus-exam-prep-course', title: 'Precalculus', blurb: 'The function families that MCV4U differentiates.' },
        { code: 'MCVT / G12 / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra repair for students who lose marks on simplification.' },
        { code: 'MCVT / G12 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For a timetable that also includes Data Management.' }
      ] },
      { num: 'II', h3: 'Contests and challenge', sub: 'Grades 9 to 12', courses: [
        { code: 'MCVT / CON / 01', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Euclid preparation alongside Grade 12 math.' },
        { code: 'MCVT / CON / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'Proof-based problems for the strongest students.' },
        { code: 'MCVT / CON / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'For students also applying to universities in the United States.' }
      ] },
      { num: 'III', h3: 'Where the math is used', sub: 'Teens', courses: [
        { code: 'MCVT / USE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Numerical derivatives and 3D vectors in a few lines of code.' },
        { code: 'MCVT / USE / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Vectors and gradients, put to work in real models.' },
        { code: 'MCVT / USE / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Math for data science', blurb: 'Linear algebra and statistics for machine learning.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes that follow the Grade 12 semester',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evenings on Eastern time once the batch is chosen.' },
      { time: 'Weekends', l: 'Morning sessions on Eastern time, useful in test weeks.' },
      { time: '1-on-1', l: 'Fitted around the derivative test, the vectors test and the final.' }
    ],
    cells: [
      { h3: 'Both halves taught', p: 'Calculus and vectors, in the school&rsquo;s order.' },
      { h3: '3D on screen', p: 'Lines and planes drawn and rotated live.' },
      { h3: 'Tests reviewed', p: 'Every lost mark traced to a cause.' },
      { h3: 'Written reasoning', p: 'Full answers, the way markers want them.' },
      { h3: 'Short practice sets', p: 'Between classes, with reasons marked.' },
      { h3: 'Group or private', p: 'Fifteen to twenty in a batch, or one student.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'Several of our senior math students also write code; a few of their projects are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'What families and students wrote on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'The first class is free. Continuing classes are paid monthly for eight live sessions, the amount shows its currency code beside it, and nothing locks you in beyond the month you have paid for.',
    free: ['A free first class', 'Bring a recent MCV4U test', 'No payment details needed'],
    group: ['A batch of fifteen to twenty', 'One teacher all semester', 'Choose the batch time', 'Monthly billing'],
    one: ['One teacher, one student', 'Times around school tests', 'Planned from the school course']
  },

  faq: {
    eyebrow: 'Questions from Ontario families',
    h2: 'MCV4U: frequently asked questions',
    items: [
      { q: 'What is MCV4U?', a: 'MCV4U is Calculus and Vectors, the Grade 12 university-preparation course set out in Ontario\'s 2007 senior mathematics curriculum. Its three strands are rate of change, derivatives and their applications, and the geometry and algebra of vectors, including lines and planes in three-dimensional space.' },
      { q: 'Do you grant the MCV4U credit?', a: 'No. We are a tutoring service working alongside the student\'s school course, and we do not grant Ontario credits. The credit is granted by the school that teaches and evaluates MCV4U, such as a day school, a board summer program or a credit-granting private school.' },
      { q: 'Do I need MHF4U before MCV4U?', a: 'You need it before or at the same time. The 2007 curriculum lets students take Advanced Functions first or in the same term as Calculus and Vectors, but not after. Doing both at once is allowed, but MCV4U uses Advanced Functions ideas such as logarithms, rational functions and radians from its early units.' },
      { q: 'Is MCV4U harder than MHF4U?', a: 'Many students find it harder because it has two different halves. The calculus half rewards careful algebra, and the vectors half rewards spatial reasoning. A student strong in one can struggle in the other, which is why we assess the two halves separately.' },
      { q: 'Does MCV4U teach integration?', a: 'The 2007 Ontario course is about rates of change and derivatives, plus vectors. Its three strands do not include integration, which most students meet in first-year university calculus. Our calculus course covers integrals for students who want a head start.' },
      { q: 'Which programs require MCV4U?', a: 'Many engineering, mathematics, science, economics and business programs list it. On 22 October 2026, Waterloo Software Engineering listed Calculus and Vectors with a 70% minimum, and the University of Toronto Mathematics listings for St. George and Scarborough both named MCV4U.' },
      { q: 'How should a student prepare for the MCV4U exam?', a: 'Start about five weeks before. Tally the lost marks from every term test, alternate calculus days and vectors days, keep derivative rules automatic with short daily drills, and end with two papers sat under exam timing, followed by work on the error list only.' },
      { q: 'Can you help with the vectors unit only?', a: 'Yes. One-to-one classes can focus on a single unit, such as dot and cross products or lines and planes, for as long as it takes. Batch classes follow the course order, so a student joining mid-semester picks up wherever the batch is.' },
      { q: 'When are classes held for students in Ontario?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set in Eastern time, and we confirm them again when the clocks change on 1 November 2026 and 14 March 2027.' },
      { q: 'What do MCV4U classes cost?', a: 'There is no charge for the first class. After it, classes are billed monthly for eight live sessions and can be stopped after any month. Batch and one-to-one amounts, as they stand today, appear in the fees section of this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for Ontario students in their last year of high school math.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All of our pages for Canadian learners.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor for Canada', p: 'Math support across the Canadian grades.' },
      { href: '/calculus-tutoring-online', label: 'Calculus tutoring', p: 'Derivatives and integrals, one to one.' },
      { href: '/ap-calculus-tutoring-online', label: 'AP Calculus tutoring', p: 'For students also writing AP exams.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Programming classes for Ontario students.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests', p: 'The CEMC contest series, explained.' },
      { href: '/online-math-tutor-12th-grade', label: 'Grade 12 math tutoring', p: 'Senior math help for the final year.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method for a live class, in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us which half of MCV4U your teen is in, when the next test is, and what went wrong on the last one. The first class starts from there.',
    readFirst: 'Curious about our method first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a class, and our <a class="ag-inline-link" href="/calculus-tutoring-online">calculus tutoring page</a> covers the derivative side in more detail.',
    note: 'Classes are live video sessions with teachers based in India: no commute, no home visits. For Ontario families, WhatsApp gets the quickest reply.',
    formNote: 'Booking the free class never requires a card.'
  },

  footer: {
    cols: [
      { h4: 'Calculus and beyond', links: [
        { href: '/courses/ap-calculus-exam-prep', label: 'Calculus course' },
        { href: '/courses/college-mathematics-complete-masterclass', label: 'University math course' },
        { href: '/calculus-tutoring-online', label: 'Calculus tutoring' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
        { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests' }
      ] }
    ],
    bottomRight: 'One variable first, then differentiate'
  },

  personalityCss: `
.ag-root.ag-mcvt .ag-hero h1 { letter-spacing: -0.008em; max-width: 23ch; }
.ag-root.ag-mcvt .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-mcvt .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-mcvt .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-mcvt .ag-steps li { margin-bottom: 0.5rem; }
`,

  dossier: {
    curriculumAuthority: 'The Ontario Curriculum, Grades 11 and 12: Mathematics (2007), fetched raw 22 October 2026: MCV4U description and note on MHF4U, programme overview, course table, strands A to C (plain-word fragments of overall expectations), specific expectations A1.4, A3.5 and its footnote, B1.2, B1.4, B2.4, C1.1, C4.2, C4.7. Ontario curriculum content API record for MCV4U (2007). Waterloo Software Engineering and Mathematics admission pages; U of T Mathematics page (Scarborough TXS and St. George TPG blocks).',
    localProject: 'Our two worked problems: an open box with a square base, a 32 000 cm^3 volume and a double-thickness base, minimised with C(x) = 2x^2 + 128000/x to a cube of edge about 31.75 cm, with a concavity argument and a numerical check; and a line r = (1, 2, -1) + t(2, -1, 3) tested against the plane 2x + y - z = 7, where substitution gives 5 = 7, the dot product confirms the line is parallel, and the distance is 2 over root 6. Twelve original practice questions with SymPy-checked answers, the two-halves comparison, a five-week exam plan. Lesson family: model first, then differentiate.',
    requiredMentions: ['This course builds on students&rsquo; previous experience with functions and their developing understanding of rates of change.', 'a line in three-space cannot be represented by a scalar equation', 'using the product and chain rules', 'the rate of change of the rate of change', 'Calculus and Vectors (minimum final grade of 70% is required)', 'University of Toronto St. George, Mathematics (TPG)', 'C(x) = 2x<sup>2</sup> + 128 000 / x', 'r = (1, 2, &minus;1) + t(2, &minus;1, 3)', 'the t terms cancel: 5 = 7', '3x + 4y + 5z = 13', 'Dot or cross?', 'One variable first, then differentiate'],
    sources: [
      { claim: 'MCV4U description, the MHF4U sequencing note, programme overview, course table, strands and expectations.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf' },
      { claim: 'The MCV4U course record: title, year issued 2007, Grade 12 University Preparation, description with the MHF4U note.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=MCR3U,MHF4U,MCV4U,MDM4U,MPM2D,MTH1W,MCF3M,MAP4C,MEL4E&depth=0' },
      { claim: 'Waterloo Software Engineering: required courses with 70% minimums, low to mid-90s.', url: 'https://uwaterloo.ca/future-students/programs/software-engineering' },
      { claim: 'Waterloo Mathematics: Advanced Functions, Calculus and Vectors, mid-80s.', url: 'https://uwaterloo.ca/future-students/programs/mathematics' },
      { claim: 'U of T Mathematics: Scarborough (TXS) lists MHF4U and MCV4U; St. George (TPG) lists MCV4U.', url: 'https://future.utoronto.ca/undergraduate-programs/mathematics/' }
    ],
    rejectedClaims: [
      'That MCV4U includes integration: the three strands do not, so the page says integration usually comes in first-year university.',
      'That St. George Mathematics does not need MHF4U: the page lists MCV4U only, and the ministry note covers MHF4U.',
      'Quoting expectations with notation lost in extraction (inequalities, primes, limits): described instead.',
      'Any mark, offer or admission outcome from our classes: none promised.',
      'Named credit providers, summer schools or individual Ontario schools: none named.',
      'That the quotient rule is required: the curriculum names the product and chain rules, so the page teaches rational functions as products.',
      'An admission year for the U of T listing: none stated, so the read date is given.',
      'Any affiliation with the Ontario Ministry of Education, Waterloo or U of T: none, and the page says so.'
    ]
  }
};
