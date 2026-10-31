'use strict';
// Scottish primary maths tutor online (ag- maths door, Scotland; UK and US exams cluster Phase 2, row UK043).
// Sources, read raw on 31 October 2026 (curl; PDF text through the scratchpad pdftext helper; raw copies in
// keyword-research-2026-09/uk-us-gap/src/scottish-primary-maths-tutor-online/):
//  - Education Scotland, Benchmarks: Numeracy and Mathematics (June 2017), education.gov.scot/media/s5edgtvx/
//    numeracyandmathematicsbenchmarks.pdf. Verbatim: "Benchmarks have been developed to provide clarity on the national
//    standards expected within each curriculum area at each level."; "They should not be ticked off individually for
//    assessment purposes."; "It is not necessary for learners to demonstrate mastery of every individual aspect of
//    learning within Benchmarks at a particular level before moving on to the next level."; "demonstrated application of
//    what they have learned in new and unfamiliar situations"; the eight skills "interpret questions; select and
//    communicate processes and solutions; justify choice of strategy used; link mathematical concepts; use mathematical
//    vocabulary and notation; use mental agility; reason algebraically; and determine the reasonableness of a solution";
//    "Numeracy and mathematical skills are embedded in the Experiences and Outcomes and cannot be taught in isolation."
//    Early level: "Recalls the number sequence forwards within the range 0 - 30, from any given number."; "Recalls the
//    number sequence backwards from 20."; subitising; "Doubles numbers to a total of 10 mentally."; "Adds and subtracts
//    mentally to 10."; "Reads analogue and digital o'clock times (12 hour only)"; coins to the two pound coin.
//    First level: "Reads, writes, orders and recites whole numbers to 1000"; "867 = 800 + 60 + 7"; "Rounds whole
//    numbers to the nearest 10 and 100"; "Counts forwards and backwards in 2s, 5s, 10s and 100s."; "Solves two step
//    problems."; "Uses the correct notation for common fractions to tenths"; "Tells the time using half past, quarter
//    past and quarter to"; "1 m 58 cm = 158 cm"; "the greater the number of equal parts, the smaller the size of each
//    share". Second level: "Reads, writes and orders whole numbers to 1 000 000"; "Reads, writes and orders sets of
//    decimal fractions to three decimal places."; "Uses multiplication and division facts to the 10th multiplication
//    table."; "Multiplies whole numbers by two digit numbers."; "43 ÷ 5 = 8∙6"; "3/4 = 0.75 = 75%"; "find 3/5 of 60";
//    "a discount of 15%"; "Applies the correct order of operations in number calculations when solving multi-step
//    problems."; "Reads and records time in both 12 hour and 24 hour notation and converts between the two.";
//    "Calculates the area of squares, rectangles and right-angled triangles"; "There are no Experiences and Outcomes at
//    early level." (multiples, factors and primes).
//  - Scottish Government, Achievement of Curriculum for Excellence (CfE) Levels 2024-25, published 9 December 2025,
//    chapter 1 table: numeracy P1 Early Level 85, P4 First Level 78, P7 Second Level 79, combined 80 (per cent); "based
//    on teachers' professional judgements"; numeracy "equal highest with 2023-24".
//  - National Standardised Assessments for Scotland (standardisedassessment.gov.scot, home and parents pages):
//    "Children and young people in P1, P4, P7 and S3 complete online standardised assessments in literacy and numeracy";
//    "Children and young people do not have to revise or prepare for these assessments and there is no pass or fail.";
//    "if a learner is experiencing difficulty, the questions will get easier"; "There is no time limit."; "The majority
//    of P1 learners will complete each assessment in less than 30 minutes, while on average P4/P7/S3 learners complete
//    within 40 minutes."; once in the relevant school year, timing decided by the school; familiarisation mascot
//    Feathers/Itean.
// Our own: the "no P7 past papers" framing, the level profile wording, the four worked examples, the practice set and
// the home games. Spine: Scotland has no primary maths exam, so the honest preparation is the Benchmarks themselves.
// Lesson family: a Scottish primary curriculum door (CfE Early to Second level), distinct from England's KS1/KS2 pages
// and from the Scottish Mathematical Challenge page (competition puzzles).

const T = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'SCOTTISH PRIMARY MATHS', blurb: 'No P7 maths exam exists in Scotland. What Early, First and Second level numeracy ask of a child, from the Benchmarks.' },
  slug: 'scottish-primary-maths-tutor-online',
  code: 'sp',
  accent: '#066964',
  accentRationale: 'Scottish primary maths: a deep sea teal (#066964, 6.17:1 on #FBF8F2), greener than the Higher aubergine and the National 5 blues so the Scottish ladder reads as separate rungs',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Scottish primary maths tutor online',
  title: 'Scottish Primary Maths Tutor Online | P1 to P7, CfE Levels',
  description: 'Scottish primary maths tutor online for P1 to P7: what Early, First and Second level numeracy expect, why there are no P7 past papers, and live lessons.',
  ogDescription: 'There is no P7 maths exam in Scotland. The Benchmarks for Early, First and Second level say what a primary child should be able to do instead.',
  twitterDescription: 'Primary maths in Scotland, P1 to P7: CfE levels, the Benchmarks, the standardised assessments, and live lessons in UK time.',
  pageName: 'Scottish Primary Maths Tutor Online',
  webPageDescription: 'Live online maths lessons for primary children in Scotland, built from Education Scotland\'s Benchmarks for numeracy and mathematics at Early, First and Second level.',
  courseDescription: 'Live online numeracy and mathematics for P1 to P7: number and place value, the four operations, fractions, decimals and percentages, time, measure, shape and data, mapped to the Curriculum for Excellence levels.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Scottish primary maths',
  navLinks: [
    { href: '#levels', label: 'The levels' },
    { href: '#papers', label: 'P7 past papers?' },
    { href: '#skills', label: 'Eight skills' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Scotland &middot; Curriculum for Excellence &middot; P1 to P7',
  h1: 'Scottish primary maths tutor online',
  lede: 'Parents in Scotland often go looking for P7 maths past papers and come back empty handed. That is not a gap in the internet. Primary pupils in Scotland sit no national maths exam: progress through P1 to P7 is judged by the class teacher against three Curriculum for Excellence levels, Early, First and Second, using a document Education Scotland calls the Benchmarks. The short online assessments taken in P1, P4 and P7 carry no pass mark and, in the government\'s words, need no revision. So the useful question is not which paper to practise but what a child at each level should be able to do. This page answers that from the Benchmarks themselves, then shows how our live lessons teach it.',
  secondaryCta: { href: '#levels', label: 'Early to Second level' },
  wa: 'Hello Modern Age Coders, I would like a free first class in primary maths for my child in Scotland.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Mapped to Education Scotland\'s numeracy Benchmarks',
  spec: [
    ['Curriculum', 'Curriculum for Excellence'],
    ['Primary levels', 'Early, First, Second'],
    ['Usual stages', 'P1, P4 and P7'],
    ['National exam', 'None at primary'],
    ['Standardised checks', 'P1, P4, P7, no pass or fail'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Primary maths in Scotland follows the Curriculum for Excellence, where numeracy and mathematics are described at Early, First and Second level and the Scottish Government reports the expected level as Early by P1, First by P4 and Second by P7. Teachers judge each level against Education Scotland\'s Benchmarks, so there are no P7 maths past papers to practise. Modern Age Coders teaches primary maths live online for P1 to P7, in a group of 15 to 20 or 1-on-1, through its Elementary Maths course, matched to those levels. The first class is free, and we are independent of every school, council and Education Scotland.',

  picks: {
    eyebrow: 'Courses for P1 to P7',
    h2: 'Three courses for primary maths in Scotland',
    lede: 'Elementary Maths carries most children from First to Second level. Early Maths suits a P1 or P2 child still at Early level, and Mental Maths builds the quick recall the Benchmarks call mental agility.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'SP / 01', title: 'Elementary Maths', note: 'Place value to a million, the four operations, fractions, decimals and percentages, time and measure, level by level.' },
      { course: 'early-math-foundations', code: 'SP / 02', title: 'Early Maths Foundations', note: 'Counting, subitising, sharing and o\'clock times with real objects, for the Early level years.' },
      { course: 'mental-maths-mastery-kids', code: 'SP / 03', title: 'Mental Maths for Kids', note: 'Number facts held securely enough to estimate, check and choose a strategy.' }
    ]
  },

  sections: [
    {
      id: 'levels', tint: 'tint', eyebrow: 'The levels',
      h2: 'What CfE level should my child be at in primary school?',
      lede: 'Early level by the end of P1, First level by the end of P4 and Second level by the end of P7: those are the stages at which the Scottish Government reports whether pupils have reached the expected level.',
      body: [
        { kind: 'p', html: 'Curriculum for Excellence does not divide primary maths into seven year groups the way England does. It sets out Experiences and Outcomes at a handful of levels, and Education Scotland\'s Benchmarks, published in June 2017, describe what achieving each level looks like. In the document\'s own words, "Benchmarks have been developed to provide clarity on the national standards expected within each curriculum area at each level." A child in P3 is usually working through First level, a child in P6 through Second level, and the official snapshot is taken at the end of P1, P4 and P7.' },
        { kind: 'table', mt: true, caption: 'Primary numeracy by level, a selection of Benchmark statements (Education Scotland, June 2017)', head: ['Level', 'Usually reported at', 'What the Benchmarks expect, in part'], rows: [
          ['Early', 'End of P1', 'Counts forwards within 0 to 30 from any number and backwards from 20; recognises small groups without counting; doubles to a total of 10 and adds and subtracts mentally to 10; names every coin up to the two pound coin; reads o\'clock times'],
          ['First', 'End of P4', 'Reads, writes and orders whole numbers to 1000; explains 867 as 800 + 60 + 7; rounds to the nearest 10 and 100; counts in 2s, 5s, 10s and 100s; solves two step problems; writes fractions to tenths; tells the time to quarter past and quarter to'],
          ['Second', 'End of P7', 'Works with whole numbers to 1 000 000 and decimals to three places; uses multiplication facts to the 10th table; multiplies by two digit numbers; links fractions, decimals and percentages; applies the order of operations; converts between 12 hour and 24 hour time; finds areas of rectangles and right-angled triangles']
        ] },
        { kind: 'p', html: 'Two lines in the Benchmarks matter for parents. The first is that the statements "should not be ticked off individually for assessment purposes": a level is a judgement across a breadth of learning, not a checklist completed. The second is that "It is not necessary for learners to demonstrate mastery of every individual aspect of learning within Benchmarks at a particular level before moving on to the next level", provided there are no major gaps. A teacher also looks for whether the child has "demonstrated application of what they have learned in new and unfamiliar situations", which is why a child who can recite facts but freezes on an unfamiliar word problem may not yet have achieved the level.' },
        { kind: 'two', mt: true,
          leftH3: 'Some topics wait for later levels',
          left: [
            'The Benchmarks list no Experiences and Outcomes for multiples, factors and primes at Early or First level; they arrive at Second level. Powers and roots wait until Third level, in secondary.',
            'So a P3 child who has never heard of a prime number is not behind. The curriculum simply has not reached it.'
          ],
          rightH3: 'Levels overlap with stages',
          right: [
            'Some children reach Second level before P7 and begin Third level work; others are still securing First level in P5. The level describes the learning, not the birthday.',
            'When we place a child, we place them by level. For the secondary years that follow, see <a class="ag-inline-link" href="/ks3-maths-tuition-online">our lower secondary maths page</a>.'
          ] },
        { kind: 'source', html: 'Source: Education Scotland, <a class="ag-inline-link" href="https://education.gov.scot/media/s5edgtvx/numeracyandmathematicsbenchmarks.pdf" rel="noopener" target="_blank">Benchmarks: Numeracy and Mathematics</a> (June 2017), read on 31 October 2026. The table selects and paraphrases statements; the full document lists many more for each level.' }
      ]
    },
    {
      id: 'papers', tint: 'deep', eyebrow: 'P7 past papers?',
      h2: 'Are there P7 maths past papers in Scotland?',
      lede: 'No national ones. Scotland has no end of primary maths exam, so there is no official P7 paper, past or present. What exists instead is teacher judgement against the Benchmarks and a short adaptive online assessment that the government says children do not need to prepare for.',
      body: [
        { kind: 'p', html: 'The National Standardised Assessments for Scotland are taken once in the school year by "Children and young people in P1, P4, P7 and S3", in literacy and numeracy, as part of everyday learning. Their own website is unusually direct: "Children and young people do not have to revise or prepare for these assessments and there is no pass or fail." The questions adapt as the child goes, so that "if a learner is experiencing difficulty, the questions will get easier", and the teacher receives a diagnostic report to plan next steps. Worksheets sold as P7 past papers are therefore someone\'s practice material, not a paper any Scottish child has sat.' },
        { kind: 'table', mt: true, caption: 'The National Standardised Assessments in numeracy (standardisedassessment.gov.scot)', head: ['Question', 'What the official site says'], rows: [
          ['Who takes them', 'Every child in P1, P4 and P7, and young people in S3'],
          ['How often', 'Once within the relevant school year, at a time the school chooses'],
          ['Format', 'Online, marked automatically, adapting to the learner'],
          ['Pass mark', 'None: "There is no pass or fail."'],
          ['Time', '"There is no time limit." Most P1 learners finish in under 30 minutes; P4 and P7 learners average within 40'],
          ['Preparation', 'Not needed; a familiarisation section shows the question types']
        ] },
        { kind: 'p', html: 'The national figures that parents sometimes see in the news come from somewhere else: teachers\' professional judgements of whether each pupil has achieved the expected level. The Scottish Government\'s statistics for 2024 to 2025, published on 9 December 2025, give these numeracy figures.' },
        { kind: 'table', mt: true, caption: 'Pupils achieving the expected CfE level in numeracy, 2024 to 2025 (Scottish Government, published 9 December 2025)', head: ['Stage and level', 'Per cent achieving it'], rows: [
          ['P1, Early level', '85'],
          ['P4, First level', '78'],
          ['P7, Second level', '79'],
          ['P1, P4 and P7 combined', '80']
        ] },
        { kind: 'p', html: 'The publication describes the combined numeracy figure as equal highest with 2023 to 2024. Read the other way, roughly one P4 child in five had not yet been judged to have reached First level in numeracy that year, which is the stage at which place value to 1000, two step problems and early fractions all have to come together.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://standardisedassessment.gov.scot/parents-and-carers/" rel="noopener" target="_blank">National Standardised Assessments for Scotland, parents and carers</a>; Scottish Government, <a class="ag-inline-link" href="https://www.gov.scot/publications/achievement-of-curriculum-for-excellence-cfe-levels-2024-25/pages/chapter-1-achievement-of-cfe-levels-at-scotland-level/" rel="noopener" target="_blank">Achievement of CfE Levels 2024-25, chapter 1</a>. Both read on 31 October 2026.' }
      ]
    },
    {
      id: 'skills', tint: '', eyebrow: 'Eight skills',
      h2: 'Which maths skills do the Scottish Benchmarks look for?',
      lede: 'Beyond the topics, the Benchmarks name eight numeracy and mathematical skills that a child should show with growing independence from Early to Second level. They are the closest thing Scotland has to a marking scheme for primary maths.',
      body: [
        { kind: 'p', html: 'Education Scotland is clear that "Numeracy and mathematical skills are embedded in the Experiences and Outcomes and cannot be taught in isolation." In other words, a child does not learn "justifying" on a Tuesday and "estimating" on a Thursday; every topic is a chance to practise all eight. This is how we use the list in class.' },
        { kind: 'table', mt: true, caption: 'The eight skills named in the Benchmarks, and how our lessons practise them', head: ['Skill (Benchmarks)', 'What it looks like in a P5 to P7 lesson (ours)'], rows: [
          ['Interpret questions', 'Underlining what a word problem asks, crossing out information it does not need, drawing a quick bar model'],
          ['Select and communicate processes and solutions', 'Saying aloud which operation was chosen and why, before working it out'],
          ['Justify choice of strategy used', 'Comparing two ways of finding 25 per cent and deciding which was quicker'],
          ['Link mathematical concepts', 'Seeing that dividing by 4 and finding a quarter are the same move'],
          ['Use mathematical vocabulary and notation', 'Writing units every time, and using words such as product, factor and denominator correctly'],
          ['Use mental agility', 'Recalling tables facts quickly enough to spend effort on the problem, not the arithmetic'],
          ['Reason algebraically', 'Finding the missing number in 7 &times; ? = 56 and explaining it with the inverse'],
          ['Determine the reasonableness of a solution', 'Estimating first, then asking whether the answer could possibly be right']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Talk is evidence', p: 'The Benchmarks ask children to share thinking and explain strategy. In our classes a child who gets the right answer is always asked how they know.' },
          { h3: 'Estimate first', p: 'At First level the Benchmarks expect rounding to 10 and 100 "routinely" to check a solution. We make an estimate the first line of every calculation.' },
          { h3: 'Unfamiliar problems', p: 'Achieving a level includes applying learning in new situations, so every lesson ends with a problem the child has not seen in that form.' }
        ] },
        { kind: 'p', html: 'Families who want to see the full list of statements for each level can download the Benchmarks from Education Scotland; it is free and written for teachers, but most of it reads plainly. For children who enjoy puzzles beyond the curriculum, <a class="ag-inline-link" href="/scottish-mathematical-challenge-practice">the Scottish Mathematical Challenge page</a> covers the national competition, and <a class="ag-inline-link" href="/first-competitions-for-primary-school-children-uk">first competitions for primary children</a> lists gentler starting points.' }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Four primary maths examples, First to Second level',
      lede: 'Written by us, not taken from any assessment. Each one shows the reasoning a teacher would hope to hear, because in Scotland the reasoning is part of what is judged.',
      body: [
        { kind: 'two',
          leftH3: '1. Place value and rounding (First level)',
          left: [
            '<strong>Question (ours).</strong> A school library has 586 books. Round this to the nearest 10 and to the nearest 100, and say which rounding is more useful for ordering new shelves.',
            '<strong>Place value first.</strong> 586 is 500 + 80 + 6. The tens digit is 8 and the ones digit is 6.',
            '<strong>Nearest 10.</strong> 6 ones is closer to 10 than to 0, so 586 rounds up to 590.',
            '<strong>Nearest 100.</strong> 86 is closer to 100 than to 0, so 586 rounds to 600.',
            '<strong>Reasonableness.</strong> For shelves, 600 is safer: it leaves room. That last sentence is the part that shows the skill.'
          ],
          rightH3: '2. A fraction of an amount (Second level)',
          right: [
            '<strong>Question (ours).</strong> A class of 30 votes on a trip; two fifths choose the science centre. How many is that?',
            '<strong>One fifth.</strong> Share 30 into 5 equal groups: 30 &divide; 5 = 6.',
            '<strong>Two fifths.</strong> Two of those groups: 2 &times; 6 = 12.',
            '<strong>Check.</strong> Two fifths is a bit less than a half, and 12 is a bit less than 15. The answer is reasonable.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. Percentages without a calculator (Second level)',
          left: [
            '<strong>Question (ours).</strong> A jacket costs 40 pounds and is reduced by 15 per cent in a sale. What is the sale price?',
            '<strong>Build 15 per cent.</strong> 10 per cent of 40 is 4. Half of that, 5 per cent, is 2. So 15 per cent is 4 + 2 = 6.',
            '<strong>Subtract.</strong> 40 &minus; 6 = 34, so the sale price is 34 pounds.',
            '<strong>Strategy talk.</strong> Building from 10 per cent and 5 per cent is one route; another is 85 per cent of 40. A child who can explain both is showing the "justify" skill.'
          ],
          rightH3: '4. 24 hour time and durations (Second level)',
          right: [
            '<strong>Question (ours).</strong> A ferry leaves at 09:45 and arrives at 13:20. How long is the crossing, and what is the arrival time on a 12 hour clock?',
            '<strong>Bridge the hours.</strong> 09:45 to 10:00 is 15 minutes. 10:00 to 13:00 is 3 hours. 13:00 to 13:20 is 20 minutes.',
            '<strong>Add.</strong> 3 hours and 35 minutes.',
            '<strong>Convert.</strong> 13:20 is 1:20 pm, because 13 &minus; 12 = 1.'
          ] },
        { kind: 'p', mt: true, html: '<strong>A practice set for the end of P7 (ours, with answers).</strong> (1) Write 4 307 052 in words. (2) Round 6.48 to one decimal place. (3) 36 &times; 24. (4) 57 &divide; 4, as a decimal. (5) Write three fifths as a decimal and as a percentage. (6) 8 + 6 &times; 3. (7) How many minutes are in two and a quarter hours? (8) A rectangle is 9 cm by 6 cm; a right-angled triangle has the same base and height. Find both areas. <strong>Answers:</strong> (1) four million, three hundred and seven thousand and fifty-two; (2) 6.5; (3) 864; (4) 14.25; (5) 0.6 and 60 per cent; (6) 26, because multiplication comes first; (7) 135; (8) 54 square centimetres and 27 square centimetres.' },
        { kind: 'p', html: 'This set is ours and is not a past paper; none exists. It covers several Second level statements at once, which is closer to how a teacher actually judges the level than any single topic test.' }
      ]
    },
    {
      id: 'classes', tint: '', eyebrow: 'Our lessons',
      h2: 'How do online primary maths lessons work for a child in Scotland?',
      lede: 'They start from the level, not the year group, and they ask the child to explain as much as to calculate. Lessons are live, with a teacher who sees and hears the child working.',
      body: [
        { kind: 'ol', items: [
          '<strong>A free first class to find the level.</strong> The teacher works through a few short problems across number, fractions and time and listens to how the child reasons. Afterwards we tell you, in plain words, whether the child looks secure at Early, First or Second level and where the gaps are.',
          '<strong>A plan by organiser.</strong> The Benchmarks group maths into organisers such as number and number processes, fractions, money, time and measurement. We plan the term by those organisers so that nothing major is left out.',
          '<strong>Concrete, pictorial, abstract.</strong> Younger children handle counters, coins and a clock; older ones draw bar models and number lines before writing a calculation.',
          '<strong>Explain and estimate, every time.</strong> Each problem begins with an estimate and ends with a sentence about whether the answer makes sense.',
          '<strong>A short note to parents.</strong> After each block of lessons you get a brief summary of what is now secure and what comes next, in level language your child\'s teacher will recognise.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group or 1-on-1?',
          left: [
            'A group of 15 to 20 children at a similar level suits a child who is broadly on track and enjoys hearing how others think, which is itself one of the eight skills.',
            '1-on-1 suits a child with a particular gap, for example place value at First level, or one who is racing ahead into Third level work in P6 or P7.'
          ],
          rightH3: 'What we do not do',
          right: [
            'Sell P7 practice papers as if they were official. There is no national P7 paper, and the standardised assessments need no preparation.',
            'Claim any link with a school, a council or Education Scotland. We are an independent online school teaching alongside the curriculum, never instead of it.'
          ] },
        { kind: 'p', mt: true, html: 'Families moving between the Scottish and English systems can compare this page with <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2 maths tuition</a>, which follows England\'s year-by-year programme. For an overview of how schooling works across Scotland, including the secondary qualifications that follow S3, see <a class="ag-inline-link" href="/coding-and-ai-classes-in-scotland">our Scotland page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four rungs from P1 to P7',
    lede: 'Each rung is something a child can show at the table, in level language.',
    table: { caption: 'Our progression for Scottish primary maths', head: ['Rung', 'Usually by', 'What a child can show'], rows: [
      ['1. Early level secure', 'End of P1', 'Counts on and back confidently, sees small quantities at a glance, adds and subtracts within 10'],
      ['2. Place value to 1000', 'P3 to P4', 'Partitions three digit numbers, rounds to 10 and 100, uses tables facts for 2, 5 and 10'],
      ['3. First level achieved', 'End of P4', 'Solves two step problems, writes simple fractions, tells time to the quarter hour'],
      ['4. Second level achieved', 'End of P7', 'Decimals, percentages, the order of operations, 24 hour time and area, with reasoning explained']
    ] },
    left: { h3: 'Rung two decides a lot', ps: [
      'Nearly every First and Second level statement leans on place value. A child unsure that the 8 in 586 means eighty will struggle with decimals later.',
      'Children who enjoy instructions and patterns may also like <a class="ag-inline-link" href="/ks2-coding-lessons-online">our primary coding lessons</a>.'
    ] },
    right: { h3: 'Rung four meets S1', ps: [
      'Second level is the ground S1 builds on. Gaps here show up quickly in secondary.',
      'We ease off over the summer holidays and pick up in August if families wish.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for primary children',
    lede: 'Maths first, then thinking and making courses for children who want more.',
    bands: [
      { num: 'I', h3: 'Core numeracy', sub: 'Early to Second level', courses: [
        { code: 'UK / SP1 / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths', blurb: 'The primary number, fraction and measure strands in order.' },
        { code: 'UK / SP1 / 02', slug: 'early-math-foundations', title: 'Early Maths Foundations', blurb: 'Counting and sharing through play, for the youngest.' },
        { code: 'UK / SP1 / 03', slug: 'mental-maths-mastery-kids', title: 'Mental Maths', blurb: 'Fast recall that leaves room for reasoning.' }
      ] },
      { num: 'II', h3: 'Reasoning', sub: 'Thinking beyond the sum', courses: [
        { code: 'UK / SP2 / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Pattern, spatial and number puzzles, ages 6 to 9.' },
        { code: 'UK / SP2 / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Breaking a problem into steps and checking each one.' },
        { code: 'UK / SP2 / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Place value made visible on the beads.' }
      ] },
      { num: 'III', h3: 'Making things', sub: 'Maths with a screen', courses: [
        { code: 'UK / SP3 / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'For P7 children ready to test ideas in Python.' },
        { code: 'UK / SP3 / 02', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Games that use coordinates, angles and counting.' },
        { code: 'UK / SP3 / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Block coding for younger primary children.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'When primary lessons run',
    lede: T + ' Our teachers are based in India and every time we offer is given in UK time, so a Scottish family never has to convert.',
    slots: [
      { time: 'After school', l: 'Between the school run and tea.' },
      { time: 'Early evening', l: 'For families with later pick-ups or clubs.' },
      { time: 'Weekend morning', l: 'When younger children concentrate best.' }
    ],
    cells: [
      { h3: 'Placed by level', p: 'Children grouped by Early, First or Second level, not only by P stage.' },
      { h3: 'Organiser by organiser', p: 'Number, fractions, time, measure and data planned so no strand is skipped.' },
      { h3: 'Reasoning aloud', p: 'Every answer comes with a short explanation, the habit the Benchmarks value.' },
      { h3: 'Real objects', p: 'Counters, coins and a clock beside the screen for the younger years.' },
      { h3: 'Parent summaries', p: 'A brief note after each block, using the level words schools use.' },
      { h3: 'Batch or 1-on-1', p: 'A group of 15 to 20, or one child with one teacher.' }
    ]
  },

  projectsH2: 'Things our primary students built',
  projectsLede: 'Small pieces from ordinary lessons, nothing graded. More are collected in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, copied without edits.',

  fees: {
    h2: 'Fees for primary maths lessons',
    lede: 'The first class costs nothing. After it, families pay one monthly fee, smaller for a place in a group and larger for 1-on-1, and only once a course and a regular slot are settled. There is nothing to sign.',
    free: ['A short class to find the level', 'Plain feedback on gaps and strengths', 'Booked with just a phone number'],
    group: ['15 to 20 children at one level', 'One teacher through the term', 'Estimate and explain in every lesson', 'Parent summary after each block'],
    one: ['One teacher, one child', 'Gaps closed organiser by organiser', 'Suits a child ahead or behind their stage']
  },

  faq: {
    eyebrow: 'Primary maths questions',
    h2: 'What Scottish parents ask about primary maths',
    items: [
      { q: 'Are there P7 maths past papers in Scotland?', a: 'Not official ones. Scotland has no national maths exam at the end of primary, so no P7 paper exists. Teachers judge Second level against Education Scotland\'s Benchmarks instead.' },
      { q: 'What level should my child be at in P4?', a: 'The Scottish Government reports First level as the expected level by the end of P4. Children work through it from about P2, and some reach it earlier or later.' },
      { q: 'What maths should a child know by the end of P7?', a: 'Second level includes whole numbers to a million, decimals to three places, multiplication facts to the 10th table, fractions, decimals and percentages as equivalent forms, the order of operations, 24 hour time and simple area. The Benchmarks list the full set.' },
      { q: 'Does my child need to prepare for the P7 standardised assessment?', a: 'No. The official site says children do not have to revise or prepare, there is no pass or fail, and the questions adapt to the child. A short familiarisation section shows the question types.' },
      { q: 'How long does the numeracy assessment take?', a: 'There is no time limit. The official guidance says most P1 learners finish in under 30 minutes and P4 and P7 learners average within 40 minutes.' },
      { q: 'How many children reach the expected level in numeracy?', a: 'In 2024 to 2025, teachers judged 85 per cent of P1 pupils at Early level, 78 per cent of P4 pupils at First level and 79 per cent of P7 pupils at Second level, according to the Scottish Government.' },
      { q: 'Is Scottish primary maths the same as KS2?', a: 'No. England sets out content year by year in Key Stage 2, while Scotland describes it by level. Much of the content overlaps, but the order and the way progress is judged differ.' },
      { q: 'When are lessons?', a: T + ' Every slot is quoted in UK time.' },
      { q: 'Which course should my child start with?', a: 'Most P3 to P7 children start with Elementary Maths at their level. A P1 or P2 child still at Early level usually begins with Early Maths Foundations; the free first class decides.' },
      { q: 'Are you linked to Education Scotland or my child\'s school?', a: 'No. Modern Age Coders is an independent online school, not connected with any school, council, Education Scotland or the Scottish Government.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More for Scottish families',
    h2: 'Other pages on maths in Scotland',
    lede: 'Where primary maths leads, and puzzles for keen children.',
    items: [
      { href: '/scottish-mathematical-challenge-practice', label: 'Scottish Mathematical Challenge', p: 'The national competition for pupils who love problems.' },
      { href: '/national-5-maths-tuition-online', label: 'National 5 Maths', p: 'The S4 qualification that primary number sense eventually feeds.' },
      { href: '/maths-tutor-cost-scotland', label: 'Maths tutor cost in Scotland', p: 'What families in Scotland weigh up before booking.' },
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'A UK-wide puzzle paper for upper primary.' },
      { href: '/coding-and-ai-classes-in-scotland', label: 'Coding and AI classes in Scotland', p: 'The Scottish system, and coding for every age.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our UK hub for maths and coding.' }
    ]
  },

  start: {
    h2: 'Book a free primary maths class',
    lede: 'Give us a phone number and we will ring at a UK time you choose. The first class is relaxed: a few problems, a chat about how your child thinks, and an honest view of their level.',
    readFirst: 'Rather read first? The <a class="ag-inline-link" href="/courses/elementary-mathematics-complete-masterclass">Elementary Maths syllabus</a> shows the strands in order, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains what a live lesson looks like.',
    note: 'WhatsApp reaches us fastest and costs nothing from a UK phone. The reply comes from our team in India, on a +91 number.',
    formNote: 'No payment, no contract: we reply once with a suggested time.'
  },

  footer: {
    cols: [
      { h4: 'Maths in Scotland', links: [
        { href: '/scottish-mathematical-challenge-practice', label: 'Mathematical Challenge' },
        { href: '/national-5-maths-tuition-online', label: 'National 5 Maths' },
        { href: '/higher-maths-tuition-online', label: 'Higher Maths' },
        { href: '/maths-tutor-cost-scotland', label: 'Tutor costs in Scotland' }
      ] },
      { h4: 'For primary children', links: [
        { href: '/ks2-coding-lessons-online', label: 'Primary coding' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Primary maths for P1 to P7, live in UK time'
  },

  personalityCss: `
.ag-root.ag-sp .ag-hero h1 { letter-spacing: -0.015em; font-weight: 700; }
.ag-root.ag-sp .ag-capsule { border-left-width: 6px; border-bottom: 2px solid var(--ag-accent); }
.ag-root.ag-sp .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-sp .ag-table caption { text-align: left; font-weight: 660; }
.ag-root.ag-sp .ag-table td:first-child { font-weight: 650; width: 22%; }
.ag-root.ag-sp .ag-steps li { margin-bottom: 12px; }
`,

  dossier: {
    curriculumAuthority: 'Scotland, Curriculum for Excellence, numeracy and mathematics, Early to Second level. Education Scotland Benchmarks: Numeracy and Mathematics (June 2017): purpose statement; not to be ticked off individually; mastery of every aspect not required before moving on; application in new and unfamiliar situations; eight numeracy and mathematical skills; Early, First and Second level statements (number ranges, place value 867 = 800 + 60 + 7, rounding, tables, fractions, percentages, order of operations, time, area); no Es and Os for multiples, factors and primes before Second level. Scottish Government ACEL 2024-25 (published 9 December 2025): numeracy P1 Early 85, P4 First 78, P7 Second 79, combined 80 per cent, teacher judgement. National Standardised Assessments: P1, P4, P7 and S3; once a year; adaptive; no pass or fail; no revision; no time limit; P1 under 30 minutes, P4/P7 within 40 on average.',
    localProject: 'Scotland has no primary maths exam, so the honest preparation is the Benchmarks themselves. A Scottish primary maths door for P1 to P7: the three CfE levels and the stages at which they are reported, a level table drawn from the Benchmarks, why there are no P7 past papers (teacher judgement and the no-preparation standardised assessments), the 2024 to 2025 numeracy figures, the eight Benchmark skills mapped to our classroom practice, four original worked examples (rounding 586, two fifths of 30, 15 per cent off 40, a ferry duration in 24 hour time) and an original end of P7 practice set. Lesson family: a Scottish primary curriculum door.',
    requiredMentions: [
      'should not be ticked off individually for assessment purposes',
      'It is not necessary for learners to demonstrate mastery of every individual aspect of learning within Benchmarks at a particular level before moving on to the next level',
      'demonstrated application of what they have learned in new and unfamiliar situations',
      'Numeracy and mathematical skills are embedded in the Experiences and Outcomes and cannot be taught in isolation.',
      'Children and young people do not have to revise or prepare for these assessments and there is no pass or fail.',
      'if a learner is experiencing difficulty, the questions will get easier',
      'Determine the reasonableness of a solution',
      'P4, First level',
      'A practice set for the end of P7'
    ],
    sources: [
      { claim: 'Education Scotland, Benchmarks: Numeracy and Mathematics (June 2017): purpose, use, eight skills, Early to Second level statements.', url: 'https://education.gov.scot/media/s5edgtvx/numeracyandmathematicsbenchmarks.pdf' },
      { claim: 'Scottish Government, Achievement of CfE Levels 2024-25, chapter 1: numeracy by stage and level.', url: 'https://www.gov.scot/publications/achievement-of-curriculum-for-excellence-cfe-levels-2024-25/pages/chapter-1-achievement-of-cfe-levels-at-scotland-level/' },
      { claim: 'National Standardised Assessments for Scotland: who, when, format, no pass or fail, no preparation, timing.', url: 'https://standardisedassessment.gov.scot/parents-and-carers/' },
      { claim: 'Education Scotland, Curriculum for Excellence Benchmarks index page.', url: 'https://education.gov.scot/curriculum-for-excellence/curriculum-for-excellence-benchmarks/' }
    ],
    rejectedClaims: [
      'Official P7 maths past papers: none exist; the page says so rather than offering imitation papers.',
      'Exact ages for each stage: not stated in the documents read, so the page speaks of P stages and levels.',
      'Numeracy figures by deprivation or pupil characteristics: published, but left out under the page\'s rule against identity statistics.',
      'Money statements about bank cards at Second level: in the Benchmarks, but left out as money-risk content.',
      'Any promise that a child will reach a level by a given date: declined.'
    ]
  }
};
