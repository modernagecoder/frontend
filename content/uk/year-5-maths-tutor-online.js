'use strict';
// Year 5 maths tutor online (ag- maths door, England; UK and US exams cluster, row UK011).
// Sources, read raw on 31 October 2026 (assets.publishing.service.gov.uk PDFs and the gov.uk content API via curl;
// PDF text through pypdf and macOS PDFKit; raw copies in keyword-research-2026-09/uk-us-gap/src/year-5-maths-tutor-online/):
//  - DfE, Mathematics programmes of study: key stages 1 and 2 (national curriculum in England). Upper key stage 2:
//    "The principal focus of mathematics teaching in upper key stage 2 is to ensure that pupils extend their
//    understanding of the number system and place value to include larger integers."; "With this foundation in
//    arithmetic, pupils are introduced to the language of algebra as a means for solving a variety of problems.";
//    "By the end of year 6, pupils should be fluent in written methods for all four operations, including long
//    multiplication and division". Year 5 statutory: "read, write, order and compare numbers to at least 1 000 000";
//    "read Roman numerals to 1000 (M)"; "establish whether a number up to 100 is prime and recall prime numbers up to
//    19"; "multiply numbers up to 4 digits by a one- or two-digit number using a formal written method, including long
//    multiplication for two-digit numbers"; "divide numbers up to 4 digits by a one-digit number using the formal
//    written method of short division and interpret remainders appropriately for the context"; "recognise and use
//    square numbers and cube numbers"; "recognise and use thousandths"; "recognise the per cent symbol (%) and
//    understand that per cent relates to 'number of parts per hundred'"; "understand and use approximate
//    equivalences between metric units and common imperial units such as inches, pounds and pints"; "know angles are
//    measured in degrees: estimate and compare acute, obtuse and reflex angles"; "distinguish between regular and
//    irregular polygons"; "complete, read and interpret information in tables, including timetables"; notes "98 ÷ 4 =
//    24 r 2 = 24½ = 24.5 ≈ 25" (restated as words on the page), "4 + 2b = 20 for a rectangle", "Pupils should be
//    taught throughout that percentages, decimals and fractions are different ways of expressing proportions."
//  - DfE, Primary assessments: future dates (updated 12 October 2026): KS2 tests "Monday 10 May to Thursday 13 May
//    2027" and "Monday 8 May to Thursday 11 May 2028"; multiplication tables check "within the 2-week period from
//    Monday 7 June 2027"; "Assessment arrangements for the academic year 2026 to 2027 will remain unchanged."
//  - DfE, School Admissions Code 2021 (PDF): "It is for the admission authority to decide the content of the test";
//    "Tests for all forms of selection must be clear, objective, and give an accurate reflection of the child's ability
//    or aptitude"; "take all reasonable steps to inform parents of the outcome of selection tests before the closing
//    date for secondary applications on 31 October"; "while making clear that this does not equate to a guarantee of a
//    selective place"; "Only designated grammar schools are permitted to select their entire intake on the basis of
//    high academic ability" (footnote markers removed).
// Rejected: kent.gov.uk returned 403 (Kent Test dates not used).
// Our own: the Year 5 to Year 6 timeline arithmetic (a Year 5 child in 2026 to 2027 sits KS2 tests in May 2028 and
// applies for secondary school by 31 October 2027), the "big numbers, real fractions" framing, four worked examples
// and the practice set. Spine: Year 5 is where the numbers get big and the fractions get real, and in selective areas
// it is also the run-up to an 11+ test whose content each admission authority decides. Lesson family: a primary year
// door built on the programme of study, distinct from the 11+ and KS2 SATs pages.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'YEAR 5 MATHS', blurb: 'A million, Roman numerals to M, primes, long multiplication and thousandths. The year before SATs and, in some areas, the 11+.' },
  slug: 'year-5-maths-tutor-online',
  code: 'gad',
  accent: '#435A40',
  accentRationale: 'Year 5 maths: a muted olive green (#435A40, 7.14:1 on #FBF8F2 and 6.14:1 on the deepest paper tint), earthier than the GCSE greens and clearly apart from the KS1 violet',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Year 5 maths tutor online',
  title: 'Year 5 Maths Tutor Online | Curriculum, 11+ Run-Up, Live Classes',
  description: 'A Year 5 maths tutor online: what the national curriculum adds in Year 5, how it leads to the 2028 KS2 tests and an 11+ test, and our live classes in UK time.',
  ogDescription: 'Year 5 maths brings numbers to a million, primes, long multiplication, thousandths and percentages. What changes, and how to keep up.',
  twitterDescription: 'Year 5 maths: the statutory content, the timeline to KS2 tests in May 2028 and 11+ tests, worked examples and live classes.',
  pageName: 'Year 5 Maths Tutor Online',
  webPageDescription: 'Live online maths tutoring for Year 5 children in England, built from the national curriculum programme of study, the DfE\'s primary assessment dates and the School Admissions Code.',
  courseDescription: 'Live online maths for Year 5: place value to a million, primes and factors, long multiplication, short division, fractions, decimals and percentages, measures, angles and data.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Year 5 maths tutor',
  navLinks: [
    { href: '#content', label: 'Year 5 content' },
    { href: '#timeline', label: 'Year 5 to Year 6' },
    { href: '#elevenplus', label: 'The 11+ year' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Year 5 maths &middot; ages 9 to 10',
  h1: 'Year 5 maths tutor online',
  lede: 'Year 5 is the year primary maths changes gear. Numbers grow to a million, children meet prime numbers and cube numbers, long multiplication arrives, and fractions start to behave like numbers that can be added, compared and turned into decimals and percentages. It is also a year of quiet deadlines. A child in Year 5 now will sit the KS2 tests in May 2028, and in areas with grammar schools, an 11+ test will come round before the end of October 2027. This page sets out what the national curriculum adds in Year 5, how the year connects to what follows, what the School Admissions Code says about 11+ tests, and how we tutor Year 5 maths, with four worked examples of our own.',
  secondaryCta: { href: '#content', label: 'What Year 5 covers' },
  wa: 'Hello Modern Age Coders, I would like a free first class with a Year 5 maths tutor.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the national curriculum and DfE assessment dates',
  spec: [
    ['Year group', 'Year 5, ages 9 to 10'],
    ['Stage', 'Upper Key Stage 2'],
    ['New this year', 'Millions, primes, long multiplication'],
    ['KS2 tests', 'May 2028 for this Year 5'],
    ['11+ areas', 'Results before 31 October'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Year 5 maths is the first year of upper Key Stage 2 in the national curriculum for England, taught to children aged 9 to 10. It extends place value to at least 1 000 000 and adds prime numbers, square and cube numbers, long multiplication by a two-digit number, thousandths, and percentages as "number of parts per hundred". Children in Year 5 in 2026 to 2027 sit the KS2 tests in May 2028. Modern Age Coders offers Year 5 tutoring over live video, either 1-on-1 or as one of 15 to 20 children, using its 11 Plus Maths Prep course where a selective test is ahead and its Elementary Maths course otherwise. A trial class costs nothing. We have no tie to any school or admission authority.',

  picks: {
    eyebrow: 'Courses for Year 5',
    h2: 'Three courses for a Year 5 child',
    lede: 'Which one depends on what comes next for your family: an 11+ test, the Year 6 SATs, or simply a strong finish to primary school.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'Y5 / 01', title: '11 Plus Maths Prep', note: 'For Year 5 children in selective areas: the Year 5 and 6 content with reasoning built in, a year before the test.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'Y5 / 02', title: 'Elementary Maths', note: 'Its upper level covers the Year 5 ground at a steady pace for children with no test ahead.' },
      { course: 'ks2-sats-maths-course', code: 'Y5 / 03', title: 'KS2 SATs Maths', note: 'Arithmetic, reasoning and times tables, for families thinking ahead to May 2028.' }
    ]
  },

  sections: [
    {
      id: 'content', tint: 'tint', eyebrow: 'Year 5 content',
      h2: 'What do children learn in Year 5 maths?',
      lede: 'The Department for Education\'s programme of study lists what must be taught in Year 5. These are the statutory requirements, grouped by area and summarised from the document.',
      body: [
        { kind: 'p', html: 'The curriculum describes the aim of upper Key Stage 2 like this: "The principal focus of mathematics teaching in upper key stage 2 is to ensure that pupils extend their understanding of the number system and place value to include larger integers." It also signals a new direction: "With this foundation in arithmetic, pupils are introduced to the language of algebra as a means for solving a variety of problems." The table shows what that means in Year 5 specifically.' },
        { kind: 'table', mt: true, caption: 'Year 5 maths in the national curriculum for England (statutory content, summarised)', head: ['Area', 'What Year 5 adds'], rows: [
          ['Place value', 'Numbers to at least 1 000 000; rounding to the nearest 10, 100, 1000, 10 000 and 100 000; negative numbers in context; Roman numerals to 1000 (M)'],
          ['Properties of number', 'Factors, factor pairs and common factors; prime numbers, prime factors and composite numbers; primes up to 19 recalled; square and cube numbers'],
          ['Calculation', 'Column addition and subtraction with more than 4 digits; long multiplication for two-digit numbers; short division with remainders interpreted in context'],
          ['Fractions', 'Compare and order; equivalent fractions; mixed numbers and improper fractions; add and subtract with related denominators; multiply by whole numbers'],
          ['Decimals and percentages', 'Thousandths; numbers with up to three decimal places; per cent as "number of parts per hundred"; percentage equivalents of halves, quarters, fifths and tenths'],
          ['Measurement', 'Metric conversions; approximate imperial equivalents such as inches, pounds and pints; perimeter of composite shapes; area of rectangles; estimating volume'],
          ['Geometry', 'Acute, obtuse and reflex angles, measured with a protractor; angles at a point (360°) and on a line (180°); regular and irregular polygons; reflection and translation'],
          ['Statistics', 'Problems using line graphs; reading and interpreting tables, including timetables']
        ] },
        { kind: 'p', html: 'Two notes in the programme of study explain why Year 5 can feel hard. The first is about division: the curriculum wants children to express "non-integer answers to division" in more than one way, and gives an example in which 98 divided by 4 is written as 24 remainder 2, as 24 and a half, as 24.5, and rounded to 25. The second is about connections: "Pupils should be taught throughout that percentages, decimals and fractions are different ways of expressing proportions." A Year 5 child is no longer learning separate topics. They are learning that one quantity can wear several notations.' },
        { kind: 'source', html: 'Taken from the Year 5 section of the DfE\'s <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">primary mathematics curriculum</a>, including its non-statutory notes, checked on 31 October 2026.' }
      ]
    },
    {
      id: 'timeline', tint: 'deep', eyebrow: 'Year 5 to Year 6',
      h2: 'How does Year 5 maths lead into Year 6 and the KS2 SATs?',
      lede: 'Year 5 has no national test of its own, but it sits between two that do. The dates below come from the Department for Education\'s published primary assessment calendar.',
      body: [
        { kind: 'table', caption: 'Where Year 5 sits for a child in Year 5 during 2026 to 2027 (dates from DfE, Primary assessments: future dates; the year mapping is ours)', head: ['When', 'What', 'Who sits it'], rows: [
          ['Last school year', 'Multiplication tables check, held in June of Year 4', 'This Year 5 group, already done'],
          ['May 2027', 'KS2 tests, Monday 10 May to Thursday 13 May 2027', 'The current Year 6, a year ahead'],
          ['By 31 October 2027', 'Secondary school applications close', 'This Year 5 group, early in Year 6'],
          ['May 2028', 'KS2 tests, Monday 8 May to Thursday 11 May 2028', 'This Year 5 group, in Year 6']
        ] },
        { kind: 'p', html: 'Year 5 is therefore the last full school year before every deadline. The Year 6 curriculum goes further (ratio and proportion, algebra, long division, and multiplying and dividing fractions), and the curriculum\'s stated target is that "By the end of year 6, pupils should be fluent in written methods for all four operations, including long multiplication and division". Long multiplication for two-digit numbers starts in Year 5. A child who leaves Year 5 secure in it, and in short division with remainders, starts Year 6 with the hardest written methods half learned.' },
        { kind: 'two', mt: true,
          leftH3: 'Times tables still matter',
          left: [
            'The Year 4 multiplication tables check is the last national check of times tables. Year 5 assumes them: the curriculum says pupils "apply all the multiplication tables and related division facts frequently, commit them to memory and use them confidently".',
            'Gaps here show up immediately in long multiplication, factors and fractions. Our <a class="ag-inline-link" href="/multiplication-tables-check-year-4-practice">Year 4 times tables page</a> covers the check.'
          ],
          rightH3: 'Assessment this year',
          right: [
            'For this school year the DfE has confirmed that nothing changes, although arrangements from 2027 to 2028 onwards are being reconsidered after the Curriculum and Assessment Review.',
            'For the Year 6 papers themselves, see our <a class="ag-inline-link" href="/ks2-sats-maths-papers-explained">KS2 SATs maths papers page</a>.'
          ] },
        { kind: 'source', html: 'Source: Department for Education, <a class="ag-inline-link" href="https://www.gov.uk/guidance/primary-assessments-future-dates" rel="noopener" target="_blank">Primary assessments: future dates</a>, updated 12 October 2026.' }
      ]
    },
    {
      id: 'elevenplus', tint: '', eyebrow: 'The 11+ year',
      h2: 'Is Year 5 the right time to prepare for the 11+?',
      lede: 'For families in grammar school areas, usually yes, because the test comes early in Year 6. What the test contains is decided locally, so the honest preparation is the Year 5 and 6 curriculum done well, plus familiarity with the local format.',
      body: [
        { kind: 'p', html: 'There is no single national 11+. The School Admissions Code says "It is for the admission authority to decide the content of the test", and requires that tests "must be clear, objective, and give an accurate reflection of the child\'s ability or aptitude". It also sets the timing: admission authorities must "take all reasonable steps to inform parents of the outcome of selection tests before the closing date for secondary applications on 31 October", "while making clear that this does not equate to a guarantee of a selective place".' },
        { kind: 'two', mt: true,
          leftH3: 'What that means for a Year 5 family',
          left: [
            'Because results must reach parents before 31 October of Year 6, the test itself falls before that date. For a child in Year 5 in 2026 to 2027, that is a test in 2027 (our reading of the Code\'s timing, not a local date).',
            'Check the exact date and registration deadline with your own local authority or grammar school consortium, since each sets its own.'
          ],
          rightH3: 'Who can select',
          right: [
            'The Code is clear that "Only designated grammar schools are permitted to select their entire intake on the basis of high academic ability". Outside those areas there is no 11+ to prepare for, and the Year 6 SATs are the next milestone.',
            'Our <a class="ag-inline-link" href="/11-plus-maths-tuition">11+ maths page</a> covers preparation itself, and area pages such as <a class="ag-inline-link" href="/11-plus-maths-tuition-kent">Kent</a> and <a class="ag-inline-link" href="/11-plus-maths-tuition-buckinghamshire">Buckinghamshire</a> cover local tests.'
          ] },
        { kind: 'p', mt: true, html: 'Whatever the local test, most 11+ maths questions draw on Key Stage 2 content, and some of it is taught in Year 6, after the test has been sat. That is the real reason Year 5 matters: a child who is secure in Year 5 work, and has met a little Year 6 content such as ratio and simple algebra, is not meeting new topics for the first time under exam conditions.' },
        { kind: 'source', html: 'Source: Department for Education, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/school-admissions-code--2" rel="noopener" target="_blank">School Admissions Code 2021</a>, paragraphs 1.18 and 1.31 to 1.32, read on 31 October 2026.' }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Four Year 5 examples we wrote, worked step by step',
      lede: 'Our own questions on statutory Year 5 content. None is taken from a test paper.',
      body: [
        { kind: 'two',
          leftH3: '1. Long multiplication by a two-digit number',
          left: [
            '<strong>Question (ours).</strong> 346 × 27.',
            '<strong>Split the 27.</strong> 27 is 20 + 7, so work out 346 × 7 and 346 × 20.',
            '<strong>Two rows.</strong> 346 × 7 = 2422. 346 × 20 = 6920 (346 × 2 = 692, then × 10).',
            '<strong>Add.</strong> 2422 + 6920 = 9342. <strong>Check by estimating:</strong> 350 × 30 = 10 500, so an answer a little under 10 000 makes sense.'
          ],
          rightH3: '2. A remainder that depends on the question',
          right: [
            '<strong>Question (ours).</strong> 158 children are going on a trip. Each minibus holds 9. How many minibuses are needed?',
            '<strong>Divide.</strong> 158 ÷ 9 = 17 remainder 5, because 9 × 17 = 153.',
            '<strong>Think about the context.</strong> 17 minibuses leave 5 children behind, so we need one more.',
            '<strong>Answer.</strong> 18 minibuses. The curriculum asks children to "interpret remainders appropriately for the context", and here that means rounding up.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. Adding fractions with related denominators',
          left: [
            '<strong>Question (ours).</strong> 2/3 + 5/6.',
            '<strong>Same denominator first.</strong> 6 is a multiple of 3, so write 2/3 as 4/6.',
            '<strong>Add.</strong> 4/6 + 5/6 = 9/6.',
            '<strong>Mixed number.</strong> 9/6 = 1 and 3/6 = 1 and a half. Year 5 asks for exactly this: adding fractions whose denominators are multiples of the same number, and writing answers over 1 as mixed numbers.'
          ],
          rightH3: '4. Fractions, decimals and percentages',
          right: [
            '<strong>Question (ours).</strong> Write two fifths as a decimal and a percentage.',
            '<strong>Hundredths.</strong> One fifth is 20 hundredths, so two fifths is 40 hundredths.',
            '<strong>Decimal.</strong> 40 hundredths is 0.40, usually written 0.4.',
            '<strong>Percentage.</strong> Per cent means "number of parts per hundred", so 40 hundredths is 40%. One quantity, three notations.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, with answers).</strong> (1) Round 486 251 to the nearest 10 000. (2) Is 91 prime? (3) Write MCMXC as a number. (4) 2.4 m in centimetres. (5) Find the perimeter of an L-shape made from a 6 cm by 4 cm rectangle with a 2 cm by 2 cm square cut from one corner. (6) What is 3/4 as a percentage? <strong>Answers:</strong> (1) 490 000; (2) no, 91 = 7 × 13; (3) 1990; (4) 240 cm; (5) 20 cm, because cutting a square from a corner leaves the perimeter unchanged; (6) 75%.' }
      ]
    },
    {
      id: 'tutoring', tint: '', eyebrow: 'Our tutoring',
      h2: 'What does a Year 5 maths tutor actually do?',
      lede: 'Find the gaps from Years 3 and 4, teach the new Year 5 content properly, and, for families in selective areas, add reasoning and a little Year 6 content before the test. The steps are ours.',
      body: [
        { kind: 'ol', items: [
          '<strong>A free first class.</strong> The tutor checks times tables, place value and written methods with your child, and listens to how they explain a problem.',
          '<strong>Close the old gaps first.</strong> Times tables, column subtraction and simple fractions from Years 3 and 4 are fixed before the new content is built on them.',
          '<strong>Teach Year 5 in the curriculum\'s spirit.</strong> One quantity in several forms: fractions, decimals and percentages taught together, remainders discussed in context.',
          '<strong>Written methods with estimates.</strong> Every long multiplication and short division checked by a rough estimate, a habit that lasts into secondary school.',
          '<strong>For 11+ families, reasoning and a little Year 6.</strong> Ratio, simple algebra and multi-step problems added in the summer term of Year 5.',
          '<strong>Short practice between classes.</strong> Ten minutes most days, never hours of papers.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group or 1-on-1 in Year 5?',
          left: [
            'A group of 15 to 20 Year 5 children suits a child who is on track and enjoys working alongside others.',
            '1-on-1 suits a child with gaps from earlier years, a child preparing for a specific local 11+ test, or one who needs a particular pace.'
          ],
          rightH3: 'What we do not promise',
          right: [
            'A grammar school place or a test score. The Code itself says a test result is not a guarantee of a selective place.',
            'Any connection with a school, a local authority or a test provider. Nobody but the family employs us.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four steps through Year 5 maths',
    lede: 'We check each one with a short written task in class, never a formal test.',
    table: { caption: 'What a Year 5 child should be able to show', head: ['Step', 'Typical term', 'Evidence in a written task'], rows: [
      ['1. Tables and place value secure', 'Autumn term', 'All times tables recalled; numbers to a million read, written and rounded'],
      ['2. Written methods', 'Spring term', 'Long multiplication by a two-digit number and short division, each checked by estimating'],
      ['3. One quantity, three forms', 'Spring to summer', 'Moves between fractions, decimals and percentages for halves, quarters, fifths and tenths'],
      ['4. Reasoning in words', 'Summer term', 'Explains a multi-step answer and says why a remainder is rounded up or down']
    ] },
    left: { h3: 'Step one unlocks the rest', ps: [
      'Factors, primes, long multiplication and fractions all lean on fluent times tables.',
      'Children who like patterns may enjoy <a class="ag-inline-link" href="/primary-maths-challenge-practice">Primary Maths Challenge practice</a>.'
    ] },
    right: { h3: 'Step four is the 11+ skill', ps: [
      'Explaining an answer is the habit selective tests and Year 6 reasoning papers both reward.',
      'Classes can pause in school holidays.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for upper primary children',
    lede: 'Maths for Year 5 and 6, and a few courses for curious nine and ten year olds.',
    bands: [
      { num: 'I', h3: 'Year 5 and 6 maths', sub: 'The core', courses: [
        { code: 'UK / Y51 / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 Plus Maths Prep', blurb: 'For selective areas, started in Year 5.' },
        { code: 'UK / Y51 / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths', blurb: 'The primary curriculum at a steady pace.' },
        { code: 'UK / Y51 / 03', slug: 'ks2-sats-maths-course', title: 'KS2 SATs Maths', blurb: 'Arithmetic and reasoning for May of Year 6.' }
      ] },
      { num: 'II', h3: 'Number fluency', sub: 'Faster and surer', courses: [
        { code: 'UK / Y52 / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for ages 5 to 10.' },
        { code: 'UK / Y52 / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Bead work that makes big numbers concrete.' },
        { code: 'UK / Y52 / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Calculation patterns for keen children.' }
      ] },
      { num: 'III', h3: 'Thinking and making', sub: 'Beyond the timetable', courses: [
        { code: 'UK / Y53 / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic puzzles for nine and ten year olds.' },
        { code: 'UK / Y53 / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Number patterns explored in Python, from age 10.' },
        { code: 'UK / Y53 / 03', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Games that use coordinates and angles.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How Year 5 classes run',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teachers are based in India; every class time we offer is in UK time.',
    slots: [
      { time: 'After school', l: 'The usual time for Year 5.' },
      { time: 'Early evening', l: 'After clubs and activities.' },
      { time: 'Weekend morning', l: 'A calm slot for longer problems.' }
    ],
    cells: [
      { h3: 'Old gaps first', p: 'Times tables and Year 3 and 4 methods checked before new content.' },
      { h3: 'Three notations together', p: 'Fractions, decimals and percentages taught as one idea.' },
      { h3: 'Estimate, then calculate', p: 'Every written method checked by a rough answer first.' },
      { h3: 'Reasoning aloud', p: 'Children explain their steps, which is what Year 6 and the 11+ ask for.' },
      { h3: 'First class free', p: 'One live class to see where your child is, with no payment.' },
      { h3: 'Group or 1-on-1', p: 'A Year 5 group of 15 to 20, or one child with their own tutor.' }
    ]
  },

  projectsH2: 'Things our students built in class',
  projectsLede: 'A few projects from everyday lessons, not marked. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' reviews on Google, copied as written.',

  fees: {
    h2: 'Fees for Year 5 maths tutoring',
    lede: 'The first class is free. Then one monthly fee, smaller for a group and larger for 1-on-1, charged only after a course and a weekly time are fixed, with no contract.',
    free: ['A live class at Year 5 level', 'A check of tables and written methods', 'Book with a phone number'],
    group: ['15 to 20 Year 5 children', 'The same tutor through the year', 'Short practice between classes', 'A termly note to parents'],
    one: ['A tutor for one child', 'Shaped around local 11+ dates if needed', 'Good for closing earlier gaps']
  },

  faq: {
    eyebrow: 'Year 5 questions',
    h2: 'What parents ask about Year 5 maths',
    items: [
      { q: 'What maths do children learn in Year 5?', a: 'The national curriculum adds numbers to at least a million, Roman numerals to 1000, prime, square and cube numbers, long multiplication by a two-digit number, short division with remainders, thousandths and percentages. Angles, area, perimeter and line graphs are covered too.' },
      { q: 'Is there a test in Year 5?', a: 'There is no national test in Year 5. The multiplication tables check is in Year 4 and the KS2 tests are in Year 6; for children in Year 5 now, those are in May 2028.' },
      { q: 'When will my Year 5 child sit the KS2 SATs?', a: 'The DfE lists the 2028 KS2 tests from Monday 8 May to Thursday 11 May 2028, which is when children in Year 5 during 2026 to 2027 will sit them.' },
      { q: 'Is Year 5 too early to start 11+ preparation?', a: 'In grammar school areas, Year 5 is usually the right time, because results must reach parents before 31 October of Year 6. Check your local test date with your local authority or consortium.' },
      { q: 'What maths is in the 11+?', a: 'It varies, because the School Admissions Code leaves the content of the test to each admission authority. Most maths questions draw on Key Stage 2 content, including some taught in Year 6.' },
      { q: 'My child is struggling with Year 5 maths. Where do we start?', a: 'Usually with times tables and place value. Year 5 builds long multiplication, factors and fractions on them, so closing those gaps first makes the new work far easier.' },
      { q: 'Why do Year 5 fractions feel so hard?', a: 'Because the curriculum asks children to treat fractions, decimals and percentages as different ways of writing the same amount, and to add and compare fractions for the first time with different denominators.' },
      { q: 'When are lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are UK time.' },
      { q: 'Which course should a Year 5 child take?', a: '11 Plus Maths Prep if a selective test is ahead, otherwise Elementary Maths. The free first class helps decide.' },
      { q: 'Are you connected with any school or 11+ test provider?', a: 'No. We are an independent online school with no link to schools, local authorities or test providers, and we never promise a place or a score.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More primary help',
    h2: 'Other pages for upper primary families',
    lede: 'Before Year 5, during it, and after.',
    items: [
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'Years 3 to 6 as a whole.' },
      { href: '/11-plus-maths-tuition', label: '11+ maths tuition', p: 'Preparing for a selective test.' },
      { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs maths papers', p: 'The three Year 6 papers explained.' },
      { href: '/multiplication-tables-check-year-4-practice', label: 'Year 4 multiplication tables check', p: 'The times tables Year 5 assumes.' },
      { href: '/ks2-and-11-plus-maths-tutor-cost-uk', label: 'KS2 and 11+ tutor costs', p: 'What families in the UK pay.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our UK hub for maths and coding.' }
    ]
  },

  start: {
    h2: 'Book a free Year 5 maths class',
    lede: 'Leave a number and we will call at a UK time that suits. The class checks times tables, place value and written methods, and ends with a view of what to work on first.',
    readFirst: 'Would you like to read first? The <a class="ag-inline-link" href="/courses/11-plus-maths-preparation-course-uk">11 Plus Maths Prep course</a> and the <a class="ag-inline-link" href="/courses/elementary-mathematics-complete-masterclass">Elementary Maths course</a> set out their syllabuses, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our method.',
    note: 'WhatsApp is the quickest way to reach us, free from a UK phone. Replies come from our India team on a +91 number.',
    formNote: 'No payment and no contract. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Primary maths', links: [
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' },
        { href: '/11-plus-maths-tuition', label: '11+ maths' },
        { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs papers' },
        { href: '/year-4-multiplication-tables-check-explained', label: 'Year 4 tables check' }
      ] },
      { h4: 'For curious children', links: [
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' },
        { href: '/ks2-coding-lessons-online', label: 'KS2 coding' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Year 5 maths, tutored live in UK time'
  },

  personalityCss: `
.ag-root.ag-gad .ag-hero h1 { letter-spacing: -0.012em; font-weight: 700; }
.ag-root.ag-gad .ag-capsule { border-left-width: 5px; border-radius: 8px; }
.ag-root.ag-gad .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-gad .ag-table caption { text-align: left; font-weight: 630; }
.ag-root.ag-gad .ag-table th:first-child { width: 22%; }
.ag-root.ag-gad .ag-steps li { margin-bottom: 9px; }
`,

  dossier: {
    curriculumAuthority: 'England, national curriculum mathematics, upper key stage 2, Year 5 programme of study: focus on extending place value to larger integers; algebra language introduced in upper KS2; fluency in written methods for all four operations by the end of Year 6; Year 5 statutory statements (numbers to 1 000 000, Roman numerals to M, primes to 19, long multiplication for two-digit numbers, short division with remainders in context, square and cube numbers, thousandths, per cent as parts per hundred, imperial equivalents, reflex angles, regular and irregular polygons, timetables); notes on non-integer division answers and on percentages, decimals and fractions as ways of expressing proportions. DfE Primary assessments future dates: KS2 tests 10 to 13 May 2027 and 8 to 11 May 2028; MTC from 7 June 2027; 2026 to 2027 arrangements unchanged. School Admissions Code 2021: admission authority decides test content; tests clear and objective; outcome before 31 October; not a guarantee of a place; only designated grammar schools may select their entire intake.',
    localProject: 'Big numbers, real fractions, quiet deadlines. A Year 5 door built on the programme of study: the stated aim of upper KS2, an eight-row table of Year 5 statutory content, and the curriculum\'s notes on division answers and on fractions, decimals and percentages as one idea. A timeline table (our mapping of DfE dates) placing this Year 5 between the Year 4 check and KS2 tests in May 2028, then the School Admissions Code on 11+ tests: content set locally, results before 31 October, no guarantee of a place. Four original worked examples (long multiplication, a minibus remainder, related-denominator fractions, two fifths as decimal and percentage) with an original practice set, and a six-step tutoring outline. Lesson family: a primary year door.',
    requiredMentions: [
      'The principal focus of mathematics teaching in upper key stage 2 is to ensure that pupils extend their understanding of the number system and place value to include larger integers.',
      'With this foundation in arithmetic, pupils are introduced to the language of algebra as a means for solving a variety of problems.',
      'Pupils should be taught throughout that percentages, decimals and fractions are different ways of expressing proportions.',
      'interpret remainders appropriately for the context',
      'Monday 8 May to Thursday 11 May 2028',
      'It is for the admission authority to decide the content of the test',
      'before the closing date for secondary applications on 31 October',
      'while making clear that this does not equate to a guarantee of a selective place',
      'Only designated grammar schools are permitted to select their entire intake on the basis of high academic ability'
    ],
    sources: [
      { claim: 'DfE, Mathematics programmes of study: key stages 1 and 2: upper KS2 focus, Year 5 statutory content and notes, end of Year 6 written methods.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study' },
      { claim: 'DfE, Primary assessments: future dates: KS2 test dates for 2027 and 2028, multiplication tables check window, arrangements unchanged.', url: 'https://www.gov.uk/guidance/primary-assessments-future-dates' },
      { claim: 'DfE, School Admissions Code 2021: selection tests, timing of outcomes, designated grammar schools.', url: 'https://www.gov.uk/government/publications/school-admissions-code--2' }
    ],
    rejectedClaims: [
      'Kent Test and other local 11+ dates: kent.gov.uk returned 403 to curl, so no local test date is quoted; families are told to check locally.',
      'The number of grammar schools or the share of children in selective areas: not read at a primary source, so no figure is given.',
      'The exact month of 11+ tests: inferred only as before 31 October of Year 6, from the Code, and labelled as our reading.',
      'Any promise of a grammar school place or a score: declined.'
    ]
  }
};
