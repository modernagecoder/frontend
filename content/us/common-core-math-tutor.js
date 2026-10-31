'use strict';
// Common Core math tutor (ag- maths door; UK and US exams cluster, row US001, priority A).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Sources read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/common-core-math-tutor/):
//  - thecorestandards.org grade introductions K to 8: "In Kindergarten, instructional time should focus on two critical
//    areas"; "More learning time in Kindergarten should be devoted to number than to other topics."; Grade 1 four critical
//    areas incl. "strategies for addition and subtraction within 20"; Grade 2 "extending understanding of base-ten
//    notation"; Grade 3 "especially unit fractions (fractions with numerator 1)"; Grade 4 three areas incl. "fraction
//    equivalence"; Grade 5 three areas incl. "developing understanding of volume"; Grade 6 four areas incl. "connecting ratio
//    and rate to whole number multiplication and division"; Grade 7 four areas incl. "drawing inferences about populations
//    based on samples"; Grade 8 three areas incl. "grasping the concept of a function".
//  - Domain pages: 1.OA.C.6 making ten "8 + 6 = 8 + 2 + 4 = 10 + 4 = 14" (cited, not reused as our example); 1.OA.D.7
//    meaning of the equal sign; 2.NBT.A.1 "706 equals 7 hundreds, 0 tens, and 6 ones"; 2.NBT.B.7 add and subtract within
//    1000 and "relate the strategy to a written method"; 4.NF footnote "Grade 4 expectations in this domain are limited to
//    fractions with denominators 2, 3, 4, 5, 6, 8, 10, 12, and 100."; 4.NF.B.3 decompose a fraction; 4.NF.B.4 multiply a
//    fraction by a whole number; 5.NF.A.1 unlike denominators; 6.RP.A.3 "tables of equivalent ratios, tape diagrams, double
//    number line diagrams"; 6.EE.A.3 distributive property; 7.RP.A.2; 8.EE.C.7 linear equations in one variable; K.OA.A.4.
//  - Standards for Mathematical Practice page: eight practices; MP1 "check their answers to problems using a different
//    method"; MP6 "using the equal sign consistently and appropriately"; MP7 "7 x 8 equals the well remembered 7 x 5 + 7 x 3".
//  - FAQ: "the Common Core is what students need to know and be able to do, and curriculum is how students will learn it";
//    "do not mandate the use of any particular curriculum"; parents "may find the methods and approaches different or have
//    difficulty helping their children with homework".
//  - Standards in Your State: 41 states, DC, four territories, DoDEA.
//  - CCSS mathematics PDF (learning.ccsso.org): the standards text the site renders.
// Our own material, labelled: 9 + 7 = 10 + 6 = 16; 15 - 7 = 15 - 5 - 2 = 8; 368 + 457 = 700 + 110 + 15 = 825; 5/6 split two
// ways; 2 3/4 = 11/4; 4 x 2/3 = 8/3; 2/3 + 1/4 = 11/12; ratio table 3:2 to 15:10; 4(3 + y) = 12 + 4y checked at y = 5 (32);
// 3(x - 2) = x + 8 gives x = 7 (15 = 15); the homework-question table, the lesson plan and the practice set.
// Lesson family: one problem, two representations, matched line by line (model to equation).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH', blurb: 'Live Common Core math tutoring and homework help for grades K to 8, built on the standards and the eight practices.' },
  slug: 'common-core-math-tutor',
  code: 'cc',
  accent: '#5F4674',
  accentRationale: 'Common Core math tutor: a muted plum ink, #5F4674 as allocated, 7.58:1 on #FBF8F2 and 6.52:1 on #EDE7DA, calm for a homework-help page and apart from the violet of the Common Core explainer',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'Common Core math tutor',
  title: 'Common Core Math Tutor Online: Homework Help, Grades K to 8',
  description: 'A live online Common Core math tutor for grades K to 8: what each grade covers, the eight practices in real homework, and worked examples written by our teachers.',
  ogDescription: 'Common Core homework help that starts from the standards: the critical areas for each grade from kindergarten to grade 8, the eight practices, and original worked examples.',
  twitterDescription: 'Live Common Core math tutoring for grades K to 8, with worked examples.',
  pageName: 'Common Core Math Tutor Online',
  webPageDescription: 'A guide for US families looking for a Common Core math tutor: the critical areas the standards set for each grade from kindergarten to grade 8, how the eight Standards for Mathematical Practice show up in homework, and how live online lessons work alongside a school curriculum.',
  courseDescription: 'Live online math lessons for US students in grades K to 8, taught alongside the Common Core curriculum their school uses, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Common Core math tutor',
  navLinks: [
    { href: '#grades', label: 'Grade by grade' },
    { href: '#practices', label: 'The practices' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#alongside', label: 'With your curriculum' },
    { href: '#home', label: 'At home' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Kindergarten to grade 8 &middot; Live online tutoring',
  h1: 'Common Core math tutor online, grades K to 8',
  lede: 'Most requests for a Common Core math tutor begin the same way: a worksheet comes home with number bonds, ten frames or a ratio table, the child is stuck, and the adult at the table was taught something else. A tutor who knows the standards can see what that worksheet is aiming at, teach the idea behind it, and connect it to the methods the family already trusts. This page sets out what the standards ask for in each grade from kindergarten to grade 8, what the eight practices look like on real homework, and how our live lessons fit around the curriculum your school chose.',
  secondaryCta: { href: '#examples', label: 'See the worked examples' },
  wa: 'Hello Modern Age Coders, my child in the US needs help with Common Core math homework. Could we book a free first class?',
  heroNote: 'Live online lessons since 2020 &middot; 10,000+ students taught &middot; math from kindergarten up',
  spec: [
    ['Grades', 'Kindergarten to grade 8'],
    ['Built on', 'Common Core State Standards'],
    ['Practices', 'All eight, every lesson'],
    ['Homework', 'Explained, never done for them'],
    ['Lessons', 'Live, online'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'A Common Core math tutor helps a child meet the Common Core State Standards for Mathematics, the grade-by-grade goals published at thecorestandards.org and used by most US states, including the eight Standards for Mathematical Practice. Modern Age Coders teaches grades K to 8 live online, in a group of 15 to 20 or one to one, through our Elementary Math course and Middle School Math course, alongside the curriculum your school uses. The first class is free.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses that teach to the Common Core goals',
    lede: 'Pick by grade. Every course follows the standards for the grade and works with whatever books or apps the school sends home.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'CC / 01', title: 'Elementary math, grades 1 to 5', note: 'Place value, operations, fractions and measurement, with the models schools use.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'CC / 02', title: 'Middle school math, grades 6 to 8', note: 'Ratios, expressions, equations and the first functions.' },
      { course: 'mental-maths-mastery-kids', code: 'CC / 03', title: 'Mental math and number sense', note: 'Making ten, splitting numbers and estimating, the habits behind fluency.' }
    ]
  },

  sections: [
    {
      id: 'grades', tint: 'tint', eyebrow: 'Grade by grade',
      h2: 'What does Common Core math cover in each grade?',
      lede: 'Each grade from kindergarten to grade 8 opens with a short introduction naming two to four critical areas, the topics where instructional time should go first. Knowing your child\'s critical areas tells you which homework matters most this year.',
      body: [
        { kind: 'table', caption: 'Critical areas named in the Common Core grade introductions, kindergarten to grade 8 (thecorestandards.org, read 31 October 2026; wording shortened by us except where quoted)', head: ['Grade', 'Number of critical areas', 'What the standards put first'], rows: [
          ['K', 'Two', 'Representing and comparing whole numbers; describing shapes and space. "More learning time in Kindergarten should be devoted to number than to other topics."'],
          ['1', 'Four', 'Addition and subtraction with "strategies for addition and subtraction within 20"; place value in tens and ones; measuring length; composing shapes'],
          ['2', 'Four', '"extending understanding of base-ten notation"; fluency with addition and subtraction; standard units of measure; shapes'],
          ['3', 'Four', 'Multiplication and division within 100; fractions, "especially unit fractions (fractions with numerator 1)"; arrays and area; two-dimensional shapes'],
          ['4', 'Three', 'Multi-digit multiplication and division; "fraction equivalence" and adding fractions with like denominators; classifying figures by their properties'],
          ['5', 'Three', 'Adding and subtracting fractions fluently; dividing by 2-digit divisors and decimals to hundredths; "developing understanding of volume"'],
          ['6', 'Four', '"connecting ratio and rate to whole number multiplication and division"; negative numbers and rational numbers; expressions and equations; statistical thinking'],
          ['7', 'Four', 'Proportional relationships; operations with rational numbers and linear equations; scale drawings, area, surface area and volume; "drawing inferences about populations based on samples"'],
          ['8', 'Three', 'Linear equations and systems; "grasping the concept of a function"; distance, angle, similarity, congruence and the Pythagorean Theorem']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Domains: the folders inside each grade',
          left: [
            'Inside each grade the standards are grouped into domains. Kindergarten to grade 5 use Operations and Algebraic Thinking, Number and Operations in Base Ten, Measurement and Data, and Geometry, with Counting and Cardinality only in kindergarten and Number and Operations, Fractions from grade 3 to grade 5.',
            'Grades 6 and 7 switch to Ratios and Proportional Relationships, The Number System, Expressions and Equations, Geometry, and Statistics and Probability. Grade 8 drops ratios and adds Functions. A homework code such as 4.NF.B.3 reads as grade 4, Number and Operations, Fractions, cluster B, standard 3.'
          ],
          rightH3: 'Limits written into the standards',
          right: [
            'Some standards carry footnotes that narrow them. The grade 4 fractions domain says "Grade 4 expectations in this domain are limited to fractions with denominators 2, 3, 4, 5, 6, 8, 10, 12, and 100." Grade 3 is limited to halves, thirds, fourths, sixths and eighths.',
            'So a fourth grader adding sevenths is working beyond the grade, and a teacher who sticks to twelfths and hundredths is following the text exactly. When we plan lessons we check these limits first, so practice matches what the class will be assessed on.'
          ] },
        { kind: 'source', html: 'Sources: the grade introductions and domain pages at <a class="ag-inline-link" href="https://www.thecorestandards.org/Math/" rel="noopener" target="_blank">thecorestandards.org/Math</a>, read 31 October 2026. Modern Age Coders is an independent school and is not connected with the Common Core State Standards Initiative, the NGA Center, CCSSO, any state or any school district.' }
      ]
    },
    {
      id: 'practices', tint: 'deep', eyebrow: 'The eight practices',
      h2: 'What are the Common Core math practice standards, and how do they show up in homework?',
      lede: 'There are eight Standards for Mathematical Practice, and they apply in every grade. They are why a worksheet says "explain how you know" or "solve it another way". Here is how each one tends to appear on paper, and what a tutor does with it.',
      body: [
        { kind: 'table', caption: 'The eight Standards for Mathematical Practice (names from thecorestandards.org, read 31 October 2026); the homework and tutoring columns are ours', head: ['Practice', 'How it often appears on homework', 'What our teacher asks the child'], rows: [
          ['MP1 Make sense of problems and persevere in solving them', 'A word problem with no hint about the operation', '"What is the question asking for, before any numbers?"'],
          ['MP2 Reason abstractly and quantitatively', 'Write an equation for a story, then say what the answer means', '"Your answer is 12. Twelve what?"'],
          ['MP3 Construct viable arguments and critique the reasoning of others', '"A classmate says 3/8 is bigger than 3/4. Agree or disagree?"', '"Convince me, using a drawing."'],
          ['MP4 Model with mathematics', 'Tape diagrams, bar models, tables from a situation', '"Draw what is happening, then write the math."'],
          ['MP5 Use appropriate tools strategically', 'Choose a number line, a ruler or a table', '"Which tool makes this quicker?"'],
          ['MP6 Attend to precision', 'Label units; use the equal sign correctly', '"Is 3 + 4 = 7 + 2 = 9 true? Fix it."'],
          ['MP7 Look for and make use of structure', 'Split 7 x 8 into easier facts', '"Which fact you already know is hiding inside this one?"'],
          ['MP8 Look for and express regularity in repeated reasoning', 'Complete a pattern, then describe the rule', '"What stays the same each time?"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Checking by a second route',
          left: [
            'The MP1 text says mathematically proficient students "check their answers to problems using a different method", and that they keep asking whether the answer makes sense. That single habit explains most "show another way" questions.',
            'In our lessons it becomes a routine: solve once, check once by a different route, and only then move on. A child who learns that early catches a large share of their own mistakes without anyone telling them.'
          ],
          rightH3: 'The equal sign and the hidden fact',
          right: [
            'MP6 asks students to state what their symbols mean, "including using the equal sign consistently and appropriately". Children who write running chains such as 3 + 4 = 7 + 2 = 9 are recording steps, but the line is false, and the standards want them to notice.',
            'MP7 gives its own example: students "will see 7 x 8 equals the well remembered 7 x 5 + 7 x 3", which is the distributive property years before it gets a name. We teach facts that way, so a forgotten fact can be rebuilt from two known ones.'
          ] }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Common Core math examples',
      h2: 'Common Core math examples, worked step by step',
      lede: 'These are our own examples, written in the style the standards describe, one or two per grade band. Each pairs the model a worksheet might use with the equation that records it, because seeing the two side by side is usually what unlocks the homework.',
      body: [
        { kind: 'table', caption: 'Worked examples by grade (ours; the standard each one practices is from thecorestandards.org)', head: ['Grade and standard', 'Problem', 'Model or strategy', 'Recorded as'], rows: [
          ['1, making ten (1.OA.C.6)', '9 + 7', 'Move 1 from the 7 to fill the 9 to a ten', '9 + 7 = 9 + 1 + 6 = 10 + 6 = 16'],
          ['1, decomposing to ten (1.OA.C.6)', '15 - 7', 'Take 5 to reach ten, then 2 more', '15 - 7 = 15 - 5 - 2 = 10 - 2 = 8'],
          ['2, add within 1000 (2.NBT.B.7)', '368 + 457', 'Add hundreds, tens and ones separately', '700 + 110 + 15 = 825'],
          ['4, decompose a fraction (4.NF.B.3)', '5/6 two ways', 'Fraction strip cut into sixths', '5/6 = 1/6 + 4/6 = 2/6 + 3/6'],
          ['4, mixed numbers (4.NF.B.3)', '2 3/4 as a fraction', 'Two wholes of four fourths, plus three', '4/4 + 4/4 + 3/4 = 11/4'],
          ['4, fraction times whole (4.NF.B.4)', '4 x 2/3', 'Four groups of two thirds', '4 x 2/3 = 8 x 1/3 = 8/3, between 2 and 3'],
          ['5, unlike denominators (5.NF.A.1)', '2/3 + 1/4', 'Rename both in twelfths', '8/12 + 3/12 = 11/12'],
          ['6, ratio table (6.RP.A.3)', 'A recipe uses 3 cups of flour for 2 cups of milk. Milk for 15 cups of flour?', 'Ratio table 3:2, 6:4, 9:6, 12:8, 15:10', '10 cups of milk'],
          ['6, equivalent expressions (6.EE.A.3)', 'Rewrite 4(3 + y)', 'Area model: a 4 by (3 + y) rectangle', '4(3 + y) = 12 + 4y; check y = 5: 32 and 32'],
          ['8, linear equation (8.EE.C.7)', '3(x - 2) = x + 8', 'Balance: expand, then collect x on one side', '3x - 6 = x + 8, 2x = 14, x = 7; check 15 = 15']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the models come first',
          left: [
            'In the grade 2 example, 368 + 457 is solved by adding 300 and 400, then 60 and 50, then 8 and 7. Standard 2.NBT.B.7 asks children to add within 1000 using place-value strategies and to "relate the strategy to a written method". The written method comes next, and the regrouping in it is the 110 and the 15 above, compressed.',
            'Place value is the foundation the whole sequence rests on. Standard 2.NBT.A.1 says "706 equals 7 hundreds, 0 tens, and 6 ones". A child who can say that sentence for any three-digit number rarely struggles with carrying.'
          ],
          rightH3: 'Why fractions trip children up',
          right: [
            'The grade 4 example 4 x 2/3 is often answered as 8/12, because the child multiplies both parts. Reading it as four groups of two thirds, or eight thirds, makes the right answer obvious and lets the child estimate: eight thirds is a little under three.',
            'Our teachers ask for that estimate before any calculation. It is MP2 in practice, and it turns a fraction rule that is easy to forget into a picture that is hard to forget.'
          ] },
        { kind: 'p', mt: true, html: 'The grade 8 example shows where the elementary models lead. Expanding 3(x - 2) uses the same distributive idea as the area model for 4(3 + y), which in turn is the 7 x 8 = 7 x 5 + 7 x 3 idea from grade 3. When a tutor can show a child that thread, algebra feels like an old friend in new clothes rather than a new subject.' }
      ]
    },
    {
      id: 'alongside', tint: 'deep', eyebrow: 'With your curriculum',
      h2: 'How do we tutor alongside a Common Core curriculum?',
      lede: 'The standards are goals, not lesson plans, so every district picks its own materials. Our job is to teach the goal behind each page your child brings home, in the representation the school uses, and to keep the homework the child\'s own work.',
      body: [
        { kind: 'two',
          leftH3: 'Standards and curriculum are different things',
          left: [
            'The Common Core FAQ puts it in one line: "the Common Core is what students need to know and be able to do, and curriculum is how students will learn it." It adds that the standards "do not mandate the use of any particular curriculum."',
            'That is why two children in different districts can meet the same standard with very different worksheets. We ask families which program their school uses, look at a recent page together, and teach in that program\'s language.'
          ],
          rightH3: 'What a lesson looks like',
          right: [
            'A typical hour opens with five minutes of facts or mental math, moves to the week\'s critical-area topic with a model and its equation, and closes with a short mixed set the child does alone while the teacher watches the reasoning.',
            'If there is homework, the child reads the question aloud and explains the first step. The teacher asks questions and draws, but the pencil stays with the child. We never complete graded work for a student.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>Share one recent worksheet or a photo of it.</b> It tells us the program, the unit and the representation in use.',
          '<b>Book the free first class.</b> The teacher finds where the child\'s understanding breaks, usually one or two grades back in the same domain.',
          '<b>Agree a short plan.</b> Most plans pair the current unit with one older gap, for example place value under a multi-digit unit.',
          '<b>Choose a format.</b> A group of 15 to 20 children at the same grade, or 1-on-1 lessons paced to your school\'s calendar.',
          '<b>Review each month.</b> We look at recent class work with you and adjust the next month\'s focus.'
        ] },
        { kind: 'source', html: 'Quoted from the <a class="ag-inline-link" href="https://www.thecorestandards.org/about-the-standards/frequently-asked-questions/" rel="noopener" target="_blank">Common Core FAQ</a>, read 31 October 2026. The lesson outline and plan steps are our own practice.' }
      ]
    },
    {
      id: 'home', tint: 'tint', eyebrow: 'At home',
      h2: 'Can parents help with Common Core math homework?',
      lede: 'Yes, and the initiative itself expects that it may feel unfamiliar. Its FAQ says parents "may find the methods and approaches different or have difficulty helping their children with homework", and suggests starting with a conversation with the teacher.',
      body: [
        { kind: 'two',
          leftH3: 'Four questions that work at the kitchen table',
          left: [
            'Ask "what is the problem about?" before "what is the answer?". Ask "can you draw it?" when a child is stuck. Ask "how could you check it a different way?" once there is an answer. And ask "what do you already know that looks like this?" when a fact or step has been forgotten.',
            'None of these needs you to know the method on the page. Each one matches a practice standard, so you are helping with exactly what the homework is aiming at.'
          ],
          rightH3: 'Which states use the standards',
          right: [
            'The initiative reports that forty-one states, the District of Columbia, four territories and the Department of Defense Education Activity have adopted the standards, and that states may change or add to them. Some states publish their own standards under another name.',
            'Our teachers work from whichever set your state uses. The big ideas, place value, fractions, ratio and early algebra, appear in every version we have taught to.'
          ] },
        { kind: 'table', mt: true, caption: 'A short Common Core practice set across the grades (ours; answers in brackets)', head: ['Grade', 'Problem', 'Try it with', 'Answer'], rows: [
          ['K', 'Which number makes 10 with 6? (K.OA.A.4)', 'Ten frame or fingers', '(4)'],
          ['1', '8 + 5 by making ten', '8 + 2 + 3', '(13)'],
          ['2', '546 - 230', 'Hundreds, tens and ones separately', '(316)'],
          ['3', '6 x 7 from 6 x 5 and 6 x 2', 'Split array', '(30 + 12 = 42)'],
          ['4', '3 x 3/4', 'Three groups of three fourths', '(9/4, between 2 and 3)'],
          ['5', '1/2 + 2/5', 'Rename in tenths', '(5/10 + 4/10 = 9/10)'],
          ['6', 'A ratio of 5 red to 3 blue beads. Red beads if there are 12 blue?', 'Ratio table', '(20)'],
          ['7', 'Is y = 2.5x proportional? (7.RP.A.2)', 'Table: does it pass through (0, 0)?', '(Yes, constant 2.5)'],
          ['8', '5(x + 1) = 2x + 17', 'Expand, then balance', '(x = 4; check 25 = 25)']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages we see in Common Core math',
    lede: 'Our description of how children move from models to fluent, flexible methods. Most children are in different stages for different domains.',
    table: { caption: 'Stages of understanding we use when planning lessons (ours)', head: ['Stage', 'What we see in the work', 'What we do next'], rows: [
      ['1. Counting', 'Counts every object; fingers for every fact', 'Ten frames, making ten, fact families'],
      ['2. Models', 'Draws the strip, the array or the table, slowly', 'Connect each picture to its equation'],
      ['3. Records', 'Writes the equation; the model is optional', 'Mixed practice; check by a second route'],
      ['4. Flexible', 'Picks the quickest route and explains it', 'Harder word problems and the next grade\'s ideas']
    ] },
    left: { h3: 'For parents', ps: [
      'A child in stage 2 is not behind. The standards spend a year on models before asking for a fast written method, and that year is where understanding is built.',
      'The warning sign is a child who jumps to stage 3 without stage 2 and cannot say why a step works. That is where we usually start.'
    ] },
    right: { h3: 'For students', ps: [
      'Drawing a quick picture is not babyish. Strong mathematicians sketch all the time.',
      'When you know a fact, ask how you could rebuild it if you forgot. That question is your safety net.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses from first numbers to algebra',
    lede: 'Each one is taught live and lines up with the grade goals in the standards.',
    bands: [
      { num: 'I', h3: 'First years', sub: 'Kindergarten to grade 2', courses: [
        { code: 'CC / E / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Counting, comparing and shapes, with objects.' },
        { code: 'CC / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Making ten and splitting numbers.' },
        { code: 'CC / E / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental math', blurb: 'Place value you can touch.' }
      ] },
      { num: 'II', h3: 'Upper elementary', sub: 'Grades 3 to 5', courses: [
        { code: 'CC / U / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Operations, fractions and measurement.' },
        { code: 'CC / U / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Patterns and number in Python.' },
        { code: 'CC / U / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Speed calculation', blurb: 'Flexible mental methods.' }
      ] },
      { num: 'III', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'CC / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratio, rational numbers and equations.' },
        { code: 'CC / M / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'From expressions to Algebra 1.' },
        { code: 'CC / M / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'For children who want harder problems.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live Common Core math lessons around the school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'School nights', l: 'Short lessons that follow this week\'s unit.' },
      { time: 'Weekends', l: 'Longer sessions to close older gaps.' },
      { time: '1-on-1', l: 'Timed around your district\'s calendar.' }
    ],
    cells: [
      { h3: 'Model, then equation', p: 'Each picture is matched to the math it records.' },
      { h3: 'Your school\'s program', p: 'We teach in the representation your child sees in class.' },
      { h3: 'Eight practices', p: 'Explaining and checking are part of every lesson.' },
      { h3: 'Own work only', p: 'We teach the idea; the child writes the homework.' },
      { h3: 'Gaps found early', p: 'A free first class locates the missing step.' },
      { h3: 'Batch or private', p: 'A class of 15 to 20, or a teacher to yourself.' }
    ]
  },

  projectsH2: 'What our students make',
  projectsLede: 'Older students often turn a math idea into a small program. Browse them on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Unedited Google reviews from parents.',

  fees: {
    h2: 'Fees',
    lede: 'Common Core tutoring is charged by the month with no long contract, so a family can add lessons for a hard fractions unit and stop once the unit is done.',
    free: ['A free first class', 'Bring a recent worksheet', 'No card required'],
    group: ['15 to 20 children', 'The same teacher each week', 'Pick a batch time', 'Billed monthly'],
    one: ['One child, one teacher', 'Follows your school\'s units', 'Times you choose']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'Common Core math tutoring: common questions',
    items: [
      { q: 'What does a Common Core math tutor do?', a: 'A Common Core math tutor teaches the goals in the Common Core State Standards for your child\'s grade, in the methods the school uses, and builds the eight practices such as explaining and checking. Our teachers also find older gaps, often in place value or fractions, that make the current unit hard.' },
      { q: 'Is there a Common Core math tutor near me?', a: 'Our lessons are live online, so distance does not matter. Your child joins by video from home and works with the same teacher each week, in a group or one to one.' },
      { q: 'What are the Common Core math practice standards?', a: 'They are eight Standards for Mathematical Practice that apply in every grade, from making sense of problems and persevering (MP1) to looking for regularity in repeated reasoning (MP8). They describe habits of mind rather than topics.' },
      { q: 'Which grades do you tutor in Common Core math?', a: 'Kindergarten to grade 8 on this page. For high school, our algebra, geometry, Algebra 2 and precalculus tutoring continue from where grade 8 ends.' },
      { q: 'Will the tutor do my child\'s homework?', a: 'No. The teacher explains the idea with a fresh example, asks questions and checks the reasoning, but the child writes their own homework. Graded work stays the student\'s own.' },
      { q: 'My child\'s school uses its own Common Core curriculum. Is that a problem?', a: 'No. The standards do not prescribe a curriculum, so districts choose their own. Send us a recent worksheet and the teacher will work in the same representations your child sees in class.' },
      { q: 'Why does Common Core homework use drawings and models?', a: 'Many standards ask children to use models such as ten frames, arrays, fraction strips or ratio tables before moving to a faster written method. The model shows why the method works, which makes later topics easier.' },
      { q: 'How quickly will my child catch up?', a: 'It depends on the gap and on practice between lessons, so we do not promise a timescale or a grade. After the free first class the teacher explains what is missing and suggests a plan, and we review progress with you each month.' },
      { q: 'When are your Common Core math classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with the Common Core initiative or my school district?', a: 'No. Modern Age Coders is an independent online school. We quote the published standards and link to them, and we are not affiliated with the initiative, any state or any district.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related math pages',
    lede: 'More help for US families, by grade and by topic.',
    items: [
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core vs traditional math', p: 'Where the standard algorithms appear, compared with older methods.' },
      { href: '/online-math-tutor-2nd-grade', label: 'Second grade math tutoring', p: 'Base-ten understanding and fluent addition.' },
      { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math tutoring', p: 'Multi-digit work and fraction equivalence.' },
      { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math tutoring', p: 'Ratios, rates and first expressions.' },
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'Linear equations and functions.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'Planning a math year at home.' },
      { href: '/online-maths-tutoring-for-kids-in-usa', label: 'Online math tutoring for kids', p: 'Our live math lessons for younger US children.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'The next step after grade 8.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the grade and send a photo of a worksheet that caused trouble. The teacher will work through a fresh problem of the same kind with your child and show you where the difficulty starts.',
    readFirst: 'Read about <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or see every <a class="ag-inline-link" href="/courses">course we offer</a>.',
    note: 'Our teachers work live by video from India and schedule around US time zones and school nights. WhatsApp reaches us fastest.',
    formNote: 'No payment details are needed for the first class.'
  },

  footer: {
    cols: [
      { h4: 'Math by grade', links: [
        { href: '/online-math-tutor-kindergarten', label: 'Kindergarten math' },
        { href: '/online-math-tutor-3rd-grade', label: 'Third grade math' },
        { href: '/online-math-tutor-5th-grade', label: 'Fifth grade math' },
        { href: '/online-math-tutor-7th-grade', label: 'Seventh grade math' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Make ten, then keep going'
  },

  personalityCss: `
.ag-root.ag-cc .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-cc .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-cc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cc .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-cc .ag-section-head h2 { max-width: 28ch; }
`,

  dossier: {
    curriculumAuthority: 'Common Core State Standards for Mathematics (thecorestandards.org and the CCSSO PDF), read raw 31 October 2026: grade introductions K to 8 with their critical areas; domain lists; 1.OA.C.6, 1.OA.D.7, 2.NBT.A.1, 2.NBT.B.7, 4.NF footnote on denominators, 4.NF.B.3, 4.NF.B.4, 5.NF.A.1, 6.RP.A.3, 6.EE.A.3, 7.RP.A.2, 8.EE.C.7, K.OA.A.4; the eight Standards for Mathematical Practice (MP1 check by a different method, MP6 equal sign, MP7 7 x 8 example); FAQ on standards versus curriculum and on parents and homework; Standards in Your State.',
    localProject: 'Our worked examples: 9 + 7 = 16 by making ten; 15 - 7 = 8; 368 + 457 = 825 by place value; 5/6 decomposed two ways; 2 3/4 = 11/4; 4 x 2/3 = 8/3; 2/3 + 1/4 = 11/12; ratio table to 15:10; 4(3 + y) = 12 + 4y; 3(x - 2) = x + 8 gives x = 7. Our nine-problem practice set, homework-question table and lesson outline. Lesson family: model matched to equation.',
    requiredMentions: ['instructional time should go first', 'More learning time in Kindergarten should be devoted to number than to other topics.', 'especially unit fractions (fractions with numerator 1)', 'Grade 4 expectations in this domain are limited to fractions with denominators 2, 3, 4, 5, 6, 8, 10, 12, and 100.', 'check their answers to problems using a different method', 'including using the equal sign consistently and appropriately', '706 equals 7 hundreds, 0 tens, and 6 ones', 'the Common Core is what students need to know and be able to do, and curriculum is how students will learn it.', 'may find the methods and approaches different or have difficulty helping their children with homework', '9 + 7 = 9 + 1 + 6 = 10 + 6 = 16', '700 + 110 + 15 = 825', '3x - 6 = x + 8, 2x = 14, x = 7'],
    sources: [
      { claim: 'Grade introductions and critical areas, kindergarten to grade 8.', url: 'https://www.thecorestandards.org/Math/Content/4/introduction/' },
      { claim: 'Grade 4 Number and Operations, Fractions, including the denominator footnote.', url: 'https://www.thecorestandards.org/Math/Content/4/NF/' },
      { claim: 'Grade 2 Number and Operations in Base Ten.', url: 'https://www.thecorestandards.org/Math/Content/2/NBT/' },
      { claim: 'Standards for Mathematical Practice.', url: 'https://www.thecorestandards.org/Math/Practice/' },
      { claim: 'Common Core FAQ: standards versus curriculum; parents and homework.', url: 'https://www.thecorestandards.org/about-the-standards/frequently-asked-questions/' },
      { claim: 'Standards in Your State: adoption.', url: 'https://www.thecorestandards.org/standards-in-your-state/' }
    ],
    rejectedClaims: [
      'That tutoring raises test scores or grades by a set amount: refused; no promise of outcomes.',
      'Research claims about Common Core outcomes: not used; outside the primary sources.',
      'A list of states that left or renamed the standards: not printed; only the initiative\'s own adoption statement is used.',
      'The standards\' own worked example 8 + 6 = 14 is cited in the header only; every example on the page is ours.',
      'Any affiliation with the Common Core initiative, NGA Center, CCSSO, a state or a district: none.'
    ]
  }
};
