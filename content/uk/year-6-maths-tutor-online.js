'use strict';
// Year 6 maths tutor online (ag- maths door, England; UK and US exams cluster Phase 2, row UK012).
// Sources, read raw on 31 October 2026 with curl (gov.uk content API and assets.publishing.service.gov.uk PDFs;
// PDF text through pypdf; raw copies in keyword-research-2026-09/uk-us-gap/src/year-6-maths-tutor-online/):
//  - DfE, Mathematics programmes of study: key stages 1 and 2 (DFE-00180-2013). Upper KS2: "This should develop the
//    connections that pupils make between multiplication and division with fractions, decimals, percentages and ratio."
//    Year 6 statutory: "read, write, order and compare numbers up to 10 000 000 and determine the value of each digit";
//    "use negative numbers in context, and calculate intervals across zero"; "divide numbers up to 4 digits by a
//    two-digit whole number using the formal written method of long division, and interpret remainders as whole number
//    remainders, fractions, or by rounding, as appropriate for the context"; "use their knowledge of the order of
//    operations to carry out calculations involving the four operations"; "multiply simple pairs of proper fractions,
//    writing the answer in its simplest form"; "divide proper fractions by whole numbers"; "solve problems involving the
//    calculation of percentages"; "solve problems involving unequal sharing and grouping using knowledge of fractions
//    and multiples"; algebra: "use simple formulae", "express missing number problems algebraically", "find pairs of
//    numbers that satisfy an equation with two unknowns", "enumerate possibilities of combinations of two variables";
//    "convert between miles and kilometres"; "calculate the area of parallelograms and triangles"; "describe positions on
//    the full coordinate grid (all four quadrants)"; "calculate and interpret the mean as an average". Notes: "These
//    problems are the foundation for later formal approaches to ratio and proportion."; "but not to a specified number
//    of significant figures"; "2 + 1 x 3 = 5 and (2 + 1) x 3 = 9".
//  - STA, 2027 key stage 2 national curriculum tests: information for parents: tests "from Monday 10 May to Thursday 13
//    May 2027"; mathematics Papers 1 and 2 on Wednesday 12 May, Paper 3 on Thursday 13 May; "they may be able to take any
//    missed test up to 5 school days afterwards"; "Schools can view KS2 test results online from Tuesday 6 July 2027.";
//    "you should receive them by the end of the summer term"; "The secondary school your child is moving to will also be
//    able to access your child's results."; "Some people refer to these tests as SATs".
//  - STA, 2027 KS2 assessment and reporting arrangements: Tuesday 6 July results available to "key stage 3 ( KS3 )
//    schools with a year 7 intake"; each pupil receives "a raw score (the number of marks awarded) a scaled score
//    confirmation of whether they met the expected standard".
//  - DfE, School Admissions Code 2021: secondary application deadline "31 October"; "Secondary National Offer Day is 1
//    March (or the next working day)."
//  - Government response to the Curriculum and Assessment Review (November 2025): "26% of children do not meet the
//    expected standard in maths at key stage 2"; Review recommendation that KS2 assessments be redesigned "minimally to
//    reflect a re-sequenced curriculum and include a stronger focus on mental arithmetic and reasoning".
// Our own: the Year 6 calendar arrangement, the "two finishing lines" framing (SATs in May, secondary in September),
// four worked examples and the practice set. Spine: Year 6 is the last primary year: algebra, ratio and long division
// arrive just as the SATs and the move to secondary school frame the year. Lesson family: a primary year door, distinct
// from the KS2 SATs papers page (which covers paper structure and scaled scores).

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'YEAR 6 MATHS', blurb: 'Ratio, algebra and long division in the last primary year, the May 2027 SATs and the move to secondary school.' },
  slug: 'year-6-maths-tutor-online',
  code: 'gae',
  accent: '#603C40',
  accentRationale: 'Year 6 maths: a dark claret brown (#603C40, 8.93:1 on #FBF8F2), warmer than the secondary blues and distinct from the green primary years',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Year 6 maths tutor online',
  title: 'Year 6 Maths Tutor Online | SATs 2027 and Secondary Ready',
  description: 'Year 6 maths tutor online: the last year of the primary curriculum, the KS2 SATs on 12 and 13 May 2027, the move to secondary school and live classes in UK time.',
  ogDescription: 'Year 6 maths adds ratio, algebra, long division and fractions multiplied and divided, all before the May SATs and the step up to Year 7.',
  twitterDescription: 'Year 6 maths explained from the DfE programme of study and STA 2027 dates, with worked examples and live classes.',
  pageName: 'Year 6 Maths Tutor Online',
  webPageDescription: 'Live online maths tutoring for Year 6 children in England, built from the Year 6 programme of study, the STA\'s 2027 key stage 2 arrangements and the School Admissions Code.',
  courseDescription: 'Live online maths for Year 6: numbers to ten million, long division, order of operations, fractions, percentages, ratio, simple algebra, area of triangles, the four-quadrant grid and the mean.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Year 6 maths tutor',
  navLinks: [
    { href: '#programme', label: 'Year 6 content' },
    { href: '#calendar', label: 'The Year 6 calendar' },
    { href: '#secondary', label: 'Moving to secondary' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Year 6 maths &middot; ages 10 to 11',
  h1: 'Year 6 maths tutor online',
  lede: 'Year 6 has two finishing lines. The first comes in May, when almost every child in a state primary school in England sits the key stage 2 maths papers that most families call the SATs. The second comes in September, when the same child walks into a secondary school that already has their results. In between, the curriculum asks for more new mathematics than any other primary year: ratio, the first real algebra, long division by two-digit numbers, multiplying and dividing fractions, the area of a triangle and the full coordinate grid. This page sets out the Year 6 programme, the dated calendar for 2026 to 2027, what happens to results at secondary school, and how we tutor the year.',
  secondaryCta: { href: '#calendar', label: 'See the 2027 dates' },
  wa: 'Hello Modern Age Coders, I would like a free first class with a Year 6 maths tutor.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the DfE Year 6 programme and STA 2027 dates',
  spec: [
    ['Year group', 'Year 6, ages 10 to 11'],
    ['Stage', 'End of Key Stage 2'],
    ['Maths papers', '12 and 13 May 2027'],
    ['Results to schools', 'Tuesday 6 July 2027'],
    ['New this year', 'Ratio, algebra, long division'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Year 6 maths is the final year of Key Stage 2 in England, for children aged 10 to 11. The national curriculum adds ratio, simple algebra, long division by a two-digit number, multiplying and dividing fractions, percentages of amounts and the mean. The STA schedules the 2027 key stage 2 maths papers, widely called SATs, on Wednesday 12 May and Thursday 13 May 2027, and results reach schools on 6 July 2027. Modern Age Coders teaches Year 6 maths live online, 1-on-1 or in a class of 15 to 20, through its KS2 SATs Maths course. The first class is free, and we are not linked to the STA or to any school.',

  picks: {
    eyebrow: 'Courses for Year 6',
    h2: 'Three courses for the last year of primary',
    lede: 'One built for the May papers, one that rebuilds earlier years, and one that carries a confident child on into Year 7 maths.',
    items: [
      { course: 'ks2-sats-maths-course', code: 'Y6 / 01', title: 'KS2 SATs Maths', note: 'The Year 6 programme with arithmetic and reasoning practice paced towards 12 and 13 May 2027.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'Y6 / 02', title: 'Elementary Maths', note: 'For a Year 6 child whose fractions or written methods from Years 4 and 5 still wobble.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'Y6 / 03', title: 'Middle School Maths', note: 'Pre-algebra and geometry for after the SATs, so September feels like a continuation.' }
    ]
  },

  sections: [
    {
      id: 'programme', tint: 'tint', eyebrow: 'Year 6 content',
      h2: 'What is in the Year 6 maths curriculum?',
      lede: 'Two areas appear for the first time as headings of their own, ratio and proportion and algebra, and every other strand reaches its primary peak. The table summarises the statutory Year 6 requirements.',
      body: [
        { kind: 'p', html: 'The upper Key Stage 2 introduction says the teaching "should develop the connections that pupils make between multiplication and division with fractions, decimals, percentages and ratio." Year 6 is where all five meet. The table below groups the statutory statements from the DfE programme of study.' },
        { kind: 'table', mt: true, caption: 'Year 6 maths in the national curriculum for England (statutory requirements, grouped and shortened)', head: ['Area', 'What Year 6 adds'], rows: [
          ['Place value', 'Numbers up to 10 000 000; rounding to any required accuracy; negative numbers in context and intervals across zero'],
          ['Calculation', 'Long multiplication of up to 4 digits by 2 digits; long division by a two-digit number with remainders as whole numbers, fractions or rounded; common factors and multiples; primes; order of operations'],
          ['Fractions, decimals, percentages', 'Simplifying with common factors; adding and subtracting with different denominators; multiplying pairs of proper fractions; dividing a fraction by a whole number; fraction to decimal; percentages of amounts'],
          ['Ratio and proportion', 'Relative sizes of two quantities; percentages for comparison; similar shapes and scale factors; unequal sharing and grouping'],
          ['Algebra', 'Simple formulae; linear number sequences; missing number problems written algebraically; pairs of numbers satisfying an equation with two unknowns; combinations of two variables'],
          ['Measurement', 'Converting units to three decimal places; miles and kilometres; same area with different perimeters; area of parallelograms and triangles; volume of cubes and cuboids'],
          ['Geometry', 'Drawing shapes and nets; unknown angles in triangles, quadrilaterals and regular polygons; radius, diameter and circumference; the full four-quadrant grid; translations and reflections'],
          ['Statistics', 'Pie charts and line graphs; the mean as an average']
        ] },
        { kind: 'p', html: 'The non-statutory notes keep the algebra gentle. Letters stand for "missing numbers, lengths, coordinates and angles" that children already understand, and the ratio work uses everyday language rather than notation; the notes call these problems "the foundation for later formal approaches to ratio and proportion." Rounding is limited too: answers are rounded to the nearest 10, 20 or 50, "but not to a specified number of significant figures", which waits for secondary school.' },
        { kind: 'source', html: 'From the Year 6 programme of study and upper Key Stage 2 introduction in the DfE\'s <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">mathematics programmes of study: key stages 1 and 2</a>, read on 31 October 2026.' }
      ]
    },
    {
      id: 'calendar', tint: 'deep', eyebrow: 'The Year 6 calendar',
      h2: 'When are the 2027 Year 6 SATs and other key dates?',
      lede: 'The 2027 key stage 2 tests run from Monday 10 May to Thursday 13 May 2027, with the three maths papers on the Wednesday and Thursday. Around them sit the secondary admissions dates. All dates below come from official sources named in the caption.',
      body: [
        { kind: 'table', caption: 'Year 6 in 2026 to 2027: dates from the STA\'s 2027 information for parents and arrangements, and the DfE School Admissions Code (the arrangement of rows is ours)', head: ['Date', 'What happens', 'Source'], rows: [
          ['31 October 2026', 'Deadline for secondary school applications', 'School Admissions Code'],
          ['Monday 1 March 2027', 'Secondary National Offer Day: families hear which school has offered a place', 'School Admissions Code'],
          ['Wednesday 12 May 2027', 'Maths Paper 1 (arithmetic) and Paper 2 (reasoning)', 'STA, 2027 tests'],
          ['Thursday 13 May 2027', 'Maths Paper 3 (reasoning)', 'STA, 2027 tests'],
          ['Up to 5 school days later', 'A child absent on a test day may take a missed test, if the school applies and STA approves', 'STA, 2027 tests'],
          ['Tuesday 6 July 2027', 'Results online for primary schools, and for secondary schools with a Year 7 intake', 'STA, 2027 arrangements'],
          ['By the end of the summer term', 'Parents receive results from the primary school', 'STA, 2027 tests']
        ] },
        { kind: 'p', html: 'What does a result look like? The STA\'s 2027 arrangements say each pupil should receive "a raw score (the number of marks awarded)", a scaled score, and confirmation of whether they met the expected standard. Our <a class="ag-inline-link" href="/ks2-sats-maths-papers-explained">KS2 SATs maths papers page</a> explains the three papers, their marks and how the scaled score works, so we do not repeat it here.' },
        { kind: 'two', mt: true,
          leftH3: 'The national picture',
          left: [
            'In its November 2025 response to the Curriculum and Assessment Review, the government wrote that "26% of children do not meet the expected standard in maths at key stage 2".',
            'That is roughly one child in four in a typical class, which is why the year is worth taking seriously without treating it as a crisis.'
          ],
          rightH3: 'Changes ahead, not this year',
          right: [
            'The Review recommended redesigning the key stage 2 tests "minimally to reflect a re-sequenced curriculum and include a stronger focus on mental arithmetic and reasoning".',
            'Those changes follow the revised curriculum. For 2026 to 2027 the DfE says arrangements are unchanged, so this Year 6 sits the familiar papers.'
          ] },
        { kind: 'source', html: 'Sources: STA, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/key-stage-2-national-curriculum-tests-and-results-information-for-parents" rel="noopener" target="_blank">2027 key stage 2 tests: information for parents</a>; STA, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/key-stage-2-assessment-and-reporting-arrangements-ara" rel="noopener" target="_blank">2027 KS2 assessment and reporting arrangements</a>; DfE, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/school-admissions-code--2" rel="noopener" target="_blank">School Admissions Code 2021</a>; <a class="ag-inline-link" href="https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report-government-response" rel="noopener" target="_blank">government response to the Curriculum and Assessment Review</a>.' }
      ]
    },
    {
      id: 'secondary', tint: '', eyebrow: 'Moving to secondary',
      h2: 'Do secondary schools see Year 6 SATs results?',
      lede: 'Yes. The STA tells parents that "The secondary school your child is moving to will also be able to access your child\'s results." Its arrangements give secondary schools with a Year 7 intake access on the same day as primary schools.',
      body: [
        { kind: 'p', html: 'The timing is set out exactly: "Schools can view KS2 test results online from Tuesday 6 July 2027." The STA explains the purpose in the same leaflet: access to results "helps them plan how best to support new pupils on entry." What each school does with the information is its own decision. Some use it alongside their own tests in the first weeks of Year 7; we make no claim about how any particular school groups its pupils.' },
        { kind: 'two', mt: true,
          leftH3: 'What secondary maths assumes',
          left: [
            'Key Stage 3 picks up exactly where Year 6 stops: algebra becomes the main language, ratio is written with notation, and fractions are calculated rather than drawn.',
            'A child who leaves Year 6 secure in long division, fraction arithmetic and the order of operations has most of what Year 7 builds on.'
          ],
          rightH3: 'The weeks after the SATs',
          right: [
            'From mid-May to July, Year 6 often has room in the timetable. We use it for gentle bridging: negative numbers, simple equations and angle facts in the style of secondary school.',
            'Our <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3 maths tuition page</a> shows what comes next.'
          ] },
        { kind: 'p', mt: true, html: 'For families in grammar school areas, Year 6 holds a third date. Selective tests are usually sat early in Year 6, before the secondary application deadline on 31 October, and the content is decided locally. Our <a class="ag-inline-link" href="/11-plus-maths-tuition">11+ maths page</a> covers that preparation.' },
        { kind: 'source', html: 'Quoted from the STA\'s 2027 information for parents; Secondary National Offer Day and the 31 October deadline from the School Admissions Code 2021.' }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Four Year 6 questions we wrote, worked in full',
      lede: 'Each uses statutory Year 6 content. They are our own questions, written for this page, and not taken from any test paper.',
      body: [
        { kind: 'two',
          leftH3: '1. Long division by a two-digit number',
          left: [
            '<strong>Question (ours).</strong> 3672 ÷ 24.',
            '<strong>Write a short list of multiples.</strong> 24, 48, 72, 96, 120. Having them ready stops guesswork.',
            '<strong>Divide in stages.</strong> 36 hundreds ÷ 24 = 1 hundred, remainder 12 hundreds. Bring down the 7: 127 tens ÷ 24 = 5 tens (120), remainder 7 tens. Bring down the 2: 72 ÷ 24 = 3.',
            '<strong>Answer and check.</strong> 153. Then 153 × 24 = 3060 + 612 = 3672, which matches.'
          ],
          rightH3: '2. The order of operations',
          right: [
            '<strong>Question (ours).</strong> 6 + 4 × (9 − 3) ÷ 8.',
            '<strong>Brackets first.</strong> 9 − 3 = 6, so the expression becomes 6 + 4 × 6 ÷ 8.',
            '<strong>Multiply and divide, left to right.</strong> 4 × 6 = 24, then 24 ÷ 8 = 3.',
            '<strong>Add last.</strong> 6 + 3 = 9. Working strictly from the left gives 7.5, which is why the curriculum names the order of operations as a skill in its own right.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. Finding the whole from a fraction',
          left: [
            '<strong>Question (ours).</strong> Three fifths of a ribbon is 42 cm. How long is the whole ribbon?',
            '<strong>One fifth.</strong> Three fifths is 42 cm, so one fifth is 42 ÷ 3 = 14 cm.',
            '<strong>Five fifths.</strong> 14 × 5 = 70 cm.',
            '<strong>Check.</strong> Three fifths of 70 is 70 ÷ 5 × 3 = 42. Working backwards from a fraction is a Year 6 idea that many children find surprising at first.'
          ],
          rightH3: '4. Unequal sharing',
          right: [
            '<strong>Question (ours).</strong> A bag holds red and blue beads. For every 2 red beads there are 5 blue ones, and there are 35 beads altogether. How many are red?',
            '<strong>One group.</strong> Each group of 2 red and 5 blue holds 7 beads.',
            '<strong>Number of groups.</strong> 35 ÷ 7 = 5 groups.',
            '<strong>Answer.</strong> 5 × 2 = 10 red and 5 × 5 = 25 blue. Thinking in groups like this is exactly the informal ratio the curriculum asks for before notation such as 2 : 5.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, answers below).</strong> (1) Round 4 638 271 to the nearest hundred thousand. (2) 35% of 240. (3) Two thirds multiplied by three quarters, in simplest form. (4) One quarter divided by 3. (5) The mean of 7, 9, 12, 4 and 8. (6) The area of a triangle with a base of 10 cm and a height of 6 cm. (7) Two numbers add to 12 and one is twice the other; find them. (8) The temperature rises from minus 6 degrees to 5 degrees; by how much? <strong>Answers:</strong> (1) 4 600 000; (2) 84; (3) one half; (4) one twelfth; (5) 8; (6) 30 square centimetres; (7) 8 and 4; (8) 11 degrees.' }
      ]
    },
    {
      id: 'tutoring', tint: '', eyebrow: 'Our tutoring',
      h2: 'How should Year 6 maths tutoring be planned around the SATs?',
      lede: 'Teach the new Year 6 content in autumn, practise in the style of the papers from spring, and use the summer to bridge into Year 7. The plan below is ours and changes after the first class.',
      body: [
        { kind: 'ol', items: [
          '<strong>A free first class.</strong> The tutor checks long multiplication, fractions with different denominators and one worded problem, and listens to how your child explains.',
          '<strong>Autumn: the new content.</strong> Long division, the order of operations, fraction multiplication and division, ratio and simple algebra, each taught before it is tested.',
          '<strong>Close gaps from Years 4 and 5 alongside.</strong> Times tables, decimals and percentages are where most marks quietly go missing.',
          '<strong>Spring: practise in the format.</strong> Arithmetic in short timed sets and reasoning questions read aloud and planned, using the STA\'s own published materials for familiarity.',
          '<strong>May: steady, not frantic.</strong> Shorter sessions in the fortnight before 12 May, with sleep and confidence treated as part of the plan.',
          '<strong>After the papers: the bridge.</strong> Negative numbers, equations and angle reasoning in secondary style until the summer holiday.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group or 1-on-1 in Year 6?',
          left: [
            'A group of 15 to 20 Year 6 children suits a child broadly on track who benefits from working through papers with others.',
            '1-on-1 suits a child with gaps from earlier years, a child who is anxious about tests, or one preparing for a selective test as well as the SATs.'
          ],
          rightH3: 'What we will not promise',
          right: [
            'A particular scaled score, a set at secondary school, or a grammar school place.',
            'Any link with the STA, the DfE, a local authority or a school. We are independent and work only for families.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four stages through Year 6',
    lede: 'We look for each one in an ordinary class task. These are our stages, not an official measure.',
    table: { caption: 'Year 6 stages we work towards (ours, set against the programme of study and the 2027 dates)', head: ['Stage', 'When', 'What the child can do'], rows: [
      ['1. Written methods complete', 'Autumn term', 'Long multiplication and long division by a two-digit number, checked by estimating'],
      ['2. Fractions and ratio', 'Late autumn to spring', 'All four operations with fractions as Year 6 requires, percentages of amounts and unequal sharing'],
      ['3. Reasoning under time', 'Spring term to May', 'Reads a worded problem, plans it, answers it and checks it within a sensible time'],
      ['4. Ready for Year 7', 'Late May to July', 'Simple equations, negative numbers and angle facts in secondary style']
    ] },
    left: { h3: 'Stage one comes first', ps: [
      'Long division is the last formal method of primary school and the one most often left half secure.',
      'Children who enjoy harder problems may like our <a class="ag-inline-link" href="/primary-maths-challenge-practice">Primary Maths Challenge page</a>.'
    ] },
    right: { h3: 'Stage four is the real finish', ps: [
      'The SATs end in May; secondary maths begins in September. We plan for both.',
      'Lessons can pause over the summer holidays.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for ten and eleven year olds',
    lede: 'The SATs year, the 11+ for families who need it, the bridge to secondary, and some coding that uses the same maths.',
    bands: [
      { num: 'I', h3: 'Year 6 maths', sub: 'This year', courses: [
        { code: 'UK / Y61 / 01', slug: 'ks2-sats-maths-course', title: 'KS2 SATs Maths', blurb: 'Year 6 content and the May papers.' },
        { code: 'UK / Y61 / 02', slug: '11-plus-maths-preparation-course-uk', title: '11 Plus Maths Prep', blurb: 'For selective tests early in Year 6.' },
        { code: 'UK / Y61 / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths', blurb: 'Years 4 and 5 gaps rebuilt.' }
      ] },
      { num: 'II', h3: 'Into Year 7', sub: 'The next step', courses: [
        { code: 'UK / Y62 / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle School Maths', blurb: 'Pre-algebra and geometry for 11 to 14.' },
        { code: 'UK / Y62 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Letters, expressions and equations from the start.' },
        { code: 'UK / Y62 / 03', slug: 'middle-school-math-competitions-course', title: 'Maths competitions', blurb: 'Problem solving for keen 11 year olds.' }
      ] },
      { num: 'III', h3: 'Maths that builds', sub: 'Beyond the syllabus', courses: [
        { code: 'UK / Y63 / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Sequences and formulae in Python.' },
        { code: 'UK / Y63 / 02', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Fast checking for arithmetic.' },
        { code: 'UK / Y63 / 03', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Coordinates in all four quadrants.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How Year 6 classes run',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. The teaching team is in India, and every class time is fixed in UK time.',
    slots: [
      { time: 'After school', l: 'A good fit for Year 6 homework weeks.' },
      { time: 'Evening', l: 'After clubs, before bed.' },
      { time: 'Weekend morning', l: 'Space for a practice paper.' }
    ],
    cells: [
      { h3: 'New content before practice', p: 'Ratio and algebra are taught first, then practised in the paper style.' },
      { h3: 'Arithmetic in short bursts', p: 'Brief timed sets, never a whole evening of sums.' },
      { h3: 'Reasoning read aloud', p: 'Children say what a question asks before they calculate.' },
      { h3: 'A bridge in the summer', p: 'Secondary-style maths once the papers are done.' },
      { h3: 'Free opening lesson', p: 'One live class with the tutor, with no payment taken.' },
      { h3: 'Class or private', p: 'A Year 6 class of 15 to 20, or one child with one tutor.' }
    ]
  },

  projectsH2: 'Projects from our classes',
  projectsLede: 'Built in normal lessons and not marked. Browse others in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parent reviews from Google, reproduced word for word.',

  fees: {
    h2: 'Year 6 maths tutoring fees',
    lede: 'The opening class is free. After it, a single monthly fee applies, smaller for a group and larger for 1-on-1, and it starts only when the course and a weekly time are settled. There is no contract.',
    free: ['A live Year 6 class', 'Written methods and fractions checked', 'Booked with a phone number'],
    group: ['15 to 20 children in Year 6', 'The same tutor up to the SATs', 'Short timed arithmetic sets', 'A note to parents each term'],
    one: ['A tutor for your child alone', 'Planned around 12 and 13 May', 'Good for test nerves and gaps']
  },

  faq: {
    eyebrow: 'Year 6 questions',
    h2: 'What parents ask about Year 6 maths',
    items: [
      { q: 'What maths is taught in Year 6?', a: 'Numbers to ten million, long division by a two-digit number, the order of operations, multiplying and dividing fractions, percentages, ratio, simple algebra and formulae, the area of triangles and parallelograms, the four-quadrant grid, pie charts and the mean.' },
      { q: 'When are the Year 6 SATs in 2027?', a: 'The STA timetables the key stage 2 tests from Monday 10 May to Thursday 13 May 2027. Maths Papers 1 and 2 are on Wednesday 12 May and Paper 3 is on Thursday 13 May.' },
      { q: 'When do Year 6 SATs results come out?', a: 'Schools can see results online from Tuesday 6 July 2027, and the STA says parents should receive them from the school by the end of the summer term.' },
      { q: 'Will my child\'s secondary school see their SATs results?', a: 'Yes. The STA says the secondary school your child is moving to will be able to access the results, to help it plan support for new pupils.' },
      { q: 'What happens if my child is ill on a SATs day?', a: 'The STA says a pupil absent on a scheduled test day may be able to take a missed test up to 5 school days afterwards, if the school applies for a timetable variation and STA approves it.' },
      { q: 'Is algebra taught in Year 6?', a: 'Yes, for the first time as a heading of its own. Children use simple formulae, describe number sequences, write missing number problems with letters and find pairs of numbers that fit an equation with two unknowns.' },
      { q: 'How can I help my Year 6 child with maths at home?', a: 'Keep times tables and written methods ticking over with a few minutes most days, and ask your child to explain one problem aloud each week. Explaining is the skill the reasoning papers reward.' },
      { q: 'When will we find out our secondary school?', a: 'The School Admissions Code sets the secondary National Offer Day as 1 March, or the next working day. For families who applied by 31 October 2026, that is Monday 1 March 2027.' },
      { q: 'When are Year 6 classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is in UK time.' },
      { q: 'Are you connected with the STA or any school?', a: 'No. Modern Age Coders is independent. We teach from the published curriculum and STA documents but have no connection with the STA, the DfE, a local authority or any school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More for Year 6',
    h2: 'Related pages for Year 6 families',
    lede: 'The papers, the 11+ and what comes after.',
    items: [
      { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs maths papers', p: 'Marks, timing and scaled scores.' },
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'Years 3 to 6 together.' },
      { href: '/11-plus-maths-tuition', label: '11+ maths tuition', p: 'Selective tests in Year 6.' },
      { href: '/ks3-maths-tuition-online', label: 'KS3 maths tuition', p: 'Years 7 to 9, next September.' },
      { href: '/ks2-and-11-plus-maths-tutor-cost-uk', label: 'KS2 and 11+ tutor costs', p: 'What UK families pay.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages in one place.' }
    ]
  },

  start: {
    h2: 'Book a free Year 6 maths class',
    lede: 'Send a phone number and we will ring at a UK time that suits your family. The class looks at long multiplication, a fraction calculation and one reasoning question, and ends with a clear first target.',
    readFirst: 'Rather read first? The <a class="ag-inline-link" href="/courses/ks2-sats-maths-course">KS2 SATs Maths course</a> lists its syllabus week by week, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> sets out our method.',
    note: 'WhatsApp is our fastest channel and free from a UK phone. Our India team answers from a +91 number.',
    formNote: 'Free, with no obligation. Expect one reply, offering a time.'
  },

  footer: {
    cols: [
      { h4: 'Year 6 and after', links: [
        { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs papers' },
        { href: '/11-plus-maths-tuition', label: '11+ maths' },
        { href: '/ks3-maths-tuition-online', label: 'KS3 maths' },
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' }
      ] },
      { h4: 'More to explore', links: [
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' },
        { href: '/ks2-coding-lessons-online', label: 'KS2 coding' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Year 6 maths, tutored live in UK time'
  },

  personalityCss: `
.ag-root.ag-gae .ag-hero h1 { letter-spacing: -0.016em; font-weight: 700; }
.ag-root.ag-gae .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-gae .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-gae .ag-table caption { text-align: left; font-weight: 640; }
.ag-root.ag-gae .ag-table th:first-child { width: 21%; }
.ag-root.ag-gae .ag-steps li { margin-bottom: 11px; }
`,

  dossier: {
    curriculumAuthority: 'England, national curriculum mathematics, upper key stage 2, Year 6 programme of study (DFE-00180-2013): connections between multiplication and division with fractions, decimals, percentages and ratio; Year 6 statutory statements (numbers to 10 000 000, intervals across zero, long multiplication and long division by two-digit numbers with remainders interpreted for context, order of operations, multiplying proper fractions, dividing fractions by whole numbers, percentages, ratio and unequal sharing, algebra with formulae, sequences, missing numbers, two unknowns and combinations, miles and kilometres, area of parallelograms and triangles, four-quadrant coordinates, the mean, pie charts). STA 2027 KS2 tests information for parents: 10 to 13 May 2027, maths 12 and 13 May, missed tests up to 5 school days later, results online 6 July 2027, results by the end of the summer term, secondary school access. STA 2027 ARA: results to KS3 schools with a Year 7 intake; raw score, scaled score and expected standard confirmation. School Admissions Code 2021: 31 October deadline; Secondary National Offer Day 1 March. Government response: 26% below the expected standard in maths at KS2; Review: KS2 tests redesigned minimally with more mental arithmetic and reasoning.',
    localProject: 'Two finishing lines: the SATs in May and secondary school in September. A Year 6 door built on the programme of study: the upper KS2 connections sentence, an eight-row table of Year 6 statutory content and the notes on gentle algebra, informal ratio and rounding. A dated 2026 to 2027 calendar from the Admissions Code and the STA (31 October, 1 March, 12 and 13 May, 6 July), the STA on what a result contains, the government\'s 26% figure and the Review\'s proposed test redesign. A section on secondary school access to results and the weeks after the papers. Four original worked examples (3672 divided by 24, an order-of-operations expression, three fifths of a ribbon, beads shared 2 to 5) and an original eight-item practice set. Lesson family: a primary year door.',
    requiredMentions: [
      'should develop the connections that pupils make between multiplication and division with fractions, decimals, percentages and ratio.',
      'the foundation for later formal approaches to ratio and proportion.',
      'but not to a specified number of significant figures',
      'Schools can view KS2 test results online from Tuesday 6 July 2027',
      'The secondary school your child is moving to will also be able to access your child\'s results.',
      'helps them plan how best to support new pupils on entry.',
      'a raw score (the number of marks awarded)',
      '26% of children do not meet the expected standard in maths at key stage 2',
      'minimally to reflect a re-sequenced curriculum and include a stronger focus on mental arithmetic and reasoning'
    ],
    sources: [
      { claim: 'DfE, Mathematics programmes of study: key stages 1 and 2: upper KS2 introduction, Year 6 statutory requirements and notes.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study' },
      { claim: 'STA, 2027 key stage 2 national curriculum tests: information for parents: test dates, missed tests, results timing, secondary school access.', url: 'https://www.gov.uk/government/publications/key-stage-2-national-curriculum-tests-and-results-information-for-parents' },
      { claim: 'STA, 2027 key stage 2 assessment and reporting arrangements: results to KS3 schools with a Year 7 intake; what each pupil receives.', url: 'https://www.gov.uk/government/publications/key-stage-2-assessment-and-reporting-arrangements-ara' },
      { claim: 'DfE, School Admissions Code 2021: secondary application deadline and Secondary National Offer Day.', url: 'https://www.gov.uk/government/publications/school-admissions-code--2' },
      { claim: 'Curriculum and Assessment Review final report and government response (November 2025): KS2 maths attainment figure and proposed test redesign.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report-government-response' }
    ],
    rejectedClaims: [
      'Paper-by-paper marks, timings and scaled score conversions: covered on the live KS2 SATs papers page, so not repeated.',
      'How secondary schools set pupils for maths: no primary source covers it, and practice varies by school, so no claim is made.',
      'Local 11+ test dates: each admission authority sets its own; none quoted.',
      'Any promise of a scaled score, a set or a place: declined.'
    ]
  }
};
