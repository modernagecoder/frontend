'use strict';
// Year 2 maths tutor online (ag- maths door, England; UK and US exams cluster Phase 2, row UK008).
// Sources, read raw on 31 October 2026 with curl; raw copies in keyword-research-2026-09/uk-us-gap/src/year-2-maths-tutor-online/:
//  - DfE, Mathematics programmes of study: key stages 1 and 2 (PRIMARY_national_curriculum_-_Mathematics_220714.pdf),
//    Year 2 programme of study. Statutory, verbatim: "recall and use addition and subtraction facts to 20 fluently, and
//    derive and use related facts up to 100"; "show that addition of two numbers can be done in any order
//    (commutative) and subtraction of one number from another cannot"; "recognise and use the inverse relationship
//    between addition and subtraction and use this to check calculations and solve missing number problems"; adding
//    "three one-digit numbers"; "recognise the place value of each digit in a two-digit number (tens, ones)"; "compare
//    and order numbers from 0 up to 100; use <, > and = signs"; "count in steps of 2, 3, and 5 from 0, and in tens from
//    any number, forward and backward"; "interpret and construct simple pictograms, tally charts, block diagrams and
//    simple tables"; "tell and write the time to five minutes, including quarter past/to the hour"; "compare and order
//    lengths, mass, volume/capacity and record the results using >, < and ="; "identify and describe the properties
//    of 3-D shapes, including the number of edges, vertices and faces". Notes, verbatim: "They count in multiples of
//    three to support their later understanding of a third."; "They begin to understand zero as a place holder.";
//    "Pupils extend their understanding of the language of addition and subtraction to include sum and difference.";
//    "Recording addition and subtraction in columns supports place value and prepares for formal written methods with
//    larger numbers."; "This establishes commutativity and associativity of addition."; "Comparing measures includes
//    simple multiples such as 'half as high'; 'twice as wide'."; "Pupils should count in fractions up to 10, starting
//    from any number"; "using many-to-one correspondence in pictograms with simple ratios 2, 5, 10"; "They use
//    commutativity and inverse relations to develop multiplicative reasoning". Key stage 1 end goal: "By the end of
//    year 2, pupils should know the number bonds to 20" (quoted on the KS1 page; paraphrased here).
//  - DfE, Primary assessments: future dates (gov.uk, updated 12 October 2026): optional KS1 tests recommended during
//    May 2027. STA, Understanding scaled scores at key stage 1: Year 2 test results reported as scaled scores 85 to 115.
// Our own: the "derive and check" framing, the Year 1 to Year 2 to Year 3 table, the five worked examples (a fact to
// 20 scaled to 100, checking subtraction by adding, three numbers made easy, a pictogram with a key of 5, counting in
// quarters), the practice set and the ladder. Spine: Year 2 is the year children stop only calculating and start
// deriving and checking: facts to 20 become facts to 100, and the inverse checks every answer. Lesson family: a
// single-year primary door, distinct from the KS1 page, the KS1 SATs page and the Year 1 page.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'YEAR 2', blurb: 'The year of derive and check: facts to 20 become facts to 100, and every subtraction can be checked by adding. Ages 6 to 7.' },
  slug: 'year-2-maths-tutor-online',
  code: 'gaa',
  accent: '#355125',
  accentRationale: 'Year 2 maths: a deep moss green (#355125, 8.41:1 on #FBF8F2 and 7.24:1 on the deepest paper tint), sibling in feel to the Year 1 plum yet clearly its own, apart from the times tables bottle green',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Year 2 maths tutor online',
  title: 'Year 2 Maths Tutor Online | Derive, Check and Explain',
  description: 'A Year 2 maths tutor online for ages 6 to 7: the Year 2 curriculum, deriving facts to 100, checking with the inverse, worked examples, and live classes.',
  ogDescription: 'Year 2 is where children start deriving and checking: 3 + 7 = 10 becomes 30 + 70 = 100, and every subtraction can be checked by adding. What to expect.',
  twitterDescription: 'Year 2 maths in England: facts to 20 and to 100, the inverse, tens and ones, pictograms, time to five minutes, and live online classes.',
  pageName: 'Year 2 Maths Tutor Online',
  webPageDescription: 'A guide for parents of Year 2 children in England to the Year 2 mathematics programme of study, built around deriving and checking, with original worked examples and live online classes.',
  courseDescription: 'Live online maths for Year 2: facts to 20 and related facts to 100, tens and ones, adding and subtracting two-digit numbers, the inverse, the 2, 5 and 10 tables, fractions, measures, time and simple charts.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Year 2 maths tutor',
  navLinks: [
    { href: '#shift', label: 'Derive and check' },
    { href: '#areas', label: 'The Year 2 content' },
    { href: '#words', label: 'Maths words' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Year 2 maths &middot; Ages 6 to 7',
  h1: 'Year 2 maths tutor online: the year of derive and check',
  lede: 'Ask a Year 1 child for 30 + 70 and many will count in tens on their fingers. By the end of Year 2 the national curriculum expects something smarter: a child who knows that 3 + 7 = 10 should see straight away that 30 + 70 = 100, and should be able to check a subtraction by adding the answer back. That is the heart of Year 2 maths, alongside two-digit calculations, the first three times tables, fractions such as three quarters, and time to five minutes. This page explains the shift from calculating to deriving and checking, sets out the whole Year 2 programme, lists the maths words children are expected to use, walks through five original examples, and describes our live online classes for six and seven year olds.',
  secondaryCta: { href: '#shift', label: 'Derive and check' },
  wa: 'Hello Modern Age Coders, my child is in Year 2 and I would like a free first maths class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the Year 2 programme of study',
  spec: [
    ['Year group', 'Year 2, the end of Key Stage 1'],
    ['Usual ages', '6 at the start, 7 by the summer'],
    ['Number facts', 'To 20 fluently, related facts to 100'],
    ['Checking', 'Inverse of adding and subtracting'],
    ['Times tables', '2, 5 and 10'],
    ['Time', 'To five minutes'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Year 2 maths in England is set by the statutory Year 2 programme of study from the DfE, for children aged 6 to 7. Children recall addition and subtraction facts to 20 fluently and derive related facts up to 100, use tens and ones, add and subtract two-digit numbers, check answers with the inverse, learn the 2, 5 and 10 times tables, find thirds and quarters, tell the time to five minutes and read simple charts. We teach it live online through our Elementary Maths course, in a class of 15 to 20 or 1-on-1, and the opening class costs nothing.',

  picks: {
    eyebrow: 'Courses for Year 2',
    h2: 'Which course fits a Year 2 child?',
    lede: 'Elementary Maths is the core Year 2 course. Mental Maths builds the quick facts that make deriving possible, and Reasoning and Readiness stretches a child who finds class work easy.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'Y2 / 01', title: 'Elementary Maths', note: 'Placed by grade with a short check: place value, two-digit adding and subtracting, the first tables, fractions, measures and data.' },
      { course: 'mental-maths-mastery-kids', code: 'Y2 / 02', title: 'Mental Maths for Kids', note: 'Making ten, doubles and near doubles, the facts a Year 2 child derives everything else from. Ages 5 to 10.' },
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'Y2 / 03', title: 'Reasoning and Readiness', note: 'Pattern, shape and number puzzles across ages 6 to 9, once class work feels easy.' }
    ]
  },

  sections: [
    {
      id: 'shift', tint: 'tint', eyebrow: 'Derive and check',
      h2: 'What is the big change in Year 2 maths?',
      lede: 'Children move from working every answer out to building new facts from old ones, and from trusting an answer to checking it. Both are written into the Year 2 programme.',
      body: [
        { kind: 'p', html: 'Two statutory lines carry the change. Children should "recall and use addition and subtraction facts to 20 fluently, and derive and use related facts up to 100". And they should "recognise and use the inverse relationship between addition and subtraction and use this to check calculations and solve missing number problems". The first says: if you know 3 + 7, you also know 30 + 70. The second says: if you think 52 &minus; 18 is 34, add 34 and 18 and see whether you get back to 52.' },
        { kind: 'table', mt: true, caption: 'How three ideas grow from Year 1 to Year 3 (DfE programmes of study; our pairing)', head: ['Idea', 'Year 1', 'Year 2', 'Year 3'], rows: [
          ['Number facts', 'Bonds and subtraction facts within 20', 'Facts to 20 fluently; related facts to 100', 'Facts used with three-digit numbers'],
          ['Checking', 'Not yet named', 'The inverse, to check and to solve missing numbers', 'Estimating and using the inverse to check'],
          ['Order', 'Not yet named', 'Adding can be done in any order; subtracting cannot', 'Used in mental methods with larger numbers'],
          ['Place value', 'Numbers to 100, beginning to see tens', 'Tens and ones in every two-digit number; zero as a place holder', 'Hundreds, tens and ones'],
          ['Written methods', 'Number sentences', 'Recording in columns to prepare for formal methods', 'Formal column addition and subtraction']
        ] },
        { kind: 'p', mt: true, html: 'The curriculum\'s notes spell out how deriving is meant to look, using a whole family of facts: 3 + 7 = 10, 10 &minus; 7 = 3 and 7 = 10 &minus; 3 lead to 30 + 70 = 100, 100 &minus; 70 = 30 and 70 = 100 &minus; 30. They also link checking to order: children add numbers in a different order to check, which "establishes commutativity and associativity of addition". Those are long words for a simple habit, one every Year 2 child can learn: try it another way and see if you get the same answer.' },
        { kind: 'two', mt: true,
          leftH3: 'Why this matters more than speed',
          left: [
            'A child who only counts gets slower as numbers grow. A child who derives gets faster, because each new fact rests on one already known.',
            'Checking with the inverse also means a child catches their own mistakes, which builds confidence far better than being told an answer is wrong.'
          ],
          rightH3: 'The test question',
          right: [
            'The end of KS1 tests are optional, and the DfE suggests May 2027 for any school that chooses them. The curriculum is the same either way.',
            'A child who derives and checks is well prepared for any test a school uses, without special drilling.'
          ] },
        { kind: 'source', html: 'Source: DfE, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">Mathematics programmes of study: key stages 1 and 2</a>, Years 1 to 3, read on 31 October 2026; DfE, Primary assessments: future dates, updated 12 October 2026. The pairing across years is ours.' }
      ]
    },
    {
      id: 'areas', tint: 'deep', eyebrow: 'The Year 2 content',
      h2: 'What do children learn in Year 2 maths?',
      lede: 'Eight areas, from number to statistics. This is a plain-English summary of the statutory Year 2 requirements, with one useful note from the curriculum for each.',
      body: [
        { kind: 'table', caption: 'The Year 2 mathematics programme of study (DfE; our summary of the statutory lines)', head: ['Area', 'What children learn', 'A note from the curriculum'], rows: [
          ['Number and place value', 'Counting in steps of 2, 3 and 5 from zero and in tens from any number; tens and ones; comparing and ordering to 100 with &lt;, &gt; and =', '"They count in multiples of three to support their later understanding of a third."'],
          ['Addition and subtraction', 'Two-digit numbers and ones, two-digit numbers and tens, two two-digit numbers, and three single digits; order and the inverse', '"Recording addition and subtraction in columns supports place value and prepares for formal written methods with larger numbers."'],
          ['Multiplication and division', 'The 2, 5 and 10 tables with division facts; odd and even; writing × and ÷ sentences; multiplication can be done in any order, division cannot', 'Children "use commutativity and inverse relations to develop multiplicative reasoning"'],
          ['Fractions', 'Thirds, quarters, two quarters and three quarters of shapes, sets and lengths; two quarters equal a half', '"Pupils should count in fractions up to 10, starting from any number"'],
          ['Measurement', 'Centimetres, metres, grams, kilograms, litres, millilitres and degrees; money; time to five minutes; minutes in an hour, hours in a day', '"Comparing measures includes simple multiples such as \'half as high\'; \'twice as wide\'."'],
          ['Properties of shapes', 'Sides and vertical lines of symmetry on 2-D shapes; edges, vertices and faces of 3-D shapes; flat faces on solids', 'Sorting shapes by their properties, using precise words'],
          ['Position and direction', 'Patterns and sequences; turns described as right angles, clockwise and anti-clockwise', 'Children give each other instructions for turns'],
          ['Statistics', 'Pictograms, tally charts, block diagrams and simple tables; questions about totals and comparisons', 'Pictograms may use "simple ratios 2, 5, 10", where one picture stands for more than one']
        ] },
        { kind: 'p', mt: true, html: 'Two notes are easy to overlook. Place value: Year 2 children "begin to understand zero as a place holder", the idea that the 0 in 40 is what makes it forty rather than four. And counting: the 3s appear in Year 2 counting even though the 3 times table is a Year 3 statement, because counting in threes prepares for thirds. The curriculum is quietly building the next year inside this one.' },
        { kind: 'source', html: 'Source: DfE Year 2 programme of study, its statutory lines and their guidance notes, consulted on 31 October 2026. The middle column summarises; the right-hand column quotes or closely follows the non-statutory notes.' }
      ]
    },
    {
      id: 'words', tint: '', eyebrow: 'Maths words',
      h2: 'Which maths words should a Year 2 child know?',
      lede: 'More than parents expect. The curriculum wants children to talk about maths precisely, and new words arrive in nearly every area.',
      body: [
        { kind: 'p', html: 'The Year 2 notes say that "Pupils extend their understanding of the language of addition and subtraction to include sum and difference." Shape brings sides, edges, vertices and faces; measures bring the units; position brings clockwise and anti-clockwise. A child who knows the word can follow the question, which matters even more when questions are read aloud.' },
        { kind: 'table', mt: true, caption: 'Year 2 vocabulary with a home example (words from the programme of study; examples ours)', head: ['Word', 'What it means', 'Ask at home'], rows: [
          ['Sum', 'The total when numbers are added', '"What is the sum of 12 and 9?"'],
          ['Difference', 'How much bigger one number is than another', '"What is the difference between 15 and 11?"'],
          ['Inverse', 'The operation that undoes another', '"How can adding check 40 minus 13?"'],
          ['Vertex, vertices', 'A corner where edges meet', '"How many vertices does this cereal box have?"'],
          ['Face, edge', 'A flat surface; a line where two faces meet', '"How many faces does a dice have?"'],
          ['Clockwise', 'Turning the way clock hands go', '"Turn a quarter turn clockwise. What do you face?"'],
          ['Tally', 'Marks in groups of five for counting', '"Tally the red cars that pass in five minutes."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Difference is the tricky one',
          left: [
            'Many children hear "difference" and add. Line up two towers of cubes and ask how many more one has: the gap is the difference.',
            'Counting up from the smaller number is often easier than taking away, and it gives the same answer.'
          ],
          rightH3: 'Time to five minutes',
          right: [
            'Year 2 asks children to "tell and write the time to five minutes, including quarter past/to the hour". Use a real analogue clock at home; a digital display does not teach it.',
            'Count the minute hand round in fives from the 12. It doubles as 5 times table practice.'
          ] }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Five Year 2 examples, worked through',
      lede: 'Written by us, and each one either derives or checks. They are written for a parent beside a child, objects first where it helps.',
      body: [
        { kind: 'two',
          leftH3: '1. A fact to 20 becomes a fact to 100',
          left: [
            '<strong>Question (ours).</strong> 60 + 40, and then 100 &minus; 40.',
            '<strong>Known fact.</strong> 6 + 4 = 10.',
            '<strong>Derive.</strong> Six tens and four tens make ten tens, which is 100. So 60 + 40 = 100, and taking 40 back leaves 60.',
            '<strong>Why it matters.</strong> This is "derive and use related facts up to 100" in action. With ten-sticks, the child can see that only the word "ten" has been added.'
          ],
          rightH3: '2. Checking a subtraction by adding',
          right: [
            '<strong>Question (ours).</strong> A child works out 81 &minus; 26 and gets 65.',
            '<strong>Check.</strong> Add the answer to the number taken away: 65 + 26 = 91. That is not 81, so something slipped.',
            '<strong>Find it.</strong> Partition: 81 &minus; 20 = 61, then 61 &minus; 6 = 55. Check again: 55 + 26 = 81.',
            '<strong>Why it matters.</strong> The inverse turns every subtraction into its own answer key. The child finds the mistake, not the adult.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. Adding three numbers the easy way',
          left: [
            '<strong>Question (ours).</strong> 8 + 5 + 2.',
            '<strong>Spot a ten.</strong> 8 and 2 make 10. The order of adding makes no difference, so add those first.',
            '<strong>Finish.</strong> 10 + 5 = 15.',
            '<strong>Why it matters.</strong> Year 2 asks children to add three one-digit numbers, and to know order does not matter for adding. Together they make this quick.'
          ],
          rightH3: '4. A pictogram with a key of 5',
          right: [
            '<strong>Question (ours).</strong> In a pictogram, one star stands for 5 books. Class A has 4 stars and Class B has 3 stars. How many more books did Class A read?',
            '<strong>Read it.</strong> Count each row in fives: Class A is 5, 10, 15, 20 books; Class B is 5, 10, 15 books.',
            '<strong>Compare.</strong> The difference is 20 &minus; 15 = 5 books, which is also just the one extra star.',
            '<strong>Why it matters.</strong> Pictograms with a key of 2, 5 or 10 join the times tables to data. Spotting that one extra star means 5 more is the reasoning step.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '5. Counting in quarters on a number line',
          left: [
            '<strong>Task (ours).</strong> Count in quarters from 1 to 2 on a number line.',
            '<strong>Steps.</strong> 1, 1 and a quarter, 1 and two quarters, 1 and three quarters, 2.',
            '<strong>Notice.</strong> 1 and two quarters is the same point as 1 and a half.',
            '<strong>Why it matters.</strong> Counting in fractions is a Year 2 expectation, and it shows that fractions are numbers on a line, not just slices.'
          ],
          rightH3: 'Practice set (ours, with answers)',
          right: [
            '(1) 70 + 30. (2) 100 &minus; 30. (3) Check 64 &minus; 27 = 37 by adding. (4) 7 + 6 + 3. (5) Write &lt;, &gt; or = : 5 tens and 3 ones &#9633; 35. (6) A key shows 1 circle = 2 children; how many children do 6 circles show? (7) How many minutes are in an hour? (8) Count in threes from 0 to 15.',
            '<strong>Answers:</strong> (1) 100; (2) 70; (3) 37 + 27 = 64, so it is right; (4) 16; (5) 53 &gt; 35; (6) 12; (7) 60; (8) 0, 3, 6, 9, 12, 15.'
          ] }
      ]
    },
    {
      id: 'classes', tint: 'deep', eyebrow: 'Our Year 2 classes',
      h2: 'When is a Year 2 maths tutor worth it?',
      lede: 'When a child still counts for facts to 20, is unsure about tens and ones, or loses confidence. Year 3 brings column methods and three new tables, and they rest on Year 2.',
      body: [
        { kind: 'ol', items: [
          '<strong>Free first class.</strong> The teacher asks a few derive-and-check questions and plays a place value game, to see what is secure.',
          '<strong>A small kit.</strong> Ten-sticks or bundled straws, single counters, and a clock with hands, kept next to the screen.',
          '<strong>Derive out loud.</strong> Children say which known fact they used. "I know 4 + 5, so 40 + 50 is 90."',
          '<strong>Check every time.</strong> Each subtraction is checked by adding, each addition by changing the order.',
          '<strong>Between classes.</strong> One short game and a handful of questions, plus a note for parents at the end of each block.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group or 1-on-1 in Year 2?',
          left: [
            'Our groups of 15 to 20 work well for a Year 2 child who enjoys a lively class and is keeping up.',
            'Pick 1-on-1 when one gap, such as tens and ones, needs closing before Year 3, or when a child works far ahead.'
          ],
          rightH3: 'What we will not do',
          right: [
            'Drill a seven year old with timed papers, or promise a test score. The end of KS1 tests are optional and we teach the curriculum.',
            'Claim a connection with your child\'s school or with the Department for Education. We work separately from both.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Through Year 2',
    h2: 'Four Year 2 checkpoints',
    lede: 'Signs that the derive-and-check habit is taking hold. Each one can be seen at the kitchen table.',
    table: { caption: 'Year 2 checkpoints, drawn by us from the statutory content', head: ['Checkpoint', 'Typical timing', 'What it looks like'], rows: [
      ['1. Tens and ones', 'Autumn', 'Says what each digit in 47 is worth, and that the 0 in 40 matters'],
      ['2. Facts to 20 without counting', 'Late autumn', 'Answers 9 + 6 and 14 &minus; 8 quickly'],
      ['3. Derived facts to 100', 'Spring', 'Uses 7 + 3 to answer 70 + 30 and 100 &minus; 70'],
      ['4. Checking by habit', 'Summer', 'Checks a subtraction by adding, unprompted']
    ] },
    left: { h3: 'Milestone four is the prize', ps: [
      'A child who checks their own work has become an independent learner in maths.',
      'For the next stage, see <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2 maths tuition</a>.'
    ] },
    right: { h3: 'Into Year 3', ps: [
      'The 3, 4 and 8 tables and formal columns arrive next.',
      'Lessons can pause over school holidays.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for six and seven year olds',
    lede: 'Core maths, faster facts and thinking courses for the end of Key Stage 1.',
    bands: [
      { num: 'I', h3: 'Core maths', sub: 'Years 2 and 3', courses: [
        { code: 'UK / Y21 / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths', blurb: 'Year 2 content, objects first, then numbers.' },
        { code: 'UK / Y21 / 02', slug: 'mental-maths-mastery-kids', title: 'Mental Maths', blurb: 'Making ten and doubles, for quick facts.' },
        { code: 'UK / Y21 / 03', slug: 'early-math-foundations', title: 'Early Maths Foundations', blurb: 'For a child who needs numbers to 20 made firm.' }
      ] },
      { num: 'II', h3: 'Stretch', sub: 'For keen thinkers', courses: [
        { code: 'UK / Y22 / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and Readiness', blurb: 'Pattern, shape and number reasoning, ages 6 to 9.' },
        { code: 'UK / Y22 / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus maths', blurb: 'Place value you can push with a finger.' },
        { code: 'UK / Y22 / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Logic and word problems, from age 7.' }
      ] },
      { num: 'III', h3: 'Making', sub: 'From age 6', courses: [
        { code: 'UK / Y23 / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Block programs with turns in right angles.' },
        { code: 'UK / Y23 / 02', slug: 'scratch-programming-complete-course', title: 'Scratch games', blurb: 'Short games once reading is steady.' },
        { code: 'UK / Y23 / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'For a Year 2 child turning seven.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'Inside a Year 2 class',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All our teachers are based in India and all class times are listed in UK time.',
    slots: [
      { time: 'After school', l: 'Short and lively, before tea.' },
      { time: 'Early evening', l: 'After clubs and activities.' },
      { time: 'Weekend morning', l: 'For calm, focused work.' }
    ],
    cells: [
      { h3: 'Derive, do not count', p: 'Every new fact is linked to one already known.' },
      { h3: 'Check by inverse', p: 'Children check their own answers every lesson.' },
      { h3: 'Words matter', p: 'Sum, difference, vertex and clockwise used precisely.' },
      { h3: 'Real clocks', p: 'Analogue clocks for time to five minutes.' },
      { h3: 'Free first class', p: 'A friendly trial with a few derive-and-check games, free.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20, or one child with a teacher.' }
    ]
  },

  projectsH2: 'Projects from our classes',
  projectsLede: 'A small selection of student work from regular lessons, none of it marked. <a class="ag-inline-link" href="/student-labs">Student labs</a> holds the rest.',
  reviewsLede: 'Parents\' Google reviews, as they wrote them.',

  fees: {
    h2: 'Fees for Year 2 maths classes',
    lede: 'No charge for the first class. Then one monthly fee, smaller for a group place than 1-on-1, which starts only after a course and a weekly time are settled. You can stop whenever you choose.',
    free: ['A friendly first class', 'A check of place value and facts to 20', 'Booking needs only a phone number'],
    group: ['15 to 20 Year 2 children', 'One teacher all year', 'Derive-and-check games at home', 'An update after each block'],
    one: ['One teacher, one child', 'Built around a specific gap', 'Room to stretch an able child']
  },

  faq: {
    eyebrow: 'Year 2 questions',
    h2: 'What parents of Year 2 children ask',
    items: [
      { q: 'What should my child be able to do in maths by July of Year 2?', a: 'Facts to 20 recalled fluently and related facts to 100, tens and ones, adding and subtracting two-digit numbers, checking with the inverse, the 2, 5 and 10 times tables, thirds and quarters, time to five minutes and simple charts.' },
      { q: 'What does derive related facts up to 100 mean?', a: 'Using a known fact to find a bigger one. If a child knows 3 + 7 = 10, they can derive 30 + 70 = 100 and 100 minus 70 = 30 without counting.' },
      { q: 'What is the inverse in Year 2 maths?', a: 'Adding and subtracting undo each other, so a child can check 52 minus 18 = 34 by adding 34 and 18. The Year 2 curriculum asks children to use this to check calculations and solve missing number problems.' },
      { q: 'Which times tables are in Year 2?', a: 'The 2, 5 and 10 times tables, with their division facts. Children also count in threes from zero, which prepares for the 3 times table in Year 3.' },
      { q: 'Is Year 2 maths harder than Year 1?', a: 'It moves faster. Numbers go to 100 in calculations, written methods start, and children are expected to explain and check. A secure Year 1 makes it much easier.' },
      { q: 'Are Year 2 maths worksheets enough practice?', a: 'They help with written calculation, but many Year 2 skills are spoken or practical: deriving facts aloud, checking by adding, reading a real clock and measuring. Mix worksheets with short games.' },
      { q: 'Does my Year 2 child have to sit SATs?', a: 'Not necessarily. The end of KS1 tests are optional, and the recommended window for schools that choose them is May 2027. Ask your child\'s teacher what the school plans.' },
      { q: 'How can I tell if my child needs extra help in Year 2?', a: 'Watch for counting on fingers for facts within 20, confusion over what each digit in a two-digit number is worth, or worry about maths. Any of these is worth a word with the teacher.' },
      { q: 'When are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are shown in UK time.' },
      { q: 'Are you connected with my child\'s school?', a: 'No. We run our classes entirely separately from schools, local authorities and the Department for Education.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Primary maths',
    h2: 'Pages for families at the end of Key Stage 1',
    lede: 'What comes next, and other ways to keep a keen child busy.',
    items: [
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'The step after Year 2, through to Year 6.' },
      { href: '/year-4-multiplication-tables-check-explained', label: 'The Year 4 tables check', p: 'Where the 2, 5 and 10 tables lead, two years on.' },
      { href: '/online-math-tutor-1st-grade', label: 'First grade maths (US)', p: 'US grade 1, for comparison across systems.' },
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'Puzzles for confident primary children.' },
      { href: '/ks2-coding-lessons-online', label: 'KS2 coding lessons', p: 'Coding from Year 3, for young problem solvers.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our UK index of maths and coding pages.' }
    ]
  },

  start: {
    h2: 'Try a free Year 2 maths class',
    lede: 'Add a phone number and a teacher will ring you back at a UK time of your choosing. The first class uses a few derive-and-check questions to find your child\'s starting point.',
    readFirst: 'Want more detail first? Look at the <a class="ag-inline-link" href="/courses/elementary-mathematics-complete-masterclass">Elementary Maths course</a> week by week, or read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'The quickest route is WhatsApp, which is free from a UK mobile. Someone from our team in India will reply from a +91 number.',
    formNote: 'There is no charge and no obligation. Expect one message back with a time.'
  },

  footer: {
    cols: [
      { h4: 'Primary maths', links: [
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' },
        { href: '/year-4-multiplication-tables-check-explained', label: 'Times tables check' },
        { href: '/online-math-tutor-1st-grade', label: 'First grade maths' },
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' }
      ] },
      { h4: 'About our school', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Year 2 maths that derives and checks'
  },

  personalityCss: `
.ag-root.ag-gaa .ag-hero h1 { letter-spacing: -0.018em; font-weight: 700; max-width: 22ch; }
.ag-root.ag-gaa .ag-capsule { border-left-width: 6px; border-radius: 9px; }
.ag-root.ag-gaa .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-gaa .ag-table caption { text-align: left; font-weight: 680; }
.ag-root.ag-gaa .ag-table td:first-child { font-weight: 640; width: 20%; }
.ag-root.ag-gaa .ag-steps li { margin-bottom: 9px; line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'England, DfE Year 2 mathematics programme of study: facts to 20 fluently and related facts to 100; commutative addition, non-commutative subtraction; inverse to check and solve missing numbers; two-digit and ones, tens, two two-digit numbers, three one-digit numbers; tens and ones; compare and order to 100 with signs; count in 2, 3, 5 and tens; 2, 5 and 10 tables with odd and even; thirds and quarters, two quarters equal a half; standard units; time to five minutes; 2-D and 3-D properties; turns as right angles; pictograms, tallies, block diagrams, tables. Notes: multiples of three for later thirds; zero as a place holder; sum and difference; columns prepare formal methods; commutativity and associativity; half as high, twice as wide; counting in fractions up to 10; pictogram ratios 2, 5, 10; commutativity and inverse for multiplicative reasoning. DfE future dates: optional KS1 tests during May 2027.',
    localProject: 'The year of derive and check. A Year 2 maths door for England: the two statutory lines on deriving related facts to 100 and checking with the inverse, a Year 1 to Year 2 to Year 3 progression table, the full Year 2 programme in eight areas with one curriculum note each, the vocabulary children are expected to use with home examples, five original worked examples (6 + 4 scaled to 60 + 40, checking 81 minus 26 by adding, three numbers with a ten spotted, a pictogram with a key of 5, counting in quarters) with a practice set, and when a tutor is worth it. Lesson family: a single-year primary door, distinct from the KS1, KS1 SATs and Year 1 pages.',
    requiredMentions: [
      'recall and use addition and subtraction facts to 20 fluently, and derive and use related facts up to 100',
      'recognise and use the inverse relationship between addition and subtraction and use this to check calculations and solve missing number problems',
      'They count in multiples of three to support their later understanding of a third.',
      'Recording addition and subtraction in columns supports place value and prepares for formal written methods with larger numbers.',
      'Pupils extend their understanding of the language of addition and subtraction to include sum and difference.',
      'begin to understand zero as a place holder',
      'establishes commutativity and associativity of addition',
      'Checking a subtraction by adding',
      'A pictogram with a key of 5'
    ],
    sources: [
      { claim: 'DfE, Mathematics programmes of study: key stages 1 and 2, Year 2 statutory requirements and notes, and Year 1 and Year 3 for progression.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study' },
      { claim: 'DfE, Mathematics programmes of study PDF, read as text.', url: 'https://assets.publishing.service.gov.uk/media/5a7da548ed915d2ac884cb07/PRIMARY_national_curriculum_-_Mathematics_220714.pdf' },
      { claim: 'DfE, Primary assessments: future dates: optional KS1 tests during May 2027.', url: 'https://www.gov.uk/guidance/primary-assessments-future-dates' }
    ],
    rejectedClaims: [
      'National Year 2 attainment figures: the KS1 tests are optional and take-up is not collected nationally, so none are stated.',
      'Test-specific preparation advice: left to the KS1 SATs explainer; this page teaches the curriculum.',
      'A school\'s exact termly order: varies, so not stated.',
      'Any promise of attainment or test score: declined.'
    ]
  }
};
