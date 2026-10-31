'use strict';
// Hunter College High School entrance exam math prep (ag- exam door; UK and US exams cluster Phase 2, row US051).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. The school is the topic (it runs its own public
// entrance exam), so it is named (brief rule 7). Every fact read raw with curl on 31 October 2026 from Hunter College
// Campus Schools; copies in keyword-research-2026-09/uk-us-gap/src/hunter-college-high-school-math-prep/:
//  - hunterschools.org/high-school/admissions/hs-admissions-overview: entrance exam "on Wednesday, January 27, 2027";
//    application "available on Wednesday, September 23, 2026"; HCHS is "a part of the Hunter College Campus Schools, the
//    laboratory schools of the City University of New York administered by Hunter College"; "serves students in grades
//    7-12"; "The only entry year for HCHS is 7th grade."; "There are NO exceptions to grade entry."
//  - .../eligibility-for-fall-2027-entry: three criteria (6th grade at a NYC or neighboring school or homeschooled;
//    reside in one of the five boroughs as of September 1; minimum qualifying score); Spring 2026 5th grade NYS exams
//    "SP 26, ELA = 478", "SP 26, Math = 497", both required; other approved exams (ERB CTP 5, ITBS, TerraNova 3,
//    Stanford 10) at the "90th national percentile" in Reading and Math, Fall 2025 or Spring 2026 in grade 5, first
//    sitting only; not approved: ERB Milestones, NWEA MAP, iReady, ISEE and SSAT ("not accepted this year"); no-score
//    route with approval, "All testing must be completed by Monday, December 21, 2026"; 85th to 89th percentile goes to
//    the Academic Insights Profile (AIP); Ravenna application, available "at noon on Wednesday, September 23"; "There
//    is no fee to apply to Hunter College High School"; deadline "2:00 PM on Friday, December 4, 2026"; "Do not submit
//    recommendation letters, report cards, awards, photos, essays".
//  - .../entrance-exam-2027: two multiple-choice sections and a writing assignment; "three hours"; "no make-up dates";
//    "HCHS does not publish any portion of the actual exam and does not endorse any test preparation service or
//    agency."; Reading Comprehension 50 multiple-choice, Mathematics "30 multiple-choice questions", any order; five
//    answers "A, B, C, D, or E"; math "may require students to perform calculations, recognize patterns and
//    relationships, interpret information, and solve problems"; "Calculators are not permitted."; two sample exams
//    "not administered in any previous year"; scoring: computer-scored, "threshold scores are established to determine
//    which students advance to the essay-reading round"; essays read "blind"; waitlist "is not ranked"; "HCHS does not
//    rescore exams, reread essays, or reconsider admissions decisions."; families "do not receive scores".
// Weekdays checked in Python (Sep 23 2026 Wed, Dec 4 2026 Fri, Dec 21 2026 Mon, Jan 27 2027 Wed).
// Our own material, labelled: the pacing table (60, 70, 80 minutes over 30 items = 120, 140, 160 seconds), the
// elimination arithmetic (one of five = 20 percent; one of three after two eliminations), three worked examples
// (48 marbles; 3/8 of the ribbon; the 1,000th digit), ten practice problems with answers checked in Python, the
// 12-week plan to January 27, 2027. Lesson family: five-choice elimination and pattern-spotting without a calculator.
// No sample exam item reproduced; families are sent to Hunter's own free samples.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST PREP', blurb: 'The Hunter College High School entrance exam for 7th grade entry in fall 2027: who qualifies, the 30-question math section, the January 27, 2027 date and original practice.' },
  slug: 'hunter-college-high-school-math-prep',
  code: 'hch',
  accent: '#346767',
  accentRationale: 'Hunter College High School math prep: a deep teal #346767 from the US allocation table, about 6.2:1 on paper #FBF8F2, kept apart from the SHSAT olive so the two NYC doors look distinct',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'Hunter College High School math prep',
  title: 'Hunter College High School Entrance Exam Math Prep 2027',
  description: 'Hunter College High School entrance exam prep for 6th graders: who qualifies, the 30-question math section, the January 27, 2027 exam and original practice.',
  ogDescription: 'Hunter\'s 7th grade entrance exam is on January 27, 2027. Who can sit it, how the 30 math questions work, how scoring runs, and ten original problems to practice.',
  twitterDescription: 'Hunter College High School entrance exam math, from Hunter\'s own pages.',
  pageName: 'Hunter College High School Math Prep',
  webPageDescription: 'A parent and student guide to the math section of the Hunter College High School entrance exam for 7th grade entry in fall 2027, from Hunter College Campus Schools\' own admissions pages, with pacing, worked examples and original practice problems.',
  courseDescription: 'Live online math classes for NYC 6th graders preparing for the Hunter College High School entrance exam, in a batch of 15 to 20 or one to one, built on grade 6 reasoning without a calculator.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Hunter College High School math prep',
  navLinks: [
    { href: '#qualify', label: 'Who qualifies' },
    { href: '#exam', label: 'The exam' },
    { href: '#scoring', label: 'Scoring' },
    { href: '#pacing', label: 'Pacing' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New York City &middot; Grade 6 &middot; Entrance exam January 27, 2027',
  h1: 'Hunter College High School entrance exam math prep',
  lede: 'Hunter College High School admits new students only into 7th grade, and only through its own entrance exam, which a 6th grader sits once. The exam is on Wednesday, January 27, 2027, and only students with qualifying 5th grade scores may take it. Below, the rules come straight from the admissions pages of Hunter College Campus Schools (we read them on 31 October 2026); after that comes our approach to the 30 multiple-choice math questions: pacing for five answer choices, three worked examples and ten problems we wrote ourselves.',
  secondaryCta: { href: '#qualify', label: 'Check eligibility' },
  wa: 'Hello Modern Age Coders, my child is in 6th grade in New York City and is preparing for the Hunter College High School entrance exam. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; original problems, never exam items',
  spec: [
    ['Entry year', '7th grade only'],
    ['Who sits it', 'Qualifying NYC 6th graders'],
    ['Exam date', 'Wednesday, January 27, 2027'],
    ['Math section', '30 multiple-choice questions'],
    ['Answer choices', 'Five, A to E'],
    ['Whole exam', 'Three hours, three sections'],
    ['Calculator', 'Not permitted'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Hunter College High School entrance exam is set by Hunter College Campus Schools for NYC 6th graders who meet its 5th grade score and residency rules. It has 50 reading and 30 math multiple-choice questions plus a writing piece, in three hours, without a calculator. Modern Age Coders coaches this math section live online in its SHSAT Math Prep course, taught either 1-on-1 or to a group batch.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Three courses behind Hunter math',
    lede: 'Our NYC entrance-test course first, then the middle school and competition courses that widen the reasoning.',
    items: [
      { course: 'shsat-math-prep-course', code: 'HCH / 01', title: 'SHSAT Math Prep', note: 'NYC entrance math without a calculator, adapted for a 6th grader sitting Hunter.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'HCH / 02', title: 'Middle school mathematics', note: 'Fractions, ratios, percent and geometry, the grade 6 core.' },
      { course: 'middle-school-math-competitions-course', code: 'HCH / 03', title: 'Middle school competitions', note: 'Pattern and logic problems that reward a second look.' }
    ]
  },

  sections: [
    {
      id: 'qualify', tint: 'tint', eyebrow: 'Eligibility',
      h2: 'Who can take the Hunter College High School entrance exam in 2027?',
      lede: 'A candidate must meet three conditions: be in 6th grade at a NYC or neighboring school or be homeschooled, live full time in one of the five boroughs as of September 1, and hold a minimum qualifying score from 5th grade.',
      body: [
        { kind: 'table', caption: 'Qualifying scores for the January 27, 2027 Hunter entrance exam (Hunter College Campus Schools, Eligibility for Fall 2027 Entry, read 31 October 2026)', head: ['Child&rsquo;s 5th grade testing', 'What qualifies'], rows: [
          ['Took the NYS exams in Spring 2026', 'ELA scale score of 478 and Math scale score of 497, both met'],
          ['Took an approved non-NYS exam in 5th grade (Fall 2025 or Spring 2026)', '90th national percentile in both Reading and Math, first sitting only'],
          ['Approved non-NYS exams', 'ERB CTP 5, Iowa Test of Basic Skills, TerraNova 3, Stanford 10 (abbreviated battery accepted)'],
          ['Not approved', 'ERB Milestones, NWEA MAP, iReady, and ISEE and SSAT this year'],
          ['No approved 5th grade exam at all', 'Apply with a school letter, wait for approval, then test in person by Monday, December 21, 2026'],
          ['Scores slightly below the cutoff', 'May be eligible for the Academic Insights Profile (AIP); 85th to 89th percentile on an approved 6th grade exam goes to AIP automatically']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why this comes first',
          left: [
            'Every bit of preparation is wasted if the child cannot sit the exam, so check the 5th grade scores before anything else. Hunter asks for an official score report or an NYC Schools Account screenshot showing three-digit scale scores; it will not accept performance levels or percentage ranges instead.',
            'If the child took both the NYS exams and another approved test, Hunter says only the NYS scores count. A child who missed the cutoff may not take another exam in 6th grade to try again.'
          ],
          rightH3: 'Residency and grade',
          right: [
            'Residency means living full time in the five boroughs as the primary home on September 1 of the application year. Hunter adds that property ownership alone does not count and checks the address on the family&rsquo;s NYS IT-201 tax form.',
            'The overview page is blunt: "The only entry year for HCHS is 7th grade." Students are not admitted into grades 8 to 12, and "There are NO exceptions to grade entry."'
          ] },
        { kind: 'source', html: 'Source: Hunter College Campus Schools, <a class="ag-inline-link" href="https://www.hunterschools.org/high-school/admissions/eligibility-for-fall-2027-entry" rel="noopener" target="_blank">Eligibility for Fall 2027 Entry</a>, read 31 October 2026. Modern Age Coders is not connected with Hunter College, Hunter College Campus Schools or CUNY.' }
      ]
    },
    {
      id: 'apply', tint: 'deep', eyebrow: 'Applying',
      h2: 'How do you apply for the Hunter entrance exam, and by when?',
      lede: 'Applications go through Ravenna, an online system. The fall 2027 application opened at noon on Wednesday, September 23, 2026 and closes at 2:00 PM on Friday, December 4, 2026. Hunter charges no application fee.',
      body: [
        { kind: 'ol', items: [
          '<b>Check eligibility.</b> Confirm the 5th grade score and residency rules above before starting. Hunter states that an invitation letter is not needed to apply.',
          '<b>Create a Ravenna account.</b> Go to ravenna-hub.com, create an account, and add a student profile for the child. Each child applying needs their own profile.',
          '<b>Find Hunter College Campus Schools</b> in the Ravenna school directory, choose the High School application type and answer every question.',
          '<b>Upload the score evidence:</b> an NYS score screenshot or an official report from another approved exam. Hunter verifies every score with the child&rsquo;s school.',
          '<b>Submit by 2:00 PM on Friday, December 4, 2026.</b> Do not send recommendation letters, report cards, awards, photos or essays; Hunter asks families not to.',
          '<b>Sit the exam on Wednesday, January 27, 2027.</b> Hunter says plainly that there are no make-up dates for students who miss it.'
        ] },
        { kind: 'table', mt: true, caption: 'The fall 2027 Hunter calendar (Hunter College Campus Schools admissions pages, pages as of 31 October 2026, each weekday verified by us)', head: ['Date', 'What happens'], rows: [
          ['Wednesday, September 23, 2026, noon', 'High school application opens in Ravenna'],
          ['Friday, December 4, 2026, 2:00 PM', 'Application deadline'],
          ['Monday, December 21, 2026', 'Last day for approved no-score students to finish a qualifying exam'],
          ['Wednesday, January 27, 2027', 'Entrance exam; no make-up date']
        ] },
        { kind: 'source', html: 'Sources: Hunter College Campus Schools <a class="ag-inline-link" href="https://www.hunterschools.org/high-school/admissions/hs-admissions-overview" rel="noopener" target="_blank">HS Admissions Overview</a> and Eligibility for Fall 2027 Entry, read 31 October 2026. Check the admissions pages for any change before each step.' }
      ]
    },
    {
      id: 'exam', tint: 'tint', eyebrow: 'The exam',
      h2: 'What is on the Hunter College High School entrance exam?',
      lede: 'Three sections in three hours: 50 multiple-choice reading comprehension questions, 30 multiple-choice math questions and a writing assignment. Students may do the sections in any order, and calculators are not permitted.',
      body: [
        { kind: 'table', caption: 'The Hunter entrance exam at a glance (Hunter College Campus Schools, Entrance Exam 2027, read 31 October 2026)', head: ['Section', 'Format', 'What Hunter says it assesses'], rows: [
          ['Reading Comprehension', '50 multiple-choice questions on five or six passages', 'Understanding, interpreting and analyzing text'],
          ['Mathematics', '30 multiple-choice questions, five choices A to E', 'Concepts, reasoning and problem-solving; calculations, patterns and relationships, interpreting information'],
          ['Writing Assignment', 'An essay or a creative piece of up to two pages', 'Originality, effectiveness and use of detail'],
          ['Timing', 'Three hours for everything, sections in any order', 'The student divides the time'],
          ['Tools', 'No calculators', 'Working by hand']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The math section in Hunter&rsquo;s words',
          left: [
            'Hunter says the Mathematics section "assesses students&rsquo; understanding of mathematical concepts and their ability to apply mathematical reasoning and problem-solving skills." The questions "may require students to perform calculations, recognize patterns and relationships, interpret information, and solve problems in a variety of mathematical contexts."',
            'Unlike a state test, there is no published standards list. The safest reading is the full grade 6 curriculum, done flexibly: fractions, decimals and percent, ratios, negative numbers, area and volume, simple data, and the patterns that tie them together.'
          ],
          rightH3: 'Use Hunter&rsquo;s free samples',
          right: [
            'Hunter publishes two sample entrance exams with math solutions and study guides on its Entrance Exam 2027 page. It notes that they "were not administered in any previous year" and that actual content will vary.',
            'Hunter also states: "HCHS does not publish any portion of the actual exam and does not endorse any test preparation service or agency." We send every student to those samples and never copy their questions into our lessons.'
          ] },
        { kind: 'source', html: 'Source: Hunter College Campus Schools, <a class="ag-inline-link" href="https://www.hunterschools.org/high-school/admissions/entrance-exam-2027" rel="noopener" target="_blank">Entrance Exam 2027</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'scoring', tint: 'deep', eyebrow: 'Scoring',
      h2: 'How is the Hunter entrance exam scored?',
      lede: 'The two multiple-choice sections are computer-scored first. Hunter then sets threshold scores to decide who advances to the essay-reading round, and the essays are read blind before students are selected.',
      body: [
        { kind: 'table', caption: 'From exam day to decision (Hunter College Campus Schools, Entrance Exam 2027, scoring and student selection, read 31 October 2026)', head: ['Stage', 'What Hunter describes'], rows: [
          ['1. Machine scoring', 'Reading and math multiple-choice answers are computer-scored and checked for accuracy'],
          ['2. Thresholds', 'Threshold scores decide who advances to essay reading; they may vary from year to year'],
          ['3. Essay round', 'A panel reads essays blind, identifying students only by HCHS identification number'],
          ['4. Selection', 'Students are selected for admission after the essay review'],
          ['5. Waitlist', 'A pool of waitlisted students; the waitlist is not ranked'],
          ['After', 'No rescoring, rereading or reconsideration; families do not receive scores']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means for math',
          left: [
            'Math counts most at stage 2. The multiple-choice score decides whether a student&rsquo;s essay is read at all, so strong math and strong reading together get the writing in front of the panel.',
            'Because Hunter tells families neither the scores nor whether a child reached the essay round, practice tests at home are the only feedback a student will get. That makes honest, timed practice with the official samples more valuable.'
          ],
          rightH3: 'What we will not say',
          right: [
            'No tutor can tell a family where the thresholds will fall, because Hunter sets them each year and does not publish them. We make no prediction of admission.',
            'We teach the math, the pacing and the habits of checking that multiple-choice rewards, and we tell parents plainly what we see in practice.'
          ] },
        { kind: 'source', html: 'Source: Hunter College Campus Schools, <a class="ag-inline-link" href="https://www.hunterschools.org/high-school/admissions/entrance-exam-2027" rel="noopener" target="_blank">Entrance Exam 2027</a>, The Test: Scoring and Student Selection, read 31 October 2026.' }
      ]
    },
    {
      id: 'pacing', tint: 'tint', eyebrow: 'Pacing',
      h2: 'How long should each Hunter math question take?',
      lede: 'Hunter sets one three-hour block for all three sections, so the student chooses how much goes to math. Our table shows the time per question for three sensible splits; the arithmetic is ours.',
      body: [
        { kind: 'table', caption: 'Seconds per math question under three time budgets (our calculation from the published 30 questions)', head: ['Minutes given to math', 'Seconds per question', 'What remains for reading and writing'], numCols: [0, 1, 2], rows: [
          ['60', '120 (3,600 / 30)', '120 minutes'],
          ['70', '140 (4,200 / 30)', '110 minutes'],
          ['80', '160 (4,800 / 30)', '100 minutes']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Settle the order at home.</b> With the two Hunter samples, try math first once and reading first once. Keep whichever order leaves the student calmer for the writing piece.',
          '<b>Two passes through the math.</b> First pass: answer every question that yields within about two minutes and mark the rest. Second pass: return to the marked ones. A paper exam allows this, so use it.',
          '<b>Eliminate before guessing.</b> With five choices, a blind guess is right one time in five, or 20 percent. Crossing out two impossible answers leaves three, which makes a guess right one time in three. The arithmetic is ours.',
          '<b>Estimate first.</b> Without a calculator, a rough answer before the exact one catches slips. If the estimate is about 40 and the work gives 400, something went wrong.',
          '<b>Bubble carefully.</b> Hunter publishes a guide to filling out the Scantron. A shifted row of bubbles can cost more than any hard question.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why we teach elimination on purpose',
          left: [
            'Five choices is more than many school tests use, and a careful look at the options often rules out two quickly: a negative answer for a length, a fraction bigger than 1 for part of a whole, a number with the wrong last digit.',
            'We practice spotting impossible choices as a skill of its own, with our own five-choice problems, so it becomes a habit rather than a last resort.'
          ],
          rightH3: 'Time for the writing piece',
          right: [
            'Hunter&rsquo;s writing assignment can be up to two pages with time to plan. If math takes 80 minutes, reading and writing share 100. A student who races through math to protect the essay often loses more than they gain.',
            'We help students find a split that holds up under a full timed sample, then stick to it.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples',
      h2: 'Three worked Hunter-style math examples',
      lede: 'Problems we invented at a strong grade 6 level. They are not Hunter questions and are not taken from either Hunter sample exam.',
      body: [
        { kind: 'p', html: '<b>Example 1: parts of a whole, in two steps.</b> A jar holds red, blue and green marbles. One third are red, one quarter are blue, and the remaining 20 are green. How many marbles are in the jar? Reasoning: red and blue together are 1/3 + 1/4 = 4/12 + 3/12 = 7/12. So green is 5/12 of the jar, and 5/12 of the total is 20, which makes 1/12 equal to 4 and the whole jar 48. Check: 16 red, 12 blue, 20 green, total 48. A five-choice list would likely include 60, the answer for someone who treats green as one third.' },
        { kind: 'p', html: '<b>Example 2: a fraction of a fraction.</b> Lena cuts a ribbon in half and gives one half away. She cuts the rest into four equal pieces and uses three of them. What fraction of the original ribbon did she use? She kept 1/2, and used 3/4 of that: 3/4 x 1/2 = 3/8. The common slip is answering 3/4, which is the fraction of the kept half, not of the whole ribbon. Reading the last words of the question again, "of the original ribbon", saves the point.' },
        { kind: 'p', html: '<b>Example 3: a repeating pattern.</b> The digits 1, 4, 2, 8, 5, 7 repeat forever: 142857142857... What is the 1,000th digit? The block has 6 digits, so divide: 1,000 = 6 x 166 + 4. After 166 full blocks we need the 4th digit of the block, which is 8. Hunter&rsquo;s own description mentions recognizing "patterns and relationships"; finding the cycle length and using the remainder is the whole idea.' },
        { kind: 'two', mt: true,
          leftH3: 'What the examples share',
          left: [
            'Each needs only grade 6 content, but each is two or three steps, and each has one tempting wrong answer that a careless reader would choose from five options.',
            'None needs a calculator, but all of them need clean written working, because a jumbled page makes it easy to lose a twelfth or a remainder.'
          ],
          rightH3: 'How we teach from them',
          right: [
            'Before writing, the student says the plan aloud: "add the known parts, find what is left, scale up." Next, one number is swapped for a new one and the student works it through once more, which tests the method rather than the memory.',
            'Last, we write the five choices ourselves and ask the student which wrong answers a rushed reader would pick. Knowing the traps is half of avoiding them.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice set',
      h2: 'Ten original practice problems for Hunter math',
      lede: 'Written by our teachers for 6th graders preparing for January 27, 2027. No calculator. About 140 seconds each matches the middle row of the pacing table.',
      body: [
        { kind: 'ol', items: [
          '<b>What is 2/3 of 3/4 of 48?</b>',
          '<b>A shirt is on sale for 30 percent off and costs 28 dollars. What was the original price in dollars?</b>',
          '<b>The ratio of cats to dogs at a shelter is 3 to 5. There are 16 more dogs than cats. How many animals are there?</b>',
          '<b>What is the smallest whole number that leaves a remainder of 1 when divided by 2, by 3 and by 4, and is greater than 1?</b>',
          '<b>A rectangle has perimeter 30 cm and its length is twice its width. What is its area?</b>',
          '<b>Evaluate negative 7 + 12 minus (negative 5).</b>',
          '<b>The mean of four test scores is 85. What must the fifth score be for the mean of all five to be 87?</b>',
          '<b>How many whole numbers from 1 to 100 are multiples of 3 or of 5?</b>',
          '<b>A cube has a surface area of 54 square inches. What is its volume?</b>',
          '<b>If 5 pencils cost as much as 2 pens, and a pen costs 1.25 dollars, how much do 8 pencils cost?</b>'
        ] },
        { kind: 'table', mt: true, caption: 'Answer key with the key step (ours, verified in Python)', head: ['No.', 'Answer', 'Key step'], rows: [
          ['1', '24', '3/4 of 48 is 36; 2/3 of 36 is 24'],
          ['2', '40 dollars', '28 is 70 percent of the price; 28 / 0.7'],
          ['3', '64', 'Two parts are 16, so one part is 8; 8 parts in all'],
          ['4', '13', 'One more than 12, the least common multiple of 2, 3 and 4'],
          ['5', '50 square cm', 'Width w, length 2w, perimeter 6w = 30, so w = 5'],
          ['6', '10', 'Negative 7 + 12 = 5, then 5 + 5'],
          ['7', '95', 'Totals 4 x 85 = 340 and 5 x 87 = 435'],
          ['8', '47', '33 + 20 minus the 6 multiples of 15 counted twice'],
          ['9', '27 cubic inches', 'Six faces of 9 square inches; edge 3'],
          ['10', '4 dollars', '5 pencils cost 2.50, so one costs 0.50']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where 6th graders slip',
          left: [
            'Problem 2 tempts students to add 30 percent to 28, giving 36.40, which is not the original price. Problem 8 tempts them to add 33 and 20 without removing the numbers counted twice.',
            'Problem 9 needs the surface area split into six faces before the edge length appears. Students who divide by 4 or by 8 have mixed up their cube facts.'
          ],
          rightH3: 'Then the real samples',
          right: [
            'When these feel steady, take one Hunter sample exam fully timed at home, then check it with Hunter&rsquo;s own math solutions.',
            'In class we sort the missed questions by idea, not by number, and set fresh problems of our own on each weak idea.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'The plan',
      h2: 'A 12-week Hunter math plan to January 27, 2027',
      lede: 'Our plan for a qualifying 6th grader starting at the end of October 2026, with one or two live classes a week and short practice at home.',
      body: [
        { kind: 'table', caption: 'Twelve weeks to the exam (our plan)', head: ['Weeks', 'Dates, approximately', 'Focus'], rows: [
          ['1 to 2', 'November 2 to 15, 2026', 'Fractions, decimals and percent without a calculator; a short diagnostic'],
          ['3 to 4', 'November 16 to 29', 'Ratios and rates; parts of a whole in several steps'],
          ['5 to 6', 'November 30 to December 13', 'Geometry: perimeter, area, surface area and volume; the application closes December 4'],
          ['7 to 8', 'December 14 to 27', 'Number sense: factors, multiples, remainders and patterns'],
          ['9', 'December 28 to January 3, 2027', 'First full timed Hunter sample at home; review by idea'],
          ['10 to 11', 'January 4 to 17', 'Weakest ideas only; elimination and estimation drills'],
          ['12', 'January 18 to 26', 'Second timed sample; settle the time split; rest the night before']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Check first', p: 'Confirm the 5th grade scores qualify before planning anything.' },
          { h3: 'Apply on time', p: 'Ravenna closes at 2:00 PM on December 4, 2026.' },
          { h3: 'One exam day', p: 'January 27, 2027, with no make-up date.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four signs a 6th grader is ready for Hunter math',
    lede: 'Good school grades are the starting point. Hunter adds five choices, no calculator and one fixed morning.',
    table: { caption: 'Moving from classroom math to Hunter math (our four stages)', head: ['Stage', 'What you see'], rows: [
      ['1. Fluent', 'Fraction, decimal and percent work done by hand, quickly and accurately'],
      ['2. Flexible', 'Multi-step questions mapped out in words first'],
      ['3. Selective', 'Rules out impossible choices before working anything out'],
      ['4. Steady', 'Finishes 30 questions in the planned time with a check']
    ] },
    left: { h3: 'For parents', ps: [
      'Steps 3 and 4 rarely appear in a school math class. A timed Hunter sample at home shows them clearly.',
      'Because Hunter does not share scores, keep your own record of each practice: questions right, time used, and the ideas missed.'
    ] },
    right: { h3: 'For students', ps: [
      'Before choosing an answer, ask whether it even makes sense. A share of something cannot be more than the whole.',
      'Keep a page of every mistake and why it happened. Read it the week before the exam.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around the Hunter year',
    lede: 'Every course is taught live online by one regular teacher, privately or in a group.',
    bands: [
      { num: 'I', h3: 'The exam year', sub: 'Grade 6', courses: [
        { code: 'HCH / EXM / 01', slug: 'shsat-math-prep-course', title: 'SHSAT Math Prep', blurb: 'NYC entrance math, no calculator.' },
        { code: 'HCH / EXM / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'The grade 6 to 8 core.' },
        { code: 'HCH / EXM / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Secure the grade 5 base.' }
      ] },
      { num: 'II', h3: 'Sharper thinking', sub: 'For speed and depth', courses: [
        { code: 'HCH / SHP / 01', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'MATHCOUNTS-style reasoning.' },
        { code: 'HCH / SHP / 02', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Mental calculation', blurb: 'Quick, exact arithmetic by hand.' },
        { code: 'HCH / SHP / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Logic and patterns.' }
      ] },
      { num: 'III', h3: 'After grade 6', sub: 'Middle school and beyond', courses: [
        { code: 'HCH / NXT / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations and expressions.' },
        { code: 'HCH / NXT / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and chance.' },
        { code: 'HCH / NXT / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Coding with numbers in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live Hunter math classes around the 6th grade week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Late afternoons on Eastern Time.' },
      { time: 'Weekends', l: 'Room for a timed sample exam.' },
      { time: '1-on-1', l: 'Built around one student&rsquo;s gaps.' }
    ],
    cells: [
      { h3: 'Five-choice drills', p: 'Our own problems with five options.' },
      { h3: 'By-hand work', p: 'No calculator in any lesson.' },
      { h3: 'Sample reviews', p: 'Hunter&rsquo;s free samples checked together.' },
      { h3: 'Mistake log', p: 'Every slip recorded with its cause.' },
      { h3: 'Five boroughs', p: 'Live online; no commute.' },
      { h3: 'Group size', p: 'Groups of 15 to 20, or private.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Some students go on to build with math in code; there are examples on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews parents left on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Hunter charges no fee to apply; our fee covers classes only. We bill one month at a time, so a family can stop after January 27, 2027.',
    free: ['A free first class', 'A short no-calculator check', 'No card asked for'],
    group: ['A batch of 15 to 20', 'The same teacher weekly', 'Choose your batch', 'Monthly billing'],
    one: ['A private math teacher', 'A plan to the exam date', 'Problems aimed at one child']
  },

  faq: {
    eyebrow: 'Questions from NYC families',
    h2: 'Hunter entrance exam math: what families ask',
    items: [
      { q: 'When is the Hunter College High School entrance exam in 2027?', a: 'Hunter College Campus Schools lists the entrance exam on Wednesday, January 27, 2027, for 7th grade entry in fall 2027. There are no make-up dates for students who miss it.' },
      { q: 'What score do you need to take the Hunter entrance exam?', a: 'For students who took the Spring 2026 5th grade NYS exams, Hunter lists minimum scale scores of 478 in ELA and 497 in Math, both required. Students with other approved exams need the 90th national percentile in Reading and Math.' },
      { q: 'How many math questions are on the Hunter entrance exam?', a: 'Hunter says the Mathematics section has 30 multiple-choice questions, each with five answer choices from A to E. Reading Comprehension has 50 questions, and there is also a writing assignment.' },
      { q: 'How long is the Hunter entrance exam?', a: 'Students have three hours to complete the whole exam and may do the three sections in any order. The split of time between reading, math and writing is the student\'s own choice.' },
      { q: 'Can you use a calculator on the Hunter exam?', a: 'No. Hunter\'s Entrance Exam 2027 page states that calculators are not permitted, so all math is done by hand.' },
      { q: 'When is the deadline to apply to Hunter College High School?', a: 'Hunter lists the deadline as 2:00 PM on Friday, December 4, 2026, through the Ravenna online system. The application opened at noon on Wednesday, September 23, 2026, and there is no fee to apply.' },
      { q: 'Does Hunter accept the ISEE, SSAT or MAP for qualifying?', a: 'Not this year. Hunter lists ERB Milestones, NWEA MAP and iReady as not approved, and the ISEE and SSAT as not accepted this year. Approved exams include ERB CTP 5, ITBS, TerraNova 3 and Stanford 10.' },
      { q: 'Do families get their child\'s Hunter exam score?', a: 'No. Hunter says students and parents do not receive scores for any part of the exam and are not told whether a student advanced to the essay round. It also does not rescore exams or reconsider decisions.' },
      { q: 'Do you use real Hunter questions in class?', a: 'No. Hunter states it does not publish any portion of the actual exam. We write our own problems and send students to Hunter\'s two free sample exams, which we never copy.' },
      { q: 'What days and times are Hunter math classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Hunter College High School?', a: 'No. Modern Age Coders is an independent online school, not connected with Hunter College, Hunter College Campus Schools or CUNY. Hunter says it does not endorse any test preparation service, and that includes us.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for NYC middle schoolers',
    lede: 'Other doors for NYC families: the later tests, help by grade, and contests that sharpen the same skills.',
    items: [
      { href: '/shsat-math-prep', label: 'SHSAT math prep', p: 'The specialized high schools test in grade 8.' },
      { href: '/isee-ssat-math-prep', label: 'ISEE and SSAT math', p: 'For independent school applications.' },
      { href: '/online-math-tutor-6th-grade', label: '6th grade math tutor', p: 'The year the Hunter exam is sat.' },
      { href: '/online-math-tutor-5th-grade', label: '5th grade math tutor', p: 'The year whose scores qualify a student.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'Contests that reward careful reasoning.' },
      { href: '/best-coding-classes-for-kids-in-new-york-city', label: 'Coding classes in NYC', p: 'For students who like to build.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us whether your child&rsquo;s 5th grade scores qualify and how they feel about math. In the trial lesson the teacher tries a few by-hand problems with your child and then names the two ideas that most need work.',
    readFirst: 'To see what a lesson looks like, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'Teachers join live from India at times arranged around New York school days and weekends. WhatsApp tends to be the quickest way to reach us.',
    formNote: 'There is no charge for the first class and no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'NYC entrance tests', links: [
        { href: '/shsat-math-prep', label: 'SHSAT math prep' },
        { href: '/isee-ssat-math-prep', label: 'ISEE and SSAT math' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation' },
        { href: '/math-olympiad-amc-tutoring', label: 'AMC and olympiad tutoring' }
      ] },
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-5th-grade', label: '5th grade math tutor' },
        { href: '/online-math-tutor-6th-grade', label: '6th grade math tutor' },
        { href: '/online-math-tutor-7th-grade', label: '7th grade math tutor' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Thirty questions, five choices each'
  },

  personalityCss: `
.ag-root.ag-hch .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-hch .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-hch .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-hch .ag-table caption { text-align: left; }
.ag-root.ag-hch .ag-steps li { line-height: 1.55; }
.ag-root.ag-hch .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Hunter College Campus Schools, read raw on 31 October 2026: HS Admissions Overview (exam Wednesday, January 27, 2027; application from Wednesday, September 23, 2026; 7th grade only entry; laboratory schools of CUNY), Eligibility for Fall 2027 Entry (three criteria, NYS scale scores 478 ELA and 497 Math, approved and not approved exams, 90th percentile, AIP, no-score route by December 21, 2026, Ravenna steps, no fee, deadline 2:00 PM December 4, 2026), Entrance Exam 2027 (50 reading and 30 math multiple-choice questions, five choices, writing assignment, three hours, any order, no calculators, no make-up dates, two samples, scoring by threshold and blind essay reading, unranked waitlist, no scores released).',
    localProject: 'Our pacing table (120, 140 and 160 seconds per question), our elimination arithmetic (one in five, one in three), three original worked examples (48 marbles, 3/8 of the ribbon, the 1,000th digit is 8), ten original practice problems with answers checked in Python, a 12-week plan to January 27, 2027. Lesson family: five-choice elimination and pattern-spotting without a calculator.',
    requiredMentions: ['The only entry year for HCHS is 7th grade.', 'HCHS does not publish any portion of the actual exam and does not endorse any test preparation service or agency.', 'ELA scale score of 478 and Math scale score of 497', '30 multiple-choice questions, five choices A to E', 'threshold scores', 'the waitlist is not ranked', '2:00 PM on Friday, December 4, 2026', 'ERB Milestones, NWEA MAP, iReady, and ISEE and SSAT this year', '140 (4,200 / 30)', '1,000 = 6 x 166 + 4'],
    sources: [
      { claim: 'Hunter College High School overview: 7th grade only entry, exam date January 27, 2027, application opening September 23, 2026.', url: 'https://www.hunterschools.org/high-school/admissions/hs-admissions-overview' },
      { claim: 'Eligibility for fall 2027 entry: criteria, qualifying scores, approved exams, AIP, application steps, no fee, December 4, 2026 deadline.', url: 'https://www.hunterschools.org/high-school/admissions/eligibility-for-fall-2027-entry' },
      { claim: 'Entrance Exam 2027: sections, 30 math questions with five choices, three hours, no calculators, samples, scoring and selection.', url: 'https://www.hunterschools.org/high-school/admissions/entrance-exam-2027' }
    ],
    rejectedClaims: [
      'Threshold scores, acceptance numbers or offer rates: Hunter does not publish them on the pages read; none printed and no admission prediction made.',
      'Questions from Hunter\'s two sample exams and their solutions: not reproduced; families are linked to Hunter\'s own page.',
      'A standards list for the math section: Hunter publishes none; the page says the grade 6 curriculum is the safest reading and labels that as our view.',
      'The Academic Insights Profile details beyond the eligibility page: the AIP page itself was not read, so only the eligibility page wording is used.',
      'Hunter elementary school admissions: out of scope; not covered.',
      'Any affiliation with Hunter College, Hunter College Campus Schools or CUNY: none, stated on the page.'
    ]
  }
};
