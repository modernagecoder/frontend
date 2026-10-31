'use strict';
// KS1 SATs maths explained (ag- maths door, England; UK and US exams cluster Phase 2, row UK003).
// Sources, read raw on 31 October 2026 with curl (gov.uk content API JSON and assets PDFs; text via the scratchpad
// pdftext helper); raw copies in keyword-research-2026-09/uk-us-gap/src/ks1-sats-maths-explained/:
//  - STA, Key stage 1: mathematics test framework (gov.uk HTML publication). Verbatim: Table 1, "Paper 1: arithmetic"
//    "assesses pupils' confidence and mathematical fluency with whole numbers, place-value and counting", 25 marks,
//    20 minutes; "Paper 2: mathematical reasoning" 35 marks, 35 minutes; "Recommended 55 minutes"; "The total number
//    of marks for both papers is 60."; resources: arithmetic "a pencil; ruler; rubber (optional)", reasoning adds "a
//    sharp, dark pencil for mathematical drawing", ruler in cm and mm, "mirror"; "Pupils will not be permitted to use a
//    calculator, tracing paper, number apparatus or other supporting equipment in either of the components."; Table
//    10: number strands 48 to 54 marks, 80 to 90%; measurement, geometry and statistics 6 to 12 marks, 10 to 20%;
//    "The arithmetic questions will each be worth one mark."; "There will be 6 aural questions at the start: one
//    practice question and 5 test questions."; "All questions may be read aloud, so that reading ability does not
//    impair a pupil's ability to demonstrate his or her mathematical attainment."; selected response types (multiple
//    choice, matching, true / false or yes / no); "Mental mathematics skills cannot be directly assessed in a
//    paper-based test since you can only mark what the pupil records."; framework banner "Assessment arrangements for
//    the academic year 2026 to 2027 will remain unchanged."
//  - STA, 2026 key stage 1 scaled score conversion tables (published 1 June 2026): maths raw 0 to 2 "No scaled score",
//    raw 3 = 85, raw 36 = 100, raw 58 = 115; "Pupils need to have a raw score of at least 3 marks to be awarded the
//    minimum scaled score."; "The highest score is 115."
//  - STA, Understanding scaled scores at key stage 1: "The optional KS1 tests are marked locally in schools";
//    mathematics Paper 1 25 marks, Paper 2 35 marks, total 60 (as printed); "A pupil awarded a score of 99 or less has
//    not met the expected standard in the test."; "In 2016, panels of teachers set the raw score required to meet the
//    expected standard."
//  - STA, National curriculum assessments: past test materials (collection, updated 12 October 2026): "Tuesday 1 June
//    2027 key stage 1 test materials and scaled score conversion tables"; optional KS1 maths materials listed for 2024,
//    2025 and 2026; standard and modified materials.
//  - DfE, Curriculum and Assessment Review Final Report (November 2025, gov.uk). Verbatim: "These assessments have been
//    optional at Key Stage 1 since 2023/24 and the DfE does not collect data on how many pupils take them."; "evidence
//    from a 2024 Teacher Tapp survey suggests that many schools continue to use them, with 60% of the teachers
//    surveyed indicating they would be administering them."; "We encourage all schools to use the non-statutory Key
//    Stage 1 tests to provide greater insights for Key Stage 2 teachers."
// Our own: the five gentle steps for past papers, the six original questions (labelled ours, not STA items), the
// percentage calculation 36 of 60, and the practice set. Spine: what the 60 marks measure and what a scaled score
// means, for a test that is optional but still widely given. Lesson family: an optional national test explainer,
// distinct from the KS1 tuition page (curriculum) and the KS2 SATs papers page (Year 6).

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'KS1 SATS', blurb: 'Optional since 2023/24, yet many schools still give them. The 60 marks, the aural questions, and what a scaled score of 100 means.' },
  slug: 'ks1-sats-maths-explained',
  code: 'kse',
  accent: '#315966',
  accentRationale: 'KS1 SATs: a slate teal (#315966, 7.20:1 on #FBF8F2 and 6.19:1 on the deepest paper tint), calm and paper-like for a test explainer, apart from the KS1 dusk violet',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'KS1 SATs maths explained',
  title: 'KS1 SATs Maths Explained | The Optional Year 2 Test, 2027',
  description: 'KS1 SATs maths explained for parents: two papers and 60 marks, the aural questions, scaled scores from 85 to 115, past papers, and why the test is optional.',
  ogDescription: 'The KS1 maths test has been optional since 2023/24, but many schools still use it. What the 60 marks measure and what a score of 100 means.',
  twitterDescription: 'The optional KS1 maths SATs: arithmetic and reasoning papers, read-aloud questions, raw and scaled scores, and the official past papers.',
  pageName: 'KS1 SATs Maths Explained',
  webPageDescription: 'An explainer for parents in England on the optional end of key stage 1 mathematics test, built from the Standards and Testing Agency framework, scaled score tables and the Curriculum and Assessment Review.',
  courseDescription: 'Live online maths for Year 2 children: place value, calculation, the 2, 5 and 10 times tables, fractions, measures, shape and data, taught for understanding rather than test drill.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'KS1 SATs maths',
  navLinks: [
    { href: '#status', label: 'Optional, explained' },
    { href: '#papers', label: 'The two papers' },
    { href: '#scores', label: 'Scaled scores' },
    { href: '#pastpapers', label: 'Past papers' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; End of Key Stage 1 &middot; Year 2, ages 6 to 7',
  h1: 'KS1 SATs maths explained: the optional Year 2 test',
  lede: 'Parents still call them KS1 SATs, and many Year 2 children still sit them. Officially they are the optional end of key stage 1 national curriculum tests, and a school chooses whether to use them. If your child\'s school does, the maths test is two short papers worth 60 marks, much of it read aloud, marked by the school itself and turned into a scaled score between 85 and 115. This page explains why the tests became optional and why the government\'s 2025 curriculum review still wants schools to use them, how the two maths papers are built, what a score of 100 actually means, and how to use the free official past papers without turning a seven year old\'s spring into exam season.',
  secondaryCta: { href: '#papers', label: 'How the papers work' },
  wa: 'Hello Modern Age Coders, my child is in Year 2 and I would like a free first maths class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; From the STA test framework and 2026 scaled score tables',
  spec: [
    ['Official name', 'Optional end of KS1 tests'],
    ['Year group', 'Year 2, ages 6 to 7'],
    ['Maths papers', 'Arithmetic and reasoning'],
    ['Marks', '25 and 35, total 60'],
    ['Scaled scores', '85 to 115; 100 meets the standard'],
    ['Marked by', 'The child\'s own school'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'KS1 SATs maths is the optional end of key stage 1 mathematics test in England, set by the Standards and Testing Agency for Year 2 pupils aged 6 to 7. It has been optional since 2023/24. Schools that use it give two papers, arithmetic (25 marks) and mathematical reasoning (35 marks), mark them locally and convert the raw score to a scaled score from 85 to 115, where 100 or more meets the expected standard. Modern Age Coders teaches Year 2 maths live online, in a group of 15 to 20 or 1-on-1, through Elementary Maths. The first class is free.',

  picks: {
    eyebrow: 'Courses for Year 2',
    h2: 'Three courses for a Year 2 child',
    lede: 'We teach the Year 2 curriculum, not the test. These are the three courses families most often pick at this age.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'KS / 01', title: 'Elementary Maths', note: 'Level A covers Years 1 and 2: place value, adding and subtracting, first tables, fractions, shape, time and money.' },
      { course: 'mental-maths-mastery-kids', code: 'KS / 02', title: 'Mental Maths for Kids', note: 'Quick, secure number facts for ages 5 to 10, the fluency the arithmetic paper rewards.' },
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'KS / 03', title: 'Reasoning and Readiness', note: 'Patterns, spatial and quantitative reasoning for ages 6 to 9, for a child who enjoys puzzles.' }
    ]
  },

  sections: [
    {
      id: 'status', tint: 'tint', eyebrow: 'Optional, explained',
      h2: 'Are KS1 SATs compulsory in 2027?',
      lede: 'No. They have been optional since the 2023/24 school year. A school may still give them in May 2027, and many do, so it is worth asking.',
      body: [
        { kind: 'p', html: 'The government\'s Curriculum and Assessment Review, whose final report was published in November 2025, sets out the position in one sentence: "These assessments have been optional at Key Stage 1 since 2023/24 and the DfE does not collect data on how many pupils take them." Because nobody counts nationally, the strongest evidence the Review could offer was a survey: "evidence from a 2024 Teacher Tapp survey suggests that many schools continue to use them, with 60% of the teachers surveyed indicating they would be administering them." That figure describes teachers who answered one survey, not every school, but it shows the test is far from gone.' },
        { kind: 'p', html: 'Nor does the Review want it to disappear. Writing about early diagnosis of gaps, it says: "We encourage all schools to use the non-statutory Key Stage 1 tests to provide greater insights for Key Stage 2 teachers." It also supports the Department for Education and the Standards and Testing Agency continuing to provide the tests, and asks them to consider how to encourage greater use. For families, the practical result is simple: in 2027 some Year 2 children will sit the maths test and some will not, depending only on their school.' },
        { kind: 'table', mt: true, caption: 'What is optional and what is not in Year 2 (STA and DfE, 2026 to 2027)', head: ['Item', 'Status in 2026 to 2027', 'What it means for a family'], rows: [
          ['End of KS1 maths test', 'Optional; the school decides', 'Ask the class teacher in the spring term whether it will be used'],
          ['Recommended window', 'During May 2027, for schools that use the tests', 'No fixed national day; the school picks its dates within the month'],
          ['Marking', 'By the school, using the STA mark scheme', 'Results stay in school and are not collected nationally'],
          ['Annual report to parents', 'Statutory', 'Every Year 2 family receives a report on general progress'],
          ['Future changes', 'Under review after the 2025 Review', 'Arrangements for 2026 to 2027 remain unchanged']
        ] },
        { kind: 'source', html: 'Sources: DfE, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report" rel="noopener" target="_blank">Curriculum and Assessment Review Final Report</a>, November 2025; Standards and Testing Agency, <a class="ag-inline-link" href="https://www.gov.uk/government/collections/national-curriculum-assessments-key-stage-1-tests" rel="noopener" target="_blank">optional key stage 1 tests</a> collection and guidance; DfE, Primary assessments: future dates. All read on 31 October 2026.' }
      ]
    },
    {
      id: 'papers', tint: 'deep', eyebrow: 'The two papers',
      h2: 'What is in the KS1 maths test?',
      lede: 'Two papers. A 20-minute arithmetic paper of one-mark calculations, and a 35-minute reasoning paper that starts with questions read aloud. Neither allows a calculator.',
      body: [
        { kind: 'table', caption: 'The optional KS1 mathematics test (STA test framework, Table 1)', head: ['Paper', 'What it assesses', 'Marks', 'Approximate time'], rows: [
          ['Paper 1: arithmetic', 'Confidence and fluency with whole numbers, place value and counting, as context-free calculations', '25', '20 minutes'],
          ['Paper 2: mathematical reasoning', 'Fluency, problem solving and reasoning, in a wide range of question formats', '35', '35 minutes'],
          ['Both papers', '"The total number of marks for both papers is 60."', '60', 'Recommended 55 minutes']
        ] },
        { kind: 'p', html: 'The framework explains how a seven year old experiences Paper 2. "There will be 6 aural questions at the start: one practice question and 5 test questions." These help children settle, and they go in rough order of difficulty. More than that, "All questions may be read aloud, so that reading ability does not impair a pupil\'s ability to demonstrate his or her mathematical attainment." A child who is still learning to read is not meant to be held back by the words on the page.' },
        { kind: 'two', mt: true,
          leftH3: 'What children may use',
          left: [
            'For arithmetic, "a pencil; ruler; rubber (optional)". For reasoning, the same plus "a sharp, dark pencil for mathematical drawing", a ruler marked in centimetres and millimetres, and a mirror for symmetry questions.',
            'The framework is clear on the rest: "Pupils will not be permitted to use a calculator, tracing paper, number apparatus or other supporting equipment in either of the components."'
          ],
          rightH3: 'How the questions look',
          right: [
            '"The arithmetic questions will each be worth one mark." Paper 2 mixes questions where a child writes an answer with ones where they choose: multiple choice, matching, and true or false or yes or no.',
            'Some reasoning questions are worth two marks, and the mark scheme gives credit for a correct method even when the final answer slips.'
          ] },
        { kind: 'table', mt: true, caption: 'Where the 60 marks come from (STA test framework, Table 10)', head: ['Content area', 'Strands', 'Marks', 'Share of marks'], rows: [
          ['Number', 'Number and place value; addition, subtraction, multiplication and division; fractions', '48 to 54', '80 to 90 per cent'],
          ['Measurement, geometry and statistics', 'Measurement; properties of shapes; position and direction; statistics', '6 to 12', '10 to 20 per cent']
        ] },
        { kind: 'p', mt: true, html: 'That split is the most useful single fact on this page for a parent. At least four marks in five are about number. The framework also lists things a paper cannot measure well, and mental calculation is the main one: "Mental mathematics skills cannot be directly assessed in a paper-based test since you can only mark what the pupil records." It adds that fluent children will still use mental skills to work quickly and accurately. So the most useful preparation is not a test strategy at all; it is secure number sense, which shows up on every page.' },
        { kind: 'source', html: 'Source: Standards and Testing Agency, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/key-stage-1-mathematics-test-framework" rel="noopener" target="_blank">Key stage 1: mathematics test framework</a>, sections 3, 4.3 and 6, read on 31 October 2026. The framework is written for test developers; we summarise its structure only.' }
      ]
    },
    {
      id: 'scores', tint: '', eyebrow: 'Scaled scores',
      h2: 'What does a KS1 maths scaled score of 100 mean?',
      lede: 'It means the child met the expected standard on that year\'s test. Scores run from 85 to 115, and the number of marks needed for 100 can move a little each year.',
      body: [
        { kind: 'p', html: 'The school adds the marks from both papers to get a raw score out of 60, then looks it up in a conversion table the agency publishes each June. The reason for converting is fairness across years: tests are built to the same specification, but the questions change, so one year\'s paper may be slightly easier or harder than the last. In the agency\'s words, "Pupils scoring at least 100 will always have met the expected standard on the test", while "A pupil awarded a score of 99 or less has not met the expected standard in the test." The standard itself goes back to 2016, when "panels of teachers set the raw score required to meet the expected standard."' },
        { kind: 'table', mt: true, caption: 'Selected rows of the 2026 KS1 mathematics conversion table (STA, published 1 June 2026)', head: ['Raw score (out of 60)', 'Scaled score', 'Reading it'], rows: [
          ['0 to 2', 'No scaled score', 'Below the minimum; the child has not shown enough to be scaled'],
          ['3', '85', 'The lowest scaled score that can be awarded'],
          ['20', '93', 'Working towards the standard'],
          ['35', '99', 'One mark short of the expected standard in 2026'],
          ['36', '100', 'The expected standard in 2026'],
          ['50', '107', 'Comfortably above the standard'],
          ['58 to 60', '115', 'The highest scaled score']
        ] },
        { kind: 'p', mt: true, html: 'A worked reading of the table, our own arithmetic. In 2026 a child needed 36 of the 60 marks for a score of 100. Thirty-six out of sixty is the same as 6 out of 10, so 60 per cent of the marks reached the expected standard that year. That number is not fixed: the agency says the raw mark for 100 rises when a test is easier and falls when it is harder, which is exactly why the scaled score, not the raw mark, is the figure to look at. The 2027 tables will be published on Tuesday 1 June 2027.' },
        { kind: 'two', mt: true,
          leftH3: 'Will we be told the score?',
          left: [
            'Not necessarily. The tests are marked in school and there is no national requirement to pass results to parents, though many schools share them or use them in the end-of-year report.',
            'If the score matters to you, ask the teacher. It is reasonable to ask what the result showed and what the school will do next.'
          ],
          rightH3: 'What a score cannot tell you',
          right: [
            'One morning\'s performance on 60 marks of paper questions. It says little about mental fluency, which the framework says a paper cannot measure directly.',
            'A child scoring 97 who is secure on place value is in a better position for Year 3 than a child scoring 101 who guessed well. Ask what the child can do, as well as the number.'
          ] },
        { kind: 'source', html: 'Sources: Standards and Testing Agency, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/optional-key-stage-1-tests-2026-scaled-scores" rel="noopener" target="_blank">Optional key stage 1 tests: 2026 scaled scores</a> and <a class="ag-inline-link" href="https://www.gov.uk/guidance/understanding-scaled-scores-at-key-stage-1" rel="noopener" target="_blank">Understanding scaled scores at key stage 1</a>, read on 31 October 2026. The "Reading it" column and the percentage are ours.' }
      ]
    },
    {
      id: 'pastpapers', tint: 'tint', eyebrow: 'Past papers',
      h2: 'Where can I download KS1 SATs maths past papers for free?',
      lede: 'From gov.uk, at no cost. The Standards and Testing Agency publishes each year\'s optional KS1 maths papers, mark schemes and conversion tables in one collection. Here is how to use them kindly.',
      body: [
        { kind: 'p', html: 'The official collection is called <a class="ag-inline-link" href="https://www.gov.uk/government/collections/national-curriculum-assessments-past-test-materials" rel="noopener" target="_blank">National curriculum assessments: past test materials</a>. On 31 October 2026 it listed optional key stage 1 mathematics test materials for 2024, 2025 and 2026, standard and modified versions, plus the conversion tables. Modified versions, such as enlarged print, exist for children who need them. We do not reproduce any of these papers here; they are Crown copyright and free at the source, which is always the right place to get them.' },
        { kind: 'ol', items: [
          '<strong>Ask first.</strong> Find out whether your child\'s school will use the tests in May 2027. If not, a past paper is simply a set of Year 2 questions, not rehearsal.',
          '<strong>Look before your child does.</strong> Read one paper yourself. Note which questions feel hard to you to explain, since those are the ideas to play with first.',
          '<strong>Use pieces, not whole papers.</strong> Five questions at the kitchen table is plenty for a six year old. Read reasoning questions aloud, as the real test allows.',
          '<strong>Mark for method, not just answers.</strong> When an answer is wrong, ask the child to show you how they did it. The slip is usually in one place you can fix.',
          '<strong>Stop well before it becomes stressful.</strong> If a child starts to dread the sheets, put them away. The framework itself says a paper cannot measure mental fluency; games build that better.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why "SATs online practice" is a mixed bag',
          left: [
            'Commercial sites sell "KS1 SATs" packs and timed online tests. Some are thoughtful; many simply repeat one kind of question.',
            'The real optional test is on paper, untimed in strict terms, partly read aloud and marked by the teacher. A timed app does not resemble it much.'
          ],
          rightH3: 'What actually helps',
          right: [
            'Number bonds to 20, place value with tens and ones, the 2, 5 and 10 times tables, and reading simple charts. These carry most of the 60 marks.',
            'Talking through answers. Reasoning questions reward a child who can explain, and talking is how six year olds learn to explain.'
          ] }
      ]
    },
    {
      id: 'examples', tint: '', eyebrow: 'Worked examples',
      h2: 'Six Year 2 questions we wrote, with the thinking',
      lede: 'These are our own questions at Year 2 level, written for this page. They are not taken from, or copies of, any Standards and Testing Agency paper.',
      body: [
        { kind: 'two',
          leftH3: '1. Counting back in tens (ours, arithmetic style)',
          left: [
            '<strong>Question.</strong> 72 &minus; 30.',
            '<strong>Think.</strong> Only the tens change. Seven tens take away three tens leaves four tens; the two ones stay.',
            '<strong>Answer.</strong> 42. A child who counts back 30 single steps is likely to slip; counting back three tens (62, 52, 42) is quick and safe.'
          ],
          rightH3: '2. A missing number (ours, arithmetic style)',
          right: [
            '<strong>Question.</strong> 58 = 40 + &#9633;',
            '<strong>Think.</strong> 58 is 5 tens and 8 ones. 40 gives 4 tens, so one ten and 8 ones are missing.',
            '<strong>Answer.</strong> 18. The equals sign means "is the same as", which is why the box can sit on the right.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. Times and divide from one array (ours, reasoning style)',
          left: [
            '<strong>Question.</strong> Twenty cakes are set out in rows of 5. How many rows?',
            '<strong>Think.</strong> Count in fives: 5, 10, 15, 20. That is four fives.',
            '<strong>Answer.</strong> 4 rows. The same picture shows 4 &times; 5 = 20, 5 &times; 4 = 20 and 20 &divide; 5 = 4, the link the curriculum wants children to see.'
          ],
          rightH3: '4. Half, or two quarters? (ours, reasoning style)',
          right: [
            '<strong>Question.</strong> Sam eats two quarters of a pizza. Ali eats half of the same size pizza. Who eats more?',
            '<strong>Think.</strong> Cut a half into two equal pieces: each is a quarter. So two quarters fill exactly one half.',
            '<strong>Answer.</strong> They eat the same. Year 2 pupils are expected to recognise that two quarters and one half are equivalent.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '5. Reading a block diagram (ours, reasoning style)',
          left: [
            '<strong>Question.</strong> A class votes for a pet. Dog has 9 blocks, cat has 6, fish has 4. How many more voted dog than fish?',
            '<strong>Think.</strong> "How many more" is a difference. Count up from 4 to 9: five steps.',
            '<strong>Answer.</strong> 5. A common slip is to add 9 and 4; reading the question aloud helps, just as the real test permits.'
          ],
          rightH3: '6. Comparing with signs (ours, arithmetic style)',
          right: [
            '<strong>Question.</strong> Write &lt;, &gt; or = : 3 tens and 14 ones &#9633; 45.',
            '<strong>Think.</strong> 3 tens is 30, and 14 ones is one more ten and 4 ones: 30 + 14 = 44.',
            '<strong>Answer.</strong> 44 &lt; 45. Regrouping ones into a ten is the place value idea the arithmetic paper leans on.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, with answers).</strong> (1) 65 + 20. (2) 17 &minus; 9. (3) 10 &times; 6. (4) 35 &divide; 5. (5) What is one third of 15? (6) Which is longer, 1 metre or 80 centimetres? (7) Is it true or false that 6 + 7 = 7 + 6? (8) 90 = &#9633; + 30. <strong>Answers:</strong> (1) 85; (2) 8; (3) 60; (4) 7; (5) 5; (6) 1 metre, which is 100 centimetres; (7) true, adding can be done in any order; (8) 60.' }
      ]
    },
    {
      id: 'classes', tint: 'deep', eyebrow: 'Our Year 2 classes',
      h2: 'Does my child need a tutor for the KS1 SATs?',
      lede: 'Usually not for the test itself. A tutor is worth it when a child has a real gap in Year 2 maths, because that gap will follow them into Year 3 whether or not a test is given.',
      body: [
        { kind: 'p', html: 'Our honest advice is to separate the two questions. If your child is broadly secure, the optional test needs no special preparation; a few past questions read together in the spring are enough to make the format familiar. If your child is unsure about tens and ones, still counts on fingers for bonds within 20, or cannot yet use the 2, 5 and 10 tables, that is worth fixing, and the ideal moment is before Year 3 adds written methods and the 3, 4 and 8 tables.' },
        { kind: 'ol', items: [
          '<strong>Free first class.</strong> A relaxed half hour of number games and a few spoken questions shows the teacher where your child is with place value, bonds and tables.',
          '<strong>Concrete, then pictures, then numbers.</strong> New ideas start with objects by the screen, such as coins or counters, then drawings, then number sentences.',
          '<strong>Talking answers.</strong> Children explain their thinking out loud every lesson, which is the habit reasoning questions reward.',
          '<strong>Short practice between classes.</strong> Five minutes of a game or a handful of questions, not long worksheets.',
          '<strong>A note for parents.</strong> After each block, a short message about what has become secure and what comes next.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A group or 1-on-1?',
          left: [
            'A group of 15 to 20 Year 2 children suits a child who is roughly on track and enjoys company.',
            '1-on-1 suits a child with a specific gap, a quieter child, or a family who wants a plan built around one child.'
          ],
          rightH3: 'What we will not do',
          right: [
            'Run timed mock SATs with six and seven year olds, or promise any score. The test is optional and the score is one morning\'s work.',
            'Claim a link with any school, the Standards and Testing Agency or the Department for Education. We are independent.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four checks before the end of Year 2',
    lede: 'Things a parent can see at home that matter far more than a practice score.',
    table: { caption: 'What secure Year 2 maths looks like (our checklist, from the curriculum)', head: ['Check', 'Ask your child to', 'Secure when'], rows: [
      ['1. Tens and ones', 'Build 47 from ten-sticks and single cubes', 'They pick 4 tens and 7 ones without counting every cube'],
      ['2. Facts to 20', 'Answer 8 + 7 and 15 &minus; 7', 'Both come quickly, without fingers'],
      ['3. Three tables', 'Count in 2s, 5s and 10s, then answer 7 &times; 5', 'They can jump straight to a fact'],
      ['4. Explaining', 'Say why 24 + 30 is 54', 'They talk about tens, not just the answer']
    ] },
    left: { h3: 'Check four is the hidden one', ps: [
      'Reasoning questions reward explanation. A child who can say why is rarely thrown by a new question.',
      'For what follows in Year 6, see <a class="ag-inline-link" href="/ks2-sats-maths-papers-explained">the KS2 SATs maths papers</a>.'
    ] },
    right: { h3: 'After Year 2', ps: [
      'Year 3 adds the 3, 4 and 8 tables and column methods, built on these four checks.',
      'Classes can pause in the school holidays.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses around Year 2',
    lede: 'Grouped by what a child needs next: core number, faster facts, or making things.',
    bands: [
      { num: 'I', h3: 'Core maths', sub: 'Years 1 to 3', courses: [
        { code: 'UK / KS1 / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths', blurb: 'The whole Year 2 programme, objects first.' },
        { code: 'UK / KS1 / 02', slug: 'early-math-foundations', title: 'Early Maths Foundations', blurb: 'For a Year 2 child still building numbers to 20.' },
        { code: 'UK / KS1 / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and Readiness', blurb: 'Pattern and spatial puzzles for ages 6 to 9.' }
      ] },
      { num: 'II', h3: 'Fluency', sub: 'Quick, secure facts', courses: [
        { code: 'UK / KS2 / 01', slug: 'mental-maths-mastery-kids', title: 'Mental Maths', blurb: 'Number sense that makes arithmetic quick.' },
        { code: 'UK / KS2 / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Tens and ones you can see on the beads.' },
        { code: 'UK / KS2 / 03', slug: 'ks2-sats-maths-course', title: 'KS2 SATs Maths', blurb: 'Looking ahead: statutory Year 6 test preparation.' }
      ] },
      { num: 'III', h3: 'Making things', sub: 'Thinking in steps', courses: [
        { code: 'UK / KS3 / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Block coding from age 6.' },
        { code: 'UK / KS3 / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Puzzles that train careful, ordered thinking.' },
        { code: 'UK / KS3 / 03', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Stories and games for confident readers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How Year 2 classes run',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teachers are based in India and every slot is offered in UK time.',
    slots: [
      { time: 'After school', l: 'A short class before tea.' },
      { time: 'Early evening', l: 'For later pick-ups and clubs.' },
      { time: 'Weekend morning', l: 'When six year olds are fresh.' }
    ],
    cells: [
      { h3: 'Read aloud', p: 'Questions are spoken as well as shown, as the real reasoning paper allows.' },
      { h3: 'Number first', p: 'Most time goes on number, which carries at least four marks in five on the test.' },
      { h3: 'Explain it', p: 'Children say how they worked something out, every lesson.' },
      { h3: 'No drill', p: 'No timed mock papers for six and seven year olds.' },
      { h3: 'Free first class', p: 'Meet the teacher and play some number games, with nothing to pay.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20, or a teacher for one child.' }
    ]
  },

  projectsH2: 'Work our younger students made in class',
  projectsLede: 'A few pieces from regular lessons, none of them graded. More are in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, exactly as written.',

  fees: {
    h2: 'Fees for Year 2 maths classes',
    lede: 'The first class costs nothing. After that, one monthly fee, smaller for a group place than for 1-on-1, billed only when a course and a weekly slot are fixed. No contract and nothing paid in advance.',
    free: ['A relaxed first class', 'A clear view of place value and facts', 'Booked with a phone number'],
    group: ['15 to 20 children in Year 2', 'The same teacher every week', 'Short games between classes', 'A parent update at the end of each block'],
    one: ['A teacher for one child', 'Built around a particular gap', 'Good for quieter children']
  },

  faq: {
    eyebrow: 'KS1 SATs questions',
    h2: 'What parents ask about the KS1 SATs maths test',
    items: [
      { q: 'Is there a KS1 SATs test in May 2027?', a: 'They are optional, as they have been since 2023/24. Schools that choose to use them are recommended to give them during May 2027, so ask your child\'s teacher whether their school will.' },
      { q: 'How many papers are in the KS1 maths SATs?', a: 'Two. Paper 1 is arithmetic, 25 one-mark calculations in about 20 minutes. Paper 2 is mathematical reasoning, 35 marks in about 35 minutes, beginning with aural questions read aloud.' },
      { q: 'Can my child use a calculator or counters?', a: 'No. The framework does not permit a calculator, tracing paper, number apparatus or other supporting equipment. A pencil, ruler, rubber and, for reasoning, a mirror are allowed.' },
      { q: 'What is a good KS1 maths score?', a: 'A scaled score of 100 or more means the child met the expected standard, and 115 is the highest. In 2026 a raw score of 36 out of 60 converted to 100, though that mark can change slightly each year.' },
      { q: 'Will my child\'s school tell me the result?', a: 'Many do, but there is no national rule that results must be sent to parents, because the tests are optional and marked in school. You can always ask the teacher what the result showed.' },
      { q: 'Where can I find KS1 SATs past papers for free?', a: 'On gov.uk, in the Standards and Testing Agency collection of past test materials. It includes the 2024, 2025 and 2026 optional KS1 maths papers, their mark schemes and the conversion tables.' },
      { q: 'Should my child practise SATs papers at home?', a: 'A little, gently, if the school is using the tests. Short sets of questions read together are enough; daily timed papers are not helpful at six or seven, and secure number facts matter more.' },
      { q: 'Why did the KS1 SATs become optional?', a: 'The pages we read do not set out the reasons, so we do not guess. The 2025 Curriculum and Assessment Review notes they have been optional since 2023/24 and encourages schools to use them.' },
      { q: 'When are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are in UK time.' },
      { q: 'Are you connected with the Standards and Testing Agency?', a: 'No. Modern Age Coders is an independent online school with no link to any school, the Standards and Testing Agency or the Department for Education.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Primary assessment',
    h2: 'Related pages on primary maths in England',
    lede: 'The later checks and tests, and pages for children who enjoy maths puzzles.',
    items: [
      { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs maths papers', p: 'The statutory Year 6 tests, paper by paper.' },
      { href: '/year-4-multiplication-tables-check-explained', label: 'The Year 4 times tables check', p: 'The on-screen check that follows two years after KS1.' },
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'The four junior years: new tables, column methods and fractions.' },
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'A puzzle competition for confident primary children.' },
      { href: '/ks2-and-11-plus-maths-tutor-cost-uk', label: 'Primary tutor costs', p: 'What families in the UK typically weigh up.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free Year 2 maths class',
    lede: 'Send us a phone number and a teacher rings back at a UK time you choose. The first class is a relaxed mix of games and spoken questions, and you will hear honestly whether your child needs anything extra.',
    readFirst: 'Rather read more first? The <a class="ag-inline-link" href="/courses/elementary-mathematics-complete-masterclass">Elementary Maths course</a> lists its levels and topics, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows what a lesson looks like.',
    note: 'Messaging us on WhatsApp is quickest and costs nothing on most UK plans. Expect the answer from our India office, on a +91 number.',
    formNote: 'Nothing to pay, nothing to sign. One reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Primary tests', links: [
        { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs maths' },
        { href: '/year-4-multiplication-tables-check-explained', label: 'Times tables check' },
        { href: '/multiplication-tables-check-year-4-practice', label: 'MTC practice' },
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' }
      ] },
      { h4: 'Our classes', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'KS1 SATs maths, explained plainly'
  },

  personalityCss: `
.ag-root.ag-kse .ag-hero h1 { letter-spacing: -0.015em; font-weight: 700; max-width: 22ch; }
.ag-root.ag-kse .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-kse .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-kse .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-kse .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-kse .ag-steps li { margin-bottom: 8px; line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'England, Standards and Testing Agency, optional end of key stage 1 mathematics test. Test framework: Paper 1 arithmetic 25 marks, about 20 minutes, one-mark context-free calculations; Paper 2 mathematical reasoning 35 marks, about 35 minutes, 6 aural questions (one practice, 5 test), all questions may be read aloud, selected and constructed responses; total 60 marks, recommended 55 minutes; resources pencil, ruler, rubber, mirror; no calculator, tracing paper or number apparatus; number 48 to 54 marks (80 to 90%), measurement, geometry and statistics 6 to 12 marks (10 to 20%); mental mathematics cannot be directly assessed on paper. 2026 conversion table: raw 3 = 85, raw 36 = 100, raw 58 to 60 = 115. Understanding scaled scores: marked locally; 99 or less not met; standard set by teacher panels in 2016. Past test materials collection: 2024 to 2026 KS1 maths materials, 2027 materials on Tuesday 1 June 2027. Curriculum and Assessment Review Final Report, November 2025: optional since 2023/24, DfE does not collect take-up data, 2024 Teacher Tapp survey 60%, encourages all schools to use the tests.',
    localProject: 'What the 60 marks measure. An explainer for the optional end of KS1 maths test in England: the Review\'s statement that the tests have been optional since 2023/24 with no national take-up data and its encouragement for schools to use them, a status table for 2026 to 2027, the two papers from the STA framework (marks, timing, read-aloud aural questions, permitted equipment, question types, the 80 to 90 per cent number weighting, what a paper cannot measure), selected rows of the 2026 raw-to-scaled conversion table with our own reading of 36 out of 60, five numbered steps for using the free gov.uk past papers gently, six original Year 2 questions with reasoning plus a practice set, and honest advice on when a tutor is and is not needed. Lesson family: an optional national test explainer.',
    requiredMentions: [
      'These assessments have been optional at Key Stage 1 since 2023/24 and the DfE does not collect data on how many pupils take them.',
      'We encourage all schools to use the non-statutory Key Stage 1 tests to provide greater insights for Key Stage 2 teachers.',
      'There will be 6 aural questions at the start: one practice question and 5 test questions.',
      'The total number of marks for both papers is 60.',
      'Pupils will not be permitted to use a calculator, tracing paper, number apparatus or other supporting equipment in either of the components.',
      'Mental mathematics skills cannot be directly assessed in a paper-based test since you can only mark what the pupil records.',
      'A pupil awarded a score of 99 or less has not met the expected standard in the test.',
      'Tuesday 1 June 2027',
      '3 tens and 14 ones'
    ],
    sources: [
      { claim: 'STA, Key stage 1: mathematics test framework: papers, marks, timings, resources, aural questions, content profile and limits of paper assessment.', url: 'https://www.gov.uk/government/publications/key-stage-1-mathematics-test-framework' },
      { claim: 'STA, Optional key stage 1 tests: 2026 scaled scores: mathematics conversion table, minimum raw score of 3.', url: 'https://www.gov.uk/government/publications/optional-key-stage-1-tests-2026-scaled-scores' },
      { claim: 'STA, Understanding scaled scores at key stage 1: local marking, 85 to 115, 99 or less not met, 2016 standard setting.', url: 'https://www.gov.uk/guidance/understanding-scaled-scores-at-key-stage-1' },
      { claim: 'STA, National curriculum assessments: past test materials: KS1 maths materials 2024 to 2026 and the 1 June 2027 release date.', url: 'https://www.gov.uk/government/collections/national-curriculum-assessments-past-test-materials' },
      { claim: 'DfE, Curriculum and Assessment Review Final Report, November 2025: optional since 2023/24, no national take-up data, 2024 survey, encouragement to use the tests.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report' }
    ],
    rejectedClaims: [
      'The reasons the KS1 tests were made optional: not stated on the pages read, so the FAQ declines to guess.',
      'The share of schools giving the tests: the DfE does not collect it; only the Review\'s quoted 2024 teacher survey is cited, attributed.',
      'Any past paper question, mark scheme answer or released item: none reproduced; the six questions are original and labelled ours.',
      'Any promise of a scaled score: declined.'
    ]
  }
};
