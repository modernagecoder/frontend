'use strict';
// Teaching Textbooks math help (ag- curriculum help door; UK and US exams cluster Phase 1, row US085).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md (writer brief, rule 10). Sources read raw with curl on
// 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/teaching-textbooks-math-help/):
//  - teachingtextbooks.com (home): products Math 3, Math 4, Math 5, Math 6, Math 7, Pre-Algebra, Algebra 1, Geometry,
//    Algebra 2, Pre-Calculus, Printed Textbooks (optional); "grading every one of the thousands of problems in each grade
//    level"; "providing step-by-step audiovisual solutions for every single problem"; "offering a free tutor helpline for any
//    customer that needs extra help"; "just-in-time hints"; "Each problem and hint is read aloud to the student"; "100% of
//    problems have a full, step-by-step solution."; tutor line: customers "call TT to set up an appointment with a math
//    tutor"; printable gradebook; "even be used offline for up to 6 lessons at once"; "scratchpad" area saved for parents;
//    "three months' pause time"; "Parents also receive a daily email showing their students' progress"; Free Trial: "the
//    first 15 lessons of any grade level for free", "no expiration date", no payment information; "The pace of the
//    curriculum is gentle too." (TT's description).
//  - teachingtextbooks.com/algebra1-version4.html: "a complete math curriculum offered as a series of apps (one for each
//    grade level)"; "Each course does all of the teaching, all of the grading, and has step-by-step solutions for every
//    problem."; "Access to each course is for 12 months, plus a 3-month pause feature"; "Every lesson begins with an
//    interactive lecture."; "a full, searchable eBook"; Parent Portal gradebook "indefinitely". Pre-Algebra page identical
//    in structure.
//  - teachingtextbooks.com/placement: placement tests per product; "take out the answer key page" (last printed page);
//    "have them take two tests starting with the higher level"; "if a student is just under the recommended score they're
//    almost assuredly ready for that grade level"; Table of Contents and Index for each course.
// Not used: prices, family discount terms, customer testimonials and their authors.
// Our own material, labelled: the line through (2, 5) and (6, 13) (slope 2, intercept 1, y = 2x + 1) and the Python check,
// x/3 + x/4 = 7 (x = 12), the substitution system (x = 3, y = 7), the "why behind the step" table, the gradebook signals
// and the practice set.
// Lesson family: explaining why each step of a worked solution is allowed (slope and intercept, checked by substitution).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH', blurb: 'Help for students using Teaching Textbooks: how the app teaches and grades, when a child needs a person, and live classes beside it.' },
  slug: 'teaching-textbooks-math-help',
  code: 'tet',
  accent: '#44532B',
  accentRationale: 'Teaching Textbooks math help: a deep olive, #44532B as allocated, earthy and distinct from the plum curriculum pages, with strong contrast on the #FBF8F2 paper',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Teaching Textbooks math help',
  title: 'Teaching Textbooks Math Help: When Your Child Needs a Tutor',
  description: 'Teaching Textbooks math help for homeschool families: how the app teaches and grades, when a student needs a person, and live tutoring from Math 3 to Algebra 2.',
  ogDescription: 'Teaching Textbooks teaches, hints, grades and shows a solution for every problem. Some students still stall, usually at Pre-Algebra or Algebra 1. Why, and how a live teacher fits beside the app.',
  twitterDescription: 'Live math help for students using Teaching Textbooks, from a teacher who explains the why.',
  pageName: 'Teaching Textbooks Math Help',
  webPageDescription: 'A guide for US homeschool families using Teaching Textbooks, built from teachingtextbooks.com checked on 31 October 2026; the algebra examples and gradebook advice are ours and advice on reading the gradebook.',
  courseDescription: 'Live online math lessons for homeschool students who use Teaching Textbooks, from Math 3 to Algebra 2, explaining the reasons behind each step, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Teaching Textbooks help',
  navLinks: [
    { href: '#how-tt-works', label: 'How it works' },
    { href: '#courses-tt', label: 'Courses' },
    { href: '#signals', label: 'Warning signs' },
    { href: '#why', label: 'The why' },
    { href: '#together', label: 'App and teacher' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Teaching Textbooks Math 3 to Pre-Calculus &middot; A person beside the app',
  h1: 'Teaching Textbooks math help, for when the app is not enough',
  lede: 'Teaching Textbooks was built so a homeschool parent does not have to teach math: the app gives the lecture, reads problems aloud, offers hints, grades every answer and plays a worked solution for each one. For many families it does exactly that. The trouble usually starts quietly, around Pre-Algebra or Algebra 1, when a child can follow every solution and still cannot start the next problem. This page explains how the program works, from its own site, and what a live teacher adds that a recorded solution cannot.',
  secondaryCta: { href: '#why', label: 'See the worked examples' },
  wa: 'Hello Modern Age Coders, my child uses Teaching Textbooks and is struggling with algebra. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['Format', 'An app per course, self-paced'],
    ['Courses', 'Math 3 to Pre-Calculus'],
    ['Grading', 'Automatic, every problem'],
    ['Solutions', 'Step-by-step for every problem'],
    ['Our help', 'Live online lessons'],
    ['Formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Teaching Textbooks is a self-paced homeschool math curriculum delivered as one app per course, from Math 3 to Pre-Calculus, that teaches each lesson, grades every problem and gives a step-by-step solution for each. Teaching Textbooks math help from a live tutor suits a student who follows the solutions but cannot yet explain or start problems alone. Modern Age Coders teaches live online, in a batch or 1-on-1, through its Algebra Foundations course; the first class is free.',

  picks: {
    eyebrow: 'Live courses beside the app',
    h2: 'Three live courses for Teaching Textbooks students',
    lede: 'The student keeps working in their Teaching Textbooks course. These classes add a teacher who asks why.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'TET / 01', title: 'Algebra foundations', note: 'Pre-Algebra and Algebra 1, the point where most TT families look for a person.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'TET / 02', title: 'Middle school math', note: 'For Math 6, Math 7 and Pre-Algebra: fractions, ratios, integers.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'TET / 03', title: 'High school math', note: 'Geometry, Algebra 2 and Pre-Calculus with live explanation.' }
    ]
  },

  sections: [
    {
      id: 'how-tt-works', tint: 'tint', eyebrow: 'How it works',
      h2: 'How does Teaching Textbooks work?',
      lede: 'Each Teaching Textbooks course is an app that does the teaching and the grading. Its site lists a set of safety nets meant to keep a child moving without a parent stepping in.',
      body: [
        { kind: 'table', caption: 'How Teaching Textbooks describes its program (teachingtextbooks.com home and Algebra 1 course pages, checked 31 October 2026)', head: ['Feature', 'In Teaching Textbooks&rsquo; words'], rows: [
          ['What it is', '"a complete math curriculum offered as a series of apps (one for each grade level)"'],
          ['Teaching', '"Every lesson begins with an interactive lecture."'],
          ['Hints', '"just-in-time hints" when a student gets stuck'],
          ['Read aloud', '"Each problem and hint is read aloud to the student"'],
          ['Solutions', '"100% of problems have a full, step-by-step solution."'],
          ['Grading', 'Every problem graded as soon as the answer is entered, recorded in a printable gradebook'],
          ['Human help', '"a free tutor helpline for any customer that needs extra help"'],
          ['Parents', '"Parents also receive a daily email showing their students&rsquo; progress."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Practical details',
          left: [
            'Teaching Textbooks says access to each course "is for 12 months, plus a 3-month pause feature" for breaks, and that the apps work on computers, tablets and phones, offline "for up to 6 lessons at once".',
            'Students get a scratchpad area to work out steps on screen, which is saved so a parent can look at it later, and each app includes a full, searchable eBook that a parent can print.'
          ],
          rightH3: 'Use their tutor line first',
          right: [
            'The publisher offers its own free tutor helpline: customers can call to set up an appointment with a math tutor about a problem the solutions did not clear up. If your child is stuck on one problem, that is the natural first step.',
            'This page is for a different situation: a child who needs regular teaching, week after week, because the stuck moments have become the pattern.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.teachingtextbooks.com/" rel="noopener" target="_blank">Teaching Textbooks</a> and its <a class="ag-inline-link" href="https://www.teachingtextbooks.com/algebra1-version4.html/" rel="noopener" target="_blank">Algebra 1 course page</a>, checked 31 October 2026. Teaching Textbooks is a trademark of Teaching Textbooks, LLC. Modern Age Coders is not affiliated with or endorsed by Teaching Textbooks.' }
      ]
    },
    {
      id: 'courses-tt', tint: 'deep', eyebrow: 'Courses',
      h2: 'Which Teaching Textbooks course is my child in, and what comes next?',
      lede: 'The site lists ten courses, from Math 3 to Pre-Calculus. Placement tests decide where a child starts, and Teaching Textbooks gives specific advice on reading them.',
      body: [
        { kind: 'table', caption: 'Teaching Textbooks courses (teachingtextbooks.com product menu, checked 31 October 2026) and where our classes usually join (our note)', head: ['Course', 'Stage', 'Where a live teacher often helps'], rows: [
          ['Math 3 to Math 5', 'Elementary', 'Times tables, long division, first fractions'],
          ['Math 6 and Math 7', 'Middle grades', 'Fraction and decimal operations, percents, ratios'],
          ['Pre-Algebra', 'Bridge to algebra', 'Integers, variables, one-step and two-step equations'],
          ['Algebra 1', 'High school', 'Linear equations, slope, systems, factoring'],
          ['Geometry', 'High school', 'Proof and reasoning about shapes'],
          ['Algebra 2 and Pre-Calculus', 'High school', 'Functions, exponents, logarithms, trigonometry']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Placement, by the publisher',
          left: [
            'Teaching Textbooks publishes a placement test for each course. If you are unsure, it says to "have them take two tests starting with the higher level" and to give the lower test only if very few questions are right on the higher one.',
            'It adds that its pass marks are rough, and that "if a student is just under the recommended score they&rsquo;re almost assuredly ready for that grade level." It also reminds parents to take out the answer key page, which is the last printed page.'
          ],
          rightH3: 'What the trial covers',
          right: [
            'The free trial covers "the first 15 lessons of any grade level", with no expiration date and no payment details, and work done in the trial carries over if you buy the course.',
            'For a child moving into Algebra 1, the first fifteen lessons are a useful test of whether the app alone will be enough. Each course page also links to its table of contents and index.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.teachingtextbooks.com/placement/" rel="noopener" target="_blank">Teaching Textbooks placement tests page</a>, checked 31 October 2026.' }
      ]
    },
    {
      id: 'signals', tint: 'tint', eyebrow: 'Warning signs',
      h2: 'How can I tell my child needs more than the app?',
      lede: 'A high average in the gradebook can hide a child who is leaning on hints and solutions. These are signals our teachers look for; they come from our own lessons and are offered as general guidance, never as figures.',
      body: [
        { kind: 'table', caption: 'Signs a Teaching Textbooks student may need a live teacher (our teaching notes)', head: ['What you notice', 'What it often means', 'What to try'], rows: [
          ['Scores are fine, but lessons take much longer than before', 'Hints are doing the thinking', 'Do three problems a day with hints switched off, if your parent controls allow it'],
          ['Your child watches the solution, then moves on', 'Following is not the same as being able to start', 'After a missed problem, redo it from a blank page'],
          ['The scratchpad is empty for multi-step problems', 'Steps are being done in the head, or guessed', 'Ask for every line written'],
          ['Your child cannot say why a step works', 'The method is memorised, not understood', 'Ask "why are we allowed to do that?" once a lesson'],
          ['Pre-Algebra or Algebra 1 brings tears', 'Fractions and negatives were never quite secure', 'Repair those first, then go forward']
        ] },
        { kind: 'p', mt: true, html: 'None of these are faults in the program. A recorded solution is excellent at showing <i>how</i>. It cannot notice which part of the reasoning your child skipped, or ask a follow-up question. That is the gap a person fills.' }
      ]
    },
    {
      id: 'why', tint: 'deep', eyebrow: 'The why',
      h2: 'What does "explaining the why" look like in an algebra problem?',
      lede: 'Our worked examples at Algebra 1 level, written by us. Each step carries a reason, which is what we ask students to say out loud in class.',
      body: [
        { kind: 'table', caption: 'Finding the line through (2, 5) and (6, 13), with the reason for each step (our example)', head: ['Step', 'Working', 'Why it is allowed'], rows: [
          ['1', 'Slope = (13 - 5) / (6 - 2) = 8 / 4 = 2', 'Slope is change in y over change in x between any two points on a line'],
          ['2', '5 = 2 x 2 + b', 'Any point on the line satisfies y = mx + b'],
          ['3', 'b = 5 - 4 = 1', 'Subtracting 4 from both sides keeps the equation balanced'],
          ['4', 'y = 2x + 1', 'Slope and intercept fix the line'],
          ['5', 'Check (6, 13): 2 x 6 + 1 = 13', 'The second point must also fit, or something went wrong']
        ] },
        { kind: 'code', mt: true, label: 'line_check.py (our example)', lang: 'Python 3', code: 'def line_through(p, q):\n    (x1, y1), (x2, y2) = p, q\n    slope = (y2 - y1) / (x2 - x1)\n    intercept = y1 - slope * x1\n    return slope, intercept\n\nm, b = line_through((2, 5), (6, 13))\nprint(f"slope = {m}, intercept = {b}")\nprint("(10, 21) on the line:", 21 == m * 10 + b)', note: 'Output: slope = 2.0, intercept = 1.0, then (10, 21) on the line: True. Each line of the function is one of the reasons in the table above, written as code. We use small programs like this with older students to make the reasoning visible.' },
        { kind: 'two', mt: true,
          leftH3: 'Clearing fractions',
          left: [
            'Solve x/3 + x/4 = 7. Our worked answer: the denominators 3 and 4 share the multiple 12, so multiply every term by 12. That gives 4x + 3x = 84, so 7x = 84 and x = 12.',
            'The why: multiplying both sides by the same non-zero number keeps the equation true. The usual slip is multiplying only the left side.'
          ],
          rightH3: 'Substitution',
          right: [
            'Solve y = 2x + 1 and x + y = 10 together. Our worked answer: replace y in the second equation with 2x + 1, so x + 2x + 1 = 10, 3x = 9, x = 3 and y = 7.',
            'The why: both equations describe the same point, so y means the same thing in each. Check: 3 + 7 = 10 and 2 x 3 + 1 = 7.'
          ] },
        { kind: 'table', mt: true, caption: 'Practice set with reasons (ours; answers in brackets)', head: ['Problem', 'Say why before you start'], rows: [
          ['Line through (1, 4) and (5, 16)', 'Slope from two points (slope 3, y = 3x + 1)'],
          ['x/2 + x/5 = 14', 'Multiply every term by 10 (x = 20)'],
          ['y = 3x - 2 and x + y = 14', 'Substitute for y (x = 4, y = 10)'],
          ['Is (3, 7) on y = 2x + 1?', 'Substitute and compare (yes)'],
          ['2 to the 3rd times 2 to the 2nd', 'Count the factors of 2 (2 to the 5th, 32)']
        ] }
      ]
    },
    {
      id: 'together', tint: 'tint', eyebrow: 'App and teacher',
      h2: 'How do Teaching Textbooks and a live tutor work together?',
      lede: 'The app keeps the daily lessons and grading. The teacher takes the week&rsquo;s hardest problems and turns them into a conversation.',
      body: [
        { kind: 'ol', items: [
          '<b>Keep the daily lesson in the app.</b> Teaching Textbooks stays the curriculum; we do not replace or reorder it.',
          '<b>Flag problems during the week.</b> Your child notes any problem they got right only after a hint or a solution.',
          '<b>Bring the flagged problems to class.</b> The teacher asks your child to explain the solution in their own words and finds the missing reason.',
          '<b>Practise with new problems.</b> The teacher sets fresh problems of our own on the same idea, so the child shows they can start without help.',
          '<b>Check the gradebook trend monthly.</b> Fewer flagged problems over time is the sign that support can step back.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The app alone may suit', p: 'A student who rarely needs hints, can explain the steps and keeps a steady average. Many children are in this group.' },
          { h3: 'App plus batch may suit', p: 'A student at Pre-Algebra or Algebra 1 who benefits from hearing classmates reason through the same kinds of problems.' },
          { h3: 'App plus 1-on-1 may suit', p: 'A student with specific gaps, such as fractions or negatives, who needs them repaired at their own pace.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'How independence grows with a self-teaching app',
    lede: 'Our description of how students grow from following to reasoning.',
    table: { caption: 'Stages of independence (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Following', 'Gets problems right after hints or watching solutions'],
      ['2. Copying', 'Repeats the method from the lecture on similar problems'],
      ['3. Explaining', 'Can say why each step is allowed'],
      ['4. Starting', 'Begins an unfamiliar problem without a prompt']
    ] },
    left: { h3: 'For parents', ps: [
      'The gradebook cannot tell stage 1 from stage 4. Asking your child to explain one problem a day can.',
      'Stage 3 is where algebra starts to feel easier, not harder.'
    ] },
    right: { h3: 'For students', ps: [
      'After you watch a solution, close it and do the problem again on paper.',
      'If you can explain it to someone else, you know it.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine math courses, Math 3 to Pre-Calculus territory',
    lede: 'Live teaching to sit beside any Teaching Textbooks course.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Math 3 to Math 5', courses: [
        { code: 'TET / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5.' },
        { code: 'TET / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Fast, reasoned facts.' },
        { code: 'TET / E / 03', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'For younger siblings.' }
      ] },
      { num: 'II', h3: 'Middle grades', sub: 'Math 6 to Pre-Algebra', courses: [
        { code: 'TET / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Fractions to equations.' },
        { code: 'TET / M / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Algebra ideas in Python.' },
        { code: 'TET / M / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'Stretch problems.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Algebra 1 to Pre-Calculus', courses: [
        { code: 'TET / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra 1 with reasons.' },
        { code: 'TET / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry to Pre-Calculus.' },
        { code: 'TET / H / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'For college-bound homeschoolers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons that turn solutions into reasons',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'During the homeschool day or after it.' },
      { time: 'Weekends', l: 'A weekly session on flagged problems.' },
      { time: '1-on-1', l: 'Paced to your TT lesson.' }
    ],
    cells: [
      { h3: 'App stays the curriculum', p: 'We teach beside it.' },
      { h3: 'Flagged problems', p: 'The week&rsquo;s hard ones, explained.' },
      { h3: 'Fresh practice', p: 'New problems written by us.' },
      { h3: 'Reasons out loud', p: 'Every step gets a why.' },
      { h3: 'Homeschool hours', p: 'Daytime slots across US zones.' },
      { h3: 'Two class sizes', p: 'A batch of fifteen to twenty, or solo.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Some homeschool students add coding to their week. A few projects are on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews parents left on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Lessons beside Teaching Textbooks are billed each month in US dollars and you can stop at any month end: many families add a teacher for the move into algebra and step back when the app is enough again.',
    free: ['A free first class', 'Bring flagged problems', 'No card required'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Month to month'],
    one: ['A dedicated teacher', 'Paced to the TT lesson', 'Times to suit you']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Teaching Textbooks help: common questions',
    items: [
      { q: 'Is there live math help for kids using Teaching Textbooks?', a: 'Yes. Our teachers work live online with students who keep doing their daily Teaching Textbooks lessons. We explain the reasoning behind the problems your child found hardest, in a batch of 15 to 20 or one to one.' },
      { q: 'How does Teaching Textbooks work?', a: 'Each course is an app that begins every lesson with an interactive lecture, gives hints, grades every problem and offers a step-by-step solution for each one. Problems and hints are read aloud to the student.' },
      { q: 'Does Teaching Textbooks have its own tutor?', a: 'Yes. Its site describes a free tutor helpline: customers can call to set up an appointment with a math tutor. That is a good first step for a single problem; regular live classes suit a child who needs ongoing teaching.' },
      { q: 'Which Teaching Textbooks courses are there?', a: 'The site lists Math 3, Math 4, Math 5, Math 6, Math 7, Pre-Algebra, Algebra 1, Geometry, Algebra 2 and Pre-Calculus, with optional printed textbooks.' },
      { q: 'How do I choose a Teaching Textbooks level?', a: 'Use its placement tests. Teaching Textbooks suggests trying the higher level first and says a student just under the recommended score is almost certainly ready for that level.' },
      { q: 'Why is my child struggling with Teaching Textbooks Algebra 1?', a: 'In our experience it is usually not the new algebra but older gaps in fractions and negative numbers, or a habit of following solutions without being able to start a problem alone. Both can be repaired.' },
      { q: 'Is a high gradebook average enough?', a: 'Not always. A child can score well while relying on hints and solutions. Ask them to explain one problem a day, or redo a missed problem on paper, to see what they can do unaided.' },
      { q: 'Will you replace Teaching Textbooks?', a: 'No. The app stays your curriculum. We add live teaching on the problems your child flags, with fresh practice written by our teachers.' },
      { q: 'When are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Teaching Textbooks?', a: 'No. We are an independent online school. Teaching Textbooks is a trademark of its owner, and we describe its program only from its own published pages.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More math help for homeschool families in the US.',
    items: [
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'Planning math across the homeschool years.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'Live help for Algebra 1 and beyond.' },
      { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring', p: 'After Algebra 1 in Teaching Textbooks.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'For the last course in the TT series.' },
      { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math tutoring', p: 'Fractions, decimals and ratios.' },
      { href: '/homeschool-computer-science-high-school-credit', label: 'Homeschool computer science credit', p: 'Adding a CS course to the transcript.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us which Teaching Textbooks course and lesson your child is on, and bring two or three problems they could only do with the solution. We start with those.',
    readFirst: 'Find out <a class="ag-inline-link" href="/how-we-teach">how we teach live</a>, or see <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'We are an online school with teachers in India, teaching US homeschoolers live during the day as well as in the evening. Send us a WhatsApp message to begin.',
    formNote: 'No payment details for the free first class.'
  },

  footer: {
    cols: [
      { h4: 'Math help', links: [
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' },
        { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/homeschool-computer-science-high-school-credit', label: 'Homeschool CS credit' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'y = 2x + 1, and why'
  },

  personalityCss: `
.ag-root.ag-tet .ag-hero h1 { letter-spacing: -0.01em; max-width: 24ch; }
.ag-root.ag-tet .ag-capsule { border-left-width: 3px; border-radius: 2px; }
.ag-root.ag-tet .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-tet .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-tet .ag-section-head h2 { max-width: 32ch; }
`,

  dossier: {
    curriculumAuthority: 'Teaching Textbooks, LLC, teachingtextbooks.com home, Algebra 1 and Pre-Algebra course pages and placement page, read raw 31 October 2026: ten courses Math 3 to Pre-Calculus with optional printed textbooks; series of apps, one per grade level; interactive lecture; just-in-time hints; read aloud; step-by-step solution for every problem; automatic grading and printable gradebook; free tutor helpline; daily email; 12 months plus 3-month pause; offline for up to 6 lessons; scratchpad; searchable eBook; free trial of first 15 lessons with no expiration; placement tests, higher level first, just-under score advice, answer key last page.',
    localProject: 'Our worked line through (2, 5) and (6, 13), slope 2 and intercept 1, with a reason for every step and a Python check of (10, 21); x/3 + x/4 = 7 giving x = 12; the substitution system giving (3, 7); the gradebook warning-signs table and a reasons-first practice set. Lesson family: explaining why each step of a worked solution is allowed.',
    requiredMentions: [
      'a complete math curriculum offered as a series of apps (one for each grade level)',
      'Every lesson begins with an interactive lecture.',
      'Each problem and hint is read aloud to the student',
      '100% of problems have a full, step-by-step solution.',
      'a free tutor helpline for any customer that needs extra help',
      'is for 12 months, plus a 3-month pause feature',
      'have them take two tests starting with the higher level',
      'the first 15 lessons of any grade level',
      'Slope = (13 - 5) / (6 - 2) = 8 / 4 = 2',
      'slope = 2.0, intercept = 1.0'
    ],
    sources: [
      { claim: 'Teaching Textbooks program description, courses, hints, grading, tutor helpline, free trial.', url: 'https://www.teachingtextbooks.com/' },
      { claim: 'Teaching Textbooks Algebra 1 course page: apps, access period, lecture, eBook.', url: 'https://www.teachingtextbooks.com/algebra1-version4.html/' },
      { claim: 'Teaching Textbooks placement tests and advice.', url: 'https://www.teachingtextbooks.com/placement/' }
    ],
    rejectedClaims: [
      'Teaching Textbooks prices and family discount terms: not used.',
      'Customer testimonials and the names of reviewers on teachingtextbooks.com: not repeated.',
      'Teaching Textbooks\' statement that students do not typically hit a wall: not repeated as fact; the page describes our own experience at Pre-Algebra and Algebra 1 as general guidance.',
      'Specific lesson numbers or topics within each TT course: not printed; the tables of contents were not read.',
      'That live tutoring raises grades or speeds a student through a course: refused.',
      'Any affiliation with Teaching Textbooks, LLC: none, stated on the page.'
    ]
  }
};
