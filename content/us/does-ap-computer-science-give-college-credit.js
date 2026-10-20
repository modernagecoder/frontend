'use strict';
// Does AP Computer Science give college credit? (ag- AP door; US cluster Phase 3, row 48).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md, plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Sources fetched raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/does-ap-computer-science-give-college-credit/):
//  College Board:
//  - apstudents.collegeboard.org/getting-credit-placement/search-policies: "Your AP scores could earn you college credit
//    or advanced placement (meaning you could skip certain courses in college). Use this tool to find colleges that
//    offer credit or placement for AP scores."
//  - apstudents.collegeboard.org/getting-credit-placement: "Most U.S. colleges offer credit or advanced placement , or
//    both, for qualifying AP scores." (space before the comma is in the raw text); "You'll usually need 120 credits to
//    get a bachelor's degree."; transfer: "There's no way to transfer credits directly from one college to another.";
//    free score send deadline Sun, Jun 20, 2027, 11:59 PM ET; "You can send one score report for free every year".
//  - apcentral .../credit-granting-recommendations: "The American Council on Education (ACE) and College Board recommend
//    that colleges and universities award credit for AP scores of 3 or higher on any AP Exam."; table: Computer Science
//    A, 3, 4, Introduction to Java Programming; Computer Science Principles, 3, 3, Introduction to Computer Science.
//  - apcentral CSP higher-education-credit-and-placement: "More than 1,300 colleges and universities offer credit,
//    advanced placement, or both"; reviewers from over 100 colleges: 88%, 86%, 70%.
//  - apstudents CSP FAQ: institutions publish policies "according to their own often varying schedules".
//  - CSA CED: "equivalent to an introductory college course in computer science"; CSP FAQ: "a first-semester
//    introductory college computing course for nonmajors".
//  Colleges (each read raw, each the college's own page):
//  - Case Western Reserve University, 2026-27 General Bulletin: CSA "4 or 5", "3 credit hours", ENGR 131; "CWRU does not
//    award credit for AP Computer Science Principles."; credit forfeited if the course is later taken.
//  - University of Miami, AP Credit Equivalencies 2026-2027 ("Effective ONLY for Fall 2026 & Spring 2027 Admitted
//    students"): CSA 4, 5, CSC 120, 4 credits; CSP 4, 5, CSC 119, 4 credits; official scores by end of first semester.
//  - University of Cincinnati registrar, Current AP Awards ("Academic Year 2020–Present", written here as 2020 to
//    present): CSA 3 or 4 IT 1090C (3); CSA 5 IT 1090C (3) and IT 2045C (3), 6; CSP 3 or 4 IT 1001C (3); CSP 5 IT 1050C
//    (3); State of Ohio policy: a score of 3 or above "will be awarded the aligned course(s) and credits".
//  Blocked, not circumvented: admissions.umich.edu and registrar.colostate.edu (HTTP 403). Not found: gatech, UC system
//  and UF URLs tried (404). Search-summary-only policies (Villanova, CSB/SJU, Rhodes and others) are not printed.
// Our own material, labelled: the side-by-side reading of the three policies, the share-of-120 arithmetic
// (3 / 120 = 2.5%, 6 / 120 = 5%), and the question list for colleges.
// Lesson family: reading a lookup table carefully (same key, different value per institution).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'AP CS CREDIT', blurb: 'Whether AP Computer Science A and Principles earn college credit, from College Board&rsquo;s guidance and three real 2026 college policies.' },
  slug: 'does-ap-computer-science-give-college-credit',
  code: 'dacs',
  accent: '#11702C',
  accentRationale: 'AP computer science credit, US: a clear forest green #11702C from the US allocation table, brighter than the two calculator greens so the credit page reads apart',
  pageType: 'market',
  market: US,
  routeLabel: 'Does AP CS give college credit?',
  title: 'Does AP Computer Science Give College Credit? A and CSP Compared',
  description: 'Does AP Computer Science give college credit? The ACE and College Board recommendation, and three real 2026 college policies for AP CSA and AP CSP, side by side.',
  ogDescription: 'Colleges set their own AP credit rules. Here is what College Board recommends for AP Computer Science A and Principles, and how three named colleges actually treat each score.',
  twitterDescription: 'AP CSA and AP CSP credit: the official recommendation and three real college policies.',
  pageName: 'Does AP Computer Science Give College Credit?',
  webPageDescription: 'A guide for US students and parents to college credit and placement for AP Computer Science A and AP Computer Science Principles, built from College Board pages and colleges&rsquo; own published policies.',
  courseDescription: 'Live online AP Computer Science A and AP Computer Science Principles preparation for US high school students, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Does AP CS give college credit?',
  navLinks: [
    { href: '#answer', label: 'The answer' },
    { href: '#recommend', label: 'Recommended' },
    { href: '#colleges', label: 'Three colleges' },
    { href: '#lookup', label: 'Look it up' },
    { href: '#math', label: 'Math credit?' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; AP Computer Science A and Principles',
  h1: 'Does AP Computer Science give college credit?',
  lede: 'Often, yes, but never automatically, and not in the same way everywhere. Each college decides for itself whether a score on AP Computer Science A or AP Computer Science Principles earns credit, earns placement, earns both, or earns nothing at all. College Board says so, and the three college policies further down this page prove it: the same score of 4 is worth three credit hours at one university, four at another, and for one of the two exams nothing at a third. This page sets out the official recommendation, what those three colleges actually publish for 2026, and how to find the rule for the college your teen is aiming at.',
  secondaryCta: { href: '#colleges', label: 'See three real policies' },
  wa: 'Hello Modern Age Coders, my teen in the US is taking AP Computer Science and we want to prepare properly for the exam. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; AP CSA and AP CSP, taught live',
  spec: [
    ['Exams', 'AP CSA and AP CSP'],
    ['Recommended minimum', 'A score of 3'],
    ['Who decides', 'Each college, not College Board'],
    ['CSP policies', 'More than 1,300 colleges'],
    ['Free score send', 'By June 20, 2027'],
    ['Look up', 'College Board credit policy search'],
    ['Our classes', 'Batch or 1-on-1'],
    ['First lesson', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'AP Computer Science can earn college credit, but each college sets its own rule. The American Council on Education and College Board recommend credit for a score of 3 or higher; their table suggests 4 credits for AP Computer Science A and 3 for AP Computer Science Principles. Real policies vary: for 2026, Case Western gives 3 credit hours for a 4 or 5 on CSA and none for CSP.',

  picks: {
    eyebrow: 'Prepare for the score that counts',
    h2: 'Three courses for students who want the exam to count',
    lede: 'Credit follows the score. These courses prepare students for the exam itself, taught live by one regular teacher.',
    items: [
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'DACS / 01', title: 'AP Computer Science A prep', note: 'Grades 10 to 12. Java, four units, timed practice.' },
      { course: 'ap-computer-science-principles-exam-prep-course', code: 'DACS / 02', title: 'AP Computer Science Principles prep', note: 'Grades 9 to 12. Big ideas and the Create task concepts.' },
      { course: 'java-programming-masterclass-for-teens', code: 'DACS / 03', title: 'Java for teens', note: 'Ages 13 to 18. A strong Java base before AP CSA.' }
    ]
  },

  sections: [
    {
      id: 'answer', tint: 'tint', eyebrow: 'The short answer, sourced',
      h2: 'Credit, placement, or both: what College Board actually says',
      lede: 'College Board runs the exams, but it does not award college credit. Its own pages are careful about that distinction.',
      body: [
        { kind: 'table', caption: 'What College Board says about credit and placement (apstudents.collegeboard.org, read 17 October 2026)', head: ['Point', 'In College Board&rsquo;s words'], rows: [
          ['How common it is', '"Most U.S. colleges offer credit or advanced placement, or both, for qualifying AP scores."'],
          ['What credit is for', '"You&rsquo;ll usually need 120 credits to get a bachelor&rsquo;s degree."'],
          ['What placement means', 'Skipping courses whose material your AP score shows you already know, so you can go straight to more advanced ones'],
          ['The search tool', '"Use this tool to find colleges that offer credit or placement for AP scores."'],
          ['Changing colleges', '"There&rsquo;s no way to transfer credits directly from one college to another." You send your scores again to the new college.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Credit and placement are different',
          left: [
            'Credit counts towards the total a degree needs. Placement lets you skip a course and start higher. A college might give one, the other, or both for the same score, and computer science departments often care more about placement than about the credit hours.',
            'For a future computer science major, skipping an introductory programming course can matter more than three credits of general electives. For anyone else, the credits may matter more.'
          ],
          rightH3: 'What each AP course is designed to match',
          right: [
            'The AP Computer Science A Course and Exam Description says the course is "equivalent to an introductory college course in computer science", taught in Java.',
            'College Board&rsquo;s AP CSP FAQ describes Principles as designed to be equivalent to "a first-semester introductory college computing course for nonmajors". That one word, nonmajors, explains a lot of the policies below.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: College Board&rsquo;s <a class="ag-inline-link" href="https://apstudents.collegeboard.org/getting-credit-placement" rel="noopener" target="_blank">Getting Credit and Placement</a>, <a class="ag-inline-link" href="https://apstudents.collegeboard.org/getting-credit-placement/search-policies" rel="noopener" target="_blank">AP Credit Policy Search</a> and the <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-principles/course/faq/college-credit-for-ap-csp" rel="noopener" target="_blank">AP CSP college credit FAQ</a>. We are not connected with College Board or any college named here.' }
      ]
    },
    {
      id: 'recommend', tint: 'deep', eyebrow: 'The recommendation',
      h2: 'What ACE and College Board recommend for each exam',
      lede: 'College Board publishes credit-granting recommendations drawn from the American Council on Education&rsquo;s review of AP. They are recommendations to colleges, not rules.',
      body: [
        { kind: 'table', caption: 'ACE and College Board credit-granting recommendations, computer science (AP Central, read 17 October 2026)', head: ['AP Exam', 'Minimum score', 'Total credits', 'Equivalent course'], numCols: [1, 2], rows: [
          ['Computer Science A', '3', '4', 'Introduction to Java Programming'],
          ['Computer Science Principles', '3', '3', 'Introduction to Computer Science']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The general rule behind the table',
          left: [
            'AP Central puts it in one sentence: "The American Council on Education (ACE) and College Board recommend that colleges and universities award credit for AP scores of 3 or higher on any AP Exam."',
            'So the recommended floor is a 3 for both computer science exams. In practice, as the next section shows, selective colleges often set the bar at a 4.'
          ],
          rightH3: 'How widely CSP is recognised',
          right: [
            'For AP Computer Science Principles, AP Central says: "More than 1,300 colleges and universities offer credit, advanced placement, or both for qualifying scores on the AP Computer Science Principles Exam."',
            'It also reports that academic leaders from over 100 colleges reviewed the course framework, and that 88% believed it is a college-level computing course, 86% would award credit, and 70% would offer a comparable course.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://apcentral.collegeboard.org/about-ap/higher-education/setting-credit-placement-policy/credit-granting-recommendations" rel="noopener" target="_blank">AP Credit-Granting Recommendations</a> and <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-principles/higher-education-credit-and-placement" rel="noopener" target="_blank">AP CSP Higher Education Credit and Placement</a>, AP Central, read 17 October 2026.' }
      ]
    },
    {
      id: 'colleges', tint: 'tint', eyebrow: 'Three real policies',
      h2: 'The same exam, three colleges, three different answers',
      lede: 'We read each college&rsquo;s own published AP table on 17 October 2026. They are examples, not a ranking, chosen because each page was readable in full and states its year.',
      body: [
        { kind: 'table', caption: 'AP Computer Science credit at three colleges, from each college&rsquo;s own page (read 17 October 2026)', head: ['College and policy year', 'AP Computer Science A', 'AP Computer Science Principles'], rows: [
          ['Case Western Reserve University, 2026-27 General Bulletin', 'A 4 or 5: 3 credit hours, as ENGR 131', '"CWRU does not award credit for AP Computer Science Principles."'],
          ['University of Miami, for students admitted fall 2026 and spring 2027', 'A 4 or 5: CSC 120, 4 credits', 'A 4 or 5: CSC 119, 4 credits'],
          ['University of Cincinnati, current AP awards (2020 to present)', 'A 3 or 4: IT 1090C, 3 credits. A 5: IT 1090C and IT 2045C, 6 credits', 'A 3 or 4: IT 1001C, 3 credits. A 5: IT 1050C, 3 credits']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the three side by side (our reading)',
          left: [
            'A score of 3 on AP Computer Science A earns credit at Cincinnati and nothing at the other two. A 4 earns 3 credit hours at Case Western, 4 credits at Miami and 3 at Cincinnati. Only Cincinnati gives more for a 5 than for a 4, adding a second course.',
            'AP Computer Science Principles splits further: no credit at Case Western, the same 4 credits as CSA at Miami for a 4 or 5, and credit from a 3 at Cincinnati. No single number answers "does AP CSP give college credit?"'
          ],
          rightH3: 'Why Cincinnati starts at 3',
          right: [
            'Cincinnati&rsquo;s page quotes State of Ohio policy that students who score 3 or above "will be awarded the aligned course(s) and credits" for the exam area, adding that more may be available for a 4 or 5.',
            'That is a state rule for Ohio&rsquo;s public colleges, not a national one. Other states have their own policies, and private colleges set theirs independently.'
          ] },
        { kind: 'table', mt: true, caption: 'Credits as a share of a typical bachelor&rsquo;s degree (our arithmetic, using College Board&rsquo;s figure of usually 120 credits)', head: ['Credits awarded', 'Share of 120'], numCols: [1], rows: [
          ['3', '3 / 120 = 2.5%'],
          ['4', '4 / 120 = 3.3%'],
          ['6', '6 / 120 = 5%']
        ] },
        { kind: 'source', html: 'Sources, each read 17 October 2026: <a class="ag-inline-link" href="https://bulletin.case.edu/undergraduate-academics/ap-ib-credit-equivalencies/" rel="noopener" target="_blank">Case Western Reserve AP/IB Credit Equivalencies</a>, <a class="ag-inline-link" href="https://www.success.miami.edu/resources/ap-credit-equivalencies-2026-2027/index.html" rel="noopener" target="_blank">University of Miami AP Credit Equivalencies 2026-2027</a> and <a class="ag-inline-link" href="https://www.uc.edu/about/registrar/credit-evaluation/test-credits/AP.html" rel="noopener" target="_blank">University of Cincinnati Advanced Placement</a>. Policies change; check the current page before relying on it.' }
      ]
    },
    {
      id: 'rules', tint: 'deep', eyebrow: 'The small print',
      h2: 'Conditions that come with AP credit',
      lede: 'The tables are only half of each policy. The paragraphs around them carry conditions that can change what a score is worth.',
      body: [
        { kind: 'table', caption: 'Conditions stated on the three college pages (read 17 October 2026)', head: ['College', 'Condition'], rows: [
          ['Case Western Reserve', 'Credit and exemption only for AP exams taken before matriculation; if a student later takes the course they got AP credit for, the AP credit for it is forfeited'],
          ['Case Western Reserve', 'Policies are reviewed annually by departments and are subject to change'],
          ['University of Miami', 'Official scores must reach the admission office from College Board no later than the end of the first semester of enrollment'],
          ['University of Miami', 'The table applies only to students admitted for fall 2026 and spring 2027'],
          ['University of Cincinnati', 'For STEM sequences, students are strongly advised to talk to advisors to be sure they have the foundation for advanced courses']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Credit you might decline',
          left: [
            'Cincinnati&rsquo;s advice about STEM sequences is worth taking seriously. A student who skips the first programming course and then struggles in the second has gained three credits and lost a foundation.',
            'Some students accept the credit but take the introductory course anyway. At a college like Case Western, that choice forfeits the AP credit for that course, so ask before enrolling.'
          ],
          rightH3: 'Scores have to be sent',
          right: [
            'Credit only appears once the college receives an official score report. College Board&rsquo;s credit page lists June 20, 2027, at 11:59 PM ET as the deadline to choose a free score-send recipient for 2027 scores, and says "You can send one score report for free every year that you take AP Exams."',
            'Scores sent later can still count, but usually for a fee. Miami&rsquo;s end-of-first-semester deadline shows why it is worth doing on time.'
          ] }
      ]
    },
    {
      id: 'lookup', tint: 'tint', eyebrow: 'Your own college',
      h2: 'How to find the rule for the college you care about',
      lede: 'This is the method we give families. It takes about ten minutes per college.',
      body: [
        { kind: 'ol', items: [
          '<b>Start with College Board&rsquo;s search.</b> The AP Credit Policy Search on apstudents.collegeboard.org lists colleges that offer credit or placement for AP scores. Use it to find the policy page.',
          '<b>Open the college&rsquo;s own page.</b> College Board warns that colleges publish policies on "their own often varying schedules", so the college&rsquo;s page is the authority, not a summary.',
          '<b>Check the year.</b> Look for the entering class or academic year the table applies to, as Miami and Case Western both state.',
          '<b>Find both rows.</b> Computer Science A and Computer Science Principles are listed separately, often with different minimum scores and credit.',
          '<b>Read the conditions.</b> Deadlines for scores, rules about retaking a course, and limits on total credit sit in the paragraphs around the table.',
          '<b>Ask the department if you plan to major.</b> For a computer science major, placement into the right first course matters more than credit hours. If the page is unclear, email the department.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Questions worth asking a college (ours)',
          left: [
            'Does a 3, 4 or 5 on AP Computer Science A place me out of your first programming course for majors, or only give elective credit?',
            'Does AP Computer Science Principles count towards a general education requirement, the major, or neither?'
          ],
          rightH3: 'If the policy says no',
          right: [
            'A college that gives no credit for an exam may still value the course on a transcript. Credit policy and admission are separate questions, and the credit table says nothing about how admission readers see a course.',
            'The skills carry over regardless. A student who has really learned Java in AP Computer Science A starts college programming ahead, credit or not.'
          ] }
      ]
    },
    {
      id: 'math', tint: 'deep', eyebrow: 'A common follow-up',
      h2: 'Is AP Computer Science a math credit?',
      lede: 'This question is usually about high school, not college: can AP Computer Science count towards a high school math graduation requirement?',
      body: [
        { kind: 'two',
          leftH3: 'Who decides',
          left: [
            'That is set by each state and often by each school district, not by College Board. The College Board credit pages we read are about college credit and placement and do not answer it.',
            'So we will not give a blanket answer here. Ask your school counselor how your district counts AP Computer Science A and AP Computer Science Principles towards graduation.'
          ],
          rightH3: 'For homeschooled students',
          right: [
            'Families who write their own transcripts have more freedom, and more responsibility, in how they label a course. Our page on <a class="ag-inline-link" href="/homeschool-computer-science-high-school-credit">homeschool computer science credit</a> covers how to record it.',
            'For the college side, the policies on this page apply in the same way: homeschooled students send official AP scores like anyone else.'
          ] },
        { kind: 'p', mt: true, html: 'Choosing which exam to take first? Our comparison of <a class="ag-inline-link" href="/blog/ap-csp-vs-ap-csa-which-to-take-first">AP CSP and AP CSA</a> covers it, and our <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a> and <a class="ag-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a> describe the courses.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Through high school',
    h2: 'When to think about AP credit, grade by grade',
    lede: 'Credit is a senior-year question, but the choices that shape it start earlier.',
    table: { caption: 'AP credit planning by grade (ours)', head: ['Grade', 'What to do'], rows: [
      ['9 or 10', 'Take AP CSP or build Java skills; no credit decisions yet'],
      ['10 or 11', 'Take AP CSA if Java is the goal; note both exam scores'],
      ['11 or 12', 'Look up the credit policy at each college on the list'],
      ['12', 'Send scores by the free score-send deadline, then confirm credit']
    ] },
    left: { h3: 'For parents', ps: [
      'Keep a simple table: college, CSA rule, CSP rule, year of the policy. It makes comparing offers easy.',
      'Do not choose an AP course only for the credit. The learning is what lasts.'
    ] },
    right: { h3: 'For students', ps: [
      'If you plan to major in computer science, ask about placement, not just credits.',
      'Save the college&rsquo;s policy page as a PDF on the day you read it. Pages change.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students heading to college',
    lede: 'Taught live online by a regular teacher, in a group batch or one to one.',
    bands: [
      { num: 'I', h3: 'AP exams', sub: 'Grades 9 to 12', courses: [
        { code: 'DACS / AP / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'The Java exam, prepared properly.' },
        { code: 'DACS / AP / 02', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP Computer Science Principles', blurb: 'Breadth, data and the Create task.' },
        { code: 'DACS / AP / 03', slug: 'ap-calculus-exam-prep', title: 'AP Calculus AB and BC', blurb: 'Often paired with AP CSA.' }
      ] },
      { num: 'II', h3: 'More AP and tests', sub: 'Grades 10 to 12', courses: [
        { code: 'DACS / TS / 01', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'Data and inference.' },
        { code: 'DACS / TS / 02', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Functions before calculus.' },
        { code: 'DACS / TS / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'The digital SAT math section.' }
      ] },
      { num: 'III', h3: 'Ahead of college', sub: 'Ages 13 to 18', courses: [
        { code: 'DACS / CO / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'The algorithms college CS starts with.' },
        { code: 'DACS / CO / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language many intro courses use.' },
        { code: 'DACS / CO / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'USACO and beyond.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Exam preparation, live and paced to May',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in any US time zone.' },
      { time: 'Weekends', l: 'Longer review sessions before May.' },
      { time: '1-on-1', l: 'Built around the school&rsquo;s AP calendar.' }
    ],
    cells: [
      { h3: 'A regular teacher', p: 'The same person from fall to May.' },
      { h3: 'Exam-format practice', p: 'Timed, marked, explained.' },
      { h3: 'Both AP courses', p: 'Computer Science A and Principles.' },
      { h3: 'Honest progress notes', p: 'Where the student stands, plainly.' },
      { h3: 'Every state', p: 'Live on video, from home.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Projects by teenagers who went on to AP and beyond. The <a class="ag-inline-link" href="/student-labs">student labs</a> page lists more.',
  reviewsLede: 'What parents wrote on Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'Preparation is billed monthly in US dollars, with no year-long contract, so families can stop at the end of any month.',
    free: ['A free first lesson', 'Ask about either AP exam', 'No card required'],
    group: ['Fifteen to twenty per batch', 'A regular teacher', 'A batch time you choose', 'Paid each month'],
    one: ['A teacher for your teen alone', 'Flexible times', 'A plan for their exam date']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'AP Computer Science credit: common questions',
    items: [
      { q: 'Does AP Computer Science A give college credit?', a: 'At many colleges, yes, but each college sets its own rule. ACE and College Board recommend credit for a score of 3 or higher, with 4 credits for an Introduction to Java Programming course. Some colleges require a 4 or 5.' },
      { q: 'Does AP Computer Science Principles give college credit?', a: 'College Board says more than 1,300 colleges and universities offer credit, placement or both for qualifying CSP scores, and recommends 3 credits for a 3 or higher. Some colleges, such as Case Western Reserve for 2026-27, give no credit for it.' },
      { q: 'What score do I need on AP Computer Science for credit?', a: 'The ACE and College Board recommendation is a 3 or higher. Colleges set their own minimums: of the three policies on this page, one starts at 3 and two start at 4.' },
      { q: 'Is AP Computer Science A or Principles worth more credit?', a: 'It depends on the college. The ACE and College Board table recommends 4 credits for CSA and 3 for CSP, but one college on this page gives both the same 4 credits and another gives nothing for CSP.' },
      { q: 'What is the difference between credit and placement?', a: 'Credit counts towards the total your degree needs, usually 120 credits for a bachelor\'s degree according to College Board. Placement lets you skip a course and start at a higher level.' },
      { q: 'How do I find a college\'s AP Computer Science credit policy?', a: 'Use the AP Credit Policy Search on College Board\'s student site to find it, then read the policy on the college\'s own website, checking the year it applies to.' },
      { q: 'Is AP Computer Science a math credit in high school?', a: 'That is decided by each state and often each school district, not by College Board. Ask your school counselor how AP Computer Science counts towards graduation.' },
      { q: 'How do I send my AP scores to a college for free?', a: 'College Board lists June 20, 2027, at 11:59 PM ET as the deadline to choose your free score-send recipient for 2027 scores. You get one free score report each year you take AP Exams.' },
      { q: 'What times are AP Computer Science classes for US students?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do your AP classes cost?', a: 'The first lesson is free. After that, families pay for one month at a time, and the fees section shows the monthly amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US families planning AP computer science.',
    items: [
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A classes', p: 'The live Java course.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching', p: 'The breadth course and project.' },
      { href: '/blog/ap-csp-vs-ap-csa-which-to-take-first', label: 'AP CSP or AP CSA first', p: 'Which suits your teen.' },
      { href: '/homeschool-computer-science-high-school-credit', label: 'Homeschool CS credit', p: 'Recording computer science on a transcript.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'What else colleges see.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All our US pages.' },
      { href: '/ap-computer-science-a-practice-questions', label: 'AP CSA practice questions', p: 'Original AP CSA practice in Java: 14 questions and a free response, answers run and checked.' },
      { href: '/ap-csp-create-performance-task-guide', label: 'AP CSP Create task guide', p: 'The AP CSP Create task from the official handouts: code, video, PPR, AI rules, deadline.' },
      { href: '/is-ap-computer-science-hard', label: 'Is AP Computer Science hard?', p: 'How hard are AP CSA and AP CSP? The 2026 numbers, the prerequisites, two quick checks.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us which AP exam your teen is taking and when. The first lesson checks where they stand and what a realistic plan to May looks like.',
    readFirst: 'Before booking, you can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse the <a class="ag-inline-link" href="/courses">courses</a> and their syllabuses.',
    note: 'All teaching is live on video by teachers in India, so families anywhere in the US can join from home. WhatsApp is the fastest way to reach us.',
    formNote: 'The first lesson costs nothing and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'AP computer science', links: [
        { href: '/ap-computer-science-a-online-classes', label: 'AP CSA classes' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' },
        { href: '/blog/ap-computer-science-a-changes-2026', label: 'AP CSA changes for 2026' },
        { href: '/ap-calculus-tutoring-online', label: 'AP Calculus tutoring' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/homeschool-coding-curriculum', label: 'Homeschool coding curriculum' },
        { href: '/summer-research-programs-coding', label: 'Summer research programs' },
        { href: '/coding-for-17-year-olds', label: 'Coding for 17 year olds' }
      ] }
    ],
    bottomRight: 'Same score, different college, different answer'
  },

  personalityCss: `
.ag-root.ag-dacs .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-dacs .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-dacs .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-dacs .ag-table caption { text-align: left; }
.ag-root.ag-dacs .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'College Board, read raw on 17 October 2026: Getting Credit and Placement (most colleges offer credit or placement; usually 120 credits; no direct transfer; free score send by June 20, 2027); AP Credit Policy Search (tool description); ACE and College Board credit-granting recommendations (3 or higher; CSA 3, 4, Introduction to Java Programming; CSP 3, 3, Introduction to Computer Science); AP CSP higher-education page (more than 1,300 colleges; 88%, 86%, 70%); CSA CED and CSP FAQ course equivalents. Colleges, each on its own page: Case Western Reserve 2026-27 Bulletin; University of Miami 2026-2027; University of Cincinnati current AP awards and Ohio policy.',
    localProject: 'A side-by-side reading (ours) of three real 2026 college AP policies for CSA and CSP, credits as a share of 120 (3 / 120 = 2.5%, 4 / 120 = 3.3%, 6 / 120 = 5%), a six-step lookup method and a question list for colleges. Lesson family: reading a lookup table carefully.',
    requiredMentions: ['CWRU does not award credit for AP Computer Science Principles.', 'CSC 120, 4 credits', 'CSC 119, 4 credits', 'IT 1090C and IT 2045C, 6 credits', 'IT 1001C', 'Introduction to Java Programming', 'More than 1,300 colleges and universities offer credit, advanced placement, or both', '3 / 120 = 2.5%', 'June 20, 2027, at 11:59 PM ET', 'ENGR 131'],
    sources: [
      { claim: 'Credit and placement explained; 120 credits; no direct transfer; free score send.', url: 'https://apstudents.collegeboard.org/getting-credit-placement' },
      { claim: 'The AP Credit Policy Search tool.', url: 'https://apstudents.collegeboard.org/getting-credit-placement/search-policies' },
      { claim: 'ACE and College Board recommendations for CSA and CSP.', url: 'https://apcentral.collegeboard.org/about-ap/higher-education/setting-credit-placement-policy/credit-granting-recommendations' },
      { claim: 'More than 1,300 colleges for CSP; reviewer percentages.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-principles/higher-education-credit-and-placement' },
      { claim: 'Case Western Reserve 2026-27 AP equivalencies.', url: 'https://bulletin.case.edu/undergraduate-academics/ap-ib-credit-equivalencies/' },
      { claim: 'University of Miami 2026-2027 AP equivalencies.', url: 'https://www.success.miami.edu/resources/ap-credit-equivalencies-2026-2027/index.html' },
      { claim: 'University of Cincinnati AP awards and Ohio policy.', url: 'https://www.uc.edu/about/registrar/credit-evaluation/test-credits/AP.html' }
    ],
    rejectedClaims: [
      'University of Michigan and Colorado State policies: their pages returned HTTP 403 and were not circumvented.',
      'Villanova, CSB/SJU, Rhodes, Everett and Purdue figures: seen only in search summaries, never read raw, so not printed.',
      'Whether AP Computer Science counts as a high school math credit in a given state: not answered by College Board sources, so no state facts are given.',
      'That AP credit saves a specific amount of money: not printed.',
      'Any affiliation with College Board or the colleges named: none, and the page says so.'
    ]
  }
};
