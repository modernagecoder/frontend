'use strict';
// NNAT test prep (ag- gifted and ability door; UK and US exams cluster, row US044). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md, writer brief rule 9 (reasoning and readiness, never
// test-item drilling). Every fact read raw with curl on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/nnat-test-prep/:
//  - Pearson, NNAT3 product page (pearson-nnat3.html, product-detail JSON): "a nonverbal measure of general ability for
//    students in kindergarten through grade 12"; Administration "30 minutes, Online or Paper-Pencil, Group-Administered";
//    Forms "Levels A, B, C, D: 2 forms per level; Levels E, F, G: 1 form per level"; Norms "Naglieri Ability Index (NAI),
//    percentile ranks, stanines, scaled scores, and normal curve equivalents (NCEs) by age"; booklet names give the level
//    grades: Level A Grade K, B Grade 1, C Grade 2, D Grade 3/4, E Grades 5/6, F Grades 7-9, G Grades 10-12. Store prices
//    on the page are not used.
//  - Pearson NNAT3 campaign page (pearson-nnat3-campaign.html): "NNAT3 uses pictorial directions and requires no spoken
//    or written language."; parent reports "in both English and Spanish".
//  - Pearson NNAT3 overview brochure PDF (pearson-nnat3-overview-brochure.pdf): "Since 2004"; "It does not require
//    reading, writing, or speaking"; "Uses geometric shapes and designs"; "Uses only two colors, yellow and blue";
//    "approximately 30 minutes". The brochure's two sample items are not reproduced.
//  - Edmonds School District (WA), Highly Capable Screener (edmonds-universal-screening.html): "we universally screen ALL
//    2nd and 6th graders"; four item types named (Pattern Completion, Reasoning by Analogy, Serial Reasoning, Spatial
//    Visualization) with descriptions; "There are 48 questions per test regardless of age."; "30 minute timed test";
//    "excessive preparation for the NNAT isn't recommended"; "Should My Student Study Before Taking this test? No";
//    Test Refusal form by October 31st; 2026 testing dates November 16 to December 14.
//  - Fort Worth ISD (TX), NNAT3 (fwisd-nnat3.html): "TEA requires school districts to consider a Gifted and Talented
//    (G/T) identification process that includes an assessment in the student's home language, or that is non-verbal.";
//    "Fort Worth ISD uses the NNAT3 as a universal screener for all first graders."; "not the only data point"; MAP
//    scores, teacher feedback, parent feedback, student work; "The NNAT3 is a timed, thirty minute test that is taken
//    online."; a campus committee decides.
//  - St. Louis Public Schools (MO), Gifted Identification (slps-gifted-identification.html): all 2nd grade students
//    screened with the NNAT3; "minimum NAI score of 110 (73 rd percentile)" for further evaluation; outside assessments
//    not accepted.
// Our own material, labelled on the page: the quarter-turn table for an arrow (up, right, down, left, up), the
// what-moves-what-stays activities (turn the tile, two-window drawing, cut-picture puzzle, the rule-you-invent grid),
// the two-week calm plan, the stage ladder. No NNAT3 sample item reproduced or imitated.
// Lesson family: tracking what changes and what stays the same in a picture.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GIFTED', blurb: 'The NNAT3 from Pearson in plain terms: levels by grade, four kinds of picture reasoning, three districts that screen with it, and calm spatial play.' },
  slug: 'nnat-test-prep',
  code: 'nnt',
  accent: '#6C2A49',
  accentRationale: 'NNAT test prep: a dark plum, #6C2A49 as allocated, quiet and distinct from the green CogAT page; 9.59:1 on the #FBF8F2 paper',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'NNAT test prep',
  title: 'NNAT Test Prep: NNAT3 Nonverbal Reasoning for Ages 6 to 9',
  description: 'NNAT test prep without drilling: what Pearson\'s NNAT3 measures, levels A to G, how three districts screen with it, and spatial play that helps children aged 6 to 9.',
  ogDescription: 'The NNAT3 is a 30-minute picture test with no reading or speaking. One district answers the question "Should my student study?" with a plain no. Here is what the test is and what genuinely helps.',
  twitterDescription: 'Pearson\'s NNAT3 explained from the publisher and three districts, with spatial play for ages 6 to 9.',
  pageName: 'NNAT Test Prep: NNAT3 Nonverbal Reasoning',
  webPageDescription: 'A parent guide to the Naglieri Nonverbal Ability Test, Third Edition (NNAT3) from Pearson: levels by grade, timing, the four item types as Edmonds School District describes them, how Edmonds, Fort Worth ISD and St. Louis Public Schools use it, and original spatial activities for ages 6 to 9.',
  courseDescription: 'Live online reasoning lessons for US children aged 6 to 9, built on patterns, shapes and spatial play, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'NNAT test prep',
  navLinks: [
    { href: '#test', label: 'The NNAT3' },
    { href: '#levels', label: 'Levels by grade' },
    { href: '#kinds', label: 'Four kinds of item' },
    { href: '#screening', label: 'District screening' },
    { href: '#shapes', label: 'Spatial play' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 6 to 9 &middot; Picture reasoning',
  h1: 'NNAT test prep: calm readiness for the NNAT3',
  lede: 'The NNAT3 is the gifted screener with no words in it. A child looks at designs in two colors and picks the piece that completes a pattern, for about half an hour. Because nothing is read or spoken, districts use it to find able thinkers who might be missed by a language-heavy test, and that same design is why cramming for it makes little sense. This page explains the test from Pearson&rsquo;s own pages, shows how three public districts use it, and offers spatial play of our own that builds the reasoning behind it.',
  secondaryCta: { href: '#shapes', label: 'Try the spatial play' },
  wa: 'Hello Modern Age Coders, my child in the US has an NNAT3 screening coming up. I would like calm reasoning lessons, not drilling. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; ages 6 to 67',
  spec: [
    ['Publisher', 'Pearson'],
    ['Edition', 'Third (NNAT3)'],
    ['Grades', 'K to 12, Levels A to G'],
    ['Time', 'About 30 minutes'],
    ['Language', 'None needed'],
    ['Our lessons', 'Live online, ages 6 to 9'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The NNAT3 (Naglieri Nonverbal Ability Test, Third Edition) is Pearson&rsquo;s nonverbal test of general ability for kindergarten to grade 12: about 30 minutes of shape and design patterns, with no reading, writing or speaking. Districts such as Edmonds, Fort Worth ISD and St. Louis use it as a universal gifted screener. Honest readiness is a calm look at the format plus spatial and pattern play. We teach that kind of play live online for children aged 6 to 9, one to one or in a batch, and the opening class costs nothing.',

  picks: {
    eyebrow: 'Spatial thinking, grown slowly',
    h2: 'Three courses for children who think in pictures',
    lede: 'Each one stretches the visual reasoning the NNAT3 samples, and keeps going long after screening season.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'NNT / 01', title: 'Reasoning and readiness, ages 6 to 9', note: 'Shapes, symmetry and patterns explained aloud.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'NNT / 02', title: 'Problem solving for kids', note: 'Spotting rules and testing them step by step.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'NNT / 03', title: 'Elementary math, grades 1 to 5', note: 'Geometry and number sense from the school year, deeper.' }
    ]
  },

  sections: [
    {
      id: 'test', tint: 'tint', eyebrow: 'The NNAT3',
      h2: 'What is the NNAT3, and why is it nonverbal?',
      lede: 'The NNAT3 is a short group test from Pearson that asks children to reason with shapes and designs instead of words. Pearson describes it as a measure of general ability, not of what a child has been taught.',
      body: [
        { kind: 'two',
          leftH3: 'From Pearson&rsquo;s pages',
          left: [
            'Pearson&rsquo;s product page calls the NNAT3 "a nonverbal measure of general ability for students in kindergarten through grade 12" and lists administration as "30 minutes, Online or Paper-Pencil, Group-Administered".',
            'Its campaign page adds that "NNAT3 uses pictorial directions and requires no spoken or written language." The overview brochure says the test has been in use "Since 2004", "Uses geometric shapes and designs" and "Uses only two colors, yellow and blue", a choice made with color vision in mind.'
          ],
          rightH3: 'Why districts like that',
          right: [
            'A child who is still learning English, or who reads slowly, can show reasoning on the NNAT3 that a word-heavy test might hide. Pearson&rsquo;s campaign page names English language learners, students with dyslexia and twice-exceptional students among those it can help identify.',
            'Scores are reported as a Naglieri Ability Index (NAI) plus percentile ranks, stanines, scaled scores and normal curve equivalents, all compared by age. Pearson says parent reports are available in English and Spanish.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.pearsonassessments.com/en-us/Store/Professional-Assessments/Cognition-%26-Neuro/Naglieri-Nonverbal-Ability-Test-%7C-Third-Edition/p/100001822" rel="noopener" target="_blank">Pearson NNAT3 product page</a>, <a class="ag-inline-link" href="https://www.pearsonassessments.com/campaign/nnat3.html" rel="noopener" target="_blank">Pearson NNAT3 overview</a> and the NNAT3 overview brochure, read 31 October 2026. Modern Age Coders is not connected with Pearson or with any district named here.' }
      ]
    },
    {
      id: 'levels', tint: 'deep', eyebrow: 'Levels by grade',
      h2: 'Which NNAT3 level will my child take?',
      lede: 'The NNAT3 has seven levels, lettered A to G, each matched to a grade or a band of grades. A second grader usually takes Level C.',
      body: [
        { kind: 'table', caption: 'NNAT3 levels and grades, from the booklet names on Pearson&rsquo;s NNAT3 product page (read 31 October 2026)', head: ['Level', 'Grade', 'Forms'], rows: [
          ['A', 'Kindergarten', 'Two'],
          ['B', 'Grade 1', 'Two'],
          ['C', 'Grade 2', 'Two'],
          ['D', 'Grades 3 and 4', 'Two'],
          ['E', 'Grades 5 and 6', 'One'],
          ['F', 'Grades 7 to 9', 'One'],
          ['G', 'Grades 10 to 12', 'One']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Same length, harder designs',
          left: [
            'Edmonds School District tells families: "There are 48 questions per test regardless of age." What changes from level to level is the difficulty of the designs, not the length of the session.',
            'Pearson&rsquo;s product details read "Levels A, B, C, D: 2 forms per level; Levels E, F, G: 1 form per level", which lets a district retest a younger child on a different form.'
          ],
          rightH3: 'Timing in practice',
          right: [
            'Both Pearson and the districts below describe a session of about 30 minutes. Fort Worth ISD says "The NNAT3 is a timed, thirty minute test that is taken online." Edmonds says its students sit it "on a Chromebook at school during the school day".',
            'For a six- or seven-year-old, thirty minutes of steady looking is the real challenge. Sitting with a puzzle for ten or fifteen minutes at a time at home builds that stamina gently.'
          ] }
      ]
    },
    {
      id: 'kinds', tint: 'tint', eyebrow: 'Four kinds of item',
      h2: 'What kinds of reasoning does the NNAT3 ask for?',
      lede: 'Edmonds School District&rsquo;s parent page names four item types. Our one-line summaries follow; we show no items, and the district points families to the publisher&rsquo;s own material for that.',
      body: [
        { kind: 'table', caption: 'The four NNAT3 item types as Edmonds School District describes them (read 31 October 2026), with our plain-English summary', head: ['Item type', 'The district&rsquo;s description, summarised', 'The thinking underneath (ours)'], rows: [
          ['Pattern Completion', 'Part of a design is hidden; choose the piece that completes it', 'Seeing a whole picture and how it continues'],
          ['Reasoning by Analogy', 'Objects change across a row; work out how each is modified', 'Describing a change, then applying it again'],
          ['Serial Reasoning', 'Designs change across rows and down columns; find the sequence', 'Tracking two rules at once'],
          ['Spatial Visualization', 'A third picture is made by combining the first two', 'Holding two shapes in mind and merging them']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The common thread',
          left: [
            'All four ask the same quiet question: what changed, and what stayed the same? A child who can say "the shape stayed, the color swapped" or "it turned a quarter each time" has the habit every item leans on.',
            'Edmonds describes the test as measuring "a child\'s logical reasoning and problem-solving skills" through identifying patterns, completing sequences and making analogies.'
          ],
          rightH3: 'What it does not need',
          right: [
            'No reading, no counting words, no school facts. Pearson&rsquo;s brochure lists that "It does not require reading, writing, or speaking".',
            'That is why a sheet of arithmetic will not help, and why a child who loves LEGO, jigsaws or drawing may find the test oddly familiar.'
          ] }
      ]
    },
    {
      id: 'screening', tint: 'deep', eyebrow: 'District screening',
      h2: 'How do school districts use the NNAT3 for gifted screening?',
      lede: 'Many districts give the NNAT3 to every child in one grade, then look more closely at those who score highly. Three public districts that publish their process show how it works.',
      body: [
        { kind: 'table', caption: 'NNAT3 screening in three public districts (district pages read 31 October 2026)', head: ['District', 'Who sits it', 'What happens next'], rows: [
          ['Edmonds School District, Washington', 'All 2nd and 6th graders, in class; other grades by opt-in', 'Highly Capable screening; families can refuse by October 31st with a Test Refusal form'],
          ['Fort Worth ISD, Texas', 'All first graders, plus referred students', 'A campus committee weighs it with MAP scores, teacher and parent feedback and student work'],
          ['St. Louis Public Schools, Missouri', 'All 2nd grade students', 'A Naglieri Ability Index of at least 110, the 73rd percentile, leads to further evaluation']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why a nonverbal screener',
          left: [
            'Fort Worth ISD explains that "TEA requires school districts to consider a Gifted and Talented (G/T) identification process that includes an assessment in the student\'s home language, or that is non-verbal." It adds: "Fort Worth ISD uses the NNAT3 as a universal screener for all first graders."',
            'Screening a whole grade, Fort Worth says, is meant "to seek and serve giftedness at all campuses within all populations", not only among children whose parents ask.'
          ],
          rightH3: 'One data point among several',
          right: [
            'Fort Worth is clear that the NNAT3 "is not the only data point considered in the G/T screening process". St. Louis treats an NAI of 110 as a reason to look further, not as a label.',
            'St. Louis also notes that assessments from other districts or independent examiners are not accepted there. Check your own district&rsquo;s rule before arranging private testing.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.edmonds.wednet.edu/programs-services/highly-capable/universal-screening" rel="noopener" target="_blank">Edmonds School District screener page</a>, <a class="ag-inline-link" href="https://www.fwisd.org/departments/gifted-and-talented/nnat3" rel="noopener" target="_blank">Fort Worth ISD NNAT3 page</a> and <a class="ag-inline-link" href="https://www.slps.org/departments/academics/gifted-education/gifted-identification" rel="noopener" target="_blank">St. Louis Public Schools gifted identification</a>, read 31 October 2026. Edmonds lists 2026 school testing dates from November 16 to December 14.' }
      ]
    },
    {
      id: 'study', tint: 'tint', eyebrow: 'Should you study?',
      h2: 'Should my child study for the NNAT3?',
      lede: 'Edmonds School District asks this question on its own page and answers it in one word: no. Being comfortable with the format is the only preparation it suggests.',
      body: [
        { kind: 'two',
          leftH3: 'The district&rsquo;s answer',
          left: [
            'Under the heading "Should My Student Study Before Taking this test?", Edmonds writes: "No, however it would benefit your child to be comfortable with the testing format prior to testing." Elsewhere on the page it says "excessive preparation for the NNAT isn\'t recommended", while seeing the kinds of questions can be helpful.',
            'Edmonds suggests families search online for NNAT3 Level C for second grade and Level E for sixth grade, so the format is not a surprise. We would add: start from Pearson&rsquo;s own pages rather than a prep seller. That is familiarity, not drilling.'
          ],
          rightH3: 'Our view, plainly',
          right: [
            'We agree. A young child who has rehearsed stacks of look-alike designs may score above their everyday reasoning, and then be placed in a program that moves faster than suits them.',
            'What genuinely helps is the slow, playful work below: turning, folding, building and drawing, with plenty of talk about what changed. It grows spatial reasoning that also pays off in geometry, fractions, coding and art.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>Two to three weeks before (ours).</b> Keep everyday play going: jigsaws, LEGO, drawing, tangram-style shapes. No timers.',
          '<b>One week before.</b> Look once, together, at the publisher&rsquo;s or district&rsquo;s description of the format. Talk about it as a puzzle game.',
          '<b>The evening before.</b> Normal routine, normal bedtime. Nothing to practice.',
          '<b>On the day.</b> A good breakfast and a light word: "It is a picture puzzle game. Just do your best and have fun."',
          '<b>Afterwards.</b> Ask what was fun, not how it went. The result is one data point for the school, not a verdict on your child.'
        ] }
      ]
    },
    {
      id: 'shapes', tint: 'deep', eyebrow: 'Spatial play',
      h2: 'What spatial play builds the reasoning the NNAT3 samples?',
      lede: 'Play that asks a child to notice what moves and what stays the same. Every activity here is ours, uses real objects, and is deliberately unlike a test page.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Turn the tile (ours)', p: 'Draw a dot in one corner of a paper square. Turn it a quarter at a time and ask where the dot will be before each turn. Then try half turns, and turning the other way.' },
          { h3: 'Two windows (ours)', p: 'Draw a simple shape on each of two sheets of tracing or baking paper. Before laying one over the other, ask your child to draw what the stack will look like. Then lay them together and compare.' },
          { h3: 'The cut picture (ours)', p: 'Cut a picture from a magazine into four or six pieces, hide one piece, and ask your child to describe what the missing piece must show. Then reveal it.' }
        ] },
        { kind: 'table', mt: true, caption: 'Our worked example: where an arrow points after each quarter turn clockwise', head: ['Quarter turns', 'Arrow points', 'What a child might say'], rows: [
          ['0', 'Up', '"It starts at the top."'],
          ['1', 'Right', '"It moved one corner round, like a clock hand."'],
          ['2', 'Down', '"Two turns, so it is upside down."'],
          ['3', 'Left', '"Three turns is the same as one turn the other way."'],
          ['4', 'Up', '"Four turns and it is back where it started."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the arrow matters (ours)',
          left: [
            'The insight in the last two rows is a real piece of reasoning: four quarter turns make a full turn, so five turns look exactly like one. A child who sees that can predict any number of turns without doing them all.',
            'Change one thing and ask again: what if the arrow also changes color every turn? Now two things move at once, which is the kind of double change that takes practice to track.'
          ],
          rightH3: 'The rule you invent (ours)',
          right: [
            'Swap roles. Your child lays out a grid of three by three objects, such as buttons, coins or blocks, following a secret rule of their own across the rows. You try to guess it.',
            'Inventing a rule is harder than spotting one, and children love beating a parent. It is also the clearest evidence that they understand patterns from the inside.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages of seeing change in a picture',
    lede: 'Our description of how spatial reasoning tends to develop between six and nine.',
    table: { caption: 'Stages of tracking change (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Matching', 'Finds the identical picture; misses small differences'],
      ['2. One change', 'Notices a single change, such as color or size'],
      ['3. Two changes', 'Tracks two things changing at once, such as position and shading'],
      ['4. Predicting', 'Says what comes next before looking at the choices']
    ] },
    left: { h3: 'For parents', ps: [
      'Moving from stage 2 to stage 3 is the big step for most seven- and eight-year-olds. It comes from play, not pages.',
      'Ask your child to cover the answers and predict first. That one habit raises the level of thinking quickly.'
    ] },
    right: { h3: 'For children', ps: [
      'Say what changed and what stayed the same. Then check if your idea works for every picture, not only the first two.',
      'If two answers look right, look at the tiny details: corners, dots, which way a line points.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses for visual thinkers aged 5 to 12',
    lede: 'Spatial reasoning connects to geometry, art and code, so these live courses keep a picture thinker moving.',
    bands: [
      { num: 'I', h3: 'Reasoning and shapes', sub: 'Ages 5 to 9', courses: [
        { code: 'NNT / R / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Patterns and spatial play.' },
        { code: 'NNT / R / 02', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Shapes and counting, hands on.' },
        { code: 'NNT / R / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Seeing amounts at a glance.' }
      ] },
      { num: 'II', h3: 'Elementary math', sub: 'Grades 1 to 5', courses: [
        { code: 'NNT / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Geometry and number.' },
        { code: 'NNT / E / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Rules and steps.' },
        { code: 'NNT / E / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental math', blurb: 'Numbers you can see.' }
      ] },
      { num: 'III', h3: 'Shapes that move', sub: 'Ages 7 to 12', courses: [
        { code: 'NNT / C / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Rotate, glide and repeat.' },
        { code: 'NNT / C / 02', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Turtle drawings by rule.' },
        { code: 'NNT / C / 03', slug: 'game-development-masterclass-for-kids', title: 'Game design for kids', blurb: 'Worlds built from patterns.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Spatial lessons a young child looks forward to',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Short sessions after school, puzzles on camera.' },
      { time: 'Weekends', l: 'A slower slot for building and drawing.' },
      { time: '1-on-1', l: 'For a child who wants to go faster, or slower.' }
    ],
    cells: [
      { h3: 'Predict first', p: 'Children say what comes next before choosing.' },
      { h3: 'Hands busy', p: 'Paper, tiles and blocks at the desk.' },
      { h3: 'Puzzles we wrote', p: 'Never copies of test designs.' },
      { h3: 'One look at format', p: 'So the day feels like a game.' },
      { h3: 'Honest about results', p: 'No class can promise a screening outcome.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty children, or one.' }
    ]
  },

  projectsH2: 'Made by children in our classes',
  projectsLede: 'Patterns, drawings and early programs from young students. Browse <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Google reviews from parents, quoted as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Lessons are paid month by month with nothing long-term to sign, which suits families who want a few calm weeks of spatial play around screening season.',
    free: ['A free first class', 'Watch your child play the puzzles', 'No card details'],
    group: ['Fifteen to twenty young learners', 'The same teacher each week', 'Choose your batch', 'Monthly'],
    one: ['Your child alone with a teacher', 'Puzzles matched to their level', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'NNAT test prep: what parents ask',
    items: [
      { q: 'What is the NNAT3 test?', a: 'It is the Naglieri Nonverbal Ability Test, Third Edition, published by Pearson. It measures general ability with shapes and designs for kindergarten to grade 12, and needs no reading, writing or speaking.' },
      { q: 'How long is the NNAT3?', a: 'About 30 minutes. Pearson lists 30 minutes, and Fort Worth ISD calls it a timed, thirty minute test taken online.' },
      { q: 'How many questions are on the NNAT3?', a: 'Edmonds School District tells parents there are 48 questions per test regardless of age. The designs get harder at higher levels.' },
      { q: 'What NNAT3 level is for second grade?', a: 'Level C. Pearson matches Level A to kindergarten, B to grade 1, C to grade 2 and D to grades 3 and 4.' },
      { q: 'Should my child study for the NNAT?', a: 'Edmonds School District answers no, adding that it helps for a child to be comfortable with the format. A calm look at the format plus everyday spatial play is the honest approach.' },
      { q: 'What is a good NNAT3 score?', a: 'Districts set their own lines. St. Louis Public Schools, for example, looks further at any child with a Naglieri Ability Index of 110 or more, which it puts at the 73rd percentile.' },
      { q: 'Why do schools use a nonverbal test?', a: 'It lets children show reasoning regardless of language or reading level. Fort Worth ISD notes that the Texas Education Agency requires an identification process that includes a home-language or nonverbal assessment.' },
      { q: 'What do your lessons cover?', a: 'Children aged 6 to 9 work live with a teacher on patterns, turning and folding shapes, combining pictures and explaining what changed. We use our own puzzles and real objects, never copies of test items.' },
      { q: 'What times are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of Pearson or my school district?', a: 'No. We are an independent online school with no connection to Pearson or any district, and we never promise a score or gifted placement.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families of young children in the US.',
    items: [
      { href: '/online-math-tutor-1st-grade', label: 'First grade math tutoring', p: 'The year Fort Worth screens everyone.' },
      { href: '/online-math-tutor-2nd-grade', label: 'Second grade math tutoring', p: 'Shapes, place value and patterns.' },
      { href: '/online-math-tutor-kindergarten', label: 'Kindergarten math tutoring', p: 'First steps with shapes and numbers.' },
      { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math tutoring', p: 'Angles, symmetry and fractions.' },
      { href: '/online-maths-tutoring-for-kids-in-usa', label: 'Math tutoring for kids', p: 'Live lessons for children across the US.' },
      { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo preparation', p: 'Picture-rich puzzles in a friendly contest.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'Planning math at home.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Let us know your child&rsquo;s grade and when the screening is. The teacher will try a few spatial games with them and suggest a gentle plan.',
    readFirst: 'You may like to read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">all our courses</a> first.',
    note: 'Our teachers work live over video from India, at times that fit US after-school hours and weekend mornings. Message us on WhatsApp for the quickest reply.',
    formNote: 'There is no charge for the first class and no card is asked for.'
  },

  footer: {
    cols: [
      { h4: 'Early grades', links: [
        { href: '/online-math-tutor-kindergarten', label: 'Kindergarten math' },
        { href: '/online-math-tutor-1st-grade', label: 'First grade math' },
        { href: '/online-math-tutor-2nd-grade', label: 'Second grade math' },
        { href: '/online-math-tutor-cost', label: 'Tutoring costs' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-maths-tutoring-for-kids-in-usa', label: 'Math for kids' },
        { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Four quarter turns, back to the start'
  },

  personalityCss: `
.ag-root.ag-nnt .ag-hero h1 { letter-spacing: -0.01em; max-width: 19ch; }
.ag-root.ag-nnt .ag-capsule { border-left-width: 3px; border-radius: 8px; }
.ag-root.ag-nnt .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-nnt .ag-grid-3 h3 { font-size: 1.05rem; }
.ag-root.ag-nnt .ag-section-head h2 { max-width: 26ch; }
`,

  dossier: {
    curriculumAuthority: 'Pearson NNAT3 product page, campaign page and overview brochure, read raw 31 October 2026 (K to 12; 30 minutes group; Levels A to G with grades from booklet names; two forms for A to D, one for E to G; NAI, percentile ranks, stanines, scaled scores, NCEs by age; pictorial directions; since 2004; yellow and blue only). District pages: Edmonds School District, Fort Worth ISD, St. Louis Public Schools.',
    localProject: 'Our quarter-turn table for an arrow (up, right, down, left, up), turn-the-tile, two-windows, the cut-picture puzzle, the rule-you-invent grid, the five-step calm plan and the four-stage ladder. Lesson family: tracking what changes and what stays the same.',
    requiredMentions: ['There are 48 questions per test regardless of age.', 'NNAT3 uses pictorial directions and requires no spoken or written language.', 'Uses only two colors, yellow and blue', 'Fort Worth ISD uses the NNAT3 as a universal screener for all first graders.', 'The NNAT3 is a timed, thirty minute test that is taken online.', 'No, however it would benefit your child to be comfortable with the testing format prior to testing.', 'Naglieri Ability Index of at least 110, the 73rd percentile', 'Levels A, B, C, D: 2 forms per level', 'Four quarter turns, back to the start', 'The rule you invent (ours)'],
    sources: [
      { claim: 'Pearson NNAT3 product page: grades, administration, forms, norms, level grades.', url: 'https://www.pearsonassessments.com/en-us/Store/Professional-Assessments/Cognition-%26-Neuro/Naglieri-Nonverbal-Ability-Test-%7C-Third-Edition/p/100001822' },
      { claim: 'Pearson NNAT3 overview page: pictorial directions, no spoken or written language.', url: 'https://www.pearsonassessments.com/campaign/nnat3.html' },
      { claim: 'Pearson NNAT3 overview brochure: since 2004, two colors, about 30 minutes.', url: 'https://pearsonassessments.com/content/dam/school/global/clinical/us/assets/nnat3/nnat3-overview-brochure.pdf' },
      { claim: 'Edmonds School District: universal grade 2 and 6 screening, four item types, 48 questions, study advice.', url: 'https://www.edmonds.wednet.edu/programs-services/highly-capable/universal-screening' },
      { claim: 'Fort Worth ISD: TEA nonverbal requirement, universal first-grade screening, 30-minute online test.', url: 'https://www.fwisd.org/departments/gifted-and-talented/nnat3' },
      { claim: 'St. Louis Public Schools: grade 2 NNAT3 screening, NAI 110 line, outside assessments not accepted.', url: 'https://www.slps.org/departments/academics/gifted-education/gifted-identification' }
    ],
    rejectedClaims: [
      'Pearson store prices for NNAT3 materials: not printed; brief rule 4.',
      'The two sample items in Pearson\'s brochure and the Edmonds sample questions: not reproduced or imitated; rule 9.',
      'Edmonds\' wording that the test measures "innate abilities": not repeated as our claim; the page quotes only its preparation advice and item descriptions.',
      'Denver Public Schools universal screening page (celt.dpsk12.org): connection failed on 31 October 2026, not retried.',
      'That practice raises NNAT3 scores, or any score or placement promise for our classes: refused.',
      'Any affiliation with Pearson or any district: none.'
    ]
  }
};
