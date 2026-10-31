'use strict';
// Year 7 maths tutor online (ag- maths door, England; UK and US exams cluster Phase 2, row UK013).
// Sources, read raw on 31 October 2026 with curl (gov.uk content API and assets.publishing.service.gov.uk PDFs;
// PDF text through pypdf; raw copies in keyword-research-2026-09/uk-us-gap/src/year-7-maths-tutor-online/):
//  - DfE, Mathematics programmes of study: key stage 3 (DFE-00179-2013, "September 2013"): "The programme of study for
//    key stage 3 is organised into apparently distinct domains, but pupils should build on key stage 2 and connections
//    across mathematical ideas"; "Decisions about progression should be based on the security of pupils' understanding
//    and their readiness to progress to the next stage."; "consolidate their numerical and mathematical capability from
//    key stage 2 and extend their understanding of the number system and place value to include decimals, fractions,
//    powers and roots"; "use algebra to generalise the structure of arithmetic"; "including using product notation and
//    the unique factorisation property"; "use the four operations, including formal written methods, applied to
//    integers, decimals, proper and improper fractions, and mixed numbers, all both positive and negative"; "work with
//    percentages greater than 100%"; notation "ab in place of a × b", "3y in place of y + y + y and 3 × y"; "use the
//    symbols =, ≠, <, >, ≤, ≥"; "teachers should ensure that pupils build secure foundations by using discussion to
//    probe and remedy their misconceptions".
//  - DfE, Mathematics programmes of study: key stages 1 and 2: Year 6 statements used for the comparison table
//    (numbers to 10 000 000; rounding "but not to a specified number of significant figures"; "They might use the
//    notation a:b"; "calculate and interpret the mean as an average").
//  - Curriculum and Assessment Review Final Report (November 2025): KS3 challenges "limited progress by students",
//    "poor curriculum continuity from Key Stage 2", "its lower priority relative to Key Stage 4"; "Since Key Stage 3
//    assessments were cancelled in 2008, schools have developed and administered their own assessments."; "Primary
//    schools can access pupils' detailed results, including their responses to each question, as can secondary schools
//    for incoming Year 7 students."; "the breadth of topics at Key Stage 2 has resulted in significant challenges for
//    primary to secondary transition".
//  - Government response to the Review (November 2025): "we expect all secondary schools to do so as part of their
//    ongoing formative assessment from the beginning of Year 7 onwards"; "some pupils need further support in key stage
//    3 to become fully secure in the foundations of reading, writing and maths".
//  - STA, 2027 KS2 assessment and reporting arrangements: results available on Tuesday 6 July to "key stage 3 ( KS3 )
//    schools with a year 7 intake".
// Our own: the Year 6 to Year 7 comparison table layout, the reading of a key-stage programme as "the school chooses
// the order", four worked examples and the practice set. Spine: Year 7 is the move from a year-by-year primary list to
// one three-year Key Stage 3 programme whose order each school decides, with no national test until GCSE, so the
// first year of secondary is about consolidating KS2 and meeting algebra properly. Lesson family: a secondary year
// door, distinct from the KS3 door (three years), the Year 9 door (end of KS3) and the Year 6 door.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'YEAR 7 MATHS', blurb: 'The first year of Key Stage 3: one programme for three years, algebra notation, negative numbers and prime factors.' },
  slug: 'year-7-maths-tutor-online',
  code: 'gaf',
  accent: '#573F66',
  accentRationale: 'Year 7 maths: a dusk plum (#573F66, 8.58:1 on #FBF8F2), redder than the KS1 violet and well apart from the Year 8 navy',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Year 7 maths tutor online',
  title: 'Year 7 Maths Tutor Online | KS3 Start, Transition, Live Help',
  description: 'Year 7 maths tutor online: how the Key Stage 3 programme differs from Year 6, what secondary schools know on day one, worked examples and live classes in UK time.',
  ogDescription: 'Year 7 maths moves from a year-by-year primary list to one Key Stage 3 programme for three years. What changes, and how to keep a child steady.',
  twitterDescription: 'Year 7 maths from the DfE KS3 programme and the 2025 Curriculum and Assessment Review, with worked examples and live classes.',
  pageName: 'Year 7 Maths Tutor Online',
  webPageDescription: 'Live online maths tutoring for Year 7 students in England, built from the DfE key stage 3 programme of study, the Curriculum and Assessment Review and the STA\'s 2027 arrangements.',
  courseDescription: 'Live online maths for Year 7: place value with decimals and negatives, prime factorisation, fraction arithmetic, percentages, algebraic notation, simplifying and substituting, ratio, angles and averages.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Year 7 maths tutor',
  navLinks: [
    { href: '#shift', label: 'Year 6 to Year 7' },
    { href: '#content', label: 'What Year 7 covers' },
    { href: '#dayone', label: 'What schools know' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Year 7 maths &middot; ages 11 to 12',
  h1: 'Year 7 maths tutor online',
  lede: 'In primary school, the national curriculum told schools what to teach in each year. In Year 7 that stops. Key Stage 3 maths is a single programme of study for Years 7, 8 and 9 together, and each secondary school decides what goes in which year. At the same time the maths itself changes character: letters replace boxes, negative numbers are calculated with rather than only counted, ratio gets its own notation, and fractions are worked with in every form. There is no national test until GCSE. This page explains what that shift means for a Year 7 student, what the school already knows on day one, and how we tutor the year, with four worked examples of our own.',
  secondaryCta: { href: '#shift', label: 'What changes in Year 7' },
  wa: 'Hello Modern Age Coders, I would like a free first class with a Year 7 maths tutor.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the DfE KS3 programme and the 2025 review',
  spec: [
    ['Year group', 'Year 7, ages 11 to 12'],
    ['Stage', 'First year of Key Stage 3'],
    ['Programme', 'One KS3 list for Years 7 to 9'],
    ['Order of topics', 'Set by each school'],
    ['National test', 'None until GCSE'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Year 7 maths is the first year of Key Stage 3 in England, for students aged 11 to 12. Unlike primary school, the DfE key stage 3 programme of study covers Years 7 to 9 as one list, so each secondary school chooses its own order; most Year 7 courses consolidate KS2 number and introduce algebraic notation, negative numbers, prime factorisation and ratio. There is no national maths test in Year 7. Modern Age Coders tutors Year 7 maths live online, 1-on-1 or in a group of 15 to 20, through its Middle School Maths course, aligned to your child\'s school scheme. The first class is free, and we are independent of all schools.',

  picks: {
    eyebrow: 'Courses for Year 7',
    h2: 'Three courses for a Year 7 student',
    lede: 'The first follows the core of a Year 7 scheme of work. The second gives algebra extra time, which is where many Year 7s wobble. The third is for students who like to see maths run.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'Y7 / 01', title: 'Middle School Maths', note: 'Pre-algebra, number and geometry for 11 to 14 year olds, matched week by week to your child\'s school topics.' },
      { course: 'algebra-foundations-masterclass', code: 'Y7 / 02', title: 'Algebra Foundations', note: 'Notation, expressions, substitution and first equations, taught slowly enough to stick.' },
      { course: 'maths-through-coding', code: 'Y7 / 03', title: 'Maths Through Coding', note: 'Primes, sequences and negative numbers explored in Python, for ages 10 to 15.' }
    ]
  },

  sections: [
    {
      id: 'shift', tint: 'tint', eyebrow: 'Year 6 to Year 7',
      h2: 'How is Year 7 maths different from Year 6?',
      lede: 'Three things change at once: the curriculum stops being split by year, the content becomes more abstract, and national testing pauses. The table puts Year 6 and Key Stage 3 side by side from the two DfE programmes.',
      body: [
        { kind: 'table', caption: 'Year 6 and Key Stage 3 compared (statements from the DfE KS1 and 2 and KS3 programmes of study; the comparison is ours)', head: ['', 'Year 6 (primary)', 'Key Stage 3 (Years 7 to 9)'], rows: [
          ['How it is written', 'A separate statutory list for Year 6', 'One list for all three years; the school sets the order'],
          ['Number', 'Numbers to 10 000 000; rounding, but not to significant figures', 'Place value for integers of any size; powers and roots; standard form; decimal places and significant figures'],
          ['Algebra', 'Simple formulae and missing numbers', 'Notation such as ab and 3y; simplifying, expanding, rearranging; solving linear equations; straight-line graphs'],
          ['Ratio', 'Informal sharing; pupils "might use the notation a:b"', 'Ratio notation, simplest form, part to part and part to whole; direct and inverse proportion'],
          ['Statistics and probability', 'Pie charts, line graphs and the mean', 'Mean, mode, median and range; the 0 to 1 probability scale; scatter graphs'],
          ['National testing', 'KS2 tests in May', 'None in KS3; schools set their own assessments']
        ] },
        { kind: 'p', html: 'The DfE describes the Key Stage 3 programme as "organised into apparently distinct domains, but pupils should build on key stage 2 and connections across mathematical ideas". The word apparently is doing a lot of work. A Year 7 lesson on algebra is really a lesson on the structure of arithmetic, which is why the programme lists the aim to "use algebra to generalise the structure of arithmetic".' },
        { kind: 'p', html: 'The programme also tells schools how to pace students: "Decisions about progression should be based on the security of pupils\' understanding and their readiness to progress to the next stage." In Year 7 that usually means more consolidation of primary number than parents expect. It is not a sign that the school is going slowly; it is the curriculum working as written.' },
        { kind: 'source', html: 'From the DfE\'s <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">mathematics programmes of study</a> for key stages 1 and 2 and for key stage 3, read on 31 October 2026.' }
      ]
    },
    {
      id: 'content', tint: 'deep', eyebrow: 'What Year 7 covers',
      h2: 'What do students usually learn in Year 7 maths?',
      lede: 'Because the order is the school\'s choice, there is no official Year 7 list. In our experience most Year 7 schemes start with the Key Stage 3 statements that extend primary number, plus first algebra. These are the ones we see most.',
      body: [
        { kind: 'p', html: 'The first working-mathematically aim in the programme is to "consolidate their numerical and mathematical capability from key stage 2 and extend their understanding of the number system and place value to include decimals, fractions, powers and roots". That sentence is a fair summary of most Year 7 autumn terms.' },
        { kind: 'two', mt: true,
          leftH3: 'Number, extended',
          left: [
            'Negative numbers in all four operations: the programme asks for the four operations "applied to integers, decimals, proper and improper fractions, and mixed numbers, all both positive and negative".',
            'Primes, factors and multiples with a new tool, prime factorisation, "including using product notation and the unique factorisation property". Inequality symbols, including "≠", "≤" and "≥", appear too.'
          ],
          rightH3: 'Algebra, begun properly',
          right: [
            'Notation first: "ab in place of a × b" and "3y in place of y + y + y and 3 × y". Then collecting like terms, substituting values and simple equations.',
            'Percentages are redefined with more reach. Students learn to "work with percentages greater than 100%", which is new after primary school.'
          ] },
        { kind: 'p', mt: true, html: 'Some schools also start geometry in Year 7 with angle facts and the properties of shapes, and statistics with averages and charts. If you can, ask the school for its Key Stage 3 scheme of work or topic list; most share one. A tutor who knows the order can teach alongside it instead of against it.' },
        { kind: 'source', html: 'Statutory content quoted from the DfE key stage 3 programme of study (DFE-00179-2013). The typical Year 7 ordering is our own observation, not a DfE requirement.' }
      ]
    },
    {
      id: 'dayone', tint: '', eyebrow: 'What schools know',
      h2: 'What does a secondary school know about my child\'s maths in Year 7?',
      lede: 'More than many parents realise. The Curriculum and Assessment Review notes that secondary schools can see incoming pupils\' detailed key stage 2 results, and the government expects schools to assess from the start of Year 7.',
      body: [
        { kind: 'p', html: 'The Review, published in November 2025, says: "Primary schools can access pupils\' detailed results, including their responses to each question, as can secondary schools for incoming Year 7 students." The STA\'s 2027 arrangements make results available on 6 July to "key stage 3 ( KS3 ) schools with a year 7 intake", the same day primary schools see them.' },
        { kind: 'two', mt: true,
          leftH3: 'Assessment after Year 6',
          left: [
            'There is no national test in Key Stage 3. As the Review puts it, "Since Key Stage 3 assessments were cancelled in 2008, schools have developed and administered their own assessments."',
            'The government\'s response adds that it expects every secondary school to identify gaps "as part of their ongoing formative assessment from the beginning of Year 7 onwards".'
          ],
          rightH3: 'Why transition is bumpy',
          right: [
            'The Review lists three Key Stage 3 problems, including "poor curriculum continuity from Key Stage 2", and says it heard that "the breadth of topics at Key Stage 2 has resulted in significant challenges for primary to secondary transition".',
            'In other words, a wobbly first term in Year 7 maths is common, and it is recognised at national level.'
          ] },
        { kind: 'p', mt: true, html: 'How each school uses this information, including whether and when it sets students for maths, is the school\'s own decision, and we make no claim about any school\'s practice. The government also plans a revised national curriculum for first teaching from September 2028, and says it expects schools to assess progress in maths in Year 8; a child in Year 7 now will meet that next year. Until the revised programme is published, Year 7 follows the 2013 programme described here.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report" rel="noopener" target="_blank">Curriculum and Assessment Review final report</a> and <a class="ag-inline-link" href="https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report-government-response" rel="noopener" target="_blank">government response</a> (November 2025); STA, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/key-stage-2-assessment-and-reporting-arrangements-ara" rel="noopener" target="_blank">2027 KS2 assessment and reporting arrangements</a>.' }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Four Year 7 problems we wrote, solved in full',
      lede: 'Each uses Key Stage 3 content that Year 7 schemes commonly teach. The questions are ours, written for this page.',
      body: [
        { kind: 'two',
          leftH3: '1. Prime factors, HCF and LCM',
          left: [
            '<strong>Question (ours).</strong> One bus leaves every 84 minutes and another every 90 minutes. They leave together at 6 am. When do they next leave together?',
            '<strong>Prime factorise.</strong> 84 = 2 × 2 × 3 × 7 and 90 = 2 × 3 × 3 × 5.',
            '<strong>Lowest common multiple.</strong> Take each prime the most times it appears in either: 2 × 2 × 3 × 3 × 5 × 7 = 1260 minutes.',
            '<strong>Answer.</strong> 1260 minutes is 21 hours, so at 3 am the next day. The highest common factor, 2 × 3 = 6, answers a different question: the largest equal groups both numbers split into.'
          ],
          rightH3: '2. Subtracting a negative',
          right: [
            '<strong>Question (ours).</strong> −7 − (−12).',
            '<strong>Read it as a difference.</strong> How far is it from −12 up to −7 on a number line? That distance is the answer.',
            '<strong>Count.</strong> From −12 to −7 is 5 steps to the right.',
            '<strong>Answer.</strong> 5. Rewriting as −7 + 12 gives the same result, and seeing why the two match is worth more than the rule "two minuses make a plus".'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. Simplify, then substitute',
          left: [
            '<strong>Question (ours).</strong> Simplify 3a + 5b − a + 2b, then find its value when a = 4 and b = −1.',
            '<strong>Collect like terms.</strong> 3a − a = 2a and 5b + 2b = 7b, so the expression is 2a + 7b.',
            '<strong>Substitute.</strong> 2 × 4 + 7 × (−1) = 8 − 7 = 1.',
            '<strong>Check with the original.</strong> 12 + (−5) − 4 + (−2) = 1. Both forms agree, which is what simplifying means: the same value, written more simply.'
          ],
          rightH3: '4. A percentage over 100',
          right: [
            '<strong>Question (ours).</strong> A seedling was 40 cm tall in May and 52 cm tall in July. Write the July height as a percentage of the May height.',
            '<strong>Fraction first.</strong> 52 out of 40 is 52/40 = 1.3.',
            '<strong>Convert.</strong> 1.3 × 100 = 130%.',
            '<strong>Interpret.</strong> 130% of the May height, or an increase of 30%. A percentage above 100 simply means more than the whole you started from.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, answers below).</strong> (1) Write 360 as a product of prime factors. (2) Put in order, smallest first: −0.5, −2, 0.3, negative one quarter. (3) Two thirds plus three quarters minus one sixth. (4) 4 × (−6) − (−10). (5) Simplify 5(x + 3) − 2x. (6) Write five eighths as a decimal. (7) Write 45 as a percentage of 36. <strong>Answers:</strong> (1) 2 × 2 × 2 × 3 × 3 × 5; (2) −2, −0.5, negative one quarter, 0.3; (3) one and one quarter; (4) −14; (5) 3x + 15; (6) 0.625; (7) 125%.' }
      ]
    },
    {
      id: 'tutoring', tint: '', eyebrow: 'Our tutoring',
      h2: 'How does a Year 7 maths tutor help with the move to secondary?',
      lede: 'By finding the primary gaps the Review warns about, teaching the school\'s own Year 7 topics alongside the class, and building algebra on number sense. The steps are ours and change after the first class.',
      body: [
        { kind: 'ol', items: [
          '<strong>A free first class.</strong> The tutor checks fractions, negative numbers and one short algebra task, and asks your child what the class is studying this half term.',
          '<strong>Use the school\'s order.</strong> We ask for the topic list or scheme of work and teach a week or two ahead, so lessons at school feel familiar.',
          '<strong>Repair primary number quietly.</strong> Times tables, fraction arithmetic and long division are revisited inside Year 7 topics, never as a step backwards.',
          '<strong>Algebra as arithmetic with letters.</strong> Every new rule is checked with numbers first, as in example 3 above.',
          '<strong>Talk through misconceptions.</strong> The programme asks teachers to use "discussion to probe and remedy their misconceptions"; a live tutor can do this for one student at a time.',
          '<strong>Homework support, not homework done.</strong> We explain the method on a similar question and let your child do their own.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group or 1-on-1 in Year 7?',
          left: [
            'A group of 15 to 20 Year 7 students suits a child who is broadly coping and likes the energy of a class.',
            '1-on-1 suits a child who has lost confidence since Year 6, whose school order differs from the group, or who is ready for harder problems.'
          ],
          rightH3: 'What we do not promise',
          right: [
            'A particular maths set, a test result or a GCSE grade.',
            'Any link with your child\'s school or the DfE. We are an independent online school, paid only by families.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four signs Year 7 is going well',
    lede: 'We look for each in a short task in class. They are our own markers, not a school or national measure.',
    table: { caption: 'Markers through Year 7 (ours, set against the KS3 programme of study)', head: ['Marker', 'Usually by', 'What the student can do'], rows: [
      ['1. Primary number secure', 'October half term', 'Fractions, decimals and long division without hesitation'],
      ['2. Negatives in all four operations', 'Christmas', 'Adds, subtracts, multiplies and divides with negative numbers and can explain why'],
      ['3. Algebra as language', 'Spring term', 'Uses notation correctly, simplifies, substitutes and solves a one-step or two-step equation'],
      ['4. Connections', 'Summer term', 'Moves between fractions, decimals and percentages, including above 100%, and uses prime factors to solve a problem']
    ] },
    left: { h3: 'Marker one is the transition', ps: [
      'Most Year 7 difficulty is unfinished Year 6 maths showing up in a new setting.',
      'Students who like a challenge may enjoy our <a class="ag-inline-link" href="/ukmt-maths-challenge-tutoring">UKMT maths challenge page</a>.'
    ] },
    right: { h3: 'Marker three sets up Year 8', ps: [
      'Year 8 schemes lean heavily on algebra and proportional reasoning.',
      'Classes can pause in the school holidays.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for eleven and twelve year olds',
    lede: 'Key Stage 3 maths, stretch for keen students, and coding that uses the same ideas.',
    bands: [
      { num: 'I', h3: 'Year 7 maths', sub: 'The core', courses: [
        { code: 'UK / Y71 / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle School Maths', blurb: 'Number, algebra and geometry for 11 to 14.' },
        { code: 'UK / Y71 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'From notation to equations.' },
        { code: 'UK / Y71 / 03', slug: 'ks2-sats-maths-course', title: 'KS2 SATs Maths', blurb: 'For rebuilding unfinished Year 6 number.' }
      ] },
      { num: 'II', h3: 'Stretch', sub: 'For keen students', courses: [
        { code: 'UK / Y72 / 01', slug: 'middle-school-math-competitions-course', title: 'Maths competitions', blurb: 'Problem solving beyond the scheme.' },
        { code: 'UK / Y72 / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Proof-style problems for strong students.' },
        { code: 'UK / Y72 / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Quick mental checks.' }
      ] },
      { num: 'III', h3: 'Maths and code', sub: 'Same thinking', courses: [
        { code: 'UK / Y73 / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python for number and algebra.' },
        { code: 'UK / Y73 / 02', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Games built with coordinates.' },
        { code: 'UK / Y73 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Averages and chance, in depth.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How Year 7 lessons are organised',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Tutors are based in India, and all slots are scheduled in UK time.',
    slots: [
      { time: 'After school', l: 'Before secondary homework piles up.' },
      { time: 'Evening', l: 'After clubs and the bus home.' },
      { time: 'Weekend morning', l: 'Unrushed time for algebra.' }
    ],
    cells: [
      { h3: 'Your school\'s order', p: 'Topics taught in the sequence your child meets them in class.' },
      { h3: 'Numbers before letters', p: 'Every algebra rule tested on numbers first.' },
      { h3: 'Gaps fixed inside topics', p: 'Primary number repaired without going backwards.' },
      { h3: 'Misconceptions talked through', p: 'Students explain, the tutor probes, the error is found.' },
      { h3: 'Opening class is free', p: 'A full lesson at Year 7 level before any payment.' },
      { h3: 'Two formats', p: 'A Year 7 group of 15 to 20, or private 1-on-1.' }
    ]
  },

  projectsH2: 'What students have built in class',
  projectsLede: 'From regular lessons, none graded. More of them in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews written by parents, unchanged.',

  fees: {
    h2: 'Year 7 maths tutor fees',
    lede: 'You pay nothing for the first class. After that it is one monthly fee, lower in a group than for 1-on-1, which begins once you have picked a course and a weekly slot. You can stop whenever you like.',
    free: ['A live Year 7 class', 'Fractions, negatives and algebra checked', 'Book with a phone number'],
    group: ['15 to 20 Year 7 students', 'One tutor through the year', 'Topics in school order', 'A termly note home'],
    one: ['A tutor for one student', 'Matched to the school scheme', 'Good after a shaky Year 6']
  },

  faq: {
    eyebrow: 'Year 7 questions',
    h2: 'What parents ask about Year 7 maths',
    items: [
      { q: 'What maths is taught in Year 7?', a: 'There is no official Year 7 list, because the Key Stage 3 programme covers Years 7 to 9 together and each school sets the order. Most Year 7 courses consolidate primary number and add negative numbers, prime factorisation, fraction arithmetic, percentages and first algebra.' },
      { q: 'Is Year 7 maths harder than Year 6?', a: 'It is more abstract rather than simply harder. Letters, negative numbers and ratio notation are new, and the Curriculum and Assessment Review recognised that moving from primary to secondary maths is often difficult.' },
      { q: 'Is there a test in Year 7 maths?', a: 'There is no national test in Key Stage 3. Schools set their own assessments, which the Review notes they have done since Key Stage 3 national tests were cancelled in 2008.' },
      { q: 'Does my child\'s secondary school get their SATs results?', a: 'Yes. Secondary schools with a Year 7 intake can access results from early July, and the Review notes they can see detailed results, including responses to each question.' },
      { q: 'How are Year 7 students put into maths sets?', a: 'That is each school\'s decision, and practice varies. Ask your child\'s school how and when it groups students for maths; we make no claim about any particular school.' },
      { q: 'My child struggled with Year 6 maths. Will Year 7 be a problem?', a: 'Not if the gaps are found early. The KS3 programme expects schools to build on Key Stage 2, and a tutor can close fraction, decimal and times tables gaps inside the new Year 7 topics.' },
      { q: 'Should my child use a calculator in Year 7?', a: 'Only when the teacher asks. Key Stage 3 develops written and mental methods alongside calculators, and secure arithmetic makes algebra far easier.' },
      { q: 'How can I help with Year 7 maths homework?', a: 'Ask your child to explain the method aloud before writing, and check one answer by putting the numbers back in. You do not need to know the method yourself to ask good questions.' },
      { q: 'When can Year 7 lessons be scheduled?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are in UK time.' },
      { q: 'Are you connected with my child\'s secondary school?', a: 'No. We run separately from every school. Our tutors teach to the published Key Stage 3 programme and your child\'s own scheme, but have no tie to any school or to the DfE.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More secondary maths',
    h2: 'Related pages for Year 7 families',
    lede: 'Before Year 7, alongside it, and beyond.',
    items: [
      { href: '/ks3-maths-tuition-online', label: 'KS3 maths tuition', p: 'Years 7 to 9 as one stage.' },
      { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs maths papers', p: 'The results your school receives.' },
      { href: '/online-maths-tuition-for-teens-in-uk', label: 'Maths tuition for teens', p: 'Our wider UK offer for ages 11 to 18.' },
      { href: '/junior-mathematical-olympiad-preparation', label: 'Junior Mathematical Olympiad', p: 'For strong problem solvers.' },
      { href: '/ks3-computing-tuition-online', label: 'KS3 computing', p: 'Coding at the same stage.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free Year 7 maths class',
    lede: 'Leave a phone number and we will call at a convenient UK time. In the class the tutor tries fractions, negative numbers and a little algebra, asks what your child is studying at school, and suggests where to start.',
    readFirst: 'Want the detail first? The <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">Middle School Maths course</a> lists its full syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the way our lessons work.',
    note: 'WhatsApp gets the fastest answer and is free from UK mobiles. The reply comes from our India office, on a +91 number.',
    formNote: 'Nothing to pay, nothing to sign. We send one reply with a suggested time.'
  },

  footer: {
    cols: [
      { h4: 'Secondary maths', links: [
        { href: '/ks3-maths-tuition-online', label: 'KS3 maths' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths' },
        { href: '/ukmt-maths-challenge-tutoring', label: 'UKMT challenges' },
        { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs papers' }
      ] },
      { h4: 'Beyond maths', links: [
        { href: '/ks3-computing-tuition-online', label: 'KS3 computing' },
        { href: '/online-maths-tuition-for-teens-in-uk', label: 'Teen maths tuition' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Year 7 maths, live online in UK time'
  },

  personalityCss: `
.ag-root.ag-gaf .ag-hero h1 { letter-spacing: -0.018em; font-weight: 690; }
.ag-root.ag-gaf .ag-capsule { border-left-width: 5px; border-radius: 12px; }
.ag-root.ag-gaf .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-gaf .ag-table caption { text-align: left; font-weight: 620; }
.ag-root.ag-gaf .ag-table th:first-child { width: 19%; }
.ag-root.ag-gaf .ag-steps li { margin-bottom: 9px; }
`,

  dossier: {
    curriculumAuthority: 'England, national curriculum mathematics, key stage 3 programme of study (DFE-00179-2013), one programme for Years 7 to 9: domains that build on key stage 2; progression decided by security of understanding; consolidate KS2 and extend place value to decimals, fractions, powers and roots; algebra generalises arithmetic; prime factorisation with product notation and the unique factorisation property; four operations with positive and negative fractions and integers; percentages above 100%; algebraic notation ab and 3y; inequality symbols; discussion to remedy misconceptions. KS1 and 2 programme Year 6 statements for comparison. Curriculum and Assessment Review final report (November 2025): KS3 challenges including poor continuity from KS2; KS3 assessments cancelled in 2008; secondary schools see detailed KS2 results for incoming Year 7; breadth of KS2 topics and transition. Government response: formative assessment from the beginning of Year 7; some pupils need further support in KS3. STA 2027 ARA: results to KS3 schools with a Year 7 intake on 6 July.',
    localProject: 'One programme for three years, ordered by the school. A Year 7 door built on the KS3 programme of study: a Year 6 against KS3 comparison table drawn from both DfE programmes, the progression and connections sentences, and the KS3 statements most Year 7 schemes start with (negatives, prime factorisation, notation, percentages above 100%). A section on what a secondary school knows on day one (detailed KS2 results, own assessments since 2008, formative assessment from the start of Year 7) and the Review on transition. Four original worked examples (buses every 84 and 90 minutes, minus 7 minus minus 12, 3a + 5b minus a + 2b, a seedling at 130%) and an original seven-item practice set. Lesson family: a secondary year door.',
    requiredMentions: [
      'organised into apparently distinct domains, but pupils should build on key stage 2 and connections across mathematical ideas',
      'Decisions about progression should be based on the security of pupils\' understanding and their readiness to progress to the next stage.',
      'use algebra to generalise the structure of arithmetic',
      'including using product notation and the unique factorisation property',
      'the breadth of topics at Key Stage 2 has resulted in significant challenges for primary to secondary transition',
      'Since Key Stage 3 assessments were cancelled in 2008, schools have developed and administered their own assessments.',
      'Primary schools can access pupils\' detailed results, including their responses to each question, as can secondary schools for incoming Year 7 students.',
      'poor curriculum continuity from Key Stage 2',
      'as part of their ongoing formative assessment from the beginning of Year 7 onwards'
    ],
    sources: [
      { claim: 'DfE, Mathematics programmes of study: key stage 3: structure, progression, working mathematically, number and algebra content.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study' },
      { claim: 'Curriculum and Assessment Review final report (November 2025): KS3 challenges, cancelled KS3 assessments, KS2 data for secondary schools, transition.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report' },
      { claim: 'Government response to the Review (November 2025): formative assessment from the beginning of Year 7; revised curriculum from September 2028; maths assessment in Year 8.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report-government-response' },
      { claim: 'STA, 2027 KS2 assessment and reporting arrangements: KS2 results to KS3 schools with a Year 7 intake.', url: 'https://www.gov.uk/government/publications/key-stage-2-assessment-and-reporting-arrangements-ara' }
    ],
    rejectedClaims: [
      'An official Year 7 topic list: none exists, as KS3 is one programme; the typical ordering is labelled as our observation.',
      'How or when schools set for maths in Year 7: no primary source; practice varies; no claim made.',
      'Any national Year 7 test or result statistic: none exists.',
      'Any promise of a set, test result or GCSE grade: declined.'
    ]
  }
};
