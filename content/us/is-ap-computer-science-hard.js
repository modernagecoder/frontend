'use strict';
// Is AP Computer Science hard? (ag- AP door; US cluster Phase 3, row 51).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md, plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Sources, College Board only, fetched raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/is-ap-computer-science-hard/):
//  - apstudents.collegeboard.org/about-ap-scores/score-distributions (2026 table): AP Computer Science A 25% 26% 15%
//    11% 23%, 3+ 66%; AP Computer Science Principles 10% 23% 30% 21% 16%, 3+ 63%; AP Calculus AB 3+ 65%; AP Calculus
//    BC 3+ 82%; AP Precalculus 3+ 82%; AP Statistics 3+ 62%.
//  - .../score-distributions/ap-computer-science-a: 2025 25.6 / 21.8 / 19.8 / 10.9 / 22.0, 3+ 67.2%, 93,217 test
//    takers, mean 3.18; 2024 3+ 67.2%, 98,136, mean 3.18; 2023 3+ 68.0%, mean 3.21.
//  - .../score-distributions/ap-computer-science-principles: 2025 10.7 / 19.9 / 31.2 / 21.4 / 16.8, 3+ 61.9%, 175,174,
//    mean 2.87; 2024 3+ 64.0%, 175,261, mean 2.90.
//  - apstudents course pages: CSA "A one-semester, introductory college course in computer science"; prerequisites
//    "High school courses in English and algebra, and familiarity with functions and the concepts found in the uses of
//    function notation"; CSP "Successful completion of Algebra I is recommended, but not required."; "A home computer
//    is not needed".
//  - AP CSA CED (2025): no programming prerequisite ("has no programming prerequisite"); Java subset; at least 20
//    hours of lab (PDF text unspaced, paraphrased); 45-minute periods, five days a week, 140 instructional days.
//    Course at a Glance: about 32 to 34, 29 to 31, 20 to 22 and 50 to 52 class periods for Units 1 to 4.
//  - AP CSP CED (2023): no designated programming language; CSP FAQ: taught over an entire school year.
//  - ap25-cr-report-computer-science-a.pdf (old format): "only about a third of them fully and correctly distinguished
//    all three cases".
// Never summed: no "4 or 5" totals are printed; only College Board's own 3+ column.
// Our own material, labelled: the difficulty comparison table, the readiness checks (Java run by us with javac 22:
// "level" prints true, "lever" prints false; Python run by us: prints 95), and the who-finds-it-hard reading.
// Lesson family: reading data honestly (what a pass rate does and does not say).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const JAVA_CHECK = `String word = "level";
boolean same = true;
int n = word.length();
for (int i = 0; i < n / 2; i++) {
  String front = word.substring(i, i + 1);
  String back = word.substring(n - 1 - i, n - i);
  if (!front.equals(back)) {
    same = false;
  }
}
System.out.println(same);`;

const PY_CHECK = `scores = [72, 88, 95, 61]
high = scores[0]
for s in scores:
    if s > high:
        high = s
print(high)`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'IS AP CS HARD', blurb: 'How hard AP Computer Science A and Principles really are, from College Board&rsquo;s score distributions, prerequisites and course design.' },
  slug: 'is-ap-computer-science-hard',
  code: 'iacs',
  accent: '#142385',
  accentRationale: 'Is AP CS hard, US: a deep ink blue #142385 from the US allocation table, the only blue-violet among the six AP doors',
  pageType: 'market',
  market: US,
  routeLabel: 'Is AP Computer Science hard?',
  title: 'Is AP Computer Science Hard? CSA and CSP, by the Numbers',
  description: 'Is AP Computer Science hard? 2026 College Board score distributions for AP CSA and AP CSP, the real prerequisites, who tends to struggle, and two readiness checks.',
  ogDescription: 'In 2026, 66% of AP Computer Science A students scored 3 or higher and 63% in AP CSP. What those numbers mean, what each course demands, and how to tell if your teen is ready.',
  twitterDescription: 'How hard are AP CSA and AP CSP? The 2026 numbers, the prerequisites, two quick checks.',
  pageName: 'Is AP Computer Science Hard?',
  webPageDescription: 'An evidence-based look for US students and parents at the difficulty of AP Computer Science A and AP Computer Science Principles, using College Board score data and course documents.',
  courseDescription: 'Live online AP Computer Science A and AP Computer Science Principles preparation for US high school students, starting from where each student is, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Is AP Computer Science hard?',
  navLinks: [
    { href: '#numbers', label: 'The numbers' },
    { href: '#trend', label: 'Over time' },
    { href: '#demands', label: 'What it asks' },
    { href: '#who', label: 'Who struggles' },
    { href: '#ready', label: 'Ready?' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; AP Computer Science A and Principles',
  h1: 'Is AP Computer Science hard?',
  lede: 'It depends which one you mean, and what you mean by hard. AP Computer Science Principles and AP Computer Science A are two different courses with different exams, and College Board&rsquo;s own score data shows they are hard in different ways. Principles has more students and fewer top scores; A has fewer students, more top scores, and a large group at the bottom. Neither needs any coding before you start, which surprises many families. This page reads the 2026 numbers carefully, sets out what each course actually asks of a student, and ends with two short checks you can do at the kitchen table to see whether your teen is ready.',
  secondaryCta: { href: '#ready', label: 'Try the readiness checks' },
  wa: 'Hello Modern Age Coders, my teen in the US is deciding whether to take AP Computer Science and we would like an honest view of their readiness. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Honest readiness checks',
  spec: [
    ['Courses', 'AP CSA and AP CSP'],
    ['2026: 3 or higher', 'CSA 66%, CSP 63%'],
    ['2026: score of 5', 'CSA 25%, CSP 10%'],
    ['Coding needed first', 'None for either'],
    ['Math needed first', 'Algebra'],
    ['Language', 'CSA Java; CSP your choice'],
    ['Lessons', 'Group or 1-on-1'],
    ['Try', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'AP Computer Science is demanding but not out of reach. In 2026, College Board reports 66% of AP Computer Science A students and 63% of AP Computer Science Principles students scored 3 or higher. CSA is harder to learn because it is all Java programming; CSP is broader, includes a project, and gave far fewer 5s (10% against 25%). Neither course requires prior coding; both recommend algebra.',

  picks: {
    eyebrow: 'Make the hard parts easier',
    h2: 'Three courses that take the edge off AP Computer Science',
    lede: 'Most of what makes AP computer science hard is pace. These courses give a student more time with the ideas, with one regular teacher.',
    items: [
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'IACS / 01', title: 'AP CSA, taught at a steady pace', note: 'Grades 10 to 12. Extra time on loops, lists and arrays.' },
      { course: 'ap-computer-science-principles-exam-prep-course', code: 'IACS / 02', title: 'AP CSP, from zero', note: 'Grades 9 to 12. No coding needed to start.' },
      { course: 'java-programming-masterclass-for-teens', code: 'IACS / 03', title: 'A Java head start', note: 'Ages 13 to 18. A summer of Java before the AP year.' }
    ]
  },

  sections: [
    {
      id: 'numbers', tint: 'tint', eyebrow: 'The 2026 numbers',
      h2: 'What College Board&rsquo;s 2026 score distributions show',
      lede: 'College Board publishes the share of students earning each score. These are its 2026 figures for the two computer science exams, read on 17 October 2026, with the 3 or higher column exactly as it publishes it.',
      body: [
        { kind: 'table', caption: '2026 AP score distributions, computer science (College Board, apstudents.collegeboard.org, read 17 October 2026)', head: ['Exam', '5', '4', '3', '2', '1', '3 or higher'], numCols: [1, 2, 3, 4, 5, 6], rows: [
          ['AP Computer Science A', '25%', '26%', '15%', '11%', '23%', '66%'],
          ['AP Computer Science Principles', '10%', '23%', '30%', '21%', '16%', '63%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two very different shapes',
          left: [
            'The 3 or higher rates are close, 66% and 63%. The shapes are not. AP Computer Science A gave a 5 to 25% of students and a 1 to 23%: a lot of students at both ends.',
            'AP Computer Science Principles is bunched in the middle, with 30% earning a 3 and only 10% earning a 5. On these figures a 5 in CSP is rarer than a 5 in CSA.'
          ],
          rightH3: 'Why a pass rate is not a difficulty score',
          right: [
            'AP scores are set against criteria, not on a curve, so the distribution tells you how the students who took the exam performed, not how hard the content is in some absolute sense.',
            'AP Computer Science A students have usually chosen a full year of Java, and many already code. Principles draws a much wider group, including students who have never programmed. Different groups, different shapes.'
          ] },
        { kind: 'table', mt: true, caption: 'For context: 2026 share scoring 3 or higher on nearby math exams (same College Board table)', head: ['Exam', '3 or higher in 2026'], numCols: [1], rows: [
          ['AP Calculus BC', '82%'],
          ['AP Precalculus', '82%'],
          ['AP Computer Science A', '66%'],
          ['AP Calculus AB', '65%'],
          ['AP Computer Science Principles', '63%'],
          ['AP Statistics', '62%']
        ] },
        { kind: 'source', html: 'Source: College Board, <a class="ag-inline-link" href="https://apstudents.collegeboard.org/about-ap-scores/score-distributions" rel="noopener" target="_blank">2026 AP Score Distributions</a>, read 17 October 2026. College Board updates the page as scores are released. We are not connected with College Board.' }
      ]
    },
    {
      id: 'trend', tint: 'deep', eyebrow: 'Over time',
      h2: 'Is AP Computer Science getting harder?',
      lede: 'College Board&rsquo;s subject pages give each exam&rsquo;s history, with the number of test takers and the mean score. Here are the last three published years in full.',
      body: [
        { kind: 'table', caption: 'AP Computer Science A, recent years (College Board, read 17 October 2026)', head: ['Year', '3 or higher', 'Test takers', 'Mean score'], numCols: [1, 2, 3], rows: [
          ['2025', '67.2%', '93,217', '3.18'],
          ['2024', '67.2%', '98,136', '3.18'],
          ['2023', '68.0%', '94,438', '3.21']
        ] },
        { kind: 'table', mt: true, caption: 'AP Computer Science Principles, recent years (College Board, read 17 October 2026)', head: ['Year', '3 or higher', 'Test takers', 'Mean score'], numCols: [1, 2, 3], rows: [
          ['2025', '61.9%', '175,174', '2.87'],
          ['2024', '64.0%', '175,261', '2.90'],
          ['2023', '63.1%', '164,505', '2.90']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Steady, not sliding',
          left: [
            'Across these years the AP Computer Science A results barely move: a 3 or higher rate between 67% and 68% and a mean near 3.2. The 2026 figure of 66% was the first year of the revised four-unit course.',
            'Principles moves a little more, between about 62% and 64%, with a mean just under 2.9.'
          ],
          rightH3: 'Nearly twice as many in Principles',
          right: [
            'In 2025, 175,174 students sat AP Computer Science Principles against 93,217 for AP Computer Science A, figures College Board publishes alongside the scores.',
            'Size matters for reading difficulty. A course that many students take as their first computing class will always have a broader spread of preparation than one most students choose after they already code.'
          ] },
        { kind: 'source', html: 'Sources: College Board&rsquo;s <a class="ag-inline-link" href="https://apstudents.collegeboard.org/about-ap-scores/score-distributions/ap-computer-science-a" rel="noopener" target="_blank">past AP Computer Science A score distributions</a> and <a class="ag-inline-link" href="https://apstudents.collegeboard.org/about-ap-scores/score-distributions/ap-computer-science-principles" rel="noopener" target="_blank">past AP Computer Science Principles score distributions</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'demands', tint: 'tint', eyebrow: 'What each course asks',
      h2: 'Where the difficulty actually comes from',
      lede: 'Pass rates describe results. The course documents describe the work. This comparison is ours, built from College Board&rsquo;s course pages and Course and Exam Descriptions.',
      body: [
        { kind: 'table', caption: 'AP Computer Science A and Principles compared (our table, from College Board course pages and CEDs, read 17 October 2026)', head: ['Question', 'AP Computer Science A', 'AP Computer Science Principles'], rows: [
          ['College course it matches', '"A one-semester, introductory college course in computer science"', 'A first-semester introductory college course in computing'],
          ['Coding before the course', 'None: the CED says the course has no programming prerequisite', 'None: no prior computer science knowledge or experience needed'],
          ['Math before the course', 'High school English and algebra, and familiarity with function notation', '"Successful completion of Algebra I is recommended, but not required."'],
          ['Language', 'Java only, a subset of it', 'No designated language; teachers choose'],
          ['Hands-on work', 'At least 20 hours of structured lab work', 'The Create performance task, with at least 9 hours in class'],
          ['What the exam rewards', 'Reading and writing exact Java by hand', 'Breadth across five big ideas, and explaining your own program']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why AP CSA feels hard',
          left: [
            'Everything is precise. A missing index, a loop that runs once too often, or integer division where you meant decimals changes the answer, and the multiple choice is built around exactly those slips.',
            'The year is also front-loaded with ideas that only pay off later. The Course at a Glance suggests about 32 to 34 class periods for Unit 1, then about 50 to 52 for Unit 4, Data Collections, which arrives in the spring when time is shortest.'
          ],
          rightH3: 'Why AP CSP feels hard',
          right: [
            'The challenge is range rather than depth: data, the internet, algorithms, impacts of computing and programming, all on one exam, plus a project with strict rules about submission.',
            'Students who code well can still drop points in Principles by writing vague answers about their own program. Explaining code clearly is a separate skill from writing it.'
          ] }
      ]
    },
    {
      id: 'who', tint: 'deep', eyebrow: 'Who finds it hard',
      h2: 'Four kinds of student, and how hard each course is for them',
      lede: 'This is our reading, from teaching both courses. It is not College Board data, and every student is different.',
      body: [
        { kind: 'table', caption: 'How difficult each course tends to feel (ours)', head: ['Student', 'AP CSA', 'AP CSP'], rows: [
          ['Never coded, strong at algebra', 'Hard at first, then steady once loops click', 'Manageable from the start'],
          ['Never coded, finds algebra hard', 'Hard; consider CSP first', 'Manageable with steady practice'],
          ['Some Scratch or Python already', 'Moderate; Java syntax is the new part', 'Comfortable; the project is the main work'],
          ['Codes for fun, careless with detail', 'Harder than expected; precision is everything', 'Easy to underrate the written part']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the free response shows',
          left: [
            'College Board&rsquo;s 2025 Chief Reader report, about the older AP CSA format, describes a string-handling question in which most students got partway but "only about a third of them fully and correctly distinguished all three cases".',
            'That is a fair picture of where AP CSA difficulty lives: not in the idea, which most students understood, but in getting every case exactly right.'
          ],
          rightH3: 'The habit that makes the difference',
          right: [
            'Students who test their own code with awkward inputs, an empty list or a one-letter word, find AP CSA far less hard than students who stop when the first example works.',
            'Our guides on <a class="ag-inline-link" href="/how-to-debug-code">debugging</a> and <a class="ag-inline-link" href="/how-to-think-like-a-programmer">thinking like a programmer</a> teach that habit directly.'
          ] }
      ]
    },
    {
      id: 'ready', tint: 'tint', eyebrow: 'Two readiness checks',
      h2: 'Two short checks before you sign up',
      lede: 'These are ours. They are not tests of talent, and the course is designed to teach this material. They show roughly how much of the first semester will be new.',
      body: [
        { kind: 'code', label: 'Check 1 &middot; for AP CSA: what does this print?', lang: 'java', code: JAVA_CHECK, note: 'Run by us with javac 22: it prints true for "level" and false when the word is changed to "lever".' },
        { kind: 'code', label: 'Check 2 &middot; for AP CSP: what does this print?', lang: 'python', code: PY_CHECK, note: 'Run by us with Python 3.13: it prints 95.' },
        { kind: 'table', mt: true, caption: 'Reading the checks (ours)', head: ['If your teen', 'For AP CSA', 'For AP CSP'], rows: [
          ['Gets it right and can explain why', 'Ready now; the course will feel like building on something', 'Ready; start thinking about project ideas'],
          ['Gets it right by guessing', 'Ready to start, with extra practice tracing loops', 'Ready; the course will fill the gaps'],
          ['Cannot follow it yet', 'Consider a Java or Python course first, or AP CSP', 'Still fine: CSP starts from zero']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What Check 1 is really testing',
          left: [
            'It compares the first letter with the last, the second with the second-to-last, and stops halfway, so "level" stays true. Change one letter and it becomes false.',
            'A student who can explain why the loop stops at n / 2, and why the second substring uses n - 1 - i, already thinks the way the AP CSA multiple choice asks.'
          ],
          rightH3: 'What Check 2 is really testing',
          right: [
            'It keeps the highest value seen so far while walking through a list, one of the most common patterns in any program that handles data.',
            'If that pattern makes sense, the algorithm and data parts of AP CSP will too. If not, it is exactly what the first weeks of the course teach.'
          ] },
        { kind: 'p', mt: true, html: 'If both checks went well and you cannot decide, read <a class="ag-inline-link" href="/blog/ap-csp-vs-ap-csa-which-to-take-first">which AP computer science course to take first</a>. The course pages for <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP CSA</a> and <a class="ag-inline-link" href="/ap-computer-science-principles-online-coaching">AP CSP</a> list every module.' }
      ]
    },
    {
      id: 'make-easier', tint: 'deep', eyebrow: 'Making it easier',
      h2: 'Five things that make AP Computer Science less hard',
      lede: 'None of these need talent. All of them need time, which is why starting early helps more than anything else.',
      body: [
        { kind: 'ol', items: [
          '<b>Start the language early.</b> A summer of Java before AP CSA, or a little Python before AP CSP, turns the first unit from new into review.',
          '<b>Trace before you run.</b> Predict what code prints on paper, then check. The exam does not let you run anything.',
          '<b>Practise the spring units in the fall.</b> Lists and arrays are the heaviest part of AP CSA. A first look in the fall makes the spring calmer.',
          '<b>Explain your code out loud.</b> For AP CSP especially, saying what a procedure does and why is the skill the written responses score.',
          '<b>Use real practice, timed.</b> College Board&rsquo;s AP Classroom and Bluebook test previews show the real format. Time yourself honestly.'
        ] },
        { kind: 'p', mt: true, html: 'For a full revision plan, see our post on <a class="ag-inline-link" href="/blog/how-to-get-a-5-in-ap-computer-science-a">how to get a 5 in AP Computer Science A</a>, and for what changed in the course, <a class="ag-inline-link" href="/blog/ap-computer-science-a-changes-2026">the 2026 AP CSA changes</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A sensible order',
    h2: 'A path through high school computer science',
    lede: 'One order that suits many students. Others go straight to AP CSA and do well.',
    table: { caption: 'A suggested sequence (ours)', head: ['Grade', 'Course'], rows: [
      ['8 or 9', 'Python or Scratch for fun, no pressure'],
      ['9 or 10', 'AP Computer Science Principles'],
      ['10 or 11', 'AP Computer Science A, in Java'],
      ['11 or 12', 'Projects, competitions or data structures']
    ] },
    left: { h3: 'For parents', ps: [
      'Hard is not the same as unsuitable. A course that stretches a student is often the one they remember.',
      'Watch the first six weeks. If loops still feel foreign by then, add support early rather than late.'
    ] },
    right: { h3: 'For students', ps: [
      'Expect the first month of Java to feel slow. It speeds up.',
      'Ask why an answer is right, not just whether it is.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for every stage of high school computer science',
    lede: 'Each one live online with a regular teacher, as a group batch or one to one.',
    bands: [
      { num: 'I', h3: 'Before AP', sub: 'Ages 13 to 16', courses: [
        { code: 'IACS / PRE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A friendly first text language.' },
        { code: 'IACS / PRE / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Head start on AP CSA.' },
        { code: 'IACS / PRE / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Code you can see in a browser.' }
      ] },
      { num: 'II', h3: 'During AP', sub: 'Grades 9 to 12', courses: [
        { code: 'IACS / AP / 01', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CSP prep', blurb: 'Breadth and the project concepts.' },
        { code: 'IACS / AP / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP CSA prep', blurb: 'Paced so Unit 4 does not ambush anyone.' },
        { code: 'IACS / AP / 03', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'The function skills both courses lean on.' }
      ] },
      { num: 'III', h3: 'After AP', sub: 'Ages 15 to 18', courses: [
        { code: 'IACS / NXT / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Data structures in depth.' },
        { code: 'IACS / NXT / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest problems and USACO.' },
        { code: 'IACS / NXT / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real data, real questions.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons that start from where your teen is',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in Eastern to Pacific time.' },
      { time: 'Weekends', l: 'A calmer time for catching up.' },
      { time: '1-on-1', l: 'Arranged around the school week.' }
    ],
    cells: [
      { h3: 'A regular teacher', p: 'Who learns how your teen thinks.' },
      { h3: 'Slow where needed', p: 'More time on the units that bite.' },
      { h3: 'Tracing on paper', p: 'The exam habit, practised weekly.' },
      { h3: 'Plain progress notes', p: 'Where they are, said honestly.' },
      { h3: 'Online, any state', p: 'From home, on video.' },
      { h3: 'Two formats', p: 'Fifteen to twenty together, or one to one.' }
    ]
  },

  projectsH2: 'What our students have made',
  projectsLede: 'Work by teenagers who once found loops confusing too. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents on Google, quoted word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Lessons are billed one month at a time in US dollars. There is no school-year contract, so you can stop after any month.',
    free: ['A free first lesson', 'An honest readiness view', 'No card needed'],
    group: ['Fifteen to twenty per batch', 'One teacher throughout', 'Pick your batch', 'Monthly billing'],
    one: ['Your teen and one teacher', 'At times you pick', 'Paced to their gaps']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'How hard is AP Computer Science: common questions',
    items: [
      { q: 'Is AP Computer Science A hard?', a: 'It is demanding because it is precise Java programming, but it is passable: College Board reports 66% of students scored 3 or higher in 2026, and 25% scored a 5.' },
      { q: 'Is AP Computer Science Principles hard?', a: 'It is broader and gentler to start, but a top score is rarer. In 2026, 63% scored 3 or higher and 10% scored a 5, according to College Board.' },
      { q: 'Which is harder, AP CSA or AP CSP?', a: 'AP CSA is usually harder to learn because it is all Java and every detail counts. AP CSP covers more topics and includes a project. On 2026 results, a 5 was more common in CSA than in CSP.' },
      { q: 'Do I need coding experience for AP Computer Science?', a: 'No. College Board says AP Computer Science A has no programming prerequisite, and AP Computer Science Principles needs no prior computer science knowledge or experience.' },
      { q: 'What math do I need for AP Computer Science?', a: 'College Board recommends high school algebra for both. For AP CSA it also lists English and familiarity with function notation; for AP CSP it says Algebra I is recommended but not required.' },
      { q: 'How many students take AP Computer Science?', a: 'In 2025, College Board reports 93,217 students took AP Computer Science A and 175,174 took AP Computer Science Principles.' },
      { q: 'What is the average AP Computer Science A score?', a: 'College Board reports a mean score of 3.18 for AP Computer Science A in 2025, and 2.87 for AP Computer Science Principles.' },
      { q: 'Can a 9th grader take AP Computer Science?', a: 'AP CSP needs no coding and recommends Algebra I, so it can suit an earlier grade than AP CSA, which goes faster for students who have already programmed. Your school decides which grades may enroll.' },
      { q: 'What times are AP Computer Science lessons for US students?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do AP Computer Science lessons cost?', a: 'There is no charge for the first lesson. Later lessons are billed monthly, and this page lists that monthly figure, in US dollars, under Fees.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US families weighing up AP computer science.',
    items: [
      { href: '/blog/ap-csp-vs-ap-csa-which-to-take-first', label: 'AP CSP or AP CSA first', p: 'Choosing the order.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP CSA classes', p: 'The Java course in full.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching', p: 'The breadth course in full.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'The habit that makes AP easier.' },
      { href: '/coding-for-15-year-olds', label: 'Coding for 15 year olds', p: 'Where many start.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every US page in one place.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us which course your teen is considering and what they have done so far. The first lesson includes a short, friendly check and a straight answer about readiness.',
    readFirst: 'To see a lesson first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>; every syllabus is on the <a class="ag-inline-link" href="/courses">courses</a> page.',
    note: 'Teachers work from India and every lesson is live on video, so a family anywhere in the US can join. WhatsApp is the quickest way to reach us.',
    formNote: 'The first lesson is free; we never ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'AP computer science', links: [
        { href: '/ap-computer-science-a-online-classes', label: 'AP CSA classes' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' },
        { href: '/blog/how-to-get-a-5-in-ap-computer-science-a', label: 'A 5 in AP CSA' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/coding-for-16-year-olds', label: 'Coding for 16 year olds' },
        { href: '/python-for-16-year-olds', label: 'Python for 16 year olds' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' }
      ] }
    ],
    bottomRight: 'A pass rate describes students, not content'
  },

  personalityCss: `
.ag-root.ag-iacs .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-iacs .ag-capsule { border-left-width: 6px; border-radius: 5px; }
.ag-root.ag-iacs .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-iacs .ag-table caption { text-align: left; }
.ag-root.ag-iacs .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'College Board, read raw on 17 October 2026: 2026 AP score distributions (CSA 25, 26, 15, 11, 23, 3+ 66%; CSP 10, 23, 30, 21, 16, 3+ 63%; Calculus AB 65%, BC 82%, Precalculus 82%, Statistics 62%); past distributions for CSA (2025 67.2%, 93,217, 3.18; 2024 67.2%, 98,136, 3.18; 2023 68.0%, 94,438, 3.21) and CSP (2025 61.9%, 175,174, 2.87; 2024 64.0%, 175,261, 2.90; 2023 63.1%, 164,505, 2.90); apstudents course pages (equivalents, prerequisites); CSA CED and Course at a Glance (no programming prerequisite, Java subset, lab hours, class periods); CSP CED and FAQ; 2025 Chief Reader report.',
    localProject: 'Our difficulty comparison table, a four-student reading of who finds each course hard, and two readiness checks we wrote and ran (Java palindrome check: "level" prints true, "lever" prints false; Python running maximum: prints 95). Lesson family: reading data honestly.',
    requiredMentions: ['25%', '93,217', '175,174', '3.18', '2.87', 'A one-semester, introductory college course in computer science', 'Successful completion of Algebra I is recommended, but not required.', 'only about a third of them fully and correctly distinguished all three cases', 'about 50 to 52', 'prints true for "level"'],
    sources: [
      { claim: '2026 score distributions for both exams and nearby math exams.', url: 'https://apstudents.collegeboard.org/about-ap-scores/score-distributions' },
      { claim: 'AP CSA history: 3+, test takers, mean.', url: 'https://apstudents.collegeboard.org/about-ap-scores/score-distributions/ap-computer-science-a' },
      { claim: 'AP CSP history: 3+, test takers, mean.', url: 'https://apstudents.collegeboard.org/about-ap-scores/score-distributions/ap-computer-science-principles' },
      { claim: 'CSA course equivalent and prerequisites.', url: 'https://apstudents.collegeboard.org/courses/ap-computer-science-a' },
      { claim: 'CSP prerequisites; no prior experience needed.', url: 'https://apstudents.collegeboard.org/courses/ap-computer-science-principles' },
      { claim: 'No programming prerequisite; Java subset; lab hours; class periods.', url: 'https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf' },
      { claim: 'About a third distinguished all three cases (2025).', url: 'https://apcentral.collegeboard.org/media/pdf/ap25-cr-report-computer-science-a.pdf' }
    ],
    rejectedClaims: [
      'Totals such as the share scoring 4 or 5: not printed, because published parts are never summed; only College Board&rsquo;s own 3 or higher column is used.',
      'Pass rates by race, gender or school type: not used.',
      'That AP Computer Science is the hardest or easiest AP: no ranking claim is made.',
      'Any promise that a student will pass: none made.',
      'Any affiliation with College Board: none, and the page says so.'
    ]
  }
};
