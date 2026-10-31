'use strict';
// Gifted and talented test prep (ag- gifted and ability door, generic district GT; UK and US exams cluster, row US047).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md, writer brief rule 9 (reasoning and readiness, never
// test-item drilling; NYC G&T has no admissions test). Every fact read raw with curl on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/gifted-and-talented-test-prep/:
//  - Texas Education Agency, Gifted/Talented Education (tea-gt.html): the definition "performs at or shows the
//    potential for performing at a remarkably high level of accomplishment when compared to others of the same age,
//    experience, or environment", with its four areas, citing Texas Education Code §29.121.
//  - NYC Public Schools, Gifted and Talented (nyc-gt.html): "Gifted & Talented programs offer accelerated instruction to
//    eligible elementary school students in New York City."; Fall 2027 kindergarten application December 9, 2026 to
//    January 22, 2027, offers March 30, 2027; grades 1 to 4 application April 19 to May 7, 2027, offers June 10, 2027;
//    kindergarten eligibility "based on behaviors that may indicate readiness for accelerated learning", evaluated by
//    current pre-K teachers or, for others, interviews after which "early childhood education experts nominate
//    eligible applicants"; grades 1 to 4 eligibility "Have course grades of a 3 or 4, or the equivalent, on their report
//    card in Math, Reading and Writing." The page describes no admissions test.
//  - San Ramon Valley Unified (srvusd-gate-testing.html): CogAT; "Our district does not recommend any materials for
//    CogAT preparation."; may cause anxiety; parents may exempt.
//  - Edmonds School District (edmonds-universal-screening.html): universal NNAT3 for grades 2 and 6; "Should My Student
//    Study Before Taking this test? No"; Test Refusal form.
//  - Charlotte-Mecklenburg Schools (cms-gifted-identification.html): "Multiple criteria are used"; grade 2 universal with
//    CogAT, i-Ready and Gifted Rating Scales plus a portfolio; "Outside testing is not accepted for gifted
//    identification."
//  - Darien Public Schools (darien-identification.html): referrals "by teachers and/or parents"; "A district placement
//    team reviews each student's profile individually"; grades 3 and 5 universal OLSAT.
//  - Fort Worth ISD (fwisd-nnat3.html): NNAT3 universal for first graders; other data "MAP scores, teacher feedback,
//    parent feedback, and student work".
//  - Riverside Insights CogAT brochure (cogat-overview-brochure.pdf) for the three batteries, used in the tests table;
//    NNAT3, OLSAT-8 and Iowa facts in the table are from the Pearson and Riverside pages saved for rows US044 to US046.
// Our own material, labelled on the page: the seven-step "how a child gets tested" sequence (assembled from the district
// pages), the handshake puzzle (4 friends, 6 handshakes, listed AB AC AD BC BD CD), the squares-in-a-grid puzzle (3 by 3:
// 9 + 4 + 1 = 14), the seven-day reasoning week, the stage ladder. No test item reproduced or imitated.
// Lesson family: listing every case systematically so none is missed.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GIFTED', blurb: 'How US districts really identify gifted children: universal screening, multiple measures, the main tests, NYC with no test, and honest readiness for ages 6 to 9.' },
  slug: 'gifted-and-talented-test-prep',
  code: 'gtt',
  accent: '#2A5718',
  accentRationale: 'Gifted and talented test prep: a deep leaf green, #2A5718 as allocated, warm and growing rather than competitive; 8.00:1 on the #FBF8F2 paper',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Gifted and talented test prep',
  title: 'Gifted and Talented Test Prep: An Honest Guide for Ages 6 to 9',
  description: 'Gifted and talented test prep explained honestly: how US districts identify gifted children, the main tests, why NYC uses none, and reasoning play for ages 6 to 9.',
  ogDescription: 'Most US districts identify gifted children with several measures, not one test, and some say outright that they recommend no prep. How it works, the main screeners, NYC\'s test-free route, and what really helps.',
  twitterDescription: 'How US districts identify gifted children, and the honest way to get a young child ready.',
  pageName: 'Gifted and Talented Test Prep: An Honest Guide',
  webPageDescription: 'A parent guide to gifted and talented identification in US public schools: state definitions, universal screening and referral, multiple measures, the CogAT, NNAT3, OLSAT-8 and Iowa Assessments compared, the NYC G&T process with no admissions test, district rules on outside testing, and original reasoning activities for ages 6 to 9.',
  courseDescription: 'Live online reasoning and readiness lessons for US children aged 6 to 9: patterns, spatial play, number sense and explaining ideas, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Gifted and talented test prep',
  navLinks: [
    { href: '#define', label: 'What gifted means' },
    { href: '#process', label: 'How testing works' },
    { href: '#tests', label: 'The main tests' },
    { href: '#nyc', label: 'NYC: no test' },
    { href: '#ready', label: 'Honest readiness' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 6 to 9 &middot; Gifted identification explained',
  h1: 'Gifted and talented test prep, honestly',
  lede: 'Search for gifted and talented test prep and you will find countdown bundles, printable packs and promises. Look instead at how public school districts actually identify gifted children, and a calmer picture appears. Most screen a whole grade at once, weigh several kinds of evidence, and describe the test as one clue among many. Some say plainly that they recommend no preparation materials, and New York City&rsquo;s program uses no admissions test at all. This guide walks through how identification works, compares the main tests, and suggests play that grows a young child&rsquo;s reasoning for its own sake.',
  secondaryCta: { href: '#process', label: 'See how testing works' },
  wa: 'Hello Modern Age Coders, my child in the US may be screened for a gifted program and I would like honest reasoning lessons, not drilling. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; ages 6 to 67',
  spec: [
    ['Common screening year', 'Grade 2, varies'],
    ['Usual evidence', 'Several measures'],
    ['Main tests', 'CogAT, NNAT3, OLSAT-8, Iowa'],
    ['NYC G&amp;T', 'No admissions test'],
    ['Our lessons', 'Live online, ages 6 to 9'],
    ['Formats', 'Batch or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'US public school districts set their own gifted and talented rules, but most screen a whole grade (often grade 2) with an ability test such as the CogAT, NNAT3 or OLSAT-8, then weigh it with achievement scores, teacher and parent input and student work. NYC&rsquo;s G&amp;T program uses no admissions test. What genuinely helps is a little familiarity with the format and a lot of reasoning, number and spatial play. Modern Age Coders offers exactly that live online for children aged 6 to 9, in groups or one to one, starting with a free class.',

  picks: {
    eyebrow: 'Growing thinkers, not test takers',
    h2: 'Three courses for bright, curious young children',
    lede: 'Each one stretches a child who is ready for more, whatever any screening says.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'GTT / 01', title: 'Reasoning and readiness, ages 6 to 9', note: 'Patterns, shapes and amounts, explained aloud.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'GTT / 02', title: 'Problem solving for kids', note: 'Puzzles solved by listing, testing and checking.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'GTT / 03', title: 'Elementary math, grades 1 to 5', note: 'Grade-level math taught in depth, with room to go further.' }
    ]
  },

  sections: [
    {
      id: 'define', tint: 'tint', eyebrow: 'What gifted means',
      h2: 'What does gifted and talented mean in a US school?',
      lede: 'There is no single national definition used for placement. Each state sets its own, and each district builds a process on top of it. Texas is a clear example of a state definition written into law.',
      body: [
        { kind: 'two',
          leftH3: 'One state&rsquo;s definition',
          left: [
            'The Texas Education Agency defines a gifted/talented student as a child who "performs at or shows the potential for performing at a remarkably high level of accomplishment when compared to others of the same age, experience, or environment", citing Texas Education Code §29.121.',
            'The same definition names four areas: high-performance capability in an intellectual, creative or artistic area; an unusual capacity for leadership; or excelling in a specific academic field.'
          ],
          rightH3: 'Why the wording matters',
          right: [
            'Two phrases deserve a second look. "Shows the potential" means a child does not have to be ahead already; a district is looking for capacity as well as achievement. "Same age, experience, or environment" means children are compared fairly with peers who had similar chances.',
            'That is why districts use more than one kind of evidence, and why a test score alone rarely decides anything.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://tea.texas.gov/academics/special-student-populations/gifted-and-talented-education" rel="noopener" target="_blank">Texas Education Agency, Gifted/Talented Education</a>, read 31 October 2026. Other states use their own definitions; your state education department publishes yours. Modern Age Coders is not connected with any state, district or test publisher named on this page.' }
      ]
    },
    {
      id: 'process', tint: 'deep', eyebrow: 'How testing works',
      h2: 'How do schools test a child for gifted and talented?',
      lede: 'Usually in stages: screen widely, look closely at children who stand out, then let a team decide using several measures. The details vary, so the first step is always your own district&rsquo;s page.',
      body: [
        { kind: 'ol', items: [
          '<b>Find your district&rsquo;s gifted page.</b> Search your district name with "gifted identification" or "GATE". It should give the grades screened, the window and any forms.',
          '<b>Check whether screening is universal.</b> Many districts test a whole grade. Charlotte-Mecklenburg screens all second graders in general education; Edmonds screens all 2nd and 6th graders; Fort Worth ISD screens all first graders.',
          '<b>If not, look for a referral route.</b> Darien Public Schools says students "may be referred for gifted identification by teachers and/or parents" in set referral periods.',
          '<b>Give consent or opt out.</b> Some districts ask permission; others let families decline. Edmonds asks families who do not want testing to submit a Test Refusal form, and San Ramon Valley lets parents exempt a second grader.',
          '<b>The child sits a screener.</b> Usually a short group ability test at school, such as the CogAT, NNAT3 or OLSAT-8.',
          '<b>A team weighs the evidence.</b> Darien says "A district placement team reviews each student\'s profile individually". Fort Worth adds "MAP scores, teacher feedback, parent feedback, and student work" to the picture.',
          '<b>Families hear the result, and ask about next steps.</b> Ask when rescreening is possible. Charlotte-Mecklenburg, for example, allows rescreening after at least 24 months.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Multiple measures, in the districts&rsquo; words',
          left: [
            'Charlotte-Mecklenburg Schools opens its page with "Multiple criteria are used in order to identify students as gifted", and gives each second grader formal tests, an observational rating scale and a portfolio route.',
            'Fort Worth ISD says the NNAT3 "is not the only data point considered". Darien requires a student to meet criteria on at least three different assessments.'
          ],
          rightH3: 'Outside testing',
          right: [
            'Paying for a private test is not always a shortcut. Charlotte-Mecklenburg says: "Outside testing is not accepted for gifted identification." St. Louis Public Schools also does not accept assessments from other districts or independent examiners.',
            'Other districts may consider private results as extra evidence. Ask your district before spending anything.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://sites.google.com/cms.k12.nc.us/psetd/gifted-identification" rel="noopener" target="_blank">Charlotte-Mecklenburg Schools</a>, <a class="ag-inline-link" href="https://www.edmonds.wednet.edu/programs-services/highly-capable/universal-screening" rel="noopener" target="_blank">Edmonds School District</a>, <a class="ag-inline-link" href="https://www.fwisd.org/departments/gifted-and-talented/nnat3" rel="noopener" target="_blank">Fort Worth ISD</a>, <a class="ag-inline-link" href="https://www.darienps.org/teaching-learning/idea-program/identification-process" rel="noopener" target="_blank">Darien Public Schools</a>, <a class="ag-inline-link" href="https://www.srvusd.net/Departments/Educational-Services/GATE/GATE-Testing/" rel="noopener" target="_blank">San Ramon Valley Unified</a> and <a class="ag-inline-link" href="https://www.slps.org/departments/academics/gifted-education/gifted-identification" rel="noopener" target="_blank">St. Louis Public Schools</a>, read 31 October 2026. The seven steps are our summary of these pages.' }
      ]
    },
    {
      id: 'tests', tint: 'tint', eyebrow: 'The main tests',
      h2: 'Which tests do districts use for gifted screening?',
      lede: 'Three ability tests and one achievement test come up again and again. They measure different things, which is exactly why districts often pair them.',
      body: [
        { kind: 'table', caption: 'Four tests used in US gifted screening (publisher pages read 31 October 2026)', head: ['Test', 'Publisher', 'Kind', 'What it samples', 'Time'], rows: [
          ['CogAT', 'Riverside Insights', 'Ability', 'Verbal, quantitative and nonverbal reasoning, nine subtests', 'Screening Form about 30 minutes'],
          ['NNAT3', 'Pearson', 'Ability, nonverbal', 'Reasoning with shapes and designs, no language', 'About 30 minutes'],
          ['OLSAT-8', 'Pearson', 'Ability', 'Verbal, nonverbal and quantitative clusters', 'Untimed, at most 75 minutes'],
          ['Iowa Assessments', 'Riverside Insights', 'Achievement', 'What a child has learned in reading, language, math', 'Varies by battery and level']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Ability and achievement',
          left: [
            'An ability test samples how a child reasons with words, numbers and shapes. An achievement test checks what they have learned in class. A child can be strong in one and ordinary in the other, and both pictures are useful.',
            'South Carolina, for example, gives every second grader both the CogAT and the Iowa Assessments, so districts see reasoning and learning side by side.'
          ],
          rightH3: 'Which one will my child take?',
          right: [
            'Only your district can tell you. Some use one screener for everyone; some use a nonverbal test so that language does not hide a strong thinker; some switch tests between grades.',
            'Whatever the name on the letter, the honest preparation is the same: a calm look at the format and plenty of reasoning play.'
          ] }
      ]
    },
    {
      id: 'nyc', tint: 'deep', eyebrow: 'NYC: no test',
      h2: 'Is there a test for the NYC gifted and talented program?',
      lede: 'No. NYC Public Schools describes a process for its Gifted &amp; Talented programs with no admissions test: kindergarten eligibility comes from observed behaviors, and grades 1 to 4 from report card grades.',
      body: [
        { kind: 'two',
          leftH3: 'Kindergarten, fall 2027',
          left: [
            'NYC Public Schools says "Gifted &amp; Talented programs offer accelerated instruction to eligible elementary school students in New York City." For kindergarten in fall 2027, the application opens December 9, 2026 and closes January 22, 2027, with offers on March 30, 2027.',
            'Eligibility is "based on behaviors that may indicate readiness for accelerated learning". Current pre-K teachers evaluate children in district and partner programs; for others, the Division of Early Childhood Education holds interviews, after which "early childhood education experts nominate eligible applicants".'
          ],
          rightH3: 'Grades 1 to 4, fall 2027',
          right: [
            'For grades 1 to 4, the application opens April 19, 2027 and closes May 7, 2027, with offers on June 10, 2027.',
            'Current public school students are eligible if they "Have course grades of a 3 or 4, or the equivalent, on their report card in Math, Reading and Writing", and have had no 1 in core subjects in the current year. So the honest preparation for NYC is strong everyday learning, not a test.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/gifted-and-talented" rel="noopener" target="_blank">NYC Public Schools, Gifted and Talented</a>, read 31 October 2026. Check the page for changes before each cycle.' }
      ]
    },
    {
      id: 'ready', tint: 'tint', eyebrow: 'Honest readiness',
      h2: 'How should I prepare my child for a gifted test?',
      lede: 'Lightly. Several districts say so in their own words, and a child&rsquo;s reasoning grows best through play, conversation and number sense. Here is what that looks like in a normal week, with two puzzles of ours.',
      body: [
        { kind: 'two',
          leftH3: 'What districts advise',
          left: [
            'San Ramon Valley Unified writes: "Our district does not recommend any materials for CogAT preparation." It encourages students to take the test with minimal preparation so the district gets an accurate measure.',
            'Edmonds School District asks itself whether a student should study before its NNAT3 screener and answers: "No, however it would benefit your child to be comfortable with the testing format prior to testing."'
          ],
          rightH3: 'Why drilling is a poor bet',
          right: [
            'A child coached on look-alike items may be placed in a program paced for a level they cannot sustain, which can turn a love of learning into stress. It can also hide what a teacher most needs to know about them.',
            'Real reasoning, by contrast, keeps paying off: in math, reading, science and code, long after screening day.'
          ] },
        { kind: 'table', mt: true, caption: 'A reasoning-rich week at home, about 15 minutes a day (ours)', head: ['Day', 'Activity', 'The thinking it grows'], rows: [
          ['Monday', 'Sort a box of buttons three different ways and name each rule', 'Classifying'],
          ['Tuesday', 'Fold paper, punch a hole, predict before unfolding', 'Spatial reasoning'],
          ['Wednesday', 'A secret number rule game: you say a number, I answer', 'Finding a rule'],
          ['Thursday', 'Retell a bedtime story in order, then change the ending', 'Sequencing and language'],
          ['Friday', 'The handshake puzzle below', 'Listing cases systematically'],
          ['Saturday', 'Build a LEGO model from a picture, then from memory', 'Visual memory'],
          ['Sunday', 'Rest, or a board game with counting and strategy', 'Number sense and planning']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The handshake puzzle (ours)',
          left: [
            'Four friends, Ava, Ben, Cara and Dev, each shake hands once with every other friend. How many handshakes are there? Many children guess 16 or 8. The trick is to list them so none is missed or counted twice.',
            'Start with Ava: Ava-Ben, Ava-Cara, Ava-Dev. Ben has met Ava already, so Ben-Cara, Ben-Dev. Then Cara-Dev. That is 3 + 2 + 1 = 6 handshakes. Ask next: what if a fifth friend arrives? (4 more, so 10.)'
          ],
          rightH3: 'Squares in a grid (ours)',
          right: [
            'Draw a 3 by 3 grid of small squares, like a tic-tac-toe board with a border. How many squares can you find? Most children say 9 at first. Then they spot the 2 by 2 squares (there are 4) and the whole 3 by 3 square (1).',
            'So the total is 9 + 4 + 1 = 14. The habit is the same as the handshakes: sort the cases by size and count each group. That is reasoning a child keeps for life.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages of solving a puzzle with many cases',
    lede: 'Our description of how children grow from guessing to systematic thinking between six and nine.',
    table: { caption: 'Stages of counting cases (ours)', head: ['Stage', 'What you might see'], rows: [
      ['1. Guessing', 'Says a number quickly without checking'],
      ['2. Drawing', 'Draws the situation and counts, sometimes twice'],
      ['3. Listing', 'Makes an ordered list so nothing repeats'],
      ['4. Generalising', 'Predicts the next case, such as 10 handshakes for five friends']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is a big leap and a sign of real mathematical maturity at seven or eight. Celebrate it more than any score.',
      'If your child is stuck at stage 1, ask them to draw it. Pictures slow a fast guesser down in a good way.'
    ] },
    right: { h3: 'For children', ps: [
      'When there are lots of possibilities, make a list in order. Start with the first person or the smallest size.',
      'Check that nothing in your list appears twice.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses that stretch able young learners',
    lede: 'Live lessons for children who are ready for more, in math, reasoning and code.',
    bands: [
      { num: 'I', h3: 'Reasoning and number', sub: 'Ages 5 to 9', courses: [
        { code: 'GTT / R / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Patterns, shapes and amounts.' },
        { code: 'GTT / R / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Numbers handled flexibly.' },
        { code: 'GTT / R / 03', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Concrete, playful first math.' }
      ] },
      { num: 'II', h3: 'Elementary and beyond', sub: 'Grades 1 to 6', courses: [
        { code: 'GTT / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'The grade sequence, in depth.' },
        { code: 'GTT / E / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Systematic thinking.' },
        { code: 'GTT / E / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'For older children who love puzzles.' }
      ] },
      { num: 'III', h3: 'Thinking in code', sub: 'Ages 7 to 12', courses: [
        { code: 'GTT / C / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Logic you can watch run.' },
        { code: 'GTT / C / 02', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Real code, gently.' },
        { code: 'GTT / C / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI works, ages 8 and up.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons for bright young children, without pressure',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Short, lively sessions after school.' },
      { time: 'Weekends', l: 'Longer puzzles and building time.' },
      { time: '1-on-1', l: 'For a child far ahead, or one who needs confidence.' }
    ],
    cells: [
      { h3: 'Depth over speed', p: 'One good puzzle explored fully.' },
      { h3: 'Reasons aloud', p: 'Children explain before they answer.' },
      { h3: 'Original material', p: 'Our puzzles, not copied test items.' },
      { h3: 'Format, once', p: 'A short, calm look before screening.' },
      { h3: 'No placement promises', p: 'Districts decide; we grow thinking.' },
      { h3: 'Batch or one child', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'What our young students make',
  projectsLede: 'Puzzles, games and early projects from children in our classes. Visit <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Google reviews from parents, in their own words.',

  fees: {
    h2: 'Fees',
    lede: 'We bill monthly with no long contract, so families can give a curious child a term of reasoning lessons and decide what next without pressure.',
    free: ['A free first class', 'Meet the teacher together', 'No card details'],
    group: ['Fifteen to twenty young learners', 'A steady teacher each week', 'Choose your batch', 'Monthly'],
    one: ['One teacher, one child', 'Stretch set to their pace', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'Gifted and talented test prep: questions parents ask',
    items: [
      { q: 'How do they test for gifted and talented?', a: 'Most US districts screen a whole grade, often grade 2, with a short group ability test, then a team weighs that with achievement scores, teacher and parent input and student work. Rules differ by district.' },
      { q: 'How do I get my child tested for gifted and talented?', a: 'Start with your district gifted or GATE page. If screening is universal your child will be tested at school; if not, look for a referral period, as Darien Public Schools offers to teachers and parents.' },
      { q: 'What tests are used for gifted programs?', a: 'Common ability tests are the CogAT from Riverside Insights and the NNAT3 and OLSAT-8 from Pearson. Some states pair them with an achievement test such as the Iowa Assessments.' },
      { q: 'Is there a test for NYC gifted and talented?', a: 'No. NYC Public Schools bases kindergarten eligibility on observed behaviors and nominations, and grades 1 to 4 eligibility on report card grades of 3 or 4 in Math, Reading and Writing.' },
      { q: 'Should I prepare my child for a gifted test?', a: 'Only lightly. San Ramon Valley Unified recommends no CogAT preparation materials, and Edmonds says students should not study for its NNAT3 screener but can get comfortable with the format.' },
      { q: 'Does a private gifted test count?', a: 'Not everywhere. Charlotte-Mecklenburg Schools will not use outside results to identify a child at all, and other districts may count a private report only as supporting evidence, so ask first.' },
      { q: 'What age are children tested for gifted?', a: 'Grade 2, around age seven or eight, is the most common universal screening year, but Fort Worth ISD screens first graders and Edmonds screens grades 2 and 6.' },
      { q: 'What do your lessons offer a bright child?', a: 'Live online reasoning lessons for ages 6 to 9: patterns, spatial play, number sense and puzzles solved by listing and checking. We use our own material and never drill test items.' },
      { q: 'When do your classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you linked to any district or test publisher?', a: 'No. We are an independent online school with no connection to any state, district, Riverside Insights or Pearson, and we never promise a score or a place.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More support for families of curious young learners in the US.',
    items: [
      { href: '/online-math-tutor-2nd-grade', label: 'Second grade math tutoring', p: 'The usual screening year.' },
      { href: '/online-math-tutor-1st-grade', label: 'First grade math tutoring', p: 'Strong foundations early.' },
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'Multiplication and reasoning.' },
      { href: '/online-maths-tutoring-for-kids-in-usa', label: 'Math tutoring for kids', p: 'Live lessons for US children.' },
      { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo preparation', p: 'A puzzle contest for young thinkers.' },
      { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation', p: 'Where puzzle lovers go in middle school.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'Planning math at home.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child&rsquo;s age, grade and district. The teacher will try a few of our puzzles with them and give you an honest view of what would stretch them.',
    readFirst: 'If you like, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or explore <a class="ag-inline-link" href="/courses">our courses</a> first.',
    note: 'We teach live over video from India, scheduling around US school days and weekend mornings. WhatsApp gets you the fastest reply.',
    formNote: 'The first class is on us, and booking needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Young learners', links: [
        { href: '/online-math-tutor-1st-grade', label: 'First grade math' },
        { href: '/online-math-tutor-2nd-grade', label: 'Second grade math' },
        { href: '/online-math-tutor-3rd-grade', label: 'Third grade math' },
        { href: '/online-math-tutor-cost', label: 'Tutoring costs' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Four friends, six handshakes'
  },

  personalityCss: `
.ag-root.ag-gtt .ag-hero h1 { letter-spacing: -0.011em; max-width: 18ch; }
.ag-root.ag-gtt .ag-capsule { border-left-width: 4px; border-radius: 10px; }
.ag-root.ag-gtt .ag-table caption { text-align: left; font-weight: 600; font-style: italic; }
.ag-root.ag-gtt .ag-steps li { margin-bottom: 16px; }
.ag-root.ag-gtt .ag-section-head h2 { max-width: 27ch; }
`,

  dossier: {
    curriculumAuthority: 'Texas Education Agency gifted/talented definition (Texas Education Code §29.121); NYC Public Schools Gifted and Talented page (fall 2027 dates, kindergarten behaviors and nominations, grades 1 to 4 report card grades, no test); district pages for San Ramon Valley Unified, Edmonds, Charlotte-Mecklenburg, Darien, Fort Worth ISD and St. Louis; Riverside Insights and Pearson pages for the tests table. All read raw 31 October 2026.',
    localProject: 'Our seven-step summary of how testing works, the seven-day reasoning week, the handshake puzzle (4 friends: 3 + 2 + 1 = 6; five friends: 10), the squares-in-a-grid puzzle (9 + 4 + 1 = 14) and the four-stage ladder. Lesson family: listing every case systematically.',
    requiredMentions: ['remarkably high level of accomplishment when compared to others of the same age, experience, or environment', 'Texas Education Code §29.121', 'Gifted &amp; Talented programs offer accelerated instruction to eligible elementary school students in New York City.', 'Have course grades of a 3 or 4, or the equivalent, on their report card in Math, Reading and Writing', 'early childhood education experts nominate eligible applicants', 'Multiple criteria are used in order to identify students as gifted', 'may be referred for gifted identification by teachers and/or parents', 'MAP scores, teacher feedback, parent feedback, and student work', '3 + 2 + 1 = 6 handshakes', '9 + 4 + 1 = 14', 'Four friends, six handshakes'],
    sources: [
      { claim: 'Texas Education Agency: gifted/talented definition, Texas Education Code §29.121.', url: 'https://tea.texas.gov/academics/special-student-populations/gifted-and-talented-education' },
      { claim: 'NYC Public Schools Gifted and Talented: fall 2027 dates and eligibility, no admissions test.', url: 'https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/gifted-and-talented' },
      { claim: 'Charlotte-Mecklenburg Schools: multiple criteria, grade 2 universal screening, outside testing.', url: 'https://sites.google.com/cms.k12.nc.us/psetd/gifted-identification' },
      { claim: 'San Ramon Valley Unified: no CogAT preparation materials recommended, exemption.', url: 'https://www.srvusd.net/Departments/Educational-Services/GATE/GATE-Testing/' },
      { claim: 'Edmonds School District: universal NNAT3, study advice, Test Refusal form.', url: 'https://www.edmonds.wednet.edu/programs-services/highly-capable/universal-screening' },
      { claim: 'Darien Public Schools: referrals, placement team, multiple criteria.', url: 'https://www.darienps.org/teaching-learning/idea-program/identification-process' },
      { claim: 'Fort Worth ISD: universal first-grade NNAT3 and other data.', url: 'https://www.fwisd.org/departments/gifted-and-talented/nnat3' }
    ],
    rejectedClaims: [
      'A national definition of gifted used for placement: none applies to districts; Texas is quoted as one state example.',
      'NAGC (nagc.org) gifted identification page: HTTP 404 on 31 October 2026; not used.',
      'Missouri HB 1757 (universal screening before grade 3): a bill, not confirmed law; not used.',
      'Appeal rights in specific districts: not fetched raw, so the page says only to ask about next steps.',
      'That prep raises scores, or any score, placement or admission promise: refused.',
      'Any affiliation with a state, district, Riverside Insights or Pearson: none.'
    ]
  }
};
