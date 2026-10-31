'use strict';
// Year 4 maths tutor online (ag- maths door, England; UK and US exams cluster Phase 2, row UK010).
// Sources, read raw on 31 October 2026 with curl (gov.uk content API and assets.publishing.service.gov.uk PDFs;
// PDF text through pypdf; raw copies in keyword-research-2026-09/uk-us-gap/src/year-4-maths-tutor-online/):
//  - DfE, Mathematics programmes of study: key stages 1 and 2 (DFE-00180-2013). Lower KS2: "By the end of year 4,
//    pupils should have memorised their multiplication tables up to and including the 12 multiplication table and show
//    precision and fluency in their work." Year 4 statutory: "count in multiples of 6, 7, 9, 25 and 1000"; "count
//    backwards through zero to include negative numbers"; "round any number to the nearest 10, 100 or 1000"; "read
//    Roman numerals to 100 (I to C) and know that over time, the numeral system changed to include the concept of zero
//    and place value"; "recall multiplication and division facts for multiplication tables up to 12 × 12"; "multiply
//    two-digit and three-digit numbers by a one-digit number using formal written layout"; "recognise and write decimal
//    equivalents of any number of tenths or hundredths"; "find the effect of dividing a one- or two-digit number by 10
//    and 100"; "find the area of rectilinear shapes by counting squares"; "read, write and convert time between analogue
//    and digital 12- and 24-hour clocks"; "describe positions on a 2-D grid as coordinates in the first quadrant".
//    Notes: "39 × 7 = 30 × 7 + 9 × 7"; "Perimeter can be expressed algebraically as 2(a + b) where a and b are the
//    dimensions in the same unit."; "Pupils are taught throughout that decimals and fractions are different ways of
//    expressing numbers and proportions."; "The decimal recording of money is introduced formally in year 4" (Year 3 note).
//  - DfE, Primary assessments: future dates (updated 12 October 2026): MTC "within the 2-week period from Monday 7 June
//    2027"; KS2 tests 2028 to 2029 "from Monday 14 May to Thursday 17 May 2029".
//  - STA, 2027 key stage 2 assessment and reporting arrangements (ARA): "Monday 7 June to Friday 18 June MTC
//    administration period"; absent pupils "Monday 21 June to Friday 25 June"; "Monday 28 June MTC results available on
//    the MTC service"; try it out from "Monday 26 April"; "Independent schools cannot participate in the MTC."
//  - STA, Multiplication tables check: information for parents: "25 times table questions"; "3 practice questions";
//    "No, you do not need to do anything additional to prepare your child for the check."; "There is no pass mark for
//    the check."
//  - Curriculum and Assessment Review Final Report (November 2025): "We recommend retaining the Multiplication Tables
//    Check (MTC) in Year 4 as an important indicator of multiplicative competence." Government response: "The timed
//    nature of the multiplication tables check is important to its purpose of assessing fluent recall of times tables".
// Our own: the Year 4 calendar mapping (this Year 4 sits KS2 tests in May 2029), the "tables are one strand of seven"
// framing, four worked examples and the practice set. Spine: Year 4 is the times tables year, but the check covers one
// line of the programme; the rest of Year 4 (negative numbers, hundredths, Roman numerals to C, area, coordinates) is
// where the year is won or lost. Lesson family: a primary year door, distinct from the two MTC pages.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'YEAR 4 MATHS', blurb: 'Tables to 12 × 12 and the June check, plus hundredths, negative numbers, Roman numerals to C, area and coordinates.' },
  slug: 'year-4-maths-tutor-online',
  code: 'gac',
  accent: '#286248',
  accentRationale: 'Year 4 maths: a deep fir green (#286248, 6.76:1 on #FBF8F2), bluer than the Year 5 olive so the two primary years read apart',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Year 4 maths tutor online',
  title: 'Year 4 Maths Tutor Online | 12 x 12 Tables, MTC, Live Classes',
  description: 'Year 4 maths tutor online: the full Year 4 curriculum beyond the June 2027 times tables check, from hundredths to area, with live classes in UK time.',
  ogDescription: 'Year 4 is the times tables year, but the check covers one line of the curriculum. Here is the rest of Year 4 maths, and how we teach it.',
  twitterDescription: 'Year 4 maths from the DfE programme of study and the STA 2027 arrangements, with worked examples and live classes.',
  pageName: 'Year 4 Maths Tutor Online',
  webPageDescription: 'Live online maths tutoring for Year 4 children in England, built from the Year 4 programme of study, the STA\'s 2027 assessment arrangements and its guidance for parents.',
  courseDescription: 'Live online maths for Year 4: times tables to 12 × 12, four-digit place value, negative numbers, short multiplication, hundredths and decimals, area, perimeter, coordinates and time.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Year 4 maths tutor',
  navLinks: [
    { href: '#strands', label: 'Year 4 content' },
    { href: '#check', label: 'The June check' },
    { href: '#beyond', label: 'Beyond tables' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Year 4 maths &middot; ages 8 to 9',
  h1: 'Year 4 maths tutor online',
  lede: 'Most parents know Year 4 as the times tables year, and with reason: by the summer every child in a state school in England is expected to know the tables up to 12 × 12, and a short on-screen check in June asks them to prove it. But the tables are one line of a long programme. Year 4 also brings four-digit numbers, counting below zero, hundredths and decimals, Roman numerals to 100, the area of a shape and the first coordinate grid. This page covers the whole of Year 4 maths from the Department for Education\'s programme of study, what the 2027 check involves in brief, and how we tutor the year, with four examples of our own.',
  secondaryCta: { href: '#strands', label: 'See the Year 4 content' },
  wa: 'Hello Modern Age Coders, I would like a free first class with a Year 4 maths tutor.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the DfE Year 4 programme and STA 2027 dates',
  spec: [
    ['Year group', 'Year 4, ages 8 to 9'],
    ['Stage', 'End of lower Key Stage 2'],
    ['Tables by summer', 'Up to 12 × 12'],
    ['2027 check window', '7 to 18 June 2027'],
    ['New this year', 'Hundredths, negatives, area'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Year 4 maths is the last year of lower Key Stage 2 in England\'s national curriculum, for children aged 8 to 9. Its best-known requirement is recall of every times table up to 12 × 12, checked in a statutory on-screen multiplication tables check held from 7 to 18 June 2027. The programme also adds four-digit place value, negative numbers, hundredths, Roman numerals to C, area by counting squares and coordinates. Modern Age Coders tutors Year 4 maths live online through its Mental Maths for Kids and Elementary Maths courses, one to one or in a class of 15 to 20. Your first class is free. We have no connection with the STA or any school.',

  picks: {
    eyebrow: 'Courses for Year 4',
    h2: 'Three courses for a Year 4 child',
    lede: 'The first is built around fast, secure number facts. The second covers the whole Year 4 programme. The third is for children who want the tables with a visual picture behind them.',
    items: [
      { course: 'mental-maths-mastery-kids', code: 'Y4 / 01', title: 'Mental Maths for Kids', note: 'Tables to 12 × 12, derived facts and mental calculation, the strand the June check looks at.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'Y4 / 02', title: 'Elementary Maths', note: 'Every Year 4 strand: place value, decimals, measures, shape and data, at your child\'s pace.' },
      { course: 'abacus-mental-maths-course-for-kids', code: 'Y4 / 03', title: 'Abacus and Mental Maths', note: 'For children who think in pictures: beads first, then the same facts held in the head.' }
    ]
  },

  sections: [
    {
      id: 'strands', tint: 'tint', eyebrow: 'Year 4 content',
      h2: 'What is taught in Year 4 maths?',
      lede: 'Seven strands, of which times tables are only one. The table lists the statutory Year 4 requirements in the DfE programme of study, shortened and grouped.',
      body: [
        { kind: 'p', html: 'The lower Key Stage 2 introduction closes with the sentence that makes Year 4 famous: "By the end of year 4, pupils should have memorised their multiplication tables up to and including the 12 multiplication table and show precision and fluency in their work." The second half of that sentence matters as much as the first. Precision and fluency are asked for across all of Year 4, not just in the tables.' },
        { kind: 'table', mt: true, caption: 'Year 4 maths in the national curriculum for England (statutory content, grouped and shortened)', head: ['Strand', 'What Year 4 adds'], rows: [
          ['Place value', 'Four-digit numbers; 1000 more or less; counting in 6s, 7s, 9s, 25s and 1000s; counting back through zero into negative numbers; rounding to the nearest 10, 100 or 1000; Roman numerals I to C'],
          ['Adding and subtracting', 'Columnar methods with up to 4 digits; estimating and checking with the inverse; two-step problems'],
          ['Multiplying and dividing', 'All tables to 12 × 12; multiplying by 0 and 1; factor pairs; three numbers multiplied together; two- and three-digit numbers times a one-digit number in formal written layout'],
          ['Fractions and decimals', 'Families of equivalent fractions; hundredths; decimal equivalents of tenths, hundredths, a quarter, a half and three quarters; dividing by 10 and 100; rounding one-place decimals'],
          ['Measurement', 'Converting units such as kilometres to metres; perimeter of rectilinear figures; area by counting squares; money in pounds and pence; analogue and digital 12- and 24-hour clocks'],
          ['Geometry', 'Classifying triangles and quadrilaterals; acute and obtuse angles; lines of symmetry; coordinates in the first quadrant; translations left, right, up and down'],
          ['Statistics', 'Bar charts and time graphs for discrete and continuous data; comparison, sum and difference problems']
        ] },
        { kind: 'p', html: 'Two notes in the guidance show how the year is meant to hang together. One says "Pupils are taught throughout that decimals and fractions are different ways of expressing numbers and proportions." The other gives the first algebra a child meets in primary school: "Perimeter can be expressed algebraically as 2(a + b) where a and b are the dimensions in the same unit." Year 4 quietly starts both the decimal system and the idea of a formula.' },
        { kind: 'source', html: 'From the Year 4 programme of study and lower Key Stage 2 introduction in the DfE\'s <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">mathematics programmes of study: key stages 1 and 2</a>, read on 31 October 2026.' }
      ]
    },
    {
      id: 'check', tint: 'deep', eyebrow: 'The June check',
      h2: 'When is the 2027 multiplication tables check, and how much preparation does it need?',
      lede: 'The 2027 check runs from Monday 7 June to Friday 18 June 2027 in state-funded schools. The STA tells parents no extra preparation is needed beyond the times tables practice teachers already set.',
      body: [
        { kind: 'table', caption: 'The 2027 check, from the STA\'s 2027 key stage 2 assessment and reporting arrangements and its information for parents', head: ['Date in 2027', 'What happens'], rows: [
          ['Monday 26 April', 'Schools can sign in to the MTC service and use the try it out area with pupils'],
          ['Monday 7 June to Friday 18 June', 'MTC administration period'],
          ['Monday 21 June to Friday 25 June', 'Absent pupils, or those delayed by technical problems, take the check'],
          ['Monday 28 June', 'Results available to schools on the MTC service'],
          ['After that', 'Your child\'s teacher shares the score with you; there is no pass mark']
        ] },
        { kind: 'p', html: 'The check itself is short: the STA\'s leaflet for parents describes "25 times table questions", with "3 practice questions" first. Our sibling pages explain the timing and which tables carry the most weight: see the <a class="ag-inline-link" href="/year-4-multiplication-tables-check-explained">Year 4 multiplication tables check explained</a> and our <a class="ag-inline-link" href="/multiplication-tables-check-year-4-practice">practice guide for the check</a>. Here we only add the parts that matter for planning a Year 4 year.' },
        { kind: 'two', mt: true,
          leftH3: 'What the STA tells parents',
          left: [
            'Asked whether parents need to prepare a child, the leaflet answers: "No, you do not need to do anything additional to prepare your child for the check."',
            'It adds that teachers may ask you to practise times tables at home as part of usual practice. That is the right scale of help: a few minutes, often.'
          ],
          rightH3: 'Independent schools',
          right: [
            'The 2027 arrangements state plainly: "Independent schools cannot participate in the MTC."',
            'A Year 4 child at an independent school, or educated at home, will not sit the check, though the expectation in the curriculum is the same goal to aim for.'
          ] },
        { kind: 'p', mt: true, html: 'Is the check changing? The Curriculum and Assessment Review, published in November 2025, recommended keeping it: "We recommend retaining the Multiplication Tables Check (MTC) in Year 4 as an important indicator of multiplicative competence." The government\'s response agreed that "The timed nature of the multiplication tables check is important to its purpose of assessing fluent recall of times tables", while promising to work with the STA to reduce any unintended effects. The DfE says arrangements for 2026 to 2027 are unchanged.' },
        { kind: 'source', html: 'Sources: STA, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/key-stage-2-assessment-and-reporting-arrangements-ara" rel="noopener" target="_blank">2027 key stage 2 assessment and reporting arrangements</a>; STA, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/multiplication-tables-check-information-for-parents" rel="noopener" target="_blank">Multiplication tables check: information for parents</a>; <a class="ag-inline-link" href="https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report" rel="noopener" target="_blank">Curriculum and Assessment Review final report</a> and government response.' }
      ]
    },
    {
      id: 'beyond', tint: '', eyebrow: 'Beyond tables',
      h2: 'What else in Year 4 maths do children find hard?',
      lede: 'In our experience three things: decimals and hundredths, negative numbers, and telling area from perimeter. Each is new in Year 4, and none is touched by the June check.',
      body: [
        { kind: 'two',
          leftH3: 'Hundredths and decimals',
          left: [
            'Year 4 asks children to "recognise and write decimal equivalents of any number of tenths or hundredths" and to see what happens when a one- or two-digit number is divided by 10 or 100.',
            'The hard part is that 0.4 is larger than 0.35, even though 35 is larger than 4. Children who understand tenths and hundredths as places, not as digits after a dot, get this right.'
          ],
          rightH3: 'Below zero',
          right: [
            'The requirement to "count backwards through zero to include negative numbers" is a child\'s first meeting with numbers less than nothing.',
            'We use a thermometer and a number line before any rule. A temperature that falls 7 degrees from 4 degrees lands at minus 3, which a child can see happen.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Area is not perimeter',
          left: [
            'Year 4 adds "find the area of rectilinear shapes by counting squares" alongside perimeter. Many children add the sides when asked for area, or count squares when asked for the distance round.',
            'We ask one question every time: are we covering the shape, or walking round it?'
          ],
          rightH3: 'Roman numerals to C',
          right: [
            'The curriculum asks pupils to "read Roman numerals to 100 (I to C) and know that over time, the numeral system changed to include the concept of zero and place value".',
            'That second clause is the interesting one. Writing 94 as XCIV shows a child why a system with place value and a zero is such an advance.'
          ] },
        { kind: 'p', mt: true, html: 'The written method of the year deserves a mention too. Year 4 asks children to "multiply two-digit and three-digit numbers by a one-digit number using formal written layout", and the notes connect it to the distributive law with the example 39 × 7 = 30 × 7 + 9 × 7. A child who sees short multiplication as splitting a number into hundreds, tens and ones and multiplying each part is ready for long multiplication in Year 5.' },
        { kind: 'source', html: 'Statutory wording and notes from the Year 4 programme of study, DfE.' }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Four Year 4 questions we wrote, with every step shown',
      lede: 'All four use statutory Year 4 content and are our own questions, not items from the check or a school scheme.',
      body: [
        { kind: 'two',
          leftH3: '1. Short multiplication with carrying',
          left: [
            '<strong>Question (ours).</strong> 247 × 6.',
            '<strong>Ones.</strong> 7 × 6 = 42. Write 2, carry 4 tens.',
            '<strong>Tens.</strong> 4 × 6 = 24 tens, plus the 4 carried, is 28 tens. Write 8, carry 2 hundreds.',
            '<strong>Hundreds.</strong> 2 × 6 = 12 hundreds, plus 2, is 14 hundreds. The answer is 1482. <strong>Check by splitting:</strong> 1200 + 240 + 42 = 1482.'
          ],
          rightH3: '2. Dividing by 10 and 100',
          right: [
            '<strong>Question (ours).</strong> What is 47 ÷ 10, and 47 ÷ 100? Name the value of the 7 each time.',
            '<strong>Divide by 10.</strong> Every digit moves one place to the right: 47 becomes 4.7, and the 7 is now 7 tenths.',
            '<strong>Divide by 100.</strong> Two places: 47 becomes 0.47, and the 7 is 7 hundredths.',
            '<strong>Why it helps.</strong> A child who says the digits move, not the decimal point, will not be confused when Year 5 brings thousandths.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. Reading a Roman numeral',
          left: [
            '<strong>Question (ours).</strong> Write XCIV as a number.',
            '<strong>Split into pairs and singles.</strong> XC and IV, because a smaller symbol before a larger one is taken away.',
            '<strong>Value each part.</strong> XC is 100 take away 10, which is 90. IV is 5 take away 1, which is 4.',
            '<strong>Add.</strong> 90 + 4 = 94. Now ask how to write 104 with no symbol for zero, and the reason the curriculum mentions zero becomes clear.'
          ],
          rightH3: '4. Same perimeter, different area',
          right: [
            '<strong>Question (ours).</strong> A rectangle is 7 cm by 3 cm. A square has sides of 5 cm. Compare their perimeters and areas.',
            '<strong>Perimeters.</strong> Using 2(a + b): 2 × (7 + 3) = 20 cm, and 2 × (5 + 5) = 20 cm. They are equal.',
            '<strong>Areas.</strong> Counting centimetre squares: 7 rows of 3 is 21, and 5 rows of 5 is 25.',
            '<strong>The point.</strong> The same walk round can enclose different amounts of space. This is a stretch question that looks ahead to Year 6.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, answers below).</strong> (1) 1000 more than 6482. (2) Round 3651 to the nearest 100. (3) 315 × 4. (4) Start at 6 and count back 10. (5) Write 63 hundredths as a decimal. (6) Write three quarters as a decimal. (7) Move the point (2, 5) three squares right and one square down. (8) 9 × 12 and 108 ÷ 9. <strong>Answers:</strong> (1) 7482; (2) 3700; (3) 1260; (4) minus 4; (5) 0.63; (6) 0.75; (7) (5, 4); (8) 108 and 12.' }
      ]
    },
    {
      id: 'tutoring', tint: '', eyebrow: 'Our tutoring',
      h2: 'How do we tutor Year 4 maths through the school year?',
      lede: 'Tables early and steadily, so they are secure well before June, and the rest of the programme taught properly around them. The order below is ours and changes after the first class.',
      body: [
        { kind: 'ol', items: [
          '<strong>A free first class.</strong> The tutor checks which tables are instant and which are counted, reads a four-digit number with your child and tries one short multiplication.',
          '<strong>Tables from autumn, not May.</strong> Two or three tables at a time, with their division facts, revisited every lesson. Factor pairs and commutativity halve the facts a child really has to learn.',
          '<strong>Place value past 1000 and below 0.</strong> Number lines that run in both directions, rounding to 10, 100 and 1000, and Roman numerals as a history lesson.',
          '<strong>Short multiplication as splitting.</strong> The written layout taught alongside the distributive law, so every answer can be checked a second way.',
          '<strong>Decimals as places.</strong> Tenths and hundredths on a place value chart, with lengths and capacities as real examples.',
          '<strong>Shape, area and coordinates.</strong> Classifying triangles and quadrilaterals, counting squares for area and plotting points in the first quadrant.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group or 1-on-1 in Year 4?',
          left: [
            'A group of 15 to 20 Year 4 children works well for steady tables practice and a child who likes company.',
            '1-on-1 is better for a child who freezes under a timer, has gaps from Year 3, or is ready to move faster.'
          ],
          rightH3: 'What we will not promise',
          right: [
            'A full score in the check. There is no pass mark, and the score is for the school to see who needs help.',
            'Any connection with the STA, the DfE or your child\'s school. We work for families only.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four checkpoints across Year 4',
    lede: 'We look for each in a short task during a normal lesson. They are our checkpoints, not a formal test.',
    table: { caption: 'Signs a Year 4 child is on track (our checkpoints, mapped to the programme of study)', head: ['Checkpoint', 'Typical term', 'What we look for'], rows: [
      ['1. Four-digit numbers', 'Autumn term', 'Reads, orders and rounds numbers to 10 000, and counts back through zero'],
      ['2. Most tables instant', 'By spring term', 'Recalls the 6, 7, 9, 11 and 12 tables without counting up'],
      ['3. Decimals understood', 'Spring to summer', 'Writes tenths and hundredths as decimals and divides by 10 and 100'],
      ['4. Written and spatial work', 'Summer term', 'Short multiplication of three-digit numbers, area by counting squares, points plotted on a grid']
    ] },
    left: { h3: 'Checkpoint two by spring', ps: [
      'If the tables are secure months before June, the check becomes an ordinary morning rather than a target.',
      'Families who want fluency without screens may like our <a class="ag-inline-link" href="/online-maths-tuition-for-kids-in-uk">maths tuition for kids</a> page.'
    ] },
    right: { h3: 'Checkpoint three is the Year 5 key', ps: [
      'Year 5 brings thousandths and percentages, and both stand on Year 4 hundredths.',
      'We can pause classes during school holidays.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for eight and nine year olds',
    lede: 'Number facts, the full primary programme, and a few courses that use maths to make things.',
    bands: [
      { num: 'I', h3: 'Number facts', sub: 'The Year 4 headline', courses: [
        { code: 'UK / Y41 / 01', slug: 'mental-maths-mastery-kids', title: 'Mental Maths for Kids', blurb: 'Tables to 12 × 12 and mental methods.' },
        { code: 'UK / Y41 / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'A visual route to the same facts.' },
        { code: 'UK / Y41 / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Patterns for confident calculators.' }
      ] },
      { num: 'II', h3: 'The whole programme', sub: 'Every Year 4 strand', courses: [
        { code: 'UK / Y42 / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths', blurb: 'Place value, decimals, measure and shape.' },
        { code: 'UK / Y42 / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and Readiness', blurb: 'Puzzles and spatial thinking to age 9.' },
        { code: 'UK / Y42 / 03', slug: 'ks2-sats-maths-course', title: 'KS2 SATs Maths', blurb: 'Looking ahead to the Year 6 papers.' }
      ] },
      { num: 'III', h3: 'Make with maths', sub: 'Outside the syllabus', courses: [
        { code: 'UK / Y43 / 01', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Coordinates and angles in a game.' },
        { code: 'UK / Y43 / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Breaking a puzzle into steps.' },
        { code: 'UK / Y43 / 03', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'For rebuilding Key Stage 1 number.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How Year 4 classes work',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Tutors teach from India, and the timetable we give you is in UK time.',
    slots: [
      { time: 'Straight after school', l: 'Short, focused, tables first.' },
      { time: 'Later evening', l: 'After clubs and homework.' },
      { time: 'Weekend morning', l: 'Room for longer problems.' }
    ],
    cells: [
      { h3: 'Tables all year', p: 'A few facts every lesson from September, never a cram in May.' },
      { h3: 'Facts from facts', p: 'Factor pairs and doubling so each new table leans on an old one.' },
      { h3: 'Number lines both ways', p: 'Negative numbers and decimals placed before they are calculated with.' },
      { h3: 'Check another way', p: 'Each written answer tested by splitting or by the inverse.' },
      { h3: 'Trial class, no fee', p: 'One whole live lesson before you decide.' },
      { h3: 'Group or one child', p: 'A class of 15 to 20 Year 4 pupils, or private 1-on-1.' }
    ]
  },

  projectsH2: 'A few things students built with us',
  projectsLede: 'Everyday class projects, none of them graded. There are more in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, exactly as they posted them.',

  fees: {
    h2: 'Fees for a Year 4 maths tutor',
    lede: 'There is no charge for the first class. From then on you pay one fee a month, less for a group seat than for 1-on-1, and only after you have chosen a course and a weekly time. No contract ties you in.',
    free: ['A live Year 4 class', 'Tables and place value checked', 'Just a phone number to book'],
    group: ['15 to 20 children in Year 4', 'The same tutor each week', 'Five-minute tables practice', 'A progress note each term'],
    one: ['Private tutor for one child', 'Calm pace for anxious children', 'Gaps from Year 3 closed first']
  },

  faq: {
    eyebrow: 'Year 4 questions',
    h2: 'What parents ask about Year 4 maths',
    items: [
      { q: 'What maths do children learn in Year 4?', a: 'All the times tables up to 12 × 12, numbers to four digits, negative numbers, rounding, short multiplication, hundredths and decimals, Roman numerals up to C, perimeter and area, angles, symmetry, coordinates and bar charts.' },
      { q: 'Do Year 4 children have to know all their times tables?', a: 'Yes. The national curriculum says that by the end of Year 4 pupils should have memorised the tables up to and including 12, with the related division facts.' },
      { q: 'When is the multiplication tables check in 2027?', a: 'The STA\'s 2027 arrangements set the administration period from Monday 7 June to Friday 18 June 2027, with a catch-up week for absent pupils from Monday 21 June.' },
      { q: 'Do I need to prepare my child for the multiplication tables check?', a: 'The STA\'s leaflet for parents says you do not need to do anything additional, though teachers may ask you to practise tables at home. Short, regular practice is enough.' },
      { q: 'Is there a pass mark for the Year 4 times tables check?', a: 'No. The teacher shares your child\'s score with you, and the school uses the results to see which children need extra support.' },
      { q: 'Does my child sit the check at an independent school?', a: 'No. The 2027 arrangements say independent schools cannot participate in the check, so it is taken only in state-funded schools.' },
      { q: 'Why does my child find decimals hard in Year 4?', a: 'Usually because they read the digits after the point as a whole number, so 0.35 looks bigger than 0.4. Teaching tenths and hundredths as places on a chart, with measurements as examples, clears this up.' },
      { q: 'What comes after Year 4 maths?', a: 'Year 5 extends place value to a million and adds long multiplication, thousandths and percentages. A child in Year 4 during 2026 to 2027 sits the KS2 tests in May 2029, listed by the DfE for 14 to 17 May.' },
      { q: 'What time are Year 4 lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are always given in UK time.' },
      { q: 'Are you part of the STA or my child\'s school?', a: 'No. Modern Age Coders is a separate, independent online tutoring school. We follow the published curriculum but are not connected with the STA, the DfE or any school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More for Year 4',
    h2: 'Related pages for Year 4 families',
    lede: 'The check, the key stage and what follows.',
    items: [
      { href: '/year-4-multiplication-tables-check-explained', label: 'Tables check explained', p: 'How the June check works.' },
      { href: '/multiplication-tables-check-year-4-practice', label: 'Tables check practice', p: 'Building recall, not just speed.' },
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'Years 3 to 6 as one stage.' },
      { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs maths papers', p: 'Where Year 4 leads in Year 6.' },
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'Puzzles for keen upper primary pupils.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our UK hub page.' }
    ]
  },

  start: {
    h2: 'Book a free Year 4 maths class',
    lede: 'Give us a phone number and we will call at a UK time to suit you. During the class the tutor tries some tables, a four-digit number and one written multiplication, then tells you where to begin.',
    readFirst: 'Want to look first? The <a class="ag-inline-link" href="/courses/mental-maths-mastery-kids">Mental Maths for Kids course</a> and the <a class="ag-inline-link" href="/courses/elementary-mathematics-complete-masterclass">Elementary Maths course</a> each publish their syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our approach.',
    note: 'WhatsApp reaches us quickest and is free from a UK number. Replies come from our team in India, on a +91 number.',
    formNote: 'No fee, no commitment. You will get one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Primary maths', links: [
        { href: '/year-4-multiplication-tables-check-explained', label: 'Tables check explained' },
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' },
        { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs papers' },
        { href: '/11-plus-maths-tuition', label: '11+ maths' }
      ] },
      { h4: 'Also for this age', links: [
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' },
        { href: '/ks2-coding-lessons-online', label: 'KS2 coding' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Year 4 maths, taught live in UK time'
  },

  personalityCss: `
.ag-root.ag-gac .ag-hero h1 { letter-spacing: -0.014em; font-weight: 720; }
.ag-root.ag-gac .ag-capsule { border-left-width: 6px; border-radius: 6px; }
.ag-root.ag-gac .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-gac .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.005em; }
.ag-root.ag-gac .ag-table th:first-child { width: 24%; }
.ag-root.ag-gac .ag-steps li { margin-bottom: 8px; }
`,

  dossier: {
    curriculumAuthority: 'England, national curriculum mathematics, lower key stage 2, Year 4 programme of study (DFE-00180-2013): tables memorised to 12 by the end of Year 4 with precision and fluency; Year 4 statutory statements (multiples of 6, 7, 9, 25 and 1000, counting back through zero, rounding to 10, 100 and 1000, Roman numerals I to C and the history of zero and place value, recall to 12 × 12, formal written layout for one-digit multipliers, decimal equivalents of tenths and hundredths, dividing by 10 and 100, area by counting squares, analogue and digital clocks, first-quadrant coordinates); notes on the distributive law (39 × 7), perimeter as 2(a + b), and decimals and fractions as ways of expressing numbers and proportions. STA 2027 KS2 ARA: MTC administration 7 to 18 June 2027, catch-up 21 to 25 June, results to schools 28 June, try it out from 26 April, independent schools cannot participate. STA MTC information for parents: 25 questions, 3 practice questions, no additional preparation needed, no pass mark. Curriculum and Assessment Review: retain the MTC; government response: timed nature important. DfE future dates: KS2 tests 14 to 17 May 2029.',
    localProject: 'The tables year, and the six other strands. A Year 4 door built on the programme of study: the end-of-Year-4 sentence with its precision and fluency clause, a seven-strand statutory table, and the notes on decimals and on perimeter as 2(a + b). A dated 2027 check calendar from the STA ARA, the STA leaflet on preparation, the independent schools rule, and the Curriculum and Assessment Review on keeping the check. A section on the Year 4 content the check never touches (hundredths, negative numbers, area against perimeter, Roman numerals and zero, short multiplication as the distributive law). Four original worked examples (247 × 6, 47 divided by 10 and 100, XCIV, a 7 by 3 rectangle against a 5 by 5 square) and an original eight-item practice set. Lesson family: a primary year door.',
    requiredMentions: [
      'and show precision and fluency in their work',
      'read Roman numerals to 100 (I to C) and know that over time, the numeral system changed to include the concept of zero and place value',
      'recognise and write decimal equivalents of any number of tenths or hundredths',
      'Perimeter can be expressed algebraically as 2(a + b) where a and b are the dimensions in the same unit.',
      'Pupils are taught throughout that decimals and fractions are different ways of expressing numbers and proportions.',
      'Independent schools cannot participate in the MTC.',
      'No, you do not need to do anything additional to prepare your child for the check.',
      'We recommend retaining the Multiplication Tables Check (MTC) in Year 4 as an important indicator of multiplicative competence.',
      'The timed nature of the multiplication tables check is important to its purpose of assessing fluent recall of times tables'
    ],
    sources: [
      { claim: 'DfE, Mathematics programmes of study: key stages 1 and 2: lower KS2 expectation, Year 4 statutory requirements and notes.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study' },
      { claim: 'STA, 2027 key stage 2 assessment and reporting arrangements: MTC dates for 2027 and the independent schools rule.', url: 'https://www.gov.uk/government/publications/key-stage-2-assessment-and-reporting-arrangements-ara' },
      { claim: 'STA, Multiplication tables check: information for parents: number of questions, practice questions, preparation, pass mark.', url: 'https://www.gov.uk/government/publications/multiplication-tables-check-information-for-parents' },
      { claim: 'DfE, Primary assessments: future dates: KS2 tests 14 to 17 May 2029.', url: 'https://www.gov.uk/guidance/primary-assessments-future-dates' },
      { claim: 'Curriculum and Assessment Review final report and government response (November 2025): retaining the MTC; its timed nature.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report' }
    ],
    rejectedClaims: [
      'MTC national results and the per-table question weighting: already set out on the two live MTC pages, so not repeated here.',
      'Any claim that a tutor raises an MTC score: declined; there is no pass mark and we promise no score.',
      'Changes to the check after 2027: the government response promises work with the STA but gives no new format, so none is described.'
    ]
  }
};
