'use strict';
// Math-U-See tutor (ag- curriculum help door; UK and US exams cluster Phase 2, row US083, group B17).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md (writer brief, rule 10). Sources read raw with curl on
// 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/math-u-see-tutor/):
//  - mathusee.com/products/math-u-see-curriculum/: "The curriculum consists of 13 levels, building from an introduction to
//    mathematics through calculus."; level sequence Primer, Alpha, Beta, Gamma, Delta, Epsilon, Zeta, Pre-Algebra, Algebra 1,
//    Geometry, Algebra 2, PreCalculus, Calculus, each with its subtitle; mastery approach ("Focuses on mastering fundamental
//    concepts and skills before moving on to a new topic"); Four-Step Approach (Preparation, Presenting, Practice,
//    Progression); "Build: Use the manipulatives to demonstrate and model the problems."; "Write: Write down step-by-step
//    solutions while working through the problems."; Say = talk through the why; "Mastery means that the student not only
//    understands a new concept but can also apply the concept independently to solve a problem."; teach back "using the
//    Build, Write, Say method"; Lesson Practice pages, Systematic Review pages, Tests booklet (except for Primer), Digital
//    Toolbox; "More than 300 public school districts"; tutoring paragraph ("it is important for tutors to become familiar
//    with the core principles of Math-U-See"); co-op paragraph ("the program is designed to be student-paced").
//  - mathusee.com/products/math-u-see-curriculum/algebra-1/ (Legacy Edition): topic paragraph; "Students view one video per
//    lesson and decide whether to take notes."; "basic coverage of Algebra 1 topics"; the Principles of Secondary
//    Mathematics edition "covers nationally expected topics for Algebra 1"; 35 lessons (titles not reproduced beyond topic
//    names); readiness list; components (Instruction Manual with solutions, lesson videos, Student Workbook with Lesson
//    Practice, Systematic Review, and Application and Enrichment worksheets, Test booklet, Integer Block Kit,
//    Algebra/Decimal Insert Kit); "The Integer Block Kit is a 133-piece set".
//  - mathusee.com/products/math-u-see-curriculum/pre-algebra/ and /delta/: subtitle paragraphs, 30 lessons each, readiness
//    lists ("Recall single-digit multiplication facts from memory"; "Demonstrate a multiplication problem by building or
//    drawing a rectangle"; "Proficiently add, subtract, multiply, and divide fractions").
//  - mathusee.com/products/integrated-manipulatives/: integer blocks used "from our introductory level ( Primer ) all the way
//    through Algebra 1"; Fraction Overlay Kit used in Epsilon; Algebra/Decimal Insert Kit used in Zeta, Pre-Algebra and
//    Algebra 1.
//  - mathusee.com/digital-tools/placement-tool/: "Using Greek letters for levels instead of age or grade ensures that
//    students can build strength where needed and progress without pressure or self-consciousness."; placement tools
//    identify mastered concepts and gaps; Placement Specialists.
// Not used: prices and subscription tier names, the founder's biography and faith ministry, phone numbers, lesson content,
// sample PDFs, worksheets and solutions.
// Our own material, labelled: the rectangle factoring of x^2 + 5x + 6, the place-value split of 744 / 6, -7 + 4 by zero
// pairs, 3/4 of 28, the unit multiplier for 90 minutes, the Python factor-pair search, the stall table and the practice set.
// Lesson family: building a concept with blocks or an area picture, writing it, then saying why (teach-back).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH', blurb: 'Help for families using Math-U-See: the thirteen Greek-letter levels, Build, Write, Say, and a live teacher for the move to algebra.' },
  slug: 'math-u-see-tutor',
  code: 'mus',
  accent: '#1B4761',
  accentRationale: 'Math-U-See tutor: a deep slate blue, #1B4761 as allocated, calm and block-like, about 9.3:1 on the #FBF8F2 paper and well clear of the other curriculum pages',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Math-U-See tutor',
  title: 'Math-U-See Tutor Online: Live Help From Delta to Algebra 1',
  description: 'A Math-U-See tutor online for homeschool families: the 13 levels, the Build, Write, Say lesson, where students stall, and live help from Delta up to Algebra 1.',
  ogDescription: 'Math-U-See teaches with blocks, a video and the Build, Write, Say method. When the blocks stop and the symbols take over, some children need a person to talk the reasoning through. How a live tutor fits in.',
  twitterDescription: 'Live help for Math-U-See students: build it, write it, say why, with a teacher listening.',
  pageName: 'Math-U-See Tutor',
  webPageDescription: 'A guide for US families using Math-U-See, built from mathusee.com checked on 31 October 2026; the worked examples, stall points and practice problems are written by Modern Age Coders.',
  courseDescription: 'Live online math lessons for students working through Math-U-See, from Delta division to Algebra 1, taught with the build, write and explain habit, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Math-U-See tutor',
  navLinks: [
    { href: '#levels', label: 'Levels' },
    { href: '#lesson', label: 'The lesson' },
    { href: '#stalls', label: 'Stall points' },
    { href: '#examples', label: 'Examples' },
    { href: '#alongside', label: 'With a tutor' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Math-U-See Primer to Calculus &middot; Live help with the hard levels',
  h1: 'Math-U-See tutor online, for the levels where blocks turn into algebra',
  lede: 'Math-U-See, published by Demme Learning, teaches each idea three ways at once: a child builds it with color-coded blocks, writes the steps, and says out loud why they work. In a homeschool that rhythm is usually led by a parent. It runs smoothly for years, then a level arrives where the parent is unsure of the math, or the child can build a problem but cannot yet do it on paper. That is where a live Math-U-See tutor helps, inside the method the family already uses.',
  secondaryCta: { href: '#examples', label: 'See the worked examples' },
  wa: 'Hello Modern Age Coders, my child uses Math-U-See and needs help at the current level. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['Publisher', 'Demme Learning'],
    ['Levels', '13, Primer to Calculus'],
    ['Lesson', 'Build, Write, Say'],
    ['Manipulatives', 'Integer blocks, Primer to Algebra 1'],
    ['Our help', 'Live online lessons'],
    ['Formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Math-U-See is a mastery-based math curriculum from Demme Learning with 13 levels named by Greek letters and subjects, from Primer through Calculus, taught with integer blocks, a lesson video and a Build, Write, Say routine. A Math-U-See tutor works live with the student on the current lesson, especially from Delta to Algebra 1. Modern Age Coders runs these lessons live online in its Algebra Foundations course, as a group batch or 1-on-1, and the first class costs nothing.',

  picks: {
    eyebrow: 'Courses that sit beside the levels',
    h2: 'Live courses picked for Math-U-See students',
    lede: 'Your child keeps the Math-U-See book, blocks and video. These classes add a teacher who asks them to explain.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'MUS / 01', title: 'Algebra foundations', note: 'For Pre-Algebra and Algebra 1: negatives, solving for the unknown, graphing and factoring.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MUS / 02', title: 'Middle school math', note: 'For Epsilon and Zeta: fractions, decimals, percents and ratio.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'MUS / 03', title: 'Elementary math', note: 'For Gamma and Delta: multiplication facts, long division and place value.' }
    ]
  },

  sections: [
    {
      id: 'levels', tint: 'tint', eyebrow: 'The levels',
      h2: 'What are the Math-U-See levels, in order?',
      lede: 'Math-U-See names its levels with Greek letters and subjects rather than grades. Demme Learning says the curriculum "consists of 13 levels, building from an introduction to mathematics through calculus."',
      body: [
        { kind: 'table', caption: 'Math-U-See curriculum sequence as published on mathusee.com (checked 31 October 2026), with a note from our teachers on each', head: ['Level', 'Subject, in Demme Learning\'s words', 'What we often see at this level'], rows: [
          ['Primer', 'An Introduction to Mathematics', 'Counting, place value with blocks, first addition'],
          ['Alpha', 'Single-Digit Addition &amp; Subtraction', 'Facts that must become automatic before Beta'],
          ['Beta', 'Multiple-Digit Addition &amp; Subtraction', 'Regrouping, which blocks make visible'],
          ['Gamma', 'Single &amp; Multiple-Digit Multiplication', 'Times tables as rectangles'],
          ['Delta', 'Single &amp; Multiple-Digit Division', 'Long division and remainders'],
          ['Epsilon', 'Fractions', 'Equivalent fractions and common denominators'],
          ['Zeta', 'Decimals &amp; Percents', 'Place value to the right of the point'],
          ['Pre-Algebra', 'Negative Numbers, Order of Operations, and Solving for the Unknown', 'The first level where symbols lead'],
          ['Algebra 1', 'Graphing, Simultaneous Equations, Exponents, Polynomials, and Unit Multipliers', 'Two editions; see below'],
          ['Geometry', 'Points, Lines, Planes, Angles, Circles, Triangles, Quadrilaterals, Pythagorean Theorem, Conic Sections, and Proofs', 'Proof is a new kind of writing'],
          ['Algebra 2', 'Factoring Polynomials, Quadratic Formula, and Graphing Conic Sections', 'Heavy factoring practice pays off'],
          ['PreCalculus', 'with Trigonometry, Identities, Polar Equations, Logarithms, Sequences, Limits, and Other Topics to Prepare for Calculus', 'Functions as a single language'],
          ['Calculus', 'Derivatives, Integrals, Calculus Applications, and Differential Equations', 'Built on secure algebra']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why letters, not grades',
          left: [
            'Demme Learning explains the naming directly: "Using Greek letters for levels instead of age or grade ensures that students can build strength where needed and progress without pressure or self-consciousness."',
            'For a family that means a ten-year-old in Delta and a nine-year-old in Epsilon are both simply on their next level. We follow the same idea in class: we ask which lesson your child is on, not which grade.'
          ],
          rightH3: 'Two Algebra 1 editions',
          right: [
            'The Algebra 1 page lists a Legacy Edition and Algebra 1: Principles of Secondary Mathematics. Demme Learning says the Legacy Edition gives "basic coverage of Algebra 1 topics", while the Principles edition "covers nationally expected topics for Algebra 1".',
            'Tell us which edition your child uses when you book. The topics overlap, but the order and depth differ, and we plan the class around the book on your table.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://mathusee.com/products/math-u-see-curriculum/" rel="noopener" target="_blank">Math-U-See Curriculum</a>, the <a class="ag-inline-link" href="https://mathusee.com/products/math-u-see-curriculum/algebra-1/" rel="noopener" target="_blank">Algebra 1: Legacy Edition page</a> and the <a class="ag-inline-link" href="https://mathusee.com/digital-tools/placement-tool/" rel="noopener" target="_blank">placement page</a>, checked 31 October 2026. Math-U-See is a trademark of Demme Learning. Modern Age Coders is not affiliated with or endorsed by Demme Learning.' }
      ]
    },
    {
      id: 'lesson', tint: 'deep', eyebrow: 'The lesson',
      h2: 'How is a Math-U-See lesson structured?',
      lede: 'Every lesson follows what Demme Learning calls its Four-Step Approach. The second step holds the method the curriculum is known for: Build, Write, Say.',
      body: [
        { kind: 'table', caption: 'The Math-U-See Four-Step Approach (mathusee.com curriculum page, checked 31 October 2026), with what each step asks of a parent (our reading)', head: ['Step', 'What Math-U-See says', 'In practice at home'], rows: [
          ['1. Preparation', 'Look over the Instruction Manual, watch the lesson videos and get familiar with the Student Workbook pages', 'A few minutes for the parent before the child starts'],
          ['2. Presenting', 'Work examples together using the Build, Write, Say method', 'The heart of the lesson, done side by side'],
          ['3. Practice', 'Lesson Practice pages until mastery is achieved', 'The child works alone, with help when needed'],
          ['4. Progression', 'Systematic Review pages, then the Tests booklet (except for Primer)', 'Move on only when mastery is shown']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Build', p: 'In Demme Learning\'s words, "Build: Use the manipulatives to demonstrate and model the problems." The integer blocks are color-coded by value, so a 7 and a 3 look different before they are counted.' },
          { h3: 'Write', p: 'Again from the curriculum page: "Write: Write down step-by-step solutions while working through the problems." The written record is what carries forward once the blocks are put away.' },
          { h3: 'Say', p: 'The third part asks the child to talk through why the concept works as they build and write. It is the step most likely to be skipped on a busy day, and the one a tutor can protect.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What mastery means here',
          left: [
            'Math-U-See defines it carefully: "Mastery means that the student not only understands a new concept but can also apply the concept independently to solve a problem." It adds that the student can teach back the concept using the Build, Write, Say method.',
            'That teach-back test is a gift to any tutor. It gives a clear, shared signal for when a lesson is done, which the parent, the child and the teacher can all check.'
          ],
          rightH3: 'The pages in the workbook',
          right: [
            'For Algebra 1: Legacy Edition, the site lists a Student Workbook with Lesson Practice, Systematic Review, and Application and Enrichment worksheets, a separate Test booklet, an Instruction Manual with detailed instructions and solutions, and lesson videos.',
            'The site says a student who shows mastery quickly may not need every Systematic Review page, and that a student who has not yet mastered a concept may need more practice, reteaching and review, with extra resources on its Digital Toolbox.'
          ] },
        { kind: 'table', mt: true, caption: 'Which Math-U-See manipulatives go with which levels (mathusee.com integrated manipulatives page, checked 31 October 2026)', head: ['Kit', 'Where Math-U-See uses it'], rows: [
          ['Integer Block Kit (described as a 133-piece set)', 'From Primer all the way through Algebra 1'],
          ['Fraction Overlay Kit', 'Fractions in Epsilon'],
          ['Algebra/Decimal Insert Kit', 'With the integer blocks, for decimals and algebra in Zeta, Pre-Algebra and Algebra 1']
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://mathusee.com/products/integrated-manipulatives/" rel="noopener" target="_blank">Math-U-See Integrated Manipulatives</a>, checked 31 October 2026. We describe the kits only so you know what your child should have on the desk during a live lesson.' }
      ]
    },
    {
      id: 'ready', tint: 'tint', eyebrow: 'Readiness',
      h2: 'How do I know my child is ready for the next Math-U-See level?',
      lede: 'Demme Learning publishes a short readiness list on each level page and offers an interactive placement tool with yes or no questions and example problems. Three of those lists are a useful map of where children tend to need help.',
      body: [
        { kind: 'table', caption: 'Readiness points from three Math-U-See level pages (mathusee.com, checked 31 October 2026), summarized', head: ['Before starting', 'Math-U-See says the student may be ready if they can'], rows: [
          ['Delta', 'Add or subtract multiple-digit numbers with regrouping; "Recall single-digit multiplication facts from memory"; "Demonstrate a multiplication problem by building or drawing a rectangle"'],
          ['Pre-Algebra', 'Work fluently with multiple-digit whole numbers; "Proficiently add, subtract, multiply, and divide fractions", mixed numbers and decimals; convert between fraction, decimal and percent; choose the operation for a word problem'],
          ['Algebra 1: Legacy', 'Do all four operations with whole numbers, fractions, mixed numbers and decimals; convert between forms; solve one-step equations; plot points; operate with integers; write an expression for a word problem']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Use the publisher\'s placement tool first.</b> Math-U-See says its tools identify concepts already mastered and any conceptual gaps, and that its Placement Specialists can help with the results.',
          '<b>Read the readiness list for the next level aloud with your child.</b> Ask them to show one item from each line with blocks or on paper.',
          '<b>Watch for the item that takes longest.</b> That is usually the gap, and it is often from two levels back rather than the current one.',
          '<b>Book a free class with that item.</b> We start there, inside Math-U-See\'s own order, rather than skipping ahead.'
        ] }
      ]
    },
    {
      id: 'stalls', tint: 'deep', eyebrow: 'Stall points',
      h2: 'Where do children commonly get stuck in Math-U-See?',
      lede: 'Every curriculum has places where the work changes character. These are the Math-U-See transitions our teachers see most often in live lessons; they are general teaching guidance, not statistics.',
      body: [
        { kind: 'table', caption: 'Common stall points in a Math-U-See sequence and what helps (our teaching notes)', head: ['Transition', 'What changes', 'What tends to help'], rows: [
          ['Gamma to Delta', 'Division asks the child to run multiplication backwards', 'Rebuild the rectangle and ask what side is missing'],
          ['Delta to Epsilon', 'Fractions mean a part of one, not a count', 'Name the whole first, every time'],
          ['Zeta to Pre-Algebra', 'Negative numbers break the idea that adding makes bigger', 'Zero pairs, built and then drawn'],
          ['Pre-Algebra to Algebra 1', 'The blocks step back and symbols carry the meaning', 'Keep saying the why even after the blocks go away'],
          ['Inside any level', 'Systematic Review pages feel like repetition', 'Treat review as the check that mastery has lasted']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The quiet sign: build yes, write no',
          left: [
            'A child who can model a problem with blocks but freezes at the written version has the concept but not the notation. That is not a reason to return to an earlier level.',
            'In class we put the build and the written step side by side, line by line, until the child can do the writing without the blocks and still describe what the blocks would show.'
          ],
          rightH3: 'The other sign: write yes, say no',
          right: [
            'The opposite also happens. The answers are right, but the child cannot explain them, which usually means the steps were copied from the video or the manual\'s examples.',
            'Math-U-See\'s own mastery test asks the child to teach the idea back. We use that test in every class, gently, and it quickly shows whether a page of right answers is really understood.'
          ] }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'What does Build, Write, Say look like on real problems?',
      lede: 'Original examples written by our teachers on topics from the Math-U-See sequence, from Delta to Algebra 1. None of them is taken from a Math-U-See book.',
      body: [
        { kind: 'table', caption: 'Factoring x squared + 5x + 6 as a rectangle, an Algebra 1 topic (our example)', head: ['Part', 'What the student does', 'What the student says'], rows: [
          ['Build', 'Lay out one x-by-x square, five x-by-1 strips and six unit squares, then arrange all of them into one rectangle', '"I need the pieces to make a rectangle with no gaps."'],
          ['Build', 'The only rectangle that works has sides x + 2 and x + 3', '"Two strips go down one side and three along the other, and the six units fill the corner."'],
          ['Write', 'x squared + 5x + 6 = (x + 2)(x + 3)', '"The sides of the rectangle are the factors."'],
          ['Check', '(x + 2)(x + 3) = x squared + 3x + 2x + 6 = x squared + 5x + 6', '"Multiplying the sides gives back the area I started with."'],
          ['Say', 'Two numbers multiply to 6 and add to 5', '"The corner must be 6 units and the strips must total 5, so I need 2 and 3."']
        ] },
        { kind: 'code', mt: true, label: 'factor_pairs.py (our example)', lang: 'Python 3', code: 'def rectangle_sides(b, c):\n    """Find whole numbers p, q with p * q == c and p + q == b."""\n    for p in range(1, c + 1):\n        if c % p == 0:\n            q = c // p\n            if p + q == b:\n                return p, q\n    return None\n\nprint(rectangle_sides(5, 6))    # x^2 + 5x + 6\nprint(rectangle_sides(7, 12))   # x^2 + 7x + 12\nprint(rectangle_sides(4, 6))    # x^2 + 4x + 6', note: 'Output: (2, 3), then (3, 4), then None. The last trinomial has no whole-number rectangle, which is exactly what happens when a child tries to build it with blocks and always has pieces left over. We use small programs like this with older students who also learn to code.' },
        { kind: 'two', mt: true,
          leftH3: 'Long division by place value (Delta)',
          left: [
            'Our problem: 744 divided by 6. Build 744 as 7 hundreds, 4 tens and 4 units. Share the hundreds into 6 equal groups: each group gets 1 hundred, and 1 hundred is left over.',
            'Trade the leftover hundred for 10 tens, so there are 14 tens. Each group gets 2 tens, with 2 tens left. Trade those for 20 units, making 24 units, and each group gets 4. Write it: 744 / 6 = 124. Say it: "Every trade keeps the value the same; only the block size changes." Check: 6 x 124 = 744.'
          ],
          rightH3: 'Negative numbers with zero pairs (Pre-Algebra)',
          right: [
            'Our problem: -7 + 4. Build seven negative units and four positive units. Each positive and negative unit together make zero, so remove four pairs. Three negative units remain.',
            'Write it: -7 + 4 = -3. Say it: "Pairs that make zero do not change the total, so I can take them away." The same picture explains why 4 - 7 is also -3.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'A fraction of a number (Delta and Epsilon)',
          left: [
            'Our problem: three quarters of 28. Build 28 and split it into 4 equal groups of 7. Three of those groups make 21.',
            'Write it: 28 / 4 = 7, then 7 x 3 = 21. Say it: "The bottom number tells me how many equal groups; the top number tells me how many groups I keep."'
          ],
          rightH3: 'A unit multiplier (Algebra 1)',
          right: [
            'Our problem: how many hours is 90 minutes? Multiply by a fraction equal to one: 90 minutes x (1 hour / 60 minutes) = 90/60 hours = 1.5 hours.',
            'Say it: "One hour over sixty minutes is worth exactly 1, so multiplying by it changes the units but not the amount, and the minutes cancel."'
          ] },
        { kind: 'table', mt: true, caption: 'Practice set in the same style (ours; answers in brackets)', head: ['Problem', 'Build or draw first, then write'], rows: [
          ['x squared + 7x + 12', 'Rectangle with sides x + 3 and x + 4 [(x + 3)(x + 4)]'],
          ['852 / 4', 'Trade hundreds for tens as you share [213]'],
          ['-5 + 9', 'Remove zero pairs [4]'],
          ['Two fifths of 35', 'Five groups of 7, keep two [14]'],
          ['150 seconds in minutes', 'Multiply by 1 minute over 60 seconds [2.5 minutes]'],
          ['0.3 x 0.4', 'Shade 3 tenths across and 4 tenths down on a hundredths square [0.12]']
        ] }
      ]
    },
    {
      id: 'alongside', tint: 'deep', eyebrow: 'With a tutor',
      h2: 'How can a live tutor support a Math-U-See lesson?',
      lede: 'Math-U-See itself says the curriculum can be used for tutoring and that tutors should become familiar with its core principles. Our classes keep its lesson order and its Build, Write, Say rhythm; the teacher adds questions and fresh problems.',
      body: [
        { kind: 'ol', items: [
          '<b>Tell us the level, edition and lesson.</b> For Algebra 1 or Algebra 2, say whether it is the Legacy Edition or Principles of Secondary Mathematics.',
          '<b>Keep the blocks within reach.</b> On camera, your child builds; the teacher watches the build and asks what each piece stands for.',
          '<b>Write together.</b> The teacher asks for every written line to match a move with the blocks, until the blocks are no longer needed.',
          '<b>Say it back.</b> Each class ends with your child teaching one idea to the teacher, which is the publisher\'s own mastery check.',
          '<b>Practise with new problems.</b> Our teachers write fresh problems on the same lesson topic, so the Lesson Practice and Systematic Review pages stay yours to use as the book intends.',
          '<b>Move on with the book.</b> When the teach-back is clear and the Tests booklet goes well, your child moves to the next lesson in Math-U-See, not in our plan.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Parent-led Math-U-See may suit', p: 'A child in the early levels whose parent enjoys the Build, Write, Say routine and has time for it each day.' },
          { h3: 'Math-U-See plus a batch may suit', p: 'A Pre-Algebra or Algebra 1 student who benefits from hearing others explain their steps, in a group of fifteen to twenty.' },
          { h3: 'Math-U-See plus 1-on-1 may suit', p: 'A student with a gap two levels back, or a parent who wants the teacher to lead the Presenting step at the harder levels.' }
        ] },
        { kind: 'p', mt: true, html: 'Co-ops that use Math-U-See face the same balance. The curriculum page reminds instructors that the program "is designed to be student-paced", so a group class works best as a place for reasoning out loud, with each child still moving through their own level at home.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Blocks to symbols',
    h2: 'How a Math-U-See student moves from blocks to symbols',
    lede: 'Our description of the stages we see as children move through the levels.',
    table: { caption: 'From concrete to abstract (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Building', 'Can model the problem with blocks, with help'],
      ['2. Matching', 'Writes each step next to the matching build'],
      ['3. Picturing', 'Draws the blocks or imagines them instead of using them'],
      ['4. Explaining', 'Writes the steps alone and teaches the reason back']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the turning point. A child who can describe what the blocks would show, without touching them, is ready for the symbol-heavy levels.',
      'If the blocks have quietly disappeared before stage 3, bring them back for a week. That is not a step backwards.'
    ] },
    right: { h3: 'For students', ps: [
      'When you are stuck, build it. When you are not stuck, say why.',
      'If you can teach your parent the lesson, you have finished it.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Live math courses mapped to Math-U-See levels',
    lede: 'Choose by the level on your child\'s book, not by grade.',
    bands: [
      { num: 'I', h3: 'Primer to Delta', sub: 'Counting to long division', courses: [
        { code: 'MUS / A / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Concrete play for Primer-age children.' },
        { code: 'MUS / A / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Facts, regrouping, multiplication, division.' },
        { code: 'MUS / A / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Number sense to make facts stick.' },
        { code: 'MUS / A / 04', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Patterns and spatial thinking, ages 6 to 9.' }
      ] },
      { num: 'II', h3: 'Epsilon to Pre-Algebra', sub: 'Fractions to negatives', courses: [
        { code: 'MUS / B / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Fractions, decimals, percents, ratio.' },
        { code: 'MUS / B / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Patterns checked in Python.' }
      ] },
      { num: 'III', h3: 'Algebra 1 and beyond', sub: 'Symbols take over', courses: [
        { code: 'MUS / C / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Pre-Algebra and Algebra 1, explained.' },
        { code: 'MUS / C / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry, Algebra 2 and PreCalculus.' },
        { code: 'MUS / C / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'When a homeschooler plans for college.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes that keep the Build, Write, Say rhythm',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'In the homeschool day, when math usually happens.' },
      { time: 'Weekends', l: 'A weekly class on the lesson that stuck.' },
      { time: '1-on-1', l: 'Matched to your level and lesson number.' }
    ],
    cells: [
      { h3: 'Your book leads', p: 'We follow the Math-U-See lesson order.' },
      { h3: 'Blocks on camera', p: 'The build is part of the class.' },
      { h3: 'Writing matched', p: 'Each line ties to a move.' },
      { h3: 'Teach-back close', p: 'Your child explains one idea.' },
      { h3: 'Fresh problems', p: 'Written by our teachers.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty, or just your child.' }
    ]
  },

  projectsH2: 'What our students make',
  projectsLede: 'Some Math-U-See families add coding once algebra clicks. A selection is on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote about us on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Classes beside Math-U-See are billed month by month in US dollars. Families often bring a teacher in for one hard level, such as Pre-Algebra, then step back once the child can teach the lessons back unaided.',
    free: ['A free first class', 'Bring the lesson that stuck', 'No card needed'],
    group: ['A class of fifteen to twenty', 'The same teacher each week', 'Pick your batch time', 'Monthly, cancel any month'],
    one: ['Your own teacher', 'Paced to the Math-U-See lesson', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Math-U-See tutoring: common questions',
    items: [
      { q: 'Can I get a Math-U-See tutor online?', a: 'Yes. Our teachers work live online with students who keep using their Math-U-See books, videos and blocks. Classes follow the lesson your child is on, in a batch of 15 to 20 or one to one.' },
      { q: 'How many levels does Math-U-See have?', a: 'Demme Learning lists 13 levels: Primer, Alpha, Beta, Gamma, Delta, Epsilon, Zeta, Pre-Algebra, Algebra 1, Geometry, Algebra 2, PreCalculus and Calculus. The letters stand for subjects rather than grades.' },
      { q: 'What is the Build, Write, Say method?', a: 'It is how Math-U-See presents each concept. The student builds the problem with manipulatives, writes the step-by-step solution, and says why it works. Math-U-See uses the same three parts as its mastery check, asking the child to teach the idea back.' },
      { q: 'Does Math-U-See prepare students for college?', a: 'Math-U-See runs through Algebra 2, PreCalculus and Calculus, and Demme Learning says its Principles of Secondary Mathematics edition of Algebra 1 covers nationally expected topics. Whether a particular student is ready for college math depends on what they have mastered, which a placement check or an honest teach-back shows better than a level name.' },
      { q: 'Where can I find Math-U-See extra practice?', a: 'Demme Learning points families to the Systematic Review pages, the Application and Enrichment worksheets and its Digital Toolbox. Our teachers also write fresh problems on the same topic so the book\'s own pages stay available for your child.' },
      { q: 'Why is my child struggling with Math-U-See Pre-Algebra?', a: 'In our experience it is usually the move from building with blocks to working in symbols, together with negative numbers. Keep the blocks for zero pairs, and ask your child to say why each step is allowed even when the blocks are put away.' },
      { q: 'Which Math-U-See Algebra 1 should we use?', a: 'Demme Learning offers the Legacy Edition, which it describes as basic coverage of Algebra 1 topics, and Algebra 1: Principles of Secondary Mathematics, which it says covers nationally expected topics. Its own comparison page and placement team are the right place to decide; we teach whichever your child has.' },
      { q: 'Do I need the blocks for an online class?', a: 'They help a great deal up to Algebra 1, the last level where Math-U-See says the integer blocks are used. Your child keeps them on the desk and builds on camera; older students can draw the blocks instead.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of Math-U-See or Demme Learning?', a: 'No. We are an independent online school. Math-U-See is a trademark of Demme Learning, and we describe the curriculum only from its own published pages.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More help for families who homeschool math in the US.',
    items: [
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'A wider look at choosing and pacing a homeschool program.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'For students in the Pre-Algebra and Algebra 1 levels.' },
      { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring', p: 'The level after Algebra 1, with proofs.' },
      { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math tutoring', p: 'Multiplication and division, around Gamma and Delta.' },
      { href: '/saxon-math-tutor', label: 'Saxon Math tutor', p: 'If your family is comparing a cumulative program.' },
      { href: '/teaching-textbooks-math-help', label: 'Teaching Textbooks help', p: 'Another self-paced homeschool program, explained.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the Math-U-See level and lesson number, and which edition if your child is in Algebra 1 or Algebra 2. Have the blocks nearby. We begin with the problem that stopped them.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how our live classes work</a>, or browse <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'Our teaching team works from India, which lets us offer US homeschoolers live slots during the school day as well as after it. WhatsApp is the fastest way to reach us.',
    formNote: 'The first class is free and asks for no payment details.'
  },

  footer: {
    cols: [
      { h4: 'Math help', links: [
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' },
        { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/beast-academy-tutor', label: 'Beast Academy help' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Build it, write it, say why'
  },

  personalityCss: `
.ag-root.ag-mus .ag-hero h1 { letter-spacing: -0.015em; max-width: 22ch; }
.ag-root.ag-mus .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-mus .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-mus .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-mus .ag-section-head h2 { max-width: 30ch; }
`,

  dossier: {
    curriculumAuthority: 'Demme Learning, mathusee.com curriculum, Algebra 1 Legacy, Pre-Algebra, Delta, integrated manipulatives and placement pages, read raw 31 October 2026: 13 levels Primer to Calculus with subtitles; mastery approach; Four-Step Approach; Build, Write, Say; mastery definition and teach-back; Lesson Practice, Systematic Review, Application and Enrichment, Tests booklet except Primer; Digital Toolbox; two Algebra 1 editions; one video per lesson; Integer Block Kit 133 pieces used Primer to Algebra 1; Fraction Overlay Kit in Epsilon; Algebra/Decimal Insert Kit in Zeta, Pre-Algebra, Algebra 1; Greek-letter levels; placement tool and Placement Specialists; readiness lists; tutoring and co-op guidance.',
    localProject: 'Our rectangle factoring of x squared + 5x + 6 with a Build, Write, Say table and a Python factor-pair search; 744 / 6 by place-value trades; -7 + 4 by zero pairs; three quarters of 28; a unit multiplier for 90 minutes; a stall-point table; a six-item practice set. Lesson family: building a concept, writing it, then saying why.',
    requiredMentions: [
      'consists of 13 levels, building from an introduction to mathematics through calculus.',
      'Build: Use the manipulatives to demonstrate and model the problems.',
      'Write: Write down step-by-step solutions while working through the problems.',
      'Mastery means that the student not only understands a new concept but can also apply the concept independently to solve a problem.',
      'Using Greek letters for levels instead of age or grade ensures that students can build strength where needed and progress without pressure or self-consciousness.',
      'covers nationally expected topics for Algebra 1',
      'Integer Block Kit (described as a 133-piece set)',
      'Demonstrate a multiplication problem by building or drawing a rectangle',
      'x squared + 5x + 6 = (x + 2)(x + 3)',
      'Trade the leftover hundred for 10 tens'
    ],
    sources: [
      { claim: 'Math-U-See levels, mastery approach, Four-Step Approach, Build, Write, Say, workbook pages, tutoring and co-op notes.', url: 'https://mathusee.com/products/math-u-see-curriculum/' },
      { claim: 'Algebra 1 Legacy Edition topics, two editions, readiness list, components.', url: 'https://mathusee.com/products/math-u-see-curriculum/algebra-1/' },
      { claim: 'Pre-Algebra and Delta readiness lists.', url: 'https://mathusee.com/products/math-u-see-curriculum/pre-algebra/' },
      { claim: 'Manipulatives by level.', url: 'https://mathusee.com/products/integrated-manipulatives/' },
      { claim: 'Greek-letter levels and placement tools.', url: 'https://mathusee.com/digital-tools/placement-tool/' }
    ],
    rejectedClaims: [
      'Math-U-See prices, subscription tiers and set contents for purchase: not used.',
      'The founder biography and faith ministry on the about page: not used (out of scope, and no private individuals named).',
      'Lesson-by-lesson titles: only topic names used; no lesson content, sample PDF, worksheet or solution reproduced.',
      'Manipulative piece counts beyond the 133-piece kit: not needed.',
      'Any claim that live tutoring speeds a child through levels or raises scores: refused.',
      'Any affiliation with Demme Learning: none, stated on the page.'
    ]
  }
};
