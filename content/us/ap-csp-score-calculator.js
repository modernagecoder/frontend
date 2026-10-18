'use strict';
// AP CSP score calculator (ag- AP door; US cluster Phase 3, row 47).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md, plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Sources, College Board only, fetched raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/ap-csp-score-calculator/):
//  - apcentral.collegeboard.org/courses/ap-computer-science-principles/exam: Section I "70 multiple-choice questions |
//    120 minutes | 70% of score | 4 answer options"; "57 single-select multiple-choice", "5 single-select with reading
//    passage about a computing innovation", "8 multiple-select multiple-choice: select 2 answers"; Section II "30% of
//    score"; Create task "9 hours in-class"; "2 written response questions | 60-minute end-of-course exam"; prompts
//    WR1, WR2(a), WR2(b), WR2(c); deadline Fri, Apr 30, 2027 11:59 PM ET; exam Fri, May 14, 2027, Session 1.
//  - ap26-sg-computer-science-principles.pdf: six reporting categories, each "(0–1 points)" (written here as 0 to 1):
//    Video, Program Requirements, WR1, WR2(a), WR2(b), WR2(c); "Video, Program Requirements, and Written Response 1"
//    3 points, "Written Response 2" 3 points; Program Requirements list; "The list is a one-element list."; "Written
//    responses should be evaluated solely on the rationale provided."; 2026 prompt topics (documentation, what stops
//    the iteration, a call that behaves incorrectly, the list and abstraction).
//  - ap25-computer-science-principles-scoring-statistics-set-1.pdf: means of 1 possible point: Video 0.94, Program
//    Requirements 0.78, WR1 0.84, WR2(a) 0.43, WR2(b) 0.57, WR2(c) 0.57.
//  - course/faq/about-ap-csp-exam: "Students who take the end-of-course exam will receive a score even if they do not
//    submit the Create performance task."; submit the task but skip the exam, the score is cancelled; "The written
//    response prompts on exam day will be different each year."
// Our own material, labelled on the page: composite = MC right + 5 x rubric points (from 70 / 70 and 30 / 6), the
// 10 composite points settled before exam day (2 x 5), per-minute values (70 / 120 = 0.58), three invented worked
// students, our handling of multiple-select items, planning targets, and the Python program (run by us with
// Python 3.13: prints "Composite: 68.0 of 100").
// Lesson family: weighted averages and the cost of a zero.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PY = `# Our estimate, not a College Board conversion
def composite(mc_right, task_points):
    # Section I: 70 questions, 70% of the score
    part_one = mc_right / 70 * 70
    # Section II: 6 rubric points, 30% of the score
    part_two = sum(task_points) / 6 * 30
    return part_one + part_two

# video, program requirements, WR1, WR2(a), WR2(b), WR2(c)
points = [1, 1, 1, 0, 1, 0]
print("Composite:", round(composite(48, points), 1), "of 100")`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'AP CSP SCORE', blurb: 'The AP Computer Science Principles weighting in plain numbers, the six rubric points, and a labelled way to estimate a composite.' },
  slug: 'ap-csp-score-calculator',
  code: 'acsc',
  accent: '#214C1E',
  accentRationale: 'AP CSP score calculator, US: a dark fir green #214C1E from the US allocation table, distinct in lightness from the AP CSA calculator moss',
  pageType: 'market',
  market: US,
  routeLabel: 'AP CSP score calculator',
  title: 'AP CSP Score Calculator: Weights, Rubric Points, an Estimate',
  description: 'AP CSP score calculator: 70 multiple-choice questions for 70%, six Create and written-response points for 30%, a worked composite and what it cannot predict.',
  ogDescription: 'In AP Computer Science Principles one rubric point weighs the same as five multiple-choice questions. A labelled estimate method, a worked example and a short Python program.',
  twitterDescription: 'Estimate an AP CSP composite from published weights: 70 questions, six rubric points.',
  pageName: 'AP CSP Score Calculator',
  webPageDescription: 'A method for US students to estimate an AP Computer Science Principles result from a practice exam and a marked Create task, using only the weights College Board publishes.',
  courseDescription: 'Live online AP Computer Science Principles preparation for US high school students, covering the multiple choice, the Create performance task and the written responses, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'AP CSP score calculator',
  navLinks: [
    { href: '#weights', label: 'Weights' },
    { href: '#rubric', label: 'Six points' },
    { href: '#estimate', label: 'Estimate' },
    { href: '#python', label: 'In Python' },
    { href: '#zero', label: 'A zero' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; AP Computer Science Principles',
  h1: 'AP CSP score calculator',
  lede: 'AP Computer Science Principles is scored in a way that surprises a lot of students. Seventy multiple-choice questions decide 70% of the result, and just six rubric points, earned through a project and a short written section, decide the other 30%. That makes each of those six points very heavy, and it makes a careful estimate worth doing. This page lays out what College Board publishes about the weighting, works through an estimate method that is clearly ours, and is plain about the part nobody outside College Board can calculate: where the lines between a 3, a 4 and a 5 actually sit.',
  secondaryCta: { href: '#estimate', label: 'Go to the estimate' },
  wa: 'Hello Modern Age Coders, my teen in the US is taking AP Computer Science Principles and wants help with the Create task and the exam. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Create task and exam, taught together',
  spec: [
    ['Exam', 'AP Computer Science Principles'],
    ['Task deadline', 'April 30, 2027, 11:59 PM ET'],
    ['Exam day', 'Friday, May 14, 2027'],
    ['Multiple choice', '70 questions, 70%'],
    ['Create and writing', '6 points, 30%'],
    ['Our estimate', 'MC right + 5 per point'],
    ['Classes', 'A batch, or 1-on-1'],
    ['Begin with', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'AP CSP has 70 multiple-choice questions worth 70% and a Create performance task with written responses worth 30%, scored as six points of 0 to 1 each. So in our estimate a composite out of 100 is simply multiple-choice questions right plus 5 for every rubric point. College Board does not publish the raw cutoffs for each AP score, so treat any result as an estimate.',

  picks: {
    eyebrow: 'Points that are earned early',
    h2: 'Three courses for a CSP student chasing those six points',
    lede: 'The Create task is built over weeks. These courses put a teacher next to the student while it is built, inside College Board&rsquo;s rules on help and collaboration.',
    items: [
      { course: 'ap-computer-science-principles-exam-prep-course', code: 'ACSC / 01', title: 'AP Computer Science Principles prep', note: 'Grades 9 to 12. Big ideas, the Create task, timed practice.' },
      { course: 'python-complete-masterclass-teens', code: 'ACSC / 02', title: 'Python for teens', note: 'Ages 13 to 18. A text language that suits the Create task.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'ACSC / 03', title: 'JavaScript for teens', note: 'Ages 13 to 18. Interactive programs for the browser.' }
    ]
  },

  sections: [
    {
      id: 'weights', tint: 'tint', eyebrow: 'The published weighting',
      h2: 'How the AP CSP exam splits 100 percent',
      lede: 'College Board says the end-of-course exam "has consistent question types and weighting every year". That consistency is what makes an estimate possible at all. Everything in this table comes from the AP CSP exam page on AP Central, read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'AP Computer Science Principles exam components, from AP Central (read 17 October 2026)', head: ['Component', 'What it is', 'Time', 'Share'], rows: [
          ['Section I: multiple choice', '70 questions with 4 answer options: 57 single-select, 5 single-select with a reading passage about a computing innovation, 8 multiple-select where you choose 2 answers', '120 minutes', '70%'],
          ['Section II: Create performance task', 'Program code, a video of the program running, and a Personalized Project Reference', '9 hours in class', 'Part of 30%'],
          ['Section II: written response', '2 questions with four prompts, WR1, WR2(a), WR2(b) and WR2(c), about your own program', '60 minutes on exam day', 'Part of 30%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two dates, not one',
          left: [
            'AP Central lists the deadline for submitting the Create performance task as final in the AP Digital Portfolio as Friday, April 30, 2027, at 11:59 PM ET, and the end-of-course exam as Friday, May 14, 2027, Session 1.',
            'For an estimate, that means part of Section II is already decided two weeks before exam day. What a student submits in April is what gets scored.'
          ],
          rightH3: 'Why the multiple-select items matter',
          right: [
            'Eight of the seventy questions ask for two answers. The pages we read do not say how partial answers are treated, so in our method we count a multiple-select question as right only when both choices are right.',
            'That is the cautious assumption. If a student&rsquo;s practice score depends heavily on half-right multiple-select answers, the estimate should be read as a little optimistic.'
          ] },
        { kind: 'source', html: 'Source: the <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-principles/exam" rel="noopener" target="_blank">AP Computer Science Principles exam page</a> on AP Central, read 17 October 2026. We are not connected with College Board.' }
      ]
    },
    {
      id: 'rubric', tint: 'deep', eyebrow: 'Section II in detail',
      h2: 'The six rubric points behind 30 percent of the score',
      lede: 'The 2026 Scoring Guidelines split Section II into six reporting categories, each scored 0 to 1. Three are grouped as one block and three as another.',
      body: [
        { kind: 'table', caption: 'AP CSP reporting categories, from the 2026 Scoring Guidelines (read 17 October 2026)', head: ['Category', 'Scored from', 'What earns it, in short', '2025 mean (Set 1)'], numCols: [3], rows: [
          ['Video', 'The video, or the code if needed', 'The program running, showing input, functionality and output', '0.94'],
          ['Program Requirements', 'The Personalized Project Reference, or the code', 'A student-developed procedure and a call to it, a list and a use of it, selection and iteration', '0.78'],
          ['Written Response 1', 'Your answer, with the video or code', 'In 2026: a piece of documentation and how another programmer would use it', '0.84'],
          ['Written Response 2(a)', 'Your answer and the PPR', 'In 2026: what makes an iteration statement stop, and why', '0.43'],
          ['Written Response 2(b)', 'Your answer and the PPR', 'In 2026: a call with specific arguments that makes the procedure behave incorrectly', '0.57'],
          ['Written Response 2(c)', 'Your answer and the PPR', 'In 2026: how the list manages complexity, and the code needed without it', '0.57']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the means',
          left: [
            'College Board&rsquo;s 2025 scoring statistics, Set 1, give the mean for each category out of 1 possible point. The video point is close to universal at 0.94; Written Response 2(a) is the hardest at 0.43, which means fewer than half of responses earned it.',
            'Those are the published means for Set 1 of the 2025 prompts. Prompts change every year, and College Board says so directly: "The written response prompts on exam day will be different each year."'
          ],
          rightH3: 'Small rules that cost whole points',
          right: [
            'Under the Program Requirements category the guidelines refuse the point when "The list is a one-element list." or when the use of the list is not connected to the program&rsquo;s functionality, or when selection or iteration is trivial.',
            'The general notes also say written responses "should be evaluated solely on the rationale provided", and that every criterion in a category must be shown to earn that category&rsquo;s point. There are no half points: a response either meets all of it or scores 0 for that row.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://apcentral.collegeboard.org/media/pdf/ap26-sg-computer-science-principles.pdf" rel="noopener" target="_blank">2026 AP CSP Scoring Guidelines</a> and <a class="ag-inline-link" href="https://apcentral.collegeboard.org/media/pdf/ap25-computer-science-principles-scoring-statistics-set-1.pdf" rel="noopener" target="_blank">2025 scoring statistics, Set 1</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'estimate', tint: 'tint', eyebrow: 'Our estimate method',
      h2: 'A composite you can work out on a napkin',
      lede: 'This method is ours. It uses only the published weights, and because of the way those weights fall, the arithmetic is unusually simple.',
      body: [
        { kind: 'ol', items: [
          '<b>Sit a full practice Section I.</b> Seventy questions in 120 minutes. Count the questions you got right, counting a two-answer question only when both answers are correct.',
          '<b>Score your own project against the six categories.</b> Give the video and program requirements 1 or 0 from the rubric. Then answer four practice written-response prompts about your own code under a timer and score each 1 or 0.',
          '<b>Convert Section I.</b> Seventy questions carry 70% of the score, so each question is worth exactly 1 composite point: 70 / 70 = 1.',
          '<b>Convert Section II.</b> Six points carry 30%, so each point is worth 5 composite points: 30 / 6 = 5.',
          '<b>Add them.</b> Your composite is the number right plus 5 times the rubric points. A perfect paper is 70 + 30 = 100.'
        ] },
        { kind: 'table', mt: true, caption: 'Three worked estimates (ours; invented results, not real students)', head: ['Student', 'Section I right of 70', 'Rubric points of 6', 'Composite'], numCols: [3], rows: [
          ['D: quick on the multiple choice', '58', '2 (video and program requirements only)', '58 + 10 = 68'],
          ['E: balanced', '48', '4', '48 + 20 = 68'],
          ['F: strong project, weak writing', '44', '3', '44 + 15 = 59']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'One point, five questions',
          left: [
            'The striking result: a single rubric point weighs the same as five multiple-choice questions. Student D answers ten more questions right than Student E, and E draws level by earning two more rubric points.',
            'So the written response deserves far more practice time than its 60 minutes suggest. Four written-response points are worth 20 composite points, the same as twenty correct multiple-choice answers.'
          ],
          rightH3: 'Ten points decided in class',
          right: [
            'The video and program requirements points are fixed by what you submit in April. Together they are worth 2 &times; 5 = 10 composite points before exam day begins, by our arithmetic.',
            'Most students earn them, judging by the 2025 means of 0.94 and 0.78. The students who lose them usually lose them for a reason that could have been fixed in an afternoon: a one-element list, or a video that does not show input.'
          ] }
      ]
    },
    {
      id: 'python', tint: 'deep', eyebrow: 'Run it yourself',
      h2: 'The estimate as six lines of Python',
      lede: 'AP CSP does not set one programming language, and many classes use Python. This short program does the same sum as the table above. We ran it before publishing.',
      body: [
        { kind: 'code', label: 'csp_estimate.py &middot; our estimate method', lang: 'python', code: PY, note: 'Run by us on 17 October 2026 with Python 3.13. Output: Composite: 68.0 of 100.' },
        { kind: 'two', mt: true,
          leftH3: 'It is a Create task in miniature',
          left: [
            'Look at what the program contains: a student-developed procedure named composite with two parameters, a list of rubric points, and a call to the procedure. Those are three of the program requirements the guidelines check.',
            'What it lacks is selection and iteration. Adding a loop that prints the composite for several practice results, and an if statement that flags a result under your target, would cover those too.'
          ],
          rightH3: 'A practice written response',
          right: [
            'Try answering a prompt about it in the 2026 style: name a call with specific arguments that would make composite behave incorrectly. One answer: composite(48, [1, 1, 1]) runs without complaint but silently treats the three missing categories as zeros, so the estimate comes out too low.',
            'Explaining why that happens, in two or three sentences, is exactly the skill Written Response 2(b) asked for in 2026.'
          ] }
      ]
    },
    {
      id: 'zero', tint: 'tint', eyebrow: 'The cost of a zero',
      h2: 'What happens to the estimate when part of Section II is missing',
      lede: 'Two situations come up every year, and College Board&rsquo;s exam FAQ answers both.',
      body: [
        { kind: 'table', caption: 'Missing pieces, from the AP CSP exam FAQ and Student Handouts on AP Central (read 17 October 2026), with our composite arithmetic', head: ['Situation', 'What College Board says', 'Highest composite possible (ours)'], numCols: [2], rows: [
          ['Took the exam, never submitted the Create task', '"Students who take the end-of-course exam will receive a score even if they do not submit the Create performance task."', '70 in practice: the written responses rely on a reference the student will not have'],
          ['Submitted the task, skipped the exam', 'The exam score is cancelled, with no refund', 'No score'],
          ['Task scored 0 for plagiarism', 'A 0 on the task, including the written responses', '70']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the first row is risky',
          left: [
            'The written responses are answered with the Personalized Project Reference open. The Student Handouts warn that a student who does not submit it by the deadline will not have it on exam day, so there is no code to point to and the four written points become very hard to earn.',
            'The safer reading for an estimate: a missing Create submission leaves a student with Section I only, and 70 as the realistic maximum.'
          ],
          rightH3: 'Protecting the 30 percent',
          right: [
            'Submit early, check that the Personalized Project Reference has no comments in it, and keep a record of any code you did not write and where it came from.',
            'Our post comparing <a class="ag-inline-link" href="/blog/ap-csp-vs-ap-csa-which-to-take-first">AP CSP and AP CSA</a> explains how the project changes the year compared with the Java exam.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-principles/course/faq/about-ap-csp-exam" rel="noopener" target="_blank">AP CSP: Questions About the Exam</a> and the <a class="ag-inline-link" href="https://apcentral.collegeboard.org/media/pdf/ap-csp-student-task-directions.pdf" rel="noopener" target="_blank">AP CSP Student Handouts</a>, AP Central, read 17 October 2026.' }
      ]
    },
    {
      id: 'limits', tint: 'deep', eyebrow: 'Honest limits',
      h2: 'What this estimate can tell you, and what it cannot',
      lede: 'The composite is exact arithmetic on published weights. The step from composite to a 1 to 5 score is not public, so the table below is our own reading, set for our students.',
      body: [
        { kind: 'table', caption: 'How we read a practice composite in class (ours; College Board does not publish cut scores)', head: ['Practice composite', 'Our reading', 'Next focus'], rows: [
          ['75 and up, on two separate practices', 'A strong position with some margin', 'Keep the written responses sharp; prompts change'],
          ['60 to 74', 'Within reach of a good score, not yet safe', 'The written-response categories under 1'],
          ['45 to 59', 'Building', 'Big Idea 3, Algorithms and Programming, in Section I'],
          ['Below 45', 'Early days', 'Reading code and tracing lists before timed practice']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why we cannot be precise',
          left: [
            'College Board sets the conversion from raw points to the 1 to 5 scale itself and does not publish it for the current exam. Any site that prints an exact raw cutoff is guessing, or using an old exam that no longer matches.',
            'Our bands sit above where we expect the lines to be, by design. They are there to guide revision. They do not promise a score.'
          ],
          rightH3: 'Where to go from here',
          right: [
            'Students who want the live course can see our <a class="ag-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a> page.',
            'Students thinking about Java next can read about our <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>, which follow on naturally after CSP.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Through the CSP year',
    h2: 'Where the estimate sits at four points in the year',
    lede: 'A composite means something different in October than it does in late April.',
    table: { caption: 'Estimate checkpoints for an AP CSP year (ours)', head: ['When', 'What to estimate'], rows: [
      ['Fall', 'Section I only, on the big ideas taught so far'],
      ['Winter', 'A practice project scored against the six categories'],
      ['Before April 30', 'Video and program requirements on the real submission'],
      ['Early May', 'Full composite with timed written responses']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask whether the Create task has been submitted as final, not just uploaded. Only final submissions are scored.',
      'If the multiple choice is strong and the writing is weak, that is the most fixable profile there is.'
    ] },
    right: { h3: 'For students', ps: [
      'Practise writing about your own code, out loud and on paper. It is a different skill from writing the code.',
      'Score yourself strictly. A category is all or nothing.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses near AP Computer Science Principles',
    lede: 'Live online, with a regular teacher, as a group batch or one to one.',
    bands: [
      { num: 'I', h3: 'The AP route', sub: 'Grades 9 to 12', courses: [
        { code: 'ACSC / AP / 01', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CSP prep', blurb: 'Exam and Create task, together.' },
        { code: 'ACSC / AP / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP CSA prep', blurb: 'The Java exam, often the next step.' },
        { code: 'ACSC / AP / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'A head start on object-oriented code.' }
      ] },
      { num: 'II', h3: 'Languages for the project', sub: 'Ages 13 to 18', courses: [
        { code: 'ACSC / LNG / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Clean syntax for a first big program.' },
        { code: 'ACSC / LNG / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Programs that run in a browser.' },
        { code: 'ACSC / LNG / 03', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Page structure, before the scripts.' }
      ] },
      { num: 'III', h3: 'Data and beyond', sub: 'Ages 13 to 18', courses: [
        { code: 'ACSC / DAT / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Lists of real data, analysed.' },
        { code: 'ACSC / DAT / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving', blurb: 'Algorithms, step by careful step.' },
        { code: 'ACSC / DAT / 03', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'Another AP that rewards clear writing.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'A teacher beside the project, live',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, across the US time zones.' },
      { time: 'Weekends', l: 'Good for long project build sessions.' },
      { time: '1-on-1', l: 'Fitted around the student&rsquo;s own deadline.' }
    ],
    cells: [
      { h3: 'One regular teacher', p: 'Someone who knows the project from its first draft.' },
      { h3: 'Rules respected', p: 'Help with concepts and practice, never with the scored work.' },
      { h3: 'Writing practice', p: 'Timed prompts about the student&rsquo;s own code.' },
      { h3: 'Section I drills', p: 'All five big ideas, mixed and timed.' },
      { h3: 'Any state', p: 'Classes on video, wherever home is.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty students, or just one.' }
    ]
  },

  projectsH2: 'Programs our students have built',
  projectsLede: 'Work by learners who once sat where a CSP student sits now. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'From Google, exactly as parents wrote it.',

  fees: {
    h2: 'Fees',
    lede: 'Working out an estimate costs nothing. Teaching is paid one month at a time in US dollars, without a contract for the semester, so families can stop after any month.',
    free: ['A free first lesson', 'Bring a practice result', 'No card asked for'],
    group: ['Fifteen to twenty in a batch', 'A regular teacher', 'Your choice of batch', 'Billed monthly'],
    one: ['One student, one teacher', 'Times of your choosing', 'Paced to the April deadline']
  },

  faq: {
    eyebrow: 'Questions from students',
    h2: 'AP CSP scores: common questions',
    items: [
      { q: 'How is the AP Computer Science Principles exam weighted?', a: 'Section I, 70 multiple-choice questions in 120 minutes, is 70% of the score. Section II, the Create performance task plus two written-response questions, is 30%.' },
      { q: 'How many points is the AP CSP Create task worth?', a: 'Section II is scored as six categories of 0 to 1 point: Video, Program Requirements, Written Response 1, and Written Responses 2(a), 2(b) and 2(c). Together they make up 30% of the score.' },
      { q: 'How do I estimate my AP CSP score?', a: 'Our method adds the number of multiple-choice questions right to 5 times the rubric points earned, giving a composite out of 100. It is our estimate, not an official College Board conversion.' },
      { q: 'Is there an official AP CSP score calculator?', a: 'No. College Board publishes the weights and the rubric categories but not the raw score needed for each AP score on the current exam.' },
      { q: 'Can I get an AP CSP score without submitting the Create task?', a: 'Yes. College Board says students who take the end-of-course exam receive a score even if they do not submit the Create performance task, although they lose the points the task would carry.' },
      { q: 'What if I submit the Create task but miss the exam?', a: 'College Board says the exam score is cancelled in that case, and there is no refund.' },
      { q: 'Which AP CSP written response is hardest?', a: 'In the 2025 scoring statistics for Set 1, Written Response 2(a) had the lowest mean, 0.43 out of 1 possible point. Prompts change every year.' },
      { q: 'When is the AP CSP Create task due?', a: 'AP Central lists Friday, April 30, 2027, at 11:59 PM ET as the deadline to submit all components as final in the AP Digital Portfolio.' },
      { q: 'What times are AP CSP classes for US students?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do AP CSP classes cost?', a: 'The first lesson is free. Then families pay by the month, and this page shows the monthly amount in US dollars in its fees section.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students taking an AP computer science course.',
    items: [
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching', p: 'The full live course.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP CSA classes', p: 'The Java exam, unit by unit.' },
      { href: '/blog/ap-csp-vs-ap-csa-which-to-take-first', label: 'AP CSP or AP CSA', p: 'Which one to take first.' },
      { href: '/blog/how-to-use-chatgpt-to-study-without-cheating', label: 'Studying with AI, honestly', p: 'Useful before any project.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'What to build beyond the course.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every US page in one place.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us where the project is and how the last practice test went. The teacher uses the first lesson to estimate a composite with the student and pick the category to work on first.',
    readFirst: 'To see a lesson before booking, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>; the <a class="ag-inline-link" href="/courses">full course list</a> shows each syllabus.',
    note: 'Our teachers are based in India and teach on video, so there is nothing to travel to. For a US family, WhatsApp gets the fastest answer.',
    formNote: 'Free first lesson, no card required.'
  },

  footer: {
    cols: [
      { h4: 'AP computer science', links: [
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP CSA classes' },
        { href: '/blog/how-to-get-a-5-in-ap-computer-science-a', label: 'A 5 in AP CSA' },
        { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/coding-for-15-year-olds', label: 'Coding for 15 year olds' },
        { href: '/python-for-15-year-olds', label: 'Python for 15 year olds' },
        { href: '/ai-projects-for-high-school-students', label: 'AI projects for high school' }
      ] }
    ],
    bottomRight: 'Six points, each worth five questions'
  },

  personalityCss: `
.ag-root.ag-acsc .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-acsc .ag-capsule { border-left-width: 7px; border-radius: 3px; }
.ag-root.ag-acsc .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-acsc .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-acsc .ag-slots { gap: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'College Board, read raw on 17 October 2026: AP CSP exam page (70 MC in 120 minutes for 70% with 57 single-select, 5 with a reading passage, 8 multiple-select; Section II 30% with the Create task, 9 hours in class, and 2 written-response questions in 60 minutes; April 30, 2027 deadline; May 14, 2027 exam); 2026 Scoring Guidelines (six 0 to 1 categories, Program Requirements rules); 2025 scoring statistics Set 1 (means 0.94, 0.78, 0.84, 0.43, 0.57, 0.57); exam FAQ (score without the task; cancelled without the exam; prompts change each year).',
    localProject: 'Our composite method: MC right + 5 x rubric points (70 / 70 = 1 and 30 / 6 = 5), three invented worked students (68, 68, 59), the 10 composite points settled before exam day, our cautious handling of multiple-select items, our planning bands, and a Python program run by us that prints 68.0 of 100, used as a practice WR 2(b) prompt. Lesson family: weighted averages and the cost of a zero.',
    requiredMentions: ['30 / 6 = 5', '70 / 70 = 1', 'April 30, 2027, at 11:59 PM ET', 'Friday, May 14, 2027', '57 single-select', 'The list is a one-element list.', '0.43', 'composite(48, [1, 1, 1])', 'Students who take the end-of-course exam will receive a score even if they do not submit the Create performance task.', '2 &times; 5 = 10'],
    sources: [
      { claim: 'Exam components, question counts, timing, weights, task deadline and exam date.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-principles/exam' },
      { claim: 'Six reporting categories scored 0 to 1; Program Requirements decision rules; 2026 prompt topics.', url: 'https://apcentral.collegeboard.org/media/pdf/ap26-sg-computer-science-principles.pdf' },
      { claim: '2025 Set 1 category means.', url: 'https://apcentral.collegeboard.org/media/pdf/ap25-computer-science-principles-scoring-statistics-set-1.pdf' },
      { claim: 'Score without the task; cancelled without the exam; prompts differ each year.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-principles/course/faq/about-ap-csp-exam' },
      { claim: 'Plagiarism means a 0 on the task including the written responses; no PPR on exam day without submission.', url: 'https://apcentral.collegeboard.org/media/pdf/ap-csp-student-task-directions.pdf' }
    ],
    rejectedClaims: [
      'Raw-score cutoffs for each AP score: not published for the current exam, so none are printed; our bands are labelled ours.',
      'Partial credit on multiple-select questions: not stated in the sources read, so the method counts them only when fully right.',
      'The FAQ line that the Create task is 30% of the overall course grade: the exam page wording (30% of score) is used instead.',
      'The 750 and 850 word limits in an older FAQ answer: they describe the earlier written response format, so not printed.',
      'Score distributions: covered elsewhere on the site, not repeated here.',
      'Any affiliation with College Board: none, and the page says so.'
    ]
  }
};
