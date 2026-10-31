'use strict';
// OLSAT test prep (ag- gifted and ability door; UK and US exams cluster, row US045). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md, writer brief rule 9 (reasoning and readiness, never
// test-item drilling). Every fact read raw with curl on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/olsat-test-prep/:
//  - Pearson, OLSAT 8 product page (pearson-olsat8.html, text in .txt, product-detail JSON): "assesses verbal,
//    nonverbal, and quantitative cognitive abilities for K-12 students"; "how well a student learns, not what has been
//    learned"; Features list "detecting likenesses and differences, recalling words and numbers, defining words,
//    following directions, classifying, establishing sequence, solving arithmetic problems, and completing analogies";
//    "Content clusters and item types include verbal, nonverbal, and quantitative"; Achievement/Ability Comparison with
//    SAT10; Publication date 2003; Age range "Grade K-12 paper, Grades 2-12 online"; Completion time "Varies by level
//    (untimed), maximum 75 minutes"; Forms "Single form with seven levels"; Norms "Fall and Spring, age- and grade-based
//    norms, based on 40,000 students nationally"; scores School Ability Index, percentile rank, stanine, NCE; starter
//    kits named "OLSAT8 Form 5 Level A ..." that include "1 Practice Test (Print)". Store prices not used.
//  - Darien Public Schools (CT), Identification Process (darien-identification.html): "all students in grades 3 and 5
//    take the OLSAT as a universal screening tool"; qualify on "at least three of the assessments"; "A maximum of two of
//    the three School Ability Index (SAI) scores"; OLSAT Verbal, Nonverbal and Total SAI 135-150; Renzulli Scales, Degrees
//    of Reading Power, Creative Written Expression, Torrance Test; "No one score on any one measure determines
//    placement." (the district attributes it to NAGC); referrals by teachers and/or parents; 2026 to 2027 referral dates.
//  - Westport Public Schools (CT), Gifted Identification Process (westport-gifted.html): "All second-grade students will
//    be screened"; "All students will be administered the Otis-Lennon School Ability Test."; Teacher Observation,
//    Performance-Based Assessment, screening folder, parent questionnaire; Planning and Placement Team; grades K, 1 and 3
//    to 8 by referral, "OLSAT or WASI may be administered".
//  - Los Alamitos Unified School District (CA), GATE page (losal-hopkinson-gate.html): OLSAT "scheduled at each school
//    site within the months of January and February"; "All students in the third grade are screened, with parental
//    consent"; private testing "considered as a piece of evidence, not as automatic identification".
// Our own material, labelled on the page: the two-step directions game, story-order strips, same-and-different talk,
// the dinner-table number story (3 plates of 4 grapes, 2 eaten: 12 - 2 = 10) worked in steps, the four-part listening
// ladder. No OLSAT item reproduced or imitated.
// Lesson family: listening carefully and holding a sequence in mind.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GIFTED', blurb: 'OLSAT-8 from Pearson for parents: seven levels, verbal, nonverbal and quantitative clusters, three districts that use it, and listening and sequence play.' },
  slug: 'olsat-test-prep',
  code: 'ot',
  accent: '#5F6C4C',
  accentRationale: 'OLSAT test prep: a muted olive, #5F6C4C as allocated, earthy and unhurried; 5.30:1 on the #FBF8F2 paper, above the 4.5:1 floor',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'OLSAT test prep',
  title: 'OLSAT Test Prep: OLSAT-8 Reasoning and Readiness, Ages 6 to 9',
  description: 'OLSAT test prep, honestly: what Pearson\'s OLSAT-8 measures, its levels and School Ability Index, how three districts use it, and listening play for ages 6 to 9.',
  ogDescription: 'Pearson says the OLSAT-8 shows how well a student learns, not what has been learned. Here is the test from the publisher, three districts that use it, and calm ways to grow the thinking it samples.',
  twitterDescription: 'The OLSAT-8 explained from Pearson and three districts, with listening and sequence play for young children.',
  pageName: 'OLSAT Test Prep: OLSAT-8 Reasoning and Readiness',
  webPageDescription: 'A parent guide to the Otis-Lennon School Ability Test, Eighth Edition (OLSAT-8) from Pearson: the verbal, nonverbal and quantitative clusters, levels, timing and the School Ability Index, how Darien, Westport and Los Alamitos Unified use it, and original listening and sequence activities for ages 6 to 9.',
  courseDescription: 'Live online reasoning lessons for US children aged 6 to 9: listening, following directions, sequencing, classifying and number sense, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'OLSAT test prep',
  navLinks: [
    { href: '#olsat', label: 'About OLSAT-8' },
    { href: '#tasks', label: 'What it asks' },
    { href: '#sai', label: 'The SAI score' },
    { href: '#use', label: 'District use' },
    { href: '#listen', label: 'Listening play' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 6 to 9 &middot; OLSAT-8 explained',
  h1: 'OLSAT test prep: readiness, not rehearsal',
  lede: 'The OLSAT-8 is one of the older names in gifted screening, and it shows. Parents who sat a version themselves remember it as the test that felt like listening games and picture puzzles. That memory is closer to the truth than the prep catalogues suggest. Pearson describes the OLSAT-8 as a guide to how well a child learns rather than what they have learned, and the districts that use it treat it as one clue among several. Here is what the test contains, how three districts use it, and the everyday listening and sequence play that grows the thinking behind it.',
  secondaryCta: { href: '#listen', label: 'See the listening play' },
  wa: 'Hello Modern Age Coders, my child in the US will take the OLSAT and I would prefer gentle reasoning lessons to drilling. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; ages 6 to 67',
  spec: [
    ['Publisher', 'Pearson'],
    ['Edition', 'Eighth (OLSAT-8)'],
    ['Clusters', 'Verbal, nonverbal, quantitative'],
    ['Levels', 'Seven, single form'],
    ['Time', 'Untimed, at most 75 minutes'],
    ['Main score', 'School Ability Index'],
    ['Our lessons', 'Live online, ages 6 to 9'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The OLSAT-8 (Otis-Lennon School Ability Test, Eighth Edition) is a Pearson ability test for kindergarten to grade 12 that, in Pearson&rsquo;s words, assesses verbal, nonverbal and quantitative cognitive abilities and reports a School Ability Index. Districts such as Darien, Westport and Los Alamitos Unified use it to screen for gifted programs alongside other evidence. Honest readiness is familiarity with the format plus listening, sequence and number play. Our teachers run those games live online for six- to nine-year-olds, in a group batch or 1-on-1, with a free first class.',

  picks: {
    eyebrow: 'Listening, ordering, reasoning',
    h2: 'Three courses that grow the skills behind the OLSAT-8',
    lede: 'Each builds a habit children use every school day: listening closely, holding steps in mind and working with numbers flexibly.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'OT / 01', title: 'Reasoning and readiness, ages 6 to 9', note: 'Directions, sequences, groups and patterns, talked through.' },
      { course: 'mental-maths-mastery-kids', code: 'OT / 02', title: 'Mental math, ages 5 to 10', note: 'Number stories solved in the head, with reasons.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'OT / 03', title: 'Problem solving for kids', note: 'Following and writing step-by-step instructions.' }
    ]
  },

  sections: [
    {
      id: 'olsat', tint: 'tint', eyebrow: 'About OLSAT-8',
      h2: 'What is the OLSAT-8 test?',
      lede: 'The OLSAT-8 is a school ability test from Pearson, given to groups or individuals, on paper or online. It sits beside achievement tests to show how a child reasons, not how much they have covered.',
      body: [
        { kind: 'two',
          leftH3: 'Pearson&rsquo;s description',
          left: [
            'Pearson&rsquo;s product page says the OLSAT 8 "assesses verbal, nonverbal, and quantitative cognitive abilities for K-12 students in paper and digital formats". It calls the test a general ability indicator that offers insight into "how well a student learns, not what has been learned."',
            'The eighth edition was published in 2003, according to the same page, and its fall and spring norms, by age and by grade, are "based on 40,000 students nationally".'
          ],
          rightH3: 'The practical details',
          right: [
            'Pearson lists the age range as "Grade K-12 paper, Grades 2-12 online", so a kindergartner or first grader usually sits it on paper. The forms are described as a "Single form with seven levels".',
            'Completion time "Varies by level (untimed), maximum 75 minutes." When the OLSAT-8 is given with the Stanford Achievement Test (SAT10), Pearson says a school can also get an Achievement/Ability Comparison for each child.'
          ] },
        { kind: 'table', mt: true, caption: 'OLSAT-8 product details (Pearson OLSAT 8 page, read 31 October 2026)', head: ['Detail', 'What Pearson lists'], rows: [
          ['Publication date', '2003'],
          ['Grades', 'K to 12 on paper; 2 to 12 online'],
          ['Administration', 'Online or paper; individual or group'],
          ['Forms', 'A single form (Form 5) with seven levels'],
          ['Time', 'Untimed, varying by level, at most 75 minutes'],
          ['Norms', 'Fall and spring, by age and grade, 40,000 students'],
          ['Scores by age', 'School Ability Index, percentile rank, stanine, NCE'],
          ['Scores by grade', 'Percentile rank, stanine, NCE'],
          ['With SAT10', 'Achievement/Ability Comparison']
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.pearsonassessments.com/en-us/Store/Professional-Assessments/Academic-Learning/Otis-Lennon-School-Ability-Test-%7C-Eighth-Edition/p/100000003" rel="noopener" target="_blank">Pearson OLSAT 8 product page</a>, read 31 October 2026. Pearson does not list grade-by-grade level letters on that page, so we do not print a level chart; ask your school which level your child will take. Modern Age Coders has no connection with Pearson or with the districts named on this page.' }
      ]
    },
    {
      id: 'tasks', tint: 'deep', eyebrow: 'What it asks',
      h2: 'What kinds of questions are on the OLSAT-8?',
      lede: 'Pearson lists eight kinds of task, grouped into verbal, nonverbal and quantitative clusters. We describe the thinking each needs; we do not reproduce or imitate any item.',
      body: [
        { kind: 'table', caption: 'The tasks Pearson names for the OLSAT-8 (read 31 October 2026), with the everyday skill underneath (our description)', head: ['Task, in Pearson&rsquo;s words', 'The everyday skill underneath (ours)'], rows: [
          ['Detecting likenesses and differences', 'Looking closely and comparing two things feature by feature'],
          ['Recalling words and numbers', 'Holding information in mind for a few seconds'],
          ['Defining words', 'A rich spoken vocabulary, built by talk and stories'],
          ['Following directions', 'Listening to the whole instruction before acting'],
          ['Classifying', 'Sorting by a rule and saying what the rule is'],
          ['Establishing sequence', 'Putting events or steps in a sensible order'],
          ['Solving arithmetic problems', 'Number sense and simple reasoning with amounts'],
          ['Completing analogies', 'Seeing how two things relate and applying it again']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why young children find it familiar',
          left: [
            'Several of these tasks, especially following directions and recalling words and numbers, are about listening. At the younger levels, much of the test is read aloud. A child who is used to listening to a whole instruction, rather than starting halfway through, already has a quiet advantage.',
            'Pearson groups the item types into verbal, nonverbal and quantitative content clusters. A child can be strong in one and average in another, which is useful information for a teacher whatever the screening outcome.'
          ],
          rightH3: 'The practice test schools receive',
          right: [
            'Pearson&rsquo;s starter kits for schools list "1 Practice Test (Print)" with its own directions for administration. In other words, the publisher builds a short warm-up into what districts buy, so children meet the format before the real session.',
            'That is the right amount of familiarity. Beyond it, extra rehearsal tends to measure rehearsal rather than reasoning.'
          ] }
      ]
    },
    {
      id: 'sai', tint: 'tint', eyebrow: 'The SAI score',
      h2: 'What is a School Ability Index, and what OLSAT score is gifted?',
      lede: 'The School Ability Index (SAI) is the OLSAT-8&rsquo;s main age-based score. There is no national gifted cut-off: each district decides how to use it, usually alongside other evidence.',
      body: [
        { kind: 'two',
          leftH3: 'What the SAI is',
          left: [
            'Pearson lists the School Ability Index, percentile rank, stanine and normal curve equivalent as the scores reported by age. The SAI compares a child with others of the same age in the national sample.',
            'Because it is age-based, a child who is young for their grade is compared with children their own age, not with older classmates.'
          ],
          rightH3: 'How one district uses it',
          right: [
            'Darien Public Schools publishes its rule in full. A student qualifies for the district&rsquo;s gifted program by meeting criteria on "at least three of the assessments" in a list, and "A maximum of two of the three School Ability Index (SAI) scores" from the OLSAT can count.',
            'The OLSAT lines Darien gives are a Verbal, Nonverbal or Total SAI of 135 to 150. The other measures include teacher rating scales, a reading test, a writing rubric and a creativity test.'
          ] },
        { kind: 'p', mt: true, html: 'Darien&rsquo;s page also quotes the National Association for Gifted Children: "No one score on any one measure determines placement." That sentence is the honest frame for any OLSAT result. A high SAI opens a door to look further; an ordinary one on a tired morning does not close a child&rsquo;s future.' }
      ]
    },
    {
      id: 'use', tint: 'deep', eyebrow: 'District use',
      h2: 'How do school districts use the OLSAT for gifted identification?',
      lede: 'Districts that use the OLSAT-8 tend to screen a whole grade, then gather other evidence for the children who stand out. Three public districts show the pattern.',
      body: [
        { kind: 'table', caption: 'OLSAT use in three public districts (district pages read 31 October 2026)', head: ['District', 'When and who', 'Alongside the OLSAT'], rows: [
          ['Darien Public Schools, Connecticut', 'All students in grades 3 and 5, as a universal screen; others by referral', 'Rating scales, reading, writing and creativity measures; at least three criteria met'],
          ['Westport Public Schools, Connecticut', 'All second graders; grades K, 1 and 3 to 8 by referral', 'Teacher observation, a performance-based assessment, work samples, a parent questionnaire'],
          ['Los Alamitos Unified, California', 'All third graders with parental consent, January to February; grades 4 to 7 on request', 'Achievement records and scores, reviewed by a GATE Identification Committee']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Westport: a process, not a test',
          left: [
            'Westport says "All second-grade students will be screened" through a "comprehensive, multi-dimensional process". The steps include teacher observation, a step headed Group Reasoning Test that reads "All students will be administered the Otis-Lennon School Ability Test.", and a performance-based assessment of higher-level thinking.',
            'A Planning and Placement Team then reviews everything gathered. For other grades, Westport says "OLSAT or WASI may be administered" after a referral.'
          ],
          rightH3: 'Los Alamitos: private tests as evidence only',
          right: [
            'Los Alamitos Unified schedules the OLSAT "at each school site within the months of January and February", and says all third graders are screened with parental consent.',
            'Its page adds that private testing results, where available, are "considered as a piece of evidence, not as automatic identification." Paying for an outside test is rarely a shortcut.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.darienps.org/teaching-learning/idea-program/identification-process" rel="noopener" target="_blank">Darien Public Schools identification process</a>, <a class="ag-inline-link" href="https://www.westportps.org/fs/pages/4625" rel="noopener" target="_blank">Westport Public Schools gifted identification</a> and <a class="ag-inline-link" href="https://hopkinson.losal.org/fs/pages/617" rel="noopener" target="_blank">Los Alamitos Unified GATE identification</a>, read 31 October 2026. Darien&rsquo;s 2026 to 2027 winter referral period for current students in grades 1 to 7 runs January 11 to January 29, 2027.' }
      ]
    },
    {
      id: 'listen', tint: 'tint', eyebrow: 'Listening play',
      h2: 'How can parents build OLSAT-style thinking without drilling?',
      lede: 'Through listening games, ordering stories and number talk at the table. These activities are ours, use no worksheets, and deliberately look nothing like a test.',
      body: [
        { kind: 'ol', items: [
          '<b>Two-step directions (ours).</b> Give a playful instruction with two parts, such as "Touch your nose, then clap three times." When that is easy, try three parts, or add a condition: "If you are wearing socks, hop once." The skill is waiting for the whole instruction before moving.',
          '<b>Story strips (ours).</b> Draw four quick scenes of something your child did today: waking up, breakfast, the bus, school. Shuffle them and ask your child to put them in order and tell the story. Then remove one and ask what is missing.',
          '<b>Same and different (ours).</b> Pick two objects, such as an apple and a ball. Take turns naming one way they are the same and one way they are different. Keep going until someone runs out. Unusual answers score double.',
          '<b>Number stories at dinner (ours).</b> Turn the table into a problem: "There are 3 plates with 4 grapes on each. Dad eats 2. How many grapes are left?" Ask your child to explain each step, not just the answer.',
          '<b>Word of the day (ours).</b> Choose one new word at breakfast and try to use it three times before bed. Vocabulary grows from conversation far faster than from lists.'
        ] },
        { kind: 'table', mt: true, caption: 'Our worked example: the grapes number story, one step at a time', head: ['Step', 'What the child thinks', 'Running total'], rows: [
          ['1', 'Three plates, four grapes on each: 4 + 4 + 4', '12'],
          ['2', 'Or three groups of four: 3 x 4', '12'],
          ['3', 'Dad eats two, so take two away: 12 - 2', '10'],
          ['4', 'Check: one plate now has two, the others four: 2 + 4 + 4', '10']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the check step matters (ours)',
          left: [
            'Step 4 solves the problem a second way, by picturing where the grapes actually went. Getting the same answer twice is how a child learns to trust their own reasoning instead of looking for a grown-up&rsquo;s nod.',
            'Change the story and ask again: what if Dad eats one from each plate? A child who answers 9 straight away is thinking about the structure, not just the numbers.'
          ],
          rightH3: 'Why listening comes first',
          right: [
            'Many six- and seven-year-olds can reason well but start before the instruction ends. Games that reward waiting, such as the two-step directions above, build a habit that helps in every lesson, test or not.',
            'Keep it light. Ten minutes of play most days beats an hour on a weekend, and a child who enjoys the games will keep asking for them.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages of listening and holding a sequence',
    lede: 'Our description of how young children typically grow in following and ordering information.',
    table: { caption: 'Stages of listening and sequencing (ours)', head: ['Stage', 'What you might see'], rows: [
      ['1. First part only', 'Acts on the first instruction and forgets the rest'],
      ['2. Two parts', 'Follows two steps in order when they are spoken slowly'],
      ['3. Conditions', 'Handles "if" and "before" and "after" in an instruction'],
      ['4. Retelling', 'Can repeat a set of steps back and spot one that is out of order']
    ] },
    left: { h3: 'For parents', ps: [
      'Most six-year-olds manage stage 2 with practice; stage 3 often arrives around seven or eight. Each step up helps far beyond any screening.',
      'Speak a little more slowly than usual and pause before the last part. It gives a child time to hold it.'
    ] },
    right: { h3: 'For children', ps: [
      'Wait until the grown-up stops talking before you start. Then say the steps to yourself in order.',
      'If you are not sure, it is fine to ask for the instruction again in class.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses that keep a curious young mind busy',
    lede: 'Live lessons for children who enjoy puzzles, words and numbers, from first counting to first programs.',
    bands: [
      { num: 'I', h3: 'Thinking and number', sub: 'Ages 5 to 9', courses: [
        { code: 'OT / R / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Listen, order, reason.' },
        { code: 'OT / R / 02', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Concrete first numbers.' },
        { code: 'OT / R / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Stories with numbers.' }
      ] },
      { num: 'II', h3: 'Elementary', sub: 'Grades 1 to 5', courses: [
        { code: 'OT / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5, deeper.' },
        { code: 'OT / E / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Steps in order.' },
        { code: 'OT / E / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus math', blurb: 'Bead-by-bead number sense.' }
      ] },
      { num: 'III', h3: 'Instructions a computer follows', sub: 'Ages 7 and up', courses: [
        { code: 'OT / C / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Sequences that run.' },
        { code: 'OT / C / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks, then games.' },
        { code: 'OT / C / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How machines decide, ages 8 up.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Short, lively reasoning lessons',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school sessions kept short for young attention spans.' },
      { time: 'Weekends', l: 'A slower slot for stories and building.' },
      { time: '1-on-1', l: 'Every game pitched at one child&rsquo;s level.' }
    ],
    cells: [
      { h3: 'Listen fully', p: 'Games that reward hearing the whole instruction.' },
      { h3: 'Say the reason', p: 'Every answer comes with a because.' },
      { h3: 'Our own puzzles', p: 'Written by us, never copied test pages.' },
      { h3: 'Format, briefly', p: 'One calm look so the day is no surprise.' },
      { h3: 'No guarantees', p: 'Districts decide; we grow thinking.' },
      { h3: 'Two formats', p: 'A batch of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'From our youngest students',
  projectsLede: 'Puzzles, stories and first programs by children in our classes. See <a class="ag-inline-link" href="/student-labs">student labs</a> for the full collection.',
  reviewsLede: 'Parents&rsquo; words from Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Families pay monthly, with no long agreement, so a few weeks of listening and reasoning games can stay just that if you prefer.',
    free: ['A free first class', 'See the games in action', 'No card details'],
    group: ['Fifteen to twenty young learners', 'A familiar teacher each week', 'Choose your batch', 'Monthly'],
    one: ['Your child and one teacher', 'Games set to their level', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'OLSAT test prep: questions families ask',
    items: [
      { q: 'What is the OLSAT test?', a: 'The Otis-Lennon School Ability Test, Eighth Edition, is a Pearson test of verbal, nonverbal and quantitative reasoning for kindergarten to grade 12. Many districts use it to screen for gifted and talented programs.' },
      { q: 'How long does the OLSAT-8 take?', a: 'Pearson describes it as untimed, varying by level, with a maximum of 75 minutes. Your school letter will give the session plan for your child.' },
      { q: 'What does the OLSAT-8 measure?', a: 'Pearson says it gives insight into how well a student learns, not what has been learned. Its tasks include following directions, classifying, sequencing, arithmetic reasoning and analogies.' },
      { q: 'What is a School Ability Index?', a: 'It is the OLSAT-8 main score, comparing a child with others of the same age in a national sample of 40,000 students. Pearson also reports percentile ranks and stanines.' },
      { q: 'What OLSAT score do you need for gifted?', a: 'Each district sets its own rules. Darien Public Schools, for example, counts an OLSAT Verbal, Nonverbal or Total SAI of 135 to 150 as one criterion, and a child needs criteria on at least three measures.' },
      { q: 'Can you prepare for the OLSAT?', a: 'You can make the format familiar and grow listening, sequencing and number sense through play. Pearson includes a practice test in the kits schools buy; drilling look-alike items beyond that tends to measure rehearsal, not reasoning.' },
      { q: 'Does a private OLSAT result count?', a: 'Often only as extra evidence. Los Alamitos Unified, for example, says private testing is considered as a piece of evidence, not as automatic identification.' },
      { q: 'What do your lessons involve?', a: 'Children aged 6 to 9 meet a teacher live online for listening games, story ordering, sorting, number stories and analogy talk, all with our own materials. We never use copied test items.' },
      { q: 'When can my child attend?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you affiliated with Pearson or the districts?', a: 'No. We are an independent online school with no link to Pearson or any district, and we make no promise about scores or gifted placement.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More support for families of young children in the US.',
    items: [
      { href: '/online-math-tutor-2nd-grade', label: 'Second grade math tutoring', p: 'The year Westport screens every child.' },
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'Multiplication, in the year many districts screen.' },
      { href: '/online-math-tutor-1st-grade', label: 'First grade math tutoring', p: 'Number stories and early addition.' },
      { href: '/online-math-tutor-5th-grade', label: 'Fifth grade math tutoring', p: 'Fractions and decimals.' },
      { href: '/online-maths-tutoring-for-kids-in-usa', label: 'Math tutoring for kids', p: 'Live lessons for young US learners.' },
      { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo preparation', p: 'Reasoning puzzles in a friendly contest.' },
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core vs traditional math', p: 'Making sense of homework methods.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Share your child&rsquo;s grade and what the school has said about the OLSAT. The teacher will play a few listening and sequence games and tell you what they notice.',
    readFirst: 'Before booking you can read <a class="ag-inline-link" href="/how-we-teach">how our lessons work</a> or see <a class="ag-inline-link" href="/courses">the full course list</a>.',
    note: 'Teachers join by live video from India at times arranged around US school days. A WhatsApp message gets the quickest answer.',
    formNote: 'Your first class is free and we never ask for a card to book it.'
  },

  footer: {
    cols: [
      { h4: 'Young learners', links: [
        { href: '/online-math-tutor-1st-grade', label: 'First grade math' },
        { href: '/online-math-tutor-2nd-grade', label: 'Second grade math' },
        { href: '/online-math-tutor-3rd-grade', label: 'Third grade math' },
        { href: '/online-math-tutor-cost', label: 'What tutoring costs' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-maths-tutoring-for-kids-in-usa', label: 'Math for kids' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Twelve grapes, two eaten, ten left'
  },

  personalityCss: `
.ag-root.ag-ot .ag-hero h1 { letter-spacing: -0.008em; max-width: 21ch; }
.ag-root.ag-ot .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-ot .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-ot .ag-steps li { margin-bottom: 12px; line-height: 1.6; }
.ag-root.ag-ot .ag-section-head h2 { max-width: 30ch; }
`,

  dossier: {
    curriculumAuthority: 'Pearson OLSAT 8 product page, read raw 31 October 2026 (verbal, nonverbal and quantitative; how well a student learns; eight named tasks; clusters; AAC with SAT10; published 2003; Grade K-12 paper, 2-12 online; untimed, maximum 75 minutes; single form with seven levels, Form 5; fall and spring norms on 40,000 students; SAI and other scores; practice test in starter kits). District pages: Darien Public Schools, Westport Public Schools, Los Alamitos Unified School District.',
    localProject: 'Our two-step directions game, story strips, same-and-different, word of the day, the grapes number story (3 x 4 = 12, 12 - 2 = 10, checked as 2 + 4 + 4) and its variant (one from each plate leaves 9), and the four-stage listening ladder. Lesson family: listening carefully and holding a sequence.',
    requiredMentions: ['how well a student learns, not what has been learned.', 'Varies by level (untimed), maximum 75 minutes.', 'Single form with seven levels', 'based on 40,000 students nationally', '1 Practice Test (Print)', 'A maximum of two of the three School Ability Index (SAI) scores', 'No one score on any one measure determines placement.', 'All second-grade students will be screened', 'considered as a piece of evidence, not as automatic identification.', 'Twelve grapes, two eaten, ten left', 'Story strips (ours).'],
    sources: [
      { claim: 'Pearson OLSAT 8 product page: description, tasks, clusters, details, norms, scores, kits.', url: 'https://www.pearsonassessments.com/en-us/Store/Professional-Assessments/Academic-Learning/Otis-Lennon-School-Ability-Test-%7C-Eighth-Edition/p/100000003' },
      { claim: 'Darien Public Schools: grades 3 and 5 universal OLSAT screen, SAI 135 to 150, three criteria.', url: 'https://www.darienps.org/teaching-learning/idea-program/identification-process' },
      { claim: 'Westport Public Schools: all second graders screened, OLSAT as group reasoning test, PPT review.', url: 'https://www.westportps.org/fs/pages/4625' },
      { claim: 'Los Alamitos Unified: January to February OLSAT, grade 3 universal with consent, private tests as evidence.', url: 'https://hopkinson.losal.org/fs/pages/617' }
    ],
    rejectedClaims: [
      'A grade-by-grade OLSAT level chart (Level A for kindergarten and so on): Pearson\'s page does not state it; third-party prep sites do, so it is not printed.',
      'Los Angeles Unified OLSAT parent materials (lausd.org): HTTP 403 on 31 October 2026, not retried.',
      'Manhattan Beach Unified GATE page: served a bot-check page instead of content, not retried.',
      'Pearson store prices for OLSAT kits and training: not printed; rule 4.',
      'OLSAT items or look-alike items: none reproduced or imitated; rule 9.',
      'Any score, placement or admission promise, or affiliation with Pearson or any district: none.'
    ]
  }
};
