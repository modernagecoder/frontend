'use strict';
// ALEKS PPL math placement test prep (ag- exam door; UK and US exams cluster, row US010). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from the
// publisher, McGraw Hill (aleks.com/highered/ppl redirects to mheducation.com); copies in
// keyword-research-2026-09/uk-us-gap/src/aleks-math-placement-test-prep/:
//  - mheducation.com/highered/digital-products/aleksppl.html (via aleks.com/highered/ppl): "More than just a placement
//    test"; "With 12 months' access to a personalized learning module and up to five assessment attempts"; "In 25 questions
//    or less, PPL's open-response Placement Assessment determines students' knowledge across 314 topics and places them
//    into courses from Basic Math to Calculus, including corequisites, Statistics, and non-STEM courses."
//  - .../aleksppl/k12.html: "a single personalized, open-response assessment covering 314 topics in 25 questions or less.
//    The entire assessment can be completed in 90 minutes."; places "into courses from Basic Math to Calculus 1"; "Many
//    colleges and universities use ALEKS PPL's Assessment results as their math placement exam."; "an individualized Prep
//    and Learning Module students can work in for up to 12 months"; "ALEKS PPL allows for four additional placement
//    assessments so students can track their progress." (The same page also says "340 topics" once; 314 used, as on the
//    product page.)
//  - .../aleksppl/assessment-integrity.html: ProctorU Platform through Meazure Learning (Review+ and Live+); Respondus
//    LockDown Browser "prevents students from accessing other applications, copying, printing or visiting other websites
//    during an ALEKS PPL Placement Assessment"; Respondus Monitor webcam.
//  - aleks.com/about_aleks: "ALEKS Avoids Multiple Choice"; Knowledge Space Theory; "based on their answers to a small
//    number of questions chosen by ALEKS based on their responses to all previous questions"; "a space of trillions of
//    feasible knowledge states"; ALEKS pie divided into slices.
// Not used: McGraw Hill's marketing statistic about study hours and placement gains (a publisher claim we cannot test and
// that reads like a promise); named colleges in case studies; any score-to-course table (each college sets its own).
// Our own material, labelled: three worked examples with exact answers ((x^2 - 9)/(x^2 + x - 6) = (x - 3)/(x - 2);
// x^2 - 4x - 1 = 0 gives x = 2 plus or minus root 5; a line through (-2, 7) and (4, -2) has slope -3/2), a prerequisite
// chain for our "topics" sketch, a ten-item practice set, and a reassessment plan.
// Lesson family: exact answers in open-response form (simplified rational expressions and radicals).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST PREP', blurb: 'ALEKS PPL math placement explained from McGraw Hill: 25 open-response questions or fewer, 314 topics, five attempts, and how to use the learning module well.' },
  slug: 'aleks-math-placement-test-prep',
  code: 'apt',
  accent: '#6C501F',
  accentRationale: 'ALEKS PPL math placement prep: a walnut brown #6C501F from the US allocation table, 7.06:1 on paper #FBF8F2 and 6.08:1 on the deepest tint, distinct from the green ACCUPLACER and TSIA2 pages',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'ALEKS math placement test prep',
  title: 'ALEKS Math Placement Test Prep: How ALEKS PPL Works',
  description: 'ALEKS math placement test prep: what is on ALEKS PPL, why its 25 or fewer questions are open response, how retakes and the learning module work, with practice.',
  ogDescription: 'ALEKS PPL asks 25 questions or fewer and expects you to type the answer, not pick it. What McGraw Hill says about the assessment, the five attempts and the learning module, and how to prepare honestly.',
  twitterDescription: 'ALEKS PPL math placement, explained from McGraw Hill, with exact-answer practice.',
  pageName: 'ALEKS Math Placement Test Prep',
  webPageDescription: 'A guide for students starting college to the ALEKS Placement, Preparation and Learning (PPL) math assessment, from McGraw Hill\'s own pages, with worked examples in exact form and an original practice set.',
  courseDescription: 'Teacher-led video lessons on the algebra and precalculus behind ALEKS PPL, for graduating seniors and adults going back to college, with groups of 15 to 20 or private tuition.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'ALEKS math placement prep',
  navLinks: [
    { href: '#what', label: 'What PPL is' },
    { href: '#open', label: 'Open response' },
    { href: '#attempts', label: 'Five attempts' },
    { href: '#integrity', label: 'Proctoring' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; College entry &middot; McGraw Hill ALEKS PPL',
  h1: 'ALEKS math placement test prep',
  lede: 'ALEKS PPL is the math placement assessment many colleges ask new students to complete before registration, often from home. It is short, open response and adaptive: about 25 questions decide which first math course you are allowed to take. It also comes with up to four more attempts and a learning module between them, which most students barely use. This page explains, from McGraw Hill\'s own pages, how the assessment works and how to use those extra attempts honestly, then works through the kind of exact-answer algebra the format demands, with problems we wrote.',
  secondaryCta: { href: '#open', label: 'See why the format is different' },
  wa: 'Hello Modern Age Coders, my college has asked me to take the ALEKS PPL math placement assessment. Could I book a free first class?',
  heroNote: 'Live math teaching since 2020 &middot; 10,000+ students &middot; we teach the math, never sit the assessment for you',
  spec: [
    ['Publisher', 'McGraw Hill'],
    ['Questions', '25 or fewer'],
    ['Answer type', 'Open response'],
    ['Topics covered', '314'],
    ['Attempts', 'Up to five'],
    ['Learning module', 'Up to 12 months'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'ALEKS PPL (Placement, Preparation and Learning) is McGraw Hill\'s math placement assessment. In 25 questions or fewer, with typed open-response answers, it measures what you know across 314 topics and places you into a course from Basic Math to Calculus 1; your college sets the scores. At Modern Age Coders, the College Math Placement Test Prep course rebuilds that math in live online lessons, as a group or 1-on-1.',

  picks: {
    eyebrow: 'Before the next attempt',
    h2: 'Three courses for students facing ALEKS PPL',
    lede: 'The placement course is built for the assessment; the other two go deeper when your results show a long gap.',
    items: [
      { course: 'college-math-placement-test-prep-course', code: 'APT / 01', title: 'College math placement test prep', note: 'ALEKS PPL, ACCUPLACER, TSIA2 and CLEP College Algebra.' },
      { course: 'algebra-foundations-masterclass', code: 'APT / 02', title: 'Algebra foundations', note: 'Expressions, equations and lines, typed exactly.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'APT / 03', title: 'High school math', note: 'Functions, logarithms and trigonometry toward calculus.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What ALEKS PPL is',
      h2: 'What is on the ALEKS math placement test?',
      lede: 'Algebra and the math around it, from arithmetic up to the edge of calculus. McGraw Hill describes the assessment in a handful of numbers.',
      body: [
        { kind: 'table', caption: 'ALEKS PPL in McGraw Hill\'s own figures (mheducation.com ALEKS PPL pages, read 31 October 2026)', head: ['Feature', 'What McGraw Hill says'], rows: [
          ['Length', '"25 questions or less"'],
          ['Answer format', 'Open response: you enter the answer rather than choose it'],
          ['Coverage', 'Knowledge "across 314 topics"'],
          ['Time', '"The entire assessment can be completed in 90 minutes"'],
          ['Placement range', 'Courses "from Basic Math to Calculus 1", including corequisites, statistics and non-STEM courses'],
          ['Attempts', '"up to five assessment attempts" (the first plus four more)'],
          ['Learning module', 'A Prep and Learning Module students "can work in for up to 12 months"'],
          ['Who uses it', '"Many colleges and universities use ALEKS PPL\'s Assessment results as their math placement exam"']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.mheducation.com/highered/digital-products/aleksppl.html" rel="noopener" target="_blank">ALEKS PPL, McGraw Hill Higher Ed</a> and <a class="ag-inline-link" href="https://www.mheducation.com/highered/digital-products/aleksppl/k12.html" rel="noopener" target="_blank">ALEKS PPL: A Math Placement Test</a>, read 31 October 2026. ALEKS is a McGraw Hill trademark; we are not connected with McGraw Hill or ALEKS.' },
        { kind: 'two', mt: true,
          leftH3: 'Why so few questions can place you',
          left: [
            'ALEKS is built on Knowledge Space Theory. McGraw Hill\'s About ALEKS page says it identifies what a student has mastered "based on their answers to a small number of questions chosen by ALEKS based on their responses to all previous questions."',
            'Topics depend on one another, so a correct answer on a harder topic is evidence about the easier topics beneath it. That is how 25 questions can stand in for 314 topics.'
          ],
          rightH3: 'What that means when you study',
          right: [
            'A weak foundation shows up everywhere. If fraction arithmetic or exponent rules are shaky, ALEKS will keep probing the topics built on them, and the result drops more than one topic\'s worth.',
            'The reverse is also true: fixing a prerequisite such as factoring can lift several topics at once on the next attempt.'
          ] }
      ]
    },
    {
      id: 'open', tint: 'deep', eyebrow: 'Open response',
      h2: 'Is the ALEKS placement test multiple choice?',
      lede: 'No. That single fact changes how you should prepare. McGraw Hill\'s About ALEKS page puts it bluntly: "ALEKS Avoids Multiple Choice."',
      body: [
        { kind: 'two',
          leftH3: 'No answer choices to test',
          left: [
            'On a multiple-choice placement test you can often plug the options back into an equation and find the right one without solving it. On ALEKS PPL there are no options. You must produce the answer yourself.',
            'McGraw Hill says ALEKS replaces "multiple guess with authentic problems that require the student to understand, learn, and master the topic."'
          ],
          rightH3: 'Exact form matters',
          right: [
            'Open response means the answer must be in a form the system accepts: a reduced fraction, a simplified radical, an expression with factors cancelled, an interval written correctly.',
            'Students who get the math right but leave 6/8 unreduced, or write a decimal where an exact root is asked, lose credit for understanding they actually have. Practising exact form is part of the math, not a trick.'
          ] },
        { kind: 'table', mt: true, caption: 'Exact-form habits for an open-response placement test (ours)', head: ['Situation', 'Write it like this', 'Not like this'], rows: [
          ['A fraction result', '3/4', '6/8 or 0.75 when exact form is asked'],
          ['A square root', '2 root 5 (that is, 2 times the square root of 5)', 'root 20, or 4.47'],
          ['A rational expression', '(x - 3)/(x - 2), common factor cancelled', 'The unsimplified quotient'],
          ['Two solutions', 'Both, for example x = -3 and x = 5', 'Only the positive one'],
          ['An inequality solution', 'x &lt; 4, or the matching interval', 'x = 4'],
          ['A slope', '-3/2', '-1.5 when the item asks for a fraction']
        ] },
        { kind: 'p', mt: true, html: 'Before the real assessment, the student should get comfortable with ALEKS\'s own answer tools. The About ALEKS page describes "ingenious student input tools" for entering math; a few minutes with them in the first attempt, or in the learning module, saves lost marks for typing, not knowledge.' }
      ]
    },
    {
      id: 'attempts', tint: 'tint', eyebrow: 'Five attempts and the module',
      h2: 'Can you retake the ALEKS math placement test?',
      lede: 'McGraw Hill describes up to five assessment attempts in total, with a Prep and Learning Module to work in between them. Your college can set its own rules on top, so ask.',
      body: [
        { kind: 'two',
          leftH3: 'What McGraw Hill describes',
          left: [
            'Its K-12 page says that after the first Placement Assessment students "can compare results with their college goals and take action to prepare for a higher-level course", and that "ALEKS PPL allows for four additional placement assessments so students can track their progress."',
            'The module emphasizes "skills needed for success in college-level math" and is available "for up to 12 months."'
          ],
          rightH3: 'What colleges add',
          right: [
            'Colleges decide which ALEKS score places a student into which course, and a college may layer its own conditions on top, such as a wait between attempts, time in the module before a retake, or a deadline tied to orientation.',
            'Any such rule is the college\'s, not McGraw Hill\'s, so it can differ from one campus to the next. Read your college\'s ALEKS page before your first attempt, not after.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>Take the first attempt honestly, under your college\'s conditions.</b> Its job is to show what you know today, so the learning module can target the right topics.',
          '<b>Compare your result with your program\'s required course.</b> Find the score your college needs for the course your major starts with.',
          '<b>Work in the Prep and Learning Module on the topics it assigns.</b> Short daily sessions beat a single long weekend.',
          '<b>Fix prerequisites first.</b> Fractions, exponent rules and factoring sit under many later topics, so they move the result most.',
          '<b>Reassess only when the module shows real progress.</b> You have a limited number of attempts; spend each one when you are ready.'
        ] }
      ]
    },
    {
      id: 'integrity', tint: 'deep', eyebrow: 'Proctoring and honesty',
      h2: 'Is the ALEKS placement assessment proctored?',
      lede: 'Often, yes. McGraw Hill offers colleges remote proctoring and a lockdown browser, and the college chooses which to use.',
      body: [
        { kind: 'two',
          leftH3: 'The tools McGraw Hill describes',
          left: [
            'Its Assessment Integrity page says McGraw Hill partners with Meazure Learning to offer remote proctoring through the ProctorU Platform, with two service lines, Review+ and Live+.',
            'It also integrates Respondus LockDown Browser, which "prevents students from accessing other applications, copying, printing or visiting other websites during an ALEKS PPL Placement Assessment", and Respondus Monitor, which records the student by webcam.'
          ],
          rightH3: 'Why we would not help anyone get around it',
          right: [
            'A placement score is only useful if it is yours. A student placed above their real level into calculus or college algebra usually struggles in the first weeks, and the course grade lasts much longer than the placement.',
            'So we teach the math before and between attempts. We never sit, join or assist with a placement assessment while it is in progress, and we tell students to follow their college\'s rules exactly.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.mheducation.com/highered/digital-products/aleksppl/assessment-integrity.html" rel="noopener" target="_blank">ALEKS PPL Assessment Integrity, McGraw Hill</a>, read 31 October 2026. ProctorU, Meazure Learning and Respondus are trademarks of their owners.' }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Three placement-level problems with exact answers',
      lede: 'Our own problems at the level ALEKS PPL reaches between algebra and precalculus. None is an ALEKS item.',
      body: [
        { kind: 'table', caption: 'Worked example 1 (ours): simplify (x^2 - 9) / (x^2 + x - 6)', head: ['Step', 'Reasoning'], rows: [
          ['1. Factor the top', 'x^2 - 9 is a difference of squares: (x - 3)(x + 3)'],
          ['2. Factor the bottom', 'x^2 + x - 6: two numbers that multiply to -6 and add to 1 are 3 and -2, so (x + 3)(x - 2)'],
          ['3. Cancel the common factor', '(x - 3)(x + 3) / ((x + 3)(x - 2)) = (x - 3)/(x - 2)'],
          ['4. Note the restriction', 'x cannot be -3 or 2, because the original denominator would be zero'],
          ['5. Check with a number', 'x = 0: original gives -9/-6 = 3/2; simplified gives -3/-2 = 3/2']
        ] },
        { kind: 'table', mt: true, caption: 'Worked example 2 (ours): solve x^2 - 4x - 1 = 0 and give exact answers', head: ['Step', 'Reasoning'], rows: [
          ['1. Try factoring', 'No two integers multiply to -1 and add to -4, so use another method'],
          ['2. Complete the square', 'x^2 - 4x = 1, then x^2 - 4x + 4 = 5, so (x - 2)^2 = 5'],
          ['3. Take both roots', 'x - 2 = root 5 or x - 2 = -root 5'],
          ['4. Exact answers', 'x = 2 + root 5 and x = 2 - root 5'],
          ['5. Check the sum', 'The two roots add to 4, matching -b/a = 4 for this equation']
        ] },
        { kind: 'table', mt: true, caption: 'Worked example 3 (ours): the line through (-2, 7) and (4, -2)', head: ['Step', 'Reasoning'], rows: [
          ['1. Slope', '(-2 - 7) / (4 - (-2)) = -9/6 = -3/2'],
          ['2. Point-slope form', 'y - 7 = -3/2 (x + 2)'],
          ['3. Slope-intercept form', 'y = -3/2 x - 3 + 7, so y = -3/2 x + 4'],
          ['4. Check the second point', 'x = 4: y = -6 + 4 = -2, which matches']
        ] },
        { kind: 'p', mt: true, html: 'Each answer above is exact and fully simplified, which is what an open-response system can recognise. The checks at the end of each table are the habit we drill hardest: with no answer choices on screen, the only way to know an answer is right is to test it yourself.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice',
      h2: 'An original practice set in ALEKS-style open response',
      lede: 'Ten problems we wrote, from arithmetic to logarithms. Write every answer in exact, simplified form before you look.',
      body: [
        { kind: 'table', caption: 'Our open-response set: cover the right-hand column and type each answer exactly', head: ['#', 'Topic', 'Problem', 'Exact answer'], rows: [
          ['1', 'Fractions', '5/6 - 3/4', '1/12'],
          ['2', 'Exponents', 'Simplify (2x^3)^2 / (4x^2)', 'x^4'],
          ['3', 'Linear equations', 'Solve 3(x - 4) = x + 6', 'x = 9'],
          ['4', 'Inequalities', 'Solve -2x + 5 &gt; 11', 'x &lt; -3'],
          ['5', 'Radicals', 'Simplify the square root of 72', '6 root 2'],
          ['6', 'Factoring', 'Factor 2x^2 + 7x + 3', '(2x + 1)(x + 3)'],
          ['7', 'Quadratics', 'Solve x^2 = 6x - 8', 'x = 2 and x = 4'],
          ['8', 'Functions', 'If g(x) = x^2 - 1, find g(a + 1)', 'a^2 + 2a'],
          ['9', 'Exponentials', 'Solve 9^x = 27', 'x = 3/2'],
          ['10', 'Logarithms', 'Evaluate log base 2 of 1/8', '-3']
        ] },
        { kind: 'p', mt: true, html: 'If you missed items 1, 2 or 5, start with arithmetic and exponent rules: they are prerequisites for most of the rest. If you missed 6, 7 or 8, factoring and function notation are the next layer. Items 9 and 10 are the bridge to precalculus, and they matter most for students whose program begins with calculus.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Reading your first result',
    h2: 'Four places a first ALEKS PPL attempt often lands',
    lede: 'Our description of common starting points, and the work each one usually needs before a reassessment.',
    table: { caption: 'After the first ALEKS PPL attempt (ours; your college\'s course table decides the actual placement)', head: ['Where it lands', 'What we usually work on'], rows: [
      ['1. Below the course your major needs', 'Arithmetic, exponent rules and linear equations'],
      ['2. College algebra level', 'Factoring, rational expressions and functions'],
      ['3. Precalculus level', 'Exponentials, logarithms and trigonometry'],
      ['4. Calculus-ready', 'Keeping skills warm through the gap before term']
    ] },
    left: { h3: 'For students', ps: [
      'Treat the first attempt as a diagnosis, then use the module. A reassessment straight away rarely changes much.',
      'Type answers in exact, simplified form every time you practise.'
    ] },
    right: { h3: 'For parents', ps: [
      'The assessment is usually done at home before orientation. Help with the quiet room and the schedule, never with the questions.',
      'Ask the college how many attempts it allows and by when.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for the step from high school to college',
    lede: 'From rebuilding arithmetic to first-year calculus, taught live.',
    bands: [
      { num: 'I', h3: 'Rebuild', sub: 'Arithmetic to Algebra 1', courses: [
        { code: 'APT / R / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Fractions and pre-algebra.' },
        { code: 'APT / R / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra 1 in depth.' },
        { code: 'APT / R / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Algebra checked in Python.' }
      ] },
      { num: 'II', h3: 'Place', sub: 'Algebra 2 to precalculus', courses: [
        { code: 'APT / P / 01', slug: 'college-math-placement-test-prep-course', title: 'Placement test prep', blurb: 'ALEKS PPL and more.' },
        { code: 'APT / P / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Through precalculus.' },
        { code: 'APT / P / 03', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Functions and trig.' }
      ] },
      { num: 'III', h3: 'Begin college math', sub: 'After placement', courses: [
        { code: 'APT / C / 01', slug: 'college-mathematics-complete-masterclass', title: 'College math', blurb: 'Calculus onward.' },
        { code: 'APT / C / 02', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'For statistics-first majors.' },
        { code: 'APT / C / 03', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'AB and BC.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons between attempts, at hours that suit you',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening lessons alongside the module.' },
      { time: 'Weekends', l: 'Longer review before a reassessment.' },
      { time: '1-on-1', l: 'Planned around your college\'s deadline.' }
    ],
    cells: [
      { h3: 'Prerequisites first', p: 'The topics that lift the most.' },
      { h3: 'Exact answers', p: 'Simplified, typed, checked.' },
      { h3: 'Module-aware', p: 'We work with what ALEKS assigns.' },
      { h3: 'Never during an attempt', p: 'The assessment stays yours.' },
      { h3: 'Ages 15 and up', p: 'Seniors and returning adults.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Some students go on to build math in code once they reach college level. See <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents and students, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'You pay month by month, in US dollars, and can stop whenever your next ALEKS attempt is behind you; nothing locks you in.',
    free: ['A free first class', 'Bring your first ALEKS result', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Paced to your college deadline', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions students ask',
    h2: 'ALEKS math placement: common questions',
    items: [
      { q: 'How many questions are on the ALEKS math placement test?', a: 'McGraw Hill says the Placement Assessment uses 25 questions or less. Because it is adaptive, the questions you see depend on your earlier answers.' },
      { q: 'What topics are on the ALEKS math placement test?', a: 'McGraw Hill says it measures knowledge across 314 topics, placing students into courses from Basic Math to Calculus 1. In practice that runs from arithmetic and algebra through functions, exponentials, logarithms and trigonometry.' },
      { q: 'Is the ALEKS placement test multiple choice?', a: 'No. ALEKS PPL is open response, so you type the answer yourself. McGraw Hill\'s About ALEKS page says ALEKS avoids multiple choice.' },
      { q: 'How long does the ALEKS placement test take?', a: 'McGraw Hill says the entire assessment can be completed in 90 minutes. Give yourself a quiet, uninterrupted block in case you need longer.' },
      { q: 'How many times can you take the ALEKS placement test?', a: 'McGraw Hill describes up to five assessment attempts, the first plus four more. Your college may set its own limits, waiting periods or deadlines, so check its rules.' },
      { q: 'What is a good ALEKS math placement score?', a: 'It depends on your college and your major. Each college decides which score places a student into which course, so find the score needed for the first course your program requires.' },
      { q: 'Is the ALEKS placement test hard?', a: 'It covers a wide range quickly, and the open-response format leaves no answer choices to fall back on. Students who practise exact, simplified answers and fix prerequisites such as factoring usually find it fair.' },
      { q: 'Is the ALEKS placement test proctored?', a: 'Often. McGraw Hill offers colleges remote proctoring through the ProctorU Platform and the Respondus LockDown Browser and Monitor. Your college decides which it uses.' },
      { q: 'When are your ALEKS prep classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with ALEKS or McGraw Hill?', a: 'No. We are an independent online school. We teach the math the assessment covers and never take part in an attempt.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More math help for the year before college.',
    items: [
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'The core of most ALEKS topics.' },
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'Rational expressions and logarithms.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'For calculus-first majors.' },
      { href: '/calculus-tutoring-online', label: 'Calculus tutoring', p: 'After a strong placement.' },
      { href: '/online-math-tutor-12th-grade', label: 'Twelfth grade math', p: 'Senior year, before placement.' },
      { href: '/online-math-tutor-cost', label: 'Math tutor cost', p: 'How online tutoring is usually priced.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send us the course your major starts with and, if you have one, your first ALEKS result. The teacher will map the topics between the two.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse every <a class="ag-inline-link" href="/courses">course</a>.',
    note: 'Classes are taught live from India, with evening and weekend times set aside for students in US time zones. WhatsApp is the quickest way to ask.',
    formNote: 'The first class costs nothing and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Before college math', links: [
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' },
        { href: '/algebra-2-tutoring-online', label: 'Algebra 2' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus' },
        { href: '/calculus-tutoring-online', label: 'Calculus' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-math-tutor-12th-grade', label: 'Grade 12 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'x = 2 plus or minus root 5'
  },

  personalityCss: `
.ag-root.ag-apt .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-apt .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-apt .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-apt .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-apt .ag-section-head h2 { max-width: 28ch; }
`,

  dossier: {
    curriculumAuthority: 'McGraw Hill ALEKS PPL pages, read raw 31 October 2026: aleksppl.html (12 months access, up to five attempts; 25 questions or less; open response; 314 topics; Basic Math to Calculus); aleksppl/k12.html (90 minutes; Basic Math to Calculus 1; many colleges use PPL results as their placement exam; Prep and Learning Module up to 12 months; four additional placement assessments); aleksppl/assessment-integrity.html (ProctorU Platform via Meazure Learning, Review+ and Live+; Respondus LockDown Browser and Monitor); aleks.com/about_aleks (avoids multiple choice; Knowledge Space Theory; small number of questions chosen from previous responses).',
    localProject: 'Our worked examples: (x^2 - 9)/(x^2 + x - 6) = (x - 3)/(x - 2) with x not -3 or 2; x^2 - 4x - 1 = 0 gives 2 plus or minus root 5; the line through (-2, 7) and (4, -2) is y = -3/2 x + 4. Our exact-form habits table, ten-item practice set (1/12, x^4, x = 9, x < -3, 6 root 2, (2x + 1)(x + 3), 2 and 4, a^2 + 2a, 3/2, -3) and reassessment steps. Lesson family: exact answers in open-response form.',
    requiredMentions: ['ALEKS Avoids Multiple Choice', 'The entire assessment can be completed in 90 minutes', 'ALEKS PPL allows for four additional placement assessments so students can track their progress.', 'Many colleges and universities use ALEKS PPL\'s Assessment results as their math placement exam', 'from Basic Math to Calculus 1', 'up to five assessment attempts', 'Respondus LockDown Browser', 'based on their answers to a small number of questions chosen by ALEKS', '(x - 3)(x + 3) / ((x + 3)(x - 2)) = (x - 3)/(x - 2)', 'y = -3/2 x - 3 + 7, so y = -3/2 x + 4'],
    sources: [
      { claim: 'ALEKS PPL product page: 25 questions or less, open response, 314 topics, five attempts, 12 months.', url: 'https://www.mheducation.com/highered/digital-products/aleksppl.html' },
      { claim: 'ALEKS PPL as a math placement test: 90 minutes, Basic Math to Calculus 1, four additional assessments.', url: 'https://www.mheducation.com/highered/digital-products/aleksppl/k12.html' },
      { claim: 'ALEKS PPL assessment integrity: ProctorU and Respondus.', url: 'https://www.mheducation.com/highered/digital-products/aleksppl/assessment-integrity.html' },
      { claim: 'About ALEKS: Knowledge Space Theory, avoids multiple choice.', url: 'https://www.aleks.com/about_aleks' }
    ],
    rejectedClaims: [
      'McGraw Hill\'s figure on study hours and placement gains: not printed; a publisher statistic that would read as a promise.',
      'The "340 topics" figure on one McGraw Hill page: not used; the product page and the same page elsewhere say 314.',
      'Any score-to-course placement table or "good score" number: not printed; each college sets its own.',
      'Named colleges from McGraw Hill case studies: not named.',
      'Help during a proctored attempt: refused; we teach before and between attempts only.',
      'Any affiliation with McGraw Hill or ALEKS: none.'
    ]
  }
};
