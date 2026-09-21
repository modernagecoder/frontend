'use strict';
// Multiplication tables check (MTC) practice, Year 4 (ag- maths door, England; UK cluster Phase 3).
// Sources, read raw on 21 September 2026 (gov.uk pages via curl; STA PDF via PyMuPDF):
//  - STA, Multiplication tables check assessment framework (2018, updated for 2022). Verbatim: "The purpose
//    of the MTC is to determine whether year 4 pupils can fluently recall their multiplication tables";
//    "it is not intended as a diagnostic tool"; national curriculum: "By the end of year 4, pupils should
//    have memorised their multiplication tables up to and including the 12 multiplication table and show
//    precision and fluency in their work"; "The MTC only assesses the instant recall of multiplication
//    facts."; "A time limit of 6 seconds per item has been set for the MTC. This allows pupils the time
//    required to demonstrate their recall of multiplication tables, whilst limiting pupils' ability to work
//    out answers to the questions"; footnote: "1124 pupils took part and 3 time limits were trialled";
//    "Each form consists of 25 questions worth one mark each. Items are not ordered according to
//    difficulty."; items from "the 121 items that make up the 2 to 12 multiplication tables"; "The one
//    multiplication table is not included in the check"; Table 1 limits per form: 2 (0-2), 3 (1-3), 4
//    (1-3), 5 (1-3), 6 (2-4), 7 (2-4), 8 (2-4), 9 (2-4), 10 (0-2), 11 (1-3), 12 (2-4); "There is an emphasis
//    on the 6, 7, 8, 9 and 12 multiplication tables because these have been determined to be the most
//    difficult multiplication tables."; Table 2: KS1 items (2, 5 and 10 tables) 3 to 7 per form, KS2 18 to
//    22; the first number denotes the table (4 x 12 counts in the 4 table).
//  - STA, Multiplication tables check: administration guidance, updated 27 April 2026: 'try it out' from
//    Monday 27 April; administration Monday 1 June to Friday 12 June 2026; catch-up 15 to 19 June; results
//    from Monday 22 June; 6 seconds per question; "3-second pause between questions"; keyboard,
//    touchscreen or mouse, "Research suggests that, in this type of timed assessment, year 4 pupils may
//    find a small benefit from using a keyboard or touchscreen rather than a mouse."; "There is no expected
//    pass mark for pupils taking the MTC"; restarts only after significant disruption; schools "cannot view
//    or benchmark against other individual schools' data".
//  - DfE, Multiplication tables check attainment, 2024/25 (Explore Education Statistics). Verbatim: average
//    score 21.0 "Up from 20.6 in 2024"; "increased 0.3 points (based on unrounded figures)"; "37% of eligible
//    pupils scored 25 (full marks)", "the most common score"; "Of eligible year 4 pupils, 96% took the
//    multiplication tables check"; disadvantaged 18.9 to 19.3, non-disadvantaged 21.3 to 21.7; London 21.7,
//    South East and East of England 20.7; August-born 20.0 to 20.4, September-born 21.3 to 21.6.
//  - DfE announcement: 2026 attainment release "November 2026 (provisional)".
// Spine: six seconds is long enough to recall and too short to work out, by design. The check measures
// instant recall, not calculation, and weights the hardest tables; so practice must build recall, and
// counting up or clever tricks, however quick, are what the time limit is built to defeat.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'YEAR 4 MTC', blurb: 'Six seconds a question: long enough to remember, too short to work it out, and that is the design. How to practise for it.' },
  slug: 'multiplication-tables-check-year-4-practice',
  code: 'mtc',
  accent: '#7E5344',
  accentRationale: 'Year 4 check: a warm rosewood from the solver (5.31:1 on every paper tint, dE 8.6 from the nearest used accent), softer than the exam-door colours for a page parents of eight-year-olds will read',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Multiplication tables check practice',
  title: 'Multiplication Tables Check Practice, Year 4 | Six Seconds',
  description: 'Year 4 multiplication tables check practice: 25 questions, six seconds each, weighted to the 6, 7, 8, 9 and 12 tables. What the check measures and how to prepare.',
  ogDescription: 'Six seconds a question is long enough to recall a times-table fact and too short to work it out. That is the whole design of England\'s Year 4 check.',
  twitterDescription: 'The Year 4 multiplication tables check: the six-second design, the weighted tables, the 2025 results, and practice that builds recall.',
  pageName: 'Multiplication Tables Check Practice, Year 4',
  webPageDescription: 'Live online maths lessons for Year 4 children in England preparing for the statutory multiplication tables check, built from the STA framework and DfE statistics.',
  courseDescription: 'Live online maths teaching for Year 4 children: fluent recall of the 2 to 12 times tables, with extra time on the tables the check weights most.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Year 4 times tables check',
  navLinks: [
    { href: '#six', label: 'Six seconds' },
    { href: '#tables', label: 'Which tables count' },
    { href: '#results', label: '2025 results' },
    { href: '#practice', label: 'How to practise' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Year 4 &middot; Ages 8 and 9',
  h1: 'Multiplication tables check practice for Year 4',
  lede: 'Every June, Year 4 children in England\'s state schools sit down at a screen for the multiplication tables check: 25 questions, each answered in six seconds or less. The six seconds were chosen on purpose. The Standards and Testing Agency\'s framework says the limit gives children time to show recall "whilst limiting pupils\' ability to work out answers to the questions", and it was set after trialling three time limits with 1,124 pupils. So the check is not really about multiplication. It is about memory. A child who reaches 7 x 8 by counting up in sevens is doing real mathematics, but the limit was set precisely so that working it out would not fit. This page explains what the check measures, which tables it leans on, what the 2025 results show, and how practice that builds recall differs from practice that only builds speed.',
  secondaryCta: { href: '#six', label: 'Why six seconds' },
  wa: 'Hello Modern Age Coders, I would like a free first maths lesson for my Year 4 child.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; From the STA framework and DfE statistics',
  spec: [
    ['Who sits it', 'Year 4, state schools in England'],
    ['Questions', '25, one mark each'],
    ['Time', '6 seconds per question'],
    ['Tables', '2 to 12, weighted to 6, 7, 8, 9 and 12'],
    ['Pass mark', 'None'],
    ['2025 average', '21.0 out of 25'],
    ['Full marks in 2025', '37 per cent, the most common score'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The multiplication tables check is a statutory on-screen check taken in June by Year 4 pupils in England\'s state-funded schools. Each child answers 25 questions of the form 6 x 7, drawn from the 2 to 12 times tables, with six seconds to answer each and a three-second pause between them. There is no pass mark. The check is designed to test instant recall, not calculation: the six-second limit exists to stop children working answers out, and more questions come from the 6, 7, 8, 9 and 12 tables, which the framework calls the most difficult. In 2025 the average score was 21.0, and 37 per cent of eligible pupils scored full marks, the most common result. Modern Age Coders teaches Year 4 children to recall the tables, not just to compute them quickly, in short live lessons with extra time on the weighted tables and practice in six-second windows. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for Year 4 number facts',
    lede: 'Recall of the tables sits inside wider number sense. Each card opens a full syllabus.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'Y4 / 01', title: 'Primary Maths', note: 'Times tables within the whole primary number curriculum, placed by year group and a short check.' },
      { course: 'mental-maths-mastery-kids', code: 'Y4 / 02', title: 'Mental Maths for Kids', note: 'Number facts held in memory and used without writing, for ages 5 to 10.' },
      { course: 'abacus-mental-maths-course-for-kids', code: 'Y4 / 03', title: 'Abacus Mental Maths', note: 'For children who like a visual picture of number; recall still has to follow for the check.' }
    ]
  },

  sections: [
    {
      id: 'six', tint: 'tint', eyebrow: 'Six seconds',
      h2: 'Long enough to remember, too short to work it out',
      lede: 'From the Standards and Testing Agency\'s assessment framework and its 2026 administration guidance.',
      body: [
        { kind: 'table', caption: 'How the check works', head: ['Feature', 'The rule'], rows: [
          ['Questions', '25, each worth one mark, in the form 6 x 7, not ordered by difficulty'],
          ['Time', 'Six seconds per question, starting the moment it appears; the answer is accepted when time runs out'],
          ['Between questions', 'A three-second pause, unless a child needs a Next button as an access arrangement'],
          ['Answering', 'Keyboard, touchscreen or mouse with an on-screen number pad'],
          ['Correcting', 'Not possible once the six seconds end or Enter is pressed'],
          ['Forms', 'Several equivalent versions, one given to each child at random'],
          ['Restarts', 'Only after a significant disruption, never just to have another go'],
          ['Pass mark', 'None']
        ] },
        { kind: 'p', html: 'The framework is blunt about what it measures: "The MTC only assesses the instant recall of multiplication facts." Multiplication in wider contexts, word problems and written methods, is assessed elsewhere in Key Stage 2. The check exists to answer one narrow question, whether a child has the facts in memory by the end of Year 4, which the national curriculum expects: pupils "should have memorised their multiplication tables up to and including the 12 multiplication table".' },
        { kind: 'two', mt: true,
          leftH3: 'Why working it out fails',
          left: [
            'Counting up in sevens to reach 7 x 8 takes eight steps. Doubling 7 x 4 takes two, plus the time to recall 7 x 4. Both are good mathematics, and both can take longer than six seconds under pressure, with typing still to do.',
            'The framework says the limit was chosen to allow recall "without allowing enough time to work out the answer". It is doing its job when a clever method runs out of time.'
          ],
          rightH3: 'Why the device matters a little',
          right: [
            'The guidance notes: "Research suggests that, in this type of timed assessment, year 4 pupils may find a small benefit from using a keyboard or touchscreen rather than a mouse."',
            'Schools choose the input method. Practising on the same kind of device a child will use in school removes one small source of lost seconds.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/multiplication-tables-check-assessment-framework" rel="noopener" target="_blank">Multiplication tables check assessment framework</a> (STA, updated for 2022) and the Multiplication tables check administration guidance (STA, updated 27 April 2026), both on gov.uk.' }
      ]
    },
    {
      id: 'tables', tint: 'deep', eyebrow: 'Which tables count',
      h2: 'Not every times table counts the same',
      lede: 'Each version of the check draws from 121 facts, the 2 to 12 tables, within fixed limits per table.',
      body: [
        { kind: 'table', caption: 'Questions per table in each version of the check', head: ['Table', 'Fewest questions', 'Most questions'], rows: [
          ['1', 'Not included', 'Not included'],
          ['2', '0', '2'],
          ['3, 4 and 5', '1 each', '3 each'],
          ['6, 7, 8 and 9', '2 each', '4 each'],
          ['10', '0', '2'],
          ['11', '1', '3'],
          ['12', '2', '4']
        ] },
        { kind: 'p', html: 'The framework gives the reason plainly: "There is an emphasis on the 6, 7, 8, 9 and 12 multiplication tables because these have been determined to be the most difficult multiplication tables." The tables children learn first in Key Stage 1, the 2, 5 and 10, supply only three to seven of the 25 questions; the Key Stage 2 tables supply eighteen to twenty-two.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Weight practice the same way', p: 'A child who knows the 2, 5 and 10 tables cold but hesitates on 7 x 8 or 12 x 9 has learned the part of the check that counts least. Practice time should follow the weighting.' },
          { h3: 'Learn facts both ways round', p: 'The first number names the table, so 4 x 12 counts in the 4 table, but the framework also balances how often each second number appears. A child should know 12 x 4 and 4 x 12 as one fact.' },
          { h3: 'The 2s and 10s count least', p: 'Each supplies at most two questions, and the 1 table none at all. Fluency there is necessary but earns little on its own; the marks sit in the harder tables.' }
        ] }
      ]
    },
    {
      id: 'results', tint: '', eyebrow: '2025 results',
      h2: 'What the 2025 results show',
      lede: 'From the Department for Education\'s official statistics on the June 2025 check. The 2026 figures are due in November 2026.',
      body: [
        { kind: 'table', caption: 'Multiplication tables check, England, 2025', head: ['Measure', 'Published figure'], rows: [
          ['Average score, all pupils who took it', '21.0, up from 20.6 in 2024'],
          ['Full marks', '37 per cent of eligible pupils, the most common score, up from 34 per cent'],
          ['Took the check', '96 per cent of eligible Year 4 pupils'],
          ['Disadvantaged pupils', 'Average 19.3, up from 18.9'],
          ['Other pupils', 'Average 21.7, up from 21.3'],
          ['September-born pupils', 'Average 21.6'],
          ['August-born pupils', 'Average 20.4'],
          ['Highest region', 'London, 21.7'],
          ['Lowest regions', 'South East and East of England, 20.7']
        ] },
        { kind: 'p', html: 'One detail is worth reading carefully. The averages are published rounded, 20.6 and then 21.0, but the release says the score "increased 0.3 points (based on unrounded figures)". Subtracting the rounded numbers would give a different answer, which is why we print each figure as the Department published it and do our own arithmetic on none of them.' },
        { kind: 'two', mt: true,
          leftH3: 'For parents of summer-born children',
          left: [
            'Children born late in the school year scored lower on average: 20.4 for August-born pupils against 21.6 for September-born pupils. A child nearly a year younger than some classmates is being measured on the same day.',
            'That is a reason for patience and a little more practice, not alarm. There is no pass mark, and the result is not a verdict on a child.'
          ],
          rightH3: 'What happens to the result',
          right: [
            'Schools see their pupils\' scores from late June. They can compare their own average with national and local figures, but the guidance says they cannot view or benchmark against other individual schools\' data.',
            'The framework says the check helps schools spot children who need support, but it "is not intended as a diagnostic tool".'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://explore-education-statistics.service.gov.uk/find-statistics/multiplication-tables-check-attainment/2024-25" rel="noopener" target="_blank">Multiplication tables check attainment, 2024/25</a>, Department for Education, and its announcement of the 2026 release for November 2026 (provisional).' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'How to practise',
      h2: 'Practice that builds recall, not just speed',
      lede: 'Speed is the symptom the check measures. Recall is the thing to build.',
      body: [
        { kind: 'table', caption: 'Two ways to practise', head: ['', 'Builds speed only', 'Builds recall'], rows: [
          ['Method', 'Faster counting up, quicker tricks', 'Short daily retrieval of the facts themselves'],
          ['Order', 'Always the same, 1 x 7 to 12 x 7', 'Mixed, so each fact is fetched on its own'],
          ['Focus', 'All tables equally', 'More time on 6, 7, 8, 9 and 12'],
          ['Direction', 'One way round', 'Both ways round, as one fact'],
          ['Timing', 'As fast as possible', 'Within six seconds, calmly'],
          ['What it leaves', 'A quick method', 'The answer, already known']
        ] },
        { kind: 'p', html: 'Understanding still comes first. A child should know why 7 x 8 is eight sevens, see it as an array, and be able to derive it from 7 x 4 when stuck. Those are the foundations the curriculum builds. The check simply asks for the next stage, where the fact no longer needs deriving, and that stage comes from many short, spaced encounters with each fact rather than from one long session.' },
        { kind: 'two', mt: true,
          leftH3: 'What we do in lessons',
          left: [
            'Short, frequent, mixed-order recall of the tables, with extra repetitions for the 6s, 7s, 8s, 9s and 12s and for any fact a child hesitates on.',
            'Some practice in six-second windows on a keyboard or touchscreen, once recall is secure, so the format feels ordinary by June.'
          ],
          rightH3: 'What we will not promise',
          right: [
            'A score. There is no pass mark to guarantee, and children reach fluent recall at different speeds, as the month-of-birth figures show.',
            'That anxiety is worth a few marks. If practice starts to worry a child, we slow down. The check is a snapshot, and schools can use the official practice area from late April to make it familiar.'
          ] },
        { kind: 'p', html: 'Many of our younger students do maths and coding together. For children who enjoy building things, <a class="ag-inline-link" href="/ks2-coding-lessons-online">the Key Stage 2 coding page</a> covers what the computing curriculum asks at this age, and <a class="ag-inline-link" href="/primary-maths-challenge-practice">the Primary Maths Challenge page</a> is for children ready for puzzles beyond the tables.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs to fluent recall',
    lede: 'Each rung is secure before the next. Most Year 4 children arrive part-way up.',
    table: { caption: 'From understanding to instant recall', head: ['Rung', 'Usually', 'What should be true'], rows: [
      ['1. Meaning', 'Years 2 and 3', 'Multiplication understood as groups and arrays; the 2, 5 and 10 tables known'],
      ['2. Derivation', 'Year 3', 'Unknown facts worked out from known ones, such as doubling or adding one more group'],
      ['3. Recall', 'Year 4', 'Every fact to 12 x 12 answered from memory, mixed order, both ways round'],
      ['4. Fluency', 'By June of Year 4', 'Recall within six seconds, typed calmly, on the weighted tables especially']
    ] },
    left: { h3: 'Rung two is not the goal', ps: [
      'Deriving facts is valuable mathematics, but it is the stage the six-second limit is built to see past.',
      'A child stuck at rung two needs retrieval practice, not more strategies.'
    ] },
    right: { h3: 'Rung four takes weeks, not days', ps: [
      'Short sessions several times a week beat a long session before the check.',
      'After Year 4 the same recall carries straight into fractions, division and the rest of Key Stage 2.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for primary-age children',
    lede: 'Number facts first, then what comes after Year 4, then coding for children who like making things.',
    bands: [
      { num: 'I', h3: 'Number facts', sub: 'For the check and around it', courses: [
        { code: 'UK / MT1 / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'The full primary number curriculum, times tables included.' },
        { code: 'UK / MT1 / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Facts held in the head and used quickly.' },
        { code: 'UK / MT1 / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus mental maths', blurb: 'A visual route into number for younger children.' }
      ] },
      { num: 'II', h3: 'After Year 4', sub: 'Years 5 and 6', courses: [
        { code: 'UK / MT2 / 01', slug: '11-plus-maths-preparation-course-uk', title: '11+ maths preparation', blurb: 'For families aiming at grammar or independent school entry.' },
        { code: 'UK / MT2 / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Upper primary and lower secondary maths', blurb: 'Fractions, ratio and early algebra, where the tables pay off.' },
        { code: 'UK / MT2 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'From age 10, maths ideas explored by writing small programs.' }
      ] },
      { num: 'III', h3: 'Making things', sub: 'Coding for young children', courses: [
        { code: 'UK / MT3 / 01', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'Games and animations with blocks, a first taste of logic.' },
        { code: 'UK / MT3 / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'For children who would rather build a game than play one.' },
        { code: 'UK / MT3 / 03', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'For a younger brother or sister, ages 4 to 7.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Short, frequent and calm',
    lede: 'Our teachers are in India, where the clock stays put all year, so England is four and a half hours behind in summer and five and a half in winter. Lesson times are set in UK time.',
    slots: [
      { time: 'After school', l: 'Short sessions, which eight-year-olds manage well.' },
      { time: 'Early evening', l: 'Before tea, while attention is fresh.' },
      { time: 'Weekend morning', l: 'A slightly longer lesson with games.' }
    ],
    cells: [
      { h3: 'Mixed order', p: 'Facts asked out of sequence, so each one is recalled rather than counted from the last.' },
      { h3: 'Weighted tables', p: 'More repetitions for the 6, 7, 8, 9 and 12 tables, matching the check.' },
      { h3: 'Both ways round', p: '4 x 12 and 12 x 4 practised together as one fact.' },
      { h3: 'Six-second windows', p: 'Timed practice only once recall is secure, and never in a way that frightens a child.' },
      { h3: 'Understanding first', p: 'Arrays and derivations taught properly, so recall rests on meaning.' },
      { h3: 'Small groups', p: 'Five to ten children at one stage, with games that keep it light.' }
    ]
  },

  projectsH2: 'Things our younger students have made',
  projectsLede: 'Four projects from lessons, none of them tests. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, exactly as they posted them.',

  fees: {
    h2: 'Fees for primary maths lessons',
    lede: 'One monthly fee in US dollars, the rate for every family outside India. The first lesson is free, and nothing is charged until a course and a weekly time are settled.',
    free: ['A gentle first lesson on the tables', 'A clear picture of which facts are secure', 'Only a phone number needed'],
    group: ['Five to ten children at one stage', 'The same teacher each week', 'Short, mixed recall practice', 'Games that keep it light'],
    one: ['A teacher for one child', 'Practice built around the facts that stick', 'Suits a child who finds groups hard']
  },

  faq: {
    eyebrow: 'Questions about the multiplication tables check',
    h2: 'What parents of Year 4 children ask',
    items: [
      { q: 'What is the multiplication tables check?', a: 'A statutory on-screen check taken in June by Year 4 pupils in England\'s state-funded schools. It has 25 questions from the 2 to 12 times tables, with six seconds to answer each.' },
      { q: 'Is there a pass mark?', a: 'No. The guidance states there is no expected pass mark. Higher scores show more fluent recall, and schools use the results to see which children need more support.' },
      { q: 'Why only six seconds?', a: 'The framework says the limit gives time to recall an answer while limiting the chance to work it out. It was set after the Standards and Testing Agency trialled three limits with 1,124 pupils.' },
      { q: 'Which tables come up most?', a: 'The 6, 7, 8, 9 and 12 tables, with two to four questions each, because the framework judges them the most difficult. The 2 and 10 tables supply at most two each, and the 1 table none.' },
      { q: 'How did children do in 2025?', a: 'The average score was 21.0 out of 25, and 37 per cent of eligible pupils scored full marks, which was the most common result. The 2026 figures are due in November 2026.' },
      { q: 'My child is summer-born. Should I worry?', a: 'August-born children averaged 20.4 in 2025 against 21.6 for September-born children. A child nearly a year younger than some classmates may simply need longer, and there is no pass mark to miss.' },
      { q: 'Should my child use a keyboard or a mouse?', a: 'Schools decide. The guidance notes that Year 4 pupils may find a small benefit from a keyboard or touchscreen rather than a mouse, so practising on a similar device helps.' },
      { q: 'Does it apply in Scotland, Wales or Northern Ireland?', a: 'No. The multiplication tables check is an assessment for schools in England. The other nations have their own approaches to primary maths.' },
      { q: 'Can my child practise the real check?', a: 'Schools can give pupils access to an official practice version, the try it out check, from late April. It has three practice questions and then 25 questions, and gives no score.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that there is one monthly fee in US dollars, lower for a group place than for one-to-one teaching, with the amounts in the fees section and nothing paid ahead.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for primary families in England',
    lede: 'Coding at this age, maths puzzles, and what comes next.',
    items: [
      { href: '/ks2-coding-lessons-online', label: 'Key Stage 2 coding lessons', p: 'What the computing curriculum asks of children aged 7 to 11.' },
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'Puzzles for children ready to go beyond the tables.' },
      { href: '/11-plus-maths-tuition-kent', label: '11+ maths in Kent', p: 'For families looking ahead to grammar school entry.' },
      { href: '/first-competitions-for-primary-school-children-uk', label: 'First competitions for primary children', p: 'Gentle maths and coding contests to start with.' },
      { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI classes in England', p: 'The English system from primary school upward.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page we publish, in one place.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time that suits your family. The first lesson is gentle, finds which facts are already secure, and ends with a plan.',
    readFirst: 'Want to read first? Every <a class="ag-inline-link" href="/courses">course page</a> sets out its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our approach with young children, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows what they make.',
    note: 'WhatsApp is quickest and free from a UK phone. It reaches our office in India, so the number starts +91.',
    formNote: 'No card and no contract. We reply once, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Primary', links: [
        { href: '/ks2-coding-lessons-online', label: 'KS2 coding lessons' },
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' },
        { href: '/first-competitions-for-primary-school-children-uk', label: 'First competitions' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'More', links: [
        { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI in England' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Primary maths, live, on UK time'
  },

  personalityCss: `
.ag-root.ag-mtc .ag-hero h1 { letter-spacing: -0.02em; font-weight: 700; }
.ag-root.ag-mtc .ag-capsule { border-left-width: 6px; border-radius: 6px; }
.ag-root.ag-mtc .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-mtc .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-mtc .ag-table td:first-child { font-weight: 640; }
.ag-root.ag-mtc .ag-band-head h3 { letter-spacing: -0.008em; }
`,

  mustMention: ['multiplication tables check', '6 seconds', '25 questions', '6, 7, 8, 9 and 12', 'no expected pass mark', '21.0', '37 per cent', 'instant recall', 'Year 4', 'August-born'],

  dossier: {
    curriculumAuthority: 'England, statutory Year 4 multiplication tables check (MTC), Standards and Testing Agency. Assessment framework (2018, updated for 2022): "The purpose of the MTC is to determine whether year 4 pupils can fluently recall their multiplication tables"; "it is not intended as a diagnostic tool"; national curriculum: pupils "should have memorised their multiplication tables up to and including the 12 multiplication table"; "The MTC only assesses the instant recall of multiplication facts."; "A time limit of 6 seconds per item has been set for the MTC. This allows pupils the time required to demonstrate their recall of multiplication tables, whilst limiting pupils\' ability to work out answers to the questions"; "1124 pupils took part and 3 time limits were trialled"; six seconds "without allowing enough time to work out the answer"; "Each form consists of 25 questions worth one mark each. Items are not ordered according to difficulty."; "The one multiplication table is not included in the check"; Table 1 per-form limits 2 (0-2), 3 to 5 (1-3), 6 to 9 (2-4), 10 (0-2), 11 (1-3), 12 (2-4); "There is an emphasis on the 6, 7, 8, 9 and 12 multiplication tables because these have been determined to be the most difficult multiplication tables."; Table 2 KS1 items 3 to 7, KS2 18 to 22. Administration guidance updated 27 April 2026: try it out from 27 April; administration 1 to 12 June 2026; results from 22 June; 3-second pause; input devices and the keyboard or touchscreen research note; "There is no expected pass mark for pupils taking the MTC"; restarts only after significant disruption; schools cannot benchmark against other individual schools. DfE Multiplication tables check attainment 2024/25: average 21.0 up from 20.6; "increased 0.3 points (based on unrounded figures)"; 37% full marks, most common score, up from 34%; 96% took the check; disadvantaged 19.3 (from 18.9), non-disadvantaged 21.7 (from 21.3); London 21.7, South East and East of England 20.7; August-born 20.4, September-born 21.6. 2026 release due November 2026 (provisional).',
    localProject: 'Six seconds is long enough to recall and too short to work out, by design. England\'s Year 4 multiplication tables check gives 25 questions with six seconds each, a limit the STA framework says was chosen, after trials with 1,124 pupils, to allow recall while limiting working out, and it weights the 6, 7, 8, 9 and 12 tables as the hardest. The page lays out the rules from the framework and the 2026 administration guidance, the per-table limits, and the 2025 national statistics printed as published (including the rounding caveat on the 0.3-point rise and the month-of-birth gap for summer-born children), then contrasts practice that builds only speed with practice that builds recall, and states what we will not promise. Lesson family: an assessment whose time limit is the whole design, and preparation that respects what it is built to measure.',
    requiredMentions: ['6 seconds', '25 questions', '6, 7, 8, 9 and 12', 'August-born'],
    sources: [
      { claim: 'STA Multiplication tables check assessment framework (updated for 2022): purpose, content domain, the six-second limit and its research basis, question format, per-table and per-key-stage item limits.', url: 'https://assets.publishing.service.gov.uk/media/62384958e90e0779a5e700c3/2018_MTC_assessment_framework_PDFA_updated_for_2022.pdf' },
      { claim: 'STA Multiplication tables check administration guidance, updated 27 April 2026: 2026 dates, timing and pause, input devices, restarts, no pass mark, and results access.', url: 'https://www.gov.uk/government/publications/multiplication-tables-check-administration-guidance/multiplication-tables-check-administration-guidance' },
      { claim: 'DfE Multiplication tables check attainment 2024/25: national, disadvantage, month-of-birth and regional figures.', url: 'https://explore-education-statistics.service.gov.uk/find-statistics/multiplication-tables-check-attainment/2024-25' },
      { claim: 'DfE statistics announcement: 2026 attainment release due November 2026 (provisional).', url: 'https://www.gov.uk/government/statistics/announcements/multiplication-tables-check-attainment-2026' }
    ],
    rejectedClaims: [
      'Dates for the 2027 check: not yet published in the guidance read, so none is given.',
      'Any gap or change computed from the rounded published averages: printed as published, with the release\'s own unrounded 0.3-point figure.',
      'Differences by sex: published, but left out because they add nothing a parent can act on and risk implying children learn differently.',
      'That any practice method raises a score by a given amount: no such evidence read; the page describes our method only.',
      'Any promised score or outcome, which we decline to give.'
    ]
  }
};
