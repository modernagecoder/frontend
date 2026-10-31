'use strict';
// Year 3 maths tutor online (ag- maths door, England; UK and US exams cluster Phase 2, row UK009).
// Sources, read raw on 31 October 2026 with curl (gov.uk content API and assets.publishing.service.gov.uk PDFs;
// PDF text through pypdf; raw copies in keyword-research-2026-09/uk-us-gap/src/year-3-maths-tutor-online/):
//  - DfE, Mathematics programmes of study: key stages 1 and 2 (national curriculum in England, DFE-00180-2013).
//    Lower key stage 2: "become increasingly fluent with whole numbers and the four operations, including number facts
//    and the concept of place value"; "By the end of year 4, pupils should have memorised their multiplication tables up
//    to and including the 12 multiplication table". Year 3 statutory: "recognise the place value of each digit in a
//    three-digit number (hundreds, tens, ones)"; "add and subtract numbers with up to three digits, using formal written
//    methods of columnar addition and subtraction"; "estimate the answer to a calculation and use inverse operations to
//    check answers"; "recall and use multiplication and division facts for the 3, 4 and 8 multiplication tables";
//    "count up and down in tenths"; "add and subtract fractions with the same denominator within one whole"; "measure the
//    perimeter of simple 2-D shapes"; "tell and write the time from an analogue clock, including using Roman numerals
//    from I to XII, and 12-hour and 24-hour clocks"; "identify right angles, recognise that two right angles make a
//    half-turn"; "interpret and present data using bar charts, pictograms and tables". Year 3 notes: "Through doubling,
//    they connect the 2, 4 and 8 multiplication tables."; "146 = 100 + 40 and 6, 146 = 130 + 16"; "4 × 12 × 5 = 4 × 5 ×
//    12 = 20 × 12 = 240"; correspondence problems ("3 hats and 4 coats, how many different outfits?"); "They record £ and
//    p separately. The decimal recording of money is introduced formally in year 4." (restated without the symbol).
//    Year 2 statements used in the progression table: two-digit place value, numbers to at least 100, the 2, 5 and 10
//    tables, fractions one third, one quarter, two quarters and three quarters, time to five minutes. Year 4 statements:
//    tables up to 12 × 12, four-digit place value, columnar methods with up to 4 digits.
//  - DfE, Primary assessments: future dates (updated 12 October 2026): multiplication tables check "within the 2-week
//    period from Monday 5 June 2028" (academic year 2027 to 2028); "Assessment arrangements for the academic year 2026 to
//    2027 will remain unchanged."
//  - Curriculum and Assessment Review Final Report (November 2025, gov.uk PDF): "We believe the priority at Key Stage 2
//    should be ensuring all pupils build competence in multiplicative reasoning and problem-solving."; "Multiplicative
//    reasoning includes secure understanding of multiplication and division scaling, repeated addition, arrays, and whole
//    number rates." Government response: "publish a revised national curriculum in 2027 for first teaching in 2028".
// Our own: the year mapping (a child in Year 3 during 2026 to 2027 sits the multiplication tables check in June 2028
// and, on the usual timetable, the KS2 tests in summer 2030, a date the DfE has not yet published), the Year 2 to 4
// progression table assembled from the programme of study, four worked examples and the practice set.
// Spine: Year 3 is where written column methods begin and fractions become numbers; the 3, 4 and 8 tables are the
// doubling family that leads to the Year 4 check. Lesson family: a primary year door, distinct from the KS2, MTC and
// Year 5 pages.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'YEAR 3 MATHS', blurb: 'The first year of Key Stage 2: column addition and subtraction, the 3, 4 and 8 tables, tenths and fractions as numbers.' },
  slug: 'year-3-maths-tutor-online',
  code: 'gab',
  accent: '#464A7E',
  accentRationale: 'Year 3 maths: a slate indigo (#464A7E, 7.8:1 on #FBF8F2), cooler and greyer than the KS1 violet and well apart from the Year 5 olive',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Year 3 maths tutor online',
  title: 'Year 3 Maths Tutor Online | Column Methods, Fractions, Live',
  description: 'Year 3 maths tutor online: what the national curriculum adds in Year 3, from column methods to the 3, 4 and 8 tables and fractions, with live classes in UK time.',
  ogDescription: 'Year 3 is where column addition and subtraction, the 3, 4 and 8 times tables and fractions as numbers all begin. What changes and how to help.',
  twitterDescription: 'Year 3 maths explained from the DfE programme of study, with four worked examples of our own and live classes in UK time.',
  pageName: 'Year 3 Maths Tutor Online',
  webPageDescription: 'Live online maths tutoring for Year 3 children in England, built from the national curriculum programme of study for Year 3 and the DfE\'s published primary assessment dates.',
  courseDescription: 'Live online maths for Year 3: place value to 1000, column addition and subtraction, the 3, 4 and 8 tables, tenths and simple fractions, time, perimeter, angles and bar charts.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Year 3 maths tutor',
  navLinks: [
    { href: '#year3', label: 'Year 3 content' },
    { href: '#columns', label: 'Column methods' },
    { href: '#tables', label: 'The 3, 4 and 8 tables' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Year 3 maths &middot; ages 7 to 8',
  h1: 'Year 3 maths tutor online',
  lede: 'Year 3 opens Key Stage 2, and for many seven year olds it is the first time maths is written down in columns. Numbers stretch to 1000, the 3, 4 and 8 times tables arrive together, fractions stop being only halves and quarters of a cake and start sitting on a number line, and the clock face gains Roman numerals. None of this is tested nationally in Year 3, which is exactly why gaps can slip past unnoticed until the times tables check in Year 4. Below we set out what the Department for Education\'s programme of study asks of Year 3, how it grows out of Year 2 and into Year 4, and how we tutor it, with four examples we wrote ourselves.',
  secondaryCta: { href: '#year3', label: 'What Year 3 covers' },
  wa: 'Hello Modern Age Coders, I would like a free first class with a Year 3 maths tutor.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the DfE Year 3 programme of study',
  spec: [
    ['Year group', 'Year 3, ages 7 to 8'],
    ['Stage', 'Lower Key Stage 2'],
    ['New this year', 'Column methods, 3, 4 and 8 tables'],
    ['Numbers to', '1000'],
    ['Next national check', 'Tables check, June 2028'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Year 3 maths is the first year of Key Stage 2 in the national curriculum for England, for children aged 7 to 8. The Department for Education\'s programme of study introduces formal column addition and subtraction with up to three digits, the 3, 4 and 8 times tables, place value to 1000, tenths, and adding fractions with the same denominator. There is no national test in Year 3; a child in Year 3 during 2026 to 2027 meets the multiplication tables check in June 2028. Modern Age Coders teaches Year 3 maths live online, 1-on-1 or in a group of 15 to 20, through its Elementary Maths course. The first class is free, and we are independent of every school and of the DfE.',

  picks: {
    eyebrow: 'Courses for Year 3',
    h2: 'Three courses that fit a Year 3 child',
    lede: 'Most Year 3 children start with the first. The other two suit a child who needs quicker number facts, or one who loves puzzles more than worksheets.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'Y3 / 01', title: 'Elementary Maths', note: 'Its lower Key Stage 2 level follows the Year 3 programme: place value, column methods, fractions and measures.' },
      { course: 'mental-maths-mastery-kids', code: 'Y3 / 02', title: 'Mental Maths for Kids', note: 'For a child who counts on fingers for 4 × 8: number facts held in memory, built a little each week.' },
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'Y3 / 03', title: 'Reasoning and Readiness', note: 'Patterns, shapes and quantity puzzles for curious six to nine year olds, with no test drilling.' }
    ]
  },

  sections: [
    {
      id: 'year3', tint: 'tint', eyebrow: 'Year 3 content',
      h2: 'What do children learn in Year 3 maths?',
      lede: 'Year 3 adds three-digit place value, written column methods, three new times tables, tenths and fractions as numbers. Everything in the table below is statutory in the DfE programme of study, summarised by area.',
      body: [
        { kind: 'p', html: 'For the two years of lower Key Stage 2, Years 3 and 4, the curriculum sets one main aim: that pupils "become increasingly fluent with whole numbers and the four operations, including number facts and the concept of place value". It adds that they should "develop efficient written and mental methods and perform calculations accurately with increasingly large whole numbers." Year 3 is where the written part of that sentence starts.' },
        { kind: 'table', mt: true, caption: 'Year 3 maths in the national curriculum for England (statutory requirements, grouped and shortened)', head: ['Area', 'What a Year 3 child is taught'], rows: [
          ['Place value', 'Read, write, compare and order numbers to 1000; the value of each digit in a three-digit number; 10 or 100 more or less; count in 4s, 8s, 50s and 100s'],
          ['Adding and subtracting', 'Mental sums of a three-digit number and ones, tens or hundreds; columnar addition and subtraction with up to three digits; estimating and checking with the inverse'],
          ['Multiplying and dividing', 'The 3, 4 and 8 tables; two-digit times one-digit, moving from mental to written methods; scaling and correspondence problems'],
          ['Fractions', 'Counting in tenths; fractions of a set; fractions as numbers; equivalent fractions with small denominators shown in diagrams; adding and subtracting with the same denominator within one whole'],
          ['Measurement', 'Lengths in m, cm and mm, mass and capacity; perimeter of simple shapes; change in pounds and pence; analogue clocks with Roman numerals I to XII; 12-hour and 24-hour clocks; days in each month and leap years'],
          ['Geometry', 'Draw 2-D shapes and make 3-D ones; angles as a turn; right angles, half-turns and full turns; horizontal, vertical, perpendicular and parallel lines'],
          ['Statistics', 'Bar charts, pictograms and tables; one-step and two-step questions such as how many more or fewer']
        ] },
        { kind: 'p', html: 'Two details in the non-statutory notes show the thinking behind the year. Place value is taught flexibly: the guidance writes 146 both as 100 + 40 and 6 and as 130 + 16, because a child who can see 146 as thirteen tens and six ones is ready for exchanging in column subtraction. And money is kept simple: pupils record pounds and pence separately, since decimal money waits until Year 4.' },
        { kind: 'source', html: 'From the Year 3 programme of study and the lower Key Stage 2 introduction in the DfE\'s <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">mathematics programmes of study: key stages 1 and 2</a>, read on 31 October 2026.' }
      ]
    },
    {
      id: 'bridge', tint: 'deep', eyebrow: 'Year 2 to Year 4',
      h2: 'How is Year 3 maths different from Year 2?',
      lede: 'Every strand takes one step up: one more digit, three more tables, written methods instead of objects, and fractions that are counted rather than only shaded. We put the three years side by side from the programme of study.',
      body: [
        { kind: 'table', caption: 'One strand at a time, Year 2 to Year 4 (statements from the DfE programme of study; the side-by-side layout is ours)', head: ['Strand', 'Year 2', 'Year 3', 'Year 4'], rows: [
          ['Place value', 'Two-digit numbers, to at least 100', 'Three-digit numbers, to 1000', 'Four-digit numbers and beyond 1000'],
          ['Times tables', '2, 5 and 10', '3, 4 and 8', 'All tables up to 12 × 12'],
          ['Written methods', 'Objects, pictures and mental methods', 'Column addition and subtraction with up to three digits', 'Columnar methods with up to 4 digits; short multiplication'],
          ['Fractions', 'One third, one quarter, two quarters, three quarters', 'Tenths; unit and non-unit fractions as numbers', 'Hundredths; decimal equivalents'],
          ['Time', 'To five minutes', 'To the nearest minute; Roman numerals on the clock', 'Converting between analogue and digital 12- and 24-hour clocks']
        ] },
        { kind: 'p', html: 'Reading down the Year 3 column, the pattern is that Year 3 does the hard conceptual work while the numbers are still small. Exchanging a ten for ten ones is the same idea whether the number has three digits or six, and Year 3 is where a child either understands it or learns to copy the steps. The same is true of fractions: the Year 3 notes ask children to place fractions on a number line and to "go beyond the [0, 1] interval", which is the first sign that a fraction is a number in its own right.' },
        { kind: 'two', mt: true,
          leftH3: 'If Year 2 left gaps',
          left: [
            'The end of Year 2 expects number bonds to 20. A child still counting on for 8 + 7 will find column addition slow, because every column is a bond.',
            'Our <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2 maths tuition page</a> describes how we rebuild from earlier years without making a child feel behind.'
          ],
          rightH3: 'Looking ahead to Year 4',
          right: [
            'Year 4 finishes the tables to 12 × 12 and pushes column methods to four digits. Everything Year 4 adds rests on Year 3 columns and Year 3 tables.',
            'For the June check at the end of Year 4, see our <a class="ag-inline-link" href="/year-4-multiplication-tables-check-explained">multiplication tables check explainer</a>.'
          ] },
        { kind: 'source', html: 'Year 2, Year 3 and Year 4 statutory statements from the DfE <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">primary mathematics programme of study</a>.' }
      ]
    },
    {
      id: 'columns', tint: '', eyebrow: 'Column methods',
      h2: 'How is column addition and subtraction taught in Year 3?',
      lede: 'Year 3 is the year of the first formal written method. The statutory wording is to "add and subtract numbers with up to three digits, using formal written methods of columnar addition and subtraction", and the checking habit comes with it.',
      body: [
        { kind: 'p', html: 'The programme of study pairs the method with a safeguard. Children are to "estimate the answer to a calculation and use inverse operations to check answers", so a subtraction is checked by adding back, and every answer is compared with a rough guess first. The DfE\'s Mathematics Appendix 1 shows examples of the column layouts, while saying the examples are not an exhaustive list and do not set out a fixed progression, which is why your child\'s school may lay the columns out a little differently from how you learned them.' },
        { kind: 'two', mt: true,
          leftH3: 'Where Year 3 columns go wrong',
          left: [
            '<strong>Smaller from larger.</strong> In 452 minus 178 a child writes 8 minus 2 in the ones column instead of exchanging. The answer comes out too large and they cannot see why.',
            '<strong>Exchanging across a zero.</strong> 503 minus 178 needs a hundred broken into tens before a ten can be broken into ones. This two-step exchange is the single most common Year 3 stumble we see.'
          ],
          rightH3: 'What fixes it',
          right: [
            '<strong>Place value before procedure.</strong> If 503 can be read as 4 hundreds, 9 tens and 13 ones, the exchange is just a renaming, not a trick.',
            '<strong>Estimate first, add back after.</strong> 500 minus 180 is about 320, so an answer of 435 is wrong before it is checked. The curriculum asks for both habits for this reason.'
          ] },
        { kind: 'p', mt: true, html: 'Mental methods do not stop when columns arrive. The statutory list keeps mental addition and subtraction of "a three-digit number and ones", "a three-digit number and tens" and "a three-digit number and hundreds" in the same year. We teach a child to ask first whether a sum needs a column at all: 347 + 200 does not, and 347 + 286 probably does.' },
        { kind: 'source', html: 'Statutory wording from the Year 3 addition and subtraction requirements; layouts in Mathematics Appendix 1 of the same DfE document.' }
      ]
    },
    {
      id: 'tables', tint: 'tint', eyebrow: 'The 3, 4 and 8 tables',
      h2: 'Which times tables should a Year 3 child know?',
      lede: 'The 3, 4 and 8 times tables, with their division facts, on top of the 2, 5 and 10 from Year 2. The requirement is to "recall and use multiplication and division facts for the 3, 4 and 8 multiplication tables".',
      body: [
        { kind: 'p', html: 'The 4 and 8 tables arrive together for a reason the guidance states directly: "Through doubling, they connect the 2, 4 and 8 multiplication tables." Double a 2-table fact and you have a 4-table fact; double again and you have an 8-table fact. The 3 table stands apart and usually takes the longest. The notes also show children using the order of multiplication to make a sum easier, with the example 4 × 12 × 5 rearranged as 4 × 5 × 12, which is 20 × 12, which is 240.' },
        { kind: 'two', mt: true,
          leftH3: 'Why this matters for Year 4',
          left: [
            'The curriculum says that by the end of Year 4 pupils "should have memorised their multiplication tables up to and including the 12 multiplication table". Year 3 supplies three of the tables that check uses.',
            'For a child in Year 3 during 2026 to 2027, the DfE lists the check "within the 2-week period from Monday 5 June 2028", when they will be in Year 4.'
          ],
          rightH3: 'Why it matters beyond the check',
          right: [
            'The Curriculum and Assessment Review, reporting in November 2025, wrote: "We believe the priority at Key Stage 2 should be ensuring all pupils build competence in multiplicative reasoning and problem-solving."',
            'It described that reasoning as including "multiplication and division scaling, repeated addition, arrays, and whole number rates", which is the Year 3 multiplication strand almost word for word.'
          ] },
        { kind: 'p', mt: true, html: 'The review also led the government to plan a revised national curriculum, to be published in 2027 for first teaching in 2028. For the current school year the DfE says assessment arrangements "will remain unchanged", so a Year 3 child is taught today\'s programme of study. We will update this page when the revised one is published.' },
        { kind: 'source', html: 'Sources: DfE <a class="ag-inline-link" href="https://www.gov.uk/guidance/primary-assessments-future-dates" rel="noopener" target="_blank">Primary assessments: future dates</a> (updated 12 October 2026) and the <a class="ag-inline-link" href="https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report" rel="noopener" target="_blank">Curriculum and Assessment Review final report</a> and government response, November 2025.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'Worked examples',
      h2: 'Four Year 3 problems we wrote, solved step by step',
      lede: 'Each one uses statutory Year 3 content. The questions are ours; none comes from a school scheme or a test.',
      body: [
        { kind: 'two',
          leftH3: '1. Column subtraction across a zero',
          left: [
            '<strong>Question (ours).</strong> 503 − 178.',
            '<strong>Ones first.</strong> 3 take away 8 will not go, and the tens column holds 0, so there is no ten to borrow yet.',
            '<strong>Rename twice.</strong> Change 5 hundreds into 4 hundreds and 10 tens, then change one of those tens into 10 ones. The top number now reads 4 hundreds, 9 tens and 13 ones.',
            '<strong>Subtract.</strong> 13 − 8 = 5, 9 − 7 = 2, 4 − 1 = 3, giving 325. <strong>Check with the inverse:</strong> 325 + 178 = 503.'
          ],
          rightH3: '2. A fraction of a set',
          right: [
            '<strong>Question (ours).</strong> Mia collected 28 conkers and gave away three quarters of them. How many did she give away?',
            '<strong>One quarter first.</strong> Quarters mean 4 equal groups, and 28 ÷ 4 = 7, a fact from the 4 table.',
            '<strong>Three of them.</strong> 3 × 7 = 21.',
            '<strong>Answer.</strong> 21 conkers, leaving 7. A fraction of a set is a division and then a multiplication, which is why Year 3 fractions and the 4 table are taught in the same year.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. How many outfits?',
          left: [
            '<strong>Question (ours).</strong> A doll has 4 T-shirts and 3 pairs of shorts. How many different outfits can it wear?',
            '<strong>List one row.</strong> The first T-shirt goes with each of the 3 pairs of shorts: 3 outfits.',
            '<strong>Repeat the row.</strong> Each of the 4 T-shirts gives 3 outfits, so the list has 4 rows of 3.',
            '<strong>Answer.</strong> 4 × 3 = 12 outfits. The curriculum calls this a correspondence problem, in which some objects are connected to others, and it is a child\'s first look at multiplication as counting combinations.'
          ],
          rightH3: '4. How long did it last?',
          right: [
            '<strong>Question (ours).</strong> A film starts at 2:45 pm and ends at 4:10 pm. How long is it?',
            '<strong>To the next hour.</strong> 2:45 to 3:00 is 15 minutes.',
            '<strong>Whole hours.</strong> 3:00 to 4:00 is 1 hour.',
            '<strong>The rest.</strong> 4:00 to 4:10 is 10 minutes. Adding the pieces gives 1 hour and 25 minutes. Counting on in jumps is safer than subtracting times, because there are 60 minutes in an hour, not 100.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, answers below).</strong> (1) What is 100 less than 692, and 10 more? (2) 8 × 6. (3) 264 + 359 in columns. (4) Two sevenths plus four sevenths. (5) The perimeter of a rectangle 9 cm long and 4 cm wide. (6) Which number does XI stand for on a clock? (7) 96 ÷ 8. <strong>Answers:</strong> (1) 592 and 702; (2) 48, which is double 8 × 3; (3) 623; (4) six sevenths; (5) 26 cm; (6) 11; (7) 12, because 8 × 12 = 96.' }
      ]
    },
    {
      id: 'tutoring', tint: 'tint', eyebrow: 'Our tutoring',
      h2: 'How does a Year 3 maths tutor help, week by week?',
      lede: 'By making place value solid before the columns, the doubling links clear before the 8 table, and fractions visible before they are written. The plan below is ours, adjusted after the first class.',
      body: [
        { kind: 'ol', items: [
          '<strong>Free first class.</strong> The tutor asks your child to read and build three-digit numbers, recall a few 2, 5 and 10 facts, and explain one subtraction aloud.',
          '<strong>Place value with objects on screen.</strong> Hundreds, tens and ones drawn and regrouped on the shared whiteboard, so 146 really can be 130 + 16.',
          '<strong>Columns, slowly, with estimates.</strong> Addition first, then subtraction, then exchanging across a zero, always with a rough answer written beside it.',
          '<strong>Tables as a family.</strong> 2, then 4 by doubling, then 8 by doubling again; the 3 table practised separately with its own patterns.',
          '<strong>Fractions on a line.</strong> Tenths counted forwards and back, unit fractions compared, and simple sums of sevenths or fifths that stay within one whole.',
          '<strong>Time and measure in real contexts.</strong> Clock problems, change from a purchase and the perimeter of a drawn shape, because these are where Year 3 maths is used outside school.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group class or 1-on-1?',
          left: [
            'A group of 15 to 20 seven and eight year olds suits a child who is broadly on track and enjoys answering alongside others.',
            '1-on-1 suits a child who is anxious about maths, who missed parts of Year 2, or who is racing ahead and needs harder problems.'
          ],
          rightH3: 'What we will not do',
          right: [
            'Set hours of worksheets for a seven year old, or promise a score in a check that is two years away.',
            'Claim any link with your child\'s school, a local authority or the DfE. We are an independent online school.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four milestones across Year 3',
    lede: 'We look for each one in a short task during class. Nothing here is a formal assessment.',
    table: { caption: 'What a Year 3 child can show, term by term (our milestones, set against the programme of study)', head: ['Milestone', 'Usual time', 'What the child can do'], rows: [
      ['1. Three-digit numbers', 'Autumn term', 'Reads, writes and partitions numbers to 1000 in more than one way'],
      ['2. Columns that work', 'Autumn to spring', 'Adds and subtracts three-digit numbers in columns, including across a zero, and checks with the inverse'],
      ['3. Three new tables', 'Spring term', 'Recalls the 3, 4 and 8 tables and uses them to divide'],
      ['4. Fractions and time', 'Summer term', 'Finds fractions of a set, adds same-denominator fractions and works out durations on a clock']
    ] },
    left: { h3: 'Milestone one carries the rest', ps: [
      'Column subtraction is place value written down. When partitioning is secure, exchanging stops being frightening.',
      'Children who enjoy number puzzles might like our <a class="ag-inline-link" href="/primary-maths-challenge-practice">Primary Maths Challenge page</a> later in primary school.'
    ] },
    right: { h3: 'Milestone three leads to Year 4', ps: [
      'The 3, 4 and 8 tables are three of the eleven tables the June check draws on.',
      'We pause in school holidays if you would like a break.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for seven and eight year olds',
    lede: 'Core maths for lower Key Stage 2, faster number facts, and some making and thinking for children who like to build.',
    bands: [
      { num: 'I', h3: 'Year 3 maths', sub: 'Core curriculum', courses: [
        { code: 'UK / Y31 / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths', blurb: 'Year 3 place value, columns and fractions.' },
        { code: 'UK / Y31 / 02', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'For a child still securing Year 2 number.' },
        { code: 'UK / Y31 / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and Readiness', blurb: 'Pattern and shape puzzles for ages 6 to 9.' }
      ] },
      { num: 'II', h3: 'Number facts', sub: 'Quicker and surer', courses: [
        { code: 'UK / Y32 / 01', slug: 'mental-maths-mastery-kids', title: 'Mental Maths for Kids', blurb: 'Tables and bonds held in memory.' },
        { code: 'UK / Y32 / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Beads that make place value visible.' },
        { code: 'UK / Y32 / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Calculation patterns, later in primary.' }
      ] },
      { num: 'III', h3: 'Think and build', sub: 'Alongside maths', courses: [
        { code: 'UK / Y33 / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Sorting, ordering and if-then puzzles.' },
        { code: 'UK / Y33 / 02', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'First games, with angles and counting.' },
        { code: 'UK / Y33 / 03', slug: 'ks2-sats-maths-course', title: 'KS2 SATs Maths', blurb: 'For later: the Year 6 papers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How Year 3 lessons are run',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our teachers work from India and every slot we offer is set in UK time.',
    slots: [
      { time: 'After school', l: 'Short and lively for seven year olds.' },
      { time: 'Early evening', l: 'Once clubs and tea are done.' },
      { time: 'Saturday or Sunday morning', l: 'Unhurried time for longer problems.' }
    ],
    cells: [
      { h3: 'Build it, then write it', p: 'Numbers drawn as hundreds, tens and ones before any column is set out.' },
      { h3: 'Doubling links', p: 'The 4 and 8 tables grown from the 2 table, not learned as strangers.' },
      { h3: 'A guess before each answer', p: 'Estimating is part of every calculation, as the curriculum asks.' },
      { h3: 'Say it out loud', p: 'Children explain one step each lesson, which builds the vocabulary Year 3 expects.' },
      { h3: 'No charge for class one', p: 'A full live class to meet the tutor and see the approach.' },
      { h3: 'Your choice of format', p: 'A Year 3 group of 15 to 20, or one tutor for one child.' }
    ]
  },

  projectsH2: 'Some projects our students made',
  projectsLede: 'Ordinary class work rather than marked assessments. You can browse more in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote about us on Google, unedited.',

  fees: {
    h2: 'What Year 3 maths tutoring costs',
    lede: 'Your first class costs nothing. After that there is a single monthly fee, lower for a group place and higher for 1-on-1, taken only once the course and a weekly slot are agreed. You can stop at any time.',
    free: ['A live Year 3 class', 'Place value and tables checked', 'Booked with just a phone number'],
    group: ['15 to 20 Year 3 children', 'One tutor all year', 'Ten-minute practice tasks', 'A note to parents each term'],
    one: ['One tutor, one child', 'Paced to your child', 'Ideal for rebuilding Year 2 gaps']
  },

  faq: {
    eyebrow: 'Year 3 questions',
    h2: 'Questions parents ask about Year 3 maths',
    items: [
      { q: 'What should my child know by the end of Year 3 in maths?', a: 'The programme of study expects numbers to 1000, column addition and subtraction with up to three digits, the 3, 4 and 8 times tables, tenths, simple fractions of amounts, perimeter, and telling the time to the minute, including Roman numerals on a clock face.' },
      { q: 'Which times tables are taught in Year 3?', a: 'The 3, 4 and 8 tables, with their division facts. They build on the 2, 5 and 10 tables from Year 2, and the guidance links the 2, 4 and 8 tables through doubling.' },
      { q: 'Is there a test at the end of Year 3?', a: 'No. Year 3 has no national test. Schools assess children in their own way, and the next national check is the multiplication tables check in June of Year 4.' },
      { q: 'When will my Year 3 child take the multiplication tables check?', a: 'For a child in Year 3 during 2026 to 2027, the DfE lists the check in the two weeks from Monday 5 June 2028, when they will be in Year 4.' },
      { q: 'Why is column subtraction so hard in Year 3?', a: 'Usually because of exchanging, especially across a zero, as in 503 take away 178. Children who can rename 503 as 4 hundreds, 9 tens and 13 ones find it straightforward; children who learned only the steps tend to get lost.' },
      { q: 'What fractions do Year 3 children learn?', a: 'Tenths, unit fractions such as one fifth, non-unit fractions such as three fifths, equivalent fractions shown with diagrams, and adding or subtracting fractions with the same denominator as long as the answer stays within one whole.' },
      { q: 'My child is behind in Year 3 maths. What should we do first?', a: 'Start with place value and the Year 2 number bonds and tables. Most Year 3 difficulties trace back to these, and fixing them makes columns and fractions much easier.' },
      { q: 'How long should Year 3 maths practice take at home?', a: 'A few minutes most days is enough at seven or eight. Short, regular practice of tables and a single column sum does more than one long session at the weekend.' },
      { q: 'When are your Year 3 classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are given in UK time.' },
      { q: 'Are you linked to my child\'s school or the DfE?', a: 'No. Modern Age Coders runs on its own, teaching from the published national curriculum with no tie to any school, local authority or government body.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More primary maths',
    h2: 'Other pages for primary families',
    lede: 'What comes before Year 3, around it and after it.',
    items: [
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'Years 3 to 6 taken together.' },
      { href: '/year-4-multiplication-tables-check-explained', label: 'Year 4 tables check', p: 'The June check that follows Year 3.' },
      { href: '/multiplication-tables-check-year-4-practice', label: 'Tables check practice', p: 'How recall is practised for it.' },
      { href: '/online-maths-tuition-for-kids-in-uk', label: 'Maths tuition for kids', p: 'Our wider UK maths offer for children.' },
      { href: '/ks2-coding-lessons-online', label: 'KS2 coding lessons', p: 'Coding for the same age group.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The UK hub for all our pages.' }
    ]
  },

  start: {
    h2: 'Book a free Year 3 maths class',
    lede: 'Share a phone number and we will ring at a UK time that works for you. In the class the tutor looks at place value, a column sum and a few times tables, then tells you what to work on first.',
    readFirst: 'Prefer to read before booking? The <a class="ag-inline-link" href="/courses/elementary-mathematics-complete-masterclass">Elementary Maths course</a> sets out its full syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes the method behind every class.',
    note: 'Messaging us on WhatsApp is usually fastest and costs nothing from a UK mobile. Our team in India replies from a +91 number.',
    formNote: 'Nothing to pay and nothing to sign. We reply once, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Primary maths', links: [
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' },
        { href: '/year-4-multiplication-tables-check-explained', label: 'Year 4 tables check' },
        { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs papers' },
        { href: '/11-plus-maths-tuition', label: '11+ maths' }
      ] },
      { h4: 'Keep exploring', links: [
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' },
        { href: '/ks2-coding-lessons-online', label: 'KS2 coding' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Year 3 maths, live online in UK time'
  },

  personalityCss: `
.ag-root.ag-gab .ag-hero h1 { letter-spacing: -0.01em; font-weight: 680; }
.ag-root.ag-gab .ag-capsule { border-left-width: 4px; border-radius: 10px; }
.ag-root.ag-gab .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-gab .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-gab .ag-table th:first-child { width: 20%; }
.ag-root.ag-gab .ag-steps li { margin-bottom: 10px; }
`,

  dossier: {
    curriculumAuthority: 'England, national curriculum mathematics, lower key stage 2, Year 3 programme of study (DFE-00180-2013): lower KS2 aim of fluency with whole numbers, the four operations, number facts and place value; Year 3 statutory statements (three-digit place value, columnar addition and subtraction with up to three digits, estimating and checking with inverse operations, the 3, 4 and 8 tables, counting in tenths, adding fractions with the same denominator within one whole, perimeter, Roman numerals I to XII on clocks, right angles and turns, bar charts and pictograms); notes on partitioning 146 two ways, doubling to connect the 2, 4 and 8 tables, 4 × 12 × 5 rearranged, correspondence problems, and money recorded separately until Year 4. Year 2 and Year 4 statements for the progression table. DfE Primary assessments future dates: MTC from Monday 5 June 2028; 2026 to 2027 arrangements unchanged. Curriculum and Assessment Review final report: KS2 priority on multiplicative reasoning; government response: revised curriculum published 2027 for first teaching 2028.',
    localProject: 'Columns begin, fractions become numbers. A Year 3 door built on the programme of study: the lower KS2 aim, a seven-row table of Year 3 statutory content, and a Year 2 to Year 4 strand table assembled from the statutory statements. A section on the first formal written method (columnar addition and subtraction with estimating and inverse checks, and exchanging across a zero), a section on the 3, 4 and 8 tables as a doubling family leading to the tables check in June 2028, with the Curriculum and Assessment Review on multiplicative reasoning. Four original worked examples (503 minus 178, three quarters of 28 conkers, 4 T-shirts and 3 shorts, a film from 2:45 pm to 4:10 pm) and an original seven-item practice set. Lesson family: a primary year door.',
    requiredMentions: [
      'become increasingly fluent with whole numbers and the four operations, including number facts and the concept of place value',
      'add and subtract numbers with up to three digits, using formal written methods of columnar addition and subtraction',
      'estimate the answer to a calculation and use inverse operations to check answers',
      'recall and use multiplication and division facts for the 3, 4 and 8 multiplication tables',
      'Through doubling, they connect the 2, 4 and 8 multiplication tables.',
      'within the 2-week period from Monday 5 June 2028',
      'We believe the priority at Key Stage 2 should be ensuring all pupils build competence in multiplicative reasoning and problem-solving.',
      'multiplication and division scaling, repeated addition, arrays, and whole number rates'
    ],
    sources: [
      { claim: 'DfE, Mathematics programmes of study: key stages 1 and 2: lower KS2 aims, Year 3 statutory requirements and notes, Year 2 and Year 4 statements, Appendix 1.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study' },
      { claim: 'DfE, Primary assessments: future dates (updated 12 October 2026): multiplication tables check from Monday 5 June 2028; arrangements for 2026 to 2027 unchanged.', url: 'https://www.gov.uk/guidance/primary-assessments-future-dates' },
      { claim: 'Curriculum and Assessment Review Final Report (November 2025): KS2 priority on multiplicative reasoning and its definition.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report' },
      { claim: 'Government response to the Curriculum and Assessment Review: revised national curriculum published in 2027 for first teaching in 2028.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report-government-response' }
    ],
    rejectedClaims: [
      'KS2 test dates for a child now in Year 3 (summer 2030): not yet published by the DfE, whose future dates page runs only to 2028 to 2029, so no date is given.',
      'Any national figure for Year 3 attainment: there is no Year 3 national assessment, so none is quoted.',
      'The content of the revised curriculum due in 2027: not yet published, so the page describes only the current programme of study.',
      'Any promise about a tables check score: declined.'
    ]
  }
};
