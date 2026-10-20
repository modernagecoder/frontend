'use strict';
// Computer science summer programs for high school students (ag- topic door; US cluster Phase 2, row 25).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/computer-science-summer-programs-for-high-school-students/):
//  - CMU Pre-College, CS Scholars (cmu.edu/pre-college/academic-programs/computer-science-scholars.html): "four-week
//    deep dive into computer science"; "fully funded, merit-based program"; costs covered incl. tuition, housing, meal
//    plans; "You must be 16 years of age by June 26, 2027"; between 10th and 11th grade in summer 2027; eligibility "Be a
//    U.S. citizen or permanent resident with a current U.S. green card", "Be in 10th grade in high school at time of
//    application submission"; "no coding experience is necessary"; Programming Course in Python (variables, functions,
//    conditionals, loops, lists and dictionaries); "participation in any concurrent summer program" not permitted;
//    "documentation of financial need is required"; Program Length "June 26 to July 24, 2027"; Application Deadline
//    "February 1, 2027"; Decision Release "April 1, 2027"; "Resident Only"; two letters of recommendation; test scores
//    optional; essay 300-500 words; completers may be invited to AI Scholars as rising seniors.
//  - CMU Pre-College, Summer Session (cmu.edu/pre-college/academic-programs/summer-session.html): "approximately thirty
//    courses"; college credit at Carnegie Mellon; "does not guarantee admittance to Carnegie Mellon University";
//    residential students take two courses; commuters one or two; "We do not offer any courses online."; "June 26 to
//    August 7, 2027"; Basic Application Deadline "March 1, 2027"; Scholarship Application Deadline "February 1, 2027";
//    16 by program start, sophomore or junior; 9-unit course "21 hours on average", 12-unit course "28 hours on average";
//    grade forgiveness: only A and B grades retained for students in good standing; commuter radius about 30 miles or
//    Allegheny County.
//  - MIT Beaver Works Summer Institute, bwsi.mit.edu home, /apply/, /faq/: "designed for high-achieving students
//    entering their senior year"; "immersive four-week summer program"; register for the online prerequisite course
//    first; "The online course will open for study on 1 February"; summer application sent in March to registered
//    students; "Application has three short essays (500 words or less for each essay)"; "In a grade level no higher
//    than a junior (11th grade)", not below 10th grade; "Accepted students are generally finishing their junior year";
//    2027 classes Monday to Friday, July 5 to August 1; "Virtual: 10am-6pm EDT"; "We will not offer a residential
//    program"; "Our courses reset each year."; "We currently have 14 courses available"; "Students must be living in the
//    United States to be accepted into the summer program."; online prerequisites "free"; summer fee for families above
//    a stated income-and-assets threshold, free for qualifying families. The apply page and FAQ differ on the exact
//    threshold wording and the recommendation date, so neither figure is printed.
//  - COSMOS home page (cosmos-ucop.ucdavis.edu): applications open "JANUARY 6, 2027, 8:00 AM", deadline "FEBRUARY 5,
//    2027, 11:59 PM"; "COSMOS is Limited to California High-School Students Only"; "intensive four-week summer
//    residential"; students "completing grades 8-12"; six UC campuses; "about 150-250 participants"; "The selection is
//    competitive."; "A typical COSMOS student has a GPA of 3.5 or above." Apply and fees pages returned an empty shell.
// Our own material, labelled on the page: the grade-by-grade decision table, the twelve-month calendar, the Python
// deadline counter and its output (counted from 17 October 2026: 107, 111 and 135 days), and the hours arithmetic
// (two 12-unit courses = 56 hours a week; one 9-unit plus one 12-unit = 49; COSMOS window January 6 to February 5 =
// 30 days; CS Scholars June 26 to July 24 = 28 days).
// Lesson family: dates and dictionaries in Python (planning with code).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const COUNTER = `from datetime import date

# 2027-cycle deadlines exactly as each program publishes them
deadlines = {
    "CMU CS Scholars": date(2027, 2, 1),
    "CMU Summer Session, scholarship round": date(2027, 2, 1),
    "COSMOS (California students only)": date(2027, 2, 5),
    "CMU Summer Session, basic round": date(2027, 3, 1),
}

def days_left(deadline, today):
    return (deadline - today).days

today = date(2026, 10, 17)
for name, when in sorted(deadlines.items(), key=lambda pair: pair[1]):
    print(f"{days_left(when, today):4d} days  {name}  ({when.isoformat()})")`;

const OUTPUT = ` 107 days  CMU CS Scholars  (2027-02-01)
 107 days  CMU Summer Session, scholarship round  (2027-02-01)
 111 days  COSMOS (California students only)  (2027-02-05)
 135 days  CMU Summer Session, basic round  (2027-03-01)`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'SUMMER', blurb: 'Four computer science summer programs for high schoolers read from their own 2027 pages, with ages, deadlines, workload and a twelve-month plan.' },
  slug: 'computer-science-summer-programs-for-high-school-students',
  code: 'cssp',
  accent: '#706336',
  accentRationale: 'Computer science summer programs for high school students: #706336, a muted olive-brass from the allocation sheet, far from the other US accents and readable on every paper colour',
  pageType: 'market',
  market: US,
  routeLabel: 'CS summer programs for high school students',
  title: 'CS Summer Programs for High School Students: 2027 Guide',
  description: 'Computer science summer programs for high school students, read from their own 2027 pages: who qualifies, deadlines, workload, cost rules and a 12-month plan.',
  ogDescription: 'CMU CS Scholars, CMU Summer Session, MIT Beaver Works and COSMOS from their own 2027 pages: ages, grades, deadlines and weekly hours, plus our month-by-month plan.',
  twitterDescription: 'Four CS summer programs for high schoolers, from their own 2027 pages.',
  pageName: 'Computer Science Summer Programs for High School Students',
  webPageDescription: 'A guide for US high school students and parents to four computer science summer programs, built from each program&rsquo;s own 2027 page, with a decision table, a calendar and a Python deadline counter.',
  courseDescription: 'Live online Python and computer science classes for US high school students preparing for selective summer programs, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'CS summer programs for high schoolers',
  navLinks: [
    { href: '#programs', label: 'Four programs' },
    { href: '#hours', label: 'Workload' },
    { href: '#bwsi', label: 'The online route' },
    { href: '#decide', label: 'By grade' },
    { href: '#calendar', label: 'Twelve months' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; The 2027 cycle',
  h1: 'Computer science summer programs for high school students',
  lede: 'Most strong computer science summer programs for high school students close their applications in winter, months before school lets out, and several set firm age and grade lines. We read four of them from their own 2027 pages: Carnegie Mellon&rsquo;s CS Scholars and Pre-College Summer Session, MIT&rsquo;s Beaver Works Summer Institute, and California&rsquo;s COSMOS. Below are their published rules side by side, what a week of work looks like in their own hour counts, a table of which program fits which grade, and the twelve-month plan our teachers use so a student arrives at each deadline with real code behind the application.',
  secondaryCta: { href: '#calendar', label: 'See the twelve-month plan' },
  wa: 'Hello Modern Age Coders, my high schooler in the US is looking at computer science summer programs for 2027. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Python taught from the first lesson',
  spec: [
    ['Grades', '9 to 12'],
    ['Programs read', 'CMU, MIT BWSI, COSMOS'],
    ['Cycle', 'Summer 2027'],
    ['Earliest deadline', 'February 1, 2027'],
    ['Our part', 'Live Python and CS classes'],
    ['Group', 'A batch, or one to one'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'For summer 2027, Carnegie Mellon&rsquo;s CS Scholars (fully funded, four weeks, for rising juniors) closes on February 1, 2027; COSMOS (California students only) closes on February 5, 2027; MIT Beaver Works requires a free online prerequisite course that opens on February 1. Modern Age Coders is not one of these programs: we teach the Python and problem solving they assume, over live video, as a group class or privately.',

  picks: {
    eyebrow: 'Get ready with a teacher',
    h2: 'The courses that build what these programs expect',
    lede: 'Python first, then problem solving, then a portfolio piece. Each course is live, with the student&rsquo;s own code reviewed.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'CSSP / 01', title: 'Python for teens', note: 'For 13 to 18 year olds, in the language CS Scholars uses.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'CSSP / 02', title: 'Problem solving and algorithms', note: 'For 13 to 18 year olds: lists, dictionaries, stepwise thinking.' },
      { course: 'ap-computer-science-principles-exam-prep-course', code: 'CSSP / 03', title: 'AP Computer Science Principles', note: 'High school. The Create task plus the exam.' }
    ]
  },

  sections: [
    {
      id: 'programs', tint: 'tint', eyebrow: 'Four programs',
      h2: 'Four computer science summer programs, from their own 2027 pages',
      lede: 'This is not a ranking. Each row holds only what that program publishes about itself for the 2027 cycle, read on 17 October 2026. Programs change their rules every year, so check the live page before applying.',
      body: [
        { kind: 'table', caption: 'Computer science summer programs for high school students, 2027 cycle, from each program&rsquo;s own page', head: ['Program', 'Who it is for', 'When and where', 'Deadline'], rows: [
          ['CMU CS Scholars', '16 by June 26, 2027; in 10th grade when applying; US citizen or permanent resident', 'June 26 to July 24, 2027, residential in Pittsburgh', 'February 1, 2027 (decisions April 1, 2027)'],
          ['CMU Pre-College Summer Session', '16 by the start date; a current sophomore or junior', 'June 26 to August 7, 2027, resident or commuter; in person only', 'Scholarship round February 1, 2027; basic round March 1, 2027'],
          ['MIT Beaver Works Summer Institute', 'Grades 10 to 11 at application, generally finishing junior year; living in the US', 'July 5 to August 1, 2027, Monday to Friday; some courses virtual, some at MIT', 'A free online prerequisite course first; it opens February 1'],
          ['COSMOS', 'California high school students completing grades 8 to 12', 'Four weeks, residential, at one of six University of California campuses', 'Opens January 6, 2027; closes February 5, 2027, 11:59 PM']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What CS Scholars actually teaches',
          left: [
            'Carnegie Mellon describes CS Scholars as a "four-week deep dive into computer science" and a "fully funded, merit-based program": tuition, housing, meal plans and some field trips are covered. Because it is fully funded, documentation of financial need is part of every application.',
            'The programming course is in Python and covers variables, functions, conditionals, loops, lists and dictionaries, testing and debugging. The page says plainly that "no coding experience is necessary", and that students who complete it may be invited back to the AI Scholars program the following summer.'
          ],
          rightH3: 'What COSMOS publishes about selection',
          right: [
            'COSMOS is a four-week residential program run across six University of California campuses: Davis, Irvine, Los Angeles, Merced, San Diego and Santa Cruz. Students apply to one campus.',
            'Its home page is unusually direct: each campus can take "about 150-250 participants", "The selection is competitive." and "A typical COSMOS student has a GPA of 3.5 or above." It is open only to California high school students.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.cmu.edu/pre-college/academic-programs/computer-science-scholars.html" rel="noopener" target="_blank">CMU CS Scholars</a>, <a class="ag-inline-link" href="https://www.cmu.edu/pre-college/academic-programs/summer-session.html" rel="noopener" target="_blank">CMU Pre-College Summer Session</a>, <a class="ag-inline-link" href="https://bwsi.mit.edu/faq/" rel="noopener" target="_blank">MIT BWSI FAQ</a> and <a class="ag-inline-link" href="https://bwsi.mit.edu/apply/" rel="noopener" target="_blank">application page</a>, <a class="ag-inline-link" href="https://cosmos-ucop.ucdavis.edu/" rel="noopener" target="_blank">COSMOS</a>, all read 17 October 2026. We are not connected with Carnegie Mellon University, MIT or the University of California, and we make no prediction about any admission decision.' }
      ]
    },
    {
      id: 'hours', tint: 'deep', eyebrow: 'The workload',
      h2: 'What a week of summer computer science really costs in hours',
      lede: 'College-credit summer courses move at twice the normal pace. Carnegie Mellon is one of the few programs that publishes the hours, and the numbers are worth reading before a student commits.',
      body: [
        { kind: 'table', caption: 'Weekly hours in CMU Pre-College Summer Session, from the program&rsquo;s FAQ, with our totals', head: ['Course load', 'Published hours per week', 'Our total for six weeks'], numCols: [1, 2], rows: [
          ['One 9-unit course', '21', '126'],
          ['One 12-unit course', '28', '168'],
          ['A 9-unit and a 12-unit course (our sum)', '49', '294'],
          ['Two 12-unit courses (our sum)', '56', '336']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table',
          left: [
            'The FAQ says a student in a 9-unit course "should expect to spend 21 hours on average on that class per week", and 28 hours for a 12-unit course, both including class meetings. Residential students must take two courses for all six weeks.',
            'Our arithmetic: two 12-unit courses come to 56 hours a week, more than a full-time job. That is why the program warns against summer jobs or test prep alongside it.'
          ],
          rightH3: 'What the grades mean',
          right: [
            'Summer Session courses are the same undergraduate courses CMU students take, graded A, B, C, D or R. For Pre-College students in good standing, only A and B grades stay on the permanent Carnegie Mellon transcript.',
            'The page is also clear that admission to Summer Session "does not guarantee admittance to Carnegie Mellon University" as an undergraduate, and that "We do not offer any courses online."'
          ] },
        { kind: 'p', mt: true, html: 'For CS Scholars, the published day runs Monday to Friday from morning into the early evening, with homework and office hours after. The page also rules out any concurrent summer program, virtual or in person, so students choose one summer commitment.' }
      ]
    },
    {
      id: 'bwsi', tint: 'tint', eyebrow: 'The online route',
      h2: 'MIT Beaver Works: a summer program you qualify for by studying online first',
      lede: 'Beaver Works Summer Institute works differently from the others. Admission depends heavily on a free online course taken in the spring, so a student&rsquo;s preparation is visible to the selectors.',
      body: [
        { kind: 'ol', items: [
          '<b>Register for the online prerequisite course.</b> Students can self-register; a teacher nomination is not required for the online course.',
          '<b>Study from 1 February.</b> The apply page says "The online course will open for study on 1 February". The FAQ says the online prerequisite courses are free.',
          '<b>Work through the course properly.</b> The FAQ says grades in the online course are an important part of enrollment decisions, and grades are evaluated on a curve within each course.',
          '<b>Complete the summer application sent in March.</b> It has "three short essays (500 words or less for each essay)", a teacher or mentor recommendation and parent details.',
          '<b>Plan the summer.</b> For 2027, classes run Monday to Friday, July 5 to August 1. Virtual classes run 10am to 6pm Eastern; in-person classes are on the MIT campus.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Rules families miss',
          left: [
            'The FAQ is blunt that "Our courses reset each year." A student who finished an online course last year must take it again to apply for this summer.',
            'There is no residence hall. The FAQ says "We will not offer a residential program", and under MIT rules for minors an adult must stay with an in-person student for the month.'
          ],
          rightH3: 'Who can apply, and the cost rule',
          right: [
            'Applicants must be in a grade no higher than 11th and not below 10th, and "Students must be living in the United States to be accepted into the summer program." Anyone may take the online courses.',
            'BWSI says the summer program is free for qualifying families and charges a fee to families above an income-and-assets threshold it states on its apply page and FAQ. Housing is never included. Read the current wording there.'
          ] },
        { kind: 'p', mt: true, html: 'Beaver Works lists 14 summer courses, among them CogWorks, Cyber Operations, Medlytics and Quantum Software. Many require the Python Core course alongside the course a student wants, which is why Python comes first in our plan below.' }
      ]
    },
    {
      id: 'code', tint: 'deep', eyebrow: 'A practice program',
      h2: 'Count down the 2027 deadlines in ten lines of Python',
      lede: 'A small program that uses exactly the ideas the CS Scholars syllabus lists: variables, a dictionary, a function and a loop. It is ours, and it runs in any Python 3 install.',
      body: [
        { kind: 'code', label: 'Program &middot; a deadline counter', lang: 'python', code: COUNTER, note: 'The four dates are the 2027 deadlines the programs publish. Change today to the real date and the program recounts.' },
        { kind: 'code', label: 'Output, run on 17 October 2026', lang: 'text', code: OUTPUT, note: 'Our run. Python sorts by the date in each pair; the two February 1 entries keep the order they were written in, because Python&rsquo;s sort is stable.' },
        { kind: 'two', mt: true,
          leftH3: 'Extend it as practice',
          left: [
            'Add the BWSI online course start as a second kind of date, a start rather than a deadline, and print the two kinds differently.',
            'Then make the program warn when any deadline is under 30 days away. Our arithmetic says COSMOS is open for exactly 30 days, January 6 to February 5, so the warning would fire for the whole window.'
          ],
          rightH3: 'Why a planning script is a good first project',
          right: [
            'It solves a real problem the student has right now, so they care whether it is correct. Every bug shows up as a wrong number of days.',
            'Written up honestly, a tool like this is also something to describe in an application essay about why the student enjoys programming.'
          ] }
      ]
    },
    {
      id: 'decide', tint: 'tint', eyebrow: 'By grade',
      h2: 'Which program fits which grade in summer 2027',
      lede: 'Our reading of the published rules, set out by the grade a student is in during the 2026 to 2027 school year. Every line still depends on the program&rsquo;s own final decision.',
      body: [
        { kind: 'table', caption: 'Programs a student can apply to for summer 2027, by current grade (our reading of each program&rsquo;s rules)', head: ['Grade in 2026 to 2027', 'Programs whose published rules fit', 'Our suggestion'], rows: [
          ['8th grade, in California', 'COSMOS (completing grades 8 to 12)', 'Apply if the student already codes; otherwise build Python this year'],
          ['9th grade', 'COSMOS if in California; BWSI online courses are open to anyone', 'Take the BWSI online course as practice, even before eligibility'],
          ['10th grade', 'CMU CS Scholars; CMU Summer Session if 16 by June 26; BWSI; COSMOS in California', 'The widest choice of any year; decide by December'],
          ['11th grade', 'CMU Summer Session; BWSI; COSMOS in California', 'BWSI fits the rising-senior summer it describes'],
          ['12th grade', 'Only COSMOS, whose page lists students completing grades 8 to 12; confirm with COSMOS for a graduating senior', 'Look at college courses and the research programs as well']
        ] },
        { kind: 'p', mt: true, html: 'Research-style programs such as RSI, SSP and MIT PRIMES work very differently and are covered on our <a class="ag-inline-link" href="/summer-research-programs-coding">summer research programs page</a>. For activities that run all year, see <a class="ag-inline-link" href="/computer-science-extracurriculars">computer science extracurriculars</a>.' }
      ]
    },
    {
      id: 'calendar', tint: 'deep', eyebrow: 'Twelve months',
      h2: 'Our twelve-month plan toward a 2027 summer program',
      lede: 'This is our plan for a 10th grader starting in October 2026 with little or no code. It assumes about four hours a week: two live lessons plus practice.',
      body: [
        { kind: 'table', caption: 'October 2026 to September 2027 (our plan; the dates in bold type are the programs&rsquo; own)', head: ['Month', 'What the student does', 'Done when'], rows: [
          ['October 2026', 'Start Python: variables, loops, functions', 'Writes the deadline counter above unaided'],
          ['November 2026', 'Lists, dictionaries, debugging', 'Fixes three of their own bugs and explains each'],
          ['December 2026', 'Choose programs; ask two teachers for recommendations', 'A shortlist and two yes answers'],
          ['January 2027', 'Essays drafted; <b>COSMOS opens January 6</b>', 'Drafts read by a teacher'],
          ['February 2027', '<b>CS Scholars closes February 1</b>; <b>BWSI online course opens February 1</b>; <b>COSMOS closes February 5</b>', 'Applications in, BWSI course started'],
          ['March 2027', '<b>CMU Summer Session basic round closes March 1</b>; BWSI summer application', 'Every application submitted'],
          ['April to June 2027', 'Keep building one real project', 'A finished project on a public page'],
          ['July to September 2027', 'The program, or our live summer classes', 'One project written up for next year']
        ] },
        { kind: 'p', mt: true, html: 'Our arithmetic: four hours a week from mid-October to February 1 is about 15 weeks, roughly 60 hours of Python before the first deadline. That is enough to write and explain small programs like the one above, which is what a "no coding experience is necessary" program still rewards in an essay.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your student is now',
    h2: 'Four stages on the way to a strong summer application',
    lede: 'The places students usually start from when they first look at these programs.',
    table: { caption: 'From curious to ready (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Interested', 'Likes computers, has not written a program'],
      ['2. Beginner', 'Writes short Python programs with help'],
      ['3. Independent', 'Plans, writes and debugs a small program alone'],
      ['4. Applicant', 'Has one finished project and can explain every line']
    ] },
    left: { h3: 'For parents', ps: [
      'A 10th grader at stage 1 in October can reach stage 3 by February with steady weekly work.',
      'Recommendation letters come from teachers who have seen effort. Ask early in the fall.'
    ] },
    right: { h3: 'For students', ps: [
      'Pick programs by the rules first, then by interest. A program you are not eligible for is not a choice.',
      'Keep notes on what you built and what broke. Essays are easier when the stories are written down.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for high school students heading for summer CS',
    lede: 'All are live online with one regular teacher who reads the student&rsquo;s code, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Grades 9 and 10', courses: [
        { code: 'CSSP / BASE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The first language, properly.' },
        { code: 'CSSP / BASE / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Code that runs in the browser.' },
        { code: 'CSSP / BASE / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Show the work, version by version.' }
      ] },
      { num: 'II', h3: 'Depth', sub: 'Grades 10 and 11', courses: [
        { code: 'CSSP / DEEP / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for teens', blurb: 'Data structures and reasoning.' },
        { code: 'CSSP / DEEP / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java and the exam.' },
        { code: 'CSSP / DEEP / 03', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CS Principles', blurb: 'Broad CS and the Create task.' }
      ] },
      { num: 'III', h3: 'Projects', sub: 'Grades 11 and 12', courses: [
        { code: 'CSSP / BUILD / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web', blurb: 'A web app with a database.' },
        { code: 'CSSP / BUILD / 02', slug: 'react-for-teens-complete-masterclass', title: 'React for teens', blurb: 'Interfaces people can use.' },
        { code: 'CSSP / BUILD / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon prep', blurb: 'Build fast, then present.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons through the application year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in Eastern, Central, Mountain or Pacific time.' },
      { time: 'Weekends', l: 'Useful in the weeks before a February deadline.' },
      { time: '1-on-1', l: 'Fitted around one student&rsquo;s programs and dates.' }
    ],
    cells: [
      { h3: 'Python first', p: 'The language most of these programs start from.' },
      { h3: 'Real projects', p: 'Code a student can describe in an essay.' },
      { h3: 'Deadline map', p: 'The twelve months above, adjusted to the student.' },
      { h3: 'Essay feedback', p: 'On the technical story, not ghost-writing.' },
      { h3: 'Every state', p: 'Online, so location never limits the choice.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty learners, or one to one.' }
    ]
  },

  projectsH2: 'Projects our high school students have built',
  projectsLede: 'Work by our learners, from first Python tools to full web apps. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Google reviews from parents, quoted as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Applying to a summer program costs what each program sets; our fee is only for teaching. Classes are paid monthly in US dollars, so a family can cover the months before the deadlines and stop whenever they choose.',
    free: ['A free first lesson', 'Bring your program shortlist', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A mentor to yourself', 'Your programs, your dates', 'Your own project']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Computer science summer programs for high schoolers: common questions',
    items: [
      { q: 'When do computer science summer programs for high school students close for 2027?', a: 'Earlier than most families expect. CMU CS Scholars closes February 1, 2027, COSMOS closes February 5, 2027, and the CMU Summer Session basic round closes March 1, 2027.' },
      { q: 'Is CMU CS Scholars free?', a: 'Carnegie Mellon describes it as fully funded: tuition, housing, meal plans and some field trips are covered. The page says documentation of financial need is required with the application.' },
      { q: 'Do you need coding experience for CS Scholars?', a: 'No. The 2027 page says no coding experience is necessary. Applicants must be 16 by June 26, 2027, in 10th grade when applying, and a US citizen or permanent resident.' },
      { q: 'How does MIT Beaver Works Summer Institute admission work?', a: 'Students register for a free online prerequisite course that opens on February 1, then complete a summer application in March. The FAQ says online course grades are an important part of the decision.' },
      { q: 'Can a senior apply to these programs?', a: 'Mostly not, as published for 2027. BWSI takes students no higher than 11th grade, CS Scholars wants 10th graders, and CMU Summer Session wants sophomores or juniors. COSMOS lists students completing grades 8 to 12, so a California senior should ask COSMOS directly.' },
      { q: 'Who can apply to COSMOS?', a: 'Only California high school students. The home page lists applications opening January 6, 2027 and closing February 5, 2027, and says a typical student has a GPA of 3.5 or above.' },
      { q: 'How many hours a week is CMU Summer Session?', a: 'The FAQ gives about 21 hours a week for a 9-unit course and 28 for a 12-unit course, including class. Residential students take two courses, so 49 to 56 hours by our count.' },
      { q: 'Are any of these programs online?', a: 'BWSI runs some courses virtually over Zoom. CMU Summer Session says it offers no courses online, and CS Scholars and COSMOS are residential.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How can Modern Age Coders help?', a: 'We teach the Python and problem solving these programs assume, help a student finish one real project, and keep the twelve-month plan on track. We are not connected with any of these programs.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US high school students who want to go further in computer science.',
    items: [
      { href: '/summer-research-programs-coding', label: 'Summer research programs', p: 'RSI, SSP, PRIMES and how to get ready.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'What counts across the whole year.' },
      { href: '/usaco-preparation-online-coaching', label: 'USACO coaching', p: 'Contest programming, bronze upward.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A', p: 'Java and the AP exam.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'A fall deadline for an app.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page for US families.' },
      { href: '/coding-summer-camp-for-middle-schoolers', label: 'Coding summer camp for middle schoolers', p: 'Coding summer camp for grades 6 to 8: blocks to Python in four weeks.' },
      { href: '/game-design-summer-camp-for-teens', label: 'Game design summer camp for teens', p: 'Game design summer camp for teens: engines, a real script, a six-week plan.' },
      { href: '/free-coding-programs-for-high-school-students', label: 'Free coding programs for high school students', p: 'Free coding programs for high schoolers, checked at the source, with a 16-week plan.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Bring your shortlist and your student&rsquo;s grade. In the first lesson the teacher checks which 2027 rules they meet and starts the Python that the programs build on.',
    readFirst: 'To see a class before booking, the <a class="ag-inline-link" href="/how-we-teach">how we teach</a> page describes one in order, and the <a class="ag-inline-link" href="/courses">courses page</a> lists every syllabus.',
    note: 'Our teachers are in India and teach over video, so there is no US campus to visit. US families usually reach us fastest on WhatsApp.',
    formNote: 'No charge for the first lesson, and no card asked for.'
  },

  footer: {
    cols: [
      { h4: 'High school CS', links: [
        { href: '/summer-research-programs-coding', label: 'Summer research programs' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO coaching' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' }
      ] }
    ],
    bottomRight: 'Count the days to February'
  },

  personalityCss: `
.ag-root.ag-cssp .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-cssp .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-cssp .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-cssp .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-cssp .ag-steps { gap: 1rem; }
.ag-root.ag-cssp .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  dossier: {
    curriculumAuthority: 'Each program&rsquo;s own 2027 pages, read raw on 17 October 2026: CMU CS Scholars (four weeks, fully funded, 16 by June 26 2027, 10th grade, US citizen or permanent resident, no coding experience needed, Python syllabus, June 26 to July 24 2027, deadline February 1 2027, decisions April 1 2027); CMU Pre-College Summer Session (about thirty courses, college credit, in person only, June 26 to August 7 2027, deadlines February 1 and March 1 2027, 21 and 28 hours a week, A and B grades retained); MIT BWSI apply page and FAQ (four weeks for students entering senior year, free online prerequisite opening 1 February, three essays of 500 words or less, grades 10 to 11, courses reset each year, 14 courses, no residential program, July 5 to August 1 2027, US residence); COSMOS home page (California only, January 6 and February 5 2027, grades 8 to 12, six UC campuses, 150 to 250 per campus, typical GPA 3.5).',
    localProject: 'Our grade-by-grade decision table, our twelve-month plan (about 60 hours of Python before February 1), our Python deadline counter and its output (107, 111 and 135 days from 17 October 2026), and our hours arithmetic (49 and 56 hours a week; COSMOS window 30 days). Lesson family: dates and dictionaries in Python.',
    requiredMentions: ['four-week deep dive into computer science', 'fully funded, merit-based program', 'no coding experience is necessary', 'June 26 to July 24, 2027', 'should expect to spend 21 hours on average on that class per week', 'We do not offer any courses online.', 'The online course will open for study on 1 February', 'three short essays (500 words or less for each essay)', 'Our courses reset each year.', 'about 150-250 participants', 'A typical COSMOS student has a GPA of 3.5 or above.', '107 days  CMU CS Scholars'],
    sources: [
      { claim: 'CMU CS Scholars 2027: funding, eligibility, syllabus, dates, deadline.', url: 'https://www.cmu.edu/pre-college/academic-programs/computer-science-scholars.html' },
      { claim: 'CMU Pre-College Summer Session 2027: credit, hours per unit, grading, dates, deadlines.', url: 'https://www.cmu.edu/pre-college/academic-programs/summer-session.html' },
      { claim: 'BWSI: online prerequisite opening 1 February, essays, cost rule, US residence.', url: 'https://bwsi.mit.edu/apply/' },
      { claim: 'BWSI FAQ: grades, 2027 schedule, virtual hours, no residential program, courses reset, 14 courses.', url: 'https://bwsi.mit.edu/faq/' },
      { claim: 'COSMOS: 2027 application window, California only, grades, campuses, selectivity.', url: 'https://cosmos-ucop.ucdavis.edu/' }
    ],
    rejectedClaims: [
      'BWSI fee amount and income threshold: the apply page and FAQ word the threshold differently, so neither figure is printed.',
      'BWSI recommendation due date: April 2 on the apply page, April 3 in the FAQ; not printed.',
      'COSMOS fees and financial aid: the fees and apply pages returned an empty shell to a plain request, so nothing from them is used.',
      'Johns Hopkins CTY summer programs: returned 403, so not described.',
      'CMU CS Scholars applicant background criteria: identity categories, not used.',
      'Acceptance rates for CMU or BWSI: not published on the pages read.',
      'Any ranking of programs, or that our classes raise admission chances: refused.'
    ]
  }
};
