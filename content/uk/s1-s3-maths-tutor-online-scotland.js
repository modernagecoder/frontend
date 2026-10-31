'use strict';
// S1 to S3 maths tutor online, Scotland (ag- maths door, Broad General Education; UK and US exams cluster Phase 2,
// row UK044). Sources, read raw on 31 October 2026 (curl; PDF text through the scratchpad pdftext helper; raw copies in
// keyword-research-2026-09/uk-us-gap/src/s1-s3-maths-tutor-online-scotland/):
//  - Education Scotland, Benchmarks: Numeracy and Mathematics (June 2017), education.gov.scot/media/s5edgtvx/
//    numeracyandmathematicsbenchmarks.pdf. Verbatim: "learners should have achieved relevant Fourth level Experiences and
//    Outcomes before embarking on the National 5 qualifications"; "Schools should take careful account of this when
//    options for S4 are being agreed."; "They will help teachers ensure that learners make appropriate choices and are
//    presented at an appropriate level for National Qualifications in the senior phase."; "This can help avoid excessive
//    workload for teachers and unnecessary assessments for learners." Third level: "Uses multiplication and division
//    facts to the 12th multiplication table."; "Identifies prime numbers to 100 and can explain method used."; "Writes a
//    given number as a product of its prime factors."; "Solves linear equations, for example, ax ± b = c"; "Generates
//    number sequences from a given rule, for example, T = 4n + 6."; "Identifies corresponding, alternate and vertically
//    opposite angles"; "Uses bearings in a navigational context"; "Uses the probability scale of 0 to 1"; "Rounds decimal
//    fractions to three decimal places." Fourth level: "Rounds answers to a specified significant figure."; "Demonstrates
//    the impact of inaccuracy and error, for example, the impact of rounding an answer before the final step in a
//    multi-step calculation."; "235 mm ± 1 mm"; "express numbers in scientific notation"; "Calculates the percentage
//    increase or decrease of a value."; "Determines a general formula for the nth term to describe a sequence and uses it
//    to solve related problems, linear examples only."; "Calculates the gradient of lines in a coordinate diagram.";
//    "ax ± b = cx ± d"; "Solves linear inequalities"; "Factorises expressions with a numeric common factor.";
//    "Calculates the length of any side of a right-angled triangle using the Theorem of Pythagoras."; "Calculates the
//    size of an angle in a right-angled triangle using trigonometry."; "Calculates the mean, median, mode and range of a
//    data set."; "Demonstrates understanding of the impact of truncation and premature rounding."
//  - Scottish Government, Achievement of CfE Levels 2024-25 (published 9 December 2025), chapter 1, table 2: S3 numeracy,
//    third level or better 91 per cent, fourth level 68 per cent; "The proportions of S3 pupils achieving fourth level
//    were at their highest ever across all organisers, and have increased markedly over the last three years. This
//    increase may be partially due to improvements in assessment and recording at level four."
//  - National Standardised Assessments for Scotland, parents page: S3 takes one numeracy assessment; "There is no time
//    limit."; "on average P4/P7/S3 learners complete within 40 minutes"; "there is no pass or fail".
//  - Education Scotland, Experiences and outcomes page: "the curriculum from the early years to the end of S3 as a whole".
// Our own: the Third-to-Fourth comparison wording, the four worked examples (360 as prime factors, 5x - 7 = 2x + 11,
// a premature-rounding cylinder, a 7 and 9 right-angled triangle), the practice set and the S2 checklist.
// Spine: S3 is where the S4 course is decided, and the Benchmarks say Fourth level comes before National 5.
// Lesson family: a Scottish lower secondary (BGE) maths door, distinct from England's KS3 page and from the National 5
// page (which covers the exam papers themselves).

const T = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'S1 TO S3 MATHS', blurb: 'Fourth level before National 5: how Third and Fourth level maths in S1 to S3 shape the S4 course choice.' },
  slug: 's1-s3-maths-tutor-online-scotland',
  code: 'sss',
  accent: '#516541',
  accentRationale: 'S1 to S3 maths: a moss green (#516541, 6.03:1 on #FBF8F2), earthier than the primary teal and well apart from the National 5 and Higher accents',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'S1 to S3 maths tutor online',
  title: 'S1 to S3 Maths Tutor Online, Scotland | Third and Fourth Level',
  description: 'S1 to S3 maths tutor online in Scotland: what Third and Fourth level expect in the Broad General Education, why it decides the S4 course, and live lessons.',
  ogDescription: 'Education Scotland says Fourth level should come before National 5. What S1 to S3 maths covers, level by level, and how to close the gaps in time.',
  twitterDescription: 'S1, S2 and S3 maths in Scotland: Third and Fourth level, the S3 snapshot, and live lessons in a batch or 1-on-1.',
  pageName: 'S1 to S3 Maths Tutor Online, Scotland',
  webPageDescription: 'Live online maths lessons for S1 to S3 pupils in Scotland, built from Education Scotland\'s Third and Fourth level Benchmarks for numeracy and mathematics.',
  courseDescription: 'Live online lower secondary maths for Scotland: integers, primes and powers, fractions and percentages, ratio, algebra and equations, sequences and gradient, Pythagoras and trigonometry, circles, statistics and probability.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'S1 to S3 maths',
  navLinks: [
    { href: '#bge', label: 'Third and Fourth' },
    { href: '#s3', label: 'The S3 decision' },
    { href: '#jump', label: 'What changes' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Scotland &middot; Broad General Education &middot; S1, S2 and S3',
  h1: 'S1 to S3 maths tutor online in Scotland',
  lede: 'The three years from S1 to S3 have no external maths exam, which makes them easy to underestimate. Yet they end with a decision that shapes the rest of secondary school: which maths course a pupil takes in S4. Education Scotland\'s Benchmarks are plain about the order. Pupils "should have achieved relevant Fourth level Experiences and Outcomes before embarking on the National 5 qualifications", and schools are told to take careful account of this when S4 options are agreed. So the Broad General Education is not a waiting room before National 5. It is where Third level is secured and Fourth level is reached, and where any gap in algebra, rounding or fractions becomes visible before it costs anything.',
  secondaryCta: { href: '#s3', label: 'Why S3 matters' },
  wa: 'Hello Modern Age Coders, I would like a free first maths class for an S1 to S3 pupil in Scotland.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Mapped to the Third and Fourth level Benchmarks',
  spec: [
    ['Stage', 'S1 to S3, Broad General Education'],
    ['Levels', 'Third and Fourth'],
    ['External exam', 'None before S4'],
    ['S3 snapshot', 'Teacher judgement, plus one online check'],
    ['Leads to', 'S4 maths course choice'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'S1 to S3 maths in Scotland is the Broad General Education phase of Curriculum for Excellence, where pupils work through Third and Fourth level numeracy and mathematics before choosing an S4 course. Education Scotland\'s Benchmarks say pupils should have achieved relevant Fourth level outcomes before starting National 5, and in 2024 to 2025 the Scottish Government reported 91 per cent of S3 pupils at Third level or better in numeracy and 68 per cent at Fourth level. Modern Age Coders teaches S1 to S3 maths live online, either 1-on-1 or in a class of 15 to 20, through its Middle School Mathematics course. There is no charge for the opening class, and we have no tie to any school or council.',

  picks: {
    eyebrow: 'Courses for S1 to S3',
    h2: 'Three courses for lower secondary maths in Scotland',
    lede: 'Middle School Mathematics covers the Third and Fourth level ground. The National 5 course is the next step once Fourth level is secure, and High School Mathematics suits a pupil racing ahead.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'BGE / 01', title: 'Middle School Mathematics', note: 'Integers, primes, fractions, ratio, equations, sequences, angles and data: Third level made solid, Fourth level reached.' },
      { course: 'national-5-and-higher-maths-course', code: 'BGE / 02', title: 'National 5 and Higher Maths', note: 'For an S3 pupil with Fourth level secure who is ready to start the National 5 skills.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'BGE / 03', title: 'High School Mathematics', note: 'Algebra and functions in more depth, for pupils working beyond Fourth level.' }
    ]
  },

  sections: [
    {
      id: 'bge', tint: 'tint', eyebrow: 'Third and Fourth',
      h2: 'What maths do pupils learn in S1 to S3?',
      lede: 'Third and Fourth level, organised under the same headings as primary: number, money and measure; shape, position and movement; and information handling. The Benchmarks list what achieving each level looks like.',
      body: [
        { kind: 'p', html: 'Education Scotland describes its Experiences and Outcomes as a single journey, letting families see "the curriculum from the early years to the end of S3 as a whole". Most pupils arrive in S1 having achieved Second level and spend S1 and S2 securing Third level. Fourth level is the stretch, overlapping in difficulty with the start of National 5, and many schools teach it through S3.' },
        { kind: 'table', mt: true, caption: 'Selected Benchmark statements for S1 to S3 maths (Education Scotland, June 2017)', head: ['Organiser', 'Third level, in part', 'Fourth level, in part'], rows: [
          ['Number', 'Tables facts to the 12th table; integers in all four operations; decimals to three places', 'Order of operations with brackets; multi-step problems; scientific notation'],
          ['Multiples and powers', 'Lowest common multiple, highest common factor, primes to 100, a number as a product of prime factors; powers such as 2 to the 4th', 'Square roots with positive and negative values; roots as the inverse of powers'],
          ['Fractions and percentages', 'Converting between forms; adding fractions with different denominators; ratio and simplifying it', 'Percentage increase and decrease; fractions and mixed numbers in calculations; proportion'],
          ['Algebra', 'Collecting like terms; solving equations of the form ax &plusmn; b = c; sequences from a rule such as T = 4n + 6', 'Expanding brackets; equations of the form ax &plusmn; b = cx &plusmn; d; inequalities; the nth term of a linear sequence; gradient'],
          ['Shape and measure', 'Corresponding, alternate and vertically opposite angles; bearings and scale drawings; compound areas and volumes', 'Pythagoras; trigonometry in right-angled triangles; circumference and area of a circle; prisms and cylinders'],
          ['Data and chance', 'Probability on a scale of 0 to 1; judging whether information is misleading; pie charts and compound bar graphs', 'Mean, median, mode and range; correlation; choosing and justifying a diagram']
        ] },
        { kind: 'p', html: 'The Fourth level column will look familiar to anyone who has seen a National 5 paper: Pythagoras, trigonometry, gradient and the order of operations all reappear there. That is the point of the Benchmarks\' advice. A pupil who reaches S4 with Fourth level secure meets National 5 as a deepening of known ideas; a pupil who reaches S4 at Third level meets most of it for the first time, in a single year with an exam at the end.' },
        { kind: 'source', html: 'The Third and Fourth level pages of Education Scotland\'s <a class="ag-inline-link" href="https://education.gov.scot/media/s5edgtvx/numeracyandmathematicsbenchmarks.pdf" rel="noopener" target="_blank">numeracy and mathematics Benchmarks</a>, read on 31 October 2026. The statements are selected and shortened; the document lists more under each organiser, including financial statements we have left out here.' }
      ]
    },
    {
      id: 's3', tint: 'deep', eyebrow: 'The S3 decision',
      h2: 'Why does S3 maths decide the S4 course?',
      lede: 'Because the Benchmarks link presentation for National 5 to Fourth level, and schools use teacher judgement of the level, gathered across S1 to S3, when S4 options are agreed. There is no S3 exam to pass; there is a body of evidence that builds up over three years.',
      body: [
        { kind: 'p', html: 'The relevant passage in the Benchmarks sits in its guidance for secondary teachers. Benchmarks "will help teachers ensure that learners make appropriate choices and are presented at an appropriate level for National Qualifications in the senior phase", which "can help avoid excessive workload for teachers and unnecessary assessments for learners". It then gives the example that matters most for maths: pupils "should have achieved relevant Fourth level Experiences and Outcomes before embarking on the National 5 qualifications", adding that "Schools should take careful account of this when options for S4 are being agreed."' },
        { kind: 'table', mt: true, caption: 'S3 numeracy judgements for the 2024 to 2025 school year (gov.scot statistics, 9 December 2025)', head: ['Measure', 'Per cent of S3 pupils'], rows: [
          ['Third level or better in numeracy', '91'],
          ['Fourth level in numeracy', '68']
        ] },
        { kind: 'p', html: 'The statistics publication notes that the share of S3 pupils at Fourth level was "at their highest ever across all organisers" and had "increased markedly over the last three years", and adds a caution in its own words: "This increase may be partially due to improvements in assessment and recording at level four." On the figures as published, roughly one S3 pupil in three had not been judged at Fourth level in numeracy in 2024 to 2025.' },
        { kind: 'two', mt: true,
          leftH3: 'The S3 online assessment',
          left: [
            'S3 pupils also take one numeracy assessment in the National Standardised Assessments, once in the year. Its website states that nobody passes or fails it, that it is untimed, and that S3 learners typically finish inside 40 minutes.',
            'It gives the teacher diagnostic information. It is not an S4 entry test, and there are no S3 past papers for it.'
          ],
          rightH3: 'What a parent can ask',
          right: [
            'Which level is my child working at in maths, and which organisers are not yet secure?',
            'Which S4 maths course is the school expecting, and what would need to change by spring for a different one? Those two questions tell you more than any practice paper.'
          ] },
        { kind: 'source', html: 'Sources: Education Scotland Benchmarks, page 3; the government\'s <a class="ag-inline-link" href="https://www.gov.scot/publications/achievement-of-curriculum-for-excellence-cfe-levels-2024-25/pages/chapter-1-achievement-of-cfe-levels-at-scotland-level/" rel="noopener" target="_blank">CfE levels statistics for 2024 to 2025</a>; <a class="ag-inline-link" href="https://standardisedassessment.gov.scot/parents-and-carers/" rel="noopener" target="_blank">National Standardised Assessments, parents and carers</a>. Read on 31 October 2026.' }
      ]
    },
    {
      id: 'jump', tint: '', eyebrow: 'What changes',
      h2: 'What is the difference between Third and Fourth level maths?',
      lede: 'Fourth level asks for the same ideas with fewer supports: rounding to significant figures rather than decimal places, unknowns on both sides of an equation, a formula for a sequence rather than a rule to follow, and right-angled triangles solved with Pythagoras and trigonometry.',
      body: [
        { kind: 'table', caption: 'The same organiser at two levels (our summary of the Benchmarks)', head: ['Idea', 'Third level asks a pupil to', 'Fourth level asks a pupil to'], rows: [
          ['Rounding', 'Round decimals to three places and estimate routinely', 'Round to a stated number of significant figures and show the effect of rounding too early'],
          ['Equations', 'Solve ax &plusmn; b = c', 'Solve ax &plusmn; b = cx &plusmn; d, with brackets, and solve inequalities'],
          ['Sequences', 'Generate terms from a given rule', 'Find the nth term formula and use it'],
          ['Triangles', 'Find missing angles with angle facts', 'Find sides with Pythagoras, and sides and angles with trigonometry'],
          ['Percentages', 'Convert and calculate with and without a calculator', 'Find percentage increase or decrease and choose the most efficient form'],
          ['Accuracy', 'Choose appropriate units', 'Work within a tolerance such as 235 mm &plusmn; 1 mm']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Rounding becomes a skill', p: 'The Fourth level statement about "the impact of rounding an answer before the final step in a multi-step calculation" is the same habit National 5 markers look for. We teach it in S2.' },
          { h3: 'Algebra carries the load', p: 'Unknowns on both sides, brackets and inequalities are where the gap between levels is widest. We spend the most time here.' },
          { h3: 'Triangles open up', p: 'Pythagoras and trigonometry arrive at Fourth level. A calculator is needed, so we also teach which buttons, in which order, and how to check.' }
        ] },
        { kind: 'p', mt: true, html: 'Families comparing with England may find our <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3 maths page</a> useful: much of the content is shared, but Scotland judges it by level rather than year group, and the S4 choice follows from that judgement.' }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Four S1 to S3 maths examples, step by step',
      lede: 'All four are ours, written for Third and Fourth level. They show working the way a teacher in Scotland would want to read it.',
      body: [
        { kind: 'two',
          leftH3: '1. Product of prime factors (Third level)',
          left: [
            '<strong>Question (ours).</strong> Write 360 as a product of its prime factors.',
            '<strong>Divide by primes.</strong> 360 &divide; 2 = 180, &divide; 2 = 90, &divide; 2 = 45, &divide; 3 = 15, &divide; 3 = 5, and 5 is prime.',
            '<strong>Collect.</strong> 360 = 2 &times; 2 &times; 2 &times; 3 &times; 3 &times; 5 = 2<sup>3</sup> &times; 3<sup>2</sup> &times; 5.',
            '<strong>Check.</strong> 8 &times; 9 = 72 and 72 &times; 5 = 360. This also prepares the powers notation that Third level introduces.'
          ],
          rightH3: '2. Unknowns on both sides (Fourth level)',
          right: [
            '<strong>Question (ours).</strong> Solve 5x &minus; 7 = 2x + 11.',
            '<strong>Gather x.</strong> Subtract 2x from both sides: 3x &minus; 7 = 11.',
            '<strong>Gather numbers.</strong> Add 7 to both sides: 3x = 18.',
            '<strong>Solve and check.</strong> x = 6. Left side 30 &minus; 7 = 23, right side 12 + 11 = 23. Equal, so the solution is right.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. Premature rounding (Fourth level)',
          left: [
            '<strong>Question (ours).</strong> A cylinder has radius 2.36 cm and height 5 cm. Find its volume to 3 significant figures.',
            '<strong>Keep full accuracy.</strong> V = &pi; &times; 2.36<sup>2</sup> &times; 5 = 87.487&hellip; so V = 87.5 cm<sup>3</sup>.',
            '<strong>See the error.</strong> Rounding the radius to 2.4 first gives about 90.5 cm<sup>3</sup>, three whole units out.',
            '<strong>The lesson.</strong> Round once, at the end, exactly as the Fourth level Benchmark on truncation and premature rounding asks.'
          ],
          rightH3: '4. Pythagoras and trigonometry (Fourth level)',
          right: [
            '<strong>Question (ours).</strong> A right-angled triangle has shorter sides 7 cm and 9 cm. Find the longest side and the smaller acute angle.',
            '<strong>Pythagoras.</strong> 7<sup>2</sup> + 9<sup>2</sup> = 49 + 81 = 130, so the hypotenuse is &radic;130 = 11.4 cm to 3 significant figures.',
            '<strong>Trigonometry.</strong> The smaller angle is opposite the 7 cm side: tan&nbsp;&theta; = 7 &divide; 9, so &theta; = 37.9&deg; to 1 decimal place.',
            '<strong>Reasonableness.</strong> The hypotenuse is longer than 9 and shorter than 7 + 9. The angle is under 45&deg; because 7 is less than 9.'
          ] },
        { kind: 'p', mt: true, html: '<strong>An S3 practice set (ours, with answers).</strong> (1) Find the highest common factor and lowest common multiple of 18 and 24. (2) Simplify 3a + 5b &minus; a + 2b. (3) Expand and simplify 4(2x &minus; 3) &minus; 5x. (4) Find the nth term of 7, 11, 15, 19. (5) Increase 240 by 15 per cent. (6) Write 0.00052 in scientific notation. (7) Find the mean and range of 4, 9, 6, 11, 5. (8) Solve 2x + 3 &lt; 15. <strong>Answers:</strong> (1) 6 and 72; (2) 2a + 7b; (3) 3x &minus; 12; (4) 4n + 3; (5) 276; (6) 5.2 &times; 10<sup>&minus;4</sup>; (7) mean 7, range 7; (8) x &lt; 6.' },
        { kind: 'p', html: 'None of these comes from an assessment; there are no S3 past papers in Scotland. Questions 3, 4, 6 and 8 sit at Fourth level and are a fair, if rough, signal of readiness for the National 5 course.' }
      ]
    },
    {
      id: 'classes', tint: '', eyebrow: 'Our lessons',
      h2: 'How does an online maths tutor help in S1 to S3?',
      lede: 'By finding which organisers are secure, closing the gaps in a planned order, and reaching Fourth level with time to spare before the S4 options are set.',
      body: [
        { kind: 'ol', items: [
          '<strong>A free first class.</strong> A short set of Third and Fourth level problems, worked aloud, so the teacher can see method as well as answers. You get a plain account of the level and the gaps.',
          '<strong>Algebra first if it is weak.</strong> Equations, brackets and sequences carry most of Fourth level and nearly all of National 5, so they come first when they are shaky.',
          '<strong>Accuracy habits from S2.</strong> Significant figures, rounding once at the end, units every time and an estimate before each calculation.',
          '<strong>Calculator and non-calculator side by side.</strong> Fractions and percentages by hand; trigonometry and circles with a calculator, checked by estimation.',
          '<strong>A short progress note.</strong> After each block, a summary in level language your child\'s maths teacher will recognise, useful for the S3 options conversation.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Batch or one teacher to one pupil?',
          left: [
            'A batch of 15 to 20 pupils working at one level suits a pupil who is broadly on track and wants steady practice with peers.',
            '1-on-1 suits a pupil with a specific gap, often algebra or fractions, or one aiming to move from Third to Fourth level within a term.'
          ],
          rightH3: 'What we will not claim',
          right: [
            'That lessons guarantee a particular S4 course. The school decides presentation, and the level is the teacher\'s judgement.',
            'Any connection with a school, a council, Education Scotland or Qualifications Scotland. We are independent and teach alongside school, not instead of it.'
          ] },
        { kind: 'p', mt: true, html: 'Once the S4 course is set, <a class="ag-inline-link" href="/national-5-maths-tuition-online">our National 5 Maths page</a> covers the two exam papers, and <a class="ag-inline-link" href="/national-5-vs-higher-maths">National 5 vs Higher Maths</a> compares the next two steps. Pupils who enjoy hard problems may like <a class="ag-inline-link" href="/scottish-mathematical-challenge-practice">the Scottish Mathematical Challenge</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four rungs from S1 to the S4 choice',
    lede: 'Each rung is a set of things a pupil can do unaided, in the order we usually teach them.',
    table: { caption: 'Our progression for S1 to S3 maths', head: ['Rung', 'Usually by', 'What a pupil can show'], rows: [
      ['1. Second level secure', 'Start of S1', 'Decimals, fractions and percentages, order of operations, 24 hour time'],
      ['2. Third level number', 'S1 to S2', 'Integers, primes and prime factors, powers, ratio, equations of the form ax &plusmn; b = c'],
      ['3. Third level achieved', 'End of S2', 'Angles and bearings, sequences from a rule, probability, compound area and volume'],
      ['4. Fourth level reached', 'During S3', 'Brackets and both-sides equations, nth term, gradient, Pythagoras, trigonometry, significant figures']
    ] },
    left: { h3: 'Rung two is the hinge', ps: [
      'Negative numbers and prime factors look simple and cause errors for years if left loose.',
      'Pupils who like logic may enjoy <a class="ag-inline-link" href="/coding-roadmap">the coding roadmap</a>, where the same precision is needed.'
    ] },
    right: { h3: 'Rung four meets National 5', ps: [
      'Every item on rung four reappears in the National 5 course.',
      'We slow down over the summer and pick up again in August.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for S1 to S3',
    lede: 'Grouped by purpose. The first class settles the starting point.',
    bands: [
      { num: 'I', h3: 'Third and Fourth level', sub: 'The BGE core', courses: [
        { code: 'UK / BG1 / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle School Mathematics', blurb: 'Number, algebra, shape and data through Fourth level.' },
        { code: 'UK / BG1 / 02', slug: 'gcse-mathematics-mastery', title: 'GCSE Mathematics', blurb: 'Overlapping content, useful for families moving between systems.' },
        { code: 'UK / BG1 / 03', slug: 'mental-maths-mastery-kids', title: 'Mental Maths', blurb: 'Quick, secure number facts for S1 pupils who need them.' }
      ] },
      { num: 'II', h3: 'Towards S4', sub: 'Beyond Fourth level', courses: [
        { code: 'UK / BG2 / 01', slug: 'national-5-and-higher-maths-course', title: 'National 5 and Higher', blurb: 'The next course, once Fourth level is secure.' },
        { code: 'UK / BG2 / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High School Mathematics', blurb: 'Deeper algebra and functions.' },
        { code: 'UK / BG2 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For pupils who enjoy data and chance.' }
      ] },
      { num: 'III', h3: 'Maths with code', sub: 'For curious pupils', courses: [
        { code: 'UK / BG3 / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Sequences, primes and graphs tested in Python.' },
        { code: 'UK / BG3 / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Problem solving well beyond the curriculum.' },
        { code: 'UK / BG3 / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A first programming language, for S2 and S3.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'When S1 to S3 lessons run',
    lede: T + ' Our teaching team works from India; even so, each slot is quoted to Scottish families in UK time.',
    slots: [
      { time: 'After school', l: 'The usual choice in S1 to S3.' },
      { time: 'Evening', l: 'After clubs, sport or homework.' },
      { time: 'Weekend', l: 'Long enough for a full topic and its practice.' }
    ],
    cells: [
      { h3: 'Placed by level', p: 'Third or Fourth level, judged in the free class, not assumed from the year.' },
      { h3: 'Algebra weighted', p: 'Most time goes where the jump between levels is largest.' },
      { h3: 'Accuracy habits', p: 'Significant figures and rounding once, practised until automatic.' },
      { h3: 'Both modes', p: 'Work by hand and with a calculator, each checked by estimation.' },
      { h3: 'Progress notes', p: 'A short summary after each block, for the S3 options discussion.' },
      { h3: '15 to 20 or 1-on-1', p: 'A steady group, or one pupil with one teacher.' }
    ]
  },

  projectsH2: 'What our secondary students made',
  projectsLede: 'Pieces from regular lessons, none of them marked. <a class="ag-inline-link" href="/student-labs">Student labs</a> has more.',
  reviewsLede: 'Reviews from parents on Google, exactly as written.',

  fees: {
    h2: 'Fees for S1 to S3 maths',
    lede: 'One free class first. Then a monthly fee, lower in a group and higher for 1-on-1, charged only after a course and a weekly slot are agreed. No contract and no deposit.',
    free: ['Third and Fourth level problems', 'An honest note on the gaps', 'Only a phone number to book'],
    group: ['15 to 20 pupils at one level', 'The same teacher across the term', 'Algebra and accuracy every week', 'Progress notes after each block'],
    one: ['One teacher, one pupil', 'Organiser-by-organiser plan', 'Suits a push from Third to Fourth level']
  },

  faq: {
    eyebrow: 'S1 to S3 questions',
    h2: 'What families ask about S1 to S3 maths',
    items: [
      { q: 'Which CfE level is expected by the end of S3?', a: 'The Scottish Government reports S3 pupils at Third level or better and at Fourth level. For 2024 to 2025 it put 91 per cent of S3 pupils at Third level or better in numeracy, and 68 per cent at Fourth.' },
      { q: 'Do you need Fourth level to do National 5 Maths?', a: 'Education Scotland\'s Benchmarks say pupils should have achieved relevant Fourth level outcomes before starting National 5, and that schools should take careful account of this when S4 options are agreed. The final decision rests with the school.' },
      { q: 'Are there S3 maths past papers?', a: 'No national ones. There is no S3 maths exam in Scotland. Teachers judge the level from work across the year, and the S3 standardised assessment has no pass or fail.' },
      { q: 'What is the difference between Third and Fourth level maths?', a: 'Fourth level adds significant figures, equations with unknowns on both sides, the nth term, gradient, Pythagoras and trigonometry. Third level covers primes, powers, ratio, simpler equations and angle facts.' },
      { q: 'What is the Broad General Education?', a: 'It is the phase of Curriculum for Excellence from the early years to the end of S3. In maths, S1 to S3 is where Third and Fourth level are taught before the senior phase.' },
      { q: 'How long is the S3 numeracy assessment?', a: 'It is untimed. According to the assessment website, S3 learners on average finish inside 40 minutes, and no score counts as a fail.' },
      { q: 'Is S1 to S3 maths the same as KS3?', a: 'The content overlaps a great deal, but Scotland describes it by level rather than by year, and the end of S3 feeds the choice of S4 course rather than a GCSE tier.' },
      { q: 'When are lessons held?', a: T + ' All times are given in UK time.' },
      { q: 'Which course should an S2 pupil start?', a: 'Usually Middle School Mathematics, at Third or Fourth level depending on the free first class. A pupil with Fourth level secure may move straight on to the National 5 course.' },
      { q: 'Are you connected with my child\'s school?', a: 'No. We run our own live online classes and have no link to any school, council, Education Scotland or Qualifications Scotland.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More for Scottish pupils',
    h2: 'Where S1 to S3 maths leads',
    lede: 'The senior phase courses, and puzzles for keen pupils.',
    items: [
      { href: '/national-5-maths-tuition-online', label: 'National 5 Maths tuition', p: 'The S4 course most pupils move to after Fourth level.' },
      { href: '/national-5-vs-higher-maths', label: 'National 5 vs Higher Maths', p: 'The two senior steps compared.' },
      { href: '/higher-maths-tuition-online', label: 'Higher Maths tuition', p: 'Where the senior phase leads in S5.' },
      { href: '/scottish-mathematical-challenge-practice', label: 'Scottish Mathematical Challenge', p: 'Competition problems for able pupils.' },
      { href: '/maths-tutor-cost-scotland', label: 'Maths tutor cost in Scotland', p: 'Hourly rates, formats and questions to ask a tutor.' },
      { href: '/coding-and-ai-classes-in-scotland', label: 'Coding and AI in Scotland', p: 'The Scottish system and our coding classes.' }
    ]
  },

  start: {
    h2: 'Book a free S1 to S3 maths class',
    lede: 'Send a phone number and we will call at a UK time that works for you. The class is a short look at Third and Fourth level problems, followed by a plain account of where your child stands.',
    readFirst: 'Want to look first? The <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">Middle School Mathematics syllabus</a> lists every topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson.',
    note: 'WhatsApp is the quickest route and free from a UK mobile. Our office is in India, so the answer arrives from a +91 number.',
    formNote: 'Nothing to pay and no forms beyond this one; we answer with a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths in Scotland', links: [
        { href: '/national-5-maths-tuition-online', label: 'National 5 Maths' },
        { href: '/higher-maths-tuition-online', label: 'Higher Maths' },
        { href: '/advanced-higher-maths-tuition-online', label: 'Advanced Higher Maths' },
        { href: '/scottish-mathematical-challenge-practice', label: 'Mathematical Challenge' }
      ] },
      { h4: 'Elsewhere', links: [
        { href: '/ks3-maths-tuition-online', label: 'KS3 maths (England)' },
        { href: '/coding-roadmap', label: 'Coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'S1 to S3 maths, taught live in UK time'
  },

  personalityCss: `
.ag-root.ag-sss .ag-hero h1 { letter-spacing: -0.02em; font-weight: 710; }
.ag-root.ag-sss .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-sss .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-sss .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-sss .ag-table th:first-child { width: 20%; }
.ag-root.ag-sss .ag-steps li { margin-bottom: 11px; line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'Scotland, Curriculum for Excellence, Broad General Education, numeracy and mathematics at Third and Fourth level. Education Scotland Benchmarks (June 2017): Fourth level before National 5; schools to take account of this for S4 options; appropriate presentation and avoiding unnecessary assessment; Third level statements (12th table, primes to 100, prime factors, powers, ax plus or minus b = c, T = 4n + 6, angle facts, bearings, probability scale); Fourth level statements (significant figures, premature rounding, tolerance 235 mm plus or minus 1 mm, scientific notation, percentage change, nth term, gradient, both-sides equations, inequalities, numeric common factor, Pythagoras, trigonometry, circles, averages). Scottish Government ACEL 2024-25: S3 numeracy third level or better 91, fourth level 68 per cent, with the publication\'s caution on recording at level four. NSA: S3 numeracy assessment, no time limit, within 40 minutes on average, no pass or fail.',
    localProject: 'S3 is where the S4 course is decided, and the Benchmarks put Fourth level before National 5. An S1 to S3 door for Scotland: a two-level table of Benchmark statements by organiser, the Benchmarks\' guidance on S4 presentation quoted in full, the 2024 to 2025 S3 numeracy figures with the publication\'s own caution, the S3 standardised assessment, an original Third versus Fourth comparison, four original worked examples (360 as prime factors, 5x minus 7 = 2x + 11, a premature-rounding cylinder, a 7 and 9 right-angled triangle) and an original S3 practice set. Lesson family: a Scottish lower secondary maths door.',
    requiredMentions: [
      'should have achieved relevant Fourth level Experiences and Outcomes before embarking on the National 5 qualifications',
      'Schools should take careful account of this when options for S4 are being agreed.',
      'can help avoid excessive workload for teachers and unnecessary assessments for learners',
      'This increase may be partially due to improvements in assessment and recording at level four.',
      'the curriculum from the early years to the end of S3 as a whole',
      'Third level or better in numeracy',
      'An S3 practice set',
      'Rounding becomes a skill',
      'Rung two is the hinge'
    ],
    sources: [
      { claim: 'Education Scotland, Benchmarks: Numeracy and Mathematics: Fourth level before National 5, Third and Fourth level statements.', url: 'https://education.gov.scot/media/s5edgtvx/numeracyandmathematicsbenchmarks.pdf' },
      { claim: 'Scottish Government, Achievement of CfE Levels 2024-25, chapter 1: S3 numeracy at third and fourth level.', url: 'https://www.gov.scot/publications/achievement-of-curriculum-for-excellence-cfe-levels-2024-25/pages/chapter-1-achievement-of-cfe-levels-at-scotland-level/' },
      { claim: 'National Standardised Assessments for Scotland, parents and carers: S3 numeracy, timing, no pass or fail.', url: 'https://standardisedassessment.gov.scot/parents-and-carers/' },
      { claim: 'Education Scotland, Experiences and outcomes: the curriculum from the early years to the end of S3.', url: 'https://education.gov.scot/curriculum-for-excellence/experiences-and-outcomes/' }
    ],
    rejectedClaims: [
      'National 4 Mathematics course details: the SQA page fetched for it returned a different subject, so National 4 is not described.',
      'Which S4 course a given school offers or requires: varies by school and is not published nationally, so the page tells parents what to ask.',
      'S3 figures by deprivation or pupil characteristics: published, left out under the rule against identity statistics.',
      'Financial-capability statements in the Benchmarks (credit, APR, budgeting): left out as money content.',
      'Any promise of reaching Fourth level or a particular S4 course: declined.'
    ]
  }
};
