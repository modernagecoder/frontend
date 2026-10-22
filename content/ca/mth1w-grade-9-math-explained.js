'use strict';
// MTH1W Grade 9 math explained (ag- school course door; Canada cluster Plan 2, row 10).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/mth1w-grade-9-math-explained/; research
// copies in ca/src/ontario; facts-schools-contests.md rows 16 to 21, 45, 54, 58):
//  - Ontario curriculum content service (ws.api.dcp.edu.gov.on.ca), MTH1W course record: code "MTH1W", name "Mathematics", year
//    issued "2021", grade 9, destination "Destreamed"; description "Students will use mathematical processes, mathematical
//    modelling, and coding to make sense of the mathematics they are learning".
//  - Item p___mth1w___information_for_parents__copy_: "Starting September 2021, there will be one new Grade 9 math course for all
//    students."; "This means that there will no longer be applied or academic courses for Grade 9 math."; "There is strong
//    evidence that supports not having Grade 8 students choose between applied and academic courses when they enter Grade 9.";
//    "This is called de-streaming."; "keeping future options open for all students (for example, going to college, university or
//    apprenticeship)"; "The new Grade 9 math course builds on the 2020 elementary (Grades 1 to 8) mathematics curriculum".
//    (The same list names groups of students; that line is left out under the brief's identity rule.)
//  - Item mth1w___g9_specific_curr_context: "This course supersedes the two Grade 9 courses outlined in The Ontario Curriculum,
//    Grades 9 and 10: Mathematics, 2005".
//  - Item mth1w___elements_of_g9_math: the course table (MTH1W prerequisite None; MPM2D "Grade 9 Mathematics, De-streamed (2021),
//    or Grade 9 Principles of Mathematics, Academic (2005)"; MFM2P "Grade 9 Mathematics, De-streamed (2021), or Grade 9 Foundations
//    of Mathematics, Applied (2005)"); "Note: Each of the courses listed above is worth one credit."; "Students will extend and apply
//    coding skills to dynamically represent situations, analyse mathematics concepts, and solve problems in various contexts."
//  - MTH1W strands (mth4w___strands?depth=4): strand titles AA, A to F; C2 "apply coding skills to represent mathematical concepts and
//    relationships dynamically, and to solve problems, in algebra and across the other strands"; C2.1 "use coding to demonstrate an
//    understanding of algebraic concepts including variables, parameters, equations, and inequalities"; C2.2 "create code by
//    decomposing situations into computational steps in order to represent mathematical concepts and relationships, and to solve
//    problems"; C2.3 "read code to predict its outcome, and alter code to adjust constraints, parameters, and outcomes to represent a
//    similar or new mathematical situation"; C2.1 note "store data temporarily", "act as placeholders to represent a quantity that
//    influences the output of a mathematical object but is viewed as being held constant"; teacher note "make connections to prior
//    learning in coding from the elementary grades, such as using loops, conditional statements, and subprograms"; C2.2 situation
//    "determining whether a relationship is linear or non-linear"; C3.3 "compare two linear relations of the form y = a x + b
//    graphically and algebraically, and interpret the meaning of their point of intersection in terms of a given context"; B2.1
//    "express numbers in scientific notation"; D1.2 "including the use of quartile values and box plots"; E1.5 "the side-length
//    relationship for right triangles".
//  - eqao.com/the-assessments/grade-9-math/ (saved 22 October 2026 before eqao.com began returning a Cloudflare 403): "Students
//    enrolled in the MTH1W Grade 9 de-streamed mathematics course are learning the knowledge and skills that are defined in the
//    expectations found in the 2021 Ontario Grade 9 mathematics curriculum."; the final-course-mark sentence (paraphrased here);
//    window "January 12 – February 5, 2027" (written "January 12 to February 5, 2027").
//  - ontario.ca/page/high-school-graduation-requirements (updated September 02, 2026): "3 credits in mathematics (Grade 9, Grade 10 and
//    1 credit in Grade 11 or 12)" for students who started Grade 9 in 2024 or later.
// Our own material, labelled on the page: the candle program (run in Python 3; output pasted), the linear-or-not program (run),
// the five practice questions and answers (checked by program), the study plan, the stages.
// Lesson family: parameters (name the constant, change it, predict the new outcome).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CANDLE = `# Two candles, two linear relations: when are they the same height? (ours)
def height(start, rate, hours):
    """Height in cm of a candle that starts at start cm and burns rate cm per hour."""
    return start - rate * hours

a_start, a_rate = 30, 2      # parameters for candle A
b_start, b_rate = 20, 1      # parameters for candle B

for t in range(0, 16):
    a = height(a_start, a_rate, t)
    b = height(b_start, b_rate, t)
    if a < 0 or b < 0:
        break
    if a == b:
        print("Hour", t, ": both", a, "cm  <- same height")
    elif a > b:
        print("Hour", t, ": A taller,", a, "vs", b)
    else:
        print("Hour", t, ": B taller,", a, "vs", b)`;

const LINEAR = `# Linear or non-linear? Check the first differences (ours)
def is_linear(values):
    first = values[1] - values[0]
    for i in range(2, len(values)):
        if values[i] - values[i - 1] != first:
            return False
    return True

chairs = [6, 10, 14, 18, 22]      # seats around 1 to 5 tables in a row
squares = [1, 4, 9, 16, 25]       # areas of squares with sides 1 to 5
print("chairs:", is_linear(chairs))
print("squares:", is_linear(squares))`;

const SRC_MTH1W = '<a class="ag-inline-link" href="https://www.dcp.edu.gov.on.ca/en/curriculum/secondary-mathematics/courses/mth1w" rel="noopener" target="_blank">The Ontario Curriculum: Mathematics, Grade 9 (MTH1W, 2021)</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'MTH1W', blurb: 'MTH1W, Ontario&rsquo;s de-streamed Grade 9 math course, explained from the 2021 curriculum: the strands, coding expectation C2.1 and a coding-for-algebra example in Python.' },
  slug: 'mth1w-grade-9-math-explained',
  code: 'mtgr',
  accent: '#32648A',
  accentRationale: 'MTH1W explained: a muted lake blue, #32648A, allocated by the Canada Plan 2 grid; 7.6 RGB units from the nearest site accent (#2F5D8A) and at least 14 from every other Canada accent; contrast 5.96 on the paper #FBF8F2 and 5.13 on the deepest tint',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'MTH1W Grade 9 math explained',
  title: 'MTH1W Explained: Ontario De-streamed Grade 9 Math and Coding',
  description: 'MTH1W, the Ontario de-streamed Grade 9 math course, explained from the 2021 curriculum: its strands, what de-streaming means, coding expectation C2.1, Python.',
  ogDescription: 'What MTH1W is, why Ontario Grade 9 math has one course instead of two, what the coding strand asks for, and a worked coding-for-algebra problem in Python, all from the ministry&rsquo;s own curriculum.',
  twitterDescription: 'MTH1W, Ontario&rsquo;s de-streamed Grade 9 math course, explained with a coding-for-algebra example.',
  pageName: 'MTH1W Grade 9 Math Explained',
  webPageDescription: 'A guide for Ontario Grade 9 students and parents to MTH1W, the de-streamed Grade 9 mathematics course issued in 2021, built from the ministry curriculum, with a worked coding-for-algebra example and five practice questions.',
  courseDescription: 'Live online MTH1W help for Ontario Grade 9 students: algebra, linear relations, data, geometry and the coding strand in Python, taught alongside the school course in a batch or one to one. No Ontario credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'MTH1W explained',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#destreamed', label: 'De-streamed' },
    { href: '#strands', label: 'Strands' },
    { href: '#coding', label: 'Coding C2' },
    { href: '#worked', label: 'Worked example' },
    { href: '#after', label: 'After Grade 9' }
  ],
  eyebrow: 'Ontario &middot; Grade 9 &middot; MTH1W, the de-streamed course',
  h1: 'MTH1W explained: Ontario&rsquo;s Grade 9 math course',
  lede: 'MTH1W is the one Grade 9 math course every Ontario student now takes. It replaced a choice between two courses, it asks students to code as part of algebra, and its results feed into a provincial assessment. This guide reads the course straight from the 2021 curriculum documents, then works one coding-for-algebra problem in Python. Our lessons support what the school teaches, and we do not grant Ontario credits: the MTH1W credit comes from the school.',
  secondaryCta: { href: '#worked', label: 'See the worked example' },
  wa: 'Hello Modern Age Coders, my teen is taking MTH1W in Grade 9 in Ontario and would like help alongside the school course. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Algebra with Python',
  spec: [
    ['For', 'Ontario Grade 9, MTH1W'],
    ['Covers', 'All six strands, coding included'],
    ['Code in', 'Python, or the tool the class uses'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Clock', 'Eastern time for most of Ontario'],
    ['Credit', 'None granted: the school awards it'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'MTH1W is Ontario&rsquo;s de-streamed Grade 9 math course, issued in 2021, which replaced the separate applied and academic courses. It covers number, algebra, data, geometry and measurement, and financial literacy, and its coding expectation C2.1 links code to variables and equations. Modern Age Coders gives MTH1W help live online, in a batch or one to one.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for a student taking MTH1W',
    lede: 'Algebra is the heart of the course, so it comes first. The other two cover the wider math and the coding strand.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'MTH / 01', title: 'Algebra Foundations', note: 'Grades 7 to 9. Fractions and negatives repaired, then linear equations and relations: the core of MTH1W Strand C.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'MTH / 02', title: 'High School Math', note: 'Grades 9 to 12. Algebra, geometry and statistics now, with the functions of Grades 10 to 12 in view.' },
      { course: 'maths-through-coding', code: 'MTH / 03', title: 'Math Through Coding', note: 'Up to age 15. Linear relations, geometry and probability written as Python programs, the C2 strand in practice.' }
    ]
  },

  sections: [
    {
      id: 'destreamed', tint: 'tint', eyebrow: 'One course for everyone',
      h2: 'What de-streamed means for Grade 9 math',
      lede: 'Before 2021, Ontario students entering Grade 9 chose between an academic and an applied math course. MTH1W ended that choice. The ministry&rsquo;s parent information puts it simply: &ldquo;Starting September 2021, there will be one new Grade 9 math course for all students.&rdquo;',
      body: [
        { kind: 'table', caption: 'MTH1W at a glance, from the Ontario curriculum website&rsquo;s course record and parent information (read 22 October 2026)', head: ['', 'What the source says'], rows: [
          ['Course code and name', 'MTH1W, Mathematics, Grade 9'],
          ['Year issued', '2021'],
          ['Destination', 'Listed as Destreamed'],
          ['Prerequisite', 'None'],
          ['What changed', '&ldquo;This means that there will no longer be applied or academic courses for Grade 9 math.&rdquo;'],
          ['The term', '&ldquo;There is strong evidence that supports not having Grade 8 students choose between applied and academic courses when they enter Grade 9. This is called de-streaming.&rdquo;'],
          ['What it replaced', '&ldquo;This course supersedes the two Grade 9 courses outlined in The Ontario Curriculum, Grades 9 and 10: Mathematics, 2005&rdquo;'],
          ['What it builds on', '&ldquo;The new Grade 9 math course builds on the 2020 elementary (Grades 1 to 8) mathematics curriculum&rdquo;'],
          ['Credit', '&ldquo;Each of the courses listed above is worth one credit.&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the ministry made the change',
          left: [
            'The parent information lists several benefits it expects from de-streaming, among them &ldquo;setting high academic standards for all students&rdquo;, &ldquo;enabling students with a range of skills and interests to learn together&rdquo; and &ldquo;keeping future options open for all students (for example, going to college, university or apprenticeship)&rdquo;.',
            'The practical effect for a family is that no Grade 8 student has to pick a math track before they know what they want to study. Everyone takes MTH1W, and the choices start in Grade 10.'
          ],
          rightH3: 'What it means in the classroom',
          right: [
            'One course for everyone means one classroom with a wider range of starting points. A student who found Grade 8 math easy sits beside one who found it hard, and the teacher plans for both.',
            'In our first classes we see both kinds of student. The confident ones sometimes coast and then meet linear relations unprepared; the anxious ones often know more than they think. Either way, the remedy is the same: secure fractions, integers and the meaning of a variable early in the term.'
          ] },
        { kind: 'source', html: 'Source: ' + SRC_MTH1W + ', the course record, its context section and its parent information, read through the curriculum website&rsquo;s content service on 22 October 2026. We left out of this page one line of the benefit list that names groups of students. Modern Age Coders works independently of the Ontario Ministry of Education.' }
      ]
    },
    {
      id: 'strands', tint: 'deep', eyebrow: 'Inside the course',
      h2: 'The MTH1W strands and what each one asks',
      lede: 'MTH1W has seven strands in all. The first two, social-emotional learning skills and Mathematical Thinking and Making Connections, run through the course; the other five carry the content. The course description sums up the approach: &ldquo;Students will use mathematical processes, mathematical modelling, and coding to make sense of the mathematics they are learning&rdquo;.',
      body: [
        { kind: 'table', caption: 'MTH1W strands with one expectation quoted from each content strand (MTH1W curriculum, 2021, read 22 October 2026); the last column is ours', head: ['Strand', 'One expectation, quoted', 'What students usually find hard (ours)'], rows: [
          ['AA. Social-Emotional Learning Skills', 'Developed &ldquo;in connection with the expectations across all other strands&rdquo;', 'Sticking with a problem after the first wrong attempt'],
          ['A. Mathematical Thinking and Making Connections', 'Apply the mathematical processes to develop &ldquo;a conceptual understanding of, and procedural fluency with, the mathematics they are learning&rdquo;', 'Explaining a method, not only using it'],
          ['B. Number', 'Use the sign and size of an exponent to &ldquo;express numbers in scientific notation and evaluate powers&rdquo;', 'Negative exponents, and operations with negative fractions'],
          ['C. Algebra', '&ldquo;compare two linear relations of the form y = a x + b graphically and algebraically, and interpret the meaning of their point of intersection in terms of a given context&rdquo;', 'Saying what the point of intersection means in words'],
          ['D. Data', 'Analyse one-variable data in various ways, &ldquo;including the use of quartile values and box plots&rdquo;', 'Reading a box plot backwards, from picture to data'],
          ['E. Geometry and Measurement', 'Solve problems involving &ldquo;the side-length relationship for right triangles in real-life situations&rdquo;', 'Choosing which side is the hypotenuse in a diagram that is turned around'],
          ['F. Financial Literacy', 'Compare how interest rates, borrowing time and down payments affect the cost of a purchase', 'Mostly reading the situation carefully; we teach it from the class materials']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Strand C is the centre of the course',
          left: [
            'Algebra in MTH1W covers expressions and equations (C1), coding (C2), applications of relations (C3) and characteristics of relations (C4). Linear relations appear in three of the four, and coding is expected to support all of them.',
            'The jump from Grade 8 is real. In Grade 8 a student finds a value; in MTH1W they compare whole relations, their rates of change and initial values, and explain what a graph means in context.'
          ],
          rightH3: 'Where coding fits',
          right: [
            'The MTH1W document says students &ldquo;will extend and apply coding skills to dynamically represent situations, analyse mathematics concepts, and solve problems in various contexts.&rdquo; The C2 overall expectation places that work &ldquo;in algebra and across the other strands&rdquo;.',
            'So the coding in MTH1W is not a separate unit to get through. A good teacher uses it whenever a pattern, a relation or a large data set is easier to see by running code than by drawing by hand.'
          ] }
      ]
    },
    {
      id: 'coding', tint: 'tint', eyebrow: 'Expectation C2',
      h2: 'The MTH1W coding expectations, C2.1 to C2.3',
      lede: 'Strand C sets one overall expectation for coding: students will &ldquo;apply coding skills to represent mathematical concepts and relationships dynamically, and to solve problems, in algebra and across the other strands&rdquo;. Three specific expectations sit under it.',
      body: [
        { kind: 'table', caption: 'MTH1W coding expectations, quoted (MTH1W curriculum, 2021, read 22 October 2026); the right column is ours', head: ['Expectation', 'In the curriculum&rsquo;s words', 'In plain language (ours)'], rows: [
          ['C2.1', '&ldquo;use coding to demonstrate an understanding of algebraic concepts including variables, parameters, equations, and inequalities&rdquo;', 'Show you understand algebra by using it in code: store values, hold a constant, test an equation, test a range'],
          ['C2.2', '&ldquo;create code by decomposing situations into computational steps in order to represent mathematical concepts and relationships, and to solve problems&rdquo;', 'Break a situation into steps a computer can follow, then write them'],
          ['C2.3', '&ldquo;read code to predict its outcome, and alter code to adjust constraints, parameters, and outcomes to represent a similar or new mathematical situation&rdquo;', 'Read someone&rsquo;s code, say what it will do, then change it for a new case']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What C2.1 means by its four words',
          left: [
            'The curriculum&rsquo;s examples spell out each idea. Variables are used to &ldquo;store data temporarily&rdquo; and to access and alter it. A parameter acts as a placeholder &ldquo;to represent a quantity that influences the output of a mathematical object but is viewed as being held constant&rdquo;; in y = ax, the a.',
            'Equations in code assign values and test equality; inequalities test a range. In our worked example below, the start height and burn rate are parameters, the height at each hour is a variable, the equal heights are an equation and &ldquo;taller&rdquo; is an inequality.'
          ],
          rightH3: 'Coding arrives with history',
          right: [
            'MTH1W students are not starting from zero. The teacher notes tell teachers to &ldquo;make connections to prior learning in coding from the elementary grades, such as using loops, conditional statements, and subprograms&rdquo;, since Ontario students have had coding in math since Grade 1.',
            'In practice that prior learning varies widely. Some Grade 9 students have written Python for years; others have only dragged blocks once or twice. Neither the curriculum nor the course record names a coding language or tool.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Coding for algebra, ours',
      h2: 'A worked MTH1W example: two linear relations in Python',
      lede: 'A problem we made up for this guide, pitched at MTH1W Strand C. It touches C2.1 (variables, parameters, an equation, inequalities), C2.3 (alter a parameter and predict) and C3.3 (the meaning of a point of intersection). The program ran in Python 3 and the output is printed below it.',
      body: [
        { kind: 'p', html: '<b>The problem.</b> Candle A is 30 cm tall and burns down 2 cm every hour. Candle B is 20 cm tall and burns 1 cm an hour. Both are lit at the same moment. When are they the same height, and what does that moment mean?' },
        { kind: 'ol', items: [
          '<b>Name the relations.</b> Height of A: y = 30 &minus; 2x. Height of B: y = 20 &minus; x, where x is hours since lighting. Both are linear, with negative rates of change.',
          '<b>Pick out the parameters.</b> The start heights (30 and 20) and the burn rates (2 and 1) stay fixed for each candle. In code they become arguments to one function, so the same function serves both candles.',
          '<b>Decompose the situation.</b> For each hour: work out both heights, stop if either candle is gone, then compare. That is C2.2 in four lines.',
          '<b>Solve it by algebra too.</b> 30 &minus; 2x = 20 &minus; x gives x = 10, and both heights are then 10 cm. The code should agree; if it does not, one of them is wrong.',
          '<b>Interpret the intersection.</b> Before hour 10, A is taller; after it, B is taller. The point (10, 10) is the moment the order changes, which is what C3.3 asks students to put into words.'
        ] },
        { kind: 'code', label: 'Python &middot; two candles (ours)', lang: 'python', code: CANDLE, note: 'The run prints one line per hour, from <code>Hour 0 : A taller, 30 vs 20</code> through <code>Hour 9 : A taller, 12 vs 11</code>, then <code>Hour 10 : both 10 cm  &lt;- same height</code>, then <code>Hour 11 : B taller, 8 vs 9</code> and on to <code>Hour 15 : B taller, 0 vs 5</code>. The algebra and the program agree.' },
        { kind: 'two', mt: true,
          leftH3: 'Alter a parameter (C2.3)',
          left: [
            'Change <code>a_rate</code> from 2 to 3 and predict before running. Algebra: 30 &minus; 3x = 20 &minus; x gives x = 5, height 15. The program agrees: <code>Hour 5 : both 15 cm</code>. A faster burn brings the crossing earlier.',
            'Then try a change that breaks the story. Set <code>a_rate</code> to 1, the same as B. The lines are now parallel; A is always 10 cm taller and the candles never match. Ask the student what that means for the equation: 30 &minus; x = 20 &minus; x has no solution.'
          ],
          rightH3: 'Linear or not? (C2.2)',
          right: [
            'One of the situations the curriculum lists for decomposing into steps is &ldquo;determining whether a relationship is linear or non-linear&rdquo;. The short program below does it our way, by checking whether every first difference matches the first one.',
            'The seats around tables in a row grow by 4 each time, so they are linear. The areas of squares grow by 3, 5, 7 and 9, so they are not. The same test, run on a pattern from class, gives a quick check before any graph is drawn.'
          ] },
        { kind: 'code', label: 'Python &middot; linear or non-linear (ours)', lang: 'python', code: LINEAR, note: 'Output: <code>chairs: True</code> and <code>squares: False</code>. The function stops at the first difference that does not match, which is the efficient move: one counterexample is enough.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice, ours',
      h2: 'Five MTH1W coding-for-algebra questions',
      lede: 'Our own questions, built on the two programs above. They are not taken from EQAO, a school or a textbook. Answers follow.',
      body: [
        { kind: 'ol', items: [
          '<b>Predict.</b> Using the <code>height</code> function, what is <code>height(25, 1.5, 4)</code>? What does each argument mean?',
          '<b>Alter.</b> Keep candle B as it is. What burn rate for candle A makes the two candles the same height at hour 5? Check with algebra.',
          '<b>Linear or not.</b> What does <code>is_linear([2, 6, 18, 54])</code> return? Describe the pattern in words.',
          '<b>Read the relation.</b> For candle B, y = 20 &minus; x. What are the rate of change and the initial value, and what does each mean for the candle?',
          '<b>Inequality.</b> For which whole numbers of hours is candle A taller than candle B? Write and solve the inequality, then say how the program&rsquo;s output shows the same answer.'
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>19.0 cm.</b> Start 25, rate 1.5, hours 4: 25 &minus; 1.5 &times; 4 = 19. Python prints 19.0 because a decimal rate makes the result a decimal.',
          '<b>3 cm per hour.</b> 30 &minus; 5r = 20 &minus; 5 gives 5r = 15, so r = 3. Both candles are then 15 cm tall at hour 5, matching the altered run above.',
          '<b>False.</b> The differences are 4, 12 and 36, not equal, so the relation is non-linear. Each term is 3 times the one before, which students meet again as exponential growth.',
          '<b>Rate &minus;1, initial value 20.</b> The candle starts at 20 cm (the y-intercept) and loses 1 cm each hour (the slope). It burns out after 20 hours.',
          '<b>Hours 0 to 9.</b> 30 &minus; 2x &gt; 20 &minus; x gives 10 &gt; x, so x &lt; 10. In the output, every line before hour 10 says A is taller, and hour 10 is the equality.'
        ] }
      ]
    },
    {
      id: 'eqao', tint: 'deep', eyebrow: 'The provincial assessment',
      h2: 'MTH1W and the EQAO Grade 9 math assessment',
      lede: 'Every MTH1W class also meets EQAO&rsquo;s Grade 9 Assessment of Mathematics. EQAO ties the two together in one sentence: &ldquo;Students enrolled in the MTH1W Grade 9 de-streamed mathematics course are learning the knowledge and skills that are defined in the expectations found in the 2021 Ontario Grade 9 mathematics curriculum.&rdquo;',
      body: [
        { kind: 'two',
          leftH3: 'What families need to know',
          left: [
            'The next sitting EQAO shows is a window from January 12 to February 5, 2027, with each school picking its own days. EQAO also states that the result feeds into the MTH1W course mark under ministry policy, without naming a weight, so we name none either.',
            'The window named above is the next one EQAO lists, so a student whose MTH1W course ends at another point in the year should ask the school which sitting applies to them.'
          ],
          rightH3: 'How we prepare students',
          right: [
            'Because the assessment mirrors the classroom curriculum, EQAO tells families it &ldquo;does not require additional preparation&rdquo;. We take that at face value: the preparation that matters is learning MTH1W well, then becoming familiar with the online format through EQAO&rsquo;s own sample test.',
            'Students who want a structured review can work through EQAO&rsquo;s released questions with us. We never promise a level or a mark. Start from EQAO&rsquo;s <a class="ag-inline-link" href="https://www.eqao.com/the-assessments/grade-9-math/" rel="noopener" target="_blank">Grade 9 Assessment of Mathematics page</a>.'
          ] },
        { kind: 'source', html: 'Source: EQAO, <a class="ag-inline-link" href="https://www.eqao.com/the-assessments/grade-9-math/" rel="noopener" target="_blank">Grade 9 Assessment of Mathematics</a> and <a class="ag-inline-link" href="https://www.eqao.com/the-assessments/" rel="noopener" target="_blank">Assessments</a>, saved 22 October 2026. EQAO is an Ontario government agency; we have no connection with it.' }
      ]
    },
    {
      id: 'after', tint: 'tint', eyebrow: 'After Grade 9',
      h2: 'After MTH1W: Grade 10 and the diploma',
      lede: 'MTH1W opens every Grade 10 math pathway. The course table in the MTH1W curriculum shows exactly how.',
      body: [
        { kind: 'table', caption: 'Grade 10 and 11 courses that list MTH1W, from the course table in the MTH1W curriculum document (read 22 October 2026)', head: ['Course', 'Type', 'Prerequisite as listed'], rows: [
          ['MPM2D, Principles of Mathematics, Grade 10', 'Academic', '&ldquo;Grade 9 Mathematics, De-streamed (2021), or Grade 9 Principles of Mathematics, Academic (2005)&rdquo;'],
          ['MFM2P, Foundations of Mathematics, Grade 10', 'Applied', '&ldquo;Grade 9 Mathematics, De-streamed (2021), or Grade 9 Foundations of Mathematics, Applied (2005)&rdquo;'],
          ['MEL3E, Mathematics for Work and Everyday Life, Grade 11', 'Workplace', 'Lists Grade 9 Mathematics, De-streamed (2021) among its options']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The diploma requirement',
          left: [
            'Ontario&rsquo;s graduation requirements page lists, for students who started Grade 9 in 2024 or later, &ldquo;3 credits in mathematics (Grade 9, Grade 10 and 1 credit in Grade 11 or 12)&rdquo;. MTH1W is the first of the three (page updated September 02, 2026).',
            'The credit itself is earned at school. Because we do not grant Ontario credits, a family that needs a credit course turns to the home school, a board&rsquo;s summer program or an Ontario credit provider, and uses us for the teaching around it.'
          ],
          rightH3: 'Planning ahead from Grade 9',
          right: [
            'A student aiming at university math, science or engineering usually heads for the academic Grade 10 course and then Functions in Grade 11. The skills that carry furthest from MTH1W are linear relations, rearranging equations and confidence with negative numbers and fractions.',
            'For Grades 10 to 12, see our <a class="ag-inline-link" href="/online-math-tutor-canada">online math tutoring page for Canada</a>. Students who enjoyed the coding strand often take a computer science course in Grade 11; our <a class="ag-inline-link" href="/ics3u-computer-science-help">ICS3U guide</a> explains that one.'
          ] },
        { kind: 'source', html: 'Both read on 22 October 2026: ' + SRC_MTH1W + ' (course table); <a class="ag-inline-link" href="https://www.ontario.ca/page/high-school-graduation-requirements" rel="noopener" target="_blank">Ontario high school graduation requirements</a>. Course offerings change, so check the school&rsquo;s course calendar in the year your teen chooses.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'Four stages through MTH1W algebra',
    lede: 'Our own stages, from working with Grade 9 students in their first term of de-streamed math.',
    table: { caption: 'Stages of a Grade 9 algebra learner (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Solver', 'Solves a one-step equation and can check the answer by substituting it back'],
      ['2. Grapher', 'Graphs y = ax + b from a table and reads the slope and intercept'],
      ['3. Comparer', 'Compares two relations and explains their point of intersection in context'],
      ['4. Modeller', 'Writes a relation for a new situation, codes it, and changes a parameter to test a prediction']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your teen what the slope means in this week&rsquo;s homework problem, in words, not numbers. That one question shows whether stage 2 is secure.',
      'Stage 3 is where many Grade 9 students stall, and it is the stage the provincial assessment and the course both lean on.'
    ] },
    right: { h3: 'For students', ps: [
      'Say every equation as a sentence about the situation before you solve it.',
      'When you change a number in your code, predict the new output first. If you were wrong, find out why.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for Ontario Grade 9 students',
    lede: 'Each runs as live online lessons with a teacher who knows your teen, in a group or on their own.',
    bands: [
      { num: 'I', h3: 'Math support', sub: 'Grades 8 to 10', courses: [
        { code: 'MTH / SUP / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle School Math', blurb: 'For gaps from Grades 6 to 8 that MTH1W exposes.' },
        { code: 'MTH / SUP / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and Probability', blurb: 'Box plots, scatter plots and what the data says.' },
        { code: 'MTH / SUP / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition Math', blurb: 'For Grade 9 students who want harder problems.' }
      ] },
      { num: 'II', h3: 'The coding strand, extended', sub: 'Teens', courses: [
        { code: 'MTH / COD / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Functions, lists and files, well past MTH1W.' },
        { code: 'MTH / COD / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving for Teens', blurb: 'Algorithms and logic for future programmers.' },
        { code: 'MTH / COD / 03', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior', blurb: 'Waterloo&rsquo;s programming contest, prepared properly.' }
      ] },
      { num: 'III', h3: 'Beyond Grade 9', sub: 'Grades 10 to 12', courses: [
        { code: 'MTH / NXT / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Collect, clean and chart a data set of your own choosing.' },
        { code: 'MTH / NXT / 02', slug: 'ics3u-ics4u-computer-science-companion-course', title: 'Ontario CS Companion', blurb: 'Help alongside ICS3U and ICS4U in Grades 11 and 12.' },
        { code: 'MTH / NXT / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'A second language for students heading to ICS courses.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live MTH1W help that follows the school semester',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Early evening, after school and practice.' },
      { time: 'Weekends', l: 'A Saturday or Sunday morning review hour.' },
      { time: '1-on-1', l: 'Around unit tests and the EQAO window.' }
    ],
    cells: [
      { h3: 'The school&rsquo;s order', p: 'We follow the class unit plan.' },
      { h3: 'Algebra said aloud', p: 'Every equation explained in words.' },
      { h3: 'Code when it helps', p: 'Python for relations and data.' },
      { h3: 'Homework explained', p: 'Understood, never done for them.' },
      { h3: 'Test weeks planned', p: 'Review timed to the school dates.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty teens, or one.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Work by older students who first met code the way MTH1W students do, through math. See the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Reviews from families and students on Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'The first class is on us. From then on, one monthly fee pays for eight live classes, shown in the price box with its currency code; there is no semester contract, and you may stop after any month.',
    free: ['A free first class', 'Bring this week&rsquo;s homework', 'No card at booking'],
    group: ['Fifteen to twenty teens', 'One steady teacher', 'Choose a batch time', 'Billed monthly'],
    one: ['A teacher for your teen alone', 'Times around school tests', 'Built from their unit plan']
  },

  faq: {
    eyebrow: 'Questions from Grade 9 families',
    h2: 'MTH1W: common questions',
    items: [
      { q: 'What is MTH1W?', a: 'MTH1W is the Ontario Grade 9 mathematics course, issued in 2021 and listed as de-streamed. It is the one Grade 9 math course for all students, covering number, algebra, data, geometry and measurement, and financial literacy, with coding and mathematical modelling used throughout.' },
      { q: 'What does de-streamed mean?', a: 'It means Grade 8 students no longer choose between an applied and an academic Grade 9 math course. Ontario\'s parent information says there is strong evidence for not having Grade 8 students make that choice, and that this is called de-streaming. Since September 2021 everyone takes MTH1W.' },
      { q: 'Can my teen earn the MTH1W credit with you?', a: 'No. Our classes run beside the school course, and we do not grant Ontario credits. The credit is earned at the student\'s own school, a board summer program or an Ontario credit provider, while our lessons supply extra teaching and practice.' },
      { q: 'What coding is in MTH1W?', a: 'Expectation C2 asks students to apply coding skills to represent math concepts and relationships and to solve problems, in algebra and across the course. C2.1 asks them to use code to show they understand variables, parameters, equations and inequalities.' },
      { q: 'Which programming language does MTH1W use?', a: 'The curriculum does not name one. Classes use different tools, from block-based editors to Python and spreadsheets. We teach in Python unless the class uses something else, and the algebra ideas carry across.' },
      { q: 'Is MTH1W hard?', a: 'It is a step up from Grade 8, mainly because students compare whole linear relations and explain their meaning, rather than finding single values. Students who are secure with fractions, negative numbers and the idea of a variable usually manage well. No one can promise a mark in advance.' },
      { q: 'What replaced the academic and applied Grade 9 courses?', a: 'MTH1W did. The MTH1W curriculum says the course supersedes the two Grade 9 courses in the 2005 Ontario mathematics curriculum for Grades 9 and 10.' },
      { q: 'Does the EQAO Grade 9 math assessment count?', a: 'It does. EQAO states that the result becomes part of the final MTH1W course mark under the ministry\'s assessment policy, without giving a weight. Its next window runs from January 12 to February 5, 2027.' },
      { q: 'What comes after MTH1W?', a: 'The MTH1W course table lists it as a prerequisite option for the Grade 10 academic and applied courses, MPM2D and MFM2P, and for the Grade 11 workplace course MEL3E. Students who started Grade 9 in 2024 or later need three math credits for the diploma.' },
      { q: 'When can my teen have classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We fix lesson times in your local clock and check them again after Ontario changes its clocks on 1 November 2026.' },
      { q: 'How are lessons paid for?', a: 'We charge nothing for the first lesson. Families then pay monthly for eight live lessons, without a semester contract; the price box higher up gives the current group and private figures.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Ontario high school students and parents.',
    items: [
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Our Ontario page for learners of all ages.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'From Grade 9 math through calculus.' },
      { href: '/online-math-tutor-9th-grade', label: 'Grade 9 math tutor', p: 'One-to-one help in the first high school year.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U help', p: 'Grade 11 computer science, Ontario&rsquo;s first coding credit.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests', p: 'Pascal is the CEMC contest for Grade 9.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every Canadian page we have written.' },
      { href: '/blog/how-to-solve-maths-word-problems', label: 'Word problems', p: 'Turning a paragraph into an equation.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'The structure of our live lessons.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us which MTH1W unit your teen is on and when the next test is. The free class starts from their own homework.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a lesson, and the <a class="ag-inline-link" href="/courses/algebra-foundations-masterclass">Algebra Foundations syllabus</a> lists the topics week by week.',
    note: 'Teaching is live on video, from teachers in India, at hours set for Ontario. There is nowhere to drive; WhatsApp gets the quickest answer.',
    formNote: 'The free class is booked without card details.'
  },

  footer: {
    cols: [
      { h4: 'Grade 9 math', links: [
        { href: '/courses/algebra-foundations-masterclass', label: 'Algebra Foundations' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'High School Math' },
        { href: '/online-math-tutor-9th-grade', label: 'Grade 9 math tutor' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/ics3u-computer-science-help', label: 'ICS3U help' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
      ] }
    ],
    bottomRight: 'Name the parameter, change it, predict'
  },

  personalityCss: `
.ag-root.ag-mtgr .ag-hero h1 { letter-spacing: -0.012em; max-width: 19ch; }
.ag-root.ag-mtgr .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-mtgr .ag-table th { text-transform: uppercase; letter-spacing: 0.04em; }
.ag-root.ag-mtgr .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-mtgr .ag-code-note { line-height: 1.6; }
.ag-root.ag-mtgr .ag-steps li { margin-bottom: 0.55rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario curriculum content service, read raw 22 October 2026: MTH1W course record (code, 2021, Destreamed, description), parent information (one course since September 2021, no applied or academic, de-streaming defined, benefits), curriculum context (supersedes the 2005 Grade 9 courses), elements section (course table, one credit, coding sentence), strands (C2, C2.1 to C2.3 and notes, C3.3, B2.1, D1.2, E1.5). EQAO Grade 9 math page (saved the same day). ontario.ca graduation requirements (updated September 02, 2026).',
    localProject: 'Our two-candle problem (y = 30 - 2x and y = 20 - x) coded in Python with parameters, an equation test and inequality tests, run and printing the crossing at hour 10 (10 cm); a parameter change to rate 3 moving it to hour 5; a first-differences is_linear function run on seats around tables (True) and square areas (False); five original practice questions with answers checked by program. Lesson family: parameters.',
    requiredMentions: ['Starting September 2021, there will be one new Grade 9 math course for all students.', 'This is called de-streaming.', 'This course supersedes the two Grade 9 courses', 'use coding to demonstrate an understanding of algebraic concepts including variables, parameters, equations, and inequalities', 'read code to predict its outcome, and alter code to adjust constraints, parameters, and outcomes', 'Students enrolled in the MTH1W Grade 9 de-streamed mathematics course', 'Hour 10 : both 10 cm', 'a_rate', 'is_linear', 'Grade 9 Mathematics, De-streamed (2021), or Grade 9 Foundations of Mathematics, Applied (2005)'],
    sources: [
      { claim: 'MTH1W course record: code, year issued 2021, Destreamed, description.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code=MTH1W&depth=0' },
      { claim: 'Parent information: one course since September 2021, de-streaming defined.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/p___mth1w___information_for_parents__copy_?depth=4' },
      { claim: 'Supersedes the 2005 Grade 9 courses.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/mth1w___g9_specific_curr_context?depth=4' },
      { claim: 'Course table and one-credit note; coding sentence.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/mth1w___elements_of_g9_math?depth=4' },
      { claim: 'MTH1W strands, C2 coding expectations and notes.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/mth4w___strands?depth=4' },
      { claim: 'EQAO: MTH1W link to the assessment, course-mark rule, 2027 window.', url: 'https://www.eqao.com/the-assessments/grade-9-math/' },
      { claim: 'Three math credits for students starting Grade 9 in 2024 or later.', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' }
    ],
    rejectedClaims: [
      'An explanation of the old applied and academic split from memory: only the sources\' wording is used.',
      'The benefit line in the parent information that names groups of students: left out under the brief\'s identity rule.',
      'A weighting for the EQAO result in the course mark: EQAO gives none.',
      'That a newer Grade 10 course has replaced MPM2D and MFM2P: not checked; the page quotes the MTH1W course table with its read date.',
      'Reusing the curriculum\'s own coding examples (y = 2x + 3, counter = counter + 1): the candle and table-seating examples are ours.',
      'Granting or brokering the MTH1W credit: we do not grant Ontario credits, said near the top and in an FAQ.',
      'Any mark or EQAO level from our classes: none promised.'
    ]
  }
};
