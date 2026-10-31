'use strict';
// Saxon Math tutor (ag- curriculum help door; UK and US exams cluster Phase 1, row US082).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md (writer brief, rule 10). Sources read raw with curl on
// 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/saxon-math-tutor/):
//  - hmhco.com/programs/saxon-math (HMH, publisher): "To master mathematics, students need to build on prior learning";
//    "An incremental approach gives students the time to understand and practice a small concept before adding the next
//    step."; "Distributing skills across the year ensures that students have time to practice and master a concept.";
//    "Cumulative practice and assessments cover ideas from earlier lessons"; strands "woven together and connected
//    throughout the year"; "Easy-to-follow daily lessons offer a consistent structure"; Classroom Discourse, Hands-On
//    Learning (manipulatives), Writing ("written practice"); summative "Power Up, Cumulative, Benchmark, and End-of-Year
//    tests"; formative "through daily instruction, lesson practice, and written practice"; "Guide to Differentiated
//    Instruction"; online Drawing Tools, "iTools digital math manipulatives", Calculator Activities, eGlossary; Instructional
//    Content: Primary K-3 ("consumable kit"; "Grade 3 is available in kit or textbook format"), Intermediate 3-5,
//    Courses 1-3 ("algebraic thinking"), Algebra 1, Geometry, Algebra 2; "Guided by the incremental approach developed by
//    John Saxon"; HMH's own ESSA evidence labels K-5 "STRONG", 6-8 "MODERATE", 9-12 "PROMISING" (attributed to HMH).
//  - hmhco.com/classroom-solutions/homeschool: homeschool math programs "include Math in Focus, Saxon Math, and Head for
//    Home Math Skills workbooks".
//  - The HMH homeschool shop URL redirected to the program page; homeschool edition titles were not verifiable, so none
//    are printed.
// Not used: prices, HMH's research and achievement claims beyond its own ESSA labels, author names other than John Saxon,
// the quoted teacher testimonial.
// Our own material, labelled: the lesson-of-origin method and Python tally (Lesson 42 missed 3 times, 55 twice, 38 and 30
// once), worked examples 3(2x - 5) - 4(x - 2) = 2x - 7, 0.4x + 1.2 = 0.1x + 3 gives x = 6, consecutive odd integers
// 25, 27, 29, (2/3)x - 5 = 7 gives x = 18, the stall table and practice set.
// Lesson family: sorting mistakes by the lesson that taught them (Counter over tuples, most_common).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH', blurb: 'Live help for families using Saxon Math: how the incremental lessons work, where students stall, and how a tutor fits in.' },
  slug: 'saxon-math-tutor',
  code: 'sax',
  accent: '#823C5F',
  accentRationale: 'Saxon Math tutor: a mulberry ink, #823C5F as allocated, warm and clearly apart from the green curriculum pages, well above contrast on the #FBF8F2 paper',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Saxon Math tutor',
  title: 'Saxon Math Tutor Online: Live Help Alongside the Books',
  description: 'A Saxon Math tutor online for families using the books: how the incremental lessons and cumulative tests work, where students stall, and live help.',
  ogDescription: 'Saxon Math teaches in small increments and reviews everything, every day. That is its strength and the reason some students stall. How the program is built, and how a live tutor works alongside it.',
  twitterDescription: 'Live online help for students using Saxon Math, from Algebra 1 back to the early courses.',
  pageName: 'Saxon Math Tutor',
  webPageDescription: 'A guide for US families using Saxon Math, built from Houghton Mifflin Harcourt pages read on 31 October 2026, with our own worked examples, a mistake-sorting method and details of live online tutoring.',
  courseDescription: 'Live online math lessons for US students using Saxon Math, from the middle courses to Algebra 1, Geometry and Algebra 2, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Saxon Math tutor',
  navLinks: [
    { href: '#how-saxon-works', label: 'How Saxon works' },
    { href: '#levels', label: 'Levels' },
    { href: '#stall', label: 'Where students stall' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#tutor', label: 'With a tutor' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Saxon Math K to Algebra 2 &middot; Live help alongside the books',
  h1: 'Saxon Math tutor online, alongside the books you already use',
  lede: 'Saxon Math has a reputation among homeschool and school families for being steady and relentless: a short new idea each day, then a long mixed set that keeps reaching back to old lessons. Many children thrive on it. Some reach a point, often in the middle courses or Algebra 1, where the mixed sets stop feeling like review and start feeling like a wall. This page explains how the program is designed, from the publisher&rsquo;s own description, and how a live tutor can work with the Saxon book on the table rather than replacing it.',
  secondaryCta: { href: '#worked', label: 'See the worked examples' },
  wa: 'Hello Modern Age Coders, my child uses Saxon Math in the US and is getting stuck. Could we book a free first class with a tutor?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['Publisher', 'Houghton Mifflin Harcourt (HMH)'],
    ['Method', 'Incremental, cumulative review'],
    ['Levels', 'Primary, Intermediate, Courses 1 to 3, high school'],
    ['Tests', 'Power Up, Cumulative, Benchmark, End-of-Year'],
    ['Our help', 'Live online, with your book'],
    ['Formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Saxon Math is a K to 12 math program published by Houghton Mifflin Harcourt (HMH) that teaches in small daily increments and keeps every earlier lesson in cumulative practice and tests. A Saxon Math tutor helps a student who has stalled by finding which earlier lesson each missed problem depends on and reteaching it. Modern Age Coders teaches live online for US students, in a batch or 1-on-1, through its Algebra Foundations course, and the first class is free.',

  picks: {
    eyebrow: 'Courses that sit beside Saxon',
    h2: 'Three live courses for students working through Saxon Math',
    lede: 'We teach to the student&rsquo;s current Saxon lesson, so these courses run alongside the book rather than in place of it.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'SAX / 01', title: 'Algebra foundations', note: 'Pre-algebra and Algebra 1: the stage where most Saxon students ask for help.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'SAX / 02', title: 'Middle school math', note: 'Fractions, ratios, negatives and early equations, the Courses 1 to 3 territory.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'SAX / 03', title: 'High school math', note: 'Geometry and Algebra 2 for students who carry on with Saxon after Algebra 1.' }
    ]
  },

  sections: [
    {
      id: 'how-saxon-works', tint: 'tint', eyebrow: 'How Saxon works',
      h2: 'How does Saxon Math teach, according to its publisher?',
      lede: 'HMH describes Saxon as incremental and cumulative: each lesson adds one small step, and practice keeps returning to everything taught before. Understanding that design is the first step to helping a student who is struggling with it.',
      body: [
        { kind: 'table', caption: 'The Saxon Math design in HMH&rsquo;s own words (hmhco.com/programs/saxon-math, checked 31 October 2026)', head: ['Feature', 'What HMH says'], rows: [
          ['Starting point', '"To master mathematics, students need to build on prior learning"'],
          ['Increments', '"An incremental approach gives students the time to understand and practice a small concept before adding the next step."'],
          ['Distribution', '"Distributing skills across the year ensures that students have time to practice and master a concept."'],
          ['Review', '"Cumulative practice and assessments cover ideas from earlier lessons"'],
          ['Strands', 'Concepts from every strand are "woven together and connected throughout the year"'],
          ['Daily routine', '"Easy-to-follow daily lessons offer a consistent structure"'],
          ['Summative tests', '"Power Up, Cumulative, Benchmark, and End-of-Year tests"'],
          ['Ongoing checks', 'Formative assessment "through daily instruction, lesson practice, and written practice"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What a lesson contains',
          left: [
            'HMH lists three parts to the classroom experience: Classroom Discourse (daily discussion and practice), Hands-On Learning with manipulatives, and Writing, where "written practice" gives students the chance to review and apply earlier concepts.',
            'Online, the program adds Drawing Tools, "iTools digital math manipulatives", Calculator Activities and an eGlossary, and teachers get a Guide to Differentiated Instruction for planning.'
          ],
          rightH3: 'Where the method comes from',
          right: [
            'HMH says the program&rsquo;s authors work "Guided by the incremental approach developed by John Saxon." The name on the cover is the name of the method.',
            'HMH&rsquo;s homeschool page lists Saxon Math among its home math programs, beside Math in Focus and Head for Home Math Skills workbooks, which is why so many homeschool families meet it.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.hmhco.com/programs/saxon-math" rel="noopener" target="_blank">HMH Saxon Math program page</a> and <a class="ag-inline-link" href="https://www.hmhco.com/classroom-solutions/homeschool" rel="noopener" target="_blank">HMH homeschool page</a>, checked 31 October 2026. Saxon Math is a trademark of its owner. Modern Age Coders is not affiliated with, endorsed by or connected with Houghton Mifflin Harcourt.' }
      ]
    },
    {
      id: 'levels', tint: 'deep', eyebrow: 'Levels',
      h2: 'Which Saxon Math levels are there, from kindergarten to Algebra 2?',
      lede: 'HMH groups the program into four bands. Knowing the band tells a tutor what the student has already been given and what is coming next.',
      body: [
        { kind: 'table', caption: 'Saxon Math instructional content by band (HMH program page, checked 31 October 2026; the right-hand column is our teaching note)', head: ['Band', 'Grades', 'HMH description', 'What we usually help with'], rows: [
          ['Primary', 'K to 3', 'Materials and activities "in the consumable kit"; "Grade 3 is available in kit or textbook format"', 'Fact fluency, place value, early word problems'],
          ['Intermediate', '3 to 5', 'Lessons embedded with activities and practical applications', 'Long division, fractions, decimals'],
          ['Courses 1 to 3', 'Middle grades', 'Units "integrated and distributed" to develop skills and "algebraic thinking"', 'Negatives, ratios, first equations'],
          ['High school', 'Algebra 1, Geometry, Algebra 2', 'Practical applications of abstract concepts', 'Equations, functions, proofs, quadratics']
        ] },
        { kind: 'p', mt: true, html: 'Homeschool editions have sometimes carried different book titles from the classroom bands above. If your child&rsquo;s book has another name on the cover, that is fine: we place by what the lessons contain, not by the title. Send us a photo of the contents page and the last test your child took, and the teacher will start from there.' },
        { kind: 'p', mt: true, html: '<b>HMH&rsquo;s evidence labels, as HMH states them.</b> On its program page HMH links three documents describing how Saxon Math meets the federal ESSA evidence tiers: grades K to 5 "STRONG", grades 6 to 8 "MODERATE" and grades 9 to 12 "PROMISING". These are the publisher&rsquo;s own descriptions of its research, reported here as HMH words. We make no claim about outcomes for any program, including our own.' }
      ]
    },
    {
      id: 'stall', tint: 'tint', eyebrow: 'Where students stall',
      h2: 'Why do some students get stuck in Saxon Math?',
      lede: 'In our teaching experience, Saxon students rarely get stuck on the new lesson of the day. They get stuck on problem 18 of the mixed set, which quietly depends on something taught thirty lessons ago. The patterns below are general guidance from our classes, not statistics.',
      body: [
        { kind: 'table', caption: 'Common stall points with Saxon Math and what we do about them (our teaching notes)', head: ['What the parent sees', 'What is usually underneath', 'What helps'], rows: [
          ['New lessons are fine, mixed sets are slow', 'One or two old lessons were never secure', 'Sort missed problems by the lesson that taught them'],
          ['Test scores drop while daily work looks fine', 'Daily sets were done with the lesson example open', 'Do a few mixed problems closed-book each week'],
          ['Tears at Algebra 1', 'Negative numbers and fraction arithmetic are shaky', 'Rebuild integers and fractions before more algebra'],
          ['Every problem gets the newest method', 'The student guesses which lesson a problem belongs to', 'Practise naming the idea before solving'],
          ['Hours per lesson', 'Too many problems attempted without help on the first error', 'Stop after two misses on one idea and ask']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the design causes this',
          left: [
            'Cumulative practice is exactly what HMH says it is: ideas from earlier lessons keep coming back. That is a gift to a student who understood them, and a slow leak for one who memorised a step and moved on.',
            'Because the review is mixed, a gap does not show up as one bad lesson. It shows up as a scatter of wrong answers across many days, which is hard for a parent to diagnose from the gradebook.'
          ],
          rightH3: 'What not to do',
          right: [
            'Do not skip the mixed practice to get through more lessons. The review is the program; without it Saxon becomes a thin textbook.',
            'Do not restart the whole book either. A student who is stuck at lesson 64 usually needs three or four earlier lessons retaught, not sixty.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples',
      h2: 'How does a tutor find the lesson behind a wrong answer?',
      lede: 'Our method, shown on a made-up week of work. Every missed problem is traced to the lesson that first taught it, and the lessons that appear most often are the ones to reteach.',
      body: [
        { kind: 'code', label: 'lesson_of_origin.py (our example; lesson and problem numbers are invented)', lang: 'Python 3', code: 'from collections import Counter\n\n# One week of missed problems: (lesson done, problem number, lesson it reviews)\nmissed = [(61, 7, 42), (61, 18, 55), (62, 4, 42), (62, 21, 38),\n          (63, 12, 42), (63, 25, 55), (64, 9, 30)]\n\nby_origin = Counter(origin for _, _, origin in missed)\nfor lesson, count in by_origin.most_common():\n    print(f"Lesson {lesson}: missed {count} time(s)")', note: 'Output: Lesson 42: missed 3 time(s), Lesson 55: missed 2 time(s), Lesson 38: missed 1 time(s), Lesson 30: missed 1 time(s). Seven wrong answers across four days look random; sorted by origin, almost half point to one earlier lesson. That is the lesson to reteach first. A paper tally works just as well; the code only shows the idea.' },
        { kind: 'table', mt: true, caption: 'Four worked problems at Algebra 1 level, in the mixed style Saxon students meet (our problems and solutions)', head: ['Problem', 'Idea it depends on', 'Worked solution'], rows: [
          ['Simplify 3(2x - 5) - 4(x - 2)', 'Distributing a negative', '6x - 15 - 4x + 8, so 2x - 7. The usual slip is -4 times -2 written as -8.'],
          ['Solve 0.4x + 1.2 = 0.1x + 3', 'Clearing decimals', 'Multiply every term by 10: 4x + 12 = x + 30, so 3x = 18 and x = 6.'],
          ['Three consecutive odd integers add to 81. Find them.', 'Writing an equation from words', 'n + (n + 2) + (n + 4) = 81, so 3n + 6 = 81, n = 25: the numbers are 25, 27 and 29.'],
          ['Solve (2/3)x - 5 = 7', 'Undoing a fraction coefficient', 'Add 5: (2/3)x = 12. Multiply by 3/2: x = 18. Check: 12 - 5 = 7.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Naming the idea first',
          left: [
            'Before solving any mixed problem, we ask the student to say in a few words what kind of problem it is: "distributing a negative", "clear the decimals". It takes ten seconds and stops the habit of applying today&rsquo;s method to everything.',
            'When a student cannot name the idea, that is the gap, found before a single wrong answer is written.'
          ],
          rightH3: 'Checking without the key',
          right: [
            'Each worked example above ends with a check a student can do alone: substitute the answer back, or estimate first. For x = 6, 0.4 times 6 plus 1.2 is 3.6, and 0.1 times 6 plus 3 is also 3.6.',
            'A student who checks their own work needs the answer key less, and learns more from the times the check fails.'
          ] },
        { kind: 'table', mt: true, caption: 'A short mixed practice set to try (ours; answers in brackets)', head: ['Problem', 'Idea to name first'], rows: [
          ['-2(3x - 4) + 5x', 'Distributing a negative (-x + 8)'],
          ['0.3x - 0.6 = 0.1x + 1', 'Clearing decimals (x = 8)'],
          ['Four consecutive integers add to 66', 'Equation from words (15, 16, 17, 18)'],
          ['(3/4)x + 2 = 11', 'Fraction coefficient (x = 12)'],
          ['Find 15% of 240', 'Percent as a decimal (36)']
        ] }
      ]
    },
    {
      id: 'tutor', tint: 'tint', eyebrow: 'With a tutor',
      h2: 'How does a live tutor work alongside Saxon Math?',
      lede: 'The book stays in charge of the sequence. The tutor&rsquo;s job is to keep the cumulative review working by repairing old lessons before the gaps spread.',
      body: [
        { kind: 'ol', items: [
          '<b>Bring the book and the last two weeks of work.</b> The first class starts from your child&rsquo;s current lesson and their recent mixed sets and tests.',
          '<b>Trace the misses.</b> The teacher sorts wrong answers by the lesson that taught them, the method shown above.',
          '<b>Reteach the two or three lessons that matter.</b> Usually with a different explanation from the book&rsquo;s, so the idea lands a second way.',
          '<b>Return to the current lesson.</b> The student carries on in Saxon; we do not skip ahead or reorder the book.',
          '<b>Watch the next Cumulative test.</b> If the same lessons come back wrong, we revisit them; if not, we look for the next pattern.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'A batch may suit', p: 'A student in the middle courses or Algebra 1 who needs steady weekly teaching of the same topics the book covers, with classmates working through similar material.' },
          { h3: '1-on-1 may suit', p: 'A homeschool student whose Saxon lesson number does not match a class, or one who needs several old lessons repaired quickly.' },
          { h3: 'Saxon alone may suit', p: 'A student who checks their own work, reads the lesson carefully and keeps test scores steady. Many children never need a tutor for Saxon.' }
        ] },
        { kind: 'p', mt: true, html: 'Homework stays the student&rsquo;s own. We teach the idea and set similar problems written by us; we do not complete Saxon sets or tests for anyone, and we never share test answers.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages of working through a cumulative program',
    lede: 'Our description of how students relate to mixed review, from struggling with it to relying on it.',
    table: { caption: 'Stages with cumulative review (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Lesson-bound', 'Can do today&rsquo;s problems with the example open, not much else'],
      ['2. Patchy', 'Most mixed problems right, the same few kinds always wrong'],
      ['3. Self-checking', 'Names each problem&rsquo;s idea and checks answers without the key'],
      ['4. Fluent', 'Mixed sets feel like warm-ups; tests hold steady']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 is the most common reason families call us. It is also the easiest to fix, because the gaps are few and findable.',
      'The gradebook alone will not show stage 2; sorting misses by lesson will.'
    ] },
    right: { h3: 'For students', ps: [
      'If a problem looks unfamiliar, it probably is not new. Ask which old lesson it is from.',
      'Checking your answer is not extra work. It is the work.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine math courses for every Saxon band',
    lede: 'Live courses that line up with what a Saxon student is studying, from early number sense to Algebra 2.',
    bands: [
      { num: 'I', h3: 'Primary and intermediate', sub: 'Grades K to 5', courses: [
        { code: 'SAX / E / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Counting and number sense.' },
        { code: 'SAX / E / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Facts, place value, fractions.' },
        { code: 'SAX / E / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Quick, reasoned arithmetic.' }
      ] },
      { num: 'II', h3: 'Courses 1 to 3', sub: 'Middle grades', courses: [
        { code: 'SAX / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratios, negatives, equations.' },
        { code: 'SAX / M / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Algebra ideas in Python.' },
        { code: 'SAX / M / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'For the student who wants more.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Algebra 1 to Algebra 2', courses: [
        { code: 'SAX / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra 1, explained.' },
        { code: 'SAX / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry and Algebra 2.' },
        { code: 'SAX / H / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'After Algebra 2.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons that keep the Saxon book in charge',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school or during the homeschool day.' },
      { time: 'Weekends', l: 'Repair sessions before a Cumulative test.' },
      { time: '1-on-1', l: 'Matched to your lesson number.' }
    ],
    cells: [
      { h3: 'Book stays open', p: 'We follow the Saxon sequence.' },
      { h3: 'Trace, then teach', p: 'Misses sorted by the lesson behind them.' },
      { h3: 'Our own problems', p: 'Practice written by our teachers.' },
      { h3: 'No answers handed over', p: 'Tests and sets stay the student&rsquo;s.' },
      { h3: 'Every US time zone', p: 'Eastern to Pacific and beyond.' },
      { h3: 'Pick a size', p: 'Fifteen to twenty in a batch, or private.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Some of our math students also write small programs. A few are on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Saxon support is billed by the month in US dollars with no long contract, so a family can add a tutor for a hard stretch of lessons and stop when the mixed sets settle.',
    free: ['A free first class', 'Bring the Saxon book', 'No card details needed'],
    group: ['Fifteen to twenty students', 'The same teacher each week', 'Choose your batch', 'Monthly billing'],
    one: ['One teacher, one student', 'Paced to your lesson number', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Saxon Math tutoring: common questions',
    items: [
      { q: 'Can you tutor my child in Saxon Math online?', a: 'Yes. Our teachers work live by video with the student\'s own Saxon book, starting from the current lesson and recent mixed sets. Classes run as a batch of 15 to 20 or one to one.' },
      { q: 'Who publishes Saxon Math?', a: 'Saxon Math is published by Houghton Mifflin Harcourt (HMH). Its program page describes an incremental approach with cumulative practice and assessment, from kindergarten to Algebra 2. We are not connected with HMH.' },
      { q: 'Why is Saxon Math so hard for some children?', a: 'Its mixed practice keeps returning to earlier lessons, so one insecure idea shows up as scattered wrong answers for weeks. In our experience the fix is to find and reteach those few lessons, not to slow the whole book down.' },
      { q: 'What tests does Saxon Math use?', a: 'HMH lists Power Up, Cumulative, Benchmark and End-of-Year tests as its summative assessments, with formative checks through daily lessons and written practice.' },
      { q: 'Which Saxon levels do you help with?', a: 'All of them, but most families come to us from the middle courses, Algebra 1, Geometry or Algebra 2. Younger children are taught through our elementary course with the Saxon lessons beside it.' },
      { q: 'Should my child skip the mixed practice to catch up?', a: 'We would not. The cumulative review is how Saxon is designed to work. It is better to repair the old lessons behind the misses so the review starts helping again.' },
      { q: 'Will you do my child\'s Saxon homework or tests?', a: 'No. We teach the idea behind a problem and set similar problems of our own. Homework, tests and grades remain the student\'s work.' },
      { q: 'My child\'s book has a different title from the levels you list. Is that a problem?', a: 'No. Editions and titles vary. Send a photo of the contents page and a recent test and the teacher will place your child by what the lessons cover.' },
      { q: 'When are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Is the first class free?', a: 'Yes. The first class is free and needs no card details. Bring the Saxon book and the last week or two of work.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More help for US families teaching math at home or alongside school.',
    items: [
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'Planning a whole math sequence at home.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'Where many Saxon students first want a teacher.' },
      { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring', p: 'For the year after Algebra 1.' },
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core vs traditional math', p: 'Two teaching styles set side by side from the standards.' },
      { href: '/online-math-tutor-7th-grade', label: 'Seventh grade math tutoring', p: 'Negatives, ratios and first equations.' },
      { href: '/online-math-tutor-cost', label: 'Math tutor cost', p: 'What shapes the fee for online math help.' }
    ]
  },

  start: {
    h2: 'Book a free first Saxon class',
    lede: 'Tell us the Saxon level and lesson number, and which problems keep coming back wrong. The teacher will trace them in the first class.',
    readFirst: 'Read how <a class="ag-inline-link" href="/how-we-teach">our teachers plan a lesson</a>, or look through the <a class="ag-inline-link" href="/courses">full course list</a>.',
    note: 'Our teachers are based in India and teach US families live, at times set around American school days and homeschool routines. WhatsApp is the quickest way to reach us.',
    formNote: 'Free first class, and no payment details are asked for.'
  },

  footer: {
    cols: [
      { h4: 'Math help', links: [
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' },
        { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring' },
        { href: '/online-math-tutor-7th-grade', label: 'Seventh grade math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Lesson 42, three times'
  },

  personalityCss: `
.ag-root.ag-sax .ag-hero h1 { letter-spacing: -0.012em; max-width: 22ch; }
.ag-root.ag-sax .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-sax .ag-table caption { text-align: left; font-weight: 600; font-style: italic; }
.ag-root.ag-sax .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-sax .ag-section-head h2 { max-width: 28ch; }
`,

  dossier: {
    curriculumAuthority: 'Houghton Mifflin Harcourt, Saxon Math program page (hmhco.com/programs/saxon-math) and homeschool page, read raw 31 October 2026: incremental approach; build on prior learning; distributed skills; cumulative practice and assessments; strands woven together; Classroom Discourse, Hands-On Learning, Writing; Power Up, Cumulative, Benchmark and End-of-Year tests; formative assessment through daily instruction, lesson practice and written practice; Guide to Differentiated Instruction; iTools digital math manipulatives and eGlossary; bands Primary K-3 (consumable kit, grade 3 kit or textbook), Intermediate 3-5, Courses 1-3, Algebra 1, Geometry, Algebra 2; John Saxon; HMH ESSA labels STRONG, MODERATE, PROMISING; homeschool list with Math in Focus and Head for Home Math Skills.',
    localProject: 'Our lesson-of-origin Python tally of an invented week of missed problems (Lesson 42 three times, Lesson 55 twice, Lessons 38 and 30 once), four worked Algebra 1 problems (2x - 7; x = 6; 25, 27, 29; x = 18), the stall table and a five-problem mixed practice set. Lesson family: sorting mistakes by the lesson that taught them.',
    requiredMentions: [
      'An incremental approach gives students the time to understand and practice a small concept before adding the next step.',
      'Distributing skills across the year ensures that students have time to practice and master a concept.',
      'Cumulative practice and assessments cover ideas from earlier lessons',
      'Power Up, Cumulative, Benchmark, and End-of-Year tests',
      'Guided by the incremental approach developed by John Saxon.',
      'Grade 3 is available in kit or textbook format',
      'iTools digital math manipulatives',
      'Head for Home Math Skills workbooks',
      'Lesson 42: missed 3 time(s)',
      'n + (n + 2) + (n + 4) = 81'
    ],
    sources: [
      { claim: 'Saxon Math program design, levels, assessments and authors (HMH).', url: 'https://www.hmhco.com/programs/saxon-math' },
      { claim: 'HMH homeschool math programs, including Saxon Math.', url: 'https://www.hmhco.com/classroom-solutions/homeschool' },
      { claim: 'HMH ESSA evidence documents linked from the program page (labels attributed to HMH).', url: 'https://www.hmhco.com/programs/saxon-math' }
    ],
    rejectedClaims: [
      'Homeschool edition titles (for example the fraction-style book names families mention): not verifiable on HMH pages read on 31 October 2026, because the homeschool shop URL redirected to the classroom program page; not printed.',
      'HMH statements that Saxon produces dramatic improvement or higher test scores: not repeated; only HMH\'s own ESSA labels are reported, attributed.',
      'Any HMH, distributor or tutor prices: not used.',
      'Names of Saxon authors other than John Saxon, and the quoted teacher testimonial: not used.',
      'That a tutor improves Saxon test scores or grades: refused; no outcome promises.',
      'Any affiliation with HMH or Saxon: none, stated on the page.'
    ]
  }
};
