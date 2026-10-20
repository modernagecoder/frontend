'use strict';
// Free coding programs for high school students (ag- topic door; US cluster Phase 2, row 28).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/free-coding-programs-for-high-school-students/):
//  - CS50x 2026 (cs50.harvard.edu/x/): free via OpenCourseWare, "eleven weeks of material" (Week 0 Scratch to Week 10);
//    "Two thirds of CS50 students have never taken CS before."; problem sets plus a final project; edX account needed to
//    submit. Certificate page: at least 70% on each problem set and the final project for a free CS50 Certificate.
//    FAQs (updated October 14, 2026): "perhaps best suited for learners ages 12 and up"; free and verified certificates
//    "not accredited academic offerings"; high school credit only from "official school representatives"; score
//    "weighted 75% for correctness and 25% for style", 70% to complete, worked example (7/8 * 0.75) + (0.95 * 0.25) =
//    89%; "This course does not have individual deadlines for assignments"; final deadline 30 June 2027 11:59PM UTC; the
//    current term "began on 1 January 2026".
//  - freeCodeCamp About/FAQ (freecodecamp.org/news/about/): "We're a 501(c)(3) public charity"; "Every aspect of
//    freeCodeCamp is 100% free. The courses, the projects, even the certifications."
//  - USACO home (usaco.org): "Hundreds of hours of free on-line training"; contests "four per year"; 2025-2026 season:
//    three online contests in early 2026 then a proctored invitational US Open; finalists to a training camp in late May.
//    Instructions page: "All are welcome to participate in online USACO contests and training."; "Only pre-college
//    students in the USA are eligible for selection as finalists"; new participants start in bronze; bronze, silver,
//    gold, platinum; "3 or 4 problems"; C, C++, Java or Python; "4..5 contiguous hours" in a window. Individuals named
//    on the home page are not named here.
//  - Code.org Computer Science Principles (code.org/educate/csp): "Free year-long curriculum"; "Grades 9-12";
//    "AP® CSP-endorsed"; programming units in JavaScript, with a Code.org + CMU CS Academy option in Python.
//  - MIT OpenCourseWare About (ocw.mit.edu/about/): "Since 2001"; "free and open collection of material from thousands
//    of MIT courses"; no enrollment, no start or end dates, no account; cite MIT OpenCourseWare when reusing.
//  - MIT BWSI FAQ (bwsi.mit.edu/faq/): the online prerequisite courses are "free" for students (one line only).
// Our own material, labelled on the page: the 16-week free-only plan (5 hours a week = 80 hours), the Python score
// checker and its output, the practice set (style needed for 5/8 correctness: 0.70 - 0.46875 = 0.23125, / 0.25 = 0.925;
// 4/8 with perfect style is 0.375 + 0.25 = 62.5%, under 70%), and the comparison table's last column.
// Lesson family: weighted averages and conditionals (reading a grading rule as code).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCORE = `def cs50_score(passed, total, style):
    """CS50x weighting from its FAQ: 75% correctness, 25% style."""
    correctness = passed / total
    return correctness * 0.75 + style * 0.25

def status(score):
    return "complete" if score >= 0.70 else "not yet"

# The FAQ's own example: check50 7/8, style 0.95
score = cs50_score(7, 8, 0.95)
print(round(score * 100, 3), status(score))

# Our practice set
for passed in (8, 6, 5, 4):
    top = cs50_score(passed, 8, 1.0)
    print(passed, "of 8, perfect style:", round(top * 100, 3), status(top))`;

const SCORE_OUT = `89.375 complete
8 of 8, perfect style: 100.0 complete
6 of 8, perfect style: 81.25 complete
5 of 8, perfect style: 71.875 complete
4 of 8, perfect style: 62.5 not yet`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'FREE', blurb: 'Five genuinely free coding programs for high schoolers, read from their own pages, with a sixteen-week free-only plan and a Python practice set.' },
  slug: 'free-coding-programs-for-high-school-students',
  code: 'fphs',
  accent: '#0F6617',
  accentRationale: 'Free coding programs for high school students: #0F6617, a deep open-door green from the allocation sheet, distinct from the other US accents and readable on every paper colour',
  pageType: 'market',
  market: US,
  routeLabel: 'Free coding programs for high school students',
  title: 'Free Coding Programs for High School Students: What Is Free',
  description: 'Free coding programs for high school students checked at the source: CS50x, freeCodeCamp, USACO, Code.org CSP and MIT OCW, plus a 16-week plan and real Python.',
  ogDescription: 'What is actually free in CS50x, freeCodeCamp, USACO, Code.org and MIT OpenCourseWare, who each one suits, the fine print on certificates and credit, and a free 16-week plan.',
  twitterDescription: 'Free coding programs for high schoolers, checked at the source, with a 16-week plan.',
  pageName: 'Free Coding Programs for High School Students',
  webPageDescription: 'A guide for US high school students and parents to free coding programs, built from each provider&rsquo;s own pages, with certificate and credit rules, a free-only study plan and a Python practice set.',
  courseDescription: 'Live online coding classes for US high school students who want a teacher alongside free courses such as CS50x and USACO training, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Free coding programs for high schoolers',
  navLinks: [
    { href: '#list', label: 'Five free programs' },
    { href: '#cs50', label: 'CS50x rules' },
    { href: '#score', label: 'The score in code' },
    { href: '#usaco', label: 'USACO' },
    { href: '#plan', label: 'Sixteen weeks' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; No-cost options checked at the source',
  h1: 'Free coding programs for high school students',
  lede: 'Free coding programs for high school students are real and some are excellent, but "free" means different things on different sites. One is free to study and free to certify; another is free to study, with credit only through your own school; a third is a free curriculum your teacher has to choose. We read five of them from their own pages: Harvard&rsquo;s CS50x, freeCodeCamp, USACO, Code.org&rsquo;s Computer Science Principles and MIT OpenCourseWare. Here is exactly what each one gives at no cost, what the fine print says about certificates and school credit, a sixteen-week plan that uses only free material, and a short Python practice set built on CS50&rsquo;s own grading rule.',
  secondaryCta: { href: '#plan', label: 'See the sixteen-week plan' },
  wa: 'Hello Modern Age Coders, my high schooler in the US is using free coding courses and wants a teacher too. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; free courses welcomed, not replaced',
  spec: [
    ['Grades', '9 to 12'],
    ['Programs read', 'Five, all no cost'],
    ['Self-paced', 'CS50x, freeCodeCamp, MIT OCW'],
    ['Contest', 'USACO, four a year'],
    ['Our part', 'A live teacher alongside'],
    ['Group', 'A batch, or one to one'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The strongest free coding programs for high school students are CS50x (Harvard&rsquo;s introduction, free with a free certificate at 70% or more, current deadline 30 June 2027), freeCodeCamp (100% free including certifications), USACO (free contests and training), Code.org&rsquo;s CS Principles (a free year-long curriculum for grades 9 to 12) and MIT OpenCourseWare. Modern Age Coders adds a live teacher, online, in a batch or one to one.',

  picks: {
    eyebrow: 'Add a teacher to the free material',
    h2: 'Live courses to run beside free self-study',
    lede: 'Free courses supply material. A teacher supplies feedback on your own code, every week, which is the part most self-learners miss.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'FPHS / 01', title: 'Python for teens', note: 'For 13 to 18 year olds; matches CS50&rsquo;s Python week.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'FPHS / 02', title: 'Problem solving and algorithms', note: 'For 13 to 18 year olds; the reasoning bronze contests test.' },
      { course: 'ap-computer-science-principles-exam-prep-course', code: 'FPHS / 03', title: 'AP CS Principles', note: 'High school. Goes with a Code.org CSP class.' }
    ]
  },

  sections: [
    {
      id: 'list', tint: 'tint', eyebrow: 'Five free programs',
      h2: 'What each free program actually gives, in its own words',
      lede: 'Every row below comes from the provider&rsquo;s own page, read on 17 October 2026. We did not include anything whose cost or rules we could not confirm at the source.',
      body: [
        { kind: 'table', caption: 'Free coding programs for high school students, from each provider&rsquo;s own pages (read 17 October 2026)', head: ['Program', 'What is free', 'Format', 'Our note: who it suits'], rows: [
          ['CS50x (Harvard)', 'All eleven weeks of material, problem sets and a free CS50 Certificate at 70% or more on everything', 'Self-paced online, final deadline 30 June 2027', 'A motivated student who wants a real university introduction'],
          ['freeCodeCamp', '"Every aspect of freeCodeCamp is 100% free. The courses, the projects, even the certifications."', 'Self-paced online', 'A student drawn to web development and projects'],
          ['USACO', '"Hundreds of hours of free on-line training" plus online contests', 'Timed contests in C, C++, Java or Python', 'A student who enjoys puzzles and algorithms'],
          ['Code.org CS Principles', 'A "Free year-long curriculum" for "Grades 9-12", endorsed for AP CSP', 'Taught by a teacher at school', 'A student whose school can run the course'],
          ['MIT OpenCourseWare', 'A "free and open collection of material from thousands of MIT courses"', 'Self-directed; no enrollment or account', 'A student who wants to go beyond a first course']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Three kinds of free',
          left: [
            'Free to study and free to certify: freeCodeCamp says its certifications cost nothing, and CS50x offers a free CS50 Certificate of its own beside a paid verified certificate from edX.',
            'Free to study, with credit elsewhere: CS50&rsquo;s FAQ says its certificates are "not accredited academic offerings", and that a high schooler wanting academic credit needs their own school to grant it.'
          ],
          rightH3: 'A free curriculum is not a free class',
          right: [
            'Code.org&rsquo;s CS Principles is a curriculum written for teachers. A student usually meets it through a school that has chosen it, so the practical question is whether your school offers it.',
            'The programming units use JavaScript, and Code.org lists a version built with CMU CS Academy whose programming units use Python instead.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cs50.harvard.edu/x/" rel="noopener" target="_blank">CS50x</a> and its <a class="ag-inline-link" href="https://cs50.harvard.edu/x/faqs/" rel="noopener" target="_blank">FAQs</a>, <a class="ag-inline-link" href="https://www.freecodecamp.org/news/about/" rel="noopener" target="_blank">freeCodeCamp About</a>, <a class="ag-inline-link" href="https://usaco.org/" rel="noopener" target="_blank">USACO</a>, <a class="ag-inline-link" href="https://code.org/educate/csp" rel="noopener" target="_blank">Code.org CSP</a>, <a class="ag-inline-link" href="https://ocw.mit.edu/about/" rel="noopener" target="_blank">MIT OpenCourseWare About</a>, each checked on 17 October 2026. Modern Age Coders has no link with any of these organisations.' }
      ]
    },
    {
      id: 'cs50', tint: 'deep', eyebrow: 'CS50x rules',
      h2: 'CS50x for a high schooler: ages, deadlines, certificates and credit',
      lede: 'CS50x is the free program families ask about most. Its FAQ answers nearly every practical question, and a few answers surprise people.',
      body: [
        { kind: 'table', caption: 'CS50x 2026 rules that matter to high school students, from the course&rsquo;s own pages', head: ['Question', 'What the CS50x pages say'], rows: [
          ['Age', 'The courses are "perhaps best suited for learners ages 12 and up"; younger learners may need a parent&rsquo;s help to sign up for third-party services'],
          ['Experience', '"Two thirds of CS50 students have never taken CS before."'],
          ['What it covers', 'Eleven weeks: Scratch, C, arrays, algorithms, memory, data structures, Python, SQL, artificial intelligence, HTML, CSS and JavaScript, Flask, and a final week'],
          ['Pace', '"This course does not have individual deadlines for assignments."'],
          ['Deadline', 'Currently end of day UTC on 30 June 2027; the term began on 1 January 2026'],
          ['Free certificate', 'At least 70% on each problem set and on the final project'],
          ['School credit', 'Only your official school representatives can grant it; the FAQ points high schoolers to show their teacher or counselor CS50 AP']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The deadline, carefully read',
          left: [
            'The FAQ says that a few months before 30 June 2027 the team re-evaluates the course and may extend it by six or twelve months. Until then, plan as if 30 June 2027 is final.',
            'Work completed with 70% or better during the current term carries forward if a new term begins. Work submitted before 1 January 2026 does not.'
          ],
          rightH3: 'Converting the deadline to US time',
          right: [
            'The deadline is 11:59 PM UTC. Our conversion: on 30 June, US Eastern Daylight Time is four hours behind UTC, so the deadline falls at 7:59 PM Eastern, 6:59 PM Central, 5:59 PM Mountain and 4:59 PM Pacific that same evening.',
            'Time-zone arithmetic is an easy place to slip, so our advice is simple: submit a day early and the conversion never matters.'
          ] }
      ]
    },
    {
      id: 'score', tint: 'tint', eyebrow: 'The score in code',
      h2: 'CS50&rsquo;s grading rule as a Python program, with a practice set',
      lede: 'The FAQ explains how each problem set is scored: "weighted 75% for correctness and 25% for style", with 70% needed to count as complete. Turning a rule like that into code is a skill in itself.',
      body: [
        { kind: 'code', label: 'Program &middot; a CS50 score checker', lang: 'python', code: SCORE, note: 'Ours. The first print reproduces the FAQ&rsquo;s own example: (7/8 * 0.75) + (0.95 * 0.25) = 0.89375, which the FAQ rounds to 89%.' },
        { kind: 'code', label: 'Output', lang: 'text', code: SCORE_OUT, note: 'Our run in Python 3. Even with a perfect style score, 4 of 8 tests passing cannot reach 70%.' },
        { kind: 'ol', mt: true, items: [
          '<b>Practice 1.</b> With 5 of 8 tests passing, what is the lowest style score that still completes? Our answer: 0.70 minus 0.46875 is 0.23125, divided by 0.25 is 0.925.',
          '<b>Practice 2.</b> Change the program to print the minimum style needed for any number of passing tests, and the word impossible when it is above 1.0.',
          '<b>Practice 3.</b> Explain in one sentence why the weights 0.75 and 0.25 must add up to 1. Then break the rule on purpose and see what the program prints for a perfect submission.'
        ] },
        { kind: 'p', mt: true, html: 'This is the lesson family we teach here: weighted averages and conditionals. The same pattern sits behind a school GPA, a game&rsquo;s damage formula and the AP CSP Create task&rsquo;s procedures, which is why we use it early.' }
      ]
    },
    {
      id: 'usaco', tint: 'deep', eyebrow: 'USACO',
      h2: 'USACO: the free contest route, and how a season runs',
      lede: 'The USA Computing Olympiad is free to enter online and open to everyone, with one limit on who can be selected as a finalist.',
      body: [
        { kind: 'table', caption: 'USACO format and eligibility, from usaco.org (read 17 October 2026)', head: ['Point', 'What USACO publishes'], rows: [
          ['Who can enter', '"All are welcome to participate in online USACO contests and training."'],
          ['Finalists', '"Only pre-college students in the USA are eligible for selection as finalists" for the training camp and the international teams'],
          ['Divisions', 'Bronze, silver, gold and platinum; every new participant starts in bronze'],
          ['A contest', 'Typically "3 or 4 problems", solved in C, C++, Java or Python'],
          ['Time', '"4..5 contiguous hours", started whenever the student chooses inside the contest window'],
          ['2025 to 2026 season', 'Three online contests in early 2026, then a proctored invitational US Open; finalists invited to a training camp in late May']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Promotion, briefly',
          left: [
            'A perfect score earns an in-contest promotion to the next division. Otherwise, promotions follow each contest for everyone above that contest&rsquo;s threshold.',
            'Once promoted, a student never needs to take the lower division again, so progress is permanent.'
          ],
          rightH3: 'Is bronze realistic in a first year?',
          right: [
            'Our view: a student who writes loops, arrays and functions comfortably in one language is ready to attempt bronze problems, and the free training pages are the place to begin.',
            'Our dedicated <a class="ag-inline-link" href="/usaco-preparation-online-coaching">USACO coaching page</a> goes division by division.'
          ] }
      ]
    },
    {
      id: 'ocw', tint: 'tint', eyebrow: 'Going further',
      h2: 'MIT OpenCourseWare and other free next steps',
      lede: 'After a first course, the question changes from "where do I start" to "what next". Two free sources answer it well.',
      body: [
        { kind: 'two',
          leftH3: 'MIT OpenCourseWare',
          left: [
            'OCW has shared MIT course material since 2001. Its About page says there is no enrollment, no start or end date and no account to create, and that materials can be downloaded, modified and reused as long as MIT OpenCourseWare is cited as the source.',
            'It is material, not a class: lecture notes, problem sets and sometimes video. A strong 11th or 12th grader can use it to go deeper into a topic first met in CS50.'
          ],
          rightH3: 'A free online prerequisite',
          right: [
            'MIT&rsquo;s Beaver Works Summer Institute runs online prerequisite courses for its summer program, and its FAQ says they are free for students. They open each February.',
            'For paid and funded summer options, see our <a class="ag-inline-link" href="/summer-research-programs-coding">summer research programs</a> page.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ocw.mit.edu/about/" rel="noopener" target="_blank">MIT OpenCourseWare About</a> and the <a class="ag-inline-link" href="https://bwsi.mit.edu/faq/" rel="noopener" target="_blank">BWSI FAQ</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Sixteen weeks',
      h2: 'Our sixteen-week plan using only free material',
      lede: 'This is our plan for a high schooler starting from zero, using CS50x and USACO training and nothing paid. It assumes five hours a week, so 80 hours in total.',
      body: [
        { kind: 'table', caption: 'Sixteen weeks of free self-study (our plan; the CS50x week names are the course&rsquo;s own)', head: ['Weeks', 'Free material', 'Finished when'], numCols: [], rows: [
          ['1 to 2', 'CS50x Week 0 (Scratch) and the start of Week 1 (C)', 'The Scratch project is submitted'],
          ['3 to 5', 'CS50x Weeks 1 and 2 (C, arrays)', 'Both problem sets at 70% or more'],
          ['6 to 8', 'CS50x Weeks 3 and 4 (algorithms, memory)', 'Can explain binary search out loud'],
          ['9 to 10', 'CS50x Weeks 5 and 6 (data structures, Python)', 'Rewrites one C program in Python'],
          ['11 to 12', 'USACO bronze training problems in Python', 'Two old bronze problems solved unaided'],
          ['13 to 14', 'CS50x Weeks 7 and 8 (SQL, web)', 'A small page that reads from a database'],
          ['15 to 16', 'CS50x final project', 'Submitted, with a short video for family']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the C weeks get more time',
          left: [
            'CS50 teaches memory and pointers in C before moving to Python. For most teenagers those weeks are the hardest, so our plan gives them six weeks out of sixteen.',
            'At five hours a week, weeks 3 to 8 are 30 hours, more than a third of the 80-hour total. That is deliberate.'
          ],
          rightH3: 'What free cannot easily give',
          right: [
            'Free courses are complete as material. What a self-learner often lacks is someone who reads their own code and asks why. That is our view and the part we offer.',
            'Online forums help with errors; a regular teacher helps with habits, which matter more over sixteen weeks.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your student is now',
    h2: 'Four stages for a self-taught high school coder',
    lede: 'The stages we see in teenagers who start with free material.',
    table: { caption: 'From first free lesson to finished project (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Browsing', 'Has watched some lectures, written little code'],
      ['2. Submitting', 'Turns in problem sets, often after many tries'],
      ['3. Finishing', 'Completes a full course and earns its certificate'],
      ['4. Building', 'Starts a project of their own with no instructions']
    ] },
    left: { h3: 'For parents', ps: [
      'The jump from stage 1 to stage 2 is the hardest. Watching is easy; submitting is where the learning starts.',
      'Ask to see the problem set, not the video. Code on the screen is the honest progress report.'
    ] },
    right: { h3: 'For students', ps: [
      'Pick one free course and finish it before starting another.',
      'When stuck for an hour, write down exactly what you expected and what happened. That sentence often solves it.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses that sit well beside free study',
    lede: 'A regular teacher, live online, who looks at the student&rsquo;s own work, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'First language', sub: 'Grades 9 and 10', courses: [
        { code: 'FPHS / ONE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From print to real programs.' },
        { code: 'FPHS / ONE / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'The language of the web.' },
        { code: 'FPHS / ONE / 03', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'CS50 Week 0, with a guide.' }
      ] },
      { num: 'II', h3: 'Exams and contests', sub: 'Grades 10 to 12', courses: [
        { code: 'FPHS / TEST / 01', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CS Principles', blurb: 'With or without a school class.' },
        { code: 'FPHS / TEST / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java for the exam.' },
        { code: 'FPHS / TEST / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms', blurb: 'USACO-style thinking.' }
      ] },
      { num: 'III', h3: 'Projects', sub: 'Strong coders', courses: [
        { code: 'FPHS / MAKE / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web', blurb: 'Beyond CS50&rsquo;s Flask week.' },
        { code: 'FPHS / MAKE / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Track every change.' },
        { code: 'FPHS / MAKE / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon prep', blurb: 'Ship something in a weekend.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'A live teacher beside the free courses',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'A lesson after school, then free practice between.' },
      { time: 'Weekends', l: 'Good for reviewing a week of problem sets.' },
      { time: '1-on-1', l: 'For a student working through CS50 at their own speed.' }
    ],
    cells: [
      { h3: 'Code review', p: 'The teacher reads what the student wrote.' },
      { h3: 'No duplication', p: 'We build on free courses, not around them.' },
      { h3: 'Honest work', p: 'We explain concepts; the student writes the answers.' },
      { h3: 'Contest practice', p: 'USACO bronze problems, discussed after solving.' },
      { h3: 'Any state', p: 'Live online, in your own time zone.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty learners, or a single student.' }
    ]
  },

  projectsH2: 'What our high school students have made',
  projectsLede: 'A sample of learner projects, from small tools to complete sites. See the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Parents&rsquo; Google reviews, reproduced without edits.',

  fees: {
    h2: 'Fees',
    lede: 'Everything on this page except our classes costs nothing. Our lessons are charged monthly in US dollars, and families can stop at the end of any month, which suits a student who wants a teacher only for the hardest stretch.',
    free: ['A free first lesson', 'Bring your CS50 progress', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher for one student', 'Your pace, your course', 'Code reviewed every week']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Free coding programs for high school students: common questions',
    items: [
      { q: 'Is CS50x really free?', a: 'Yes. Anyone may take it free through OpenCourseWare and earn a free CS50 Certificate with at least 70% on every problem set and the final project. A verified certificate from edX is a separate paid option.' },
      { q: 'Can a high school student get credit for CS50x?', a: 'Only through their own school. The CS50 FAQ says its certificates are not accredited academic offerings and that only official school representatives can grant academic credit.' },
      { q: 'What is the CS50x deadline?', a: 'The FAQ gives end of day UTC on 30 June 2027 for the term that began on 1 January 2026. There are no deadlines for individual assignments.' },
      { q: 'How old do you need to be for CS50x?', a: 'The FAQ points to learners aged 12 and up, and says younger learners may need a parent to help them sign up for the free third-party services the course uses.' },
      { q: 'Is freeCodeCamp free, including certifications?', a: 'Its About page says every aspect of freeCodeCamp is 100% free, including the courses, the projects and the certifications. It describes itself as a 501(c)(3) public charity.' },
      { q: 'Who can enter USACO?', a: 'USACO says all are welcome to participate in its online contests and training. Only pre-college students in the USA can be selected as finalists for its training camp.' },
      { q: 'Which languages does USACO accept?', a: 'C, C++, Java and Python. A contest typically has 3 or 4 problems and lasts four to five contiguous hours within a longer window.' },
      { q: 'Is Code.org CS Principles a free class my teen can join?', a: 'It is a free year-long curriculum for grades 9 to 12 that schools and teachers use. A student usually takes it through a school that has chosen to offer it.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Why pay for classes when good courses are free?', a: 'You may not need to. Many students do well alone. A live teacher helps when a student stalls, wants feedback on their own code, or needs a steady weekly rhythm.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US high schoolers learning to code.',
    items: [
      { href: '/usaco-preparation-online-coaching', label: 'USACO coaching', p: 'From bronze upward.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles', p: 'The exam and the Create task.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'What strong students add.' },
      { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers', p: 'Mostly free to attend.' },
      { href: '/online-coding-classes-cost', label: 'Online coding classes cost', p: 'When paying makes sense.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page for US families.' },
      { href: '/computer-science-internships-for-high-school-students', label: 'CS internships for high school students', p: 'CS internships for high schoolers: real 2027 rules, age lines and a readiness plan.' },
      { href: '/coding-bootcamp-for-teens', label: 'Coding bootcamp for teens', p: 'Coding bootcamp for teens: the format, free tools and an eight-week plan.' },
      { href: '/homeschool-computer-science-high-school-credit', label: 'Homeschool CS high school credit', p: 'Homeschool CS credit in NY, PA and TX, from the state sources, with a template.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Bring whatever free course your student is on, even if they stalled in week two. The first lesson starts from their last problem set and plans the next four weeks.',
    readFirst: 'Before booking, you can read <a class="ag-inline-link" href="/how-we-teach">how a lesson works</a> step by step, or browse the <a class="ag-inline-link" href="/courses">course syllabuses</a>.',
    note: 'Lessons are taught over video by teachers based in India. US families can message us on WhatsApp for the quickest reply.',
    formNote: 'The first lesson costs nothing and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Learn for free', links: [
        { href: '/usaco-preparation-online-coaching', label: 'USACO coaching' },
        { href: '/hackathons-for-high-school-students', label: 'High school hackathons' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/online-coding-classes-cost', label: 'Coding classes cost' }
      ] }
    ],
    bottomRight: 'Seventy percent, on every set'
  },

  personalityCss: `
.ag-root.ag-fphs .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-fphs .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-fphs .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-fphs .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-fphs .ag-steps { gap: 0.8rem; }
.ag-root.ag-fphs .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Read raw on 17 October 2026: CS50x 2026 home, certificate page and FAQs (free via OpenCourseWare, eleven weeks, two thirds new to CS, ages 12 and up, 70% on every set for a free certificate, 75/25 weighting with the FAQ example, no assignment deadlines, deadline 30 June 2027, term began 1 January 2026, not accredited, credit only via school); freeCodeCamp About (501(c)(3) public charity, 100% free incl. certifications); USACO home and instructions (free training, four contests a year, open to all, pre-college US finalists, bronze to platinum, 3 or 4 problems, C/C++/Java/Python, 4 to 5 hours, 2025 to 2026 season format); Code.org CSP (free year-long, grades 9-12, AP CSP endorsed, JavaScript, CMU CS Academy Python option); MIT OCW About (since 2001, thousands of courses, no account); BWSI FAQ (online prerequisites free).',
    localProject: 'Our sixteen-week free-only plan (5 hours a week, 80 hours; 30 hours on the C weeks), our Python CS50 score checker and output (89.375 for the FAQ example; 4 of 8 tops out at 62.5%), our practice set (style 0.925 needed at 5 of 8), and our UTC to US time conversion for 30 June 2027. Lesson family: weighted averages and conditionals.',
    requiredMentions: ['perhaps best suited for learners ages 12 and up', 'Two thirds of CS50 students have never taken CS before.', 'not accredited academic offerings', 'This course does not have individual deadlines for assignments.', 'weighted 75% for correctness and 25% for style', '30 June 2027', 'Every aspect of freeCodeCamp is 100% free.', 'Hundreds of hours of free on-line training', 'All are welcome to participate in online USACO contests and training.', '4..5 contiguous hours', 'Free year-long curriculum', 'free and open collection of material from thousands of MIT courses', '4 of 8, perfect style: 62.5 not yet'],
    sources: [
      { claim: 'CS50x: free material, eleven weeks, certificate at 70%, ages, deadline, term, credit, weighting.', url: 'https://cs50.harvard.edu/x/faqs/' },
      { claim: 'CS50x home: OpenCourseWare, week list, two thirds new to CS.', url: 'https://cs50.harvard.edu/x/' },
      { claim: 'freeCodeCamp: 501(c)(3) public charity, 100% free including certifications.', url: 'https://www.freecodecamp.org/news/about/' },
      { claim: 'USACO: free training, contests, divisions, season format.', url: 'https://usaco.org/' },
      { claim: 'USACO rules: open to all, finalist eligibility, languages, contest length.', url: 'https://usaco.org/index.php?page=instructions' },
      { claim: 'Code.org CSP: free year-long curriculum, grades 9-12, AP CSP endorsed.', url: 'https://code.org/educate/csp' },
      { claim: 'MIT OCW: free and open material, no enrollment, since 2001.', url: 'https://ocw.mit.edu/about/' }
    ],
    rejectedClaims: [
      'picoCTF: the About page returned 403 to a plain request, so picoCTF is not described.',
      'Khan Academy: the About page returned an empty script shell, so nothing from it is used.',
      'freeCodeCamp job outcomes: their claim, but job promises are outside this page.',
      'Price of the edX verified certificate: not printed; it is described only as a separate paid option.',
      'Named USACO medalists on the home page: individuals are not named.',
      'Any ranking of free programs: refused; the table states facts and our suitability note only.'
    ]
  }
};
