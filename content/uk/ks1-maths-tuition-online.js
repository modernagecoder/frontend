'use strict';
// KS1 maths tuition online (ag- maths door, England; UK and US exams cluster, row UK002).
// Sources, read raw on 31 October 2026 (gov.uk content API and assets.publishing.service.gov.uk PDF via curl; PDF text
// through pypdf; raw copies in keyword-research-2026-09/uk-us-gap/src/ks1-maths-tuition-online/):
//  - DfE, Mathematics programmes of study: key stages 1 and 2, National curriculum in England (PRIMARY_national_
//    curriculum_-_Mathematics_220714.pdf). Verbatim: "The principal focus of mathematics teaching in key stage 1 is to
//    ensure that pupils develop confidence and mental fluency with whole numbers, counting and place value."; "By the
//    end of year 2, pupils should know the number bonds to 20 and be precise in using and understanding place value.
//    An emphasis on practice at this early stage will aid fluency."; Year 1: "count to and across 100, forwards and
//    backwards", "read and write numbers from 1 to 20 in numerals and words", half and quarter, "tell the time to the
//    hour and half past the hour"; Year 2: "count in steps of 2, 3, and 5 from 0, and in tens from any number",
//    "recall and use multiplication and division facts for the 2, 5 and 10 multiplication tables", fractions one
//    third, one quarter, two quarters and three quarters, "tell and write the time to five minutes", "know the number
//    of minutes in an hour and the number of hours in a day", "interpret and construct simple pictograms, tally
//    charts, block diagrams and simple tables", notes "partition numbers in different ways (for example, 23 = 20 + 3
//    and 23 = 10 + 13) to support subtraction", "programming robots using instructions given in right angles".
//  - STA, National curriculum assessments: optional key stage 1 tests (gov.uk collection). Verbatim: "National
//    curriculum tests at the end of KS1 are optional"; "While the end of KS1 tests are optional, the following remain
//    statutory: the phonics screening check annual reports for parents about each pupil's general progress in year 2
//    participation in the trialling of KS1 tests, for a small number of selected schools"; "there is no requirement
//    for schools to do so" (reporting test results to parents).
//  - STA, Optional key stage 1 tests guidance 2026 to 2027: "'Paper 1: arithmetic' consists of a single test paper
//    and takes approximately 20 minutes."; "'Paper 2: reasoning' consists of a single test paper and takes
//    approximately 35 minutes. This paper includes an aural practice question and 5 aural questions."; "The optional
//    KS1 tests are not designed to be strictly timed."; "Teachers should not use the test frameworks to guide teaching
//    and learning."; "Assessment arrangements for the academic year 2026 to 2027 will remain unchanged."
//  - STA, Optional key stage 1 tests: 2026 scaled scores: "A scaled score between 100 and 115 shows the pupil has met
//    the expected standard in the test. The lowest scaled score that can be awarded on a KS1 test is 85."
//  - DfE, Primary assessments: future dates (updated 12 October 2026): "The recommended administration period for the
//    optional key stage 1 tests is during May 2027."; phonics screening check "within the 1-week period from Monday
//    14 June 2027"; multiplication tables check "within the 2-week period from Monday 7 June 2027".
// Our own: the "end of Year 2" checklist wording, the kitchen-table games, the four worked examples and the
// practice set. Spine: the tests became optional, the curriculum did not. Lesson family: a primary key stage door
// built on the programme of study, distinct from the KS2 tuition and SATs pages.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'KS1 MATHS', blurb: 'The end of KS1 tests are optional. The Year 1 and Year 2 curriculum is not. What a child should know by age 7.' },
  slug: 'ks1-maths-tuition-online',
  code: 'kt',
  accent: '#464361',
  accentRationale: 'KS1 maths: a soft dusk violet (#464361, 8.86:1 on #FBF8F2 and 7.62:1 on the deepest paper tint), warmer and gentler than the GCSE blues, and apart from the Year 5 olive',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'KS1 maths tuition online',
  title: 'KS1 Maths Tuition Online | Years 1 and 2, Live and Playful',
  description: 'KS1 maths tuition online for Years 1 and 2: what the national curriculum expects by age 7, how the optional KS1 tests work in 2027, and live classes.',
  ogDescription: 'The end of KS1 tests are now optional, but the Year 1 and Year 2 maths curriculum is not. What a child should know by the end of Year 2.',
  twitterDescription: 'KS1 maths for Years 1 and 2: number bonds to 20, place value, the 2, 5 and 10 times tables, the optional tests, and live classes.',
  pageName: 'KS1 Maths Tuition Online',
  webPageDescription: 'Live online maths tuition for children in Years 1 and 2 in England, built from the national curriculum programmes of study and the Standards and Testing Agency\'s 2026 to 2027 guidance.',
  courseDescription: 'Live online maths for Key Stage 1: counting, place value, number bonds, the 2, 5 and 10 times tables, fractions, time, money, shape and simple data, taught with objects and pictures first.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'KS1 maths tuition',
  navLinks: [
    { href: '#curriculum', label: 'Years 1 and 2' },
    { href: '#tests', label: 'The optional tests' },
    { href: '#home', label: 'At home' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Key Stage 1 maths &middot; Years 1 and 2',
  h1: 'KS1 maths tuition online',
  lede: 'Many parents of six and seven year olds have heard that "KS1 SATs" no longer happen, and wonder whether Year 2 maths still matters. The tests did change: since the Standards and Testing Agency made them optional, a school may or may not use them. What did not change is the national curriculum. By the end of Year 2, the Department for Education still expects children to know their number bonds to 20, to understand tens and ones, and to recall the 2, 5 and 10 times tables, and every later year of primary maths is built on those facts. This page sets out what Years 1 and 2 cover, how the optional tests work in 2027, simple games families can play at home, and how our live KS1 classes teach it.',
  secondaryCta: { href: '#curriculum', label: 'What Years 1 and 2 cover' },
  wa: 'Hello Modern Age Coders, I would like a free first class for KS1 maths.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the national curriculum and STA guidance for 2026 to 2027',
  spec: [
    ['Stage', 'Key Stage 1, Years 1 and 2'],
    ['Usual ages', '5 to 7'],
    ['Core goal', 'Number bonds to 20, place value'],
    ['Times tables', '2, 5 and 10 by end of Year 2'],
    ['End of KS1 tests', 'Optional, May 2027'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'KS1 maths is the Key Stage 1 mathematics programme of the national curriculum in England, taught in Years 1 and 2 to children aged about 5 to 7. Its main aim, in the Department for Education\'s words, is "confidence and mental fluency with whole numbers, counting and place value", and by the end of Year 2 children should know number bonds to 20. The end of KS1 tests are now optional for schools. Modern Age Coders teaches KS1 maths live online, in a group of 15 to 20 or 1-on-1, through its Elementary Maths course, starting with objects and pictures before symbols. The first class is free, and we are not part of any school or government body.',

  picks: {
    eyebrow: 'Courses for KS1',
    h2: 'Three courses for children in Years 1 and 2',
    lede: 'Elementary Maths is the main KS1 course. Early Maths suits the youngest Year 1 children, and Mental Maths is for a child who is secure and wants to go faster.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'K1 / 01', title: 'Elementary Maths', note: 'Its first level covers the Year 1 and Year 2 ground: numbers, place value, adding, first multiplication, shape, time and money.' },
      { course: 'early-math-foundations', code: 'K1 / 02', title: 'Early Maths Foundations', note: 'Playful, concrete maths for ages 4 to 7, for a child still building counting.' },
      { course: 'mental-maths-mastery-kids', code: 'K1 / 03', title: 'Mental Maths for Kids', note: 'Number sense and quick recall for ages 5 to 10, built on understanding.' }
    ]
  },

  sections: [
    {
      id: 'curriculum', tint: 'tint', eyebrow: 'Years 1 and 2',
      h2: 'What should a child know in maths by the end of Year 2?',
      lede: 'The national curriculum sets out what children should be taught in each year. These are the statutory expectations, summarised from the programme of study.',
      body: [
        { kind: 'p', html: 'The Department for Education states the purpose plainly: "The principal focus of mathematics teaching in key stage 1 is to ensure that pupils develop confidence and mental fluency with whole numbers, counting and place value." It sets one clear goal for the end of the stage: "By the end of year 2, pupils should know the number bonds to 20 and be precise in using and understanding place value. An emphasis on practice at this early stage will aid fluency." Everything else in KS1 grows from those two ideas.' },
        { kind: 'table', mt: true, caption: 'Key Stage 1 maths, year by year (from the national curriculum programmes of study)', head: ['Area', 'Year 1', 'Year 2'], rows: [
          ['Counting and place value', 'Count to and across 100, forwards and backwards; read and write numbers 1 to 20 in numerals and words', 'Count in steps of 2, 3 and 5 from 0 and in tens from any number; tens and ones in two-digit numbers; compare with &lt;, &gt; and ='],
          ['Adding and subtracting', 'Number bonds and subtraction facts within 20; add and subtract one-digit and two-digit numbers to 20', 'Facts to 20 recalled fluently; add and subtract a two-digit number and ones, and two two-digit numbers'],
          ['Multiplying and dividing', 'One-step problems with objects, pictures and arrays', 'Recall the 2, 5 and 10 times tables; know multiplication can be done in any order and division cannot'],
          ['Fractions', 'Recognise a half and a quarter', 'Find one third, one quarter, two quarters and three quarters of a shape, set or quantity'],
          ['Time', 'Tell the time to the hour and half past', 'Tell the time to five minutes; minutes in an hour and hours in a day'],
          ['Money', 'Recognise coins and notes', 'Use the pound and pence symbols; give change'],
          ['Shape and data', 'Name common 2-D and 3-D shapes; whole, half and quarter turns', 'Sides, edges, faces and vertices; pictograms, tally charts and block diagrams']
        ] },
        { kind: 'p', html: 'The curriculum\'s notes describe how this should feel in practice. Children should "partition numbers in different ways (for example, 23 = 20 + 3 and 23 = 10 + 13) to support subtraction", and in Year 2 they meet three quarters as "the first example of a non-unit fraction". In geometry, the notes even suggest "programming robots using instructions given in right angles", which is where early maths and early coding meet.' },
        { kind: 'source', html: 'Source: Department for Education, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">Mathematics programmes of study: key stages 1 and 2</a>, read on 31 October 2026. The table summarises the statutory requirements; the full document has more detail.' }
      ]
    },
    {
      id: 'tests', tint: 'deep', eyebrow: 'The optional tests',
      h2: 'Are KS1 SATs still happening in 2027?',
      lede: 'Not as statutory tests. The end of KS1 tests are optional, and a school decides whether to use them. The Standards and Testing Agency recommends that schools that do use them give them in May 2027.',
      body: [
        { kind: 'p', html: 'The Standards and Testing Agency says it directly: "National curriculum tests at the end of KS1 are optional." Schools can use them "to support their own measurement of pupil attainment", and although the results can help when reporting to parents, the agency adds that "there is no requirement for schools to do so". Some things are still statutory in Year 2. In the agency\'s words, "the following remain statutory: the phonics screening check annual reports for parents about each pupil\'s general progress in year 2", along with trialling for a small number of selected schools.' },
        { kind: 'table', mt: true, caption: 'The optional KS1 maths test, 2026 to 2027 (STA guidance and scaled score notice)', head: ['Part', 'What it is', 'Time'], rows: [
          ['Paper 1: arithmetic', 'A single test paper of calculations', 'Approximately 20 minutes'],
          ['Paper 2: reasoning', 'A single paper, with an aural practice question and 5 aural questions read aloud', 'Approximately 35 minutes'],
          ['Timing', '"The optional KS1 tests are not designed to be strictly timed."', 'Recommended during May 2027'],
          ['Scaled scores', '85 is the lowest scaled score; 100 to 115 means the expected standard was met', 'Converted from the raw score']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means for families',
          left: [
            'Your child\'s school may give the optional tests in May 2027, or may not. Either way, the school still reports each child\'s general progress in Year 2.',
            'Ask the class teacher what the school uses to check maths at the end of Year 2, and what it shows. That conversation is more useful than any practice paper.'
          ],
          rightH3: 'What is under review',
          right: [
            'The agency notes that "future assessment arrangements are under review" following the Curriculum and Assessment Review, published with the government\'s response in November 2025.',
            'For this school year it is clear that "Assessment arrangements for the academic year 2026 to 2027 will remain unchanged."'
          ] },
        { kind: 'p', mt: true, html: 'The agency also says something parents rarely hear: its test frameworks are written for test developers, and "Teachers should not use the test frameworks to guide teaching and learning." The curriculum is the guide. That is the approach we take: teach the Year 1 and Year 2 content well, and any test that a school chooses to use will look after itself.' },
        { kind: 'source', html: 'Sources: Standards and Testing Agency, <a class="ag-inline-link" href="https://www.gov.uk/government/collections/national-curriculum-assessments-key-stage-1-tests" rel="noopener" target="_blank">optional key stage 1 tests</a>, the 2026 to 2027 guidance and the 2026 scaled scores notice; DfE, <a class="ag-inline-link" href="https://www.gov.uk/guidance/primary-assessments-future-dates" rel="noopener" target="_blank">Primary assessments: future dates</a>. Read on 31 October 2026.' }
      ]
    },
    {
      id: 'home', tint: '', eyebrow: 'At home',
      h2: 'What KS1 maths games can we play at home?',
      lede: 'Five games of our own that need nothing more than a pack of cards, some coins or a clock. Each one practises a statutory KS1 skill.',
      body: [
        { kind: 'table', caption: 'Our kitchen-table games for Years 1 and 2', head: ['Game (ours)', 'What you need', 'What it practises'], rows: [
          ['Make Ten', 'Cards 1 to 9', 'Turn two cards; keep them if they make 10. Later, make 20 with three cards. Number bonds to 10 and 20.'],
          ['Tens and Ones Shop', 'Ten-pence and one-penny coins', 'Pay for items priced up to 99p using the fewest coins. Place value, and the pence symbol.'],
          ['Clock Detective', 'A real analogue clock', 'One player sets a time to five minutes, the other reads it aloud. Year 2 time.'],
          ['Share Fairly', 'Twelve small snacks', 'Share them into 2, 3 and 4 equal groups and name each fraction. Halves, thirds and quarters.'],
          ['Robot Steps', 'A floor and a toy', 'Give instructions: forward 3, quarter turn right. Position, direction and turns.']
        ] },
        { kind: 'p', html: 'Little and often works better than long sessions at this age. The curriculum\'s own advice is that "An emphasis on practice at this early stage will aid fluency", and in our experience five or ten minutes a day of a game a child enjoys does more for number bonds than a long weekend worksheet. Stop while it is still fun.' },
        { kind: 'two', mt: true,
          leftH3: 'Signs a child may need more help',
          left: [
            'Still counting on fingers for bonds to 10 by the end of Year 1, or unsure that 23 is two tens and three ones in Year 2.',
            'Finding it hard to tell the time to the half hour, or to say which of two numbers is bigger. These are the facts later years assume.'
          ],
          rightH3: 'Signs a child is ready for more',
          right: [
            'Recalls bonds to 20 instantly, counts in 3s, and explains why 4 × 5 and 5 × 4 give the same answer.',
            'For a confident child, the next steps are in our <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2 maths page</a>, and for a child who loves puzzles, <a class="ag-inline-link" href="/first-competitions-for-primary-school-children-uk">first competitions for primary children</a>.'
          ] }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Four KS1 examples we use, step by step',
      lede: 'Our own examples, written for a parent sitting beside a child. Each follows the curriculum\'s order: objects first, then pictures, then numbers.',
      body: [
        { kind: 'two',
          leftH3: '1. Subtraction by partitioning (Year 2)',
          left: [
            '<strong>Question (ours).</strong> 34 &minus; 18.',
            '<strong>With objects.</strong> Make 34 from three ten-sticks and four ones. To take away 18, we need eight ones, but there are only four, so swap one ten-stick for ten ones: now 2 tens and 14 ones.',
            '<strong>Take away.</strong> 14 ones minus 8 ones leaves 6 ones. 2 tens minus 1 ten leaves 1 ten.',
            '<strong>Answer.</strong> 1 ten and 6 ones is 16. This is the curriculum\'s idea that 34 can be seen as 20 + 14 as well as 30 + 4.'
          ],
          rightH3: '2. Number bonds through 10 (Year 1)',
          right: [
            '<strong>Question (ours).</strong> 8 + 5.',
            '<strong>Picture.</strong> Draw a ten-frame with 8 dots. Two more fill it. That uses 2 of the 5, leaving 3.',
            '<strong>Numbers.</strong> 8 + 2 = 10, then 10 + 3 = 13.',
            '<strong>Why it matters.</strong> Bonds to 10 turn every sum up to 20 into two easy steps, which is why the curriculum wants them known by heart.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. The 5 times table on a clock (Year 2)',
          left: [
            '<strong>Question (ours).</strong> The minute hand points to the 7. How many minutes past the hour is it?',
            '<strong>Count in fives.</strong> Each number on the clock is 5 minutes: 5, 10, 15, 20, 25, 30, 35.',
            '<strong>Answer.</strong> 35 minutes past, which is 7 × 5. The curriculum links the 5 times table to "the divisions on the clock face" for exactly this reason.'
          ],
          rightH3: '4. Three quarters of a set (Year 2)',
          right: [
            '<strong>Question (ours).</strong> What is three quarters of 12 strawberries?',
            '<strong>Share.</strong> Put the 12 into 4 equal groups: 3 in each. One quarter is 3.',
            '<strong>Three quarters.</strong> Three of the groups: 3 + 3 + 3 = 9.',
            '<strong>Answer.</strong> 9 strawberries. Sharing first makes it clear why three quarters is more than a half (6) but less than the whole.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, with answers).</strong> (1) What must be added to 13 to make 20? (2) Write 47 as tens and ones, then as 30 and something. (3) 6 × 5. (4) Half of 18. (5) Which is more, 3 tens or 28 ones? (6) A lesson starts at quarter past 2 and lasts 30 minutes; when does it end? <strong>Answers:</strong> (1) 7; (2) 4 tens and 7 ones, and 30 + 17; (3) 30; (4) 9; (5) 3 tens, because 3 tens is 30; (6) quarter to 3.' }
      ]
    },
    {
      id: 'classes', tint: '', eyebrow: 'Our KS1 classes',
      h2: 'How does online KS1 maths tuition work for a six year old?',
      lede: 'Short, lively and practical. Young children learn number with their hands and eyes before symbols, and online lessons can do that well when they are designed for it.',
      body: [
        { kind: 'ol', items: [
          '<strong>A gentle first class.</strong> The teacher plays a few number games with the child to see where they are with counting, bonds and place value. It is free and there is nothing to prepare.',
          '<strong>Things to hand.</strong> We ask families to keep a small kit by the screen: counters or buttons, a few coins, and later a clock face. The child moves real objects while the teacher shows the same thing on screen.',
          '<strong>Objects, pictures, then numbers.</strong> Each idea is met with objects, drawn as a picture, then written as a number sentence, the order the curriculum describes.',
          '<strong>Short practice between classes.</strong> A five-minute game or a handful of questions for the days in between, never a long worksheet.',
          '<strong>A note for parents.</strong> After each block of lessons, a short message on what the child can now do and what comes next.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group or 1-on-1 at this age?',
          left: [
            'A group of 15 to 20 children gives energy and a sense of playing together, and suits a child who is broadly on track.',
            '1-on-1 suits a very young Year 1 child, a shy child, or one who needs a particular gap closed before Year 3.'
          ],
          rightH3: 'What we will not do',
          right: [
            'Drill a six year old on test papers. The tests are optional and the agency itself says its frameworks should not guide teaching.',
            'Claim any link with a school, the Department for Education or the Standards and Testing Agency. We are an independent online school.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four steps through Key Stage 1 maths',
    lede: 'Each step is something a child can show at the table, not a score.',
    table: { caption: 'What a KS1 child should be able to do', head: ['Step', 'Usually by', 'What it looks like'], rows: [
      ['1. Counting securely', 'Early Year 1', 'Counts objects one by one, and counts on and back to 100'],
      ['2. Bonds to 10', 'End of Year 1', 'Knows pairs that make 10 without counting, and uses them to add within 20'],
      ['3. Tens and ones', 'Middle of Year 2', 'Explains that 46 is 4 tens and 6 ones, and partitions it in other ways'],
      ['4. Bonds to 20 and three tables', 'End of Year 2', 'Recalls bonds to 20 and the 2, 5 and 10 times tables']
    ] },
    left: { h3: 'Step two is the turning point', ps: [
      'Once bonds to 10 are known, adding and subtracting stop being counting exercises.',
      'Children who enjoy giving instructions may like <a class="ag-inline-link" href="/ks2-coding-lessons-online">our KS2 coding lessons</a> in a year or two.'
    ] },
    right: { h3: 'Step four sets up Year 3', ps: [
      'Year 3 brings the 3, 4 and 8 tables and written methods. They rest on step four.',
      'Lessons pause in school holidays if families prefer.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for young children',
    lede: 'Maths first, with a few making and thinking courses for children who want more.',
    bands: [
      { num: 'I', h3: 'Early number', sub: 'Ages 5 to 7', courses: [
        { code: 'UK / K11 / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths', blurb: 'The KS1 ground, objects and pictures first.' },
        { code: 'UK / K11 / 02', slug: 'early-math-foundations', title: 'Early Maths Foundations', blurb: 'Counting and shape through play, ages 4 to 7.' },
        { code: 'UK / K11 / 03', slug: 'mental-maths-mastery-kids', title: 'Mental Maths', blurb: 'Quick number facts that rest on understanding.' }
      ] },
      { num: 'II', h3: 'Number sense', sub: 'For keen counters', courses: [
        { code: 'UK / K12 / 01', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Place value made visible on the beads.' },
        { code: 'UK / K12 / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Patterns, puzzles and step-by-step thinking.' },
        { code: 'UK / K12 / 03', slug: 'ks2-sats-maths-course', title: 'KS2 SATs Maths', blurb: 'For later: the Year 6 course these years build towards.' }
      ] },
      { num: 'III', h3: 'Making things', sub: 'Maths through play', courses: [
        { code: 'UK / K13 / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Block coding, a natural partner to KS1 turns and directions.' },
        { code: 'UK / K13 / 02', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Simple games for children ready to read instructions.' },
        { code: 'UK / K13 / 03', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'First apps with blocks, for older KS1 children.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How KS1 classes run',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our teachers are in India and every time we offer is in UK time, with short sessions for young children.',
    slots: [
      { time: 'After school', l: 'A short session before tea.' },
      { time: 'Early evening', l: 'For families with later pick-ups.' },
      { time: 'Weekend morning', l: 'When young children are freshest.' }
    ],
    cells: [
      { h3: 'Hands on', p: 'Counters, coins and clocks by the screen, so children move real objects.' },
      { h3: 'Curriculum order', p: 'Objects, then pictures, then number sentences, as the programme of study describes.' },
      { h3: 'Short and lively', p: 'Lessons sized for a five to seven year old\'s attention, with games built in.' },
      { h3: 'Parents in the loop', p: 'A short note after each block of lessons on what has been learned.' },
      { h3: 'First class free', p: 'One playful class to meet the teacher, with no payment.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20 children, or one child with their own teacher.' }
    ]
  },

  projectsH2: 'Things our younger students made',
  projectsLede: 'Simple projects from ordinary classes, none of them assessed. <a class="ag-inline-link" href="/student-labs">Student labs</a> shows more.',
  reviewsLede: 'Parents\' Google reviews, word for word.',

  fees: {
    h2: 'Fees for KS1 maths classes',
    lede: 'A free first class, then a monthly fee that is lower for a group place and higher for 1-on-1. We bill only once a course and a weekly time are agreed, and there is no contract.',
    free: ['A playful first class', 'A view of counting and number bonds', 'Booked with a phone number'],
    group: ['15 to 20 children in Years 1 and 2', 'The same friendly teacher each week', 'Short games to play between classes', 'A note to parents after each block'],
    one: ['A teacher for one child', 'Paced to the child\'s attention span', 'Good for very young or shy children']
  },

  faq: {
    eyebrow: 'KS1 questions',
    h2: 'What parents ask about KS1 maths',
    items: [
      { q: 'What maths should my child know by the end of Year 2?', a: 'The national curriculum expects number bonds to 20, a precise understanding of tens and ones, and recall of the 2, 5 and 10 times tables. Children should also tell the time to five minutes and find simple fractions such as three quarters.' },
      { q: 'Are KS1 SATs still happening?', a: 'The end of KS1 tests are optional. Schools can choose to use them, and the Standards and Testing Agency recommends May 2027 for those that do.' },
      { q: 'What is in the optional KS1 maths test?', a: 'Two papers: arithmetic, about 20 minutes, and reasoning, about 35 minutes, including five questions read aloud. The agency says the tests are not designed to be strictly timed.' },
      { q: 'What do KS1 scaled scores mean?', a: 'The lowest scaled score is 85. A score between 100 and 115 means the child met the expected standard on that test.' },
      { q: 'Should my child practise KS1 past papers?', a: 'We would not drill them. The tests are optional, and the agency itself says its frameworks should not guide teaching. Games and steady practice of the curriculum facts help far more.' },
      { q: 'What KS1 maths games can we play at home?', a: 'Simple card and coin games work well: making 10 or 20 from playing cards, paying for things with ten-pence and penny coins, and reading a real clock to five minutes. Five or ten minutes a day is plenty.' },
      { q: 'Is online maths tuition suitable for a six year old?', a: 'It can be, when lessons are short, practical and designed for young children. We ask families to keep counters and coins by the screen so the child handles real objects.' },
      { q: 'When are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are UK time.' },
      { q: 'Which course should a Year 1 child start with?', a: 'Usually Elementary Maths. For a child still building counting, Early Maths Foundations comes first; the free first class helps decide.' },
      { q: 'Are you connected with my child\'s school or the STA?', a: 'No. We are an independent online school, separate from schools, the Department for Education and the Standards and Testing Agency.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More primary help',
    h2: 'Other pages for primary families',
    lede: 'What comes after KS1, and how primary maths is checked in England.',
    items: [
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'Years 3 to 6, from times tables to fractions.' },
      { href: '/multiplication-tables-check-year-4-practice', label: 'Year 4 multiplication tables check', p: 'The June check that follows the 2, 5 and 10 tables.' },
      { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs maths papers', p: 'The Year 6 tests, paper by paper.' },
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'Puzzles for children who love maths.' },
      { href: '/ks2-coding-lessons-online', label: 'KS2 coding lessons', p: 'A natural next step for young problem solvers.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our UK hub, maths and coding.' }
    ]
  },

  start: {
    h2: 'Book a free KS1 maths class',
    lede: 'Leave a number and we will call at a UK time that suits. The first class is playful: a few number games to see where your child is with counting and bonds.',
    readFirst: 'Prefer to read first? The <a class="ag-inline-link" href="/courses/elementary-mathematics-complete-masterclass">Elementary Maths course</a> sets out its levels, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a typical class.',
    note: 'WhatsApp is the easiest way to reach us and is free from a UK mobile. Our team in India replies from a +91 number.',
    formNote: 'Nothing to pay and nothing to sign. We send one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Primary maths', links: [
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' },
        { href: '/year-4-multiplication-tables-check-explained', label: 'Year 4 times tables check' },
        { href: '/ks2-and-11-plus-maths-tutor-cost-uk', label: 'Primary tutor costs' },
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' }
      ] },
      { h4: 'For young learners', links: [
        { href: '/ks2-coding-lessons-online', label: 'KS2 coding' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'KS1 maths for Years 1 and 2, live in UK time'
  },

  personalityCss: `
.ag-root.ag-kt .ag-hero h1 { letter-spacing: -0.01em; font-weight: 680; }
.ag-root.ag-kt .ag-capsule { border-left-width: 8px; border-radius: 10px; }
.ag-root.ag-kt .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-kt .ag-table caption { text-align: left; font-weight: 640; }
.ag-root.ag-kt .ag-table td:first-child { font-weight: 640; }
.ag-root.ag-kt .ag-steps li { margin-bottom: 10px; line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'England, national curriculum mathematics programmes of study, key stage 1 (Years 1 and 2): principal focus on confidence and mental fluency with whole numbers, counting and place value; number bonds to 20 and place value by the end of Year 2; Year 1 and Year 2 statutory statements (counting, bonds, 2, 5 and 10 tables, fractions, time, money, shape, data); notes on partitioning 23 and on programming robots with right-angle turns. Standards and Testing Agency: end of KS1 tests optional; statutory phonics check, annual reports and trialling; Paper 1 arithmetic about 20 minutes, Paper 2 reasoning about 35 minutes with 5 aural questions; not strictly timed; test frameworks not for guiding teaching; 2026 to 2027 arrangements unchanged; scaled scores 85 to 115, 100 meets the expected standard. DfE Primary assessments future dates: optional KS1 tests in May 2027.',
    localProject: 'The tests became optional; the curriculum did not. A KS1 maths door for Years 1 and 2: the programme of study\'s stated focus and end-of-Year-2 goal, a year-by-year table of the statutory content, then the Standards and Testing Agency\'s 2026 to 2027 position on the optional end of KS1 tests (what remains statutory, the two maths papers, timing, scaled scores, the review), five original kitchen-table games mapped to statutory skills, four original worked examples (partitioning, bridging 10, the 5 times table on a clock, three quarters of a set) with an original practice set, and how live online classes work for six year olds. Lesson family: a primary key stage door.',
    requiredMentions: [
      'The principal focus of mathematics teaching in key stage 1 is to ensure that pupils develop confidence and mental fluency with whole numbers, counting and place value.',
      'By the end of year 2, pupils should know the number bonds to 20 and be precise in using and understanding place value.',
      'programming robots using instructions given in right angles',
      'National curriculum tests at the end of KS1 are optional.',
      'The optional KS1 tests are not designed to be strictly timed.',
      'Teachers should not use the test frameworks to guide teaching and learning.',
      'Assessment arrangements for the academic year 2026 to 2027 will remain unchanged.',
      'the first example of a non-unit fraction',
      'Tens and Ones Shop'
    ],
    sources: [
      { claim: 'DfE, Mathematics programmes of study: key stages 1 and 2, national curriculum in England: KS1 focus, end of Year 2 goal, Year 1 and Year 2 statutory content and notes.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study' },
      { claim: 'STA, National curriculum assessments: optional key stage 1 tests: optional status, what remains statutory.', url: 'https://www.gov.uk/government/collections/national-curriculum-assessments-key-stage-1-tests' },
      { claim: 'STA, Optional key stage 1 tests guidance 2026 to 2027: maths papers, timing, frameworks, arrangements unchanged.', url: 'https://www.gov.uk/government/publications/optional-key-stage-1-tests-guidance' },
      { claim: 'STA, Optional key stage 1 tests: 2026 scaled scores: 85 to 115 and the expected standard.', url: 'https://www.gov.uk/government/publications/optional-key-stage-1-tests-2026-scaled-scores' },
      { claim: 'DfE, Primary assessments: future dates: optional KS1 tests in May 2027.', url: 'https://www.gov.uk/guidance/primary-assessments-future-dates' }
    ],
    rejectedClaims: [
      'The year the KS1 tests became optional: not stated on the pages read for this build, so the page says only that they are now optional.',
      'How many schools still use the optional tests: not published on the pages read, so not stated.',
      'Practice with released KS1 test items: never reproduced; families are pointed to the curriculum instead.',
      'Any promise about a child\'s attainment: declined.'
    ]
  }
};
