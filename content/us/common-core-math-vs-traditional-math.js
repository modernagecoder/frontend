'use strict';
// Common Core math vs traditional math (ag- maths topic door; US cluster Phase 3, row 62).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/common-core-math-vs-traditional-math/):
//  - thecorestandards.org, grade standards: 2.NBT.B.5 "Fluently add and subtract within 100 using strategies based on place
//    value..."; 3.OA.C.7 "By the end of Grade 3, know from memory all products of two one-digit numbers."; 4.NBT.B.4
//    "Fluently add and subtract multi-digit whole numbers using the standard algorithm."; 4.NBT.B.5 multiply "using
//    strategies based on place value and the properties of operations. Illustrate and explain the calculation by using
//    equations, rectangular arrays, and/or area models."; 4.NBT.B.6 division by strategies; 5.NBT.B.5 "Fluently multiply
//    multi-digit whole numbers using the standard algorithm."; 6.NS.B.2 "Fluently divide multi-digit numbers using the
//    standard algorithm."; 6.NS.B.3 decimals with "the standard algorithm for each operation".
//  - Standards for Mathematical Practice: MP1 "Make sense of problems and persevere in solving them." to MP8 (eight
//    practices); MP1 text "Does this make sense?".
//  - FAQ: developed by state leaders from "48 states, two territories and the District of Columbia" in 2009, through the NGA
//    Center and CCSSO; "Adoption of the standards is voluntary."; standards "do not dictate how teachers should teach".
//  - Standards in Your State: "Forty-one states, the District of Columbia, four territories, and the Department of Defense
//    Education Activity (DoDEA) have adopted"; states "may choose to change or add onto the standards".
//  - Key Shifts in Mathematics: focus (K-2 addition and subtraction; 3-5 multiplication, division and fractions),
//    coherence, rigor: "conceptual understanding, procedural skills and fluency, and application" with "equal intensity";
//    "The standards call for speed and accuracy in calculation."
//  - Texas Education Agency, Mathematics: "K-12 mathematics Texas Essential Knowledge and Skills (TEKS)" (a state using its
//    own standards). Florida DOE returned 403; not retried.
// "Traditional math" has no official definition; the page describes it as a teaching emphasis, labelled as our description.
// Our own material, labelled: 47 x 36 three ways (standard algorithm 282 + 1410 = 1692; area model 1200 + 240 + 210 + 42 =
// 1692), 852 / 4 by partial quotients (200 + 13 = 213), the Python partial-products function and its output, the
// parent table, and the practice set.
// Lesson family: place value decomposition (partial products) checked against the standard algorithm.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH', blurb: 'Common Core math and traditional math explained from the standards themselves, with one problem worked both ways.' },
  slug: 'common-core-math-vs-traditional-math',
  code: 'ccmt',
  accent: '#2B127A',
  accentRationale: 'Common Core vs traditional math: a deep violet ink, #2B127A as allocated, distinct from the coding-page blues and high contrast on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Common Core math vs traditional math',
  title: 'Common Core Math vs Traditional Math: A Parent Guide',
  description: 'Common Core math vs traditional math, explained from the standards: when the algorithm is required, why area models appear, and one problem solved two ways.',
  ogDescription: 'Common Core does not ban the standard algorithm; it requires it, in grades 4, 5 and 6. What changes is the route there. The standards, the practices and a worked problem, both ways.',
  twitterDescription: 'Common Core and traditional math compared from the standards, with a worked example.',
  pageName: 'Common Core Math vs Traditional Math',
  webPageDescription: 'A balanced guide for US parents to Common Core math and traditional math, quoting the Common Core State Standards and showing one multiplication problem worked with the standard algorithm and with an area model.',
  courseDescription: 'Live online math classes for US students from elementary school to algebra, teaching both understanding and fluent standard methods, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Common Core vs traditional math',
  navLinks: [
    { href: '#what', label: 'What each means' },
    { href: '#algorithm', label: 'The algorithm' },
    { href: '#both-ways', label: 'Both ways' },
    { href: '#practices', label: 'Eight practices' },
    { href: '#home', label: 'Helping at home' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades K to 8 &middot; From the standards themselves',
  h1: 'Common Core math vs traditional math',
  lede: 'Few school topics divide parents like Common Core math. A child brings home a page of boxes and arrows for a sum the parent would solve in four lines, and it looks as if the old way has been banned. It has not. The Common Core State Standards require the standard algorithms, in named grades. What they add is a longer route to them through place value and models, plus an equal weight on explaining why. This guide quotes the standards directly, sets out what people usually mean by traditional math, and works one problem both ways so you can see the difference for yourself.',
  secondaryCta: { href: '#both-ways', label: 'See one problem both ways' },
  wa: 'Hello Modern Age Coders, my child in the US is struggling with Common Core math homework. Could we book a free first lesson?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['Standard algorithm', 'Required in grades 4 to 6'],
    ['Times tables', 'From memory by end of grade 3'],
    ['Adopted by', '41 states and DC, per the initiative'],
    ['Practices', 'Eight'],
    ['Our classes', 'Live, online'],
    ['Formats', 'Batch or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Common Core math does not replace the standard algorithms; the standards require them: adding and subtracting multi-digit numbers in grade 4 (4.NBT.B.4), multiplying in grade 5 (5.NBT.B.5) and dividing in grade 6 (6.NS.B.2). Before that, students use place-value strategies and models such as area models and explain their reasoning. Traditional math usually means teaching the algorithm first and practising it heavily. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.',

  picks: {
    eyebrow: 'Understanding and fluency together',
    h2: 'Three math courses that teach the why and the fast way',
    lede: 'Each one builds number sense and then the standard methods, so homework in either style makes sense.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'CCMT / 01', title: 'Elementary math, grades 1 to 5', note: 'Place value, times tables and the standard methods.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'CCMT / 02', title: 'Middle school math', note: 'Fractions, ratios, pre-algebra and geometry.' },
      { course: 'algebra-foundations-masterclass', code: 'CCMT / 03', title: 'Algebra foundations', note: 'Pre-algebra and Algebra 1, explained and practised.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What each means',
      h2: 'What Common Core is, and what people mean by traditional math',
      lede: 'One of these is a published set of standards. The other is a teaching style with no official text. That difference explains much of the argument.',
      body: [
        { kind: 'table', caption: 'Common Core and traditional math compared (Common Core facts from thecorestandards.org, read 17 October 2026; the traditional column is our description)', head: ['Point', 'Common Core math', 'Traditional math'], rows: [
          ['What it is', 'Standards: what students should know in each grade', 'A teaching approach, not a document'],
          ['Who wrote it', 'State leaders through the NGA Center and CCSSO, from 2009', 'No single author'],
          ['Does it say how to teach?', 'No: it sets goals, not methods', 'Usually a set method, shown then practised'],
          ['Standard algorithms', 'Required in grades 4, 5 and 6', 'Taught early, often first'],
          ['Models and drawings', 'Used before and alongside the algorithm', 'Used less, or skipped'],
          ['Explaining reasoning', 'Weighted equally with fluency and application', 'Mostly the answer and the method']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Who uses Common Core',
          left: [
            'The initiative&rsquo;s own page says "Forty-one states, the District of Columbia, four territories, and the Department of Defense Education Activity (DoDEA) have adopted" the standards, and that states may change or add to them.',
            'Its FAQ is explicit that "Adoption of the standards is voluntary." Some states write their own: Texas, for example, teaches to its own Texas Essential Knowledge and Skills (TEKS) in mathematics.'
          ],
          rightH3: 'Standards are not worksheets',
          right: [
            'The Common Core FAQ says the standards "establish what students need to learn, but do not dictate how teachers should teach." The boxes, arrows and number bonds on a worksheet come from a curriculum a district chose, not from the standards text.',
            'That matters when you raise a concern: the right person is often the school or district that picked the materials.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.thecorestandards.org/about-the-standards/frequently-asked-questions/" rel="noopener" target="_blank">Common Core FAQ</a>, <a class="ag-inline-link" href="https://www.thecorestandards.org/standards-in-your-state/" rel="noopener" target="_blank">Standards in Your State</a>, and the <a class="ag-inline-link" href="https://tea.texas.gov/academics/subject-areas/mathematics" rel="noopener" target="_blank">Texas Education Agency mathematics page</a>, read 17 October 2026. We are not connected with the Common Core initiative or any state.' }
      ]
    },
    {
      id: 'algorithm', tint: 'deep', eyebrow: 'The algorithm',
      h2: 'Where the standards require the standard algorithm',
      lede: 'The most common worry is that Common Core abandons the column methods parents learned. The grade standards say the opposite, with a timetable.',
      body: [
        { kind: 'table', caption: 'From strategies to standard algorithms in the Common Core math standards (thecorestandards.org, read 17 October 2026)', head: ['Grade', 'Standard', 'What it asks'], rows: [
          ['2', '2.NBT.B.5', 'Add and subtract within 100 fluently using place-value strategies'],
          ['3', '3.OA.C.7', '"By the end of Grade 3, know from memory all products of two one-digit numbers."'],
          ['4', '4.NBT.B.4', '"Fluently add and subtract multi-digit whole numbers using the standard algorithm."'],
          ['4', '4.NBT.B.5', 'Multiply using place-value strategies; explain with equations, arrays or area models'],
          ['5', '5.NBT.B.5', '"Fluently multiply multi-digit whole numbers using the standard algorithm."'],
          ['6', '6.NS.B.2', '"Fluently divide multi-digit numbers using the standard algorithm."'],
          ['6', '6.NS.B.3', 'Add, subtract, multiply and divide multi-digit decimals with the standard algorithm for each']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The pattern',
          left: [
            'For each operation, the standards place a year of strategies and models first, then fluency with the standard algorithm a year or so later: multiplication with area models in grade 4, the algorithm in grade 5; division with strategies in grades 4 and 5, the algorithm in grade 6.',
            'So a fourth grader drawing area models is not being kept from the algorithm. They are in the year before it.'
          ],
          rightH3: 'Memorisation is in there too',
          right: [
            'Standard 3.OA.C.7 asks children to know all single-digit products from memory by the end of grade 3. The initiative&rsquo;s key shifts page adds that "The standards call for speed and accuracy in calculation."',
            'The idea that Common Core rejects times tables or drill does not match the text. What it rejects is drill without understanding.'
          ] }
      ]
    },
    {
      id: 'both-ways', tint: 'tint', eyebrow: 'One problem, both ways',
      h2: 'Working 47 x 36 the traditional way and the Common Core way',
      lede: 'Our worked example. Both methods give 1,692; they record the same arithmetic differently.',
      body: [
        { kind: 'table', caption: '47 x 36 by the standard algorithm (traditional) and by an area model with partial products (our example)', head: ['Step', 'Standard algorithm', 'Area model, partial products'], rows: [
          ['1', '47 x 6 = 282 (carry the 4 from 7 x 6 = 42)', 'Split 47 into 40 + 7 and 36 into 30 + 6'],
          ['2', '47 x 30 = 1,410 (write a 0, then 47 x 3)', '40 x 30 = 1,200 and 40 x 6 = 240'],
          ['3', 'Add the rows: 282 + 1,410', '7 x 30 = 210 and 7 x 6 = 42'],
          ['4', 'Answer: 1,692', '1,200 + 240 + 210 + 42 = 1,692']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the area model shows',
          left: [
            'The four partial products are exactly the four rectangles in a drawing of a 47 by 36 rectangle split at the tens. A child can see that 40 x 30 is the big piece and 7 x 6 the small corner.',
            'That picture later becomes (a + b)(c + d) in algebra, which is the main argument for teaching it.'
          ],
          rightH3: 'What the algorithm offers',
          right: [
            'Speed and fewer lines. The carried 4 and the shifted second row are compressed versions of the same partial products, which is why the standards want both, in that order.',
            'A child who understands the area model usually learns the algorithm faster and makes fewer place-value mistakes in it.'
          ] },
        { kind: 'p', mt: true, html: 'Division follows the same idea. For 852 / 4, a Common Core worksheet may use partial quotients: 4 x 200 = 800, leaving 52; 4 x 13 = 52; so the quotient is 200 + 13 = 213. Long division, required by 6.NS.B.2, records the same steps digit by digit.' },
        { kind: 'code', mt: true, label: 'partial_products.py (our example)', lang: 'Python 3', code: 'def place_values(n):\n    digits = str(n)\n    return [int(d) * 10 ** (len(digits) - i - 1) for i, d in enumerate(digits) if d != "0"]\n\ndef partial_products(a, b):\n    parts = [x * y for x in place_values(a) for y in place_values(b)]\n    print(" + ".join(str(p) for p in parts), "=", sum(parts))\n    return sum(parts)\n\nassert partial_products(47, 36) == 47 * 36\npartial_products(128, 5)', note: 'Output: 1200 + 240 + 210 + 42 = 1692, then 500 + 100 + 40 = 640. The assert line checks the area-model total against Python&rsquo;s own multiplication, the way a student checks one method with another.' }
      ]
    },
    {
      id: 'practices', tint: 'deep', eyebrow: 'Eight practices',
      h2: 'The habits Common Core asks for in every grade',
      lede: 'Alongside grade content, the standards list eight Standards for Mathematical Practice. They explain why homework often asks a child to "explain" or "show another way".',
      body: [
        { kind: 'table', caption: 'The eight Standards for Mathematical Practice (thecorestandards.org, read 17 October 2026)', head: ['Code', 'Practice'], rows: [
          ['MP1', 'Make sense of problems and persevere in solving them'],
          ['MP2', 'Reason abstractly and quantitatively'],
          ['MP3', 'Construct viable arguments and critique the reasoning of others'],
          ['MP4', 'Model with mathematics'],
          ['MP5', 'Use appropriate tools strategically'],
          ['MP6', 'Attend to precision'],
          ['MP7', 'Look for and make use of structure'],
          ['MP8', 'Look for and express regularity in repeated reasoning']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Rigor, as the initiative defines it',
          left: [
            'The key shifts page says rigor means pursuing "conceptual understanding, procedural skills and fluency, and application" with equal intensity, and that it is not about "making math harder or introducing topics at earlier grades."',
            'Focus is the other shift: in grades K to 2 the major work is addition and subtraction, and in grades 3 to 5 multiplication, division and fractions.'
          ],
          rightH3: 'Where critics and supporters agree',
          right: [
            'Supporters point to MP1&rsquo;s question, "Does this make sense?", as a habit that prevents silly answers. Critics worry that time on explanations crowds out practice.',
            'Both can be true in a given classroom. The standards ask for balance; whether a child gets it depends on the curriculum and the teacher, which is a fair thing for parents to ask about.'
          ] }
      ]
    },
    {
      id: 'home', tint: 'tint', eyebrow: 'Helping at home',
      h2: 'How to help with homework in a method you were not taught',
      lede: 'Our advice for parents who learned the algorithm first.',
      body: [
        { kind: 'ol', items: [
          '<b>Ask your child to teach you the method.</b> Explaining is itself one of the practices the homework is aiming at.',
          '<b>Check the answer your way.</b> If both methods agree, the method on the page is probably fine.',
          '<b>Match each part of the model to your method.</b> Show how the carried digit is one of the partial products.',
          '<b>Do not skip the model if the assignment asks for it.</b> The teacher is assessing the reasoning, not only the answer.',
          '<b>Keep a few minutes for facts.</b> Times tables from memory are a grade 3 standard and make every later method easier.'
        ] },
        { kind: 'table', mt: true, caption: 'A short practice set, both ways (ours; answers in brackets)', head: ['Problem', 'Try it as', 'Then check with'], rows: [
          ['23 x 14', 'Area model (200 + 80 + 30 + 12)', 'Standard algorithm (322)'],
          ['56 x 7', 'Partial products (350 + 42)', 'Standard algorithm (392)'],
          ['936 / 3', 'Partial quotients (300 + 10 + 2)', 'Long division (312)'],
          ['305 - 178', 'Count up from 178 (2 + 20 + 100 + 5)', 'Standard algorithm (127)']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages from strategies to fluency',
    lede: 'How children usually move through the standards&rsquo; sequence.',
    table: { caption: 'Stages in multi-digit arithmetic (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Counting', 'Adds by counting on; place value is shaky'],
      ['2. Strategies', 'Splits numbers into tens and ones; draws models'],
      ['3. Algorithm', 'Uses the column method, sometimes without knowing why'],
      ['4. Fluent and flexible', 'Chooses the quickest method and can explain it']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 without stage 2 often leads to place-value slips. Stage 2 without stage 3 leads to slow work. The goal is stage 4.',
      'Ask the teacher which stage the class is in this term.'
    ] },
    right: { h3: 'For students', ps: [
      'If you know a fast way, use the slow way once to check it. That is what mathematicians do.',
      'Times tables really do make everything easier.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine math courses from kindergarten to high school',
    lede: 'Live lessons that teach the reasoning the standards ask for and the speed families expect.',
    bands: [
      { num: 'I', h3: 'Early and elementary', sub: 'Grades K to 5', courses: [
        { code: 'CCMT / E / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Number sense, hands on.' },
        { code: 'CCMT / E / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5.' },
        { code: 'CCMT / E / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Number sense, not tricks.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'CCMT / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Pre-algebra and geometry.' },
        { code: 'CCMT / M / 02', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'MATHCOUNTS and AMC 8.' },
        { code: 'CCMT / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Math in Python.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Grades 9 to 12', courses: [
        { code: 'CCMT / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra 1 in depth.' },
        { code: 'CCMT / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra to calculus.' },
        { code: 'CCMT / H / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'The digital SAT.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Math lessons that respect both methods',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, aligned to the week&rsquo;s homework.' },
      { time: 'Weekends', l: 'Catch-up and practice sessions.' },
      { time: '1-on-1', l: 'Paced to the school curriculum.' }
    ],
    cells: [
      { h3: 'Why, then fast', p: 'Models first, algorithms after.' },
      { h3: 'School-aware', p: 'We follow your child&rsquo;s curriculum.' },
      { h3: 'Fact fluency', p: 'A few minutes of facts each lesson.' },
      { h3: 'Concepts, not answers', p: 'Homework stays the student&rsquo;s own.' },
      { h3: 'Every state', p: 'Common Core or state standards.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Some projects mix math and code. See more on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents&rsquo; Google reviews, exactly as written.',

  fees: {
    h2: 'Fees',
    lede: 'Math classes are billed monthly in US dollars, with no annual contract, so a family can add support for a hard unit and stop afterwards.',
    free: ['A free first lesson', 'Bring this week&rsquo;s homework', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Matched to the curriculum', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Common Core vs traditional math: common questions',
    items: [
      { q: 'Does Common Core teach the standard algorithm?', a: 'Yes. The standards require fluency with the standard algorithm for multi-digit addition and subtraction in grade 4 (4.NBT.B.4), multiplication in grade 5 (5.NBT.B.5) and division in grade 6 (6.NS.B.2).' },
      { q: 'Why does my child draw boxes to multiply?', a: 'That is an area model. Standard 4.NBT.B.5 asks fourth graders to multiply using place-value strategies and to explain with equations, arrays or area models, a year before the standard algorithm is required.' },
      { q: 'Does Common Core require memorising times tables?', a: 'Yes. Standard 3.OA.C.7 says that by the end of grade 3 students should know from memory all products of two one-digit numbers.' },
      { q: 'What is traditional math?', a: 'There is no official definition. People usually mean teaching the standard method first, with lots of practice and less emphasis on models or written explanations.' },
      { q: 'Which states use Common Core?', a: 'The initiative says 41 states, the District of Columbia, four territories and DoDEA have adopted it. Adoption is voluntary, and some states, such as Texas with its TEKS, use their own standards.' },
      { q: 'Does Common Core tell teachers how to teach?', a: 'No. Its FAQ says the standards establish what students need to learn but do not dictate how teachers should teach. Worksheets come from the curriculum a district chooses.' },
      { q: 'Is one approach better?', a: 'The standards themselves ask for both understanding and speed. Children usually do best with models first and fluent methods after, plus regular fact practice.' },
      { q: 'How can I help if I learned it differently?', a: 'Ask your child to explain the method, check the answer your own way, and show how the two match. Keep the model if the assignment asks for it.' },
      { q: 'When are your math classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with the Common Core initiative?', a: 'No. We are an independent online school; we quote the published standards and link to them.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More math help for US families.',
    items: [
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'The times-tables year.' },
      { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math tutoring', p: 'Long division and ratios.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'Where area models pay off.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'Choosing a sequence at home.' },
      { href: '/online-maths-tutoring-for-kids-in-usa', label: 'Math tutoring for kids', p: 'Live online, for US students.' },
      { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation', p: 'For children who love problems.' },
      { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state', p: 'Computer science graduation requirements in all 50 states and DC, with state sources.' },
      { href: '/computer-science-standards-by-state', label: 'CS standards by state', p: 'Which states have K-12 computer science standards, and which include AI.' },
      { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state', p: 'High school computer science access and enrollment in every US state, 2025 data.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send us a photo of the homework that caused the argument. The teacher will show your child both methods and why they give the same answer.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">our method</a>, or browse our <a class="ag-inline-link" href="/courses">math and coding courses</a>.',
    note: 'We teach math live by video from India, at times that work for American school nights. WhatsApp is the easiest way to reach us.',
    formNote: 'The first lesson is free; no card needed.'
  },

  footer: {
    cols: [
      { h4: 'Math help', links: [
        { href: '/online-math-tutor-3rd-grade', label: 'Third grade math' },
        { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math' },
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '1,692 either way'
  },

  personalityCss: `
.ag-root.ag-ccmt .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-ccmt .ag-capsule { border-left-width: 4px; border-radius: 5px; }
.ag-root.ag-ccmt .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ccmt .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-ccmt .ag-section-head h2 { max-width: 30ch; }
`,

  dossier: {
    curriculumAuthority: 'Common Core State Standards (thecorestandards.org), read raw 17 October 2026: 2.NBT.B.5, 3.OA.C.7 (products from memory by end of grade 3), 4.NBT.B.4 (standard algorithm add and subtract), 4.NBT.B.5 and B.6 (strategies, area models), 5.NBT.B.5 (standard algorithm multiply), 6.NS.B.2 (standard algorithm divide), 6.NS.B.3 (decimals); eight Standards for Mathematical Practice; FAQ (48 states, two territories and DC in 2009; NGA Center and CCSSO; voluntary; does not dictate how to teach); Standards in Your State (41 states, DC, four territories, DoDEA); key shifts (focus, coherence, rigor with equal intensity; speed and accuracy). Texas Education Agency mathematics page (TEKS).',
    localProject: 'Our worked example 47 x 36 = 1,692 by the standard algorithm (282 + 1,410) and by partial products (1,200 + 240 + 210 + 42); 852 / 4 = 213 by partial quotients; our Python partial_products function (outputs 1692 and 640); our practice set. Lesson family: place value decomposition.',
    requiredMentions: ['4.NBT.B.4', '5.NBT.B.5', '6.NS.B.2', 'know from memory all products of two one-digit numbers', 'Forty-one states, the District of Columbia, four territories', 'Adoption of the standards is voluntary.', 'do not dictate how teachers should teach', 'The standards call for speed and accuracy in calculation.', 'Texas Essential Knowledge and Skills (TEKS)', '1,200 + 240 + 210 + 42 = 1,692', '200 + 13 = 213', 'Make sense of problems and persevere in solving them'],
    sources: [
      { claim: 'Common Core grade 4 Number and Operations in Base Ten.', url: 'https://www.thecorestandards.org/Math/Content/4/NBT/' },
      { claim: 'Common Core grade 5 NBT and grade 6 NS: standard algorithms.', url: 'https://www.thecorestandards.org/Math/Content/6/NS/' },
      { claim: 'Standards for Mathematical Practice.', url: 'https://www.thecorestandards.org/Math/Practice/' },
      { claim: 'Common Core FAQ and Standards in Your State.', url: 'https://www.thecorestandards.org/about-the-standards/frequently-asked-questions/' },
      { claim: 'Key Shifts in Mathematics.', url: 'https://www.thecorestandards.org/other-resources/key-shifts-in-mathematics/' },
      { claim: 'Texas Education Agency mathematics: TEKS.', url: 'https://tea.texas.gov/academics/subject-areas/mathematics' }
    ],
    rejectedClaims: [
      'Research claims that one approach produces higher scores: not used; contested and outside the primary sources.',
      'A list of states that left or revised Common Core: not printed; only Texas is named, from its own department page. Florida\'s department returned 403.',
      'That Common Core bans the standard algorithm or memorisation: contradicted by 3.OA.C.7, 4.NBT.B.4, 5.NBT.B.5 and 6.NS.B.2.',
      'Score or grade promises for our classes: refused.',
      'Any affiliation with the Common Core initiative, NGA, CCSSO or any state: none.'
    ]
  }
};
