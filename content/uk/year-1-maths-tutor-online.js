'use strict';
// Year 1 maths tutor online (ag- maths door, England; UK and US exams cluster Phase 2, row UK007).
// Sources, read raw on 31 October 2026 with curl; raw copies in keyword-research-2026-09/uk-us-gap/src/year-1-maths-tutor-online/:
//  - DfE, Mathematics programmes of study: key stages 1 and 2 (PRIMARY_national_curriculum_-_Mathematics_220714.pdf),
//    Year 1 programme of study. Statutory, verbatim: "count to and across 100, forwards and backwards, beginning with
//    0 or 1, or from any given number"; "count, read and write numbers to 100 in numerals; count in multiples of twos,
//    fives and tens"; "given a number, identify one more and one less"; "read and write numbers from 1 to 20 in
//    numerals and words"; "represent and use number bonds and related subtraction facts within 20"; "add and subtract
//    one-digit and two-digit numbers to 20, including zero"; missing number problems "such as 7 = □ – 9" (restated
//    without the dash glyph); multiplication and division "using concrete objects, pictorial representations and
//    arrays with the support of the teacher"; half and quarter "as one of two equal parts" and "one of four equal
//    parts"; "tell the time to the hour and half past the hour and draw the hands on a clock face to show these times";
//    "recognise and know the value of different denominations of coins and notes"; "describe position, direction and
//    movement, including whole, half, quarter and three-quarter turns". Notes: "Pupils memorise and reason with number
//    bonds to 10 and 20 in several forms (for example, 9 + 7 = 16; 16 – 7 = 9; 7 = 16 – 9)"; "They should realise the
//    effect of adding or subtracting zero."; "They recognise and create repeating patterns with objects and with
//    shapes."; "Pupils begin to recognise place value in numbers beyond 20"; "The pairs of terms: mass and weight,
//    volume and capacity, are used interchangeably at this stage."; "know that rectangles, triangles, cuboids and
//    pyramids are not always similar to each other". Key stage 1 focus: "confidence and mental fluency with whole
//    numbers, counting and place value".
//  - DfE, EYFS statutory framework for group and school-based providers, from September 2026: end of Reception ELG
//    Number "deep understanding of numbers to 10" and Numerical Patterns "Verbally count beyond 20"; 1.9 ELGs support
//    a judgement about "readiness for year 1"; 2.16 "Year 1 teachers must be given a copy of the Profile report."
// Our own: the Reception to Year 1 bridge table, the termly shape, the five worked examples (one more across a ten,
// a missing number with the equals sign as balance, one fact in three forms, half and quarter of eight, the hands at
// half past), the practice set and the ladder. Spine: Year 1 is the bridge year, where numbers grow from 10 to 100 and
// the equals sign stops meaning "the answer comes next". Lesson family: a single-year primary door, with its own
// spine and examples distinct from the KS1 page and the Year 2 page.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'YEAR 1', blurb: 'The bridge year: numbers grow from 10 to 100, bonds stretch to 20, and the equals sign becomes a balance. Ages 5 to 6.' },
  slug: 'year-1-maths-tutor-online',
  code: 'yea',
  accent: '#6A3752',
  accentRationale: 'Year 1 maths: a soft plum (#6A3752, 8.68:1 on #FBF8F2 and 7.47:1 on the deepest paper tint), warm for young children and clear of the KS1 violet and the Year 2 moss',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Year 1 maths tutor online',
  title: 'Year 1 Maths Tutor Online | Numbers to 100, Bonds to 20',
  description: 'A Year 1 maths tutor online for ages 5 to 6: what the national curriculum asks in Year 1, the step up from Reception, worked examples and live classes.',
  ogDescription: 'Year 1 is the bridge year in maths: numbers grow from 10 to 100, number bonds stretch to 20, and missing number problems arrive. What to expect and how to help.',
  twitterDescription: 'Year 1 maths in England: counting to 100, bonds within 20, missing numbers, halves and quarters, half past the hour, and live online classes for ages 5 to 6.',
  pageName: 'Year 1 Maths Tutor Online',
  webPageDescription: 'A guide for parents of Year 1 children in England to the Year 1 mathematics programme of study, with original worked examples and live online maths classes.',
  courseDescription: 'Live online maths for Year 1: counting to 100, one more and one less, bonds and subtraction facts within 20, missing numbers, first grouping and sharing, halves and quarters, and o\'clock and half past.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Year 1 maths tutor',
  navLinks: [
    { href: '#bridge', label: 'From Reception' },
    { href: '#content', label: 'The Year 1 content' },
    { href: '#equals', label: 'The equals sign' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Year 1 maths &middot; Ages 5 to 6',
  h1: 'Year 1 maths tutor online: the year numbers grow to 100',
  lede: 'Year 1 is the first year of the national curriculum, and in maths it is a bridge. A child who left Reception with a deep feel for numbers to 10 is expected, by the following summer, to count to and across 100, read and write numbers to 20 in words, and know number bonds within 20 both ways round. Year 1 is also where missing number problems such as 7 = ? &minus; 9 first appear, and that small puzzle changes what a child thinks the equals sign means. This page shows the step up from Reception, sets out the whole Year 1 programme in plain terms, explains why the equals sign matters so much this year, works through five examples of our own, and describes how our live classes teach five and six year olds.',
  secondaryCta: { href: '#content', label: 'What Year 1 covers' },
  wa: 'Hello Modern Age Coders, my child is in Year 1 and I would like a free first maths class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the Year 1 programme of study and the EYFS goals before it',
  spec: [
    ['Year group', 'Year 1, the start of Key Stage 1'],
    ['Usual ages', '5 at the start, 6 by the summer'],
    ['Counting', 'To and across 100'],
    ['Number facts', 'Bonds and subtraction facts within 20'],
    ['New idea', 'Missing number problems'],
    ['Time', 'O\'clock and half past'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Year 1 maths in England follows the Department for Education\'s Year 1 programme of study, for children aged 5 to 6. Over the year children count past 100, find one more and one less than any number, learn addition facts to 20 with their matching subtractions, solve missing number puzzles, group and share real objects, find halves and quarters, name coins and notes, and read o\'clock and half past. Modern Age Coders teaches Year 1 maths live online, in a group of 15 to 20 or 1-on-1, through Elementary Maths, with objects before symbols. The first class is free.',

  picks: {
    eyebrow: 'Courses for Year 1',
    h2: 'Three courses for a Year 1 child',
    lede: 'Elementary Maths is the main Year 1 course. Early Maths Foundations suits a child still settling numbers to 10, and Reasoning and Readiness a child who loves puzzles.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'Y1 / 01', title: 'Elementary Maths', note: 'Its first level is built for Grades 1 and 2: counting, tens and ones, adding and taking away, early grouping, shapes, clocks and coins.' },
      { course: 'early-math-foundations', code: 'Y1 / 02', title: 'Early Maths Foundations', note: 'Listed for ages 4 to 7: ten-frames and parts of numbers, for a child who needs Reception ideas made secure.' },
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'Y1 / 03', title: 'Reasoning and Readiness', note: 'Patterns, shapes and number puzzles for ages 6 to 9, for a curious child late in Year 1.' }
    ]
  },

  sections: [
    {
      id: 'bridge', tint: 'tint', eyebrow: 'From Reception',
      h2: 'How is Year 1 maths different from Reception?',
      lede: 'Reception ends with numbers to 10 known deeply. Year 1 stretches the same ideas to 20 for facts and to 100 for counting, and starts writing them down as number sentences.',
      body: [
        { kind: 'p', html: 'At the end of Reception the EYFS framework describes a child at the expected level as having "a deep understanding of numbers to 10" and able to count aloud beyond 20. That judgement is passed on: the framework states that "Year 1 teachers must be given a copy of the Profile report", so a Year 1 teacher knows from September who is secure and who is still emerging. The Year 1 programme then picks up each idea and takes it further.' },
        { kind: 'table', mt: true, caption: 'From the end of Reception to the end of Year 1 (EYFS framework 2026 and the Year 1 programme of study; our pairing)', head: ['Idea', 'End of Reception (early learning goal)', 'End of Year 1 (statutory)'], rows: [
          ['Counting', 'Count aloud beyond 20', 'Count to and across 100, forwards and backwards, from any number'],
          ['Number facts', 'Bonds to 5 recalled, some bonds to 10', 'Number bonds and related subtraction facts within 20'],
          ['Writing numbers', 'Not required', 'Read and write numbers 1 to 20 in numerals and words, and numbers to 100 in numerals'],
          ['Patterns', 'Odds, evens, doubles and fair sharing within 10', 'Count in twos, fives and tens; group and share using objects and arrays'],
          ['Comparing', 'More, fewer or the same, up to 10', 'Equal to, more than, less than, most and least, with a number line'],
          ['Symbols', 'Talk, not symbols', 'Read, write and interpret statements with +, &minus; and =']
        ] },
        { kind: 'p', mt: true, html: 'The bottom row is the real jump. A Reception child talks about "three and two more makes five". A Year 1 child writes 3 + 2 = 5, then 5 &minus; 2 = 3, then meets 5 = 3 + 2 with the answer on the left. The curriculum is explicit that they should "memorise and reason with number bonds to 10 and 20 in several forms", and gives 9 + 7 = 16, 16 minus 7 = 9 and 7 = 16 minus 9 as one family of facts.' },
        { kind: 'two', mt: true,
          leftH3: 'A slow start is common',
          left: [
            'Some children arrive in Year 1 with some Reception goals still emerging. That is information for the teacher, not a verdict.',
            'In our experience a few weeks of hands-on work on numbers to 10 usually lets a child join the Year 1 work comfortably.'
          ],
          rightH3: 'Summer-born children',
          right: [
            'A child born in August may be almost a year younger than a classmate born in September. At five, that gap is large.',
            'Judge progress by what your child can do now compared with a term ago, not by the fastest child in the class.'
          ] },
        { kind: 'source', html: 'Sources: DfE, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">Mathematics programmes of study: key stages 1 and 2</a>, Year 1; DfE, EYFS statutory framework for group and school-based providers, September 2026. Read on 31 October 2026. The pairing of rows is ours.' }
      ]
    },
    {
      id: 'content', tint: 'deep', eyebrow: 'The Year 1 content',
      h2: 'What do children learn in Year 1 maths?',
      lede: 'Seven areas, set out in the Year 1 programme of study. Number takes up most of the year, and the other areas lean on it.',
      body: [
        { kind: 'table', caption: 'The Year 1 mathematics programme of study, summarised (DfE, statutory requirements)', head: ['Area', 'Pupils should be taught to', 'Worth knowing (from the non-statutory notes)'], rows: [
          ['Number and place value', 'Counting forwards and back beyond 100 from any start; counting in twos, fives and tens; one more and one less; numbers to 20 written as words as well as digits', 'Children "begin to recognise place value in numbers beyond 20", supported by objects and pictures'],
          ['Addition and subtraction', 'Reading and writing +, &minus; and =; facts for adding and taking away within 20; sums and differences up to 20, zero included; one-step and missing number problems', '"They should realise the effect of adding or subtracting zero."'],
          ['Multiplication and division', 'One-step problems using objects, pictures and arrays "with the support of the teacher"', 'Grouping and sharing lead into doubling and simple fractions'],
          ['Fractions', 'A half as one of two equal parts, and a quarter as one of four equal parts, of an object, shape or quantity', 'Halves and quarters of lengths and sets, not only of shapes'],
          ['Measurement', 'Comparing, then starting to measure, length, mass, capacity and time; the value of coins and notes; days, weeks and months; o\'clock and half past', '"The pairs of terms: mass and weight, volume and capacity, are used interchangeably at this stage."'],
          ['Properties of shapes', 'Naming everyday flat and solid shapes, such as squares, circles, cubes and spheres', 'Shapes in different orientations; a triangle need not look like the usual one'],
          ['Position and direction', 'Describe position, direction and movement, including whole, half, quarter and three-quarter turns', 'Turning clockwise links to the clock face']
        ] },
        { kind: 'p', mt: true, html: 'Two notes in the curriculum deserve more attention than they get. The first is about patterns: children "recognise and create repeating patterns with objects and with shapes", which is early algebra in disguise. The second is about shape: children should know that "rectangles, triangles, cuboids and pyramids are not always similar to each other". A Year 1 child who says a long thin triangle "is not a real triangle" has found exactly the idea the curriculum wants to fix.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Autumn feel', p: 'Counting, numbers to 20, and adding and subtracting with objects. Most schools spend a long time here, rightly.' },
          { h3: 'Spring feel', p: 'Numbers beyond 20, place value to 50, and measuring length, height, mass and capacity.' },
          { h3: 'Summer feel', p: 'Grouping and sharing, halves and quarters, turns, numbers to 100, coins and the clock.' }
        ] },
        { kind: 'source', html: 'Source: DfE Year 1 programme of study, statutory requirements and notes, read on 31 October 2026. The termly feel is our summary of a common order; your school\'s order may differ.' }
      ]
    },
    {
      id: 'equals', tint: '', eyebrow: 'The equals sign',
      h2: 'Why are missing number problems hard in Year 1?',
      lede: 'Because many children think the equals sign means "now write the answer". Year 1 asks them to see it as "is the same as", and the missing number problem is how that shift happens.',
      body: [
        { kind: 'p', html: 'The Year 1 programme asks pupils to "read, write and interpret mathematical statements involving addition (+), subtraction (&minus;) and equals (=) signs", and to solve "missing number problems such as 7 = &#9633; &minus; 9". Look at where the box is. There is no answer after the equals sign; the 7 comes first. A child who reads = as "the answer comes next" is stuck. A child who reads it as "is the same as" asks a different question: what number, take away 9, is the same as 7?' },
        { kind: 'table', mt: true, caption: 'Three kinds of Year 1 number sentence (our examples)', head: ['Sentence', 'How a child might read it', 'What they need to see'], rows: [
          ['6 + 4 = &#9633;', 'Add, then write the answer', 'The familiar kind; the box is where the answer goes'],
          ['6 + &#9633; = 10', 'What goes with 6 to make 10?', 'A bond to 10, read as a missing part'],
          ['10 = 6 + &#9633;', 'Ten is the same as six and what?', 'The equals sign as a balance; the whole can be on the left'],
          ['5 = &#9633; &minus; 3', 'Something take away 3 leaves 5', 'Subtraction undone by addition: 5 + 3 = 8']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A balance at home',
          left: [
            'Use a coat hanger with two cups, or simply two plates. Put 10 buttons on one plate and 6 on the other. How many more to make the plates "the same"?',
            'Say "is the same as" instead of "equals" for a while. The words carry the idea.'
          ],
          rightH3: 'Why it matters later',
          right: [
            'Reading = as a balance is the root of later algebra, where 3x + 2 = 11 makes no sense if = means "the answer comes next".',
            'It also makes subtraction easier, because every subtraction becomes a missing addition.'
          ] }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Five Year 1 examples, step by step',
      lede: 'Our own examples, each matched to a Year 1 statement. The steps go objects, then picture, then number sentence.',
      body: [
        { kind: 'two',
          leftH3: '1. One more and one less across a ten',
          left: [
            '<strong>Question (ours).</strong> What is one more than 39? What is one less than 60?',
            '<strong>Objects.</strong> Show 39 as three ten-sticks and nine single cubes. Add one cube: ten singles, which snap into a fourth stick.',
            '<strong>Answer.</strong> 40. For 60, break one ten-stick into ten singles and take one away: 59.',
            '<strong>Why it matters.</strong> "Given a number, identify one more and one less" is easy within a ten and tricky across one, which is where to practise.'
          ],
          rightH3: '2. A missing number, read as a balance',
          right: [
            '<strong>Question (ours).</strong> 6 = &#9633; &minus; 8.',
            '<strong>Read it.</strong> Six is the same as something take away eight.',
            '<strong>Undo it.</strong> If taking 8 away leaves 6, put the 8 back: 6 + 8 = 14.',
            '<strong>Check.</strong> 14 &minus; 8 = 6. The answer is 14, the curriculum\'s missing number problem with new numbers.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. One fact, three ways',
          left: [
            '<strong>Fact (ours).</strong> 8 + 5 = 13.',
            '<strong>Picture.</strong> Thirteen dots: a full ten-frame of 8 and 2, and 3 more. Ring the 5 that were added.',
            '<strong>Write the family.</strong> 8 + 5 = 13, 5 + 8 = 13, 13 &minus; 5 = 8, 13 &minus; 8 = 5, and 5 = 13 &minus; 8.',
            '<strong>Why it matters.</strong> Learning facts in families is what the notes mean by bonds "in several forms". One picture gives five facts.'
          ],
          rightH3: '4. Half and a quarter of eight',
          right: [
            '<strong>Question (ours).</strong> Share 8 grapes into 2 equal plates, then into 4.',
            '<strong>Half.</strong> One for this plate, one for that, until all are shared: 4 each. Half of 8 is 4.',
            '<strong>Quarter.</strong> Now four plates: 2 each. A quarter of 8 is 2.',
            '<strong>Talk.</strong> "Why is a quarter smaller than a half?" Because the same 8 is shared between more plates.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '5. Drawing half past',
          left: [
            '<strong>Task (ours).</strong> Draw the hands for half past 3.',
            '<strong>Minute hand.</strong> Half past means half way round from the 12, so the long hand points straight down to the 6.',
            '<strong>Hour hand.</strong> The short hand has moved half way from 3 to 4, so it sits between them, not on the 3.',
            '<strong>Why it matters.</strong> The curriculum asks children to "draw the hands on a clock face"; the hour hand between numbers is the usual mistake.'
          ],
          rightH3: 'Practice set (ours, with answers)',
          right: [
            '(1) Count back from 103 to 97. (2) One more than 69? (3) 9 = &#9633; &minus; 4. (4) 7 + &#9633; = 15. (5) Half of 12. (6) A quarter of 12. (7) Write seventeen in numerals. (8) What is 11 + 0?',
            '<strong>Answers:</strong> (1) 103, 102, 101, 100, 99, 98, 97; (2) 70; (3) 13; (4) 8; (5) 6; (6) 3; (7) 17; (8) 11, since adding zero changes nothing.'
          ] }
      ]
    },
    {
      id: 'classes', tint: 'deep', eyebrow: 'Our Year 1 classes',
      h2: 'Does a Year 1 child need a maths tutor?',
      lede: 'Most do not. A tutor helps when a child has not yet settled numbers to 10, is losing confidence, or is racing ahead and bored. Here is how our lessons work for five and six year olds.',
      body: [
        { kind: 'ol', items: [
          '<strong>A free first class.</strong> A few counting and sharing games show where your child is: numbers to 10, to 20, and the start of numbers to 100.',
          '<strong>Things to hand.</strong> We ask for a small pot of buttons or pasta, a few coins and a clock with hands. The child moves them while the teacher shows the same on screen.',
          '<strong>Talk, then write.</strong> Children say each fact aloud before writing it as a number sentence, so the symbols always mean something.',
          '<strong>Little and often.</strong> A short game for the days between lessons, never a long worksheet.',
          '<strong>A word for parents.</strong> A short message after each block: what your child can now do, and the next step.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group or 1-on-1 in Year 1?',
          left: [
            'A group of 15 to 20 children at the same stage gives a lively, game-like class when a child is keeping pace with the class.',
            'Choose 1-on-1 for a child who has only just turned five, who is quiet in groups, or who still needs Reception ideas made firm.'
          ],
          rightH3: 'What we will not do',
          right: [
            'Push a five year old through worksheets, or teach a written method that clashes with the school\'s. We ask what the class uses.',
            'Claim any link with your child\'s school or the Department for Education. We are an independent online school.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Through Year 1',
    h2: 'Four milestones in Year 1 maths',
    lede: 'Each one is something you can see at the table. Children reach them at different times.',
    table: { caption: 'Year 1 maths milestones (our sequence, from the programme of study)', head: ['Milestone', 'Often by', 'You will see'], rows: [
      ['1. Numbers to 20, in words too', 'Late autumn', 'Reads and writes numbers to 20, and knows twelve is 1 ten and 2 ones'],
      ['2. Facts in families', 'Spring', 'Turns 8 + 5 = 13 into its subtraction facts without counting'],
      ['3. The balance idea', 'Late spring', 'Solves 10 = 6 + &#9633; and explains what = means'],
      ['4. Counting to 100 and beyond', 'Summer', 'Counts on and back across 100 from any number, and in 2s, 5s and 10s']
    ] },
    left: { h3: 'Milestone three surprises parents', ps: [
      'It looks small, yet it is the first time a child reasons about a whole number sentence.',
      'For the US equivalent age group, see our <a class="ag-inline-link" href="/online-math-tutor-1st-grade">first grade maths page</a>.'
    ] },
    right: { h3: 'Milestone four leads to Year 2', ps: [
      'Year 2 adds tens and ones in two-digit numbers and the 2, 5 and 10 times tables.',
      'Classes can pause for school holidays.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for five and six year olds',
    lede: 'Number first, then thinking and making courses that suit young children.',
    bands: [
      { num: 'I', h3: 'Number', sub: 'Ages 5 to 7', courses: [
        { code: 'UK / Y11 / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths', blurb: 'Year 1 and Year 2 in Level A.' },
        { code: 'UK / Y11 / 02', slug: 'early-math-foundations', title: 'Early Maths Foundations', blurb: 'Numbers to 10 made secure, through play.' },
        { code: 'UK / Y11 / 03', slug: 'mental-maths-mastery-kids', title: 'Mental Maths', blurb: 'Bonds and doubles that stick.' }
      ] },
      { num: 'II', h3: 'Thinking', sub: 'Puzzles and patterns', courses: [
        { code: 'UK / Y12 / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and Readiness', blurb: 'Pattern and shape puzzles, ages 6 to 9.' },
        { code: 'UK / Y12 / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus maths', blurb: 'Bead frames that show grouping in tens.' },
        { code: 'UK / Y12 / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Puzzles and problem solving', blurb: 'For a little later, from age 7.' }
      ] },
      { num: 'III', h3: 'Making', sub: 'From age 6', courses: [
        { code: 'UK / Y13 / 01', slug: 'kids-coding-blocks-masterclass', title: 'Block coding for kids', blurb: 'Programs that move characters with turns.' },
        { code: 'UK / Y13 / 02', slug: 'scratch-programming-complete-course', title: 'Scratch stories', blurb: 'First animated stories.' },
        { code: 'UK / Y13 / 03', slug: 'block-coding-app-development-masterclass', title: 'First apps', blurb: 'Simple apps, once reading is easier.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How Year 1 classes run',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teachers are in India; we list every class in UK time and keep sessions short for five and six year olds.',
    slots: [
      { time: 'After school', l: 'Once there has been a snack.' },
      { time: 'Early evening', l: 'Before the bedtime routine.' },
      { time: 'Weekend morning', l: 'The calmest slot for many Year 1 children.' }
    ],
    cells: [
      { h3: 'Objects by the screen', p: 'Buttons, coins and a clock with hands on the table.' },
      { h3: 'Say it first', p: 'Facts are spoken before they are written.' },
      { h3: 'Balance language', p: '"Is the same as" alongside "equals", from the first week.' },
      { h3: 'Short sessions', p: 'Sized for a five year old\'s attention, with games inside.' },
      { h3: 'Free first class', p: 'A trial lesson with games, and nothing to pay.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20, or a teacher for one child.' }
    ]
  },

  projectsH2: 'Little projects from our classes',
  projectsLede: 'A few things students made in ordinary lessons, none of them assessed. See more in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews written by parents, unaltered.',

  fees: {
    h2: 'Fees for Year 1 maths classes',
    lede: 'Your first class is free. Afterwards there is one monthly fee, lower for a group seat than for 1-on-1, and we only bill once the course and weekly time suit you. No contract.',
    free: ['A playful first class', 'A view of numbers to 10, 20 and 100', 'A phone number is all we need'],
    group: ['15 to 20 Year 1 children', 'A familiar teacher every week', 'A short game between classes', 'A message after each block'],
    one: ['A teacher for one child', 'Paced for a young Year 1 child', 'Good for shy children']
  },

  faq: {
    eyebrow: 'Year 1 questions',
    h2: 'What parents of Year 1 children ask',
    items: [
      { q: 'What maths should a Year 1 child know by the summer?', a: 'They should count past 100 from any number, say one more and one less, know adding and subtracting facts within 20, solve simple missing number puzzles, find halves and quarters, know coins and notes, and read o\'clock and half past.' },
      { q: 'How is Year 1 maths different from Reception?', a: 'Reception builds a deep feel for numbers to 10, judged by the teacher against the early learning goals. Year 1 stretches facts to 20 and counting to 100, and children start reading and writing number sentences with +, minus and =.' },
      { q: 'What is a missing number problem?', a: 'A number sentence with a box instead of a number, sometimes on the left of the equals sign, such as 10 = 6 + a box. It teaches that equals means "is the same as".' },
      { q: 'Do Year 1 children learn times tables?', a: 'Not as tables. They count in twos, fives and tens and solve simple grouping and sharing problems with objects and arrays. The 2, 5 and 10 times tables are a Year 2 requirement.' },
      { q: 'Are Year 1 maths worksheets useful?', a: 'Some are, in small doses, once a child has done the same idea with real objects. A worksheet cannot show whether a child can count objects, share fairly or read a real clock, so games with things you have at home matter more.' },
      { q: 'My child is summer-born and finding Year 1 maths hard. Should I worry?', a: 'Not usually. Many summer-born children are almost a year younger than classmates. Look for steady progress over a term, and talk to the teacher if numbers to 10 still feel uncertain by spring.' },
      { q: 'Is online maths tutoring suitable for a five year old?', a: 'Yes for many children, provided lessons are short, spoken and hands-on with objects by the screen. We often suggest 1-on-1 at this age, and we tell you honestly in the free class if your child would do better without extra lessons.' },
      { q: 'When are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are given in UK time.' },
      { q: 'Which of your courses suits Year 1?', a: 'Most Year 1 children join Elementary Maths, which covers Years 1 and 2 in its first level. A child still settling numbers to 10 may start with Early Maths Foundations; the free class helps decide.' },
      { q: 'Are you linked to my child\'s school?', a: 'No. Modern Age Coders is an independent online school, with no link to any school or to the Department for Education.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Primary maths',
    h2: 'Other pages for young children',
    lede: 'Comparable ages abroad, and the years that come next.',
    items: [
      { href: '/online-math-tutor-1st-grade', label: 'First grade maths (US)', p: 'Children of a similar age in the US system.' },
      { href: '/online-math-tutor-kindergarten', label: 'Kindergarten maths (US)', p: 'The year before, in US terms.' },
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'Years 3 to 6, two years on.' },
      { href: '/first-competitions-for-primary-school-children-uk', label: 'First competitions for primary children', p: 'Gentle contests for later primary.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A look inside our live classes.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The full list of our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free Year 1 maths class',
    lede: 'Pop your number in the form and we will ring at a UK time that works around school. The first class is a handful of counting and sharing games, so the teacher can see your child\'s starting point.',
    readFirst: 'Curious about the content first? The <a class="ag-inline-link" href="/courses/elementary-mathematics-complete-masterclass">Elementary Maths course</a> shows its weeks, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a lesson.',
    note: 'WhatsApp gets the quickest answer and costs nothing on a UK phone. Our India team writes back from a +91 number.',
    formNote: 'Booking is free and binds you to nothing. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Young learners', links: [
        { href: '/online-math-tutor-1st-grade', label: 'First grade maths' },
        { href: '/online-math-tutor-kindergarten', label: 'Kindergarten maths' },
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' },
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' }
      ] },
      { h4: 'Our classes', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Year 1 maths, live, in UK time'
  },

  personalityCss: `
.ag-root.ag-yea .ag-hero h1 { letter-spacing: -0.008em; font-weight: 670; max-width: 23ch; }
.ag-root.ag-yea .ag-capsule { border-left-width: 9px; border-radius: 12px; }
.ag-root.ag-yea .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-yea .ag-table caption { text-align: left; font-weight: 620; }
.ag-root.ag-yea .ag-table td:first-child { font-weight: 650; width: 22%; }
.ag-root.ag-yea .ag-steps li { margin-bottom: 10px; line-height: 1.66; }
`,

  dossier: {
    curriculumAuthority: 'England, DfE Year 1 mathematics programme of study: count to and across 100 from any number; count, read and write to 100 in numerals, in twos, fives and tens; one more and one less; 1 to 20 in numerals and words; +, minus and = statements; bonds and subtraction facts within 20; add and subtract to 20 including zero; missing number problems such as 7 = box minus 9; grouping and sharing with objects, pictures and arrays with teacher support; half and quarter; compare and measure length, mass, capacity, time; coins and notes; dates; o\'clock and half past with hands drawn; 2-D and 3-D shapes; whole, half, quarter and three-quarter turns. Notes: bonds in several forms (9 + 7 = 16 family); adding zero; repeating patterns; place value beyond 20; mass and weight interchangeable; shapes not always similar. EYFS 2026: end of Reception ELGs and the Profile copy to Year 1 teachers.',
    localProject: 'The bridge year. A Year 1 maths door for England: a row-by-row bridge from the end-of-Reception early learning goals to the Year 1 statutory requirements, the full Year 1 programme summarised with its most useful notes, a section on the equals sign and missing number problems with a table of four kinds of number sentence and a balance activity, five original worked examples (one more and one less across a ten, 6 = box minus 8, one fact in five forms, half and quarter of eight, drawing half past three) with a practice set, honest advice on summer-born children and on whether a tutor is needed, and how live classes run for five and six year olds. Lesson family: a single-year primary door, with a spine distinct from the KS1 and Year 2 pages.',
    requiredMentions: [
      'memorise and reason with number bonds to 10 and 20 in several forms',
      'begin to recognise place value in numbers beyond 20',
      'They should realise the effect of adding or subtracting zero.',
      'recognise and create repeating patterns with objects and with shapes',
      'The pairs of terms: mass and weight, volume and capacity, are used interchangeably at this stage.',
      'rectangles, triangles, cuboids and pyramids are not always similar to each other',
      'draw the hands on a clock face',
      '6 = &#9633; &minus; 8',
      'One fact, three ways'
    ],
    sources: [
      { claim: 'DfE, Mathematics programmes of study: key stages 1 and 2, Year 1 statutory requirements and non-statutory notes.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study' },
      { claim: 'DfE, Mathematics programmes of study PDF (PRIMARY_national_curriculum_-_Mathematics_220714.pdf), read as text.', url: 'https://assets.publishing.service.gov.uk/media/5a7da548ed915d2ac884cb07/PRIMARY_national_curriculum_-_Mathematics_220714.pdf' },
      { claim: 'DfE, EYFS statutory framework for group and school-based providers, September 2026: end of Reception ELGs and the Profile copy to Year 1 teachers.', url: 'https://www.gov.uk/government/publications/early-years-foundation-stage-framework--2' }
    ],
    rejectedClaims: [
      'Any national statistic on Year 1 attainment: there is no national Year 1 maths test, and none was read.',
      'A school\'s exact termly order: varies by school and scheme, so the termly feel is labelled our summary.',
      'Claims about summer-born outcomes in statistics: not read at a primary source, so only the age-gap arithmetic is stated.',
      'Any promise of attainment: declined.'
    ]
  }
};
