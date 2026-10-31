'use strict';
// CogAT test prep (ag- gifted and ability door; UK and US exams cluster, row US043). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md, writer brief rule 9 (reasoning and readiness, never
// test-item drilling). Every fact read raw with curl on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/cogat-test-prep/:
//  - Riverside Insights, CogAT Overview Brochure PDF (cogat-overview-brochure.pdf, text in .txt): "Since 1968";
//    "general, abstract reasoning skills"; "Verbal, Quantitative, and Figural (Nonverbal) reasoning"; "less than two
//    class periods"; "separate test levels for Grades K through 6 and banded levels for Grades 7-12"; "two equivalent
//    forms for quick retesting and two brief Screening Forms"; "Picture-based subtests and Alternate-Verbal
//    administration for grades K through 2, requiring no specific language"; Forms 7 and 8 times and descriptions:
//    Levels 5/6 to 8 (grades K to 2) nine tests with 10 to 15 minute ranges, Levels 9 to 17/18 (grade 3 and up) nine
//    tests at 10 minutes each; "Items from Level 9 (Grade 3) and above in the Verbal and Quantitative batteries are
//    text-based"; Screening Form = the analogies portions (Verbal/Picture Analogies, Number Analogies, Figure
//    Matrices), "approximately 30 minutes"; Standard Age Score, Age Percentile Rank, local norms; Ability Profile and
//    CogAT.com; online audio directions in English, Spanish, Chinese (Cantonese and Mandarin), Arabic, Somali, Russian,
//    Vietnamese.
//  - riversideinsights.com/k12-assessments/cogat: "measures verbal, quantitative, and nonverbal reasoning". The page's
//    marketing statistics (4x, 5 to 10x, 20%) are not used.
//  - San Ramon Valley Unified School District, GATE Testing (srvusd-gate-testing.html): "to measure the reasoning skills
//    of students in the elementary grade level"; APR "98 or above"; APR 97 plus a 99 in one area; "Our district does not
//    recommend any materials for CogAT preparation."; "minimal test preparation"; "not related to grade level
//    standards"; "may cause anxiety in some students"; all grade 2 students offered the test in spring; parents may
//    exempt.
//  - Rock Hill Schools (SC), Elementary Identification Criteria (rockhill-criteria.html): universal Grade 2 screening "via
//    the Cognitive Abilities Test (CogAT) and Iowa Assessment (IA)"; "The CogAT measures natural aptitude and reasoning";
//    State Regulation 43-220.
//  - Dorchester School District Two (SC), Gifted and Talented Grade 2 (ddtwo.html): CogAT Level 8 in grade 2; "The tests
//    are not timed"; pictorial questions except Sentence Completion; state window October 6 to 28, 2025; Age Percentile
//    Rank, stanine and Ability Profile.
//  - Charlotte-Mecklenburg Schools (NC), Gifted Identification (cms-gifted-identification.html): universal screening of
//    all second graders; CogAT, i-Ready and Gifted Rating Scales; "Outside testing is not accepted for gifted
//    identification."; rescreening after "at least 24 months".
// Our own material, labelled on the page: the fold-and-predict activity and its doubling table (1 fold 2 layers, 2
// folds 4, 3 folds 8), the input-output machine game (rule "add 3": 2 to 5, 4 to 7, 10 to 13), the sort-and-say game,
// the equal towers game, the four-week home plan, the stage ladder. No CogAT sample item reproduced or imitated.
// Lesson family: naming the relationship out loud (analogical talk) before choosing an answer.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GIFTED', blurb: 'CogAT explained from Riverside Insights and four districts: the three batteries, how scores are used, and honest reasoning play for ages 6 to 9.' },
  slug: 'cogat-test-prep',
  code: 'cot',
  accent: '#175040',
  accentRationale: 'CogAT test prep: a deep pine green, #175040 as allocated, calm rather than urgent for a page that argues against cramming; 8.77:1 on the #FBF8F2 paper',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'CogAT test prep',
  title: 'CogAT Test Prep: Reasoning and Readiness for Ages 6 to 9',
  description: 'CogAT test prep done honestly: what the Cognitive Abilities Test measures, its three batteries, how districts use the scores, and reasoning play for ages 6 to 9.',
  ogDescription: 'The CogAT measures verbal, quantitative and nonverbal reasoning. One district says it recommends no prep materials at all. Here is what the test is, how districts use it, and what genuinely helps a young child.',
  twitterDescription: 'The CogAT explained from the publisher and four school districts, with honest reasoning play for ages 6 to 9.',
  pageName: 'CogAT Test Prep: Reasoning and Readiness',
  webPageDescription: 'A parent guide to the Cognitive Abilities Test (CogAT) from Riverside Insights: the Verbal, Quantitative and Nonverbal batteries, levels by grade, how San Ramon Valley, Rock Hill, Dorchester Two and Charlotte-Mecklenburg use the scores, and original reasoning activities for children aged 6 to 9.',
  courseDescription: 'Live online reasoning and readiness lessons for children aged 6 to 9 in the US: patterns, number sense, spatial thinking and explaining ideas aloud, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'CogAT test prep',
  navLinks: [
    { href: '#what', label: 'What CogAT is' },
    { href: '#batteries', label: 'Three batteries' },
    { href: '#districts', label: 'How districts use it' },
    { href: '#prep', label: 'Should you prep?' },
    { href: '#play', label: 'Reasoning at home' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 6 to 9 &middot; Grades K to 3',
  h1: 'CogAT test prep: reasoning and readiness',
  lede: 'A letter comes home saying your second grader will sit the CogAT next month, and the internet fills up with practice packs and countdown timers. Take a breath. The Cognitive Abilities Test is built to sample how a child reasons with words, numbers and shapes, and at least one district says plainly that it recommends no prep materials at all. This guide sets out what the publisher says the test contains, how four public school districts use the results, and the everyday play that builds reasoning for real, without drilling a six-year-old on imitation questions.',
  secondaryCta: { href: '#play', label: 'See the home activities' },
  wa: 'Hello Modern Age Coders, my child in the US is taking the CogAT and I would like gentle reasoning lessons rather than drilling. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; ages 6 to 67',
  spec: [
    ['Publisher', 'Riverside Insights'],
    ['Batteries', 'Verbal, Quantitative, Nonverbal'],
    ['Subtests', 'Nine in the full test'],
    ['Screening Form', 'About 30 minutes'],
    ['Our lessons', 'Live, online, ages 6 to 9'],
    ['Formats', 'Batch or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The CogAT (Cognitive Abilities Test), published by Riverside Insights, measures verbal, quantitative and nonverbal reasoning in three batteries of three subtests each, and many US districts use it to screen for gifted programs, often in grade 2. Honest preparation is familiarity with the format plus broad reasoning, number sense and spatial play. Modern Age Coders teaches that live online in our Reasoning and Readiness course for ages 6 to 9, in a batch or 1-on-1; the first class is free.',

  picks: {
    eyebrow: 'Reasoning first, never drilling',
    h2: 'Three courses that grow the thinking the CogAT samples',
    lede: 'Each builds a real skill a child keeps long after any screening day: noticing relationships, handling numbers flexibly and explaining an idea.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'COT / 01', title: 'Reasoning and readiness, ages 6 to 9', note: 'Patterns, spatial play and number sense, with a calm look at the test format.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'COT / 02', title: 'Problem solving for kids', note: 'Breaking a puzzle into steps and testing a rule.' },
      { course: 'mental-maths-mastery-kids', code: 'COT / 03', title: 'Mental math, ages 5 to 10', note: 'Number sense that makes quantitative questions feel familiar.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What CogAT is',
      h2: 'What is the CogAT test, and what does it measure?',
      lede: 'The CogAT is a group ability test from Riverside Insights that samples reasoning rather than school learning. It reports three separate reasoning scores and a composite, compared with children of the same age.',
      body: [
        { kind: 'two',
          leftH3: 'In the publisher&rsquo;s words',
          left: [
            'Riverside Insights&rsquo; overview brochure says that since 1968 the test has assessed "general, abstract reasoning skills", and that it reports "Verbal, Quantitative, and Figural (Nonverbal) reasoning in less than two class periods." Its product page puts it more simply: the CogAT "measures verbal, quantitative, and nonverbal reasoning".',
            'The brochure describes "separate test levels for Grades K through 6 and banded levels for Grades 7-12", along with "two equivalent forms for quick retesting and two brief Screening Forms". The current full forms are called Form 7 and Form 8.'
          ],
          rightH3: 'What that means for a young child',
          right: [
            'For kindergarten to grade 2, the brochure lists "Picture-based subtests and Alternate-Verbal administration for grades K through 2, requiring no specific language". A six-year-old does not need to read to take the primary levels; directions are read aloud, and online audio directions come in English, Spanish, Chinese (Cantonese and Mandarin), Arabic, Somali, Russian and Vietnamese.',
            'From Level 9, which the brochure ties to grade 3, it says the Verbal and Quantitative items become text-based. That is the main reason a third grader&rsquo;s experience of the test differs from a second grader&rsquo;s.'
          ] },
        { kind: 'table', mt: true, caption: 'CogAT at a glance (Riverside Insights CogAT Overview Brochure, read 31 October 2026)', head: ['Feature', 'What the publisher says'], rows: [
          ['First published', '1968'],
          ['What it measures', 'Verbal, Quantitative and Figural (Nonverbal) reasoning'],
          ['Levels', 'Separate levels for grades K to 6; banded levels for grades 7 to 12'],
          ['Primary levels', 'Levels 5/6 to 8, grades K to 2, picture-based'],
          ['Upper levels', 'Level 9 (grade 3) and above; Verbal and Quantitative items text-based'],
          ['Forms', 'Form 7 and Form 8, equivalent, plus two Screening Forms'],
          ['Screening Form', 'The three analogies subtests, about 30 minutes'],
          ['Scores', 'Standard Age Score and Age Percentile Rank by age in years and months; local norms'],
          ['Ability Profile', 'A summary of level and pattern of strengths, from the full battery']
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://riversideinsights.com/k12-assessments/cogat" rel="noopener" target="_blank">Riverside Insights CogAT page</a> and its linked CogAT Overview Brochure, read 31 October 2026. Modern Age Coders is not connected with Riverside Insights or with any school district named on this page.' }
      ]
    },
    {
      id: 'batteries', tint: 'deep', eyebrow: 'Three batteries',
      h2: 'What is on each CogAT battery for kindergarten to grade 2?',
      lede: 'Each battery holds three short subtests, and each subtest asks the child to spot a relationship and apply it. The descriptions below are summarised from the publisher&rsquo;s own table for Forms 7 and 8; we show no items.',
      body: [
        { kind: 'table', caption: 'CogAT Forms 7 and 8, Levels 5/6 to 8 (grades K to 2): subtests and approximate minutes (Riverside Insights brochure, read 31 October 2026; descriptions summarised)', head: ['Battery', 'Subtest', 'What the child does', 'Minutes'], rows: [
          ['Verbal', 'Picture Analogies', 'Works out how two pictures relate, then finds a pair related the same way', '13 to 15'],
          ['Verbal', 'Sentence Completion', 'Hears a sentence or question read aloud, in English or Spanish, and picks the picture that fits', '13 to 14'],
          ['Verbal', 'Picture Classification', 'Sees how three pictures are alike and picks one that belongs with them', '13 to 14'],
          ['Quantitative', 'Number Analogies', 'The analogy idea again, with amounts instead of meanings', '13 to 15'],
          ['Quantitative', 'Number Puzzles', 'Makes a second set match the number of objects in the first', '11 to 15'],
          ['Quantitative', 'Number Series', 'Finds the pattern in a sequence and what comes next', '13 to 15'],
          ['Nonverbal', 'Figure Matrices', 'The analogy idea with shapes', '11 to 13'],
          ['Nonverbal', 'Paper Folding', 'Imagines paper folded, cut or punched, then unfolded', '10 to 11'],
          ['Nonverbal', 'Figure Classification', 'Sees how three figures are alike and picks the one that fits', '10 to 13']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'One idea runs through it',
          left: [
            'Read the table again and the word "relationship" sits under almost every row. Analogies ask how two things relate. Classification asks what a group has in common. Series ask what rule moves from one step to the next. Paper folding asks how an action changes a shape.',
            'That is good news for parents. A child who is used to saying "these go together because..." and "this one changes by..." already has the habit the whole test leans on, whatever the picture or number in front of them.'
          ],
          rightH3: 'Grade 3 and up',
          right: [
            'From Level 9 the brochure lists the same nine subtests with text-based Verbal Analogies, Sentence Completion and Verbal Classification, a Number Puzzles test built on equations with missing values, and a Number Series test of plain numbers. Each subtest is listed at about 10 minutes.',
            'The Screening Form, which some districts use first, takes only the three analogies subtests: Verbal or Picture Analogies, Number Analogies and Figure Matrices.'
          ] },
        { kind: 'p', mt: true, html: 'The brochure includes sample items for families. We do not copy or imitate them here: the publisher owns them, and a child who has memorised a look-alike question has learned a trick, not a way of thinking. If your district sends home its own familiarisation sheet, that is the right place to see the format.' }
      ]
    },
    {
      id: 'districts', tint: 'tint', eyebrow: 'How districts use it',
      h2: 'How do school districts use CogAT scores?',
      lede: 'Every district sets its own rules, so the same score can mean different things in different towns. Four public districts that publish their process show the range.',
      body: [
        { kind: 'table', caption: 'How four public school districts describe their CogAT use (district pages read 31 October 2026)', head: ['District', 'Who is tested', 'What the district says'], rows: [
          ['San Ramon Valley Unified, California', 'All grade 2 students offered it in spring; newer students in grades 3 to 7 by registration', 'Identified as GATE with a National Age Percentile Rank of 98 or above, or 97 plus a 99 in one battery'],
          ['Rock Hill Schools, South Carolina', 'Every grade 2 student, statewide rule', '"The CogAT measures natural aptitude and reasoning while the Iowa Assessment measures achievement in reading and math."'],
          ['Dorchester School District Two, South Carolina', 'Every grade 2 student, CogAT Level 8', '"The tests are not timed." Questions are pictorial apart from Sentence Completion'],
          ['Charlotte-Mecklenburg Schools, North Carolina', 'All second graders in general education', 'CogAT, i-Ready and the Gifted Rating Scales, with a portfolio route; outside testing not accepted']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the four have in common',
          left: [
            'Grade 2 is the common screening year. Rock Hill explains that "All students enrolled in a South Carolina public school participate in universal gifted and talented (GT) screening in Grade 2" through the CogAT and the Iowa Assessments, under State Regulation 43-220. Dorchester Two gives the state window as October 6 to 28, 2025.',
            'Each district treats the CogAT as one piece of evidence. Charlotte-Mecklenburg gives each second grader "three opportunities- two formal and one informal", and lets students be rescreened after "at least 24 months".'
          ],
          rightH3: 'Where they differ',
          right: [
            'Cut-offs differ. San Ramon Valley publishes its percentile rule; the South Carolina districts point to state option charts; Charlotte-Mecklenburg uses a rubric across several measures.',
            'Outside tests differ too. Charlotte-Mecklenburg says plainly: "Outside testing is not accepted for gifted identification." Before paying anyone for anything, read your own district&rsquo;s page and ask the gifted coordinator what counts.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.srvusd.net/Departments/Educational-Services/GATE/GATE-Testing/" rel="noopener" target="_blank">San Ramon Valley Unified GATE Testing</a>, <a class="ag-inline-link" href="https://www.rock-hill.k12.sc.us/departments/elementaryed/elementary-instruction/gifted-and-talented/elementary-identification-criteria" rel="noopener" target="_blank">Rock Hill Schools identification criteria</a>, <a class="ag-inline-link" href="https://www.ddtwo.org/fs/pages/7033" rel="noopener" target="_blank">Dorchester School District Two, Grade 2</a> and <a class="ag-inline-link" href="https://sites.google.com/cms.k12.nc.us/psetd/gifted-identification" rel="noopener" target="_blank">Charlotte-Mecklenburg Schools gifted identification</a>, all read 31 October 2026.' }
      ]
    },
    {
      id: 'prep', tint: 'deep', eyebrow: 'Should you prep?',
      h2: 'Should you prepare your child for the CogAT?',
      lede: 'Not in the cramming sense. The fairest preparation is a calm child who knows roughly what the session will feel like, and who has spent months playing with patterns, numbers and shapes for their own sake.',
      body: [
        { kind: 'two',
          leftH3: 'What one district says',
          left: [
            'San Ramon Valley Unified is unusually direct. Its GATE page says the district uses the CogAT "to measure the reasoning skills of students in the elementary grade level", and then: "Our district does not recommend any materials for CogAT preparation." It adds that students are encouraged to take the test with "minimal test preparation" so the district gets an accurate measure of reasoning.',
            'The same page notes that "the testing may not be necessary for all students" and that it "may cause anxiety in some students". Parents there can exempt a second grader by telling the teacher.'
          ],
          rightH3: 'Why drilling backfires',
          right: [
            'A child who has rehearsed hundreds of look-alike items may score higher than their reasoning on an ordinary day, and then land in a program paced for that score. That mismatch is rarely kind to a seven-year-old.',
            'Drilling also teaches the wrong lesson: that there is a trick to find, rather than a pattern to understand. The habits that help on the test, such as slowing down, describing a relationship and checking it, are the same habits that help in class. Build those, and the test takes care of itself.'
          ] },
        { kind: 'table', mt: true, caption: 'Helpful readiness and unhelpful prep compared (our summary)', head: ['Helpful', 'Unhelpful'], rows: [
          ['Seeing the district&rsquo;s own familiarisation material once or twice', 'Hours of commercial look-alike items'],
          ['Practising listening to directions read aloud', 'Timing a child against a stopwatch'],
          ['Explaining why two things go together', 'Memorising answer patterns'],
          ['Folding, cutting and building with real paper and blocks', 'Screen drills before bedtime'],
          ['A good night&rsquo;s sleep and breakfast', 'Telling a child the test decides their future']
        ] },
        { kind: 'p', mt: true, html: 'Our Reasoning and Readiness lessons follow the left column. We talk through the kinds of thinking the publisher describes, using our own puzzles and real objects, and we tell families honestly that no class can promise a score or a place.' }
      ]
    },
    {
      id: 'play', tint: 'tint', eyebrow: 'Reasoning at home',
      h2: 'How does reasoning grow at ages 6 to 9, and what can you do at home?',
      lede: 'Reasoning grows out of play, talk and number sense, not out of worksheets. These four activities are ours; they build the underlying skills and are deliberately unlike test items.',
      body: [
        { kind: 'ol', items: [
          '<b>Fold and predict (ours, spatial).</b> Fold a square of paper in half, then in half again, and punch one hole through all the layers near the middle. Before unfolding, ask: how many holes will there be, and where? Then open it and check. Change one thing at a time: fold once, or three times, or punch near an edge.',
          '<b>The input-output machine (ours, quantitative).</b> You are the machine. Your child says a number; you say what comes out. Keep the rule secret, for example "add 3": 2 becomes 5, 4 becomes 7, 10 becomes 13. Your child wins by guessing the rule and predicting the next output before you say it. Then swap roles.',
          '<b>Sort and say (ours, verbal and nonverbal).</b> Tip out a handful of household things: a spoon, a pencil, a sock, a key, a leaf. Ask your child to make a group of three and say why they belong together. Then ask for a different group of three with a different reason. There is no single right answer; the explanation is the point.',
          '<b>Equal towers (ours, number sense).</b> Build one tower of blocks in two colors, say four red and three blue. Ask your child to build a tower with the same number of blocks using a different mix of colors, and to say how they know it matches. Move to bigger numbers as it gets easy.'
        ] },
        { kind: 'table', mt: true, caption: 'Our worked example: why the folded paper gives the holes it does', head: ['Folds', 'Layers of paper', 'Holes after one punch'], rows: [
          ['0', '1', '1'],
          ['1', '2', '2'],
          ['2', '4', '4'],
          ['3', '8', '8']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Talking through the fold (ours)',
          left: [
            'Each fold stacks the paper on itself, so the number of layers doubles: one becomes two, two becomes four, four becomes eight. One punch goes through every layer, so the holes match the layers.',
            'Where the holes land follows the folds too: they mirror across each crease. A child who says "it doubles every time I fold" and "the holes copy across the line" has discovered a rule, which is worth far more than one right answer.'
          ],
          rightH3: 'Why these four, at this age',
          right: [
            'Between six and nine, children move from noticing to explaining. They can see that two things match before they can say why. Activities that ask for the "why" out loud speed that step up.',
            'Number sense matters as much as puzzles. A child who knows that seven is four and three, or that ten is five and five, sees amounts in a picture without counting one by one, and that frees attention for the reasoning.'
          ] },
        { kind: 'p', mt: true, html: '<b>A note on screens.</b> Short, well-made reasoning games are fine, but real objects teach spatial thinking better at this age: paper, blocks, puzzles, LEGO, cooking with measuring cups. For children under 13 we recommend only age-appropriate tools, and none that need an adult account.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages of reasoning between six and nine',
    lede: 'Our description of how young children usually grow, so you can meet your child where they are.',
    table: { caption: 'Stages of explaining a relationship (ours)', head: ['Stage', 'What you might hear'], rows: [
      ['1. Noticing', '"These are the same." Points, but cannot say how.'],
      ['2. Naming', '"They are both round." One feature at a time.'],
      ['3. Ruling', '"It gets one bigger every time." States a rule and tests it.'],
      ['4. Checking', '"It cannot be that one, because..." Rules out answers with a reason.']
    ] },
    left: { h3: 'For parents', ps: [
      'Most six-year-olds sit between stages 1 and 2; many eight-year-olds reach stage 3. Moving up a stage is a real gain, test or no test.',
      'Ask "how do you know?" warmly, never as a challenge. The answer matters more than speed.'
    ] },
    right: { h3: 'For children', ps: [
      'If you are stuck, say out loud what is the same and what is different. That often shows you the answer.',
      'It is fine to change your mind when you check. Good thinkers do it all the time.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses for young thinkers, from first numbers to first code',
    lede: 'Live lessons that grow reasoning in several directions, so a strong thinker keeps being stretched after any screening.',
    bands: [
      { num: 'I', h3: 'Reasoning and number', sub: 'Ages 5 to 9', courses: [
        { code: 'COT / R / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Patterns, shapes and amounts.' },
        { code: 'COT / R / 02', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Hands-on counting and shapes.' },
        { code: 'COT / R / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Flexible with numbers.' }
      ] },
      { num: 'II', h3: 'Elementary math', sub: 'Grades 1 to 5', courses: [
        { code: 'COT / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'The school year, deeper.' },
        { code: 'COT / E / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental math', blurb: 'Seeing numbers as beads.' },
        { code: 'COT / E / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Rules, steps and checks.' }
      ] },
      { num: 'III', h3: 'Thinking in code', sub: 'Ages 7 and up', courses: [
        { code: 'COT / C / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Patterns that move.' },
        { code: 'COT / C / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks to games.' },
        { code: 'COT / C / 03', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Turtle art and logic.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Reasoning lessons sized for a young child',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Short after-school sessions that end before tiredness sets in.' },
      { time: 'Weekends', l: 'A relaxed slot for longer puzzles and building.' },
      { time: '1-on-1', l: 'Paced to one child, shy or racing ahead.' }
    ],
    cells: [
      { h3: 'Talk before answers', p: 'Children explain a rule before they choose.' },
      { h3: 'Real objects', p: 'Paper, blocks and counters on camera.' },
      { h3: 'Original puzzles', p: 'Ours, never copied test items.' },
      { h3: 'Format, once', p: 'A calm look at what a session feels like.' },
      { h3: 'No promises', p: 'We grow thinking; scores are the district&rsquo;s.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work from our young students',
  projectsLede: 'Puzzles, patterns and first programs made by children in our classes. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Reasoning lessons are billed by the month with no long contract, so a family can try a term of thinking games and decide calmly what comes next.',
    free: ['A free first class', 'Meet the teacher on camera', 'No card details'],
    group: ['Fifteen to twenty young learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to your child alone', 'Pace set by your child', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'CogAT test prep: common questions',
    items: [
      { q: 'What is the CogAT test?', a: 'The Cognitive Abilities Test is a group ability test published by Riverside Insights. It measures verbal, quantitative and nonverbal reasoning in three batteries, and many US districts use it to screen children for gifted programs.' },
      { q: 'What grade do children take the CogAT?', a: 'The test has levels from kindergarten up, but grade 2 is the common screening year. San Ramon Valley, Rock Hill, Dorchester Two and Charlotte-Mecklenburg all screen second graders.' },
      { q: 'How long is the CogAT?', a: 'Riverside Insights lists each subtest at roughly 10 to 15 minutes at the primary levels, and the Screening Form at about 30 minutes. Dorchester School District Two tells parents its grade 2 tests are not timed, so check your own district letter.' },
      { q: 'Does my child need to read for the CogAT?', a: 'Not at the primary levels. The publisher describes picture-based subtests for kindergarten to grade 2, with directions read aloud. From Level 9, around grade 3, the Verbal and Quantitative items are text-based.' },
      { q: 'Can you study for the CogAT?', a: 'You can make a child comfortable with the format and grow their reasoning, but cramming look-alike items is not real preparation. San Ramon Valley Unified says it does not recommend any materials for CogAT preparation and encourages minimal test preparation.' },
      { q: 'What CogAT score is gifted?', a: 'There is no national cut-off; each district sets its own. San Ramon Valley, for example, publishes a National Age Percentile Rank of 98 or above, or 97 with a 99 in one battery.' },
      { q: 'Will a private CogAT test count?', a: 'It depends on the district. Charlotte-Mecklenburg Schools says outside testing is not accepted for gifted identification, so ask your district before arranging one.' },
      { q: 'How do your reasoning lessons work?', a: 'Children aged 6 to 9 meet a teacher live online for short sessions of original puzzles, real-object activities and talk about why an answer works. We show the general format once so the day feels familiar, and never drill test items.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Riverside Insights or my district?', a: 'No. We are an independent online school. We quote the publisher and district pages and link to them, and we cannot promise any score or gifted placement.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More help for families of young learners in the US.',
    items: [
      { href: '/online-math-tutor-kindergarten', label: 'Kindergarten math tutoring', p: 'Counting, shapes and first patterns.' },
      { href: '/online-math-tutor-1st-grade', label: 'First grade math tutoring', p: 'Addition facts and number bonds.' },
      { href: '/online-math-tutor-2nd-grade', label: 'Second grade math tutoring', p: 'Place value in the screening year.' },
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'Multiplication and early fractions.' },
      { href: '/online-maths-tutoring-for-kids-in-usa', label: 'Math tutoring for kids', p: 'Live online lessons for US children.' },
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core vs traditional math', p: 'Why homework shows more than one method.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'Building a sequence at home.' },
      { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo preparation', p: 'A friendly first competition for curious kids.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child&rsquo;s age and what the school letter says. The teacher will play a few of our reasoning games with them and tell you honestly what would help.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or see <a class="ag-inline-link" href="/courses">every course</a> before you book.',
    note: 'Lessons are taught live by video from India at hours that suit US evenings and weekend mornings. WhatsApp reaches the team fastest.',
    formNote: 'The first class costs nothing, and we ask for no card.'
  },

  footer: {
    cols: [
      { h4: 'Young learners', links: [
        { href: '/online-math-tutor-kindergarten', label: 'Kindergarten math' },
        { href: '/online-math-tutor-1st-grade', label: 'First grade math' },
        { href: '/online-math-tutor-2nd-grade', label: 'Second grade math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Two folds, four layers, four holes'
  },

  personalityCss: `
.ag-root.ag-cot .ag-hero h1 { letter-spacing: -0.012em; max-width: 20ch; }
.ag-root.ag-cot .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-cot .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cot .ag-steps li { margin-bottom: 14px; }
.ag-root.ag-cot .ag-section-head h2 { max-width: 28ch; }
`,

  dossier: {
    curriculumAuthority: 'Riverside Insights, CogAT Overview Brochure and CogAT product page, read raw 31 October 2026 (since 1968; general, abstract reasoning; Verbal, Quantitative, Figural/Nonverbal; separate levels K to 6 and banded 7 to 12; two equivalent forms and two Screening Forms; picture-based K to 2; Forms 7 and 8 subtest table and minutes; Screening Form analogies about 30 minutes; Standard Age Score and Age Percentile Rank; Ability Profile; audio directions languages). District pages: San Ramon Valley Unified, Rock Hill Schools, Dorchester School District Two, Charlotte-Mecklenburg Schools.',
    localProject: 'Our fold-and-predict activity with its doubling table (0, 1, 2, 3 folds give 1, 2, 4, 8 layers and holes), the input-output machine game (rule add 3: 2 to 5, 4 to 7, 10 to 13), sort-and-say, equal towers (four red and three blue), the helpful-versus-unhelpful table and the four-stage ladder. Lesson family: naming the relationship out loud.',
    requiredMentions: ['Our district does not recommend any materials for CogAT preparation.', 'general, abstract reasoning skills', 'separate test levels for Grades K through 6 and banded levels for Grades 7-12', 'two equivalent forms for quick retesting and two brief Screening Forms', 'Picture-based subtests and Alternate-Verbal administration for grades K through 2, requiring no specific language', 'The CogAT measures natural aptitude and reasoning while the Iowa Assessment measures achievement in reading and math.', 'Outside testing is not accepted for gifted identification.', 'National Age Percentile Rank of 98 or above', 'Cantonese and Mandarin', 'Two folds, four layers, four holes', 'Equal towers (ours, number sense).'],
    sources: [
      { claim: 'Riverside Insights CogAT product page.', url: 'https://riversideinsights.com/k12-assessments/cogat' },
      { claim: 'Riverside Insights CogAT Overview Brochure: batteries, levels, forms, subtests and minutes.', url: 'https://riversideinsights.com/hubfs/CogAT/CogAT%20Overview%20Brochure.pdf' },
      { claim: 'San Ramon Valley Unified GATE Testing: CogAT use, percentile rule, no prep materials recommended.', url: 'https://www.srvusd.net/Departments/Educational-Services/GATE/GATE-Testing/' },
      { claim: 'Rock Hill Schools: South Carolina universal Grade 2 screening with CogAT and Iowa Assessments.', url: 'https://www.rock-hill.k12.sc.us/departments/elementaryed/elementary-instruction/gifted-and-talented/elementary-identification-criteria' },
      { claim: 'Dorchester School District Two: CogAT Level 8, not timed, 2025 window, score types.', url: 'https://www.ddtwo.org/fs/pages/7033' },
      { claim: 'Charlotte-Mecklenburg Schools: grade 2 universal screening, outside testing not accepted.', url: 'https://sites.google.com/cms.k12.nc.us/psetd/gifted-identification' }
    ],
    rejectedClaims: [
      'Riverside Insights marketing statistics (4x less likely to be excluded, 5 to 10x for multilingual learners, 10 and 20 percent growth): not used; vendor claims outside a technical source.',
      'CogAT sample items from the brochure: not reproduced or imitated; publisher copyright and rule 9.',
      'A national gifted cut-off score: none exists; only San Ramon Valley\'s own published rule is quoted.',
      'South Carolina Department of Education grade 2 page (ed.sc.gov): connection timed out on 31 October 2026, not retried; the state rule is quoted through Rock Hill Schools and Dorchester School District Two.',
      'That prep raises scores or that our lessons improve CogAT results: refused; no score, gifted placement or admission promise.',
      'Any affiliation with Riverside Insights or any district: none.'
    ]
  }
};
