'use strict';
// EQAO Grade 3 math practice (ag- assessment door; Canada cluster Plan 2, row 11).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/eqao-grade-3-math-practice/):
//  - eqao.com/the-assessments/ (ca/src/ontario/eqao-assessments.html, saved earlier the same day): "EQAO’s provincial tests assess
//    students’ literacy (reading and writing) and numeracy (mathematics) knowledge and skills at key points in students’
//    kindergarten to Grade 12 education."; "Grade 3, Primary Division"; "Assessment of Reading, Writing and Mathematics"; next
//    administration dates: Grade 3 "May 4 – June 8, 2027", Grade 6 the same, Grade 9 "January 12 – February 5, 2027", OSSLT
//    "November 3 – 30, 2026", MPT "October 1 – November 14, 2026" (all written with "to" on the page, no en dash); "coordinating
//    Ontario’s participation in national and international assessments, on behalf of the Government of Ontario."
//  - eqao.com/the-assessments/grade-9-math/ (saved the same day): "Webinar: EQAO Math Night for Parents and Guardians"; "These
//    assessments are taken by all Ontario students in Grades 3, 6 and 9."; "EQAO staff will show how these math questions help
//    assess the skills students are learning in their math classes."; next event "Tuesday, November 3, 2026", "6:00 p.m. – 7:00
//    p.m. (ET)"; "EQAO’s assessments measure the literacy and mathematics skills that students are expected to have learned at
//    specific times in their kindergarten to Grade 12 education."
//  - eqao.com/the-assessments/primary-division/ returned a Cloudflare 403 ("Attention Required! | Cloudflare") on 22 October 2026
//    (BLOCKED-403-primary-division.html). Not retried. So nothing is said about the Grade 3 format, length, delivery or sample test.
//  - Ontario elementary mathematics (2020), Grade 3 strands (ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_3___strands?depth=4):
//    strand titles; B1.1 "whole numbers up to and including 1000"; B1.3 "round whole numbers to the nearest ten or hundred"; B1.6
//    fair-share problems "among 2, 3, 4, 5, 6, 8, and 10 sharers"; B2.2 "recall and demonstrate multiplication facts of 2, 5, and 10,
//    and related division facts"; B2.6 "represent multiplication of numbers up to 10 × 10 and division up to 100 ÷ 10"; C1.3
//    pattern rules; C2.2 equivalent expressions; C3.1 "sequential, concurrent, and repeating events"; D1.3 "pictographs and bar
//    graphs"; D1.4 "determine the mean and identify the mode (s)" (quoted without the stray space); D2.1 the likelihood terms
//    "impossible", "unlikely", "equally likely", "likely", and "certain"; E1.1 cubes, prisms, pyramids, cylinders and cones; E2.1
//    perimeters; E2.6 "use analog and digital clocks and timers to tell time in hours, minutes, and seconds"; E2.9 square centimetres
//    and square metres; F1.1 "estimate and calculate the change required for various simple cash transactions".
// Our own material, labelled on the page: the fifteen practice questions and worked answers (labelled "our practice, not EQAO
// questions"; arithmetic checked in Python), the eight-month plan, the home routine, the stages.
// Lesson family: explain-your-thinking (say the strategy, then the answer, then check it another way).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const EQAO_ASSESS = '<a class="ag-inline-link" href="https://www.eqao.com/the-assessments/" rel="noopener" target="_blank">EQAO&rsquo;s assessments page</a>';
const EQAO_G3 = '<a class="ag-inline-link" href="https://www.eqao.com/the-assessments/primary-division/" rel="noopener" target="_blank">Grade 3, Primary Division page</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'EQAO GRADE 3', blurb: 'The EQAO Grade 3 assessment explained from EQAO&rsquo;s own pages, the May to June 2027 window, and fifteen practice questions of our own matched to the Grade 3 math strands.' },
  slug: 'eqao-grade-3-math-practice',
  code: 'eqa',
  accent: '#202299',
  accentRationale: 'EQAO Grade 3 math practice: a deep schoolbook indigo, #202299, allocated by the Canada Plan 2 grid; 8.1 RGB units from the nearest site accent (#221C9E) and at least 14 from every other Canada accent; contrast 11.32 on the paper #FBF8F2 and 9.74 on the deepest tint',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'EQAO Grade 3 math practice',
  title: 'EQAO Grade 3 Math Practice: 15 Free Questions with Answers',
  description: 'EQAO Grade 3 math for Ontario parents: what the assessment is, the 2027 window, how to use the official EQAO materials, and 15 free practice questions with answers.',
  ogDescription: 'What the Grade 3 EQAO assessment is, when it runs in 2027, and fifteen practice questions we wrote ourselves, matched to the Grade 3 Ontario math strands, with every answer explained.',
  twitterDescription: 'EQAO Grade 3 math: the 2027 window and fifteen free practice questions of our own, with answers.',
  pageName: 'EQAO Grade 3 Math Practice',
  webPageDescription: 'A guide for Ontario parents to the EQAO Grade 3 assessment, built from EQAO&rsquo;s own pages and the Grade 3 math curriculum, with fifteen original practice questions and worked answers.',
  courseDescription: 'Live online Grade 3 math for Ontario children, from place value to fractions, patterns and early coding, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'EQAO Grade 3 math practice',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#what', label: 'The assessment' },
    { href: '#math', label: 'Grade 3 math' },
    { href: '#official', label: 'EQAO materials' },
    { href: '#practice', label: 'Practice' },
    { href: '#answers', label: 'Answers' }
  ],
  eyebrow: 'Ontario &middot; Grade 3 &middot; EQAO Primary Division',
  h1: 'EQAO Grade 3 math practice, with answers',
  lede: 'Every Ontario child meets EQAO for the first time in Grade 3. For most families the questions are simple ones: what is it, when is it, and how can we help without turning spring into test season? This page answers the first two from EQAO&rsquo;s own pages, and the third with fifteen practice questions we wrote ourselves, matched to the Grade 3 math curriculum, each with the thinking behind the answer.',
  secondaryCta: { href: '#practice', label: 'Start the fifteen questions' },
  wa: 'Hello Modern Age Coders, my child is in Grade 3 in Ontario and I would like help with math before the EQAO assessment. Could we book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students &middot; Calm, steady Grade 3 math',
  spec: [
    ['For', 'Ontario Grade 3, ages 7 to 9'],
    ['Assessment', 'EQAO Primary Division'],
    ['Window', 'May 4 to June 8, 2027'],
    ['Practice', 'Fifteen questions, ours'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Teacher', 'The same one each week'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The EQAO Grade 3 assessment, Primary Division, checks reading, writing and math for every Ontario Grade 3 student, and EQAO lists the next window as May 4 to June 8, 2027. Steady practice of the Grade 3 math strands is the honest preparation. Modern Age Coders teaches it live online, in a group or one to one, through Elementary Math.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for a Grade 3 child',
    lede: 'The main math course comes first. The other two build the number sense and the problem solving that every strand leans on.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'EQA / 01', title: 'Elementary Math, Grades 1 to 5', note: 'Placed by grade with a short check, then number, operations, fractions, geometry and data at a Grade 3 pace.' },
      { course: 'mental-maths-mastery-kids', code: 'EQA / 02', title: 'Mental Math for Kids', note: 'Ages 5 to 10. Number bonds, splitting numbers and estimation, the Grade 3 mental math expectation done properly.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'EQA / 03', title: 'Problem Solving for Kids', note: 'Ages 7 to 12. Logic puzzles and patterns that teach a child to try a second strategy when the first one fails.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'From EQAO&rsquo;s own pages',
      h2: 'What the EQAO Grade 3 assessment is, and when it runs',
      lede: 'EQAO is the Education Quality and Accountability Office, the Ontario agency that runs the province&rsquo;s assessments. Its assessments page says EQAO&rsquo;s provincial tests &ldquo;assess students&rsquo; literacy (reading and writing) and numeracy (mathematics) knowledge and skills at key points in students&rsquo; kindergarten to Grade 12 education.&rdquo; Grade 3 is the first of those points.',
      body: [
        { kind: 'table', caption: 'EQAO assessments and their next administration dates, as listed on EQAO&rsquo;s assessments page on 22 October 2026', head: ['Assessment', 'Who writes it', 'Next administration'], rows: [
          ['Grade 3, Primary Division: Assessment of Reading, Writing and Mathematics', 'Grade 3 students', 'May 4 to June 8, 2027'],
          ['Grade 6, Junior Division: Assessment of Reading, Writing and Mathematics', 'Grade 6 students', 'May 4 to June 8, 2027'],
          ['Grade 9 Assessment of Mathematics', 'Grade 9 students in MTH1W', 'January 12 to February 5, 2027'],
          ['Ontario Secondary School Literacy Test (OSSLT)', 'Secondary students, from Grade 10', 'November 3 to 30, 2026']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Who takes it',
          left: [
            'EQAO says plainly that its assessments &ldquo;are taken by all Ontario students in Grades 3, 6 and 9.&rdquo; Ask the school which days inside the May to June window it has chosen for Grade 3.',
            'EQAO describes what it measures as &ldquo;the literacy and mathematics skills that students are expected to have learned at specific times in their kindergarten to Grade 12 education.&rdquo; So the skills it looks at are the ones a child is meant to have by that point in school, and ordinary classwork is where they are built.'
          ],
          rightH3: 'A free session from EQAO for parents',
          right: [
            'EQAO runs a free webinar called EQAO Math Night for Parents and Guardians, covering Grades 3, 6 and 9. EQAO says its staff &ldquo;will show how these math questions help assess the skills students are learning in their math classes.&rdquo;',
            'On 22 October 2026 EQAO listed the next session for Tuesday, November 3, 2026, from 6:00 to 7:00 p.m. Eastern time. It is the most direct way to hear from EQAO itself what the math questions look for.'
          ] },
        { kind: 'source', html: 'Sources: ' + EQAO_ASSESS + ' and its <a class="ag-inline-link" href="https://www.eqao.com/the-assessments/grade-9-math/" rel="noopener" target="_blank">Grade 9 page</a>, where the parent webinar is listed, both saved on 22 October 2026. EQAO is an agency of the Government of Ontario. Modern Age Coders has no connection with it.' }
      ]
    },
    {
      id: 'math', tint: 'deep', eyebrow: 'The Grade 3 curriculum',
      h2: 'The Grade 3 math the assessment draws on',
      lede: 'Grade 3 math in Ontario follows the 2020 curriculum. It has six strands: social-emotional learning skills and the mathematical processes, then Number, Algebra, Data, Spatial Sense and Financial Literacy. Our practice set below is matched to these strands. Below, one or two expectations per strand, in the ministry&rsquo;s words, show what &ldquo;Grade 3 level&rdquo; actually covers.',
      body: [
        { kind: 'table', caption: 'Grade 3 math expectations, quoted from the Ontario curriculum (2020), read 22 October 2026; the practice column refers to our set below', head: ['Strand', 'What Grade 3 students are expected to do', 'Our questions'], rows: [
          ['B. Number', 'Work with &ldquo;whole numbers up to and including 1000&rdquo;; &ldquo;round whole numbers to the nearest ten or hundred&rdquo;; &ldquo;recall and demonstrate multiplication facts of 2, 5, and 10, and related division facts&rdquo;; solve fair-share problems &ldquo;among 2, 3, 4, 5, 6, 8, and 10 sharers&rdquo;', '1 to 6'],
          ['C. Algebra', 'Use pattern rules to &ldquo;extend patterns, make and justify predictions&rdquo;; decide whether expressions are equivalent; write code with &ldquo;sequential, concurrent, and repeating events&rdquo;', '7 to 9'],
          ['D. Data', 'Display data &ldquo;in pictographs and bar graphs&rdquo;; &ldquo;determine the mean and identify the mode(s)&rdquo;; describe likelihood with &ldquo;impossible&rdquo;, &ldquo;unlikely&rdquo;, &ldquo;equally likely&rdquo;, &ldquo;likely&rdquo; and &ldquo;certain&rdquo;', '10 and 11'],
          ['E. Spatial Sense', 'Identify &ldquo;cubes, prisms, pyramids, cylinders, and cones&rdquo; by their faces, edges and vertices; measure perimeters; &ldquo;use analog and digital clocks and timers to tell time in hours, minutes, and seconds&rdquo;', '12 to 14'],
          ['F. Financial Literacy', '&ldquo;estimate and calculate the change required for various simple cash transactions&rdquo;', '15']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two Grade 3 surprises for parents',
          left: [
            'The mean arrives in Grade 3. Many parents first met averages much later, but the Grade 3 curriculum asks children to find the mean and the mode of small data sets and to say what each tells you.',
            'Multiplication facts are limited to 2, 5 and 10 in Grade 3. Children represent multiplication up to 10 &times; 10 with arrays and drawings, but the facts to recall by heart are those three tables. Pushing all the tables early is not what the year asks.'
          ],
          rightH3: 'Coding is in Grade 3 math too',
          right: [
            'Strand C includes coding. In Grade 3, children write and alter code with steps in order, steps happening at once, and repeats. A Grade 3 coding question is really a math question in disguise, like question 9 below.',
            'The curriculum does not tie coding to any one program, so some classes use a screen and others act the code out on the floor. Both count.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics" rel="noopener" target="_blank">The Ontario Curriculum: Mathematics, Grades 1 to 8 (2020)</a>, Grade 3 strands, through the ministry curriculum site&rsquo;s content data on 22 October 2026. We did not find an EQAO statement mapping Grade 3 questions to these expectations, so the match in the last column is ours.' }
      ]
    },
    {
      id: 'official', tint: 'tint', eyebrow: 'EQAO&rsquo;s own materials',
      h2: 'How to use EQAO&rsquo;s own Grade 3 materials',
      lede: 'EQAO&rsquo;s site is the only source for official Grade 3 information and any sample material it publishes. Begin at its ' + EQAO_G3 + '. When we tried to read that page on 22 October 2026 it did not load for us, so we describe here only how to use official material well, not what that page contains.',
      body: [
        { kind: 'ol', items: [
          '<b>Read EQAO&rsquo;s own words first.</b> Look for what the Grade 3 page says about how the assessment is given and what children can use. Trust that over any summary, including ours.',
          '<b>Treat any sample as a tour, not a test.</b> If EQAO offers a sample or practice activity, sit beside your child and explore it once with no clock. The aim is that nothing on the day looks strange.',
          '<b>Notice the question types, not the score.</b> Talk about how questions are asked: choosing an answer, showing work, explaining a strategy. A child who knows what &ldquo;explain your thinking&rdquo; wants is calmer than one who has drilled answers.',
          '<b>Match each question to a strand.</b> Use the table above. If most of the questions your child found hard sit in one strand, that is the strand to practise, through ordinary schoolwork.',
          '<b>Then go back to normal math.</b> One look at official material is plenty for a Grade 3 child. Daily ten-minute practice from schoolwork and sets like ours does more than repeating the same sample.',
          '<b>Ask the teacher what to expect.</b> The class teacher knows how and when the school runs the assessment within the window. A short question at a parent conference saves a lot of guessing.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we will not do',
          left: [
            'We do not reproduce EQAO questions, and we do not sell &ldquo;EQAO prep&rdquo; packs. Every question on this page is ours, labelled as ours, and written to the Grade 3 curriculum.',
            'We also do not promise a level or a score. A Grade 3 assessment is a snapshot of one week; what matters more is that a child finishes Grade 3 secure in place value, the 2, 5 and 10 facts and the habit of explaining.'
          ],
          rightH3: 'Keeping it calm',
          right: [
            'Seven- and eight-year-olds read adult worry quickly. Talk about the assessment as one ordinary part of the school year, and keep practice short and friendly.',
            'The Grade 3 curriculum&rsquo;s first strand is social-emotional learning in math: persevering, trying another strategy, managing frustration. Those are the skills that help most on any assessment day.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Our practice, not EQAO questions',
      h2: 'Fifteen Grade 3 math practice questions',
      lede: 'Our practice, not EQAO questions. We wrote all fifteen for this page and matched them to the Grade 3 strands in the table above. Read each one aloud with your child, let them use paper, blocks or drawings, and ask them to explain how they know. Answers are in the next section.',
      body: [
        { kind: 'ol', items: [
          '<b>Number.</b> Write 607 in expanded form. What is the 6 worth?',
          '<b>Number.</b> Round 348 to the nearest ten. Then round it to the nearest hundred.',
          '<b>Number.</b> Which is greater, 489 or 498? Explain using hundreds, tens and ones.',
          '<b>Number.</b> Work out 256 + 178 and 503 &minus; 267. Show one strategy for each.',
          '<b>Number.</b> Draw an array for 4 &times; 5. Use it to find 20 &divide; 5.',
          '<b>Number.</b> Ten crackers are shared fairly among 4 friends. How much does each friend get? Draw it.',
          '<b>Algebra.</b> The pattern 3, 6, 9, 12 continues. What is the rule? What is the 8th number?',
          '<b>Algebra.</b> Is 5 + 5 + 5 + 5 the same as 4 &times; 5? Is 12 &minus; 4 the same as 4 &minus; 12? Explain.',
          '<b>Algebra, coding.</b> A robot starts at 0 on a number line. Its code says: repeat 4 times, move forward 3. Where does it stop? If you change the code to repeat 6 times, where does it stop now?',
          '<b>Data.</b> A class voted for a fruit: apples 7, bananas 4, grapes 7, pears 2. Draw a bar graph. What is the mode? What is the mean number of votes per fruit?',
          '<b>Data.</b> A bag holds 8 red cubes and 1 blue cube. Pick one without looking. Use the words impossible, unlikely, likely or certain to describe picking red, picking blue and picking green.',
          '<b>Spatial sense.</b> How many faces, edges and vertices does a cube have?',
          '<b>Spatial sense.</b> A rectangle is 6 cm long and 4 cm wide. What is its perimeter?',
          '<b>Spatial sense.</b> A clock shows 3:45. What time will it be 30 minutes later?',
          '<b>Financial literacy.</b> A pencil costs 65 cents. Sam pays with a one-dollar coin, a loonie. How much change should Sam get?'
        ] }
      ]
    },
    {
      id: 'answers', tint: 'tint', eyebrow: 'Answers, ours',
      h2: 'Answers to the Grade 3 practice, with the thinking',
      lede: 'In Grade 3 the explanation matters as much as the answer, so each one below shows a strategy a child could use. Other correct strategies are just as good.',
      body: [
        { kind: 'ol', items: [
          '<b>600 + 0 + 7, or 600 + 7.</b> The 6 is in the hundreds place, so it is worth 600. The zero in the tens place shows there are no tens.',
          '<b>350 and 300.</b> 348 is between 340 and 350 and closer to 350. It is between 300 and 400 and closer to 300, because 48 is less than 50.',
          '<b>498.</b> Both have 4 hundreds. 498 has 9 tens and 489 has only 8 tens, so 498 is greater. The ones do not matter once the tens are different.',
          '<b>434 and 236.</b> For the first: 256 + 200 = 456, then take away 22 because we added too much: 456 &minus; 22 = 434. For the second: count up from 267 to 300 (33), then to 503 (203), and 33 + 203 = 236.',
          '<b>4 rows of 5 dots make 20.</b> The same array split into groups of 5 shows 4 groups, so 20 &divide; 5 = 4. Multiplication and division are two ways of reading one picture.',
          '<b>2 and a half crackers each.</b> Each friend gets 2 whole crackers, which uses 8. The last 2 crackers are cut in half, giving each friend one half more. Written as a mixed number: 2 1/2.',
          '<b>Add 3; the 8th number is 24.</b> Keep counting by 3s: 15, 18, 21, 24. The pattern is the 3 times table.',
          '<b>Yes, then no.</b> Four fives added together is 20, and 4 &times; 5 is 20, so they are equivalent. 12 &minus; 4 is 8, but 4 &minus; 12 cannot be done with whole numbers, so order matters in subtraction.',
          '<b>12, then 18.</b> Four moves of 3 is 3 + 3 + 3 + 3 = 12. Six moves of 3 is 18. Changing the number of repeats changes where the robot stops, which is the Grade 3 idea of how to &ldquo;read and alter existing code&rdquo;.',
          '<b>The mode is apples and grapes; the mean is 5.</b> Apples and grapes both have 7, the most votes, so there are two modes. The mean: 7 + 4 + 7 + 2 = 20 votes, shared fairly among 4 fruits gives 5 each.',
          '<b>Likely, unlikely, impossible.</b> Red is likely because 8 of the 9 cubes are red. Blue is unlikely because there is only one. Green is impossible because there are no green cubes.',
          '<b>6 faces, 12 edges, 8 vertices.</b> Count them on a real box or dice: 6 flat faces, 4 edges on top, 4 on the bottom and 4 going up, and 4 corners on top plus 4 below.',
          '<b>20 cm.</b> Go all the way around: 6 + 4 + 6 + 4 = 20. Perimeter is the distance around the outside.',
          '<b>4:15.</b> From 3:45, 15 minutes takes you to 4:00, and 15 more takes you to 4:15.',
          '<b>35 cents.</b> A loonie is 100 cents. Count up from 65: 5 cents makes 70, then 30 more makes 100. 5 + 30 = 35 cents.'
        ] },
        { kind: 'p', mt: true, html: 'If several answers in one strand were wrong, practise that strand through schoolwork for a few weeks rather than redoing these. If the answers were right but the explanations were thin, that is the more common Grade 3 gap, and it is the one we work on most.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'The months before May',
      h2: 'A calm Grade 3 math plan, from now to the May 2027 window',
      lede: 'Our suggested plan, written for a family starting in the autumn of Grade 3. It follows the curriculum, not a test-prep schedule.',
      body: [
        { kind: 'table', caption: 'A Grade 3 math plan towards the May 4 to June 8, 2027 window (ours)', head: ['When', 'Focus', 'You will know it is working when'], rows: [
          ['November and December 2026', 'Place value to 1000, rounding, adding and subtracting with strategies', 'Your child explains a strategy without being asked'],
          ['January and February 2027', 'Facts of 2, 5 and 10, arrays, fair sharing and simple fractions', 'They draw an array to check a division'],
          ['March 2027', 'Patterns, equivalent expressions and a little coding with repeats', 'They predict the next term and say the rule'],
          ['April 2027', 'Data, likelihood, shapes, perimeter, time and making change', 'They read a bar graph and ask a question about it'],
          ['From May 4, 2027', 'Ordinary schoolwork and rest; no new topics', 'The assessment feels like a normal school week']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Ten minutes a day',
          left: [
            'Short daily practice beats a long weekend session at this age. Three questions a day, said aloud, with one explanation each, adds up to well over a hundred explained answers between now and May.',
            'Use everyday moments: reading a clock in the car, rounding a price at the store, sharing snacks fairly. Grade 3 math lives in ordinary life, and the curriculum&rsquo;s own expectations say so.'
          ],
          rightH3: 'When to bring in a teacher',
          right: [
            'If place value is still shaky by January, or if math has become a source of tears, a regular teacher helps. We start from where the child is, often a grade below, and build forward without rushing.',
            'Our Grade 3 lessons use the same explain-your-thinking habit as this page, so the work at home and the work with us reinforce each other.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is now',
    h2: 'Four stages of a Grade 3 math thinker',
    lede: 'Our own stages, from teaching children of this age to explain their math.',
    table: { caption: 'Stages of a Grade 3 math learner (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Counter', 'Solves by counting one at a time, often on fingers'],
      ['2. Strategist', 'Uses a strategy such as making ten or doubling, but cannot yet say why'],
      ['3. Explainer', 'Says the strategy in words and can show it with a drawing'],
      ['4. Checker', 'Solves one way and checks another way without being asked']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask &ldquo;how do you know?&rdquo; after a right answer, not only after a wrong one. That one habit moves children from stage 2 to stage 3.',
      'Stage 4 is rare in Grade 3 and wonderful when it appears. Praise the checking, not the speed.'
    ] },
    right: { h3: 'For young learners', ps: [
      'Say your strategy out loud, like a teacher would.',
      'If you get stuck, draw it. A picture is allowed in math.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'More courses for children in the primary grades',
    lede: 'Every course here is live and online, led by one teacher who gets to know your child, in a small group of the same age or one to one.',
    bands: [
      { num: 'I', h3: 'Math foundations', sub: 'Ages 4 to 9', courses: [
        { code: 'EQA / FND / 01', slug: 'early-math-foundations', title: 'Early Math Foundations', blurb: 'Hands-on counting and shapes for the youngest.' },
        { code: 'EQA / FND / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and Mental Math', blurb: 'Bead work that turns into calculation in the head.' },
        { code: 'EQA / FND / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic Math', blurb: 'Calculation shortcuts, with the reasons shown.' }
      ] },
      { num: 'II', h3: 'Coding for the primary grades', sub: 'Ages 6 to 9', courses: [
        { code: 'EQA / COD / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Repeats and sequences as games, the Grade 3 coding idea.' },
        { code: 'EQA / COD / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'A long path from first blocks to small apps.' },
        { code: 'EQA / COD / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding', blurb: 'Counting and patterns inside a world they love.' }
      ] },
      { num: 'III', h3: 'Next steps', sub: 'Grades 4 to 6', courses: [
        { code: 'EQA / NXT / 01', slug: 'maths-through-coding', title: 'Math Through Coding', blurb: 'Math topics built as Python programs, from age 10.' },
        { code: 'EQA / NXT / 02', slug: 'python-ai-kids-masterclass', title: 'Python for Kids', blurb: 'Typed code and turtle drawings from age 9.' },
        { code: 'EQA / NXT / 03', slug: 'middle-school-math-competitions-course', title: 'Math Competitions', blurb: 'For older children who want a challenge.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live Grade 3 math lessons, short and friendly',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Right after school, before tiredness sets in.' },
      { time: 'Weekends', l: 'A relaxed Saturday or Sunday morning.' },
      { time: '1-on-1', l: 'At a pace set by one child.' }
    ],
    cells: [
      { h3: 'Blocks and drawings', p: 'Math a child can see and touch.' },
      { h3: 'Explain, then answer', p: 'Every answer comes with a reason.' },
      { h3: 'Little and often', p: 'Short lessons that hold attention.' },
      { h3: 'A teacher they know', p: 'The same face every week.' },
      { h3: 'Notes for parents', p: 'What to practise in the week.' },
      { h3: 'Group or one child', p: 'Fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'These come from older students. Every one of them once learned place value and times tables like a Grade 3 child. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from parents and students, as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Try a class first, free. If you continue, a monthly fee covers eight live classes; the box below shows it with the currency code. Nothing is signed for the school year, and you can stop at the end of a month.',
    free: ['A free first class', 'A friendly placement chat', 'No card needed'],
    group: ['Fifteen to twenty children', 'Same age group', 'One teacher all year', 'Pay monthly'],
    one: ['A teacher for one child', 'Your choice of times', 'Paced to your child']
  },

  faq: {
    eyebrow: 'Questions from Grade 3 parents',
    h2: 'EQAO Grade 3 math: common questions',
    items: [
      { q: 'What is the EQAO Grade 3 assessment?', a: 'It is the Grade 3, Primary Division Assessment of Reading, Writing and Mathematics, run by EQAO, the Education Quality and Accountability Office. EQAO says its assessments are taken by all Ontario students in Grades 3, 6 and 9 and measure the literacy and math skills students are expected to have learned by that point.' },
      { q: 'When is the Grade 3 EQAO assessment in 2027?', a: 'EQAO lists the next administration window for Grade 3 as May 4 to June 8, 2027. Your child\'s teacher can tell you which days the school will use.' },
      { q: 'Are these EQAO practice questions?', a: 'No. The fifteen questions on this page are our own practice, not EQAO questions. We wrote them to match the strands of the Grade 3 Ontario math curriculum, and we do not copy EQAO material.' },
      { q: 'Is there a free EQAO Grade 3 practice test?', a: 'EQAO\'s own website is the place to look for any official sample or practice material for Grade 3; start at its Grade 3, Primary Division page. That page would not open for us when we checked on 22 October 2026, which is why this guide stays silent on its contents.' },
      { q: 'What math is on the Grade 3 assessment?', a: 'EQAO describes it as an assessment of reading, writing and mathematics. The math Grade 3 students learn is set by the 2020 Ontario curriculum: Number, Algebra including coding, Data, Spatial Sense and Financial Literacy. We have matched our practice to those strands.' },
      { q: 'Does my child need to prepare for EQAO?', a: 'The best preparation is a solid year of Grade 3 math, with short regular practice and the habit of explaining answers. Heavy test drilling is not needed at this age and often adds worry.' },
      { q: 'Can I hear from EQAO directly?', a: 'Yes. EQAO runs a free webinar, EQAO Math Night for Parents and Guardians, for families of Grade 3, 6 and 9 students. On 22 October 2026 it listed the next one for Tuesday, November 3, 2026, from 6:00 to 7:00 p.m. Eastern time.' },
      { q: 'Will your classes raise my child\'s EQAO result?', a: 'We do not promise any level or result. What we do promise is steady, patient teaching of the Grade 3 curriculum, with your child explaining their thinking in every lesson.' },
      { q: 'What times are lessons for a Grade 3 child?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We agree times in your own clock, which for most of Ontario is Eastern time.' },
      { q: 'How much are classes?', a: 'Your first class is free. After that, families pay a monthly fee for eight live classes and can stop at the end of any month. The amount itself is printed in the price panel above, in your own currency.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Ontario families with young children.',
    items: [
      { href: '/online-math-tutor-3rd-grade', label: 'Online math tutor, Grade 3', p: 'One-to-one math at this grade.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Math help across all grades in Canada.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Coding from age 6 in the province.' },
      { href: '/blog/help-child-with-maths-anxiety', label: 'Helping with math worry', p: 'What to do when math brings tears.' },
      { href: '/blog/help-child-with-maths-homework', label: 'Helping with math homework', p: 'How to help without doing it for them.' },
      { href: '/blog/how-to-make-maths-fun-for-kids', label: 'Making math fun', p: 'Games and everyday moments that teach.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All our Canadian pages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one of our live lessons.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us what your child enjoys in math and what feels hard. The free class is gentle, starts with something they can do, and ends with something new.',
    readFirst: 'Want to know more first? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look through the <a class="ag-inline-link" href="/courses/elementary-mathematics-complete-masterclass">Elementary Math syllabus</a>.',
    note: 'Classes happen live on video, taught from India at hours that suit Ontario families. No travel, no strangers at the door; WhatsApp reaches us fastest.',
    formNote: 'There is no charge and no card for the free class.'
  },

  footer: {
    cols: [
      { h4: 'Grade 3 math', links: [
        { href: '/courses/elementary-mathematics-complete-masterclass', label: 'Elementary Math' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental Math for Kids' },
        { href: '/online-math-tutor-3rd-grade', label: 'Grade 3 math tutor' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'How do you know? Show me another way'
  },

  personalityCss: `
.ag-root.ag-eqa .ag-hero h1 { letter-spacing: -0.006em; max-width: 18ch; }
.ag-root.ag-eqa .ag-capsule { border-left-width: 6px; border-radius: 6px; }
.ag-root.ag-eqa .ag-steps li { margin-bottom: 0.7rem; line-height: 1.6; }
.ag-root.ag-eqa .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-eqa .ag-table caption { text-align: left; font-style: normal; }
`,

  dossier: {
    curriculumAuthority: 'EQAO assessments page and Grade 9 page (saved 22 October 2026; the primary-division page was blocked by Cloudflare and not retried): what EQAO tests assess, the five next administration windows, Grades 3, 6 and 9 taken by all students, the parent math webinar and its 3 November 2026 date. Ontario elementary mathematics (2020), Grade 3 strands and specific expectations, read raw the same day.',
    localProject: 'Fifteen original Grade 3 practice questions across Number, Algebra (one coding question with a repeat), Data, Spatial Sense and Financial Literacy, labelled our practice, not EQAO questions, with worked answers checked in Python; a six-step method for using EQAO&rsquo;s own materials; a November 2026 to May 2027 plan. Lesson family: explain-your-thinking.',
    requiredMentions: ['Fifteen Grade 3 math practice questions', 'Grade 3, Primary Division: Assessment of Reading, Writing and Mathematics', 'are taken by all Ontario students in Grades 3, 6 and 9', 'EQAO Math Night for Parents and Guardians', 'Tuesday, November 3, 2026', 'recall and demonstrate multiplication facts of 2, 5, and 10, and related division facts', 'among 2, 3, 4, 5, 6, 8, and 10 sharers', 'estimate and calculate the change required for various simple cash transactions', 'Ten crackers are shared fairly among 4 friends', 'A pencil costs 65 cents'],
    sources: [
      { claim: 'What EQAO tests assess; the 2026 to 2027 administration windows for every assessment.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'Assessments taken by all students in Grades 3, 6 and 9; the parent math webinar and its next date.', url: 'https://www.eqao.com/the-assessments/grade-9-math/' },
      { claim: 'Grade 3 math strands and specific expectations.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_3___strands?depth=4' },
      { claim: 'The Grade 3 assessment page (linked; returned a Cloudflare 403 on 22 October 2026, not described).', url: 'https://www.eqao.com/the-assessments/primary-division/' }
    ],
    rejectedClaims: [
      'Any description of the Grade 3 assessment format, length, delivery, accommodations or sample test: the primary-division page was blocked, so none is made.',
      'Grade 9 facts transferred to Grade 3 (adaptive design, sessions, question counts): not applied.',
      'That EQAO maps Grade 3 questions to particular expectations: not found; the strand match is ours and labelled so.',
      'Reproducing EQAO questions or released items: none used.',
      'Any EQAO level, score or result from our classes: none promised.',
      'Any affiliation with EQAO or the ministry: none, and the page says so.'
    ]
  }
};
