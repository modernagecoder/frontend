'use strict';
// i-Ready math help (ag- guide door; UK and US exams cluster, row US013). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from Curriculum
// Associates' own pages; copies in keyword-research-2026-09/uk-us-gap/src/i-ready-math-help/:
//  - curriculumassociates.com/programs/i-ready-assessment/diagnostic: "Starting in school year 2026-2027 [en dash in the
//    source], the name of the i-Ready Diagnostic will change to i-Ready Inform for Reading and for Mathematics"; adaptive
//    Reading and Mathematics assessments (Grades K to 12); Spanish Mathematics K to 12; reports with "both national norms and
//    criterion-referenced grade-level placements"; Typical Growth and Stretch Growth goals; i-Ready Standards Mastery,
//    fixed-form, Grades 2 to 8; NCII positive reviews for Grades K to 8.
//  - curriculumassociates.com/family (Family Center page): i-Ready is "a family of research-based programs"; i-Ready Inform
//    "an assessment students complete up to three times a year"; Personalized Instruction "a personalized lesson pathway,
//    called My Path"; "three rotating student groups of about 15 minutes each, two to three times per week"; home use "depends
//    on your child's school"; "encouraging them to think carefully before answering rather than rushing through"; "If you
//    have questions about how your child is doing, your best resource is always their teacher"; adaptive questions "getting
//    harder when your child answers correctly and easier when they don't"; "designed to find the precise edge of what your
//    child knows"; ceiling and floor of a traditional grade-level test; no generative AI in i-Ready Assessment and
//    Personalized Instruction.
//  - Understanding Your Student's i-Ready Inform Results (family PDF, 07/26): "The purpose of i-Ready Inform is not to give
//    your student a grade but instead to determine how best to support their learning"; four placement levels (Above Grade
//    Level, At Grade Level, Approaching Grade Level, Needs Improvement); "Scale scores provide a single, consistent way to
//    measure growth across grade levels and domains"; national norms as percentiles; sample math domains Number and
//    Operations, Algebra and Algebraic Thinking, Measurement and Data, Geometry.
//  - curriculumassociates.com/support/i-ready-faq: created in 2011; "intentionally challenging"; "a series of correct answers
//    will result in slightly harder questions".
// Our own material, labelled: an invented domain table for a fourth grader, domain warm-ups by grade band with reasoning, a
// twelve-item check, and a plan for each placement level.
// Lesson family: work from the weakest domain, and think before clicking.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST GUIDE', blurb: 'i-Ready math for families: the diagnostic (now i-Ready Inform), placement levels and domains, My Path lessons, and honest help at home.' },
  slug: 'i-ready-math-help',
  code: 'ir',
  accent: '#004C51',
  accentRationale: 'i-Ready math help: a deep teal #004C51 from the US allocation table, 9.20:1 on paper #FBF8F2 and 7.92:1 on the deepest tint, darker and greener than the indigo MAP Growth page',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'i-Ready math help',
  title: 'i-Ready Math Help: Diagnostic Results and Home Support',
  description: 'i-Ready math help for parents: the i-Ready diagnostic (renamed i-Ready Inform), placement levels, math domains, My Path lessons, and how to help without answers.',
  ogDescription: 'The i-Ready math diagnostic places your child by domain, then sets lessons. How to read the report, what helps at home, and why answers never help.',
  twitterDescription: 'i-Ready math explained from Curriculum Associates\' family pages, with domain warm-ups.',
  pageName: 'i-Ready Math Help',
  webPageDescription: 'A family guide to i-Ready math, from Curriculum Associates\' own family and product pages: the adaptive diagnostic, now called i-Ready Inform, its placement levels and domains, My Path lessons, and practical home support with original activities.',
  courseDescription: 'Live online math teaching for grades K to 8 that works on the domains an i-Ready report flags, in a class of 15 to 20 or one to one, alongside the school\'s own program.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'i-Ready math help',
  navLinks: [
    { href: '#what', label: 'What i-Ready is' },
    { href: '#report', label: 'Reading the report' },
    { href: '#home', label: 'Helping at home' },
    { href: '#domains', label: 'Domain warm-ups' },
    { href: '#ladder', label: 'By placement' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades K to 8 &middot; Curriculum Associates i-Ready',
  h1: 'i-Ready math help for families',
  lede: 'If your child\'s school uses i-Ready, two things happen in math. A few times a year your child takes an adaptive diagnostic, which places them by domain. In between, they work through online lessons chosen from those results. Parents usually arrive here after a report says "Approaching Grade Level", or after a child gets stuck on a lesson. Both are fixable, and neither is fixed by finding answers online. This page explains the program in Curriculum Associates\' own words and shows what actually helps.',
  secondaryCta: { href: '#report', label: 'Read an i-Ready report' },
  wa: 'Hello Modern Age Coders, my child\'s i-Ready math report shows some weak areas. Could we book a free first class?',
  heroNote: 'Live math teaching since 2020 &middot; 10,000+ students &middot; grades K to 8',
  spec: [
    ['Publisher', 'Curriculum Associates'],
    ['Diagnostic', 'i-Ready Inform, formerly i-Ready Diagnostic'],
    ['Type', 'Adaptive, up to three times a year'],
    ['Results', 'Placement level, scale score, national norm'],
    ['Lessons', 'Personalized Instruction, called My Path'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'i-Ready is Curriculum Associates\' program of an adaptive diagnostic, renamed i-Ready Inform from the 2026 to 2027 school year, plus personalized online lessons called My Path. The diagnostic reports a placement level, a scale score and a national norm, overall and by math domain. We help by teaching the flagged domains live online, in a batch of 15 to 20 or 1-on-1, through our Elementary Mathematics course; we never supply answers.',

  picks: {
    eyebrow: 'Help by domain',
    h2: 'Three courses for i-Ready math support',
    lede: 'Each teaches math by grade band; the teacher picks the units that match the weakest domains on your child\'s report.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'IR / 01', title: 'Elementary math', note: 'Grades 1 to 5, organized by number, operations, measurement and geometry.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'IR / 02', title: 'Middle school math', note: 'Grades 6 to 8, from ratio to linear equations.' },
      { course: 'mental-maths-mastery-kids', code: 'IR / 03', title: 'Mental math', note: 'Ages 5 to 10: number sense and fluency that speed up every lesson.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What i-Ready is',
      h2: 'What is i-Ready math, and what is the i-Ready diagnostic?',
      lede: 'i-Ready is not a single test. Curriculum Associates calls it "a family of research-based programs" that helps teachers see where each child is and teach from there.',
      body: [
        { kind: 'table', caption: 'The parts of i-Ready a family is most likely to meet (Curriculum Associates Family Center and i-Ready Assessment pages, read 31 October 2026)', head: ['Part', 'What it is, in the publisher\'s words or close to them'], rows: [
          ['i-Ready Inform (formerly i-Ready Diagnostic)', '"an assessment students complete up to three times a year to show teachers exactly where each child is in their learning"'],
          ['i-Ready Personalized Instruction', '"a personalized lesson pathway, called My Path, built from each student\'s i-Ready Inform results"'],
          ['i-Ready Standards Mastery', 'Fixed-form assessments for grades 2 to 8 on key grade-level standards'],
          ['Grades and languages', 'Adaptive mathematics assessments for grades K to 12, in English and in Spanish']
        ] },
        { kind: 'source', html: 'Sources: Curriculum Associates, <a class="ag-inline-link" href="https://www.curriculumassociates.com/family" rel="noopener" target="_blank">i-Ready for families</a> and <a class="ag-inline-link" href="https://www.curriculumassociates.com/programs/i-ready-assessment/diagnostic" rel="noopener" target="_blank">i-Ready Inform</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'A new name from 2026 to 2027',
          left: [
            'Curriculum Associates says that from the 2026 to 2027 school year, "the name of the i-Ready Diagnostic will change to i-Ready Inform for Reading and for Mathematics." It adds that the assessment itself keeps the same data and reports.',
            'So "i-Ready diagnostic", "i-Ready Inform" and "the i-Ready test" all mean the same thing in a school letter this year.'
          ],
          rightH3: 'Not a graded test',
          right: [
            'The family results guide is explicit: "The purpose of i-Ready Inform is not to give your student a grade but instead to determine how best to support their learning."',
            'Its FAQ also warns that the diagnostic is "intentionally challenging", because it keeps getting harder until it finds a child\'s level. A frustrated child is often a sign the test is doing its job.'
          ] },
        { kind: 'p', mt: true, html: 'In class, the Family Center page describes a typical setup of "three rotating student groups of about 15 minutes each, two to three times per week" for mathematics or reading, with My Path lessons matched "to each student\'s needs, not just their grade level."' }
      ]
    },
    {
      id: 'report', tint: 'deep', eyebrow: 'Reading the report',
      h2: 'How do you read i-Ready diagnostic results?',
      lede: 'Look at three things: the placement level, the domain table and the change between tests. The scale score and national norm add context.',
      body: [
        { kind: 'table', caption: 'Terms on an i-Ready family report (Understanding Your Student\'s i-Ready Inform Results, Curriculum Associates family guide, read 31 October 2026)', head: ['Term', 'What the guide says'], rows: [
          ['Placement level', 'Used to guide instruction; describes "the optimum instruction level"'],
          ['The four levels', 'Above Grade Level; At Grade Level; Approaching Grade Level; Needs Improvement'],
          ['Scale score', '"Scale scores provide a single, consistent way to measure growth across grade levels and domains"'],
          ['National norm', 'A percentile comparing the student with a nationally representative sample in the same grade at the same time of year'],
          ['Domains', 'Specific learning areas; the sample math report lists Number and Operations, Algebra and Algebraic Thinking, Measurement and Data, and Geometry']
        ] },
        { kind: 'table', mt: true, caption: 'An invented fourth grader\'s domain results (our example, not a real report and not Curriculum Associates\' sample)', head: ['Domain', 'Fall placement', 'Winter placement', 'What we would teach first'], rows: [
          ['Number and Operations', 'Approaching Grade 4', 'At Grade 4', 'Keep going: multi-digit multiplication'],
          ['Algebra and Algebraic Thinking', 'At Grade 4', 'At Grade 4', 'Patterns and factor pairs, lightly'],
          ['Measurement and Data', 'Needs Improvement', 'Approaching Grade 4', 'Unit conversion and line plots'],
          ['Geometry', 'Approaching Grade 4', 'Approaching Grade 4', 'Angles and lines of symmetry']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this example tells a parent',
          left: [
            'Overall, the child may still show "Approaching", yet the domain table shows real growth in two areas and a stuck area in geometry. That is far more useful than the overall line.',
            'The family guide makes the same point: comparing results "across the year and year over year" gives the clearest sense of growth.'
          ],
          rightH3: 'Who to ask',
          right: [
            'Curriculum Associates tells families that, for questions about how a child is doing, the teacher is the person to go to first.',
            'Ask which domain the class is working on next, and whether the My Path lessons are being completed carefully or rushed.'
          ] }
      ]
    },
    {
      id: 'home', tint: 'tint', eyebrow: 'Helping at home',
      h2: 'How can parents help with i-Ready math at home?',
      lede: 'By supporting effort and understanding, never by supplying answers. Answers make the next lesson too hard and the next diagnostic less accurate.',
      body: [
        { kind: 'ol', items: [
          '<b>Check whether lessons are meant to happen at home.</b> The Family Center says this "depends on your child\'s school"; some schools use i-Ready only during school hours.',
          '<b>Help with logging in and look at My Progress together.</b> The publisher suggests reviewing the My Progress page with your child.',
          '<b>Slow the clicking down.</b> Its advice is to encourage children "to think carefully before answering rather than rushing through." We ask children to say their reasoning aloud before choosing.',
          '<b>Never look up i-Ready answers.</b> My Path adapts to responses; borrowed answers move a child to harder lessons they cannot do.',
          '<b>Celebrate progress, not scores.</b> The family guide suggests discussing results with your child and celebrating strengths and progress.',
          '<b>Work on the flagged domain away from the screen.</b> Ten minutes of measuring, cooking fractions or drawing shapes does more for a weak domain than an extra lesson clicked through.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why answer sites backfire',
          left: [
            'The diagnostic adjusts in real time: Curriculum Associates says questions get "harder when your child answers correctly and easier when they don\'t". The lessons that follow are built from those responses.',
            'A run of copied answers tells the program a child is ready for work they have not learned, so the next sessions feel impossible and confidence drops.'
          ],
          rightH3: 'Why the diagnostic feels hard',
          right: [
            'The Family Center explains that a traditional grade-level test "has a ceiling and a floor", while the adaptive test is "designed to find the precise edge of what your child knows."',
            'Tell your child before testing day that everyone meets questions they cannot answer yet. That one sentence prevents a lot of tears.'
          ] }
      ]
    },
    {
      id: 'domains', tint: 'deep', eyebrow: 'Domain warm-ups',
      h2: 'What math should my child practice for i-Ready?',
      lede: 'The math in the weakest domain on their report, at their placement level. Below are warm-ups we wrote for each of the four domains on the sample report. They are not i-Ready items and do not imitate them.',
      body: [
        { kind: 'table', caption: 'Warm-ups by domain and grade band (ours), with the thinking to listen for', head: ['Domain', 'Grades K to 2', 'Grades 3 to 5', 'Grades 6 to 8'], rows: [
          ['Number and Operations', 'Show 26 with tens and ones; what is 26 + 10?', 'Is 4 x 199 closer to 800 or 700? Explain.', 'Divide 7.2 by 0.8 by multiplying both by 10'],
          ['Algebra and Algebraic Thinking', 'What comes next: 5, 10, 15, ...?', 'Find the missing number: 6 x ? = 54', 'Write an expression for "3 more than twice a number"'],
          ['Measurement and Data', 'Which is longer, a pencil or a crayon? How do you know?', 'How many centimeters in 3.5 meters?', 'Find the mean of 4, 7, 7, 10'],
          ['Geometry', 'How many corners does a triangle have?', 'Is a square always a rectangle?', 'Area of a triangle with base 10 and height 6']
        ] },
        { kind: 'table', mt: true, caption: 'Answers and the reasoning we hope to hear (ours)', head: ['Warm-up', 'Answer', 'Reasoning'], rows: [
          ['26 + 10', '36', 'One more ten; the ones stay the same'],
          ['4 x 199', 'Closer to 800', '4 x 200 = 800, minus 4, so 796'],
          ['7.2 divided by 0.8', '9', '72 divided by 8'],
          ['6 x ? = 54', '9', 'Count sixes, or think 54 divided by 6'],
          ['Twice a number plus 3', '2n + 3', 'Doubling first, then adding'],
          ['3.5 meters in centimeters', '350', '100 centimeters in each meter'],
          ['Mean of 4, 7, 7, 10', '7', 'Total 28 shared among 4'],
          ['Square and rectangle', 'Yes', 'Four right angles, and opposite sides equal'],
          ['Triangle area', '30', 'Half of 10 x 6']
        ] },
        { kind: 'table', mt: true, caption: 'A twelve-item check across the four domains (ours), answers on the right', head: ['#', 'Domain', 'Problem', 'Answer'], rows: [
          ['1', 'Number', '506 - 38', '468'],
          ['2', 'Number', 'Round 4,682 to the nearest hundred', '4,700'],
          ['3', 'Number', '2/3 of 18', '12'],
          ['4', 'Number', '0.6 x 0.5', '0.3'],
          ['5', 'Algebra', 'If 4 notebooks weigh 600 grams, what do 7 weigh?', '1,050 grams'],
          ['6', 'Algebra', 'Rule: add 4, then double. Start at 3.', '14'],
          ['7', 'Algebra', 'Solve 5x - 4 = 21', 'x = 5'],
          ['8', 'Measurement', 'A movie starts at 2:45 and lasts 1 hour 50 minutes. When does it end?', '4:35'],
          ['9', 'Measurement', 'Perimeter of a 7 by 3 rectangle', '20'],
          ['10', 'Measurement', 'Median of 3, 9, 4, 8, 6', '6'],
          ['11', 'Geometry', 'How many lines of symmetry does a rectangle (not a square) have?', '2'],
          ['12', 'Geometry', 'Volume of a box 2 by 3 by 4', '24 cubic units']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'By placement',
    h2: 'What should I do if my child is Approaching Grade Level on i-Ready?',
    lede: 'Find the domain that pulls the overall level down, and work on that first. The plan below is ours; your child\'s teacher knows the class context and should come first.',
    table: { caption: 'A next step for each i-Ready placement level (level names from Curriculum Associates; the suggestions are ours)', head: ['Placement level', 'What we would do'], rows: [
      ['Needs Improvement', 'Rebuild the earlier grade\'s skills in the weakest domain, slowly and concretely'],
      ['Approaching Grade Level', 'Target one or two domains for six to eight weeks, then check the next diagnostic'],
      ['At Grade Level', 'Keep weekly practice steady; add reasoning and word problems'],
      ['Above Grade Level', 'Enrich across domains with problem solving rather than racing ahead']
    ] },
    left: { h3: 'Typical and Stretch Growth', ps: [
      'Curriculum Associates describes two growth goals teachers can set with students: "a good year with Typical Growth, or a great year with Stretch Growth".',
      'Ask the teacher which goal your child has. It tells you what the school expects by spring.'
    ] },
    right: { h3: 'Keep one test in proportion', ps: [
      'A single diagnostic can be affected by a tired morning or rushed clicking. Look at the trend across two or three tests.',
      'If results and classwork disagree sharply, raise it with the teacher before changing anything at home.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for kindergarten to grade 8',
    lede: 'Live courses that teach each domain properly, so progress shows in class as well as in reports.',
    bands: [
      { num: 'I', h3: 'Early years', sub: 'Ages 4 to 9', courses: [
        { code: 'IR / E / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Concrete number play.' },
        { code: 'IR / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Fluency with understanding.' },
        { code: 'IR / E / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Patterns and shapes.' }
      ] },
      { num: 'II', h3: 'Elementary', sub: 'Grades 1 to 5', courses: [
        { code: 'IR / M / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'All four domains.' },
        { code: 'IR / M / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus math', blurb: 'Calculation confidence.' },
        { code: 'IR / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'From age 10.' }
      ] },
      { num: 'III', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'IR / S / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratio to equations.' },
        { code: 'IR / S / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Grade 8 algebra.' },
        { code: 'IR / S / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic math', blurb: 'Faster mental arithmetic.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Math lessons that work alongside i-Ready',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Thirty to forty-five minutes after school.' },
      { time: 'Weekends', l: 'Hands-on measurement and geometry.' },
      { time: '1-on-1', l: 'Built on the domains in your report.' }
    ],
    cells: [
      { h3: 'Domain-first', p: 'The weakest area gets most of the time.' },
      { h3: 'Concrete then abstract', p: 'Objects and drawings before symbols.' },
      { h3: 'Think, then click', p: 'Reasoning said aloud.' },
      { h3: 'Never answers', p: 'We teach, so My Path stays accurate.' },
      { h3: 'Parent updates', p: 'Short notes on what changed.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one child.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Older children sometimes build small math games of their own. Visit <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parent reviews posted on Google, shown without edits.',

  fees: {
    h2: 'Fees',
    lede: 'Classes are charged monthly in US dollars and you can stop at any month end. i-Ready itself is provided by your school, and we have nothing to do with its licensing or cost.',
    free: ['First class at no cost', 'Bring the latest i-Ready report', 'No card asked for'],
    group: ['15 to 20 children', 'The same teacher', 'A batch time you pick', 'Monthly'],
    one: ['One child, one teacher', 'Lessons by reported domain', 'Times to suit you']
  },

  faq: {
    eyebrow: 'Questions parents ask',
    h2: 'i-Ready math: common questions',
    items: [
      { q: 'What is the i-Ready math diagnostic?', a: 'It is Curriculum Associates\' adaptive math assessment, renamed i-Ready Inform from the 2026 to 2027 school year. Students take it up to three times a year, and it reports a placement level, scale score and national norm, overall and by domain.' },
      { q: 'Is the i-Ready diagnostic a test my child can fail?', a: 'No. Curriculum Associates says its purpose is not to give a grade but to work out what support will help most. It places children on a level so teachers and My Path lessons can start in the right place.' },
      { q: 'Why is the i-Ready diagnostic so hard?', a: 'Because it is adaptive. Questions get harder after correct answers until the test finds the edge of what your child knows, and the publisher calls it intentionally challenging. Meeting difficult questions is expected.' },
      { q: 'What do the i-Ready placement levels mean?', a: 'There are four: Above Grade Level, At Grade Level, Approaching Grade Level and Needs Improvement. They describe the level at which instruction is likely to be most effective, overall and in each domain.' },
      { q: 'Where can I find i-Ready math answers?', a: 'We do not provide them, and using them hurts. My Path lessons adapt to your child\'s responses, so copied answers push them into work they are not ready for. Help them think through a problem instead.' },
      { q: 'How can I help my child improve on i-Ready math?', a: 'Find the weakest domain on the report, practice that math away from the screen, and encourage careful thinking before each answer. Talk to the teacher about which goal, Typical or Stretch Growth, your child is working toward.' },
      { q: 'Is there an i-Ready math practice test?', a: 'The diagnostic is adaptive, so there is no fixed paper to practice. The useful preparation is the math in your child\'s domains, plus reassurance that hard questions are normal. Our own warm-ups are on this page.' },
      { q: 'Does i-Ready use AI?', a: 'Curriculum Associates says its i-Ready Assessment and Personalized Instruction products do not contain generative AI functionality for educators or students.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of i-Ready or Curriculum Associates?', a: 'No. We are an independent online school with no tie to Curriculum Associates. i-Ready is their trademark, and we teach math skills alongside whatever your school uses.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More help for elementary and middle school math at home.',
    items: [
      { href: '/eureka-math-homework-help', label: 'Eureka Math homework help', p: 'Another program schools use.' },
      { href: '/common-core-math-tutor', label: 'Common Core math tutor', p: 'The standards behind the domains.' },
      { href: '/online-math-tutor-2nd-grade', label: 'Second grade math', p: 'Place value and fluency.' },
      { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math', p: 'Multiplication and fractions.' },
      { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math', p: 'Ratio and expressions.' },
      { href: '/iowa-assessments-math-prep', label: 'Iowa Assessments math', p: 'A different kind of school test.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Share your child\'s grade and the domain lines from their latest i-Ready report. In the first class the teacher will work on the weakest domain with drawings and objects, not a screen of questions.',
    readFirst: 'Here is <a class="ag-inline-link" href="/how-we-teach">how our lessons work</a>, and here is <a class="ag-inline-link" href="/courses">our full catalogue</a>.',
    note: 'Teaching happens live from India, at times that fit US after-school hours and weekend mornings. WhatsApp is the simplest way to get in touch.',
    formNote: 'We do not ask for card details for the free first class.'
  },

  footer: {
    cols: [
      { h4: 'Elementary math', links: [
        { href: '/online-math-tutor-1st-grade', label: 'Grade 1 math' },
        { href: '/online-math-tutor-2nd-grade', label: 'Grade 2 math' },
        { href: '/online-math-tutor-4th-grade', label: 'Grade 4 math' },
        { href: '/eureka-math-homework-help', label: 'Eureka Math help' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-math-tutor-7th-grade', label: 'Grade 7 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '4 x 199 = 800 - 4 = 796'
  },

  personalityCss: `
.ag-root.ag-ir .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-ir .ag-capsule { border-left-width: 3px; border-radius: 10px; }
.ag-root.ag-ir .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-ir .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-ir .ag-section-head h2 { max-width: 32ch; }
`,

  dossier: {
    curriculumAuthority: 'Curriculum Associates pages read raw 31 October 2026: i-Ready Inform product page (rename from 2026 to 2027, grades, norms and placements, Typical and Stretch Growth, Standards Mastery), Family Center page (program parts, rotations, home use, adaptivity, ceiling and floor, no generative AI), family results guide PDF (purpose, placement levels, scale scores, norms, domains), i-Ready FAQ.',
    localProject: 'Our worked material: an invented fourth grader\'s domain table across fall and winter; warm-ups for four domains in three grade bands with answers and reasoning; a twelve-item domain check; next steps for each placement level; a six-step home routine. Lesson family: work from the weakest domain, think before clicking.',
    requiredMentions: ['the name of the i-Ready Diagnostic will change to i-Ready Inform for Reading and for Mathematics', 'a family of research-based programs', 'a personalized lesson pathway, called My Path', 'The purpose of i-Ready Inform is not to give your student a grade but instead to determine how best to support their learning', 'Scale scores provide a single, consistent way to measure growth across grade levels and domains', 'three rotating student groups of about 15 minutes each, two to three times per week', 'to think carefully before answering rather than rushing through', 'designed to find the precise edge of what your child knows', 'a good year with Typical Growth, or a great year with Stretch Growth'],
    sources: [
      { claim: 'i-Ready Inform (formerly Diagnostic): rename, grades, reports, growth goals.', url: 'https://www.curriculumassociates.com/programs/i-ready-assessment/diagnostic' },
      { claim: 'i-Ready Family Center: program parts, home use, adaptivity, generative AI statement.', url: 'https://www.curriculumassociates.com/family' },
      { claim: 'Understanding Your Student\'s i-Ready Inform Results: placement levels, scale scores, norms, domains.', url: 'https://cdn.bfldr.com/LS6J0F7/at/q9fwxjmb2ht6h7qtqv78krc7/iready-understanding-student-data-for-families.pdf' },
      { claim: 'i-Ready FAQ: diagnostic intentionally challenging.', url: 'https://www.curriculumassociates.com/support/i-ready-faq' }
    ],
    rejectedClaims: [
      'i-Ready answers, lesson quiz answers or teacher-book answers: refused by design.',
      'Scale score ranges for each grade: the sample report\'s numbers are illustrative for one fictional student, so no ranges are printed.',
      'Diagnostic items or imitation items: not reproduced; warm-ups are ours.',
      'Prices of i-Ready or its workbooks: not printed.',
      'Any affiliation with Curriculum Associates: none.'
    ]
  }
};
